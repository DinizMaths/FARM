import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
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
        
        <span>

        </span>
      </div>
    </div>
  );
}

export default App;
