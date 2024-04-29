"use client"
import './forsida.css';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <main id="forsida">
            <h1 id="head">Bókamarkaðurinn</h1>
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
        </main>
    );
}
