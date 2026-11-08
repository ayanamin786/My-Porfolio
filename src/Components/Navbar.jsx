
import { useState , useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos"
import 'aos/dist/aos.css';

export default function Navbar() {
   const [open, setOpen] = useState(false);

   const links = [
      { name: "Home", path: "/", end: true },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact" },
   ];

   const navClass = ({ isActive }) =>
      `relative block py-3 text-sm font-medium transition-all duration-300 md:py-2 ${
         isActive
            ? "text-blue-400"
            : "text-slate-400 hover:text-white"
      }`;

      useEffect(()=>{
      Aos.init({
        duration:1000,
        once:false
      })
      },[])

   return (
      <header data-aos="fade-down"  className="fixed top-0 left-0 z-50 w-full border-b border-white/[0.07]  backdrop-blur-xl">

         <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

            <div className="flex h-[76px] items-center justify-between">

               {/* Logo */}

               <NavLink
                  to="/"
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-3"
               >
                

                  <div className="flex flex-col">
                     <span className="text-[17px] font-bold tracking-tight text-white">
                        Ayan<span className="text-blue-400">.</span>
                     </span>
                     <span className="text-[10px] font-medium uppercase tracking-[2px] text-slate-500">
                        Developer
                     </span>
                  </div>
               </NavLink>


               {/* Desktop Navigation */}

               <div className="hidden items-center gap-9 md:flex">
                  {links.map((link) => (
                     <NavLink style={{ color:"#01a0e9f8"}}
                        key={link.path}
                        to={link.path}
                        end={link.end}
                        className={navClass}
                     >
                        {({ isActive }) => (
                           <>
                              {link.name}

                              <span
                                 className={`absolute -bottom-1 left-0 h-[2px] rounded-full text-orange-500 bg-orange-500 transition-all duration-300 ${
                                    isActive
                                       ? "w-full"
                                       : "w-0"
                                 }`}
                              />
                           </>
                        )}
                     </NavLink>
                  ))}
               </div>


               {/* Desktop CTA */}

               <div  className="hidden md:block">
                  <NavLink style={{backgroundColor:"#01a0e9f8", color:"black"}}
                     to="/contact"
                     className="group inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-orange-900 px-5 py-2.5 text-sm font-semibold text-blue-400 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
                  >
                     Let's Talk

                     <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M7 17L17 7M7 7h10v10"
                        />
                     </svg>
                  </NavLink>
               </div>


               {/* Mobile Toggle */}

               <button
                  onClick={() => setOpen(!open)}
                  type="button"
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-expanded={open}
                  aria-controls="mobile-menu"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all hover:bg-white/10 md:hidden"
               >
                  {open ? (
                     <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M6 18L18 6M6 6l12 12"
                        />
                     </svg>
                  ) : (
                     <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M4 7h16M4 12h16M4 17h16"
                        />
                     </svg>
                  )}
               </button>

            </div>


            {/* Mobile Navigation */}

            <div
               id="mobile-menu"
               className={`grid transition-all duration-300 ease-in-out md:hidden ${
                  open
                     ? "grid-rows-[1fr] pb-5 opacity-100"
                     : "grid-rows-[0fr] pb-0 opacity-0"
               }`}
            >
               <div className="overflow-hidden">

                  <div className="rounded-2xl border border-white/[0.08] bg-[#151F32] p-4">

                     <div className="flex flex-col gap-1">

                        {links.map((link, index) => (
                           <NavLink style={{ color:"#01a0e9f8"}}
                              key={link.path}
                              to={link.path}
                              end={link.end}
                              onClick={() => setOpen(false)}
                              className={({ isActive }) =>
                                 `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                                    isActive
                                       ? "bg-blue-500/10 text-blue-400"
                                       : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                                 }`
                              }
                           >
                              {link.name}

                              <span className="text-xs text-slate-600">
                                 0{index + 1}#01a0e9f8
                              </span>
                           </NavLink>
                        ))}

                     </div>

                     <div className="my-4 h-px bg-white/[0.08]" />

                     <NavLink
                        to="/contact"
                        onClick={() => setOpen(false)}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
                     >
                        Let's Talk

                        <svg
                           className="h-4 w-4"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth="2"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 17L17 7M7 7h10v10"
                           />
                        </svg>
                     </NavLink>

                     <div className="mt-4 flex items-center justify-center gap-2">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                        <span className="text-xs text-slate-500">
                           Available for opportunities
                        </span>
                     </div>

                  </div>

               </div>
            </div>

         </nav>
      </header>
   );
}
