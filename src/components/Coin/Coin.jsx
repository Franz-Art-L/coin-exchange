import React from 'react'
import PropTypes from 'prop-types';
import styled from'styled-components';

const CoinRow = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default function Coin (props) {
   
   const handleClick= (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();

        props.handleRefresh(props.ticker);

    }
    
    return (
        <tr>
            <CoinRow>{props.name}</CoinRow>
            <CoinRow>{props.ticker}</CoinRow>
            <CoinRow>${props.price}</CoinRow>
            {props.showBalance ? <CoinRow>{props.balance} </CoinRow> : null}
            <CoinRow>
                <form action ="#" method="POST">
                    <button onClick={handleClick}>Refresh</button>
                </form>
            </CoinRow>
        </tr>
    );
    
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}