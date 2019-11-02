import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Gallery from './Gallery';

export default ({project,projectInfo}) => {
  const [state, setState] = React.useState({
    bottom: false,
  });
  

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

 

  const fullList = side => (
    <div
      role="presentation"
    >
      <div className="d-flex flex-md-row flex-column justify-content-end">
        <div className="w-50">
            <h1>{projectInfo.caption}</h1>
        </div>
        <div className="w-50">
            <Gallery project={project}/>
        </div>
      </div>
      
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('bottom', true)}>Detail</Button>

      <SwipeableDrawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}
      >
        {fullList('bottom')}
      </SwipeableDrawer>
    </div>
  );
}
