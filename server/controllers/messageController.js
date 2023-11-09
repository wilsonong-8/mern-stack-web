import Message from '../models/Message.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const newMessage = async (req, res) => {
  const message = req.body;
  if (!message) {
    throw BadRequestError('No message');
  }
  const savedMessage = await Message.create(message);
  res.status(StatusCodes.CREATED).json({ savedMessage });
};

const getMessage = async (req, res) => {;
    const messages = await Message.find({
        conversationId: req.params.conversationId
    })
    if(!messages){
      throw new NotFoundError('no messages')
    }
    res.status(StatusCodes.OK).json(messages) 
}
export { newMessage, getMessage };
