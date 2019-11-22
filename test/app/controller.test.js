/* eslint-disable no-undef */
const { expect } = require("chai");
const { register } = require("../../app/controller");

const TEST_USER = {
  email: `test_user${Math.floor(Math.random() * 100)}@gmail.com`,
  clientID: `test_id${Math.floor(Math.random() * 100)}`
};

describe("Controller", () => {
  describe("Register method", () => {
    it("should return a user", async () => {
      const user = await register(TEST_USER.email, TEST_USER.clientID);
      expect(user).to.include.all.keys(
        "id",
        "email",
        "clientID",
        "createdAt",
        "updatedAt"
      );
    });
  });
});
