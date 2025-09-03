import { useParams, Link } from "react-router-dom";
import { ProjectData } from "../../data/ProjectData";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = ProjectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <h2 className="text-center mt-10 text-2xl">Project Not Found</h2>
    );
  }

  return (
    <motion.div
      className="p-10 max-w-3xl mx-auto bg-black rounded-xl shadow-lg mt-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
      <p className="text-gray-700 mb-6">{project.description}</p>

      <motion.a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        whileHover={{ scale: 1.1 }}
      >
        View on GitHub / Live Demo
      </motion.a>

      <div className="mt-4">
        <Link to="/projects" className="text-blue-600 hover:underline">
          ← Back to Projects
        </Link>
        
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
