import React, { Component } from 'react';
import logo from './4dd15c9c-2eed-49e9-9db9-69f5d463f0fc_200x200.png';
import styled from 'styled-components';

const Img = styled.img`
    height: 10rem;
    pointer-events: none;
`;

const Header = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
`;

const H1 = styled.h1`
    font-size: 4rem;
    line-height: 8rem;
    fold-weight: bold;
    min-width: 300px;
`;

export default class ExchangeHeader extends Component {
    render() {
        return (
            <Header>
                <Img src={logo} alt="My Logo" />
                <H1>
                    CoinSugbo
                </H1>
            </Header>
        )
    }
}
