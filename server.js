const express = require("express");
const app = express();

app.use("/api/cars", require("./routes/api/cars"))

app.listen(process.env.PORT || 5001, () => {
    console.log("Server listening on port 5001")
})