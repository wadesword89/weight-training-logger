import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/workouts')
      .then((res) => res.json())
      .then((data) => {
        // console.log('WORKOUT DATA :', data);
        setWorkout(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <blockquote className='centered'>"We are what we repeatedly do. Excellence, then, is not an act, but a habit."" -Will Durant</blockquote>
      <div className='create centered'>
        <Link to="./workouts/create"><i className="fa-solid fa-circle-plus"> Log An Exercise</i></Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Exercise</th>
            <th>Weight (lb) </th>
            <th>Reps</th>
            <th>Sets</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {workout.map((workoutObj, index) => {
            return (
              <tr key={workoutObj._id}>
                <td>{workoutObj.date}</td>
                <td>{workoutObj.exercise}</td>
                <td>{workoutObj.weight}</td>
                <td>{workoutObj.rep}</td>
                <td>{workoutObj.set}</td>
                <td>
                  <span className='icons detail'>
                    <Link to={`./workouts/details/${workoutObj._id}`}>
                    <i className="fa-solid fa-circle-info"></i>
                    </Link>
                  </span>
                  <span className="icons edit">
                      <Link to={`./workouts/edit/${workoutObj._id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
                  </span>
                  <span className="icons delete">
                      <Link to={`./workouts/delete/${workoutObj._id}`}>
                      <i className="fa-solid fa-trash"></i>
                      </Link>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
