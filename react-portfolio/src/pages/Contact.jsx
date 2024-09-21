import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [contactData, setContactData] = useState({});

  useEffect(() => {
    fetch('/portfolioData.json')
      .then(response => response.json())
      .then(data => setContactData(data.contact));
  }, []);

  return (
    <div className="container mt-5">
      <h2>{contactData.title}</h2>
      <p>{contactData.description}</p>
      <p>Email: {contactData.email}</p>
    </div>
  );
};

export default Contact;
