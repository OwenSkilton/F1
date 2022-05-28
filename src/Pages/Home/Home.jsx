import React from 'react';
import "../../stylesheets/home.scss"
import Timer from "./Timer";

const Home = () => {
  return (
    <div>
        <div className="title">Welcome to F1 wiki</div>
        <Timer/>
    </div>
  );
};

export default Home;
