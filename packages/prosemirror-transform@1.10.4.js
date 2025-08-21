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

// .beyond/uimport/temp/prosemirror-transform.1.10.4.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLXRyYW5zZm9ybS4xLjEwLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3ItdHJhbnNmb3JtL2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOlsicHJvc2VtaXJyb3JfdHJhbnNmb3JtXzFfMTBfNF9leHBvcnRzIiwiX19leHBvcnQiLCJBZGRNYXJrU3RlcCIsIkFkZE5vZGVNYXJrU3RlcCIsIkF0dHJTdGVwIiwiRG9jQXR0clN0ZXAiLCJNYXBSZXN1bHQiLCJNYXBwaW5nIiwiUmVtb3ZlTWFya1N0ZXAiLCJSZW1vdmVOb2RlTWFya1N0ZXAiLCJSZXBsYWNlQXJvdW5kU3RlcCIsIlJlcGxhY2VTdGVwIiwiU3RlcCIsIlN0ZXBNYXAiLCJTdGVwUmVzdWx0IiwiVHJhbnNmb3JtIiwiVHJhbnNmb3JtRXJyb3IiLCJjYW5Kb2luIiwiY2FuU3BsaXQiLCJkcm9wUG9pbnQiLCJmaW5kV3JhcHBpbmciLCJpbnNlcnRQb2ludCIsImpvaW5Qb2ludCIsImxpZnRUYXJnZXQiLCJyZXBsYWNlU3RlcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfcHJvc2VtaXJyb3JfbW9kZWwiLCJyZXF1aXJlIiwibG93ZXIxNiIsImZhY3RvcjE2IiwiTWF0aCIsInBvdyIsIm1ha2VSZWNvdmVyIiwiaW5kZXgiLCJvZmZzZXQiLCJyZWNvdmVySW5kZXgiLCJ2YWx1ZSIsInJlY292ZXJPZmZzZXQiLCJERUxfQkVGT1JFIiwiREVMX0FGVEVSIiwiREVMX0FDUk9TUyIsIkRFTF9TSURFIiwiY29uc3RydWN0b3IiLCJwb3MiLCJkZWxJbmZvIiwicmVjb3ZlciIsImRlbGV0ZWQiLCJkZWxldGVkQmVmb3JlIiwiZGVsZXRlZEFmdGVyIiwiZGVsZXRlZEFjcm9zcyIsInJhbmdlcyIsImludmVydGVkIiwibGVuZ3RoIiwiZW1wdHkiLCJkaWZmIiwiaSIsIm1hcFJlc3VsdCIsImFzc29jIiwiX21hcCIsIm1hcCIsInNpbXBsZSIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJzdGFydCIsIm9sZFNpemUiLCJuZXdTaXplIiwiZW5kIiwic2lkZSIsInJlc3VsdCIsImRlbCIsInRvdWNoZXMiLCJmb3JFYWNoIiwiZiIsIm9sZFN0YXJ0IiwibmV3U3RhcnQiLCJpbnZlcnQiLCJ0b1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJuIiwibWFwcyIsIm1pcnJvciIsImZyb20iLCJ0byIsIl9tYXBzIiwib3duRGF0YSIsInNsaWNlIiwiYXBwZW5kTWFwIiwibWlycm9ycyIsInB1c2giLCJzZXRNaXJyb3IiLCJhcHBlbmRNYXBwaW5nIiwibWFwcGluZyIsInN0YXJ0U2l6ZSIsIm1pcnIiLCJnZXRNaXJyb3IiLCJtIiwiYXBwZW5kTWFwcGluZ0ludmVydGVkIiwidG90YWxTaXplIiwiaW52ZXJzZSIsImNvcnIiLCJzdGVwc0J5SUQiLCJPYmplY3QiLCJjcmVhdGUiLCJnZXRNYXAiLCJtZXJnZSIsIm90aGVyIiwiZnJvbUpTT04iLCJzY2hlbWEiLCJqc29uIiwic3RlcFR5cGUiLCJSYW5nZUVycm9yIiwidHlwZSIsImpzb25JRCIsImlkIiwic3RlcENsYXNzIiwicHJvdG90eXBlIiwiZG9jIiwiZmFpbGVkIiwib2siLCJmYWlsIiwibWVzc2FnZSIsImZyb21SZXBsYWNlIiwicmVwbGFjZSIsImUiLCJSZXBsYWNlRXJyb3IiLCJtYXBGcmFnbWVudCIsImZyYWdtZW50IiwicGFyZW50IiwibWFwcGVkIiwiY2hpbGRDb3VudCIsImNoaWxkIiwiY29udGVudCIsInNpemUiLCJjb3B5IiwiaXNJbmxpbmUiLCJGcmFnbWVudCIsImZyb21BcnJheSIsIm1hcmsiLCJhcHBseSIsIm9sZFNsaWNlIiwiJGZyb20iLCJyZXNvbHZlIiwibm9kZSIsInNoYXJlZERlcHRoIiwiU2xpY2UiLCJwYXJlbnQyIiwiaXNBdG9tIiwiYWxsb3dzTWFya1R5cGUiLCJhZGRUb1NldCIsIm1hcmtzIiwib3BlblN0YXJ0Iiwib3BlbkVuZCIsImVxIiwibWluIiwibWF4IiwidG9KU09OIiwibWFya0Zyb21KU09OIiwicmVtb3ZlRnJvbVNldCIsIm5vZGVBdCIsInVwZGF0ZWQiLCJhdHRycyIsImlzTGVhZiIsIm5ld1NldCIsImlzSW5TZXQiLCJzdHJ1Y3R1cmUiLCJjb250ZW50QmV0d2VlbiIsImFwcGVuZCIsImdhcEZyb20iLCJnYXBUbyIsImluc2VydCIsImdhcCIsImluc2VydGVkIiwiaW5zZXJ0QXQiLCJyZW1vdmVCZXR3ZWVuIiwiZGlzdCIsImRlcHRoIiwiaW5kZXhBZnRlciIsIm5leHQiLCJtYXliZUNoaWxkIiwiZmlyc3RDaGlsZCIsImFkZE1hcmsiLCJ0ciIsInJlbW92ZWQiLCJhZGRlZCIsInJlbW92aW5nIiwiYWRkaW5nIiwibm9kZXNCZXR3ZWVuIiwibm9kZVNpemUiLCJzIiwic3RlcCIsInJlbW92ZU1hcmsiLCJtYXRjaGVkIiwidG9SZW1vdmUiLCJNYXJrVHlwZSIsInNldCIsImZvdW5kIiwic3R5bGUiLCJqIiwiY2xlYXJJbmNvbXBhdGlibGUiLCJwYXJlbnRUeXBlIiwibWF0Y2giLCJjb250ZW50TWF0Y2giLCJjbGVhck5ld2xpbmVzIiwicmVwbFN0ZXBzIiwiY3VyIiwiYWxsb3dlZCIsIm1hdGNoVHlwZSIsImlzVGV4dCIsIndoaXRlc3BhY2UiLCJuZXdsaW5lIiwiZXhlYyIsInRleHQiLCJhbGxvd2VkTWFya3MiLCJ2YWxpZEVuZCIsImZpbGwiLCJmaWxsQmVmb3JlIiwiY2FuQ3V0IiwiY2FuUmVwbGFjZSIsInJhbmdlIiwiY3V0QnlJbmRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsIiR0byIsInNwZWMiLCJpc29sYXRpbmciLCJsaWZ0IiwidGFyZ2V0IiwiZ2FwU3RhcnQiLCJiZWZvcmUiLCJnYXBFbmQiLCJhZnRlciIsImQiLCJzcGxpdHRpbmciLCJub2RlVHlwZSIsImlubmVyUmFuZ2UiLCJhcm91bmQiLCJmaW5kV3JhcHBpbmdPdXRzaWRlIiwiaW5uZXIiLCJmaW5kV3JhcHBpbmdJbnNpZGUiLCJ3aXRoQXR0cnMiLCJjb25jYXQiLCJjb250ZW50TWF0Y2hBdCIsIm91dGVyIiwiY2FuUmVwbGFjZVdpdGgiLCJpbnNpZGUiLCJsYXN0VHlwZSIsImlubmVyTWF0Y2giLCJ3cmFwIiwid3JhcHBlcnMiLCJtYXRjaEZyYWdtZW50Iiwic2V0QmxvY2tUeXBlIiwiaXNUZXh0YmxvY2siLCJtYXBGcm9tIiwic3RlcHMiLCJhdHRyc0hlcmUiLCJoYXNNYXJrdXAiLCJjYW5DaGFuZ2VUeXBlIiwiY29udmVydE5ld2xpbmVzIiwibGluZWJyZWFrUmVwbGFjZW1lbnQiLCJwcmUiLCJzdXBwb3J0TGluZWJyZWFrIiwicmVwbGFjZUxpbmVicmVha3MiLCJzdGFydE0iLCJlbmRNIiwicmVwbGFjZU5ld2xpbmVzIiwicmVwbGFjZVdpdGgiLCIkcG9zIiwic2V0Tm9kZU1hcmt1cCIsIm5ld05vZGUiLCJ2YWxpZENvbnRlbnQiLCJuYW1lIiwidHlwZXNBZnRlciIsImJhc2UiLCJpbm5lclR5cGUiLCJpbmRleDIiLCJyZXN0Iiwib3ZlcnJpZGVDaGlsZCIsInJlcGxhY2VDaGlsZCIsImJhc2VUeXBlIiwic3BsaXQiLCJ0eXBlQWZ0ZXIiLCJqb2luYWJsZSIsIm5vZGVCZWZvcmUiLCJub2RlQWZ0ZXIiLCJjYW5BcHBlbmRXaXRoU3Vic3RpdHV0ZWRMaW5lYnJlYWtzIiwiYSIsImIiLCJjb21wYXRpYmxlQ29udGVudCIsIm5vZGVzIiwiYWxsb3dzTWFya3MiLCJkaXIiLCJqb2luIiwiJGJlZm9yZSIsImJlZm9yZVR5cGUiLCJpbmxpbmVDb250ZW50IiwiJGFmdGVyIiwiJGZ1bGwiLCJwYXJlbnRPZmZzZXQiLCJwYXNzIiwiYmlhcyIsImluc2VydFBvcyIsImZpdHMiLCJ3cmFwcGluZyIsImZpdHNUcml2aWFsbHkiLCJGaXR0ZXIiLCJmaXQiLCJ1bnBsYWNlZCIsImZyb250aWVyIiwicGxhY2VkIiwiZmluZEZpdHRhYmxlIiwicGxhY2VOb2RlcyIsIm9wZW5Nb3JlIiwiZHJvcE5vZGUiLCJtb3ZlSW5saW5lIiwibXVzdE1vdmVJbmxpbmUiLCJwbGFjZWRTaXplIiwiY2xvc2UiLCJzdGFydERlcHRoIiwic2xpY2VEZXB0aCIsImNvbnRlbnRBdCIsImZpcnN0IiwiZnJvbnRpZXJEZXB0aCIsIndyYXAyIiwiaW5qZWN0Iiwib3BlbkF0RW5kIiwiZHJvcEZyb21GcmFnbWVudCIsImNsb3NlRnJvbnRpZXJOb2RlIiwib3BlbkZyb250aWVyTm9kZSIsInRha2VuIiwiYWRkIiwib3BlbkVuZENvdW50IiwibWF0Y2hlcyIsImNsb3NlTm9kZVN0YXJ0IiwidG9FbmQiLCJhZGRUb0ZyYWdtZW50IiwibGFzdENoaWxkIiwidG9wIiwibGV2ZWwiLCJjb250ZW50QWZ0ZXJGaXRzIiwiZmluZENsb3NlTGV2ZWwiLCJzY2FuIiwiZHJvcElubmVyIiwibWF0Y2gyIiwidHlwZTIiLCJtb3ZlIiwib3BlbiIsInBvcCIsImNvdW50IiwiZnJhZyIsImludmFsaWRNYXJrcyIsImRlZmluZXNDb250ZW50IiwiZGVmaW5pbmciLCJkZWZpbmluZ0ZvckNvbnRlbnQiLCJyZXBsYWNlUmFuZ2UiLCJkZWxldGVSYW5nZSIsInRhcmdldERlcHRocyIsImNvdmVyZWREZXB0aHMiLCJwcmVmZXJyZWRUYXJnZXQiLCJ1bnNoaWZ0IiwiZGVmaW5pbmdBc0NvbnRleHQiLCJpbmRleE9mIiwic3BsaWNlIiwicHJlZmVycmVkVGFyZ2V0SW5kZXgiLCJsZWZ0Tm9kZXMiLCJwcmVmZXJyZWREZXB0aCIsImxlZnROb2RlIiwiZGVmIiwic2FtZU1hcmt1cCIsImFicyIsIm9wZW5EZXB0aCIsInRhcmdldERlcHRoIiwiZXhwYW5kIiwiY2xvc2VGcmFnbWVudCIsInN0YXJ0U3RlcHMiLCJvbGRPcGVuIiwibmV3T3BlbiIsInJlcGxhY2VSYW5nZVdpdGgiLCJwb2ludCIsImNvdmVyZWQiLCJsYXN0IiwiZGVsZXRlIiwibWluRGVwdGgiLCJhdHRyIiwiRXJyb3IiLCJUcmFuc2Zvcm1FcnJvcjIiLCJlcnIiLCJjYWxsIiwiX19wcm90b19fIiwiZG9jcyIsIm1heWJlU3RlcCIsImFkZFN0ZXAiLCJkb2NDaGFuZ2VkIiwic2V0Tm9kZUF0dHJpYnV0ZSIsInNldERvY0F0dHJpYnV0ZSIsImFkZE5vZGVNYXJrIiwicmVtb3ZlTm9kZU1hcmsiLCJNYXJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQ0FBQTtBQUFBQyxRQUFBLENBQUFELG9DQUFBO0VBQUFFLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FB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LHlCQUF5QnBFLEdBQUc7SUFDckQsSUFBSStGLElBQUEsWUFBZ0JoSCx3QkFBQSxDQUFBbVgsSUFBQSxFQUFNO01BQ3RCLElBQUluUSxJQUFBLENBQUswQixPQUFBLENBQVFyQixJQUFBLENBQUtPLEtBQUssR0FDdkIsS0FBS3dDLElBQUEsQ0FBSyxJQUFJdkwsa0JBQUEsQ0FBbUJvQyxHQUFBLEVBQUsrRixJQUFJLENBQUM7SUFDbkQsT0FDSztNQUNELElBQUl5RCxHQUFBLEdBQU1wRCxJQUFBLENBQUtPLEtBQUE7UUFBTzhDLEtBQUE7UUFBTzBELEtBQUEsR0FBUSxFQUFDO01BQ3RDLE9BQU8xRCxLQUFBLEdBQVExRCxJQUFBLENBQUswQixPQUFBLENBQVErQixHQUFHLEdBQUc7UUFDOUIyRCxLQUFBLENBQU1ySyxJQUFBLENBQUssSUFBSWxGLGtCQUFBLENBQW1Cb0MsR0FBQSxFQUFLeUosS0FBSyxDQUFDO1FBQzdDRCxHQUFBLEdBQU1DLEtBQUEsQ0FBTXRDLGFBQUEsQ0FBY3FDLEdBQUc7TUFDakM7TUFDQSxTQUFTNUksQ0FBQSxHQUFJdU0sS0FBQSxDQUFNMU0sTUFBQSxHQUFTLEdBQUdHLENBQUEsSUFBSyxHQUFHQSxDQUFBLElBQ25DLEtBQUt1SSxJQUFBLENBQUtnRSxLQUFBLENBQU12TSxDQUFBLENBQUU7SUFDMUI7SUFDQSxPQUFPO0VBQ1g7RUFRQWlPLE1BQU03TyxHQUFBLEVBQUtxSSxLQUFBLEdBQVEsR0FBR2dHLFVBQUEsRUFBWTtJQUM5QlEsS0FBQSxDQUFNLE1BQU03TyxHQUFBLEVBQUtxSSxLQUFBLEVBQU9nRyxVQUFVO0lBQ2xDLE9BQU87RUFDWDtFQUlBM0YsUUFBUW5HLElBQUEsRUFBTUMsRUFBQSxFQUFJdUQsSUFBQSxFQUFNO0lBQ3BCMkMsT0FBQSxDQUFRLE1BQU1uRyxJQUFBLEVBQU1DLEVBQUEsRUFBSXVELElBQUk7SUFDNUIsT0FBTztFQUNYO0VBT0FxRCxXQUFXN0csSUFBQSxFQUFNQyxFQUFBLEVBQUl1RCxJQUFBLEVBQU07SUFDdkJxRCxVQUFBLENBQVcsTUFBTTdHLElBQUEsRUFBTUMsRUFBQSxFQUFJdUQsSUFBSTtJQUMvQixPQUFPO0VBQ1g7RUFPQTZELGtCQUFrQjVKLEdBQUEsRUFBSzZKLFVBQUEsRUFBWUMsS0FBQSxFQUFPO0lBQ3RDRixpQkFBQSxDQUFrQixNQUFNNUosR0FBQSxFQUFLNkosVUFBQSxFQUFZQyxLQUFLO0lBQzlDLE9BQU87RUFDWDtBQUNKIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9ydmQvb3V0In0=