import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer'
import shuffle from './Utils';

function App() {

  const urls = [
    "https://youtu.be/gNf8Bsu0UYc", // 90 gallon aquarium
    "https://youtu.be/IlFK2xhj4Mc", // the airport at 6:45am
    "https://youtu.be/ywSlCcEghMg", // What do I know?
    "https://youtu.be/kfKEB07LunA", // quarantine watch collection
    "https://youtu.be/JrhQzuuuGHU", // airplanes landing at in-n-out
    "https://youtu.be/zH25swZo9iA", // cat bed
    "https://youtu.be/4RYnLl0IqMA"  // del taco late night drive
  ];

  shuffle(urls);

  return (
    <div className="App">
      <div className="App__Header">
        <h1>gibberish.tv</h1>
        <h2>unwind an exhausted mind</h2>
        <span className="App__Header__tag2">a me &#38; my girlfriend production</span>
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
