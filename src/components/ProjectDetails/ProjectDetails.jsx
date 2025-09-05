import { useParams, Link } from "react-router-dom";
import { ProjectData } from "../../data/ProjectData";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCode,
  FaServer,
} from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = ProjectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <h2 className="text-2xl text-white">Project Not Found</h2>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Card */}
        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Project Header */}
          <div className="mb-8">
            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {project.name}
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {project.description}
            </motion.p>
          </div>

          {/* Project Links */}
          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="mr-3 text-xl" />
                GitHub Repository
                <FaExternalLinkAlt className="ml-2 text-sm opacity-70 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            )}

            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="mr-3 text-xl" />
                Live Demo
                <FaExternalLinkAlt className="ml-2 text-sm opacity-70 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            )}
          </motion.div>

          {/* Project Details */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {/* Frontend */}
            {project.technologies?.frontend?.length > 0 && (
              <div className="bg-gray-700/30 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <FaCode className="text-blue-400 text-xl mr-3" />
                  <h3 className="text-lg font-semibold">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.frontend.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Backend */}
            {project.technologies?.backend?.length > 0 && (
              <div className="bg-gray-700/30 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <FaServer className="text-green-400 text-xl mr-3" />
                  <h3 className="text-lg font-semibold">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.backend.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Project Overview */}
          <motion.div
            className="bg-gray-700/20 p-6 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed">
              This project showcases a modern web application built with
              cutting-edge technologies. It features responsive design, smooth
              animations, and excellent user experience. The application
              demonstrates best practices in web development and modern UI/UX
              design principles.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
