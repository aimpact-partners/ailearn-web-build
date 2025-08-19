System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep)],
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

// .beyond/uimport/prosemirror-commands.1.7.1.js
var prosemirror_commands_1_7_1_exports = {};
__export(prosemirror_commands_1_7_1_exports, {
  autoJoin: () => autoJoin,
  baseKeymap: () => baseKeymap,
  chainCommands: () => chainCommands,
  createParagraphNear: () => createParagraphNear,
  deleteSelection: () => deleteSelection,
  exitCode: () => exitCode,
  joinBackward: () => joinBackward,
  joinDown: () => joinDown,
  joinForward: () => joinForward,
  joinTextblockBackward: () => joinTextblockBackward,
  joinTextblockForward: () => joinTextblockForward,
  joinUp: () => joinUp,
  lift: () => lift,
  liftEmptyBlock: () => liftEmptyBlock,
  macBaseKeymap: () => macBaseKeymap,
  newlineInCode: () => newlineInCode,
  pcBaseKeymap: () => pcBaseKeymap,
  selectAll: () => selectAll,
  selectNodeBackward: () => selectNodeBackward,
  selectNodeForward: () => selectNodeForward,
  selectParentNode: () => selectParentNode,
  selectTextblockEnd: () => selectTextblockEnd,
  selectTextblockStart: () => selectTextblockStart,
  setBlockType: () => setBlockType,
  splitBlock: () => splitBlock,
  splitBlockAs: () => splitBlockAs,
  splitBlockKeepMarks: () => splitBlockKeepMarks,
  toggleMark: () => toggleMark,
  wrapIn: () => wrapIn
});
module.exports = __toCommonJS(prosemirror_commands_1_7_1_exports);

