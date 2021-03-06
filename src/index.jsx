import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'; 
import {Provider} from 'react-redux';
import {devToolsEnhancer} from 'redux-devtools-extension';

import MainView from './components/main-view/main-view';
import Navbar from './components/navbar/navbar';
import moviesApp from './reducers/reducers';

import './index.scss';

const store = createStore(moviesApp, devToolsEnhancer());


// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render () {
    return (
    <Provider store={store}>
      {/* <Navbar /> */}
      <MainView />
    </Provider>
    );
  }
}

// Finds the app root
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);

