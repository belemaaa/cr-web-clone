import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import OrderNow from './components/OrderNow';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <OrderNow/>
    </div>
  );
}

export default App;
