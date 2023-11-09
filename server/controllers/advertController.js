import Advert from '../models/Advert.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const createAdvert = async (req, res) => {
  const {
    address,
    postalCode,
    area,
    unitType,
    size,
    price,
    description,
    imageSourceNames,
  } = req.body;

  if (
    !address ||
    !postalCode ||
    !size ||
    !price ||
    !description ||
    !imageSourceNames
  ) {
    throw new BadRequestError('Please provide all values');
  }
  req.body.createdBy = req.user.userId;
  const advert = await Advert.create(req.body);
  res.status(StatusCodes.CREATED).json({ advert });
};

/*
  GET SINGLE ADVERTISEMENT + UPLOAD IMAGE
*/
const getSingleAdvert = async (req, res) => {
  const { id: userId } = req.params;
  const advert = await Advert.findOne({ createdBy: userId });
  if (!advert) {
    console.log('no advert found');
  }
  res.status(StatusCodes.OK).json({ advert });
};

const uploadImage = async (req, res) => {
  if (!req.files || !req.files.image) {
    throw new BadRequestError('no file uploaded');
  }

  const imageFiles = Array.isArray(req.files.image)
    ? req.files.image
    : [req.files.image];
  const uploadedImages = [];

  for (const file of imageFiles) {
    if (!file.mimetype.startsWith('image')) {
      throw new BadRequestError('please provide a valid image file');
    }

    const fileExtension = file.name.split('.').pop(); // Get the file extension
    const fileName = `${uuidv4()}.${fileExtension}`; // Generate a random unique file name

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const imagePath = path.join(__dirname, '../public/uploads/' + fileName);
    await file.mv(imagePath);
    uploadedImages.push(`/uploads/${fileName}`);
  }

  res.status(StatusCodes.OK).json({ images: uploadedImages });
};


const getAllAdvert = async (req, res) => {
  const { search, area, unitType, minPrice, maxPrice} = req.query;
  const queryObject = {};
  if (area) {
    queryObject.area = area;
  }
  if (unitType) {
    queryObject.unitType = unitType;
  }
  if (minPrice !== undefined) {
    queryObject.price = { $gte: minPrice };
  }
  if (maxPrice !== undefined) {
    queryObject.price = { ...queryObject.price, $lte: maxPrice };
  }

  if (search) {
    queryObject.address = { $regex: search, $options: 'i' };
  }

  let resultQuery;
  if (Object.keys(queryObject).length !== 0) {
    resultQuery = Advert.find(queryObject).sort({ updatedAt: -1 });
  } else {
    resultQuery = Advert.find().sort({ updatedAt: -1 });
  }

  /**
   * limit changes how many Adverts are displayed per page
   */

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || undefined;
  const skip = (page - 1) * limit;

  resultQuery = resultQuery.skip(skip).limit(limit);
  const adverts = await resultQuery.exec();

  const totalAdverts = await Advert.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalAdverts / limit);

  res.status(StatusCodes.OK).json({ adverts, totalAdverts, numOfPages });
};


const updateAdvert = async (req, res) => {
  const { id: userId } = req.params;
  const {
    address,
    postalCode,
    area,
    unitType,
    size,
    price,
    description,
    imageSourceNames,
  } = req.body;
  if (
    !address ||
    !postalCode ||
    !area ||
    !unitType ||
    !size ||
    !price ||
    !description
  ) {
    throw new BadRequestError('Please provide all values');
  }
  const advert = await Advert.findOne({ createdBy: userId });
  if (!advert) {
    throw BadRequestError('No advert found');
  }
  const updatedAdvert = await Advert.findOneAndUpdate(
    { createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json(updatedAdvert);
};

const deleteAdvert = async (req, res) => {
  const { id: userId } = req.params;

  const advert = await Advert.findOne({ createdBy: userId });
  if (!advert) {
    throw BadRequestError('No advert found');
  }
  await advert.deleteOne();
  res.status(StatusCodes.OK).json({ msg: 'Success! Advertisement removed' });
};

const deleteSingleImage = async (req, res) => {
  const { userId, imageUrl } = req.body;

  if (!userId || !imageUrl) {
    throw new BadRequestError('Please provide the user ID and image URL');
  }

  const advert = await Advert.findOne({ createdBy: userId });
  if (!advert) {
    throw new NotFoundError('No advert found');
  }

  // Find the index of the imageUrl in the imageSourceNames array
  const index = advert.imageSourceNames.indexOf(imageUrl);
  if (index === -1) {
    throw new NotFoundError('Image not found in the advert');
  }

  // Remove the imageUrl from the imageSourceNames array
  advert.imageSourceNames.splice(index, 1);
  await advert.save();

  // Delete the image file from the server
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filename = imageUrl.split('/').pop();
  const imagePath = path.join(__dirname, `../public/uploads/${filename}`);
  await fs.promises.unlink(imagePath);

  res.status(StatusCodes.OK).json({ message: 'Image deleted successfully' });
};



const deleteImages = async (req, res) => {
  const { imageFiles } = req.body;

  if (!Array.isArray(imageFiles) || imageFiles.length === 0) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Invalid or empty imageFiles array' });
  }

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    for (const imageUrl of imageFiles) {
      const filename = imageUrl.split('/').pop();
      const imagePath = path.join(__dirname, `../public/uploads/${filename}`);
      await fs.promises.unlink(imagePath);
    }

    res.status(StatusCodes.OK).json({ message: 'Images deleted successfully' });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error deleting images' });
  }
};


export {
  createAdvert,
  getSingleAdvert,
  uploadImage,
  getAllAdvert,
  updateAdvert,
  deleteAdvert,
  deleteImages,
  deleteSingleImage,
};
