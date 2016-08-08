import React, { Component } from 'react';
import d3 from 'd3';

export default class BarChart extends Component {
  constructor() {
    super();
    this.state = {
      data: [{value: 50}, {value: 43}, {value: 120}, {value: 87}, {value: 99}, {value: 167}, {value: 142}]
    };
  }

  sortItems() {
    this.setState({
      data: this.state.data.sort((a, b) => (a.value - b.value))
    });
  }

  addItem() {
    this.state.data.push({value: Math.floor(Math.random() * 100)});
    this.forceUpdate();
  }

  mouseEnter(index) {
    this.state.data[index].fill = 'yellow';
    this.forceUpdate();
  }

  mouseLeave(index) {
    this.state.data[index].fill = 'steelblue';
    this.forceUpdate();
  }

  componentDidMount() {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }

  componentDidUpdate() {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }

  render() {
    const width = 600;
    const height = 600;
    const padding = {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20
    };
    const xAxisWidth = 500;
    const yAxisWidth = 500;
    const xScale = d3.scale.ordinal()
                     .domain(d3.range(this.state.data.length))
                     .rangeRoundBands([0, xAxisWidth], 0.2);
    const yScale = d3.scale.linear()
                     .domain([0, d3.max(this.state.data, d => d.value)])
                     .range([0, yAxisWidth]);
    const rectData = this.state.data.map((item, index) => ({
      fill: item.fill || 'steelblue',
      x: padding.left + xScale(index),
      y: height - padding.bottom - yScale(item.value),
      width: xScale.rangeBand(),
      height: yScale(item.value)
    }));
    const textData = this.state.data.map((item, index) => ({
      fill: 'white',
      fontSize: '14px',
      textAnchor: 'middle',
      x: padding.left + xScale(index),
      y: height - padding.bottom - yScale(item.value),
      dx: xScale.rangeBand() / 2,
      dy: '1em',
      value: item.value
    }));
    this.xAxis = d3.svg.axis()
                   .scale(xScale)
                   .orient('bottom');
    yScale.range([yAxisWidth, 0]);
    this.yAxis = d3.svg.axis()
                   .scale(yScale)
                   .orient('left');

    return (
      <div>
        <svg height={height} width={width}>
        {
          rectData.map((item, index) =>
            <rect onMouseEnter={this.mouseEnter.bind(this, index)}
                  onMouseLeave={this.mouseLeave.bind(this, index)}
                  key={index} {...item} />)
        }
        {
          textData.map((item, index) => <text key={index} {...item}>{item.value}</text>)
        }
          <g ref="xAxis"
             className="axis"
             transform={`translate(${padding.left},${height - padding.bottom})`}>
          </g>
          <g ref="yAxis"
             className="axis"
             transform={`translate(${padding.left},${height - padding.top - yAxisWidth})`}>
          </g>
        </svg>
        <button onClick={this.sortItems.bind(this)}>Sort</button>
        <button onClick={this.addItem.bind(this)}>Add</button>
      </div>
    );
  }
}
