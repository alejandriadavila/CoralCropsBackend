import express from 'express'
import ToDo from '../models/toDo.mjs'

const router = express.Router()

// Find all ToDo List Items
router
    .route("/")
    .get(async(req, res) =>{
        let foundItems = await ToDo.find()
        res.status(200).json({
            data: foundItems
        })
    })
    .post(async(req, res, next) => {
        if (req.body.id && req.body.name && req.body.type && req.body.seedName && req.body.seedCost && req.body.growthTime && req.body.regrowBoolean && req.body.regrowTime && req.body.imgUrl){
            const crop = {
                id: req.body.id,
                name: req.body.name,
                type: req.body.type,
                seedName: req.body.seedName,
                seedCost: req.body.seedCost,
                growthTime: req.body.growthTime,
                regrowBoolean: req.body.regrowBoolean,
                regrowTime: req.body.regrowTime,
                imgUrl: req.body.imgUrl
            }
            await ToDo.push(crop)
            res.send("Crop added to Crop Planner")
        }else res.send(`Error: 400 Insufficient Data`)
    })

router
    .route("/:id")
    .get(async(req, res) =>{
        let foundItems = await ToDo.findById(req.params.id)
        res.status(200).json({
            data: foundItems
        })
    })
    .patch(async(req, res) => {
        if (req.body.id && req.body.name && req.body.type && req.body.seedName && req.body.seedCost && req.body.growthTime && req.body.regrowBoolean && req.body.regrowTime && req.body.imgUrl){
            await ToDo.findOneAndUpdate(req.params.id, req.body)
        }
    })
    .delete(async(req, res) =>{
        await ToDo.findByIdAndDelete(req.params.id)
        res.status(204).json({
            data: "Item was deleted"
        })
    })

export default router