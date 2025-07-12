import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { store } from './Components/redux/stor.js'
import { Provider } from 'react-redux'
import Baner1 from "./Components/Baner/Baner1.jsx";
import Baner2 from "./Components/Baner/Baner2.jsx";
import Baner3 from "./Components/Baner/Baner3.jsx";
import Gsap from "./Components/gsap/Gsap.jsx";
import Gsap_1 from "./Components/gsap/Gsap_1.jsx";
import Gsap_2 from "./Components/gsap/Gsap_2.jsx";
import Browser from "./page/Browser.jsx";
import toast, { Toaster } from 'react-hot-toast';
import Design from "./page/Design.jsx";
import ImageBB from "./page/ImageBB.jsx";
import Gsap_3 from "./Components/gsap/Gsap_3.jsx";
import Css from "./page/css/ui/Css.jsx";


const root = document.getElementById("root");+

ReactDOM.createRoot(root).render(
<Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/baner1" element={<Baner1 />} />
      <Route path="/baner2" element={<Baner2 />} />
      <Route path="/baner3" element={<Baner3 />} /> 
      <Route path="/gsap" element={<Gsap />} /> 
      <Route path="/gsap1" element={<Gsap_1 />} /> 
      <Route path="/gsap2" element={<Gsap_2 />} />
      <Route path="/gsap3" element={<Gsap_3 />} />
      <Route path="/browser" element={<Browser />} />
      <Route path="/design" element={<Design />} />
      <Route path="/image" element={<ImageBB />} />
      <Route path="/css" element={<Css />} />
    </Routes>
  </BrowserRouter>
  <Toaster />
</Provider>
);