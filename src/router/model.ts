import { Router } from "express";
import controller from '../controllers/model.controller'
import upload from "../utils/multer";


const router=Router();


router.get( '/models' , controller.modelGet );
router.post('/create/model' , upload.single('image') , controller.modelPost)


export default router;
