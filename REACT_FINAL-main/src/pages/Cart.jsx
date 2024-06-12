import TopBar from "../components/top-bar/TopBar.jsx";
import Subscribe from "../components/index-main/Subscribe.jsx";
import Footer from "../components/footer/Footer.jsx";
import Shipping from "../components/shipping/Shipping.jsx";
import CartList from "../components/shipping/CartList.jsx";

function Cart() {
    return (
        <>
            <TopBar />
            <CartList />
            <Shipping />
            <Subscribe />
            <Footer />
        </>
    )
}
export default Cart;