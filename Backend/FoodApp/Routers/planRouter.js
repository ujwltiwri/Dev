const express = require("express");
const { protectRoute, isAuthorised } = require("../helper");
const planRouter = express.Router();
const {
  getAllPlans,
  getPlan,
  createPlan,
  updatePlan,
  deletePlan,
  top3Plans,
} = require("../controller/planController");

planRouter
    .route('/all')
    .get(getAllPlans);

planRouter
    .route('/top3')
    .get(top3Plans);

planRouter.use(protectRoute) //checks user logged in hai ya nhi 
    .route('/single/:id')
    .get(getPlan);

planRouter.use(isAuthorised(['admin', 'restaurantowner'])) // logged in , but shoudl have proper role 
planRouter
    .route("/crud")
    .post(createPlan)

planRouter
    .route('/crud/:id')
    .patch(updatePlan)
    .delete(deletePlan)

module.exports = planRouter;