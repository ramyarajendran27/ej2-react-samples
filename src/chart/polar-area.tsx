/**
 * Sample for Polar Series with drawType Area 
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ChartSeriesType,
    Legend, Category, AreaSeries, ILoadedEventArgs, PolarSeries, RadarSeries, ChartTheme, Tooltip, Highlight
} from '@syncfusion/ej2-react-charts';
import { PropertyPane } from '../common/property-pane';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { EmitType, Browser } from '@syncfusion/ej2-base';
import { SampleBase } from '../common/sample-base';

export let data1: any[] = [{ x: '2000', y: 4 }, { x: '2001', y: 3.0 },
{ x: '2002', y: 3.8 }, { x: '2003', y: 3.4 },
{ x: '2004', y: 3.2 }, { x: '2005', y: 3.9 }];
export let data2: any[] = [{ x: '2000', y: 2.6 }, { x: '2001', y: 2.8 },
{ x: '2002', y: 2.6 }, { x: '2003', y: 3 },
{ x: '2004', y: 3.6 }, { x: '2005', y: 3 }];
export let data3: any[] = [{ x: '2000', y: 2.8 }, { x: '2001', y: 2.5 },
{ x: '2002', y: 2.8 }, { x: '2003', y: 3.2 },
{ x: '2004', y: 2.9 }, { x: '2005', y: 2 }];

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
	}`;
export class PolarArea extends SampleBase<{}, {}> {
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
                <style>{SAMPLE_CSS}</style>
                <div className='control-section row'>
                    <div className='col-md-8'>
                        <ChartComponent id='charts' ref={chart => this.chartInstance = chart} primaryXAxis={{ valueType: 'Category', labelPlacement: 'OnTicks', interval: 1, coefficient: Browser.isDevice ? 80 : 100 }} primaryYAxis={{ title: 'Revenue in Millions', labelFormat: '{value}M' }} legendSettings= {{ visible: true, enableHighlight: true }} tooltip={{ enable: true, enableHighlight: true }} load={this.load.bind(this)} title="Average Sales Comparison" loaded={this.onChartLoad.bind(this)}>
                            <Inject services={[AreaSeries, Legend, Category, PolarSeries, RadarSeries, Highlight, Tooltip]} />
                            <SeriesCollectionDirective>
                                <SeriesDirective dataSource={data1} xName='x' yName='y' name='Product A' width={2} opacity={0.5} type='Polar' drawType='Area' border={{ color: 'transparent' }} />
                                <SeriesDirective dataSource={data2} xName='x' yName='y' name='Product B' width={2} opacity={0.5} type='Polar' drawType='Area' border={{ color: 'transparent' }} />
                                <SeriesDirective dataSource={data3} xName='x' yName='y' name='Product C' width={2} opacity={0.5} type='Polar' drawType='Area' border={{ color: 'transparent' }} />
                            </SeriesCollectionDirective>
                        </ChartComponent>
                    </div>
                    <div className='col-md-4 property-section'>
                        <PropertyPane title='Properties'>
                            <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
                            <tbody><tr style={{ height: '50px' }}>
                                    <td style={{ width: '60%' }}>
                                        <div>Series Type:</div>
                                    </td>
                                    <td style={{ width: '40%' }}>
                                        <div>
                                            <DropDownListComponent width={120} id="selmode" change={this.change.bind(this)} ref={d=>this.dropElement=d} dataSource={this.droplist} fields={{ text: 'value', value: 'value' }} value='Polar' />
                                        </div>
                                    </td>
                                </tr></tbody>
                            </table>
                        </PropertyPane>
                    </div>
                </div>
                <div id="action-description">
                    <p>This sample shows the average product sales comparison for 6 years in polar and radar charts.</p>
                </div>
                <div id="description">
                    <p>
                        In this example, you can see how to render and configure polar and radar charts with an area series. Switching between polar and radar series can be done using <code>Series Type</code> in the property panel
                    </p>
                    <p><b>Injecting Module</b></p>
                    <p>
                        Chart component features are segregated into individual feature-wise modules. To use area series, we need to 
                        inject <code>AreaSeries</code>, <code>PolarSeries</code> and <code>RadarSeries</code> module into <code>services</code>.
                    </p>
                    <p>
                        More information on the polar-radar series can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/chart/chart-types/polar#area" aria-label="Navigate to the documentation for Polar Area in React Chart component">documentation section</a>.
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
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i,'Contrast').replace(/-highContrast/i, 'HighContrast') as ChartTheme;
    };
        
}