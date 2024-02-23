export class CustomerError extends Error {
  status: HttpCode;
  constructor(status: HttpCode, message?: string) {
    super(message);
    this.status = status;
  }
}

type HttpCode = 200 | 400 | 401 | 403;
type CustomerErrorMessage =
  | 'ID must be a number'
  | 'Property error'
  | 'Query error'
  | 'Data with current ID not found'
  | 'Car or Driver already reserved at this date';
