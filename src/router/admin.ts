import { Router } from "express";
import controller from '../controllers/admin.controller'
import upload from "../utils/multer";


const router=Router();


router.get( '/admin' , controller.adminLogin );
router.post('/create/admin' , controller.adminPost)


export default router;