System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["w3c-keyname","2.2.8"]]);
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

// .beyond/uimport/w3c-keyname.2.2.8.js
var w3c_keyname_2_2_8_exports = {};
__export(w3c_keyname_2_2_8_exports, {
  base: () => base,
  keyName: () => keyName,
  shift: () => shift
});
module.exports = __toCommonJS(w3c_keyname_2_2_8_exports);

// node_modules/w3c-keyname/index.js
var base = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
};
var shift = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
};
var mac = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
var ie = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (i = 0; i < 10; i++) base[48 + i] = base[96 + i] = String(i);
for (i = 1; i <= 24; i++) base[i + 111] = "F" + i;
for (i = 65; i <= 90; i++) {
  base[i] = String.fromCharCode(i + 32);
  shift[i] = String.fromCharCode(i);
}
for (code in base) if (!shift.hasOwnProperty(code)) shift[code] = base[code];
function keyName(event) {
  var ignoreKey = mac && event.metaKey && event.shiftKey && !event.ctrlKey && !event.altKey || ie && event.shiftKey && event.key && event.key.length == 1 || event.key == "Unidentified";
  var name = !ignoreKey && event.key || (event.shiftKey ? shift : base)[event.keyCode] || event.key || "Unidentified";
  if (name == "Esc") name = "Escape";
  if (name == "Del") name = "Delete";
  if (name == "Left") name = "ArrowLeft";
  if (name == "Up") name = "ArrowUp";
  if (name == "Right") name = "ArrowRight";
  if (name == "Down") name = "ArrowDown";
  return name;
}
var i;
var code;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC93M2Mta2V5bmFtZS4yLjIuOC5qcyIsIi4uL25vZGVfbW9kdWxlcy93M2Mta2V5bmFtZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3M2Nfa2V5bmFtZV8yXzJfOF9leHBvcnRzIiwiX19leHBvcnQiLCJiYXNlIiwia2V5TmFtZSIsInNoaWZ0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIm1hYyIsIm5hdmlnYXRvciIsInRlc3QiLCJwbGF0Zm9ybSIsImllIiwiZXhlYyIsInVzZXJBZ2VudCIsImkiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJjb2RlIiwiaGFzT3duUHJvcGVydHkiLCJldmVudCIsImlnbm9yZUtleSIsIm1ldGFLZXkiLCJzaGlmdEtleSIsImN0cmxLZXkiLCJhbHRLZXkiLCJrZXkiLCJsZW5ndGgiLCJuYW1lIiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEseUJBQUE7QUFBQUMsUUFBQSxDQUFBRCx5QkFBQTtFQUFBRSxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCx5QkFBQTs7O0FDQU8sSUFBSUUsSUFBQSxHQUFPO0VBQ2hCLEdBQUc7RUFDSCxHQUFHO0VBQ0gsSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7QUFDUDtBQUVPLElBQUlFLEtBQUEsR0FBUTtFQUNqQixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7QUFDUDtBQUVBLElBQUlJLEdBQUEsR0FBTSxPQUFPQyxTQUFBLElBQWEsZUFBZSxNQUFNQyxJQUFBLENBQUtELFNBQUEsQ0FBVUUsUUFBUTtBQUMxRSxJQUFJQyxFQUFBLEdBQUssT0FBT0gsU0FBQSxJQUFhLGVBQWUsZ0RBQWdESSxJQUFBLENBQUtKLFNBQUEsQ0FBVUssU0FBUztBQUdwSCxLQUFTQyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLElBQUlBLENBQUEsSUFBS2IsSUFBQSxDQUFLLEtBQUthLENBQUEsSUFBS2IsSUFBQSxDQUFLLEtBQUthLENBQUEsSUFBS0MsTUFBQSxDQUFPRCxDQUFDO0FBR25FLEtBQVNBLENBQUEsR0FBSSxHQUFHQSxDQUFBLElBQUssSUFBSUEsQ0FBQSxJQUFLYixJQUFBLENBQUthLENBQUEsR0FBSSxPQUFPLE1BQU1BLENBQUE7QUFHcEQsS0FBU0EsQ0FBQSxHQUFJLElBQUlBLENBQUEsSUFBSyxJQUFJQSxDQUFBLElBQUs7RUFDN0JiLElBQUEsQ0FBS2EsQ0FBQSxJQUFLQyxNQUFBLENBQU9DLFlBQUEsQ0FBYUYsQ0FBQSxHQUFJLEVBQUU7RUFDcENYLEtBQUEsQ0FBTVcsQ0FBQSxJQUFLQyxNQUFBLENBQU9DLFlBQUEsQ0FBYUYsQ0FBQztBQUNsQztBQUdBLEtBQVNHLElBQUEsSUFBUWhCLElBQUEsRUFBTSxJQUFJLENBQUNFLEtBQUEsQ0FBTWUsY0FBQSxDQUFlRCxJQUFJLEdBQUdkLEtBQUEsQ0FBTWMsSUFBQSxJQUFRaEIsSUFBQSxDQUFLZ0IsSUFBQTtBQUVwRSxTQUFTZixRQUFRaUIsS0FBQSxFQUFPO0VBRzdCLElBQUlDLFNBQUEsR0FBWWIsR0FBQSxJQUFPWSxLQUFBLENBQU1FLE9BQUEsSUFBV0YsS0FBQSxDQUFNRyxRQUFBLElBQVksQ0FBQ0gsS0FBQSxDQUFNSSxPQUFBLElBQVcsQ0FBQ0osS0FBQSxDQUFNSyxNQUFBLElBQy9FYixFQUFBLElBQU1RLEtBQUEsQ0FBTUcsUUFBQSxJQUFZSCxLQUFBLENBQU1NLEdBQUEsSUFBT04sS0FBQSxDQUFNTSxHQUFBLENBQUlDLE1BQUEsSUFBVSxLQUN6RFAsS0FBQSxDQUFNTSxHQUFBLElBQU87RUFDakIsSUFBSUUsSUFBQSxHQUFRLENBQUNQLFNBQUEsSUFBYUQsS0FBQSxDQUFNTSxHQUFBLEtBQzdCTixLQUFBLENBQU1HLFFBQUEsR0FBV25CLEtBQUEsR0FBUUYsSUFBQSxFQUFNa0IsS0FBQSxDQUFNUyxPQUFBLEtBQ3RDVCxLQUFBLENBQU1NLEdBQUEsSUFBTztFQUVmLElBQUlFLElBQUEsSUFBUSxPQUFPQSxJQUFBLEdBQU87RUFDMUIsSUFBSUEsSUFBQSxJQUFRLE9BQU9BLElBQUEsR0FBTztFQUUxQixJQUFJQSxJQUFBLElBQVEsUUFBUUEsSUFBQSxHQUFPO0VBQzNCLElBQUlBLElBQUEsSUFBUSxNQUFNQSxJQUFBLEdBQU87RUFDekIsSUFBSUEsSUFBQSxJQUFRLFNBQVNBLElBQUEsR0FBTztFQUM1QixJQUFJQSxJQUFBLElBQVEsUUFBUUEsSUFBQSxHQUFPO0VBQzNCLE9BQU9BLElBQUE7QUFDVDtBQWhDUyxJQUFBYixDQUFBO0FBWUEsSUFBQUcsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvcnZkL291dCJ9