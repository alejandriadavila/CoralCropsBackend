import express from 'express'
import ToDo from '../models/toDo.mjs'

const router = express.Router()

// Find all ToDo List Items
router.get("/", async(req, res) =>{
    let foundItems = await ToDo.find()
    res.status(200).json({
        data: foundItems
    })
})

// Delete a record by ID
router.delte("/:id", async(req, res) =>{
    await ToDo.findByIdAndDelete(req.params.id)
    res.status(204).json({
        data: "Item was deleted"
    })
})

// Create a new ToDo List Item
router.post("/", async(req, res) =>{
    const newToDo = new ToDo(req.body)
    await newToDo.save()
    res.status(201).json({})
})

export default router