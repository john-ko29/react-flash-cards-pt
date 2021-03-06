import React from 'react';

class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'question') {
      this.setState({ question: event.target.value });
    }
    if (event.target.name === 'answer') {
      this.setState({ answer: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.reset();
    this.props.addCard(this.state);
  }

  reset() {
    this.props.setView('view-cards');
  }

  render() {
    return (
      <div>
        <h1 className='text-center'>Create New Card</h1>
        <div className="row d-flex justify-content-center">
          <form className='d-flex flex-column col-8' onReset={this.reset} onSubmit={this.handleSubmit} >
            <label htmlFor="question">Question:</label>
            <textarea name="question" id="question" cols="30" rows="5" onChange={this.handleChange} placeholder="Put a question">
            </textarea>
            <label htmlFor="answer">Answer:</label>
            <textarea name="answer" id="answer" cols="30" rows="5" onChange={this.handleChange} placeholder="Put an answer">
            </textarea>
            <div className="row justify-content-end">
              <button className="btn-danger m-2" type='reset'>Cancel</button>
              <button className="btn-primary m-2" type='submit'>Save Card</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateCard;
