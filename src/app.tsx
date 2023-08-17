import './app.css'
import { Navbar } from './components/navbar'
import Contact from './pages/contact';
import Games from './pages/games';
import Home from './pages/home'
import { Router, Route } from 'preact-router';
import Projects from './pages/projects';

export function App() {
  return (
    <>
      <Navbar />
      <div id="app-main">
        <Router>
          <Route path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/games" component={Games} />
          <Route path="/projects" component={Projects} />
        </Router>
      </div>
    </>
  )
}
