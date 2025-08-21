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

// .beyond/uimport/temp/prosemirror-view.1.40.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLXZpZXcuMS40MC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Byb3NlbWlycm9yLXZpZXcvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9zZW1pcnJvcl92aWV3XzFfNDBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJEZWNvcmF0aW9uIiwiRGVjb3JhdGlvblNldCIsIkVkaXRvclZpZXciLCJfX2VuZENvbXBvc2l0aW9uIiwiX19wYXJzZUZyb21DbGlwYm9hcmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3Byb3NlbWlycm9yX3N0YXRlIiwicmVxdWlyZSIsImltcG9ydF9wcm9zZW1pcnJvcl9tb2RlbCIsImltcG9ydF9wcm9zZW1pcnJvcl90cmFuc2Zvcm0iLCJkb21JbmRleCIsIm5vZGUiLCJpbmRleCIsInByZXZpb3VzU2libGluZyIsInBhcmVudE5vZGUiLCJwYXJlbnQiLCJhc3NpZ25lZFNsb3QiLCJub2RlVHlwZSIsImhvc3QiLCJyZXVzZWRSYW5nZSIsInRleHRSYW5nZSIsImZyb20iLCJ0byIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNldEVuZCIsIm5vZGVWYWx1ZSIsImxlbmd0aCIsInNldFN0YXJ0IiwiY2xlYXJSZXVzZWRSYW5nZSIsImlzRXF1aXZhbGVudFBvc2l0aW9uIiwib2ZmIiwidGFyZ2V0Tm9kZSIsInRhcmdldE9mZiIsInNjYW5Gb3IiLCJhdG9tRWxlbWVudHMiLCJkaXIiLCJfYSIsIm5vZGVTaXplIiwiaGFzQmxvY2tEZXNjIiwidGVzdCIsIm5vZGVOYW1lIiwiY29udGVudEVkaXRhYmxlIiwiY2hpbGQiLCJjaGlsZE5vZGVzIiwicG1WaWV3RGVzYyIsImlnbm9yZUZvclNlbGVjdGlvbiIsInRleHROb2RlQmVmb3JlJDEiLCJvZmZzZXQiLCJ0ZXh0Tm9kZUFmdGVyJDEiLCJpc09uRWRnZSIsImF0U3RhcnQiLCJhdEVuZCIsImRvbSIsImRlc2MiLCJjdXIiLCJpc0Jsb2NrIiwiY29udGVudERPTSIsInNlbGVjdGlvbkNvbGxhcHNlZCIsImRvbVNlbCIsImZvY3VzTm9kZSIsImZvY3VzT2Zmc2V0IiwiYW5jaG9yTm9kZSIsImFuY2hvck9mZnNldCIsImtleUV2ZW50Iiwia2V5Q29kZSIsImtleSIsImV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJjb2RlIiwiZGVlcEFjdGl2ZUVsZW1lbnQiLCJkb2MyIiwiZWx0IiwiYWN0aXZlRWxlbWVudCIsInNoYWRvd1Jvb3QiLCJjYXJldEZyb21Qb2ludCIsIngiLCJ5IiwiY2FyZXRQb3NpdGlvbkZyb21Qb2ludCIsInBvcyIsIm9mZnNldE5vZGUiLCJNYXRoIiwibWluIiwiXyIsImNhcmV0UmFuZ2VGcm9tUG9pbnQiLCJzdGFydENvbnRhaW5lciIsInN0YXJ0T2Zmc2V0IiwibmF2IiwibmF2aWdhdG9yIiwiZG9jIiwiYWdlbnQiLCJ1c2VyQWdlbnQiLCJpZV9lZGdlIiwiZXhlYyIsImllX3VwdG8xMCIsImllXzExdXAiLCJpZSIsImllX3ZlcnNpb24iLCJkb2N1bWVudE1vZGUiLCJnZWNrbyIsIl9jaHJvbWUiLCJjaHJvbWUiLCJjaHJvbWVfdmVyc2lvbiIsInNhZmFyaSIsInZlbmRvciIsImlvcyIsIm1heFRvdWNoUG9pbnRzIiwibWFjIiwicGxhdGZvcm0iLCJ3aW5kb3dzIiwiYW5kcm9pZCIsIndlYmtpdCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwid2Via2l0X3ZlcnNpb24iLCJ3aW5kb3dSZWN0IiwidnAiLCJkZWZhdWx0VmlldyIsInZpc3VhbFZpZXdwb3J0IiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJ0b3AiLCJib3R0b20iLCJoZWlnaHQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldFNpZGUiLCJ2YWx1ZSIsInNpZGUiLCJjbGllbnRSZWN0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjYWxlWCIsIm9mZnNldFdpZHRoIiwic2NhbGVZIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsUmVjdEludG9WaWV3IiwidmlldyIsInN0YXJ0RE9NIiwic2Nyb2xsVGhyZXNob2xkIiwic29tZVByb3AiLCJzY3JvbGxNYXJnaW4iLCJvd25lckRvY3VtZW50IiwiYXRUb3AiLCJib2R5IiwiYm91bmRpbmciLCJtb3ZlWCIsIm1vdmVZIiwic2Nyb2xsQnkiLCJzdGFydFgiLCJzY3JvbGxMZWZ0Iiwic3RhcnRZIiwic2Nyb2xsVG9wIiwiZFgiLCJkWSIsImdldENvbXB1dGVkU3R5bGUiLCJwb3NpdGlvbiIsIm9mZnNldFBhcmVudCIsInN0b3JlU2Nyb2xsUG9zIiwibWF4IiwicmVmRE9NIiwicmVmVG9wIiwiaW5uZXJIZWlnaHQiLCJyb290IiwiZWxlbWVudEZyb21Qb2ludCIsImNvbnRhaW5zIiwibG9jYWxSZWN0Iiwic3RhY2siLCJzY3JvbGxTdGFjayIsInB1c2giLCJyZXNldFNjcm9sbFBvcyIsIm5ld1JlZlRvcCIsInJlc3RvcmVTY3JvbGxTdGFjayIsImRUb3AiLCJpIiwicHJldmVudFNjcm9sbFN1cHBvcnRlZCIsImZvY3VzUHJldmVudFNjcm9sbCIsInNldEFjdGl2ZSIsImZvY3VzIiwic3RvcmVkIiwicHJldmVudFNjcm9sbCIsImZpbmRPZmZzZXRJbk5vZGUiLCJjb29yZHMiLCJjbG9zZXN0IiwiZHhDbG9zZXN0IiwiY29vcmRzQ2xvc2VzdCIsInJvd0JvdCIsInJvd1RvcCIsImZpcnN0QmVsb3ciLCJjb29yZHNCZWxvdyIsImZpcnN0Q2hpbGQiLCJjaGlsZEluZGV4IiwibmV4dFNpYmxpbmciLCJyZWN0cyIsImdldENsaWVudFJlY3RzIiwiZHgiLCJmaW5kT2Zmc2V0SW5UZXh0IiwibGVuIiwic2luZ2xlUmVjdCIsImluUmVjdCIsInRhcmdldEtsdWRnZSIsInBvc0Zyb21FbGVtZW50IiwiYmlhcyIsImRvY1ZpZXciLCJwb3NGcm9tRE9NIiwicG9zRnJvbUNhcmV0Iiwib3V0c2lkZUJsb2NrIiwic2F3QmxvY2siLCJuZWFyZXN0RGVzYyIsInBvc0JlZm9yZSIsInBvc0FmdGVyIiwiaXNUZXh0IiwiYmVmb3JlIiwiZWxlbWVudCIsImJveCIsInN0YXJ0SSIsImZsb29yIiwiaiIsInBvc0F0Q29vcmRzIiwiY2FyZXQiLCJwIiwiZHJhZ2dhYmxlIiwibmV4dCIsInByZXYiLCJsYXN0Q2hpbGQiLCJzdGF0ZSIsImNvbnRlbnQiLCJzaXplIiwiaW5zaWRlIiwicG9zQXRTdGFydCIsImJvcmRlciIsIm5vblplcm8iLCJ0YXJnZXQiLCJmaXJzdCIsIkFycmF5IiwicHJvdG90eXBlIiwiZmluZCIsImNhbGwiLCJCSURJIiwiY29vcmRzQXRQb3MiLCJhdG9tIiwiZG9tRnJvbVBvcyIsInN1cHBvcnRFbXB0eVJhbmdlIiwicmVjdEJlZm9yZSIsInJlY3RBZnRlciIsImZsYXR0ZW5WIiwidGFrZVNpZGUiLCIkZG9tIiwicmVzb2x2ZSIsImlubGluZUNvbnRlbnQiLCJmbGF0dGVuSCIsImFmdGVyIiwiaWdub3JlRm9yQ29vcmRzIiwid2l0aEZsdXNoZWRTdGF0ZSIsImYiLCJ2aWV3U3RhdGUiLCJhY3RpdmUiLCJ1cGRhdGVTdGF0ZSIsImVuZE9mVGV4dGJsb2NrVmVydGljYWwiLCJzZWwiLCJzZWxlY3Rpb24iLCIkcG9zIiwiJGZyb20iLCIkdG8iLCJuZWFyZXN0IiwiYm94ZXMiLCJtYXliZVJUTCIsImVuZE9mVGV4dGJsb2NrSG9yaXpvbnRhbCIsIiRoZWFkIiwiaXNUZXh0YmxvY2siLCJwYXJlbnRPZmZzZXQiLCJkb21TZWxlY3Rpb24iLCJzdGFydCIsImVuZCIsInRleHRDb250ZW50IiwibW9kaWZ5Iiwib2xkTm9kZSIsIm9sZE9mZiIsImRvbVNlbGVjdGlvblJhbmdlIiwib2xkQmlkaUxldmVsIiwiY2FyZXRCaWRpTGV2ZWwiLCJwYXJlbnRET00iLCJkZXB0aCIsImRvbUFmdGVyUG9zIiwibmV3Tm9kZSIsIm5ld09mZiIsInJlc3VsdCIsImNvbGxhcHNlIiwiZXh0ZW5kIiwiY2FjaGVkU3RhdGUiLCJjYWNoZWREaXIiLCJjYWNoZWRSZXN1bHQiLCJlbmRPZlRleHRibG9jayIsIk5PVF9ESVJUWSIsIkNISUxEX0RJUlRZIiwiQ09OVEVOVF9ESVJUWSIsIk5PREVfRElSVFkiLCJWaWV3RGVzYyIsImNvbnN0cnVjdG9yIiwiY2hpbGRyZW4iLCJkaXJ0eSIsIm1hdGNoZXNXaWRnZXQiLCJ3aWRnZXQiLCJtYXRjaGVzTWFyayIsIm1hcmsiLCJtYXRjaGVzTm9kZSIsIm91dGVyRGVjbyIsImlubmVyRGVjbyIsIm1hdGNoZXNIYWNrIiwicGFyc2VSdWxlIiwic3RvcEV2ZW50IiwiZGVzdHJveSIsInBvc0JlZm9yZUNoaWxkIiwicG9zQXRFbmQiLCJsb2NhbFBvc0Zyb21ET00iLCJkb21CZWZvcmUiLCJkb21BZnRlciIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwic2VhcmNoIiwib25seU5vZGVzIiwiZ2V0RGVzYyIsIm5vZGVET00iLCJzY2FuIiwiZGVzY0F0IiwiaTIiLCJpbm5lciIsImN1clBvcyIsIlRyYWlsaW5nSGFja1ZpZXdEZXNjIiwiV2lkZ2V0Vmlld0Rlc2MiLCJlbnRlciIsImRvbUF0b20iLCJwYXJzZVJhbmdlIiwiYmFzZSIsImZyb21PZmZzZXQiLCJ0b09mZnNldCIsImNoaWxkQmFzZSIsImVtcHR5Q2hpbGRBdCIsIlJhbmdlRXJyb3IiLCJzZXRTZWxlY3Rpb24iLCJhbmNob3IiLCJoZWFkIiwiZm9yY2UiLCJhbmNob3JET00iLCJoZWFkRE9NIiwiZ2V0U2VsZWN0aW9uIiwic2VsUmFuZ2UiLCJicktsdWRnZSIsImRvbVNlbEV4dGVuZGVkIiwidG1wIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJpZ25vcmVNdXRhdGlvbiIsIm11dGF0aW9uIiwidHlwZSIsImNvbnRlbnRMb3N0IiwibWFya0RpcnR5Iiwic3RhcnRJbnNpZGUiLCJlbmRJbnNpZGUiLCJtYXJrUGFyZW50c0RpcnR5IiwibGV2ZWwiLCJ0ZXh0Iiwic2VsZiIsInRvRE9NIiwic3BlYyIsInJhdyIsIndyYXAiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJlcSIsImlnbm9yZSIsInN0b3AiLCJpZ25vcmVTZWxlY3Rpb24iLCJyZWxheGVkU2lkZSIsIkNvbXBvc2l0aW9uVmlld0Rlc2MiLCJ0ZXh0RE9NIiwibXV0Iiwib2xkVmFsdWUiLCJNYXJrVmlld0Rlc2MiLCJjcmVhdGUiLCJpbmxpbmUiLCJjdXN0b20iLCJub2RlVmlld3MiLCJuYW1lIiwiRE9NU2VyaWFsaXplciIsInJlbmRlclNwZWMiLCJhdHRycyIsInJlcGFyc2VJblZpZXciLCJjb250ZW50RWxlbWVudCIsInNsaWNlIiwiY29weSIsIm5vZGVzIiwicmVwbGFjZU5vZGVzIiwiTm9kZVZpZXdEZXNjIiwiZGVzY09iaiIsImNyZWF0ZVRleHROb2RlIiwic3BlYzIiLCJoYXNBdHRyaWJ1dGUiLCJhcHBseU91dGVyRGVjbyIsIkN1c3RvbU5vZGVWaWV3RGVzYyIsIlRleHRWaWV3RGVzYyIsInJ1bGUiLCJ3aGl0ZXNwYWNlIiwicHJlc2VydmVXaGl0ZXNwYWNlIiwiZ2V0Q29udGVudCIsIkZyYWdtZW50IiwiZW1wdHkiLCJzYW1lT3V0ZXJEZWNvIiwiaXNMZWFmIiwidXBkYXRlQ2hpbGRyZW4iLCJjb21wb3NpdGlvbiIsImNvbXBvc2luZyIsImxvY2FsQ29tcG9zaXRpb25JbmZvIiwibG9jYWxDb21wb3NpdGlvbiIsImNvbXBvc2l0aW9uSW5DaGlsZCIsInVwZGF0ZXIiLCJWaWV3VHJlZVVwZGF0ZXIiLCJpdGVyRGVjbyIsImluc2lkZU5vZGUiLCJtYXJrcyIsInN5bmNUb01hcmtzIiwiY2hpbGRDb3VudCIsIk1hcmsiLCJub25lIiwicGxhY2VXaWRnZXQiLCJjb21wSW5kZXgiLCJmaW5kTm9kZU1hdGNoIiwiZmluZEluZGV4V2l0aENoaWxkIiwidXBkYXRlTm9kZUF0IiwidXBkYXRlTmV4dE5vZGUiLCJhZGROb2RlIiwiYWRkVGV4dGJsb2NrSGFja3MiLCJkZXN0cm95UmVzdCIsImNoYW5nZWQiLCJwcm90ZWN0TG9jYWxDb21wb3NpdGlvbiIsInJlbmRlckRlc2NzIiwiaW9zSGFja3MiLCJUZXh0U2VsZWN0aW9uIiwidGV4dE5vZGUiLCJpbnB1dCIsImNvbXBvc2l0aW9uTm9kZSIsInRleHRQb3MiLCJmaW5kVGV4dEluRnJhZ21lbnQiLCJ0b3BOb2RlIiwicmVtb3ZlQ2hpbGQiLCJjb21wb3NpdGlvbk5vZGVzIiwidXBkYXRlIiwic2FtZU1hcmt1cCIsInVwZGF0ZUlubmVyIiwidXBkYXRlT3V0ZXJEZWNvIiwibmVlZHNXcmFwIiwib2xkRE9NIiwicGF0Y2hPdXRlckRlY28iLCJjb21wdXRlT3V0ZXJEZWNvIiwic2VsZWN0Tm9kZSIsImRlc2VsZWN0Tm9kZSIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlzQXRvbSIsImRvY1ZpZXdEZXNjIiwic2tpcCIsInBtSXNEZWNvIiwiaW5QYXJlbnQiLCJ0cmFja1dyaXRlcyIsIm4iLCJjdXQiLCJtdWx0aVR5cGUiLCJkZXNjcyIsIndyaXR0ZW4iLCJjaGlsZERPTSIsInJtIiwiaW5zZXJ0QmVmb3JlIiwiT3V0ZXJEZWNvTGV2ZWwiLCJPYmplY3QiLCJub0RlY28iLCJ2YWwiLCJpc0lubGluZSIsImNsYXNzIiwib3V0ZXJET00iLCJwcmV2Q29tcHV0ZWQiLCJjdXJDb21wdXRlZCIsImN1ckRPTSIsImRlY28iLCJ0b0xvd2VyQ2FzZSIsInBhdGNoQXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsInByZXZMaXN0Iiwic3BsaXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiY3VyTGlzdCIsImluZGV4T2YiLCJwcm9wIiwibSIsInJlbW92ZVByb3BlcnR5IiwiY3NzVGV4dCIsImEiLCJiIiwibG9jayIsInByZU1hdGNoIiwiZGVzdHJveUJldHdlZW4iLCJzcGxpY2UiLCJrZWVwIiwibWF4S2VlcCIsInNwYW5uaW5nIiwicG9wIiwiZm91bmQiLCJpc0xvY2tlZCIsIm1hcmtEZXNjIiwidGFyZ2V0RGVzYyIsIm1hdGNoZXMiLCJlIiwibWF0Y2hlZCIsImhhcyIsImRvbU5vZGUiLCJwcmVNYXRjaDIiLCJnZXQiLCJuZXh0RE9NIiwidXBkYXRlZCIsImxvY2tlZCIsInJlY3JlYXRlV3JhcHBlciIsIndyYXBwZXIiLCJjaCIsInJlcXVpcmVzR2Vja29IYWNrTm9kZSIsImFkZEhhY2tOb2RlIiwiY2xhc3NOYW1lIiwiYWx0IiwiaGFjayIsImZyYWciLCJwYXJlbnREZXNjIiwiY3VyRGVzYyIsImRlc2NJIiwiZkkiLCJNYXAiLCJvdXRlciIsInNldCIsInJldmVyc2UiLCJjb21wYXJlU2lkZSIsIm9uV2lkZ2V0Iiwib25Ob2RlIiwibG9jYWxzIiwiZm9yQ2hpbGQiLCJkZWNvSW5kZXgiLCJyZXN0Tm9kZSIsInBhcmVudEluZGV4Iiwid2lkZ2V0cyIsInNvcnQiLCJjdXRBdCIsImQiLCJvbGRDU1MiLCJ3aW5kb3ciLCJsaXN0U3R5bGUiLCJjaGlsZFN0YXJ0Iiwic3RyIiwibGFzdEluZGV4T2YiLCJyZXBsYWNlbWVudCIsInNlbGVjdGlvbkZyb21ET00iLCJvcmlnaW4iLCJpbldpZGdldCIsIm5lYXJlc3REZXNjTm9kZSIsIk5vZGVTZWxlY3Rpb24iLCJpc1NlbGVjdGFibGUiLCJTZWxlY3Rpb24iLCJyYW5nZUNvdW50IiwiZ2V0UmFuZ2VBdCIsImVuZENvbnRhaW5lciIsImVuZE9mZnNldCIsIiRhbmNob3IiLCJzZWxlY3Rpb25CZXR3ZWVuIiwiZWRpdG9yT3duc1NlbGVjdGlvbiIsImVkaXRhYmxlIiwiaGFzRm9jdXMiLCJoYXNTZWxlY3Rpb24iLCJzZWxlY3Rpb25Ub0RPTSIsInN5bmNOb2RlU2VsZWN0aW9uIiwibW91c2VEb3duIiwiYWxsb3dEZWZhdWx0IiwiY3VyU2VsIiwiZG9tT2JzZXJ2ZXIiLCJjdXJyZW50U2VsZWN0aW9uIiwiZGVsYXllZFNlbGVjdGlvblN5bmMiLCJzZXRDdXJTZWxlY3Rpb24iLCJkaXNjb25uZWN0U2VsZWN0aW9uIiwiY3Vyc29yV3JhcHBlciIsInNlbGVjdEN1cnNvcldyYXBwZXIiLCJyZXNldEVkaXRhYmxlRnJvbSIsInJlc2V0RWRpdGFibGVUbyIsImJyb2tlblNlbGVjdEJldHdlZW5VbmVkaXRhYmxlIiwidGVtcG9yYXJpbHlFZGl0YWJsZU5lYXIiLCJyZXNldEVkaXRhYmxlIiwidmlzaWJsZSIsInJlbW92ZUNsYXNzT25TZWxlY3Rpb25DaGFuZ2UiLCJjb25uZWN0U2VsZWN0aW9uIiwic2V0RWRpdGFibGUiLCJ3YXNEcmFnZ2FibGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGlkZVNlbGVjdGlvbkd1YXJkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJpbWciLCJkaXNhYmxlZCIsImxhc3RTZWxlY3RlZFZpZXdEZXNjIiwiY2xlYXJOb2RlU2VsZWN0aW9uIiwiYmV0d2VlbiIsImhhc0ZvY3VzQW5kU2VsZWN0aW9uIiwiYW5jaG9ySW5SaWdodFBsYWNlIiwibW92ZVNlbGVjdGlvbkJsb2NrIiwiJHNpZGUiLCIkc3RhcnQiLCJmaW5kRnJvbSIsImFwcGx5IiwiZGlzcGF0Y2giLCJ0ciIsInNjcm9sbEludG9WaWV3Iiwic2VsZWN0SG9yaXpvbnRhbGx5IiwibW9kcyIsInRleHRPZmZzZXQiLCJub2RlQmVmb3JlIiwibm9kZUFmdGVyIiwiJG5ld0hlYWQiLCJub2RlUG9zIiwibm9kZUxlbiIsImlzSWdub3JhYmxlIiwic2tpcElnbm9yZWROb2RlcyIsInNraXBJZ25vcmVkTm9kZXNCZWZvcmUiLCJza2lwSWdub3JlZE5vZGVzQWZ0ZXIiLCJtb3ZlTm9kZSIsIm1vdmVPZmZzZXQiLCJpc0Jsb2NrTm9kZSIsInNldFNlbEZvY3VzIiwidGV4dE5vZGVBZnRlciIsInRleHROb2RlQmVmb3JlIiwiZmluZERpcmVjdGlvbiIsIm1pZCIsImFicyIsImNvbXB1dGVkIiwiZGlyZWN0aW9uIiwic2VsZWN0VmVydGljYWxseSIsImJleW9uZCIsIkFsbFNlbGVjdGlvbiIsIm5lYXIiLCJzdG9wTmF0aXZlSG9yaXpvbnRhbERlbGV0ZSIsImVtcHR5MiIsInNhbWVQYXJlbnQiLCJuZXh0Tm9kZSIsImRlbGV0ZSIsInN3aXRjaEVkaXRhYmxlIiwic2FmYXJpRG93bkFycm93QnVnIiwiZ2V0TW9kcyIsImN0cmxLZXkiLCJtZXRhS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJjYXB0dXJlS2V5RG93biIsInNlcmlhbGl6ZUZvckNsaXBib2FyZCIsImNvbnRleHQiLCJvcGVuU3RhcnQiLCJvcGVuRW5kIiwiZGVmYXVsdEF0dHJzIiwic2VyaWFsaXplciIsImZyb21TY2hlbWEiLCJzY2hlbWEiLCJkZXRhY2hlZERvYyIsInNlcmlhbGl6ZUZyYWdtZW50Iiwid3JhcHBlcnMiLCJ3cmFwTWFwIiwiSlNPTiIsInN0cmluZ2lmeSIsInRleHRCZXR3ZWVuIiwicGFyc2VGcm9tQ2xpcGJvYXJkIiwiaHRtbCIsInBsYWluVGV4dCIsIiRjb250ZXh0IiwiaW5Db2RlIiwiYXNUZXh0IiwiU2xpY2UiLCJyZXBsYWNlIiwicGFyc2VkIiwiZm9yRWFjaCIsImJsb2NrIiwic2VyaWFsaXplTm9kZSIsInJlYWRIVE1MIiwicmVzdG9yZVJlcGxhY2VkU3BhY2VzIiwiY29udGV4dE5vZGUiLCJxdWVyeVNlbGVjdG9yIiwic2xpY2VEYXRhIiwiZ2V0QXR0cmlidXRlIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwicGFyc2VTbGljZSIsInJ1bGVGcm9tTm9kZSIsImRvbTIiLCJpbmxpbmVQYXJlbnRzIiwiYWRkQ29udGV4dCIsImNsb3NlU2xpY2UiLCJtYXhPcGVuIiwibm9ybWFsaXplU2libGluZ3MiLCJpc29sYXRpbmciLCJmcmFnbWVudCIsIm1hdGNoIiwiY29udGVudE1hdGNoQXQiLCJsYXN0V3JhcCIsImZpbmRXcmFwcGluZyIsImluTGFzdCIsImFkZFRvU2libGluZyIsImNsb3NlUmlnaHQiLCJ3cmFwcGVkIiwid2l0aFdyYXBwZXJzIiwibWF0Y2hUeXBlIiwic2libGluZyIsInJlcGxhY2VDaGlsZCIsImFwcGVuZCIsImZpbGwiLCJmaWxsQmVmb3JlIiwiY2xvc2VSYW5nZSIsInRoZWFkIiwidGJvZHkiLCJ0Zm9vdCIsImNhcHRpb24iLCJjb2xncm91cCIsImNvbCIsInRkIiwidGgiLCJfZGV0YWNoZWREb2MiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsIl9wb2xpY3kiLCJtYXliZVdyYXBUcnVzdGVkIiwidHJ1c3RlZFR5cGVzIiwiZGVmYXVsdFBvbGljeSIsImNyZWF0ZVBvbGljeSIsImNyZWF0ZUhUTUwiLCJzIiwibWV0YXMiLCJmaXJzdFRhZyIsIm1hcCIsImpvaW4iLCJpbm5lckhUTUwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXJyYXkiLCJwYXJzZSIsImhhc1JlcXVpcmVkQXR0cnMiLCJoYW5kbGVycyIsImVkaXRIYW5kbGVycyIsInBhc3NpdmVIYW5kbGVycyIsInRvdWNoc3RhcnQiLCJ0b3VjaG1vdmUiLCJJbnB1dFN0YXRlIiwibGFzdEtleUNvZGUiLCJsYXN0S2V5Q29kZVRpbWUiLCJsYXN0Q2xpY2siLCJ0aW1lIiwiYnV0dG9uIiwibGFzdFNlbGVjdGlvbk9yaWdpbiIsImxhc3RTZWxlY3Rpb25UaW1lIiwibGFzdElPU0VudGVyIiwibGFzdElPU0VudGVyRmFsbGJhY2tUaW1lb3V0IiwibGFzdEZvY3VzIiwibGFzdFRvdWNoIiwibGFzdENocm9tZURlbGV0ZSIsImNvbXBvc2luZ1RpbWVvdXQiLCJjb21wb3NpdGlvbkVuZGVkQXQiLCJjb21wb3NpdGlvbklEIiwiY29tcG9zaXRpb25QZW5kaW5nQ2hhbmdlcyIsImRvbUNoYW5nZUNvdW50IiwiZXZlbnRIYW5kbGVycyIsImluaXRJbnB1dCIsImhhbmRsZXIiLCJldmVudDIiLCJldmVudEJlbG9uZ3NUb1ZpZXciLCJydW5DdXN0b21IYW5kbGVyIiwicGFzc2l2ZSIsImVuc3VyZUxpc3RlbmVycyIsInNldFNlbGVjdGlvbk9yaWdpbiIsIkRhdGUiLCJub3ciLCJkZXN0cm95SW5wdXQiLCJjbGVhclRpbWVvdXQiLCJjdXJyZW50SGFuZGxlcnMiLCJoYW5kbGVyczIiLCJkZWZhdWx0UHJldmVudGVkIiwiYnViYmxlcyIsImRpc3BhdGNoRXZlbnQiLCJrZXlkb3duIiwiX2V2ZW50IiwiaW5Pck5lYXJDb21wb3NpdGlvbiIsImZvcmNlRmx1c2giLCJwcmV2ZW50RGVmYXVsdCIsImtleXVwIiwia2V5cHJlc3MiLCJjaGFyQ29kZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImRlZmx0IiwiaW5zZXJ0VGV4dCIsImV2ZW50Q29vcmRzIiwiY2xpZW50WCIsImNsaWVudFkiLCJpc05lYXIiLCJjbGljayIsImR5IiwicnVuSGFuZGxlck9uQ29udGV4dCIsInByb3BOYW1lIiwidXBkYXRlU2VsZWN0aW9uIiwiZm9jdXNlZCIsInNldE1ldGEiLCJzZWxlY3RDbGlja2VkTGVhZiIsInNlbGVjdENsaWNrZWROb2RlIiwic2VsZWN0ZWROb2RlIiwic2VsZWN0QXQiLCJoYW5kbGVTaW5nbGVDbGljayIsImhhbmRsZURvdWJsZUNsaWNrIiwiaGFuZGxlVHJpcGxlQ2xpY2siLCJkZWZhdWx0VHJpcGxlQ2xpY2siLCJmb3JjZURPTUZsdXNoIiwiZW5kQ29tcG9zaXRpb24iLCJzZWxlY3ROb2RlTW9kaWZpZXIiLCJtb3VzZWRvd24iLCJmbHVzaGVkIiwiZG9uZSIsIk1vdXNlRG93biIsIm1pZ2h0RHJhZyIsInN0YXJ0RG9jIiwidGFyZ2V0UG9zIiwibm9kZUF0Iiwic2VsZWN0YWJsZSIsImFkZEF0dHIiLCJzZXRVbmVkaXRhYmxlIiwidXAiLCJiaW5kIiwibW92ZSIsInVwZGF0ZUFsbG93RGVmYXVsdCIsImJ1dHRvbnMiLCJjb250ZXh0bWVudSIsInRpbWVTdGFtcCIsInRpbWVvdXRDb21wb3NpdGlvbiIsImNvbXBvc2l0aW9uc3RhcnQiLCJjb21wb3NpdGlvbnVwZGF0ZSIsImZsdXNoIiwic3RvcmVkTWFya3MiLCJzb21lIiwiaW5jbHVzaXZlIiwibWFya0N1cnNvciIsInNlbDIiLCJzY2hlZHVsZUNvbXBvc2VFbmQiLCJjb21wb3NpdGlvbmVuZCIsInBlbmRpbmdSZWNvcmRzIiwiUHJvbWlzZSIsInRoZW4iLCJkZWxheSIsImNsZWFyQ29tcG9zaXRpb24iLCJ0aW1lc3RhbXBGcm9tQ3VzdG9tRXZlbnQiLCJmaW5kQ29tcG9zaXRpb25Ob2RlIiwidGV4dEJlZm9yZSIsInRleHRBZnRlciIsImRlc2NBZnRlciIsImxhc3RDaGFuZ2VkIiwibGFzdENoYW5nZWRUZXh0Tm9kZSIsImRlc2NCZWZvcmUiLCJyZXN0YXJ0aW5nIiwiZmx1c2hpbmdTb29uIiwic2hhcmVkRGVwdGgiLCJkZWxldGVTZWxlY3Rpb24iLCJjYXB0dXJlQ29weSIsInNlbGVjdE5vZGVDb250ZW50cyIsImJsdXIiLCJicm9rZW5DbGlwYm9hcmRBUEkiLCJkYXRhIiwiY2xpcGJvYXJkRGF0YSIsImNsZWFyRGF0YSIsInNldERhdGEiLCJzbGljZVNpbmdsZU5vZGUiLCJjYXB0dXJlUGFzdGUiLCJwbGFpbiIsImRvUGFzdGUiLCJwcmVmZXJQbGFpbiIsInNpbmdsZU5vZGUiLCJyZXBsYWNlU2VsZWN0aW9uV2l0aCIsInJlcGxhY2VTZWxlY3Rpb24iLCJnZXRUZXh0IiwiZ2V0RGF0YSIsInVyaXMiLCJwYXN0ZSIsIkRyYWdnaW5nIiwiZHJhZ0NvcHlNb2RpZmllciIsImRyYWdNb3ZlcyIsIm1vdmVzIiwiZHJhZ3N0YXJ0IiwiZGF0YVRyYW5zZmVyIiwiZHJhZ2dlZFNsaWNlIiwiZmlsZXMiLCJlZmZlY3RBbGxvd2VkIiwiZHJhZ2dpbmciLCJkcmFnZW5kIiwiZHJhZ292ZXIiLCJkcmFnZW50ZXIiLCJkcm9wIiwiZXZlbnRQb3MiLCIkbW91c2UiLCJpbnNlcnRQb3MiLCJkcm9wUG9pbnQiLCJtYXBwaW5nIiwiaXNOb2RlIiwiYmVmb3JlSW5zZXJ0IiwicmVwbGFjZVJhbmdlV2l0aCIsInJlcGxhY2VSYW5nZSIsIm1hcHMiLCJfZnJvbSIsIl90byIsIl9uZXdGcm9tIiwibmV3VG8iLCJyZWxhdGVkVGFyZ2V0IiwiY2xlYXIiLCJiZWZvcmVpbnB1dCIsImlucHV0VHlwZSIsImZsdXNoU29vbiIsIiRjdXJzb3IiLCJjb21wYXJlT2JqcyIsIldpZGdldFR5cGUiLCJub1NwZWMiLCJzcGFuIiwib2xkT2Zmc2V0IiwiZGVsZXRlZCIsIm1hcFJlc3VsdCIsInZhbGlkIiwib3RoZXIiLCJJbmxpbmVUeXBlIiwiaW5jbHVzaXZlU3RhcnQiLCJpbmNsdXNpdmVFbmQiLCJpcyIsIk5vZGVUeXBlIiwiZmluZEluZGV4IiwibG9jYWwiLCJkZWNvcmF0aW9ucyIsImJ1aWxkVHJlZSIsInByZWRpY2F0ZSIsImZpbmRJbm5lciIsImNoaWxkT2ZmIiwib3B0aW9ucyIsIm1hcElubmVyIiwibmV3TG9jYWwiLCJtYXBwZWQiLCJvblJlbW92ZSIsIm1hcENoaWxkcmVuIiwiYnlQb3MiLCJhZGRJbm5lciIsImNoaWxkTm9kZSIsImNoaWxkT2Zmc2V0IiwiYmFzZU9mZnNldCIsInRha2VTcGFuc0Zvck5vZGUiLCJtb3ZlU3BhbnMiLCJ3aXRob3V0TnVsbHMiLCJjb25jYXQiLCJyZW1vdmVJbm5lciIsInJlbW92ZWQiLCJkZWMiLCJsb2NhbFNldCIsIkRlY29yYXRpb25Hcm91cCIsInJlbW92ZU92ZXJsYXAiLCJsb2NhbHNJbm5lciIsImZvckVhY2hTZXQiLCJtZW1iZXJzIiwibWFwcGVkRGVjb3MiLCJtZW1iZXIiLCJzb3J0ZWQiLCJldmVyeSIsInJlZHVjZSIsInIiLCJvbGRDaGlsZHJlbiIsIm1vdmVkIiwib2xkU3RhcnQiLCJvbGRFbmQiLCJuZXdTdGFydCIsIm5ld0VuZCIsImRTaXplIiwibXVzdFJlYnVpbGQiLCJmcm9tTG9jYWwiLCJ0b0xvY2FsIiwibWF5YmVDaGlsZCIsIm1hcEFuZEdhdGhlclJlbWFpbmluZ0RlY29yYXRpb25zIiwiYnVpbHQiLCJzcGFucyIsImdhdGhlciIsIm9sZE9mZnNldDIiLCJoYXNOdWxscyIsImxvY2FsU3RhcnQiLCJzdWJ0cmVlIiwid29ya2luZyIsImluc2VydEFoZWFkIiwidmlld0RlY29yYXRpb25zIiwib2JzZXJ2ZU9wdGlvbnMiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwiY2hhcmFjdGVyRGF0YU9sZFZhbHVlIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZU9sZFZhbHVlIiwidXNlQ2hhckRhdGEiLCJTZWxlY3Rpb25TdGF0ZSIsIkRPTU9ic2VydmVyIiwiaGFuZGxlRE9NQ2hhbmdlIiwicXVldWUiLCJvYnNlcnZlciIsIm9uQ2hhckRhdGEiLCJzdXBwcmVzc2luZ1NlbGVjdGlvblVwZGF0ZXMiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwicmVtb3ZlZE5vZGVzIiwicHJldlZhbHVlIiwib25TZWxlY3Rpb25DaGFuZ2UiLCJ0YWtlUmVjb3JkcyIsIm9ic2VydmUiLCJ0YWtlIiwiZGlzY29ubmVjdCIsInN1cHByZXNzU2VsZWN0aW9uVXBkYXRlcyIsImlnbm9yZVNlbGVjdGlvbkNoYW5nZSIsImFuY2VzdG9ycyIsIlNldCIsImNvbnRhaW5lciIsIm5ld1NlbCIsInR5cGVPdmVyIiwiYWRkZWQiLCJyZWdpc3Rlck11dGF0aW9uIiwiYnJzIiwiYnIiLCJibG9ja1BhcmVudCIsInJlYWRTZWwiLCJzY3JvbGxUb1NlbGVjdGlvbiIsImNoZWNrQ1NTIiwiYXR0cmlidXRlTmFtZSIsImFkZGVkTm9kZXMiLCJjc3NDaGVja2VkIiwiV2Vha01hcCIsImNzc0NoZWNrV2FybmVkIiwid2hpdGVTcGFjZSIsImNvbnNvbGUiLCJyYW5nZVRvU2VsZWN0aW9uUmFuZ2UiLCJjdXJyZW50QW5jaG9yIiwiZG9tQXRQb3MiLCJzYWZhcmlTaGFkb3dTZWxlY3Rpb25SYW5nZSIsImdldENvbXBvc2VkUmFuZ2VzIiwicmVhZCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImdldFRhcmdldFJhbmdlcyIsImV4ZWNDb21tYW5kIiwicGFyc2VCZXR3ZWVuIiwiZnJvbV8iLCJ0b18iLCJ0b3BNYXRjaCIsInRvcE9wZW4iLCJmaW5kUG9zaXRpb25zIiwiYW5jaG9yMiIsInJlYWRET01DaGFuZ2UiLCIkYmVmb3JlIiwic2hhcmVkIiwiY29tcGFyZSIsInByZWZlcnJlZFBvcyIsInByZWZlcnJlZFNpZGUiLCJjaGFuZ2UiLCJmaW5kRGlmZiIsImVuZEEiLCJlbmRCIiwicmVzb2x2ZVNlbGVjdGlvbiIsInJlc29sdmVOb0NhY2hlIiwiJGZyb21BIiwiaW5saW5lQ2hhbmdlIiwibmV4dFNlbCIsImxvb2tzTGlrZUJhY2tzcGFjZSIsImNoRnJvbSIsImNoVG8iLCJta1RyIiwibWFya0NoYW5nZSIsIm1hcmtzQWNyb3NzIiwiZW5zdXJlTWFya3MiLCJpc01hcmtDaGFuZ2UiLCJhZGRNYXJrIiwicmVtb3ZlTWFyayIsInBhcnNlZFNlbCIsImN1ck1hcmtzIiwicHJldk1hcmtzIiwicmVtb3ZlRnJvbVNldCIsImFkZFRvU2V0Iiwib2xkIiwiJG5ld1N0YXJ0IiwiJG5ld0VuZCIsInNraXBDbG9zaW5nQW5kT3BlbmluZyIsIiRuZXh0IiwiZnJvbUVuZCIsIm1heU9wZW4iLCJpbmRleEFmdGVyIiwiZmluZERpZmZTdGFydCIsImZpbmREaWZmRW5kIiwiYWRqdXN0IiwiaXNTdXJyb2dhdGVQYWlyIiwiY2hhckNvZGVBdCIsInBsYWNlIiwicHJvcHMiLCJfcm9vdCIsIm1vdW50ZWQiLCJwcmV2RGlyZWN0UGx1Z2lucyIsInBsdWdpblZpZXdzIiwiX3Byb3BzIiwiZGlyZWN0UGx1Z2lucyIsInBsdWdpbnMiLCJjaGVja1N0YXRlQ29tcG9uZW50IiwibW91bnQiLCJnZXRFZGl0YWJsZSIsInVwZGF0ZUN1cnNvcldyYXBwZXIiLCJidWlsZE5vZGVWaWV3cyIsImNvbXB1dGVEb2NEZWNvIiwidXBkYXRlUGx1Z2luVmlld3MiLCJoYW5kbGVET01FdmVudHMiLCJwcmV2UHJvcHMiLCJ1cGRhdGVTdGF0ZUlubmVyIiwic2V0UHJvcHMiLCJyZWRyYXciLCJ1cGRhdGVTZWwiLCJwbHVnaW5zQ2hhbmdlZCIsImNoYW5nZWROb2RlVmlld3MiLCJzY3JvbGwiLCJ1cGRhdGVEb2MiLCJvbGRTY3JvbGxQb3MiLCJvdmVyZmxvd0FuY2hvciIsImZvcmNlU2VsVXBkYXRlIiwic2VsZWN0aW9uQ29udGV4dENoYW5nZWQiLCJjaHJvbWVLbHVkZ2UiLCJ1cGRhdGVEcmFnZ2VkTm9kZSIsImRlc3Ryb3lQbHVnaW5WaWV3cyIsInByZXZTdGF0ZSIsInBsdWdpbiIsInBsdWdpblZpZXciLCJtb3ZlZFBvcyIsInByb3AyIiwicGFyZW50RWxlbWVudCIsImNhY2hlZCIsImdldFByb3RvdHlwZU9mIiwidXBkYXRlUm9vdCIsInBvc0F0RE9NIiwicGFzdGVIVE1MIiwiQ2xpcGJvYXJkRXZlbnQiLCJwYXN0ZVRleHQiLCJpc0Rlc3Ryb3llZCIsImRpc3BhdGNoVHJhbnNhY3Rpb24iLCJjb250ZW50ZWRpdGFibGUiLCJhdHRyIiwidHJhbnNsYXRlIiwic2VsMSIsIm9iaiIsImhhc093blByb3BlcnR5IiwibkEiLCJuQiIsImZpbHRlclRyYW5zYWN0aW9uIiwiYXBwZW5kVHJhbnNhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLCtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsK0JBQUE7RUFBQUUsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVQsK0JBQUE7OztBQ0FBLElBQUFVLHdCQUFBLEdBQXNFQyxPQUFBO0FBQ3RFLElBQUFDLHdCQUFBLEdBQWdFRCxPQUFBO0FBQ2hFLElBQUFFLDRCQUFBLEdBQTBCRixPQUFBO0FBRTFCLElBQU1HLFFBQUEsR0FBVyxTQUFBQSxDQUFVQyxJQUFBLEVBQU07RUFDN0IsU0FBU0MsS0FBQSxHQUFRLElBQUlBLEtBQUEsSUFBUztJQUMxQkQsSUFBQSxHQUFPQSxJQUFBLENBQUtFLGVBQUE7SUFDWixJQUFJLENBQUNGLElBQUEsRUFDRCxPQUFPQyxLQUFBO0VBQ2Y7QUFDSjtBQUNBLElBQU1FLFVBQUEsR0FBYSxTQUFBQSxDQUFVSCxJQUFBLEVBQU07RUFDL0IsSUFBSUksTUFBQSxHQUFTSixJQUFBLENBQUtLLFlBQUEsSUFB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