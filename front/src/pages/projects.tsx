import './projects.css';
import Carousel from '../components/carousel';

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
      </div>

      <div class="projects-container">

        <div class="project">
          <div class="project-title"><a href="https://spiritmod.fandom.com/wiki/Spirit_Mod_Wiki">Spirit Mod</a></div>
          <div class="project-info">
            <div class="icon-row">
              <div class="icon-text">Made using</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/csharp.png" />
              </div>
            </div>
            <div class="icon-row">
              <div class="icon-text">Available on</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/windows.png" />
              </div>
            </div>
            <hr />
            <div class="project-description">
              The Spirit Mod is one of the largest mods for Terraria: with more than 1300 items, 8 bosses, and
              hundreds of enemies, as well as 3 new events and 3 brand new biomes, the mod has a lot to offer.
              <br />
              I had the privilege of contributing some system code, mainly the "Stargoop" system.
            </div>
          </div>
          <Carousel>
            <img class="project-image-gallery-item" src="assets/projects/spirit-mod/Thumbnail.png" />
            <img class="project-image-gallery-item" src="assets/projects/spirit-mod/Demo1.gif" />
            <img class="project-image-gallery-item" src="assets/projects/spirit-mod/Demo2.gif" />
          </Carousel>
        </div>
      </div>
    </>
  );
}
