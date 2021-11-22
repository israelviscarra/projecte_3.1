const { Schema, model } = require("mongoose");

let ServeiSchema = new Schema({
    product: {
      type: String,
      required: [true, "product is required"],
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    selled: {
      type: Number,
      required: [true, "number of products selled is required"],
    },
    lastsell:{
      type: Date,
      required: [true, "las sell date is required"],
    },
    insell: {
      type: Boolean,
      required: [true, "state of sell product is requried"],
    },
  });

ServeiSchema.methods.toJSON = function () {
  const { __v, password, ...servei } = this.toObject();
  return servei;
};

module.exports = model("Servei", ServeiSchema);
