System.register(["orderedmap@2.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep)],
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/prosemirror-model.1.25.3.js
var prosemirror_model_1_25_3_exports = {};
__export(prosemirror_model_1_25_3_exports, {
  ContentMatch: () => ContentMatch,
  DOMParser: () => DOMParser,
  DOMSerializer: () => DOMSerializer,
  Fragment: () => Fragment,
  Mark: () => Mark,
  MarkType: () => MarkType,
  Node: () => Node,
  NodeRange: () => NodeRange,
  NodeType: () => NodeType,
  ReplaceError: () => ReplaceError,
  ResolvedPos: () => ResolvedPos,
  Schema: () => Schema,
  Slice: () => Slice
});
module.exports = __toCommonJS(prosemirror_model_1_25_3_exports);

// node_modules/prosemirror-model/dist/index.js
var import_orderedmap = __toESM(require("orderedmap@2.1.1"), 0);
function findDiffStart(a, b, pos) {
  for (let i = 0;; i++) {
    if (i == a.childCount || i == b.childCount) return a.childCount == b.childCount ? null : pos;
    let childA = a.child(i),
      childB = b.child(i);
    if (childA == childB) {
      pos += childA.nodeSize;
      continue;
    }
    if (!childA.sameMarkup(childB)) return pos;
    if (childA.isText && childA.text != childB.text) {
      for (let j = 0; childA.text[j] == childB.text[j]; j++) pos++;
      return pos;
    }
    if (childA.content.size || childB.content.size) {
      let inner = findDiffStart(childA.content, childB.content, pos + 1);
      if (inner != null) return inner;
    }
    pos += childA.nodeSize;
  }
}
function findDiffEnd(a, b, posA, posB) {
  for (let iA = a.childCount, iB = b.childCount;;) {
    if (iA == 0 || iB == 0) return iA == iB ? null : {
      a: posA,
      b: posB
    };
    let childA = a.child(--iA),
      childB = b.child(--iB),
      size = childA.nodeSize;
    if (childA == childB) {
      posA -= size;
      posB -= size;
      continue;
    }
    if (!childA.sameMarkup(childB)) return {
      a: posA,
      b: posB
    };
    if (childA.isText && childA.text != childB.text) {
      let same = 0,
        minSize = Math.min(childA.text.length, childB.text.length);
      while (same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]) {
        same++;
        posA--;
        posB--;
      }
      return {
        a: posA,
        b: posB
      };
    }
    if (childA.content.size || childB.content.size) {
      let inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
      if (inner) return inner;
    }
    posA -= size;
    posB -= size;
  }
}
var Fragment = class {
  constructor(content, size) {
    this.content = content;
    this.size = size || 0;
    if (size == null) for (let i = 0; i < content.length; i++) this.size += content[i].nodeSize;
  }
  nodesBetween(from, to, f, nodeStart = 0, parent) {
    for (let i = 0, pos = 0; pos < to; i++) {
      let child = this.content[i],
        end = pos + child.nodeSize;
      if (end > from && f(child, nodeStart + pos, parent || null, i) !== false && child.content.size) {
        let start = pos + 1;
        child.nodesBetween(Math.max(0, from - start), Math.min(child.content.size, to - start), f, nodeStart + start);
      }
      pos = end;
    }
  }
  descendants(f) {
    this.nodesBetween(0, this.size, f);
  }
  textBetween(from, to, blockSeparator, leafText) {
    let text = "",
      first = true;
    this.nodesBetween(from, to, (node, pos) => {
      let nodeText = node.isText ? node.text.slice(Math.max(from, pos) - pos, to - pos) : !node.isLeaf ? "" : leafText ? typeof leafText === "function" ? leafText(node) : leafText : node.type.spec.leafText ? node.type.spec.leafText(node) : "";
      if (node.isBlock && (node.isLeaf && nodeText || node.isTextblock) && blockSeparator) {
        if (first) first = false;else text += blockSeparator;
      }
      text += nodeText;
    }, 0);
    return text;
  }
  append(other) {
    if (!other.size) return this;
    if (!this.size) return other;
    let last = this.lastChild,
      first = other.firstChild,
      content = this.content.slice(),
      i = 0;
    if (last.isText && last.sameMarkup(first)) {
      content[content.length - 1] = last.withText(last.text + first.text);
      i = 1;
    }
    for (; i < other.content.length; i++) content.push(other.content[i]);
    return new Fragment(content, this.size + other.size);
  }
  cut(from, to = this.size) {
    if (from == 0 && to == this.size) return this;
    let result = [],
      size = 0;
    if (to > from) for (let i = 0, pos = 0; pos < to; i++) {
      let child = this.content[i],
        end = pos + child.nodeSize;
      if (end > from) {
        if (pos < from || end > to) {
          if (child.isText) child = child.cut(Math.max(0, from - pos), Math.min(child.text.length, to - pos));else child = child.cut(Math.max(0, from - pos - 1), Math.min(child.content.size, to - pos - 1));
        }
        result.push(child);
        size += child.nodeSize;
      }
      pos = end;
    }
    return new Fragment(result, size);
  }
  cutByIndex(from, to) {
    if (from == to) return Fragment.empty;
    if (from == 0 && to == this.content.length) return this;
    return new Fragment(this.content.slice(from, to));
  }
  replaceChild(index, node) {
    let current = this.content[index];
    if (current == node) return this;
    let copy2 = this.content.slice();
    let size = this.size + node.nodeSize - current.nodeSize;
    copy2[index] = node;
    return new Fragment(copy2, size);
  }
  addToStart(node) {
    return new Fragment([node].concat(this.content), this.size + node.nodeSize);
  }
  addToEnd(node) {
    return new Fragment(this.content.concat(node), this.size + node.nodeSize);
  }
  eq(other) {
    if (this.content.length != other.content.length) return false;
    for (let i = 0; i < this.content.length; i++) if (!this.content[i].eq(other.content[i])) return false;
    return true;
  }
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  get childCount() {
    return this.content.length;
  }
  child(index) {
    let found2 = this.content[index];
    if (!found2) throw new RangeError("Index " + index + " out of range for " + this);
    return found2;
  }
  maybeChild(index) {
    return this.content[index] || null;
  }
  forEach(f) {
    for (let i = 0, p = 0; i < this.content.length; i++) {
      let child = this.content[i];
      f(child, p, i);
      p += child.nodeSize;
    }
  }
  findDiffStart(other, pos = 0) {
    return findDiffStart(this, other, pos);
  }
  findDiffEnd(other, pos = this.size, otherPos = other.size) {
    return findDiffEnd(this, other, pos, otherPos);
  }
  findIndex(pos) {
    if (pos == 0) return retIndex(0, pos);
    if (pos == this.size) return retIndex(this.content.length, pos);
    if (pos > this.size || pos < 0) throw new RangeError(`Position ${pos} outside of fragment (${this})`);
    for (let i = 0, curPos = 0;; i++) {
      let cur = this.child(i),
        end = curPos + cur.nodeSize;
      if (end >= pos) {
        if (end == pos) return retIndex(i + 1, end);
        return retIndex(i, curPos);
      }
      curPos = end;
    }
  }
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  toStringInner() {
    return this.content.join(", ");
  }
  toJSON() {
    return this.content.length ? this.content.map(n => n.toJSON()) : null;
  }
  static fromJSON(schema, value) {
    if (!value) return Fragment.empty;
    if (!Array.isArray(value)) throw new RangeError("Invalid input for Fragment.fromJSON");
    return new Fragment(value.map(schema.nodeFromJSON));
  }
  static fromArray(array) {
    if (!array.length) return Fragment.empty;
    let joined,
      size = 0;
    for (let i = 0; i < array.length; i++) {
      let node = array[i];
      size += node.nodeSize;
      if (i && node.isText && array[i - 1].sameMarkup(node)) {
        if (!joined) joined = array.slice(0, i);
        joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text);
      } else if (joined) {
        joined.push(node);
      }
    }
    return new Fragment(joined || array, size);
  }
  static from(nodes) {
    if (!nodes) return Fragment.empty;
    if (nodes instanceof Fragment) return nodes;
    if (Array.isArray(nodes)) return this.fromArray(nodes);
    if (nodes.attrs) return new Fragment([nodes], nodes.nodeSize);
    throw new RangeError("Can not convert " + nodes + " to a Fragment" + (nodes.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
};
Fragment.empty = new Fragment([], 0);
var found = {
  index: 0,
  offset: 0
};
function retIndex(index, offset) {
  found.index = index;
  found.offset = offset;
  return found;
}
function compareDeep(a, b) {
  if (a === b) return true;
  if (!(a && typeof a == "object") || !(b && typeof b == "object")) return false;
  let array = Array.isArray(a);
  if (Array.isArray(b) != array) return false;
  if (array) {
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) if (!compareDeep(a[i], b[i])) return false;
  } else {
    for (let p in a) if (!(p in b) || !compareDeep(a[p], b[p])) return false;
    for (let p in b) if (!(p in a)) return false;
  }
  return true;
}
var Mark = class {
  constructor(type, attrs) {
    this.type = type;
    this.attrs = attrs;
  }
  addToSet(set) {
    let copy2,
      placed = false;
    for (let i = 0; i < set.length; i++) {
      let other = set[i];
      if (this.eq(other)) return set;
      if (this.type.excludes(other.type)) {
        if (!copy2) copy2 = set.slice(0, i);
      } else if (other.type.excludes(this.type)) {
        return set;
      } else {
        if (!placed && other.type.rank > this.type.rank) {
          if (!copy2) copy2 = set.slice(0, i);
          copy2.push(this);
          placed = true;
        }
        if (copy2) copy2.push(other);
      }
    }
    if (!copy2) copy2 = set.slice();
    if (!placed) copy2.push(this);
    return copy2;
  }
  removeFromSet(set) {
    for (let i = 0; i < set.length; i++) if (this.eq(set[i])) return set.slice(0, i).concat(set.slice(i + 1));
    return set;
  }
  isInSet(set) {
    for (let i = 0; i < set.length; i++) if (this.eq(set[i])) return true;
    return false;
  }
  eq(other) {
    return this == other || this.type == other.type && compareDeep(this.attrs, other.attrs);
  }
  toJSON() {
    let obj = {
      type: this.type.name
    };
    for (let _ in this.attrs) {
      obj.attrs = this.attrs;
      break;
    }
    return obj;
  }
  static fromJSON(schema, json) {
    if (!json) throw new RangeError("Invalid input for Mark.fromJSON");
    let type = schema.marks[json.type];
    if (!type) throw new RangeError(`There is no mark type ${json.type} in this schema`);
    let mark = type.create(json.attrs);
    type.checkAttrs(mark.attrs);
    return mark;
  }
  static sameSet(a, b) {
    if (a == b) return true;
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) if (!a[i].eq(b[i])) return false;
    return true;
  }
  static setFrom(marks) {
    if (!marks || Array.isArray(marks) && marks.length == 0) return Mark.none;
    if (marks instanceof Mark) return [marks];
    let copy2 = marks.slice();
    copy2.sort((a, b) => a.type.rank - b.type.rank);
    return copy2;
  }
};
Mark.none = [];
var ReplaceError = class extends Error {};
var Slice = class {
  constructor(content, openStart, openEnd) {
    this.content = content;
    this.openStart = openStart;
    this.openEnd = openEnd;
  }
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  insertAt(pos, fragment) {
    let content = insertInto(this.content, pos + this.openStart, fragment);
    return content && new Slice(content, this.openStart, this.openEnd);
  }
  removeBetween(from, to) {
    return new Slice(removeRange(this.content, from + this.openStart, to + this.openStart), this.openStart, this.openEnd);
  }
  eq(other) {
    return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd;
  }
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  toJSON() {
    if (!this.content.size) return null;
    let json = {
      content: this.content.toJSON()
    };
    if (this.openStart > 0) json.openStart = this.openStart;
    if (this.openEnd > 0) json.openEnd = this.openEnd;
    return json;
  }
  static fromJSON(schema, json) {
    if (!json) return Slice.empty;
    let openStart = json.openStart || 0,
      openEnd = json.openEnd || 0;
    if (typeof openStart != "number" || typeof openEnd != "number") throw new RangeError("Invalid input for Slice.fromJSON");
    return new Slice(Fragment.fromJSON(schema, json.content), openStart, openEnd);
  }
  static maxOpen(fragment, openIsolating = true) {
    let openStart = 0,
      openEnd = 0;
    for (let n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild) openStart++;
    for (let n = fragment.lastChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.lastChild) openEnd++;
    return new Slice(fragment, openStart, openEnd);
  }
};
Slice.empty = new Slice(Fragment.empty, 0, 0);
function removeRange(content, from, to) {
  let {
      index,
      offset
    } = content.findIndex(from),
    child = content.maybeChild(index);
  let {
    index: indexTo,
    offset: offsetTo
  } = content.findIndex(to);
  if (offset == from || child.isText) {
    if (offsetTo != to && !content.child(indexTo).isText) throw new RangeError("Removing non-flat range");
    return content.cut(0, from).append(content.cut(to));
  }
  if (index != indexTo) throw new RangeError("Removing non-flat range");
  return content.replaceChild(index, child.copy(removeRange(child.content, from - offset - 1, to - offset - 1)));
}
function insertInto(content, dist, insert, parent) {
  let {
      index,
      offset
    } = content.findIndex(dist),
    child = content.maybeChild(index);
  if (offset == dist || child.isText) {
    if (parent && !parent.canReplace(index, index, insert)) return null;
    return content.cut(0, dist).append(insert).append(content.cut(dist));
  }
  let inner = insertInto(child.content, dist - offset - 1, insert, child);
  return inner && content.replaceChild(index, child.copy(inner));
}
function replace($from, $to, slice) {
  if (slice.openStart > $from.depth) throw new ReplaceError("Inserted content deeper than insertion position");
  if ($from.depth - slice.openStart != $to.depth - slice.openEnd) throw new ReplaceError("Inconsistent open depths");
  return replaceOuter($from, $to, slice, 0);
}
function replaceOuter($from, $to, slice, depth) {
  let index = $from.index(depth),
    node = $from.node(depth);
  if (index == $to.index(depth) && depth < $from.depth - slice.openStart) {
    let inner = replaceOuter($from, $to, slice, depth + 1);
    return node.copy(node.content.replaceChild(index, inner));
  } else if (!slice.content.size) {
    return close(node, replaceTwoWay($from, $to, depth));
  } else if (!slice.openStart && !slice.openEnd && $from.depth == depth && $to.depth == depth) {
    let parent = $from.parent,
      content = parent.content;
    return close(parent, content.cut(0, $from.parentOffset).append(slice.content).append(content.cut($to.parentOffset)));
  } else {
    let {
      start,
      end
    } = prepareSliceForReplace(slice, $from);
    return close(node, replaceThreeWay($from, start, end, $to, depth));
  }
}
function checkJoin(main, sub) {
  if (!sub.type.compatibleContent(main.type)) throw new ReplaceError("Cannot join " + sub.type.name + " onto " + main.type.name);
}
function joinable($before, $after, depth) {
  let node = $before.node(depth);
  checkJoin(node, $after.node(depth));
  return node;
}
function addNode(child, target) {
  let last = target.length - 1;
  if (last >= 0 && child.isText && child.sameMarkup(target[last])) target[last] = child.withText(target[last].text + child.text);else target.push(child);
}
function addRange($start, $end, depth, target) {
  let node = ($end || $start).node(depth);
  let startIndex = 0,
    endIndex = $end ? $end.index(depth) : node.childCount;
  if ($start) {
    startIndex = $start.index(depth);
    if ($start.depth > depth) {
      startIndex++;
    } else if ($start.textOffset) {
      addNode($start.nodeAfter, target);
      startIndex++;
    }
  }
  for (let i = startIndex; i < endIndex; i++) addNode(node.child(i), target);
  if ($end && $end.depth == depth && $end.textOffset) addNode($end.nodeBefore, target);
}
function close(node, content) {
  node.type.checkContent(content);
  return node.copy(content);
}
function replaceThreeWay($from, $start, $end, $to, depth) {
  let openStart = $from.depth > depth && joinable($from, $start, depth + 1);
  let openEnd = $to.depth > depth && joinable($end, $to, depth + 1);
  let content = [];
  addRange(null, $from, depth, content);
  if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
    checkJoin(openStart, openEnd);
    addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content);
  } else {
    if (openStart) addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content);
    addRange($start, $end, depth, content);
    if (openEnd) addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content);
}
function replaceTwoWay($from, $to, depth) {
  let content = [];
  addRange(null, $from, depth, content);
  if ($from.depth > depth) {
    let type = joinable($from, $to, depth + 1);
    addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content);
}
function prepareSliceForReplace(slice, $along) {
  let extra = $along.depth - slice.openStart,
    parent = $along.node(extra);
  let node = parent.copy(slice.content);
  for (let i = extra - 1; i >= 0; i--) node = $along.node(i).copy(Fragment.from(node));
  return {
    start: node.resolveNoCache(slice.openStart + extra),
    end: node.resolveNoCache(node.content.size - slice.openEnd - extra)
  };
}
var ResolvedPos = class {
  constructor(pos, path, parentOffset) {
    this.pos = pos;
    this.path = path;
    this.parentOffset = parentOffset;
    this.depth = path.length / 3 - 1;
  }
  resolveDepth(val) {
    if (val == null) return this.depth;
    if (val < 0) return this.depth + val;
    return val;
  }
  get parent() {
    return this.node(this.depth);
  }
  get doc() {
    return this.node(0);
  }
  node(depth) {
    return this.path[this.resolveDepth(depth) * 3];
  }
  index(depth) {
    return this.path[this.resolveDepth(depth) * 3 + 1];
  }
  indexAfter(depth) {
    depth = this.resolveDepth(depth);
    return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1);
  }
  start(depth) {
    depth = this.resolveDepth(depth);
    return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
  }
  end(depth) {
    depth = this.resolveDepth(depth);
    return this.start(depth) + this.node(depth).content.size;
  }
  before(depth) {
    depth = this.resolveDepth(depth);
    if (!depth) throw new RangeError("There is no position before the top-level node");
    return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1];
  }
  after(depth) {
    depth = this.resolveDepth(depth);
    if (!depth) throw new RangeError("There is no position after the top-level node");
    return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize;
  }
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  get nodeAfter() {
    let parent = this.parent,
      index = this.index(this.depth);
    if (index == parent.childCount) return null;
    let dOff = this.pos - this.path[this.path.length - 1],
      child = parent.child(index);
    return dOff ? parent.child(index).cut(dOff) : child;
  }
  get nodeBefore() {
    let index = this.index(this.depth);
    let dOff = this.pos - this.path[this.path.length - 1];
    if (dOff) return this.parent.child(index).cut(0, dOff);
    return index == 0 ? null : this.parent.child(index - 1);
  }
  posAtIndex(index, depth) {
    depth = this.resolveDepth(depth);
    let node = this.path[depth * 3],
      pos = depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
    for (let i = 0; i < index; i++) pos += node.child(i).nodeSize;
    return pos;
  }
  marks() {
    let parent = this.parent,
      index = this.index();
    if (parent.content.size == 0) return Mark.none;
    if (this.textOffset) return parent.child(index).marks;
    let main = parent.maybeChild(index - 1),
      other = parent.maybeChild(index);
    if (!main) {
      let tmp = main;
      main = other;
      other = tmp;
    }
    let marks = main.marks;
    for (var i = 0; i < marks.length; i++) if (marks[i].type.spec.inclusive === false && (!other || !marks[i].isInSet(other.marks))) marks = marks[i--].removeFromSet(marks);
    return marks;
  }
  marksAcross($end) {
    let after = this.parent.maybeChild(this.index());
    if (!after || !after.isInline) return null;
    let marks = after.marks,
      next = $end.parent.maybeChild($end.index());
    for (var i = 0; i < marks.length; i++) if (marks[i].type.spec.inclusive === false && (!next || !marks[i].isInSet(next.marks))) marks = marks[i--].removeFromSet(marks);
    return marks;
  }
  sharedDepth(pos) {
    for (let depth = this.depth; depth > 0; depth--) if (this.start(depth) <= pos && this.end(depth) >= pos) return depth;
    return 0;
  }
  blockRange(other = this, pred) {
    if (other.pos < this.pos) return other.blockRange(this);
    for (let d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--) if (other.pos <= this.end(d) && (!pred || pred(this.node(d)))) return new NodeRange(this, other, d);
    return null;
  }
  sameParent(other) {
    return this.pos - this.parentOffset == other.pos - other.parentOffset;
  }
  max(other) {
    return other.pos > this.pos ? other : this;
  }
  min(other) {
    return other.pos < this.pos ? other : this;
  }
  toString() {
    let str = "";
    for (let i = 1; i <= this.depth; i++) str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1);
    return str + ":" + this.parentOffset;
  }
  static resolve(doc2, pos) {
    if (!(pos >= 0 && pos <= doc2.content.size)) throw new RangeError("Position " + pos + " out of range");
    let path = [];
    let start = 0,
      parentOffset = pos;
    for (let node = doc2;;) {
      let {
        index,
        offset
      } = node.content.findIndex(parentOffset);
      let rem = parentOffset - offset;
      path.push(node, index, start + offset);
      if (!rem) break;
      node = node.child(index);
      if (node.isText) break;
      parentOffset = rem - 1;
      start += offset + 1;
    }
    return new ResolvedPos(pos, path, parentOffset);
  }
  static resolveCached(doc2, pos) {
    let cache = resolveCache.get(doc2);
    if (cache) {
      for (let i = 0; i < cache.elts.length; i++) {
        let elt = cache.elts[i];
        if (elt.pos == pos) return elt;
      }
    } else {
      resolveCache.set(doc2, cache = new ResolveCache());
    }
    let result = cache.elts[cache.i] = ResolvedPos.resolve(doc2, pos);
    cache.i = (cache.i + 1) % resolveCacheSize;
    return result;
  }
};
var ResolveCache = class {
  constructor() {
    this.elts = [];
    this.i = 0;
  }
};
var resolveCacheSize = 12,
  resolveCache = /* @__PURE__ */new WeakMap();
