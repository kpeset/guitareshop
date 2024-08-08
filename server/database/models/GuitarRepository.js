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
      `select * from guitar where id = ?`,
      [id]
    );

    return rows;
  }
}

module.exports = GuitarRepository;
