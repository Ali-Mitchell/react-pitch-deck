import React, { useState } from 'react'
import { validateEmail } from '../../utils/helper.js';
import './Contact.css';



function Contact({ onClose }) {
    console.log(onClose)
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }

        // console.log('errorMessage', errorMessage);

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contact">
            
            <h3 className="margin-top-20" data-testid="h1tag">Contact</h3>
            
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <h5>
                        <input placeholder="Your name" className="is-four-fifths shadows margin-top-20" type="text" defaultValue={name} onBlur={handleChange} name="name" />
                    </h5>
                </div>

                <div>
                    <h5>
                        <input placeholder="Email" type="email" className="is-four-fifths shadows margin-top-20" defaultValue={email} onBlur={handleChange} name="email" />
                    </h5>
                </div>

                <div>
                    <h5>
                        <textarea placeholder="Your message" name="message" className="is-four-fifths shadows margin-top-20" defaultValue={message} onBlur={handleChange} rows="5" />
                    </h5>
                </div>
                {errorMessage && (
                    <div className="margin-top-20">
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="margin-top-20 shadows" data-testid="button" type="submit">Send message</button>
                
            </form>
            
        </section>
    )
}

export default Contact;