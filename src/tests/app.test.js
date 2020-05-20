import React from 'react';
import ReactDOM from 'react-dom';
import Board from '../components/Board.js';
import CloseMessage from '../components/CloseMessage.js';
import InstanceWin from '../components/InstanceWin.js';
import ResetGame from '../components/ResetGame.js';
import Square from '../components/Square.js';
import StepCounter from '../components/InstanceWin.js';
import VictoryAndRestart from '../components/VictoryAndRestart.js';
import TitleMessage from '../components/TitleMessage.js';

import makeMove from '../HelperFunction/makeMove.js';
import randomGeneration from '../HelperFunction/randomGeneration.js';
import toggleSquare from '../HelperFunction/toggleSquare.js';
import winCheck from '../HelperFunction/winCheck.js';

test('Render Board', () => {
    const testBoard = Array(25).fill("null");

    const div = document.createElement('div');
    ReactDOM.render(<Board board={testBoard} />, div);
});

test('Render TitleMessage', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TitleMessage />, div);
});

test('Render CloseMessage', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CloseMessage />, div);
});

test('Render InstanceWin', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InstanceWin />, div);
});

test('Render ResetGame', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ResetGame />, div);
});

test('Render Square', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Square />, div);
});

test('Render StepCounter', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StepCounter />, div);
});

test('Render VictoryAndRestart', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VictoryAndRestart />, div);
});

test('Test makeMove', () => {
    let testBoard = Array(25).fill("white");
    let whiteBoard = Array(25).fill("white");
    testBoard[0] = "black";
    testBoard[1] = "black";
    testBoard[5] = "black";

    expect(makeMove(testBoard, 0)).toEqual(whiteBoard);
});

test('Test randomGeneration', () => {
    const testBoard = randomGeneration();

    expect(testBoard).toContain('white');
    expect(testBoard).toContain('black');
});

test('Test toggleSquare', () => {
    expect(toggleSquare("white")).toEqual("black");
    expect(toggleSquare("black")).toEqual("white");
});

test('Test winCheck', () => {
    let blackBoard = Array(25).fill("black");
    let notBlackBoard = Array(25).fill("black");
    notBlackBoard[0] = "white"; 

    expect(winCheck(notBlackBoard)).toEqual("false");
    expect(winCheck(blackBoard)).toEqual("true");
});