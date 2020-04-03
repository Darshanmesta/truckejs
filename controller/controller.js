const express=require('express')
const mClient=require('mongodb').MongoClient
const url="mongodb://localhost:27017"
const assert=require('assert')
let data;
let database="mydb2"

mClient.connect(url,(err,result)=>{
    if(err){
        assert.equal(null,err)
    }
    else{
        data=result.db(database)
    }
})

module.exports={
    home:(req,res)=>{
        // res.render('index')

        data.collection('mulcol1').find().toArray((err,result)=>{
            if(err){
                assert.equal(null,err)
            }
            else{
                res.render('index',{posts:result})
            }
        })
    },
    create:(req,res)=>{
        res.render('create')
    },

    newProduct:(req,res)=>{

     

       let name= req.body.name
       console.log(name)
       let password=req.body.password
       let email=req.body.email
       let desc= req.body.desc


        
    

       
        data.collection('mulcol1').insertOne({
           
            name:name,
            password:password,
            email:email,
            desc:desc
           
    },(err,result)=>{
            if(err){
                assert.equal(null,err)
            }
            else{
                console.log("Data insertion success")
            }
        })

        res.redirect('/')

    },

    edit:(req,res)=>{
        let p1= req.params.name
     

      data.collection('mulcol1').find({name:p1}).toArray((err,result)=>{
          if(err){
              assert.equal(null,err)
          }
          else{
              res.render('update',{post:result})
              console.log(result)
          }
      })
    },
    update:(req,res)=>{
        let id=req.params.name
        let name= req.body.name
        console.log(name)
        let password=req.body.password
        let email=req.body.email
        let desc= req.body.desc


        data.collection('mulcol1').update({name:id},{
            $set:{
                name:name,
                password:password,
                email:email,
                desc:desc

            },
function(err,result){
    if(err){
        assert.equal(null,err)
    }

    else{
        console.log("The data updated successfully")
    }
}
        }
            
        )

      res.redirect('/')
    },


    delete:(req,res)=>{
        let id=req.params.name

        data.collection('mulcol1').deleteOne({name:id},(err,result)=>{
            if(err){
                assert.equal(null,err)
            }
            else{
                console.log("Data deletion success")
            }
        })

        res.redirect('/')
    }
}