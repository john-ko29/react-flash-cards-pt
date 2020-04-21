import React from 'react';

class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isFront: true
    };
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
  }

  componentDidMount() {
    this.props.setActiveCard(0);
  }

  nextCard() {
    this.setState(card => ({
      index: this.state.index + 1
    }));
  }

  previousCard() {
    this.setState(card => ({
      index: this.state.index - 1
    }));
  }

  render() {
    return (
      <h1 className='text-center'>Review Cards</h1>
    );
  }
}

export default ReviewCards;
