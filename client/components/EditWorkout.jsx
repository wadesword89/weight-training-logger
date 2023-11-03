import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditWorkout = () => {
  const [workout, setWorkout] = useState({});
  const [date, setDate] = useState('');
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState('');
  const [rep, setRep] = useState('');
  const [set, setSet] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/workouts/${id}`)
      .then((res) => res.json())
      .then((workoutObj) => {
        console.log('WORKOUT :', workoutObj);
        setWorkout(workoutObj);
        setDate(workoutObj.date);
        setExercise(workoutObj.exercise);
        setWeight(workoutObj.weight);
        setRep(workoutObj.rep);
        setSet(workoutObj.set);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEditWorkout = () => {
    const data = {
      date,
      exercise,
      weight,
      rep,
      set,
    };
    fetch(`http://localhost:3000/workouts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="centered">
      <h1>Edit Exercise</h1>
      <div>
        <label>Date: </label>
        <input
          type="string"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Exercise: </label>
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
      </div>
      <div>
        <label>Weight (lb): </label>
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Rep: </label>
        <input
          type="text"
          value={rep}
          onChange={(e) => setRep(e.target.value)}
        />
      </div>
      <div>
        <label>Set: </label>
        <input
          type="text"
          value={set}
          onChange={(e) => setSet(e.target.value)}
        />
      </div>
      <button onClick={handleEditWorkout}>Edit Workout</button>
    </div>
  );
};

export default EditWorkout;
