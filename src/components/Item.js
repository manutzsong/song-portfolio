// You can live edit this code below the import statements
import React from 'react';
import Flip from 'react-reveal/Flip';

class FlipExample extends React.Component {
  render() {
    return (
      <div>
        <Flip bottom>
          <img src="http://www.goldengranary.net/wp-content/uploads/2016/10/thai-jasmine-rice-3.png" className="img-fluid" />
          <h1>React Reveal</h1>
        </Flip>
      </div>
    );
  }
}

export default FlipExample;
 