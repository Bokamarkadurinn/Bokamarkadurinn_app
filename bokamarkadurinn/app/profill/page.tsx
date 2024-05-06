"use client"
import { useHistory } from 'react-router-dom';
import './profill.css';

export default function Page() {
    const history = useHistory();
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
            /* hér er leið til að fara inná innskráningar síðuna ef það er ekkert notendanafn
            history.push('./innskraning');
            return null;
            */
            return "Jón Jónsson";// þetta er bara til að testa, síðan ætti að fara á innskráningar síðuna ef það er ekkert notendarnafn
        }
    }
    return (
        <main>
            <title>Prófílssíða</title>
            <img src={saekjaMynd()} id="mynd" />
            <p id='nafn'>
                {saekjaNafn()}
            </p>
        </main>
    );
}