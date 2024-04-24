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
                  <Link href="/staerdfraedi">
                    <button>Stærfræði</button>
                  </Link>
                </li>
                <li>
                  <Link href="/islenska">
                    <button>Íslenska</button>
                  </Link>
                </li>
                <li>
                  <Link href="/enska">
                    <button>Enska</button>
                  </Link>
                </li>
                <li>
                  <Link href="/danska">
                    <button>Danska</button>
                  </Link>
                </li>
                <li>
                  <Link href="/annad">
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
            font-family: "Times New Roman", Times, serif;
            font-size: 16px;
            width: 20%;
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

        @media screen and (max-width: 768px) {
          .menu-nav ul li button {
            width: 200px;
            font-size: 16px;
          }
        }
      
        @media screen and (max-width: 480px) {
          .menu-nav ul li button {
            width: 150px;
            font-size: 14px;
          }
        }
`}</style>
        </main>
    );
}
