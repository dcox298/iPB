import * as React from 'react';
import styles from './PlayPickleBall.module.scss';
import type { IPlayPickleBallProps } from './IPlayPickleBallProps';
import { Stack } from '@fluentui/react/lib/Stack';
import { Label, Panel, PanelType, PrimaryButton } from '@fluentui/react';

interface IPlayPickleBallState {
  isOpen:boolean;
}

export default class PlayPickleBall extends React.Component<IPlayPickleBallProps, IPlayPickleBallState> {

  constructor(props:IPlayPickleBallProps){
    super(props);
    this.state ={
      isOpen:false
    }
    this._OpenPanel = this._OpenPanel.bind(this);
    this._ClosePanel = this._ClosePanel.bind(this);
  }
  private _OpenPanel():void {
    this.setState({
      isOpen:true
    })
  }
  private _ClosePanel():void {
    this.setState({
      isOpen:false
    })
  }
  public render(): React.ReactElement<IPlayPickleBallProps> {
    const {
      //description,
      //isDarkTheme,
      //environmentMessage,
      hasTeamsContext,
      //userDisplayName
    } = this.props;

    return (
      <section className={`${styles.playPickleBall} ${hasTeamsContext ? styles.teams : ''}`}>
        <Stack>
          <Stack.Item>
            <Stack horizontal >
              <Stack.Item grow={3} align='start'>
                <Label>interface PB</Label>
              </Stack.Item>
              <Stack.Item grow={1} align='end'>
                <PrimaryButton iconProps={{iconName:'settings'}} />
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <PrimaryButton text='New Game' onClick={this._OpenPanel}/>
          </Stack.Item>
        </Stack>
        <Panel 
          type={PanelType.smallFluid}
          isOpen={this.state.isOpen}
          onDismiss={this._ClosePanel}
          closeButtonAriaLabel="Close"
        >
          <Stack>hi</Stack>
        </Panel>
      </section>
    );
  }
}
