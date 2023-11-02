import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeleteWorkout = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/workouts/${id}`, {
            method: 'DELETE',
        })
          .then((res) => res.json())
          .then(data => console.log(data))
          .catch((err) => {
            console.log(err);
          });
      }, []);

    return (
        <div className="centered">
          <h2> Workout Deleted </h2>
        </div>
    )
}

export default DeleteWorkout