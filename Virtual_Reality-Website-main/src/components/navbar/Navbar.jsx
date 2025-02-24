import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Aravindh S</motion.span>
        <div className="social">
            <a href="https://www.instagram.com/_s_aravindh_/" target="blank"><img src="/instagram.png" alt="" /></a>
            <a href="https://github.com/Aravindhs005" target="blank"><img src="/github.jpg" alt="" /></a>
            <a href="https://www.linkedin.com/in/aravindh-s-60a82827a/" target="blank"><img src="/linkedin.webp" alt="" /></a>
            <a href="https://www.youtube.com/channel/UCoQNVvs9RWfZrOpOjbWwmcw" target="blank"><img src="/youtube.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
