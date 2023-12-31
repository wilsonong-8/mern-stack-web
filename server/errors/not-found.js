import CustomerAPIError from './custom-api.js';
import { StatusCodes } from 'http-status-codes';

class NotFoundError extends CustomerAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;
