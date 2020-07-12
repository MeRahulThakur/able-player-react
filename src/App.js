import React, { Component } from 'react';
import loadjs from 'loadjs';
import './able-player-css/styles/ableplayer.min.css';
import Modal from "./components/Modal";

class App extends Component{
  componentDidMount(){
    loadjs(['./able-resource/thirdparty/jquery.min.js','./able-resource/thirdparty/js.cookie.js','./able-resource/build/ableplayer.min.js']);
  }
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  
  render(){
    return (
      <div className="App">
         {/* <video id="video1" preload="auto" width="400" height="600" poster="../media/wwa.jpg" data-able-player>
          <source type="video/webm" src="https://ableplayer.github.io/ableplayer/media/wwa.webm"/>
        </video>  */}

        <h1>Able Player Modal Example</h1>
        <button  onClick={e => {
              this.showModal();
         }} > Show Video </button>
         {this.state.show && 
         <Modal onClose={this.showModal} show={this.state.show}>
         <video id="video2" preload="auto" width="400" height="600" poster="../media/wwa.jpg" data-able-player>
          <source type="video/webm" src="https://ableplayer.github.io/ableplayer/media/wwa.webm"/>
        </video> 
       </Modal>
         }
        
      </div>
    );
  }
}

export default App;
