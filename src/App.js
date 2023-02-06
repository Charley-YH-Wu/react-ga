import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga4';
const TRACKING_ID = "G-NG1EHQV4BY"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

const Home = () => (
  <div>
    <h3>Home Page</h3>
  </div>
);

const OPMusic = () => (
  <div>
        <a
          className="App-link"
          href="https://github.com/Charley-YH-Wu/OPMusic"
          //onClick={()=>gaEventTracker('OPMusic')}
          target="_blank"
          rel="noopener noreferrer"
        >
          OPMusic
        </a>   
  </div>
);

const USC = () => (
  <div>
        <a
          className="App-link"
          href="https://github.com/Charley-YH-Wu/USCDoorDrink"
          //onClick={()=>gaEventTracker('USC Door Drink')}
          target="_blank"
          rel="noopener noreferrer"
        >
          USC Door Drink
        </a>
  </div>
);


function App() {
  //ReactGA.pageview(window.location.pathname+window.location.search);
  ReactGA.send({ hitType: "pageview", page: window.location.pathname+window.location.search });
  const gaEventTracker = useAnalyticsEventTracker('tes11');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
            <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usc" element={<USC />} />
        <Route path="/opmusic" element={<OPMusic />} />
      </Routes>
    </Router>
        <USC />
        <OPMusic />
        <a
          className="App-link"
          href="https://github.com/Charley-YH-Wu/USCDoorDrink"
          onClick={()=>gaEventTracker('USC Door Drink')}
          target="_blank"
          rel="noopener noreferrer"
        >
          USC Door Drink
        </a>

        <a
          className="App-link"
          href="https://github.com/Charley-YH-Wu/OPMusic"
          onClick={()=>gaEventTracker('OPMusic')}
          target="_blank"
          rel="noopener noreferrer"
        >
          OPMusic
        </a>        
      </header>
    </div>
  );
}


export default App;
