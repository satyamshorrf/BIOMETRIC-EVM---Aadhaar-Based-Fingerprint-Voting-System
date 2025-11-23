import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0e0c14] text-gray-300 py-10 mt-10 border-t border-white/10 font-[Inter]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Biometric EVM</h2>
          <p className="text-sm text-gray-400">
            Secure • Scalable • AI-Powered Voting Technology for the Future of
            India.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/project-overview" className="hover:text-white">
                Project Overview
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="/team" className="hover:text-white">
                Team
              </a>
            </li>
            <li>
              <a href="/recognition" className="hover:text-white">
                Recognition
              </a>
            </li>
            <li>
              <a href="/future-development" className="hover:text-white">
                Future Development
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Connect With Us
          </h3>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@biometricevm.in"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

    <div className="mt-10 border-t border-white/10 pt-8 text-center">
  
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_National_Cadet_Corps_%28India%29.png"
    alt="NCC Logo"
    className="mx-auto w-20 mb-4"
  />

  {/* Copyright */}
  <div className="text-gray-400 text-sm">
    © {new Date().getFullYear()} Biometric EVM Project. All Rights Reserved.
  </div>

  {/* Disclaimer */}
  <p className="text-gray-500 text-xs mt-3 max-w-2xl mx-auto">
    ⚠️ <strong>Disclaimer:</strong> This project uses UIDAI and Election Commission of India website ideas purely for educational and idea-innovation purposes only. It is a student prototype project under 17 Bihar Battalion NCC, Saharsa, officially developed by a cadet from T.P. College, Madhepura. This project is not affiliated with UIDAI or the Election Commission of India in any official capacity.
  </p>
</div>

    </footer>
  );
}
