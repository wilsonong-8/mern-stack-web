import Conversation from '../models/Conversation.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const createConversation = async (req, res) => {
  const { senderId, receiverId } = req.body;

  if (!senderId || !receiverId) {
    throw new BadRequestError('Error retrieving senderId and receiverId');
  }
  const members = [senderId, receiverId];
  const newConversation = await Conversation.create({ members });
  res.status(StatusCodes.CREATED).json({ newConversation });
};

const getConversation = async (req, res) => {
  const conversation = await Conversation.find({
    members: { $in: [req.params.id] },
  });
  if (!conversation) {
    throw new NotFoundError('No conversation found');
  }
  res.status(StatusCodes.OK).json(conversation);
};

const checkExistingConversation = async (req, res) => {
  const { senderId, receiverId } = req.params;

  const conversation = await Conversation.findOne({
    members: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'Conversation not found' });
  }

  return res.status(StatusCodes.OK).json(conversation);
};



export { createConversation, getConversation, checkExistingConversation };
