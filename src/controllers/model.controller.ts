import {Models , Cars } from '../model/index';
import sequelize from "../model/db/connection";
import express ,{Request , Response , Application} from "express";




const modelGet= async (req:Request , res:Response)=>{
    try {
      const user= await Models.findAll({attributes:['name' , 'image']});
    res.status(200).send({message:"zo'r" , status:200 , data:user});
    
    } 
    catch (error) {
      res.status(400).send({message:"xato"});    
    }
  }

const modelPost= async(req:Request , res:Response ):Promise<void>=>{
    try {
    const {name}=req.body;
    const image = req.file?.filename;
    console.log(image);

    console.log(name);
    const newModel=await Models.create({name , image });
    res.status(200).send({message:"zo'r" , status:200 , data:newModel});
  
    } catch (error) {
        console.log(error);
      res.status(400).send({message:"xato"});    
  
    }
  }


  export default {
    modelGet,
    modelPost
  }