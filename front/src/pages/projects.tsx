import { Project, ProjectDescriptor } from '../components/project';
import projectsJson from '../data/projects.json';

const projects: ProjectDescriptor[] = projectsJson as ProjectDescriptor[];

export default function Projects() {
  return (
    <>
      <div class="main-info">
        <div class="main-info-title">
          Other Projects
        </div>
        <div class="main-info-subtitle">
          projects that are not games
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
