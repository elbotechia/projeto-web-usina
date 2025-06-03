import { Request, Response } from "express";

import { NotFoundError } from "../../errors/NotFoundError";
export const getAll = async(req: Request, res: Response) => {
try {
  res.status(200).json({result: 'products'})
} catch (error:any) {
    console.log(error);
    throw new Error();
    if(error.status === 500){
        res.status(500).send('Internal server error');
    }else{
        res.status(400).send('Bad request');
    }
};
}
export const getItem = async(req: Request, res: Response) => {
    const {id} =req.params;
    res.status(200).json({message: 'ITEM ', id: id  });    
};


export const postItem= async(req: Request, res: Response) => {
    const {body} = req;
    res.status(201).json({message: 'CREATE' , body });    
};

export const putItem = async(req: Request, res: Response) => {
    const {id} =req.params;
    const {body} = req;
    res.status(200).json({message: 'ITEM Updated', body  });    
};

export const deleteItem = async(req: Request, res: Response) => {
    res.status(200).json({message: 'ITEM DELETE'  });    
};