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

// .beyond/uimport/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.7.24.1.js
var objectWithoutPropertiesLoose_7_24_1_exports = {};
__export(objectWithoutPropertiesLoose_7_24_1_exports, {
  default: () => objectWithoutPropertiesLoose_7_24_1_default
});
module.exports = __toCommonJS(objectWithoutPropertiesLoose_7_24_1_exports);

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

// .beyond/uimport/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.7.24.1.js
var objectWithoutPropertiesLoose_7_24_1_default = _objectWithoutPropertiesLoose;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLjcuMjQuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIl0sIm5hbWVzIjpbIm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VfN18yNF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXzdfMjRfMV9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlIiwiZXhjbHVkZWQiLCJ0YXJnZXQiLCJzb3VyY2VLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImkiLCJsZW5ndGgiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwyQ0FBQTtBQUFBQyxRQUFBLENBQUFELDJDQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLDJDQUFBOzs7QUNBZSxTQUFSTyw4QkFBK0NDLE1BQUEsRUFBUUMsUUFBQSxFQUFVO0VBQ3RFLElBQUlELE1BQUEsSUFBVSxNQUFNLE9BQU8sQ0FBQztFQUM1QixJQUFJRSxNQUFBLEdBQVMsQ0FBQztFQUNkLElBQUlDLFVBQUEsR0FBYUMsTUFBQSxDQUFPQyxJQUFBLENBQUtMLE1BQU07RUFDbkMsSUFBSU0sR0FBQSxFQUFLQyxDQUFBO0VBQ1QsS0FBS0EsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSUosVUFBQSxDQUFXSyxNQUFBLEVBQVFELENBQUEsSUFBSztJQUN0Q0QsR0FBQSxHQUFNSCxVQUFBLENBQVdJLENBQUE7SUFDakIsSUFBSU4sUUFBQSxDQUFTUSxPQUFBLENBQVFILEdBQUcsS0FBSyxHQUFHO0lBQ2hDSixNQUFBLENBQU9JLEdBQUEsSUFBT04sTUFBQSxDQUFPTSxHQUFBO0VBQ3ZCO0VBQ0EsT0FBT0osTUFBQTtBQUNUOzs7QURSQSxJQUFPUCwyQ0FBQSxHQUFRSSw2QkFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==