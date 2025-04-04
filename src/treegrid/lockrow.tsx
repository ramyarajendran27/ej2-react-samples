import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Edit, Toolbar } from '@syncfusion/ej2-react-treegrid';
import { sampleData, lockRowDropDownData } from './data';
import { RowDataBoundEventArgs, BeginEditArgs} from '@syncfusion/ej2-react-grids';
import { MultiSelectComponent, CheckBoxSelection } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from '../common/sample-base';
import { PropertyPane } from '../common/property-pane';
import { addClass, removeClass } from '@syncfusion/ej2-base';

const SAMPLE_CSS = `
.disableRow .e-rowcell,
.material .disableRow .e-rowcell{
    color: rgba(0, 0, 0, .38) !important;
  }
.disableRow .e-rowcell,
  body:not([class]) #_gridcontrol .disableRow .e-rowcell,
  .ej2-new #_gridcontrol .disableRow .e-rowcell {
   color: rgba(0, 0, 0, .38) !important;
  }`;
{/* custom code start */}
const SAMPLE1_CSS = `
.disableRow .e-rowcell,
.material-dark .disableRow .e-rowcell{
  color: #757575 !important;
}
.disableRow .e-rowcell,
.material3 .disableRow .e-rowcell{
  color: rgba(0, 0, 0, .38) !important;
}
.disableRow .e-rowcell,
.material3-dark .disableRow .e-rowcell{
  color: #757575 !important;
}
.disableRow .e-rowcell,
.fabric .disableRow .e-rowcell{
  color: #c8c8c8 !important;
}
.disableRow .e-rowcell,
.fabric-dark .disableRow .e-rowcell{
  color: #757575 !important;
}    
.disableRow .e-rowcell,
.bootstrap .disableRow .e-rowcell{
  color: rgba(0, 0, 0, .35) !important;
}
.disableRow .e-rowcell,
.bootstrap-dark .disableRow .e-rowcell{
  color: #757575 !important;
}
.disableRow .e-rowcell,
.bootstrap4 .disableRow .e-rowcell{
  color: rgba(0, 0, 0, .35) !important;
}
.disableRow .e-rowcell,
.bootstrap5 .disableRow .e-rowcell{
  color: rgba(0, 0, 0, .35) !important;
}
.disableRow .e-rowcell,
.bootstrap5\.3 .disableRow .e-rowcell{
  color: rgba(0, 0, 0, .35) !important;
}
.disableRow .e-rowcell,
.bootstrap5_3 .disableRow .e-rowcell{
  color: rgba(0, 0, 0, .35) !important;
}
.disableRow .e-rowcell,
.fluent .disableRow .e-rowcell{
  color: rgba(0, 0, 0, .35) !important;
}
.disableRow .e-rowcell,
.fluent2 .disableRow .e-rowcell{
  color: rgba(0, 0, 0, .35) !important;
}
.disableRow .e-rowcell,
.bootstrap5-dark .disableRow .e-rowcell{
  color: #757575 !important;
}
.disableRow .e-rowcell,
.bootstrap5\.3-dark .disableRow .e-rowcell{
  color: #757575 !important;
}
.disableRow .e-rowcell,
.bootstrap5_3-dark .disableRow .e-rowcell{
  color: #757575 !important;
}
.disableRow .e-rowcell,
.fluent-dark .disableRow .e-rowcell{
  color: #757575 !important;
}
.disableRow .e-rowcell,
 .fluent2-dark .disableRow .e-rowcell{
  color: #757575 !important;
}
.disableRow .e-rowcell,
.fluent2-highcontrast .disableRow .e-rowcell{
  color: #757575 !important;
}
.disableRow .e-rowcell,
.highcontrast .disableRow .e-rowcell{
  color: #757575 !important;
}
.disableRow .e-rowcell,
.tailwind .disableRow .e-rowcell,
.tailwind3 .disableRow .e-rowcell {
  color: #757575 !important;
}
.disableRow .e-rowcell,
.tailwind-dark .disableRow .e-rowcell,
.tailwind3-dark .disableRow .e-rowcell{
  color: #757575 !important;
}
.e-multiselect {
  padding-left : 0px !important;
  padding-top: 0px !important;
}
  @media (min-width: 990px) and (max-width: 1300px){
  .lockrow-propertypanel {
  padding-left:5px;
  }
  }
`;
{/* custom code end */}
export class LockRow extends SampleBase<{}, {}> {

  public treegridObj: TreeGridComponent;
  public multiselectObj: MultiSelectComponent;

