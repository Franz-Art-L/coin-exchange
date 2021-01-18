import React from 'react'
import PropTypes from 'prop-types';
import styled from'styled-components';

const CoinRow = styled.td`
    border: 1px solid #cccccc;
    width: 20vw;
`;

const CoinRowControls = styled(CoinRow)`
    width: 40vw;
`;

const Button = styled.button`
    font-size: 12px;
    width: 64px;
    margin: 5px 5px 0;
`;

const CoinRowName = styled(CoinRow)`
    width: 24vw;
`;

export default function Coin(props) {
   
   const handleRefresh = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        props.handleRefresh(props.tickerId);
    }

    const handleBuy= (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        props.handleTransaction(true, props.tickerId);
    }

    const handleSell= (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        props.handleTransaction(false, props.tickerId);
    }
    
    return (
        <tr>
            <CoinRowName>{props.name}</CoinRowName>
            <CoinRow>{props.ticker}</CoinRow>
            <CoinRow>${props.price}</CoinRow>
           <CoinRow>{props.showBalance ? props.balance : '-'} </CoinRow>
            <CoinRowControls>
                <form action ="#" method="POST">
                    <Button className="btn btn-info"onClick={handleRefresh}>
                        Refresh
                    </Button>
                    <Button className="btn btn-warning"onClick={handleBuy}>
                        Buy
                    </Button>
                    <Button className="btn btn-danger"onClick={handleSell}>
                        Sell
                    </Button>
                </form>
            </CoinRowControls>
        </tr>
    );
    
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}