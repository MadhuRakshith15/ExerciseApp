const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  title: { type: String, required: true },
  employeeName: { type: String, required: true },
  client: { type: String, required: true },
  clientEngagement: { type: String, required: true },
  amount: { type: Number, required: true },
  gstAmount: { type: Number, required: true },
  category: { type: String, required: true },
  fromDate: { type: Date, required: false },
  toDate: { type: Date, required: false },
  image: { type: String, required: false },
  status: { type: String, required: true },
  // description: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "user" },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("expense", ExpenseSchema);
