"use client";
import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleSignup = () => {
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        } else {
            setEmailError('');
        }

        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters long.');
            return;
        } else {
            setPasswordError('');
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match.');
            return;
        } else {
            setConfirmPasswordError('');
        }

        // Proceed with the signup request
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log('Signup successful:', data.message);
                } else {
                    console.error('Signup failed:', data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password: string) => {
        return password.length >= 8;
    };

    const renderErrors = (error: string | null) => {
        return error ? <p className="text-red-500 text-sm">{error}</p> : null;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl text-center text-gray-800 font-semibold mb-4">Sign Up</h2>
                <input
                    className={`text-black w-full mb-4 px-4 py-2 rounded-lg border ${emailError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                />
                {renderErrors(emailError)}
                <input
                    className={`text-black w-full mb-4 px-4 py-2 rounded-lg border ${passwordError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    pattern=".{8,}"
                />
                {renderErrors(passwordError)}
                <input
                    className={`text-black w-full mb-4 px-4 py-2 rounded-lg border ${confirmPasswordError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    pattern=".{8,}"
                />
                {renderErrors(confirmPasswordError)}
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    onClick={handleSignup}
                >
                    Sign Up
                </button>
            </div>
            <p className="text-gray-800 mt-4">Already have an account? <a className="text-blue-500 hover:text-blue-600 transition-colors duration-200" href="/login">Login</a></p>
        </div>
    );
};

export default Signup;