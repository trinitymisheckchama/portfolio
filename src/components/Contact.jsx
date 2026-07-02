import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../style/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    console.log("📩 Sending data to EmailJS:", formData);

    emailjs.send(
      "service_88mchsn",
      "template_vmrd54f",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Misheck"
      },
      "Dhjdyy5TfeJFl0Z02"
    )
    .then((result) => {
      console.log("✅ SUCCESS:", result.text);

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

      setLoading(false);

      // auto-hide success message
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    })
    .catch((error) => {
      console.log("❌ EMAILJS ERROR:", error.text || error);

      setError("Failed to send message. Please try again.");

      setLoading(false);
    });
  };

  return (
    <div className="contact-container">

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        data-aos="fade-up"
      >

        <h2>Contact Us</h2>

        {/* SUCCESS MESSAGE */}
        {success && (
          <p className="success-message">
            Message sent successfully ✔
          </p>
        )}

        {/* ERROR MESSAGE */}
        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>

    </div>
  );
};

export default Contact;