class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'CustomError';
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomError(msg, statusCode);
};

module.exports = { CustomError, createCustomError };
