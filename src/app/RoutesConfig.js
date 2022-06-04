import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './../components/ItemListContainer';
import ItemDetailContainer from './../components/ItemDetailContainer';
import Cart from './../components/Cart.js'
import SendOrder from './../components/SendOrder'
import NavBar from './../components/NavBar';

const RoutesConfig = () => (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<SendOrder />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);

export default RoutesConfig;