import React, { Component } from 'react';
import d3 from 'd3';

export default class ChordDiagram extends Component {
  render() {
    const continent = ['亚洲', '欧洲', '非洲', '美洲', '大洋洲'];
    const population = [
      [9000, 870, 3000, 1000, 5200],
      [3400, 8000, 2300, 4922, 374],
      [2000, 2000, 7700, 4881, 1050],
      [3000, 8012, 5531, 500, 400],
      [3540, 4310, 1500, 1900, 300]
    ];
    const chord = d3.layout.chord()
                    .padding(0.03)
                    .sortSubgroups(d3.ascending)
                    .matrix(population);
    const width = 600;
    const height = 600;
    const color20 = d3.scale.category20();
    const innerRadius = width / 2 * 0.7;
    const outerRadius = innerRadius * 1.1;
    const arcOuter = d3.svg.arc()
                       .innerRadius(innerRadius)
                       .outerRadius(outerRadius);

    const arcInner = d3.svg.chord()
                       .radius(innerRadius);

    const innerPaths = d3.select(this.refs['chord-svg']).selectAll('.innerPath').data(chord.chords());
    const fade = function(opacity, index) {
      return function() {
        innerPaths.filter(d => d.source.index != index && d.target.index != index)
                  .transition()
                  .style('opacity', opacity);
      }
    }

    return (
      <svg ref="chord-svg" width={width} height={height}>
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          <g>
          {
            chord.groups().map((d, index) => (
              <path className="outerPath"
                    onMouseEnter={fade(0, index)}
                    onMouseLeave={fade(1, index)}
                    key={index}
                    fill={color20(d.index)}
                    d={arcOuter(d)} />
            ))
          }
          {
            chord.groups().map((d, index) => {
              const angle = (d.startAngle + d.endAngle) / 2;
              let transform = `rotate(${angle * 180 / Math.PI})`

              transform += `translate(0, ${-1.0 * (outerRadius + 10)})`;

              if (angle > Math.PI * 3 / 4 && angle < Math.PI * 5 / 4) {
                transform += 'rotate(180)';
              }

              return (
                <text key={index}
                      className="outerText"
                      dy=".35em"
                      transform={transform}>
                  { continent[index] }
                </text>
              );
            })
          }
          </g>
          <g>
          {
            chord.chords().map((d, index) => (
              <path key={index}
                    className="innerPath"
                    d={arcInner(d)}
                    fill={color20(d.source.index)} />
            ))
          }
          </g>
        </g>
      </svg>
    );
  }
}
