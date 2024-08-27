const AbstractRepository = require("./AbstractRepository");

class GuitarRepository extends AbstractRepository {
  constructor() {
    super({ table: "guitar" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
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
      `INSERT INTO guitar (name, price, description, type_id, modele_id) VALUES(?, ?, ?, ?, ?)`,
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
