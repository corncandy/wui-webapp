/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react'
import ReactDOM from 'react-dom'
import Fork from 'react-ghfork'
import { Catalog, CodeSpecimen, ReactSpecimen } from 'catalog'

import 'purecss/build/pure.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'admin-lte/dist/css/AdminLTE.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap-daterangepicker/daterangepicker.css'
import 'react-ghfork/gh-fork-ribbon.ie.css'
import 'react-ghfork/gh-fork-ribbon.css'
import './main.css'
import '../style.css'

// Add your documentation imports here. These are available to
// React specimen.
const documentationImports = {
  React,
  ReactDOM
}
const title = `${NAME} v${VERSION}` // eslint-disable-line no-undef
const project = `${USER}/${NAME}` // eslint-disable-line no-undef
const pages = [{
  path: '/',
  title: 'Introduction',
  imports: documentationImports,
  component: require('../README.md')
}, {
  path: '/data-table',
  title: 'DataTable',
  imports: {
    DataTable: require('../src/DataTable')
  },
  component: require('./DataTable.md')
}, {
  path: '/data-filter',
  title: 'DataFilter',
  imports: {
    DataFilter: require('../src/DataFilter')
  },
  component: require('./DataFilter.md')
}, {
  path: '/data-paginator',
  title: 'DataPaginator',
  imports: {
    DataFilter: require('../src/DataPaginator')
  },
  component: require('./DataPaginator.md')
}, {
  path: '/loading',
  title: 'Loading',
  imports: {
    Loading: require('../src/Loading')
  },
  component: require('./Loading.md')
}, {
  path: '/flash-message',
  title: 'FlashMessage',
  imports: {
    FlashMessage: require('../src/FlashMessage')
  },
  component: require('./FlashMessage.md')
}]

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <Fork
      className='right'
      project={project}
      style={{
        backgroundColor: '#000'
      }}
    />
    <Catalog
      pages={pages}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang='javascript' />,
        js: props => <CodeSpecimen {...props} lang='javascript' />,
        jsx: props => <ReactSpecimen {...props} />
      }}
      title={title}
      logoSrc='https://github.com/corncandy/wui-webapp/blob/master/wui-webapp-logo.png?raw=true'
    />
  </div>,
  document.getElementById('app')
)
