import * as React from 'react';
import styles from './BasicGame.module.scss';
import type { IBasicGameProps } from './IBasicGameProps';
import { Text, PrimaryButton, Stack } from '@fluentui/react';


export default function BasicGame(props:IBasicGameProps):JSX.Element {
  return (
    <section className={`${styles.basicGame}`}>
      <Stack>
        <PrimaryButton 
            text='AWAY'
        />
        <Stack.Item>
          <Stack horizontal>
            <Stack.Item>
              <Text>Score</Text>
            </Stack.Item>
            <Stack.Item>
              <Text>0</Text>
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <Stack horizontal>
            <Stack.Item>
              <Text>Serve</Text>
            </Stack.Item>
            <Stack.Item>
              <Text>Right</Text>
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <Stack horizontal>
            <Stack.Item>
              <Text>Serve</Text>
            </Stack.Item>
            <Stack.Item>
              <Text>Right</Text>
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <Stack horizontal>
            <Stack.Item>
              <Text>Score</Text>
            </Stack.Item>
            <Stack.Item>
              <Text>0</Text>
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <PrimaryButton 
            text='Home'
        />
      </Stack>
    </section>
  )
}
