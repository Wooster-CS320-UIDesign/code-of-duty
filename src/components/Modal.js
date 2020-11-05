
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Modal } from '@material-ui/core';


import React, { Component } from 'react'
import DatePickers from '../helperComponents/DatePicker';

export  class MyModal extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  render() {
    return (
      <div>
      <div className="btn btn-block btn-secondary" onClick={this.props.handleClickOpen}>
        Add Task
      </div>
      <Dialog open={this.props.modalIsOpen} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Fill out the following information to Add your task to the task list
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            fullWidth
          />
        </DialogContent>
        <div className=" pl-5" style={{justifyContent: "center", alignItems: "center"}}>
        <DatePickers />
        </div>
       
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Done
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
    )
  }
}



export default Modal;