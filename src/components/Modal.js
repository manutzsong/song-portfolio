import React from 'react';
import Modal from '@material-ui/core/Modal';





export default ({pic,status,handleClose}) => {
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={status}
        onClose={handleClose}
      >
        <div className="position-fixed h-100 col-md-auto d-flex align-items-center" onClick={() => {handleClose()}}>
            <img src={pic} className="img-fluid" />
        </div>
      </Modal>
    </div>
  );
}
