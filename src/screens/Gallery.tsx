"use client";
import { Image as ImageIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface GalleryItem {
  id: string;
  category: string;
  title: string;
  file_url: string;
}

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      const { data, error } = await supabase.from('gallery_items').select('*').order('created_at', { ascending: false });
      if (data) {
        setGalleryItems(data);
      } else if (error) {
        console.error('Error fetching gallery:', error.message);
      }
      setLoading(false);
    }
    fetchGallery();
  }, []);

  const categories = ['All', 'Campus View', 'Classroom Activities', 'Sports Day', 'Cultural Programs', 'Independence Day', 'Science Exhibition', 'Other'];
  
  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-blue-100">Capturing Moments of Excellence and Joy</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Life at NLPS Badigachh
            </h2>
            <p className="text-gray-600 mb-8">
              A glimpse into our vibrant campus and memorable moments
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 ${activeCategory === category ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
             <div className="flex justify-center items-center py-20">
               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
             </div>
          ) : filteredItems.length === 0 ? (
             <div className="text-center py-20 text-gray-500">
               <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
               <p className="text-xl">No photos available for this category yet.</p>
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all bg-gray-100"
                >
                  <img
                    src={item.file_url}
                    alt={item.title || 'Gallery Image'}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <p className="text-blue-200 text-sm font-semibold mb-1">{item.category}</p>
                    <h3 className="text-white font-bold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg text-center">
            <ImageIcon className="w-16 h-16 text-blue-900 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-blue-900 mb-4">More Photos Coming Soon!</h2>
            <p className="text-gray-700 leading-relaxed">
              We regularly update our gallery with new photos from school events, activities, and achievements.
              Follow us on social media to stay updated with the latest updates from our school community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
