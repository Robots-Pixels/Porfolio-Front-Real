import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaDotCircle, FaArrowRight, FaEye, FaCheck, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Home({transform, success,  setSucces}) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);

        const base = import.meta.env.VITE_BACKEND_API_BASE_URL;
        const res = await fetch(`${base}/api/message/newMessage`,
            {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            }
        )

        const data = await res.json();
        if (data.success === false){
            setError(data.message);
            setLoading(false);
            return;
        }

        if (data.success === true){
            setSucces(data.message);
            setLoading(false);
        }

        setTimeout(() => {
            navigate("/");
        }, 2000);
    }

    useEffect(() => {
        if (success){
            setFormData({
                name: "",
                email: "",
                message: ""
            })
            setTimeout(()=> {
                setSucces(false);
            }, 2000)
        }
    }, [success]);

    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    
  return (
    <div className={`relative bg-[#faf8ff] w-full`}
    style={{transition: "all 0.5s ease", transform: `translateY(${transform}rem)`}}>

        <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        id='hero'
        className='max-w-3xl md:max-w-6xl mx-auto px-6 md:px-8 sm:pb-20'>

            <div className='flex flex-col sm:flex-row gap-4 sm:gap-0  sm:h-[70vh] items-center py-10 sm:py-0'>

                <div className='flex flex-1 flex-col gap-3'>

                    <h3 className='text-xl sm:text-3xl'>
                        Hi, I'm
                    </h3>

                    <h2 className='text-4xl sm:text-6xl'>
                        Web Developer<span className='text-[#028041]'>.</span>
                    </h2>

                    <h4 className='mb-4'>My name is Otmar — I design and develop scalable digital products, blending precision with intuitive user experiences.</h4>

                    <div className='hidden sm:flex items-center gap-2 sm:gap-4'>

                        <div className='flex gap-2'>

                        <Link className='hover:scale-120 transition-all' to={"/https://www.linkedin.com/in/otmar-tchenga-953988319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} >
                            <FaLinkedin className='text-2xl'/>
                        </Link>

                        <Link className='hover:scale-120 transition-all' to={"https://github.com/Robots-Pixels"}>
                            <FaGithub className='text-2xl'/>
                        </Link>

                        <Link className='hover:scale-120 transition-all' to={"mailto:otmartch23@gmail.com"}>
                            <FaEnvelope className='text-2xl'/>
                        </Link>

                            <a 
                            href={`https://wa.me/22940820493?text=Bonjour,%20je%20viens%20de%20votre%20site%20internet%20et%20j'aimerais%20avoir%20plus%20d'informations%20sur%20vos%20offres%20Merci.`}
                            target="_blank"
                            rel="noopener noreferrer"                                
                            className='hover:scale-120 transition-all'>
                                <FaWhatsapp className='text-2xl'/>
                            </a>
     

                        </div>


                        <div className=''>
                            <HashLink smooth to={"#contact"} className='border-[#028041] border-1 text-[#028041] px-2 py-2 text-[1rem] rounded-xl shadow-3xs shadow-[#028041] hover:bg-[#028041] hover:text-[#fff] transition-colors'>
                                Contact Me
                            </HashLink>
                        </div>

                    </div>
                            
                </div>

                <div className='relative w-full z-20 sm:flex-1 bg-cover h-[15rem] sm:h-100 rounded-[80px] sm:rounded-[100px]'
                style={{backgroundImage: `url("/1.webp")`, backgroundSize: "120%", backgroundPosition: 'top -40px center'}}>

                    <div className='hidden z-2 absolute bottom-0 text-[#79af87] -left-10 text-[0.5rem] sm:grid grid-cols-5 gap-4'>

                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>

                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>

                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>

                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>

                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>
                        <FaDotCircle/>

                    </div>

                </div>

                <div className='flex sm:hidden self-start items-center gap-2 sm:gap-4 mt-4 ml-3'>

                    <div className='flex gap-2'>

                    <Link className='hover:scale-120 transition-all' to={"https://github.com/Robots-Pixels"}>
                        <FaLinkedin className='text-2xl'/>
                    </Link>

                    <Link className='hover:scale-120 transition-all' to={"/https://www.linkedin.com/in/otmar-tchenga-953988319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                        <FaGithub className='text-2xl'/>
                    </Link>

                    <Link className='hover:scale-120 transition-all' to={"mailto:otmartch23@gmail.com"}>
                        <FaEnvelope className='text-2xl'/>
                    </Link>


                    <a 
                            href={`https://wa.me/22940820493?text=Bonjour,%20je%20viens%20de%20votre%20site%20internet%20et%20j'aimerais%20avoir%20plus%20d'informations%20sur%20vos%20offres%20Merci.`}
                            target="_blank"
                            rel="noopener noreferrer"                                
                            className='hover:scale-120 transition-all'>
                                <FaWhatsapp className='text-2xl'/>
                            </a>

                    </div>

                    <div className=''>
                        <HashLink smooth to={"#contact"} className='border-[#028041] border-1 text-[#028041] px-2 py-2 text-[1rem] rounded-xl shadow-3xs shadow-[#028041] hover:bg-[#028041] hover:text-[#fff] transition-colors'>
                            Contact Me
                        </HashLink>
                    </div>

                </div>
            
            </div>


        </motion.section>

        <motion.section
  ref={aboutRef}
  initial={{ opacity: 0, y: 20 }}
  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, ease: "easeOut" }}
  id="about"
  className="py-20 bg-[#d5fadd]"
>
  <div className="max-w-3xl md:max-w-6xl mx-auto px-6 md:px-8">
    <h2 className="text-3xl font-semibold mb-6">Who I Help — And How</h2>
    
    <p className="text-md sm:text-lg">
      <span className="text-3xl">I</span>'m Otmar — I help small business owners like you build a strong digital presence that attracts real customers. Whether you need a modern website, a clean online image, or help getting visible on social media, I make the tech side easy so you can focus on running your business.
    </p>
    
    <p className="mt-4 text-md sm:text-lg">
      <span className="text-3xl">W</span>ith 3+ years of experience building web solutions using the <span className="font-bold">MERN Stack</span>, I focus on what matters most to you: results, speed, and simplicity. You’ll get a site that looks great, loads fast, and actually helps you grow.
    </p>
    
    <p className="mt-4 text-md sm:text-lg">
      <span className="text-3xl">I</span> believe in clarity, collaboration, and results. I work closely with every client to understand their goals and offer honest advice — not just code. If you're serious about growing your business online, let's make it happen.
    </p>
  </div>
</motion.section>


        <motion.section
        ref={projectsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        id="portfolio" 
        className='py-20'>

            <div className="max-w-3xl md:max-w-6xl mx-auto px-6 md:px-8">
                <h1 className="text-3xl font-semibold mb-10">My Work</h1>
                <div className="flex flex-col gap-5">

                    <div onClick={(e) => {e.stopPropagation(); window.location.href='https://celeste-restaurant.vercel.app/'}} className="relative project overflow-hidden group">

    <div className='project-layer absolute w-full h-full bg-[#000]/60 gap-3 rounded-3xl flex flex-col items-center justify-center translate-y-[100%] group-hover:translate-y-[0%]' 
    style={{transition: "translate 0.7s"}}>

        <div>
            <h3 className='text-[#faf8ff] w-[20rem] md:w-[30rem] text-center font-bold'>
                A clean, responsive portfolio platform with dynamic sections and smooth animations.
            </h3>
        </div>

        <div className='flex items-center justify-center text-2xl gap-10'>
            <Link className='text-4xl text-black' to={"https://github.com/Robots-Pixels/Celeste-Restaurant"} target='_blank'>
                <button className='flex items-center bg-[#028041] rounded-sm gap-2 p-1 text-[#faf8ff]'>
                    <span className='text-sm md:text-xl'>Code Here</span>
                    <FaGithub className='text-[1rem] md:text-[2rem]'/>
                </button>
            </Link>

            <Link className='text-4xl text-black' to={"https://celeste-restaurant.vercel.app/"} target='_blank'>
                <button className='flex items-center bg-[#028041] rounded-sm gap-2 p-1 text-[#faf8ff]'>
                    <span className='text-sm md:text-xl'>Live Preview</span>
                    <FaEye className='text-[1rem] md:text-[2rem]'/>
                </button>
            </Link>

        </div>
    </div>

    <img
        loading='lazy'
    className='rounded-3xl' src="/project1.webp" />

                    </div>

                    <div onClick={(e) => {e.stopPropagation(); window.location.href='https://beautedujourperfume.com/'}} className="relative project overflow-hidden group">

<div className='project-layer absolute w-full h-full bg-[#000]/60 gap-3 rounded-3xl flex flex-col items-center justify-center translate-y-[100%] group-hover:translate-y-[0%]' 
style={{transition: "translate 0.7s"}}>

    <div>
        <h3 className='text-[#faf8ff] w-[20rem] md:w-[30rem] text-center font-bold'>
        A sleek and responsive showcase website for a perfume boutique, highlighting products, brand story, and contact options.
        </h3>
    </div>

    <div className='flex items-center justify-center text-2xl gap-10'>
        <Link className='text-4xl text-black' to={"https://beautedujourperfume.com/"} target='_blank'>
            <button className='flex items-center bg-[#028041] rounded-sm gap-2 p-1 text-[#faf8ff]'>
                <span className='text-sm md:text-xl'>Live Preview</span>
                <FaEye className='text-[1rem] md:text-[2rem]'/>
            </button>
        </Link>

    </div>
</div>

<img 
    loading='lazy'
    className='rounded-3xl' src="/project3.webp" />

                    </div>

                    <div onClick={(e) => {e.stopPropagation(); window.location.href='https://yumking-frontend.vercel.app/'}} className="relative project overflow-hidden group">

<div className='project-layer absolute w-full h-full bg-[#000]/60 gap-3 rounded-3xl flex flex-col items-center justify-center translate-y-[100%] group-hover:translate-y-[0%]' 
style={{transition: "translate 0.7s"}}>

    <div>
        <h3 className='text-[#faf8ff] w-[20rem] md:w-[30rem] text-center font-bold'>
            A fast and intuitive food delivery app with real-time reservation, smart filters and authentication.
        </h3>
    </div>

    <div className='flex items-center justify-center text-2xl gap-10'>
        <Link className='text-4xl text-black' to={"https://github.com/Robots-Pixels/yumking-fast-food-app"} target='_blank'>
            <button className='flex items-center bg-[#028041] rounded-sm gap-2 p-1 text-[#faf8ff]'>
                <span className='text-sm md:text-xl'>Code Here</span>
                <FaGithub className='text-[1rem] md:text-[2rem]'/>
            </button>
        </Link>

        <Link className='text-4xl text-black' to={"https://yumking-frontend.vercel.app/"} target='_blank'>
            <button className='flex items-center bg-[#028041] rounded-sm gap-2 p-1 text-[#faf8ff]'>
                <span className='text-sm md:text-xl'>Live Preview</span>
                <FaEye className='text-[1rem] md:text-[2rem]'/>
            </button>
        </Link>

    </div>
</div>

<img 
loading='lazy'
className='rounded-3xl' 
src="/project2.webp" />

                    </div>

                </div>
            </div>
        </motion.section>

        <motion.section
  ref={skillsRef}
  initial={{ opacity: 0, y: 20 }}
  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7, ease: "easeOut" }}
  id="skills" 
  className='py-20 bg-[#d5fadd]'
