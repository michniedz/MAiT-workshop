import './App.css';
import Hello from './komponenty/Chapter11/Hello';
import CarList from './komponenty/Chapter11/CarList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <CarList />
      </header>
    </div>
  );
}

export default App;