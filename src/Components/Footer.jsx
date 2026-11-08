import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Footer() {

   useEffect(() => {
      Aos.init({
         duration: 1000,
         once: false,
         
      });
   }, []);

   return (

      <footer className="bg-[#050505] text-white">

         <div className="mx-auto max-w-7xl px-5 pt-16 pb-6 sm:px-8 lg:px-12">

            {/* Footer Top */}

            <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-3">

               {/* About */}

               <div data-aos="fade-up">

                  <NavLink to="/" className="text-2xl font-bold">
                     Ayan<span className="text-[#00B8E8]">.</span>
                  </NavLink>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                     I'm Ayan Amin, a web development student
                     passionate about building modern, responsive
                     and user-friendly websites.
                  </p>

                  <div className="mt-6 flex gap-3">

                     <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-[#00B8E8] hover:text-[#00B8E8]"
                     >
                        <i className="fa-brands fa-github text-lg"></i>
                     </a>

                     <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-[#00B8E8] hover:text-[#00B8E8]"
                     >
                        <i className="fa-brands fa-linkedin-in text-lg"></i>
                     </a>

                     <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-[#00B8E8] hover:text-[#00B8E8]"
                     >
                        <i className="fa-brands fa-instagram text-lg"></i>
                     </a>

                  </div>

               </div>


               {/* Quick Links */}

               <div data-aos="fade-up" data-aos-delay="100">

                  <h3 className="mb-5 text-lg font-semibold">
                     Quick Links
                  </h3>

                  <ul className="space-y-3 text-sm text-gray-400">

                     <li>
                        <NavLink to="/" className="transition hover:text-[#00B8E8]">
                           Home
                        </NavLink>
                     </li>

                     <li>
                        <NavLink to="/about" className="transition hover:text-[#00B8E8]">
                           About Me
                        </NavLink>
                     </li>

                     <li>
                        <NavLink to="/projects" className="transition hover:text-[#00B8E8]">
                           Projects
                        </NavLink>
                     </li>

                     <li>
                        <NavLink to="/contact" className="transition hover:text-[#00B8E8]">
                           Contact
                        </NavLink>
                     </li>

                  </ul>

               </div>


               {/* Contact */}

               <div data-aos="fade-up" data-aos-delay="200">

                  <h3 className="mb-5 text-lg font-semibold">
                     Let's Connect
                  </h3>

                  <p className="mb-5 text-sm leading-7 text-gray-400">
                     Have a project idea or want to work together?
                     Feel free to contact me.
                  </p>

                  <NavLink
                     to="/contact"
                     className="inline-flex items-center gap-2 rounded-lg bg-[#00B8E8] px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
                  >
                     Contact Me
                     <span>↗</span>
                  </NavLink>

               </div>

            </div>


            {/* Footer Bottom */}

            <div
               className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row"
               data-aos="fade-up"
            >

               <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()} Ayan Amin. All rights reserved.
               </p>

               <p className="text-sm text-gray-500">
                  Designed & Built with <span className="text-[#00B8E8]">♥</span> by Ayan
               </p>

            </div>

         </div>

      </footer>

   );
}
