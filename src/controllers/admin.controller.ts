import jwt from "../utils/jwt";
import { NextFunction , Request , Response } from "express";
import Admin from "../model/admin";


const adminLogin = async (req:Request, res:Response, next:NextFunction) => {
  try { 
    const { username, password } = req.body;
    const user= await Admin.findAll( {where:{}});
   
    const userFind = user.find((user) => console.log(user));
    const userID:string=userFind?.userId
    if (!userFind) {
      return next();
    }

    res.status(200).json({
      status: 200,
      message: "zo'r",
      access__token:jwt.sign(userID),
      data: userFind,
    });
  } catch (error) {
    return next();
  }
};

const adminPost= async(req:Request , res:Response ):Promise<void>=>{
    try {
    const {username , password }=req.body;

    const newModel=await Admin.create({username , password });
    res.status(200).send({message:"zo'r" , status:200 , data:newModel});
  
    } catch (error) {
        console.log(error);
      res.status(400).send({message:"xato"});    
  
    }
  }


export default {
    adminLogin,
    adminPost
};
