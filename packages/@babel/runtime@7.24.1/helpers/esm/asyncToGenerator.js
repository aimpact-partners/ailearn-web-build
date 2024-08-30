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

// .beyond/uimport/@babel/runtime/helpers/esm/asyncToGenerator.7.24.1.js
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

// .beyond/uimport/@babel/runtime/helpers/esm/asyncToGenerator.7.24.1.js
var asyncToGenerator_7_24_1_default = _asyncToGenerator;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLjcuMjQuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIl0sIm5hbWVzIjpbImFzeW5jVG9HZW5lcmF0b3JfN18yNF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJhc3luY1RvR2VuZXJhdG9yXzdfMjRfMV9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJ2YWx1ZSIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLCtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsK0JBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sK0JBQUE7OztBQ0FBLFNBQVNPLG1CQUFtQkMsR0FBQSxFQUFLQyxPQUFBLEVBQVNDLE1BQUEsRUFBUUMsS0FBQSxFQUFPQyxNQUFBLEVBQVFDLEdBQUEsRUFBS0MsR0FBQSxFQUFLO0VBQ3pFLElBQUk7SUFDRixJQUFJQyxJQUFBLEdBQU9QLEdBQUEsQ0FBSUssR0FBQSxFQUFLQyxHQUFHO0lBQ3ZCLElBQUlFLEtBQUEsR0FBUUQsSUFBQSxDQUFLQyxLQUFBO0VBQ25CLFNBQVNDLEtBQUEsRUFBUDtJQUNBUCxNQUFBLENBQU9PLEtBQUs7SUFDWjtFQUNGO0VBQ0EsSUFBSUYsSUFBQSxDQUFLRyxJQUFBLEVBQU07SUFDYlQsT0FBQSxDQUFRTyxLQUFLO0VBQ2YsT0FBTztJQUNMRyxPQUFBLENBQVFWLE9BQUEsQ0FBUU8sS0FBSyxFQUFFSSxJQUFBLENBQUtULEtBQUEsRUFBT0MsTUFBTTtFQUMzQztBQUNGO0FBQ2UsU0FBUlMsa0JBQW1DQyxFQUFBLEVBQUk7RUFDNUMsT0FBTyxZQUFZO0lBQ2pCLElBQUlDLElBQUEsR0FBTztNQUNUQyxJQUFBLEdBQU9DLFNBQUE7SUFDVCxPQUFPLElBQUlOLE9BQUEsQ0FBUSxVQUFVVixPQUFBLEVBQVNDLE1BQUEsRUFBUTtNQUM1QyxJQUFJRixHQUFBLEdBQU1jLEVBQUEsQ0FBR0ksS0FBQSxDQUFNSCxJQUFBLEVBQU1DLElBQUk7TUFDN0IsU0FBU2IsTUFBTUssS0FBQSxFQUFPO1FBQ3BCVCxrQkFBQSxDQUFtQkMsR0FBQSxFQUFLQyxPQUFBLEVBQVNDLE1BQUEsRUFBUUMsS0FBQSxFQUFPQyxNQUFBLEVBQVEsUUFBUUksS0FBSztNQUN2RTtNQUNBLFNBQVNKLE9BQU9lLEdBQUEsRUFBSztRQUNuQnBCLGtCQUFBLENBQW1CQyxHQUFBLEVBQUtDLE9BQUEsRUFBU0MsTUFBQSxFQUFRQyxLQUFBLEVBQU9DLE1BQUEsRUFBUSxTQUFTZSxHQUFHO01BQ3RFO01BQ0FoQixLQUFBLENBQU0sTUFBUztJQUNqQixDQUFDO0VBQ0g7QUFDRjs7O0FEMUJBLElBQU9SLCtCQUFBLEdBQVFrQixpQkFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==