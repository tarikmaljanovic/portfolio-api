import express from 'express';
import projectController from "../controllers/projectController.js";

const router = express.Router();

//Get all projects
router.get('/', async (req, res) => res.json(await projectController.getAll(req)));

//Get project by id
router.get('/:id', async (req, res) => res.json(await projectController.getById(req)));

//Create a new project
router.post('/', async (req, res) => res.json(await projectController.create(req)));

//Update a project
router.put('/:id', async (req, res) => res.json(await projectController.update(req)));

//Delete a project
router.delete('/:id', async (req, res) => res.json(await projectController.delete(req)));

export default router;