import React, { Component } from 'react';
import '../.././App.css';

class Break extends Component {
  constructor(props){
    super(props);
    this.joinSnd = this.joinSnd.bind(this);
}

joinSnd(ok){
  this.props.join({status: "broken"})
}

  render() {
    return (
      <div className="container">
        <div className="col-sm-12">
        <br />
          <img src={require("./break.jpg")} onClick={this.joinSnd} alt="can't load" className="img"/>
        </div>
      </div>
    );
  }
}

export default Break;
