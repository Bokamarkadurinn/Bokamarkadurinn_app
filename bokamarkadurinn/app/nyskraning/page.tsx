"use client"
import validator from 'validator';
import './nyskra.css';
import React, { useState } from 'react';

export default function Page() {
    /*
    const handleLoginWithGoogle = async () => {
        await signIn("google");
        return;
      }
      */
    const [input, setInput] = useState({
        gmail: '',
        uname: '',
        psw: '',
        cpsw: ''
      });
     
      const [error, setError] = useState({
        gmail: '',
        uname: '',
        psw: '',
        cpsw: ''
      })
      
      const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        if (name === 'gmail') {
            validateEmail(value);
        } else {
            validateInput(e);
        }
    };

    const validateEmail = (value: string) => {
        if (!validator.isEmail(value)) {
            setError(prev => ({ ...prev, gmail: 'Email-ið er rangt dæmi um email: dæmi@dæmi.com' }));
        } else {
            setError(prev => ({ ...prev, gmail: '' }));
        }
    };
     
      const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
       
          switch (name) {
            case "gmail":
                if (!value) {
                    stateObj[name] = "Skrifaðu gmail-ið";
                } else if (!input.gmail.includes("@") || !input.gmail.includes(".")) {
                    stateObj[name] = "gmail-ið þarf að hafa @ og .";
                  }
                break;
            case "uname":
              if (!value) {
                stateObj[name] = "Skrifaðu notendanafn";
              }
              break;
       
            case "psw":
              if (!value) {
                stateObj[name] = "Skráðu lykilorðið";
              } else if (input.cpsw && value !== input.cpsw) {
                stateObj["cpsw"] = "lykilorðið og endurskráða lykilorðið eru ekki eins";
              } else {
                stateObj["cpsw"] = input.cpsw ? "" : error.cpsw;
              }
              break;
       
            case "cpsw":
              if (!value) {
                stateObj[name] = "Endur skráðu lykilorðið";
              } else if (input.psw && value !== input.psw) {
                stateObj[name] = "lykilorði er ekki það sama";
              }
              break;
       
            default:
              break;
          }
       
          return stateObj;
        });
      }

    return (
        <main>
            <h1 id="nyskraning">Nýskráning</h1>

            <div id="container">

                <p>
                    <label id='gmail'><b>Gmail</b></label>
                    <input
                    type="email"
                    name="gmail"
                    placeholder='Skráðu email'
                    value={input.gmail}
                    onChange={onInputChange}
                    onBlur={() => validateEmail(input.gmail)} // Call validateEmail on blur
                    />
                    {error.gmail && <span className='err'>{error.gmail}</span>}
                </p>

                <p>
                <label id="uname"><b>Notandanafn</b></label>
                <input
                type="text"
                name="uname"
                placeholder='Skráðu Notandanafnið'
                value={input.uname}
                onChange={onInputChange}
                onBlur={validateInput}></input>
                {error.uname && <span className='err'>{error.uname}</span>}
                </p>

                <p>
                <label id="psw"><b>Lykilorð</b></label>
                <input
                type="password"
                name="psw"
                placeholder='Skráðu Lykilorðið'
                value={input.psw}
                onChange={onInputChange}
                onBlur={validateInput}></input>
                {error.psw && <span className='err'>{error.psw}</span>}
                </p>

                <p>
                <label id="cpsw"><b>Endur skráðu lykilorðið</b></label>
                <input
                type="password"
                name="cpsw"
                placeholder='Endur skráðu lykilorðið'
                value={input.cpsw}
                onChange={onInputChange}
                onBlur={validateInput}></input>
                {error.cpsw && <span className='err'>{error.cpsw}</span>}
                </p>

                <button type="submit">Stofna</button>

                {/*<button onClick={handleLoginWithGoogle}>Nýskrá með google</button> # google login */}
            </div>
        </main>
    );
}