import express from 'express'
import Summer from '../models/summer.mjs'

const router = express.Router()

// Find all Summer Crops
router.get("/", async(req, res) =>{
    let foundCrops = await Summer.find()
    res.status(200).json({
        data: foundCrops
    })
})

// Find all Summer Crops based on whether or not they regrow
router.get("/:regrowBoolean", async(req, res) =>{
    let boolean = await Summer.find({regrowBoolean: req.params.regrowBoolean})
    res.json(boolean)
})

export default router