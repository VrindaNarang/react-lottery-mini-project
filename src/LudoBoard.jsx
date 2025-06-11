import { useState } from "react";

export default function LudoBoard(){
 let[moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});

 let updateBlue=()=>{
    // console.log(`moves.blue=${moves.blue}`);
    setMoves((prevMoves)=>{
        return {...prevMoves,blue:prevMoves.blue+1}
}); // we spread the object before we pass it as otherwise change will only be reflected in console and not ui
    //as change in only key of object is not enough to change the state for that whole object should change 
     //when new value depends on old use callback function to avoid errors
 };

  
 let updateYellow=()=>{
    setMoves((prevMoves)=>{
        return {...prevMoves,yellow:prevMoves.yellow+1}
}); 
 };

 let updateGreen=()=>{
    setMoves((prevMoves)=>{
        return {...prevMoves,green:prevMoves.green+1}
}); 
 };

 let updateRed=()=>{
    setMoves((prevMoves)=>{
        return {...prevMoves,red:prevMoves.red+1}
}); 
 };
    return(
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves={moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves={moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red moves={moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}