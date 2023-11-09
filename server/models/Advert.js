import mongoose from 'mongoose';
import validator from 'validator';

const AdvertSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: [true, 'Please provide an address'],
      trim: true,
      maxlength: 50,
    },
    postalCode: {
      type: String,
      required: [true, 'Please provide a postal code'],
      validate: {
        validator: validator.isNumeric,
        message: 'Please provide a valid postal code',
      },
      minlength: [6, 'Please provide a valid postal code'],
      trim: true,
      maxlength: [6, 'Please provide a valid postal code'],
    },
    area: {
      type: String,
      enum: ['North', 'East', 'West', 'South', 'Central'],
      default: 'North',
    },

    unitType: {
      type: String,
      enum: ['2Room', '3Room', '4Room', '5Room', 'EA', 'Jumbo', 'Maisonette'],
      default: '2Room',
    },
    size: {
      type: String,
      required: [true, 'Please provide the size of your unit'],
      validate: {
        validator: validator.isNumeric,
        message: 'Please provide a valid size',
      },
      trim: true,
      minlength: [3, 'Provide a correct size in sqft'],
      maxlength: [4, 'Provide a correct size in sqft'],
    },
    price: {
      type: String,
      required: [true, 'Please provide the selling price of your unit'],
      validate: {
        validator: validator.isNumeric,
        message: 'Please provide a valid price',
      },
      trim: true,
      maxlength: [7, 'Provide a value below 7 digits'],
      
    },

    description: {
      type: String,
      required: [true, 'Please provide a short description of your unit'],
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },

    imageSourceNames: {
      type: [String],
      required : [true, 'Please upload an image']
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Advert', AdvertSchema);
