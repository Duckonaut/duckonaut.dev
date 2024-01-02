import Carousel from "./carousel";
import './project.css';

enum ProjectType {
  GAME = "game",
  PROJECT = "project",
}

export enum ProjectTech {
  CSHARP = "csharp",
  RUST = "rust",
  C = "c",
  CPP = "cpp",
  JAVASCRIPT = "javascript",
  TYPESCRIPT = "typescript",
  HTML = "html",
  CSS = "css",

  PREACT = "preact",
  UNITY = "unity",
  GODOT = "godot",
  MONOGAME = "monogame",
}

export enum ProjectTarget {
  WEB = "html5",
  WINDOWS = "windows",
  LINUX = "linux",
  MACOS = "macos",
  ANDROID = "android",
  XBOX = "xbox",
  PLAYSTATION = "playstation",
  SWITCH = "switch",
  HYPRLAND = "hyprland",
}

export interface ProjectDescriptor {
  name: string;
  name_normalized: string;
  type: ProjectType;
  link: string;
  tech: ProjectTech[];
  targets: ProjectTarget[];
  images: string[];
  description: string;
}

function getProjectImageLink(project: ProjectDescriptor, image: string) {
  return `assets/${project.type}s/${project.name_normalized}/${image}`;
}

function getProjectTechIconLink(tech: ProjectTech) {
  return `assets/images/${tech}.png`;
}

function getProjectTargetIconLink(target: ProjectTarget) {
  return `assets/images/${target}.png`;
}

export function Project(props: ProjectDescriptor) {
  return (
    <div class="project">
      <div class="project-title"><a href={props.link}>{props.name}</a></div>
      <div class="project-info">
        <div class="icon-row">
          <div class="icon-text">Made using</div>
          <div class="icon-container">
            {props.tech.map((tech) => (
              <img class="grow icon" src={getProjectTechIconLink(tech)} />
            ))}
          </div>
        </div>
        <div class="icon-row">
          <div class="icon-text">Available on</div>
          <div class="icon-container">
            {props.targets.map((target) => (
              <img class="grow icon" src={getProjectTargetIconLink(target)} />
            ))}
          </div>
        </div>
        <hr />
        <div class="project-description">
          {
            // use description as html
            <div dangerouslySetInnerHTML={{ __html: props.description }} />
          }
        </div>
      </div>
      {props.images && props.images.length > 0 &&
        <Carousel>
          {props.images.map((image) => (
            <img class="project-image" src={getProjectImageLink(props, image)} />
          ))}
        </Carousel>
      }
    </div>
  );
}
