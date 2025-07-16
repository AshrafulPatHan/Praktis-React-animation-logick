import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from 'react-hot-toast';
import LSlider from "./page/slider/LSlider.jsx";
import Css from "./page/css/Css.jsx";
import Sudo_Ele from "./page/css/sudo/Sudo_Ele.jsx";
import Flex from "./page/css/flex/Flex.jsx";
import Gasp from "./page/gsap/start/Gasp.jsx";
import {  createBrowserRouter,  RouterProvider, } from "react-router";
import From from "./page/gsap/formTo/From.jsx";



const router = createBrowserRouter([
  { path: "/",element: <App /> },
  { path: "/lu-slider",element: <LSlider /> },
  { path: "/css-advance",element: <Css /> },
  { path: "/css-sudo",element: <Sudo_Ele /> },
  { path: "/css-flex",element: <Flex /> },
  { path: "/gasp",element: <Gasp /> },
  { path: "/from",element: <From /> },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <div>
    <RouterProvider router={router} />
    <Toaster />
  </div>
);
