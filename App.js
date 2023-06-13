/** @format */
import { useState } from "react";

import Joke from "./joke";
import Login from "./Login";

const App = () => {
  const [result, setResult] = useState(false);
  const usernameCheck = () => {
    console.log("welcome");
    setResult(true);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          {result && <Joke />}
          {!result && <Login usernameCheck={usernameCheck} />}
        </div>
      </div>
    </div>
  );
};

export default App;

// <Switch>
//           <Route exact path="/login" component={LoginForm} />
//           <ProtectedRoute exact path="/" component={Home} />
//           <ProtectedRoute exact path="/products" component={Products} />
//           <ProtectedRoute
//             exact
//             path="/products/:id"
//             component={ProductItemDetails}
//           />
//           <ProtectedRoute exact path="/cart" component={Cart} />
//           <Route path="/not-found" component={NotFound} />
//           <Redirect to="not-found" />
//         </Switch>
