import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer'
import shuffle from './Utils';

function App() {
  const urls = [
    "https://youtu.be/gNf8Bsu0UYc",
    "https://youtu.be/btMC9wE2AXg",
    "https://youtu.be/wnHpqdiaKYs",
    "https://youtu.be/ywSlCcEghMg"
  ];

  shuffle(urls);

  return (
    <div className="App">
      <div className="App__Header">
        <h1>Gibberish.TV</h1>
        <h2>Unwind an exhausted mind</h2>
      </div>
      <VideoPlayer urls={urls} />
      <footer> 
        <p><b>about gibberish.tv:</b></p><br />
        <p>there is a lot of mindfulness content out there - and no denying its helpfulness.</p>
        <p>We found personally that best paired with mindfulness, is gibberish. content so random, 
          so passionate, so interesting, so unuseful (yet surprisingly useful), that it can't help
          but bring you back into reality.</p>
      </footer>
    </div>
  );
}

export default App;
