import GlobalStyle from "./globalStyles";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Contact from "./pages/Contact";
import Menu from "./components/menu/Menu";


/* Add react router here */
/* Add global styles component here */
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
          <Switch>
            <Route exact path="/">
              Landing Page
            </Route>

            <Route path="/about">
              About Page
            </Route>

            <Route exact path="/reservation">
              Reservation Page
            </Route>

            <Route path="/reservation/reservation-table">
              Table Reservation Page
            </Route>

            <Route path="/reservation/reservation-event">
              Event Reservation Page
            </Route>

            <Route path="/menu">
              <Menu />
            </Route>

            <Route exact path="/order">
              Order Page
            </Route>

            <Route path="/order/menu-page">
              Menu Page
            </Route>

            <Route path="/order/cart-checkout">
              Cart/Checkout
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
