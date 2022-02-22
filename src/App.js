import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import About from "./pages/About/About";
import Dashboard from "./pages/DashBoard/Dashboard/Dashboard";
import ExploreCars from "./pages/ExploreCars/ExploreCars";
import Home from "./pages/Homepage/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import OrderSuccess from "./pages/Payment/OrderSuccess";
import Payment from "./pages/Payment/Payment";
import Purchase from "./pages/Purchase/Purchase";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/explore-cars'>
            <ExploreCars></ExploreCars>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/payment-method/:id'>
            <Payment />
          </Route>
          <Route path='/order-success'>
            <OrderSuccess />
          </Route>
          <PrivateRoute path='/car-details/:id'>
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path='/registers'>
            <Register></Register>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
