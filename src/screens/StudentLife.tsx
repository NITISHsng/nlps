import { Trophy, Music, Palette, Users, Heart, Utensils, BookOpen, Award } from 'lucide-react';

export default function StudentLife() {
  const activities = [
    {
      icon: Trophy,
      title: 'Sports & Athletics',
      description: 'Cricket, Football, Kabaddi, Athletics, and more. Regular practice sessions and inter-school competitions.',
      highlights: ['Annual Sports Day', 'District Level Competitions', 'Physical Education Classes'],
    },
    {
      icon: Music,
      title: 'Cultural Activities',
      description: 'Music, dance, drama, and cultural programs celebrating various festivals and national days.',
      highlights: ['Annual Cultural Function', 'Independence Day Programs', 'Saraswati Puja Celebrations'],
    },
    {
      icon: Palette,
      title: 'Arts & Crafts',
      description: 'Drawing, painting, handicrafts, and creative expression through various art forms.',
      highlights: ['Art Competitions', 'Exhibition Events', 'Creative Workshops'],
    },
    {
      icon: BookOpen,
      title: 'Library & Reading',
      description: 'Well-stocked library with 612 books encouraging reading habits and knowledge expansion.',
      highlights: ['Reading Sessions', 'Book Week', 'Quiz Competitions'],
    },
    {
      icon: Users,
      title: 'Clubs & Societies',
      description: 'Science Club, Literary Club, Environment Club fostering special interests and skills.',
      highlights: ['Science Exhibition', 'Debate Competitions', 'Nature Walks'],
    },
    {
      icon: Heart,
      title: 'Community Service',
      description: 'Social awareness programs, cleanliness drives, and community outreach activities.',
      highlights: ['Swachh Bharat Abhiyan', 'Tree Plantation', 'Health Awareness Camps'],
    },
  ];

  const events = [
    { name: 'Independence Day', date: 'August 15', description: 'Flag hoisting, cultural programs, and patriotic activities' },
    { name: 'Republic Day', date: 'January 26', description: 'Parade, speeches, and celebration of Indian constitution' },
    { name: 'Saraswati Puja', date: 'February', description: 'Traditional worship of Goddess of Learning with cultural programs' },
    { name: 'Annual Sports Day', date: 'December', description: 'Track and field events, team games, and prize distribution' },
    { name: 'Annual Function', date: 'January', description: 'Cultural performances, awards, and achievements celebration' },
    { name: 'Science Exhibition', date: 'November', description: 'Student projects, experiments, and scientific demonstrations' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Life</h1>
          <p className="text-xl text-blue-100">Beyond Academics - Holistic Development</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Vibrant Campus Life
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              At NLPS Badigachh High School, we believe in nurturing well-rounded individuals. Our diverse
              co-curricular activities provide students with opportunities to explore their interests, develop
              new skills, and build lasting friendships in a supportive environment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Activities & Programs</h2>
            <p className="text-gray-600">Explore the wide range of opportunities available to our students</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6"
              >
                <div className="bg-blue-900 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <activity.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p>
                  <ul className="space-y-1">
                    {activity.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-8">
              <Utensils className="w-12 h-12 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">Mid-Day Meal Program</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Our school provides nutritious mid-day meals to all students as part of the government's
                  Mid-Day Meal Scheme. This program ensures that every child receives proper nutrition,
                  which is essential for their growth, health, and ability to concentrate in class.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  The meals are prepared with care, following hygiene standards, and include a balanced
                  combination of proteins, carbohydrates, and vegetables.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2"></span>
                    <span>Improved nutrition and health</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2"></span>
                    <span>Better concentration in classes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2"></span>
                    <span>Increased school attendance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2"></span>
                    <span>Equal opportunities for all students</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Annual Events</h2>
            <p className="text-gray-600">Celebrating learning, culture, and achievement throughout the year</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-l-4 border-blue-900"
              >
                <div className="flex items-center mb-3">
                  <Award className="w-6 h-6 text-blue-900 mr-2" />
                  <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {event.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.name}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
              Student Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <Trophy className="w-8 h-8 text-blue-900 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Sports Excellence</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• 3 Gold medals in District Sports Meet 2023</li>
                  <li>• 5 Silver medals in various athletic events</li>
                  <li>• Best School Award in Football Tournament</li>
                  <li>• State-level Kabaddi participation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <Award className="w-8 h-8 text-blue-900 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Academic & Cultural</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• First Prize at Block Level Science Exhibition</li>
                  <li>• Best Cultural Program Award 2023</li>
                  <li>• District Level Debate Competition Winners</li>
                  <li>• Multiple Essay Writing Competition Awards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 text-center">Join Our Vibrant Community</h2>
            <p className="text-blue-100 text-center leading-relaxed mb-6">
              Experience a well-rounded education that prepares you for success in academics, sports, arts,
              and life. Our supportive environment nurtures talent, builds confidence, and creates lasting
              memories.
            </p>
            <div className="text-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105">
                Learn More About Admissions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
