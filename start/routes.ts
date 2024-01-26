/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from "@adonisjs/core/services/router";

/* controllers */
const UsersController = () => import("#controllers/users_controller");

// router.on("/").render("pages/home");
router.get("/", ({ view }) => view.render("pages/home"));
router.post("/", ({ view }) => view.render("partials/clicked"));

router.resource("users", UsersController);
