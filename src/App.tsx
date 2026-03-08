import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Academics = React.lazy(() => import('./pages/Academics'));
const Admissions = React.lazy(() => import('./pages/Admissions'));
const Faculty = React.lazy(() => import('./pages/Faculty'));
const StudentLife = React.lazy(() => import('./pages/StudentLife'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const NoticeBoard = React.lazy(() => import('./pages/NoticeBoard'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Admin = React.lazy(() => import('./pages/Admin'));
const Facilities = React.lazy(() => import('./pages/Facilities'));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <SocialSidebar />
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div></div>}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
