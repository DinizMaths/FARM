import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Message from './components/Message';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        const data = response.data

        setMessage(data["message"])
      })
      .catch((err) => {

      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Message message={message}/>
      </header>
    </div>
  );
}

export default App;
