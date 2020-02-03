import Error404 from './components/error/error404';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.scss';
import Index from './components/index';
import Test from './components/test/test';
import Language from './components/language/language';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
});

class App extends Component {
  public render(): any {
    return (
      <ApolloProvider client={client}>
        <Router>
            <div className="routes">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/language" component={Language} />
                <Route exact path="/404" component={Error404} />
                <Route component={Error404} />
              </Switch>
            </div>
        </Router>
      </ApolloProvider>
  );
  }
}

export default App;