>
  <div className="max-w-3xl md:max-w-6xl mx-auto px-6 md:px-8">
    <div id="services">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Services That Help You Grow</h1>
        
        <div className="services-list grid gap-10 md:grid-cols-3">
        
          <div>
            <i className="fa-solid fa-globe"></i>
            <h2 className="text-xl font-semibold mt-4 mb-2">Business Website Creation</h2>
            <p>
              I create elegant, mobile-friendly websites that show who you are and help customers trust your business. Perfect for restaurants, boutiques, salons, or any service-based business.
            </p>
            <HashLink smooth to="#contact" className='flex items-center gap-2 text-sm mt-3'>
              <span>Let’s Get in Touch</span> <FaArrowRight />
            </HashLink>
          </div>
        
          <div>
            <i className="fa-brands fa-facebook"></i>
            <h2 className="text-xl font-semibold mt-4 mb-2">Social Media Setup & Growth</h2>
            <p>
              I help you open or improve your business pages on Facebook, Instagram & Fryim — with visual design, description, and a simple strategy to start getting attention.
            </p>
            <HashLink smooth to="#contact" className='flex items-center gap-2 text-sm mt-3'>
              <span>Let’s Get in Touch</span> <FaArrowRight />
            </HashLink>
          </div>
          
          <div>
            <i className="fa-solid fa-bullhorn"></i>
            <h2 className="text-xl font-semibold mt-4 mb-2">Visibility & Digital Strategy</h2>
            <p>
              You don’t just need a website — you need people to find you. I provide simple, effective SEO and advice to help your business stand out locally and online.
            </p>
            <HashLink smooth to="#contact" className='flex items-center gap-2 text-sm mt-3'>
              <span>Let’s Get in Touch</span> <FaArrowRight />
            </HashLink>
          </div>

        </div>
      </div>
    </div>
  </div>
