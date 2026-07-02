import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import emailjs from "@emailjs/browser";

import "aos/dist/aos.css"
import AOS from "aos"

AOS.init({
  duration: 1000,
  once: true
})
emailjs.init("Dhjdyy5TfeJFl0Z02");

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)