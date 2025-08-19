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

// .beyond/uimport/orderedmap.2.1.1.js
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

// .beyond/uimport/orderedmap.2.1.1.js
var orderedmap_2_1_1_default = dist_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9vcmRlcmVkbWFwLjIuMS4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL29yZGVyZWRtYXAvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJvcmRlcmVkbWFwXzJfMV8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJvcmRlcmVkbWFwXzJfMV8xX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiT3JkZXJlZE1hcCIsImNvbnRlbnQiLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsImZpbmQiLCJrZXkiLCJpIiwibGVuZ3RoIiwiZ2V0IiwiZm91bmQiLCJ1cGRhdGUiLCJ2YWx1ZSIsIm5ld0tleSIsInNlbGYiLCJyZW1vdmUiLCJzbGljZSIsInB1c2giLCJzcGxpY2UiLCJhZGRUb1N0YXJ0IiwiY29uY2F0IiwiYWRkVG9FbmQiLCJhZGRCZWZvcmUiLCJwbGFjZSIsIndpdGhvdXQiLCJmb3JFYWNoIiwiZiIsInByZXBlbmQiLCJtYXAiLCJmcm9tIiwic2l6ZSIsInN1YnRyYWN0IiwiYXBwZW5kIiwicmVzdWx0IiwidG9PYmplY3QiLCJwcm9wIiwiZGlzdF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx3QkFBQTtBQUFBQyxRQUFBLENBQUFELHdCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLHdCQUFBOzs7QUNFQSxTQUFTTyxXQUFXQyxPQUFBLEVBQVM7RUFDM0IsS0FBS0EsT0FBQSxHQUFVQSxPQUFBO0FBQ2pCO0FBRUFELFVBQUEsQ0FBV0UsU0FBQSxHQUFZO0VBQ3JCQyxXQUFBLEVBQWFILFVBQUE7RUFFYkksSUFBQSxFQUFNLFNBQUFBLENBQVNDLEdBQUEsRUFBSztJQUNsQixTQUFTQyxDQUFBLEdBQUksR0FB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Q25CLElBQUlELE1BQUEsR0FBUyxDQUFDO0lBQ2QsS0FBS1IsT0FBQSxDQUFRLFVBQVNuQixHQUFBLEVBQUtNLEtBQUEsRUFBTztNQUFFcUIsTUFBQSxDQUFPM0IsR0FBQSxJQUFPTSxLQUFBO0lBQU8sQ0FBQztJQUMxRCxPQUFPcUIsTUFBQTtFQUNUO0VBSUEsSUFBSUgsS0FBQSxFQUFPO0lBQ1QsT0FBTyxLQUFLNUIsT0FBQSxDQUFRTSxNQUFBLElBQVU7RUFDaEM7QUFDRjtBQU1BUCxVQUFBLENBQVc0QixJQUFBLEdBQU8sVUFBU2pCLEtBQUEsRUFBTztFQUNoQyxJQUFJQSxLQUFBLFlBQWlCWCxVQUFBLEVBQVksT0FBT1csS0FBQTtFQUN4QyxJQUFJVixPQUFBLEdBQVUsRUFBQztFQUNmLElBQUlVLEtBQUEsRUFBTyxTQUFTdUIsSUFBQSxJQUFRdkIsS0FBQSxFQUFPVixPQUFBLENBQVFlLElBQUEsQ0FBS2tCLElBQUEsRUFBTXZCLEtBQUEsQ0FBTXVCLElBQUEsQ0FBSztFQUNqRSxPQUFPLElBQUlsQyxVQUFBLENBQVdDLE9BQU87QUFDL0I7QUFFQSxJQUFPa0MsWUFBQSxHQUFRbkMsVUFBQTs7O0FEcklmLElBQU9KLHdCQUFBLEdBQVF1QyxZQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9ydmQvb3V0In0=