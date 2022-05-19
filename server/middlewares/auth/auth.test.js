const auth = require("./auth");

describe("Given an auth function", () => {
  describe("When it receives a request with a valid token", () => {
    test("Then it should call next ", () => {
      const mockId = 3;

      jest.mock("jsonwebtoken", () => ({
        ...jest.requireActual("jsonwebtoken"), // import and retain the original functionalities
        verify: () => mockId, // overwrite verify
      }));

      const req = {
        headers: { Authorization: "Bearer " },
      };

      const next = jest.fn();
      auth(req, null, next);

      expect(next).toHaveBeenCalled();
    });
  });
});
