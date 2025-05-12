import { useDebugValue, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import AiChat from './components/AiChat'
import { LuMessageCircle } from 'react-icons/lu'
import { motion } from 'motion/react'

function App() {
  const [darktheme, setDarktheme] = useState(() => {
    return localStorage.getItem("color-theme")
  });
  useEffect(() => {
    const theme = localStorage.getItem("color-theme");
    setDarktheme(theme);
    document.body.classList.add(darktheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("color-theme", darktheme)
    if (darktheme == 'light') {
      document.body.classList.add('light')
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark')
      document.body.classList.remove('light');
    }
  }, [darktheme]);
  const [openAiChat, setOpenAiChat] = useState(false)
  const handleOpenChat = () => {
    setOpenAiChat(!openAiChat);
  }
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(false), 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {openAiChat && (

        <AiChat openAiChat={openAiChat} setOpenAiChat={setOpenAiChat}></AiChat>
      )}

      <Navbar darktheme={darktheme} setDarktheme={setDarktheme} openAiChat={openAiChat} setOpenAiChat={setOpenAiChat}></Navbar>
      <motion.button
        initial={{ right: 0, opacity: 0 }}
        animate={{ right: 45, opacity: 1, transition: { duration: 0.7 } }}
        whileHover={{ scale: 1.1 }}
        onClick={handleOpenChat}
        className={`ml-2 p-2 rounded-xl cursor-pointer flex items-center gap-2 dark:bg-gray-700 dark:text-white bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 absolute bottom-10 z-15 right-10`}
        aria-label="Toggle dark mode"
      >
        {showText && (

          <motion.div
            initial={{ opacity: 0, display: 'none' }}
            animate={{ opacity: 1, display: 'block', duration: 0.5, }}
            transition={{ delay: 0.5 }}
          >Hello, How may I help You ?</motion.div>
        )}
        <LuMessageCircle className='text-3xl' />
      </motion.button>
      <div className='h-screen overflow-auto' style={{ height: "calc(100vh - 4rem)" }}>


        <HeroSection></HeroSection>
        <HowItWorks></HowItWorks>
        <WhyChooseUs></WhyChooseUs>
        <Testimonials></Testimonials>
        <ContactForm></ContactForm>




      </div>
    </>
  )
}

export default App
