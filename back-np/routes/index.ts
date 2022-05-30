import {Router, Request, Response} from 'express'

const router:Router = Router();

export default router
.get('/', ( req:Request, res:Response)=> {

    
    return res.status(200).json({msg:"working"})
} )

