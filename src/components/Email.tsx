import React, { useState } from 'react';
import '../containers'
import '../containers/hero/hero.scss';

const Email = () => {
    const [email, setEmail] = useState<string>('');
    const [placeholder, setPlaceholder] = useState<string>('Your Email Address');

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Regex to validate email format
        const expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValidEmail = expression.test(email);

        if (!isValidEmail) {
            setPlaceholder('Please enter a valid email address');
            setEmail('');
            return;
        }

        // Submit form data
        try {
            const formData = new FormData();
            formData.append('email', email);

            const response = await fetch('https://script.google.com/macros/s/AKfycbz1SeQGdaAJNZtRh5D1edZwsIIXbhzrZWTKxD0o1ngkOBVgxAWCPOiZ35emAzxbT_rbAw/exec', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setPlaceholder('Success. Thank you for subscribing!');
            } else {
                setPlaceholder('Oops! Something went wrong.');
            }
        } catch (error) {
            console.error('Error!', error);
            setPlaceholder('Oops! Something went wrong.');
        }
        // Clear email input
        setEmail('');
    };

    return (
        <div className="gpt3__header-content__input">
            <form onSubmit={sendEmail} className="flex basis-full" noValidate>
                <input
                    type="email"
                    value={email}
                    placeholder={placeholder}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (e.target.value) {
                            setPlaceholder('Your Email Address');
                        }
                    }}
                />
                <button type="submit" className="min-w-fit gradient__bar">Get Started</button>
            </form>
        </div>
    );
};

export default Email;
