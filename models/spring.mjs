import mongoose from "mongoose"

const springSchema = new mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    seedName: String,
    growthTime: Number,
    regrowBoolean: String,
    regrowTime: Number,
    imgUrl: String
})

export default mongoose.model("Spring", springSchema)