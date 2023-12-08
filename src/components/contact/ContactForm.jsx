import React, { useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

const ContactForm = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      subject: e.target.elements.subject.value,
      message: e.target.elements.message.value,
    };

    try {
      // Simulate sending form data to a server
      // In a real-world scenario, replace this with actual API call or form submission logic
      console.log('Sending form data to server:', formData);

      // Simulate a successful form submission
      // You can replace this with an actual server endpoint
      await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Display success message
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error sending form data:', error);
      // Handle errors if needed
    }
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>

          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
          />

          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
          />

          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label className="block text-lg text-primary-dark dark:text-primary-light mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
            ></textarea>
          </div>

          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-orange-500 hover:bg-orange-600 focus:ring-1 focus:ring-orange-900 rounded-lg mt-6 duration-500">
            <Button title="Send Message" type="submit" aria-label="Send Message" />
          </div>

          {isFormSubmitted && (
            <div className="text-green-500 mt-4">
              Form submitted successfully! Thank you.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

