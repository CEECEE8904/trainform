import React from 'react';



class NewTrainForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input onChange={this.props.handleChange} name="name" type="text" placeholder="Enter Train Name"></input>
          <input onChange={this.props.handleChange} name="train_type" type="text" placeholder="Enter Speed"></input>
          <input onChange={this.props.handleChange} name="km_traveled" type="text" placeholder="Types"></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}


export default NewTrainForm;