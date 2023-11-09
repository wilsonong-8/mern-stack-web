import express from 'express';
const router = express.Router();

import {
  createAgent,
  getAllAgents,
  updateAgent,
  deleteAgent,
  uploadImage,
  deleteImage,
} from '../controllers/agentController.js';

router.route('/uploadImage').post(uploadImage);
router.route('/deleteImage').delete(deleteImage);
router.route('/').post(createAgent).get(getAllAgents).post(uploadImage);
router.route('/:id').delete(deleteAgent).patch(updateAgent);

export default router;
