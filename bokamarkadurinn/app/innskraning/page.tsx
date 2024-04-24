"use client"
import './innskra.css';

export default function Page() {
    return (
        <main>
            <h1 id="innskraning">Innskráning</h1>

            <div id="container">
                <p>
                <label id="uname"><b>Notandanafn</b></label>
                <input type="text" placeholder="Skráðu Notandanafnið" name="uname" required></input>
                </p>

                <p>
                <label id="psw"><b>Lykilorð</b></label>
                <input type="password" placeholder="Skráðu Lykilorðið" name="psw" required></input>
                </p>

                <span id="forgot">Gleymt <a href="#">Lykilorð?</a></span>

                <button type="submit">Skrá inn</button>

                <p id='adgang'>
                    <span>Ekki með aðgang? <br /></span>
                    <span> <a href="#">Nýskráðu</a> þig</span>
                </p>
            </div>
        </main>
    );
}