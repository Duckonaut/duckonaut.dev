import './navbar.css';

import { NavbarItem } from './navbar-item';

export function Navbar() {
  return (
    <div class="navbar-container">
      <div class="navbar">
        <NavbarItem name="home" href="/">[Home]</NavbarItem>
        <NavbarItem name="games" href="/games">[Games]</NavbarItem>
        <NavbarItem name="projects" href="/projects">[Other Projects]</NavbarItem>
        <NavbarItem name="github" href="https://github.com/Duckonaut">[GitHub]</NavbarItem>
        <NavbarItem name="itch" href="https://duckonaut.itch.io/">[Itch.io]</NavbarItem>
        <NavbarItem name="twitter" href="https://twitter.com/duckonaut">[Twitter]</NavbarItem>
        <NavbarItem name="mastodon" href="https://mastodon.gamedev.place/@duckonaut" rel="me">[Mastodon]</NavbarItem>
        <NavbarItem name="contact" href="/contact">[Contact]</NavbarItem>
      </div>
    </div>
  );
}
