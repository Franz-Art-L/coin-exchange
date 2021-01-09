import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from'styled-components';

const CoinRow = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default class Coin extends Component {
   handleClick= (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();

        this.props.handleRefresh(this.props.ticker);

    }
    render( ) {
        return (
            <tr>
                <CoinRow>{this.props.name}</CoinRow>
                <CoinRow>{this.props.ticker}</CoinRow>
                <CoinRow>${this.props.price}</CoinRow>
                {this.props.showBalance ? <CoinRow>{this.props.balance} </CoinRow> : null}
                <CoinRow>
                    <form action ="#" method="POST">
                        <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </CoinRow>
            </tr>
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}