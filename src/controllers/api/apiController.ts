import { Request, Response } from "express";
import dotenv from "dotenv";
import fs from "fs/promises";
dotenv.config();

export const getSlash = async (req: Request, res: Response) => {
  try {
    const endpointsPath = process.env.JSON_API_ENDPOINTS;
    if (!endpointsPath) {
      return res.status(404).send("No API endpoints path found.");
    }
    // Lê o arquivo JSON e faz o parse
    const fileContent = await fs.readFile(endpointsPath, "utf-8");
    const endpoints = JSON.parse(fileContent);
    if (!endpoints || endpoints.length === 0) {
      return res.status(404).send("No API endpoints found.");
    }
    res.status(200).json(endpoints);
  } catch (error) {
    console.log(error);
    res.status(400).send("Invalid endpoints format or internal error.");
  }
};