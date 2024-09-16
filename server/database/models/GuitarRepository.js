const AbstractRepository = require("./AbstractRepository");

class GuitarRepository extends AbstractRepository {
  constructor() {
    super({ table: "guitar" });
  }

  async readAll(type) {
    if (type === "null" || !type) {
      const [rows] = await this.database.query(
        `SELECT guitar.*, type.id as type_id, type.name as type_name, user.email as seller from ${this.table} join type on type.id = guitar.type_id join user on user.id = guitar.user_id`
      );

      console.info("rows vide", rows);
      return rows;
    }
    const [rows] = await this.database.query(
      `SELECT guitar.*, type.id as type_id, type.name as type_name, user.email as seller from ${this.table} join type on type.id = guitar.type_id join user on user.id = guitar.user_id WHERE type.name = ?`,
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
    console.info("MODEL", guitar);
    const [result] = await this.database.query(
      `INSERT INTO guitar (name, price, description, image, type_id, modele_id, user_id) VALUES(?, ?, ?, "/default.jpg", ?, ?, 1)`,
      [
        guitar.name,
        guitar.price,
        guitar.description,
        guitar.typeId,
        guitar.modeleId,
      ]
    );

    return result;
  }
}

module.exports = GuitarRepository;
