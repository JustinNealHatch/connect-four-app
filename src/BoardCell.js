import React, {Component} from 'react';
import './tile.js'

class BoardCell extends Component {
  handleClick() {
    console.log(`Click column ${this.props.x}`)


    this.props.sendTileDrop(this.props.x);
  }

  render() {
    return ( <
      div className = "cell"
      onClick = {() => this.handleClick()} >
      <p > {this.props.x}, {this.props.y} < /p> <
      /div>
    );
  }
}

const stateToProps = state => {
  return {};
}

const sendToProps = send => {
  return {
    sendTileDrop: col => send(dropTile(col)),

  };
}



export default connect(stateToProps, sendToProps)(Boardcell);
