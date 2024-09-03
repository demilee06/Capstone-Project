import {pool} from '../config/config.js'

const getProductsdb = async()=>{
    let [data] =  await pool.query('SELECT * FROM products')
    return(data)

}
// console.log(await getProductsdb());


const getProductdb = async(id)=>{
    let [[data]] = await pool.query('SELECT * FROM products WHERE prodID = ?',[id] )
    return(data)
}

const addProductdb  = async(prodName, quantity, amount, Category, prodUrl,prodDes)=>{
    await pool.query(`
        INSERT INTO products(prodName, quantity, amount, Category, prodUrl,prodDes) 
        VALUES (?,?,?,?,?,?)
        `,[prodName, quantity, amount, Category, prodUrl,prodDes])

}

const deleteProductdb = async(prodID)=>{
    await pool.query('DELETE FROM products WHERE prodID = ?',[prodID] )
}

const updateProductdb = async( prodName, quantity, amount, Category, prodUrl,prodDes,id )=>{//this order does not
    await pool.query('UPDATE products SET prodName = ?,quantity = ?,amount = ?,Category = ?,prodUrl = ?,prodDes = ? WHERE prodID = ?',[prodName, quantity, amount, Category, prodUrl,prodDes,id] )//this order matters
}

export{getProductsdb,getProductdb,addProductdb,updateProductdb,deleteProductdb}