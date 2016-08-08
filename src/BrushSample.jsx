import React, { Component } from 'react';
import d3 from 'd3';

export default class BrushSample extends Component {
  constructor() {
    super();

    this.dataset = [];
    for (let i = 0; i < 150; i++) {
      this.dataset.push([Math.random() * 10, Math.random() * 10]);
    }

    this.state = {
      xmin: 0,
      xmax: 0,
      ymin: 0,
      ymax: 0
    }
  }

  onBrushed() {
    const extent = this.brush.extent();
    const xmin = extent[0][0];
    const xmax = extent[1][0];
    const ymin = extent[0][1];
    const ymax = extent[1][1];

    this.setState({
      xmin, xmax, ymin, ymax
    });
  }

  componentDidMount() {
    this.brush = d3.svg.brush()
                   .x(this.xScale)
                   .y(this.yScale)
                   .extent([[0, 0], [0, 0]])
                   .on('brush', this.onBrushed.bind(this));

    d3.select(this.refs.brush)
      .call(this.brush)
      .selectAll('rect')
      .style('fill-opacity', 0.3);
  }

  render() {
    const width = 600;
    const height = 600;
    const padding = {left: 50, right: 50, top: 50, bottom: 50};
    this.xScale = d3.scale.linear()
                     .domain([0, 10])
                     .range([padding.left, width - padding.right]);
    this.yScale = d3.scale.linear()
                     .domain([10, 0])
                     .range([padding.top, height - padding.bottom]);
    return (
      <svg width={width} height={height}>
      {
        this.dataset.map((d, i) => {
          let color = 'black';

          if (d[0] >= this.state.xmin && d[0] <= this.state.xmax &&
              d[1] >= this.state.ymin && d[1] <= this.state.ymax) {
            color = 'red';
          }

          return <circle key={i}
                         cx={this.xScale(d[0])}
                         cy={this.yScale(d[1])}
                         r={5}
                         fill={color} />
        })
      }
        <g ref="brush" />
      </svg>
    );
  }
}
