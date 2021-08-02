import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Product>
          <div className="shop"></div>
          <div className="cart"></div>
        </Product>
        
      </header>
    </div>
  );
}

export default App;
