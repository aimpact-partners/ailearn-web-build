System.register(["w3c-keyname@2.2.8","orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","prosemirror-keymap@1.2.3","prosemirror-view@1.40.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["w3c-keyname","2.2.8"],["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["prosemirror-keymap","1.2.3"],["prosemirror-view","1.40.1"],["prosemirror-gapcursor","1.3.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep)],
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

// .beyond/uimport/prosemirror-gapcursor.1.3.2.js
var prosemirror_gapcursor_1_3_2_exports = {};
__export(prosemirror_gapcursor_1_3_2_exports, {
  GapCursor: () => GapCursor,
  gapCursor: () => gapCursor
});
module.exports = __toCommonJS(prosemirror_gapcursor_1_3_2_exports);

// node_modules/prosemirror-gapcursor/dist/index.js
var import_prosemirror_keymap = require("prosemirror-keymap@1.2.3");
var import_prosemirror_state = require("prosemirror-state@1.4.3");
var import_prosemirror_model = require("prosemirror-model@1.25.3");
var import_prosemirror_view = require("prosemirror-view@1.40.1");
var GapCursor = class extends import_prosemirror_state.Selection {
  constructor($pos) {
    super($pos, $pos);
  }
  map(doc, mapping) {
    let $pos = doc.resolve(mapping.map(this.head));
    return GapCursor.valid($pos) ? new GapCursor($pos) : import_prosemirror_state.Selection.near($pos);
  }
  content() {
    return import_prosemirror_model.Slice.empty;
  }
  eq(other) {
    return other instanceof GapCursor && other.head == this.head;
  }
  toJSON() {
    return {
      type: "gapcursor",
      pos: this.head
    };
  }
  static fromJSON(doc, json) {
    if (typeof json.pos != "number") throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new GapCursor(doc.resolve(json.pos));
  }
  getBookmark() {
    return new GapBookmark(this.anchor);
  }
  static valid($pos) {
    let parent = $pos.parent;
    if (parent.isTextblock || !closedBefore($pos) || !closedAfter($pos)) return false;
    let override = parent.type.spec.allowGapCursor;
    if (override != null) return override;
    let deflt = parent.contentMatchAt($pos.index()).defaultType;
    return deflt && deflt.isTextblock;
  }
  static findGapCursorFrom($pos, dir, mustMove = false) {
    search: for (;;) {
      if (!mustMove && GapCursor.valid($pos)) return $pos;
      let pos = $pos.pos,
        next = null;
      for (let d = $pos.depth;; d--) {
        let parent = $pos.node(d);
        if (dir > 0 ? $pos.indexAfter(d) < parent.childCount : $pos.index(d) > 0) {
          next = parent.child(dir > 0 ? $pos.indexAfter(d) : $pos.index(d) - 1);
          break;
        } else if (d == 0) {
          return null;
        }
        pos += dir;
        let $cur = $pos.doc.resolve(pos);
        if (GapCursor.valid($cur)) return $cur;
      }
      for (;;) {
        let inside = dir > 0 ? next.firstChild : next.lastChild;
        if (!inside) {
          if (next.isAtom && !next.isText && !import_prosemirror_state.NodeSelection.isSelectable(next)) {
            $pos = $pos.doc.resolve(pos + next.nodeSize * dir);
            mustMove = false;
            continue search;
          }
          break;
        }
        next = inside;
        pos += dir;
        let $cur = $pos.doc.resolve(pos);
        if (GapCursor.valid($cur)) return $cur;
      }
      return null;
    }
  }
};
GapCursor.prototype.visible = false;
GapCursor.findFrom = GapCursor.findGapCursorFrom;
import_prosemirror_state.Selection.jsonID("gapcursor", GapCursor);
var GapBookmark = class {
  constructor(pos) {
    this.pos = pos;
  }
  map(mapping) {
    return new GapBookmark(mapping.map(this.pos));
  }
  resolve(doc) {
    let $pos = doc.resolve(this.pos);
    return GapCursor.valid($pos) ? new GapCursor($pos) : import_prosemirror_state.Selection.near($pos);
  }
};
function closedBefore($pos) {
  for (let d = $pos.depth; d >= 0; d--) {
    let index = $pos.index(d),
      parent = $pos.node(d);
    if (index == 0) {
      if (parent.type.spec.isolating) return true;
      continue;
    }
    for (let before = parent.child(index - 1);; before = before.lastChild) {
      if (before.childCount == 0 && !before.inlineContent || before.isAtom || before.type.spec.isolating) return true;
      if (before.inlineContent) return false;
    }
  }
  return true;
}
function closedAfter($pos) {
  for (let d = $pos.depth; d >= 0; d--) {
    let index = $pos.indexAfter(d),
      parent = $pos.node(d);
    if (index == parent.childCount) {
      if (parent.type.spec.isolating) return true;
      continue;
    }
    for (let after = parent.child(index);; after = after.firstChild) {
      if (after.childCount == 0 && !after.inlineContent || after.isAtom || after.type.spec.isolating) return true;
      if (after.inlineContent) return false;
    }
  }
  return true;
}
function gapCursor() {
  return new import_prosemirror_state.Plugin({
    props: {
      decorations: drawGapCursor,
      createSelectionBetween(_view, $anchor, $head) {
        return $anchor.pos == $head.pos && GapCursor.valid($head) ? new GapCursor($head) : null;
      },
      handleClick,
      handleKeyDown,
      handleDOMEvents: {
        beforeinput
      }
    }
  });
}
var handleKeyDown = (0, import_prosemirror_keymap.keydownHandler)({
  "ArrowLeft": arrow("horiz", -1),
  "ArrowRight": arrow("horiz", 1),
  "ArrowUp": arrow("vert", -1),
  "ArrowDown": arrow("vert", 1)
});
function arrow(axis, dir) {
  const dirStr = axis == "vert" ? dir > 0 ? "down" : "up" : dir > 0 ? "right" : "left";
  return function (state, dispatch, view) {
    let sel = state.selection;
    let $start = dir > 0 ? sel.$to : sel.$from,
      mustMove = sel.empty;
    if (sel instanceof import_prosemirror_state.TextSelection) {
      if (!view.endOfTextblock(dirStr) || $start.depth == 0) return false;
      mustMove = false;
      $start = state.doc.resolve(dir > 0 ? $start.after() : $start.before());
    }
    let $found = GapCursor.findGapCursorFrom($start, dir, mustMove);
    if (!$found) return false;
    if (dispatch) dispatch(state.tr.setSelection(new GapCursor($found)));
    return true;
  };
}
function handleClick(view, pos, event) {
  if (!view || !view.editable) return false;
  let $pos = view.state.doc.resolve(pos);
  if (!GapCursor.valid($pos)) return false;
  let clickPos = view.posAtCoords({
    left: event.clientX,
    top: event.clientY
  });
  if (clickPos && clickPos.inside > -1 && import_prosemirror_state.NodeSelection.isSelectable(view.state.doc.nodeAt(clickPos.inside))) return false;
  view.dispatch(view.state.tr.setSelection(new GapCursor($pos)));
  return true;
}
function beforeinput(view, event) {
  if (event.inputType != "insertCompositionText" || !(view.state.selection instanceof GapCursor)) return false;
  let {
    $from
  } = view.state.selection;
  let insert = $from.parent.contentMatchAt($from.index()).findWrapping(view.state.schema.nodes.text);
  if (!insert) return false;
  let frag = import_prosemirror_model.Fragment.empty;
  for (let i = insert.length - 1; i >= 0; i--) frag = import_prosemirror_model.Fragment.from(insert[i].createAndFill(null, frag));
  let tr = view.state.tr.replace($from.pos, $from.pos, new import_prosemirror_model.Slice(frag, 0, 0));
  tr.setSelection(import_prosemirror_state.TextSelection.near(tr.doc.resolve($from.pos + 1)));
  view.dispatch(tr);
  return false;
}
function drawGapCursor(state) {
  if (!(state.selection instanceof GapCursor)) return null;
  let node = document.createElement("div");
  node.className = "ProseMirror-gapcursor";
  return import_prosemirror_view.DecorationSet.create(state.doc, [import_prosemirror_view.Decoration.widget(state.selection.head, node, {
    key: "gapcursor"
  })]);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcm9zZW1pcnJvci1nYXBjdXJzb3IuMS4zLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3ItZ2FwY3Vyc29yL2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOlsicHJvc2VtaXJyb3JfZ2FwY3Vyc29yXzFfM18yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkdhcEN1cnNvciIsImdhcEN1cnNvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfcHJvc2VtaXJyb3Jfa2V5bWFwIiwicmVxdWlyZSIsImltcG9ydF9wcm9zZW1pcnJvcl9zdGF0ZSIsImltcG9ydF9wcm9zZW1pcnJvcl9tb2RlbCIsImltcG9ydF9wcm9zZW1pcnJvcl92aWV3IiwiU2VsZWN0aW9uIiwiY29uc3RydWN0b3IiLCIkcG9zIiwibWFwIiwiZG9jIiwibWFwcGluZyIsInJlc29sdmUiLCJoZWFkIiwidmFsaWQiLCJuZWFyIiwiY29udGVudCIsIlNsaWNlIiwiZW1wdHkiLCJlcSIsIm90aGVyIiwidG9KU09OIiwidHlwZSIsInBvcyIsImZyb21KU09OIiwianNvbiIsIlJhbmdlRXJyb3IiLCJnZXRCb29rbWFyayIsIkdhcEJvb2ttYXJrIiwiYW5jaG9yIiwicGFyZW50IiwiaXNUZXh0YmxvY2siLCJjbG9zZWRCZWZvcmUiLCJjbG9zZWRBZnRlciIsIm92ZXJyaWRlIiwic3BlYyIsImFsbG93R2FwQ3Vyc29yIiwiZGVmbHQiLCJjb250ZW50TWF0Y2hBdCIsImluZGV4IiwiZGVmYXVsdFR5cGUiLCJmaW5kR2FwQ3Vyc29yRnJvbSIsImRpciIsIm11c3RNb3ZlIiwic2VhcmNoIiwibmV4dCIsImQiLCJkZXB0aCIsIm5vZGUiLCJpbmRleEFmdGVyIiwiY2hpbGRDb3VudCIsImNoaWxkIiwiJGN1ciIsImluc2lkZSIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJpc0F0b20iLCJpc1RleHQiLCJOb2RlU2VsZWN0aW9uIiwiaXNTZWxlY3RhYmxlIiwibm9kZVNpemUiLCJwcm90b3R5cGUiLCJ2aXNpYmxlIiwiZmluZEZyb20iLCJqc29uSUQiLCJpc29sYXRpbmciLCJiZWZvcmUiLCJpbmxpbmVDb250ZW50IiwiYWZ0ZXIiLCJQbHVnaW4iLCJwcm9wcyIsImRlY29yYXRpb25zIiwiZHJhd0dhcEN1cnNvciIsImNyZWF0ZVNlbGVjdGlvbkJldHdlZW4iLCJfdmlldyIsIiRhbmNob3IiLCIkaGVhZCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZURPTUV2ZW50cyIsImJlZm9yZWlucHV0Iiwia2V5ZG93bkhhbmRsZXIiLCJhcnJvdyIsImF4aXMiLCJkaXJTdHIiLCJzdGF0ZSIsImRpc3BhdGNoIiwidmlldyIsInNlbCIsInNlbGVjdGlvbiIsIiRzdGFydCIsIiR0byIsIiRmcm9tIiwiVGV4dFNlbGVjdGlvbiIsImVuZE9mVGV4dGJsb2NrIiwiJGZvdW5kIiwidHIiLCJzZXRTZWxlY3Rpb24iLCJldmVudCIsImVkaXRhYmxlIiwiY2xpY2tQb3MiLCJwb3NBdENvb3JkcyIsImxlZnQiLCJjbGllbnRYIiwidG9wIiwiY2xpZW50WSIsIm5vZGVBdCIsImlucHV0VHlwZSIsImluc2VydCIsImZpbmRXcmFwcGluZyIsInNjaGVtYSIsIm5vZGVzIiwidGV4dCIsImZyYWciLCJGcmFnbWVudCIsImkiLCJsZW5ndGgiLCJmcm9tIiwiY3JlYXRlQW5kRmlsbCIsInJlcGxhY2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJEZWNvcmF0aW9uU2V0IiwiY3JlYXRlIiwiRGVjb3JhdGlvbiIsIndpZGdldCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUNBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQ0FBQTtFQUFBRSxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTixtQ0FBQTs7O0FDQUEsSUFBQU8seUJBQUEsR0FBK0JDLE9BQUE7QUFDL0IsSUFBQUMsd0JBQUEsR0FBZ0VELE9BQUE7QUFDaEUsSUFBQUUsd0JBQUEsR0FBZ0NGLE9BQUE7QUFDaEMsSUFBQUcsdUJBQUEsR0FBMENILE9BQUE7QUFNMUMsSUFBTU4sU0FBQSxHQUFOLGNBQXdCTyx3QkFBQSxDQUFBRyxTQUFBLENBQVU7RUFJOUJDLFlBQVlDLElBQUEsRUFBTTtJQUNkLE1BQU1BLElBQUEsRUFBTUEsSUFBSTtFQUNwQjtFQUNBQyxJQUFJQyxHQUFBLEVBQUtDLE9BQUEsRUFBUztJQUNkLElBQUlILElBQUEsR0FBT0UsR0FBQSxDQUFJRSxPQUFBLENBQVFELE9BQUEsQ0FBUUYsR0FBQSxDQUFJLEtBQUtJLElBQUksQ0FBQztJQUM3QyxPQUFPakIsU0FBQSxDQUFVa0IsS0FBQSxDQUFNTixJQUFJLElBQUksSUFBSVosU0FBQSxDQUFVWSxJQUFJLElBQUlMLHdCQUFBLENBQUFHLFNBQUEsQ0FBVVMsSUFBQSxDQUFLUCxJQUFJO0VBQzVFO0VBQ0FRLFFBQUEsRUFBVTtJQUFFLE9BQU9aLHdCQUFBLENBQUFhLEtBQUEsQ0FBTUMsS0FBQTtFQUFPO0VBQ2hDQyxHQUFHQyxLQUFBLEVBQU87SUFDTixPQUFPQSxLQUFBLFlBQWlCeEIsU0FBQSxJQUFhd0IsS0FBQSxDQUFNUCxJQUFBLElBQVEsS0FBS0EsSUFBQTtFQUM1RDtFQUNBUSxPQUFBLEVBQVM7SUFDTCxPQUFPO01BQUVDLElBQUEsRUFBTTtNQUFhQyxHQUFBLEVBQUssS0FBS1Y7SUFBSztFQUMvQztFQUlBLE9BQU9XLFNBQVNkLEdBQUEsRUFBS2UsSUFBQSxFQUFNO0lBQ3ZCLElBQUksT0FBT0EsSUFBQSxDQUFLRixHQUFBLElBQU8sVUFDbkIsTUFBTSxJQUFJRyxVQUFBLENBQVcsc0NBQXNDO0lBQy9ELE9BQU8sSUFBSTlCLFNBQUEsQ0FBVWMsR0FBQSxDQUFJRSxPQUFBLENBQVFhLElBQUEsQ0FBS0YsR0FBRyxDQUFDO0VBQzlDO0VBSUFJLFlBQUEsRUFBYztJQUFFLE9BQU8sSUFBSUMsV0FBQSxDQUFZLEtBQUtDLE1BQU07RUFBRztFQUlyRCxPQUFPZixNQUFNTixJQUFBLEVBQU07SUFDZixJQUFJc0IsTUFBQSxHQUFTdEIsSUFBQSxDQUFLc0IsTUFBQTtJQUNsQixJQUFJQSxNQUFBLENBQU9DLFdBQUEsSUFBZSxDQUFDQyxZQUFBLENBQWF4QixJQUFJLEtBQUssQ0FBQ3lCLFdBQUEsQ0FBWXpCLElBQUksR0FDOUQsT0FBTztJQUNYLElBQUkwQixRQUFBLEdBQVdKLE1BQUEsQ0FBT1IsSUFBQSxDQUFLYSxJQUFBLENBQUtDLGNBQUE7SUFDaEMsSUFBSUYsUUFBQSxJQUFZLE1BQ1osT0FBT0EsUUFBQTtJQUNYLElBQUlHLEtBQUEsR0FBUVAsTUFBQSxDQUFPUSxjQUFBLENBQWU5QixJQUFBLENBQUsrQixLQUFBLENBQU0sQ0FBQyxFQUFFQyxXQUFBO0lBQ2hELE9BQU9ILEtBQUEsSUFBU0EsS0FBQSxDQUFNTixXQUFBO0VBQzFCO0VBSUEsT0FBT1Usa0JBQWtCakMsSUFBQSxFQUFNa0MsR0FBQSxFQUFLQyxRQUFBLEdBQVcsT0FBTztJQUNsREMsTUFBQSxFQUFRLFNBQVM7TUFDYixJQUFJLENBQUNELFFBQUEsSUFBWS9DLFNBQUEsQ0FBVWtCLEtBQUEsQ0FBTU4sSUFBSSxHQUNqQyxPQUFPQSxJQUFBO01BQ1gsSUFBSWUsR0FBQSxHQUFNZixJQUFBLENBQUtlLEdBQUE7UUFBS3NCLElBQUEsR0FBTztNQUUzQixTQUFTQyxDQUFBLEdBQUl0QyxJQUFBLENBQUt1QyxLQUFBLEdBQVFELENBQUEsSUFBSztRQUMzQixJQUFJaEIsTUFBQSxHQUFTdEIsSUFBQSxDQUFLd0MsSUFBQSxDQUFLRixDQUFDO1FBQ3hCLElBQUlKLEdBQUEsR0FBTSxJQUFJbEMsSUFBQSxDQUFLeUMsVUFBQSxDQUFXSCxDQUFDLElBQUloQixNQUFBLENBQU9vQixVQUFBLEdBQWExQyxJQUFBLENBQUsrQixLQUFBLENBQU1PLENBQUMsSUFBSSxHQUFHO1VBQ3RFRCxJQUFBLEdBQU9mLE1BQUEsQ0FBT3FCLEtBQUEsQ0FBTVQsR0FBQSxHQUFNLElBQUlsQyxJQUFBLENBQUt5QyxVQUFBLENBQVdILENBQUMsSUFBSXRDLElBQUEsQ0FBSytCLEtBQUEsQ0FBTU8sQ0FBQyxJQUFJLENBQUM7VUFDcEU7UUFDSixXQUNTQSxDQUFBLElBQUssR0FBRztVQUNiLE9BQU87UUFDWDtRQUNBdkIsR0FBQSxJQUFPbUIsR0FBQTtRQUNQLElBQUlVLElBQUEsR0FBTzVDLElBQUEsQ0FBS0UsR0FBQSxDQUFJRSxPQUFBLENBQVFXLEdBQUc7UUFDL0IsSUFBSTNCLFNBQUEsQ0FBVWtCLEtBQUEsQ0FBTXNDLElBQUksR0FDcEIsT0FBT0EsSUFBQTtNQUNmO01BRUEsU0FBUztRQUNMLElBQUlDLE1BQUEsR0FBU1gsR0FBQSxHQUFNLElBQUlHLElBQUEsQ0FBS1MsVUFBQSxHQUFhVCxJQUFBLENBQUtVLFNBQUE7UUFDOUMsSUFBSSxDQUFDRixNQUFBLEVBQVE7VUFDVCxJQUFJUixJQUFBLENBQUtXLE1BQUEsSUFBVSxDQUFDWCxJQUFBLENBQUtZLE1BQUEsSUFBVSxDQUFDdEQsd0JBQUEsQ0FBQXVELGFBQUEsQ0FBY0MsWUFBQSxDQUFhZCxJQUFJLEdBQUc7WUFDbEVyQyxJQUFBLEdBQU9BLElBQUEsQ0FBS0UsR0FBQSxDQUFJRSxPQUFBLENBQVFXLEdBQUEsR0FBTXNCLElBQUEsQ0FBS2UsUUFBQSxHQUFXbEIsR0FBRztZQUNqREMsUUFBQSxHQUFXO1lBQ1gsU0FBU0MsTUFBQTtVQUNiO1VBQ0E7UUFDSjtRQUNBQyxJQUFBLEdBQU9RLE1BQUE7UUFDUDlCLEdBQUEsSUFBT21CLEdBQUE7UUFDUCxJQUFJVSxJQUFBLEdBQU81QyxJQUFBLENBQUtFLEdBQUEsQ0FBSUUsT0FBQSxDQUFRVyxHQUFHO1FBQy9CLElBQUkzQixTQUFBLENBQVVrQixLQUFBLENBQU1zQyxJQUFJLEdBQ3BCLE9BQU9BLElBQUE7TUFDZjtNQUNBLE9BQU87SUFDWDtFQUNKO0FBQ0o7QUFDQXhELFNBQUEsQ0FBVWlFLFNBQUEsQ0FBVUMsT0FBQSxHQUFVO0FBQzlCbEUsU0FBQSxDQUFVbUUsUUFBQSxHQUFXbkUsU0FBQSxDQUFVNkMsaUJBQUE7QUFDL0J0Qyx3QkFBQSxDQUFBRyxTQUFBLENBQVUwRCxNQUFBLENBQU8sYUFBYXBFLFNBQVM7QUFDdkMsSUFBTWdDLFdBQUEsR0FBTixNQUFrQjtFQUNkckIsWUFBWWdCLEdBQUEsRUFBSztJQUNiLEtBQUtBLEdBQUEsR0FBTUEsR0FBQTtFQUNmO0VBQ0FkLElBQUlFLE9BQUEsRUFBUztJQUNULE9BQU8sSUFBSWlCLFdBQUEsQ0FBWWpCLE9BQUEsQ0FBUUYsR0FBQSxDQUFJLEtBQUtjLEdBQUcsQ0FBQztFQUNoRDtFQUNBWCxRQUFRRixHQUFBLEVBQUs7SUFDVCxJQUFJRixJQUFBLEdBQU9FLEdBQUEsQ0FBSUUsT0FBQSxDQUFRLEtBQUtXLEdBQUc7SUFDL0IsT0FBTzNCLFNBQUEsQ0FBVWtCLEtBQUEsQ0FBTU4sSUFBSSxJQUFJLElBQUlaLFNBQUEsQ0FBVVksSUFBSSxJQUFJTCx3QkFBQSxDQUFBRyxTQUFBLENBQVVTLElBQUEsQ0FBS1AsSUFBSTtFQUM1RTtBQUNKO0FBQ0EsU0FBU3dCLGFBQWF4QixJQUFBLEVBQU07RUFDeEIsU0FBU3NDLENBQUEsR0FBSXRDLElBQUEsQ0FBS3VDLEtBQUEsRUFBT0QsQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFBSztJQUNsQyxJQUFJUCxLQUFBLEdBQVEvQixJQUFBLENBQUsrQixLQUFBLENBQU1PLENBQUM7TUFBR2hCLE1BQUEsR0FBU3RCLElBQUEsQ0FBS3dDLElBQUEsQ0FBS0YsQ0FBQztJQUUvQyxJQUFJUCxLQUFBLElBQVMsR0FBRztNQUNaLElBQUlULE1BQUEsQ0FBT1IsSUFBQSxDQUFLYSxJQUFBLENBQUs4QixTQUFBLEVBQ2pCLE9BQU87TUFDWDtJQUNKO0lBRUEsU0FBU0MsTUFBQSxHQUFTcEMsTUFBQSxDQUFPcUIsS0FBQSxDQUFNWixLQUFBLEdBQVEsQ0FBQyxJQUFJMkIsTUFBQSxHQUFTQSxNQUFBLENBQU9YLFNBQUEsRUFBVztNQUNuRSxJQUFLVyxNQUFBLENBQU9oQixVQUFBLElBQWMsS0FBSyxDQUFDZ0IsTUFBQSxDQUFPQyxhQUFBLElBQWtCRCxNQUFBLENBQU9WLE1BQUEsSUFBVVUsTUFBQSxDQUFPNUMsSUFBQSxDQUFLYSxJQUFBLENBQUs4QixTQUFBLEVBQ3ZGLE9BQU87TUFDWCxJQUFJQyxNQUFBLENBQU9DLGFBQUEsRUFDUCxPQUFPO0lBQ2Y7RUFDSjtFQUVBLE9BQU87QUFDWDtBQUNBLFNBQVNsQyxZQUFZekIsSUFBQSxFQUFNO0VBQ3ZCLFNBQVNzQyxDQUFBLEdBQUl0QyxJQUFBLENBQUt1QyxLQUFBLEVBQU9ELENBQUEsSUFBSyxHQUFHQSxDQUFBLElBQUs7SUFDbEMsSUFBSVAsS0FBQSxHQUFRL0IsSUFBQSxDQUFLeUMsVUFBQSxDQUFXSCxDQUFDO01BQUdoQixNQUFBLEdBQVN0QixJQUFBLENBQUt3QyxJQUFBLENBQUtGLENBQUM7SUFDcEQsSUFBSVAsS0FBQSxJQUFTVCxNQUFBLENBQU9vQixVQUFBLEVBQVk7TUFDNUIsSUFBSXBCLE1BQUEsQ0FBT1IsSUFBQSxDQUFLYSxJQUFBLENBQUs4QixTQUFBLEVBQ2pCLE9BQU87TUFDWDtJQUNKO0lBQ0EsU0FBU0csS0FBQSxHQUFRdEMsTUFBQSxDQUFPcUIsS0FBQSxDQUFNWixLQUFLLElBQUk2QixLQUFBLEdBQVFBLEtBQUEsQ0FBTWQsVUFBQSxFQUFZO01BQzdELElBQUtjLEtBQUEsQ0FBTWxCLFVBQUEsSUFBYyxLQUFLLENBQUNrQixLQUFBLENBQU1ELGFBQUEsSUFBa0JDLEtBQUEsQ0FBTVosTUFBQSxJQUFVWSxLQUFBLENBQU05QyxJQUFBLENBQUthLElBQUEsQ0FBSzhCLFNBQUEsRUFDbkYsT0FBTztNQUNYLElBQUlHLEtBQUEsQ0FBTUQsYUFBQSxFQUNOLE9BQU87SUFDZjtFQUNKO0VBQ0EsT0FBTztBQUNYO0FBV0EsU0FBU3RFLFVBQUEsRUFBWTtFQUNqQixPQUFPLElBQUlNLHdCQUFBLENBQUFrRSxNQUFBLENBQU87SUFDZEMsS0FBQSxFQUFPO01BQ0hDLFdBQUEsRUFBYUMsYUFBQTtNQUNiQyx1QkFBdUJDLEtBQUEsRUFBT0MsT0FBQSxFQUFTQyxLQUFBLEVBQU87UUFDMUMsT0FBT0QsT0FBQSxDQUFRcEQsR0FBQSxJQUFPcUQsS0FBQSxDQUFNckQsR0FBQSxJQUFPM0IsU0FBQSxDQUFVa0IsS0FBQSxDQUFNOEQsS0FBSyxJQUFJLElBQUloRixTQUFBLENBQVVnRixLQUFLLElBQUk7TUFDdkY7TUFDQUMsV0FBQTtNQUNBQyxhQUFBO01BQ0FDLGVBQUEsRUFBaUI7UUFBRUM7TUFBeUI7SUFDaEQ7RUFDSixDQUFDO0FBQ0w7QUFDQSxJQUFNRixhQUFBLE9BQWdCN0UseUJBQUEsQ0FBQWdGLGNBQUEsRUFBZTtFQUNqQyxhQUFhQyxLQUFBLENBQU0sU0FBUyxFQUFFO0VBQzlCLGNBQWNBLEtBQUEsQ0FBTSxTQUFTLENBQUM7RUFDOUIsV0FBV0EsS0FBQSxDQUFNLFFBQVEsRUFBRTtFQUMzQixhQUFhQSxLQUFBLENBQU0sUUFBUSxDQUFDO0FBQ2hDLENBQUM7QUFDRCxTQUFTQSxNQUFNQyxJQUFBLEVBQU16QyxHQUFBLEVBQUs7RUFDdEIsTUFBTTBDLE1BQUEsR0FBU0QsSUFBQSxJQUFRLFNBQVV6QyxHQUFBLEdBQU0sSUFBSSxTQUFTLE9BQVNBLEdBQUEsR0FBTSxJQUFJLFVBQVU7RUFDakYsT0FBTyxVQUFVMkMsS0FBQSxFQUFPQyxRQUFBLEVBQVVDLElBQUEsRUFBTTtJQUNwQyxJQUFJQyxHQUFBLEdBQU1ILEtBQUEsQ0FBTUksU0FBQTtJQUNoQixJQUFJQyxNQUFBLEdBQVNoRCxHQUFBLEdBQU0sSUFBSThDLEdBQUEsQ0FBSUcsR0FBQSxHQUFNSCxHQUFBLENBQUlJLEtBQUE7TUFBT2pELFFBQUEsR0FBVzZDLEdBQUEsQ0FBSXRFLEtBQUE7SUFDM0QsSUFBSXNFLEdBQUEsWUFBZXJGLHdCQUFBLENBQUEwRixhQUFBLEVBQWU7TUFDOUIsSUFBSSxDQUFDTixJQUFBLENBQUtPLGNBQUEsQ0FBZVYsTUFBTSxLQUFLTSxNQUFBLENBQU8zQyxLQUFBLElBQVMsR0FDaEQsT0FBTztNQUNYSixRQUFBLEdBQVc7TUFDWCtDLE1BQUEsR0FBU0wsS0FBQSxDQUFNM0UsR0FBQSxDQUFJRSxPQUFBLENBQVE4QixHQUFBLEdBQU0sSUFBSWdELE1BQUEsQ0FBT3RCLEtBQUEsQ0FBTSxJQUFJc0IsTUFBQSxDQUFPeEIsTUFBQSxDQUFPLENBQUM7SUFDekU7SUFDQSxJQUFJNkIsTUFBQSxHQUFTbkcsU0FBQSxDQUFVNkMsaUJBQUEsQ0FBa0JpRCxNQUFBLEVBQVFoRCxHQUFBLEVBQUtDLFFBQVE7SUFDOUQsSUFBSSxDQUFDb0QsTUFBQSxFQUNELE9BQU87SUFDWCxJQUFJVCxRQUFBLEVBQ0FBLFFBQUEsQ0FBU0QsS0FBQSxDQUFNVyxFQUFBLENBQUdDLFlBQUEsQ0FBYSxJQUFJckcsU0FBQSxDQUFVbUcsTUFBTSxDQUFDLENBQUM7SUFDekQsT0FBTztFQUNYO0FBQ0o7QUFDQSxTQUFTbEIsWUFBWVUsSUFBQSxFQUFNaEUsR0FBQSxFQUFLMkUsS0FBQSxFQUFPO0VBQ25DLElBQUksQ0FBQ1gsSUFBQSxJQUFRLENBQUNBLElBQUEsQ0FBS1ksUUFBQSxFQUNmLE9BQU87RUFDWCxJQUFJM0YsSUFBQSxHQUFPK0UsSUFBQSxDQUFLRixLQUFBLENBQU0zRSxHQUFBLENBQUlFLE9BQUEsQ0FBUVcsR0FBRztFQUNyQyxJQUFJLENBQUMzQixTQUFBLENBQVVrQixLQUFBLENBQU1OLElBQUksR0FDckIsT0FBTztFQUNYLElBQUk0RixRQUFBLEdBQVdiLElBQUEsQ0FBS2MsV0FBQSxDQUFZO0lBQUVDLElBQUEsRUFBTUosS0FBQSxDQUFNSyxPQUFBO0lBQVNDLEdBQUEsRUFBS04sS0FBQSxDQUFNTztFQUFRLENBQUM7RUFDM0UsSUFBSUwsUUFBQSxJQUFZQSxRQUFBLENBQVMvQyxNQUFBLEdBQVMsTUFBTWxELHdCQUFBLENBQUF1RCxhQUFBLENBQWNDLFlBQUEsQ0FBYTRCLElBQUEsQ0FBS0YsS0FBQSxDQUFNM0UsR0FBQSxDQUFJZ0csTUFBQSxDQUFPTixRQUFBLENBQVMvQyxNQUFNLENBQUMsR0FDckcsT0FBTztFQUNYa0MsSUFBQSxDQUFLRCxRQUFBLENBQVNDLElBQUEsQ0FBS0YsS0FBQSxDQUFNVyxFQUFBLENBQUdDLFlBQUEsQ0FBYSxJQUFJckcsU0FBQSxDQUFVWSxJQUFJLENBQUMsQ0FBQztFQUM3RCxPQUFPO0FBQ1g7QUFLQSxTQUFTd0UsWUFBWU8sSUFBQSxFQUFNVyxLQUFBLEVBQU87RUFDOUIsSUFBSUEsS0FBQSxDQUFNUyxTQUFBLElBQWEsMkJBQTJCLEVBQUVwQixJQUFBLENBQUtGLEtBQUEsQ0FBTUksU0FBQSxZQUFxQjdGLFNBQUEsR0FDaEYsT0FBTztFQUNYLElBQUk7SUFBRWdHO0VBQU0sSUFBSUwsSUFBQSxDQUFLRixLQUFBLENBQU1JLFNBQUE7RUFDM0IsSUFBSW1CLE1BQUEsR0FBU2hCLEtBQUEsQ0FBTTlELE1BQUEsQ0FBT1EsY0FBQSxDQUFlc0QsS0FBQSxDQUFNckQsS0FBQSxDQUFNLENBQUMsRUFBRXNFLFlBQUEsQ0FBYXRCLElBQUEsQ0FBS0YsS0FBQSxDQUFNeUIsTUFBQSxDQUFPQyxLQUFBLENBQU1DLElBQUk7RUFDakcsSUFBSSxDQUFDSixNQUFBLEVBQ0QsT0FBTztFQUNYLElBQUlLLElBQUEsR0FBTzdHLHdCQUFBLENBQUE4RyxRQUFBLENBQVNoRyxLQUFBO0VBQ3BCLFNBQVNpRyxDQUFBLEdBQUlQLE1BQUEsQ0FBT1EsTUFBQSxHQUFTLEdBQUdELENBQUEsSUFBSyxHQUFHQSxDQUFBLElBQ3BDRixJQUFBLEdBQU83Ryx3QkFBQSxDQUFBOEcsUUFBQSxDQUFTRyxJQUFBLENBQUtULE1BQUEsQ0FBT08sQ0FBQSxFQUFHRyxhQUFBLENBQWMsTUFBTUwsSUFBSSxDQUFDO0VBQzVELElBQUlqQixFQUFBLEdBQUtULElBQUEsQ0FBS0YsS0FBQSxDQUFNVyxFQUFBLENBQUd1QixPQUFBLENBQVEzQixLQUFBLENBQU1yRSxHQUFBLEVBQUtxRSxLQUFBLENBQU1yRSxHQUFBLEVBQUssSUFBSW5CLHdCQUFBLENBQUFhLEtBQUEsQ0FBTWdHLElBQUEsRUFBTSxHQUFHLENBQUMsQ0FBQztFQUMxRWpCLEVBQUEsQ0FBR0MsWUFBQSxDQUFhOUYsd0JBQUEsQ0FBQTBGLGFBQUEsQ0FBYzlFLElBQUEsQ0FBS2lGLEVBQUEsQ0FBR3RGLEdBQUEsQ0FBSUUsT0FBQSxDQUFRZ0YsS0FBQSxDQUFNckUsR0FBQSxHQUFNLENBQUMsQ0FBQyxDQUFDO0VBQ2pFZ0UsSUFBQSxDQUFLRCxRQUFBLENBQVNVLEVBQUU7RUFDaEIsT0FBTztBQUNYO0FBQ0EsU0FBU3hCLGNBQWNhLEtBQUEsRUFBTztFQUMxQixJQUFJLEVBQUVBLEtBQUEsQ0FBTUksU0FBQSxZQUFxQjdGLFNBQUEsR0FDN0IsT0FBTztFQUNYLElBQUlvRCxJQUFBLEdBQU93RSxRQUFBLENBQVNDLGFBQUEsQ0FBYyxLQUFLO0VBQ3ZDekUsSUFBQSxDQUFLMEUsU0FBQSxHQUFZO0VBQ2pCLE9BQU9ySCx1QkFBQSxDQUFBc0gsYUFBQSxDQUFjQyxNQUFBLENBQU92QyxLQUFBLENBQU0zRSxHQUFBLEVBQUssQ0FBQ0wsdUJBQUEsQ0FBQXdILFVBQUEsQ0FBV0MsTUFBQSxDQUFPekMsS0FBQSxDQUFNSSxTQUFBLENBQVU1RSxJQUFBLEVBQU1tQyxJQUFBLEVBQU07SUFBRStFLEdBQUEsRUFBSztFQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ2hIIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9ydmQvb3V0In0=