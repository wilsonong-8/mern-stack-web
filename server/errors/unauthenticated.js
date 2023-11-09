import CustomerAPIError from './custom-api.js';
import { StatusCodes } from 'http-status-codes';

class UnAuthenticatedError extends CustomerAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnAuthenticatedError;
