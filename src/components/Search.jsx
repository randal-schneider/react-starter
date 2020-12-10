import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit () {
    // console.log(this.state.value);
    this.props.searchValue(this.state.value);
    this.setState({
      value: ''
    })
  }


  render() {

    return (
      <div className='searchBox'>
        <input
          type="text"
          placeholder="Search For Movies"
          value={this.state.value}
          onChange={this.handleChange}>
        </input>
        <button
          onClick={this.handleSubmit}
          type="submit">
            <i className="fa fa-search"></i>
        </button>
      </div>
    )
  }
}


export default Search