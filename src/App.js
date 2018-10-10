import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import On from './Screen/Bulb/On';
import Break from './Screen/Bulb/Break';
import Off from './Screen/Bulb/Off';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      switcha: "off"
    }
    this.on = this.on.bind(this);
    this.off = this.off.bind(this);
    this.breakB = this.breakB.bind(this);
    this.joinB = this.joinB.bind(this);
  }

  on(){
    this.setState({
      switcha:"on"
    })
  }

  off(){
    this.setState({
      switcha:"off"
    })
  }

  breakB(){
    this.setState({
      switcha:"broken"
    })
  }

  joinB(){
    this.setState({
      switcha:"off"
    })
  }


  render() {
    const {switcha} = this.state;
    return (
      <div>
        <center>
          {switcha === "off" && <Off break={this.breakB} />}
          {switcha === "on" && <On break={this.breakB} />}
          {switcha === "broken" && <Break join={this.joinB} />}
          <br />
          <br />
          {
            switcha === "on" ? 
              <Button variant="contained" onClick={this.off} color="primary">off</Button> 
              : 
              <Button variant="contained" onClick={this.on} color="primary">On</Button>
          } 
        </center>      
      </div>
    );
  }
}

export default App;
