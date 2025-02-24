import { useRef, useState } from 'react';
import './Contact.scss';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { TRUE } from 'sass';

const variants={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        }
    }

}

const Contact = () => {

    const formRef=useRef();

    const[error,setError]=useState(false);
    const[success,setSuccess]=useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_0nf66oa', 'template_pad6bgr', formRef.current, {
            publicKey: 'dF2O5K-F4KISOReqL',
          })
          .then(
            (result) => {
              setSuccess(true);
            },
            (error) => {
              setError(true);
            },
          );
      };
    
  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's discuss</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>aravindhsuresh1609@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Tirupur</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>+91 94438 36278</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            
            <form ref={formRef} onSubmit={sendEmail}>
                <input type="text" required placeholder='Name' name='from_name'/>
                <input type="email" required placeholder='Email' name='email'/>
                <textarea name="message" id="" cols="8" rows={10} placeholder='Message'/>
                <button>Submit</button>
                {error && "Error"}
                {success && "Success"}
            </form>
        </div>
    </motion.div>
  )
}

export default Contact