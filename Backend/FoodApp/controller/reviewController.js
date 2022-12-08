const planModel = require("../models/planModel");
const reviewModel = require("../models/reviewModel")

module.exports.getAllReviews = async function (req, res) {
    try{
        const reviews = await reviewModel.find();
        if (reviews) {
            //then show all the reviews
            res.json({
                msg: "reviews retrieved",
                reviews
            })
        } else {
            res.json({
                msg: "reviews not found"
            })
        }
    } catch (err) {
        res.json({
            msg: err.message,
        })
    }
}

module.exports.top3Review = async function(req, res) {
    try {
        const top3 = await reviewModel.find().sort({rating: -1}).limit(3)
        if (top3) {
            res.json({
                msg: "reviews retrieved",
                top3
            })
        } else {
            res.json({
                msg: "reviews not found"
            })
        }

    } catch (err) {
        res.json({
            msg: err.message
        })
    }
}

module.exports.getPlanReviews = async function (req, res) {
    try {
        const planId = req.params.id;
        let reviews = await reviewModel.find()
        reviews = reviews.filter(review => review.plan["_id"] === planId)

        if (reviews) {
            res.json({
                msg: "reviews retrieved",
                reviews
            })
        } else {
            res.json({
                msg: "reviews not found"
            })
        }
    } catch (err) {
        res.json({
            msg: err.message
        })
    }
}

module.exports.createReview = async function (req, res) {
    try {
        const planId = req.params.plan;
        const plan = await planModel.findById(planId)
        const review = req.body;
        const postReview = await reviewModel.create(review);
        await postReview.save();

        res.json({
            msg: 'review posted',
            postReview
        })

    } catch (err) {
        res.status(500).json({
            msg: err.message
        })
    }
}

module.exports.updateReview = async function (req, res) {
    try {
        let planId = req.params.plan; //which plan's review is being updated
        let reviewId = req.body.id; //which review needs to be updated
        let dataToBeUpdated = req.body;

        let keys = [];
        for(let key in dataToBeUpdated) {
            if (key === id) continue;
            keys.push(key)
        }

        let review = await reviewId.findById(reviewId);
        for(let i = 0; i < keys.length; i++) {
            review[keys[i]] = dataToBeUpdated[keys[i]];
        }
        await review.save();

        res.json({
            msg: "plan updated successfully",
            review
        });
    } catch (err) {
        res.json({
            msg: err.message
        })
    }
}

module.exports.deleteReview = async function (req, res) {
    try {
        let planId = req.params.plan;
        let reviewId = req.body.id;

        //change avg rating of plan
        let review = await reviewModel.findByIdAndDelete(reviewId);
        res.json({
            msg: "review deleted",
            review
        })

    } catch (err) {
        res.json({
            msg: err.message
        })
    }
}
