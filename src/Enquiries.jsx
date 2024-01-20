import React, { useState } from 'react';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [questions, setQuestions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log('Form submitted:', { fullName, email, questions });
  };

  return (
    <div className=" min-h-screen flex items-center justify-center" style={{ backgroundImage: `url('../src/assets/Contactbg.png')` }}>
      <form
        className="bg-slate-900 text-white p-8 rounded-lg shadow-md lg:w-96 w-80"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-slate-100 text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-slate-100 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-slate-100 text-sm font-bold mb-2" htmlFor="questions">
            Questions
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="questions"
            placeholder="Your Questions"
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
