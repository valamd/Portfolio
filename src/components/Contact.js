import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: null });

    // Simulate sending email with timeout
    setTimeout(() => {
      // In a real app, you would make an API call here
      console.log('Form submitted:', formData);
      setFormStatus({ submitted: true, submitting: false, error: null });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <br></br>
        <br></br>
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <a href="mailto:hello@example.com" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    mdvala2107@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/manish-vala-a20844269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 rounded-full p-2 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-400 transition-all duration-300"
                >
                  <FaLinkedinIn className="h-5 w-5" />

                </a>

                <a
                  href="https://github.com/valamd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 rounded-full p-2 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-black transition-all duration-300"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://www.threads.com/@manish_vala_21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 rounded-full px-2 py-1 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-black hover:to-gray-800 transition-all duration-300 text-sm font-bold"
                >
                  @
                </a>

                <a
                  href="https://x.com/VALAMD21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 rounded-full p-2 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-400 transition-all duration-300"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/manish_vala_21/?next=%2F&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 rounded-full p-2 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 transition-all duration-300"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>

              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>

            {formStatus.submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-green-500 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-green-800">Message sent successfully!</h3>
                  <p className="text-green-600">Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm px-4 py-3 border"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm px-4 py-3 border"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm px-4 py-3 border"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm px-4 py-3 border"
                    placeholder="Your message here..."
                    required
                  />
                </div>

                <div>
                  <button
                    onClick={handleSubmit}
                    disabled={formStatus.submitting}
                    className="w-full flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
                  >
                    {formStatus.submitting ? 'Sending...' : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}