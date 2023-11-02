import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [workout, setWorkout] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/workouts')
            .then(res => res.json())
            .then(data => {
                console.log("WORKOUT DATA :", data[0].date);
                setWorkout(data);
                //[{}, {}, {}]
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Exercise</th>
                    <th>Weight</th>
                    <th>Reps</th>
                    <th>Sets</th>
                    <th>Edits</th>
                </tr>
            </thead>
            <tbody>
                {workout.map((workout, index) => {
                    <tr key={workout._id}>
                        <td>{workout.date}</td>
                        <td>{workout.exercise}</td>
                        <td>{workout.weight}</td>å
                        <td>{workout.rep}</td>
                        <td>{workout.set}</td>
                        <td>
                            <div>
                                <Link to={`./workouts/details/${workout.id}`}>
                                    Details
                                </Link>
                            </div>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Home