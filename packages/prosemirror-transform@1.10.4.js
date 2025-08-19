System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep)],
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

// .beyond/uimport/prosemirror-transform.1.10.4.js
var prosemirror_transform_1_10_4_exports = {};
__export(prosemirror_transform_1_10_4_exports, {
  AddMarkStep: () => AddMarkStep,
  AddNodeMarkStep: () => AddNodeMarkStep,
  AttrStep: () => AttrStep,
  DocAttrStep: () => DocAttrStep,
  MapResult: () => MapResult,
  Mapping: () => Mapping,
  RemoveMarkStep: () => RemoveMarkStep,
  RemoveNodeMarkStep: () => RemoveNodeMarkStep,
  ReplaceAroundStep: () => ReplaceAroundStep,
  ReplaceStep: () => ReplaceStep,
  Step: () => Step,
  StepMap: () => StepMap,
  StepResult: () => StepResult,
  Transform: () => Transform,
  TransformError: () => TransformError,
  canJoin: () => canJoin,
  canSplit: () => canSplit,
  dropPoint: () => dropPoint,
  findWrapping: () => findWrapping,
  insertPoint: () => insertPoint,
  joinPoint: () => joinPoint,
  liftTarget: () => liftTarget,
  replaceStep: () => replaceStep
});
module.exports = __toCommonJS(prosemirror_transform_1_10_4_exports);

// node_modules/prosemirror-transform/dist/index.js
var import_prosemirror_model = require("prosemirror-model@1.25.3");
var lower16 = 65535;
var factor16 = Math.pow(2, 16);
function makeRecover(index, offset) {
  return index + offset * factor16;
}
function recoverIndex(value) {
  return value & lower16;
}
function recoverOffset(value) {
  return (value - (value & lower16)) / factor16;
}
var DEL_BEFORE = 1,
  DEL_AFTER = 2,
  DEL_ACROSS = 4,
  DEL_SIDE = 8;
