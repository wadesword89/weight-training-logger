const express = require('express');
const router = express.Router();

const workoutController = require('../controllers/workoutController.js');


router.post('/', workoutController.createWorkout, (req, res) => {
    res.status(200).json(res.locals.workout);
})

router.get('/', workoutController.findWorkout, (req, res) => {
    res.status(200).json(res.locals.workout);
})

router.get('/:id', workoutController.getAWorkout, (req, res) => {
    res.status(200).json(res.locals.workout);
})


module.exports = router;