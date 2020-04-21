import React from 'react';

class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFront: true
    };
  }

  componentDidMount() {
    this.props.setActiveCard(0);
  }

  render() {
    return (
      <h1 className='text-center'>Review Cards</h1>
    );
  }
}

export default ReviewCards;
