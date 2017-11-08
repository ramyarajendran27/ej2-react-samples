import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { SampleBase } from '../common/sample-base';
import './toolbar.component.css'

export class Popup extends SampleBase<{}, {}> {

  render () {
    return (
      <div className = 'control-pane'>
        <div className='control-section'>
          <div className= 'control toolbar-sample'  style = {{margin: '25px 0' }}>
          {/* Render the Toolbar Component with Popup mode */}
          <ToolbarComponent overflowMode = 'Popup'>
             <ItemsDirective>
                <ItemDirective prefixIcon = 'e-cut-icon tb-icons'  tooltipText = 'Cut' text = 'Cut' 
                showTextOn = 'Overflow' overflow ='Show' />
                <ItemDirective prefixIcon = 'e-copy-icon tb-icons'  tooltipText = 'Copy'  showTextOn = 'Overflow' overflow ='Show'/>
                <ItemDirective prefixIcon = 'e-paste-icon tb-icons'  tooltipText = 'Paste'  showTextOn = 'Overflow' overflow ='Show'/>
                <ItemDirective type = 'Separator'/>
                <ItemDirective prefixIcon = 'e-bold-icon tb-icons'  tooltipText = 'Bold' text = 'Bold'  showTextOn = 'Overflow' overflow ='Show'/>
                <ItemDirective prefixIcon = 'e-underline-icon tb-icons'  tooltipText = 'Underline' text = 'Underline' 
                showTextOn = 'Overflow' overflow ='Show'/>
                <ItemDirective prefixIcon = 'e-italic-icon tb-icons'  tooltipText = 'Italic' text = 'Italic'  showTextOn = 'Overflow' overflow ='Show'/>
                <ItemDirective type = 'Separator'/>
                <ItemDirective prefixIcon = 'e-bullets-icon tb-icons'  tooltipText = 'Bullets'  overflow ='Show' text = 'Bullets'/>
                <ItemDirective prefixIcon = 'e-numbering-icon tb-icons'  tooltipText = 'Numbering'  overflow ='Show' text = 'Numbering'/>
                <ItemDirective type = 'Separator'/>
                <ItemDirective prefixIcon = 'e-undo-icon tb-icons'  tooltipText = 'Undo'  text = 'Undo'/>
                <ItemDirective prefixIcon = 'e-redo-icon tb-icons'  tooltipText = 'Redo'  text = 'Redo'/>
                <ItemDirective type = 'Separator'/>
                <ItemDirective prefixIcon = 'e-alignleft-icon tb-icons'  tooltipText = 'Align_Left' text = 'Left'
                 showTextOn = 'Overflow' overflow ='Show'/>
                <ItemDirective prefixIcon = 'e-alignright-icon tb-icons'  tooltipText = 'Align_Right' text = 'Right'
                showTextOn = 'Overflow' overflow ='Show'/>
                <ItemDirective prefixIcon = 'e-aligncenter-icon tb-icons'  tooltipText = 'Align_Center' text = 'Center'
                showTextOn = 'Overflow' overflow ='Show'/>
                <ItemDirective prefixIcon = 'e-alignjustify-icon tb-icons'  tooltipText = 'Align_Justify' text = 'justify'
                showTextOn = 'Overflow' overflow ='Show'/>
                <ItemDirective type = 'Separator'/>
                <ItemDirective prefixIcon = 'e-radar-icon tb-icons' text = 'Radar' tooltipText = 'Radar Chart' 
                showTextOn = 'Overflow'/>
                <ItemDirective prefixIcon = 'e-line-icon tb-icons' text = 'Line' tooltipText = 'Line Chart' showTextOn = 'Overflow'/>
                <ItemDirective prefixIcon = 'e-doughnut-icon tb-icons' text = 'Doughnut' tooltipText = 'Doughnut Chart' 
                showTextOn = 'Overflow'/>
                <ItemDirective prefixIcon = 'e-bubble-icon tb-icons' text = 'Bubble' tooltipText = 'Bubble Chart' showTextOn = 'Overflow'/>
                <ItemDirective prefixIcon = 'e-table-icon tb-icons' text = 'Table' tooltipText = 'Table Chart' showTextOn = 'Overflow'/>
                <ItemDirective prefixIcon = 'e-picture-icon tb-icons' text = 'Picture' tooltipText = 'Picture Chart' 
                showTextOn = 'Overflow'/>
                <ItemDirective prefixIcon = 'e-design-icon tb-icons' text = 'Design' tooltipText = 'Design Chart' showTextOn = 'Overflow'/>
             </ItemsDirective>
          </ToolbarComponent>
         </div>
        </div>
        <div id="action-description">
        <p>
         This sample demonstrates the Popup mode in the <code>Toolbar</code>. Click the drop-down icon to open the <code>popup</code> and see the hidden commands of the Toolbar.
        </p>
     </div>
        <div id="description">
          <p>
            Popup mode display can be enabled to view primary priority items in toolbar and secondary priority items in the popup. Popup
        will be shown when content exceeds the available viewing area.
    </p>
          <br>
          </br>
          <p>
            You can set priority to toolbar item using <strong><code> <a target="_blank" className="code"
              href="http://ej2.syncfusion.com/documentation/toolbar/api-item.html#overflow-string"> overflow</a></code> </strong>        property. Possible values are as follows,
    </p>
          <table style={{ width: "100%" }}>
            <tr>
              <th><strong>Overflow</strong></th>
              <th><strong>Description</strong></th>
            </tr>
            <tr>
              <td><code>Show</code> </td>
              <td>To display the commands in toolbar with primary priority.</td>
            </tr>
            <tr>
              <td><code>Hide</code> </td>
              <td>To display the commands in popup with secondary priority.</td>
            </tr>
            <tr>
              <td><code>None (default) </code></td>
              <td>To display the commands with normal order without any priority.</td>
            </tr>
          </table>
        </div>

      </div>
    );
  }
}