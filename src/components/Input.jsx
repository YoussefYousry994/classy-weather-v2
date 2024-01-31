import React from 'react';
import App from '../App-v2';

class Input extends React.Component {
  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Search for location...'
          value={this.props.location}
          onChange={this.props.setLocation}
        />
      </div>
    );
  }
}

export default Input;
