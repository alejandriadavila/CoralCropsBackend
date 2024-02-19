import express from 'express'
import Spring from '../models/spring.mjs'

const router = express.Router()

// Find all Spring Crops
router.get("/", async(req, res) =>{
    let foundCrops = await Spring.find()
    res.status(200).json({
        data: foundCrops
    })
})

// Find all Spring Crops based on whether or not they regrow
router.get("/:regrowBoolean", async(req, res) =>{
    const boolean = Spring.filter(function(crop){
        return crop.regrowBoolean === req.params.regrowBoolean
    })
    res.json(boolean)
})

export default router