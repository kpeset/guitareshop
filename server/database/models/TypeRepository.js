const AbstractRepository = require("./AbstractRepository");

class TypeRepository extends AbstractRepository {
  constructor() {
    super({ table: "type" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = TypeRepository;
