import { BookOpen, Calendar, Download, AlertCircle, Trophy, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Academics() {
  const [facilities, setFacilities] = useState<any[]>([]);
  const [topStudents, setTopStudents] = useState<{ year: number; students: any[] }[]>([]);

  useEffect(() => {
    async function loadData() {
      // Load facilities
      const { data: fData } = await supabase.from('facilities').select('*').eq('is_archived', false);
      if (fData) setFacilities(fData);

      // Load top students and group by year
      const { data: sData } = await supabase.from('top_students').select('*').order('year', { ascending: false }).order('percentage', { ascending: false });
      if (sData) {
        const grouped = sData.reduce((acc: any, student: any) => {
          const yearGroup = acc.find((g: any) => g.year === student.year);
          if (yearGroup) {
            yearGroup.students.push(student);
          } else {
            acc.push({ year: student.year, students: [student] });
          }
          return acc;
        }, []);
        setTopStudents(grouped);
      }
    }
    loadData();
  }, []);
  const classes = [
    {
      level: 'Classes V - VIII',
      description: 'Foundation years focusing on core subjects and holistic development',
      subjects: ['Bengali', 'English', 'Mathematics', 'Science', 'Social Studies', 'Physical Education'],
    },
    {
      level: 'Classes IX - X',
      description: 'Secondary education preparing for Madhyamik examination',
      subjects: ['Bengali', 'English', 'Mathematics', 'Physical Science', 'Life Science', 'History', 'Geography'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl text-blue-100">Excellence in Education - State Board Curriculum</p>
        </div>
      </div>

      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3">
            <div className="bg-amber-200 text-amber-900 rounded-md p-2">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-amber-900">Important Update</p>
              <p className="text-amber-800">Classes offered: V – X only. Science stream is currently not available.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Curriculum</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Following the West Bengal Board of Secondary Education (WBBSE) and West Bengal Council of
              Higher Secondary Education (WBCHSE) curriculum for comprehensive academic development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {classes.map((classInfo, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-blue-900"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{classInfo.level}</h3>
                <p className="text-gray-600 mb-4">{classInfo.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-700 mb-2">Core Subjects:</p>
                  <ul className="space-y-1">
                    {classInfo.subjects.map((subject, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Top Students</h2>
            <p className="text-gray-600">Celebrating academic excellence and achievements</p>
          </div>
          <div className="space-y-10 max-w-6xl mx-auto">
            {topStudents.map((batch, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                      <Trophy className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Year {batch.year}</h3>
                  </div>
                  <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">Top 5</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {batch.students.map((s, sIdx) => (
                    <div key={sIdx} className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm overflow-hidden">
                      <img src={s.image} alt={s.name} className="w-full h-32 object-cover" />
                      <div className="p-4">
                        <h4 className="font-bold text-gray-900">{s.name}</h4>
                        <p className="text-sm text-gray-600">{s.details}</p>
                        <div className="mt-2">
                          <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded">{s.percentage}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Academic Facilities</h2>
            <p className="text-gray-600">Modern infrastructure supporting quality education</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {facilities.length > 0 ? facilities.map((facility) => (
              <div
                key={facility.id}
                className="flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-blue-50"
              >
                {facility.image_url ? (
                  <img src={facility.image_url} alt={facility.name} className="w-16 h-16 object-cover rounded-lg flex-shrink-0 shadow-sm" />
                ) : (
                  <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            )) : <p className="text-center text-gray-500 col-span-2">No facilities currently registered.</p>}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <BookOpen className="w-12 h-12 mr-4" />
              <h2 className="text-3xl font-bold">Examination System</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Regular Assessments</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Unit Tests (Monthly)</li>
                  <li>• Half-Yearly Examinations</li>
                  <li>• Annual Examinations</li>
                  <li>• Practical Examinations</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Board Examinations</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Madhyamik (Class X)</li>
                  <li>• Higher Secondary (Class XII)</li>
                  <li>• Theory & Practical Papers</li>
                  <li>• Project Work Evaluation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Calendar className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Academic Calendar</h2>
              <p className="text-gray-600 mb-6">
                Download our academic calendar to stay updated with important dates, examination schedules,
                holidays, and school events throughout the year.
              </p>
              <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto">
                <Download className="w-5 h-5" />
                <span>Download Academic Calendar</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Academic Excellence</h2>
            <p className="text-blue-100 leading-relaxed">
              Our academic program is designed to foster critical thinking, creativity, and comprehensive
              understanding of subjects. We maintain a student-centered approach with regular parent-teacher
              meetings, personalized attention, and continuous assessment to ensure every student reaches
              their full potential. Our experienced faculty members use innovative teaching methods to make
              learning engaging and effective.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
