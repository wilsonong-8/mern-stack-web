import mongoose from 'mongoose';
import validator from 'validator';

const MortgageBankerSchema = new mongoose.Schema({
  banker_name: {
    type: String,
    required: [true, 'Provide name for Mortgage Banker'],
    maxlength: 50,
  },
  banker_bank: {
    type: String,
    required: [true, 'Provide bank that he/she represents'],
    maxlength: 50,
  },
  banker_position: {
    type: String,
    required: [true, 'Provide position of the banker'],
    maxlength: 50,
  },
  banker_number: {
    type: String,
    required: [true, 'Please provide number'],
    validate: {
      validator: validator.isNumeric,
      message: 'Please provide a valid contact number',
    },
    minlength: [8, 'Please provide a valid phone number'],
    maxlength: [8, 'Please provide a valid phone number'],
    trim: true,
    unique: true,
  },
  banker_email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
  },
  banker_image: {
    type: String,
    default: '/uploads/bankers/banker1.jpg',
    // required : [true, 'Please upload an image']
  },
});

export default mongoose.model('MortgageBanker', MortgageBankerSchema);
