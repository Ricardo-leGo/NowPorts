import { Router } from 'express';
import Register from '../controllers/MysqlFunctions/Register';

const router:Router = Router();

export default router.post('/Register', Register );


