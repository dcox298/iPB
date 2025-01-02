import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'BasicGameWebPartStrings';
import BasicGame from './components/BasicGame';
import { IBasicGameProps } from './components/IBasicGameProps';

export interface IBasicGameWebPartProps {

}

export default class BasicGameWebPart extends BaseClientSideWebPart<IBasicGameWebPartProps> {



  public render(): void {
    const element: React.ReactElement<IBasicGameProps> = React.createElement(
      BasicGame,
      {

      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return super.onInit()
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                
              ]
            }
          ]
        }
      ]
    };
  }
}
