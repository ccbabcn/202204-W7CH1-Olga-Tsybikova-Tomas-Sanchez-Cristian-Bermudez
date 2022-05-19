const { userLogin } = require("./userControllers");

jest.mock("../../database/models/User", () => ({
  findOne: jest.fn().mockResolvedValue(true),
}));

jest.mock("bcrypt", () => ({
  compare: jest.fn().mockResolvedValue(true),
}));

const expectedToken = "Estepicursor";

jest.mock("jsonwebtoken", () => ({
  sign: () => expectedToken,
}));

describe("Given a userLogin function", () => {
  describe("When invoked with a request object with a correct username and password", () => {
    test("Then it should call the response status method with 200", async () => {
      const req = {
        body: {
          username: "username",
          pasword: "userpassword",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const expedtecStatus = 200;

      await userLogin(req, res);

      expect(res.status).toHaveBeenCalledWith(expedtecStatus);
      expect(res.json).toHaveBeenCalledWith(expectedToken);
    });
  });
});
