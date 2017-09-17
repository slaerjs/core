(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.slaer = global.slaer || {})));
}(this, (function (exports) { 'use strict';

function wipeCleanAndStartAgain() {

}

var _components = {};

function components() {
  return Object.values(_components);
}

function component(name, obj) {
  if (obj) {
    _components[name] = obj;
  }

  return _components[name];
}

/**
 * Main entry point
 */

exports.wipeCleanAndStartAgain = wipeCleanAndStartAgain;
exports.components = components;
exports.component = component;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=slaer-core.js.map
