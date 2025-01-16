import React from 'react';
import { motion } from 'framer-motion';
import relatimg from '../component/relatimg';
import '../style/css/Contact.css';
import phone from "../style/image/phone.png"
import email from "../style/image/email.png"
import linkedin from "../style/image/linkedin.png"
import instagram from "../style/image/instagram.png"
import facebook from "../style/image/facebook.png"
import whatsapp from "../style/image/whatsapp.png"
function Contact() {

    return (
        <div className="Contact_all">
            <div className='titles'>
                Contactez Nous
            </div>
            <p>Nous serions ravis de discuter de vos besoins en matière de migration cloud et de sécurité.<br/>
            Veuillez utiliser le formulaire ci-dessous pour nous contacter, ou choisissez l'une des autres options pour une réponse rapide.</p>
            <div className='content'>
                <div className='left'>
                    <div>
                        <div className='title'>Information sur le Contact</div>
                        <p>Nous sommes à votre écoute pour toute question ou demande d'information.<br/>
                        N'hésitez pas à nous contacter !</p>
                    </div>
                    <div className="coordonne">
                        <div>
                            <img src={phone} alt="logo" />
                            <div>+212 6 20 51 31 56</div>
                        </div>
                        <div>
                            <img src={email} alt="logo" />
                            <div>osarsarjob@gmail.com</div>
                        </div>
                    </div>
                    <div className='sociaux'>
                        <img src={linkedin} alt="logo" />
                        <img src={facebook} alt="logo" />
                        <img src={whatsapp} alt="logo" />
                        {/* <img src={instagram} alt="logo" /> */}
                    </div>
                </div>
                <div className='right'>
                    <div className='title'>Formulaire de Contact</div>
                    <input placeholder='your name' type='text'/>
                    <input placeholder='email' type='email'/>
                    <textarea placeholder='message' type='text'/>
                    <div className="send">Envoyer</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
