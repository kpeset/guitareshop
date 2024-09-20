const { tables } = require("../config");

describe("GuitarRepository readAll", () => {
  test("should return the fields name, price, description, type_name and seller form the guitar table", async () => {
    const returned = await tables.guitar.readAll();

    expect(returned.length).toBeGreaterThan(0);
    expect(returned[0]).toHaveProperty("name");
    expect(returned[0]).toHaveProperty("price");
    expect(returned[0]).toHaveProperty("description");
    expect(returned[0]).toHaveProperty("type_name");
    expect(returned[0]).toHaveProperty("seller");
  });
});

describe("GuitarRepository read", () => {
  test("should return the fields name, price, description form one specific guitar from the guitar table", async () => {
    const returned = await tables.guitar.read(1);

    expect(returned.length).toBe(1);
    expect(returned[0]).toHaveProperty("name");
    expect(returned[0]).toHaveProperty("price");
    expect(returned[0]).toHaveProperty("description");
  });

  test("should return an empty table when the requested guitar does not exist", async () => {
    const returned = await tables.guitar.read(6720);

    expect(returned.length).toBe(0);
  });
});
