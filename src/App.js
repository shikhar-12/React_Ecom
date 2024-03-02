import { Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Body from "./component/Body";
import "./App.css";
import ShoppingCart from "./component/cart/ShoppingCart";
import ShopDetail from "./component/ShopDetail";
import ProductDetail from "./component/product/ProductDetail";
import Shop from "./component/Shop";
import Login from "./component/User/Login";
import Signup from "./component/User/Signup";
import Checkout from "./component/Checkout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loaduser } from "./Redux/Action/UserAction";
import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile";
import UpadatePass from "./component/User/UpadatePass";
import Shipping from "./component/cart/Shipping";
import ConfirmOrder from "./component/cart/ConfirmOrder";
import MyOrder from "./component/Order/MyOrder";
import Payment from "./component/cart/Payment";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from "./component/Success";
import CategoryDetail from "./component/category/CategoryDetail";

function App() {
  const hola = useDispatch();
  //payment apikey get
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/stripeapiKey");
    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    hola(loaduser());
    getStripeApiKey();
  }, [hola]);

  console.log(stripeApiKey);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/ShopDetail" element={<ShopDetail />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/updatepass" element={<UpadatePass />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/order/confirm" element={<ConfirmOrder />} />
        <Route path="/success" element={<Success />} />
        <Route path="/orders/me" element={<MyOrder />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/CategoryDetail/:cname" element={<CategoryDetail />} />
        <Route path="/CategoryDetail/:cname" element={<CategoryDetail />} />
        {stripeApiKey && (
          <Route
            path="/payment"
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            }
          />
        )}
      </Routes>

      <Footer />
    </>
  );
}
export default App;
