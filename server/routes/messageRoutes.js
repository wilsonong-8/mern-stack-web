import express from 'express';
const router = express.Router();

import { newMessage, getMessage } from '../controllers/messageController.js';

router.route('/').post(newMessage);
router.route('/:conversationId').get(getMessage)

export default router;
