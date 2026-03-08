import { Users, Award, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Faculty() {
  const [teachers, setTeachers] = useState<any[]>([]);

  useEffect(() => {
    async function loadTeachers() {
      const { data, error } = await supabase
        .from('faculty')
        .select('*')
        .eq('is_archived', false)
        .order('created_at', { ascending: true });
        
      if (data) {
        setTeachers(data);
      }
      
      if (error) {
        console.error(error);
      }
    }
    loadTeachers();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
          <p className="text-xl text-blue-100">Experienced and Dedicated Educators</p>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Meet Our Teaching Team
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our faculty comprises 23 dedicated teachers (17 Male, 6 Female) who bring extensive experience,
              expertise, and passion to the classroom. Each member is committed to nurturing young minds and
              fostering a love for learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-1">23</div>
              <div className="text-gray-600">Total Teachers</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-1">12+</div>
              <div className="text-gray-600">Avg. Experience</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-1">100%</div>
              <div className="text-gray-600">Qualified Teachers</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Faculty Members</h2>
            <p className="text-gray-600">Get to know some of our distinguished educators</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {teachers.length > 0 ? teachers.map((teacher, index) => (
              <div
                key={teacher.id || index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-6">
                    {teacher.image ? (
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-4 border-blue-900"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-blue-100 border-4 border-blue-900 flex items-center justify-center flex-shrink-0">
                        <Users className="w-10 h-10 text-blue-900"/>
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                      <p className="text-blue-900 font-semibold mb-2">{teacher.subject}</p>
                      <p className="text-sm text-gray-600">{teacher.qualification}</p>
                    </div>
                  </div>

                  <div className={`mt-6 grid gap-4 ${(teacher.experience || teacher.joining) ? 'grid-cols-2' : ''}`}>
                    {teacher.experience && (
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Experience</p>
                        <p className="font-semibold text-gray-900">{teacher.experience}</p>
                      </div>
                    )}
                    {teacher.joining && (
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Joined</p>
                        <p className="font-semibold text-gray-900">{teacher.joining}</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    {teacher.achievements && (
                      <div className="bg-blue-900 text-white p-3 rounded-lg mb-3">
                        <p className="text-xs text-blue-100 mb-1">Achievements</p>
                        <p className="text-sm font-medium">{teacher.achievements}</p>
                      </div>
                    )}
                    <p className="text-gray-700 leading-relaxed">{teacher.bio}</p>
                  </div>
                </div>
              </div>
            )) : <p className="text-center text-gray-500 col-span-2">No faculty members to display.</p>}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Teaching Philosophy</h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              At NLPS Badigachh High School, our teachers believe in student-centered learning that goes beyond
              traditional textbook education. We focus on developing critical thinking, creativity, and practical
              skills while maintaining strong academic standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Personalized Attention</h3>
                <p className="text-blue-100">Individual focus on each student's unique learning needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Modern Methods</h3>
                <p className="text-blue-100">Innovative teaching techniques and technology integration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Holistic Development</h3>
                <p className="text-blue-100">Focus on academics, sports, and character building</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Faculty Development</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our school is committed to continuous professional development of our teaching staff. Regular training
              workshops, seminars, and educational conferences ensure that our teachers stay updated with the latest
              teaching methodologies and educational practices.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 mt-2"></span>
                <span>Regular in-service training programs and workshops</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 mt-2"></span>
                <span>Participation in state and national level educational seminars</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 mt-2"></span>
                <span>Collaboration with other educational institutions for knowledge sharing</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 mt-2"></span>
                <span>Mentorship programs for new teachers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
