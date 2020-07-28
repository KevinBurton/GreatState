const actualModule = jest.requireActual('axios');

module.exports = {
  ...actualModule,
  get: jest.fn().mockResolvedValue({ status: 200, data: [] }),
  post: jest.fn().mockResolvedValue({ status: 200, data: {} }),
  delete: jest.fn().mockResolvedValue({ status: 200, data: {} }),
  put: jest.fn().mockResolvedValue({ status: 200, data: {} }),
  patch: jest.fn().mockResolvedValue({ status: 200, data: {} }),
};
