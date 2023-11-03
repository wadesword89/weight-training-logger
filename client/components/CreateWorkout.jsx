import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateWorkout = () => {
  const [date, setDate] = useState('');
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState('');
  const [rep, setRep] = useState('');
  const [set, setSet] = useState('');
  const navigate = useNavigate();

  const handleSaveWorkout = () => {
    const data = {
      date,
      exercise,
      weight,
      rep,
      set,
    };
    fetch('http://localhost:3000/workouts/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
        });
  };

  return (
    <div className='centered'>
      <h1>Create Exercise</h1>
      <div>
        <div className='spaced'>
          <label>Date: </label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className='spaced'>
          <label>Exercise: </label>
          <input
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          />
        </div>
        <div className='spaced'>
          <label>Weight (lb): </label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className='spaced'>
          <label>Rep: </label>
          <input
            type="text"
            value={rep}
            onChange={(e) => setRep(e.target.value)}
          />
        </div>
        <div className='spaced'>
          <label>Set: </label>
          <input
            type="text"
            value={set}
            onChange={(e) => setSet(e.target.value)}
          />
        </div>
        <button onClick={handleSaveWorkout}>Save Exercise</button>
      </div>
    </div>
  );
};

export default CreateWorkout;
