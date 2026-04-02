import Dimas from "../assets/DimasCuy.jpeg";
import DimasCoklat from "../assets/DimasCoklat.jpeg";

export default function HomePage() {
  return (
    <div className="">
      <section className="min-h-screen flex flex-col md:flex-row justify-around items-center gap-10">
        <div className="">
          <h1 className="text-5xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hi, I'm <span className="text-blue-600">Dimas</span>
          </h1>

          <h2 className="text-3xl">
            FullStack Dev, <br />
            Machine Learning Engineer, <br />
            Data Science Enthusiast <br />& AI Enthusiast
          </h2>
        </div>

        <div className="">
          <img src={Dimas} className="h-100 w-100 object-cover rounded-xl" />
        </div>
      </section>

      <div className="flex flex-row-reverse gap-10 px-10">
        <div className="" >
          <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
          <p className="mt-6 text-gray-600">
            About Me I am a Web Developer with around 8 months of experience
            focusing on Frontend Development, and I am currently expanding my
            skills as a Fullstack Developer (now in my second month). <br />
            I have experience building responsive and modern user interfaces using
            React, and I am currently developing backend systems using Django and
            Python to create more integrated applications. <br />
            In addition, I have a strong interest in Data Science and Machine
            Learning. One of the projects I have worked on is building a
            predictive model to detect whether a person is at risk of diabetes.{" "}
            <br />
            For my fullstack experience, I have developed a flower shop website
            with a complete order system, covering both frontend and backend
            development. <br />
            <br />
            <hr />
            <br />
            Tech Stack: <br /> <br />
            Frontend: React, Tailwind CSS <br />
            Backend: Django <br />
            Programming Languages: Python, JavaScript <br />I am continuously
            learning and improving my skills to build efficient, scalable, and
            user-friendly applications.
          </p>
        </div>
        <div className="">
          <img src={DimasCoklat} className="max-w-md rounded-2xl" alt="" />
        </div>
      </div>
    </div>
  );
}
