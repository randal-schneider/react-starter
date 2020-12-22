import React from 'react';


class AddToList extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      value: ''
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmits = this.handleSubmits.bind(this);
  }

  handleChanges(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmits() {
    if (!this.state.value) {
      return;
    }
    this.props.addValue(this.state.value);
    this.setState({
      value: ''
    })
  }


  render() {

    return (
      <div className='addToListBox'>
        <input
          type="text"
          placeholder="Add New Movies"
          value={this.state.value}
          onChange={this.handleChanges}>
        </input>
        <button
          onClick={this.handleSubmits}
          type="submit">
          <i className="fa fa-upload" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}


export default AddToList;