import React from 'react';
import todolist from './components/todolist/todolist';
import Nav from './components/Navigation/Nav';
import {ToastContainer} from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div>
       <Nav />
    </div>
    <Switch>
        <Route path="/" exact >
            Home
        </Route>
        <Route path="/news">
            News
        </Route>
        <Route path="/contact">
            Contact 123123
        </Route>
        <Route path="/about">
            About
        </Route>
       
        <Route path="*">
            404
        </Route>
    </Switch>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {/* Same as */}
    <ToastContainer />
</Router>
      
  );
}

export default App;
