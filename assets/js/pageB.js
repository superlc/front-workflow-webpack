(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return webpackJsonp([1],{

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_global2.default.add(3, 4));

/***/ })

},[6]);
});
//# sourceMappingURL=pageB.js.map