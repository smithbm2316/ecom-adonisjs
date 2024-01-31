import factory from "@adonisjs/lucid/factories";
import User, { type UserRole } from "#models/user";
import { randomUUID } from "crypto";
import { DateTime } from "luxon";
import env from "#start/env";

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    let createdAtDate = faker.date.past();
    let role: UserRole = "CUSTOMER";

    return {
      id: randomUUID(),
      name: faker.person.fullName(),
      role,

      email: faker.internet.email(),
      password: faker.internet.password(),

      createdAt: DateTime.fromJSDate(createdAtDate),
      updatedAt: DateTime.fromJSDate(
        faker.date.between({
          from: createdAtDate,
          to: new Date(),
        }),
      ),
    };
  })
  .state("admin", (user) => {
    user.name = "Admin";
    user.role = "ADMIN";
    user.email = env.get("ADMIN_EMAIL");
    user.password = env.get("ADMIN_PASSWORD");
    user.createdAt = DateTime.fromJSDate(new Date());
    user.updatedAt = user.createdAt;
  })
  .before("makeStubbed", (_, model) => {
    model.id = randomUUID();
  })
  .build();
