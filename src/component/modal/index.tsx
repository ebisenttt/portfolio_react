import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type PropsType = {
  open: boolean,
  openHandler: () => void;
  closeHandler: () => void;
  title: string,
  description: string
}

const TransitionsModal = (props: PropsType) => {

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.closeHandler}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <div>
          <Box sx={style}>
            <h2 id="transition-modal-title">{props.title}</h2>
            <p id="transition-modal-description">{props.description}</p>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}

export default TransitionsModal;