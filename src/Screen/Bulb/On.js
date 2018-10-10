import React, { Component } from 'react';
import '../.././App.css';

class On extends Component {
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
          <img src={require("./on.jpg")} alt="can't load" onClick={this.breakSnd} className="img"/>
        </div>
      </div>
    );
  }
}

export default On;
