import ProjectsSection from '../sections/Projects';
import HackathonGallery from '../sections/HackathonGallery';

const ProjectsPage = () => {
    return (
        <div className="flex flex-col min-h-screen pt-24">
            <ProjectsSection />
            <HackathonGallery />
        </div>
    );
};

export default ProjectsPage;
