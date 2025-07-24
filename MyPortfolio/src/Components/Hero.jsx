import {motion, scale} from "framer-motion";

//creating object which i can apply on below as variant reduce duplication of code
//otherwise i have to write them inside every list item
const fadeInUp = {
    initial :{opacity:0,y:20},
    animate : {opacity:1,y:0},
    transition : {duration:0.6},
};

const staggerContainer = {
    animate : {
        transition:{
            staggerChildren:0.1,
        }
    }
}
function Hero() {
  return (
   

    <motion.section id="home"
    className="hero"
    initial={{opacity:0}}
    animate = {{opacity:1}}
    transition={{duration:0.8,delay:0.2}}
    > {/*this make sure that first navbar get loaded then hero section*/}
    <div className="hero-container">
      <motion.div className="hero-content" variants={staggerContainer} initial="initial" animate="animate">
         <motion.div className="hero-badge" >
          <span>👋 Hello I am</span>
         </motion.div>
        <motion.h1 className="glitch" variants={fadeInUp} whileHover={{scale:1.1}}>Vaishnav</motion.h1>
        <motion.h2 className="hero-subtitle" variants={fadeInUp}>Creative Fullstack Developer</motion.h2>
        <motion.p variants={fadeInUp}>I craft beautiful digital experiences that combine stunning design
            with powerful functionality. Specializing in modern web application and interaction user interfaces.  </motion.p>
      <motion.div className="cta-buttons" variants={staggerContainer}>
        <motion.a 
      href="#projects" 
      className="cta-primary"
      whileHover={{scale:1.05}} 
      whileTap={{scale:0.95}} >{""} view my work</motion.a>
      <motion.a href="#contact" className="cta-primary"  whileHover={{scale:1.05}} whileTap={{scale:0.95}}> Contact Me</motion.a>
      
      </motion.div>
      <motion.div className="social-links" variants={staggerContainer}>
       <motion.a><i className="fab fa-github" href="www.github.com" target="_blank"></i></motion.a>
      <motion.a><i className="fab fa-linkedin" href="#" target="_blank"></i></motion.a>
      <motion.a><i className="fab fa-instagram" href="#" target="_blank"></i></motion.a>
      </motion.div>
      </motion.div> 
    </div>
    </motion.section>
    
  )
}

export default Hero
