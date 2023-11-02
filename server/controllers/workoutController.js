const Workout = require('../models/workoutModel.js');
const mongoose = require('mongoose');

const workoutController = {};

//create a workout
workoutController.createWorkout = (req, res, next) => {
    const { date, exercise, weight, rep, set } = req.body;

    if(!date || !exercise || !weight || !rep || !set) {
        return next({
            log: `Missing entry in workoutController.createWorkout`,
            message :{err: 'Entries cannot be empty.'},
        })
    }

    Workout.create({date, exercise, weight, rep, set})
        .then(workoutDoc => {
            // console.log('Created this Document :', workoutDoc);
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

//get all workouts
workoutController.getAllWorkouts = (req, res, next) => {
    Workout.find({}).exec()
        .then(workoutDoc => {
            // console.log("Found these Documents :", workoutDoc);
            res.locals.workout = workoutDoc;
            return next();
        })
        .catch(err => {
            return next({
                log: `workoutController.getAllWorkouts :${err}`,
                message :{err: 'workoutController.getAllWorkouts: ERROR: Workouts not found.'},
                status: 404
            });
        })
};

//get a workout by id
workoutController.getAWorkout = (req, res, next) => {
    const { id } = req.params;
    Workout.findById(id).exec()
        .then(workoutDoc => {
            // console.log("Found this Document :", workoutDoc);
            res.locals.workout = workoutDoc;
            return next();
        })
        .catch(err => {
            return next({
                log: `workoutController.getAWorkout :${err}`,
                message :{err: 'workoutController.getAWorkout: ERROR: Workout not found.'},
                status: 404
            })
        })
};

// update a workout
workoutController.updateWorkout = (req, res, next) => {
    const { date, exercise, weight, rep, set } = req.body;
    const { id } = req.params;

    if(!date || !exercise || !weight || !rep || !set) {
        return next({
            log: `Missing entry in workoutController.updateWorkout`,
            message :{err: 'Entries cannot be empty.'},
        })
    }
    
    Workout.findByIdAndUpdate(id, req.body, {new: true}).exec()
        .then(workoutUpdated => {
            console.log('Workout Updated to:', workoutUpdated);
            res.locals.workoutUpdated = workoutUpdated;
            return next();
        })
        .catch(err => {
            return next({
                log: `workoutController.updateWorkout :${err}`,
                message :{err: 'workoutController.updateWorkout: ERROR: Workout not found and cannot be updated.'},
                status: 404
        })
    })
};

//delete a workout
workoutController.deleteWorkout = (req, res, next) => {
    const { id } = req.params;
    Workout.findByIdAndDelete(id).exec()
    .then(workoutDeleted => {
        // console.log('DELETED this workout :', workoutDeleted);
        res.locals.workoutDeleted = workoutDeleted;
        return next();
    })
    .catch(err => {
        return next({
            log: `workoutController.deleteWorkout :${err}`,
            message :{err: 'workoutController.deleteWorkout: ERROR: Workout not found.'},
            status: 404
        })
    })
};


module.exports = workoutController;