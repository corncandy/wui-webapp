import React, { Component } from 'react';
import d3 from 'd3';

export default class ForceDirectedGraph extends Component {
  componentDidMount() {
    this.lines = d3.select(this.refs['force-svg']).selectAll('.forceLine').data(this.edges);
    this.circles = d3.select(this.refs['force-svg']).selectAll('.forceCircle').data(this.nodes).call(this.force.drag);
    this.texts = d3.select(this.refs['force-svg']).selectAll('.forceText').data(this.nodes);
    this.force.on('tick', () => {
      this.lines.attr('x1', d => d.source.x);
      this.lines.attr('y1', d => d.source.y);
      this.lines.attr('x2', d => d.target.x);
      this.lines.attr('y2', d => d.target.y);

      this.circles.attr('cx', d => d.x);
      this.circles.attr('cy', d => d.y);

      this.texts.attr('x', d => d.x);
      this.texts.attr('y', d => d.y);
    });
    this.force.start();
  }

  render() {
    this.nodes = [{name: '0'}, {name: '1'}, {name: '2'}, {name: '3'},
                  {name: '4'}, {name: '5'}, {name: '6'}];
    this.edges = [{source: 0, target: 1},
                  {source: 0, target: 2},
                  {source: 0, target: 3},
                  {source: 1, target: 4},
                  {source: 1, target: 5},
                  {source: 1, target: 6}];
    const width = 400;
    const height = 400;
    this.force = d3.layout.force()
                    .nodes(this.nodes)
                    .links(this.edges)
                    .size([width, height])
                    .linkDistance(90)
                    .charge(-400);
    const color = d3.scale.category20();

    return (
      <svg ref="force-svg" width={width} height={height}>
      {
        this.edges.map((edge, index) => (
          <line key={index} className="forceLine" stroke="black" />
        ))
      }
      {
        this.nodes.map((node, index) => (
          <circle key={index}
                  className="forceCircle"
                  r={20}
                  fill={color(index)} />
        ))
      }
      {
        this.nodes.map((node, index) => (
          <text key={index}
                className="forceText"
                x={node.x}
                y={node.y}
                dy=".3em">
            {node.name}
          </text>
        ))
      }
      </svg>
    );
  }
}
