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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.7.24.1.js
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.7.24.1.js
var objectWithoutPropertiesLoose_7_24_1_default = _objectWithoutPropertiesLoose;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuNy4yNC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiXSwibmFtZXMiOlsib2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZV83XzI0XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VfN18yNF8xX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2UiLCJleGNsdWRlZCIsInRhcmdldCIsInNvdXJjZUtleXMiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiaSIsImxlbmd0aCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDJDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsMkNBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sMkNBQUE7OztBQ0FlLFNBQVJPLDhCQUErQ0MsTUFBQSxFQUFRQyxRQUFBLEVBQVU7RUFDdEUsSUFBSUQsTUFBQSxJQUFVLE1BQU0sT0FBTyxDQUFDO0VBQzVCLElBQUlFLE1BQUEsR0FBUyxDQUFDO0VBQ2QsSUFBSUMsVUFBQSxHQUFhQyxNQUFBLENBQU9DLElBQUEsQ0FBS0wsTUFBTTtFQUNuQyxJQUFJTSxHQUFBLEVBQUtDLENBQUE7RUFDVCxLQUFLQSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJSixVQUFBLENBQVdLLE1BQUEsRUFBUUQsQ0FBQSxJQUFLO0lBQ3RDRCxHQUFBLEdBQU1ILFVBQUEsQ0FBV0ksQ0FBQTtJQUNqQixJQUFJTixRQUFBLENBQVNRLE9BQUEsQ0FBUUgsR0FBRyxLQUFLLEdBQUc7SUFDaENKLE1BQUEsQ0FBT0ksR0FBQSxJQUFPTixNQUFBLENBQU9NLEdBQUE7RUFDdkI7RUFDQSxPQUFPSixNQUFBO0FBQ1Q7OztBRFJBLElBQU9QLDJDQUFBLEdBQVFJLDZCQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9