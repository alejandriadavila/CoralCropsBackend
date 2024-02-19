import mongoose from "mongoose"

const winterSchema = new mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    seedName: String,
    growthTime: Number,
    regrowBoolean: String,
    regrowTime: Number,
    imgUrl: String
})

export default mongoose.model("Winter", winterSchema)