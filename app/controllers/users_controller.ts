import type { HttpContext } from "@adonisjs/core/http";
import User from "#models/user";

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ request }: HttpContext) {
    const page = request.input("page", 1);
    const limit = 20;

    let users = User.query().orderBy("id", "desc").paginate(page, limit);
    return users;
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request: _ }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params: _ }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params: _ }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params: _, request: __ }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params: _ }: HttpContext) {}
}
