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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.putItem = exports.createProject = exports.getItem = exports.getAll = void 0;
const project_1 = require("../../models/project");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield project_1.Project.find();
        res.status(200).json(projects);
    }
    catch (err) {
        res.status(500).json([]);
    }
});
exports.getAll = getAll;
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    res.status(200).json();
});
exports.getItem = getItem;
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, linkUrl, author, id } = req.body;
        const imgUrl = req.file ? req.file.path : '';
        const project = new project_1.Project({
            id,
            title,
            imgUrl,
            description,
            linkUrl,
            author
        });
        yield project.save();
        res.status(201).json(project);
    }
    catch (err) {
        res.status(400).json({ error: 'Erro ao criar projeto', details: err });
    }
});
exports.createProject = createProject;
const putItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    res.status(200).json({ message: 'ITEM Updated', body });
});
exports.putItem = putItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: 'ITEM DELETE' });
});
exports.deleteItem = deleteItem;
//# sourceMappingURL=projectsController.js.map