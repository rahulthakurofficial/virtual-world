import { useRef } from 'react';
import './Project.scss';
import { motion, useScroll,useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id:1,
        title:"VR in OBE",
        img:"/vrzoo.png",
        desc:"Experience the wonders of the animal kingdom like never before with our Virtual Zoo in Out-of-Body Experience (OBE) technology. Explore exotic habitats, interact with lifelike animals, and learn fascinating facts about wildlife conservation.",
        butt:"See Demo"
    },
    {
        id:2,
        title:"Virtual Tours",
        img:"https://imageio.forbes.com/specials-images/imageserve/6528e394aee75d9990a71e06/The-10-Biggest-AR--VR-And-Immersive-Internet-Trends-In-2024/960x0.jpg?format=jpg&width=960",
        desc:"Explore campuses, facilities, and academic environments virtually with our Virtual College Tours. Visit renowned institutions like KEC College from the comfort of your own home, discovering everything they have to offer.",
        butt:"Upcoming"

    },
    {
        id:3,
        title:"CPU Building",
        img:"https://imageio.forbes.com/specials-images/imageserve/6528e394aee75d9990a71e06/The-10-Biggest-AR--VR-And-Immersive-Internet-Trends-In-2024/960x0.jpg?format=jpg&width=960",
        desc:"Immerse yourself in the world of computer hardware with CPU Building in VR. Learn the ins and outs of building a high-performance PC, from selecting components to assembling and optimizing your system, all in a virtual environment.",
        butt:"Upcoming"
    
    }

];


const Single = ({item})=>{
    const ref=useRef();
    const {scrollYProgress} = useScroll({target:ref});

    const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);
    return <section ref={ref}>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />

                </div>
            <motion.div className="textContainer" style={{y}}>
                <h2 >{item.title}</h2>
                <p>{item.desc}</p>
                <a href="https://www.youtube.com/watch?v=k3-ip1NXpzE" target='blank'><button>{item.butt}</button></a>
            </motion.div>
        </div>
        </div>
    </section>
}

const Project = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref,offset:["end end","start start"]});

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });
  return (
    <div className='project' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Project