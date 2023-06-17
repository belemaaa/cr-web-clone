import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import OrderNow from './components/OrderNow';
import TasteTheLove from './components/TasteTheLove';
import ExcitingNews from './components/ExcitingNews';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <OrderNow/>
      <TasteTheLove/>
      <ExcitingNews/>
    </div>
  );
}

export default App;
