import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
<Menu/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
PetCare App        </p>
        
      </header>

    </div>
  );
}
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <Menu />
  </App>,
  document.getElementById("root")
);

export default App;
