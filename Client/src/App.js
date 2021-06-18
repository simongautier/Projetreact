import logo from './logo.svg';
import './App.css';
import Bouton from './component/Bouton';
import Testfunction from './component/Testfunction';
import Fileinput from './component/Fileinput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Testfunction />
        <Fileinput />
      </header>
    </div>

  );
}

export default App;
