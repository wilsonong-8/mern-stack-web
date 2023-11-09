import CustomerAPIError from './custom-api.js';
import { StatusCodes } from 'http-status-codes';

class BadRequestError extends CustomerAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;
