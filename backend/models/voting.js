const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voting = new Schema({
    email: {
        type: String,
        index: true,
        unique: true,
        required: true
    },
    confirmation: {
      type: Boolean,
      default: false,
      required: true
    },
    data: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        default: Date.now
    }
})
module.exports = mongoose.model("Voting", voting, "voting")