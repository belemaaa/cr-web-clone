import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import OrderNow from './components/OrderNow';
import TasteTheLove from './components/TasteTheLove';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <OrderNow/>
      <TasteTheLove/>
    </div>
  );
}

export default App;
