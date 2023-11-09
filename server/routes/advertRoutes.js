import express from 'express';
const router = express.Router();

import {
  createAdvert,
  getSingleAdvert,
  getAllAdvert,
  updateAdvert,
  deleteAdvert,
  uploadImage,
  deleteImages,
  deleteSingleImage,
} from '../controllers/advertController.js';

/*
  GET SINGLE ADVERTISEMENT + UPLOAD IMAGE
*/
router.route('/uploadImage').post(uploadImage);
router.route('/deleteImages').delete(deleteImages)
router.route('/deleteSingleImage').delete(deleteSingleImage);
router.route('/:id');


router.route('/').post(createAdvert).get(getAllAdvert);
router
  .route('/:id')
  .delete(deleteAdvert)
  .patch(updateAdvert)
  .get(getSingleAdvert);

export default router;
