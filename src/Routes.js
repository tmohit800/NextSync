import React from "react";
import { Routes, Route } from 'react-router-dom';
import AddTask from "./components/Add Task/AddTask";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AddTask />} />
        </Routes>
    )
}

export default AppRoutes;