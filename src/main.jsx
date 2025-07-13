import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { store } from './Components/redux/stor.js'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';



const root = document.getElementById("root");+

ReactDOM.createRoot(root).render(
<Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
  <Toaster />
</Provider>
);