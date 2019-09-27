const express = require("express");
const uuid = require("uuid/v4");
let cars = require("../../cars")
console.log(cars)
const router = express.Router();


router.get("/", (req, res) => {
    res.json(cars)
})

router.get("/:id", (req, res) => {
    const found = cars.some(car => car.id === parseInt(req.params.id));
   
    if(found) {
        res.send(cars.filter(car => car.id === parseInt(req.params.id)))
    } else (
        res.send(`<h1>This car does not exist in our database.</h1>`)
    )
})

router.post("/", (req, res) => {
    let newCar = req.body;
    newCar.id = uuid()
    cars.push(newCar)
    res.json(cars)
})

router.put("/:id", (req, res) => {
    const found = cars.some(car => car.id === parseInt(req.params.id));

    if(found) {
        let updateThis = cars.find(car => car.id === parseInt(req.params.id))
        if(req.body.brand) { updateThis.brand = req.body.brand }
        if(req.body.year) { updateThis.year = parseInt(req.body.year) }
        if(req.body.model) { updateThis.model = req.body.model }
        res.send(updateThis)

    } else {
        console.log("Could not find this car, please enter a new one")
    }
})

router.delete("/:id", (req, res) => {
    const found = cars.some(car => car.id === parseInt(req.params.id));

    if(found) {
        let deleteThis = cars.find(car => car.id === parseInt(req.params.id))
        let updatedCars = cars.filter(cars => cars !== deleteThis)
        cars = updatedCars;
        res.json(cars)

    } else {
        console.log("Could not delete this vehicle as it does not exist in the database")
    }
})

module.exports = router;