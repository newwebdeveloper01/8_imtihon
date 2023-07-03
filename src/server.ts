import express ,{Request , Response , Application} from "express";
import {Models , Cars } from './model/index';
import modelRouter from "./router/model";
import adminRouter from './router/admin'
const app:Application=express();
app.use(express.json());

app.use(modelRouter)
app.use(adminRouter)







  




  
app.listen(5000 , ()=> console.log("server 5000 "));
