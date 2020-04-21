import React from 'react';

function ViewCards(props) {
  console.log(props);
  const flashCards = props.cards.map((card, index) => {
    return (
      <div key={index}>
        <div className="card p-3">
          <blockquote className="blockquote bg-dark text-white mb-0 card-body">
            <header className="blockquote-header">
              Question:
            </header>
            <p>{card.question}</p>
          </blockquote>
          <blockquote className="blockquote bg-secondary text-white mb-0 card-body">
            <header className="blockquote-header">
              Answer:
            </header>
            <p>{card.answer}</p>
          </blockquote>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1 className='text-center'>My Cards</h1>
      {flashCards}
    </div>
  );
}

export default ViewCards;
