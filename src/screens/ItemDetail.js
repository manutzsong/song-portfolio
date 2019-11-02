
import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';

import Item from '../components/Item';
import NavBar from '../components/Navbar';
import LoadingIndicator from '../components/LoadingIndicator';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:false
    }
  }

  componentDidMount() {

  }
  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />
    }

    return (
        <div className="App">
            <Bounce left>


                <Item />

            </Bounce>
        </div>
    );
  }
}

export default App;