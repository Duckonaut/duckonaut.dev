import './app.css'
import { Navbar } from './components/navbar'
import Contact from './pages/contact';
import Games from './pages/games';
import Home from './pages/home'
import { Router, Route, CustomHistory } from 'preact-router';
import Projects from './pages/projects';
import { HashHistory, createHashHistory } from 'history';
import { AnimatedBg } from './components/animated_bg';

const hashHistoryAdapter = (hashHistory: HashHistory): CustomHistory => {
    return {
        listen: (callback) => hashHistory.listen(({ location }) => callback(location)),
        location: hashHistory.location,
        push: hashHistory.push,
        replace: hashHistory.replace
    };
};
export function App() {
    const history = hashHistoryAdapter(createHashHistory());

    return (
        <>
            <Navbar />
            <div class="back-shadows"></div>
            <div id="app-main">
                <Router history={history}>
                    <Route path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/games" component={Games} />
                    <Route path="/projects" component={Projects} />
                </Router>
                <AnimatedBg />
            </div>
        </>
    )
}
