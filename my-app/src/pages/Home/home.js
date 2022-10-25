import './home.css';
import React , { useEffect, useState } from "react";
import Bar from "../../components/bar/bar";
import Feed from "../../components/feed/feed";
import Writers from "../../components/writers/writers";
import Contact from "../../components/contact/contact";
export default () => {
  
return (
    <>
      <Bar />
      <Feed />   
      <Writers />
      <Contact />
    </>  
);

}                           