import { Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
const galleryItems = [
  {
    id: 1,
    category: 'Campus View',
    title: 'School Building Facade',
    image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    category: 'Campus View',
    title: 'Playground Area',
    image: 'https://images.pexels.com/photos/1143503/pexels-photo-1143503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    category: 'Classroom Activities',
    title: 'Interactive Learning Session',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    category: 'Classroom Activities',
    title: 'Computer Lab Class',
    image: 'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 5,
    category: 'Sports Day',
    title: 'Track and Field Events',
    image: 'https://images.pexels.com/photos/163444/sport-treadmill-track-race-163444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 6,
    category: 'Sports Day',
    title: 'Team Sports Competition',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 7,
    category: 'Cultural Programs',
    title: 'Dance Performance',
    image: 'https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 8,
    category: 'Cultural Programs',
    title: 'Music Performance on Stage',
    image: 'https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 9,
    category: 'Independence Day',
    title: 'Flag Hoisting Ceremony',
    image: 'https://images.pexels.com/photos/11059437/pexels-photo-11059437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 10,
    category: 'Independence Day',
    title: 'Patriotic Assembly',
    image: 'https://images.pexels.com/photos/7713346/pexels-photo-7713346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 11,
    category: 'Science Exhibition',
    title: 'Student Science Projects',
    image: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 12,
    category: 'Science Exhibition',
    title: 'Interactive Experiments',
    image: 'https://images.pexels.com/photos/7191994/pexels-photo-7191994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];
  const categories = ['All', 'Campus View', 'Classroom Activities', 'Sports Day', 'Cultural Programs', 'Independence Day', 'Science Exhibition'];

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
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
                  defaultChecked={category === 'All'}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all bg-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <p className="text-blue-200 text-sm font-semibold mb-1">{item.category}</p>
                  <h3 className="text-white font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
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
