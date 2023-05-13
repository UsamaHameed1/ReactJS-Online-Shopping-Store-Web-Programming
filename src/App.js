
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
// import Help from "./components/Help/Help";
// import Faq from "./components/Faq/Faq";
// import Contact from "./components/Contact/Contact";

import ProductDetail from "./components/productDetail/productDetail"


import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(

    // Navbar will always be at the top 
    // 1).If we go to only the / then only the navbar will be displayed
    // 2).If we go to the /products then navbar and products will be displayed
    // 3).If we go to the /cart then navbar and the cart will be displayed

    <Route path="/" element={<Navbar />}>

      <Route index element={<Products />} />
      <Route path="products/:id" element={<ProductDetail></ProductDetail>} />
      <Route path="cart" element={<Cart />} />

    </Route >
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;



