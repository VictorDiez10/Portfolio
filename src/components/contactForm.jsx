import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ContactForm() {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });
    const [inputs, setInputs] = useState({
        email: '',
        message: '',
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleServerResponse = (ok, msg) => {
        if (ok) {
        setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg },
        });
        setInputs({
            email: '',
            message: '',
        });
        setShowSuccessMessage(true);
        } else {
        setStatus({
            info: { error: true, msg: msg },
        });
        }
    };

    useEffect(() => {
        let timer;
        if (showSuccessMessage) {
            timer = setTimeout(() => {
                setShowSuccessMessage(false); // Cacher le message de succès après 3 secondes
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [showSuccessMessage]);

    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
        }));
        setStatus({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
        });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
        method: 'POST',
        url: 'https://formspree.io/f/myyrpbrq',
        data: inputs,
        })
        .then((response) => {
            handleServerResponse(
            true,
            'Merci, votre message à bien été reçu.',
            );
        })
        .catch((error) => {
            handleServerResponse(false, error.response.data.error);
        });
    };
    return (
        <div className='contact-form'>
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="email">Email</label>
            <input
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
            />
            <label htmlFor="message">Message</label>
            <textarea
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
            />
            <button type="submit" disabled={status.submitting}>
            {!status.submitting
                ? !status.submitted
                ? 'Envoyer'
                : 'Soumis'
                : 'Soumettant'}
            </button>
        </form>
        {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
        )}
        {/* {!status.info.error && status.info.msg*/ showSuccessMessage && <div className="succes">{status.info.msg}</div>} 
        </div>
    );
};