import {motion, scale} from "framer-motion";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
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
      whileTap={{scale:0.95}} >{""} View my work</motion.a>
      <motion.a href="#contact" className="cta-secondary"  whileHover={{scale:1.05}} whileTap={{scale:0.95}}> Contact Me</motion.a>
      
      </motion.div>
      <motion.div className="social-links" variants={staggerContainer}>
       <motion.a href="https://github.com/vaishanavb1729" target="_blank"><i className="fab fa-github"  ></i></motion.a>
      <motion.a  href="https://www.linkedin.com/in/vaishanav-bhosale-988658344/" target="_blank"><i className="fab fa-linkedin" ></i></motion.a>
      <motion.a><i className="fab fa-instagram" href="#" target="_blank"></i></motion.a>
      </motion.div>
      </motion.div> 
        <motion.div className="hero-image-container"
       initial={{opacity:0 , x:50}}
       animate={{opacity:1,x:0}}
       transition={{duration:0.8,delay:0.4}}
       >
        {/* here it is not image it is syntaxhighterlibrary of ract */}
        <div className="code-display">
        <SyntaxHighlighter language="javascript"  customStyle={{margin:0,
          padding:"2rem" ,
          height:"100%",
           borderRadius:"20px",
           backgroundColor:"rgba(30,41,59,0.8)",
           backdropFilter:"blur(10px)",
           marginBottom:50,

          }} 
           style={vscDarkPlus}>
          {`const aboutMe: DeveloperProfile={
                codename: "VTech",
                origin:"🌏 Somewhere between a coffee shop and a terminal",
                role: "Fullstack Web Sorcerer",
                stack:{
                languages:["JavaScript", "TypeScript", "Python", "Java", "SQL"],
                frameworks:["React","TailWindCSS","SpringBoot","FastAPI"],
                },
                traits: [
                "pixel-perfectionist",
                "API whisperer",
                "dark mode advocate",
                "terminal aesthetic enthusiast",
                ],
                missionStatement:
                "Turning ideas into interfaces and bugs into feature",
                availability:"Available for hire",
          };`}
        </SyntaxHighlighter>
        </div>
        <motion.div className="floating-card" animate={{y:[0,-10,0],rotate:[0,2,0]}}
        transition={{duration:4,repeat:Infinity,ease:"easeInOut"}}
        >
            <div className="card-content">
          <span className="card-icon">🧑‍💻</span>
          <span className="card-text">Currently working on something awesome !!! </span>
        </div>
        </motion.div>
       </motion.div>
    </div>
    </motion.section>
    
  )
}

export default Hero
