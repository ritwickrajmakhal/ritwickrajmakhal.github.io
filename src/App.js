import './App.css';
import data from './config.json'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar nav={data.nav} />
    </div>
  );
}

export default App;
