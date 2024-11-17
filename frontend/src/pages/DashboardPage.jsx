import React from 'react';
import { FaChalkboardTeacher, FaUniversity, FaAward, FaRegHandPaper, FaRecycle, FaDonate } from 'react-icons/fa';
import { FaAppleAlt } from 'react-icons/fa'; // Importing a different icon for free food
import DashSec1 from '@/components/DashSec1';
import Navbar from '@/components/ui/Navbar';
import AcheivementCard from '@/components/AcheivementCard';
import { useClerk } from '@clerk/clerk-react';
import Footer from '@/components/ui/Footer';
import { Link, NavLink } from 'react-router-dom';

const DashboardPage = () => {
  const { user } = useClerk();
  console.log(user);

  return (
    <div className="bg-gray-900 h-auto w-screen text-gray-200">
      <Navbar />
      <DashSec1 />

      {/* Introduction Section */}
     

      {/* School Affiliation and Ranking */}
      <section className="py-16 px-6 text-center">
  <h3 className="text-3xl font-bold text-white">Affiliation & Ranking</h3>
  <p className="text-lg text-gray-400 mt-4">
    Edu School is affiliated with recognized educational boards and institutions, ensuring world-class academic standards and consistently ranking among the top 100 schools globally.
  </p>
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Affiliation Card */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
      <img
        src="https://cdn.freelogovectors.net/wp-content/uploads/2022/03/cbse-logo_freelogovectors.net_.png"
        alt="CBSE Affiliation"
        className="mx-auto mb-4 rounded-lg w-[200px]"
      />
      <h4 className="text-xl font-semibold text-white">CBSE Affiliation</h4>
      <p className="text-gray-400 mt-2">
        Affiliated with the Central Board of Secondary Education (CBSE), providing a structured and comprehensive curriculum.
      </p>
    </div>
    
    {/* Ranking Card */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNb8pr3HG1nHNm7UoZHAlIVRa5SqJyoCNxw&s"
        alt="Top 100 Ranking"
        className="mx-auto mb-4 rounded-lg"
      />
      <h4 className="text-xl font-semibold text-white">Top 100 Global Schools</h4>
      <p className="text-gray-400 mt-2">
        Ranked among the top 100 schools worldwide for academic excellence and innovative teaching practices.
      </p>
    </div>

    {/* Affiliation Card */}
    
  </div>
</section>


      {/* Academic Excellence */}
      <section className="py-16 px-6 bg-gray-800 text-center">
        <h3 className="text-3xl font-bold text-white animate__animated animate__fadeIn animate__delay-1s">Academic Excellence</h3>
        <p className="text-lg text-gray-400 mt-4 animate__animated animate__fadeIn animate__delay-2s">
          Our school consistently ranks high with a 95% success rate in board exams for the past 3 years.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
            <FaAward className="text-4xl text-yellow-500 mb-4" />
            <h4 className="text-xl font-semibold text-white">Top Performers</h4>
            <p className="text-gray-400 mt-2">Our students regularly top state and national exams.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
            <FaChalkboardTeacher className="text-4xl text-green-500 mb-4" />
            <h4 className="text-xl font-semibold text-white">Expert Faculty</h4>
            <p className="text-gray-400 mt-2">Dedicated educators providing quality, personalized learning experiences.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
            <FaUniversity className="text-4xl text-blue-500 mb-4" />
            <h4 className="text-xl font-semibold text-white">World-Class Infrastructure</h4>
            <p className="text-gray-400 mt-2">Our modern facilities ensure a conducive learning environment.</p>
          </div>
        </div>
      </section>

      {/* School Facilities */}
      <section className="py-16 px-6 bg-gray-700 text-center">
  <h3 className="text-3xl font-bold text-white">State-of-the-Art Facilities</h3>
  <p className="text-lg text-gray-400 mt-4">
    Equipped with top-notch classrooms, labs, libraries, and sports facilities, our school offers a complete education experience.
  </p>
  
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Science Labs */}
    <div className="bg-gray-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
      <img
        src="https://indianschool.bh/images/facilities/science-lab/4.jpg"
        alt="Science Labs"
        className="  rounded-lg mb-4"
      />
      <h4 className="text-xl font-semibold text-white">Science Labs</h4>
      <p className="text-gray-400 mt-4">Well-equipped for hands-on learning and experiments in all science subjects.</p>
    </div>
    
    {/* Library */}
    <div className="bg-gray-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
      <img
        src="https://png.pngtree.com/background/20230425/original/pngtree-kids-at-a-library-at-large-tables-with-large-bookshelves-picture-image_2479222.jpg"
        alt="Library"
        className=" rounded-lg mb-4"
      />
      <h4 className="text-xl font-semibold text-white">Library</h4>
      <p className="text-gray-400 mt-4">A wide collection of books and digital resources to foster knowledge growth.</p>
    </div>
    
    {/* Sports Facilities */}
    <div className="bg-gray-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
      <img
        src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/12/18/634046-sports-ground.jpg"
        alt="Sports Facilities"
        className=" rounded-lg mb-4"
      />
      <h4 className="text-xl font-semibold text-white">Sports Facilities</h4>
      <p className="text-gray-400 mt-4">Providing a variety of outdoor and indoor sports for overall development.</p>
    </div>
    
  </div>
</section>


      {/* Admission Information */}
      <section className="py-16 px-6 bg-gray-800 text-center">
        <h3 className="text-3xl font-bold text-white">Admissions Open</h3>
        <p className="text-lg text-gray-400 mt-4">
          Apply now for the +2 program and be a part of our growing educational community.
        </p>
        <div className="mt-8">
          <Link to="/admission">
            <button className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-800 transition-all duration-300">
              Apply Now
            </button>
          </Link>
        </div>
      </section>

      {/* Charitable Contributions */}
      <section className="py-16 px-6 bg-gray-800 text-center">
        <h3 className="text-3xl font-bold text-white">Charitable Contributions</h3>
        <p className="text-lg text-gray-400 mt-4">
          XYZ School is committed to giving back to society through charitable causes.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-500 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
            <FaRegHandPaper className="text-4xl text-red-600 mb-4" />
            <h4 className="text-xl font-semibold text-white">Community Outreach</h4>
            <p className="text-gray-400 mt-2">Supporting underprivileged children with free education and resources.</p>
          </div>
          <div className="bg-gray-500 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
            <FaRecycle className="text-4xl text-green-400 mb-4" />
            <h4 className="text-xl font-semibold text-white">Eco-Friendly Initiatives</h4>
            <p className="text-gray-400 mt-2">Our school practices sustainability with zero waste and green campus projects.</p>
          </div>

          

<div className="bg-gray-500 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
  <FaAppleAlt className="text-4xl text-yellow-300 mb-4" /> {/* Icon for free food */}
  <h4 className="text-xl font-semibold text-white">Free Food Program</h4>
  <p className="text-gray-200 mt-2">
    Providing nutritious meals to students and the local community, ensuring no one goes hungry.
  </p>
</div>


        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-blue-700 to-blue-900 text-center text-white">
        <h3 className="text-3xl font-bold animate__animated animate__fadeIn animate__delay-1s">Make a Difference: Donate Today</h3>
        <p className="text-lg mt-4 animate__animated animate__fadeIn animate__delay-2s">
          Your contribution can help us continue our charitable and educational efforts.
        </p>
        <div className="mt-8 animate__animated animate__fadeIn animate__delay-3s">
          <Link to="/donation">
            <button className="bg-orange-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-800 transition-all duration-300">
              Donate Now
            </button>
          </Link>
        </div>
      </section>

     <Footer/>
    </div>
  );
};

export default DashboardPage;
