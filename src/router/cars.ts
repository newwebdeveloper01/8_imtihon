import { Router } from "express";
import controller from '../controllers/cars.controller'

const router=Router();


router.get( '/cars' , controller.carsGet );



export default router;