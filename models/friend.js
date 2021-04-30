const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    active: { type: Boolean, default: true },
    bmi: { type: Number, required: false }
});

module.exports = mongoose.model("friend", FriendSchema);