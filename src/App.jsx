/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const userIsAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="products/:category">
            <Route index element={<ProductList />} />
          </Route>

          <Route path="product/:id">
            <Route index element={<Product />} />
          </Route>

          <Route path="cart">
            <Route index element={<Cart />} />
          </Route>

          <Route path="success">
            <Route index element={<Success />} />
          </Route>

          <Route path="pay">
            <Route index element={<Pay />} />
          </Route>

          <Route
            path="/login"
            element={
              userIsAuthenticated ? <Navigate to="/" replace /> : <Login />
            }
          />

          <Route
            path="/register"
            element={
              userIsAuthenticated ? <Navigate to="/" replace /> : <Register />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

{
  /* <Router>
        <Routes>
          <Route index  path="/pay" element={<Pay />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router> */
}
