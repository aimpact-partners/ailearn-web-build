System.register(["@babel/runtime@7.24.1/helpers/esm/objectWithoutPropertiesLoose"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.24.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@babel/runtime@7.24.1/helpers/esm/objectWithoutPropertiesLoose', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@babel/runtime/helpers/esm/objectWithoutProperties.7.24.1.js
var objectWithoutProperties_7_24_1_exports = {};
__export(objectWithoutProperties_7_24_1_exports, {
  default: () => objectWithoutProperties_7_24_1_default
});
module.exports = __toCommonJS(objectWithoutProperties_7_24_1_exports);

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var import_objectWithoutPropertiesLoose = __toESM(require("@babel/runtime@7.24.1/helpers/esm/objectWithoutPropertiesLoose"), 0);
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0, import_objectWithoutPropertiesLoose.default)(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/objectWithoutProperties.7.24.1.js
var objectWithoutProperties_7_24_1_default = _objectWithoutProperties;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLjcuMjQuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyJdLCJuYW1lcyI6WyJvYmplY3RXaXRob3V0UHJvcGVydGllc183XzI0XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXzdfMjRfMV9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwiX190b0VTTSIsInJlcXVpcmUiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJzb3VyY2UiLCJleGNsdWRlZCIsInRhcmdldCIsImtleSIsImkiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzb3VyY2VTeW1ib2xLZXlzIiwibGVuZ3RoIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsc0NBQUE7QUFBQUMsUUFBQSxDQUFBRCxzQ0FBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTixzQ0FBQTs7O0FDQUEsSUFBQU8sbUNBQUEsR0FBeUNDLE9BQUEsQ0FBQUMsT0FBQTtBQUMxQixTQUFSQyx5QkFBMENDLE1BQUEsRUFBUUMsUUFBQSxFQUFVO0VBQ2pFLElBQUlELE1BQUEsSUFBVSxNQUFNLE9BQU8sQ0FBQztFQUM1QixJQUFJRSxNQUFBLE9BQVNOLG1DQUFBLENBQUFMLE9BQUEsRUFBNkJTLE1BQUEsRUFBUUMsUUFBUTtFQUMxRCxJQUFJRSxHQUFBLEVBQUtDLENBQUE7RUFDVCxJQUFJQyxNQUFBLENBQU9DLHFCQUFBLEVBQXVCO0lBQ2hDLElBQUlDLGdCQUFBLEdBQW1CRixNQUFBLENBQU9DLHFCQUFBLENBQXNCTixNQUFNO0lBQzFELEtBQUtJLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlHLGdCQUFBLENBQWlCQyxNQUFBLEVBQVFKLENBQUEsSUFBSztNQUM1Q0QsR0FBQSxHQUFNSSxnQkFBQSxDQUFpQkgsQ0FBQTtNQUN2QixJQUFJSCxRQUFBLENBQVNRLE9BQUEsQ0FBUU4sR0FBRyxLQUFLLEdBQUc7TUFDaEMsSUFBSSxDQUFDRSxNQUFBLENBQU9LLFNBQUEsQ0FBVUMsb0JBQUEsQ0FBcUJDLElBQUEsQ0FBS1osTUFBQSxFQUFRRyxHQUFHLEdBQUc7TUFDOURELE1BQUEsQ0FBT0MsR0FBQSxJQUFPSCxNQUFBLENBQU9HLEdBQUE7SUFDdkI7RUFDRjtFQUNBLE9BQU9ELE1BQUE7QUFDVDs7O0FEWkEsSUFBT1Ysc0NBQUEsR0FBUU8sd0JBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=