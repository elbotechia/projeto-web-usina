import dotenv from "dotenv";
dotenv.config();
const port = Number(process.env.PORT) || 3000;
const MONGOURI = process.env.MONGO_URI;
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import mongoose from "mongoose";
import pagesRouter from "./../routes/pages/pagesRouter";
import mainRouter from "./../routes/mainRouter";
import projectsRouter from "./../routes/api/projectsRouter";
export class Server {
  private app: Application;
  private port: number = port;
  private MONGOURI: string = MONGOURI || "";        
  private mainBasePath: string = "/";
  private pagesBasePath: string = "/";
  private apiBasePath: string = "/api";

  constructor() {
    mongoose.set("strictQuery", true);
    mongoose
      .connect(
        MONGOURI as string, // Corrigir para tipo 'string | undefined'
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as mongoose.ConnectOptions
      )
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err: any) => {
        console.error("Error connecting to MongoDB", err);
      });

    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.static(path.resolve("build/public")));
    this.app.use(express.static(path.resolve("build/storage")));

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.mainBasePath, mainRouter);
    this.app.use(this.pagesBasePath, pagesRouter);
    this.app.use(this.apiBasePath, projectsRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
