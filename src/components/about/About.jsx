import React from 'react';
import './about.css';


class About extends React.Component {
  render(){
    return(
      <div className="about">
        <div className="images">
          <img src={this.props.img} width="200px" height="200px"></img>
        </div>
        <div className="info">
      <h1>My name is {this.props.name}</h1>
      <h3>My description: {this.props.description}</h3>
      <h3>Info: {this.props.info}</h3>
      </div>
      </div>
    )
  }
}

export default About;