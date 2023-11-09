import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password, number } = req.body;

  if (!name || !email || !password || !number) {
    throw new CustomerAPIError('please provide all values');
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }
  const user = await User.create({ name, email, password, number });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {_id:user._id, name: user.name, email: user.email, number: user.number, isAdmin: user.isAdmin },
    token,
  });
};

//Login function retrieves user info from database for validation
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token });
};

const updateUser = async (req, res) => {
  const { email, name, number } = req.body;
  if (!email || !name || !number) {
    throw new BadRequestError('Please provide all values');
  }
  //Request user of userId from database
  const user = await User.findOne({ _id: req.user.userId });
  user.name = name;
  user.email = email;
  user.number = number;

  await user.save();

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user, token });
};

const getUser = async (req,res) => {
  const { id: userId } = req.params;
  const user = await User.findOne({ _id: userId });
  if(!user) {
    throw BadRequestError('No id found')
  }
  res.status(StatusCodes.OK).json({ user });
}

export { register, login, updateUser,getUser };
