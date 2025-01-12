import * as React from 'react';
import styles from './BasicGame.module.scss';
import type { IBasicGameProps } from './IBasicGameProps';
import { Text, PrimaryButton, Stack, IconButton } from '@fluentui/react';
import { useBasicGame } from '../../../common/hooks/useBasicGame';
import { useWindowSize } from '../../../common/hooks/useWindowSize';


export default function BasicGame(props:IBasicGameProps):JSX.Element {

  const {
    awayScore,homeScore,servingPosition,servingSide,servingTeam,loading,
    setWinner
  } = useBasicGame();

  const windowSize=useWindowSize();

  return (
    <section className={`${styles.basicGame}`}>
      
      <Stack styles={{root:{height:(windowSize.height*.6)}}}>
      <IconButton iconProps={{iconName:'Open'}} />
        <PrimaryButton 
            disabled={loading}
            text='AWAY'
            onClick={()=>{setWinner('AWAY')}}
        />

        <Stack.Item grow>
          <Stack horizontal>
            <Stack.Item grow align='center' styles={{root:{textAlign:'center'}}}>
              <Text >Score</Text>
            </Stack.Item>
            <Stack.Item grow align='center' styles={{root:{textAlign:'center'}}}>
              <Text>{awayScore}</Text>
            </Stack.Item>
          </Stack>
        </Stack.Item>

        <Stack.Item grow>
          <Stack horizontal>
            <Stack.Item grow align='center' styles={{root:{textAlign:'center'}}}>
              <Text>Serve</Text>
            </Stack.Item>
            <Stack.Item grow align='center' styles={{root:{textAlign:'center'}}}>
              <Text>{servingTeam} - {servingSide}</Text>
            </Stack.Item>
          </Stack>
        </Stack.Item>

        <Stack.Item grow>
          <Stack horizontal>
          <Stack.Item grow align='center' styles={{root:{textAlign:'center'}}}>
              <Text>Server</Text>
            </Stack.Item>
            <Stack.Item grow align='center' styles={{root:{textAlign:'center'}}}>
              <Text>{servingPosition}</Text>
            </Stack.Item>
          </Stack>
        </Stack.Item>

        <Stack.Item grow>
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
          
          disabled={loading}
         text='HOME' 
         onClick={()=>{setWinner('HOME')}}/>
      </Stack>
    </section>
  )
}
