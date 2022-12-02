
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/home"
import Contato from "./pages/Contato/contato"

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/login" />
          <Route path="/topics"/>
          <Route path="/home" element={<Home />}/> 
          <Route path="/contato" element={<Contato />}/> 
        </Routes>
    </BrowserRouter>
  );
}