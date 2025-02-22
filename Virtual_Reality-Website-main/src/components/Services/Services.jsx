import './Services.scss';
import { motion } from 'framer-motion';

const variants={
    initial:{
        x:0,
        y:50,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
        }
    }
}

const Services = () => {

  return (
    <motion.div className='services' variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <p>I'm a virtual reality creator, exploring cutting-edge<br/> studies in immersive technology.</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/vr.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>VR Innovations:</motion.b> Exploring the</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>Boundaries </motion.b>of Immersive Technology</h1>
                <button>What I do?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
        <motion.div className="box"whileHover={{backgroundColor:"lightgray",color:"black"}}>
            <h2>Virtual Zoo in OBE</h2>
            <p>Experience the wonders of the animal kingdom like never before with our Virtual Zoo in Out-of-Body Experience (OBE) technology. Explore exotic habitats, interact with lifelike animals, and learn fascinating facts about wildlife conservation.</p>
        </motion.div>
        <motion.div className="box"whileHover={{backgroundColor:"lightgray",color:"black"}}>
            <h2>Virtual College Tours</h2>
            <p>Explore campuses, facilities, and academic environments virtually with our Virtual College Tours. Visit renowned institutions like KEC College from the comfort of your own home, discovering everything they have to offer.</p>
        </motion.div>
        <motion.div className="box"whileHover={{backgroundColor:"lightgray",color:"black"}}>
            <h2>CPU Building in VR</h2>
            <p>Immerse yourself in the world of computer hardware with CPU Building in VR. Learn the ins and outs of building a high-performance PC, from selecting components to assembling and optimizing your system, all in a virtual environment.</p>
        </motion.div>

        </motion.div>
    </motion.div>
  )
}

export default Services