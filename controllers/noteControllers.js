const Note = require("../modal/noteModal");
const asyncHandler = require("express-async-handler");

//post note 
const createNote =asyncHandler(async(req,res)=>{
    try{
        const {title, content, category} = req.body;
        const note = await Note.create({
            title,
            content,
            category,
            user: req.user._id
        })
        res.status(201).json({note,message:"Note created successfully"})
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//get notes 
const getNotes=asyncHandler(async(req,res)=>{
    try{
        const notes = await Note.find({user: req.user._id}).sort({createdAt: -1});
        res.status(200).json({notes,message:"Notes fetched successfully"})
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
});

//update note
const updateNote=asyncHandler(async(req,res)=>{
    try{
        const note = await Note.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true});
        if(!note){
            return res.status(404).json({message:"Note not found"})
        }
        res.status(200).json({note,message:"Note updated successfully"})
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
});


//delete note
const deleteNote=asyncHandler(async(req,res)=>{
    try{
        const note = await Note.findByIdAndDelete(req.params.id);
        if(!note){
            return res.status(404).json({message:"Note not found"})
        }
        res.status(200).json({message:"Note deleted successfully"})
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
});
module.exports = {createNote,getNotes,updateNote,deleteNote}