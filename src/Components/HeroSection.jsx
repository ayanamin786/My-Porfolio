import { NavLink } from "react-router-dom";
import { useState , useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Hero() {
      useEffect(()=>{
          Aos.init({
            duration:1000,
            once:false
          })
          },[])
   return (
<section className="relative bottom-10 bg-black mx-auto">
  <div className="grid max-w-screen-xl px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <p data-aos="fade-right" className="mb-4 text-[#00B8E8] font-medium">
        Hello, I'm Ayan Amin
      </p>
      <h1 data-aos="fade-up" className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-tight md:text-5xl xl:text-6xl text-white">
        I'm a Frontend Developer. <span className="text-[#00B8E8]"> I build websites that work.</span>
      </h1>
      <p data-aos="fade-up" className="max-w-2xl mb-6 text-gray-400 font-light md:text-lg lg:text-xl">
        I'm a web development student passionate about creating modern and responsive websites. I work with HTML, CSS, JavaScript and React, and enjoy turning ideas into real projects. Currently, I'm learning app development and exploring new technologies.
      </p>
      <div className="flex flex-wrap gap-3">
        <NavLink data-aos="fade-up" to="/projects" className="inline-flex items-center px-5 py-3 text-base font-medium text-black bg-[#00B8E8] rounded-lg hover:bg-[#29C8F3] transition">
          View My Work
          <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </NavLink>
        <NavLink data-aos="fade-up" to="/contact" className="inline-flex items-center px-5 py-3 text-base font-medium text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition">
          Contact Me
        </NavLink>
      </div>
    
    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:items-center relative bottom-10 bg-black mx-auto" >
      <img data-aos="fade-left" src="https://avatars.githubusercontent.com/u/252207918?v=4" alt="Developer portrait" className="w-full max-w-md h-[420px] object-cover rounded-xl" />
    </div>
  </div>
</section>


   );
}
