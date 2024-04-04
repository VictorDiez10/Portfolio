import React, { useState } from 'react';
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
        } else {
        setStatus({
            info: { error: true, msg: msg },
        });
        }
    };
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
            'Thank you, your message has been submitted.',
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
        {!status.info.error && status.info.msg && <div className="succes">{status.info.msg}</div>}
        </div>
    );
};