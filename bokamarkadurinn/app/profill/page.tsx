"use client"
import React, { useState } from 'react';
import './profill.css';

export default function Page() {
    const [fratOr, setFratOr] = useState(false);
    const [minarOr, setMinarOr] = useState(false);
    const saekjaMynd = () => {
        const mynd = "";
        if (mynd != "") {
            return mynd;
        } else {
            return "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg";
        }
    }
    const saekjaNafn = () => {
        const nafn = "";
        if (nafn != "") {
            return nafn;
        } else {
            /*// hér er leið til að fara inná innskráningar síðuna ef það er ekkert notendanafn
            window.location.href = "./innskraning";
            return null;
            */
            return "Jón Jónsson";// þetta er bara til að testa, síðan ætti að fara á innskráningar síðuna ef það er ekkert notendarnafn
        }
    }
    const saekjaFraBaekur = () => {
        const fraBaekur: string[] = [];

        if (fraBaekur.length === 0) {
            return "ekkert";
        } else {
            return (
                <select>
                    {fraBaekur.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                </select>
            );
        }
    }

    const saekjaMinarBaekur = () => {
        const minarBaekur: string[] = [];

        if (minarBaekur.length === 0) {
            return "ekkert";
        } else {
            return (
                <select>
                    {minarBaekur.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                </select>
            );
        }
    }
    const toggleFratOr = () => {
        setFratOr(!fratOr);
    }

    const toggleMinarOr = () => {
        setMinarOr(!minarOr);
    }
    return (
        <main>
            <title>Prófílssíða</title>
            <img src={saekjaMynd()} id="mynd" />
            <p id='nafn'>
                {saekjaNafn()}
            </p>
            <p id='dropdown' onClick={toggleFratOr}>
                Fráteknar bækur {fratOr ? "↓" : "→"} <br></br>
                {fratOr && (
                    <select>
                        {saekjaFraBaekur()}
                    </select>
                )}
            </p>
            <p id='dropdown' onClick={toggleMinarOr}>
                Mínar bækur {minarOr ? "↓" : "→"} <br></br>
                {minarOr && (
                    <select>
                        {saekjaMinarBaekur()}
                    </select>
                )}
            </p>
        </main>
    );
}