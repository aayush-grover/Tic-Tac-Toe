import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor()
  {
    super()
    this.state={
      first_turn:"X",
      squares:["","","","","","","","",""]
    }
  }
  squareClicked(index){
    var first_turn=this.state.first_turn;
    var squares=this.state.squares;
   //  console.log("index"+index);
    squares[index]=first_turn;
  //  console.log("ex"+squares[index]);
   

   let winning_strategies = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6],
   ]
   var f=1;
   for(let i=0;i<winning_strategies.length;i++)
   {
     let win_combo=winning_strategies[i];
     //console.log("index"+win_combo[0]+win_combo[1]+win_combo[2]);
    let a= win_combo[0];
    let b=win_combo[1];
    let c=win_combo[2];
     if(squares[a]!="" &&squares[a] == squares[b] && squares[b] == squares[c])
     {
        alert('Hurray !!! Player '+first_turn+' has won the game :)');
          f=0;
       break;
     }
   }
    if(f==0)
    {
      squares=["","","","","","","","",""]
    }
   first_turn = (first_turn=="X") ? "O" :"X";
   // console.log("ind"+first_turn);

    this.setState({
      first_turn:first_turn,
      squares : squares,
    })
  }
  render(){
  return (
    <div className="App">
      <h1>TIC TAC TOE</h1>
      <div className="board">
        {/* <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div> */}
        {this.state.squares.map((square,index) =>{
          return(<div onClick={() => this.squareClicked(index)} className="square"><h3 className="square_symbol">{square}</h3></div>)
        })}
      </div>
    </div>
  );
  }
}

export default App;
