import express from 'express'
import Winter from '../models/winter.mjs'

const router = express.Router()

// Find all Winter Crops
router.get("/", async(req, res) =>{
    let foundCrops = await Winter.find()
    res.status(200).json({
        data: foundCrops
    })
})

// Find all Winter Crops based on whether or not they regrow
router.get("/:regrowBoolean", async(req, res) =>{
    const boolean = Winter.filter(function(crop){
        return crop.regrowBoolean === req.params.regrowBoolean
    })
    res.json(boolean)
})

export default router