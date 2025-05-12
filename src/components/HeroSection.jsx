import { motion } from 'framer-motion'


function HeroSection() {
  return (
    <section className="py-8 pb-4 bg-gray-100 dark:bg-gray-800" id='home'>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <motion.div 
          className="lg:w-1/2 mb-10 lg:mb-0 text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center dark:text-white mb-6">
            Turn Unused Software<br />
            into Cash
          </h1>
          
          <p className="text-lg md:text-xl text-center  mb-8 max-w-2xl mx-auto lg:mx-0 dark:text-white">
            SoftSell helps businesses monetize their unused software licenses with instant valuations and quick payments. Stop paying for licenses you don't use.
          </p>
          
          <div className="flex justify-center gap-2 pb-4">
            <a href="#contact" className="bg-blue-700 dark:bg-blue-800 text-white p-2 px-4 rounded text-lg">
              Sell My Licenses
            </a>
            <a href="#how-it-works" className="border-blue-700 p-2 px-4 border-2 text-blue-700 rounded text-lg">
              Learn How It Works
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
export default HeroSection