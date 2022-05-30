import {Router, Request, Response} from 'express'
import Login from '../controllers/MysqlFunctions/Login';

const router:Router = Router();

export default router
.post('/Login', Login )

