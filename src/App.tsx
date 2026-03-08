import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import StudentLife from './pages/StudentLife';
import Gallery from './pages/Gallery';
import NoticeBoard from './pages/NoticeBoard';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Facilities from './pages/Facilities';
import SocialSidebar from './components/SocialSidebar';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <SocialSidebar />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/notices" element={<NoticeBoard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/facilities" element={<Facilities />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
