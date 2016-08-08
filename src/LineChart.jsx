import React, { Component } from 'react';
import d3 from 'd3';

export default class LineChart extends Component {
  constructor() {
    super();
    this.state = {
      focusCircleStyle: {},
      focusLineText: '',
      focusLineStyle: {},
      verticalLine: {},
      horizontalLine: {}
    }
  }
  componentDidMount() {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
    d3.select(this.refs.overlay).on('mousemove', this.onMouseMove.bind(this));
  }

  onMouseOver() {
    this.setState({
      focusCircleStyle: {},
      focusLineStyle: {}
    });
  }

  onMouseOut() {
    this.setState({
      focusCircleStyle: {},
      focusLineStyle: {}
    });
  }

  onMouseMove() {
    const data = this.dataset[0].gdp;
    const mouseX = d3.mouse(this.refs.overlay)[0] - this.padding.left;
    let x0 = this.xScale.invert(mouseX);
    x0 = Math.floor(x0);
    const bisect = d3.bisector(d => d[0]).left;
    const index = bisect(data, x0);
    const x1 = data[index][0];
    const y1 = data[index][1];
    const focusX = this.xScale(x1) + this.padding.left;
    const focusY = this.yScale(y1) + this.padding.top;

    this.setState({
      focusCircleStyle: {
        transform: `translate(${focusX}, ${focusY})`
      },
      focusLineText: `${x1}年的GDP: ${y1}亿美元`,
      verticalLine: {
        x1: focusX,
        y1: focusY,
        x2: focusX,
        y2: this.height - this.padding.bottom
      },
      horizontalLine: {
        x1: focusX,
        y1: focusY,
        x2: this.padding.left,
        y2: focusY
      }
    });
  }

  render() {
    this.dataset = [{
      country: 'china',
      gdp: [[2000, 11920], [2001, 13170], [2002, 14550],
            [2003, 16500], [2004, 19440], [2005, 22870],
            [2006, 27930], [2007, 35040], [2008, 45470],
            [2009, 51050], [2010, 59490], [2011, 73140],
            [2012, 83860], [2013, 103550]]
    }, {
      country: 'japan',
      gdp: [[2000, 47310], [2001, 41590], [2002, 39800],
            [2003, 43020], [2004, 46500], [2005, 45710],
            [2006, 43560], [2007, 43560], [2008, 48490],
            [2009, 50350], [2010, 54950], [2011, 59050],
            [2012, 59370], [2013, 48980]]
    }];
    const width = 400;
    this.height = 400;
    this.padding = {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50
    };
    let gdpmax = 0;

    for (let i = 0; i < this.dataset.length; i++) {
      let currGdp = d3.max(this.dataset[i].gdp, d => d[1]);

      if (currGdp > gdpmax) {
        gdpmax = currGdp;
      }
    }
    this.xScale = d3.scale.linear()
                     .domain([2000, 2013])
                     .range([0, width - this.padding.left - this.padding.right]);
    this.yScale = d3.scale.linear()
                     .domain([0, gdpmax * 1.1])
                     .range([this.height - this.padding.top - this.padding.bottom, 0]);

    const linePath = d3.svg.line()
                       .x(d => this.xScale(d[0]))
                       .y(d => this.yScale(d[1]));
    const colors = [d3.rgb(0, 0, 255), d3.rgb(0, 255, 0)];

    this.xAxis = d3.svg.axis()
                    .scale(this.xScale)
                    .ticks(5)
                    .tickFormat(d3.format('d'))
                    .orient('bottom');
    this.yAxis = d3.svg.axis()
                    .scale(this.yScale)
                    .orient('left');

    return (
      <svg width={width} height={this.height}>
      {
        this.dataset.map((data, index) => (
          <path key={index}
                transform={`translate(${this.padding.left}, ${this.padding.top})`}
                d={linePath(data.gdp)}
                fill="none"
                strokeWidth={3}
                stroke={colors[index]} />
        ))
      }
        <g ref="xAxis"
           className="axis"
           transform={`translate(${this.padding.left},${this.height - this.padding.bottom})`}>
        </g>
        <g ref="yAxis"
           className="axis"
           transform={`translate(${this.padding.left},${this.padding.top})`}>
        </g>
        <g className="focusCircle" {...this.state.focusCircleStyle}>
          <circle r={4.5} />
          <text dx={10} dy="1em">
            {this.state.focusLineText}
          </text>
        </g>
        <g className="focusLine" style={this.state.focusLineStyle}>
          <line {...this.state.verticalLine} stroke="black" strokeWidth={1} />
          <line {...this.state.horizontalLine} stroke="black" strokeWidth={1} />
        </g>
        <rect ref="overlay"
              className="overlay"
              x={this.padding.left}
              y={this.padding.top}
              width={width - this.padding.left - this.padding.right}
              height={this.height - this.padding.top - this.padding.bottom}
              fill="none"
              pointerEvents="all"
              onMouseOver={this.onMouseOver.bind(this)}
              onMouseOut={this.onMouseOut.bind(this)} />
      </svg>
    );
  }
}