</motion.section>


        <motion.section
        ref={contactRef}
        initial={{ opacity: 0, y: 20 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        id="contact">
            <div className="max-w-3xl md:max-w-6xl mx-auto px-6 md:px-8 py-20">
                <div className="flex flex-col items-center gap-5">
                    <h2 className='text-2xl sm:text-4xl font-bold text-[#028041] text-center mb-4'>Send me a message!</h2>

                    <h3 className='text-md sm:text-xl text-center mb-4'>
                    Have a project in mind or just want to connect? Let's talk.
                    </h3>
                    
                    <form className='flex flex-col gap-6' onSubmit={handleSubmit}>

                        <div className='flex flex-col sm:flex-row gap-8'>

                            <div className='flex flex-col gap-1'>
                                <label className='text-xs sm:text-md'>Your Name</label>
                                <input id='name' onChange={handleChange} value={formData.name} required className='text-md sm:text-md outline-none pb-2 border-b-1 w-full text-[#052935]' type="text" placeholder='Enter your name'/>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label className='text-xs sm:text-md'>Your Email Address</label>
                                <input id='email' onChange={handleChange} value={formData.email} required className='text-md sm:text-md outline-none pb-2 border-b-1 w-full text-[#052935]' type="email" placeholder='Enter your email'/>
                            </div>

                        </div>

                        <div className='flex flex-col gap-1 flex-1'>
                            <label className='text-xs sm:text-md'>Your Message</label>
                            <textarea id='message' onChange={handleChange} value={formData.message} rows={5} required className='text-md sm:text-md outline-none pb-2 border-b-1 text-[#052935]' type="text" placeholder="Hi, we're looking for someone who can help us build fast web app at Company X. When would you be available to discuss this?"/>
                        </div>

                        <div>
                            
                        </div>

                        <button className={`${loading ? "opacity-90" : ""} mx-auto border-[#028041] border-1 p-2 text-[#028041] hover:bg-[#028041] hover:text-[#faf8ff] transition-all rounded-xl w-full sm:w-[70%]`}>
                            Send
                        </button>

                    </form>

                </div>
            </div>
        </motion.section>

        <Footer/>
        
    </div>

  )
}
