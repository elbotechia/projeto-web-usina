import express from 'express';
import { upload } from './../../config/storage';
import  * as projectsController from './../../controllers/api/projectsController';

const router = express.Router();

router.get('/projects', projectsController.getAll);
router.post('/projects/create', upload.single('imgUrl'), projectsController.createProject);


export default router;