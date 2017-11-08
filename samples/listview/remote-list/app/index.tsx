import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { SampleBase } from './sample-base';
import {DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';


export class Remote extends SampleBase<{}, {}> {

    public dataSource: DataManager = new DataManager({
      url: 'http://services.odata.org/V4/Northwind/Northwind.svc',
      adaptor: new ODataV4Adaptor
  });

    public query:Query= new Query().from('Products').select('ProductID,ProductName').take(10);


    private fields: {[key:string]: string} ={
      id: 'ProductID', text: 'ProductName'
    };

  render() {
    return (
      <div className='control-pane'>
        <div className='control-section'>
        <ListViewComponent id='sample-list' dataSource={this.dataSource} fields={this.fields} query={this.query} headerTitle='Products' showHeader={true}></ListViewComponent>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<Remote />, document.getElementById('sample'));