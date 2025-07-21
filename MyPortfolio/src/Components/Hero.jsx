import {motion} from "framer-motion";

function Hero() {
  return (
   
    <motion.section id="home"
    className="hero"
    initial={{opacity:0}}
    animate = {{opacity:1}}
    transition={{duration:0.8,delay:0.2}}
    > {/*this make sure that first navbar get loaded then hero section*/}
    <div className="hero-container">
      <motion.div className="hero-content">
         <motion.div className="hero-badge">
          <span>👋 Hello I am</span>
         </motion.div>
      </motion.div>
    </div>
    </motion.section>
    
  )
}

export default Hero
