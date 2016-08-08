import React, { Component } from 'react';
import d3 from 'd3';

export default class PieChart extends Component {
  constructor() {
    super();
    this.state = {
      tooltip: '',
      style: {}
    };

    this.pie = d3.layout.pie().value(d => d[1]);
    this.dataset = [['小米', 60.8], ['三星', 58.4], ['联想', 47.3],
                     ['苹果', 46.6], ['华为', 41.3], ['酷派', 40.1],
                     ['其他', 111.5]];
    this.pieData = this.pie(this.dataset);
    this.pieData.forEach(data => {
      data.dx = 300;
      data.dy = 300;
    });
  }

  onMouseOver(d) {
    this.setState({
      tooltip:
        `${d.data[0]}的出货量为
        ${d.data[1]} 百万台`
    });
  }

  onMouseMove(color, event) {
    this.setState({
      style: {
        left: event.pageX,
        top: event.pageY + 20,
        boxShadow: `10px 0px 0px ${color}`
      }
    })
  }

  onMouseOut() {
    this.setState({
      style: {
        opacity: 0
      }
    })
  }

  onDragMove(d, index) {
    this.pieData[index].dx += d3.event.dx;
    this.pieData[index].dy += d3.event.dy;
    this.forceUpdate();
  }

  onDragEnd(d, i) {
    const dis2 = d.dx * d.dx + d.dy * d.dy;

    if (dis2 > 200 * 200) {
      this.dataset.splice(i, 1);

      this.pieData = this.pie(this.dataset);
      this.pieData.forEach(data => {
        data.dx = 300;
        data.dy = 300;
      });

      this.forceUpdate();
    }
  }

  componentDidMount() {
    const drag = d3.behavior.drag()
                   .origin(null)
                   .on('drag', this.onDragMove.bind(this))
                   .on('dragend', this.onDragEnd.bind(this));

    d3.select(this.refs['pie-svg'])
      .selectAll('g')
      .data(this.pieData)
      .call(drag);
  }

  render() {
    const width = 600;
    const height = 600;
    const outerRadius = width / 3;
    const innerRadius = 0;
    const arc = d3.svg.arc()
                  .innerRadius(innerRadius)
                  .outerRadius(outerRadius);
    const color = d3.scale.category20();

    return (
      <div>
        <svg width={width} height={height} ref="pie-svg">
        {
          this.pieData.map((data, index) => (
            <g transform={`translate(${data.dx}, ${data.dy})`} key={index}>
              <path fill={color(index)} d={arc(data)}
                    onMouseOver={this.onMouseOver.bind(this, data)}
                    onMouseMove={this.onMouseMove.bind(this, color(index))}
                    onMouseOut={this.onMouseOut.bind(this)} />
              <text transform={`translate(${arc.centroid(data)[0] * 1.4}, ${arc.centroid(data)[1] * 1.4})`}
                    textAnchor="middle">
                { (Number(data.value) / d3.sum(this.dataset, d => d[1]) * 100).toFixed(1) + '%' }
              </text>
              <line stroke="black"
                    x1={arc.centroid(data)[0] * 2}
                    y1={arc.centroid(data)[1] * 2}
                    x2={arc.centroid(data)[0] * 2.2}
                    y2={arc.centroid(data)[1] * 2.2} />
              <text transform={`translate(${arc.centroid(data)[0] * 2.5}, ${arc.centroid(data)[1] * 2.5})`}
                    textAnchor="middle">
                { data.data[0] }
              </text>
            </g>
          ))
        }
        </svg>
        <div className="tooltip" style={this.state.style}>
          { this.state.tooltip }
        </div>
      </div>
    );
  }
}
