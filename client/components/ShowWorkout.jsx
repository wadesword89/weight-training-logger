import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowWorkout = () => {
  const [workout, setWorkout] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:3000/workouts/${id}`)
      .then((res) => res.json())
      .then((workoutObj) => {
        // console.log('WORKOUT :', workoutObj);
        setWorkout(workoutObj);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      <h1>Workout Details:</h1>
      <div className='spaced'><strong>Date:</strong> {workout.date}</div>
      <div className='spaced'><strong>Exercise:</strong> {workout.exercise}</div>
      <div className='spaced'><strong>Weight (lb):</strong> {workout.weight}</div>
      <div className='spaced'><strong>Rep:</strong> {workout.rep}</div>
      <div className='spaced'><strong>Set:</strong> {workout.set}</div>
      <div className='spaced'><strong>Created at:</strong> {new Date(workout.createdAt).toString()}</div>
      <div className='spaced'><strong>Last Updated at:</strong> {new Date(workout.updatedAt).toString()}</div>
    </div>
  );
};

export default ShowWorkout;
