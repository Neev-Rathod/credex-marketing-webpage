import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiUser, FiPhone, FiBriefcase, FiMessageSquare, FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const licenseTypes = [
    "Microsoft Office",
    "Adobe Creative Cloud",
    "AutoCAD",
    "Windows Server",
    "SQL Server",
    "Oracle Database",
    "VMware",
    "SAP",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = "Please select a license type";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-2 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Ready to turn your unused licenses into cash? Fill out the form below and we'll get back to you within 24 hours.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiSend className="text-green-500 dark:text-green-300 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-2 dark:text-white">Thank You!</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We've received your message and will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
                      <div className="flex items-center">
                        <FiUser className="mr-2" />
                        Full Name*
                      </div>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
                      <div className="flex items-center">
                        <FiMail className="mr-2" />
                        Email Address*
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
                      <div className="flex items-center">
                        <FiBriefcase className="mr-2" />
                        Company Name*
                      </div>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                        errors.company ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Your Company, Inc."
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                    )}
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
                      <div className="flex items-center">
                        <FiPhone className="mr-2" />
                        License Type*
                      </div>
                    </label>
                    <select
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                        errors.licenseType ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select License Type</option>
                      {licenseTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.licenseType && (
                      <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>
                    )}
                  </div>

                  <div className="col-span-2">
                    <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
                      <div className="flex items-center">
                        <FiMessageSquare className="mr-2" />
                        Message
                      </div>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Tell us about the software licenses you want to sell..."
                    ></textarea>
                  </div>

                  <div className="col-span-2">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" /> Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;