import { DateTime } from "luxon";
import { withAuthFinder } from "@adonisjs/auth";
import hash from "@adonisjs/core/services/hash";
import { compose } from "@adonisjs/core/helpers";
import { BaseModel, column } from "@adonisjs/lucid/orm";
import { WithStringID } from "#models/with_string_ids";

export type UserRole = "ADMIN" | "CUSTOMER";

const AuthFinder = withAuthFinder(() => hash.use("scrypt"), {
  uids: ["email"],
  passwordColumnName: "password",
});

export default class User extends compose(BaseModel, WithStringID, AuthFinder) {
  @column()
  declare name: string;

  @column()
  declare email: string;

  @column({ serializeAs: null })
  declare password: string;

  @column()
  declare role: UserRole;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoUpdate: true })
  declare updatedAt: DateTime | null;
}
