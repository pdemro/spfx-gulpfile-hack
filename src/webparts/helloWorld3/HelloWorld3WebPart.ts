import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'HelloWorld3WebPartStrings';
import HelloWorld3 from './components/HelloWorld3';
import { IHelloWorld3Props } from './components/IHelloWorld3Props';

export interface IHelloWorld3WebPartProps {
  description: string;
}

export default class HelloWorld3WebPart extends BaseClientSideWebPart<IHelloWorld3WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHelloWorld3Props > = React.createElement(
      HelloWorld3,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
