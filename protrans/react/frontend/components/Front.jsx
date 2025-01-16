import "../style/css/Front.css";
import home from "../style/image/home.png"
import { useNavigate } from 'react-router-dom';


export default function Front()
{
    const navigate = useNavigate();
const handleScrollTo = (section) => {
    navigate('/', { state: { scrollTo: section } });
};
    return (
   <div className="full">
        <img src={home} alt="flag"></img>
        <div className="box">
            <div className="name"> - HassouniProtrans
                <div className="transport">Transport de Marchandise <br></br> National & International</div>
            </div>
                <a onClick={() => handleScrollTo('contact1')}><button className="contactus">Contact Us</button></a>
                
        </div>
   </div>)
}