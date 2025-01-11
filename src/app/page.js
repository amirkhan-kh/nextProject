import React from "react";
import { Header, Footer } from "../components/index.jsx";
import { Intro, Fashion, Experience, Customers, Question, Seamless } from "../sections/index.jsx";

const page = () => {
  return (
    <>
      <Header/>
      <main>
        <Intro/>
        <Fashion/>
        <Experience/>
        <Customers/>
        <Question/>
        <Seamless/>
      </main>
      <Footer/>
    </>
  );
};

export default page;
