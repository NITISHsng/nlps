import { Target, Eye, Award, Star, Trophy, Medal } from 'lucide-react';

export default function About() {
  const coreValues = [
    { icon: Target, title: 'Excellence', description: 'Striving for academic and personal excellence in all endeavors' },
    { icon: Star, title: 'Integrity', description: 'Upholding honesty, ethics, and moral principles' },
    { icon: Trophy, title: 'Innovation', description: 'Encouraging creative thinking and modern teaching methods' },
    { icon: Medal, title: 'Inclusivity', description: 'Providing equal opportunities to all students regardless of background' },
  ];

  const achievements = [
    { year: '2023', title: 'Class X Board Results', description: '92% pass rate with 15 students scoring above 80%' },
    { year: '2023', title: 'District Sports Meet', description: 'Won 3 Gold and 5 Silver medals in various events' },
    { year: '2022', title: 'Science Exhibition', description: 'First Prize at Block Level Science Fair' },
    { year: '2022', title: 'Cultural Program', description: 'Best School Award in Independence Day Celebration' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our School</h1>
          <p className="text-xl text-blue-100">Building futures, transforming lives since 2006</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our History</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                NLPS Badigachh High School was established in 2006 with a vision to provide quality education
                to the rural children of Majhiali - XIV area in Chopra, Uttar Dinajpur. What started as a small
                initiative has grown into a comprehensive educational institution serving over 500 students from
                Class V to X.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Managed by the Department of Education, Government of West Bengal, and affiliated to the
                West Bengal Council of Higher Secondary Education (WBCHSE), our school has maintained high
                standards of academic excellence while staying rooted in our community values.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Over the years, we have built a strong reputation for producing well-rounded individuals who
                excel not only in academics but also in sports, cultural activities, and community service.
                Our commitment to rural education has made us a cornerstone of the local community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-900 p-3 rounded-full">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-blue-900 ml-4">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To provide inclusive, quality education that empowers students from rural backgrounds to
                  achieve their full potential, fostering critical thinking, creativity, and strong moral values
                  that prepare them for success in higher education and life.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-900 p-3 rounded-full">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-blue-900 ml-4">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be a leading educational institution in rural West Bengal, recognized for academic
                  excellence, character development, and community impact. We envision creating future leaders
                  who contribute positively to society while staying connected to their roots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                <div className="md:col-span-1 flex items-center justify-center">
                  <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
                    <img
                      src="https://scontent.frdp3-1.fna.fbcdn.net/v/t39.30808-1/475366608_539817862397997_4537408884143690593_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=1d2534&_nc_ohc=fmCyReHilOgQ7kNvwExUEEr&_nc_oc=AdmbPP78b8SlF5z7n7XIior-D73rqmt7XJrVVeuEj9fQ6JFlpLuFvKt2evZDJoONdDUdgFjp1AqChYIS3Y0eeQeg&_nc_zt=24&_nc_ht=scontent.frdp3-1.fna&_nc_gid=NIHbKhi7DeVh7cZt38PXkg&_nc_ss=8&oh=00_Afw_fjDA7-VE2l7VouWpBMML5ZsDRNvghoto-pG28yExsQ&oe=69B262CE"
                      alt="Principal"
                      className="w-44 h-44 rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold mb-4">Principal's Message</h2>
                  <p className="text-blue-100 leading-relaxed mb-4">
                    "It is with great pride and pleasure that I welcome you to NLPS Badigachh High School.
                    Our institution stands as a testament to the transformative power of education in rural
                    communities. Since our establishment in 2006, we have been committed to providing
                    quality education that goes beyond textbooks."
                  </p>
                  <p className="text-blue-100 leading-relaxed mb-4">
                    "We believe that every child deserves the opportunity to discover their potential and
                    pursue their dreams. Our dedicated faculty, modern facilities, and supportive environment
                    create the perfect foundation for holistic development. We focus not just on academic
                    excellence, but also on building character, leadership skills, and social responsibility."
                  </p>
                  <p className="text-blue-100 leading-relaxed">
                    "I invite you to join our school community and be part of our journey towards excellence."
                  </p>
                  <p className="mt-4 font-semibold">- Principal, NLPS Badigachh High School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Core Values</h2>
            <p className="text-gray-600">The principles that guide our educational philosophy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Achievements</h2>
            <p className="text-gray-600">Celebrating excellence and success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-l-4 border-blue-900"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 text-white px-4 py-2 rounded-lg font-bold text-lg">
                    {achievement.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Award className="w-12 h-12 mr-4" />
              <h2 className="text-3xl font-bold">Affiliation Details</h2>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-blue-100 mb-2">Affiliated Board</p>
                  <p className="text-xl font-semibold">West Bengal Council of Higher Secondary Education (WBCHSE)</p>
                </div>
                <div>
                  <p className="text-blue-100 mb-2">School Code</p>
                  <p className="text-xl font-semibold">NLPS-BD-2006</p>
                </div>
                <div>
                  <p className="text-blue-100 mb-2">Medium of Instruction</p>
                  <p className="text-xl font-semibold">Bengali</p>
                </div>
                <div>
                  <p className="text-blue-100 mb-2">School Type</p>
                  <p className="text-xl font-semibold">Co-educational, Rural, Government</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
