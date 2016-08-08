(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WUI"] = factory();
	else
		root["WUI"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _BarChart = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./BarChart\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _BarChart2 = _interopRequireDefault(_BarChart);
	
	var _ScatterChart = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./ScatterChart\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _ScatterChart2 = _interopRequireDefault(_ScatterChart);
	
	var _LineChart = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./LineChart\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _LineChart2 = _interopRequireDefault(_LineChart);
	
	var _PieChart = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./PieChart\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _PieChart2 = _interopRequireDefault(_PieChart);
	
	var _ForceDirectedGraph = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./ForceDirectedGraph\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _ForceDirectedGraph2 = _interopRequireDefault(_ForceDirectedGraph);
	
	var _ChordDiagram = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./ChordDiagram\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _ChordDiagram2 = _interopRequireDefault(_ChordDiagram);
	
	var _TreeDiagram = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./TreeDiagram\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _TreeDiagram2 = _interopRequireDefault(_TreeDiagram);
	
	var _ClusterDiagram = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./ClusterDiagram\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _ClusterDiagram2 = _interopRequireDefault(_ClusterDiagram);
	
	var _BundleDiagram = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./BundleDiagram\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _BundleDiagram2 = _interopRequireDefault(_BundleDiagram);
	
	var _PackDiagram = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./PackDiagram\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _PackDiagram2 = _interopRequireDefault(_PackDiagram);
	
	var _Histogram = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Histogram\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Histogram2 = _interopRequireDefault(_Histogram);
	
	var _PartitionDiagram = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./PartitionDiagram\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _PartitionDiagram2 = _interopRequireDefault(_PartitionDiagram);
	
	var _StackDiagram = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./StackDiagram\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _StackDiagram2 = _interopRequireDefault(_StackDiagram);
	
	var _Treemap = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Treemap\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Treemap2 = _interopRequireDefault(_Treemap);
	
	var _BrushSample = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./BrushSample\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _BrushSample2 = _interopRequireDefault(_BrushSample);
	
	var _Mindmap = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Mindmap\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Mindmap2 = _interopRequireDefault(_Mindmap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// this should be the entry point to your library
	
	// import GeoMap from './GeoMap';
	module.exports = {
	  BarChart: _BarChart2.default,
	  ScatterChart: _ScatterChart2.default,
	  LineChart: _LineChart2.default,
	  PieChart: _PieChart2.default,
	  ForceDirectedGraph: _ForceDirectedGraph2.default,
	  ChordDiagram: _ChordDiagram2.default,
	  TreeDiagram: _TreeDiagram2.default,
	  ClusterDiagram: _ClusterDiagram2.default,
	  BundleDiagram: _BundleDiagram2.default,
	  PackDiagram: _PackDiagram2.default,
	  Histogram: _Histogram2.default,
	  PartitionDiagram: _PartitionDiagram2.default,
	  StackDiagram: _StackDiagram2.default,
	  Treemap: _Treemap2.default,
	  // GeoMap,
	  BrushSample: _BrushSample2.default,
	  Mindmap: _Mindmap2.default
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=wui-bigdata.js.map