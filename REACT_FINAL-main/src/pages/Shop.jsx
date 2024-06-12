import TopBar from "../components/top-bar/TopBar.jsx";
import Footer from "../components/footer/Footer.jsx";
import Subscribe from "../components/index-main/Subscribe.jsx";
import MainShop from "../components/shop-main/MainShop.jsx";
import Filter from "../components/shop-main/Filter.jsx";

function Shop() {
    return (
        <>
            <TopBar />
            <Filter />
            <MainShop />
            <Subscribe />
            <Footer />
        </>
    )
}
export default Shop;