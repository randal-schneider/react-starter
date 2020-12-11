import React from 'react';


class AddToList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleAdd (event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmission () {
    this.props.addValue(this.state.value);
    this.setState({
      value: ''
    })
  }


  render() {

    return (
      <div className='searchBox'>
        <input
          type="text"
          placeholder="Add Movies"
          value={this.state.value}
          onChange={this.handleAdd}>
        </input>
        <button
          onClick={this.handleSubmission}
          type="submit">
            <i className="fa fa-car"></i>
        </button>
      </div>
    )
  }
}


export default AddToList