"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Users, BookOpen, Computer, Calendar, CheckCircle, Utensils } from 'lucide-react';
import Hero from '../components/Hero';
import { supabase } from '../lib/supabase';

interface Notice {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

export default function Home() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [facilities, setFacilities] = useState<any[]>([]);
  const [gallery, setGallery] = useState<any[]>([]);

  useEffect(() => {
    async function loadHomeData() {
      // Load notices
      const { data: nData } = await supabase.from('notices').select('*').eq('is_active', true).order('date', { ascending: false }).limit(3);
      if (nData) setNotices(nData);

      // Load admissions
      const { data: aData } = await supabase.from('admissions_settings').select('is_open').limit(1).single();
      if (aData) setAdmissionsOpen(aData.is_open);

      // Load facilities preview
      const { data: fData } = await supabase.from('facilities').select('*').eq('is_archived', false).limit(4);
      if (fData) setFacilities(fData);

      // Load gallery preview
      const { data: gData } = await supabase.from('gallery_items').select('*').order('created_at', { ascending: false }).limit(4);
      if (gData) setGallery(gData);
    }
    loadHomeData();
  }, []);

  const quickFacts = [
    { icon: Calendar, label: 'Established', value: '2006' },
    { icon: Users, label: 'Teachers', value: '23' },
    { icon: BookOpen, label: 'Library Books', value: '612' },
    { icon: Computer, label: 'Computers', value: '4' },
  ];

  const whyChooseUs = [
    'Government Managed School',
    'WBBSE Affiliated',
    'Experienced Faculty',
    'Computer Aided Learning',
    'Well-Equipped Library',
    'Sports & Cultural Activities',
    'Mid-Day Meal Facility',
    'Safe Rural Environment',
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Welcome to NLPS Badigachh High School
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Located in the rural heartland of Uttar Dinajpur, our school has been a beacon of quality education since 2006.
              We provide comprehensive education from Class V to X, fostering academic excellence and holistic development
              in a nurturing environment. Our commitment to rural education has transformed countless lives, preparing students
              for success in higher education and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center transform hover:scale-105 transition-all shadow-md hover:shadow-lg"
              >
                <div className="bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <fact.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-1">{fact.value}</div>
                <div className="text-sm text-gray-700 font-medium">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Latest Notices</h2>
            <p className="text-gray-600">Stay updated with our latest announcements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 border-t-4 border-blue-900"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {notice.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(notice.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{notice.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{notice.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/notices"
              className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all transform hover:scale-105"
            >
              View All Notices
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Facilities</h2>
            <p className="text-gray-600">Excellence in education with comprehensive facilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {facilities.length > 0 ? facilities.map((facility) => (
              <div
                key={facility.id}
                className="flex flex-col items-center text-center bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg hover:shadow-lg transition-all border border-blue-100"
              >
                {facility.image_url ? (
                  <img src={facility.image_url} alt={facility.name} className="w-16 h-16 object-cover rounded-full mb-4 border-2 border-blue-200" />
                ) : (
                  <CheckCircle className="w-12 h-12 text-blue-900 mb-4" />
                )}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{facility.description}</p>
              </div>
            )) : whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg hover:shadow-md transition-all"
              >
                <CheckCircle className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                <span className="text-gray-800 font-medium">{reason}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/facilities" className="inline-block border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-all transform hover:scale-105">View All Facilities</Link>
          </div>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Gallery Snapshot</h2>
              <p className="text-gray-600">Glimpses of life at NLPS</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {gallery.map(item => (
                <div key={item.id} className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow relative group">
                  <img src={item.file_url.startsWith('http') ? item.file_url : `https://xbxxtqavxhjcymeefjzk.supabase.co/storage/v1/object/public/gallery/${item.file_url}`} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/gallery" className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all transform hover:scale-105">View Full Gallery</Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white p-4 rounded-full">
                <Utensils className="w-12 h-12 text-blue-900" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-3">Mid-Day Meal Facility</h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  We provide nutritious mid-day meals to all our students, ensuring they receive proper
                  nutrition for better learning and development. This government-supported program helps
                  improve attendance and concentration in classes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              {admissionsOpen 
                ? "Take the first step towards a bright future. Admissions are now OPEN for all classes!" 
                : "Admissions are currently closed, but you can always reach out with inquiries for the upcoming semester."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {admissionsOpen && (
                <Link
                  href="/admissions"
                  className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  Apply Now
                </Link>
              )}
              <Link
                href="/contact"
                className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-all transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
