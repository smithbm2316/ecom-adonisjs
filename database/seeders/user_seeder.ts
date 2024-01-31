import { BaseSeeder } from "@adonisjs/lucid/seeders";
import { UserFactory } from "#database/factories/user_factory";

export default class UserSeeder extends BaseSeeder {
  async run() {
    await UserFactory.apply("admin").create();
    await UserFactory.createMany(5);
  }
}
