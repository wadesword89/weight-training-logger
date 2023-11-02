import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditWorkout = () => {
  const [workout, setWorkout] = useState({});
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState('');
  const [rep, setRep] = useState('');
  const [set, setSet] = useState('');
  const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/workouts/${id}`)
      .then((res) => res.json())
      .then((workoutObj) => {
        console.log('WORKOUT :', workoutObj);
        setWorkout(workoutObj);
        setExercise(workoutObj.exercise);
        setWeight(workoutObj.weight);
        setRep(workoutObj.rep);
        setSet(workoutObj.set);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="centered">
      <h1>Edit Exercise</h1>
      <div>
          <label>Exercise: </label>
          <input
            type="text"
            value={exercise}
          />
        </div>
        <div>
          <label>Weight (lb): </label>
          <input
            type="text"
            value={weight}
          />
        </div>
        <div>
          <label>Rep: </label>
          <input
            type="text"
            value={rep}
          />
        </div>
        <div>
          <label>Set: </label>
          <input
            type="text"
            value={set}
          />
        </div>
    </div>
  );
};

export default EditWorkout;
