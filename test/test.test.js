/* eslint-disable no-undef */
const { expect } = require("chai");

describe("Testing the test suite", () => {
  it("should return 4", () => expect(2 + 2).to.eq(4));
});

// Exit suite after testing
after(() => process.exit(0));
