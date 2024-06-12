import Index from '/src/pages/Index.jsx'
import Shop from "./pages/Shop.jsx";
import {Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import Cart from "./pages/Cart.jsx";

function App() {

  return (
    <>
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Index />}/>
                <Route path="/shop" element={<Shop />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </Provider>
    </>
  )
}

export default App
