import express from 'express';
const router = express.Router();

import {
  createConversation,
  getConversation,
  checkExistingConversation,
} from '../controllers/conversationController.js';

router.route('/').post(createConversation)
router.route('/:id').get(getConversation);
router.route('/:senderId/:receiverId').get(checkExistingConversation);



export default router;
