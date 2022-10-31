import express from "express"
import cors from "cors"


const app =  express()
app.use(cors());
app.use(express.json());

const PORT =  3005

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/sticker', function(req, res){
    let success = req.query.success
    if (success){
      res.send("Produce Sticker Detected")
    }
    else {
      res.send("Sticker not detected, please try again.")
    }
    
  })

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})