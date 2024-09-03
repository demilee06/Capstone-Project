import{getProductsdb,getProductdb,addProductdb,updateProductdb,deleteProductdb} from '../model/productdb.js'

const getProducts = async(req,res)=>{
    res.json(await getProductsdb())//move to controller .tomorrow
}

const getProduct = async(req,res)=>{
    res.json(await getProductdb(req.params.id))//move to controller .tomorrow
}


const addProduct = async(req,res)=>{
    let {prodName, quantity, amount, Category, prodUrl,prodDes} = req.body; 

    await addProductdb(prodName, quantity, amount, Category, prodUrl,prodDes)
    res.send('Data was inserted successfully')
}

const updateProduct = async(req,res)=>{
    let {prodName, quantity, amount, Category, prodUrl,prodDes} = req.body;
    let products = await getProductdb(req.params.id)
    prodName? prodName=prodName : prodName = products.prodName
    quantity? quantity=quantity : quantity = products.quantity
    amount? amount=amount : amount = products.amount
    Category? Category=Category : Category = products.Category
    prodUrl? prodUrl=prodUrl : prodUrl = products.prodUrl
    prodDes? prodDes=prodDes : prodDes  = products.prodDes

 

    res.send('Updated was succesfully');
    await updateProductdb(prodName, quantity, amount, Category, prodUrl,prodDes,req.params.id)
}

const deleteProduct = async(req,res)=>{
    let {id} = req.body; 
    await deleteProductdb(req.params.id)
    res.send('delete successfully');
}

export{getProducts,getProduct,addProduct,updateProduct,deleteProduct}