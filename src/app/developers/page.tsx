'use client';
import React from 'react';
import { GraduationCap, Code, ExternalLink, Linkedin, Github, Mail } from 'lucide-react';

const developers = [
  {
    name: 'Jatindra',
    role: 'Advisor',
    image: 'https://media-hyd1-1.cdn.whatsapp.net/v/t61.24694-24/558670475_1344358647430274_6579441583191053737_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4AHxrrmp_vHH7yGdrkdiWAEL_XsH5hVIenAOnepLfTj-yg&oe=69B9BB30&_nc_sid=5e03e0&_nc_cat=106', 
    description: 'Geography teacher at NLPS Badigachh High School, guiding and supporting the project.',
    icon: GraduationCap,
    color: 'bg-blue-600',
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    textColor: 'text-blue-600',
    links: {
      portfolio: '#',
      linkedin: '#',
      github: '#',
      mail: '#'
    }
  },
  {
    name: 'Arka Roy',
    role: 'Co-Adviser',
    image: 'https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/509590726_24077066515259522_9158423406660640848_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=53a332&_nc_ohc=2Jp6me-MQ44Q7kNvwEL2yKi&_nc_oc=AdkunNF5lGGBQkrHPySxiKvvWUtD-JXd_J3W_fC-XY30NMu_N5IiDcY8MhXBeCc0PCk&_nc_zt=23&_nc_ht=scontent.fdel29-1.fna&_nc_gid=LbQtbXqRZUGl4-RPUgJXyg&_nc_ss=8&oh=00_AfwwzsQ1YBXWJPcdfwRZi4elWufs6Wu1s0h7U1coKsDh3w&oe=69B7FF59',
    description: 'Life Science teacher at NLPS Badigachh High School, supporting the project development.',
    icon: GraduationCap,
    color: 'bg-emerald-600',
    lightColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    textColor: 'text-emerald-600',
    links: {
      portfolio: '#',
      linkedin: '#',
      github: '#',
      mail: '#'
    }
  },
  {
    name: 'Nitish Chandra Singha',
    role: 'Developer',
    image: 'https://devnitishx.vercel.app/image.png',
    description: 'Former student of NLPS Badigachh High School and a top 5 academic performer.',
    icon: Code,
    color: 'bg-orange-600',
    lightColor: 'bg-orange-50',
    borderColor: 'border-orange-100',
    textColor: 'text-orange-600',
    links: {
      portfolio: 'https://devnitishx.vercel.app',
      linkedin: 'https://www.linkedin.com/in/n1715h?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github: 'https://github.com/NITISHsng',
      mail: 'mailto:singhanitish829@gmail.com?subject=Hello%20Nitish'
    }
  },
];

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase transition-all duration-300 bg-neutral-100 text-neutral-600 rounded-full">
            Our Team
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 tracking-tight">
            Meet Our <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">Creators</span>
          </h1>
          <p className="text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed">
            The dedicated team behind the NLPS Badigachh project, working together to bring quality education and modern technology to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {developers.map((dev, index) => (
            <div 
              key={dev.name} 
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-[2rem] border-2 border-neutral-100 p-8 h-full flex flex-col items-center text-center transition-all duration-500 hover:border-neutral-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
                
                {/* Decorative Background Blob */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full ${dev.lightColor} opacity-50 group-hover:scale-110 transition-transform duration-700`} />

                {/* Profile Image Section */}
                <div className="relative mb-8">
                  <div className={`absolute -inset-2 bg-gradient-to-br from-neutral-100 to-transparent rounded-full opacity-50`} />
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(dev.name)}&background=random&size=256&color=fff&bold=true`;
                      }}
                    />
                  </div>
                  {/* Icon Badge */}
                  <div className={`absolute bottom-0 right-0 p-2.5 rounded-2xl ${dev.color} text-white shadow-lg shadow-current/20 scale-90 group-hover:scale-100 transition-transform duration-500`}>
                    <dev.icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Role Badge */}
                <div className={`inline-flex items-center px-4 py-1.5 rounded-xl text-sm font-bold tracking-tight mb-4 ${dev.lightColor} ${dev.textColor} border ${dev.borderColor}`}>
                  {dev.role}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {dev.name}
                </h3>
                
                <p className="text-neutral-500 leading-relaxed mb-8 flex-grow">
                  {dev.description}
                </p>

                {/* Footer/Links */}
                <div className="w-full pt-6 border-t border-neutral-100 grid grid-cols-2 gap-3">
                  <a 
                    href={dev.links.portfolio} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-neutral-900 text-white font-bold text-sm hover:bg-blue-600 transition-all duration-300"
                  >
                    Meet me
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="flex items-center justify-between px-2">
                    <a 
                      href={dev.links.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl text-neutral-400 hover:text-blue-600 hover:bg-neutral-50 transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={dev.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl text-neutral-400 hover:text-blue-600 hover:bg-neutral-50 transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={dev.links.mail} 
                      className="p-2.5 rounded-xl text-neutral-400 hover:text-blue-600 hover:bg-neutral-50 transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
