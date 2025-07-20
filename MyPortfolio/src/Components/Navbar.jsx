import {motion} from "framer-motion";
export  const Navbar=()=>{

    return<motion.nav className="navbar" initial={{y:-100}} animate={{y:0}}transition={{duration:0.6,ease:"easeOut"}}>
    <motion.div className="logo" whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Portfolio</motion.div>
    </motion.nav>
}
export default Navbar;