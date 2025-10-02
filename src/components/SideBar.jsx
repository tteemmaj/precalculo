import React from 'react';
import "../styles/SideBar.css"

const sideBar = () => {
  return (
    <div className="card">
      <span>In this article</span>
      <div className="card__container">
        <p className="element">Try it</p>
        <p className="element">Syntax</p>
        <p className="element active">Formal definition</p>
        <p className="element">Formal syntax</p>
        <p className="element">Examples</p>
        <p className="element">See also</p>
        <p className="element">See also</p>
        <p className="element">See also</p>
        <p className="element">See also</p>
        <p className="element">See also</p>
      </div>
    </div>
  );
};

export default sideBar;
