import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import AddTask from './components/AddTask';
import MyTasks from './components/MyTasks';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import FormDialog from './components/Modal';


export  class App extends Component {
  constructor(){
    super();
    this.state = {
      //current items 
      currentTaskName: "",
      date: "", 
      highPriority: 0,
      location: '', 
      time: "",
      notes: "",

      //modal 
      modalIsOpen: false,
    }
  

  this.handleClickOpen =  () => {
    this.setState({modalIsOpen: true});
    this.state.modalIsOpen = true;
      console.log(this.state.modalIsOpen)
    };
  
     this.handleClose = () => {
      this.setState({modalIsOpen: false});
      this.state.modalIsOpen = false;
    };

  this.doSomething = () =>{
      console.log("yessir")
    }
  }
  render() {
    return (
    <div className="app">
        <Navbar /> 
      <div>
        <div className="row p-0 m-0" style={{alignItems: "center", justifyContent: "center"}}>
          <div className="col-6" >
          <AddTask whenOpened={this.handleClickOpen} modalIsOpen={this.state.modalIsOpen} whenClosed={this.handleClose}/>
          </div>
        </div>
      </div>

      <MyTasks /> 
      <Footer />
    </div>
    )
  }
}


export default App;
