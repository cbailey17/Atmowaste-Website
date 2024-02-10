import { useEffect, useState, useRef } from 'react'
import './contact.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef<HTMLFormElement>(null!);

  const [name, setName] = useState('');
  const [namePlaceholder, setNamePlaceholder] = useState('Name');

  const [email, setEmail] = useState('');
  const [emailPlaceholder, setEmailPlaceholder] = useState('Email');

  const [message, setMessage] = useState('');
  const [messagePlaceholder, setMessagePlaceholder] = useState('Your Message');

  // used to prevent multiple submissions
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const validateForm = () => {
    let isValid = true;

    // break out of function if form has already been submitted
    if (isSubmitted) {
      return;
    }

    if (name === '') {
      setNamePlaceholder('Name is required');
      setName(''); // clear name if invalid
      isValid = false;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setEmailPlaceholder('Please enter a valid email address');
      setEmail(''); // clear email if invalid
      isValid = false;
    }

    if (message === '') {
      setMessagePlaceholder('Message is required');
      setMessage(''); // clear message if invalid
      isValid = false;
    }

    return isValid;
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    // Check if all fields are filled out and email is valid
    if (!validateForm()) {
      return;
    }

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);

  // display the submitting message immediately and while waiting for the fetch to complete
  setMessage('');
  setName('');
  setEmail('');
  setMessagePlaceholder('Submitting...');

  fetch('https://script.google.com/macros/s/AKfycbz1SeQGdaAJNZtRh5D1edZwsIIXbhzrZWTKxD0o1ngkOBVgxAWCPOiZ35emAzxbT_rbAw/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    console.log('Success!', response);
    setMessage('');
    setMessagePlaceholder('Thank you for submitting!');
    setNamePlaceholder('Name');
    setEmailPlaceholder('Email');
    setIsSubmitted(true);
  })
  .catch(error => {
    console.error('Error!', error.message);
    setMessage('');
    setMessagePlaceholder('Oops! Something went wrong.');
  });
};

return (
  <section id="contact" className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row relative">
    <div className="mx-auto container contact-page w-[90%] md:w-[90%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]">
      <div className="text-zone">
        <h1 className="gradient__text text-4xl">
          Lets start a conversation about your climate goals
        </h1>
        <p className="subtext">
          For any press related questions, please email <a>Jeremy@AtmoWaste.com</a>
        </p>
        <div className="contact-form">
          <form onSubmit={sendEmail} noValidate>
            <ul>
              <li className="half">
                <input
                  placeholder={namePlaceholder}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </li>
              <li className="half">
                <input
                  placeholder={emailPlaceholder}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                <textarea
                  placeholder={messagePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact