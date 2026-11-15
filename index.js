const express = require("express")
const app = express();
const morgan = require("morgan")
const MONGODB_Connection = require("./config/db")
MONGODB_Connection()
const productRoutes = require("./routes/productRoutes")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("combined"))

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/api/products", productRoutes)

app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'Internal Server Error',
        error: err.message
    })
})

app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
})