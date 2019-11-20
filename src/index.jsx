import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { Router } from 'react-router-dom';
import history from './history';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Router history={history}>
        <Component/>
      </Router>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */