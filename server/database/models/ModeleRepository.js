const AbstractRepository = require("./AbstractRepository");

class ModeleRepository extends AbstractRepository {
  constructor() {
    super({ table: "modele" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = ModeleRepository;
