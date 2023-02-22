const { removeAllListeners } = require("nodemon");
const request = require("supertest");

const { createApp } = require("../app");
const { appDataSource } = require("../src/models/data-source");

describe("likes", () => {
  let app;
  let token = "";

  beforeAll(async () => {
    app = createApp();
    await appDataSource.initialize();
    const response = await request(app).get("/authentication/test");
    token = response.body.token;
  });
  afterAll(async () => {
    await appDataSource.query(`TRUNCATE users_like_writings`);
    await appDataSource.destroy();
  });
  test("LIKES CREATED", async () => {
    await request(app)
      .post("/likes")
      .send({ writing_id: 1 })
      .set(`Authorization`, `Bearer ${token}`)
      .expect(200)
      .expect({ message: "LIKES CREATED" });
  });

  test("LIKES DELETED", async () => {
    await request(app)
      .post("/likes")
      .send({ writing_id: 1 })
      .set(`Authorization`, `Bearer ${token}`)
      .expect(200)
      .expect({ message: "LIKES DELETED" });
  });

  test("Error", async () => {
    await request(app)
      .post("/likes")
      .send({ writing_id: "we" })
      .set(`Authorization`, `Bearer ${token}`)
      .expect(500)
      .expect({ message: "MY MISTAKE" });
  });
});
