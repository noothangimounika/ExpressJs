console.log("Welcome to Express JS")
// console.log("Hello")
// console.log("Hello")

//Create Web Server using Express JS

const express=require("express")

const app=express()

const port=5000
app.get('/apple',(request,response)=>{
    response.send("Apple is red color")
})

//middlewares
app.use((request,response,next)=>{
    if(10<20){
        next()
    }
})

const middleware=((request,response,next)=>{
    if(10<20){
        next()
    }
})


const middleware2=((request,response,next)=>{
    if(10>20){
        next()
    }
    else{
        console.log("sorry you are not allowed in this page")
    }
})


const middleware3=((request,response,next)=>{
    if(10==10){
        next()
    }
    
})


app.get('/home',middleware,(request,response)=>{
    response.send("Hello Iam Home page")
})

app.get('/about',middleware2,(request,response)=>{
    response.send("Hello Iam About page")
})

app.get('/user/:121',middleware3,(request,response)=>{
    response.send("you seacthed for 121")
})

app.listen(port,()=>{
    console.log("server start and running succesfully ...!")
})

