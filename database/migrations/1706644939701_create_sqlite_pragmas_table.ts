import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
  async up() {
    this.raw(`PRAGMA journal_mode = WAL;`);
    this.raw(`PRAGMA busy_timeout = 5000;`);
    this.raw(`PRAGMA foreign_keys = ON;`);
  }

  async down() {
    /*
     * There is no reason to ever reset this migration, as it only sets some default PRAGMA values for us that we always want our DB to have
     */
  }
}
