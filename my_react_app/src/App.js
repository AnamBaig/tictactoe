import React from 'react';
import './App.css';
import Cell from './Cell.js';

const player1 = "X"
const player2 = "O"

function App() {
  const [tiles, setTiles] = React.useState(["", "", "", "", "", "", "", "", ""])
  const [playerTurn, setPlayerTurn] = React.useState(player1)
  const [endGame, setEndGame] = React.useState(false)
  const [strike, setStrike] = React.useState(false) //to get the strike line to actually appear (we have a && for it below.)
  const [strikeClass, setStrikeClass] = React.useState() //to set the css styling. this will keep changing so needed it in state. 

  const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
  ];

  React.useEffect(() => {
    checkWin(tiles) //remember to pass in tiles here/anytime function is called separately. 
  }, [tiles])


  function checkWin(tiles) {
    const fullTiles = tiles.every(tile => tile !== "")
    for (let combo of winningCombos) { //for loop iterates over each winning combination (combo) which contains three 
      //indices/indexes of the tiles array. these indices represent positions that form a winning row/column/diagonal. 
      const [a, b, c] = combo; //destructuring the combination: this line grabs three positions e.g. 0, 1, 2 for the top row. 

      if (tiles[a] !== "" && tiles[a] === tiles[b] && tiles[a] === tiles[c]){ //if statement is checking for a win. if tiles at positions
        //a b or c have the same non-empty value, player has won. 
        setStrike(true)
        if (combo.includes(0) && combo.includes(1) && combo.includes(2)) {
          setStrikeClass("strike-row-0")
          console.log("game won") 
          setEndGame(true) 
        } else if (combo.includes(3) && combo.includes(4) && combo.includes(5)) {
          setStrikeClass("strike-row-1")
          console.log("game won") 
          setEndGame(true)
        } else if (combo.includes(6) && combo.includes(7) && combo.includes(8)){
          setStrikeClass("strike-row-2")
          console.log("game won") 
          setEndGame(true)
        } else if (combo.includes(0) && combo.includes(3) && combo.includes(6)) {
          setStrikeClass("strike-col-0")
          console.log("game won") 
          setEndGame(true)
        } else if (combo.includes(1) && combo.includes(4) && combo.includes(7)) {
          setStrikeClass("strike-col-1")
          console.log("game won") 
          setEndGame(true)
        } else if (combo.includes(2) && combo.includes(5) && combo.includes(8)) {
          setStrikeClass("strike-col-2")
          console.log("game won") 
          setEndGame(true)
        } else if (combo.includes(0) && combo.includes(4) && combo.includes(8)) {
          setStrikeClass("strike-diag-0")
          console.log("game won") 
          setEndGame(true)
        } else if (combo.includes(2) && combo.includes(4) && combo.includes(6)) {
          setStrikeClass("strike-diag-1")
          console.log("game won") 
          setEndGame(true)
        }
      } else if (fullTiles === true){ 
        (console.log("game drawn"))//(tiles[a] !== "" && tiles[a] !== tiles[b] && tiles[a] !== tiles[c]) {
        setEndGame(true)
        setStrike(false)

      }
    }
    return null;
  }

  function handleClick(index) {
    if(tiles[index] !== "") {
      return ;
    }

    if (endGame === true) {
      return ;
    }

    const newTiles = [...tiles]
    newTiles[index] = playerTurn
    setTiles(newTiles)
    
    if(playerTurn === player1) {
      setPlayerTurn(player2)
    } else  {
      setPlayerTurn(player1)
    }
  }

  function handleNewGame() {
    setTiles(prevTiles => {
      return prevTiles.map((tile) => {
        return prevTiles[tile] = ""
      })
    })
    setEndGame(false)
    setStrikeClass()
    setStrike(false)
  }
  

return (
  <div className="grid-container">
    {strike && <div className={`strike ${strikeClass}`}></div>} {/**this doesnt disrupt flow of grid layout bc the div is positioned absolutely,
     * this ensures it doesnt disrupt layout of grid or cell components, as it is -- taken out of the normal document flow -- */}
    <Cell value={tiles[0]} 
          handleClick={()=> handleClick(0)} 
          endGame={endGame}
          player={playerTurn} 
          player1={player1} 
          player2={player2}/>
    <Cell value={tiles[1]} 
          handleClick={()=> handleClick(1)} 
          endGame={endGame}
          player={playerTurn} 
          player1={player1} 
          player2={player2}/>
    <Cell value={tiles[2]} 
          handleClick={()=> handleClick(2)} 
          endGame={endGame}
          player={playerTurn} 
          player1={player1} 
          player2={player2}/>
    <Cell value={tiles[3]} 
          handleClick={()=> handleClick(3)} 
          endGame={endGame}
          player={playerTurn} 
          player1={player1} 
          player2={player2}/>
    <Cell value={tiles[4]} 
          handleClick={()=> handleClick(4)} 
          endGame={endGame}
          player={playerTurn} 
          player1={player1} 
          player2={player2}/>
    <Cell value={tiles[5]} 
          handleClick={()=> handleClick(5)}
          endGame={endGame} 
          player={playerTurn} 
          player1={player1} 
          player2={player2}/>
    <Cell value={tiles[6]} 
          handleClick={()=> handleClick(6)} 
          endGame={endGame}
          player={playerTurn} 
          player1={player1} 
          player2={player2}/>
    <Cell value={tiles[7]} 
          handleClick={()=> handleClick(7)} 
          endGame={endGame}
          player={playerTurn} 
          player1={player1} 
          player2={player2}/>
    <Cell value={tiles[8]} 
          handleClick={()=> handleClick(8)} 
          endGame={endGame}
          player={playerTurn} 
          player1={player1} 
          player2={player2}/>  

          {endGame && <button onClick={handleNewGame}>Play again?</button>}
    </div>
)
}

export default App;
