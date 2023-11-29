import {Router} from "express";
import {CartManagerFile} from "../managers/CartManagerFile.js";

const path = "carts.json";
const router = Router();
const cartManagerFile = new CartManagerFile(path);

router.get('/', async (req,res)=>{

    const carts = await cartManagerFile.getCarts();

    res.send({
        status:"succes",
        carritos: carts
    })
})

router.get('/:cid', async (req,res)=>{
    const cid = req.params.cid;

    res.send({
        status:"succes",
        msg:`Ruta GET ID CART con ID: ${cid}`
    })
})
router.post('/', async (req,res)=>{ //creo
    res.send({
        status:"succes",
        msg:"Ruta POST CART"
    })
})
router.post('/:cid/product/:pid', async (req,res)=>{ //creo
    const cid = req.params.cid;
    const pid = req.params.pid;

    res.send({
        status:"succes",
        msg:`Ruta POST CART - Agrego producto al carrito. CID: ${cid} - PID: ${pid}`
    })
})
router.put('/:cid', async (req,res)=>{
    const cid = req.params.cid;
    res.send({
        status:"succes",
        msg:`Ruta PUT de CART con ID: ${cid}`
    })
})
router.delete('/:cid', async (req,res)=>{
    const cid = req.params.cid;
    res.send({
        status:"succes",
        msg:`Ruta DELETE de CART con ID: ${cid}`
    })
})

export {router as cartRouter};