import logo from './Logo.svg';
import './App.css';
import Intro from './components/Introduction';
import Desc from './components/Description';
import Serv from './components/Services';
import Form from './components/Form';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <Intro />
      <Desc />
      <Serv />
      <Form />
    </>
  );
}

export default App;
