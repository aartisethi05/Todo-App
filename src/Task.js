import React, { Component } from 'react';
class task extends Component {

  render() {
      const color={
          background:this.props.color
      };
    return (
      <div>
        <p style={color}>
          {this.props.date.toString()}:{this.props.name}
        </p>
                                 
      </div>
    );
  }
}
export default task;