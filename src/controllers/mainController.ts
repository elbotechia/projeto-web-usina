import { Request, Response } from "express";


export const getMain= async(req: Request, res: Response) => {
    res.status(200).sendFile('INDEX.html',{root: 'build/public'  });    
};