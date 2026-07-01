import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumProject from "../components/projects/BreadcrumProject";
import ProjectMain from "../components/projects/ProjectMain";

function Projects() {
  return (
      <>
        <Header />
        <BreadcrumProject />
        <ProjectMain />
        <Footer />
      </>
  )
}

export default Projects;