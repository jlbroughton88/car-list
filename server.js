const express = require("express");
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars");
let cars = require("./cars")
console.log(cars)

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("index", {
        title: "Cars",
        cars: cars
    })
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/api/cars", require("./routes/api/cars"))

app.listen(process.env.PORT || 5001, () => {
    console.log("Server listening on port 5001")
})