const request = require("supertest");
const app = require("../src/app");

describe("Express API Tests", () => {
  test("GET / should return Hello World!", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello World!");
  });

  test("GET /sum?a=2&b=3 should return 5", async () => {
    const res = await request(app).get("/sum?a=2&b=3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });
});
