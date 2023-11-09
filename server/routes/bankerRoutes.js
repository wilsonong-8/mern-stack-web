import express from 'express';
const router = express.Router();

import {
  createBanker,
  getAllBankers,
  updateBanker,
  deleteBanker,
  uploadImage,
  deleteImage,
} from '../controllers/bankerController.js';

router.route('/uploadImage').post(uploadImage);
router.route('/deleteImage').delete(deleteImage);
router.route('/').post(createBanker).get(getAllBankers);
router.route('/:id').delete(deleteBanker).patch(updateBanker);

export default router;
