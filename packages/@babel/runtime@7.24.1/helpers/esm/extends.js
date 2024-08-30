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

// .beyond/uimport/@babel/runtime/helpers/esm/extends.7.24.1.js
var extends_7_24_1_exports = {};
__export(extends_7_24_1_exports, {
  default: () => extends_7_24_1_default
});
module.exports = __toCommonJS(extends_7_24_1_exports);

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// .beyond/uimport/@babel/runtime/helpers/esm/extends.7.24.1.js
var extends_7_24_1_default = _extends;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLjcuMjQuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIl0sIm5hbWVzIjpbImV4dGVuZHNfN18yNF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJleHRlbmRzXzdfMjRfMV9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9leHRlbmRzIiwiT2JqZWN0IiwiYXNzaWduIiwiYmluZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsc0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxzQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTixzQkFBQTs7O0FDQWUsU0FBUk8sU0FBQSxFQUE0QjtFQUNqQ0EsUUFBQSxHQUFXQyxNQUFBLENBQU9DLE1BQUEsR0FBU0QsTUFBQSxDQUFPQyxNQUFBLENBQU9DLElBQUEsQ0FBSyxJQUFJLFVBQVVDLE1BQUEsRUFBUTtJQUNsRSxTQUFTQyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJQyxTQUFBLENBQVVDLE1BQUEsRUFBUUYsQ0FBQSxJQUFLO01BQ3pDLElBQUlHLE1BQUEsR0FBU0YsU0FBQSxDQUFVRCxDQUFBO01BQ3ZCLFNBQVNJLEdBQUEsSUFBT0QsTUFBQSxFQUFRO1FBQ3RCLElBQUlQLE1BQUEsQ0FBT1MsU0FBQSxDQUFVQyxjQUFBLENBQWVDLElBQUEsQ0FBS0osTUFBQSxFQUFRQyxHQUFHLEdBQUc7VUFDckRMLE1BQUEsQ0FBT0ssR0FBQSxJQUFPRCxNQUFBLENBQU9DLEdBQUE7UUFDdkI7TUFDRjtJQUNGO0lBQ0EsT0FBT0wsTUFBQTtFQUNUO0VBQ0EsT0FBT0osUUFBQSxDQUFTYSxLQUFBLENBQU0sTUFBTVAsU0FBUztBQUN2Qzs7O0FEVkEsSUFBT1Ysc0JBQUEsR0FBUUksUUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==