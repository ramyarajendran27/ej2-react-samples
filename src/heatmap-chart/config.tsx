export const HeatmapSampleOrder: Object = [
    { 'path': 'heatmap-chart/default-functionalities', 'component': 'Default', 'name': 'Default Functionalities', 'order': '01', 'category': 'Heatmap Chart', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource" ] }', 'description':'This demo for Essential JS2 Heatmap control shows the heat map control displayed with minimum configuration.' },
    { 'path': 'heatmap-chart/calendar-heatmap', 'component': 'CalendarHeatmap', 'name': 'Calendar Heatmap', 'order': '01', 'category': 'Heatmap Chart', 'api': '{"HeatMapComponent": [ "titleSettings","height", "xAxis", "yAxis", "dataSource", "paletteSettings", "cellSettings", "legendSettings", "tooltipRender" ] }', 'description':'This demo for Essential JS2 Heatmap control for displays the time series data and displays the axis labels at specific time interval.',
        'sourceFiles': [{ 'displayName': 'calendar-heatmap.tsx', 'path': 'src/heatmap-chart/calendar-heatmap.tsx' },{ 'displayName': 'calendar-heatmap.jsx', 'path': 'src/heatmap-chart/calendar-heatmap.jsx' },{ 'displayName': 'calendar-data-source.json', 'path': 'src/heatmap-chart/calendar-data-source.json' }] },
    { 'path': 'heatmap-chart/bubble-types', 'component': 'BubbleTypes', 'name': 'Bubble Types', 'order': '02', 'category': 'Bubble Heatmap', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource" ] }', 'description':'This demo for Essential JS2 Heatmap control shows  Size, Color and SizeAndColor bubble heatmap type.',
        'sourceFiles': [{ 'displayName': 'bubble-types.tsx', 'path': 'src/heatmap-chart/bubble-types.tsx' },{ 'displayName': 'bubble-types.jsx', 'path': 'src/heatmap-chart/bubble-types.jsx' },{ 'displayName': 'table-bubble-data.json', 'path': 'src/heatmap-chart/table-bubble-data.json' }] },
    { 'path': 'heatmap-chart/color-and-size-attributes', 'component': 'ColorAndSizeAttributes', 'name': 'Color and Size Attributes', 'order': '02', 'category': 'Bubble Heatmap', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource" ] }', 'description':'This demo for Essential JS2 Heatmap control shows how to bind the multiple data to bubble type heatmap.' },
    { 'path': 'heatmap-chart/row', 'component': 'ArrayRow', 'name': 'Row', 'order': '03', 'category': 'Data Binding', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "paletteSettings", "legendSettings", "tooltipRender", "dataSource" ] }', 'description':'This demo for Essential JS2 Heatmap control demonstrates how to bind the data to heat map with series of array for each columns.' },
    { 'path': 'heatmap-chart/cell', 'component': 'ArrayCell', 'name': 'Cell', 'order': '03', 'category': 'Data Binding', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource", "cellSettings", "paletteSettings", "legendSettings", "tooltipRender" ] }', 'description':'This demo for Essential JS2 Heatmap control demonstrates how to bind the array data with values for each cell to heatmap.' },
    { 'path': 'heatmap-chart/json-row', 'component': 'JsonRow', 'name': 'JSON Row', 'order': '03', 'category': 'Data Binding', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource", "paletteSettings", "cellSettings", "tooltipRender" ] }', 'description':'This demo for Essential JS2 Heatmap control demonstrates how to bind the JSON object with data for each columns to heatmap.' },
    { 'path': 'heatmap-chart/json-cell', 'component': 'JsonCell', 'name': 'JSON Cell', 'order': '03', 'category': 'Data Binding', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource", "cellSettings", "paletteSettings" ] }', 'description':'This demo for Essential JS2 Heatmap control demonstrates how to bind the JSON object with data for each cell to heatmap.' },
    { 'path': 'heatmap-chart/empty-points', 'component': 'EmptyPoints', 'name': 'Empty points', 'order': '04', 'category': 'Features', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource", "cellSettings", "tooltipRender", "paletteSettings", "legendSettings" ] }', 'description':'This demo for Essential JS2 Heatmap control shows the usage of empty points or null points in heatmap.',
        'sourceFiles': [{ 'displayName': 'empty-points.tsx', 'path': 'src/heatmap-chart/empty-points.tsx' },{ 'displayName': 'empty-points.jsx', 'path': 'src/heatmap-chart/empty-points.jsx' },{ 'displayName': 'empty-point-data-source.json', 'path': 'src/heatmap-chart/empty-point-data-source.json' }] },
    { 'path': 'heatmap-chart/inversed-axis', 'component': 'InversedAxis', 'name': 'Inversed Axis', 'order': '04', 'category': 'Features', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource", "cellSettings", "paletteSettings", "legendSettings" ] }', 'description':'This demo for Essential JS2 Heatmap control shows how to inverse the both x-axis and y-axis in heatmap.',
        'sourceFiles': [{ 'displayName': 'inversed-axis.tsx', 'path': 'src/heatmap-chart/inversed-axis.tsx' },{ 'displayName': 'inversed-axis.jsx', 'path': 'src/heatmap-chart/inversed-axis.jsx' },{ 'displayName': 'inversed-axis-data.json', 'path': 'src/heatmap-chart/inversed-axis-data.json' }] },
    { 'path': 'heatmap-chart/opposed-axis', 'component': 'OpposedAxis', 'name': 'Opposed Axis', 'order': '04', 'category': 'Features', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource", "legendSettings", "cellSettings" ] }', 'description':'This demo for Essential JS2 Heatmap control shows how to place the axis opposite to the default position in heatmap.', 'sourceFiles': [
        { 'displayName': 'opposed-axis.tsx', 'path': 'src/heatmap-chart/opposed-axis.tsx' },{ 'displayName': 'opposed-axis.jsx', 'path': 'src/heatmap-chart/opposed-axis.jsx' },{ 'displayName': 'opposed-axis-data.json', 'path': 'src/heatmap-chart/opposed-axis-data.json' }] },
    { 'path': 'heatmap-chart/label-template', 'component': 'LabelTemplate', 'name': 'Label Template', 'order': '04', 'category': 'Features', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource", "cellSettings", "paletteSettings" ] }', 'description':'This demo for Essential JS2 Heatmap control demonstrates how to bind the JSON object with data for each cell to heatmap.' },
    { 'path': 'heatmap-chart/multi-level-labels', 'component': 'MultiLevelLabels', 'name': 'Multi Level Labels', 'order': '04', 'category': 'Features', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource", "cellSettings", "legendSettings" ] }', 'description':'This demo for Essential JS2 Heatmap control shows how to group the axis labels with multiple levels.', 'sourceFiles': [
        { 'displayName': 'multi-level-labels.tsx', 'path': 'src/heatmap-chart/multi-level-labels.tsx' },{ 'displayName': 'multi-level-labels.jsx', 'path': 'src/heatmap-chart/multi-level-labels.jsx' },{ 'displayName': 'multi-level-label-data.json', 'path': 'src/heatmap-chart/multi-level-label-data.json' }] },   
    { 'path': 'heatmap-chart/cell-selection', 'component': 'CellSelection', 'name': 'Selection', 'order': '04', 'category': 'Features', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource", "cellSettings", "allowSelection" ] }', 'description':'This demo for Essential JS2 Heatmap control shows how to select and deselect the heatmap cell using mouse and touch action.', 'sourceFiles': [
        { 'displayName': 'cell-selection.tsx', 'path': 'src/heatmap-chart/cell-selection.tsx' },{ 'displayName': 'cell-selection.jsx', 'path': 'src/heatmap-chart/cell-selection.jsx' },{ 'displayName': 'cell-selection-data.json', 'path': 'src/heatmap-chart/cell-seletion-data.json' }] },   
    { 'path': 'heatmap-chart/legend-placement', 'component': 'LegendPlacement', 'name': 'Legend Placement', 'order': '04', 'category': 'Features', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource", "cellSettings", "tooltipRender", "paletteSettings", "legendSettings" ] }', 'description':'This demo for Essential JS2 Heatmap control shows how to place the heatmap legend in different positions.', 'sourceFiles': [
        { 'displayName': 'legend-placement.tsx', 'path': 'src/heatmap-chart/legend-placement.tsx' },{ 'displayName': 'legend-placement.jsx', 'path': 'src/heatmap-chart/legend-placement.jsx' },{ 'displayName': 'legend-sample-data.json', 'path': 'src/heatmap-chart/legend-sample-data.json' }] },
    { 'path': 'heatmap-chart/large-data', 'component': 'LargeData', 'name': 'Large Data', 'order': '04', 'category': 'Features', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource","paletteSettings", "cellSettings", "legendSettings","renderingMode", "tooltipRender"] }', 'description':'This demo for Essential JS2 Heatmap control shows how to bind the large data in heatmap using canvas rendering mode.', 'sourceFiles': [
        { 'displayName': 'large-data.tsx', 'path': 'src/heatmap-chart/large-data.tsx' },{ 'displayName': 'large-data.jsx', 'path': 'src/heatmap-chart/large-data.jsx' },{ 'displayName': 'large-data.json', 'path': 'src/heatmap-chart/large-data.json' }] },
    { 'path': 'heatmap-chart/palette-mode', 'component': 'Palette', 'name': 'Palette Mode', 'order': '04', 'category': 'Features', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource", "paletteSettings", "cellSettings", "legendSettings" ] }', 'description':'This demo for Essential JS2 Heatmap control demonstrates applying gradient colors or solid colors for the heatmap cells.', 'sourceFiles': [
        { 'displayName': 'palette-mode.tsx', 'path': 'src/heatmap-chart/palette-mode.tsx' },{ 'displayName': 'palette-mode.jsx', 'path': 'src/heatmap-chart/palette-mode.jsx' },{ 'displayName': 'palette-sample-data.json', 'path': 'src/heatmap-chart/palette-sample-data.json' }] },
    { 'path': 'heatmap-chart/color-range', 'component': 'ColorRange', 'name': 'Color Range', 'order': '04', 'category': 'Features', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource", "paletteSettings", "cellSettings" ] }', 'description':'This demo for Essential JS2 Heatmap control demonstrates applying color range for the heatmap cells.', 'sourceFiles': [
        { 'displayName': 'color-range.tsx', 'path': 'src/heatmap-chart/color-range.tsx' },{ 'displayName': 'color-range.jsx', 'path': 'src/heatmap-chart/color-range.jsx' },{ 'displayName': 'color-range-data.json', 'path': 'src/heatmap-chart/color-range-sample-data.json' }] },
    { 'path': 'heatmap-chart/rendering-mode', 'component': 'RenderMode', 'name': 'Rendering mode', 'order': '04', 'category': 'Features', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource", "paletteSettings", "renderingMode", "cellSettings", "legendSettings" ] }', 'description':'This demo for Essential JS2 Heatmap shows switching the rendering mode of the heatmap cells between SVG and canvas rendering logics.', 'sourceFiles': [
        { 'displayName': 'rendering-mode.tsx', 'path': 'src/heatmap-chart/rendering-mode.tsx' },{ 'displayName': 'rendering-mode.jsx', 'path': 'src/heatmap-chart/rendering-mode.jsx' },{ 'displayName': 'render-mode-data.json', 'path': 'src/heatmap-chart/render-mode-data.json' }] },
    { 'path': 'heatmap-chart/tooltip-template', 'component': 'TooltipTemplate', 'name': 'Tooltip Template', 'order': '04', 'category': 'Features', 'api': '{"HeatMapComponent": [ "titleSettings", "xAxis", "yAxis", "dataSource", "cellSettings", "legendSettings", "paletteSettings", "tooltipRender" ] }', 'description':'This demo for Essential JS2 Heatmap control shows how to customize the tool tip text using template support in heatmap.', 'sourceFiles': [
        { 'displayName': 'tooltip-template.tsx', 'path': 'src/heatmap-chart/tooltip-template.tsx' },{ 'displayName': 'tooltip-template.jsx', 'path': 'src/heatmap-chart/tooltip-template.jsx' },{ 'displayName': 'default-table-data-source.json', 'path': 'src/heatmap-chart/default-table-data-source.json' }] }
]
