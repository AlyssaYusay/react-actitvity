import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import Exercise3 from "./pages/Exercise3";
import Exercise4 from "./pages/Exercise4";
import Exercise5 from "./pages/Exercise5";
import Exercise6 from "./pages/Exercise6";
import 'bootstrap/dist/css/bootstrap.css';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Exercise1" element={<Exercise1 />} />
          <Route path="Exercise2" element={<Exercise2 />} />
          <Route path="Exercise3" element={<Exercise3 />} />
          <Route path="Exercise4" element={<Exercise4 />} />
          <Route path="Exercise5" element={<Exercise5 />} />
          <Route path="Exercise6" element={<Exercise6 />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
