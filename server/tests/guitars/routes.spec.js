const { app, request } = require("../config");

describe("GET /api/guitars", () => {
  it("it should return a list of guitars when guitars are available ", async () => {
    const response = await request(app).get("/api/guitars");

    expect(response.status).toBe(200);
  });
});

describe("GET /api/guitars/:id", () => {
  it("should return one guitar when this guitar is available", async () => {
    const response = await request(app).get("/api/guitars/1");
    expect(response.status).toBe(200);
  });

  it("should return a 404 when the guitar does not exist", async () => {
    const response = await request(app).get("/api/guitars/7521");

    expect(response.status).toBe(404);
  });
});
