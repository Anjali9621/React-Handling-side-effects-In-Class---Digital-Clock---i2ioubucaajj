import React from 'react'
import '../styles/App.css';
import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    let time = new Date().toLocaleString();
    console.log(time);
    setDate(time);
    let tim = setInterval(() => {
      let clock = new Date().toLocaleString();
      setDate(clock);
    }, 2000);

    return () => {
      clearInterval(tim);
    };
  }, []);
  return (
    <div id="main">
      <div className="date-time"></div>
      <div className="date-time">{date}</div>
    </div>
  )
}

  );
};

export default App;
