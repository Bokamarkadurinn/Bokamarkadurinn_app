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
        email: '',
        uname: '',
        psw: '',
        cpsw: ''
      });
     
      const [error, setError] = useState({
        email: '',
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
        if (name === 'email') {
            validateEmail(value);
        } else {
            validateInput(e);
        }
    };

    const validateEmail = (value: string) => {
        if (!validator.isEmail(value)) {
            setError(prev => ({ ...prev, email: 'Email-ið er rangt dæmi um email: dæmi@dæmi.com' }));
        } else {
            setError(prev => ({ ...prev, email: '' }));
        }
    };
     
      const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
       
          switch (name) {
            case "email":
                if (!value) {
                    stateObj[name] = "Skrifaðu email-ið";
                } else if (!input.email.includes("@") || !input.email.includes(".")) {
                    stateObj[name] = "email-ið þarf að hafa @ og .";
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
              } else if (value.length < 7) {
                  stateObj[name] = "Lykilorðið verður að hafa að minnsta kosti 7 tölur eða stafi";
              } else if (input.cpsw && value !== input.cpsw) {
                stateObj["cpsw"] = "Lykilorðið og endurskráða lykilorðið eru ekki eins";
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
          <title>Nýskráning</title>
            <h1 id="nyskraning">Nýskráning</h1>

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