import React, { Component } from 'react';
import d3 from 'd3';

export default class Treemap extends Component {
  render() {
    const width = 600;
    const height = 600;
    const treemap = d3.layout.treemap()
                      .size([width, height])
                      .value(d => d.gdp);
    const nodes = treemap.nodes(root);
    const color = d3.scale.category20();

    return (
      <svg width={width} height={height}>
      {
        nodes.filter(d => !d.children).map((d, i) => (
          <g key={i}>
            <rect className="nodeRect"
                  x={d.x}
                  y={d.y}
                  width={d.dx}
                  height={d.dy}
                  fill={color(d.parent.name)} />
            <text className="nodeName"
                  x={d.x}
                  y={d.y}
                  dx="0.5em"
                  dy="1.5em">
              { `${d.name} ${d.gdp}`}
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
  'children':
  [
    {
      'name': '浙江',
      'children':
      [
        {'name':'杭州', 'gdp':8343},
        {'name':'宁波', 'gdp':7128},
        {'name':'温州', 'gdp':4003},
        {'name':'绍兴', 'gdp':3620},
        {'name':'湖州', 'gdp':1803},
        {'name':'嘉兴', 'gdp':3147},
        {'name':'金华', 'gdp':2958},
        {'name':'衢州', 'gdp':1056},
        {'name':'舟山', 'gdp':1021},
        {'name':'台州', 'gdp':3153},
        {'name':'丽水', 'gdp':983}
      ]
    },
    {
      'name': '广西',
      'children':
      [
        {'name':'南宁', 'gdp':3148},
        {'name':'柳州', 'gdp':2016},
        {'name':'桂林', 'gdp':1657},
        {'name':'梧州', 'gdp':991},
        {'name':'北海', 'gdp':734},
        {'name':'防城港', 'gdp':525},
        {'name':'钦州', 'gdp':734},
        {'name':'贵港', 'gdp':742},
        {'name':'玉林', 'gdp':1300},
        {'name':'百色', 'gdp':656},
        {'name':'贺州', 'gdp':423},
        {'name':'河池', 'gdp':497},
        {'name':'来宾', 'gdp':519},
        {'name':'崇左', 'gdp':649}
      ]
    },
    {
      'name': '江苏',
      'children':
      [
        {'name':'南京', 'gdp':8820},
        {'name':'无锡', 'gdp':8205},
        {'name':'徐州', 'gdp':4964},
        {'name':'常州', 'gdp':4360},
        {'name':'苏州', 'gdp':13500},
        {'name':'南通', 'gdp':5038},
        {'name':'连云港', 'gdp':1785},
        {'name':'淮安', 'gdp':2455},
        {'name':'盐城', 'gdp':3836},
        {'name':'扬州', 'gdp':3697},
        {'name':'镇江', 'gdp':2950},
        {'name':'泰州', 'gdp':3006},
        {'name':'宿迁', 'gdp':1930}
      ]
    }
  ]
}
