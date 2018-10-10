import React, { Component } from 'react';
import '../.././App.css';

class Off extends Component {
    constructor(props){
        super(props);
        this.breakSnd = this.breakSnd.bind(this);
    }

    breakSnd(ok){
      this.props.break({status: "broken"})
    }

  render() {
    return (
      <div className="container">
        <div className="col-sm-12">
        <br />
          <img src={require("./off.jpg")} onClick={this.breakSnd} alt="can't load"  className="img"/>
        </div>
      </div>
    );
  }
}

export default Off;
