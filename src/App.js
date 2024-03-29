import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import About from "./pages/About/About";
import Dashboard from "./pages/DashBoard/Dashboard/Dashboard";
import ExploreProd from "./pages/ExploreProd/ExploreProd";
import Home from "./pages/Homepage/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import OrderSuccess from "./pages/Payment/OrderSuccess";
import OrderSsuccess from "./pages/Appointment/DashboardAppointments/Paymentt/OrderSsuccess/OrderSsuccess";
import Payment from "./pages/Payment/Payment";
import Purchase from "./pages/Purchase/Purchase";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import Toys from "./pages/ExploreProd/Toys";
import Contact from "./pages/Contact/Contact";
import ReturnRefund from "./pages/Return/return-refund";
import Appointment from "./pages/Appointment/Appointment";
import DayCare from "./pages/Daycare/DayCare";
import Doctors from "./pages/Doctors/Doctors";

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
          <Route path='/explore-prod'>
            <ExploreProd></ExploreProd>
          </Route>
          <Route path='/return-refund'>
            <ReturnRefund></ReturnRefund>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
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
          <Route path='/OrderSsuccess'>
            <OrderSsuccess />
          </Route>
          <PrivateRoute path='/car-details/:id'>
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <Route path='/doctors'>
            <Doctors></Doctors>
          </Route>
          <Route path='/daycare'>
            <DayCare></DayCare>
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