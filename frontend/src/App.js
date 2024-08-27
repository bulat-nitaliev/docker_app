import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const onFetch = ()=>{
    axios.get('api/testwithcurrentuser').then(response=>{
      console.log(response);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. <b>Moyashka !!!!!!!!!!!!!!!!!!!!  webSockets</b>
          <h1>Alhamdulillah</h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onFetch}>Click</button>
      </header>
    </div>
  );
}

export default App;
