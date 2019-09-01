import React from 'react';
import card1 from '../../assets/images/cards/1.jpg';
import card2 from '../../assets/images/cards/2.jpg';
import card3 from '../../assets/images/cards/3.jpg';

export default class Cards extends React.Component {

    state = {
        cards: [
            { id: 'card1', cardImage: card1, cardTitle: 'Drop Shipping', cardText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.' },
            { id: 'card2', cardImage: card2, cardTitle: 'Electronic Devices', cardText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.' },
            { id: 'card3', cardImage: card3, cardTitle: 'Cargo Services', cardText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.' }
        ]
    }

    render() {
        return (
            <div>
                <div className="row">

                    {
                        this.state.cards.map(function (card) {
                            return <Card key={card.id} cardData={card} />
                        })
                    }

                    {/* <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={card1} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{this.state.cards[0].cardTitle}</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        );
    }
}

class Card extends React.Component {
    render(){
        return (
            <div className="col-md-4 mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src={this.props.cardData.cardImage} alt={this.props.cardData.id} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.cardData.cardTitle}</h4>
                        <p className="card-text">{this.props.cardData.cardText}</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
        )
    }
}
