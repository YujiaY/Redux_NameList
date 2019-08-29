import React, {Component}from 'react';

import './AddPerson.css';

class AddPerson extends Component {
  state = {
    name: '',
    age: '',
}

  onNameChange = (e) => {
      this.setState({
        name: e.target.value,
      })
  }
  onAgeChange = (e) => {
      this.setState({
        age: e.target.value,
      })
  }
  render() {
    return (
      <div className="AddPerson">
        <input
          type="text"
          placeholder="Name"
          onChange={this.onNameChange}
          value = {this.state.name}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={this.onAgeChange}
          value={this.state.age}
        />
        <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
      </div>
    )
  }
}

export default AddPerson;
