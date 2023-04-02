const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors({
    origin:"*",
}))

app.get('/',(req,res)=>{
    res.send('Hello world')
})


const port = 5000 || process.env.Port
app.listen(port,()=>console.log(`Server runing on port ${port}`));