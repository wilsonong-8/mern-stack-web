import PropertyAgent from '../models/PropertyAgent.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import { v4 as uuidv4 } from 'uuid';

import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const createAgent = async (req, res) => {
  const {
    agent_name,
    agent_company,
    agent_position,
    agent_number,
    agent_email,
    agent_image,
  } = req.body;
  if (
    !agent_name ||
    !agent_company ||
    !agent_position ||
    !agent_number ||
    !agent_email ||
    !agent_image
  ) {
    throw new BadRequestError('Please provide all values');
  }
  const agent = await PropertyAgent.create(req.body);
  res.status(StatusCodes.CREATED).json({ agent });
};

const getAllAgents = async (req, res) => {
  const agents = await PropertyAgent.find();
  res.status(StatusCodes.OK).json({ agents });
};

const updateAgent = async (req, res) => {
  const { id: agentId } = req.params;
  const {
    agent_name,
    agent_company,
    agent_position,
    agent_number,
    agent_email,
    agent_image,
  } = req.body;
  if (
    !agent_name ||
    !agent_company ||
    !agent_position ||
    !agent_number ||
    !agent_email ||
    !agent_image
  ) {
    throw new BadRequestError('Please provide all values');
  }
  const agent = await PropertyAgent.findOne({ _id: agentId });
  if (!agent) {
    throw new NotFoundError(`No agent with id: ${agentId}`);
  }
  const updatedAgent = await PropertyAgent.findOneAndUpdate(
    { _id: agentId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({ updatedAgent });
};

const deleteAgent = async (req, res) => {
  const { id: agentId } = req.params;

  const agent = await PropertyAgent.findOne({ _id: agentId });
  if (!agent) {
    throw new NotFoundError(`No agent with id: ${agentId}`);
  }

  await agent.deleteOne();
  res.status(StatusCodes.OK).json({ msg: 'Success! Agent removed' });
};

const uploadImage = async (req, res) => {
  if (!req.files) {
    throw new BadRequestError('no file uploaded');
  }
  const productImage = req.files.image;
  if (!productImage.mimetype.startsWith('image')) {
    throw new BadRequestError('please provide a valid image file');
  }

  const fileExtension = productImage.name.split('.').pop(); // Get the file extension
  const fileName = `${uuidv4()}.${fileExtension}`; // Generate a random unique file name

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const imagePath = path.join(
    __dirname,
    '../public/uploads/agents/' + fileName
  );
  await productImage.mv(imagePath);
  res.status(StatusCodes.OK).json({ image: `/uploads/agents/${fileName}` });
};

const deleteImage = async (req, res) => {
  const { image } = req.body;

  if (!image || typeof image !== 'string') {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Invalid or empty image URL' });
  }

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    const filename = image.split('/').pop();
    const imagePath = path.join(__dirname, `../public${image}`);
    await fs.promises.unlink(imagePath);

    res.status(StatusCodes.OK).json({ message: 'Image deleted successfully' });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Error deleting image' });
  }
};

export {
  createAgent,
  getAllAgents,
  updateAgent,
  deleteAgent,
  uploadImage,
  deleteImage,
};
