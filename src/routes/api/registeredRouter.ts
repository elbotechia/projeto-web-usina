import express from 'express';
import { Router } from 'express';
import * as  registeredController from '../../controllers/api/registeredController';
const router = express.Router();



router.get('/projects', registeredController.getAll);
router.get('/projects/:id', registeredController.getItem);
router.post('/projects', registeredController.postItem);
router.put('/projects/:id', registeredController.putItem);
router.delete('/projects/:id', registeredController.deleteItem);


export default router;