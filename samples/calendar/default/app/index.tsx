import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { CalendarComponent, ChangedEventArgs } from '@syncfusion/ej2-react-calendars';
import { SampleBase } from './sample-base';


export class Default extends SampleBase<{}, {}> {

  render() {
    return (
      <div className='control-pane'>
        <div className='control-section'>
          <div className='calendar-control-section'>
          <CalendarComponent change={onchange} ></CalendarComponent>
           <label id='date_label'>Selected Value:</label>
          </div>         
        </div>
      </div>
    )
  }
}
function onchange(args: ChangedEventArgs): void {
  (document.getElementById('date_label') as HTMLElement).textContent = 'Selected Value: ' + args.value.toLocaleDateString();
}
ReactDOM.render(<Default />, document.getElementById('sample'));