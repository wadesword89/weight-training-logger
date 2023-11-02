import React from "react";
import {Routes, Route} from 'react-router-dom';

//components
import Navbar from "./components/Navbar";
import Home from "./components/home";
import CreateWorkout from "./components/CreateWorkout";
import ShowWorkout from "./components/ShowWorkout";
import EditWorkout from "./components/EditWorkout";
import DeleteWorkout from "./components/DeleteWorkout";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/workouts/create" element={<CreateWorkout />}/>
            <Route path="/workouts/details/:id" element={<ShowWorkout />}/>
            <Route path="/workouts/edit/:id" element={<EditWorkout />}/>
            <Route path="/workouts/delete/:id" element={<DeleteWorkout />}/>
        </Routes>
    );
}

export default App