var MapResult = class {
  constructor(pos, delInfo, recover) {
    this.pos = pos;
    this.delInfo = delInfo;
    this.recover = recover;
  }
  get deleted() {
    return (this.delInfo & DEL_SIDE) > 0;
  }
  get deletedBefore() {
    return (this.delInfo & (DEL_BEFORE | DEL_ACROSS)) > 0;
  }
  get deletedAfter() {
    return (this.delInfo & (DEL_AFTER | DEL_ACROSS)) > 0;
  }
  get deletedAcross() {
    return (this.delInfo & DEL_ACROSS) > 0;
  }
};
var StepMap = class {
  constructor(ranges, inverted = false) {
    this.ranges = ranges;
    this.inverted = inverted;
    if (!ranges.length && StepMap.empty) return StepMap.empty;
  }
  recover(value) {
    let diff = 0,
      index = recoverIndex(value);
    if (!this.inverted) for (let i = 0; i < index; i++) diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[index * 3] + diff + recoverOffset(value);
  }
  mapResult(pos, assoc = 1) {
    return this._map(pos, assoc, false);
  }
  map(pos, assoc = 1) {
    return this._map(pos, assoc, true);
  }
  _map(pos, assoc, simple) {
    let diff = 0,
      oldIndex = this.inverted ? 2 : 1,
      newIndex = this.inverted ? 1 : 2;
    for (let i = 0; i < this.ranges.length; i += 3) {
      let start = this.ranges[i] - (this.inverted ? diff : 0);
      if (start > pos) break;
      let oldSize = this.ranges[i + oldIndex],
        newSize = this.ranges[i + newIndex],
        end = start + oldSize;
      if (pos <= end) {
        let side = !oldSize ? assoc : pos == start ? -1 : pos == end ? 1 : assoc;
        let result = start + diff + (side < 0 ? 0 : newSize);
        if (simple) return result;
        let recover = pos == (assoc < 0 ? start : end) ? null : makeRecover(i / 3, pos - start);
        let del = pos == start ? DEL_AFTER : pos == end ? DEL_BEFORE : DEL_ACROSS;
        if (assoc < 0 ? pos != start : pos != end) del |= DEL_SIDE;
        return new MapResult(result, del, recover);
      }
      diff += newSize - oldSize;
    }
    return simple ? pos + diff : new MapResult(pos + diff, 0, null);
  }
  touches(pos, recover) {
    let diff = 0,
      index = recoverIndex(recover);
    let oldIndex = this.inverted ? 2 : 1,
      newIndex = this.inverted ? 1 : 2;
    for (let i = 0; i < this.ranges.length; i += 3) {
      let start = this.ranges[i] - (this.inverted ? diff : 0);
      if (start > pos) break;
      let oldSize = this.ranges[i + oldIndex],
        end = start + oldSize;
      if (pos <= end && i == index * 3) return true;
      diff += this.ranges[i + newIndex] - oldSize;
    }
    return false;
  }
  forEach(f) {
    let oldIndex = this.inverted ? 2 : 1,
      newIndex = this.inverted ? 1 : 2;
    for (let i = 0, diff = 0; i < this.ranges.length; i += 3) {
      let start = this.ranges[i],
        oldStart = start - (this.inverted ? diff : 0),
        newStart = start + (this.inverted ? 0 : diff);
      let oldSize = this.ranges[i + oldIndex],
        newSize = this.ranges[i + newIndex];
      f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
      diff += newSize - oldSize;
    }
  }
  invert() {
    return new StepMap(this.ranges, !this.inverted);
  }
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  static offset(n) {
    return n == 0 ? StepMap.empty : new StepMap(n < 0 ? [0, -n, 0] : [0, 0, n]);
  }
};
StepMap.empty = new StepMap([]);
var Mapping = class {
  constructor(maps, mirror, from = 0, to = maps ? maps.length : 0) {
    this.mirror = mirror;
    this.from = from;
    this.to = to;
    this._maps = maps || [];
    this.ownData = !(maps || mirror);
  }
  get maps() {
    return this._maps;
  }
  slice(from = 0, to = this.maps.length) {
    return new Mapping(this._maps, this.mirror, from, to);
  }
  appendMap(map, mirrors) {
    if (!this.ownData) {
      this._maps = this._maps.slice();
      this.mirror = this.mirror && this.mirror.slice();
      this.ownData = true;
    }
    this.to = this._maps.push(map);
    if (mirrors != null) this.setMirror(this._maps.length - 1, mirrors);
  }
  appendMapping(mapping) {
    for (let i = 0, startSize = this._maps.length; i < mapping._maps.length; i++) {
      let mirr = mapping.getMirror(i);
      this.appendMap(mapping._maps[i], mirr != null && mirr < i ? startSize + mirr : void 0);
    }
  }
  getMirror(n) {
    if (this.mirror) {
      for (let i = 0; i < this.mirror.length; i++) if (this.mirror[i] == n) return this.mirror[i + (i % 2 ? -1 : 1)];
    }
  }
  setMirror(n, m) {
    if (!this.mirror) this.mirror = [];
    this.mirror.push(n, m);
  }
  appendMappingInverted(mapping) {
    for (let i = mapping.maps.length - 1, totalSize = this._maps.length + mapping._maps.length; i >= 0; i--) {
      let mirr = mapping.getMirror(i);
      this.appendMap(mapping._maps[i].invert(), mirr != null && mirr > i ? totalSize - mirr - 1 : void 0);
    }
  }
  invert() {
    let inverse = new Mapping();
    inverse.appendMappingInverted(this);
    return inverse;
  }
  map(pos, assoc = 1) {
    if (this.mirror) return this._map(pos, assoc, true);
    for (let i = this.from; i < this.to; i++) pos = this._maps[i].map(pos, assoc);
    return pos;
  }
  mapResult(pos, assoc = 1) {
    return this._map(pos, assoc, false);
  }
  _map(pos, assoc, simple) {
    let delInfo = 0;
    for (let i = this.from; i < this.to; i++) {
      let map = this._maps[i],
        result = map.mapResult(pos, assoc);
      if (result.recover != null) {
        let corr = this.getMirror(i);
        if (corr != null && corr > i && corr < this.to) {
          i = corr;
          pos = this._maps[corr].recover(result.recover);
          continue;
        }
      }
      delInfo |= result.delInfo;
      pos = result.pos;
    }
    return simple ? pos : new MapResult(pos, delInfo, null);
  }
};
var stepsByID = /* @__PURE__ */Object.create(null);
var Step = class {
  getMap() {
    return StepMap.empty;
  }
  merge(other) {
    return null;
  }
  static fromJSON(schema, json) {
    if (!json || !json.stepType) throw new RangeError("Invalid input for Step.fromJSON");
    let type = stepsByID[json.stepType];
    if (!type) throw new RangeError(`No step type ${json.stepType} defined`);
    return type.fromJSON(schema, json);
  }
  static jsonID(id, stepClass) {
    if (id in stepsByID) throw new RangeError("Duplicate use of step JSON ID " + id);
    stepsByID[id] = stepClass;
    stepClass.prototype.jsonID = id;
    return stepClass;
  }
};
var StepResult = class {
  constructor(doc, failed) {
    this.doc = doc;
    this.failed = failed;
  }
  static ok(doc) {
    return new StepResult(doc, null);
  }
  static fail(message) {
    return new StepResult(null, message);
  }
  static fromReplace(doc, from, to, slice) {
    try {
      return StepResult.ok(doc.replace(from, to, slice));
    } catch (e) {
      if (e instanceof import_prosemirror_model.ReplaceError) return StepResult.fail(e.message);
      throw e;
    }
  }
};
function mapFragment(fragment, f, parent) {
  let mapped = [];
  for (let i = 0; i < fragment.childCount; i++) {
    let child = fragment.child(i);
    if (child.content.size) child = child.copy(mapFragment(child.content, f, child));
    if (child.isInline) child = f(child, parent, i);
    mapped.push(child);
  }
  return import_prosemirror_model.Fragment.fromArray(mapped);
}
var AddMarkStep = class extends Step {
  constructor(from, to, mark) {
    super();
    this.from = from;
    this.to = to;
    this.mark = mark;
  }
  apply(doc) {
    let oldSlice = doc.slice(this.from, this.to),
      $from = doc.resolve(this.from);
    let parent = $from.node($from.sharedDepth(this.to));
    let slice = new import_prosemirror_model.Slice(mapFragment(oldSlice.content, (node, parent2) => {
      if (!node.isAtom || !parent2.type.allowsMarkType(this.mark.type)) return node;
      return node.mark(this.mark.addToSet(node.marks));
    }, parent), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc, this.from, this.to, slice);
  }
  invert() {
    return new RemoveMarkStep(this.from, this.to, this.mark);
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1),
      to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted || from.pos >= to.pos) return null;
    return new AddMarkStep(from.pos, to.pos, this.mark);
  }
  merge(other) {
    if (other instanceof AddMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new AddMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    return null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new AddMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("addMark", AddMarkStep);
var RemoveMarkStep = class extends Step {
  constructor(from, to, mark) {
    super();
    this.from = from;
    this.to = to;
    this.mark = mark;
  }
  apply(doc) {
    let oldSlice = doc.slice(this.from, this.to);
    let slice = new import_prosemirror_model.Slice(mapFragment(oldSlice.content, node => {
      return node.mark(this.mark.removeFromSet(node.marks));
    }, doc), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc, this.from, this.to, slice);
  }
  invert() {
    return new AddMarkStep(this.from, this.to, this.mark);
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1),
      to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted || from.pos >= to.pos) return null;
    return new RemoveMarkStep(from.pos, to.pos, this.mark);
  }
  merge(other) {
    if (other instanceof RemoveMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new RemoveMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    return null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new RemoveMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("removeMark", RemoveMarkStep);
var AddNodeMarkStep = class extends Step {
  constructor(pos, mark) {
    super();
    this.pos = pos;
    this.mark = mark;
  }
  apply(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node) return StepResult.fail("No node at mark step's position");
    let updated = node.type.create(node.attrs, null, this.mark.addToSet(node.marks));
    return StepResult.fromReplace(doc, this.pos, this.pos + 1, new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  invert(doc) {
    let node = doc.nodeAt(this.pos);
    if (node) {
      let newSet = this.mark.addToSet(node.marks);
      if (newSet.length == node.marks.length) {
        for (let i = 0; i < node.marks.length; i++) if (!node.marks[i].isInSet(newSet)) return new AddNodeMarkStep(this.pos, node.marks[i]);
        return new AddNodeMarkStep(this.pos, this.mark);
      }
    }
    return new RemoveNodeMarkStep(this.pos, this.mark);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new AddNodeMarkStep(pos.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: "addNodeMark",
      pos: this.pos,
      mark: this.mark.toJSON()
    };
  }
  static fromJSON(schema, json) {
    if (typeof json.pos != "number") throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new AddNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("addNodeMark", AddNodeMarkStep);
var RemoveNodeMarkStep = class extends Step {
  constructor(pos, mark) {
    super();
    this.pos = pos;
    this.mark = mark;
  }
  apply(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node) return StepResult.fail("No node at mark step's position");
    let updated = node.type.create(node.attrs, null, this.mark.removeFromSet(node.marks));
    return StepResult.fromReplace(doc, this.pos, this.pos + 1, new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  invert(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node || !this.mark.isInSet(node.marks)) return this;
    return new AddNodeMarkStep(this.pos, this.mark);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new RemoveNodeMarkStep(pos.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: "removeNodeMark",
      pos: this.pos,
      mark: this.mark.toJSON()
    };
  }
  static fromJSON(schema, json) {
    if (typeof json.pos != "number") throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new RemoveNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("removeNodeMark", RemoveNodeMarkStep);
var ReplaceStep = class extends Step {
  constructor(from, to, slice, structure = false) {
    super();
    this.from = from;
    this.to = to;
    this.slice = slice;
    this.structure = structure;
  }
  apply(doc) {
    if (this.structure && contentBetween(doc, this.from, this.to)) return StepResult.fail("Structure replace would overwrite content");
    return StepResult.fromReplace(doc, this.from, this.to, this.slice);
  }
  getMap() {
    return new StepMap([this.from, this.to - this.from, this.slice.size]);
  }
  invert(doc) {
    return new ReplaceStep(this.from, this.from + this.slice.size, doc.slice(this.from, this.to));
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1),
      to = mapping.mapResult(this.to, -1);
    if (from.deletedAcross && to.deletedAcross) return null;
    return new ReplaceStep(from.pos, Math.max(from.pos, to.pos), this.slice, this.structure);
  }
  merge(other) {
    if (!(other instanceof ReplaceStep) || other.structure || this.structure) return null;
    if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
      let slice = this.slice.size + other.slice.size == 0 ? import_prosemirror_model.Slice.empty : new import_prosemirror_model.Slice(this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
      return new ReplaceStep(this.from, this.to + (other.to - other.from), slice, this.structure);
    } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
      let slice = this.slice.size + other.slice.size == 0 ? import_prosemirror_model.Slice.empty : new import_prosemirror_model.Slice(other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
      return new ReplaceStep(other.from, this.to, slice, this.structure);
    } else {
      return null;
    }
  }
  toJSON() {
    let json = {
      stepType: "replace",
      from: this.from,
      to: this.to
    };
    if (this.slice.size) json.slice = this.slice.toJSON();
    if (this.structure) json.structure = true;
    return json;
  }
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new ReplaceStep(json.from, json.to, import_prosemirror_model.Slice.fromJSON(schema, json.slice), !!json.structure);
  }
};
Step.jsonID("replace", ReplaceStep);
var ReplaceAroundStep = class extends Step {
  constructor(from, to, gapFrom, gapTo, slice, insert, structure = false) {
    super();
    this.from = from;
    this.to = to;
    this.gapFrom = gapFrom;
    this.gapTo = gapTo;
    this.slice = slice;
    this.insert = insert;
    this.structure = structure;
  }
  apply(doc) {
    if (this.structure && (contentBetween(doc, this.from, this.gapFrom) || contentBetween(doc, this.gapTo, this.to))) return StepResult.fail("Structure gap-replace would overwrite content");
    let gap = doc.slice(this.gapFrom, this.gapTo);
    if (gap.openStart || gap.openEnd) return StepResult.fail("Gap is not a flat range");
    let inserted = this.slice.insertAt(this.insert, gap.content);
    if (!inserted) return StepResult.fail("Content does not fit in gap");
    return StepResult.fromReplace(doc, this.from, this.to, inserted);
  }
  getMap() {
    return new StepMap([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert]);
  }
  invert(doc) {
    let gap = this.gapTo - this.gapFrom;
    return new ReplaceAroundStep(this.from, this.from + this.slice.size + gap, this.from + this.insert, this.from + this.insert + gap, doc.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1),
      to = mapping.mapResult(this.to, -1);
    let gapFrom = this.from == this.gapFrom ? from.pos : mapping.map(this.gapFrom, -1);
    let gapTo = this.to == this.gapTo ? to.pos : mapping.map(this.gapTo, 1);
    if (from.deletedAcross && to.deletedAcross || gapFrom < from.pos || gapTo > to.pos) return null;
    return new ReplaceAroundStep(from.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let json = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    if (this.slice.size) json.slice = this.slice.toJSON();
    if (this.structure) json.structure = true;
    return json;
  }
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number" || typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number") throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo, import_prosemirror_model.Slice.fromJSON(schema, json.slice), json.insert, !!json.structure);
  }
};
Step.jsonID("replaceAround", ReplaceAroundStep);
function contentBetween(doc, from, to) {
  let $from = doc.resolve(from),
    dist = to - from,
    depth = $from.depth;
  while (dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount) {
    depth--;
    dist--;
  }
  if (dist > 0) {
    let next = $from.node(depth).maybeChild($from.indexAfter(depth));
    while (dist > 0) {
      if (!next || next.isLeaf) return true;
      next = next.firstChild;
      dist--;
    }
  }
  return false;
}
function addMark(tr, from, to, mark) {
  let removed = [],
    added = [];
  let removing, adding;
  tr.doc.nodesBetween(from, to, (node, pos, parent) => {
    if (!node.isInline) return;
    let marks = node.marks;
    if (!mark.isInSet(marks) && parent.type.allowsMarkType(mark.type)) {
      let start = Math.max(pos, from),
        end = Math.min(pos + node.nodeSize, to);
      let newSet = mark.addToSet(marks);
      for (let i = 0; i < marks.length; i++) {
        if (!marks[i].isInSet(newSet)) {
          if (removing && removing.to == start && removing.mark.eq(marks[i])) removing.to = end;else removed.push(removing = new RemoveMarkStep(start, end, marks[i]));
        }
      }
      if (adding && adding.to == start) adding.to = end;else added.push(adding = new AddMarkStep(start, end, mark));
    }
  });
  removed.forEach(s => tr.step(s));
  added.forEach(s => tr.step(s));
}
function removeMark(tr, from, to, mark) {
  let matched = [],
    step = 0;
  tr.doc.nodesBetween(from, to, (node, pos) => {
    if (!node.isInline) return;
    step++;
    let toRemove = null;
    if (mark instanceof import_prosemirror_model.MarkType) {
      let set = node.marks,
        found;
      while (found = mark.isInSet(set)) {
        (toRemove || (toRemove = [])).push(found);
        set = found.removeFromSet(set);
      }
    } else if (mark) {
      if (mark.isInSet(node.marks)) toRemove = [mark];
    } else {
      toRemove = node.marks;
    }
    if (toRemove && toRemove.length) {
      let end = Math.min(pos + node.nodeSize, to);
      for (let i = 0; i < toRemove.length; i++) {
        let style = toRemove[i],
          found;
        for (let j = 0; j < matched.length; j++) {
          let m = matched[j];
          if (m.step == step - 1 && style.eq(matched[j].style)) found = m;
        }
        if (found) {
          found.to = end;
          found.step = step;
        } else {
          matched.push({
            style,
            from: Math.max(pos, from),
            to: end,
            step
          });
        }
      }
    }
  });
  matched.forEach(m => tr.step(new RemoveMarkStep(m.from, m.to, m.style)));
}
function clearIncompatible(tr, pos, parentType, match = parentType.contentMatch, clearNewlines = true) {
  let node = tr.doc.nodeAt(pos);
  let replSteps = [],
    cur = pos + 1;
  for (let i = 0; i < node.childCount; i++) {
    let child = node.child(i),
      end = cur + child.nodeSize;
    let allowed = match.matchType(child.type);
    if (!allowed) {
      replSteps.push(new ReplaceStep(cur, end, import_prosemirror_model.Slice.empty));
    } else {
      match = allowed;
      for (let j = 0; j < child.marks.length; j++) if (!parentType.allowsMarkType(child.marks[j].type)) tr.step(new RemoveMarkStep(cur, end, child.marks[j]));
      if (clearNewlines && child.isText && parentType.whitespace != "pre") {
        let m,
          newline = /\r?\n|\r/g,
          slice;
        while (m = newline.exec(child.text)) {
          if (!slice) slice = new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(parentType.schema.text(" ", parentType.allowedMarks(child.marks))), 0, 0);
          replSteps.push(new ReplaceStep(cur + m.index, cur + m.index + m[0].length, slice));
        }
      }
    }
    cur = end;
  }
  if (!match.validEnd) {
    let fill = match.fillBefore(import_prosemirror_model.Fragment.empty, true);
    tr.replace(cur, cur, new import_prosemirror_model.Slice(fill, 0, 0));
  }
  for (let i = replSteps.length - 1; i >= 0; i--) tr.step(replSteps[i]);
}
function canCut(node, start, end) {
  return (start == 0 || node.canReplace(start, node.childCount)) && (end == node.childCount || node.canReplace(0, end));
}
function liftTarget(range) {
  let parent = range.parent;
  let content = parent.content.cutByIndex(range.startIndex, range.endIndex);
  for (let depth = range.depth;; --depth) {
    let node = range.$from.node(depth);
    let index = range.$from.index(depth),
      endIndex = range.$to.indexAfter(depth);
    if (depth < range.depth && node.canReplace(index, endIndex, content)) return depth;
    if (depth == 0 || node.type.spec.isolating || !canCut(node, index, endIndex)) break;
  }
  return null;
}
function lift(tr, range, target) {
  let {
    $from,
    $to,
    depth
  } = range;
  let gapStart = $from.before(depth + 1),
    gapEnd = $to.after(depth + 1);
  let start = gapStart,
    end = gapEnd;
  let before = import_prosemirror_model.Fragment.empty,
    openStart = 0;
  for (let d = depth, splitting = false; d > target; d--) if (splitting || $from.index(d) > 0) {
    splitting = true;
    before = import_prosemirror_model.Fragment.from($from.node(d).copy(before));
    openStart++;
  } else {
    start--;
  }
  let after = import_prosemirror_model.Fragment.empty,
    openEnd = 0;
  for (let d = depth, splitting = false; d > target; d--) if (splitting || $to.after(d + 1) < $to.end(d)) {
    splitting = true;
    after = import_prosemirror_model.Fragment.from($to.node(d).copy(after));
    openEnd++;
  } else {
    end++;
  }
  tr.step(new ReplaceAroundStep(start, end, gapStart, gapEnd, new import_prosemirror_model.Slice(before.append(after), openStart, openEnd), before.size - openStart, true));
}
function findWrapping(range, nodeType, attrs = null, innerRange = range) {
  let around = findWrappingOutside(range, nodeType);
  let inner = around && findWrappingInside(innerRange, nodeType);
  if (!inner) return null;
  return around.map(withAttrs).concat({
    type: nodeType,
    attrs
  }).concat(inner.map(withAttrs));
}
function withAttrs(type) {
  return {
    type,
    attrs: null
  };
}
function findWrappingOutside(range, type) {
  let {
    parent,
    startIndex,
    endIndex
  } = range;
  let around = parent.contentMatchAt(startIndex).findWrapping(type);
  if (!around) return null;
  let outer = around.length ? around[0] : type;
  return parent.canReplaceWith(startIndex, endIndex, outer) ? around : null;
}
function findWrappingInside(range, type) {
  let {
    parent,
    startIndex,
    endIndex
  } = range;
  let inner = parent.child(startIndex);
  let inside = type.contentMatch.findWrapping(inner.type);
  if (!inside) return null;
  let lastType = inside.length ? inside[inside.length - 1] : type;
  let innerMatch = lastType.contentMatch;
  for (let i = startIndex; innerMatch && i < endIndex; i++) innerMatch = innerMatch.matchType(parent.child(i).type);
  if (!innerMatch || !innerMatch.validEnd) return null;
  return inside;
}
function wrap(tr, range, wrappers) {
  let content = import_prosemirror_model.Fragment.empty;
  for (let i = wrappers.length - 1; i >= 0; i--) {
    if (content.size) {
      let match = wrappers[i].type.contentMatch.matchFragment(content);
      if (!match || !match.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    content = import_prosemirror_model.Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content));
  }
  let start = range.start,
    end = range.end;
  tr.step(new ReplaceAroundStep(start, end, start, end, new import_prosemirror_model.Slice(content, 0, 0), wrappers.length, true));
}
function setBlockType(tr, from, to, type, attrs) {
  if (!type.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
  let mapFrom = tr.steps.length;
  tr.doc.nodesBetween(from, to, (node, pos) => {
    let attrsHere = typeof attrs == "function" ? attrs(node) : attrs;
    if (node.isTextblock && !node.hasMarkup(type, attrsHere) && canChangeType(tr.doc, tr.mapping.slice(mapFrom).map(pos), type)) {
      let convertNewlines = null;
      if (type.schema.linebreakReplacement) {
        let pre = type.whitespace == "pre",
          supportLinebreak = !!type.contentMatch.matchType(type.schema.linebreakReplacement);
        if (pre && !supportLinebreak) convertNewlines = false;else if (!pre && supportLinebreak) convertNewlines = true;
      }
      if (convertNewlines === false) replaceLinebreaks(tr, node, pos, mapFrom);
      clearIncompatible(tr, tr.mapping.slice(mapFrom).map(pos, 1), type, void 0, convertNewlines === null);
      let mapping = tr.mapping.slice(mapFrom);
      let startM = mapping.map(pos, 1),
        endM = mapping.map(pos + node.nodeSize, 1);
      tr.step(new ReplaceAroundStep(startM, endM, startM + 1, endM - 1, new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(type.create(attrsHere, null, node.marks)), 0, 0), 1, true));
      if (convertNewlines === true) replaceNewlines(tr, node, pos, mapFrom);
      return false;
    }
  });
}
function replaceNewlines(tr, node, pos, mapFrom) {
  node.forEach((child, offset) => {
    if (child.isText) {
      let m,
        newline = /\r?\n|\r/g;
      while (m = newline.exec(child.text)) {
        let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset + m.index);
        tr.replaceWith(start, start + 1, node.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function replaceLinebreaks(tr, node, pos, mapFrom) {
  node.forEach((child, offset) => {
    if (child.type == child.type.schema.linebreakReplacement) {
      let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset);
      tr.replaceWith(start, start + 1, node.type.schema.text("\n"));
    }
  });
}
function canChangeType(doc, pos, type) {
  let $pos = doc.resolve(pos),
    index = $pos.index();
  return $pos.parent.canReplaceWith(index, index + 1, type);
}
function setNodeMarkup(tr, pos, type, attrs, marks) {
  let node = tr.doc.nodeAt(pos);
  if (!node) throw new RangeError("No node at given position");
  if (!type) type = node.type;
  let newNode = type.create(attrs, null, marks || node.marks);
  if (node.isLeaf) return tr.replaceWith(pos, pos + node.nodeSize, newNode);
  if (!type.validContent(node.content)) throw new RangeError("Invalid content for node type " + type.name);
  tr.step(new ReplaceAroundStep(pos, pos + node.nodeSize, pos + 1, pos + node.nodeSize - 1, new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(newNode), 0, 0), 1, true));
}
function canSplit(doc, pos, depth = 1, typesAfter) {
  let $pos = doc.resolve(pos),
    base = $pos.depth - depth;
  let innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;
  if (base < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount))) return false;
  for (let d = $pos.depth - 1, i = depth - 2; d > base; d--, i--) {
    let node = $pos.node(d),
      index2 = $pos.index(d);
    if (node.type.spec.isolating) return false;
    let rest = node.content.cutByIndex(index2, node.childCount);
    let overrideChild = typesAfter && typesAfter[i + 1];
    if (overrideChild) rest = rest.replaceChild(0, overrideChild.type.create(overrideChild.attrs));
    let after = typesAfter && typesAfter[i] || node;
    if (!node.canReplace(index2 + 1, node.childCount) || !after.type.validContent(rest)) return false;
  }
  let index = $pos.indexAfter(base);
  let baseType = typesAfter && typesAfter[0];
  return $pos.node(base).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base + 1).type);
}
function split(tr, pos, depth = 1, typesAfter) {
  let $pos = tr.doc.resolve(pos),
    before = import_prosemirror_model.Fragment.empty,
    after = import_prosemirror_model.Fragment.empty;
  for (let d = $pos.depth, e = $pos.depth - depth, i = depth - 1; d > e; d--, i--) {
    before = import_prosemirror_model.Fragment.from($pos.node(d).copy(before));
    let typeAfter = typesAfter && typesAfter[i];
    after = import_prosemirror_model.Fragment.from(typeAfter ? typeAfter.type.create(typeAfter.attrs, after) : $pos.node(d).copy(after));
  }
  tr.step(new ReplaceStep(pos, pos, new import_prosemirror_model.Slice(before.append(after), depth, depth), true));
}
function canJoin(doc, pos) {
  let $pos = doc.resolve(pos),
    index = $pos.index();
  return joinable($pos.nodeBefore, $pos.nodeAfter) && $pos.parent.canReplace(index, index + 1);
}
function canAppendWithSubstitutedLinebreaks(a, b) {
  if (!b.content.size) a.type.compatibleContent(b.type);
  let match = a.contentMatchAt(a.childCount);
  let {
    linebreakReplacement
  } = a.type.schema;
  for (let i = 0; i < b.childCount; i++) {
    let child = b.child(i);
    let type = child.type == linebreakReplacement ? a.type.schema.nodes.text : child.type;
    match = match.matchType(type);
    if (!match) return false;
    if (!a.type.allowsMarks(child.marks)) return false;
  }
  return match.validEnd;
}
function joinable(a, b) {
  return !!(a && b && !a.isLeaf && canAppendWithSubstitutedLinebreaks(a, b));
}
function joinPoint(doc, pos, dir = -1) {
  let $pos = doc.resolve(pos);
  for (let d = $pos.depth;; d--) {
    let before,
      after,
      index = $pos.index(d);
    if (d == $pos.depth) {
      before = $pos.nodeBefore;
      after = $pos.nodeAfter;
    } else if (dir > 0) {
      before = $pos.node(d + 1);
      index++;
      after = $pos.node(d).maybeChild(index);
    } else {
      before = $pos.node(d).maybeChild(index - 1);
      after = $pos.node(d + 1);
    }
    if (before && !before.isTextblock && joinable(before, after) && $pos.node(d).canReplace(index, index + 1)) return pos;
    if (d == 0) break;
    pos = dir < 0 ? $pos.before(d) : $pos.after(d);
  }
}
function join(tr, pos, depth) {
  let convertNewlines = null;
  let {
    linebreakReplacement
  } = tr.doc.type.schema;
  let $before = tr.doc.resolve(pos - depth),
    beforeType = $before.node().type;
  if (linebreakReplacement && beforeType.inlineContent) {
    let pre = beforeType.whitespace == "pre";
    let supportLinebreak = !!beforeType.contentMatch.matchType(linebreakReplacement);
    if (pre && !supportLinebreak) convertNewlines = false;else if (!pre && supportLinebreak) convertNewlines = true;
  }
  let mapFrom = tr.steps.length;
  if (convertNewlines === false) {
    let $after = tr.doc.resolve(pos + depth);
    replaceLinebreaks(tr, $after.node(), $after.before(), mapFrom);
  }
  if (beforeType.inlineContent) clearIncompatible(tr, pos + depth - 1, beforeType, $before.node().contentMatchAt($before.index()), convertNewlines == null);
  let mapping = tr.mapping.slice(mapFrom),
    start = mapping.map(pos - depth);
  tr.step(new ReplaceStep(start, mapping.map(pos + depth, -1), import_prosemirror_model.Slice.empty, true));
  if (convertNewlines === true) {
    let $full = tr.doc.resolve(start);
    replaceNewlines(tr, $full.node(), $full.before(), tr.steps.length);
  }
  return tr;
}
function insertPoint(doc, pos, nodeType) {
  let $pos = doc.resolve(pos);
  if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType)) return pos;
  if ($pos.parentOffset == 0) for (let d = $pos.depth - 1; d >= 0; d--) {
    let index = $pos.index(d);
    if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.before(d + 1);
    if (index > 0) return null;
  }
  if ($pos.parentOffset == $pos.parent.content.size) for (let d = $pos.depth - 1; d >= 0; d--) {
    let index = $pos.indexAfter(d);
    if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.after(d + 1);
    if (index < $pos.node(d).childCount) return null;
  }
  return null;
}
function dropPoint(doc, pos, slice) {
  let $pos = doc.resolve(pos);
  if (!slice.content.size) return pos;
  let content = slice.content;
  for (let i = 0; i < slice.openStart; i++) content = content.firstChild.content;
  for (let pass = 1; pass <= (slice.openStart == 0 && slice.size ? 2 : 1); pass++) {
    for (let d = $pos.depth; d >= 0; d--) {
      let bias = d == $pos.depth ? 0 : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2 ? -1 : 1;
      let insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
      let parent = $pos.node(d),
        fits = false;
      if (pass == 1) {
        fits = parent.canReplace(insertPos, insertPos, content);
      } else {
        let wrapping = parent.contentMatchAt(insertPos).findWrapping(content.firstChild.type);
        fits = wrapping && parent.canReplaceWith(insertPos, insertPos, wrapping[0]);
      }
      if (fits) return bias == 0 ? $pos.pos : bias < 0 ? $pos.before(d + 1) : $pos.after(d + 1);
    }
  }
  return null;
}
function replaceStep(doc, from, to = from, slice = import_prosemirror_model.Slice.empty) {
  if (from == to && !slice.size) return null;
  let $from = doc.resolve(from),
    $to = doc.resolve(to);
  if (fitsTrivially($from, $to, slice)) return new ReplaceStep(from, to, slice);
  return new Fitter($from, $to, slice).fit();
}
function fitsTrivially($from, $to, slice) {
  return !slice.openStart && !slice.openEnd && $from.start() == $to.start() && $from.parent.canReplace($from.index(), $to.index(), slice.content);
}
var Fitter = class {
  constructor($from, $to, unplaced) {
    this.$from = $from;
    this.$to = $to;
    this.unplaced = unplaced;
    this.frontier = [];
    this.placed = import_prosemirror_model.Fragment.empty;
    for (let i = 0; i <= $from.depth; i++) {
      let node = $from.node(i);
      this.frontier.push({
        type: node.type,
        match: node.contentMatchAt($from.indexAfter(i))
      });
    }
    for (let i = $from.depth; i > 0; i--) this.placed = import_prosemirror_model.Fragment.from($from.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    while (this.unplaced.size) {
      let fit = this.findFittable();
      if (fit) this.placeNodes(fit);else this.openMore() || this.dropNode();
    }
    let moveInline = this.mustMoveInline(),
      placedSize = this.placed.size - this.depth - this.$from.depth;
    let $from = this.$from,
      $to = this.close(moveInline < 0 ? this.$to : $from.doc.resolve(moveInline));
    if (!$to) return null;
    let content = this.placed,
      openStart = $from.depth,
      openEnd = $to.depth;
    while (openStart && openEnd && content.childCount == 1) {
      content = content.firstChild.content;
      openStart--;
      openEnd--;
    }
    let slice = new import_prosemirror_model.Slice(content, openStart, openEnd);
    if (moveInline > -1) return new ReplaceAroundStep($from.pos, moveInline, this.$to.pos, this.$to.end(), slice, placedSize);
    if (slice.size || $from.pos != this.$to.pos) return new ReplaceStep($from.pos, $to.pos, slice);
    return null;
  }
  findFittable() {
    let startDepth = this.unplaced.openStart;
    for (let cur = this.unplaced.content, d = 0, openEnd = this.unplaced.openEnd; d < startDepth; d++) {
      let node = cur.firstChild;
      if (cur.childCount > 1) openEnd = 0;
      if (node.type.spec.isolating && openEnd <= d) {
        startDepth = d;
        break;
      }
      cur = node.content;
    }
    for (let pass = 1; pass <= 2; pass++) {
      for (let sliceDepth = pass == 1 ? startDepth : this.unplaced.openStart; sliceDepth >= 0; sliceDepth--) {
        let fragment,
          parent = null;
        if (sliceDepth) {
          parent = contentAt(this.unplaced.content, sliceDepth - 1).firstChild;
          fragment = parent.content;
        } else {
          fragment = this.unplaced.content;
        }
        let first = fragment.firstChild;
        for (let frontierDepth = this.depth; frontierDepth >= 0; frontierDepth--) {
          let {
              type,
              match
            } = this.frontier[frontierDepth],
            wrap2,
            inject = null;
          if (pass == 1 && (first ? match.matchType(first.type) || (inject = match.fillBefore(import_prosemirror_model.Fragment.from(first), false)) : parent && type.compatibleContent(parent.type))) return {
            sliceDepth,
            frontierDepth,
            parent,
            inject
          };else if (pass == 2 && first && (wrap2 = match.findWrapping(first.type))) return {
            sliceDepth,
            frontierDepth,
            parent,
            wrap: wrap2
          };
          if (parent && match.matchType(parent.type)) break;
        }
      }
    }
  }
  openMore() {
    let {
      content,
      openStart,
      openEnd
    } = this.unplaced;
    let inner = contentAt(content, openStart);
    if (!inner.childCount || inner.firstChild.isLeaf) return false;
    this.unplaced = new import_prosemirror_model.Slice(content, openStart + 1, Math.max(openEnd, inner.size + openStart >= content.size - openEnd ? openStart + 1 : 0));
    return true;
  }
  dropNode() {
    let {
      content,
      openStart,
      openEnd
    } = this.unplaced;
    let inner = contentAt(content, openStart);
    if (inner.childCount <= 1 && openStart > 0) {
      let openAtEnd = content.size - openStart <= openStart + inner.size;
      this.unplaced = new import_prosemirror_model.Slice(dropFromFragment(content, openStart - 1, 1), openStart - 1, openAtEnd ? openStart - 1 : openEnd);
    } else {
      this.unplaced = new import_prosemirror_model.Slice(dropFromFragment(content, openStart, 1), openStart, openEnd);
    }
  }
  placeNodes({
    sliceDepth,
    frontierDepth,
    parent,
    inject,
    wrap: wrap2
  }) {
    while (this.depth > frontierDepth) this.closeFrontierNode();
    if (wrap2) for (let i = 0; i < wrap2.length; i++) this.openFrontierNode(wrap2[i]);
    let slice = this.unplaced,
      fragment = parent ? parent.content : slice.content;
    let openStart = slice.openStart - sliceDepth;
    let taken = 0,
      add = [];
    let {
      match,
      type
    } = this.frontier[frontierDepth];
    if (inject) {
      for (let i = 0; i < inject.childCount; i++) add.push(inject.child(i));
      match = match.matchFragment(inject);
    }
    let openEndCount = fragment.size + sliceDepth - (slice.content.size - slice.openEnd);
    while (taken < fragment.childCount) {
      let next = fragment.child(taken),
        matches = match.matchType(next.type);
      if (!matches) break;
      taken++;
      if (taken > 1 || openStart == 0 || next.content.size) {
        match = matches;
        add.push(closeNodeStart(next.mark(type.allowedMarks(next.marks)), taken == 1 ? openStart : 0, taken == fragment.childCount ? openEndCount : -1));
      }
    }
    let toEnd = taken == fragment.childCount;
    if (!toEnd) openEndCount = -1;
    this.placed = addToFragment(this.placed, frontierDepth, import_prosemirror_model.Fragment.from(add));
    this.frontier[frontierDepth].match = match;
    if (toEnd && openEndCount < 0 && parent && parent.type == this.frontier[this.depth].type && this.frontier.length > 1) this.closeFrontierNode();
    for (let i = 0, cur = fragment; i < openEndCount; i++) {
      let node = cur.lastChild;
      this.frontier.push({
        type: node.type,
        match: node.contentMatchAt(node.childCount)
      });
      cur = node.content;
    }
    this.unplaced = !toEnd ? new import_prosemirror_model.Slice(dropFromFragment(slice.content, sliceDepth, taken), slice.openStart, slice.openEnd) : sliceDepth == 0 ? import_prosemirror_model.Slice.empty : new import_prosemirror_model.Slice(dropFromFragment(slice.content, sliceDepth - 1, 1), sliceDepth - 1, openEndCount < 0 ? slice.openEnd : sliceDepth - 1);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock) return -1;
    let top = this.frontier[this.depth],
      level;
    if (!top.type.isTextblock || !contentAfterFits(this.$to, this.$to.depth, top.type, top.match, false) || this.$to.depth == this.depth && (level = this.findCloseLevel(this.$to)) && level.depth == this.depth) return -1;
    let {
        depth
      } = this.$to,
      after = this.$to.after(depth);
    while (depth > 1 && after == this.$to.end(--depth)) ++after;
    return after;
  }
  findCloseLevel($to) {
    scan: for (let i = Math.min(this.depth, $to.depth); i >= 0; i--) {
      let {
        match,
        type
      } = this.frontier[i];
      let dropInner = i < $to.depth && $to.end(i + 1) == $to.pos + ($to.depth - (i + 1));
      let fit = contentAfterFits($to, i, type, match, dropInner);
      if (!fit) continue;
      for (let d = i - 1; d >= 0; d--) {
        let {
          match: match2,
          type: type2
        } = this.frontier[d];
        let matches = contentAfterFits($to, d, type2, match2, true);
        if (!matches || matches.childCount) continue scan;
      }
      return {
        depth: i,
        fit,
        move: dropInner ? $to.doc.resolve($to.after(i + 1)) : $to
      };
    }
  }
  close($to) {
    let close = this.findCloseLevel($to);
    if (!close) return null;
    while (this.depth > close.depth) this.closeFrontierNode();
    if (close.fit.childCount) this.placed = addToFragment(this.placed, close.depth, close.fit);
    $to = close.move;
    for (let d = close.depth + 1; d <= $to.depth; d++) {
      let node = $to.node(d),
        add = node.type.contentMatch.fillBefore(node.content, true, $to.index(d));
      this.openFrontierNode(node.type, node.attrs, add);
    }
    return $to;
  }
  openFrontierNode(type, attrs = null, content) {
    let top = this.frontier[this.depth];
    top.match = top.match.matchType(type);
    this.placed = addToFragment(this.placed, this.depth, import_prosemirror_model.Fragment.from(type.create(attrs, content)));
    this.frontier.push({
      type,
      match: type.contentMatch
    });
  }
  closeFrontierNode() {
    let open = this.frontier.pop();
    let add = open.match.fillBefore(import_prosemirror_model.Fragment.empty, true);
    if (add.childCount) this.placed = addToFragment(this.placed, this.frontier.length, add);
  }
};
function dropFromFragment(fragment, depth, count) {
  if (depth == 0) return fragment.cutByIndex(count, fragment.childCount);
  return fragment.replaceChild(0, fragment.firstChild.copy(dropFromFragment(fragment.firstChild.content, depth - 1, count)));
}
function addToFragment(fragment, depth, content) {
  if (depth == 0) return fragment.append(content);
  return fragment.replaceChild(fragment.childCount - 1, fragment.lastChild.copy(addToFragment(fragment.lastChild.content, depth - 1, content)));
}
function contentAt(fragment, depth) {
  for (let i = 0; i < depth; i++) fragment = fragment.firstChild.content;
  return fragment;
}
function closeNodeStart(node, openStart, openEnd) {
  if (openStart <= 0) return node;
  let frag = node.content;
  if (openStart > 1) frag = frag.replaceChild(0, closeNodeStart(frag.firstChild, openStart - 1, frag.childCount == 1 ? openEnd - 1 : 0));
  if (openStart > 0) {
    frag = node.type.contentMatch.fillBefore(frag).append(frag);
    if (openEnd <= 0) frag = frag.append(node.type.contentMatch.matchFragment(frag).fillBefore(import_prosemirror_model.Fragment.empty, true));
  }
  return node.copy(frag);
}
function contentAfterFits($to, depth, type, match, open) {
  let node = $to.node(depth),
    index = open ? $to.indexAfter(depth) : $to.index(depth);
  if (index == node.childCount && !type.compatibleContent(node.type)) return null;
  let fit = match.fillBefore(node.content, true, index);
  return fit && !invalidMarks(type, node.content, index) ? fit : null;
}
function invalidMarks(type, fragment, start) {
  for (let i = start; i < fragment.childCount; i++) if (!type.allowsMarks(fragment.child(i).marks)) return true;
  return false;
}
function definesContent(type) {
  return type.spec.defining || type.spec.definingForContent;
}
function replaceRange(tr, from, to, slice) {
  if (!slice.size) return tr.deleteRange(from, to);
  let $from = tr.doc.resolve(from),
    $to = tr.doc.resolve(to);
  if (fitsTrivially($from, $to, slice)) return tr.step(new ReplaceStep(from, to, slice));
  let targetDepths = coveredDepths($from, tr.doc.resolve(to));
  if (targetDepths[targetDepths.length - 1] == 0) targetDepths.pop();
  let preferredTarget = -($from.depth + 1);
  targetDepths.unshift(preferredTarget);
  for (let d = $from.depth, pos = $from.pos - 1; d > 0; d--, pos--) {
    let spec = $from.node(d).type.spec;
    if (spec.defining || spec.definingAsContext || spec.isolating) break;
    if (targetDepths.indexOf(d) > -1) preferredTarget = d;else if ($from.before(d) == pos) targetDepths.splice(1, 0, -d);
  }
  let preferredTargetIndex = targetDepths.indexOf(preferredTarget);
  let leftNodes = [],
    preferredDepth = slice.openStart;
  for (let content = slice.content, i = 0;; i++) {
    let node = content.firstChild;
    leftNodes.push(node);
    if (i == slice.openStart) break;
    content = node.content;
  }
  for (let d = preferredDepth - 1; d >= 0; d--) {
    let leftNode = leftNodes[d],
      def = definesContent(leftNode.type);
    if (def && !leftNode.sameMarkup($from.node(Math.abs(preferredTarget) - 1))) preferredDepth = d;else if (def || !leftNode.type.isTextblock) break;
  }
  for (let j = slice.openStart; j >= 0; j--) {
    let openDepth = (j + preferredDepth + 1) % (slice.openStart + 1);
    let insert = leftNodes[openDepth];
    if (!insert) continue;
    for (let i = 0; i < targetDepths.length; i++) {
      let targetDepth = targetDepths[(i + preferredTargetIndex) % targetDepths.length],
        expand = true;
      if (targetDepth < 0) {
        expand = false;
        targetDepth = -targetDepth;
      }
      let parent = $from.node(targetDepth - 1),
        index = $from.index(targetDepth - 1);
      if (parent.canReplaceWith(index, index, insert.type, insert.marks)) return tr.replace($from.before(targetDepth), expand ? $to.after(targetDepth) : to, new import_prosemirror_model.Slice(closeFragment(slice.content, 0, slice.openStart, openDepth), openDepth, slice.openEnd));
    }
  }
  let startSteps = tr.steps.length;
  for (let i = targetDepths.length - 1; i >= 0; i--) {
    tr.replace(from, to, slice);
    if (tr.steps.length > startSteps) break;
    let depth = targetDepths[i];
    if (depth < 0) continue;
    from = $from.before(depth);
    to = $to.after(depth);
  }
}
function closeFragment(fragment, depth, oldOpen, newOpen, parent) {
  if (depth < oldOpen) {
    let first = fragment.firstChild;
    fragment = fragment.replaceChild(0, first.copy(closeFragment(first.content, depth + 1, oldOpen, newOpen, first)));
  }
  if (depth > newOpen) {
    let match = parent.contentMatchAt(0);
    let start = match.fillBefore(fragment).append(fragment);
    fragment = start.append(match.matchFragment(start).fillBefore(import_prosemirror_model.Fragment.empty, true));
  }
  return fragment;
}
function replaceRangeWith(tr, from, to, node) {
  if (!node.isInline && from == to && tr.doc.resolve(from).parent.content.size) {
    let point = insertPoint(tr.doc, from, node.type);
    if (point != null) from = to = point;
  }
  tr.replaceRange(from, to, new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(node), 0, 0));
}
function deleteRange(tr, from, to) {
  let $from = tr.doc.resolve(from),
    $to = tr.doc.resolve(to);
  let covered = coveredDepths($from, $to);
  for (let i = 0; i < covered.length; i++) {
    let depth = covered[i],
      last = i == covered.length - 1;
    if (last && depth == 0 || $from.node(depth).type.contentMatch.validEnd) return tr.delete($from.start(depth), $to.end(depth));
    if (depth > 0 && (last || $from.node(depth - 1).canReplace($from.index(depth - 1), $to.indexAfter(depth - 1)))) return tr.delete($from.before(depth), $to.after(depth));
  }
  for (let d = 1; d <= $from.depth && d <= $to.depth; d++) {
    if (from - $from.start(d) == $from.depth - d && to > $from.end(d) && $to.end(d) - to != $to.depth - d && $from.start(d - 1) == $to.start(d - 1) && $from.node(d - 1).canReplace($from.index(d - 1), $to.index(d - 1))) return tr.delete($from.before(d), to);
  }
  tr.delete(from, to);
}
function coveredDepths($from, $to) {
  let result = [],
    minDepth = Math.min($from.depth, $to.depth);
  for (let d = minDepth; d >= 0; d--) {
    let start = $from.start(d);
    if (start < $from.pos - ($from.depth - d) || $to.end(d) > $to.pos + ($to.depth - d) || $from.node(d).type.spec.isolating || $to.node(d).type.spec.isolating) break;
    if (start == $to.start(d) || d == $from.depth && d == $to.depth && $from.parent.inlineContent && $to.parent.inlineContent && d && $to.start(d - 1) == start - 1) result.push(d);
  }
  return result;
}
var AttrStep = class extends Step {
  constructor(pos, attr, value) {
    super();
    this.pos = pos;
    this.attr = attr;
    this.value = value;
  }
  apply(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node) return StepResult.fail("No node at attribute step's position");
    let attrs = /* @__PURE__ */Object.create(null);
    for (let name in node.attrs) attrs[name] = node.attrs[name];
    attrs[this.attr] = this.value;
    let updated = node.type.create(attrs, null, node.marks);
    return StepResult.fromReplace(doc, this.pos, this.pos + 1, new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  getMap() {
    return StepMap.empty;
  }
  invert(doc) {
    return new AttrStep(this.pos, this.attr, doc.nodeAt(this.pos).attrs[this.attr]);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new AttrStep(pos.pos, this.attr, this.value);
  }
  toJSON() {
    return {
      stepType: "attr",
      pos: this.pos,
      attr: this.attr,
      value: this.value
    };
  }
  static fromJSON(schema, json) {
    if (typeof json.pos != "number" || typeof json.attr != "string") throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new AttrStep(json.pos, json.attr, json.value);
  }
};
Step.jsonID("attr", AttrStep);
var DocAttrStep = class extends Step {
  constructor(attr, value) {
    super();
    this.attr = attr;
    this.value = value;
  }
  apply(doc) {
    let attrs = /* @__PURE__ */Object.create(null);
    for (let name in doc.attrs) attrs[name] = doc.attrs[name];
    attrs[this.attr] = this.value;
    let updated = doc.type.create(attrs, doc.content, doc.marks);
    return StepResult.ok(updated);
  }
  getMap() {
    return StepMap.empty;
  }
  invert(doc) {
    return new DocAttrStep(this.attr, doc.attrs[this.attr]);
  }
  map(mapping) {
    return this;
  }
  toJSON() {
    return {
      stepType: "docAttr",
      attr: this.attr,
      value: this.value
    };
  }
  static fromJSON(schema, json) {
    if (typeof json.attr != "string") throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new DocAttrStep(json.attr, json.value);
  }
};
Step.jsonID("docAttr", DocAttrStep);
var TransformError = class extends Error {};
TransformError = function TransformError2(message) {
  let err = Error.call(this, message);
  err.__proto__ = TransformError2.prototype;
  return err;
};
TransformError.prototype = Object.create(Error.prototype);
TransformError.prototype.constructor = TransformError;
TransformError.prototype.name = "TransformError";
var Transform = class {
  constructor(doc) {
    this.doc = doc;
    this.steps = [];
    this.docs = [];
    this.mapping = new Mapping();
  }
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  step(step) {
    let result = this.maybeStep(step);
    if (result.failed) throw new TransformError(result.failed);
    return this;
  }
  maybeStep(step) {
    let result = step.apply(this.doc);
    if (!result.failed) this.addStep(step, result.doc);
    return result;
  }
  get docChanged() {
    return this.steps.length > 0;
  }
  addStep(step, doc) {
    this.docs.push(this.doc);
    this.steps.push(step);
    this.mapping.appendMap(step.getMap());
    this.doc = doc;
  }
  replace(from, to = from, slice = import_prosemirror_model.Slice.empty) {
    let step = replaceStep(this.doc, from, to, slice);
    if (step) this.step(step);
    return this;
  }
  replaceWith(from, to, content) {
    return this.replace(from, to, new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(content), 0, 0));
  }
  delete(from, to) {
    return this.replace(from, to, import_prosemirror_model.Slice.empty);
  }
  insert(pos, content) {
    return this.replaceWith(pos, pos, content);
  }
  replaceRange(from, to, slice) {
    replaceRange(this, from, to, slice);
    return this;
  }
  replaceRangeWith(from, to, node) {
    replaceRangeWith(this, from, to, node);
    return this;
  }
  deleteRange(from, to) {
    deleteRange(this, from, to);
    return this;
  }
  lift(range, target) {
    lift(this, range, target);
    return this;
  }
  join(pos, depth = 1) {
    join(this, pos, depth);
    return this;
  }
  wrap(range, wrappers) {
    wrap(this, range, wrappers);
    return this;
  }
  setBlockType(from, to = from, type, attrs = null) {
    setBlockType(this, from, to, type, attrs);
    return this;
  }
  setNodeMarkup(pos, type, attrs = null, marks) {
    setNodeMarkup(this, pos, type, attrs, marks);
    return this;
  }
  setNodeAttribute(pos, attr, value) {
    this.step(new AttrStep(pos, attr, value));
    return this;
  }
  setDocAttribute(attr, value) {
    this.step(new DocAttrStep(attr, value));
    return this;
  }
  addNodeMark(pos, mark) {
    this.step(new AddNodeMarkStep(pos, mark));
    return this;
  }
  removeNodeMark(pos, mark) {
    let node = this.doc.nodeAt(pos);
    if (!node) throw new RangeError("No node at position " + pos);
    if (mark instanceof import_prosemirror_model.Mark) {
      if (mark.isInSet(node.marks)) this.step(new RemoveNodeMarkStep(pos, mark));
    } else {
      let set = node.marks,
        found,
        steps = [];
      while (found = mark.isInSet(set)) {
        steps.push(new RemoveNodeMarkStep(pos, found));
        set = found.removeFromSet(set);
      }
      for (let i = steps.length - 1; i >= 0; i--) this.step(steps[i]);
    }
    return this;
  }
  split(pos, depth = 1, typesAfter) {
    split(this, pos, depth, typesAfter);
    return this;
  }
  addMark(from, to, mark) {
    addMark(this, from, to, mark);
    return this;
  }
  removeMark(from, to, mark) {
    removeMark(this, from, to, mark);
    return this;
  }
  clearIncompatible(pos, parentType, match) {
    clearIncompatible(this, pos, parentType, match);
    return this;
  }
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcm9zZW1pcnJvci10cmFuc2Zvcm0uMS4xMC40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Byb3NlbWlycm9yLXRyYW5zZm9ybS9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3NlbWlycm9yX3RyYW5zZm9ybV8xXzEwXzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQWRkTWFya1N0ZXAiLCJBZGROb2RlTWFya1N0ZXAiLCJBdHRyU3RlcCIsIkRvY0F0dHJTdGVwIiwiTWFwUmVzdWx0IiwiTWFwcGluZyIsIlJlbW92ZU1hcmtTdGVwIiwiUmVtb3ZlTm9kZU1hcmtTdGVwIiwiUmVwbGFjZUFyb3VuZFN0ZXAiLCJSZXBsYWNlU3RlcCIsIlN0ZXAiLCJTdGVwTWFwIiwiU3RlcFJlc3VsdCIsIlRyYW5zZm9ybSIsIlRyYW5zZm9ybUVycm9yIiwiY2FuSm9pbiIsImNhblNwbGl0IiwiZHJvcFBvaW50IiwiZmluZFdyYXBwaW5nIiwiaW5zZXJ0UG9pbnQiLCJqb2luUG9pbnQiLCJsaWZ0VGFyZ2V0IiwicmVwbGFjZVN0ZXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3Byb3NlbWlycm9yX21vZGVsIiwicmVxdWlyZSIsImxvd2VyMTYiLCJmYWN0b3IxNiIsIk1hdGgiLCJwb3ciLCJtYWtlUmVjb3ZlciIsImluZGV4Iiwib2Zmc2V0IiwicmVjb3ZlckluZGV4IiwidmFsdWUiLCJyZWNvdmVyT2Zmc2V0IiwiREVMX0JFRk9SRSIsIkRFTF9BRlRFUiIsIkRFTF9BQ1JPU1MiLCJERUxfU0lERSIsImNvbnN0cnVjdG9yIiwicG9zIiwiZGVsSW5mbyIsInJlY292ZXIiLCJkZWxldGVkIiwiZGVsZXRlZEJlZm9yZSIsImRlbGV0ZWRBZnRlciIsImRlbGV0ZWRBY3Jvc3MiLCJyYW5nZXMiLCJpbnZlcnRlZCIsImxlbmd0aCIsImVtcHR5IiwiZGlmZiIsImkiLCJtYXBSZXN1bHQiLCJhc3NvYyIsIl9tYXAiLCJtYXAiLCJzaW1wbGUiLCJvbGRJbmRleCIsIm5ld0luZGV4Iiwic3RhcnQiLCJvbGRTaXplIiwibmV3U2l6ZSIsImVuZCIsInNpZGUiLCJyZXN1bHQiLCJkZWwiLCJ0b3VjaGVzIiwiZm9yRWFjaCIsImYiLCJvbGRTdGFydCIsIm5ld1N0YXJ0IiwiaW52ZXJ0IiwidG9TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwibiIsIm1hcHMiLCJtaXJyb3IiLCJmcm9tIiwidG8iLCJfbWFwcyIsIm93bkRhdGEiLCJzbGljZSIsImFwcGVuZE1hcCIsIm1pcnJvcnMiLCJwdXNoIiwic2V0TWlycm9yIiwiYXBwZW5kTWFwcGluZyIsIm1hcHBpbmciLCJzdGFydFNpemUiLCJtaXJyIiwiZ2V0TWlycm9yIiwibSIsImFwcGVuZE1hcHBpbmdJbnZlcnRlZCIsInRvdGFsU2l6ZSIsImludmVyc2UiLCJjb3JyIiwic3RlcHNCeUlEIiwiT2JqZWN0IiwiY3JlYXRlIiwiZ2V0TWFwIiwibWVyZ2UiLCJvdGhlciIsImZyb21KU09OIiwic2NoZW1hIiwianNvbiIsInN0ZXBUeXBlIiwiUmFuZ2VFcnJvciIsInR5cGUiLCJqc29uSUQiLCJpZCIsInN0ZXBDbGFzcyIsInByb3RvdHlwZSIsImRvYyIsImZhaWxlZCIsIm9rIiwiZmFpbCIsIm1lc3NhZ2UiLCJmcm9tUmVwbGFjZSIsInJlcGxhY2UiLCJlIiwiUmVwbGFjZUVycm9yIiwibWFwRnJhZ21lbnQiLCJmcmFnbWVudCIsInBhcmVudCIsIm1hcHBlZCIsImNoaWxkQ291bnQiLCJjaGlsZCIsImNvbnRlbnQiLCJzaXplIiwiY29weSIsImlzSW5saW5lIiwiRnJhZ21lbnQiLCJmcm9tQXJyYXkiLCJtYXJrIiwiYXBwbHkiLCJvbGRTbGljZSIsIiRmcm9tIiwicmVzb2x2ZSIsIm5vZGUiLCJzaGFyZWREZXB0aCIsIlNsaWNlIiwicGFyZW50MiIsImlzQXRvbSIsImFsbG93c01hcmtUeXBlIiwiYWRkVG9TZXQiLCJtYXJrcyIsIm9wZW5TdGFydCIsIm9wZW5FbmQiLCJlcSIsIm1pbiIsIm1heCIsInRvSlNPTiIsIm1hcmtGcm9tSlNPTiIsInJlbW92ZUZyb21TZXQiLCJub2RlQXQiLCJ1cGRhdGVkIiwiYXR0cnMiLCJpc0xlYWYiLCJuZXdTZXQiLCJpc0luU2V0Iiwic3RydWN0dXJlIiwiY29udGVudEJldHdlZW4iLCJhcHBlbmQiLCJnYXBGcm9tIiwiZ2FwVG8iLCJpbnNlcnQiLCJnYXAiLCJpbnNlcnRlZCIsImluc2VydEF0IiwicmVtb3ZlQmV0d2VlbiIsImRpc3QiLCJkZXB0aCIsImluZGV4QWZ0ZXIiLCJuZXh0IiwibWF5YmVDaGlsZCIsImZpcnN0Q2hpbGQiLCJhZGRNYXJrIiwidHIiLCJyZW1vdmVkIiwiYWRkZWQiLCJyZW1vdmluZyIsImFkZGluZyIsIm5vZGVzQmV0d2VlbiIsIm5vZGVTaXplIiwicyIsInN0ZXAiLCJyZW1vdmVNYXJrIiwibWF0Y2hlZCIsInRvUmVtb3ZlIiwiTWFya1R5cGUiLCJzZXQiLCJmb3VuZCIsInN0eWxlIiwiaiIsImNsZWFySW5jb21wYXRpYmxlIiwicGFyZW50VHlwZSIsIm1hdGNoIiwiY29udGVudE1hdGNoIiwiY2xlYXJOZXdsaW5lcyIsInJlcGxTdGVwcyIsImN1ciIsImFsbG93ZWQiLCJtYXRjaFR5cGUiLCJpc1RleHQiLCJ3aGl0ZXNwYWNlIiwibmV3bGluZSIsImV4ZWMiLCJ0ZXh0IiwiYWxsb3dlZE1hcmtzIiwidmFsaWRFbmQiLCJmaWxsIiwiZmlsbEJlZm9yZSIsImNhbkN1dCIsImNhblJlcGxhY2UiLCJyYW5nZSIsImN1dEJ5SW5kZXgiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCIkdG8iLCJzcGVjIiwiaXNvbGF0aW5nIiwibGlmdCIsInRhcmdldCIsImdhcFN0YXJ0IiwiYmVmb3JlIiwiZ2FwRW5kIiwiYWZ0ZXIiLCJkIiwic3BsaXR0aW5nIiwibm9kZVR5cGUiLCJpbm5lclJhbmdlIiwiYXJvdW5kIiwiZmluZFdyYXBwaW5nT3V0c2lkZSIsImlubmVyIiwiZmluZFdyYXBwaW5nSW5zaWRlIiwid2l0aEF0dHJzIiwiY29uY2F0IiwiY29udGVudE1hdGNoQXQiLCJvdXRlciIsImNhblJlcGxhY2VXaXRoIiwiaW5zaWRlIiwibGFzdFR5cGUiLCJpbm5lck1hdGNoIiwid3JhcCIsIndyYXBwZXJzIiwibWF0Y2hGcmFnbWVudCIsInNldEJsb2NrVHlwZSIsImlzVGV4dGJsb2NrIiwibWFwRnJvbSIsInN0ZXBzIiwiYXR0cnNIZXJlIiwiaGFzTWFya3VwIiwiY2FuQ2hhbmdlVHlwZSIsImNvbnZlcnROZXdsaW5lcyIsImxpbmVicmVha1JlcGxhY2VtZW50IiwicHJlIiwic3VwcG9ydExpbmVicmVhayIsInJlcGxhY2VMaW5lYnJlYWtzIiwic3RhcnRNIiwiZW5kTSIsInJlcGxhY2VOZXdsaW5lcyIsInJlcGxhY2VXaXRoIiwiJHBvcyIsInNldE5vZGVNYXJrdXAiLCJuZXdOb2RlIiwidmFsaWRDb250ZW50IiwibmFtZSIsInR5cGVzQWZ0ZXIiLCJiYXNlIiwiaW5uZXJUeXBlIiwiaW5kZXgyIiwicmVzdCIsIm92ZXJyaWRlQ2hpbGQiLCJyZXBsYWNlQ2hpbGQiLCJiYXNlVHlwZSIsInNwbGl0IiwidHlwZUFmdGVyIiwiam9pbmFibGUiLCJub2RlQmVmb3JlIiwibm9kZUFmdGVyIiwiY2FuQXBwZW5kV2l0aFN1YnN0aXR1dGVkTGluZWJyZWFrcyIsImEiLCJiIiwiY29tcGF0aWJsZUNvbnRlbnQiLCJub2RlcyIsImFsbG93c01hcmtzIiwiZGlyIiwiam9pbiIsIiRiZWZvcmUiLCJiZWZvcmVUeXBlIiwiaW5saW5lQ29udGVudCIsIiRhZnRlciIsIiRmdWxsIiwicGFyZW50T2Zmc2V0IiwicGFzcyIsImJpYXMiLCJpbnNlcnRQb3MiLCJmaXRzIiwid3JhcHBpbmciLCJmaXRzVHJpdmlhbGx5IiwiRml0dGVyIiwiZml0IiwidW5wbGFjZWQiLCJmcm9udGllciIsInBsYWNlZCIsImZpbmRGaXR0YWJsZSIsInBsYWNlTm9kZXMiLCJvcGVuTW9yZSIsImRyb3BOb2RlIiwibW92ZUlubGluZSIsIm11c3RNb3ZlSW5saW5lIiwicGxhY2VkU2l6ZSIsImNsb3NlIiwic3RhcnREZXB0aCIsInNsaWNlRGVwdGgiLCJjb250ZW50QXQiLCJmaXJzdCIsImZyb250aWVyRGVwdGgiLCJ3cmFwMiIsImluamVjdCIsIm9wZW5BdEVuZCIsImRyb3BGcm9tRnJhZ21lbnQiLCJjbG9zZUZyb250aWVyTm9kZSIsIm9wZW5Gcm9udGllck5vZGUiLCJ0YWtlbiIsImFkZCIsIm9wZW5FbmRDb3VudCIsIm1hdGNoZXMiLCJjbG9zZU5vZGVTdGFydCIsInRvRW5kIiwiYWRkVG9GcmFnbWVudCIsImxhc3RDaGlsZCIsInRvcCIsImxldmVsIiwiY29udGVudEFmdGVyRml0cyIsImZpbmRDbG9zZUxldmVsIiwic2NhbiIsImRyb3BJbm5lciIsIm1hdGNoMiIsInR5cGUyIiwibW92ZSIsIm9wZW4iLCJwb3AiLCJjb3VudCIsImZyYWciLCJpbnZhbGlkTWFya3MiLCJkZWZpbmVzQ29udGVudCIsImRlZmluaW5nIiwiZGVmaW5pbmdGb3JDb250ZW50IiwicmVwbGFjZVJhbmdlIiwiZGVsZXRlUmFuZ2UiLCJ0YXJnZXREZXB0aHMiLCJjb3ZlcmVkRGVwdGhzIiwicHJlZmVycmVkVGFyZ2V0IiwidW5zaGlmdCIsImRlZmluaW5nQXNDb250ZXh0IiwiaW5kZXhPZiIsInNwbGljZSIsInByZWZlcnJlZFRhcmdldEluZGV4IiwibGVmdE5vZGVzIiwicHJlZmVycmVkRGVwdGgiLCJsZWZ0Tm9kZSIsImRlZiIsInNhbWVNYXJrdXAiLCJhYnMiLCJvcGVuRGVwdGgiLCJ0YXJnZXREZXB0aCIsImV4cGFuZCIsImNsb3NlRnJhZ21lbnQiLCJzdGFydFN0ZXBzIiwib2xkT3BlbiIsIm5ld09wZW4iLCJyZXBsYWNlUmFuZ2VXaXRoIiwicG9pbnQiLCJjb3ZlcmVkIiwibGFzdCIsImRlbGV0ZSIsIm1pbkRlcHRoIiwiYXR0ciIsIkVycm9yIiwiVHJhbnNmb3JtRXJyb3IyIiwiZXJyIiwiY2FsbCIsIl9fcHJvdG9fXyIsImRvY3MiLCJtYXliZVN0ZXAiLCJhZGRTdGVwIiwiZG9jQ2hhbmdlZCIsInNldE5vZGVBdHRyaWJ1dGUiLCJzZXREb2NBdHRyaWJ1dGUiLCJhZGROb2RlTWFyayIsInJlbW92ZU5vZGVNYXJrIiwiTWFyayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0NBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQ0FBQTtFQUFBRSxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVB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eUJwRSxHQUFHO0lBQ3JELElBQUkrRixJQUFBLFlBQWdCaEgsd0JBQUEsQ0FBQW1YLElBQUEsRUFBTTtNQUN0QixJQUFJblEsSUFBQSxDQUFLMEIsT0FBQSxDQUFRckIsSUFBQSxDQUFLTyxLQUFLLEdBQ3ZCLEtBQUt3QyxJQUFBLENBQUssSUFBSXZMLGtCQUFBLENBQW1Cb0MsR0FBQSxFQUFLK0YsSUFBSSxDQUFDO0lBQ25ELE9BQ0s7TUFDRCxJQUFJeUQsR0FBQSxHQUFNcEQsSUFBQSxDQUFLTyxLQUFBO1FBQU84QyxLQUFBO1FBQU8wRCxLQUFBLEdBQVEsRUFBQztNQUN0QyxPQUFPMUQsS0FBQSxHQUFRMUQsSUFBQSxDQUFLMEIsT0FBQSxDQUFRK0IsR0FBRyxHQUFHO1FBQzlCMkQsS0FBQSxDQUFNckssSUFBQSxDQUFLLElBQUlsRixrQkFBQSxDQUFtQm9DLEdBQUEsRUFBS3lKLEtBQUssQ0FBQztRQUM3Q0QsR0FBQSxHQUFNQyxLQUFBLENBQU10QyxhQUFBLENBQWNxQyxHQUFHO01BQ2pDO01BQ0EsU0FBUzVJLENBQUEsR0FBSXVNLEtBQUEsQ0FBTTFNLE1BQUEsR0FBUyxHQUFHRyxDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUNuQyxLQUFLdUksSUFBQSxDQUFLZ0UsS0FBQSxDQUFNdk0sQ0FBQSxDQUFFO0lBQzFCO0lBQ0EsT0FBTztFQUNYO0VBUUFpTyxNQUFNN08sR0FBQSxFQUFLcUksS0FBQSxHQUFRLEdBQUdnRyxVQUFBLEVBQVk7SUFDOUJRLEtBQUEsQ0FBTSxNQUFNN08sR0FBQSxFQUFLcUksS0FBQSxFQUFPZ0csVUFBVTtJQUNsQyxPQUFPO0VBQ1g7RUFJQTNGLFFBQVFuRyxJQUFBLEVBQU1DLEVBQUEsRUFBSXVELElBQUEsRUFBTTtJQUNwQjJDLE9BQUEsQ0FBUSxNQUFNbkcsSUFBQSxFQUFNQyxFQUFBLEVBQUl1RCxJQUFJO0lBQzVCLE9BQU87RUFDWDtFQU9BcUQsV0FBVzdHLElBQUEsRUFBTUMsRUFBQSxFQUFJdUQsSUFBQSxFQUFNO0lBQ3ZCcUQsVUFBQSxDQUFXLE1BQU03RyxJQUFBLEVBQU1DLEVBQUEsRUFBSXVELElBQUk7SUFDL0IsT0FBTztFQUNYO0VBT0E2RCxrQkFBa0I1SixHQUFBLEVBQUs2SixVQUFBLEVBQVlDLEtBQUEsRUFBTztJQUN0Q0YsaUJBQUEsQ0FBa0IsTUFBTTVKLEdBQUEsRUFBSzZKLFVBQUEsRUFBWUMsS0FBSztJQUM5QyxPQUFPO0VBQ1g7QUFDSiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvcnZkL291dCJ9