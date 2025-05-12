import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RxCross1 } from 'react-icons/rx';
import { FaRobot } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";

const AiChat = ({ openAiChat, setOpenAiChat }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const faqs = [
    {
      question: "What is SoftSell?",
      answer: "SoftSell is a platform that helps businesses monetize their unused software licenses by providing instant valuations and quick payments. It allows companies to convert surplus licenses into cash efficiently."
    },
    {
      question: "How does SoftSell work?",
      answer: "SoftSell offers a simple three-step process: 1) Upload your unused license details through our secure platform, 2) Get an instant valuation based on market demand and other factors, and 3) Accept our offer and receive payment within 48 hours while we handle all transfer paperwork."
    },
    {
      question: "Which software vendors does SoftSell support?",
      answer: "SoftSell supports major enterprise software vendors, though the specific vendors aren't listed in the provided content. The platform is designed to handle licenses from various significant software providers."
    },
    {
      question: "How quickly can I get paid for my licenses?",
      answer: "After accepting our offer, you can receive payment within 48 hours. The platform is designed for fast processing with no long waiting periods."
    },
    {
      question: "Is the transaction process secure?",
      answer: "Yes, SoftSell provides end-to-end encryption and secure payment processing. Your license and financial information are always protected."
    },
    {
      question: "What percentage of the original price can I expect to recover?",
      answer: "Our market-driven algorithms typically offer up to 80% of the original purchase price, depending on current market demand, remaining subscription time, and transferability."
    },
    {
      question: "Do you provide support during the process?",
      answer: "Yes, SoftSell has a team of software licensing experts available to assist you through every step of the process and answer any questions you may have."
    },
    {
      question: "What do customers say about SoftSell?",
      answer: "Customers report positive experiences, with one CTO noting 'The valuation was fair and the payment was processed within 24 hours.' Another IT director mentioned that SoftSell 'made it easy to convert unused licenses into budget for new initiatives.'"
    },
    {
      question: "How do I get started with selling my licenses?",
      answer: "You can begin by filling out the contact form on the website with your details and information about the licenses you want to sell. The SoftSell team will get back to you within 24 hours."
    },
    {
      question: "What information do I need to provide about my licenses?",
      answer: "You'll need to provide details about the software licenses you want to sell, including the license type, vendor, remaining subscription time, and other relevant information through our secure platform."
    }
  ];

  useEffect(() => {
    if (openAiChat) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openAiChat]);

  const handleQuestionClick = async (faq) => {
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: faq.question,
      timestamp: new Date()
    };

    setChatHistory(prev => [...prev, userMessage]);
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1500));

    const aiMessage = {
      id: Date.now() + 1,
      type: 'ai',
      text: faq.answer,
      timestamp: new Date()
    };

    setIsTyping(false);
    setChatHistory(prev => [...prev, aiMessage]);
  };

  const resetChat = () => {
    setChatHistory([]);
    setIsTyping(false);
  };

  if (!openAiChat) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="w-full max-w-2xl h-full max-h-screen bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <FaRobot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">SoftSell Assistant</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">Ask me anything about our services</p>
            </div>
          </div>
          <button
            onClick={() => setOpenAiChat(false)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <RxCross1 className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {chatHistory.length === 0 ? (
            <>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              {faqs.map((faq, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleQuestionClick(faq)}
                  className="w-full text-left p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500"
                >
                  <div className="flex items-center space-x-3">
                    <LuMessageCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-800 dark:text-gray-200">{faq.question}</span>
                  </div>
                </motion.button>
              ))}
            </>
          ) : (
            <>
              {chatHistory.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-blue-500 text-white rounded-br-md'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-md'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.type === 'ai' && <FaRobot className="w-5 h-5 mt-1 text-blue-500" />}
                      {message.type === 'user' && <FaRegUser className="w-5 h-5 mt-1 text-blue-200" />}
                      <div>
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex items-center space-x-2">
                      <FaRobot className="w-5 h-5 text-blue-500" />
                      <div className="flex space-x-1">
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} className="w-2 h-2 bg-gray-500 rounded-full" />
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-2 h-2 bg-gray-500 rounded-full" />
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-2 h-2 bg-gray-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </>
          )}
        </div>

        {/* Footer FAQ Scroll */}
        {chatHistory.length > 0 && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 space-y-2">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Click another question to continue:</p>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {faqs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(faq)}
                  className="flex-shrink-0 dark:text-white px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition"
                >
                  {faq.question}
                </button>
              ))}
            </div>
            <button
              onClick={resetChat}
              className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Clear and Restart
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default AiChat;
