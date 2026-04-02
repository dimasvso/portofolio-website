import ConnectCoffee from "../assets/ConnectCoffee.png";
import TokoBunga from "../assets/Bungaku.png";
import ConnectCompro from "../assets/ConnectCompro.png";
import Certificate1 from "../assets/Dicoding-Frond End.png";
import Certificate2 from "../assets/Dicoding-JS.png";
import Certificate3 from "../assets/DicodingPython.png";
import Certificate4 from "../assets/DQLAB-DPB-Python.png";
import Certificate5 from "../assets/K3.png";
import Certificate6 from "../assets/ML-KMeans.png";
import Certificate7 from "../assets/MySkillFrontendjs.png";

export default function Portofolio() {
  const projects = [
    {
      title: "ConnectCoffee",
      desc: "Web application with a smart order system for coffee shops.",
      image: ConnectCoffee,
    },
    {
      title: "Toko Bunga",
      desc: "E-commerce for flower shops with catalog and online payment features.",
      image: TokoBunga,
    },
    {
      title: "Company Profile",
      desc: "The company profile website is modern and responsive.",
      image: ConnectCompro,
    },
  ];

  const certificates = [
    {
      image: Certificate1,
    },
    {
      image: Certificate2,
    },
    {
      image: Certificate3,
    },
    {
      image: Certificate4,
    },
    {
      image: Certificate5,
    },
    {
      image: Certificate6,
    },
    {
      image: Certificate7,
    },
  ];

  return (
    <>
      <div className="mt-20 max-w-7xl mx-auto px-4 py-16">
        <div className="text-left">
          <h1 className="text-3xl font-bold text-gray-800">My Portfolio</h1>
          <p className="mt-3 text-gray-600">Some projects I have worked on</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h2>
                <p className="mt-2 text-gray-600">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 max-w-7xl mx-auto px-4 py-16">
        <div className="text-left">
          <h1 className="text-3xl font-bold text-gray-800">My Certificate</h1>
          <p className="mt-3 text-gray-600">
            Some certificates I have obtained
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certi, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <img
                src={certi.image}
                alt={certi.title}
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
