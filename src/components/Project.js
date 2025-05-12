import { useState, useEffect } from 'react';
import { ExternalLink, Eye, Code, Heart } from 'lucide-react';
import Greencart from '../photo/Greencart.png';
import Artspire from '../photo/Artspire.png';
// import Spring from '../photo/Spring.png';
import Springboot from '../photo/Springboot.jpg';
import Docschedular from '../photo/Docschedular.jpg';
import HeritageHub from '../photo/HeritageHub.png';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "GreenCart - 100% Organic Products Selling",
      category: "web design",
      image: Greencart, // Make sure 'Greencart' is properly imported or defined
      description: "GreenCart is a seamless web and mobile platform for selling and managing organic products, featuring secure transactions, real-time analytics, and intuitive design.",
      technologies: ["ReactJS", "Node.js", "MongoDB", "Material-UI"],
      sourceCode: "https://github.com/valamd/GreenCart",
      featured: false
    },

    {
      id: 2,
      title: "Artspire - Online Art Auction",
      category: "fullstack",
      image: Artspire, // Replace with actual image path or use a placeholder
      description: "A Django-based platform where artists showcase artworks and buyers participate in real-time auctions with a secure login system.",
      technologies: ["Django", "SQLite", "Bootstrap", "HTML", "CSS", "JavaScript"],
      sourceCode: "https://github.com/valamd/Artspire",
      featured: false
    },
    {
      id: 3,
      title: "DocSchedular",
      category: "mobile",
      image: Docschedular, // Replace with actual image if available
      description: "DocSchedular is a doctor appointment platform that connects patients and doctors. Patients can book appointments seamlessly, and doctors can efficiently manage their schedules. Built using Flutter and Dart, it leverages Firebase for real-time data and secure authentication.",
      technologies: ["Flutter", "Dart", "Firebase", "Figma"],
      sourceCode: "https://github.com/valamd/Docscheduler",
      featured: false
    },

    {
      id: 4,
      title: "Cake Shop REST API",
      category: "backend",
      image: Springboot, // Replace with actual image if available
      description: "A RESTful API built with Spring Boot for managing a cake shop. Features include product listing, order placement, authentication, and admin panel for inventory control.",
      technologies: ["Spring Boot", "MySQL", "Spring Security", "Postman"],
      sourceCode: "https://github.com/valamd/SpringBoot_REST_API",
      featured: false

    },

    {
      id: 5,
      title: "HeritageHub Web Application",
      category: "web",
      image: HeritageHub, // Replace with actual image if available
      description: "A CRUD-based ASP.NET web application where users can explore, like, and comment on Indian heritage sites, while admins manage content by adding, updating, or deleting heritage site entries with images.",
      technologies: ["ASP.NET Framework", "C#", "SQL Server", "HTML/CSS", "JavaScript"],
      sourceCode: "https://github.com/valamd/Heritage",
      featured: true
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    filterProjects('all');
  }, []);

  const filterProjects = (category) => {
    setActiveFilter(category);

    if (category === 'all') {
      setVisibleProjects(projects);
    } else if (category === 'featured') {
      setVisibleProjects(projects.filter(project => project.featured));
    } else {
      setVisibleProjects(projects.filter(project => project.category === category));
    }
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my latest works showcasing a blend of creativity, technical expertise, and attention to detail.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center mb-12">
          <button
            onClick={() => filterProjects('all')}
            className={`py-2 px-6 mx-2 mb-2 rounded-full font-medium text-sm transition-all duration-300 ${activeFilter === 'all'
              ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
              }`}
          >
            All Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-700 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-all duration-500 hover:scale-105"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <div className="flex space-x-3 mb-4">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-purple-600"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-3 text-gray-800">{project.title}</h3>
                <p className="mt-2 text-gray-600 line-clamp-2">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
              </div>
            </div>
            
          ))}
          
        </div>

        {/* Project Modal */}
        {modalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-500 h-100 object-cover"
                />
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-gray-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-sm font-semibold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  {selectedProject.featured && (
                    <span className="text-sm font-semibold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                      Featured Project
                    </span>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedProject.title}</h2>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>



                <div className="flex justify-center mt-8">
                  <a
                    href={selectedProject.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-800 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:bg-gray-700"
                  >
                    Source Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.388-1.333-1.758-1.333-1.758-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.832 2.807 1.303 3.492.996.108-.775.418-1.303.76-1.602-2.665-.304-5.467-1.332-5.467-5.932 0-1.31.469-2.38 1.235-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.512 11.512 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.874.119 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.624-5.48 5.922.429.37.812 1.103.812 2.222v3.293c0 .32.192.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}