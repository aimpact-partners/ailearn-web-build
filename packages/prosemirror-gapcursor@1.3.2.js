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

// .beyond/uimport/temp/prosemirror-gapcursor.1.3.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLWdhcGN1cnNvci4xLjMuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcm9zZW1pcnJvci1nYXBjdXJzb3IvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9zZW1pcnJvcl9nYXBjdXJzb3JfMV8zXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiR2FwQ3Vyc29yIiwiZ2FwQ3Vyc29yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9wcm9zZW1pcnJvcl9rZXltYXAiLCJyZXF1aXJlIiwiaW1wb3J0X3Byb3NlbWlycm9yX3N0YXRlIiwiaW1wb3J0X3Byb3NlbWlycm9yX21vZGVsIiwiaW1wb3J0X3Byb3NlbWlycm9yX3ZpZXciLCJTZWxlY3Rpb24iLCJjb25zdHJ1Y3RvciIsIiRwb3MiLCJtYXAiLCJkb2MiLCJtYXBwaW5nIiwicmVzb2x2ZSIsImhlYWQiLCJ2YWxpZCIsIm5lYXIiLCJjb250ZW50IiwiU2xpY2UiLCJlbXB0eSIsImVxIiwib3RoZXIiLCJ0b0pTT04iLCJ0eXBlIiwicG9zIiwiZnJvbUpTT04iLCJqc29uIiwiUmFuZ2VFcnJvciIsImdldEJvb2ttYXJrIiwiR2FwQm9va21hcmsiLCJhbmNob3IiLCJwYXJlbnQiLCJpc1RleHRibG9jayIsImNsb3NlZEJlZm9yZSIsImNsb3NlZEFmdGVyIiwib3ZlcnJpZGUiLCJzcGVjIiwiYWxsb3dHYXBDdXJzb3IiLCJkZWZsdCIsImNvbnRlbnRNYXRjaEF0IiwiaW5kZXgiLCJkZWZhdWx0VHlwZSIsImZpbmRHYXBDdXJzb3JGcm9tIiwiZGlyIiwibXVzdE1vdmUiLCJzZWFyY2giLCJuZXh0IiwiZCIsImRlcHRoIiwibm9kZSIsImluZGV4QWZ0ZXIiLCJjaGlsZENvdW50IiwiY2hpbGQiLCIkY3VyIiwiaW5zaWRlIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImlzQXRvbSIsImlzVGV4dCIsIk5vZGVTZWxlY3Rpb24iLCJpc1NlbGVjdGFibGUiLCJub2RlU2l6ZSIsInByb3RvdHlwZSIsInZpc2libGUiLCJmaW5kRnJvbSIsImpzb25JRCIsImlzb2xhdGluZyIsImJlZm9yZSIsImlubGluZUNvbnRlbnQiLCJhZnRlciIsIlBsdWdpbiIsInByb3BzIiwiZGVjb3JhdGlvbnMiLCJkcmF3R2FwQ3Vyc29yIiwiY3JlYXRlU2VsZWN0aW9uQmV0d2VlbiIsIl92aWV3IiwiJGFuY2hvciIsIiRoZWFkIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlRE9NRXZlbnRzIiwiYmVmb3JlaW5wdXQiLCJrZXlkb3duSGFuZGxlciIsImFycm93IiwiYXhpcyIsImRpclN0ciIsInN0YXRlIiwiZGlzcGF0Y2giLCJ2aWV3Iiwic2VsIiwic2VsZWN0aW9uIiwiJHN0YXJ0IiwiJHRvIiwiJGZyb20iLCJUZXh0U2VsZWN0aW9uIiwiZW5kT2ZUZXh0YmxvY2siLCIkZm91bmQiLCJ0ciIsInNldFNlbGVjdGlvbiIsImV2ZW50IiwiZWRpdGFibGUiLCJjbGlja1BvcyIsInBvc0F0Q29vcmRzIiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJjbGllbnRZIiwibm9kZUF0IiwiaW5wdXRUeXBlIiwiaW5zZXJ0IiwiZmluZFdyYXBwaW5nIiwic2NoZW1hIiwibm9kZXMiLCJ0ZXh0IiwiZnJhZyIsIkZyYWdtZW50IiwiaSIsImxlbmd0aCIsImZyb20iLCJjcmVhdGVBbmRGaWxsIiwicmVwbGFjZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkRlY29yYXRpb25TZXQiLCJjcmVhdGUiLCJEZWNvcmF0aW9uIiwid2lkZ2V0Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQ0FBQTtBQUFBQyxRQUFBLENBQUFELG1DQUFBO0VBQUFFLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFB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bkIsd0JBQUEsQ0FBQWEsS0FBQSxDQUFNZ0csSUFBQSxFQUFNLEdBQUcsQ0FBQyxDQUFDO0VBQzFFakIsRUFBQSxDQUFHQyxZQUFBLENBQWE5Rix3QkFBQSxDQUFBMEYsYUFBQSxDQUFjOUUsSUFBQSxDQUFLaUYsRUFBQSxDQUFHdEYsR0FBQSxDQUFJRSxPQUFBLENBQVFnRixLQUFBLENBQU1yRSxHQUFBLEdBQU0sQ0FBQyxDQUFDLENBQUM7RUFDakVnRSxJQUFBLENBQUtELFFBQUEsQ0FBU1UsRUFBRTtFQUNoQixPQUFPO0FBQ1g7QUFDQSxTQUFTeEIsY0FBY2EsS0FBQSxFQUFPO0VBQzFCLElBQUksRUFBRUEsS0FBQSxDQUFNSSxTQUFBLFlBQXFCN0YsU0FBQSxHQUM3QixPQUFPO0VBQ1gsSUFBSW9ELElBQUEsR0FBT3dFLFFBQUEsQ0FBU0MsYUFBQSxDQUFjLEtBQUs7RUFDdkN6RSxJQUFBLENBQUswRSxTQUFBLEdBQVk7RUFDakIsT0FBT3JILHVCQUFBLENBQUFzSCxhQUFBLENBQWNDLE1BQUEsQ0FBT3ZDLEtBQUEsQ0FBTTNFLEdBQUEsRUFBSyxDQUFDTCx1QkFBQSxDQUFBd0gsVUFBQSxDQUFXQyxNQUFBLENBQU96QyxLQUFBLENBQU1JLFNBQUEsQ0FBVTVFLElBQUEsRUFBTW1DLElBQUEsRUFBTTtJQUFFK0UsR0FBQSxFQUFLO0VBQVksQ0FBQyxDQUFDLENBQUM7QUFDaEgiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL3J2ZC9vdXQifQ==