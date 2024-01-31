import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
  protected tableName = "users";

  async up() {
    // this.schema.raw(/* sql */ `
    //   create table if not exists ${this.tableName} (
    //     id text not null,
    //     name text not null,
    //     role text check (role in ('ADMIN', 'CUSTOMER')) not null,
    //     email text not null,
    //     password text not null,
    //     created_at text not null default CURRENT_TIMESTAMP,
    //     updated_at text,
    //     primary key (id)
    //   ) strict;
    // `);

    this.schema.createTable(this.tableName, (table) => {
      table.text("id").primary().notNullable();
      table.text("name").notNullable();
      table.enum("role", ["ADMIN", "CUSTOMER"]).notNullable();

      table.text("email").notNullable().unique();
      table.text("password").notNullable();

      table.text("created_at").notNullable();
      table.text("updated_at");
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
