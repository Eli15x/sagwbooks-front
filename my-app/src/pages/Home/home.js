import './home.css';
import React , { useEffect, useState } from "react";
import Bar from "../../components/bar/bar";
import Feed from "../../components/feed/feed";
import Writers from "../../components/writers/writers";
export default () => {
  
return (
    <>
      <Feed />   
      <Writers />
      <Bar />
    </>  
);

}                           