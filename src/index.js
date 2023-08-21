import React from "react";
import ReactDOM from "react-dom";

const time = new Date();
const hour = time.getHours();
function Greeting(hour) {
  if (hour < 12 && hour >= 18) return "Morning";
  else if (hour > 12 && hour < 18) return "Afternoon";
  else return "Evening";
}
function Color(hour) {
  if (hour < 12 && hour >= 18) return "yellow";
  else if (hour > 12 && hour < 18) return "red";
  else return "black";
}
const custom = {
  color: Color(hour)
};
ReactDOM.render(
  <div>
    <h1 style={custom}>Good {Greeting(hour)}</h1>
    <p>
      The greeting above changes color and the message based on the time of the
      day .
    </p>
    <p> The time is now {time.toLocaleTimeString()} </p>
  </div>,
  document.getElementById("root")
);
