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
            <motion.h1 variants={variants}>Let's connect</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>grow@letzstepin.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Pune</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>8761928727</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
    <form ref={formRef} onSubmit={sendEmail}>
        <div className="formGroup">
            <input type="text" required placeholder="Name" name="from_name" />
            <input type="email" required placeholder="Email" name="email" />
            <input type="text" required placeholder="City" name="city" />
            <input type="text" required placeholder="Business" name="business" />
            <input type="number" required placeholder="Contact No." name="contactNo" />
        </div>
        <div className="messageGroup">
            <textarea name="message" cols="8" rows={8} placeholder="Message"></textarea>
            <button type="submit">Submit</button>
        </div>
        {error && <p className="error">Error: {error}</p>}
        {success && <p className="success">Message sent successfully!</p>}
    </form>
</div>

    </motion.div>
  )
}

export default Contact