import * as React from 'react';
import styles from './BasicGame.module.scss';
import type { IBasicGameProps } from './IBasicGameProps';
import { Text, PrimaryButton, Stack } from '@fluentui/react';


export default function BasicGame(props:IBasicGameProps):JSX.Element {

  const [awayScore,setAwayScore] = React.useState(0);
  const [homeScore,setHomeScore] = React.useState(0);
  const [postionA1] = React.useState('Player 3');
  const [postionA2] = React.useState('Player 4');
  const [postionH1] = React.useState('Player 1');
  const [postionH2] = React.useState('Player 2');
  const [servingTeam] = React.useState('HOME');
  const [servingSide] = React.useState('Right');
  const [servingPosition] = React.useState(2);
  const [winingSide,setWiningSide] = React.useState('');

  //happens before render
  if(winingSide!==''){
    //point or no point
    if(winingSide===servingTeam){
      //did someone win?
      let winner:number=winingSide==='HOME'?homeScore:awayScore;
      const loser:number=winingSide==="HOME"?awayScore:homeScore;

      if((winner >= 11) && ( (winner - loser) >= 2 )){
          alert('winner')
      }else{

      }
        //add score
    }
      
    
  }else{
    console.log('New Game');
  }
  
  console.log(postionA1);
  console.log(postionA2);
  console.log(postionH1);
  console.log(postionH2);
  console.log(servingTeam);
  console.log(winingSide);

  return (
    <section className={`${styles.basicGame}`}>
      <Stack>

        <PrimaryButton 
            text='AWAY'
            onClick={()=>{setWiningSide('HOME')}}
        />

        <Stack.Item>
          <Stack horizontal>
            <Stack.Item grow align='center' styles={{root:{textAlign:'center'}}}>
              <Text >Score</Text>
            </Stack.Item>
            <Stack.Item grow align='center' styles={{root:{textAlign:'center'}}}>
              <Text>{awayScore}</Text>
            </Stack.Item>
          </Stack>
        </Stack.Item>

        <Stack.Item>
          <Stack horizontal>
            <Stack.Item grow align='center' styles={{root:{textAlign:'center'}}}>
              <Text>Serving Side</Text>
            </Stack.Item>
            <Stack.Item grow align='center' styles={{root:{textAlign:'center'}}}>
              <Text>{servingSide}</Text>
            </Stack.Item>
          </Stack>
        </Stack.Item>

        <Stack.Item>
          <Stack horizontal>
          <Stack.Item grow align='center' styles={{root:{textAlign:'center'}}}>
              <Text>Server</Text>
            </Stack.Item>
            <Stack.Item grow align='center' styles={{root:{textAlign:'center'}}}>
              <Text>{servingPosition}</Text>
            </Stack.Item>
          </Stack>
        </Stack.Item>

        <Stack.Item>
          <Stack horizontal>
          <Stack.Item grow align='center' styles={{root:{textAlign:'center'}}}>
              <Text>Score</Text>
            </Stack.Item>
            <Stack.Item grow align='center' styles={{root:{textAlign:'center'}}}>
              <Text>{homeScore}</Text>
            </Stack.Item>
          </Stack>
        </Stack.Item>

        <PrimaryButton text='HOME' onClick={()=>{setWiningSide('HOME')}}/>
      </Stack>
    </section>
  )
}
