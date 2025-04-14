// src/components/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // To show submission feedback

  // !!!! IMPORTANT: Replace 'YOUR_FORMSPREE_ENDPOINT_ID' with your actual Formspree endpoint ID !!!!
  const formspreeEndpoint = "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT_ID";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default page reload
    setStatus("Submitting...");

    if (!formspreeEndpoint.includes("YOUR_FORMSPREE_ENDPOINT_ID")) {
      try {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        } else {
          const data = await response.json();
          if (data.errors) {
            setStatus(data.errors.map((error) => error.message).join(", "));
          } else {
            setStatus("Oops! There was a problem submitting your form.");
          }
        }
      } catch (error) {
        setStatus("Oops! There was a network error.");
      }
    } else {
      setStatus("Please replace YOUR_FORMSPREE_ENDPOINT_ID in Contact.jsx");
      console.error("Formspree endpoint not configured.");
    }
  };

  return (
    <section id="contact" className="p-8 bg-gray-100">
      {/* Added id */}
      <div className="container mx-auto max-w-md">
        {" "}
        {/* Added container */}
        <h3 className="text-3xl font-bold mb-6 text-center">Contact Me</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={status === "Submitting..."} // Disable button while submitting
            className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 disabled:opacity-50"
          >
            {status === "Submitting..." ? "Sending..." : "Send Message"}
          </button>
        </form>
        {/* Display submission status */}
        {status && (
          <p
            className={`mt-4 text-center ${
              status.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
        {/* Reminder for the developer */}
        {formspreeEndpoint.includes("YOUR_FORMSPREE_ENDPOINT_ID") && (
          <p className="mt-4 text-center text-red-600 font-bold">
            Developer Reminder: Update the Formspree endpoint in
            `src/components/Contact.jsx`!
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
