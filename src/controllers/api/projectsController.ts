import { Request, Response } from "express";
import { IdGenerator } from "../../services/IdGenerator";
import { Project } from "../../models/project";

export const getAll = async (req: Request, res: Response) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json([]);
    }
};


export const getItem = async(req: Request, res: Response) => {
    const {id} =req.params;
    res.status(200).json(
        
        
    );    
};




// CREATE com upload de imagem
export const createProject = async (req: Request, res: Response) => {
    try {
        const { title, description, linkUrl, author, id } = req.body;
        const imgUrl:any = req.file ? req.file.path : '';

        const project = new Project({
            id,
            title,
            imgUrl,
            description,
            linkUrl,
            author
        });

        await project.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao criar projeto', details: err });
    }
};

export const putItem = async(req: Request, res: Response) => {
    const {id} =req.params;
    const {body} = req;
    res.status(200).json({message: 'ITEM Updated', body  });    
};

export const deleteItem = async(req: Request, res: Response) => {
    res.status(200).json({message: 'ITEM DELETE'  });    
};