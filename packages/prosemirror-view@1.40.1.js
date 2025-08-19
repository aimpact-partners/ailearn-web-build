System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["prosemirror-view","1.40.1"]]);
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

// .beyond/uimport/prosemirror-view.1.40.1.js
var prosemirror_view_1_40_1_exports = {};
__export(prosemirror_view_1_40_1_exports, {
  Decoration: () => Decoration,
  DecorationSet: () => DecorationSet,
  EditorView: () => EditorView,
  __endComposition: () => __endComposition,
  __parseFromClipboard: () => __parseFromClipboard
});
module.exports = __toCommonJS(prosemirror_view_1_40_1_exports);

// node_modules/prosemirror-view/dist/index.js
var import_prosemirror_state = require("prosemirror-state@1.4.3");
var import_prosemirror_model = require("prosemirror-model@1.25.3");
var import_prosemirror_transform = require("prosemirror-transform@1.10.4");
var domIndex = function (node) {
  for (var index = 0;; index++) {
    node = node.previousSibling;
    if (!node) return index;
  }
};
var parentNode = function (node) {
  let parent = node.assignedSlot || node.parentNode;
  return parent && parent.nodeType == 11 ? parent.host : parent;
};
var reusedRange = null;
var textRange = function (node, from, to) {
  let range = reusedRange || (reusedRange = document.createRange());
  range.setEnd(node, to == null ? node.nodeValue.length : to);
  range.setStart(node, from || 0);
  return range;
};
var clearReusedRange = function () {
  reusedRange = null;
};
var isEquivalentPosition = function (node, off, targetNode, targetOff) {
  return targetNode && (scanFor(node, off, targetNode, targetOff, -1) || scanFor(node, off, targetNode, targetOff, 1));
};
var atomElements = /^(img|br|input|textarea|hr)$/i;
function scanFor(node, off, targetNode, targetOff, dir) {
  var _a;
  for (;;) {
    if (node == targetNode && off == targetOff) return true;
    if (off == (dir < 0 ? 0 : nodeSize(node))) {
      let parent = node.parentNode;
      if (!parent || parent.nodeType != 1 || hasBlockDesc(node) || atomElements.test(node.nodeName) || node.contentEditable == "false") return false;
      off = domIndex(node) + (dir < 0 ? 0 : 1);
      node = parent;
    } else if (node.nodeType == 1) {
      let child = node.childNodes[off + (dir < 0 ? -1 : 0)];
      if (child.nodeType == 1 && child.contentEditable == "false") {
        if ((_a = child.pmViewDesc) === null || _a === void 0 ? void 0 : _a.ignoreForSelection) off += dir;else return false;
      } else {
        node = child;
        off = dir < 0 ? nodeSize(node) : 0;
      }
    } else {
      return false;
    }
  }
}
function nodeSize(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
function textNodeBefore$1(node, offset) {
  for (;;) {
    if (node.nodeType == 3 && offset) return node;
    if (node.nodeType == 1 && offset > 0) {
      if (node.contentEditable == "false") return null;
      node = node.childNodes[offset - 1];
      offset = nodeSize(node);
    } else if (node.parentNode && !hasBlockDesc(node)) {
      offset = domIndex(node);
      node = node.parentNode;
    } else {
      return null;
    }
  }
}
function textNodeAfter$1(node, offset) {
  for (;;) {
    if (node.nodeType == 3 && offset < node.nodeValue.length) return node;
    if (node.nodeType == 1 && offset < node.childNodes.length) {
      if (node.contentEditable == "false") return null;
      node = node.childNodes[offset];
      offset = 0;
    } else if (node.parentNode && !hasBlockDesc(node)) {
      offset = domIndex(node) + 1;
      node = node.parentNode;
    } else {
      return null;
    }
  }
}
function isOnEdge(node, offset, parent) {
  for (let atStart = offset == 0, atEnd = offset == nodeSize(node); atStart || atEnd;) {
    if (node == parent) return true;
    let index = domIndex(node);
    node = node.parentNode;
    if (!node) return false;
    atStart = atStart && index == 0;
    atEnd = atEnd && index == nodeSize(node);
  }
}
function hasBlockDesc(dom) {
  let desc;
  for (let cur = dom; cur; cur = cur.parentNode) if (desc = cur.pmViewDesc) break;
  return desc && desc.node && desc.node.isBlock && (desc.dom == dom || desc.contentDOM == dom);
}
var selectionCollapsed = function (domSel) {
  return domSel.focusNode && isEquivalentPosition(domSel.focusNode, domSel.focusOffset, domSel.anchorNode, domSel.anchorOffset);
};
function keyEvent(keyCode, key) {
  let event = document.createEvent("Event");
  event.initEvent("keydown", true, true);
  event.keyCode = keyCode;
  event.key = event.code = key;
  return event;
}
function deepActiveElement(doc2) {
  let elt = doc2.activeElement;
  while (elt && elt.shadowRoot) elt = elt.shadowRoot.activeElement;
  return elt;
}
function caretFromPoint(doc2, x, y) {
  if (doc2.caretPositionFromPoint) {
    try {
      let pos = doc2.caretPositionFromPoint(x, y);
      if (pos) return {
        node: pos.offsetNode,
        offset: Math.min(nodeSize(pos.offsetNode), pos.offset)
      };
    } catch (_) {}
  }
  if (doc2.caretRangeFromPoint) {
    let range = doc2.caretRangeFromPoint(x, y);
    if (range) return {
      node: range.startContainer,
      offset: Math.min(nodeSize(range.startContainer), range.startOffset)
    };
  }
}
var nav = typeof navigator != "undefined" ? navigator : null;
var doc = typeof document != "undefined" ? document : null;
var agent = nav && nav.userAgent || "";
var ie_edge = /Edge\/(\d+)/.exec(agent);
var ie_upto10 = /MSIE \d/.exec(agent);
var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(agent);
var ie = !!(ie_upto10 || ie_11up || ie_edge);
var ie_version = ie_upto10 ? document.documentMode : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0;
var gecko = !ie && /gecko\/(\d+)/i.test(agent);
gecko && +(/Firefox\/(\d+)/.exec(agent) || [0, 0])[1];
var _chrome = !ie && /Chrome\/(\d+)/.exec(agent);
var chrome = !!_chrome;
var chrome_version = _chrome ? +_chrome[1] : 0;
var safari = !ie && !!nav && /Apple Computer/.test(nav.vendor);
var ios = safari && (/Mobile\/\w+/.test(agent) || !!nav && nav.maxTouchPoints > 2);
var mac = ios || (nav ? /Mac/.test(nav.platform) : false);
var windows = nav ? /Win/.test(nav.platform) : false;
var android = /Android \d/.test(agent);
var webkit = !!doc && "webkitFontSmoothing" in doc.documentElement.style;
var webkit_version = webkit ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function windowRect(doc2) {
  let vp = doc2.defaultView && doc2.defaultView.visualViewport;
  if (vp) return {
    left: 0,
    right: vp.width,
    top: 0,
    bottom: vp.height
  };
  return {
    left: 0,
    right: doc2.documentElement.clientWidth,
    top: 0,
    bottom: doc2.documentElement.clientHeight
  };
}
function getSide(value, side) {
  return typeof value == "number" ? value : value[side];
}
function clientRect(node) {
  let rect = node.getBoundingClientRect();
  let scaleX = rect.width / node.offsetWidth || 1;
  let scaleY = rect.height / node.offsetHeight || 1;
  return {
    left: rect.left,
    right: rect.left + node.clientWidth * scaleX,
    top: rect.top,
    bottom: rect.top + node.clientHeight * scaleY
  };
}
function scrollRectIntoView(view, rect, startDOM) {
  let scrollThreshold = view.someProp("scrollThreshold") || 0,
    scrollMargin = view.someProp("scrollMargin") || 5;
  let doc2 = view.dom.ownerDocument;
  for (let parent = startDOM || view.dom;;) {
    if (!parent) break;
    if (parent.nodeType != 1) {
      parent = parentNode(parent);
      continue;
    }
    let elt = parent;
    let atTop = elt == doc2.body;
    let bounding = atTop ? windowRect(doc2) : clientRect(elt);
    let moveX = 0,
      moveY = 0;
    if (rect.top < bounding.top + getSide(scrollThreshold, "top")) moveY = -(bounding.top - rect.top + getSide(scrollMargin, "top"));else if (rect.bottom > bounding.bottom - getSide(scrollThreshold, "bottom")) moveY = rect.bottom - rect.top > bounding.bottom - bounding.top ? rect.top + getSide(scrollMargin, "top") - bounding.top : rect.bottom - bounding.bottom + getSide(scrollMargin, "bottom");
    if (rect.left < bounding.left + getSide(scrollThreshold, "left")) moveX = -(bounding.left - rect.left + getSide(scrollMargin, "left"));else if (rect.right > bounding.right - getSide(scrollThreshold, "right")) moveX = rect.right - bounding.right + getSide(scrollMargin, "right");
    if (moveX || moveY) {
      if (atTop) {
        doc2.defaultView.scrollBy(moveX, moveY);
      } else {
        let startX = elt.scrollLeft,
          startY = elt.scrollTop;
        if (moveY) elt.scrollTop += moveY;
        if (moveX) elt.scrollLeft += moveX;
        let dX = elt.scrollLeft - startX,
          dY = elt.scrollTop - startY;
        rect = {
          left: rect.left - dX,
          top: rect.top - dY,
          right: rect.right - dX,
          bottom: rect.bottom - dY
        };
      }
    }
    let pos = atTop ? "fixed" : getComputedStyle(parent).position;
    if (/^(fixed|sticky)$/.test(pos)) break;
    parent = pos == "absolute" ? parent.offsetParent : parentNode(parent);
  }
}
function storeScrollPos(view) {
  let rect = view.dom.getBoundingClientRect(),
    startY = Math.max(0, rect.top);
  let refDOM, refTop;
  for (let x = (rect.left + rect.right) / 2, y = startY + 1; y < Math.min(innerHeight, rect.bottom); y += 5) {
    let dom = view.root.elementFromPoint(x, y);
    if (!dom || dom == view.dom || !view.dom.contains(dom)) continue;
    let localRect = dom.getBoundingClientRect();
    if (localRect.top >= startY - 20) {
      refDOM = dom;
      refTop = localRect.top;
      break;
    }
  }
  return {
    refDOM,
    refTop,
    stack: scrollStack(view.dom)
  };
}
function scrollStack(dom) {
  let stack = [],
    doc2 = dom.ownerDocument;
  for (let cur = dom; cur; cur = parentNode(cur)) {
    stack.push({
      dom: cur,
      top: cur.scrollTop,
      left: cur.scrollLeft
    });
    if (dom == doc2) break;
  }
  return stack;
}
function resetScrollPos({
  refDOM,
  refTop,
  stack
}) {
  let newRefTop = refDOM ? refDOM.getBoundingClientRect().top : 0;
  restoreScrollStack(stack, newRefTop == 0 ? 0 : newRefTop - refTop);
}
function restoreScrollStack(stack, dTop) {
  for (let i = 0; i < stack.length; i++) {
    let {
      dom,
      top,
      left
    } = stack[i];
    if (dom.scrollTop != top + dTop) dom.scrollTop = top + dTop;
    if (dom.scrollLeft != left) dom.scrollLeft = left;
  }
}
var preventScrollSupported = null;
function focusPreventScroll(dom) {
  if (dom.setActive) return dom.setActive();
  if (preventScrollSupported) return dom.focus(preventScrollSupported);
  let stored = scrollStack(dom);
  dom.focus(preventScrollSupported == null ? {
    get preventScroll() {
      preventScrollSupported = {
        preventScroll: true
      };
      return true;
    }
  } : void 0);
  if (!preventScrollSupported) {
    preventScrollSupported = false;
    restoreScrollStack(stored, 0);
  }
}
function findOffsetInNode(node, coords) {
  let closest,
    dxClosest = 2e8,
    coordsClosest,
    offset = 0;
  let rowBot = coords.top,
    rowTop = coords.top;
  let firstBelow, coordsBelow;
  for (let child = node.firstChild, childIndex = 0; child; child = child.nextSibling, childIndex++) {
    let rects;
    if (child.nodeType == 1) rects = child.getClientRects();else if (child.nodeType == 3) rects = textRange(child).getClientRects();else continue;
    for (let i = 0; i < rects.length; i++) {
      let rect = rects[i];
      if (rect.top <= rowBot && rect.bottom >= rowTop) {
        rowBot = Math.max(rect.bottom, rowBot);
        rowTop = Math.min(rect.top, rowTop);
        let dx = rect.left > coords.left ? rect.left - coords.left : rect.right < coords.left ? coords.left - rect.right : 0;
        if (dx < dxClosest) {
          closest = child;
          dxClosest = dx;
          coordsClosest = dx && closest.nodeType == 3 ? {
            left: rect.right < coords.left ? rect.right : rect.left,
            top: coords.top
          } : coords;
          if (child.nodeType == 1 && dx) offset = childIndex + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0);
          continue;
        }
      } else if (rect.top > coords.top && !firstBelow && rect.left <= coords.left && rect.right >= coords.left) {
        firstBelow = child;
        coordsBelow = {
          left: Math.max(rect.left, Math.min(rect.right, coords.left)),
          top: rect.top
        };
      }
      if (!closest && (coords.left >= rect.right && coords.top >= rect.top || coords.left >= rect.left && coords.top >= rect.bottom)) offset = childIndex + 1;
    }
  }
  if (!closest && firstBelow) {
    closest = firstBelow;
    coordsClosest = coordsBelow;
    dxClosest = 0;
  }
  if (closest && closest.nodeType == 3) return findOffsetInText(closest, coordsClosest);
  if (!closest || dxClosest && closest.nodeType == 1) return {
    node,
    offset
  };
  return findOffsetInNode(closest, coordsClosest);
}
function findOffsetInText(node, coords) {
  let len = node.nodeValue.length;
  let range = document.createRange();
  for (let i = 0; i < len; i++) {
    range.setEnd(node, i + 1);
    range.setStart(node, i);
    let rect = singleRect(range, 1);
    if (rect.top == rect.bottom) continue;
    if (inRect(coords, rect)) return {
      node,
      offset: i + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0)
    };
  }
  return {
    node,
    offset: 0
  };
}
function inRect(coords, rect) {
  return coords.left >= rect.left - 1 && coords.left <= rect.right + 1 && coords.top >= rect.top - 1 && coords.top <= rect.bottom + 1;
}
function targetKludge(dom, coords) {
  let parent = dom.parentNode;
  if (parent && /^li$/i.test(parent.nodeName) && coords.left < dom.getBoundingClientRect().left) return parent;
  return dom;
}
function posFromElement(view, elt, coords) {
  let {
      node,
      offset
    } = findOffsetInNode(elt, coords),
    bias = -1;
  if (node.nodeType == 1 && !node.firstChild) {
    let rect = node.getBoundingClientRect();
    bias = rect.left != rect.right && coords.left > (rect.left + rect.right) / 2 ? 1 : -1;
  }
  return view.docView.posFromDOM(node, offset, bias);
}
function posFromCaret(view, node, offset, coords) {
  let outsideBlock = -1;
  for (let cur = node, sawBlock = false;;) {
    if (cur == view.dom) break;
    let desc = view.docView.nearestDesc(cur, true),
      rect;
    if (!desc) return null;
    if (desc.dom.nodeType == 1 && (desc.node.isBlock && desc.parent || !desc.contentDOM) && ((rect = desc.dom.getBoundingClientRect()).width || rect.height)) {
      if (desc.node.isBlock && desc.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(desc.dom.nodeName)) {
        if (!sawBlock && rect.left > coords.left || rect.top > coords.top) outsideBlock = desc.posBefore;else if (!sawBlock && rect.right < coords.left || rect.bottom < coords.top) outsideBlock = desc.posAfter;
        sawBlock = true;
      }
      if (!desc.contentDOM && outsideBlock < 0 && !desc.node.isText) {
        let before = desc.node.isBlock ? coords.top < (rect.top + rect.bottom) / 2 : coords.left < (rect.left + rect.right) / 2;
        return before ? desc.posBefore : desc.posAfter;
      }
    }
    cur = desc.dom.parentNode;
  }
  return outsideBlock > -1 ? outsideBlock : view.docView.posFromDOM(node, offset, -1);
}
function elementFromPoint(element, coords, box) {
  let len = element.childNodes.length;
  if (len && box.top < box.bottom) {
    for (let startI = Math.max(0, Math.min(len - 1, Math.floor(len * (coords.top - box.top) / (box.bottom - box.top)) - 2)), i = startI;;) {
      let child = element.childNodes[i];
      if (child.nodeType == 1) {
        let rects = child.getClientRects();
        for (let j = 0; j < rects.length; j++) {
          let rect = rects[j];
          if (inRect(coords, rect)) return elementFromPoint(child, coords, rect);
        }
      }
      if ((i = (i + 1) % len) == startI) break;
    }
  }
  return element;
}
function posAtCoords(view, coords) {
  let doc2 = view.dom.ownerDocument,
    node,
    offset = 0;
  let caret = caretFromPoint(doc2, coords.left, coords.top);
  if (caret) ({
    node,
    offset
  } = caret);
  let elt = (view.root.elementFromPoint ? view.root : doc2).elementFromPoint(coords.left, coords.top);
  let pos;
  if (!elt || !view.dom.contains(elt.nodeType != 1 ? elt.parentNode : elt)) {
    let box = view.dom.getBoundingClientRect();
    if (!inRect(coords, box)) return null;
    elt = elementFromPoint(view.dom, coords, box);
    if (!elt) return null;
  }
  if (safari) {
    for (let p = elt; node && p; p = parentNode(p)) if (p.draggable) node = void 0;
  }
  elt = targetKludge(elt, coords);
  if (node) {
    if (gecko && node.nodeType == 1) {
      offset = Math.min(offset, node.childNodes.length);
      if (offset < node.childNodes.length) {
        let next = node.childNodes[offset],
          box;
        if (next.nodeName == "IMG" && (box = next.getBoundingClientRect()).right <= coords.left && box.bottom > coords.top) offset++;
      }
    }
    let prev;
    if (webkit && offset && node.nodeType == 1 && (prev = node.childNodes[offset - 1]).nodeType == 1 && prev.contentEditable == "false" && prev.getBoundingClientRect().top >= coords.top) offset--;
    if (node == view.dom && offset == node.childNodes.length - 1 && node.lastChild.nodeType == 1 && coords.top > node.lastChild.getBoundingClientRect().bottom) pos = view.state.doc.content.size;else if (offset == 0 || node.nodeType != 1 || node.childNodes[offset - 1].nodeName != "BR") pos = posFromCaret(view, node, offset, coords);
  }
  if (pos == null) pos = posFromElement(view, elt, coords);
  let desc = view.docView.nearestDesc(elt, true);
  return {
    pos,
    inside: desc ? desc.posAtStart - desc.border : -1
  };
}
function nonZero(rect) {
  return rect.top < rect.bottom || rect.left < rect.right;
}
function singleRect(target, bias) {
  let rects = target.getClientRects();
  if (rects.length) {
    let first = rects[bias < 0 ? 0 : rects.length - 1];
    if (nonZero(first)) return first;
  }
  return Array.prototype.find.call(rects, nonZero) || target.getBoundingClientRect();
}
var BIDI = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function coordsAtPos(view, pos, side) {
  let {
    node,
    offset,
    atom
  } = view.docView.domFromPos(pos, side < 0 ? -1 : 1);
  let supportEmptyRange = webkit || gecko;
  if (node.nodeType == 3) {
    if (supportEmptyRange && (BIDI.test(node.nodeValue) || (side < 0 ? !offset : offset == node.nodeValue.length))) {
      let rect = singleRect(textRange(node, offset, offset), side);
      if (gecko && offset && /\s/.test(node.nodeValue[offset - 1]) && offset < node.nodeValue.length) {
        let rectBefore = singleRect(textRange(node, offset - 1, offset - 1), -1);
        if (rectBefore.top == rect.top) {
          let rectAfter = singleRect(textRange(node, offset, offset + 1), -1);
          if (rectAfter.top != rect.top) return flattenV(rectAfter, rectAfter.left < rectBefore.left);
        }
      }
      return rect;
    } else {
      let from = offset,
        to = offset,
        takeSide = side < 0 ? 1 : -1;
      if (side < 0 && !offset) {
        to++;
        takeSide = -1;
      } else if (side >= 0 && offset == node.nodeValue.length) {
        from--;
        takeSide = 1;
      } else if (side < 0) {
        from--;
      } else {
        to++;
      }
      return flattenV(singleRect(textRange(node, from, to), takeSide), takeSide < 0);
    }
  }
  let $dom = view.state.doc.resolve(pos - (atom || 0));
  if (!$dom.parent.inlineContent) {
    if (atom == null && offset && (side < 0 || offset == nodeSize(node))) {
      let before = node.childNodes[offset - 1];
      if (before.nodeType == 1) return flattenH(before.getBoundingClientRect(), false);
    }
    if (atom == null && offset < nodeSize(node)) {
      let after = node.childNodes[offset];
      if (after.nodeType == 1) return flattenH(after.getBoundingClientRect(), true);
    }
    return flattenH(node.getBoundingClientRect(), side >= 0);
  }
  if (atom == null && offset && (side < 0 || offset == nodeSize(node))) {
    let before = node.childNodes[offset - 1];
    let target = before.nodeType == 3 ? textRange(before, nodeSize(before) - (supportEmptyRange ? 0 : 1)) : before.nodeType == 1 && (before.nodeName != "BR" || !before.nextSibling) ? before : null;
    if (target) return flattenV(singleRect(target, 1), false);
  }
  if (atom == null && offset < nodeSize(node)) {
    let after = node.childNodes[offset];
    while (after.pmViewDesc && after.pmViewDesc.ignoreForCoords) after = after.nextSibling;
    let target = !after ? null : after.nodeType == 3 ? textRange(after, 0, supportEmptyRange ? 0 : 1) : after.nodeType == 1 ? after : null;
    if (target) return flattenV(singleRect(target, -1), true);
  }
  return flattenV(singleRect(node.nodeType == 3 ? textRange(node) : node, -side), side >= 0);
}
function flattenV(rect, left) {
  if (rect.width == 0) return rect;
  let x = left ? rect.left : rect.right;
  return {
    top: rect.top,
    bottom: rect.bottom,
    left: x,
    right: x
  };
}
function flattenH(rect, top) {
  if (rect.height == 0) return rect;
  let y = top ? rect.top : rect.bottom;
  return {
    top: y,
    bottom: y,
    left: rect.left,
    right: rect.right
  };
}
function withFlushedState(view, state, f) {
  let viewState = view.state,
    active = view.root.activeElement;
  if (viewState != state) view.updateState(state);
  if (active != view.dom) view.focus();
  try {
    return f();
  } finally {
    if (viewState != state) view.updateState(viewState);
    if (active != view.dom && active) active.focus();
  }
}
function endOfTextblockVertical(view, state, dir) {
  let sel = state.selection;
  let $pos = dir == "up" ? sel.$from : sel.$to;
  return withFlushedState(view, state, () => {
    let {
      node: dom
    } = view.docView.domFromPos($pos.pos, dir == "up" ? -1 : 1);
    for (;;) {
      let nearest = view.docView.nearestDesc(dom, true);
      if (!nearest) break;
      if (nearest.node.isBlock) {
        dom = nearest.contentDOM || nearest.dom;
        break;
      }
      dom = nearest.dom.parentNode;
    }
    let coords = coordsAtPos(view, $pos.pos, 1);
    for (let child = dom.firstChild; child; child = child.nextSibling) {
      let boxes;
      if (child.nodeType == 1) boxes = child.getClientRects();else if (child.nodeType == 3) boxes = textRange(child, 0, child.nodeValue.length).getClientRects();else continue;
      for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        if (box.bottom > box.top + 1 && (dir == "up" ? coords.top - box.top > (box.bottom - coords.top) * 2 : box.bottom - coords.bottom > (coords.bottom - box.top) * 2)) return false;
      }
    }
    return true;
  });
}
var maybeRTL = /[\u0590-\u08ac]/;
function endOfTextblockHorizontal(view, state, dir) {
  let {
    $head
  } = state.selection;
  if (!$head.parent.isTextblock) return false;
  let offset = $head.parentOffset,
    atStart = !offset,
    atEnd = offset == $head.parent.content.size;
  let sel = view.domSelection();
  if (!sel) return $head.pos == $head.start() || $head.pos == $head.end();
  if (!maybeRTL.test($head.parent.textContent) || !sel.modify) return dir == "left" || dir == "backward" ? atStart : atEnd;
  return withFlushedState(view, state, () => {
    let {
      focusNode: oldNode,
      focusOffset: oldOff,
      anchorNode,
      anchorOffset
    } = view.domSelectionRange();
    let oldBidiLevel = sel.caretBidiLevel;
    sel.modify("move", dir, "character");
    let parentDOM = $head.depth ? view.docView.domAfterPos($head.before()) : view.dom;
    let {
      focusNode: newNode,
      focusOffset: newOff
    } = view.domSelectionRange();
    let result = newNode && !parentDOM.contains(newNode.nodeType == 1 ? newNode : newNode.parentNode) || oldNode == newNode && oldOff == newOff;
    try {
      sel.collapse(anchorNode, anchorOffset);
      if (oldNode && (oldNode != anchorNode || oldOff != anchorOffset) && sel.extend) sel.extend(oldNode, oldOff);
    } catch (_) {}
    if (oldBidiLevel != null) sel.caretBidiLevel = oldBidiLevel;
    return result;
  });
}
var cachedState = null;
var cachedDir = null;
var cachedResult = false;
function endOfTextblock(view, state, dir) {
  if (cachedState == state && cachedDir == dir) return cachedResult;
  cachedState = state;
  cachedDir = dir;
  return cachedResult = dir == "up" || dir == "down" ? endOfTextblockVertical(view, state, dir) : endOfTextblockHorizontal(view, state, dir);
}
var NOT_DIRTY = 0,
  CHILD_DIRTY = 1,
  CONTENT_DIRTY = 2,
  NODE_DIRTY = 3;
var ViewDesc = class {
  constructor(parent, children, dom, contentDOM) {
    this.parent = parent;
    this.children = children;
    this.dom = dom;
    this.contentDOM = contentDOM;
    this.dirty = NOT_DIRTY;
    dom.pmViewDesc = this;
  }
  matchesWidget(widget) {
    return false;
  }
  matchesMark(mark) {
    return false;
  }
  matchesNode(node, outerDeco, innerDeco) {
    return false;
  }
  matchesHack(nodeName) {
    return false;
  }
  parseRule() {
    return null;
  }
  stopEvent(event) {
    return false;
  }
  get size() {
    let size = 0;
    for (let i = 0; i < this.children.length; i++) size += this.children[i].size;
    return size;
  }
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0;
    if (this.dom.pmViewDesc == this) this.dom.pmViewDesc = void 0;
    for (let i = 0; i < this.children.length; i++) this.children[i].destroy();
  }
  posBeforeChild(child) {
    for (let i = 0, pos = this.posAtStart;; i++) {
      let cur = this.children[i];
      if (cur == child) return pos;
      pos += cur.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(dom, offset, bias) {
    if (this.contentDOM && this.contentDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode)) {
      if (bias < 0) {
        let domBefore, desc;
        if (dom == this.contentDOM) {
          domBefore = dom.childNodes[offset - 1];
        } else {
          while (dom.parentNode != this.contentDOM) dom = dom.parentNode;
          domBefore = dom.previousSibling;
        }
        while (domBefore && !((desc = domBefore.pmViewDesc) && desc.parent == this)) domBefore = domBefore.previousSibling;
        return domBefore ? this.posBeforeChild(desc) + desc.size : this.posAtStart;
      } else {
        let domAfter, desc;
        if (dom == this.contentDOM) {
          domAfter = dom.childNodes[offset];
        } else {
          while (dom.parentNode != this.contentDOM) dom = dom.parentNode;
          domAfter = dom.nextSibling;
        }
        while (domAfter && !((desc = domAfter.pmViewDesc) && desc.parent == this)) domAfter = domAfter.nextSibling;
        return domAfter ? this.posBeforeChild(desc) : this.posAtEnd;
      }
    }
    let atEnd;
    if (dom == this.dom && this.contentDOM) {
      atEnd = offset > domIndex(this.contentDOM);
    } else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) {
      atEnd = dom.compareDocumentPosition(this.contentDOM) & 2;
    } else if (this.dom.firstChild) {
      if (offset == 0) for (let search = dom;; search = search.parentNode) {
        if (search == this.dom) {
          atEnd = false;
          break;
        }
        if (search.previousSibling) break;
      }
      if (atEnd == null && offset == dom.childNodes.length) for (let search = dom;; search = search.parentNode) {
        if (search == this.dom) {
          atEnd = true;
          break;
        }
        if (search.nextSibling) break;
      }
    }
    return (atEnd == null ? bias > 0 : atEnd) ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(dom, onlyNodes = false) {
    for (let first = true, cur = dom; cur; cur = cur.parentNode) {
      let desc = this.getDesc(cur),
        nodeDOM;
      if (desc && (!onlyNodes || desc.node)) {
        if (first && (nodeDOM = desc.nodeDOM) && !(nodeDOM.nodeType == 1 ? nodeDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode) : nodeDOM == dom)) first = false;else return desc;
      }
    }
  }
  getDesc(dom) {
    let desc = dom.pmViewDesc;
    for (let cur = desc; cur; cur = cur.parent) if (cur == this) return desc;
  }
  posFromDOM(dom, offset, bias) {
    for (let scan = dom; scan; scan = scan.parentNode) {
      let desc = this.getDesc(scan);
      if (desc) return desc.localPosFromDOM(dom, offset, bias);
    }
    return -1;
  }
  descAt(pos) {
    for (let i = 0, offset = 0; i < this.children.length; i++) {
      let child = this.children[i],
        end = offset + child.size;
      if (offset == pos && end != offset) {
        while (!child.border && child.children.length) {
          for (let i2 = 0; i2 < child.children.length; i2++) {
            let inner = child.children[i2];
            if (inner.size) {
              child = inner;
              break;
            }
          }
        }
        return child;
      }
      if (pos < end) return child.descAt(pos - offset - child.border);
      offset = end;
    }
  }
  domFromPos(pos, side) {
    if (!this.contentDOM) return {
      node: this.dom,
      offset: 0,
      atom: pos + 1
    };
    let i = 0,
      offset = 0;
    for (let curPos = 0; i < this.children.length; i++) {
      let child = this.children[i],
        end = curPos + child.size;
      if (end > pos || child instanceof TrailingHackViewDesc) {
        offset = pos - curPos;
        break;
      }
      curPos = end;
    }
    if (offset) return this.children[i].domFromPos(offset - this.children[i].border, side);
    for (let prev; i && !(prev = this.children[i - 1]).size && prev instanceof WidgetViewDesc && prev.side >= 0; i--) {}
    if (side <= 0) {
      let prev,
        enter = true;
      for (;; i--, enter = false) {
        prev = i ? this.children[i - 1] : null;
        if (!prev || prev.dom.parentNode == this.contentDOM) break;
      }
      if (prev && side && enter && !prev.border && !prev.domAtom) return prev.domFromPos(prev.size, side);
      return {
        node: this.contentDOM,
        offset: prev ? domIndex(prev.dom) + 1 : 0
      };
    } else {
      let next,
        enter = true;
      for (;; i++, enter = false) {
        next = i < this.children.length ? this.children[i] : null;
        if (!next || next.dom.parentNode == this.contentDOM) break;
      }
      if (next && enter && !next.border && !next.domAtom) return next.domFromPos(0, side);
      return {
        node: this.contentDOM,
        offset: next ? domIndex(next.dom) : this.contentDOM.childNodes.length
      };
    }
  }
  parseRange(from, to, base = 0) {
    if (this.children.length == 0) return {
      node: this.contentDOM,
      from,
      to,
      fromOffset: 0,
      toOffset: this.contentDOM.childNodes.length
    };
    let fromOffset = -1,
      toOffset = -1;
    for (let offset = base, i = 0;; i++) {
      let child = this.children[i],
        end = offset + child.size;
      if (fromOffset == -1 && from <= end) {
        let childBase = offset + child.border;
        if (from >= childBase && to <= end - child.border && child.node && child.contentDOM && this.contentDOM.contains(child.contentDOM)) return child.parseRange(from, to, childBase);
        from = offset;
        for (let j = i; j > 0; j--) {
          let prev = this.children[j - 1];
          if (prev.size && prev.dom.parentNode == this.contentDOM && !prev.emptyChildAt(1)) {
            fromOffset = domIndex(prev.dom) + 1;
            break;
          }
          from -= prev.size;
        }
        if (fromOffset == -1) fromOffset = 0;
      }
      if (fromOffset > -1 && (end > to || i == this.children.length - 1)) {
        to = end;
        for (let j = i + 1; j < this.children.length; j++) {
          let next = this.children[j];
          if (next.size && next.dom.parentNode == this.contentDOM && !next.emptyChildAt(-1)) {
            toOffset = domIndex(next.dom);
            break;
          }
          to += next.size;
        }
        if (toOffset == -1) toOffset = this.contentDOM.childNodes.length;
        break;
      }
      offset = end;
    }
    return {
      node: this.contentDOM,
      from,
      to,
      fromOffset,
      toOffset
    };
  }
  emptyChildAt(side) {
    if (this.border || !this.contentDOM || !this.children.length) return false;
    let child = this.children[side < 0 ? 0 : this.children.length - 1];
    return child.size == 0 || child.emptyChildAt(side);
  }
  domAfterPos(pos) {
    let {
      node,
      offset
    } = this.domFromPos(pos, 0);
    if (node.nodeType != 1 || offset == node.childNodes.length) throw new RangeError("No node after pos " + pos);
    return node.childNodes[offset];
  }
  setSelection(anchor, head, view, force = false) {
    let from = Math.min(anchor, head),
      to = Math.max(anchor, head);
    for (let i = 0, offset = 0; i < this.children.length; i++) {
      let child = this.children[i],
        end = offset + child.size;
      if (from > offset && to < end) return child.setSelection(anchor - offset - child.border, head - offset - child.border, view, force);
      offset = end;
    }
    let anchorDOM = this.domFromPos(anchor, anchor ? -1 : 1);
    let headDOM = head == anchor ? anchorDOM : this.domFromPos(head, head ? -1 : 1);
    let domSel = view.root.getSelection();
    let selRange = view.domSelectionRange();
    let brKludge = false;
    if ((gecko || safari) && anchor == head) {
      let {
        node,
        offset
      } = anchorDOM;
      if (node.nodeType == 3) {
        brKludge = !!(offset && node.nodeValue[offset - 1] == "\n");
        if (brKludge && offset == node.nodeValue.length) {
          for (let scan = node, after; scan; scan = scan.parentNode) {
            if (after = scan.nextSibling) {
              if (after.nodeName == "BR") anchorDOM = headDOM = {
                node: after.parentNode,
                offset: domIndex(after) + 1
              };
              break;
            }
            let desc = scan.pmViewDesc;
            if (desc && desc.node && desc.node.isBlock) break;
          }
        }
      } else {
        let prev = node.childNodes[offset - 1];
        brKludge = prev && (prev.nodeName == "BR" || prev.contentEditable == "false");
      }
    }
    if (gecko && selRange.focusNode && selRange.focusNode != headDOM.node && selRange.focusNode.nodeType == 1) {
      let after = selRange.focusNode.childNodes[selRange.focusOffset];
      if (after && after.contentEditable == "false") force = true;
    }
    if (!(force || brKludge && safari) && isEquivalentPosition(anchorDOM.node, anchorDOM.offset, selRange.anchorNode, selRange.anchorOffset) && isEquivalentPosition(headDOM.node, headDOM.offset, selRange.focusNode, selRange.focusOffset)) return;
    let domSelExtended = false;
    if ((domSel.extend || anchor == head) && !brKludge) {
      domSel.collapse(anchorDOM.node, anchorDOM.offset);
      try {
        if (anchor != head) domSel.extend(headDOM.node, headDOM.offset);
        domSelExtended = true;
      } catch (_) {}
    }
    if (!domSelExtended) {
      if (anchor > head) {
        let tmp = anchorDOM;
        anchorDOM = headDOM;
        headDOM = tmp;
      }
      let range = document.createRange();
      range.setEnd(headDOM.node, headDOM.offset);
      range.setStart(anchorDOM.node, anchorDOM.offset);
      domSel.removeAllRanges();
      domSel.addRange(range);
    }
  }
  ignoreMutation(mutation) {
    return !this.contentDOM && mutation.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  markDirty(from, to) {
    for (let offset = 0, i = 0; i < this.children.length; i++) {
      let child = this.children[i],
        end = offset + child.size;
      if (offset == end ? from <= end && to >= offset : from < end && to > offset) {
        let startInside = offset + child.border,
          endInside = end - child.border;
        if (from >= startInside && to <= endInside) {
          this.dirty = from == offset || to == end ? CONTENT_DIRTY : CHILD_DIRTY;
          if (from == startInside && to == endInside && (child.contentLost || child.dom.parentNode != this.contentDOM)) child.dirty = NODE_DIRTY;else child.markDirty(from - startInside, to - startInside);
          return;
        } else {
          child.dirty = child.dom == child.contentDOM && child.dom.parentNode == this.contentDOM && !child.children.length ? CONTENT_DIRTY : NODE_DIRTY;
        }
      }
      offset = end;
    }
    this.dirty = CONTENT_DIRTY;
  }
  markParentsDirty() {
    let level = 1;
    for (let node = this.parent; node; node = node.parent, level++) {
      let dirty = level == 1 ? CONTENT_DIRTY : CHILD_DIRTY;
      if (node.dirty < dirty) node.dirty = dirty;
    }
  }
  get domAtom() {
    return false;
  }
  get ignoreForCoords() {
    return false;
  }
  get ignoreForSelection() {
    return false;
  }
  isText(text) {
    return false;
  }
};
var WidgetViewDesc = class extends ViewDesc {
  constructor(parent, widget, view, pos) {
    let self,
      dom = widget.type.toDOM;
    if (typeof dom == "function") dom = dom(view, () => {
      if (!self) return pos;
      if (self.parent) return self.parent.posBeforeChild(self);
    });
    if (!widget.type.spec.raw) {
      if (dom.nodeType != 1) {
        let wrap = document.createElement("span");
        wrap.appendChild(dom);
        dom = wrap;
      }
      dom.contentEditable = "false";
      dom.classList.add("ProseMirror-widget");
    }
    super(parent, [], dom, null);
    this.widget = widget;
    this.widget = widget;
    self = this;
  }
  matchesWidget(widget) {
    return this.dirty == NOT_DIRTY && widget.type.eq(this.widget.type);
  }
  parseRule() {
    return {
      ignore: true
    };
  }
  stopEvent(event) {
    let stop = this.widget.spec.stopEvent;
    return stop ? stop(event) : false;
  }
  ignoreMutation(mutation) {
    return mutation.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom);
    super.destroy();
  }
  get domAtom() {
    return true;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
};
var CompositionViewDesc = class extends ViewDesc {
  constructor(parent, dom, textDOM, text) {
    super(parent, [], dom, null);
    this.textDOM = textDOM;
    this.text = text;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(dom, offset) {
    if (dom != this.textDOM) return this.posAtStart + (offset ? this.size : 0);
    return this.posAtStart + offset;
  }
  domFromPos(pos) {
    return {
      node: this.textDOM,
      offset: pos
    };
  }
  ignoreMutation(mut) {
    return mut.type === "characterData" && mut.target.nodeValue == mut.oldValue;
  }
};
var MarkViewDesc = class extends ViewDesc {
  constructor(parent, mark, dom, contentDOM, spec) {
    super(parent, [], dom, contentDOM);
    this.mark = mark;
    this.spec = spec;
  }
  static create(parent, mark, inline, view) {
    let custom = view.nodeViews[mark.type.name];
    let spec = custom && custom(mark, view, inline);
    if (!spec || !spec.dom) spec = import_prosemirror_model.DOMSerializer.renderSpec(document, mark.type.spec.toDOM(mark, inline), null, mark.attrs);
    return new MarkViewDesc(parent, mark, spec.dom, spec.contentDOM || spec.dom, spec);
  }
  parseRule() {
    if (this.dirty & NODE_DIRTY || this.mark.type.spec.reparseInView) return null;
    return {
      mark: this.mark.type.name,
      attrs: this.mark.attrs,
      contentElement: this.contentDOM
    };
  }
  matchesMark(mark) {
    return this.dirty != NODE_DIRTY && this.mark.eq(mark);
  }
  markDirty(from, to) {
    super.markDirty(from, to);
    if (this.dirty != NOT_DIRTY) {
      let parent = this.parent;
      while (!parent.node) parent = parent.parent;
      if (parent.dirty < this.dirty) parent.dirty = this.dirty;
      this.dirty = NOT_DIRTY;
    }
  }
  slice(from, to, view) {
    let copy = MarkViewDesc.create(this.parent, this.mark, true, view);
    let nodes = this.children,
      size = this.size;
    if (to < size) nodes = replaceNodes(nodes, to, size, view);
    if (from > 0) nodes = replaceNodes(nodes, 0, from, view);
    for (let i = 0; i < nodes.length; i++) nodes[i].parent = copy;
    copy.children = nodes;
    return copy;
  }
  ignoreMutation(mutation) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : super.ignoreMutation(mutation);
  }
  destroy() {
    if (this.spec.destroy) this.spec.destroy();
    super.destroy();
  }
};
var NodeViewDesc = class extends ViewDesc {
  constructor(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos) {
    super(parent, [], dom, contentDOM);
    this.node = node;
    this.outerDeco = outerDeco;
    this.innerDeco = innerDeco;
    this.nodeDOM = nodeDOM;
  }
  static create(parent, node, outerDeco, innerDeco, view, pos) {
    let custom = view.nodeViews[node.type.name],
      descObj;
    let spec = custom && custom(node, view, () => {
      if (!descObj) return pos;
      if (descObj.parent) return descObj.parent.posBeforeChild(descObj);
    }, outerDeco, innerDeco);
    let dom = spec && spec.dom,
      contentDOM = spec && spec.contentDOM;
    if (node.isText) {
      if (!dom) dom = document.createTextNode(node.text);else if (dom.nodeType != 3) throw new RangeError("Text must be rendered as a DOM text node");
    } else if (!dom) {
      let spec2 = import_prosemirror_model.DOMSerializer.renderSpec(document, node.type.spec.toDOM(node), null, node.attrs);
      ({
        dom,
        contentDOM
      } = spec2);
    }
    if (!contentDOM && !node.isText && dom.nodeName != "BR") {
      if (!dom.hasAttribute("contenteditable")) dom.contentEditable = "false";
      if (node.type.spec.draggable) dom.draggable = true;
    }
    let nodeDOM = dom;
    dom = applyOuterDeco(dom, outerDeco, node);
    if (spec) return descObj = new CustomNodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, spec, view, pos + 1);else if (node.isText) return new TextViewDesc(parent, node, outerDeco, innerDeco, dom, nodeDOM, view);else return new NodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, view, pos + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView) return null;
    let rule = {
      node: this.node.type.name,
      attrs: this.node.attrs
    };
    if (this.node.type.whitespace == "pre") rule.preserveWhitespace = "full";
    if (!this.contentDOM) {
      rule.getContent = () => this.node.content;
    } else if (!this.contentLost) {
      rule.contentElement = this.contentDOM;
    } else {
      for (let i = this.children.length - 1; i >= 0; i--) {
        let child = this.children[i];
        if (this.dom.contains(child.dom.parentNode)) {
          rule.contentElement = child.dom.parentNode;
          break;
        }
      }
      if (!rule.contentElement) rule.getContent = () => import_prosemirror_model.Fragment.empty;
    }
    return rule;
  }
  matchesNode(node, outerDeco, innerDeco) {
    return this.dirty == NOT_DIRTY && node.eq(this.node) && sameOuterDeco(outerDeco, this.outerDeco) && innerDeco.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  updateChildren(view, pos) {
    let inline = this.node.inlineContent,
      off = pos;
    let composition = view.composing ? this.localCompositionInfo(view, pos) : null;
    let localComposition = composition && composition.pos > -1 ? composition : null;
    let compositionInChild = composition && composition.pos < 0;
    let updater = new ViewTreeUpdater(this, localComposition && localComposition.node, view);
    iterDeco(this.node, this.innerDeco, (widget, i, insideNode) => {
      if (widget.spec.marks) updater.syncToMarks(widget.spec.marks, inline, view);else if (widget.type.side >= 0 && !insideNode) updater.syncToMarks(i == this.node.childCount ? import_prosemirror_model.Mark.none : this.node.child(i).marks, inline, view);
      updater.placeWidget(widget, view, off);
    }, (child, outerDeco, innerDeco, i) => {
      updater.syncToMarks(child.marks, inline, view);
      let compIndex;
      if (updater.findNodeMatch(child, outerDeco, innerDeco, i)) ;else if (compositionInChild && view.state.selection.from > off && view.state.selection.to < off + child.nodeSize && (compIndex = updater.findIndexWithChild(composition.node)) > -1 && updater.updateNodeAt(child, outerDeco, innerDeco, compIndex, view)) ;else if (updater.updateNextNode(child, outerDeco, innerDeco, view, i, off)) ;else {
        updater.addNode(child, outerDeco, innerDeco, view, off);
      }
      off += child.nodeSize;
    });
    updater.syncToMarks([], inline, view);
    if (this.node.isTextblock) updater.addTextblockHacks();
    updater.destroyRest();
    if (updater.changed || this.dirty == CONTENT_DIRTY) {
      if (localComposition) this.protectLocalComposition(view, localComposition);
      renderDescs(this.contentDOM, this.children, view);
      if (ios) iosHacks(this.dom);
    }
  }
  localCompositionInfo(view, pos) {
    let {
      from,
      to
    } = view.state.selection;
    if (!(view.state.selection instanceof import_prosemirror_state.TextSelection) || from < pos || to > pos + this.node.content.size) return null;
    let textNode = view.input.compositionNode;
    if (!textNode || !this.dom.contains(textNode.parentNode)) return null;
    if (this.node.inlineContent) {
      let text = textNode.nodeValue;
      let textPos = findTextInFragment(this.node.content, text, from - pos, to - pos);
      return textPos < 0 ? null : {
        node: textNode,
        pos: textPos,
        text
      };
    } else {
      return {
        node: textNode,
        pos: -1,
        text: ""
      };
    }
  }
  protectLocalComposition(view, {
    node,
    pos,
    text
  }) {
    if (this.getDesc(node)) return;
    let topNode = node;
    for (;; topNode = topNode.parentNode) {
      if (topNode.parentNode == this.contentDOM) break;
      while (topNode.previousSibling) topNode.parentNode.removeChild(topNode.previousSibling);
      while (topNode.nextSibling) topNode.parentNode.removeChild(topNode.nextSibling);
      if (topNode.pmViewDesc) topNode.pmViewDesc = void 0;
    }
    let desc = new CompositionViewDesc(this, topNode, node, text);
    view.input.compositionNodes.push(desc);
    this.children = replaceNodes(this.children, pos, pos + text.length, view, desc);
  }
  update(node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY || !node.sameMarkup(this.node)) return false;
    this.updateInner(node, outerDeco, innerDeco, view);
    return true;
  }
  updateInner(node, outerDeco, innerDeco, view) {
    this.updateOuterDeco(outerDeco);
    this.node = node;
    this.innerDeco = innerDeco;
    if (this.contentDOM) this.updateChildren(view, this.posAtStart);
    this.dirty = NOT_DIRTY;
  }
  updateOuterDeco(outerDeco) {
    if (sameOuterDeco(outerDeco, this.outerDeco)) return;
    let needsWrap = this.nodeDOM.nodeType != 1;
    let oldDOM = this.dom;
    this.dom = patchOuterDeco(this.dom, this.nodeDOM, computeOuterDeco(this.outerDeco, this.node, needsWrap), computeOuterDeco(outerDeco, this.node, needsWrap));
    if (this.dom != oldDOM) {
      oldDOM.pmViewDesc = void 0;
      this.dom.pmViewDesc = this;
    }
    this.outerDeco = outerDeco;
  }
  selectNode() {
    if (this.nodeDOM.nodeType == 1) this.nodeDOM.classList.add("ProseMirror-selectednode");
    if (this.contentDOM || !this.node.type.spec.draggable) this.dom.draggable = true;
  }
  deselectNode() {
    if (this.nodeDOM.nodeType == 1) {
      this.nodeDOM.classList.remove("ProseMirror-selectednode");
      if (this.contentDOM || !this.node.type.spec.draggable) this.dom.removeAttribute("draggable");
    }
  }
  get domAtom() {
    return this.node.isAtom;
  }
};
function docViewDesc(doc2, outerDeco, innerDeco, dom, view) {
  applyOuterDeco(dom, outerDeco, doc2);
  let docView = new NodeViewDesc(void 0, doc2, outerDeco, innerDeco, dom, dom, dom, view, 0);
  if (docView.contentDOM) docView.updateChildren(view, 0);
  return docView;
}
var TextViewDesc = class extends NodeViewDesc {
  constructor(parent, node, outerDeco, innerDeco, dom, nodeDOM, view) {
    super(parent, node, outerDeco, innerDeco, dom, null, nodeDOM, view, 0);
  }
  parseRule() {
    let skip = this.nodeDOM.parentNode;
    while (skip && skip != this.dom && !skip.pmIsDeco) skip = skip.parentNode;
    return {
      skip: skip || true
    };
  }
  update(node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY || this.dirty != NOT_DIRTY && !this.inParent() || !node.sameMarkup(this.node)) return false;
    this.updateOuterDeco(outerDeco);
    if ((this.dirty != NOT_DIRTY || node.text != this.node.text) && node.text != this.nodeDOM.nodeValue) {
      this.nodeDOM.nodeValue = node.text;
      if (view.trackWrites == this.nodeDOM) view.trackWrites = null;
    }
    this.node = node;
    this.dirty = NOT_DIRTY;
    return true;
  }
  inParent() {
    let parentDOM = this.parent.contentDOM;
    for (let n = this.nodeDOM; n; n = n.parentNode) if (n == parentDOM) return true;
    return false;
  }
  domFromPos(pos) {
    return {
      node: this.nodeDOM,
      offset: pos
    };
  }
  localPosFromDOM(dom, offset, bias) {
    if (dom == this.nodeDOM) return this.posAtStart + Math.min(offset, this.node.text.length);
    return super.localPosFromDOM(dom, offset, bias);
  }
  ignoreMutation(mutation) {
    return mutation.type != "characterData" && mutation.type != "selection";
  }
  slice(from, to, view) {
    let node = this.node.cut(from, to),
      dom = document.createTextNode(node.text);
    return new TextViewDesc(this.parent, node, this.outerDeco, this.innerDeco, dom, dom, view);
  }
  markDirty(from, to) {
    super.markDirty(from, to);
    if (this.dom != this.nodeDOM && (from == 0 || to == this.nodeDOM.nodeValue.length)) this.dirty = NODE_DIRTY;
  }
  get domAtom() {
    return false;
  }
  isText(text) {
    return this.node.text == text;
  }
};
var TrailingHackViewDesc = class extends ViewDesc {
  parseRule() {
    return {
      ignore: true
    };
  }
  matchesHack(nodeName) {
    return this.dirty == NOT_DIRTY && this.dom.nodeName == nodeName;
  }
  get domAtom() {
    return true;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
};
var CustomNodeViewDesc = class extends NodeViewDesc {
  constructor(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, spec, view, pos) {
    super(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos);
    this.spec = spec;
  }
  update(node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY) return false;
    if (this.spec.update && (this.node.type == node.type || this.spec.multiType)) {
      let result = this.spec.update(node, outerDeco, innerDeco);
      if (result) this.updateInner(node, outerDeco, innerDeco, view);
      return result;
    } else if (!this.contentDOM && !node.isLeaf) {
      return false;
    } else {
      return super.update(node, outerDeco, innerDeco, view);
    }
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(anchor, head, view, force) {
    this.spec.setSelection ? this.spec.setSelection(anchor, head, view.root) : super.setSelection(anchor, head, view, force);
  }
  destroy() {
    if (this.spec.destroy) this.spec.destroy();
    super.destroy();
  }
  stopEvent(event) {
    return this.spec.stopEvent ? this.spec.stopEvent(event) : false;
  }
  ignoreMutation(mutation) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : super.ignoreMutation(mutation);
  }
};
function renderDescs(parentDOM, descs, view) {
  let dom = parentDOM.firstChild,
    written = false;
  for (let i = 0; i < descs.length; i++) {
    let desc = descs[i],
      childDOM = desc.dom;
    if (childDOM.parentNode == parentDOM) {
      while (childDOM != dom) {
        dom = rm(dom);
        written = true;
      }
      dom = dom.nextSibling;
    } else {
      written = true;
      parentDOM.insertBefore(childDOM, dom);
    }
    if (desc instanceof MarkViewDesc) {
      let pos = dom ? dom.previousSibling : parentDOM.lastChild;
      renderDescs(desc.contentDOM, desc.children, view);
      dom = pos ? pos.nextSibling : parentDOM.firstChild;
    }
  }
  while (dom) {
    dom = rm(dom);
    written = true;
  }
  if (written && view.trackWrites == parentDOM) view.trackWrites = null;
}
var OuterDecoLevel = function (nodeName) {
  if (nodeName) this.nodeName = nodeName;
};
OuterDecoLevel.prototype = /* @__PURE__ */Object.create(null);
var noDeco = [new OuterDecoLevel()];
function computeOuterDeco(outerDeco, node, needsWrap) {
  if (outerDeco.length == 0) return noDeco;
  let top = needsWrap ? noDeco[0] : new OuterDecoLevel(),
    result = [top];
  for (let i = 0; i < outerDeco.length; i++) {
    let attrs = outerDeco[i].type.attrs;
    if (!attrs) continue;
    if (attrs.nodeName) result.push(top = new OuterDecoLevel(attrs.nodeName));
    for (let name in attrs) {
      let val = attrs[name];
      if (val == null) continue;
      if (needsWrap && result.length == 1) result.push(top = new OuterDecoLevel(node.isInline ? "span" : "div"));
      if (name == "class") top.class = (top.class ? top.class + " " : "") + val;else if (name == "style") top.style = (top.style ? top.style + ";" : "") + val;else if (name != "nodeName") top[name] = val;
    }
  }
  return result;
}
function patchOuterDeco(outerDOM, nodeDOM, prevComputed, curComputed) {
  if (prevComputed == noDeco && curComputed == noDeco) return nodeDOM;
  let curDOM = nodeDOM;
  for (let i = 0; i < curComputed.length; i++) {
    let deco = curComputed[i],
      prev = prevComputed[i];
    if (i) {
      let parent;
      if (prev && prev.nodeName == deco.nodeName && curDOM != outerDOM && (parent = curDOM.parentNode) && parent.nodeName.toLowerCase() == deco.nodeName) {
        curDOM = parent;
      } else {
        parent = document.createElement(deco.nodeName);
        parent.pmIsDeco = true;
        parent.appendChild(curDOM);
        prev = noDeco[0];
        curDOM = parent;
      }
    }
    patchAttributes(curDOM, prev || noDeco[0], deco);
  }
  return curDOM;
}
function patchAttributes(dom, prev, cur) {
  for (let name in prev) if (name != "class" && name != "style" && name != "nodeName" && !(name in cur)) dom.removeAttribute(name);
  for (let name in cur) if (name != "class" && name != "style" && name != "nodeName" && cur[name] != prev[name]) dom.setAttribute(name, cur[name]);
  if (prev.class != cur.class) {
    let prevList = prev.class ? prev.class.split(" ").filter(Boolean) : [];
    let curList = cur.class ? cur.class.split(" ").filter(Boolean) : [];
    for (let i = 0; i < prevList.length; i++) if (curList.indexOf(prevList[i]) == -1) dom.classList.remove(prevList[i]);
    for (let i = 0; i < curList.length; i++) if (prevList.indexOf(curList[i]) == -1) dom.classList.add(curList[i]);
    if (dom.classList.length == 0) dom.removeAttribute("class");
  }
  if (prev.style != cur.style) {
    if (prev.style) {
      let prop = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,
        m;
      while (m = prop.exec(prev.style)) dom.style.removeProperty(m[1]);
    }
    if (cur.style) dom.style.cssText += cur.style;
  }
}
function applyOuterDeco(dom, deco, node) {
  return patchOuterDeco(dom, dom, noDeco, computeOuterDeco(deco, node, dom.nodeType != 1));
}
function sameOuterDeco(a, b) {
  if (a.length != b.length) return false;
  for (let i = 0; i < a.length; i++) if (!a[i].type.eq(b[i].type)) return false;
  return true;
}
function rm(dom) {
  let next = dom.nextSibling;
  dom.parentNode.removeChild(dom);
  return next;
}
var ViewTreeUpdater = class {
  constructor(top, lock, view) {
    this.lock = lock;
    this.view = view;
    this.index = 0;
    this.stack = [];
    this.changed = false;
    this.top = top;
    this.preMatch = preMatch(top.node.content, top);
  }
  destroyBetween(start, end) {
    if (start == end) return;
    for (let i = start; i < end; i++) this.top.children[i].destroy();
    this.top.children.splice(start, end - start);
    this.changed = true;
  }
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  syncToMarks(marks, inline, view) {
    let keep = 0,
      depth = this.stack.length >> 1;
    let maxKeep = Math.min(depth, marks.length);
    while (keep < maxKeep && (keep == depth - 1 ? this.top : this.stack[keep + 1 << 1]).matchesMark(marks[keep]) && marks[keep].type.spec.spanning !== false) keep++;
    while (keep < depth) {
      this.destroyRest();
      this.top.dirty = NOT_DIRTY;
      this.index = this.stack.pop();
      this.top = this.stack.pop();
      depth--;
    }
    while (depth < marks.length) {
      this.stack.push(this.top, this.index + 1);
      let found = -1;
      for (let i = this.index; i < Math.min(this.index + 3, this.top.children.length); i++) {
        let next = this.top.children[i];
        if (next.matchesMark(marks[depth]) && !this.isLocked(next.dom)) {
          found = i;
          break;
        }
      }
      if (found > -1) {
        if (found > this.index) {
          this.changed = true;
          this.destroyBetween(this.index, found);
        }
        this.top = this.top.children[this.index];
      } else {
        let markDesc = MarkViewDesc.create(this.top, marks[depth], inline, view);
        this.top.children.splice(this.index, 0, markDesc);
        this.top = markDesc;
        this.changed = true;
      }
      this.index = 0;
      depth++;
    }
  }
  findNodeMatch(node, outerDeco, innerDeco, index) {
    let found = -1,
      targetDesc;
    if (index >= this.preMatch.index && (targetDesc = this.preMatch.matches[index - this.preMatch.index]).parent == this.top && targetDesc.matchesNode(node, outerDeco, innerDeco)) {
      found = this.top.children.indexOf(targetDesc, this.index);
    } else {
      for (let i = this.index, e = Math.min(this.top.children.length, i + 5); i < e; i++) {
        let child = this.top.children[i];
        if (child.matchesNode(node, outerDeco, innerDeco) && !this.preMatch.matched.has(child)) {
          found = i;
          break;
        }
      }
    }
    if (found < 0) return false;
    this.destroyBetween(this.index, found);
    this.index++;
    return true;
  }
  updateNodeAt(node, outerDeco, innerDeco, index, view) {
    let child = this.top.children[index];
    if (child.dirty == NODE_DIRTY && child.dom == child.contentDOM) child.dirty = CONTENT_DIRTY;
    if (!child.update(node, outerDeco, innerDeco, view)) return false;
    this.destroyBetween(this.index, index);
    this.index++;
    return true;
  }
  findIndexWithChild(domNode) {
    for (;;) {
      let parent = domNode.parentNode;
      if (!parent) return -1;
      if (parent == this.top.contentDOM) {
        let desc = domNode.pmViewDesc;
        if (desc) for (let i = this.index; i < this.top.children.length; i++) {
          if (this.top.children[i] == desc) return i;
        }
        return -1;
      }
      domNode = parent;
    }
  }
  updateNextNode(node, outerDeco, innerDeco, view, index, pos) {
    for (let i = this.index; i < this.top.children.length; i++) {
      let next = this.top.children[i];
      if (next instanceof NodeViewDesc) {
        let preMatch2 = this.preMatch.matched.get(next);
        if (preMatch2 != null && preMatch2 != index) return false;
        let nextDOM = next.dom,
          updated;
        let locked = this.isLocked(nextDOM) && !(node.isText && next.node && next.node.isText && next.nodeDOM.nodeValue == node.text && next.dirty != NODE_DIRTY && sameOuterDeco(outerDeco, next.outerDeco));
        if (!locked && next.update(node, outerDeco, innerDeco, view)) {
          this.destroyBetween(this.index, i);
          if (next.dom != nextDOM) this.changed = true;
          this.index++;
          return true;
        } else if (!locked && (updated = this.recreateWrapper(next, node, outerDeco, innerDeco, view, pos))) {
          this.destroyBetween(this.index, i);
          this.top.children[this.index] = updated;
          if (updated.contentDOM) {
            updated.dirty = CONTENT_DIRTY;
            updated.updateChildren(view, pos + 1);
            updated.dirty = NOT_DIRTY;
          }
          this.changed = true;
          this.index++;
          return true;
        }
        break;
      }
    }
    return false;
  }
  recreateWrapper(next, node, outerDeco, innerDeco, view, pos) {
    if (next.dirty || node.isAtom || !next.children.length || !next.node.content.eq(node.content) || !sameOuterDeco(outerDeco, next.outerDeco) || !innerDeco.eq(next.innerDeco)) return null;
    let wrapper = NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view, pos);
    if (wrapper.contentDOM) {
      wrapper.children = next.children;
      next.children = [];
      for (let ch of wrapper.children) ch.parent = wrapper;
    }
    next.destroy();
    return wrapper;
  }
  addNode(node, outerDeco, innerDeco, view, pos) {
    let desc = NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view, pos);
    if (desc.contentDOM) desc.updateChildren(view, pos + 1);
    this.top.children.splice(this.index++, 0, desc);
    this.changed = true;
  }
  placeWidget(widget, view, pos) {
    let next = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (next && next.matchesWidget(widget) && (widget == next.widget || !next.widget.type.toDOM.parentNode)) {
      this.index++;
    } else {
      let desc = new WidgetViewDesc(this.top, widget, view, pos);
      this.top.children.splice(this.index++, 0, desc);
      this.changed = true;
    }
  }
  addTextblockHacks() {
    let lastChild = this.top.children[this.index - 1],
      parent = this.top;
    while (lastChild instanceof MarkViewDesc) {
      parent = lastChild;
      lastChild = parent.children[parent.children.length - 1];
    }
    if (!lastChild || !(lastChild instanceof TextViewDesc) || /\n$/.test(lastChild.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(lastChild.node.text)) {
      if ((safari || chrome) && lastChild && lastChild.dom.contentEditable == "false") this.addHackNode("IMG", parent);
      this.addHackNode("BR", this.top);
    }
  }
  addHackNode(nodeName, parent) {
    if (parent == this.top && this.index < parent.children.length && parent.children[this.index].matchesHack(nodeName)) {
      this.index++;
    } else {
      let dom = document.createElement(nodeName);
      if (nodeName == "IMG") {
        dom.className = "ProseMirror-separator";
        dom.alt = "";
      }
      if (nodeName == "BR") dom.className = "ProseMirror-trailingBreak";
      let hack = new TrailingHackViewDesc(this.top, [], dom, null);
      if (parent != this.top) parent.children.push(hack);else parent.children.splice(this.index++, 0, hack);
      this.changed = true;
    }
  }
  isLocked(node) {
    return this.lock && (node == this.lock || node.nodeType == 1 && node.contains(this.lock.parentNode));
  }
};
function preMatch(frag, parentDesc) {
  let curDesc = parentDesc,
    descI = curDesc.children.length;
  let fI = frag.childCount,
    matched = /* @__PURE__ */new Map(),
    matches = [];
  outer: while (fI > 0) {
    let desc;
    for (;;) {
      if (descI) {
        let next = curDesc.children[descI - 1];
        if (next instanceof MarkViewDesc) {
          curDesc = next;
          descI = next.children.length;
        } else {
          desc = next;
          descI--;
          break;
        }
      } else if (curDesc == parentDesc) {
        break outer;
      } else {
        descI = curDesc.parent.children.indexOf(curDesc);
        curDesc = curDesc.parent;
      }
    }
    let node = desc.node;
    if (!node) continue;
    if (node != frag.child(fI - 1)) break;
    --fI;
    matched.set(desc, fI);
    matches.push(desc);
  }
  return {
    index: fI,
    matched,
    matches: matches.reverse()
  };
}
function compareSide(a, b) {
  return a.type.side - b.type.side;
}
function iterDeco(parent, deco, onWidget, onNode) {
  let locals = deco.locals(parent),
    offset = 0;
  if (locals.length == 0) {
    for (let i = 0; i < parent.childCount; i++) {
      let child = parent.child(i);
      onNode(child, locals, deco.forChild(offset, child), i);
      offset += child.nodeSize;
    }
    return;
  }
  let decoIndex = 0,
    active = [],
    restNode = null;
  for (let parentIndex = 0;;) {
    let widget, widgets;
    while (decoIndex < locals.length && locals[decoIndex].to == offset) {
      let next = locals[decoIndex++];
      if (next.widget) {
        if (!widget) widget = next;else (widgets || (widgets = [widget])).push(next);
      }
    }
    if (widget) {
      if (widgets) {
        widgets.sort(compareSide);
        for (let i = 0; i < widgets.length; i++) onWidget(widgets[i], parentIndex, !!restNode);
      } else {
        onWidget(widget, parentIndex, !!restNode);
      }
    }
    let child, index;
    if (restNode) {
      index = -1;
      child = restNode;
      restNode = null;
    } else if (parentIndex < parent.childCount) {
      index = parentIndex;
      child = parent.child(parentIndex++);
    } else {
      break;
    }
    for (let i = 0; i < active.length; i++) if (active[i].to <= offset) active.splice(i--, 1);
    while (decoIndex < locals.length && locals[decoIndex].from <= offset && locals[decoIndex].to > offset) active.push(locals[decoIndex++]);
    let end = offset + child.nodeSize;
    if (child.isText) {
      let cutAt = end;
      if (decoIndex < locals.length && locals[decoIndex].from < cutAt) cutAt = locals[decoIndex].from;
      for (let i = 0; i < active.length; i++) if (active[i].to < cutAt) cutAt = active[i].to;
      if (cutAt < end) {
        restNode = child.cut(cutAt - offset);
        child = child.cut(0, cutAt - offset);
        end = cutAt;
        index = -1;
      }
    } else {
      while (decoIndex < locals.length && locals[decoIndex].to < end) decoIndex++;
    }
    let outerDeco = child.isInline && !child.isLeaf ? active.filter(d => !d.inline) : active.slice();
    onNode(child, outerDeco, deco.forChild(offset, child), index);
    offset = end;
  }
}
function iosHacks(dom) {
  if (dom.nodeName == "UL" || dom.nodeName == "OL") {
    let oldCSS = dom.style.cssText;
    dom.style.cssText = oldCSS + "; list-style: square !important";
    window.getComputedStyle(dom).listStyle;
    dom.style.cssText = oldCSS;
  }
}
function findTextInFragment(frag, text, from, to) {
  for (let i = 0, pos = 0; i < frag.childCount && pos <= to;) {
    let child = frag.child(i++),
      childStart = pos;
    pos += child.nodeSize;
    if (!child.isText) continue;
    let str = child.text;
    while (i < frag.childCount) {
      let next = frag.child(i++);
      pos += next.nodeSize;
      if (!next.isText) break;
      str += next.text;
    }
    if (pos >= from) {
      if (pos >= to && str.slice(to - text.length - childStart, to - childStart) == text) return to - text.length;
      let found = childStart < to ? str.lastIndexOf(text, to - childStart - 1) : -1;
      if (found >= 0 && found + text.length + childStart >= from) return childStart + found;
      if (from == to && str.length >= to + text.length - childStart && str.slice(to - childStart, to - childStart + text.length) == text) return to;
    }
  }
  return -1;
}
function replaceNodes(nodes, from, to, view, replacement) {
  let result = [];
  for (let i = 0, off = 0; i < nodes.length; i++) {
    let child = nodes[i],
      start = off,
      end = off += child.size;
    if (start >= to || end <= from) {
      result.push(child);
    } else {
      if (start < from) result.push(child.slice(0, from - start, view));
      if (replacement) {
        result.push(replacement);
        replacement = void 0;
      }
      if (end > to) result.push(child.slice(to - start, child.size, view));
    }
  }
  return result;
}
function selectionFromDOM(view, origin = null) {
  let domSel = view.domSelectionRange(),
    doc2 = view.state.doc;
  if (!domSel.focusNode) return null;
  let nearestDesc = view.docView.nearestDesc(domSel.focusNode),
    inWidget = nearestDesc && nearestDesc.size == 0;
  let head = view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset, 1);
  if (head < 0) return null;
  let $head = doc2.resolve(head),
    anchor,
    selection;
  if (selectionCollapsed(domSel)) {
    anchor = head;
    while (nearestDesc && !nearestDesc.node) nearestDesc = nearestDesc.parent;
    let nearestDescNode = nearestDesc.node;
    if (nearestDesc && nearestDescNode.isAtom && import_prosemirror_state.NodeSelection.isSelectable(nearestDescNode) && nearestDesc.parent && !(nearestDescNode.isInline && isOnEdge(domSel.focusNode, domSel.focusOffset, nearestDesc.dom))) {
      let pos = nearestDesc.posBefore;
      selection = new import_prosemirror_state.NodeSelection(head == pos ? $head : doc2.resolve(pos));
    }
  } else {
    if (domSel instanceof view.dom.ownerDocument.defaultView.Selection && domSel.rangeCount > 1) {
      let min = head,
        max = head;
      for (let i = 0; i < domSel.rangeCount; i++) {
        let range = domSel.getRangeAt(i);
        min = Math.min(min, view.docView.posFromDOM(range.startContainer, range.startOffset, 1));
        max = Math.max(max, view.docView.posFromDOM(range.endContainer, range.endOffset, -1));
      }
      if (min < 0) return null;
      [anchor, head] = max == view.state.selection.anchor ? [max, min] : [min, max];
      $head = doc2.resolve(head);
    } else {
      anchor = view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset, 1);
    }
    if (anchor < 0) return null;
  }
  let $anchor = doc2.resolve(anchor);
  if (!selection) {
    let bias = origin == "pointer" || view.state.selection.head < $head.pos && !inWidget ? 1 : -1;
    selection = selectionBetween(view, $anchor, $head, bias);
  }
  return selection;
}
function editorOwnsSelection(view) {
  return view.editable ? view.hasFocus() : hasSelection(view) && document.activeElement && document.activeElement.contains(view.dom);
}
function selectionToDOM(view, force = false) {
  let sel = view.state.selection;
  syncNodeSelection(view, sel);
  if (!editorOwnsSelection(view)) return;
  if (!force && view.input.mouseDown && view.input.mouseDown.allowDefault && chrome) {
    let domSel = view.domSelectionRange(),
      curSel = view.domObserver.currentSelection;
    if (domSel.anchorNode && curSel.anchorNode && isEquivalentPosition(domSel.anchorNode, domSel.anchorOffset, curSel.anchorNode, curSel.anchorOffset)) {
      view.input.mouseDown.delayedSelectionSync = true;
      view.domObserver.setCurSelection();
      return;
    }
  }
  view.domObserver.disconnectSelection();
  if (view.cursorWrapper) {
    selectCursorWrapper(view);
  } else {
    let {
        anchor,
        head
      } = sel,
      resetEditableFrom,
      resetEditableTo;
    if (brokenSelectBetweenUneditable && !(sel instanceof import_prosemirror_state.TextSelection)) {
      if (!sel.$from.parent.inlineContent) resetEditableFrom = temporarilyEditableNear(view, sel.from);
      if (!sel.empty && !sel.$from.parent.inlineContent) resetEditableTo = temporarilyEditableNear(view, sel.to);
    }
    view.docView.setSelection(anchor, head, view, force);
    if (brokenSelectBetweenUneditable) {
      if (resetEditableFrom) resetEditable(resetEditableFrom);
      if (resetEditableTo) resetEditable(resetEditableTo);
    }
    if (sel.visible) {
      view.dom.classList.remove("ProseMirror-hideselection");
    } else {
      view.dom.classList.add("ProseMirror-hideselection");
      if ("onselectionchange" in document) removeClassOnSelectionChange(view);
    }
  }
  view.domObserver.setCurSelection();
  view.domObserver.connectSelection();
}
var brokenSelectBetweenUneditable = safari || chrome && chrome_version < 63;
function temporarilyEditableNear(view, pos) {
  let {
    node,
    offset
  } = view.docView.domFromPos(pos, 0);
  let after = offset < node.childNodes.length ? node.childNodes[offset] : null;
  let before = offset ? node.childNodes[offset - 1] : null;
  if (safari && after && after.contentEditable == "false") return setEditable(after);
  if ((!after || after.contentEditable == "false") && (!before || before.contentEditable == "false")) {
    if (after) return setEditable(after);else if (before) return setEditable(before);
  }
}
function setEditable(element) {
  element.contentEditable = "true";
  if (safari && element.draggable) {
    element.draggable = false;
    element.wasDraggable = true;
  }
  return element;
}
function resetEditable(element) {
  element.contentEditable = "false";
  if (element.wasDraggable) {
    element.draggable = true;
    element.wasDraggable = null;
  }
}
function removeClassOnSelectionChange(view) {
  let doc2 = view.dom.ownerDocument;
  doc2.removeEventListener("selectionchange", view.input.hideSelectionGuard);
  let domSel = view.domSelectionRange();
  let node = domSel.anchorNode,
    offset = domSel.anchorOffset;
  doc2.addEventListener("selectionchange", view.input.hideSelectionGuard = () => {
    if (domSel.anchorNode != node || domSel.anchorOffset != offset) {
      doc2.removeEventListener("selectionchange", view.input.hideSelectionGuard);
      setTimeout(() => {
        if (!editorOwnsSelection(view) || view.state.selection.visible) view.dom.classList.remove("ProseMirror-hideselection");
      }, 20);
    }
  });
}
function selectCursorWrapper(view) {
  let domSel = view.domSelection(),
    range = document.createRange();
  if (!domSel) return;
  let node = view.cursorWrapper.dom,
    img = node.nodeName == "IMG";
  if (img) range.setStart(node.parentNode, domIndex(node) + 1);else range.setStart(node, 0);
  range.collapse(true);
  domSel.removeAllRanges();
  domSel.addRange(range);
  if (!img && !view.state.selection.visible && ie && ie_version <= 11) {
    node.disabled = true;
    node.disabled = false;
  }
}
function syncNodeSelection(view, sel) {
  if (sel instanceof import_prosemirror_state.NodeSelection) {
    let desc = view.docView.descAt(sel.from);
    if (desc != view.lastSelectedViewDesc) {
      clearNodeSelection(view);
      if (desc) desc.selectNode();
      view.lastSelectedViewDesc = desc;
    }
  } else {
    clearNodeSelection(view);
  }
}
function clearNodeSelection(view) {
  if (view.lastSelectedViewDesc) {
    if (view.lastSelectedViewDesc.parent) view.lastSelectedViewDesc.deselectNode();
    view.lastSelectedViewDesc = void 0;
  }
}
function selectionBetween(view, $anchor, $head, bias) {
  return view.someProp("createSelectionBetween", f => f(view, $anchor, $head)) || import_prosemirror_state.TextSelection.between($anchor, $head, bias);
}
function hasFocusAndSelection(view) {
  if (view.editable && !view.hasFocus()) return false;
  return hasSelection(view);
}
function hasSelection(view) {
  let sel = view.domSelectionRange();
  if (!sel.anchorNode) return false;
  try {
    return view.dom.contains(sel.anchorNode.nodeType == 3 ? sel.anchorNode.parentNode : sel.anchorNode) && (view.editable || view.dom.contains(sel.focusNode.nodeType == 3 ? sel.focusNode.parentNode : sel.focusNode));
  } catch (_) {
    return false;
  }
}
function anchorInRightPlace(view) {
  let anchorDOM = view.docView.domFromPos(view.state.selection.anchor, 0);
  let domSel = view.domSelectionRange();
  return isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset);
}
function moveSelectionBlock(state, dir) {
  let {
    $anchor,
    $head
  } = state.selection;
  let $side = dir > 0 ? $anchor.max($head) : $anchor.min($head);
  let $start = !$side.parent.inlineContent ? $side : $side.depth ? state.doc.resolve(dir > 0 ? $side.after() : $side.before()) : null;
  return $start && import_prosemirror_state.Selection.findFrom($start, dir);
}
function apply(view, sel) {
  view.dispatch(view.state.tr.setSelection(sel).scrollIntoView());
  return true;
}
function selectHorizontally(view, dir, mods) {
  let sel = view.state.selection;
  if (sel instanceof import_prosemirror_state.TextSelection) {
    if (mods.indexOf("s") > -1) {
      let {
          $head
        } = sel,
        node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter;
      if (!node || node.isText || !node.isLeaf) return false;
      let $newHead = view.state.doc.resolve($head.pos + node.nodeSize * (dir < 0 ? -1 : 1));
      return apply(view, new import_prosemirror_state.TextSelection(sel.$anchor, $newHead));
    } else if (!sel.empty) {
      return false;
    } else if (view.endOfTextblock(dir > 0 ? "forward" : "backward")) {
      let next = moveSelectionBlock(view.state, dir);
      if (next && next instanceof import_prosemirror_state.NodeSelection) return apply(view, next);
      return false;
    } else if (!(mac && mods.indexOf("m") > -1)) {
      let $head = sel.$head,
        node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter,
        desc;
      if (!node || node.isText) return false;
      let nodePos = dir < 0 ? $head.pos - node.nodeSize : $head.pos;
      if (!(node.isAtom || (desc = view.docView.descAt(nodePos)) && !desc.contentDOM)) return false;
      if (import_prosemirror_state.NodeSelection.isSelectable(node)) {
        return apply(view, new import_prosemirror_state.NodeSelection(dir < 0 ? view.state.doc.resolve($head.pos - node.nodeSize) : $head));
      } else if (webkit) {
        return apply(view, new import_prosemirror_state.TextSelection(view.state.doc.resolve(dir < 0 ? nodePos : nodePos + node.nodeSize)));
      } else {
        return false;
      }
    }
  } else if (sel instanceof import_prosemirror_state.NodeSelection && sel.node.isInline) {
    return apply(view, new import_prosemirror_state.TextSelection(dir > 0 ? sel.$to : sel.$from));
  } else {
    let next = moveSelectionBlock(view.state, dir);
    if (next) return apply(view, next);
    return false;
  }
}
function nodeLen(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
function isIgnorable(dom, dir) {
  let desc = dom.pmViewDesc;
  return desc && desc.size == 0 && (dir < 0 || dom.nextSibling || dom.nodeName != "BR");
}
function skipIgnoredNodes(view, dir) {
  return dir < 0 ? skipIgnoredNodesBefore(view) : skipIgnoredNodesAfter(view);
}
function skipIgnoredNodesBefore(view) {
  let sel = view.domSelectionRange();
  let node = sel.focusNode,
    offset = sel.focusOffset;
  if (!node) return;
  let moveNode,
    moveOffset,
    force = false;
  if (gecko && node.nodeType == 1 && offset < nodeLen(node) && isIgnorable(node.childNodes[offset], -1)) force = true;
  for (;;) {
    if (offset > 0) {
      if (node.nodeType != 1) {
        break;
      } else {
        let before = node.childNodes[offset - 1];
        if (isIgnorable(before, -1)) {
          moveNode = node;
          moveOffset = --offset;
        } else if (before.nodeType == 3) {
          node = before;
          offset = node.nodeValue.length;
        } else break;
      }
    } else if (isBlockNode(node)) {
      break;
    } else {
      let prev = node.previousSibling;
      while (prev && isIgnorable(prev, -1)) {
        moveNode = node.parentNode;
        moveOffset = domIndex(prev);
        prev = prev.previousSibling;
      }
      if (!prev) {
        node = node.parentNode;
        if (node == view.dom) break;
        offset = 0;
      } else {
        node = prev;
        offset = nodeLen(node);
      }
    }
  }
  if (force) setSelFocus(view, node, offset);else if (moveNode) setSelFocus(view, moveNode, moveOffset);
}
function skipIgnoredNodesAfter(view) {
  let sel = view.domSelectionRange();
  let node = sel.focusNode,
    offset = sel.focusOffset;
  if (!node) return;
  let len = nodeLen(node);
  let moveNode, moveOffset;
  for (;;) {
    if (offset < len) {
      if (node.nodeType != 1) break;
      let after = node.childNodes[offset];
      if (isIgnorable(after, 1)) {
        moveNode = node;
        moveOffset = ++offset;
      } else break;
    } else if (isBlockNode(node)) {
      break;
    } else {
      let next = node.nextSibling;
      while (next && isIgnorable(next, 1)) {
        moveNode = next.parentNode;
        moveOffset = domIndex(next) + 1;
        next = next.nextSibling;
      }
      if (!next) {
        node = node.parentNode;
        if (node == view.dom) break;
        offset = len = 0;
      } else {
        node = next;
        offset = 0;
        len = nodeLen(node);
      }
    }
  }
  if (moveNode) setSelFocus(view, moveNode, moveOffset);
}
function isBlockNode(dom) {
  let desc = dom.pmViewDesc;
  return desc && desc.node && desc.node.isBlock;
}
function textNodeAfter(node, offset) {
  while (node && offset == node.childNodes.length && !hasBlockDesc(node)) {
    offset = domIndex(node) + 1;
    node = node.parentNode;
  }
  while (node && offset < node.childNodes.length) {
    let next = node.childNodes[offset];
    if (next.nodeType == 3) return next;
    if (next.nodeType == 1 && next.contentEditable == "false") break;
    node = next;
    offset = 0;
  }
}
function textNodeBefore(node, offset) {
  while (node && !offset && !hasBlockDesc(node)) {
    offset = domIndex(node);
    node = node.parentNode;
  }
  while (node && offset) {
    let next = node.childNodes[offset - 1];
    if (next.nodeType == 3) return next;
    if (next.nodeType == 1 && next.contentEditable == "false") break;
    node = next;
    offset = node.childNodes.length;
  }
}
function setSelFocus(view, node, offset) {
  if (node.nodeType != 3) {
    let before, after;
    if (after = textNodeAfter(node, offset)) {
      node = after;
      offset = 0;
    } else if (before = textNodeBefore(node, offset)) {
      node = before;
      offset = before.nodeValue.length;
    }
  }
  let sel = view.domSelection();
  if (!sel) return;
  if (selectionCollapsed(sel)) {
    let range = document.createRange();
    range.setEnd(node, offset);
    range.setStart(node, offset);
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (sel.extend) {
    sel.extend(node, offset);
  }
  view.domObserver.setCurSelection();
  let {
    state
  } = view;
  setTimeout(() => {
    if (view.state == state) selectionToDOM(view);
  }, 50);
}
function findDirection(view, pos) {
  let $pos = view.state.doc.resolve(pos);
  if (!(chrome || windows) && $pos.parent.inlineContent) {
    let coords = view.coordsAtPos(pos);
    if (pos > $pos.start()) {
      let before = view.coordsAtPos(pos - 1);
      let mid = (before.top + before.bottom) / 2;
      if (mid > coords.top && mid < coords.bottom && Math.abs(before.left - coords.left) > 1) return before.left < coords.left ? "ltr" : "rtl";
    }
    if (pos < $pos.end()) {
      let after = view.coordsAtPos(pos + 1);
      let mid = (after.top + after.bottom) / 2;
      if (mid > coords.top && mid < coords.bottom && Math.abs(after.left - coords.left) > 1) return after.left > coords.left ? "ltr" : "rtl";
    }
  }
  let computed = getComputedStyle(view.dom).direction;
  return computed == "rtl" ? "rtl" : "ltr";
}
function selectVertically(view, dir, mods) {
  let sel = view.state.selection;
  if (sel instanceof import_prosemirror_state.TextSelection && !sel.empty || mods.indexOf("s") > -1) return false;
  if (mac && mods.indexOf("m") > -1) return false;
  let {
    $from,
    $to
  } = sel;
  if (!$from.parent.inlineContent || view.endOfTextblock(dir < 0 ? "up" : "down")) {
    let next = moveSelectionBlock(view.state, dir);
    if (next && next instanceof import_prosemirror_state.NodeSelection) return apply(view, next);
  }
  if (!$from.parent.inlineContent) {
    let side = dir < 0 ? $from : $to;
    let beyond = sel instanceof import_prosemirror_state.AllSelection ? import_prosemirror_state.Selection.near(side, dir) : import_prosemirror_state.Selection.findFrom(side, dir);
    return beyond ? apply(view, beyond) : false;
  }
  return false;
}
function stopNativeHorizontalDelete(view, dir) {
  if (!(view.state.selection instanceof import_prosemirror_state.TextSelection)) return true;
  let {
    $head,
    $anchor,
    empty: empty2
  } = view.state.selection;
  if (!$head.sameParent($anchor)) return true;
  if (!empty2) return false;
  if (view.endOfTextblock(dir > 0 ? "forward" : "backward")) return true;
  let nextNode = !$head.textOffset && (dir < 0 ? $head.nodeBefore : $head.nodeAfter);
  if (nextNode && !nextNode.isText) {
    let tr = view.state.tr;
    if (dir < 0) tr.delete($head.pos - nextNode.nodeSize, $head.pos);else tr.delete($head.pos, $head.pos + nextNode.nodeSize);
    view.dispatch(tr);
    return true;
  }
  return false;
}
function switchEditable(view, node, state) {
  view.domObserver.stop();
  node.contentEditable = state;
  view.domObserver.start();
}
function safariDownArrowBug(view) {
  if (!safari || view.state.selection.$head.parentOffset > 0) return false;
  let {
    focusNode,
    focusOffset
  } = view.domSelectionRange();
  if (focusNode && focusNode.nodeType == 1 && focusOffset == 0 && focusNode.firstChild && focusNode.firstChild.contentEditable == "false") {
    let child = focusNode.firstChild;
    switchEditable(view, child, "true");
    setTimeout(() => switchEditable(view, child, "false"), 20);
  }
  return false;
}
function getMods(event) {
  let result = "";
  if (event.ctrlKey) result += "c";
  if (event.metaKey) result += "m";
  if (event.altKey) result += "a";
  if (event.shiftKey) result += "s";
  return result;
}
function captureKeyDown(view, event) {
  let code = event.keyCode,
    mods = getMods(event);
  if (code == 8 || mac && code == 72 && mods == "c") {
    return stopNativeHorizontalDelete(view, -1) || skipIgnoredNodes(view, -1);
  } else if (code == 46 && !event.shiftKey || mac && code == 68 && mods == "c") {
    return stopNativeHorizontalDelete(view, 1) || skipIgnoredNodes(view, 1);
  } else if (code == 13 || code == 27) {
    return true;
  } else if (code == 37 || mac && code == 66 && mods == "c") {
    let dir = code == 37 ? findDirection(view, view.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return selectHorizontally(view, dir, mods) || skipIgnoredNodes(view, dir);
  } else if (code == 39 || mac && code == 70 && mods == "c") {
    let dir = code == 39 ? findDirection(view, view.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return selectHorizontally(view, dir, mods) || skipIgnoredNodes(view, dir);
  } else if (code == 38 || mac && code == 80 && mods == "c") {
    return selectVertically(view, -1, mods) || skipIgnoredNodes(view, -1);
  } else if (code == 40 || mac && code == 78 && mods == "c") {
    return safariDownArrowBug(view) || selectVertically(view, 1, mods) || skipIgnoredNodes(view, 1);
  } else if (mods == (mac ? "m" : "c") && (code == 66 || code == 73 || code == 89 || code == 90)) {
    return true;
  }
  return false;
}
function serializeForClipboard(view, slice) {
  view.someProp("transformCopied", f => {
    slice = f(slice, view);
  });
  let context = [],
    {
      content,
      openStart,
      openEnd
    } = slice;
  while (openStart > 1 && openEnd > 1 && content.childCount == 1 && content.firstChild.childCount == 1) {
    openStart--;
    openEnd--;
    let node = content.firstChild;
    context.push(node.type.name, node.attrs != node.type.defaultAttrs ? node.attrs : null);
    content = node.content;
  }
  let serializer = view.someProp("clipboardSerializer") || import_prosemirror_model.DOMSerializer.fromSchema(view.state.schema);
  let doc2 = detachedDoc(),
    wrap = doc2.createElement("div");
  wrap.appendChild(serializer.serializeFragment(content, {
    document: doc2
  }));
  let firstChild = wrap.firstChild,
    needsWrap,
    wrappers = 0;
  while (firstChild && firstChild.nodeType == 1 && (needsWrap = wrapMap[firstChild.nodeName.toLowerCase()])) {
    for (let i = needsWrap.length - 1; i >= 0; i--) {
      let wrapper = doc2.createElement(needsWrap[i]);
      while (wrap.firstChild) wrapper.appendChild(wrap.firstChild);
      wrap.appendChild(wrapper);
      wrappers++;
    }
    firstChild = wrap.firstChild;
  }
  if (firstChild && firstChild.nodeType == 1) firstChild.setAttribute("data-pm-slice", `${openStart} ${openEnd}${wrappers ? ` -${wrappers}` : ""} ${JSON.stringify(context)}`);
  let text = view.someProp("clipboardTextSerializer", f => f(slice, view)) || slice.content.textBetween(0, slice.content.size, "\n\n");
  return {
    dom: wrap,
    text,
    slice
  };
}
function parseFromClipboard(view, text, html, plainText, $context) {
  let inCode = $context.parent.type.spec.code;
  let dom, slice;
  if (!html && !text) return null;
  let asText = text && (plainText || inCode || !html);
  if (asText) {
    view.someProp("transformPastedText", f => {
      text = f(text, inCode || plainText, view);
    });
    if (inCode) return text ? new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(view.state.schema.text(text.replace(/\r\n?/g, "\n"))), 0, 0) : import_prosemirror_model.Slice.empty;
    let parsed = view.someProp("clipboardTextParser", f => f(text, $context, plainText, view));
    if (parsed) {
      slice = parsed;
    } else {
      let marks = $context.marks();
      let {
          schema
        } = view.state,
        serializer = import_prosemirror_model.DOMSerializer.fromSchema(schema);
      dom = document.createElement("div");
      text.split(/(?:\r\n?|\n)+/).forEach(block => {
        let p = dom.appendChild(document.createElement("p"));
        if (block) p.appendChild(serializer.serializeNode(schema.text(block, marks)));
      });
    }
  } else {
    view.someProp("transformPastedHTML", f => {
      html = f(html, view);
    });
    dom = readHTML(html);
    if (webkit) restoreReplacedSpaces(dom);
  }
  let contextNode = dom && dom.querySelector("[data-pm-slice]");
  let sliceData = contextNode && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(contextNode.getAttribute("data-pm-slice") || "");
  if (sliceData && sliceData[3]) for (let i = +sliceData[3]; i > 0; i--) {
    let child = dom.firstChild;
    while (child && child.nodeType != 1) child = child.nextSibling;
    if (!child) break;
    dom = child;
  }
  if (!slice) {
    let parser = view.someProp("clipboardParser") || view.someProp("domParser") || import_prosemirror_model.DOMParser.fromSchema(view.state.schema);
    slice = parser.parseSlice(dom, {
      preserveWhitespace: !!(asText || sliceData),
      context: $context,
      ruleFromNode(dom2) {
        if (dom2.nodeName == "BR" && !dom2.nextSibling && dom2.parentNode && !inlineParents.test(dom2.parentNode.nodeName)) return {
          ignore: true
        };
        return null;
      }
    });
  }
  if (sliceData) {
    slice = addContext(closeSlice(slice, +sliceData[1], +sliceData[2]), sliceData[4]);
  } else {
    slice = import_prosemirror_model.Slice.maxOpen(normalizeSiblings(slice.content, $context), true);
    if (slice.openStart || slice.openEnd) {
      let openStart = 0,
        openEnd = 0;
      for (let node = slice.content.firstChild; openStart < slice.openStart && !node.type.spec.isolating; openStart++, node = node.firstChild) {}
      for (let node = slice.content.lastChild; openEnd < slice.openEnd && !node.type.spec.isolating; openEnd++, node = node.lastChild) {}
      slice = closeSlice(slice, openStart, openEnd);
    }
  }
  view.someProp("transformPasted", f => {
    slice = f(slice, view);
  });
  return slice;
}
var inlineParents = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function normalizeSiblings(fragment, $context) {
  if (fragment.childCount < 2) return fragment;
  for (let d = $context.depth; d >= 0; d--) {
    let parent = $context.node(d);
    let match = parent.contentMatchAt($context.index(d));
    let lastWrap,
      result = [];
    fragment.forEach(node => {
      if (!result) return;
      let wrap = match.findWrapping(node.type),
        inLast;
      if (!wrap) return result = null;
      if (inLast = result.length && lastWrap.length && addToSibling(wrap, lastWrap, node, result[result.length - 1], 0)) {
        result[result.length - 1] = inLast;
      } else {
        if (result.length) result[result.length - 1] = closeRight(result[result.length - 1], lastWrap.length);
        let wrapped = withWrappers(node, wrap);
        result.push(wrapped);
        match = match.matchType(wrapped.type);
        lastWrap = wrap;
      }
    });
    if (result) return import_prosemirror_model.Fragment.from(result);
  }
  return fragment;
}
function withWrappers(node, wrap, from = 0) {
  for (let i = wrap.length - 1; i >= from; i--) node = wrap[i].create(null, import_prosemirror_model.Fragment.from(node));
  return node;
}
function addToSibling(wrap, lastWrap, node, sibling, depth) {
  if (depth < wrap.length && depth < lastWrap.length && wrap[depth] == lastWrap[depth]) {
    let inner = addToSibling(wrap, lastWrap, node, sibling.lastChild, depth + 1);
    if (inner) return sibling.copy(sibling.content.replaceChild(sibling.childCount - 1, inner));
    let match = sibling.contentMatchAt(sibling.childCount);
    if (match.matchType(depth == wrap.length - 1 ? node.type : wrap[depth + 1])) return sibling.copy(sibling.content.append(import_prosemirror_model.Fragment.from(withWrappers(node, wrap, depth + 1))));
  }
}
function closeRight(node, depth) {
  if (depth == 0) return node;
  let fragment = node.content.replaceChild(node.childCount - 1, closeRight(node.lastChild, depth - 1));
  let fill = node.contentMatchAt(node.childCount).fillBefore(import_prosemirror_model.Fragment.empty, true);
  return node.copy(fragment.append(fill));
}
function closeRange(fragment, side, from, to, depth, openEnd) {
  let node = side < 0 ? fragment.firstChild : fragment.lastChild,
    inner = node.content;
  if (fragment.childCount > 1) openEnd = 0;
  if (depth < to - 1) inner = closeRange(inner, side, from, to, depth + 1, openEnd);
  if (depth >= from) inner = side < 0 ? node.contentMatchAt(0).fillBefore(inner, openEnd <= depth).append(inner) : inner.append(node.contentMatchAt(node.childCount).fillBefore(import_prosemirror_model.Fragment.empty, true));
  return fragment.replaceChild(side < 0 ? 0 : fragment.childCount - 1, node.copy(inner));
}
function closeSlice(slice, openStart, openEnd) {
  if (openStart < slice.openStart) slice = new import_prosemirror_model.Slice(closeRange(slice.content, -1, openStart, slice.openStart, 0, slice.openEnd), openStart, slice.openEnd);
  if (openEnd < slice.openEnd) slice = new import_prosemirror_model.Slice(closeRange(slice.content, 1, openEnd, slice.openEnd, 0, 0), slice.openStart, openEnd);
  return slice;
}
var wrapMap = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
var _detachedDoc = null;
function detachedDoc() {
  return _detachedDoc || (_detachedDoc = document.implementation.createHTMLDocument("title"));
}
var _policy = null;
function maybeWrapTrusted(html) {
  let trustedTypes = window.trustedTypes;
  if (!trustedTypes) return html;
  if (!_policy) _policy = trustedTypes.defaultPolicy || trustedTypes.createPolicy("ProseMirrorClipboard", {
    createHTML: s => s
  });
  return _policy.createHTML(html);
}
function readHTML(html) {
  let metas = /^(\s*<meta [^>]*>)*/.exec(html);
  if (metas) html = html.slice(metas[0].length);
  let elt = detachedDoc().createElement("div");
  let firstTag = /<([a-z][^>\s]+)/i.exec(html),
    wrap;
  if (wrap = firstTag && wrapMap[firstTag[1].toLowerCase()]) html = wrap.map(n => "<" + n + ">").join("") + html + wrap.map(n => "</" + n + ">").reverse().join("");
  elt.innerHTML = maybeWrapTrusted(html);
  if (wrap) for (let i = 0; i < wrap.length; i++) elt = elt.querySelector(wrap[i]) || elt;
  return elt;
}
function restoreReplacedSpaces(dom) {
  let nodes = dom.querySelectorAll(chrome ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (node.childNodes.length == 1 && node.textContent == "\xA0" && node.parentNode) node.parentNode.replaceChild(dom.ownerDocument.createTextNode(" "), node);
  }
}
function addContext(slice, context) {
  if (!slice.size) return slice;
  let schema = slice.content.firstChild.type.schema,
    array;
  try {
    array = JSON.parse(context);
  } catch (e) {
    return slice;
  }
  let {
    content,
    openStart,
    openEnd
  } = slice;
  for (let i = array.length - 2; i >= 0; i -= 2) {
    let type = schema.nodes[array[i]];
    if (!type || type.hasRequiredAttrs()) break;
    content = import_prosemirror_model.Fragment.from(type.create(array[i + 1], content));
    openStart++;
    openEnd++;
  }
  return new import_prosemirror_model.Slice(content, openStart, openEnd);
}
var handlers = {};
var editHandlers = {};
var passiveHandlers = {
  touchstart: true,
  touchmove: true
};
var InputState = class {
  constructor() {
    this.shiftKey = false;
    this.mouseDown = null;
    this.lastKeyCode = null;
    this.lastKeyCodeTime = 0;
    this.lastClick = {
      time: 0,
      x: 0,
      y: 0,
      type: "",
      button: 0
    };
    this.lastSelectionOrigin = null;
    this.lastSelectionTime = 0;
    this.lastIOSEnter = 0;
    this.lastIOSEnterFallbackTimeout = -1;
    this.lastFocus = 0;
    this.lastTouch = 0;
    this.lastChromeDelete = 0;
    this.composing = false;
    this.compositionNode = null;
    this.composingTimeout = -1;
    this.compositionNodes = [];
    this.compositionEndedAt = -2e8;
    this.compositionID = 1;
    this.compositionPendingChanges = 0;
    this.domChangeCount = 0;
    this.eventHandlers = /* @__PURE__ */Object.create(null);
    this.hideSelectionGuard = null;
  }
};
function initInput(view) {
  for (let event in handlers) {
    let handler = handlers[event];
    view.dom.addEventListener(event, view.input.eventHandlers[event] = event2 => {
      if (eventBelongsToView(view, event2) && !runCustomHandler(view, event2) && (view.editable || !(event2.type in editHandlers))) handler(view, event2);
    }, passiveHandlers[event] ? {
      passive: true
    } : void 0);
  }
  if (safari) view.dom.addEventListener("input", () => null);
  ensureListeners(view);
}
function setSelectionOrigin(view, origin) {
  view.input.lastSelectionOrigin = origin;
  view.input.lastSelectionTime = Date.now();
}
function destroyInput(view) {
  view.domObserver.stop();
  for (let type in view.input.eventHandlers) view.dom.removeEventListener(type, view.input.eventHandlers[type]);
  clearTimeout(view.input.composingTimeout);
  clearTimeout(view.input.lastIOSEnterFallbackTimeout);
}
function ensureListeners(view) {
  view.someProp("handleDOMEvents", currentHandlers => {
    for (let type in currentHandlers) if (!view.input.eventHandlers[type]) view.dom.addEventListener(type, view.input.eventHandlers[type] = event => runCustomHandler(view, event));
  });
}
function runCustomHandler(view, event) {
  return view.someProp("handleDOMEvents", handlers2 => {
    let handler = handlers2[event.type];
    return handler ? handler(view, event) || event.defaultPrevented : false;
  });
}
function eventBelongsToView(view, event) {
  if (!event.bubbles) return true;
  if (event.defaultPrevented) return false;
  for (let node = event.target; node != view.dom; node = node.parentNode) if (!node || node.nodeType == 11 || node.pmViewDesc && node.pmViewDesc.stopEvent(event)) return false;
  return true;
}
function dispatchEvent(view, event) {
  if (!runCustomHandler(view, event) && handlers[event.type] && (view.editable || !(event.type in editHandlers))) handlers[event.type](view, event);
}
editHandlers.keydown = (view, _event) => {
  let event = _event;
  view.input.shiftKey = event.keyCode == 16 || event.shiftKey;
  if (inOrNearComposition(view, event)) return;
  view.input.lastKeyCode = event.keyCode;
  view.input.lastKeyCodeTime = Date.now();
  if (android && chrome && event.keyCode == 13) return;
  if (event.keyCode != 229) view.domObserver.forceFlush();
  if (ios && event.keyCode == 13 && !event.ctrlKey && !event.altKey && !event.metaKey) {
    let now = Date.now();
    view.input.lastIOSEnter = now;
    view.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
      if (view.input.lastIOSEnter == now) {
        view.someProp("handleKeyDown", f => f(view, keyEvent(13, "Enter")));
        view.input.lastIOSEnter = 0;
      }
    }, 200);
  } else if (view.someProp("handleKeyDown", f => f(view, event)) || captureKeyDown(view, event)) {
    event.preventDefault();
  } else {
    setSelectionOrigin(view, "key");
  }
};
editHandlers.keyup = (view, event) => {
  if (event.keyCode == 16) view.input.shiftKey = false;
};
editHandlers.keypress = (view, _event) => {
  let event = _event;
  if (inOrNearComposition(view, event) || !event.charCode || event.ctrlKey && !event.altKey || mac && event.metaKey) return;
  if (view.someProp("handleKeyPress", f => f(view, event))) {
    event.preventDefault();
    return;
  }
  let sel = view.state.selection;
  if (!(sel instanceof import_prosemirror_state.TextSelection) || !sel.$from.sameParent(sel.$to)) {
    let text = String.fromCharCode(event.charCode);
    let deflt = () => view.state.tr.insertText(text).scrollIntoView();
    if (!/[\r\n]/.test(text) && !view.someProp("handleTextInput", f => f(view, sel.$from.pos, sel.$to.pos, text, deflt))) view.dispatch(deflt());
    event.preventDefault();
  }
};
function eventCoords(event) {
  return {
    left: event.clientX,
    top: event.clientY
  };
}
function isNear(event, click) {
  let dx = click.x - event.clientX,
    dy = click.y - event.clientY;
  return dx * dx + dy * dy < 100;
}
function runHandlerOnContext(view, propName, pos, inside, event) {
  if (inside == -1) return false;
  let $pos = view.state.doc.resolve(inside);
  for (let i = $pos.depth + 1; i > 0; i--) {
    if (view.someProp(propName, f => i > $pos.depth ? f(view, pos, $pos.nodeAfter, $pos.before(i), event, true) : f(view, pos, $pos.node(i), $pos.before(i), event, false))) return true;
  }
  return false;
}
function updateSelection(view, selection, origin) {
  if (!view.focused) view.focus();
  if (view.state.selection.eq(selection)) return;
  let tr = view.state.tr.setSelection(selection);
  if (origin == "pointer") tr.setMeta("pointer", true);
  view.dispatch(tr);
}
function selectClickedLeaf(view, inside) {
  if (inside == -1) return false;
  let $pos = view.state.doc.resolve(inside),
    node = $pos.nodeAfter;
  if (node && node.isAtom && import_prosemirror_state.NodeSelection.isSelectable(node)) {
    updateSelection(view, new import_prosemirror_state.NodeSelection($pos), "pointer");
    return true;
  }
  return false;
}
function selectClickedNode(view, inside) {
  if (inside == -1) return false;
  let sel = view.state.selection,
    selectedNode,
    selectAt;
  if (sel instanceof import_prosemirror_state.NodeSelection) selectedNode = sel.node;
  let $pos = view.state.doc.resolve(inside);
  for (let i = $pos.depth + 1; i > 0; i--) {
    let node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    if (import_prosemirror_state.NodeSelection.isSelectable(node)) {
      if (selectedNode && sel.$from.depth > 0 && i >= sel.$from.depth && $pos.before(sel.$from.depth + 1) == sel.$from.pos) selectAt = $pos.before(sel.$from.depth);else selectAt = $pos.before(i);
      break;
    }
  }
  if (selectAt != null) {
    updateSelection(view, import_prosemirror_state.NodeSelection.create(view.state.doc, selectAt), "pointer");
    return true;
  } else {
    return false;
  }
}
function handleSingleClick(view, pos, inside, event, selectNode) {
  return runHandlerOnContext(view, "handleClickOn", pos, inside, event) || view.someProp("handleClick", f => f(view, pos, event)) || (selectNode ? selectClickedNode(view, inside) : selectClickedLeaf(view, inside));
}
function handleDoubleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleDoubleClickOn", pos, inside, event) || view.someProp("handleDoubleClick", f => f(view, pos, event));
}
function handleTripleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleTripleClickOn", pos, inside, event) || view.someProp("handleTripleClick", f => f(view, pos, event)) || defaultTripleClick(view, inside, event);
}
function defaultTripleClick(view, inside, event) {
  if (event.button != 0) return false;
  let doc2 = view.state.doc;
  if (inside == -1) {
    if (doc2.inlineContent) {
      updateSelection(view, import_prosemirror_state.TextSelection.create(doc2, 0, doc2.content.size), "pointer");
      return true;
    }
    return false;
  }
  let $pos = doc2.resolve(inside);
  for (let i = $pos.depth + 1; i > 0; i--) {
    let node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    let nodePos = $pos.before(i);
    if (node.inlineContent) updateSelection(view, import_prosemirror_state.TextSelection.create(doc2, nodePos + 1, nodePos + 1 + node.content.size), "pointer");else if (import_prosemirror_state.NodeSelection.isSelectable(node)) updateSelection(view, import_prosemirror_state.NodeSelection.create(doc2, nodePos), "pointer");else continue;
    return true;
  }
}
function forceDOMFlush(view) {
  return endComposition(view);
}
var selectNodeModifier = mac ? "metaKey" : "ctrlKey";
handlers.mousedown = (view, _event) => {
  let event = _event;
  view.input.shiftKey = event.shiftKey;
  let flushed = forceDOMFlush(view);
  let now = Date.now(),
    type = "singleClick";
  if (now - view.input.lastClick.time < 500 && isNear(event, view.input.lastClick) && !event[selectNodeModifier] && view.input.lastClick.button == event.button) {
    if (view.input.lastClick.type == "singleClick") type = "doubleClick";else if (view.input.lastClick.type == "doubleClick") type = "tripleClick";
  }
  view.input.lastClick = {
    time: now,
    x: event.clientX,
    y: event.clientY,
    type,
    button: event.button
  };
  let pos = view.posAtCoords(eventCoords(event));
  if (!pos) return;
  if (type == "singleClick") {
    if (view.input.mouseDown) view.input.mouseDown.done();
    view.input.mouseDown = new MouseDown(view, pos, event, !!flushed);
  } else if ((type == "doubleClick" ? handleDoubleClick : handleTripleClick)(view, pos.pos, pos.inside, event)) {
    event.preventDefault();
  } else {
    setSelectionOrigin(view, "pointer");
  }
};
var MouseDown = class {
  constructor(view, pos, event, flushed) {
    this.view = view;
    this.pos = pos;
    this.event = event;
    this.flushed = flushed;
    this.delayedSelectionSync = false;
    this.mightDrag = null;
    this.startDoc = view.state.doc;
    this.selectNode = !!event[selectNodeModifier];
    this.allowDefault = event.shiftKey;
    let targetNode, targetPos;
    if (pos.inside > -1) {
      targetNode = view.state.doc.nodeAt(pos.inside);
      targetPos = pos.inside;
    } else {
      let $pos = view.state.doc.resolve(pos.pos);
      targetNode = $pos.parent;
      targetPos = $pos.depth ? $pos.before() : 0;
    }
    const target = flushed ? null : event.target;
    const targetDesc = target ? view.docView.nearestDesc(target, true) : null;
    this.target = targetDesc && targetDesc.dom.nodeType == 1 ? targetDesc.dom : null;
    let {
      selection
    } = view.state;
    if (event.button == 0 && targetNode.type.spec.draggable && targetNode.type.spec.selectable !== false || selection instanceof import_prosemirror_state.NodeSelection && selection.from <= targetPos && selection.to > targetPos) this.mightDrag = {
      node: targetNode,
      pos: targetPos,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && gecko && !this.target.hasAttribute("contentEditable"))
    };
    if (this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable)) {
      this.view.domObserver.stop();
      if (this.mightDrag.addAttr) this.target.draggable = true;
      if (this.mightDrag.setUneditable) setTimeout(() => {
        if (this.view.input.mouseDown == this) this.target.setAttribute("contentEditable", "false");
      }, 20);
      this.view.domObserver.start();
    }
    view.root.addEventListener("mouseup", this.up = this.up.bind(this));
    view.root.addEventListener("mousemove", this.move = this.move.bind(this));
    setSelectionOrigin(view, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up);
    this.view.root.removeEventListener("mousemove", this.move);
    if (this.mightDrag && this.target) {
      this.view.domObserver.stop();
      if (this.mightDrag.addAttr) this.target.removeAttribute("draggable");
      if (this.mightDrag.setUneditable) this.target.removeAttribute("contentEditable");
      this.view.domObserver.start();
    }
    if (this.delayedSelectionSync) setTimeout(() => selectionToDOM(this.view));
    this.view.input.mouseDown = null;
  }
  up(event) {
    this.done();
    if (!this.view.dom.contains(event.target)) return;
    let pos = this.pos;
    if (this.view.state.doc != this.startDoc) pos = this.view.posAtCoords(eventCoords(event));
    this.updateAllowDefault(event);
    if (this.allowDefault || !pos) {
      setSelectionOrigin(this.view, "pointer");
    } else if (handleSingleClick(this.view, pos.pos, pos.inside, event, this.selectNode)) {
      event.preventDefault();
    } else if (event.button == 0 && (this.flushed || safari && this.mightDrag && !this.mightDrag.node.isAtom || chrome && !this.view.state.selection.visible && Math.min(Math.abs(pos.pos - this.view.state.selection.from), Math.abs(pos.pos - this.view.state.selection.to)) <= 2)) {
      updateSelection(this.view, import_prosemirror_state.Selection.near(this.view.state.doc.resolve(pos.pos)), "pointer");
      event.preventDefault();
    } else {
      setSelectionOrigin(this.view, "pointer");
    }
  }
  move(event) {
    this.updateAllowDefault(event);
    setSelectionOrigin(this.view, "pointer");
    if (event.buttons == 0) this.done();
  }
  updateAllowDefault(event) {
    if (!this.allowDefault && (Math.abs(this.event.x - event.clientX) > 4 || Math.abs(this.event.y - event.clientY) > 4)) this.allowDefault = true;
  }
};
handlers.touchstart = view => {
  view.input.lastTouch = Date.now();
  forceDOMFlush(view);
  setSelectionOrigin(view, "pointer");
};
handlers.touchmove = view => {
  view.input.lastTouch = Date.now();
  setSelectionOrigin(view, "pointer");
};
handlers.contextmenu = view => forceDOMFlush(view);
function inOrNearComposition(view, event) {
  if (view.composing) return true;
  if (safari && Math.abs(event.timeStamp - view.input.compositionEndedAt) < 500) {
    view.input.compositionEndedAt = -2e8;
    return true;
  }
  return false;
}
var timeoutComposition = android ? 5e3 : -1;
editHandlers.compositionstart = editHandlers.compositionupdate = view => {
  if (!view.composing) {
    view.domObserver.flush();
    let {
        state
      } = view,
      $pos = state.selection.$to;
    if (state.selection instanceof import_prosemirror_state.TextSelection && (state.storedMarks || !$pos.textOffset && $pos.parentOffset && $pos.nodeBefore.marks.some(m => m.type.spec.inclusive === false))) {
      view.markCursor = view.state.storedMarks || $pos.marks();
      endComposition(view, true);
      view.markCursor = null;
    } else {
      endComposition(view, !state.selection.empty);
      if (gecko && state.selection.empty && $pos.parentOffset && !$pos.textOffset && $pos.nodeBefore.marks.length) {
        let sel = view.domSelectionRange();
        for (let node = sel.focusNode, offset = sel.focusOffset; node && node.nodeType == 1 && offset != 0;) {
          let before = offset < 0 ? node.lastChild : node.childNodes[offset - 1];
          if (!before) break;
          if (before.nodeType == 3) {
            let sel2 = view.domSelection();
            if (sel2) sel2.collapse(before, before.nodeValue.length);
            break;
          } else {
            node = before;
            offset = -1;
          }
        }
      }
    }
    view.input.composing = true;
  }
  scheduleComposeEnd(view, timeoutComposition);
};
editHandlers.compositionend = (view, event) => {
  if (view.composing) {
    view.input.composing = false;
    view.input.compositionEndedAt = event.timeStamp;
    view.input.compositionPendingChanges = view.domObserver.pendingRecords().length ? view.input.compositionID : 0;
    view.input.compositionNode = null;
    if (view.input.compositionPendingChanges) Promise.resolve().then(() => view.domObserver.flush());
    view.input.compositionID++;
    scheduleComposeEnd(view, 20);
  }
};
function scheduleComposeEnd(view, delay) {
  clearTimeout(view.input.composingTimeout);
  if (delay > -1) view.input.composingTimeout = setTimeout(() => endComposition(view), delay);
}
function clearComposition(view) {
  if (view.composing) {
    view.input.composing = false;
    view.input.compositionEndedAt = timestampFromCustomEvent();
  }
  while (view.input.compositionNodes.length > 0) view.input.compositionNodes.pop().markParentsDirty();
}
function findCompositionNode(view) {
  let sel = view.domSelectionRange();
  if (!sel.focusNode) return null;
  let textBefore = textNodeBefore$1(sel.focusNode, sel.focusOffset);
  let textAfter = textNodeAfter$1(sel.focusNode, sel.focusOffset);
  if (textBefore && textAfter && textBefore != textAfter) {
    let descAfter = textAfter.pmViewDesc,
      lastChanged = view.domObserver.lastChangedTextNode;
    if (textBefore == lastChanged || textAfter == lastChanged) return lastChanged;
    if (!descAfter || !descAfter.isText(textAfter.nodeValue)) {
      return textAfter;
    } else if (view.input.compositionNode == textAfter) {
      let descBefore = textBefore.pmViewDesc;
      if (!(!descBefore || !descBefore.isText(textBefore.nodeValue))) return textAfter;
    }
  }
  return textBefore || textAfter;
}
function timestampFromCustomEvent() {
  let event = document.createEvent("Event");
  event.initEvent("event", true, true);
  return event.timeStamp;
}
function endComposition(view, restarting = false) {
  if (android && view.domObserver.flushingSoon >= 0) return;
  view.domObserver.forceFlush();
  clearComposition(view);
  if (restarting || view.docView && view.docView.dirty) {
    let sel = selectionFromDOM(view),
      cur = view.state.selection;
    if (sel && !sel.eq(cur)) view.dispatch(view.state.tr.setSelection(sel));else if ((view.markCursor || restarting) && !cur.$from.node(cur.$from.sharedDepth(cur.to)).inlineContent) view.dispatch(view.state.tr.deleteSelection());else view.updateState(view.state);
    return true;
  }
  return false;
}
function captureCopy(view, dom) {
  if (!view.dom.parentNode) return;
  let wrap = view.dom.parentNode.appendChild(document.createElement("div"));
  wrap.appendChild(dom);
  wrap.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let sel = getSelection(),
    range = document.createRange();
  range.selectNodeContents(dom);
  view.dom.blur();
  sel.removeAllRanges();
  sel.addRange(range);
  setTimeout(() => {
    if (wrap.parentNode) wrap.parentNode.removeChild(wrap);
    view.focus();
  }, 50);
}
var brokenClipboardAPI = ie && ie_version < 15 || ios && webkit_version < 604;
handlers.copy = editHandlers.cut = (view, _event) => {
  let event = _event;
  let sel = view.state.selection,
    cut = event.type == "cut";
  if (sel.empty) return;
  let data = brokenClipboardAPI ? null : event.clipboardData;
  let slice = sel.content(),
    {
      dom,
      text
    } = serializeForClipboard(view, slice);
  if (data) {
    event.preventDefault();
    data.clearData();
    data.setData("text/html", dom.innerHTML);
    data.setData("text/plain", text);
  } else {
    captureCopy(view, dom);
  }
  if (cut) view.dispatch(view.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function sliceSingleNode(slice) {
  return slice.openStart == 0 && slice.openEnd == 0 && slice.content.childCount == 1 ? slice.content.firstChild : null;
}
function capturePaste(view, event) {
  if (!view.dom.parentNode) return;
  let plainText = view.input.shiftKey || view.state.selection.$from.parent.type.spec.code;
  let target = view.dom.parentNode.appendChild(document.createElement(plainText ? "textarea" : "div"));
  if (!plainText) target.contentEditable = "true";
  target.style.cssText = "position: fixed; left: -10000px; top: 10px";
  target.focus();
  let plain = view.input.shiftKey && view.input.lastKeyCode != 45;
  setTimeout(() => {
    view.focus();
    if (target.parentNode) target.parentNode.removeChild(target);
    if (plainText) doPaste(view, target.value, null, plain, event);else doPaste(view, target.textContent, target.innerHTML, plain, event);
  }, 50);
}
function doPaste(view, text, html, preferPlain, event) {
  let slice = parseFromClipboard(view, text, html, preferPlain, view.state.selection.$from);
  if (view.someProp("handlePaste", f => f(view, event, slice || import_prosemirror_model.Slice.empty))) return true;
  if (!slice) return false;
  let singleNode = sliceSingleNode(slice);
  let tr = singleNode ? view.state.tr.replaceSelectionWith(singleNode, preferPlain) : view.state.tr.replaceSelection(slice);
  view.dispatch(tr.scrollIntoView().setMeta("paste", true).setMeta("uiEvent", "paste"));
  return true;
}
function getText(clipboardData) {
  let text = clipboardData.getData("text/plain") || clipboardData.getData("Text");
  if (text) return text;
  let uris = clipboardData.getData("text/uri-list");
  return uris ? uris.replace(/\r?\n/g, " ") : "";
}
editHandlers.paste = (view, _event) => {
  let event = _event;
  if (view.composing && !android) return;
  let data = brokenClipboardAPI ? null : event.clipboardData;
  let plain = view.input.shiftKey && view.input.lastKeyCode != 45;
  if (data && doPaste(view, getText(data), data.getData("text/html"), plain, event)) event.preventDefault();else capturePaste(view, event);
};
var Dragging = class {
  constructor(slice, move, node) {
    this.slice = slice;
    this.move = move;
    this.node = node;
  }
};
var dragCopyModifier = mac ? "altKey" : "ctrlKey";
function dragMoves(view, event) {
  let moves = view.someProp("dragCopies", test => !test(event));
  return moves != null ? moves : !event[dragCopyModifier];
}
handlers.dragstart = (view, _event) => {
  let event = _event;
  let mouseDown = view.input.mouseDown;
  if (mouseDown) mouseDown.done();
  if (!event.dataTransfer) return;
  let sel = view.state.selection;
  let pos = sel.empty ? null : view.posAtCoords(eventCoords(event));
  let node;
  if (pos && pos.pos >= sel.from && pos.pos <= (sel instanceof import_prosemirror_state.NodeSelection ? sel.to - 1 : sel.to)) ;else if (mouseDown && mouseDown.mightDrag) {
    node = import_prosemirror_state.NodeSelection.create(view.state.doc, mouseDown.mightDrag.pos);
  } else if (event.target && event.target.nodeType == 1) {
    let desc = view.docView.nearestDesc(event.target, true);
    if (desc && desc.node.type.spec.draggable && desc != view.docView) node = import_prosemirror_state.NodeSelection.create(view.state.doc, desc.posBefore);
  }
  let draggedSlice = (node || view.state.selection).content();
  let {
    dom,
    text,
    slice
  } = serializeForClipboard(view, draggedSlice);
  if (!event.dataTransfer.files.length || !chrome || chrome_version > 120) event.dataTransfer.clearData();
  event.dataTransfer.setData(brokenClipboardAPI ? "Text" : "text/html", dom.innerHTML);
  event.dataTransfer.effectAllowed = "copyMove";
  if (!brokenClipboardAPI) event.dataTransfer.setData("text/plain", text);
  view.dragging = new Dragging(slice, dragMoves(view, event), node);
};
handlers.dragend = view => {
  let dragging = view.dragging;
  window.setTimeout(() => {
    if (view.dragging == dragging) view.dragging = null;
  }, 50);
};
editHandlers.dragover = editHandlers.dragenter = (_, e) => e.preventDefault();
editHandlers.drop = (view, _event) => {
  let event = _event;
  let dragging = view.dragging;
  view.dragging = null;
  if (!event.dataTransfer) return;
  let eventPos = view.posAtCoords(eventCoords(event));
  if (!eventPos) return;
  let $mouse = view.state.doc.resolve(eventPos.pos);
  let slice = dragging && dragging.slice;
  if (slice) {
    view.someProp("transformPasted", f => {
      slice = f(slice, view);
    });
  } else {
    slice = parseFromClipboard(view, getText(event.dataTransfer), brokenClipboardAPI ? null : event.dataTransfer.getData("text/html"), false, $mouse);
  }
  let move = !!(dragging && dragMoves(view, event));
  if (view.someProp("handleDrop", f => f(view, event, slice || import_prosemirror_model.Slice.empty, move))) {
    event.preventDefault();
    return;
  }
  if (!slice) return;
  event.preventDefault();
  let insertPos = slice ? (0, import_prosemirror_transform.dropPoint)(view.state.doc, $mouse.pos, slice) : $mouse.pos;
  if (insertPos == null) insertPos = $mouse.pos;
  let tr = view.state.tr;
  if (move) {
    let {
      node
    } = dragging;
    if (node) node.replace(tr);else tr.deleteSelection();
  }
  let pos = tr.mapping.map(insertPos);
  let isNode = slice.openStart == 0 && slice.openEnd == 0 && slice.content.childCount == 1;
  let beforeInsert = tr.doc;
  if (isNode) tr.replaceRangeWith(pos, pos, slice.content.firstChild);else tr.replaceRange(pos, pos, slice);
  if (tr.doc.eq(beforeInsert)) return;
  let $pos = tr.doc.resolve(pos);
  if (isNode && import_prosemirror_state.NodeSelection.isSelectable(slice.content.firstChild) && $pos.nodeAfter && $pos.nodeAfter.sameMarkup(slice.content.firstChild)) {
    tr.setSelection(new import_prosemirror_state.NodeSelection($pos));
  } else {
    let end = tr.mapping.map(insertPos);
    tr.mapping.maps[tr.mapping.maps.length - 1].forEach((_from, _to, _newFrom, newTo) => end = newTo);
    tr.setSelection(selectionBetween(view, $pos, tr.doc.resolve(end)));
  }
  view.focus();
  view.dispatch(tr.setMeta("uiEvent", "drop"));
};
handlers.focus = view => {
  view.input.lastFocus = Date.now();
  if (!view.focused) {
    view.domObserver.stop();
    view.dom.classList.add("ProseMirror-focused");
    view.domObserver.start();
    view.focused = true;
    setTimeout(() => {
      if (view.docView && view.hasFocus() && !view.domObserver.currentSelection.eq(view.domSelectionRange())) selectionToDOM(view);
    }, 20);
  }
};
handlers.blur = (view, _event) => {
  let event = _event;
  if (view.focused) {
    view.domObserver.stop();
    view.dom.classList.remove("ProseMirror-focused");
    view.domObserver.start();
    if (event.relatedTarget && view.dom.contains(event.relatedTarget)) view.domObserver.currentSelection.clear();
    view.focused = false;
  }
};
handlers.beforeinput = (view, _event) => {
  let event = _event;
  if (chrome && android && event.inputType == "deleteContentBackward") {
    view.domObserver.flushSoon();
    let {
      domChangeCount
    } = view.input;
    setTimeout(() => {
      if (view.input.domChangeCount != domChangeCount) return;
      view.dom.blur();
      view.focus();
      if (view.someProp("handleKeyDown", f => f(view, keyEvent(8, "Backspace")))) return;
      let {
        $cursor
      } = view.state.selection;
      if ($cursor && $cursor.pos > 0) view.dispatch(view.state.tr.delete($cursor.pos - 1, $cursor.pos).scrollIntoView());
    }, 50);
  }
};
for (let prop in editHandlers) handlers[prop] = editHandlers[prop];
function compareObjs(a, b) {
  if (a == b) return true;
  for (let p in a) if (a[p] !== b[p]) return false;
  for (let p in b) if (!(p in a)) return false;
  return true;
}
var WidgetType = class {
  constructor(toDOM, spec) {
    this.toDOM = toDOM;
    this.spec = spec || noSpec;
    this.side = this.spec.side || 0;
  }
  map(mapping, span, offset, oldOffset) {
    let {
      pos,
      deleted
    } = mapping.mapResult(span.from + oldOffset, this.side < 0 ? -1 : 1);
    return deleted ? null : new Decoration(pos - offset, pos - offset, this);
  }
  valid() {
    return true;
  }
  eq(other) {
    return this == other || other instanceof WidgetType && (this.spec.key && this.spec.key == other.spec.key || this.toDOM == other.toDOM && compareObjs(this.spec, other.spec));
  }
  destroy(node) {
    if (this.spec.destroy) this.spec.destroy(node);
  }
};
var InlineType = class {
  constructor(attrs, spec) {
    this.attrs = attrs;
    this.spec = spec || noSpec;
  }
  map(mapping, span, offset, oldOffset) {
    let from = mapping.map(span.from + oldOffset, this.spec.inclusiveStart ? -1 : 1) - offset;
    let to = mapping.map(span.to + oldOffset, this.spec.inclusiveEnd ? 1 : -1) - offset;
    return from >= to ? null : new Decoration(from, to, this);
  }
  valid(_, span) {
    return span.from < span.to;
  }
  eq(other) {
    return this == other || other instanceof InlineType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
  }
  static is(span) {
    return span.type instanceof InlineType;
  }
  destroy() {}
};
var NodeType = class {
  constructor(attrs, spec) {
    this.attrs = attrs;
    this.spec = spec || noSpec;
  }
  map(mapping, span, offset, oldOffset) {
    let from = mapping.mapResult(span.from + oldOffset, 1);
    if (from.deleted) return null;
    let to = mapping.mapResult(span.to + oldOffset, -1);
    if (to.deleted || to.pos <= from.pos) return null;
    return new Decoration(from.pos - offset, to.pos - offset, this);
  }
  valid(node, span) {
    let {
        index,
        offset
      } = node.content.findIndex(span.from),
      child;
    return offset == span.from && !(child = node.child(index)).isText && offset + child.nodeSize == span.to;
  }
  eq(other) {
    return this == other || other instanceof NodeType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
  }
  destroy() {}
};
var Decoration = class {
  constructor(from, to, type) {
    this.from = from;
    this.to = to;
    this.type = type;
  }
  copy(from, to) {
    return new Decoration(from, to, this.type);
  }
  eq(other, offset = 0) {
    return this.type.eq(other.type) && this.from + offset == other.from && this.to + offset == other.to;
  }
  map(mapping, offset, oldOffset) {
    return this.type.map(mapping, this, offset, oldOffset);
  }
  static widget(pos, toDOM, spec) {
    return new Decoration(pos, pos, new WidgetType(toDOM, spec));
  }
  static inline(from, to, attrs, spec) {
    return new Decoration(from, to, new InlineType(attrs, spec));
  }
  static node(from, to, attrs, spec) {
    return new Decoration(from, to, new NodeType(attrs, spec));
  }
  get spec() {
    return this.type.spec;
  }
  get inline() {
    return this.type instanceof InlineType;
  }
  get widget() {
    return this.type instanceof WidgetType;
  }
};
var none = [],
  noSpec = {};
var DecorationSet = class {
  constructor(local, children) {
    this.local = local.length ? local : none;
    this.children = children.length ? children : none;
  }
  static create(doc2, decorations) {
    return decorations.length ? buildTree(decorations, doc2, 0, noSpec) : empty;
  }
  find(start, end, predicate) {
    let result = [];
    this.findInner(start == null ? 0 : start, end == null ? 1e9 : end, result, 0, predicate);
    return result;
  }
  findInner(start, end, result, offset, predicate) {
    for (let i = 0; i < this.local.length; i++) {
      let span = this.local[i];
      if (span.from <= end && span.to >= start && (!predicate || predicate(span.spec))) result.push(span.copy(span.from + offset, span.to + offset));
    }
    for (let i = 0; i < this.children.length; i += 3) {
      if (this.children[i] < end && this.children[i + 1] > start) {
        let childOff = this.children[i] + 1;
        this.children[i + 2].findInner(start - childOff, end - childOff, result, offset + childOff, predicate);
      }
    }
  }
  map(mapping, doc2, options) {
    if (this == empty || mapping.maps.length == 0) return this;
    return this.mapInner(mapping, doc2, 0, 0, options || noSpec);
  }
  mapInner(mapping, node, offset, oldOffset, options) {
    let newLocal;
    for (let i = 0; i < this.local.length; i++) {
      let mapped = this.local[i].map(mapping, offset, oldOffset);
      if (mapped && mapped.type.valid(node, mapped)) (newLocal || (newLocal = [])).push(mapped);else if (options.onRemove) options.onRemove(this.local[i].spec);
    }
    if (this.children.length) return mapChildren(this.children, newLocal || [], mapping, node, offset, oldOffset, options);else return newLocal ? new DecorationSet(newLocal.sort(byPos), none) : empty;
  }
  add(doc2, decorations) {
    if (!decorations.length) return this;
    if (this == empty) return DecorationSet.create(doc2, decorations);
    return this.addInner(doc2, decorations, 0);
  }
  addInner(doc2, decorations, offset) {
    let children,
      childIndex = 0;
    doc2.forEach((childNode, childOffset) => {
      let baseOffset = childOffset + offset,
        found;
      if (!(found = takeSpansForNode(decorations, childNode, baseOffset))) return;
      if (!children) children = this.children.slice();
      while (childIndex < children.length && children[childIndex] < childOffset) childIndex += 3;
      if (children[childIndex] == childOffset) children[childIndex + 2] = children[childIndex + 2].addInner(childNode, found, baseOffset + 1);else children.splice(childIndex, 0, childOffset, childOffset + childNode.nodeSize, buildTree(found, childNode, baseOffset + 1, noSpec));
      childIndex += 3;
    });
    let local = moveSpans(childIndex ? withoutNulls(decorations) : decorations, -offset);
    for (let i = 0; i < local.length; i++) if (!local[i].type.valid(doc2, local[i])) local.splice(i--, 1);
    return new DecorationSet(local.length ? this.local.concat(local).sort(byPos) : this.local, children || this.children);
  }
  remove(decorations) {
    if (decorations.length == 0 || this == empty) return this;
    return this.removeInner(decorations, 0);
  }
  removeInner(decorations, offset) {
    let children = this.children,
      local = this.local;
    for (let i = 0; i < children.length; i += 3) {
      let found;
      let from = children[i] + offset,
        to = children[i + 1] + offset;
      for (let j = 0, span; j < decorations.length; j++) if (span = decorations[j]) {
        if (span.from > from && span.to < to) {
          decorations[j] = null;
          (found || (found = [])).push(span);
        }
      }
      if (!found) continue;
      if (children == this.children) children = this.children.slice();
      let removed = children[i + 2].removeInner(found, from + 1);
      if (removed != empty) {
        children[i + 2] = removed;
      } else {
        children.splice(i, 3);
        i -= 3;
      }
    }
    if (local.length) {
      for (let i = 0, span; i < decorations.length; i++) if (span = decorations[i]) {
        for (let j = 0; j < local.length; j++) if (local[j].eq(span, offset)) {
          if (local == this.local) local = this.local.slice();
          local.splice(j--, 1);
        }
      }
    }
    if (children == this.children && local == this.local) return this;
    return local.length || children.length ? new DecorationSet(local, children) : empty;
  }
  forChild(offset, node) {
    if (this == empty) return this;
    if (node.isLeaf) return DecorationSet.empty;
    let child, local;
    for (let i = 0; i < this.children.length; i += 3) if (this.children[i] >= offset) {
      if (this.children[i] == offset) child = this.children[i + 2];
      break;
    }
    let start = offset + 1,
      end = start + node.content.size;
    for (let i = 0; i < this.local.length; i++) {
      let dec = this.local[i];
      if (dec.from < end && dec.to > start && dec.type instanceof InlineType) {
        let from = Math.max(start, dec.from) - start,
          to = Math.min(end, dec.to) - start;
        if (from < to) (local || (local = [])).push(dec.copy(from, to));
      }
    }
    if (local) {
      let localSet = new DecorationSet(local.sort(byPos), none);
      return child ? new DecorationGroup([localSet, child]) : localSet;
    }
    return child || empty;
  }
  eq(other) {
    if (this == other) return true;
    if (!(other instanceof DecorationSet) || this.local.length != other.local.length || this.children.length != other.children.length) return false;
    for (let i = 0; i < this.local.length; i++) if (!this.local[i].eq(other.local[i])) return false;
    for (let i = 0; i < this.children.length; i += 3) if (this.children[i] != other.children[i] || this.children[i + 1] != other.children[i + 1] || !this.children[i + 2].eq(other.children[i + 2])) return false;
    return true;
  }
  locals(node) {
    return removeOverlap(this.localsInner(node));
  }
  localsInner(node) {
    if (this == empty) return none;
    if (node.inlineContent || !this.local.some(InlineType.is)) return this.local;
    let result = [];
    for (let i = 0; i < this.local.length; i++) {
      if (!(this.local[i].type instanceof InlineType)) result.push(this.local[i]);
    }
    return result;
  }
  forEachSet(f) {
    f(this);
  }
};
DecorationSet.empty = new DecorationSet([], []);
DecorationSet.removeOverlap = removeOverlap;
var empty = DecorationSet.empty;
var DecorationGroup = class {
  constructor(members) {
    this.members = members;
  }
  map(mapping, doc2) {
    const mappedDecos = this.members.map(member => member.map(mapping, doc2, noSpec));
    return DecorationGroup.from(mappedDecos);
  }
  forChild(offset, child) {
    if (child.isLeaf) return DecorationSet.empty;
    let found = [];
    for (let i = 0; i < this.members.length; i++) {
      let result = this.members[i].forChild(offset, child);
      if (result == empty) continue;
      if (result instanceof DecorationGroup) found = found.concat(result.members);else found.push(result);
    }
    return DecorationGroup.from(found);
  }
  eq(other) {
    if (!(other instanceof DecorationGroup) || other.members.length != this.members.length) return false;
    for (let i = 0; i < this.members.length; i++) if (!this.members[i].eq(other.members[i])) return false;
    return true;
  }
  locals(node) {
    let result,
      sorted = true;
    for (let i = 0; i < this.members.length; i++) {
      let locals = this.members[i].localsInner(node);
      if (!locals.length) continue;
      if (!result) {
        result = locals;
      } else {
        if (sorted) {
          result = result.slice();
          sorted = false;
        }
        for (let j = 0; j < locals.length; j++) result.push(locals[j]);
      }
    }
    return result ? removeOverlap(sorted ? result : result.sort(byPos)) : none;
  }
  static from(members) {
    switch (members.length) {
      case 0:
        return empty;
      case 1:
        return members[0];
      default:
        return new DecorationGroup(members.every(m => m instanceof DecorationSet) ? members : members.reduce((r, m) => r.concat(m instanceof DecorationSet ? m : m.members), []));
    }
  }
  forEachSet(f) {
    for (let i = 0; i < this.members.length; i++) this.members[i].forEachSet(f);
  }
};
function mapChildren(oldChildren, newLocal, mapping, node, offset, oldOffset, options) {
  let children = oldChildren.slice();
  for (let i = 0, baseOffset = oldOffset; i < mapping.maps.length; i++) {
    let moved = 0;
    mapping.maps[i].forEach((oldStart, oldEnd, newStart, newEnd) => {
      let dSize = newEnd - newStart - (oldEnd - oldStart);
      for (let i2 = 0; i2 < children.length; i2 += 3) {
        let end = children[i2 + 1];
        if (end < 0 || oldStart > end + baseOffset - moved) continue;
        let start = children[i2] + baseOffset - moved;
        if (oldEnd >= start) {
          children[i2 + 1] = oldStart <= start ? -2 : -1;
        } else if (oldStart >= baseOffset && dSize) {
          children[i2] += dSize;
          children[i2 + 1] += dSize;
        }
      }
      moved += dSize;
    });
    baseOffset = mapping.maps[i].map(baseOffset, -1);
  }
  let mustRebuild = false;
  for (let i = 0; i < children.length; i += 3) if (children[i + 1] < 0) {
    if (children[i + 1] == -2) {
      mustRebuild = true;
      children[i + 1] = -1;
      continue;
    }
    let from = mapping.map(oldChildren[i] + oldOffset),
      fromLocal = from - offset;
    if (fromLocal < 0 || fromLocal >= node.content.size) {
      mustRebuild = true;
      continue;
    }
    let to = mapping.map(oldChildren[i + 1] + oldOffset, -1),
      toLocal = to - offset;
    let {
      index,
      offset: childOffset
    } = node.content.findIndex(fromLocal);
    let childNode = node.maybeChild(index);
    if (childNode && childOffset == fromLocal && childOffset + childNode.nodeSize == toLocal) {
      let mapped = children[i + 2].mapInner(mapping, childNode, from + 1, oldChildren[i] + oldOffset + 1, options);
      if (mapped != empty) {
        children[i] = fromLocal;
        children[i + 1] = toLocal;
        children[i + 2] = mapped;
      } else {
        children[i + 1] = -2;
        mustRebuild = true;
      }
    } else {
      mustRebuild = true;
    }
  }
  if (mustRebuild) {
    let decorations = mapAndGatherRemainingDecorations(children, oldChildren, newLocal, mapping, offset, oldOffset, options);
    let built = buildTree(decorations, node, 0, options);
    newLocal = built.local;
    for (let i = 0; i < children.length; i += 3) if (children[i + 1] < 0) {
      children.splice(i, 3);
      i -= 3;
    }
    for (let i = 0, j = 0; i < built.children.length; i += 3) {
      let from = built.children[i];
      while (j < children.length && children[j] < from) j += 3;
      children.splice(j, 0, built.children[i], built.children[i + 1], built.children[i + 2]);
    }
  }
  return new DecorationSet(newLocal.sort(byPos), children);
}
function moveSpans(spans, offset) {
  if (!offset || !spans.length) return spans;
  let result = [];
  for (let i = 0; i < spans.length; i++) {
    let span = spans[i];
    result.push(new Decoration(span.from + offset, span.to + offset, span.type));
  }
  return result;
}
function mapAndGatherRemainingDecorations(children, oldChildren, decorations, mapping, offset, oldOffset, options) {
  function gather(set, oldOffset2) {
    for (let i = 0; i < set.local.length; i++) {
      let mapped = set.local[i].map(mapping, offset, oldOffset2);
      if (mapped) decorations.push(mapped);else if (options.onRemove) options.onRemove(set.local[i].spec);
    }
    for (let i = 0; i < set.children.length; i += 3) gather(set.children[i + 2], set.children[i] + oldOffset2 + 1);
  }
  for (let i = 0; i < children.length; i += 3) if (children[i + 1] == -1) gather(children[i + 2], oldChildren[i] + oldOffset + 1);
  return decorations;
}
function takeSpansForNode(spans, node, offset) {
  if (node.isLeaf) return null;
  let end = offset + node.nodeSize,
    found = null;
  for (let i = 0, span; i < spans.length; i++) {
    if ((span = spans[i]) && span.from > offset && span.to < end) {
      (found || (found = [])).push(span);
      spans[i] = null;
    }
  }
  return found;
}
function withoutNulls(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) if (array[i] != null) result.push(array[i]);
  return result;
}
function buildTree(spans, node, offset, options) {
  let children = [],
    hasNulls = false;
  node.forEach((childNode, localStart) => {
    let found = takeSpansForNode(spans, childNode, localStart + offset);
    if (found) {
      hasNulls = true;
      let subtree = buildTree(found, childNode, offset + localStart + 1, options);
      if (subtree != empty) children.push(localStart, localStart + childNode.nodeSize, subtree);
    }
  });
  let locals = moveSpans(hasNulls ? withoutNulls(spans) : spans, -offset).sort(byPos);
  for (let i = 0; i < locals.length; i++) if (!locals[i].type.valid(node, locals[i])) {
    if (options.onRemove) options.onRemove(locals[i].spec);
    locals.splice(i--, 1);
  }
  return locals.length || children.length ? new DecorationSet(locals, children) : empty;
}
function byPos(a, b) {
  return a.from - b.from || a.to - b.to;
}
function removeOverlap(spans) {
  let working = spans;
  for (let i = 0; i < working.length - 1; i++) {
    let span = working[i];
    if (span.from != span.to) for (let j = i + 1; j < working.length; j++) {
      let next = working[j];
      if (next.from == span.from) {
        if (next.to != span.to) {
          if (working == spans) working = spans.slice();
          working[j] = next.copy(next.from, span.to);
          insertAhead(working, j + 1, next.copy(span.to, next.to));
        }
        continue;
      } else {
        if (next.from < span.to) {
          if (working == spans) working = spans.slice();
          working[i] = span.copy(span.from, next.from);
          insertAhead(working, j, span.copy(next.from, span.to));
        }
        break;
      }
    }
  }
  return working;
}
function insertAhead(array, i, deco) {
  while (i < array.length && byPos(deco, array[i]) > 0) i++;
  array.splice(i, 0, deco);
}
function viewDecorations(view) {
  let found = [];
  view.someProp("decorations", f => {
    let result = f(view.state);
    if (result && result != empty) found.push(result);
  });
  if (view.cursorWrapper) found.push(DecorationSet.create(view.state.doc, [view.cursorWrapper.deco]));
  return DecorationGroup.from(found);
}
var observeOptions = {
  childList: true,
  characterData: true,
  characterDataOldValue: true,
  attributes: true,
  attributeOldValue: true,
  subtree: true
};
var useCharData = ie && ie_version <= 11;
var SelectionState = class {
  constructor() {
    this.anchorNode = null;
    this.anchorOffset = 0;
    this.focusNode = null;
    this.focusOffset = 0;
  }
  set(sel) {
    this.anchorNode = sel.anchorNode;
    this.anchorOffset = sel.anchorOffset;
    this.focusNode = sel.focusNode;
    this.focusOffset = sel.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(sel) {
    return sel.anchorNode == this.anchorNode && sel.anchorOffset == this.anchorOffset && sel.focusNode == this.focusNode && sel.focusOffset == this.focusOffset;
  }
};
var DOMObserver = class {
  constructor(view, handleDOMChange) {
    this.view = view;
    this.handleDOMChange = handleDOMChange;
    this.queue = [];
    this.flushingSoon = -1;
    this.observer = null;
    this.currentSelection = new SelectionState();
    this.onCharData = null;
    this.suppressingSelectionUpdates = false;
    this.lastChangedTextNode = null;
    this.observer = window.MutationObserver && new window.MutationObserver(mutations => {
      for (let i = 0; i < mutations.length; i++) this.queue.push(mutations[i]);
      if (ie && ie_version <= 11 && mutations.some(m => m.type == "childList" && m.removedNodes.length || m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length)) this.flushSoon();else this.flush();
    });
    if (useCharData) {
      this.onCharData = e => {
        this.queue.push({
          target: e.target,
          type: "characterData",
          oldValue: e.prevValue
        });
        this.flushSoon();
      };
    }
    this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    if (this.flushingSoon < 0) this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1;
      this.flush();
    }, 20);
  }
  forceFlush() {
    if (this.flushingSoon > -1) {
      window.clearTimeout(this.flushingSoon);
      this.flushingSoon = -1;
      this.flush();
    }
  }
  start() {
    if (this.observer) {
      this.observer.takeRecords();
      this.observer.observe(this.view.dom, observeOptions);
    }
    if (this.onCharData) this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
    this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let take = this.observer.takeRecords();
      if (take.length) {
        for (let i = 0; i < take.length; i++) this.queue.push(take[i]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    if (this.onCharData) this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
    this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = true;
    setTimeout(() => this.suppressingSelectionUpdates = false, 50);
  }
  onSelectionChange() {
    if (!hasFocusAndSelection(this.view)) return;
    if (this.suppressingSelectionUpdates) return selectionToDOM(this.view);
    if (ie && ie_version <= 11 && !this.view.state.selection.empty) {
      let sel = this.view.domSelectionRange();
      if (sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset)) return this.flushSoon();
    }
    this.flush();
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(sel) {
    if (!sel.focusNode) return true;
    let ancestors = /* @__PURE__ */new Set(),
      container;
    for (let scan = sel.focusNode; scan; scan = parentNode(scan)) ancestors.add(scan);
    for (let scan = sel.anchorNode; scan; scan = parentNode(scan)) if (ancestors.has(scan)) {
      container = scan;
      break;
    }
    let desc = container && this.view.docView.nearestDesc(container);
    if (desc && desc.ignoreMutation({
      type: "selection",
      target: container.nodeType == 3 ? container.parentNode : container
    })) {
      this.setCurSelection();
      return true;
    }
  }
  pendingRecords() {
    if (this.observer) for (let mut of this.observer.takeRecords()) this.queue.push(mut);
    return this.queue;
  }
  flush() {
    let {
      view
    } = this;
    if (!view.docView || this.flushingSoon > -1) return;
    let mutations = this.pendingRecords();
    if (mutations.length) this.queue = [];
    let sel = view.domSelectionRange();
    let newSel = !this.suppressingSelectionUpdates && !this.currentSelection.eq(sel) && hasFocusAndSelection(view) && !this.ignoreSelectionChange(sel);
    let from = -1,
      to = -1,
      typeOver = false,
      added = [];
    if (view.editable) {
      for (let i = 0; i < mutations.length; i++) {
        let result = this.registerMutation(mutations[i], added);
        if (result) {
          from = from < 0 ? result.from : Math.min(result.from, from);
          to = to < 0 ? result.to : Math.max(result.to, to);
          if (result.typeOver) typeOver = true;
        }
      }
    }
    if (gecko && added.length) {
      let brs = added.filter(n => n.nodeName == "BR");
      if (brs.length == 2) {
        let [a, b] = brs;
        if (a.parentNode && a.parentNode.parentNode == b.parentNode) b.remove();else a.remove();
      } else {
        let {
          focusNode
        } = this.currentSelection;
        for (let br of brs) {
          let parent = br.parentNode;
          if (parent && parent.nodeName == "LI" && (!focusNode || blockParent(view, focusNode) != parent)) br.remove();
        }
      }
    }
    let readSel = null;
    if (from < 0 && newSel && view.input.lastFocus > Date.now() - 200 && Math.max(view.input.lastTouch, view.input.lastClick.time) < Date.now() - 300 && selectionCollapsed(sel) && (readSel = selectionFromDOM(view)) && readSel.eq(import_prosemirror_state.Selection.near(view.state.doc.resolve(0), 1))) {
      view.input.lastFocus = 0;
      selectionToDOM(view);
      this.currentSelection.set(sel);
      view.scrollToSelection();
    } else if (from > -1 || newSel) {
      if (from > -1) {
        view.docView.markDirty(from, to);
        checkCSS(view);
      }
      this.handleDOMChange(from, to, typeOver, added);
      if (view.docView && view.docView.dirty) view.updateState(view.state);else if (!this.currentSelection.eq(sel)) selectionToDOM(view);
      this.currentSelection.set(sel);
    }
  }
  registerMutation(mut, added) {
    if (added.indexOf(mut.target) > -1) return null;
    let desc = this.view.docView.nearestDesc(mut.target);
    if (mut.type == "attributes" && (desc == this.view.docView || mut.attributeName == "contenteditable" || mut.attributeName == "style" && !mut.oldValue && !mut.target.getAttribute("style"))) return null;
    if (!desc || desc.ignoreMutation(mut)) return null;
    if (mut.type == "childList") {
      for (let i = 0; i < mut.addedNodes.length; i++) {
        let node = mut.addedNodes[i];
        added.push(node);
        if (node.nodeType == 3) this.lastChangedTextNode = node;
      }
      if (desc.contentDOM && desc.contentDOM != desc.dom && !desc.contentDOM.contains(mut.target)) return {
        from: desc.posBefore,
        to: desc.posAfter
      };
      let prev = mut.previousSibling,
        next = mut.nextSibling;
      if (ie && ie_version <= 11 && mut.addedNodes.length) {
        for (let i = 0; i < mut.addedNodes.length; i++) {
          let {
            previousSibling,
            nextSibling
          } = mut.addedNodes[i];
          if (!previousSibling || Array.prototype.indexOf.call(mut.addedNodes, previousSibling) < 0) prev = previousSibling;
          if (!nextSibling || Array.prototype.indexOf.call(mut.addedNodes, nextSibling) < 0) next = nextSibling;
        }
      }
      let fromOffset = prev && prev.parentNode == mut.target ? domIndex(prev) + 1 : 0;
      let from = desc.localPosFromDOM(mut.target, fromOffset, -1);
      let toOffset = next && next.parentNode == mut.target ? domIndex(next) : mut.target.childNodes.length;
      let to = desc.localPosFromDOM(mut.target, toOffset, 1);
      return {
        from,
        to
      };
    } else if (mut.type == "attributes") {
      return {
        from: desc.posAtStart - desc.border,
        to: desc.posAtEnd + desc.border
      };
    } else {
      this.lastChangedTextNode = mut.target;
      return {
        from: desc.posAtStart,
        to: desc.posAtEnd,
        typeOver: mut.target.nodeValue == mut.oldValue
      };
    }
  }
};
var cssChecked = /* @__PURE__ */new WeakMap();
var cssCheckWarned = false;
function checkCSS(view) {
  if (cssChecked.has(view)) return;
  cssChecked.set(view, null);
  if (["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(view.dom).whiteSpace) !== -1) {
    view.requiresGeckoHackNode = gecko;
    if (cssCheckWarned) return;
    console["warn"]("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.");
    cssCheckWarned = true;
  }
}
function rangeToSelectionRange(view, range) {
  let anchorNode = range.startContainer,
    anchorOffset = range.startOffset;
  let focusNode = range.endContainer,
    focusOffset = range.endOffset;
  let currentAnchor = view.domAtPos(view.state.selection.anchor);
  if (isEquivalentPosition(currentAnchor.node, currentAnchor.offset, focusNode, focusOffset)) [anchorNode, anchorOffset, focusNode, focusOffset] = [focusNode, focusOffset, anchorNode, anchorOffset];
  return {
    anchorNode,
    anchorOffset,
    focusNode,
    focusOffset
  };
}
function safariShadowSelectionRange(view, selection) {
  if (selection.getComposedRanges) {
    let range = selection.getComposedRanges(view.root)[0];
    if (range) return rangeToSelectionRange(view, range);
  }
  let found;
  function read(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    found = event.getTargetRanges()[0];
  }
  view.dom.addEventListener("beforeinput", read, true);
  document.execCommand("indent");
  view.dom.removeEventListener("beforeinput", read, true);
  return found ? rangeToSelectionRange(view, found) : null;
}
function blockParent(view, node) {
  for (let p = node.parentNode; p && p != view.dom; p = p.parentNode) {
    let desc = view.docView.nearestDesc(p, true);
    if (desc && desc.node.isBlock) return p;
  }
  return null;
}
function parseBetween(view, from_, to_) {
  let {
    node: parent,
    fromOffset,
    toOffset,
    from,
    to
  } = view.docView.parseRange(from_, to_);
  let domSel = view.domSelectionRange();
  let find;
  let anchor = domSel.anchorNode;
  if (anchor && view.dom.contains(anchor.nodeType == 1 ? anchor : anchor.parentNode)) {
    find = [{
      node: anchor,
      offset: domSel.anchorOffset
    }];
    if (!selectionCollapsed(domSel)) find.push({
      node: domSel.focusNode,
      offset: domSel.focusOffset
    });
  }
  if (chrome && view.input.lastKeyCode === 8) {
    for (let off = toOffset; off > fromOffset; off--) {
      let node = parent.childNodes[off - 1],
        desc = node.pmViewDesc;
      if (node.nodeName == "BR" && !desc) {
        toOffset = off;
        break;
      }
      if (!desc || desc.size) break;
    }
  }
  let startDoc = view.state.doc;
  let parser = view.someProp("domParser") || import_prosemirror_model.DOMParser.fromSchema(view.state.schema);
  let $from = startDoc.resolve(from);
  let sel = null,
    doc2 = parser.parse(parent, {
      topNode: $from.parent,
      topMatch: $from.parent.contentMatchAt($from.index()),
      topOpen: true,
      from: fromOffset,
      to: toOffset,
      preserveWhitespace: $from.parent.type.whitespace == "pre" ? "full" : true,
      findPositions: find,
      ruleFromNode,
      context: $from
    });
  if (find && find[0].pos != null) {
    let anchor2 = find[0].pos,
      head = find[1] && find[1].pos;
    if (head == null) head = anchor2;
    sel = {
      anchor: anchor2 + from,
      head: head + from
    };
  }
  return {
    doc: doc2,
    sel,
    from,
    to
  };
}
function ruleFromNode(dom) {
  let desc = dom.pmViewDesc;
  if (desc) {
    return desc.parseRule();
  } else if (dom.nodeName == "BR" && dom.parentNode) {
    if (safari && /^(ul|ol)$/i.test(dom.parentNode.nodeName)) {
      let skip = document.createElement("div");
      skip.appendChild(document.createElement("li"));
      return {
        skip
      };
    } else if (dom.parentNode.lastChild == dom || safari && /^(tr|table)$/i.test(dom.parentNode.nodeName)) {
      return {
        ignore: true
      };
    }
  } else if (dom.nodeName == "IMG" && dom.getAttribute("mark-placeholder")) {
    return {
      ignore: true
    };
  }
  return null;
}
var isInline = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function readDOMChange(view, from, to, typeOver, addedNodes) {
  let compositionID = view.input.compositionPendingChanges || (view.composing ? view.input.compositionID : 0);
  view.input.compositionPendingChanges = 0;
  if (from < 0) {
    let origin = view.input.lastSelectionTime > Date.now() - 50 ? view.input.lastSelectionOrigin : null;
    let newSel = selectionFromDOM(view, origin);
    if (newSel && !view.state.selection.eq(newSel)) {
      if (chrome && android && view.input.lastKeyCode === 13 && Date.now() - 100 < view.input.lastKeyCodeTime && view.someProp("handleKeyDown", f => f(view, keyEvent(13, "Enter")))) return;
      let tr = view.state.tr.setSelection(newSel);
      if (origin == "pointer") tr.setMeta("pointer", true);else if (origin == "key") tr.scrollIntoView();
      if (compositionID) tr.setMeta("composition", compositionID);
      view.dispatch(tr);
    }
    return;
  }
  let $before = view.state.doc.resolve(from);
  let shared = $before.sharedDepth(to);
  from = $before.before(shared + 1);
  to = view.state.doc.resolve(to).after(shared + 1);
  let sel = view.state.selection;
  let parse = parseBetween(view, from, to);
  let doc2 = view.state.doc,
    compare = doc2.slice(parse.from, parse.to);
  let preferredPos, preferredSide;
  if (view.input.lastKeyCode === 8 && Date.now() - 100 < view.input.lastKeyCodeTime) {
    preferredPos = view.state.selection.to;
    preferredSide = "end";
  } else {
    preferredPos = view.state.selection.from;
    preferredSide = "start";
  }
  view.input.lastKeyCode = null;
  let change = findDiff(compare.content, parse.doc.content, parse.from, preferredPos, preferredSide);
  if (change) view.input.domChangeCount++;
  if ((ios && view.input.lastIOSEnter > Date.now() - 225 || android) && addedNodes.some(n => n.nodeType == 1 && !isInline.test(n.nodeName)) && (!change || change.endA >= change.endB) && view.someProp("handleKeyDown", f => f(view, keyEvent(13, "Enter")))) {
    view.input.lastIOSEnter = 0;
    return;
  }
  if (!change) {
    if (typeOver && sel instanceof import_prosemirror_state.TextSelection && !sel.empty && sel.$head.sameParent(sel.$anchor) && !view.composing && !(parse.sel && parse.sel.anchor != parse.sel.head)) {
      change = {
        start: sel.from,
        endA: sel.to,
        endB: sel.to
      };
    } else {
      if (parse.sel) {
        let sel2 = resolveSelection(view, view.state.doc, parse.sel);
        if (sel2 && !sel2.eq(view.state.selection)) {
          let tr = view.state.tr.setSelection(sel2);
          if (compositionID) tr.setMeta("composition", compositionID);
          view.dispatch(tr);
        }
      }
      return;
    }
  }
  if (view.state.selection.from < view.state.selection.to && change.start == change.endB && view.state.selection instanceof import_prosemirror_state.TextSelection) {
    if (change.start > view.state.selection.from && change.start <= view.state.selection.from + 2 && view.state.selection.from >= parse.from) {
      change.start = view.state.selection.from;
    } else if (change.endA < view.state.selection.to && change.endA >= view.state.selection.to - 2 && view.state.selection.to <= parse.to) {
      change.endB += view.state.selection.to - change.endA;
      change.endA = view.state.selection.to;
    }
  }
  if (ie && ie_version <= 11 && change.endB == change.start + 1 && change.endA == change.start && change.start > parse.from && parse.doc.textBetween(change.start - parse.from - 1, change.start - parse.from + 1) == " \xA0") {
    change.start--;
    change.endA--;
    change.endB--;
  }
  let $from = parse.doc.resolveNoCache(change.start - parse.from);
  let $to = parse.doc.resolveNoCache(change.endB - parse.from);
  let $fromA = doc2.resolve(change.start);
  let inlineChange = $from.sameParent($to) && $from.parent.inlineContent && $fromA.end() >= change.endA;
  let nextSel;
  if ((ios && view.input.lastIOSEnter > Date.now() - 225 && (!inlineChange || addedNodes.some(n => n.nodeName == "DIV" || n.nodeName == "P")) || !inlineChange && $from.pos < parse.doc.content.size && (!$from.sameParent($to) || !$from.parent.inlineContent) && !/\S/.test(parse.doc.textBetween($from.pos, $to.pos, "", "")) && (nextSel = import_prosemirror_state.Selection.findFrom(parse.doc.resolve($from.pos + 1), 1, true)) && nextSel.head > $from.pos) && view.someProp("handleKeyDown", f => f(view, keyEvent(13, "Enter")))) {
    view.input.lastIOSEnter = 0;
    return;
  }
  if (view.state.selection.anchor > change.start && looksLikeBackspace(doc2, change.start, change.endA, $from, $to) && view.someProp("handleKeyDown", f => f(view, keyEvent(8, "Backspace")))) {
    if (android && chrome) view.domObserver.suppressSelectionUpdates();
    return;
  }
  if (chrome && change.endB == change.start) view.input.lastChromeDelete = Date.now();
  if (android && !inlineChange && $from.start() != $to.start() && $to.parentOffset == 0 && $from.depth == $to.depth && parse.sel && parse.sel.anchor == parse.sel.head && parse.sel.head == change.endA) {
    change.endB -= 2;
    $to = parse.doc.resolveNoCache(change.endB - parse.from);
    setTimeout(() => {
      view.someProp("handleKeyDown", function (f) {
        return f(view, keyEvent(13, "Enter"));
      });
    }, 20);
  }
  let chFrom = change.start,
    chTo = change.endA;
  let mkTr = base => {
    let tr = base || view.state.tr.replace(chFrom, chTo, parse.doc.slice(change.start - parse.from, change.endB - parse.from));
    if (parse.sel) {
      let sel2 = resolveSelection(view, tr.doc, parse.sel);
      if (sel2 && !(chrome && view.composing && sel2.empty && (change.start != change.endB || view.input.lastChromeDelete < Date.now() - 100) && (sel2.head == chFrom || sel2.head == tr.mapping.map(chTo) - 1) || ie && sel2.empty && sel2.head == chFrom)) tr.setSelection(sel2);
    }
    if (compositionID) tr.setMeta("composition", compositionID);
    return tr.scrollIntoView();
  };
  let markChange;
  if (inlineChange) {
    if ($from.pos == $to.pos) {
      if (ie && ie_version <= 11 && $from.parentOffset == 0) {
        view.domObserver.suppressSelectionUpdates();
        setTimeout(() => selectionToDOM(view), 20);
      }
      let tr = mkTr(view.state.tr.delete(chFrom, chTo));
      let marks = doc2.resolve(change.start).marksAcross(doc2.resolve(change.endA));
      if (marks) tr.ensureMarks(marks);
      view.dispatch(tr);
    } else if (change.endA == change.endB && (markChange = isMarkChange($from.parent.content.cut($from.parentOffset, $to.parentOffset), $fromA.parent.content.cut($fromA.parentOffset, change.endA - $fromA.start())))) {
      let tr = mkTr(view.state.tr);
      if (markChange.type == "add") tr.addMark(chFrom, chTo, markChange.mark);else tr.removeMark(chFrom, chTo, markChange.mark);
      view.dispatch(tr);
    } else if ($from.parent.child($from.index()).isText && $from.index() == $to.index() - ($to.textOffset ? 0 : 1)) {
      let text = $from.parent.textBetween($from.parentOffset, $to.parentOffset);
      let deflt = () => mkTr(view.state.tr.insertText(text, chFrom, chTo));
      if (!view.someProp("handleTextInput", f => f(view, chFrom, chTo, text, deflt))) view.dispatch(deflt());
    }
  } else {
    view.dispatch(mkTr());
  }
}
function resolveSelection(view, doc2, parsedSel) {
  if (Math.max(parsedSel.anchor, parsedSel.head) > doc2.content.size) return null;
  return selectionBetween(view, doc2.resolve(parsedSel.anchor), doc2.resolve(parsedSel.head));
}
function isMarkChange(cur, prev) {
  let curMarks = cur.firstChild.marks,
    prevMarks = prev.firstChild.marks;
  let added = curMarks,
    removed = prevMarks,
    type,
    mark,
    update;
  for (let i = 0; i < prevMarks.length; i++) added = prevMarks[i].removeFromSet(added);
  for (let i = 0; i < curMarks.length; i++) removed = curMarks[i].removeFromSet(removed);
  if (added.length == 1 && removed.length == 0) {
    mark = added[0];
    type = "add";
    update = node => node.mark(mark.addToSet(node.marks));
  } else if (added.length == 0 && removed.length == 1) {
    mark = removed[0];
    type = "remove";
    update = node => node.mark(mark.removeFromSet(node.marks));
  } else {
    return null;
  }
  let updated = [];
  for (let i = 0; i < prev.childCount; i++) updated.push(update(prev.child(i)));
  if (import_prosemirror_model.Fragment.from(updated).eq(cur)) return {
    mark,
    type
  };
}
function looksLikeBackspace(old, start, end, $newStart, $newEnd) {
  if (end - start <= $newEnd.pos - $newStart.pos || skipClosingAndOpening($newStart, true, false) < $newEnd.pos) return false;
  let $start = old.resolve(start);
  if (!$newStart.parent.isTextblock) {
    let after = $start.nodeAfter;
    return after != null && end == start + after.nodeSize;
  }
  if ($start.parentOffset < $start.parent.content.size || !$start.parent.isTextblock) return false;
  let $next = old.resolve(skipClosingAndOpening($start, true, true));
  if (!$next.parent.isTextblock || $next.pos > end || skipClosingAndOpening($next, true, false) < end) return false;
  return $newStart.parent.content.cut($newStart.parentOffset).eq($next.parent.content);
}
function skipClosingAndOpening($pos, fromEnd, mayOpen) {
  let depth = $pos.depth,
    end = fromEnd ? $pos.end() : $pos.pos;
  while (depth > 0 && (fromEnd || $pos.indexAfter(depth) == $pos.node(depth).childCount)) {
    depth--;
    end++;
    fromEnd = false;
  }
  if (mayOpen) {
    let next = $pos.node(depth).maybeChild($pos.indexAfter(depth));
    while (next && !next.isLeaf) {
      next = next.firstChild;
      end++;
    }
  }
  return end;
}
function findDiff(a, b, pos, preferredPos, preferredSide) {
  let start = a.findDiffStart(b, pos);
  if (start == null) return null;
  let {
    a: endA,
    b: endB
  } = a.findDiffEnd(b, pos + a.size, pos + b.size);
  if (preferredSide == "end") {
    let adjust = Math.max(0, start - Math.min(endA, endB));
    preferredPos -= endA + adjust - start;
  }
  if (endA < start && a.size < b.size) {
    let move = preferredPos <= start && preferredPos >= endA ? start - preferredPos : 0;
    start -= move;
    if (start && start < b.size && isSurrogatePair(b.textBetween(start - 1, start + 1))) start += move ? 1 : -1;
    endB = start + (endB - endA);
    endA = start;
  } else if (endB < start) {
    let move = preferredPos <= start && preferredPos >= endB ? start - preferredPos : 0;
    start -= move;
    if (start && start < a.size && isSurrogatePair(a.textBetween(start - 1, start + 1))) start += move ? 1 : -1;
    endA = start + (endA - endB);
    endB = start;
  }
  return {
    start,
    endA,
    endB
  };
}
function isSurrogatePair(str) {
  if (str.length != 2) return false;
  let a = str.charCodeAt(0),
    b = str.charCodeAt(1);
  return a >= 56320 && a <= 57343 && b >= 55296 && b <= 56319;
}
var __parseFromClipboard = parseFromClipboard;
var __endComposition = endComposition;
var EditorView = class {
  constructor(place, props) {
    this._root = null;
    this.focused = false;
    this.trackWrites = null;
    this.mounted = false;
    this.markCursor = null;
    this.cursorWrapper = null;
    this.lastSelectedViewDesc = void 0;
    this.input = new InputState();
    this.prevDirectPlugins = [];
    this.pluginViews = [];
    this.requiresGeckoHackNode = false;
    this.dragging = null;
    this._props = props;
    this.state = props.state;
    this.directPlugins = props.plugins || [];
    this.directPlugins.forEach(checkStateComponent);
    this.dispatch = this.dispatch.bind(this);
    this.dom = place && place.mount || document.createElement("div");
    if (place) {
      if (place.appendChild) place.appendChild(this.dom);else if (typeof place == "function") place(this.dom);else if (place.mount) this.mounted = true;
    }
    this.editable = getEditable(this);
    updateCursorWrapper(this);
    this.nodeViews = buildNodeViews(this);
    this.docView = docViewDesc(this.state.doc, computeDocDeco(this), viewDecorations(this), this.dom, this);
    this.domObserver = new DOMObserver(this, (from, to, typeOver, added) => readDOMChange(this, from, to, typeOver, added));
    this.domObserver.start();
    initInput(this);
    this.updatePluginViews();
  }
  get composing() {
    return this.input.composing;
  }
  get props() {
    if (this._props.state != this.state) {
      let prev = this._props;
      this._props = {};
      for (let name in prev) this._props[name] = prev[name];
      this._props.state = this.state;
    }
    return this._props;
  }
  update(props) {
    if (props.handleDOMEvents != this._props.handleDOMEvents) ensureListeners(this);
    let prevProps = this._props;
    this._props = props;
    if (props.plugins) {
      props.plugins.forEach(checkStateComponent);
      this.directPlugins = props.plugins;
    }
    this.updateStateInner(props.state, prevProps);
  }
  setProps(props) {
    let updated = {};
    for (let name in this._props) updated[name] = this._props[name];
    updated.state = this.state;
    for (let name in props) updated[name] = props[name];
    this.update(updated);
  }
  updateState(state) {
    this.updateStateInner(state, this._props);
  }
  updateStateInner(state, prevProps) {
    var _a;
    let prev = this.state,
      redraw = false,
      updateSel = false;
    if (state.storedMarks && this.composing) {
      clearComposition(this);
      updateSel = true;
    }
    this.state = state;
    let pluginsChanged = prev.plugins != state.plugins || this._props.plugins != prevProps.plugins;
    if (pluginsChanged || this._props.plugins != prevProps.plugins || this._props.nodeViews != prevProps.nodeViews) {
      let nodeViews = buildNodeViews(this);
      if (changedNodeViews(nodeViews, this.nodeViews)) {
        this.nodeViews = nodeViews;
        redraw = true;
      }
    }
    if (pluginsChanged || prevProps.handleDOMEvents != this._props.handleDOMEvents) {
      ensureListeners(this);
    }
    this.editable = getEditable(this);
    updateCursorWrapper(this);
    let innerDeco = viewDecorations(this),
      outerDeco = computeDocDeco(this);
    let scroll = prev.plugins != state.plugins && !prev.doc.eq(state.doc) ? "reset" : state.scrollToSelection > prev.scrollToSelection ? "to selection" : "preserve";
    let updateDoc = redraw || !this.docView.matchesNode(state.doc, outerDeco, innerDeco);
    if (updateDoc || !state.selection.eq(prev.selection)) updateSel = true;
    let oldScrollPos = scroll == "preserve" && updateSel && this.dom.style.overflowAnchor == null && storeScrollPos(this);
    if (updateSel) {
      this.domObserver.stop();
      let forceSelUpdate = updateDoc && (ie || chrome) && !this.composing && !prev.selection.empty && !state.selection.empty && selectionContextChanged(prev.selection, state.selection);
      if (updateDoc) {
        let chromeKludge = chrome ? this.trackWrites = this.domSelectionRange().focusNode : null;
        if (this.composing) this.input.compositionNode = findCompositionNode(this);
        if (redraw || !this.docView.update(state.doc, outerDeco, innerDeco, this)) {
          this.docView.updateOuterDeco(outerDeco);
          this.docView.destroy();
          this.docView = docViewDesc(state.doc, outerDeco, innerDeco, this.dom, this);
        }
        if (chromeKludge && !this.trackWrites) forceSelUpdate = true;
      }
      if (forceSelUpdate || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && anchorInRightPlace(this))) {
        selectionToDOM(this, forceSelUpdate);
      } else {
        syncNodeSelection(this, state.selection);
        this.domObserver.setCurSelection();
      }
      this.domObserver.start();
    }
    this.updatePluginViews(prev);
    if (((_a = this.dragging) === null || _a === void 0 ? void 0 : _a.node) && !prev.doc.eq(state.doc)) this.updateDraggedNode(this.dragging, prev);
    if (scroll == "reset") {
      this.dom.scrollTop = 0;
    } else if (scroll == "to selection") {
      this.scrollToSelection();
    } else if (oldScrollPos) {
      resetScrollPos(oldScrollPos);
    }
  }
  scrollToSelection() {
    let startDOM = this.domSelectionRange().focusNode;
    if (!startDOM || !this.dom.contains(startDOM.nodeType == 1 ? startDOM : startDOM.parentNode)) ;else if (this.someProp("handleScrollToSelection", f => f(this))) ;else if (this.state.selection instanceof import_prosemirror_state.NodeSelection) {
      let target = this.docView.domAfterPos(this.state.selection.from);
      if (target.nodeType == 1) scrollRectIntoView(this, target.getBoundingClientRect(), startDOM);
    } else {
      scrollRectIntoView(this, this.coordsAtPos(this.state.selection.head, 1), startDOM);
    }
  }
  destroyPluginViews() {
    let view;
    while (view = this.pluginViews.pop()) if (view.destroy) view.destroy();
  }
  updatePluginViews(prevState) {
    if (!prevState || prevState.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins;
      this.destroyPluginViews();
      for (let i = 0; i < this.directPlugins.length; i++) {
        let plugin = this.directPlugins[i];
        if (plugin.spec.view) this.pluginViews.push(plugin.spec.view(this));
      }
      for (let i = 0; i < this.state.plugins.length; i++) {
        let plugin = this.state.plugins[i];
        if (plugin.spec.view) this.pluginViews.push(plugin.spec.view(this));
      }
    } else {
      for (let i = 0; i < this.pluginViews.length; i++) {
        let pluginView = this.pluginViews[i];
        if (pluginView.update) pluginView.update(this, prevState);
      }
    }
  }
  updateDraggedNode(dragging, prev) {
    let sel = dragging.node,
      found = -1;
    if (this.state.doc.nodeAt(sel.from) == sel.node) {
      found = sel.from;
    } else {
      let movedPos = sel.from + (this.state.doc.content.size - prev.doc.content.size);
      let moved = movedPos > 0 && this.state.doc.nodeAt(movedPos);
      if (moved == sel.node) found = movedPos;
    }
    this.dragging = new Dragging(dragging.slice, dragging.move, found < 0 ? void 0 : import_prosemirror_state.NodeSelection.create(this.state.doc, found));
  }
  someProp(propName, f) {
    let prop = this._props && this._props[propName],
      value;
    if (prop != null && (value = f ? f(prop) : prop)) return value;
    for (let i = 0; i < this.directPlugins.length; i++) {
      let prop2 = this.directPlugins[i].props[propName];
      if (prop2 != null && (value = f ? f(prop2) : prop2)) return value;
    }
    let plugins = this.state.plugins;
    if (plugins) for (let i = 0; i < plugins.length; i++) {
      let prop2 = plugins[i].props[propName];
      if (prop2 != null && (value = f ? f(prop2) : prop2)) return value;
    }
  }
  hasFocus() {
    if (ie) {
      let node = this.root.activeElement;
      if (node == this.dom) return true;
      if (!node || !this.dom.contains(node)) return false;
      while (node && this.dom != node && this.dom.contains(node)) {
        if (node.contentEditable == "false") return false;
        node = node.parentElement;
      }
      return true;
    }
    return this.root.activeElement == this.dom;
  }
  focus() {
    this.domObserver.stop();
    if (this.editable) focusPreventScroll(this.dom);
    selectionToDOM(this);
    this.domObserver.start();
  }
  get root() {
    let cached = this._root;
    if (cached == null) for (let search = this.dom.parentNode; search; search = search.parentNode) {
      if (search.nodeType == 9 || search.nodeType == 11 && search.host) {
        if (!search.getSelection) Object.getPrototypeOf(search).getSelection = () => search.ownerDocument.getSelection();
        return this._root = search;
      }
    }
    return cached || document;
  }
  updateRoot() {
    this._root = null;
  }
  posAtCoords(coords) {
    return posAtCoords(this, coords);
  }
  coordsAtPos(pos, side = 1) {
    return coordsAtPos(this, pos, side);
  }
  domAtPos(pos, side = 0) {
    return this.docView.domFromPos(pos, side);
  }
  nodeDOM(pos) {
    let desc = this.docView.descAt(pos);
    return desc ? desc.nodeDOM : null;
  }
  posAtDOM(node, offset, bias = -1) {
    let pos = this.docView.posFromDOM(node, offset, bias);
    if (pos == null) throw new RangeError("DOM position not inside the editor");
    return pos;
  }
  endOfTextblock(dir, state) {
    return endOfTextblock(this, state || this.state, dir);
  }
  pasteHTML(html, event) {
    return doPaste(this, "", html, false, event || new ClipboardEvent("paste"));
  }
  pasteText(text, event) {
    return doPaste(this, text, null, true, event || new ClipboardEvent("paste"));
  }
  serializeForClipboard(slice) {
    return serializeForClipboard(this, slice);
  }
  destroy() {
    if (!this.docView) return;
    destroyInput(this);
    this.destroyPluginViews();
    if (this.mounted) {
      this.docView.update(this.state.doc, [], viewDecorations(this), this);
      this.dom.textContent = "";
    } else if (this.dom.parentNode) {
      this.dom.parentNode.removeChild(this.dom);
    }
    this.docView.destroy();
    this.docView = null;
    clearReusedRange();
  }
  get isDestroyed() {
    return this.docView == null;
  }
  dispatchEvent(event) {
    return dispatchEvent(this, event);
  }
  domSelectionRange() {
    let sel = this.domSelection();
    if (!sel) return {
      focusNode: null,
      focusOffset: 0,
      anchorNode: null,
      anchorOffset: 0
    };
    return safari && this.root.nodeType === 11 && deepActiveElement(this.dom.ownerDocument) == this.dom && safariShadowSelectionRange(this, sel) || sel;
  }
  domSelection() {
    return this.root.getSelection();
  }
};
EditorView.prototype.dispatch = function (tr) {
  let dispatchTransaction = this._props.dispatchTransaction;
  if (dispatchTransaction) dispatchTransaction.call(this, tr);else this.updateState(this.state.apply(tr));
};
function computeDocDeco(view) {
  let attrs = /* @__PURE__ */Object.create(null);
  attrs.class = "ProseMirror";
  attrs.contenteditable = String(view.editable);
  view.someProp("attributes", value => {
    if (typeof value == "function") value = value(view.state);
    if (value) for (let attr in value) {
      if (attr == "class") attrs.class += " " + value[attr];else if (attr == "style") attrs.style = (attrs.style ? attrs.style + ";" : "") + value[attr];else if (!attrs[attr] && attr != "contenteditable" && attr != "nodeName") attrs[attr] = String(value[attr]);
    }
  });
  if (!attrs.translate) attrs.translate = "no";
  return [Decoration.node(0, view.state.doc.content.size, attrs)];
}
function updateCursorWrapper(view) {
  if (view.markCursor) {
    let dom = document.createElement("img");
    dom.className = "ProseMirror-separator";
    dom.setAttribute("mark-placeholder", "true");
    dom.setAttribute("alt", "");
    view.cursorWrapper = {
      dom,
      deco: Decoration.widget(view.state.selection.from, dom, {
        raw: true,
        marks: view.markCursor
      })
    };
  } else {
    view.cursorWrapper = null;
  }
}
function getEditable(view) {
  return !view.someProp("editable", value => value(view.state) === false);
}
function selectionContextChanged(sel1, sel2) {
  let depth = Math.min(sel1.$anchor.sharedDepth(sel1.head), sel2.$anchor.sharedDepth(sel2.head));
  return sel1.$anchor.start(depth) != sel2.$anchor.start(depth);
}
function buildNodeViews(view) {
  let result = /* @__PURE__ */Object.create(null);
  function add(obj) {
    for (let prop in obj) if (!Object.prototype.hasOwnProperty.call(result, prop)) result[prop] = obj[prop];
  }
  view.someProp("nodeViews", add);
  view.someProp("markViews", add);
  return result;
}
function changedNodeViews(a, b) {
  let nA = 0,
    nB = 0;
  for (let prop in a) {
    if (a[prop] != b[prop]) return true;
    nA++;
  }
  for (let _ in b) nB++;
  return nA != nB;
}
function checkStateComponent(plugin) {
  if (plugin.spec.state || plugin.spec.filterTransaction || plugin.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component");
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcm9zZW1pcnJvci12aWV3LjEuNDAuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcm9zZW1pcnJvci12aWV3L2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOlsicHJvc2VtaXJyb3Jfdmlld18xXzQwXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiRGVjb3JhdGlvbiIsIkRlY29yYXRpb25TZXQiLCJFZGl0b3JWaWV3IiwiX19lbmRDb21wb3NpdGlvbiIsIl9fcGFyc2VGcm9tQ2xpcGJvYXJkIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9wcm9zZW1pcnJvcl9zdGF0ZSIsInJlcXVpcmUiLCJpbXBvcnRfcHJvc2VtaXJyb3JfbW9kZWwiLCJpbXBvcnRfcHJvc2VtaXJyb3JfdHJhbnNmb3JtIiwiZG9tSW5kZXgiLCJub2RlIiwiaW5kZXgiLCJwcmV2aW91c1NpYmxpbmciLCJwYXJlbnROb2RlIiwicGFyZW50IiwiYXNzaWduZWRTbG90Iiwibm9kZVR5cGUiLCJob3N0IiwicmV1c2VkUmFuZ2UiLCJ0ZXh0UmFuZ2UiLCJmcm9tIiwidG8iLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZXRFbmQiLCJub2RlVmFsdWUiLCJsZW5ndGgiLCJzZXRTdGFydCIsImNsZWFyUmV1c2VkUmFuZ2UiLCJpc0VxdWl2YWxlbnRQb3NpdGlvbiIsIm9mZiIsInRhcmdldE5vZGUiLCJ0YXJnZXRPZmYiLCJzY2FuRm9yIiwiYXRvbUVsZW1lbnRzIiwiZGlyIiwiX2EiLCJub2RlU2l6ZSIsImhhc0Jsb2NrRGVzYyIsInRlc3QiLCJub2RlTmFtZSIsImNvbnRlbnRFZGl0YWJsZSIsImNoaWxkIiwiY2hpbGROb2RlcyIsInBtVmlld0Rlc2MiLCJpZ25vcmVGb3JTZWxlY3Rpb24iLCJ0ZXh0Tm9kZUJlZm9yZSQxIiwib2Zmc2V0IiwidGV4dE5vZGVBZnRlciQxIiwiaXNPbkVkZ2UiLCJhdFN0YXJ0IiwiYXRFbmQiLCJkb20iLCJkZXNjIiwiY3VyIiwiaXNCbG9jayIsImNvbnRlbnRET00iLCJzZWxlY3Rpb25Db2xsYXBzZWQiLCJkb21TZWwiLCJmb2N1c05vZGUiLCJmb2N1c09mZnNldCIsImFuY2hvck5vZGUiLCJhbmNob3JPZmZzZXQiLCJrZXlFdmVudCIsImtleUNvZGUiLCJrZXkiLCJldmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiY29kZSIsImRlZXBBY3RpdmVFbGVtZW50IiwiZG9jMiIsImVsdCIsImFjdGl2ZUVsZW1lbnQiLCJzaGFkb3dSb290IiwiY2FyZXRGcm9tUG9pbnQiLCJ4IiwieSIsImNhcmV0UG9zaXRpb25Gcm9tUG9pbnQiLCJwb3MiLCJvZmZzZXROb2RlIiwiTWF0aCIsIm1pbiIsIl8iLCJjYXJldFJhbmdlRnJvbVBvaW50Iiwic3RhcnRDb250YWluZXIiLCJzdGFydE9mZnNldCIsIm5hdiIsIm5hdmlnYXRvciIsImRvYyIsImFnZW50IiwidXNlckFnZW50IiwiaWVfZWRnZSIsImV4ZWMiLCJpZV91cHRvMTAiLCJpZV8xMXVwIiwiaWUiLCJpZV92ZXJzaW9uIiwiZG9jdW1lbnRNb2RlIiwiZ2Vja28iLCJfY2hyb21lIiwiY2hyb21lIiwiY2hyb21lX3ZlcnNpb24iLCJzYWZhcmkiLCJ2ZW5kb3IiLCJpb3MiLCJtYXhUb3VjaFBvaW50cyIsIm1hYyIsInBsYXRmb3JtIiwid2luZG93cyIsImFuZHJvaWQiLCJ3ZWJraXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsIndlYmtpdF92ZXJzaW9uIiwid2luZG93UmVjdCIsInZwIiwiZGVmYXVsdFZpZXciLCJ2aXN1YWxWaWV3cG9ydCIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwidG9wIiwiYm90dG9tIiwiaGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnZXRTaWRlIiwidmFsdWUiLCJzaWRlIiwiY2xpZW50UmVjdCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY2FsZVgiLCJvZmZzZXRXaWR0aCIsInNjYWxlWSIsIm9mZnNldEhlaWdodCIsInNjcm9sbFJlY3RJbnRvVmlldyIsInZpZXciLCJzdGFydERPTSIsInNjcm9sbFRocmVzaG9sZCIsInNvbWVQcm9wIiwic2Nyb2xsTWFyZ2luIiwib3duZXJEb2N1bWVudCIsImF0VG9wIiwiYm9keSIsImJvdW5kaW5nIiwibW92ZVgiLCJtb3ZlWSIsInNjcm9sbEJ5Iiwic3RhcnRYIiwic2Nyb2xsTGVmdCIsInN0YXJ0WSIsInNjcm9sbFRvcCIsImRYIiwiZFkiLCJnZXRDb21wdXRlZFN0eWxlIiwicG9zaXRpb24iLCJvZmZzZXRQYXJlbnQiLCJzdG9yZVNjcm9sbFBvcyIsIm1heCIsInJlZkRPTSIsInJlZlRvcCIsImlubmVySGVpZ2h0Iiwicm9vdCIsImVsZW1lbnRGcm9tUG9pbnQiLCJjb250YWlucyIsImxvY2FsUmVjdCIsInN0YWNrIiwic2Nyb2xsU3RhY2siLCJwdXNoIiwicmVzZXRTY3JvbGxQb3MiLCJuZXdSZWZUb3AiLCJyZXN0b3JlU2Nyb2xsU3RhY2siLCJkVG9wIiwiaSIsInByZXZlbnRTY3JvbGxTdXBwb3J0ZWQiLCJmb2N1c1ByZXZlbnRTY3JvbGwiLCJzZXRBY3RpdmUiLCJmb2N1cyIsInN0b3JlZCIsInByZXZlbnRTY3JvbGwiLCJmaW5kT2Zmc2V0SW5Ob2RlIiwiY29vcmRzIiwiY2xvc2VzdCIsImR4Q2xvc2VzdCIsImNvb3Jkc0Nsb3Nlc3QiLCJyb3dCb3QiLCJyb3dUb3AiLCJmaXJzdEJlbG93IiwiY29vcmRzQmVsb3ciLCJmaXJzdENoaWxkIiwiY2hpbGRJbmRleCIsIm5leHRTaWJsaW5nIiwicmVjdHMiLCJnZXRDbGllbnRSZWN0cyIsImR4IiwiZmluZE9mZnNldEluVGV4dCIsImxlbiIsInNpbmdsZVJlY3QiLCJpblJlY3QiLCJ0YXJnZXRLbHVkZ2UiLCJwb3NGcm9tRWxlbWVudCIsImJpYXMiLCJkb2NWaWV3IiwicG9zRnJvbURPTSIsInBvc0Zyb21DYXJldCIsIm91dHNpZGVCbG9jayIsInNhd0Jsb2NrIiwibmVhcmVzdERlc2MiLCJwb3NCZWZvcmUiLCJwb3NBZnRlciIsImlzVGV4dCIsImJlZm9yZSIsImVsZW1lbnQiLCJib3giLCJzdGFydEkiLCJmbG9vciIsImoiLCJwb3NBdENvb3JkcyIsImNhcmV0IiwicCIsImRyYWdnYWJsZSIsIm5leHQiLCJwcmV2IiwibGFzdENoaWxkIiwic3RhdGUiLCJjb250ZW50Iiwic2l6ZSIsImluc2lkZSIsInBvc0F0U3RhcnQiLCJib3JkZXIiLCJub25aZXJvIiwidGFyZ2V0IiwiZmlyc3QiLCJBcnJheSIsInByb3RvdHlwZSIsImZpbmQiLCJjYWxsIiwiQklESSIsImNvb3Jkc0F0UG9zIiwiYXRvbSIsImRvbUZyb21Qb3MiLCJzdXBwb3J0RW1wdHlSYW5nZSIsInJlY3RCZWZvcmUiLCJyZWN0QWZ0ZXIiLCJmbGF0dGVuViIsInRha2VTaWRlIiwiJGRvbSIsInJlc29sdmUiLCJpbmxpbmVDb250ZW50IiwiZmxhdHRlbkgiLCJhZnRlciIsImlnbm9yZUZvckNvb3JkcyIsIndpdGhGbHVzaGVkU3RhdGUiLCJmIiwidmlld1N0YXRlIiwiYWN0aXZlIiwidXBkYXRlU3RhdGUiLCJlbmRPZlRleHRibG9ja1ZlcnRpY2FsIiwic2VsIiwic2VsZWN0aW9uIiwiJHBvcyIsIiRmcm9tIiwiJHRvIiwibmVhcmVzdCIsImJveGVzIiwibWF5YmVSVEwiLCJlbmRPZlRleHRibG9ja0hvcml6b250YWwiLCIkaGVhZCIsImlzVGV4dGJsb2NrIiwicGFyZW50T2Zmc2V0IiwiZG9tU2VsZWN0aW9uIiwic3RhcnQiLCJlbmQiLCJ0ZXh0Q29udGVudCIsIm1vZGlmeSIsIm9sZE5vZGUiLCJvbGRPZmYiLCJkb21TZWxlY3Rpb25SYW5nZSIsIm9sZEJpZGlMZXZlbCIsImNhcmV0QmlkaUxldmVsIiwicGFyZW50RE9NIiwiZGVwdGgiLCJkb21BZnRlclBvcyIsIm5ld05vZGUiLCJuZXdPZmYiLCJyZXN1bHQiLCJjb2xsYXBzZSIsImV4dGVuZCIsImNhY2hlZFN0YXRlIiwiY2FjaGVkRGlyIiwiY2FjaGVkUmVzdWx0IiwiZW5kT2ZUZXh0YmxvY2siLCJOT1RfRElSVFkiLCJDSElMRF9ESVJUWSIsIkNPTlRFTlRfRElSVFkiLCJOT0RFX0RJUlRZIiwiVmlld0Rlc2MiLCJjb25zdHJ1Y3RvciIsImNoaWxkcmVuIiwiZGlydHkiLCJtYXRjaGVzV2lkZ2V0Iiwid2lkZ2V0IiwibWF0Y2hlc01hcmsiLCJtYXJrIiwibWF0Y2hlc05vZGUiLCJvdXRlckRlY28iLCJpbm5lckRlY28iLCJtYXRjaGVzSGFjayIsInBhcnNlUnVsZSIsInN0b3BFdmVudCIsImRlc3Ryb3kiLCJwb3NCZWZvcmVDaGlsZCIsInBvc0F0RW5kIiwibG9jYWxQb3NGcm9tRE9NIiwiZG9tQmVmb3JlIiwiZG9tQWZ0ZXIiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsInNlYXJjaCIsIm9ubHlOb2RlcyIsImdldERlc2MiLCJub2RlRE9NIiwic2NhbiIsImRlc2NBdCIsImkyIiwiaW5uZXIiLCJjdXJQb3MiLCJUcmFpbGluZ0hhY2tWaWV3RGVzYyIsIldpZGdldFZpZXdEZXNjIiwiZW50ZXIiLCJkb21BdG9tIiwicGFyc2VSYW5nZSIsImJhc2UiLCJmcm9tT2Zmc2V0IiwidG9PZmZzZXQiLCJjaGlsZEJhc2UiLCJlbXB0eUNoaWxkQXQiLCJSYW5nZUVycm9yIiwic2V0U2VsZWN0aW9uIiwiYW5jaG9yIiwiaGVhZCIsImZvcmNlIiwiYW5jaG9yRE9NIiwiaGVhZERPTSIsImdldFNlbGVjdGlvbiIsInNlbFJhbmdlIiwiYnJLbHVkZ2UiLCJkb21TZWxFeHRlbmRlZCIsInRtcCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiaWdub3JlTXV0YXRpb24iLCJtdXRhdGlvbiIsInR5cGUiLCJjb250ZW50TG9zdCIsIm1hcmtEaXJ0eSIsInN0YXJ0SW5zaWRlIiwiZW5kSW5zaWRlIiwibWFya1BhcmVudHNEaXJ0eSIsImxldmVsIiwidGV4dCIsInNlbGYiLCJ0b0RPTSIsInNwZWMiLCJyYXciLCJ3cmFwIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwiZXEiLCJpZ25vcmUiLCJzdG9wIiwiaWdub3JlU2VsZWN0aW9uIiwicmVsYXhlZFNpZGUiLCJDb21wb3NpdGlvblZpZXdEZXNjIiwidGV4dERPTSIsIm11dCIsIm9sZFZhbHVlIiwiTWFya1ZpZXdEZXNjIiwiY3JlYXRlIiwiaW5saW5lIiwiY3VzdG9tIiwibm9kZVZpZXdzIiwibmFtZSIsIkRPTVNlcmlhbGl6ZXIiLCJyZW5kZXJTcGVjIiwiYXR0cnMiLCJyZXBhcnNlSW5WaWV3IiwiY29udGVudEVsZW1lbnQiLCJzbGljZSIsImNvcHkiLCJub2RlcyIsInJlcGxhY2VOb2RlcyIsIk5vZGVWaWV3RGVzYyIsImRlc2NPYmoiLCJjcmVhdGVUZXh0Tm9kZSIsInNwZWMyIiwiaGFzQXR0cmlidXRlIiwiYXBwbHlPdXRlckRlY28iLCJDdXN0b21Ob2RlVmlld0Rlc2MiLCJUZXh0Vmlld0Rlc2MiLCJydWxlIiwid2hpdGVzcGFjZSIsInByZXNlcnZlV2hpdGVzcGFjZSIsImdldENvbnRlbnQiLCJGcmFnbWVudCIsImVtcHR5Iiwic2FtZU91dGVyRGVjbyIsImlzTGVhZiIsInVwZGF0ZUNoaWxkcmVuIiwiY29tcG9zaXRpb24iLCJjb21wb3NpbmciLCJsb2NhbENvbXBvc2l0aW9uSW5mbyIsImxvY2FsQ29tcG9zaXRpb24iLCJjb21wb3NpdGlvbkluQ2hpbGQiLCJ1cGRhdGVyIiwiVmlld1RyZWVVcGRhdGVyIiwiaXRlckRlY28iLCJpbnNpZGVOb2RlIiwibWFya3MiLCJzeW5jVG9NYXJrcyIsImNoaWxkQ291bnQiLCJNYXJrIiwibm9uZSIsInBsYWNlV2lkZ2V0IiwiY29tcEluZGV4IiwiZmluZE5vZGVNYXRjaCIsImZpbmRJbmRleFdpdGhDaGlsZCIsInVwZGF0ZU5vZGVBdCIsInVwZGF0ZU5leHROb2RlIiwiYWRkTm9kZSIsImFkZFRleHRibG9ja0hhY2tzIiwiZGVzdHJveVJlc3QiLCJjaGFuZ2VkIiwicHJvdGVjdExvY2FsQ29tcG9zaXRpb24iLCJyZW5kZXJEZXNjcyIsImlvc0hhY2tzIiwiVGV4dFNlbGVjdGlvbiIsInRleHROb2RlIiwiaW5wdXQiLCJjb21wb3NpdGlvbk5vZGUiLCJ0ZXh0UG9zIiwiZmluZFRleHRJbkZyYWdtZW50IiwidG9wTm9kZSIsInJlbW92ZUNoaWxkIiwiY29tcG9zaXRpb25Ob2RlcyIsInVwZGF0ZSIsInNhbWVNYXJrdXAiLCJ1cGRhdGVJbm5lciIsInVwZGF0ZU91dGVyRGVjbyIsIm5lZWRzV3JhcCIsIm9sZERPTSIsInBhdGNoT3V0ZXJEZWNvIiwiY29tcHV0ZU91dGVyRGVjbyIsInNlbGVjdE5vZGUiLCJkZXNlbGVjdE5vZGUiLCJyZW1vdmUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpc0F0b20iLCJkb2NWaWV3RGVzYyIsInNraXAiLCJwbUlzRGVjbyIsImluUGFyZW50IiwidHJhY2tXcml0ZXMiLCJuIiwiY3V0IiwibXVsdGlUeXBlIiwiZGVzY3MiLCJ3cml0dGVuIiwiY2hpbGRET00iLCJybSIsImluc2VydEJlZm9yZSIsIk91dGVyRGVjb0xldmVsIiwiT2JqZWN0Iiwibm9EZWNvIiwidmFsIiwiaXNJbmxpbmUiLCJjbGFzcyIsIm91dGVyRE9NIiwicHJldkNvbXB1dGVkIiwiY3VyQ29tcHV0ZWQiLCJjdXJET00iLCJkZWNvIiwidG9Mb3dlckNhc2UiLCJwYXRjaEF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGUiLCJwcmV2TGlzdCIsInNwbGl0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImN1ckxpc3QiLCJpbmRleE9mIiwicHJvcCIsIm0iLCJyZW1vdmVQcm9wZXJ0eSIsImNzc1RleHQiLCJhIiwiYiIsImxvY2siLCJwcmVNYXRjaCIsImRlc3Ryb3lCZXR3ZWVuIiwic3BsaWNlIiwia2VlcCIsIm1heEtlZXAiLCJzcGFubmluZyIsInBvcCIsImZvdW5kIiwiaXNMb2NrZWQiLCJtYXJrRGVzYyIsInRhcmdldERlc2MiLCJtYXRjaGVzIiwiZSIsIm1hdGNoZWQiLCJoYXMiLCJkb21Ob2RlIiwicHJlTWF0Y2gyIiwiZ2V0IiwibmV4dERPTSIsInVwZGF0ZWQiLCJsb2NrZWQiLCJyZWNyZWF0ZVdyYXBwZXIiLCJ3cmFwcGVyIiwiY2giLCJyZXF1aXJlc0dlY2tvSGFja05vZGUiLCJhZGRIYWNrTm9kZSIsImNsYXNzTmFtZSIsImFsdCIsImhhY2siLCJmcmFnIiwicGFyZW50RGVzYyIsImN1ckRlc2MiLCJkZXNjSSIsImZJIiwiTWFwIiwib3V0ZXIiLCJzZXQiLCJyZXZlcnNlIiwiY29tcGFyZVNpZGUiLCJvbldpZGdldCIsIm9uTm9kZSIsImxvY2FscyIsImZvckNoaWxkIiwiZGVjb0luZGV4IiwicmVzdE5vZGUiLCJwYXJlbnRJbmRleCIsIndpZGdldHMiLCJzb3J0IiwiY3V0QXQiLCJkIiwib2xkQ1NTIiwid2luZG93IiwibGlzdFN0eWxlIiwiY2hpbGRTdGFydCIsInN0ciIsImxhc3RJbmRleE9mIiwicmVwbGFjZW1lbnQiLCJzZWxlY3Rpb25Gcm9tRE9NIiwib3JpZ2luIiwiaW5XaWRnZXQiLCJuZWFyZXN0RGVzY05vZGUiLCJOb2RlU2VsZWN0aW9uIiwiaXNTZWxlY3RhYmxlIiwiU2VsZWN0aW9uIiwicmFuZ2VDb3VudCIsImdldFJhbmdlQXQiLCJlbmRDb250YWluZXIiLCJlbmRPZmZzZXQiLCIkYW5jaG9yIiwic2VsZWN0aW9uQmV0d2VlbiIsImVkaXRvck93bnNTZWxlY3Rpb24iLCJlZGl0YWJsZSIsImhhc0ZvY3VzIiwiaGFzU2VsZWN0aW9uIiwic2VsZWN0aW9uVG9ET00iLCJzeW5jTm9kZVNlbGVjdGlvbiIsIm1vdXNlRG93biIsImFsbG93RGVmYXVsdCIsImN1clNlbCIsImRvbU9ic2VydmVyIiwiY3VycmVudFNlbGVjdGlvbiIsImRlbGF5ZWRTZWxlY3Rpb25TeW5jIiwic2V0Q3VyU2VsZWN0aW9uIiwiZGlzY29ubmVjdFNlbGVjdGlvbiIsImN1cnNvcldyYXBwZXIiLCJzZWxlY3RDdXJzb3JXcmFwcGVyIiwicmVzZXRFZGl0YWJsZUZyb20iLCJyZXNldEVkaXRhYmxlVG8iLCJicm9rZW5TZWxlY3RCZXR3ZWVuVW5lZGl0YWJsZSIsInRlbXBvcmFyaWx5RWRpdGFibGVOZWFyIiwicmVzZXRFZGl0YWJsZSIsInZpc2libGUiLCJyZW1vdmVDbGFzc09uU2VsZWN0aW9uQ2hhbmdlIiwiY29ubmVjdFNlbGVjdGlvbiIsInNldEVkaXRhYmxlIiwid2FzRHJhZ2dhYmxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhpZGVTZWxlY3Rpb25HdWFyZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiaW1nIiwiZGlzYWJsZWQiLCJsYXN0U2VsZWN0ZWRWaWV3RGVzYyIsImNsZWFyTm9kZVNlbGVjdGlvbiIsImJldHdlZW4iLCJoYXNGb2N1c0FuZFNlbGVjdGlvbiIsImFuY2hvckluUmlnaHRQbGFjZSIsIm1vdmVTZWxlY3Rpb25CbG9jayIsIiRzaWRlIiwiJHN0YXJ0IiwiZmluZEZyb20iLCJhcHBseSIsImRpc3BhdGNoIiwidHIiLCJzY3JvbGxJbnRvVmlldyIsInNlbGVjdEhvcml6b250YWxseSIsIm1vZHMiLCJ0ZXh0T2Zmc2V0Iiwibm9kZUJlZm9yZSIsIm5vZGVBZnRlciIsIiRuZXdIZWFkIiwibm9kZVBvcyIsIm5vZGVMZW4iLCJpc0lnbm9yYWJsZSIsInNraXBJZ25vcmVkTm9kZXMiLCJza2lwSWdub3JlZE5vZGVzQmVmb3JlIiwic2tpcElnbm9yZWROb2Rlc0FmdGVyIiwibW92ZU5vZGUiLCJtb3ZlT2Zmc2V0IiwiaXNCbG9ja05vZGUiLCJzZXRTZWxGb2N1cyIsInRleHROb2RlQWZ0ZXIiLCJ0ZXh0Tm9kZUJlZm9yZSIsImZpbmREaXJlY3Rpb24iLCJtaWQiLCJhYnMiLCJjb21wdXRlZCIsImRpcmVjdGlvbiIsInNlbGVjdFZlcnRpY2FsbHkiLCJiZXlvbmQiLCJBbGxTZWxlY3Rpb24iLCJuZWFyIiwic3RvcE5hdGl2ZUhvcml6b250YWxEZWxldGUiLCJlbXB0eTIiLCJzYW1lUGFyZW50IiwibmV4dE5vZGUiLCJkZWxldGUiLCJzd2l0Y2hFZGl0YWJsZSIsInNhZmFyaURvd25BcnJvd0J1ZyIsImdldE1vZHMiLCJjdHJsS2V5IiwibWV0YUtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwiY2FwdHVyZUtleURvd24iLCJzZXJpYWxpemVGb3JDbGlwYm9hcmQiLCJjb250ZXh0Iiwib3BlblN0YXJ0Iiwib3BlbkVuZCIsImRlZmF1bHRBdHRycyIsInNlcmlhbGl6ZXIiLCJmcm9tU2NoZW1hIiwic2NoZW1hIiwiZGV0YWNoZWREb2MiLCJzZXJpYWxpemVGcmFnbWVudCIsIndyYXBwZXJzIiwid3JhcE1hcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXh0QmV0d2VlbiIsInBhcnNlRnJvbUNsaXBib2FyZCIsImh0bWwiLCJwbGFpblRleHQiLCIkY29udGV4dCIsImluQ29kZSIsImFzVGV4dCIsIlNsaWNlIiwicmVwbGFjZSIsInBhcnNlZCIsImZvckVhY2giLCJibG9jayIsInNlcmlhbGl6ZU5vZGUiLCJyZWFkSFRNTCIsInJlc3RvcmVSZXBsYWNlZFNwYWNlcyIsImNvbnRleHROb2RlIiwicXVlcnlTZWxlY3RvciIsInNsaWNlRGF0YSIsImdldEF0dHJpYnV0ZSIsInBhcnNlciIsIkRPTVBhcnNlciIsInBhcnNlU2xpY2UiLCJydWxlRnJvbU5vZGUiLCJkb20yIiwiaW5saW5lUGFyZW50cyIsImFkZENvbnRleHQiLCJjbG9zZVNsaWNlIiwibWF4T3BlbiIsIm5vcm1hbGl6ZVNpYmxpbmdzIiwiaXNvbGF0aW5nIiwiZnJhZ21lbnQiLCJtYXRjaCIsImNvbnRlbnRNYXRjaEF0IiwibGFzdFdyYXAiLCJmaW5kV3JhcHBpbmciLCJpbkxhc3QiLCJhZGRUb1NpYmxpbmciLCJjbG9zZVJpZ2h0Iiwid3JhcHBlZCIsIndpdGhXcmFwcGVycyIsIm1hdGNoVHlwZSIsInNpYmxpbmciLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmQiLCJmaWxsIiwiZmlsbEJlZm9yZSIsImNsb3NlUmFuZ2UiLCJ0aGVhZCIsInRib2R5IiwidGZvb3QiLCJjYXB0aW9uIiwiY29sZ3JvdXAiLCJjb2wiLCJ0ZCIsInRoIiwiX2RldGFjaGVkRG9jIiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJfcG9saWN5IiwibWF5YmVXcmFwVHJ1c3RlZCIsInRydXN0ZWRUeXBlcyIsImRlZmF1bHRQb2xpY3kiLCJjcmVhdGVQb2xpY3kiLCJjcmVhdGVIVE1MIiwicyIsIm1ldGFzIiwiZmlyc3RUYWciLCJtYXAiLCJqb2luIiwiaW5uZXJIVE1MIiwicXVlcnlTZWxlY3RvckFsbCIsImFycmF5IiwicGFyc2UiLCJoYXNSZXF1aXJlZEF0dHJzIiwiaGFuZGxlcnMiLCJlZGl0SGFuZGxlcnMiLCJwYXNzaXZlSGFuZGxlcnMiLCJ0b3VjaHN0YXJ0IiwidG91Y2htb3ZlIiwiSW5wdXRTdGF0ZSIsImxhc3RLZXlDb2RlIiwibGFzdEtleUNvZGVUaW1lIiwibGFzdENsaWNrIiwidGltZSIsImJ1dHRvbiIsImxhc3RTZWxlY3Rpb25PcmlnaW4iLCJsYXN0U2VsZWN0aW9uVGltZSIsImxhc3RJT1NFbnRlciIsImxhc3RJT1NFbnRlckZhbGxiYWNrVGltZW91dCIsImxhc3RGb2N1cyIsImxhc3RUb3VjaCIsImxhc3RDaHJvbWVEZWxldGUiLCJjb21wb3NpbmdUaW1lb3V0IiwiY29tcG9zaXRpb25FbmRlZEF0IiwiY29tcG9zaXRpb25JRCIsImNvbXBvc2l0aW9uUGVuZGluZ0NoYW5nZXMiLCJkb21DaGFuZ2VDb3VudCIsImV2ZW50SGFuZGxlcnMiLCJpbml0SW5wdXQiLCJoYW5kbGVyIiwiZXZlbnQyIiwiZXZlbnRCZWxvbmdzVG9WaWV3IiwicnVuQ3VzdG9tSGFuZGxlciIsInBhc3NpdmUiLCJlbnN1cmVMaXN0ZW5lcnMiLCJzZXRTZWxlY3Rpb25PcmlnaW4iLCJEYXRlIiwibm93IiwiZGVzdHJveUlucHV0IiwiY2xlYXJUaW1lb3V0IiwiY3VycmVudEhhbmRsZXJzIiwiaGFuZGxlcnMyIiwiZGVmYXVsdFByZXZlbnRlZCIsImJ1YmJsZXMiLCJkaXNwYXRjaEV2ZW50Iiwia2V5ZG93biIsIl9ldmVudCIsImluT3JOZWFyQ29tcG9zaXRpb24iLCJmb3JjZUZsdXNoIiwicHJldmVudERlZmF1bHQiLCJrZXl1cCIsImtleXByZXNzIiwiY2hhckNvZGUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJkZWZsdCIsImluc2VydFRleHQiLCJldmVudENvb3JkcyIsImNsaWVudFgiLCJjbGllbnRZIiwiaXNOZWFyIiwiY2xpY2siLCJkeSIsInJ1bkhhbmRsZXJPbkNvbnRleHQiLCJwcm9wTmFtZSIsInVwZGF0ZVNlbGVjdGlvbiIsImZvY3VzZWQiLCJzZXRNZXRhIiwic2VsZWN0Q2xpY2tlZExlYWYiLCJzZWxlY3RDbGlja2VkTm9kZSIsInNlbGVjdGVkTm9kZSIsInNlbGVjdEF0IiwiaGFuZGxlU2luZ2xlQ2xpY2siLCJoYW5kbGVEb3VibGVDbGljayIsImhhbmRsZVRyaXBsZUNsaWNrIiwiZGVmYXVsdFRyaXBsZUNsaWNrIiwiZm9yY2VET01GbHVzaCIsImVuZENvbXBvc2l0aW9uIiwic2VsZWN0Tm9kZU1vZGlmaWVyIiwibW91c2Vkb3duIiwiZmx1c2hlZCIsImRvbmUiLCJNb3VzZURvd24iLCJtaWdodERyYWciLCJzdGFydERvYyIsInRhcmdldFBvcyIsIm5vZGVBdCIsInNlbGVjdGFibGUiLCJhZGRBdHRyIiwic2V0VW5lZGl0YWJsZSIsInVwIiwiYmluZCIsIm1vdmUiLCJ1cGRhdGVBbGxvd0RlZmF1bHQiLCJidXR0b25zIiwiY29udGV4dG1lbnUiLCJ0aW1lU3RhbXAiLCJ0aW1lb3V0Q29tcG9zaXRpb24iLCJjb21wb3NpdGlvbnN0YXJ0IiwiY29tcG9zaXRpb251cGRhdGUiLCJmbHVzaCIsInN0b3JlZE1hcmtzIiwic29tZSIsImluY2x1c2l2ZSIsIm1hcmtDdXJzb3IiLCJzZWwyIiwic2NoZWR1bGVDb21wb3NlRW5kIiwiY29tcG9zaXRpb25lbmQiLCJwZW5kaW5nUmVjb3JkcyIsIlByb21pc2UiLCJ0aGVuIiwiZGVsYXkiLCJjbGVhckNvbXBvc2l0aW9uIiwidGltZXN0YW1wRnJvbUN1c3RvbUV2ZW50IiwiZmluZENvbXBvc2l0aW9uTm9kZSIsInRleHRCZWZvcmUiLCJ0ZXh0QWZ0ZXIiLCJkZXNjQWZ0ZXIiLCJsYXN0Q2hhbmdlZCIsImxhc3RDaGFuZ2VkVGV4dE5vZGUiLCJkZXNjQmVmb3JlIiwicmVzdGFydGluZyIsImZsdXNoaW5nU29vbiIsInNoYXJlZERlcHRoIiwiZGVsZXRlU2VsZWN0aW9uIiwiY2FwdHVyZUNvcHkiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJibHVyIiwiYnJva2VuQ2xpcGJvYXJkQVBJIiwiZGF0YSIsImNsaXBib2FyZERhdGEiLCJjbGVhckRhdGEiLCJzZXREYXRhIiwic2xpY2VTaW5nbGVOb2RlIiwiY2FwdHVyZVBhc3RlIiwicGxhaW4iLCJkb1Bhc3RlIiwicHJlZmVyUGxhaW4iLCJzaW5nbGVOb2RlIiwicmVwbGFjZVNlbGVjdGlvbldpdGgiLCJyZXBsYWNlU2VsZWN0aW9uIiwiZ2V0VGV4dCIsImdldERhdGEiLCJ1cmlzIiwicGFzdGUiLCJEcmFnZ2luZyIsImRyYWdDb3B5TW9kaWZpZXIiLCJkcmFnTW92ZXMiLCJtb3ZlcyIsImRyYWdzdGFydCIsImRhdGFUcmFuc2ZlciIsImRyYWdnZWRTbGljZSIsImZpbGVzIiwiZWZmZWN0QWxsb3dlZCIsImRyYWdnaW5nIiwiZHJhZ2VuZCIsImRyYWdvdmVyIiwiZHJhZ2VudGVyIiwiZHJvcCIsImV2ZW50UG9zIiwiJG1vdXNlIiwiaW5zZXJ0UG9zIiwiZHJvcFBvaW50IiwibWFwcGluZyIsImlzTm9kZSIsImJlZm9yZUluc2VydCIsInJlcGxhY2VSYW5nZVdpdGgiLCJyZXBsYWNlUmFuZ2UiLCJtYXBzIiwiX2Zyb20iLCJfdG8iLCJfbmV3RnJvbSIsIm5ld1RvIiwicmVsYXRlZFRhcmdldCIsImNsZWFyIiwiYmVmb3JlaW5wdXQiLCJpbnB1dFR5cGUiLCJmbHVzaFNvb24iLCIkY3Vyc29yIiwiY29tcGFyZU9ianMiLCJXaWRnZXRUeXBlIiwibm9TcGVjIiwic3BhbiIsIm9sZE9mZnNldCIsImRlbGV0ZWQiLCJtYXBSZXN1bHQiLCJ2YWxpZCIsIm90aGVyIiwiSW5saW5lVHlwZSIsImluY2x1c2l2ZVN0YXJ0IiwiaW5jbHVzaXZlRW5kIiwiaXMiLCJOb2RlVHlwZSIsImZpbmRJbmRleCIsImxvY2FsIiwiZGVjb3JhdGlvbnMiLCJidWlsZFRyZWUiLCJwcmVkaWNhdGUiLCJmaW5kSW5uZXIiLCJjaGlsZE9mZiIsIm9wdGlvbnMiLCJtYXBJbm5lciIsIm5ld0xvY2FsIiwibWFwcGVkIiwib25SZW1vdmUiLCJtYXBDaGlsZHJlbiIsImJ5UG9zIiwiYWRkSW5uZXIiLCJjaGlsZE5vZGUiLCJjaGlsZE9mZnNldCIsImJhc2VPZmZzZXQiLCJ0YWtlU3BhbnNGb3JOb2RlIiwibW92ZVNwYW5zIiwid2l0aG91dE51bGxzIiwiY29uY2F0IiwicmVtb3ZlSW5uZXIiLCJyZW1vdmVkIiwiZGVjIiwibG9jYWxTZXQiLCJEZWNvcmF0aW9uR3JvdXAiLCJyZW1vdmVPdmVybGFwIiwibG9jYWxzSW5uZXIiLCJmb3JFYWNoU2V0IiwibWVtYmVycyIsIm1hcHBlZERlY29zIiwibWVtYmVyIiwic29ydGVkIiwiZXZlcnkiLCJyZWR1Y2UiLCJyIiwib2xkQ2hpbGRyZW4iLCJtb3ZlZCIsIm9sZFN0YXJ0Iiwib2xkRW5kIiwibmV3U3RhcnQiLCJuZXdFbmQiLCJkU2l6ZSIsIm11c3RSZWJ1aWxkIiwiZnJvbUxvY2FsIiwidG9Mb2NhbCIsIm1heWJlQ2hpbGQiLCJtYXBBbmRHYXRoZXJSZW1haW5pbmdEZWNvcmF0aW9ucyIsImJ1aWx0Iiwic3BhbnMiLCJnYXRoZXIiLCJvbGRPZmZzZXQyIiwiaGFzTnVsbHMiLCJsb2NhbFN0YXJ0Iiwic3VidHJlZSIsIndvcmtpbmciLCJpbnNlcnRBaGVhZCIsInZpZXdEZWNvcmF0aW9ucyIsIm9ic2VydmVPcHRpb25zIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsImNoYXJhY3RlckRhdGFPbGRWYWx1ZSIsImF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVPbGRWYWx1ZSIsInVzZUNoYXJEYXRhIiwiU2VsZWN0aW9uU3RhdGUiLCJET01PYnNlcnZlciIsImhhbmRsZURPTUNoYW5nZSIsInF1ZXVlIiwib2JzZXJ2ZXIiLCJvbkNoYXJEYXRhIiwic3VwcHJlc3NpbmdTZWxlY3Rpb25VcGRhdGVzIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsInJlbW92ZWROb2RlcyIsInByZXZWYWx1ZSIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwidGFrZVJlY29yZHMiLCJvYnNlcnZlIiwidGFrZSIsImRpc2Nvbm5lY3QiLCJzdXBwcmVzc1NlbGVjdGlvblVwZGF0ZXMiLCJpZ25vcmVTZWxlY3Rpb25DaGFuZ2UiLCJhbmNlc3RvcnMiLCJTZXQiLCJjb250YWluZXIiLCJuZXdTZWwiLCJ0eXBlT3ZlciIsImFkZGVkIiwicmVnaXN0ZXJNdXRhdGlvbiIsImJycyIsImJyIiwiYmxvY2tQYXJlbnQiLCJyZWFkU2VsIiwic2Nyb2xsVG9TZWxlY3Rpb24iLCJjaGVja0NTUyIsImF0dHJpYnV0ZU5hbWUiLCJhZGRlZE5vZGVzIiwiY3NzQ2hlY2tlZCIsIldlYWtNYXAiLCJjc3NDaGVja1dhcm5lZCIsIndoaXRlU3BhY2UiLCJjb25zb2xlIiwicmFuZ2VUb1NlbGVjdGlvblJhbmdlIiwiY3VycmVudEFuY2hvciIsImRvbUF0UG9zIiwic2FmYXJpU2hhZG93U2VsZWN0aW9uUmFuZ2UiLCJnZXRDb21wb3NlZFJhbmdlcyIsInJlYWQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJnZXRUYXJnZXRSYW5nZXMiLCJleGVjQ29tbWFuZCIsInBhcnNlQmV0d2VlbiIsImZyb21fIiwidG9fIiwidG9wTWF0Y2giLCJ0b3BPcGVuIiwiZmluZFBvc2l0aW9ucyIsImFuY2hvcjIiLCJyZWFkRE9NQ2hhbmdlIiwiJGJlZm9yZSIsInNoYXJlZCIsImNvbXBhcmUiLCJwcmVmZXJyZWRQb3MiLCJwcmVmZXJyZWRTaWRlIiwiY2hhbmdlIiwiZmluZERpZmYiLCJlbmRBIiwiZW5kQiIsInJlc29sdmVTZWxlY3Rpb24iLCJyZXNvbHZlTm9DYWNoZSIsIiRmcm9tQSIsImlubGluZUNoYW5nZSIsIm5leHRTZWwiLCJsb29rc0xpa2VCYWNrc3BhY2UiLCJjaEZyb20iLCJjaFRvIiwibWtUciIsIm1hcmtDaGFuZ2UiLCJtYXJrc0Fjcm9zcyIsImVuc3VyZU1hcmtzIiwiaXNNYXJrQ2hhbmdlIiwiYWRkTWFyayIsInJlbW92ZU1hcmsiLCJwYXJzZWRTZWwiLCJjdXJNYXJrcyIsInByZXZNYXJrcyIsInJlbW92ZUZyb21TZXQiLCJhZGRUb1NldCIsIm9sZCIsIiRuZXdTdGFydCIsIiRuZXdFbmQiLCJza2lwQ2xvc2luZ0FuZE9wZW5pbmciLCIkbmV4dCIsImZyb21FbmQiLCJtYXlPcGVuIiwiaW5kZXhBZnRlciIsImZpbmREaWZmU3RhcnQiLCJmaW5kRGlmZkVuZCIsImFkanVzdCIsImlzU3Vycm9nYXRlUGFpciIsImNoYXJDb2RlQXQiLCJwbGFjZSIsInByb3BzIiwiX3Jvb3QiLCJtb3VudGVkIiwicHJldkRpcmVjdFBsdWdpbnMiLCJwbHVnaW5WaWV3cyIsIl9wcm9wcyIsImRpcmVjdFBsdWdpbnMiLCJwbHVnaW5zIiwiY2hlY2tTdGF0ZUNvbXBvbmVudCIsIm1vdW50IiwiZ2V0RWRpdGFibGUiLCJ1cGRhdGVDdXJzb3JXcmFwcGVyIiwiYnVpbGROb2RlVmlld3MiLCJjb21wdXRlRG9jRGVjbyIsInVwZGF0ZVBsdWdpblZpZXdzIiwiaGFuZGxlRE9NRXZlbnRzIiwicHJldlByb3BzIiwidXBkYXRlU3RhdGVJbm5lciIsInNldFByb3BzIiwicmVkcmF3IiwidXBkYXRlU2VsIiwicGx1Z2luc0NoYW5nZWQiLCJjaGFuZ2VkTm9kZVZpZXdzIiwic2Nyb2xsIiwidXBkYXRlRG9jIiwib2xkU2Nyb2xsUG9zIiwib3ZlcmZsb3dBbmNob3IiLCJmb3JjZVNlbFVwZGF0ZSIsInNlbGVjdGlvbkNvbnRleHRDaGFuZ2VkIiwiY2hyb21lS2x1ZGdlIiwidXBkYXRlRHJhZ2dlZE5vZGUiLCJkZXN0cm95UGx1Z2luVmlld3MiLCJwcmV2U3RhdGUiLCJwbHVnaW4iLCJwbHVnaW5WaWV3IiwibW92ZWRQb3MiLCJwcm9wMiIsInBhcmVudEVsZW1lbnQiLCJjYWNoZWQiLCJnZXRQcm90b3R5cGVPZiIsInVwZGF0ZVJvb3QiLCJwb3NBdERPTSIsInBhc3RlSFRNTCIsIkNsaXBib2FyZEV2ZW50IiwicGFzdGVUZXh0IiwiaXNEZXN0cm95ZWQiLCJkaXNwYXRjaFRyYW5zYWN0aW9uIiwiY29udGVudGVkaXRhYmxlIiwiYXR0ciIsInRyYW5zbGF0ZSIsInNlbDEiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsIm5BIiwibkIiLCJmaWx0ZXJUcmFuc2FjdGlvbiIsImFwcGVuZFRyYW5zYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwrQkFBQTtBQUFBQyxRQUFBLENBQUFELCtCQUFBO0VBQUFFLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFULCtCQUFBOzs7QUNBQSxJQUFBVSx3QkFBQSxHQUFzRUMsT0FBQTtBQUN0RSxJQUFBQyx3QkFBQSxHQUFnRUQsT0FBQTtBQUNoRSxJQUFBRSw0QkFBQSxHQUEwQkYsT0FBQTtBQUUxQixJQUFNRyxRQUFBLEdBQVcsU0FBQUEsQ0FBVUMsSUFBQSxFQUFNO0VBQzdCLFNBQVNDLEtBQUEsR0FBUSxJQUFJQSxLQUFBLElBQVM7SUFDMUJELElBQUEsR0FBT0EsSUFBQSxDQUFLRSxlQUFBO0lBQ1osSUFBSSxDQUFDRixJQUFBLEVBQ0QsT0FBT0MsS0FBQTtFQUNmO0FBQ0o7QUFDQSxJQUFNRSxVQUFBLEdBQWEsU0FBQUEsQ0FBVUgsSUFBQSxFQUFNO0VBQy9CLElBQUlJLE1BQUEsR0FBU0osSUFBQSxDQUFLSyxZQUFBLElBQWdCTCxJQUFBLENBQUtHLFVBQUE7RUFDdkMsT0FBT0MsTUFBQSxJQUFVQSxNQUFBLENBQU9FLFFBQUEsSUFBWSxLQUFLRixNQUFBLENBQU9HLElBQUEsR0FBT0gsTUFBQTtBQUMzRDtBQUNBLElBQUlJLFdBQUEsR0FBYztBQUlsQixJQUFNQyxTQUFBLEdBQVksU0FBQUEsQ0FBVVQsSUFBQSxFQUFNVSxJQUFBLEVBQU1DLEVBQUEsRUFBSTtFQUN4QyxJQUFJQyxLQUFBLEdBQVFKLFdBQUEsS0FBZ0JBLFdBQUEsR0FBY0ssUUFBQSxDQUFTQyxXQUFBLENBQVk7RUFDL0RGLEtBQUEsQ0FBTUcsTUFBQSxDQUFPZixJQUFBLEVBQU1XLEVBQUEsSUFBTSxPQUFPWCxJQUFBLENBQUtnQixTQUFBLENBQVVDLE1BQUEsR0FBU04sRUFBRTtFQUMxREMsS0FBQSxDQUFNTSxRQUFBLENBQVNsQixJQUFBLEVBQU1VLElBQUEsSUFBUSxDQUFDO0VBQzlCLE9BQU9FLEtBQUE7QUFDWDtBQUNBLElBQU1PLGdCQUFBLEdBQW1CLFNBQUFBLENBQUEsRUFBWTtFQUNqQ1gsV0FBQSxHQUFjO0FBQ2xCO0FBSUEsSUFBTVksb0JBQUEsR0FBdUIsU0FBQUEsQ0FBVXBCLElBQUEsRUFBTXFCLEdBQUEsRUFBS0MsVUFBQSxFQUFZQyxTQUFBLEVBQVc7RUFDckUsT0FBT0QsVUFBQSxLQUFlRSxPQUFBLENBQVF4QixJQUFBLEVBQU1xQixHQUFBLEVBQUtDLFVBQUEsRUFBWUMsU0FBQSxFQUFXLEVBQUUsS0FDOURDLE9BQUEsQ0FBUXhCLElBQUEsRUFBTXFCLEdBQUEsRUFBS0MsVUFBQSxFQUFZQyxTQUFBLEVBQVcsQ0FBQztBQUNuRDtBQUNBLElBQU1FLFlBQUEsR0FBZTtBQUNyQixTQUFTRCxRQUFReEIsSUFBQSxFQUFNcUIsR0FBQSxFQUFLQyxVQUFBLEVBQVlDLFNBQUEsRUFBV0csR0FBQSxFQUFLO0VBQ3BELElBQUlDLEVBQUE7RUFDSixTQUFTO0lBQ0wsSUFBSTNCLElBQUEsSUFBUXNCLFVBQUEsSUFBY0QsR0FBQSxJQUFPRSxTQUFBLEVBQzdCLE9BQU87SUFDWCxJQUFJRixHQUFBLEtBQVFLLEdBQUEsR0FBTSxJQUFJLElBQUlFLFFBQUEsQ0FBUzVCLElBQUksSUFBSTtNQUN2QyxJQUFJSSxNQUFBLEdBQVNKLElBQUEsQ0FBS0csVUFBQTtNQUNsQixJQUFJLENBQUNDLE1BQUEsSUFBVUEsTUFBQSxDQUFPRSxRQUFBLElBQVksS0FBS3VCLFlBQUEsQ0FBYTdCLElBQUksS0FBS3lCLFlBQUEsQ0FBYUssSUFBQSxDQUFLOUIsSUFBQSxDQUFLK0IsUUFBUSxLQUN4Ri9CLElBQUEsQ0FBS2dDLGVBQUEsSUFBbUIsU0FDeEIsT0FBTztNQUNYWCxHQUFBLEdBQU10QixRQUFBLENBQVNDLElBQUksS0FBSzBCLEdBQUEsR0FBTSxJQUFJLElBQUk7TUFDdEMxQixJQUFBLEdBQU9JLE1BQUE7SUFDWCxXQUNTSixJQUFBLENBQUtNLFFBQUEsSUFBWSxHQUFHO01BQ3pCLElBQUkyQixLQUFBLEdBQVFqQyxJQUFBLENBQUtrQyxVQUFBLENBQVdiLEdBQUEsSUFBT0ssR0FBQSxHQUFNLElBQUksS0FBSztNQUNsRCxJQUFJTyxLQUFBLENBQU0zQixRQUFBLElBQVksS0FBSzJCLEtBQUEsQ0FBTUQsZUFBQSxJQUFtQixTQUFTO1FBQ3pELEtBQUtMLEVBQUEsR0FBS00sS0FBQSxDQUFNRSxVQUFBLE1BQWdCLFFBQVFSLEVBQUEsS0FBTyxTQUFTLFNBQVNBLEVBQUEsQ0FBR1Msa0JBQUEsRUFDaEVmLEdBQUEsSUFBT0ssR0FBQSxNQUVQLE9BQU87TUFDZixPQUNLO1FBQ0QxQixJQUFBLEdBQU9pQyxLQUFBO1FBQ1BaLEdBQUEsR0FBTUssR0FBQSxHQUFNLElBQUlFLFFBQUEsQ0FBUzVCLElBQUksSUFBSTtNQUNyQztJQUNKLE9BQ0s7TUFDRCxPQUFPO0lBQ1g7RUFDSjtBQUNKO0FBQ0EsU0FBUzRCLFNBQVM1QixJQUFBLEVBQU07RUFDcEIsT0FBT0EsSUFBQSxDQUFLTSxRQUFBLElBQVksSUFBSU4sSUFBQSxDQUFLZ0IsU0FBQSxDQUFVQyxNQUFBLEdBQVNqQixJQUFBLENBQUtrQyxVQUFBLENBQVdqQixNQUFBO0FBQ3hFO0FBQ0EsU0FBU29CLGlCQUFpQnJDLElBQUEsRUFBTXNDLE1BQUEsRUFBUTtFQUNwQyxTQUFTO0lBQ0wsSUFBSXRDLElBQUEsQ0FBS00sUUFBQSxJQUFZLEtBQUtnQyxNQUFBLEVBQ3RCLE9BQU90QyxJQUFBO0lBQ1gsSUFBSUEsSUFBQSxDQUFLTSxRQUFBLElBQVksS0FBS2dDLE1BQUEsR0FBUyxHQUFHO01BQ2xDLElBQUl0QyxJQUFBLENBQUtnQyxlQUFBLElBQW1CLFNBQ3hCLE9BQU87TUFDWGhDLElBQUEsR0FBT0EsSUFBQSxDQUFLa0MsVUFBQSxDQUFXSSxNQUFBLEdBQVM7TUFDaENBLE1BQUEsR0FBU1YsUUFBQSxDQUFTNUIsSUFBSTtJQUMxQixXQUNTQSxJQUFBLENBQUtHLFVBQUEsSUFBYyxDQUFDMEIsWUFBQSxDQUFhN0IsSUFBSSxHQUFHO01BQzdDc0MsTUFBQSxHQUFTdkMsUUFBQSxDQUFTQyxJQUFJO01BQ3RCQSxJQUFBLEdBQU9BLElBQUEsQ0FBS0csVUFBQTtJQUNoQixPQUNLO01BQ0QsT0FBTztJQUNYO0VBQ0o7QUFDSjtBQUNBLFNBQVNvQyxnQkFBZ0J2QyxJQUFBLEVBQU1zQyxNQUFBLEVBQVE7RUFDbkMsU0FBUztJQUNMLElBQUl0QyxJQUFBLENBQUtNLFFBQUEsSUFBWSxLQUFLZ0MsTUFBQSxHQUFTdEMsSUFBQSxDQUFLZ0IsU0FBQSxDQUFVQyxNQUFBLEVBQzlDLE9BQU9qQixJQUFBO0lBQ1gsSUFBSUEsSUFBQSxDQUFLTSxRQUFBLElBQVksS0FBS2dDLE1BQUEsR0FBU3RDLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV2pCLE1BQUEsRUFBUTtNQUN2RCxJQUFJakIsSUFBQSxDQUFLZ0MsZUFBQSxJQUFtQixTQUN4QixPQUFPO01BQ1hoQyxJQUFBLEdBQU9BLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV0ksTUFBQTtNQUN2QkEsTUFBQSxHQUFTO0lBQ2IsV0FDU3RDLElBQUEsQ0FBS0csVUFBQSxJQUFjLENBQUMwQixZQUFBLENBQWE3QixJQUFJLEdBQUc7TUFDN0NzQyxNQUFBLEdBQVN2QyxRQUFBLENBQVNDLElBQUksSUFBSTtNQUMxQkEsSUFBQSxHQUFPQSxJQUFBLENBQUtHLFVBQUE7SUFDaEIsT0FDSztNQUNELE9BQU87SUFDWDtFQUNKO0FBQ0o7QUFDQSxTQUFTcUMsU0FBU3hDLElBQUEsRUFBTXNDLE1BQUEsRUFBUWxDLE1BQUEsRUFBUTtFQUNwQyxTQUFTcUMsT0FBQSxHQUFVSCxNQUFBLElBQVUsR0FBR0ksS0FBQSxHQUFRSixNQUFBLElBQVVWLFFBQUEsQ0FBUzVCLElBQUksR0FBR3lDLE9BQUEsSUFBV0MsS0FBQSxHQUFRO0lBQ2pGLElBQUkxQyxJQUFBLElBQVFJLE1BQUEsRUFDUixPQUFPO0lBQ1gsSUFBSUgsS0FBQSxHQUFRRixRQUFBLENBQVNDLElBQUk7SUFDekJBLElBQUEsR0FBT0EsSUFBQSxDQUFLRyxVQUFBO0lBQ1osSUFBSSxDQUFDSCxJQUFBLEVBQ0QsT0FBTztJQUNYeUMsT0FBQSxHQUFVQSxPQUFBLElBQVd4QyxLQUFBLElBQVM7SUFDOUJ5QyxLQUFBLEdBQVFBLEtBQUEsSUFBU3pDLEtBQUEsSUFBUzJCLFFBQUEsQ0FBUzVCLElBQUk7RUFDM0M7QUFDSjtBQUNBLFNBQVM2QixhQUFhYyxHQUFBLEVBQUs7RUFDdkIsSUFBSUMsSUFBQTtFQUNKLFNBQVNDLEdBQUEsR0FBTUYsR0FBQSxFQUFLRSxHQUFBLEVBQUtBLEdBQUEsR0FBTUEsR0FBQSxDQUFJMUMsVUFBQSxFQUMvQixJQUFJeUMsSUFBQSxHQUFPQyxHQUFBLENBQUlWLFVBQUEsRUFDWDtFQUNSLE9BQU9TLElBQUEsSUFBUUEsSUFBQSxDQUFLNUMsSUFBQSxJQUFRNEMsSUFBQSxDQUFLNUMsSUFBQSxDQUFLOEMsT0FBQSxLQUFZRixJQUFBLENBQUtELEdBQUEsSUFBT0EsR0FBQSxJQUFPQyxJQUFBLENBQUtHLFVBQUEsSUFBY0osR0FBQTtBQUM1RjtBQUdBLElBQU1LLGtCQUFBLEdBQXFCLFNBQUFBLENBQVVDLE1BQUEsRUFBUTtFQUN6QyxPQUFPQSxNQUFBLENBQU9DLFNBQUEsSUFBYTlCLG9CQUFBLENBQXFCNkIsTUFBQSxDQUFPQyxTQUFBLEVBQVdELE1BQUEsQ0FBT0UsV0FBQSxFQUFhRixNQUFBLENBQU9HLFVBQUEsRUFBWUgsTUFBQSxDQUFPSSxZQUFZO0FBQ2hJO0FBQ0EsU0FBU0MsU0FBU0MsT0FBQSxFQUFTQyxHQUFBLEVBQUs7RUFDNUIsSUFBSUMsS0FBQSxHQUFRNUMsUUFBQSxDQUFTNkMsV0FBQSxDQUFZLE9BQU87RUFDeENELEtBQUEsQ0FBTUUsU0FBQSxDQUFVLFdBQVcsTUFBTSxJQUFJO0VBQ3JDRixLQUFBLENBQU1GLE9BQUEsR0FBVUEsT0FBQTtFQUNoQkUsS0FBQSxDQUFNRCxHQUFBLEdBQU1DLEtBQUEsQ0FBTUcsSUFBQSxHQUFPSixHQUFBO0VBQ3pCLE9BQU9DLEtBQUE7QUFDWDtBQUNBLFNBQVNJLGtCQUFrQkMsSUFBQSxFQUFLO0VBQzVCLElBQUlDLEdBQUEsR0FBTUQsSUFBQSxDQUFJRSxhQUFBO0VBQ2QsT0FBT0QsR0FBQSxJQUFPQSxHQUFBLENBQUlFLFVBQUEsRUFDZEYsR0FBQSxHQUFNQSxHQUFBLENBQUlFLFVBQUEsQ0FBV0QsYUFBQTtFQUN6QixPQUFPRCxHQUFBO0FBQ1g7QUFDQSxTQUFTRyxlQUFlSixJQUFBLEVBQUtLLENBQUEsRUFBR0MsQ0FBQSxFQUFHO0VBQy9CLElBQUlOLElBQUEsQ0FBSU8sc0JBQUEsRUFBd0I7SUFDNUIsSUFBSTtNQUNBLElBQUlDLEdBQUEsR0FBTVIsSUFBQSxDQUFJTyxzQkFBQSxDQUF1QkYsQ0FBQSxFQUFHQyxDQUFDO01BSXpDLElBQUlFLEdBQUEsRUFDQSxPQUFPO1FBQUV0RSxJQUFBLEVBQU1zRSxHQUFBLENBQUlDLFVBQUE7UUFBWWpDLE1BQUEsRUFBUWtDLElBQUEsQ0FBS0MsR0FBQSxDQUFJN0MsUUFBQSxDQUFTMEMsR0FBQSxDQUFJQyxVQUFVLEdBQUdELEdBQUEsQ0FBSWhDLE1BQU07TUFBRTtJQUM5RixTQUNPb0MsQ0FBQSxFQUFQLENBQVk7RUFDaEI7RUFDQSxJQUFJWixJQUFBLENBQUlhLG1CQUFBLEVBQXFCO0lBQ3pCLElBQUkvRCxLQUFBLEdBQVFrRCxJQUFBLENBQUlhLG1CQUFBLENBQW9CUixDQUFBLEVBQUdDLENBQUM7SUFDeEMsSUFBSXhELEtBQUEsRUFDQSxPQUFPO01BQUVaLElBQUEsRUFBTVksS0FBQSxDQUFNZ0UsY0FBQTtNQUFnQnRDLE1BQUEsRUFBUWtDLElBQUEsQ0FBS0MsR0FBQSxDQUFJN0MsUUFBQSxDQUFTaEIsS0FBQSxDQUFNZ0UsY0FBYyxHQUFHaEUsS0FBQSxDQUFNaUUsV0FBVztJQUFFO0VBQ2pIO0FBQ0o7QUFFQSxJQUFNQyxHQUFBLEdBQU0sT0FBT0MsU0FBQSxJQUFhLGNBQWNBLFNBQUEsR0FBWTtBQUMxRCxJQUFNQyxHQUFBLEdBQU0sT0FBT25FLFFBQUEsSUFBWSxjQUFjQSxRQUFBLEdBQVc7QUFDeEQsSUFBTW9FLEtBQUEsR0FBU0gsR0FBQSxJQUFPQSxHQUFBLENBQUlJLFNBQUEsSUFBYztBQUN4QyxJQUFNQyxPQUFBLEdBQVUsY0FBY0MsSUFBQSxDQUFLSCxLQUFLO0FBQ3hDLElBQU1JLFNBQUEsR0FBWSxVQUFVRCxJQUFBLENBQUtILEtBQUs7QUFDdEMsSUFBTUssT0FBQSxHQUFVLHdDQUF3Q0YsSUFBQSxDQUFLSCxLQUFLO0FBQ2xFLElBQU1NLEVBQUEsR0FBSyxDQUFDLEVBQUVGLFNBQUEsSUFBYUMsT0FBQSxJQUFXSCxPQUFBO0FBQ3RDLElBQU1LLFVBQUEsR0FBYUgsU0FBQSxHQUFZeEUsUUFBQSxDQUFTNEUsWUFBQSxHQUFlSCxPQUFBLEdBQVUsQ0FBQ0EsT0FBQSxDQUFRLEtBQUtILE9BQUEsR0FBVSxDQUFDQSxPQUFBLENBQVEsS0FBSztBQUN2RyxJQUFNTyxLQUFBLEdBQVEsQ0FBQ0gsRUFBQSxJQUFNLGdCQUFnQnpELElBQUEsQ0FBS21ELEtBQUs7QUFDL0NTLEtBQUEsSUFBUyxFQUFFLGlCQUFpQk4sSUFBQSxDQUFLSCxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRztBQUNuRCxJQUFNVSxPQUFBLEdBQVUsQ0FBQ0osRUFBQSxJQUFNLGdCQUFnQkgsSUFBQSxDQUFLSCxLQUFLO0FBQ2pELElBQU1XLE1BQUEsR0FBUyxDQUFDLENBQUNELE9BQUE7QUFDakIsSUFBTUUsY0FBQSxHQUFpQkYsT0FBQSxHQUFVLENBQUNBLE9BQUEsQ0FBUSxLQUFLO0FBQy9DLElBQU1HLE1BQUEsR0FBUyxDQUFDUCxFQUFBLElBQU0sQ0FBQyxDQUFDVCxHQUFBLElBQU8saUJBQWlCaEQsSUFBQSxDQUFLZ0QsR0FBQSxDQUFJaUIsTUFBTTtBQUUvRCxJQUFNQyxHQUFBLEdBQU1GLE1BQUEsS0FBVyxjQUFjaEUsSUFBQSxDQUFLbUQsS0FBSyxLQUFLLENBQUMsQ0FBQ0gsR0FBQSxJQUFPQSxHQUFBLENBQUltQixjQUFBLEdBQWlCO0FBQ2xGLElBQU1DLEdBQUEsR0FBTUYsR0FBQSxLQUFRbEIsR0FBQSxHQUFNLE1BQU1oRCxJQUFBLENBQUtnRCxHQUFBLENBQUlxQixRQUFRLElBQUk7QUFDckQsSUFBTUMsT0FBQSxHQUFVdEIsR0FBQSxHQUFNLE1BQU1oRCxJQUFBLENBQUtnRCxHQUFBLENBQUlxQixRQUFRLElBQUk7QUFDakQsSUFBTUUsT0FBQSxHQUFVLGFBQWF2RSxJQUFBLENBQUttRCxLQUFLO0FBQ3ZDLElBQU1xQixNQUFBLEdBQVMsQ0FBQyxDQUFDdEIsR0FBQSxJQUFPLHlCQUF5QkEsR0FBQSxDQUFJdUIsZUFBQSxDQUFnQkMsS0FBQTtBQUNyRSxJQUFNQyxjQUFBLEdBQWlCSCxNQUFBLEdBQVMsRUFBRSx1QkFBdUJsQixJQUFBLENBQUtMLFNBQUEsQ0FBVUcsU0FBUyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSztBQUVuRyxTQUFTd0IsV0FBVzVDLElBQUEsRUFBSztFQUNyQixJQUFJNkMsRUFBQSxHQUFLN0MsSUFBQSxDQUFJOEMsV0FBQSxJQUFlOUMsSUFBQSxDQUFJOEMsV0FBQSxDQUFZQyxjQUFBO0VBQzVDLElBQUlGLEVBQUEsRUFDQSxPQUFPO0lBQ0hHLElBQUEsRUFBTTtJQUFHQyxLQUFBLEVBQU9KLEVBQUEsQ0FBR0ssS0FBQTtJQUNuQkMsR0FBQSxFQUFLO0lBQUdDLE1BQUEsRUFBUVAsRUFBQSxDQUFHUTtFQUN2QjtFQUNKLE9BQU87SUFBRUwsSUFBQSxFQUFNO0lBQUdDLEtBQUEsRUFBT2pELElBQUEsQ0FBSXlDLGVBQUEsQ0FBZ0JhLFdBQUE7SUFDekNILEdBQUEsRUFBSztJQUFHQyxNQUFBLEVBQVFwRCxJQUFBLENBQUl5QyxlQUFBLENBQWdCYztFQUFhO0FBQ3pEO0FBQ0EsU0FBU0MsUUFBUUMsS0FBQSxFQUFPQyxJQUFBLEVBQU07RUFDMUIsT0FBTyxPQUFPRCxLQUFBLElBQVMsV0FBV0EsS0FBQSxHQUFRQSxLQUFBLENBQU1DLElBQUE7QUFDcEQ7QUFDQSxTQUFTQyxXQUFXekgsSUFBQSxFQUFNO0VBQ3RCLElBQUkwSCxJQUFBLEdBQU8xSCxJQUFBLENBQUsySCxxQkFBQSxDQUFzQjtFQUV0QyxJQUFJQyxNQUFBLEdBQVVGLElBQUEsQ0FBS1YsS0FBQSxHQUFRaEgsSUFBQSxDQUFLNkgsV0FBQSxJQUFnQjtFQUNoRCxJQUFJQyxNQUFBLEdBQVVKLElBQUEsQ0FBS1AsTUFBQSxHQUFTbkgsSUFBQSxDQUFLK0gsWUFBQSxJQUFpQjtFQUVsRCxPQUFPO0lBQUVqQixJQUFBLEVBQU1ZLElBQUEsQ0FBS1osSUFBQTtJQUFNQyxLQUFBLEVBQU9XLElBQUEsQ0FBS1osSUFBQSxHQUFPOUcsSUFBQSxDQUFLb0gsV0FBQSxHQUFjUSxNQUFBO0lBQzVEWCxHQUFBLEVBQUtTLElBQUEsQ0FBS1QsR0FBQTtJQUFLQyxNQUFBLEVBQVFRLElBQUEsQ0FBS1QsR0FBQSxHQUFNakgsSUFBQSxDQUFLcUgsWUFBQSxHQUFlUztFQUFPO0FBQ3JFO0FBQ0EsU0FBU0UsbUJBQW1CQyxJQUFBLEVBQU1QLElBQUEsRUFBTVEsUUFBQSxFQUFVO0VBQzlDLElBQUlDLGVBQUEsR0FBa0JGLElBQUEsQ0FBS0csUUFBQSxDQUFTLGlCQUFpQixLQUFLO0lBQUdDLFlBQUEsR0FBZUosSUFBQSxDQUFLRyxRQUFBLENBQVMsY0FBYyxLQUFLO0VBQzdHLElBQUl0RSxJQUFBLEdBQU1tRSxJQUFBLENBQUt0RixHQUFBLENBQUkyRixhQUFBO0VBQ25CLFNBQVNsSSxNQUFBLEdBQVM4SCxRQUFBLElBQVlELElBQUEsQ0FBS3RGLEdBQUEsSUFBTztJQUN0QyxJQUFJLENBQUN2QyxNQUFBLEVBQ0Q7SUFDSixJQUFJQSxNQUFBLENBQU9FLFFBQUEsSUFBWSxHQUFHO01BQ3RCRixNQUFBLEdBQVNELFVBQUEsQ0FBV0MsTUFBTTtNQUMxQjtJQUNKO0lBQ0EsSUFBSTJELEdBQUEsR0FBTTNELE1BQUE7SUFDVixJQUFJbUksS0FBQSxHQUFReEUsR0FBQSxJQUFPRCxJQUFBLENBQUkwRSxJQUFBO0lBQ3ZCLElBQUlDLFFBQUEsR0FBV0YsS0FBQSxHQUFRN0IsVUFBQSxDQUFXNUMsSUFBRyxJQUFJMkQsVUFBQSxDQUFXMUQsR0FBRztJQUN2RCxJQUFJMkUsS0FBQSxHQUFRO01BQUdDLEtBQUEsR0FBUTtJQUN2QixJQUFJakIsSUFBQSxDQUFLVCxHQUFBLEdBQU13QixRQUFBLENBQVN4QixHQUFBLEdBQU1LLE9BQUEsQ0FBUWEsZUFBQSxFQUFpQixLQUFLLEdBQ3hEUSxLQUFBLEdBQVEsRUFBRUYsUUFBQSxDQUFTeEIsR0FBQSxHQUFNUyxJQUFBLENBQUtULEdBQUEsR0FBTUssT0FBQSxDQUFRZSxZQUFBLEVBQWMsS0FBSyxZQUMxRFgsSUFBQSxDQUFLUixNQUFBLEdBQVN1QixRQUFBLENBQVN2QixNQUFBLEdBQVNJLE9BQUEsQ0FBUWEsZUFBQSxFQUFpQixRQUFRLEdBQ3RFUSxLQUFBLEdBQVFqQixJQUFBLENBQUtSLE1BQUEsR0FBU1EsSUFBQSxDQUFLVCxHQUFBLEdBQU13QixRQUFBLENBQVN2QixNQUFBLEdBQVN1QixRQUFBLENBQVN4QixHQUFBLEdBQ3REUyxJQUFBLENBQUtULEdBQUEsR0FBTUssT0FBQSxDQUFRZSxZQUFBLEVBQWMsS0FBSyxJQUFJSSxRQUFBLENBQVN4QixHQUFBLEdBQ25EUyxJQUFBLENBQUtSLE1BQUEsR0FBU3VCLFFBQUEsQ0FBU3ZCLE1BQUEsR0FBU0ksT0FBQSxDQUFRZSxZQUFBLEVBQWMsUUFBUTtJQUN4RSxJQUFJWCxJQUFBLENBQUtaLElBQUEsR0FBTzJCLFFBQUEsQ0FBUzNCLElBQUEsR0FBT1EsT0FBQSxDQUFRYSxlQUFBLEVBQWlCLE1BQU0sR0FDM0RPLEtBQUEsR0FBUSxFQUFFRCxRQUFBLENBQVMzQixJQUFBLEdBQU9ZLElBQUEsQ0FBS1osSUFBQSxHQUFPUSxPQUFBLENBQVFlLFlBQUEsRUFBYyxNQUFNLFlBQzdEWCxJQUFBLENBQUtYLEtBQUEsR0FBUTBCLFFBQUEsQ0FBUzFCLEtBQUEsR0FBUU8sT0FBQSxDQUFRYSxlQUFBLEVBQWlCLE9BQU8sR0FDbkVPLEtBQUEsR0FBUWhCLElBQUEsQ0FBS1gsS0FBQSxHQUFRMEIsUUFBQSxDQUFTMUIsS0FBQSxHQUFRTyxPQUFBLENBQVFlLFlBQUEsRUFBYyxPQUFPO0lBQ3ZFLElBQUlLLEtBQUEsSUFBU0MsS0FBQSxFQUFPO01BQ2hCLElBQUlKLEtBQUEsRUFBTztRQUNQekUsSUFBQSxDQUFJOEMsV0FBQSxDQUFZZ0MsUUFBQSxDQUFTRixLQUFBLEVBQU9DLEtBQUs7TUFDekMsT0FDSztRQUNELElBQUlFLE1BQUEsR0FBUzlFLEdBQUEsQ0FBSStFLFVBQUE7VUFBWUMsTUFBQSxHQUFTaEYsR0FBQSxDQUFJaUYsU0FBQTtRQUMxQyxJQUFJTCxLQUFBLEVBQ0E1RSxHQUFBLENBQUlpRixTQUFBLElBQWFMLEtBQUE7UUFDckIsSUFBSUQsS0FBQSxFQUNBM0UsR0FBQSxDQUFJK0UsVUFBQSxJQUFjSixLQUFBO1FBQ3RCLElBQUlPLEVBQUEsR0FBS2xGLEdBQUEsQ0FBSStFLFVBQUEsR0FBYUQsTUFBQTtVQUFRSyxFQUFBLEdBQUtuRixHQUFBLENBQUlpRixTQUFBLEdBQVlELE1BQUE7UUFDdkRyQixJQUFBLEdBQU87VUFBRVosSUFBQSxFQUFNWSxJQUFBLENBQUtaLElBQUEsR0FBT21DLEVBQUE7VUFBSWhDLEdBQUEsRUFBS1MsSUFBQSxDQUFLVCxHQUFBLEdBQU1pQyxFQUFBO1VBQUluQyxLQUFBLEVBQU9XLElBQUEsQ0FBS1gsS0FBQSxHQUFRa0MsRUFBQTtVQUFJL0IsTUFBQSxFQUFRUSxJQUFBLENBQUtSLE1BQUEsR0FBU2dDO1FBQUc7TUFDeEc7SUFDSjtJQUNBLElBQUk1RSxHQUFBLEdBQU1pRSxLQUFBLEdBQVEsVUFBVVksZ0JBQUEsQ0FBaUIvSSxNQUFNLEVBQUVnSixRQUFBO0lBQ3JELElBQUksbUJBQW1CdEgsSUFBQSxDQUFLd0MsR0FBRyxHQUMzQjtJQUNKbEUsTUFBQSxHQUFTa0UsR0FBQSxJQUFPLGFBQWFsRSxNQUFBLENBQU9pSixZQUFBLEdBQWVsSixVQUFBLENBQVdDLE1BQU07RUFDeEU7QUFDSjtBQUtBLFNBQVNrSixlQUFlckIsSUFBQSxFQUFNO0VBQzFCLElBQUlQLElBQUEsR0FBT08sSUFBQSxDQUFLdEYsR0FBQSxDQUFJZ0YscUJBQUEsQ0FBc0I7SUFBR29CLE1BQUEsR0FBU3ZFLElBQUEsQ0FBSytFLEdBQUEsQ0FBSSxHQUFHN0IsSUFBQSxDQUFLVCxHQUFHO0VBQzFFLElBQUl1QyxNQUFBLEVBQVFDLE1BQUE7RUFDWixTQUFTdEYsQ0FBQSxJQUFLdUQsSUFBQSxDQUFLWixJQUFBLEdBQU9ZLElBQUEsQ0FBS1gsS0FBQSxJQUFTLEdBQUczQyxDQUFBLEdBQUkyRSxNQUFBLEdBQVMsR0FBRzNFLENBQUEsR0FBSUksSUFBQSxDQUFLQyxHQUFBLENBQUlpRixXQUFBLEVBQWFoQyxJQUFBLENBQUtSLE1BQU0sR0FBRzlDLENBQUEsSUFBSyxHQUFHO0lBQ3ZHLElBQUl6QixHQUFBLEdBQU1zRixJQUFBLENBQUswQixJQUFBLENBQUtDLGdCQUFBLENBQWlCekYsQ0FBQSxFQUFHQyxDQUFDO0lBQ3pDLElBQUksQ0FBQ3pCLEdBQUEsSUFBT0EsR0FBQSxJQUFPc0YsSUFBQSxDQUFLdEYsR0FBQSxJQUFPLENBQUNzRixJQUFBLENBQUt0RixHQUFBLENBQUlrSCxRQUFBLENBQVNsSCxHQUFHLEdBQ2pEO0lBQ0osSUFBSW1ILFNBQUEsR0FBWW5ILEdBQUEsQ0FBSWdGLHFCQUFBLENBQXNCO0lBQzFDLElBQUltQyxTQUFBLENBQVU3QyxHQUFBLElBQU84QixNQUFBLEdBQVMsSUFBSTtNQUM5QlMsTUFBQSxHQUFTN0csR0FBQTtNQUNUOEcsTUFBQSxHQUFTSyxTQUFBLENBQVU3QyxHQUFBO01BQ25CO0lBQ0o7RUFDSjtFQUNBLE9BQU87SUFBRXVDLE1BQUE7SUFBZ0JDLE1BQUE7SUFBZ0JNLEtBQUEsRUFBT0MsV0FBQSxDQUFZL0IsSUFBQSxDQUFLdEYsR0FBRztFQUFFO0FBQzFFO0FBQ0EsU0FBU3FILFlBQVlySCxHQUFBLEVBQUs7RUFDdEIsSUFBSW9ILEtBQUEsR0FBUSxFQUFDO0lBQUdqRyxJQUFBLEdBQU1uQixHQUFBLENBQUkyRixhQUFBO0VBQzFCLFNBQVN6RixHQUFBLEdBQU1GLEdBQUEsRUFBS0UsR0FBQSxFQUFLQSxHQUFBLEdBQU0xQyxVQUFBLENBQVcwQyxHQUFHLEdBQUc7SUFDNUNrSCxLQUFBLENBQU1FLElBQUEsQ0FBSztNQUFFdEgsR0FBQSxFQUFLRSxHQUFBO01BQUtvRSxHQUFBLEVBQUtwRSxHQUFBLENBQUltRyxTQUFBO01BQVdsQyxJQUFBLEVBQU1qRSxHQUFBLENBQUlpRztJQUFXLENBQUM7SUFDakUsSUFBSW5HLEdBQUEsSUFBT21CLElBQUEsRUFDUDtFQUNSO0VBQ0EsT0FBT2lHLEtBQUE7QUFDWDtBQUdBLFNBQVNHLGVBQWU7RUFBRVYsTUFBQTtFQUFRQyxNQUFBO0VBQVFNO0FBQU0sR0FBRztFQUMvQyxJQUFJSSxTQUFBLEdBQVlYLE1BQUEsR0FBU0EsTUFBQSxDQUFPN0IscUJBQUEsQ0FBc0IsRUFBRVYsR0FBQSxHQUFNO0VBQzlEbUQsa0JBQUEsQ0FBbUJMLEtBQUEsRUFBT0ksU0FBQSxJQUFhLElBQUksSUFBSUEsU0FBQSxHQUFZVixNQUFNO0FBQ3JFO0FBQ0EsU0FBU1csbUJBQW1CTCxLQUFBLEVBQU9NLElBQUEsRUFBTTtFQUNyQyxTQUFTQyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJUCxLQUFBLENBQU05SSxNQUFBLEVBQVFxSixDQUFBLElBQUs7SUFDbkMsSUFBSTtNQUFFM0gsR0FBQTtNQUFLc0UsR0FBQTtNQUFLSDtJQUFLLElBQUlpRCxLQUFBLENBQU1PLENBQUE7SUFDL0IsSUFBSTNILEdBQUEsQ0FBSXFHLFNBQUEsSUFBYS9CLEdBQUEsR0FBTW9ELElBQUEsRUFDdkIxSCxHQUFBLENBQUlxRyxTQUFBLEdBQVkvQixHQUFBLEdBQU1vRCxJQUFBO0lBQzFCLElBQUkxSCxHQUFBLENBQUltRyxVQUFBLElBQWNoQyxJQUFBLEVBQ2xCbkUsR0FBQSxDQUFJbUcsVUFBQSxHQUFhaEMsSUFBQTtFQUN6QjtBQUNKO0FBQ0EsSUFBSXlELHNCQUFBLEdBQXlCO0FBRzdCLFNBQVNDLG1CQUFtQjdILEdBQUEsRUFBSztFQUM3QixJQUFJQSxHQUFBLENBQUk4SCxTQUFBLEVBQ0osT0FBTzlILEdBQUEsQ0FBSThILFNBQUEsQ0FBVTtFQUN6QixJQUFJRixzQkFBQSxFQUNBLE9BQU81SCxHQUFBLENBQUkrSCxLQUFBLENBQU1ILHNCQUFzQjtFQUMzQyxJQUFJSSxNQUFBLEdBQVNYLFdBQUEsQ0FBWXJILEdBQUc7RUFDNUJBLEdBQUEsQ0FBSStILEtBQUEsQ0FBTUgsc0JBQUEsSUFBMEIsT0FBTztJQUN2QyxJQUFJSyxjQUFBLEVBQWdCO01BQ2hCTCxzQkFBQSxHQUF5QjtRQUFFSyxhQUFBLEVBQWU7TUFBSztNQUMvQyxPQUFPO0lBQ1g7RUFDSixJQUFJLE1BQVM7RUFDYixJQUFJLENBQUNMLHNCQUFBLEVBQXdCO0lBQ3pCQSxzQkFBQSxHQUF5QjtJQUN6Qkgsa0JBQUEsQ0FBbUJPLE1BQUEsRUFBUSxDQUFDO0VBQ2hDO0FBQ0o7QUFDQSxTQUFTRSxpQkFBaUI3SyxJQUFBLEVBQU04SyxNQUFBLEVBQVE7RUFDcEMsSUFBSUMsT0FBQTtJQUFTQyxTQUFBLEdBQVk7SUFBS0MsYUFBQTtJQUFlM0ksTUFBQSxHQUFTO0VBQ3RELElBQUk0SSxNQUFBLEdBQVNKLE1BQUEsQ0FBTzdELEdBQUE7SUFBS2tFLE1BQUEsR0FBU0wsTUFBQSxDQUFPN0QsR0FBQTtFQUN6QyxJQUFJbUUsVUFBQSxFQUFZQyxXQUFBO0VBQ2hCLFNBQVNwSixLQUFBLEdBQVFqQyxJQUFBLENBQUtzTCxVQUFBLEVBQVlDLFVBQUEsR0FBYSxHQUFHdEosS0FBQSxFQUFPQSxLQUFBLEdBQVFBLEtBQUEsQ0FBTXVKLFdBQUEsRUFBYUQsVUFBQSxJQUFjO0lBQzlGLElBQUlFLEtBQUE7SUFDSixJQUFJeEosS0FBQSxDQUFNM0IsUUFBQSxJQUFZLEdBQ2xCbUwsS0FBQSxHQUFReEosS0FBQSxDQUFNeUosY0FBQSxDQUFlLFdBQ3hCekosS0FBQSxDQUFNM0IsUUFBQSxJQUFZLEdBQ3ZCbUwsS0FBQSxHQUFRaEwsU0FBQSxDQUFVd0IsS0FBSyxFQUFFeUosY0FBQSxDQUFlLE9BRXhDO0lBQ0osU0FBU3BCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUltQixLQUFBLENBQU14SyxNQUFBLEVBQVFxSixDQUFBLElBQUs7TUFDbkMsSUFBSTVDLElBQUEsR0FBTytELEtBQUEsQ0FBTW5CLENBQUE7TUFDakIsSUFBSTVDLElBQUEsQ0FBS1QsR0FBQSxJQUFPaUUsTUFBQSxJQUFVeEQsSUFBQSxDQUFLUixNQUFBLElBQVVpRSxNQUFBLEVBQVE7UUFDN0NELE1BQUEsR0FBUzFHLElBQUEsQ0FBSytFLEdBQUEsQ0FBSTdCLElBQUEsQ0FBS1IsTUFBQSxFQUFRZ0UsTUFBTTtRQUNyQ0MsTUFBQSxHQUFTM0csSUFBQSxDQUFLQyxHQUFBLENBQUlpRCxJQUFBLENBQUtULEdBQUEsRUFBS2tFLE1BQU07UUFDbEMsSUFBSVEsRUFBQSxHQUFLakUsSUFBQSxDQUFLWixJQUFBLEdBQU9nRSxNQUFBLENBQU9oRSxJQUFBLEdBQU9ZLElBQUEsQ0FBS1osSUFBQSxHQUFPZ0UsTUFBQSxDQUFPaEUsSUFBQSxHQUNoRFksSUFBQSxDQUFLWCxLQUFBLEdBQVErRCxNQUFBLENBQU9oRSxJQUFBLEdBQU9nRSxNQUFBLENBQU9oRSxJQUFBLEdBQU9ZLElBQUEsQ0FBS1gsS0FBQSxHQUFRO1FBQzVELElBQUk0RSxFQUFBLEdBQUtYLFNBQUEsRUFBVztVQUNoQkQsT0FBQSxHQUFVOUksS0FBQTtVQUNWK0ksU0FBQSxHQUFZVyxFQUFBO1VBQ1pWLGFBQUEsR0FBZ0JVLEVBQUEsSUFBTVosT0FBQSxDQUFRekssUUFBQSxJQUFZLElBQUk7WUFDMUN3RyxJQUFBLEVBQU1ZLElBQUEsQ0FBS1gsS0FBQSxHQUFRK0QsTUFBQSxDQUFPaEUsSUFBQSxHQUFPWSxJQUFBLENBQUtYLEtBQUEsR0FBUVcsSUFBQSxDQUFLWixJQUFBO1lBQ25ERyxHQUFBLEVBQUs2RCxNQUFBLENBQU83RDtVQUNoQixJQUFJNkQsTUFBQTtVQUNKLElBQUk3SSxLQUFBLENBQU0zQixRQUFBLElBQVksS0FBS3FMLEVBQUEsRUFDdkJySixNQUFBLEdBQVNpSixVQUFBLElBQWNULE1BQUEsQ0FBT2hFLElBQUEsS0FBU1ksSUFBQSxDQUFLWixJQUFBLEdBQU9ZLElBQUEsQ0FBS1gsS0FBQSxJQUFTLElBQUksSUFBSTtVQUM3RTtRQUNKO01BQ0osV0FDU1csSUFBQSxDQUFLVCxHQUFBLEdBQU02RCxNQUFBLENBQU83RCxHQUFBLElBQU8sQ0FBQ21FLFVBQUEsSUFBYzFELElBQUEsQ0FBS1osSUFBQSxJQUFRZ0UsTUFBQSxDQUFPaEUsSUFBQSxJQUFRWSxJQUFBLENBQUtYLEtBQUEsSUFBUytELE1BQUEsQ0FBT2hFLElBQUEsRUFBTTtRQUNwR3NFLFVBQUEsR0FBYW5KLEtBQUE7UUFDYm9KLFdBQUEsR0FBYztVQUFFdkUsSUFBQSxFQUFNdEMsSUFBQSxDQUFLK0UsR0FBQSxDQUFJN0IsSUFBQSxDQUFLWixJQUFBLEVBQU10QyxJQUFBLENBQUtDLEdBQUEsQ0FBSWlELElBQUEsQ0FBS1gsS0FBQSxFQUFPK0QsTUFBQSxDQUFPaEUsSUFBSSxDQUFDO1VBQUdHLEdBQUEsRUFBS1MsSUFBQSxDQUFLVDtRQUFJO01BQ2hHO01BQ0EsSUFBSSxDQUFDOEQsT0FBQSxLQUFZRCxNQUFBLENBQU9oRSxJQUFBLElBQVFZLElBQUEsQ0FBS1gsS0FBQSxJQUFTK0QsTUFBQSxDQUFPN0QsR0FBQSxJQUFPUyxJQUFBLENBQUtULEdBQUEsSUFDN0Q2RCxNQUFBLENBQU9oRSxJQUFBLElBQVFZLElBQUEsQ0FBS1osSUFBQSxJQUFRZ0UsTUFBQSxDQUFPN0QsR0FBQSxJQUFPUyxJQUFBLENBQUtSLE1BQUEsR0FDL0M1RSxNQUFBLEdBQVNpSixVQUFBLEdBQWE7SUFDOUI7RUFDSjtFQUNBLElBQUksQ0FBQ1IsT0FBQSxJQUFXSyxVQUFBLEVBQVk7SUFDeEJMLE9BQUEsR0FBVUssVUFBQTtJQUNWSCxhQUFBLEdBQWdCSSxXQUFBO0lBQ2hCTCxTQUFBLEdBQVk7RUFDaEI7RUFDQSxJQUFJRCxPQUFBLElBQVdBLE9BQUEsQ0FBUXpLLFFBQUEsSUFBWSxHQUMvQixPQUFPc0wsZ0JBQUEsQ0FBaUJiLE9BQUEsRUFBU0UsYUFBYTtFQUNsRCxJQUFJLENBQUNGLE9BQUEsSUFBWUMsU0FBQSxJQUFhRCxPQUFBLENBQVF6SyxRQUFBLElBQVksR0FDOUMsT0FBTztJQUFFTixJQUFBO0lBQU1zQztFQUFPO0VBQzFCLE9BQU91SSxnQkFBQSxDQUFpQkUsT0FBQSxFQUFTRSxhQUFhO0FBQ2xEO0FBQ0EsU0FBU1csaUJBQWlCNUwsSUFBQSxFQUFNOEssTUFBQSxFQUFRO0VBQ3BDLElBQUllLEdBQUEsR0FBTTdMLElBQUEsQ0FBS2dCLFNBQUEsQ0FBVUMsTUFBQTtFQUN6QixJQUFJTCxLQUFBLEdBQVFDLFFBQUEsQ0FBU0MsV0FBQSxDQUFZO0VBQ2pDLFNBQVN3SixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJdUIsR0FBQSxFQUFLdkIsQ0FBQSxJQUFLO0lBQzFCMUosS0FBQSxDQUFNRyxNQUFBLENBQU9mLElBQUEsRUFBTXNLLENBQUEsR0FBSSxDQUFDO0lBQ3hCMUosS0FBQSxDQUFNTSxRQUFBLENBQVNsQixJQUFBLEVBQU1zSyxDQUFDO0lBQ3RCLElBQUk1QyxJQUFBLEdBQU9vRSxVQUFBLENBQVdsTCxLQUFBLEVBQU8sQ0FBQztJQUM5QixJQUFJOEcsSUFBQSxDQUFLVCxHQUFBLElBQU9TLElBQUEsQ0FBS1IsTUFBQSxFQUNqQjtJQUNKLElBQUk2RSxNQUFBLENBQU9qQixNQUFBLEVBQVFwRCxJQUFJLEdBQ25CLE9BQU87TUFBRTFILElBQUE7TUFBTXNDLE1BQUEsRUFBUWdJLENBQUEsSUFBS1EsTUFBQSxDQUFPaEUsSUFBQSxLQUFTWSxJQUFBLENBQUtaLElBQUEsR0FBT1ksSUFBQSxDQUFLWCxLQUFBLElBQVMsSUFBSSxJQUFJO0lBQUc7RUFDekY7RUFDQSxPQUFPO0lBQUUvRyxJQUFBO0lBQU1zQyxNQUFBLEVBQVE7RUFBRTtBQUM3QjtBQUNBLFNBQVN5SixPQUFPakIsTUFBQSxFQUFRcEQsSUFBQSxFQUFNO0VBQzFCLE9BQU9vRCxNQUFBLENBQU9oRSxJQUFBLElBQVFZLElBQUEsQ0FBS1osSUFBQSxHQUFPLEtBQUtnRSxNQUFBLENBQU9oRSxJQUFBLElBQVFZLElBQUEsQ0FBS1gsS0FBQSxHQUFRLEtBQy9EK0QsTUFBQSxDQUFPN0QsR0FBQSxJQUFPUyxJQUFBLENBQUtULEdBQUEsR0FBTSxLQUFLNkQsTUFBQSxDQUFPN0QsR0FBQSxJQUFPUyxJQUFBLENBQUtSLE1BQUEsR0FBUztBQUNsRTtBQUNBLFNBQVM4RSxhQUFhckosR0FBQSxFQUFLbUksTUFBQSxFQUFRO0VBQy9CLElBQUkxSyxNQUFBLEdBQVN1QyxHQUFBLENBQUl4QyxVQUFBO0VBQ2pCLElBQUlDLE1BQUEsSUFBVSxRQUFRMEIsSUFBQSxDQUFLMUIsTUFBQSxDQUFPMkIsUUFBUSxLQUFLK0ksTUFBQSxDQUFPaEUsSUFBQSxHQUFPbkUsR0FBQSxDQUFJZ0YscUJBQUEsQ0FBc0IsRUFBRWIsSUFBQSxFQUNyRixPQUFPMUcsTUFBQTtFQUNYLE9BQU91QyxHQUFBO0FBQ1g7QUFDQSxTQUFTc0osZUFBZWhFLElBQUEsRUFBTWxFLEdBQUEsRUFBSytHLE1BQUEsRUFBUTtFQUN2QyxJQUFJO01BQUU5SyxJQUFBO01BQU1zQztJQUFPLElBQUl1SSxnQkFBQSxDQUFpQjlHLEdBQUEsRUFBSytHLE1BQU07SUFBR29CLElBQUEsR0FBTztFQUM3RCxJQUFJbE0sSUFBQSxDQUFLTSxRQUFBLElBQVksS0FBSyxDQUFDTixJQUFBLENBQUtzTCxVQUFBLEVBQVk7SUFDeEMsSUFBSTVELElBQUEsR0FBTzFILElBQUEsQ0FBSzJILHFCQUFBLENBQXNCO0lBQ3RDdUUsSUFBQSxHQUFPeEUsSUFBQSxDQUFLWixJQUFBLElBQVFZLElBQUEsQ0FBS1gsS0FBQSxJQUFTK0QsTUFBQSxDQUFPaEUsSUFBQSxJQUFRWSxJQUFBLENBQUtaLElBQUEsR0FBT1ksSUFBQSxDQUFLWCxLQUFBLElBQVMsSUFBSSxJQUFJO0VBQ3ZGO0VBQ0EsT0FBT2tCLElBQUEsQ0FBS2tFLE9BQUEsQ0FBUUMsVUFBQSxDQUFXcE0sSUFBQSxFQUFNc0MsTUFBQSxFQUFRNEosSUFBSTtBQUNyRDtBQUNBLFNBQVNHLGFBQWFwRSxJQUFBLEVBQU1qSSxJQUFBLEVBQU1zQyxNQUFBLEVBQVF3SSxNQUFBLEVBQVE7RUFPOUMsSUFBSXdCLFlBQUEsR0FBZTtFQUNuQixTQUFTekosR0FBQSxHQUFNN0MsSUFBQSxFQUFNdU0sUUFBQSxHQUFXLFNBQVM7SUFDckMsSUFBSTFKLEdBQUEsSUFBT29GLElBQUEsQ0FBS3RGLEdBQUEsRUFDWjtJQUNKLElBQUlDLElBQUEsR0FBT3FGLElBQUEsQ0FBS2tFLE9BQUEsQ0FBUUssV0FBQSxDQUFZM0osR0FBQSxFQUFLLElBQUk7TUFBRzZFLElBQUE7SUFDaEQsSUFBSSxDQUFDOUUsSUFBQSxFQUNELE9BQU87SUFDWCxJQUFJQSxJQUFBLENBQUtELEdBQUEsQ0FBSXJDLFFBQUEsSUFBWSxNQUFNc0MsSUFBQSxDQUFLNUMsSUFBQSxDQUFLOEMsT0FBQSxJQUFXRixJQUFBLENBQUt4QyxNQUFBLElBQVUsQ0FBQ3dDLElBQUEsQ0FBS0csVUFBQSxPQUVuRTJFLElBQUEsR0FBTzlFLElBQUEsQ0FBS0QsR0FBQSxDQUFJZ0YscUJBQUEsQ0FBc0IsR0FBR1gsS0FBQSxJQUFTVSxJQUFBLENBQUtQLE1BQUEsR0FBUztNQUNsRSxJQUFJdkUsSUFBQSxDQUFLNUMsSUFBQSxDQUFLOEMsT0FBQSxJQUFXRixJQUFBLENBQUt4QyxNQUFBLElBQVUsQ0FBQyx3QkFBd0IwQixJQUFBLENBQUtjLElBQUEsQ0FBS0QsR0FBQSxDQUFJWixRQUFRLEdBQUc7UUFFdEYsSUFBSSxDQUFDd0ssUUFBQSxJQUFZN0UsSUFBQSxDQUFLWixJQUFBLEdBQU9nRSxNQUFBLENBQU9oRSxJQUFBLElBQVFZLElBQUEsQ0FBS1QsR0FBQSxHQUFNNkQsTUFBQSxDQUFPN0QsR0FBQSxFQUMxRHFGLFlBQUEsR0FBZTFKLElBQUEsQ0FBSzZKLFNBQUEsVUFDZixDQUFDRixRQUFBLElBQVk3RSxJQUFBLENBQUtYLEtBQUEsR0FBUStELE1BQUEsQ0FBT2hFLElBQUEsSUFBUVksSUFBQSxDQUFLUixNQUFBLEdBQVM0RCxNQUFBLENBQU83RCxHQUFBLEVBQ25FcUYsWUFBQSxHQUFlMUosSUFBQSxDQUFLOEosUUFBQTtRQUN4QkgsUUFBQSxHQUFXO01BQ2Y7TUFDQSxJQUFJLENBQUMzSixJQUFBLENBQUtHLFVBQUEsSUFBY3VKLFlBQUEsR0FBZSxLQUFLLENBQUMxSixJQUFBLENBQUs1QyxJQUFBLENBQUsyTSxNQUFBLEVBQVE7UUFFM0QsSUFBSUMsTUFBQSxHQUFTaEssSUFBQSxDQUFLNUMsSUFBQSxDQUFLOEMsT0FBQSxHQUFVZ0ksTUFBQSxDQUFPN0QsR0FBQSxJQUFPUyxJQUFBLENBQUtULEdBQUEsR0FBTVMsSUFBQSxDQUFLUixNQUFBLElBQVUsSUFDbkU0RCxNQUFBLENBQU9oRSxJQUFBLElBQVFZLElBQUEsQ0FBS1osSUFBQSxHQUFPWSxJQUFBLENBQUtYLEtBQUEsSUFBUztRQUMvQyxPQUFPNkYsTUFBQSxHQUFTaEssSUFBQSxDQUFLNkosU0FBQSxHQUFZN0osSUFBQSxDQUFLOEosUUFBQTtNQUMxQztJQUNKO0lBQ0E3SixHQUFBLEdBQU1ELElBQUEsQ0FBS0QsR0FBQSxDQUFJeEMsVUFBQTtFQUNuQjtFQUNBLE9BQU9tTSxZQUFBLEdBQWUsS0FBS0EsWUFBQSxHQUFlckUsSUFBQSxDQUFLa0UsT0FBQSxDQUFRQyxVQUFBLENBQVdwTSxJQUFBLEVBQU1zQyxNQUFBLEVBQVEsRUFBRTtBQUN0RjtBQUNBLFNBQVNzSCxpQkFBaUJpRCxPQUFBLEVBQVMvQixNQUFBLEVBQVFnQyxHQUFBLEVBQUs7RUFDNUMsSUFBSWpCLEdBQUEsR0FBTWdCLE9BQUEsQ0FBUTNLLFVBQUEsQ0FBV2pCLE1BQUE7RUFDN0IsSUFBSTRLLEdBQUEsSUFBT2lCLEdBQUEsQ0FBSTdGLEdBQUEsR0FBTTZGLEdBQUEsQ0FBSTVGLE1BQUEsRUFBUTtJQUM3QixTQUFTNkYsTUFBQSxHQUFTdkksSUFBQSxDQUFLK0UsR0FBQSxDQUFJLEdBQUcvRSxJQUFBLENBQUtDLEdBQUEsQ0FBSW9ILEdBQUEsR0FBTSxHQUFHckgsSUFBQSxDQUFLd0ksS0FBQSxDQUFNbkIsR0FBQSxJQUFPZixNQUFBLENBQU83RCxHQUFBLEdBQU02RixHQUFBLENBQUk3RixHQUFBLEtBQVE2RixHQUFBLENBQUk1RixNQUFBLEdBQVM0RixHQUFBLENBQUk3RixHQUFBLENBQUksSUFBSSxDQUFDLENBQUMsR0FBR3FELENBQUEsR0FBSXlDLE1BQUEsSUFBVTtNQUNuSSxJQUFJOUssS0FBQSxHQUFRNEssT0FBQSxDQUFRM0ssVUFBQSxDQUFXb0ksQ0FBQTtNQUMvQixJQUFJckksS0FBQSxDQUFNM0IsUUFBQSxJQUFZLEdBQUc7UUFDckIsSUFBSW1MLEtBQUEsR0FBUXhKLEtBQUEsQ0FBTXlKLGNBQUEsQ0FBZTtRQUNqQyxTQUFTdUIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSXhCLEtBQUEsQ0FBTXhLLE1BQUEsRUFBUWdNLENBQUEsSUFBSztVQUNuQyxJQUFJdkYsSUFBQSxHQUFPK0QsS0FBQSxDQUFNd0IsQ0FBQTtVQUNqQixJQUFJbEIsTUFBQSxDQUFPakIsTUFBQSxFQUFRcEQsSUFBSSxHQUNuQixPQUFPa0MsZ0JBQUEsQ0FBaUIzSCxLQUFBLEVBQU82SSxNQUFBLEVBQVFwRCxJQUFJO1FBQ25EO01BQ0o7TUFDQSxLQUFLNEMsQ0FBQSxJQUFLQSxDQUFBLEdBQUksS0FBS3VCLEdBQUEsS0FBUWtCLE1BQUEsRUFDdkI7SUFDUjtFQUNKO0VBQ0EsT0FBT0YsT0FBQTtBQUNYO0FBRUEsU0FBU0ssWUFBWWpGLElBQUEsRUFBTTZDLE1BQUEsRUFBUTtFQUMvQixJQUFJaEgsSUFBQSxHQUFNbUUsSUFBQSxDQUFLdEYsR0FBQSxDQUFJMkYsYUFBQTtJQUFldEksSUFBQTtJQUFNc0MsTUFBQSxHQUFTO0VBQ2pELElBQUk2SyxLQUFBLEdBQVFqSixjQUFBLENBQWVKLElBQUEsRUFBS2dILE1BQUEsQ0FBT2hFLElBQUEsRUFBTWdFLE1BQUEsQ0FBTzdELEdBQUc7RUFDdkQsSUFBSWtHLEtBQUEsRUFDQSxDQUFDO0lBQUVuTixJQUFBO0lBQU1zQztFQUFPLElBQUk2SyxLQUFBO0VBQ3hCLElBQUlwSixHQUFBLElBQU9rRSxJQUFBLENBQUswQixJQUFBLENBQUtDLGdCQUFBLEdBQW1CM0IsSUFBQSxDQUFLMEIsSUFBQSxHQUFPN0YsSUFBQSxFQUMvQzhGLGdCQUFBLENBQWlCa0IsTUFBQSxDQUFPaEUsSUFBQSxFQUFNZ0UsTUFBQSxDQUFPN0QsR0FBRztFQUM3QyxJQUFJM0MsR0FBQTtFQUNKLElBQUksQ0FBQ1AsR0FBQSxJQUFPLENBQUNrRSxJQUFBLENBQUt0RixHQUFBLENBQUlrSCxRQUFBLENBQVM5RixHQUFBLENBQUl6RCxRQUFBLElBQVksSUFBSXlELEdBQUEsQ0FBSTVELFVBQUEsR0FBYTRELEdBQUcsR0FBRztJQUN0RSxJQUFJK0ksR0FBQSxHQUFNN0UsSUFBQSxDQUFLdEYsR0FBQSxDQUFJZ0YscUJBQUEsQ0FBc0I7SUFDekMsSUFBSSxDQUFDb0UsTUFBQSxDQUFPakIsTUFBQSxFQUFRZ0MsR0FBRyxHQUNuQixPQUFPO0lBQ1gvSSxHQUFBLEdBQU02RixnQkFBQSxDQUFpQjNCLElBQUEsQ0FBS3RGLEdBQUEsRUFBS21JLE1BQUEsRUFBUWdDLEdBQUc7SUFDNUMsSUFBSSxDQUFDL0ksR0FBQSxFQUNELE9BQU87RUFDZjtFQUVBLElBQUkrQixNQUFBLEVBQVE7SUFDUixTQUFTc0gsQ0FBQSxHQUFJckosR0FBQSxFQUFLL0QsSUFBQSxJQUFRb04sQ0FBQSxFQUFHQSxDQUFBLEdBQUlqTixVQUFBLENBQVdpTixDQUFDLEdBQ3pDLElBQUlBLENBQUEsQ0FBRUMsU0FBQSxFQUNGck4sSUFBQSxHQUFPO0VBQ25CO0VBQ0ErRCxHQUFBLEdBQU1pSSxZQUFBLENBQWFqSSxHQUFBLEVBQUsrRyxNQUFNO0VBQzlCLElBQUk5SyxJQUFBLEVBQU07SUFDTixJQUFJMEYsS0FBQSxJQUFTMUYsSUFBQSxDQUFLTSxRQUFBLElBQVksR0FBRztNQUc3QmdDLE1BQUEsR0FBU2tDLElBQUEsQ0FBS0MsR0FBQSxDQUFJbkMsTUFBQSxFQUFRdEMsSUFBQSxDQUFLa0MsVUFBQSxDQUFXakIsTUFBTTtNQUdoRCxJQUFJcUIsTUFBQSxHQUFTdEMsSUFBQSxDQUFLa0MsVUFBQSxDQUFXakIsTUFBQSxFQUFRO1FBQ2pDLElBQUlxTSxJQUFBLEdBQU90TixJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQUE7VUFBU3dLLEdBQUE7UUFDcEMsSUFBSVEsSUFBQSxDQUFLdkwsUUFBQSxJQUFZLFVBQVUrSyxHQUFBLEdBQU1RLElBQUEsQ0FBSzNGLHFCQUFBLENBQXNCLEdBQUdaLEtBQUEsSUFBUytELE1BQUEsQ0FBT2hFLElBQUEsSUFDL0VnRyxHQUFBLENBQUk1RixNQUFBLEdBQVM0RCxNQUFBLENBQU83RCxHQUFBLEVBQ3BCM0UsTUFBQTtNQUNSO0lBQ0o7SUFDQSxJQUFJaUwsSUFBQTtJQUVKLElBQUlqSCxNQUFBLElBQVVoRSxNQUFBLElBQVV0QyxJQUFBLENBQUtNLFFBQUEsSUFBWSxNQUFNaU4sSUFBQSxHQUFPdk4sSUFBQSxDQUFLa0MsVUFBQSxDQUFXSSxNQUFBLEdBQVMsSUFBSWhDLFFBQUEsSUFBWSxLQUMzRmlOLElBQUEsQ0FBS3ZMLGVBQUEsSUFBbUIsV0FBV3VMLElBQUEsQ0FBSzVGLHFCQUFBLENBQXNCLEVBQUVWLEdBQUEsSUFBTzZELE1BQUEsQ0FBTzdELEdBQUEsRUFDOUUzRSxNQUFBO0lBR0osSUFBSXRDLElBQUEsSUFBUWlJLElBQUEsQ0FBS3RGLEdBQUEsSUFBT0wsTUFBQSxJQUFVdEMsSUFBQSxDQUFLa0MsVUFBQSxDQUFXakIsTUFBQSxHQUFTLEtBQUtqQixJQUFBLENBQUt3TixTQUFBLENBQVVsTixRQUFBLElBQVksS0FDdkZ3SyxNQUFBLENBQU83RCxHQUFBLEdBQU1qSCxJQUFBLENBQUt3TixTQUFBLENBQVU3RixxQkFBQSxDQUFzQixFQUFFVCxNQUFBLEVBQ3BENUMsR0FBQSxHQUFNMkQsSUFBQSxDQUFLd0YsS0FBQSxDQUFNekksR0FBQSxDQUFJMEksT0FBQSxDQUFRQyxJQUFBLFVBSXhCckwsTUFBQSxJQUFVLEtBQUt0QyxJQUFBLENBQUtNLFFBQUEsSUFBWSxLQUFLTixJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQUEsR0FBUyxHQUFHUCxRQUFBLElBQVksTUFDbEZ1QyxHQUFBLEdBQU0rSCxZQUFBLENBQWFwRSxJQUFBLEVBQU1qSSxJQUFBLEVBQU1zQyxNQUFBLEVBQVF3SSxNQUFNO0VBQ3JEO0VBQ0EsSUFBSXhHLEdBQUEsSUFBTyxNQUNQQSxHQUFBLEdBQU0ySCxjQUFBLENBQWVoRSxJQUFBLEVBQU1sRSxHQUFBLEVBQUsrRyxNQUFNO0VBQzFDLElBQUlsSSxJQUFBLEdBQU9xRixJQUFBLENBQUtrRSxPQUFBLENBQVFLLFdBQUEsQ0FBWXpJLEdBQUEsRUFBSyxJQUFJO0VBQzdDLE9BQU87SUFBRU8sR0FBQTtJQUFLc0osTUFBQSxFQUFRaEwsSUFBQSxHQUFPQSxJQUFBLENBQUtpTCxVQUFBLEdBQWFqTCxJQUFBLENBQUtrTCxNQUFBLEdBQVM7RUFBRztBQUNwRTtBQUNBLFNBQVNDLFFBQVFyRyxJQUFBLEVBQU07RUFDbkIsT0FBT0EsSUFBQSxDQUFLVCxHQUFBLEdBQU1TLElBQUEsQ0FBS1IsTUFBQSxJQUFVUSxJQUFBLENBQUtaLElBQUEsR0FBT1ksSUFBQSxDQUFLWCxLQUFBO0FBQ3REO0FBQ0EsU0FBUytFLFdBQVdrQyxNQUFBLEVBQVE5QixJQUFBLEVBQU07RUFDOUIsSUFBSVQsS0FBQSxHQUFRdUMsTUFBQSxDQUFPdEMsY0FBQSxDQUFlO0VBQ2xDLElBQUlELEtBQUEsQ0FBTXhLLE1BQUEsRUFBUTtJQUNkLElBQUlnTixLQUFBLEdBQVF4QyxLQUFBLENBQU1TLElBQUEsR0FBTyxJQUFJLElBQUlULEtBQUEsQ0FBTXhLLE1BQUEsR0FBUztJQUNoRCxJQUFJOE0sT0FBQSxDQUFRRSxLQUFLLEdBQ2IsT0FBT0EsS0FBQTtFQUNmO0VBQ0EsT0FBT0MsS0FBQSxDQUFNQyxTQUFBLENBQVVDLElBQUEsQ0FBS0MsSUFBQSxDQUFLNUMsS0FBQSxFQUFPc0MsT0FBTyxLQUFLQyxNQUFBLENBQU9yRyxxQkFBQSxDQUFzQjtBQUNyRjtBQUNBLElBQU0yRyxJQUFBLEdBQU87QUFHYixTQUFTQyxZQUFZdEcsSUFBQSxFQUFNM0QsR0FBQSxFQUFLa0QsSUFBQSxFQUFNO0VBQ2xDLElBQUk7SUFBRXhILElBQUE7SUFBTXNDLE1BQUE7SUFBUWtNO0VBQUssSUFBSXZHLElBQUEsQ0FBS2tFLE9BQUEsQ0FBUXNDLFVBQUEsQ0FBV25LLEdBQUEsRUFBS2tELElBQUEsR0FBTyxJQUFJLEtBQUssQ0FBQztFQUMzRSxJQUFJa0gsaUJBQUEsR0FBb0JwSSxNQUFBLElBQVVaLEtBQUE7RUFDbEMsSUFBSTFGLElBQUEsQ0FBS00sUUFBQSxJQUFZLEdBQUc7SUFHcEIsSUFBSW9PLGlCQUFBLEtBQXNCSixJQUFBLENBQUt4TSxJQUFBLENBQUs5QixJQUFBLENBQUtnQixTQUFTLE1BQU13RyxJQUFBLEdBQU8sSUFBSSxDQUFDbEYsTUFBQSxHQUFTQSxNQUFBLElBQVV0QyxJQUFBLENBQUtnQixTQUFBLENBQVVDLE1BQUEsSUFBVTtNQUM1RyxJQUFJeUcsSUFBQSxHQUFPb0UsVUFBQSxDQUFXckwsU0FBQSxDQUFVVCxJQUFBLEVBQU1zQyxNQUFBLEVBQVFBLE1BQU0sR0FBR2tGLElBQUk7TUFJM0QsSUFBSTlCLEtBQUEsSUFBU3BELE1BQUEsSUFBVSxLQUFLUixJQUFBLENBQUs5QixJQUFBLENBQUtnQixTQUFBLENBQVVzQixNQUFBLEdBQVMsRUFBRSxLQUFLQSxNQUFBLEdBQVN0QyxJQUFBLENBQUtnQixTQUFBLENBQVVDLE1BQUEsRUFBUTtRQUM1RixJQUFJME4sVUFBQSxHQUFhN0MsVUFBQSxDQUFXckwsU0FBQSxDQUFVVCxJQUFBLEVBQU1zQyxNQUFBLEdBQVMsR0FBR0EsTUFBQSxHQUFTLENBQUMsR0FBRyxFQUFFO1FBQ3ZFLElBQUlxTSxVQUFBLENBQVcxSCxHQUFBLElBQU9TLElBQUEsQ0FBS1QsR0FBQSxFQUFLO1VBQzVCLElBQUkySCxTQUFBLEdBQVk5QyxVQUFBLENBQVdyTCxTQUFBLENBQVVULElBQUEsRUFBTXNDLE1BQUEsRUFBUUEsTUFBQSxHQUFTLENBQUMsR0FBRyxFQUFFO1VBQ2xFLElBQUlzTSxTQUFBLENBQVUzSCxHQUFBLElBQU9TLElBQUEsQ0FBS1QsR0FBQSxFQUN0QixPQUFPNEgsUUFBQSxDQUFTRCxTQUFBLEVBQVdBLFNBQUEsQ0FBVTlILElBQUEsR0FBTzZILFVBQUEsQ0FBVzdILElBQUk7UUFDbkU7TUFDSjtNQUNBLE9BQU9ZLElBQUE7SUFDWCxPQUNLO01BQ0QsSUFBSWhILElBQUEsR0FBTzRCLE1BQUE7UUFBUTNCLEVBQUEsR0FBSzJCLE1BQUE7UUFBUXdNLFFBQUEsR0FBV3RILElBQUEsR0FBTyxJQUFJLElBQUk7TUFDMUQsSUFBSUEsSUFBQSxHQUFPLEtBQUssQ0FBQ2xGLE1BQUEsRUFBUTtRQUNyQjNCLEVBQUE7UUFDQW1PLFFBQUEsR0FBVztNQUNmLFdBQ1N0SCxJQUFBLElBQVEsS0FBS2xGLE1BQUEsSUFBVXRDLElBQUEsQ0FBS2dCLFNBQUEsQ0FBVUMsTUFBQSxFQUFRO1FBQ25EUCxJQUFBO1FBQ0FvTyxRQUFBLEdBQVc7TUFDZixXQUNTdEgsSUFBQSxHQUFPLEdBQUc7UUFDZjlHLElBQUE7TUFDSixPQUNLO1FBQ0RDLEVBQUE7TUFDSjtNQUNBLE9BQU9rTyxRQUFBLENBQVMvQyxVQUFBLENBQVdyTCxTQUFBLENBQVVULElBQUEsRUFBTVUsSUFBQSxFQUFNQyxFQUFFLEdBQUdtTyxRQUFRLEdBQUdBLFFBQUEsR0FBVyxDQUFDO0lBQ2pGO0VBQ0o7RUFDQSxJQUFJQyxJQUFBLEdBQU85RyxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLENBQUlnSyxPQUFBLENBQVExSyxHQUFBLElBQU9rSyxJQUFBLElBQVEsRUFBRTtFQUVuRCxJQUFJLENBQUNPLElBQUEsQ0FBSzNPLE1BQUEsQ0FBTzZPLGFBQUEsRUFBZTtJQUM1QixJQUFJVCxJQUFBLElBQVEsUUFBUWxNLE1BQUEsS0FBV2tGLElBQUEsR0FBTyxLQUFLbEYsTUFBQSxJQUFVVixRQUFBLENBQVM1QixJQUFJLElBQUk7TUFDbEUsSUFBSTRNLE1BQUEsR0FBUzVNLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV0ksTUFBQSxHQUFTO01BQ3RDLElBQUlzSyxNQUFBLENBQU90TSxRQUFBLElBQVksR0FDbkIsT0FBTzRPLFFBQUEsQ0FBU3RDLE1BQUEsQ0FBT2pGLHFCQUFBLENBQXNCLEdBQUcsS0FBSztJQUM3RDtJQUNBLElBQUk2RyxJQUFBLElBQVEsUUFBUWxNLE1BQUEsR0FBU1YsUUFBQSxDQUFTNUIsSUFBSSxHQUFHO01BQ3pDLElBQUltUCxLQUFBLEdBQVFuUCxJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQUE7TUFDNUIsSUFBSTZNLEtBQUEsQ0FBTTdPLFFBQUEsSUFBWSxHQUNsQixPQUFPNE8sUUFBQSxDQUFTQyxLQUFBLENBQU14SCxxQkFBQSxDQUFzQixHQUFHLElBQUk7SUFDM0Q7SUFDQSxPQUFPdUgsUUFBQSxDQUFTbFAsSUFBQSxDQUFLMkgscUJBQUEsQ0FBc0IsR0FBR0gsSUFBQSxJQUFRLENBQUM7RUFDM0Q7RUFFQSxJQUFJZ0gsSUFBQSxJQUFRLFFBQVFsTSxNQUFBLEtBQVdrRixJQUFBLEdBQU8sS0FBS2xGLE1BQUEsSUFBVVYsUUFBQSxDQUFTNUIsSUFBSSxJQUFJO0lBQ2xFLElBQUk0TSxNQUFBLEdBQVM1TSxJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQUEsR0FBUztJQUN0QyxJQUFJMEwsTUFBQSxHQUFTcEIsTUFBQSxDQUFPdE0sUUFBQSxJQUFZLElBQUlHLFNBQUEsQ0FBVW1NLE1BQUEsRUFBUWhMLFFBQUEsQ0FBU2dMLE1BQU0sS0FBSzhCLGlCQUFBLEdBQW9CLElBQUksRUFBRSxJQUc5RjlCLE1BQUEsQ0FBT3RNLFFBQUEsSUFBWSxNQUFNc00sTUFBQSxDQUFPN0ssUUFBQSxJQUFZLFFBQVEsQ0FBQzZLLE1BQUEsQ0FBT3BCLFdBQUEsSUFBZW9CLE1BQUEsR0FBUztJQUMxRixJQUFJb0IsTUFBQSxFQUNBLE9BQU9hLFFBQUEsQ0FBUy9DLFVBQUEsQ0FBV2tDLE1BQUEsRUFBUSxDQUFDLEdBQUcsS0FBSztFQUNwRDtFQUNBLElBQUlRLElBQUEsSUFBUSxRQUFRbE0sTUFBQSxHQUFTVixRQUFBLENBQVM1QixJQUFJLEdBQUc7SUFDekMsSUFBSW1QLEtBQUEsR0FBUW5QLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV0ksTUFBQTtJQUM1QixPQUFPNk0sS0FBQSxDQUFNaE4sVUFBQSxJQUFjZ04sS0FBQSxDQUFNaE4sVUFBQSxDQUFXaU4sZUFBQSxFQUN4Q0QsS0FBQSxHQUFRQSxLQUFBLENBQU0zRCxXQUFBO0lBQ2xCLElBQUl3QyxNQUFBLEdBQVMsQ0FBQ21CLEtBQUEsR0FBUSxPQUFPQSxLQUFBLENBQU03TyxRQUFBLElBQVksSUFBSUcsU0FBQSxDQUFVME8sS0FBQSxFQUFPLEdBQUlULGlCQUFBLEdBQW9CLElBQUksQ0FBRSxJQUM1RlMsS0FBQSxDQUFNN08sUUFBQSxJQUFZLElBQUk2TyxLQUFBLEdBQVE7SUFDcEMsSUFBSW5CLE1BQUEsRUFDQSxPQUFPYSxRQUFBLENBQVMvQyxVQUFBLENBQVdrQyxNQUFBLEVBQVEsRUFBRSxHQUFHLElBQUk7RUFDcEQ7RUFFQSxPQUFPYSxRQUFBLENBQVMvQyxVQUFBLENBQVc5TCxJQUFBLENBQUtNLFFBQUEsSUFBWSxJQUFJRyxTQUFBLENBQVVULElBQUksSUFBSUEsSUFBQSxFQUFNLENBQUN3SCxJQUFJLEdBQUdBLElBQUEsSUFBUSxDQUFDO0FBQzdGO0FBQ0EsU0FBU3FILFNBQVNuSCxJQUFBLEVBQU1aLElBQUEsRUFBTTtFQUMxQixJQUFJWSxJQUFBLENBQUtWLEtBQUEsSUFBUyxHQUNkLE9BQU9VLElBQUE7RUFDWCxJQUFJdkQsQ0FBQSxHQUFJMkMsSUFBQSxHQUFPWSxJQUFBLENBQUtaLElBQUEsR0FBT1ksSUFBQSxDQUFLWCxLQUFBO0VBQ2hDLE9BQU87SUFBRUUsR0FBQSxFQUFLUyxJQUFBLENBQUtULEdBQUE7SUFBS0MsTUFBQSxFQUFRUSxJQUFBLENBQUtSLE1BQUE7SUFBUUosSUFBQSxFQUFNM0MsQ0FBQTtJQUFHNEMsS0FBQSxFQUFPNUM7RUFBRTtBQUNuRTtBQUNBLFNBQVMrSyxTQUFTeEgsSUFBQSxFQUFNVCxHQUFBLEVBQUs7RUFDekIsSUFBSVMsSUFBQSxDQUFLUCxNQUFBLElBQVUsR0FDZixPQUFPTyxJQUFBO0VBQ1gsSUFBSXRELENBQUEsR0FBSTZDLEdBQUEsR0FBTVMsSUFBQSxDQUFLVCxHQUFBLEdBQU1TLElBQUEsQ0FBS1IsTUFBQTtFQUM5QixPQUFPO0lBQUVELEdBQUEsRUFBSzdDLENBQUE7SUFBRzhDLE1BQUEsRUFBUTlDLENBQUE7SUFBRzBDLElBQUEsRUFBTVksSUFBQSxDQUFLWixJQUFBO0lBQU1DLEtBQUEsRUFBT1csSUFBQSxDQUFLWDtFQUFNO0FBQ25FO0FBQ0EsU0FBU3NJLGlCQUFpQnBILElBQUEsRUFBTXdGLEtBQUEsRUFBTzZCLENBQUEsRUFBRztFQUN0QyxJQUFJQyxTQUFBLEdBQVl0SCxJQUFBLENBQUt3RixLQUFBO0lBQU8rQixNQUFBLEdBQVN2SCxJQUFBLENBQUswQixJQUFBLENBQUszRixhQUFBO0VBQy9DLElBQUl1TCxTQUFBLElBQWE5QixLQUFBLEVBQ2J4RixJQUFBLENBQUt3SCxXQUFBLENBQVloQyxLQUFLO0VBQzFCLElBQUkrQixNQUFBLElBQVV2SCxJQUFBLENBQUt0RixHQUFBLEVBQ2ZzRixJQUFBLENBQUt5QyxLQUFBLENBQU07RUFDZixJQUFJO0lBQ0EsT0FBTzRFLENBQUEsQ0FBRTtFQUNiLFVBQ0E7SUFDSSxJQUFJQyxTQUFBLElBQWE5QixLQUFBLEVBQ2J4RixJQUFBLENBQUt3SCxXQUFBLENBQVlGLFNBQVM7SUFDOUIsSUFBSUMsTUFBQSxJQUFVdkgsSUFBQSxDQUFLdEYsR0FBQSxJQUFPNk0sTUFBQSxFQUN0QkEsTUFBQSxDQUFPOUUsS0FBQSxDQUFNO0VBQ3JCO0FBQ0o7QUFHQSxTQUFTZ0YsdUJBQXVCekgsSUFBQSxFQUFNd0YsS0FBQSxFQUFPL0wsR0FBQSxFQUFLO0VBQzlDLElBQUlpTyxHQUFBLEdBQU1sQyxLQUFBLENBQU1tQyxTQUFBO0VBQ2hCLElBQUlDLElBQUEsR0FBT25PLEdBQUEsSUFBTyxPQUFPaU8sR0FBQSxDQUFJRyxLQUFBLEdBQVFILEdBQUEsQ0FBSUksR0FBQTtFQUN6QyxPQUFPVixnQkFBQSxDQUFpQnBILElBQUEsRUFBTXdGLEtBQUEsRUFBTyxNQUFNO0lBQ3ZDLElBQUk7TUFBRXpOLElBQUEsRUFBTTJDO0lBQUksSUFBSXNGLElBQUEsQ0FBS2tFLE9BQUEsQ0FBUXNDLFVBQUEsQ0FBV29CLElBQUEsQ0FBS3ZMLEdBQUEsRUFBSzVDLEdBQUEsSUFBTyxPQUFPLEtBQUssQ0FBQztJQUMxRSxTQUFTO01BQ0wsSUFBSXNPLE9BQUEsR0FBVS9ILElBQUEsQ0FBS2tFLE9BQUEsQ0FBUUssV0FBQSxDQUFZN0osR0FBQSxFQUFLLElBQUk7TUFDaEQsSUFBSSxDQUFDcU4sT0FBQSxFQUNEO01BQ0osSUFBSUEsT0FBQSxDQUFRaFEsSUFBQSxDQUFLOEMsT0FBQSxFQUFTO1FBQ3RCSCxHQUFBLEdBQU1xTixPQUFBLENBQVFqTixVQUFBLElBQWNpTixPQUFBLENBQVFyTixHQUFBO1FBQ3BDO01BQ0o7TUFDQUEsR0FBQSxHQUFNcU4sT0FBQSxDQUFRck4sR0FBQSxDQUFJeEMsVUFBQTtJQUN0QjtJQUNBLElBQUkySyxNQUFBLEdBQVN5RCxXQUFBLENBQVl0RyxJQUFBLEVBQU00SCxJQUFBLENBQUt2TCxHQUFBLEVBQUssQ0FBQztJQUMxQyxTQUFTckMsS0FBQSxHQUFRVSxHQUFBLENBQUkySSxVQUFBLEVBQVlySixLQUFBLEVBQU9BLEtBQUEsR0FBUUEsS0FBQSxDQUFNdUosV0FBQSxFQUFhO01BQy9ELElBQUl5RSxLQUFBO01BQ0osSUFBSWhPLEtBQUEsQ0FBTTNCLFFBQUEsSUFBWSxHQUNsQjJQLEtBQUEsR0FBUWhPLEtBQUEsQ0FBTXlKLGNBQUEsQ0FBZSxXQUN4QnpKLEtBQUEsQ0FBTTNCLFFBQUEsSUFBWSxHQUN2QjJQLEtBQUEsR0FBUXhQLFNBQUEsQ0FBVXdCLEtBQUEsRUFBTyxHQUFHQSxLQUFBLENBQU1qQixTQUFBLENBQVVDLE1BQU0sRUFBRXlLLGNBQUEsQ0FBZSxPQUVuRTtNQUNKLFNBQVNwQixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJMkYsS0FBQSxDQUFNaFAsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO1FBQ25DLElBQUl3QyxHQUFBLEdBQU1tRCxLQUFBLENBQU0zRixDQUFBO1FBQ2hCLElBQUl3QyxHQUFBLENBQUk1RixNQUFBLEdBQVM0RixHQUFBLENBQUk3RixHQUFBLEdBQU0sTUFDdEJ2RixHQUFBLElBQU8sT0FBT29KLE1BQUEsQ0FBTzdELEdBQUEsR0FBTTZGLEdBQUEsQ0FBSTdGLEdBQUEsSUFBTzZGLEdBQUEsQ0FBSTVGLE1BQUEsR0FBUzRELE1BQUEsQ0FBTzdELEdBQUEsSUFBTyxJQUM1RDZGLEdBQUEsQ0FBSTVGLE1BQUEsR0FBUzRELE1BQUEsQ0FBTzVELE1BQUEsSUFBVTRELE1BQUEsQ0FBTzVELE1BQUEsR0FBUzRGLEdBQUEsQ0FBSTdGLEdBQUEsSUFBTyxJQUMvRCxPQUFPO01BQ2Y7SUFDSjtJQUNBLE9BQU87RUFDWCxDQUFDO0FBQ0w7QUFDQSxJQUFNaUosUUFBQSxHQUFXO0FBQ2pCLFNBQVNDLHlCQUF5QmxJLElBQUEsRUFBTXdGLEtBQUEsRUFBTy9MLEdBQUEsRUFBSztFQUNoRCxJQUFJO0lBQUUwTztFQUFNLElBQUkzQyxLQUFBLENBQU1tQyxTQUFBO0VBQ3RCLElBQUksQ0FBQ1EsS0FBQSxDQUFNaFEsTUFBQSxDQUFPaVEsV0FBQSxFQUNkLE9BQU87RUFDWCxJQUFJL04sTUFBQSxHQUFTOE4sS0FBQSxDQUFNRSxZQUFBO0lBQWM3TixPQUFBLEdBQVUsQ0FBQ0gsTUFBQTtJQUFRSSxLQUFBLEdBQVFKLE1BQUEsSUFBVThOLEtBQUEsQ0FBTWhRLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUUMsSUFBQTtFQUMzRixJQUFJZ0MsR0FBQSxHQUFNMUgsSUFBQSxDQUFLc0ksWUFBQSxDQUFhO0VBQzVCLElBQUksQ0FBQ1osR0FBQSxFQUNELE9BQU9TLEtBQUEsQ0FBTTlMLEdBQUEsSUFBTzhMLEtBQUEsQ0FBTUksS0FBQSxDQUFNLEtBQUtKLEtBQUEsQ0FBTTlMLEdBQUEsSUFBTzhMLEtBQUEsQ0FBTUssR0FBQSxDQUFJO0VBR2hFLElBQUksQ0FBQ1AsUUFBQSxDQUFTcE8sSUFBQSxDQUFLc08sS0FBQSxDQUFNaFEsTUFBQSxDQUFPc1EsV0FBVyxLQUFLLENBQUNmLEdBQUEsQ0FBSWdCLE1BQUEsRUFDakQsT0FBT2pQLEdBQUEsSUFBTyxVQUFVQSxHQUFBLElBQU8sYUFBYWUsT0FBQSxHQUFVQyxLQUFBO0VBQzFELE9BQU8yTSxnQkFBQSxDQUFpQnBILElBQUEsRUFBTXdGLEtBQUEsRUFBTyxNQUFNO0lBTXZDLElBQUk7TUFBRXZLLFNBQUEsRUFBVzBOLE9BQUE7TUFBU3pOLFdBQUEsRUFBYTBOLE1BQUE7TUFBUXpOLFVBQUE7TUFBWUM7SUFBYSxJQUFJNEUsSUFBQSxDQUFLNkksaUJBQUEsQ0FBa0I7SUFDbkcsSUFBSUMsWUFBQSxHQUFlcEIsR0FBQSxDQUFJcUIsY0FBQTtJQUV2QnJCLEdBQUEsQ0FBSWdCLE1BQUEsQ0FBTyxRQUFRalAsR0FBQSxFQUFLLFdBQVc7SUFDbkMsSUFBSXVQLFNBQUEsR0FBWWIsS0FBQSxDQUFNYyxLQUFBLEdBQVFqSixJQUFBLENBQUtrRSxPQUFBLENBQVFnRixXQUFBLENBQVlmLEtBQUEsQ0FBTXhELE1BQUEsQ0FBTyxDQUFDLElBQUkzRSxJQUFBLENBQUt0RixHQUFBO0lBQzlFLElBQUk7TUFBRU8sU0FBQSxFQUFXa08sT0FBQTtNQUFTak8sV0FBQSxFQUFha087SUFBTyxJQUFJcEosSUFBQSxDQUFLNkksaUJBQUEsQ0FBa0I7SUFDekUsSUFBSVEsTUFBQSxHQUFTRixPQUFBLElBQVcsQ0FBQ0gsU0FBQSxDQUFVcEgsUUFBQSxDQUFTdUgsT0FBQSxDQUFROVEsUUFBQSxJQUFZLElBQUk4USxPQUFBLEdBQVVBLE9BQUEsQ0FBUWpSLFVBQVUsS0FDM0Z5USxPQUFBLElBQVdRLE9BQUEsSUFBV1AsTUFBQSxJQUFVUSxNQUFBO0lBRXJDLElBQUk7TUFDQTFCLEdBQUEsQ0FBSTRCLFFBQUEsQ0FBU25PLFVBQUEsRUFBWUMsWUFBWTtNQUNyQyxJQUFJdU4sT0FBQSxLQUFZQSxPQUFBLElBQVd4TixVQUFBLElBQWN5TixNQUFBLElBQVV4TixZQUFBLEtBQWlCc00sR0FBQSxDQUFJNkIsTUFBQSxFQUNwRTdCLEdBQUEsQ0FBSTZCLE1BQUEsQ0FBT1osT0FBQSxFQUFTQyxNQUFNO0lBQ2xDLFNBQ09uTSxDQUFBLEVBQVAsQ0FBWTtJQUNaLElBQUlxTSxZQUFBLElBQWdCLE1BQ2hCcEIsR0FBQSxDQUFJcUIsY0FBQSxHQUFpQkQsWUFBQTtJQUN6QixPQUFPTyxNQUFBO0VBQ1gsQ0FBQztBQUNMO0FBQ0EsSUFBSUcsV0FBQSxHQUFjO0FBQ2xCLElBQUlDLFNBQUEsR0FBWTtBQUNoQixJQUFJQyxZQUFBLEdBQWU7QUFDbkIsU0FBU0MsZUFBZTNKLElBQUEsRUFBTXdGLEtBQUEsRUFBTy9MLEdBQUEsRUFBSztFQUN0QyxJQUFJK1AsV0FBQSxJQUFlaEUsS0FBQSxJQUFTaUUsU0FBQSxJQUFhaFEsR0FBQSxFQUNyQyxPQUFPaVEsWUFBQTtFQUNYRixXQUFBLEdBQWNoRSxLQUFBO0VBQ2RpRSxTQUFBLEdBQVloUSxHQUFBO0VBQ1osT0FBT2lRLFlBQUEsR0FBZWpRLEdBQUEsSUFBTyxRQUFRQSxHQUFBLElBQU8sU0FDdENnTyxzQkFBQSxDQUF1QnpILElBQUEsRUFBTXdGLEtBQUEsRUFBTy9MLEdBQUcsSUFDdkN5Tyx3QkFBQSxDQUF5QmxJLElBQUEsRUFBTXdGLEtBQUEsRUFBTy9MLEdBQUc7QUFDbkQ7QUFjQSxJQUFNbVEsU0FBQSxHQUFZO0VBQUdDLFdBQUEsR0FBYztFQUFHQyxhQUFBLEdBQWdCO0VBQUdDLFVBQUEsR0FBYTtBQUd0RSxJQUFNQyxRQUFBLEdBQU4sTUFBZTtFQUNYQyxZQUFZOVIsTUFBQSxFQUFRK1IsUUFBQSxFQUFVeFAsR0FBQSxFQUc5QkksVUFBQSxFQUFZO0lBQ1IsS0FBSzNDLE1BQUEsR0FBU0EsTUFBQTtJQUNkLEtBQUsrUixRQUFBLEdBQVdBLFFBQUE7SUFDaEIsS0FBS3hQLEdBQUEsR0FBTUEsR0FBQTtJQUNYLEtBQUtJLFVBQUEsR0FBYUEsVUFBQTtJQUNsQixLQUFLcVAsS0FBQSxHQUFRUCxTQUFBO0lBR2JsUCxHQUFBLENBQUlSLFVBQUEsR0FBYTtFQUNyQjtFQUdBa1EsY0FBY0MsTUFBQSxFQUFRO0lBQUUsT0FBTztFQUFPO0VBQ3RDQyxZQUFZQyxJQUFBLEVBQU07SUFBRSxPQUFPO0VBQU87RUFDbENDLFlBQVl6UyxJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVztJQUFFLE9BQU87RUFBTztFQUN4REMsWUFBWTdRLFFBQUEsRUFBVTtJQUFFLE9BQU87RUFBTztFQUl0QzhRLFVBQUEsRUFBWTtJQUFFLE9BQU87RUFBTTtFQUczQkMsVUFBVXJQLEtBQUEsRUFBTztJQUFFLE9BQU87RUFBTztFQUVqQyxJQUFJa0ssS0FBQSxFQUFPO0lBQ1AsSUFBSUEsSUFBQSxHQUFPO0lBQ1gsU0FBU3JELENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBSzZILFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsSUFDdENxRCxJQUFBLElBQVEsS0FBS3dFLFFBQUEsQ0FBUzdILENBQUEsRUFBR3FELElBQUE7SUFDN0IsT0FBT0EsSUFBQTtFQUNYO0VBR0EsSUFBSUcsT0FBQSxFQUFTO0lBQUUsT0FBTztFQUFHO0VBQ3pCaUYsUUFBQSxFQUFVO0lBQ04sS0FBSzNTLE1BQUEsR0FBUztJQUNkLElBQUksS0FBS3VDLEdBQUEsQ0FBSVIsVUFBQSxJQUFjLE1BQ3ZCLEtBQUtRLEdBQUEsQ0FBSVIsVUFBQSxHQUFhO0lBQzFCLFNBQVNtSSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUs2SCxRQUFBLENBQVNsUixNQUFBLEVBQVFxSixDQUFBLElBQ3RDLEtBQUs2SCxRQUFBLENBQVM3SCxDQUFBLEVBQUd5SSxPQUFBLENBQVE7RUFDakM7RUFDQUMsZUFBZS9RLEtBQUEsRUFBTztJQUNsQixTQUFTcUksQ0FBQSxHQUFJLEdBQUdoRyxHQUFBLEdBQU0sS0FBS3VKLFVBQUEsR0FBYXZELENBQUEsSUFBSztNQUN6QyxJQUFJekgsR0FBQSxHQUFNLEtBQUtzUCxRQUFBLENBQVM3SCxDQUFBO01BQ3hCLElBQUl6SCxHQUFBLElBQU9aLEtBQUEsRUFDUCxPQUFPcUMsR0FBQTtNQUNYQSxHQUFBLElBQU96QixHQUFBLENBQUk4SyxJQUFBO0lBQ2Y7RUFDSjtFQUNBLElBQUlsQixVQUFBLEVBQVk7SUFDWixPQUFPLEtBQUtyTSxNQUFBLENBQU80UyxjQUFBLENBQWUsSUFBSTtFQUMxQztFQUNBLElBQUluRixXQUFBLEVBQWE7SUFDYixPQUFPLEtBQUt6TixNQUFBLEdBQVMsS0FBS0EsTUFBQSxDQUFPNFMsY0FBQSxDQUFlLElBQUksSUFBSSxLQUFLbEYsTUFBQSxHQUFTO0VBQzFFO0VBQ0EsSUFBSXBCLFNBQUEsRUFBVztJQUNYLE9BQU8sS0FBS0QsU0FBQSxHQUFZLEtBQUtrQixJQUFBO0VBQ2pDO0VBQ0EsSUFBSXNGLFNBQUEsRUFBVztJQUNYLE9BQU8sS0FBS3BGLFVBQUEsR0FBYSxLQUFLRixJQUFBLEdBQU8sSUFBSSxLQUFLRyxNQUFBO0VBQ2xEO0VBQ0FvRixnQkFBZ0J2USxHQUFBLEVBQUtMLE1BQUEsRUFBUTRKLElBQUEsRUFBTTtJQUcvQixJQUFJLEtBQUtuSixVQUFBLElBQWMsS0FBS0EsVUFBQSxDQUFXOEcsUUFBQSxDQUFTbEgsR0FBQSxDQUFJckMsUUFBQSxJQUFZLElBQUlxQyxHQUFBLEdBQU1BLEdBQUEsQ0FBSXhDLFVBQVUsR0FBRztNQUN2RixJQUFJK0wsSUFBQSxHQUFPLEdBQUc7UUFDVixJQUFJaUgsU0FBQSxFQUFXdlEsSUFBQTtRQUNmLElBQUlELEdBQUEsSUFBTyxLQUFLSSxVQUFBLEVBQVk7VUFDeEJvUSxTQUFBLEdBQVl4USxHQUFBLENBQUlULFVBQUEsQ0FBV0ksTUFBQSxHQUFTO1FBQ3hDLE9BQ0s7VUFDRCxPQUFPSyxHQUFBLENBQUl4QyxVQUFBLElBQWMsS0FBSzRDLFVBQUEsRUFDMUJKLEdBQUEsR0FBTUEsR0FBQSxDQUFJeEMsVUFBQTtVQUNkZ1QsU0FBQSxHQUFZeFEsR0FBQSxDQUFJekMsZUFBQTtRQUNwQjtRQUNBLE9BQU9pVCxTQUFBLElBQWEsR0FBR3ZRLElBQUEsR0FBT3VRLFNBQUEsQ0FBVWhSLFVBQUEsS0FBZVMsSUFBQSxDQUFLeEMsTUFBQSxJQUFVLE9BQ2xFK1MsU0FBQSxHQUFZQSxTQUFBLENBQVVqVCxlQUFBO1FBQzFCLE9BQU9pVCxTQUFBLEdBQVksS0FBS0gsY0FBQSxDQUFlcFEsSUFBSSxJQUFJQSxJQUFBLENBQUsrSyxJQUFBLEdBQU8sS0FBS0UsVUFBQTtNQUNwRSxPQUNLO1FBQ0QsSUFBSXVGLFFBQUEsRUFBVXhRLElBQUE7UUFDZCxJQUFJRCxHQUFBLElBQU8sS0FBS0ksVUFBQSxFQUFZO1VBQ3hCcVEsUUFBQSxHQUFXelEsR0FBQSxDQUFJVCxVQUFBLENBQVdJLE1BQUE7UUFDOUIsT0FDSztVQUNELE9BQU9LLEdBQUEsQ0FBSXhDLFVBQUEsSUFBYyxLQUFLNEMsVUFBQSxFQUMxQkosR0FBQSxHQUFNQSxHQUFBLENBQUl4QyxVQUFBO1VBQ2RpVCxRQUFBLEdBQVd6USxHQUFBLENBQUk2SSxXQUFBO1FBQ25CO1FBQ0EsT0FBTzRILFFBQUEsSUFBWSxHQUFHeFEsSUFBQSxHQUFPd1EsUUFBQSxDQUFTalIsVUFBQSxLQUFlUyxJQUFBLENBQUt4QyxNQUFBLElBQVUsT0FDaEVnVCxRQUFBLEdBQVdBLFFBQUEsQ0FBUzVILFdBQUE7UUFDeEIsT0FBTzRILFFBQUEsR0FBVyxLQUFLSixjQUFBLENBQWVwUSxJQUFJLElBQUksS0FBS3FRLFFBQUE7TUFDdkQ7SUFDSjtJQUlBLElBQUl2USxLQUFBO0lBQ0osSUFBSUMsR0FBQSxJQUFPLEtBQUtBLEdBQUEsSUFBTyxLQUFLSSxVQUFBLEVBQVk7TUFDcENMLEtBQUEsR0FBUUosTUFBQSxHQUFTdkMsUUFBQSxDQUFTLEtBQUtnRCxVQUFVO0lBQzdDLFdBQ1MsS0FBS0EsVUFBQSxJQUFjLEtBQUtBLFVBQUEsSUFBYyxLQUFLSixHQUFBLElBQU8sS0FBS0EsR0FBQSxDQUFJa0gsUUFBQSxDQUFTLEtBQUs5RyxVQUFVLEdBQUc7TUFDM0ZMLEtBQUEsR0FBUUMsR0FBQSxDQUFJMFEsdUJBQUEsQ0FBd0IsS0FBS3RRLFVBQVUsSUFBSTtJQUMzRCxXQUNTLEtBQUtKLEdBQUEsQ0FBSTJJLFVBQUEsRUFBWTtNQUMxQixJQUFJaEosTUFBQSxJQUFVLEdBQ1YsU0FBU2dSLE1BQUEsR0FBUzNRLEdBQUEsR0FBTTJRLE1BQUEsR0FBU0EsTUFBQSxDQUFPblQsVUFBQSxFQUFZO1FBQ2hELElBQUltVCxNQUFBLElBQVUsS0FBSzNRLEdBQUEsRUFBSztVQUNwQkQsS0FBQSxHQUFRO1VBQ1I7UUFDSjtRQUNBLElBQUk0USxNQUFBLENBQU9wVCxlQUFBLEVBQ1A7TUFDUjtNQUNKLElBQUl3QyxLQUFBLElBQVMsUUFBUUosTUFBQSxJQUFVSyxHQUFBLENBQUlULFVBQUEsQ0FBV2pCLE1BQUEsRUFDMUMsU0FBU3FTLE1BQUEsR0FBUzNRLEdBQUEsR0FBTTJRLE1BQUEsR0FBU0EsTUFBQSxDQUFPblQsVUFBQSxFQUFZO1FBQ2hELElBQUltVCxNQUFBLElBQVUsS0FBSzNRLEdBQUEsRUFBSztVQUNwQkQsS0FBQSxHQUFRO1VBQ1I7UUFDSjtRQUNBLElBQUk0USxNQUFBLENBQU85SCxXQUFBLEVBQ1A7TUFDUjtJQUNSO0lBQ0EsUUFBUTlJLEtBQUEsSUFBUyxPQUFPd0osSUFBQSxHQUFPLElBQUl4SixLQUFBLElBQVMsS0FBS3VRLFFBQUEsR0FBVyxLQUFLcEYsVUFBQTtFQUNyRTtFQUNBckIsWUFBWTdKLEdBQUEsRUFBSzRRLFNBQUEsR0FBWSxPQUFPO0lBQ2hDLFNBQVN0RixLQUFBLEdBQVEsTUFBTXBMLEdBQUEsR0FBTUYsR0FBQSxFQUFLRSxHQUFBLEVBQUtBLEdBQUEsR0FBTUEsR0FBQSxDQUFJMUMsVUFBQSxFQUFZO01BQ3pELElBQUl5QyxJQUFBLEdBQU8sS0FBSzRRLE9BQUEsQ0FBUTNRLEdBQUc7UUFBRzRRLE9BQUE7TUFDOUIsSUFBSTdRLElBQUEsS0FBUyxDQUFDMlEsU0FBQSxJQUFhM1EsSUFBQSxDQUFLNUMsSUFBQSxHQUFPO1FBRW5DLElBQUlpTyxLQUFBLEtBQVV3RixPQUFBLEdBQVU3USxJQUFBLENBQUs2USxPQUFBLEtBQ3pCLEVBQUVBLE9BQUEsQ0FBUW5ULFFBQUEsSUFBWSxJQUFJbVQsT0FBQSxDQUFRNUosUUFBQSxDQUFTbEgsR0FBQSxDQUFJckMsUUFBQSxJQUFZLElBQUlxQyxHQUFBLEdBQU1BLEdBQUEsQ0FBSXhDLFVBQVUsSUFBSXNULE9BQUEsSUFBVzlRLEdBQUEsR0FDbEdzTCxLQUFBLEdBQVEsV0FFUixPQUFPckwsSUFBQTtNQUNmO0lBQ0o7RUFDSjtFQUNBNFEsUUFBUTdRLEdBQUEsRUFBSztJQUNULElBQUlDLElBQUEsR0FBT0QsR0FBQSxDQUFJUixVQUFBO0lBQ2YsU0FBU1UsR0FBQSxHQUFNRCxJQUFBLEVBQU1DLEdBQUEsRUFBS0EsR0FBQSxHQUFNQSxHQUFBLENBQUl6QyxNQUFBLEVBQ2hDLElBQUl5QyxHQUFBLElBQU8sTUFDUCxPQUFPRCxJQUFBO0VBQ25CO0VBQ0F3SixXQUFXekosR0FBQSxFQUFLTCxNQUFBLEVBQVE0SixJQUFBLEVBQU07SUFDMUIsU0FBU3dILElBQUEsR0FBTy9RLEdBQUEsRUFBSytRLElBQUEsRUFBTUEsSUFBQSxHQUFPQSxJQUFBLENBQUt2VCxVQUFBLEVBQVk7TUFDL0MsSUFBSXlDLElBQUEsR0FBTyxLQUFLNFEsT0FBQSxDQUFRRSxJQUFJO01BQzVCLElBQUk5USxJQUFBLEVBQ0EsT0FBT0EsSUFBQSxDQUFLc1EsZUFBQSxDQUFnQnZRLEdBQUEsRUFBS0wsTUFBQSxFQUFRNEosSUFBSTtJQUNyRDtJQUNBLE9BQU87RUFDWDtFQUdBeUgsT0FBT3JQLEdBQUEsRUFBSztJQUNSLFNBQVNnRyxDQUFBLEdBQUksR0FBR2hJLE1BQUEsR0FBUyxHQUFHZ0ksQ0FBQSxHQUFJLEtBQUs2SCxRQUFBLENBQVNsUixNQUFBLEVBQVFxSixDQUFBLElBQUs7TUFDdkQsSUFBSXJJLEtBQUEsR0FBUSxLQUFLa1EsUUFBQSxDQUFTN0gsQ0FBQTtRQUFJbUcsR0FBQSxHQUFNbk8sTUFBQSxHQUFTTCxLQUFBLENBQU0wTCxJQUFBO01BQ25ELElBQUlyTCxNQUFBLElBQVVnQyxHQUFBLElBQU9tTSxHQUFBLElBQU9uTyxNQUFBLEVBQVE7UUFDaEMsT0FBTyxDQUFDTCxLQUFBLENBQU02TCxNQUFBLElBQVU3TCxLQUFBLENBQU1rUSxRQUFBLENBQVNsUixNQUFBLEVBQVE7VUFDM0MsU0FBUzJTLEVBQUEsR0FBSSxHQUFHQSxFQUFBLEdBQUkzUixLQUFBLENBQU1rUSxRQUFBLENBQVNsUixNQUFBLEVBQVEyUyxFQUFBLElBQUs7WUFDNUMsSUFBSUMsS0FBQSxHQUFRNVIsS0FBQSxDQUFNa1EsUUFBQSxDQUFTeUIsRUFBQTtZQUMzQixJQUFJQyxLQUFBLENBQU1sRyxJQUFBLEVBQU07Y0FDWjFMLEtBQUEsR0FBUTRSLEtBQUE7Y0FDUjtZQUNKO1VBQ0o7UUFDSjtRQUNBLE9BQU81UixLQUFBO01BQ1g7TUFDQSxJQUFJcUMsR0FBQSxHQUFNbU0sR0FBQSxFQUNOLE9BQU94TyxLQUFBLENBQU0wUixNQUFBLENBQU9yUCxHQUFBLEdBQU1oQyxNQUFBLEdBQVNMLEtBQUEsQ0FBTTZMLE1BQU07TUFDbkR4TCxNQUFBLEdBQVNtTyxHQUFBO0lBQ2I7RUFDSjtFQUNBaEMsV0FBV25LLEdBQUEsRUFBS2tELElBQUEsRUFBTTtJQUNsQixJQUFJLENBQUMsS0FBS3pFLFVBQUEsRUFDTixPQUFPO01BQUUvQyxJQUFBLEVBQU0sS0FBSzJDLEdBQUE7TUFBS0wsTUFBQSxFQUFRO01BQUdrTSxJQUFBLEVBQU1sSyxHQUFBLEdBQU07SUFBRTtJQUV0RCxJQUFJZ0csQ0FBQSxHQUFJO01BQUdoSSxNQUFBLEdBQVM7SUFDcEIsU0FBU3dSLE1BQUEsR0FBUyxHQUFHeEosQ0FBQSxHQUFJLEtBQUs2SCxRQUFBLENBQVNsUixNQUFBLEVBQVFxSixDQUFBLElBQUs7TUFDaEQsSUFBSXJJLEtBQUEsR0FBUSxLQUFLa1EsUUFBQSxDQUFTN0gsQ0FBQTtRQUFJbUcsR0FBQSxHQUFNcUQsTUFBQSxHQUFTN1IsS0FBQSxDQUFNMEwsSUFBQTtNQUNuRCxJQUFJOEMsR0FBQSxHQUFNbk0sR0FBQSxJQUFPckMsS0FBQSxZQUFpQjhSLG9CQUFBLEVBQXNCO1FBQ3BEelIsTUFBQSxHQUFTZ0MsR0FBQSxHQUFNd1AsTUFBQTtRQUNmO01BQ0o7TUFDQUEsTUFBQSxHQUFTckQsR0FBQTtJQUNiO0lBRUEsSUFBSW5PLE1BQUEsRUFDQSxPQUFPLEtBQUs2UCxRQUFBLENBQVM3SCxDQUFBLEVBQUdtRSxVQUFBLENBQVduTSxNQUFBLEdBQVMsS0FBSzZQLFFBQUEsQ0FBUzdILENBQUEsRUFBR3dELE1BQUEsRUFBUXRHLElBQUk7SUFFN0UsU0FBUytGLElBQUEsRUFBTWpELENBQUEsSUFBSyxFQUFFaUQsSUFBQSxHQUFPLEtBQUs0RSxRQUFBLENBQVM3SCxDQUFBLEdBQUksSUFBSXFELElBQUEsSUFBUUosSUFBQSxZQUFnQnlHLGNBQUEsSUFBa0J6RyxJQUFBLENBQUsvRixJQUFBLElBQVEsR0FBRzhDLENBQUEsSUFBSyxDQUFFO0lBRXBILElBQUk5QyxJQUFBLElBQVEsR0FBRztNQUNYLElBQUkrRixJQUFBO1FBQU0wRyxLQUFBLEdBQVE7TUFDbEIsUUFBUTNKLENBQUEsSUFBSzJKLEtBQUEsR0FBUSxPQUFPO1FBQ3hCMUcsSUFBQSxHQUFPakQsQ0FBQSxHQUFJLEtBQUs2SCxRQUFBLENBQVM3SCxDQUFBLEdBQUksS0FBSztRQUNsQyxJQUFJLENBQUNpRCxJQUFBLElBQVFBLElBQUEsQ0FBSzVLLEdBQUEsQ0FBSXhDLFVBQUEsSUFBYyxLQUFLNEMsVUFBQSxFQUNyQztNQUNSO01BQ0EsSUFBSXdLLElBQUEsSUFBUS9GLElBQUEsSUFBUXlNLEtBQUEsSUFBUyxDQUFDMUcsSUFBQSxDQUFLTyxNQUFBLElBQVUsQ0FBQ1AsSUFBQSxDQUFLMkcsT0FBQSxFQUMvQyxPQUFPM0csSUFBQSxDQUFLa0IsVUFBQSxDQUFXbEIsSUFBQSxDQUFLSSxJQUFBLEVBQU1uRyxJQUFJO01BQzFDLE9BQU87UUFBRXhILElBQUEsRUFBTSxLQUFLK0MsVUFBQTtRQUFZVCxNQUFBLEVBQVFpTCxJQUFBLEdBQU94TixRQUFBLENBQVN3TixJQUFBLENBQUs1SyxHQUFHLElBQUksSUFBSTtNQUFFO0lBQzlFLE9BQ0s7TUFDRCxJQUFJMkssSUFBQTtRQUFNMkcsS0FBQSxHQUFRO01BQ2xCLFFBQVEzSixDQUFBLElBQUsySixLQUFBLEdBQVEsT0FBTztRQUN4QjNHLElBQUEsR0FBT2hELENBQUEsR0FBSSxLQUFLNkgsUUFBQSxDQUFTbFIsTUFBQSxHQUFTLEtBQUtrUixRQUFBLENBQVM3SCxDQUFBLElBQUs7UUFDckQsSUFBSSxDQUFDZ0QsSUFBQSxJQUFRQSxJQUFBLENBQUszSyxHQUFBLENBQUl4QyxVQUFBLElBQWMsS0FBSzRDLFVBQUEsRUFDckM7TUFDUjtNQUNBLElBQUl1SyxJQUFBLElBQVEyRyxLQUFBLElBQVMsQ0FBQzNHLElBQUEsQ0FBS1EsTUFBQSxJQUFVLENBQUNSLElBQUEsQ0FBSzRHLE9BQUEsRUFDdkMsT0FBTzVHLElBQUEsQ0FBS21CLFVBQUEsQ0FBVyxHQUFHakgsSUFBSTtNQUNsQyxPQUFPO1FBQUV4SCxJQUFBLEVBQU0sS0FBSytDLFVBQUE7UUFBWVQsTUFBQSxFQUFRZ0wsSUFBQSxHQUFPdk4sUUFBQSxDQUFTdU4sSUFBQSxDQUFLM0ssR0FBRyxJQUFJLEtBQUtJLFVBQUEsQ0FBV2IsVUFBQSxDQUFXakI7TUFBTztJQUMxRztFQUNKO0VBR0FrVCxXQUFXelQsSUFBQSxFQUFNQyxFQUFBLEVBQUl5VCxJQUFBLEdBQU8sR0FBRztJQUMzQixJQUFJLEtBQUtqQyxRQUFBLENBQVNsUixNQUFBLElBQVUsR0FDeEIsT0FBTztNQUFFakIsSUFBQSxFQUFNLEtBQUsrQyxVQUFBO01BQVlyQyxJQUFBO01BQU1DLEVBQUE7TUFBSTBULFVBQUEsRUFBWTtNQUFHQyxRQUFBLEVBQVUsS0FBS3ZSLFVBQUEsQ0FBV2IsVUFBQSxDQUFXakI7SUFBTztJQUN6RyxJQUFJb1QsVUFBQSxHQUFhO01BQUlDLFFBQUEsR0FBVztJQUNoQyxTQUFTaFMsTUFBQSxHQUFTOFIsSUFBQSxFQUFNOUosQ0FBQSxHQUFJLElBQUlBLENBQUEsSUFBSztNQUNqQyxJQUFJckksS0FBQSxHQUFRLEtBQUtrUSxRQUFBLENBQVM3SCxDQUFBO1FBQUltRyxHQUFBLEdBQU1uTyxNQUFBLEdBQVNMLEtBQUEsQ0FBTTBMLElBQUE7TUFDbkQsSUFBSTBHLFVBQUEsSUFBYyxNQUFNM1QsSUFBQSxJQUFRK1AsR0FBQSxFQUFLO1FBQ2pDLElBQUk4RCxTQUFBLEdBQVlqUyxNQUFBLEdBQVNMLEtBQUEsQ0FBTTZMLE1BQUE7UUFFL0IsSUFBSXBOLElBQUEsSUFBUTZULFNBQUEsSUFBYTVULEVBQUEsSUFBTThQLEdBQUEsR0FBTXhPLEtBQUEsQ0FBTTZMLE1BQUEsSUFBVTdMLEtBQUEsQ0FBTWpDLElBQUEsSUFDdkRpQyxLQUFBLENBQU1jLFVBQUEsSUFBYyxLQUFLQSxVQUFBLENBQVc4RyxRQUFBLENBQVM1SCxLQUFBLENBQU1jLFVBQVUsR0FDN0QsT0FBT2QsS0FBQSxDQUFNa1MsVUFBQSxDQUFXelQsSUFBQSxFQUFNQyxFQUFBLEVBQUk0VCxTQUFTO1FBQy9DN1QsSUFBQSxHQUFPNEIsTUFBQTtRQUNQLFNBQVMySyxDQUFBLEdBQUkzQyxDQUFBLEVBQUcyQyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxJQUFLO1VBQ3hCLElBQUlNLElBQUEsR0FBTyxLQUFLNEUsUUFBQSxDQUFTbEYsQ0FBQSxHQUFJO1VBQzdCLElBQUlNLElBQUEsQ0FBS0ksSUFBQSxJQUFRSixJQUFBLENBQUs1SyxHQUFBLENBQUl4QyxVQUFBLElBQWMsS0FBSzRDLFVBQUEsSUFBYyxDQUFDd0ssSUFBQSxDQUFLaUgsWUFBQSxDQUFhLENBQUMsR0FBRztZQUM5RUgsVUFBQSxHQUFhdFUsUUFBQSxDQUFTd04sSUFBQSxDQUFLNUssR0FBRyxJQUFJO1lBQ2xDO1VBQ0o7VUFDQWpDLElBQUEsSUFBUTZNLElBQUEsQ0FBS0ksSUFBQTtRQUNqQjtRQUNBLElBQUkwRyxVQUFBLElBQWMsSUFDZEEsVUFBQSxHQUFhO01BQ3JCO01BQ0EsSUFBSUEsVUFBQSxHQUFhLE9BQU81RCxHQUFBLEdBQU05UCxFQUFBLElBQU0ySixDQUFBLElBQUssS0FBSzZILFFBQUEsQ0FBU2xSLE1BQUEsR0FBUyxJQUFJO1FBQ2hFTixFQUFBLEdBQUs4UCxHQUFBO1FBQ0wsU0FBU3hELENBQUEsR0FBSTNDLENBQUEsR0FBSSxHQUFHMkMsQ0FBQSxHQUFJLEtBQUtrRixRQUFBLENBQVNsUixNQUFBLEVBQVFnTSxDQUFBLElBQUs7VUFDL0MsSUFBSUssSUFBQSxHQUFPLEtBQUs2RSxRQUFBLENBQVNsRixDQUFBO1VBQ3pCLElBQUlLLElBQUEsQ0FBS0ssSUFBQSxJQUFRTCxJQUFBLENBQUszSyxHQUFBLENBQUl4QyxVQUFBLElBQWMsS0FBSzRDLFVBQUEsSUFBYyxDQUFDdUssSUFBQSxDQUFLa0gsWUFBQSxDQUFhLEVBQUUsR0FBRztZQUMvRUYsUUFBQSxHQUFXdlUsUUFBQSxDQUFTdU4sSUFBQSxDQUFLM0ssR0FBRztZQUM1QjtVQUNKO1VBQ0FoQyxFQUFBLElBQU0yTSxJQUFBLENBQUtLLElBQUE7UUFDZjtRQUNBLElBQUkyRyxRQUFBLElBQVksSUFDWkEsUUFBQSxHQUFXLEtBQUt2UixVQUFBLENBQVdiLFVBQUEsQ0FBV2pCLE1BQUE7UUFDMUM7TUFDSjtNQUNBcUIsTUFBQSxHQUFTbU8sR0FBQTtJQUNiO0lBQ0EsT0FBTztNQUFFelEsSUFBQSxFQUFNLEtBQUsrQyxVQUFBO01BQVlyQyxJQUFBO01BQU1DLEVBQUE7TUFBSTBULFVBQUE7TUFBWUM7SUFBUztFQUNuRTtFQUNBRSxhQUFhaE4sSUFBQSxFQUFNO0lBQ2YsSUFBSSxLQUFLc0csTUFBQSxJQUFVLENBQUMsS0FBSy9LLFVBQUEsSUFBYyxDQUFDLEtBQUtvUCxRQUFBLENBQVNsUixNQUFBLEVBQ2xELE9BQU87SUFDWCxJQUFJZ0IsS0FBQSxHQUFRLEtBQUtrUSxRQUFBLENBQVMzSyxJQUFBLEdBQU8sSUFBSSxJQUFJLEtBQUsySyxRQUFBLENBQVNsUixNQUFBLEdBQVM7SUFDaEUsT0FBT2dCLEtBQUEsQ0FBTTBMLElBQUEsSUFBUSxLQUFLMUwsS0FBQSxDQUFNdVMsWUFBQSxDQUFhaE4sSUFBSTtFQUNyRDtFQUNBMkosWUFBWTdNLEdBQUEsRUFBSztJQUNiLElBQUk7TUFBRXRFLElBQUE7TUFBTXNDO0lBQU8sSUFBSSxLQUFLbU0sVUFBQSxDQUFXbkssR0FBQSxFQUFLLENBQUM7SUFDN0MsSUFBSXRFLElBQUEsQ0FBS00sUUFBQSxJQUFZLEtBQUtnQyxNQUFBLElBQVV0QyxJQUFBLENBQUtrQyxVQUFBLENBQVdqQixNQUFBLEVBQ2hELE1BQU0sSUFBSXdULFVBQUEsQ0FBVyx1QkFBdUJuUSxHQUFHO0lBQ25ELE9BQU90RSxJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQUE7RUFDM0I7RUFNQW9TLGFBQWFDLE1BQUEsRUFBUUMsSUFBQSxFQUFNM00sSUFBQSxFQUFNNE0sS0FBQSxHQUFRLE9BQU87SUFFNUMsSUFBSW5VLElBQUEsR0FBTzhELElBQUEsQ0FBS0MsR0FBQSxDQUFJa1EsTUFBQSxFQUFRQyxJQUFJO01BQUdqVSxFQUFBLEdBQUs2RCxJQUFBLENBQUsrRSxHQUFBLENBQUlvTCxNQUFBLEVBQVFDLElBQUk7SUFDN0QsU0FBU3RLLENBQUEsR0FBSSxHQUFHaEksTUFBQSxHQUFTLEdBQUdnSSxDQUFBLEdBQUksS0FBSzZILFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsSUFBSztNQUN2RCxJQUFJckksS0FBQSxHQUFRLEtBQUtrUSxRQUFBLENBQVM3SCxDQUFBO1FBQUltRyxHQUFBLEdBQU1uTyxNQUFBLEdBQVNMLEtBQUEsQ0FBTTBMLElBQUE7TUFDbkQsSUFBSWpOLElBQUEsR0FBTzRCLE1BQUEsSUFBVTNCLEVBQUEsR0FBSzhQLEdBQUEsRUFDdEIsT0FBT3hPLEtBQUEsQ0FBTXlTLFlBQUEsQ0FBYUMsTUFBQSxHQUFTclMsTUFBQSxHQUFTTCxLQUFBLENBQU02TCxNQUFBLEVBQVE4RyxJQUFBLEdBQU90UyxNQUFBLEdBQVNMLEtBQUEsQ0FBTTZMLE1BQUEsRUFBUTdGLElBQUEsRUFBTTRNLEtBQUs7TUFDdkd2UyxNQUFBLEdBQVNtTyxHQUFBO0lBQ2I7SUFDQSxJQUFJcUUsU0FBQSxHQUFZLEtBQUtyRyxVQUFBLENBQVdrRyxNQUFBLEVBQVFBLE1BQUEsR0FBUyxLQUFLLENBQUM7SUFDdkQsSUFBSUksT0FBQSxHQUFVSCxJQUFBLElBQVFELE1BQUEsR0FBU0csU0FBQSxHQUFZLEtBQUtyRyxVQUFBLENBQVdtRyxJQUFBLEVBQU1BLElBQUEsR0FBTyxLQUFLLENBQUM7SUFDOUUsSUFBSTNSLE1BQUEsR0FBU2dGLElBQUEsQ0FBSzBCLElBQUEsQ0FBS3FMLFlBQUEsQ0FBYTtJQUNwQyxJQUFJQyxRQUFBLEdBQVdoTixJQUFBLENBQUs2SSxpQkFBQSxDQUFrQjtJQUN0QyxJQUFJb0UsUUFBQSxHQUFXO0lBS2YsS0FBS3hQLEtBQUEsSUFBU0ksTUFBQSxLQUFXNk8sTUFBQSxJQUFVQyxJQUFBLEVBQU07TUFDckMsSUFBSTtRQUFFNVUsSUFBQTtRQUFNc0M7TUFBTyxJQUFJd1MsU0FBQTtNQUN2QixJQUFJOVUsSUFBQSxDQUFLTSxRQUFBLElBQVksR0FBRztRQUNwQjRVLFFBQUEsR0FBVyxDQUFDLEVBQUU1UyxNQUFBLElBQVV0QyxJQUFBLENBQUtnQixTQUFBLENBQVVzQixNQUFBLEdBQVMsTUFBTTtRQUV0RCxJQUFJNFMsUUFBQSxJQUFZNVMsTUFBQSxJQUFVdEMsSUFBQSxDQUFLZ0IsU0FBQSxDQUFVQyxNQUFBLEVBQVE7VUFDN0MsU0FBU3lTLElBQUEsR0FBTzFULElBQUEsRUFBTW1QLEtBQUEsRUFBT3VFLElBQUEsRUFBTUEsSUFBQSxHQUFPQSxJQUFBLENBQUt2VCxVQUFBLEVBQVk7WUFDdkQsSUFBSWdQLEtBQUEsR0FBUXVFLElBQUEsQ0FBS2xJLFdBQUEsRUFBYTtjQUMxQixJQUFJMkQsS0FBQSxDQUFNcE4sUUFBQSxJQUFZLE1BQ2xCK1MsU0FBQSxHQUFZQyxPQUFBLEdBQVU7Z0JBQUUvVSxJQUFBLEVBQU1tUCxLQUFBLENBQU1oUCxVQUFBO2dCQUFZbUMsTUFBQSxFQUFRdkMsUUFBQSxDQUFTb1AsS0FBSyxJQUFJO2NBQUU7Y0FDaEY7WUFDSjtZQUNBLElBQUl2TSxJQUFBLEdBQU84USxJQUFBLENBQUt2UixVQUFBO1lBQ2hCLElBQUlTLElBQUEsSUFBUUEsSUFBQSxDQUFLNUMsSUFBQSxJQUFRNEMsSUFBQSxDQUFLNUMsSUFBQSxDQUFLOEMsT0FBQSxFQUMvQjtVQUNSO1FBQ0o7TUFDSixPQUNLO1FBQ0QsSUFBSXlLLElBQUEsR0FBT3ZOLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV0ksTUFBQSxHQUFTO1FBQ3BDNFMsUUFBQSxHQUFXM0gsSUFBQSxLQUFTQSxJQUFBLENBQUt4TCxRQUFBLElBQVksUUFBUXdMLElBQUEsQ0FBS3ZMLGVBQUEsSUFBbUI7TUFDekU7SUFDSjtJQUdBLElBQUkwRCxLQUFBLElBQVN1UCxRQUFBLENBQVMvUixTQUFBLElBQWErUixRQUFBLENBQVMvUixTQUFBLElBQWE2UixPQUFBLENBQVEvVSxJQUFBLElBQVFpVixRQUFBLENBQVMvUixTQUFBLENBQVU1QyxRQUFBLElBQVksR0FBRztNQUN2RyxJQUFJNk8sS0FBQSxHQUFROEYsUUFBQSxDQUFTL1IsU0FBQSxDQUFVaEIsVUFBQSxDQUFXK1MsUUFBQSxDQUFTOVIsV0FBQTtNQUNuRCxJQUFJZ00sS0FBQSxJQUFTQSxLQUFBLENBQU1uTixlQUFBLElBQW1CLFNBQ2xDNlMsS0FBQSxHQUFRO0lBQ2hCO0lBQ0EsSUFBSSxFQUFFQSxLQUFBLElBQVNLLFFBQUEsSUFBWXBQLE1BQUEsS0FDdkIxRSxvQkFBQSxDQUFxQjBULFNBQUEsQ0FBVTlVLElBQUEsRUFBTThVLFNBQUEsQ0FBVXhTLE1BQUEsRUFBUTJTLFFBQUEsQ0FBUzdSLFVBQUEsRUFBWTZSLFFBQUEsQ0FBUzVSLFlBQVksS0FDakdqQyxvQkFBQSxDQUFxQjJULE9BQUEsQ0FBUS9VLElBQUEsRUFBTStVLE9BQUEsQ0FBUXpTLE1BQUEsRUFBUTJTLFFBQUEsQ0FBUy9SLFNBQUEsRUFBVytSLFFBQUEsQ0FBUzlSLFdBQVcsR0FDM0Y7SUFJSixJQUFJZ1MsY0FBQSxHQUFpQjtJQUNyQixLQUFLbFMsTUFBQSxDQUFPdU8sTUFBQSxJQUFVbUQsTUFBQSxJQUFVQyxJQUFBLEtBQVMsQ0FBQ00sUUFBQSxFQUFVO01BQ2hEalMsTUFBQSxDQUFPc08sUUFBQSxDQUFTdUQsU0FBQSxDQUFVOVUsSUFBQSxFQUFNOFUsU0FBQSxDQUFVeFMsTUFBTTtNQUNoRCxJQUFJO1FBQ0EsSUFBSXFTLE1BQUEsSUFBVUMsSUFBQSxFQUNWM1IsTUFBQSxDQUFPdU8sTUFBQSxDQUFPdUQsT0FBQSxDQUFRL1UsSUFBQSxFQUFNK1UsT0FBQSxDQUFRelMsTUFBTTtRQUM5QzZTLGNBQUEsR0FBaUI7TUFDckIsU0FDT3pRLENBQUEsRUFBUCxDQU9BO0lBQ0o7SUFDQSxJQUFJLENBQUN5USxjQUFBLEVBQWdCO01BQ2pCLElBQUlSLE1BQUEsR0FBU0MsSUFBQSxFQUFNO1FBQ2YsSUFBSVEsR0FBQSxHQUFNTixTQUFBO1FBQ1ZBLFNBQUEsR0FBWUMsT0FBQTtRQUNaQSxPQUFBLEdBQVVLLEdBQUE7TUFDZDtNQUNBLElBQUl4VSxLQUFBLEdBQVFDLFFBQUEsQ0FBU0MsV0FBQSxDQUFZO01BQ2pDRixLQUFBLENBQU1HLE1BQUEsQ0FBT2dVLE9BQUEsQ0FBUS9VLElBQUEsRUFBTStVLE9BQUEsQ0FBUXpTLE1BQU07TUFDekMxQixLQUFBLENBQU1NLFFBQUEsQ0FBUzRULFNBQUEsQ0FBVTlVLElBQUEsRUFBTThVLFNBQUEsQ0FBVXhTLE1BQU07TUFDL0NXLE1BQUEsQ0FBT29TLGVBQUEsQ0FBZ0I7TUFDdkJwUyxNQUFBLENBQU9xUyxRQUFBLENBQVMxVSxLQUFLO0lBQ3pCO0VBQ0o7RUFDQTJVLGVBQWVDLFFBQUEsRUFBVTtJQUNyQixPQUFPLENBQUMsS0FBS3pTLFVBQUEsSUFBY3lTLFFBQUEsQ0FBU0MsSUFBQSxJQUFRO0VBQ2hEO0VBQ0EsSUFBSUMsWUFBQSxFQUFjO0lBQ2QsT0FBTyxLQUFLM1MsVUFBQSxJQUFjLEtBQUtBLFVBQUEsSUFBYyxLQUFLSixHQUFBLElBQU8sQ0FBQyxLQUFLQSxHQUFBLENBQUlrSCxRQUFBLENBQVMsS0FBSzlHLFVBQVU7RUFDL0Y7RUFHQTRTLFVBQVVqVixJQUFBLEVBQU1DLEVBQUEsRUFBSTtJQUNoQixTQUFTMkIsTUFBQSxHQUFTLEdBQUdnSSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUs2SCxRQUFBLENBQVNsUixNQUFBLEVBQVFxSixDQUFBLElBQUs7TUFDdkQsSUFBSXJJLEtBQUEsR0FBUSxLQUFLa1EsUUFBQSxDQUFTN0gsQ0FBQTtRQUFJbUcsR0FBQSxHQUFNbk8sTUFBQSxHQUFTTCxLQUFBLENBQU0wTCxJQUFBO01BQ25ELElBQUlyTCxNQUFBLElBQVVtTyxHQUFBLEdBQU0vUCxJQUFBLElBQVErUCxHQUFBLElBQU85UCxFQUFBLElBQU0yQixNQUFBLEdBQVM1QixJQUFBLEdBQU8rUCxHQUFBLElBQU85UCxFQUFBLEdBQUsyQixNQUFBLEVBQVE7UUFDekUsSUFBSXNULFdBQUEsR0FBY3RULE1BQUEsR0FBU0wsS0FBQSxDQUFNNkwsTUFBQTtVQUFRK0gsU0FBQSxHQUFZcEYsR0FBQSxHQUFNeE8sS0FBQSxDQUFNNkwsTUFBQTtRQUNqRSxJQUFJcE4sSUFBQSxJQUFRa1YsV0FBQSxJQUFlalYsRUFBQSxJQUFNa1YsU0FBQSxFQUFXO1VBQ3hDLEtBQUt6RCxLQUFBLEdBQVExUixJQUFBLElBQVE0QixNQUFBLElBQVUzQixFQUFBLElBQU04UCxHQUFBLEdBQU1zQixhQUFBLEdBQWdCRCxXQUFBO1VBQzNELElBQUlwUixJQUFBLElBQVFrVixXQUFBLElBQWVqVixFQUFBLElBQU1rVixTQUFBLEtBQzVCNVQsS0FBQSxDQUFNeVQsV0FBQSxJQUFlelQsS0FBQSxDQUFNVSxHQUFBLENBQUl4QyxVQUFBLElBQWMsS0FBSzRDLFVBQUEsR0FDbkRkLEtBQUEsQ0FBTW1RLEtBQUEsR0FBUUosVUFBQSxNQUVkL1AsS0FBQSxDQUFNMFQsU0FBQSxDQUFValYsSUFBQSxHQUFPa1YsV0FBQSxFQUFhalYsRUFBQSxHQUFLaVYsV0FBVztVQUN4RDtRQUNKLE9BQ0s7VUFDRDNULEtBQUEsQ0FBTW1RLEtBQUEsR0FBUW5RLEtBQUEsQ0FBTVUsR0FBQSxJQUFPVixLQUFBLENBQU1jLFVBQUEsSUFBY2QsS0FBQSxDQUFNVSxHQUFBLENBQUl4QyxVQUFBLElBQWMsS0FBSzRDLFVBQUEsSUFBYyxDQUFDZCxLQUFBLENBQU1rUSxRQUFBLENBQVNsUixNQUFBLEdBQ3BHOFEsYUFBQSxHQUFnQkMsVUFBQTtRQUMxQjtNQUNKO01BQ0ExUCxNQUFBLEdBQVNtTyxHQUFBO0lBQ2I7SUFDQSxLQUFLMkIsS0FBQSxHQUFRTCxhQUFBO0VBQ2pCO0VBQ0ErRCxpQkFBQSxFQUFtQjtJQUNmLElBQUlDLEtBQUEsR0FBUTtJQUNaLFNBQVMvVixJQUFBLEdBQU8sS0FBS0ksTUFBQSxFQUFRSixJQUFBLEVBQU1BLElBQUEsR0FBT0EsSUFBQSxDQUFLSSxNQUFBLEVBQVEyVixLQUFBLElBQVM7TUFDNUQsSUFBSTNELEtBQUEsR0FBUTJELEtBQUEsSUFBUyxJQUFJaEUsYUFBQSxHQUFnQkQsV0FBQTtNQUN6QyxJQUFJOVIsSUFBQSxDQUFLb1MsS0FBQSxHQUFRQSxLQUFBLEVBQ2JwUyxJQUFBLENBQUtvUyxLQUFBLEdBQVFBLEtBQUE7SUFDckI7RUFDSjtFQUNBLElBQUk4QixRQUFBLEVBQVU7SUFBRSxPQUFPO0VBQU87RUFDOUIsSUFBSTlFLGdCQUFBLEVBQWtCO0lBQUUsT0FBTztFQUFPO0VBQ3RDLElBQUloTixtQkFBQSxFQUFxQjtJQUFFLE9BQU87RUFBTztFQUN6Q3VLLE9BQU9xSixJQUFBLEVBQU07SUFBRSxPQUFPO0VBQU87QUFDakM7QUFHQSxJQUFNaEMsY0FBQSxHQUFOLGNBQTZCL0IsUUFBQSxDQUFTO0VBQ2xDQyxZQUFZOVIsTUFBQSxFQUFRa1MsTUFBQSxFQUFRckssSUFBQSxFQUFNM0QsR0FBQSxFQUFLO0lBQ25DLElBQUkyUixJQUFBO01BQU10VCxHQUFBLEdBQU0yUCxNQUFBLENBQU9tRCxJQUFBLENBQUtTLEtBQUE7SUFDNUIsSUFBSSxPQUFPdlQsR0FBQSxJQUFPLFlBQ2RBLEdBQUEsR0FBTUEsR0FBQSxDQUFJc0YsSUFBQSxFQUFNLE1BQU07TUFDbEIsSUFBSSxDQUFDZ08sSUFBQSxFQUNELE9BQU8zUixHQUFBO01BQ1gsSUFBSTJSLElBQUEsQ0FBSzdWLE1BQUEsRUFDTCxPQUFPNlYsSUFBQSxDQUFLN1YsTUFBQSxDQUFPNFMsY0FBQSxDQUFlaUQsSUFBSTtJQUM5QyxDQUFDO0lBQ0wsSUFBSSxDQUFDM0QsTUFBQSxDQUFPbUQsSUFBQSxDQUFLVSxJQUFBLENBQUtDLEdBQUEsRUFBSztNQUN2QixJQUFJelQsR0FBQSxDQUFJckMsUUFBQSxJQUFZLEdBQUc7UUFDbkIsSUFBSStWLElBQUEsR0FBT3hWLFFBQUEsQ0FBU3lWLGFBQUEsQ0FBYyxNQUFNO1FBQ3hDRCxJQUFBLENBQUtFLFdBQUEsQ0FBWTVULEdBQUc7UUFDcEJBLEdBQUEsR0FBTTBULElBQUE7TUFDVjtNQUNBMVQsR0FBQSxDQUFJWCxlQUFBLEdBQWtCO01BQ3RCVyxHQUFBLENBQUk2VCxTQUFBLENBQVVDLEdBQUEsQ0FBSSxvQkFBb0I7SUFDMUM7SUFDQSxNQUFNclcsTUFBQSxFQUFRLEVBQUMsRUFBR3VDLEdBQUEsRUFBSyxJQUFJO0lBQzNCLEtBQUsyUCxNQUFBLEdBQVNBLE1BQUE7SUFDZCxLQUFLQSxNQUFBLEdBQVNBLE1BQUE7SUFDZDJELElBQUEsR0FBTztFQUNYO0VBQ0E1RCxjQUFjQyxNQUFBLEVBQVE7SUFDbEIsT0FBTyxLQUFLRixLQUFBLElBQVNQLFNBQUEsSUFBYVMsTUFBQSxDQUFPbUQsSUFBQSxDQUFLaUIsRUFBQSxDQUFHLEtBQUtwRSxNQUFBLENBQU9tRCxJQUFJO0VBQ3JFO0VBQ0E1QyxVQUFBLEVBQVk7SUFBRSxPQUFPO01BQUU4RCxNQUFBLEVBQVE7SUFBSztFQUFHO0VBQ3ZDN0QsVUFBVXJQLEtBQUEsRUFBTztJQUNiLElBQUltVCxJQUFBLEdBQU8sS0FBS3RFLE1BQUEsQ0FBTzZELElBQUEsQ0FBS3JELFNBQUE7SUFDNUIsT0FBTzhELElBQUEsR0FBT0EsSUFBQSxDQUFLblQsS0FBSyxJQUFJO0VBQ2hDO0VBQ0E4UixlQUFlQyxRQUFBLEVBQVU7SUFDckIsT0FBT0EsUUFBQSxDQUFTQyxJQUFBLElBQVEsZUFBZSxLQUFLbkQsTUFBQSxDQUFPNkQsSUFBQSxDQUFLVSxlQUFBO0VBQzVEO0VBQ0E5RCxRQUFBLEVBQVU7SUFDTixLQUFLVCxNQUFBLENBQU9tRCxJQUFBLENBQUsxQyxPQUFBLENBQVEsS0FBS3BRLEdBQUc7SUFDakMsTUFBTW9RLE9BQUEsQ0FBUTtFQUNsQjtFQUNBLElBQUltQixRQUFBLEVBQVU7SUFBRSxPQUFPO0VBQU07RUFDN0IsSUFBSTlSLG1CQUFBLEVBQXFCO0lBQUUsT0FBTyxDQUFDLENBQUMsS0FBS2tRLE1BQUEsQ0FBT21ELElBQUEsQ0FBS1UsSUFBQSxDQUFLVyxXQUFBO0VBQWE7RUFDdkUsSUFBSXRQLEtBQUEsRUFBTztJQUFFLE9BQU8sS0FBSzhLLE1BQUEsQ0FBT21ELElBQUEsQ0FBS2pPLElBQUE7RUFBTTtBQUMvQztBQUNBLElBQU11UCxtQkFBQSxHQUFOLGNBQWtDOUUsUUFBQSxDQUFTO0VBQ3ZDQyxZQUFZOVIsTUFBQSxFQUFRdUMsR0FBQSxFQUFLcVUsT0FBQSxFQUFTaEIsSUFBQSxFQUFNO0lBQ3BDLE1BQU01VixNQUFBLEVBQVEsRUFBQyxFQUFHdUMsR0FBQSxFQUFLLElBQUk7SUFDM0IsS0FBS3FVLE9BQUEsR0FBVUEsT0FBQTtJQUNmLEtBQUtoQixJQUFBLEdBQU9BLElBQUE7RUFDaEI7RUFDQSxJQUFJckksS0FBQSxFQUFPO0lBQUUsT0FBTyxLQUFLcUksSUFBQSxDQUFLL1UsTUFBQTtFQUFRO0VBQ3RDaVMsZ0JBQWdCdlEsR0FBQSxFQUFLTCxNQUFBLEVBQVE7SUFDekIsSUFBSUssR0FBQSxJQUFPLEtBQUtxVSxPQUFBLEVBQ1osT0FBTyxLQUFLbkosVUFBQSxJQUFjdkwsTUFBQSxHQUFTLEtBQUtxTCxJQUFBLEdBQU87SUFDbkQsT0FBTyxLQUFLRSxVQUFBLEdBQWF2TCxNQUFBO0VBQzdCO0VBQ0FtTSxXQUFXbkssR0FBQSxFQUFLO0lBQ1osT0FBTztNQUFFdEUsSUFBQSxFQUFNLEtBQUtnWCxPQUFBO01BQVMxVSxNQUFBLEVBQVFnQztJQUFJO0VBQzdDO0VBQ0FpUixlQUFlMEIsR0FBQSxFQUFLO0lBQ2hCLE9BQU9BLEdBQUEsQ0FBSXhCLElBQUEsS0FBUyxtQkFBbUJ3QixHQUFBLENBQUlqSixNQUFBLENBQU9oTixTQUFBLElBQWFpVyxHQUFBLENBQUlDLFFBQUE7RUFDdkU7QUFDSjtBQU1BLElBQU1DLFlBQUEsR0FBTixjQUEyQmxGLFFBQUEsQ0FBUztFQUNoQ0MsWUFBWTlSLE1BQUEsRUFBUW9TLElBQUEsRUFBTTdQLEdBQUEsRUFBS0ksVUFBQSxFQUFZb1QsSUFBQSxFQUFNO0lBQzdDLE1BQU0vVixNQUFBLEVBQVEsRUFBQyxFQUFHdUMsR0FBQSxFQUFLSSxVQUFVO0lBQ2pDLEtBQUt5UCxJQUFBLEdBQU9BLElBQUE7SUFDWixLQUFLMkQsSUFBQSxHQUFPQSxJQUFBO0VBQ2hCO0VBQ0EsT0FBT2lCLE9BQU9oWCxNQUFBLEVBQVFvUyxJQUFBLEVBQU02RSxNQUFBLEVBQVFwUCxJQUFBLEVBQU07SUFDdEMsSUFBSXFQLE1BQUEsR0FBU3JQLElBQUEsQ0FBS3NQLFNBQUEsQ0FBVS9FLElBQUEsQ0FBS2lELElBQUEsQ0FBSytCLElBQUE7SUFDdEMsSUFBSXJCLElBQUEsR0FBT21CLE1BQUEsSUFBVUEsTUFBQSxDQUFPOUUsSUFBQSxFQUFNdkssSUFBQSxFQUFNb1AsTUFBTTtJQUM5QyxJQUFJLENBQUNsQixJQUFBLElBQVEsQ0FBQ0EsSUFBQSxDQUFLeFQsR0FBQSxFQUNmd1QsSUFBQSxHQUFPdFcsd0JBQUEsQ0FBQTRYLGFBQUEsQ0FBY0MsVUFBQSxDQUFXN1csUUFBQSxFQUFVMlIsSUFBQSxDQUFLaUQsSUFBQSxDQUFLVSxJQUFBLENBQUtELEtBQUEsQ0FBTTFELElBQUEsRUFBTTZFLE1BQU0sR0FBRyxNQUFNN0UsSUFBQSxDQUFLbUYsS0FBSztJQUNsRyxPQUFPLElBQUlSLFlBQUEsQ0FBYS9XLE1BQUEsRUFBUW9TLElBQUEsRUFBTTJELElBQUEsQ0FBS3hULEdBQUEsRUFBS3dULElBQUEsQ0FBS3BULFVBQUEsSUFBY29ULElBQUEsQ0FBS3hULEdBQUEsRUFBS3dULElBQUk7RUFDckY7RUFDQXRELFVBQUEsRUFBWTtJQUNSLElBQUssS0FBS1QsS0FBQSxHQUFRSixVQUFBLElBQWUsS0FBS1EsSUFBQSxDQUFLaUQsSUFBQSxDQUFLVSxJQUFBLENBQUt5QixhQUFBLEVBQ2pELE9BQU87SUFDWCxPQUFPO01BQUVwRixJQUFBLEVBQU0sS0FBS0EsSUFBQSxDQUFLaUQsSUFBQSxDQUFLK0IsSUFBQTtNQUFNRyxLQUFBLEVBQU8sS0FBS25GLElBQUEsQ0FBS21GLEtBQUE7TUFBT0UsY0FBQSxFQUFnQixLQUFLOVU7SUFBVztFQUNoRztFQUNBd1AsWUFBWUMsSUFBQSxFQUFNO0lBQUUsT0FBTyxLQUFLSixLQUFBLElBQVNKLFVBQUEsSUFBYyxLQUFLUSxJQUFBLENBQUtrRSxFQUFBLENBQUdsRSxJQUFJO0VBQUc7RUFDM0VtRCxVQUFValYsSUFBQSxFQUFNQyxFQUFBLEVBQUk7SUFDaEIsTUFBTWdWLFNBQUEsQ0FBVWpWLElBQUEsRUFBTUMsRUFBRTtJQUV4QixJQUFJLEtBQUt5UixLQUFBLElBQVNQLFNBQUEsRUFBVztNQUN6QixJQUFJelIsTUFBQSxHQUFTLEtBQUtBLE1BQUE7TUFDbEIsT0FBTyxDQUFDQSxNQUFBLENBQU9KLElBQUEsRUFDWEksTUFBQSxHQUFTQSxNQUFBLENBQU9BLE1BQUE7TUFDcEIsSUFBSUEsTUFBQSxDQUFPZ1MsS0FBQSxHQUFRLEtBQUtBLEtBQUEsRUFDcEJoUyxNQUFBLENBQU9nUyxLQUFBLEdBQVEsS0FBS0EsS0FBQTtNQUN4QixLQUFLQSxLQUFBLEdBQVFQLFNBQUE7SUFDakI7RUFDSjtFQUNBaUcsTUFBTXBYLElBQUEsRUFBTUMsRUFBQSxFQUFJc0gsSUFBQSxFQUFNO0lBQ2xCLElBQUk4UCxJQUFBLEdBQU9aLFlBQUEsQ0FBYUMsTUFBQSxDQUFPLEtBQUtoWCxNQUFBLEVBQVEsS0FBS29TLElBQUEsRUFBTSxNQUFNdkssSUFBSTtJQUNqRSxJQUFJK1AsS0FBQSxHQUFRLEtBQUs3RixRQUFBO01BQVV4RSxJQUFBLEdBQU8sS0FBS0EsSUFBQTtJQUN2QyxJQUFJaE4sRUFBQSxHQUFLZ04sSUFBQSxFQUNMcUssS0FBQSxHQUFRQyxZQUFBLENBQWFELEtBQUEsRUFBT3JYLEVBQUEsRUFBSWdOLElBQUEsRUFBTTFGLElBQUk7SUFDOUMsSUFBSXZILElBQUEsR0FBTyxHQUNQc1gsS0FBQSxHQUFRQyxZQUFBLENBQWFELEtBQUEsRUFBTyxHQUFHdFgsSUFBQSxFQUFNdUgsSUFBSTtJQUM3QyxTQUFTcUMsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTBOLEtBQUEsQ0FBTS9XLE1BQUEsRUFBUXFKLENBQUEsSUFDOUIwTixLQUFBLENBQU0xTixDQUFBLEVBQUdsSyxNQUFBLEdBQVMyWCxJQUFBO0lBQ3RCQSxJQUFBLENBQUs1RixRQUFBLEdBQVc2RixLQUFBO0lBQ2hCLE9BQU9ELElBQUE7RUFDWDtFQUNBeEMsZUFBZUMsUUFBQSxFQUFVO0lBQ3JCLE9BQU8sS0FBS1csSUFBQSxDQUFLWixjQUFBLEdBQWlCLEtBQUtZLElBQUEsQ0FBS1osY0FBQSxDQUFlQyxRQUFRLElBQUksTUFBTUQsY0FBQSxDQUFlQyxRQUFRO0VBQ3hHO0VBQ0F6QyxRQUFBLEVBQVU7SUFDTixJQUFJLEtBQUtvRCxJQUFBLENBQUtwRCxPQUFBLEVBQ1YsS0FBS29ELElBQUEsQ0FBS3BELE9BQUEsQ0FBUTtJQUN0QixNQUFNQSxPQUFBLENBQVE7RUFDbEI7QUFDSjtBQUlBLElBQU1tRixZQUFBLEdBQU4sY0FBMkJqRyxRQUFBLENBQVM7RUFDaENDLFlBQVk5UixNQUFBLEVBQVFKLElBQUEsRUFBTTBTLFNBQUEsRUFBV0MsU0FBQSxFQUFXaFEsR0FBQSxFQUFLSSxVQUFBLEVBQVkwUSxPQUFBLEVBQVN4TCxJQUFBLEVBQU0zRCxHQUFBLEVBQUs7SUFDakYsTUFBTWxFLE1BQUEsRUFBUSxFQUFDLEVBQUd1QyxHQUFBLEVBQUtJLFVBQVU7SUFDakMsS0FBSy9DLElBQUEsR0FBT0EsSUFBQTtJQUNaLEtBQUswUyxTQUFBLEdBQVlBLFNBQUE7SUFDakIsS0FBS0MsU0FBQSxHQUFZQSxTQUFBO0lBQ2pCLEtBQUtjLE9BQUEsR0FBVUEsT0FBQTtFQUNuQjtFQVVBLE9BQU8yRCxPQUFPaFgsTUFBQSxFQUFRSixJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVzFLLElBQUEsRUFBTTNELEdBQUEsRUFBSztJQUN6RCxJQUFJZ1QsTUFBQSxHQUFTclAsSUFBQSxDQUFLc1AsU0FBQSxDQUFVdlgsSUFBQSxDQUFLeVYsSUFBQSxDQUFLK0IsSUFBQTtNQUFPVyxPQUFBO0lBQzdDLElBQUloQyxJQUFBLEdBQU9tQixNQUFBLElBQVVBLE1BQUEsQ0FBT3RYLElBQUEsRUFBTWlJLElBQUEsRUFBTSxNQUFNO01BRzFDLElBQUksQ0FBQ2tRLE9BQUEsRUFDRCxPQUFPN1QsR0FBQTtNQUNYLElBQUk2VCxPQUFBLENBQVEvWCxNQUFBLEVBQ1IsT0FBTytYLE9BQUEsQ0FBUS9YLE1BQUEsQ0FBTzRTLGNBQUEsQ0FBZW1GLE9BQU87SUFDcEQsR0FBR3pGLFNBQUEsRUFBV0MsU0FBUztJQUN2QixJQUFJaFEsR0FBQSxHQUFNd1QsSUFBQSxJQUFRQSxJQUFBLENBQUt4VCxHQUFBO01BQUtJLFVBQUEsR0FBYW9ULElBQUEsSUFBUUEsSUFBQSxDQUFLcFQsVUFBQTtJQUN0RCxJQUFJL0MsSUFBQSxDQUFLMk0sTUFBQSxFQUFRO01BQ2IsSUFBSSxDQUFDaEssR0FBQSxFQUNEQSxHQUFBLEdBQU05QixRQUFBLENBQVN1WCxjQUFBLENBQWVwWSxJQUFBLENBQUtnVyxJQUFJLFdBQ2xDclQsR0FBQSxDQUFJckMsUUFBQSxJQUFZLEdBQ3JCLE1BQU0sSUFBSW1VLFVBQUEsQ0FBVywwQ0FBMEM7SUFDdkUsV0FDUyxDQUFDOVIsR0FBQSxFQUFLO01BQ1gsSUFBSTBWLEtBQUEsR0FBT3hZLHdCQUFBLENBQUE0WCxhQUFBLENBQWNDLFVBQUEsQ0FBVzdXLFFBQUEsRUFBVWIsSUFBQSxDQUFLeVYsSUFBQSxDQUFLVSxJQUFBLENBQUtELEtBQUEsQ0FBTWxXLElBQUksR0FBRyxNQUFNQSxJQUFBLENBQUsyWCxLQUFLO01BQzFGLENBQUM7UUFBRWhWLEdBQUE7UUFBS0k7TUFBVyxJQUFJc1YsS0FBQTtJQUMzQjtJQUNBLElBQUksQ0FBQ3RWLFVBQUEsSUFBYyxDQUFDL0MsSUFBQSxDQUFLMk0sTUFBQSxJQUFVaEssR0FBQSxDQUFJWixRQUFBLElBQVksTUFBTTtNQUNyRCxJQUFJLENBQUNZLEdBQUEsQ0FBSTJWLFlBQUEsQ0FBYSxpQkFBaUIsR0FDbkMzVixHQUFBLENBQUlYLGVBQUEsR0FBa0I7TUFDMUIsSUFBSWhDLElBQUEsQ0FBS3lWLElBQUEsQ0FBS1UsSUFBQSxDQUFLOUksU0FBQSxFQUNmMUssR0FBQSxDQUFJMEssU0FBQSxHQUFZO0lBQ3hCO0lBQ0EsSUFBSW9HLE9BQUEsR0FBVTlRLEdBQUE7SUFDZEEsR0FBQSxHQUFNNFYsY0FBQSxDQUFlNVYsR0FBQSxFQUFLK1AsU0FBQSxFQUFXMVMsSUFBSTtJQUN6QyxJQUFJbVcsSUFBQSxFQUNBLE9BQU9nQyxPQUFBLEdBQVUsSUFBSUssa0JBQUEsQ0FBbUJwWSxNQUFBLEVBQVFKLElBQUEsRUFBTTBTLFNBQUEsRUFBV0MsU0FBQSxFQUFXaFEsR0FBQSxFQUFLSSxVQUFBLElBQWMsTUFBTTBRLE9BQUEsRUFBUzBDLElBQUEsRUFBTWxPLElBQUEsRUFBTTNELEdBQUEsR0FBTSxDQUFDLFdBQzVIdEUsSUFBQSxDQUFLMk0sTUFBQSxFQUNWLE9BQU8sSUFBSThMLFlBQUEsQ0FBYXJZLE1BQUEsRUFBUUosSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVdoUSxHQUFBLEVBQUs4USxPQUFBLEVBQVN4TCxJQUFJLE9BRTlFLE9BQU8sSUFBSWlRLFlBQUEsQ0FBYTlYLE1BQUEsRUFBUUosSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVdoUSxHQUFBLEVBQUtJLFVBQUEsSUFBYyxNQUFNMFEsT0FBQSxFQUFTeEwsSUFBQSxFQUFNM0QsR0FBQSxHQUFNLENBQUM7RUFDbkg7RUFDQXVPLFVBQUEsRUFBWTtJQUVSLElBQUksS0FBSzdTLElBQUEsQ0FBS3lWLElBQUEsQ0FBS1UsSUFBQSxDQUFLeUIsYUFBQSxFQUNwQixPQUFPO0lBS1gsSUFBSWMsSUFBQSxHQUFPO01BQUUxWSxJQUFBLEVBQU0sS0FBS0EsSUFBQSxDQUFLeVYsSUFBQSxDQUFLK0IsSUFBQTtNQUFNRyxLQUFBLEVBQU8sS0FBSzNYLElBQUEsQ0FBSzJYO0lBQU07SUFDL0QsSUFBSSxLQUFLM1gsSUFBQSxDQUFLeVYsSUFBQSxDQUFLa0QsVUFBQSxJQUFjLE9BQzdCRCxJQUFBLENBQUtFLGtCQUFBLEdBQXFCO0lBQzlCLElBQUksQ0FBQyxLQUFLN1YsVUFBQSxFQUFZO01BQ2xCMlYsSUFBQSxDQUFLRyxVQUFBLEdBQWEsTUFBTSxLQUFLN1ksSUFBQSxDQUFLME4sT0FBQTtJQUN0QyxXQUNTLENBQUMsS0FBS2dJLFdBQUEsRUFBYTtNQUN4QmdELElBQUEsQ0FBS2IsY0FBQSxHQUFpQixLQUFLOVUsVUFBQTtJQUMvQixPQUNLO01BSUQsU0FBU3VILENBQUEsR0FBSSxLQUFLNkgsUUFBQSxDQUFTbFIsTUFBQSxHQUFTLEdBQUdxSixDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUFLO1FBQ2hELElBQUlySSxLQUFBLEdBQVEsS0FBS2tRLFFBQUEsQ0FBUzdILENBQUE7UUFDMUIsSUFBSSxLQUFLM0gsR0FBQSxDQUFJa0gsUUFBQSxDQUFTNUgsS0FBQSxDQUFNVSxHQUFBLENBQUl4QyxVQUFVLEdBQUc7VUFDekN1WSxJQUFBLENBQUtiLGNBQUEsR0FBaUI1VixLQUFBLENBQU1VLEdBQUEsQ0FBSXhDLFVBQUE7VUFDaEM7UUFDSjtNQUNKO01BQ0EsSUFBSSxDQUFDdVksSUFBQSxDQUFLYixjQUFBLEVBQ05hLElBQUEsQ0FBS0csVUFBQSxHQUFhLE1BQU1oWix3QkFBQSxDQUFBaVosUUFBQSxDQUFTQyxLQUFBO0lBQ3pDO0lBQ0EsT0FBT0wsSUFBQTtFQUNYO0VBQ0FqRyxZQUFZelMsSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVc7SUFDcEMsT0FBTyxLQUFLUCxLQUFBLElBQVNQLFNBQUEsSUFBYTdSLElBQUEsQ0FBSzBXLEVBQUEsQ0FBRyxLQUFLMVcsSUFBSSxLQUMvQ2daLGFBQUEsQ0FBY3RHLFNBQUEsRUFBVyxLQUFLQSxTQUFTLEtBQUtDLFNBQUEsQ0FBVStELEVBQUEsQ0FBRyxLQUFLL0QsU0FBUztFQUMvRTtFQUNBLElBQUloRixLQUFBLEVBQU87SUFBRSxPQUFPLEtBQUszTixJQUFBLENBQUs0QixRQUFBO0VBQVU7RUFDeEMsSUFBSWtNLE9BQUEsRUFBUztJQUFFLE9BQU8sS0FBSzlOLElBQUEsQ0FBS2laLE1BQUEsR0FBUyxJQUFJO0VBQUc7RUFLaERDLGVBQWVqUixJQUFBLEVBQU0zRCxHQUFBLEVBQUs7SUFDdEIsSUFBSStTLE1BQUEsR0FBUyxLQUFLclgsSUFBQSxDQUFLaVAsYUFBQTtNQUFlNU4sR0FBQSxHQUFNaUQsR0FBQTtJQUM1QyxJQUFJNlUsV0FBQSxHQUFjbFIsSUFBQSxDQUFLbVIsU0FBQSxHQUFZLEtBQUtDLG9CQUFBLENBQXFCcFIsSUFBQSxFQUFNM0QsR0FBRyxJQUFJO0lBQzFFLElBQUlnVixnQkFBQSxHQUFtQkgsV0FBQSxJQUFlQSxXQUFBLENBQVk3VSxHQUFBLEdBQU0sS0FBSzZVLFdBQUEsR0FBYztJQUMzRSxJQUFJSSxrQkFBQSxHQUFxQkosV0FBQSxJQUFlQSxXQUFBLENBQVk3VSxHQUFBLEdBQU07SUFDMUQsSUFBSWtWLE9BQUEsR0FBVSxJQUFJQyxlQUFBLENBQWdCLE1BQU1ILGdCQUFBLElBQW9CQSxnQkFBQSxDQUFpQnRaLElBQUEsRUFBTWlJLElBQUk7SUFDdkZ5UixRQUFBLENBQVMsS0FBSzFaLElBQUEsRUFBTSxLQUFLMlMsU0FBQSxFQUFXLENBQUNMLE1BQUEsRUFBUWhJLENBQUEsRUFBR3FQLFVBQUEsS0FBZTtNQUMzRCxJQUFJckgsTUFBQSxDQUFPNkQsSUFBQSxDQUFLeUQsS0FBQSxFQUNaSixPQUFBLENBQVFLLFdBQUEsQ0FBWXZILE1BQUEsQ0FBTzZELElBQUEsQ0FBS3lELEtBQUEsRUFBT3ZDLE1BQUEsRUFBUXBQLElBQUksV0FDOUNxSyxNQUFBLENBQU9tRCxJQUFBLENBQUtqTyxJQUFBLElBQVEsS0FBSyxDQUFDbVMsVUFBQSxFQUMvQkgsT0FBQSxDQUFRSyxXQUFBLENBQVl2UCxDQUFBLElBQUssS0FBS3RLLElBQUEsQ0FBSzhaLFVBQUEsR0FBYWphLHdCQUFBLENBQUFrYSxJQUFBLENBQUtDLElBQUEsR0FBTyxLQUFLaGEsSUFBQSxDQUFLaUMsS0FBQSxDQUFNcUksQ0FBQyxFQUFFc1AsS0FBQSxFQUFPdkMsTUFBQSxFQUFRcFAsSUFBSTtNQUd0R3VSLE9BQUEsQ0FBUVMsV0FBQSxDQUFZM0gsTUFBQSxFQUFRckssSUFBQSxFQUFNNUcsR0FBRztJQUN6QyxHQUFHLENBQUNZLEtBQUEsRUFBT3lRLFNBQUEsRUFBV0MsU0FBQSxFQUFXckksQ0FBQSxLQUFNO01BRW5Da1AsT0FBQSxDQUFRSyxXQUFBLENBQVk1WCxLQUFBLENBQU0yWCxLQUFBLEVBQU92QyxNQUFBLEVBQVFwUCxJQUFJO01BRTdDLElBQUlpUyxTQUFBO01BQ0osSUFBSVYsT0FBQSxDQUFRVyxhQUFBLENBQWNsWSxLQUFBLEVBQU95USxTQUFBLEVBQVdDLFNBQUEsRUFBV3JJLENBQUMsR0FBRyxVQUNsRGlQLGtCQUFBLElBQXNCdFIsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVbFAsSUFBQSxHQUFPVyxHQUFBLElBQ3ZENEcsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFValAsRUFBQSxHQUFLVSxHQUFBLEdBQU1ZLEtBQUEsQ0FBTUwsUUFBQSxLQUNyQ3NZLFNBQUEsR0FBWVYsT0FBQSxDQUFRWSxrQkFBQSxDQUFtQmpCLFdBQUEsQ0FBWW5aLElBQUksS0FBSyxNQUM3RHdaLE9BQUEsQ0FBUWEsWUFBQSxDQUFhcFksS0FBQSxFQUFPeVEsU0FBQSxFQUFXQyxTQUFBLEVBQVd1SCxTQUFBLEVBQVdqUyxJQUFJLEdBQUcsVUFDL0R1UixPQUFBLENBQVFjLGNBQUEsQ0FBZXJZLEtBQUEsRUFBT3lRLFNBQUEsRUFBV0MsU0FBQSxFQUFXMUssSUFBQSxFQUFNcUMsQ0FBQSxFQUFHakosR0FBRyxHQUFHLE1BQ3ZFO1FBRURtWSxPQUFBLENBQVFlLE9BQUEsQ0FBUXRZLEtBQUEsRUFBT3lRLFNBQUEsRUFBV0MsU0FBQSxFQUFXMUssSUFBQSxFQUFNNUcsR0FBRztNQUMxRDtNQUNBQSxHQUFBLElBQU9ZLEtBQUEsQ0FBTUwsUUFBQTtJQUNqQixDQUFDO0lBRUQ0WCxPQUFBLENBQVFLLFdBQUEsQ0FBWSxFQUFDLEVBQUd4QyxNQUFBLEVBQVFwUCxJQUFJO0lBQ3BDLElBQUksS0FBS2pJLElBQUEsQ0FBS3FRLFdBQUEsRUFDVm1KLE9BQUEsQ0FBUWdCLGlCQUFBLENBQWtCO0lBQzlCaEIsT0FBQSxDQUFRaUIsV0FBQSxDQUFZO0lBRXBCLElBQUlqQixPQUFBLENBQVFrQixPQUFBLElBQVcsS0FBS3RJLEtBQUEsSUFBU0wsYUFBQSxFQUFlO01BRWhELElBQUl1SCxnQkFBQSxFQUNBLEtBQUtxQix1QkFBQSxDQUF3QjFTLElBQUEsRUFBTXFSLGdCQUFnQjtNQUN2RHNCLFdBQUEsQ0FBWSxLQUFLN1gsVUFBQSxFQUFZLEtBQUtvUCxRQUFBLEVBQVVsSyxJQUFJO01BQ2hELElBQUlqQyxHQUFBLEVBQ0E2VSxRQUFBLENBQVMsS0FBS2xZLEdBQUc7SUFDekI7RUFDSjtFQUNBMFcscUJBQXFCcFIsSUFBQSxFQUFNM0QsR0FBQSxFQUFLO0lBRzVCLElBQUk7TUFBRTVELElBQUE7TUFBTUM7SUFBRyxJQUFJc0gsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQTtJQUM5QixJQUFJLEVBQUUzSCxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLFlBQXFCalEsd0JBQUEsQ0FBQW1iLGFBQUEsS0FBa0JwYSxJQUFBLEdBQU80RCxHQUFBLElBQU8zRCxFQUFBLEdBQUsyRCxHQUFBLEdBQU0sS0FBS3RFLElBQUEsQ0FBSzBOLE9BQUEsQ0FBUUMsSUFBQSxFQUMvRixPQUFPO0lBQ1gsSUFBSW9OLFFBQUEsR0FBVzlTLElBQUEsQ0FBSytTLEtBQUEsQ0FBTUMsZUFBQTtJQUMxQixJQUFJLENBQUNGLFFBQUEsSUFBWSxDQUFDLEtBQUtwWSxHQUFBLENBQUlrSCxRQUFBLENBQVNrUixRQUFBLENBQVM1YSxVQUFVLEdBQ25ELE9BQU87SUFDWCxJQUFJLEtBQUtILElBQUEsQ0FBS2lQLGFBQUEsRUFBZTtNQUl6QixJQUFJK0csSUFBQSxHQUFPK0UsUUFBQSxDQUFTL1osU0FBQTtNQUNwQixJQUFJa2EsT0FBQSxHQUFVQyxrQkFBQSxDQUFtQixLQUFLbmIsSUFBQSxDQUFLME4sT0FBQSxFQUFTc0ksSUFBQSxFQUFNdFYsSUFBQSxHQUFPNEQsR0FBQSxFQUFLM0QsRUFBQSxHQUFLMkQsR0FBRztNQUM5RSxPQUFPNFcsT0FBQSxHQUFVLElBQUksT0FBTztRQUFFbGIsSUFBQSxFQUFNK2EsUUFBQTtRQUFVelcsR0FBQSxFQUFLNFcsT0FBQTtRQUFTbEY7TUFBSztJQUNyRSxPQUNLO01BQ0QsT0FBTztRQUFFaFcsSUFBQSxFQUFNK2EsUUFBQTtRQUFVelcsR0FBQSxFQUFLO1FBQUkwUixJQUFBLEVBQU07TUFBRztJQUMvQztFQUNKO0VBQ0EyRSx3QkFBd0IxUyxJQUFBLEVBQU07SUFBRWpJLElBQUE7SUFBTXNFLEdBQUE7SUFBSzBSO0VBQUssR0FBRztJQUUvQyxJQUFJLEtBQUt4QyxPQUFBLENBQVF4VCxJQUFJLEdBQ2pCO0lBRUosSUFBSW9iLE9BQUEsR0FBVXBiLElBQUE7SUFDZCxRQUFRb2IsT0FBQSxHQUFVQSxPQUFBLENBQVFqYixVQUFBLEVBQVk7TUFDbEMsSUFBSWliLE9BQUEsQ0FBUWpiLFVBQUEsSUFBYyxLQUFLNEMsVUFBQSxFQUMzQjtNQUNKLE9BQU9xWSxPQUFBLENBQVFsYixlQUFBLEVBQ1hrYixPQUFBLENBQVFqYixVQUFBLENBQVdrYixXQUFBLENBQVlELE9BQUEsQ0FBUWxiLGVBQWU7TUFDMUQsT0FBT2tiLE9BQUEsQ0FBUTVQLFdBQUEsRUFDWDRQLE9BQUEsQ0FBUWpiLFVBQUEsQ0FBV2tiLFdBQUEsQ0FBWUQsT0FBQSxDQUFRNVAsV0FBVztNQUN0RCxJQUFJNFAsT0FBQSxDQUFRalosVUFBQSxFQUNSaVosT0FBQSxDQUFRalosVUFBQSxHQUFhO0lBQzdCO0lBQ0EsSUFBSVMsSUFBQSxHQUFPLElBQUltVSxtQkFBQSxDQUFvQixNQUFNcUUsT0FBQSxFQUFTcGIsSUFBQSxFQUFNZ1csSUFBSTtJQUM1RC9OLElBQUEsQ0FBSytTLEtBQUEsQ0FBTU0sZ0JBQUEsQ0FBaUJyUixJQUFBLENBQUtySCxJQUFJO0lBRXJDLEtBQUt1UCxRQUFBLEdBQVc4RixZQUFBLENBQWEsS0FBSzlGLFFBQUEsRUFBVTdOLEdBQUEsRUFBS0EsR0FBQSxHQUFNMFIsSUFBQSxDQUFLL1UsTUFBQSxFQUFRZ0gsSUFBQSxFQUFNckYsSUFBSTtFQUNsRjtFQUdBMlksT0FBT3ZiLElBQUEsRUFBTTBTLFNBQUEsRUFBV0MsU0FBQSxFQUFXMUssSUFBQSxFQUFNO0lBQ3JDLElBQUksS0FBS21LLEtBQUEsSUFBU0osVUFBQSxJQUNkLENBQUNoUyxJQUFBLENBQUt3YixVQUFBLENBQVcsS0FBS3hiLElBQUksR0FDMUIsT0FBTztJQUNYLEtBQUt5YixXQUFBLENBQVl6YixJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVzFLLElBQUk7SUFDakQsT0FBTztFQUNYO0VBQ0F3VCxZQUFZemIsSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVcxSyxJQUFBLEVBQU07SUFDMUMsS0FBS3lULGVBQUEsQ0FBZ0JoSixTQUFTO0lBQzlCLEtBQUsxUyxJQUFBLEdBQU9BLElBQUE7SUFDWixLQUFLMlMsU0FBQSxHQUFZQSxTQUFBO0lBQ2pCLElBQUksS0FBSzVQLFVBQUEsRUFDTCxLQUFLbVcsY0FBQSxDQUFlalIsSUFBQSxFQUFNLEtBQUs0RixVQUFVO0lBQzdDLEtBQUt1RSxLQUFBLEdBQVFQLFNBQUE7RUFDakI7RUFDQTZKLGdCQUFnQmhKLFNBQUEsRUFBVztJQUN2QixJQUFJc0csYUFBQSxDQUFjdEcsU0FBQSxFQUFXLEtBQUtBLFNBQVMsR0FDdkM7SUFDSixJQUFJaUosU0FBQSxHQUFZLEtBQUtsSSxPQUFBLENBQVFuVCxRQUFBLElBQVk7SUFDekMsSUFBSXNiLE1BQUEsR0FBUyxLQUFLalosR0FBQTtJQUNsQixLQUFLQSxHQUFBLEdBQU1rWixjQUFBLENBQWUsS0FBS2xaLEdBQUEsRUFBSyxLQUFLOFEsT0FBQSxFQUFTcUksZ0JBQUEsQ0FBaUIsS0FBS3BKLFNBQUEsRUFBVyxLQUFLMVMsSUFBQSxFQUFNMmIsU0FBUyxHQUFHRyxnQkFBQSxDQUFpQnBKLFNBQUEsRUFBVyxLQUFLMVMsSUFBQSxFQUFNMmIsU0FBUyxDQUFDO0lBQzNKLElBQUksS0FBS2haLEdBQUEsSUFBT2laLE1BQUEsRUFBUTtNQUNwQkEsTUFBQSxDQUFPelosVUFBQSxHQUFhO01BQ3BCLEtBQUtRLEdBQUEsQ0FBSVIsVUFBQSxHQUFhO0lBQzFCO0lBQ0EsS0FBS3VRLFNBQUEsR0FBWUEsU0FBQTtFQUNyQjtFQUVBcUosV0FBQSxFQUFhO0lBQ1QsSUFBSSxLQUFLdEksT0FBQSxDQUFRblQsUUFBQSxJQUFZLEdBQ3pCLEtBQUttVCxPQUFBLENBQVErQyxTQUFBLENBQVVDLEdBQUEsQ0FBSSwwQkFBMEI7SUFDekQsSUFBSSxLQUFLMVQsVUFBQSxJQUFjLENBQUMsS0FBSy9DLElBQUEsQ0FBS3lWLElBQUEsQ0FBS1UsSUFBQSxDQUFLOUksU0FBQSxFQUN4QyxLQUFLMUssR0FBQSxDQUFJMEssU0FBQSxHQUFZO0VBQzdCO0VBRUEyTyxhQUFBLEVBQWU7SUFDWCxJQUFJLEtBQUt2SSxPQUFBLENBQVFuVCxRQUFBLElBQVksR0FBRztNQUM1QixLQUFLbVQsT0FBQSxDQUFRK0MsU0FBQSxDQUFVeUYsTUFBQSxDQUFPLDBCQUEwQjtNQUN4RCxJQUFJLEtBQUtsWixVQUFBLElBQWMsQ0FBQyxLQUFLL0MsSUFBQSxDQUFLeVYsSUFBQSxDQUFLVSxJQUFBLENBQUs5SSxTQUFBLEVBQ3hDLEtBQUsxSyxHQUFBLENBQUl1WixlQUFBLENBQWdCLFdBQVc7SUFDNUM7RUFDSjtFQUNBLElBQUloSSxRQUFBLEVBQVU7SUFBRSxPQUFPLEtBQUtsVSxJQUFBLENBQUttYyxNQUFBO0VBQVE7QUFDN0M7QUFHQSxTQUFTQyxZQUFZdFksSUFBQSxFQUFLNE8sU0FBQSxFQUFXQyxTQUFBLEVBQVdoUSxHQUFBLEVBQUtzRixJQUFBLEVBQU07RUFDdkRzUSxjQUFBLENBQWU1VixHQUFBLEVBQUsrUCxTQUFBLEVBQVc1TyxJQUFHO0VBQ2xDLElBQUlxSSxPQUFBLEdBQVUsSUFBSStMLFlBQUEsQ0FBYSxRQUFXcFUsSUFBQSxFQUFLNE8sU0FBQSxFQUFXQyxTQUFBLEVBQVdoUSxHQUFBLEVBQUtBLEdBQUEsRUFBS0EsR0FBQSxFQUFLc0YsSUFBQSxFQUFNLENBQUM7RUFDM0YsSUFBSWtFLE9BQUEsQ0FBUXBKLFVBQUEsRUFDUm9KLE9BQUEsQ0FBUStNLGNBQUEsQ0FBZWpSLElBQUEsRUFBTSxDQUFDO0VBQ2xDLE9BQU9rRSxPQUFBO0FBQ1g7QUFDQSxJQUFNc00sWUFBQSxHQUFOLGNBQTJCUCxZQUFBLENBQWE7RUFDcENoRyxZQUFZOVIsTUFBQSxFQUFRSixJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBV2hRLEdBQUEsRUFBSzhRLE9BQUEsRUFBU3hMLElBQUEsRUFBTTtJQUNoRSxNQUFNN0gsTUFBQSxFQUFRSixJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBV2hRLEdBQUEsRUFBSyxNQUFNOFEsT0FBQSxFQUFTeEwsSUFBQSxFQUFNLENBQUM7RUFDekU7RUFDQTRLLFVBQUEsRUFBWTtJQUNSLElBQUl3SixJQUFBLEdBQU8sS0FBSzVJLE9BQUEsQ0FBUXRULFVBQUE7SUFDeEIsT0FBT2tjLElBQUEsSUFBUUEsSUFBQSxJQUFRLEtBQUsxWixHQUFBLElBQU8sQ0FBQzBaLElBQUEsQ0FBS0MsUUFBQSxFQUNyQ0QsSUFBQSxHQUFPQSxJQUFBLENBQUtsYyxVQUFBO0lBQ2hCLE9BQU87TUFBRWtjLElBQUEsRUFBT0EsSUFBQSxJQUFRO0lBQU07RUFDbEM7RUFDQWQsT0FBT3ZiLElBQUEsRUFBTTBTLFNBQUEsRUFBV0MsU0FBQSxFQUFXMUssSUFBQSxFQUFNO0lBQ3JDLElBQUksS0FBS21LLEtBQUEsSUFBU0osVUFBQSxJQUFlLEtBQUtJLEtBQUEsSUFBU1AsU0FBQSxJQUFhLENBQUMsS0FBSzBLLFFBQUEsQ0FBUyxLQUN2RSxDQUFDdmMsSUFBQSxDQUFLd2IsVUFBQSxDQUFXLEtBQUt4YixJQUFJLEdBQzFCLE9BQU87SUFDWCxLQUFLMGIsZUFBQSxDQUFnQmhKLFNBQVM7SUFDOUIsS0FBSyxLQUFLTixLQUFBLElBQVNQLFNBQUEsSUFBYTdSLElBQUEsQ0FBS2dXLElBQUEsSUFBUSxLQUFLaFcsSUFBQSxDQUFLZ1csSUFBQSxLQUFTaFcsSUFBQSxDQUFLZ1csSUFBQSxJQUFRLEtBQUt2QyxPQUFBLENBQVF6UyxTQUFBLEVBQVc7TUFDakcsS0FBS3lTLE9BQUEsQ0FBUXpTLFNBQUEsR0FBWWhCLElBQUEsQ0FBS2dXLElBQUE7TUFDOUIsSUFBSS9OLElBQUEsQ0FBS3VVLFdBQUEsSUFBZSxLQUFLL0ksT0FBQSxFQUN6QnhMLElBQUEsQ0FBS3VVLFdBQUEsR0FBYztJQUMzQjtJQUNBLEtBQUt4YyxJQUFBLEdBQU9BLElBQUE7SUFDWixLQUFLb1MsS0FBQSxHQUFRUCxTQUFBO0lBQ2IsT0FBTztFQUNYO0VBQ0EwSyxTQUFBLEVBQVc7SUFDUCxJQUFJdEwsU0FBQSxHQUFZLEtBQUs3USxNQUFBLENBQU8yQyxVQUFBO0lBQzVCLFNBQVMwWixDQUFBLEdBQUksS0FBS2hKLE9BQUEsRUFBU2dKLENBQUEsRUFBR0EsQ0FBQSxHQUFJQSxDQUFBLENBQUV0YyxVQUFBLEVBQ2hDLElBQUlzYyxDQUFBLElBQUt4TCxTQUFBLEVBQ0wsT0FBTztJQUNmLE9BQU87RUFDWDtFQUNBeEMsV0FBV25LLEdBQUEsRUFBSztJQUNaLE9BQU87TUFBRXRFLElBQUEsRUFBTSxLQUFLeVQsT0FBQTtNQUFTblIsTUFBQSxFQUFRZ0M7SUFBSTtFQUM3QztFQUNBNE8sZ0JBQWdCdlEsR0FBQSxFQUFLTCxNQUFBLEVBQVE0SixJQUFBLEVBQU07SUFDL0IsSUFBSXZKLEdBQUEsSUFBTyxLQUFLOFEsT0FBQSxFQUNaLE9BQU8sS0FBSzVGLFVBQUEsR0FBYXJKLElBQUEsQ0FBS0MsR0FBQSxDQUFJbkMsTUFBQSxFQUFRLEtBQUt0QyxJQUFBLENBQUtnVyxJQUFBLENBQUsvVSxNQUFNO0lBQ25FLE9BQU8sTUFBTWlTLGVBQUEsQ0FBZ0J2USxHQUFBLEVBQUtMLE1BQUEsRUFBUTRKLElBQUk7RUFDbEQ7RUFDQXFKLGVBQWVDLFFBQUEsRUFBVTtJQUNyQixPQUFPQSxRQUFBLENBQVNDLElBQUEsSUFBUSxtQkFBbUJELFFBQUEsQ0FBU0MsSUFBQSxJQUFRO0VBQ2hFO0VBQ0FxQyxNQUFNcFgsSUFBQSxFQUFNQyxFQUFBLEVBQUlzSCxJQUFBLEVBQU07SUFDbEIsSUFBSWpJLElBQUEsR0FBTyxLQUFLQSxJQUFBLENBQUswYyxHQUFBLENBQUloYyxJQUFBLEVBQU1DLEVBQUU7TUFBR2dDLEdBQUEsR0FBTTlCLFFBQUEsQ0FBU3VYLGNBQUEsQ0FBZXBZLElBQUEsQ0FBS2dXLElBQUk7SUFDM0UsT0FBTyxJQUFJeUMsWUFBQSxDQUFhLEtBQUtyWSxNQUFBLEVBQVFKLElBQUEsRUFBTSxLQUFLMFMsU0FBQSxFQUFXLEtBQUtDLFNBQUEsRUFBV2hRLEdBQUEsRUFBS0EsR0FBQSxFQUFLc0YsSUFBSTtFQUM3RjtFQUNBME4sVUFBVWpWLElBQUEsRUFBTUMsRUFBQSxFQUFJO0lBQ2hCLE1BQU1nVixTQUFBLENBQVVqVixJQUFBLEVBQU1DLEVBQUU7SUFDeEIsSUFBSSxLQUFLZ0MsR0FBQSxJQUFPLEtBQUs4USxPQUFBLEtBQVkvUyxJQUFBLElBQVEsS0FBS0MsRUFBQSxJQUFNLEtBQUs4UyxPQUFBLENBQVF6UyxTQUFBLENBQVVDLE1BQUEsR0FDdkUsS0FBS21SLEtBQUEsR0FBUUosVUFBQTtFQUNyQjtFQUNBLElBQUlrQyxRQUFBLEVBQVU7SUFBRSxPQUFPO0VBQU87RUFDOUJ2SCxPQUFPcUosSUFBQSxFQUFNO0lBQUUsT0FBTyxLQUFLaFcsSUFBQSxDQUFLZ1csSUFBQSxJQUFRQSxJQUFBO0VBQU07QUFDbEQ7QUFHQSxJQUFNakMsb0JBQUEsR0FBTixjQUFtQzlCLFFBQUEsQ0FBUztFQUN4Q1ksVUFBQSxFQUFZO0lBQUUsT0FBTztNQUFFOEQsTUFBQSxFQUFRO0lBQUs7RUFBRztFQUN2Qy9ELFlBQVk3USxRQUFBLEVBQVU7SUFBRSxPQUFPLEtBQUtxUSxLQUFBLElBQVNQLFNBQUEsSUFBYSxLQUFLbFAsR0FBQSxDQUFJWixRQUFBLElBQVlBLFFBQUE7RUFBVTtFQUN6RixJQUFJbVMsUUFBQSxFQUFVO0lBQUUsT0FBTztFQUFNO0VBQzdCLElBQUk5RSxnQkFBQSxFQUFrQjtJQUFFLE9BQU8sS0FBS3pNLEdBQUEsQ0FBSVosUUFBQSxJQUFZO0VBQU87QUFDL0Q7QUFJQSxJQUFNeVcsa0JBQUEsR0FBTixjQUFpQ04sWUFBQSxDQUFhO0VBQzFDaEcsWUFBWTlSLE1BQUEsRUFBUUosSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVdoUSxHQUFBLEVBQUtJLFVBQUEsRUFBWTBRLE9BQUEsRUFBUzBDLElBQUEsRUFBTWxPLElBQUEsRUFBTTNELEdBQUEsRUFBSztJQUN2RixNQUFNbEUsTUFBQSxFQUFRSixJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBV2hRLEdBQUEsRUFBS0ksVUFBQSxFQUFZMFEsT0FBQSxFQUFTeEwsSUFBQSxFQUFNM0QsR0FBRztJQUM3RSxLQUFLNlIsSUFBQSxHQUFPQSxJQUFBO0VBQ2hCO0VBSUFvRixPQUFPdmIsSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVcxSyxJQUFBLEVBQU07SUFDckMsSUFBSSxLQUFLbUssS0FBQSxJQUFTSixVQUFBLEVBQ2QsT0FBTztJQUNYLElBQUksS0FBS21FLElBQUEsQ0FBS29GLE1BQUEsS0FBVyxLQUFLdmIsSUFBQSxDQUFLeVYsSUFBQSxJQUFRelYsSUFBQSxDQUFLeVYsSUFBQSxJQUFRLEtBQUtVLElBQUEsQ0FBS3dHLFNBQUEsR0FBWTtNQUMxRSxJQUFJckwsTUFBQSxHQUFTLEtBQUs2RSxJQUFBLENBQUtvRixNQUFBLENBQU92YixJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQVM7TUFDeEQsSUFBSXJCLE1BQUEsRUFDQSxLQUFLbUssV0FBQSxDQUFZemIsSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVcxSyxJQUFJO01BQ3JELE9BQU9xSixNQUFBO0lBQ1gsV0FDUyxDQUFDLEtBQUt2TyxVQUFBLElBQWMsQ0FBQy9DLElBQUEsQ0FBS2laLE1BQUEsRUFBUTtNQUN2QyxPQUFPO0lBQ1gsT0FDSztNQUNELE9BQU8sTUFBTXNDLE1BQUEsQ0FBT3ZiLElBQUEsRUFBTTBTLFNBQUEsRUFBV0MsU0FBQSxFQUFXMUssSUFBSTtJQUN4RDtFQUNKO0VBQ0E4VCxXQUFBLEVBQWE7SUFDVCxLQUFLNUYsSUFBQSxDQUFLNEYsVUFBQSxHQUFhLEtBQUs1RixJQUFBLENBQUs0RixVQUFBLENBQVcsSUFBSSxNQUFNQSxVQUFBLENBQVc7RUFDckU7RUFDQUMsYUFBQSxFQUFlO0lBQ1gsS0FBSzdGLElBQUEsQ0FBSzZGLFlBQUEsR0FBZSxLQUFLN0YsSUFBQSxDQUFLNkYsWUFBQSxDQUFhLElBQUksTUFBTUEsWUFBQSxDQUFhO0VBQzNFO0VBQ0F0SCxhQUFhQyxNQUFBLEVBQVFDLElBQUEsRUFBTTNNLElBQUEsRUFBTTRNLEtBQUEsRUFBTztJQUNwQyxLQUFLc0IsSUFBQSxDQUFLekIsWUFBQSxHQUFlLEtBQUt5QixJQUFBLENBQUt6QixZQUFBLENBQWFDLE1BQUEsRUFBUUMsSUFBQSxFQUFNM00sSUFBQSxDQUFLMEIsSUFBSSxJQUNqRSxNQUFNK0ssWUFBQSxDQUFhQyxNQUFBLEVBQVFDLElBQUEsRUFBTTNNLElBQUEsRUFBTTRNLEtBQUs7RUFDdEQ7RUFDQTlCLFFBQUEsRUFBVTtJQUNOLElBQUksS0FBS29ELElBQUEsQ0FBS3BELE9BQUEsRUFDVixLQUFLb0QsSUFBQSxDQUFLcEQsT0FBQSxDQUFRO0lBQ3RCLE1BQU1BLE9BQUEsQ0FBUTtFQUNsQjtFQUNBRCxVQUFVclAsS0FBQSxFQUFPO0lBQ2IsT0FBTyxLQUFLMFMsSUFBQSxDQUFLckQsU0FBQSxHQUFZLEtBQUtxRCxJQUFBLENBQUtyRCxTQUFBLENBQVVyUCxLQUFLLElBQUk7RUFDOUQ7RUFDQThSLGVBQWVDLFFBQUEsRUFBVTtJQUNyQixPQUFPLEtBQUtXLElBQUEsQ0FBS1osY0FBQSxHQUFpQixLQUFLWSxJQUFBLENBQUtaLGNBQUEsQ0FBZUMsUUFBUSxJQUFJLE1BQU1ELGNBQUEsQ0FBZUMsUUFBUTtFQUN4RztBQUNKO0FBSUEsU0FBU29GLFlBQVkzSixTQUFBLEVBQVcyTCxLQUFBLEVBQU8zVSxJQUFBLEVBQU07RUFDekMsSUFBSXRGLEdBQUEsR0FBTXNPLFNBQUEsQ0FBVTNGLFVBQUE7SUFBWXVSLE9BQUEsR0FBVTtFQUMxQyxTQUFTdlMsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSXNTLEtBQUEsQ0FBTTNiLE1BQUEsRUFBUXFKLENBQUEsSUFBSztJQUNuQyxJQUFJMUgsSUFBQSxHQUFPZ2EsS0FBQSxDQUFNdFMsQ0FBQTtNQUFJd1MsUUFBQSxHQUFXbGEsSUFBQSxDQUFLRCxHQUFBO0lBQ3JDLElBQUltYSxRQUFBLENBQVMzYyxVQUFBLElBQWM4USxTQUFBLEVBQVc7TUFDbEMsT0FBTzZMLFFBQUEsSUFBWW5hLEdBQUEsRUFBSztRQUNwQkEsR0FBQSxHQUFNb2EsRUFBQSxDQUFHcGEsR0FBRztRQUNaa2EsT0FBQSxHQUFVO01BQ2Q7TUFDQWxhLEdBQUEsR0FBTUEsR0FBQSxDQUFJNkksV0FBQTtJQUNkLE9BQ0s7TUFDRHFSLE9BQUEsR0FBVTtNQUNWNUwsU0FBQSxDQUFVK0wsWUFBQSxDQUFhRixRQUFBLEVBQVVuYSxHQUFHO0lBQ3hDO0lBQ0EsSUFBSUMsSUFBQSxZQUFnQnVVLFlBQUEsRUFBYztNQUM5QixJQUFJN1MsR0FBQSxHQUFNM0IsR0FBQSxHQUFNQSxHQUFBLENBQUl6QyxlQUFBLEdBQWtCK1EsU0FBQSxDQUFVekQsU0FBQTtNQUNoRG9OLFdBQUEsQ0FBWWhZLElBQUEsQ0FBS0csVUFBQSxFQUFZSCxJQUFBLENBQUt1UCxRQUFBLEVBQVVsSyxJQUFJO01BQ2hEdEYsR0FBQSxHQUFNMkIsR0FBQSxHQUFNQSxHQUFBLENBQUlrSCxXQUFBLEdBQWN5RixTQUFBLENBQVUzRixVQUFBO0lBQzVDO0VBQ0o7RUFDQSxPQUFPM0ksR0FBQSxFQUFLO0lBQ1JBLEdBQUEsR0FBTW9hLEVBQUEsQ0FBR3BhLEdBQUc7SUFDWmthLE9BQUEsR0FBVTtFQUNkO0VBQ0EsSUFBSUEsT0FBQSxJQUFXNVUsSUFBQSxDQUFLdVUsV0FBQSxJQUFldkwsU0FBQSxFQUMvQmhKLElBQUEsQ0FBS3VVLFdBQUEsR0FBYztBQUMzQjtBQUNBLElBQU1TLGNBQUEsR0FBaUIsU0FBQUEsQ0FBVWxiLFFBQUEsRUFBVTtFQUN2QyxJQUFJQSxRQUFBLEVBQ0EsS0FBS0EsUUFBQSxHQUFXQSxRQUFBO0FBQ3hCO0FBQ0FrYixjQUFBLENBQWU5TyxTQUFBLEdBQVksZUFBQStPLE1BQUEsQ0FBTzlGLE1BQUEsQ0FBTyxJQUFJO0FBQzdDLElBQU0rRixNQUFBLEdBQVMsQ0FBQyxJQUFJRixjQUFBLEVBQWM7QUFDbEMsU0FBU25CLGlCQUFpQnBKLFNBQUEsRUFBVzFTLElBQUEsRUFBTTJiLFNBQUEsRUFBVztFQUNsRCxJQUFJakosU0FBQSxDQUFVelIsTUFBQSxJQUFVLEdBQ3BCLE9BQU9rYyxNQUFBO0VBQ1gsSUFBSWxXLEdBQUEsR0FBTTBVLFNBQUEsR0FBWXdCLE1BQUEsQ0FBTyxLQUFLLElBQUlGLGNBQUE7SUFBZ0IzTCxNQUFBLEdBQVMsQ0FBQ3JLLEdBQUc7RUFDbkUsU0FBU3FELENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlvSSxTQUFBLENBQVV6UixNQUFBLEVBQVFxSixDQUFBLElBQUs7SUFDdkMsSUFBSXFOLEtBQUEsR0FBUWpGLFNBQUEsQ0FBVXBJLENBQUEsRUFBR21MLElBQUEsQ0FBS2tDLEtBQUE7SUFDOUIsSUFBSSxDQUFDQSxLQUFBLEVBQ0Q7SUFDSixJQUFJQSxLQUFBLENBQU01VixRQUFBLEVBQ051UCxNQUFBLENBQU9ySCxJQUFBLENBQUtoRCxHQUFBLEdBQU0sSUFBSWdXLGNBQUEsQ0FBZXRGLEtBQUEsQ0FBTTVWLFFBQVEsQ0FBQztJQUN4RCxTQUFTeVYsSUFBQSxJQUFRRyxLQUFBLEVBQU87TUFDcEIsSUFBSXlGLEdBQUEsR0FBTXpGLEtBQUEsQ0FBTUgsSUFBQTtNQUNoQixJQUFJNEYsR0FBQSxJQUFPLE1BQ1A7TUFDSixJQUFJekIsU0FBQSxJQUFhckssTUFBQSxDQUFPclEsTUFBQSxJQUFVLEdBQzlCcVEsTUFBQSxDQUFPckgsSUFBQSxDQUFLaEQsR0FBQSxHQUFNLElBQUlnVyxjQUFBLENBQWVqZCxJQUFBLENBQUtxZCxRQUFBLEdBQVcsU0FBUyxLQUFLLENBQUM7TUFDeEUsSUFBSTdGLElBQUEsSUFBUSxTQUNSdlEsR0FBQSxDQUFJcVcsS0FBQSxJQUFTclcsR0FBQSxDQUFJcVcsS0FBQSxHQUFRclcsR0FBQSxDQUFJcVcsS0FBQSxHQUFRLE1BQU0sTUFBTUYsR0FBQSxVQUM1QzVGLElBQUEsSUFBUSxTQUNidlEsR0FBQSxDQUFJVCxLQUFBLElBQVNTLEdBQUEsQ0FBSVQsS0FBQSxHQUFRUyxHQUFBLENBQUlULEtBQUEsR0FBUSxNQUFNLE1BQU00VyxHQUFBLFVBQzVDNUYsSUFBQSxJQUFRLFlBQ2J2USxHQUFBLENBQUl1USxJQUFBLElBQVE0RixHQUFBO0lBQ3BCO0VBQ0o7RUFDQSxPQUFPOUwsTUFBQTtBQUNYO0FBQ0EsU0FBU3VLLGVBQWUwQixRQUFBLEVBQVU5SixPQUFBLEVBQVMrSixZQUFBLEVBQWNDLFdBQUEsRUFBYTtFQUVsRSxJQUFJRCxZQUFBLElBQWdCTCxNQUFBLElBQVVNLFdBQUEsSUFBZU4sTUFBQSxFQUN6QyxPQUFPMUosT0FBQTtFQUNYLElBQUlpSyxNQUFBLEdBQVNqSyxPQUFBO0VBQ2IsU0FBU25KLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUltVCxXQUFBLENBQVl4YyxNQUFBLEVBQVFxSixDQUFBLElBQUs7SUFDekMsSUFBSXFULElBQUEsR0FBT0YsV0FBQSxDQUFZblQsQ0FBQTtNQUFJaUQsSUFBQSxHQUFPaVEsWUFBQSxDQUFhbFQsQ0FBQTtJQUMvQyxJQUFJQSxDQUFBLEVBQUc7TUFDSCxJQUFJbEssTUFBQTtNQUNKLElBQUltTixJQUFBLElBQVFBLElBQUEsQ0FBS3hMLFFBQUEsSUFBWTRiLElBQUEsQ0FBSzViLFFBQUEsSUFBWTJiLE1BQUEsSUFBVUgsUUFBQSxLQUNuRG5kLE1BQUEsR0FBU3NkLE1BQUEsQ0FBT3ZkLFVBQUEsS0FBZUMsTUFBQSxDQUFPMkIsUUFBQSxDQUFTNmIsV0FBQSxDQUFZLEtBQUtELElBQUEsQ0FBSzViLFFBQUEsRUFBVTtRQUNoRjJiLE1BQUEsR0FBU3RkLE1BQUE7TUFDYixPQUNLO1FBQ0RBLE1BQUEsR0FBU1MsUUFBQSxDQUFTeVYsYUFBQSxDQUFjcUgsSUFBQSxDQUFLNWIsUUFBUTtRQUM3QzNCLE1BQUEsQ0FBT2tjLFFBQUEsR0FBVztRQUNsQmxjLE1BQUEsQ0FBT21XLFdBQUEsQ0FBWW1ILE1BQU07UUFDekJuUSxJQUFBLEdBQU80UCxNQUFBLENBQU87UUFDZE8sTUFBQSxHQUFTdGQsTUFBQTtNQUNiO0lBQ0o7SUFDQXlkLGVBQUEsQ0FBZ0JILE1BQUEsRUFBUW5RLElBQUEsSUFBUTRQLE1BQUEsQ0FBTyxJQUFJUSxJQUFJO0VBQ25EO0VBQ0EsT0FBT0QsTUFBQTtBQUNYO0FBQ0EsU0FBU0csZ0JBQWdCbGIsR0FBQSxFQUFLNEssSUFBQSxFQUFNMUssR0FBQSxFQUFLO0VBQ3JDLFNBQVMyVSxJQUFBLElBQVFqSyxJQUFBLEVBQ2IsSUFBSWlLLElBQUEsSUFBUSxXQUFXQSxJQUFBLElBQVEsV0FBV0EsSUFBQSxJQUFRLGNBQWMsRUFBRUEsSUFBQSxJQUFRM1UsR0FBQSxHQUN0RUYsR0FBQSxDQUFJdVosZUFBQSxDQUFnQjFFLElBQUk7RUFDaEMsU0FBU0EsSUFBQSxJQUFRM1UsR0FBQSxFQUNiLElBQUkyVSxJQUFBLElBQVEsV0FBV0EsSUFBQSxJQUFRLFdBQVdBLElBQUEsSUFBUSxjQUFjM1UsR0FBQSxDQUFJMlUsSUFBQSxLQUFTakssSUFBQSxDQUFLaUssSUFBQSxHQUM5RTdVLEdBQUEsQ0FBSW1iLFlBQUEsQ0FBYXRHLElBQUEsRUFBTTNVLEdBQUEsQ0FBSTJVLElBQUEsQ0FBSztFQUN4QyxJQUFJakssSUFBQSxDQUFLK1AsS0FBQSxJQUFTemEsR0FBQSxDQUFJeWEsS0FBQSxFQUFPO0lBQ3pCLElBQUlTLFFBQUEsR0FBV3hRLElBQUEsQ0FBSytQLEtBQUEsR0FBUS9QLElBQUEsQ0FBSytQLEtBQUEsQ0FBTVUsS0FBQSxDQUFNLEdBQUcsRUFBRUMsTUFBQSxDQUFPQyxPQUFPLElBQUksRUFBQztJQUNyRSxJQUFJQyxPQUFBLEdBQVV0YixHQUFBLENBQUl5YSxLQUFBLEdBQVF6YSxHQUFBLENBQUl5YSxLQUFBLENBQU1VLEtBQUEsQ0FBTSxHQUFHLEVBQUVDLE1BQUEsQ0FBT0MsT0FBTyxJQUFJLEVBQUM7SUFDbEUsU0FBUzVULENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUl5VCxRQUFBLENBQVM5YyxNQUFBLEVBQVFxSixDQUFBLElBQ2pDLElBQUk2VCxPQUFBLENBQVFDLE9BQUEsQ0FBUUwsUUFBQSxDQUFTelQsQ0FBQSxDQUFFLEtBQUssSUFDaEMzSCxHQUFBLENBQUk2VCxTQUFBLENBQVV5RixNQUFBLENBQU84QixRQUFBLENBQVN6VCxDQUFBLENBQUU7SUFDeEMsU0FBU0EsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTZULE9BQUEsQ0FBUWxkLE1BQUEsRUFBUXFKLENBQUEsSUFDaEMsSUFBSXlULFFBQUEsQ0FBU0ssT0FBQSxDQUFRRCxPQUFBLENBQVE3VCxDQUFBLENBQUUsS0FBSyxJQUNoQzNILEdBQUEsQ0FBSTZULFNBQUEsQ0FBVUMsR0FBQSxDQUFJMEgsT0FBQSxDQUFRN1QsQ0FBQSxDQUFFO0lBQ3BDLElBQUkzSCxHQUFBLENBQUk2VCxTQUFBLENBQVV2VixNQUFBLElBQVUsR0FDeEIwQixHQUFBLENBQUl1WixlQUFBLENBQWdCLE9BQU87RUFDbkM7RUFDQSxJQUFJM08sSUFBQSxDQUFLL0csS0FBQSxJQUFTM0QsR0FBQSxDQUFJMkQsS0FBQSxFQUFPO0lBQ3pCLElBQUkrRyxJQUFBLENBQUsvRyxLQUFBLEVBQU87TUFDWixJQUFJNlgsSUFBQSxHQUFPO1FBQWlGQyxDQUFBO01BQzVGLE9BQU9BLENBQUEsR0FBSUQsSUFBQSxDQUFLalosSUFBQSxDQUFLbUksSUFBQSxDQUFLL0csS0FBSyxHQUMzQjdELEdBQUEsQ0FBSTZELEtBQUEsQ0FBTStYLGNBQUEsQ0FBZUQsQ0FBQSxDQUFFLEVBQUU7SUFDckM7SUFDQSxJQUFJemIsR0FBQSxDQUFJMkQsS0FBQSxFQUNKN0QsR0FBQSxDQUFJNkQsS0FBQSxDQUFNZ1ksT0FBQSxJQUFXM2IsR0FBQSxDQUFJMkQsS0FBQTtFQUNqQztBQUNKO0FBQ0EsU0FBUytSLGVBQWU1VixHQUFBLEVBQUtnYixJQUFBLEVBQU0zZCxJQUFBLEVBQU07RUFDckMsT0FBTzZiLGNBQUEsQ0FBZWxaLEdBQUEsRUFBS0EsR0FBQSxFQUFLd2EsTUFBQSxFQUFRckIsZ0JBQUEsQ0FBaUI2QixJQUFBLEVBQU0zZCxJQUFBLEVBQU0yQyxHQUFBLENBQUlyQyxRQUFBLElBQVksQ0FBQyxDQUFDO0FBQzNGO0FBQ0EsU0FBUzBZLGNBQWN5RixDQUFBLEVBQUdDLENBQUEsRUFBRztFQUN6QixJQUFJRCxDQUFBLENBQUV4ZCxNQUFBLElBQVV5ZCxDQUFBLENBQUV6ZCxNQUFBLEVBQ2QsT0FBTztFQUNYLFNBQVNxSixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJbVUsQ0FBQSxDQUFFeGQsTUFBQSxFQUFRcUosQ0FBQSxJQUMxQixJQUFJLENBQUNtVSxDQUFBLENBQUVuVSxDQUFBLEVBQUdtTCxJQUFBLENBQUtpQixFQUFBLENBQUdnSSxDQUFBLENBQUVwVSxDQUFBLEVBQUdtTCxJQUFJLEdBQ3ZCLE9BQU87RUFDZixPQUFPO0FBQ1g7QUFFQSxTQUFTc0gsR0FBR3BhLEdBQUEsRUFBSztFQUNiLElBQUkySyxJQUFBLEdBQU8zSyxHQUFBLENBQUk2SSxXQUFBO0VBQ2Y3SSxHQUFBLENBQUl4QyxVQUFBLENBQVdrYixXQUFBLENBQVkxWSxHQUFHO0VBQzlCLE9BQU8ySyxJQUFBO0FBQ1g7QUFHQSxJQUFNbU0sZUFBQSxHQUFOLE1BQXNCO0VBQ2xCdkgsWUFBWWpMLEdBQUEsRUFBSzBYLElBQUEsRUFBTTFXLElBQUEsRUFBTTtJQUN6QixLQUFLMFcsSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBSzFXLElBQUEsR0FBT0EsSUFBQTtJQUdaLEtBQUtoSSxLQUFBLEdBQVE7SUFHYixLQUFLOEosS0FBQSxHQUFRLEVBQUM7SUFFZCxLQUFLMlEsT0FBQSxHQUFVO0lBQ2YsS0FBS3pULEdBQUEsR0FBTUEsR0FBQTtJQUNYLEtBQUsyWCxRQUFBLEdBQVdBLFFBQUEsQ0FBUzNYLEdBQUEsQ0FBSWpILElBQUEsQ0FBSzBOLE9BQUEsRUFBU3pHLEdBQUc7RUFDbEQ7RUFHQTRYLGVBQWVyTyxLQUFBLEVBQU9DLEdBQUEsRUFBSztJQUN2QixJQUFJRCxLQUFBLElBQVNDLEdBQUEsRUFDVDtJQUNKLFNBQVNuRyxDQUFBLEdBQUlrRyxLQUFBLEVBQU9sRyxDQUFBLEdBQUltRyxHQUFBLEVBQUtuRyxDQUFBLElBQ3pCLEtBQUtyRCxHQUFBLENBQUlrTCxRQUFBLENBQVM3SCxDQUFBLEVBQUd5SSxPQUFBLENBQVE7SUFDakMsS0FBSzlMLEdBQUEsQ0FBSWtMLFFBQUEsQ0FBUzJNLE1BQUEsQ0FBT3RPLEtBQUEsRUFBT0MsR0FBQSxHQUFNRCxLQUFLO0lBQzNDLEtBQUtrSyxPQUFBLEdBQVU7RUFDbkI7RUFFQUQsWUFBQSxFQUFjO0lBQ1YsS0FBS29FLGNBQUEsQ0FBZSxLQUFLNWUsS0FBQSxFQUFPLEtBQUtnSCxHQUFBLENBQUlrTCxRQUFBLENBQVNsUixNQUFNO0VBQzVEO0VBR0E0WSxZQUFZRCxLQUFBLEVBQU92QyxNQUFBLEVBQVFwUCxJQUFBLEVBQU07SUFDN0IsSUFBSThXLElBQUEsR0FBTztNQUFHN04sS0FBQSxHQUFRLEtBQUtuSCxLQUFBLENBQU05SSxNQUFBLElBQVU7SUFDM0MsSUFBSStkLE9BQUEsR0FBVXhhLElBQUEsQ0FBS0MsR0FBQSxDQUFJeU0sS0FBQSxFQUFPMEksS0FBQSxDQUFNM1ksTUFBTTtJQUMxQyxPQUFPOGQsSUFBQSxHQUFPQyxPQUFBLEtBQ1RELElBQUEsSUFBUTdOLEtBQUEsR0FBUSxJQUFJLEtBQUtqSyxHQUFBLEdBQU0sS0FBSzhDLEtBQUEsQ0FBT2dWLElBQUEsR0FBTyxLQUFNLElBQ3BEeE0sV0FBQSxDQUFZcUgsS0FBQSxDQUFNbUYsSUFBQSxDQUFLLEtBQUtuRixLQUFBLENBQU1tRixJQUFBLEVBQU10SixJQUFBLENBQUtVLElBQUEsQ0FBSzhJLFFBQUEsS0FBYSxPQUNwRUYsSUFBQTtJQUNKLE9BQU9BLElBQUEsR0FBTzdOLEtBQUEsRUFBTztNQUNqQixLQUFLdUosV0FBQSxDQUFZO01BQ2pCLEtBQUt4VCxHQUFBLENBQUltTCxLQUFBLEdBQVFQLFNBQUE7TUFDakIsS0FBSzVSLEtBQUEsR0FBUSxLQUFLOEosS0FBQSxDQUFNbVYsR0FBQSxDQUFJO01BQzVCLEtBQUtqWSxHQUFBLEdBQU0sS0FBSzhDLEtBQUEsQ0FBTW1WLEdBQUEsQ0FBSTtNQUMxQmhPLEtBQUE7SUFDSjtJQUNBLE9BQU9BLEtBQUEsR0FBUTBJLEtBQUEsQ0FBTTNZLE1BQUEsRUFBUTtNQUN6QixLQUFLOEksS0FBQSxDQUFNRSxJQUFBLENBQUssS0FBS2hELEdBQUEsRUFBSyxLQUFLaEgsS0FBQSxHQUFRLENBQUM7TUFDeEMsSUFBSWtmLEtBQUEsR0FBUTtNQUNaLFNBQVM3VSxDQUFBLEdBQUksS0FBS3JLLEtBQUEsRUFBT3FLLENBQUEsR0FBSTlGLElBQUEsQ0FBS0MsR0FBQSxDQUFJLEtBQUt4RSxLQUFBLEdBQVEsR0FBRyxLQUFLZ0gsR0FBQSxDQUFJa0wsUUFBQSxDQUFTbFIsTUFBTSxHQUFHcUosQ0FBQSxJQUFLO1FBQ2xGLElBQUlnRCxJQUFBLEdBQU8sS0FBS3JHLEdBQUEsQ0FBSWtMLFFBQUEsQ0FBUzdILENBQUE7UUFDN0IsSUFBSWdELElBQUEsQ0FBS2lGLFdBQUEsQ0FBWXFILEtBQUEsQ0FBTTFJLEtBQUEsQ0FBTSxLQUFLLENBQUMsS0FBS2tPLFFBQUEsQ0FBUzlSLElBQUEsQ0FBSzNLLEdBQUcsR0FBRztVQUM1RHdjLEtBQUEsR0FBUTdVLENBQUE7VUFDUjtRQUNKO01BQ0o7TUFDQSxJQUFJNlUsS0FBQSxHQUFRLElBQUk7UUFDWixJQUFJQSxLQUFBLEdBQVEsS0FBS2xmLEtBQUEsRUFBTztVQUNwQixLQUFLeWEsT0FBQSxHQUFVO1VBQ2YsS0FBS21FLGNBQUEsQ0FBZSxLQUFLNWUsS0FBQSxFQUFPa2YsS0FBSztRQUN6QztRQUNBLEtBQUtsWSxHQUFBLEdBQU0sS0FBS0EsR0FBQSxDQUFJa0wsUUFBQSxDQUFTLEtBQUtsUyxLQUFBO01BQ3RDLE9BQ0s7UUFDRCxJQUFJb2YsUUFBQSxHQUFXbEksWUFBQSxDQUFhQyxNQUFBLENBQU8sS0FBS25RLEdBQUEsRUFBSzJTLEtBQUEsQ0FBTTFJLEtBQUEsR0FBUW1HLE1BQUEsRUFBUXBQLElBQUk7UUFDdkUsS0FBS2hCLEdBQUEsQ0FBSWtMLFFBQUEsQ0FBUzJNLE1BQUEsQ0FBTyxLQUFLN2UsS0FBQSxFQUFPLEdBQUdvZixRQUFRO1FBQ2hELEtBQUtwWSxHQUFBLEdBQU1vWSxRQUFBO1FBQ1gsS0FBSzNFLE9BQUEsR0FBVTtNQUNuQjtNQUNBLEtBQUt6YSxLQUFBLEdBQVE7TUFDYmlSLEtBQUE7SUFDSjtFQUNKO0VBR0FpSixjQUFjbmEsSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVcxUyxLQUFBLEVBQU87SUFDN0MsSUFBSWtmLEtBQUEsR0FBUTtNQUFJRyxVQUFBO0lBQ2hCLElBQUlyZixLQUFBLElBQVMsS0FBSzJlLFFBQUEsQ0FBUzNlLEtBQUEsS0FDdEJxZixVQUFBLEdBQWEsS0FBS1YsUUFBQSxDQUFTVyxPQUFBLENBQVF0ZixLQUFBLEdBQVEsS0FBSzJlLFFBQUEsQ0FBUzNlLEtBQUEsR0FBUUcsTUFBQSxJQUFVLEtBQUs2RyxHQUFBLElBQ2pGcVksVUFBQSxDQUFXN00sV0FBQSxDQUFZelMsSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFTLEdBQUc7TUFDcER3TSxLQUFBLEdBQVEsS0FBS2xZLEdBQUEsQ0FBSWtMLFFBQUEsQ0FBU2lNLE9BQUEsQ0FBUWtCLFVBQUEsRUFBWSxLQUFLcmYsS0FBSztJQUM1RCxPQUNLO01BQ0QsU0FBU3FLLENBQUEsR0FBSSxLQUFLckssS0FBQSxFQUFPdWYsQ0FBQSxHQUFJaGIsSUFBQSxDQUFLQyxHQUFBLENBQUksS0FBS3dDLEdBQUEsQ0FBSWtMLFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsR0FBSSxDQUFDLEdBQUdBLENBQUEsR0FBSWtWLENBQUEsRUFBR2xWLENBQUEsSUFBSztRQUNoRixJQUFJckksS0FBQSxHQUFRLEtBQUtnRixHQUFBLENBQUlrTCxRQUFBLENBQVM3SCxDQUFBO1FBQzlCLElBQUlySSxLQUFBLENBQU13USxXQUFBLENBQVl6UyxJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQVMsS0FBSyxDQUFDLEtBQUtpTSxRQUFBLENBQVNhLE9BQUEsQ0FBUUMsR0FBQSxDQUFJemQsS0FBSyxHQUFHO1VBQ3BGa2QsS0FBQSxHQUFRN1UsQ0FBQTtVQUNSO1FBQ0o7TUFDSjtJQUNKO0lBQ0EsSUFBSTZVLEtBQUEsR0FBUSxHQUNSLE9BQU87SUFDWCxLQUFLTixjQUFBLENBQWUsS0FBSzVlLEtBQUEsRUFBT2tmLEtBQUs7SUFDckMsS0FBS2xmLEtBQUE7SUFDTCxPQUFPO0VBQ1g7RUFDQW9hLGFBQWFyYSxJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVzFTLEtBQUEsRUFBT2dJLElBQUEsRUFBTTtJQUNsRCxJQUFJaEcsS0FBQSxHQUFRLEtBQUtnRixHQUFBLENBQUlrTCxRQUFBLENBQVNsUyxLQUFBO0lBQzlCLElBQUlnQyxLQUFBLENBQU1tUSxLQUFBLElBQVNKLFVBQUEsSUFBYy9QLEtBQUEsQ0FBTVUsR0FBQSxJQUFPVixLQUFBLENBQU1jLFVBQUEsRUFDaERkLEtBQUEsQ0FBTW1RLEtBQUEsR0FBUUwsYUFBQTtJQUNsQixJQUFJLENBQUM5UCxLQUFBLENBQU1zWixNQUFBLENBQU92YixJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVzFLLElBQUksR0FDOUMsT0FBTztJQUNYLEtBQUs0VyxjQUFBLENBQWUsS0FBSzVlLEtBQUEsRUFBT0EsS0FBSztJQUNyQyxLQUFLQSxLQUFBO0lBQ0wsT0FBTztFQUNYO0VBQ0FtYSxtQkFBbUJ1RixPQUFBLEVBQVM7SUFDeEIsU0FBUztNQUNMLElBQUl2ZixNQUFBLEdBQVN1ZixPQUFBLENBQVF4ZixVQUFBO01BQ3JCLElBQUksQ0FBQ0MsTUFBQSxFQUNELE9BQU87TUFDWCxJQUFJQSxNQUFBLElBQVUsS0FBSzZHLEdBQUEsQ0FBSWxFLFVBQUEsRUFBWTtRQUMvQixJQUFJSCxJQUFBLEdBQU8rYyxPQUFBLENBQVF4ZCxVQUFBO1FBQ25CLElBQUlTLElBQUEsRUFDQSxTQUFTMEgsQ0FBQSxHQUFJLEtBQUtySyxLQUFBLEVBQU9xSyxDQUFBLEdBQUksS0FBS3JELEdBQUEsQ0FBSWtMLFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsSUFBSztVQUN4RCxJQUFJLEtBQUtyRCxHQUFBLENBQUlrTCxRQUFBLENBQVM3SCxDQUFBLEtBQU0xSCxJQUFBLEVBQ3hCLE9BQU8wSCxDQUFBO1FBQ2Y7UUFDSixPQUFPO01BQ1g7TUFDQXFWLE9BQUEsR0FBVXZmLE1BQUE7SUFDZDtFQUNKO0VBR0FrYSxlQUFldGEsSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVcxSyxJQUFBLEVBQU1oSSxLQUFBLEVBQU9xRSxHQUFBLEVBQUs7SUFDekQsU0FBU2dHLENBQUEsR0FBSSxLQUFLckssS0FBQSxFQUFPcUssQ0FBQSxHQUFJLEtBQUtyRCxHQUFBLENBQUlrTCxRQUFBLENBQVNsUixNQUFBLEVBQVFxSixDQUFBLElBQUs7TUFDeEQsSUFBSWdELElBQUEsR0FBTyxLQUFLckcsR0FBQSxDQUFJa0wsUUFBQSxDQUFTN0gsQ0FBQTtNQUM3QixJQUFJZ0QsSUFBQSxZQUFnQjRLLFlBQUEsRUFBYztRQUM5QixJQUFJMEgsU0FBQSxHQUFXLEtBQUtoQixRQUFBLENBQVNhLE9BQUEsQ0FBUUksR0FBQSxDQUFJdlMsSUFBSTtRQUM3QyxJQUFJc1MsU0FBQSxJQUFZLFFBQVFBLFNBQUEsSUFBWTNmLEtBQUEsRUFDaEMsT0FBTztRQUNYLElBQUk2ZixPQUFBLEdBQVV4UyxJQUFBLENBQUszSyxHQUFBO1VBQUtvZCxPQUFBO1FBSXhCLElBQUlDLE1BQUEsR0FBUyxLQUFLWixRQUFBLENBQVNVLE9BQU8sS0FDOUIsRUFBRTlmLElBQUEsQ0FBSzJNLE1BQUEsSUFBVVcsSUFBQSxDQUFLdE4sSUFBQSxJQUFRc04sSUFBQSxDQUFLdE4sSUFBQSxDQUFLMk0sTUFBQSxJQUFVVyxJQUFBLENBQUttRyxPQUFBLENBQVF6UyxTQUFBLElBQWFoQixJQUFBLENBQUtnVyxJQUFBLElBQzdFMUksSUFBQSxDQUFLOEUsS0FBQSxJQUFTSixVQUFBLElBQWNnSCxhQUFBLENBQWN0RyxTQUFBLEVBQVdwRixJQUFBLENBQUtvRixTQUFTO1FBQzNFLElBQUksQ0FBQ3NOLE1BQUEsSUFBVTFTLElBQUEsQ0FBS2lPLE1BQUEsQ0FBT3ZiLElBQUEsRUFBTTBTLFNBQUEsRUFBV0MsU0FBQSxFQUFXMUssSUFBSSxHQUFHO1VBQzFELEtBQUs0VyxjQUFBLENBQWUsS0FBSzVlLEtBQUEsRUFBT3FLLENBQUM7VUFDakMsSUFBSWdELElBQUEsQ0FBSzNLLEdBQUEsSUFBT21kLE9BQUEsRUFDWixLQUFLcEYsT0FBQSxHQUFVO1VBQ25CLEtBQUt6YSxLQUFBO1VBQ0wsT0FBTztRQUNYLFdBQ1MsQ0FBQytmLE1BQUEsS0FBV0QsT0FBQSxHQUFVLEtBQUtFLGVBQUEsQ0FBZ0IzUyxJQUFBLEVBQU10TixJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVzFLLElBQUEsRUFBTTNELEdBQUcsSUFBSTtVQUMvRixLQUFLdWEsY0FBQSxDQUFlLEtBQUs1ZSxLQUFBLEVBQU9xSyxDQUFDO1VBQ2pDLEtBQUtyRCxHQUFBLENBQUlrTCxRQUFBLENBQVMsS0FBS2xTLEtBQUEsSUFBUzhmLE9BQUE7VUFDaEMsSUFBSUEsT0FBQSxDQUFRaGQsVUFBQSxFQUFZO1lBQ3BCZ2QsT0FBQSxDQUFRM04sS0FBQSxHQUFRTCxhQUFBO1lBQ2hCZ08sT0FBQSxDQUFRN0csY0FBQSxDQUFlalIsSUFBQSxFQUFNM0QsR0FBQSxHQUFNLENBQUM7WUFDcEN5YixPQUFBLENBQVEzTixLQUFBLEdBQVFQLFNBQUE7VUFDcEI7VUFDQSxLQUFLNkksT0FBQSxHQUFVO1VBQ2YsS0FBS3phLEtBQUE7VUFDTCxPQUFPO1FBQ1g7UUFDQTtNQUNKO0lBQ0o7SUFDQSxPQUFPO0VBQ1g7RUFHQWdnQixnQkFBZ0IzUyxJQUFBLEVBQU10TixJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVzFLLElBQUEsRUFBTTNELEdBQUEsRUFBSztJQUN6RCxJQUFJZ0osSUFBQSxDQUFLOEUsS0FBQSxJQUFTcFMsSUFBQSxDQUFLbWMsTUFBQSxJQUFVLENBQUM3TyxJQUFBLENBQUs2RSxRQUFBLENBQVNsUixNQUFBLElBQzVDLENBQUNxTSxJQUFBLENBQUt0TixJQUFBLENBQUswTixPQUFBLENBQVFnSixFQUFBLENBQUcxVyxJQUFBLENBQUswTixPQUFPLEtBQ2xDLENBQUNzTCxhQUFBLENBQWN0RyxTQUFBLEVBQVdwRixJQUFBLENBQUtvRixTQUFTLEtBQUssQ0FBQ0MsU0FBQSxDQUFVK0QsRUFBQSxDQUFHcEosSUFBQSxDQUFLcUYsU0FBUyxHQUN6RSxPQUFPO0lBQ1gsSUFBSXVOLE9BQUEsR0FBVWhJLFlBQUEsQ0FBYWQsTUFBQSxDQUFPLEtBQUtuUSxHQUFBLEVBQUtqSCxJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVzFLLElBQUEsRUFBTTNELEdBQUc7SUFDakYsSUFBSTRiLE9BQUEsQ0FBUW5kLFVBQUEsRUFBWTtNQUNwQm1kLE9BQUEsQ0FBUS9OLFFBQUEsR0FBVzdFLElBQUEsQ0FBSzZFLFFBQUE7TUFDeEI3RSxJQUFBLENBQUs2RSxRQUFBLEdBQVcsRUFBQztNQUNqQixTQUFTZ08sRUFBQSxJQUFNRCxPQUFBLENBQVEvTixRQUFBLEVBQ25CZ08sRUFBQSxDQUFHL2YsTUFBQSxHQUFTOGYsT0FBQTtJQUNwQjtJQUNBNVMsSUFBQSxDQUFLeUYsT0FBQSxDQUFRO0lBQ2IsT0FBT21OLE9BQUE7RUFDWDtFQUVBM0YsUUFBUXZhLElBQUEsRUFBTTBTLFNBQUEsRUFBV0MsU0FBQSxFQUFXMUssSUFBQSxFQUFNM0QsR0FBQSxFQUFLO0lBQzNDLElBQUkxQixJQUFBLEdBQU9zVixZQUFBLENBQWFkLE1BQUEsQ0FBTyxLQUFLblEsR0FBQSxFQUFLakgsSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVcxSyxJQUFBLEVBQU0zRCxHQUFHO0lBQzlFLElBQUkxQixJQUFBLENBQUtHLFVBQUEsRUFDTEgsSUFBQSxDQUFLc1csY0FBQSxDQUFlalIsSUFBQSxFQUFNM0QsR0FBQSxHQUFNLENBQUM7SUFDckMsS0FBSzJDLEdBQUEsQ0FBSWtMLFFBQUEsQ0FBUzJNLE1BQUEsQ0FBTyxLQUFLN2UsS0FBQSxJQUFTLEdBQUcyQyxJQUFJO0lBQzlDLEtBQUs4WCxPQUFBLEdBQVU7RUFDbkI7RUFDQVQsWUFBWTNILE1BQUEsRUFBUXJLLElBQUEsRUFBTTNELEdBQUEsRUFBSztJQUMzQixJQUFJZ0osSUFBQSxHQUFPLEtBQUtyTixLQUFBLEdBQVEsS0FBS2dILEdBQUEsQ0FBSWtMLFFBQUEsQ0FBU2xSLE1BQUEsR0FBUyxLQUFLZ0csR0FBQSxDQUFJa0wsUUFBQSxDQUFTLEtBQUtsUyxLQUFBLElBQVM7SUFDbkYsSUFBSXFOLElBQUEsSUFBUUEsSUFBQSxDQUFLK0UsYUFBQSxDQUFjQyxNQUFNLE1BQ2hDQSxNQUFBLElBQVVoRixJQUFBLENBQUtnRixNQUFBLElBQVUsQ0FBQ2hGLElBQUEsQ0FBS2dGLE1BQUEsQ0FBT21ELElBQUEsQ0FBS1MsS0FBQSxDQUFNL1YsVUFBQSxHQUFhO01BQy9ELEtBQUtGLEtBQUE7SUFDVCxPQUNLO01BQ0QsSUFBSTJDLElBQUEsR0FBTyxJQUFJb1IsY0FBQSxDQUFlLEtBQUsvTSxHQUFBLEVBQUtxTCxNQUFBLEVBQVFySyxJQUFBLEVBQU0zRCxHQUFHO01BQ3pELEtBQUsyQyxHQUFBLENBQUlrTCxRQUFBLENBQVMyTSxNQUFBLENBQU8sS0FBSzdlLEtBQUEsSUFBUyxHQUFHMkMsSUFBSTtNQUM5QyxLQUFLOFgsT0FBQSxHQUFVO0lBQ25CO0VBQ0o7RUFHQUYsa0JBQUEsRUFBb0I7SUFDaEIsSUFBSWhOLFNBQUEsR0FBWSxLQUFLdkcsR0FBQSxDQUFJa0wsUUFBQSxDQUFTLEtBQUtsUyxLQUFBLEdBQVE7TUFBSUcsTUFBQSxHQUFTLEtBQUs2RyxHQUFBO0lBQ2pFLE9BQU91RyxTQUFBLFlBQXFCMkosWUFBQSxFQUFjO01BQ3RDL1csTUFBQSxHQUFTb04sU0FBQTtNQUNUQSxTQUFBLEdBQVlwTixNQUFBLENBQU8rUixRQUFBLENBQVMvUixNQUFBLENBQU8rUixRQUFBLENBQVNsUixNQUFBLEdBQVM7SUFDekQ7SUFDQSxJQUFJLENBQUN1TSxTQUFBLElBQ0QsRUFBRUEsU0FBQSxZQUFxQmlMLFlBQUEsS0FDdkIsTUFBTTNXLElBQUEsQ0FBSzBMLFNBQUEsQ0FBVXhOLElBQUEsQ0FBS2dXLElBQUksS0FDN0IsS0FBSy9OLElBQUEsQ0FBS21ZLHFCQUFBLElBQXlCLE1BQU10ZSxJQUFBLENBQUswTCxTQUFBLENBQVV4TixJQUFBLENBQUtnVyxJQUFJLEdBQUk7TUFFdEUsS0FBS2xRLE1BQUEsSUFBVUYsTUFBQSxLQUFXNEgsU0FBQSxJQUFhQSxTQUFBLENBQVU3SyxHQUFBLENBQUlYLGVBQUEsSUFBbUIsU0FDcEUsS0FBS3FlLFdBQUEsQ0FBWSxPQUFPamdCLE1BQU07TUFDbEMsS0FBS2lnQixXQUFBLENBQVksTUFBTSxLQUFLcFosR0FBRztJQUNuQztFQUNKO0VBQ0FvWixZQUFZdGUsUUFBQSxFQUFVM0IsTUFBQSxFQUFRO0lBQzFCLElBQUlBLE1BQUEsSUFBVSxLQUFLNkcsR0FBQSxJQUFPLEtBQUtoSCxLQUFBLEdBQVFHLE1BQUEsQ0FBTytSLFFBQUEsQ0FBU2xSLE1BQUEsSUFBVWIsTUFBQSxDQUFPK1IsUUFBQSxDQUFTLEtBQUtsUyxLQUFBLEVBQU8yUyxXQUFBLENBQVk3USxRQUFRLEdBQUc7TUFDaEgsS0FBSzlCLEtBQUE7SUFDVCxPQUNLO01BQ0QsSUFBSTBDLEdBQUEsR0FBTTlCLFFBQUEsQ0FBU3lWLGFBQUEsQ0FBY3ZVLFFBQVE7TUFDekMsSUFBSUEsUUFBQSxJQUFZLE9BQU87UUFDbkJZLEdBQUEsQ0FBSTJkLFNBQUEsR0FBWTtRQUNoQjNkLEdBQUEsQ0FBSTRkLEdBQUEsR0FBTTtNQUNkO01BQ0EsSUFBSXhlLFFBQUEsSUFBWSxNQUNaWSxHQUFBLENBQUkyZCxTQUFBLEdBQVk7TUFDcEIsSUFBSUUsSUFBQSxHQUFPLElBQUl6TSxvQkFBQSxDQUFxQixLQUFLOU0sR0FBQSxFQUFLLEVBQUMsRUFBR3RFLEdBQUEsRUFBSyxJQUFJO01BQzNELElBQUl2QyxNQUFBLElBQVUsS0FBSzZHLEdBQUEsRUFDZjdHLE1BQUEsQ0FBTytSLFFBQUEsQ0FBU2xJLElBQUEsQ0FBS3VXLElBQUksT0FFekJwZ0IsTUFBQSxDQUFPK1IsUUFBQSxDQUFTMk0sTUFBQSxDQUFPLEtBQUs3ZSxLQUFBLElBQVMsR0FBR3VnQixJQUFJO01BQ2hELEtBQUs5RixPQUFBLEdBQVU7SUFDbkI7RUFDSjtFQUNBMEUsU0FBU3BmLElBQUEsRUFBTTtJQUNYLE9BQU8sS0FBSzJlLElBQUEsS0FBUzNlLElBQUEsSUFBUSxLQUFLMmUsSUFBQSxJQUFRM2UsSUFBQSxDQUFLTSxRQUFBLElBQVksS0FBS04sSUFBQSxDQUFLNkosUUFBQSxDQUFTLEtBQUs4VSxJQUFBLENBQUt4ZSxVQUFVO0VBQ3RHO0FBQ0o7QUFNQSxTQUFTeWUsU0FBUzZCLElBQUEsRUFBTUMsVUFBQSxFQUFZO0VBQ2hDLElBQUlDLE9BQUEsR0FBVUQsVUFBQTtJQUFZRSxLQUFBLEdBQVFELE9BQUEsQ0FBUXhPLFFBQUEsQ0FBU2xSLE1BQUE7RUFDbkQsSUFBSTRmLEVBQUEsR0FBS0osSUFBQSxDQUFLM0csVUFBQTtJQUFZMkYsT0FBQSxHQUFVLG1CQUFJcUIsR0FBQTtJQUFLdkIsT0FBQSxHQUFVLEVBQUM7RUFDeER3QixLQUFBLEVBQU8sT0FBT0YsRUFBQSxHQUFLLEdBQUc7SUFDbEIsSUFBSWplLElBQUE7SUFDSixTQUFTO01BQ0wsSUFBSWdlLEtBQUEsRUFBTztRQUNQLElBQUl0VCxJQUFBLEdBQU9xVCxPQUFBLENBQVF4TyxRQUFBLENBQVN5TyxLQUFBLEdBQVE7UUFDcEMsSUFBSXRULElBQUEsWUFBZ0I2SixZQUFBLEVBQWM7VUFDOUJ3SixPQUFBLEdBQVVyVCxJQUFBO1VBQ1ZzVCxLQUFBLEdBQVF0VCxJQUFBLENBQUs2RSxRQUFBLENBQVNsUixNQUFBO1FBQzFCLE9BQ0s7VUFDRDJCLElBQUEsR0FBTzBLLElBQUE7VUFDUHNULEtBQUE7VUFDQTtRQUNKO01BQ0osV0FDU0QsT0FBQSxJQUFXRCxVQUFBLEVBQVk7UUFDNUIsTUFBTUssS0FBQTtNQUNWLE9BQ0s7UUFFREgsS0FBQSxHQUFRRCxPQUFBLENBQVF2Z0IsTUFBQSxDQUFPK1IsUUFBQSxDQUFTaU0sT0FBQSxDQUFRdUMsT0FBTztRQUMvQ0EsT0FBQSxHQUFVQSxPQUFBLENBQVF2Z0IsTUFBQTtNQUN0QjtJQUNKO0lBQ0EsSUFBSUosSUFBQSxHQUFPNEMsSUFBQSxDQUFLNUMsSUFBQTtJQUNoQixJQUFJLENBQUNBLElBQUEsRUFDRDtJQUNKLElBQUlBLElBQUEsSUFBUXlnQixJQUFBLENBQUt4ZSxLQUFBLENBQU00ZSxFQUFBLEdBQUssQ0FBQyxHQUN6QjtJQUNKLEVBQUVBLEVBQUE7SUFDRnBCLE9BQUEsQ0FBUXVCLEdBQUEsQ0FBSXBlLElBQUEsRUFBTWllLEVBQUU7SUFDcEJ0QixPQUFBLENBQVF0VixJQUFBLENBQUtySCxJQUFJO0VBQ3JCO0VBQ0EsT0FBTztJQUFFM0MsS0FBQSxFQUFPNGdCLEVBQUE7SUFBSXBCLE9BQUE7SUFBU0YsT0FBQSxFQUFTQSxPQUFBLENBQVEwQixPQUFBLENBQVE7RUFBRTtBQUM1RDtBQUNBLFNBQVNDLFlBQVl6QyxDQUFBLEVBQUdDLENBQUEsRUFBRztFQUN2QixPQUFPRCxDQUFBLENBQUVoSixJQUFBLENBQUtqTyxJQUFBLEdBQU9rWCxDQUFBLENBQUVqSixJQUFBLENBQUtqTyxJQUFBO0FBQ2hDO0FBS0EsU0FBU2tTLFNBQVN0WixNQUFBLEVBQVF1ZCxJQUFBLEVBQU13RCxRQUFBLEVBQVVDLE1BQUEsRUFBUTtFQUM5QyxJQUFJQyxNQUFBLEdBQVMxRCxJQUFBLENBQUswRCxNQUFBLENBQU9qaEIsTUFBTTtJQUFHa0MsTUFBQSxHQUFTO0VBRTNDLElBQUkrZSxNQUFBLENBQU9wZ0IsTUFBQSxJQUFVLEdBQUc7SUFDcEIsU0FBU3FKLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlsSyxNQUFBLENBQU8wWixVQUFBLEVBQVl4UCxDQUFBLElBQUs7TUFDeEMsSUFBSXJJLEtBQUEsR0FBUTdCLE1BQUEsQ0FBTzZCLEtBQUEsQ0FBTXFJLENBQUM7TUFDMUI4VyxNQUFBLENBQU9uZixLQUFBLEVBQU9vZixNQUFBLEVBQVExRCxJQUFBLENBQUsyRCxRQUFBLENBQVNoZixNQUFBLEVBQVFMLEtBQUssR0FBR3FJLENBQUM7TUFDckRoSSxNQUFBLElBQVVMLEtBQUEsQ0FBTUwsUUFBQTtJQUNwQjtJQUNBO0VBQ0o7RUFDQSxJQUFJMmYsU0FBQSxHQUFZO0lBQUcvUixNQUFBLEdBQVMsRUFBQztJQUFHZ1MsUUFBQSxHQUFXO0VBQzNDLFNBQVNDLFdBQUEsR0FBYyxLQUFLO0lBQ3hCLElBQUluUCxNQUFBLEVBQVFvUCxPQUFBO0lBQ1osT0FBT0gsU0FBQSxHQUFZRixNQUFBLENBQU9wZ0IsTUFBQSxJQUFVb2dCLE1BQUEsQ0FBT0UsU0FBQSxFQUFXNWdCLEVBQUEsSUFBTTJCLE1BQUEsRUFBUTtNQUNoRSxJQUFJZ0wsSUFBQSxHQUFPK1QsTUFBQSxDQUFPRSxTQUFBO01BQ2xCLElBQUlqVSxJQUFBLENBQUtnRixNQUFBLEVBQVE7UUFDYixJQUFJLENBQUNBLE1BQUEsRUFDREEsTUFBQSxHQUFTaEYsSUFBQSxNQUVULENBQUNvVSxPQUFBLEtBQVlBLE9BQUEsR0FBVSxDQUFDcFAsTUFBTSxJQUFJckksSUFBQSxDQUFLcUQsSUFBSTtNQUNuRDtJQUNKO0lBQ0EsSUFBSWdGLE1BQUEsRUFBUTtNQUNSLElBQUlvUCxPQUFBLEVBQVM7UUFDVEEsT0FBQSxDQUFRQyxJQUFBLENBQUtULFdBQVc7UUFDeEIsU0FBUzVXLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlvWCxPQUFBLENBQVF6Z0IsTUFBQSxFQUFRcUosQ0FBQSxJQUNoQzZXLFFBQUEsQ0FBU08sT0FBQSxDQUFRcFgsQ0FBQSxHQUFJbVgsV0FBQSxFQUFhLENBQUMsQ0FBQ0QsUUFBUTtNQUNwRCxPQUNLO1FBQ0RMLFFBQUEsQ0FBUzdPLE1BQUEsRUFBUW1QLFdBQUEsRUFBYSxDQUFDLENBQUNELFFBQVE7TUFDNUM7SUFDSjtJQUNBLElBQUl2ZixLQUFBLEVBQU9oQyxLQUFBO0lBQ1gsSUFBSXVoQixRQUFBLEVBQVU7TUFDVnZoQixLQUFBLEdBQVE7TUFDUmdDLEtBQUEsR0FBUXVmLFFBQUE7TUFDUkEsUUFBQSxHQUFXO0lBQ2YsV0FDU0MsV0FBQSxHQUFjcmhCLE1BQUEsQ0FBTzBaLFVBQUEsRUFBWTtNQUN0QzdaLEtBQUEsR0FBUXdoQixXQUFBO01BQ1J4ZixLQUFBLEdBQVE3QixNQUFBLENBQU82QixLQUFBLENBQU13ZixXQUFBLEVBQWE7SUFDdEMsT0FDSztNQUNEO0lBQ0o7SUFDQSxTQUFTblgsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWtGLE1BQUEsQ0FBT3ZPLE1BQUEsRUFBUXFKLENBQUEsSUFDL0IsSUFBSWtGLE1BQUEsQ0FBT2xGLENBQUEsRUFBRzNKLEVBQUEsSUFBTTJCLE1BQUEsRUFDaEJrTixNQUFBLENBQU9zUCxNQUFBLENBQU94VSxDQUFBLElBQUssQ0FBQztJQUM1QixPQUFPaVgsU0FBQSxHQUFZRixNQUFBLENBQU9wZ0IsTUFBQSxJQUFVb2dCLE1BQUEsQ0FBT0UsU0FBQSxFQUFXN2dCLElBQUEsSUFBUTRCLE1BQUEsSUFBVStlLE1BQUEsQ0FBT0UsU0FBQSxFQUFXNWdCLEVBQUEsR0FBSzJCLE1BQUEsRUFDM0ZrTixNQUFBLENBQU92RixJQUFBLENBQUtvWCxNQUFBLENBQU9FLFNBQUEsR0FBWTtJQUNuQyxJQUFJOVEsR0FBQSxHQUFNbk8sTUFBQSxHQUFTTCxLQUFBLENBQU1MLFFBQUE7SUFDekIsSUFBSUssS0FBQSxDQUFNMEssTUFBQSxFQUFRO01BQ2QsSUFBSWlWLEtBQUEsR0FBUW5SLEdBQUE7TUFDWixJQUFJOFEsU0FBQSxHQUFZRixNQUFBLENBQU9wZ0IsTUFBQSxJQUFVb2dCLE1BQUEsQ0FBT0UsU0FBQSxFQUFXN2dCLElBQUEsR0FBT2toQixLQUFBLEVBQ3REQSxLQUFBLEdBQVFQLE1BQUEsQ0FBT0UsU0FBQSxFQUFXN2dCLElBQUE7TUFDOUIsU0FBUzRKLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlrRixNQUFBLENBQU92TyxNQUFBLEVBQVFxSixDQUFBLElBQy9CLElBQUlrRixNQUFBLENBQU9sRixDQUFBLEVBQUczSixFQUFBLEdBQUtpaEIsS0FBQSxFQUNmQSxLQUFBLEdBQVFwUyxNQUFBLENBQU9sRixDQUFBLEVBQUczSixFQUFBO01BQzFCLElBQUlpaEIsS0FBQSxHQUFRblIsR0FBQSxFQUFLO1FBQ2IrUSxRQUFBLEdBQVd2ZixLQUFBLENBQU15YSxHQUFBLENBQUlrRixLQUFBLEdBQVF0ZixNQUFNO1FBQ25DTCxLQUFBLEdBQVFBLEtBQUEsQ0FBTXlhLEdBQUEsQ0FBSSxHQUFHa0YsS0FBQSxHQUFRdGYsTUFBTTtRQUNuQ21PLEdBQUEsR0FBTW1SLEtBQUE7UUFDTjNoQixLQUFBLEdBQVE7TUFDWjtJQUNKLE9BQ0s7TUFDRCxPQUFPc2hCLFNBQUEsR0FBWUYsTUFBQSxDQUFPcGdCLE1BQUEsSUFBVW9nQixNQUFBLENBQU9FLFNBQUEsRUFBVzVnQixFQUFBLEdBQUs4UCxHQUFBLEVBQ3ZEOFEsU0FBQTtJQUNSO0lBQ0EsSUFBSTdPLFNBQUEsR0FBWXpRLEtBQUEsQ0FBTW9iLFFBQUEsSUFBWSxDQUFDcGIsS0FBQSxDQUFNZ1gsTUFBQSxHQUFTekosTUFBQSxDQUFPeU8sTUFBQSxDQUFPNEQsQ0FBQSxJQUFLLENBQUNBLENBQUEsQ0FBRXhLLE1BQU0sSUFBSTdILE1BQUEsQ0FBT3NJLEtBQUEsQ0FBTTtJQUMvRnNKLE1BQUEsQ0FBT25mLEtBQUEsRUFBT3lRLFNBQUEsRUFBV2lMLElBQUEsQ0FBSzJELFFBQUEsQ0FBU2hmLE1BQUEsRUFBUUwsS0FBSyxHQUFHaEMsS0FBSztJQUM1RHFDLE1BQUEsR0FBU21PLEdBQUE7RUFDYjtBQUNKO0FBR0EsU0FBU29LLFNBQVNsWSxHQUFBLEVBQUs7RUFDbkIsSUFBSUEsR0FBQSxDQUFJWixRQUFBLElBQVksUUFBUVksR0FBQSxDQUFJWixRQUFBLElBQVksTUFBTTtJQUM5QyxJQUFJK2YsTUFBQSxHQUFTbmYsR0FBQSxDQUFJNkQsS0FBQSxDQUFNZ1ksT0FBQTtJQUN2QjdiLEdBQUEsQ0FBSTZELEtBQUEsQ0FBTWdZLE9BQUEsR0FBVXNELE1BQUEsR0FBUztJQUM3QkMsTUFBQSxDQUFPNVksZ0JBQUEsQ0FBaUJ4RyxHQUFHLEVBQUVxZixTQUFBO0lBQzdCcmYsR0FBQSxDQUFJNkQsS0FBQSxDQUFNZ1ksT0FBQSxHQUFVc0QsTUFBQTtFQUN4QjtBQUNKO0FBRUEsU0FBUzNHLG1CQUFtQnNGLElBQUEsRUFBTXpLLElBQUEsRUFBTXRWLElBQUEsRUFBTUMsRUFBQSxFQUFJO0VBQzlDLFNBQVMySixDQUFBLEdBQUksR0FBR2hHLEdBQUEsR0FBTSxHQUFHZ0csQ0FBQSxHQUFJbVcsSUFBQSxDQUFLM0csVUFBQSxJQUFjeFYsR0FBQSxJQUFPM0QsRUFBQSxHQUFLO0lBQ3hELElBQUlzQixLQUFBLEdBQVF3ZSxJQUFBLENBQUt4ZSxLQUFBLENBQU1xSSxDQUFBLEVBQUc7TUFBRzJYLFVBQUEsR0FBYTNkLEdBQUE7SUFDMUNBLEdBQUEsSUFBT3JDLEtBQUEsQ0FBTUwsUUFBQTtJQUNiLElBQUksQ0FBQ0ssS0FBQSxDQUFNMEssTUFBQSxFQUNQO0lBQ0osSUFBSXVWLEdBQUEsR0FBTWpnQixLQUFBLENBQU0rVCxJQUFBO0lBQ2hCLE9BQU8xTCxDQUFBLEdBQUltVyxJQUFBLENBQUszRyxVQUFBLEVBQVk7TUFDeEIsSUFBSXhNLElBQUEsR0FBT21ULElBQUEsQ0FBS3hlLEtBQUEsQ0FBTXFJLENBQUEsRUFBRztNQUN6QmhHLEdBQUEsSUFBT2dKLElBQUEsQ0FBSzFMLFFBQUE7TUFDWixJQUFJLENBQUMwTCxJQUFBLENBQUtYLE1BQUEsRUFDTjtNQUNKdVYsR0FBQSxJQUFPNVUsSUFBQSxDQUFLMEksSUFBQTtJQUNoQjtJQUNBLElBQUkxUixHQUFBLElBQU81RCxJQUFBLEVBQU07TUFDYixJQUFJNEQsR0FBQSxJQUFPM0QsRUFBQSxJQUFNdWhCLEdBQUEsQ0FBSXBLLEtBQUEsQ0FBTW5YLEVBQUEsR0FBS3FWLElBQUEsQ0FBSy9VLE1BQUEsR0FBU2doQixVQUFBLEVBQVl0aEIsRUFBQSxHQUFLc2hCLFVBQVUsS0FBS2pNLElBQUEsRUFDMUUsT0FBT3JWLEVBQUEsR0FBS3FWLElBQUEsQ0FBSy9VLE1BQUE7TUFDckIsSUFBSWtlLEtBQUEsR0FBUThDLFVBQUEsR0FBYXRoQixFQUFBLEdBQUt1aEIsR0FBQSxDQUFJQyxXQUFBLENBQVluTSxJQUFBLEVBQU1yVixFQUFBLEdBQUtzaEIsVUFBQSxHQUFhLENBQUMsSUFBSTtNQUMzRSxJQUFJOUMsS0FBQSxJQUFTLEtBQUtBLEtBQUEsR0FBUW5KLElBQUEsQ0FBSy9VLE1BQUEsR0FBU2doQixVQUFBLElBQWN2aEIsSUFBQSxFQUNsRCxPQUFPdWhCLFVBQUEsR0FBYTlDLEtBQUE7TUFDeEIsSUFBSXplLElBQUEsSUFBUUMsRUFBQSxJQUFNdWhCLEdBQUEsQ0FBSWpoQixNQUFBLElBQVdOLEVBQUEsR0FBS3FWLElBQUEsQ0FBSy9VLE1BQUEsR0FBVWdoQixVQUFBLElBQ2pEQyxHQUFBLENBQUlwSyxLQUFBLENBQU1uWCxFQUFBLEdBQUtzaEIsVUFBQSxFQUFZdGhCLEVBQUEsR0FBS3NoQixVQUFBLEdBQWFqTSxJQUFBLENBQUsvVSxNQUFNLEtBQUsrVSxJQUFBLEVBQzdELE9BQU9yVixFQUFBO0lBQ2Y7RUFDSjtFQUNBLE9BQU87QUFDWDtBQU1BLFNBQVNzWCxhQUFhRCxLQUFBLEVBQU90WCxJQUFBLEVBQU1DLEVBQUEsRUFBSXNILElBQUEsRUFBTW1hLFdBQUEsRUFBYTtFQUN0RCxJQUFJOVEsTUFBQSxHQUFTLEVBQUM7RUFDZCxTQUFTaEgsQ0FBQSxHQUFJLEdBQUdqSixHQUFBLEdBQU0sR0FBR2lKLENBQUEsR0FBSTBOLEtBQUEsQ0FBTS9XLE1BQUEsRUFBUXFKLENBQUEsSUFBSztJQUM1QyxJQUFJckksS0FBQSxHQUFRK1YsS0FBQSxDQUFNMU4sQ0FBQTtNQUFJa0csS0FBQSxHQUFRblAsR0FBQTtNQUFLb1AsR0FBQSxHQUFNcFAsR0FBQSxJQUFPWSxLQUFBLENBQU0wTCxJQUFBO0lBQ3RELElBQUk2QyxLQUFBLElBQVM3UCxFQUFBLElBQU04UCxHQUFBLElBQU8vUCxJQUFBLEVBQU07TUFDNUI0USxNQUFBLENBQU9ySCxJQUFBLENBQUtoSSxLQUFLO0lBQ3JCLE9BQ0s7TUFDRCxJQUFJdU8sS0FBQSxHQUFROVAsSUFBQSxFQUNSNFEsTUFBQSxDQUFPckgsSUFBQSxDQUFLaEksS0FBQSxDQUFNNlYsS0FBQSxDQUFNLEdBQUdwWCxJQUFBLEdBQU84UCxLQUFBLEVBQU92SSxJQUFJLENBQUM7TUFDbEQsSUFBSW1hLFdBQUEsRUFBYTtRQUNiOVEsTUFBQSxDQUFPckgsSUFBQSxDQUFLbVksV0FBVztRQUN2QkEsV0FBQSxHQUFjO01BQ2xCO01BQ0EsSUFBSTNSLEdBQUEsR0FBTTlQLEVBQUEsRUFDTjJRLE1BQUEsQ0FBT3JILElBQUEsQ0FBS2hJLEtBQUEsQ0FBTTZWLEtBQUEsQ0FBTW5YLEVBQUEsR0FBSzZQLEtBQUEsRUFBT3ZPLEtBQUEsQ0FBTTBMLElBQUEsRUFBTTFGLElBQUksQ0FBQztJQUM3RDtFQUNKO0VBQ0EsT0FBT3FKLE1BQUE7QUFDWDtBQUVBLFNBQVMrUSxpQkFBaUJwYSxJQUFBLEVBQU1xYSxNQUFBLEdBQVMsTUFBTTtFQUMzQyxJQUFJcmYsTUFBQSxHQUFTZ0YsSUFBQSxDQUFLNkksaUJBQUEsQ0FBa0I7SUFBR2hOLElBQUEsR0FBTW1FLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUE7RUFDeEQsSUFBSSxDQUFDL0IsTUFBQSxDQUFPQyxTQUFBLEVBQ1IsT0FBTztFQUNYLElBQUlzSixXQUFBLEdBQWN2RSxJQUFBLENBQUtrRSxPQUFBLENBQVFLLFdBQUEsQ0FBWXZKLE1BQUEsQ0FBT0MsU0FBUztJQUFHcWYsUUFBQSxHQUFXL1YsV0FBQSxJQUFlQSxXQUFBLENBQVltQixJQUFBLElBQVE7RUFDNUcsSUFBSWlILElBQUEsR0FBTzNNLElBQUEsQ0FBS2tFLE9BQUEsQ0FBUUMsVUFBQSxDQUFXbkosTUFBQSxDQUFPQyxTQUFBLEVBQVdELE1BQUEsQ0FBT0UsV0FBQSxFQUFhLENBQUM7RUFDMUUsSUFBSXlSLElBQUEsR0FBTyxHQUNQLE9BQU87RUFDWCxJQUFJeEUsS0FBQSxHQUFRdE0sSUFBQSxDQUFJa0wsT0FBQSxDQUFRNEYsSUFBSTtJQUFHRCxNQUFBO0lBQVEvRSxTQUFBO0VBQ3ZDLElBQUk1TSxrQkFBQSxDQUFtQkMsTUFBTSxHQUFHO0lBQzVCMFIsTUFBQSxHQUFTQyxJQUFBO0lBQ1QsT0FBT3BJLFdBQUEsSUFBZSxDQUFDQSxXQUFBLENBQVl4TSxJQUFBLEVBQy9Cd00sV0FBQSxHQUFjQSxXQUFBLENBQVlwTSxNQUFBO0lBQzlCLElBQUlvaUIsZUFBQSxHQUFrQmhXLFdBQUEsQ0FBWXhNLElBQUE7SUFDbEMsSUFBSXdNLFdBQUEsSUFBZWdXLGVBQUEsQ0FBZ0JyRyxNQUFBLElBQVV4Yyx3QkFBQSxDQUFBOGlCLGFBQUEsQ0FBY0MsWUFBQSxDQUFhRixlQUFlLEtBQUtoVyxXQUFBLENBQVlwTSxNQUFBLElBQ2pHLEVBQUVvaUIsZUFBQSxDQUFnQm5GLFFBQUEsSUFBWTdhLFFBQUEsQ0FBU1MsTUFBQSxDQUFPQyxTQUFBLEVBQVdELE1BQUEsQ0FBT0UsV0FBQSxFQUFhcUosV0FBQSxDQUFZN0osR0FBRyxJQUFJO01BQ25HLElBQUkyQixHQUFBLEdBQU1rSSxXQUFBLENBQVlDLFNBQUE7TUFDdEJtRCxTQUFBLEdBQVksSUFBSWpRLHdCQUFBLENBQUE4aUIsYUFBQSxDQUFjN04sSUFBQSxJQUFRdFEsR0FBQSxHQUFNOEwsS0FBQSxHQUFRdE0sSUFBQSxDQUFJa0wsT0FBQSxDQUFRMUssR0FBRyxDQUFDO0lBQ3hFO0VBQ0osT0FDSztJQUNELElBQUlyQixNQUFBLFlBQWtCZ0YsSUFBQSxDQUFLdEYsR0FBQSxDQUFJMkYsYUFBQSxDQUFjMUIsV0FBQSxDQUFZK2IsU0FBQSxJQUFhMWYsTUFBQSxDQUFPMmYsVUFBQSxHQUFhLEdBQUc7TUFDekYsSUFBSW5lLEdBQUEsR0FBTW1RLElBQUE7UUFBTXJMLEdBQUEsR0FBTXFMLElBQUE7TUFDdEIsU0FBU3RLLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlySCxNQUFBLENBQU8yZixVQUFBLEVBQVl0WSxDQUFBLElBQUs7UUFDeEMsSUFBSTFKLEtBQUEsR0FBUXFDLE1BQUEsQ0FBTzRmLFVBQUEsQ0FBV3ZZLENBQUM7UUFDL0I3RixHQUFBLEdBQU1ELElBQUEsQ0FBS0MsR0FBQSxDQUFJQSxHQUFBLEVBQUt3RCxJQUFBLENBQUtrRSxPQUFBLENBQVFDLFVBQUEsQ0FBV3hMLEtBQUEsQ0FBTWdFLGNBQUEsRUFBZ0JoRSxLQUFBLENBQU1pRSxXQUFBLEVBQWEsQ0FBQyxDQUFDO1FBQ3ZGMEUsR0FBQSxHQUFNL0UsSUFBQSxDQUFLK0UsR0FBQSxDQUFJQSxHQUFBLEVBQUt0QixJQUFBLENBQUtrRSxPQUFBLENBQVFDLFVBQUEsQ0FBV3hMLEtBQUEsQ0FBTWtpQixZQUFBLEVBQWNsaUIsS0FBQSxDQUFNbWlCLFNBQUEsRUFBVyxFQUFFLENBQUM7TUFDeEY7TUFDQSxJQUFJdGUsR0FBQSxHQUFNLEdBQ04sT0FBTztNQUNYLENBQUNrUSxNQUFBLEVBQVFDLElBQUksSUFBSXJMLEdBQUEsSUFBT3RCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVStFLE1BQUEsR0FBUyxDQUFDcEwsR0FBQSxFQUFLOUUsR0FBRyxJQUFJLENBQUNBLEdBQUEsRUFBSzhFLEdBQUc7TUFDNUU2RyxLQUFBLEdBQVF0TSxJQUFBLENBQUlrTCxPQUFBLENBQVE0RixJQUFJO0lBQzVCLE9BQ0s7TUFDREQsTUFBQSxHQUFTMU0sSUFBQSxDQUFLa0UsT0FBQSxDQUFRQyxVQUFBLENBQVduSixNQUFBLENBQU9HLFVBQUEsRUFBWUgsTUFBQSxDQUFPSSxZQUFBLEVBQWMsQ0FBQztJQUM5RTtJQUNBLElBQUlzUixNQUFBLEdBQVMsR0FDVCxPQUFPO0VBQ2Y7RUFDQSxJQUFJcU8sT0FBQSxHQUFVbGYsSUFBQSxDQUFJa0wsT0FBQSxDQUFRMkYsTUFBTTtFQUNoQyxJQUFJLENBQUMvRSxTQUFBLEVBQVc7SUFDWixJQUFJMUQsSUFBQSxHQUFPb1csTUFBQSxJQUFVLGFBQWNyYSxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVnRixJQUFBLEdBQU94RSxLQUFBLENBQU05TCxHQUFBLElBQU8sQ0FBQ2llLFFBQUEsR0FBWSxJQUFJO0lBQzdGM1MsU0FBQSxHQUFZcVQsZ0JBQUEsQ0FBaUJoYixJQUFBLEVBQU0rYSxPQUFBLEVBQVM1UyxLQUFBLEVBQU9sRSxJQUFJO0VBQzNEO0VBQ0EsT0FBTzBELFNBQUE7QUFDWDtBQUNBLFNBQVNzVCxvQkFBb0JqYixJQUFBLEVBQU07RUFDL0IsT0FBT0EsSUFBQSxDQUFLa2IsUUFBQSxHQUFXbGIsSUFBQSxDQUFLbWIsUUFBQSxDQUFTLElBQ2pDQyxZQUFBLENBQWFwYixJQUFJLEtBQUtwSCxRQUFBLENBQVNtRCxhQUFBLElBQWlCbkQsUUFBQSxDQUFTbUQsYUFBQSxDQUFjNkYsUUFBQSxDQUFTNUIsSUFBQSxDQUFLdEYsR0FBRztBQUNoRztBQUNBLFNBQVMyZ0IsZUFBZXJiLElBQUEsRUFBTTRNLEtBQUEsR0FBUSxPQUFPO0VBQ3pDLElBQUlsRixHQUFBLEdBQU0xSCxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBO0VBQ3JCMlQsaUJBQUEsQ0FBa0J0YixJQUFBLEVBQU0wSCxHQUFHO0VBQzNCLElBQUksQ0FBQ3VULG1CQUFBLENBQW9CamIsSUFBSSxHQUN6QjtFQUlKLElBQUksQ0FBQzRNLEtBQUEsSUFBUzVNLElBQUEsQ0FBSytTLEtBQUEsQ0FBTXdJLFNBQUEsSUFBYXZiLElBQUEsQ0FBSytTLEtBQUEsQ0FBTXdJLFNBQUEsQ0FBVUMsWUFBQSxJQUFnQjdkLE1BQUEsRUFBUTtJQUMvRSxJQUFJM0MsTUFBQSxHQUFTZ0YsSUFBQSxDQUFLNkksaUJBQUEsQ0FBa0I7TUFBRzRTLE1BQUEsR0FBU3piLElBQUEsQ0FBSzBiLFdBQUEsQ0FBWUMsZ0JBQUE7SUFDakUsSUFBSTNnQixNQUFBLENBQU9HLFVBQUEsSUFBY3NnQixNQUFBLENBQU90Z0IsVUFBQSxJQUM1QmhDLG9CQUFBLENBQXFCNkIsTUFBQSxDQUFPRyxVQUFBLEVBQVlILE1BQUEsQ0FBT0ksWUFBQSxFQUFjcWdCLE1BQUEsQ0FBT3RnQixVQUFBLEVBQVlzZ0IsTUFBQSxDQUFPcmdCLFlBQVksR0FBRztNQUN0RzRFLElBQUEsQ0FBSytTLEtBQUEsQ0FBTXdJLFNBQUEsQ0FBVUssb0JBQUEsR0FBdUI7TUFDNUM1YixJQUFBLENBQUswYixXQUFBLENBQVlHLGVBQUEsQ0FBZ0I7TUFDakM7SUFDSjtFQUNKO0VBQ0E3YixJQUFBLENBQUswYixXQUFBLENBQVlJLG1CQUFBLENBQW9CO0VBQ3JDLElBQUk5YixJQUFBLENBQUsrYixhQUFBLEVBQWU7SUFDcEJDLG1CQUFBLENBQW9CaGMsSUFBSTtFQUM1QixPQUNLO0lBQ0QsSUFBSTtRQUFFME0sTUFBQTtRQUFRQztNQUFLLElBQUlqRixHQUFBO01BQUt1VSxpQkFBQTtNQUFtQkMsZUFBQTtJQUMvQyxJQUFJQyw2QkFBQSxJQUFpQyxFQUFFelUsR0FBQSxZQUFlaFEsd0JBQUEsQ0FBQW1iLGFBQUEsR0FBZ0I7TUFDbEUsSUFBSSxDQUFDbkwsR0FBQSxDQUFJRyxLQUFBLENBQU0xUCxNQUFBLENBQU82TyxhQUFBLEVBQ2xCaVYsaUJBQUEsR0FBb0JHLHVCQUFBLENBQXdCcGMsSUFBQSxFQUFNMEgsR0FBQSxDQUFJalAsSUFBSTtNQUM5RCxJQUFJLENBQUNpUCxHQUFBLENBQUlvSixLQUFBLElBQVMsQ0FBQ3BKLEdBQUEsQ0FBSUcsS0FBQSxDQUFNMVAsTUFBQSxDQUFPNk8sYUFBQSxFQUNoQ2tWLGVBQUEsR0FBa0JFLHVCQUFBLENBQXdCcGMsSUFBQSxFQUFNMEgsR0FBQSxDQUFJaFAsRUFBRTtJQUM5RDtJQUNBc0gsSUFBQSxDQUFLa0UsT0FBQSxDQUFRdUksWUFBQSxDQUFhQyxNQUFBLEVBQVFDLElBQUEsRUFBTTNNLElBQUEsRUFBTTRNLEtBQUs7SUFDbkQsSUFBSXVQLDZCQUFBLEVBQStCO01BQy9CLElBQUlGLGlCQUFBLEVBQ0FJLGFBQUEsQ0FBY0osaUJBQWlCO01BQ25DLElBQUlDLGVBQUEsRUFDQUcsYUFBQSxDQUFjSCxlQUFlO0lBQ3JDO0lBQ0EsSUFBSXhVLEdBQUEsQ0FBSTRVLE9BQUEsRUFBUztNQUNidGMsSUFBQSxDQUFLdEYsR0FBQSxDQUFJNlQsU0FBQSxDQUFVeUYsTUFBQSxDQUFPLDJCQUEyQjtJQUN6RCxPQUNLO01BQ0RoVSxJQUFBLENBQUt0RixHQUFBLENBQUk2VCxTQUFBLENBQVVDLEdBQUEsQ0FBSSwyQkFBMkI7TUFDbEQsSUFBSSx1QkFBdUI1VixRQUFBLEVBQ3ZCMmpCLDRCQUFBLENBQTZCdmMsSUFBSTtJQUN6QztFQUNKO0VBQ0FBLElBQUEsQ0FBSzBiLFdBQUEsQ0FBWUcsZUFBQSxDQUFnQjtFQUNqQzdiLElBQUEsQ0FBSzBiLFdBQUEsQ0FBWWMsZ0JBQUEsQ0FBaUI7QUFDdEM7QUFJQSxJQUFNTCw2QkFBQSxHQUFnQ3RlLE1BQUEsSUFBVUYsTUFBQSxJQUFVQyxjQUFBLEdBQWlCO0FBQzNFLFNBQVN3ZSx3QkFBd0JwYyxJQUFBLEVBQU0zRCxHQUFBLEVBQUs7RUFDeEMsSUFBSTtJQUFFdEUsSUFBQTtJQUFNc0M7RUFBTyxJQUFJMkYsSUFBQSxDQUFLa0UsT0FBQSxDQUFRc0MsVUFBQSxDQUFXbkssR0FBQSxFQUFLLENBQUM7RUFDckQsSUFBSTZLLEtBQUEsR0FBUTdNLE1BQUEsR0FBU3RDLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV2pCLE1BQUEsR0FBU2pCLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV0ksTUFBQSxJQUFVO0VBQ3hFLElBQUlzSyxNQUFBLEdBQVN0SyxNQUFBLEdBQVN0QyxJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQUEsR0FBUyxLQUFLO0VBQ3BELElBQUl3RCxNQUFBLElBQVVxSixLQUFBLElBQVNBLEtBQUEsQ0FBTW5OLGVBQUEsSUFBbUIsU0FDNUMsT0FBTzBpQixXQUFBLENBQVl2VixLQUFLO0VBQzVCLEtBQUssQ0FBQ0EsS0FBQSxJQUFTQSxLQUFBLENBQU1uTixlQUFBLElBQW1CLGFBQ25DLENBQUM0SyxNQUFBLElBQVVBLE1BQUEsQ0FBTzVLLGVBQUEsSUFBbUIsVUFBVTtJQUNoRCxJQUFJbU4sS0FBQSxFQUNBLE9BQU91VixXQUFBLENBQVl2VixLQUFLLFdBQ25CdkMsTUFBQSxFQUNMLE9BQU84WCxXQUFBLENBQVk5WCxNQUFNO0VBQ2pDO0FBQ0o7QUFDQSxTQUFTOFgsWUFBWTdYLE9BQUEsRUFBUztFQUMxQkEsT0FBQSxDQUFRN0ssZUFBQSxHQUFrQjtFQUMxQixJQUFJOEQsTUFBQSxJQUFVK0csT0FBQSxDQUFRUSxTQUFBLEVBQVc7SUFDN0JSLE9BQUEsQ0FBUVEsU0FBQSxHQUFZO0lBQ3BCUixPQUFBLENBQVE4WCxZQUFBLEdBQWU7RUFDM0I7RUFDQSxPQUFPOVgsT0FBQTtBQUNYO0FBQ0EsU0FBU3lYLGNBQWN6WCxPQUFBLEVBQVM7RUFDNUJBLE9BQUEsQ0FBUTdLLGVBQUEsR0FBa0I7RUFDMUIsSUFBSTZLLE9BQUEsQ0FBUThYLFlBQUEsRUFBYztJQUN0QjlYLE9BQUEsQ0FBUVEsU0FBQSxHQUFZO0lBQ3BCUixPQUFBLENBQVE4WCxZQUFBLEdBQWU7RUFDM0I7QUFDSjtBQUNBLFNBQVNILDZCQUE2QnZjLElBQUEsRUFBTTtFQUN4QyxJQUFJbkUsSUFBQSxHQUFNbUUsSUFBQSxDQUFLdEYsR0FBQSxDQUFJMkYsYUFBQTtFQUNuQnhFLElBQUEsQ0FBSThnQixtQkFBQSxDQUFvQixtQkFBbUIzYyxJQUFBLENBQUsrUyxLQUFBLENBQU02SixrQkFBa0I7RUFDeEUsSUFBSTVoQixNQUFBLEdBQVNnRixJQUFBLENBQUs2SSxpQkFBQSxDQUFrQjtFQUNwQyxJQUFJOVEsSUFBQSxHQUFPaUQsTUFBQSxDQUFPRyxVQUFBO0lBQVlkLE1BQUEsR0FBU1csTUFBQSxDQUFPSSxZQUFBO0VBQzlDUyxJQUFBLENBQUlnaEIsZ0JBQUEsQ0FBaUIsbUJBQW1CN2MsSUFBQSxDQUFLK1MsS0FBQSxDQUFNNkosa0JBQUEsR0FBcUIsTUFBTTtJQUMxRSxJQUFJNWhCLE1BQUEsQ0FBT0csVUFBQSxJQUFjcEQsSUFBQSxJQUFRaUQsTUFBQSxDQUFPSSxZQUFBLElBQWdCZixNQUFBLEVBQVE7TUFDNUR3QixJQUFBLENBQUk4Z0IsbUJBQUEsQ0FBb0IsbUJBQW1CM2MsSUFBQSxDQUFLK1MsS0FBQSxDQUFNNkosa0JBQWtCO01BQ3hFRSxVQUFBLENBQVcsTUFBTTtRQUNiLElBQUksQ0FBQzdCLG1CQUFBLENBQW9CamIsSUFBSSxLQUFLQSxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVUyVSxPQUFBLEVBQ25EdGMsSUFBQSxDQUFLdEYsR0FBQSxDQUFJNlQsU0FBQSxDQUFVeUYsTUFBQSxDQUFPLDJCQUEyQjtNQUM3RCxHQUFHLEVBQUU7SUFDVDtFQUNKLENBQUM7QUFDTDtBQUNBLFNBQVNnSSxvQkFBb0JoYyxJQUFBLEVBQU07RUFDL0IsSUFBSWhGLE1BQUEsR0FBU2dGLElBQUEsQ0FBS3NJLFlBQUEsQ0FBYTtJQUFHM1AsS0FBQSxHQUFRQyxRQUFBLENBQVNDLFdBQUEsQ0FBWTtFQUMvRCxJQUFJLENBQUNtQyxNQUFBLEVBQ0Q7RUFDSixJQUFJakQsSUFBQSxHQUFPaUksSUFBQSxDQUFLK2IsYUFBQSxDQUFjcmhCLEdBQUE7SUFBS3FpQixHQUFBLEdBQU1obEIsSUFBQSxDQUFLK0IsUUFBQSxJQUFZO0VBQzFELElBQUlpakIsR0FBQSxFQUNBcGtCLEtBQUEsQ0FBTU0sUUFBQSxDQUFTbEIsSUFBQSxDQUFLRyxVQUFBLEVBQVlKLFFBQUEsQ0FBU0MsSUFBSSxJQUFJLENBQUMsT0FFbERZLEtBQUEsQ0FBTU0sUUFBQSxDQUFTbEIsSUFBQSxFQUFNLENBQUM7RUFDMUJZLEtBQUEsQ0FBTTJRLFFBQUEsQ0FBUyxJQUFJO0VBQ25CdE8sTUFBQSxDQUFPb1MsZUFBQSxDQUFnQjtFQUN2QnBTLE1BQUEsQ0FBT3FTLFFBQUEsQ0FBUzFVLEtBQUs7RUFNckIsSUFBSSxDQUFDb2tCLEdBQUEsSUFBTyxDQUFDL2MsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVMlUsT0FBQSxJQUFXaGYsRUFBQSxJQUFNQyxVQUFBLElBQWMsSUFBSTtJQUNqRXhGLElBQUEsQ0FBS2lsQixRQUFBLEdBQVc7SUFDaEJqbEIsSUFBQSxDQUFLaWxCLFFBQUEsR0FBVztFQUNwQjtBQUNKO0FBQ0EsU0FBUzFCLGtCQUFrQnRiLElBQUEsRUFBTTBILEdBQUEsRUFBSztFQUNsQyxJQUFJQSxHQUFBLFlBQWVoUSx3QkFBQSxDQUFBOGlCLGFBQUEsRUFBZTtJQUM5QixJQUFJN2YsSUFBQSxHQUFPcUYsSUFBQSxDQUFLa0UsT0FBQSxDQUFRd0gsTUFBQSxDQUFPaEUsR0FBQSxDQUFJalAsSUFBSTtJQUN2QyxJQUFJa0MsSUFBQSxJQUFRcUYsSUFBQSxDQUFLaWQsb0JBQUEsRUFBc0I7TUFDbkNDLGtCQUFBLENBQW1CbGQsSUFBSTtNQUN2QixJQUFJckYsSUFBQSxFQUNBQSxJQUFBLENBQUttWixVQUFBLENBQVc7TUFDcEI5VCxJQUFBLENBQUtpZCxvQkFBQSxHQUF1QnRpQixJQUFBO0lBQ2hDO0VBQ0osT0FDSztJQUNEdWlCLGtCQUFBLENBQW1CbGQsSUFBSTtFQUMzQjtBQUNKO0FBRUEsU0FBU2tkLG1CQUFtQmxkLElBQUEsRUFBTTtFQUM5QixJQUFJQSxJQUFBLENBQUtpZCxvQkFBQSxFQUFzQjtJQUMzQixJQUFJamQsSUFBQSxDQUFLaWQsb0JBQUEsQ0FBcUI5a0IsTUFBQSxFQUMxQjZILElBQUEsQ0FBS2lkLG9CQUFBLENBQXFCbEosWUFBQSxDQUFhO0lBQzNDL1QsSUFBQSxDQUFLaWQsb0JBQUEsR0FBdUI7RUFDaEM7QUFDSjtBQUNBLFNBQVNqQyxpQkFBaUJoYixJQUFBLEVBQU0rYSxPQUFBLEVBQVM1UyxLQUFBLEVBQU9sRSxJQUFBLEVBQU07RUFDbEQsT0FBT2pFLElBQUEsQ0FBS0csUUFBQSxDQUFTLDBCQUEwQmtILENBQUEsSUFBS0EsQ0FBQSxDQUFFckgsSUFBQSxFQUFNK2EsT0FBQSxFQUFTNVMsS0FBSyxDQUFDLEtBQ3BFelEsd0JBQUEsQ0FBQW1iLGFBQUEsQ0FBY3NLLE9BQUEsQ0FBUXBDLE9BQUEsRUFBUzVTLEtBQUEsRUFBT2xFLElBQUk7QUFDckQ7QUFDQSxTQUFTbVoscUJBQXFCcGQsSUFBQSxFQUFNO0VBQ2hDLElBQUlBLElBQUEsQ0FBS2tiLFFBQUEsSUFBWSxDQUFDbGIsSUFBQSxDQUFLbWIsUUFBQSxDQUFTLEdBQ2hDLE9BQU87RUFDWCxPQUFPQyxZQUFBLENBQWFwYixJQUFJO0FBQzVCO0FBQ0EsU0FBU29iLGFBQWFwYixJQUFBLEVBQU07RUFDeEIsSUFBSTBILEdBQUEsR0FBTTFILElBQUEsQ0FBSzZJLGlCQUFBLENBQWtCO0VBQ2pDLElBQUksQ0FBQ25CLEdBQUEsQ0FBSXZNLFVBQUEsRUFDTCxPQUFPO0VBQ1gsSUFBSTtJQUlBLE9BQU82RSxJQUFBLENBQUt0RixHQUFBLENBQUlrSCxRQUFBLENBQVM4RixHQUFBLENBQUl2TSxVQUFBLENBQVc5QyxRQUFBLElBQVksSUFBSXFQLEdBQUEsQ0FBSXZNLFVBQUEsQ0FBV2pELFVBQUEsR0FBYXdQLEdBQUEsQ0FBSXZNLFVBQVUsTUFDN0Y2RSxJQUFBLENBQUtrYixRQUFBLElBQVlsYixJQUFBLENBQUt0RixHQUFBLENBQUlrSCxRQUFBLENBQVM4RixHQUFBLENBQUl6TSxTQUFBLENBQVU1QyxRQUFBLElBQVksSUFBSXFQLEdBQUEsQ0FBSXpNLFNBQUEsQ0FBVS9DLFVBQUEsR0FBYXdQLEdBQUEsQ0FBSXpNLFNBQVM7RUFDbEgsU0FDT3dCLENBQUEsRUFBUDtJQUNJLE9BQU87RUFDWDtBQUNKO0FBQ0EsU0FBUzRnQixtQkFBbUJyZCxJQUFBLEVBQU07RUFDOUIsSUFBSTZNLFNBQUEsR0FBWTdNLElBQUEsQ0FBS2tFLE9BQUEsQ0FBUXNDLFVBQUEsQ0FBV3hHLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVStFLE1BQUEsRUFBUSxDQUFDO0VBQ3RFLElBQUkxUixNQUFBLEdBQVNnRixJQUFBLENBQUs2SSxpQkFBQSxDQUFrQjtFQUNwQyxPQUFPMVAsb0JBQUEsQ0FBcUIwVCxTQUFBLENBQVU5VSxJQUFBLEVBQU04VSxTQUFBLENBQVV4UyxNQUFBLEVBQVFXLE1BQUEsQ0FBT0csVUFBQSxFQUFZSCxNQUFBLENBQU9JLFlBQVk7QUFDeEc7QUFFQSxTQUFTa2lCLG1CQUFtQjlYLEtBQUEsRUFBTy9MLEdBQUEsRUFBSztFQUNwQyxJQUFJO0lBQUVzaEIsT0FBQTtJQUFTNVM7RUFBTSxJQUFJM0MsS0FBQSxDQUFNbUMsU0FBQTtFQUMvQixJQUFJNFYsS0FBQSxHQUFROWpCLEdBQUEsR0FBTSxJQUFJc2hCLE9BQUEsQ0FBUXpaLEdBQUEsQ0FBSTZHLEtBQUssSUFBSTRTLE9BQUEsQ0FBUXZlLEdBQUEsQ0FBSTJMLEtBQUs7RUFDNUQsSUFBSXFWLE1BQUEsR0FBUyxDQUFDRCxLQUFBLENBQU1wbEIsTUFBQSxDQUFPNk8sYUFBQSxHQUFnQnVXLEtBQUEsR0FBUUEsS0FBQSxDQUFNdFUsS0FBQSxHQUFRekQsS0FBQSxDQUFNekksR0FBQSxDQUFJZ0ssT0FBQSxDQUFRdE4sR0FBQSxHQUFNLElBQUk4akIsS0FBQSxDQUFNclcsS0FBQSxDQUFNLElBQUlxVyxLQUFBLENBQU01WSxNQUFBLENBQU8sQ0FBQyxJQUFJO0VBQy9ILE9BQU82WSxNQUFBLElBQVU5bEIsd0JBQUEsQ0FBQWdqQixTQUFBLENBQVUrQyxRQUFBLENBQVNELE1BQUEsRUFBUS9qQixHQUFHO0FBQ25EO0FBQ0EsU0FBU2lrQixNQUFNMWQsSUFBQSxFQUFNMEgsR0FBQSxFQUFLO0VBQ3RCMUgsSUFBQSxDQUFLMmQsUUFBQSxDQUFTM2QsSUFBQSxDQUFLd0YsS0FBQSxDQUFNb1ksRUFBQSxDQUFHblIsWUFBQSxDQUFhL0UsR0FBRyxFQUFFbVcsY0FBQSxDQUFlLENBQUM7RUFDOUQsT0FBTztBQUNYO0FBQ0EsU0FBU0MsbUJBQW1COWQsSUFBQSxFQUFNdkcsR0FBQSxFQUFLc2tCLElBQUEsRUFBTTtFQUN6QyxJQUFJclcsR0FBQSxHQUFNMUgsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQTtFQUNyQixJQUFJRCxHQUFBLFlBQWVoUSx3QkFBQSxDQUFBbWIsYUFBQSxFQUFlO0lBQzlCLElBQUlrTCxJQUFBLENBQUs1SCxPQUFBLENBQVEsR0FBRyxJQUFJLElBQUk7TUFDeEIsSUFBSTtVQUFFaE87UUFBTSxJQUFJVCxHQUFBO1FBQUszUCxJQUFBLEdBQU9vUSxLQUFBLENBQU02VixVQUFBLEdBQWEsT0FBT3ZrQixHQUFBLEdBQU0sSUFBSTBPLEtBQUEsQ0FBTThWLFVBQUEsR0FBYTlWLEtBQUEsQ0FBTStWLFNBQUE7TUFDekYsSUFBSSxDQUFDbm1CLElBQUEsSUFBUUEsSUFBQSxDQUFLMk0sTUFBQSxJQUFVLENBQUMzTSxJQUFBLENBQUtpWixNQUFBLEVBQzlCLE9BQU87TUFDWCxJQUFJbU4sUUFBQSxHQUFXbmUsSUFBQSxDQUFLd0YsS0FBQSxDQUFNekksR0FBQSxDQUFJZ0ssT0FBQSxDQUFRb0IsS0FBQSxDQUFNOUwsR0FBQSxHQUFNdEUsSUFBQSxDQUFLNEIsUUFBQSxJQUFZRixHQUFBLEdBQU0sSUFBSSxLQUFLLEVBQUU7TUFDcEYsT0FBT2lrQixLQUFBLENBQU0xZCxJQUFBLEVBQU0sSUFBSXRJLHdCQUFBLENBQUFtYixhQUFBLENBQWNuTCxHQUFBLENBQUlxVCxPQUFBLEVBQVNvRCxRQUFRLENBQUM7SUFDL0QsV0FDUyxDQUFDelcsR0FBQSxDQUFJb0osS0FBQSxFQUFPO01BQ2pCLE9BQU87SUFDWCxXQUNTOVEsSUFBQSxDQUFLMkosY0FBQSxDQUFlbFEsR0FBQSxHQUFNLElBQUksWUFBWSxVQUFVLEdBQUc7TUFDNUQsSUFBSTRMLElBQUEsR0FBT2lZLGtCQUFBLENBQW1CdGQsSUFBQSxDQUFLd0YsS0FBQSxFQUFPL0wsR0FBRztNQUM3QyxJQUFJNEwsSUFBQSxJQUFTQSxJQUFBLFlBQWdCM04sd0JBQUEsQ0FBQThpQixhQUFBLEVBQ3pCLE9BQU9rRCxLQUFBLENBQU0xZCxJQUFBLEVBQU1xRixJQUFJO01BQzNCLE9BQU87SUFDWCxXQUNTLEVBQUVwSCxHQUFBLElBQU84ZixJQUFBLENBQUs1SCxPQUFBLENBQVEsR0FBRyxJQUFJLEtBQUs7TUFDdkMsSUFBSWhPLEtBQUEsR0FBUVQsR0FBQSxDQUFJUyxLQUFBO1FBQU9wUSxJQUFBLEdBQU9vUSxLQUFBLENBQU02VixVQUFBLEdBQWEsT0FBT3ZrQixHQUFBLEdBQU0sSUFBSTBPLEtBQUEsQ0FBTThWLFVBQUEsR0FBYTlWLEtBQUEsQ0FBTStWLFNBQUE7UUFBV3ZqQixJQUFBO01BQ3RHLElBQUksQ0FBQzVDLElBQUEsSUFBUUEsSUFBQSxDQUFLMk0sTUFBQSxFQUNkLE9BQU87TUFDWCxJQUFJMFosT0FBQSxHQUFVM2tCLEdBQUEsR0FBTSxJQUFJME8sS0FBQSxDQUFNOUwsR0FBQSxHQUFNdEUsSUFBQSxDQUFLNEIsUUFBQSxHQUFXd08sS0FBQSxDQUFNOUwsR0FBQTtNQUMxRCxJQUFJLEVBQUV0RSxJQUFBLENBQUttYyxNQUFBLEtBQVd2WixJQUFBLEdBQU9xRixJQUFBLENBQUtrRSxPQUFBLENBQVF3SCxNQUFBLENBQU8wUyxPQUFPLE1BQU0sQ0FBQ3pqQixJQUFBLENBQUtHLFVBQUEsR0FDaEUsT0FBTztNQUNYLElBQUlwRCx3QkFBQSxDQUFBOGlCLGFBQUEsQ0FBY0MsWUFBQSxDQUFhMWlCLElBQUksR0FBRztRQUNsQyxPQUFPMmxCLEtBQUEsQ0FBTTFkLElBQUEsRUFBTSxJQUFJdEksd0JBQUEsQ0FBQThpQixhQUFBLENBQWMvZ0IsR0FBQSxHQUFNLElBQUl1RyxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLENBQUlnSyxPQUFBLENBQVFvQixLQUFBLENBQU05TCxHQUFBLEdBQU10RSxJQUFBLENBQUs0QixRQUFRLElBQUl3TyxLQUFLLENBQUM7TUFDN0csV0FDUzlKLE1BQUEsRUFBUTtRQUliLE9BQU9xZixLQUFBLENBQU0xZCxJQUFBLEVBQU0sSUFBSXRJLHdCQUFBLENBQUFtYixhQUFBLENBQWM3UyxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLENBQUlnSyxPQUFBLENBQVF0TixHQUFBLEdBQU0sSUFBSTJrQixPQUFBLEdBQVVBLE9BQUEsR0FBVXJtQixJQUFBLENBQUs0QixRQUFRLENBQUMsQ0FBQztNQUM3RyxPQUNLO1FBQ0QsT0FBTztNQUNYO0lBQ0o7RUFDSixXQUNTK04sR0FBQSxZQUFlaFEsd0JBQUEsQ0FBQThpQixhQUFBLElBQWlCOVMsR0FBQSxDQUFJM1AsSUFBQSxDQUFLcWQsUUFBQSxFQUFVO0lBQ3hELE9BQU9zSSxLQUFBLENBQU0xZCxJQUFBLEVBQU0sSUFBSXRJLHdCQUFBLENBQUFtYixhQUFBLENBQWNwWixHQUFBLEdBQU0sSUFBSWlPLEdBQUEsQ0FBSUksR0FBQSxHQUFNSixHQUFBLENBQUlHLEtBQUssQ0FBQztFQUN2RSxPQUNLO0lBQ0QsSUFBSXhDLElBQUEsR0FBT2lZLGtCQUFBLENBQW1CdGQsSUFBQSxDQUFLd0YsS0FBQSxFQUFPL0wsR0FBRztJQUM3QyxJQUFJNEwsSUFBQSxFQUNBLE9BQU9xWSxLQUFBLENBQU0xZCxJQUFBLEVBQU1xRixJQUFJO0lBQzNCLE9BQU87RUFDWDtBQUNKO0FBQ0EsU0FBU2daLFFBQVF0bUIsSUFBQSxFQUFNO0VBQ25CLE9BQU9BLElBQUEsQ0FBS00sUUFBQSxJQUFZLElBQUlOLElBQUEsQ0FBS2dCLFNBQUEsQ0FBVUMsTUFBQSxHQUFTakIsSUFBQSxDQUFLa0MsVUFBQSxDQUFXakIsTUFBQTtBQUN4RTtBQUNBLFNBQVNzbEIsWUFBWTVqQixHQUFBLEVBQUtqQixHQUFBLEVBQUs7RUFDM0IsSUFBSWtCLElBQUEsR0FBT0QsR0FBQSxDQUFJUixVQUFBO0VBQ2YsT0FBT1MsSUFBQSxJQUFRQSxJQUFBLENBQUsrSyxJQUFBLElBQVEsTUFBTWpNLEdBQUEsR0FBTSxLQUFLaUIsR0FBQSxDQUFJNkksV0FBQSxJQUFlN0ksR0FBQSxDQUFJWixRQUFBLElBQVk7QUFDcEY7QUFDQSxTQUFTeWtCLGlCQUFpQnZlLElBQUEsRUFBTXZHLEdBQUEsRUFBSztFQUNqQyxPQUFPQSxHQUFBLEdBQU0sSUFBSStrQixzQkFBQSxDQUF1QnhlLElBQUksSUFBSXllLHFCQUFBLENBQXNCemUsSUFBSTtBQUM5RTtBQUdBLFNBQVN3ZSx1QkFBdUJ4ZSxJQUFBLEVBQU07RUFDbEMsSUFBSTBILEdBQUEsR0FBTTFILElBQUEsQ0FBSzZJLGlCQUFBLENBQWtCO0VBQ2pDLElBQUk5USxJQUFBLEdBQU8yUCxHQUFBLENBQUl6TSxTQUFBO0lBQVdaLE1BQUEsR0FBU3FOLEdBQUEsQ0FBSXhNLFdBQUE7RUFDdkMsSUFBSSxDQUFDbkQsSUFBQSxFQUNEO0VBQ0osSUFBSTJtQixRQUFBO0lBQVVDLFVBQUE7SUFBWS9SLEtBQUEsR0FBUTtFQUlsQyxJQUFJblAsS0FBQSxJQUFTMUYsSUFBQSxDQUFLTSxRQUFBLElBQVksS0FBS2dDLE1BQUEsR0FBU2drQixPQUFBLENBQVF0bUIsSUFBSSxLQUFLdW1CLFdBQUEsQ0FBWXZtQixJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQUEsR0FBUyxFQUFFLEdBQ2hHdVMsS0FBQSxHQUFRO0VBQ1osU0FBUztJQUNMLElBQUl2UyxNQUFBLEdBQVMsR0FBRztNQUNaLElBQUl0QyxJQUFBLENBQUtNLFFBQUEsSUFBWSxHQUFHO1FBQ3BCO01BQ0osT0FDSztRQUNELElBQUlzTSxNQUFBLEdBQVM1TSxJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQUEsR0FBUztRQUN0QyxJQUFJaWtCLFdBQUEsQ0FBWTNaLE1BQUEsRUFBUSxFQUFFLEdBQUc7VUFDekIrWixRQUFBLEdBQVczbUIsSUFBQTtVQUNYNG1CLFVBQUEsR0FBYSxFQUFFdGtCLE1BQUE7UUFDbkIsV0FDU3NLLE1BQUEsQ0FBT3RNLFFBQUEsSUFBWSxHQUFHO1VBQzNCTixJQUFBLEdBQU80TSxNQUFBO1VBQ1B0SyxNQUFBLEdBQVN0QyxJQUFBLENBQUtnQixTQUFBLENBQVVDLE1BQUE7UUFDNUIsT0FFSTtNQUNSO0lBQ0osV0FDUzRsQixXQUFBLENBQVk3bUIsSUFBSSxHQUFHO01BQ3hCO0lBQ0osT0FDSztNQUNELElBQUl1TixJQUFBLEdBQU92TixJQUFBLENBQUtFLGVBQUE7TUFDaEIsT0FBT3FOLElBQUEsSUFBUWdaLFdBQUEsQ0FBWWhaLElBQUEsRUFBTSxFQUFFLEdBQUc7UUFDbENvWixRQUFBLEdBQVczbUIsSUFBQSxDQUFLRyxVQUFBO1FBQ2hCeW1CLFVBQUEsR0FBYTdtQixRQUFBLENBQVN3TixJQUFJO1FBQzFCQSxJQUFBLEdBQU9BLElBQUEsQ0FBS3JOLGVBQUE7TUFDaEI7TUFDQSxJQUFJLENBQUNxTixJQUFBLEVBQU07UUFDUHZOLElBQUEsR0FBT0EsSUFBQSxDQUFLRyxVQUFBO1FBQ1osSUFBSUgsSUFBQSxJQUFRaUksSUFBQSxDQUFLdEYsR0FBQSxFQUNiO1FBQ0pMLE1BQUEsR0FBUztNQUNiLE9BQ0s7UUFDRHRDLElBQUEsR0FBT3VOLElBQUE7UUFDUGpMLE1BQUEsR0FBU2drQixPQUFBLENBQVF0bUIsSUFBSTtNQUN6QjtJQUNKO0VBQ0o7RUFDQSxJQUFJNlUsS0FBQSxFQUNBaVMsV0FBQSxDQUFZN2UsSUFBQSxFQUFNakksSUFBQSxFQUFNc0MsTUFBTSxXQUN6QnFrQixRQUFBLEVBQ0xHLFdBQUEsQ0FBWTdlLElBQUEsRUFBTTBlLFFBQUEsRUFBVUMsVUFBVTtBQUM5QztBQUdBLFNBQVNGLHNCQUFzQnplLElBQUEsRUFBTTtFQUNqQyxJQUFJMEgsR0FBQSxHQUFNMUgsSUFBQSxDQUFLNkksaUJBQUEsQ0FBa0I7RUFDakMsSUFBSTlRLElBQUEsR0FBTzJQLEdBQUEsQ0FBSXpNLFNBQUE7SUFBV1osTUFBQSxHQUFTcU4sR0FBQSxDQUFJeE0sV0FBQTtFQUN2QyxJQUFJLENBQUNuRCxJQUFBLEVBQ0Q7RUFDSixJQUFJNkwsR0FBQSxHQUFNeWEsT0FBQSxDQUFRdG1CLElBQUk7RUFDdEIsSUFBSTJtQixRQUFBLEVBQVVDLFVBQUE7RUFDZCxTQUFTO0lBQ0wsSUFBSXRrQixNQUFBLEdBQVN1SixHQUFBLEVBQUs7TUFDZCxJQUFJN0wsSUFBQSxDQUFLTSxRQUFBLElBQVksR0FDakI7TUFDSixJQUFJNk8sS0FBQSxHQUFRblAsSUFBQSxDQUFLa0MsVUFBQSxDQUFXSSxNQUFBO01BQzVCLElBQUlpa0IsV0FBQSxDQUFZcFgsS0FBQSxFQUFPLENBQUMsR0FBRztRQUN2QndYLFFBQUEsR0FBVzNtQixJQUFBO1FBQ1g0bUIsVUFBQSxHQUFhLEVBQUV0a0IsTUFBQTtNQUNuQixPQUVJO0lBQ1IsV0FDU3VrQixXQUFBLENBQVk3bUIsSUFBSSxHQUFHO01BQ3hCO0lBQ0osT0FDSztNQUNELElBQUlzTixJQUFBLEdBQU90TixJQUFBLENBQUt3TCxXQUFBO01BQ2hCLE9BQU84QixJQUFBLElBQVFpWixXQUFBLENBQVlqWixJQUFBLEVBQU0sQ0FBQyxHQUFHO1FBQ2pDcVosUUFBQSxHQUFXclosSUFBQSxDQUFLbk4sVUFBQTtRQUNoQnltQixVQUFBLEdBQWE3bUIsUUFBQSxDQUFTdU4sSUFBSSxJQUFJO1FBQzlCQSxJQUFBLEdBQU9BLElBQUEsQ0FBSzlCLFdBQUE7TUFDaEI7TUFDQSxJQUFJLENBQUM4QixJQUFBLEVBQU07UUFDUHROLElBQUEsR0FBT0EsSUFBQSxDQUFLRyxVQUFBO1FBQ1osSUFBSUgsSUFBQSxJQUFRaUksSUFBQSxDQUFLdEYsR0FBQSxFQUNiO1FBQ0pMLE1BQUEsR0FBU3VKLEdBQUEsR0FBTTtNQUNuQixPQUNLO1FBQ0Q3TCxJQUFBLEdBQU9zTixJQUFBO1FBQ1BoTCxNQUFBLEdBQVM7UUFDVHVKLEdBQUEsR0FBTXlhLE9BQUEsQ0FBUXRtQixJQUFJO01BQ3RCO0lBQ0o7RUFDSjtFQUNBLElBQUkybUIsUUFBQSxFQUNBRyxXQUFBLENBQVk3ZSxJQUFBLEVBQU0wZSxRQUFBLEVBQVVDLFVBQVU7QUFDOUM7QUFDQSxTQUFTQyxZQUFZbGtCLEdBQUEsRUFBSztFQUN0QixJQUFJQyxJQUFBLEdBQU9ELEdBQUEsQ0FBSVIsVUFBQTtFQUNmLE9BQU9TLElBQUEsSUFBUUEsSUFBQSxDQUFLNUMsSUFBQSxJQUFRNEMsSUFBQSxDQUFLNUMsSUFBQSxDQUFLOEMsT0FBQTtBQUMxQztBQUNBLFNBQVNpa0IsY0FBYy9tQixJQUFBLEVBQU1zQyxNQUFBLEVBQVE7RUFDakMsT0FBT3RDLElBQUEsSUFBUXNDLE1BQUEsSUFBVXRDLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV2pCLE1BQUEsSUFBVSxDQUFDWSxZQUFBLENBQWE3QixJQUFJLEdBQUc7SUFDcEVzQyxNQUFBLEdBQVN2QyxRQUFBLENBQVNDLElBQUksSUFBSTtJQUMxQkEsSUFBQSxHQUFPQSxJQUFBLENBQUtHLFVBQUE7RUFDaEI7RUFDQSxPQUFPSCxJQUFBLElBQVFzQyxNQUFBLEdBQVN0QyxJQUFBLENBQUtrQyxVQUFBLENBQVdqQixNQUFBLEVBQVE7SUFDNUMsSUFBSXFNLElBQUEsR0FBT3ROLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV0ksTUFBQTtJQUMzQixJQUFJZ0wsSUFBQSxDQUFLaE4sUUFBQSxJQUFZLEdBQ2pCLE9BQU9nTixJQUFBO0lBQ1gsSUFBSUEsSUFBQSxDQUFLaE4sUUFBQSxJQUFZLEtBQUtnTixJQUFBLENBQUt0TCxlQUFBLElBQW1CLFNBQzlDO0lBQ0poQyxJQUFBLEdBQU9zTixJQUFBO0lBQ1BoTCxNQUFBLEdBQVM7RUFDYjtBQUNKO0FBQ0EsU0FBUzBrQixlQUFlaG5CLElBQUEsRUFBTXNDLE1BQUEsRUFBUTtFQUNsQyxPQUFPdEMsSUFBQSxJQUFRLENBQUNzQyxNQUFBLElBQVUsQ0FBQ1QsWUFBQSxDQUFhN0IsSUFBSSxHQUFHO0lBQzNDc0MsTUFBQSxHQUFTdkMsUUFBQSxDQUFTQyxJQUFJO0lBQ3RCQSxJQUFBLEdBQU9BLElBQUEsQ0FBS0csVUFBQTtFQUNoQjtFQUNBLE9BQU9ILElBQUEsSUFBUXNDLE1BQUEsRUFBUTtJQUNuQixJQUFJZ0wsSUFBQSxHQUFPdE4sSUFBQSxDQUFLa0MsVUFBQSxDQUFXSSxNQUFBLEdBQVM7SUFDcEMsSUFBSWdMLElBQUEsQ0FBS2hOLFFBQUEsSUFBWSxHQUNqQixPQUFPZ04sSUFBQTtJQUNYLElBQUlBLElBQUEsQ0FBS2hOLFFBQUEsSUFBWSxLQUFLZ04sSUFBQSxDQUFLdEwsZUFBQSxJQUFtQixTQUM5QztJQUNKaEMsSUFBQSxHQUFPc04sSUFBQTtJQUNQaEwsTUFBQSxHQUFTdEMsSUFBQSxDQUFLa0MsVUFBQSxDQUFXakIsTUFBQTtFQUM3QjtBQUNKO0FBQ0EsU0FBUzZsQixZQUFZN2UsSUFBQSxFQUFNakksSUFBQSxFQUFNc0MsTUFBQSxFQUFRO0VBQ3JDLElBQUl0QyxJQUFBLENBQUtNLFFBQUEsSUFBWSxHQUFHO0lBQ3BCLElBQUlzTSxNQUFBLEVBQVF1QyxLQUFBO0lBQ1osSUFBSUEsS0FBQSxHQUFRNFgsYUFBQSxDQUFjL21CLElBQUEsRUFBTXNDLE1BQU0sR0FBRztNQUNyQ3RDLElBQUEsR0FBT21QLEtBQUE7TUFDUDdNLE1BQUEsR0FBUztJQUNiLFdBQ1NzSyxNQUFBLEdBQVNvYSxjQUFBLENBQWVobkIsSUFBQSxFQUFNc0MsTUFBTSxHQUFHO01BQzVDdEMsSUFBQSxHQUFPNE0sTUFBQTtNQUNQdEssTUFBQSxHQUFTc0ssTUFBQSxDQUFPNUwsU0FBQSxDQUFVQyxNQUFBO0lBQzlCO0VBQ0o7RUFDQSxJQUFJME8sR0FBQSxHQUFNMUgsSUFBQSxDQUFLc0ksWUFBQSxDQUFhO0VBQzVCLElBQUksQ0FBQ1osR0FBQSxFQUNEO0VBQ0osSUFBSTNNLGtCQUFBLENBQW1CMk0sR0FBRyxHQUFHO0lBQ3pCLElBQUkvTyxLQUFBLEdBQVFDLFFBQUEsQ0FBU0MsV0FBQSxDQUFZO0lBQ2pDRixLQUFBLENBQU1HLE1BQUEsQ0FBT2YsSUFBQSxFQUFNc0MsTUFBTTtJQUN6QjFCLEtBQUEsQ0FBTU0sUUFBQSxDQUFTbEIsSUFBQSxFQUFNc0MsTUFBTTtJQUMzQnFOLEdBQUEsQ0FBSTBGLGVBQUEsQ0FBZ0I7SUFDcEIxRixHQUFBLENBQUkyRixRQUFBLENBQVMxVSxLQUFLO0VBQ3RCLFdBQ1MrTyxHQUFBLENBQUk2QixNQUFBLEVBQVE7SUFDakI3QixHQUFBLENBQUk2QixNQUFBLENBQU94UixJQUFBLEVBQU1zQyxNQUFNO0VBQzNCO0VBQ0EyRixJQUFBLENBQUswYixXQUFBLENBQVlHLGVBQUEsQ0FBZ0I7RUFDakMsSUFBSTtJQUFFclc7RUFBTSxJQUFJeEYsSUFBQTtFQUVoQjhjLFVBQUEsQ0FBVyxNQUFNO0lBQ2IsSUFBSTljLElBQUEsQ0FBS3dGLEtBQUEsSUFBU0EsS0FBQSxFQUNkNlYsY0FBQSxDQUFlcmIsSUFBSTtFQUMzQixHQUFHLEVBQUU7QUFDVDtBQUNBLFNBQVNnZixjQUFjaGYsSUFBQSxFQUFNM0QsR0FBQSxFQUFLO0VBQzlCLElBQUl1TCxJQUFBLEdBQU81SCxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLENBQUlnSyxPQUFBLENBQVExSyxHQUFHO0VBQ3JDLElBQUksRUFBRXNCLE1BQUEsSUFBVVEsT0FBQSxLQUFZeUosSUFBQSxDQUFLelAsTUFBQSxDQUFPNk8sYUFBQSxFQUFlO0lBQ25ELElBQUluRSxNQUFBLEdBQVM3QyxJQUFBLENBQUtzRyxXQUFBLENBQVlqSyxHQUFHO0lBQ2pDLElBQUlBLEdBQUEsR0FBTXVMLElBQUEsQ0FBS1csS0FBQSxDQUFNLEdBQUc7TUFDcEIsSUFBSTVELE1BQUEsR0FBUzNFLElBQUEsQ0FBS3NHLFdBQUEsQ0FBWWpLLEdBQUEsR0FBTSxDQUFDO01BQ3JDLElBQUk0aUIsR0FBQSxJQUFPdGEsTUFBQSxDQUFPM0YsR0FBQSxHQUFNMkYsTUFBQSxDQUFPMUYsTUFBQSxJQUFVO01BQ3pDLElBQUlnZ0IsR0FBQSxHQUFNcGMsTUFBQSxDQUFPN0QsR0FBQSxJQUFPaWdCLEdBQUEsR0FBTXBjLE1BQUEsQ0FBTzVELE1BQUEsSUFBVTFDLElBQUEsQ0FBSzJpQixHQUFBLENBQUl2YSxNQUFBLENBQU85RixJQUFBLEdBQU9nRSxNQUFBLENBQU9oRSxJQUFJLElBQUksR0FDakYsT0FBTzhGLE1BQUEsQ0FBTzlGLElBQUEsR0FBT2dFLE1BQUEsQ0FBT2hFLElBQUEsR0FBTyxRQUFRO0lBQ25EO0lBQ0EsSUFBSXhDLEdBQUEsR0FBTXVMLElBQUEsQ0FBS1ksR0FBQSxDQUFJLEdBQUc7TUFDbEIsSUFBSXRCLEtBQUEsR0FBUWxILElBQUEsQ0FBS3NHLFdBQUEsQ0FBWWpLLEdBQUEsR0FBTSxDQUFDO01BQ3BDLElBQUk0aUIsR0FBQSxJQUFPL1gsS0FBQSxDQUFNbEksR0FBQSxHQUFNa0ksS0FBQSxDQUFNakksTUFBQSxJQUFVO01BQ3ZDLElBQUlnZ0IsR0FBQSxHQUFNcGMsTUFBQSxDQUFPN0QsR0FBQSxJQUFPaWdCLEdBQUEsR0FBTXBjLE1BQUEsQ0FBTzVELE1BQUEsSUFBVTFDLElBQUEsQ0FBSzJpQixHQUFBLENBQUloWSxLQUFBLENBQU1ySSxJQUFBLEdBQU9nRSxNQUFBLENBQU9oRSxJQUFJLElBQUksR0FDaEYsT0FBT3FJLEtBQUEsQ0FBTXJJLElBQUEsR0FBT2dFLE1BQUEsQ0FBT2hFLElBQUEsR0FBTyxRQUFRO0lBQ2xEO0VBQ0o7RUFDQSxJQUFJc2dCLFFBQUEsR0FBV2plLGdCQUFBLENBQWlCbEIsSUFBQSxDQUFLdEYsR0FBRyxFQUFFMGtCLFNBQUE7RUFDMUMsT0FBT0QsUUFBQSxJQUFZLFFBQVEsUUFBUTtBQUN2QztBQUlBLFNBQVNFLGlCQUFpQnJmLElBQUEsRUFBTXZHLEdBQUEsRUFBS3NrQixJQUFBLEVBQU07RUFDdkMsSUFBSXJXLEdBQUEsR0FBTTFILElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUE7RUFDckIsSUFBSUQsR0FBQSxZQUFlaFEsd0JBQUEsQ0FBQW1iLGFBQUEsSUFBaUIsQ0FBQ25MLEdBQUEsQ0FBSW9KLEtBQUEsSUFBU2lOLElBQUEsQ0FBSzVILE9BQUEsQ0FBUSxHQUFHLElBQUksSUFDbEUsT0FBTztFQUNYLElBQUlsWSxHQUFBLElBQU84ZixJQUFBLENBQUs1SCxPQUFBLENBQVEsR0FBRyxJQUFJLElBQzNCLE9BQU87RUFDWCxJQUFJO0lBQUV0TyxLQUFBO0lBQU9DO0VBQUksSUFBSUosR0FBQTtFQUNyQixJQUFJLENBQUNHLEtBQUEsQ0FBTTFQLE1BQUEsQ0FBTzZPLGFBQUEsSUFBaUJoSCxJQUFBLENBQUsySixjQUFBLENBQWVsUSxHQUFBLEdBQU0sSUFBSSxPQUFPLE1BQU0sR0FBRztJQUM3RSxJQUFJNEwsSUFBQSxHQUFPaVksa0JBQUEsQ0FBbUJ0ZCxJQUFBLENBQUt3RixLQUFBLEVBQU8vTCxHQUFHO0lBQzdDLElBQUk0TCxJQUFBLElBQVNBLElBQUEsWUFBZ0IzTix3QkFBQSxDQUFBOGlCLGFBQUEsRUFDekIsT0FBT2tELEtBQUEsQ0FBTTFkLElBQUEsRUFBTXFGLElBQUk7RUFDL0I7RUFDQSxJQUFJLENBQUN3QyxLQUFBLENBQU0xUCxNQUFBLENBQU82TyxhQUFBLEVBQWU7SUFDN0IsSUFBSXpILElBQUEsR0FBTzlGLEdBQUEsR0FBTSxJQUFJb08sS0FBQSxHQUFRQyxHQUFBO0lBQzdCLElBQUl3WCxNQUFBLEdBQVM1WCxHQUFBLFlBQWVoUSx3QkFBQSxDQUFBNm5CLFlBQUEsR0FBZTduQix3QkFBQSxDQUFBZ2pCLFNBQUEsQ0FBVThFLElBQUEsQ0FBS2pnQixJQUFBLEVBQU05RixHQUFHLElBQUkvQix3QkFBQSxDQUFBZ2pCLFNBQUEsQ0FBVStDLFFBQUEsQ0FBU2xlLElBQUEsRUFBTTlGLEdBQUc7SUFDbkcsT0FBTzZsQixNQUFBLEdBQVM1QixLQUFBLENBQU0xZCxJQUFBLEVBQU1zZixNQUFNLElBQUk7RUFDMUM7RUFDQSxPQUFPO0FBQ1g7QUFDQSxTQUFTRywyQkFBMkJ6ZixJQUFBLEVBQU12RyxHQUFBLEVBQUs7RUFDM0MsSUFBSSxFQUFFdUcsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxZQUFxQmpRLHdCQUFBLENBQUFtYixhQUFBLEdBQ2xDLE9BQU87RUFDWCxJQUFJO0lBQUUxSyxLQUFBO0lBQU80UyxPQUFBO0lBQVNqSyxLQUFBLEVBQUE0TztFQUFNLElBQUkxZixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBO0VBQzNDLElBQUksQ0FBQ1EsS0FBQSxDQUFNd1gsVUFBQSxDQUFXNUUsT0FBTyxHQUN6QixPQUFPO0VBQ1gsSUFBSSxDQUFDMkUsTUFBQSxFQUNELE9BQU87RUFDWCxJQUFJMWYsSUFBQSxDQUFLMkosY0FBQSxDQUFlbFEsR0FBQSxHQUFNLElBQUksWUFBWSxVQUFVLEdBQ3BELE9BQU87RUFDWCxJQUFJbW1CLFFBQUEsR0FBVyxDQUFDelgsS0FBQSxDQUFNNlYsVUFBQSxLQUFldmtCLEdBQUEsR0FBTSxJQUFJME8sS0FBQSxDQUFNOFYsVUFBQSxHQUFhOVYsS0FBQSxDQUFNK1YsU0FBQTtFQUN4RSxJQUFJMEIsUUFBQSxJQUFZLENBQUNBLFFBQUEsQ0FBU2xiLE1BQUEsRUFBUTtJQUM5QixJQUFJa1osRUFBQSxHQUFLNWQsSUFBQSxDQUFLd0YsS0FBQSxDQUFNb1ksRUFBQTtJQUNwQixJQUFJbmtCLEdBQUEsR0FBTSxHQUNObWtCLEVBQUEsQ0FBR2lDLE1BQUEsQ0FBTzFYLEtBQUEsQ0FBTTlMLEdBQUEsR0FBTXVqQixRQUFBLENBQVNqbUIsUUFBQSxFQUFVd08sS0FBQSxDQUFNOUwsR0FBRyxPQUVsRHVoQixFQUFBLENBQUdpQyxNQUFBLENBQU8xWCxLQUFBLENBQU05TCxHQUFBLEVBQUs4TCxLQUFBLENBQU05TCxHQUFBLEdBQU11akIsUUFBQSxDQUFTam1CLFFBQVE7SUFDdERxRyxJQUFBLENBQUsyZCxRQUFBLENBQVNDLEVBQUU7SUFDaEIsT0FBTztFQUNYO0VBQ0EsT0FBTztBQUNYO0FBQ0EsU0FBU2tDLGVBQWU5ZixJQUFBLEVBQU1qSSxJQUFBLEVBQU15TixLQUFBLEVBQU87RUFDdkN4RixJQUFBLENBQUswYixXQUFBLENBQVkvTSxJQUFBLENBQUs7RUFDdEI1VyxJQUFBLENBQUtnQyxlQUFBLEdBQWtCeUwsS0FBQTtFQUN2QnhGLElBQUEsQ0FBSzBiLFdBQUEsQ0FBWW5ULEtBQUEsQ0FBTTtBQUMzQjtBQU1BLFNBQVN3WCxtQkFBbUIvZixJQUFBLEVBQU07RUFDOUIsSUFBSSxDQUFDbkMsTUFBQSxJQUFVbUMsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVUSxLQUFBLENBQU1FLFlBQUEsR0FBZSxHQUNyRCxPQUFPO0VBQ1gsSUFBSTtJQUFFcE4sU0FBQTtJQUFXQztFQUFZLElBQUk4RSxJQUFBLENBQUs2SSxpQkFBQSxDQUFrQjtFQUN4RCxJQUFJNU4sU0FBQSxJQUFhQSxTQUFBLENBQVU1QyxRQUFBLElBQVksS0FBSzZDLFdBQUEsSUFBZSxLQUN2REQsU0FBQSxDQUFVb0ksVUFBQSxJQUFjcEksU0FBQSxDQUFVb0ksVUFBQSxDQUFXdEosZUFBQSxJQUFtQixTQUFTO0lBQ3pFLElBQUlDLEtBQUEsR0FBUWlCLFNBQUEsQ0FBVW9JLFVBQUE7SUFDdEJ5YyxjQUFBLENBQWU5ZixJQUFBLEVBQU1oRyxLQUFBLEVBQU8sTUFBTTtJQUNsQzhpQixVQUFBLENBQVcsTUFBTWdELGNBQUEsQ0FBZTlmLElBQUEsRUFBTWhHLEtBQUEsRUFBTyxPQUFPLEdBQUcsRUFBRTtFQUM3RDtFQUNBLE9BQU87QUFDWDtBQU9BLFNBQVNnbUIsUUFBUXhrQixLQUFBLEVBQU87RUFDcEIsSUFBSTZOLE1BQUEsR0FBUztFQUNiLElBQUk3TixLQUFBLENBQU15a0IsT0FBQSxFQUNONVcsTUFBQSxJQUFVO0VBQ2QsSUFBSTdOLEtBQUEsQ0FBTTBrQixPQUFBLEVBQ043VyxNQUFBLElBQVU7RUFDZCxJQUFJN04sS0FBQSxDQUFNMmtCLE1BQUEsRUFDTjlXLE1BQUEsSUFBVTtFQUNkLElBQUk3TixLQUFBLENBQU00a0IsUUFBQSxFQUNOL1csTUFBQSxJQUFVO0VBQ2QsT0FBT0EsTUFBQTtBQUNYO0FBQ0EsU0FBU2dYLGVBQWVyZ0IsSUFBQSxFQUFNeEUsS0FBQSxFQUFPO0VBQ2pDLElBQUlHLElBQUEsR0FBT0gsS0FBQSxDQUFNRixPQUFBO0lBQVN5aUIsSUFBQSxHQUFPaUMsT0FBQSxDQUFReGtCLEtBQUs7RUFDOUMsSUFBSUcsSUFBQSxJQUFRLEtBQU1zQyxHQUFBLElBQU90QyxJQUFBLElBQVEsTUFBTW9pQixJQUFBLElBQVEsS0FBTTtJQUNqRCxPQUFPMEIsMEJBQUEsQ0FBMkJ6ZixJQUFBLEVBQU0sRUFBRSxLQUFLdWUsZ0JBQUEsQ0FBaUJ2ZSxJQUFBLEVBQU0sRUFBRTtFQUM1RSxXQUNVckUsSUFBQSxJQUFRLE1BQU0sQ0FBQ0gsS0FBQSxDQUFNNGtCLFFBQUEsSUFBY25pQixHQUFBLElBQU90QyxJQUFBLElBQVEsTUFBTW9pQixJQUFBLElBQVEsS0FBTTtJQUM1RSxPQUFPMEIsMEJBQUEsQ0FBMkJ6ZixJQUFBLEVBQU0sQ0FBQyxLQUFLdWUsZ0JBQUEsQ0FBaUJ2ZSxJQUFBLEVBQU0sQ0FBQztFQUMxRSxXQUNTckUsSUFBQSxJQUFRLE1BQU1BLElBQUEsSUFBUSxJQUFJO0lBQy9CLE9BQU87RUFDWCxXQUNTQSxJQUFBLElBQVEsTUFBT3NDLEdBQUEsSUFBT3RDLElBQUEsSUFBUSxNQUFNb2lCLElBQUEsSUFBUSxLQUFNO0lBQ3ZELElBQUl0a0IsR0FBQSxHQUFNa0MsSUFBQSxJQUFRLEtBQU1xakIsYUFBQSxDQUFjaGYsSUFBQSxFQUFNQSxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVsUCxJQUFJLEtBQUssUUFBUSxLQUFLLElBQUs7SUFDNUYsT0FBT3FsQixrQkFBQSxDQUFtQjlkLElBQUEsRUFBTXZHLEdBQUEsRUFBS3NrQixJQUFJLEtBQUtRLGdCQUFBLENBQWlCdmUsSUFBQSxFQUFNdkcsR0FBRztFQUM1RSxXQUNTa0MsSUFBQSxJQUFRLE1BQU9zQyxHQUFBLElBQU90QyxJQUFBLElBQVEsTUFBTW9pQixJQUFBLElBQVEsS0FBTTtJQUN2RCxJQUFJdGtCLEdBQUEsR0FBTWtDLElBQUEsSUFBUSxLQUFNcWpCLGFBQUEsQ0FBY2hmLElBQUEsRUFBTUEsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVbFAsSUFBSSxLQUFLLFFBQVEsSUFBSSxLQUFNO0lBQzVGLE9BQU9xbEIsa0JBQUEsQ0FBbUI5ZCxJQUFBLEVBQU12RyxHQUFBLEVBQUtza0IsSUFBSSxLQUFLUSxnQkFBQSxDQUFpQnZlLElBQUEsRUFBTXZHLEdBQUc7RUFDNUUsV0FDU2tDLElBQUEsSUFBUSxNQUFPc0MsR0FBQSxJQUFPdEMsSUFBQSxJQUFRLE1BQU1vaUIsSUFBQSxJQUFRLEtBQU07SUFDdkQsT0FBT3NCLGdCQUFBLENBQWlCcmYsSUFBQSxFQUFNLElBQUkrZCxJQUFJLEtBQUtRLGdCQUFBLENBQWlCdmUsSUFBQSxFQUFNLEVBQUU7RUFDeEUsV0FDU3JFLElBQUEsSUFBUSxNQUFPc0MsR0FBQSxJQUFPdEMsSUFBQSxJQUFRLE1BQU1vaUIsSUFBQSxJQUFRLEtBQU07SUFDdkQsT0FBT2dDLGtCQUFBLENBQW1CL2YsSUFBSSxLQUFLcWYsZ0JBQUEsQ0FBaUJyZixJQUFBLEVBQU0sR0FBRytkLElBQUksS0FBS1EsZ0JBQUEsQ0FBaUJ2ZSxJQUFBLEVBQU0sQ0FBQztFQUNsRyxXQUNTK2QsSUFBQSxLQUFTOWYsR0FBQSxHQUFNLE1BQU0sU0FDekJ0QyxJQUFBLElBQVEsTUFBTUEsSUFBQSxJQUFRLE1BQU1BLElBQUEsSUFBUSxNQUFNQSxJQUFBLElBQVEsS0FBSztJQUN4RCxPQUFPO0VBQ1g7RUFDQSxPQUFPO0FBQ1g7QUFFQSxTQUFTMmtCLHNCQUFzQnRnQixJQUFBLEVBQU02UCxLQUFBLEVBQU87RUFDeEM3UCxJQUFBLENBQUtHLFFBQUEsQ0FBUyxtQkFBbUJrSCxDQUFBLElBQUs7SUFBRXdJLEtBQUEsR0FBUXhJLENBQUEsQ0FBRXdJLEtBQUEsRUFBTzdQLElBQUk7RUFBRyxDQUFDO0VBQ2pFLElBQUl1Z0IsT0FBQSxHQUFVLEVBQUM7SUFBRztNQUFFOWEsT0FBQTtNQUFTK2EsU0FBQTtNQUFXQztJQUFRLElBQUk1USxLQUFBO0VBQ3BELE9BQU8yUSxTQUFBLEdBQVksS0FBS0MsT0FBQSxHQUFVLEtBQUtoYixPQUFBLENBQVFvTSxVQUFBLElBQWMsS0FBS3BNLE9BQUEsQ0FBUXBDLFVBQUEsQ0FBV3dPLFVBQUEsSUFBYyxHQUFHO0lBQ2xHMk8sU0FBQTtJQUNBQyxPQUFBO0lBQ0EsSUFBSTFvQixJQUFBLEdBQU8wTixPQUFBLENBQVFwQyxVQUFBO0lBQ25Ca2QsT0FBQSxDQUFRdmUsSUFBQSxDQUFLakssSUFBQSxDQUFLeVYsSUFBQSxDQUFLK0IsSUFBQSxFQUFNeFgsSUFBQSxDQUFLMlgsS0FBQSxJQUFTM1gsSUFBQSxDQUFLeVYsSUFBQSxDQUFLa1QsWUFBQSxHQUFlM29CLElBQUEsQ0FBSzJYLEtBQUEsR0FBUSxJQUFJO0lBQ3JGakssT0FBQSxHQUFVMU4sSUFBQSxDQUFLME4sT0FBQTtFQUNuQjtFQUNBLElBQUlrYixVQUFBLEdBQWEzZ0IsSUFBQSxDQUFLRyxRQUFBLENBQVMscUJBQXFCLEtBQUt2SSx3QkFBQSxDQUFBNFgsYUFBQSxDQUFjb1IsVUFBQSxDQUFXNWdCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXFiLE1BQU07RUFDbkcsSUFBSWhsQixJQUFBLEdBQU1pbEIsV0FBQSxDQUFZO0lBQUcxUyxJQUFBLEdBQU92UyxJQUFBLENBQUl3UyxhQUFBLENBQWMsS0FBSztFQUN2REQsSUFBQSxDQUFLRSxXQUFBLENBQVlxUyxVQUFBLENBQVdJLGlCQUFBLENBQWtCdGIsT0FBQSxFQUFTO0lBQUU3TSxRQUFBLEVBQVVpRDtFQUFJLENBQUMsQ0FBQztFQUN6RSxJQUFJd0gsVUFBQSxHQUFhK0ssSUFBQSxDQUFLL0ssVUFBQTtJQUFZcVEsU0FBQTtJQUFXc04sUUFBQSxHQUFXO0VBQ3hELE9BQU8zZCxVQUFBLElBQWNBLFVBQUEsQ0FBV2hMLFFBQUEsSUFBWSxNQUFNcWIsU0FBQSxHQUFZdU4sT0FBQSxDQUFRNWQsVUFBQSxDQUFXdkosUUFBQSxDQUFTNmIsV0FBQSxDQUFZLEtBQUs7SUFDdkcsU0FBU3RULENBQUEsR0FBSXFSLFNBQUEsQ0FBVTFhLE1BQUEsR0FBUyxHQUFHcUosQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFBSztNQUM1QyxJQUFJNFYsT0FBQSxHQUFVcGMsSUFBQSxDQUFJd1MsYUFBQSxDQUFjcUYsU0FBQSxDQUFVclIsQ0FBQSxDQUFFO01BQzVDLE9BQU8rTCxJQUFBLENBQUsvSyxVQUFBLEVBQ1I0VSxPQUFBLENBQVEzSixXQUFBLENBQVlGLElBQUEsQ0FBSy9LLFVBQVU7TUFDdkMrSyxJQUFBLENBQUtFLFdBQUEsQ0FBWTJKLE9BQU87TUFDeEIrSSxRQUFBO0lBQ0o7SUFDQTNkLFVBQUEsR0FBYStLLElBQUEsQ0FBSy9LLFVBQUE7RUFDdEI7RUFDQSxJQUFJQSxVQUFBLElBQWNBLFVBQUEsQ0FBV2hMLFFBQUEsSUFBWSxHQUNyQ2dMLFVBQUEsQ0FBV3dTLFlBQUEsQ0FBYSxpQkFBaUIsR0FBRzJLLFNBQUEsSUFBYUMsT0FBQSxHQUFVTyxRQUFBLEdBQVcsS0FBS0EsUUFBQSxLQUFhLE1BQU1FLElBQUEsQ0FBS0MsU0FBQSxDQUFVWixPQUFPLEdBQUc7RUFDbkksSUFBSXhTLElBQUEsR0FBTy9OLElBQUEsQ0FBS0csUUFBQSxDQUFTLDJCQUEyQmtILENBQUEsSUFBS0EsQ0FBQSxDQUFFd0ksS0FBQSxFQUFPN1AsSUFBSSxDQUFDLEtBQ25FNlAsS0FBQSxDQUFNcEssT0FBQSxDQUFRMmIsV0FBQSxDQUFZLEdBQUd2UixLQUFBLENBQU1wSyxPQUFBLENBQVFDLElBQUEsRUFBTSxNQUFNO0VBQzNELE9BQU87SUFBRWhMLEdBQUEsRUFBSzBULElBQUE7SUFBTUwsSUFBQTtJQUFNOEI7RUFBTTtBQUNwQztBQUVBLFNBQVN3UixtQkFBbUJyaEIsSUFBQSxFQUFNK04sSUFBQSxFQUFNdVQsSUFBQSxFQUFNQyxTQUFBLEVBQVdDLFFBQUEsRUFBVTtFQUMvRCxJQUFJQyxNQUFBLEdBQVNELFFBQUEsQ0FBU3JwQixNQUFBLENBQU9xVixJQUFBLENBQUtVLElBQUEsQ0FBS3ZTLElBQUE7RUFDdkMsSUFBSWpCLEdBQUEsRUFBS21WLEtBQUE7RUFDVCxJQUFJLENBQUN5UixJQUFBLElBQVEsQ0FBQ3ZULElBQUEsRUFDVixPQUFPO0VBQ1gsSUFBSTJULE1BQUEsR0FBUzNULElBQUEsS0FBU3dULFNBQUEsSUFBYUUsTUFBQSxJQUFVLENBQUNILElBQUE7RUFDOUMsSUFBSUksTUFBQSxFQUFRO0lBQ1IxaEIsSUFBQSxDQUFLRyxRQUFBLENBQVMsdUJBQXVCa0gsQ0FBQSxJQUFLO01BQUUwRyxJQUFBLEdBQU8xRyxDQUFBLENBQUUwRyxJQUFBLEVBQU0wVCxNQUFBLElBQVVGLFNBQUEsRUFBV3ZoQixJQUFJO0lBQUcsQ0FBQztJQUN4RixJQUFJeWhCLE1BQUEsRUFDQSxPQUFPMVQsSUFBQSxHQUFPLElBQUluVyx3QkFBQSxDQUFBK3BCLEtBQUEsQ0FBTS9wQix3QkFBQSxDQUFBaVosUUFBQSxDQUFTcFksSUFBQSxDQUFLdUgsSUFBQSxDQUFLd0YsS0FBQSxDQUFNcWIsTUFBQSxDQUFPOVMsSUFBQSxDQUFLQSxJQUFBLENBQUs2VCxPQUFBLENBQVEsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJaHFCLHdCQUFBLENBQUErcEIsS0FBQSxDQUFNN1EsS0FBQTtJQUMvRyxJQUFJK1EsTUFBQSxHQUFTN2hCLElBQUEsQ0FBS0csUUFBQSxDQUFTLHVCQUF1QmtILENBQUEsSUFBS0EsQ0FBQSxDQUFFMEcsSUFBQSxFQUFNeVQsUUFBQSxFQUFVRCxTQUFBLEVBQVd2aEIsSUFBSSxDQUFDO0lBQ3pGLElBQUk2aEIsTUFBQSxFQUFRO01BQ1JoUyxLQUFBLEdBQVFnUyxNQUFBO0lBQ1osT0FDSztNQUNELElBQUlsUSxLQUFBLEdBQVE2UCxRQUFBLENBQVM3UCxLQUFBLENBQU07TUFDM0IsSUFBSTtVQUFFa1A7UUFBTyxJQUFJN2dCLElBQUEsQ0FBS3dGLEtBQUE7UUFBT21iLFVBQUEsR0FBYS9vQix3QkFBQSxDQUFBNFgsYUFBQSxDQUFjb1IsVUFBQSxDQUFXQyxNQUFNO01BQ3pFbm1CLEdBQUEsR0FBTTlCLFFBQUEsQ0FBU3lWLGFBQUEsQ0FBYyxLQUFLO01BQ2xDTixJQUFBLENBQUtnSSxLQUFBLENBQU0sZUFBZSxFQUFFK0wsT0FBQSxDQUFRQyxLQUFBLElBQVM7UUFDekMsSUFBSTVjLENBQUEsR0FBSXpLLEdBQUEsQ0FBSTRULFdBQUEsQ0FBWTFWLFFBQUEsQ0FBU3lWLGFBQUEsQ0FBYyxHQUFHLENBQUM7UUFDbkQsSUFBSTBULEtBQUEsRUFDQTVjLENBQUEsQ0FBRW1KLFdBQUEsQ0FBWXFTLFVBQUEsQ0FBV3FCLGFBQUEsQ0FBY25CLE1BQUEsQ0FBTzlTLElBQUEsQ0FBS2dVLEtBQUEsRUFBT3BRLEtBQUssQ0FBQyxDQUFDO01BQ3pFLENBQUM7SUFDTDtFQUNKLE9BQ0s7SUFDRDNSLElBQUEsQ0FBS0csUUFBQSxDQUFTLHVCQUF1QmtILENBQUEsSUFBSztNQUFFaWEsSUFBQSxHQUFPamEsQ0FBQSxDQUFFaWEsSUFBQSxFQUFNdGhCLElBQUk7SUFBRyxDQUFDO0lBQ25FdEYsR0FBQSxHQUFNdW5CLFFBQUEsQ0FBU1gsSUFBSTtJQUNuQixJQUFJampCLE1BQUEsRUFDQTZqQixxQkFBQSxDQUFzQnhuQixHQUFHO0VBQ2pDO0VBQ0EsSUFBSXluQixXQUFBLEdBQWN6bkIsR0FBQSxJQUFPQSxHQUFBLENBQUkwbkIsYUFBQSxDQUFjLGlCQUFpQjtFQUM1RCxJQUFJQyxTQUFBLEdBQVlGLFdBQUEsSUFBZSxnQ0FBZ0NobEIsSUFBQSxDQUFLZ2xCLFdBQUEsQ0FBWUcsWUFBQSxDQUFhLGVBQWUsS0FBSyxFQUFFO0VBQ25ILElBQUlELFNBQUEsSUFBYUEsU0FBQSxDQUFVLElBQ3ZCLFNBQVNoZ0IsQ0FBQSxHQUFJLENBQUNnZ0IsU0FBQSxDQUFVLElBQUloZ0IsQ0FBQSxHQUFJLEdBQUdBLENBQUEsSUFBSztJQUNwQyxJQUFJckksS0FBQSxHQUFRVSxHQUFBLENBQUkySSxVQUFBO0lBQ2hCLE9BQU9ySixLQUFBLElBQVNBLEtBQUEsQ0FBTTNCLFFBQUEsSUFBWSxHQUM5QjJCLEtBQUEsR0FBUUEsS0FBQSxDQUFNdUosV0FBQTtJQUNsQixJQUFJLENBQUN2SixLQUFBLEVBQ0Q7SUFDSlUsR0FBQSxHQUFNVixLQUFBO0VBQ1Y7RUFDSixJQUFJLENBQUM2VixLQUFBLEVBQU87SUFDUixJQUFJMFMsTUFBQSxHQUFTdmlCLElBQUEsQ0FBS0csUUFBQSxDQUFTLGlCQUFpQixLQUFLSCxJQUFBLENBQUtHLFFBQUEsQ0FBUyxXQUFXLEtBQUt2SSx3QkFBQSxDQUFBNHFCLFNBQUEsQ0FBVTVCLFVBQUEsQ0FBVzVnQixJQUFBLENBQUt3RixLQUFBLENBQU1xYixNQUFNO0lBQ3JIaFIsS0FBQSxHQUFRMFMsTUFBQSxDQUFPRSxVQUFBLENBQVcvbkIsR0FBQSxFQUFLO01BQzNCaVcsa0JBQUEsRUFBb0IsQ0FBQyxFQUFFK1EsTUFBQSxJQUFVVyxTQUFBO01BQ2pDOUIsT0FBQSxFQUFTaUIsUUFBQTtNQUNUa0IsYUFBYUMsSUFBQSxFQUFLO1FBQ2QsSUFBSUEsSUFBQSxDQUFJN29CLFFBQUEsSUFBWSxRQUFRLENBQUM2b0IsSUFBQSxDQUFJcGYsV0FBQSxJQUM3Qm9mLElBQUEsQ0FBSXpxQixVQUFBLElBQWMsQ0FBQzBxQixhQUFBLENBQWMvb0IsSUFBQSxDQUFLOG9CLElBQUEsQ0FBSXpxQixVQUFBLENBQVc0QixRQUFRLEdBQzdELE9BQU87VUFBRTRVLE1BQUEsRUFBUTtRQUFLO1FBQzFCLE9BQU87TUFDWDtJQUNKLENBQUM7RUFDTDtFQUNBLElBQUkyVCxTQUFBLEVBQVc7SUFDWHhTLEtBQUEsR0FBUWdULFVBQUEsQ0FBV0MsVUFBQSxDQUFXalQsS0FBQSxFQUFPLENBQUN3UyxTQUFBLENBQVUsSUFBSSxDQUFDQSxTQUFBLENBQVUsRUFBRSxHQUFHQSxTQUFBLENBQVUsRUFBRTtFQUNwRixPQUNLO0lBQ0R4UyxLQUFBLEdBQVFqWSx3QkFBQSxDQUFBK3BCLEtBQUEsQ0FBTW9CLE9BQUEsQ0FBUUMsaUJBQUEsQ0FBa0JuVCxLQUFBLENBQU1wSyxPQUFBLEVBQVMrYixRQUFRLEdBQUcsSUFBSTtJQUN0RSxJQUFJM1IsS0FBQSxDQUFNMlEsU0FBQSxJQUFhM1EsS0FBQSxDQUFNNFEsT0FBQSxFQUFTO01BQ2xDLElBQUlELFNBQUEsR0FBWTtRQUFHQyxPQUFBLEdBQVU7TUFDN0IsU0FBUzFvQixJQUFBLEdBQU84WCxLQUFBLENBQU1wSyxPQUFBLENBQVFwQyxVQUFBLEVBQVltZCxTQUFBLEdBQVkzUSxLQUFBLENBQU0yUSxTQUFBLElBQWEsQ0FBQ3pvQixJQUFBLENBQUt5VixJQUFBLENBQUtVLElBQUEsQ0FBSytVLFNBQUEsRUFBV3pDLFNBQUEsSUFBYXpvQixJQUFBLEdBQU9BLElBQUEsQ0FBS3NMLFVBQUEsRUFBWSxDQUFFO01BQzNJLFNBQVN0TCxJQUFBLEdBQU84WCxLQUFBLENBQU1wSyxPQUFBLENBQVFGLFNBQUEsRUFBV2tiLE9BQUEsR0FBVTVRLEtBQUEsQ0FBTTRRLE9BQUEsSUFBVyxDQUFDMW9CLElBQUEsQ0FBS3lWLElBQUEsQ0FBS1UsSUFBQSxDQUFLK1UsU0FBQSxFQUFXeEMsT0FBQSxJQUFXMW9CLElBQUEsR0FBT0EsSUFBQSxDQUFLd04sU0FBQSxFQUFXLENBQUU7TUFDbklzSyxLQUFBLEdBQVFpVCxVQUFBLENBQVdqVCxLQUFBLEVBQU8yUSxTQUFBLEVBQVdDLE9BQU87SUFDaEQ7RUFDSjtFQUNBemdCLElBQUEsQ0FBS0csUUFBQSxDQUFTLG1CQUFtQmtILENBQUEsSUFBSztJQUFFd0ksS0FBQSxHQUFReEksQ0FBQSxDQUFFd0ksS0FBQSxFQUFPN1AsSUFBSTtFQUFHLENBQUM7RUFDakUsT0FBTzZQLEtBQUE7QUFDWDtBQUNBLElBQU0rUyxhQUFBLEdBQWdCO0FBU3RCLFNBQVNJLGtCQUFrQkUsUUFBQSxFQUFVMUIsUUFBQSxFQUFVO0VBQzNDLElBQUkwQixRQUFBLENBQVNyUixVQUFBLEdBQWEsR0FDdEIsT0FBT3FSLFFBQUE7RUFDWCxTQUFTdEosQ0FBQSxHQUFJNEgsUUFBQSxDQUFTdlksS0FBQSxFQUFPMlEsQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFBSztJQUN0QyxJQUFJemhCLE1BQUEsR0FBU3FwQixRQUFBLENBQVN6cEIsSUFBQSxDQUFLNmhCLENBQUM7SUFDNUIsSUFBSXVKLEtBQUEsR0FBUWhyQixNQUFBLENBQU9pckIsY0FBQSxDQUFlNUIsUUFBQSxDQUFTeHBCLEtBQUEsQ0FBTTRoQixDQUFDLENBQUM7SUFDbkQsSUFBSXlKLFFBQUE7TUFBVWhhLE1BQUEsR0FBUyxFQUFDO0lBQ3hCNlosUUFBQSxDQUFTcEIsT0FBQSxDQUFRL3BCLElBQUEsSUFBUTtNQUNyQixJQUFJLENBQUNzUixNQUFBLEVBQ0Q7TUFDSixJQUFJK0UsSUFBQSxHQUFPK1UsS0FBQSxDQUFNRyxZQUFBLENBQWF2ckIsSUFBQSxDQUFLeVYsSUFBSTtRQUFHK1YsTUFBQTtNQUMxQyxJQUFJLENBQUNuVixJQUFBLEVBQ0QsT0FBTy9FLE1BQUEsR0FBUztNQUNwQixJQUFJa2EsTUFBQSxHQUFTbGEsTUFBQSxDQUFPclEsTUFBQSxJQUFVcXFCLFFBQUEsQ0FBU3JxQixNQUFBLElBQVV3cUIsWUFBQSxDQUFhcFYsSUFBQSxFQUFNaVYsUUFBQSxFQUFVdHJCLElBQUEsRUFBTXNSLE1BQUEsQ0FBT0EsTUFBQSxDQUFPclEsTUFBQSxHQUFTLElBQUksQ0FBQyxHQUFHO1FBQy9HcVEsTUFBQSxDQUFPQSxNQUFBLENBQU9yUSxNQUFBLEdBQVMsS0FBS3VxQixNQUFBO01BQ2hDLE9BQ0s7UUFDRCxJQUFJbGEsTUFBQSxDQUFPclEsTUFBQSxFQUNQcVEsTUFBQSxDQUFPQSxNQUFBLENBQU9yUSxNQUFBLEdBQVMsS0FBS3lxQixVQUFBLENBQVdwYSxNQUFBLENBQU9BLE1BQUEsQ0FBT3JRLE1BQUEsR0FBUyxJQUFJcXFCLFFBQUEsQ0FBU3JxQixNQUFNO1FBQ3JGLElBQUkwcUIsT0FBQSxHQUFVQyxZQUFBLENBQWE1ckIsSUFBQSxFQUFNcVcsSUFBSTtRQUNyQy9FLE1BQUEsQ0FBT3JILElBQUEsQ0FBSzBoQixPQUFPO1FBQ25CUCxLQUFBLEdBQVFBLEtBQUEsQ0FBTVMsU0FBQSxDQUFVRixPQUFBLENBQVFsVyxJQUFJO1FBQ3BDNlYsUUFBQSxHQUFXalYsSUFBQTtNQUNmO0lBQ0osQ0FBQztJQUNELElBQUkvRSxNQUFBLEVBQ0EsT0FBT3pSLHdCQUFBLENBQUFpWixRQUFBLENBQVNwWSxJQUFBLENBQUs0USxNQUFNO0VBQ25DO0VBQ0EsT0FBTzZaLFFBQUE7QUFDWDtBQUNBLFNBQVNTLGFBQWE1ckIsSUFBQSxFQUFNcVcsSUFBQSxFQUFNM1YsSUFBQSxHQUFPLEdBQUc7RUFDeEMsU0FBUzRKLENBQUEsR0FBSStMLElBQUEsQ0FBS3BWLE1BQUEsR0FBUyxHQUFHcUosQ0FBQSxJQUFLNUosSUFBQSxFQUFNNEosQ0FBQSxJQUNyQ3RLLElBQUEsR0FBT3FXLElBQUEsQ0FBSy9MLENBQUEsRUFBRzhNLE1BQUEsQ0FBTyxNQUFNdlgsd0JBQUEsQ0FBQWlaLFFBQUEsQ0FBU3BZLElBQUEsQ0FBS1YsSUFBSSxDQUFDO0VBQ25ELE9BQU9BLElBQUE7QUFDWDtBQUdBLFNBQVN5ckIsYUFBYXBWLElBQUEsRUFBTWlWLFFBQUEsRUFBVXRyQixJQUFBLEVBQU04ckIsT0FBQSxFQUFTNWEsS0FBQSxFQUFPO0VBQ3hELElBQUlBLEtBQUEsR0FBUW1GLElBQUEsQ0FBS3BWLE1BQUEsSUFBVWlRLEtBQUEsR0FBUW9hLFFBQUEsQ0FBU3JxQixNQUFBLElBQVVvVixJQUFBLENBQUtuRixLQUFBLEtBQVVvYSxRQUFBLENBQVNwYSxLQUFBLEdBQVE7SUFDbEYsSUFBSTJDLEtBQUEsR0FBUTRYLFlBQUEsQ0FBYXBWLElBQUEsRUFBTWlWLFFBQUEsRUFBVXRyQixJQUFBLEVBQU04ckIsT0FBQSxDQUFRdGUsU0FBQSxFQUFXMEQsS0FBQSxHQUFRLENBQUM7SUFDM0UsSUFBSTJDLEtBQUEsRUFDQSxPQUFPaVksT0FBQSxDQUFRL1QsSUFBQSxDQUFLK1QsT0FBQSxDQUFRcGUsT0FBQSxDQUFRcWUsWUFBQSxDQUFhRCxPQUFBLENBQVFoUyxVQUFBLEdBQWEsR0FBR2pHLEtBQUssQ0FBQztJQUNuRixJQUFJdVgsS0FBQSxHQUFRVSxPQUFBLENBQVFULGNBQUEsQ0FBZVMsT0FBQSxDQUFRaFMsVUFBVTtJQUNyRCxJQUFJc1IsS0FBQSxDQUFNUyxTQUFBLENBQVUzYSxLQUFBLElBQVNtRixJQUFBLENBQUtwVixNQUFBLEdBQVMsSUFBSWpCLElBQUEsQ0FBS3lWLElBQUEsR0FBT1ksSUFBQSxDQUFLbkYsS0FBQSxHQUFRLEVBQUUsR0FDdEUsT0FBTzRhLE9BQUEsQ0FBUS9ULElBQUEsQ0FBSytULE9BQUEsQ0FBUXBlLE9BQUEsQ0FBUXNlLE1BQUEsQ0FBT25zQix3QkFBQSxDQUFBaVosUUFBQSxDQUFTcFksSUFBQSxDQUFLa3JCLFlBQUEsQ0FBYTVyQixJQUFBLEVBQU1xVyxJQUFBLEVBQU1uRixLQUFBLEdBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN0RztBQUNKO0FBQ0EsU0FBU3dhLFdBQVcxckIsSUFBQSxFQUFNa1IsS0FBQSxFQUFPO0VBQzdCLElBQUlBLEtBQUEsSUFBUyxHQUNULE9BQU9sUixJQUFBO0VBQ1gsSUFBSW1yQixRQUFBLEdBQVduckIsSUFBQSxDQUFLME4sT0FBQSxDQUFRcWUsWUFBQSxDQUFhL3JCLElBQUEsQ0FBSzhaLFVBQUEsR0FBYSxHQUFHNFIsVUFBQSxDQUFXMXJCLElBQUEsQ0FBS3dOLFNBQUEsRUFBVzBELEtBQUEsR0FBUSxDQUFDLENBQUM7RUFDbkcsSUFBSSthLElBQUEsR0FBT2pzQixJQUFBLENBQUtxckIsY0FBQSxDQUFlcnJCLElBQUEsQ0FBSzhaLFVBQVUsRUFBRW9TLFVBQUEsQ0FBV3JzQix3QkFBQSxDQUFBaVosUUFBQSxDQUFTQyxLQUFBLEVBQU8sSUFBSTtFQUMvRSxPQUFPL1ksSUFBQSxDQUFLK1gsSUFBQSxDQUFLb1QsUUFBQSxDQUFTYSxNQUFBLENBQU9DLElBQUksQ0FBQztBQUMxQztBQUNBLFNBQVNFLFdBQVdoQixRQUFBLEVBQVUzakIsSUFBQSxFQUFNOUcsSUFBQSxFQUFNQyxFQUFBLEVBQUl1USxLQUFBLEVBQU93WCxPQUFBLEVBQVM7RUFDMUQsSUFBSTFvQixJQUFBLEdBQU93SCxJQUFBLEdBQU8sSUFBSTJqQixRQUFBLENBQVM3ZixVQUFBLEdBQWE2ZixRQUFBLENBQVMzZCxTQUFBO0lBQVdxRyxLQUFBLEdBQVE3VCxJQUFBLENBQUswTixPQUFBO0VBQzdFLElBQUl5ZCxRQUFBLENBQVNyUixVQUFBLEdBQWEsR0FDdEI0TyxPQUFBLEdBQVU7RUFDZCxJQUFJeFgsS0FBQSxHQUFRdlEsRUFBQSxHQUFLLEdBQ2JrVCxLQUFBLEdBQVFzWSxVQUFBLENBQVd0WSxLQUFBLEVBQU9yTSxJQUFBLEVBQU05RyxJQUFBLEVBQU1DLEVBQUEsRUFBSXVRLEtBQUEsR0FBUSxHQUFHd1gsT0FBTztFQUNoRSxJQUFJeFgsS0FBQSxJQUFTeFEsSUFBQSxFQUNUbVQsS0FBQSxHQUFRck0sSUFBQSxHQUFPLElBQUl4SCxJQUFBLENBQUtxckIsY0FBQSxDQUFlLENBQUMsRUFBRWEsVUFBQSxDQUFXclksS0FBQSxFQUFPNlUsT0FBQSxJQUFXeFgsS0FBSyxFQUFFOGEsTUFBQSxDQUFPblksS0FBSyxJQUNwRkEsS0FBQSxDQUFNbVksTUFBQSxDQUFPaHNCLElBQUEsQ0FBS3FyQixjQUFBLENBQWVyckIsSUFBQSxDQUFLOFosVUFBVSxFQUFFb1MsVUFBQSxDQUFXcnNCLHdCQUFBLENBQUFpWixRQUFBLENBQVNDLEtBQUEsRUFBTyxJQUFJLENBQUM7RUFDNUYsT0FBT29TLFFBQUEsQ0FBU1ksWUFBQSxDQUFhdmtCLElBQUEsR0FBTyxJQUFJLElBQUkyakIsUUFBQSxDQUFTclIsVUFBQSxHQUFhLEdBQUc5WixJQUFBLENBQUsrWCxJQUFBLENBQUtsRSxLQUFLLENBQUM7QUFDekY7QUFDQSxTQUFTa1gsV0FBV2pULEtBQUEsRUFBTzJRLFNBQUEsRUFBV0MsT0FBQSxFQUFTO0VBQzNDLElBQUlELFNBQUEsR0FBWTNRLEtBQUEsQ0FBTTJRLFNBQUEsRUFDbEIzUSxLQUFBLEdBQVEsSUFBSWpZLHdCQUFBLENBQUErcEIsS0FBQSxDQUFNdUMsVUFBQSxDQUFXclUsS0FBQSxDQUFNcEssT0FBQSxFQUFTLElBQUkrYSxTQUFBLEVBQVczUSxLQUFBLENBQU0yUSxTQUFBLEVBQVcsR0FBRzNRLEtBQUEsQ0FBTTRRLE9BQU8sR0FBR0QsU0FBQSxFQUFXM1EsS0FBQSxDQUFNNFEsT0FBTztFQUMzSCxJQUFJQSxPQUFBLEdBQVU1USxLQUFBLENBQU00USxPQUFBLEVBQ2hCNVEsS0FBQSxHQUFRLElBQUlqWSx3QkFBQSxDQUFBK3BCLEtBQUEsQ0FBTXVDLFVBQUEsQ0FBV3JVLEtBQUEsQ0FBTXBLLE9BQUEsRUFBUyxHQUFHZ2IsT0FBQSxFQUFTNVEsS0FBQSxDQUFNNFEsT0FBQSxFQUFTLEdBQUcsQ0FBQyxHQUFHNVEsS0FBQSxDQUFNMlEsU0FBQSxFQUFXQyxPQUFPO0VBQzFHLE9BQU81USxLQUFBO0FBQ1g7QUFJQSxJQUFNb1IsT0FBQSxHQUFVO0VBQ1prRCxLQUFBLEVBQU8sQ0FBQyxPQUFPO0VBQ2ZDLEtBQUEsRUFBTyxDQUFDLE9BQU87RUFDZkMsS0FBQSxFQUFPLENBQUMsT0FBTztFQUNmQyxPQUFBLEVBQVMsQ0FBQyxPQUFPO0VBQ2pCQyxRQUFBLEVBQVUsQ0FBQyxPQUFPO0VBQ2xCQyxHQUFBLEVBQUssQ0FBQyxTQUFTLFVBQVU7RUFDekI1RyxFQUFBLEVBQUksQ0FBQyxTQUFTLE9BQU87RUFDckI2RyxFQUFBLEVBQUksQ0FBQyxTQUFTLFNBQVMsSUFBSTtFQUMzQkMsRUFBQSxFQUFJLENBQUMsU0FBUyxTQUFTLElBQUk7QUFDL0I7QUFDQSxJQUFJQyxZQUFBLEdBQWU7QUFDbkIsU0FBUzdELFlBQUEsRUFBYztFQUNuQixPQUFPNkQsWUFBQSxLQUFpQkEsWUFBQSxHQUFlL3JCLFFBQUEsQ0FBU2dzQixjQUFBLENBQWVDLGtCQUFBLENBQW1CLE9BQU87QUFDN0Y7QUFDQSxJQUFJQyxPQUFBLEdBQVU7QUFDZCxTQUFTQyxpQkFBaUJ6RCxJQUFBLEVBQU07RUFDNUIsSUFBSTBELFlBQUEsR0FBZWxMLE1BQUEsQ0FBT2tMLFlBQUE7RUFDMUIsSUFBSSxDQUFDQSxZQUFBLEVBQ0QsT0FBTzFELElBQUE7RUFJWCxJQUFJLENBQUN3RCxPQUFBLEVBQ0RBLE9BQUEsR0FBVUUsWUFBQSxDQUFhQyxhQUFBLElBQWlCRCxZQUFBLENBQWFFLFlBQUEsQ0FBYSx3QkFBd0I7SUFBRUMsVUFBQSxFQUFhQyxDQUFBLElBQU1BO0VBQUUsQ0FBQztFQUN0SCxPQUFPTixPQUFBLENBQVFLLFVBQUEsQ0FBVzdELElBQUk7QUFDbEM7QUFDQSxTQUFTVyxTQUFTWCxJQUFBLEVBQU07RUFDcEIsSUFBSStELEtBQUEsR0FBUSxzQkFBc0Jsb0IsSUFBQSxDQUFLbWtCLElBQUk7RUFDM0MsSUFBSStELEtBQUEsRUFDQS9ELElBQUEsR0FBT0EsSUFBQSxDQUFLelIsS0FBQSxDQUFNd1YsS0FBQSxDQUFNLEdBQUdyc0IsTUFBTTtFQUNyQyxJQUFJOEMsR0FBQSxHQUFNZ2xCLFdBQUEsQ0FBWSxFQUFFelMsYUFBQSxDQUFjLEtBQUs7RUFDM0MsSUFBSWlYLFFBQUEsR0FBVyxtQkFBbUJub0IsSUFBQSxDQUFLbWtCLElBQUk7SUFBR2xULElBQUE7RUFDOUMsSUFBSUEsSUFBQSxHQUFPa1gsUUFBQSxJQUFZckUsT0FBQSxDQUFRcUUsUUFBQSxDQUFTLEdBQUczUCxXQUFBLENBQVksSUFDbkQyTCxJQUFBLEdBQU9sVCxJQUFBLENBQUttWCxHQUFBLENBQUkvUSxDQUFBLElBQUssTUFBTUEsQ0FBQSxHQUFJLEdBQUcsRUFBRWdSLElBQUEsQ0FBSyxFQUFFLElBQUlsRSxJQUFBLEdBQU9sVCxJQUFBLENBQUttWCxHQUFBLENBQUkvUSxDQUFBLElBQUssT0FBT0EsQ0FBQSxHQUFJLEdBQUcsRUFBRXdFLE9BQUEsQ0FBUSxFQUFFd00sSUFBQSxDQUFLLEVBQUU7RUFDekcxcEIsR0FBQSxDQUFJMnBCLFNBQUEsR0FBWVYsZ0JBQUEsQ0FBaUJ6RCxJQUFJO0VBQ3JDLElBQUlsVCxJQUFBLEVBQ0EsU0FBUy9MLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkrTCxJQUFBLENBQUtwVixNQUFBLEVBQVFxSixDQUFBLElBQzdCdkcsR0FBQSxHQUFNQSxHQUFBLENBQUlzbUIsYUFBQSxDQUFjaFUsSUFBQSxDQUFLL0wsQ0FBQSxDQUFFLEtBQUt2RyxHQUFBO0VBQzVDLE9BQU9BLEdBQUE7QUFDWDtBQU1BLFNBQVNvbUIsc0JBQXNCeG5CLEdBQUEsRUFBSztFQUNoQyxJQUFJcVYsS0FBQSxHQUFRclYsR0FBQSxDQUFJZ3JCLGdCQUFBLENBQWlCL25CLE1BQUEsR0FBUyxtQ0FBbUMsNEJBQTRCO0VBQ3pHLFNBQVMwRSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJME4sS0FBQSxDQUFNL1csTUFBQSxFQUFRcUosQ0FBQSxJQUFLO0lBQ25DLElBQUl0SyxJQUFBLEdBQU9nWSxLQUFBLENBQU0xTixDQUFBO0lBQ2pCLElBQUl0SyxJQUFBLENBQUtrQyxVQUFBLENBQVdqQixNQUFBLElBQVUsS0FBS2pCLElBQUEsQ0FBSzBRLFdBQUEsSUFBZSxVQUFZMVEsSUFBQSxDQUFLRyxVQUFBLEVBQ3BFSCxJQUFBLENBQUtHLFVBQUEsQ0FBVzRyQixZQUFBLENBQWFwcEIsR0FBQSxDQUFJMkYsYUFBQSxDQUFjOFAsY0FBQSxDQUFlLEdBQUcsR0FBR3BZLElBQUk7RUFDaEY7QUFDSjtBQUNBLFNBQVM4cUIsV0FBV2hULEtBQUEsRUFBTzBRLE9BQUEsRUFBUztFQUNoQyxJQUFJLENBQUMxUSxLQUFBLENBQU1uSyxJQUFBLEVBQ1AsT0FBT21LLEtBQUE7RUFDWCxJQUFJZ1IsTUFBQSxHQUFTaFIsS0FBQSxDQUFNcEssT0FBQSxDQUFRcEMsVUFBQSxDQUFXbUssSUFBQSxDQUFLcVQsTUFBQTtJQUFROEUsS0FBQTtFQUNuRCxJQUFJO0lBQ0FBLEtBQUEsR0FBUXpFLElBQUEsQ0FBSzBFLEtBQUEsQ0FBTXJGLE9BQU87RUFDOUIsU0FDT2hKLENBQUEsRUFBUDtJQUNJLE9BQU8xSCxLQUFBO0VBQ1g7RUFDQSxJQUFJO0lBQUVwSyxPQUFBO0lBQVMrYSxTQUFBO0lBQVdDO0VBQVEsSUFBSTVRLEtBQUE7RUFDdEMsU0FBU3hOLENBQUEsR0FBSXNqQixLQUFBLENBQU0zc0IsTUFBQSxHQUFTLEdBQUdxSixDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUFLLEdBQUc7SUFDM0MsSUFBSW1MLElBQUEsR0FBT3FULE1BQUEsQ0FBTzlRLEtBQUEsQ0FBTTRWLEtBQUEsQ0FBTXRqQixDQUFBO0lBQzlCLElBQUksQ0FBQ21MLElBQUEsSUFBUUEsSUFBQSxDQUFLcVksZ0JBQUEsQ0FBaUIsR0FDL0I7SUFDSnBnQixPQUFBLEdBQVU3Tix3QkFBQSxDQUFBaVosUUFBQSxDQUFTcFksSUFBQSxDQUFLK1UsSUFBQSxDQUFLMkIsTUFBQSxDQUFPd1csS0FBQSxDQUFNdGpCLENBQUEsR0FBSSxJQUFJb0QsT0FBTyxDQUFDO0lBQzFEK2EsU0FBQTtJQUNBQyxPQUFBO0VBQ0o7RUFDQSxPQUFPLElBQUk3b0Isd0JBQUEsQ0FBQStwQixLQUFBLENBQU1sYyxPQUFBLEVBQVMrYSxTQUFBLEVBQVdDLE9BQU87QUFDaEQ7QUFJQSxJQUFNcUYsUUFBQSxHQUFXLENBQUM7QUFDbEIsSUFBTUMsWUFBQSxHQUFlLENBQUM7QUFDdEIsSUFBTUMsZUFBQSxHQUFrQjtFQUFFQyxVQUFBLEVBQVk7RUFBTUMsU0FBQSxFQUFXO0FBQUs7QUFDNUQsSUFBTUMsVUFBQSxHQUFOLE1BQWlCO0VBQ2JsYyxZQUFBLEVBQWM7SUFDVixLQUFLbVcsUUFBQSxHQUFXO0lBQ2hCLEtBQUs3RSxTQUFBLEdBQVk7SUFDakIsS0FBSzZLLFdBQUEsR0FBYztJQUNuQixLQUFLQyxlQUFBLEdBQWtCO0lBQ3ZCLEtBQUtDLFNBQUEsR0FBWTtNQUFFQyxJQUFBLEVBQU07TUFBR3JxQixDQUFBLEVBQUc7TUFBR0MsQ0FBQSxFQUFHO01BQUdxUixJQUFBLEVBQU07TUFBSWdaLE1BQUEsRUFBUTtJQUFFO0lBQzVELEtBQUtDLG1CQUFBLEdBQXNCO0lBQzNCLEtBQUtDLGlCQUFBLEdBQW9CO0lBQ3pCLEtBQUtDLFlBQUEsR0FBZTtJQUNwQixLQUFLQywyQkFBQSxHQUE4QjtJQUNuQyxLQUFLQyxTQUFBLEdBQVk7SUFDakIsS0FBS0MsU0FBQSxHQUFZO0lBQ2pCLEtBQUtDLGdCQUFBLEdBQW1CO0lBQ3hCLEtBQUs1VixTQUFBLEdBQVk7SUFDakIsS0FBSzZCLGVBQUEsR0FBa0I7SUFDdkIsS0FBS2dVLGdCQUFBLEdBQW1CO0lBQ3hCLEtBQUszVCxnQkFBQSxHQUFtQixFQUFDO0lBQ3pCLEtBQUs0VCxrQkFBQSxHQUFxQjtJQUMxQixLQUFLQyxhQUFBLEdBQWdCO0lBRXJCLEtBQUtDLHlCQUFBLEdBQTRCO0lBQ2pDLEtBQUtDLGNBQUEsR0FBaUI7SUFDdEIsS0FBS0MsYUFBQSxHQUFnQixlQUFBcFMsTUFBQSxDQUFPOUYsTUFBQSxDQUFPLElBQUk7SUFDdkMsS0FBS3lOLGtCQUFBLEdBQXFCO0VBQzlCO0FBQ0o7QUFDQSxTQUFTMEssVUFBVXRuQixJQUFBLEVBQU07RUFDckIsU0FBU3hFLEtBQUEsSUFBU3NxQixRQUFBLEVBQVU7SUFDeEIsSUFBSXlCLE9BQUEsR0FBVXpCLFFBQUEsQ0FBU3RxQixLQUFBO0lBQ3ZCd0UsSUFBQSxDQUFLdEYsR0FBQSxDQUFJbWlCLGdCQUFBLENBQWlCcmhCLEtBQUEsRUFBT3dFLElBQUEsQ0FBSytTLEtBQUEsQ0FBTXNVLGFBQUEsQ0FBYzdyQixLQUFBLElBQVVnc0IsTUFBQSxJQUFVO01BQzFFLElBQUlDLGtCQUFBLENBQW1Cem5CLElBQUEsRUFBTXduQixNQUFLLEtBQUssQ0FBQ0UsZ0JBQUEsQ0FBaUIxbkIsSUFBQSxFQUFNd25CLE1BQUssTUFDL0R4bkIsSUFBQSxDQUFLa2IsUUFBQSxJQUFZLEVBQUVzTSxNQUFBLENBQU1oYSxJQUFBLElBQVF1WSxZQUFBLElBQ2xDd0IsT0FBQSxDQUFRdm5CLElBQUEsRUFBTXduQixNQUFLO0lBQzNCLEdBQUd4QixlQUFBLENBQWdCeHFCLEtBQUEsSUFBUztNQUFFbXNCLE9BQUEsRUFBUztJQUFLLElBQUksTUFBUztFQUM3RDtFQUlBLElBQUk5cEIsTUFBQSxFQUNBbUMsSUFBQSxDQUFLdEYsR0FBQSxDQUFJbWlCLGdCQUFBLENBQWlCLFNBQVMsTUFBTSxJQUFJO0VBQ2pEK0ssZUFBQSxDQUFnQjVuQixJQUFJO0FBQ3hCO0FBQ0EsU0FBUzZuQixtQkFBbUI3bkIsSUFBQSxFQUFNcWEsTUFBQSxFQUFRO0VBQ3RDcmEsSUFBQSxDQUFLK1MsS0FBQSxDQUFNMFQsbUJBQUEsR0FBc0JwTSxNQUFBO0VBQ2pDcmEsSUFBQSxDQUFLK1MsS0FBQSxDQUFNMlQsaUJBQUEsR0FBb0JvQixJQUFBLENBQUtDLEdBQUEsQ0FBSTtBQUM1QztBQUNBLFNBQVNDLGFBQWFob0IsSUFBQSxFQUFNO0VBQ3hCQSxJQUFBLENBQUswYixXQUFBLENBQVkvTSxJQUFBLENBQUs7RUFDdEIsU0FBU25CLElBQUEsSUFBUXhOLElBQUEsQ0FBSytTLEtBQUEsQ0FBTXNVLGFBQUEsRUFDeEJybkIsSUFBQSxDQUFLdEYsR0FBQSxDQUFJaWlCLG1CQUFBLENBQW9CblAsSUFBQSxFQUFNeE4sSUFBQSxDQUFLK1MsS0FBQSxDQUFNc1UsYUFBQSxDQUFjN1osSUFBQSxDQUFLO0VBQ3JFeWEsWUFBQSxDQUFham9CLElBQUEsQ0FBSytTLEtBQUEsQ0FBTWlVLGdCQUFnQjtFQUN4Q2lCLFlBQUEsQ0FBYWpvQixJQUFBLENBQUsrUyxLQUFBLENBQU02VCwyQkFBMkI7QUFDdkQ7QUFDQSxTQUFTZ0IsZ0JBQWdCNW5CLElBQUEsRUFBTTtFQUMzQkEsSUFBQSxDQUFLRyxRQUFBLENBQVMsbUJBQW1CK25CLGVBQUEsSUFBbUI7SUFDaEQsU0FBUzFhLElBQUEsSUFBUTBhLGVBQUEsRUFDYixJQUFJLENBQUNsb0IsSUFBQSxDQUFLK1MsS0FBQSxDQUFNc1UsYUFBQSxDQUFjN1osSUFBQSxHQUMxQnhOLElBQUEsQ0FBS3RGLEdBQUEsQ0FBSW1pQixnQkFBQSxDQUFpQnJQLElBQUEsRUFBTXhOLElBQUEsQ0FBSytTLEtBQUEsQ0FBTXNVLGFBQUEsQ0FBYzdaLElBQUEsSUFBUWhTLEtBQUEsSUFBU2tzQixnQkFBQSxDQUFpQjFuQixJQUFBLEVBQU14RSxLQUFLLENBQUM7RUFDbkgsQ0FBQztBQUNMO0FBQ0EsU0FBU2tzQixpQkFBaUIxbkIsSUFBQSxFQUFNeEUsS0FBQSxFQUFPO0VBQ25DLE9BQU93RSxJQUFBLENBQUtHLFFBQUEsQ0FBUyxtQkFBbUJnb0IsU0FBQSxJQUFZO0lBQ2hELElBQUlaLE9BQUEsR0FBVVksU0FBQSxDQUFTM3NCLEtBQUEsQ0FBTWdTLElBQUE7SUFDN0IsT0FBTytaLE9BQUEsR0FBVUEsT0FBQSxDQUFRdm5CLElBQUEsRUFBTXhFLEtBQUssS0FBS0EsS0FBQSxDQUFNNHNCLGdCQUFBLEdBQW1CO0VBQ3RFLENBQUM7QUFDTDtBQUNBLFNBQVNYLG1CQUFtQnpuQixJQUFBLEVBQU14RSxLQUFBLEVBQU87RUFDckMsSUFBSSxDQUFDQSxLQUFBLENBQU02c0IsT0FBQSxFQUNQLE9BQU87RUFDWCxJQUFJN3NCLEtBQUEsQ0FBTTRzQixnQkFBQSxFQUNOLE9BQU87RUFDWCxTQUFTcndCLElBQUEsR0FBT3lELEtBQUEsQ0FBTXVLLE1BQUEsRUFBUWhPLElBQUEsSUFBUWlJLElBQUEsQ0FBS3RGLEdBQUEsRUFBSzNDLElBQUEsR0FBT0EsSUFBQSxDQUFLRyxVQUFBLEVBQ3hELElBQUksQ0FBQ0gsSUFBQSxJQUFRQSxJQUFBLENBQUtNLFFBQUEsSUFBWSxNQUN6Qk4sSUFBQSxDQUFLbUMsVUFBQSxJQUFjbkMsSUFBQSxDQUFLbUMsVUFBQSxDQUFXMlEsU0FBQSxDQUFVclAsS0FBSyxHQUNuRCxPQUFPO0VBQ2YsT0FBTztBQUNYO0FBQ0EsU0FBUzhzQixjQUFjdG9CLElBQUEsRUFBTXhFLEtBQUEsRUFBTztFQUNoQyxJQUFJLENBQUNrc0IsZ0JBQUEsQ0FBaUIxbkIsSUFBQSxFQUFNeEUsS0FBSyxLQUFLc3FCLFFBQUEsQ0FBU3RxQixLQUFBLENBQU1nUyxJQUFBLE1BQ2hEeE4sSUFBQSxDQUFLa2IsUUFBQSxJQUFZLEVBQUUxZixLQUFBLENBQU1nUyxJQUFBLElBQVF1WSxZQUFBLElBQ2xDRCxRQUFBLENBQVN0cUIsS0FBQSxDQUFNZ1MsSUFBQSxFQUFNeE4sSUFBQSxFQUFNeEUsS0FBSztBQUN4QztBQUNBdXFCLFlBQUEsQ0FBYXdDLE9BQUEsR0FBVSxDQUFDdm9CLElBQUEsRUFBTXdvQixNQUFBLEtBQVc7RUFDckMsSUFBSWh0QixLQUFBLEdBQVFndEIsTUFBQTtFQUNaeG9CLElBQUEsQ0FBSytTLEtBQUEsQ0FBTXFOLFFBQUEsR0FBVzVrQixLQUFBLENBQU1GLE9BQUEsSUFBVyxNQUFNRSxLQUFBLENBQU00a0IsUUFBQTtFQUNuRCxJQUFJcUksbUJBQUEsQ0FBb0J6b0IsSUFBQSxFQUFNeEUsS0FBSyxHQUMvQjtFQUNKd0UsSUFBQSxDQUFLK1MsS0FBQSxDQUFNcVQsV0FBQSxHQUFjNXFCLEtBQUEsQ0FBTUYsT0FBQTtFQUMvQjBFLElBQUEsQ0FBSytTLEtBQUEsQ0FBTXNULGVBQUEsR0FBa0J5QixJQUFBLENBQUtDLEdBQUEsQ0FBSTtFQUl0QyxJQUFJM3BCLE9BQUEsSUFBV1QsTUFBQSxJQUFVbkMsS0FBQSxDQUFNRixPQUFBLElBQVcsSUFDdEM7RUFDSixJQUFJRSxLQUFBLENBQU1GLE9BQUEsSUFBVyxLQUNqQjBFLElBQUEsQ0FBSzBiLFdBQUEsQ0FBWWdOLFVBQUEsQ0FBVztFQUtoQyxJQUFJM3FCLEdBQUEsSUFBT3ZDLEtBQUEsQ0FBTUYsT0FBQSxJQUFXLE1BQU0sQ0FBQ0UsS0FBQSxDQUFNeWtCLE9BQUEsSUFBVyxDQUFDemtCLEtBQUEsQ0FBTTJrQixNQUFBLElBQVUsQ0FBQzNrQixLQUFBLENBQU0wa0IsT0FBQSxFQUFTO0lBQ2pGLElBQUk2SCxHQUFBLEdBQU1ELElBQUEsQ0FBS0MsR0FBQSxDQUFJO0lBQ25CL25CLElBQUEsQ0FBSytTLEtBQUEsQ0FBTTRULFlBQUEsR0FBZW9CLEdBQUE7SUFDMUIvbkIsSUFBQSxDQUFLK1MsS0FBQSxDQUFNNlQsMkJBQUEsR0FBOEI5SixVQUFBLENBQVcsTUFBTTtNQUN0RCxJQUFJOWMsSUFBQSxDQUFLK1MsS0FBQSxDQUFNNFQsWUFBQSxJQUFnQm9CLEdBQUEsRUFBSztRQUNoQy9uQixJQUFBLENBQUtHLFFBQUEsQ0FBUyxpQkFBaUJrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXJILElBQUEsRUFBTTNFLFFBQUEsQ0FBUyxJQUFJLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFMkUsSUFBQSxDQUFLK1MsS0FBQSxDQUFNNFQsWUFBQSxHQUFlO01BQzlCO0lBQ0osR0FBRyxHQUFHO0VBQ1YsV0FDUzNtQixJQUFBLENBQUtHLFFBQUEsQ0FBUyxpQkFBaUJrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXJILElBQUEsRUFBTXhFLEtBQUssQ0FBQyxLQUFLNmtCLGNBQUEsQ0FBZXJnQixJQUFBLEVBQU14RSxLQUFLLEdBQUc7SUFDekZBLEtBQUEsQ0FBTW10QixjQUFBLENBQWU7RUFDekIsT0FDSztJQUNEZCxrQkFBQSxDQUFtQjduQixJQUFBLEVBQU0sS0FBSztFQUNsQztBQUNKO0FBQ0ErbEIsWUFBQSxDQUFhNkMsS0FBQSxHQUFRLENBQUM1b0IsSUFBQSxFQUFNeEUsS0FBQSxLQUFVO0VBQ2xDLElBQUlBLEtBQUEsQ0FBTUYsT0FBQSxJQUFXLElBQ2pCMEUsSUFBQSxDQUFLK1MsS0FBQSxDQUFNcU4sUUFBQSxHQUFXO0FBQzlCO0FBQ0EyRixZQUFBLENBQWE4QyxRQUFBLEdBQVcsQ0FBQzdvQixJQUFBLEVBQU13b0IsTUFBQSxLQUFXO0VBQ3RDLElBQUlodEIsS0FBQSxHQUFRZ3RCLE1BQUE7RUFDWixJQUFJQyxtQkFBQSxDQUFvQnpvQixJQUFBLEVBQU14RSxLQUFLLEtBQUssQ0FBQ0EsS0FBQSxDQUFNc3RCLFFBQUEsSUFDM0N0dEIsS0FBQSxDQUFNeWtCLE9BQUEsSUFBVyxDQUFDemtCLEtBQUEsQ0FBTTJrQixNQUFBLElBQVVsaUIsR0FBQSxJQUFPekMsS0FBQSxDQUFNMGtCLE9BQUEsRUFDL0M7RUFDSixJQUFJbGdCLElBQUEsQ0FBS0csUUFBQSxDQUFTLGtCQUFrQmtILENBQUEsSUFBS0EsQ0FBQSxDQUFFckgsSUFBQSxFQUFNeEUsS0FBSyxDQUFDLEdBQUc7SUFDdERBLEtBQUEsQ0FBTW10QixjQUFBLENBQWU7SUFDckI7RUFDSjtFQUNBLElBQUlqaEIsR0FBQSxHQUFNMUgsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQTtFQUNyQixJQUFJLEVBQUVELEdBQUEsWUFBZWhRLHdCQUFBLENBQUFtYixhQUFBLEtBQWtCLENBQUNuTCxHQUFBLENBQUlHLEtBQUEsQ0FBTThYLFVBQUEsQ0FBV2pZLEdBQUEsQ0FBSUksR0FBRyxHQUFHO0lBQ25FLElBQUlpRyxJQUFBLEdBQU9nYixNQUFBLENBQU9DLFlBQUEsQ0FBYXh0QixLQUFBLENBQU1zdEIsUUFBUTtJQUM3QyxJQUFJRyxLQUFBLEdBQVFBLENBQUEsS0FBTWpwQixJQUFBLENBQUt3RixLQUFBLENBQU1vWSxFQUFBLENBQUdzTCxVQUFBLENBQVduYixJQUFJLEVBQUU4UCxjQUFBLENBQWU7SUFDaEUsSUFBSSxDQUFDLFNBQVNoa0IsSUFBQSxDQUFLa1UsSUFBSSxLQUFLLENBQUMvTixJQUFBLENBQUtHLFFBQUEsQ0FBUyxtQkFBbUJrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXJILElBQUEsRUFBTTBILEdBQUEsQ0FBSUcsS0FBQSxDQUFNeEwsR0FBQSxFQUFLcUwsR0FBQSxDQUFJSSxHQUFBLENBQUl6TCxHQUFBLEVBQUswUixJQUFBLEVBQU1rYixLQUFLLENBQUMsR0FDL0dqcEIsSUFBQSxDQUFLMmQsUUFBQSxDQUFTc0wsS0FBQSxDQUFNLENBQUM7SUFDekJ6dEIsS0FBQSxDQUFNbXRCLGNBQUEsQ0FBZTtFQUN6QjtBQUNKO0FBQ0EsU0FBU1EsWUFBWTN0QixLQUFBLEVBQU87RUFBRSxPQUFPO0lBQUVxRCxJQUFBLEVBQU1yRCxLQUFBLENBQU00dEIsT0FBQTtJQUFTcHFCLEdBQUEsRUFBS3hELEtBQUEsQ0FBTTZ0QjtFQUFRO0FBQUc7QUFDbEYsU0FBU0MsT0FBTzl0QixLQUFBLEVBQU8rdEIsS0FBQSxFQUFPO0VBQzFCLElBQUk3bEIsRUFBQSxHQUFLNmxCLEtBQUEsQ0FBTXJ0QixDQUFBLEdBQUlWLEtBQUEsQ0FBTTR0QixPQUFBO0lBQVNJLEVBQUEsR0FBS0QsS0FBQSxDQUFNcHRCLENBQUEsR0FBSVgsS0FBQSxDQUFNNnRCLE9BQUE7RUFDdkQsT0FBTzNsQixFQUFBLEdBQUtBLEVBQUEsR0FBSzhsQixFQUFBLEdBQUtBLEVBQUEsR0FBSztBQUMvQjtBQUNBLFNBQVNDLG9CQUFvQnpwQixJQUFBLEVBQU0wcEIsUUFBQSxFQUFVcnRCLEdBQUEsRUFBS3NKLE1BQUEsRUFBUW5LLEtBQUEsRUFBTztFQUM3RCxJQUFJbUssTUFBQSxJQUFVLElBQ1YsT0FBTztFQUNYLElBQUlpQyxJQUFBLEdBQU81SCxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLENBQUlnSyxPQUFBLENBQVFwQixNQUFNO0VBQ3hDLFNBQVN0RCxDQUFBLEdBQUl1RixJQUFBLENBQUtxQixLQUFBLEdBQVEsR0FBRzVHLENBQUEsR0FBSSxHQUFHQSxDQUFBLElBQUs7SUFDckMsSUFBSXJDLElBQUEsQ0FBS0csUUFBQSxDQUFTdXBCLFFBQUEsRUFBVXJpQixDQUFBLElBQUtoRixDQUFBLEdBQUl1RixJQUFBLENBQUtxQixLQUFBLEdBQVE1QixDQUFBLENBQUVySCxJQUFBLEVBQU0zRCxHQUFBLEVBQUt1TCxJQUFBLENBQUtzVyxTQUFBLEVBQVd0VyxJQUFBLENBQUtqRCxNQUFBLENBQU90QyxDQUFDLEdBQUc3RyxLQUFBLEVBQU8sSUFBSSxJQUNwRzZMLENBQUEsQ0FBRXJILElBQUEsRUFBTTNELEdBQUEsRUFBS3VMLElBQUEsQ0FBSzdQLElBQUEsQ0FBS3NLLENBQUMsR0FBR3VGLElBQUEsQ0FBS2pELE1BQUEsQ0FBT3RDLENBQUMsR0FBRzdHLEtBQUEsRUFBTyxLQUFLLENBQUMsR0FDMUQsT0FBTztFQUNmO0VBQ0EsT0FBTztBQUNYO0FBQ0EsU0FBU211QixnQkFBZ0IzcEIsSUFBQSxFQUFNMkgsU0FBQSxFQUFXMFMsTUFBQSxFQUFRO0VBQzlDLElBQUksQ0FBQ3JhLElBQUEsQ0FBSzRwQixPQUFBLEVBQ041cEIsSUFBQSxDQUFLeUMsS0FBQSxDQUFNO0VBQ2YsSUFBSXpDLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVThHLEVBQUEsQ0FBRzlHLFNBQVMsR0FDakM7RUFDSixJQUFJaVcsRUFBQSxHQUFLNWQsSUFBQSxDQUFLd0YsS0FBQSxDQUFNb1ksRUFBQSxDQUFHblIsWUFBQSxDQUFhOUUsU0FBUztFQUM3QyxJQUFJMFMsTUFBQSxJQUFVLFdBQ1Z1RCxFQUFBLENBQUdpTSxPQUFBLENBQVEsV0FBVyxJQUFJO0VBQzlCN3BCLElBQUEsQ0FBSzJkLFFBQUEsQ0FBU0MsRUFBRTtBQUNwQjtBQUNBLFNBQVNrTSxrQkFBa0I5cEIsSUFBQSxFQUFNMkYsTUFBQSxFQUFRO0VBQ3JDLElBQUlBLE1BQUEsSUFBVSxJQUNWLE9BQU87RUFDWCxJQUFJaUMsSUFBQSxHQUFPNUgsSUFBQSxDQUFLd0YsS0FBQSxDQUFNekksR0FBQSxDQUFJZ0ssT0FBQSxDQUFRcEIsTUFBTTtJQUFHNU4sSUFBQSxHQUFPNlAsSUFBQSxDQUFLc1csU0FBQTtFQUN2RCxJQUFJbm1CLElBQUEsSUFBUUEsSUFBQSxDQUFLbWMsTUFBQSxJQUFVeGMsd0JBQUEsQ0FBQThpQixhQUFBLENBQWNDLFlBQUEsQ0FBYTFpQixJQUFJLEdBQUc7SUFDekQ0eEIsZUFBQSxDQUFnQjNwQixJQUFBLEVBQU0sSUFBSXRJLHdCQUFBLENBQUE4aUIsYUFBQSxDQUFjNVMsSUFBSSxHQUFHLFNBQVM7SUFDeEQsT0FBTztFQUNYO0VBQ0EsT0FBTztBQUNYO0FBQ0EsU0FBU21pQixrQkFBa0IvcEIsSUFBQSxFQUFNMkYsTUFBQSxFQUFRO0VBQ3JDLElBQUlBLE1BQUEsSUFBVSxJQUNWLE9BQU87RUFDWCxJQUFJK0IsR0FBQSxHQUFNMUgsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQTtJQUFXcWlCLFlBQUE7SUFBY0MsUUFBQTtFQUM5QyxJQUFJdmlCLEdBQUEsWUFBZWhRLHdCQUFBLENBQUE4aUIsYUFBQSxFQUNmd1AsWUFBQSxHQUFldGlCLEdBQUEsQ0FBSTNQLElBQUE7RUFDdkIsSUFBSTZQLElBQUEsR0FBTzVILElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsQ0FBSWdLLE9BQUEsQ0FBUXBCLE1BQU07RUFDeEMsU0FBU3RELENBQUEsR0FBSXVGLElBQUEsQ0FBS3FCLEtBQUEsR0FBUSxHQUFHNUcsQ0FBQSxHQUFJLEdBQUdBLENBQUEsSUFBSztJQUNyQyxJQUFJdEssSUFBQSxHQUFPc0ssQ0FBQSxHQUFJdUYsSUFBQSxDQUFLcUIsS0FBQSxHQUFRckIsSUFBQSxDQUFLc1csU0FBQSxHQUFZdFcsSUFBQSxDQUFLN1AsSUFBQSxDQUFLc0ssQ0FBQztJQUN4RCxJQUFJM0ssd0JBQUEsQ0FBQThpQixhQUFBLENBQWNDLFlBQUEsQ0FBYTFpQixJQUFJLEdBQUc7TUFDbEMsSUFBSWl5QixZQUFBLElBQWdCdGlCLEdBQUEsQ0FBSUcsS0FBQSxDQUFNb0IsS0FBQSxHQUFRLEtBQ2xDNUcsQ0FBQSxJQUFLcUYsR0FBQSxDQUFJRyxLQUFBLENBQU1vQixLQUFBLElBQVNyQixJQUFBLENBQUtqRCxNQUFBLENBQU8rQyxHQUFBLENBQUlHLEtBQUEsQ0FBTW9CLEtBQUEsR0FBUSxDQUFDLEtBQUt2QixHQUFBLENBQUlHLEtBQUEsQ0FBTXhMLEdBQUEsRUFDdEU0dEIsUUFBQSxHQUFXcmlCLElBQUEsQ0FBS2pELE1BQUEsQ0FBTytDLEdBQUEsQ0FBSUcsS0FBQSxDQUFNb0IsS0FBSyxPQUV0Q2doQixRQUFBLEdBQVdyaUIsSUFBQSxDQUFLakQsTUFBQSxDQUFPdEMsQ0FBQztNQUM1QjtJQUNKO0VBQ0o7RUFDQSxJQUFJNG5CLFFBQUEsSUFBWSxNQUFNO0lBQ2xCTixlQUFBLENBQWdCM3BCLElBQUEsRUFBTXRJLHdCQUFBLENBQUE4aUIsYUFBQSxDQUFjckwsTUFBQSxDQUFPblAsSUFBQSxDQUFLd0YsS0FBQSxDQUFNekksR0FBQSxFQUFLa3RCLFFBQVEsR0FBRyxTQUFTO0lBQy9FLE9BQU87RUFDWCxPQUNLO0lBQ0QsT0FBTztFQUNYO0FBQ0o7QUFDQSxTQUFTQyxrQkFBa0JscUIsSUFBQSxFQUFNM0QsR0FBQSxFQUFLc0osTUFBQSxFQUFRbkssS0FBQSxFQUFPc1ksVUFBQSxFQUFZO0VBQzdELE9BQU8yVixtQkFBQSxDQUFvQnpwQixJQUFBLEVBQU0saUJBQWlCM0QsR0FBQSxFQUFLc0osTUFBQSxFQUFRbkssS0FBSyxLQUNoRXdFLElBQUEsQ0FBS0csUUFBQSxDQUFTLGVBQWVrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXJILElBQUEsRUFBTTNELEdBQUEsRUFBS2IsS0FBSyxDQUFDLE1BQ3BEc1ksVUFBQSxHQUFhaVcsaUJBQUEsQ0FBa0IvcEIsSUFBQSxFQUFNMkYsTUFBTSxJQUFJbWtCLGlCQUFBLENBQWtCOXBCLElBQUEsRUFBTTJGLE1BQU07QUFDdEY7QUFDQSxTQUFTd2tCLGtCQUFrQm5xQixJQUFBLEVBQU0zRCxHQUFBLEVBQUtzSixNQUFBLEVBQVFuSyxLQUFBLEVBQU87RUFDakQsT0FBT2l1QixtQkFBQSxDQUFvQnpwQixJQUFBLEVBQU0sdUJBQXVCM0QsR0FBQSxFQUFLc0osTUFBQSxFQUFRbkssS0FBSyxLQUN0RXdFLElBQUEsQ0FBS0csUUFBQSxDQUFTLHFCQUFxQmtILENBQUEsSUFBS0EsQ0FBQSxDQUFFckgsSUFBQSxFQUFNM0QsR0FBQSxFQUFLYixLQUFLLENBQUM7QUFDbkU7QUFDQSxTQUFTNHVCLGtCQUFrQnBxQixJQUFBLEVBQU0zRCxHQUFBLEVBQUtzSixNQUFBLEVBQVFuSyxLQUFBLEVBQU87RUFDakQsT0FBT2l1QixtQkFBQSxDQUFvQnpwQixJQUFBLEVBQU0sdUJBQXVCM0QsR0FBQSxFQUFLc0osTUFBQSxFQUFRbkssS0FBSyxLQUN0RXdFLElBQUEsQ0FBS0csUUFBQSxDQUFTLHFCQUFxQmtILENBQUEsSUFBS0EsQ0FBQSxDQUFFckgsSUFBQSxFQUFNM0QsR0FBQSxFQUFLYixLQUFLLENBQUMsS0FDM0Q2dUIsa0JBQUEsQ0FBbUJycUIsSUFBQSxFQUFNMkYsTUFBQSxFQUFRbkssS0FBSztBQUM5QztBQUNBLFNBQVM2dUIsbUJBQW1CcnFCLElBQUEsRUFBTTJGLE1BQUEsRUFBUW5LLEtBQUEsRUFBTztFQUM3QyxJQUFJQSxLQUFBLENBQU1nckIsTUFBQSxJQUFVLEdBQ2hCLE9BQU87RUFDWCxJQUFJM3FCLElBQUEsR0FBTW1FLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUE7RUFDckIsSUFBSTRJLE1BQUEsSUFBVSxJQUFJO0lBQ2QsSUFBSTlKLElBQUEsQ0FBSW1MLGFBQUEsRUFBZTtNQUNuQjJpQixlQUFBLENBQWdCM3BCLElBQUEsRUFBTXRJLHdCQUFBLENBQUFtYixhQUFBLENBQWMxRCxNQUFBLENBQU90VCxJQUFBLEVBQUssR0FBR0EsSUFBQSxDQUFJNEosT0FBQSxDQUFRQyxJQUFJLEdBQUcsU0FBUztNQUMvRSxPQUFPO0lBQ1g7SUFDQSxPQUFPO0VBQ1g7RUFDQSxJQUFJa0MsSUFBQSxHQUFPL0wsSUFBQSxDQUFJa0wsT0FBQSxDQUFRcEIsTUFBTTtFQUM3QixTQUFTdEQsQ0FBQSxHQUFJdUYsSUFBQSxDQUFLcUIsS0FBQSxHQUFRLEdBQUc1RyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxJQUFLO0lBQ3JDLElBQUl0SyxJQUFBLEdBQU9zSyxDQUFBLEdBQUl1RixJQUFBLENBQUtxQixLQUFBLEdBQVFyQixJQUFBLENBQUtzVyxTQUFBLEdBQVl0VyxJQUFBLENBQUs3UCxJQUFBLENBQUtzSyxDQUFDO0lBQ3hELElBQUkrYixPQUFBLEdBQVV4VyxJQUFBLENBQUtqRCxNQUFBLENBQU90QyxDQUFDO0lBQzNCLElBQUl0SyxJQUFBLENBQUtpUCxhQUFBLEVBQ0wyaUIsZUFBQSxDQUFnQjNwQixJQUFBLEVBQU10SSx3QkFBQSxDQUFBbWIsYUFBQSxDQUFjMUQsTUFBQSxDQUFPdFQsSUFBQSxFQUFLdWlCLE9BQUEsR0FBVSxHQUFHQSxPQUFBLEdBQVUsSUFBSXJtQixJQUFBLENBQUswTixPQUFBLENBQVFDLElBQUksR0FBRyxTQUFTLFdBQ25HaE8sd0JBQUEsQ0FBQThpQixhQUFBLENBQWNDLFlBQUEsQ0FBYTFpQixJQUFJLEdBQ3BDNHhCLGVBQUEsQ0FBZ0IzcEIsSUFBQSxFQUFNdEksd0JBQUEsQ0FBQThpQixhQUFBLENBQWNyTCxNQUFBLENBQU90VCxJQUFBLEVBQUt1aUIsT0FBTyxHQUFHLFNBQVMsT0FFbkU7SUFDSixPQUFPO0VBQ1g7QUFDSjtBQUNBLFNBQVNrTSxjQUFjdHFCLElBQUEsRUFBTTtFQUN6QixPQUFPdXFCLGNBQUEsQ0FBZXZxQixJQUFJO0FBQzlCO0FBQ0EsSUFBTXdxQixrQkFBQSxHQUFxQnZzQixHQUFBLEdBQU0sWUFBWTtBQUM3QzZuQixRQUFBLENBQVMyRSxTQUFBLEdBQVksQ0FBQ3pxQixJQUFBLEVBQU13b0IsTUFBQSxLQUFXO0VBQ25DLElBQUlodEIsS0FBQSxHQUFRZ3RCLE1BQUE7RUFDWnhvQixJQUFBLENBQUsrUyxLQUFBLENBQU1xTixRQUFBLEdBQVc1a0IsS0FBQSxDQUFNNGtCLFFBQUE7RUFDNUIsSUFBSXNLLE9BQUEsR0FBVUosYUFBQSxDQUFjdHFCLElBQUk7RUFDaEMsSUFBSStuQixHQUFBLEdBQU1ELElBQUEsQ0FBS0MsR0FBQSxDQUFJO0lBQUd2YSxJQUFBLEdBQU87RUFDN0IsSUFBSXVhLEdBQUEsR0FBTS9uQixJQUFBLENBQUsrUyxLQUFBLENBQU11VCxTQUFBLENBQVVDLElBQUEsR0FBTyxPQUFPK0MsTUFBQSxDQUFPOXRCLEtBQUEsRUFBT3dFLElBQUEsQ0FBSytTLEtBQUEsQ0FBTXVULFNBQVMsS0FBSyxDQUFDOXFCLEtBQUEsQ0FBTWd2QixrQkFBQSxLQUN2RnhxQixJQUFBLENBQUsrUyxLQUFBLENBQU11VCxTQUFBLENBQVVFLE1BQUEsSUFBVWhyQixLQUFBLENBQU1nckIsTUFBQSxFQUFRO0lBQzdDLElBQUl4bUIsSUFBQSxDQUFLK1MsS0FBQSxDQUFNdVQsU0FBQSxDQUFVOVksSUFBQSxJQUFRLGVBQzdCQSxJQUFBLEdBQU8sdUJBQ0Z4TixJQUFBLENBQUsrUyxLQUFBLENBQU11VCxTQUFBLENBQVU5WSxJQUFBLElBQVEsZUFDbENBLElBQUEsR0FBTztFQUNmO0VBQ0F4TixJQUFBLENBQUsrUyxLQUFBLENBQU11VCxTQUFBLEdBQVk7SUFBRUMsSUFBQSxFQUFNd0IsR0FBQTtJQUFLN3JCLENBQUEsRUFBR1YsS0FBQSxDQUFNNHRCLE9BQUE7SUFBU2p0QixDQUFBLEVBQUdYLEtBQUEsQ0FBTTZ0QixPQUFBO0lBQVM3YixJQUFBO0lBQU1nWixNQUFBLEVBQVFockIsS0FBQSxDQUFNZ3JCO0VBQU87RUFDbkcsSUFBSW5xQixHQUFBLEdBQU0yRCxJQUFBLENBQUtpRixXQUFBLENBQVlra0IsV0FBQSxDQUFZM3RCLEtBQUssQ0FBQztFQUM3QyxJQUFJLENBQUNhLEdBQUEsRUFDRDtFQUNKLElBQUltUixJQUFBLElBQVEsZUFBZTtJQUN2QixJQUFJeE4sSUFBQSxDQUFLK1MsS0FBQSxDQUFNd0ksU0FBQSxFQUNYdmIsSUFBQSxDQUFLK1MsS0FBQSxDQUFNd0ksU0FBQSxDQUFVb1AsSUFBQSxDQUFLO0lBQzlCM3FCLElBQUEsQ0FBSytTLEtBQUEsQ0FBTXdJLFNBQUEsR0FBWSxJQUFJcVAsU0FBQSxDQUFVNXFCLElBQUEsRUFBTTNELEdBQUEsRUFBS2IsS0FBQSxFQUFPLENBQUMsQ0FBQ2t2QixPQUFPO0VBQ3BFLFlBQ1VsZCxJQUFBLElBQVEsZ0JBQWdCMmMsaUJBQUEsR0FBb0JDLGlCQUFBLEVBQW1CcHFCLElBQUEsRUFBTTNELEdBQUEsQ0FBSUEsR0FBQSxFQUFLQSxHQUFBLENBQUlzSixNQUFBLEVBQVFuSyxLQUFLLEdBQUc7SUFDeEdBLEtBQUEsQ0FBTW10QixjQUFBLENBQWU7RUFDekIsT0FDSztJQUNEZCxrQkFBQSxDQUFtQjduQixJQUFBLEVBQU0sU0FBUztFQUN0QztBQUNKO0FBQ0EsSUFBTTRxQixTQUFBLEdBQU4sTUFBZ0I7RUFDWjNnQixZQUFZakssSUFBQSxFQUFNM0QsR0FBQSxFQUFLYixLQUFBLEVBQU9rdkIsT0FBQSxFQUFTO0lBQ25DLEtBQUsxcUIsSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBSzNELEdBQUEsR0FBTUEsR0FBQTtJQUNYLEtBQUtiLEtBQUEsR0FBUUEsS0FBQTtJQUNiLEtBQUtrdkIsT0FBQSxHQUFVQSxPQUFBO0lBQ2YsS0FBSzlPLG9CQUFBLEdBQXVCO0lBQzVCLEtBQUtpUCxTQUFBLEdBQVk7SUFDakIsS0FBS0MsUUFBQSxHQUFXOXFCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUE7SUFDM0IsS0FBSytXLFVBQUEsR0FBYSxDQUFDLENBQUN0WSxLQUFBLENBQU1ndkIsa0JBQUE7SUFDMUIsS0FBS2hQLFlBQUEsR0FBZWhnQixLQUFBLENBQU00a0IsUUFBQTtJQUMxQixJQUFJL21CLFVBQUEsRUFBWTB4QixTQUFBO0lBQ2hCLElBQUkxdUIsR0FBQSxDQUFJc0osTUFBQSxHQUFTLElBQUk7TUFDakJ0TSxVQUFBLEdBQWEyRyxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLENBQUlpdUIsTUFBQSxDQUFPM3VCLEdBQUEsQ0FBSXNKLE1BQU07TUFDN0NvbEIsU0FBQSxHQUFZMXVCLEdBQUEsQ0FBSXNKLE1BQUE7SUFDcEIsT0FDSztNQUNELElBQUlpQyxJQUFBLEdBQU81SCxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLENBQUlnSyxPQUFBLENBQVExSyxHQUFBLENBQUlBLEdBQUc7TUFDekNoRCxVQUFBLEdBQWF1TyxJQUFBLENBQUt6UCxNQUFBO01BQ2xCNHlCLFNBQUEsR0FBWW5qQixJQUFBLENBQUtxQixLQUFBLEdBQVFyQixJQUFBLENBQUtqRCxNQUFBLENBQU8sSUFBSTtJQUM3QztJQUNBLE1BQU1vQixNQUFBLEdBQVMya0IsT0FBQSxHQUFVLE9BQU9sdkIsS0FBQSxDQUFNdUssTUFBQTtJQUN0QyxNQUFNc1IsVUFBQSxHQUFhdFIsTUFBQSxHQUFTL0YsSUFBQSxDQUFLa0UsT0FBQSxDQUFRSyxXQUFBLENBQVl3QixNQUFBLEVBQVEsSUFBSSxJQUFJO0lBQ3JFLEtBQUtBLE1BQUEsR0FBU3NSLFVBQUEsSUFBY0EsVUFBQSxDQUFXM2MsR0FBQSxDQUFJckMsUUFBQSxJQUFZLElBQUlnZixVQUFBLENBQVczYyxHQUFBLEdBQU07SUFDNUUsSUFBSTtNQUFFaU47SUFBVSxJQUFJM0gsSUFBQSxDQUFLd0YsS0FBQTtJQUN6QixJQUFJaEssS0FBQSxDQUFNZ3JCLE1BQUEsSUFBVSxLQUNoQm50QixVQUFBLENBQVdtVSxJQUFBLENBQUtVLElBQUEsQ0FBSzlJLFNBQUEsSUFBYS9MLFVBQUEsQ0FBV21VLElBQUEsQ0FBS1UsSUFBQSxDQUFLK2MsVUFBQSxLQUFlLFNBQ3RFdGpCLFNBQUEsWUFBcUJqUSx3QkFBQSxDQUFBOGlCLGFBQUEsSUFBaUI3UyxTQUFBLENBQVVsUCxJQUFBLElBQVFzeUIsU0FBQSxJQUFhcGpCLFNBQUEsQ0FBVWpQLEVBQUEsR0FBS3F5QixTQUFBLEVBQ3BGLEtBQUtGLFNBQUEsR0FBWTtNQUNiOXlCLElBQUEsRUFBTXNCLFVBQUE7TUFDTmdELEdBQUEsRUFBSzB1QixTQUFBO01BQ0xHLE9BQUEsRUFBUyxDQUFDLEVBQUUsS0FBS25sQixNQUFBLElBQVUsQ0FBQyxLQUFLQSxNQUFBLENBQU9YLFNBQUE7TUFDeEMrbEIsYUFBQSxFQUFlLENBQUMsRUFBRSxLQUFLcGxCLE1BQUEsSUFBVXRJLEtBQUEsSUFBUyxDQUFDLEtBQUtzSSxNQUFBLENBQU9zSyxZQUFBLENBQWEsaUJBQWlCO0lBQ3pGO0lBQ0osSUFBSSxLQUFLdEssTUFBQSxJQUFVLEtBQUs4a0IsU0FBQSxLQUFjLEtBQUtBLFNBQUEsQ0FBVUssT0FBQSxJQUFXLEtBQUtMLFNBQUEsQ0FBVU0sYUFBQSxHQUFnQjtNQUMzRixLQUFLbnJCLElBQUEsQ0FBSzBiLFdBQUEsQ0FBWS9NLElBQUEsQ0FBSztNQUMzQixJQUFJLEtBQUtrYyxTQUFBLENBQVVLLE9BQUEsRUFDZixLQUFLbmxCLE1BQUEsQ0FBT1gsU0FBQSxHQUFZO01BQzVCLElBQUksS0FBS3lsQixTQUFBLENBQVVNLGFBQUEsRUFDZnJPLFVBQUEsQ0FBVyxNQUFNO1FBQ2IsSUFBSSxLQUFLOWMsSUFBQSxDQUFLK1MsS0FBQSxDQUFNd0ksU0FBQSxJQUFhLE1BQzdCLEtBQUt4VixNQUFBLENBQU84UCxZQUFBLENBQWEsbUJBQW1CLE9BQU87TUFDM0QsR0FBRyxFQUFFO01BQ1QsS0FBSzdWLElBQUEsQ0FBSzBiLFdBQUEsQ0FBWW5ULEtBQUEsQ0FBTTtJQUNoQztJQUNBdkksSUFBQSxDQUFLMEIsSUFBQSxDQUFLbWIsZ0JBQUEsQ0FBaUIsV0FBVyxLQUFLdU8sRUFBQSxHQUFLLEtBQUtBLEVBQUEsQ0FBR0MsSUFBQSxDQUFLLElBQUksQ0FBQztJQUNsRXJyQixJQUFBLENBQUswQixJQUFBLENBQUttYixnQkFBQSxDQUFpQixhQUFhLEtBQUt5TyxJQUFBLEdBQU8sS0FBS0EsSUFBQSxDQUFLRCxJQUFBLENBQUssSUFBSSxDQUFDO0lBQ3hFeEQsa0JBQUEsQ0FBbUI3bkIsSUFBQSxFQUFNLFNBQVM7RUFDdEM7RUFDQTJxQixLQUFBLEVBQU87SUFDSCxLQUFLM3FCLElBQUEsQ0FBSzBCLElBQUEsQ0FBS2liLG1CQUFBLENBQW9CLFdBQVcsS0FBS3lPLEVBQUU7SUFDckQsS0FBS3ByQixJQUFBLENBQUswQixJQUFBLENBQUtpYixtQkFBQSxDQUFvQixhQUFhLEtBQUsyTyxJQUFJO0lBQ3pELElBQUksS0FBS1QsU0FBQSxJQUFhLEtBQUs5a0IsTUFBQSxFQUFRO01BQy9CLEtBQUsvRixJQUFBLENBQUswYixXQUFBLENBQVkvTSxJQUFBLENBQUs7TUFDM0IsSUFBSSxLQUFLa2MsU0FBQSxDQUFVSyxPQUFBLEVBQ2YsS0FBS25sQixNQUFBLENBQU9rTyxlQUFBLENBQWdCLFdBQVc7TUFDM0MsSUFBSSxLQUFLNFcsU0FBQSxDQUFVTSxhQUFBLEVBQ2YsS0FBS3BsQixNQUFBLENBQU9rTyxlQUFBLENBQWdCLGlCQUFpQjtNQUNqRCxLQUFLalUsSUFBQSxDQUFLMGIsV0FBQSxDQUFZblQsS0FBQSxDQUFNO0lBQ2hDO0lBQ0EsSUFBSSxLQUFLcVQsb0JBQUEsRUFDTGtCLFVBQUEsQ0FBVyxNQUFNekIsY0FBQSxDQUFlLEtBQUtyYixJQUFJLENBQUM7SUFDOUMsS0FBS0EsSUFBQSxDQUFLK1MsS0FBQSxDQUFNd0ksU0FBQSxHQUFZO0VBQ2hDO0VBQ0E2UCxHQUFHNXZCLEtBQUEsRUFBTztJQUNOLEtBQUttdkIsSUFBQSxDQUFLO0lBQ1YsSUFBSSxDQUFDLEtBQUszcUIsSUFBQSxDQUFLdEYsR0FBQSxDQUFJa0gsUUFBQSxDQUFTcEcsS0FBQSxDQUFNdUssTUFBTSxHQUNwQztJQUNKLElBQUkxSixHQUFBLEdBQU0sS0FBS0EsR0FBQTtJQUNmLElBQUksS0FBSzJELElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsSUFBTyxLQUFLK3RCLFFBQUEsRUFDNUJ6dUIsR0FBQSxHQUFNLEtBQUsyRCxJQUFBLENBQUtpRixXQUFBLENBQVlra0IsV0FBQSxDQUFZM3RCLEtBQUssQ0FBQztJQUNsRCxLQUFLK3ZCLGtCQUFBLENBQW1CL3ZCLEtBQUs7SUFDN0IsSUFBSSxLQUFLZ2dCLFlBQUEsSUFBZ0IsQ0FBQ25mLEdBQUEsRUFBSztNQUMzQndyQixrQkFBQSxDQUFtQixLQUFLN25CLElBQUEsRUFBTSxTQUFTO0lBQzNDLFdBQ1NrcUIsaUJBQUEsQ0FBa0IsS0FBS2xxQixJQUFBLEVBQU0zRCxHQUFBLENBQUlBLEdBQUEsRUFBS0EsR0FBQSxDQUFJc0osTUFBQSxFQUFRbkssS0FBQSxFQUFPLEtBQUtzWSxVQUFVLEdBQUc7TUFDaEZ0WSxLQUFBLENBQU1tdEIsY0FBQSxDQUFlO0lBQ3pCLFdBQ1NudEIsS0FBQSxDQUFNZ3JCLE1BQUEsSUFBVSxNQUNwQixLQUFLa0UsT0FBQSxJQUVEN3NCLE1BQUEsSUFBVSxLQUFLZ3RCLFNBQUEsSUFBYSxDQUFDLEtBQUtBLFNBQUEsQ0FBVTl5QixJQUFBLENBQUttYyxNQUFBLElBUWpEdlcsTUFBQSxJQUFVLENBQUMsS0FBS3FDLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVTJVLE9BQUEsSUFDbEMvZixJQUFBLENBQUtDLEdBQUEsQ0FBSUQsSUFBQSxDQUFLMmlCLEdBQUEsQ0FBSTdpQixHQUFBLENBQUlBLEdBQUEsR0FBTSxLQUFLMkQsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVbFAsSUFBSSxHQUFHOEQsSUFBQSxDQUFLMmlCLEdBQUEsQ0FBSTdpQixHQUFBLENBQUlBLEdBQUEsR0FBTSxLQUFLMkQsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFValAsRUFBRSxDQUFDLEtBQUssSUFBSztNQUMvSGl4QixlQUFBLENBQWdCLEtBQUszcEIsSUFBQSxFQUFNdEksd0JBQUEsQ0FBQWdqQixTQUFBLENBQVU4RSxJQUFBLENBQUssS0FBS3hmLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsQ0FBSWdLLE9BQUEsQ0FBUTFLLEdBQUEsQ0FBSUEsR0FBRyxDQUFDLEdBQUcsU0FBUztNQUMxRmIsS0FBQSxDQUFNbXRCLGNBQUEsQ0FBZTtJQUN6QixPQUNLO01BQ0RkLGtCQUFBLENBQW1CLEtBQUs3bkIsSUFBQSxFQUFNLFNBQVM7SUFDM0M7RUFDSjtFQUNBc3JCLEtBQUs5dkIsS0FBQSxFQUFPO0lBQ1IsS0FBSyt2QixrQkFBQSxDQUFtQi92QixLQUFLO0lBQzdCcXNCLGtCQUFBLENBQW1CLEtBQUs3bkIsSUFBQSxFQUFNLFNBQVM7SUFDdkMsSUFBSXhFLEtBQUEsQ0FBTWd3QixPQUFBLElBQVcsR0FDakIsS0FBS2IsSUFBQSxDQUFLO0VBQ2xCO0VBQ0FZLG1CQUFtQi92QixLQUFBLEVBQU87SUFDdEIsSUFBSSxDQUFDLEtBQUtnZ0IsWUFBQSxLQUFpQmpmLElBQUEsQ0FBSzJpQixHQUFBLENBQUksS0FBSzFqQixLQUFBLENBQU1VLENBQUEsR0FBSVYsS0FBQSxDQUFNNHRCLE9BQU8sSUFBSSxLQUNoRTdzQixJQUFBLENBQUsyaUIsR0FBQSxDQUFJLEtBQUsxakIsS0FBQSxDQUFNVyxDQUFBLEdBQUlYLEtBQUEsQ0FBTTZ0QixPQUFPLElBQUksSUFDekMsS0FBSzdOLFlBQUEsR0FBZTtFQUM1QjtBQUNKO0FBQ0FzSyxRQUFBLENBQVNHLFVBQUEsR0FBYWptQixJQUFBLElBQVE7RUFDMUJBLElBQUEsQ0FBSytTLEtBQUEsQ0FBTStULFNBQUEsR0FBWWdCLElBQUEsQ0FBS0MsR0FBQSxDQUFJO0VBQ2hDdUMsYUFBQSxDQUFjdHFCLElBQUk7RUFDbEI2bkIsa0JBQUEsQ0FBbUI3bkIsSUFBQSxFQUFNLFNBQVM7QUFDdEM7QUFDQThsQixRQUFBLENBQVNJLFNBQUEsR0FBWWxtQixJQUFBLElBQVE7RUFDekJBLElBQUEsQ0FBSytTLEtBQUEsQ0FBTStULFNBQUEsR0FBWWdCLElBQUEsQ0FBS0MsR0FBQSxDQUFJO0VBQ2hDRixrQkFBQSxDQUFtQjduQixJQUFBLEVBQU0sU0FBUztBQUN0QztBQUNBOGxCLFFBQUEsQ0FBUzJGLFdBQUEsR0FBY3pyQixJQUFBLElBQVFzcUIsYUFBQSxDQUFjdHFCLElBQUk7QUFDakQsU0FBU3lvQixvQkFBb0J6b0IsSUFBQSxFQUFNeEUsS0FBQSxFQUFPO0VBQ3RDLElBQUl3RSxJQUFBLENBQUttUixTQUFBLEVBQ0wsT0FBTztFQVdYLElBQUl0VCxNQUFBLElBQVV0QixJQUFBLENBQUsyaUIsR0FBQSxDQUFJMWpCLEtBQUEsQ0FBTWt3QixTQUFBLEdBQVkxckIsSUFBQSxDQUFLK1MsS0FBQSxDQUFNa1Usa0JBQWtCLElBQUksS0FBSztJQUMzRWpuQixJQUFBLENBQUsrUyxLQUFBLENBQU1rVSxrQkFBQSxHQUFxQjtJQUNoQyxPQUFPO0VBQ1g7RUFDQSxPQUFPO0FBQ1g7QUFFQSxJQUFNMEUsa0JBQUEsR0FBcUJ2dEIsT0FBQSxHQUFVLE1BQU87QUFDNUMybkIsWUFBQSxDQUFhNkYsZ0JBQUEsR0FBbUI3RixZQUFBLENBQWE4RixpQkFBQSxHQUFvQjdyQixJQUFBLElBQVE7RUFDckUsSUFBSSxDQUFDQSxJQUFBLENBQUttUixTQUFBLEVBQVc7SUFDakJuUixJQUFBLENBQUswYixXQUFBLENBQVlvUSxLQUFBLENBQU07SUFDdkIsSUFBSTtRQUFFdG1CO01BQU0sSUFBSXhGLElBQUE7TUFBTTRILElBQUEsR0FBT3BDLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVUcsR0FBQTtJQUM3QyxJQUFJdEMsS0FBQSxDQUFNbUMsU0FBQSxZQUFxQmpRLHdCQUFBLENBQUFtYixhQUFBLEtBQzFCck4sS0FBQSxDQUFNdW1CLFdBQUEsSUFDRixDQUFDbmtCLElBQUEsQ0FBS29XLFVBQUEsSUFBY3BXLElBQUEsQ0FBS1MsWUFBQSxJQUFnQlQsSUFBQSxDQUFLcVcsVUFBQSxDQUFXdE0sS0FBQSxDQUFNcWEsSUFBQSxDQUFLM1YsQ0FBQSxJQUFLQSxDQUFBLENBQUU3SSxJQUFBLENBQUtVLElBQUEsQ0FBSytkLFNBQUEsS0FBYyxLQUFLLElBQUs7TUFFbEhqc0IsSUFBQSxDQUFLa3NCLFVBQUEsR0FBYWxzQixJQUFBLENBQUt3RixLQUFBLENBQU11bUIsV0FBQSxJQUFlbmtCLElBQUEsQ0FBSytKLEtBQUEsQ0FBTTtNQUN2RDRZLGNBQUEsQ0FBZXZxQixJQUFBLEVBQU0sSUFBSTtNQUN6QkEsSUFBQSxDQUFLa3NCLFVBQUEsR0FBYTtJQUN0QixPQUNLO01BQ0QzQixjQUFBLENBQWV2cUIsSUFBQSxFQUFNLENBQUN3RixLQUFBLENBQU1tQyxTQUFBLENBQVVtSixLQUFLO01BSTNDLElBQUlyVCxLQUFBLElBQVMrSCxLQUFBLENBQU1tQyxTQUFBLENBQVVtSixLQUFBLElBQVNsSixJQUFBLENBQUtTLFlBQUEsSUFBZ0IsQ0FBQ1QsSUFBQSxDQUFLb1csVUFBQSxJQUFjcFcsSUFBQSxDQUFLcVcsVUFBQSxDQUFXdE0sS0FBQSxDQUFNM1ksTUFBQSxFQUFRO1FBQ3pHLElBQUkwTyxHQUFBLEdBQU0xSCxJQUFBLENBQUs2SSxpQkFBQSxDQUFrQjtRQUNqQyxTQUFTOVEsSUFBQSxHQUFPMlAsR0FBQSxDQUFJek0sU0FBQSxFQUFXWixNQUFBLEdBQVNxTixHQUFBLENBQUl4TSxXQUFBLEVBQWFuRCxJQUFBLElBQVFBLElBQUEsQ0FBS00sUUFBQSxJQUFZLEtBQUtnQyxNQUFBLElBQVUsSUFBSTtVQUNqRyxJQUFJc0ssTUFBQSxHQUFTdEssTUFBQSxHQUFTLElBQUl0QyxJQUFBLENBQUt3TixTQUFBLEdBQVl4TixJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQUEsR0FBUztVQUNwRSxJQUFJLENBQUNzSyxNQUFBLEVBQ0Q7VUFDSixJQUFJQSxNQUFBLENBQU90TSxRQUFBLElBQVksR0FBRztZQUN0QixJQUFJOHpCLElBQUEsR0FBTW5zQixJQUFBLENBQUtzSSxZQUFBLENBQWE7WUFDNUIsSUFBSTZqQixJQUFBLEVBQ0FBLElBQUEsQ0FBSTdpQixRQUFBLENBQVMzRSxNQUFBLEVBQVFBLE1BQUEsQ0FBTzVMLFNBQUEsQ0FBVUMsTUFBTTtZQUNoRDtVQUNKLE9BQ0s7WUFDRGpCLElBQUEsR0FBTzRNLE1BQUE7WUFDUHRLLE1BQUEsR0FBUztVQUNiO1FBQ0o7TUFDSjtJQUNKO0lBQ0EyRixJQUFBLENBQUsrUyxLQUFBLENBQU01QixTQUFBLEdBQVk7RUFDM0I7RUFDQWliLGtCQUFBLENBQW1CcHNCLElBQUEsRUFBTTJyQixrQkFBa0I7QUFDL0M7QUFDQTVGLFlBQUEsQ0FBYXNHLGNBQUEsR0FBaUIsQ0FBQ3JzQixJQUFBLEVBQU14RSxLQUFBLEtBQVU7RUFDM0MsSUFBSXdFLElBQUEsQ0FBS21SLFNBQUEsRUFBVztJQUNoQm5SLElBQUEsQ0FBSytTLEtBQUEsQ0FBTTVCLFNBQUEsR0FBWTtJQUN2Qm5SLElBQUEsQ0FBSytTLEtBQUEsQ0FBTWtVLGtCQUFBLEdBQXFCenJCLEtBQUEsQ0FBTWt3QixTQUFBO0lBQ3RDMXJCLElBQUEsQ0FBSytTLEtBQUEsQ0FBTW9VLHlCQUFBLEdBQTRCbm5CLElBQUEsQ0FBSzBiLFdBQUEsQ0FBWTRRLGNBQUEsQ0FBZSxFQUFFdHpCLE1BQUEsR0FBU2dILElBQUEsQ0FBSytTLEtBQUEsQ0FBTW1VLGFBQUEsR0FBZ0I7SUFDN0dsbkIsSUFBQSxDQUFLK1MsS0FBQSxDQUFNQyxlQUFBLEdBQWtCO0lBQzdCLElBQUloVCxJQUFBLENBQUsrUyxLQUFBLENBQU1vVSx5QkFBQSxFQUNYb0YsT0FBQSxDQUFReGxCLE9BQUEsQ0FBUSxFQUFFeWxCLElBQUEsQ0FBSyxNQUFNeHNCLElBQUEsQ0FBSzBiLFdBQUEsQ0FBWW9RLEtBQUEsQ0FBTSxDQUFDO0lBQ3pEOXJCLElBQUEsQ0FBSytTLEtBQUEsQ0FBTW1VLGFBQUE7SUFDWGtGLGtCQUFBLENBQW1CcHNCLElBQUEsRUFBTSxFQUFFO0VBQy9CO0FBQ0o7QUFDQSxTQUFTb3NCLG1CQUFtQnBzQixJQUFBLEVBQU15c0IsS0FBQSxFQUFPO0VBQ3JDeEUsWUFBQSxDQUFham9CLElBQUEsQ0FBSytTLEtBQUEsQ0FBTWlVLGdCQUFnQjtFQUN4QyxJQUFJeUYsS0FBQSxHQUFRLElBQ1J6c0IsSUFBQSxDQUFLK1MsS0FBQSxDQUFNaVUsZ0JBQUEsR0FBbUJsSyxVQUFBLENBQVcsTUFBTXlOLGNBQUEsQ0FBZXZxQixJQUFJLEdBQUd5c0IsS0FBSztBQUNsRjtBQUNBLFNBQVNDLGlCQUFpQjFzQixJQUFBLEVBQU07RUFDNUIsSUFBSUEsSUFBQSxDQUFLbVIsU0FBQSxFQUFXO0lBQ2hCblIsSUFBQSxDQUFLK1MsS0FBQSxDQUFNNUIsU0FBQSxHQUFZO0lBQ3ZCblIsSUFBQSxDQUFLK1MsS0FBQSxDQUFNa1Usa0JBQUEsR0FBcUIwRix3QkFBQSxDQUF5QjtFQUM3RDtFQUNBLE9BQU8zc0IsSUFBQSxDQUFLK1MsS0FBQSxDQUFNTSxnQkFBQSxDQUFpQnJhLE1BQUEsR0FBUyxHQUN4Q2dILElBQUEsQ0FBSytTLEtBQUEsQ0FBTU0sZ0JBQUEsQ0FBaUI0RCxHQUFBLENBQUksRUFBRXBKLGdCQUFBLENBQWlCO0FBQzNEO0FBQ0EsU0FBUytlLG9CQUFvQjVzQixJQUFBLEVBQU07RUFDL0IsSUFBSTBILEdBQUEsR0FBTTFILElBQUEsQ0FBSzZJLGlCQUFBLENBQWtCO0VBQ2pDLElBQUksQ0FBQ25CLEdBQUEsQ0FBSXpNLFNBQUEsRUFDTCxPQUFPO0VBQ1gsSUFBSTR4QixVQUFBLEdBQWF6eUIsZ0JBQUEsQ0FBaUJzTixHQUFBLENBQUl6TSxTQUFBLEVBQVd5TSxHQUFBLENBQUl4TSxXQUFXO0VBQ2hFLElBQUk0eEIsU0FBQSxHQUFZeHlCLGVBQUEsQ0FBZ0JvTixHQUFBLENBQUl6TSxTQUFBLEVBQVd5TSxHQUFBLENBQUl4TSxXQUFXO0VBQzlELElBQUkyeEIsVUFBQSxJQUFjQyxTQUFBLElBQWFELFVBQUEsSUFBY0MsU0FBQSxFQUFXO0lBQ3BELElBQUlDLFNBQUEsR0FBWUQsU0FBQSxDQUFVNXlCLFVBQUE7TUFBWTh5QixXQUFBLEdBQWNodEIsSUFBQSxDQUFLMGIsV0FBQSxDQUFZdVIsbUJBQUE7SUFDckUsSUFBSUosVUFBQSxJQUFjRyxXQUFBLElBQWVGLFNBQUEsSUFBYUUsV0FBQSxFQUMxQyxPQUFPQSxXQUFBO0lBQ1gsSUFBSSxDQUFDRCxTQUFBLElBQWEsQ0FBQ0EsU0FBQSxDQUFVcm9CLE1BQUEsQ0FBT29vQixTQUFBLENBQVUvekIsU0FBUyxHQUFHO01BQ3RELE9BQU8rekIsU0FBQTtJQUNYLFdBQ1M5c0IsSUFBQSxDQUFLK1MsS0FBQSxDQUFNQyxlQUFBLElBQW1COFosU0FBQSxFQUFXO01BQzlDLElBQUlJLFVBQUEsR0FBYUwsVUFBQSxDQUFXM3lCLFVBQUE7TUFDNUIsSUFBSSxFQUFFLENBQUNnekIsVUFBQSxJQUFjLENBQUNBLFVBQUEsQ0FBV3hvQixNQUFBLENBQU9tb0IsVUFBQSxDQUFXOXpCLFNBQVMsSUFDeEQsT0FBTyt6QixTQUFBO0lBQ2Y7RUFDSjtFQUNBLE9BQU9ELFVBQUEsSUFBY0MsU0FBQTtBQUN6QjtBQUNBLFNBQVNILHlCQUFBLEVBQTJCO0VBQ2hDLElBQUlueEIsS0FBQSxHQUFRNUMsUUFBQSxDQUFTNkMsV0FBQSxDQUFZLE9BQU87RUFDeENELEtBQUEsQ0FBTUUsU0FBQSxDQUFVLFNBQVMsTUFBTSxJQUFJO0VBQ25DLE9BQU9GLEtBQUEsQ0FBTWt3QixTQUFBO0FBQ2pCO0FBSUEsU0FBU25CLGVBQWV2cUIsSUFBQSxFQUFNbXRCLFVBQUEsR0FBYSxPQUFPO0VBQzlDLElBQUkvdUIsT0FBQSxJQUFXNEIsSUFBQSxDQUFLMGIsV0FBQSxDQUFZMFIsWUFBQSxJQUFnQixHQUM1QztFQUNKcHRCLElBQUEsQ0FBSzBiLFdBQUEsQ0FBWWdOLFVBQUEsQ0FBVztFQUM1QmdFLGdCQUFBLENBQWlCMXNCLElBQUk7RUFDckIsSUFBSW10QixVQUFBLElBQWNudEIsSUFBQSxDQUFLa0UsT0FBQSxJQUFXbEUsSUFBQSxDQUFLa0UsT0FBQSxDQUFRaUcsS0FBQSxFQUFPO0lBQ2xELElBQUl6QyxHQUFBLEdBQU0wUyxnQkFBQSxDQUFpQnBhLElBQUk7TUFBR3BGLEdBQUEsR0FBTW9GLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUE7SUFDbkQsSUFBSUQsR0FBQSxJQUFPLENBQUNBLEdBQUEsQ0FBSStHLEVBQUEsQ0FBRzdULEdBQUcsR0FDbEJvRixJQUFBLENBQUsyZCxRQUFBLENBQVMzZCxJQUFBLENBQUt3RixLQUFBLENBQU1vWSxFQUFBLENBQUduUixZQUFBLENBQWEvRSxHQUFHLENBQUMsWUFDdkMxSCxJQUFBLENBQUtrc0IsVUFBQSxJQUFjaUIsVUFBQSxLQUFlLENBQUN2eUIsR0FBQSxDQUFJaU4sS0FBQSxDQUFNOVAsSUFBQSxDQUFLNkMsR0FBQSxDQUFJaU4sS0FBQSxDQUFNd2xCLFdBQUEsQ0FBWXp5QixHQUFBLENBQUlsQyxFQUFFLENBQUMsRUFBRXNPLGFBQUEsRUFDdkZoSCxJQUFBLENBQUsyZCxRQUFBLENBQVMzZCxJQUFBLENBQUt3RixLQUFBLENBQU1vWSxFQUFBLENBQUcwUCxlQUFBLENBQWdCLENBQUMsT0FFN0N0dEIsSUFBQSxDQUFLd0gsV0FBQSxDQUFZeEgsSUFBQSxDQUFLd0YsS0FBSztJQUMvQixPQUFPO0VBQ1g7RUFDQSxPQUFPO0FBQ1g7QUFDQSxTQUFTK25CLFlBQVl2dEIsSUFBQSxFQUFNdEYsR0FBQSxFQUFLO0VBRzVCLElBQUksQ0FBQ3NGLElBQUEsQ0FBS3RGLEdBQUEsQ0FBSXhDLFVBQUEsRUFDVjtFQUNKLElBQUlrVyxJQUFBLEdBQU9wTyxJQUFBLENBQUt0RixHQUFBLENBQUl4QyxVQUFBLENBQVdvVyxXQUFBLENBQVkxVixRQUFBLENBQVN5VixhQUFBLENBQWMsS0FBSyxDQUFDO0VBQ3hFRCxJQUFBLENBQUtFLFdBQUEsQ0FBWTVULEdBQUc7RUFDcEIwVCxJQUFBLENBQUs3UCxLQUFBLENBQU1nWSxPQUFBLEdBQVU7RUFDckIsSUFBSTdPLEdBQUEsR0FBTXFGLFlBQUEsQ0FBYTtJQUFHcFUsS0FBQSxHQUFRQyxRQUFBLENBQVNDLFdBQUEsQ0FBWTtFQUN2REYsS0FBQSxDQUFNNjBCLGtCQUFBLENBQW1COXlCLEdBQUc7RUFJNUJzRixJQUFBLENBQUt0RixHQUFBLENBQUkreUIsSUFBQSxDQUFLO0VBQ2QvbEIsR0FBQSxDQUFJMEYsZUFBQSxDQUFnQjtFQUNwQjFGLEdBQUEsQ0FBSTJGLFFBQUEsQ0FBUzFVLEtBQUs7RUFDbEJta0IsVUFBQSxDQUFXLE1BQU07SUFDYixJQUFJMU8sSUFBQSxDQUFLbFcsVUFBQSxFQUNMa1csSUFBQSxDQUFLbFcsVUFBQSxDQUFXa2IsV0FBQSxDQUFZaEYsSUFBSTtJQUNwQ3BPLElBQUEsQ0FBS3lDLEtBQUEsQ0FBTTtFQUNmLEdBQUcsRUFBRTtBQUNUO0FBSUEsSUFBTWlyQixrQkFBQSxHQUFzQnB3QixFQUFBLElBQU1DLFVBQUEsR0FBYSxNQUMxQ1EsR0FBQSxJQUFPUyxjQUFBLEdBQWlCO0FBQzdCc25CLFFBQUEsQ0FBU2hXLElBQUEsR0FBT2lXLFlBQUEsQ0FBYXRSLEdBQUEsR0FBTSxDQUFDelUsSUFBQSxFQUFNd29CLE1BQUEsS0FBVztFQUNqRCxJQUFJaHRCLEtBQUEsR0FBUWd0QixNQUFBO0VBQ1osSUFBSTlnQixHQUFBLEdBQU0xSCxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBO0lBQVc4TSxHQUFBLEdBQU1qWixLQUFBLENBQU1nUyxJQUFBLElBQVE7RUFDcEQsSUFBSTlGLEdBQUEsQ0FBSW9KLEtBQUEsRUFDSjtFQUVKLElBQUk2YyxJQUFBLEdBQU9ELGtCQUFBLEdBQXFCLE9BQU9seUIsS0FBQSxDQUFNb3lCLGFBQUE7RUFDN0MsSUFBSS9kLEtBQUEsR0FBUW5JLEdBQUEsQ0FBSWpDLE9BQUEsQ0FBUTtJQUFHO01BQUUvSyxHQUFBO01BQUtxVDtJQUFLLElBQUl1UyxxQkFBQSxDQUFzQnRnQixJQUFBLEVBQU02UCxLQUFLO0VBQzVFLElBQUk4ZCxJQUFBLEVBQU07SUFDTm55QixLQUFBLENBQU1tdEIsY0FBQSxDQUFlO0lBQ3JCZ0YsSUFBQSxDQUFLRSxTQUFBLENBQVU7SUFDZkYsSUFBQSxDQUFLRyxPQUFBLENBQVEsYUFBYXB6QixHQUFBLENBQUkrcUIsU0FBUztJQUN2Q2tJLElBQUEsQ0FBS0csT0FBQSxDQUFRLGNBQWMvZixJQUFJO0VBQ25DLE9BQ0s7SUFDRHdmLFdBQUEsQ0FBWXZ0QixJQUFBLEVBQU10RixHQUFHO0VBQ3pCO0VBQ0EsSUFBSStaLEdBQUEsRUFDQXpVLElBQUEsQ0FBSzJkLFFBQUEsQ0FBUzNkLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW9ZLEVBQUEsQ0FBRzBQLGVBQUEsQ0FBZ0IsRUFBRXpQLGNBQUEsQ0FBZSxFQUFFZ00sT0FBQSxDQUFRLFdBQVcsS0FBSyxDQUFDO0FBQ2hHO0FBQ0EsU0FBU2tFLGdCQUFnQmxlLEtBQUEsRUFBTztFQUM1QixPQUFPQSxLQUFBLENBQU0yUSxTQUFBLElBQWEsS0FBSzNRLEtBQUEsQ0FBTTRRLE9BQUEsSUFBVyxLQUFLNVEsS0FBQSxDQUFNcEssT0FBQSxDQUFRb00sVUFBQSxJQUFjLElBQUloQyxLQUFBLENBQU1wSyxPQUFBLENBQVFwQyxVQUFBLEdBQWE7QUFDcEg7QUFDQSxTQUFTMnFCLGFBQWFodUIsSUFBQSxFQUFNeEUsS0FBQSxFQUFPO0VBQy9CLElBQUksQ0FBQ3dFLElBQUEsQ0FBS3RGLEdBQUEsQ0FBSXhDLFVBQUEsRUFDVjtFQUNKLElBQUlxcEIsU0FBQSxHQUFZdmhCLElBQUEsQ0FBSytTLEtBQUEsQ0FBTXFOLFFBQUEsSUFBWXBnQixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVFLEtBQUEsQ0FBTTFQLE1BQUEsQ0FBT3FWLElBQUEsQ0FBS1UsSUFBQSxDQUFLdlMsSUFBQTtFQUNuRixJQUFJb0ssTUFBQSxHQUFTL0YsSUFBQSxDQUFLdEYsR0FBQSxDQUFJeEMsVUFBQSxDQUFXb1csV0FBQSxDQUFZMVYsUUFBQSxDQUFTeVYsYUFBQSxDQUFja1QsU0FBQSxHQUFZLGFBQWEsS0FBSyxDQUFDO0VBQ25HLElBQUksQ0FBQ0EsU0FBQSxFQUNEeGIsTUFBQSxDQUFPaE0sZUFBQSxHQUFrQjtFQUM3QmdNLE1BQUEsQ0FBT3hILEtBQUEsQ0FBTWdZLE9BQUEsR0FBVTtFQUN2QnhRLE1BQUEsQ0FBT3RELEtBQUEsQ0FBTTtFQUNiLElBQUl3ckIsS0FBQSxHQUFRanVCLElBQUEsQ0FBSytTLEtBQUEsQ0FBTXFOLFFBQUEsSUFBWXBnQixJQUFBLENBQUsrUyxLQUFBLENBQU1xVCxXQUFBLElBQWU7RUFDN0R0SixVQUFBLENBQVcsTUFBTTtJQUNiOWMsSUFBQSxDQUFLeUMsS0FBQSxDQUFNO0lBQ1gsSUFBSXNELE1BQUEsQ0FBTzdOLFVBQUEsRUFDUDZOLE1BQUEsQ0FBTzdOLFVBQUEsQ0FBV2tiLFdBQUEsQ0FBWXJOLE1BQU07SUFDeEMsSUFBSXdiLFNBQUEsRUFDQTJNLE9BQUEsQ0FBUWx1QixJQUFBLEVBQU0rRixNQUFBLENBQU96RyxLQUFBLEVBQU8sTUFBTTJ1QixLQUFBLEVBQU96eUIsS0FBSyxPQUU5QzB5QixPQUFBLENBQVFsdUIsSUFBQSxFQUFNK0YsTUFBQSxDQUFPMEMsV0FBQSxFQUFhMUMsTUFBQSxDQUFPMGYsU0FBQSxFQUFXd0ksS0FBQSxFQUFPenlCLEtBQUs7RUFDeEUsR0FBRyxFQUFFO0FBQ1Q7QUFDQSxTQUFTMHlCLFFBQVFsdUIsSUFBQSxFQUFNK04sSUFBQSxFQUFNdVQsSUFBQSxFQUFNNk0sV0FBQSxFQUFhM3lCLEtBQUEsRUFBTztFQUNuRCxJQUFJcVUsS0FBQSxHQUFRd1Isa0JBQUEsQ0FBbUJyaEIsSUFBQSxFQUFNK04sSUFBQSxFQUFNdVQsSUFBQSxFQUFNNk0sV0FBQSxFQUFhbnVCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVUUsS0FBSztFQUN4RixJQUFJN0gsSUFBQSxDQUFLRyxRQUFBLENBQVMsZUFBZWtILENBQUEsSUFBS0EsQ0FBQSxDQUFFckgsSUFBQSxFQUFNeEUsS0FBQSxFQUFPcVUsS0FBQSxJQUFTalksd0JBQUEsQ0FBQStwQixLQUFBLENBQU03USxLQUFLLENBQUMsR0FDdEUsT0FBTztFQUNYLElBQUksQ0FBQ2pCLEtBQUEsRUFDRCxPQUFPO0VBQ1gsSUFBSXVlLFVBQUEsR0FBYUwsZUFBQSxDQUFnQmxlLEtBQUs7RUFDdEMsSUFBSStOLEVBQUEsR0FBS3dRLFVBQUEsR0FDSHB1QixJQUFBLENBQUt3RixLQUFBLENBQU1vWSxFQUFBLENBQUd5USxvQkFBQSxDQUFxQkQsVUFBQSxFQUFZRCxXQUFXLElBQzFEbnVCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW9ZLEVBQUEsQ0FBRzBRLGdCQUFBLENBQWlCemUsS0FBSztFQUMxQzdQLElBQUEsQ0FBSzJkLFFBQUEsQ0FBU0MsRUFBQSxDQUFHQyxjQUFBLENBQWUsRUFBRWdNLE9BQUEsQ0FBUSxTQUFTLElBQUksRUFBRUEsT0FBQSxDQUFRLFdBQVcsT0FBTyxDQUFDO0VBQ3BGLE9BQU87QUFDWDtBQUNBLFNBQVMwRSxRQUFRWCxhQUFBLEVBQWU7RUFDNUIsSUFBSTdmLElBQUEsR0FBTzZmLGFBQUEsQ0FBY1ksT0FBQSxDQUFRLFlBQVksS0FBS1osYUFBQSxDQUFjWSxPQUFBLENBQVEsTUFBTTtFQUM5RSxJQUFJemdCLElBQUEsRUFDQSxPQUFPQSxJQUFBO0VBQ1gsSUFBSTBnQixJQUFBLEdBQU9iLGFBQUEsQ0FBY1ksT0FBQSxDQUFRLGVBQWU7RUFDaEQsT0FBT0MsSUFBQSxHQUFPQSxJQUFBLENBQUs3TSxPQUFBLENBQVEsVUFBVSxHQUFHLElBQUk7QUFDaEQ7QUFDQW1FLFlBQUEsQ0FBYTJJLEtBQUEsR0FBUSxDQUFDMXVCLElBQUEsRUFBTXdvQixNQUFBLEtBQVc7RUFDbkMsSUFBSWh0QixLQUFBLEdBQVFndEIsTUFBQTtFQUtaLElBQUl4b0IsSUFBQSxDQUFLbVIsU0FBQSxJQUFhLENBQUMvUyxPQUFBLEVBQ25CO0VBQ0osSUFBSXV2QixJQUFBLEdBQU9ELGtCQUFBLEdBQXFCLE9BQU9seUIsS0FBQSxDQUFNb3lCLGFBQUE7RUFDN0MsSUFBSUssS0FBQSxHQUFRanVCLElBQUEsQ0FBSytTLEtBQUEsQ0FBTXFOLFFBQUEsSUFBWXBnQixJQUFBLENBQUsrUyxLQUFBLENBQU1xVCxXQUFBLElBQWU7RUFDN0QsSUFBSXVILElBQUEsSUFBUU8sT0FBQSxDQUFRbHVCLElBQUEsRUFBTXV1QixPQUFBLENBQVFaLElBQUksR0FBR0EsSUFBQSxDQUFLYSxPQUFBLENBQVEsV0FBVyxHQUFHUCxLQUFBLEVBQU96eUIsS0FBSyxHQUM1RUEsS0FBQSxDQUFNbXRCLGNBQUEsQ0FBZSxPQUVyQnFGLFlBQUEsQ0FBYWh1QixJQUFBLEVBQU14RSxLQUFLO0FBQ2hDO0FBQ0EsSUFBTW16QixRQUFBLEdBQU4sTUFBZTtFQUNYMWtCLFlBQVk0RixLQUFBLEVBQU95YixJQUFBLEVBQU12ekIsSUFBQSxFQUFNO0lBQzNCLEtBQUs4WCxLQUFBLEdBQVFBLEtBQUE7SUFDYixLQUFLeWIsSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBS3Z6QixJQUFBLEdBQU9BLElBQUE7RUFDaEI7QUFDSjtBQUNBLElBQU02MkIsZ0JBQUEsR0FBbUIzd0IsR0FBQSxHQUFNLFdBQVc7QUFDMUMsU0FBUzR3QixVQUFVN3VCLElBQUEsRUFBTXhFLEtBQUEsRUFBTztFQUM1QixJQUFJc3pCLEtBQUEsR0FBUTl1QixJQUFBLENBQUtHLFFBQUEsQ0FBUyxjQUFjdEcsSUFBQSxJQUFRLENBQUNBLElBQUEsQ0FBSzJCLEtBQUssQ0FBQztFQUM1RCxPQUFPc3pCLEtBQUEsSUFBUyxPQUFPQSxLQUFBLEdBQVEsQ0FBQ3R6QixLQUFBLENBQU1vekIsZ0JBQUE7QUFDMUM7QUFDQTlJLFFBQUEsQ0FBU2lKLFNBQUEsR0FBWSxDQUFDL3VCLElBQUEsRUFBTXdvQixNQUFBLEtBQVc7RUFDbkMsSUFBSWh0QixLQUFBLEdBQVFndEIsTUFBQTtFQUNaLElBQUlqTixTQUFBLEdBQVl2YixJQUFBLENBQUsrUyxLQUFBLENBQU13SSxTQUFBO0VBQzNCLElBQUlBLFNBQUEsRUFDQUEsU0FBQSxDQUFVb1AsSUFBQSxDQUFLO0VBQ25CLElBQUksQ0FBQ252QixLQUFBLENBQU13ekIsWUFBQSxFQUNQO0VBQ0osSUFBSXRuQixHQUFBLEdBQU0xSCxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBO0VBQ3JCLElBQUl0TCxHQUFBLEdBQU1xTCxHQUFBLENBQUlvSixLQUFBLEdBQVEsT0FBTzlRLElBQUEsQ0FBS2lGLFdBQUEsQ0FBWWtrQixXQUFBLENBQVkzdEIsS0FBSyxDQUFDO0VBQ2hFLElBQUl6RCxJQUFBO0VBQ0osSUFBSXNFLEdBQUEsSUFBT0EsR0FBQSxDQUFJQSxHQUFBLElBQU9xTCxHQUFBLENBQUlqUCxJQUFBLElBQVE0RCxHQUFBLENBQUlBLEdBQUEsS0FBUXFMLEdBQUEsWUFBZWhRLHdCQUFBLENBQUE4aUIsYUFBQSxHQUFnQjlTLEdBQUEsQ0FBSWhQLEVBQUEsR0FBSyxJQUFJZ1AsR0FBQSxDQUFJaFAsRUFBQSxHQUFLLFVBQzFGNmlCLFNBQUEsSUFBYUEsU0FBQSxDQUFVc1AsU0FBQSxFQUFXO0lBQ3ZDOXlCLElBQUEsR0FBT0wsd0JBQUEsQ0FBQThpQixhQUFBLENBQWNyTCxNQUFBLENBQU9uUCxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLEVBQUt3ZSxTQUFBLENBQVVzUCxTQUFBLENBQVV4dUIsR0FBRztFQUN2RSxXQUNTYixLQUFBLENBQU11SyxNQUFBLElBQVV2SyxLQUFBLENBQU11SyxNQUFBLENBQU8xTixRQUFBLElBQVksR0FBRztJQUNqRCxJQUFJc0MsSUFBQSxHQUFPcUYsSUFBQSxDQUFLa0UsT0FBQSxDQUFRSyxXQUFBLENBQVkvSSxLQUFBLENBQU11SyxNQUFBLEVBQVEsSUFBSTtJQUN0RCxJQUFJcEwsSUFBQSxJQUFRQSxJQUFBLENBQUs1QyxJQUFBLENBQUt5VixJQUFBLENBQUtVLElBQUEsQ0FBSzlJLFNBQUEsSUFBYXpLLElBQUEsSUFBUXFGLElBQUEsQ0FBS2tFLE9BQUEsRUFDdERuTSxJQUFBLEdBQU9MLHdCQUFBLENBQUE4aUIsYUFBQSxDQUFjckwsTUFBQSxDQUFPblAsSUFBQSxDQUFLd0YsS0FBQSxDQUFNekksR0FBQSxFQUFLcEMsSUFBQSxDQUFLNkosU0FBUztFQUNsRTtFQUNBLElBQUl5cUIsWUFBQSxJQUFnQmwzQixJQUFBLElBQVFpSSxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLEVBQVdsQyxPQUFBLENBQVE7RUFDMUQsSUFBSTtJQUFFL0ssR0FBQTtJQUFLcVQsSUFBQTtJQUFNOEI7RUFBTSxJQUFJeVEscUJBQUEsQ0FBc0J0Z0IsSUFBQSxFQUFNaXZCLFlBQVk7RUFFbkUsSUFBSSxDQUFDenpCLEtBQUEsQ0FBTXd6QixZQUFBLENBQWFFLEtBQUEsQ0FBTWwyQixNQUFBLElBQVUsQ0FBQzJFLE1BQUEsSUFBVUMsY0FBQSxHQUFpQixLQUNoRXBDLEtBQUEsQ0FBTXd6QixZQUFBLENBQWFuQixTQUFBLENBQVU7RUFDakNyeUIsS0FBQSxDQUFNd3pCLFlBQUEsQ0FBYWxCLE9BQUEsQ0FBUUosa0JBQUEsR0FBcUIsU0FBUyxhQUFhaHpCLEdBQUEsQ0FBSStxQixTQUFTO0VBRW5GanFCLEtBQUEsQ0FBTXd6QixZQUFBLENBQWFHLGFBQUEsR0FBZ0I7RUFDbkMsSUFBSSxDQUFDekIsa0JBQUEsRUFDRGx5QixLQUFBLENBQU13ekIsWUFBQSxDQUFhbEIsT0FBQSxDQUFRLGNBQWMvZixJQUFJO0VBQ2pEL04sSUFBQSxDQUFLb3ZCLFFBQUEsR0FBVyxJQUFJVCxRQUFBLENBQVM5ZSxLQUFBLEVBQU9nZixTQUFBLENBQVU3dUIsSUFBQSxFQUFNeEUsS0FBSyxHQUFHekQsSUFBSTtBQUNwRTtBQUNBK3RCLFFBQUEsQ0FBU3VKLE9BQUEsR0FBVXJ2QixJQUFBLElBQVE7RUFDdkIsSUFBSW92QixRQUFBLEdBQVdwdkIsSUFBQSxDQUFLb3ZCLFFBQUE7RUFDcEJ0VixNQUFBLENBQU9nRCxVQUFBLENBQVcsTUFBTTtJQUNwQixJQUFJOWMsSUFBQSxDQUFLb3ZCLFFBQUEsSUFBWUEsUUFBQSxFQUNqQnB2QixJQUFBLENBQUtvdkIsUUFBQSxHQUFXO0VBQ3hCLEdBQUcsRUFBRTtBQUNUO0FBQ0FySixZQUFBLENBQWF1SixRQUFBLEdBQVd2SixZQUFBLENBQWF3SixTQUFBLEdBQVksQ0FBQzl5QixDQUFBLEVBQUc4YSxDQUFBLEtBQU1BLENBQUEsQ0FBRW9SLGNBQUEsQ0FBZTtBQUM1RTVDLFlBQUEsQ0FBYXlKLElBQUEsR0FBTyxDQUFDeHZCLElBQUEsRUFBTXdvQixNQUFBLEtBQVc7RUFDbEMsSUFBSWh0QixLQUFBLEdBQVFndEIsTUFBQTtFQUNaLElBQUk0RyxRQUFBLEdBQVdwdkIsSUFBQSxDQUFLb3ZCLFFBQUE7RUFDcEJwdkIsSUFBQSxDQUFLb3ZCLFFBQUEsR0FBVztFQUNoQixJQUFJLENBQUM1ekIsS0FBQSxDQUFNd3pCLFlBQUEsRUFDUDtFQUNKLElBQUlTLFFBQUEsR0FBV3p2QixJQUFBLENBQUtpRixXQUFBLENBQVlra0IsV0FBQSxDQUFZM3RCLEtBQUssQ0FBQztFQUNsRCxJQUFJLENBQUNpMEIsUUFBQSxFQUNEO0VBQ0osSUFBSUMsTUFBQSxHQUFTMXZCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsQ0FBSWdLLE9BQUEsQ0FBUTBvQixRQUFBLENBQVNwekIsR0FBRztFQUNoRCxJQUFJd1QsS0FBQSxHQUFRdWYsUUFBQSxJQUFZQSxRQUFBLENBQVN2ZixLQUFBO0VBQ2pDLElBQUlBLEtBQUEsRUFBTztJQUNQN1AsSUFBQSxDQUFLRyxRQUFBLENBQVMsbUJBQW1Ca0gsQ0FBQSxJQUFLO01BQUV3SSxLQUFBLEdBQVF4SSxDQUFBLENBQUV3SSxLQUFBLEVBQU83UCxJQUFJO0lBQUcsQ0FBQztFQUNyRSxPQUNLO0lBQ0Q2UCxLQUFBLEdBQVF3UixrQkFBQSxDQUFtQnJoQixJQUFBLEVBQU11dUIsT0FBQSxDQUFRL3lCLEtBQUEsQ0FBTXd6QixZQUFZLEdBQUd0QixrQkFBQSxHQUFxQixPQUFPbHlCLEtBQUEsQ0FBTXd6QixZQUFBLENBQWFSLE9BQUEsQ0FBUSxXQUFXLEdBQUcsT0FBT2tCLE1BQU07RUFDcEo7RUFDQSxJQUFJcEUsSUFBQSxHQUFPLENBQUMsRUFBRThELFFBQUEsSUFBWVAsU0FBQSxDQUFVN3VCLElBQUEsRUFBTXhFLEtBQUs7RUFDL0MsSUFBSXdFLElBQUEsQ0FBS0csUUFBQSxDQUFTLGNBQWNrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXJILElBQUEsRUFBTXhFLEtBQUEsRUFBT3FVLEtBQUEsSUFBU2pZLHdCQUFBLENBQUErcEIsS0FBQSxDQUFNN1EsS0FBQSxFQUFPd2EsSUFBSSxDQUFDLEdBQUc7SUFDOUU5dkIsS0FBQSxDQUFNbXRCLGNBQUEsQ0FBZTtJQUNyQjtFQUNKO0VBQ0EsSUFBSSxDQUFDOVksS0FBQSxFQUNEO0VBQ0pyVSxLQUFBLENBQU1tdEIsY0FBQSxDQUFlO0VBQ3JCLElBQUlnSCxTQUFBLEdBQVk5ZixLQUFBLE9BQVFoWSw0QkFBQSxDQUFBKzNCLFNBQUEsRUFBVTV2QixJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLEVBQUsyeUIsTUFBQSxDQUFPcnpCLEdBQUEsRUFBS3dULEtBQUssSUFBSTZmLE1BQUEsQ0FBT3J6QixHQUFBO0VBQzlFLElBQUlzekIsU0FBQSxJQUFhLE1BQ2JBLFNBQUEsR0FBWUQsTUFBQSxDQUFPcnpCLEdBQUE7RUFDdkIsSUFBSXVoQixFQUFBLEdBQUs1ZCxJQUFBLENBQUt3RixLQUFBLENBQU1vWSxFQUFBO0VBQ3BCLElBQUkwTixJQUFBLEVBQU07SUFDTixJQUFJO01BQUV2ekI7SUFBSyxJQUFJcTNCLFFBQUE7SUFDZixJQUFJcjNCLElBQUEsRUFDQUEsSUFBQSxDQUFLNnBCLE9BQUEsQ0FBUWhFLEVBQUUsT0FFZkEsRUFBQSxDQUFHMFAsZUFBQSxDQUFnQjtFQUMzQjtFQUNBLElBQUlqeEIsR0FBQSxHQUFNdWhCLEVBQUEsQ0FBR2lTLE9BQUEsQ0FBUXRLLEdBQUEsQ0FBSW9LLFNBQVM7RUFDbEMsSUFBSUcsTUFBQSxHQUFTamdCLEtBQUEsQ0FBTTJRLFNBQUEsSUFBYSxLQUFLM1EsS0FBQSxDQUFNNFEsT0FBQSxJQUFXLEtBQUs1USxLQUFBLENBQU1wSyxPQUFBLENBQVFvTSxVQUFBLElBQWM7RUFDdkYsSUFBSWtlLFlBQUEsR0FBZW5TLEVBQUEsQ0FBRzdnQixHQUFBO0VBQ3RCLElBQUkreUIsTUFBQSxFQUNBbFMsRUFBQSxDQUFHb1MsZ0JBQUEsQ0FBaUIzekIsR0FBQSxFQUFLQSxHQUFBLEVBQUt3VCxLQUFBLENBQU1wSyxPQUFBLENBQVFwQyxVQUFVLE9BRXREdWEsRUFBQSxDQUFHcVMsWUFBQSxDQUFhNXpCLEdBQUEsRUFBS0EsR0FBQSxFQUFLd1QsS0FBSztFQUNuQyxJQUFJK04sRUFBQSxDQUFHN2dCLEdBQUEsQ0FBSTBSLEVBQUEsQ0FBR3NoQixZQUFZLEdBQ3RCO0VBQ0osSUFBSW5vQixJQUFBLEdBQU9nVyxFQUFBLENBQUc3Z0IsR0FBQSxDQUFJZ0ssT0FBQSxDQUFRMUssR0FBRztFQUM3QixJQUFJeXpCLE1BQUEsSUFBVXA0Qix3QkFBQSxDQUFBOGlCLGFBQUEsQ0FBY0MsWUFBQSxDQUFhNUssS0FBQSxDQUFNcEssT0FBQSxDQUFRcEMsVUFBVSxLQUM3RHVFLElBQUEsQ0FBS3NXLFNBQUEsSUFBYXRXLElBQUEsQ0FBS3NXLFNBQUEsQ0FBVTNLLFVBQUEsQ0FBVzFELEtBQUEsQ0FBTXBLLE9BQUEsQ0FBUXBDLFVBQVUsR0FBRztJQUN2RXVhLEVBQUEsQ0FBR25SLFlBQUEsQ0FBYSxJQUFJL1Usd0JBQUEsQ0FBQThpQixhQUFBLENBQWM1UyxJQUFJLENBQUM7RUFDM0MsT0FDSztJQUNELElBQUlZLEdBQUEsR0FBTW9WLEVBQUEsQ0FBR2lTLE9BQUEsQ0FBUXRLLEdBQUEsQ0FBSW9LLFNBQVM7SUFDbEMvUixFQUFBLENBQUdpUyxPQUFBLENBQVFLLElBQUEsQ0FBS3RTLEVBQUEsQ0FBR2lTLE9BQUEsQ0FBUUssSUFBQSxDQUFLbDNCLE1BQUEsR0FBUyxHQUFHOG9CLE9BQUEsQ0FBUSxDQUFDcU8sS0FBQSxFQUFPQyxHQUFBLEVBQUtDLFFBQUEsRUFBVUMsS0FBQSxLQUFVOW5CLEdBQUEsR0FBTThuQixLQUFLO0lBQ2hHMVMsRUFBQSxDQUFHblIsWUFBQSxDQUFhdU8sZ0JBQUEsQ0FBaUJoYixJQUFBLEVBQU00SCxJQUFBLEVBQU1nVyxFQUFBLENBQUc3Z0IsR0FBQSxDQUFJZ0ssT0FBQSxDQUFReUIsR0FBRyxDQUFDLENBQUM7RUFDckU7RUFDQXhJLElBQUEsQ0FBS3lDLEtBQUEsQ0FBTTtFQUNYekMsSUFBQSxDQUFLMmQsUUFBQSxDQUFTQyxFQUFBLENBQUdpTSxPQUFBLENBQVEsV0FBVyxNQUFNLENBQUM7QUFDL0M7QUFDQS9ELFFBQUEsQ0FBU3JqQixLQUFBLEdBQVF6QyxJQUFBLElBQVE7RUFDckJBLElBQUEsQ0FBSytTLEtBQUEsQ0FBTThULFNBQUEsR0FBWWlCLElBQUEsQ0FBS0MsR0FBQSxDQUFJO0VBQ2hDLElBQUksQ0FBQy9uQixJQUFBLENBQUs0cEIsT0FBQSxFQUFTO0lBQ2Y1cEIsSUFBQSxDQUFLMGIsV0FBQSxDQUFZL00sSUFBQSxDQUFLO0lBQ3RCM08sSUFBQSxDQUFLdEYsR0FBQSxDQUFJNlQsU0FBQSxDQUFVQyxHQUFBLENBQUkscUJBQXFCO0lBQzVDeE8sSUFBQSxDQUFLMGIsV0FBQSxDQUFZblQsS0FBQSxDQUFNO0lBQ3ZCdkksSUFBQSxDQUFLNHBCLE9BQUEsR0FBVTtJQUNmOU0sVUFBQSxDQUFXLE1BQU07TUFDYixJQUFJOWMsSUFBQSxDQUFLa0UsT0FBQSxJQUFXbEUsSUFBQSxDQUFLbWIsUUFBQSxDQUFTLEtBQUssQ0FBQ25iLElBQUEsQ0FBSzBiLFdBQUEsQ0FBWUMsZ0JBQUEsQ0FBaUJsTixFQUFBLENBQUd6TyxJQUFBLENBQUs2SSxpQkFBQSxDQUFrQixDQUFDLEdBQ2pHd1MsY0FBQSxDQUFlcmIsSUFBSTtJQUMzQixHQUFHLEVBQUU7RUFDVDtBQUNKO0FBQ0E4bEIsUUFBQSxDQUFTMkgsSUFBQSxHQUFPLENBQUN6dEIsSUFBQSxFQUFNd29CLE1BQUEsS0FBVztFQUM5QixJQUFJaHRCLEtBQUEsR0FBUWd0QixNQUFBO0VBQ1osSUFBSXhvQixJQUFBLENBQUs0cEIsT0FBQSxFQUFTO0lBQ2Q1cEIsSUFBQSxDQUFLMGIsV0FBQSxDQUFZL00sSUFBQSxDQUFLO0lBQ3RCM08sSUFBQSxDQUFLdEYsR0FBQSxDQUFJNlQsU0FBQSxDQUFVeUYsTUFBQSxDQUFPLHFCQUFxQjtJQUMvQ2hVLElBQUEsQ0FBSzBiLFdBQUEsQ0FBWW5ULEtBQUEsQ0FBTTtJQUN2QixJQUFJL00sS0FBQSxDQUFNKzBCLGFBQUEsSUFBaUJ2d0IsSUFBQSxDQUFLdEYsR0FBQSxDQUFJa0gsUUFBQSxDQUFTcEcsS0FBQSxDQUFNKzBCLGFBQWEsR0FDNUR2d0IsSUFBQSxDQUFLMGIsV0FBQSxDQUFZQyxnQkFBQSxDQUFpQjZVLEtBQUEsQ0FBTTtJQUM1Q3h3QixJQUFBLENBQUs0cEIsT0FBQSxHQUFVO0VBQ25CO0FBQ0o7QUFDQTlELFFBQUEsQ0FBUzJLLFdBQUEsR0FBYyxDQUFDendCLElBQUEsRUFBTXdvQixNQUFBLEtBQVc7RUFDckMsSUFBSWh0QixLQUFBLEdBQVFndEIsTUFBQTtFQUtaLElBQUk3cUIsTUFBQSxJQUFVUyxPQUFBLElBQVc1QyxLQUFBLENBQU1rMUIsU0FBQSxJQUFhLHlCQUF5QjtJQUNqRTF3QixJQUFBLENBQUswYixXQUFBLENBQVlpVixTQUFBLENBQVU7SUFDM0IsSUFBSTtNQUFFdko7SUFBZSxJQUFJcG5CLElBQUEsQ0FBSytTLEtBQUE7SUFDOUIrSixVQUFBLENBQVcsTUFBTTtNQUNiLElBQUk5YyxJQUFBLENBQUsrUyxLQUFBLENBQU1xVSxjQUFBLElBQWtCQSxjQUFBLEVBQzdCO01BRUpwbkIsSUFBQSxDQUFLdEYsR0FBQSxDQUFJK3lCLElBQUEsQ0FBSztNQUNkenRCLElBQUEsQ0FBS3lDLEtBQUEsQ0FBTTtNQUNYLElBQUl6QyxJQUFBLENBQUtHLFFBQUEsQ0FBUyxpQkFBaUJrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXJILElBQUEsRUFBTTNFLFFBQUEsQ0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEdBQ3JFO01BQ0osSUFBSTtRQUFFdTFCO01BQVEsSUFBSTV3QixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBO01BRTdCLElBQUlpcEIsT0FBQSxJQUFXQSxPQUFBLENBQVF2MEIsR0FBQSxHQUFNLEdBQ3pCMkQsSUFBQSxDQUFLMmQsUUFBQSxDQUFTM2QsSUFBQSxDQUFLd0YsS0FBQSxDQUFNb1ksRUFBQSxDQUFHaUMsTUFBQSxDQUFPK1EsT0FBQSxDQUFRdjBCLEdBQUEsR0FBTSxHQUFHdTBCLE9BQUEsQ0FBUXYwQixHQUFHLEVBQUV3aEIsY0FBQSxDQUFlLENBQUM7SUFDekYsR0FBRyxFQUFFO0VBQ1Q7QUFDSjtBQUVBLFNBQVN6SCxJQUFBLElBQVEyUCxZQUFBLEVBQ2JELFFBQUEsQ0FBUzFQLElBQUEsSUFBUTJQLFlBQUEsQ0FBYTNQLElBQUE7QUFFbEMsU0FBU3lhLFlBQVlyYSxDQUFBLEVBQUdDLENBQUEsRUFBRztFQUN2QixJQUFJRCxDQUFBLElBQUtDLENBQUEsRUFDTCxPQUFPO0VBQ1gsU0FBU3RSLENBQUEsSUFBS3FSLENBQUEsRUFDVixJQUFJQSxDQUFBLENBQUVyUixDQUFBLE1BQU9zUixDQUFBLENBQUV0UixDQUFBLEdBQ1gsT0FBTztFQUNmLFNBQVNBLENBQUEsSUFBS3NSLENBQUEsRUFDVixJQUFJLEVBQUV0UixDQUFBLElBQUtxUixDQUFBLEdBQ1AsT0FBTztFQUNmLE9BQU87QUFDWDtBQUNBLElBQU1zYSxVQUFBLEdBQU4sTUFBaUI7RUFDYjdtQixZQUFZZ0UsS0FBQSxFQUFPQyxJQUFBLEVBQU07SUFDckIsS0FBS0QsS0FBQSxHQUFRQSxLQUFBO0lBQ2IsS0FBS0MsSUFBQSxHQUFPQSxJQUFBLElBQVE2aUIsTUFBQTtJQUNwQixLQUFLeHhCLElBQUEsR0FBTyxLQUFLMk8sSUFBQSxDQUFLM08sSUFBQSxJQUFRO0VBQ2xDO0VBQ0FnbUIsSUFBSXNLLE9BQUEsRUFBU21CLElBQUEsRUFBTTMyQixNQUFBLEVBQVE0MkIsU0FBQSxFQUFXO0lBQ2xDLElBQUk7TUFBRTUwQixHQUFBO01BQUs2MEI7SUFBUSxJQUFJckIsT0FBQSxDQUFRc0IsU0FBQSxDQUFVSCxJQUFBLENBQUt2NEIsSUFBQSxHQUFPdzRCLFNBQUEsRUFBVyxLQUFLMXhCLElBQUEsR0FBTyxJQUFJLEtBQUssQ0FBQztJQUN0RixPQUFPMnhCLE9BQUEsR0FBVSxPQUFPLElBQUloNkIsVUFBQSxDQUFXbUYsR0FBQSxHQUFNaEMsTUFBQSxFQUFRZ0MsR0FBQSxHQUFNaEMsTUFBQSxFQUFRLElBQUk7RUFDM0U7RUFDQSsyQixNQUFBLEVBQVE7SUFBRSxPQUFPO0VBQU07RUFDdkIzaUIsR0FBRzRpQixLQUFBLEVBQU87SUFDTixPQUFPLFFBQVFBLEtBQUEsSUFDVkEsS0FBQSxZQUFpQlAsVUFBQSxLQUNiLEtBQUs1aUIsSUFBQSxDQUFLM1MsR0FBQSxJQUFPLEtBQUsyUyxJQUFBLENBQUszUyxHQUFBLElBQU84MUIsS0FBQSxDQUFNbmpCLElBQUEsQ0FBSzNTLEdBQUEsSUFDMUMsS0FBSzBTLEtBQUEsSUFBU29qQixLQUFBLENBQU1wakIsS0FBQSxJQUFTNGlCLFdBQUEsQ0FBWSxLQUFLM2lCLElBQUEsRUFBTW1qQixLQUFBLENBQU1uakIsSUFBSTtFQUM5RTtFQUNBcEQsUUFBUS9TLElBQUEsRUFBTTtJQUNWLElBQUksS0FBS21XLElBQUEsQ0FBS3BELE9BQUEsRUFDVixLQUFLb0QsSUFBQSxDQUFLcEQsT0FBQSxDQUFRL1MsSUFBSTtFQUM5QjtBQUNKO0FBQ0EsSUFBTXU1QixVQUFBLEdBQU4sTUFBaUI7RUFDYnJuQixZQUFZeUYsS0FBQSxFQUFPeEIsSUFBQSxFQUFNO0lBQ3JCLEtBQUt3QixLQUFBLEdBQVFBLEtBQUE7SUFDYixLQUFLeEIsSUFBQSxHQUFPQSxJQUFBLElBQVE2aUIsTUFBQTtFQUN4QjtFQUNBeEwsSUFBSXNLLE9BQUEsRUFBU21CLElBQUEsRUFBTTMyQixNQUFBLEVBQVE0MkIsU0FBQSxFQUFXO0lBQ2xDLElBQUl4NEIsSUFBQSxHQUFPbzNCLE9BQUEsQ0FBUXRLLEdBQUEsQ0FBSXlMLElBQUEsQ0FBS3Y0QixJQUFBLEdBQU93NEIsU0FBQSxFQUFXLEtBQUsvaUIsSUFBQSxDQUFLcWpCLGNBQUEsR0FBaUIsS0FBSyxDQUFDLElBQUlsM0IsTUFBQTtJQUNuRixJQUFJM0IsRUFBQSxHQUFLbTNCLE9BQUEsQ0FBUXRLLEdBQUEsQ0FBSXlMLElBQUEsQ0FBS3Q0QixFQUFBLEdBQUt1NEIsU0FBQSxFQUFXLEtBQUsvaUIsSUFBQSxDQUFLc2pCLFlBQUEsR0FBZSxJQUFJLEVBQUUsSUFBSW4zQixNQUFBO0lBQzdFLE9BQU81QixJQUFBLElBQVFDLEVBQUEsR0FBSyxPQUFPLElBQUl4QixVQUFBLENBQVd1QixJQUFBLEVBQU1DLEVBQUEsRUFBSSxJQUFJO0VBQzVEO0VBQ0EwNEIsTUFBTTMwQixDQUFBLEVBQUd1MEIsSUFBQSxFQUFNO0lBQUUsT0FBT0EsSUFBQSxDQUFLdjRCLElBQUEsR0FBT3U0QixJQUFBLENBQUt0NEIsRUFBQTtFQUFJO0VBQzdDK1YsR0FBRzRpQixLQUFBLEVBQU87SUFDTixPQUFPLFFBQVFBLEtBQUEsSUFDVkEsS0FBQSxZQUFpQkMsVUFBQSxJQUFjVCxXQUFBLENBQVksS0FBS25oQixLQUFBLEVBQU8yaEIsS0FBQSxDQUFNM2hCLEtBQUssS0FDL0RtaEIsV0FBQSxDQUFZLEtBQUszaUIsSUFBQSxFQUFNbWpCLEtBQUEsQ0FBTW5qQixJQUFJO0VBQzdDO0VBQ0EsT0FBT3VqQixHQUFHVCxJQUFBLEVBQU07SUFBRSxPQUFPQSxJQUFBLENBQUt4akIsSUFBQSxZQUFnQjhqQixVQUFBO0VBQVk7RUFDMUR4bUIsUUFBQSxFQUFVLENBQUU7QUFDaEI7QUFDQSxJQUFNNG1CLFFBQUEsR0FBTixNQUFlO0VBQ1h6bkIsWUFBWXlGLEtBQUEsRUFBT3hCLElBQUEsRUFBTTtJQUNyQixLQUFLd0IsS0FBQSxHQUFRQSxLQUFBO0lBQ2IsS0FBS3hCLElBQUEsR0FBT0EsSUFBQSxJQUFRNmlCLE1BQUE7RUFDeEI7RUFDQXhMLElBQUlzSyxPQUFBLEVBQVNtQixJQUFBLEVBQU0zMkIsTUFBQSxFQUFRNDJCLFNBQUEsRUFBVztJQUNsQyxJQUFJeDRCLElBQUEsR0FBT28zQixPQUFBLENBQVFzQixTQUFBLENBQVVILElBQUEsQ0FBS3Y0QixJQUFBLEdBQU93NEIsU0FBQSxFQUFXLENBQUM7SUFDckQsSUFBSXg0QixJQUFBLENBQUt5NEIsT0FBQSxFQUNMLE9BQU87SUFDWCxJQUFJeDRCLEVBQUEsR0FBS20zQixPQUFBLENBQVFzQixTQUFBLENBQVVILElBQUEsQ0FBS3Q0QixFQUFBLEdBQUt1NEIsU0FBQSxFQUFXLEVBQUU7SUFDbEQsSUFBSXY0QixFQUFBLENBQUd3NEIsT0FBQSxJQUFXeDRCLEVBQUEsQ0FBRzJELEdBQUEsSUFBTzVELElBQUEsQ0FBSzRELEdBQUEsRUFDN0IsT0FBTztJQUNYLE9BQU8sSUFBSW5GLFVBQUEsQ0FBV3VCLElBQUEsQ0FBSzRELEdBQUEsR0FBTWhDLE1BQUEsRUFBUTNCLEVBQUEsQ0FBRzJELEdBQUEsR0FBTWhDLE1BQUEsRUFBUSxJQUFJO0VBQ2xFO0VBQ0ErMkIsTUFBTXI1QixJQUFBLEVBQU1pNUIsSUFBQSxFQUFNO0lBQ2QsSUFBSTtRQUFFaDVCLEtBQUE7UUFBT3FDO01BQU8sSUFBSXRDLElBQUEsQ0FBSzBOLE9BQUEsQ0FBUWtzQixTQUFBLENBQVVYLElBQUEsQ0FBS3Y0QixJQUFJO01BQUd1QixLQUFBO0lBQzNELE9BQU9LLE1BQUEsSUFBVTIyQixJQUFBLENBQUt2NEIsSUFBQSxJQUFRLEVBQUV1QixLQUFBLEdBQVFqQyxJQUFBLENBQUtpQyxLQUFBLENBQU1oQyxLQUFLLEdBQUcwTSxNQUFBLElBQVVySyxNQUFBLEdBQVNMLEtBQUEsQ0FBTUwsUUFBQSxJQUFZcTNCLElBQUEsQ0FBS3Q0QixFQUFBO0VBQ3pHO0VBQ0ErVixHQUFHNGlCLEtBQUEsRUFBTztJQUNOLE9BQU8sUUFBUUEsS0FBQSxJQUNWQSxLQUFBLFlBQWlCSyxRQUFBLElBQVliLFdBQUEsQ0FBWSxLQUFLbmhCLEtBQUEsRUFBTzJoQixLQUFBLENBQU0zaEIsS0FBSyxLQUM3RG1oQixXQUFBLENBQVksS0FBSzNpQixJQUFBLEVBQU1takIsS0FBQSxDQUFNbmpCLElBQUk7RUFDN0M7RUFDQXBELFFBQUEsRUFBVSxDQUFFO0FBQ2hCO0FBTUEsSUFBTTVULFVBQUEsR0FBTixNQUFpQjtFQUliK1MsWUFJQXhSLElBQUEsRUFLQUMsRUFBQSxFQUlBOFUsSUFBQSxFQUFNO0lBQ0YsS0FBSy9VLElBQUEsR0FBT0EsSUFBQTtJQUNaLEtBQUtDLEVBQUEsR0FBS0EsRUFBQTtJQUNWLEtBQUs4VSxJQUFBLEdBQU9BLElBQUE7RUFDaEI7RUFJQXNDLEtBQUtyWCxJQUFBLEVBQU1DLEVBQUEsRUFBSTtJQUNYLE9BQU8sSUFBSXhCLFVBQUEsQ0FBV3VCLElBQUEsRUFBTUMsRUFBQSxFQUFJLEtBQUs4VSxJQUFJO0VBQzdDO0VBSUFpQixHQUFHNGlCLEtBQUEsRUFBT2gzQixNQUFBLEdBQVMsR0FBRztJQUNsQixPQUFPLEtBQUttVCxJQUFBLENBQUtpQixFQUFBLENBQUc0aUIsS0FBQSxDQUFNN2pCLElBQUksS0FBSyxLQUFLL1UsSUFBQSxHQUFPNEIsTUFBQSxJQUFVZzNCLEtBQUEsQ0FBTTU0QixJQUFBLElBQVEsS0FBS0MsRUFBQSxHQUFLMkIsTUFBQSxJQUFVZzNCLEtBQUEsQ0FBTTM0QixFQUFBO0VBQ3JHO0VBSUE2c0IsSUFBSXNLLE9BQUEsRUFBU3gxQixNQUFBLEVBQVE0MkIsU0FBQSxFQUFXO0lBQzVCLE9BQU8sS0FBS3pqQixJQUFBLENBQUsrWCxHQUFBLENBQUlzSyxPQUFBLEVBQVMsTUFBTXgxQixNQUFBLEVBQVE0MkIsU0FBUztFQUN6RDtFQVNBLE9BQU81bUIsT0FBT2hPLEdBQUEsRUFBSzRSLEtBQUEsRUFBT0MsSUFBQSxFQUFNO0lBQzVCLE9BQU8sSUFBSWhYLFVBQUEsQ0FBV21GLEdBQUEsRUFBS0EsR0FBQSxFQUFLLElBQUl5MEIsVUFBQSxDQUFXN2lCLEtBQUEsRUFBT0MsSUFBSSxDQUFDO0VBQy9EO0VBS0EsT0FBT2tCLE9BQU8zVyxJQUFBLEVBQU1DLEVBQUEsRUFBSWdYLEtBQUEsRUFBT3hCLElBQUEsRUFBTTtJQUNqQyxPQUFPLElBQUloWCxVQUFBLENBQVd1QixJQUFBLEVBQU1DLEVBQUEsRUFBSSxJQUFJNDRCLFVBQUEsQ0FBVzVoQixLQUFBLEVBQU94QixJQUFJLENBQUM7RUFDL0Q7RUFNQSxPQUFPblcsS0FBS1UsSUFBQSxFQUFNQyxFQUFBLEVBQUlnWCxLQUFBLEVBQU94QixJQUFBLEVBQU07SUFDL0IsT0FBTyxJQUFJaFgsVUFBQSxDQUFXdUIsSUFBQSxFQUFNQyxFQUFBLEVBQUksSUFBSWc1QixRQUFBLENBQVNoaUIsS0FBQSxFQUFPeEIsSUFBSSxDQUFDO0VBQzdEO0VBS0EsSUFBSUEsS0FBQSxFQUFPO0lBQUUsT0FBTyxLQUFLVixJQUFBLENBQUtVLElBQUE7RUFBTTtFQUlwQyxJQUFJa0IsT0FBQSxFQUFTO0lBQUUsT0FBTyxLQUFLNUIsSUFBQSxZQUFnQjhqQixVQUFBO0VBQVk7RUFJdkQsSUFBSWpuQixPQUFBLEVBQVM7SUFBRSxPQUFPLEtBQUttRCxJQUFBLFlBQWdCc2pCLFVBQUE7RUFBWTtBQUMzRDtBQUNBLElBQU0vZSxJQUFBLEdBQU8sRUFBQztFQUFHZ2YsTUFBQSxHQUFTLENBQUM7QUFPM0IsSUFBTTU1QixhQUFBLEdBQU4sTUFBb0I7RUFJaEI4UyxZQUFZMm5CLEtBQUEsRUFBTzFuQixRQUFBLEVBQVU7SUFDekIsS0FBSzBuQixLQUFBLEdBQVFBLEtBQUEsQ0FBTTU0QixNQUFBLEdBQVM0NEIsS0FBQSxHQUFRN2YsSUFBQTtJQUNwQyxLQUFLN0gsUUFBQSxHQUFXQSxRQUFBLENBQVNsUixNQUFBLEdBQVNrUixRQUFBLEdBQVc2SCxJQUFBO0VBQ2pEO0VBTUEsT0FBTzVDLE9BQU90VCxJQUFBLEVBQUtnMkIsV0FBQSxFQUFhO0lBQzVCLE9BQU9BLFdBQUEsQ0FBWTc0QixNQUFBLEdBQVM4NEIsU0FBQSxDQUFVRCxXQUFBLEVBQWFoMkIsSUFBQSxFQUFLLEdBQUdrMUIsTUFBTSxJQUFJamdCLEtBQUE7RUFDekU7RUFTQTNLLEtBQUtvQyxLQUFBLEVBQU9DLEdBQUEsRUFBS3VwQixTQUFBLEVBQVc7SUFDeEIsSUFBSTFvQixNQUFBLEdBQVMsRUFBQztJQUNkLEtBQUsyb0IsU0FBQSxDQUFVenBCLEtBQUEsSUFBUyxPQUFPLElBQUlBLEtBQUEsRUFBT0MsR0FBQSxJQUFPLE9BQU8sTUFBTUEsR0FBQSxFQUFLYSxNQUFBLEVBQVEsR0FBRzBvQixTQUFTO0lBQ3ZGLE9BQU8xb0IsTUFBQTtFQUNYO0VBQ0Eyb0IsVUFBVXpwQixLQUFBLEVBQU9DLEdBQUEsRUFBS2EsTUFBQSxFQUFRaFAsTUFBQSxFQUFRMDNCLFNBQUEsRUFBVztJQUM3QyxTQUFTMXZCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBS3V2QixLQUFBLENBQU01NEIsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO01BQ3hDLElBQUkydUIsSUFBQSxHQUFPLEtBQUtZLEtBQUEsQ0FBTXZ2QixDQUFBO01BQ3RCLElBQUkydUIsSUFBQSxDQUFLdjRCLElBQUEsSUFBUStQLEdBQUEsSUFBT3dvQixJQUFBLENBQUt0NEIsRUFBQSxJQUFNNlAsS0FBQSxLQUFVLENBQUN3cEIsU0FBQSxJQUFhQSxTQUFBLENBQVVmLElBQUEsQ0FBSzlpQixJQUFJLElBQzFFN0UsTUFBQSxDQUFPckgsSUFBQSxDQUFLZ3ZCLElBQUEsQ0FBS2xoQixJQUFBLENBQUtraEIsSUFBQSxDQUFLdjRCLElBQUEsR0FBTzRCLE1BQUEsRUFBUTIyQixJQUFBLENBQUt0NEIsRUFBQSxHQUFLMkIsTUFBTSxDQUFDO0lBQ25FO0lBQ0EsU0FBU2dJLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBSzZILFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsSUFBSyxHQUFHO01BQzlDLElBQUksS0FBSzZILFFBQUEsQ0FBUzdILENBQUEsSUFBS21HLEdBQUEsSUFBTyxLQUFLMEIsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLEtBQUtrRyxLQUFBLEVBQU87UUFDeEQsSUFBSTBwQixRQUFBLEdBQVcsS0FBSy9uQixRQUFBLENBQVM3SCxDQUFBLElBQUs7UUFDbEMsS0FBSzZILFFBQUEsQ0FBUzdILENBQUEsR0FBSSxHQUFHMnZCLFNBQUEsQ0FBVXpwQixLQUFBLEdBQVEwcEIsUUFBQSxFQUFVenBCLEdBQUEsR0FBTXlwQixRQUFBLEVBQVU1b0IsTUFBQSxFQUFRaFAsTUFBQSxHQUFTNDNCLFFBQUEsRUFBVUYsU0FBUztNQUN6RztJQUNKO0VBQ0o7RUFLQXhNLElBQUlzSyxPQUFBLEVBQVNoMEIsSUFBQSxFQUFLcTJCLE9BQUEsRUFBUztJQUN2QixJQUFJLFFBQVFwaEIsS0FBQSxJQUFTK2UsT0FBQSxDQUFRSyxJQUFBLENBQUtsM0IsTUFBQSxJQUFVLEdBQ3hDLE9BQU87SUFDWCxPQUFPLEtBQUttNUIsUUFBQSxDQUFTdEMsT0FBQSxFQUFTaDBCLElBQUEsRUFBSyxHQUFHLEdBQUdxMkIsT0FBQSxJQUFXbkIsTUFBTTtFQUM5RDtFQUlBb0IsU0FBU3RDLE9BQUEsRUFBUzkzQixJQUFBLEVBQU1zQyxNQUFBLEVBQVE0MkIsU0FBQSxFQUFXaUIsT0FBQSxFQUFTO0lBQ2hELElBQUlFLFFBQUE7SUFDSixTQUFTL3ZCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBS3V2QixLQUFBLENBQU01NEIsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO01BQ3hDLElBQUlnd0IsTUFBQSxHQUFTLEtBQUtULEtBQUEsQ0FBTXZ2QixDQUFBLEVBQUdrakIsR0FBQSxDQUFJc0ssT0FBQSxFQUFTeDFCLE1BQUEsRUFBUTQyQixTQUFTO01BQ3pELElBQUlvQixNQUFBLElBQVVBLE1BQUEsQ0FBTzdrQixJQUFBLENBQUs0akIsS0FBQSxDQUFNcjVCLElBQUEsRUFBTXM2QixNQUFNLEdBQ3hDLENBQUNELFFBQUEsS0FBYUEsUUFBQSxHQUFXLEVBQUMsR0FBSXB3QixJQUFBLENBQUtxd0IsTUFBTSxXQUNwQ0gsT0FBQSxDQUFRSSxRQUFBLEVBQ2JKLE9BQUEsQ0FBUUksUUFBQSxDQUFTLEtBQUtWLEtBQUEsQ0FBTXZ2QixDQUFBLEVBQUc2TCxJQUFJO0lBQzNDO0lBQ0EsSUFBSSxLQUFLaEUsUUFBQSxDQUFTbFIsTUFBQSxFQUNkLE9BQU91NUIsV0FBQSxDQUFZLEtBQUtyb0IsUUFBQSxFQUFVa29CLFFBQUEsSUFBWSxFQUFDLEVBQUd2QyxPQUFBLEVBQVM5M0IsSUFBQSxFQUFNc0MsTUFBQSxFQUFRNDJCLFNBQUEsRUFBV2lCLE9BQU8sT0FFM0YsT0FBT0UsUUFBQSxHQUFXLElBQUlqN0IsYUFBQSxDQUFjaTdCLFFBQUEsQ0FBUzFZLElBQUEsQ0FBSzhZLEtBQUssR0FBR3pnQixJQUFJLElBQUlqQixLQUFBO0VBQzFFO0VBT0F0QyxJQUFJM1MsSUFBQSxFQUFLZzJCLFdBQUEsRUFBYTtJQUNsQixJQUFJLENBQUNBLFdBQUEsQ0FBWTc0QixNQUFBLEVBQ2IsT0FBTztJQUNYLElBQUksUUFBUThYLEtBQUEsRUFDUixPQUFPM1osYUFBQSxDQUFjZ1ksTUFBQSxDQUFPdFQsSUFBQSxFQUFLZzJCLFdBQVc7SUFDaEQsT0FBTyxLQUFLWSxRQUFBLENBQVM1MkIsSUFBQSxFQUFLZzJCLFdBQUEsRUFBYSxDQUFDO0VBQzVDO0VBQ0FZLFNBQVM1MkIsSUFBQSxFQUFLZzJCLFdBQUEsRUFBYXgzQixNQUFBLEVBQVE7SUFDL0IsSUFBSTZQLFFBQUE7TUFBVTVHLFVBQUEsR0FBYTtJQUMzQnpILElBQUEsQ0FBSWltQixPQUFBLENBQVEsQ0FBQzRRLFNBQUEsRUFBV0MsV0FBQSxLQUFnQjtNQUNwQyxJQUFJQyxVQUFBLEdBQWFELFdBQUEsR0FBY3Q0QixNQUFBO1FBQVE2YyxLQUFBO01BQ3ZDLElBQUksRUFBRUEsS0FBQSxHQUFRMmIsZ0JBQUEsQ0FBaUJoQixXQUFBLEVBQWFhLFNBQUEsRUFBV0UsVUFBVSxJQUM3RDtNQUNKLElBQUksQ0FBQzFvQixRQUFBLEVBQ0RBLFFBQUEsR0FBVyxLQUFLQSxRQUFBLENBQVMyRixLQUFBLENBQU07TUFDbkMsT0FBT3ZNLFVBQUEsR0FBYTRHLFFBQUEsQ0FBU2xSLE1BQUEsSUFBVWtSLFFBQUEsQ0FBUzVHLFVBQUEsSUFBY3F2QixXQUFBLEVBQzFEcnZCLFVBQUEsSUFBYztNQUNsQixJQUFJNEcsUUFBQSxDQUFTNUcsVUFBQSxLQUFlcXZCLFdBQUEsRUFDeEJ6b0IsUUFBQSxDQUFTNUcsVUFBQSxHQUFhLEtBQUs0RyxRQUFBLENBQVM1RyxVQUFBLEdBQWEsR0FBR212QixRQUFBLENBQVNDLFNBQUEsRUFBV3hiLEtBQUEsRUFBTzBiLFVBQUEsR0FBYSxDQUFDLE9BRTdGMW9CLFFBQUEsQ0FBUzJNLE1BQUEsQ0FBT3ZULFVBQUEsRUFBWSxHQUFHcXZCLFdBQUEsRUFBYUEsV0FBQSxHQUFjRCxTQUFBLENBQVUvNEIsUUFBQSxFQUFVbTRCLFNBQUEsQ0FBVTVhLEtBQUEsRUFBT3diLFNBQUEsRUFBV0UsVUFBQSxHQUFhLEdBQUc3QixNQUFNLENBQUM7TUFDckl6dEIsVUFBQSxJQUFjO0lBQ2xCLENBQUM7SUFDRCxJQUFJc3VCLEtBQUEsR0FBUWtCLFNBQUEsQ0FBVXh2QixVQUFBLEdBQWF5dkIsWUFBQSxDQUFhbEIsV0FBVyxJQUFJQSxXQUFBLEVBQWEsQ0FBQ3gzQixNQUFNO0lBQ25GLFNBQVNnSSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJdXZCLEtBQUEsQ0FBTTU0QixNQUFBLEVBQVFxSixDQUFBLElBQzlCLElBQUksQ0FBQ3V2QixLQUFBLENBQU12dkIsQ0FBQSxFQUFHbUwsSUFBQSxDQUFLNGpCLEtBQUEsQ0FBTXYxQixJQUFBLEVBQUsrMUIsS0FBQSxDQUFNdnZCLENBQUEsQ0FBRSxHQUNsQ3V2QixLQUFBLENBQU0vYSxNQUFBLENBQU94VSxDQUFBLElBQUssQ0FBQztJQUMzQixPQUFPLElBQUlsTCxhQUFBLENBQWN5NkIsS0FBQSxDQUFNNTRCLE1BQUEsR0FBUyxLQUFLNDRCLEtBQUEsQ0FBTW9CLE1BQUEsQ0FBT3BCLEtBQUssRUFBRWxZLElBQUEsQ0FBSzhZLEtBQUssSUFBSSxLQUFLWixLQUFBLEVBQU8xbkIsUUFBQSxJQUFZLEtBQUtBLFFBQVE7RUFDeEg7RUFLQThKLE9BQU82ZCxXQUFBLEVBQWE7SUFDaEIsSUFBSUEsV0FBQSxDQUFZNzRCLE1BQUEsSUFBVSxLQUFLLFFBQVE4WCxLQUFBLEVBQ25DLE9BQU87SUFDWCxPQUFPLEtBQUttaUIsV0FBQSxDQUFZcEIsV0FBQSxFQUFhLENBQUM7RUFDMUM7RUFDQW9CLFlBQVlwQixXQUFBLEVBQWF4M0IsTUFBQSxFQUFRO0lBQzdCLElBQUk2UCxRQUFBLEdBQVcsS0FBS0EsUUFBQTtNQUFVMG5CLEtBQUEsR0FBUSxLQUFLQSxLQUFBO0lBQzNDLFNBQVN2dkIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTZILFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsSUFBSyxHQUFHO01BQ3pDLElBQUk2VSxLQUFBO01BQ0osSUFBSXplLElBQUEsR0FBT3lSLFFBQUEsQ0FBUzdILENBQUEsSUFBS2hJLE1BQUE7UUFBUTNCLEVBQUEsR0FBS3dSLFFBQUEsQ0FBUzdILENBQUEsR0FBSSxLQUFLaEksTUFBQTtNQUN4RCxTQUFTMkssQ0FBQSxHQUFJLEdBQUdnc0IsSUFBQSxFQUFNaHNCLENBQUEsR0FBSTZzQixXQUFBLENBQVk3NEIsTUFBQSxFQUFRZ00sQ0FBQSxJQUMxQyxJQUFJZ3NCLElBQUEsR0FBT2EsV0FBQSxDQUFZN3NCLENBQUEsR0FBSTtRQUN2QixJQUFJZ3NCLElBQUEsQ0FBS3Y0QixJQUFBLEdBQU9BLElBQUEsSUFBUXU0QixJQUFBLENBQUt0NEIsRUFBQSxHQUFLQSxFQUFBLEVBQUk7VUFDbENtNUIsV0FBQSxDQUFZN3NCLENBQUEsSUFBSztVQUNqQixDQUFDa1MsS0FBQSxLQUFVQSxLQUFBLEdBQVEsRUFBQyxHQUFJbFYsSUFBQSxDQUFLZ3ZCLElBQUk7UUFDckM7TUFDSjtNQUNKLElBQUksQ0FBQzlaLEtBQUEsRUFDRDtNQUNKLElBQUloTixRQUFBLElBQVksS0FBS0EsUUFBQSxFQUNqQkEsUUFBQSxHQUFXLEtBQUtBLFFBQUEsQ0FBUzJGLEtBQUEsQ0FBTTtNQUNuQyxJQUFJcWpCLE9BQUEsR0FBVWhwQixRQUFBLENBQVM3SCxDQUFBLEdBQUksR0FBRzR3QixXQUFBLENBQVkvYixLQUFBLEVBQU96ZSxJQUFBLEdBQU8sQ0FBQztNQUN6RCxJQUFJeTZCLE9BQUEsSUFBV3BpQixLQUFBLEVBQU87UUFDbEI1RyxRQUFBLENBQVM3SCxDQUFBLEdBQUksS0FBSzZ3QixPQUFBO01BQ3RCLE9BQ0s7UUFDRGhwQixRQUFBLENBQVMyTSxNQUFBLENBQU94VSxDQUFBLEVBQUcsQ0FBQztRQUNwQkEsQ0FBQSxJQUFLO01BQ1Q7SUFDSjtJQUNBLElBQUl1dkIsS0FBQSxDQUFNNTRCLE1BQUE7TUFDTixTQUFTcUosQ0FBQSxHQUFJLEdBQUcydUIsSUFBQSxFQUFNM3VCLENBQUEsR0FBSXd2QixXQUFBLENBQVk3NEIsTUFBQSxFQUFRcUosQ0FBQSxJQUMxQyxJQUFJMnVCLElBQUEsR0FBT2EsV0FBQSxDQUFZeHZCLENBQUEsR0FBSTtRQUN2QixTQUFTMkMsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTRzQixLQUFBLENBQU01NEIsTUFBQSxFQUFRZ00sQ0FBQSxJQUM5QixJQUFJNHNCLEtBQUEsQ0FBTTVzQixDQUFBLEVBQUd5SixFQUFBLENBQUd1aUIsSUFBQSxFQUFNMzJCLE1BQU0sR0FBRztVQUMzQixJQUFJdTNCLEtBQUEsSUFBUyxLQUFLQSxLQUFBLEVBQ2RBLEtBQUEsR0FBUSxLQUFLQSxLQUFBLENBQU0vaEIsS0FBQSxDQUFNO1VBQzdCK2hCLEtBQUEsQ0FBTS9hLE1BQUEsQ0FBTzdSLENBQUEsSUFBSyxDQUFDO1FBQ3ZCO01BQ1I7SUFBQTtJQUNSLElBQUlrRixRQUFBLElBQVksS0FBS0EsUUFBQSxJQUFZMG5CLEtBQUEsSUFBUyxLQUFLQSxLQUFBLEVBQzNDLE9BQU87SUFDWCxPQUFPQSxLQUFBLENBQU01NEIsTUFBQSxJQUFVa1IsUUFBQSxDQUFTbFIsTUFBQSxHQUFTLElBQUk3QixhQUFBLENBQWN5NkIsS0FBQSxFQUFPMW5CLFFBQVEsSUFBSTRHLEtBQUE7RUFDbEY7RUFDQXVJLFNBQVNoZixNQUFBLEVBQVF0QyxJQUFBLEVBQU07SUFDbkIsSUFBSSxRQUFRK1ksS0FBQSxFQUNSLE9BQU87SUFDWCxJQUFJL1ksSUFBQSxDQUFLaVosTUFBQSxFQUNMLE9BQU83WixhQUFBLENBQWMyWixLQUFBO0lBQ3pCLElBQUk5VyxLQUFBLEVBQU80M0IsS0FBQTtJQUNYLFNBQVN2dkIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLNkgsUUFBQSxDQUFTbFIsTUFBQSxFQUFRcUosQ0FBQSxJQUFLLEdBQzNDLElBQUksS0FBSzZILFFBQUEsQ0FBUzdILENBQUEsS0FBTWhJLE1BQUEsRUFBUTtNQUM1QixJQUFJLEtBQUs2UCxRQUFBLENBQVM3SCxDQUFBLEtBQU1oSSxNQUFBLEVBQ3BCTCxLQUFBLEdBQVEsS0FBS2tRLFFBQUEsQ0FBUzdILENBQUEsR0FBSTtNQUM5QjtJQUNKO0lBQ0osSUFBSWtHLEtBQUEsR0FBUWxPLE1BQUEsR0FBUztNQUFHbU8sR0FBQSxHQUFNRCxLQUFBLEdBQVF4USxJQUFBLENBQUswTixPQUFBLENBQVFDLElBQUE7SUFDbkQsU0FBU3JELENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBS3V2QixLQUFBLENBQU01NEIsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO01BQ3hDLElBQUk4d0IsR0FBQSxHQUFNLEtBQUt2QixLQUFBLENBQU12dkIsQ0FBQTtNQUNyQixJQUFJOHdCLEdBQUEsQ0FBSTE2QixJQUFBLEdBQU8rUCxHQUFBLElBQU8ycUIsR0FBQSxDQUFJejZCLEVBQUEsR0FBSzZQLEtBQUEsSUFBVTRxQixHQUFBLENBQUkzbEIsSUFBQSxZQUFnQjhqQixVQUFBLEVBQWE7UUFDdEUsSUFBSTc0QixJQUFBLEdBQU84RCxJQUFBLENBQUsrRSxHQUFBLENBQUlpSCxLQUFBLEVBQU80cUIsR0FBQSxDQUFJMTZCLElBQUksSUFBSThQLEtBQUE7VUFBTzdQLEVBQUEsR0FBSzZELElBQUEsQ0FBS0MsR0FBQSxDQUFJZ00sR0FBQSxFQUFLMnFCLEdBQUEsQ0FBSXo2QixFQUFFLElBQUk2UCxLQUFBO1FBQzNFLElBQUk5UCxJQUFBLEdBQU9DLEVBQUEsRUFDUCxDQUFDazVCLEtBQUEsS0FBVUEsS0FBQSxHQUFRLEVBQUMsR0FBSTV2QixJQUFBLENBQUtteEIsR0FBQSxDQUFJcmpCLElBQUEsQ0FBS3JYLElBQUEsRUFBTUMsRUFBRSxDQUFDO01BQ3ZEO0lBQ0o7SUFDQSxJQUFJazVCLEtBQUEsRUFBTztNQUNQLElBQUl3QixRQUFBLEdBQVcsSUFBSWo4QixhQUFBLENBQWN5NkIsS0FBQSxDQUFNbFksSUFBQSxDQUFLOFksS0FBSyxHQUFHemdCLElBQUk7TUFDeEQsT0FBTy9YLEtBQUEsR0FBUSxJQUFJcTVCLGVBQUEsQ0FBZ0IsQ0FBQ0QsUUFBQSxFQUFVcDVCLEtBQUssQ0FBQyxJQUFJbzVCLFFBQUE7SUFDNUQ7SUFDQSxPQUFPcDVCLEtBQUEsSUFBUzhXLEtBQUE7RUFDcEI7RUFJQXJDLEdBQUc0aUIsS0FBQSxFQUFPO0lBQ04sSUFBSSxRQUFRQSxLQUFBLEVBQ1IsT0FBTztJQUNYLElBQUksRUFBRUEsS0FBQSxZQUFpQmw2QixhQUFBLEtBQ25CLEtBQUt5NkIsS0FBQSxDQUFNNTRCLE1BQUEsSUFBVXE0QixLQUFBLENBQU1PLEtBQUEsQ0FBTTU0QixNQUFBLElBQ2pDLEtBQUtrUixRQUFBLENBQVNsUixNQUFBLElBQVVxNEIsS0FBQSxDQUFNbm5CLFFBQUEsQ0FBU2xSLE1BQUEsRUFDdkMsT0FBTztJQUNYLFNBQVNxSixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUt1dkIsS0FBQSxDQUFNNTRCLE1BQUEsRUFBUXFKLENBQUEsSUFDbkMsSUFBSSxDQUFDLEtBQUt1dkIsS0FBQSxDQUFNdnZCLENBQUEsRUFBR29NLEVBQUEsQ0FBRzRpQixLQUFBLENBQU1PLEtBQUEsQ0FBTXZ2QixDQUFBLENBQUUsR0FDaEMsT0FBTztJQUNmLFNBQVNBLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBSzZILFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsSUFBSyxHQUMzQyxJQUFJLEtBQUs2SCxRQUFBLENBQVM3SCxDQUFBLEtBQU1ndkIsS0FBQSxDQUFNbm5CLFFBQUEsQ0FBUzdILENBQUEsS0FDbkMsS0FBSzZILFFBQUEsQ0FBUzdILENBQUEsR0FBSSxNQUFNZ3ZCLEtBQUEsQ0FBTW5uQixRQUFBLENBQVM3SCxDQUFBLEdBQUksTUFDM0MsQ0FBQyxLQUFLNkgsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLEdBQUdvTSxFQUFBLENBQUc0aUIsS0FBQSxDQUFNbm5CLFFBQUEsQ0FBUzdILENBQUEsR0FBSSxFQUFFLEdBQzlDLE9BQU87SUFDZixPQUFPO0VBQ1g7RUFJQStXLE9BQU9yaEIsSUFBQSxFQUFNO0lBQ1QsT0FBT3U3QixhQUFBLENBQWMsS0FBS0MsV0FBQSxDQUFZeDdCLElBQUksQ0FBQztFQUMvQztFQUlBdzdCLFlBQVl4N0IsSUFBQSxFQUFNO0lBQ2QsSUFBSSxRQUFRK1ksS0FBQSxFQUNSLE9BQU9pQixJQUFBO0lBQ1gsSUFBSWhhLElBQUEsQ0FBS2lQLGFBQUEsSUFBaUIsQ0FBQyxLQUFLNHFCLEtBQUEsQ0FBTTVGLElBQUEsQ0FBS3NGLFVBQUEsQ0FBV0csRUFBRSxHQUNwRCxPQUFPLEtBQUtHLEtBQUE7SUFDaEIsSUFBSXZvQixNQUFBLEdBQVMsRUFBQztJQUNkLFNBQVNoSCxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUt1dkIsS0FBQSxDQUFNNTRCLE1BQUEsRUFBUXFKLENBQUEsSUFBSztNQUN4QyxJQUFJLEVBQUUsS0FBS3V2QixLQUFBLENBQU12dkIsQ0FBQSxFQUFHbUwsSUFBQSxZQUFnQjhqQixVQUFBLEdBQ2hDam9CLE1BQUEsQ0FBT3JILElBQUEsQ0FBSyxLQUFLNHZCLEtBQUEsQ0FBTXZ2QixDQUFBLENBQUU7SUFDakM7SUFDQSxPQUFPZ0gsTUFBQTtFQUNYO0VBQ0FtcUIsV0FBV25zQixDQUFBLEVBQUc7SUFBRUEsQ0FBQSxDQUFFLElBQUk7RUFBRztBQUM3QjtBQUlBbFEsYUFBQSxDQUFjMlosS0FBQSxHQUFRLElBQUkzWixhQUFBLENBQWMsRUFBQyxFQUFHLEVBQUU7QUFJOUNBLGFBQUEsQ0FBY204QixhQUFBLEdBQWdCQSxhQUFBO0FBQzlCLElBQU14aUIsS0FBQSxHQUFRM1osYUFBQSxDQUFjMlosS0FBQTtBQUk1QixJQUFNdWlCLGVBQUEsR0FBTixNQUFzQjtFQUNsQnBwQixZQUFZd3BCLE9BQUEsRUFBUztJQUNqQixLQUFLQSxPQUFBLEdBQVVBLE9BQUE7RUFDbkI7RUFDQWxPLElBQUlzSyxPQUFBLEVBQVNoMEIsSUFBQSxFQUFLO0lBQ2QsTUFBTTYzQixXQUFBLEdBQWMsS0FBS0QsT0FBQSxDQUFRbE8sR0FBQSxDQUFJb08sTUFBQSxJQUFVQSxNQUFBLENBQU9wTyxHQUFBLENBQUlzSyxPQUFBLEVBQVNoMEIsSUFBQSxFQUFLazFCLE1BQU0sQ0FBQztJQUMvRSxPQUFPc0MsZUFBQSxDQUFnQjU2QixJQUFBLENBQUtpN0IsV0FBVztFQUMzQztFQUNBcmEsU0FBU2hmLE1BQUEsRUFBUUwsS0FBQSxFQUFPO0lBQ3BCLElBQUlBLEtBQUEsQ0FBTWdYLE1BQUEsRUFDTixPQUFPN1osYUFBQSxDQUFjMlosS0FBQTtJQUN6QixJQUFJb0csS0FBQSxHQUFRLEVBQUM7SUFDYixTQUFTN1UsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLb3hCLE9BQUEsQ0FBUXo2QixNQUFBLEVBQVFxSixDQUFBLElBQUs7TUFDMUMsSUFBSWdILE1BQUEsR0FBUyxLQUFLb3FCLE9BQUEsQ0FBUXB4QixDQUFBLEVBQUdnWCxRQUFBLENBQVNoZixNQUFBLEVBQVFMLEtBQUs7TUFDbkQsSUFBSXFQLE1BQUEsSUFBVXlILEtBQUEsRUFDVjtNQUNKLElBQUl6SCxNQUFBLFlBQWtCZ3FCLGVBQUEsRUFDbEJuYyxLQUFBLEdBQVFBLEtBQUEsQ0FBTThiLE1BQUEsQ0FBTzNwQixNQUFBLENBQU9vcUIsT0FBTyxPQUVuQ3ZjLEtBQUEsQ0FBTWxWLElBQUEsQ0FBS3FILE1BQU07SUFDekI7SUFDQSxPQUFPZ3FCLGVBQUEsQ0FBZ0I1NkIsSUFBQSxDQUFLeWUsS0FBSztFQUNyQztFQUNBekksR0FBRzRpQixLQUFBLEVBQU87SUFDTixJQUFJLEVBQUVBLEtBQUEsWUFBaUJnQyxlQUFBLEtBQ25CaEMsS0FBQSxDQUFNb0MsT0FBQSxDQUFRejZCLE1BQUEsSUFBVSxLQUFLeTZCLE9BQUEsQ0FBUXo2QixNQUFBLEVBQ3JDLE9BQU87SUFDWCxTQUFTcUosQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLb3hCLE9BQUEsQ0FBUXo2QixNQUFBLEVBQVFxSixDQUFBLElBQ3JDLElBQUksQ0FBQyxLQUFLb3hCLE9BQUEsQ0FBUXB4QixDQUFBLEVBQUdvTSxFQUFBLENBQUc0aUIsS0FBQSxDQUFNb0MsT0FBQSxDQUFRcHhCLENBQUEsQ0FBRSxHQUNwQyxPQUFPO0lBQ2YsT0FBTztFQUNYO0VBQ0ErVyxPQUFPcmhCLElBQUEsRUFBTTtJQUNULElBQUlzUixNQUFBO01BQVF1cUIsTUFBQSxHQUFTO0lBQ3JCLFNBQVN2eEIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLb3hCLE9BQUEsQ0FBUXo2QixNQUFBLEVBQVFxSixDQUFBLElBQUs7TUFDMUMsSUFBSStXLE1BQUEsR0FBUyxLQUFLcWEsT0FBQSxDQUFRcHhCLENBQUEsRUFBR2t4QixXQUFBLENBQVl4N0IsSUFBSTtNQUM3QyxJQUFJLENBQUNxaEIsTUFBQSxDQUFPcGdCLE1BQUEsRUFDUjtNQUNKLElBQUksQ0FBQ3FRLE1BQUEsRUFBUTtRQUNUQSxNQUFBLEdBQVMrUCxNQUFBO01BQ2IsT0FDSztRQUNELElBQUl3YSxNQUFBLEVBQVE7VUFDUnZxQixNQUFBLEdBQVNBLE1BQUEsQ0FBT3dHLEtBQUEsQ0FBTTtVQUN0QitqQixNQUFBLEdBQVM7UUFDYjtRQUNBLFNBQVM1dUIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSW9VLE1BQUEsQ0FBT3BnQixNQUFBLEVBQVFnTSxDQUFBLElBQy9CcUUsTUFBQSxDQUFPckgsSUFBQSxDQUFLb1gsTUFBQSxDQUFPcFUsQ0FBQSxDQUFFO01BQzdCO0lBQ0o7SUFDQSxPQUFPcUUsTUFBQSxHQUFTaXFCLGFBQUEsQ0FBY00sTUFBQSxHQUFTdnFCLE1BQUEsR0FBU0EsTUFBQSxDQUFPcVEsSUFBQSxDQUFLOFksS0FBSyxDQUFDLElBQUl6Z0IsSUFBQTtFQUMxRTtFQUdBLE9BQU90WixLQUFLZzdCLE9BQUEsRUFBUztJQUNqQixRQUFRQSxPQUFBLENBQVF6NkIsTUFBQTtNQUFBLEtBQ1A7UUFBRyxPQUFPOFgsS0FBQTtNQUFBLEtBQ1Y7UUFBRyxPQUFPMmlCLE9BQUEsQ0FBUTtNQUFBO1FBQ2QsT0FBTyxJQUFJSixlQUFBLENBQWdCSSxPQUFBLENBQVFJLEtBQUEsQ0FBTXhkLENBQUEsSUFBS0EsQ0FBQSxZQUFhbGYsYUFBYSxJQUFJczhCLE9BQUEsR0FDakZBLE9BQUEsQ0FBUUssTUFBQSxDQUFPLENBQUNDLENBQUEsRUFBRzFkLENBQUEsS0FBTTBkLENBQUEsQ0FBRWYsTUFBQSxDQUFPM2MsQ0FBQSxZQUFhbGYsYUFBQSxHQUFnQmtmLENBQUEsR0FBSUEsQ0FBQSxDQUFFb2QsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUFBO0VBRTlGO0VBQ0FELFdBQVduc0IsQ0FBQSxFQUFHO0lBQ1YsU0FBU2hGLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBS294QixPQUFBLENBQVF6NkIsTUFBQSxFQUFRcUosQ0FBQSxJQUNyQyxLQUFLb3hCLE9BQUEsQ0FBUXB4QixDQUFBLEVBQUdteEIsVUFBQSxDQUFXbnNCLENBQUM7RUFDcEM7QUFDSjtBQUNBLFNBQVNrckIsWUFBWXlCLFdBQUEsRUFBYTVCLFFBQUEsRUFBVXZDLE9BQUEsRUFBUzkzQixJQUFBLEVBQU1zQyxNQUFBLEVBQVE0MkIsU0FBQSxFQUFXaUIsT0FBQSxFQUFTO0VBQ25GLElBQUlob0IsUUFBQSxHQUFXOHBCLFdBQUEsQ0FBWW5rQixLQUFBLENBQU07RUFHakMsU0FBU3hOLENBQUEsR0FBSSxHQUFHdXdCLFVBQUEsR0FBYTNCLFNBQUEsRUFBVzV1QixDQUFBLEdBQUl3dEIsT0FBQSxDQUFRSyxJQUFBLENBQUtsM0IsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO0lBQ2xFLElBQUk0eEIsS0FBQSxHQUFRO0lBQ1pwRSxPQUFBLENBQVFLLElBQUEsQ0FBSzd0QixDQUFBLEVBQUd5ZixPQUFBLENBQVEsQ0FBQ29TLFFBQUEsRUFBVUMsTUFBQSxFQUFRQyxRQUFBLEVBQVVDLE1BQUEsS0FBVztNQUM1RCxJQUFJQyxLQUFBLEdBQVNELE1BQUEsR0FBU0QsUUFBQSxJQUFhRCxNQUFBLEdBQVNELFFBQUE7TUFDNUMsU0FBU3ZvQixFQUFBLEdBQUksR0FBR0EsRUFBQSxHQUFJekIsUUFBQSxDQUFTbFIsTUFBQSxFQUFRMlMsRUFBQSxJQUFLLEdBQUc7UUFDekMsSUFBSW5ELEdBQUEsR0FBTTBCLFFBQUEsQ0FBU3lCLEVBQUEsR0FBSTtRQUN2QixJQUFJbkQsR0FBQSxHQUFNLEtBQUswckIsUUFBQSxHQUFXMXJCLEdBQUEsR0FBTW9xQixVQUFBLEdBQWFxQixLQUFBLEVBQ3pDO1FBQ0osSUFBSTFyQixLQUFBLEdBQVEyQixRQUFBLENBQVN5QixFQUFBLElBQUtpbkIsVUFBQSxHQUFhcUIsS0FBQTtRQUN2QyxJQUFJRSxNQUFBLElBQVU1ckIsS0FBQSxFQUFPO1VBQ2pCMkIsUUFBQSxDQUFTeUIsRUFBQSxHQUFJLEtBQUt1b0IsUUFBQSxJQUFZM3JCLEtBQUEsR0FBUSxLQUFLO1FBQy9DLFdBQ1MyckIsUUFBQSxJQUFZdEIsVUFBQSxJQUFjMEIsS0FBQSxFQUFPO1VBQ3RDcHFCLFFBQUEsQ0FBU3lCLEVBQUEsS0FBTTJvQixLQUFBO1VBQ2ZwcUIsUUFBQSxDQUFTeUIsRUFBQSxHQUFJLE1BQU0yb0IsS0FBQTtRQUN2QjtNQUNKO01BQ0FMLEtBQUEsSUFBU0ssS0FBQTtJQUNiLENBQUM7SUFDRDFCLFVBQUEsR0FBYS9DLE9BQUEsQ0FBUUssSUFBQSxDQUFLN3RCLENBQUEsRUFBR2tqQixHQUFBLENBQUlxTixVQUFBLEVBQVksRUFBRTtFQUNuRDtFQUdBLElBQUkyQixXQUFBLEdBQWM7RUFDbEIsU0FBU2x5QixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJNkgsUUFBQSxDQUFTbFIsTUFBQSxFQUFRcUosQ0FBQSxJQUFLLEdBQ3RDLElBQUk2SCxRQUFBLENBQVM3SCxDQUFBLEdBQUksS0FBSyxHQUFHO0lBQ3JCLElBQUk2SCxRQUFBLENBQVM3SCxDQUFBLEdBQUksTUFBTSxJQUFJO01BQ3ZCa3lCLFdBQUEsR0FBYztNQUNkcnFCLFFBQUEsQ0FBUzdILENBQUEsR0FBSSxLQUFLO01BQ2xCO0lBQ0o7SUFDQSxJQUFJNUosSUFBQSxHQUFPbzNCLE9BQUEsQ0FBUXRLLEdBQUEsQ0FBSXlPLFdBQUEsQ0FBWTN4QixDQUFBLElBQUs0dUIsU0FBUztNQUFHdUQsU0FBQSxHQUFZLzdCLElBQUEsR0FBTzRCLE1BQUE7SUFDdkUsSUFBSW02QixTQUFBLEdBQVksS0FBS0EsU0FBQSxJQUFhejhCLElBQUEsQ0FBSzBOLE9BQUEsQ0FBUUMsSUFBQSxFQUFNO01BQ2pENnVCLFdBQUEsR0FBYztNQUNkO0lBQ0o7SUFFQSxJQUFJNzdCLEVBQUEsR0FBS20zQixPQUFBLENBQVF0SyxHQUFBLENBQUl5TyxXQUFBLENBQVkzeEIsQ0FBQSxHQUFJLEtBQUs0dUIsU0FBQSxFQUFXLEVBQUU7TUFBR3dELE9BQUEsR0FBVS83QixFQUFBLEdBQUsyQixNQUFBO0lBQ3pFLElBQUk7TUFBRXJDLEtBQUE7TUFBT3FDLE1BQUEsRUFBUXM0QjtJQUFZLElBQUk1NkIsSUFBQSxDQUFLME4sT0FBQSxDQUFRa3NCLFNBQUEsQ0FBVTZDLFNBQVM7SUFDckUsSUFBSTlCLFNBQUEsR0FBWTM2QixJQUFBLENBQUsyOEIsVUFBQSxDQUFXMThCLEtBQUs7SUFDckMsSUFBSTA2QixTQUFBLElBQWFDLFdBQUEsSUFBZTZCLFNBQUEsSUFBYTdCLFdBQUEsR0FBY0QsU0FBQSxDQUFVLzRCLFFBQUEsSUFBWTg2QixPQUFBLEVBQVM7TUFDdEYsSUFBSXBDLE1BQUEsR0FBU25vQixRQUFBLENBQVM3SCxDQUFBLEdBQUksR0FDckI4dkIsUUFBQSxDQUFTdEMsT0FBQSxFQUFTNkMsU0FBQSxFQUFXajZCLElBQUEsR0FBTyxHQUFHdTdCLFdBQUEsQ0FBWTN4QixDQUFBLElBQUs0dUIsU0FBQSxHQUFZLEdBQUdpQixPQUFPO01BQ25GLElBQUlHLE1BQUEsSUFBVXZoQixLQUFBLEVBQU87UUFDakI1RyxRQUFBLENBQVM3SCxDQUFBLElBQUtteUIsU0FBQTtRQUNkdHFCLFFBQUEsQ0FBUzdILENBQUEsR0FBSSxLQUFLb3lCLE9BQUE7UUFDbEJ2cUIsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLEtBQUtnd0IsTUFBQTtNQUN0QixPQUNLO1FBQ0Rub0IsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLEtBQUs7UUFDbEJreUIsV0FBQSxHQUFjO01BQ2xCO0lBQ0osT0FDSztNQUNEQSxXQUFBLEdBQWM7SUFDbEI7RUFDSjtFQUVKLElBQUlBLFdBQUEsRUFBYTtJQUNiLElBQUkxQyxXQUFBLEdBQWM4QyxnQ0FBQSxDQUFpQ3pxQixRQUFBLEVBQVU4cEIsV0FBQSxFQUFhNUIsUUFBQSxFQUFVdkMsT0FBQSxFQUFTeDFCLE1BQUEsRUFBUTQyQixTQUFBLEVBQVdpQixPQUFPO0lBQ3ZILElBQUkwQyxLQUFBLEdBQVE5QyxTQUFBLENBQVVELFdBQUEsRUFBYTk1QixJQUFBLEVBQU0sR0FBR202QixPQUFPO0lBQ25ERSxRQUFBLEdBQVd3QyxLQUFBLENBQU1oRCxLQUFBO0lBQ2pCLFNBQVN2dkIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTZILFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsSUFBSyxHQUN0QyxJQUFJNkgsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLEtBQUssR0FBRztNQUNyQjZILFFBQUEsQ0FBUzJNLE1BQUEsQ0FBT3hVLENBQUEsRUFBRyxDQUFDO01BQ3BCQSxDQUFBLElBQUs7SUFDVDtJQUNKLFNBQVNBLENBQUEsR0FBSSxHQUFHMkMsQ0FBQSxHQUFJLEdBQUczQyxDQUFBLEdBQUl1eUIsS0FBQSxDQUFNMXFCLFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsSUFBSyxHQUFHO01BQ3RELElBQUk1SixJQUFBLEdBQU9tOEIsS0FBQSxDQUFNMXFCLFFBQUEsQ0FBUzdILENBQUE7TUFDMUIsT0FBTzJDLENBQUEsR0FBSWtGLFFBQUEsQ0FBU2xSLE1BQUEsSUFBVWtSLFFBQUEsQ0FBU2xGLENBQUEsSUFBS3ZNLElBQUEsRUFDeEN1TSxDQUFBLElBQUs7TUFDVGtGLFFBQUEsQ0FBUzJNLE1BQUEsQ0FBTzdSLENBQUEsRUFBRyxHQUFHNHZCLEtBQUEsQ0FBTTFxQixRQUFBLENBQVM3SCxDQUFBLEdBQUl1eUIsS0FBQSxDQUFNMXFCLFFBQUEsQ0FBUzdILENBQUEsR0FBSSxJQUFJdXlCLEtBQUEsQ0FBTTFxQixRQUFBLENBQVM3SCxDQUFBLEdBQUksRUFBRTtJQUN6RjtFQUNKO0VBQ0EsT0FBTyxJQUFJbEwsYUFBQSxDQUFjaTdCLFFBQUEsQ0FBUzFZLElBQUEsQ0FBSzhZLEtBQUssR0FBR3RvQixRQUFRO0FBQzNEO0FBQ0EsU0FBUzRvQixVQUFVK0IsS0FBQSxFQUFPeDZCLE1BQUEsRUFBUTtFQUM5QixJQUFJLENBQUNBLE1BQUEsSUFBVSxDQUFDdzZCLEtBQUEsQ0FBTTc3QixNQUFBLEVBQ2xCLE9BQU82N0IsS0FBQTtFQUNYLElBQUl4ckIsTUFBQSxHQUFTLEVBQUM7RUFDZCxTQUFTaEgsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSXd5QixLQUFBLENBQU03N0IsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO0lBQ25DLElBQUkydUIsSUFBQSxHQUFPNkQsS0FBQSxDQUFNeHlCLENBQUE7SUFDakJnSCxNQUFBLENBQU9ySCxJQUFBLENBQUssSUFBSTlLLFVBQUEsQ0FBVzg1QixJQUFBLENBQUt2NEIsSUFBQSxHQUFPNEIsTUFBQSxFQUFRMjJCLElBQUEsQ0FBS3Q0QixFQUFBLEdBQUsyQixNQUFBLEVBQVEyMkIsSUFBQSxDQUFLeGpCLElBQUksQ0FBQztFQUMvRTtFQUNBLE9BQU9uRSxNQUFBO0FBQ1g7QUFDQSxTQUFTc3JCLGlDQUFpQ3pxQixRQUFBLEVBQVU4cEIsV0FBQSxFQUFhbkMsV0FBQSxFQUFhaEMsT0FBQSxFQUFTeDFCLE1BQUEsRUFBUTQyQixTQUFBLEVBQVdpQixPQUFBLEVBQVM7RUFFL0csU0FBUzRDLE9BQU8vYixHQUFBLEVBQUtnYyxVQUFBLEVBQVc7SUFDNUIsU0FBUzF5QixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJMFcsR0FBQSxDQUFJNlksS0FBQSxDQUFNNTRCLE1BQUEsRUFBUXFKLENBQUEsSUFBSztNQUN2QyxJQUFJZ3dCLE1BQUEsR0FBU3RaLEdBQUEsQ0FBSTZZLEtBQUEsQ0FBTXZ2QixDQUFBLEVBQUdrakIsR0FBQSxDQUFJc0ssT0FBQSxFQUFTeDFCLE1BQUEsRUFBUTA2QixVQUFTO01BQ3hELElBQUkxQyxNQUFBLEVBQ0FSLFdBQUEsQ0FBWTd2QixJQUFBLENBQUtxd0IsTUFBTSxXQUNsQkgsT0FBQSxDQUFRSSxRQUFBLEVBQ2JKLE9BQUEsQ0FBUUksUUFBQSxDQUFTdlosR0FBQSxDQUFJNlksS0FBQSxDQUFNdnZCLENBQUEsRUFBRzZMLElBQUk7SUFDMUM7SUFDQSxTQUFTN0wsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTBXLEdBQUEsQ0FBSTdPLFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsSUFBSyxHQUMxQ3l5QixNQUFBLENBQU8vYixHQUFBLENBQUk3TyxRQUFBLENBQVM3SCxDQUFBLEdBQUksSUFBSTBXLEdBQUEsQ0FBSTdPLFFBQUEsQ0FBUzdILENBQUEsSUFBSzB5QixVQUFBLEdBQVksQ0FBQztFQUNuRTtFQUNBLFNBQVMxeUIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTZILFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsSUFBSyxHQUN0QyxJQUFJNkgsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLE1BQU0sSUFDbkJ5eUIsTUFBQSxDQUFPNXFCLFFBQUEsQ0FBUzdILENBQUEsR0FBSSxJQUFJMnhCLFdBQUEsQ0FBWTN4QixDQUFBLElBQUs0dUIsU0FBQSxHQUFZLENBQUM7RUFDOUQsT0FBT1ksV0FBQTtBQUNYO0FBQ0EsU0FBU2dCLGlCQUFpQmdDLEtBQUEsRUFBTzk4QixJQUFBLEVBQU1zQyxNQUFBLEVBQVE7RUFDM0MsSUFBSXRDLElBQUEsQ0FBS2laLE1BQUEsRUFDTCxPQUFPO0VBQ1gsSUFBSXhJLEdBQUEsR0FBTW5PLE1BQUEsR0FBU3RDLElBQUEsQ0FBSzRCLFFBQUE7SUFBVXVkLEtBQUEsR0FBUTtFQUMxQyxTQUFTN1UsQ0FBQSxHQUFJLEdBQUcydUIsSUFBQSxFQUFNM3VCLENBQUEsR0FBSXd5QixLQUFBLENBQU03N0IsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO0lBQ3pDLEtBQUsydUIsSUFBQSxHQUFPNkQsS0FBQSxDQUFNeHlCLENBQUEsTUFBTzJ1QixJQUFBLENBQUt2NEIsSUFBQSxHQUFPNEIsTUFBQSxJQUFVMjJCLElBQUEsQ0FBS3Q0QixFQUFBLEdBQUs4UCxHQUFBLEVBQUs7TUFDMUQsQ0FBQzBPLEtBQUEsS0FBVUEsS0FBQSxHQUFRLEVBQUMsR0FBSWxWLElBQUEsQ0FBS2d2QixJQUFJO01BQ2pDNkQsS0FBQSxDQUFNeHlCLENBQUEsSUFBSztJQUNmO0VBQ0o7RUFDQSxPQUFPNlUsS0FBQTtBQUNYO0FBQ0EsU0FBUzZiLGFBQWFwTixLQUFBLEVBQU87RUFDekIsSUFBSXRjLE1BQUEsR0FBUyxFQUFDO0VBQ2QsU0FBU2hILENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlzakIsS0FBQSxDQUFNM3NCLE1BQUEsRUFBUXFKLENBQUEsSUFDOUIsSUFBSXNqQixLQUFBLENBQU10akIsQ0FBQSxLQUFNLE1BQ1pnSCxNQUFBLENBQU9ySCxJQUFBLENBQUsyakIsS0FBQSxDQUFNdGpCLENBQUEsQ0FBRTtFQUM1QixPQUFPZ0gsTUFBQTtBQUNYO0FBS0EsU0FBU3lvQixVQUFVK0MsS0FBQSxFQUFPOThCLElBQUEsRUFBTXNDLE1BQUEsRUFBUTYzQixPQUFBLEVBQVM7RUFDN0MsSUFBSWhvQixRQUFBLEdBQVcsRUFBQztJQUFHOHFCLFFBQUEsR0FBVztFQUM5Qmo5QixJQUFBLENBQUsrcEIsT0FBQSxDQUFRLENBQUM0USxTQUFBLEVBQVd1QyxVQUFBLEtBQWU7SUFDcEMsSUFBSS9kLEtBQUEsR0FBUTJiLGdCQUFBLENBQWlCZ0MsS0FBQSxFQUFPbkMsU0FBQSxFQUFXdUMsVUFBQSxHQUFhNTZCLE1BQU07SUFDbEUsSUFBSTZjLEtBQUEsRUFBTztNQUNQOGQsUUFBQSxHQUFXO01BQ1gsSUFBSUUsT0FBQSxHQUFVcEQsU0FBQSxDQUFVNWEsS0FBQSxFQUFPd2IsU0FBQSxFQUFXcjRCLE1BQUEsR0FBUzQ2QixVQUFBLEdBQWEsR0FBRy9DLE9BQU87TUFDMUUsSUFBSWdELE9BQUEsSUFBV3BrQixLQUFBLEVBQ1g1RyxRQUFBLENBQVNsSSxJQUFBLENBQUtpekIsVUFBQSxFQUFZQSxVQUFBLEdBQWF2QyxTQUFBLENBQVUvNEIsUUFBQSxFQUFVdTdCLE9BQU87SUFDMUU7RUFDSixDQUFDO0VBQ0QsSUFBSTliLE1BQUEsR0FBUzBaLFNBQUEsQ0FBVWtDLFFBQUEsR0FBV2pDLFlBQUEsQ0FBYThCLEtBQUssSUFBSUEsS0FBQSxFQUFPLENBQUN4NkIsTUFBTSxFQUFFcWYsSUFBQSxDQUFLOFksS0FBSztFQUNsRixTQUFTbndCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkrVyxNQUFBLENBQU9wZ0IsTUFBQSxFQUFRcUosQ0FBQSxJQUMvQixJQUFJLENBQUMrVyxNQUFBLENBQU8vVyxDQUFBLEVBQUdtTCxJQUFBLENBQUs0akIsS0FBQSxDQUFNcjVCLElBQUEsRUFBTXFoQixNQUFBLENBQU8vVyxDQUFBLENBQUUsR0FBRztJQUN4QyxJQUFJNnZCLE9BQUEsQ0FBUUksUUFBQSxFQUNSSixPQUFBLENBQVFJLFFBQUEsQ0FBU2xaLE1BQUEsQ0FBTy9XLENBQUEsRUFBRzZMLElBQUk7SUFDbkNrTCxNQUFBLENBQU92QyxNQUFBLENBQU94VSxDQUFBLElBQUssQ0FBQztFQUN4QjtFQUNKLE9BQU8rVyxNQUFBLENBQU9wZ0IsTUFBQSxJQUFVa1IsUUFBQSxDQUFTbFIsTUFBQSxHQUFTLElBQUk3QixhQUFBLENBQWNpaUIsTUFBQSxFQUFRbFAsUUFBUSxJQUFJNEcsS0FBQTtBQUNwRjtBQUlBLFNBQVMwaEIsTUFBTWhjLENBQUEsRUFBR0MsQ0FBQSxFQUFHO0VBQ2pCLE9BQU9ELENBQUEsQ0FBRS9kLElBQUEsR0FBT2dlLENBQUEsQ0FBRWhlLElBQUEsSUFBUStkLENBQUEsQ0FBRTlkLEVBQUEsR0FBSytkLENBQUEsQ0FBRS9kLEVBQUE7QUFDdkM7QUFLQSxTQUFTNDZCLGNBQWN1QixLQUFBLEVBQU87RUFDMUIsSUFBSU0sT0FBQSxHQUFVTixLQUFBO0VBQ2QsU0FBU3h5QixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJOHlCLE9BQUEsQ0FBUW44QixNQUFBLEdBQVMsR0FBR3FKLENBQUEsSUFBSztJQUN6QyxJQUFJMnVCLElBQUEsR0FBT21FLE9BQUEsQ0FBUTl5QixDQUFBO0lBQ25CLElBQUkydUIsSUFBQSxDQUFLdjRCLElBQUEsSUFBUXU0QixJQUFBLENBQUt0NEIsRUFBQSxFQUNsQixTQUFTc00sQ0FBQSxHQUFJM0MsQ0FBQSxHQUFJLEdBQUcyQyxDQUFBLEdBQUltd0IsT0FBQSxDQUFRbjhCLE1BQUEsRUFBUWdNLENBQUEsSUFBSztNQUN6QyxJQUFJSyxJQUFBLEdBQU84dkIsT0FBQSxDQUFRbndCLENBQUE7TUFDbkIsSUFBSUssSUFBQSxDQUFLNU0sSUFBQSxJQUFRdTRCLElBQUEsQ0FBS3Y0QixJQUFBLEVBQU07UUFDeEIsSUFBSTRNLElBQUEsQ0FBSzNNLEVBQUEsSUFBTXM0QixJQUFBLENBQUt0NEIsRUFBQSxFQUFJO1VBQ3BCLElBQUl5OEIsT0FBQSxJQUFXTixLQUFBLEVBQ1hNLE9BQUEsR0FBVU4sS0FBQSxDQUFNaGxCLEtBQUEsQ0FBTTtVQUcxQnNsQixPQUFBLENBQVFud0IsQ0FBQSxJQUFLSyxJQUFBLENBQUt5SyxJQUFBLENBQUt6SyxJQUFBLENBQUs1TSxJQUFBLEVBQU11NEIsSUFBQSxDQUFLdDRCLEVBQUU7VUFDekMwOEIsV0FBQSxDQUFZRCxPQUFBLEVBQVNud0IsQ0FBQSxHQUFJLEdBQUdLLElBQUEsQ0FBS3lLLElBQUEsQ0FBS2toQixJQUFBLENBQUt0NEIsRUFBQSxFQUFJMk0sSUFBQSxDQUFLM00sRUFBRSxDQUFDO1FBQzNEO1FBQ0E7TUFDSixPQUNLO1FBQ0QsSUFBSTJNLElBQUEsQ0FBSzVNLElBQUEsR0FBT3U0QixJQUFBLENBQUt0NEIsRUFBQSxFQUFJO1VBQ3JCLElBQUl5OEIsT0FBQSxJQUFXTixLQUFBLEVBQ1hNLE9BQUEsR0FBVU4sS0FBQSxDQUFNaGxCLEtBQUEsQ0FBTTtVQUcxQnNsQixPQUFBLENBQVE5eUIsQ0FBQSxJQUFLMnVCLElBQUEsQ0FBS2xoQixJQUFBLENBQUtraEIsSUFBQSxDQUFLdjRCLElBQUEsRUFBTTRNLElBQUEsQ0FBSzVNLElBQUk7VUFDM0MyOEIsV0FBQSxDQUFZRCxPQUFBLEVBQVNud0IsQ0FBQSxFQUFHZ3NCLElBQUEsQ0FBS2xoQixJQUFBLENBQUt6SyxJQUFBLENBQUs1TSxJQUFBLEVBQU11NEIsSUFBQSxDQUFLdDRCLEVBQUUsQ0FBQztRQUN6RDtRQUNBO01BQ0o7SUFDSjtFQUNSO0VBQ0EsT0FBT3k4QixPQUFBO0FBQ1g7QUFDQSxTQUFTQyxZQUFZelAsS0FBQSxFQUFPdGpCLENBQUEsRUFBR3FULElBQUEsRUFBTTtFQUNqQyxPQUFPclQsQ0FBQSxHQUFJc2pCLEtBQUEsQ0FBTTNzQixNQUFBLElBQVV3NUIsS0FBQSxDQUFNOWMsSUFBQSxFQUFNaVEsS0FBQSxDQUFNdGpCLENBQUEsQ0FBRSxJQUFJLEdBQy9DQSxDQUFBO0VBQ0pzakIsS0FBQSxDQUFNOU8sTUFBQSxDQUFPeFUsQ0FBQSxFQUFHLEdBQUdxVCxJQUFJO0FBQzNCO0FBRUEsU0FBUzJmLGdCQUFnQnIxQixJQUFBLEVBQU07RUFDM0IsSUFBSWtYLEtBQUEsR0FBUSxFQUFDO0VBQ2JsWCxJQUFBLENBQUtHLFFBQUEsQ0FBUyxlQUFla0gsQ0FBQSxJQUFLO0lBQzlCLElBQUlnQyxNQUFBLEdBQVNoQyxDQUFBLENBQUVySCxJQUFBLENBQUt3RixLQUFLO0lBQ3pCLElBQUk2RCxNQUFBLElBQVVBLE1BQUEsSUFBVXlILEtBQUEsRUFDcEJvRyxLQUFBLENBQU1sVixJQUFBLENBQUtxSCxNQUFNO0VBQ3pCLENBQUM7RUFDRCxJQUFJckosSUFBQSxDQUFLK2IsYUFBQSxFQUNMN0UsS0FBQSxDQUFNbFYsSUFBQSxDQUFLN0ssYUFBQSxDQUFjZ1ksTUFBQSxDQUFPblAsSUFBQSxDQUFLd0YsS0FBQSxDQUFNekksR0FBQSxFQUFLLENBQUNpRCxJQUFBLENBQUsrYixhQUFBLENBQWNyRyxJQUFJLENBQUMsQ0FBQztFQUM5RSxPQUFPMmQsZUFBQSxDQUFnQjU2QixJQUFBLENBQUt5ZSxLQUFLO0FBQ3JDO0FBRUEsSUFBTW9lLGNBQUEsR0FBaUI7RUFDbkJDLFNBQUEsRUFBVztFQUNYQyxhQUFBLEVBQWU7RUFDZkMscUJBQUEsRUFBdUI7RUFDdkJDLFVBQUEsRUFBWTtFQUNaQyxpQkFBQSxFQUFtQjtFQUNuQlQsT0FBQSxFQUFTO0FBQ2I7QUFFQSxJQUFNVSxXQUFBLEdBQWN0NEIsRUFBQSxJQUFNQyxVQUFBLElBQWM7QUFDeEMsSUFBTXM0QixjQUFBLEdBQU4sTUFBcUI7RUFDakI1ckIsWUFBQSxFQUFjO0lBQ1YsS0FBSzlPLFVBQUEsR0FBYTtJQUNsQixLQUFLQyxZQUFBLEdBQWU7SUFDcEIsS0FBS0gsU0FBQSxHQUFZO0lBQ2pCLEtBQUtDLFdBQUEsR0FBYztFQUN2QjtFQUNBNmQsSUFBSXJSLEdBQUEsRUFBSztJQUNMLEtBQUt2TSxVQUFBLEdBQWF1TSxHQUFBLENBQUl2TSxVQUFBO0lBQ3RCLEtBQUtDLFlBQUEsR0FBZXNNLEdBQUEsQ0FBSXRNLFlBQUE7SUFDeEIsS0FBS0gsU0FBQSxHQUFZeU0sR0FBQSxDQUFJek0sU0FBQTtJQUNyQixLQUFLQyxXQUFBLEdBQWN3TSxHQUFBLENBQUl4TSxXQUFBO0VBQzNCO0VBQ0FzMUIsTUFBQSxFQUFRO0lBQ0osS0FBS3IxQixVQUFBLEdBQWEsS0FBS0YsU0FBQSxHQUFZO0VBQ3ZDO0VBQ0F3VCxHQUFHL0csR0FBQSxFQUFLO0lBQ0osT0FBT0EsR0FBQSxDQUFJdk0sVUFBQSxJQUFjLEtBQUtBLFVBQUEsSUFBY3VNLEdBQUEsQ0FBSXRNLFlBQUEsSUFBZ0IsS0FBS0EsWUFBQSxJQUNqRXNNLEdBQUEsQ0FBSXpNLFNBQUEsSUFBYSxLQUFLQSxTQUFBLElBQWF5TSxHQUFBLENBQUl4TSxXQUFBLElBQWUsS0FBS0EsV0FBQTtFQUNuRTtBQUNKO0FBQ0EsSUFBTTQ2QixXQUFBLEdBQU4sTUFBa0I7RUFDZDdyQixZQUFZakssSUFBQSxFQUFNKzFCLGVBQUEsRUFBaUI7SUFDL0IsS0FBSy8xQixJQUFBLEdBQU9BLElBQUE7SUFDWixLQUFLKzFCLGVBQUEsR0FBa0JBLGVBQUE7SUFDdkIsS0FBS0MsS0FBQSxHQUFRLEVBQUM7SUFDZCxLQUFLNUksWUFBQSxHQUFlO0lBQ3BCLEtBQUs2SSxRQUFBLEdBQVc7SUFDaEIsS0FBS3RhLGdCQUFBLEdBQW1CLElBQUlrYSxjQUFBO0lBQzVCLEtBQUtLLFVBQUEsR0FBYTtJQUNsQixLQUFLQywyQkFBQSxHQUE4QjtJQUNuQyxLQUFLbEosbUJBQUEsR0FBc0I7SUFDM0IsS0FBS2dKLFFBQUEsR0FBV25jLE1BQUEsQ0FBT3NjLGdCQUFBLElBQ25CLElBQUl0YyxNQUFBLENBQU9zYyxnQkFBQSxDQUFpQkMsU0FBQSxJQUFhO01BQ3JDLFNBQVNoMEIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWcwQixTQUFBLENBQVVyOUIsTUFBQSxFQUFRcUosQ0FBQSxJQUNsQyxLQUFLMnpCLEtBQUEsQ0FBTWgwQixJQUFBLENBQUtxMEIsU0FBQSxDQUFVaDBCLENBQUEsQ0FBRTtNQUtoQyxJQUFJL0UsRUFBQSxJQUFNQyxVQUFBLElBQWMsTUFBTTg0QixTQUFBLENBQVVySyxJQUFBLENBQUszVixDQUFBLElBQUtBLENBQUEsQ0FBRTdJLElBQUEsSUFBUSxlQUFlNkksQ0FBQSxDQUFFaWdCLFlBQUEsQ0FBYXQ5QixNQUFBLElBQ3RGcWQsQ0FBQSxDQUFFN0ksSUFBQSxJQUFRLG1CQUFtQjZJLENBQUEsQ0FBRXBILFFBQUEsQ0FBU2pXLE1BQUEsR0FBU3FkLENBQUEsQ0FBRXRRLE1BQUEsQ0FBT2hOLFNBQUEsQ0FBVUMsTUFBTSxHQUMxRSxLQUFLMjNCLFNBQUEsQ0FBVSxPQUVmLEtBQUs3RSxLQUFBLENBQU07SUFDbkIsQ0FBQztJQUNMLElBQUk4SixXQUFBLEVBQWE7TUFDYixLQUFLTSxVQUFBLEdBQWEzZSxDQUFBLElBQUs7UUFDbkIsS0FBS3llLEtBQUEsQ0FBTWgwQixJQUFBLENBQUs7VUFBRStELE1BQUEsRUFBUXdSLENBQUEsQ0FBRXhSLE1BQUE7VUFBUXlILElBQUEsRUFBTTtVQUFpQnlCLFFBQUEsRUFBVXNJLENBQUEsQ0FBRWdmO1FBQVUsQ0FBQztRQUNsRixLQUFLNUYsU0FBQSxDQUFVO01BQ25CO0lBQ0o7SUFDQSxLQUFLNkYsaUJBQUEsR0FBb0IsS0FBS0EsaUJBQUEsQ0FBa0JuTCxJQUFBLENBQUssSUFBSTtFQUM3RDtFQUNBc0YsVUFBQSxFQUFZO0lBQ1IsSUFBSSxLQUFLdkQsWUFBQSxHQUFlLEdBQ3BCLEtBQUtBLFlBQUEsR0FBZXRULE1BQUEsQ0FBT2dELFVBQUEsQ0FBVyxNQUFNO01BQUUsS0FBS3NRLFlBQUEsR0FBZTtNQUFJLEtBQUt0QixLQUFBLENBQU07SUFBRyxHQUFHLEVBQUU7RUFDakc7RUFDQXBELFdBQUEsRUFBYTtJQUNULElBQUksS0FBSzBFLFlBQUEsR0FBZSxJQUFJO01BQ3hCdFQsTUFBQSxDQUFPbU8sWUFBQSxDQUFhLEtBQUttRixZQUFZO01BQ3JDLEtBQUtBLFlBQUEsR0FBZTtNQUNwQixLQUFLdEIsS0FBQSxDQUFNO0lBQ2Y7RUFDSjtFQUNBdmpCLE1BQUEsRUFBUTtJQUNKLElBQUksS0FBSzB0QixRQUFBLEVBQVU7TUFDZixLQUFLQSxRQUFBLENBQVNRLFdBQUEsQ0FBWTtNQUMxQixLQUFLUixRQUFBLENBQVNTLE9BQUEsQ0FBUSxLQUFLMTJCLElBQUEsQ0FBS3RGLEdBQUEsRUFBSzQ2QixjQUFjO0lBQ3ZEO0lBQ0EsSUFBSSxLQUFLWSxVQUFBLEVBQ0wsS0FBS2wyQixJQUFBLENBQUt0RixHQUFBLENBQUltaUIsZ0JBQUEsQ0FBaUIsNEJBQTRCLEtBQUtxWixVQUFVO0lBQzlFLEtBQUsxWixnQkFBQSxDQUFpQjtFQUMxQjtFQUNBN04sS0FBQSxFQUFPO0lBQ0gsSUFBSSxLQUFLc25CLFFBQUEsRUFBVTtNQUNmLElBQUlVLElBQUEsR0FBTyxLQUFLVixRQUFBLENBQVNRLFdBQUEsQ0FBWTtNQUNyQyxJQUFJRSxJQUFBLENBQUszOUIsTUFBQSxFQUFRO1FBQ2IsU0FBU3FKLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlzMEIsSUFBQSxDQUFLMzlCLE1BQUEsRUFBUXFKLENBQUEsSUFDN0IsS0FBSzJ6QixLQUFBLENBQU1oMEIsSUFBQSxDQUFLMjBCLElBQUEsQ0FBS3QwQixDQUFBLENBQUU7UUFDM0J5WCxNQUFBLENBQU9nRCxVQUFBLENBQVcsTUFBTSxLQUFLZ1AsS0FBQSxDQUFNLEdBQUcsRUFBRTtNQUM1QztNQUNBLEtBQUttSyxRQUFBLENBQVNXLFVBQUEsQ0FBVztJQUM3QjtJQUNBLElBQUksS0FBS1YsVUFBQSxFQUNMLEtBQUtsMkIsSUFBQSxDQUFLdEYsR0FBQSxDQUFJaWlCLG1CQUFBLENBQW9CLDRCQUE0QixLQUFLdVosVUFBVTtJQUNqRixLQUFLcGEsbUJBQUEsQ0FBb0I7RUFDN0I7RUFDQVUsaUJBQUEsRUFBbUI7SUFDZixLQUFLeGMsSUFBQSxDQUFLdEYsR0FBQSxDQUFJMkYsYUFBQSxDQUFjd2MsZ0JBQUEsQ0FBaUIsbUJBQW1CLEtBQUsyWixpQkFBaUI7RUFDMUY7RUFDQTFhLG9CQUFBLEVBQXNCO0lBQ2xCLEtBQUs5YixJQUFBLENBQUt0RixHQUFBLENBQUkyRixhQUFBLENBQWNzYyxtQkFBQSxDQUFvQixtQkFBbUIsS0FBSzZaLGlCQUFpQjtFQUM3RjtFQUNBSyx5QkFBQSxFQUEyQjtJQUN2QixLQUFLViwyQkFBQSxHQUE4QjtJQUNuQ3JaLFVBQUEsQ0FBVyxNQUFNLEtBQUtxWiwyQkFBQSxHQUE4QixPQUFPLEVBQUU7RUFDakU7RUFDQUssa0JBQUEsRUFBb0I7SUFDaEIsSUFBSSxDQUFDcFosb0JBQUEsQ0FBcUIsS0FBS3BkLElBQUksR0FDL0I7SUFDSixJQUFJLEtBQUttMkIsMkJBQUEsRUFDTCxPQUFPOWEsY0FBQSxDQUFlLEtBQUtyYixJQUFJO0lBSW5DLElBQUkxQyxFQUFBLElBQU1DLFVBQUEsSUFBYyxNQUFNLENBQUMsS0FBS3lDLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVW1KLEtBQUEsRUFBTztNQUM1RCxJQUFJcEosR0FBQSxHQUFNLEtBQUsxSCxJQUFBLENBQUs2SSxpQkFBQSxDQUFrQjtNQUV0QyxJQUFJbkIsR0FBQSxDQUFJek0sU0FBQSxJQUFhOUIsb0JBQUEsQ0FBcUJ1TyxHQUFBLENBQUl6TSxTQUFBLEVBQVd5TSxHQUFBLENBQUl4TSxXQUFBLEVBQWF3TSxHQUFBLENBQUl2TSxVQUFBLEVBQVl1TSxHQUFBLENBQUl0TSxZQUFZLEdBQ3RHLE9BQU8sS0FBS3UxQixTQUFBLENBQVU7SUFDOUI7SUFDQSxLQUFLN0UsS0FBQSxDQUFNO0VBQ2Y7RUFDQWpRLGdCQUFBLEVBQWtCO0lBQ2QsS0FBS0YsZ0JBQUEsQ0FBaUI1QyxHQUFBLENBQUksS0FBSy9ZLElBQUEsQ0FBSzZJLGlCQUFBLENBQWtCLENBQUM7RUFDM0Q7RUFDQWl1QixzQkFBc0JwdkIsR0FBQSxFQUFLO0lBQ3ZCLElBQUksQ0FBQ0EsR0FBQSxDQUFJek0sU0FBQSxFQUNMLE9BQU87SUFDWCxJQUFJODdCLFNBQUEsR0FBWSxtQkFBSUMsR0FBQTtNQUFLQyxTQUFBO0lBQ3pCLFNBQVN4ckIsSUFBQSxHQUFPL0QsR0FBQSxDQUFJek0sU0FBQSxFQUFXd1EsSUFBQSxFQUFNQSxJQUFBLEdBQU92VCxVQUFBLENBQVd1VCxJQUFJLEdBQ3ZEc3JCLFNBQUEsQ0FBVXZvQixHQUFBLENBQUkvQyxJQUFJO0lBQ3RCLFNBQVNBLElBQUEsR0FBTy9ELEdBQUEsQ0FBSXZNLFVBQUEsRUFBWXNRLElBQUEsRUFBTUEsSUFBQSxHQUFPdlQsVUFBQSxDQUFXdVQsSUFBSSxHQUN4RCxJQUFJc3JCLFNBQUEsQ0FBVXRmLEdBQUEsQ0FBSWhNLElBQUksR0FBRztNQUNyQndyQixTQUFBLEdBQVl4ckIsSUFBQTtNQUNaO0lBQ0o7SUFDSixJQUFJOVEsSUFBQSxHQUFPczhCLFNBQUEsSUFBYSxLQUFLajNCLElBQUEsQ0FBS2tFLE9BQUEsQ0FBUUssV0FBQSxDQUFZMHlCLFNBQVM7SUFDL0QsSUFBSXQ4QixJQUFBLElBQVFBLElBQUEsQ0FBSzJTLGNBQUEsQ0FBZTtNQUM1QkUsSUFBQSxFQUFNO01BQ056SCxNQUFBLEVBQVFreEIsU0FBQSxDQUFVNStCLFFBQUEsSUFBWSxJQUFJNCtCLFNBQUEsQ0FBVS8rQixVQUFBLEdBQWErK0I7SUFDN0QsQ0FBQyxHQUFHO01BQ0EsS0FBS3BiLGVBQUEsQ0FBZ0I7TUFDckIsT0FBTztJQUNYO0VBQ0o7RUFDQXlRLGVBQUEsRUFBaUI7SUFDYixJQUFJLEtBQUsySixRQUFBLEVBQ0wsU0FBU2puQixHQUFBLElBQU8sS0FBS2luQixRQUFBLENBQVNRLFdBQUEsQ0FBWSxHQUN0QyxLQUFLVCxLQUFBLENBQU1oMEIsSUFBQSxDQUFLZ04sR0FBRztJQUMzQixPQUFPLEtBQUtnbkIsS0FBQTtFQUNoQjtFQUNBbEssTUFBQSxFQUFRO0lBQ0osSUFBSTtNQUFFOXJCO0lBQUssSUFBSTtJQUNmLElBQUksQ0FBQ0EsSUFBQSxDQUFLa0UsT0FBQSxJQUFXLEtBQUtrcEIsWUFBQSxHQUFlLElBQ3JDO0lBQ0osSUFBSWlKLFNBQUEsR0FBWSxLQUFLL0osY0FBQSxDQUFlO0lBQ3BDLElBQUkrSixTQUFBLENBQVVyOUIsTUFBQSxFQUNWLEtBQUtnOUIsS0FBQSxHQUFRLEVBQUM7SUFDbEIsSUFBSXR1QixHQUFBLEdBQU0xSCxJQUFBLENBQUs2SSxpQkFBQSxDQUFrQjtJQUNqQyxJQUFJcXVCLE1BQUEsR0FBUyxDQUFDLEtBQUtmLDJCQUFBLElBQStCLENBQUMsS0FBS3hhLGdCQUFBLENBQWlCbE4sRUFBQSxDQUFHL0csR0FBRyxLQUFLMFYsb0JBQUEsQ0FBcUJwZCxJQUFJLEtBQUssQ0FBQyxLQUFLODJCLHFCQUFBLENBQXNCcHZCLEdBQUc7SUFDakosSUFBSWpQLElBQUEsR0FBTztNQUFJQyxFQUFBLEdBQUs7TUFBSXkrQixRQUFBLEdBQVc7TUFBT0MsS0FBQSxHQUFRLEVBQUM7SUFDbkQsSUFBSXAzQixJQUFBLENBQUtrYixRQUFBLEVBQVU7TUFDZixTQUFTN1ksQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWcwQixTQUFBLENBQVVyOUIsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO1FBQ3ZDLElBQUlnSCxNQUFBLEdBQVMsS0FBS2d1QixnQkFBQSxDQUFpQmhCLFNBQUEsQ0FBVWgwQixDQUFBLEdBQUkrMEIsS0FBSztRQUN0RCxJQUFJL3RCLE1BQUEsRUFBUTtVQUNSNVEsSUFBQSxHQUFPQSxJQUFBLEdBQU8sSUFBSTRRLE1BQUEsQ0FBTzVRLElBQUEsR0FBTzhELElBQUEsQ0FBS0MsR0FBQSxDQUFJNk0sTUFBQSxDQUFPNVEsSUFBQSxFQUFNQSxJQUFJO1VBQzFEQyxFQUFBLEdBQUtBLEVBQUEsR0FBSyxJQUFJMlEsTUFBQSxDQUFPM1EsRUFBQSxHQUFLNkQsSUFBQSxDQUFLK0UsR0FBQSxDQUFJK0gsTUFBQSxDQUFPM1EsRUFBQSxFQUFJQSxFQUFFO1VBQ2hELElBQUkyUSxNQUFBLENBQU84dEIsUUFBQSxFQUNQQSxRQUFBLEdBQVc7UUFDbkI7TUFDSjtJQUNKO0lBQ0EsSUFBSTE1QixLQUFBLElBQVMyNUIsS0FBQSxDQUFNcCtCLE1BQUEsRUFBUTtNQUN2QixJQUFJcytCLEdBQUEsR0FBTUYsS0FBQSxDQUFNcGhCLE1BQUEsQ0FBT3hCLENBQUEsSUFBS0EsQ0FBQSxDQUFFMWEsUUFBQSxJQUFZLElBQUk7TUFDOUMsSUFBSXc5QixHQUFBLENBQUl0K0IsTUFBQSxJQUFVLEdBQUc7UUFDakIsSUFBSSxDQUFDd2QsQ0FBQSxFQUFHQyxDQUFDLElBQUk2Z0IsR0FBQTtRQUNiLElBQUk5Z0IsQ0FBQSxDQUFFdGUsVUFBQSxJQUFjc2UsQ0FBQSxDQUFFdGUsVUFBQSxDQUFXQSxVQUFBLElBQWN1ZSxDQUFBLENBQUV2ZSxVQUFBLEVBQzdDdWUsQ0FBQSxDQUFFekMsTUFBQSxDQUFPLE9BRVR3QyxDQUFBLENBQUV4QyxNQUFBLENBQU87TUFDakIsT0FDSztRQUNELElBQUk7VUFBRS9ZO1FBQVUsSUFBSSxLQUFLMGdCLGdCQUFBO1FBQ3pCLFNBQVM0YixFQUFBLElBQU1ELEdBQUEsRUFBSztVQUNoQixJQUFJbi9CLE1BQUEsR0FBU28vQixFQUFBLENBQUdyL0IsVUFBQTtVQUNoQixJQUFJQyxNQUFBLElBQVVBLE1BQUEsQ0FBTzJCLFFBQUEsSUFBWSxTQUFTLENBQUNtQixTQUFBLElBQWF1OEIsV0FBQSxDQUFZeDNCLElBQUEsRUFBTS9FLFNBQVMsS0FBSzlDLE1BQUEsR0FDcEZvL0IsRUFBQSxDQUFHdmpCLE1BQUEsQ0FBTztRQUNsQjtNQUNKO0lBQ0o7SUFDQSxJQUFJeWpCLE9BQUEsR0FBVTtJQUlkLElBQUloL0IsSUFBQSxHQUFPLEtBQUt5K0IsTUFBQSxJQUFVbDNCLElBQUEsQ0FBSytTLEtBQUEsQ0FBTThULFNBQUEsR0FBWWlCLElBQUEsQ0FBS0MsR0FBQSxDQUFJLElBQUksT0FDMUR4ckIsSUFBQSxDQUFLK0UsR0FBQSxDQUFJdEIsSUFBQSxDQUFLK1MsS0FBQSxDQUFNK1QsU0FBQSxFQUFXOW1CLElBQUEsQ0FBSytTLEtBQUEsQ0FBTXVULFNBQUEsQ0FBVUMsSUFBSSxJQUFJdUIsSUFBQSxDQUFLQyxHQUFBLENBQUksSUFBSSxPQUN6RWh0QixrQkFBQSxDQUFtQjJNLEdBQUcsTUFBTSt2QixPQUFBLEdBQVVyZCxnQkFBQSxDQUFpQnBhLElBQUksTUFDM0R5M0IsT0FBQSxDQUFRaHBCLEVBQUEsQ0FBRy9XLHdCQUFBLENBQUFnakIsU0FBQSxDQUFVOEUsSUFBQSxDQUFLeGYsSUFBQSxDQUFLd0YsS0FBQSxDQUFNekksR0FBQSxDQUFJZ0ssT0FBQSxDQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRztNQUMxRC9HLElBQUEsQ0FBSytTLEtBQUEsQ0FBTThULFNBQUEsR0FBWTtNQUN2QnhMLGNBQUEsQ0FBZXJiLElBQUk7TUFDbkIsS0FBSzJiLGdCQUFBLENBQWlCNUMsR0FBQSxDQUFJclIsR0FBRztNQUM3QjFILElBQUEsQ0FBSzAzQixpQkFBQSxDQUFrQjtJQUMzQixXQUNTai9CLElBQUEsR0FBTyxNQUFNeStCLE1BQUEsRUFBUTtNQUMxQixJQUFJeitCLElBQUEsR0FBTyxJQUFJO1FBQ1h1SCxJQUFBLENBQUtrRSxPQUFBLENBQVF3SixTQUFBLENBQVVqVixJQUFBLEVBQU1DLEVBQUU7UUFDL0JpL0IsUUFBQSxDQUFTMzNCLElBQUk7TUFDakI7TUFDQSxLQUFLKzFCLGVBQUEsQ0FBZ0J0OUIsSUFBQSxFQUFNQyxFQUFBLEVBQUl5K0IsUUFBQSxFQUFVQyxLQUFLO01BQzlDLElBQUlwM0IsSUFBQSxDQUFLa0UsT0FBQSxJQUFXbEUsSUFBQSxDQUFLa0UsT0FBQSxDQUFRaUcsS0FBQSxFQUM3Qm5LLElBQUEsQ0FBS3dILFdBQUEsQ0FBWXhILElBQUEsQ0FBS3dGLEtBQUssV0FDdEIsQ0FBQyxLQUFLbVcsZ0JBQUEsQ0FBaUJsTixFQUFBLENBQUcvRyxHQUFHLEdBQ2xDMlQsY0FBQSxDQUFlcmIsSUFBSTtNQUN2QixLQUFLMmIsZ0JBQUEsQ0FBaUI1QyxHQUFBLENBQUlyUixHQUFHO0lBQ2pDO0VBQ0o7RUFDQTJ2QixpQkFBaUJyb0IsR0FBQSxFQUFLb29CLEtBQUEsRUFBTztJQUV6QixJQUFJQSxLQUFBLENBQU1qaEIsT0FBQSxDQUFRbkgsR0FBQSxDQUFJakosTUFBTSxJQUFJLElBQzVCLE9BQU87SUFDWCxJQUFJcEwsSUFBQSxHQUFPLEtBQUtxRixJQUFBLENBQUtrRSxPQUFBLENBQVFLLFdBQUEsQ0FBWXlLLEdBQUEsQ0FBSWpKLE1BQU07SUFDbkQsSUFBSWlKLEdBQUEsQ0FBSXhCLElBQUEsSUFBUSxpQkFDWDdTLElBQUEsSUFBUSxLQUFLcUYsSUFBQSxDQUFLa0UsT0FBQSxJQUFXOEssR0FBQSxDQUFJNG9CLGFBQUEsSUFBaUIscUJBRTlDNW9CLEdBQUEsQ0FBSTRvQixhQUFBLElBQWlCLFdBQVcsQ0FBQzVvQixHQUFBLENBQUlDLFFBQUEsSUFBWSxDQUFDRCxHQUFBLENBQUlqSixNQUFBLENBQU91YyxZQUFBLENBQWEsT0FBTyxJQUN0RixPQUFPO0lBQ1gsSUFBSSxDQUFDM25CLElBQUEsSUFBUUEsSUFBQSxDQUFLMlMsY0FBQSxDQUFlMEIsR0FBRyxHQUNoQyxPQUFPO0lBQ1gsSUFBSUEsR0FBQSxDQUFJeEIsSUFBQSxJQUFRLGFBQWE7TUFDekIsU0FBU25MLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkyTSxHQUFBLENBQUk2b0IsVUFBQSxDQUFXNytCLE1BQUEsRUFBUXFKLENBQUEsSUFBSztRQUM1QyxJQUFJdEssSUFBQSxHQUFPaVgsR0FBQSxDQUFJNm9CLFVBQUEsQ0FBV3gxQixDQUFBO1FBQzFCKzBCLEtBQUEsQ0FBTXAxQixJQUFBLENBQUtqSyxJQUFJO1FBQ2YsSUFBSUEsSUFBQSxDQUFLTSxRQUFBLElBQVksR0FDakIsS0FBSzQwQixtQkFBQSxHQUFzQmwxQixJQUFBO01BQ25DO01BQ0EsSUFBSTRDLElBQUEsQ0FBS0csVUFBQSxJQUFjSCxJQUFBLENBQUtHLFVBQUEsSUFBY0gsSUFBQSxDQUFLRCxHQUFBLElBQU8sQ0FBQ0MsSUFBQSxDQUFLRyxVQUFBLENBQVc4RyxRQUFBLENBQVNvTixHQUFBLENBQUlqSixNQUFNLEdBQ3RGLE9BQU87UUFBRXROLElBQUEsRUFBTWtDLElBQUEsQ0FBSzZKLFNBQUE7UUFBVzlMLEVBQUEsRUFBSWlDLElBQUEsQ0FBSzhKO01BQVM7TUFDckQsSUFBSWEsSUFBQSxHQUFPMEosR0FBQSxDQUFJL1csZUFBQTtRQUFpQm9OLElBQUEsR0FBTzJKLEdBQUEsQ0FBSXpMLFdBQUE7TUFDM0MsSUFBSWpHLEVBQUEsSUFBTUMsVUFBQSxJQUFjLE1BQU15UixHQUFBLENBQUk2b0IsVUFBQSxDQUFXNytCLE1BQUEsRUFBUTtRQUdqRCxTQUFTcUosQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTJNLEdBQUEsQ0FBSTZvQixVQUFBLENBQVc3K0IsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO1VBQzVDLElBQUk7WUFBRXBLLGVBQUE7WUFBaUJzTDtVQUFZLElBQUl5TCxHQUFBLENBQUk2b0IsVUFBQSxDQUFXeDFCLENBQUE7VUFDdEQsSUFBSSxDQUFDcEssZUFBQSxJQUFtQmdPLEtBQUEsQ0FBTUMsU0FBQSxDQUFVaVEsT0FBQSxDQUFRL1AsSUFBQSxDQUFLNEksR0FBQSxDQUFJNm9CLFVBQUEsRUFBWTUvQixlQUFlLElBQUksR0FDcEZxTixJQUFBLEdBQU9yTixlQUFBO1VBQ1gsSUFBSSxDQUFDc0wsV0FBQSxJQUFlMEMsS0FBQSxDQUFNQyxTQUFBLENBQVVpUSxPQUFBLENBQVEvUCxJQUFBLENBQUs0SSxHQUFBLENBQUk2b0IsVUFBQSxFQUFZdDBCLFdBQVcsSUFBSSxHQUM1RThCLElBQUEsR0FBTzlCLFdBQUE7UUFDZjtNQUNKO01BQ0EsSUFBSTZJLFVBQUEsR0FBYTlHLElBQUEsSUFBUUEsSUFBQSxDQUFLcE4sVUFBQSxJQUFjOFcsR0FBQSxDQUFJakosTUFBQSxHQUMxQ2pPLFFBQUEsQ0FBU3dOLElBQUksSUFBSSxJQUFJO01BQzNCLElBQUk3TSxJQUFBLEdBQU9rQyxJQUFBLENBQUtzUSxlQUFBLENBQWdCK0QsR0FBQSxDQUFJakosTUFBQSxFQUFRcUcsVUFBQSxFQUFZLEVBQUU7TUFDMUQsSUFBSUMsUUFBQSxHQUFXaEgsSUFBQSxJQUFRQSxJQUFBLENBQUtuTixVQUFBLElBQWM4VyxHQUFBLENBQUlqSixNQUFBLEdBQ3hDak8sUUFBQSxDQUFTdU4sSUFBSSxJQUFJMkosR0FBQSxDQUFJakosTUFBQSxDQUFPOUwsVUFBQSxDQUFXakIsTUFBQTtNQUM3QyxJQUFJTixFQUFBLEdBQUtpQyxJQUFBLENBQUtzUSxlQUFBLENBQWdCK0QsR0FBQSxDQUFJakosTUFBQSxFQUFRc0csUUFBQSxFQUFVLENBQUM7TUFDckQsT0FBTztRQUFFNVQsSUFBQTtRQUFNQztNQUFHO0lBQ3RCLFdBQ1NzVyxHQUFBLENBQUl4QixJQUFBLElBQVEsY0FBYztNQUMvQixPQUFPO1FBQUUvVSxJQUFBLEVBQU1rQyxJQUFBLENBQUtpTCxVQUFBLEdBQWFqTCxJQUFBLENBQUtrTCxNQUFBO1FBQVFuTixFQUFBLEVBQUlpQyxJQUFBLENBQUtxUSxRQUFBLEdBQVdyUSxJQUFBLENBQUtrTDtNQUFPO0lBQ2xGLE9BQ0s7TUFDRCxLQUFLb25CLG1CQUFBLEdBQXNCamUsR0FBQSxDQUFJakosTUFBQTtNQUMvQixPQUFPO1FBQ0h0TixJQUFBLEVBQU1rQyxJQUFBLENBQUtpTCxVQUFBO1FBQ1hsTixFQUFBLEVBQUlpQyxJQUFBLENBQUtxUSxRQUFBO1FBS1Rtc0IsUUFBQSxFQUFVbm9CLEdBQUEsQ0FBSWpKLE1BQUEsQ0FBT2hOLFNBQUEsSUFBYWlXLEdBQUEsQ0FBSUM7TUFDMUM7SUFDSjtFQUNKO0FBQ0o7QUFDQSxJQUFJNm9CLFVBQUEsR0FBYSxtQkFBSUMsT0FBQSxDQUFRO0FBQzdCLElBQUlDLGNBQUEsR0FBaUI7QUFDckIsU0FBU0wsU0FBUzMzQixJQUFBLEVBQU07RUFDcEIsSUFBSTgzQixVQUFBLENBQVdyZ0IsR0FBQSxDQUFJelgsSUFBSSxHQUNuQjtFQUNKODNCLFVBQUEsQ0FBVy9lLEdBQUEsQ0FBSS9ZLElBQUEsRUFBTSxJQUFJO0VBQ3pCLElBQUksQ0FBQyxVQUFVLFVBQVUsVUFBVSxFQUFFbVcsT0FBQSxDQUFRalYsZ0JBQUEsQ0FBaUJsQixJQUFBLENBQUt0RixHQUFHLEVBQUV1OUIsVUFBVSxNQUFNLElBQUk7SUFDeEZqNEIsSUFBQSxDQUFLbVkscUJBQUEsR0FBd0IxYSxLQUFBO0lBQzdCLElBQUl1NkIsY0FBQSxFQUNBO0lBQ0pFLE9BQUEsQ0FBUSxRQUFRLDBLQUEwSztJQUMxTEYsY0FBQSxHQUFpQjtFQUNyQjtBQUNKO0FBQ0EsU0FBU0csc0JBQXNCbjRCLElBQUEsRUFBTXJILEtBQUEsRUFBTztFQUN4QyxJQUFJd0MsVUFBQSxHQUFheEMsS0FBQSxDQUFNZ0UsY0FBQTtJQUFnQnZCLFlBQUEsR0FBZXpDLEtBQUEsQ0FBTWlFLFdBQUE7RUFDNUQsSUFBSTNCLFNBQUEsR0FBWXRDLEtBQUEsQ0FBTWtpQixZQUFBO0lBQWMzZixXQUFBLEdBQWN2QyxLQUFBLENBQU1taUIsU0FBQTtFQUN4RCxJQUFJc2QsYUFBQSxHQUFnQnA0QixJQUFBLENBQUtxNEIsUUFBQSxDQUFTcjRCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVStFLE1BQU07RUFJN0QsSUFBSXZULG9CQUFBLENBQXFCaS9CLGFBQUEsQ0FBY3JnQyxJQUFBLEVBQU1xZ0MsYUFBQSxDQUFjLzlCLE1BQUEsRUFBUVksU0FBQSxFQUFXQyxXQUFXLEdBQ3JGLENBQUNDLFVBQUEsRUFBWUMsWUFBQSxFQUFjSCxTQUFBLEVBQVdDLFdBQVcsSUFBSSxDQUFDRCxTQUFBLEVBQVdDLFdBQUEsRUFBYUMsVUFBQSxFQUFZQyxZQUFZO0VBQzFHLE9BQU87SUFBRUQsVUFBQTtJQUFZQyxZQUFBO0lBQWNILFNBQUE7SUFBV0M7RUFBWTtBQUM5RDtBQUdBLFNBQVNvOUIsMkJBQTJCdDRCLElBQUEsRUFBTTJILFNBQUEsRUFBVztFQUNqRCxJQUFJQSxTQUFBLENBQVU0d0IsaUJBQUEsRUFBbUI7SUFDN0IsSUFBSTUvQixLQUFBLEdBQVFnUCxTQUFBLENBQVU0d0IsaUJBQUEsQ0FBa0J2NEIsSUFBQSxDQUFLMEIsSUFBSSxFQUFFO0lBQ25ELElBQUkvSSxLQUFBLEVBQ0EsT0FBT3cvQixxQkFBQSxDQUFzQm40QixJQUFBLEVBQU1ySCxLQUFLO0VBQ2hEO0VBQ0EsSUFBSXVlLEtBQUE7RUFDSixTQUFTc2hCLEtBQUtoOUIsS0FBQSxFQUFPO0lBQ2pCQSxLQUFBLENBQU1tdEIsY0FBQSxDQUFlO0lBQ3JCbnRCLEtBQUEsQ0FBTWk5Qix3QkFBQSxDQUF5QjtJQUMvQnZoQixLQUFBLEdBQVExYixLQUFBLENBQU1rOUIsZUFBQSxDQUFnQixFQUFFO0VBQ3BDO0VBTUExNEIsSUFBQSxDQUFLdEYsR0FBQSxDQUFJbWlCLGdCQUFBLENBQWlCLGVBQWUyYixJQUFBLEVBQU0sSUFBSTtFQUNuRDUvQixRQUFBLENBQVMrL0IsV0FBQSxDQUFZLFFBQVE7RUFDN0IzNEIsSUFBQSxDQUFLdEYsR0FBQSxDQUFJaWlCLG1CQUFBLENBQW9CLGVBQWU2YixJQUFBLEVBQU0sSUFBSTtFQUN0RCxPQUFPdGhCLEtBQUEsR0FBUWloQixxQkFBQSxDQUFzQm40QixJQUFBLEVBQU1rWCxLQUFLLElBQUk7QUFDeEQ7QUFDQSxTQUFTc2dCLFlBQVl4M0IsSUFBQSxFQUFNakksSUFBQSxFQUFNO0VBQzdCLFNBQVNvTixDQUFBLEdBQUlwTixJQUFBLENBQUtHLFVBQUEsRUFBWWlOLENBQUEsSUFBS0EsQ0FBQSxJQUFLbkYsSUFBQSxDQUFLdEYsR0FBQSxFQUFLeUssQ0FBQSxHQUFJQSxDQUFBLENBQUVqTixVQUFBLEVBQVk7SUFDaEUsSUFBSXlDLElBQUEsR0FBT3FGLElBQUEsQ0FBS2tFLE9BQUEsQ0FBUUssV0FBQSxDQUFZWSxDQUFBLEVBQUcsSUFBSTtJQUMzQyxJQUFJeEssSUFBQSxJQUFRQSxJQUFBLENBQUs1QyxJQUFBLENBQUs4QyxPQUFBLEVBQ2xCLE9BQU9zSyxDQUFBO0VBQ2Y7RUFDQSxPQUFPO0FBQ1g7QUFPQSxTQUFTeXpCLGFBQWE1NEIsSUFBQSxFQUFNNjRCLEtBQUEsRUFBT0MsR0FBQSxFQUFLO0VBQ3BDLElBQUk7SUFBRS9nQyxJQUFBLEVBQU1JLE1BQUE7SUFBUWlVLFVBQUE7SUFBWUMsUUFBQTtJQUFVNVQsSUFBQTtJQUFNQztFQUFHLElBQUlzSCxJQUFBLENBQUtrRSxPQUFBLENBQVFnSSxVQUFBLENBQVcyc0IsS0FBQSxFQUFPQyxHQUFHO0VBQ3pGLElBQUk5OUIsTUFBQSxHQUFTZ0YsSUFBQSxDQUFLNkksaUJBQUEsQ0FBa0I7RUFDcEMsSUFBSTFDLElBQUE7RUFDSixJQUFJdUcsTUFBQSxHQUFTMVIsTUFBQSxDQUFPRyxVQUFBO0VBQ3BCLElBQUl1UixNQUFBLElBQVUxTSxJQUFBLENBQUt0RixHQUFBLENBQUlrSCxRQUFBLENBQVM4SyxNQUFBLENBQU9yVSxRQUFBLElBQVksSUFBSXFVLE1BQUEsR0FBU0EsTUFBQSxDQUFPeFUsVUFBVSxHQUFHO0lBQ2hGaU8sSUFBQSxHQUFPLENBQUM7TUFBRXBPLElBQUEsRUFBTTJVLE1BQUE7TUFBUXJTLE1BQUEsRUFBUVcsTUFBQSxDQUFPSTtJQUFhLENBQUM7SUFDckQsSUFBSSxDQUFDTCxrQkFBQSxDQUFtQkMsTUFBTSxHQUMxQm1MLElBQUEsQ0FBS25FLElBQUEsQ0FBSztNQUFFakssSUFBQSxFQUFNaUQsTUFBQSxDQUFPQyxTQUFBO01BQVdaLE1BQUEsRUFBUVcsTUFBQSxDQUFPRTtJQUFZLENBQUM7RUFDeEU7RUFHQSxJQUFJeUMsTUFBQSxJQUFVcUMsSUFBQSxDQUFLK1MsS0FBQSxDQUFNcVQsV0FBQSxLQUFnQixHQUFHO0lBQ3hDLFNBQVNodEIsR0FBQSxHQUFNaVQsUUFBQSxFQUFValQsR0FBQSxHQUFNZ1QsVUFBQSxFQUFZaFQsR0FBQSxJQUFPO01BQzlDLElBQUlyQixJQUFBLEdBQU9JLE1BQUEsQ0FBTzhCLFVBQUEsQ0FBV2IsR0FBQSxHQUFNO1FBQUl1QixJQUFBLEdBQU81QyxJQUFBLENBQUttQyxVQUFBO01BQ25ELElBQUluQyxJQUFBLENBQUsrQixRQUFBLElBQVksUUFBUSxDQUFDYSxJQUFBLEVBQU07UUFDaEMwUixRQUFBLEdBQVdqVCxHQUFBO1FBQ1g7TUFDSjtNQUNBLElBQUksQ0FBQ3VCLElBQUEsSUFBUUEsSUFBQSxDQUFLK0ssSUFBQSxFQUNkO0lBQ1I7RUFDSjtFQUNBLElBQUlvbEIsUUFBQSxHQUFXOXFCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUE7RUFDMUIsSUFBSXdsQixNQUFBLEdBQVN2aUIsSUFBQSxDQUFLRyxRQUFBLENBQVMsV0FBVyxLQUFLdkksd0JBQUEsQ0FBQTRxQixTQUFBLENBQVU1QixVQUFBLENBQVc1Z0IsSUFBQSxDQUFLd0YsS0FBQSxDQUFNcWIsTUFBTTtFQUNqRixJQUFJaFosS0FBQSxHQUFRaWpCLFFBQUEsQ0FBUy9qQixPQUFBLENBQVF0TyxJQUFJO0VBQ2pDLElBQUlpUCxHQUFBLEdBQU07SUFBTTdMLElBQUEsR0FBTTBtQixNQUFBLENBQU9xRCxLQUFBLENBQU16dEIsTUFBQSxFQUFRO01BQ3ZDZ2IsT0FBQSxFQUFTdEwsS0FBQSxDQUFNMVAsTUFBQTtNQUNmNGdDLFFBQUEsRUFBVWx4QixLQUFBLENBQU0xUCxNQUFBLENBQU9pckIsY0FBQSxDQUFldmIsS0FBQSxDQUFNN1AsS0FBQSxDQUFNLENBQUM7TUFDbkRnaEMsT0FBQSxFQUFTO01BQ1R2Z0MsSUFBQSxFQUFNMlQsVUFBQTtNQUNOMVQsRUFBQSxFQUFJMlQsUUFBQTtNQUNKc0Usa0JBQUEsRUFBb0I5SSxLQUFBLENBQU0xUCxNQUFBLENBQU9xVixJQUFBLENBQUtrRCxVQUFBLElBQWMsUUFBUSxTQUFTO01BQ3JFdW9CLGFBQUEsRUFBZTl5QixJQUFBO01BQ2Z1YyxZQUFBO01BQ0FuQyxPQUFBLEVBQVMxWTtJQUNiLENBQUM7RUFDRCxJQUFJMUIsSUFBQSxJQUFRQSxJQUFBLENBQUssR0FBRzlKLEdBQUEsSUFBTyxNQUFNO0lBQzdCLElBQUk2OEIsT0FBQSxHQUFTL3lCLElBQUEsQ0FBSyxHQUFHOUosR0FBQTtNQUFLc1EsSUFBQSxHQUFPeEcsSUFBQSxDQUFLLE1BQU1BLElBQUEsQ0FBSyxHQUFHOUosR0FBQTtJQUNwRCxJQUFJc1EsSUFBQSxJQUFRLE1BQ1JBLElBQUEsR0FBT3VzQixPQUFBO0lBQ1h4eEIsR0FBQSxHQUFNO01BQUVnRixNQUFBLEVBQVF3c0IsT0FBQSxHQUFTemdDLElBQUE7TUFBTWtVLElBQUEsRUFBTUEsSUFBQSxHQUFPbFU7SUFBSztFQUNyRDtFQUNBLE9BQU87SUFBRXNFLEdBQUEsRUFBQWxCLElBQUE7SUFBSzZMLEdBQUE7SUFBS2pQLElBQUE7SUFBTUM7RUFBRztBQUNoQztBQUNBLFNBQVNncUIsYUFBYWhvQixHQUFBLEVBQUs7RUFDdkIsSUFBSUMsSUFBQSxHQUFPRCxHQUFBLENBQUlSLFVBQUE7RUFDZixJQUFJUyxJQUFBLEVBQU07SUFDTixPQUFPQSxJQUFBLENBQUtpUSxTQUFBLENBQVU7RUFDMUIsV0FDU2xRLEdBQUEsQ0FBSVosUUFBQSxJQUFZLFFBQVFZLEdBQUEsQ0FBSXhDLFVBQUEsRUFBWTtJQUk3QyxJQUFJMkYsTUFBQSxJQUFVLGFBQWFoRSxJQUFBLENBQUthLEdBQUEsQ0FBSXhDLFVBQUEsQ0FBVzRCLFFBQVEsR0FBRztNQUN0RCxJQUFJc2EsSUFBQSxHQUFPeGIsUUFBQSxDQUFTeVYsYUFBQSxDQUFjLEtBQUs7TUFDdkMrRixJQUFBLENBQUs5RixXQUFBLENBQVkxVixRQUFBLENBQVN5VixhQUFBLENBQWMsSUFBSSxDQUFDO01BQzdDLE9BQU87UUFBRStGO01BQUs7SUFDbEIsV0FDUzFaLEdBQUEsQ0FBSXhDLFVBQUEsQ0FBV3FOLFNBQUEsSUFBYTdLLEdBQUEsSUFBT21ELE1BQUEsSUFBVSxnQkFBZ0JoRSxJQUFBLENBQUthLEdBQUEsQ0FBSXhDLFVBQUEsQ0FBVzRCLFFBQVEsR0FBRztNQUNqRyxPQUFPO1FBQUU0VSxNQUFBLEVBQVE7TUFBSztJQUMxQjtFQUNKLFdBQ1NoVSxHQUFBLENBQUlaLFFBQUEsSUFBWSxTQUFTWSxHQUFBLENBQUk0bkIsWUFBQSxDQUFhLGtCQUFrQixHQUFHO0lBQ3BFLE9BQU87TUFBRTVULE1BQUEsRUFBUTtJQUFLO0VBQzFCO0VBQ0EsT0FBTztBQUNYO0FBQ0EsSUFBTTBHLFFBQUEsR0FBVztBQUNqQixTQUFTK2pCLGNBQWNuNUIsSUFBQSxFQUFNdkgsSUFBQSxFQUFNQyxFQUFBLEVBQUl5K0IsUUFBQSxFQUFVVSxVQUFBLEVBQVk7RUFDekQsSUFBSTNRLGFBQUEsR0FBZ0JsbkIsSUFBQSxDQUFLK1MsS0FBQSxDQUFNb1UseUJBQUEsS0FBOEJubkIsSUFBQSxDQUFLbVIsU0FBQSxHQUFZblIsSUFBQSxDQUFLK1MsS0FBQSxDQUFNbVUsYUFBQSxHQUFnQjtFQUN6R2xuQixJQUFBLENBQUsrUyxLQUFBLENBQU1vVSx5QkFBQSxHQUE0QjtFQUN2QyxJQUFJMXVCLElBQUEsR0FBTyxHQUFHO0lBQ1YsSUFBSTRoQixNQUFBLEdBQVNyYSxJQUFBLENBQUsrUyxLQUFBLENBQU0yVCxpQkFBQSxHQUFvQm9CLElBQUEsQ0FBS0MsR0FBQSxDQUFJLElBQUksS0FBSy9uQixJQUFBLENBQUsrUyxLQUFBLENBQU0wVCxtQkFBQSxHQUFzQjtJQUMvRixJQUFJeVEsTUFBQSxHQUFTOWMsZ0JBQUEsQ0FBaUJwYSxJQUFBLEVBQU1xYSxNQUFNO0lBQzFDLElBQUk2YyxNQUFBLElBQVUsQ0FBQ2wzQixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVU4RyxFQUFBLENBQUd5b0IsTUFBTSxHQUFHO01BQzVDLElBQUl2NUIsTUFBQSxJQUFVUyxPQUFBLElBQ1Y0QixJQUFBLENBQUsrUyxLQUFBLENBQU1xVCxXQUFBLEtBQWdCLE1BQU0wQixJQUFBLENBQUtDLEdBQUEsQ0FBSSxJQUFJLE1BQU0vbkIsSUFBQSxDQUFLK1MsS0FBQSxDQUFNc1QsZUFBQSxJQUMvRHJtQixJQUFBLENBQUtHLFFBQUEsQ0FBUyxpQkFBaUJrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXJILElBQUEsRUFBTTNFLFFBQUEsQ0FBUyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQ2xFO01BQ0osSUFBSXVpQixFQUFBLEdBQUs1ZCxJQUFBLENBQUt3RixLQUFBLENBQU1vWSxFQUFBLENBQUduUixZQUFBLENBQWF5cUIsTUFBTTtNQUMxQyxJQUFJN2MsTUFBQSxJQUFVLFdBQ1Z1RCxFQUFBLENBQUdpTSxPQUFBLENBQVEsV0FBVyxJQUFJLFdBQ3JCeFAsTUFBQSxJQUFVLE9BQ2Z1RCxFQUFBLENBQUdDLGNBQUEsQ0FBZTtNQUN0QixJQUFJcUosYUFBQSxFQUNBdEosRUFBQSxDQUFHaU0sT0FBQSxDQUFRLGVBQWUzQyxhQUFhO01BQzNDbG5CLElBQUEsQ0FBSzJkLFFBQUEsQ0FBU0MsRUFBRTtJQUNwQjtJQUNBO0VBQ0o7RUFDQSxJQUFJd2IsT0FBQSxHQUFVcDVCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsQ0FBSWdLLE9BQUEsQ0FBUXRPLElBQUk7RUFDekMsSUFBSTRnQyxNQUFBLEdBQVNELE9BQUEsQ0FBUS9MLFdBQUEsQ0FBWTMwQixFQUFFO0VBQ25DRCxJQUFBLEdBQU8yZ0MsT0FBQSxDQUFRejBCLE1BQUEsQ0FBTzAwQixNQUFBLEdBQVMsQ0FBQztFQUNoQzNnQyxFQUFBLEdBQUtzSCxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLENBQUlnSyxPQUFBLENBQVFyTyxFQUFFLEVBQUV3TyxLQUFBLENBQU1teUIsTUFBQSxHQUFTLENBQUM7RUFDaEQsSUFBSTN4QixHQUFBLEdBQU0xSCxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBO0VBQ3JCLElBQUlpZSxLQUFBLEdBQVFnVCxZQUFBLENBQWE1NEIsSUFBQSxFQUFNdkgsSUFBQSxFQUFNQyxFQUFFO0VBQ3ZDLElBQUltRCxJQUFBLEdBQU1tRSxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBO0lBQUt1OEIsT0FBQSxHQUFVejlCLElBQUEsQ0FBSWdVLEtBQUEsQ0FBTStWLEtBQUEsQ0FBTW50QixJQUFBLEVBQU1tdEIsS0FBQSxDQUFNbHRCLEVBQUU7RUFDbEUsSUFBSTZnQyxZQUFBLEVBQWNDLGFBQUE7RUFFbEIsSUFBSXg1QixJQUFBLENBQUsrUyxLQUFBLENBQU1xVCxXQUFBLEtBQWdCLEtBQUswQixJQUFBLENBQUtDLEdBQUEsQ0FBSSxJQUFJLE1BQU0vbkIsSUFBQSxDQUFLK1MsS0FBQSxDQUFNc1QsZUFBQSxFQUFpQjtJQUMvRWtULFlBQUEsR0FBZXY1QixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVqUCxFQUFBO0lBQ3BDOGdDLGFBQUEsR0FBZ0I7RUFDcEIsT0FDSztJQUNERCxZQUFBLEdBQWV2NUIsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVbFAsSUFBQTtJQUNwQytnQyxhQUFBLEdBQWdCO0VBQ3BCO0VBQ0F4NUIsSUFBQSxDQUFLK1MsS0FBQSxDQUFNcVQsV0FBQSxHQUFjO0VBQ3pCLElBQUlxVCxNQUFBLEdBQVNDLFFBQUEsQ0FBU0osT0FBQSxDQUFRN3pCLE9BQUEsRUFBU21nQixLQUFBLENBQU03b0IsR0FBQSxDQUFJMEksT0FBQSxFQUFTbWdCLEtBQUEsQ0FBTW50QixJQUFBLEVBQU04Z0MsWUFBQSxFQUFjQyxhQUFhO0VBQ2pHLElBQUlDLE1BQUEsRUFDQXo1QixJQUFBLENBQUsrUyxLQUFBLENBQU1xVSxjQUFBO0VBQ2YsS0FBS3JwQixHQUFBLElBQU9pQyxJQUFBLENBQUsrUyxLQUFBLENBQU00VCxZQUFBLEdBQWVtQixJQUFBLENBQUtDLEdBQUEsQ0FBSSxJQUFJLE9BQU8zcEIsT0FBQSxLQUN0RHk1QixVQUFBLENBQVc3TCxJQUFBLENBQUt4WCxDQUFBLElBQUtBLENBQUEsQ0FBRW5jLFFBQUEsSUFBWSxLQUFLLENBQUMrYyxRQUFBLENBQVN2YixJQUFBLENBQUsyYSxDQUFBLENBQUUxYSxRQUFRLENBQUMsTUFDakUsQ0FBQzIvQixNQUFBLElBQVVBLE1BQUEsQ0FBT0UsSUFBQSxJQUFRRixNQUFBLENBQU9HLElBQUEsS0FDbEM1NUIsSUFBQSxDQUFLRyxRQUFBLENBQVMsaUJBQWlCa0gsQ0FBQSxJQUFLQSxDQUFBLENBQUVySCxJQUFBLEVBQU0zRSxRQUFBLENBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHO0lBQ3JFMkUsSUFBQSxDQUFLK1MsS0FBQSxDQUFNNFQsWUFBQSxHQUFlO0lBQzFCO0VBQ0o7RUFDQSxJQUFJLENBQUM4UyxNQUFBLEVBQVE7SUFDVCxJQUFJdEMsUUFBQSxJQUFZenZCLEdBQUEsWUFBZWhRLHdCQUFBLENBQUFtYixhQUFBLElBQWlCLENBQUNuTCxHQUFBLENBQUlvSixLQUFBLElBQVNwSixHQUFBLENBQUlTLEtBQUEsQ0FBTXdYLFVBQUEsQ0FBV2pZLEdBQUEsQ0FBSXFULE9BQU8sS0FDMUYsQ0FBQy9hLElBQUEsQ0FBS21SLFNBQUEsSUFBYSxFQUFFeVUsS0FBQSxDQUFNbGUsR0FBQSxJQUFPa2UsS0FBQSxDQUFNbGUsR0FBQSxDQUFJZ0YsTUFBQSxJQUFVa1osS0FBQSxDQUFNbGUsR0FBQSxDQUFJaUYsSUFBQSxHQUFPO01BQ3ZFOHNCLE1BQUEsR0FBUztRQUFFbHhCLEtBQUEsRUFBT2IsR0FBQSxDQUFJalAsSUFBQTtRQUFNa2hDLElBQUEsRUFBTWp5QixHQUFBLENBQUloUCxFQUFBO1FBQUlraEMsSUFBQSxFQUFNbHlCLEdBQUEsQ0FBSWhQO01BQUc7SUFDM0QsT0FDSztNQUNELElBQUlrdEIsS0FBQSxDQUFNbGUsR0FBQSxFQUFLO1FBQ1gsSUFBSXlrQixJQUFBLEdBQU0wTixnQkFBQSxDQUFpQjc1QixJQUFBLEVBQU1BLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsRUFBSzZvQixLQUFBLENBQU1sZSxHQUFHO1FBQzFELElBQUl5a0IsSUFBQSxJQUFPLENBQUNBLElBQUEsQ0FBSTFkLEVBQUEsQ0FBR3pPLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQVMsR0FBRztVQUN0QyxJQUFJaVcsRUFBQSxHQUFLNWQsSUFBQSxDQUFLd0YsS0FBQSxDQUFNb1ksRUFBQSxDQUFHblIsWUFBQSxDQUFhMGYsSUFBRztVQUN2QyxJQUFJakYsYUFBQSxFQUNBdEosRUFBQSxDQUFHaU0sT0FBQSxDQUFRLGVBQWUzQyxhQUFhO1VBQzNDbG5CLElBQUEsQ0FBSzJkLFFBQUEsQ0FBU0MsRUFBRTtRQUNwQjtNQUNKO01BQ0E7SUFDSjtFQUNKO0VBSUEsSUFBSTVkLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVWxQLElBQUEsR0FBT3VILElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVWpQLEVBQUEsSUFDakQrZ0MsTUFBQSxDQUFPbHhCLEtBQUEsSUFBU2t4QixNQUFBLENBQU9HLElBQUEsSUFDdkI1NUIsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxZQUFxQmpRLHdCQUFBLENBQUFtYixhQUFBLEVBQWU7SUFDL0MsSUFBSTRtQixNQUFBLENBQU9seEIsS0FBQSxHQUFRdkksSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVbFAsSUFBQSxJQUFRZ2hDLE1BQUEsQ0FBT2x4QixLQUFBLElBQVN2SSxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVsUCxJQUFBLEdBQU8sS0FDeEZ1SCxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVsUCxJQUFBLElBQVFtdEIsS0FBQSxDQUFNbnRCLElBQUEsRUFBTTtNQUN6Q2doQyxNQUFBLENBQU9seEIsS0FBQSxHQUFRdkksSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVbFAsSUFBQTtJQUN4QyxXQUNTZ2hDLE1BQUEsQ0FBT0UsSUFBQSxHQUFPMzVCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVWpQLEVBQUEsSUFBTStnQyxNQUFBLENBQU9FLElBQUEsSUFBUTM1QixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVqUCxFQUFBLEdBQUssS0FDdkZzSCxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVqUCxFQUFBLElBQU1rdEIsS0FBQSxDQUFNbHRCLEVBQUEsRUFBSTtNQUNyQytnQyxNQUFBLENBQU9HLElBQUEsSUFBUzU1QixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVqUCxFQUFBLEdBQUsrZ0MsTUFBQSxDQUFPRSxJQUFBO01BQ2pERixNQUFBLENBQU9FLElBQUEsR0FBTzM1QixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVqUCxFQUFBO0lBQ3ZDO0VBQ0o7RUFJQSxJQUFJNEUsRUFBQSxJQUFNQyxVQUFBLElBQWMsTUFBTWs4QixNQUFBLENBQU9HLElBQUEsSUFBUUgsTUFBQSxDQUFPbHhCLEtBQUEsR0FBUSxLQUN4RGt4QixNQUFBLENBQU9FLElBQUEsSUFBUUYsTUFBQSxDQUFPbHhCLEtBQUEsSUFBU2t4QixNQUFBLENBQU9seEIsS0FBQSxHQUFRcWQsS0FBQSxDQUFNbnRCLElBQUEsSUFDcERtdEIsS0FBQSxDQUFNN29CLEdBQUEsQ0FBSXFrQixXQUFBLENBQVlxWSxNQUFBLENBQU9seEIsS0FBQSxHQUFRcWQsS0FBQSxDQUFNbnRCLElBQUEsR0FBTyxHQUFHZ2hDLE1BQUEsQ0FBT2x4QixLQUFBLEdBQVFxZCxLQUFBLENBQU1udEIsSUFBQSxHQUFPLENBQUMsS0FBSyxTQUFXO0lBQ2xHZ2hDLE1BQUEsQ0FBT2x4QixLQUFBO0lBQ1BreEIsTUFBQSxDQUFPRSxJQUFBO0lBQ1BGLE1BQUEsQ0FBT0csSUFBQTtFQUNYO0VBQ0EsSUFBSS94QixLQUFBLEdBQVErZCxLQUFBLENBQU03b0IsR0FBQSxDQUFJKzhCLGNBQUEsQ0FBZUwsTUFBQSxDQUFPbHhCLEtBQUEsR0FBUXFkLEtBQUEsQ0FBTW50QixJQUFJO0VBQzlELElBQUlxUCxHQUFBLEdBQU04ZCxLQUFBLENBQU03b0IsR0FBQSxDQUFJKzhCLGNBQUEsQ0FBZUwsTUFBQSxDQUFPRyxJQUFBLEdBQU9oVSxLQUFBLENBQU1udEIsSUFBSTtFQUMzRCxJQUFJc2hDLE1BQUEsR0FBU2wrQixJQUFBLENBQUlrTCxPQUFBLENBQVEweUIsTUFBQSxDQUFPbHhCLEtBQUs7RUFDckMsSUFBSXl4QixZQUFBLEdBQWVueUIsS0FBQSxDQUFNOFgsVUFBQSxDQUFXN1gsR0FBRyxLQUFLRCxLQUFBLENBQU0xUCxNQUFBLENBQU82TyxhQUFBLElBQWlCK3lCLE1BQUEsQ0FBT3Z4QixHQUFBLENBQUksS0FBS2l4QixNQUFBLENBQU9FLElBQUE7RUFDakcsSUFBSU0sT0FBQTtFQUdKLEtBQU1sOEIsR0FBQSxJQUFPaUMsSUFBQSxDQUFLK1MsS0FBQSxDQUFNNFQsWUFBQSxHQUFlbUIsSUFBQSxDQUFLQyxHQUFBLENBQUksSUFBSSxRQUMvQyxDQUFDaVMsWUFBQSxJQUFnQm5DLFVBQUEsQ0FBVzdMLElBQUEsQ0FBS3hYLENBQUEsSUFBS0EsQ0FBQSxDQUFFMWEsUUFBQSxJQUFZLFNBQVMwYSxDQUFBLENBQUUxYSxRQUFBLElBQVksR0FBRyxNQUM5RSxDQUFDa2dDLFlBQUEsSUFBZ0JueUIsS0FBQSxDQUFNeEwsR0FBQSxHQUFNdXBCLEtBQUEsQ0FBTTdvQixHQUFBLENBQUkwSSxPQUFBLENBQVFDLElBQUEsS0FDM0MsQ0FBQ21DLEtBQUEsQ0FBTThYLFVBQUEsQ0FBVzdYLEdBQUcsS0FBSyxDQUFDRCxLQUFBLENBQU0xUCxNQUFBLENBQU82TyxhQUFBLEtBQ3pDLENBQUMsS0FBS25OLElBQUEsQ0FBSytyQixLQUFBLENBQU03b0IsR0FBQSxDQUFJcWtCLFdBQUEsQ0FBWXZaLEtBQUEsQ0FBTXhMLEdBQUEsRUFBS3lMLEdBQUEsQ0FBSXpMLEdBQUEsRUFBSyxJQUFJLEVBQUUsQ0FBQyxNQUMzRDQ5QixPQUFBLEdBQVV2aUMsd0JBQUEsQ0FBQWdqQixTQUFBLENBQVUrQyxRQUFBLENBQVNtSSxLQUFBLENBQU03b0IsR0FBQSxDQUFJZ0ssT0FBQSxDQUFRYyxLQUFBLENBQU14TCxHQUFBLEdBQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUN2RTQ5QixPQUFBLENBQVF0dEIsSUFBQSxHQUFPOUUsS0FBQSxDQUFNeEwsR0FBQSxLQUN6QjJELElBQUEsQ0FBS0csUUFBQSxDQUFTLGlCQUFpQmtILENBQUEsSUFBS0EsQ0FBQSxDQUFFckgsSUFBQSxFQUFNM0UsUUFBQSxDQUFTLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRztJQUNyRTJFLElBQUEsQ0FBSytTLEtBQUEsQ0FBTTRULFlBQUEsR0FBZTtJQUMxQjtFQUNKO0VBRUEsSUFBSTNtQixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVUrRSxNQUFBLEdBQVMrc0IsTUFBQSxDQUFPbHhCLEtBQUEsSUFDckMyeEIsa0JBQUEsQ0FBbUJyK0IsSUFBQSxFQUFLNDlCLE1BQUEsQ0FBT2x4QixLQUFBLEVBQU9reEIsTUFBQSxDQUFPRSxJQUFBLEVBQU05eEIsS0FBQSxFQUFPQyxHQUFHLEtBQzdEOUgsSUFBQSxDQUFLRyxRQUFBLENBQVMsaUJBQWlCa0gsQ0FBQSxJQUFLQSxDQUFBLENBQUVySCxJQUFBLEVBQU0zRSxRQUFBLENBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFHO0lBQ3hFLElBQUkrQyxPQUFBLElBQVdULE1BQUEsRUFDWHFDLElBQUEsQ0FBSzBiLFdBQUEsQ0FBWW1iLHdCQUFBLENBQXlCO0lBQzlDO0VBQ0o7RUFJQSxJQUFJbDVCLE1BQUEsSUFBVTg3QixNQUFBLENBQU9HLElBQUEsSUFBUUgsTUFBQSxDQUFPbHhCLEtBQUEsRUFDaEN2SSxJQUFBLENBQUsrUyxLQUFBLENBQU1nVSxnQkFBQSxHQUFtQmUsSUFBQSxDQUFLQyxHQUFBLENBQUk7RUFTM0MsSUFBSTNwQixPQUFBLElBQVcsQ0FBQzQ3QixZQUFBLElBQWdCbnlCLEtBQUEsQ0FBTVUsS0FBQSxDQUFNLEtBQUtULEdBQUEsQ0FBSVMsS0FBQSxDQUFNLEtBQUtULEdBQUEsQ0FBSU8sWUFBQSxJQUFnQixLQUFLUixLQUFBLENBQU1vQixLQUFBLElBQVNuQixHQUFBLENBQUltQixLQUFBLElBQ3hHMmMsS0FBQSxDQUFNbGUsR0FBQSxJQUFPa2UsS0FBQSxDQUFNbGUsR0FBQSxDQUFJZ0YsTUFBQSxJQUFVa1osS0FBQSxDQUFNbGUsR0FBQSxDQUFJaUYsSUFBQSxJQUFRaVosS0FBQSxDQUFNbGUsR0FBQSxDQUFJaUYsSUFBQSxJQUFROHNCLE1BQUEsQ0FBT0UsSUFBQSxFQUFNO0lBQ2xGRixNQUFBLENBQU9HLElBQUEsSUFBUTtJQUNmOXhCLEdBQUEsR0FBTThkLEtBQUEsQ0FBTTdvQixHQUFBLENBQUkrOEIsY0FBQSxDQUFlTCxNQUFBLENBQU9HLElBQUEsR0FBT2hVLEtBQUEsQ0FBTW50QixJQUFJO0lBQ3ZEcWtCLFVBQUEsQ0FBVyxNQUFNO01BQ2I5YyxJQUFBLENBQUtHLFFBQUEsQ0FBUyxpQkFBaUIsVUFBVWtILENBQUEsRUFBRztRQUFFLE9BQU9BLENBQUEsQ0FBRXJILElBQUEsRUFBTTNFLFFBQUEsQ0FBUyxJQUFJLE9BQU8sQ0FBQztNQUFHLENBQUM7SUFDMUYsR0FBRyxFQUFFO0VBQ1Q7RUFDQSxJQUFJOCtCLE1BQUEsR0FBU1YsTUFBQSxDQUFPbHhCLEtBQUE7SUFBTzZ4QixJQUFBLEdBQU9YLE1BQUEsQ0FBT0UsSUFBQTtFQUN6QyxJQUFJVSxJQUFBLEdBQVFsdUIsSUFBQSxJQUFTO0lBQ2pCLElBQUl5UixFQUFBLEdBQUt6UixJQUFBLElBQVFuTSxJQUFBLENBQUt3RixLQUFBLENBQU1vWSxFQUFBLENBQUdnRSxPQUFBLENBQVF1WSxNQUFBLEVBQVFDLElBQUEsRUFBTXhVLEtBQUEsQ0FBTTdvQixHQUFBLENBQUk4UyxLQUFBLENBQU00cEIsTUFBQSxDQUFPbHhCLEtBQUEsR0FBUXFkLEtBQUEsQ0FBTW50QixJQUFBLEVBQU1naEMsTUFBQSxDQUFPRyxJQUFBLEdBQU9oVSxLQUFBLENBQU1udEIsSUFBSSxDQUFDO0lBQ3pILElBQUltdEIsS0FBQSxDQUFNbGUsR0FBQSxFQUFLO01BQ1gsSUFBSXlrQixJQUFBLEdBQU0wTixnQkFBQSxDQUFpQjc1QixJQUFBLEVBQU00ZCxFQUFBLENBQUc3Z0IsR0FBQSxFQUFLNm9CLEtBQUEsQ0FBTWxlLEdBQUc7TUFNbEQsSUFBSXlrQixJQUFBLElBQU8sRUFBRXh1QixNQUFBLElBQVVxQyxJQUFBLENBQUttUixTQUFBLElBQWFnYixJQUFBLENBQUlyYixLQUFBLEtBQ3hDMm9CLE1BQUEsQ0FBT2x4QixLQUFBLElBQVNreEIsTUFBQSxDQUFPRyxJQUFBLElBQVE1NUIsSUFBQSxDQUFLK1MsS0FBQSxDQUFNZ1UsZ0JBQUEsR0FBbUJlLElBQUEsQ0FBS0MsR0FBQSxDQUFJLElBQUksU0FDMUVvRSxJQUFBLENBQUl4ZixJQUFBLElBQVF3dEIsTUFBQSxJQUFVaE8sSUFBQSxDQUFJeGYsSUFBQSxJQUFRaVIsRUFBQSxDQUFHaVMsT0FBQSxDQUFRdEssR0FBQSxDQUFJNlUsSUFBSSxJQUFJLE1BQzFEOThCLEVBQUEsSUFBTTZ1QixJQUFBLENBQUlyYixLQUFBLElBQVNxYixJQUFBLENBQUl4ZixJQUFBLElBQVF3dEIsTUFBQSxHQUMvQnZjLEVBQUEsQ0FBR25SLFlBQUEsQ0FBYTBmLElBQUc7SUFDM0I7SUFDQSxJQUFJakYsYUFBQSxFQUNBdEosRUFBQSxDQUFHaU0sT0FBQSxDQUFRLGVBQWUzQyxhQUFhO0lBQzNDLE9BQU90SixFQUFBLENBQUdDLGNBQUEsQ0FBZTtFQUM3QjtFQUNBLElBQUl5YyxVQUFBO0VBQ0osSUFBSU4sWUFBQSxFQUFjO0lBQ2QsSUFBSW55QixLQUFBLENBQU14TCxHQUFBLElBQU95TCxHQUFBLENBQUl6TCxHQUFBLEVBQUs7TUFHdEIsSUFBSWlCLEVBQUEsSUFBTUMsVUFBQSxJQUFjLE1BQU1zSyxLQUFBLENBQU1RLFlBQUEsSUFBZ0IsR0FBRztRQUNuRHJJLElBQUEsQ0FBSzBiLFdBQUEsQ0FBWW1iLHdCQUFBLENBQXlCO1FBQzFDL1osVUFBQSxDQUFXLE1BQU16QixjQUFBLENBQWVyYixJQUFJLEdBQUcsRUFBRTtNQUM3QztNQUNBLElBQUk0ZCxFQUFBLEdBQUt5YyxJQUFBLENBQUtyNkIsSUFBQSxDQUFLd0YsS0FBQSxDQUFNb1ksRUFBQSxDQUFHaUMsTUFBQSxDQUFPc2EsTUFBQSxFQUFRQyxJQUFJLENBQUM7TUFDaEQsSUFBSXpvQixLQUFBLEdBQVE5VixJQUFBLENBQUlrTCxPQUFBLENBQVEweUIsTUFBQSxDQUFPbHhCLEtBQUssRUFBRWd5QixXQUFBLENBQVkxK0IsSUFBQSxDQUFJa0wsT0FBQSxDQUFRMHlCLE1BQUEsQ0FBT0UsSUFBSSxDQUFDO01BQzFFLElBQUlob0IsS0FBQSxFQUNBaU0sRUFBQSxDQUFHNGMsV0FBQSxDQUFZN29CLEtBQUs7TUFDeEIzUixJQUFBLENBQUsyZCxRQUFBLENBQVNDLEVBQUU7SUFDcEIsV0FFQTZiLE1BQUEsQ0FBT0UsSUFBQSxJQUFRRixNQUFBLENBQU9HLElBQUEsS0FDakJVLFVBQUEsR0FBYUcsWUFBQSxDQUFhNXlCLEtBQUEsQ0FBTTFQLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUWdQLEdBQUEsQ0FBSTVNLEtBQUEsQ0FBTVEsWUFBQSxFQUFjUCxHQUFBLENBQUlPLFlBQVksR0FBRzB4QixNQUFBLENBQU81aEMsTUFBQSxDQUFPc04sT0FBQSxDQUFRZ1AsR0FBQSxDQUFJc2xCLE1BQUEsQ0FBTzF4QixZQUFBLEVBQWNveEIsTUFBQSxDQUFPRSxJQUFBLEdBQU9JLE1BQUEsQ0FBT3h4QixLQUFBLENBQU0sQ0FBQyxDQUFDLElBQUk7TUFDM0ssSUFBSXFWLEVBQUEsR0FBS3ljLElBQUEsQ0FBS3I2QixJQUFBLENBQUt3RixLQUFBLENBQU1vWSxFQUFFO01BQzNCLElBQUkwYyxVQUFBLENBQVc5c0IsSUFBQSxJQUFRLE9BQ25Cb1EsRUFBQSxDQUFHOGMsT0FBQSxDQUFRUCxNQUFBLEVBQVFDLElBQUEsRUFBTUUsVUFBQSxDQUFXL3ZCLElBQUksT0FFeENxVCxFQUFBLENBQUcrYyxVQUFBLENBQVdSLE1BQUEsRUFBUUMsSUFBQSxFQUFNRSxVQUFBLENBQVcvdkIsSUFBSTtNQUMvQ3ZLLElBQUEsQ0FBSzJkLFFBQUEsQ0FBU0MsRUFBRTtJQUNwQixXQUNTL1YsS0FBQSxDQUFNMVAsTUFBQSxDQUFPNkIsS0FBQSxDQUFNNk4sS0FBQSxDQUFNN1AsS0FBQSxDQUFNLENBQUMsRUFBRTBNLE1BQUEsSUFBVW1ELEtBQUEsQ0FBTTdQLEtBQUEsQ0FBTSxLQUFLOFAsR0FBQSxDQUFJOVAsS0FBQSxDQUFNLEtBQUs4UCxHQUFBLENBQUlrVyxVQUFBLEdBQWEsSUFBSSxJQUFJO01BRTFHLElBQUlqUSxJQUFBLEdBQU9sRyxLQUFBLENBQU0xUCxNQUFBLENBQU9pcEIsV0FBQSxDQUFZdlosS0FBQSxDQUFNUSxZQUFBLEVBQWNQLEdBQUEsQ0FBSU8sWUFBWTtNQUN4RSxJQUFJNGdCLEtBQUEsR0FBUUEsQ0FBQSxLQUFNb1IsSUFBQSxDQUFLcjZCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW9ZLEVBQUEsQ0FBR3NMLFVBQUEsQ0FBV25iLElBQUEsRUFBTW9zQixNQUFBLEVBQVFDLElBQUksQ0FBQztNQUNuRSxJQUFJLENBQUNwNkIsSUFBQSxDQUFLRyxRQUFBLENBQVMsbUJBQW1Ca0gsQ0FBQSxJQUFLQSxDQUFBLENBQUVySCxJQUFBLEVBQU1tNkIsTUFBQSxFQUFRQyxJQUFBLEVBQU1yc0IsSUFBQSxFQUFNa2IsS0FBSyxDQUFDLEdBQ3pFanBCLElBQUEsQ0FBSzJkLFFBQUEsQ0FBU3NMLEtBQUEsQ0FBTSxDQUFDO0lBQzdCO0VBQ0osT0FDSztJQUNEanBCLElBQUEsQ0FBSzJkLFFBQUEsQ0FBUzBjLElBQUEsQ0FBSyxDQUFDO0VBQ3hCO0FBQ0o7QUFDQSxTQUFTUixpQkFBaUI3NUIsSUFBQSxFQUFNbkUsSUFBQSxFQUFLKytCLFNBQUEsRUFBVztFQUM1QyxJQUFJcitCLElBQUEsQ0FBSytFLEdBQUEsQ0FBSXM1QixTQUFBLENBQVVsdUIsTUFBQSxFQUFRa3VCLFNBQUEsQ0FBVWp1QixJQUFJLElBQUk5USxJQUFBLENBQUk0SixPQUFBLENBQVFDLElBQUEsRUFDekQsT0FBTztFQUNYLE9BQU9zVixnQkFBQSxDQUFpQmhiLElBQUEsRUFBTW5FLElBQUEsQ0FBSWtMLE9BQUEsQ0FBUTZ6QixTQUFBLENBQVVsdUIsTUFBTSxHQUFHN1EsSUFBQSxDQUFJa0wsT0FBQSxDQUFRNnpCLFNBQUEsQ0FBVWp1QixJQUFJLENBQUM7QUFDNUY7QUFJQSxTQUFTOHRCLGFBQWE3L0IsR0FBQSxFQUFLMEssSUFBQSxFQUFNO0VBQzdCLElBQUl1MUIsUUFBQSxHQUFXamdDLEdBQUEsQ0FBSXlJLFVBQUEsQ0FBV3NPLEtBQUE7SUFBT21wQixTQUFBLEdBQVl4MUIsSUFBQSxDQUFLakMsVUFBQSxDQUFXc08sS0FBQTtFQUNqRSxJQUFJeWxCLEtBQUEsR0FBUXlELFFBQUE7SUFBVTNILE9BQUEsR0FBVTRILFNBQUE7SUFBV3R0QixJQUFBO0lBQU1qRCxJQUFBO0lBQU0rSSxNQUFBO0VBQ3ZELFNBQVNqUixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJeTRCLFNBQUEsQ0FBVTloQyxNQUFBLEVBQVFxSixDQUFBLElBQ2xDKzBCLEtBQUEsR0FBUTBELFNBQUEsQ0FBVXo0QixDQUFBLEVBQUcwNEIsYUFBQSxDQUFjM0QsS0FBSztFQUM1QyxTQUFTLzBCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUl3NEIsUUFBQSxDQUFTN2hDLE1BQUEsRUFBUXFKLENBQUEsSUFDakM2d0IsT0FBQSxHQUFVMkgsUUFBQSxDQUFTeDRCLENBQUEsRUFBRzA0QixhQUFBLENBQWM3SCxPQUFPO0VBQy9DLElBQUlrRSxLQUFBLENBQU1wK0IsTUFBQSxJQUFVLEtBQUtrNkIsT0FBQSxDQUFRbDZCLE1BQUEsSUFBVSxHQUFHO0lBQzFDdVIsSUFBQSxHQUFPNnNCLEtBQUEsQ0FBTTtJQUNiNXBCLElBQUEsR0FBTztJQUNQOEYsTUFBQSxHQUFVdmIsSUFBQSxJQUFTQSxJQUFBLENBQUt3UyxJQUFBLENBQUtBLElBQUEsQ0FBS3l3QixRQUFBLENBQVNqakMsSUFBQSxDQUFLNFosS0FBSyxDQUFDO0VBQzFELFdBQ1N5bEIsS0FBQSxDQUFNcCtCLE1BQUEsSUFBVSxLQUFLazZCLE9BQUEsQ0FBUWw2QixNQUFBLElBQVUsR0FBRztJQUMvQ3VSLElBQUEsR0FBTzJvQixPQUFBLENBQVE7SUFDZjFsQixJQUFBLEdBQU87SUFDUDhGLE1BQUEsR0FBVXZiLElBQUEsSUFBU0EsSUFBQSxDQUFLd1MsSUFBQSxDQUFLQSxJQUFBLENBQUt3d0IsYUFBQSxDQUFjaGpDLElBQUEsQ0FBSzRaLEtBQUssQ0FBQztFQUMvRCxPQUNLO0lBQ0QsT0FBTztFQUNYO0VBQ0EsSUFBSW1HLE9BQUEsR0FBVSxFQUFDO0VBQ2YsU0FBU3pWLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlpRCxJQUFBLENBQUt1TSxVQUFBLEVBQVl4UCxDQUFBLElBQ2pDeVYsT0FBQSxDQUFROVYsSUFBQSxDQUFLc1IsTUFBQSxDQUFPaE8sSUFBQSxDQUFLdEwsS0FBQSxDQUFNcUksQ0FBQyxDQUFDLENBQUM7RUFDdEMsSUFBSXpLLHdCQUFBLENBQUFpWixRQUFBLENBQVNwWSxJQUFBLENBQUtxZixPQUFPLEVBQUVySixFQUFBLENBQUc3VCxHQUFHLEdBQzdCLE9BQU87SUFBRTJQLElBQUE7SUFBTWlEO0VBQUs7QUFDNUI7QUFDQSxTQUFTMHNCLG1CQUFtQmUsR0FBQSxFQUFLMXlCLEtBQUEsRUFBT0MsR0FBQSxFQUFLMHlCLFNBQUEsRUFBV0MsT0FBQSxFQUFTO0VBQzdELElBQ0EzeUIsR0FBQSxHQUFNRCxLQUFBLElBQVM0eUIsT0FBQSxDQUFROStCLEdBQUEsR0FBTTYrQixTQUFBLENBQVU3K0IsR0FBQSxJQUVuQysrQixxQkFBQSxDQUFzQkYsU0FBQSxFQUFXLE1BQU0sS0FBSyxJQUFJQyxPQUFBLENBQVE5K0IsR0FBQSxFQUN4RCxPQUFPO0VBQ1gsSUFBSW1oQixNQUFBLEdBQVN5ZCxHQUFBLENBQUlsMEIsT0FBQSxDQUFRd0IsS0FBSztFQUU5QixJQUFJLENBQUMyeUIsU0FBQSxDQUFVL2lDLE1BQUEsQ0FBT2lRLFdBQUEsRUFBYTtJQUMvQixJQUFJbEIsS0FBQSxHQUFRc1csTUFBQSxDQUFPVSxTQUFBO0lBQ25CLE9BQU9oWCxLQUFBLElBQVMsUUFBUXNCLEdBQUEsSUFBT0QsS0FBQSxHQUFRckIsS0FBQSxDQUFNdk4sUUFBQTtFQUNqRDtFQUVBLElBQUk2akIsTUFBQSxDQUFPblYsWUFBQSxHQUFlbVYsTUFBQSxDQUFPcmxCLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUUMsSUFBQSxJQUFRLENBQUM4WCxNQUFBLENBQU9ybEIsTUFBQSxDQUFPaVEsV0FBQSxFQUNuRSxPQUFPO0VBQ1gsSUFBSWl6QixLQUFBLEdBQVFKLEdBQUEsQ0FBSWwwQixPQUFBLENBQVFxMEIscUJBQUEsQ0FBc0I1ZCxNQUFBLEVBQVEsTUFBTSxJQUFJLENBQUM7RUFFakUsSUFBSSxDQUFDNmQsS0FBQSxDQUFNbGpDLE1BQUEsQ0FBT2lRLFdBQUEsSUFBZWl6QixLQUFBLENBQU1oL0IsR0FBQSxHQUFNbU0sR0FBQSxJQUN6QzR5QixxQkFBQSxDQUFzQkMsS0FBQSxFQUFPLE1BQU0sS0FBSyxJQUFJN3lCLEdBQUEsRUFDNUMsT0FBTztFQUVYLE9BQU8weUIsU0FBQSxDQUFVL2lDLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUWdQLEdBQUEsQ0FBSXltQixTQUFBLENBQVU3eUIsWUFBWSxFQUFFb0csRUFBQSxDQUFHNHNCLEtBQUEsQ0FBTWxqQyxNQUFBLENBQU9zTixPQUFPO0FBQ3ZGO0FBQ0EsU0FBUzIxQixzQkFBc0J4ekIsSUFBQSxFQUFNMHpCLE9BQUEsRUFBU0MsT0FBQSxFQUFTO0VBQ25ELElBQUl0eUIsS0FBQSxHQUFRckIsSUFBQSxDQUFLcUIsS0FBQTtJQUFPVCxHQUFBLEdBQU04eUIsT0FBQSxHQUFVMXpCLElBQUEsQ0FBS1ksR0FBQSxDQUFJLElBQUlaLElBQUEsQ0FBS3ZMLEdBQUE7RUFDMUQsT0FBTzRNLEtBQUEsR0FBUSxNQUFNcXlCLE9BQUEsSUFBVzF6QixJQUFBLENBQUs0ekIsVUFBQSxDQUFXdnlCLEtBQUssS0FBS3JCLElBQUEsQ0FBSzdQLElBQUEsQ0FBS2tSLEtBQUssRUFBRTRJLFVBQUEsR0FBYTtJQUNwRjVJLEtBQUE7SUFDQVQsR0FBQTtJQUNBOHlCLE9BQUEsR0FBVTtFQUNkO0VBQ0EsSUFBSUMsT0FBQSxFQUFTO0lBQ1QsSUFBSWwyQixJQUFBLEdBQU91QyxJQUFBLENBQUs3UCxJQUFBLENBQUtrUixLQUFLLEVBQUV5ckIsVUFBQSxDQUFXOXNCLElBQUEsQ0FBSzR6QixVQUFBLENBQVd2eUIsS0FBSyxDQUFDO0lBQzdELE9BQU81RCxJQUFBLElBQVEsQ0FBQ0EsSUFBQSxDQUFLMkwsTUFBQSxFQUFRO01BQ3pCM0wsSUFBQSxHQUFPQSxJQUFBLENBQUtoQyxVQUFBO01BQ1ptRixHQUFBO0lBQ0o7RUFDSjtFQUNBLE9BQU9BLEdBQUE7QUFDWDtBQUNBLFNBQVNreEIsU0FBU2xqQixDQUFBLEVBQUdDLENBQUEsRUFBR3BhLEdBQUEsRUFBS2s5QixZQUFBLEVBQWNDLGFBQUEsRUFBZTtFQUN0RCxJQUFJanhCLEtBQUEsR0FBUWlPLENBQUEsQ0FBRWlsQixhQUFBLENBQWNobEIsQ0FBQSxFQUFHcGEsR0FBRztFQUNsQyxJQUFJa00sS0FBQSxJQUFTLE1BQ1QsT0FBTztFQUNYLElBQUk7SUFBRWlPLENBQUEsRUFBR21qQixJQUFBO0lBQU1sakIsQ0FBQSxFQUFHbWpCO0VBQUssSUFBSXBqQixDQUFBLENBQUVrbEIsV0FBQSxDQUFZamxCLENBQUEsRUFBR3BhLEdBQUEsR0FBTW1hLENBQUEsQ0FBRTlRLElBQUEsRUFBTXJKLEdBQUEsR0FBTW9hLENBQUEsQ0FBRS9RLElBQUk7RUFDdEUsSUFBSTh6QixhQUFBLElBQWlCLE9BQU87SUFDeEIsSUFBSW1DLE1BQUEsR0FBU3AvQixJQUFBLENBQUsrRSxHQUFBLENBQUksR0FBR2lILEtBQUEsR0FBUWhNLElBQUEsQ0FBS0MsR0FBQSxDQUFJbTlCLElBQUEsRUFBTUMsSUFBSSxDQUFDO0lBQ3JETCxZQUFBLElBQWdCSSxJQUFBLEdBQU9nQyxNQUFBLEdBQVNwekIsS0FBQTtFQUNwQztFQUNBLElBQUlveEIsSUFBQSxHQUFPcHhCLEtBQUEsSUFBU2lPLENBQUEsQ0FBRTlRLElBQUEsR0FBTytRLENBQUEsQ0FBRS9RLElBQUEsRUFBTTtJQUNqQyxJQUFJNGxCLElBQUEsR0FBT2lPLFlBQUEsSUFBZ0JoeEIsS0FBQSxJQUFTZ3hCLFlBQUEsSUFBZ0JJLElBQUEsR0FBT3B4QixLQUFBLEdBQVFneEIsWUFBQSxHQUFlO0lBQ2xGaHhCLEtBQUEsSUFBUytpQixJQUFBO0lBQ1QsSUFBSS9pQixLQUFBLElBQVNBLEtBQUEsR0FBUWtPLENBQUEsQ0FBRS9RLElBQUEsSUFBUWsyQixlQUFBLENBQWdCbmxCLENBQUEsQ0FBRTJLLFdBQUEsQ0FBWTdZLEtBQUEsR0FBUSxHQUFHQSxLQUFBLEdBQVEsQ0FBQyxDQUFDLEdBQzlFQSxLQUFBLElBQVMraUIsSUFBQSxHQUFPLElBQUk7SUFDeEJzTyxJQUFBLEdBQU9yeEIsS0FBQSxJQUFTcXhCLElBQUEsR0FBT0QsSUFBQTtJQUN2QkEsSUFBQSxHQUFPcHhCLEtBQUE7RUFDWCxXQUNTcXhCLElBQUEsR0FBT3J4QixLQUFBLEVBQU87SUFDbkIsSUFBSStpQixJQUFBLEdBQU9pTyxZQUFBLElBQWdCaHhCLEtBQUEsSUFBU2d4QixZQUFBLElBQWdCSyxJQUFBLEdBQU9yeEIsS0FBQSxHQUFRZ3hCLFlBQUEsR0FBZTtJQUNsRmh4QixLQUFBLElBQVMraUIsSUFBQTtJQUNULElBQUkvaUIsS0FBQSxJQUFTQSxLQUFBLEdBQVFpTyxDQUFBLENBQUU5USxJQUFBLElBQVFrMkIsZUFBQSxDQUFnQnBsQixDQUFBLENBQUU0SyxXQUFBLENBQVk3WSxLQUFBLEdBQVEsR0FBR0EsS0FBQSxHQUFRLENBQUMsQ0FBQyxHQUM5RUEsS0FBQSxJQUFTK2lCLElBQUEsR0FBTyxJQUFJO0lBQ3hCcU8sSUFBQSxHQUFPcHhCLEtBQUEsSUFBU294QixJQUFBLEdBQU9DLElBQUE7SUFDdkJBLElBQUEsR0FBT3J4QixLQUFBO0VBQ1g7RUFDQSxPQUFPO0lBQUVBLEtBQUE7SUFBT294QixJQUFBO0lBQU1DO0VBQUs7QUFDL0I7QUFDQSxTQUFTZ0MsZ0JBQWdCM2hCLEdBQUEsRUFBSztFQUMxQixJQUFJQSxHQUFBLENBQUlqaEIsTUFBQSxJQUFVLEdBQ2QsT0FBTztFQUNYLElBQUl3ZCxDQUFBLEdBQUl5RCxHQUFBLENBQUk0aEIsVUFBQSxDQUFXLENBQUM7SUFBR3BsQixDQUFBLEdBQUl3RCxHQUFBLENBQUk0aEIsVUFBQSxDQUFXLENBQUM7RUFDL0MsT0FBT3JsQixDQUFBLElBQUssU0FBVUEsQ0FBQSxJQUFLLFNBQVVDLENBQUEsSUFBSyxTQUFVQSxDQUFBLElBQUs7QUFDN0Q7QUFLQSxJQUFNbmYsb0JBQUEsR0FBdUIrcEIsa0JBQUE7QUFJN0IsSUFBTWhxQixnQkFBQSxHQUFtQmt6QixjQUFBO0FBTXpCLElBQU1uekIsVUFBQSxHQUFOLE1BQWlCO0VBUWI2UyxZQUFZNnhCLEtBQUEsRUFBT0MsS0FBQSxFQUFPO0lBQ3RCLEtBQUtDLEtBQUEsR0FBUTtJQUliLEtBQUtwUyxPQUFBLEdBQVU7SUFJZixLQUFLclYsV0FBQSxHQUFjO0lBQ25CLEtBQUswbkIsT0FBQSxHQUFVO0lBSWYsS0FBSy9QLFVBQUEsR0FBYTtJQUlsQixLQUFLblEsYUFBQSxHQUFnQjtJQUlyQixLQUFLa0Isb0JBQUEsR0FBdUI7SUFJNUIsS0FBS2xLLEtBQUEsR0FBUSxJQUFJb1QsVUFBQTtJQUNqQixLQUFLK1YsaUJBQUEsR0FBb0IsRUFBQztJQUMxQixLQUFLQyxXQUFBLEdBQWMsRUFBQztJQU1wQixLQUFLaGtCLHFCQUFBLEdBQXdCO0lBTTdCLEtBQUtpWCxRQUFBLEdBQVc7SUFDaEIsS0FBS2dOLE1BQUEsR0FBU0wsS0FBQTtJQUNkLEtBQUt2MkIsS0FBQSxHQUFRdTJCLEtBQUEsQ0FBTXYyQixLQUFBO0lBQ25CLEtBQUs2MkIsYUFBQSxHQUFnQk4sS0FBQSxDQUFNTyxPQUFBLElBQVcsRUFBQztJQUN2QyxLQUFLRCxhQUFBLENBQWN2YSxPQUFBLENBQVF5YSxtQkFBbUI7SUFDOUMsS0FBSzVlLFFBQUEsR0FBVyxLQUFLQSxRQUFBLENBQVMwTixJQUFBLENBQUssSUFBSTtJQUN2QyxLQUFLM3dCLEdBQUEsR0FBT29oQyxLQUFBLElBQVNBLEtBQUEsQ0FBTVUsS0FBQSxJQUFVNWpDLFFBQUEsQ0FBU3lWLGFBQUEsQ0FBYyxLQUFLO0lBQ2pFLElBQUl5dEIsS0FBQSxFQUFPO01BQ1AsSUFBSUEsS0FBQSxDQUFNeHRCLFdBQUEsRUFDTnd0QixLQUFBLENBQU14dEIsV0FBQSxDQUFZLEtBQUs1VCxHQUFHLFdBQ3JCLE9BQU9vaEMsS0FBQSxJQUFTLFlBQ3JCQSxLQUFBLENBQU0sS0FBS3BoQyxHQUFHLFdBQ1RvaEMsS0FBQSxDQUFNVSxLQUFBLEVBQ1gsS0FBS1AsT0FBQSxHQUFVO0lBQ3ZCO0lBQ0EsS0FBSy9nQixRQUFBLEdBQVd1aEIsV0FBQSxDQUFZLElBQUk7SUFDaENDLG1CQUFBLENBQW9CLElBQUk7SUFDeEIsS0FBS3B0QixTQUFBLEdBQVlxdEIsY0FBQSxDQUFlLElBQUk7SUFDcEMsS0FBS3o0QixPQUFBLEdBQVVpUSxXQUFBLENBQVksS0FBSzNPLEtBQUEsQ0FBTXpJLEdBQUEsRUFBSzYvQixjQUFBLENBQWUsSUFBSSxHQUFHdkgsZUFBQSxDQUFnQixJQUFJLEdBQUcsS0FBSzM2QixHQUFBLEVBQUssSUFBSTtJQUN0RyxLQUFLZ2hCLFdBQUEsR0FBYyxJQUFJb2EsV0FBQSxDQUFZLE1BQU0sQ0FBQ3I5QixJQUFBLEVBQU1DLEVBQUEsRUFBSXkrQixRQUFBLEVBQVVDLEtBQUEsS0FBVStCLGFBQUEsQ0FBYyxNQUFNMWdDLElBQUEsRUFBTUMsRUFBQSxFQUFJeStCLFFBQUEsRUFBVUMsS0FBSyxDQUFDO0lBQ3RILEtBQUsxYixXQUFBLENBQVluVCxLQUFBLENBQU07SUFDdkIrZSxTQUFBLENBQVUsSUFBSTtJQUNkLEtBQUt1VixpQkFBQSxDQUFrQjtFQUMzQjtFQU1BLElBQUkxckIsVUFBQSxFQUFZO0lBQUUsT0FBTyxLQUFLNEIsS0FBQSxDQUFNNUIsU0FBQTtFQUFXO0VBSS9DLElBQUk0cUIsTUFBQSxFQUFRO0lBQ1IsSUFBSSxLQUFLSyxNQUFBLENBQU81MkIsS0FBQSxJQUFTLEtBQUtBLEtBQUEsRUFBTztNQUNqQyxJQUFJRixJQUFBLEdBQU8sS0FBSzgyQixNQUFBO01BQ2hCLEtBQUtBLE1BQUEsR0FBUyxDQUFDO01BQ2YsU0FBUzdzQixJQUFBLElBQVFqSyxJQUFBLEVBQ2IsS0FBSzgyQixNQUFBLENBQU83c0IsSUFBQSxJQUFRakssSUFBQSxDQUFLaUssSUFBQTtNQUM3QixLQUFLNnNCLE1BQUEsQ0FBTzUyQixLQUFBLEdBQVEsS0FBS0EsS0FBQTtJQUM3QjtJQUNBLE9BQU8sS0FBSzQyQixNQUFBO0VBQ2hCO0VBS0E5b0IsT0FBT3lvQixLQUFBLEVBQU87SUFDVixJQUFJQSxLQUFBLENBQU1lLGVBQUEsSUFBbUIsS0FBS1YsTUFBQSxDQUFPVSxlQUFBLEVBQ3JDbFYsZUFBQSxDQUFnQixJQUFJO0lBQ3hCLElBQUltVixTQUFBLEdBQVksS0FBS1gsTUFBQTtJQUNyQixLQUFLQSxNQUFBLEdBQVNMLEtBQUE7SUFDZCxJQUFJQSxLQUFBLENBQU1PLE9BQUEsRUFBUztNQUNmUCxLQUFBLENBQU1PLE9BQUEsQ0FBUXhhLE9BQUEsQ0FBUXlhLG1CQUFtQjtNQUN6QyxLQUFLRixhQUFBLEdBQWdCTixLQUFBLENBQU1PLE9BQUE7SUFDL0I7SUFDQSxLQUFLVSxnQkFBQSxDQUFpQmpCLEtBQUEsQ0FBTXYyQixLQUFBLEVBQU91M0IsU0FBUztFQUNoRDtFQU1BRSxTQUFTbEIsS0FBQSxFQUFPO0lBQ1osSUFBSWprQixPQUFBLEdBQVUsQ0FBQztJQUNmLFNBQVN2SSxJQUFBLElBQVEsS0FBSzZzQixNQUFBLEVBQ2xCdGtCLE9BQUEsQ0FBUXZJLElBQUEsSUFBUSxLQUFLNnNCLE1BQUEsQ0FBTzdzQixJQUFBO0lBQ2hDdUksT0FBQSxDQUFRdFMsS0FBQSxHQUFRLEtBQUtBLEtBQUE7SUFDckIsU0FBUytKLElBQUEsSUFBUXdzQixLQUFBLEVBQ2Jqa0IsT0FBQSxDQUFRdkksSUFBQSxJQUFRd3NCLEtBQUEsQ0FBTXhzQixJQUFBO0lBQzFCLEtBQUsrRCxNQUFBLENBQU93RSxPQUFPO0VBQ3ZCO0VBS0F0USxZQUFZaEMsS0FBQSxFQUFPO0lBQ2YsS0FBS3czQixnQkFBQSxDQUFpQngzQixLQUFBLEVBQU8sS0FBSzQyQixNQUFNO0VBQzVDO0VBQ0FZLGlCQUFpQngzQixLQUFBLEVBQU91M0IsU0FBQSxFQUFXO0lBQy9CLElBQUlyakMsRUFBQTtJQUNKLElBQUk0TCxJQUFBLEdBQU8sS0FBS0UsS0FBQTtNQUFPMDNCLE1BQUEsR0FBUztNQUFPQyxTQUFBLEdBQVk7SUFHbkQsSUFBSTMzQixLQUFBLENBQU11bUIsV0FBQSxJQUFlLEtBQUs1YSxTQUFBLEVBQVc7TUFDckN1YixnQkFBQSxDQUFpQixJQUFJO01BQ3JCeVEsU0FBQSxHQUFZO0lBQ2hCO0lBQ0EsS0FBSzMzQixLQUFBLEdBQVFBLEtBQUE7SUFDYixJQUFJNDNCLGNBQUEsR0FBaUI5M0IsSUFBQSxDQUFLZzNCLE9BQUEsSUFBVzkyQixLQUFBLENBQU04MkIsT0FBQSxJQUFXLEtBQUtGLE1BQUEsQ0FBT0UsT0FBQSxJQUFXUyxTQUFBLENBQVVULE9BQUE7SUFDdkYsSUFBSWMsY0FBQSxJQUFrQixLQUFLaEIsTUFBQSxDQUFPRSxPQUFBLElBQVdTLFNBQUEsQ0FBVVQsT0FBQSxJQUFXLEtBQUtGLE1BQUEsQ0FBTzlzQixTQUFBLElBQWF5dEIsU0FBQSxDQUFVenRCLFNBQUEsRUFBVztNQUM1RyxJQUFJQSxTQUFBLEdBQVlxdEIsY0FBQSxDQUFlLElBQUk7TUFDbkMsSUFBSVUsZ0JBQUEsQ0FBaUIvdEIsU0FBQSxFQUFXLEtBQUtBLFNBQVMsR0FBRztRQUM3QyxLQUFLQSxTQUFBLEdBQVlBLFNBQUE7UUFDakI0dEIsTUFBQSxHQUFTO01BQ2I7SUFDSjtJQUNBLElBQUlFLGNBQUEsSUFBa0JMLFNBQUEsQ0FBVUQsZUFBQSxJQUFtQixLQUFLVixNQUFBLENBQU9VLGVBQUEsRUFBaUI7TUFDNUVsVixlQUFBLENBQWdCLElBQUk7SUFDeEI7SUFDQSxLQUFLMU0sUUFBQSxHQUFXdWhCLFdBQUEsQ0FBWSxJQUFJO0lBQ2hDQyxtQkFBQSxDQUFvQixJQUFJO0lBQ3hCLElBQUloeUIsU0FBQSxHQUFZMnFCLGVBQUEsQ0FBZ0IsSUFBSTtNQUFHNXFCLFNBQUEsR0FBWW15QixjQUFBLENBQWUsSUFBSTtJQUN0RSxJQUFJVSxNQUFBLEdBQVNoNEIsSUFBQSxDQUFLZzNCLE9BQUEsSUFBVzkyQixLQUFBLENBQU04MkIsT0FBQSxJQUFXLENBQUNoM0IsSUFBQSxDQUFLdkksR0FBQSxDQUFJMFIsRUFBQSxDQUFHakosS0FBQSxDQUFNekksR0FBRyxJQUFJLFVBQ2xFeUksS0FBQSxDQUFNa3lCLGlCQUFBLEdBQW9CcHlCLElBQUEsQ0FBS295QixpQkFBQSxHQUFvQixpQkFBaUI7SUFDMUUsSUFBSTZGLFNBQUEsR0FBWUwsTUFBQSxJQUFVLENBQUMsS0FBS2g1QixPQUFBLENBQVFzRyxXQUFBLENBQVloRixLQUFBLENBQU16SSxHQUFBLEVBQUswTixTQUFBLEVBQVdDLFNBQVM7SUFDbkYsSUFBSTZ5QixTQUFBLElBQWEsQ0FBQy8zQixLQUFBLENBQU1tQyxTQUFBLENBQVU4RyxFQUFBLENBQUduSixJQUFBLENBQUtxQyxTQUFTLEdBQy9DdzFCLFNBQUEsR0FBWTtJQUNoQixJQUFJSyxZQUFBLEdBQWVGLE1BQUEsSUFBVSxjQUFjSCxTQUFBLElBQWEsS0FBS3ppQyxHQUFBLENBQUk2RCxLQUFBLENBQU1rL0IsY0FBQSxJQUFrQixRQUFRcDhCLGNBQUEsQ0FBZSxJQUFJO0lBQ3BILElBQUk4N0IsU0FBQSxFQUFXO01BQ1gsS0FBS3poQixXQUFBLENBQVkvTSxJQUFBLENBQUs7TUFNdEIsSUFBSSt1QixjQUFBLEdBQWlCSCxTQUFBLEtBQWNqZ0MsRUFBQSxJQUFNSyxNQUFBLEtBQVcsQ0FBQyxLQUFLd1QsU0FBQSxJQUN0RCxDQUFDN0wsSUFBQSxDQUFLcUMsU0FBQSxDQUFVbUosS0FBQSxJQUFTLENBQUN0TCxLQUFBLENBQU1tQyxTQUFBLENBQVVtSixLQUFBLElBQVM2c0IsdUJBQUEsQ0FBd0JyNEIsSUFBQSxDQUFLcUMsU0FBQSxFQUFXbkMsS0FBQSxDQUFNbUMsU0FBUztNQUM5RyxJQUFJNDFCLFNBQUEsRUFBVztRQUtYLElBQUlLLFlBQUEsR0FBZWpnQyxNQUFBLEdBQVUsS0FBSzRXLFdBQUEsR0FBYyxLQUFLMUwsaUJBQUEsQ0FBa0IsRUFBRTVOLFNBQUEsR0FBYTtRQUN0RixJQUFJLEtBQUtrVyxTQUFBLEVBQ0wsS0FBSzRCLEtBQUEsQ0FBTUMsZUFBQSxHQUFrQjRaLG1CQUFBLENBQW9CLElBQUk7UUFDekQsSUFBSXNRLE1BQUEsSUFBVSxDQUFDLEtBQUtoNUIsT0FBQSxDQUFRb1AsTUFBQSxDQUFPOU4sS0FBQSxDQUFNekksR0FBQSxFQUFLME4sU0FBQSxFQUFXQyxTQUFBLEVBQVcsSUFBSSxHQUFHO1VBQ3ZFLEtBQUt4RyxPQUFBLENBQVF1UCxlQUFBLENBQWdCaEosU0FBUztVQUN0QyxLQUFLdkcsT0FBQSxDQUFRNEcsT0FBQSxDQUFRO1VBQ3JCLEtBQUs1RyxPQUFBLEdBQVVpUSxXQUFBLENBQVkzTyxLQUFBLENBQU16SSxHQUFBLEVBQUswTixTQUFBLEVBQVdDLFNBQUEsRUFBVyxLQUFLaFEsR0FBQSxFQUFLLElBQUk7UUFDOUU7UUFDQSxJQUFJa2pDLFlBQUEsSUFBZ0IsQ0FBQyxLQUFLcnBCLFdBQUEsRUFDdEJtcEIsY0FBQSxHQUFpQjtNQUN6QjtNQUtBLElBQUlBLGNBQUEsSUFDQSxFQUFFLEtBQUszcUIsS0FBQSxDQUFNd0ksU0FBQSxJQUFhLEtBQUtHLFdBQUEsQ0FBWUMsZ0JBQUEsQ0FBaUJsTixFQUFBLENBQUcsS0FBSzVGLGlCQUFBLENBQWtCLENBQUMsS0FDbkZ3VSxrQkFBQSxDQUFtQixJQUFJLElBQUk7UUFDL0JoQyxjQUFBLENBQWUsTUFBTXFpQixjQUFjO01BQ3ZDLE9BQ0s7UUFDRHBpQixpQkFBQSxDQUFrQixNQUFNOVYsS0FBQSxDQUFNbUMsU0FBUztRQUN2QyxLQUFLK1QsV0FBQSxDQUFZRyxlQUFBLENBQWdCO01BQ3JDO01BQ0EsS0FBS0gsV0FBQSxDQUFZblQsS0FBQSxDQUFNO0lBQzNCO0lBQ0EsS0FBS3MwQixpQkFBQSxDQUFrQnYzQixJQUFJO0lBQzNCLE1BQU01TCxFQUFBLEdBQUssS0FBSzAxQixRQUFBLE1BQWMsUUFBUTExQixFQUFBLEtBQU8sU0FBUyxTQUFTQSxFQUFBLENBQUczQixJQUFBLEtBQVMsQ0FBQ3VOLElBQUEsQ0FBS3ZJLEdBQUEsQ0FBSTBSLEVBQUEsQ0FBR2pKLEtBQUEsQ0FBTXpJLEdBQUcsR0FDN0YsS0FBSzhnQyxpQkFBQSxDQUFrQixLQUFLek8sUUFBQSxFQUFVOXBCLElBQUk7SUFDOUMsSUFBSWc0QixNQUFBLElBQVUsU0FBUztNQUNuQixLQUFLNWlDLEdBQUEsQ0FBSXFHLFNBQUEsR0FBWTtJQUN6QixXQUNTdThCLE1BQUEsSUFBVSxnQkFBZ0I7TUFDL0IsS0FBSzVGLGlCQUFBLENBQWtCO0lBQzNCLFdBQ1M4RixZQUFBLEVBQWM7TUFDbkJ2N0IsY0FBQSxDQUFldTdCLFlBQVk7SUFDL0I7RUFDSjtFQUlBOUYsa0JBQUEsRUFBb0I7SUFDaEIsSUFBSXozQixRQUFBLEdBQVcsS0FBSzRJLGlCQUFBLENBQWtCLEVBQUU1TixTQUFBO0lBQ3hDLElBQUksQ0FBQ2dGLFFBQUEsSUFBWSxDQUFDLEtBQUt2RixHQUFBLENBQUlrSCxRQUFBLENBQVMzQixRQUFBLENBQVM1SCxRQUFBLElBQVksSUFBSTRILFFBQUEsR0FBV0EsUUFBQSxDQUFTL0gsVUFBVSxHQUFHLFVBQ3JGLEtBQUtpSSxRQUFBLENBQVMsMkJBQTJCa0gsQ0FBQSxJQUFLQSxDQUFBLENBQUUsSUFBSSxDQUFDLEdBQUcsVUFDeEQsS0FBSzdCLEtBQUEsQ0FBTW1DLFNBQUEsWUFBcUJqUSx3QkFBQSxDQUFBOGlCLGFBQUEsRUFBZTtNQUNwRCxJQUFJelUsTUFBQSxHQUFTLEtBQUs3QixPQUFBLENBQVFnRixXQUFBLENBQVksS0FBSzFELEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVWxQLElBQUk7TUFDL0QsSUFBSXNOLE1BQUEsQ0FBTzFOLFFBQUEsSUFBWSxHQUNuQjBILGtCQUFBLENBQW1CLE1BQU1nRyxNQUFBLENBQU9yRyxxQkFBQSxDQUFzQixHQUFHTyxRQUFRO0lBQ3pFLE9BQ0s7TUFDREYsa0JBQUEsQ0FBbUIsTUFBTSxLQUFLdUcsV0FBQSxDQUFZLEtBQUtkLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVWdGLElBQUEsRUFBTSxDQUFDLEdBQUcxTSxRQUFRO0lBQ3JGO0VBQ0o7RUFDQTY5QixtQkFBQSxFQUFxQjtJQUNqQixJQUFJOTlCLElBQUE7SUFDSixPQUFPQSxJQUFBLEdBQU8sS0FBS204QixXQUFBLENBQVlsbEIsR0FBQSxDQUFJLEdBQy9CLElBQUlqWCxJQUFBLENBQUs4SyxPQUFBLEVBQ0w5SyxJQUFBLENBQUs4SyxPQUFBLENBQVE7RUFDekI7RUFDQSt4QixrQkFBa0JrQixTQUFBLEVBQVc7SUFDekIsSUFBSSxDQUFDQSxTQUFBLElBQWFBLFNBQUEsQ0FBVXpCLE9BQUEsSUFBVyxLQUFLOTJCLEtBQUEsQ0FBTTgyQixPQUFBLElBQVcsS0FBS0QsYUFBQSxJQUFpQixLQUFLSCxpQkFBQSxFQUFtQjtNQUN2RyxLQUFLQSxpQkFBQSxHQUFvQixLQUFLRyxhQUFBO01BQzlCLEtBQUt5QixrQkFBQSxDQUFtQjtNQUN4QixTQUFTejdCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBS2c2QixhQUFBLENBQWNyakMsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO1FBQ2hELElBQUkyN0IsTUFBQSxHQUFTLEtBQUszQixhQUFBLENBQWNoNkIsQ0FBQTtRQUNoQyxJQUFJMjdCLE1BQUEsQ0FBTzl2QixJQUFBLENBQUtsTyxJQUFBLEVBQ1osS0FBS204QixXQUFBLENBQVluNkIsSUFBQSxDQUFLZzhCLE1BQUEsQ0FBTzl2QixJQUFBLENBQUtsTyxJQUFBLENBQUssSUFBSSxDQUFDO01BQ3BEO01BQ0EsU0FBU3FDLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBS21ELEtBQUEsQ0FBTTgyQixPQUFBLENBQVF0akMsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO1FBQ2hELElBQUkyN0IsTUFBQSxHQUFTLEtBQUt4NEIsS0FBQSxDQUFNODJCLE9BQUEsQ0FBUWo2QixDQUFBO1FBQ2hDLElBQUkyN0IsTUFBQSxDQUFPOXZCLElBQUEsQ0FBS2xPLElBQUEsRUFDWixLQUFLbThCLFdBQUEsQ0FBWW42QixJQUFBLENBQUtnOEIsTUFBQSxDQUFPOXZCLElBQUEsQ0FBS2xPLElBQUEsQ0FBSyxJQUFJLENBQUM7TUFDcEQ7SUFDSixPQUNLO01BQ0QsU0FBU3FDLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBSzg1QixXQUFBLENBQVluakMsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO1FBQzlDLElBQUk0N0IsVUFBQSxHQUFhLEtBQUs5QixXQUFBLENBQVk5NUIsQ0FBQTtRQUNsQyxJQUFJNDdCLFVBQUEsQ0FBVzNxQixNQUFBLEVBQ1gycUIsVUFBQSxDQUFXM3FCLE1BQUEsQ0FBTyxNQUFNeXFCLFNBQVM7TUFDekM7SUFDSjtFQUNKO0VBQ0FGLGtCQUFrQnpPLFFBQUEsRUFBVTlwQixJQUFBLEVBQU07SUFDOUIsSUFBSW9DLEdBQUEsR0FBTTBuQixRQUFBLENBQVNyM0IsSUFBQTtNQUFNbWYsS0FBQSxHQUFRO0lBQ2pDLElBQUksS0FBSzFSLEtBQUEsQ0FBTXpJLEdBQUEsQ0FBSWl1QixNQUFBLENBQU90akIsR0FBQSxDQUFJalAsSUFBSSxLQUFLaVAsR0FBQSxDQUFJM1AsSUFBQSxFQUFNO01BQzdDbWYsS0FBQSxHQUFReFAsR0FBQSxDQUFJalAsSUFBQTtJQUNoQixPQUNLO01BQ0QsSUFBSXlsQyxRQUFBLEdBQVd4MkIsR0FBQSxDQUFJalAsSUFBQSxJQUFRLEtBQUsrTSxLQUFBLENBQU16SSxHQUFBLENBQUkwSSxPQUFBLENBQVFDLElBQUEsR0FBT0osSUFBQSxDQUFLdkksR0FBQSxDQUFJMEksT0FBQSxDQUFRQyxJQUFBO01BQzFFLElBQUl1dUIsS0FBQSxHQUFRaUssUUFBQSxHQUFXLEtBQUssS0FBSzE0QixLQUFBLENBQU16SSxHQUFBLENBQUlpdUIsTUFBQSxDQUFPa1QsUUFBUTtNQUMxRCxJQUFJakssS0FBQSxJQUFTdnNCLEdBQUEsQ0FBSTNQLElBQUEsRUFDYm1mLEtBQUEsR0FBUWduQixRQUFBO0lBQ2hCO0lBQ0EsS0FBSzlPLFFBQUEsR0FBVyxJQUFJVCxRQUFBLENBQVNTLFFBQUEsQ0FBU3ZmLEtBQUEsRUFBT3VmLFFBQUEsQ0FBUzlELElBQUEsRUFBTXBVLEtBQUEsR0FBUSxJQUFJLFNBQVl4Zix3QkFBQSxDQUFBOGlCLGFBQUEsQ0FBY3JMLE1BQUEsQ0FBTyxLQUFLM0osS0FBQSxDQUFNekksR0FBQSxFQUFLbWEsS0FBSyxDQUFDO0VBQ25JO0VBQ0EvVyxTQUFTdXBCLFFBQUEsRUFBVXJpQixDQUFBLEVBQUc7SUFDbEIsSUFBSStPLElBQUEsR0FBTyxLQUFLZ21CLE1BQUEsSUFBVSxLQUFLQSxNQUFBLENBQU8xUyxRQUFBO01BQVdwcUIsS0FBQTtJQUNqRCxJQUFJOFcsSUFBQSxJQUFRLFNBQVM5VyxLQUFBLEdBQVErSCxDQUFBLEdBQUlBLENBQUEsQ0FBRStPLElBQUksSUFBSUEsSUFBQSxHQUN2QyxPQUFPOVcsS0FBQTtJQUNYLFNBQVMrQyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUtnNkIsYUFBQSxDQUFjcmpDLE1BQUEsRUFBUXFKLENBQUEsSUFBSztNQUNoRCxJQUFJODdCLEtBQUEsR0FBTyxLQUFLOUIsYUFBQSxDQUFjaDZCLENBQUEsRUFBRzA1QixLQUFBLENBQU1yUyxRQUFBO01BQ3ZDLElBQUl5VSxLQUFBLElBQVEsU0FBUzcrQixLQUFBLEdBQVErSCxDQUFBLEdBQUlBLENBQUEsQ0FBRTgyQixLQUFJLElBQUlBLEtBQUEsR0FDdkMsT0FBTzcrQixLQUFBO0lBQ2Y7SUFDQSxJQUFJZzlCLE9BQUEsR0FBVSxLQUFLOTJCLEtBQUEsQ0FBTTgyQixPQUFBO0lBQ3pCLElBQUlBLE9BQUEsRUFDQSxTQUFTajZCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlpNkIsT0FBQSxDQUFRdGpDLE1BQUEsRUFBUXFKLENBQUEsSUFBSztNQUNyQyxJQUFJODdCLEtBQUEsR0FBTzdCLE9BQUEsQ0FBUWo2QixDQUFBLEVBQUcwNUIsS0FBQSxDQUFNclMsUUFBQTtNQUM1QixJQUFJeVUsS0FBQSxJQUFRLFNBQVM3K0IsS0FBQSxHQUFRK0gsQ0FBQSxHQUFJQSxDQUFBLENBQUU4MkIsS0FBSSxJQUFJQSxLQUFBLEdBQ3ZDLE9BQU83K0IsS0FBQTtJQUNmO0VBQ1I7RUFJQTZiLFNBQUEsRUFBVztJQUlQLElBQUk3ZCxFQUFBLEVBQUk7TUFHSixJQUFJdkYsSUFBQSxHQUFPLEtBQUsySixJQUFBLENBQUszRixhQUFBO01BQ3JCLElBQUloRSxJQUFBLElBQVEsS0FBSzJDLEdBQUEsRUFDYixPQUFPO01BQ1gsSUFBSSxDQUFDM0MsSUFBQSxJQUFRLENBQUMsS0FBSzJDLEdBQUEsQ0FBSWtILFFBQUEsQ0FBUzdKLElBQUksR0FDaEMsT0FBTztNQUNYLE9BQU9BLElBQUEsSUFBUSxLQUFLMkMsR0FBQSxJQUFPM0MsSUFBQSxJQUFRLEtBQUsyQyxHQUFBLENBQUlrSCxRQUFBLENBQVM3SixJQUFJLEdBQUc7UUFDeEQsSUFBSUEsSUFBQSxDQUFLZ0MsZUFBQSxJQUFtQixTQUN4QixPQUFPO1FBQ1hoQyxJQUFBLEdBQU9BLElBQUEsQ0FBS3FtQyxhQUFBO01BQ2hCO01BQ0EsT0FBTztJQUNYO0lBQ0EsT0FBTyxLQUFLMThCLElBQUEsQ0FBSzNGLGFBQUEsSUFBaUIsS0FBS3JCLEdBQUE7RUFDM0M7RUFJQStILE1BQUEsRUFBUTtJQUNKLEtBQUtpWixXQUFBLENBQVkvTSxJQUFBLENBQUs7SUFDdEIsSUFBSSxLQUFLdU0sUUFBQSxFQUNMM1ksa0JBQUEsQ0FBbUIsS0FBSzdILEdBQUc7SUFDL0IyZ0IsY0FBQSxDQUFlLElBQUk7SUFDbkIsS0FBS0ssV0FBQSxDQUFZblQsS0FBQSxDQUFNO0VBQzNCO0VBT0EsSUFBSTdHLEtBQUEsRUFBTztJQUNQLElBQUkyOEIsTUFBQSxHQUFTLEtBQUtyQyxLQUFBO0lBQ2xCLElBQUlxQyxNQUFBLElBQVUsTUFDVixTQUFTaHpCLE1BQUEsR0FBUyxLQUFLM1EsR0FBQSxDQUFJeEMsVUFBQSxFQUFZbVQsTUFBQSxFQUFRQSxNQUFBLEdBQVNBLE1BQUEsQ0FBT25ULFVBQUEsRUFBWTtNQUN2RSxJQUFJbVQsTUFBQSxDQUFPaFQsUUFBQSxJQUFZLEtBQU1nVCxNQUFBLENBQU9oVCxRQUFBLElBQVksTUFBTWdULE1BQUEsQ0FBTy9TLElBQUEsRUFBTztRQUNoRSxJQUFJLENBQUMrUyxNQUFBLENBQU8wQixZQUFBLEVBQ1JrSSxNQUFBLENBQU9xcEIsY0FBQSxDQUFlanpCLE1BQU0sRUFBRTBCLFlBQUEsR0FBZSxNQUFNMUIsTUFBQSxDQUFPaEwsYUFBQSxDQUFjME0sWUFBQSxDQUFhO1FBQ3pGLE9BQU8sS0FBS2l2QixLQUFBLEdBQVEzd0IsTUFBQTtNQUN4QjtJQUNKO0lBQ0osT0FBT2d6QixNQUFBLElBQVV6bEMsUUFBQTtFQUNyQjtFQUtBMmxDLFdBQUEsRUFBYTtJQUNULEtBQUt2QyxLQUFBLEdBQVE7RUFDakI7RUFVQS8yQixZQUFZcEMsTUFBQSxFQUFRO0lBQ2hCLE9BQU9vQyxXQUFBLENBQVksTUFBTXBDLE1BQU07RUFDbkM7RUFTQXlELFlBQVlqSyxHQUFBLEVBQUtrRCxJQUFBLEdBQU8sR0FBRztJQUN2QixPQUFPK0csV0FBQSxDQUFZLE1BQU1qSyxHQUFBLEVBQUtrRCxJQUFJO0VBQ3RDO0VBV0E4NEIsU0FBU2g4QixHQUFBLEVBQUtrRCxJQUFBLEdBQU8sR0FBRztJQUNwQixPQUFPLEtBQUsyRSxPQUFBLENBQVFzQyxVQUFBLENBQVduSyxHQUFBLEVBQUtrRCxJQUFJO0VBQzVDO0VBV0FpTSxRQUFRblAsR0FBQSxFQUFLO0lBQ1QsSUFBSTFCLElBQUEsR0FBTyxLQUFLdUosT0FBQSxDQUFRd0gsTUFBQSxDQUFPclAsR0FBRztJQUNsQyxPQUFPMUIsSUFBQSxHQUFPQSxJQUFBLENBQUs2USxPQUFBLEdBQVU7RUFDakM7RUFXQWd6QixTQUFTem1DLElBQUEsRUFBTXNDLE1BQUEsRUFBUTRKLElBQUEsR0FBTyxJQUFJO0lBQzlCLElBQUk1SCxHQUFBLEdBQU0sS0FBSzZILE9BQUEsQ0FBUUMsVUFBQSxDQUFXcE0sSUFBQSxFQUFNc0MsTUFBQSxFQUFRNEosSUFBSTtJQUNwRCxJQUFJNUgsR0FBQSxJQUFPLE1BQ1AsTUFBTSxJQUFJbVEsVUFBQSxDQUFXLG9DQUFvQztJQUM3RCxPQUFPblEsR0FBQTtFQUNYO0VBU0FzTixlQUFlbFEsR0FBQSxFQUFLK0wsS0FBQSxFQUFPO0lBQ3ZCLE9BQU9tRSxjQUFBLENBQWUsTUFBTW5FLEtBQUEsSUFBUyxLQUFLQSxLQUFBLEVBQU8vTCxHQUFHO0VBQ3hEO0VBTUFnbEMsVUFBVW5kLElBQUEsRUFBTTlsQixLQUFBLEVBQU87SUFDbkIsT0FBTzB5QixPQUFBLENBQVEsTUFBTSxJQUFJNU0sSUFBQSxFQUFNLE9BQU85bEIsS0FBQSxJQUFTLElBQUlrakMsY0FBQSxDQUFlLE9BQU8sQ0FBQztFQUM5RTtFQUlBQyxVQUFVNXdCLElBQUEsRUFBTXZTLEtBQUEsRUFBTztJQUNuQixPQUFPMHlCLE9BQUEsQ0FBUSxNQUFNbmdCLElBQUEsRUFBTSxNQUFNLE1BQU12UyxLQUFBLElBQVMsSUFBSWtqQyxjQUFBLENBQWUsT0FBTyxDQUFDO0VBQy9FO0VBU0FwZSxzQkFBc0J6USxLQUFBLEVBQU87SUFDekIsT0FBT3lRLHFCQUFBLENBQXNCLE1BQU16USxLQUFLO0VBQzVDO0VBS0EvRSxRQUFBLEVBQVU7SUFDTixJQUFJLENBQUMsS0FBSzVHLE9BQUEsRUFDTjtJQUNKOGpCLFlBQUEsQ0FBYSxJQUFJO0lBQ2pCLEtBQUs4VixrQkFBQSxDQUFtQjtJQUN4QixJQUFJLEtBQUs3QixPQUFBLEVBQVM7TUFDZCxLQUFLLzNCLE9BQUEsQ0FBUW9QLE1BQUEsQ0FBTyxLQUFLOU4sS0FBQSxDQUFNekksR0FBQSxFQUFLLEVBQUMsRUFBR3M0QixlQUFBLENBQWdCLElBQUksR0FBRyxJQUFJO01BQ25FLEtBQUszNkIsR0FBQSxDQUFJK04sV0FBQSxHQUFjO0lBQzNCLFdBQ1MsS0FBSy9OLEdBQUEsQ0FBSXhDLFVBQUEsRUFBWTtNQUMxQixLQUFLd0MsR0FBQSxDQUFJeEMsVUFBQSxDQUFXa2IsV0FBQSxDQUFZLEtBQUsxWSxHQUFHO0lBQzVDO0lBQ0EsS0FBS3dKLE9BQUEsQ0FBUTRHLE9BQUEsQ0FBUTtJQUNyQixLQUFLNUcsT0FBQSxHQUFVO0lBQ2ZoTCxnQkFBQSxDQUFpQjtFQUNyQjtFQU1BLElBQUkwbEMsWUFBQSxFQUFjO0lBQ2QsT0FBTyxLQUFLMTZCLE9BQUEsSUFBVztFQUMzQjtFQUlBb2tCLGNBQWM5c0IsS0FBQSxFQUFPO0lBQ2pCLE9BQU84c0IsYUFBQSxDQUFjLE1BQU05c0IsS0FBSztFQUNwQztFQUlBcU4sa0JBQUEsRUFBb0I7SUFDaEIsSUFBSW5CLEdBQUEsR0FBTSxLQUFLWSxZQUFBLENBQWE7SUFDNUIsSUFBSSxDQUFDWixHQUFBLEVBQ0QsT0FBTztNQUFFek0sU0FBQSxFQUFXO01BQU1DLFdBQUEsRUFBYTtNQUFHQyxVQUFBLEVBQVk7TUFBTUMsWUFBQSxFQUFjO0lBQUU7SUFDaEYsT0FBT3lDLE1BQUEsSUFBVSxLQUFLNkQsSUFBQSxDQUFLckosUUFBQSxLQUFhLE1BQ3BDdUQsaUJBQUEsQ0FBa0IsS0FBS2xCLEdBQUEsQ0FBSTJGLGFBQWEsS0FBSyxLQUFLM0YsR0FBQSxJQUFPNDlCLDBCQUFBLENBQTJCLE1BQU01d0IsR0FBRyxLQUFLQSxHQUFBO0VBQzFHO0VBSUFZLGFBQUEsRUFBZTtJQUNYLE9BQU8sS0FBSzVHLElBQUEsQ0FBS3FMLFlBQUEsQ0FBYTtFQUNsQztBQUNKO0FBQ0EzVixVQUFBLENBQVc4TyxTQUFBLENBQVV5WCxRQUFBLEdBQVcsVUFBVUMsRUFBQSxFQUFJO0VBQzFDLElBQUlpaEIsbUJBQUEsR0FBc0IsS0FBS3pDLE1BQUEsQ0FBT3lDLG1CQUFBO0VBQ3RDLElBQUlBLG1CQUFBLEVBQ0FBLG1CQUFBLENBQW9CejRCLElBQUEsQ0FBSyxNQUFNd1gsRUFBRSxPQUVqQyxLQUFLcFcsV0FBQSxDQUFZLEtBQUtoQyxLQUFBLENBQU1rWSxLQUFBLENBQU1FLEVBQUUsQ0FBQztBQUM3QztBQUNBLFNBQVNnZixlQUFlNThCLElBQUEsRUFBTTtFQUMxQixJQUFJMFAsS0FBQSxHQUFRLGVBQUF1RixNQUFBLENBQU85RixNQUFBLENBQU8sSUFBSTtFQUM5Qk8sS0FBQSxDQUFNMkYsS0FBQSxHQUFRO0VBQ2QzRixLQUFBLENBQU1vdkIsZUFBQSxHQUFrQi9WLE1BQUEsQ0FBTy9vQixJQUFBLENBQUtrYixRQUFRO0VBQzVDbGIsSUFBQSxDQUFLRyxRQUFBLENBQVMsY0FBY2IsS0FBQSxJQUFTO0lBQ2pDLElBQUksT0FBT0EsS0FBQSxJQUFTLFlBQ2hCQSxLQUFBLEdBQVFBLEtBQUEsQ0FBTVUsSUFBQSxDQUFLd0YsS0FBSztJQUM1QixJQUFJbEcsS0FBQSxFQUNBLFNBQVN5L0IsSUFBQSxJQUFRei9CLEtBQUEsRUFBTztNQUNwQixJQUFJeS9CLElBQUEsSUFBUSxTQUNScnZCLEtBQUEsQ0FBTTJGLEtBQUEsSUFBUyxNQUFNL1YsS0FBQSxDQUFNeS9CLElBQUEsV0FDdEJBLElBQUEsSUFBUSxTQUNicnZCLEtBQUEsQ0FBTW5SLEtBQUEsSUFBU21SLEtBQUEsQ0FBTW5SLEtBQUEsR0FBUW1SLEtBQUEsQ0FBTW5SLEtBQUEsR0FBUSxNQUFNLE1BQU1lLEtBQUEsQ0FBTXkvQixJQUFBLFdBQ3hELENBQUNydkIsS0FBQSxDQUFNcXZCLElBQUEsS0FBU0EsSUFBQSxJQUFRLHFCQUFxQkEsSUFBQSxJQUFRLFlBQzFEcnZCLEtBQUEsQ0FBTXF2QixJQUFBLElBQVFoVyxNQUFBLENBQU96cEIsS0FBQSxDQUFNeS9CLElBQUEsQ0FBSztJQUN4QztFQUNSLENBQUM7RUFDRCxJQUFJLENBQUNydkIsS0FBQSxDQUFNc3ZCLFNBQUEsRUFDUHR2QixLQUFBLENBQU1zdkIsU0FBQSxHQUFZO0VBQ3RCLE9BQU8sQ0FBQzluQyxVQUFBLENBQVdhLElBQUEsQ0FBSyxHQUFHaUksSUFBQSxDQUFLd0YsS0FBQSxDQUFNekksR0FBQSxDQUFJMEksT0FBQSxDQUFRQyxJQUFBLEVBQU1nSyxLQUFLLENBQUM7QUFDbEU7QUFDQSxTQUFTZ3RCLG9CQUFvQjE4QixJQUFBLEVBQU07RUFDL0IsSUFBSUEsSUFBQSxDQUFLa3NCLFVBQUEsRUFBWTtJQUNqQixJQUFJeHhCLEdBQUEsR0FBTTlCLFFBQUEsQ0FBU3lWLGFBQUEsQ0FBYyxLQUFLO0lBQ3RDM1QsR0FBQSxDQUFJMmQsU0FBQSxHQUFZO0lBQ2hCM2QsR0FBQSxDQUFJbWIsWUFBQSxDQUFhLG9CQUFvQixNQUFNO0lBQzNDbmIsR0FBQSxDQUFJbWIsWUFBQSxDQUFhLE9BQU8sRUFBRTtJQUMxQjdWLElBQUEsQ0FBSytiLGFBQUEsR0FBZ0I7TUFBRXJoQixHQUFBO01BQUtnYixJQUFBLEVBQU14ZSxVQUFBLENBQVdtVCxNQUFBLENBQU9ySyxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVsUCxJQUFBLEVBQU1pQyxHQUFBLEVBQUs7UUFBRXlULEdBQUEsRUFBSztRQUFNd0QsS0FBQSxFQUFPM1IsSUFBQSxDQUFLa3NCO01BQVcsQ0FBQztJQUFFO0VBQy9ILE9BQ0s7SUFDRGxzQixJQUFBLENBQUsrYixhQUFBLEdBQWdCO0VBQ3pCO0FBQ0o7QUFDQSxTQUFTMGdCLFlBQVl6OEIsSUFBQSxFQUFNO0VBQ3ZCLE9BQU8sQ0FBQ0EsSUFBQSxDQUFLRyxRQUFBLENBQVMsWUFBWWIsS0FBQSxJQUFTQSxLQUFBLENBQU1VLElBQUEsQ0FBS3dGLEtBQUssTUFBTSxLQUFLO0FBQzFFO0FBQ0EsU0FBU200Qix3QkFBd0JzQixJQUFBLEVBQU05UyxJQUFBLEVBQU07RUFDekMsSUFBSWxqQixLQUFBLEdBQVExTSxJQUFBLENBQUtDLEdBQUEsQ0FBSXlpQyxJQUFBLENBQUtsa0IsT0FBQSxDQUFRc1MsV0FBQSxDQUFZNFIsSUFBQSxDQUFLdHlCLElBQUksR0FBR3dmLElBQUEsQ0FBS3BSLE9BQUEsQ0FBUXNTLFdBQUEsQ0FBWWxCLElBQUEsQ0FBS3hmLElBQUksQ0FBQztFQUM3RixPQUFPc3lCLElBQUEsQ0FBS2xrQixPQUFBLENBQVF4UyxLQUFBLENBQU1VLEtBQUssS0FBS2tqQixJQUFBLENBQUtwUixPQUFBLENBQVF4UyxLQUFBLENBQU1VLEtBQUs7QUFDaEU7QUFDQSxTQUFTMHpCLGVBQWUzOEIsSUFBQSxFQUFNO0VBQzFCLElBQUlxSixNQUFBLEdBQVMsZUFBQTRMLE1BQUEsQ0FBTzlGLE1BQUEsQ0FBTyxJQUFJO0VBQy9CLFNBQVNYLElBQUkwd0IsR0FBQSxFQUFLO0lBQ2QsU0FBUzlvQixJQUFBLElBQVE4b0IsR0FBQSxFQUNiLElBQUksQ0FBQ2pxQixNQUFBLENBQU8vTyxTQUFBLENBQVVpNUIsY0FBQSxDQUFlLzRCLElBQUEsQ0FBS2lELE1BQUEsRUFBUStNLElBQUksR0FDbEQvTSxNQUFBLENBQU8rTSxJQUFBLElBQVE4b0IsR0FBQSxDQUFJOW9CLElBQUE7RUFDL0I7RUFDQXBXLElBQUEsQ0FBS0csUUFBQSxDQUFTLGFBQWFxTyxHQUFHO0VBQzlCeE8sSUFBQSxDQUFLRyxRQUFBLENBQVMsYUFBYXFPLEdBQUc7RUFDOUIsT0FBT25GLE1BQUE7QUFDWDtBQUNBLFNBQVNnMEIsaUJBQWlCN21CLENBQUEsRUFBR0MsQ0FBQSxFQUFHO0VBQzVCLElBQUkyb0IsRUFBQSxHQUFLO0lBQUdDLEVBQUEsR0FBSztFQUNqQixTQUFTanBCLElBQUEsSUFBUUksQ0FBQSxFQUFHO0lBQ2hCLElBQUlBLENBQUEsQ0FBRUosSUFBQSxLQUFTSyxDQUFBLENBQUVMLElBQUEsR0FDYixPQUFPO0lBQ1hncEIsRUFBQTtFQUNKO0VBQ0EsU0FBUzNpQyxDQUFBLElBQUtnYSxDQUFBLEVBQ1Y0b0IsRUFBQTtFQUNKLE9BQU9ELEVBQUEsSUFBTUMsRUFBQTtBQUNqQjtBQUNBLFNBQVM5QyxvQkFBb0J5QixNQUFBLEVBQVE7RUFDakMsSUFBSUEsTUFBQSxDQUFPOXZCLElBQUEsQ0FBSzFJLEtBQUEsSUFBU3c0QixNQUFBLENBQU85dkIsSUFBQSxDQUFLb3hCLGlCQUFBLElBQXFCdEIsTUFBQSxDQUFPOXZCLElBQUEsQ0FBS3F4QixpQkFBQSxFQUNsRSxNQUFNLElBQUkveUIsVUFBQSxDQUFXLHFFQUFxRTtBQUNsRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvcnZkL291dCJ9