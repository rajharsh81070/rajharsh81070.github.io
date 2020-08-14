import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import MainBody from "./components/MainBody";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";

const Home = () => {
  return (
    <>
      <MainBody />
      <AboutMe />
      <Project />
      <Skills />
      <Certifications />
    </>
  );
};

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Footer />
    </BrowserRouter>
  )
};

export default App;