import * as React from "react";

export function useBasicGame(){
    const [awayScore,setAwayScore] = React.useState(0);
    const [homeScore,setHomeScore] = React.useState(0);
    // const [postionA1] = React.useState('Player 3');
    // const [postionA2] = React.useState('Player 4');
    // const [postionH1] = React.useState('Player 1');
    // const [postionH2] = React.useState('Player 2');
    const [servingTeam,setServingTeam] = React.useState('HOME');
    const [servingSide,setServingSide] = React.useState('RIGHT');
    const [servingPosition,setServingPosition] = React.useState(2);
  
    const [winingSide,setWiningSide] = React.useState('');
    const [loading,setloading] = React.useState(false);
  
    function setWinner(team:string):void{
      setWiningSide(team);
      setloading(true);
    };

    //happens before render
    if(winingSide!==''){
      //point or no point
      if(winingSide===servingTeam){
        //did someone win?
        const winner:number=winingSide==='HOME'?homeScore:awayScore;
        const loser:number=winingSide==="HOME"?awayScore:homeScore;
        const setWinner=winingSide==="HOME"?setHomeScore:setAwayScore;
  
        if((winner >= 10) && ( (winner - loser) >= 2 )){
            alert('winner')
        }else{
          setWinner(winner+1);
          setServingSide(servingSide==="RIGHT"?"LEFT":"RIGHT");
        }
          //add score
      }else if(servingPosition===2){
        setServingPosition(1);
        setServingTeam(servingTeam==='HOME'?'AWAY':'HOME');
        setServingSide("RIGHT");
      }else{
        setServingPosition(2);
        setServingSide(servingSide==="RIGHT"?"LEFT":"RIGHT");
      }
        
      setWiningSide('');
      setloading(false);
    }
    
    return {awayScore,homeScore,servingPosition,servingSide,servingTeam,loading,setWinner}
}