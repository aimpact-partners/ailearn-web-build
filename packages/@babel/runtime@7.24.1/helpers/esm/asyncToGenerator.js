System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.24.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@babel/runtime/helpers/esm/asyncToGenerator.7.24.1.js
var asyncToGenerator_7_24_1_exports = {};
__export(asyncToGenerator_7_24_1_exports, {
  default: () => asyncToGenerator_7_24_1_default
});
module.exports = __toCommonJS(asyncToGenerator_7_24_1_exports);

// node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/asyncToGenerator.7.24.1.js
var asyncToGenerator_7_24_1_default = _asyncToGenerator;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuNy4yNC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiXSwibmFtZXMiOlsiYXN5bmNUb0dlbmVyYXRvcl83XzI0XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsImFzeW5jVG9HZW5lcmF0b3JfN18yNF8xX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsInZhbHVlIiwiZXJyb3IiLCJkb25lIiwiUHJvbWlzZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsK0JBQUE7QUFBQUMsUUFBQSxDQUFBRCwrQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTiwrQkFBQTs7O0FDQUEsU0FBU08sbUJBQW1CQyxHQUFBLEVBQUtDLE9BQUEsRUFBU0MsTUFBQSxFQUFRQyxLQUFBLEVBQU9DLE1BQUEsRUFBUUMsR0FBQSxFQUFLQyxHQUFBLEVBQUs7RUFDekUsSUFBSTtJQUNGLElBQUlDLElBQUEsR0FBT1AsR0FBQSxDQUFJSyxHQUFBLEVBQUtDLEdBQUc7SUFDdkIsSUFBSUUsS0FBQSxHQUFRRCxJQUFBLENBQUtDLEtBQUE7RUFDbkIsU0FBU0MsS0FBQSxFQUFQO0lBQ0FQLE1BQUEsQ0FBT08sS0FBSztJQUNaO0VBQ0Y7RUFDQSxJQUFJRixJQUFBLENBQUtHLElBQUEsRUFBTTtJQUNiVCxPQUFBLENBQVFPLEtBQUs7RUFDZixPQUFPO0lBQ0xHLE9BQUEsQ0FBUVYsT0FBQSxDQUFRTyxLQUFLLEVBQUVJLElBQUEsQ0FBS1QsS0FBQSxFQUFPQyxNQUFNO0VBQzNDO0FBQ0Y7QUFDZSxTQUFSUyxrQkFBbUNDLEVBQUEsRUFBSTtFQUM1QyxPQUFPLFlBQVk7SUFDakIsSUFBSUMsSUFBQSxHQUFPO01BQ1RDLElBQUEsR0FBT0MsU0FBQTtJQUNULE9BQU8sSUFBSU4sT0FBQSxDQUFRLFVBQVVWLE9BQUEsRUFBU0MsTUFBQSxFQUFRO01BQzVDLElBQUlGLEdBQUEsR0FBTWMsRUFBQSxDQUFHSSxLQUFBLENBQU1ILElBQUEsRUFBTUMsSUFBSTtNQUM3QixTQUFTYixNQUFNSyxLQUFBLEVBQU87UUFDcEJULGtCQUFBLENBQW1CQyxHQUFBLEVBQUtDLE9BQUEsRUFBU0MsTUFBQSxFQUFRQyxLQUFBLEVBQU9DLE1BQUEsRUFBUSxRQUFRSSxLQUFLO01BQ3ZFO01BQ0EsU0FBU0osT0FBT2UsR0FBQSxFQUFLO1FBQ25CcEIsa0JBQUEsQ0FBbUJDLEdBQUEsRUFBS0MsT0FBQSxFQUFTQyxNQUFBLEVBQVFDLEtBQUEsRUFBT0MsTUFBQSxFQUFRLFNBQVNlLEdBQUc7TUFDdEU7TUFDQWhCLEtBQUEsQ0FBTSxNQUFTO0lBQ2pCLENBQUM7RUFDSDtBQUNGOzs7QUQxQkEsSUFBT1IsK0JBQUEsR0FBUWtCLGlCQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9