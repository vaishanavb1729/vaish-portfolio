import {motion} from "framer-motion";

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

export  const Navbar=()=>{

    return<motion.nav className="navbar"
     initial={{y:-100}}
      animate={{y:0}}
      transition={{duration:0.6,ease:"easeOut"}}>
    <motion.div
     className="logo"
     whileHover={{scale:1.05}}
      whileTap={{scale:0.95}}>
        Portfolio
        </motion.div>
       { /* when u  apply this on parent all of it's on parent it will animate childern 1by 1 not all at once */}
    <motion.ul 
     className="nav-links"
     variants={staggerContainer} initial="initial" animate="animate">  
       
       {/*start from 20px and and opacity 0 then goto opacity 1 and 0px position */}
        <motion.li variants={fadeInUp} whileHover={{scale:1.1}} whileTap={{scale:0.95}}> 
         <a href="#home">Home</a> {/* this is single page application no routes it is for in page moving*/}
        </motion.li>
         <motion.li variants={fadeInUp} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          <a href="#projects">Projects</a>
        </motion.li>
         <motion.li variants={fadeInUp} whileHover={{scale:1.1}} whileTap = {{scale:0.95}}> 
         <a href="#contact">Contact Me</a>
        </motion.li>

    </motion.ul>
    </motion.nav>
}
export default Navbar;