import { MapPin, Phone, Mail, Facebook, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NLPS Badigachh High School</h3>
            <p className="text-blue-100 leading-relaxed mb-4">
              Empowering rural education since 2006. Affiliated to WBCHSE, providing quality education from Class V to XII.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-blue-100 hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="text-blue-100 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/faculty" className="text-blue-100 hover:text-white transition-colors">Faculty</Link></li>
              <li><Link to="/notices" className="text-blue-100 hover:text-white transition-colors">Notice Board</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-blue-100">
                  Majhiali - XIV, Chopra<br />
                  Uttar Dinajpur, West Bengal<br />
                  PIN: 733207
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p className="text-blue-100">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p className="text-blue-100">nlpsbadigachh@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-6 text-center">
          <p className="text-blue-100">
            &copy; {new Date().getFullYear()} NLPS Badigachh High School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
