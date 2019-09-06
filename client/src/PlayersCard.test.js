import React from 'react';
import ReactDOM from 'react-dom';
import PlayersCard from './PlayersCard';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import App from './App';
import expectExport from 'expect';



test('maps the players info', done => {
    const { getByTestId } = render (<PlayersCard />)
    getByTestId('mapin-function')
    done();
});



