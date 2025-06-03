"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = exports.projectsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.projectsSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    imgUrl: { type: String, required: true, default: "/assets/colab_orange.svg" },
    description: { type: String, required: true },
    linkUrl: { type: String, required: true },
    author: { type: String, required: true }
});
exports.Project = (0, mongoose_1.model)('projects', exports.projectsSchema);
//# sourceMappingURL=project.js.map