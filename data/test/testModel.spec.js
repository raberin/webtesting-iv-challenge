const request = require("supertest");
const testModel = require("./testModel.js");
const db = require("../dbConfig.js");

describe("the test model", () => {
  //Always have an afterEach to reset db every test run
  //Cleanup function
  afterEach(async () => {
    await db("test").truncate();
  });

  describe("insert", () => {
    it("should insert names into test db", async () => {
      //Using our model method
      await testModel.insert({ name: "Matt" });

      //confirming with knex
      const test = await db("test");
      expect(test.length).toBe(1);
      expect(test[0].name).toBe("Matt");
    });
  });
  describe("remove", () => {
    it("should delete names in test db", async () => {
      //Using our model method
      await testModel.insert({ name: "Matt" });

      //confirming with knex if its added in
      const test = await db("test");
      expect(test.length).toBe(1);
      expect(test[0].name).toBe("Matt");

      await testModel.remove();
      const tests = await db("test");
      expect(tests.length).toBe(0);
    });
  });
});