  public toolbarOptions: any = ['Edit', 'Update', 'Cancel'];
  public editSettings: any = { allowEditing: true, mode: 'Row', newRowPosition: 'Child' };
  public editparams: any = { params: { popupHeight: '300px' } };
  public validationRule: Object = { required: true, number: true };
  public validationRule1: Object = { required: true};
  public validationRule2: Object = { date: ['M/d/yyyy', 'Please enter a valid date']};
  public validationRule3: Object = { number: true, min: 0};
  public editparams2: any = { params: { format: 'n' } };
  public editparams3: any = { params: { format: 'M/d/yyyy' } };
  public pageSettings: Object = { pageSize: 2, pageSizeMode: 'Root'};
  private rowValues: number[] = [2,6];

  private rowDataBound(args: RowDataBoundEventArgs): void {
    let key: string = 'taskID';
    if ((this.multiselectObj.value as Object[]).indexOf(args.data[key]) !== -1) {
      addClass([args.row], 'disableRow');
    } else {
      removeClass([args.row], 'disableRow');
    }
  }

  private beginEdit(args: BeginEditArgs): void {
    let key: string = 'taskID';
    if ((this.multiselectObj.value as Object[]).indexOf(args.rowData[key]) !== -1) {
      args.cancel = true;
    }
  }

  private select(): void {
    this.treegridObj.refresh();
  }

  private removed(): void {
    this.treegridObj.refresh();
  }

   render() {
    return (
      <div className='control-pane' role="control" aria-label="Tree Grid Control">
        <style>
          {SAMPLE_CSS}
        </style>
        {/* custom code start */}
        <style>
          {SAMPLE1_CSS}
        </style>
        {/* custom code end */}
        <div className='control-section'>
          <div className = 'col-md-9'> 
           <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping= 'subtasks' height='350' allowPaging={true}
            editSettings={this.editSettings} pageSettings={this.pageSettings} toolbar={this.toolbarOptions}
            enableHover={false} rowDataBound={this.rowDataBound.bind(this)} ref={treegrid=> this.treegridObj = treegrid}
            beginEdit={this.beginEdit.bind(this)}>
            <ColumnsDirective>
              <ColumnDirective field='taskID' headerText='Task ID' width='100' textAlign='Right' validationRules={this.validationRule}
                isPrimaryKey={true}></ColumnDirective>
              <ColumnDirective field='taskName' headerText='Task Name' width='220' validationRules={this.validationRule1}></ColumnDirective>
              <ColumnDirective field='startDate' headerText='Start Date' width='130' textAlign='Right'
                editType='datepickeredit' format='yMd' edit={this.editparams3} validationRules={this.validationRule2} />
              <ColumnDirective field='duration' headerText='Duration' width='140' editType='numericedit' textAlign='Right'
                validationRules={this.validationRule3} edit={this.editparams2} />
            </ColumnsDirective>
            <Inject services={[Page, Edit, Toolbar]}/>
          </TreeGridComponent>
        </div>
        <div className='col-md-3 property-section lockrow-propertypanel'>
          <PropertyPane title='Properties' aria-label="Property Pane">
              <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
                <tbody>
                  <tr style={{ height: '50px' }}>
                    <td>
                      <div style={{ paddingLeft: '10px' }}> Disable Rows </div>
                    </td>
                    <td style={{ width: '60%' }}>
                      <div>
                        <MultiSelectComponent width="150px" id="lockrows" mode="CheckBox" value={this.rowValues}
                          dataSource={lockRowDropDownData} showDropDownIcon={true} popupHeight='350px'
                          select={this.select.bind(this)} removed={this.removed.bind(this)}
                          ref={multiselect => this.multiselectObj = multiselect} aria-label="Select Rows to Disable">
                          <Inject services={[CheckBoxSelection]}></Inject>
                        </MultiSelectComponent>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
          </PropertyPane>
         </div>
        </div>
        <div id="action-description">
          <p>
            This samples demonstrates the way of preventing editing for certain row and disable the locked rows
              to differentiate edit and non-editable rows in Tree Grid.
          </p>
        </div>
        <div id="description">
          <p>
            The Tree Grid supports CRUD operations. This CRUD operations can be configured in Tree Grid using <code>editSettings</code>.
            Also, it has different modes to manipulate the datasource.
          </p>
          <p> The available modes are,</p>
          <ul>
            <li><code>Row </code></li>
            <li><code>Cell</code></li>
            <li><code>Dialog</code></li>
          </ul>
          <p>
            In this sample, we have provided an option in property panel to prevent editing for certain rows. Using <code>beginEdit</code>
              event of Tree Grid, we prevent the editing for selected Task ID row in the dropdown and disable the corresponding row using
              <code>rowDataBound</code> event of Tree Grid.
          </p>

          <p>Injecting Module:</p>
          <p>Tree Grid features are segregated into individual feature-wise modules. To use editing feature, we need to inject
             <code>Edit</code> module into the <code>services</code>.</p>
          <p>
            More information on the selection configuration can be found in this documentation section.
          </p>

        </div>
      </div>
    )
  }
}
