import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'create-card',
      cards: []
    };
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  setView(location) {
    this.setState({ view: location });
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard addCard={this.addCard} setView={this.setView}/>;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  saveCards() {
    const card = JSON.stringify(this.state.cards);
    localStorage.setItem('flash-cards', card);
  }

  addCard(card) {
    const tempCards = this.state.cards.slice();
    tempCards.push(card);
    this.setState({ cards: tempCards }, () => this.saveCards);
  }

  render() {
    console.log(this.state.cards);
    return (
      <div>
        <Nav setView={this.setView} active={this.state.view}/>
        {this.getView()}
      </div>
    );
  }
}

export default App;
