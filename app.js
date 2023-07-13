const express=require("express")
const app=express()
const PORT=3000
const path = require('path');
const fruits=["apple","banana","mango","grapes"]
const pool=require('./db')


app.use(express.json())
const frontend = path.join(__dirname,'../frontend/vite-project/dist')
app.use(express.static(frontend))



app.post('/contact',(req,res)=>{
    const data =req.body.name;
    console.log(data);
    res.json({message:"messgage recieved", data,}).status(200).end()
})

app.get("/about",(req,res)=>{``
    pool.query('select * from movies',(error, results) => {
            if (error) {
              throw error
            }
            res.json({ 
                "message":"successful get request",
                "data":results.rows
            })
          })

})

app.post("/about",(req,res)=>{
    const data=req.body
    pool.query(' insert into movies(movie_id,movie_name,movie_genre,imdb_ratings) values($1, $2,$3,$4) RETURNING *',[data.id,data.name,data.genra,data.rating],(error, results) => {
        if (error) {
          console.log(error)
        }
        res.json({ 
            "message":"successful get request",
            "data":results.rows
        })
      })
      })

app.put("/about",(req,res)=>{
    res.json({
        "message":"successful put request",
        "data":"blog data"
    })                  
})

app.delete("/about",(req,res)=>{
    res.json({
        "message":"successful delete request",
        "data":"blog data"
    })
})

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})