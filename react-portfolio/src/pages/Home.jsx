import React, { useState, useEffect,  useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import './../index.css';
const Home = () => {
  const [homeData, setHomeData] = useState({});
  const typedElement = useRef(null);

  useEffect(() => {
    fetch('/portfolioData.json')
      .then(response => response.json())
      .then(data => setHomeData(data.home));
  }, []);

  useEffect(() => {
    // Initialize Typed.js once the homeData is fetched and contains typedStrings
    if (homeData.typedStrings) {
      const typed = new Typed(typedElement.current, {
        strings: homeData.typedStrings, // Use strings from the JSON file
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      });

      return () => {
        typed.destroy(); // Clean up Typed.js instance
      };
    }
  }, [homeData]);

  return (
    <>
    <div className="container text-center mt-5 vh-100">
      <h1 className="display-4">{homeData.title}</h1>
      <p className="lead">{homeData.description}</p>
      <p className="lead">
        <span ref={typedElement}></span> 
      </p>
      <Link to="/about" className="btn btn-primary mt-3">
        {homeData.buttonText}
      </Link>
    </div>

    </>
  );
};

export default Home;
