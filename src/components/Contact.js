import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
export default function Contact(props) {
    const [state, handleSubmit] = useForm("mdoravon");
    return (
        <div id='contact' className={props.darkMode ? 'dark text-bg-dark' : 'light text-bg-light'}>
            <div className="container py-3">
                <h1 className='text-center'>Contact</h1>
                {state.succeeded ?
                    <div className="alert alert-warning alert-dismissible fade show mb-3" role="alert">
                        Thank you for reaching out! I'll get back to you shortly.
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    :
                    <form onSubmit={handleSubmit}>
                        <input name="subject" value="Portfolio Website Contact" hidden disabled />
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Ritwick Raj Makhal" required/>
                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className='btn btn-outline-light' type="submit" disabled={state.submitting}>Submit</button>
                        </div>
                    </form>
                }
            </div>
        </div>
    )
}
