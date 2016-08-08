import React, { Component } from 'react';
import d3 from 'd3';

export default class Mindmap extends Component {
  onClick() {

  }

  render() {
    const width = 600;
    const height = 600;
    const tree = d3.layout.tree()
                   .size([height, width]);
    const diagonal = d3.svg.diagonal()
                       .projection(d => [d.y, d.x]);

    root.x0 = height / 2;
    root.y0 = 0;

    const nodes = tree.nodes(root);
    const links = tree.links(nodes);

    nodes.forEach(d => d.y = d.depth * 180);

    return (
      <svg width={width} height={height}>
      {
        nodes.map((d, i) => (
          <g key={i}
             className="node"
             transform={`translate(${d.y}, ${d.x})`}
             onClick={this.onClick.bind(this)}>
            <circle r={8}
                    fill={d._children ? 'lightsteelblue' : '#fff'} />
            <text x={d.children || d._children ? -14 : 14}
                  dy=".35em"
                  textAnchor={d.children || d._children ? 'end' : 'start'}>
              { d.name }
            </text>
          </g>
        ))
      }
      {
        links.map((d, i) => (
          <path key={i}
                className="link"
                d={diagonal(d)} />
        ))
      }
      </svg>
    );
  }
}

const root = {
'name':'如何学习D3',
'children':
[
  {
    'name':'预备知识' ,
      'children':
      [
          {'name':'HTML & CSS' },
          {'name':'JavaScript' },
          {'name':'DOM' },
          {'name':'SVG' }
      ]
    },

  {
    'name':'安装' ,
    'children':
    [
      {
        'name':'记事本软件',
        'children':
        [
          {'name':'Notepad++'},
          {'name':'EditPlus'},
          {'name':'Sublime Text'}
        ]
      },
      {
        'name':'服务器软件',
        'children':
        [
          {'name':'Apache Http Server'},
          {'name':'Tomcat'}
        ]
      },
      {'name':'下载D3.js'}
    ]
  },

  {
    'name':'入门',
    'children':
    [
      {
        'name':'选择集',
        'children':
        [
          {'name':'select'},
          {'name':'selectAll'}
        ]
      },
      {
        'name':'绑定数据',
        'children':
        [
          {'name':'datum'},
          {'name':'data'}
        ]
      },
      {'name':'添加删除元素'},
      {
        'name':'简单图形',
        'children':
        [
          {'name':'柱形图'},
          {'name':'折线图'},
          {'name':'散点图'}
        ]
      },
      {'name':'比例尺'},
      {'name':'生成器'},
      {'name':'过渡'}
    ]
  },

  {
    'name':'进阶' ,
    'children':
    [
      {
        'name':'布局的应用',
        'children':
        [
          {'name':'饼状图'},
          {'name':'树状图'},
          {'name':'矩阵树图'}
        ]
      },
      {'name':'地图'}
    ]
  }
]
}

