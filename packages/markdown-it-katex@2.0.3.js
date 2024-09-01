System.register(["match-at@0.1.1","katex@0.6.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["katex","0.6.0"],["match-at","0.1.1"],["markdown-it-katex","2.0.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('match-at@0.1.1', dep), dep => dependencies.set('katex@0.6.0', dep)],
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
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/markdown-it-katex/index.js
var require_markdown_it_katex = __commonJS({
  "node_modules/markdown-it-katex/index.js"(exports, module2) {
    "use strict";

    var katex = require("katex@0.6.0");
    function isValidDelim(state, pos) {
      var prevChar,
        nextChar,
        max = state.posMax,
        can_open = true,
        can_close = true;
      prevChar = pos > 0 ? state.src.charCodeAt(pos - 1) : -1;
      nextChar = pos + 1 <= max ? state.src.charCodeAt(pos + 1) : -1;
      if (prevChar === 32 || prevChar === 9 || nextChar >= 48 && nextChar <= 57) {
        can_close = false;
      }
      if (nextChar === 32 || nextChar === 9) {
        can_open = false;
      }
      return {
        can_open,
        can_close
      };
    }
    function math_inline(state, silent) {
      var start, match, token, res, pos, esc_count;
      if (state.src[state.pos] !== "$") {
        return false;
      }
      res = isValidDelim(state, state.pos);
      if (!res.can_open) {
        if (!silent) {
          state.pending += "$";
        }
        state.pos += 1;
        return true;
      }
      start = state.pos + 1;
      match = start;
      while ((match = state.src.indexOf("$", match)) !== -1) {
        pos = match - 1;
        while (state.src[pos] === "\\") {
          pos -= 1;
        }
        if ((match - pos) % 2 == 1) {
          break;
        }
        match += 1;
      }
      if (match === -1) {
        if (!silent) {
          state.pending += "$";
        }
        state.pos = start;
        return true;
      }
      if (match - start === 0) {
        if (!silent) {
          state.pending += "$$";
        }
        state.pos = start + 1;
        return true;
      }
      res = isValidDelim(state, match);
      if (!res.can_close) {
        if (!silent) {
          state.pending += "$";
        }
        state.pos = start;
        return true;
      }
      if (!silent) {
        token = state.push("math_inline", "math", 0);
        token.markup = "$";
        token.content = state.src.slice(start, match);
      }
      state.pos = match + 1;
      return true;
    }
    function math_block(state, start, end, silent) {
      var firstLine,
        lastLine,
        next,
        lastPos,
        found = false,
        token,
        pos = state.bMarks[start] + state.tShift[start],
        max = state.eMarks[start];
      if (pos + 2 > max) {
        return false;
      }
      if (state.src.slice(pos, pos + 2) !== "$$") {
        return false;
      }
      pos += 2;
      firstLine = state.src.slice(pos, max);
      if (silent) {
        return true;
      }
      if (firstLine.trim().slice(-2) === "$$") {
        firstLine = firstLine.trim().slice(0, -2);
        found = true;
      }
      for (next = start; !found;) {
        next++;
        if (next >= end) {
          break;
        }
        pos = state.bMarks[next] + state.tShift[next];
        max = state.eMarks[next];
        if (pos < max && state.tShift[next] < state.blkIndent) {
          break;
        }
        if (state.src.slice(pos, max).trim().slice(-2) === "$$") {
          lastPos = state.src.slice(0, max).lastIndexOf("$$");
          lastLine = state.src.slice(pos, lastPos);
          found = true;
        }
      }
      state.line = next + 1;
      token = state.push("math_block", "math", 0);
      token.block = true;
      token.content = (firstLine && firstLine.trim() ? firstLine + "\n" : "") + state.getLines(start + 1, next, state.tShift[start], true) + (lastLine && lastLine.trim() ? lastLine : "");
      token.map = [start, state.line];
      token.markup = "$$";
      return true;
    }
    module2.exports = function math_plugin(md, options) {
      options = options || {};
      var katexInline = function (latex) {
        options.displayMode = false;
        try {
          return katex.renderToString(latex, options);
        } catch (error) {
          if (options.throwOnError) {
            console.log(error);
          }
          return latex;
        }
      };
      var inlineRenderer = function (tokens, idx) {
        return katexInline(tokens[idx].content);
      };
      var katexBlock = function (latex) {
        options.displayMode = true;
        try {
          return "<p>" + katex.renderToString(latex, options) + "</p>";
        } catch (error) {
          if (options.throwOnError) {
            console.log(error);
          }
          return latex;
        }
      };
      var blockRenderer = function (tokens, idx) {
        return katexBlock(tokens[idx].content) + "\n";
      };
      md.inline.ruler.after("escape", "math_inline", math_inline);
      md.block.ruler.after("blockquote", "math_block", math_block, {
        alt: ["paragraph", "reference", "blockquote", "list"]
      });
      md.renderer.rules.math_inline = inlineRenderer;
      md.renderer.rules.math_block = blockRenderer;
    };
  }
});

// .beyond/uimport/temp/markdown-it-katex.2.0.3.js
var markdown_it_katex_2_0_3_exports = {};
__export(markdown_it_katex_2_0_3_exports, {
  default: () => markdown_it_katex_2_0_3_default
});
module.exports = __toCommonJS(markdown_it_katex_2_0_3_exports);
__reExport(markdown_it_katex_2_0_3_exports, __toESM(require_markdown_it_katex()), module.exports);
var import_markdown_it_katex = __toESM(require_markdown_it_katex());
var markdown_it_katex_2_0_3_default = import_markdown_it_katex.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC1rYXRleC9pbmRleC5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtkb3duLWl0LWthdGV4LjIuMC4zLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVfbWFya2Rvd25faXRfa2F0ZXgiLCJfX2NvbW1vbkpTIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0LWthdGV4L2luZGV4LmpzIiwiZXhwb3J0cyIsIm1vZHVsZTIiLCJrYXRleCIsInJlcXVpcmUiLCJpc1ZhbGlkRGVsaW0iLCJzdGF0ZSIsInBvcyIsInByZXZDaGFyIiwibmV4dENoYXIiLCJtYXgiLCJwb3NNYXgiLCJjYW5fb3BlbiIsImNhbl9jbG9zZSIsInNyYyIsImNoYXJDb2RlQXQiLCJtYXRoX2lubGluZSIsInNpbGVudCIsInN0YXJ0IiwibWF0Y2giLCJ0b2tlbiIsInJlcyIsImVzY19jb3VudCIsInBlbmRpbmciLCJpbmRleE9mIiwicHVzaCIsIm1hcmt1cCIsImNvbnRlbnQiLCJzbGljZSIsIm1hdGhfYmxvY2siLCJlbmQiLCJmaXJzdExpbmUiLCJsYXN0TGluZSIsIm5leHQiLCJsYXN0UG9zIiwiZm91bmQiLCJiTWFya3MiLCJ0U2hpZnQiLCJlTWFya3MiLCJ0cmltIiwiYmxrSW5kZW50IiwibGFzdEluZGV4T2YiLCJsaW5lIiwiYmxvY2siLCJnZXRMaW5lcyIsIm1hcCIsIm1hdGhfcGx1Z2luIiwibWQiLCJvcHRpb25zIiwia2F0ZXhJbmxpbmUiLCJsYXRleCIsImRpc3BsYXlNb2RlIiwicmVuZGVyVG9TdHJpbmciLCJlcnJvciIsInRocm93T25FcnJvciIsImNvbnNvbGUiLCJsb2ciLCJpbmxpbmVSZW5kZXJlciIsInRva2VucyIsImlkeCIsImthdGV4QmxvY2siLCJibG9ja1JlbmRlcmVyIiwiaW5saW5lIiwicnVsZXIiLCJhZnRlciIsImFsdCIsInJlbmRlcmVyIiwicnVsZXMiLCJtYXJrZG93bl9pdF9rYXRleF8yXzBfM19leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0IiwibWFya2Rvd25faXRfa2F0ZXhfMl8wXzNfZGVmYXVsdCIsIm1vZHVsZSIsIl9fdG9Db21tb25KUyIsIl9fcmVFeHBvcnQiLCJfX3RvRVNNIiwiaW1wb3J0X21hcmtkb3duX2l0X2thdGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx5QkFBQSxHQUFBQyxVQUFBO0VBQUEseUNBQUFDLENBQUFDLE9BQUEsRUFBQUMsT0FBQTtJQUFBOztJQVlBLElBQUlDLEtBQUEsR0FBUUMsT0FBQSxDQUFRO0lBSXBCLFNBQVNDLGFBQWFDLEtBQUEsRUFBT0MsR0FBQSxFQUFLO01BQzlCLElBQUlDLFFBQUE7UUFBVUMsUUFBQTtRQUNWQyxHQUFBLEdBQU1KLEtBQUEsQ0FBTUssTUFBQTtRQUNaQyxRQUFBLEdBQVc7UUFDWEMsU0FBQSxHQUFZO01BRWhCTCxRQUFBLEdBQVdELEdBQUEsR0FBTSxJQUFJRCxLQUFBLENBQU1RLEdBQUEsQ0FBSUMsVUFBQSxDQUFXUixHQUFBLEdBQU0sQ0FBQyxJQUFJO01BQ3JERSxRQUFBLEdBQVdGLEdBQUEsR0FBTSxLQUFLRyxHQUFBLEdBQU1KLEtBQUEsQ0FBTVEsR0FBQSxDQUFJQyxVQUFBLENBQVdSLEdBQUEsR0FBTSxDQUFDLElBQUk7TUFJNUQsSUFBSUMsUUFBQSxLQUFhLE1BQWlCQSxRQUFBLEtBQWEsS0FDdENDLFFBQUEsSUFBWSxNQUFpQkEsUUFBQSxJQUFZLElBQWdCO1FBQzlESSxTQUFBLEdBQVk7TUFDaEI7TUFDQSxJQUFJSixRQUFBLEtBQWEsTUFBaUJBLFFBQUEsS0FBYSxHQUFjO1FBQ3pERyxRQUFBLEdBQVc7TUFDZjtNQUVBLE9BQU87UUFDSEEsUUFBQTtRQUNBQztNQUNKO0lBQ0o7SUFFQSxTQUFTRyxZQUFZVixLQUFBLEVBQU9XLE1BQUEsRUFBUTtNQUNoQyxJQUFJQyxLQUFBLEVBQU9DLEtBQUEsRUFBT0MsS0FBQSxF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