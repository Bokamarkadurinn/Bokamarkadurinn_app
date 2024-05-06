"use client"
import validator from 'validator';
import './gleymt.css';
import React, { useState } from 'react';

export default function Page() {
    /*
    const handleLoginWithGoogle = async () => {
        await signIn("google");
        return;
      }
      */
    const [input, setInput] = useState({
        email: ''
      });
     
      const [error, setError] = useState({
        email: ''
      })
      
      const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateEmail(value);
        
    };

    const validateEmail = (value: string) => {
        if (!validator.isEmail(value)) {
            setError(prev => ({ ...prev, email: 'Email-ið er rangt dæmi um email: dæmi@dæmi.com' }));
        } else {
            setError(prev => ({ ...prev, email: '' }));
        }
    };
      

    return (
        <main>
            <h1 id="gleymt">Gleymt lykilorð</h1>

            <div id="container">

                <p>
                    <label id='email'><b>Email</b></label>
                    <input
                    type="email"
                    name="email"
                    placeholder='Skráðu email'
                    value={input.email}
                    onChange={onInputChange}
                    onBlur={() => validateEmail(input.email)} // Call validateEmail on blur
                    />
                    {error.email && <span className='err'>{error.email}</span>}
                </p>

                <button type="submit">senda</button>

                {/*<button onClick={handleLoginWithGoogle}>Nýskrá með google</button> # google login */}
            </div>
        </main>
    );
}