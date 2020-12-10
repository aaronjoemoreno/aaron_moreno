import React from 'react';
import '../assets/styles/contact.css';

const Contact = () => {
    return(
        <>
            <h1 className="contact-header">Contact</h1>
            <div className="contact-container">
                <form
                    className="main-form"
                    name="contact"
                    method="POST"
                    data-netlify-recaptcha="true"
                    data-netlify="true"
                >
                    <input type="text" className="name" placeholder="name" name="name" required/>
                    <br />
                    <input
                    type="email"
                    className="email"
                    placeholder="email"
                    name="email"
                    required
                    />
                    <br />
                    <input type="phone" className="phone" placeholder="phone" name="phone" required/> <br />
                    <textarea
                    name="textarea"
                    id="textarea"
                    className="class-area"
                    placeholder="Message"
                    name="message"
                    ></textarea>
                    <br />
                    <div data-netlify-recaptcha="true" className="captcha"></div>
                    <br />
                    <input type="submit" className="submit" placeholder="Submit" />
                </form>

            </div>
        </>
    )
}

export default Contact