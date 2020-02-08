import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './shared/header/header';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Posts from './posts/posts';
import ToDos from './todos/todos';
import { Provider } from 'react-redux';
import {createStoreWithMiddleware} from './redux/store';


function App() {
  return (

    // provider --> component store --> passing store with props to any child page
    
    <Provider store={createStoreWithMiddleware}>
      <Router basename="#/">

        <Header></Header>
        <div >
          <Switch>
            <Route exact path="/todo" component={ToDos} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/" render={() => (<Redirect to="/todo" />)} />
          </Switch>
        </div>
      </Router>
      </Provider>
  );
}

export default App;
