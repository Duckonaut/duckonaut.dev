import { Project, ProjectDescriptor } from '../components/project';
import projectsJson from '../data/games.json';

const projects: ProjectDescriptor[] = projectsJson as ProjectDescriptor[];

export default function Games() {
    return (
        <>
            <div class="main-info">
                <div class="main-info-title">
                    Game Projects
                </div>
                <div class="main-info-subtitle">
                    games I've worked on
                </div>
                <div class="projects-container">
                    {
                        projects.map((project) => (
                            Project(project)
                        ))
                    }
                </div>
            </div>
        </>
    );
}

