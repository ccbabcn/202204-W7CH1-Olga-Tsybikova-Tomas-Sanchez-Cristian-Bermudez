const { notFoundError } = require("./errors");

describe("Given a 'not found' error middleware", () => {
  describe("When it receives an unexisting endpoint", () => {
    test("Then it should call a response status 404 and a message 'this endpoint was not found'", () => {
      const expectedStatusCode = 404;
      const expectedMessage = { message: "This endpoint was not found" };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      notFoundError(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
