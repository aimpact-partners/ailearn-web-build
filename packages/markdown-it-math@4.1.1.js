System.register(["ascii2mathml@0.6.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["markdown-it-math","4.1.1"],["ascii2mathml","0.6.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('ascii2mathml@0.6.2', dep)],
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

// node_modules/markdown-it-math/lib/polyfills.js
var require_polyfills = __commonJS({
  "node_modules/markdown-it-math/lib/polyfills.js"() {
    "use strict";

    if (!Object.assign) {
      Object.defineProperty(Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (target) {
          if (typeof target === "undefined" || target === null) {
            throw new TypeError("Cannot convert first argument to object");
          }
          var to = Object(target);
          for (var i = 1; i < arguments.length; i++) {
            var nextSource = arguments[i];
            if (typeof nextSource === "undefined" || nextSource === null) {
              continue;
            }
            var keysArray = Object.keys(Object(nextSource));
            for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
              var nextKey = keysArray[nextIndex];
              var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
              if (typeof desc !== "undefined" && desc.enumerable) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
          return to;
        }
      });
    }
  }
});

// node_modules/markdown-it-math/index.js
var require_markdown_it_math = __commonJS({
  "node_modules/markdown-it-math/index.js"(exports, module2) {
    "use strict";

    var ascii2mathml = null;
    require_polyfills();
    function scanDelims(state, start, delimLength) {
      var pos = start,
        lastChar,
        nextChar,
        count,
        can_open,
        can_close,
        isLastWhiteSpace,
        isNextWhiteSpace,
        left_flanking = true,
        right_flanking = true,
        max = state.posMax,
        isWhiteSpace = state.md.utils.isWhiteSpace;
      lastChar = start > 0 ? state.src.charCodeAt(start - 1) : 32;
      if (pos >= max) {
        can_open = false;
      }
      pos += delimLength;
      count = pos - start;
      nextChar = pos < max ? state.src.charCodeAt(pos) : 32;
      isLastWhiteSpace = isWhiteSpace(lastChar);
      isNextWhiteSpace = isWhiteSpace(nextChar);
      if (isNextWhiteSpace) {
        left_flanking = false;
      }
      if (isLastWhiteSpace) {
        right_flanking = false;
      }
      can_open = left_flanking;
      can_close = right_flanking;
      return {
        can_open,
        can_close,
        delims: count
      };
    }
    function makeMath_inline(open, close) {
      return function math_inline(state, silent) {
        var startCount,
          found,
          res,
          token,
          closeDelim,
          max = state.posMax,
          start = state.pos,
          openDelim = state.src.slice(start, start + open.length);
        if (openDelim !== open) {
          return false;
        }
        if (silent) {
          return false;
        }
        res = scanDelims(state, start, openDelim.length);
        startCount = res.delims;
        if (!res.can_open) {
          state.pos += startCount;
          state.pending += state.src.slice(start, state.pos);
          return true;
        }
        state.pos = start + open.length;
        while (state.pos < max) {
          closeDelim = state.src.slice(state.pos, state.pos + close.length);
          if (closeDelim === close) {
            res = scanDelims(state, state.pos, close.length);
            if (res.can_close) {
              found = true;
              break;
            }
          }
          state.md.inline.skipToken(state);
        }
        if (!found) {
          state.pos = start;
          return false;
        }
        state.posMax = state.pos;
        state.pos = start + close.length;
        token = state.push("math_inline", "math", 0);
        token.content = state.src.slice(state.pos, state.posMax);
        token.markup = open;
        state.pos = state.posMax + close.length;
        state.posMax = max;
        return true;
      };
    }
    function makeMath_block(open, close) {
      return function math_block(state, startLine, endLine, silent) {
        var openDelim,
          len,
          params,
          nextLine,
          token,
          firstLine,
          lastLine,
          lastLinePos,
          haveEndMarker = false,
          pos = state.bMarks[startLine] + state.tShift[startLine],
          max = state.eMarks[startLine];
        if (pos + open.length > max) {
          return false;
        }
        openDelim = state.src.slice(pos, pos + open.length);
        if (openDelim !== open) {
          return false;
        }
        pos += open.length;
        firstLine = state.src.slice(pos, max);
        if (silent) {
          return true;
        }
        if (firstLine.trim().slice(-close.length) === close) {
          firstLine = firstLine.trim().slice(0, -close.length);
          haveEndMarker = true;
        }
        nextLine = startLine;
        for (;;) {
          if (haveEndMarker) {
            break;
          }
          nextLine++;
          if (nextLine >= endLine) {
            break;
          }
          pos = state.bMarks[nextLine] + state.tShift[nextLine];
          max = state.eMarks[nextLine];
          if (pos < max && state.tShift[nextLine] < state.blkIndent) {
            break;
          }
          if (state.src.slice(pos, max).trim().slice(-close.length) !== close) {
            continue;
          }
          if (state.tShift[nextLine] - state.blkIndent >= 4) {
            continue;
          }
          lastLinePos = state.src.slice(0, max).lastIndexOf(close);
          lastLine = state.src.slice(pos, lastLinePos);
          pos += lastLine.length + close.length;
          pos = state.skipSpaces(pos);
          if (pos < max) {
            continue;
          }
          haveEndMarker = true;
        }
        len = state.tShift[startLine];
        state.line = nextLine + (haveEndMarker ? 1 : 0);
        token = state.push("math_block", "math", 0);
        token.block = true;
        token.content = (firstLine && firstLine.trim() ? firstLine + "\n" : "") + state.getLines(startLine + 1, nextLine, len, true) + (lastLine && lastLine.trim() ? lastLine : "");
        token.info = params;
        token.map = [startLine, state.line];
        token.markup = open;
        return true;
      };
    }
    function makeMathRenderer(renderingOptions) {
      if (ascii2mathml === null) {
        try {
          ascii2mathml = require("ascii2mathml@0.6.2").default;
        } catch (e) {
          return renderingOptions && renderingOptions.display === "block" ? function (tokens, idx) {
            return '<div class="math block">' + tokens[idx].content + "</div>";
          } : function (tokens, idx) {
            return '<span class="math inline">' + tokens[idx].content + "</span>";
          };
        }
      }
      var mathml = ascii2mathml(Object.assign({}, renderingOptions));
      return renderingOptions && renderingOptions.display === "block" ? function (tokens, idx) {
        return mathml(tokens[idx].content) + "\n";
      } : function (tokens, idx) {
        return mathml(tokens[idx].content);
      };
    }
    module2.exports = function math_plugin(md, options) {
      options = typeof options === "object" ? options : {};
      var inlineOpen = options.inlineOpen || "$$",
        inlineClose = options.inlineClose || "$$",
        blockOpen = options.blockOpen || "$$$",
        blockClose = options.blockClose || "$$$";
      var inlineRenderer = options.inlineRenderer ? function (tokens, idx) {
        return options.inlineRenderer(tokens[idx].content, tokens[idx]);
      } : makeMathRenderer(options.renderingOptions);
      var blockRenderer = options.blockRenderer ? function (tokens, idx) {
        return options.blockRenderer(tokens[idx].content, tokens[idx]) + "\n";
      } : makeMathRenderer(Object.assign({
        display: "block"
      }, options.renderingOptions));
      var math_inline = makeMath_inline(inlineOpen, inlineClose);
      var math_block = makeMath_block(blockOpen, blockClose);
      md.inline.ruler.before("escape", "math_inline", math_inline);
      md.block.ruler.after("blockquote", "math_block", math_block, {
        alt: ["paragraph", "reference", "blockquote", "list"]
      });
      md.renderer.rules.math_inline = inlineRenderer;
      md.renderer.rules.math_block = blockRenderer;
    };
  }
});

// .beyond/uimport/temp/markdown-it-math.4.1.1.js
var markdown_it_math_4_1_1_exports = {};
__export(markdown_it_math_4_1_1_exports, {
  default: () => markdown_it_math_4_1_1_default
});
module.exports = __toCommonJS(markdown_it_math_4_1_1_exports);
__reExport(markdown_it_math_4_1_1_exports, __toESM(require_markdown_it_math()), module.exports);
var import_markdown_it_math = __toESM(require_markdown_it_math());
var markdown_it_math_4_1_1_default = import_markdown_it_math.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC1tYXRoL2xpYi9wb2x5ZmlsbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQtbWF0aC9pbmRleC5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtkb3duLWl0LW1hdGguNC4xLjEuanMiXSwibmFtZXMiOlsicmVxdWlyZV9wb2x5ZmlsbHMiLCJfX2NvbW1vbkpTIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0LW1hdGgvbGliL3BvbHlmaWxscy5qcyIsIk9iamVjdCIsImFzc2lnbiIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJ0byIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJuZXh0U291cmNlIiwia2V5c0FycmF5Iiwia2V5cyIsIm5leHRJbmRleCIsImxlbiIsIm5leHRLZXkiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicmVxdWlyZV9tYXJrZG93bl9pdF9tYXRoIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0LW1hdGgvaW5kZXguanMiLCJleHBvcnRzIiwibW9kdWxlMiIsImFzY2lpMm1hdGhtbCIsInNjYW5EZWxpbXMiLCJzdGF0ZSIsInN0YXJ0IiwiZGVsaW1MZW5ndGgiLCJwb3MiLCJsYXN0Q2hhciIsIm5leHRDaGFyIiwiY291bnQiLCJjYW5fb3BlbiIsImNhbl9jbG9zZSIsImlzTGFzdFdoaXRlU3BhY2UiLCJpc05leHRXaGl0ZVNwYWNlIiwibGVmdF9mbGFua2luZyIsInJpZ2h0X2ZsYW5raW5nIiwibWF4IiwicG9zTWF4IiwiaXNXaGl0ZVNwYWNlIiwibWQiLCJ1dGlscyIsInNyYyIsImNoYXJDb2RlQXQiLCJkZWxpbXMiLCJtYWtlTWF0aF9pbmxpbmUiLCJvcGVuIiwiY2xvc2UiLCJtYXRoX2lubGluZSIsInNpbGVudCIsInN0YXJ0Q291bnQiLCJmb3VuZCIsInJlcyIsInRva2VuIiwiY2xvc2VEZWxpbSIsIm9wZW5EZWxpbSIsInNsaWNlIiwicGVuZGluZyIsImlubGluZSIsInNraXBUb2tlbiIsInB1c2giLCJjb250ZW50IiwibWFya3VwIiwibWFrZU1hdGhfYmxvY2siLCJtYXRoX2Jsb2NrIiwic3RhcnRMaW5lIiwiZW5kTGluZSIsInBhcmFtcyIsIm5leHRMaW5lIiwiZmlyc3RMaW5lIiwibGFzdExpbmUiLCJsYXN0TGluZVBvcyIsImhhdmVFbmRNYXJrZXIiLCJiTWFya3MiLCJ0U2hpZnQiLCJlTWFya3MiLCJ0cmltIiwiYmxrSW5kZW50IiwibGFzdEluZGV4T2YiLCJza2lwU3BhY2VzIiwibGluZSIsImJsb2NrIiwiZ2V0TGluZXMiLCJpbmZvIiwibWFwIiwibWFrZU1hdGhSZW5kZXJlciIsInJlbmRlcmluZ09wdGlvbnMiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImUiLCJkaXNwbGF5IiwidG9rZW5zIiwiaWR4IiwibWF0aG1sIiwibWF0aF9wbHVnaW4iLCJvcHRpb25zIiwiaW5saW5lT3BlbiIsImlubGluZUNsb3NlIiwiYmxvY2tPcGVuIiwiYmxvY2tDbG9zZSIsImlubGluZVJlbmRlcmVyIiwiYmxvY2tSZW5kZXJlciIsInJ1bGVyIiwiYmVmb3JlIiwiYWZ0ZXIiLCJhbHQiLCJyZW5kZXJlciIsInJ1bGVzIiwibWFya2Rvd25faXRfbWF0aF80XzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJtYXJrZG93bl9pdF9tYXRoXzRfMV8xX2RlZmF1bHQiLCJtb2R1bGUiLCJfX3RvQ29tbW9uSlMiLCJfX3JlRXhwb3J0IiwiX190b0VTTSIsImltcG9ydF9tYXJrZG93bl9pdF9tYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxpQkFBQSxHQUFBQyxVQUFBO0VBQUEsZ0RBQUFDLENBQUE7SUFBQTs7SUFXQSxJQUFJLENBQUNDLE1BQUEsQ0FBT0MsTUFBQSxFQUFRO01BQ2xCRCxNQUFBLENBQU9FLGNBQUEsQ0FBZUYsTUFBQSxFQUFRLFVBQVU7UUFDdENHLFVBQUEsRUFBWTtRQUNaQyxZQUFBLEVBQWM7UUFDZEMsUUFBQSxFQUFVO1FBQ1ZDLEtBQUEsRUFBTyxTQUFBQSxDQUFTQyxNQUFBLEVBQVE7VUFDdEIsSUFBSSxPQUFPQSxNQUFBLEtBQVcsZUFBZUEsTUFBQSxLQUFXLE1BQU07WUFDcEQsTUFBTSxJQUFJQyxTQUFBLENBQVUseUNBQXlDO1VBQy9EO1VBRUEsSUFBSUMsRUFBQSxHQUFLVCxNQUFBLENBQU9PLE1BQU07VUFDdEIsU0FBU0csQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSUMsU0FBQSxDQUFVQyxNQUFBLEVBQVFGLENBQUEsSUFBSztZQUN6QyxJQUFJRyxVQUFBLEdBQWFGLFNBQUEsQ0FBVUQsQ0FBQTtZQUMzQixJQUFJLE9BQU9HLFVBQUEsS0FBZSxlQUFlQSxVQUFBLEtBQWUsTUFBTTtjQUM1RDtZQUNGO1lBRUEsSUFBSUMsU0FBQSxHQUFZZCxNQUFBLENBQU9lLElBQUEsQ0FBS2YsTUFBQSxDQUFPYSxVQUFVLENBQUM7WUFDOUMsU0FBU0csU0FBQSxHQUFZLEdBQUdDLEdBQUEsR0FBTUgsU0FBQSxDQUFVRixNQUFBLEVBQVFJLFNBQUEsR0FBWUMsR0FBQSxFQUFLRCxTQUFBLElBQWE7Y0FDNUUsSUFBSUUsT0FBQSxHQUFVSixTQUFBLENBQVVFLFNBQUE7Y0FDeEIsSUFBSUcsSUFBQSxHQUFPbkIsTUFBQSxDQUFPb0Isd0JBQUEsQ0FBeUJQLFVBQUEsRUFBWUssT0FBTztjQUM5RCxJQUFJLE9BQU9DLElBQUEsS0FBUyxlQUFlQSxJQUFBLENBQUtoQixVQUFBLEVBQVk7Z0JBQ2xETSxFQUFBLENBQUdTLE9BQUEsSUFBV0wsVUFBQSxDQUFXSyxPQUFBO2NBQzNCO1lBQ0Y7VUFDRjtVQUNBLE9BQU9ULEVBQUE7UUFDVDtNQUNGLENBQUM7SUFDSDtFQUFBO0FBQUE7OztBQ3hDQSxJQUFBWSx3QkFBQSxHQUFBdkIsVUFBQTtFQUFBLHdDQUFBd0IsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBO0lBQUE7O0lBSUEsSUFBSUMsWUFBQSxHQUFlO0lBQ25CNUIsaUJBQUE7SUFHQSxTQUFTNkIsV0FBV0MsS0FBQSxFQUFPQyxLQUFBLEVBQU9DLFdBQUEsRUFBYTtNQUM3QyxJQUFJQyxHQUFBLEdBQU1GLEtBQUE7UUFBT0csUUFBQTtRQUFVQyxRQUFBO1FBQVVDLEtBQUE7UUFBT0MsUUFBQTtRQUFVQyxTQUFBO1FBQ2xEQyxnQkFBQTtRQUFrQkMsZ0JBQUE7UUFDbEJDLGFBQUEsR0FBZ0I7UUFDaEJDLGNBQUEsR0FBaUI7UUFDakJDLEdBQUEsR0FBTWIsS0FBQSxDQUFNYyxNQUFBO1FBQ1pDLFlBQUEsR0FBZWYsS0FBQSxDQUFNZ0IsRUFBQSxDQUFHQyxLQUFBLENBQU1GLFlBQUE7TUFHbENYLFFBQUEsR0FBV0gsS0FBQSxHQUFRLElBQUlELEtBQUEsQ0FBTWtCLEdBQUEsQ0FBSUMsVUFBQSxDQUFXbEIsS0FBQSxHQUFRLENBQUMsSUFBSTtNQUV6RCxJQUFJRSxHQUFBLElBQU9VLEdBQUEsRUFBSztRQUNkTixRQUFBLEdBQVc7TUFDYjtNQUVBSixHQUFBLElBQU9ELFdBQUE7TUFFUEksS0FBQSxHQUFRSCxHQUFBLEdBQU1GLEtBQUE7TUFHZEksUUFBQSxHQUFXRixHQUFBLEdBQU1VLEdBQUEsR0FBTWIsS0FBQSxDQUFNa0IsR0FBQSxDQUFJQyxVQUFBLENBQVdoQixHQUFHLElBQUk7TUFFbkRNLGdCQUFBLEdBQW1CTSxZQUFBLENBQWFYLFFBQVE7TUFDeENNLGdCQUFBLEdBQW1CSyxZQUFBLENBQWFWLFFBQVE7TUFFeEMsSUFBSUssZ0JBQUEsRUFBa0I7UUFDcEJDLGFBQUEsR0FBZ0I7TUFDbEI7TUFFQSxJQUFJRixnQkFBQSxFQUFrQjtRQUNwQkcsY0FBQSxHQUFpQjtNQUNuQjtNQUVBTCxRQUFBLEdBQVdJLGFBQUE7TUFDWEgsU0FBQSxHQUFZSSxjQUFBO01BRVosT0FBTztRQUNMTCxRQUFBO1FBQ0FDLFNBQUE7UUFDQVksTUFBQSxFQUFRZDtNQUNWO0lBQ0Y7SUFHQSxTQUFTZSxnQkFBZ0JDLElBQUEsRUFBTUMsS0FBQSxFQUFPO01BQ3BDLE9BQU8sU0FBU0MsWUFBWXhCLEtBQUEsRUFBT3lCLE1BQUEsRUFBUTtRQUN6QyxJQUFJQyxVQUFBO1VBQ0FDLEtBQUE7VUFDQUMsR0FBQTtVQUNBQyxLQUFBO1VBQ0FDLFVBQUE7VUFDQWpCLEdBQUEsR0FBTWIsS0FBQSxDQUFNYyxNQUFBO1VBQ1piLEtBQUEsR0FBUUQsS0FBQSxDQUFNRyxHQUFBO1VBQ2Q0QixTQUFBLEdBQVkvQixLQUFBLENBQU1rQixHQUFBLENBQUljLEtBQUEsQ0FBTS9CLEtBQUEsRUFBT0EsS0FBQSxHQUFRcUIsSUFBQSxDQUFLckMsTUFBTTtRQUUxRCxJQUFJOEMsU0FBQSxLQUFjVCxJQUFBLEVBQU07VUFBRSxPQUFPO1FBQU87UUFDeEMsSUFBSUcsTUFBQSxFQUFRO1VBQUUsT0FBTztRQUFPO1FBRTVCRyxHQUFBLEdBQU03QixVQUFBLENBQVdDLEtBQUEsRUFBT0MsS0FBQSxFQUFPOEIsU0FBQSxDQUFVOUMsTUFBTTtRQUMvQ3lDLFVBQUEsR0FBYUUsR0FBQSxDQUFJUixNQUFBO1FBRWpCLElBQUksQ0FBQ1EsR0FBQSxDQUFJckIsUUFBQSxFQUFVO1VBQ2pCUCxLQUFBLENBQU1HLEdBQUEsSUFBT3VCLFVBQUE7VUFFYjFCLEtBQUEsQ0FBTWlDLE9BQUEsSUFBV2pDLEtBQUEsQ0FBTWtCLEdBQUEsQ0FBSWMsS0FBQSxDQUFNL0IsS0FBQSxFQUFPRCxLQUFBLENBQU1HLEdBQUc7VUFDakQsT0FBTztRQUNUO1FBRUFILEtBQUEsQ0FBTUcsR0FBQSxHQUFNRixLQUFBLEdBQVFxQixJQUFBLENBQUtyQyxNQUFBO1FBRXpCLE9BQU9lLEtBQUEsQ0FBTUcsR0FBQSxHQUFNVSxHQUFBLEVBQUs7VUFDdEJpQixVQUFBLEdBQWE5QixLQUFBLENBQU1rQixHQUFBLENBQUljLEtBQUEsQ0FBTWhDLEtBQUEsQ0FBTUcsR0FBQSxFQUFLSCxLQUFBLENBQU1HLEdBQUEsR0FBTW9CLEtBQUEsQ0FBTXRDLE1BQU07VUFDaEUsSUFBSTZDLFVBQUEsS0FBZVAsS0FBQSxFQUFPO1lBQ3hCSyxHQUFBLEdBQU03QixVQUFBLENBQVdDLEtBQUEsRUFBT0EsS0FBQSxDQUFNRyxHQUFBLEVBQUtvQixLQUFBLENBQU10QyxNQUFNO1lBQy9DLElBQUkyQyxHQUFBLENBQUlwQixTQUFBLEVBQVc7Y0FDakJtQixLQUFBLEdBQVE7Y0FDUjtZQUNGO1VBQ0Y7VUFFQTNCLEtBQUEsQ0FBTWdCLEVBQUEsQ0FBR2tCLE1BQUEsQ0FBT0MsU0FBQSxDQUFVbkMsS0FBSztRQUNqQztRQUVBLElBQUksQ0FBQzJCLEtBQUEsRUFBTztVQUVWM0IsS0FBQSxDQUFNRyxHQUFBLEdBQU1GLEtBQUE7VUFDWixPQUFPO1FBQ1Q7UUFHQUQsS0FBQSxDQUFNYyxNQUFBLEdBQVNkLEtBQUEsQ0FBTUcsR0FBQTtRQUNyQkgsS0FBQSxDQUFNRyxHQUFBLEdBQU1GLEtBQUEsR0FBUXNCLEtBQUEsQ0FBTXRDLE1BQUE7UUFHMUI0QyxLQUFBLEdBQVE3QixLQUFBLENBQU1vQyxJQUFBLENBQUssZUFBZSxRQUFRLENBQUM7UUFDM0NQLEtBQUEsQ0FBTVEsT0FBQSxHQUFVckMsS0FBQSxDQUFNa0IsR0FBQSxDQUFJYyxLQUFBLENBQU1oQyxLQUFBLENBQU1HLEdBQUEsRUFBS0gsS0FBQSxDQUFNYyxNQUFNO1FBQ3ZEZSxLQUFBLENBQU1TLE1BQUEsR0FBU2hCLElBQUE7UUFFZnRCLEtBQUEsQ0FBTUcsR0FBQSxHQUFNSCxLQUFBLENBQU1jLE1BQUEsR0FBU1MsS0FBQSxDQUFNdEMsTUFBQTtRQUNqQ2UsS0FBQSxDQUFNYyxNQUFBLEdBQVNELEdBQUE7UUFFZixPQUFPO01BQ1Q7SUFDRjtJQUVBLFNBQVMwQixlQUFlakIsSUFBQSxFQUFNQyxLQUFBLEVBQU87TUFDbkMsT0FBTyxTQUFTaUIsV0FBV3hDLEtBQUEsRUFBT3lDLFNBQUEsRUFBV0MsT0FBQSxFQUFTakIsTUFBQSxFQUFRO1FBQzVELElBQUlNLFNBQUE7VUFBV3pDLEdBQUE7VUFBS3FELE1BQUE7VUFBUUMsUUFBQTtVQUFVZixLQUFBO1VBQU9nQixTQUFBO1VBQVdDLFFBQUE7VUFBVUMsV0FBQTtVQUM5REMsYUFBQSxHQUFnQjtVQUNoQjdDLEdBQUEsR0FBTUgsS0FBQSxDQUFNaUQsTUFBQSxDQUFPUixTQUFBLElBQWF6QyxLQUFBLENBQU1rRCxNQUFBLENBQU9ULFNBQUE7VUFDN0M1QixHQUFBLEdBQU1iLEtBQUEsQ0FBTW1ELE1BQUEsQ0FBT1YsU0FBQTtRQUV2QixJQUFJdEMsR0FBQSxHQUFNbUIsSUFBQSxDQUFLckMsTUFBQSxHQUFTNEIsR0FBQSxFQUFLO1VBQUUsT0FBTztRQUFPO1FBRTdDa0IsU0FBQSxHQUFZL0IsS0FBQSxDQUFNa0IsR0FBQSxDQUFJYyxLQUFBLENBQU03QixHQUFBLEVBQUtBLEdBQUEsR0FBTW1CLElBQUEsQ0FBS3JDLE1BQU07UUFFbEQsSUFBSThDLFNBQUEsS0FBY1QsSUFBQSxFQUFNO1VBQUUsT0FBTztRQUFPO1FBRXhDbkIsR0FBQSxJQUFPbUIsSUFBQSxDQUFLckMsTUFBQTtRQUNaNEQsU0FBQSxHQUFZN0MsS0FBQSxDQUFNa0IsR0FBQSxDQUFJYyxLQUFBLENBQU03QixHQUFBLEVBQUtVLEdBQUc7UUFHcEMsSUFBSVksTUFBQSxFQUFRO1VBQUUsT0FBTztRQUFNO1FBRTNCLElBQUlvQixTQUFBLENBQVVPLElBQUEsQ0FBSyxFQUFFcEIsS0FBQSxDQUFNLENBQUNULEtBQUEsQ0FBTXRDLE1BQU0sTUFBTXNDLEtBQUEsRUFBTztVQUVuRHNCLFNBQUEsR0FBWUEsU0FBQSxDQUFVTyxJQUFBLENBQUssRUFBRXBCLEtBQUEsQ0FBTSxHQUFHLENBQUNULEtBQUEsQ0FBTXRDLE1BQU07VUFDbkQrRCxhQUFBLEdBQWdCO1FBQ2xCO1FBR0FKLFFBQUEsR0FBV0gsU0FBQTtRQUVYLFNBQVM7VUFDUCxJQUFJTyxhQUFBLEVBQWU7WUFBRTtVQUFPO1VBRTVCSixRQUFBO1VBRUEsSUFBSUEsUUFBQSxJQUFZRixPQUFBLEVBQVM7WUFHdkI7VUFDRjtVQUVBdkMsR0FBQSxHQUFNSCxLQUFBLENBQU1pRCxNQUFBLENBQU9MLFFBQUEsSUFBWTVDLEtBQUEsQ0FBTWtELE1BQUEsQ0FBT04sUUFBQTtVQUM1Qy9CLEdBQUEsR0FBTWIsS0FBQSxDQUFNbUQsTUFBQSxDQUFPUCxRQUFBO1VBRW5CLElBQUl6QyxHQUFBLEdBQU1VLEdBQUEsSUFBT2IsS0FBQSxDQUFNa0QsTUFBQSxDQUFPTixRQUFBLElBQVk1QyxLQUFBLENBQU1xRCxTQUFBLEVBQVc7WUFFekQ7VUFDRjtVQUVBLElBQUlyRCxLQUFBLENBQU1rQixHQUFBLENBQUljLEtBQUEsQ0FBTTdCLEdBQUEsRUFBS1UsR0FBRyxFQUFFdUMsSUFBQSxDQUFLLEVBQUVwQixLQUFBLENBQU0sQ0FBQ1QsS0FBQSxDQUFNdEMsTUFBTSxNQUFNc0MsS0FBQSxFQUFPO1lBQ25FO1VBQ0Y7VUFFQSxJQUFJdkIsS0FBQSxDQUFNa0QsTUFBQSxDQUFPTixRQUFBLElBQVk1QyxLQUFBLENBQU1xRCxTQUFBLElBQWEsR0FBRztZQUVqRDtVQUNGO1VBRUFOLFdBQUEsR0FBYy9DLEtBQUEsQ0FBTWtCLEdBQUEsQ0FBSWMsS0FBQSxDQUFNLEdBQUduQixHQUFHLEVBQUV5QyxXQUFBLENBQVkvQixLQUFLO1VBQ3ZEdUIsUUFBQSxHQUFXOUMsS0FBQSxDQUFNa0IsR0FBQSxDQUFJYyxLQUFBLENBQU03QixHQUFBLEVBQUs0QyxXQUFXO1VBRTNDNUMsR0FBQSxJQUFPMkMsUUFBQSxDQUFTN0QsTUFBQSxHQUFTc0MsS0FBQSxDQUFNdEMsTUFBQTtVQUcvQmtCLEdBQUEsR0FBTUgsS0FBQSxDQUFNdUQsVUFBQSxDQUFXcEQsR0FBRztVQUUxQixJQUFJQSxHQUFBLEdBQU1VLEdBQUEsRUFBSztZQUFFO1VBQVU7VUFHM0JtQyxhQUFBLEdBQWdCO1FBQ2xCO1FBR0ExRCxHQUFBLEdBQU1VLEtBQUEsQ0FBTWtELE1BQUEsQ0FBT1QsU0FBQTtRQUVuQnpDLEtBQUEsQ0FBTXdELElBQUEsR0FBT1osUUFBQSxJQUFZSSxhQUFBLEdBQWdCLElBQUk7UUFFN0NuQixLQUFBLEdBQVE3QixLQUFBLENBQU1vQyxJQUFBLENBQUssY0FBYyxRQUFRLENBQUM7UUFDMUNQLEtBQUEsQ0FBTTRCLEtBQUEsR0FBUTtRQUNkNUIsS0FBQSxDQUFNUSxPQUFBLElBQVdRLFNBQUEsSUFBYUEsU0FBQSxDQUFVTyxJQUFBLENBQUssSUFBSVAsU0FBQSxHQUFZLE9BQU8sTUFDbEU3QyxLQUFBLENBQU0wRCxRQUFBLENBQVNqQixTQUFBLEdBQVksR0FBR0csUUFBQSxFQUFVdEQsR0FBQSxFQUFLLElBQUksS0FDaER3RCxRQUFBLElBQVlBLFFBQUEsQ0FBU00sSUFBQSxDQUFLLElBQUlOLFFBQUEsR0FBVztRQUM1Q2pCLEtBQUEsQ0FBTThCLElBQUEsR0FBT2hCLE1BQUE7UUFDYmQsS0FBQSxDQUFNK0IsR0FBQSxHQUFNLENBQUVuQixTQUFBLEVBQVd6QyxLQUFBLENBQU13RCxJQUFLO1FBQ3BDM0IsS0FBQSxDQUFNUyxNQUFBLEdBQVNoQixJQUFBO1FBRWYsT0FBTztNQUNUO0lBQ0Y7SUFFQSxTQUFTdUMsaUJBQWlCQyxnQkFBQSxFQUFrQjtNQUMxQyxJQUFJaEUsWUFBQSxLQUFpQixNQUFNO1FBQ3pCLElBQUk7VUFDRkEsWUFBQSxHQUFlaUUsT0FBQSxDQUFRLHNCQUFnQkMsT0FBQTtRQUN6QyxTQUFTQyxDQUFBLEVBQVA7VUFDQSxPQUFPSCxnQkFBQSxJQUFvQkEsZ0JBQUEsQ0FBaUJJLE9BQUEsS0FBWSxVQUN0RCxVQUFTQyxNQUFBLEVBQVFDLEdBQUEsRUFBSztZQUNwQixPQUFPLDZCQUE2QkQsTUFBQSxDQUFPQyxHQUFBLEVBQUsvQixPQUFBLEdBQVU7VUFDNUQsSUFDQSxVQUFTOEIsTUFBQSxFQUFRQyxHQUFBLEVBQUs7WUFDcEIsT0FBTywrQkFBK0JELE1BQUEsQ0FBT0MsR0FBQSxFQUFLL0IsT0FBQSxHQUFVO1VBQzlEO1FBQ0o7TUFDRjtNQUVBLElBQUlnQyxNQUFBLEdBQVN2RSxZQUFBLENBQWF6QixNQUFBLENBQU9DLE1BQUEsQ0FBTyxDQUFDLEdBQUd3RixnQkFBZ0IsQ0FBQztNQUU3RCxPQUFPQSxnQkFBQSxJQUFvQkEsZ0JBQUEsQ0FBaUJJLE9BQUEsS0FBWSxVQUN0RCxVQUFTQyxNQUFBLEVBQVFDLEdBQUEsRUFBSztRQUNwQixPQUFPQyxNQUFBLENBQU9GLE1BQUEsQ0FBT0MsR0FBQSxFQUFLL0IsT0FBTyxJQUFJO01BQ3ZDLElBQ0EsVUFBUzhCLE1BQUEsRUFBUUMsR0FBQSxFQUFLO1FBQ3BCLE9BQU9DLE1BQUEsQ0FBT0YsTUFBQSxDQUFPQyxHQUFBLEVBQUsvQixPQUFPO01BQ25DO0lBQ0o7SUFHQXhDLE9BQUEsQ0FBT0QsT0FBQSxHQUFVLFNBQVMwRSxZQUFZdEQsRUFBQSxFQUFJdUQsT0FBQSxFQUFTO01BRWpEQSxPQUFBLEdBQVUsT0FBT0EsT0FBQSxLQUFZLFdBQVdBLE9BQUEsR0FBVSxDQUFDO01BQ25ELElBQUlDLFVBQUEsR0FBYUQsT0FBQSxDQUFRQyxVQUFBLElBQWM7UUFDbkNDLFdBQUEsR0FBY0YsT0FBQSxDQUFRRSxXQUFBLElBQWU7UUFDckNDLFNBQUEsR0FBWUgsT0FBQSxDQUFRRyxTQUFBLElBQWE7UUFDakNDLFVBQUEsR0FBYUosT0FBQSxDQUFRSSxVQUFBLElBQWM7TUFDdkMsSUFBSUMsY0FBQSxHQUFpQkwsT0FBQSxDQUFRSyxjQUFBLEdBQ3ZCLFVBQVNULE1BQUEsRUFBUUMsR0FBQSxFQUFLO1FBQ3BCLE9BQU9HLE9BQUEsQ0FBUUssY0FBQSxDQUFlVCxNQUFBLENBQU9DLEdBQUEsRUFBSy9CLE9BQUEsRUFBUzhCLE1BQUEsQ0FBT0MsR0FBQSxDQUFJO01BQ2hFLElBQ0ZQLGdCQUFBLENBQWlCVSxPQUFBLENBQVFULGdCQUFnQjtNQUM3QyxJQUFJZSxhQUFBLEdBQWdCTixPQUFBLENBQVFNLGFBQUEsR0FDdEIsVUFBU1YsTUFBQSxFQUFRQyxHQUFBLEVBQUs7UUFDcEIsT0FBT0csT0FBQSxDQUFRTSxhQUFBLENBQWNWLE1BQUEsQ0FBT0MsR0FBQSxFQUFLL0IsT0FBQSxFQUFTOEIsTUFBQSxDQUFPQyxHQUFBLENBQUksSUFBSTtNQUNuRSxJQUNGUCxnQkFBQSxDQUFpQnhGLE1BQUEsQ0FBT0MsTUFBQSxDQUFPO1FBQUU0RixPQUFBLEVBQVM7TUFBUSxHQUNuQkssT0FBQSxDQUFRVCxnQkFBZ0IsQ0FBQztNQUU1RCxJQUFJdEMsV0FBQSxHQUFjSCxlQUFBLENBQWdCbUQsVUFBQSxFQUFZQyxXQUFXO01BQ3pELElBQUlqQyxVQUFBLEdBQWFELGNBQUEsQ0FBZW1DLFNBQUEsRUFBV0MsVUFBVTtNQUVyRDNELEVBQUEsQ0FBR2tCLE1BQUEsQ0FBTzRDLEtBQUEsQ0FBTUMsTUFBQSxDQUFPLFVBQVUsZUFBZXZELFdBQVc7TUFDM0RSLEVBQUEsQ0FBR3lDLEtBQUEsQ0FBTXFCLEtBQUEsQ0FBTUUsS0FBQSxDQUFNLGNBQWMsY0FBY3hDLFVBQUEsRUFBWTtRQUMzRHlDLEdBQUEsRUFBSyxDQUFFLGFBQWEsYUFBYSxjQUFjLE1BQU87TUFDeEQsQ0FBQztNQUNEakUsRUFBQSxDQUFHa0UsUUFBQSxDQUFTQyxLQUFBLENBQU0zRCxXQUFBLEdBQWNvRCxjQUFBO01BQ2hDNUQsRUFBQSxDQUFHa0UsUUFBQSxDQUFTQyxLQUFBLENBQU0zQyxVQUFBLEdBQWFxQyxhQUFBO0lBQ2pDO0VBQUE7QUFBQTs7O0FDaFFBLElBQUFPLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQXBCLE9BQUEsRUFBQUEsQ0FBQSxLQUFBc0I7QUFBQTtBQUFBQyxNQUFBLENBQUEzRixPQUFBLEdBQUE0RixZQUFBLENBQUFKLDhCQUFBO0FBQUFLLFVBQUEsQ0FBQUwsOEJBQUEsRUFBY00sT0FBQSxDQUFBaEcsd0JBQUEsS0FBZDZGLE1BQUEsQ0FBQTNGLE9BQUE7QUFFQSxJQUFBK0YsdUJBQUEsR0FBcUJELE9BQUEsQ0FBQWhHLHdCQUFBO0FBQ3JCLElBQU80Riw4QkFBQSxHQUFRSyx1QkFBQSxDQUFBM0IsT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==