import React, { useState, useEffect } from 'react';

const About = () => {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    fetch('/portfolioData.json')
      .then(response => response.json())
      .then(data => setAboutData(data.about));
  }, []);

  return (
    <div className="container mt-5">
      <h2>{aboutData.title}</h2>
      <p>{aboutData.description}</p>
    </div>
  );
};

export default About;
