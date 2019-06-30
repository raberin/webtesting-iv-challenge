const request = require("supertest");
const server = require("./server.js");
const db = require("./data/dbConfig.js");

describe("server.js", () => {
  describe("GET /", () => {
    it("should return a 200 code after get call", async () => {
      const res = await request(server).get("/");
      //Expects the server to return a 200 code
      expect(res.status).toBe(200);
    });
    it("should return JSOn", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });

    it("should return api: up", async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual({ api: "up" });
    });
  });
});
