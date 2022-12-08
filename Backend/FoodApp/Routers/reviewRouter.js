const express = require("express")
const reviewRouter = express.Router();
const {isAuthorised, protectRoute} = require ("../helper")
const {getAllReviews, top3Review, getPlanReviews, createReview, updateReview, deleteReview} = require("../controller/reviewController")

reviewRouter
    .route("/all")
    .get(getAllReviews)

reviewRouter
    .route("/top3")
    .get(top3Review)

reviewRouter.use(protectRoute)
    reviewRouter
    .route("/crud:plan")
    .post(createReview)
    .patch(updateReview)
    .delete(deleteReview)

//all Reviews of a Particular Plan
reviewRouter
    .route("/:id")
    .get(getPlanReviews)

module.exports = reviewRouter;