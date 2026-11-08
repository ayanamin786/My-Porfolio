
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Projects() {

   useEffect(() => {
      Aos.init({
         duration: 1000,
         once: false,
      });
   }, []);

   const projects = [
      {
         number: "01",
         name: "LMS Web App",
         description: "An interactive LMS Web Application Where Are Admin Panel User Panel And More Things ",
         tech: "HTML, CSS, JavaScript Firebase",
         preview: "https://lms-web-app-iota.vercel.app/userSide/signup.html",
         link: "https://lms-web-app-iota.vercel.app/userSide/signup.html"
      },
      {
         number: "02",
         name: "Mobile Store",
         description: "A Modren Mobile Store Web Application .",
         tech: "React, Vite, Tailwind Css",
         preview: "https://mobile-store-sandy.vercel.app/",
         link: "https://mobile-store-sandy.vercel.app/"
      },
      {
         number: "03",
         name: "Fitness Coach",
         description: "A Persnoal Gym Fitness Coach  ",
         tech: "HTML, CSS, JavaScript, FireBase",
         preview: "https://fitness-coach-flax-iota.vercel.app/",
         link: "https://fitness-coach-flax-iota.vercel.app/"
      },
      {
         number: "04",
         name: "A Pertrol Pump Machine",
         description: "A Modren Petrol Pump Machine",
         tech: "Html, Css, Js",
         preview: "https://petrol-dispenser.vercel.app/",
         link: "https://petrol-dispenser.vercel.app/"
      }
   ];

   return (

      <section className="bg-[#050505] py-20 text-white">

         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

            {/* Section Heading */}

            <div
               className="mb-12 flex flex-wrap items-end justify-between gap-5"
               data-aos="fade-up"
            >

               <div>

                  <p className="mb-3 text-sm font-medium uppercase tracking-[3px] text-[#00B8E8]">
                     My Work
                  </p>

                  <h2 className="text-3xl font-bold sm:text-4xl">
                     Recent Projects<span className="text-[#00B8E8]">.</span>
                  </h2>

                  <p className="mt-4 max-w-xl text-gray-400">
                     Here are some projects I've been working on.
                     Each one has helped me learn something new
                     and improve my development skills.
                  </p>

               </div>

               <NavLink
                  to="/projects"
                  className="border-b border-[#00B8E8] pb-1 text-sm font-medium text-[#00B8E8] transition hover:text-white"
               >
                  View All Projects ↗
               </NavLink>

            </div>


            {/* Project Cards */}

            <div className="grid gap-7 sm:grid-cols-2">

               {projects.map((project, index) => (

                  <div
                     key={project.number}
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                     className="overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0D] transition duration-300 hover:border-[#00B8E8]/50"
                  >

                     {/* Project Preview */}

                     <div className="relative h-64 overflow-hidden bg-[#151515]">

                        <iframe
                           src={project.preview}
                           title={project.name}
                           loading="lazy"
                           className="h-full w-full border-0 bg-white"
                        />

                     </div>


                     {/* Project Details */}

                     <div className="p-6">

                        <div className="mb-4 flex items-center justify-between">

                           <span className="text-xs font-medium tracking-widest text-[#00B8E8]">
                              PROJECT {project.number}
                           </span>

                           <span className="text-xs text-gray-500">
                              Personal Project
                           </span>

                        </div>


                        <h3 className="text-xl font-semibold text-white">
                           {project.name}
                        </h3>


                        <p className="mt-3 min-h-[48px] text-sm leading-7 text-gray-400">
                           {project.description}
                        </p>


                        <div className="mt-5 border-t border-white/10 pt-4">

                           <p className="text-xs text-gray-500">
                              {project.tech}
                           </p>

                           <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#00B8E8] transition hover:text-white"
                           >
                              View Project
                              <span>↗</span>
                           </a>

                        </div>

                     </div>

                  </div>

               ))}

            </div>

         </div>

      </section>

   );
}
