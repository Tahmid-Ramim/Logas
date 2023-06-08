import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer.jsx";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";
import Todo from "./Todos";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
