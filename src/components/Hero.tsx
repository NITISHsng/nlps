import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
<div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
  <div className="absolute inset-0 bg-[url('/nlps.jpeg')] bg-cover bg-center opacity-60"></div>

      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in tracking-tight font-sans drop-shadow-md">
            NLPS Badigachh High School
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-amber-200 font-medium tracking-wide">
            Empowering Rural Education Since 2006
          </p>
          <p className="text-lg mb-8 text-amber-100/90 font-light italic">
            Affiliated to West Bengal Board of Secondary Education
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/admissions"
              className="bg-white text-[#0b2545] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <span>Admissions Open</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0b2545] transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}
