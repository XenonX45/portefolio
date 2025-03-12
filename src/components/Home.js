import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="background-image"></div>
      <div className="content">
        <h2>Bastian MOLLO-GENE</h2>
        <h4>Développeur Full Stack</h4>
        <Link to="/presentation/Aproposdemoi" className="Apropos">A propos de moi</Link>
      </div>
    </div>
  );
}

export default Home;