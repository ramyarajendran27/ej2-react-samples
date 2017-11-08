import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { SampleBase } from '../common/sample-base';
import './timepicker-component.css';

let value: Date = new Date();
let interval: number = 60;
let customFormat: string = 'HH:mm';

export class Format extends SampleBase<{}, {}> {
  render() {
    return (
      <div className='control-pane format'>
        <div className='control-section'>
          <div className='timepicker-control-section'>
            <TimePickerComponent value={value} step={interval} format={customFormat}></TimePickerComponent>
          </div>
        </div>
        <div id='description'>
          <p>
            TimePicker provides an option to customize the display format of the time value using the
            <a href="http://ej2.syncfusion.com/react/documentation/timepicker/getting-started.html#setting-the-time-format" target="_blank">format</a>        property. It accepts <a href="https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings"
              target="_blank"> standard </a> &
            <a href="https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings" target="_blank"> custom date and time format strings</a>        as specified in MSDN.
          </p>
          <p> Here, the time value displayed in 24-hour format with <code> 60 </code> minute step interval. To know more about custom time formatting, refer the
              <a href="http://ej2.syncfusion.com/react/documentation/base/internationalization.html#custom-formats" target="_blank"> Parsing and formatting</a>        section. By default, TimePicker component is formatted with `en` (English) culture.
          </p>
          <p>More information about TimePicker and it's configuration can be found in the
              <a href="http://ej2.syncfusion.com/react/documentation/timepicker/getting-started.html#create-a-simple-timepicker" target="_blank"> documentation section</a>.</p>
        </div>
      </div>
    )
  }
}