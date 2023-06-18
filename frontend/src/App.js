import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HellowWorld';
import MyName from './components/MyName';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <HelloWorld />

        <MyName name="Matheus Diniz"/>
      </header>
    </div>
  );
}

export default App;
