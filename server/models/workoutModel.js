const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {type: String, required: true},
    exercise: {type: String, required: true},
    weight: {type: Number, required: true},
    rep: {type: Number, required: true},
    set: {type: Number, required: true},
}, {
    timestamps: true,
});



module.exports = mongoose.model('Workout', workoutSchema);