import './App.css';
import Button from './Button.jsx';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="hstack">
          <div className="vstack">
            <code>&lt;Button &#47;&gt;
              <br />
              <Button />
            </code>
          </div>
        </div>
        <p className="text-muted">Icons:&nbsp;
          <a
            href="https://material.io/resources/icons/?style=round"
            target="_blank"
            rel="noopener noreferrer"
          >https://material.io/resources/icons/?style=round</a>
        </p>
        <p className="text-muted">created by Probo Krishnacahya&nbsp;-&nbsp;
          <a
            href="https://devchallenges.io/"
            target="_blank"
            rel="noopener noreferrer"
          >devChallenges.io</a>
        </p>
      </div>
    </div>
  );
}

export default App;