var NodeRange = class {
  constructor($from, $to, depth) {
    this.$from = $from;
    this.$to = $to;
    this.depth = depth;
  }
  get start() {
    return this.$from.before(this.depth + 1);
  }
  get end() {
    return this.$to.after(this.depth + 1);
  }
  get parent() {
    return this.$from.node(this.depth);
  }
  get startIndex() {
    return this.$from.index(this.depth);
  }
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
};
var emptyAttrs = /* @__PURE__ */Object.create(null);
var Node = class {
  constructor(type, attrs, content, marks = Mark.none) {
    this.type = type;
    this.attrs = attrs;
    this.marks = marks;
    this.content = content || Fragment.empty;
  }
  get children() {
    return this.content.content;
  }
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  get childCount() {
    return this.content.childCount;
  }
  child(index) {
    return this.content.child(index);
  }
  maybeChild(index) {
    return this.content.maybeChild(index);
  }
  forEach(f) {
    this.content.forEach(f);
  }
  nodesBetween(from, to, f, startPos = 0) {
    this.content.nodesBetween(from, to, f, startPos, this);
  }
  descendants(f) {
    this.nodesBetween(0, this.content.size, f);
  }
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  textBetween(from, to, blockSeparator, leafText) {
    return this.content.textBetween(from, to, blockSeparator, leafText);
  }
  get firstChild() {
    return this.content.firstChild;
  }
  get lastChild() {
    return this.content.lastChild;
  }
  eq(other) {
    return this == other || this.sameMarkup(other) && this.content.eq(other.content);
  }
  sameMarkup(other) {
    return this.hasMarkup(other.type, other.attrs, other.marks);
  }
  hasMarkup(type, attrs, marks) {
    return this.type == type && compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) && Mark.sameSet(this.marks, marks || Mark.none);
  }
  copy(content = null) {
    if (content == this.content) return this;
    return new Node(this.type, this.attrs, content, this.marks);
  }
  mark(marks) {
    return marks == this.marks ? this : new Node(this.type, this.attrs, this.content, marks);
  }
  cut(from, to = this.content.size) {
    if (from == 0 && to == this.content.size) return this;
    return this.copy(this.content.cut(from, to));
  }
  slice(from, to = this.content.size, includeParents = false) {
    if (from == to) return Slice.empty;
    let $from = this.resolve(from),
      $to = this.resolve(to);
    let depth = includeParents ? 0 : $from.sharedDepth(to);
    let start = $from.start(depth),
      node = $from.node(depth);
    let content = node.content.cut($from.pos - start, $to.pos - start);
    return new Slice(content, $from.depth - depth, $to.depth - depth);
  }
  replace(from, to, slice) {
    return replace(this.resolve(from), this.resolve(to), slice);
  }
  nodeAt(pos) {
    for (let node = this;;) {
      let {
        index,
        offset
      } = node.content.findIndex(pos);
      node = node.maybeChild(index);
      if (!node) return null;
      if (offset == pos || node.isText) return node;
      pos -= offset + 1;
    }
  }
  childAfter(pos) {
    let {
      index,
      offset
    } = this.content.findIndex(pos);
    return {
      node: this.content.maybeChild(index),
      index,
      offset
    };
  }
  childBefore(pos) {
    if (pos == 0) return {
      node: null,
      index: 0,
      offset: 0
    };
    let {
      index,
      offset
    } = this.content.findIndex(pos);
    if (offset < pos) return {
      node: this.content.child(index),
      index,
      offset
    };
    let node = this.content.child(index - 1);
    return {
      node,
      index: index - 1,
      offset: offset - node.nodeSize
    };
  }
  resolve(pos) {
    return ResolvedPos.resolveCached(this, pos);
  }
  resolveNoCache(pos) {
    return ResolvedPos.resolve(this, pos);
  }
  rangeHasMark(from, to, type) {
    let found2 = false;
    if (to > from) this.nodesBetween(from, to, node => {
      if (type.isInSet(node.marks)) found2 = true;
      return !found2;
    });
    return found2;
  }
  get isBlock() {
    return this.type.isBlock;
  }
  get isTextblock() {
    return this.type.isTextblock;
  }
  get inlineContent() {
    return this.type.inlineContent;
  }
  get isInline() {
    return this.type.isInline;
  }
  get isText() {
    return this.type.isText;
  }
  get isLeaf() {
    return this.type.isLeaf;
  }
  get isAtom() {
    return this.type.isAtom;
  }
  toString() {
    if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
    let name = this.type.name;
    if (this.content.size) name += "(" + this.content.toStringInner() + ")";
    return wrapMarks(this.marks, name);
  }
  contentMatchAt(index) {
    let match = this.type.contentMatch.matchFragment(this.content, 0, index);
    if (!match) throw new Error("Called contentMatchAt on a node with invalid content");
    return match;
  }
  canReplace(from, to, replacement = Fragment.empty, start = 0, end = replacement.childCount) {
    let one = this.contentMatchAt(from).matchFragment(replacement, start, end);
    let two = one && one.matchFragment(this.content, to);
    if (!two || !two.validEnd) return false;
    for (let i = start; i < end; i++) if (!this.type.allowsMarks(replacement.child(i).marks)) return false;
    return true;
  }
  canReplaceWith(from, to, type, marks) {
    if (marks && !this.type.allowsMarks(marks)) return false;
    let start = this.contentMatchAt(from).matchType(type);
    let end = start && start.matchFragment(this.content, to);
    return end ? end.validEnd : false;
  }
  canAppend(other) {
    if (other.content.size) return this.canReplace(this.childCount, this.childCount, other.content);else return this.type.compatibleContent(other.type);
  }
  check() {
    this.type.checkContent(this.content);
    this.type.checkAttrs(this.attrs);
    let copy2 = Mark.none;
    for (let i = 0; i < this.marks.length; i++) {
      let mark = this.marks[i];
      mark.type.checkAttrs(mark.attrs);
      copy2 = mark.addToSet(copy2);
    }
    if (!Mark.sameSet(copy2, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(m => m.type.name)}`);
    this.content.forEach(node => node.check());
  }
  toJSON() {
    let obj = {
      type: this.type.name
    };
    for (let _ in this.attrs) {
      obj.attrs = this.attrs;
      break;
    }
    if (this.content.size) obj.content = this.content.toJSON();
    if (this.marks.length) obj.marks = this.marks.map(n => n.toJSON());
    return obj;
  }
  static fromJSON(schema, json) {
    if (!json) throw new RangeError("Invalid input for Node.fromJSON");
    let marks = void 0;
    if (json.marks) {
      if (!Array.isArray(json.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
      marks = json.marks.map(schema.markFromJSON);
    }
    if (json.type == "text") {
      if (typeof json.text != "string") throw new RangeError("Invalid text node in JSON");
      return schema.text(json.text, marks);
    }
    let content = Fragment.fromJSON(schema, json.content);
    let node = schema.nodeType(json.type).create(json.attrs, content, marks);
    node.type.checkAttrs(node.attrs);
    return node;
  }
};
Node.prototype.text = void 0;
var TextNode = class extends Node {
  constructor(type, attrs, content, marks) {
    super(type, attrs, null, marks);
    if (!content) throw new RangeError("Empty text nodes are not allowed");
    this.text = content;
  }
  toString() {
    if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
    return wrapMarks(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(from, to) {
    return this.text.slice(from, to);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(marks) {
    return marks == this.marks ? this : new TextNode(this.type, this.attrs, this.text, marks);
  }
  withText(text) {
    if (text == this.text) return this;
    return new TextNode(this.type, this.attrs, text, this.marks);
  }
  cut(from = 0, to = this.text.length) {
    if (from == 0 && to == this.text.length) return this;
    return this.withText(this.text.slice(from, to));
  }
  eq(other) {
    return this.sameMarkup(other) && this.text == other.text;
  }
  toJSON() {
    let base = super.toJSON();
    base.text = this.text;
    return base;
  }
};
function wrapMarks(marks, str) {
  for (let i = marks.length - 1; i >= 0; i--) str = marks[i].type.name + "(" + str + ")";
  return str;
}
var ContentMatch = class {
  constructor(validEnd) {
    this.validEnd = validEnd;
    this.next = [];
    this.wrapCache = [];
  }
  static parse(string, nodeTypes) {
    let stream = new TokenStream(string, nodeTypes);
    if (stream.next == null) return ContentMatch.empty;
    let expr = parseExpr(stream);
    if (stream.next) stream.err("Unexpected trailing text");
    let match = dfa(nfa(expr));
    checkForDeadEnds(match, stream);
    return match;
  }
  matchType(type) {
    for (let i = 0; i < this.next.length; i++) if (this.next[i].type == type) return this.next[i].next;
    return null;
  }
  matchFragment(frag, start = 0, end = frag.childCount) {
    let cur = this;
    for (let i = start; cur && i < end; i++) cur = cur.matchType(frag.child(i).type);
    return cur;
  }
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  get defaultType() {
    for (let i = 0; i < this.next.length; i++) {
      let {
        type
      } = this.next[i];
      if (!(type.isText || type.hasRequiredAttrs())) return type;
    }
    return null;
  }
  compatible(other) {
    for (let i = 0; i < this.next.length; i++) for (let j = 0; j < other.next.length; j++) if (this.next[i].type == other.next[j].type) return true;
    return false;
  }
  fillBefore(after, toEnd = false, startIndex = 0) {
    let seen = [this];
    function search(match, types) {
      let finished = match.matchFragment(after, startIndex);
      if (finished && (!toEnd || finished.validEnd)) return Fragment.from(types.map(tp => tp.createAndFill()));
      for (let i = 0; i < match.next.length; i++) {
        let {
          type,
          next
        } = match.next[i];
        if (!(type.isText || type.hasRequiredAttrs()) && seen.indexOf(next) == -1) {
          seen.push(next);
          let found2 = search(next, types.concat(type));
          if (found2) return found2;
        }
      }
      return null;
    }
    return search(this, []);
  }
  findWrapping(target) {
    for (let i = 0; i < this.wrapCache.length; i += 2) if (this.wrapCache[i] == target) return this.wrapCache[i + 1];
    let computed = this.computeWrapping(target);
    this.wrapCache.push(target, computed);
    return computed;
  }
  computeWrapping(target) {
    let seen = /* @__PURE__ */Object.create(null),
      active = [{
        match: this,
        type: null,
        via: null
      }];
    while (active.length) {
      let current = active.shift(),
        match = current.match;
      if (match.matchType(target)) {
        let result = [];
        for (let obj = current; obj.type; obj = obj.via) result.push(obj.type);
        return result.reverse();
      }
      for (let i = 0; i < match.next.length; i++) {
        let {
          type,
          next
        } = match.next[i];
        if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in seen) && (!current.type || next.validEnd)) {
          active.push({
            match: type.contentMatch,
            type,
            via: current
          });
          seen[type.name] = true;
        }
      }
    }
    return null;
  }
  get edgeCount() {
    return this.next.length;
  }
  edge(n) {
    if (n >= this.next.length) throw new RangeError(`There's no ${n}th edge in this content match`);
    return this.next[n];
  }
  toString() {
    let seen = [];
    function scan(m) {
      seen.push(m);
      for (let i = 0; i < m.next.length; i++) if (seen.indexOf(m.next[i].next) == -1) scan(m.next[i].next);
    }
    scan(this);
    return seen.map((m, i) => {
      let out = i + (m.validEnd ? "*" : " ") + " ";
      for (let i2 = 0; i2 < m.next.length; i2++) out += (i2 ? ", " : "") + m.next[i2].type.name + "->" + seen.indexOf(m.next[i2].next);
      return out;
    }).join("\n");
  }
};
ContentMatch.empty = new ContentMatch(true);
var TokenStream = class {
  constructor(string, nodeTypes) {
    this.string = string;
    this.nodeTypes = nodeTypes;
    this.inline = null;
    this.pos = 0;
    this.tokens = string.split(/\s*(?=\b|\W|$)/);
    if (this.tokens[this.tokens.length - 1] == "") this.tokens.pop();
    if (this.tokens[0] == "") this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(tok) {
    return this.next == tok && (this.pos++ || true);
  }
  err(str) {
    throw new SyntaxError(str + " (in content expression '" + this.string + "')");
  }
};
function parseExpr(stream) {
  let exprs = [];
  do {
    exprs.push(parseExprSeq(stream));
  } while (stream.eat("|"));
  return exprs.length == 1 ? exprs[0] : {
    type: "choice",
    exprs
  };
}
function parseExprSeq(stream) {
  let exprs = [];
  do {
    exprs.push(parseExprSubscript(stream));
  } while (stream.next && stream.next != ")" && stream.next != "|");
  return exprs.length == 1 ? exprs[0] : {
    type: "seq",
    exprs
  };
}
function parseExprSubscript(stream) {
  let expr = parseExprAtom(stream);
  for (;;) {
    if (stream.eat("+")) expr = {
      type: "plus",
      expr
    };else if (stream.eat("*")) expr = {
      type: "star",
      expr
    };else if (stream.eat("?")) expr = {
      type: "opt",
      expr
    };else if (stream.eat("{")) expr = parseExprRange(stream, expr);else break;
  }
  return expr;
}
function parseNum(stream) {
  if (/\D/.test(stream.next)) stream.err("Expected number, got '" + stream.next + "'");
  let result = Number(stream.next);
  stream.pos++;
  return result;
}
function parseExprRange(stream, expr) {
  let min = parseNum(stream),
    max = min;
  if (stream.eat(",")) {
    if (stream.next != "}") max = parseNum(stream);else max = -1;
  }
  if (!stream.eat("}")) stream.err("Unclosed braced range");
  return {
    type: "range",
    min,
    max,
    expr
  };
}
function resolveName(stream, name) {
  let types = stream.nodeTypes,
    type = types[name];
  if (type) return [type];
  let result = [];
  for (let typeName in types) {
    let type2 = types[typeName];
    if (type2.isInGroup(name)) result.push(type2);
  }
  if (result.length == 0) stream.err("No node type or group '" + name + "' found");
  return result;
}
function parseExprAtom(stream) {
  if (stream.eat("(")) {
    let expr = parseExpr(stream);
    if (!stream.eat(")")) stream.err("Missing closing paren");
    return expr;
  } else if (!/\W/.test(stream.next)) {
    let exprs = resolveName(stream, stream.next).map(type => {
      if (stream.inline == null) stream.inline = type.isInline;else if (stream.inline != type.isInline) stream.err("Mixing inline and block content");
      return {
        type: "name",
        value: type
      };
    });
    stream.pos++;
    return exprs.length == 1 ? exprs[0] : {
      type: "choice",
      exprs
    };
  } else {
    stream.err("Unexpected token '" + stream.next + "'");
  }
}
function nfa(expr) {
  let nfa2 = [[]];
  connect(compile(expr, 0), node());
  return nfa2;
  function node() {
    return nfa2.push([]) - 1;
  }
  function edge(from, to, term) {
    let edge2 = {
      term,
      to
    };
    nfa2[from].push(edge2);
    return edge2;
  }
  function connect(edges, to) {
    edges.forEach(edge2 => edge2.to = to);
  }
  function compile(expr2, from) {
    if (expr2.type == "choice") {
      return expr2.exprs.reduce((out, expr3) => out.concat(compile(expr3, from)), []);
    } else if (expr2.type == "seq") {
      for (let i = 0;; i++) {
        let next = compile(expr2.exprs[i], from);
        if (i == expr2.exprs.length - 1) return next;
        connect(next, from = node());
      }
    } else if (expr2.type == "star") {
      let loop = node();
      edge(from, loop);
      connect(compile(expr2.expr, loop), loop);
      return [edge(loop)];
    } else if (expr2.type == "plus") {
      let loop = node();
      connect(compile(expr2.expr, from), loop);
      connect(compile(expr2.expr, loop), loop);
      return [edge(loop)];
    } else if (expr2.type == "opt") {
      return [edge(from)].concat(compile(expr2.expr, from));
    } else if (expr2.type == "range") {
      let cur = from;
      for (let i = 0; i < expr2.min; i++) {
        let next = node();
        connect(compile(expr2.expr, cur), next);
        cur = next;
      }
      if (expr2.max == -1) {
        connect(compile(expr2.expr, cur), cur);
      } else {
        for (let i = expr2.min; i < expr2.max; i++) {
          let next = node();
          edge(cur, next);
          connect(compile(expr2.expr, cur), next);
          cur = next;
        }
      }
      return [edge(cur)];
    } else if (expr2.type == "name") {
      return [edge(from, void 0, expr2.value)];
    } else {
      throw new Error("Unknown expr type");
    }
  }
}
function cmp(a, b) {
  return b - a;
}
function nullFrom(nfa2, node) {
  let result = [];
  scan(node);
  return result.sort(cmp);
  function scan(node2) {
    let edges = nfa2[node2];
    if (edges.length == 1 && !edges[0].term) return scan(edges[0].to);
    result.push(node2);
    for (let i = 0; i < edges.length; i++) {
      let {
        term,
        to
      } = edges[i];
      if (!term && result.indexOf(to) == -1) scan(to);
    }
  }
}
function dfa(nfa2) {
  let labeled = /* @__PURE__ */Object.create(null);
  return explore(nullFrom(nfa2, 0));
  function explore(states) {
    let out = [];
    states.forEach(node => {
      nfa2[node].forEach(({
        term,
        to
      }) => {
        if (!term) return;
        let set;
        for (let i = 0; i < out.length; i++) if (out[i][0] == term) set = out[i][1];
        nullFrom(nfa2, to).forEach(node2 => {
          if (!set) out.push([term, set = []]);
          if (set.indexOf(node2) == -1) set.push(node2);
        });
      });
    });
    let state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa2.length - 1) > -1);
    for (let i = 0; i < out.length; i++) {
      let states2 = out[i][1].sort(cmp);
      state.next.push({
        type: out[i][0],
        next: labeled[states2.join(",")] || explore(states2)
      });
    }
    return state;
  }
}
function checkForDeadEnds(match, stream) {
  for (let i = 0, work = [match]; i < work.length; i++) {
    let state = work[i],
      dead = !state.validEnd,
      nodes = [];
    for (let j = 0; j < state.next.length; j++) {
      let {
        type,
        next
      } = state.next[j];
      nodes.push(type.name);
      if (dead && !(type.isText || type.hasRequiredAttrs())) dead = false;
      if (work.indexOf(next) == -1) work.push(next);
    }
    if (dead) stream.err("Only non-generatable nodes (" + nodes.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function defaultAttrs(attrs) {
  let defaults = /* @__PURE__ */Object.create(null);
  for (let attrName in attrs) {
    let attr = attrs[attrName];
    if (!attr.hasDefault) return null;
    defaults[attrName] = attr.default;
  }
  return defaults;
}
function computeAttrs(attrs, value) {
  let built = /* @__PURE__ */Object.create(null);
  for (let name in attrs) {
    let given = value && value[name];
    if (given === void 0) {
      let attr = attrs[name];
      if (attr.hasDefault) given = attr.default;else throw new RangeError("No value supplied for attribute " + name);
    }
    built[name] = given;
  }
  return built;
}
function checkAttrs(attrs, values, type, name) {
  for (let name2 in values) if (!(name2 in attrs)) throw new RangeError(`Unsupported attribute ${name2} for ${type} of type ${name2}`);
  for (let name2 in attrs) {
    let attr = attrs[name2];
    if (attr.validate) attr.validate(values[name2]);
  }
}
function initAttrs(typeName, attrs) {
  let result = /* @__PURE__ */Object.create(null);
  if (attrs) for (let name in attrs) result[name] = new Attribute(typeName, name, attrs[name]);
  return result;
}
var NodeType = class {
  constructor(name, schema, spec) {
    this.name = name;
    this.schema = schema;
    this.spec = spec;
    this.markSet = null;
    this.groups = spec.group ? spec.group.split(" ") : [];
    this.attrs = initAttrs(name, spec.attrs);
    this.defaultAttrs = defaultAttrs(this.attrs);
    this.contentMatch = null;
    this.inlineContent = null;
    this.isBlock = !(spec.inline || name == "text");
    this.isText = name == "text";
  }
  get isInline() {
    return !this.isBlock;
  }
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  get isLeaf() {
    return this.contentMatch == ContentMatch.empty;
  }
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  isInGroup(group) {
    return this.groups.indexOf(group) > -1;
  }
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  hasRequiredAttrs() {
    for (let n in this.attrs) if (this.attrs[n].isRequired) return true;
    return false;
  }
  compatibleContent(other) {
    return this == other || this.contentMatch.compatible(other.contentMatch);
  }
  computeAttrs(attrs) {
    if (!attrs && this.defaultAttrs) return this.defaultAttrs;else return computeAttrs(this.attrs, attrs);
  }
  create(attrs = null, content, marks) {
    if (this.isText) throw new Error("NodeType.create can't construct text nodes");
    return new Node(this, this.computeAttrs(attrs), Fragment.from(content), Mark.setFrom(marks));
  }
  createChecked(attrs = null, content, marks) {
    content = Fragment.from(content);
    this.checkContent(content);
    return new Node(this, this.computeAttrs(attrs), content, Mark.setFrom(marks));
  }
  createAndFill(attrs = null, content, marks) {
    attrs = this.computeAttrs(attrs);
    content = Fragment.from(content);
    if (content.size) {
      let before = this.contentMatch.fillBefore(content);
      if (!before) return null;
      content = before.append(content);
    }
    let matched = this.contentMatch.matchFragment(content);
    let after = matched && matched.fillBefore(Fragment.empty, true);
    if (!after) return null;
    return new Node(this, attrs, content.append(after), Mark.setFrom(marks));
  }
  validContent(content) {
    let result = this.contentMatch.matchFragment(content);
    if (!result || !result.validEnd) return false;
    for (let i = 0; i < content.childCount; i++) if (!this.allowsMarks(content.child(i).marks)) return false;
    return true;
  }
  checkContent(content) {
    if (!this.validContent(content)) throw new RangeError(`Invalid content for node ${this.name}: ${content.toString().slice(0, 50)}`);
  }
  checkAttrs(attrs) {
    checkAttrs(this.attrs, attrs, "node", this.name);
  }
  allowsMarkType(markType) {
    return this.markSet == null || this.markSet.indexOf(markType) > -1;
  }
  allowsMarks(marks) {
    if (this.markSet == null) return true;
    for (let i = 0; i < marks.length; i++) if (!this.allowsMarkType(marks[i].type)) return false;
    return true;
  }
  allowedMarks(marks) {
    if (this.markSet == null) return marks;
    let copy2;
    for (let i = 0; i < marks.length; i++) {
      if (!this.allowsMarkType(marks[i].type)) {
        if (!copy2) copy2 = marks.slice(0, i);
      } else if (copy2) {
        copy2.push(marks[i]);
      }
    }
    return !copy2 ? marks : copy2.length ? copy2 : Mark.none;
  }
  static compile(nodes, schema) {
    let result = /* @__PURE__ */Object.create(null);
    nodes.forEach((name, spec) => result[name] = new NodeType(name, schema, spec));
    let topType = schema.spec.topNode || "doc";
    if (!result[topType]) throw new RangeError("Schema is missing its top node type ('" + topType + "')");
    if (!result.text) throw new RangeError("Every schema needs a 'text' type");
    for (let _ in result.text.attrs) throw new RangeError("The text node type should not have attributes");
    return result;
  }
};
function validateType(typeName, attrName, type) {
  let types = type.split("|");
  return value => {
    let name = value === null ? "null" : typeof value;
    if (types.indexOf(name) < 0) throw new RangeError(`Expected value of type ${types} for attribute ${attrName} on type ${typeName}, got ${name}`);
  };
}
var Attribute = class {
  constructor(typeName, attrName, options) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default");
    this.default = options.default;
    this.validate = typeof options.validate == "string" ? validateType(typeName, attrName, options.validate) : options.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
};
var MarkType = class {
  constructor(name, rank, schema, spec) {
    this.name = name;
    this.rank = rank;
    this.schema = schema;
    this.spec = spec;
    this.attrs = initAttrs(name, spec.attrs);
    this.excluded = null;
    let defaults = defaultAttrs(this.attrs);
    this.instance = defaults ? new Mark(this, defaults) : null;
  }
  create(attrs = null) {
    if (!attrs && this.instance) return this.instance;
    return new Mark(this, computeAttrs(this.attrs, attrs));
  }
  static compile(marks, schema) {
    let result = /* @__PURE__ */Object.create(null),
      rank = 0;
    marks.forEach((name, spec) => result[name] = new MarkType(name, rank++, schema, spec));
    return result;
  }
  removeFromSet(set) {
    for (var i = 0; i < set.length; i++) if (set[i].type == this) {
      set = set.slice(0, i).concat(set.slice(i + 1));
      i--;
    }
    return set;
  }
  isInSet(set) {
    for (let i = 0; i < set.length; i++) if (set[i].type == this) return set[i];
  }
  checkAttrs(attrs) {
    checkAttrs(this.attrs, attrs, "mark", this.name);
  }
  excludes(other) {
    return this.excluded.indexOf(other) > -1;
  }
};
var Schema = class {
  constructor(spec) {
    this.linebreakReplacement = null;
    this.cached = /* @__PURE__ */Object.create(null);
    let instanceSpec = this.spec = {};
    for (let prop in spec) instanceSpec[prop] = spec[prop];
    instanceSpec.nodes = import_orderedmap.default.from(spec.nodes), instanceSpec.marks = import_orderedmap.default.from(spec.marks || {}), this.nodes = NodeType.compile(this.spec.nodes, this);
    this.marks = MarkType.compile(this.spec.marks, this);
    let contentExprCache = /* @__PURE__ */Object.create(null);
    for (let prop in this.nodes) {
      if (prop in this.marks) throw new RangeError(prop + " can not be both a node and a mark");
      let type = this.nodes[prop],
        contentExpr = type.spec.content || "",
        markExpr = type.spec.marks;
      type.contentMatch = contentExprCache[contentExpr] || (contentExprCache[contentExpr] = ContentMatch.parse(contentExpr, this.nodes));
      type.inlineContent = type.contentMatch.inlineContent;
      if (type.spec.linebreakReplacement) {
        if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
        if (!type.isInline || !type.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = type;
      }
      type.markSet = markExpr == "_" ? null : markExpr ? gatherMarks(this, markExpr.split(" ")) : markExpr == "" || !type.inlineContent ? [] : null;
    }
    for (let prop in this.marks) {
      let type = this.marks[prop],
        excl = type.spec.excludes;
      type.excluded = excl == null ? [type] : excl == "" ? [] : gatherMarks(this, excl.split(" "));
    }
    this.nodeFromJSON = json => Node.fromJSON(this, json);
    this.markFromJSON = json => Mark.fromJSON(this, json);
    this.topNodeType = this.nodes[this.spec.topNode || "doc"];
    this.cached.wrappings = /* @__PURE__ */Object.create(null);
  }
  node(type, attrs = null, content, marks) {
    if (typeof type == "string") type = this.nodeType(type);else if (!(type instanceof NodeType)) throw new RangeError("Invalid node type: " + type);else if (type.schema != this) throw new RangeError("Node type from different schema used (" + type.name + ")");
    return type.createChecked(attrs, content, marks);
  }
  text(text, marks) {
    let type = this.nodes.text;
    return new TextNode(type, type.defaultAttrs, text, Mark.setFrom(marks));
  }
  mark(type, attrs) {
    if (typeof type == "string") type = this.marks[type];
    return type.create(attrs);
  }
  nodeType(name) {
    let found2 = this.nodes[name];
    if (!found2) throw new RangeError("Unknown node type: " + name);
    return found2;
  }
};
function gatherMarks(schema, marks) {
  let found2 = [];
  for (let i = 0; i < marks.length; i++) {
    let name = marks[i],
      mark = schema.marks[name],
      ok = mark;
    if (mark) {
      found2.push(mark);
    } else {
      for (let prop in schema.marks) {
        let mark2 = schema.marks[prop];
        if (name == "_" || mark2.spec.group && mark2.spec.group.split(" ").indexOf(name) > -1) found2.push(ok = mark2);
      }
    }
    if (!ok) throw new SyntaxError("Unknown mark type: '" + marks[i] + "'");
  }
  return found2;
}
function isTagRule(rule) {
  return rule.tag != null;
}
function isStyleRule(rule) {
  return rule.style != null;
}
var DOMParser = class {
  constructor(schema, rules) {
    this.schema = schema;
    this.rules = rules;
    this.tags = [];
    this.styles = [];
    let matchedStyles = this.matchedStyles = [];
    rules.forEach(rule => {
      if (isTagRule(rule)) {
        this.tags.push(rule);
      } else if (isStyleRule(rule)) {
        let prop = /[^=]*/.exec(rule.style)[0];
        if (matchedStyles.indexOf(prop) < 0) matchedStyles.push(prop);
        this.styles.push(rule);
      }
    });
    this.normalizeLists = !this.tags.some(r => {
      if (!/^(ul|ol)\b/.test(r.tag) || !r.node) return false;
      let node = schema.nodes[r.node];
      return node.contentMatch.matchType(node);
    });
  }
  parse(dom, options = {}) {
    let context = new ParseContext(this, options, false);
    context.addAll(dom, Mark.none, options.from, options.to);
    return context.finish();
  }
  parseSlice(dom, options = {}) {
    let context = new ParseContext(this, options, true);
    context.addAll(dom, Mark.none, options.from, options.to);
    return Slice.maxOpen(context.finish());
  }
  matchTag(dom, context, after) {
    for (let i = after ? this.tags.indexOf(after) + 1 : 0; i < this.tags.length; i++) {
      let rule = this.tags[i];
      if (matches(dom, rule.tag) && (rule.namespace === void 0 || dom.namespaceURI == rule.namespace) && (!rule.context || context.matchesContext(rule.context))) {
        if (rule.getAttrs) {
          let result = rule.getAttrs(dom);
          if (result === false) continue;
          rule.attrs = result || void 0;
        }
        return rule;
      }
    }
  }
  matchStyle(prop, value, context, after) {
    for (let i = after ? this.styles.indexOf(after) + 1 : 0; i < this.styles.length; i++) {
      let rule = this.styles[i],
        style = rule.style;
      if (style.indexOf(prop) != 0 || rule.context && !context.matchesContext(rule.context) || style.length > prop.length && (style.charCodeAt(prop.length) != 61 || style.slice(prop.length + 1) != value)) continue;
      if (rule.getAttrs) {
        let result = rule.getAttrs(value);
        if (result === false) continue;
        rule.attrs = result || void 0;
      }
      return rule;
    }
  }
  static schemaRules(schema) {
    let result = [];
    function insert(rule) {
      let priority = rule.priority == null ? 50 : rule.priority,
        i = 0;
      for (; i < result.length; i++) {
        let next = result[i],
          nextPriority = next.priority == null ? 50 : next.priority;
        if (nextPriority < priority) break;
      }
      result.splice(i, 0, rule);
    }
    for (let name in schema.marks) {
      let rules = schema.marks[name].spec.parseDOM;
      if (rules) rules.forEach(rule => {
        insert(rule = copy(rule));
        if (!(rule.mark || rule.ignore || rule.clearMark)) rule.mark = name;
      });
    }
    for (let name in schema.nodes) {
      let rules = schema.nodes[name].spec.parseDOM;
      if (rules) rules.forEach(rule => {
        insert(rule = copy(rule));
        if (!(rule.node || rule.ignore || rule.mark)) rule.node = name;
      });
    }
    return result;
  }
  static fromSchema(schema) {
    return schema.cached.domParser || (schema.cached.domParser = new DOMParser(schema, DOMParser.schemaRules(schema)));
  }
};
var blockTags = {
  address: true,
  article: true,
  aside: true,
  blockquote: true,
  canvas: true,
  dd: true,
  div: true,
  dl: true,
  fieldset: true,
  figcaption: true,
  figure: true,
  footer: true,
  form: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  header: true,
  hgroup: true,
  hr: true,
  li: true,
  noscript: true,
  ol: true,
  output: true,
  p: true,
  pre: true,
  section: true,
  table: true,
  tfoot: true,
  ul: true
};
var ignoreTags = {
  head: true,
  noscript: true,
  object: true,
  script: true,
  style: true,
  title: true
};
var listTags = {
  ol: true,
  ul: true
};
var OPT_PRESERVE_WS = 1,
  OPT_PRESERVE_WS_FULL = 2,
  OPT_OPEN_LEFT = 4;
function wsOptionsFor(type, preserveWhitespace, base) {
  if (preserveWhitespace != null) return (preserveWhitespace ? OPT_PRESERVE_WS : 0) | (preserveWhitespace === "full" ? OPT_PRESERVE_WS_FULL : 0);
  return type && type.whitespace == "pre" ? OPT_PRESERVE_WS | OPT_PRESERVE_WS_FULL : base & ~OPT_OPEN_LEFT;
}
var NodeContext = class {
  constructor(type, attrs, marks, solid, match, options) {
    this.type = type;
    this.attrs = attrs;
    this.marks = marks;
    this.solid = solid;
    this.options = options;
    this.content = [];
    this.activeMarks = Mark.none;
    this.match = match || (options & OPT_OPEN_LEFT ? null : type.contentMatch);
  }
  findWrapping(node) {
    if (!this.match) {
      if (!this.type) return [];
      let fill = this.type.contentMatch.fillBefore(Fragment.from(node));
      if (fill) {
        this.match = this.type.contentMatch.matchFragment(fill);
      } else {
        let start = this.type.contentMatch,
          wrap;
        if (wrap = start.findWrapping(node.type)) {
          this.match = start;
          return wrap;
        } else {
          return null;
        }
      }
    }
    return this.match.findWrapping(node.type);
  }
  finish(openEnd) {
    if (!(this.options & OPT_PRESERVE_WS)) {
      let last = this.content[this.content.length - 1],
        m;
      if (last && last.isText && (m = /[ \t\r\n\u000c]+$/.exec(last.text))) {
        let text = last;
        if (last.text.length == m[0].length) this.content.pop();else this.content[this.content.length - 1] = text.withText(text.text.slice(0, text.text.length - m[0].length));
      }
    }
    let content = Fragment.from(this.content);
    if (!openEnd && this.match) content = content.append(this.match.fillBefore(Fragment.empty, true));
    return this.type ? this.type.create(this.attrs, content, this.marks) : content;
  }
  inlineContext(node) {
    if (this.type) return this.type.inlineContent;
    if (this.content.length) return this.content[0].isInline;
    return node.parentNode && !blockTags.hasOwnProperty(node.parentNode.nodeName.toLowerCase());
  }
};
var ParseContext = class {
  constructor(parser, options, isOpen) {
    this.parser = parser;
    this.options = options;
    this.isOpen = isOpen;
    this.open = 0;
    this.localPreserveWS = false;
    let topNode = options.topNode,
      topContext;
    let topOptions = wsOptionsFor(null, options.preserveWhitespace, 0) | (isOpen ? OPT_OPEN_LEFT : 0);
    if (topNode) topContext = new NodeContext(topNode.type, topNode.attrs, Mark.none, true, options.topMatch || topNode.type.contentMatch, topOptions);else if (isOpen) topContext = new NodeContext(null, null, Mark.none, true, null, topOptions);else topContext = new NodeContext(parser.schema.topNodeType, null, Mark.none, true, null, topOptions);
    this.nodes = [topContext];
    this.find = options.findPositions;
    this.needsBlock = false;
  }
  get top() {
    return this.nodes[this.open];
  }
  addDOM(dom, marks) {
    if (dom.nodeType == 3) this.addTextNode(dom, marks);else if (dom.nodeType == 1) this.addElement(dom, marks);
  }
  addTextNode(dom, marks) {
    let value = dom.nodeValue;
    let top = this.top,
      preserveWS = top.options & OPT_PRESERVE_WS_FULL ? "full" : this.localPreserveWS || (top.options & OPT_PRESERVE_WS) > 0;
    if (preserveWS === "full" || top.inlineContext(dom) || /[^ \t\r\n\u000c]/.test(value)) {
      if (!preserveWS) {
        value = value.replace(/[ \t\r\n\u000c]+/g, " ");
        if (/^[ \t\r\n\u000c]/.test(value) && this.open == this.nodes.length - 1) {
          let nodeBefore = top.content[top.content.length - 1];
          let domNodeBefore = dom.previousSibling;
          if (!nodeBefore || domNodeBefore && domNodeBefore.nodeName == "BR" || nodeBefore.isText && /[ \t\r\n\u000c]$/.test(nodeBefore.text)) value = value.slice(1);
        }
      } else if (preserveWS !== "full") {
        value = value.replace(/\r?\n|\r/g, " ");
      } else {
        value = value.replace(/\r\n?/g, "\n");
      }
      if (value) this.insertNode(this.parser.schema.text(value), marks, !/\S/.test(value));
      this.findInText(dom);
    } else {
      this.findInside(dom);
    }
  }
  addElement(dom, marks, matchAfter) {
    let outerWS = this.localPreserveWS,
      top = this.top;
    if (dom.tagName == "PRE" || /pre/.test(dom.style && dom.style.whiteSpace)) this.localPreserveWS = true;
    let name = dom.nodeName.toLowerCase(),
      ruleID;
    if (listTags.hasOwnProperty(name) && this.parser.normalizeLists) normalizeList(dom);
    let rule = this.options.ruleFromNode && this.options.ruleFromNode(dom) || (ruleID = this.parser.matchTag(dom, this, matchAfter));
    out: if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) {
      this.findInside(dom);
      this.ignoreFallback(dom, marks);
    } else if (!rule || rule.skip || rule.closeParent) {
      if (rule && rule.closeParent) this.open = Math.max(0, this.open - 1);else if (rule && rule.skip.nodeType) dom = rule.skip;
      let sync,
        oldNeedsBlock = this.needsBlock;
      if (blockTags.hasOwnProperty(name)) {
        if (top.content.length && top.content[0].isInline && this.open) {
          this.open--;
          top = this.top;
        }
        sync = true;
        if (!top.type) this.needsBlock = true;
      } else if (!dom.firstChild) {
        this.leafFallback(dom, marks);
        break out;
      }
      let innerMarks = rule && rule.skip ? marks : this.readStyles(dom, marks);
      if (innerMarks) this.addAll(dom, innerMarks);
      if (sync) this.sync(top);
      this.needsBlock = oldNeedsBlock;
    } else {
      let innerMarks = this.readStyles(dom, marks);
      if (innerMarks) this.addElementByRule(dom, rule, innerMarks, rule.consuming === false ? ruleID : void 0);
    }
    this.localPreserveWS = outerWS;
  }
  leafFallback(dom, marks) {
    if (dom.nodeName == "BR" && this.top.type && this.top.type.inlineContent) this.addTextNode(dom.ownerDocument.createTextNode("\n"), marks);
  }
  ignoreFallback(dom, marks) {
    if (dom.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent)) this.findPlace(this.parser.schema.text("-"), marks, true);
  }
  readStyles(dom, marks) {
    let styles = dom.style;
    if (styles && styles.length) for (let i = 0; i < this.parser.matchedStyles.length; i++) {
      let name = this.parser.matchedStyles[i],
        value = styles.getPropertyValue(name);
      if (value) for (let after = void 0;;) {
        let rule = this.parser.matchStyle(name, value, this, after);
        if (!rule) break;
        if (rule.ignore) return null;
        if (rule.clearMark) marks = marks.filter(m => !rule.clearMark(m));else marks = marks.concat(this.parser.schema.marks[rule.mark].create(rule.attrs));
        if (rule.consuming === false) after = rule;else break;
      }
    }
    return marks;
  }
  addElementByRule(dom, rule, marks, continueAfter) {
    let sync, nodeType;
    if (rule.node) {
      nodeType = this.parser.schema.nodes[rule.node];
      if (!nodeType.isLeaf) {
        let inner = this.enter(nodeType, rule.attrs || null, marks, rule.preserveWhitespace);
        if (inner) {
          sync = true;
          marks = inner;
        }
      } else if (!this.insertNode(nodeType.create(rule.attrs), marks, dom.nodeName == "BR")) {
        this.leafFallback(dom, marks);
      }
    } else {
      let markType = this.parser.schema.marks[rule.mark];
      marks = marks.concat(markType.create(rule.attrs));
    }
    let startIn = this.top;
    if (nodeType && nodeType.isLeaf) {
      this.findInside(dom);
    } else if (continueAfter) {
      this.addElement(dom, marks, continueAfter);
    } else if (rule.getContent) {
      this.findInside(dom);
      rule.getContent(dom, this.parser.schema).forEach(node => this.insertNode(node, marks, false));
    } else {
      let contentDOM = dom;
      if (typeof rule.contentElement == "string") contentDOM = dom.querySelector(rule.contentElement);else if (typeof rule.contentElement == "function") contentDOM = rule.contentElement(dom);else if (rule.contentElement) contentDOM = rule.contentElement;
      this.findAround(dom, contentDOM, true);
      this.addAll(contentDOM, marks);
      this.findAround(dom, contentDOM, false);
    }
    if (sync && this.sync(startIn)) this.open--;
  }
  addAll(parent, marks, startIndex, endIndex) {
    let index = startIndex || 0;
    for (let dom = startIndex ? parent.childNodes[startIndex] : parent.firstChild, end = endIndex == null ? null : parent.childNodes[endIndex]; dom != end; dom = dom.nextSibling, ++index) {
      this.findAtPoint(parent, index);
      this.addDOM(dom, marks);
    }
    this.findAtPoint(parent, index);
  }
  findPlace(node, marks, cautious) {
    let route, sync;
    for (let depth = this.open, penalty = 0; depth >= 0; depth--) {
      let cx = this.nodes[depth];
      let found2 = cx.findWrapping(node);
      if (found2 && (!route || route.length > found2.length + penalty)) {
        route = found2;
        sync = cx;
        if (!found2.length) break;
      }
      if (cx.solid) {
        if (cautious) break;
        penalty += 2;
      }
    }
    if (!route) return null;
    this.sync(sync);
    for (let i = 0; i < route.length; i++) marks = this.enterInner(route[i], null, marks, false);
    return marks;
  }
  insertNode(node, marks, cautious) {
    if (node.isInline && this.needsBlock && !this.top.type) {
      let block = this.textblockFromContext();
      if (block) marks = this.enterInner(block, null, marks);
    }
    let innerMarks = this.findPlace(node, marks, cautious);
    if (innerMarks) {
      this.closeExtra();
      let top = this.top;
      if (top.match) top.match = top.match.matchType(node.type);
      let nodeMarks = Mark.none;
      for (let m of innerMarks.concat(node.marks)) if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, node.type)) nodeMarks = m.addToSet(nodeMarks);
      top.content.push(node.mark(nodeMarks));
      return true;
    }
    return false;
  }
  enter(type, attrs, marks, preserveWS) {
    let innerMarks = this.findPlace(type.create(attrs), marks, false);
    if (innerMarks) innerMarks = this.enterInner(type, attrs, marks, true, preserveWS);
    return innerMarks;
  }
  enterInner(type, attrs, marks, solid = false, preserveWS) {
    this.closeExtra();
    let top = this.top;
    top.match = top.match && top.match.matchType(type);
    let options = wsOptionsFor(type, preserveWS, top.options);
    if (top.options & OPT_OPEN_LEFT && top.content.length == 0) options |= OPT_OPEN_LEFT;
    let applyMarks = Mark.none;
    marks = marks.filter(m => {
      if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, type)) {
        applyMarks = m.addToSet(applyMarks);
        return false;
      }
      return true;
    });
    this.nodes.push(new NodeContext(type, attrs, applyMarks, solid, null, options));
    this.open++;
    return marks;
  }
  closeExtra(openEnd = false) {
    let i = this.nodes.length - 1;
    if (i > this.open) {
      for (; i > this.open; i--) this.nodes[i - 1].content.push(this.nodes[i].finish(openEnd));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    this.open = 0;
    this.closeExtra(this.isOpen);
    return this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(to) {
    for (let i = this.open; i >= 0; i--) {
      if (this.nodes[i] == to) {
        this.open = i;
        return true;
      } else if (this.localPreserveWS) {
        this.nodes[i].options |= OPT_PRESERVE_WS;
      }
    }
    return false;
  }
  get currentPos() {
    this.closeExtra();
    let pos = 0;
    for (let i = this.open; i >= 0; i--) {
      let content = this.nodes[i].content;
      for (let j = content.length - 1; j >= 0; j--) pos += content[j].nodeSize;
      if (i) pos++;
    }
    return pos;
  }
  findAtPoint(parent, offset) {
    if (this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].node == parent && this.find[i].offset == offset) this.find[i].pos = this.currentPos;
    }
  }
  findInside(parent) {
    if (this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) this.find[i].pos = this.currentPos;
    }
  }
  findAround(parent, content, before) {
    if (parent != content && this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
        let pos = content.compareDocumentPosition(this.find[i].node);
        if (pos & (before ? 2 : 4)) this.find[i].pos = this.currentPos;
      }
    }
  }
  findInText(textNode) {
    if (this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].node == textNode) this.find[i].pos = this.currentPos - (textNode.nodeValue.length - this.find[i].offset);
    }
  }
  matchesContext(context) {
    if (context.indexOf("|") > -1) return context.split(/\s*\|\s*/).some(this.matchesContext, this);
    let parts = context.split("/");
    let option = this.options.context;
    let useRoot = !this.isOpen && (!option || option.parent.type == this.nodes[0].type);
    let minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1);
    let match = (i, depth) => {
      for (; i >= 0; i--) {
        let part = parts[i];
        if (part == "") {
          if (i == parts.length - 1 || i == 0) continue;
          for (; depth >= minDepth; depth--) if (match(i - 1, depth)) return true;
          return false;
        } else {
          let next = depth > 0 || depth == 0 && useRoot ? this.nodes[depth].type : option && depth >= minDepth ? option.node(depth - minDepth).type : null;
          if (!next || next.name != part && !next.isInGroup(part)) return false;
          depth--;
        }
      }
      return true;
    };
    return match(parts.length - 1, this.open);
  }
  textblockFromContext() {
    let $context = this.options.context;
    if ($context) for (let d = $context.depth; d >= 0; d--) {
      let deflt = $context.node(d).contentMatchAt($context.indexAfter(d)).defaultType;
      if (deflt && deflt.isTextblock && deflt.defaultAttrs) return deflt;
    }
    for (let name in this.parser.schema.nodes) {
      let type = this.parser.schema.nodes[name];
      if (type.isTextblock && type.defaultAttrs) return type;
    }
  }
};
function normalizeList(dom) {
  for (let child = dom.firstChild, prevItem = null; child; child = child.nextSibling) {
    let name = child.nodeType == 1 ? child.nodeName.toLowerCase() : null;
    if (name && listTags.hasOwnProperty(name) && prevItem) {
      prevItem.appendChild(child);
      child = prevItem;
    } else if (name == "li") {
      prevItem = child;
    } else if (name) {
      prevItem = null;
    }
  }
}
function matches(dom, selector) {
  return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector);
}
function copy(obj) {
  let copy2 = {};
  for (let prop in obj) copy2[prop] = obj[prop];
  return copy2;
}
function markMayApply(markType, nodeType) {
  let nodes = nodeType.schema.nodes;
  for (let name in nodes) {
    let parent = nodes[name];
    if (!parent.allowsMarkType(markType)) continue;
    let seen = [],
      scan = match => {
        seen.push(match);
        for (let i = 0; i < match.edgeCount; i++) {
          let {
            type,
            next
          } = match.edge(i);
          if (type == nodeType) return true;
          if (seen.indexOf(next) < 0 && scan(next)) return true;
        }
      };
    if (scan(parent.contentMatch)) return true;
  }
}
var DOMSerializer = class {
  constructor(nodes, marks) {
    this.nodes = nodes;
    this.marks = marks;
  }
  serializeFragment(fragment, options = {}, target) {
    if (!target) target = doc(options).createDocumentFragment();
    let top = target,
      active = [];
    fragment.forEach(node => {
      if (active.length || node.marks.length) {
        let keep = 0,
          rendered = 0;
        while (keep < active.length && rendered < node.marks.length) {
          let next = node.marks[rendered];
          if (!this.marks[next.type.name]) {
            rendered++;
            continue;
          }
          if (!next.eq(active[keep][0]) || next.type.spec.spanning === false) break;
          keep++;
          rendered++;
        }
        while (keep < active.length) top = active.pop()[1];
        while (rendered < node.marks.length) {
          let add = node.marks[rendered++];
          let markDOM = this.serializeMark(add, node.isInline, options);
          if (markDOM) {
            active.push([add, top]);
            top.appendChild(markDOM.dom);
            top = markDOM.contentDOM || markDOM.dom;
          }
        }
      }
      top.appendChild(this.serializeNodeInner(node, options));
    });
    return target;
  }
  serializeNodeInner(node, options) {
    let {
      dom,
      contentDOM
    } = renderSpec(doc(options), this.nodes[node.type.name](node), null, node.attrs);
    if (contentDOM) {
      if (node.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(node.content, options, contentDOM);
    }
    return dom;
  }
  serializeNode(node, options = {}) {
    let dom = this.serializeNodeInner(node, options);
    for (let i = node.marks.length - 1; i >= 0; i--) {
      let wrap = this.serializeMark(node.marks[i], node.isInline, options);
      if (wrap) {
        (wrap.contentDOM || wrap.dom).appendChild(dom);
        dom = wrap.dom;
      }
    }
    return dom;
  }
  serializeMark(mark, inline, options = {}) {
    let toDOM = this.marks[mark.type.name];
    return toDOM && renderSpec(doc(options), toDOM(mark, inline), null, mark.attrs);
  }
  static renderSpec(doc2, structure, xmlNS = null, blockArraysIn) {
    return renderSpec(doc2, structure, xmlNS, blockArraysIn);
  }
  static fromSchema(schema) {
    return schema.cached.domSerializer || (schema.cached.domSerializer = new DOMSerializer(this.nodesFromSchema(schema), this.marksFromSchema(schema)));
  }
  static nodesFromSchema(schema) {
    let result = gatherToDOM(schema.nodes);
    if (!result.text) result.text = node => node.text;
    return result;
  }
  static marksFromSchema(schema) {
    return gatherToDOM(schema.marks);
  }
};
function gatherToDOM(obj) {
  let result = {};
  for (let name in obj) {
    let toDOM = obj[name].spec.toDOM;
    if (toDOM) result[name] = toDOM;
  }
  return result;
}
function doc(options) {
  return options.document || window.document;
}
var suspiciousAttributeCache = /* @__PURE__ */new WeakMap();
function suspiciousAttributes(attrs) {
  let value = suspiciousAttributeCache.get(attrs);
  if (value === void 0) suspiciousAttributeCache.set(attrs, value = suspiciousAttributesInner(attrs));
  return value;
}
function suspiciousAttributesInner(attrs) {
  let result = null;
  function scan(value) {
    if (value && typeof value == "object") {
      if (Array.isArray(value)) {
        if (typeof value[0] == "string") {
          if (!result) result = [];
          result.push(value);
        } else {
          for (let i = 0; i < value.length; i++) scan(value[i]);
        }
      } else {
        for (let prop in value) scan(value[prop]);
      }
    }
  }
  scan(attrs);
  return result;
}
function renderSpec(doc2, structure, xmlNS, blockArraysIn) {
  if (typeof structure == "string") return {
    dom: doc2.createTextNode(structure)
  };
  if (structure.nodeType != null) return {
    dom: structure
  };
  if (structure.dom && structure.dom.nodeType != null) return structure;
  let tagName = structure[0],
    suspicious;
  if (typeof tagName != "string") throw new RangeError("Invalid array passed to renderSpec");
  if (blockArraysIn && (suspicious = suspiciousAttributes(blockArraysIn)) && suspicious.indexOf(structure) > -1) throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let space = tagName.indexOf(" ");
  if (space > 0) {
    xmlNS = tagName.slice(0, space);
    tagName = tagName.slice(space + 1);
  }
  let contentDOM;
  let dom = xmlNS ? doc2.createElementNS(xmlNS, tagName) : doc2.createElement(tagName);
  let attrs = structure[1],
    start = 1;
  if (attrs && typeof attrs == "object" && attrs.nodeType == null && !Array.isArray(attrs)) {
    start = 2;
    for (let name in attrs) if (attrs[name] != null) {
      let space2 = name.indexOf(" ");
      if (space2 > 0) dom.setAttributeNS(name.slice(0, space2), name.slice(space2 + 1), attrs[name]);else if (name == "style" && dom.style) dom.style.cssText = attrs[name];else dom.setAttribute(name, attrs[name]);
    }
  }
  for (let i = start; i < structure.length; i++) {
    let child = structure[i];
    if (child === 0) {
      if (i < structure.length - 1 || i > start) throw new RangeError("Content hole must be the only child of its parent node");
      return {
        dom,
        contentDOM: dom
      };
    } else {
      let {
        dom: inner,
        contentDOM: innerContent
      } = renderSpec(doc2, child, xmlNS, blockArraysIn);
      dom.appendChild(inner);
      if (innerContent) {
        if (contentDOM) throw new RangeError("Multiple content holes");
        contentDOM = innerContent;
      }
    }
  }
  return {
    dom,
    contentDOM
  };
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcm9zZW1pcnJvci1tb2RlbC4xLjI1LjMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3ItbW9kZWwvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9zZW1pcnJvcl9tb2RlbF8xXzI1XzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQ29udGVudE1hdGNoIiwiRE9NUGFyc2VyIiwiRE9NU2VyaWFsaXplciIsIkZyYWdtZW50IiwiTWFyayIsIk1hcmtUeXBlIiwiTm9kZSIsIk5vZGVSYW5nZSIsIk5vZGVUeXBlIiwiUmVwbGFjZUVycm9yIiwiUmVzb2x2ZWRQb3MiLCJTY2hlbWEiLCJTbGljZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfb3JkZXJlZG1hcCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiZmluZERpZmZTdGFydCIsImEiLCJiIiwicG9zIiwiaSIsImNoaWxkQ291bnQiLCJjaGlsZEEiLCJjaGlsZCIsImNoaWxkQiIsIm5vZGVTaXplIiwic2FtZU1hcmt1cCIsImlzVGV4dCIsInRleHQiLCJqIiwiY29udGVudCIsInNpemUiLCJpbm5lciIsImZpbmREaWZmRW5kIiwicG9zQSIsInBvc0IiLCJpQSIsImlCIiwic2FtZSIsIm1pblNpemUiLCJNYXRoIiwibWluIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJub2Rlc0JldHdlZW4iLCJmcm9tIiwidG8iLCJmIiwibm9kZVN0YXJ0IiwicGFyZW50IiwiZW5kIiwic3RhcnQiLCJtYXgiLCJkZXNjZW5kYW50cyIsInRleHRCZXR3ZWVuIiwiYmxvY2tTZXBhcmF0b3IiLCJsZWFmVGV4dCIsImZpcnN0Iiwibm9kZSIsIm5vZGVUZXh0Iiwic2xpY2UiLCJpc0xlYWYiLCJ0eXBlIiwic3BlYyIsImlzQmxvY2siLCJpc1RleHRibG9jayIsImFwcGVuZCIsIm90aGVyIiwibGFzdCIsImxhc3RDaGlsZCIsImZpcnN0Q2hpbGQiLCJ3aXRoVGV4dCIsInB1c2giLCJjdXQiLCJyZXN1bHQiLCJjdXRCeUluZGV4IiwiZW1wdHkiLCJyZXBsYWNlQ2hpbGQiLCJpbmRleCIsImN1cnJlbnQiLCJjb3B5MiIsImFkZFRvU3RhcnQiLCJjb25jYXQiLCJhZGRUb0VuZCIsImVxIiwiZm91bmQyIiwiUmFuZ2VFcnJvciIsIm1heWJlQ2hpbGQiLCJmb3JFYWNoIiwicCIsIm90aGVyUG9zIiwiZmluZEluZGV4IiwicmV0SW5kZXgiLCJjdXJQb3MiLCJjdXIiLCJ0b1N0cmluZyIsInRvU3RyaW5nSW5uZXIiLCJqb2luIiwidG9KU09OIiwibWFwIiwibiIsImZyb21KU09OIiwic2NoZW1hIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJub2RlRnJvbUpTT04iLCJmcm9tQXJyYXkiLCJhcnJheSIsImpvaW5lZCIsIm5vZGVzIiwiYXR0cnMiLCJmb3VuZCIsIm9mZnNldCIsImNvbXBhcmVEZWVwIiwiYWRkVG9TZXQiLCJzZXQiLCJwbGFjZWQiLCJleGNsdWRlcyIsInJhbmsiLCJyZW1vdmVGcm9tU2V0IiwiaXNJblNldCIsIm9iaiIsIm5hbWUiLCJfIiwianNvbiIsIm1hcmtzIiwibWFyayIsImNyZWF0ZSIsImNoZWNrQXR0cnMiLCJzYW1lU2V0Iiwic2V0RnJvbSIsIm5vbmUiLCJzb3J0IiwiRXJyb3IiLCJvcGVuU3RhcnQiLCJvcGVuRW5kIiwiaW5zZXJ0QXQiLCJmcmFnbWVudCIsImluc2VydEludG8iLCJyZW1vdmVCZXR3ZWVuIiwicmVtb3ZlUmFuZ2UiLCJtYXhPcGVuIiwib3Blbklzb2xhdGluZyIsImlzb2xhdGluZyIsImluZGV4VG8iLCJvZmZzZXRUbyIsImNvcHkiLCJkaXN0IiwiaW5zZXJ0IiwiY2FuUmVwbGFjZSIsInJlcGxhY2UiLCIkZnJvbSIsIiR0byIsImRlcHRoIiwicmVwbGFjZU91dGVyIiwiY2xvc2UiLCJyZXBsYWNlVHdvV2F5IiwicGFyZW50T2Zmc2V0IiwicHJlcGFyZVNsaWNlRm9yUmVwbGFjZSIsInJlcGxhY2VUaHJlZVdheSIsImNoZWNrSm9pbiIsIm1haW4iLCJzdWIiLCJjb21wYXRpYmxlQ29udGVudCIsImpvaW5hYmxlIiwiJGJlZm9yZSIsIiRhZnRlciIsImFkZE5vZGUiLCJ0YXJnZXQiLCJhZGRSYW5nZSIsIiRzdGFydCIsIiRlbmQiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ0ZXh0T2Zmc2V0Iiwibm9kZUFmdGVyIiwibm9kZUJlZm9yZSIsImNoZWNrQ29udGVudCIsIiRhbG9uZyIsImV4dHJhIiwicmVzb2x2ZU5vQ2FjaGUiLCJwYXRoIiwicmVzb2x2ZURlcHRoIiwidmFsIiwiZG9jIiwiaW5kZXhBZnRlciIsImJlZm9yZSIsImFmdGVyIiwiZE9mZiIsInBvc0F0SW5kZXgiLCJ0bXAiLCJpbmNsdXNpdmUiLCJtYXJrc0Fjcm9zcyIsImlzSW5saW5lIiwibmV4dCIsInNoYXJlZERlcHRoIiwiYmxvY2tSYW5nZSIsInByZWQiLCJkIiwiaW5saW5lQ29udGVudCIsInNhbWVQYXJlbnQiLCJzdHIiLCJyZXNvbHZlIiwiZG9jMiIsInJlbSIsInJlc29sdmVDYWNoZWQiLCJjYWNoZSIsInJlc29sdmVDYWNoZSIsImdldCIsImVsdHMiLCJlbHQiLCJSZXNvbHZlQ2FjaGUiLCJyZXNvbHZlQ2FjaGVTaXplIiwiV2Vha01hcCIsImVtcHR5QXR0cnMiLCJPYmplY3QiLCJjaGlsZHJlbiIsInN0YXJ0UG9zIiwidGV4dENvbnRlbnQiLCJoYXNNYXJrdXAiLCJkZWZhdWx0QXR0cnMiLCJpbmNsdWRlUGFyZW50cyIsIm5vZGVBdCIsImNoaWxkQWZ0ZXIiLCJjaGlsZEJlZm9yZSIsInJhbmdlSGFzTWFyayIsImlzQXRvbSIsInRvRGVidWdTdHJpbmciLCJ3cmFwTWFya3MiLCJjb250ZW50TWF0Y2hBdCIsIm1hdGNoIiwiY29udGVudE1hdGNoIiwibWF0Y2hGcmFnbWVudCIsInJlcGxhY2VtZW50Iiwib25lIiwidHdvIiwidmFsaWRFbmQiLCJhbGxvd3NNYXJrcyIsImNhblJlcGxhY2VXaXRoIiwibWF0Y2hUeXBlIiwiY2FuQXBwZW5kIiwiY2hlY2siLCJtIiwibWFya0Zyb21KU09OIiwibm9kZVR5cGUiLCJwcm90b3R5cGUiLCJUZXh0Tm9kZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJiYXNlIiwid3JhcENhY2hlIiwicGFyc2UiLCJzdHJpbmciLCJub2RlVHlwZXMiLCJzdHJlYW0iLCJUb2tlblN0cmVhbSIsImV4cHIiLCJwYXJzZUV4cHIiLCJlcnIiLCJkZmEiLCJuZmEiLCJjaGVja0ZvckRlYWRFbmRzIiwiZnJhZyIsImRlZmF1bHRUeXBlIiwiaGFzUmVxdWlyZWRBdHRycyIsImNvbXBhdGlibGUiLCJmaWxsQmVmb3JlIiwidG9FbmQiLCJzZWVuIiwic2VhcmNoIiwidHlwZXMiLCJmaW5pc2hlZCIsInRwIiwiY3JlYXRlQW5kRmlsbCIsImluZGV4T2YiLCJmaW5kV3JhcHBpbmciLCJjb21wdXRlZCIsImNvbXB1dGVXcmFwcGluZyIsImFjdGl2ZSIsInZpYSIsInNoaWZ0IiwicmV2ZXJzZSIsImVkZ2VDb3VudCIsImVkZ2UiLCJzY2FuIiwib3V0IiwiaTIiLCJpbmxpbmUiLCJ0b2tlbnMiLCJzcGxpdCIsInBvcCIsImVhdCIsInRvayIsIlN5bnRheEVycm9yIiwiZXhwcnMiLCJwYXJzZUV4cHJTZXEiLCJwYXJzZUV4cHJTdWJzY3JpcHQiLCJwYXJzZUV4cHJBdG9tIiwicGFyc2VFeHByUmFuZ2UiLCJwYXJzZU51bSIsInRlc3QiLCJOdW1iZXIiLCJyZXNvbHZlTmFtZSIsInR5cGVOYW1lIiwidHlwZTIiLCJpc0luR3JvdXAiLCJuZmEyIiwiY29ubmVjdCIsImNvbXBpbGUiLCJ0ZXJtIiwiZWRnZTIiLCJlZGdlcyIsImV4cHIyIiwicmVkdWNlIiwiZXhwcjMiLCJsb29wIiwiY21wIiwibnVsbEZyb20iLCJub2RlMiIsImxhYmVsZWQiLCJleHBsb3JlIiwic3RhdGVzIiwic3RhdGUiLCJzdGF0ZXMyIiwid29yayIsImRlYWQiLCJkZWZhdWx0cyIsImF0dHJOYW1lIiwiYXR0ciIsImhhc0RlZmF1bHQiLCJkZWZhdWx0IiwiY29tcHV0ZUF0dHJzIiwiYnVpbHQiLCJnaXZlbiIsInZhbHVlcyIsIm5hbWUyIiwidmFsaWRhdGUiLCJpbml0QXR0cnMiLCJBdHRyaWJ1dGUiLCJtYXJrU2V0IiwiZ3JvdXBzIiwiZ3JvdXAiLCJhdG9tIiwid2hpdGVzcGFjZSIsImNvZGUiLCJpc1JlcXVpcmVkIiwiY3JlYXRlQ2hlY2tlZCIsIm1hdGNoZWQiLCJ2YWxpZENvbnRlbnQiLCJhbGxvd3NNYXJrVHlwZSIsIm1hcmtUeXBlIiwiYWxsb3dlZE1hcmtzIiwidG9wVHlwZSIsInRvcE5vZGUiLCJ2YWxpZGF0ZVR5cGUiLCJvcHRpb25zIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZXhjbHVkZWQiLCJpbnN0YW5jZSIsImxpbmVicmVha1JlcGxhY2VtZW50IiwiY2FjaGVkIiwiaW5zdGFuY2VTcGVjIiwicHJvcCIsImNvbnRlbnRFeHByQ2FjaGUiLCJjb250ZW50RXhwciIsIm1hcmtFeHByIiwiZ2F0aGVyTWFya3MiLCJleGNsIiwidG9wTm9kZVR5cGUiLCJ3cmFwcGluZ3MiLCJvayIsIm1hcmsyIiwiaXNUYWdSdWxlIiwicnVsZSIsInRhZyIsImlzU3R5bGVSdWxlIiwic3R5bGUiLCJydWxlcyIsInRhZ3MiLCJzdHlsZXMiLCJtYXRjaGVkU3R5bGVzIiwiZXhlYyIsIm5vcm1hbGl6ZUxpc3RzIiwic29tZSIsInIiLCJkb20iLCJjb250ZXh0IiwiUGFyc2VDb250ZXh0IiwiYWRkQWxsIiwiZmluaXNoIiwicGFyc2VTbGljZSIsIm1hdGNoVGFnIiwibWF0Y2hlcyIsIm5hbWVzcGFjZSIsIm5hbWVzcGFjZVVSSSIsIm1hdGNoZXNDb250ZXh0IiwiZ2V0QXR0cnMiLCJtYXRjaFN0eWxlIiwiY2hhckNvZGVBdCIsInNjaGVtYVJ1bGVzIiwicHJpb3JpdHkiLCJuZXh0UHJpb3JpdHkiLCJzcGxpY2UiLCJwYXJzZURPTSIsImlnbm9yZSIsImNsZWFyTWFyayIsImZyb21TY2hlbWEiLCJkb21QYXJzZXIiLCJibG9ja1RhZ3MiLCJhZGRyZXNzIiwiYXJ0aWNsZSIsImFzaWRlIiwiYmxvY2txdW90ZSIsImNhbnZhcyIsImRkIiwiZGl2IiwiZGwiLCJmaWVsZHNldCIsImZpZ2NhcHRpb24iLCJmaWd1cmUiLCJmb290ZXIiLCJmb3JtIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaGVhZGVyIiwiaGdyb3VwIiwiaHIiLCJsaSIsIm5vc2NyaXB0Iiwib2wiLCJvdXRwdXQiLCJwcmUiLCJzZWN0aW9uIiwidGFibGUiLCJ0Zm9vdCIsInVsIiwiaWdub3JlVGFncyIsImhlYWQiLCJvYmplY3QiLCJzY3JpcHQiLCJ0aXRsZSIsImxpc3RUYWdzIiwiT1BUX1BSRVNFUlZFX1dTIiwiT1BUX1BSRVNFUlZFX1dTX0ZVTEwiLCJPUFRfT1BFTl9MRUZUIiwid3NPcHRpb25zRm9yIiwicHJlc2VydmVXaGl0ZXNwYWNlIiwiTm9kZUNvbnRleHQiLCJzb2xpZCIsImFjdGl2ZU1hcmtzIiwiZmlsbCIsIndyYXAiLCJpbmxpbmVDb250ZXh0IiwicGFyZW50Tm9kZSIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJwYXJzZXIiLCJpc09wZW4iLCJvcGVuIiwibG9jYWxQcmVzZXJ2ZVdTIiwidG9wQ29udGV4dCIsInRvcE9wdGlvbnMiLCJ0b3BNYXRjaCIsImZpbmQiLCJmaW5kUG9zaXRpb25zIiwibmVlZHNCbG9jayIsInRvcCIsImFkZERPTSIsImFkZFRleHROb2RlIiwiYWRkRWxlbWVudCIsIm5vZGVWYWx1ZSIsInByZXNlcnZlV1MiLCJkb21Ob2RlQmVmb3JlIiwicHJldmlvdXNTaWJsaW5nIiwiaW5zZXJ0Tm9kZSIsImZpbmRJblRleHQiLCJmaW5kSW5zaWRlIiwibWF0Y2hBZnRlciIsIm91dGVyV1MiLCJ0YWdOYW1lIiwid2hpdGVTcGFjZSIsInJ1bGVJRCIsIm5vcm1hbGl6ZUxpc3QiLCJydWxlRnJvbU5vZGUiLCJpZ25vcmVGYWxsYmFjayIsInNraXAiLCJjbG9zZVBhcmVudCIsInN5bmMiLCJvbGROZWVkc0Jsb2NrIiwibGVhZkZhbGxiYWNrIiwiaW5uZXJNYXJrcyIsInJlYWRTdHlsZXMiLCJhZGRFbGVtZW50QnlSdWxlIiwiY29uc3VtaW5nIiwib3duZXJEb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiZmluZFBsYWNlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImZpbHRlciIsImNvbnRpbnVlQWZ0ZXIiLCJlbnRlciIsInN0YXJ0SW4iLCJnZXRDb250ZW50IiwiY29udGVudERPTSIsImNvbnRlbnRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImZpbmRBcm91bmQiLCJjaGlsZE5vZGVzIiwibmV4dFNpYmxpbmciLCJmaW5kQXRQb2ludCIsImNhdXRpb3VzIiwicm91dGUiLCJwZW5hbHR5IiwiY3giLCJlbnRlcklubmVyIiwiYmxvY2siLCJ0ZXh0YmxvY2tGcm9tQ29udGV4dCIsImNsb3NlRXh0cmEiLCJub2RlTWFya3MiLCJtYXJrTWF5QXBwbHkiLCJhcHBseU1hcmtzIiwidG9wT3BlbiIsImN1cnJlbnRQb3MiLCJjb250YWlucyIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwidGV4dE5vZGUiLCJwYXJ0cyIsIm9wdGlvbiIsInVzZVJvb3QiLCJtaW5EZXB0aCIsInBhcnQiLCIkY29udGV4dCIsImRlZmx0IiwicHJldkl0ZW0iLCJhcHBlbmRDaGlsZCIsInNlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJzZXJpYWxpemVGcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJrZWVwIiwicmVuZGVyZWQiLCJzcGFubmluZyIsImFkZCIsIm1hcmtET00iLCJzZXJpYWxpemVNYXJrIiwic2VyaWFsaXplTm9kZUlubmVyIiwicmVuZGVyU3BlYyIsInNlcmlhbGl6ZU5vZGUiLCJ0b0RPTSIsInN0cnVjdHVyZSIsInhtbE5TIiwiYmxvY2tBcnJheXNJbiIsImRvbVNlcmlhbGl6ZXIiLCJub2Rlc0Zyb21TY2hlbWEiLCJtYXJrc0Zyb21TY2hlbWEiLCJnYXRoZXJUb0RPTSIsImRvY3VtZW50Iiwid2luZG93Iiwic3VzcGljaW91c0F0dHJpYnV0ZUNhY2hlIiwic3VzcGljaW91c0F0dHJpYnV0ZXMiLCJzdXNwaWNpb3VzQXR0cmlidXRlc0lubmVyIiwic3VzcGljaW91cyIsInNwYWNlIiwiY3JlYXRlRWxlbWVudE5TIiwiY3JlYXRlRWxlbWVudCIsInNwYWNlMiIsInNldEF0dHJpYnV0ZU5TIiwiY3NzVGV4dCIsInNldEF0dHJpYnV0ZSIsImlubmVyQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZ0NBQUE7QUFBQUMsUUFBQSxDQUFBRCxnQ0FBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBakIsZ0NBQUE7OztBQ0FBLElBQUFrQixpQkFBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBRXZCLFNBQVNDLGNBQWNDLENBQUEsRUFBR0MsQ0FBQSxFQUFHQyxHQUFBLEVBQUs7RUFDOUIsU0FBU0MsQ0FBQSxHQUFJ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