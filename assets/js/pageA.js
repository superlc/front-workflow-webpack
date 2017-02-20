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
return webpackJsonp([2],{

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Vue = __webpack_require__(1);

var _Vue2 = _interopRequireDefault(_Vue);

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Add = _global2.default.add;
var Person = _global2.default.Person;

//测试模块A的引入
var sum = Add(1, 2, 3, 4, 5);
console.log(sum);

//测试模块B的引入
var person = new Person('chaoluo', 30);
var name = person.getName();
var age = person.getAge();
var sex = person.getSex();

var info = name + '\'age is ' + sex + ' and his age is ' + age + ' years old ';
console.log(info);

//测试Vue模块的引入
var view = new _Vue2.default({
    el: '#text',
    data: {
        name: '前端C罗'
    }
});

/***/ })

},[5]);
});
//# sourceMappingURL=pageA.js.map