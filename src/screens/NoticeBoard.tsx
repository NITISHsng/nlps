"use client";
import { useEffect, useState } from 'react';
import { Calendar, FileText, Download, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Notice {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  pdf_url?: string;
}

export default function NoticeBoard() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices();
  }, [selectedCategory]);

  async function fetchNotices() {
    setLoading(true);
    let query = supabase
      .from('notices')
      .select('*')
      .eq('is_active', true)
      .order('date', { ascending: false });

    if (selectedCategory !== 'All') {
      query = query.eq('category', selectedCategory);
    }

    const { data } = await query;
    if (data) {
      setNotices(data);
    }
    setLoading(false);
  }

  const categories = ['All', 'Admission', 'Exam', 'Holiday', 'Result', 'Event', 'General'];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Admission: 'bg-green-100 text-green-900',
      Exam: 'bg-blue-100 text-blue-900',
      Holiday: 'bg-purple-100 text-purple-900',
      Result: 'bg-orange-100 text-orange-900',
      Event: 'bg-pink-100 text-pink-900',
      General: 'bg-gray-100 text-gray-900',
    };
    return colors[category] || 'bg-gray-100 text-gray-900';
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notice Board</h1>
          <p className="text-xl text-blue-100">Stay Updated with Latest School Announcements</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block">
                  <div className="w-8 h-8 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
            ) : notices.length === 0 ? (
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 text-center">
                <AlertCircle className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <p className="text-gray-700">No notices available in this category.</p>
              </div>
            ) : (
              <div className="space-y-6 max-w-4xl mx-auto">
                {notices.map((notice) => (
                  <div
                    key={notice.id}
                    className="bg-white border-l-4 border-blue-900 rounded-lg shadow-md hover:shadow-lg transition-all p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(notice.category)}`}>
                          {notice.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(notice.date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{notice.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{notice.description}</p>

                    {notice.pdf_url && (
                      <a
                        href={notice.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-all transform hover:scale-105"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-start space-x-4">
              <FileText className="w-12 h-12 text-blue-900 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-3">How to Use the Notice Board</h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 mt-2"></span>
                    <span>Browse notices by category using the filters above</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 mt-2"></span>
                    <span>Click on any notice to read the full details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 mt-2"></span>
                    <span>Download PDF files for official documents and forms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 mt-2"></span>
                    <span>Check regularly for important announcements and updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
