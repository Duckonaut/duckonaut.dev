import Carousel from '../components/carousel';
import './projects.css';

export default function Games() {
  return (
    <>
      <div class="main-info">
        <div class="main-info-title">
          Game Projects
        </div>
        <div class="main-info-subtitle">
          my game projects, mostly from game jams
        </div>
      </div>
      <div class="projects-container">
        <div class="project">
          <div class="project-title"><a href="https://jellingfish-games.itch.io/mr-final-boss">Mr. Final Boss</a>
          </div>
          <div class="project-info">
            <div class="icon-row">
              <div class="icon-text">Made using</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/csharp.png" />
                <img class="grow icon" src="./assets/images/unity.png" />
              </div>
            </div>
            <div class="icon-row">
              <div class="icon-text">Available on</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/windows.png" />
                <img class="grow icon" src="./assets/images/html5.png" />
              </div>
            </div>
            <hr />
            <div class="project-description">
              The legends say that one day, brave Heroes will slay the evil and malicious Ignatius, the Chaos
              Bringer... But YOU won't go down without a fight! Be the bossfight everyone is dreading and hunt
              down as many Heroes as you can in your last stand using a variety of abilities you can choose from!
              <br />
              Game made in 72 hours for <a href="https://ldjam.com/events/ludum-dare/50">Ludum Dare 50</a>, with
              the theme "Delay the Inevitable".
            </div>
          </div>
          <Carousel>
            <img src="assets/games/mr-final-boss/thumbnail.png" />
            <img src="assets/games/mr-final-boss/screenshot1.png" />
            <img src="assets/games/mr-final-boss/screenshot2.png" />
            <img src="assets/games/mr-final-boss/screenshot3.png" />
            <img src="assets/games/mr-final-boss/screenshot4.png" />
          </Carousel>
        </div>

        <div class="project">
          <div class="project-title"><a href="https://oroshibu.itch.io/bumbling-builders">BUMBLING BUILDERS</a></div>
          <div class="project-info">
            <div class="icon-row">
              <div class="icon-text">Made using</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/csharp.png" />
                <img class="grow icon" src="./assets/images/unity.png" />
              </div>
            </div>
            <div class="icon-row">
              <div class="icon-text">Available on</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/windows.png" />
                <img class="grow icon" src="./assets/images/html5.png" />
              </div>
            </div>
            <hr />
            <div class="project-description">
              A physics puzzle game in which you need to protect little creatures from danger that could come from
              any direction. Build forts with tetris-style blocks. The game features 30+ levels, multiple distinct
              enemies and a star rating system.
              <br />
              Game made in 72 hours for <a href="https://ldjam.com/events/ludum-dare/49">Ludum Dare 49</a>, with
              the theme "Unstable".
            </div>
          </div>
          <Carousel>
            <img src="assets/games/bumbling-builders/thumbnail.png" />
            <img src="assets/games/bumbling-builders/screenshot1.png" />
            <img src="assets/games/bumbling-builders/screenshot2.png" />
            <img src="assets/games/bumbling-builders/screenshot3.png" />
          </Carousel>
        </div>

        <div class="project">
          <div class="project-title"><a href="https://www.newgrounds.com/portal/view/850576">Dicemask</a>
          </div>
          <div class="project-info">
            <div class="icon-row">
              <div class="icon-text">Made using</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/csharp.png" />
                <img class="grow icon" src="./assets/images/unity.png" />
              </div>
            </div>
            <div class="icon-row">
              <div class="icon-text">Available on</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/html5.png" />
              </div>
            </div>
            <hr />
            <div class="project-description">
              Adventure through a dungeon of gambling themed enemies!
              Craft your perfect dice from many powerful spells,
              combo them to destroy everything in your path, and descend deeper.
              <br />
              Game made in under 50 hours for <a href="https://itch.io/jam/gmtk-jam-2022">GMTK Game Jam 2022</a>,
              with
              the theme "Roll of the dice".
            </div>
          </div>
          <Carousel>
            <img src="assets/games/dicemask/thumbnail.png" />
          </Carousel>
        </div>

        <div class="project">
          <div class="project-title"><a href="https://duckonaut.itch.io/wuzmag">WUZMAG</a>
          </div>
          <div class="project-info">
            <div class="icon-row">
              <div class="icon-text">Made using</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/csharp.png" />
                <img class="grow icon" src="./assets/images/unity.png" />
              </div>
            </div>
            <div class="icon-row">
              <div class="icon-text">Available on</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/windows.png" />
                <img class="grow icon" src="./assets/images/html5.png" />
              </div>
            </div>
            <hr />
            <div class="project-description">
              Turn based arcade survival game.
              Survive as long as you can by freezing enemies and using them to defeat more enemies.
              <br />
              Game made in roughly 8 hours for a private game jam with friends.
            </div>
          </div>
          <Carousel>
            <img src="assets/games/wuzmag/thumbnail.png" />
            <img src="assets/games/wuzmag/screenshot1.png" />
            <img src="assets/games/wuzmag/screenshot2.png" />
            <img src="assets/games/wuzmag/screenshot3.png" />
          </Carousel>
        </div>

        <div class="project">
          <div class="project-title"><a href="https://duckonaut.itch.io/miro">Miro</a>
          </div>
          <div class="project-info">
            <div class="icon-row">
              <div class="icon-text">Made using</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/csharp.png" />
                <img class="grow icon" src="./assets/images/monogame.png" />
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
              Small chill game made mostly as an experiment for a nice 2D renderer mechanic.
              Infect the world around you, breaking it down into its simplest components.
              <br />
              Game made in roughly 8 hours for a private game jam with friends.
            </div>
          </div>
          <Carousel>
            <img src="assets/games/miro/thumbnail.png" />
            <img src="assets/games/miro/screenshot1.png" />
            <img src="assets/games/miro/screenshot2.png" />
            <img src="assets/games/miro/screenshot3.png" />
          </Carousel>
        </div>

        <div class="project">
          <div class="project-title"><a href="https://duckonaut.itch.io/thermal-trail">Thermal Trail</a></div>
          <div class="project-info">
            <div class="icon-row">
              <div class="icon-text">Made using</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/csharp.png" />
                <img class="grow icon" src="./assets/images/godot.png" />
              </div>
            </div>
            <div class="icon-row">
              <div class="icon-text">Available on</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/windows.png" />
                <img class="grow icon" src="./assets/images/html5.png" />
              </div>
            </div>
            <hr />
            <div class="project-description">
              Play as Yolka, a mountain goat who found an unknown egg. Keep the egg warm as you navigate the 3
              distinct worlds, and bring it to the hottest place you know: the depths of a volcano.
              <br />
              Game made in a week for <a
                href="https://www.newgrounds.com/bbs/topic/1476469#bbspost26906541_post_text">Newgrounds July
                Jam 2021</a>, with the theme "Egg".
            </div>
          </div>
          <Carousel>
            <img src="assets/games/thermal-trail/gameart.png" />
            <img src="assets/games/thermal-trail/screenshot1.png" />
            <img src="assets/games/thermal-trail/screenshot2.png" />
            <img src="assets/games/thermal-trail/screenshot3.png" />
            <img src="assets/games/thermal-trail/screenshot4.png" />
          </Carousel>
        </div>

        <div class="project">
          <div class="project-title"><a href="https://duckonaut.itch.io/greachers">Greachers</a></div>
          <div class="project-info">
            <div class="icon-row">
              <div class="icon-text">Made using</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/csharp.png" />
                <img class="grow icon" src="./assets/images/monogame.png" />
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
              Tiny idle simulation game where you manage a team of randomly generated little fellas as they fight
              other greachers in a sidescrolling world with beautiful procedurally generated graphics.
              <br />
              Game made in 2 weeks for <a href="https://itch.io/jam/lowrezjam-2021">LOWREZJAM 2021</a>, with the
              theme "Minibeasts".
            </div>
          </div>
          <Carousel>
            <img src="assets/games/greachers/title.png" />
            <img src="assets/games/greachers/screenshot1.png" />
            <img src="assets/games/greachers/screenshot2.png" />
            <img src="assets/games/greachers/screenshot3.png" />
          </Carousel>
        </div>

        <div class="project">
          <div class="project-title"><a href="https://duckonaut.itch.io/third-party">Third Party</a></div>
          <div class="project-info">
            <div class="icon-row">
              <div class="icon-text">Made using</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/godot.png" />
              </div>
            </div>
            <div class="icon-row">
              <div class="icon-text">Available on</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/windows.png" />
                <img class="grow icon" src="./assets/images/html5.png" />
              </div>
            </div>
            <hr />
            <div class="project-description">
              A top-down stealth game where you play as a spy tasked with stealing important data from a rivaling
              government. Your task would be easy enough if your objective wasn’t in a underground top-secret
              facility handling an alien outbreak. Without access to conventional stealth techniques, use corpses
              of your enemies to sneak through the battlefield.
              <br />
              Game made in 72 hours for <a href="https://ldjam.com/events/ludum-dare/48/">Ludum Dare 48</a>, with
              the theme "Deeper and deeper".
            </div>
          </div>
          <Carousel>
            <img src="assets/games/third-party/thumbnail.png" />
            <img src="assets/games/third-party/screenshot1.jpg" />
            <img src="assets/games/third-party/screenshot2.jpg" />
            <img src="assets/games/third-party/screenshot3.jpg" />
            <img src="assets/games/third-party/screenshot4.jpg" />
          </Carousel>
        </div>
        <div class="project">
          <div class="project-title"><a href="https://xatriv.itch.io/your-left">Your Left</a></div>
          <div class="project-info">
            <div class="icon-row">
              <div class="icon-text">Made using</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/csharp.png" />
                <img class="grow icon" src="./assets/images/unity.png" />
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
              A simple pacman-inspired arcade game. Try to grab all the stars in a randomly generated maze before
              the time expires, while your controls are scattered all over the screen. Get as far as you can to
              get the highest score.
              <br />
              Game made in 8 hours for <a href="https://itch.io/jam/jamjam-bhl-kntg-polygon">Jam Jam</a>, a local
              in-person event organized by <a href="https://www.kntgpolygon.pl/">KNTG Polygon</a>, with
              the theme "One Click".
            </div>
          </div>
          <Carousel>
            <img src="assets/games/your-left/thumbnail.png" />
            <img src="assets/games/your-left/screenshot1.jpg" />
            <img src="assets/games/your-left/screenshot2.jpg" />
            <img src="assets/games/your-left/screenshot3.jpg" />
          </Carousel>
        </div>
        <div class="project">
          <div class="project-title"><a href="https://duckonaut.itch.io/riff-n-rage">Riff n' Rage</a></div>
          <div class="project-info">
            <div class="icon-row">
              <div class="icon-text">Made using</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/csharp.png" />
                <img class="grow icon" src="./assets/images/monogame.png" />
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
              You just got your first guitar, and through sheer luck managed to land in the king's throne room,
              trying to entertain him. Sadly, his subjects aren't huge fans of your music. Dodge them while trying
              to play the best you can, or the king won't be merciful.
              <br />
              Game made in 48 hours for a special solo game jam among friends. My theme was "Power at a price".
            </div>
          </div>
          <Carousel>
            <img src="assets/games/riff-n-rage/thumbnail.png" />
            <img src="assets/games/riff-n-rage/screenshot1.png" />
            <img src="assets/games/riff-n-rage/screenshot2.png" />
          </Carousel>
        </div>
        <div class="project">
          <div class="project-title"><a href="https://duckonaut.itch.io/survive-the-temple">Survive the Temple</a>
          </div>
          <div class="project-info">
            <div class="icon-row">
              <div class="icon-text">Made using</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/godot.png" />
              </div>
            </div>
            <div class="icon-row">
              <div class="icon-text">Available on</div>
              <div class="icon-container">
                <img class="grow icon" src="./assets/images/windows.png" />
                <img class="grow icon" src="./assets/images/html5.png" />
              </div>
            </div>
            <hr />
            <div class="project-description">
              A quick movement focused platformer that tests your short term memory. Survive the trap system of an
              ancient temple! Dash through the lanterns in the correct order before the time runs out, or face
              certain death!
              <br />
              Game made in 48 hours for <a href="https://ldjam.com/events/ludum-dare/47">Ludum Dare Compo 47</a>
              with the theme "Stuck in a loop".
            </div>
          </div>
          <Carousel>
            <img src="assets/games/survive-the-temple/cover.png" />
            <img src="assets/games/survive-the-temple/screenshot.png" />
          </Carousel>
        </div>
      </div>
    </>
  );
}

