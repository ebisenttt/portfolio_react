import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

type PropsType = {
  open: boolean,
  openHandler: (bool: boolean) => void;
  closeHandler: (bool: boolean) => void;
  title: string,
  description: string
}

const TransitionsModal = (props: PropsType) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    // setOpen(true);
    props.openHandler(true);
  };

  const handleClose = () => {
    // setOpen(false);
    props.openHandler(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        // open={open}
        open={props.open}
        onClose={props.closeHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.title}</h2>
            <p id="transition-modal-description">{props.description}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal;