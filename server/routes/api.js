const express = require('express');
const router = express.Router();

const workoutController = require('../controllers/workoutController.js');

router.post('/', workoutController.createWorkout, (req, res) => {
    res.status(200).json(res.locals.workout);
})

router.get('/', workoutController.getAllWorkouts, (req, res) => {
    res.status(200).json(res.locals.workout);
})

router.get('/:id', workoutController.getAWorkout, (req, res) => {
    res.status(200).json(res.locals.workout);
})

router.put('/:id', workoutController.updateWorkout, (req, res) => {
    res.status(200).json(res.locals.workoutUpdated)
})

router.delete('/:id', workoutController.deleteWorkout, (req, res) => {
    res.status(200).json(res.locals.workoutDeleted);
})



module.exports = router;