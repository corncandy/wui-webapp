import React, { Component } from 'react';
import d3 from 'd3';

export default class StackDiagram extends Component {
  render() {
    const dataset = [{
      name: 'PC' ,
      sales: [
        { year:2005, profit: 3000 },
        { year:2006, profit: 1300 },
        { year:2007, profit: 3700 },
        { year:2008, profit: 4900 },
        { year:2009, profit: 700 }]
    }, {
      name: 'SmartPhone' ,
      sales: [
        { year:2005, profit: 2000 },
        { year:2006, profit: 4000 },
        { year:2007, profit: 1810 },
        { year:2008, profit: 6540 },
        { year:2009, profit: 2820 }]
    }, {
      name: 'Software' ,
      sales: [
        { year:2005, profit: 1100 },
        { year:2006, profit: 1700 },
        { year:2007, profit: 1680 },
        { year:2008, profit: 4000 },
        { year:2009, profit: 4900 }]
    }];
    const width = 600;
    const height = 600;
    const stack = d3.layout.stack()
                    .values(d => d.sales)
                    .x(d => d.year)
                    .y(d => d.profit);
    const data = stack(dataset);
    const padding = { top: 30, right: 100, bottom: 30, left: 50 };
    const xRangeWidth = width - padding.left - padding.right;
    const xScale = d3.scale.ordinal()
                     .domain(data[0].sales.map(d => d.year))
                     .rangeBands([0, xRangeWidth], 0.3);
    const maxProfit = d3.max(data[data.length - 1].sales, d => d.y0 + d.y);
    const yRangeWidth = height - padding.top - padding.bottom;
    const yScale = d3.scale.linear()
                     .domain([0, maxProfit])
                     .range([0, yRangeWidth]);
    const color = d3.scale.category10();

    const labHeight = 50;
    const labRadius = 10;

    const area = d3.svg.area()
                   .x(d => xScale(d.year) + xScale.rangeBand() / 2)
                   .y0(d => yRangeWidth - yScale(d.y0))
                   .y1(d => yRangeWidth - yScale(d.y0 + d.y))
                   .interpolate('basis');

    if (this.props.shape === 'rect') {
      return (
        <svg width={width} height={height}>
        {
          data.map((d, index) => (
            <g key={index}
               fill={color(index)}>
            {
              d.sales.map((d, i) => (
                <rect key={i}
                      x={xScale(d.year)}
                      y={yRangeWidth - yScale(d.y0 + d.y)}
                      width={xScale.rangeBand()}
                      height={yScale(d.y)}
                      transform={`translate(${padding.left}, ${padding.top})`} />
              ))
            }
              <circle cx={width - padding.right * 0.98}
                      cy={padding.top * 2 + labHeight * index}
                      r={labRadius} />
              <text x={width - padding.right * 0.8}
                    y={padding.top * 2 + labHeight * index}
                    dy={labRadius / 2}>
                { d.name }
              </text>
            </g>
          ))
        }
        </svg>
      );
    } else {
      return (
        <svg width={width} height={height}>
        {
          data.map((d, index) => (
            <g key={index}
               fill={color(index)}>
              <path d={area(d.sales)} />
              <circle cx={width - padding.right * 0.98}
                      cy={padding.top * 2 + labHeight * index}
                      r={labRadius} />
              <text x={width - padding.right * 0.8}
                    y={padding.top * 2 + labHeight * index}
                    dy={labRadius / 2}>
                { d.name }
              </text>
            </g>
          ))
        }
        </svg>
      );
    }
  }
}
