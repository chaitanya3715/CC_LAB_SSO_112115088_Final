import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import Contacts from "./contacts/Contacts";
import Header from "./layout/Header";
import About from "./pages/About";
import AddContact from "./contacts/AddContact";
import NotFound from "./pages/NotFound";
import EditContact from "./contacts/EditContact";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./layout/login";

// class App extends Component {
//   state = {};
//   render() {
//     let {user}=useAuth0();
//     return<> {user ? <>
//       <Provider store={store}>
//         <Router>
//           <React.Fragment>
//             <Header />
//             <div className="container">
//               <Switch>
//                 <Route exact path="/" component={Contacts} />
//                 <Route exact path="/about/" component={About} />
//                 <Route exact path="/contact/add" component={AddContact} />
//                 <Route exact path="/contact/edit/:id" component={EditContact} />
//                 <Route component={NotFound} />
//               </Switch>
//             </div>
//           </React.Fragment>
//         </Router>
//       </Provider>
//     </>:<LoginButton></LoginButton>}
//     </>
//   }
// }

// export default App;



function App() {
    let {user}=useAuth0();
    return<> {user ? <>
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about/" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    </>:<LoginButton></LoginButton>}
    </>
  }

export default App;
