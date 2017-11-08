/**
 * Stripline sample
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
    Legend, Category, LineSeries, Tooltip, ILoadedEventArgs, StripLine, ChartTheme
} from '@syncfusion/ej2-react-charts';
import { PropertyPane } from '../common/property-pane';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';
import { SampleBase } from '../common/sample-base';

export let data: any[] = [
    { x: 'Sun', y: 28 }, { x: 'Mon', y: 27 }, { x: 'Tue', y: 33 }, { x: 'Wed', y: 36 },
    { x: 'Thu', y: 28 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 31 }];
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }
    #winter stop {
        stop-color: #4ca1af;
    }

    #winter stop[offset="0"] {
        stop-color: #c4e0e5;
    }

    #winter stop[offset="1"] {
        stop-color: #4ca1af;
    }

    #summer stop {
        stop-color: #ffa751;
    }

    #summer stop[offset="0"] {
        stop-color: #ffe259;
    }

    #summer stop[offset="1"] {
        stop-color: #ffa751;
    }

    #spring stop {
        stop-color: #1d976c;
    }

    #spring stop[offset="0"] {
        stop-color: #93f9b9;
    }

    #spring stop[offset="1"] {
        stop-color: #1d976c;
    }

    #autumn stop {
        stop-color: #603813;
    }

    #autumn stop[offset="0"] {
        stop-color: #b29f94;
    }

    #autumn stop[offset="1"] {
        stop-color: #603813;
    }`;

export class Stripline extends SampleBase<{}, {}> {
    private chartInstance: ChartComponent;
    private dropElement: DropDownListComponent;
    private droplist: { [key: string]: Object }[] = [
        { value: 'Vertical' },
        { value: 'Horizontal' }
    ];
    private loaded: EmitType<ILoadedEventArgs>;
    private change(): void {
        if (this.dropElement.value === 'Vertical') {
            for (let i: number = 0; i <= 4; i++) {
                if (i === 3 || i === 4) { this.chartInstance.primaryYAxis.stripLines[i] = {}; }
                this.chartInstance.primaryYAxis.stripLines[i].visible = false;
                this.chartInstance.primaryXAxis.stripLines[i].visible = true;
            }
        } else {
            for (let i: number = 0; i <= 4; i++) {
                this.chartInstance.primaryYAxis.stripLines[i].visible = true;
                this.chartInstance.primaryXAxis.stripLines[i].visible = false;
            }
        }
        this.chartInstance.refresh();
    };
    render() {
        return (
            <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>

                <svg style={{ height: 0 }}>
                    <defs>
                        <linearGradient id="winter" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0" />
                            <stop offset="1" />
                        </linearGradient>
                        <linearGradient id="summer" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0" />
                            <stop offset="1" />
                        </linearGradient>
                        <linearGradient id="spring" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0" />
                            <stop offset="1" />
                        </linearGradient>
                        <linearGradient id="autumn" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0" />
                            <stop offset="1" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className='control-section row'>
                    <div className='col-md-8'>
                        <ChartComponent id='charts' ref={chart => this.chartInstance = chart}
                            primaryXAxis={{
                                valueType: 'Category', majorGridLines: { width: 0 },
                                stripLines: [
                                    {
                                        start: -1, end: 1.5, text: 'Winter', color: 'url(#winter)',
                                        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
                                        border: { width: 0 }, rotation: -90, visible: true
                                    }, {
                                        start: 1.5, end: 3.5, text: 'Summer', color: 'url(#summer)',
                                        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
                                        border: { width: 0 }, rotation: -90, visible: true
                                    }, {
                                        start: 3.5, end: 4.5, text: 'Spring', color: 'url(#spring)',
                                        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
                                        border: { width: 0 }, rotation: -90, visible: true
                                    }, {
                                        start: 4.5, end: 5.5, text: 'Autumn', color: 'url(#autumn)',
                                        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
                                        border: { width: 0 }, rotation: -90, visible: true
                                    }, {
                                        start: 5.5, end: 7, text: 'Winter', color: 'url(#winter)',
                                        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
                                        border: { width: 0 }, rotation: -90, visible: true
                                    }
                                ]
                            }}
                            load={this.load.bind(this)}
                            primaryYAxis={{
                                minimum: 10, maximum: 40, interval: 5,
                                lineStyle: { color: '#808080' }, labelFormat: '{value} °C', rangePadding: 'None',
                                stripLines: [
                                    {
                                        start: 30, end: 40, text: 'High Temperature', color: '#ff512f', visible: false,
                                        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' }, border: { width: 0 },
                                    }, {
                                        start: 20, end: 30, text: 'Average Temperature', color: '#fc902a', visible: false,
                                        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' }, border: { width: 0 },
                                    }, {
                                        start: 10, end: 20, text: 'Low Temperature', visible: false,
                                        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' }, border: { width: 0 }, color: '#f9d423'
                                    }
                                ]
                            }}
                            tooltip={{
                                enable: true
                            }}
                            legendSettings={{ visible: false }}
                            loaded={this.onChartLoad.bind(this)}
                            title='Weather Report'>
                            <Inject services={[LineSeries, Category, Legend, Tooltip, StripLine]} />
                            <SeriesCollectionDirective>
                                <SeriesDirective dataSource={data} xName='x' yName='y' width={2} fill='white'
                                    type='Line' name='Weather' marker={{ visible: true, width: 10, height: 10, border: { width: 2, color: 'white' }, fill: '#666666' }}>
                                </SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>
                    </div>
                    <div className='col-md-4 property-section'>
                        <PropertyPane title='Properties'>
                            <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
                                <tr style={{ height: '50px' }}>
                                    <td style={{ width: '60%' }}>
                                        <div>StripLine Orientation:</div>
                                    </td>
                                    <td style={{ width: '40%' }}>
                                        <div>
                                            <DropDownListComponent width={120} id="selmode" style={{ "width": "auto" }} change={this.change.bind(this)} ref={d => this.dropElement = d} dataSource={this.droplist} fields={{ text: 'value', value: 'value' }} value="Vertical" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </PropertyPane>
                    </div>
                </div>
                <div id="action-description">
                    <p>
                        This sample demonstrates strip lines for an axis to highlight a particular region. Orientation can be changed by <code>StripLine Orientation</code> in properities panel.
                    </p>
                </div>
                <div id="description">
                    <p>
                        In this example, you can see how to render and configure the stripline charts. You can use stripline by enable the <code>visible</code>
                        property. Striplines are rendered in the specified <code>start</code> and <code>end</code> range and you can add more than one stripline for an axis.
            </p>
                    <p>
                        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
            </p>
                    <br></br>
                    <p><b>Injecting Module</b></p>
                    <p>
                        Chart component features are segregated into individual feature-wise modules. To use strip line feature, we need to inject
                        <code>StripLine</code> module into <code>services</code>.
                    </p>
                    <p>
                        More information on the strip line can be found in this &nbsp;
                        <a target="_blank" href="http://ej2.syncfusion.com/react/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
                    </p>
                </div>
            </div>
        )
    }
    public onChartLoad(args: ILoadedEventArgs): void {
        document.getElementById('charts').setAttribute('title', '');
    };
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)) as ChartTheme;
    };
}