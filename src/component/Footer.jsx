import { Link } from "react-router-dom";
import CtaContact from "./CtaContact";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="text-lg font-semibold text-gray-800">
              Dimas Portofolio Web
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for visiting my portfolio. I’m a Fullstack Developer
              focused on building responsive and user-friendly web applications.
              Feel free to reach out via email or social media if you’d like to
              collaborate or have any questions.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-800 mb-3">
              Navigation
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-500 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-blue-500 transition"
                >
                  Portofolio
                </Link>
              </li>
              <li>
               <CtaContact />
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-800 mb-3">
              Contact
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: susilodim@gmail.com</li>
              <li>Phone: +62 819-5917-6199</li>
              <li>Location: Bogor,Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Muhammad Dimas Susilo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
