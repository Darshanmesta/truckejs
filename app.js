const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const route=require('./route/route')
const PORT=4500

app.set('views','./views')
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use('/',route)


app.listen(PORT,()=>{
    console.log(`The Server is up and running at PORT ${PORT}`)
})