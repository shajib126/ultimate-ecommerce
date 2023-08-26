import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import Home from "./Pages/Home";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import ProductList from "./features/Product/component/ProductList";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "sign-in",
    element: <SignInPage/>,
  },
  {
    path:"sign-up",
    element:<SignUpPage/>
  },
  {
    path:"cart",
    element:<CartPage/>
  },
  {
    path:"checkout",
    element:<CheckoutPage/>
  },
  {
    path:"product-details",
    element:<ProductDetailsPage/>
  }
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
