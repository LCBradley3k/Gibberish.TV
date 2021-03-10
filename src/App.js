import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer'

function App() {
  return (
    <div className="App">
      <div className="App__Header">
        <h1>Gibberish.TV</h1>
        <h2>Unwind an exhausted mind</h2>
      </div>
      <VideoPlayer url="https://www.youtube.com/watch?v=gNf8Bsu0UYc" />
      <footer> The Footer. </footer>
    </div>
  );
}

export default App;
