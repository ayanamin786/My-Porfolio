
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function About() {

   useEffect(() => {
      Aos.init({
         duration: 1000,
         once: false,
         
      });
   }, []);

   const skills = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "Firebase",
      "Git & GitHub"
   ];

   const learning = [
      {
         number: "01",
         title: "Full Stack Web Development",
         description: "Learning to build reusable components and modern user interfaces using React."
      },
      {
         number: "03",
         title: "Artificial Intelligence",
         description: "Interested in AI technologies and how they can solve real-world problems."
      },
    
   ];

   return (
    
    

      <main className="bg-[#050505] text-white">
<Navbar/>
         {/* Hero Section */}

         <section className="px-5 py-24 sm:px-8 lg:px-12">

            <div className="mx-auto max-w-7xl">

               <div data-aos="fade-up">

                  <p className="mb-4 text-sm font-medium uppercase tracking-[3px] text-[#00B8E8]">
                     Get To Know Me
                  </p>

                  <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                     About <span className="text-[#00B8E8]">Me.</span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                     I'm Ayan Amin, a passionate web development student
                     who enjoys building websites, learning new technologies
                     and turning ideas into real projects.
                  </p>

               </div>

               <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-center">

                  <div data-aos="fade-right">

                     <h2 className="text-2xl font-semibold sm:text-3xl">
                        Building my future through code.
                     </h2>

                     <p className="mt-5 leading-8 text-gray-400">
                        My journey started with HTML and CSS. After that,
                        I started learning JavaScript and exploring modern
                        frontend development.
                     </p>

                     <p className="mt-4 leading-8 text-gray-400">
                        I enjoy creating practical projects because every
                        project gives me an opportunity to improve my
                        problem-solving and development skills.
                     </p>

                     <p className="mt-4 leading-8 text-gray-400">
                        My goal is to become a skilled developer and
                        explore different areas of technology.
                     </p>

                     <NavLink
                        to="/projects"
                        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#00B8E8] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
                     >
                        Explore My Work
                         <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
                     </NavLink>

                  </div>

                  <div
                     data-aos="fade-left"
                     className="rounded-xl border border-white/10 bg-[#01a0e9f8] p-7 sm:p-10"
                  >

                     <p className="text-sm font-medium text-[black]">
                        A LITTLE ABOUT ME
                     </p>

                     <h3 className="mt-5 text-2xl font-bold text-black">
                        Developer in Progress
                     </h3>

                     <p className="mt-4 leading-8 text-black">
                        I believe in learning by doing. Instead of only
                        studying concepts, I try to apply them by building
                        real projects and solving problems.
                     </p>

                     <div className="mt-8 border-t border-white/10 pt-6">

                        <p className="text-sm text-black">
                           CURRENT FOCUS
                        </p>

                        <p className="mt-2 font-medium text-black">
                           React.js · Tailwind CSS · JavaScript
                        </p>

                     </div>

                  </div>

               </div>

            </div>

         </section>


         {/* My Journey */}

         <section className="border-y border-white/10 bg-[#0A0A0A] px-5 py-20 sm:px-8 lg:px-12">

            <div className="mx-auto max-w-7xl">

               <div  className="mb-12" data-aos="fade-up">

                  <p className="text-sm font-medium uppercase tracking-[3px] text-[#00B8E8]">
                     My Background
                  </p>

                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                     My Journey<span className="text-[#00B8E8]">.</span>
                  </h2>

               </div>

               <div className="grid gap-6 md:grid-cols-3">

                  <div 
                     data-aos="fade-up"
                     className="rounded-xl border border-white/10 bg-[#01a0e9f8] p-6"
                  >

                     <span className="text-sm font-semibold text-[black]">
                        STEP 01
                     </span>

                     <h3 className="mt-4 text-xl font-semibold text-black">
                        Started With HTML & CSS
                     </h3>

                     <p className="mt-4 text-sm leading-7 text-black">
                        Started learning the fundamentals of web development
                        and creating my first web pages.
                     </p>

                  </div>

                  <div
                     data-aos="fade-up"
                     
                     className="rounded-xl border border-white/10 bg-[#01a0e9f8] p-6"
                  >

                     <span className="text-sm font-semibold text-[black]">
                        STEP 02
                     </span>

                     <h3 className="mt-4 text-xl font-semibold text-black">
                        JavaScript & Projects
                     </h3>

                     <p className="mt-4 text-sm leading-7 text-black">
                        Learned JavaScript fundamentals and started building
                        projects like a quiz app, calculator and To-Do app.
                     </p>

                  </div>

                  <div
                     data-aos="fade-up"
                     
                     className="rounded-xl border border-white/10 bg-[#01a0e9f8] p-6"
                  >

                     <span className="text-sm font-semibold text-[black]">
                        STEP 03
                     </span>

                     <h3 className="mt-4 text-xl font-semibold text-black ">
                        Exploring React
                     </h3>

                     <p className="mt-4 text-sm leading-7 text-black">
                        Now focusing on React, Tailwind CSS and building
                        more modern and interactive websites.
                     </p>

                  </div>

               </div>

            </div>

         </section>


         {/* Skills Section */}

         <section className="px-5 py-20 sm:px-8 lg:px-12">

            <div className="mx-auto max-w-7xl">

               <div className="mb-10" data-aos="fade-up">

                  <p className="text-sm font-medium uppercase tracking-[3px] text-[#00B8E8]">
                     My Skills
                  </p>

                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                     Technologies I Use<span className="text-[#00B8E8]">.</span>
                  </h2>

                  <p className="mt-4 max-w-xl leading-7 text-gray-400">
                     These are some of the technologies I have been learning
                     and using in my development projects.
                  </p>

               </div>

               <div className="flex flex-wrap gap-3" data-aos="fade-up">

                  {skills.map((skill, index) => (

                     <div
                        key={skill}
                        data-aos="fade-up"
                        className="rounded-lg border border-white/10 bg-[#01a0e9f8] px-6 py-4 text-sm font-medium text-black transition hover:border-[#00B8E8] hover:text-[#00B8E8]"
                     >
                        {skill}
                     </div>

                  ))}

               </div>

            </div>

         </section>


         {/* Learning Section */}

         <section className="border-y border-white/10 bg-[#0A0A0A] px-5 py-20 sm:px-8 lg:px-12">

            <div className="mx-auto max-w-7xl">

               <div className="mb-12" data-aos="fade-up">

                  <p className="text-sm font-medium uppercase tracking-[3px] text-[#00B8E8]">
                     Always Learning
                  </p>

                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                     What I'm Exploring<span className="text-[#00B8E8]">.</span>
                  </h2>

               </div>

               <div className="grid gap-6 sm:grid-cols-2">

                  {learning.map((item, index) => (

                     <div
                        key={item.number}
                        data-aos="fade-up"
                        
                        className="rounded-xl border border-white/10 bg-[#01a0e9f8] p-6 transition hover:border-[#00B8E8]/50"
                     >

                        <span className="text-sm font-semibold text-[black]">
                           {item.number}
                        </span>

                        <h3 className="mt-4 text-xl font-semibold text-black ">
                           {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-black">
                           {item.description}
                        </p>

                     </div>

                  ))}

               </div>

            </div>

         </section>


         {/* Goals Section */}

         <section className="px-5 py-20 sm:px-8 lg:px-12">

            <div
               data-aos="fade-up"
               className="mx-auto max-w-7xl rounded-xl border border-white/10 bg-[#01a0e9f8] p-8 sm:p-12"
            >

               <p className="text-sm font-medium uppercase tracking-[3px] text-[black]">
                  My Vision
               </p>

               <h2 className="text-black mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
                  My Goal Is To Keep Learning And Building.
               </h2>

               <p className="mt-5 max-w-2xl leading-8 text-black">
                  I want to become a skilled developer, build useful
                  digital products and explore technologies like
                  Artificial Intelligence and Cybersecurity.
                  I'm focused on improving my skills one project at a time.
               </p>

            </div>

         </section>


         {/* Contact CTA */}

         <section className="px-5 pb-20 sm:px-8 lg:px-12">

            <div
               data-aos="fade-up"
               className="mx-auto max-w-7xl text-center"
            >

               <p className="text-sm font-medium uppercase tracking-[3px] text-[#00B8E8]">
                  Get In Touch
               </p>

               <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Let's Build Something Together.
               </h2>

               <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
                  Have an idea, a project or just want to connect?
                  Feel free to reach out.
               </p>

               <NavLink
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#00B8E8] px-7 py-3 font-semibold text-black transition hover:bg-white"
               >
                  Contact Me
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
               </NavLink>

            </div>

         </section>

        <Footer/>

      </main>


   );

}
