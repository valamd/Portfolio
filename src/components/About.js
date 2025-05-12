import { useState, useEffect } from 'react';
import { Download, UserCircle, Briefcase, Award, Book, Clock } from 'lucide-react';
import a from '../photo/a.jpg';

export default function About() {
  const [activeTab, setActiveTab] = useState('about');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  const tabs = [
    { id: 'about', label: 'About', icon: <UserCircle className="w-5 h-5" /> }
  ];
  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="space-y-4 text-gray-600">
            <p>
              Hello! I'm <span className="font-semibold">Manish</span>, a passionate <span className="font-semibold">Computer Engineer</span> with a strong foundation in both software development and system fundamentals.
              During my engineering journey, I have built a variety of projects including <span className="font-semibold">MERN stack applications, Django web apps, and Dart-based mobile applications</span>.
            </p>
            <p>
              I enjoy bringing ideas to life through clean, scalable code and love exploring new technologies.
            </p>
            <p>
              I have hands-on experience working with databases like <span className="font-semibold">MongoDB, MySQL, and SQL Server Management Studio</span>.
              My academic background also includes solid knowledge of <span className="font-semibold">Computer Networks, OS, Web Services, DBMS, Springboot, and ML</span>.
              I'm always eager to learn and contribute to innovative projects that solve real-world problems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="bg-indigo-50 px-4 py-2 rounded-full text-indigo-600 font-medium">React</div>
              <div className="bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-medium">MongoDB</div>
              <div className="bg-green-50 px-4 py-2 rounded-full text-green-600 font-medium">Node.js</div>
              <div className="bg-red-50 px-4 py-2 rounded-full text-red-600 font-medium">Django</div>
              <div className="bg-purple-50 px-4 py-2 rounded-full text-purple-600 font-medium">Tailwind CSS</div>
              <div className="bg-yellow-50 px-4 py-2 rounded-full text-yellow-600 font-medium">JavaScript</div>
            </div>
            <div className="mt-12 text-center lg:text-left">
              <a
                href="/MyResume.pdf"
                download
                className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about-section" className="pt-20 pb-16 bg-white">
      <br></br>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Image Column */}
            <div className="lg:w-2/5">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-20 transform -rotate-6"></div>
                <img
                  src={a}
                  alt="Profile"
                  className="relative rounded-3xl w-full h-auto object-cover border-4 border-white shadow-xl transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-full shadow-lg">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-full">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:w-3/5">
              {/* Tabs */}
              <div className="mb-8 flex flex-wrap gap-2 justify-center lg:justify-start">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-full font-medium transition-all ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {tab.icon}
                    <span className="ml-2">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}