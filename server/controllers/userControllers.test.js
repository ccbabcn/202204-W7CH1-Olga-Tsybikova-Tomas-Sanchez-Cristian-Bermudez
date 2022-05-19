
const { registrerUser } = require("./usercontrollers");
const { userLogin } = require("./userControllers");



describe("Given a user register function", () => {
  describe("When it receives a request with a username and password in bodythat dont exist yet", () => {
    test("Then it should respond with a status 201 and a user created", async () => {
      const req = {
        body: {
          username: "spaguetti",
          password: "spaguetti1",
        },
      };
      const newPassword = "spaguetti1";

const newUser = { username: "spaguetti", password: newPassword };

jest.mock("../../database/models/User", () => ({
  findOne: jest.fn().mockResolvedValueOnce(false).mockResolvedValueOnce(true),
  create: jest.fn().mockResolvedValue(newUser),
}));

jest.mock("bcrypt", () => ({
  hash: jest.fn().mockResolvedValue(newPassword, 10),
}));
      const expectedStatusCode = 201;
      await registrerUser(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.json).toHaveBeenCalledWith(req.body);


      

describe("Given a userLogin function", () => {
  describe("When invoked with a request object with a correct username and password", () => {
    test("Then it should call the response status method with 200", async () => {
      
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
