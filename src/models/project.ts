import { Schema, model, Document } from 'mongoose';

// Interface TypeScript
export interface IProject extends Document {
    id: string;
    title: string;
    imgUrl: string;
    description: string;
    linkUrl: string;
    author: string;
}

// Mongoose Schema
export const projectsSchema = new Schema<IProject>({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    imgUrl: { type: String, required: true, default: "/assets/colab_orange.svg" },
    description: { type: String, required: true },
    linkUrl: { type: String, required: true },
    author: { type: String, required: true }
});

export const Project = model<IProject>('projects', projectsSchema);