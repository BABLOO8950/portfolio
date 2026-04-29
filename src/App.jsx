import { motion } from "framer-motion";
import './assets/babloo-resume.pdf (1).pdf'
export default function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "Tailwind CSS",
    "Git & GitHub",
    "REST API",
    "JWT Authentication",
    "Responsive Design",
  ];

  const techUsed = [
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "JWT Auth",
    "REST API",
    "Tailwind CSS",
    "GitHub",
  ];

  return (
    <div className="bg-slate-950 text-white scroll-smooth">

      {/* DOWNLOAD CV BUTTON */}
      <div className="fixed top-5 right-5 z-50">
        <a
          href="/babloo-resume.pdf(1).pdf"
          download
          className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-3 rounded-xl font-semibold shadow-xl duration-300"
        >
          Download CV
        </a>
      </div>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center px-6 md:px-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-cyan-400 tracking-[4px] text-sm font-semibold">
              FULL STACK WEB DEVELOPER
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mt-5 leading-tight">
              Babloo
            </h1>

            <h2 className="text-2xl md:text-4xl text-slate-300 mt-4 font-semibold">
              MERN Stack Developer
            </h2>

            <p className="text-slate-400 mt-8 leading-8 text-lg">
              Passionate and dedicated MERN Stack Developer with hands-on
              experience in building responsive, scalable and user-friendly
              web applications using modern technologies.
            </p>

            <p className="text-slate-400 mt-6 leading-8 text-lg">
              Completed 8 months internship at Excellence Technology,
              Chandigarh where I worked on live projects and real client
              requirements.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl font-semibold"
              >
                View Projects
              </a>

              <a
                href="/babloo-resume.pdf(1).pdf"
                download
                className="border border-slate-600 hover:border-cyan-400 px-6 py-3 rounded-xl"
              >
                Download Resume
              </a>

              <a
                href="https://github.com/BABLOO8950"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 hover:border-cyan-400 px-6 py-3 rounded-xl"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-800"
          >
            <h3 className="text-3xl font-bold mb-8 text-cyan-400">
              Professional Summary
            </h3>

            <div className="space-y-5 text-lg text-slate-300">
              <p>📍 Location: Pinjore / Panchkula / Chandigarh</p>
              <p>🎓 Education: BSc Computer Science</p>
              <p>🏫 College: DAV College Chandigarh</p>
              <p>💼 Role: MERN Stack Developer</p>
              <p>🏢 Internship: 8 Months Experience</p>
              <p>🏢 Company: Excellence Technology</p>
              <p>📧 Email: idbabloo3@gmail.com</p>
              <p>📱 Phone: +91 8950914289</p>
              <p>🌐 Status: Open to Work</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-28 px-6 md:px-14 bg-slate-900">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-16">
            Professional Experience
          </h2>

          <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-xl">
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">
                  MERN Stack Intern
                </h3>

                <p className="text-xl text-slate-300 mt-2">
                  Excellence Technology, Chandigarh
                </p>
              </div>

              <p className="text-slate-400 text-lg">
                8 Months Internship
              </p>
            </div>

            <p className="mt-8 text-slate-300 text-lg leading-8">
              Completed professional internship where I worked on live
              development projects and gained real-world experience in
              frontend and backend development.
            </p>

            <p className="mt-5 text-slate-300 text-lg leading-8">
              Worked on React.js UI development, backend APIs using Node.js
              and Express.js, database operations using MongoDB and debugging
              production level applications.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-28 px-6 md:px-14 bg-slate-950">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-16">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {skills.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 hover:bg-slate-700 duration-300 p-5 rounded-2xl text-center text-lg font-medium shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-28 px-6 md:px-14 bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-16">
            Featured Project
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-xl">
              <h3 className="text-4xl font-bold text-cyan-400">
                E-Commerce Website
              </h3>

              <p className="mt-6 text-slate-300 text-lg leading-8">
                Developed a complete MERN Stack E-Commerce website with
                secure JWT authentication, product listing, cart system,
                order management and admin dashboard.
              </p>

              <p className="mt-5 text-slate-300 text-lg leading-8">
                Users can browse products, place orders and manage accounts.
                Admin can add, update, delete products and track orders.
              </p>

              <a
                href="https://github.com/BABLOO8950"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl font-semibold"
              >
                View Source Code
              </a>
            </div>

            {/* RIGHT */}
            <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-xl">
              <h3 className="text-3xl font-bold mb-8">
                Technologies Used
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {techUsed.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-700 p-4 rounded-xl text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">

          <h3 className="text-3xl font-bold">
            Babloo
          </h3>

          <p className="text-slate-400 mt-4">
            MERN Stack Developer | Open for Opportunities
          </p>

          <div className="mt-6 flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:idbabloo3@gmail.com"
              className="text-cyan-400"
            >
              Email
            </a>

            <a
              href="https://github.com/BABLOO8950"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="/resume.pdf"
              download
              className="text-cyan-400"
            >
              Resume
            </a>
          </div>

          <p className="text-slate-500 mt-8 text-sm">
            © 2026 Babloo. All Rights Reserved.
          </p>

        </div>
      </footer>
    </div>
  );
}