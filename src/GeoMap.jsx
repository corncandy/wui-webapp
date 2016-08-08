import React, { Component } from 'react';
import d3 from 'd3';
import root from './china.geo.json';

export default class GeoMap extends Component {
  render() {
    const width = 600;
    const height = 600;
    const projection = d3.geo.mercator()
                         .center([107, 31])
                         .scale(500)
                         .translate([width / 2, height / 2]);
    const path = d3.geo.path()
                   .projection(projection);
    const color = d3.scale.category20();

    return (
      <svg width={width} height={height}>
        <g>
        {
          root.features.map((d, i) => (
            <path key={i}
                  className="province"
                  fill={color(i)}
                  d={path(d)} />
          ))
        }
        </g>
      </svg>
    );
  }
}
