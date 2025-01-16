import React, { useState } from 'react';
import "../style/css/Contact.css";
import emailjs from '@emailjs/browser';

export default function Contact() {
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const Params = {
    //         from_name: username,
    //         from_email: email,
    //         message: message,
    //     };

    //     emailjs.send('service_loqv6p8', 'template_45ymu1s', Params, '7_zpZsZsRDqup1yja')
    //         .then((response) => {
    //             console.log('Email sent successfully!', response.status, response.text);
    //             alert('Your message has been sent successfully!');
    //         }, (error) => {
    //             console.error('Failed to send email:', error);
    //             alert('There was an error sending your message. Please try again.');
    //         });
    // };

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
                            {/* <img src={phone} alt="logo" /> */}
                            <div>+212 6 61 20 11 03</div>
                        </div>
                        <div>
                            {/* <img src={email} alt="logo" /> */}
                            <div>HASSOUNIPROTRANS@GMAIL.COM</div>
                        </div>
                    </div>
                    <div className='sociaux'>
                        {/* <img src={linkedin} alt="logo" />
                        <img src={facebook} alt="logo" />
                        <img src={whatsapp} alt="logo" /> */}
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
