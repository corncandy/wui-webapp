import React, { Component } from 'react';
import d3 from 'd3';

export default class PackDiagram extends Component {
  render() {
    const width = 600;
    const height = 600;
    const pack = d3.layout.pack()
                   .size([width, height])
                   .radius(30)
                   .padding(5);
    const nodes = pack.nodes(root);

    return (
      <svg width={width} height={height}>
      {
        nodes.map((node, index) => (
          <circle key={index}
                  className={node.children ? 'node' : 'leafnode'}
                  cx={node.x}
                  cy={node.y}
                  r={node.r} />
        ))
      }
      {
        nodes.map((node, index) => (
          <text key={index}
                className="nodeText"
                fillOpacity={node.children ? 0 : 1}
                fontSize="0.5em"
                textAnchor="middle"
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
