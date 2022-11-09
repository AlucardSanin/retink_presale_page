import logo from './Logo.svg';
import './App.css';
import "animate.css/animate.min.css";
import Intro from './components/Introduction';
import Desc from './components/Description';
import Serv from './components/Services';
import Form from './components/Form';
import Foot from './components/Footer'
import reveal from './index'

function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> 
      <Intro />
      <Desc />
      <Serv />
      <Form />
      <Foot />
      </div>     
    </>
  );
}

export default App;
