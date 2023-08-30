export default function Home() {
  return (
    <>
      <div class="main-info">
        <div class="main-info-title">
          Stanisław Zagórowski
        </div>
        <div class="main-info-subtitle">
          aka Duckonaut, EchoDuck
        </div>
        <img src="assets/images/duckpfp.png" class="main-info-image logo grow" />
      </div>

      <div class="about-paragraph">
        <p>
          Hello! I'm a programmer, game designer, and artist. I'm currently a student at the Warsaw University of
          Technology, studying Computer Science. A list of the games I've worked on is in the <a class="games-link"
            href="#/games">games</a> section. Other projects I've been a part of are available in the <a class="projects-link"
              href="#/projects">projects</a> section.
          I also enjoy some lower-level programming and learning about the inner workings of various systems. The main
          technologies I use are <span class="highlight">C#</span>, <span class="highlight">Unity</span>
          , <span class="highlight">Python</span>, <span class="highlight">Rust</span> and <span class="highlight">C</span>,
          although I'm also familiar with <span class="highlight">Godot</span>, <span class="highlight">C++</span>
          , <span class="highlight">Java</span> and some <span class="highlight">JavaScript</span> and <span class="highlight">TypeScript</span>.
        </p>
      </div>
    </>
  );
}
