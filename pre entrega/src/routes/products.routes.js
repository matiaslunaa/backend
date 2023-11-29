import {Router} from "express";
import {ProductManagerFile} from "../managers/ProductManagerFile.js";

const path = "products.json";
const router = Router();
const productManagerFile = new ProductManagerFile(path);

router.get('/', async (req,res)=>{
    
    const products = await productManagerFile.getProducts()

    res.send({
        status:"succes",
        productos: products
    })

})

router.get('/:pid', async (req,res)=>{
    res.send({
        status:"succes",
        msg:"Ruta GET ID PRODUCTS"
    })
})
router.post('/', async (req,res)=>{ //creo

    const product = req.body;//json con el producto
    const products = await productManagerFile.createProduct(product);

    res.send({
        status:"succes",
        msg:"Producto creado",
        productos: products
    })
})
router.put('/:pid', async (req,res)=>{
    const pid = req.params.pid;
    res.send({
        status:"succes",
        msg:`Ruta PUT de PRODUCTS con ID: ${pid}`
    })
})
router.delete('/:pid', async (req,res)=>{
    const pid = req.params.pid;
    res.send({
        status:"succes",
        msg:`Ruta DELETE de PRODUCTS con ID: ${pid}`
    })
})

export {router as productRouter};