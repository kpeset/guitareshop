const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async create(user) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (email, password) VALUES (?, ?)`,
      [user.email, user.password]
    );

    return result;
  }
}

module.exports = UserRepository;
