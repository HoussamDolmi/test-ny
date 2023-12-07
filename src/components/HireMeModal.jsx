import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useState } from 'react';
import Button from './reusable/Button';
import '../css/main.css';


const selectOptions = [
  'Web Application',
  'Mobile Application',
  'UI/UX Design',
  'Branding',
];

const sendFormData = (formData) => {
  fetch('http://localhost:3001/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Form data sent successfully:', data);
      // Additional actions after successful form submission
    })
    .catch((error) => {
      console.error('Error sending form data:', error);
      // Handle errors
    });
};

const HireMeModal = ({ onClose }) => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      subject: e.target.elements.subject.value,
      message: e.target.elements.message.value,
    };

    // Send form data to server
    sendFormData(formData);

    // Display success message
    setFormSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className=" text-primary-dark dark:text-primary-light text-xl">
                What project are you looking for?
              </h5>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="modal-body p-5 w-full h-full">
              {isFormSubmitted ? (
                <div className="text-green-500">
                  Form submitted successfully! Thank you.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-xl m-4 text-left">
                  <div className="mt-6">
                    <input
                      className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="name"
                      name="name"
                      type="text"
                      required=""
                      placeholder="Name"
                      aria-label="Name"
                    />
                  </div>
                  <div className="mt-6">
                    <input
                      className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="email"
                      name="email"
                      type="text"
                      required=""
                      placeholder="Email"
                      aria-label="Email"
                    />
                  </div>
                  <div className="mt-6">
                    <select
                      className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="subject"
                      name="subject"
                      type="text"
                      required=""
                      aria-label="Project Category"
                    >
                      {selectOptions.map((option) => (
                        <option
                          className="text-normal sm:text-md"
                          key={option}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-6">
                    <textarea
                      className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="message"
                      name="message"
                      cols="14"
                      rows="6"
                      aria-label="Details"
                      placeholder="Project description"
                    ></textarea>
                  </div>
                  <div className="mt-6 pb-4 sm:pb-1">
                    <span
                      type="submit"
                      className="px-4
                          sm:px-6
                          py-2
                          sm:py-2.5
                          text-white
                          bg-black
                          hover:bg-orange-600
                          rounded-md
                          focus:ring-1 focus:ring-orange-900 duration-500"
                    >
                      <Button title="Send Request" />
                    </span>
                  </div>
                </form>
              )}
            </div>
            <div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
              <span
                onClick={onClose}
                type="button"
                className="px-4
                    sm:px-6
                    py-2 bg-black text-primary-light hover:bg-orange-600 dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
                    rounded-md
                    focus:ring-1 focus:ring-indigo-900 duration-500"
                aria-label="Close Modal"
              >
                <Button title="Close" />
              </span>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default HireMeModal;