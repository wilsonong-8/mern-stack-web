import mongoose from 'mongoose';
import validator from 'validator';

const PropertyAgentSchema = new mongoose.Schema({
  agent_name: {
    type: String,
    required: [true, 'Provide name for Property Agent'],
    maxlength: 50,
  },
  agent_company: {
    type: String,
    required: [true, 'Provide company that he/she represents'],
    maxlength: 50,
  },
  agent_position: {
    type: String,
    required: [true, 'Provide position of the Property Agent'],
    maxlength: 50,
  },
  agent_number: {
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
  agent_email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
  },
  agent_image: {
    type: String,
    default: '/uploads/bankers/agent1.jpeg',
    // required : [true, 'Please upload an image']
  },
});

export default mongoose.model('PropertyAgent', PropertyAgentSchema);
