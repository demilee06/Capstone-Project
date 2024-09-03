import express from 'express'
import cors from 'cors'
import { userRouter } from './routes/userRouter.js'
import { productRouter } from './routes/productRouter.js'

let port = process.env.PORT || 2023

const app = express()
app.use(express.json())
app.use(cors({
    origin:'*',
    credentials:true
}))

app.use(express.static('public'))
app.use('/users',userRouter)
app.use('/products',productRouter)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})