import express from "express"
import cors from "cors"


const app =  express()
app.use(cors());
app.use(express.json());

const PORT =  3005

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/example', function(req, res){
    let number_sent = req.query.num_sent
    res.send(`The number you sent was: ${number_sent}`)
  })

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})