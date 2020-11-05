import { Modal } from '@material-ui/core'
import React, { Component } from 'react'
import { MyModal } from './Modal';

export default class AddTask extends Component {
  constructor(props){
    super(props);

    console.log(this.props)
  }
  render() {
    return (
      <div>
        <MyModal handleClickOpen={this.props.whenOpened} modalIsOpen={this.props.modalIsOpen} handleClose={this.props.whenClosed}/>
      </div>
    )
  }
}
