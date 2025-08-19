System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@tiptap/core","3.2.0"]]);
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

// .beyond/uimport/@tiptap/core/jsx-runtime.3.2.0.js
var jsx_runtime_3_2_0_exports = {};
__export(jsx_runtime_3_2_0_exports, {
  Fragment: () => Fragment,
  createElement: () => h,
  h: () => h,
  jsx: () => h,
  jsxDEV: () => h,
  jsxs: () => h
});
module.exports = __toCommonJS(jsx_runtime_3_2_0_exports);

// node_modules/@tiptap/core/dist/jsx-runtime/jsx-runtime.js
function Fragment(props) {
  return props.children;
}
var h = (tag, attributes) => {
  if (tag === "slot") {
    return 0;
  }
  if (tag instanceof Function) {
    return tag(attributes);
  }
  const {
    children,
    ...rest
  } = attributes != null ? attributes : {};
  if (tag === "svg") {
    throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
  }
  return [tag, rest, children];
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2NvcmUvanN4LXJ1bnRpbWUuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9qc3gtcnVudGltZS50cyJdLCJuYW1lcyI6WyJqc3hfcnVudGltZV8zXzJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJGcmFnbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoIiwianN4IiwianN4REVWIiwianN4cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJwcm9wcyIsImNoaWxkcmVuIiwidGFnIiwiYXR0cmlidXRlcyIsIkZ1bmN0aW9uIiwicmVzdCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx5QkFBQTtBQUFBQyxRQUFBLENBQUFELHlCQUFBO0VBQUFFLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxDQUFBO0VBQUFBLENBQUEsRUFBQUEsQ0FBQSxLQUFBQSxDQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBRCxDQUFBO0VBQUFFLE1BQUEsRUFBQUEsQ0FBQSxLQUFBRixDQUFBO0VBQUFHLElBQUEsRUFBQUEsQ0FBQSxLQUFBSDtBQUFBO0FBQUFJLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFWLHlCQUFBOzs7QUNtQ08sU0FBU0UsU0FBU1MsS0FBQSxFQUFvQztFQUMzRCxPQUFPQSxLQUFBLENBQU1DLFFBQUE7QUFDZjtBQUVPLElBQU1SLENBQUEsR0FBaUJBLENBQUNTLEdBQUEsRUFBS0MsVUFBQSxLQUFlO0VBRWpELElBQUlELEdBQUEsS0FBUSxRQUFRO0lBQ2xCLE9BQU87RUFDVDtFQUdBLElBQUlBLEdBQUEsWUFBZUUsUUFBQSxFQUFVO0lBQzNCLE9BQU9GLEdBQUEsQ0FBSUMsVUFBVTtFQUN2QjtFQUVBLE1BQU07SUFBRUYsUUFBQTtJQUFBLEdBQWFJO0VBQUssSUFBSUYsVUFBQSxXQUFBQSxVQUFBLEdBQWMsQ0FBQztFQUU3QyxJQUFJRCxHQUFBLEtBQVEsT0FBTztJQUNqQixNQUFNLElBQUlJLEtBQUEsQ0FBTSxnRkFBZ0Y7RUFDbEc7RUFHQSxPQUFPLENBQUNKLEdBQUEsRUFBS0csSUFBQSxFQUFNSixRQUFRO0FBQzdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9ydmQvb3V0In0=