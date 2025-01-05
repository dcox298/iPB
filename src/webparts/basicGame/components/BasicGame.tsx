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
  const [servingTeam] = React.useState('Home');
  const [servingSide] = React.useState('Right');
  const [servingPosition] = React.useState(2);
  const [winingSide,setWiningSide] = React.useState(null);

  React.useEffect(()=>{
    //read what happened
    console.log(postionA1)
    console.log(postionA2)
    console.log(postionH1)
    console.log(postionH2)
    console.log(servingTeam)
    console.log(winingSide)
  })


  return (
    <section className={`${styles.basicGame}`}>
      <Stack>

        <PrimaryButton 
            text='AWAY'
            onClick={()=>setAwayScore(awayScore+1)}
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

        <PrimaryButton 
            text='Home'
            onClick={()=>{setHomeScore(homeScore+1);setWiningSide(this.props.text)}}      
        />

      </Stack>
    </section>
  )
}
