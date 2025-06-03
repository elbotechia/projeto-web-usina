"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSlash = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const promises_1 = __importDefault(require("fs/promises"));
dotenv_1.default.config();
const getSlash = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const endpointsPath = process.env.JSON_API_ENDPOINTS;
        if (!endpointsPath) {
            return res.status(404).send("No API endpoints path found.");
        }
        const fileContent = yield promises_1.default.readFile(endpointsPath, "utf-8");
        const endpoints = JSON.parse(fileContent);
        if (!endpoints || endpoints.length === 0) {
            return res.status(404).send("No API endpoints found.");
        }
        res.status(200).json(endpoints);
    }
    catch (error) {
        console.log(error);
        res.status(400).send("Invalid endpoints format or internal error.");
    }
});
exports.getSlash = getSlash;
//# sourceMappingURL=apiController.js.map