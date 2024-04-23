import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import { Auth0Provider } from '@auth0/auth0-react';

// ReactDOM.render(<App />, document.querySelector("#root"));
ReactDOM.render(
<Auth0Provider 
      domain="dev-hyyv7c2w6no3zgiw.us.auth0.com"
      clientId="ki1hxQHIXGg4tT3L4lPBZ0Wq3veag038"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <App />
  </Auth0Provider>, document.querySelector("#root"));

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <Auth0Provider 
//       domain="dev-4lqywfl6r1m5mgbl.us.auth0.com"
//       clientId="SMO4KMS8kbZ0dmsnjYmXDglUq8pAvzMR"
//       authorizationParams={{
//         redirect_uri: window.location.origin
//       }}>
//       <App />
//       </Auth0Provider>
//     </React.StrictMode>,
//   )
  
