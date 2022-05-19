const { registrerUser } = require("./usercontrollers");

const newPassword = "spaguetti1";

const newUser = { username: "spaguetti", password: newPassword };

jest.mock("../../database/models/User", () => ({
  findOne: jest.fn().mockResolvedValueOnce(false).mockResolvedValueOnce(true),
  create: jest.fn().mockResolvedValue(newUser),
}));

jest.mock("bcrypt", () => ({
  hash: jest.fn().mockResolvedValue(newPassword, 10),
}));

describe("Given a user register function", () => {
  describe("When it receives a request with a username and password in bodythat dont exist yet", () => {
    test("Then it should respond with a status 201 and a user created", async () => {
      const req = {
        body: {
          username: "spaguetti",
          password: "spaguetti1",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const expectedStatusCode = 201;
      await registrerUser(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.json).toHaveBeenCalledWith(req.body);
    });
  });
});
