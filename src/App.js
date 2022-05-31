import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart.js'
import RoutesConfig from './app/RoutesConfig.js';
import ShopProvider from './components/CartContext';


function App() {
  return (
    <ShopProvider>
      <div className="App">

        <RoutesConfig />

        { /*<ItemListContainer greeting="Bienvenido"></ItemListContainer>*/}
      </div>
    </ShopProvider>
  );
}


export default App;
