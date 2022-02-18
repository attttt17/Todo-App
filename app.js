const express = require('express')
const mongoose = require('mongoose')

const app = express()
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/myapp'

mongoose.connect(dbUrl,{
    useNewUrlParser :true,
    useUnifiedTopology:true
})

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.set("view engine",'ejs')




app.use(require("./routes/index"))
app.use(require("./routes/todo"))






const PORT = 3000 || Process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is up ${PORT}`)
})