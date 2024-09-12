const AbstractRepository = require("./AbstractRepository");

class GuitarRepository extends AbstractRepository {
  constructor() {
    super({ table: "guitar" });
  }

  async readAll(type) {
    if (type === "null") {
      const [rows] = await this.database.query(
        `SELECT guitar.*, type.id as type_id, type.name as type_name from ${this.table} join type on type.id = guitar.type_id`
      );

      console.info("rows vide", rows);
      return rows;
    }
    const [rows] = await this.database.query(
      `SELECT guitar.*, type.id as type_id, type.name as type_name from ${this.table} join type on type.id = guitar.type_id WHERE type.name = ?`,
      [type]
    );
    console.info("rows", rows);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select name, price, description from guitar where id = ?`,
      [id]
    );

    return rows;
  }

  async create(guitar) {
    const [result] = await this.database.query(
      `INSERT INTO guitar (name, price, description, image, type_id, modele_id) VALUES(?, ?, ?, ?, ?, ?)`,
      [
        guitar.name,
        guitar.price,
        guitar.description,
        guitar.image,
        guitar.typeId,
        guitar.modeleId,
      ]
    );

    return result;
  }
}

module.exports = GuitarRepository;
