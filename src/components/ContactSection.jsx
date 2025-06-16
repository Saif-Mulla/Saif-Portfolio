import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState } from "react";

const ContactSect = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')


  const handleSend = (e) => {
    e.preventDefault();

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=saifmulla444@gmail.com&su=${encodeURIComponent(
      `Get In Touch`
    )}&body=${encodeURIComponent(
      `Hi, I'm ${name} (${email}).\n\n${message}\n\nRegards,\n${name}`
    )}`;

    window.open(gmailURL, "_blank"); // open in new tab
  };

  return(
        <section className="px-6 py-12 bg-white text-center" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 pb-2">Contact</h2>
        <p className="text-gray-600 mb-2">
          Interested in hiring me? You can fill in the contact form below or send me an <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saifmulla444@gmail.com" target='_blank' className="text-[#54B689] underline">Email</a>.
        </p>
        <p className="text-gray-600 mb-6">Want to get connected? Follow me on the social channels below.</p>

        <div className="flex justify-center gap-4 text-green-600 text-xl mb-8">
          <FaTwitter />
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
        </div>

        <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

        <form onSubmit={handleSend} className="space-y-4 text-left">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required className="w-full border px-4 py-2 rounded" />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required className="w-full border px-4 py-2 rounded" />
          </div>

          <textarea rows="6" placeholder="Enter your message" required onChange={(e) => setMessage(e.target.value)} className="w-full border px-4 py-2 rounded"></textarea>

          <button type="submit" className="bg-[#54B689] text-white px-6 py-2 rounded hover:bg-[#224937]">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSect;