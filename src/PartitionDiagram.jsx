import React, { Component } from 'react';
import d3 from 'd3';

export default class PartitionDiagram extends Component {
  textTransform(d, i) {
    if (i !== 0) {
      let r = d.x + d.dx / 2;
      let angle = Math.PI / 2;

      r += r < Math.PI ? (angle * -1) : angle;
      r *= 180 / Math.PI;

      return `translate(${this.arc.centroid(d)})rotate(${r})`;
    }
  }

  render() {
    if (this.props.shape === 'rect') {
      const width = 800;
      const height = 500;
      const partition = d3.layout.partition()
                          .sort(null)
                          .size([800, 500])
                          .value(() => 1);
      const color = d3.scale.category20();
      const nodes = partition.nodes(root);

      return (
        <svg width={width} height={height}>
        {
          nodes.map((d, index) => (
            <g key={index}>
              <rect x={d.x}
                    y={d.y}
                    width={d.dx}
                    height={d.dy}
                    stroke="#fff"
                    fill={color((d.children ? d : d.parent).name)} />
              <text className="nodeText"
                    x={d.x}
                    y={d.y}
                    dx={20}
                    dy={20}>
                { d.name }
              </text>
            </g>
          ))
        }
        </svg>
      );
    } else {
      const width = 900;
      const height = 900;
      const radius = 450;
      const partition = d3.layout.partition()
                          .sort(null)
                          .size([2 * Math.PI, radius * radius])
                          .value(() => 1);
      const color = d3.scale.category20();
      const nodes = partition.nodes(root);
      this.arc = d3.svg.arc()
                    .startAngle(d => d.x)
                    .endAngle(d => d.x + d.dx)
                    .innerRadius(d => Math.sqrt(d.y))
                    .outerRadius(d => Math.sqrt(d.y + d.dy));

      return (
        <svg width={width} height={height}>
        {
          nodes.map((d, index) => (
            <g key={index} transform={`translate(${width / 2}, ${height / 2})`}>
              <path display={d.depth ? null : 'none'}
                    d={this.arc(d)}
                    stroke="#fff"
                    fill={color((d.children ? d : d.parent).name)} />
              <text className="nodeText"
                    dy=".5em"
                    transform={this.textTransform(d, index)}>
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

const root = {
  'name': '中国',
  'children': [{
      'name': '浙江',
      'children': [
        { 'name': '杭州' },
        { 'name': '宁波' },
        { 'name': '温州' },
        { 'name': '绍兴' }
      ]
    }, {
      'name': '广西',
      'children': [{
          'name': '桂林',
          'children': [
            { 'name': '秀峰区' },
            { 'name': '叠彩区' },
            { 'name': '象山区' },
            { 'name': '七星区' }
          ]
        },
        { 'name': '南宁' },
        { 'name': '柳州' },
        { 'name': '防城港' }
      ]
    }, {
      'name': '黑龙江',
      'children': [
        { 'name': '哈尔滨' },
        { 'name': '齐齐哈尔' },
        { 'name': '牡丹江' },
        { 'name': '大庆' }
      ]
    }, {
      'name': '新疆',
      'children': [
        { 'name': '乌鲁木齐' },
        { 'name': '克拉玛依' },
        { 'name': '吐鲁番' },
        { 'name': '哈密' }
      ]
    }
  ]
};
