// import { motion } from "framer-motion"

// //creating object which i can apply on below as variant reduce duplication of code
// //otherwise i have to write them inside every list item
// const fadeInUp = {
//     initial :{opacity:0,y:20},
//     animate : {opacity:1,y:0},
//     transition : {duration:0.6},
// };

// const staggerContainer = {
//     animate : {
//         transition:{
//             staggerChildren:0.1,
//         }
//     }
// }

// function Project(){
// return <motion.section 
// id = "projects" 
// className="projects" 
// initial={{opacity:0}}
// whileInView={{opacity:1}} 
// viewport={{once:true}} 
// // when in view only then animation do and once only
// transition={{duration:0.6}}

// >
// <motion.h2
//  variants={fadeInUp}
//   initial="initial" 
//   whileInView="animate" 
//   viewport={{once:true}}
//   >My Projects
//   </motion.h2>
//   <motion.div 
//     className="project-grid"
//     variants={staggerContainer}
//     initial="initial"
//     whileInView="animate"
//     viewport={{once:true}}
//   >

// <motion.div
//  className="project-card"
//  variants={fadeInUp}
//  whileHover={{y:-10,transition:{duration:0.2}}}
//  >
//     <motion.div 
//     className="project-image" 
//     style={{backgroundImage:`url("MyPortfolio/public/static/olx.jpg")`}}
//     whileHover={{scale:1.05,transition:{duration:0.2}}}
//     />
//         <h3>Upcyclex</h3>
//         <p>
//             Upcyclx is a specialized marketplace focused solely 
//             on the exchange of materials and services for creative reuse, specifically linking users to upcycling artisans and resources.
//         </p>
//         <div className="project-tech">
//             <span>Spring Boot</span>
//             <span>React</span>
//             <span>ChakraUI</span>
//         </div>
//     </motion.div>

// {/* 
// 2nd card */}
// <motion.div
//  className="project-card"
//  variants={fadeInUp}
//  whileHover={{y:-10,transition:{duration:0.2}}}
//  >
//     <motion.div 
//     className="project-image" 
//     style={{backgroundImage:"url{'../static/olx.jpg'}"}}
//     whileHover={{scale:1.05,transition:{duration:0.2}}}
//     />
//         <h3>Upcyclex</h3>
//         <p>
//             Upcyclx is a specialized marketplace focused solely 
//             on the exchange of materials and services for creative reuse, specifically linking users to upcycling artisans and resources.
//         </p>
//         <div className="project-tech">
//             <span>Spring Boot</span>
//             <span>React</span>
//             <span>ChakraUI</span>
//         </div>
//     </motion.div>



//   </motion.div>

// </motion.section>
// }
// export default Project;

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Project() {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* 1️⃣ Card */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: 'url("/static/olx.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>OLX clone</h3>
          <p>
            OLX is a specialized marketplace focused solely on creative
            reuse, linking users to upcycling artisans and resources.
          </p>
          <div className="project-tech">
            <span>Spring Boot</span>
            <span>React</span>
            <span>ChakraUI</span>
            <span>Chart.js</span>
          </div>
        </motion.div>

        {/* 2️⃣ Card (reuse same pattern) */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: 'url("/static/portfolio.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Portfolio Website</h3>
          <p>Same idea but with a different concept or tech stack.</p>
          <div className="project-tech">
            <span>React.js</span>
            <span>Javascript</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>Motion Framer</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Project;
