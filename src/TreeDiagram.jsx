import React, { Component } from 'react';
import d3 from 'd3';

export default class TreeDiagram extends Component {
  render() {
    const width = 600;
    const height = 600;
    const tree = d3.layout.tree()
                   .size([width, height - 200])
                   .separation((a, b) => (a.parent == b.parent ? 1 : 2));
    const nodes = tree.nodes(root);
    const links = tree.links(nodes);
    const diagonal = d3.svg.diagonal()
                       .projection(d => [d.y, d.x]);

    return (
      <svg width={width} height={height}>
      {
        links.map((link, index) => (
          <path key={index}
                className="link"
                d={diagonal(link)} />
        ))
      }
      {
        nodes.map((node, index) => (
          <g key={index}
             className="node"
             transform={`translate(${node.y}, ${node.x})`}>
            <circle r={4.5} />
            <text dx={node.children ? -8 : 8}
                  dy={3}
                  textAnchor={node.children ? 'end' : 'start'}>
              {node.name}
            </text>
          </g>
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
