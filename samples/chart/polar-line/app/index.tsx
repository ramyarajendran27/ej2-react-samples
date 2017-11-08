/**
 * Polar Line sample
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ChartSeriesType, Tooltip,
    Legend, DataLabel, LineSeries, Category, ILoadedEventArgs, PolarSeries, RadarSeries, ChartTheme
} from '@syncfusion/ej2-react-charts';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { PropertyPane } from './property-pane';
import { EmitType, Browser } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';

export let data1: any[] = [
    { x: 'Jan', y: -7.1 },
    { x: 'Feb', y: -3.7 },
    { x: 'Mar', y: 0.8 },
    { x: 'Apr', y: 6.3 },
    { x: 'May', y: 13.3 },
    { x: 'Jun', y: 18.0 },
    { x: 'Jul', y: 19.8 },
    { x: 'Aug', y: 18.1 },
    { x: 'Sep', y: 13.1 },
    { x: 'Oct', y: 4.1 },
    { x: 'Nov', y: -3.8 },
    { x: 'Dec', y: -6.8 },
];
export let data2: any[] = [
    { x: 'Jan', y: -17.4 },
    { x: 'Feb', y: -15.6 },
    { x: 'Mar', y: -12.3 },
    { x: 'Apr', y: -5.3 },
    { x: 'May', y: 1.0 },
    { x: 'Jun', y: 6.9 },
    { x: 'Jul', y: 9.4 },
    { x: 'Aug', y: 7.6 },
    { x: 'Sep', y: 2.6 },
    { x: 'Oct', y: -4.9 },
    { x: 'Nov', y: -13.4 },
    { x: 'Dec', y: -16.4 },
];

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;

export class PolarLine extends SampleBase<{}, {}> {
    private chartInstance: ChartComponent;
    private dropElement: DropDownListComponent;
    private checkElement: HTMLInputElement;
    private startangle: HTMLInputElement;
    private inversed: HTMLInputElement;
    private loaded: EmitType<ILoadedEventArgs>;
    private droplist: { [key: string]: Object }[] = [
        { value: 'Polar' },
        { value: 'Radar' }
    ];
    private change(): void {
        this.chartInstance.series[0].type = this.dropElement.value as ChartSeriesType;
        this.chartInstance.series[1].type = this.dropElement.value as ChartSeriesType;
        this.chartInstance.refresh();
    };
    private closed(): void {
        this.chartInstance.series[0].isClosed = this.checkElement.checked;
        this.chartInstance.series[1].isClosed = this.checkElement.checked;
        this.chartInstance.refresh();
    };
    private isInversed(): void {
        this.chartInstance.primaryXAxis.isInversed = this.inversed.checked;
        this.chartInstance.primaryYAxis.isInversed = this.inversed.checked;
        this.chartInstance.refresh();
    }
    private startAngle(): void {
        this.chartInstance.primaryXAxis.startAngle = parseInt(this.startangle.value);
        this.chartInstance.refresh();
    }
    render() {
        return (
            <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section row'>
                    <div className='col-md-8'>
                        <ChartComponent id='charts' ref={chart => this.chartInstance = chart}
                            primaryXAxis={{
                                title: 'Months',
                                valueType: 'Category',
                                labelPlacement: 'OnTicks',
                                interval: 1,
                                coefficient: Browser.isDevice ? 80 : 100
                            }}
                            load={this.load.bind(this)}
                            primaryYAxis={{
                                title: 'Temperature (Celsius)',
                                minimum: -25,
                                maximum: 25,
                                interval: 10,
                                edgeLabelPlacement: 'Shift',
                                labelFormat: '{value}°C'
                            }}
                            title='Alaska Weather Statistics - 2016' loaded={this.onChartLoad.bind(this)}
                            tooltip={{ enable: true }}>
                            <Inject services={[LineSeries, Legend, DataLabel, Category, PolarSeries, RadarSeries, Tooltip]} />
                            <SeriesCollectionDirective>
                                <SeriesDirective dataSource={data1} xName='x' yName='y' name='Warmest' type='Polar'
                                    marker={{
                                        visible: true, height: 10, width: 10, shape: 'Pentagon'
                                    }} width={2}>
                                </SeriesDirective>
                                <SeriesDirective dataSource={data2} xName='x' yName='y' name='Coldest' type='Polar'
                                    marker={{
                                        visible: true, height: 10, width: 10, shape: 'Pentagon'
                                    }} width={2}>
                                </SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>
                        <div style={{ float: 'right', marginRight: '10px' }}>Source: &nbsp;
                         <a href="http://www.yr.no/place/USA/Alaska/Hatcher_Pass/statistics.html" target="_blank">www.yr.no</a>
                        </div>
                    </div>
                    <div className='col-md-4 property-section'>
                        <PropertyPane title='Properties'>
                            <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
                                <tr style={{ height: '50px' }}>
                                    <td style={{ width: '60%' }}>
                                        <div>Series Type:</div>
                                    </td>
                                    <td style={{ width: '40%' }}>
                                        <div>
                                            <DropDownListComponent width={120} id="selmode" change={this.change.bind(this)} ref={d => this.dropElement = d} dataSource={this.droplist} fields={{ text: 'value', value: 'value' }} value="Polar" />
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{ height: '50px' }}>
                                    <td style={{ width: '60%' }}>
                                        <div>Closed: </div>
                                    </td>
                                    <td style={{ width: '40%' }}>
                                        <div>
                                            <input type="checkbox" id="isClosed" defaultChecked={true} onChange={this.closed.bind(this)} style={{ marginLeft: '-5px' }} ref={d => this.checkElement = d} />
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{ height: '50px' }}>
                                    <td style={{ width: '60%' }}>
                                        <div>Start Angle: </div>
                                    </td>
                                    <td style={{ width: '40%' }}>
                                        <div data-role="rangeslider">
                                            <input type="range" defaultValue="0" min="0" max="360" id="startangle" onChange={this.startAngle.bind(this)} style={{ marginLeft: '-5px' }} ref={d => this.startangle = d} />
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{ height: '50px' }}>
                                    <td style={{ width: '60%' }}>
                                        <div>Inversed: </div>
                                    </td>
                                    <td style={{ width: '40%' }}>
                                        <div>
                                            <input type="checkbox" id="isinversed" onChange={this.isInversed.bind(this)} style={{ marginLeft: '-5px' }} ref={d => this.inversed = d} />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </PropertyPane>
                    </div>
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
ReactDOM.render(<PolarLine />, document.getElementById('sample'));