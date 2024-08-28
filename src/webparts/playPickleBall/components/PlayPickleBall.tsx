import * as React from 'react';
import styles from './PlayPickleBall.module.scss';
import { SPFI } from '@pnp/sp';
import { getSP } from '../pnpjsConfig';
import { Stack, StackItem } from '@fluentui/react/lib/Stack';
import { DefaultButton, DetailsList, Panel, PanelType, PrimaryButton,  } from '@fluentui/react';



export interface IPlayPickleBallProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
}
interface IPlayPickleBallState {
  items:any[];
  isFullScreen:boolean;
}
export default class PlayPickleBall extends React.Component<IPlayPickleBallProps, IPlayPickleBallState> {
  private _sp: SPFI;
  constructor(props:IPlayPickleBallProps){
    super(props);
    this.state={
      items:[],
      isFullScreen:false
    }
    this._sp = getSP();
    this._closeFullScreen=this._closeFullScreen.bind(this);
    this._openFullScreen=this._openFullScreen.bind(this);
  }

  public async componentDidMount(): Promise<void> {
    const spitems:any[]=await this._sp.web.lists.getByTitle('Games').items();
    const items:any[]=[];
    for(const item of spitems){
      items.push({
        Title:item.Title
      })
    }
    this.setState({items:items});
  }
  private _openFullScreen() {
    this.setState({isFullScreen:true});
  }
  private _closeFullScreen() {
    this.setState({isFullScreen:false});
  }
  public render(): React.ReactElement<IPlayPickleBallProps> {
    const {
      hasTeamsContext,
      //userDisplayName
    } = this.props;

    return (
      <section className={`${styles.playPickleBall} ${hasTeamsContext ? styles.teams : ''}`}>
       <Stack>
        <StackItem>
          <PrimaryButton text='New Game' onClick={this._openFullScreen}/>
        </StackItem>
          <Stack.Item>
              <DetailsList 
                items={this.state.items}           
              />
          </Stack.Item>
       </Stack>
       <Panel 
        headerText="Sample panel"
        isOpen={this.state.isFullScreen}
        onDismiss={this._closeFullScreen}
        type={PanelType.smallFluid}
        // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
        closeButtonAriaLabel="Close"
       >
        <Stack>
          <Stack.Item>
            <DefaultButton text='AWAY'/>
          </Stack.Item>
          <StackItem>
            
          </StackItem>
          <Stack.Item>
            <PrimaryButton text='HOME'/>
          </Stack.Item>
        </Stack>
       </Panel>
      </section>
    );
  }
}
