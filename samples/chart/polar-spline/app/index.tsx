/**
 * Polar Spline sample
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ChartTheme,
    Legend, Category, SplineSeries, Tooltip, ILoadedEventArgs, PolarSeries, RadarSeries, ChartSeriesType
} from '@syncfusion/ej2-react-charts';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { PropertyPane } from './property-pane';
import { EmitType, Browser } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';

export function GetSplineData(): any {
    let cardData: Object[] = [];
    let biDirData: Object[] = [];
    let omniDirData: Object[] = [];
    let point1: Object;
    let point2: Object;

    for (let x: number = -180; x < 180; x++) {
        point1 = { x: x, y: -12.6 * (1 - Math.cos(x * 3.14 / 180)) };
        cardData.push(point1);
        point2 = { x: x, y: -3 };
        omniDirData.push(point2);
    }

    for (let x: number = -180; x < -90; x++) {
        point1 = { x: x, y: -26 * (1 + Math.cos(x * 3.14 / 180)) };
        biDirData.push(point1);
    }

    for (let x: number = -90; x < 90; x++) {
        point1 = { x: x, y: -26 * (1 - Math.cos(x * 3.14 / 180)) };
        biDirData.push(point1);
    }

    for (let x: number = 90; x < 180; x++) {
        point1 = { x: x, y: -26 * (1 + Math.cos(x * 3.14 / 180)) };
        biDirData.push(point1);
    }

    return { 'series1': cardData, 'series2': omniDirData, 'series3': biDirData };
}
export let data1: any[] = GetSplineData().series1;
export let data2: any[] = GetSplineData().series2;
export let data3: any[] = GetSplineData().series3;

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;

export class PolarSpline extends SampleBase<{}, {}> {
    private chartInstance: ChartComponent;
    private dropElement: DropDownListComponent;
    private loaded: EmitType<ILoadedEventArgs>;
    private change(): void {
        this.chartInstance.series[0].type = this.dropElement.value as ChartSeriesType;
        this.chartInstance.series[1].type = this.dropElement.value as ChartSeriesType;
        this.chartInstance.series[2].type = this.dropElement.value as ChartSeriesType;
        this.chartInstance.refresh();
    };
    private droplist: { [key: string]: Object }[] = [
        { value: 'Polar' },
        { value: 'Radar' }
    ];
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
                                minimum: -180,
                                maximum: 180,
                                interval: 30,
                                labelFormat: '{value}°',
                                coefficient: Browser.isDevice ? 80 : 100
                            }}
                            primaryYAxis={{
                                minimum: -20,
                                interval: 5,
                                maximum: 0
                            }}
                            load={this.load.bind(this)}
                            title='Microphone Types Polar Patterns' loaded={this.onChartLoad.bind(this)}
                            tooltip={{ enable: true, format: '${series.name}<br> ${point.x}: ${point.y}' }}>
                            <Inject services={[SplineSeries, Legend, Tooltip, Category, PolarSeries, RadarSeries]} />
                            <SeriesCollectionDirective>
                                <SeriesDirective dataSource={data1} xName='x' yName='y' name='Cardioid (unidirectional)' type='Polar'
                                    drawType='Spline' dashArray='5 5 2' width={2}>
                                </SeriesDirective>
                                <SeriesDirective dataSource={data2} xName='x' yName='y' name='Omnidirectional' type='Polar'
                                    drawType='Spline' dashArray='2' width={2}>
                                </SeriesDirective>
                                <SeriesDirective dataSource={data3} xName='x' yName='y' name='Bidirectional' type='Polar'
                                    drawType='Spline' width={2}>
                                </SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>
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
ReactDOM.render(<PolarSpline />, document.getElementById('sample'));