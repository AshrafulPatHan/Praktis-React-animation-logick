import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { Toaster } from 'react-hot-toast';
import LSlider from "./page/slider/LSlider.jsx";
import Css from "./page/css/Css.jsx";
import Sudo_Ele from "./page/css/sudo/Sudo_Ele.jsx";



const root = document.getElementById("root");+

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/lu-slider" element={<LSlider />} />
      <Route path="/css-advance" element={<Css />} />
      <Route path="/css-sudo" element={<Sudo_Ele />} />
    </Routes>
    <Toaster />
  </BrowserRouter>
);