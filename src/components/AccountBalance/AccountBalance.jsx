import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 3rem;
`;

const Balance = styled.div`
    min-widtth: 250px;
    margin: 0.5rem 0 0 2.5rem;
    font-size: 1.5em;
    vertical-align: middle;
    text-align: center;
`;

const Button = styled.button`
    margin: 0 8px;
`;

const BalanceToggleButton = styled(Button)`
    width: 150px;
`;

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});


    
    