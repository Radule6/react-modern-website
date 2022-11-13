import React from "react";
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";
import { Navbar, Brand, CTA } from "./components";
import "./app.css";
const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};
export default App;
