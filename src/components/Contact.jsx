import React from 'react'
import '../styles/contact.scss'

const Contact = () => {
    return (
        <div className='contact'>
            <main>
                <h1>Contact Us</h1>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" required placeholder='Enter Name' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" required placeholder='Enter Email' />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="text" required placeholder='Enter Phone' />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea name='message' placeholder='Enter Your Message'></textarea>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </main>
        </div>
    )
}

export default Contact