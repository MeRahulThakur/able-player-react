import React,{Component} from "react";
import loadjs from 'loadjs';
import './modal.css'
import '../../able-player-css/styles/ableplayer.min.css';
export default class Modal extends Component {
  componentDidMount(){
    loadjs(['./able-resource/thirdparty/jquery.min.js','./able-resource/thirdparty/js.cookie.js','./able-resource/build/ableplayer.min.js']);
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" id="modal">
        <h2>Modal Window</h2>
        <div className="content">{this.props.children}
        
        </div>
        <div className="actions">
          <button className="toggle-button" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}