import React from 'react';

const ContactUs = () => {
  return (
    <div className="md:block bg-white text-[#EC3642] p-10 lg:flex items-center justify-center pt-40">
      <div className="w-full lg:w-1/2 flex justify-center p-10 lg:p-10">
        <img
          className="object-cover w-full h-full rounded-lg shadow-lg"
          src="/Images/Paris1.jpg" alt="img" />
      </div>
       <div className="w-full max-h-[700px] lg:w-1/2 p-6 lg:p-20 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-4 text-gray-500">We would love to hear from you! Please fill out the form below to get in touch with us.</p>
        <form className="text-left bg-[#EC3642] p-8 rounded-lg">
          <div className="mb-2">
            <label className="block text-gray-300 mb-2">Name</label>
            <input className="w-full p-2 bg-white border border-white text-black" type="text" />
          </div>
          <div className="mb-2">
            <label className="block text-gray-300 mb-2">Email</label>
            <input className="w-full p-2 bg-white border border-white text-black" type="email" />
          </div>
          <div className="mb-2">
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea className="w-full p-2 bg-white border border-white text-black" rows="4"></textarea>
          </div>
          <button className="bg-white text-[#EC3642] p-2 hover:bg-[#1D1D1D] hover:text-[#EC3642] rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
