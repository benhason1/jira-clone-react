import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, connect } from 'react-redux'
import { bindActionCreators } from "redux";
import Board from './Containers/Board'
import AddTicket from './Containers/AddTicket'

export default function App(props) {


  return (
    <div className="App">
      <Board></Board>
      <AddTicket></AddTicket>
    </div>
  );
}

