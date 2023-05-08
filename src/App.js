import './App.css';
import Hello from './komponenty/Chapter11/Hello';
import CarList from './komponenty/Chapter11/CarList';
import AddTwoNumbers from './komponenty/Chapter11/AddTwoNumbers';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <CarList />
        <AddTwoNumbers />
      </header>
    </div>
  );
}

export default App;
