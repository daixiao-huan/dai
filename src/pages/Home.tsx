import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CourseCategories from '../components/CourseCategories';
import FeaturedCourses from '../components/FeaturedCourses';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <CourseCategories />
        <FeaturedCourses />
      </main>
      <Footer />
    </div>
  );
}