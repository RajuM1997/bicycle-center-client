import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import News from "./Pages/News_News/News";
import Explore from "./Pages/Explore/Explore";
import Update from "./Pages/Dashborad/MangeProduct/Update/Update";
import NotFound from "./Pages/NotFound/NotFound";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <PrivateRoute path="/orderPlace/:id">
            <OrderPlace />
          </PrivateRoute>
          <PrivateRoute path="/orderPlace/:id">
            <OrderPlace />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/update">
            <Update />
          </PrivateRoute>
          <PrivateRoute path="/dashboardHome">
            <DashboardHome />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
