"use client";
import Image from 'next/image';
import React, { useState } from 'react';


const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        console.log('Phone:', phone);
        console.log('Subject:', subject);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', maxWidth: '900px', width: '100%', backgroundColor: '#f0f0f0', borderRadius: '8px', padding: '1rem' }}>
                <Image 
                    src="https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Contact" 
                    width={600}
                    height={600}
                    style={{ borderRadius: '8px 8px 0 0' }}
                />
                <form onSubmit={handleSubmit} style={{ width: '100%', padding: '1rem', backgroundColor: '#fff', borderRadius: '0 0 8px 8px', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
                    <h1 style={{ marginBottom: '1rem', textAlign: 'center', color: 'black' }}>Contact Us</h1>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="name" style={{ marginBottom: '0.5rem', color: 'black' }}>Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', color: 'black' }}
                            placeholder='John Doe'
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="email" style={{ marginBottom: '0.5rem', color: 'black' }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', color: 'black' }}
                            placeholder='QpO5b@example.com'
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="phone" style={{ marginBottom: '0.5rem', color: 'black' }}>Phone</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', color: 'black' }}
                            placeholder='123-456-7890'
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="subject" style={{ marginBottom: '0.5rem', color: 'black' }}>Subject</label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', color: 'black' }}
                            placeholder='Enter your subject'
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="message" style={{ marginBottom: '0.5rem', color: 'black' }}>Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc ', color: 'black' }}
                            placeholder='Enter your message'
                            required
                        />
                    </div>
                    <button name='submit' type="submit" style={{ backgroundColor: '#0070f3', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;