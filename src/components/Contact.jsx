import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "../style/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Send message to YOU
    const sendToYou = emailjs.send(
      "service_88mchsn",
      "template_vmrd54f",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Misheck"
      },
      "Dhjdyy5TfeJFl0Z02"
    );

    // 2. Auto-reply to USER
    const sendAutoReply = emailjs.send(
      "service_88mchsn",
      "auto_reply_template",
      {
        to_name: formData.name,
        to_email: formData.email,
        message: formData.message
      },
      "Dhjdyy5TfeJFl0Z02"
    );

    Promise.all([sendToYou, sendAutoReply])
      .then(() => {
        toast.success("Message sent successfully ✔");

        setFormData({
          name: "",
          email: "",
          message: ""
        });

        setLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong. Try again.");
        setLoading(false);
      });
  };

  return (
    <div className="contact-container">

      <form className="contact-form" onSubmit={handleSubmit}>

        <h2>Contact Us</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
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