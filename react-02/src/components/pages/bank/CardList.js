import React, { Component } from 'react';
import Card from './Card.js';

export class CardList extends Component {

  render() {
    return this.props.accounts.accArr.map((card) => (
      <Card
        key={card.key}
        card={card}
        // accName = {card.accName}
        // startBal = {card.startBal}
        handleWithdraw = {this.props.handleWithdraw}

        handleDeposit = {this.props.handleDeposit}
        handleDelete={this.props.handleDelete}
      />
    ));
  }
}

export default CardList;
