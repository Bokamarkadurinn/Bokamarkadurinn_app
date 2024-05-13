"use client"
import './nyskra.css';
import React, { useState } from 'react';

export default function Page() {
  // State variables to store form data
  const [heiti, setHeiti] = useState('');
  const [verd, setVerd] = useState('');
  const [hofundur, setHofundur] = useState('');
  const [seljandiID, setSeljandiID] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { heiti, verd, hofundur, seljandiID });
  };

  return (
    <main>
      <title>Skrá</title>
      <h1 id="nyskraning">Skrá bók</h1>

      <div id="container">
        {/* Form for user input */}
        <form onSubmit={handleSubmit}>
          {/* Input for "Heiti" */}
          <p>
            <label id='heiti'><b>Heiti</b></label>
            <input
              type="text"
              name="heiti"
              placeholder='Skráðu heiti'
              value={heiti}
              onChange={(e) => setHeiti(e.target.value)}
            />
          </p>

          {/* Input for "Verð" */}
          <p>
            <label id='verd'><b>Verð</b></label>
            <input
              type="text"
              name="verd"
              placeholder='Skráðu verð'
              value={verd}
              onChange={(e) => setVerd(e.target.value)}
            />
          </p>

          {/* Input for "Höfundur" */}
          <p>
            <label id='hofundur'><b>Höfundur</b></label>
            <input
              type="text"
              name="hofundur"
              placeholder='Skráðu höfund'
              value={hofundur}
              onChange={(e) => setHofundur(e.target.value)}
            />
          </p>

          {/* Input for "Seljandi ID" */}
          <p>
            <label id='seljandiID'><b>Seljandi ID</b></label>
            <input
              type="text"
              name="seljandiID"
              placeholder='Skráðu seljandi ID'
              value={seljandiID}
              onChange={(e) => setSeljandiID(e.target.value)}
            />
          </p>

          {/* Button to submit the form */}
          <button type="submit">Skrá</button>
        </form>
      </div>
    </main>
  );
}