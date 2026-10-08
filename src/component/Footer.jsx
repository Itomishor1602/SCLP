import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[var(--card-bg)] dark:border-slate-700">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">

        {/* Parish Info */}
        <div>
          <h2 className="text-2xl font-bold">
            Great Saint Charles Lwanga
          </h2>

          <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
            Catholic Parish
          </p>

          <p className="mt-4 max-w-sm leading-7 text-gray-600 dark:text-gray-300">
            A place of faith, community, worship, and service.
            Join us as we grow together in Christ.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>

          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="#home"
                className="text-gray-600 transition hover:text-amber-600 dark:text-gray-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-gray-600 transition hover:text-amber-600 dark:text-gray-300"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#pastors"
                className="text-gray-600 transition hover:text-amber-600 dark:text-gray-300"
              >
                Our Pastors
              </a>
            </li>

            <li>
              <a
                href="#map"
                className="text-gray-600 transition hover:text-amber-600 dark:text-gray-300"
              >
                Find Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>

          <div className="mt-4 space-y-4 text-gray-600 dark:text-gray-300">

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 shrink-0 text-amber-600" size={20} />
              <p>Essien Town, Calabar, Cross River State, Nigeria.</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="shrink-0 text-amber-600" size={20} />
              <a
                href="tel:+2348130364244"
                className="hover:text-amber-600"
              >
                +234 813 036 4244
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="shrink-0 text-amber-600" size={20} />
              <a
                href="mailto:parish@example.com"
                className="hover:text-amber-600"
              >
                sclpcalabar@gmail.com
              </a>
            </div>

          </div>




      <div className="mt-6 flex gap-4">
  <a
    href="https://web.facebook.com/people/sclpcalabar/61581628177673/?_rdc=1&_rdr#"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="rounded-full p-3 transition hover:bg-amber-100 hover:text-amber-600 dark:hover:bg-slate-700"
  >
    <FontAwesomeIcon icon={faFacebookF} />
  </a>

  <a
    href="https://www.instagram.com/sclpcalabar/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="rounded-full p-3 transition hover:bg-amber-100 hover:text-amber-600 dark:hover:bg-slate-700"
  >
    <FontAwesomeIcon icon={faInstagram} />
  </a>

  <a
    href="https://www.tiktok.com/@sclpcalabar"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Tiktok"
    className="rounded-full p-3 transition hover:bg-amber-100 hover:text-amber-600 dark:hover:bg-slate-700"
  >
    <FontAwesomeIcon icon={faTiktok} />
  </a>
</div>



        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 px-6 py-6 dark:border-slate-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-gray-500 md:flex-row md:text-left dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} Great Saint Charles Lwanga Catholic
            Parish. All rights reserved.
          </p>

          <p>
            Built with ❤️ for the parish community.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;