import MortgageBanker from '../models/MortgageBanker.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import { v4 as uuidv4 } from 'uuid';


import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const createBanker = async (req, res) => {
  const {
    banker_name,
    banker_bank,
    banker_position,
    banker_number,
    banker_email,
    banker_image,
  } = req.body;
  if (
    !banker_name ||
    !banker_bank ||
    !banker_position ||
    !banker_number ||
    !banker_email ||
    !banker_image
  ) {
    throw new BadRequestError('Please provide all values');
  }
  const banker = await MortgageBanker.create(req.body);
  res.status(StatusCodes.CREATED).json({ banker });
};

const getAllBankers = async (req, res) => {
  const bankers = await MortgageBanker.find();
  res.status(StatusCodes.OK).json({ bankers });
};

const updateBanker = async (req, res) => {
  const { id: bankerId } = req.params;
  const {
    banker_name,
    banker_bank,
    banker_position,
    banker_number,
    banker_email,
    banker_image,
  } = req.body;
  if (
    !banker_name ||
    !banker_bank ||
    !banker_position ||
    !banker_number ||
    !banker_email ||
    !banker_image
  ) {
    throw new BadRequestError('Please provide all values');
  }
  const banker = await MortgageBanker.findOne({ _id: bankerId });
  if (!banker) {
    throw new NotFoundError(`No banker with id: ${bankerId}`);
  }
  const updatedBanker = await MortgageBanker.findOneAndUpdate(
    { _id: bankerId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({ updatedBanker });
};

const deleteBanker = async (req, res) => {
  const { id: bankerId } = req.params;

  const banker = await MortgageBanker.findOne({ _id: bankerId });
  if (!banker) {
    throw new NotFoundError(`No banker with id: ${bankerId}`);
  }

  await banker.deleteOne();
  res.status(StatusCodes.OK).json({ msg: 'Success! Banker removed' });
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
    '../public/uploads/bankers/' + fileName
  );
  await productImage.mv(imagePath);
  res
    .status(StatusCodes.OK)
    .json({ image: `/uploads/bankers/${fileName}` });
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
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error deleting image' });
  }
};


export { createBanker, getAllBankers, updateBanker, deleteBanker, uploadImage, deleteImage };
