import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Group, Sort, Inject } from '@syncfusion/ej2-react-grids';
import { inventoryData } from '../data';
import { SampleBase } from './sample-base';

export class Grouping extends SampleBase<{}, {}> {

    public groupOptions: Object = { showGroupedColumn: false, columns: ['Country'] };
    render() {
        return (
            <div className='control-pane'>
                <div className='control-section'>
                    <GridComponent dataSource={inventoryData} allowPaging={true} pageSettings={{ pageSize: 9 }} allowGrouping={true} groupSettings={this.groupOptions} allowSorting={true} height="320">
                        <ColumnsDirective>
                            <ColumnDirective field='Inventor' headerText='Inventor Name' width='180' ></ColumnDirective>
                            <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' width='220' textAlign='right'></ColumnDirective>
                            <ColumnDirective field='Country' headerText='Country' width='140' />
                            <ColumnDirective field='Active' headerText='Active' width='120' />
                            <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='200'></ColumnDirective>
                        </ColumnsDirective>
                        <Inject services={[Page, Group, Sort]} />
                    </GridComponent>
                    <div className="e-dsalign">Source:
                    <a href="https://en.wikipedia.org/wiki/List_of_prolific_inventors" target='_blank'>Wikipedia: List of Prolific inventors</a>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Grouping />, document.getElementById('sample'));