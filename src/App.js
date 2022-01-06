import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashborad/DashBoard/Dashboard";
import OrderPlace from "./Pages/OrderPlace/OrderPlace";
import DashboardHome from "./Pages/Dashborad/DashboardHome/DashboardHome";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import News from "./Pages/News/News";
import Explore from "./Pages/Explore/Explore";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import AddProduct from "./Pages/Dashborad/AddProduct/AddProduct";
import AllOrder from "./Pages/Dashborad/AllOrder/AllOrder";
import MyOrder from "./Pages/Dashborad/MyOrder/MyOrder";
import MakeAdmin from "./Pages/Dashborad/MakeAdmin/MakeAdmin";
import MangeOrder from "./Pages/Dashborad/MangeOrder/MangeOrder";
import MangeProduct from "./Pages/Dashborad/MangeProduct/MangeProduct";
import Review from "./Pages/Dashborad/Review/Review";
import Payment from "./Pages/Dashborad/Payment/Payment";
import useFirebase from "./Hooks/useFirebase";

function App() {
  const { admin } = useFirebase();
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/explore" element={<Explore />} />
          <Route
            path="/orderPlace/:id"
            element={
              <PrivateRoute>
                <OrderPlace />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            {admin ? (
              <Route exact path="/dashboard" element={<DashboardHome />} />
            ) : (
              <Route exact path="/dashboard" element={<MyOrder />} />
            )}
            <Route path={`/dashboard/addProduct`} element={<AddProduct />} />
            <Route path={`/dashboard/allProduct`} element={<AllOrder />} />
            <Route path={`/dashboard/myOrder`} element={<MyOrder />} />
            <Route path={`/dashboard/makeAdmin`} element={<MakeAdmin />} />
            <Route path={`/dashboard/mangeOrder`} element={<MangeOrder />} />
            <Route
              path={`/dashboard/mangeProduct`}
              element={<MangeProduct />}
            />
            <Route path={`/dashboard/review`} element={<Review />} />
            <Route path={`/dashboard/payment`} element={<Payment />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
