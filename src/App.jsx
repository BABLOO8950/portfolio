import { motion } from "framer-motion";

export default function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "GitHub",
  ];

  const projects = [
    {
      title: "E-Commerce Website",
      desc: "Full MERN stack e-commerce website with admin panel, JWT auth, products and orders management.",
    },
    {
      title: "Portfolio Website",
      desc: "Modern animated personal portfolio built in React for recruiters and LinkedIn.",
    },
  ];

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      {/* Resume Button */}
      <div className="fixed top-4 right-4 z-50">
        <a
          href="/resume.pdf"
          className="bg-white text-black px-4 py-2 rounded-xl font-semibold shadow-lg"
        >
          Download CV
        </a>
      </div>

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen snap-start flex items-center justify-center px-6"
      >
        <div className="max-w-5xl grid md:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-cyan-400 tracking-widest text-sm">
              MERN STACK DEVELOPER
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mt-4">
              Babloo
            </h1>

            <p className="text-xl mt-3 text-cyan-300 animate-pulse">
              Building Modern Web Experiences 🚀
            </p>

            <p className="mt-5 text-slate-300 leading-7">
              BSc Computer Science student from Pinjore with hands-on
              experience in MongoDB, Express, React and Node.js.
            </p>

            <div className="mt-7 flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="bg-cyan-500 px-5 py-3 rounded-xl font-semibold"
              >
                View Projects ↓
              </a>

              <a
                href="#contact"
                className="border border-slate-500 px-5 py-3 rounded-xl"
              >
                Contact Me ↓
              </a>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-5">Quick CV</h2>

            <p>📍 Pinjore / Panchkula</p>
            <p className="mt-2">🎓 DAV College Chandigarh</p>
            <p className="mt-2">💼 Fresher MERN Developer</p>
            <p className="mt-2">📧 idbabloo3@gmail.com</p>
            <p className="mt-2">📞 +91 8950914289</p>
          </div>

        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen snap-start flex flex-col justify-center px-6"
      >
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-10">Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 px-5 py-3 rounded-xl shadow-lg hover:scale-105 duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen snap-start flex flex-col justify-center px-6"
      >
        <div className="max-w-5xl mx-auto w-full">

          <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
            <h2 className="text-4xl font-bold">Projects</h2>

            <a
              href="https://github.com/"
              className="text-cyan-400"
            >
              View GitHub →
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
                className="bg-slate-800 p-6 rounded-3xl shadow-xl"
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="text-slate-300 mt-4 leading-7">
                  {item.desc}
                </p>

                <div className="mt-6 flex gap-3">
                  <button className="bg-cyan-500 px-4 py-2 rounded-xl">
                    Live Demo
                  </button>

                  <button className="border px-4 py-2 rounded-xl">
                    Code
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen snap-start flex flex-col justify-center px-6"
      >
        <div className="max-w-4xl mx-auto w-full">

          <h2 className="text-4xl font-bold mb-10">
            Contact Me
          </h2>

          <div className="bg-slate-800 p-8 rounded-3xl shadow-xl">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-slate-900 mb-4 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-slate-900 mb-4 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-slate-900 mb-4 outline-none"
            ></textarea>

            <button className="bg-cyan-500 px-6 py-3 rounded-xl font-semibold">
              Send Message
            </button>

          </div>
        </div>
      </motion.section>
    </div>
  );
}