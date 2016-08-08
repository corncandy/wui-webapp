/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import Fork from 'react-ghfork';
import { Catalog, CodeSpecimen, ReactSpecimen } from 'catalog';

import 'purecss/build/pure.css';
import 'react-ghfork/gh-fork-ribbon.ie.css';
import 'react-ghfork/gh-fork-ribbon.css';
import './main.css';
import '../style.css';

// Add your documentation imports here. These are available to
// React specimen.
const documentationImports = {
  React,
  ReactDOM
};
const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
const project = `${USER}/${NAME}`; // eslint-disable-line no-undef
const pages = [{
    path: '/',
    title: 'Introduction',
    imports: documentationImports,
    component: require('../README.md')
  }, {
    path: '/bar-chart',
    title: 'BarChart',
    imports: {
      BarChart: require('../src/BarChart')
    },
    component: require('./BarChart.md')
  }, {
    path: '/scatter-chart',
    title: 'ScatterChart',
    imports: {
      ScatterChart: require('../src/ScatterChart')
    },
    component: require('./ScatterChart.md')
  }, {
    path: '/line-chart',
    title: 'LineChart',
    imports: {
      LineChart: require('../src/LineChart')
    },
    component: require('./LineChart.md')
  }, {
    path: '/pie-chart',
    title: 'PieChart',
    imports: {
      PieChart: require('../src/PieChart')
    },
    component: require('./PieChart.md')
  }, {
    path: '/force-directed-graph',
    title: 'ForceDirectedGraph',
    imports: {
      ForceDirectedGraph: require('../src/ForceDirectedGraph')
    },
    component: require('./ForceDirectedGraph.md')
  }, {
    path: '/chord-diagram',
    title: 'ChordDiagram',
    imports: {
      ChordDiagram: require('../src/ChordDiagram')
    },
    component: require('./ChordDiagram.md')
  }, {
    path: '/tree-diagram',
    title: 'TreeDiagram',
    imports: {
      TreeDiagram: require('../src/TreeDiagram')
    },
    component: require('./TreeDiagram.md')
  }, {
    path: '/cluster-diagram',
    title: 'ClusterDiagram',
    imports: {
      ClusterDiagram: require('../src/ClusterDiagram')
    },
    component: require('./ClusterDiagram.md')
  }, {
    path: '/bundle-diagram',
    title: 'BundleDiagram',
    imports: {
      BundleDiagram: require('../src/BundleDiagram')
    },
    component: require('./BundleDiagram.md')
  }, {
    path: '/pack-diagram',
    title: 'PackDiagram',
    imports: {
      PackDiagram: require('../src/PackDiagram')
    },
    component: require('./PackDiagram.md')
  }, {
    path: '/histogram',
    title: 'Histogram',
    imports: {
      Histogram: require('../src/Histogram')
    },
    component: require('./Histogram.md')
  }, {
    path: '/partition-diagram',
    title: 'PartitionDiagram',
    imports: {
      PartitionDiagram: require('../src/PartitionDiagram')
    },
    component: require('./PartitionDiagram.md')
  }, {
    path: '/stack-diagram',
    title: 'StackDiagram',
    imports: {
      StackDiagram: require('../src/StackDiagram')
    },
    component: require('./StackDiagram.md')
  }, {
    path: '/treemap',
    title: 'Treemap',
    imports: {
      Treemap: require('../src/Treemap')
    },
    component: require('./Treemap.md')
  }, {
    path: '/mindmap',
    title: 'Mindmap',
    imports: {
      Mindmap: require('../src/Mindmap')
    },
    component: require('./Mindmap.md')
  }, {
    path: '/brush-sample',
    title: 'BrushSample',
    imports: {
      BrushSample: require('../src/BrushSample')
    },
    component: require('./BrushSample.md')
  }
];

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <Fork
      className="right"
      project={project}
      style={{
        backgroundColor: '#000'
      }}
    />
    <Catalog
      pages={pages}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang="javascript" />,
        js: props => <CodeSpecimen {...props} lang="javascript" />,
        jsx: props => <ReactSpecimen {...props} />
      }}
      title={title}
      logoSrc="https://corncandy.github.io/wd-web/images/wui-bigdata-logo.png"
    />
  </div>,
  document.getElementById('app')
);
