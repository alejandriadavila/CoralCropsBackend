import express from "express"
import dotenv from "dotenv"
dotenv.config()

// import mongoose
import mongoose from "mongoose"

// Connection string
const ATLAS_URI = process.env.ATLAS_URI
const db = mongoose.connection

mongoose.connect(ATLAS_URI)

db.on("error", (err) => console.log(err.message) + "is mongodb not running?")
db.on("open", () => console.log("mongo connected"))
db.on("close", () => console.log("mongo disconnected"))

const PORT = process.env.PORT
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to the CoralCrops API")
})

import fall from "./routes/fall.mjs"
import spring from "./routes/spring.mjs"
import summer from "./routes/summer.mjs"
import winter from "./routes/winter.mjs"
import toDo from "./routes/toDo.mjs"

app.use("/fall", fall)
app.use("/spring", spring)
app.use("/summer", summer)
app.use("/winter", winter)
app.use("/toDo", toDo)

// Global error handling
app.use((err, _req, res, next) => {

})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})