import {Models , Cars } from '../model/index';
import sequelize from "../model/db/connection";
import express ,{Request , Response , Application} from "express";




const carsGet=  async(req:Request , res:Response ):Promise<void>=>{
    try {
    const {name}=req.body;
    const newModel=await Models.create({name});
    res.status(200).send({message:"zo'r" , status:200 , data:newModel});
  
    } catch (error) {
      res.status(400).send({message:"xato"});    
  
    }
  }

  export default {
    carsGet
  }