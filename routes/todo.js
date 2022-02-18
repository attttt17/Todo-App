const router = require('express').Router()

const Todo = require("../models/Todo")

router.post("/add/todo",(req,res)=>{
    const {todo}  = req.body
    
    const newTodo= new Todo({todo})
    
    
    newTodo.save()
    .then(()=>{
        console.log("Succes Fulley Added")
        res.redirect("/")
    })
    .catch(err=> console.log(err))
})

router.get("/:_id",(req,res)=>{
    const id= req.params
    Todo.deleteOne({id})
    .then(()=>{
        console.log("Delete")
        res.redirect('/')
    })
   .catch(err => console.log(err))


})




module.exports = router