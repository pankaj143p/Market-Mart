import NavBar from "../features/Navbar/Navbar";
import ProductDetail from "../features/Product_List/ProductDetails";

function ProductDetailPage() {
    return ( 
        <div>
         <NavBar>
            <ProductDetail></ProductDetail>
         </NavBar>
        </div>
     );
}

export default ProductDetailPage;