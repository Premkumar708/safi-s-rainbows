"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    emailID: "",
    occupation: "",
    purchaseMode: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked ? value : "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // Add API call or form handling logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border rounded-md px-4 py-2"
            required
          />
        </div>

        {/* Phone Number Field */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full border rounded-md px-4 py-2"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="emailID" className="block font-medium mb-2">
            Email ID
          </label>
          <input
            type="email"
            id="emailID"
            name="emailID"
            value={formData.emailID}
            onChange={handleChange}
            placeholder="Enter your email ID"
            className="w-full border rounded-md px-4 py-2"
            required
          />
        </div>

        {/* Occupation Field */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Occupation</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="occupation"
                value="Student"
                onChange={handleChange}
                checked={formData.occupation === "Student"}
                className="mr-2"
              />
              Student
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="occupation"
                value="Employed"
                onChange={handleChange}
                checked={formData.occupation === "Employed"}
                className="mr-2"
              />
              Employed
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="occupation"
                value="Homemaker"
                onChange={handleChange}
                checked={formData.occupation === "Homemaker"}
                className="mr-2"
              />
              Homemaker
            </label>
          </div>
        </div>

        {/* Purchase Mode Field */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Purchase Mode</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="purchaseMode"
                value="Online"
                onChange={handleChange}
                checked={formData.purchaseMode === "Online"}
                className="mr-2"
              />
              Online Purchase
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="purchaseMode"
                value="Offline"
                onChange={handleChange}
                checked={formData.purchaseMode === "Offline"}
                className="mr-2"
              />
              Offline Purchase
            </label>
          </div>
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium mb-2">
            Write Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full border rounded-md px-4 py-2"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700"
        >
          Send Query
        </button>
      </form>
    </div>
  );
};

export default Contact;
