import express from 'express'
import{getProducts,getProduct,addProduct,updateProduct,deleteProduct} from '../controller/productController.js'

const productRouter = express.Router()

productRouter.get('/',getProducts)
productRouter.get('/:id',getProduct)
productRouter.post('/addProduct',addProduct)
productRouter.patch('/update/:id',updateProduct)
productRouter.delete('/delete/:id',deleteProduct)

export{productRouter}