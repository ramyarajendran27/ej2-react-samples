import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './format-style.css';
import { DateTimePickerComponent, RenderDayCellEventArgs } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent, ChangeEventArgs, MultiSelectComponent, CheckBoxSelection, Inject } from '@syncfusion/ej2-react-dropdowns';
import { FloatLabelType } from '@syncfusion/ej2-react-inputs';
import { SampleBase } from '../common/sample-base';
import { PropertyPane } from '../common/property-pane';

let dateValue: Date = new Date();
export class Dateformat extends SampleBase<{}, {}> {
  private datetimepickerInstance: DateTimePickerComponent;
  private listObj: DropDownListComponent;
  private inputFormatInstance: MultiSelectComponent;
  private inputFormats: string[] = ['dd/MM/yyyy HH:mm', 'yyyyMMdd HH:mm'];
  private dataTypes: { [key: string]: Object }[] = [
    { value: 'dd-MMM-yy hh:mm a' },
    { value: 'yyyy-MM-dd HH:mm' },
    { value: 'dd-MMMM HH:mm' },
  ];
  private inputFormatData: { text: string; value: string }[] = [
    { text: 'dd/MM/yyyy HH:mm', value: 'dd/MM/yyyy HH:mm' },
    { text: 'ddMMMyy HH:mm', value: 'ddMMMyy HH:mm' },
    { text: 'yyyyMMdd HH:mm', value: 'yyyyMMdd HH:mm' },
    { text: 'dd.MM.yy HH:mm', value: 'dd.MM.yy HH:mm' },
    { text: 'MM/dd/yyyy HH:mm', value: 'MM/dd/yyyy HH:mm' },
    { text: 'yyyy/MMM/dd HH:mm', value: 'yyyy/MMM/dd HH:mm' },
    { text: 'dd-MM-yyyy HH:mm', value: 'dd-MM-yyyy HH:mm' },
  ];
  private fields: object = { value: 'value' };
  private checkFields: Object = { text: 'text', value: 'value' };
  public waterMark: string = 'Format';
  public index: number = 0;
  /*Apply selected format to the component*/
  public onChange(): void {
    let format: any = this.listObj.value;
    this.datetimepickerInstance.format = format;
  }
  public onChangeInputFormat(args: any) {
    this.datetimepickerInstance.inputFormats = args.value;
  }

  render() {
    return (
      <div className='control-pane'>
        <div className='control-section row'>
          <div className='col-lg-8'>
            <div className='datetimepicker-control-section'>
              <DateTimePickerComponent format='dd-MMM-yy hh:mm a'
                ref={calendar => this.datetimepickerInstance = calendar} value={dateValue} inputFormats={this.inputFormats}></DateTimePickerComponent>
            </div>
          </div>
          <div id="format" className='col-lg-4 property-section' style={{ width: '250px' }}>
            <div className="property-panel-header">Properties</div>
            <div>
              <label className='example-label'>Choose a display format</label>
              <DropDownListComponent id="dateFormats" dataSource={this.dataTypes} fields={this.fields} index={this.index} ref={(dropdownlist) => { this.listObj = dropdownlist }} placeholder={this.waterMark} change={this.onChange.bind(this)}>
              </DropDownListComponent>
            </div>
          </div>
          <div id="format" className='col-lg-4 property-section' style={{ width: '250px' }}>
            <div>
              <label className="example-label" style={{ marginTop: '40px' }}>Choose input formats</label>
              <MultiSelectComponent id="inputFormatsDatePicker" ref={multiselect => this.inputFormatInstance = multiselect} dataSource={this.inputFormatData}
                fields={this.checkFields} placeholder="e.g. MM/dd/yyyy" value={this.inputFormats} mode="CheckBox" showSelectAll={true} showDropDownIcon={true}
                enableSelectionOrder={false} change={this.onChangeInputFormat}>
                <Inject services={[CheckBoxSelection]} />
              </MultiSelectComponent>
            </div>
          </div>
        </div>
        <div id="action-description">
          <p>
            In this sample, the DateTimePicker has been configured with the
            <code>dd-MMM-yy hh:mm a</code> date time format.
            To change this current date time format, go to the properties panel at the right side and select a date format from the dropdown options.
            For mobile mode touch the icon at the right side and select a date time format from the dropdown options.
          </p>
        </div>
        <div id='description'>
          <p>
            Format sample illustrates the support of custom date format in the DateTimePicker component by
            using the <code>format</code> property. You can also change the datetime format by selecting it from the format options in the properties
            panel.  By using the <code>timeFormat</code> property to customize the displayed time value in a time popup list.
        </p>
        </div>
      </div>
    )
  }
}
