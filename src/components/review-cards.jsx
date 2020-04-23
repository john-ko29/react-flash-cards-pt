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
    this.displayReviewCard = this.displayReviewCard.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.setActiveCard(0);
  }

  nextCard() {
    this.setState(card => ({
      index: this.state.index + 1
    }), () => {
      this.props.setActiveCard(this.state.index % this.props.cards.length);
    });
  }

  previousCard() {
    if (this.state.index > 0) {
      this.setState(card => ({
        index: this.state.index - 1
      }), () => {
        this.props.setActiveCard(this.state.index % this.props.cards.length);
      });
    } else {
      this.setState(card => ({
        index: this.state.index + this.props.cards.length - 1
      }), () => {
        this.props.setActiveCard(this.state.index % this.props.cards.length);
      });
    }

  }

  handleClick() {
    this.setState(card => ({
      isFront: !card.isFront
    }));
  }

  displayReviewCard() {
    let card = '';
    let text = '';
    if (this.state.isFront && this.props.activeCard !== null) {
      card = 'bg-dark text-white  justify-content-between d-flex align-items-center';
      text = this.props.activeCard.question;
    } else if (!this.state.isFront && this.props.activeCard !== null) {
      card = 'bg-secondary text-white text-center justify-content-between d-flex align-items-center';
      text = this.props.activeCard.answer;
    }
    return (
      <div className={card}>
        <i className='fas fa-angle-left' onClick={this.previousCard}></i>
        <h1 className="w-75 p-3 text-center" onClick={this.handleClick}>{text}</h1>
        <i className='fas fa-angle-right' onClick={this.nextCard}></i>
      </div>
    );
  }

  render() {
    const card = this.displayReviewCard();
    return (
      <div>
        <h1 className='text-center'>Review Cards</h1>
        {card}
      </div>
    );
  }
}

export default ReviewCards;
