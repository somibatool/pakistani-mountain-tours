import React, { useState } from "react";
import emailjs from "emailjs-com";
<<<<<<< HEAD
import Location from "../components/Location/Location";
=======
import Location from "../components/Location/Location"
>>>>>>> 3892f0f75ff4618c33ce8e270ec616648fa0a584
import StayConnected from "./StayConnected";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    destination: "",
    travel_date: "",
    travelers: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceID = "service_elg2uwb";
      const templateID = "template_icpvsya";
      const userID = "8crWTabUCOmGyoo97";

      // Construct the data object to match your EmailJS template
      const emailData = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        destination: formData.destination,
        travel_date: formData.travel_date,
        travelers: formData.travelers,
        message: formData.message,
      };
<<<<<<< HEAD
=======
      
>>>>>>> 3892f0f75ff4618c33ce8e270ec616648fa0a584

      console.log("Sending Data:", emailData);
      await emailjs.send(serviceID, templateID, emailData, userID);

      alert("Email sent successfully!");
      setFormData({
        user_name: "",
        user_email: "",
        destination: "",
        travel_date: "",
        travelers: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert(`Failed to send email. Error: ${error.text || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="container pt-14 mt-10">
        <div className="py-10">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Contact Us
          </h1>
          <p>
<<<<<<< HEAD
            For all your travel inquiries, bookings, or custom tour plans, get
            in touch with us at Pakistani Mountain Tours. Our team is ready to
            help you explore breathtaking destinations across Hunza, Skardu,
            Fairy Meadows, and South Pakistan. Pakistani Mountain Tours is your
            trusted travel partner for unforgettable adventures in the heart of
            Pakistan.
=======
For all your travel inquiries, bookings, or custom tour plans, get in touch with us at Pakistani Mountain Tours. Our team is ready to help you explore breathtaking destinations across Hunza, Skardu, Fairy Meadows, and South Pakistan. Pakistani Mountain Tours is your trusted travel partner for unforgettable adventures in the heart of Pakistan. 
>>>>>>> 3892f0f75ff4618c33ce8e270ec616648fa0a584
          </p>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-6">
        <div className="w-full max-w-4xl bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
            Plan Your Dream Trip
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="user_name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="user_email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="destination"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Destination
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="travel_date"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Travel Date
              </label>
              <input
                type="date"
                id="travel_date"
                name="travel_date"
                value={formData.travel_date}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="travelers"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Number of Travelers
              </label>
              <input
                type="text"
                id="travelers"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-primary focus:outline-none"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2  bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg shadow-md  focus:outline-none"
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
<<<<<<< HEAD
      </div>
      <Location />
      <StayConnected />
=======
     
      </div>
       <  Location />
       < StayConnected />
>>>>>>> 3892f0f75ff4618c33ce8e270ec616648fa0a584
    </>
  );
};

export default Contact;
