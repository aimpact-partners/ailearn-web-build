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

// .beyond/uimport/temp/prosemirror-model.1.25.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLW1vZGVsLjEuMjUuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcm9zZW1pcnJvci1tb2RlbC9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3NlbWlycm9yX21vZGVsXzFfMjVfM19leHBvcnRzIiwiX19leHBvcnQiLCJDb250ZW50TWF0Y2giLCJET01QYXJzZXIiLCJET01TZXJpYWxpemVyIiwiRnJhZ21lbnQiLCJNYXJrIiwiTWFya1R5cGUiLCJOb2RlIiwiTm9kZVJhbmdlIiwiTm9kZVR5cGUiLCJSZXBsYWNlRXJyb3IiLCJSZXNvbHZlZFBvcyIsIlNjaGVtYSIsIlNsaWNlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9vcmRlcmVkbWFwIiwiX190b0VTTSIsInJlcXVpcmUiLCJmaW5kRGlmZlN0YXJ0IiwiYSIsImIiLCJwb3MiLCJpIiwiY2hpbGRDb3VudCIsImNoaWxkQSIsImNoaWxkIiwiY2hpbGRCIiwibm9kZVNpemUiLCJzYW1lTWFya3VwIiwiaXNUZXh0IiwidGV4dCIsImoiLCJjb250ZW50Iiwic2l6ZSIsImlubmVyIiwiZmluZERpZmZFbmQiLCJwb3NBIiwicG9zQiIsImlBIiwiaUIiLCJzYW1lIiwibWluU2l6ZSIsIk1hdGgiLCJtaW4iLCJsZW5ndGgiLCJjb25zdHJ1Y3RvciIsIm5vZGVzQmV0d2VlbiIsImZyb20iLCJ0byIsImYiLCJub2RlU3RhcnQiLCJwYXJlbnQiLCJlbmQiLCJzdGFydCIsIm1heCIsImRlc2NlbmRhbnRzIiwidGV4dEJldHdlZW4iLCJibG9ja1NlcGFyYXRvciIsImxlYWZUZXh0IiwiZmlyc3QiLCJub2RlIiwibm9kZVRleHQiLCJzbGljZSIsImlzTGVhZiIsInR5cGUiLCJzcGVjIiwiaXNCbG9jayIsImlzVGV4dGJsb2NrIiwiYXBwZW5kIiwib3RoZXIiLCJsYXN0IiwibGFzdENoaWxkIiwiZmlyc3RDaGlsZCIsIndpdGhUZXh0IiwicHVzaCIsImN1dCIsInJlc3VsdCIsImN1dEJ5SW5kZXgiLCJlbXB0eSIsInJlcGxhY2VDaGlsZCIsImluZGV4IiwiY3VycmVudCIsImNvcHkyIiwiYWRkVG9TdGFydCIsImNvbmNhdCIsImFkZFRvRW5kIiwiZXEiLCJmb3VuZDIiLCJSYW5nZUVycm9yIiwibWF5YmVDaGlsZCIsImZvckVhY2giLCJwIiwib3RoZXJQb3MiLCJmaW5kSW5kZXgiLCJyZXRJbmRleCIsImN1clBvcyIsImN1ciIsInRvU3RyaW5nIiwidG9TdHJpbmdJbm5lciIsImpvaW4iLCJ0b0pTT04iLCJtYXAiLCJuIiwiZnJvbUpTT04iLCJzY2hlbWEiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIm5vZGVGcm9tSlNPTiIsImZyb21BcnJheSIsImFycmF5Iiwiam9pbmVkIiwibm9kZXMiLCJhdHRycyIsImZvdW5kIiwib2Zmc2V0IiwiY29tcGFyZURlZXAiLCJhZGRUb1NldCIsInNldCIsInBsYWNlZCIsImV4Y2x1ZGVzIiwicmFuayIsInJlbW92ZUZyb21TZXQiLCJpc0luU2V0Iiwib2JqIiwibmFtZSIsIl8iLCJqc29uIiwibWFya3MiLCJtYXJrIiwiY3JlYXRlIiwiY2hlY2tBdHRycyIsInNhbWVTZXQiLCJzZXRGcm9tIiwibm9uZSIsInNvcnQiLCJFcnJvciIsIm9wZW5TdGFydCIsIm9wZW5FbmQiLCJpbnNlcnRBdCIsImZyYWdtZW50IiwiaW5zZXJ0SW50byIsInJlbW92ZUJldHdlZW4iLCJyZW1vdmVSYW5nZSIsIm1heE9wZW4iLCJvcGVuSXNvbGF0aW5nIiwiaXNvbGF0aW5nIiwiaW5kZXhUbyIsIm9mZnNldFRvIiwiY29weSIsImRpc3QiLCJpbnNlcnQiLCJjYW5SZXBsYWNlIiwicmVwbGFjZSIsIiRmcm9tIiwiJHRvIiwiZGVwdGgiLCJyZXBsYWNlT3V0ZXIiLCJjbG9zZSIsInJlcGxhY2VUd29XYXkiLCJwYXJlbnRPZmZzZXQiLCJwcmVwYXJlU2xpY2VGb3JSZXBsYWNlIiwicmVwbGFjZVRocmVlV2F5IiwiY2hlY2tKb2luIiwibWFpbiIsInN1YiIsImNvbXBhdGlibGVDb250ZW50Iiwiam9pbmFibGUiLCIkYmVmb3JlIiwiJGFmdGVyIiwiYWRkTm9kZSIsInRhcmdldCIsImFkZFJhbmdlIiwiJHN0YXJ0IiwiJGVuZCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInRleHRPZmZzZXQiLCJub2RlQWZ0ZXIiLCJub2RlQmVmb3JlIiwiY2hlY2tDb250ZW50IiwiJGFsb25nIiwiZXh0cmEiLCJyZXNvbHZlTm9DYWNoZSIsInBhdGgiLCJyZXNvbHZlRGVwdGgiLCJ2YWwiLCJkb2MiLCJpbmRleEFmdGVyIiwiYmVmb3JlIiwiYWZ0ZXIiLCJkT2ZmIiwicG9zQXRJbmRleCIsInRtcCIsImluY2x1c2l2ZSIsIm1hcmtzQWNyb3NzIiwiaXNJbmxpbmUiLCJuZXh0Iiwic2hhcmVkRGVwdGgiLCJibG9ja1JhbmdlIiwicHJlZCIsImQiLCJpbmxpbmVDb250ZW50Iiwic2FtZVBhcmVudCIsInN0ciIsInJlc29sdmUiLCJkb2MyIiwicmVtIiwicmVzb2x2ZUNhY2hlZCIsImNhY2hlIiwicmVzb2x2ZUNhY2hlIiwiZ2V0IiwiZWx0cyIsImVsdCIsIlJlc29sdmVDYWNoZSIsInJlc29sdmVDYWNoZVNpemUiLCJXZWFrTWFwIiwiZW1wdHlBdHRycyIsIk9iamVjdCIsImNoaWxkcmVuIiwic3RhcnRQb3MiLCJ0ZXh0Q29udGVudCIsImhhc01hcmt1cCIsImRlZmF1bHRBdHRycyIsImluY2x1ZGVQYXJlbnRzIiwibm9kZUF0IiwiY2hpbGRBZnRlciIsImNoaWxkQmVmb3JlIiwicmFuZ2VIYXNNYXJrIiwiaXNBdG9tIiwidG9EZWJ1Z1N0cmluZyIsIndyYXBNYXJrcyIsImNvbnRlbnRNYXRjaEF0IiwibWF0Y2giLCJjb250ZW50TWF0Y2giLCJtYXRjaEZyYWdtZW50IiwicmVwbGFjZW1lbnQiLCJvbmUiLCJ0d28iLCJ2YWxpZEVuZCIsImFsbG93c01hcmtzIiwiY2FuUmVwbGFjZVdpdGgiLCJtYXRjaFR5cGUiLCJjYW5BcHBlbmQiLCJjaGVjayIsIm0iLCJtYXJrRnJvbUpTT04iLCJub2RlVHlwZSIsInByb3RvdHlwZSIsIlRleHROb2RlIiwiSlNPTiIsInN0cmluZ2lmeSIsImJhc2UiLCJ3cmFwQ2FjaGUiLCJwYXJzZSIsInN0cmluZyIsIm5vZGVUeXBlcyIsInN0cmVhbSIsIlRva2VuU3RyZWFtIiwiZXhwciIsInBhcnNlRXhwciIsImVyciIsImRmYSIsIm5mYSIsImNoZWNrRm9yRGVhZEVuZHMiLCJmcmFnIiwiZGVmYXVsdFR5cGUiLCJoYXNSZXF1aXJlZEF0dHJzIiwiY29tcGF0aWJsZSIsImZpbGxCZWZvcmUiLCJ0b0VuZCIsInNlZW4iLCJzZWFyY2giLCJ0eXBlcyIsImZpbmlzaGVkIiwidHAiLCJjcmVhdGVBbmRGaWxsIiwiaW5kZXhPZiIsImZpbmRXcmFwcGluZyIsImNvbXB1dGVkIiwiY29tcHV0ZVdyYXBwaW5nIiwiYWN0aXZlIiwidmlhIiwic2hpZnQiLCJyZXZlcnNlIiwiZWRnZUNvdW50IiwiZWRnZSIsInNjYW4iLCJvdXQiLCJpMiIsImlubGluZSIsInRva2VucyIsInNwbGl0IiwicG9wIiwiZWF0IiwidG9rIiwiU3ludGF4RXJyb3IiLCJleHBycyIsInBhcnNlRXhwclNlcSIsInBhcnNlRXhwclN1YnNjcmlwdCIsInBhcnNlRXhwckF0b20iLCJwYXJzZUV4cHJSYW5nZSIsInBhcnNlTnVtIiwidGVzdCIsIk51bWJlciIsInJlc29sdmVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlMiIsImlzSW5Hcm91cCIsIm5mYTIiLCJjb25uZWN0IiwiY29tcGlsZSIsInRlcm0iLCJlZGdlMiIsImVkZ2VzIiwiZXhwcjIiLCJyZWR1Y2UiLCJleHByMyIsImxvb3AiLCJjbXAiLCJudWxsRnJvbSIsIm5vZGUyIiwibGFiZWxlZCIsImV4cGxvcmUiLCJzdGF0ZXMiLCJzdGF0ZSIsInN0YXRlczIiLCJ3b3JrIiwiZGVhZCIsImRlZmF1bHRzIiwiYXR0ck5hbWUiLCJhdHRyIiwiaGFzRGVmYXVsdCIsImRlZmF1bHQiLCJjb21wdXRlQXR0cnMiLCJidWlsdCIsImdpdmVuIiwidmFsdWVzIiwibmFtZTIiLCJ2YWxpZGF0ZSIsImluaXRBdHRycyIsIkF0dHJpYnV0ZSIsIm1hcmtTZXQiLCJncm91cHMiLCJncm91cCIsImF0b20iLCJ3aGl0ZXNwYWNlIiwiY29kZSIsImlzUmVxdWlyZWQiLCJjcmVhdGVDaGVja2VkIiwibWF0Y2hlZCIsInZhbGlkQ29udGVudCIsImFsbG93c01hcmtUeXBlIiwibWFya1R5cGUiLCJhbGxvd2VkTWFya3MiLCJ0b3BUeXBlIiwidG9wTm9kZSIsInZhbGlkYXRlVHlwZSIsIm9wdGlvbnMiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJleGNsdWRlZCIsImluc3RhbmNlIiwibGluZWJyZWFrUmVwbGFjZW1lbnQiLCJjYWNoZWQiLCJpbnN0YW5jZVNwZWMiLCJwcm9wIiwiY29udGVudEV4cHJDYWNoZSIsImNvbnRlbnRFeHByIiwibWFya0V4cHIiLCJnYXRoZXJNYXJrcyIsImV4Y2wiLCJ0b3BOb2RlVHlwZSIsIndyYXBwaW5ncyIsIm9rIiwibWFyazIiLCJpc1RhZ1J1bGUiLCJydWxlIiwidGFnIiwiaXNTdHlsZVJ1bGUiLCJzdHlsZSIsInJ1bGVzIiwidGFncyIsInN0eWxlcyIsIm1hdGNoZWRTdHlsZXMiLCJleGVjIiwibm9ybWFsaXplTGlzdHMiLCJzb21lIiwiciIsImRvbSIsImNvbnRleHQiLCJQYXJzZUNvbnRleHQiLCJhZGRBbGwiLCJmaW5pc2giLCJwYXJzZVNsaWNlIiwibWF0Y2hUYWciLCJtYXRjaGVzIiwibmFtZXNwYWNlIiwibmFtZXNwYWNlVVJJIiwibWF0Y2hlc0NvbnRleHQiLCJnZXRBdHRycyIsIm1hdGNoU3R5bGUiLCJjaGFyQ29kZUF0Iiwic2NoZW1hUnVsZXMiLCJwcmlvcml0eSIsIm5leHRQcmlvcml0eSIsInNwbGljZSIsInBhcnNlRE9NIiwiaWdub3JlIiwiY2xlYXJNYXJrIiwiZnJvbVNjaGVtYSIsImRvbVBhcnNlciIsImJsb2NrVGFncyIsImFkZHJlc3MiLCJhcnRpY2xlIiwiYXNpZGUiLCJibG9ja3F1b3RlIiwiY2FudmFzIiwiZGQiLCJkaXYiLCJkbCIsImZpZWxkc2V0IiwiZmlnY2FwdGlvbiIsImZpZ3VyZSIsImZvb3RlciIsImZvcm0iLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJoZWFkZXIiLCJoZ3JvdXAiLCJociIsImxpIiwibm9zY3JpcHQiLCJvbCIsIm91dHB1dCIsInByZSIsInNlY3Rpb24iLCJ0YWJsZSIsInRmb290IiwidWwiLCJpZ25vcmVUYWdzIiwiaGVhZCIsIm9iamVjdCIsInNjcmlwdCIsInRpdGxlIiwibGlzdFRhZ3MiLCJPUFRfUFJFU0VSVkVfV1MiLCJPUFRfUFJFU0VSVkVfV1NfRlVMTCIsIk9QVF9PUEVOX0xFRlQiLCJ3c09wdGlvbnNGb3IiLCJwcmVzZXJ2ZVdoaXRlc3BhY2UiLCJOb2RlQ29udGV4dCIsInNvbGlkIiwiYWN0aXZlTWFya3MiLCJmaWxsIiwid3JhcCIsImlubGluZUNvbnRleHQiLCJwYXJlbnROb2RlIiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlciIsImlzT3BlbiIsIm9wZW4iLCJsb2NhbFByZXNlcnZlV1MiLCJ0b3BDb250ZXh0IiwidG9wT3B0aW9ucyIsInRvcE1hdGNoIiwiZmluZCIsImZpbmRQb3NpdGlvbnMiLCJuZWVkc0Jsb2NrIiwidG9wIiwiYWRkRE9NIiwiYWRkVGV4dE5vZGUiLCJhZGRFbGVtZW50Iiwibm9kZVZhbHVlIiwicHJlc2VydmVXUyIsImRvbU5vZGVCZWZvcmUiLCJwcmV2aW91c1NpYmxpbmciLCJpbnNlcnROb2RlIiwiZmluZEluVGV4dCIsImZpbmRJbnNpZGUiLCJtYXRjaEFmdGVyIiwib3V0ZXJXUyIsInRhZ05hbWUiLCJ3aGl0ZVNwYWNlIiwicnVsZUlEIiwibm9ybWFsaXplTGlzdCIsInJ1bGVGcm9tTm9kZSIsImlnbm9yZUZhbGxiYWNrIiwic2tpcCIsImNsb3NlUGFyZW50Iiwic3luYyIsIm9sZE5lZWRzQmxvY2siLCJsZWFmRmFsbGJhY2siLCJpbm5lck1hcmtzIiwicmVhZFN0eWxlcyIsImFkZEVsZW1lbnRCeVJ1bGUiLCJjb25zdW1pbmciLCJvd25lckRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJmaW5kUGxhY2UiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZmlsdGVyIiwiY29udGludWVBZnRlciIsImVudGVyIiwic3RhcnRJbiIsImdldENvbnRlbnQiLCJjb250ZW50RE9NIiwiY29udGVudEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmluZEFyb3VuZCIsImNoaWxkTm9kZXMiLCJuZXh0U2libGluZyIsImZpbmRBdFBvaW50IiwiY2F1dGlvdXMiLCJyb3V0ZSIsInBlbmFsdHkiLCJjeCIsImVudGVySW5uZXIiLCJibG9jayIsInRleHRibG9ja0Zyb21Db250ZXh0IiwiY2xvc2VFeHRyYSIsIm5vZGVNYXJrcyIsIm1hcmtNYXlBcHBseSIsImFwcGx5TWFya3MiLCJ0b3BPcGVuIiwiY3VycmVudFBvcyIsImNvbnRhaW5zIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJ0ZXh0Tm9kZSIsInBhcnRzIiwib3B0aW9uIiwidXNlUm9vdCIsIm1pbkRlcHRoIiwicGFydCIsIiRjb250ZXh0IiwiZGVmbHQiLCJwcmV2SXRlbSIsImFwcGVuZENoaWxkIiwic2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsInNlcmlhbGl6ZUZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImtlZXAiLCJyZW5kZXJlZCIsInNwYW5uaW5nIiwiYWRkIiwibWFya0RPTSIsInNlcmlhbGl6ZU1hcmsiLCJzZXJpYWxpemVOb2RlSW5uZXIiLCJyZW5kZXJTcGVjIiwic2VyaWFsaXplTm9kZSIsInRvRE9NIiwic3RydWN0dXJlIiwieG1sTlMiLCJibG9ja0FycmF5c0luIiwiZG9tU2VyaWFsaXplciIsIm5vZGVzRnJvbVNjaGVtYSIsIm1hcmtzRnJvbVNjaGVtYSIsImdhdGhlclRvRE9NIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJzdXNwaWNpb3VzQXR0cmlidXRlQ2FjaGUiLCJzdXNwaWNpb3VzQXR0cmlidXRlcyIsInN1c3BpY2lvdXNBdHRyaWJ1dGVzSW5uZXIiLCJzdXNwaWNpb3VzIiwic3BhY2UiLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVFbGVtZW50Iiwic3BhY2UyIiwic2V0QXR0cmlidXRlTlMiLCJjc3NUZXh0Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxnQ0FBQTtBQUFBQyxRQUFBLENBQUFELGdDQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFqQixnQ0FBQTs7O0FDQUEsSUFBQWtCLGlCQUFBLEdBQXVCQyxPQUFBLENBQUFDLE9BQUE7QUFFdkIsU0FBU0MsY0FBY0MsQ0FBQSxFQUFHQyxDQUFBLEVBQUdDLEdBQUEsRUFBSztFQUM5QixTQUFTQyxDQUFBLEdBQUksSUFBSUEsQ0FBQSxJQUFLO0lBQ2xCLElBQUlBLENBQUEsSUFBS0gsQ0FBQSxDQUFFSSxVQUFBLElBQWNELENBQUEsSUFBS0YsQ0FBQSxDQUFFRyxVQUFBLEVBQzVCLE9BQU9KLENBQUEsQ0FBRUksVUFBQSxJQUFjSCxDQUFBLENBQUVHLFVBQUEsR0FBYSxPQUFPRixHQUFBO0lBQ2pELElBQUlHLE1BQUEsR0FBU0wsQ0FBQSxDQUFFTSxLQUFBLENBQU1ILENBQUM7TUFBR0ksTUFBQSxHQUFTTixDQUFBLENBQUVLLEtBQUEsQ0FBTUgsQ0FBQztJQUMzQyxJQUFJRSxNQUFBLElBQVVFLE1BQUEsRUFBUTtNQUNsQkwsR0FBQSxJQUFPRyxNQUFBLENBQU9HLFFBQUE7TUFDZDtJQUNKO0lBQ0EsSUFBSSxDQUFDSCxNQUFBLENBQU9JLFVBQUEsQ0FBV0YsTUFBTSxHQUN6QixPQUFPTCxHQUFBO0lBQ1gsSUFBSUcsTUFBQSxDQUFPSyxNQUFBLElBQVVMLE1BQUEsQ0FBT00sSUFBQSxJQUFRSixNQUFBLENBQU9JLElBQUEsRUFBTTtNQUM3QyxTQUFTQyxDQUFBLEdBQUksR0FBR1AsTUFBQSxDQUFPTSxJQUFBLENBQUtDLENBQUEsS0FBTUwsTUFBQSxDQUFPSSxJQUFBLENBQUtDLENBQUEsR0FBSUEsQ0FBQSxJQUM5Q1YsR0FBQTtNQUNKLE9BQU9BLEdBQUE7SUFDWDtJQUNBLElBQUlHLE1BQUEsQ0FBT1EsT0FBQSxDQUFRQyxJQUFBLElBQVFQLE1BQUEsQ0FBT00sT0FBQSxDQUFRQyxJQUFBLEVBQU07TUFDNUMsSUFBSUMsS0FBQSxHQUFRaEIsYUFBQSxDQUFjTSxNQUFBLENBQU9RLE9BQUEsRUFBU04sTUFBQSxDQUFPTSxPQUFBLEVBQVNYLEdBQUEsR0FBTSxDQUFDO01BQ2pFLElBQUlhLEtBQUEsSUFBUyxNQUNULE9BQU9BLEtBQUE7SUFDZjtJQUNBYixHQUFBLElBQU9HLE1BQUEsQ0FBT0csUUFBQTtFQUNsQjtBQUNKO0FBQ0EsU0FBU1EsWUFBWWhCLENBQUEsRUFBR0MsQ0FBQSxFQUFHZ0IsSUFBQSxFQUFNQyxJQUFBLEVBQU07RUFDbkMsU0FBU0MsRUFBQSxHQUFLbkIsQ0FBQSxDQUFFSSxVQUFBLEVBQVlnQixFQUFBLEdBQUtuQixDQUFBLENBQUVHLFVBQUEsSUFBYztJQUM3QyxJQUFJZSxFQUFBLElBQU0sS0FBS0MsRUFBQSxJQUFNLEdBQ2pCLE9BQU9ELEVBQUEsSUFBTUMsRUFBQSxHQUFLLE9BQU87TUFBRXBCLENBQUEsRUFBR2lCLElBQUE7TUFBTWhCLENBQUEsRUFBR2lCO0lBQUs7SUFDaEQsSUFBSWIsTUFBQSxHQUFTTCxDQUFBLENBQUVNLEtBQUEsQ0FBTSxFQUFFYSxFQUFFO01BQUdaLE1BQUEsR0FBU04sQ0FBQSxDQUFFSyxLQUFBLENBQU0sRUFBRWMsRUFBRTtNQUFHTixJQUFBLEdBQU9ULE1BQUEsQ0FBT0csUUFBQTtJQUNsRSxJQUFJSCxNQUFBLElBQVVFLE1BQUEsRUFBUTtNQUNsQlUsSUFBQSxJQUFRSCxJQUFBO01BQ1JJLElBQUEsSUFBUUosSUFBQTtNQUNSO0lBQ0o7SUFDQSxJQUFJLENBQUNULE1BQUEsQ0FBT0ksVUFBQSxDQUFXRixNQUFNLEdBQ3pCLE9BQU87TUFBRVAsQ0FBQSxFQUFHaUIsSUFBQTtNQUFNaEIsQ0FBQSxFQUFHaUI7SUFBSztJQUM5QixJQUFJYixNQUFBLENBQU9LLE1BQUEsSUFBVUwsTUFBQSxDQUFPTSxJQUFBLElBQVFKLE1BQUEsQ0FBT0ksSUFBQSxFQUFNO01BQzdDLElBQUlVLElBQUEsR0FBTztRQUFHQyxPQUFBLEdBQVVDLElBQUEsQ0FBS0MsR0FBQSxDQUFJbkIsTUFBQSxDQUFPTSxJQUFBLENBQUtjLE1BQUEsRUFBUWxCLE1BQUEsQ0FBT0ksSUFBQSxDQUFLYyxNQUFNO01BQ3ZFLE9BQU9KLElBQUEsR0FBT0MsT0FBQSxJQUFXakIsTUFBQSxDQUFPTSxJQUFBLENBQUtOLE1BQUEsQ0FBT00sSUFBQSxDQUFLYyxNQUFBLEdBQVNKLElBQUEsR0FBTyxNQUFNZCxNQUFBLENBQU9JLElBQUEsQ0FBS0osTUFBQSxDQUFPSSxJQUFBLENBQUtjLE1BQUEsR0FBU0osSUFBQSxHQUFPLElBQUk7UUFDL0dBLElBQUE7UUFDQUosSUFBQTtRQUNBQyxJQUFBO01BQ0o7TUFDQSxPQUFPO1FBQUVsQixDQUFBLEVBQUdpQixJQUFBO1FBQU1oQixDQUFBLEVBQUdpQjtNQUFLO0lBQzlCO0lBQ0EsSUFBSWIsTUFBQSxDQUFPUSxPQUFBLENBQVFDLElBQUEsSUFBUVAsTUFBQSxDQUFPTSxPQUFBLENBQVFDLElBQUEsRUFBTTtNQUM1QyxJQUFJQyxLQUFBLEdBQVFDLFdBQUEsQ0FBWVgsTUFBQSxDQUFPUSxPQUFBLEVBQVNOLE1BQUEsQ0FBT00sT0FBQSxFQUFTSSxJQUFBLEdBQU8sR0FBR0MsSUFBQSxHQUFPLENBQUM7TUFDMUUsSUFBSUgsS0FBQSxFQUNBLE9BQU9BLEtBQUE7SUFDZjtJQUNBRSxJQUFBLElBQVFILElBQUE7SUFDUkksSUFBQSxJQUFRSixJQUFBO0VBQ1o7QUFDSjtBQVNBLElBQU0vQixRQUFBLEdBQU4sTUFBZTtFQUlYMkMsWUFJQWIsT0FBQSxFQUFTQyxJQUFBLEVBQU07SUFDWCxLQUFLRCxPQUFBLEdBQVVBLE9BQUE7SUFDZixLQUFLQyxJQUFBLEdBQU9BLElBQUEsSUFBUTtJQUNwQixJQUFJQSxJQUFBLElBQVEsTUFDUixTQUFTWCxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJVSxPQUFBLENBQVFZLE1BQUEsRUFBUXRCLENBQUEsSUFDaEMsS0FBS1csSUFBQSxJQUFRRCxPQUFBLENBQVFWLENBQUEsRUFBR0ssUUFBQTtFQUNwQztFQU1BbUIsYUFBYUMsSUFBQSxFQUFNQyxFQUFBLEVBQUlDLENBQUEsRUFBR0MsU0FBQSxHQUFZLEdBQUdDLE1BQUEsRUFBUTtJQUM3QyxTQUFTN0IsQ0FBQSxHQUFJLEdBQUdELEdBQUEsR0FBTSxHQUFHQSxHQUFBLEdBQU0yQixFQUFBLEVBQUkxQixDQUFBLElBQUs7TUFDcEMsSUFBSUcsS0FBQSxHQUFRLEtBQUtPLE9BQUEsQ0FBUVYsQ0FBQTtRQUFJOEIsR0FBQSxHQUFNL0IsR0FBQSxHQUFNSSxLQUFBLENBQU1FLFFBQUE7TUFDL0MsSUFBSXlCLEdBQUEsR0FBTUwsSUFBQSxJQUFRRSxDQUFBLENBQUV4QixLQUFBLEVBQU95QixTQUFBLEdBQVk3QixHQUFBLEVBQUs4QixNQUFBLElBQVUsTUFBTTdCLENBQUMsTUFBTSxTQUFTRyxLQUFBLENBQU1PLE9BQUEsQ0FBUUMsSUFBQSxFQUFNO1FBQzVGLElBQUlvQixLQUFBLEdBQVFoQyxHQUFBLEdBQU07UUFDbEJJLEtBQUEsQ0FBTXFCLFlBQUEsQ0FBYUosSUFBQSxDQUFLWSxHQUFBLENBQUksR0FBR1AsSUFBQSxHQUFPTSxLQUFLLEdBQUdYLElBQUEsQ0FBS0MsR0FBQSxDQUFJbEIsS0FBQSxDQUFNTyxPQUFBLENBQVFDLElBQUEsRUFBTWUsRUFBQSxHQUFLSyxLQUFLLEdBQUdKLENBQUEsRUFBR0MsU0FBQSxHQUFZRyxLQUFLO01BQ2hIO01BQ0FoQyxHQUFBLEdBQU0rQixHQUFBO0lBQ1Y7RUFDSjtFQU1BRyxZQUFZTixDQUFBLEVBQUc7SUFDWCxLQUFLSCxZQUFBLENBQWEsR0FBRyxLQUFLYixJQUFBLEVBQU1nQixDQUFDO0VBQ3JDO0VBS0FPLFlBQVlULElBQUEsRUFBTUMsRUFBQSxFQUFJUyxjQUFBLEVBQWdCQyxRQUFBLEVBQVU7SUFDNUMsSUFBSTVCLElBQUEsR0FBTztNQUFJNkIsS0FBQSxHQUFRO0lBQ3ZCLEtBQUtiLFlBQUEsQ0FBYUMsSUFBQSxFQUFNQyxFQUFBLEVBQUksQ0FBQ1ksSUFBQSxFQUFNdkMsR0FBQSxLQUFRO01BQ3ZDLElBQUl3QyxRQUFBLEdBQVdELElBQUEsQ0FBSy9CLE1BQUEsR0FBUytCLElBQUEsQ0FBSzlCLElBQUEsQ0FBS2dDLEtBQUEsQ0FBTXBCLElBQUEsQ0FBS1ksR0FBQSxDQUFJUCxJQUFBLEVBQU0xQixHQUFHLElBQUlBLEdBQUEsRUFBSzJCLEVBQUEsR0FBSzNCLEdBQUcsSUFDMUUsQ0FBQ3VDLElBQUEsQ0FBS0csTUFBQSxHQUFTLEtBQ1hMLFFBQUEsR0FBWSxPQUFPQSxRQUFBLEtBQWEsYUFBYUEsUUFBQSxDQUFTRSxJQUFJLElBQUlGLFFBQUEsR0FDMURFLElBQUEsQ0FBS0ksSUFBQSxDQUFLQyxJQUFBLENBQUtQLFFBQUEsR0FBV0UsSUFBQSxDQUFLSSxJQUFBLENBQUtDLElBQUEsQ0FBS1AsUUFBQSxDQUFTRSxJQUFJLElBQ2xEO01BQ2xCLElBQUlBLElBQUEsQ0FBS00sT0FBQSxLQUFZTixJQUFBLENBQUtHLE1BQUEsSUFBVUYsUUFBQSxJQUFZRCxJQUFBLENBQUtPLFdBQUEsS0FBZ0JWLGNBQUEsRUFBZ0I7UUFDakYsSUFBSUUsS0FBQSxFQUNBQSxLQUFBLEdBQVEsV0FFUjdCLElBQUEsSUFBUTJCLGNBQUE7TUFDaEI7TUFDQTNCLElBQUEsSUFBUStCLFFBQUE7SUFDWixHQUFHLENBQUM7SUFDSixPQUFPL0IsSUFBQTtFQUNYO0VBS0FzQyxPQUFPQyxLQUFBLEVBQU87SUFDVixJQUFJLENBQUNBLEtBQUEsQ0FBTXBDLElBQUEsRUFDUCxPQUFPO0lBQ1gsSUFBSSxDQUFDLEtBQUtBLElBQUEsRUFDTixPQUFPb0MsS0FBQTtJQUNYLElBQUlDLElBQUEsR0FBTyxLQUFLQyxTQUFBO01BQVdaLEtBQUEsR0FBUVUsS0FBQSxDQUFNRyxVQUFBO01BQVl4QyxPQUFBLEdBQVUsS0FBS0EsT0FBQSxDQUFROEIsS0FBQSxDQUFNO01BQUd4QyxDQUFBLEdBQUk7SUFDekYsSUFBSWdELElBQUEsQ0FBS3pDLE1BQUEsSUFBVXlDLElBQUEsQ0FBSzFDLFVBQUEsQ0FBVytCLEtBQUssR0FBRztNQUN2QzNCLE9BQUEsQ0FBUUEsT0FBQSxDQUFRWSxNQUFBLEdBQVMsS0FBSzBCLElBQUEsQ0FBS0csUUFBQSxDQUFTSCxJQUFBLENBQUt4QyxJQUFBLEdBQU82QixLQUFBLENBQU03QixJQUFJO01BQ2xFUixDQUFBLEdBQUk7SUFDUjtJQUNBLE9BQU9BLENBQUEsR0FBSStDLEtBQUEsQ0FBTXJDLE9BQUEsQ0FBUVksTUFBQSxFQUFRdEIsQ0FBQSxJQUM3QlUsT0FBQSxDQUFRMEMsSUFBQSxDQUFLTCxLQUFBLENBQU1yQyxPQUFBLENBQVFWLENBQUEsQ0FBRTtJQUNqQyxPQUFPLElBQUlwQixRQUFBLENBQVM4QixPQUFBLEVBQVMsS0FBS0MsSUFBQSxHQUFPb0MsS0FBQSxDQUFNcEMsSUFBSTtFQUN2RDtFQUlBMEMsSUFBSTVCLElBQUEsRUFBTUMsRUFBQSxHQUFLLEtBQUtmLElBQUEsRUFBTTtJQUN0QixJQUFJYyxJQUFBLElBQVEsS0FBS0MsRUFBQSxJQUFNLEtBQUtmLElBQUEsRUFDeEIsT0FBTztJQUNYLElBQUkyQyxNQUFBLEdBQVMsRUFBQztNQUFHM0MsSUFBQSxHQUFPO0lBQ3hCLElBQUllLEVBQUEsR0FBS0QsSUFBQSxFQUNMLFNBQVN6QixDQUFBLEdBQUksR0FBR0QsR0FBQSxHQUFNLEdBQUdBLEdBQUEsR0FBTTJCLEVBQUEsRUFBSTFCLENBQUEsSUFBSztNQUNwQyxJQUFJRyxLQUFBLEdBQVEsS0FBS08sT0FBQSxDQUFRVixDQUFBO1FBQUk4QixHQUFBLEdBQU0vQixHQUFBLEdBQU1JLEtBQUEsQ0FBTUUsUUFBQTtNQUMvQyxJQUFJeUIsR0FBQSxHQUFNTCxJQUFBLEVBQU07UUFDWixJQUFJMUIsR0FBQSxHQUFNMEIsSUFBQSxJQUFRSyxHQUFBLEdBQU1KLEVBQUEsRUFBSTtVQUN4QixJQUFJdkIsS0FBQSxDQUFNSSxNQUFBLEVBQ05KLEtBQUEsR0FBUUEsS0FBQSxDQUFNa0QsR0FBQSxDQUFJakMsSUFBQSxDQUFLWSxHQUFBLENBQUksR0FBR1AsSUFBQSxHQUFPMUIsR0FBRyxHQUFHcUIsSUFBQSxDQUFLQyxHQUFBLENBQUlsQixLQUFBLENBQU1LLElBQUEsQ0FBS2MsTUFBQSxFQUFRSSxFQUFBLEdBQUszQixHQUFHLENBQUMsT0FFaEZJLEtBQUEsR0FBUUEsS0FBQSxDQUFNa0QsR0FBQSxDQUFJakMsSUFBQSxDQUFLWSxHQUFBLENBQUksR0FBR1AsSUFBQSxHQUFPMUIsR0FBQSxHQUFNLENBQUMsR0FBR3FCLElBQUEsQ0FBS0MsR0FBQSxDQUFJbEIsS0FBQSxDQUFNTyxPQUFBLENBQVFDLElBQUEsRUFBTWUsRUFBQSxHQUFLM0IsR0FBQSxHQUFNLENBQUMsQ0FBQztRQUNqRztRQUNBdUQsTUFBQSxDQUFPRixJQUFBLENBQUtqRCxLQUFLO1FBQ2pCUSxJQUFBLElBQVFSLEtBQUEsQ0FBTUUsUUFBQTtNQUNsQjtNQUNBTixHQUFBLEdBQU0rQixHQUFBO0lBQ1Y7SUFDSixPQUFPLElBQUlsRCxRQUFBLENBQVMwRSxNQUFBLEVBQVEzQyxJQUFJO0VBQ3BDO0VBSUE0QyxXQUFXOUIsSUFBQSxFQUFNQyxFQUFBLEVBQUk7SUFDakIsSUFBSUQsSUFBQSxJQUFRQyxFQUFBLEVBQ1IsT0FBTzlDLFFBQUEsQ0FBUzRFLEtBQUE7SUFDcEIsSUFBSS9CLElBQUEsSUFBUSxLQUFLQyxFQUFBLElBQU0sS0FBS2hCLE9BQUEsQ0FBUVksTUFBQSxFQUNoQyxPQUFPO0lBQ1gsT0FBTyxJQUFJMUMsUUFBQSxDQUFTLEtBQUs4QixPQUFBLENBQVE4QixLQUFBLENBQU1mLElBQUEsRUFBTUMsRUFBRSxDQUFDO0VBQ3BEO0VBS0ErQixhQUFhQyxLQUFBLEVBQU9wQixJQUFBLEVBQU07SUFDdEIsSUFBSXFCLE9BQUEsR0FBVSxLQUFLakQsT0FBQSxDQUFRZ0QsS0FBQTtJQUMzQixJQUFJQyxPQUFBLElBQVdyQixJQUFBLEVBQ1gsT0FBTztJQUNYLElBQUlzQixLQUFBLEdBQU8sS0FBS2xELE9BQUEsQ0FBUThCLEtBQUEsQ0FBTTtJQUM5QixJQUFJN0IsSUFBQSxHQUFPLEtBQUtBLElBQUEsR0FBTzJCLElBQUEsQ0FBS2pDLFFBQUEsR0FBV3NELE9BQUEsQ0FBUXRELFFBQUE7SUFDL0N1RCxLQUFBLENBQUtGLEtBQUEsSUFBU3BCLElBQUE7SUFDZCxPQUFPLElBQUkxRCxRQUFBLENBQVNnRixLQUFBLEVBQU1qRCxJQUFJO0VBQ2xDO0VBS0FrRCxXQUFXdkIsSUFBQSxFQUFNO0lBQ2IsT0FBTyxJQUFJMUQsUUFBQSxDQUFTLENBQUMwRCxJQUFJLEVBQUV3QixNQUFBLENBQU8sS0FBS3BELE9BQU8sR0FBRyxLQUFLQyxJQUFBLEdBQU8yQixJQUFBLENBQUtqQyxRQUFRO0VBQzlFO0VBS0EwRCxTQUFTekIsSUFBQSxFQUFNO0lBQ1gsT0FBTyxJQUFJMUQsUUFBQSxDQUFTLEtBQUs4QixPQUFBLENBQVFvRCxNQUFBLENBQU94QixJQUFJLEdBQUcsS0FBSzNCLElBQUEsR0FBTzJCLElBQUEsQ0FBS2pDLFFBQVE7RUFDNUU7RUFJQTJELEdBQUdqQixLQUFBLEVBQU87SUFDTixJQUFJLEtBQUtyQyxPQUFBLENBQVFZLE1BQUEsSUFBVXlCLEtBQUEsQ0FBTXJDLE9BQUEsQ0FBUVksTUFBQSxFQUNyQyxPQUFPO0lBQ1gsU0FBU3RCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBS1UsT0FBQSxDQUFRWSxNQUFBLEVBQVF0QixDQUFBLElBQ3JDLElBQUksQ0FBQyxLQUFLVSxPQUFBLENBQVFWLENBQUEsRUFBR2dFLEVBQUEsQ0FBR2pCLEtBQUEsQ0FBTXJDLE9BQUEsQ0FBUVYsQ0FBQSxDQUFFLEdBQ3BDLE9BQU87SUFDZixPQUFPO0VBQ1g7RUFJQSxJQUFJa0QsV0FBQSxFQUFhO0lBQUUsT0FBTyxLQUFLeEMsT0FBQSxDQUFRWSxNQUFBLEdBQVMsS0FBS1osT0FBQSxDQUFRLEtBQUs7RUFBTTtFQUl4RSxJQUFJdUMsVUFBQSxFQUFZO0lBQUUsT0FBTyxLQUFLdkMsT0FBQSxDQUFRWSxNQUFBLEdBQVMsS0FBS1osT0FBQSxDQUFRLEtBQUtBLE9BQUEsQ0FBUVksTUFBQSxHQUFTLEtBQUs7RUFBTTtFQUk3RixJQUFJckIsV0FBQSxFQUFhO0lBQUUsT0FBTyxLQUFLUyxPQUFBLENBQVFZLE1BQUE7RUFBUTtFQUsvQ25CLE1BQU11RCxLQUFBLEVBQU87SUFDVCxJQUFJTyxNQUFBLEdBQVEsS0FBS3ZELE9BQUEsQ0FBUWdELEtBQUE7SUFDekIsSUFBSSxDQUFDTyxNQUFBLEVBQ0QsTUFBTSxJQUFJQyxVQUFBLENBQVcsV0FBV1IsS0FBQSxHQUFRLHVCQUF1QixJQUFJO0lBQ3ZFLE9BQU9PLE1BQUE7RUFDWDtFQUlBRSxXQUFXVCxLQUFBLEVBQU87SUFDZCxPQUFPLEtBQUtoRCxPQUFBLENBQVFnRCxLQUFBLEtBQVU7RUFDbEM7RUFLQVUsUUFBUXpDLENBQUEsRUFBRztJQUNQLFNBQVMzQixDQUFBLEdBQUksR0FBR3FFLENBQUEsR0FBSSxHQUFHckUsQ0FBQSxHQUFJLEtBQUtVLE9BQUEsQ0FBUVksTUFBQSxFQUFRdEIsQ0FBQSxJQUFLO01BQ2pELElBQUlHLEtBQUEsR0FBUSxLQUFLTyxPQUFBLENBQVFWLENBQUE7TUFDekIyQixDQUFBLENBQUV4QixLQUFBLEVBQU9rRSxDQUFBLEVBQUdyRSxDQUFDO01BQ2JxRSxDQUFBLElBQUtsRSxLQUFBLENBQU1FLFFBQUE7SUFDZjtFQUNKO0VBS0FULGNBQWNtRCxLQUFBLEVBQU9oRCxHQUFBLEdBQU0sR0FBRztJQUMxQixPQUFPSCxhQUFBLENBQWMsTUFBTW1ELEtBQUEsRUFBT2hELEdBQUc7RUFDekM7RUFPQWMsWUFBWWtDLEtBQUEsRUFBT2hELEdBQUEsR0FBTSxLQUFLWSxJQUFBLEVBQU0yRCxRQUFBLEdBQVd2QixLQUFBLENBQU1wQyxJQUFBLEVBQU07SUFDdkQsT0FBT0UsV0FBQSxDQUFZLE1BQU1rQyxLQUFBLEVBQU9oRCxHQUFBLEVBQUt1RSxRQUFRO0VBQ2pEO0VBTUFDLFVBQVV4RSxHQUFBLEVBQUs7SUFDWCxJQUFJQSxHQUFBLElBQU8sR0FDUCxPQUFPeUUsUUFBQSxDQUFTLEdBQUd6RSxHQUFHO0lBQzFCLElBQUlBLEdBQUEsSUFBTyxLQUFLWSxJQUFBLEVBQ1osT0FBTzZELFFBQUEsQ0FBUyxLQUFLOUQsT0FBQSxDQUFRWSxNQUFBLEVBQVF2QixHQUFHO0lBQzVDLElBQUlBLEdBQUEsR0FBTSxLQUFLWSxJQUFBLElBQVFaLEdBQUEsR0FBTSxHQUN6QixNQUFNLElBQUltRSxVQUFBLENBQVcsWUFBWW5FLEdBQUEseUJBQTRCLE9BQU87SUFDeEUsU0FBU0MsQ0FBQSxHQUFJLEdBQUd5RSxNQUFBLEdBQVMsSUFBSXpFLENBQUEsSUFBSztNQUM5QixJQUFJMEUsR0FBQSxHQUFNLEtBQUt2RSxLQUFBLENBQU1ILENBQUM7UUFBRzhCLEdBQUEsR0FBTTJDLE1BQUEsR0FBU0MsR0FBQSxDQUFJckUsUUFBQTtNQUM1QyxJQUFJeUIsR0FBQSxJQUFPL0IsR0FBQSxFQUFLO1FBQ1osSUFBSStCLEdBQUEsSUFBTy9CLEdBQUEsRUFDUCxPQUFPeUUsUUFBQSxDQUFTeEUsQ0FBQSxHQUFJLEdBQUc4QixHQUFHO1FBQzlCLE9BQU8wQyxRQUFBLENBQVN4RSxDQUFBLEVBQUd5RSxNQUFNO01BQzdCO01BQ0FBLE1BQUEsR0FBUzNDLEdBQUE7SUFDYjtFQUNKO0VBSUE2QyxTQUFBLEVBQVc7SUFBRSxPQUFPLE1BQU0sS0FBS0MsYUFBQSxDQUFjLElBQUk7RUFBSztFQUl0REEsY0FBQSxFQUFnQjtJQUFFLE9BQU8sS0FBS2xFLE9BQUEsQ0FBUW1FLElBQUEsQ0FBSyxJQUFJO0VBQUc7RUFJbERDLE9BQUEsRUFBUztJQUNMLE9BQU8sS0FBS3BFLE9BQUEsQ0FBUVksTUFBQSxHQUFTLEtBQUtaLE9BQUEsQ0FBUXFFLEdBQUEsQ0FBSUMsQ0FBQSxJQUFLQSxDQUFBLENBQUVGLE1BQUEsQ0FBTyxDQUFDLElBQUk7RUFDckU7RUFJQSxPQUFPRyxTQUFTQyxNQUFBLEVBQVFDLEtBQUEsRUFBTztJQUMzQixJQUFJLENBQUNBLEtBQUEsRUFDRCxPQUFPdkcsUUFBQSxDQUFTNEUsS0FBQTtJQUNwQixJQUFJLENBQUM0QixLQUFBLENBQU1DLE9BQUEsQ0FBUUYsS0FBSyxHQUNwQixNQUFNLElBQUlqQixVQUFBLENBQVcscUNBQXFDO0lBQzlELE9BQU8sSUFBSXRGLFFBQUEsQ0FBU3VHLEtBQUEsQ0FBTUosR0FBQSxDQUFJRyxNQUFBLENBQU9JLFlBQVksQ0FBQztFQUN0RDtFQUtBLE9BQU9DLFVBQVVDLEtBQUEsRUFBTztJQUNwQixJQUFJLENBQUNBLEtBQUEsQ0FBTWxFLE1BQUEsRUFDUCxPQUFPMUMsUUFBQSxDQUFTNEUsS0FBQTtJQUNwQixJQUFJaUMsTUFBQTtNQUFROUUsSUFBQSxHQUFPO0lBQ25CLFNBQVNYLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUl3RixLQUFBLENBQU1sRSxNQUFBLEVBQVF0QixDQUFBLElBQUs7TUFDbkMsSUFBSXNDLElBQUEsR0FBT2tELEtBQUEsQ0FBTXhGLENBQUE7TUFDakJXLElBQUEsSUFBUTJCLElBQUEsQ0FBS2pDLFFBQUE7TUFDYixJQUFJTCxDQUFBLElBQUtzQyxJQUFBLENBQUsvQixNQUFBLElBQVVpRixLQUFBLENBQU14RixDQUFBLEdBQUksR0FBR00sVUFBQSxDQUFXZ0MsSUFBSSxHQUFHO1FBQ25ELElBQUksQ0FBQ21ELE1BQUEsRUFDREEsTUFBQSxHQUFTRCxLQUFBLENBQU1oRCxLQUFBLENBQU0sR0FBR3hDLENBQUM7UUFDN0J5RixNQUFBLENBQU9BLE1BQUEsQ0FBT25FLE1BQUEsR0FBUyxLQUFLZ0IsSUFBQSxDQUN2QmEsUUFBQSxDQUFTc0MsTUFBQSxDQUFPQSxNQUFBLENBQU9uRSxNQUFBLEdBQVMsR0FBR2QsSUFBQSxHQUFPOEIsSUFBQSxDQUFLOUIsSUFBSTtNQUM1RCxXQUNTaUYsTUFBQSxFQUFRO1FBQ2JBLE1BQUEsQ0FBT3JDLElBQUEsQ0FBS2QsSUFBSTtNQUNwQjtJQUNKO0lBQ0EsT0FBTyxJQUFJMUQsUUFBQSxDQUFTNkcsTUFBQSxJQUFVRCxLQUFBLEVBQU83RSxJQUFJO0VBQzdDO0VBT0EsT0FBT2MsS0FBS2lFLEtBQUEsRUFBTztJQUNmLElBQUksQ0FBQ0EsS0FBQSxFQUNELE9BQU85RyxRQUFBLENBQVM0RSxLQUFBO0lBQ3BCLElBQUlrQyxLQUFBLFlBQWlCOUcsUUFBQSxFQUNqQixPQUFPOEcsS0FBQTtJQUNYLElBQUlOLEtBQUEsQ0FBTUMsT0FBQSxDQUFRSyxLQUFLLEdBQ25CLE9BQU8sS0FBS0gsU0FBQSxDQUFVRyxLQUFLO0lBQy9CLElBQUlBLEtBQUEsQ0FBTUMsS0FBQSxFQUNOLE9BQU8sSUFBSS9HLFFBQUEsQ0FBUyxDQUFDOEcsS0FBSyxHQUFHQSxLQUFBLENBQU1yRixRQUFRO0lBQy9DLE1BQU0sSUFBSTZELFVBQUEsQ0FBVyxxQkFBcUJ3QixLQUFBLEdBQVEsb0JBQzdDQSxLQUFBLENBQU1sRSxZQUFBLEdBQWUscUVBQXFFLEdBQUc7RUFDdEc7QUFDSjtBQU1BNUMsUUFBQSxDQUFTNEUsS0FBQSxHQUFRLElBQUk1RSxRQUFBLENBQVMsRUFBQyxFQUFHLENBQUM7QUFDbkMsSUFBTWdILEtBQUEsR0FBUTtFQUFFbEMsS0FBQSxFQUFPO0VBQUdtQyxNQUFBLEVBQVE7QUFBRTtBQUNwQyxTQUFTckIsU0FBU2QsS0FBQSxFQUFPbUMsTUFBQSxFQUFRO0VBQzdCRCxLQUFBLENBQU1sQyxLQUFBLEdBQVFBLEtBQUE7RUFDZGtDLEtBQUEsQ0FBTUMsTUFBQSxHQUFTQSxNQUFBO0VBQ2YsT0FBT0QsS0FBQTtBQUNYO0FBRUEsU0FBU0UsWUFBWWpHLENBQUEsRUFBR0MsQ0FBQSxFQUFHO0VBQ3ZCLElBQUlELENBQUEsS0FBTUMsQ0FBQSxFQUNOLE9BQU87RUFDWCxJQUFJLEVBQUVELENBQUEsSUFBSyxPQUFPQSxDQUFBLElBQUssYUFDbkIsRUFBRUMsQ0FBQSxJQUFLLE9BQU9BLENBQUEsSUFBSyxXQUNuQixPQUFPO0VBQ1gsSUFBSTBGLEtBQUEsR0FBUUosS0FBQSxDQUFNQyxPQUFBLENBQVF4RixDQUFDO0VBQzNCLElBQUl1RixLQUFBLENBQU1DLE9BQUEsQ0FBUXZGLENBQUMsS0FBSzBGLEtBQUEsRUFDcEIsT0FBTztFQUNYLElBQUlBLEtBQUEsRUFBTztJQUNQLElBQUkzRixDQUFBLENBQUV5QixNQUFBLElBQVV4QixDQUFBLENBQUV3QixNQUFBLEVBQ2QsT0FBTztJQUNYLFNBQVN0QixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJSCxDQUFBLENBQUV5QixNQUFBLEVBQVF0QixDQUFBLElBQzFCLElBQUksQ0FBQzhGLFdBQUEsQ0FBWWpHLENBQUEsQ0FBRUcsQ0FBQSxHQUFJRixDQUFBLENBQUVFLENBQUEsQ0FBRSxHQUN2QixPQUFPO0VBQ25CLE9BQ0s7SUFDRCxTQUFTcUUsQ0FBQSxJQUFLeEUsQ0FBQSxFQUNWLElBQUksRUFBRXdFLENBQUEsSUFBS3ZFLENBQUEsS0FBTSxDQUFDZ0csV0FBQSxDQUFZakcsQ0FBQSxDQUFFd0UsQ0FBQSxHQUFJdkUsQ0FBQSxDQUFFdUUsQ0FBQSxDQUFFLEdBQ3BDLE9BQU87SUFDZixTQUFTQSxDQUFBLElBQUt2RSxDQUFBLEVBQ1YsSUFBSSxFQUFFdUUsQ0FBQSxJQUFLeEUsQ0FBQSxHQUNQLE9BQU87RUFDbkI7RUFDQSxPQUFPO0FBQ1g7QUFVQSxJQUFNaEIsSUFBQSxHQUFOLE1BQVc7RUFJUDBDLFlBSUFtQixJQUFBLEVBSUFpRCxLQUFBLEVBQU87SUFDSCxLQUFLakQsSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBS2lELEtBQUEsR0FBUUEsS0FBQTtFQUNqQjtFQVFBSSxTQUFTQyxHQUFBLEVBQUs7SUFDVixJQUFJcEMsS0FBQTtNQUFNcUMsTUFBQSxHQUFTO0lBQ25CLFNBQVNqRyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJZ0csR0FBQSxDQUFJMUUsTUFBQSxFQUFRdEIsQ0FBQSxJQUFLO01BQ2pDLElBQUkrQyxLQUFBLEdBQVFpRCxHQUFBLENBQUloRyxDQUFBO01BQ2hCLElBQUksS0FBS2dFLEVBQUEsQ0FBR2pCLEtBQUssR0FDYixPQUFPaUQsR0FBQTtNQUNYLElBQUksS0FBS3RELElBQUEsQ0FBS3dELFFBQUEsQ0FBU25ELEtBQUEsQ0FBTUwsSUFBSSxHQUFHO1FBQ2hDLElBQUksQ0FBQ2tCLEtBQUEsRUFDREEsS0FBQSxHQUFPb0MsR0FBQSxDQUFJeEQsS0FBQSxDQUFNLEdBQUd4QyxDQUFDO01BQzdCLFdBQ1MrQyxLQUFBLENBQU1MLElBQUEsQ0FBS3dELFFBQUEsQ0FBUyxLQUFLeEQsSUFBSSxHQUFHO1FBQ3JDLE9BQU9zRCxHQUFBO01BQ1gsT0FDSztRQUNELElBQUksQ0FBQ0MsTUFBQSxJQUFVbEQsS0FBQSxDQUFNTCxJQUFBLENBQUt5RCxJQUFBLEdBQU8sS0FBS3pELElBQUEsQ0FBS3lELElBQUEsRUFBTTtVQUM3QyxJQUFJLENBQUN2QyxLQUFBLEVBQ0RBLEtBQUEsR0FBT29DLEdBQUEsQ0FBSXhELEtBQUEsQ0FBTSxHQUFHeEMsQ0FBQztVQUN6QjRELEtBQUEsQ0FBS1IsSUFBQSxDQUFLLElBQUk7VUFDZDZDLE1BQUEsR0FBUztRQUNiO1FBQ0EsSUFBSXJDLEtBQUEsRUFDQUEsS0FBQSxDQUFLUixJQUFBLENBQUtMLEtBQUs7TUFDdkI7SUFDSjtJQUNBLElBQUksQ0FBQ2EsS0FBQSxFQUNEQSxLQUFBLEdBQU9vQyxHQUFBLENBQUl4RCxLQUFBLENBQU07SUFDckIsSUFBSSxDQUFDeUQsTUFBQSxFQUNEckMsS0FBQSxDQUFLUixJQUFBLENBQUssSUFBSTtJQUNsQixPQUFPUSxLQUFBO0VBQ1g7RUFLQXdDLGNBQWNKLEdBQUEsRUFBSztJQUNmLFNBQVNoRyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJZ0csR0FBQSxDQUFJMUUsTUFBQSxFQUFRdEIsQ0FBQSxJQUM1QixJQUFJLEtBQUtnRSxFQUFBLENBQUdnQyxHQUFBLENBQUloRyxDQUFBLENBQUUsR0FDZCxPQUFPZ0csR0FBQSxDQUFJeEQsS0FBQSxDQUFNLEdBQUd4QyxDQUFDLEVBQUU4RCxNQUFBLENBQU9rQyxHQUFBLENBQUl4RCxLQUFBLENBQU14QyxDQUFBLEdBQUksQ0FBQyxDQUFDO0lBQ3RELE9BQU9nRyxHQUFBO0VBQ1g7RUFJQUssUUFBUUwsR0FBQSxFQUFLO0lBQ1QsU0FBU2hHLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlnRyxHQUFBLENBQUkxRSxNQUFBLEVBQVF0QixDQUFBLElBQzVCLElBQUksS0FBS2dFLEVBQUEsQ0FBR2dDLEdBQUEsQ0FBSWhHLENBQUEsQ0FBRSxHQUNkLE9BQU87SUFDZixPQUFPO0VBQ1g7RUFLQWdFLEdBQUdqQixLQUFBLEVBQU87SUFDTixPQUFPLFFBQVFBLEtBQUEsSUFDVixLQUFLTCxJQUFBLElBQVFLLEtBQUEsQ0FBTUwsSUFBQSxJQUFRb0QsV0FBQSxDQUFZLEtBQUtILEtBQUEsRUFBTzVDLEtBQUEsQ0FBTTRDLEtBQUs7RUFDdkU7RUFJQWIsT0FBQSxFQUFTO0lBQ0wsSUFBSXdCLEdBQUEsR0FBTTtNQUFFNUQsSUFBQSxFQUFNLEtBQUtBLElBQUEsQ0FBSzZEO0lBQUs7SUFDakMsU0FBU0MsQ0FBQSxJQUFLLEtBQUtiLEtBQUEsRUFBTztNQUN0QlcsR0FBQSxDQUFJWCxLQUFBLEdBQVEsS0FBS0EsS0FBQTtNQUNqQjtJQUNKO0lBQ0EsT0FBT1csR0FBQTtFQUNYO0VBSUEsT0FBT3JCLFNBQVNDLE1BQUEsRUFBUXVCLElBQUEsRUFBTTtJQUMxQixJQUFJLENBQUNBLElBQUEsRUFDRCxNQUFNLElBQUl2QyxVQUFBLENBQVcsaUNBQWlDO0lBQzFELElBQUl4QixJQUFBLEdBQU93QyxNQUFBLENBQU93QixLQUFBLENBQU1ELElBQUEsQ0FBSy9ELElBQUE7SUFDN0IsSUFBSSxDQUFDQSxJQUFBLEVBQ0QsTUFBTSxJQUFJd0IsVUFBQSxDQUFXLHlCQUF5QnVDLElBQUEsQ0FBSy9ELElBQUEsaUJBQXFCO0lBQzVFLElBQUlpRSxJQUFBLEdBQU9qRSxJQUFBLENBQUtrRSxNQUFBLENBQU9ILElBQUEsQ0FBS2QsS0FBSztJQUNqQ2pELElBQUEsQ0FBS21FLFVBQUEsQ0FBV0YsSUFBQSxDQUFLaEIsS0FBSztJQUMxQixPQUFPZ0IsSUFBQTtFQUNYO0VBSUEsT0FBT0csUUFBUWpILENBQUEsRUFBR0MsQ0FBQSxFQUFHO0lBQ2pCLElBQUlELENBQUEsSUFBS0MsQ0FBQSxFQUNMLE9BQU87SUFDWCxJQUFJRCxDQUFBLENBQUV5QixNQUFBLElBQVV4QixDQUFBLENBQUV3QixNQUFBLEVBQ2QsT0FBTztJQUNYLFNBQVN0QixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJSCxDQUFBLENBQUV5QixNQUFBLEVBQVF0QixDQUFBLElBQzFCLElBQUksQ0FBQ0gsQ0FBQSxDQUFFRyxDQUFBLEVBQUdnRSxFQUFBLENBQUdsRSxDQUFBLENBQUVFLENBQUEsQ0FBRSxHQUNiLE9BQU87SUFDZixPQUFPO0VBQ1g7RUFLQSxPQUFPK0csUUFBUUwsS0FBQSxFQUFPO0lBQ2xCLElBQUksQ0FBQ0EsS0FBQSxJQUFTdEIsS0FBQSxDQUFNQyxPQUFBLENBQVFxQixLQUFLLEtBQUtBLEtBQUEsQ0FBTXBGLE1BQUEsSUFBVSxHQUNsRCxPQUFPekMsSUFBQSxDQUFLbUksSUFBQTtJQUNoQixJQUFJTixLQUFBLFlBQWlCN0gsSUFBQSxFQUNqQixPQUFPLENBQUM2SCxLQUFLO0lBQ2pCLElBQUk5QyxLQUFBLEdBQU84QyxLQUFBLENBQU1sRSxLQUFBLENBQU07SUFDdkJvQixLQUFBLENBQUtxRCxJQUFBLENBQUssQ0FBQ3BILENBQUEsRUFBR0MsQ0FBQSxLQUFNRCxDQUFBLENBQUU2QyxJQUFBLENBQUt5RCxJQUFBLEdBQU9yRyxDQUFBLENBQUU0QyxJQUFBLENBQUt5RCxJQUFJO0lBQzdDLE9BQU92QyxLQUFBO0VBQ1g7QUFDSjtBQUlBL0UsSUFBQSxDQUFLbUksSUFBQSxHQUFPLEVBQUM7QUFNYixJQUFNOUgsWUFBQSxHQUFOLGNBQTJCZ0ksS0FBQSxDQUFNLEVBQ2pDO0FBaUJBLElBQU03SCxLQUFBLEdBQU4sTUFBWTtFQWFSa0MsWUFJQWIsT0FBQSxFQUlBeUcsU0FBQSxFQUlBQyxPQUFBLEVBQVM7SUFDTCxLQUFLMUcsT0FBQSxHQUFVQSxPQUFBO0lBQ2YsS0FBS3lHLFNBQUEsR0FBWUEsU0FBQTtJQUNqQixLQUFLQyxPQUFBLEdBQVVBLE9BQUE7RUFDbkI7RUFJQSxJQUFJekcsS0FBQSxFQUFPO0lBQ1AsT0FBTyxLQUFLRCxPQUFBLENBQVFDLElBQUEsR0FBTyxLQUFLd0csU0FBQSxHQUFZLEtBQUtDLE9BQUE7RUFDckQ7RUFJQUMsU0FBU3RILEdBQUEsRUFBS3VILFFBQUEsRUFBVTtJQUNwQixJQUFJNUcsT0FBQSxHQUFVNkcsVUFBQSxDQUFXLEtBQUs3RyxPQUFBLEVBQVNYLEdBQUEsR0FBTSxLQUFLb0gsU0FBQSxFQUFXRyxRQUFRO0lBQ3JFLE9BQU81RyxPQUFBLElBQVcsSUFBSXJCLEtBQUEsQ0FBTXFCLE9BQUEsRUFBUyxLQUFLeUcsU0FBQSxFQUFXLEtBQUtDLE9BQU87RUFDckU7RUFJQUksY0FBYy9GLElBQUEsRUFBTUMsRUFBQSxFQUFJO0lBQ3BCLE9BQU8sSUFBSXJDLEtBQUEsQ0FBTW9JLFdBQUEsQ0FBWSxLQUFLL0csT0FBQSxFQUFTZSxJQUFBLEdBQU8sS0FBSzBGLFNBQUEsRUFBV3pGLEVBQUEsR0FBSyxLQUFLeUYsU0FBUyxHQUFHLEtBQUtBLFNBQUEsRUFBVyxLQUFLQyxPQUFPO0VBQ3hIO0VBSUFwRCxHQUFHakIsS0FBQSxFQUFPO0lBQ04sT0FBTyxLQUFLckMsT0FBQSxDQUFRc0QsRUFBQSxDQUFHakIsS0FBQSxDQUFNckMsT0FBTyxLQUFLLEtBQUt5RyxTQUFBLElBQWFwRSxLQUFBLENBQU1vRSxTQUFBLElBQWEsS0FBS0MsT0FBQSxJQUFXckUsS0FBQSxDQUFNcUUsT0FBQTtFQUN4RztFQUlBekMsU0FBQSxFQUFXO0lBQ1AsT0FBTyxLQUFLakUsT0FBQSxHQUFVLE1BQU0sS0FBS3lHLFNBQUEsR0FBWSxNQUFNLEtBQUtDLE9BQUEsR0FBVTtFQUN0RTtFQUlBdEMsT0FBQSxFQUFTO0lBQ0wsSUFBSSxDQUFDLEtBQUtwRSxPQUFBLENBQVFDLElBQUEsRUFDZCxPQUFPO0lBQ1gsSUFBSThGLElBQUEsR0FBTztNQUFFL0YsT0FBQSxFQUFTLEtBQUtBLE9BQUEsQ0FBUW9FLE1BQUEsQ0FBTztJQUFFO0lBQzVDLElBQUksS0FBS3FDLFNBQUEsR0FBWSxHQUNqQlYsSUFBQSxDQUFLVSxTQUFBLEdBQVksS0FBS0EsU0FBQTtJQUMxQixJQUFJLEtBQUtDLE9BQUEsR0FBVSxHQUNmWCxJQUFBLENBQUtXLE9BQUEsR0FBVSxLQUFLQSxPQUFBO0lBQ3hCLE9BQU9YLElBQUE7RUFDWDtFQUlBLE9BQU94QixTQUFTQyxNQUFBLEVBQVF1QixJQUFBLEVBQU07SUFDMUIsSUFBSSxDQUFDQSxJQUFBLEVBQ0QsT0FBT3BILEtBQUEsQ0FBTW1FLEtBQUE7SUFDakIsSUFBSTJELFNBQUEsR0FBWVYsSUFBQSxDQUFLVSxTQUFBLElBQWE7TUFBR0MsT0FBQSxHQUFVWCxJQUFBLENBQUtXLE9BQUEsSUFBVztJQUMvRCxJQUFJLE9BQU9ELFNBQUEsSUFBYSxZQUFZLE9BQU9DLE9BQUEsSUFBVyxVQUNsRCxNQUFNLElBQUlsRCxVQUFBLENBQVcsa0NBQWtDO0lBQzNELE9BQU8sSUFBSTdFLEtBQUEsQ0FBTVQsUUFBQSxDQUFTcUcsUUFBQSxDQUFTQyxNQUFBLEVBQVF1QixJQUFBLENBQUsvRixPQUFPLEdBQUd5RyxTQUFBLEVBQVdDLE9BQU87RUFDaEY7RUFLQSxPQUFPTSxRQUFRSixRQUFBLEVBQVVLLGFBQUEsR0FBZ0IsTUFBTTtJQUMzQyxJQUFJUixTQUFBLEdBQVk7TUFBR0MsT0FBQSxHQUFVO0lBQzdCLFNBQVNwQyxDQUFBLEdBQUlzQyxRQUFBLENBQVNwRSxVQUFBLEVBQVk4QixDQUFBLElBQUssQ0FBQ0EsQ0FBQSxDQUFFdkMsTUFBQSxLQUFXa0YsYUFBQSxJQUFpQixDQUFDM0MsQ0FBQSxDQUFFdEMsSUFBQSxDQUFLQyxJQUFBLENBQUtpRixTQUFBLEdBQVk1QyxDQUFBLEdBQUlBLENBQUEsQ0FBRTlCLFVBQUEsRUFDakdpRSxTQUFBO0lBQ0osU0FBU25DLENBQUEsR0FBSXNDLFFBQUEsQ0FBU3JFLFNBQUEsRUFBVytCLENBQUEsSUFBSyxDQUFDQSxDQUFBLENBQUV2QyxNQUFBLEtBQVdrRixhQUFBLElBQWlCLENBQUMzQyxDQUFBLENBQUV0QyxJQUFBLENBQUtDLElBQUEsQ0FBS2lGLFNBQUEsR0FBWTVDLENBQUEsR0FBSUEsQ0FBQSxDQUFFL0IsU0FBQSxFQUNoR21FLE9BQUE7SUFDSixPQUFPLElBQUkvSCxLQUFBLENBQU1pSSxRQUFBLEVBQVVILFNBQUEsRUFBV0MsT0FBTztFQUNqRDtBQUNKO0FBSUEvSCxLQUFBLENBQU1tRSxLQUFBLEdBQVEsSUFBSW5FLEtBQUEsQ0FBTVQsUUFBQSxDQUFTNEUsS0FBQSxFQUFPLEdBQUcsQ0FBQztBQUM1QyxTQUFTaUUsWUFBWS9HLE9BQUEsRUFBU2UsSUFBQSxFQUFNQyxFQUFBLEVBQUk7RUFDcEMsSUFBSTtNQUFFZ0MsS0FBQTtNQUFPbUM7SUFBTyxJQUFJbkYsT0FBQSxDQUFRNkQsU0FBQSxDQUFVOUMsSUFBSTtJQUFHdEIsS0FBQSxHQUFRTyxPQUFBLENBQVF5RCxVQUFBLENBQVdULEtBQUs7RUFDakYsSUFBSTtJQUFFQSxLQUFBLEVBQU9tRSxPQUFBO0lBQVNoQyxNQUFBLEVBQVFpQztFQUFTLElBQUlwSCxPQUFBLENBQVE2RCxTQUFBLENBQVU3QyxFQUFFO0VBQy9ELElBQUltRSxNQUFBLElBQVVwRSxJQUFBLElBQVF0QixLQUFBLENBQU1JLE1BQUEsRUFBUTtJQUNoQyxJQUFJdUgsUUFBQSxJQUFZcEcsRUFBQSxJQUFNLENBQUNoQixPQUFBLENBQVFQLEtBQUEsQ0FBTTBILE9BQU8sRUFBRXRILE1BQUEsRUFDMUMsTUFBTSxJQUFJMkQsVUFBQSxDQUFXLHlCQUF5QjtJQUNsRCxPQUFPeEQsT0FBQSxDQUFRMkMsR0FBQSxDQUFJLEdBQUc1QixJQUFJLEVBQUVxQixNQUFBLENBQU9wQyxPQUFBLENBQVEyQyxHQUFBLENBQUkzQixFQUFFLENBQUM7RUFDdEQ7RUFDQSxJQUFJZ0MsS0FBQSxJQUFTbUUsT0FBQSxFQUNULE1BQU0sSUFBSTNELFVBQUEsQ0FBVyx5QkFBeUI7RUFDbEQsT0FBT3hELE9BQUEsQ0FBUStDLFlBQUEsQ0FBYUMsS0FBQSxFQUFPdkQsS0FBQSxDQUFNNEgsSUFBQSxDQUFLTixXQUFBLENBQVl0SCxLQUFBLENBQU1PLE9BQUEsRUFBU2UsSUFBQSxHQUFPb0UsTUFBQSxHQUFTLEdBQUduRSxFQUFBLEdBQUttRSxNQUFBLEdBQVMsQ0FBQyxDQUFDLENBQUM7QUFDakg7QUFDQSxTQUFTMEIsV0FBVzdHLE9BQUEsRUFBU3NILElBQUEsRUFBTUMsTUFBQSxFQUFRcEcsTUFBQSxFQUFRO0VBQy9DLElBQUk7TUFBRTZCLEtBQUE7TUFBT21DO0lBQU8sSUFBSW5GLE9BQUEsQ0FBUTZELFNBQUEsQ0FBVXlELElBQUk7SUFBRzdILEtBQUEsR0FBUU8sT0FBQSxDQUFReUQsVUFBQSxDQUFXVCxLQUFLO0VBQ2pGLElBQUltQyxNQUFBLElBQVVtQyxJQUFBLElBQVE3SCxLQUFBLENBQU1JLE1BQUEsRUFBUTtJQUNoQyxJQUFJc0IsTUFBQSxJQUFVLENBQUNBLE1BQUEsQ0FBT3FHLFVBQUEsQ0FBV3hFLEtBQUEsRUFBT0EsS0FBQSxFQUFPdUUsTUFBTSxHQUNqRCxPQUFPO0lBQ1gsT0FBT3ZILE9BQUEsQ0FBUTJDLEdBQUEsQ0FBSSxHQUFHMkUsSUFBSSxFQUFFbEYsTUFBQSxDQUFPbUYsTUFBTSxFQUFFbkYsTUFBQSxDQUFPcEMsT0FBQSxDQUFRMkMsR0FBQSxDQUFJMkUsSUFBSSxDQUFDO0VBQ3ZFO0VBQ0EsSUFBSXBILEtBQUEsR0FBUTJHLFVBQUEsQ0FBV3BILEtBQUEsQ0FBTU8sT0FBQSxFQUFTc0gsSUFBQSxHQUFPbkMsTUFBQSxHQUFTLEdBQUdvQyxNQUFBLEVBQVE5SCxLQUFLO0VBQ3RFLE9BQU9TLEtBQUEsSUFBU0YsT0FBQSxDQUFRK0MsWUFBQSxDQUFhQyxLQUFBLEVBQU92RCxLQUFBLENBQU00SCxJQUFBLENBQUtuSCxLQUFLLENBQUM7QUFDakU7QUFDQSxTQUFTdUgsUUFBUUMsS0FBQSxFQUFPQyxHQUFBLEVBQUs3RixLQUFBLEVBQU87RUFDaEMsSUFBSUEsS0FBQSxDQUFNMkUsU0FBQSxHQUFZaUIsS0FBQSxDQUFNRSxLQUFBLEVBQ3hCLE1BQU0sSUFBSXBKLFlBQUEsQ0FBYSxpREFBaUQ7RUFDNUUsSUFBSWtKLEtBQUEsQ0FBTUUsS0FBQSxHQUFROUYsS0FBQSxDQUFNMkUsU0FBQSxJQUFha0IsR0FBQSxDQUFJQyxLQUFBLEdBQVE5RixLQUFBLENBQU00RSxPQUFBLEVBQ25ELE1BQU0sSUFBSWxJLFlBQUEsQ0FBYSwwQkFBMEI7RUFDckQsT0FBT3FKLFlBQUEsQ0FBYUgsS0FBQSxFQUFPQyxHQUFBLEVBQUs3RixLQUFBLEVBQU8sQ0FBQztBQUM1QztBQUNBLFNBQVMrRixhQUFhSCxLQUFBLEVBQU9DLEdBQUEsRUFBSzdGLEtBQUEsRUFBTzhGLEtBQUEsRUFBTztFQUM1QyxJQUFJNUUsS0FBQSxHQUFRMEUsS0FBQSxDQUFNMUUsS0FBQSxDQUFNNEUsS0FBSztJQUFHaEcsSUFBQSxHQUFPOEYsS0FBQSxDQUFNOUYsSUFBQSxDQUFLZ0csS0FBSztFQUN2RCxJQUFJNUUsS0FBQSxJQUFTMkUsR0FBQSxDQUFJM0UsS0FBQSxDQUFNNEUsS0FBSyxLQUFLQSxLQUFBLEdBQVFGLEtBQUEsQ0FBTUUsS0FBQSxHQUFROUYsS0FBQSxDQUFNMkUsU0FBQSxFQUFXO0lBQ3BFLElBQUl2RyxLQUFBLEdBQVEySCxZQUFBLENBQWFILEtBQUEsRUFBT0MsR0FBQSxFQUFLN0YsS0FBQSxFQUFPOEYsS0FBQSxHQUFRLENBQUM7SUFDckQsT0FBT2hHLElBQUEsQ0FBS3lGLElBQUEsQ0FBS3pGLElBQUEsQ0FBSzVCLE9BQUEsQ0FBUStDLFlBQUEsQ0FBYUMsS0FBQSxFQUFPOUMsS0FBSyxDQUFDO0VBQzVELFdBQ1MsQ0FBQzRCLEtBQUEsQ0FBTTlCLE9BQUEsQ0FBUUMsSUFBQSxFQUFNO0lBQzFCLE9BQU82SCxLQUFBLENBQU1sRyxJQUFBLEVBQU1tRyxhQUFBLENBQWNMLEtBQUEsRUFBT0MsR0FBQSxFQUFLQyxLQUFLLENBQUM7RUFDdkQsV0FDUyxDQUFDOUYsS0FBQSxDQUFNMkUsU0FBQSxJQUFhLENBQUMzRSxLQUFBLENBQU00RSxPQUFBLElBQVdnQixLQUFBLENBQU1FLEtBQUEsSUFBU0EsS0FBQSxJQUFTRCxHQUFBLENBQUlDLEtBQUEsSUFBU0EsS0FBQSxFQUFPO0lBQ3ZGLElBQUl6RyxNQUFBLEdBQVN1RyxLQUFBLENBQU12RyxNQUFBO01BQVFuQixPQUFBLEdBQVVtQixNQUFBLENBQU9uQixPQUFBO0lBQzVDLE9BQU84SCxLQUFBLENBQU0zRyxNQUFBLEVBQVFuQixPQUFBLENBQVEyQyxHQUFBLENBQUksR0FBRytFLEtBQUEsQ0FBTU0sWUFBWSxFQUFFNUYsTUFBQSxDQUFPTixLQUFBLENBQU05QixPQUFPLEVBQUVvQyxNQUFBLENBQU9wQyxPQUFBLENBQVEyQyxHQUFBLENBQUlnRixHQUFBLENBQUlLLFlBQVksQ0FBQyxDQUFDO0VBQ3ZILE9BQ0s7SUFDRCxJQUFJO01BQUUzRyxLQUFBO01BQU9EO0lBQUksSUFBSTZHLHNCQUFBLENBQXVCbkcsS0FBQSxFQUFPNEYsS0FBSztJQUN4RCxPQUFPSSxLQUFBLENBQU1sRyxJQUFBLEVBQU1zRyxlQUFBLENBQWdCUixLQUFBLEVBQU9yRyxLQUFBLEVBQU9ELEdBQUEsRUFBS3VHLEdBQUEsRUFBS0MsS0FBSyxDQUFDO0VBQ3JFO0FBQ0o7QUFDQSxTQUFTTyxVQUFVQyxJQUFBLEVBQU1DLEdBQUEsRUFBSztFQUMxQixJQUFJLENBQUNBLEdBQUEsQ0FBSXJHLElBQUEsQ0FBS3NHLGlCQUFBLENBQWtCRixJQUFBLENBQUtwRyxJQUFJLEdBQ3JDLE1BQU0sSUFBSXhELFlBQUEsQ0FBYSxpQkFBaUI2SixHQUFBLENBQUlyRyxJQUFBLENBQUs2RCxJQUFBLEdBQU8sV0FBV3VDLElBQUEsQ0FBS3BHLElBQUEsQ0FBSzZELElBQUk7QUFDekY7QUFDQSxTQUFTMEMsU0FBU0MsT0FBQSxFQUFTQyxNQUFBLEVBQVFiLEtBQUEsRUFBTztFQUN0QyxJQUFJaEcsSUFBQSxHQUFPNEcsT0FBQSxDQUFRNUcsSUFBQSxDQUFLZ0csS0FBSztFQUM3Qk8sU0FBQSxDQUFVdkcsSUFBQSxFQUFNNkcsTUFBQSxDQUFPN0csSUFBQSxDQUFLZ0csS0FBSyxDQUFDO0VBQ2xDLE9BQU9oRyxJQUFBO0FBQ1g7QUFDQSxTQUFTOEcsUUFBUWpKLEtBQUEsRUFBT2tKLE1BQUEsRUFBUTtFQUM1QixJQUFJckcsSUFBQSxHQUFPcUcsTUFBQSxDQUFPL0gsTUFBQSxHQUFTO0VBQzNCLElBQUkwQixJQUFBLElBQVEsS0FBSzdDLEtBQUEsQ0FBTUksTUFBQSxJQUFVSixLQUFBLENBQU1HLFVBQUEsQ0FBVytJLE1BQUEsQ0FBT3JHLElBQUEsQ0FBSyxHQUMxRHFHLE1BQUEsQ0FBT3JHLElBQUEsSUFBUTdDLEtBQUEsQ0FBTWdELFFBQUEsQ0FBU2tHLE1BQUEsQ0FBT3JHLElBQUEsRUFBTXhDLElBQUEsR0FBT0wsS0FBQSxDQUFNSyxJQUFJLE9BRTVENkksTUFBQSxDQUFPakcsSUFBQSxDQUFLakQsS0FBSztBQUN6QjtBQUNBLFNBQVNtSixTQUFTQyxNQUFBLEVBQVFDLElBQUEsRUFBTWxCLEtBQUEsRUFBT2UsTUFBQSxFQUFRO0VBQzNDLElBQUkvRyxJQUFBLElBQVFrSCxJQUFBLElBQVFELE1BQUEsRUFBUWpILElBQUEsQ0FBS2dHLEtBQUs7RUFDdEMsSUFBSW1CLFVBQUEsR0FBYTtJQUFHQyxRQUFBLEdBQVdGLElBQUEsR0FBT0EsSUFBQSxDQUFLOUYsS0FBQSxDQUFNNEUsS0FBSyxJQUFJaEcsSUFBQSxDQUFLckMsVUFBQTtFQUMvRCxJQUFJc0osTUFBQSxFQUFRO0lBQ1JFLFVBQUEsR0FBYUYsTUFBQSxDQUFPN0YsS0FBQSxDQUFNNEUsS0FBSztJQUMvQixJQUFJaUIsTUFBQSxDQUFPakIsS0FBQSxHQUFRQSxLQUFBLEVBQU87TUFDdEJtQixVQUFBO0lBQ0osV0FDU0YsTUFBQSxDQUFPSSxVQUFBLEVBQVk7TUFDeEJQLE9BQUEsQ0FBUUcsTUFBQSxDQUFPSyxTQUFBLEVBQVdQLE1BQU07TUFDaENJLFVBQUE7SUFDSjtFQUNKO0VBQ0EsU0FBU3pKLENBQUEsR0FBSXlKLFVBQUEsRUFBWXpKLENBQUEsR0FBSTBKLFFBQUEsRUFBVTFKLENBQUEsSUFDbkNvSixPQUFBLENBQVE5RyxJQUFBLENBQUtuQyxLQUFBLENBQU1ILENBQUMsR0FBR3FKLE1BQU07RUFDakMsSUFBSUcsSUFBQSxJQUFRQSxJQUFBLENBQUtsQixLQUFBLElBQVNBLEtBQUEsSUFBU2tCLElBQUEsQ0FBS0csVUFBQSxFQUNwQ1AsT0FBQSxDQUFRSSxJQUFBLENBQUtLLFVBQUEsRUFBWVIsTUFBTTtBQUN2QztBQUNBLFNBQVNiLE1BQU1sRyxJQUFBLEVBQU01QixPQUFBLEVBQVM7RUFDMUI0QixJQUFBLENBQUtJLElBQUEsQ0FBS29ILFlBQUEsQ0FBYXBKLE9BQU87RUFDOUIsT0FBTzRCLElBQUEsQ0FBS3lGLElBQUEsQ0FBS3JILE9BQU87QUFDNUI7QUFDQSxTQUFTa0ksZ0JBQWdCUixLQUFBLEVBQU9tQixNQUFBLEVBQVFDLElBQUEsRUFBTW5CLEdBQUEsRUFBS0MsS0FBQSxFQUFPO0VBQ3RELElBQUluQixTQUFBLEdBQVlpQixLQUFBLENBQU1FLEtBQUEsR0FBUUEsS0FBQSxJQUFTVyxRQUFBLENBQVNiLEtBQUEsRUFBT21CLE1BQUEsRUFBUWpCLEtBQUEsR0FBUSxDQUFDO0VBQ3hFLElBQUlsQixPQUFBLEdBQVVpQixHQUFBLENBQUlDLEtBQUEsR0FBUUEsS0FBQSxJQUFTVyxRQUFBLENBQVNPLElBQUEsRUFBTW5CLEdBQUEsRUFBS0MsS0FBQSxHQUFRLENBQUM7RUFDaEUsSUFBSTVILE9BQUEsR0FBVSxFQUFDO0VBQ2Y0SSxRQUFBLENBQVMsTUFBTWxCLEtBQUEsRUFBT0UsS0FBQSxFQUFPNUgsT0FBTztFQUNwQyxJQUFJeUcsU0FBQSxJQUFhQyxPQUFBLElBQVdtQyxNQUFBLENBQU83RixLQUFBLENBQU00RSxLQUFLLEtBQUtrQixJQUFBLENBQUs5RixLQUFBLENBQU00RSxLQUFLLEdBQUc7SUFDbEVPLFNBQUEsQ0FBVTFCLFNBQUEsRUFBV0MsT0FBTztJQUM1QmdDLE9BQUEsQ0FBUVosS0FBQSxDQUFNckIsU0FBQSxFQUFXeUIsZUFBQSxDQUFnQlIsS0FBQSxFQUFPbUIsTUFBQSxFQUFRQyxJQUFBLEVBQU1uQixHQUFBLEVBQUtDLEtBQUEsR0FBUSxDQUFDLENBQUMsR0FBRzVILE9BQU87RUFDM0YsT0FDSztJQUNELElBQUl5RyxTQUFBLEVBQ0FpQyxPQUFBLENBQVFaLEtBQUEsQ0FBTXJCLFNBQUEsRUFBV3NCLGFBQUEsQ0FBY0wsS0FBQSxFQUFPbUIsTUFBQSxFQUFRakIsS0FBQSxHQUFRLENBQUMsQ0FBQyxHQUFHNUgsT0FBTztJQUM5RTRJLFFBQUEsQ0FBU0MsTUFBQSxFQUFRQyxJQUFBLEVBQU1sQixLQUFBLEVBQU81SCxPQUFPO0lBQ3JDLElBQUkwRyxPQUFBLEVBQ0FnQyxPQUFBLENBQVFaLEtBQUEsQ0FBTXBCLE9BQUEsRUFBU3FCLGFBQUEsQ0FBY2UsSUFBQSxFQUFNbkIsR0FBQSxFQUFLQyxLQUFBLEdBQVEsQ0FBQyxDQUFDLEdBQUc1SCxPQUFPO0VBQzVFO0VBQ0E0SSxRQUFBLENBQVNqQixHQUFBLEVBQUssTUFBTUMsS0FBQSxFQUFPNUgsT0FBTztFQUNsQyxPQUFPLElBQUk5QixRQUFBLENBQVM4QixPQUFPO0FBQy9CO0FBQ0EsU0FBUytILGNBQWNMLEtBQUEsRUFBT0MsR0FBQSxFQUFLQyxLQUFBLEVBQU87RUFDdEMsSUFBSTVILE9BQUEsR0FBVSxFQUFDO0VBQ2Y0SSxRQUFBLENBQVMsTUFBTWxCLEtBQUEsRUFBT0UsS0FBQSxFQUFPNUgsT0FBTztFQUNwQyxJQUFJMEgsS0FBQSxDQUFNRSxLQUFBLEdBQVFBLEtBQUEsRUFBTztJQUNyQixJQUFJNUYsSUFBQSxHQUFPdUcsUUFBQSxDQUFTYixLQUFBLEVBQU9DLEdBQUEsRUFBS0MsS0FBQSxHQUFRLENBQUM7SUFDekNjLE9BQUEsQ0FBUVosS0FBQSxDQUFNOUYsSUFBQSxFQUFNK0YsYUFBQSxDQUFjTCxLQUFBLEVBQU9DLEdBQUEsRUFBS0MsS0FBQSxHQUFRLENBQUMsQ0FBQyxHQUFHNUgsT0FBTztFQUN0RTtFQUNBNEksUUFBQSxDQUFTakIsR0FBQSxFQUFLLE1BQU1DLEtBQUEsRUFBTzVILE9BQU87RUFDbEMsT0FBTyxJQUFJOUIsUUFBQSxDQUFTOEIsT0FBTztBQUMvQjtBQUNBLFNBQVNpSSx1QkFBdUJuRyxLQUFBLEVBQU91SCxNQUFBLEVBQVE7RUFDM0MsSUFBSUMsS0FBQSxHQUFRRCxNQUFBLENBQU96QixLQUFBLEdBQVE5RixLQUFBLENBQU0yRSxTQUFBO0lBQVd0RixNQUFBLEdBQVNrSSxNQUFBLENBQU96SCxJQUFBLENBQUswSCxLQUFLO0VBQ3RFLElBQUkxSCxJQUFBLEdBQU9ULE1BQUEsQ0FBT2tHLElBQUEsQ0FBS3ZGLEtBQUEsQ0FBTTlCLE9BQU87RUFDcEMsU0FBU1YsQ0FBQSxHQUFJZ0ssS0FBQSxHQUFRLEdBQUdoSyxDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUM1QnNDLElBQUEsR0FBT3lILE1BQUEsQ0FBT3pILElBQUEsQ0FBS3RDLENBQUMsRUFBRStILElBQUEsQ0FBS25KLFFBQUEsQ0FBUzZDLElBQUEsQ0FBS2EsSUFBSSxDQUFDO0VBQ2xELE9BQU87SUFBRVAsS0FBQSxFQUFPTyxJQUFBLENBQUsySCxjQUFBLENBQWV6SCxLQUFBLENBQU0yRSxTQUFBLEdBQVk2QyxLQUFLO0lBQ3ZEbEksR0FBQSxFQUFLUSxJQUFBLENBQUsySCxjQUFBLENBQWUzSCxJQUFBLENBQUs1QixPQUFBLENBQVFDLElBQUEsR0FBTzZCLEtBQUEsQ0FBTTRFLE9BQUEsR0FBVTRDLEtBQUs7RUFBRTtBQUM1RTtBQVlBLElBQU03SyxXQUFBLEdBQU4sTUFBa0I7RUFJZG9DLFlBSUF4QixHQUFBLEVBSUFtSyxJQUFBLEVBSUF4QixZQUFBLEVBQWM7SUFDVixLQUFLM0ksR0FBQSxHQUFNQSxHQUFBO0lBQ1gsS0FBS21LLElBQUEsR0FBT0EsSUFBQTtJQUNaLEtBQUt4QixZQUFBLEdBQWVBLFlBQUE7SUFDcEIsS0FBS0osS0FBQSxHQUFRNEIsSUFBQSxDQUFLNUksTUFBQSxHQUFTLElBQUk7RUFDbkM7RUFJQTZJLGFBQWFDLEdBQUEsRUFBSztJQUNkLElBQUlBLEdBQUEsSUFBTyxNQUNQLE9BQU8sS0FBSzlCLEtBQUE7SUFDaEIsSUFBSThCLEdBQUEsR0FBTSxHQUNOLE9BQU8sS0FBSzlCLEtBQUEsR0FBUThCLEdBQUE7SUFDeEIsT0FBT0EsR0FBQTtFQUNYO0VBTUEsSUFBSXZJLE9BQUEsRUFBUztJQUFFLE9BQU8sS0FBS1MsSUFBQSxDQUFLLEtBQUtnRyxLQUFLO0VBQUc7RUFJN0MsSUFBSStCLElBQUEsRUFBTTtJQUFFLE9BQU8sS0FBSy9ILElBQUEsQ0FBSyxDQUFDO0VBQUc7RUFLakNBLEtBQUtnRyxLQUFBLEVBQU87SUFBRSxPQUFPLEtBQUs0QixJQUFBLENBQUssS0FBS0MsWUFBQSxDQUFhN0IsS0FBSyxJQUFJO0VBQUk7RUFNOUQ1RSxNQUFNNEUsS0FBQSxFQUFPO0lBQUUsT0FBTyxLQUFLNEIsSUFBQSxDQUFLLEtBQUtDLFlBQUEsQ0FBYTdCLEtBQUssSUFBSSxJQUFJO0VBQUk7RUFLbkVnQyxXQUFXaEMsS0FBQSxFQUFPO0lBQ2RBLEtBQUEsR0FBUSxLQUFLNkIsWUFBQSxDQUFhN0IsS0FBSztJQUMvQixPQUFPLEtBQUs1RSxLQUFBLENBQU00RSxLQUFLLEtBQUtBLEtBQUEsSUFBUyxLQUFLQSxLQUFBLElBQVMsQ0FBQyxLQUFLcUIsVUFBQSxHQUFhLElBQUk7RUFDOUU7RUFLQTVILE1BQU11RyxLQUFBLEVBQU87SUFDVEEsS0FBQSxHQUFRLEtBQUs2QixZQUFBLENBQWE3QixLQUFLO0lBQy9CLE9BQU9BLEtBQUEsSUFBUyxJQUFJLElBQUksS0FBSzRCLElBQUEsQ0FBSzVCLEtBQUEsR0FBUSxJQUFJLEtBQUs7RUFDdkQ7RUFLQXhHLElBQUl3RyxLQUFBLEVBQU87SUFDUEEsS0FBQSxHQUFRLEtBQUs2QixZQUFBLENBQWE3QixLQUFLO0lBQy9CLE9BQU8sS0FBS3ZHLEtBQUEsQ0FBTXVHLEtBQUssSUFBSSxLQUFLaEcsSUFBQSxDQUFLZ0csS0FBSyxFQUFFNUgsT0FBQSxDQUFRQyxJQUFBO0VBQ3hEO0VBTUE0SixPQUFPakMsS0FBQSxFQUFPO0lBQ1ZBLEtBQUEsR0FBUSxLQUFLNkIsWUFBQSxDQUFhN0IsS0FBSztJQUMvQixJQUFJLENBQUNBLEtBQUEsRUFDRCxNQUFNLElBQUlwRSxVQUFBLENBQVcsZ0RBQWdEO0lBQ3pFLE9BQU9vRSxLQUFBLElBQVMsS0FBS0EsS0FBQSxHQUFRLElBQUksS0FBS3ZJLEdBQUEsR0FBTSxLQUFLbUssSUFBQSxDQUFLNUIsS0FBQSxHQUFRLElBQUk7RUFDdEU7RUFLQWtDLE1BQU1sQyxLQUFBLEVBQU87SUFDVEEsS0FBQSxHQUFRLEtBQUs2QixZQUFBLENBQWE3QixLQUFLO0lBQy9CLElBQUksQ0FBQ0EsS0FBQSxFQUNELE1BQU0sSUFBSXBFLFVBQUEsQ0FBVywrQ0FBK0M7SUFDeEUsT0FBT29FLEtBQUEsSUFBUyxLQUFLQSxLQUFBLEdBQVEsSUFBSSxLQUFLdkksR0FBQSxHQUFNLEtBQUttSyxJQUFBLENBQUs1QixLQUFBLEdBQVEsSUFBSSxLQUFLLEtBQUs0QixJQUFBLENBQUs1QixLQUFBLEdBQVEsR0FBR2pJLFFBQUE7RUFDaEc7RUFNQSxJQUFJc0osV0FBQSxFQUFhO0lBQUUsT0FBTyxLQUFLNUosR0FBQSxHQUFNLEtBQUttSyxJQUFBLENBQUssS0FBS0EsSUFBQSxDQUFLNUksTUFBQSxHQUFTO0VBQUk7RUFNdEUsSUFBSXNJLFVBQUEsRUFBWTtJQUNaLElBQUkvSCxNQUFBLEdBQVMsS0FBS0EsTUFBQTtNQUFRNkIsS0FBQSxHQUFRLEtBQUtBLEtBQUEsQ0FBTSxLQUFLNEUsS0FBSztJQUN2RCxJQUFJNUUsS0FBQSxJQUFTN0IsTUFBQSxDQUFPNUIsVUFBQSxFQUNoQixPQUFPO0lBQ1gsSUFBSXdLLElBQUEsR0FBTyxLQUFLMUssR0FBQSxHQUFNLEtBQUttSyxJQUFBLENBQUssS0FBS0EsSUFBQSxDQUFLNUksTUFBQSxHQUFTO01BQUluQixLQUFBLEdBQVEwQixNQUFBLENBQU8xQixLQUFBLENBQU11RCxLQUFLO0lBQ2pGLE9BQU8rRyxJQUFBLEdBQU81SSxNQUFBLENBQU8xQixLQUFBLENBQU11RCxLQUFLLEVBQUVMLEdBQUEsQ0FBSW9ILElBQUksSUFBSXRLLEtBQUE7RUFDbEQ7RUFNQSxJQUFJMEosV0FBQSxFQUFhO0lBQ2IsSUFBSW5HLEtBQUEsR0FBUSxLQUFLQSxLQUFBLENBQU0sS0FBSzRFLEtBQUs7SUFDakMsSUFBSW1DLElBQUEsR0FBTyxLQUFLMUssR0FBQSxHQUFNLEtBQUttSyxJQUFBLENBQUssS0FBS0EsSUFBQSxDQUFLNUksTUFBQSxHQUFTO0lBQ25ELElBQUltSixJQUFBLEVBQ0EsT0FBTyxLQUFLNUksTUFBQSxDQUFPMUIsS0FBQSxDQUFNdUQsS0FBSyxFQUFFTCxHQUFBLENBQUksR0FBR29ILElBQUk7SUFDL0MsT0FBTy9HLEtBQUEsSUFBUyxJQUFJLE9BQU8sS0FBSzdCLE1BQUEsQ0FBTzFCLEtBQUEsQ0FBTXVELEtBQUEsR0FBUSxDQUFDO0VBQzFEO0VBS0FnSCxXQUFXaEgsS0FBQSxFQUFPNEUsS0FBQSxFQUFPO0lBQ3JCQSxLQUFBLEdBQVEsS0FBSzZCLFlBQUEsQ0FBYTdCLEtBQUs7SUFDL0IsSUFBSWhHLElBQUEsR0FBTyxLQUFLNEgsSUFBQSxDQUFLNUIsS0FBQSxHQUFRO01BQUl2SSxHQUFBLEdBQU11SSxLQUFBLElBQVMsSUFBSSxJQUFJLEtBQUs0QixJQUFBLENBQUs1QixLQUFBLEdBQVEsSUFBSSxLQUFLO0lBQ25GLFNBQVN0SSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJMEQsS0FBQSxFQUFPMUQsQ0FBQSxJQUN2QkQsR0FBQSxJQUFPdUMsSUFBQSxDQUFLbkMsS0FBQSxDQUFNSCxDQUFDLEVBQUVLLFFBQUE7SUFDekIsT0FBT04sR0FBQTtFQUNYO0VBT0EyRyxNQUFBLEVBQVE7SUFDSixJQUFJN0UsTUFBQSxHQUFTLEtBQUtBLE1BQUE7TUFBUTZCLEtBQUEsR0FBUSxLQUFLQSxLQUFBLENBQU07SUFFN0MsSUFBSTdCLE1BQUEsQ0FBT25CLE9BQUEsQ0FBUUMsSUFBQSxJQUFRLEdBQ3ZCLE9BQU85QixJQUFBLENBQUttSSxJQUFBO0lBRWhCLElBQUksS0FBSzJDLFVBQUEsRUFDTCxPQUFPOUgsTUFBQSxDQUFPMUIsS0FBQSxDQUFNdUQsS0FBSyxFQUFFZ0QsS0FBQTtJQUMvQixJQUFJb0MsSUFBQSxHQUFPakgsTUFBQSxDQUFPc0MsVUFBQSxDQUFXVCxLQUFBLEdBQVEsQ0FBQztNQUFHWCxLQUFBLEdBQVFsQixNQUFBLENBQU9zQyxVQUFBLENBQVdULEtBQUs7SUFHeEUsSUFBSSxDQUFDb0YsSUFBQSxFQUFNO01BQ1AsSUFBSTZCLEdBQUEsR0FBTTdCLElBQUE7TUFDVkEsSUFBQSxHQUFPL0YsS0FBQTtNQUNQQSxLQUFBLEdBQVE0SCxHQUFBO0lBQ1o7SUFHQSxJQUFJakUsS0FBQSxHQUFRb0MsSUFBQSxDQUFLcEMsS0FBQTtJQUNqQixTQUFTMUcsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTBHLEtBQUEsQ0FBTXBGLE1BQUEsRUFBUXRCLENBQUEsSUFDOUIsSUFBSTBHLEtBQUEsQ0FBTTFHLENBQUEsRUFBRzBDLElBQUEsQ0FBS0MsSUFBQSxDQUFLaUksU0FBQSxLQUFjLFVBQVUsQ0FBQzdILEtBQUEsSUFBUyxDQUFDMkQsS0FBQSxDQUFNMUcsQ0FBQSxFQUFHcUcsT0FBQSxDQUFRdEQsS0FBQSxDQUFNMkQsS0FBSyxJQUNsRkEsS0FBQSxHQUFRQSxLQUFBLENBQU0xRyxDQUFBLElBQUtvRyxhQUFBLENBQWNNLEtBQUs7SUFDOUMsT0FBT0EsS0FBQTtFQUNYO0VBU0FtRSxZQUFZckIsSUFBQSxFQUFNO0lBQ2QsSUFBSWdCLEtBQUEsR0FBUSxLQUFLM0ksTUFBQSxDQUFPc0MsVUFBQSxDQUFXLEtBQUtULEtBQUEsQ0FBTSxDQUFDO0lBQy9DLElBQUksQ0FBQzhHLEtBQUEsSUFBUyxDQUFDQSxLQUFBLENBQU1NLFFBQUEsRUFDakIsT0FBTztJQUNYLElBQUlwRSxLQUFBLEdBQVE4RCxLQUFBLENBQU05RCxLQUFBO01BQU9xRSxJQUFBLEdBQU92QixJQUFBLENBQUszSCxNQUFBLENBQU9zQyxVQUFBLENBQVdxRixJQUFBLENBQUs5RixLQUFBLENBQU0sQ0FBQztJQUNuRSxTQUFTMUQsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTBHLEtBQUEsQ0FBTXBGLE1BQUEsRUFBUXRCLENBQUEsSUFDOUIsSUFBSTBHLEtBQUEsQ0FBTTFHLENBQUEsRUFBRzBDLElBQUEsQ0FBS0MsSUFBQSxDQUFLaUksU0FBQSxLQUFjLFVBQVUsQ0FBQ0csSUFBQSxJQUFRLENBQUNyRSxLQUFBLENBQU0xRyxDQUFBLEVBQUdxRyxPQUFBLENBQVEwRSxJQUFBLENBQUtyRSxLQUFLLElBQ2hGQSxLQUFBLEdBQVFBLEtBQUEsQ0FBTTFHLENBQUEsSUFBS29HLGFBQUEsQ0FBY00sS0FBSztJQUM5QyxPQUFPQSxLQUFBO0VBQ1g7RUFLQXNFLFlBQVlqTCxHQUFBLEVBQUs7SUFDYixTQUFTdUksS0FBQSxHQUFRLEtBQUtBLEtBQUEsRUFBT0EsS0FBQSxHQUFRLEdBQUdBLEtBQUEsSUFDcEMsSUFBSSxLQUFLdkcsS0FBQSxDQUFNdUcsS0FBSyxLQUFLdkksR0FBQSxJQUFPLEtBQUsrQixHQUFBLENBQUl3RyxLQUFLLEtBQUt2SSxHQUFBLEVBQy9DLE9BQU91SSxLQUFBO0lBQ2YsT0FBTztFQUNYO0VBVUEyQyxXQUFXbEksS0FBQSxHQUFRLE1BQU1tSSxJQUFBLEVBQU07SUFDM0IsSUFBSW5JLEtBQUEsQ0FBTWhELEdBQUEsR0FBTSxLQUFLQSxHQUFBLEVBQ2pCLE9BQU9nRCxLQUFBLENBQU1rSSxVQUFBLENBQVcsSUFBSTtJQUNoQyxTQUFTRSxDQUFBLEdBQUksS0FBSzdDLEtBQUEsSUFBUyxLQUFLekcsTUFBQSxDQUFPdUosYUFBQSxJQUFpQixLQUFLckwsR0FBQSxJQUFPZ0QsS0FBQSxDQUFNaEQsR0FBQSxHQUFNLElBQUksSUFBSW9MLENBQUEsSUFBSyxHQUFHQSxDQUFBLElBQzVGLElBQUlwSSxLQUFBLENBQU1oRCxHQUFBLElBQU8sS0FBSytCLEdBQUEsQ0FBSXFKLENBQUMsTUFBTSxDQUFDRCxJQUFBLElBQVFBLElBQUEsQ0FBSyxLQUFLNUksSUFBQSxDQUFLNkksQ0FBQyxDQUFDLElBQ3ZELE9BQU8sSUFBSW5NLFNBQUEsQ0FBVSxNQUFNK0QsS0FBQSxFQUFPb0ksQ0FBQztJQUMzQyxPQUFPO0VBQ1g7RUFJQUUsV0FBV3RJLEtBQUEsRUFBTztJQUNkLE9BQU8sS0FBS2hELEdBQUEsR0FBTSxLQUFLMkksWUFBQSxJQUFnQjNGLEtBQUEsQ0FBTWhELEdBQUEsR0FBTWdELEtBQUEsQ0FBTTJGLFlBQUE7RUFDN0Q7RUFJQTFHLElBQUllLEtBQUEsRUFBTztJQUNQLE9BQU9BLEtBQUEsQ0FBTWhELEdBQUEsR0FBTSxLQUFLQSxHQUFBLEdBQU1nRCxLQUFBLEdBQVE7RUFDMUM7RUFJQTFCLElBQUkwQixLQUFBLEVBQU87SUFDUCxPQUFPQSxLQUFBLENBQU1oRCxHQUFBLEdBQU0sS0FBS0EsR0FBQSxHQUFNZ0QsS0FBQSxHQUFRO0VBQzFDO0VBSUE0QixTQUFBLEVBQVc7SUFDUCxJQUFJMkcsR0FBQSxHQUFNO0lBQ1YsU0FBU3RMLENBQUEsR0FBSSxHQUFHQSxDQUFBLElBQUssS0FBS3NJLEtBQUEsRUFBT3RJLENBQUEsSUFDN0JzTCxHQUFBLEtBQVFBLEdBQUEsR0FBTSxNQUFNLE1BQU0sS0FBS2hKLElBQUEsQ0FBS3RDLENBQUMsRUFBRTBDLElBQUEsQ0FBSzZELElBQUEsR0FBTyxNQUFNLEtBQUs3QyxLQUFBLENBQU0xRCxDQUFBLEdBQUksQ0FBQztJQUM3RSxPQUFPc0wsR0FBQSxHQUFNLE1BQU0sS0FBSzVDLFlBQUE7RUFDNUI7RUFJQSxPQUFPNkMsUUFBUUMsSUFBQSxFQUFLekwsR0FBQSxFQUFLO0lBQ3JCLElBQUksRUFBRUEsR0FBQSxJQUFPLEtBQUtBLEdBQUEsSUFBT3lMLElBQUEsQ0FBSTlLLE9BQUEsQ0FBUUMsSUFBQSxHQUNqQyxNQUFNLElBQUl1RCxVQUFBLENBQVcsY0FBY25FLEdBQUEsR0FBTSxlQUFlO0lBQzVELElBQUltSyxJQUFBLEdBQU8sRUFBQztJQUNaLElBQUluSSxLQUFBLEdBQVE7TUFBRzJHLFlBQUEsR0FBZTNJLEdBQUE7SUFDOUIsU0FBU3VDLElBQUEsR0FBT2tKLElBQUEsSUFBTztNQUNuQixJQUFJO1FBQUU5SCxLQUFBO1FBQU9tQztNQUFPLElBQUl2RCxJQUFBLENBQUs1QixPQUFBLENBQVE2RCxTQUFBLENBQVVtRSxZQUFZO01BQzNELElBQUkrQyxHQUFBLEdBQU0vQyxZQUFBLEdBQWU3QyxNQUFBO01BQ3pCcUUsSUFBQSxDQUFLOUcsSUFBQSxDQUFLZCxJQUFBLEVBQU1vQixLQUFBLEVBQU8zQixLQUFBLEdBQVE4RCxNQUFNO01BQ3JDLElBQUksQ0FBQzRGLEdBQUEsRUFDRDtNQUNKbkosSUFBQSxHQUFPQSxJQUFBLENBQUtuQyxLQUFBLENBQU11RCxLQUFLO01BQ3ZCLElBQUlwQixJQUFBLENBQUsvQixNQUFBLEVBQ0w7TUFDSm1JLFlBQUEsR0FBZStDLEdBQUEsR0FBTTtNQUNyQjFKLEtBQUEsSUFBUzhELE1BQUEsR0FBUztJQUN0QjtJQUNBLE9BQU8sSUFBSTFHLFdBQUEsQ0FBWVksR0FBQSxFQUFLbUssSUFBQSxFQUFNeEIsWUFBWTtFQUNsRDtFQUlBLE9BQU9nRCxjQUFjRixJQUFBLEVBQUt6TCxHQUFBLEVBQUs7SUFDM0IsSUFBSTRMLEtBQUEsR0FBUUMsWUFBQSxDQUFhQyxHQUFBLENBQUlMLElBQUc7SUFDaEMsSUFBSUcsS0FBQSxFQUFPO01BQ1AsU0FBUzNMLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkyTCxLQUFBLENBQU1HLElBQUEsQ0FBS3hLLE1BQUEsRUFBUXRCLENBQUEsSUFBSztRQUN4QyxJQUFJK0wsR0FBQSxHQUFNSixLQUFBLENBQU1HLElBQUEsQ0FBSzlMLENBQUE7UUFDckIsSUFBSStMLEdBQUEsQ0FBSWhNLEdBQUEsSUFBT0EsR0FBQSxFQUNYLE9BQU9nTSxHQUFBO01BQ2Y7SUFDSixPQUNLO01BQ0RILFlBQUEsQ0FBYTVGLEdBQUEsQ0FBSXdGLElBQUEsRUFBS0csS0FBQSxHQUFRLElBQUlLLFlBQUEsRUFBWTtJQUNsRDtJQUNBLElBQUkxSSxNQUFBLEdBQVNxSSxLQUFBLENBQU1HLElBQUEsQ0FBS0gsS0FBQSxDQUFNM0wsQ0FBQSxJQUFLYixXQUFBLENBQVlvTSxPQUFBLENBQVFDLElBQUEsRUFBS3pMLEdBQUc7SUFDL0Q0TCxLQUFBLENBQU0zTCxDQUFBLElBQUsyTCxLQUFBLENBQU0zTCxDQUFBLEdBQUksS0FBS2lNLGdCQUFBO0lBQzFCLE9BQU8zSSxNQUFBO0VBQ1g7QUFDSjtBQUNBLElBQU0wSSxZQUFBLEdBQU4sTUFBbUI7RUFDZnpLLFlBQUEsRUFBYztJQUNWLEtBQUt1SyxJQUFBLEdBQU8sRUFBQztJQUNiLEtBQUs5TCxDQUFBLEdBQUk7RUFDYjtBQUNKO0FBQ0EsSUFBTWlNLGdCQUFBLEdBQW1CO0VBQUlMLFlBQUEsR0FBZSxtQkFBSU0sT0FBQSxDQUFRO0FBS3hELElBQU1sTixTQUFBLEdBQU4sTUFBZ0I7RUFNWnVDLFlBT0E2RyxLQUFBLEVBS0FDLEdBQUEsRUFJQUMsS0FBQSxFQUFPO0lBQ0gsS0FBS0YsS0FBQSxHQUFRQSxLQUFBO0lBQ2IsS0FBS0MsR0FBQSxHQUFNQSxHQUFBO0lBQ1gsS0FBS0MsS0FBQSxHQUFRQSxLQUFBO0VBQ2pCO0VBSUEsSUFBSXZHLE1BQUEsRUFBUTtJQUFFLE9BQU8sS0FBS3FHLEtBQUEsQ0FBTW1DLE1BQUEsQ0FBTyxLQUFLakMsS0FBQSxHQUFRLENBQUM7RUFBRztFQUl4RCxJQUFJeEcsSUFBQSxFQUFNO0lBQUUsT0FBTyxLQUFLdUcsR0FBQSxDQUFJbUMsS0FBQSxDQUFNLEtBQUtsQyxLQUFBLEdBQVEsQ0FBQztFQUFHO0VBSW5ELElBQUl6RyxPQUFBLEVBQVM7SUFBRSxPQUFPLEtBQUt1RyxLQUFBLENBQU05RixJQUFBLENBQUssS0FBS2dHLEtBQUs7RUFBRztFQUluRCxJQUFJbUIsV0FBQSxFQUFhO0lBQUUsT0FBTyxLQUFLckIsS0FBQSxDQUFNMUUsS0FBQSxDQUFNLEtBQUs0RSxLQUFLO0VBQUc7RUFJeEQsSUFBSW9CLFNBQUEsRUFBVztJQUFFLE9BQU8sS0FBS3JCLEdBQUEsQ0FBSWlDLFVBQUEsQ0FBVyxLQUFLaEMsS0FBSztFQUFHO0FBQzdEO0FBRUEsSUFBTTZELFVBQUEsR0FBYSxlQUFBQyxNQUFBLENBQU94RixNQUFBLENBQU8sSUFBSTtBQWVyQyxJQUFNN0gsSUFBQSxHQUFOLE1BQVc7RUFJUHdDLFlBSUFtQixJQUFBLEVBTUFpRCxLQUFBLEVBRUFqRixPQUFBLEVBS0FnRyxLQUFBLEdBQVE3SCxJQUFBLENBQUttSSxJQUFBLEVBQU07SUFDZixLQUFLdEUsSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBS2lELEtBQUEsR0FBUUEsS0FBQTtJQUNiLEtBQUtlLEtBQUEsR0FBUUEsS0FBQTtJQUNiLEtBQUtoRyxPQUFBLEdBQVVBLE9BQUEsSUFBVzlCLFFBQUEsQ0FBUzRFLEtBQUE7RUFDdkM7RUFJQSxJQUFJNkksU0FBQSxFQUFXO0lBQUUsT0FBTyxLQUFLM0wsT0FBQSxDQUFRQSxPQUFBO0VBQVM7RUFROUMsSUFBSUwsU0FBQSxFQUFXO0lBQUUsT0FBTyxLQUFLb0MsTUFBQSxHQUFTLElBQUksSUFBSSxLQUFLL0IsT0FBQSxDQUFRQyxJQUFBO0VBQU07RUFJakUsSUFBSVYsV0FBQSxFQUFhO0lBQUUsT0FBTyxLQUFLUyxPQUFBLENBQVFULFVBQUE7RUFBWTtFQUtuREUsTUFBTXVELEtBQUEsRUFBTztJQUFFLE9BQU8sS0FBS2hELE9BQUEsQ0FBUVAsS0FBQSxDQUFNdUQsS0FBSztFQUFHO0VBSWpEUyxXQUFXVCxLQUFBLEVBQU87SUFBRSxPQUFPLEtBQUtoRCxPQUFBLENBQVF5RCxVQUFBLENBQVdULEtBQUs7RUFBRztFQUszRFUsUUFBUXpDLENBQUEsRUFBRztJQUFFLEtBQUtqQixPQUFBLENBQVEwRCxPQUFBLENBQVF6QyxDQUFDO0VBQUc7RUFXdENILGFBQWFDLElBQUEsRUFBTUMsRUFBQSxFQUFJQyxDQUFBLEVBQUcySyxRQUFBLEdBQVcsR0FBRztJQUNwQyxLQUFLNUwsT0FBQSxDQUFRYyxZQUFBLENBQWFDLElBQUEsRUFBTUMsRUFBQSxFQUFJQyxDQUFBLEVBQUcySyxRQUFBLEVBQVUsSUFBSTtFQUN6RDtFQUtBckssWUFBWU4sQ0FBQSxFQUFHO0lBQ1gsS0FBS0gsWUFBQSxDQUFhLEdBQUcsS0FBS2QsT0FBQSxDQUFRQyxJQUFBLEVBQU1nQixDQUFDO0VBQzdDO0VBS0EsSUFBSTRLLFlBQUEsRUFBYztJQUNkLE9BQVEsS0FBSzlKLE1BQUEsSUFBVSxLQUFLQyxJQUFBLENBQUtDLElBQUEsQ0FBS1AsUUFBQSxHQUNoQyxLQUFLTSxJQUFBLENBQUtDLElBQUEsQ0FBS1AsUUFBQSxDQUFTLElBQUksSUFDNUIsS0FBS0YsV0FBQSxDQUFZLEdBQUcsS0FBS3hCLE9BQUEsQ0FBUUMsSUFBQSxFQUFNLEVBQUU7RUFDbkQ7RUFRQXVCLFlBQVlULElBQUEsRUFBTUMsRUFBQSxFQUFJUyxjQUFBLEVBQWdCQyxRQUFBLEVBQVU7SUFDNUMsT0FBTyxLQUFLMUIsT0FBQSxDQUFRd0IsV0FBQSxDQUFZVCxJQUFBLEVBQU1DLEVBQUEsRUFBSVMsY0FBQSxFQUFnQkMsUUFBUTtFQUN0RTtFQUtBLElBQUljLFdBQUEsRUFBYTtJQUFFLE9BQU8sS0FBS3hDLE9BQUEsQ0FBUXdDLFVBQUE7RUFBWTtFQUtuRCxJQUFJRCxVQUFBLEVBQVk7SUFBRSxPQUFPLEtBQUt2QyxPQUFBLENBQVF1QyxTQUFBO0VBQVc7RUFJakRlLEdBQUdqQixLQUFBLEVBQU87SUFDTixPQUFPLFFBQVFBLEtBQUEsSUFBVSxLQUFLekMsVUFBQSxDQUFXeUMsS0FBSyxLQUFLLEtBQUtyQyxPQUFBLENBQVFzRCxFQUFBLENBQUdqQixLQUFBLENBQU1yQyxPQUFPO0VBQ3BGO0VBS0FKLFdBQVd5QyxLQUFBLEVBQU87SUFDZCxPQUFPLEtBQUt5SixTQUFBLENBQVV6SixLQUFBLENBQU1MLElBQUEsRUFBTUssS0FBQSxDQUFNNEMsS0FBQSxFQUFPNUMsS0FBQSxDQUFNMkQsS0FBSztFQUM5RDtFQUtBOEYsVUFBVTlKLElBQUEsRUFBTWlELEtBQUEsRUFBT2UsS0FBQSxFQUFPO0lBQzFCLE9BQU8sS0FBS2hFLElBQUEsSUFBUUEsSUFBQSxJQUNoQm9ELFdBQUEsQ0FBWSxLQUFLSCxLQUFBLEVBQU9BLEtBQUEsSUFBU2pELElBQUEsQ0FBSytKLFlBQUEsSUFBZ0JOLFVBQVUsS0FDaEV0TixJQUFBLENBQUtpSSxPQUFBLENBQVEsS0FBS0osS0FBQSxFQUFPQSxLQUFBLElBQVM3SCxJQUFBLENBQUttSSxJQUFJO0VBQ25EO0VBS0FlLEtBQUtySCxPQUFBLEdBQVUsTUFBTTtJQUNqQixJQUFJQSxPQUFBLElBQVcsS0FBS0EsT0FBQSxFQUNoQixPQUFPO0lBQ1gsT0FBTyxJQUFJM0IsSUFBQSxDQUFLLEtBQUsyRCxJQUFBLEVBQU0sS0FBS2lELEtBQUEsRUFBT2pGLE9BQUEsRUFBUyxLQUFLZ0csS0FBSztFQUM5RDtFQUtBQyxLQUFLRCxLQUFBLEVBQU87SUFDUixPQUFPQSxLQUFBLElBQVMsS0FBS0EsS0FBQSxHQUFRLE9BQU8sSUFBSTNILElBQUEsQ0FBSyxLQUFLMkQsSUFBQSxFQUFNLEtBQUtpRCxLQUFBLEVBQU8sS0FBS2pGLE9BQUEsRUFBU2dHLEtBQUs7RUFDM0Y7RUFNQXJELElBQUk1QixJQUFBLEVBQU1DLEVBQUEsR0FBSyxLQUFLaEIsT0FBQSxDQUFRQyxJQUFBLEVBQU07SUFDOUIsSUFBSWMsSUFBQSxJQUFRLEtBQUtDLEVBQUEsSUFBTSxLQUFLaEIsT0FBQSxDQUFRQyxJQUFBLEVBQ2hDLE9BQU87SUFDWCxPQUFPLEtBQUtvSCxJQUFBLENBQUssS0FBS3JILE9BQUEsQ0FBUTJDLEdBQUEsQ0FBSTVCLElBQUEsRUFBTUMsRUFBRSxDQUFDO0VBQy9DO0VBS0FjLE1BQU1mLElBQUEsRUFBTUMsRUFBQSxHQUFLLEtBQUtoQixPQUFBLENBQVFDLElBQUEsRUFBTStMLGNBQUEsR0FBaUIsT0FBTztJQUN4RCxJQUFJakwsSUFBQSxJQUFRQyxFQUFBLEVBQ1IsT0FBT3JDLEtBQUEsQ0FBTW1FLEtBQUE7SUFDakIsSUFBSTRFLEtBQUEsR0FBUSxLQUFLbUQsT0FBQSxDQUFROUosSUFBSTtNQUFHNEcsR0FBQSxHQUFNLEtBQUtrRCxPQUFBLENBQVE3SixFQUFFO0lBQ3JELElBQUk0RyxLQUFBLEdBQVFvRSxjQUFBLEdBQWlCLElBQUl0RSxLQUFBLENBQU00QyxXQUFBLENBQVl0SixFQUFFO0lBQ3JELElBQUlLLEtBQUEsR0FBUXFHLEtBQUEsQ0FBTXJHLEtBQUEsQ0FBTXVHLEtBQUs7TUFBR2hHLElBQUEsR0FBTzhGLEtBQUEsQ0FBTTlGLElBQUEsQ0FBS2dHLEtBQUs7SUFDdkQsSUFBSTVILE9BQUEsR0FBVTRCLElBQUEsQ0FBSzVCLE9BQUEsQ0FBUTJDLEdBQUEsQ0FBSStFLEtBQUEsQ0FBTXJJLEdBQUEsR0FBTWdDLEtBQUEsRUFBT3NHLEdBQUEsQ0FBSXRJLEdBQUEsR0FBTWdDLEtBQUs7SUFDakUsT0FBTyxJQUFJMUMsS0FBQSxDQUFNcUIsT0FBQSxFQUFTMEgsS0FBQSxDQUFNRSxLQUFBLEdBQVFBLEtBQUEsRUFBT0QsR0FBQSxDQUFJQyxLQUFBLEdBQVFBLEtBQUs7RUFDcEU7RUFTQUgsUUFBUTFHLElBQUEsRUFBTUMsRUFBQSxFQUFJYyxLQUFBLEVBQU87SUFDckIsT0FBTzJGLE9BQUEsQ0FBUSxLQUFLb0QsT0FBQSxDQUFROUosSUFBSSxHQUFHLEtBQUs4SixPQUFBLENBQVE3SixFQUFFLEdBQUdjLEtBQUs7RUFDOUQ7RUFJQW1LLE9BQU81TSxHQUFBLEVBQUs7SUFDUixTQUFTdUMsSUFBQSxHQUFPLFFBQVE7TUFDcEIsSUFBSTtRQUFFb0IsS0FBQTtRQUFPbUM7TUFBTyxJQUFJdkQsSUFBQSxDQUFLNUIsT0FBQSxDQUFRNkQsU0FBQSxDQUFVeEUsR0FBRztNQUNsRHVDLElBQUEsR0FBT0EsSUFBQSxDQUFLNkIsVUFBQSxDQUFXVCxLQUFLO01BQzVCLElBQUksQ0FBQ3BCLElBQUEsRUFDRCxPQUFPO01BQ1gsSUFBSXVELE1BQUEsSUFBVTlGLEdBQUEsSUFBT3VDLElBQUEsQ0FBSy9CLE1BQUEsRUFDdEIsT0FBTytCLElBQUE7TUFDWHZDLEdBQUEsSUFBTzhGLE1BQUEsR0FBUztJQUNwQjtFQUNKO0VBTUErRyxXQUFXN00sR0FBQSxFQUFLO0lBQ1osSUFBSTtNQUFFMkQsS0FBQTtNQUFPbUM7SUFBTyxJQUFJLEtBQUtuRixPQUFBLENBQVE2RCxTQUFBLENBQVV4RSxHQUFHO0lBQ2xELE9BQU87TUFBRXVDLElBQUEsRUFBTSxLQUFLNUIsT0FBQSxDQUFReUQsVUFBQSxDQUFXVCxLQUFLO01BQUdBLEtBQUE7TUFBT21DO0lBQU87RUFDakU7RUFNQWdILFlBQVk5TSxHQUFBLEVBQUs7SUFDYixJQUFJQSxHQUFBLElBQU8sR0FDUCxPQUFPO01BQUV1QyxJQUFBLEVBQU07TUFBTW9CLEtBQUEsRUFBTztNQUFHbUMsTUFBQSxFQUFRO0lBQUU7SUFDN0MsSUFBSTtNQUFFbkMsS0FBQTtNQUFPbUM7SUFBTyxJQUFJLEtBQUtuRixPQUFBLENBQVE2RCxTQUFBLENBQVV4RSxHQUFHO0lBQ2xELElBQUk4RixNQUFBLEdBQVM5RixHQUFBLEVBQ1QsT0FBTztNQUFFdUMsSUFBQSxFQUFNLEtBQUs1QixPQUFBLENBQVFQLEtBQUEsQ0FBTXVELEtBQUs7TUFBR0EsS0FBQTtNQUFPbUM7SUFBTztJQUM1RCxJQUFJdkQsSUFBQSxHQUFPLEtBQUs1QixPQUFBLENBQVFQLEtBQUEsQ0FBTXVELEtBQUEsR0FBUSxDQUFDO0lBQ3ZDLE9BQU87TUFBRXBCLElBQUE7TUFBTW9CLEtBQUEsRUFBT0EsS0FBQSxHQUFRO01BQUdtQyxNQUFBLEVBQVFBLE1BQUEsR0FBU3ZELElBQUEsQ0FBS2pDO0lBQVM7RUFDcEU7RUFLQWtMLFFBQVF4TCxHQUFBLEVBQUs7SUFBRSxPQUFPWixXQUFBLENBQVl1TSxhQUFBLENBQWMsTUFBTTNMLEdBQUc7RUFBRztFQUk1RGtLLGVBQWVsSyxHQUFBLEVBQUs7SUFBRSxPQUFPWixXQUFBLENBQVlvTSxPQUFBLENBQVEsTUFBTXhMLEdBQUc7RUFBRztFQUs3RCtNLGFBQWFyTCxJQUFBLEVBQU1DLEVBQUEsRUFBSWdCLElBQUEsRUFBTTtJQUN6QixJQUFJdUIsTUFBQSxHQUFRO0lBQ1osSUFBSXZDLEVBQUEsR0FBS0QsSUFBQSxFQUNMLEtBQUtELFlBQUEsQ0FBYUMsSUFBQSxFQUFNQyxFQUFBLEVBQUlZLElBQUEsSUFBUTtNQUNoQyxJQUFJSSxJQUFBLENBQUsyRCxPQUFBLENBQVEvRCxJQUFBLENBQUtvRSxLQUFLLEdBQ3ZCekMsTUFBQSxHQUFRO01BQ1osT0FBTyxDQUFDQSxNQUFBO0lBQ1osQ0FBQztJQUNMLE9BQU9BLE1BQUE7RUFDWDtFQUlBLElBQUlyQixRQUFBLEVBQVU7SUFBRSxPQUFPLEtBQUtGLElBQUEsQ0FBS0UsT0FBQTtFQUFTO0VBSzFDLElBQUlDLFlBQUEsRUFBYztJQUFFLE9BQU8sS0FBS0gsSUFBQSxDQUFLRyxXQUFBO0VBQWE7RUFJbEQsSUFBSXVJLGNBQUEsRUFBZ0I7SUFBRSxPQUFPLEtBQUsxSSxJQUFBLENBQUswSSxhQUFBO0VBQWU7RUFLdEQsSUFBSU4sU0FBQSxFQUFXO0lBQUUsT0FBTyxLQUFLcEksSUFBQSxDQUFLb0ksUUFBQTtFQUFVO0VBSTVDLElBQUl2SyxPQUFBLEVBQVM7SUFBRSxPQUFPLEtBQUttQyxJQUFBLENBQUtuQyxNQUFBO0VBQVE7RUFJeEMsSUFBSWtDLE9BQUEsRUFBUztJQUFFLE9BQU8sS0FBS0MsSUFBQSxDQUFLRCxNQUFBO0VBQVE7RUFReEMsSUFBSXNLLE9BQUEsRUFBUztJQUFFLE9BQU8sS0FBS3JLLElBQUEsQ0FBS3FLLE1BQUE7RUFBUTtFQUt4Q3BJLFNBQUEsRUFBVztJQUNQLElBQUksS0FBS2pDLElBQUEsQ0FBS0MsSUFBQSxDQUFLcUssYUFBQSxFQUNmLE9BQU8sS0FBS3RLLElBQUEsQ0FBS0MsSUFBQSxDQUFLcUssYUFBQSxDQUFjLElBQUk7SUFDNUMsSUFBSXpHLElBQUEsR0FBTyxLQUFLN0QsSUFBQSxDQUFLNkQsSUFBQTtJQUNyQixJQUFJLEtBQUs3RixPQUFBLENBQVFDLElBQUEsRUFDYjRGLElBQUEsSUFBUSxNQUFNLEtBQUs3RixPQUFBLENBQVFrRSxhQUFBLENBQWMsSUFBSTtJQUNqRCxPQUFPcUksU0FBQSxDQUFVLEtBQUt2RyxLQUFBLEVBQU9ILElBQUk7RUFDckM7RUFJQTJHLGVBQWV4SixLQUFBLEVBQU87SUFDbEIsSUFBSXlKLEtBQUEsR0FBUSxLQUFLekssSUFBQSxDQUFLMEssWUFBQSxDQUFhQyxhQUFBLENBQWMsS0FBSzNNLE9BQUEsRUFBUyxHQUFHZ0QsS0FBSztJQUN2RSxJQUFJLENBQUN5SixLQUFBLEVBQ0QsTUFBTSxJQUFJakcsS0FBQSxDQUFNLHNEQUFzRDtJQUMxRSxPQUFPaUcsS0FBQTtFQUNYO0VBUUFqRixXQUFXekcsSUFBQSxFQUFNQyxFQUFBLEVBQUk0TCxXQUFBLEdBQWMxTyxRQUFBLENBQVM0RSxLQUFBLEVBQU96QixLQUFBLEdBQVEsR0FBR0QsR0FBQSxHQUFNd0wsV0FBQSxDQUFZck4sVUFBQSxFQUFZO0lBQ3hGLElBQUlzTixHQUFBLEdBQU0sS0FBS0wsY0FBQSxDQUFlekwsSUFBSSxFQUFFNEwsYUFBQSxDQUFjQyxXQUFBLEVBQWF2TCxLQUFBLEVBQU9ELEdBQUc7SUFDekUsSUFBSTBMLEdBQUEsR0FBTUQsR0FBQSxJQUFPQSxHQUFBLENBQUlGLGFBQUEsQ0FBYyxLQUFLM00sT0FBQSxFQUFTZ0IsRUFBRTtJQUNuRCxJQUFJLENBQUM4TCxHQUFBLElBQU8sQ0FBQ0EsR0FBQSxDQUFJQyxRQUFBLEVBQ2IsT0FBTztJQUNYLFNBQVN6TixDQUFBLEdBQUkrQixLQUFBLEVBQU8vQixDQUFBLEdBQUk4QixHQUFBLEVBQUs5QixDQUFBLElBQ3pCLElBQUksQ0FBQyxLQUFLMEMsSUFBQSxDQUFLZ0wsV0FBQSxDQUFZSixXQUFBLENBQVluTixLQUFBLENBQU1ILENBQUMsRUFBRTBHLEtBQUssR0FDakQsT0FBTztJQUNmLE9BQU87RUFDWDtFQUtBaUgsZUFBZWxNLElBQUEsRUFBTUMsRUFBQSxFQUFJZ0IsSUFBQSxFQUFNZ0UsS0FBQSxFQUFPO0lBQ2xDLElBQUlBLEtBQUEsSUFBUyxDQUFDLEtBQUtoRSxJQUFBLENBQUtnTCxXQUFBLENBQVloSCxLQUFLLEdBQ3JDLE9BQU87SUFDWCxJQUFJM0UsS0FBQSxHQUFRLEtBQUttTCxjQUFBLENBQWV6TCxJQUFJLEVBQUVtTSxTQUFBLENBQVVsTCxJQUFJO0lBQ3BELElBQUlaLEdBQUEsR0FBTUMsS0FBQSxJQUFTQSxLQUFBLENBQU1zTCxhQUFBLENBQWMsS0FBSzNNLE9BQUEsRUFBU2dCLEVBQUU7SUFDdkQsT0FBT0ksR0FBQSxHQUFNQSxHQUFBLENBQUkyTCxRQUFBLEdBQVc7RUFDaEM7RUFPQUksVUFBVTlLLEtBQUEsRUFBTztJQUNiLElBQUlBLEtBQUEsQ0FBTXJDLE9BQUEsQ0FBUUMsSUFBQSxFQUNkLE9BQU8sS0FBS3VILFVBQUEsQ0FBVyxLQUFLakksVUFBQSxFQUFZLEtBQUtBLFVBQUEsRUFBWThDLEtBQUEsQ0FBTXJDLE9BQU8sT0FFdEUsT0FBTyxLQUFLZ0MsSUFBQSxDQUFLc0csaUJBQUEsQ0FBa0JqRyxLQUFBLENBQU1MLElBQUk7RUFDckQ7RUFLQW9MLE1BQUEsRUFBUTtJQUNKLEtBQUtwTCxJQUFBLENBQUtvSCxZQUFBLENBQWEsS0FBS3BKLE9BQU87SUFDbkMsS0FBS2dDLElBQUEsQ0FBS21FLFVBQUEsQ0FBVyxLQUFLbEIsS0FBSztJQUMvQixJQUFJL0IsS0FBQSxHQUFPL0UsSUFBQSxDQUFLbUksSUFBQTtJQUNoQixTQUFTaEgsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLMEcsS0FBQSxDQUFNcEYsTUFBQSxFQUFRdEIsQ0FBQSxJQUFLO01BQ3hDLElBQUkyRyxJQUFBLEdBQU8sS0FBS0QsS0FBQSxDQUFNMUcsQ0FBQTtNQUN0QjJHLElBQUEsQ0FBS2pFLElBQUEsQ0FBS21FLFVBQUEsQ0FBV0YsSUFBQSxDQUFLaEIsS0FBSztNQUMvQi9CLEtBQUEsR0FBTytDLElBQUEsQ0FBS1osUUFBQSxDQUFTbkMsS0FBSTtJQUM3QjtJQUNBLElBQUksQ0FBQy9FLElBQUEsQ0FBS2lJLE9BQUEsQ0FBUWxELEtBQUEsRUFBTSxLQUFLOEMsS0FBSyxHQUM5QixNQUFNLElBQUl4QyxVQUFBLENBQVcsd0NBQXdDLEtBQUt4QixJQUFBLENBQUs2RCxJQUFBLEtBQVMsS0FBS0csS0FBQSxDQUFNM0IsR0FBQSxDQUFJZ0osQ0FBQSxJQUFLQSxDQUFBLENBQUVyTCxJQUFBLENBQUs2RCxJQUFJLEdBQUc7SUFDdEgsS0FBSzdGLE9BQUEsQ0FBUTBELE9BQUEsQ0FBUTlCLElBQUEsSUFBUUEsSUFBQSxDQUFLd0wsS0FBQSxDQUFNLENBQUM7RUFDN0M7RUFJQWhKLE9BQUEsRUFBUztJQUNMLElBQUl3QixHQUFBLEdBQU07TUFBRTVELElBQUEsRUFBTSxLQUFLQSxJQUFBLENBQUs2RDtJQUFLO0lBQ2pDLFNBQVNDLENBQUEsSUFBSyxLQUFLYixLQUFBLEVBQU87TUFDdEJXLEdBQUEsQ0FBSVgsS0FBQSxHQUFRLEtBQUtBLEtBQUE7TUFDakI7SUFDSjtJQUNBLElBQUksS0FBS2pGLE9BQUEsQ0FBUUMsSUFBQSxFQUNiMkYsR0FBQSxDQUFJNUYsT0FBQSxHQUFVLEtBQUtBLE9BQUEsQ0FBUW9FLE1BQUEsQ0FBTztJQUN0QyxJQUFJLEtBQUs0QixLQUFBLENBQU1wRixNQUFBLEVBQ1hnRixHQUFBLENBQUlJLEtBQUEsR0FBUSxLQUFLQSxLQUFBLENBQU0zQixHQUFBLENBQUlDLENBQUEsSUFBS0EsQ0FBQSxDQUFFRixNQUFBLENBQU8sQ0FBQztJQUM5QyxPQUFPd0IsR0FBQTtFQUNYO0VBSUEsT0FBT3JCLFNBQVNDLE1BQUEsRUFBUXVCLElBQUEsRUFBTTtJQUMxQixJQUFJLENBQUNBLElBQUEsRUFDRCxNQUFNLElBQUl2QyxVQUFBLENBQVcsaUNBQWlDO0lBQzFELElBQUl3QyxLQUFBLEdBQVE7SUFDWixJQUFJRCxJQUFBLENBQUtDLEtBQUEsRUFBTztNQUNaLElBQUksQ0FBQ3RCLEtBQUEsQ0FBTUMsT0FBQSxDQUFRb0IsSUFBQSxDQUFLQyxLQUFLLEdBQ3pCLE1BQU0sSUFBSXhDLFVBQUEsQ0FBVyxxQ0FBcUM7TUFDOUR3QyxLQUFBLEdBQVFELElBQUEsQ0FBS0MsS0FBQSxDQUFNM0IsR0FBQSxDQUFJRyxNQUFBLENBQU84SSxZQUFZO0lBQzlDO0lBQ0EsSUFBSXZILElBQUEsQ0FBSy9ELElBQUEsSUFBUSxRQUFRO01BQ3JCLElBQUksT0FBTytELElBQUEsQ0FBS2pHLElBQUEsSUFBUSxVQUNwQixNQUFNLElBQUkwRCxVQUFBLENBQVcsMkJBQTJCO01BQ3BELE9BQU9nQixNQUFBLENBQU8xRSxJQUFBLENBQUtpRyxJQUFBLENBQUtqRyxJQUFBLEVBQU1rRyxLQUFLO0lBQ3ZDO0lBQ0EsSUFBSWhHLE9BQUEsR0FBVTlCLFFBQUEsQ0FBU3FHLFFBQUEsQ0FBU0MsTUFBQSxFQUFRdUIsSUFBQSxDQUFLL0YsT0FBTztJQUNwRCxJQUFJNEIsSUFBQSxHQUFPNEMsTUFBQSxDQUFPK0ksUUFBQSxDQUFTeEgsSUFBQSxDQUFLL0QsSUFBSSxFQUFFa0UsTUFBQSxDQUFPSCxJQUFBLENBQUtkLEtBQUEsRUFBT2pGLE9BQUEsRUFBU2dHLEtBQUs7SUFDdkVwRSxJQUFBLENBQUtJLElBQUEsQ0FBS21FLFVBQUEsQ0FBV3ZFLElBQUEsQ0FBS3FELEtBQUs7SUFDL0IsT0FBT3JELElBQUE7RUFDWDtBQUNKO0FBQ0F2RCxJQUFBLENBQUttUCxTQUFBLENBQVUxTixJQUFBLEdBQU87QUFDdEIsSUFBTTJOLFFBQUEsR0FBTixjQUF1QnBQLElBQUEsQ0FBSztFQUl4QndDLFlBQVltQixJQUFBLEVBQU1pRCxLQUFBLEVBQU9qRixPQUFBLEVBQVNnRyxLQUFBLEVBQU87SUFDckMsTUFBTWhFLElBQUEsRUFBTWlELEtBQUEsRUFBTyxNQUFNZSxLQUFLO0lBQzlCLElBQUksQ0FBQ2hHLE9BQUEsRUFDRCxNQUFNLElBQUl3RCxVQUFBLENBQVcsa0NBQWtDO0lBQzNELEtBQUsxRCxJQUFBLEdBQU9FLE9BQUE7RUFDaEI7RUFDQWlFLFNBQUEsRUFBVztJQUNQLElBQUksS0FBS2pDLElBQUEsQ0FBS0MsSUFBQSxDQUFLcUssYUFBQSxFQUNmLE9BQU8sS0FBS3RLLElBQUEsQ0FBS0MsSUFBQSxDQUFLcUssYUFBQSxDQUFjLElBQUk7SUFDNUMsT0FBT0MsU0FBQSxDQUFVLEtBQUt2RyxLQUFBLEVBQU8wSCxJQUFBLENBQUtDLFNBQUEsQ0FBVSxLQUFLN04sSUFBSSxDQUFDO0VBQzFEO0VBQ0EsSUFBSStMLFlBQUEsRUFBYztJQUFFLE9BQU8sS0FBSy9MLElBQUE7RUFBTTtFQUN0QzBCLFlBQVlULElBQUEsRUFBTUMsRUFBQSxFQUFJO0lBQUUsT0FBTyxLQUFLbEIsSUFBQSxDQUFLZ0MsS0FBQSxDQUFNZixJQUFBLEVBQU1DLEVBQUU7RUFBRztFQUMxRCxJQUFJckIsU0FBQSxFQUFXO0lBQUUsT0FBTyxLQUFLRyxJQUFBLENBQUtjLE1BQUE7RUFBUTtFQUMxQ3FGLEtBQUtELEtBQUEsRUFBTztJQUNSLE9BQU9BLEtBQUEsSUFBUyxLQUFLQSxLQUFBLEdBQVEsT0FBTyxJQUFJeUgsUUFBQSxDQUFTLEtBQUt6TCxJQUFBLEVBQU0sS0FBS2lELEtBQUEsRUFBTyxLQUFLbkYsSUFBQSxFQUFNa0csS0FBSztFQUM1RjtFQUNBdkQsU0FBUzNDLElBQUEsRUFBTTtJQUNYLElBQUlBLElBQUEsSUFBUSxLQUFLQSxJQUFBLEVBQ2IsT0FBTztJQUNYLE9BQU8sSUFBSTJOLFFBQUEsQ0FBUyxLQUFLekwsSUFBQSxFQUFNLEtBQUtpRCxLQUFBLEVBQU9uRixJQUFBLEVBQU0sS0FBS2tHLEtBQUs7RUFDL0Q7RUFDQXJELElBQUk1QixJQUFBLEdBQU8sR0FBR0MsRUFBQSxHQUFLLEtBQUtsQixJQUFBLENBQUtjLE1BQUEsRUFBUTtJQUNqQyxJQUFJRyxJQUFBLElBQVEsS0FBS0MsRUFBQSxJQUFNLEtBQUtsQixJQUFBLENBQUtjLE1BQUEsRUFDN0IsT0FBTztJQUNYLE9BQU8sS0FBSzZCLFFBQUEsQ0FBUyxLQUFLM0MsSUFBQSxDQUFLZ0MsS0FBQSxDQUFNZixJQUFBLEVBQU1DLEVBQUUsQ0FBQztFQUNsRDtFQUNBc0MsR0FBR2pCLEtBQUEsRUFBTztJQUNOLE9BQU8sS0FBS3pDLFVBQUEsQ0FBV3lDLEtBQUssS0FBSyxLQUFLdkMsSUFBQSxJQUFRdUMsS0FBQSxDQUFNdkMsSUFBQTtFQUN4RDtFQUNBc0UsT0FBQSxFQUFTO0lBQ0wsSUFBSXdKLElBQUEsR0FBTyxNQUFNeEosTUFBQSxDQUFPO0lBQ3hCd0osSUFBQSxDQUFLOU4sSUFBQSxHQUFPLEtBQUtBLElBQUE7SUFDakIsT0FBTzhOLElBQUE7RUFDWDtBQUNKO0FBQ0EsU0FBU3JCLFVBQVV2RyxLQUFBLEVBQU80RSxHQUFBLEVBQUs7RUFDM0IsU0FBU3RMLENBQUEsR0FBSTBHLEtBQUEsQ0FBTXBGLE1BQUEsR0FBUyxHQUFHdEIsQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFDbkNzTCxHQUFBLEdBQU01RSxLQUFBLENBQU0xRyxDQUFBLEVBQUcwQyxJQUFBLENBQUs2RCxJQUFBLEdBQU8sTUFBTStFLEdBQUEsR0FBTTtFQUMzQyxPQUFPQSxHQUFBO0FBQ1g7QUFRQSxJQUFNN00sWUFBQSxHQUFOLE1BQW1CO0VBSWY4QyxZQUlBa00sUUFBQSxFQUFVO0lBQ04sS0FBS0EsUUFBQSxHQUFXQSxRQUFBO0lBSWhCLEtBQUsxQyxJQUFBLEdBQU8sRUFBQztJQUliLEtBQUt3RCxTQUFBLEdBQVksRUFBQztFQUN0QjtFQUlBLE9BQU9DLE1BQU1DLE1BQUEsRUFBUUMsU0FBQSxFQUFXO0lBQzVCLElBQUlDLE1BQUEsR0FBUyxJQUFJQyxXQUFBLENBQVlILE1BQUEsRUFBUUMsU0FBUztJQUM5QyxJQUFJQyxNQUFBLENBQU81RCxJQUFBLElBQVEsTUFDZixPQUFPdE0sWUFBQSxDQUFhK0UsS0FBQTtJQUN4QixJQUFJcUwsSUFBQSxHQUFPQyxTQUFBLENBQVVILE1BQU07SUFDM0IsSUFBSUEsTUFBQSxDQUFPNUQsSUFBQSxFQUNQNEQsTUFBQSxDQUFPSSxHQUFBLENBQUksMEJBQTBCO0lBQ3pDLElBQUk1QixLQUFBLEdBQVE2QixHQUFBLENBQUlDLEdBQUEsQ0FBSUosSUFBSSxDQUFDO0lBQ3pCSyxnQkFBQSxDQUFpQi9CLEtBQUEsRUFBT3dCLE1BQU07SUFDOUIsT0FBT3hCLEtBQUE7RUFDWDtFQUtBUyxVQUFVbEwsSUFBQSxFQUFNO0lBQ1osU0FBUzFDLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBSytLLElBQUEsQ0FBS3pKLE1BQUEsRUFBUXRCLENBQUEsSUFDbEMsSUFBSSxLQUFLK0ssSUFBQSxDQUFLL0ssQ0FBQSxFQUFHMEMsSUFBQSxJQUFRQSxJQUFBLEVBQ3JCLE9BQU8sS0FBS3FJLElBQUEsQ0FBSy9LLENBQUEsRUFBRytLLElBQUE7SUFDNUIsT0FBTztFQUNYO0VBS0FzQyxjQUFjOEIsSUFBQSxFQUFNcE4sS0FBQSxHQUFRLEdBQUdELEdBQUEsR0FBTXFOLElBQUEsQ0FBS2xQLFVBQUEsRUFBWTtJQUNsRCxJQUFJeUUsR0FBQSxHQUFNO0lBQ1YsU0FBUzFFLENBQUEsR0FBSStCLEtBQUEsRUFBTzJDLEdBQUEsSUFBTzFFLENBQUEsR0FBSThCLEdBQUEsRUFBSzlCLENBQUEsSUFDaEMwRSxHQUFBLEdBQU1BLEdBQUEsQ0FBSWtKLFNBQUEsQ0FBVXVCLElBQUEsQ0FBS2hQLEtBQUEsQ0FBTUgsQ0FBQyxFQUFFMEMsSUFBSTtJQUMxQyxPQUFPZ0MsR0FBQTtFQUNYO0VBSUEsSUFBSTBHLGNBQUEsRUFBZ0I7SUFDaEIsT0FBTyxLQUFLTCxJQUFBLENBQUt6SixNQUFBLElBQVUsS0FBSyxLQUFLeUosSUFBQSxDQUFLLEdBQUdySSxJQUFBLENBQUtvSSxRQUFBO0VBQ3REO0VBS0EsSUFBSXNFLFlBQUEsRUFBYztJQUNkLFNBQVNwUCxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUsrSyxJQUFBLENBQUt6SixNQUFBLEVBQVF0QixDQUFBLElBQUs7TUFDdkMsSUFBSTtRQUFFMEM7TUFBSyxJQUFJLEtBQUtxSSxJQUFBLENBQUsvSyxDQUFBO01BQ3pCLElBQUksRUFBRTBDLElBQUEsQ0FBS25DLE1BQUEsSUFBVW1DLElBQUEsQ0FBSzJNLGdCQUFBLENBQWlCLElBQ3ZDLE9BQU8zTSxJQUFBO0lBQ2Y7SUFDQSxPQUFPO0VBQ1g7RUFJQTRNLFdBQVd2TSxLQUFBLEVBQU87SUFDZCxTQUFTL0MsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLK0ssSUFBQSxDQUFLekosTUFBQSxFQUFRdEIsQ0FBQSxJQUNsQyxTQUFTUyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJc0MsS0FBQSxDQUFNZ0ksSUFBQSxDQUFLekosTUFBQSxFQUFRYixDQUFBLElBQ25DLElBQUksS0FBS3NLLElBQUEsQ0FBSy9LLENBQUEsRUFBRzBDLElBQUEsSUFBUUssS0FBQSxDQUFNZ0ksSUFBQSxDQUFLdEssQ0FBQSxFQUFHaUMsSUFBQSxFQUNuQyxPQUFPO0lBQ25CLE9BQU87RUFDWDtFQVNBNk0sV0FBVy9FLEtBQUEsRUFBT2dGLEtBQUEsR0FBUSxPQUFPL0YsVUFBQSxHQUFhLEdBQUc7SUFDN0MsSUFBSWdHLElBQUEsR0FBTyxDQUFDLElBQUk7SUFDaEIsU0FBU0MsT0FBT3ZDLEtBQUEsRUFBT3dDLEtBQUEsRUFBTztNQUMxQixJQUFJQyxRQUFBLEdBQVd6QyxLQUFBLENBQU1FLGFBQUEsQ0FBYzdDLEtBQUEsRUFBT2YsVUFBVTtNQUNwRCxJQUFJbUcsUUFBQSxLQUFhLENBQUNKLEtBQUEsSUFBU0ksUUFBQSxDQUFTbkMsUUFBQSxHQUNoQyxPQUFPN08sUUFBQSxDQUFTNkMsSUFBQSxDQUFLa08sS0FBQSxDQUFNNUssR0FBQSxDQUFJOEssRUFBQSxJQUFNQSxFQUFBLENBQUdDLGFBQUEsQ0FBYyxDQUFDLENBQUM7TUFDNUQsU0FBUzlQLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUltTixLQUFBLENBQU1wQyxJQUFBLENBQUt6SixNQUFBLEVBQVF0QixDQUFBLElBQUs7UUFDeEMsSUFBSTtVQUFFMEMsSUFBQTtVQUFNcUk7UUFBSyxJQUFJb0MsS0FBQSxDQUFNcEMsSUFBQSxDQUFLL0ssQ0FBQTtRQUNoQyxJQUFJLEVBQUUwQyxJQUFBLENBQUtuQyxNQUFBLElBQVVtQyxJQUFBLENBQUsyTSxnQkFBQSxDQUFpQixNQUFNSSxJQUFBLENBQUtNLE9BQUEsQ0FBUWhGLElBQUksS0FBSyxJQUFJO1VBQ3ZFMEUsSUFBQSxDQUFLck0sSUFBQSxDQUFLMkgsSUFBSTtVQUNkLElBQUk5RyxNQUFBLEdBQVF5TCxNQUFBLENBQU8zRSxJQUFBLEVBQU00RSxLQUFBLENBQU03TCxNQUFBLENBQU9wQixJQUFJLENBQUM7VUFDM0MsSUFBSXVCLE1BQUEsRUFDQSxPQUFPQSxNQUFBO1FBQ2Y7TUFDSjtNQUNBLE9BQU87SUFDWDtJQUNBLE9BQU95TCxNQUFBLENBQU8sTUFBTSxFQUFFO0VBQzFCO0VBT0FNLGFBQWEzRyxNQUFBLEVBQVE7SUFDakIsU0FBU3JKLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBS3VPLFNBQUEsQ0FBVWpOLE1BQUEsRUFBUXRCLENBQUEsSUFBSyxHQUM1QyxJQUFJLEtBQUt1TyxTQUFBLENBQVV2TyxDQUFBLEtBQU1xSixNQUFBLEVBQ3JCLE9BQU8sS0FBS2tGLFNBQUEsQ0FBVXZPLENBQUEsR0FBSTtJQUNsQyxJQUFJaVEsUUFBQSxHQUFXLEtBQUtDLGVBQUEsQ0FBZ0I3RyxNQUFNO0lBQzFDLEtBQUtrRixTQUFBLENBQVVuTCxJQUFBLENBQUtpRyxNQUFBLEVBQVE0RyxRQUFRO0lBQ3BDLE9BQU9BLFFBQUE7RUFDWDtFQUlBQyxnQkFBZ0I3RyxNQUFBLEVBQVE7SUFDcEIsSUFBSW9HLElBQUEsR0FBTyxlQUFBckQsTUFBQSxDQUFPeEYsTUFBQSxDQUFPLElBQUk7TUFBR3VKLE1BQUEsR0FBUyxDQUFDO1FBQUVoRCxLQUFBLEVBQU87UUFBTXpLLElBQUEsRUFBTTtRQUFNME4sR0FBQSxFQUFLO01BQUssQ0FBQztJQUNoRixPQUFPRCxNQUFBLENBQU83TyxNQUFBLEVBQVE7TUFDbEIsSUFBSXFDLE9BQUEsR0FBVXdNLE1BQUEsQ0FBT0UsS0FBQSxDQUFNO1FBQUdsRCxLQUFBLEdBQVF4SixPQUFBLENBQVF3SixLQUFBO01BQzlDLElBQUlBLEtBQUEsQ0FBTVMsU0FBQSxDQUFVdkUsTUFBTSxHQUFHO1FBQ3pCLElBQUkvRixNQUFBLEdBQVMsRUFBQztRQUNkLFNBQVNnRCxHQUFBLEdBQU0zQyxPQUFBLEVBQVMyQyxHQUFBLENBQUk1RCxJQUFBLEVBQU00RCxHQUFBLEdBQU1BLEdBQUEsQ0FBSThKLEdBQUEsRUFDeEM5TSxNQUFBLENBQU9GLElBQUEsQ0FBS2tELEdBQUEsQ0FBSTVELElBQUk7UUFDeEIsT0FBT1ksTUFBQSxDQUFPZ04sT0FBQSxDQUFRO01BQzFCO01BQ0EsU0FBU3RRLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUltTixLQUFBLENBQU1wQyxJQUFBLENBQUt6SixNQUFBLEVBQVF0QixDQUFBLElBQUs7UUFDeEMsSUFBSTtVQUFFMEMsSUFBQTtVQUFNcUk7UUFBSyxJQUFJb0MsS0FBQSxDQUFNcEMsSUFBQSxDQUFLL0ssQ0FBQTtRQUNoQyxJQUFJLENBQUMwQyxJQUFBLENBQUtELE1BQUEsSUFBVSxDQUFDQyxJQUFBLENBQUsyTSxnQkFBQSxDQUFpQixLQUFLLEVBQUUzTSxJQUFBLENBQUs2RCxJQUFBLElBQVFrSixJQUFBLE1BQVUsQ0FBQzlMLE9BQUEsQ0FBUWpCLElBQUEsSUFBUXFJLElBQUEsQ0FBSzBDLFFBQUEsR0FBVztVQUN0RzBDLE1BQUEsQ0FBTy9NLElBQUEsQ0FBSztZQUFFK0osS0FBQSxFQUFPekssSUFBQSxDQUFLMEssWUFBQTtZQUFjMUssSUFBQTtZQUFNME4sR0FBQSxFQUFLek07VUFBUSxDQUFDO1VBQzVEOEwsSUFBQSxDQUFLL00sSUFBQSxDQUFLNkQsSUFBQSxJQUFRO1FBQ3RCO01BQ0o7SUFDSjtJQUNBLE9BQU87RUFDWDtFQUtBLElBQUlnSyxVQUFBLEVBQVk7SUFDWixPQUFPLEtBQUt4RixJQUFBLENBQUt6SixNQUFBO0VBQ3JCO0VBS0FrUCxLQUFLeEwsQ0FBQSxFQUFHO0lBQ0osSUFBSUEsQ0FBQSxJQUFLLEtBQUsrRixJQUFBLENBQUt6SixNQUFBLEVBQ2YsTUFBTSxJQUFJNEMsVUFBQSxDQUFXLGNBQWNjLENBQUEsK0JBQWdDO0lBQ3ZFLE9BQU8sS0FBSytGLElBQUEsQ0FBSy9GLENBQUE7RUFDckI7RUFJQUwsU0FBQSxFQUFXO0lBQ1AsSUFBSThLLElBQUEsR0FBTyxFQUFDO0lBQ1osU0FBU2dCLEtBQUsxQyxDQUFBLEVBQUc7TUFDYjBCLElBQUEsQ0FBS3JNLElBQUEsQ0FBSzJLLENBQUM7TUFDWCxTQUFTL04sQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSStOLENBQUEsQ0FBRWhELElBQUEsQ0FBS3pKLE1BQUEsRUFBUXRCLENBQUEsSUFDL0IsSUFBSXlQLElBQUEsQ0FBS00sT0FBQSxDQUFRaEMsQ0FBQSxDQUFFaEQsSUFBQSxDQUFLL0ssQ0FBQSxFQUFHK0ssSUFBSSxLQUFLLElBQ2hDMEYsSUFBQSxDQUFLMUMsQ0FBQSxDQUFFaEQsSUFBQSxDQUFLL0ssQ0FBQSxFQUFHK0ssSUFBSTtJQUMvQjtJQUNBMEYsSUFBQSxDQUFLLElBQUk7SUFDVCxPQUFPaEIsSUFBQSxDQUFLMUssR0FBQSxDQUFJLENBQUNnSixDQUFBLEVBQUcvTixDQUFBLEtBQU07TUFDdEIsSUFBSTBRLEdBQUEsR0FBTTFRLENBQUEsSUFBSytOLENBQUEsQ0FBRU4sUUFBQSxHQUFXLE1BQU0sT0FBTztNQUN6QyxTQUFTa0QsRUFBQSxHQUFJLEdBQUdBLEVBQUEsR0FBSTVDLENBQUEsQ0FBRWhELElBQUEsQ0FBS3pKLE1BQUEsRUFBUXFQLEVBQUEsSUFDL0JELEdBQUEsS0FBUUMsRUFBQSxHQUFJLE9BQU8sTUFBTTVDLENBQUEsQ0FBRWhELElBQUEsQ0FBSzRGLEVBQUEsRUFBR2pPLElBQUEsQ0FBSzZELElBQUEsR0FBTyxPQUFPa0osSUFBQSxDQUFLTSxPQUFBLENBQVFoQyxDQUFBLENBQUVoRCxJQUFBLENBQUs0RixFQUFBLEVBQUc1RixJQUFJO01BQ3JGLE9BQU8yRixHQUFBO0lBQ1gsQ0FBQyxFQUFFN0wsSUFBQSxDQUFLLElBQUk7RUFDaEI7QUFDSjtBQUlBcEcsWUFBQSxDQUFhK0UsS0FBQSxHQUFRLElBQUkvRSxZQUFBLENBQWEsSUFBSTtBQUMxQyxJQUFNbVEsV0FBQSxHQUFOLE1BQWtCO0VBQ2RyTixZQUFZa04sTUFBQSxFQUFRQyxTQUFBLEVBQVc7SUFDM0IsS0FBS0QsTUFBQSxHQUFTQSxNQUFBO0lBQ2QsS0FBS0MsU0FBQSxHQUFZQSxTQUFBO0lBQ2pCLEtBQUtrQyxNQUFBLEdBQVM7SUFDZCxLQUFLN1EsR0FBQSxHQUFNO0lBQ1gsS0FBSzhRLE1BQUEsR0FBU3BDLE1BQUEsQ0FBT3FDLEtBQUEsQ0FBTSxnQkFBZ0I7SUFDM0MsSUFBSSxLQUFLRCxNQUFBLENBQU8sS0FBS0EsTUFBQSxDQUFPdlAsTUFBQSxHQUFTLE1BQU0sSUFDdkMsS0FBS3VQLE1BQUEsQ0FBT0UsR0FBQSxDQUFJO0lBQ3BCLElBQUksS0FBS0YsTUFBQSxDQUFPLE1BQU0sSUFDbEIsS0FBS0EsTUFBQSxDQUFPUixLQUFBLENBQU07RUFDMUI7RUFDQSxJQUFJdEYsS0FBQSxFQUFPO0lBQUUsT0FBTyxLQUFLOEYsTUFBQSxDQUFPLEtBQUs5USxHQUFBO0VBQU07RUFDM0NpUixJQUFJQyxHQUFBLEVBQUs7SUFBRSxPQUFPLEtBQUtsRyxJQUFBLElBQVFrRyxHQUFBLEtBQVEsS0FBS2xSLEdBQUEsTUFBUztFQUFPO0VBQzVEZ1AsSUFBSXpELEdBQUEsRUFBSztJQUFFLE1BQU0sSUFBSTRGLFdBQUEsQ0FBWTVGLEdBQUEsR0FBTSw4QkFBOEIsS0FBS21ELE1BQUEsR0FBUyxJQUFJO0VBQUc7QUFDOUY7QUFDQSxTQUFTSyxVQUFVSCxNQUFBLEVBQVE7RUFDdkIsSUFBSXdDLEtBQUEsR0FBUSxFQUFDO0VBQ2IsR0FBRztJQUNDQSxLQUFBLENBQU0vTixJQUFBLENBQUtnTyxZQUFBLENBQWF6QyxNQUFNLENBQUM7RUFDbkMsU0FBU0EsTUFBQSxDQUFPcUMsR0FBQSxDQUFJLEdBQUc7RUFDdkIsT0FBT0csS0FBQSxDQUFNN1AsTUFBQSxJQUFVLElBQUk2UCxLQUFBLENBQU0sS0FBSztJQUFFek8sSUFBQSxFQUFNO0lBQVV5TztFQUFNO0FBQ2xFO0FBQ0EsU0FBU0MsYUFBYXpDLE1BQUEsRUFBUTtFQUMxQixJQUFJd0MsS0FBQSxHQUFRLEVBQUM7RUFDYixHQUFHO0lBQ0NBLEtBQUEsQ0FBTS9OLElBQUEsQ0FBS2lPLGtCQUFBLENBQW1CMUMsTUFBTSxDQUFDO0VBQ3pDLFNBQVNBLE1BQUEsQ0FBTzVELElBQUEsSUFBUTRELE1BQUEsQ0FBTzVELElBQUEsSUFBUSxPQUFPNEQsTUFBQSxDQUFPNUQsSUFBQSxJQUFRO0VBQzdELE9BQU9vRyxLQUFBLENBQU03UCxNQUFBLElBQVUsSUFBSTZQLEtBQUEsQ0FBTSxLQUFLO0lBQUV6TyxJQUFBLEVBQU07SUFBT3lPO0VBQU07QUFDL0Q7QUFDQSxTQUFTRSxtQkFBbUIxQyxNQUFBLEVBQVE7RUFDaEMsSUFBSUUsSUFBQSxHQUFPeUMsYUFBQSxDQUFjM0MsTUFBTTtFQUMvQixTQUFTO0lBQ0wsSUFBSUEsTUFBQSxDQUFPcUMsR0FBQSxDQUFJLEdBQUcsR0FDZG5DLElBQUEsR0FBTztNQUFFbk0sSUFBQSxFQUFNO01BQVFtTTtJQUFLLFdBQ3ZCRixNQUFBLENBQU9xQyxHQUFBLENBQUksR0FBRyxHQUNuQm5DLElBQUEsR0FBTztNQUFFbk0sSUFBQSxFQUFNO01BQVFtTTtJQUFLLFdBQ3ZCRixNQUFBLENBQU9xQyxHQUFBLENBQUksR0FBRyxHQUNuQm5DLElBQUEsR0FBTztNQUFFbk0sSUFBQSxFQUFNO01BQU9tTTtJQUFLLFdBQ3RCRixNQUFBLENBQU9xQyxHQUFBLENBQUksR0FBRyxHQUNuQm5DLElBQUEsR0FBTzBDLGNBQUEsQ0FBZTVDLE1BQUEsRUFBUUUsSUFBSSxPQUVsQztFQUNSO0VBQ0EsT0FBT0EsSUFBQTtBQUNYO0FBQ0EsU0FBUzJDLFNBQVM3QyxNQUFBLEVBQVE7RUFDdEIsSUFBSSxLQUFLOEMsSUFBQSxDQUFLOUMsTUFBQSxDQUFPNUQsSUFBSSxHQUNyQjRELE1BQUEsQ0FBT0ksR0FBQSxDQUFJLDJCQUEyQkosTUFBQSxDQUFPNUQsSUFBQSxHQUFPLEdBQUc7RUFDM0QsSUFBSXpILE1BQUEsR0FBU29PLE1BQUEsQ0FBTy9DLE1BQUEsQ0FBTzVELElBQUk7RUFDL0I0RCxNQUFBLENBQU81TyxHQUFBO0VBQ1AsT0FBT3VELE1BQUE7QUFDWDtBQUNBLFNBQVNpTyxlQUFlNUMsTUFBQSxFQUFRRSxJQUFBLEVBQU07RUFDbEMsSUFBSXhOLEdBQUEsR0FBTW1RLFFBQUEsQ0FBUzdDLE1BQU07SUFBRzNNLEdBQUEsR0FBTVgsR0FBQTtFQUNsQyxJQUFJc04sTUFBQSxDQUFPcUMsR0FBQSxDQUFJLEdBQUcsR0FBRztJQUNqQixJQUFJckMsTUFBQSxDQUFPNUQsSUFBQSxJQUFRLEtBQ2YvSSxHQUFBLEdBQU13UCxRQUFBLENBQVM3QyxNQUFNLE9BRXJCM00sR0FBQSxHQUFNO0VBQ2Q7RUFDQSxJQUFJLENBQUMyTSxNQUFBLENBQU9xQyxHQUFBLENBQUksR0FBRyxHQUNmckMsTUFBQSxDQUFPSSxHQUFBLENBQUksdUJBQXVCO0VBQ3RDLE9BQU87SUFBRXJNLElBQUEsRUFBTTtJQUFTckIsR0FBQTtJQUFLVyxHQUFBO0lBQUs2TTtFQUFLO0FBQzNDO0FBQ0EsU0FBUzhDLFlBQVloRCxNQUFBLEVBQVFwSSxJQUFBLEVBQU07RUFDL0IsSUFBSW9KLEtBQUEsR0FBUWhCLE1BQUEsQ0FBT0QsU0FBQTtJQUFXaE0sSUFBQSxHQUFPaU4sS0FBQSxDQUFNcEosSUFBQTtFQUMzQyxJQUFJN0QsSUFBQSxFQUNBLE9BQU8sQ0FBQ0EsSUFBSTtFQUNoQixJQUFJWSxNQUFBLEdBQVMsRUFBQztFQUNkLFNBQVNzTyxRQUFBLElBQVlqQyxLQUFBLEVBQU87SUFDeEIsSUFBSWtDLEtBQUEsR0FBT2xDLEtBQUEsQ0FBTWlDLFFBQUE7SUFDakIsSUFBSUMsS0FBQSxDQUFLQyxTQUFBLENBQVV2TCxJQUFJLEdBQ25CakQsTUFBQSxDQUFPRixJQUFBLENBQUt5TyxLQUFJO0VBQ3hCO0VBQ0EsSUFBSXZPLE1BQUEsQ0FBT2hDLE1BQUEsSUFBVSxHQUNqQnFOLE1BQUEsQ0FBT0ksR0FBQSxDQUFJLDRCQUE0QnhJLElBQUEsR0FBTyxTQUFTO0VBQzNELE9BQU9qRCxNQUFBO0FBQ1g7QUFDQSxTQUFTZ08sY0FBYzNDLE1BQUEsRUFBUTtFQUMzQixJQUFJQSxNQUFBLENBQU9xQyxHQUFBLENBQUksR0FBRyxHQUFHO0lBQ2pCLElBQUluQyxJQUFBLEdBQU9DLFNBQUEsQ0FBVUgsTUFBTTtJQUMzQixJQUFJLENBQUNBLE1BQUEsQ0FBT3FDLEdBQUEsQ0FBSSxHQUFHLEdBQ2ZyQyxNQUFBLENBQU9JLEdBQUEsQ0FBSSx1QkFBdUI7SUFDdEMsT0FBT0YsSUFBQTtFQUNYLFdBQ1MsQ0FBQyxLQUFLNEMsSUFBQSxDQUFLOUMsTUFBQSxDQUFPNUQsSUFBSSxHQUFHO0lBQzlCLElBQUlvRyxLQUFBLEdBQVFRLFdBQUEsQ0FBWWhELE1BQUEsRUFBUUEsTUFBQSxDQUFPNUQsSUFBSSxFQUFFaEcsR0FBQSxDQUFJckMsSUFBQSxJQUFRO01BQ3JELElBQUlpTSxNQUFBLENBQU9pQyxNQUFBLElBQVUsTUFDakJqQyxNQUFBLENBQU9pQyxNQUFBLEdBQVNsTyxJQUFBLENBQUtvSSxRQUFBLFVBQ2hCNkQsTUFBQSxDQUFPaUMsTUFBQSxJQUFVbE8sSUFBQSxDQUFLb0ksUUFBQSxFQUMzQjZELE1BQUEsQ0FBT0ksR0FBQSxDQUFJLGlDQUFpQztNQUNoRCxPQUFPO1FBQUVyTSxJQUFBLEVBQU07UUFBUXlDLEtBQUEsRUFBT3pDO01BQUs7SUFDdkMsQ0FBQztJQUNEaU0sTUFBQSxDQUFPNU8sR0FBQTtJQUNQLE9BQU9vUixLQUFBLENBQU03UCxNQUFBLElBQVUsSUFBSTZQLEtBQUEsQ0FBTSxLQUFLO01BQUV6TyxJQUFBLEVBQU07TUFBVXlPO0lBQU07RUFDbEUsT0FDSztJQUNEeEMsTUFBQSxDQUFPSSxHQUFBLENBQUksdUJBQXVCSixNQUFBLENBQU81RCxJQUFBLEdBQU8sR0FBRztFQUN2RDtBQUNKO0FBU0EsU0FBU2tFLElBQUlKLElBQUEsRUFBTTtFQUNmLElBQUlrRCxJQUFBLEdBQU0sQ0FBQyxFQUFFO0VBQ2JDLE9BQUEsQ0FBUUMsT0FBQSxDQUFRcEQsSUFBQSxFQUFNLENBQUMsR0FBR3ZNLElBQUEsQ0FBSyxDQUFDO0VBQ2hDLE9BQU95UCxJQUFBO0VBQ1AsU0FBU3pQLEtBQUEsRUFBTztJQUFFLE9BQU95UCxJQUFBLENBQUkzTyxJQUFBLENBQUssRUFBRSxJQUFJO0VBQUc7RUFDM0MsU0FBU29OLEtBQUsvTyxJQUFBLEVBQU1DLEVBQUEsRUFBSXdRLElBQUEsRUFBTTtJQUMxQixJQUFJQyxLQUFBLEdBQU87TUFBRUQsSUFBQTtNQUFNeFE7SUFBRztJQUN0QnFRLElBQUEsQ0FBSXRRLElBQUEsRUFBTTJCLElBQUEsQ0FBSytPLEtBQUk7SUFDbkIsT0FBT0EsS0FBQTtFQUNYO0VBQ0EsU0FBU0gsUUFBUUksS0FBQSxFQUFPMVEsRUFBQSxFQUFJO0lBQ3hCMFEsS0FBQSxDQUFNaE8sT0FBQSxDQUFRK04sS0FBQSxJQUFRQSxLQUFBLENBQUt6USxFQUFBLEdBQUtBLEVBQUU7RUFDdEM7RUFDQSxTQUFTdVEsUUFBUUksS0FBQSxFQUFNNVEsSUFBQSxFQUFNO0lBQ3pCLElBQUk0USxLQUFBLENBQUszUCxJQUFBLElBQVEsVUFBVTtNQUN2QixPQUFPMlAsS0FBQSxDQUFLbEIsS0FBQSxDQUFNbUIsTUFBQSxDQUFPLENBQUM1QixHQUFBLEVBQUs2QixLQUFBLEtBQVM3QixHQUFBLENBQUk1TSxNQUFBLENBQU9tTyxPQUFBLENBQVFNLEtBQUEsRUFBTTlRLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDL0UsV0FDUzRRLEtBQUEsQ0FBSzNQLElBQUEsSUFBUSxPQUFPO01BQ3pCLFNBQVMxQyxDQUFBLEdBQUksSUFBSUEsQ0FBQSxJQUFLO1FBQ2xCLElBQUkrSyxJQUFBLEdBQU9rSCxPQUFBLENBQVFJLEtBQUEsQ0FBS2xCLEtBQUEsQ0FBTW5SLENBQUEsR0FBSXlCLElBQUk7UUFDdEMsSUFBSXpCLENBQUEsSUFBS3FTLEtBQUEsQ0FBS2xCLEtBQUEsQ0FBTTdQLE1BQUEsR0FBUyxHQUN6QixPQUFPeUosSUFBQTtRQUNYaUgsT0FBQSxDQUFRakgsSUFBQSxFQUFNdEosSUFBQSxHQUFPYSxJQUFBLENBQUssQ0FBQztNQUMvQjtJQUNKLFdBQ1MrUCxLQUFBLENBQUszUCxJQUFBLElBQVEsUUFBUTtNQUMxQixJQUFJOFAsSUFBQSxHQUFPbFEsSUFBQSxDQUFLO01BQ2hCa08sSUFBQSxDQUFLL08sSUFBQSxFQUFNK1EsSUFBSTtNQUNmUixPQUFBLENBQVFDLE9BQUEsQ0FBUUksS0FBQSxDQUFLeEQsSUFBQSxFQUFNMkQsSUFBSSxHQUFHQSxJQUFJO01BQ3RDLE9BQU8sQ0FBQ2hDLElBQUEsQ0FBS2dDLElBQUksQ0FBQztJQUN0QixXQUNTSCxLQUFBLENBQUszUCxJQUFBLElBQVEsUUFBUTtNQUMxQixJQUFJOFAsSUFBQSxHQUFPbFEsSUFBQSxDQUFLO01BQ2hCMFAsT0FBQSxDQUFRQyxPQUFBLENBQVFJLEtBQUEsQ0FBS3hELElBQUEsRUFBTXBOLElBQUksR0FBRytRLElBQUk7TUFDdENSLE9BQUEsQ0FBUUMsT0FBQSxDQUFRSSxLQUFBLENBQUt4RCxJQUFBLEVBQU0yRCxJQUFJLEdBQUdBLElBQUk7TUFDdEMsT0FBTyxDQUFDaEMsSUFBQSxDQUFLZ0MsSUFBSSxDQUFDO0lBQ3RCLFdBQ1NILEtBQUEsQ0FBSzNQLElBQUEsSUFBUSxPQUFPO01BQ3pCLE9BQU8sQ0FBQzhOLElBQUEsQ0FBSy9PLElBQUksQ0FBQyxFQUFFcUMsTUFBQSxDQUFPbU8sT0FBQSxDQUFRSSxLQUFBLENBQUt4RCxJQUFBLEVBQU1wTixJQUFJLENBQUM7SUFDdkQsV0FDUzRRLEtBQUEsQ0FBSzNQLElBQUEsSUFBUSxTQUFTO01BQzNCLElBQUlnQyxHQUFBLEdBQU1qRCxJQUFBO01BQ1YsU0FBU3pCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlxUyxLQUFBLENBQUtoUixHQUFBLEVBQUtyQixDQUFBLElBQUs7UUFDL0IsSUFBSStLLElBQUEsR0FBT3pJLElBQUEsQ0FBSztRQUNoQjBQLE9BQUEsQ0FBUUMsT0FBQSxDQUFRSSxLQUFBLENBQUt4RCxJQUFBLEVBQU1uSyxHQUFHLEdBQUdxRyxJQUFJO1FBQ3JDckcsR0FBQSxHQUFNcUcsSUFBQTtNQUNWO01BQ0EsSUFBSXNILEtBQUEsQ0FBS3JRLEdBQUEsSUFBTyxJQUFJO1FBQ2hCZ1EsT0FBQSxDQUFRQyxPQUFBLENBQVFJLEtBQUEsQ0FBS3hELElBQUEsRUFBTW5LLEdBQUcsR0FBR0EsR0FBRztNQUN4QyxPQUNLO1FBQ0QsU0FBUzFFLENBQUEsR0FBSXFTLEtBQUEsQ0FBS2hSLEdBQUEsRUFBS3JCLENBQUEsR0FBSXFTLEtBQUEsQ0FBS3JRLEdBQUEsRUFBS2hDLENBQUEsSUFBSztVQUN0QyxJQUFJK0ssSUFBQSxHQUFPekksSUFBQSxDQUFLO1VBQ2hCa08sSUFBQSxDQUFLOUwsR0FBQSxFQUFLcUcsSUFBSTtVQUNkaUgsT0FBQSxDQUFRQyxPQUFBLENBQVFJLEtBQUEsQ0FBS3hELElBQUEsRUFBTW5LLEdBQUcsR0FBR3FHLElBQUk7VUFDckNyRyxHQUFBLEdBQU1xRyxJQUFBO1FBQ1Y7TUFDSjtNQUNBLE9BQU8sQ0FBQ3lGLElBQUEsQ0FBSzlMLEdBQUcsQ0FBQztJQUNyQixXQUNTMk4sS0FBQSxDQUFLM1AsSUFBQSxJQUFRLFFBQVE7TUFDMUIsT0FBTyxDQUFDOE4sSUFBQSxDQUFLL08sSUFBQSxFQUFNLFFBQVc0USxLQUFBLENBQUtsTixLQUFLLENBQUM7SUFDN0MsT0FDSztNQUNELE1BQU0sSUFBSStCLEtBQUEsQ0FBTSxtQkFBbUI7SUFDdkM7RUFDSjtBQUNKO0FBQ0EsU0FBU3VMLElBQUk1UyxDQUFBLEVBQUdDLENBQUEsRUFBRztFQUFFLE9BQU9BLENBQUEsR0FBSUQsQ0FBQTtBQUFHO0FBSW5DLFNBQVM2UyxTQUFTWCxJQUFBLEVBQUt6UCxJQUFBLEVBQU07RUFDekIsSUFBSWdCLE1BQUEsR0FBUyxFQUFDO0VBQ2RtTixJQUFBLENBQUtuTyxJQUFJO0VBQ1QsT0FBT2dCLE1BQUEsQ0FBTzJELElBQUEsQ0FBS3dMLEdBQUc7RUFDdEIsU0FBU2hDLEtBQUtrQyxLQUFBLEVBQU07SUFDaEIsSUFBSVAsS0FBQSxHQUFRTCxJQUFBLENBQUlZLEtBQUE7SUFDaEIsSUFBSVAsS0FBQSxDQUFNOVEsTUFBQSxJQUFVLEtBQUssQ0FBQzhRLEtBQUEsQ0FBTSxHQUFHRixJQUFBLEVBQy9CLE9BQU96QixJQUFBLENBQUsyQixLQUFBLENBQU0sR0FBRzFRLEVBQUU7SUFDM0I0QixNQUFBLENBQU9GLElBQUEsQ0FBS3VQLEtBQUk7SUFDaEIsU0FBUzNTLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlvUyxLQUFBLENBQU05USxNQUFBLEVBQVF0QixDQUFBLElBQUs7TUFDbkMsSUFBSTtRQUFFa1MsSUFBQTtRQUFNeFE7TUFBRyxJQUFJMFEsS0FBQSxDQUFNcFMsQ0FBQTtNQUN6QixJQUFJLENBQUNrUyxJQUFBLElBQVE1TyxNQUFBLENBQU95TSxPQUFBLENBQVFyTyxFQUFFLEtBQUssSUFDL0IrTyxJQUFBLENBQUsvTyxFQUFFO0lBQ2Y7RUFDSjtBQUNKO0FBSUEsU0FBU3NOLElBQUkrQyxJQUFBLEVBQUs7RUFDZCxJQUFJYSxPQUFBLEdBQVUsZUFBQXhHLE1BQUEsQ0FBT3hGLE1BQUEsQ0FBTyxJQUFJO0VBQ2hDLE9BQU9pTSxPQUFBLENBQVFILFFBQUEsQ0FBU1gsSUFBQSxFQUFLLENBQUMsQ0FBQztFQUMvQixTQUFTYyxRQUFRQyxNQUFBLEVBQVE7SUFDckIsSUFBSXBDLEdBQUEsR0FBTSxFQUFDO0lBQ1hvQyxNQUFBLENBQU8xTyxPQUFBLENBQVE5QixJQUFBLElBQVE7TUFDbkJ5UCxJQUFBLENBQUl6UCxJQUFBLEVBQU04QixPQUFBLENBQVEsQ0FBQztRQUFFOE4sSUFBQTtRQUFNeFE7TUFBRyxNQUFNO1FBQ2hDLElBQUksQ0FBQ3dRLElBQUEsRUFDRDtRQUNKLElBQUlsTSxHQUFBO1FBQ0osU0FBU2hHLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkwUSxHQUFBLENBQUlwUCxNQUFBLEVBQVF0QixDQUFBLElBQzVCLElBQUkwUSxHQUFBLENBQUkxUSxDQUFBLEVBQUcsTUFBTWtTLElBQUEsRUFDYmxNLEdBQUEsR0FBTTBLLEdBQUEsQ0FBSTFRLENBQUEsRUFBRztRQUNyQjBTLFFBQUEsQ0FBU1gsSUFBQSxFQUFLclEsRUFBRSxFQUFFMEMsT0FBQSxDQUFRdU8sS0FBQSxJQUFRO1VBQzlCLElBQUksQ0FBQzNNLEdBQUEsRUFDRDBLLEdBQUEsQ0FBSXROLElBQUEsQ0FBSyxDQUFDOE8sSUFBQSxFQUFNbE0sR0FBQSxHQUFNLEVBQUUsQ0FBQztVQUM3QixJQUFJQSxHQUFBLENBQUkrSixPQUFBLENBQVE0QyxLQUFJLEtBQUssSUFDckIzTSxHQUFBLENBQUk1QyxJQUFBLENBQUt1UCxLQUFJO1FBQ3JCLENBQUM7TUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUNELElBQUlJLEtBQUEsR0FBUUgsT0FBQSxDQUFRRSxNQUFBLENBQU9qTyxJQUFBLENBQUssR0FBRyxLQUFLLElBQUlwRyxZQUFBLENBQWFxVSxNQUFBLENBQU8vQyxPQUFBLENBQVFnQyxJQUFBLENBQUl6USxNQUFBLEdBQVMsQ0FBQyxJQUFJLEVBQUU7SUFDNUYsU0FBU3RCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkwUSxHQUFBLENBQUlwUCxNQUFBLEVBQVF0QixDQUFBLElBQUs7TUFDakMsSUFBSWdULE9BQUEsR0FBU3RDLEdBQUEsQ0FBSTFRLENBQUEsRUFBRyxHQUFHaUgsSUFBQSxDQUFLd0wsR0FBRztNQUMvQk0sS0FBQSxDQUFNaEksSUFBQSxDQUFLM0gsSUFBQSxDQUFLO1FBQUVWLElBQUEsRUFBTWdPLEdBQUEsQ0FBSTFRLENBQUEsRUFBRztRQUFJK0ssSUFBQSxFQUFNNkgsT0FBQSxDQUFRSSxPQUFBLENBQU9uTyxJQUFBLENBQUssR0FBRyxNQUFNZ08sT0FBQSxDQUFRRyxPQUFNO01BQUUsQ0FBQztJQUMzRjtJQUNBLE9BQU9ELEtBQUE7RUFDWDtBQUNKO0FBQ0EsU0FBUzdELGlCQUFpQi9CLEtBQUEsRUFBT3dCLE1BQUEsRUFBUTtFQUNyQyxTQUFTM08sQ0FBQSxHQUFJLEdBQUdpVCxJQUFBLEdBQU8sQ0FBQzlGLEtBQUssR0FBR25OLENBQUEsR0FBSWlULElBQUEsQ0FBSzNSLE1BQUEsRUFBUXRCLENBQUEsSUFBSztJQUNsRCxJQUFJK1MsS0FBQSxHQUFRRSxJQUFBLENBQUtqVCxDQUFBO01BQUlrVCxJQUFBLEdBQU8sQ0FBQ0gsS0FBQSxDQUFNdEYsUUFBQTtNQUFVL0gsS0FBQSxHQUFRLEVBQUM7SUFDdEQsU0FBU2pGLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlzUyxLQUFBLENBQU1oSSxJQUFBLENBQUt6SixNQUFBLEVBQVFiLENBQUEsSUFBSztNQUN4QyxJQUFJO1FBQUVpQyxJQUFBO1FBQU1xSTtNQUFLLElBQUlnSSxLQUFBLENBQU1oSSxJQUFBLENBQUt0SyxDQUFBO01BQ2hDaUYsS0FBQSxDQUFNdEMsSUFBQSxDQUFLVixJQUFBLENBQUs2RCxJQUFJO01BQ3BCLElBQUkyTSxJQUFBLElBQVEsRUFBRXhRLElBQUEsQ0FBS25DLE1BQUEsSUFBVW1DLElBQUEsQ0FBSzJNLGdCQUFBLENBQWlCLElBQy9DNkQsSUFBQSxHQUFPO01BQ1gsSUFBSUQsSUFBQSxDQUFLbEQsT0FBQSxDQUFRaEYsSUFBSSxLQUFLLElBQ3RCa0ksSUFBQSxDQUFLN1AsSUFBQSxDQUFLMkgsSUFBSTtJQUN0QjtJQUNBLElBQUltSSxJQUFBLEVBQ0F2RSxNQUFBLENBQU9JLEdBQUEsQ0FBSSxpQ0FBaUNySixLQUFBLENBQU1iLElBQUEsQ0FBSyxJQUFJLElBQUksZ0ZBQWdGO0VBQ3ZKO0FBQ0o7QUFNQSxTQUFTNEgsYUFBYTlHLEtBQUEsRUFBTztFQUN6QixJQUFJd04sUUFBQSxHQUFXLGVBQUEvRyxNQUFBLENBQU94RixNQUFBLENBQU8sSUFBSTtFQUNqQyxTQUFTd00sUUFBQSxJQUFZek4sS0FBQSxFQUFPO0lBQ3hCLElBQUkwTixJQUFBLEdBQU8xTixLQUFBLENBQU15TixRQUFBO0lBQ2pCLElBQUksQ0FBQ0MsSUFBQSxDQUFLQyxVQUFBLEVBQ04sT0FBTztJQUNYSCxRQUFBLENBQVNDLFFBQUEsSUFBWUMsSUFBQSxDQUFLRSxPQUFBO0VBQzlCO0VBQ0EsT0FBT0osUUFBQTtBQUNYO0FBQ0EsU0FBU0ssYUFBYTdOLEtBQUEsRUFBT1IsS0FBQSxFQUFPO0VBQ2hDLElBQUlzTyxLQUFBLEdBQVEsZUFBQXJILE1BQUEsQ0FBT3hGLE1BQUEsQ0FBTyxJQUFJO0VBQzlCLFNBQVNMLElBQUEsSUFBUVosS0FBQSxFQUFPO0lBQ3BCLElBQUkrTixLQUFBLEdBQVF2TyxLQUFBLElBQVNBLEtBQUEsQ0FBTW9CLElBQUE7SUFDM0IsSUFBSW1OLEtBQUEsS0FBVSxRQUFXO01BQ3JCLElBQUlMLElBQUEsR0FBTzFOLEtBQUEsQ0FBTVksSUFBQTtNQUNqQixJQUFJOE0sSUFBQSxDQUFLQyxVQUFBLEVBQ0xJLEtBQUEsR0FBUUwsSUFBQSxDQUFLRSxPQUFBLE1BRWIsTUFBTSxJQUFJclAsVUFBQSxDQUFXLHFDQUFxQ3FDLElBQUk7SUFDdEU7SUFDQWtOLEtBQUEsQ0FBTWxOLElBQUEsSUFBUW1OLEtBQUE7RUFDbEI7RUFDQSxPQUFPRCxLQUFBO0FBQ1g7QUFDQSxTQUFTNU0sV0FBV2xCLEtBQUEsRUFBT2dPLE1BQUEsRUFBUWpSLElBQUEsRUFBTTZELElBQUEsRUFBTTtFQUMzQyxTQUFTcU4sS0FBQSxJQUFRRCxNQUFBLEVBQ2IsSUFBSSxFQUFFQyxLQUFBLElBQVFqTyxLQUFBLEdBQ1YsTUFBTSxJQUFJekIsVUFBQSxDQUFXLHlCQUF5QjBQLEtBQUEsUUFBWWxSLElBQUEsWUFBZ0JrUixLQUFBLEVBQU07RUFDeEYsU0FBU0EsS0FBQSxJQUFRak8sS0FBQSxFQUFPO0lBQ3BCLElBQUkwTixJQUFBLEdBQU8xTixLQUFBLENBQU1pTyxLQUFBO0lBQ2pCLElBQUlQLElBQUEsQ0FBS1EsUUFBQSxFQUNMUixJQUFBLENBQUtRLFFBQUEsQ0FBU0YsTUFBQSxDQUFPQyxLQUFBLENBQUs7RUFDbEM7QUFDSjtBQUNBLFNBQVNFLFVBQVVsQyxRQUFBLEVBQVVqTSxLQUFBLEVBQU87RUFDaEMsSUFBSXJDLE1BQUEsR0FBUyxlQUFBOEksTUFBQSxDQUFPeEYsTUFBQSxDQUFPLElBQUk7RUFDL0IsSUFBSWpCLEtBQUEsRUFDQSxTQUFTWSxJQUFBLElBQVFaLEtBQUEsRUFDYnJDLE1BQUEsQ0FBT2lELElBQUEsSUFBUSxJQUFJd04sU0FBQSxDQUFVbkMsUUFBQSxFQUFVckwsSUFBQSxFQUFNWixLQUFBLENBQU1ZLElBQUEsQ0FBSztFQUNoRSxPQUFPakQsTUFBQTtBQUNYO0FBT0EsSUFBTXJFLFFBQUEsR0FBTixNQUFlO0VBSVhzQyxZQUlBZ0YsSUFBQSxFQUlBckIsTUFBQSxFQUlBdkMsSUFBQSxFQUFNO0lBQ0YsS0FBSzRELElBQUEsR0FBT0EsSUFBQTtJQUNaLEtBQUtyQixNQUFBLEdBQVNBLE1BQUE7SUFDZCxLQUFLdkMsSUFBQSxHQUFPQSxJQUFBO0lBS1osS0FBS3FSLE9BQUEsR0FBVTtJQUNmLEtBQUtDLE1BQUEsR0FBU3RSLElBQUEsQ0FBS3VSLEtBQUEsR0FBUXZSLElBQUEsQ0FBS3VSLEtBQUEsQ0FBTXBELEtBQUEsQ0FBTSxHQUFHLElBQUksRUFBQztJQUNwRCxLQUFLbkwsS0FBQSxHQUFRbU8sU0FBQSxDQUFVdk4sSUFBQSxFQUFNNUQsSUFBQSxDQUFLZ0QsS0FBSztJQUN2QyxLQUFLOEcsWUFBQSxHQUFlQSxZQUFBLENBQWEsS0FBSzlHLEtBQUs7SUFDM0MsS0FBS3lILFlBQUEsR0FBZTtJQUNwQixLQUFLaEMsYUFBQSxHQUFnQjtJQUNyQixLQUFLeEksT0FBQSxHQUFVLEVBQUVELElBQUEsQ0FBS2lPLE1BQUEsSUFBVXJLLElBQUEsSUFBUTtJQUN4QyxLQUFLaEcsTUFBQSxHQUFTZ0csSUFBQSxJQUFRO0VBQzFCO0VBSUEsSUFBSXVFLFNBQUEsRUFBVztJQUFFLE9BQU8sQ0FBQyxLQUFLbEksT0FBQTtFQUFTO0VBS3ZDLElBQUlDLFlBQUEsRUFBYztJQUFFLE9BQU8sS0FBS0QsT0FBQSxJQUFXLEtBQUt3SSxhQUFBO0VBQWU7RUFJL0QsSUFBSTNJLE9BQUEsRUFBUztJQUFFLE9BQU8sS0FBSzJLLFlBQUEsSUFBZ0IzTyxZQUFBLENBQWErRSxLQUFBO0VBQU87RUFLL0QsSUFBSXVKLE9BQUEsRUFBUztJQUFFLE9BQU8sS0FBS3RLLE1BQUEsSUFBVSxDQUFDLENBQUMsS0FBS0UsSUFBQSxDQUFLd1IsSUFBQTtFQUFNO0VBS3ZEckMsVUFBVW9DLEtBQUEsRUFBTztJQUNiLE9BQU8sS0FBS0QsTUFBQSxDQUFPbEUsT0FBQSxDQUFRbUUsS0FBSyxJQUFJO0VBQ3hDO0VBSUEsSUFBSUUsV0FBQSxFQUFhO0lBQ2IsT0FBTyxLQUFLelIsSUFBQSxDQUFLeVIsVUFBQSxLQUFlLEtBQUt6UixJQUFBLENBQUswUixJQUFBLEdBQU8sUUFBUTtFQUM3RDtFQUlBaEYsaUJBQUEsRUFBbUI7SUFDZixTQUFTckssQ0FBQSxJQUFLLEtBQUtXLEtBQUEsRUFDZixJQUFJLEtBQUtBLEtBQUEsQ0FBTVgsQ0FBQSxFQUFHc1AsVUFBQSxFQUNkLE9BQU87SUFDZixPQUFPO0VBQ1g7RUFLQXRMLGtCQUFrQmpHLEtBQUEsRUFBTztJQUNyQixPQUFPLFFBQVFBLEtBQUEsSUFBUyxLQUFLcUssWUFBQSxDQUFha0MsVUFBQSxDQUFXdk0sS0FBQSxDQUFNcUssWUFBWTtFQUMzRTtFQUlBb0csYUFBYTdOLEtBQUEsRUFBTztJQUNoQixJQUFJLENBQUNBLEtBQUEsSUFBUyxLQUFLOEcsWUFBQSxFQUNmLE9BQU8sS0FBS0EsWUFBQSxNQUVaLE9BQU8rRyxZQUFBLENBQWEsS0FBSzdOLEtBQUEsRUFBT0EsS0FBSztFQUM3QztFQVNBaUIsT0FBT2pCLEtBQUEsR0FBUSxNQUFNakYsT0FBQSxFQUFTZ0csS0FBQSxFQUFPO0lBQ2pDLElBQUksS0FBS25HLE1BQUEsRUFDTCxNQUFNLElBQUkyRyxLQUFBLENBQU0sNENBQTRDO0lBQ2hFLE9BQU8sSUFBSW5JLElBQUEsQ0FBSyxNQUFNLEtBQUt5VSxZQUFBLENBQWE3TixLQUFLLEdBQUcvRyxRQUFBLENBQVM2QyxJQUFBLENBQUtmLE9BQU8sR0FBRzdCLElBQUEsQ0FBS2tJLE9BQUEsQ0FBUUwsS0FBSyxDQUFDO0VBQy9GO0VBTUE2TixjQUFjNU8sS0FBQSxHQUFRLE1BQU1qRixPQUFBLEVBQVNnRyxLQUFBLEVBQU87SUFDeENoRyxPQUFBLEdBQVU5QixRQUFBLENBQVM2QyxJQUFBLENBQUtmLE9BQU87SUFDL0IsS0FBS29KLFlBQUEsQ0FBYXBKLE9BQU87SUFDekIsT0FBTyxJQUFJM0IsSUFBQSxDQUFLLE1BQU0sS0FBS3lVLFlBQUEsQ0FBYTdOLEtBQUssR0FBR2pGLE9BQUEsRUFBUzdCLElBQUEsQ0FBS2tJLE9BQUEsQ0FBUUwsS0FBSyxDQUFDO0VBQ2hGO0VBU0FvSixjQUFjbkssS0FBQSxHQUFRLE1BQU1qRixPQUFBLEVBQVNnRyxLQUFBLEVBQU87SUFDeENmLEtBQUEsR0FBUSxLQUFLNk4sWUFBQSxDQUFhN04sS0FBSztJQUMvQmpGLE9BQUEsR0FBVTlCLFFBQUEsQ0FBUzZDLElBQUEsQ0FBS2YsT0FBTztJQUMvQixJQUFJQSxPQUFBLENBQVFDLElBQUEsRUFBTTtNQUNkLElBQUk0SixNQUFBLEdBQVMsS0FBSzZDLFlBQUEsQ0FBYW1DLFVBQUEsQ0FBVzdPLE9BQU87TUFDakQsSUFBSSxDQUFDNkosTUFBQSxFQUNELE9BQU87TUFDWDdKLE9BQUEsR0FBVTZKLE1BQUEsQ0FBT3pILE1BQUEsQ0FBT3BDLE9BQU87SUFDbkM7SUFDQSxJQUFJOFQsT0FBQSxHQUFVLEtBQUtwSCxZQUFBLENBQWFDLGFBQUEsQ0FBYzNNLE9BQU87SUFDckQsSUFBSThKLEtBQUEsR0FBUWdLLE9BQUEsSUFBV0EsT0FBQSxDQUFRakYsVUFBQSxDQUFXM1EsUUFBQSxDQUFTNEUsS0FBQSxFQUFPLElBQUk7SUFDOUQsSUFBSSxDQUFDZ0gsS0FBQSxFQUNELE9BQU87SUFDWCxPQUFPLElBQUl6TCxJQUFBLENBQUssTUFBTTRHLEtBQUEsRUFBT2pGLE9BQUEsQ0FBUW9DLE1BQUEsQ0FBTzBILEtBQUssR0FBRzNMLElBQUEsQ0FBS2tJLE9BQUEsQ0FBUUwsS0FBSyxDQUFDO0VBQzNFO0VBS0ErTixhQUFhL1QsT0FBQSxFQUFTO0lBQ2xCLElBQUk0QyxNQUFBLEdBQVMsS0FBSzhKLFlBQUEsQ0FBYUMsYUFBQSxDQUFjM00sT0FBTztJQUNwRCxJQUFJLENBQUM0QyxNQUFBLElBQVUsQ0FBQ0EsTUFBQSxDQUFPbUssUUFBQSxFQUNuQixPQUFPO0lBQ1gsU0FBU3pOLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlVLE9BQUEsQ0FBUVQsVUFBQSxFQUFZRCxDQUFBLElBQ3BDLElBQUksQ0FBQyxLQUFLME4sV0FBQSxDQUFZaE4sT0FBQSxDQUFRUCxLQUFBLENBQU1ILENBQUMsRUFBRTBHLEtBQUssR0FDeEMsT0FBTztJQUNmLE9BQU87RUFDWDtFQU1Bb0QsYUFBYXBKLE9BQUEsRUFBUztJQUNsQixJQUFJLENBQUMsS0FBSytULFlBQUEsQ0FBYS9ULE9BQU8sR0FDMUIsTUFBTSxJQUFJd0QsVUFBQSxDQUFXLDRCQUE0QixLQUFLcUMsSUFBQSxLQUFTN0YsT0FBQSxDQUFRaUUsUUFBQSxDQUFTLEVBQUVuQyxLQUFBLENBQU0sR0FBRyxFQUFFLEdBQUc7RUFDeEc7RUFJQXFFLFdBQVdsQixLQUFBLEVBQU87SUFDZGtCLFVBQUEsQ0FBVyxLQUFLbEIsS0FBQSxFQUFPQSxLQUFBLEVBQU8sUUFBUSxLQUFLWSxJQUFJO0VBQ25EO0VBSUFtTyxlQUFlQyxRQUFBLEVBQVU7SUFDckIsT0FBTyxLQUFLWCxPQUFBLElBQVcsUUFBUSxLQUFLQSxPQUFBLENBQVFqRSxPQUFBLENBQVE0RSxRQUFRLElBQUk7RUFDcEU7RUFJQWpILFlBQVloSCxLQUFBLEVBQU87SUFDZixJQUFJLEtBQUtzTixPQUFBLElBQVcsTUFDaEIsT0FBTztJQUNYLFNBQVNoVSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJMEcsS0FBQSxDQUFNcEYsTUFBQSxFQUFRdEIsQ0FBQSxJQUM5QixJQUFJLENBQUMsS0FBSzBVLGNBQUEsQ0FBZWhPLEtBQUEsQ0FBTTFHLENBQUEsRUFBRzBDLElBQUksR0FDbEMsT0FBTztJQUNmLE9BQU87RUFDWDtFQUlBa1MsYUFBYWxPLEtBQUEsRUFBTztJQUNoQixJQUFJLEtBQUtzTixPQUFBLElBQVcsTUFDaEIsT0FBT3ROLEtBQUE7SUFDWCxJQUFJOUMsS0FBQTtJQUNKLFNBQVM1RCxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJMEcsS0FBQSxDQUFNcEYsTUFBQSxFQUFRdEIsQ0FBQSxJQUFLO01BQ25DLElBQUksQ0FBQyxLQUFLMFUsY0FBQSxDQUFlaE8sS0FBQSxDQUFNMUcsQ0FBQSxFQUFHMEMsSUFBSSxHQUFHO1FBQ3JDLElBQUksQ0FBQ2tCLEtBQUEsRUFDREEsS0FBQSxHQUFPOEMsS0FBQSxDQUFNbEUsS0FBQSxDQUFNLEdBQUd4QyxDQUFDO01BQy9CLFdBQ1M0RCxLQUFBLEVBQU07UUFDWEEsS0FBQSxDQUFLUixJQUFBLENBQUtzRCxLQUFBLENBQU0xRyxDQUFBLENBQUU7TUFDdEI7SUFDSjtJQUNBLE9BQU8sQ0FBQzRELEtBQUEsR0FBTzhDLEtBQUEsR0FBUTlDLEtBQUEsQ0FBS3RDLE1BQUEsR0FBU3NDLEtBQUEsR0FBTy9FLElBQUEsQ0FBS21JLElBQUE7RUFDckQ7RUFJQSxPQUFPaUwsUUFBUXZNLEtBQUEsRUFBT1IsTUFBQSxFQUFRO0lBQzFCLElBQUk1QixNQUFBLEdBQVMsZUFBQThJLE1BQUEsQ0FBT3hGLE1BQUEsQ0FBTyxJQUFJO0lBQy9CbEIsS0FBQSxDQUFNdEIsT0FBQSxDQUFRLENBQUNtQyxJQUFBLEVBQU01RCxJQUFBLEtBQVNXLE1BQUEsQ0FBT2lELElBQUEsSUFBUSxJQUFJdEgsUUFBQSxDQUFTc0gsSUFBQSxFQUFNckIsTUFBQSxFQUFRdkMsSUFBSSxDQUFDO0lBQzdFLElBQUlrUyxPQUFBLEdBQVUzUCxNQUFBLENBQU92QyxJQUFBLENBQUttUyxPQUFBLElBQVc7SUFDckMsSUFBSSxDQUFDeFIsTUFBQSxDQUFPdVIsT0FBQSxHQUNSLE1BQU0sSUFBSTNRLFVBQUEsQ0FBVywyQ0FBMkMyUSxPQUFBLEdBQVUsSUFBSTtJQUNsRixJQUFJLENBQUN2UixNQUFBLENBQU85QyxJQUFBLEVBQ1IsTUFBTSxJQUFJMEQsVUFBQSxDQUFXLGtDQUFrQztJQUMzRCxTQUFTc0MsQ0FBQSxJQUFLbEQsTUFBQSxDQUFPOUMsSUFBQSxDQUFLbUYsS0FBQSxFQUN0QixNQUFNLElBQUl6QixVQUFBLENBQVcsK0NBQStDO0lBQ3hFLE9BQU9aLE1BQUE7RUFDWDtBQUNKO0FBQ0EsU0FBU3lSLGFBQWFuRCxRQUFBLEVBQVV3QixRQUFBLEVBQVUxUSxJQUFBLEVBQU07RUFDNUMsSUFBSWlOLEtBQUEsR0FBUWpOLElBQUEsQ0FBS29PLEtBQUEsQ0FBTSxHQUFHO0VBQzFCLE9BQVEzTCxLQUFBLElBQVU7SUFDZCxJQUFJb0IsSUFBQSxHQUFPcEIsS0FBQSxLQUFVLE9BQU8sU0FBUyxPQUFPQSxLQUFBO0lBQzVDLElBQUl3SyxLQUFBLENBQU1JLE9BQUEsQ0FBUXhKLElBQUksSUFBSSxHQUN0QixNQUFNLElBQUlyQyxVQUFBLENBQVcsMEJBQTBCeUwsS0FBQSxrQkFBdUJ5RCxRQUFBLFlBQW9CeEIsUUFBQSxTQUFpQnJMLElBQUEsRUFBTTtFQUN6SDtBQUNKO0FBRUEsSUFBTXdOLFNBQUEsR0FBTixNQUFnQjtFQUNaeFMsWUFBWXFRLFFBQUEsRUFBVXdCLFFBQUEsRUFBVTRCLE9BQUEsRUFBUztJQUNyQyxLQUFLMUIsVUFBQSxHQUFhbEgsTUFBQSxDQUFPOEIsU0FBQSxDQUFVK0csY0FBQSxDQUFlQyxJQUFBLENBQUtGLE9BQUEsRUFBUyxTQUFTO0lBQ3pFLEtBQUt6QixPQUFBLEdBQVV5QixPQUFBLENBQVF6QixPQUFBO0lBQ3ZCLEtBQUtNLFFBQUEsR0FBVyxPQUFPbUIsT0FBQSxDQUFRbkIsUUFBQSxJQUFZLFdBQVdrQixZQUFBLENBQWFuRCxRQUFBLEVBQVV3QixRQUFBLEVBQVU0QixPQUFBLENBQVFuQixRQUFRLElBQUltQixPQUFBLENBQVFuQixRQUFBO0VBQ3ZIO0VBQ0EsSUFBSVMsV0FBQSxFQUFhO0lBQ2IsT0FBTyxDQUFDLEtBQUtoQixVQUFBO0VBQ2pCO0FBQ0o7QUFRQSxJQUFNeFUsUUFBQSxHQUFOLE1BQWU7RUFJWHlDLFlBSUFnRixJQUFBLEVBSUFKLElBQUEsRUFJQWpCLE1BQUEsRUFJQXZDLElBQUEsRUFBTTtJQUNGLEtBQUs0RCxJQUFBLEdBQU9BLElBQUE7SUFDWixLQUFLSixJQUFBLEdBQU9BLElBQUE7SUFDWixLQUFLakIsTUFBQSxHQUFTQSxNQUFBO0lBQ2QsS0FBS3ZDLElBQUEsR0FBT0EsSUFBQTtJQUNaLEtBQUtnRCxLQUFBLEdBQVFtTyxTQUFBLENBQVV2TixJQUFBLEVBQU01RCxJQUFBLENBQUtnRCxLQUFLO0lBQ3ZDLEtBQUt3UCxRQUFBLEdBQVc7SUFDaEIsSUFBSWhDLFFBQUEsR0FBVzFHLFlBQUEsQ0FBYSxLQUFLOUcsS0FBSztJQUN0QyxLQUFLeVAsUUFBQSxHQUFXakMsUUFBQSxHQUFXLElBQUl0VSxJQUFBLENBQUssTUFBTXNVLFFBQVEsSUFBSTtFQUMxRDtFQU1Bdk0sT0FBT2pCLEtBQUEsR0FBUSxNQUFNO0lBQ2pCLElBQUksQ0FBQ0EsS0FBQSxJQUFTLEtBQUt5UCxRQUFBLEVBQ2YsT0FBTyxLQUFLQSxRQUFBO0lBQ2hCLE9BQU8sSUFBSXZXLElBQUEsQ0FBSyxNQUFNMlUsWUFBQSxDQUFhLEtBQUs3TixLQUFBLEVBQU9BLEtBQUssQ0FBQztFQUN6RDtFQUlBLE9BQU9zTSxRQUFRdkwsS0FBQSxFQUFPeEIsTUFBQSxFQUFRO0lBQzFCLElBQUk1QixNQUFBLEdBQVMsZUFBQThJLE1BQUEsQ0FBT3hGLE1BQUEsQ0FBTyxJQUFJO01BQUdULElBQUEsR0FBTztJQUN6Q08sS0FBQSxDQUFNdEMsT0FBQSxDQUFRLENBQUNtQyxJQUFBLEVBQU01RCxJQUFBLEtBQVNXLE1BQUEsQ0FBT2lELElBQUEsSUFBUSxJQUFJekgsUUFBQSxDQUFTeUgsSUFBQSxFQUFNSixJQUFBLElBQVFqQixNQUFBLEVBQVF2QyxJQUFJLENBQUM7SUFDckYsT0FBT1csTUFBQTtFQUNYO0VBS0E4QyxjQUFjSixHQUFBLEVBQUs7SUFDZixTQUFTaEcsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWdHLEdBQUEsQ0FBSTFFLE1BQUEsRUFBUXRCLENBQUEsSUFDNUIsSUFBSWdHLEdBQUEsQ0FBSWhHLENBQUEsRUFBRzBDLElBQUEsSUFBUSxNQUFNO01BQ3JCc0QsR0FBQSxHQUFNQSxHQUFBLENBQUl4RCxLQUFBLENBQU0sR0FBR3hDLENBQUMsRUFBRThELE1BQUEsQ0FBT2tDLEdBQUEsQ0FBSXhELEtBQUEsQ0FBTXhDLENBQUEsR0FBSSxDQUFDLENBQUM7TUFDN0NBLENBQUE7SUFDSjtJQUNKLE9BQU9nRyxHQUFBO0VBQ1g7RUFJQUssUUFBUUwsR0FBQSxFQUFLO0lBQ1QsU0FBU2hHLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlnRyxHQUFBLENBQUkxRSxNQUFBLEVBQVF0QixDQUFBLElBQzVCLElBQUlnRyxHQUFBLENBQUloRyxDQUFBLEVBQUcwQyxJQUFBLElBQVEsTUFDZixPQUFPc0QsR0FBQSxDQUFJaEcsQ0FBQTtFQUN2QjtFQUlBNkcsV0FBV2xCLEtBQUEsRUFBTztJQUNka0IsVUFBQSxDQUFXLEtBQUtsQixLQUFBLEVBQU9BLEtBQUEsRUFBTyxRQUFRLEtBQUtZLElBQUk7RUFDbkQ7RUFLQUwsU0FBU25ELEtBQUEsRUFBTztJQUNaLE9BQU8sS0FBS29TLFFBQUEsQ0FBU3BGLE9BQUEsQ0FBUWhOLEtBQUssSUFBSTtFQUMxQztBQUNKO0FBVUEsSUFBTTNELE1BQUEsR0FBTixNQUFhO0VBSVRtQyxZQUFZb0IsSUFBQSxFQUFNO0lBTWQsS0FBSzBTLG9CQUFBLEdBQXVCO0lBTTVCLEtBQUtDLE1BQUEsR0FBUyxlQUFBbEosTUFBQSxDQUFPeEYsTUFBQSxDQUFPLElBQUk7SUFDaEMsSUFBSTJPLFlBQUEsR0FBZSxLQUFLNVMsSUFBQSxHQUFPLENBQUM7SUFDaEMsU0FBUzZTLElBQUEsSUFBUTdTLElBQUEsRUFDYjRTLFlBQUEsQ0FBYUMsSUFBQSxJQUFRN1MsSUFBQSxDQUFLNlMsSUFBQTtJQUM5QkQsWUFBQSxDQUFhN1AsS0FBQSxHQUFRakcsaUJBQUEsQ0FBQThULE9BQUEsQ0FBVzlSLElBQUEsQ0FBS2tCLElBQUEsQ0FBSytDLEtBQUssR0FDM0M2UCxZQUFBLENBQWE3TyxLQUFBLEdBQVFqSCxpQkFBQSxDQUFBOFQsT0FBQSxDQUFXOVIsSUFBQSxDQUFLa0IsSUFBQSxDQUFLK0QsS0FBQSxJQUFTLENBQUMsQ0FBQyxHQUNyRCxLQUFLaEIsS0FBQSxHQUFRekcsUUFBQSxDQUFTZ1QsT0FBQSxDQUFRLEtBQUt0UCxJQUFBLENBQUsrQyxLQUFBLEVBQU8sSUFBSTtJQUN2RCxLQUFLZ0IsS0FBQSxHQUFRNUgsUUFBQSxDQUFTbVQsT0FBQSxDQUFRLEtBQUt0UCxJQUFBLENBQUsrRCxLQUFBLEVBQU8sSUFBSTtJQUNuRCxJQUFJK08sZ0JBQUEsR0FBbUIsZUFBQXJKLE1BQUEsQ0FBT3hGLE1BQUEsQ0FBTyxJQUFJO0lBQ3pDLFNBQVM0TyxJQUFBLElBQVEsS0FBSzlQLEtBQUEsRUFBTztNQUN6QixJQUFJOFAsSUFBQSxJQUFRLEtBQUs5TyxLQUFBLEVBQ2IsTUFBTSxJQUFJeEMsVUFBQSxDQUFXc1IsSUFBQSxHQUFPLG9DQUFvQztNQUNwRSxJQUFJOVMsSUFBQSxHQUFPLEtBQUtnRCxLQUFBLENBQU04UCxJQUFBO1FBQU9FLFdBQUEsR0FBY2hULElBQUEsQ0FBS0MsSUFBQSxDQUFLakMsT0FBQSxJQUFXO1FBQUlpVixRQUFBLEdBQVdqVCxJQUFBLENBQUtDLElBQUEsQ0FBSytELEtBQUE7TUFDekZoRSxJQUFBLENBQUswSyxZQUFBLEdBQWVxSSxnQkFBQSxDQUFpQkMsV0FBQSxNQUNoQ0QsZ0JBQUEsQ0FBaUJDLFdBQUEsSUFBZWpYLFlBQUEsQ0FBYStQLEtBQUEsQ0FBTWtILFdBQUEsRUFBYSxLQUFLaFEsS0FBSztNQUMvRWhELElBQUEsQ0FBSzBJLGFBQUEsR0FBZ0IxSSxJQUFBLENBQUswSyxZQUFBLENBQWFoQyxhQUFBO01BQ3ZDLElBQUkxSSxJQUFBLENBQUtDLElBQUEsQ0FBSzBTLG9CQUFBLEVBQXNCO1FBQ2hDLElBQUksS0FBS0Esb0JBQUEsRUFDTCxNQUFNLElBQUluUixVQUFBLENBQVcsa0NBQWtDO1FBQzNELElBQUksQ0FBQ3hCLElBQUEsQ0FBS29JLFFBQUEsSUFBWSxDQUFDcEksSUFBQSxDQUFLRCxNQUFBLEVBQ3hCLE1BQU0sSUFBSXlCLFVBQUEsQ0FBVyx1REFBdUQ7UUFDaEYsS0FBS21SLG9CQUFBLEdBQXVCM1MsSUFBQTtNQUNoQztNQUNBQSxJQUFBLENBQUtzUixPQUFBLEdBQVUyQixRQUFBLElBQVksTUFBTSxPQUM3QkEsUUFBQSxHQUFXQyxXQUFBLENBQVksTUFBTUQsUUFBQSxDQUFTN0UsS0FBQSxDQUFNLEdBQUcsQ0FBQyxJQUM1QzZFLFFBQUEsSUFBWSxNQUFNLENBQUNqVCxJQUFBLENBQUswSSxhQUFBLEdBQWdCLEVBQUMsR0FBSTtJQUN6RDtJQUNBLFNBQVNvSyxJQUFBLElBQVEsS0FBSzlPLEtBQUEsRUFBTztNQUN6QixJQUFJaEUsSUFBQSxHQUFPLEtBQUtnRSxLQUFBLENBQU04TyxJQUFBO1FBQU9LLElBQUEsR0FBT25ULElBQUEsQ0FBS0MsSUFBQSxDQUFLdUQsUUFBQTtNQUM5Q3hELElBQUEsQ0FBS3lTLFFBQUEsR0FBV1UsSUFBQSxJQUFRLE9BQU8sQ0FBQ25ULElBQUksSUFBSW1ULElBQUEsSUFBUSxLQUFLLEVBQUMsR0FBSUQsV0FBQSxDQUFZLE1BQU1DLElBQUEsQ0FBSy9FLEtBQUEsQ0FBTSxHQUFHLENBQUM7SUFDL0Y7SUFDQSxLQUFLeEwsWUFBQSxHQUFlbUIsSUFBQSxJQUFRMUgsSUFBQSxDQUFLa0csUUFBQSxDQUFTLE1BQU13QixJQUFJO0lBQ3BELEtBQUt1SCxZQUFBLEdBQWV2SCxJQUFBLElBQVE1SCxJQUFBLENBQUtvRyxRQUFBLENBQVMsTUFBTXdCLElBQUk7SUFDcEQsS0FBS3FQLFdBQUEsR0FBYyxLQUFLcFEsS0FBQSxDQUFNLEtBQUsvQyxJQUFBLENBQUttUyxPQUFBLElBQVc7SUFDbkQsS0FBS1EsTUFBQSxDQUFPUyxTQUFBLEdBQVksZUFBQTNKLE1BQUEsQ0FBT3hGLE1BQUEsQ0FBTyxJQUFJO0VBQzlDO0VBT0F0RSxLQUFLSSxJQUFBLEVBQU1pRCxLQUFBLEdBQVEsTUFBTWpGLE9BQUEsRUFBU2dHLEtBQUEsRUFBTztJQUNyQyxJQUFJLE9BQU9oRSxJQUFBLElBQVEsVUFDZkEsSUFBQSxHQUFPLEtBQUt1TCxRQUFBLENBQVN2TCxJQUFJLFdBQ3BCLEVBQUVBLElBQUEsWUFBZ0J6RCxRQUFBLEdBQ3ZCLE1BQU0sSUFBSWlGLFVBQUEsQ0FBVyx3QkFBd0J4QixJQUFJLFdBQzVDQSxJQUFBLENBQUt3QyxNQUFBLElBQVUsTUFDcEIsTUFBTSxJQUFJaEIsVUFBQSxDQUFXLDJDQUEyQ3hCLElBQUEsQ0FBSzZELElBQUEsR0FBTyxHQUFHO0lBQ25GLE9BQU83RCxJQUFBLENBQUs2UixhQUFBLENBQWM1TyxLQUFBLEVBQU9qRixPQUFBLEVBQVNnRyxLQUFLO0VBQ25EO0VBS0FsRyxLQUFLQSxJQUFBLEVBQU1rRyxLQUFBLEVBQU87SUFDZCxJQUFJaEUsSUFBQSxHQUFPLEtBQUtnRCxLQUFBLENBQU1sRixJQUFBO0lBQ3RCLE9BQU8sSUFBSTJOLFFBQUEsQ0FBU3pMLElBQUEsRUFBTUEsSUFBQSxDQUFLK0osWUFBQSxFQUFjak0sSUFBQSxFQUFNM0IsSUFBQSxDQUFLa0ksT0FBQSxDQUFRTCxLQUFLLENBQUM7RUFDMUU7RUFJQUMsS0FBS2pFLElBQUEsRUFBTWlELEtBQUEsRUFBTztJQUNkLElBQUksT0FBT2pELElBQUEsSUFBUSxVQUNmQSxJQUFBLEdBQU8sS0FBS2dFLEtBQUEsQ0FBTWhFLElBQUE7SUFDdEIsT0FBT0EsSUFBQSxDQUFLa0UsTUFBQSxDQUFPakIsS0FBSztFQUM1QjtFQUlBc0ksU0FBUzFILElBQUEsRUFBTTtJQUNYLElBQUl0QyxNQUFBLEdBQVEsS0FBS3lCLEtBQUEsQ0FBTWEsSUFBQTtJQUN2QixJQUFJLENBQUN0QyxNQUFBLEVBQ0QsTUFBTSxJQUFJQyxVQUFBLENBQVcsd0JBQXdCcUMsSUFBSTtJQUNyRCxPQUFPdEMsTUFBQTtFQUNYO0FBQ0o7QUFDQSxTQUFTMlIsWUFBWTFRLE1BQUEsRUFBUXdCLEtBQUEsRUFBTztFQUNoQyxJQUFJekMsTUFBQSxHQUFRLEVBQUM7RUFDYixTQUFTakUsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTBHLEtBQUEsQ0FBTXBGLE1BQUEsRUFBUXRCLENBQUEsSUFBSztJQUNuQyxJQUFJdUcsSUFBQSxHQUFPRyxLQUFBLENBQU0xRyxDQUFBO01BQUkyRyxJQUFBLEdBQU96QixNQUFBLENBQU93QixLQUFBLENBQU1ILElBQUE7TUFBT3lQLEVBQUEsR0FBS3JQLElBQUE7SUFDckQsSUFBSUEsSUFBQSxFQUFNO01BQ04xQyxNQUFBLENBQU1iLElBQUEsQ0FBS3VELElBQUk7SUFDbkIsT0FDSztNQUNELFNBQVM2TyxJQUFBLElBQVF0USxNQUFBLENBQU93QixLQUFBLEVBQU87UUFDM0IsSUFBSXVQLEtBQUEsR0FBTy9RLE1BQUEsQ0FBT3dCLEtBQUEsQ0FBTThPLElBQUE7UUFDeEIsSUFBSWpQLElBQUEsSUFBUSxPQUFRMFAsS0FBQSxDQUFLdFQsSUFBQSxDQUFLdVIsS0FBQSxJQUFTK0IsS0FBQSxDQUFLdFQsSUFBQSxDQUFLdVIsS0FBQSxDQUFNcEQsS0FBQSxDQUFNLEdBQUcsRUFBRWYsT0FBQSxDQUFReEosSUFBSSxJQUFJLElBQzlFdEMsTUFBQSxDQUFNYixJQUFBLENBQUs0UyxFQUFBLEdBQUtDLEtBQUk7TUFDNUI7SUFDSjtJQUNBLElBQUksQ0FBQ0QsRUFBQSxFQUNELE1BQU0sSUFBSTlFLFdBQUEsQ0FBWSx5QkFBeUJ4SyxLQUFBLENBQU0xRyxDQUFBLElBQUssR0FBRztFQUNyRTtFQUNBLE9BQU9pRSxNQUFBO0FBQ1g7QUFFQSxTQUFTaVMsVUFBVUMsSUFBQSxFQUFNO0VBQUUsT0FBT0EsSUFBQSxDQUFLQyxHQUFBLElBQU87QUFBTTtBQUNwRCxTQUFTQyxZQUFZRixJQUFBLEVBQU07RUFBRSxPQUFPQSxJQUFBLENBQUtHLEtBQUEsSUFBUztBQUFNO0FBTXhELElBQU01WCxTQUFBLEdBQU4sTUFBZ0I7RUFLWjZDLFlBSUEyRCxNQUFBLEVBS0FxUixLQUFBLEVBQU87SUFDSCxLQUFLclIsTUFBQSxHQUFTQSxNQUFBO0lBQ2QsS0FBS3FSLEtBQUEsR0FBUUEsS0FBQTtJQUliLEtBQUtDLElBQUEsR0FBTyxFQUFDO0lBSWIsS0FBS0MsTUFBQSxHQUFTLEVBQUM7SUFDZixJQUFJQyxhQUFBLEdBQWdCLEtBQUtBLGFBQUEsR0FBZ0IsRUFBQztJQUMxQ0gsS0FBQSxDQUFNblMsT0FBQSxDQUFRK1IsSUFBQSxJQUFRO01BQ2xCLElBQUlELFNBQUEsQ0FBVUMsSUFBSSxHQUFHO1FBQ2pCLEtBQUtLLElBQUEsQ0FBS3BULElBQUEsQ0FBSytTLElBQUk7TUFDdkIsV0FDU0UsV0FBQSxDQUFZRixJQUFJLEdBQUc7UUFDeEIsSUFBSVgsSUFBQSxHQUFPLFFBQVFtQixJQUFBLENBQUtSLElBQUEsQ0FBS0csS0FBSyxFQUFFO1FBQ3BDLElBQUlJLGFBQUEsQ0FBYzNHLE9BQUEsQ0FBUXlGLElBQUksSUFBSSxHQUM5QmtCLGFBQUEsQ0FBY3RULElBQUEsQ0FBS29TLElBQUk7UUFDM0IsS0FBS2lCLE1BQUEsQ0FBT3JULElBQUEsQ0FBSytTLElBQUk7TUFDekI7SUFDSixDQUFDO0lBRUQsS0FBS1MsY0FBQSxHQUFpQixDQUFDLEtBQUtKLElBQUEsQ0FBS0ssSUFBQSxDQUFLQyxDQUFBLElBQUs7TUFDdkMsSUFBSSxDQUFDLGFBQWFyRixJQUFBLENBQUtxRixDQUFBLENBQUVWLEdBQUcsS0FBSyxDQUFDVSxDQUFBLENBQUV4VSxJQUFBLEVBQ2hDLE9BQU87TUFDWCxJQUFJQSxJQUFBLEdBQU80QyxNQUFBLENBQU9RLEtBQUEsQ0FBTW9SLENBQUEsQ0FBRXhVLElBQUE7TUFDMUIsT0FBT0EsSUFBQSxDQUFLOEssWUFBQSxDQUFhUSxTQUFBLENBQVV0TCxJQUFJO0lBQzNDLENBQUM7RUFDTDtFQUlBa00sTUFBTXVJLEdBQUEsRUFBSy9CLE9BQUEsR0FBVSxDQUFDLEdBQUc7SUFDckIsSUFBSWdDLE9BQUEsR0FBVSxJQUFJQyxZQUFBLENBQWEsTUFBTWpDLE9BQUEsRUFBUyxLQUFLO0lBQ25EZ0MsT0FBQSxDQUFRRSxNQUFBLENBQU9ILEdBQUEsRUFBS2xZLElBQUEsQ0FBS21JLElBQUEsRUFBTWdPLE9BQUEsQ0FBUXZULElBQUEsRUFBTXVULE9BQUEsQ0FBUXRULEVBQUU7SUFDdkQsT0FBT3NWLE9BQUEsQ0FBUUcsTUFBQSxDQUFPO0VBQzFCO0VBU0FDLFdBQVdMLEdBQUEsRUFBSy9CLE9BQUEsR0FBVSxDQUFDLEdBQUc7SUFDMUIsSUFBSWdDLE9BQUEsR0FBVSxJQUFJQyxZQUFBLENBQWEsTUFBTWpDLE9BQUEsRUFBUyxJQUFJO0lBQ2xEZ0MsT0FBQSxDQUFRRSxNQUFBLENBQU9ILEdBQUEsRUFBS2xZLElBQUEsQ0FBS21JLElBQUEsRUFBTWdPLE9BQUEsQ0FBUXZULElBQUEsRUFBTXVULE9BQUEsQ0FBUXRULEVBQUU7SUFDdkQsT0FBT3JDLEtBQUEsQ0FBTXFJLE9BQUEsQ0FBUXNQLE9BQUEsQ0FBUUcsTUFBQSxDQUFPLENBQUM7RUFDekM7RUFJQUUsU0FBU04sR0FBQSxFQUFLQyxPQUFBLEVBQVN4TSxLQUFBLEVBQU87SUFDMUIsU0FBU3hLLENBQUEsR0FBSXdLLEtBQUEsR0FBUSxLQUFLZ00sSUFBQSxDQUFLekcsT0FBQSxDQUFRdkYsS0FBSyxJQUFJLElBQUksR0FBR3hLLENBQUEsR0FBSSxLQUFLd1csSUFBQSxDQUFLbFYsTUFBQSxFQUFRdEIsQ0FBQSxJQUFLO01BQzlFLElBQUltVyxJQUFBLEdBQU8sS0FBS0ssSUFBQSxDQUFLeFcsQ0FBQTtNQUNyQixJQUFJc1gsT0FBQSxDQUFRUCxHQUFBLEVBQUtaLElBQUEsQ0FBS0MsR0FBRyxNQUNwQkQsSUFBQSxDQUFLb0IsU0FBQSxLQUFjLFVBQWFSLEdBQUEsQ0FBSVMsWUFBQSxJQUFnQnJCLElBQUEsQ0FBS29CLFNBQUEsTUFDekQsQ0FBQ3BCLElBQUEsQ0FBS2EsT0FBQSxJQUFXQSxPQUFBLENBQVFTLGNBQUEsQ0FBZXRCLElBQUEsQ0FBS2EsT0FBTyxJQUFJO1FBQ3pELElBQUliLElBQUEsQ0FBS3VCLFFBQUEsRUFBVTtVQUNmLElBQUlwVSxNQUFBLEdBQVM2UyxJQUFBLENBQUt1QixRQUFBLENBQVNYLEdBQUc7VUFDOUIsSUFBSXpULE1BQUEsS0FBVyxPQUNYO1VBQ0o2UyxJQUFBLENBQUt4USxLQUFBLEdBQVFyQyxNQUFBLElBQVU7UUFDM0I7UUFDQSxPQUFPNlMsSUFBQTtNQUNYO0lBQ0o7RUFDSjtFQUlBd0IsV0FBV25DLElBQUEsRUFBTXJRLEtBQUEsRUFBTzZSLE9BQUEsRUFBU3hNLEtBQUEsRUFBTztJQUNwQyxTQUFTeEssQ0FBQSxHQUFJd0ssS0FBQSxHQUFRLEtBQUtpTSxNQUFBLENBQU8xRyxPQUFBLENBQVF2RixLQUFLLElBQUksSUFBSSxHQUFHeEssQ0FBQSxHQUFJLEtBQUt5VyxNQUFBLENBQU9uVixNQUFBLEVBQVF0QixDQUFBLElBQUs7TUFDbEYsSUFBSW1XLElBQUEsR0FBTyxLQUFLTSxNQUFBLENBQU96VyxDQUFBO1FBQUlzVyxLQUFBLEdBQVFILElBQUEsQ0FBS0csS0FBQTtNQUN4QyxJQUFJQSxLQUFBLENBQU12RyxPQUFBLENBQVF5RixJQUFJLEtBQUssS0FDdkJXLElBQUEsQ0FBS2EsT0FBQSxJQUFXLENBQUNBLE9BQUEsQ0FBUVMsY0FBQSxDQUFldEIsSUFBQSxDQUFLYSxPQUFPLEtBSXBEVixLQUFBLENBQU1oVixNQUFBLEdBQVNrVSxJQUFBLENBQUtsVSxNQUFBLEtBQ2ZnVixLQUFBLENBQU1zQixVQUFBLENBQVdwQyxJQUFBLENBQUtsVSxNQUFNLEtBQUssTUFBTWdWLEtBQUEsQ0FBTTlULEtBQUEsQ0FBTWdULElBQUEsQ0FBS2xVLE1BQUEsR0FBUyxDQUFDLEtBQUs2RCxLQUFBLEdBQzVFO01BQ0osSUFBSWdSLElBQUEsQ0FBS3VCLFFBQUEsRUFBVTtRQUNmLElBQUlwVSxNQUFBLEdBQVM2UyxJQUFBLENBQUt1QixRQUFBLENBQVN2UyxLQUFLO1FBQ2hDLElBQUk3QixNQUFBLEtBQVcsT0FDWDtRQUNKNlMsSUFBQSxDQUFLeFEsS0FBQSxHQUFRckMsTUFBQSxJQUFVO01BQzNCO01BQ0EsT0FBTzZTLElBQUE7SUFDWDtFQUNKO0VBSUEsT0FBTzBCLFlBQVkzUyxNQUFBLEVBQVE7SUFDdkIsSUFBSTVCLE1BQUEsR0FBUyxFQUFDO0lBQ2QsU0FBUzJFLE9BQU9rTyxJQUFBLEVBQU07TUFDbEIsSUFBSTJCLFFBQUEsR0FBVzNCLElBQUEsQ0FBSzJCLFFBQUEsSUFBWSxPQUFPLEtBQUszQixJQUFBLENBQUsyQixRQUFBO1FBQVU5WCxDQUFBLEdBQUk7TUFDL0QsT0FBT0EsQ0FBQSxHQUFJc0QsTUFBQSxDQUFPaEMsTUFBQSxFQUFRdEIsQ0FBQSxJQUFLO1FBQzNCLElBQUkrSyxJQUFBLEdBQU96SCxNQUFBLENBQU90RCxDQUFBO1VBQUkrWCxZQUFBLEdBQWVoTixJQUFBLENBQUsrTSxRQUFBLElBQVksT0FBTyxLQUFLL00sSUFBQSxDQUFLK00sUUFBQTtRQUN2RSxJQUFJQyxZQUFBLEdBQWVELFFBQUEsRUFDZjtNQUNSO01BQ0F4VSxNQUFBLENBQU8wVSxNQUFBLENBQU9oWSxDQUFBLEVBQUcsR0FBR21XLElBQUk7SUFDNUI7SUFDQSxTQUFTNVAsSUFBQSxJQUFRckIsTUFBQSxDQUFPd0IsS0FBQSxFQUFPO01BQzNCLElBQUk2UCxLQUFBLEdBQVFyUixNQUFBLENBQU93QixLQUFBLENBQU1ILElBQUEsRUFBTTVELElBQUEsQ0FBS3NWLFFBQUE7TUFDcEMsSUFBSTFCLEtBQUEsRUFDQUEsS0FBQSxDQUFNblMsT0FBQSxDQUFRK1IsSUFBQSxJQUFRO1FBQ2xCbE8sTUFBQSxDQUFPa08sSUFBQSxHQUFPcE8sSUFBQSxDQUFLb08sSUFBSSxDQUFDO1FBQ3hCLElBQUksRUFBRUEsSUFBQSxDQUFLeFAsSUFBQSxJQUFRd1AsSUFBQSxDQUFLK0IsTUFBQSxJQUFVL0IsSUFBQSxDQUFLZ0MsU0FBQSxHQUNuQ2hDLElBQUEsQ0FBS3hQLElBQUEsR0FBT0osSUFBQTtNQUNwQixDQUFDO0lBQ1Q7SUFDQSxTQUFTQSxJQUFBLElBQVFyQixNQUFBLENBQU9RLEtBQUEsRUFBTztNQUMzQixJQUFJNlEsS0FBQSxHQUFRclIsTUFBQSxDQUFPUSxLQUFBLENBQU1hLElBQUEsRUFBTTVELElBQUEsQ0FBS3NWLFFBQUE7TUFDcEMsSUFBSTFCLEtBQUEsRUFDQUEsS0FBQSxDQUFNblMsT0FBQSxDQUFRK1IsSUFBQSxJQUFRO1FBQ2xCbE8sTUFBQSxDQUFPa08sSUFBQSxHQUFPcE8sSUFBQSxDQUFLb08sSUFBSSxDQUFDO1FBQ3hCLElBQUksRUFBRUEsSUFBQSxDQUFLN1QsSUFBQSxJQUFRNlQsSUFBQSxDQUFLK0IsTUFBQSxJQUFVL0IsSUFBQSxDQUFLeFAsSUFBQSxHQUNuQ3dQLElBQUEsQ0FBSzdULElBQUEsR0FBT2lFLElBQUE7TUFDcEIsQ0FBQztJQUNUO0lBQ0EsT0FBT2pELE1BQUE7RUFDWDtFQU1BLE9BQU84VSxXQUFXbFQsTUFBQSxFQUFRO0lBQ3RCLE9BQU9BLE1BQUEsQ0FBT29RLE1BQUEsQ0FBTytDLFNBQUEsS0FDaEJuVCxNQUFBLENBQU9vUSxNQUFBLENBQU8rQyxTQUFBLEdBQVksSUFBSTNaLFNBQUEsQ0FBVXdHLE1BQUEsRUFBUXhHLFNBQUEsQ0FBVW1aLFdBQUEsQ0FBWTNTLE1BQU0sQ0FBQztFQUN0RjtBQUNKO0FBQ0EsSUFBTW9ULFNBQUEsR0FBWTtFQUNkQyxPQUFBLEVBQVM7RUFBTUMsT0FBQSxFQUFTO0VBQU1DLEtBQUEsRUFBTztFQUFNQyxVQUFBLEVBQVk7RUFBTUMsTUFBQSxFQUFRO0VBQ3JFQyxFQUFBLEVBQUk7RUFBTUMsR0FBQSxFQUFLO0VBQU1DLEVBQUEsRUFBSTtFQUFNQyxRQUFBLEVBQVU7RUFBTUMsVUFBQSxFQUFZO0VBQU1DLE1BQUEsRUFBUTtFQUN6RUMsTUFBQSxFQUFRO0VBQU1DLElBQUEsRUFBTTtFQUFNQyxFQUFBLEVBQUk7RUFBTUMsRUFBQSxFQUFJO0VBQU1DLEVBQUEsRUFBSTtFQUFNQyxFQUFBLEVBQUk7RUFBTUMsRUFBQSxFQUFJO0VBQ3RFQyxFQUFBLEVBQUk7RUFBTUMsTUFBQSxFQUFRO0VBQU1DLE1BQUEsRUFBUTtFQUFNQyxFQUFBLEVBQUk7RUFBTUMsRUFBQSxFQUFJO0VBQU1DLFFBQUEsRUFBVTtFQUFNQyxFQUFBLEVBQUk7RUFDOUVDLE1BQUEsRUFBUTtFQUFNM1YsQ0FBQSxFQUFHO0VBQU00VixHQUFBLEVBQUs7RUFBTUMsT0FBQSxFQUFTO0VBQU1DLEtBQUEsRUFBTztFQUFNQyxLQUFBLEVBQU87RUFBTUMsRUFBQSxFQUFJO0FBQ25GO0FBQ0EsSUFBTUMsVUFBQSxHQUFhO0VBQ2ZDLElBQUEsRUFBTTtFQUFNVCxRQUFBLEVBQVU7RUFBTVUsTUFBQSxFQUFRO0VBQU1DLE1BQUEsRUFBUTtFQUFNbkUsS0FBQSxFQUFPO0VBQU1vRSxLQUFBLEVBQU87QUFDaEY7QUFDQSxJQUFNQyxRQUFBLEdBQVc7RUFBRVosRUFBQSxFQUFJO0VBQU1NLEVBQUEsRUFBSTtBQUFLO0FBRXRDLElBQU1PLGVBQUEsR0FBa0I7RUFBR0Msb0JBQUEsR0FBdUI7RUFBR0MsYUFBQSxHQUFnQjtBQUNyRSxTQUFTQyxhQUFhclksSUFBQSxFQUFNc1ksa0JBQUEsRUFBb0IxTSxJQUFBLEVBQU07RUFDbEQsSUFBSTBNLGtCQUFBLElBQXNCLE1BQ3RCLFFBQVFBLGtCQUFBLEdBQXFCSixlQUFBLEdBQWtCLE1BQzFDSSxrQkFBQSxLQUF1QixTQUFTSCxvQkFBQSxHQUF1QjtFQUNoRSxPQUFPblksSUFBQSxJQUFRQSxJQUFBLENBQUswUixVQUFBLElBQWMsUUFBUXdHLGVBQUEsR0FBa0JDLG9CQUFBLEdBQXVCdk0sSUFBQSxHQUFPLENBQUN3TSxhQUFBO0FBQy9GO0FBQ0EsSUFBTUcsV0FBQSxHQUFOLE1BQWtCO0VBQ2QxWixZQUFZbUIsSUFBQSxFQUFNaUQsS0FBQSxFQUFPZSxLQUFBLEVBQU93VSxLQUFBLEVBQU8vTixLQUFBLEVBQU82SCxPQUFBLEVBQVM7SUFDbkQsS0FBS3RTLElBQUEsR0FBT0EsSUFBQTtJQUNaLEtBQUtpRCxLQUFBLEdBQVFBLEtBQUE7SUFDYixLQUFLZSxLQUFBLEdBQVFBLEtBQUE7SUFDYixLQUFLd1UsS0FBQSxHQUFRQSxLQUFBO0lBQ2IsS0FBS2xHLE9BQUEsR0FBVUEsT0FBQTtJQUNmLEtBQUt0VSxPQUFBLEdBQVUsRUFBQztJQUVoQixLQUFLeWEsV0FBQSxHQUFjdGMsSUFBQSxDQUFLbUksSUFBQTtJQUN4QixLQUFLbUcsS0FBQSxHQUFRQSxLQUFBLEtBQVU2SCxPQUFBLEdBQVU4RixhQUFBLEdBQWdCLE9BQU9wWSxJQUFBLENBQUswSyxZQUFBO0VBQ2pFO0VBQ0E0QyxhQUFhMU4sSUFBQSxFQUFNO0lBQ2YsSUFBSSxDQUFDLEtBQUs2SyxLQUFBLEVBQU87TUFDYixJQUFJLENBQUMsS0FBS3pLLElBQUEsRUFDTixPQUFPLEVBQUM7TUFDWixJQUFJMFksSUFBQSxHQUFPLEtBQUsxWSxJQUFBLENBQUswSyxZQUFBLENBQWFtQyxVQUFBLENBQVczUSxRQUFBLENBQVM2QyxJQUFBLENBQUthLElBQUksQ0FBQztNQUNoRSxJQUFJOFksSUFBQSxFQUFNO1FBQ04sS0FBS2pPLEtBQUEsR0FBUSxLQUFLekssSUFBQSxDQUFLMEssWUFBQSxDQUFhQyxhQUFBLENBQWMrTixJQUFJO01BQzFELE9BQ0s7UUFDRCxJQUFJclosS0FBQSxHQUFRLEtBQUtXLElBQUEsQ0FBSzBLLFlBQUE7VUFBY2lPLElBQUE7UUFDcEMsSUFBSUEsSUFBQSxHQUFPdFosS0FBQSxDQUFNaU8sWUFBQSxDQUFhMU4sSUFBQSxDQUFLSSxJQUFJLEdBQUc7VUFDdEMsS0FBS3lLLEtBQUEsR0FBUXBMLEtBQUE7VUFDYixPQUFPc1osSUFBQTtRQUNYLE9BQ0s7VUFDRCxPQUFPO1FBQ1g7TUFDSjtJQUNKO0lBQ0EsT0FBTyxLQUFLbE8sS0FBQSxDQUFNNkMsWUFBQSxDQUFhMU4sSUFBQSxDQUFLSSxJQUFJO0VBQzVDO0VBQ0F5VSxPQUFPL1AsT0FBQSxFQUFTO0lBQ1osSUFBSSxFQUFFLEtBQUs0TixPQUFBLEdBQVU0RixlQUFBLEdBQWtCO01BQ25DLElBQUk1WCxJQUFBLEdBQU8sS0FBS3RDLE9BQUEsQ0FBUSxLQUFLQSxPQUFBLENBQVFZLE1BQUEsR0FBUztRQUFJeU0sQ0FBQTtNQUNsRCxJQUFJL0ssSUFBQSxJQUFRQSxJQUFBLENBQUt6QyxNQUFBLEtBQVd3TixDQUFBLEdBQUksb0JBQW9CNEksSUFBQSxDQUFLM1QsSUFBQSxDQUFLeEMsSUFBSSxJQUFJO1FBQ2xFLElBQUlBLElBQUEsR0FBT3dDLElBQUE7UUFDWCxJQUFJQSxJQUFBLENBQUt4QyxJQUFBLENBQUtjLE1BQUEsSUFBVXlNLENBQUEsQ0FBRSxHQUFHek0sTUFBQSxFQUN6QixLQUFLWixPQUFBLENBQVFxUSxHQUFBLENBQUksT0FFakIsS0FBS3JRLE9BQUEsQ0FBUSxLQUFLQSxPQUFBLENBQVFZLE1BQUEsR0FBUyxLQUFLZCxJQUFBLENBQUsyQyxRQUFBLENBQVMzQyxJQUFBLENBQUtBLElBQUEsQ0FBS2dDLEtBQUEsQ0FBTSxHQUFHaEMsSUFBQSxDQUFLQSxJQUFBLENBQUtjLE1BQUEsR0FBU3lNLENBQUEsQ0FBRSxHQUFHek0sTUFBTSxDQUFDO01BQ2hIO0lBQ0o7SUFDQSxJQUFJWixPQUFBLEdBQVU5QixRQUFBLENBQVM2QyxJQUFBLENBQUssS0FBS2YsT0FBTztJQUN4QyxJQUFJLENBQUMwRyxPQUFBLElBQVcsS0FBSytGLEtBQUEsRUFDakJ6TSxPQUFBLEdBQVVBLE9BQUEsQ0FBUW9DLE1BQUEsQ0FBTyxLQUFLcUssS0FBQSxDQUFNb0MsVUFBQSxDQUFXM1EsUUFBQSxDQUFTNEUsS0FBQSxFQUFPLElBQUksQ0FBQztJQUN4RSxPQUFPLEtBQUtkLElBQUEsR0FBTyxLQUFLQSxJQUFBLENBQUtrRSxNQUFBLENBQU8sS0FBS2pCLEtBQUEsRUFBT2pGLE9BQUEsRUFBUyxLQUFLZ0csS0FBSyxJQUFJaEcsT0FBQTtFQUMzRTtFQUNBNGEsY0FBY2haLElBQUEsRUFBTTtJQUNoQixJQUFJLEtBQUtJLElBQUEsRUFDTCxPQUFPLEtBQUtBLElBQUEsQ0FBSzBJLGFBQUE7SUFDckIsSUFBSSxLQUFLMUssT0FBQSxDQUFRWSxNQUFBLEVBQ2IsT0FBTyxLQUFLWixPQUFBLENBQVEsR0FBR29LLFFBQUE7SUFDM0IsT0FBT3hJLElBQUEsQ0FBS2laLFVBQUEsSUFBYyxDQUFDakQsU0FBQSxDQUFVckQsY0FBQSxDQUFlM1MsSUFBQSxDQUFLaVosVUFBQSxDQUFXQyxRQUFBLENBQVNDLFdBQUEsQ0FBWSxDQUFDO0VBQzlGO0FBQ0o7QUFDQSxJQUFNeEUsWUFBQSxHQUFOLE1BQW1CO0VBQ2YxVixZQUVBbWEsTUFBQSxFQUVBMUcsT0FBQSxFQUFTMkcsTUFBQSxFQUFRO0lBQ2IsS0FBS0QsTUFBQSxHQUFTQSxNQUFBO0lBQ2QsS0FBSzFHLE9BQUEsR0FBVUEsT0FBQTtJQUNmLEtBQUsyRyxNQUFBLEdBQVNBLE1BQUE7SUFDZCxLQUFLQyxJQUFBLEdBQU87SUFDWixLQUFLQyxlQUFBLEdBQWtCO0lBQ3ZCLElBQUkvRyxPQUFBLEdBQVVFLE9BQUEsQ0FBUUYsT0FBQTtNQUFTZ0gsVUFBQTtJQUMvQixJQUFJQyxVQUFBLEdBQWFoQixZQUFBLENBQWEsTUFBTS9GLE9BQUEsQ0FBUWdHLGtCQUFBLEVBQW9CLENBQUMsS0FBS1csTUFBQSxHQUFTYixhQUFBLEdBQWdCO0lBQy9GLElBQUloRyxPQUFBLEVBQ0FnSCxVQUFBLEdBQWEsSUFBSWIsV0FBQSxDQUFZbkcsT0FBQSxDQUFRcFMsSUFBQSxFQUFNb1MsT0FBQSxDQUFRblAsS0FBQSxFQUFPOUcsSUFBQSxDQUFLbUksSUFBQSxFQUFNLE1BQU1nTyxPQUFBLENBQVFnSCxRQUFBLElBQVlsSCxPQUFBLENBQVFwUyxJQUFBLENBQUswSyxZQUFBLEVBQWMyTyxVQUFVLFdBQy9ISixNQUFBLEVBQ0xHLFVBQUEsR0FBYSxJQUFJYixXQUFBLENBQVksTUFBTSxNQUFNcGMsSUFBQSxDQUFLbUksSUFBQSxFQUFNLE1BQU0sTUFBTStVLFVBQVUsT0FFMUVELFVBQUEsR0FBYSxJQUFJYixXQUFBLENBQVlTLE1BQUEsQ0FBT3hXLE1BQUEsQ0FBTzRRLFdBQUEsRUFBYSxNQUFNalgsSUFBQSxDQUFLbUksSUFBQSxFQUFNLE1BQU0sTUFBTStVLFVBQVU7SUFDbkcsS0FBS3JXLEtBQUEsR0FBUSxDQUFDb1csVUFBVTtJQUN4QixLQUFLRyxJQUFBLEdBQU9qSCxPQUFBLENBQVFrSCxhQUFBO0lBQ3BCLEtBQUtDLFVBQUEsR0FBYTtFQUN0QjtFQUNBLElBQUlDLElBQUEsRUFBTTtJQUNOLE9BQU8sS0FBSzFXLEtBQUEsQ0FBTSxLQUFLa1csSUFBQTtFQUMzQjtFQUlBUyxPQUFPdEYsR0FBQSxFQUFLclEsS0FBQSxFQUFPO0lBQ2YsSUFBSXFRLEdBQUEsQ0FBSTlJLFFBQUEsSUFBWSxHQUNoQixLQUFLcU8sV0FBQSxDQUFZdkYsR0FBQSxFQUFLclEsS0FBSyxXQUN0QnFRLEdBQUEsQ0FBSTlJLFFBQUEsSUFBWSxHQUNyQixLQUFLc08sVUFBQSxDQUFXeEYsR0FBQSxFQUFLclEsS0FBSztFQUNsQztFQUNBNFYsWUFBWXZGLEdBQUEsRUFBS3JRLEtBQUEsRUFBTztJQUNwQixJQUFJdkIsS0FBQSxHQUFRNFIsR0FBQSxDQUFJeUYsU0FBQTtJQUNoQixJQUFJSixHQUFBLEdBQU0sS0FBS0EsR0FBQTtNQUFLSyxVQUFBLEdBQWNMLEdBQUEsQ0FBSXBILE9BQUEsR0FBVTZGLG9CQUFBLEdBQXdCLFNBQ2xFLEtBQUtnQixlQUFBLEtBQW9CTyxHQUFBLENBQUlwSCxPQUFBLEdBQVU0RixlQUFBLElBQW1CO0lBQ2hFLElBQUk2QixVQUFBLEtBQWUsVUFDZkwsR0FBQSxDQUFJZCxhQUFBLENBQWN2RSxHQUFHLEtBQ3JCLG1CQUFtQnRGLElBQUEsQ0FBS3RNLEtBQUssR0FBRztNQUNoQyxJQUFJLENBQUNzWCxVQUFBLEVBQVk7UUFDYnRYLEtBQUEsR0FBUUEsS0FBQSxDQUFNZ0QsT0FBQSxDQUFRLHFCQUFxQixHQUFHO1FBSTlDLElBQUksbUJBQW1Cc0osSUFBQSxDQUFLdE0sS0FBSyxLQUFLLEtBQUt5VyxJQUFBLElBQVEsS0FBS2xXLEtBQUEsQ0FBTXBFLE1BQUEsR0FBUyxHQUFHO1VBQ3RFLElBQUl1SSxVQUFBLEdBQWF1UyxHQUFBLENBQUkxYixPQUFBLENBQVEwYixHQUFBLENBQUkxYixPQUFBLENBQVFZLE1BQUEsR0FBUztVQUNsRCxJQUFJb2IsYUFBQSxHQUFnQjNGLEdBQUEsQ0FBSTRGLGVBQUE7VUFDeEIsSUFBSSxDQUFDOVMsVUFBQSxJQUNBNlMsYUFBQSxJQUFpQkEsYUFBQSxDQUFjbEIsUUFBQSxJQUFZLFFBQzNDM1IsVUFBQSxDQUFXdEosTUFBQSxJQUFVLG1CQUFtQmtSLElBQUEsQ0FBSzVILFVBQUEsQ0FBV3JKLElBQUksR0FDN0QyRSxLQUFBLEdBQVFBLEtBQUEsQ0FBTTNDLEtBQUEsQ0FBTSxDQUFDO1FBQzdCO01BQ0osV0FDU2lhLFVBQUEsS0FBZSxRQUFRO1FBQzVCdFgsS0FBQSxHQUFRQSxLQUFBLENBQU1nRCxPQUFBLENBQVEsYUFBYSxHQUFHO01BQzFDLE9BQ0s7UUFDRGhELEtBQUEsR0FBUUEsS0FBQSxDQUFNZ0QsT0FBQSxDQUFRLFVBQVUsSUFBSTtNQUN4QztNQUNBLElBQUloRCxLQUFBLEVBQ0EsS0FBS3lYLFVBQUEsQ0FBVyxLQUFLbEIsTUFBQSxDQUFPeFcsTUFBQSxDQUFPMUUsSUFBQSxDQUFLMkUsS0FBSyxHQUFHdUIsS0FBQSxFQUFPLENBQUMsS0FBSytLLElBQUEsQ0FBS3RNLEtBQUssQ0FBQztNQUM1RSxLQUFLMFgsVUFBQSxDQUFXOUYsR0FBRztJQUN2QixPQUNLO01BQ0QsS0FBSytGLFVBQUEsQ0FBVy9GLEdBQUc7SUFDdkI7RUFDSjtFQUdBd0YsV0FBV3hGLEdBQUEsRUFBS3JRLEtBQUEsRUFBT3FXLFVBQUEsRUFBWTtJQUMvQixJQUFJQyxPQUFBLEdBQVUsS0FBS25CLGVBQUE7TUFBaUJPLEdBQUEsR0FBTSxLQUFLQSxHQUFBO0lBQy9DLElBQUlyRixHQUFBLENBQUlrRyxPQUFBLElBQVcsU0FBUyxNQUFNeEwsSUFBQSxDQUFLc0YsR0FBQSxDQUFJVCxLQUFBLElBQVNTLEdBQUEsQ0FBSVQsS0FBQSxDQUFNNEcsVUFBVSxHQUNwRSxLQUFLckIsZUFBQSxHQUFrQjtJQUMzQixJQUFJdFYsSUFBQSxHQUFPd1EsR0FBQSxDQUFJeUUsUUFBQSxDQUFTQyxXQUFBLENBQVk7TUFBRzBCLE1BQUE7SUFDdkMsSUFBSXhDLFFBQUEsQ0FBUzFGLGNBQUEsQ0FBZTFPLElBQUksS0FBSyxLQUFLbVYsTUFBQSxDQUFPOUUsY0FBQSxFQUM3Q3dHLGFBQUEsQ0FBY3JHLEdBQUc7SUFDckIsSUFBSVosSUFBQSxHQUFRLEtBQUtuQixPQUFBLENBQVFxSSxZQUFBLElBQWdCLEtBQUtySSxPQUFBLENBQVFxSSxZQUFBLENBQWF0RyxHQUFHLE1BQ2pFb0csTUFBQSxHQUFTLEtBQUt6QixNQUFBLENBQU9yRSxRQUFBLENBQVNOLEdBQUEsRUFBSyxNQUFNZ0csVUFBVTtJQUN4RHJNLEdBQUEsRUFBSyxJQUFJeUYsSUFBQSxHQUFPQSxJQUFBLENBQUsrQixNQUFBLEdBQVNvQyxVQUFBLENBQVdyRixjQUFBLENBQWUxTyxJQUFJLEdBQUc7TUFDM0QsS0FBS3VXLFVBQUEsQ0FBVy9GLEdBQUc7TUFDbkIsS0FBS3VHLGNBQUEsQ0FBZXZHLEdBQUEsRUFBS3JRLEtBQUs7SUFDbEMsV0FDUyxDQUFDeVAsSUFBQSxJQUFRQSxJQUFBLENBQUtvSCxJQUFBLElBQVFwSCxJQUFBLENBQUtxSCxXQUFBLEVBQWE7TUFDN0MsSUFBSXJILElBQUEsSUFBUUEsSUFBQSxDQUFLcUgsV0FBQSxFQUNiLEtBQUs1QixJQUFBLEdBQU94YSxJQUFBLENBQUtZLEdBQUEsQ0FBSSxHQUFHLEtBQUs0WixJQUFBLEdBQU8sQ0FBQyxXQUNoQ3pGLElBQUEsSUFBUUEsSUFBQSxDQUFLb0gsSUFBQSxDQUFLdFAsUUFBQSxFQUN2QjhJLEdBQUEsR0FBTVosSUFBQSxDQUFLb0gsSUFBQTtNQUNmLElBQUlFLElBQUE7UUFBTUMsYUFBQSxHQUFnQixLQUFLdkIsVUFBQTtNQUMvQixJQUFJN0QsU0FBQSxDQUFVckQsY0FBQSxDQUFlMU8sSUFBSSxHQUFHO1FBQ2hDLElBQUk2VixHQUFBLENBQUkxYixPQUFBLENBQVFZLE1BQUEsSUFBVThhLEdBQUEsQ0FBSTFiLE9BQUEsQ0FBUSxHQUFHb0ssUUFBQSxJQUFZLEtBQUs4USxJQUFBLEVBQU07VUFDNUQsS0FBS0EsSUFBQTtVQUNMUSxHQUFBLEdBQU0sS0FBS0EsR0FBQTtRQUNmO1FBQ0FxQixJQUFBLEdBQU87UUFDUCxJQUFJLENBQUNyQixHQUFBLENBQUkxWixJQUFBLEVBQ0wsS0FBS3laLFVBQUEsR0FBYTtNQUMxQixXQUNTLENBQUNwRixHQUFBLENBQUk3VCxVQUFBLEVBQVk7UUFDdEIsS0FBS3lhLFlBQUEsQ0FBYTVHLEdBQUEsRUFBS3JRLEtBQUs7UUFDNUIsTUFBTWdLLEdBQUE7TUFDVjtNQUNBLElBQUlrTixVQUFBLEdBQWF6SCxJQUFBLElBQVFBLElBQUEsQ0FBS29ILElBQUEsR0FBTzdXLEtBQUEsR0FBUSxLQUFLbVgsVUFBQSxDQUFXOUcsR0FBQSxFQUFLclEsS0FBSztNQUN2RSxJQUFJa1gsVUFBQSxFQUNBLEtBQUsxRyxNQUFBLENBQU9ILEdBQUEsRUFBSzZHLFVBQVU7TUFDL0IsSUFBSUgsSUFBQSxFQUNBLEtBQUtBLElBQUEsQ0FBS3JCLEdBQUc7TUFDakIsS0FBS0QsVUFBQSxHQUFhdUIsYUFBQTtJQUN0QixPQUNLO01BQ0QsSUFBSUUsVUFBQSxHQUFhLEtBQUtDLFVBQUEsQ0FBVzlHLEdBQUEsRUFBS3JRLEtBQUs7TUFDM0MsSUFBSWtYLFVBQUEsRUFDQSxLQUFLRSxnQkFBQSxDQUFpQi9HLEdBQUEsRUFBS1osSUFBQSxFQUFNeUgsVUFBQSxFQUFZekgsSUFBQSxDQUFLNEgsU0FBQSxLQUFjLFFBQVFaLE1BQUEsR0FBUyxNQUFTO0lBQ2xHO0lBQ0EsS0FBS3RCLGVBQUEsR0FBa0JtQixPQUFBO0VBQzNCO0VBRUFXLGFBQWE1RyxHQUFBLEVBQUtyUSxLQUFBLEVBQU87SUFDckIsSUFBSXFRLEdBQUEsQ0FBSXlFLFFBQUEsSUFBWSxRQUFRLEtBQUtZLEdBQUEsQ0FBSTFaLElBQUEsSUFBUSxLQUFLMFosR0FBQSxDQUFJMVosSUFBQSxDQUFLMEksYUFBQSxFQUN2RCxLQUFLa1IsV0FBQSxDQUFZdkYsR0FBQSxDQUFJaUgsYUFBQSxDQUFjQyxjQUFBLENBQWUsSUFBSSxHQUFHdlgsS0FBSztFQUN0RTtFQUVBNFcsZUFBZXZHLEdBQUEsRUFBS3JRLEtBQUEsRUFBTztJQUV2QixJQUFJcVEsR0FBQSxDQUFJeUUsUUFBQSxJQUFZLFNBQVMsQ0FBQyxLQUFLWSxHQUFBLENBQUkxWixJQUFBLElBQVEsQ0FBQyxLQUFLMFosR0FBQSxDQUFJMVosSUFBQSxDQUFLMEksYUFBQSxHQUMxRCxLQUFLOFMsU0FBQSxDQUFVLEtBQUt4QyxNQUFBLENBQU94VyxNQUFBLENBQU8xRSxJQUFBLENBQUssR0FBRyxHQUFHa0csS0FBQSxFQUFPLElBQUk7RUFDaEU7RUFJQW1YLFdBQVc5RyxHQUFBLEVBQUtyUSxLQUFBLEVBQU87SUFDbkIsSUFBSStQLE1BQUEsR0FBU00sR0FBQSxDQUFJVCxLQUFBO0lBTWpCLElBQUlHLE1BQUEsSUFBVUEsTUFBQSxDQUFPblYsTUFBQSxFQUNqQixTQUFTdEIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLMGIsTUFBQSxDQUFPaEYsYUFBQSxDQUFjcFYsTUFBQSxFQUFRdEIsQ0FBQSxJQUFLO01BQ3ZELElBQUl1RyxJQUFBLEdBQU8sS0FBS21WLE1BQUEsQ0FBT2hGLGFBQUEsQ0FBYzFXLENBQUE7UUFBSW1GLEtBQUEsR0FBUXNSLE1BQUEsQ0FBTzBILGdCQUFBLENBQWlCNVgsSUFBSTtNQUM3RSxJQUFJcEIsS0FBQSxFQUNBLFNBQVNxRixLQUFBLEdBQVEsVUFBYTtRQUMxQixJQUFJMkwsSUFBQSxHQUFPLEtBQUt1RixNQUFBLENBQU8vRCxVQUFBLENBQVdwUixJQUFBLEVBQU1wQixLQUFBLEVBQU8sTUFBTXFGLEtBQUs7UUFDMUQsSUFBSSxDQUFDMkwsSUFBQSxFQUNEO1FBQ0osSUFBSUEsSUFBQSxDQUFLK0IsTUFBQSxFQUNMLE9BQU87UUFDWCxJQUFJL0IsSUFBQSxDQUFLZ0MsU0FBQSxFQUNMelIsS0FBQSxHQUFRQSxLQUFBLENBQU0wWCxNQUFBLENBQU9yUSxDQUFBLElBQUssQ0FBQ29JLElBQUEsQ0FBS2dDLFNBQUEsQ0FBVXBLLENBQUMsQ0FBQyxPQUU1Q3JILEtBQUEsR0FBUUEsS0FBQSxDQUFNNUMsTUFBQSxDQUFPLEtBQUs0WCxNQUFBLENBQU94VyxNQUFBLENBQU93QixLQUFBLENBQU15UCxJQUFBLENBQUt4UCxJQUFBLEVBQU1DLE1BQUEsQ0FBT3VQLElBQUEsQ0FBS3hRLEtBQUssQ0FBQztRQUMvRSxJQUFJd1EsSUFBQSxDQUFLNEgsU0FBQSxLQUFjLE9BQ25CdlQsS0FBQSxHQUFRMkwsSUFBQSxNQUVSO01BQ1I7SUFDUjtJQUNKLE9BQU96UCxLQUFBO0VBQ1g7RUFJQW9YLGlCQUFpQi9HLEdBQUEsRUFBS1osSUFBQSxFQUFNelAsS0FBQSxFQUFPMlgsYUFBQSxFQUFlO0lBQzlDLElBQUlaLElBQUEsRUFBTXhQLFFBQUE7SUFDVixJQUFJa0ksSUFBQSxDQUFLN1QsSUFBQSxFQUFNO01BQ1gyTCxRQUFBLEdBQVcsS0FBS3lOLE1BQUEsQ0FBT3hXLE1BQUEsQ0FBT1EsS0FBQSxDQUFNeVEsSUFBQSxDQUFLN1QsSUFBQTtNQUN6QyxJQUFJLENBQUMyTCxRQUFBLENBQVN4TCxNQUFBLEVBQVE7UUFDbEIsSUFBSTdCLEtBQUEsR0FBUSxLQUFLMGQsS0FBQSxDQUFNclEsUUFBQSxFQUFVa0ksSUFBQSxDQUFLeFEsS0FBQSxJQUFTLE1BQU1lLEtBQUEsRUFBT3lQLElBQUEsQ0FBSzZFLGtCQUFrQjtRQUNuRixJQUFJcGEsS0FBQSxFQUFPO1VBQ1A2YyxJQUFBLEdBQU87VUFDUC9XLEtBQUEsR0FBUTlGLEtBQUE7UUFDWjtNQUNKLFdBQ1MsQ0FBQyxLQUFLZ2MsVUFBQSxDQUFXM08sUUFBQSxDQUFTckgsTUFBQSxDQUFPdVAsSUFBQSxDQUFLeFEsS0FBSyxHQUFHZSxLQUFBLEVBQU9xUSxHQUFBLENBQUl5RSxRQUFBLElBQVksSUFBSSxHQUFHO1FBQ2pGLEtBQUttQyxZQUFBLENBQWE1RyxHQUFBLEVBQUtyUSxLQUFLO01BQ2hDO0lBQ0osT0FDSztNQUNELElBQUlpTyxRQUFBLEdBQVcsS0FBSytHLE1BQUEsQ0FBT3hXLE1BQUEsQ0FBT3dCLEtBQUEsQ0FBTXlQLElBQUEsQ0FBS3hQLElBQUE7TUFDN0NELEtBQUEsR0FBUUEsS0FBQSxDQUFNNUMsTUFBQSxDQUFPNlEsUUFBQSxDQUFTL04sTUFBQSxDQUFPdVAsSUFBQSxDQUFLeFEsS0FBSyxDQUFDO0lBQ3BEO0lBQ0EsSUFBSTRZLE9BQUEsR0FBVSxLQUFLbkMsR0FBQTtJQUNuQixJQUFJbk8sUUFBQSxJQUFZQSxRQUFBLENBQVN4TCxNQUFBLEVBQVE7TUFDN0IsS0FBS3FhLFVBQUEsQ0FBVy9GLEdBQUc7SUFDdkIsV0FDU3NILGFBQUEsRUFBZTtNQUNwQixLQUFLOUIsVUFBQSxDQUFXeEYsR0FBQSxFQUFLclEsS0FBQSxFQUFPMlgsYUFBYTtJQUM3QyxXQUNTbEksSUFBQSxDQUFLcUksVUFBQSxFQUFZO01BQ3RCLEtBQUsxQixVQUFBLENBQVcvRixHQUFHO01BQ25CWixJQUFBLENBQUtxSSxVQUFBLENBQVd6SCxHQUFBLEVBQUssS0FBSzJFLE1BQUEsQ0FBT3hXLE1BQU0sRUFBRWQsT0FBQSxDQUFROUIsSUFBQSxJQUFRLEtBQUtzYSxVQUFBLENBQVd0YSxJQUFBLEVBQU1vRSxLQUFBLEVBQU8sS0FBSyxDQUFDO0lBQ2hHLE9BQ0s7TUFDRCxJQUFJK1gsVUFBQSxHQUFhMUgsR0FBQTtNQUNqQixJQUFJLE9BQU9aLElBQUEsQ0FBS3VJLGNBQUEsSUFBa0IsVUFDOUJELFVBQUEsR0FBYTFILEdBQUEsQ0FBSTRILGFBQUEsQ0FBY3hJLElBQUEsQ0FBS3VJLGNBQWMsV0FDN0MsT0FBT3ZJLElBQUEsQ0FBS3VJLGNBQUEsSUFBa0IsWUFDbkNELFVBQUEsR0FBYXRJLElBQUEsQ0FBS3VJLGNBQUEsQ0FBZTNILEdBQUcsV0FDL0JaLElBQUEsQ0FBS3VJLGNBQUEsRUFDVkQsVUFBQSxHQUFhdEksSUFBQSxDQUFLdUksY0FBQTtNQUN0QixLQUFLRSxVQUFBLENBQVc3SCxHQUFBLEVBQUswSCxVQUFBLEVBQVksSUFBSTtNQUNyQyxLQUFLdkgsTUFBQSxDQUFPdUgsVUFBQSxFQUFZL1gsS0FBSztNQUM3QixLQUFLa1ksVUFBQSxDQUFXN0gsR0FBQSxFQUFLMEgsVUFBQSxFQUFZLEtBQUs7SUFDMUM7SUFDQSxJQUFJaEIsSUFBQSxJQUFRLEtBQUtBLElBQUEsQ0FBS2MsT0FBTyxHQUN6QixLQUFLM0MsSUFBQTtFQUNiO0VBSUExRSxPQUFPclYsTUFBQSxFQUFRNkUsS0FBQSxFQUFPK0MsVUFBQSxFQUFZQyxRQUFBLEVBQVU7SUFDeEMsSUFBSWhHLEtBQUEsR0FBUStGLFVBQUEsSUFBYztJQUMxQixTQUFTc04sR0FBQSxHQUFNdE4sVUFBQSxHQUFhNUgsTUFBQSxDQUFPZ2QsVUFBQSxDQUFXcFYsVUFBQSxJQUFjNUgsTUFBQSxDQUFPcUIsVUFBQSxFQUFZcEIsR0FBQSxHQUFNNEgsUUFBQSxJQUFZLE9BQU8sT0FBTzdILE1BQUEsQ0FBT2dkLFVBQUEsQ0FBV25WLFFBQUEsR0FBV3FOLEdBQUEsSUFBT2pWLEdBQUEsRUFBS2lWLEdBQUEsR0FBTUEsR0FBQSxDQUFJK0gsV0FBQSxFQUFhLEVBQUVwYixLQUFBLEVBQU87TUFDcEwsS0FBS3FiLFdBQUEsQ0FBWWxkLE1BQUEsRUFBUTZCLEtBQUs7TUFDOUIsS0FBSzJZLE1BQUEsQ0FBT3RGLEdBQUEsRUFBS3JRLEtBQUs7SUFDMUI7SUFDQSxLQUFLcVksV0FBQSxDQUFZbGQsTUFBQSxFQUFRNkIsS0FBSztFQUNsQztFQUlBd2EsVUFBVTViLElBQUEsRUFBTW9FLEtBQUEsRUFBT3NZLFFBQUEsRUFBVTtJQUM3QixJQUFJQyxLQUFBLEVBQU94QixJQUFBO0lBQ1gsU0FBU25WLEtBQUEsR0FBUSxLQUFLc1QsSUFBQSxFQUFNc0QsT0FBQSxHQUFVLEdBQUc1VyxLQUFBLElBQVMsR0FBR0EsS0FBQSxJQUFTO01BQzFELElBQUk2VyxFQUFBLEdBQUssS0FBS3paLEtBQUEsQ0FBTTRDLEtBQUE7TUFDcEIsSUFBSXJFLE1BQUEsR0FBUWtiLEVBQUEsQ0FBR25QLFlBQUEsQ0FBYTFOLElBQUk7TUFDaEMsSUFBSTJCLE1BQUEsS0FBVSxDQUFDZ2IsS0FBQSxJQUFTQSxLQUFBLENBQU0zZCxNQUFBLEdBQVMyQyxNQUFBLENBQU0zQyxNQUFBLEdBQVM0ZCxPQUFBLEdBQVU7UUFDNURELEtBQUEsR0FBUWhiLE1BQUE7UUFDUndaLElBQUEsR0FBTzBCLEVBQUE7UUFDUCxJQUFJLENBQUNsYixNQUFBLENBQU0zQyxNQUFBLEVBQ1A7TUFDUjtNQUNBLElBQUk2ZCxFQUFBLENBQUdqRSxLQUFBLEVBQU87UUFDVixJQUFJOEQsUUFBQSxFQUNBO1FBQ0pFLE9BQUEsSUFBVztNQUNmO0lBQ0o7SUFDQSxJQUFJLENBQUNELEtBQUEsRUFDRCxPQUFPO0lBQ1gsS0FBS3hCLElBQUEsQ0FBS0EsSUFBSTtJQUNkLFNBQVN6ZCxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJaWYsS0FBQSxDQUFNM2QsTUFBQSxFQUFRdEIsQ0FBQSxJQUM5QjBHLEtBQUEsR0FBUSxLQUFLMFksVUFBQSxDQUFXSCxLQUFBLENBQU1qZixDQUFBLEdBQUksTUFBTTBHLEtBQUEsRUFBTyxLQUFLO0lBQ3hELE9BQU9BLEtBQUE7RUFDWDtFQUVBa1csV0FBV3RhLElBQUEsRUFBTW9FLEtBQUEsRUFBT3NZLFFBQUEsRUFBVTtJQUM5QixJQUFJMWMsSUFBQSxDQUFLd0ksUUFBQSxJQUFZLEtBQUtxUixVQUFBLElBQWMsQ0FBQyxLQUFLQyxHQUFBLENBQUkxWixJQUFBLEVBQU07TUFDcEQsSUFBSTJjLEtBQUEsR0FBUSxLQUFLQyxvQkFBQSxDQUFxQjtNQUN0QyxJQUFJRCxLQUFBLEVBQ0EzWSxLQUFBLEdBQVEsS0FBSzBZLFVBQUEsQ0FBV0MsS0FBQSxFQUFPLE1BQU0zWSxLQUFLO0lBQ2xEO0lBQ0EsSUFBSWtYLFVBQUEsR0FBYSxLQUFLTSxTQUFBLENBQVU1YixJQUFBLEVBQU1vRSxLQUFBLEVBQU9zWSxRQUFRO0lBQ3JELElBQUlwQixVQUFBLEVBQVk7TUFDWixLQUFLMkIsVUFBQSxDQUFXO01BQ2hCLElBQUluRCxHQUFBLEdBQU0sS0FBS0EsR0FBQTtNQUNmLElBQUlBLEdBQUEsQ0FBSWpQLEtBQUEsRUFDSmlQLEdBQUEsQ0FBSWpQLEtBQUEsR0FBUWlQLEdBQUEsQ0FBSWpQLEtBQUEsQ0FBTVMsU0FBQSxDQUFVdEwsSUFBQSxDQUFLSSxJQUFJO01BQzdDLElBQUk4YyxTQUFBLEdBQVkzZ0IsSUFBQSxDQUFLbUksSUFBQTtNQUNyQixTQUFTK0csQ0FBQSxJQUFLNlAsVUFBQSxDQUFXOVosTUFBQSxDQUFPeEIsSUFBQSxDQUFLb0UsS0FBSyxHQUN0QyxJQUFJMFYsR0FBQSxDQUFJMVosSUFBQSxHQUFPMFosR0FBQSxDQUFJMVosSUFBQSxDQUFLZ1MsY0FBQSxDQUFlM0csQ0FBQSxDQUFFckwsSUFBSSxJQUFJK2MsWUFBQSxDQUFhMVIsQ0FBQSxDQUFFckwsSUFBQSxFQUFNSixJQUFBLENBQUtJLElBQUksR0FDM0U4YyxTQUFBLEdBQVl6UixDQUFBLENBQUVoSSxRQUFBLENBQVN5WixTQUFTO01BQ3hDcEQsR0FBQSxDQUFJMWIsT0FBQSxDQUFRMEMsSUFBQSxDQUFLZCxJQUFBLENBQUtxRSxJQUFBLENBQUs2WSxTQUFTLENBQUM7TUFDckMsT0FBTztJQUNYO0lBQ0EsT0FBTztFQUNYO0VBR0FsQixNQUFNNWIsSUFBQSxFQUFNaUQsS0FBQSxFQUFPZSxLQUFBLEVBQU8rVixVQUFBLEVBQVk7SUFDbEMsSUFBSW1CLFVBQUEsR0FBYSxLQUFLTSxTQUFBLENBQVV4YixJQUFBLENBQUtrRSxNQUFBLENBQU9qQixLQUFLLEdBQUdlLEtBQUEsRUFBTyxLQUFLO0lBQ2hFLElBQUlrWCxVQUFBLEVBQ0FBLFVBQUEsR0FBYSxLQUFLd0IsVUFBQSxDQUFXMWMsSUFBQSxFQUFNaUQsS0FBQSxFQUFPZSxLQUFBLEVBQU8sTUFBTStWLFVBQVU7SUFDckUsT0FBT21CLFVBQUE7RUFDWDtFQUVBd0IsV0FBVzFjLElBQUEsRUFBTWlELEtBQUEsRUFBT2UsS0FBQSxFQUFPd1UsS0FBQSxHQUFRLE9BQU91QixVQUFBLEVBQVk7SUFDdEQsS0FBSzhDLFVBQUEsQ0FBVztJQUNoQixJQUFJbkQsR0FBQSxHQUFNLEtBQUtBLEdBQUE7SUFDZkEsR0FBQSxDQUFJalAsS0FBQSxHQUFRaVAsR0FBQSxDQUFJalAsS0FBQSxJQUFTaVAsR0FBQSxDQUFJalAsS0FBQSxDQUFNUyxTQUFBLENBQVVsTCxJQUFJO0lBQ2pELElBQUlzUyxPQUFBLEdBQVUrRixZQUFBLENBQWFyWSxJQUFBLEVBQU0rWixVQUFBLEVBQVlMLEdBQUEsQ0FBSXBILE9BQU87SUFDeEQsSUFBS29ILEdBQUEsQ0FBSXBILE9BQUEsR0FBVThGLGFBQUEsSUFBa0JzQixHQUFBLENBQUkxYixPQUFBLENBQVFZLE1BQUEsSUFBVSxHQUN2RDBULE9BQUEsSUFBVzhGLGFBQUE7SUFDZixJQUFJNEUsVUFBQSxHQUFhN2dCLElBQUEsQ0FBS21JLElBQUE7SUFDdEJOLEtBQUEsR0FBUUEsS0FBQSxDQUFNMFgsTUFBQSxDQUFPclEsQ0FBQSxJQUFLO01BQ3RCLElBQUlxTyxHQUFBLENBQUkxWixJQUFBLEdBQU8wWixHQUFBLENBQUkxWixJQUFBLENBQUtnUyxjQUFBLENBQWUzRyxDQUFBLENBQUVyTCxJQUFJLElBQUkrYyxZQUFBLENBQWExUixDQUFBLENBQUVyTCxJQUFBLEVBQU1BLElBQUksR0FBRztRQUN6RWdkLFVBQUEsR0FBYTNSLENBQUEsQ0FBRWhJLFFBQUEsQ0FBUzJaLFVBQVU7UUFDbEMsT0FBTztNQUNYO01BQ0EsT0FBTztJQUNYLENBQUM7SUFDRCxLQUFLaGEsS0FBQSxDQUFNdEMsSUFBQSxDQUFLLElBQUk2WCxXQUFBLENBQVl2WSxJQUFBLEVBQU1pRCxLQUFBLEVBQU8rWixVQUFBLEVBQVl4RSxLQUFBLEVBQU8sTUFBTWxHLE9BQU8sQ0FBQztJQUM5RSxLQUFLNEcsSUFBQTtJQUNMLE9BQU9sVixLQUFBO0VBQ1g7RUFHQTZZLFdBQVduWSxPQUFBLEdBQVUsT0FBTztJQUN4QixJQUFJcEgsQ0FBQSxHQUFJLEtBQUswRixLQUFBLENBQU1wRSxNQUFBLEdBQVM7SUFDNUIsSUFBSXRCLENBQUEsR0FBSSxLQUFLNGIsSUFBQSxFQUFNO01BQ2YsT0FBTzViLENBQUEsR0FBSSxLQUFLNGIsSUFBQSxFQUFNNWIsQ0FBQSxJQUNsQixLQUFLMEYsS0FBQSxDQUFNMUYsQ0FBQSxHQUFJLEdBQUdVLE9BQUEsQ0FBUTBDLElBQUEsQ0FBSyxLQUFLc0MsS0FBQSxDQUFNMUYsQ0FBQSxFQUFHbVgsTUFBQSxDQUFPL1AsT0FBTyxDQUFDO01BQ2hFLEtBQUsxQixLQUFBLENBQU1wRSxNQUFBLEdBQVMsS0FBS3NhLElBQUEsR0FBTztJQUNwQztFQUNKO0VBQ0F6RSxPQUFBLEVBQVM7SUFDTCxLQUFLeUUsSUFBQSxHQUFPO0lBQ1osS0FBSzJELFVBQUEsQ0FBVyxLQUFLNUQsTUFBTTtJQUMzQixPQUFPLEtBQUtqVyxLQUFBLENBQU0sR0FBR3lSLE1BQUEsQ0FBTyxDQUFDLEVBQUUsS0FBS3dFLE1BQUEsSUFBVSxLQUFLM0csT0FBQSxDQUFRMkssT0FBQSxDQUFRO0VBQ3ZFO0VBQ0FsQyxLQUFLL2IsRUFBQSxFQUFJO0lBQ0wsU0FBUzFCLENBQUEsR0FBSSxLQUFLNGIsSUFBQSxFQUFNNWIsQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFBSztNQUNqQyxJQUFJLEtBQUswRixLQUFBLENBQU0xRixDQUFBLEtBQU0wQixFQUFBLEVBQUk7UUFDckIsS0FBS2thLElBQUEsR0FBTzViLENBQUE7UUFDWixPQUFPO01BQ1gsV0FDUyxLQUFLNmIsZUFBQSxFQUFpQjtRQUMzQixLQUFLblcsS0FBQSxDQUFNMUYsQ0FBQSxFQUFHZ1YsT0FBQSxJQUFXNEYsZUFBQTtNQUM3QjtJQUNKO0lBQ0EsT0FBTztFQUNYO0VBQ0EsSUFBSWdGLFdBQUEsRUFBYTtJQUNiLEtBQUtMLFVBQUEsQ0FBVztJQUNoQixJQUFJeGYsR0FBQSxHQUFNO0lBQ1YsU0FBU0MsQ0FBQSxHQUFJLEtBQUs0YixJQUFBLEVBQU01YixDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUFLO01BQ2pDLElBQUlVLE9BQUEsR0FBVSxLQUFLZ0YsS0FBQSxDQUFNMUYsQ0FBQSxFQUFHVSxPQUFBO01BQzVCLFNBQVNELENBQUEsR0FBSUMsT0FBQSxDQUFRWSxNQUFBLEdBQVMsR0FBR2IsQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFDckNWLEdBQUEsSUFBT1csT0FBQSxDQUFRRCxDQUFBLEVBQUdKLFFBQUE7TUFDdEIsSUFBSUwsQ0FBQSxFQUNBRCxHQUFBO0lBQ1I7SUFDQSxPQUFPQSxHQUFBO0VBQ1g7RUFDQWdmLFlBQVlsZCxNQUFBLEVBQVFnRSxNQUFBLEVBQVE7SUFDeEIsSUFBSSxLQUFLb1csSUFBQSxFQUNMLFNBQVNqYyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUtpYyxJQUFBLENBQUszYSxNQUFBLEVBQVF0QixDQUFBLElBQUs7TUFDdkMsSUFBSSxLQUFLaWMsSUFBQSxDQUFLamMsQ0FBQSxFQUFHc0MsSUFBQSxJQUFRVCxNQUFBLElBQVUsS0FBS29hLElBQUEsQ0FBS2pjLENBQUEsRUFBRzZGLE1BQUEsSUFBVUEsTUFBQSxFQUN0RCxLQUFLb1csSUFBQSxDQUFLamMsQ0FBQSxFQUFHRCxHQUFBLEdBQU0sS0FBSzZmLFVBQUE7SUFDaEM7RUFDUjtFQUNBOUMsV0FBV2piLE1BQUEsRUFBUTtJQUNmLElBQUksS0FBS29hLElBQUEsRUFDTCxTQUFTamMsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLaWMsSUFBQSxDQUFLM2EsTUFBQSxFQUFRdEIsQ0FBQSxJQUFLO01BQ3ZDLElBQUksS0FBS2ljLElBQUEsQ0FBS2pjLENBQUEsRUFBR0QsR0FBQSxJQUFPLFFBQVE4QixNQUFBLENBQU9vTSxRQUFBLElBQVksS0FBS3BNLE1BQUEsQ0FBT2dlLFFBQUEsQ0FBUyxLQUFLNUQsSUFBQSxDQUFLamMsQ0FBQSxFQUFHc0MsSUFBSSxHQUNyRixLQUFLMlosSUFBQSxDQUFLamMsQ0FBQSxFQUFHRCxHQUFBLEdBQU0sS0FBSzZmLFVBQUE7SUFDaEM7RUFDUjtFQUNBaEIsV0FBVy9jLE1BQUEsRUFBUW5CLE9BQUEsRUFBUzZKLE1BQUEsRUFBUTtJQUNoQyxJQUFJMUksTUFBQSxJQUFVbkIsT0FBQSxJQUFXLEtBQUt1YixJQUFBLEVBQzFCLFNBQVNqYyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUtpYyxJQUFBLENBQUszYSxNQUFBLEVBQVF0QixDQUFBLElBQUs7TUFDdkMsSUFBSSxLQUFLaWMsSUFBQSxDQUFLamMsQ0FBQSxFQUFHRCxHQUFBLElBQU8sUUFBUThCLE1BQUEsQ0FBT29NLFFBQUEsSUFBWSxLQUFLcE0sTUFBQSxDQUFPZ2UsUUFBQSxDQUFTLEtBQUs1RCxJQUFBLENBQUtqYyxDQUFBLEVBQUdzQyxJQUFJLEdBQUc7UUFDeEYsSUFBSXZDLEdBQUEsR0FBTVcsT0FBQSxDQUFRb2YsdUJBQUEsQ0FBd0IsS0FBSzdELElBQUEsQ0FBS2pjLENBQUEsRUFBR3NDLElBQUk7UUFDM0QsSUFBSXZDLEdBQUEsSUFBT3dLLE1BQUEsR0FBUyxJQUFJLElBQ3BCLEtBQUswUixJQUFBLENBQUtqYyxDQUFBLEVBQUdELEdBQUEsR0FBTSxLQUFLNmYsVUFBQTtNQUNoQztJQUNKO0VBQ1I7RUFDQS9DLFdBQVdrRCxRQUFBLEVBQVU7SUFDakIsSUFBSSxLQUFLOUQsSUFBQSxFQUNMLFNBQVNqYyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUtpYyxJQUFBLENBQUszYSxNQUFBLEVBQVF0QixDQUFBLElBQUs7TUFDdkMsSUFBSSxLQUFLaWMsSUFBQSxDQUFLamMsQ0FBQSxFQUFHc0MsSUFBQSxJQUFReWQsUUFBQSxFQUNyQixLQUFLOUQsSUFBQSxDQUFLamMsQ0FBQSxFQUFHRCxHQUFBLEdBQU0sS0FBSzZmLFVBQUEsSUFBY0csUUFBQSxDQUFTdkQsU0FBQSxDQUFVbGIsTUFBQSxHQUFTLEtBQUsyYSxJQUFBLENBQUtqYyxDQUFBLEVBQUc2RixNQUFBO0lBQ3ZGO0VBQ1I7RUFFQTRSLGVBQWVULE9BQUEsRUFBUztJQUNwQixJQUFJQSxPQUFBLENBQVFqSCxPQUFBLENBQVEsR0FBRyxJQUFJLElBQ3ZCLE9BQU9pSCxPQUFBLENBQVFsRyxLQUFBLENBQU0sVUFBVSxFQUFFK0YsSUFBQSxDQUFLLEtBQUtZLGNBQUEsRUFBZ0IsSUFBSTtJQUNuRSxJQUFJdUksS0FBQSxHQUFRaEosT0FBQSxDQUFRbEcsS0FBQSxDQUFNLEdBQUc7SUFDN0IsSUFBSW1QLE1BQUEsR0FBUyxLQUFLakwsT0FBQSxDQUFRZ0MsT0FBQTtJQUMxQixJQUFJa0osT0FBQSxHQUFVLENBQUMsS0FBS3ZFLE1BQUEsS0FBVyxDQUFDc0UsTUFBQSxJQUFVQSxNQUFBLENBQU9wZSxNQUFBLENBQU9hLElBQUEsSUFBUSxLQUFLZ0QsS0FBQSxDQUFNLEdBQUdoRCxJQUFBO0lBQzlFLElBQUl5ZCxRQUFBLEdBQVcsRUFBRUYsTUFBQSxHQUFTQSxNQUFBLENBQU8zWCxLQUFBLEdBQVEsSUFBSSxNQUFNNFgsT0FBQSxHQUFVLElBQUk7SUFDakUsSUFBSS9TLEtBQUEsR0FBUUEsQ0FBQ25OLENBQUEsRUFBR3NJLEtBQUEsS0FBVTtNQUN0QixPQUFPdEksQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFBSztRQUNoQixJQUFJb2dCLElBQUEsR0FBT0osS0FBQSxDQUFNaGdCLENBQUE7UUFDakIsSUFBSW9nQixJQUFBLElBQVEsSUFBSTtVQUNaLElBQUlwZ0IsQ0FBQSxJQUFLZ2dCLEtBQUEsQ0FBTTFlLE1BQUEsR0FBUyxLQUFLdEIsQ0FBQSxJQUFLLEdBQzlCO1VBQ0osT0FBT3NJLEtBQUEsSUFBUzZYLFFBQUEsRUFBVTdYLEtBQUEsSUFDdEIsSUFBSTZFLEtBQUEsQ0FBTW5OLENBQUEsR0FBSSxHQUFHc0ksS0FBSyxHQUNsQixPQUFPO1VBQ2YsT0FBTztRQUNYLE9BQ0s7VUFDRCxJQUFJeUMsSUFBQSxHQUFPekMsS0FBQSxHQUFRLEtBQU1BLEtBQUEsSUFBUyxLQUFLNFgsT0FBQSxHQUFXLEtBQUt4YSxLQUFBLENBQU00QyxLQUFBLEVBQU81RixJQUFBLEdBQzlEdWQsTUFBQSxJQUFVM1gsS0FBQSxJQUFTNlgsUUFBQSxHQUFXRixNQUFBLENBQU8zZCxJQUFBLENBQUtnRyxLQUFBLEdBQVE2WCxRQUFRLEVBQUV6ZCxJQUFBLEdBQ3hEO1VBQ1YsSUFBSSxDQUFDcUksSUFBQSxJQUFTQSxJQUFBLENBQUt4RSxJQUFBLElBQVE2WixJQUFBLElBQVEsQ0FBQ3JWLElBQUEsQ0FBSytHLFNBQUEsQ0FBVXNPLElBQUksR0FDbkQsT0FBTztVQUNYOVgsS0FBQTtRQUNKO01BQ0o7TUFDQSxPQUFPO0lBQ1g7SUFDQSxPQUFPNkUsS0FBQSxDQUFNNlMsS0FBQSxDQUFNMWUsTUFBQSxHQUFTLEdBQUcsS0FBS3NhLElBQUk7RUFDNUM7RUFDQTBELHFCQUFBLEVBQXVCO0lBQ25CLElBQUllLFFBQUEsR0FBVyxLQUFLckwsT0FBQSxDQUFRZ0MsT0FBQTtJQUM1QixJQUFJcUosUUFBQSxFQUNBLFNBQVNsVixDQUFBLEdBQUlrVixRQUFBLENBQVMvWCxLQUFBLEVBQU82QyxDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUFLO01BQ3RDLElBQUltVixLQUFBLEdBQVFELFFBQUEsQ0FBUy9kLElBQUEsQ0FBSzZJLENBQUMsRUFBRStCLGNBQUEsQ0FBZW1ULFFBQUEsQ0FBUy9WLFVBQUEsQ0FBV2EsQ0FBQyxDQUFDLEVBQUVpRSxXQUFBO01BQ3BFLElBQUlrUixLQUFBLElBQVNBLEtBQUEsQ0FBTXpkLFdBQUEsSUFBZXlkLEtBQUEsQ0FBTTdULFlBQUEsRUFDcEMsT0FBTzZULEtBQUE7SUFDZjtJQUNKLFNBQVMvWixJQUFBLElBQVEsS0FBS21WLE1BQUEsQ0FBT3hXLE1BQUEsQ0FBT1EsS0FBQSxFQUFPO01BQ3ZDLElBQUloRCxJQUFBLEdBQU8sS0FBS2daLE1BQUEsQ0FBT3hXLE1BQUEsQ0FBT1EsS0FBQSxDQUFNYSxJQUFBO01BQ3BDLElBQUk3RCxJQUFBLENBQUtHLFdBQUEsSUFBZUgsSUFBQSxDQUFLK0osWUFBQSxFQUN6QixPQUFPL0osSUFBQTtJQUNmO0VBQ0o7QUFDSjtBQUlBLFNBQVMwYSxjQUFjckcsR0FBQSxFQUFLO0VBQ3hCLFNBQVM1VyxLQUFBLEdBQVE0VyxHQUFBLENBQUk3VCxVQUFBLEVBQVlxZCxRQUFBLEdBQVcsTUFBTXBnQixLQUFBLEVBQU9BLEtBQUEsR0FBUUEsS0FBQSxDQUFNMmUsV0FBQSxFQUFhO0lBQ2hGLElBQUl2WSxJQUFBLEdBQU9wRyxLQUFBLENBQU04TixRQUFBLElBQVksSUFBSTlOLEtBQUEsQ0FBTXFiLFFBQUEsQ0FBU0MsV0FBQSxDQUFZLElBQUk7SUFDaEUsSUFBSWxWLElBQUEsSUFBUW9VLFFBQUEsQ0FBUzFGLGNBQUEsQ0FBZTFPLElBQUksS0FBS2dhLFFBQUEsRUFBVTtNQUNuREEsUUFBQSxDQUFTQyxXQUFBLENBQVlyZ0IsS0FBSztNQUMxQkEsS0FBQSxHQUFRb2dCLFFBQUE7SUFDWixXQUNTaGEsSUFBQSxJQUFRLE1BQU07TUFDbkJnYSxRQUFBLEdBQVdwZ0IsS0FBQTtJQUNmLFdBQ1NvRyxJQUFBLEVBQU07TUFDWGdhLFFBQUEsR0FBVztJQUNmO0VBQ0o7QUFDSjtBQUVBLFNBQVNqSixRQUFRUCxHQUFBLEVBQUswSixRQUFBLEVBQVU7RUFDNUIsUUFBUTFKLEdBQUEsQ0FBSU8sT0FBQSxJQUFXUCxHQUFBLENBQUkySixpQkFBQSxJQUFxQjNKLEdBQUEsQ0FBSTRKLHFCQUFBLElBQXlCNUosR0FBQSxDQUFJNkosa0JBQUEsRUFBb0IxTCxJQUFBLENBQUs2QixHQUFBLEVBQUswSixRQUFRO0FBQzNIO0FBQ0EsU0FBUzFZLEtBQUt6QixHQUFBLEVBQUs7RUFDZixJQUFJMUMsS0FBQSxHQUFPLENBQUM7RUFDWixTQUFTNFIsSUFBQSxJQUFRbFAsR0FBQSxFQUNiMUMsS0FBQSxDQUFLNFIsSUFBQSxJQUFRbFAsR0FBQSxDQUFJa1AsSUFBQTtFQUNyQixPQUFPNVIsS0FBQTtBQUNYO0FBSUEsU0FBUzZiLGFBQWE5SyxRQUFBLEVBQVUxRyxRQUFBLEVBQVU7RUFDdEMsSUFBSXZJLEtBQUEsR0FBUXVJLFFBQUEsQ0FBUy9JLE1BQUEsQ0FBT1EsS0FBQTtFQUM1QixTQUFTYSxJQUFBLElBQVFiLEtBQUEsRUFBTztJQUNwQixJQUFJN0QsTUFBQSxHQUFTNkQsS0FBQSxDQUFNYSxJQUFBO0lBQ25CLElBQUksQ0FBQzFFLE1BQUEsQ0FBTzZTLGNBQUEsQ0FBZUMsUUFBUSxHQUMvQjtJQUNKLElBQUlsRixJQUFBLEdBQU8sRUFBQztNQUFHZ0IsSUFBQSxHQUFRdEQsS0FBQSxJQUFVO1FBQzdCc0MsSUFBQSxDQUFLck0sSUFBQSxDQUFLK0osS0FBSztRQUNmLFNBQVNuTixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJbU4sS0FBQSxDQUFNb0QsU0FBQSxFQUFXdlEsQ0FBQSxJQUFLO1VBQ3RDLElBQUk7WUFBRTBDLElBQUE7WUFBTXFJO1VBQUssSUFBSW9DLEtBQUEsQ0FBTXFELElBQUEsQ0FBS3hRLENBQUM7VUFDakMsSUFBSTBDLElBQUEsSUFBUXVMLFFBQUEsRUFDUixPQUFPO1VBQ1gsSUFBSXdCLElBQUEsQ0FBS00sT0FBQSxDQUFRaEYsSUFBSSxJQUFJLEtBQUswRixJQUFBLENBQUsxRixJQUFJLEdBQ25DLE9BQU87UUFDZjtNQUNKO0lBQ0EsSUFBSTBGLElBQUEsQ0FBSzVPLE1BQUEsQ0FBT3VMLFlBQVksR0FDeEIsT0FBTztFQUNmO0FBQ0o7QUFNQSxJQUFNek8sYUFBQSxHQUFOLE1BQW9CO0VBVWhCNEMsWUFJQW1FLEtBQUEsRUFJQWdCLEtBQUEsRUFBTztJQUNILEtBQUtoQixLQUFBLEdBQVFBLEtBQUE7SUFDYixLQUFLZ0IsS0FBQSxHQUFRQSxLQUFBO0VBQ2pCO0VBT0FtYSxrQkFBa0J2WixRQUFBLEVBQVUwTixPQUFBLEdBQVUsQ0FBQyxHQUFHM0wsTUFBQSxFQUFRO0lBQzlDLElBQUksQ0FBQ0EsTUFBQSxFQUNEQSxNQUFBLEdBQVNnQixHQUFBLENBQUkySyxPQUFPLEVBQUU4TCxzQkFBQSxDQUF1QjtJQUNqRCxJQUFJMUUsR0FBQSxHQUFNL1MsTUFBQTtNQUFROEcsTUFBQSxHQUFTLEVBQUM7SUFDNUI3SSxRQUFBLENBQVNsRCxPQUFBLENBQVE5QixJQUFBLElBQVE7TUFDckIsSUFBSTZOLE1BQUEsQ0FBTzdPLE1BQUEsSUFBVWdCLElBQUEsQ0FBS29FLEtBQUEsQ0FBTXBGLE1BQUEsRUFBUTtRQUNwQyxJQUFJeWYsSUFBQSxHQUFPO1VBQUdDLFFBQUEsR0FBVztRQUN6QixPQUFPRCxJQUFBLEdBQU81USxNQUFBLENBQU83TyxNQUFBLElBQVUwZixRQUFBLEdBQVcxZSxJQUFBLENBQUtvRSxLQUFBLENBQU1wRixNQUFBLEVBQVE7VUFDekQsSUFBSXlKLElBQUEsR0FBT3pJLElBQUEsQ0FBS29FLEtBQUEsQ0FBTXNhLFFBQUE7VUFDdEIsSUFBSSxDQUFDLEtBQUt0YSxLQUFBLENBQU1xRSxJQUFBLENBQUtySSxJQUFBLENBQUs2RCxJQUFBLEdBQU87WUFDN0J5YSxRQUFBO1lBQ0E7VUFDSjtVQUNBLElBQUksQ0FBQ2pXLElBQUEsQ0FBSy9HLEVBQUEsQ0FBR21NLE1BQUEsQ0FBTzRRLElBQUEsRUFBTSxFQUFFLEtBQUtoVyxJQUFBLENBQUtySSxJQUFBLENBQUtDLElBQUEsQ0FBS3NlLFFBQUEsS0FBYSxPQUN6RDtVQUNKRixJQUFBO1VBQ0FDLFFBQUE7UUFDSjtRQUNBLE9BQU9ELElBQUEsR0FBTzVRLE1BQUEsQ0FBTzdPLE1BQUEsRUFDakI4YSxHQUFBLEdBQU1qTSxNQUFBLENBQU9ZLEdBQUEsQ0FBSSxFQUFFO1FBQ3ZCLE9BQU9pUSxRQUFBLEdBQVcxZSxJQUFBLENBQUtvRSxLQUFBLENBQU1wRixNQUFBLEVBQVE7VUFDakMsSUFBSTRmLEdBQUEsR0FBTTVlLElBQUEsQ0FBS29FLEtBQUEsQ0FBTXNhLFFBQUE7VUFDckIsSUFBSUcsT0FBQSxHQUFVLEtBQUtDLGFBQUEsQ0FBY0YsR0FBQSxFQUFLNWUsSUFBQSxDQUFLd0ksUUFBQSxFQUFVa0ssT0FBTztVQUM1RCxJQUFJbU0sT0FBQSxFQUFTO1lBQ1RoUixNQUFBLENBQU8vTSxJQUFBLENBQUssQ0FBQzhkLEdBQUEsRUFBSzlFLEdBQUcsQ0FBQztZQUN0QkEsR0FBQSxDQUFJb0UsV0FBQSxDQUFZVyxPQUFBLENBQVFwSyxHQUFHO1lBQzNCcUYsR0FBQSxHQUFNK0UsT0FBQSxDQUFRMUMsVUFBQSxJQUFjMEMsT0FBQSxDQUFRcEssR0FBQTtVQUN4QztRQUNKO01BQ0o7TUFDQXFGLEdBQUEsQ0FBSW9FLFdBQUEsQ0FBWSxLQUFLYSxrQkFBQSxDQUFtQi9lLElBQUEsRUFBTTBTLE9BQU8sQ0FBQztJQUMxRCxDQUFDO0lBQ0QsT0FBTzNMLE1BQUE7RUFDWDtFQUlBZ1ksbUJBQW1CL2UsSUFBQSxFQUFNMFMsT0FBQSxFQUFTO0lBQzlCLElBQUk7TUFBRStCLEdBQUE7TUFBSzBIO0lBQVcsSUFBSTZDLFVBQUEsQ0FBV2pYLEdBQUEsQ0FBSTJLLE9BQU8sR0FBRyxLQUFLdFAsS0FBQSxDQUFNcEQsSUFBQSxDQUFLSSxJQUFBLENBQUs2RCxJQUFBLEVBQU1qRSxJQUFJLEdBQUcsTUFBTUEsSUFBQSxDQUFLcUQsS0FBSztJQUNyRyxJQUFJOFksVUFBQSxFQUFZO01BQ1osSUFBSW5jLElBQUEsQ0FBS0csTUFBQSxFQUNMLE1BQU0sSUFBSXlCLFVBQUEsQ0FBVyw4Q0FBOEM7TUFDdkUsS0FBSzJjLGlCQUFBLENBQWtCdmUsSUFBQSxDQUFLNUIsT0FBQSxFQUFTc1UsT0FBQSxFQUFTeUosVUFBVTtJQUM1RDtJQUNBLE9BQU8xSCxHQUFBO0VBQ1g7RUFRQXdLLGNBQWNqZixJQUFBLEVBQU0wUyxPQUFBLEdBQVUsQ0FBQyxHQUFHO0lBQzlCLElBQUkrQixHQUFBLEdBQU0sS0FBS3NLLGtCQUFBLENBQW1CL2UsSUFBQSxFQUFNMFMsT0FBTztJQUMvQyxTQUFTaFYsQ0FBQSxHQUFJc0MsSUFBQSxDQUFLb0UsS0FBQSxDQUFNcEYsTUFBQSxHQUFTLEdBQUd0QixDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUFLO01BQzdDLElBQUlxYixJQUFBLEdBQU8sS0FBSytGLGFBQUEsQ0FBYzllLElBQUEsQ0FBS29FLEtBQUEsQ0FBTTFHLENBQUEsR0FBSXNDLElBQUEsQ0FBS3dJLFFBQUEsRUFBVWtLLE9BQU87TUFDbkUsSUFBSXFHLElBQUEsRUFBTTtRQUNOLENBQUNBLElBQUEsQ0FBS29ELFVBQUEsSUFBY3BELElBQUEsQ0FBS3RFLEdBQUEsRUFBS3lKLFdBQUEsQ0FBWXpKLEdBQUc7UUFDN0NBLEdBQUEsR0FBTXNFLElBQUEsQ0FBS3RFLEdBQUE7TUFDZjtJQUNKO0lBQ0EsT0FBT0EsR0FBQTtFQUNYO0VBSUFxSyxjQUFjemEsSUFBQSxFQUFNaUssTUFBQSxFQUFRb0UsT0FBQSxHQUFVLENBQUMsR0FBRztJQUN0QyxJQUFJd00sS0FBQSxHQUFRLEtBQUs5YSxLQUFBLENBQU1DLElBQUEsQ0FBS2pFLElBQUEsQ0FBSzZELElBQUE7SUFDakMsT0FBT2liLEtBQUEsSUFBU0YsVUFBQSxDQUFXalgsR0FBQSxDQUFJMkssT0FBTyxHQUFHd00sS0FBQSxDQUFNN2EsSUFBQSxFQUFNaUssTUFBTSxHQUFHLE1BQU1qSyxJQUFBLENBQUtoQixLQUFLO0VBQ2xGO0VBQ0EsT0FBTzJiLFdBQVc5VixJQUFBLEVBQUtpVyxTQUFBLEVBQVdDLEtBQUEsR0FBUSxNQUFNQyxhQUFBLEVBQWU7SUFDM0QsT0FBT0wsVUFBQSxDQUFXOVYsSUFBQSxFQUFLaVcsU0FBQSxFQUFXQyxLQUFBLEVBQU9DLGFBQWE7RUFDMUQ7RUFLQSxPQUFPdkosV0FBV2xULE1BQUEsRUFBUTtJQUN0QixPQUFPQSxNQUFBLENBQU9vUSxNQUFBLENBQU9zTSxhQUFBLEtBQ2hCMWMsTUFBQSxDQUFPb1EsTUFBQSxDQUFPc00sYUFBQSxHQUFnQixJQUFJampCLGFBQUEsQ0FBYyxLQUFLa2pCLGVBQUEsQ0FBZ0IzYyxNQUFNLEdBQUcsS0FBSzRjLGVBQUEsQ0FBZ0I1YyxNQUFNLENBQUM7RUFDbkg7RUFLQSxPQUFPMmMsZ0JBQWdCM2MsTUFBQSxFQUFRO0lBQzNCLElBQUk1QixNQUFBLEdBQVN5ZSxXQUFBLENBQVk3YyxNQUFBLENBQU9RLEtBQUs7SUFDckMsSUFBSSxDQUFDcEMsTUFBQSxDQUFPOUMsSUFBQSxFQUNSOEMsTUFBQSxDQUFPOUMsSUFBQSxHQUFPOEIsSUFBQSxJQUFRQSxJQUFBLENBQUs5QixJQUFBO0lBQy9CLE9BQU84QyxNQUFBO0VBQ1g7RUFJQSxPQUFPd2UsZ0JBQWdCNWMsTUFBQSxFQUFRO0lBQzNCLE9BQU82YyxXQUFBLENBQVk3YyxNQUFBLENBQU93QixLQUFLO0VBQ25DO0FBQ0o7QUFDQSxTQUFTcWIsWUFBWXpiLEdBQUEsRUFBSztFQUN0QixJQUFJaEQsTUFBQSxHQUFTLENBQUM7RUFDZCxTQUFTaUQsSUFBQSxJQUFRRCxHQUFBLEVBQUs7SUFDbEIsSUFBSWtiLEtBQUEsR0FBUWxiLEdBQUEsQ0FBSUMsSUFBQSxFQUFNNUQsSUFBQSxDQUFLNmUsS0FBQTtJQUMzQixJQUFJQSxLQUFBLEVBQ0FsZSxNQUFBLENBQU9pRCxJQUFBLElBQVFpYixLQUFBO0VBQ3ZCO0VBQ0EsT0FBT2xlLE1BQUE7QUFDWDtBQUNBLFNBQVMrRyxJQUFJMkssT0FBQSxFQUFTO0VBQ2xCLE9BQU9BLE9BQUEsQ0FBUWdOLFFBQUEsSUFBWUMsTUFBQSxDQUFPRCxRQUFBO0FBQ3RDO0FBQ0EsSUFBTUUsd0JBQUEsR0FBMkIsbUJBQUloVyxPQUFBLENBQVE7QUFDN0MsU0FBU2lXLHFCQUFxQnhjLEtBQUEsRUFBTztFQUNqQyxJQUFJUixLQUFBLEdBQVErYyx3QkFBQSxDQUF5QnJXLEdBQUEsQ0FBSWxHLEtBQUs7RUFDOUMsSUFBSVIsS0FBQSxLQUFVLFFBQ1YrYyx3QkFBQSxDQUF5QmxjLEdBQUEsQ0FBSUwsS0FBQSxFQUFPUixLQUFBLEdBQVFpZCx5QkFBQSxDQUEwQnpjLEtBQUssQ0FBQztFQUNoRixPQUFPUixLQUFBO0FBQ1g7QUFDQSxTQUFTaWQsMEJBQTBCemMsS0FBQSxFQUFPO0VBQ3RDLElBQUlyQyxNQUFBLEdBQVM7RUFDYixTQUFTbU4sS0FBS3RMLEtBQUEsRUFBTztJQUNqQixJQUFJQSxLQUFBLElBQVMsT0FBT0EsS0FBQSxJQUFTLFVBQVU7TUFDbkMsSUFBSUMsS0FBQSxDQUFNQyxPQUFBLENBQVFGLEtBQUssR0FBRztRQUN0QixJQUFJLE9BQU9BLEtBQUEsQ0FBTSxNQUFNLFVBQVU7VUFDN0IsSUFBSSxDQUFDN0IsTUFBQSxFQUNEQSxNQUFBLEdBQVMsRUFBQztVQUNkQSxNQUFBLENBQU9GLElBQUEsQ0FBSytCLEtBQUs7UUFDckIsT0FDSztVQUNELFNBQVNuRixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJbUYsS0FBQSxDQUFNN0QsTUFBQSxFQUFRdEIsQ0FBQSxJQUM5QnlRLElBQUEsQ0FBS3RMLEtBQUEsQ0FBTW5GLENBQUEsQ0FBRTtRQUNyQjtNQUNKLE9BQ0s7UUFDRCxTQUFTd1YsSUFBQSxJQUFRclEsS0FBQSxFQUNic0wsSUFBQSxDQUFLdEwsS0FBQSxDQUFNcVEsSUFBQSxDQUFLO01BQ3hCO0lBQ0o7RUFDSjtFQUNBL0UsSUFBQSxDQUFLOUssS0FBSztFQUNWLE9BQU9yQyxNQUFBO0FBQ1g7QUFDQSxTQUFTZ2UsV0FBVzlWLElBQUEsRUFBS2lXLFNBQUEsRUFBV0MsS0FBQSxFQUFPQyxhQUFBLEVBQWU7RUFDdEQsSUFBSSxPQUFPRixTQUFBLElBQWEsVUFDcEIsT0FBTztJQUFFMUssR0FBQSxFQUFLdkwsSUFBQSxDQUFJeVMsY0FBQSxDQUFld0QsU0FBUztFQUFFO0VBQ2hELElBQUlBLFNBQUEsQ0FBVXhULFFBQUEsSUFBWSxNQUN0QixPQUFPO0lBQUU4SSxHQUFBLEVBQUswSztFQUFVO0VBQzVCLElBQUlBLFNBQUEsQ0FBVTFLLEdBQUEsSUFBTzBLLFNBQUEsQ0FBVTFLLEdBQUEsQ0FBSTlJLFFBQUEsSUFBWSxNQUMzQyxPQUFPd1QsU0FBQTtFQUNYLElBQUl4RSxPQUFBLEdBQVV3RSxTQUFBLENBQVU7SUFBSVksVUFBQTtFQUM1QixJQUFJLE9BQU9wRixPQUFBLElBQVcsVUFDbEIsTUFBTSxJQUFJL1ksVUFBQSxDQUFXLG9DQUFvQztFQUM3RCxJQUFJeWQsYUFBQSxLQUFrQlUsVUFBQSxHQUFhRixvQkFBQSxDQUFxQlIsYUFBYSxNQUNqRVUsVUFBQSxDQUFXdFMsT0FBQSxDQUFRMFIsU0FBUyxJQUFJLElBQ2hDLE1BQU0sSUFBSXZkLFVBQUEsQ0FBVyw4R0FBOEc7RUFDdkksSUFBSW9lLEtBQUEsR0FBUXJGLE9BQUEsQ0FBUWxOLE9BQUEsQ0FBUSxHQUFHO0VBQy9CLElBQUl1UyxLQUFBLEdBQVEsR0FBRztJQUNYWixLQUFBLEdBQVF6RSxPQUFBLENBQVF6YSxLQUFBLENBQU0sR0FBRzhmLEtBQUs7SUFDOUJyRixPQUFBLEdBQVVBLE9BQUEsQ0FBUXphLEtBQUEsQ0FBTThmLEtBQUEsR0FBUSxDQUFDO0VBQ3JDO0VBQ0EsSUFBSTdELFVBQUE7RUFDSixJQUFJMUgsR0FBQSxHQUFPMkssS0FBQSxHQUFRbFcsSUFBQSxDQUFJK1csZUFBQSxDQUFnQmIsS0FBQSxFQUFPekUsT0FBTyxJQUFJelIsSUFBQSxDQUFJZ1gsYUFBQSxDQUFjdkYsT0FBTztFQUNsRixJQUFJdFgsS0FBQSxHQUFROGIsU0FBQSxDQUFVO0lBQUkxZixLQUFBLEdBQVE7RUFDbEMsSUFBSTRELEtBQUEsSUFBUyxPQUFPQSxLQUFBLElBQVMsWUFBWUEsS0FBQSxDQUFNc0ksUUFBQSxJQUFZLFFBQVEsQ0FBQzdJLEtBQUEsQ0FBTUMsT0FBQSxDQUFRTSxLQUFLLEdBQUc7SUFDdEY1RCxLQUFBLEdBQVE7SUFDUixTQUFTd0UsSUFBQSxJQUFRWixLQUFBLEVBQ2IsSUFBSUEsS0FBQSxDQUFNWSxJQUFBLEtBQVMsTUFBTTtNQUNyQixJQUFJa2MsTUFBQSxHQUFRbGMsSUFBQSxDQUFLd0osT0FBQSxDQUFRLEdBQUc7TUFDNUIsSUFBSTBTLE1BQUEsR0FBUSxHQUNSMUwsR0FBQSxDQUFJMkwsY0FBQSxDQUFlbmMsSUFBQSxDQUFLL0QsS0FBQSxDQUFNLEdBQUdpZ0IsTUFBSyxHQUFHbGMsSUFBQSxDQUFLL0QsS0FBQSxDQUFNaWdCLE1BQUEsR0FBUSxDQUFDLEdBQUc5YyxLQUFBLENBQU1ZLElBQUEsQ0FBSyxXQUN0RUEsSUFBQSxJQUFRLFdBQVd3USxHQUFBLENBQUlULEtBQUEsRUFDNUJTLEdBQUEsQ0FBSVQsS0FBQSxDQUFNcU0sT0FBQSxHQUFVaGQsS0FBQSxDQUFNWSxJQUFBLE9BRTFCd1EsR0FBQSxDQUFJNkwsWUFBQSxDQUFhcmMsSUFBQSxFQUFNWixLQUFBLENBQU1ZLElBQUEsQ0FBSztJQUMxQztFQUNSO0VBQ0EsU0FBU3ZHLENBQUEsR0FBSStCLEtBQUEsRUFBTy9CLENBQUEsR0FBSXloQixTQUFBLENBQVVuZ0IsTUFBQSxFQUFRdEIsQ0FBQSxJQUFLO0lBQzNDLElBQUlHLEtBQUEsR0FBUXNoQixTQUFBLENBQVV6aEIsQ0FBQTtJQUN0QixJQUFJRyxLQUFBLEtBQVUsR0FBRztNQUNiLElBQUlILENBQUEsR0FBSXloQixTQUFBLENBQVVuZ0IsTUFBQSxHQUFTLEtBQUt0QixDQUFBLEdBQUkrQixLQUFBLEVBQ2hDLE1BQU0sSUFBSW1DLFVBQUEsQ0FBVyx3REFBd0Q7TUFDakYsT0FBTztRQUFFNlMsR0FBQTtRQUFLMEgsVUFBQSxFQUFZMUg7TUFBSTtJQUNsQyxPQUNLO01BQ0QsSUFBSTtRQUFFQSxHQUFBLEVBQUtuVyxLQUFBO1FBQU82ZCxVQUFBLEVBQVlvRTtNQUFhLElBQUl2QixVQUFBLENBQVc5VixJQUFBLEVBQUtyTCxLQUFBLEVBQU91aEIsS0FBQSxFQUFPQyxhQUFhO01BQzFGNUssR0FBQSxDQUFJeUosV0FBQSxDQUFZNWYsS0FBSztNQUNyQixJQUFJaWlCLFlBQUEsRUFBYztRQUNkLElBQUlwRSxVQUFBLEVBQ0EsTUFBTSxJQUFJdmEsVUFBQSxDQUFXLHdCQUF3QjtRQUNqRHVhLFVBQUEsR0FBYW9FLFlBQUE7TUFDakI7SUFDSjtFQUNKO0VBQ0EsT0FBTztJQUFFOUwsR0FBQTtJQUFLMEg7RUFBVztBQUM3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvcnZkL291dCJ9