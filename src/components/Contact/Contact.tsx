import React from 'react';

const Contact: React.FC = () => {

  const inputStyle = "bg-white text-black border-0 rounded p-3 mb-4 w-full"

  return (
    <div className="flex flex-col sm:flex-row justify-between px-8 sm:px-4 gap-y-20 sm:gap-x-20 items-start animate-fade-in">
      {/* Left Section */}
      <div className="flex-1/2 font-weight-light text-xl">
        <h1 className="font-eurostile text-5xl font-bold mb-4">Contact</h1>
        <p>
          Teryll KerrDouglas
          <br />
          'Kerrtisy'
        </p>
        <p >Mail: contact@kerrtisy.com</p>
      </div>

      {/* Right Section */}
      <div className="flex-1/2 text-base w-full sm:max-w-[500px]">
        <form w-full>
          <label className="block mb-2" htmlFor="name">Name *</label>
          <input className={inputStyle} type="text" id="name" name="name" required />

          <label className="block mb-2" htmlFor="email">Your Email *</label>
          <input className={inputStyle} type="email" id="email" name="email" required />

          <label className="block mb-2" htmlFor="subject">Subject *</label>
          <input className={inputStyle} type="text" id="subject" name="subject" required />

          <label className="block mb-2" htmlFor="message">Message *</label>
          <textarea className={`${inputStyle} h-36 resize-none`} id="message" name="message" required />

          <button className="w-full bg-green-600 text-white border-0 rounded-3xl px-3 py-5 font-eurostile text-xl" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;