const { generalError } = require("./error");

describe("Given a generalError function", () => {
  describe("When its called with a response", () => {
    test("Then it should call the responses method json with a message 'Seervere error'", () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const expectedMessage = { message: "Servere error" };

      generalError(null, null, res);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
