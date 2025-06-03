"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = Number(process.env.PORT) || 3000;
const MONGOURI = process.env.MONGO_URI;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const pagesRouter_1 = __importDefault(require("./../routes/pages/pagesRouter"));
const mainRouter_1 = __importDefault(require("./../routes/mainRouter"));
const projectsRouter_1 = __importDefault(require("./../routes/api/projectsRouter"));
class Server {
    constructor() {
        this.port = port;
        this.MONGOURI = MONGOURI || "";
        this.mainBasePath = "/";
        this.pagesBasePath = "/";
        this.apiBasePath = "/api";
        mongoose_1.default.set("strictQuery", true);
        mongoose_1.default
            .connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => {
            console.log("Connected to MongoDB");
        })
            .catch((err) => {
            console.error("Error connecting to MongoDB", err);
        });
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.static(path_1.default.resolve("build/public")));
        this.app.use(express_1.default.static(path_1.default.resolve("build/storage")));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use(this.mainBasePath, mainRouter_1.default);
        this.app.use(this.pagesBasePath, pagesRouter_1.default);
        this.app.use(this.apiBasePath, projectsRouter_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map