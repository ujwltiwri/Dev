const mongoose = require("mongoose");
const { db_link } = require("../secrets");
mongoose
  .connect(db_link)
  .then(function (db) {
    console.log("plan db connected");
  })
  .catch(function (err) {
    console.log("error");
  });

const planSchmea = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxLength: [20, `plan name should not exceed 20 characters`],
  },

  duration: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: [true, "price not entered"],
  },

  discount: {
    type: Number,
    validate: [
      function () {
        return this.discount < 100;
      },
      `discount cannot be 100%`,
    ],
  },

  ratingsAverage: {
    type: Number,
  },
});

const planModel = mongoose.model("planModel", planSchmea);
module.exports = planModel;
