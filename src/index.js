import React from "react";
import ReactDOM from "react-dom";

/*
function App() {

  const name = 'Paul Nta';
  
  return (
    <div>
      <h1>You think it's HTML ?</h1>
      <p>No, It's Javascript</p>
      
      <h3>Hello, {name}</h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Paul',
  lastName: 'Nta'
};
const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
ReactDOM.render(
  element,
  document.getElementById('root')
);
