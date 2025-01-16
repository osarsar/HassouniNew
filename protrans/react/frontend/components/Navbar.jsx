import "../style/css/Navbar.css"
import React , {useState} from 'react'
import logo from "../style/image/logo.png"
import facebook from "../style/image/facebook.png"
import instagram from "../style/image/instagram.png"
import linkedin from "../style/image/linkedin.png"
import whatsapp from "../style/image/whatsapp.png"
import menu from "../style/image/menu2.png"
import { useNavigate} from 'react-router-dom';

function Navbar()
{
    const [showAproposMenu, setShowAproposMenu] = useState(false);
    const toggleAproposMenu = () => {
        setShowAproposMenu(!showAproposMenu);
    };

    function ShowMenu() {
    var menu = document.getElementById("MenuList");
    menu.classList.toggle("visible");
    };

    const navigate = useNavigate();
    const handleScrollTo = (section) => {
    navigate('/', { state: { scrollTo: section } });
    };

    const handleScrollTo2 = (section) => {
        navigate('/Apropos', { state: { scrollTo: section } });
    };

    return (
        <nav>
            <div>
            <a href="/Hassouni_Protrans/"><img className="logo" src={logo} alt="logo"></img></a>
            </div>
            <ul id="MenuList">
                <a href="/Hassouni_Protrans/">Accueil</a>
                <div className="dropdown">
                    <a href="/Hassouni_Protrans/#/Apropos">Apropos</a>
                        <ul className="list">
                            <li><a onClick={() => handleScrollTo2('quisomme')}>- Qui Somme Nous</a></li>
                            <li><a onClick={() => handleScrollTo2('valeur')}>- Nos Valeurs et Engagements</a></li>
                            <li><a onClick={() => handleScrollTo2('activite')}>- Nos Activités</a></li>
                        </ul>
                </div>
                <a onClick={() => handleScrollTo('solution')}>Nos Solutions</a>
                <a href="/Hassouni_Protrans/#/Transport">Transport</a>
                <a onClick={() => handleScrollTo('connection')}>Connection</a>
                <a onClick={() => handleScrollTo('contact1')}>Contact</a>
            </ul>
            <div class="contact">
                <a href="#"><img src={facebook} alt="flag"></img></a>
                <a href="https://www.instagram.com/hassouni_protrans/?utm_source=qr&igsh=dGgzamV0MW5xdDA1"> <img src={instagram} alt="flag"></img></a>
                <a href="https://www.linkedin.com/in/ahmed-hassouni-b22896272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer="><img src={linkedin} alt="flag"></img></a>
                <a href="https://wa.me/212661201103"><img src={whatsapp} alt="flag"></img></a>

            </div>
            <div className="menu" >
            <img className="menu" onClick={ShowMenu} src={menu} alt="flag"></img>
            </div>

        </nav>);
}

export default Navbar;
