import React, { Component } from 'react';
import d3 from 'd3';

export default class Histogram extends Component {
  componentDidMount() {
    d3.select(this.refs.xAxis).call(this.xAxis);
  }

  render() {
    const rand = d3.random.normal(170, 10);
    let dataset = [];

    for (let i = 0; i < 100; i++) {
      dataset.push(rand());
    }

    const binNum = 20;
    const rangeMin = 130;
    const rangeMax = 210;
    const histogram = d3.layout.histogram()
                        .range([rangeMin, rangeMax])
                        .bins(binNum)
                        .frequency(true);
    const hisData = histogram(dataset);
    const width = 600;
    const height = 600;
    const xAxisWidth = 450;
    const xTicks = hisData.map(d => d.x);
    const xScale = d3.scale.ordinal()
                     .domain(xTicks)
                     .rangeRoundBands([0, xAxisWidth], 0.1);
    const padding = {top: 30, right: 30, bottom: 30, left: 30};
    this.xAxis = d3.svg.axis()
                   .scale(xScale)
                   .orient('bottom')
                   .tickFormat(d3.format('.0f'));
    const yAxisWidth = 450;
    const yScale = d3.scale.linear()
                     .domain([d3.min(hisData, d => d.y), d3.max(hisData, d => d.y)])
                     .range([5, yAxisWidth]);
    const lineGenerator = d3.svg.line()
                            .x(d => xScale(d.x))
                            .y(d => height - yScale(d.y))
                            .interpolate('basis');

    return (
      <svg width={width} height={height}>
        <g transform={`translate(${padding.left}, -${padding.bottom})`}>
        {
          hisData.map((data, index) => (
            <rect key={index}
                  className="rect"
                  fill="steelblue"
                  x={xScale(data.x)}
                  y={height - yScale(data.y)}
                  width={xScale.rangeBand()}
                  height={yScale(data.y)} />
          ))
        }
        </g>
        <g className="axis"
           ref="xAxis"
           transform={`translate(${padding.left}, ${height - padding.bottom})`} />
        <g transform={`translate(${padding.left}, ${-padding.bottom})`}>
           <path className="linePath"
                 fill="none"
                 stroke="green"
                 strokeWidth={4}
                 d={lineGenerator(hisData)} />
        </g>
      </svg>
    );
  }
}
