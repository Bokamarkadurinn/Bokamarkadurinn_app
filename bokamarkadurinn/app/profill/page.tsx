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
    const saekjaID = () => {
        const id = -1;
        if (id != -1) {
            return id;
        } else {
            return "XXXXX";
        }
    }
    const saekjaFraBaekur = () => {
        const fraBaekur: string[] = [];

        if (fraBaekur.length === 0) {
            return "ekkert";
        } else {
            // Return other content if fraBaekur is not empty
        }
    }

    const saekjaMinarBaekur = () => {
        const minarBaekur: string[] = [];

        if (minarBaekur.length === 0) {
            return "ekkert";
        } else {
            // Return other content if minarBaekur is not empty
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
            <p id='identity'>
                id: {saekjaID()}
            </p>
            <p id='dropdown' onClick={toggleFratOr}>
                Fráteknar bækur {fratOr ? "↓" : "→"} <br></br>
                {fratOr && (
                    <div>
                        {saekjaFraBaekur()}
                    </div>
                )}
            </p>
            <p id='dropdown' onClick={toggleMinarOr}>
                Mínar bækur {minarOr ? "↓" : "→"} <br></br>
                {minarOr && (
                    <div>
                        {saekjaMinarBaekur()}
                    </div>
                )}
            </p>
        </main>
    );
}