const request = require("supertest");
const app = require("..");

describe("Given a POST/users/register/ endpoint", () => {
  describe("When it receives a request with a new user", () => {
    test("Then it should respond with the status code 201 and the registered user", async () => {
      const newUser = { username: "Pudding", password: "12345" };
      await request(app).post("/users/register").send(newUser).expect(201);
    });
  });
});
