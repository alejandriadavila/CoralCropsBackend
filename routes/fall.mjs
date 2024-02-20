import express from 'express'
import Fall from '../models/fall.mjs'

const router = express.Router()

// Find all Fall Crops
router.get("/", async(req, res) =>{
    let foundCrops = await Fall.find({})
    res.status(200).json({
        data: foundCrops
    })
})

// Find all Fall Crops based on whether or not they regrow
router.get("/:regrowBoolean", async(req, res) =>{
    let boolean = await Fall.find({regrowBoolean: req.params.regrowBoolean})
    res.json(boolean)
})

export default router