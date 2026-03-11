"use client";
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Facilities() {
  const [facilities, setFacilities] = useState<any[]>([]);

  useEffect(() => {
    async function loadFacilities() {
      const { data: fData } = await supabase.from('facilities').select('*').eq('is_archived', false);
      if (fData) setFacilities(fData);
    }
    loadFacilities();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Facilities</h1>
          <p className="text-xl text-blue-100">State-of-the-Art Infrastructure for Quality Education</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.length > 0 ? (
              facilities.map((facility) => (
                <div
                  key={facility.id}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-blue-50"
                >
                  <div className="h-48 bg-blue-100 relative">
                    {facility.image_url ? (
                      <img
                        src={facility.image_url}
                        alt={facility.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-blue-900/10">
                        <CheckCircle className="w-16 h-16 text-blue-900" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{facility.name}</h3>
                    <p className="text-gray-600 leading-relaxed min-h-[4rem]">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3 py-12">
                No facilities currently registered.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
