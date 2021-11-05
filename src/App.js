import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import { store } from './redux/store';

/**
 * Routes and implement react-redux
 */

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact name="home" path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