// node_modules/prosemirror-commands/dist/index.js
var import_prosemirror_transform = require("prosemirror-transform@1.10.4");
var import_prosemirror_model = require("prosemirror-model@1.25.3");
var import_prosemirror_state = require("prosemirror-state@1.4.3");
var deleteSelection = (state, dispatch) => {
  if (state.selection.empty) return false;
  if (dispatch) dispatch(state.tr.deleteSelection().scrollIntoView());
  return true;
};
function atBlockStart(state, view) {
  let {
    $cursor
  } = state.selection;
  if (!$cursor || (view ? !view.endOfTextblock("backward", state) : $cursor.parentOffset > 0)) return null;
  return $cursor;
}
var joinBackward = (state, dispatch, view) => {
  let $cursor = atBlockStart(state, view);
  if (!$cursor) return false;
  let $cut = findCutBefore($cursor);
  if (!$cut) {
    let range = $cursor.blockRange(),
      target = range && (0, import_prosemirror_transform.liftTarget)(range);
    if (target == null) return false;
    if (dispatch) dispatch(state.tr.lift(range, target).scrollIntoView());
    return true;
  }
  let before = $cut.nodeBefore;
  if (deleteBarrier(state, $cut, dispatch, -1)) return true;
  if ($cursor.parent.content.size == 0 && (textblockAt(before, "end") || import_prosemirror_state.NodeSelection.isSelectable(before))) {
    for (let depth = $cursor.depth;; depth--) {
      let delStep = (0, import_prosemirror_transform.replaceStep)(state.doc, $cursor.before(depth), $cursor.after(depth), import_prosemirror_model.Slice.empty);
      if (delStep && delStep.slice.size < delStep.to - delStep.from) {
        if (dispatch) {
          let tr = state.tr.step(delStep);
          tr.setSelection(textblockAt(before, "end") ? import_prosemirror_state.Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos, -1)), -1) : import_prosemirror_state.NodeSelection.create(tr.doc, $cut.pos - before.nodeSize));
          dispatch(tr.scrollIntoView());
        }
        return true;
      }
      if (depth == 1 || $cursor.node(depth - 1).childCount > 1) break;
    }
  }
  if (before.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch) dispatch(state.tr.delete($cut.pos - before.nodeSize, $cut.pos).scrollIntoView());
    return true;
  }
  return false;
};
var joinTextblockBackward = (state, dispatch, view) => {
  let $cursor = atBlockStart(state, view);
  if (!$cursor) return false;
  let $cut = findCutBefore($cursor);
  return $cut ? joinTextblocksAround(state, $cut, dispatch) : false;
};
var joinTextblockForward = (state, dispatch, view) => {
  let $cursor = atBlockEnd(state, view);
  if (!$cursor) return false;
  let $cut = findCutAfter($cursor);
  return $cut ? joinTextblocksAround(state, $cut, dispatch) : false;
};
function joinTextblocksAround(state, $cut, dispatch) {
  let before = $cut.nodeBefore,
    beforeText = before,
    beforePos = $cut.pos - 1;
  for (; !beforeText.isTextblock; beforePos--) {
    if (beforeText.type.spec.isolating) return false;
    let child = beforeText.lastChild;
    if (!child) return false;
    beforeText = child;
  }
  let after = $cut.nodeAfter,
    afterText = after,
    afterPos = $cut.pos + 1;
  for (; !afterText.isTextblock; afterPos++) {
    if (afterText.type.spec.isolating) return false;
    let child = afterText.firstChild;
    if (!child) return false;
    afterText = child;
  }
  let step = (0, import_prosemirror_transform.replaceStep)(state.doc, beforePos, afterPos, import_prosemirror_model.Slice.empty);
  if (!step || step.from != beforePos || step instanceof import_prosemirror_transform.ReplaceStep && step.slice.size >= afterPos - beforePos) return false;
  if (dispatch) {
    let tr = state.tr.step(step);
    tr.setSelection(import_prosemirror_state.TextSelection.create(tr.doc, beforePos));
    dispatch(tr.scrollIntoView());
  }
  return true;
}
function textblockAt(node, side, only = false) {
  for (let scan = node; scan; scan = side == "start" ? scan.firstChild : scan.lastChild) {
    if (scan.isTextblock) return true;
    if (only && scan.childCount != 1) return false;
  }
  return false;
}
var selectNodeBackward = (state, dispatch, view) => {
  let {
      $head,
      empty
    } = state.selection,
    $cut = $head;
  if (!empty) return false;
  if ($head.parent.isTextblock) {
    if (view ? !view.endOfTextblock("backward", state) : $head.parentOffset > 0) return false;
    $cut = findCutBefore($head);
  }
  let node = $cut && $cut.nodeBefore;
  if (!node || !import_prosemirror_state.NodeSelection.isSelectable(node)) return false;
  if (dispatch) dispatch(state.tr.setSelection(import_prosemirror_state.NodeSelection.create(state.doc, $cut.pos - node.nodeSize)).scrollIntoView());
  return true;
};
function findCutBefore($pos) {
  if (!$pos.parent.type.spec.isolating) for (let i = $pos.depth - 1; i >= 0; i--) {
    if ($pos.index(i) > 0) return $pos.doc.resolve($pos.before(i + 1));
    if ($pos.node(i).type.spec.isolating) break;
  }
  return null;
}
function atBlockEnd(state, view) {
  let {
    $cursor
  } = state.selection;
  if (!$cursor || (view ? !view.endOfTextblock("forward", state) : $cursor.parentOffset < $cursor.parent.content.size)) return null;
  return $cursor;
}
var joinForward = (state, dispatch, view) => {
  let $cursor = atBlockEnd(state, view);
  if (!$cursor) return false;
  let $cut = findCutAfter($cursor);
  if (!$cut) return false;
  let after = $cut.nodeAfter;
  if (deleteBarrier(state, $cut, dispatch, 1)) return true;
  if ($cursor.parent.content.size == 0 && (textblockAt(after, "start") || import_prosemirror_state.NodeSelection.isSelectable(after))) {
    let delStep = (0, import_prosemirror_transform.replaceStep)(state.doc, $cursor.before(), $cursor.after(), import_prosemirror_model.Slice.empty);
    if (delStep && delStep.slice.size < delStep.to - delStep.from) {
      if (dispatch) {
        let tr = state.tr.step(delStep);
        tr.setSelection(textblockAt(after, "start") ? import_prosemirror_state.Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos)), 1) : import_prosemirror_state.NodeSelection.create(tr.doc, tr.mapping.map($cut.pos)));
        dispatch(tr.scrollIntoView());
      }
      return true;
    }
  }
  if (after.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch) dispatch(state.tr.delete($cut.pos, $cut.pos + after.nodeSize).scrollIntoView());
    return true;
  }
  return false;
};
var selectNodeForward = (state, dispatch, view) => {
  let {
      $head,
      empty
    } = state.selection,
    $cut = $head;
  if (!empty) return false;
  if ($head.parent.isTextblock) {
    if (view ? !view.endOfTextblock("forward", state) : $head.parentOffset < $head.parent.content.size) return false;
    $cut = findCutAfter($head);
  }
  let node = $cut && $cut.nodeAfter;
  if (!node || !import_prosemirror_state.NodeSelection.isSelectable(node)) return false;
  if (dispatch) dispatch(state.tr.setSelection(import_prosemirror_state.NodeSelection.create(state.doc, $cut.pos)).scrollIntoView());
  return true;
};
function findCutAfter($pos) {
  if (!$pos.parent.type.spec.isolating) for (let i = $pos.depth - 1; i >= 0; i--) {
    let parent = $pos.node(i);
    if ($pos.index(i) + 1 < parent.childCount) return $pos.doc.resolve($pos.after(i + 1));
    if (parent.type.spec.isolating) break;
  }
  return null;
}
var joinUp = (state, dispatch) => {
  let sel = state.selection,
    nodeSel = sel instanceof import_prosemirror_state.NodeSelection,
    point;
  if (nodeSel) {
    if (sel.node.isTextblock || !(0, import_prosemirror_transform.canJoin)(state.doc, sel.from)) return false;
    point = sel.from;
  } else {
    point = (0, import_prosemirror_transform.joinPoint)(state.doc, sel.from, -1);
    if (point == null) return false;
  }
  if (dispatch) {
    let tr = state.tr.join(point);
    if (nodeSel) tr.setSelection(import_prosemirror_state.NodeSelection.create(tr.doc, point - state.doc.resolve(point).nodeBefore.nodeSize));
    dispatch(tr.scrollIntoView());
  }
  return true;
};
var joinDown = (state, dispatch) => {
  let sel = state.selection,
    point;
  if (sel instanceof import_prosemirror_state.NodeSelection) {
    if (sel.node.isTextblock || !(0, import_prosemirror_transform.canJoin)(state.doc, sel.to)) return false;
    point = sel.to;
  } else {
    point = (0, import_prosemirror_transform.joinPoint)(state.doc, sel.to, 1);
    if (point == null) return false;
  }
  if (dispatch) dispatch(state.tr.join(point).scrollIntoView());
  return true;
};
var lift = (state, dispatch) => {
  let {
    $from,
    $to
  } = state.selection;
  let range = $from.blockRange($to),
    target = range && (0, import_prosemirror_transform.liftTarget)(range);
  if (target == null) return false;
  if (dispatch) dispatch(state.tr.lift(range, target).scrollIntoView());
  return true;
};
var newlineInCode = (state, dispatch) => {
  let {
    $head,
    $anchor
  } = state.selection;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) return false;
  if (dispatch) dispatch(state.tr.insertText("\n").scrollIntoView());
  return true;
};
function defaultBlockAt(match) {
  for (let i = 0; i < match.edgeCount; i++) {
    let {
      type
    } = match.edge(i);
    if (type.isTextblock && !type.hasRequiredAttrs()) return type;
  }
  return null;
}
var exitCode = (state, dispatch) => {
  let {
    $head,
    $anchor
  } = state.selection;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) return false;
  let above = $head.node(-1),
    after = $head.indexAfter(-1),
    type = defaultBlockAt(above.contentMatchAt(after));
  if (!type || !above.canReplaceWith(after, after, type)) return false;
  if (dispatch) {
    let pos = $head.after(),
      tr = state.tr.replaceWith(pos, pos, type.createAndFill());
    tr.setSelection(import_prosemirror_state.Selection.near(tr.doc.resolve(pos), 1));
    dispatch(tr.scrollIntoView());
  }
  return true;
};
var createParagraphNear = (state, dispatch) => {
  let sel = state.selection,
    {
      $from,
      $to
    } = sel;
  if (sel instanceof import_prosemirror_state.AllSelection || $from.parent.inlineContent || $to.parent.inlineContent) return false;
  let type = defaultBlockAt($to.parent.contentMatchAt($to.indexAfter()));
  if (!type || !type.isTextblock) return false;
  if (dispatch) {
    let side = (!$from.parentOffset && $to.index() < $to.parent.childCount ? $from : $to).pos;
    let tr = state.tr.insert(side, type.createAndFill());
    tr.setSelection(import_prosemirror_state.TextSelection.create(tr.doc, side + 1));
    dispatch(tr.scrollIntoView());
  }
  return true;
};
var liftEmptyBlock = (state, dispatch) => {
  let {
    $cursor
  } = state.selection;
  if (!$cursor || $cursor.parent.content.size) return false;
  if ($cursor.depth > 1 && $cursor.after() != $cursor.end(-1)) {
    let before = $cursor.before();
    if ((0, import_prosemirror_transform.canSplit)(state.doc, before)) {
      if (dispatch) dispatch(state.tr.split(before).scrollIntoView());
      return true;
    }
  }
  let range = $cursor.blockRange(),
    target = range && (0, import_prosemirror_transform.liftTarget)(range);
  if (target == null) return false;
  if (dispatch) dispatch(state.tr.lift(range, target).scrollIntoView());
  return true;
};
function splitBlockAs(splitNode) {
  return (state, dispatch) => {
    let {
      $from,
      $to
    } = state.selection;
    if (state.selection instanceof import_prosemirror_state.NodeSelection && state.selection.node.isBlock) {
      if (!$from.parentOffset || !(0, import_prosemirror_transform.canSplit)(state.doc, $from.pos)) return false;
      if (dispatch) dispatch(state.tr.split($from.pos).scrollIntoView());
      return true;
    }
    if (!$from.depth) return false;
    let types = [];
    let splitDepth,
      deflt,
      atEnd = false,
      atStart = false;
    for (let d = $from.depth;; d--) {
      let node = $from.node(d);
      if (node.isBlock) {
        atEnd = $from.end(d) == $from.pos + ($from.depth - d);
        atStart = $from.start(d) == $from.pos - ($from.depth - d);
        deflt = defaultBlockAt($from.node(d - 1).contentMatchAt($from.indexAfter(d - 1)));
        let splitType = splitNode && splitNode($to.parent, atEnd, $from);
        types.unshift(splitType || (atEnd && deflt ? {
          type: deflt
        } : null));
        splitDepth = d;
        break;
      } else {
        if (d == 1) return false;
        types.unshift(null);
      }
    }
    let tr = state.tr;
    if (state.selection instanceof import_prosemirror_state.TextSelection || state.selection instanceof import_prosemirror_state.AllSelection) tr.deleteSelection();
    let splitPos = tr.mapping.map($from.pos);
    let can = (0, import_prosemirror_transform.canSplit)(tr.doc, splitPos, types.length, types);
    if (!can) {
      types[0] = deflt ? {
        type: deflt
      } : null;
      can = (0, import_prosemirror_transform.canSplit)(tr.doc, splitPos, types.length, types);
    }
    if (!can) return false;
    tr.split(splitPos, types.length, types);
    if (!atEnd && atStart && $from.node(splitDepth).type != deflt) {
      let first = tr.mapping.map($from.before(splitDepth)),
        $first = tr.doc.resolve(first);
      if (deflt && $from.node(splitDepth - 1).canReplaceWith($first.index(), $first.index() + 1, deflt)) tr.setNodeMarkup(tr.mapping.map($from.before(splitDepth)), deflt);
    }
    if (dispatch) dispatch(tr.scrollIntoView());
    return true;
  };
}
var splitBlock = splitBlockAs();
var splitBlockKeepMarks = (state, dispatch) => {
  return splitBlock(state, dispatch && (tr => {
    let marks = state.storedMarks || state.selection.$to.parentOffset && state.selection.$from.marks();
    if (marks) tr.ensureMarks(marks);
    dispatch(tr);
  }));
};
var selectParentNode = (state, dispatch) => {
  let {
      $from,
      to
    } = state.selection,
    pos;
  let same = $from.sharedDepth(to);
  if (same == 0) return false;
  pos = $from.before(same);
  if (dispatch) dispatch(state.tr.setSelection(import_prosemirror_state.NodeSelection.create(state.doc, pos)));
  return true;
};
var selectAll = (state, dispatch) => {
  if (dispatch) dispatch(state.tr.setSelection(new import_prosemirror_state.AllSelection(state.doc)));
  return true;
};
function joinMaybeClear(state, $pos, dispatch) {
  let before = $pos.nodeBefore,
    after = $pos.nodeAfter,
    index = $pos.index();
  if (!before || !after || !before.type.compatibleContent(after.type)) return false;
  if (!before.content.size && $pos.parent.canReplace(index - 1, index)) {
    if (dispatch) dispatch(state.tr.delete($pos.pos - before.nodeSize, $pos.pos).scrollIntoView());
    return true;
  }
  if (!$pos.parent.canReplace(index, index + 1) || !(after.isTextblock || (0, import_prosemirror_transform.canJoin)(state.doc, $pos.pos))) return false;
  if (dispatch) dispatch(state.tr.join($pos.pos).scrollIntoView());
  return true;
}
function deleteBarrier(state, $cut, dispatch, dir) {
  let before = $cut.nodeBefore,
    after = $cut.nodeAfter,
    conn,
    match;
  let isolated = before.type.spec.isolating || after.type.spec.isolating;
  if (!isolated && joinMaybeClear(state, $cut, dispatch)) return true;
  let canDelAfter = !isolated && $cut.parent.canReplace($cut.index(), $cut.index() + 1);
  if (canDelAfter && (conn = (match = before.contentMatchAt(before.childCount)).findWrapping(after.type)) && match.matchType(conn[0] || after.type).validEnd) {
    if (dispatch) {
      let end = $cut.pos + after.nodeSize,
        wrap = import_prosemirror_model.Fragment.empty;
      for (let i = conn.length - 1; i >= 0; i--) wrap = import_prosemirror_model.Fragment.from(conn[i].create(null, wrap));
      wrap = import_prosemirror_model.Fragment.from(before.copy(wrap));
      let tr = state.tr.step(new import_prosemirror_transform.ReplaceAroundStep($cut.pos - 1, end, $cut.pos, end, new import_prosemirror_model.Slice(wrap, 1, 0), conn.length, true));
      let $joinAt = tr.doc.resolve(end + 2 * conn.length);
      if ($joinAt.nodeAfter && $joinAt.nodeAfter.type == before.type && (0, import_prosemirror_transform.canJoin)(tr.doc, $joinAt.pos)) tr.join($joinAt.pos);
      dispatch(tr.scrollIntoView());
    }
    return true;
  }
  let selAfter = after.type.spec.isolating || dir > 0 && isolated ? null : import_prosemirror_state.Selection.findFrom($cut, 1);
  let range = selAfter && selAfter.$from.blockRange(selAfter.$to),
    target = range && (0, import_prosemirror_transform.liftTarget)(range);
  if (target != null && target >= $cut.depth) {
    if (dispatch) dispatch(state.tr.lift(range, target).scrollIntoView());
    return true;
  }
  if (canDelAfter && textblockAt(after, "start", true) && textblockAt(before, "end")) {
    let at = before,
      wrap = [];
    for (;;) {
      wrap.push(at);
      if (at.isTextblock) break;
      at = at.lastChild;
    }
    let afterText = after,
      afterDepth = 1;
    for (; !afterText.isTextblock; afterText = afterText.firstChild) afterDepth++;
    if (at.canReplace(at.childCount, at.childCount, afterText.content)) {
      if (dispatch) {
        let end = import_prosemirror_model.Fragment.empty;
        for (let i = wrap.length - 1; i >= 0; i--) end = import_prosemirror_model.Fragment.from(wrap[i].copy(end));
        let tr = state.tr.step(new import_prosemirror_transform.ReplaceAroundStep($cut.pos - wrap.length, $cut.pos + after.nodeSize, $cut.pos + afterDepth, $cut.pos + after.nodeSize - afterDepth, new import_prosemirror_model.Slice(end, wrap.length, 0), 0, true));
        dispatch(tr.scrollIntoView());
      }
      return true;
    }
  }
  return false;
}
function selectTextblockSide(side) {
  return function (state, dispatch) {
    let sel = state.selection,
      $pos = side < 0 ? sel.$from : sel.$to;
    let depth = $pos.depth;
    while ($pos.node(depth).isInline) {
      if (!depth) return false;
      depth--;
    }
    if (!$pos.node(depth).isTextblock) return false;
    if (dispatch) dispatch(state.tr.setSelection(import_prosemirror_state.TextSelection.create(state.doc, side < 0 ? $pos.start(depth) : $pos.end(depth))));
    return true;
  };
}
var selectTextblockStart = selectTextblockSide(-1);
var selectTextblockEnd = selectTextblockSide(1);
function wrapIn(nodeType, attrs = null) {
  return function (state, dispatch) {
    let {
      $from,
      $to
    } = state.selection;
    let range = $from.blockRange($to),
      wrapping = range && (0, import_prosemirror_transform.findWrapping)(range, nodeType, attrs);
    if (!wrapping) return false;
    if (dispatch) dispatch(state.tr.wrap(range, wrapping).scrollIntoView());
    return true;
  };
}
function setBlockType(nodeType, attrs = null) {
  return function (state, dispatch) {
    let applicable = false;
    for (let i = 0; i < state.selection.ranges.length && !applicable; i++) {
      let {
        $from: {
          pos: from
        },
        $to: {
          pos: to
        }
      } = state.selection.ranges[i];
      state.doc.nodesBetween(from, to, (node, pos) => {
        if (applicable) return false;
        if (!node.isTextblock || node.hasMarkup(nodeType, attrs)) return;
        if (node.type == nodeType) {
          applicable = true;
        } else {
          let $pos = state.doc.resolve(pos),
            index = $pos.index();
          applicable = $pos.parent.canReplaceWith(index, index + 1, nodeType);
        }
      });
    }
    if (!applicable) return false;
    if (dispatch) {
      let tr = state.tr;
      for (let i = 0; i < state.selection.ranges.length; i++) {
        let {
          $from: {
            pos: from
          },
          $to: {
            pos: to
          }
        } = state.selection.ranges[i];
        tr.setBlockType(from, to, nodeType, attrs);
      }
      dispatch(tr.scrollIntoView());
    }
    return true;
  };
}
function markApplies(doc, ranges, type, enterAtoms) {
  for (let i = 0; i < ranges.length; i++) {
    let {
      $from,
      $to
    } = ranges[i];
    let can = $from.depth == 0 ? doc.inlineContent && doc.type.allowsMarkType(type) : false;
    doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
      if (can || !enterAtoms && node.isAtom && node.isInline && pos >= $from.pos && pos + node.nodeSize <= $to.pos) return false;
      can = node.inlineContent && node.type.allowsMarkType(type);
    });
    if (can) return true;
  }
  return false;
}
function removeInlineAtoms(ranges) {
  let result = [];
  for (let i = 0; i < ranges.length; i++) {
    let {
      $from,
      $to
    } = ranges[i];
    $from.doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
      if (node.isAtom && node.content.size && node.isInline && pos >= $from.pos && pos + node.nodeSize <= $to.pos) {
        if (pos + 1 > $from.pos) result.push(new import_prosemirror_state.SelectionRange($from, $from.doc.resolve(pos + 1)));
        $from = $from.doc.resolve(pos + 1 + node.content.size);
        return false;
      }
    });
    if ($from.pos < $to.pos) result.push(new import_prosemirror_state.SelectionRange($from, $to));
  }
  return result;
}
function toggleMark(markType, attrs = null, options) {
  let removeWhenPresent = (options && options.removeWhenPresent) !== false;
  let enterAtoms = (options && options.enterInlineAtoms) !== false;
  let dropSpace = !(options && options.includeWhitespace);
  return function (state, dispatch) {
    let {
      empty,
      $cursor,
      ranges
    } = state.selection;
    if (empty && !$cursor || !markApplies(state.doc, ranges, markType, enterAtoms)) return false;
    if (dispatch) {
      if ($cursor) {
        if (markType.isInSet(state.storedMarks || $cursor.marks())) dispatch(state.tr.removeStoredMark(markType));else dispatch(state.tr.addStoredMark(markType.create(attrs)));
      } else {
        let add,
          tr = state.tr;
        if (!enterAtoms) ranges = removeInlineAtoms(ranges);
        if (removeWhenPresent) {
          add = !ranges.some(r => state.doc.rangeHasMark(r.$from.pos, r.$to.pos, markType));
        } else {
          add = !ranges.every(r => {
            let missing = false;
            tr.doc.nodesBetween(r.$from.pos, r.$to.pos, (node, pos, parent) => {
              if (missing) return false;
              missing = !markType.isInSet(node.marks) && !!parent && parent.type.allowsMarkType(markType) && !(node.isText && /^\s*$/.test(node.textBetween(Math.max(0, r.$from.pos - pos), Math.min(node.nodeSize, r.$to.pos - pos))));
            });
            return !missing;
          });
        }
        for (let i = 0; i < ranges.length; i++) {
          let {
            $from,
            $to
          } = ranges[i];
          if (!add) {
            tr.removeMark($from.pos, $to.pos, markType);
          } else {
            let from = $from.pos,
              to = $to.pos,
              start = $from.nodeAfter,
              end = $to.nodeBefore;
            let spaceStart = dropSpace && start && start.isText ? /^\s*/.exec(start.text)[0].length : 0;
            let spaceEnd = dropSpace && end && end.isText ? /\s*$/.exec(end.text)[0].length : 0;
            if (from + spaceStart < to) {
              from += spaceStart;
              to -= spaceEnd;
            }
            tr.addMark(from, to, markType.create(attrs));
          }
        }
        dispatch(tr.scrollIntoView());
      }
    }
    return true;
  };
}
function wrapDispatchForJoin(dispatch, isJoinable) {
  return tr => {
    if (!tr.isGeneric) return dispatch(tr);
    let ranges = [];
    for (let i = 0; i < tr.mapping.maps.length; i++) {
      let map = tr.mapping.maps[i];
      for (let j = 0; j < ranges.length; j++) ranges[j] = map.map(ranges[j]);
      map.forEach((_s, _e, from, to) => ranges.push(from, to));
    }
    let joinable = [];
    for (let i = 0; i < ranges.length; i += 2) {
      let from = ranges[i],
        to = ranges[i + 1];
      let $from = tr.doc.resolve(from),
        depth = $from.sharedDepth(to),
        parent = $from.node(depth);
      for (let index = $from.indexAfter(depth), pos = $from.after(depth + 1); pos <= to; ++index) {
        let after = parent.maybeChild(index);
        if (!after) break;
        if (index && joinable.indexOf(pos) == -1) {
          let before = parent.child(index - 1);
          if (before.type == after.type && isJoinable(before, after)) joinable.push(pos);
        }
        pos += after.nodeSize;
      }
    }
    joinable.sort((a, b) => a - b);
    for (let i = joinable.length - 1; i >= 0; i--) {
      if ((0, import_prosemirror_transform.canJoin)(tr.doc, joinable[i])) tr.join(joinable[i]);
    }
    dispatch(tr);
  };
}
function autoJoin(command, isJoinable) {
  let canJoin2 = Array.isArray(isJoinable) ? node => isJoinable.indexOf(node.type.name) > -1 : isJoinable;
  return (state, dispatch, view) => command(state, dispatch && wrapDispatchForJoin(dispatch, canJoin2), view);
}
function chainCommands(...commands) {
  return function (state, dispatch, view) {
    for (let i = 0; i < commands.length; i++) if (commands[i](state, dispatch, view)) return true;
    return false;
  };
}
var backspace = chainCommands(deleteSelection, joinBackward, selectNodeBackward);
var del = chainCommands(deleteSelection, joinForward, selectNodeForward);
var pcBaseKeymap = {
  "Enter": chainCommands(newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock),
  "Mod-Enter": exitCode,
  "Backspace": backspace,
  "Mod-Backspace": backspace,
  "Shift-Backspace": backspace,
  "Delete": del,
  "Mod-Delete": del,
  "Mod-a": selectAll
};
var macBaseKeymap = {
  "Ctrl-h": pcBaseKeymap["Backspace"],
  "Alt-Backspace": pcBaseKeymap["Mod-Backspace"],
  "Ctrl-d": pcBaseKeymap["Delete"],
  "Ctrl-Alt-Backspace": pcBaseKeymap["Mod-Delete"],
  "Alt-Delete": pcBaseKeymap["Mod-Delete"],
  "Alt-d": pcBaseKeymap["Mod-Delete"],
  "Ctrl-a": selectTextblockStart,
  "Ctrl-e": selectTextblockEnd
};
for (let key in pcBaseKeymap) macBaseKeymap[key] = pcBaseKeymap[key];
var mac = typeof navigator != "undefined" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os != "undefined" && os.platform ? os.platform() == "darwin" : false;
var baseKeymap = mac ? macBaseKeymap : pcBaseKeymap;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcm9zZW1pcnJvci1jb21tYW5kcy4xLjcuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcm9zZW1pcnJvci1jb21tYW5kcy9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3NlbWlycm9yX2NvbW1hbmRzXzFfN18xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImF1dG9Kb2luIiwiYmFzZUtleW1hcCIsImNoYWluQ29tbWFuZHMiLCJjcmVhdGVQYXJhZ3JhcGhOZWFyIiwiZGVsZXRlU2VsZWN0aW9uIiwiZXhpdENvZGUiLCJqb2luQmFja3dhcmQiLCJqb2luRG93biIsImpvaW5Gb3J3YXJkIiwiam9pblRleHRibG9ja0JhY2t3YXJkIiwiam9pblRleHRibG9ja0ZvcndhcmQiLCJqb2luVXAiLCJsaWZ0IiwibGlmdEVtcHR5QmxvY2siLCJtYWNCYXNlS2V5bWFwIiwibmV3bGluZUluQ29kZSIsInBjQmFzZUtleW1hcCIsInNlbGVjdEFsbCIsInNlbGVjdE5vZGVCYWNrd2FyZCIsInNlbGVjdE5vZGVGb3J3YXJkIiwic2VsZWN0UGFyZW50Tm9kZSIsInNlbGVjdFRleHRibG9ja0VuZCIsInNlbGVjdFRleHRibG9ja1N0YXJ0Iiwic2V0QmxvY2tUeXBlIiwic3BsaXRCbG9jayIsInNwbGl0QmxvY2tBcyIsInNwbGl0QmxvY2tLZWVwTWFya3MiLCJ0b2dnbGVNYXJrIiwid3JhcEluIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9wcm9zZW1pcnJvcl90cmFuc2Zvcm0iLCJyZXF1aXJlIiwiaW1wb3J0X3Byb3NlbWlycm9yX21vZGVsIiwiaW1wb3J0X3Byb3NlbWlycm9yX3N0YXRlIiwic3RhdGUiLCJkaXNwYXRjaCIsInNlbGVjdGlvbiIsImVtcHR5IiwidHIiLCJzY3JvbGxJbnRvVmlldyIsImF0QmxvY2tTdGFydCIsInZpZXciLCIkY3Vyc29yIiwiZW5kT2ZUZXh0YmxvY2siLCJwYXJlbnRPZmZzZXQiLCIkY3V0IiwiZmluZEN1dEJlZm9yZSIsInJhbmdlIiwiYmxvY2tSYW5nZSIsInRhcmdldCIsImxpZnRUYXJnZXQiLCJiZWZvcmUiLCJub2RlQmVmb3JlIiwiZGVsZXRlQmFycmllciIsInBhcmVudCIsImNvbnRlbnQiLCJzaXplIiwidGV4dGJsb2NrQXQiLCJOb2RlU2VsZWN0aW9uIiwiaXNTZWxlY3RhYmxlIiwiZGVwdGgiLCJkZWxTdGVwIiwicmVwbGFjZVN0ZXAiLCJkb2MiLCJhZnRlciIsIlNsaWNlIiwic2xpY2UiLCJ0byIsImZyb20iLCJzdGVwIiwic2V0U2VsZWN0aW9uIiwiU2VsZWN0aW9uIiwiZmluZEZyb20iLCJyZXNvbHZlIiwibWFwcGluZyIsIm1hcCIsInBvcyIsImNyZWF0ZSIsIm5vZGVTaXplIiwibm9kZSIsImNoaWxkQ291bnQiLCJpc0F0b20iLCJkZWxldGUiLCJqb2luVGV4dGJsb2Nrc0Fyb3VuZCIsImF0QmxvY2tFbmQiLCJmaW5kQ3V0QWZ0ZXIiLCJiZWZvcmVUZXh0IiwiYmVmb3JlUG9zIiwiaXNUZXh0YmxvY2siLCJ0eXBlIiwic3BlYyIsImlzb2xhdGluZyIsImNoaWxkIiwibGFzdENoaWxkIiwibm9kZUFmdGVyIiwiYWZ0ZXJUZXh0IiwiYWZ0ZXJQb3MiLCJmaXJzdENoaWxkIiwiUmVwbGFjZVN0ZXAiLCJUZXh0U2VsZWN0aW9uIiwic2lkZSIsIm9ubHkiLCJzY2FuIiwiJGhlYWQiLCIkcG9zIiwiaSIsImluZGV4Iiwic2VsIiwibm9kZVNlbCIsInBvaW50IiwiY2FuSm9pbiIsImpvaW5Qb2ludCIsImpvaW4iLCIkZnJvbSIsIiR0byIsIiRhbmNob3IiLCJjb2RlIiwic2FtZVBhcmVudCIsImluc2VydFRleHQiLCJkZWZhdWx0QmxvY2tBdCIsIm1hdGNoIiwiZWRnZUNvdW50IiwiZWRnZSIsImhhc1JlcXVpcmVkQXR0cnMiLCJhYm92ZSIsImluZGV4QWZ0ZXIiLCJjb250ZW50TWF0Y2hBdCIsImNhblJlcGxhY2VXaXRoIiwicmVwbGFjZVdpdGgiLCJjcmVhdGVBbmRGaWxsIiwibmVhciIsIkFsbFNlbGVjdGlvbiIsImlubGluZUNvbnRlbnQiLCJpbnNlcnQiLCJlbmQiLCJjYW5TcGxpdCIsInNwbGl0Iiwic3BsaXROb2RlIiwiaXNCbG9jayIsInR5cGVzIiwic3BsaXREZXB0aCIsImRlZmx0IiwiYXRFbmQiLCJhdFN0YXJ0IiwiZCIsInN0YXJ0Iiwic3BsaXRUeXBlIiwidW5zaGlmdCIsInNwbGl0UG9zIiwiY2FuIiwibGVuZ3RoIiwiZmlyc3QiLCIkZmlyc3QiLCJzZXROb2RlTWFya3VwIiwibWFya3MiLCJzdG9yZWRNYXJrcyIsImVuc3VyZU1hcmtzIiwic2FtZSIsInNoYXJlZERlcHRoIiwiam9pbk1heWJlQ2xlYXIiLCJjb21wYXRpYmxlQ29udGVudCIsImNhblJlcGxhY2UiLCJkaXIiLCJjb25uIiwiaXNvbGF0ZWQiLCJjYW5EZWxBZnRlciIsImZpbmRXcmFwcGluZyIsIm1hdGNoVHlwZSIsInZhbGlkRW5kIiwid3JhcCIsIkZyYWdtZW50IiwiY29weSIsIlJlcGxhY2VBcm91bmRTdGVwIiwiJGpvaW5BdCIsInNlbEFmdGVyIiwiYXQiLCJwdXNoIiwiYWZ0ZXJEZXB0aCIsInNlbGVjdFRleHRibG9ja1NpZGUiLCJpc0lubGluZSIsIm5vZGVUeXBlIiwiYXR0cnMiLCJ3cmFwcGluZyIsImFwcGxpY2FibGUiLCJyYW5nZXMiLCJub2Rlc0JldHdlZW4iLCJoYXNNYXJrdXAiLCJtYXJrQXBwbGllcyIsImVudGVyQXRvbXMiLCJhbGxvd3NNYXJrVHlwZSIsInJlbW92ZUlubGluZUF0b21zIiwicmVzdWx0IiwiU2VsZWN0aW9uUmFuZ2UiLCJtYXJrVHlwZSIsIm9wdGlvbnMiLCJyZW1vdmVXaGVuUHJlc2VudCIsImVudGVySW5saW5lQXRvbXMiLCJkcm9wU3BhY2UiLCJpbmNsdWRlV2hpdGVzcGFjZSIsImlzSW5TZXQiLCJyZW1vdmVTdG9yZWRNYXJrIiwiYWRkU3RvcmVkTWFyayIsImFkZCIsInNvbWUiLCJyIiwicmFuZ2VIYXNNYXJrIiwiZXZlcnkiLCJtaXNzaW5nIiwiaXNUZXh0IiwidGVzdCIsInRleHRCZXR3ZWVuIiwiTWF0aCIsIm1heCIsIm1pbiIsInJlbW92ZU1hcmsiLCJzcGFjZVN0YXJ0IiwiZXhlYyIsInRleHQiLCJzcGFjZUVuZCIsImFkZE1hcmsiLCJ3cmFwRGlzcGF0Y2hGb3JKb2luIiwiaXNKb2luYWJsZSIsImlzR2VuZXJpYyIsIm1hcHMiLCJqIiwiZm9yRWFjaCIsIl9zIiwiX2UiLCJqb2luYWJsZSIsIm1heWJlQ2hpbGQiLCJpbmRleE9mIiwic29ydCIsImEiLCJiIiwiY29tbWFuZCIsImNhbkpvaW4yIiwiQXJyYXkiLCJpc0FycmF5IiwibmFtZSIsImNvbW1hbmRzIiwiYmFja3NwYWNlIiwiZGVsIiwia2V5IiwibWFjIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0NBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQ0FBQTtFQUFBRSxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxjQUFBLEVBQUFB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aUJBQWlCQSxZQUFBLENBQWE7RUFDOUIsVUFBVUEsWUFBQSxDQUFhO0VBQ3ZCLHNCQUFzQkEsWUFBQSxDQUFhO0VBQ25DLGNBQWNBLFlBQUEsQ0FBYTtFQUMzQixTQUFTQSxZQUFBLENBQWE7RUFDdEIsVUFBVU0sb0JBQUE7RUFDVixVQUFVRDtBQUNkO0FBQ0EsU0FBUytOLEdBQUEsSUFBT3BPLFlBQUEsRUFDWkYsYUFBQSxDQUFjc08sR0FBQSxJQUFPcE8sWUFBQSxDQUFhb08sR0FBQTtBQUN0QyxJQUFNQyxHQUFBLEdBQU0sT0FBT0MsU0FBQSxJQUFhLGNBQWMscUJBQXFCbkMsSUFBQSxDQUFLbUMsU0FBQSxDQUFVQyxRQUFRLElBRXBGLE9BQU9DLEVBQUEsSUFBTSxlQUFlQSxFQUFBLENBQUdELFFBQUEsR0FBV0MsRUFBQSxDQUFHRCxRQUFBLENBQVMsS0FBSyxXQUFXO0FBTTVFLElBQU10UCxVQUFBLEdBQWFvUCxHQUFBLEdBQU12TyxhQUFBLEdBQWdCRSxZQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9ydmQvb3V0In0=