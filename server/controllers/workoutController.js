const Workout = require('../models/workoutModel.js');
const mongoose = require('mongoose');

const workoutController = {};

//create a workout
workoutController.createWorkout = (req, res, next) => {
    const { date, exercise, rep, set} = req.body;
    if(!date || ! exercise || !rep || !set) {
        return next({
            log: `Missing entry in workoutController.createWorkout`,
            message :{err: 'Entries cannot be empty.'},
        })
    }
    Workout.create({date, exercise, rep, set})
        .then(workoutDoc => {
            console.log('Created this Document :', workoutDoc);
            res.locals.workout = workoutDoc;
            return next();
        })
        .catch(err => {
            return next({
                log: `workoutController.createWorkout :${err}`,
                message :{err: 'workoutController.createWorkout: ERROR: Check server logs for details.'},
            })
        })
};
//find all workouts
workoutController.findWorkout = (req, res, next) => {
    Workout.find({})
        .then(workoutDoc => {
            console.log("Found these Documents :", workoutDoc);
            res.locals.workout = workoutDoc;
            return next();
        })
        .catch(err => {
            return next({
                log: `workoutController.findWorkout :${err}`,
                message :{err: 'workoutController.findWorkout: ERROR: Check server logs for details.'},
            });
        })
};


//get a workout by id
workoutController.getAWorkout = (req, res, next) => {
    const { id } = req.params;
    Workout.findById(id)
        .then(workoutDoc => {
            console.log("Found this Document :", workoutDoc);
            res.locals.workout = workoutDoc;
            return next();
        })
        .catch(err => {
            return next({
                log: `workoutController.getAWorkout :${err}`,
                message :{err: 'workoutController.getAWorkout: ERROR: Check server logs for details.'},
            })
        })
};

//update a workout
// workoutController.updateWorkout = (req, res, next) => {
//     const {date, exercise, rep, set} = req.body;
//     Workout.findOneAndUpdate()
//         .then()
//         .catch(err => {
//             return next({
//                 log: `workoutController.updateWorkout :${err}`,
//                 message :{err: 'workoutController.updateWorkout: ERROR: Check server logs for details.'},
//         })
//     })
// };

module.exports = workoutController;