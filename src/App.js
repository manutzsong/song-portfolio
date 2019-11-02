// This example is live editable
import React, { Component } from 'react';

import LoadingIndicator from './components/LoadingIndicator';

import Home from './screens/HomeScreen';
import { Route, Link, withRouter } from 'react-router-dom';
import NavBar from './components/Navbar';
import ItemDetail from './screens/ItemDetail';
import Zoom from 'react-reveal/Zoom';

class App extends Component {

  render() {

    return (
      <div className="App">
        <NavBar />
          <Zoom left>
              <Route path='/' exact component={Home}/> 
              <Route path='/i' exact component={ItemDetail}/>
          </Zoom>
      </div>
    );
  }
}

export default App;