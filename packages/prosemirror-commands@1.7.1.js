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

// .beyond/uimport/temp/prosemirror-commands.1.7.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLWNvbW1hbmRzLjEuNy4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Byb3NlbWlycm9yLWNvbW1hbmRzL2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOlsicHJvc2VtaXJyb3JfY29tbWFuZHNfMV83XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiYXV0b0pvaW4iLCJiYXNlS2V5bWFwIiwiY2hhaW5Db21tYW5kcyIsImNyZWF0ZVBhcmFncmFwaE5lYXIiLCJkZWxldGVTZWxlY3Rpb24iLCJleGl0Q29kZSIsImpvaW5CYWNrd2FyZCIsImpvaW5Eb3duIiwiam9pbkZvcndhcmQiLCJqb2luVGV4dGJsb2NrQmFja3dhcmQiLCJqb2luVGV4dGJsb2NrRm9yd2FyZCIsImpvaW5VcCIsImxpZnQiLCJsaWZ0RW1wdHlCbG9jayIsIm1hY0Jhc2VLZXltYXAiLCJuZXdsaW5lSW5Db2RlIiwicGNCYXNlS2V5bWFwIiwic2VsZWN0QWxsIiwic2VsZWN0Tm9kZUJhY2t3YXJkIiwic2VsZWN0Tm9kZUZvcndhcmQiLCJzZWxlY3RQYXJlbnROb2RlIiwic2VsZWN0VGV4dGJsb2NrRW5kIiwic2VsZWN0VGV4dGJsb2NrU3RhcnQiLCJzZXRCbG9ja1R5cGUiLCJzcGxpdEJsb2NrIiwic3BsaXRCbG9ja0FzIiwic3BsaXRCbG9ja0tlZXBNYXJrcyIsInRvZ2dsZU1hcmsiLCJ3cmFwSW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3Byb3NlbWlycm9yX3RyYW5zZm9ybSIsInJlcXVpcmUiLCJpbXBvcnRfcHJvc2VtaXJyb3JfbW9kZWwiLCJpbXBvcnRfcHJvc2VtaXJyb3Jfc3RhdGUiLCJzdGF0ZSIsImRpc3BhdGNoIiwic2VsZWN0aW9uIiwiZW1wdHkiLCJ0ciIsInNjcm9sbEludG9WaWV3IiwiYXRCbG9ja1N0YXJ0IiwidmlldyIsIiRjdXJzb3IiLCJlbmRPZlRleHRibG9jayIsInBhcmVudE9mZnNldCIsIiRjdXQiLCJmaW5kQ3V0QmVmb3JlIiwicmFuZ2UiLCJibG9ja1JhbmdlIiwidGFyZ2V0IiwibGlmdFRhcmdldCIsImJlZm9yZSIsIm5vZGVCZWZvcmUiLCJkZWxldGVCYXJyaWVyIiwicGFyZW50IiwiY29udGVudCIsInNpemUiLCJ0ZXh0YmxvY2tBdCIsIk5vZGVTZWxlY3Rpb24iLCJpc1NlbGVjdGFibGUiLCJkZXB0aCIsImRlbFN0ZXAiLCJyZXBsYWNlU3RlcCIsImRvYyIsImFmdGVyIiwiU2xpY2UiLCJzbGljZSIsInRvIiwiZnJvbSIsInN0ZXAiLCJzZXRTZWxlY3Rpb24iLCJTZWxlY3Rpb24iLCJmaW5kRnJvbSIsInJlc29sdmUiLCJtYXBwaW5nIiwibWFwIiwicG9zIiwiY3JlYXRlIiwibm9kZVNpemUiLCJub2RlIiwiY2hpbGRDb3VudCIsImlzQXRvbSIsImRlbGV0ZSIsImpvaW5UZXh0YmxvY2tzQXJvdW5kIiwiYXRCbG9ja0VuZCIsImZpbmRDdXRBZnRlciIsImJlZm9yZVRleHQiLCJiZWZvcmVQb3MiLCJpc1RleHRibG9jayIsInR5cGUiLCJzcGVjIiwiaXNvbGF0aW5nIiwiY2hpbGQiLCJsYXN0Q2hpbGQiLCJub2RlQWZ0ZXIiLCJhZnRlclRleHQiLCJhZnRlclBvcyIsImZpcnN0Q2hpbGQiLCJSZXBsYWNlU3RlcCIsIlRleHRTZWxlY3Rpb24iLCJzaWRlIiwib25seSIsInNjYW4iLCIkaGVhZCIsIiRwb3MiLCJpIiwiaW5kZXgiLCJzZWwiLCJub2RlU2VsIiwicG9pbnQiLCJjYW5Kb2luIiwiam9pblBvaW50Iiwiam9pbiIsIiRmcm9tIiwiJHRvIiwiJGFuY2hvciIsImNvZGUiLCJzYW1lUGFyZW50IiwiaW5zZXJ0VGV4dCIsImRlZmF1bHRCbG9ja0F0IiwibWF0Y2giLCJlZGdlQ291bnQiLCJlZGdlIiwiaGFzUmVxdWlyZWRBdHRycyIsImFib3ZlIiwiaW5kZXhBZnRlciIsImNvbnRlbnRNYXRjaEF0IiwiY2FuUmVwbGFjZVdpdGgiLCJyZXBsYWNlV2l0aCIsImNyZWF0ZUFuZEZpbGwiLCJuZWFyIiwiQWxsU2VsZWN0aW9uIiwiaW5saW5lQ29udGVudCIsImluc2VydCIsImVuZCIsImNhblNwbGl0Iiwic3BsaXQiLCJzcGxpdE5vZGUiLCJpc0Jsb2NrIiwidHlwZXMiLCJzcGxpdERlcHRoIiwiZGVmbHQiLCJhdEVuZCIsImF0U3RhcnQiLCJkIiwic3RhcnQiLCJzcGxpdFR5cGUiLCJ1bnNoaWZ0Iiwic3BsaXRQb3MiLCJjYW4iLCJsZW5ndGgiLCJmaXJzdCIsIiRmaXJzdCIsInNldE5vZGVNYXJrdXAiLCJtYXJrcyIsInN0b3JlZE1hcmtzIiwiZW5zdXJlTWFya3MiLCJzYW1lIiwic2hhcmVkRGVwdGgiLCJqb2luTWF5YmVDbGVhciIsImNvbXBhdGlibGVDb250ZW50IiwiY2FuUmVwbGFjZSIsImRpciIsImNvbm4iLCJpc29sYXRlZCIsImNhbkRlbEFmdGVyIiwiZmluZFdyYXBwaW5nIiwibWF0Y2hUeXBlIiwidmFsaWRFbmQiLCJ3cmFwIiwiRnJhZ21lbnQiLCJjb3B5IiwiUmVwbGFjZUFyb3VuZFN0ZXAiLCIkam9pbkF0Iiwic2VsQWZ0ZXIiLCJhdCIsInB1c2giLCJhZnRlckRlcHRoIiwic2VsZWN0VGV4dGJsb2NrU2lkZSIsImlzSW5saW5lIiwibm9kZVR5cGUiLCJhdHRycyIsIndyYXBwaW5nIiwiYXBwbGljYWJsZSIsInJhbmdlcyIsIm5vZGVzQmV0d2VlbiIsImhhc01hcmt1cCIsIm1hcmtBcHBsaWVzIiwiZW50ZXJBdG9tcyIsImFsbG93c01hcmtUeXBlIiwicmVtb3ZlSW5saW5lQXRvbXMiLCJyZXN1bHQiLCJTZWxlY3Rpb25SYW5nZSIsIm1hcmtUeXBlIiwib3B0aW9ucyIsInJlbW92ZVdoZW5QcmVzZW50IiwiZW50ZXJJbmxpbmVBdG9tcyIsImRyb3BTcGFjZSIsImluY2x1ZGVXaGl0ZXNwYWNlIiwiaXNJblNldCIsInJlbW92ZVN0b3JlZE1hcmsiLCJhZGRTdG9yZWRNYXJrIiwiYWRkIiwic29tZSIsInIiLCJyYW5nZUhhc01hcmsiLCJldmVyeSIsIm1pc3NpbmciLCJpc1RleHQiLCJ0ZXN0IiwidGV4dEJldHdlZW4iLCJNYXRoIiwibWF4IiwibWluIiwicmVtb3ZlTWFyayIsInNwYWNlU3RhcnQiLCJleGVjIiwidGV4dCIsInNwYWNlRW5kIiwiYWRkTWFyayIsIndyYXBEaXNwYXRjaEZvckpvaW4iLCJpc0pvaW5hYmxlIiwiaXNHZW5lcmljIiwibWFwcyIsImoiLCJmb3JFYWNoIiwiX3MiLCJfZSIsImpvaW5hYmxlIiwibWF5YmVDaGlsZCIsImluZGV4T2YiLCJzb3J0IiwiYSIsImIiLCJjb21tYW5kIiwiY2FuSm9pbjIiLCJBcnJheSIsImlzQXJyYXkiLCJuYW1lIiwiY29tbWFuZHMiLCJiYWNrc3BhY2UiLCJkZWwiLCJrZXkiLCJtYWMiLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsIm9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQ0FBQTtBQUFBQyxRQUFBLENBQUFELGtDQUFBO0VBQUFFLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLGNBQUEs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QUN2QixpQkFBaUJBLFlBQUEsQ0FBYTtFQUM5QixVQUFVQSxZQUFBLENBQWE7RUFDdkIsc0JBQXNCQSxZQUFBLENBQWE7RUFDbkMsY0FBY0EsWUFBQSxDQUFhO0VBQzNCLFNBQVNBLFlBQUEsQ0FBYTtFQUN0QixVQUFVTSxvQkFBQTtFQUNWLFVBQVVEO0FBQ2Q7QUFDQSxTQUFTK04sR0FBQSxJQUFPcE8sWUFBQSxFQUNaRixhQUFBLENBQWNzTyxHQUFBLElBQU9wTyxZQUFBLENBQWFvTyxHQUFBO0FBQ3RDLElBQU1DLEdBQUEsR0FBTSxPQUFPQyxTQUFBLElBQWEsY0FBYyxxQkFBcUJuQyxJQUFBLENBQUttQyxTQUFBLENBQVVDLFFBQVEsSUFFcEYsT0FBT0MsRUFBQSxJQUFNLGVBQWVBLEVBQUEsQ0FBR0QsUUFBQSxHQUFXQyxFQUFBLENBQUdELFFBQUEsQ0FBUyxLQUFLLFdBQVc7QUFNNUUsSUFBTXRQLFVBQUEsR0FBYW9QLEdBQUEsR0FBTXZPLGFBQUEsR0FBZ0JFLFlBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL3J2ZC9vdXQifQ==