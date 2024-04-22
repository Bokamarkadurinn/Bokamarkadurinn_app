// import './forsida.css';
"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <main id="forsida">
            <h1 id="head">Forsíða</h1>
            <nav className="menu-nav">
          <ul>
                <li>
                  <Link href="/namsgrein/staerdfraedi">
                    <button>Stærfræði</button>
                  </Link>
                </li>
                <li>
                  <Link href="/namsgrein/islenska">
                    <button>Íslenska</button>
                  </Link>
                </li>
                <li>
                  <Link href="/namsgrein/enska">
                    <button>Enska</button>
                  </Link>
                </li>
                <li>
                  <Link href="/namsgrein/danska">
                    <button>Danska</button>
                  </Link>
                </li>
                <li>
                  <Link href="/namsgrein/annad">
                    <button>Annað</button>
                  </Link>
                </li>
              </ul>
          </nav>
            <style jsx>{`
            #head {
              text-align: center;
              color: white;
              padding: 15px;
              font-size: 80px;
              font-family: Arial, Helvetica, sans-serif;
              font-weight: bold;
            }
            button {
            padding: 12px 28px;
            border-radius: 20px;
            display: block;
            margin: auto;
            transition-duration: 0.4s;
            border: none;
            outline: none;
            text-align: center;
            background-color: black;
            color: white;
            position: relative;
            z-index: 0;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            cursor: pointer;
            font-size: 300%;
            width: 70%;
            padding: 2000%;
            font-family: Arial, Helvetica, sans-serif;
            }
            button:hover {
            background-color: white;
            color: black;
            transform: scale(1.125);
            }
            
            button:active {
            transform: scale(1.025);
            }
            
            @media (min-width: 768px) {
            button {
            font-size: 1.5rem;
            padding: .75rem 2rem;
            }
            }
            .menu-nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            }
            
            .menu-nav ul li {
            margin-bottom: 15px;
            }
            
            @media screen and (max-height: 1025px) {
            .menu-nav ul li button {
            width: 70%;
            padding: 7%;
            font-size: 200%;
            }
            }
            @media screen and (max-width: 767px) {
            .menu-nav ul li button {
            width: 80%;
            padding: 10%;
            font-size: 200%;
            }
            }
            
            @media screen and (max-width: 480px) {
            .menu-nav ul li button {
            width: 70%;
            padding: 8%;
            font-size: 200%;
            }
            }
            @media screen and (max-height: 741px) {
            .menu-nav ul li button {
            width: 70%;
            padding: 5%;
            font-size: 200%;
            }
            }
            @media screen and (max-height: 670px) {
            .menu-nav ul li button {
            width: 70%;
            padding: 4%;
            font-size: 200%;
            }
            }
`}</style>
        </main>
    );
}
