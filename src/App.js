import logo from './logo.svg';
import './App.css';
import slide1 from './assets/proj/slide1.jpg'
import slide2 from './assets/proj/slide2.jpg'
import slide3 from './assets/proj/slide3.jpg'
import slide4 from './assets/proj/slide4.jpg'
import slide5 from './assets/proj/slide5.jpg'
import slide6 from './assets/proj/slide6.jpg'
import everyday1 from './assets/proj/everyday1.jpg'
import everyday2 from './assets/proj/everyday2.jpg'
import everyday3 from './assets/proj/everyday3.jpg'
import everyday4 from './assets/proj/everyday4.jpg'
import everyday5 from './assets/proj/everyday5.jpg'
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
      <TasteTheLove 
        title='TASTE THE LOVE - NEW MEAL DEALS'
        const images = {[slide1, slide2, slide3, slide4, slide5, slide6]}
      />
      <ExcitingNews/>
      <TasteTheLove
        title='EVERYDAY AFFORDABLE VALUE MEALS'
        const images = {[everyday1, everyday2, everyday3, everyday4, everyday5]}
      />
    </div>
  );
}

export default App;
