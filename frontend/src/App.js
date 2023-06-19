import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [playerList, setPlayerList] = useState([{}]);
  const [playerName, setPlayerName] = useState("");
  const [playerAge, setPlayerAge]   = useState("");
  const [playerTeam, setPlayerTeam] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/players/")
        .then(response => {
          console.log(response.data)
        })
        .catch((err) => {
          console.error(err)
        })
  }, []);

  return (
    <div className="container">
      <div className="mt-3 justify-content-center align-items-center mx-auto" style={{"width": "70vw", "backgroundColor": "#f5f5f5"}}>
      </div>

      <h2 className="text-center text-white bg-success card mb-1 p-2">
        Players Manager
      </h2>

      <h6 className="card text-center text-white bg-success card mb-2 p-2">
        Player Information
      </h6>

      <div className="card-body text-center">
        <h5 className="card text-center text-white bg-dark p-2">
          Player Register
        </h5>
        
        <span className="card-text">
          <input className="mb-2 form-control" placeholder="Name"/>
          <input className="mb-2 form-control" placeholder="Age"/>
          <input className="mb-2 form-control" placeholder="Team"/>
          <button className="btn btn-outline-success mb-4">Register</button>
        </span>

        <h5 className="card text-center text-white bg-dark card p-2">List of Players</h5>
      </div>

      <h6 className="card text-center text-light bg-success py-1">&copy; Matheus Diniz</h6>
    </div>
  );
}

export default App;
