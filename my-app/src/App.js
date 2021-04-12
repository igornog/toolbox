import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <Logout />
      </header>
    </div>
  );
}

export default App;
