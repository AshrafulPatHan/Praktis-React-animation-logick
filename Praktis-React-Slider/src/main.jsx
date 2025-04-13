import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { store } from './Components/redux/stor.js'
import { Provider } from 'react-redux'
import Baner1 from "./Components/Baner/Baner1.jsx";
import Baner2 from "./Components/Baner/Baner2.jsx";
import Baner3 from "./Components/Baner/Baner3.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
<Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/baner1" element={<Baner1 />} />
      <Route path="/baner2" element={<Baner2 />} />
      <Route path="/baner3" element={<Baner3 />} /> 
    </Routes>
  </BrowserRouter>
</Provider>
);