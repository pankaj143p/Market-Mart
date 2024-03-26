import NavBar from "../features/Navbar/Navbar";
import ProductList from "../features/Product_List/ProductList";

function Home() {
    return ( 
        <div>
        {/*add navbar */}
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
     );
}

export default Home;