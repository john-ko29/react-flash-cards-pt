import React from 'react';

class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.props.setView('view-cards');
  }

  render() {
    return (
      <div>
        <h1 className='text-center'>Create New Card</h1>
        <div className="row d-flex justify-content-center">
          <form className='d-flex flex-column col-8' onReset={this.reset}>
            <label htmlFor="question">Question:</label>
            <textarea name="question" id="question" cols="30" rows="5" placeholder="Put a question">
            </textarea>
            <label htmlFor="answer">Answer:</label>
            <textarea name="answer" id="answer" cols="30" rows="5" placeholder="Put an answer">
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
