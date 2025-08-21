System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"]]);
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

// .beyond/uimport/temp/orderedmap.2.1.1.js
var orderedmap_2_1_1_exports = {};
__export(orderedmap_2_1_1_exports, {
  default: () => orderedmap_2_1_1_default
});
module.exports = __toCommonJS(orderedmap_2_1_1_exports);

// node_modules/orderedmap/dist/index.js
function OrderedMap(content) {
  this.content = content;
}
OrderedMap.prototype = {
  constructor: OrderedMap,
  find: function (key) {
    for (var i = 0; i < this.content.length; i += 2) if (this.content[i] === key) return i;
    return -1;
  },
  get: function (key) {
    var found = this.find(key);
    return found == -1 ? void 0 : this.content[found + 1];
  },
  update: function (key, value, newKey) {
    var self = newKey && newKey != key ? this.remove(newKey) : this;
    var found = self.find(key),
      content = self.content.slice();
    if (found == -1) {
      content.push(newKey || key, value);
    } else {
      content[found + 1] = value;
      if (newKey) content[found] = newKey;
    }
    return new OrderedMap(content);
  },
  remove: function (key) {
    var found = this.find(key);
    if (found == -1) return this;
    var content = this.content.slice();
    content.splice(found, 2);
    return new OrderedMap(content);
  },
  addToStart: function (key, value) {
    return new OrderedMap([key, value].concat(this.remove(key).content));
  },
  addToEnd: function (key, value) {
    var content = this.remove(key).content.slice();
    content.push(key, value);
    return new OrderedMap(content);
  },
  addBefore: function (place, key, value) {
    var without = this.remove(key),
      content = without.content.slice();
    var found = without.find(place);
    content.splice(found == -1 ? content.length : found, 0, key, value);
    return new OrderedMap(content);
  },
  forEach: function (f) {
    for (var i = 0; i < this.content.length; i += 2) f(this.content[i], this.content[i + 1]);
  },
  prepend: function (map) {
    map = OrderedMap.from(map);
    if (!map.size) return this;
    return new OrderedMap(map.content.concat(this.subtract(map).content));
  },
  append: function (map) {
    map = OrderedMap.from(map);
    if (!map.size) return this;
    return new OrderedMap(this.subtract(map).content.concat(map.content));
  },
  subtract: function (map) {
    var result = this;
    map = OrderedMap.from(map);
    for (var i = 0; i < map.content.length; i += 2) result = result.remove(map.content[i]);
    return result;
  },
  toObject: function () {
    var result = {};
    this.forEach(function (key, value) {
      result[key] = value;
    });
    return result;
  },
  get size() {
    return this.content.length >> 1;
  }
};
OrderedMap.from = function (value) {
  if (value instanceof OrderedMap) return value;
  var content = [];
  if (value) for (var prop in value) content.push(prop, value[prop]);
  return new OrderedMap(content);
};
var dist_default = OrderedMap;

// .beyond/uimport/temp/orderedmap.2.1.1.js
var orderedmap_2_1_1_default = dist_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL29yZGVyZWRtYXAuMi4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvb3JkZXJlZG1hcC9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIm9yZGVyZWRtYXBfMl8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIm9yZGVyZWRtYXBfMl8xXzFfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJPcmRlcmVkTWFwIiwiY29udGVudCIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwiZmluZCIsImtleSIsImkiLCJsZW5ndGgiLCJnZXQiLCJmb3VuZCIsInVwZGF0ZSIsInZhbHVlIiwibmV3S2V5Iiwic2VsZiIsInJlbW92ZSIsInNsaWNlIiwicHVzaCIsInNwbGljZSIsImFkZFRvU3RhcnQiLCJjb25jYXQiLCJhZGRUb0VuZCIsImFkZEJlZm9yZSIsInBsYWNlIiwid2l0aG91dCIsImZvckVhY2giLCJmIiwicHJlcGVuZCIsIm1hcCIsImZyb20iLCJzaXplIiwic3VidHJhY3QiLCJhcHBlbmQiLCJyZXN1bHQiLCJ0b09iamVjdCIsInByb3AiLCJkaXN0X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsd0JBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sd0JBQUE7OztBQ0VBLFNBQVNPLFdBQVdDLE9BQUEsRUFBUztFQUMzQixLQUFLQSxPQUFBLEdBQVVBLE9BQUE7QUFDakI7QUFFQUQsVUFBQSxDQUFXRSxTQUFBLEdBQVk7RUFDckJDLFdBQUEsRUFBYUgsVUFBQTtFQUViSSxJQUFBLEVBQU0sU0FBQUEsQ0FBU0MsR0FBQSxFQUFLO0lBQ2xCLFNBQVNDLENBQUEsR0FB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QVc7SUFDbkIsSUFBSUQsTUFBQSxHQUFTLENBQUM7SUFDZCxLQUFLUixPQUFBLENBQVEsVUFBU25CLEdBQUEsRUFBS00sS0FBQSxFQUFPO01BQUVxQixNQUFBLENBQU8zQixHQUFBLElBQU9NLEtBQUE7SUFBTyxDQUFDO0lBQzFELE9BQU9xQixNQUFBO0VBQ1Q7RUFJQSxJQUFJSCxLQUFBLEVBQU87SUFDVCxPQUFPLEtBQUs1QixPQUFBLENBQVFNLE1BQUEsSUFBVTtFQUNoQztBQUNGO0FBTUFQLFVBQUEsQ0FBVzRCLElBQUEsR0FBTyxVQUFTakIsS0FBQSxFQUFPO0VBQ2hDLElBQUlBLEtBQUEsWUFBaUJYLFVBQUEsRUFBWSxPQUFPVyxLQUFBO0VBQ3hDLElBQUlWLE9BQUEsR0FBVSxFQUFDO0VBQ2YsSUFBSVUsS0FBQSxFQUFPLFNBQVN1QixJQUFBLElBQVF2QixLQUFBLEVBQU9WLE9BQUEsQ0FBUWUsSUFBQSxDQUFLa0IsSUFBQSxFQUFNdkIsS0FBQSxDQUFNdUIsSUFBQSxDQUFLO0VBQ2pFLE9BQU8sSUFBSWxDLFVBQUEsQ0FBV0MsT0FBTztBQUMvQjtBQUVBLElBQU9rQyxZQUFBLEdBQVFuQyxVQUFBOzs7QURySWYsSUFBT0osd0JBQUEsR0FBUXVDLFlBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL3J2ZC9vdXQifQ==