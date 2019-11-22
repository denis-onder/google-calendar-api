/* eslint-disable no-undef */
const { expect } = require("chai");
const { register, lookup, remove } = require("../../app/controller");

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
  describe("Lookup method", () => {
    it("should return a user or false, depending if a user with the provided ID exists", async () => {
      const user = await lookup(TEST_USER.clientID);
      if (user) {
        expect(user).to.include.all.keys(
          "id",
          "email",
          "clientID",
          "createdAt",
          "updatedAt"
        );
      } else {
        expect(user).to.eq(false);
      }
    });
  });
  describe("Delete method", () => {
    it("should return true if the user's been deleted", async () => {
      expect(await remove(TEST_USER.clientID)).to.eq(true);
    });
  });
});
