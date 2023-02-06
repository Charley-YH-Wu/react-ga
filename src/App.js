import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-254143119-2"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

function App() {
  ReactGA.pageview(window.location.pathname+window.location.search);
  const gaEventTracker = useAnalyticsEventTracker('Learn more');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://charley-yh-wu.github.io/react-ga/"
          onClick={()=>gaEventTracker('call')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </header>
    </div>
  );
}


export default App;
