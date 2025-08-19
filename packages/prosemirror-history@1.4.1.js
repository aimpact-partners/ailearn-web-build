System.register(["rope-sequence@1.3.4","orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["rope-sequence","1.3.4"],["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["prosemirror-history","1.4.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('rope-sequence@1.3.4', dep), dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep)],
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

// .beyond/uimport/prosemirror-history.1.4.1.js
var prosemirror_history_1_4_1_exports = {};
__export(prosemirror_history_1_4_1_exports, {
  closeHistory: () => closeHistory,
  history: () => history,
  redo: () => redo,
  redoDepth: () => redoDepth,
  redoNoScroll: () => redoNoScroll,
  undo: () => undo,
  undoDepth: () => undoDepth,
  undoNoScroll: () => undoNoScroll
});
module.exports = __toCommonJS(prosemirror_history_1_4_1_exports);

// node_modules/prosemirror-history/dist/index.js
var import_rope_sequence = __toESM(require("rope-sequence@1.3.4"), 0);
var import_prosemirror_transform = require("prosemirror-transform@1.10.4");
var import_prosemirror_state = require("prosemirror-state@1.4.3");
var max_empty_items = 500;
var Branch = class {
  constructor(items, eventCount) {
    this.items = items;
    this.eventCount = eventCount;
  }
  popEvent(state, preserveItems) {
    if (this.eventCount == 0) return null;
    let end = this.items.length;
    for (;; end--) {
      let next = this.items.get(end - 1);
      if (next.selection) {
        --end;
        break;
      }
    }
    let remap, mapFrom;
    if (preserveItems) {
      remap = this.remapping(end, this.items.length);
      mapFrom = remap.maps.length;
    }
    let transform = state.tr;
    let selection, remaining;
    let addAfter = [],
      addBefore = [];
    this.items.forEach((item, i) => {
      if (!item.step) {
        if (!remap) {
          remap = this.remapping(end, i + 1);
          mapFrom = remap.maps.length;
        }
        mapFrom--;
        addBefore.push(item);
        return;
      }
      if (remap) {
        addBefore.push(new Item(item.map));
        let step = item.step.map(remap.slice(mapFrom)),
          map;
        if (step && transform.maybeStep(step).doc) {
          map = transform.mapping.maps[transform.mapping.maps.length - 1];
          addAfter.push(new Item(map, void 0, void 0, addAfter.length + addBefore.length));
        }
        mapFrom--;
        if (map) remap.appendMap(map, mapFrom);
      } else {
        transform.maybeStep(item.step);
      }
      if (item.selection) {
        selection = remap ? item.selection.map(remap.slice(mapFrom)) : item.selection;
        remaining = new Branch(this.items.slice(0, end).append(addBefore.reverse().concat(addAfter)), this.eventCount - 1);
        return false;
      }
    }, this.items.length, 0);
    return {
      remaining,
      transform,
      selection
    };
  }
  addTransform(transform, selection, histOptions, preserveItems) {
    let newItems = [],
      eventCount = this.eventCount;
    let oldItems = this.items,
      lastItem = !preserveItems && oldItems.length ? oldItems.get(oldItems.length - 1) : null;
    for (let i = 0; i < transform.steps.length; i++) {
      let step = transform.steps[i].invert(transform.docs[i]);
      let item = new Item(transform.mapping.maps[i], step, selection),
        merged;
      if (merged = lastItem && lastItem.merge(item)) {
        item = merged;
        if (i) newItems.pop();else oldItems = oldItems.slice(0, oldItems.length - 1);
      }
      newItems.push(item);
      if (selection) {
        eventCount++;
        selection = void 0;
      }
      if (!preserveItems) lastItem = item;
    }
    let overflow = eventCount - histOptions.depth;
    if (overflow > DEPTH_OVERFLOW) {
      oldItems = cutOffEvents(oldItems, overflow);
      eventCount -= overflow;
    }
    return new Branch(oldItems.append(newItems), eventCount);
  }
  remapping(from, to) {
    let maps = new import_prosemirror_transform.Mapping();
    this.items.forEach((item, i) => {
      let mirrorPos = item.mirrorOffset != null && i - item.mirrorOffset >= from ? maps.maps.length - item.mirrorOffset : void 0;
      maps.appendMap(item.map, mirrorPos);
    }, from, to);
    return maps;
  }
  addMaps(array) {
    if (this.eventCount == 0) return this;
    return new Branch(this.items.append(array.map(map => new Item(map))), this.eventCount);
  }
  rebased(rebasedTransform, rebasedCount) {
    if (!this.eventCount) return this;
    let rebasedItems = [],
      start = Math.max(0, this.items.length - rebasedCount);
    let mapping = rebasedTransform.mapping;
    let newUntil = rebasedTransform.steps.length;
    let eventCount = this.eventCount;
    this.items.forEach(item => {
      if (item.selection) eventCount--;
    }, start);
    let iRebased = rebasedCount;
    this.items.forEach(item => {
      let pos = mapping.getMirror(--iRebased);
      if (pos == null) return;
      newUntil = Math.min(newUntil, pos);
      let map = mapping.maps[pos];
      if (item.step) {
        let step = rebasedTransform.steps[pos].invert(rebasedTransform.docs[pos]);
        let selection = item.selection && item.selection.map(mapping.slice(iRebased + 1, pos));
        if (selection) eventCount++;
        rebasedItems.push(new Item(map, step, selection));
      } else {
        rebasedItems.push(new Item(map));
      }
    }, start);
    let newMaps = [];
    for (let i = rebasedCount; i < newUntil; i++) newMaps.push(new Item(mapping.maps[i]));
    let items = this.items.slice(0, start).append(newMaps).append(rebasedItems);
    let branch = new Branch(items, eventCount);
    if (branch.emptyItemCount() > max_empty_items) branch = branch.compress(this.items.length - rebasedItems.length);
    return branch;
  }
  emptyItemCount() {
    let count = 0;
    this.items.forEach(item => {
      if (!item.step) count++;
    });
    return count;
  }
  compress(upto = this.items.length) {
    let remap = this.remapping(0, upto),
      mapFrom = remap.maps.length;
    let items = [],
      events = 0;
    this.items.forEach((item, i) => {
      if (i >= upto) {
        items.push(item);
        if (item.selection) events++;
      } else if (item.step) {
        let step = item.step.map(remap.slice(mapFrom)),
          map = step && step.getMap();
        mapFrom--;
        if (map) remap.appendMap(map, mapFrom);
        if (step) {
          let selection = item.selection && item.selection.map(remap.slice(mapFrom));
          if (selection) events++;
          let newItem = new Item(map.invert(), step, selection),
            merged,
            last = items.length - 1;
          if (merged = items.length && items[last].merge(newItem)) items[last] = merged;else items.push(newItem);
        }
      } else if (item.map) {
        mapFrom--;
      }
    }, this.items.length, 0);
    return new Branch(import_rope_sequence.default.from(items.reverse()), events);
  }
};
Branch.empty = new Branch(import_rope_sequence.default.empty, 0);
function cutOffEvents(items, n) {
  let cutPoint;
  items.forEach((item, i) => {
    if (item.selection && n-- == 0) {
      cutPoint = i;
      return false;
    }
  });
  return items.slice(cutPoint);
}
var Item = class {
  constructor(map, step, selection, mirrorOffset) {
    this.map = map;
    this.step = step;
    this.selection = selection;
    this.mirrorOffset = mirrorOffset;
  }
  merge(other) {
    if (this.step && other.step && !other.selection) {
      let step = other.step.merge(this.step);
      if (step) return new Item(step.getMap().invert(), step, this.selection);
    }
  }
};
var HistoryState = class {
  constructor(done, undone, prevRanges, prevTime, prevComposition) {
    this.done = done;
    this.undone = undone;
    this.prevRanges = prevRanges;
    this.prevTime = prevTime;
    this.prevComposition = prevComposition;
  }
};
var DEPTH_OVERFLOW = 20;
function applyTransaction(history2, state, tr, options) {
  let historyTr = tr.getMeta(historyKey),
    rebased;
  if (historyTr) return historyTr.historyState;
  if (tr.getMeta(closeHistoryKey)) history2 = new HistoryState(history2.done, history2.undone, null, 0, -1);
  let appended = tr.getMeta("appendedTransaction");
  if (tr.steps.length == 0) {
    return history2;
  } else if (appended && appended.getMeta(historyKey)) {
    if (appended.getMeta(historyKey).redo) return new HistoryState(history2.done.addTransform(tr, void 0, options, mustPreserveItems(state)), history2.undone, rangesFor(tr.mapping.maps), history2.prevTime, history2.prevComposition);else return new HistoryState(history2.done, history2.undone.addTransform(tr, void 0, options, mustPreserveItems(state)), null, history2.prevTime, history2.prevComposition);
  } else if (tr.getMeta("addToHistory") !== false && !(appended && appended.getMeta("addToHistory") === false)) {
    let composition = tr.getMeta("composition");
    let newGroup = history2.prevTime == 0 || !appended && history2.prevComposition != composition && (history2.prevTime < (tr.time || 0) - options.newGroupDelay || !isAdjacentTo(tr, history2.prevRanges));
    let prevRanges = appended ? mapRanges(history2.prevRanges, tr.mapping) : rangesFor(tr.mapping.maps);
    return new HistoryState(history2.done.addTransform(tr, newGroup ? state.selection.getBookmark() : void 0, options, mustPreserveItems(state)), Branch.empty, prevRanges, tr.time, composition == null ? history2.prevComposition : composition);
  } else if (rebased = tr.getMeta("rebased")) {
    return new HistoryState(history2.done.rebased(tr, rebased), history2.undone.rebased(tr, rebased), mapRanges(history2.prevRanges, tr.mapping), history2.prevTime, history2.prevComposition);
  } else {
    return new HistoryState(history2.done.addMaps(tr.mapping.maps), history2.undone.addMaps(tr.mapping.maps), mapRanges(history2.prevRanges, tr.mapping), history2.prevTime, history2.prevComposition);
  }
}
function isAdjacentTo(transform, prevRanges) {
  if (!prevRanges) return false;
  if (!transform.docChanged) return true;
  let adjacent = false;
  transform.mapping.maps[0].forEach((start, end) => {
    for (let i = 0; i < prevRanges.length; i += 2) if (start <= prevRanges[i + 1] && end >= prevRanges[i]) adjacent = true;
  });
  return adjacent;
}
function rangesFor(maps) {
  let result = [];
  for (let i = maps.length - 1; i >= 0 && result.length == 0; i--) maps[i].forEach((_from, _to, from, to) => result.push(from, to));
  return result;
}
function mapRanges(ranges, mapping) {
  if (!ranges) return null;
  let result = [];
  for (let i = 0; i < ranges.length; i += 2) {
    let from = mapping.map(ranges[i], 1),
      to = mapping.map(ranges[i + 1], -1);
    if (from <= to) result.push(from, to);
  }
  return result;
}
function histTransaction(history2, state, redo2) {
  let preserveItems = mustPreserveItems(state);
  let histOptions = historyKey.get(state).spec.config;
  let pop = (redo2 ? history2.undone : history2.done).popEvent(state, preserveItems);
  if (!pop) return null;
  let selection = pop.selection.resolve(pop.transform.doc);
  let added = (redo2 ? history2.done : history2.undone).addTransform(pop.transform, state.selection.getBookmark(), histOptions, preserveItems);
  let newHist = new HistoryState(redo2 ? added : pop.remaining, redo2 ? pop.remaining : added, null, 0, -1);
  return pop.transform.setSelection(selection).setMeta(historyKey, {
    redo: redo2,
    historyState: newHist
  });
}
var cachedPreserveItems = false,
  cachedPreserveItemsPlugins = null;
function mustPreserveItems(state) {
  let plugins = state.plugins;
  if (cachedPreserveItemsPlugins != plugins) {
    cachedPreserveItems = false;
    cachedPreserveItemsPlugins = plugins;
    for (let i = 0; i < plugins.length; i++) if (plugins[i].spec.historyPreserveItems) {
      cachedPreserveItems = true;
      break;
    }
  }
  return cachedPreserveItems;
}
function closeHistory(tr) {
  return tr.setMeta(closeHistoryKey, true);
}
var historyKey = new import_prosemirror_state.PluginKey("history");
var closeHistoryKey = new import_prosemirror_state.PluginKey("closeHistory");
function history(config = {}) {
  config = {
    depth: config.depth || 100,
    newGroupDelay: config.newGroupDelay || 500
  };
  return new import_prosemirror_state.Plugin({
    key: historyKey,
    state: {
      init() {
        return new HistoryState(Branch.empty, Branch.empty, null, 0, -1);
      },
      apply(tr, hist, state) {
        return applyTransaction(hist, state, tr, config);
      }
    },
    config,
    props: {
      handleDOMEvents: {
        beforeinput(view, e) {
          let inputType = e.inputType;
          let command = inputType == "historyUndo" ? undo : inputType == "historyRedo" ? redo : null;
          if (!command) return false;
          e.preventDefault();
          return command(view.state, view.dispatch);
        }
      }
    }
  });
}
function buildCommand(redo2, scroll) {
  return (state, dispatch) => {
    let hist = historyKey.getState(state);
    if (!hist || (redo2 ? hist.undone : hist.done).eventCount == 0) return false;
    if (dispatch) {
      let tr = histTransaction(hist, state, redo2);
      if (tr) dispatch(scroll ? tr.scrollIntoView() : tr);
    }
    return true;
  };
}
var undo = buildCommand(false, true);
var redo = buildCommand(true, true);
var undoNoScroll = buildCommand(false, false);
var redoNoScroll = buildCommand(true, false);
function undoDepth(state) {
  let hist = historyKey.getState(state);
  return hist ? hist.done.eventCount : 0;
}
function redoDepth(state) {
  let hist = historyKey.getState(state);
  return hist ? hist.undone.eventCount : 0;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcm9zZW1pcnJvci1oaXN0b3J5LjEuNC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Byb3NlbWlycm9yLWhpc3RvcnkvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9zZW1pcnJvcl9oaXN0b3J5XzFfNF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImNsb3NlSGlzdG9yeSIsImhpc3RvcnkiLCJyZWRvIiwicmVkb0RlcHRoIiwicmVkb05vU2Nyb2xsIiwidW5kbyIsInVuZG9EZXB0aCIsInVuZG9Ob1Njcm9sbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfcm9wZV9zZXF1ZW5jZSIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X3Byb3NlbWlycm9yX3RyYW5zZm9ybSIsImltcG9ydF9wcm9zZW1pcnJvcl9zdGF0ZSIsIm1heF9lbXB0eV9pdGVtcyIsIkJyYW5jaCIsImNvbnN0cnVjdG9yIiwiaXRlbXMiLCJldmVudENvdW50IiwicG9wRXZlbnQiLCJzdGF0ZSIsInByZXNlcnZlSXRlbXMiLCJlbmQiLCJsZW5ndGgiLCJuZXh0IiwiZ2V0Iiwic2VsZWN0aW9uIiwicmVtYXAiLCJtYXBGcm9tIiwicmVtYXBwaW5nIiwibWFwcyIsInRyYW5zZm9ybSIsInRyIiwicmVtYWluaW5nIiwiYWRkQWZ0ZXIiLCJhZGRCZWZvcmUiLCJmb3JFYWNoIiwiaXRlbSIsImkiLCJzdGVwIiwicHVzaCIsIkl0ZW0iLCJtYXAiLCJzbGljZSIsIm1heWJlU3RlcCIsImRvYyIsIm1hcHBpbmciLCJhcHBlbmRNYXAiLCJhcHBlbmQiLCJyZXZlcnNlIiwiY29uY2F0IiwiYWRkVHJhbnNmb3JtIiwiaGlzdE9wdGlvbnMiLCJuZXdJdGVtcyIsIm9sZEl0ZW1zIiwibGFzdEl0ZW0iLCJzdGVwcyIsImludmVydCIsImRvY3MiLCJtZXJnZWQiLCJtZXJnZSIsInBvcCIsIm92ZXJmbG93IiwiZGVwdGgiLCJERVBUSF9PVkVSRkxPVyIsImN1dE9mZkV2ZW50cyIsImZyb20iLCJ0byIsIk1hcHBpbmciLCJtaXJyb3JQb3MiLCJtaXJyb3JPZmZzZXQiLCJhZGRNYXBzIiwiYXJyYXkiLCJyZWJhc2VkIiwicmViYXNlZFRyYW5zZm9ybSIsInJlYmFzZWRDb3VudCIsInJlYmFzZWRJdGVtcyIsInN0YXJ0IiwiTWF0aCIsIm1heCIsIm5ld1VudGlsIiwiaVJlYmFzZWQiLCJwb3MiLCJnZXRNaXJyb3IiLCJtaW4iLCJuZXdNYXBzIiwiYnJhbmNoIiwiZW1wdHlJdGVtQ291bnQiLCJjb21wcmVzcyIsImNvdW50IiwidXB0byIsImV2ZW50cyIsImdldE1hcCIsIm5ld0l0ZW0iLCJsYXN0IiwiZGVmYXVsdCIsImVtcHR5IiwibiIsImN1dFBvaW50Iiwib3RoZXIiLCJIaXN0b3J5U3RhdGUiLCJkb25lIiwidW5kb25lIiwicHJldlJhbmdlcyIsInByZXZUaW1lIiwicHJldkNvbXBvc2l0aW9uIiwiYXBwbHlUcmFuc2FjdGlvbiIsImhpc3RvcnkyIiwib3B0aW9ucyIsImhpc3RvcnlUciIsImdldE1ldGEiLCJoaXN0b3J5S2V5IiwiaGlzdG9yeVN0YXRlIiwiY2xvc2VIaXN0b3J5S2V5IiwiYXBwZW5kZWQiLCJtdXN0UHJlc2VydmVJdGVtcyIsInJhbmdlc0ZvciIsImNvbXBvc2l0aW9uIiwibmV3R3JvdXAiLCJ0aW1lIiwibmV3R3JvdXBEZWxheSIsImlzQWRqYWNlbnRUbyIsIm1hcFJhbmdlcyIsImdldEJvb2ttYXJrIiwiZG9jQ2hhbmdlZCIsImFkamFjZW50IiwicmVzdWx0IiwiX2Zyb20iLCJfdG8iLCJyYW5nZXMiLCJoaXN0VHJhbnNhY3Rpb24iLCJyZWRvMiIsInNwZWMiLCJjb25maWciLCJyZXNvbHZlIiwiYWRkZWQiLCJuZXdIaXN0Iiwic2V0U2VsZWN0aW9uIiwic2V0TWV0YSIsImNhY2hlZFByZXNlcnZlSXRlbXMiLCJjYWNoZWRQcmVzZXJ2ZUl0ZW1zUGx1Z2lucyIsInBsdWdpbnMiLCJoaXN0b3J5UHJlc2VydmVJdGVtcyIsIlBsdWdpbktleSIsIlBsdWdpbiIsImtleSIsImluaXQiLCJhcHBseSIsImhpc3QiLCJwcm9wcyIsImhhbmRsZURPTUV2ZW50cyIsImJlZm9yZWlucHV0IiwidmlldyIsImUiLCJpbnB1dFR5cGUiLCJjb21tYW5kIiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaCIsImJ1aWxkQ29tbWFuZCIsInNjcm9sbCIsImdldFN0YXRlIiwic2Nyb2xsSW50b1ZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGlDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsaUNBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVosaUNBQUE7OztBQ0FBLElBQUFhLG9CQUFBLEdBQXlCQyxPQUFBLENBQUFDLE9BQUE7QUFDekIsSUFBQUMsNEJBQUEsR0FBd0JELE9BQUE7QUFDeEIsSUFBQUUsd0JBQUEsR0FBa0NGLE9BQUE7QUFrQmxDLElBQU1HLGVBQUEsR0FBa0I7QUFDeEIsSUFBTUMsTUFBQSxHQUFOLE1BQWE7RUFDVEMsWUFBWUMsS0FBQSxFQUFPQyxVQUFBLEVBQVk7SUFDM0IsS0FBS0QsS0FBQSxHQUFRQSxLQUFBO0lBQ2IsS0FBS0MsVUFBQSxHQUFhQSxVQUFBO0VBQ3RCO0VBR0FDLFNBQVNDLEtBQUEsRUFBT0MsYUFBQSxFQUFlO0lBQzNCLElBQUksS0FBS0gsVUFBQSxJQUFjLEdBQ25CLE9BQU87SUFDWCxJQUFJSSxHQUFBLEdBQU0sS0FBS0wsS0FBQSxDQUFNTSxNQUFBO0lBQ3JCLFFBQVFELEdBQUEsSUFBTztNQUNYLElBQUlFLElBQUEsR0FBTyxLQUFLUCxLQUFBLENBQU1RLEdBQUEsQ0FBSUgsR0FBQSxHQUFNLENBQUM7TUFDakMsSUFBSUUsSUFBQSxDQUFLRSxTQUFBLEVBQVc7UUFDaEIsRUFBRUosR0FBQTtRQUNGO01BQ0o7SUFDSjtJQUNBLElBQUlLLEtBQUEsRUFBT0MsT0FBQTtJQUNYLElBQUlQLGFBQUEsRUFBZTtNQUNmTSxLQUFBLEdBQVEsS0FBS0UsU0FBQSxDQUFVUCxHQUFBLEVBQUssS0FBS0wsS0FBQSxDQUFNTSxNQUFNO01BQzdDSyxPQUFBLEdBQVVELEtBQUEsQ0FBTUcsSUFBQSxDQUFLUCxNQUFBO0lBQ3pCO0lBQ0EsSUFBSVEsU0FBQSxHQUFZWCxLQUFBLENBQU1ZLEVBQUE7SUFDdEIsSUFBSU4sU0FBQSxFQUFXTyxTQUFBO0lBQ2YsSUFBSUMsUUFBQSxHQUFXLEVBQUM7TUFBR0MsU0FBQSxHQUFZLEVBQUM7SUFDaEMsS0FBS2xCLEtBQUEsQ0FBTW1CLE9BQUEsQ0FBUSxDQUFDQyxJQUFBLEVBQU1DLENBQUEsS0FBTTtNQUM1QixJQUFJLENBQUNELElBQUEsQ0FBS0UsSUFBQSxFQUFNO1FBQ1osSUFBSSxDQUFDWixLQUFBLEVBQU87VUFDUkEsS0FBQSxHQUFRLEtBQUtFLFNBQUEsQ0FBVVAsR0FBQSxFQUFLZ0IsQ0FBQSxHQUFJLENBQUM7VUFDakNWLE9BQUEsR0FBVUQsS0FBQSxDQUFNRyxJQUFBLENBQUtQLE1BQUE7UUFDekI7UUFDQUssT0FBQTtRQUNBTyxTQUFBLENBQVVLLElBQUEsQ0FBS0gsSUFBSTtRQUNuQjtNQUNKO01BQ0EsSUFBSVYsS0FBQSxFQUFPO1FBQ1BRLFNBQUEsQ0FBVUssSUFBQSxDQUFLLElBQUlDLElBQUEsQ0FBS0osSUFBQSxDQUFLSyxHQUFHLENBQUM7UUFDakMsSUFBSUgsSUFBQSxHQUFPRixJQUFBLENBQUtFLElBQUEsQ0FBS0csR0FBQSxDQUFJZixLQUFBLENBQU1nQixLQUFBLENBQU1mLE9BQU8sQ0FBQztVQUFHYyxHQUFBO1FBQ2hELElBQUlILElBQUEsSUFBUVIsU0FBQSxDQUFVYSxTQUFBLENBQVVMLElBQUksRUFBRU0sR0FBQSxFQUFLO1VBQ3ZDSCxHQUFBLEdBQU1YLFNBQUEsQ0FBVWUsT0FBQSxDQUFRaEIsSUFBQSxDQUFLQyxTQUFBLENBQVVlLE9BQUEsQ0FBUWhCLElBQUEsQ0FBS1AsTUFBQSxHQUFTO1VBQzdEVyxRQUFBLENBQVNNLElBQUEsQ0FBSyxJQUFJQyxJQUFBLENBQUtDLEdBQUEsRUFBSyxRQUFXLFFBQVdSLFFBQUEsQ0FBU1gsTUFBQSxHQUFTWSxTQUFBLENBQVVaLE1BQU0sQ0FBQztRQUN6RjtRQUNBSyxPQUFBO1FBQ0EsSUFBSWMsR0FBQSxFQUNBZixLQUFBLENBQU1vQixTQUFBLENBQVVMLEdBQUEsRUFBS2QsT0FBTztNQUNwQyxPQUNLO1FBQ0RHLFNBQUEsQ0FBVWEsU0FBQSxDQUFVUCxJQUFBLENBQUtFLElBQUk7TUFDakM7TUFDQSxJQUFJRixJQUFBLENBQUtYLFNBQUEsRUFBVztRQUNoQkEsU0FBQSxHQUFZQyxLQUFBLEdBQVFVLElBQUEsQ0FBS1gsU0FBQSxDQUFVZ0IsR0FBQSxDQUFJZixLQUFBLENBQU1nQixLQUFBLENBQU1mLE9BQU8sQ0FBQyxJQUFJUyxJQUFBLENBQUtYLFNBQUE7UUFDcEVPLFNBQUEsR0FBWSxJQUFJbEIsTUFBQSxDQUFPLEtBQUtFLEtBQUEsQ0FBTTBCLEtBQUEsQ0FBTSxHQUFHckIsR0FBRyxFQUFFMEIsTUFBQSxDQUFPYixTQUFBLENBQVVjLE9BQUEsQ0FBUSxFQUFFQyxNQUFBLENBQU9oQixRQUFRLENBQUMsR0FBRyxLQUFLaEIsVUFBQSxHQUFhLENBQUM7UUFDakgsT0FBTztNQUNYO0lBQ0osR0FBRyxLQUFLRCxLQUFBLENBQU1NLE1BQUEsRUFBUSxDQUFDO0lBQ3ZCLE9BQU87TUFBRVUsU0FBQTtNQUFzQkYsU0FBQTtNQUFXTDtJQUFxQjtFQUNuRTtFQUVBeUIsYUFBYXBCLFNBQUEsRUFBV0wsU0FBQSxFQUFXMEIsV0FBQSxFQUFhL0IsYUFBQSxFQUFlO0lBQzNELElBQUlnQyxRQUFBLEdBQVcsRUFBQztNQUFHbkMsVUFBQSxHQUFhLEtBQUtBLFVBQUE7SUFDckMsSUFBSW9DLFFBQUEsR0FBVyxLQUFLckMsS0FBQTtNQUFPc0MsUUFBQSxHQUFXLENBQUNsQyxhQUFBLElBQWlCaUMsUUFBQSxDQUFTL0IsTUFBQSxHQUFTK0IsUUFBQSxDQUFTN0IsR0FBQSxDQUFJNkIsUUFBQSxDQUFTL0IsTUFBQSxHQUFTLENBQUMsSUFBSTtJQUM5RyxTQUFTZSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJUCxTQUFBLENBQVV5QixLQUFBLENBQU1qQyxNQUFBLEVBQVFlLENBQUEsSUFBSztNQUM3QyxJQUFJQyxJQUFBLEdBQU9SLFNBQUEsQ0FBVXlCLEtBQUEsQ0FBTWxCLENBQUEsRUFBR21CLE1BQUEsQ0FBTzFCLFNBQUEsQ0FBVTJCLElBQUEsQ0FBS3BCLENBQUEsQ0FBRTtNQUN0RCxJQUFJRCxJQUFBLEdBQU8sSUFBSUksSUFBQSxDQUFLVixTQUFBLENBQVVlLE9BQUEsQ0FBUWhCLElBQUEsQ0FBS1EsQ0FBQSxHQUFJQyxJQUFBLEVBQU1iLFNBQVM7UUFBR2lDLE1BQUE7TUFDakUsSUFBSUEsTUFBQSxHQUFTSixRQUFBLElBQVlBLFFBQUEsQ0FBU0ssS0FBQSxDQUFNdkIsSUFBSSxHQUFHO1FBQzNDQSxJQUFBLEdBQU9zQixNQUFBO1FBQ1AsSUFBSXJCLENBQUEsRUFDQWUsUUFBQSxDQUFTUSxHQUFBLENBQUksT0FFYlAsUUFBQSxHQUFXQSxRQUFBLENBQVNYLEtBQUEsQ0FBTSxHQUFHVyxRQUFBLENBQVMvQixNQUFBLEdBQVMsQ0FBQztNQUN4RDtNQUNBOEIsUUFBQSxDQUFTYixJQUFBLENBQUtILElBQUk7TUFDbEIsSUFBSVgsU0FBQSxFQUFXO1FBQ1hSLFVBQUE7UUFDQVEsU0FBQSxHQUFZO01BQ2hCO01BQ0EsSUFBSSxDQUFDTCxhQUFBLEVBQ0RrQyxRQUFBLEdBQVdsQixJQUFBO0lBQ25CO0lBQ0EsSUFBSXlCLFFBQUEsR0FBVzVDLFVBQUEsR0FBYWtDLFdBQUEsQ0FBWVcsS0FBQTtJQUN4QyxJQUFJRCxRQUFBLEdBQVdFLGNBQUEsRUFBZ0I7TUFDM0JWLFFBQUEsR0FBV1csWUFBQSxDQUFhWCxRQUFBLEVBQVVRLFFBQVE7TUFDMUM1QyxVQUFBLElBQWM0QyxRQUFBO0lBQ2xCO0lBQ0EsT0FBTyxJQUFJL0MsTUFBQSxDQUFPdUMsUUFBQSxDQUFTTixNQUFBLENBQU9LLFFBQVEsR0FBR25DLFVBQVU7RUFDM0Q7RUFDQVcsVUFBVXFDLElBQUEsRUFBTUMsRUFBQSxFQUFJO0lBQ2hCLElBQUlyQyxJQUFBLEdBQU8sSUFBSWxCLDRCQUFBLENBQUF3RCxPQUFBO0lBQ2YsS0FBS25ELEtBQUEsQ0FBTW1CLE9BQUEsQ0FBUSxDQUFDQyxJQUFBLEVBQU1DLENBQUEsS0FBTTtNQUM1QixJQUFJK0IsU0FBQSxHQUFZaEMsSUFBQSxDQUFLaUMsWUFBQSxJQUFnQixRQUFRaEMsQ0FBQSxHQUFJRCxJQUFBLENBQUtpQyxZQUFBLElBQWdCSixJQUFBLEdBQ2hFcEMsSUFBQSxDQUFLQSxJQUFBLENBQUtQLE1BQUEsR0FBU2MsSUFBQSxDQUFLaUMsWUFBQSxHQUFlO01BQzdDeEMsSUFBQSxDQUFLaUIsU0FBQSxDQUFVVixJQUFBLENBQUtLLEdBQUEsRUFBSzJCLFNBQVM7SUFDdEMsR0FBR0gsSUFBQSxFQUFNQyxFQUFFO0lBQ1gsT0FBT3JDLElBQUE7RUFDWDtFQUNBeUMsUUFBUUMsS0FBQSxFQUFPO0lBQ1gsSUFBSSxLQUFLdEQsVUFBQSxJQUFjLEdBQ25CLE9BQU87SUFDWCxPQUFPLElBQUlILE1BQUEsQ0FBTyxLQUFLRSxLQUFBLENBQU0rQixNQUFBLENBQU93QixLQUFBLENBQU05QixHQUFBLENBQUlBLEdBQUEsSUFBTyxJQUFJRCxJQUFBLENBQUtDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBS3hCLFVBQVU7RUFDekY7RUFLQXVELFFBQVFDLGdCQUFBLEVBQWtCQyxZQUFBLEVBQWM7SUFDcEMsSUFBSSxDQUFDLEtBQUt6RCxVQUFBLEVBQ04sT0FBTztJQUNYLElBQUkwRCxZQUFBLEdBQWUsRUFBQztNQUFHQyxLQUFBLEdBQVFDLElBQUEsQ0FBS0MsR0FBQSxDQUFJLEdBQUcsS0FBSzlELEtBQUEsQ0FBTU0sTUFBQSxHQUFTb0QsWUFBWTtJQUMzRSxJQUFJN0IsT0FBQSxHQUFVNEIsZ0JBQUEsQ0FBaUI1QixPQUFBO0lBQy9CLElBQUlrQyxRQUFBLEdBQVdOLGdCQUFBLENBQWlCbEIsS0FBQSxDQUFNakMsTUFBQTtJQUN0QyxJQUFJTCxVQUFBLEdBQWEsS0FBS0EsVUFBQTtJQUN0QixLQUFLRCxLQUFBLENBQU1tQixPQUFBLENBQVFDLElBQUEsSUFBUTtNQUFFLElBQUlBLElBQUEsQ0FBS1gsU0FBQSxFQUNsQ1IsVUFBQTtJQUFjLEdBQUcyRCxLQUFLO0lBQzFCLElBQUlJLFFBQUEsR0FBV04sWUFBQTtJQUNmLEtBQUsxRCxLQUFBLENBQU1tQixPQUFBLENBQVFDLElBQUEsSUFBUTtNQUN2QixJQUFJNkMsR0FBQSxHQUFNcEMsT0FBQSxDQUFRcUMsU0FBQSxDQUFVLEVBQUVGLFFBQVE7TUFDdEMsSUFBSUMsR0FBQSxJQUFPLE1BQ1A7TUFDSkYsUUFBQSxHQUFXRixJQUFBLENBQUtNLEdBQUEsQ0FBSUosUUFBQSxFQUFVRSxHQUFHO01BQ2pDLElBQUl4QyxHQUFBLEdBQU1JLE9BQUEsQ0FBUWhCLElBQUEsQ0FBS29ELEdBQUE7TUFDdkIsSUFBSTdDLElBQUEsQ0FBS0UsSUFBQSxFQUFNO1FBQ1gsSUFBSUEsSUFBQSxHQUFPbUMsZ0JBQUEsQ0FBaUJsQixLQUFBLENBQU0wQixHQUFBLEVBQUt6QixNQUFBLENBQU9pQixnQkFBQSxDQUFpQmhCLElBQUEsQ0FBS3dCLEdBQUEsQ0FBSTtRQUN4RSxJQUFJeEQsU0FBQSxHQUFZVyxJQUFBLENBQUtYLFNBQUEsSUFBYVcsSUFBQSxDQUFLWCxTQUFBLENBQVVnQixHQUFBLENBQUlJLE9BQUEsQ0FBUUgsS0FBQSxDQUFNc0MsUUFBQSxHQUFXLEdBQUdDLEdBQUcsQ0FBQztRQUNyRixJQUFJeEQsU0FBQSxFQUNBUixVQUFBO1FBQ0owRCxZQUFBLENBQWFwQyxJQUFBLENBQUssSUFBSUMsSUFBQSxDQUFLQyxHQUFBLEVBQUtILElBQUEsRUFBTWIsU0FBUyxDQUFDO01BQ3BELE9BQ0s7UUFDRGtELFlBQUEsQ0FBYXBDLElBQUEsQ0FBSyxJQUFJQyxJQUFBLENBQUtDLEdBQUcsQ0FBQztNQUNuQztJQUNKLEdBQUdtQyxLQUFLO0lBQ1IsSUFBSVEsT0FBQSxHQUFVLEVBQUM7SUFDZixTQUFTL0MsQ0FBQSxHQUFJcUMsWUFBQSxFQUFjckMsQ0FBQSxHQUFJMEMsUUFBQSxFQUFVMUMsQ0FBQSxJQUNyQytDLE9BQUEsQ0FBUTdDLElBQUEsQ0FBSyxJQUFJQyxJQUFBLENBQUtLLE9BQUEsQ0FBUWhCLElBQUEsQ0FBS1EsQ0FBQSxDQUFFLENBQUM7SUFDMUMsSUFBSXJCLEtBQUEsR0FBUSxLQUFLQSxLQUFBLENBQU0wQixLQUFBLENBQU0sR0FBR2tDLEtBQUssRUFBRTdCLE1BQUEsQ0FBT3FDLE9BQU8sRUFBRXJDLE1BQUEsQ0FBTzRCLFlBQVk7SUFDMUUsSUFBSVUsTUFBQSxHQUFTLElBQUl2RSxNQUFBLENBQU9FLEtBQUEsRUFBT0MsVUFBVTtJQUN6QyxJQUFJb0UsTUFBQSxDQUFPQyxjQUFBLENBQWUsSUFBSXpFLGVBQUEsRUFDMUJ3RSxNQUFBLEdBQVNBLE1BQUEsQ0FBT0UsUUFBQSxDQUFTLEtBQUt2RSxLQUFBLENBQU1NLE1BQUEsR0FBU3FELFlBQUEsQ0FBYXJELE1BQU07SUFDcEUsT0FBTytELE1BQUE7RUFDWDtFQUNBQyxlQUFBLEVBQWlCO0lBQ2IsSUFBSUUsS0FBQSxHQUFRO0lBQ1osS0FBS3hFLEtBQUEsQ0FBTW1CLE9BQUEsQ0FBUUMsSUFBQSxJQUFRO01BQUUsSUFBSSxDQUFDQSxJQUFBLENBQUtFLElBQUEsRUFDbkNrRCxLQUFBO0lBQVMsQ0FBQztJQUNkLE9BQU9BLEtBQUE7RUFDWDtFQU9BRCxTQUFTRSxJQUFBLEdBQU8sS0FBS3pFLEtBQUEsQ0FBTU0sTUFBQSxFQUFRO0lBQy9CLElBQUlJLEtBQUEsR0FBUSxLQUFLRSxTQUFBLENBQVUsR0FBRzZELElBQUk7TUFBRzlELE9BQUEsR0FBVUQsS0FBQSxDQUFNRyxJQUFBLENBQUtQLE1BQUE7SUFDMUQsSUFBSU4sS0FBQSxHQUFRLEVBQUM7TUFBRzBFLE1BQUEsR0FBUztJQUN6QixLQUFLMUUsS0FBQSxDQUFNbUIsT0FBQSxDQUFRLENBQUNDLElBQUEsRUFBTUMsQ0FBQSxLQUFNO01BQzVCLElBQUlBLENBQUEsSUFBS29ELElBQUEsRUFBTTtRQUNYekUsS0FBQSxDQUFNdUIsSUFBQSxDQUFLSCxJQUFJO1FBQ2YsSUFBSUEsSUFBQSxDQUFLWCxTQUFBLEVBQ0xpRSxNQUFBO01BQ1IsV0FDU3RELElBQUEsQ0FBS0UsSUFBQSxFQUFNO1FBQ2hCLElBQUlBLElBQUEsR0FBT0YsSUFBQSxDQUFLRSxJQUFBLENBQUtHLEdBQUEsQ0FBSWYsS0FBQSxDQUFNZ0IsS0FBQSxDQUFNZixPQUFPLENBQUM7VUFBR2MsR0FBQSxHQUFNSCxJQUFBLElBQVFBLElBQUEsQ0FBS3FELE1BQUEsQ0FBTztRQUMxRWhFLE9BQUE7UUFDQSxJQUFJYyxHQUFBLEVBQ0FmLEtBQUEsQ0FBTW9CLFNBQUEsQ0FBVUwsR0FBQSxFQUFLZCxPQUFPO1FBQ2hDLElBQUlXLElBQUEsRUFBTTtVQUNOLElBQUliLFNBQUEsR0FBWVcsSUFBQSxDQUFLWCxTQUFBLElBQWFXLElBQUEsQ0FBS1gsU0FBQSxDQUFVZ0IsR0FBQSxDQUFJZixLQUFBLENBQU1nQixLQUFBLENBQU1mLE9BQU8sQ0FBQztVQUN6RSxJQUFJRixTQUFBLEVBQ0FpRSxNQUFBO1VBQ0osSUFBSUUsT0FBQSxHQUFVLElBQUlwRCxJQUFBLENBQUtDLEdBQUEsQ0FBSWUsTUFBQSxDQUFPLEdBQUdsQixJQUFBLEVBQU1iLFNBQVM7WUFBR2lDLE1BQUE7WUFBUW1DLElBQUEsR0FBTzdFLEtBQUEsQ0FBTU0sTUFBQSxHQUFTO1VBQ3JGLElBQUlvQyxNQUFBLEdBQVMxQyxLQUFBLENBQU1NLE1BQUEsSUFBVU4sS0FBQSxDQUFNNkUsSUFBQSxFQUFNbEMsS0FBQSxDQUFNaUMsT0FBTyxHQUNsRDVFLEtBQUEsQ0FBTTZFLElBQUEsSUFBUW5DLE1BQUEsTUFFZDFDLEtBQUEsQ0FBTXVCLElBQUEsQ0FBS3FELE9BQU87UUFDMUI7TUFDSixXQUNTeEQsSUFBQSxDQUFLSyxHQUFBLEVBQUs7UUFDZmQsT0FBQTtNQUNKO0lBQ0osR0FBRyxLQUFLWCxLQUFBLENBQU1NLE1BQUEsRUFBUSxDQUFDO0lBQ3ZCLE9BQU8sSUFBSVIsTUFBQSxDQUFPTixvQkFBQSxDQUFBc0YsT0FBQSxDQUFhN0IsSUFBQSxDQUFLakQsS0FBQSxDQUFNZ0MsT0FBQSxDQUFRLENBQUMsR0FBRzBDLE1BQU07RUFDaEU7QUFDSjtBQUNBNUUsTUFBQSxDQUFPaUYsS0FBQSxHQUFRLElBQUlqRixNQUFBLENBQU9OLG9CQUFBLENBQUFzRixPQUFBLENBQWFDLEtBQUEsRUFBTyxDQUFDO0FBQy9DLFNBQVMvQixhQUFhaEQsS0FBQSxFQUFPZ0YsQ0FBQSxFQUFHO0VBQzVCLElBQUlDLFFBQUE7RUFDSmpGLEtBQUEsQ0FBTW1CLE9BQUEsQ0FBUSxDQUFDQyxJQUFBLEVBQU1DLENBQUEsS0FBTTtJQUN2QixJQUFJRCxJQUFBLENBQUtYLFNBQUEsSUFBY3VFLENBQUEsTUFBTyxHQUFJO01BQzlCQyxRQUFBLEdBQVc1RCxDQUFBO01BQ1gsT0FBTztJQUNYO0VBQ0osQ0FBQztFQUNELE9BQU9yQixLQUFBLENBQU0wQixLQUFBLENBQU11RCxRQUFRO0FBQy9CO0FBQ0EsSUFBTXpELElBQUEsR0FBTixNQUFXO0VBQ1B6QixZQUVBMEIsR0FBQSxFQUVBSCxJQUFBLEVBSUFiLFNBQUEsRUFHQTRDLFlBQUEsRUFBYztJQUNWLEtBQUs1QixHQUFBLEdBQU1BLEdBQUE7SUFDWCxLQUFLSCxJQUFBLEdBQU9BLElBQUE7SUFDWixLQUFLYixTQUFBLEdBQVlBLFNBQUE7SUFDakIsS0FBSzRDLFlBQUEsR0FBZUEsWUFBQTtFQUN4QjtFQUNBVixNQUFNdUMsS0FBQSxFQUFPO0lBQ1QsSUFBSSxLQUFLNUQsSUFBQSxJQUFRNEQsS0FBQSxDQUFNNUQsSUFBQSxJQUFRLENBQUM0RCxLQUFBLENBQU16RSxTQUFBLEVBQVc7TUFDN0MsSUFBSWEsSUFBQSxHQUFPNEQsS0FBQSxDQUFNNUQsSUFBQSxDQUFLcUIsS0FBQSxDQUFNLEtBQUtyQixJQUFJO01BQ3JDLElBQUlBLElBQUEsRUFDQSxPQUFPLElBQUlFLElBQUEsQ0FBS0YsSUFBQSxDQUFLcUQsTUFBQSxDQUFPLEVBQUVuQyxNQUFBLENBQU8sR0FBR2xCLElBQUEsRUFBTSxLQUFLYixTQUFTO0lBQ3BFO0VBQ0o7QUFDSjtBQUlBLElBQU0wRSxZQUFBLEdBQU4sTUFBbUI7RUFDZnBGLFlBQVlxRixJQUFBLEVBQU1DLE1BQUEsRUFBUUMsVUFBQSxFQUFZQyxRQUFBLEVBQVVDLGVBQUEsRUFBaUI7SUFDN0QsS0FBS0osSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBS0MsTUFBQSxHQUFTQSxNQUFBO0lBQ2QsS0FBS0MsVUFBQSxHQUFhQSxVQUFBO0lBQ2xCLEtBQUtDLFFBQUEsR0FBV0EsUUFBQTtJQUNoQixLQUFLQyxlQUFBLEdBQWtCQSxlQUFBO0VBQzNCO0FBQ0o7QUFDQSxJQUFNekMsY0FBQSxHQUFpQjtBQUV2QixTQUFTMEMsaUJBQWlCQyxRQUFBLEVBQVN2RixLQUFBLEVBQU9ZLEVBQUEsRUFBSTRFLE9BQUEsRUFBUztFQUNuRCxJQUFJQyxTQUFBLEdBQVk3RSxFQUFBLENBQUc4RSxPQUFBLENBQVFDLFVBQVU7SUFBR3RDLE9BQUE7RUFDeEMsSUFBSW9DLFNBQUEsRUFDQSxPQUFPQSxTQUFBLENBQVVHLFlBQUE7RUFDckIsSUFBSWhGLEVBQUEsQ0FBRzhFLE9BQUEsQ0FBUUcsZUFBZSxHQUMxQk4sUUFBQSxHQUFVLElBQUlQLFlBQUEsQ0FBYU8sUUFBQSxDQUFRTixJQUFBLEVBQU1NLFFBQUEsQ0FBUUwsTUFBQSxFQUFRLE1BQU0sR0FBRyxFQUFFO0VBQ3hFLElBQUlZLFFBQUEsR0FBV2xGLEVBQUEsQ0FBRzhFLE9BQUEsQ0FBUSxxQkFBcUI7RUFDL0MsSUFBSTlFLEVBQUEsQ0FBR3dCLEtBQUEsQ0FBTWpDLE1BQUEsSUFBVSxHQUFHO0lBQ3RCLE9BQU9vRixRQUFBO0VBQ1gsV0FDU08sUUFBQSxJQUFZQSxRQUFBLENBQVNKLE9BQUEsQ0FBUUMsVUFBVSxHQUFHO0lBQy9DLElBQUlHLFFBQUEsQ0FBU0osT0FBQSxDQUFRQyxVQUFVLEVBQUUvRyxJQUFBLEVBQzdCLE9BQU8sSUFBSW9HLFlBQUEsQ0FBYU8sUUFBQSxDQUFRTixJQUFBLENBQUtsRCxZQUFBLENBQWFuQixFQUFBLEVBQUksUUFBVzRFLE9BQUEsRUFBU08saUJBQUEsQ0FBa0IvRixLQUFLLENBQUMsR0FBR3VGLFFBQUEsQ0FBUUwsTUFBQSxFQUFRYyxTQUFBLENBQVVwRixFQUFBLENBQUdjLE9BQUEsQ0FBUWhCLElBQUksR0FBRzZFLFFBQUEsQ0FBUUgsUUFBQSxFQUFVRyxRQUFBLENBQVFGLGVBQWUsT0FFMUwsT0FBTyxJQUFJTCxZQUFBLENBQWFPLFFBQUEsQ0FBUU4sSUFBQSxFQUFNTSxRQUFBLENBQVFMLE1BQUEsQ0FBT25ELFlBQUEsQ0FBYW5CLEVBQUEsRUFBSSxRQUFXNEUsT0FBQSxFQUFTTyxpQkFBQSxDQUFrQi9GLEtBQUssQ0FBQyxHQUFHLE1BQU11RixRQUFBLENBQVFILFFBQUEsRUFBVUcsUUFBQSxDQUFRRixlQUFlO0VBQzVLLFdBQ1N6RSxFQUFBLENBQUc4RSxPQUFBLENBQVEsY0FBYyxNQUFNLFNBQVMsRUFBRUksUUFBQSxJQUFZQSxRQUFBLENBQVNKLE9BQUEsQ0FBUSxjQUFjLE1BQU0sUUFBUTtJQUV4RyxJQUFJTyxXQUFBLEdBQWNyRixFQUFBLENBQUc4RSxPQUFBLENBQVEsYUFBYTtJQUMxQyxJQUFJUSxRQUFBLEdBQVdYLFFBQUEsQ0FBUUgsUUFBQSxJQUFZLEtBQzlCLENBQUNVLFFBQUEsSUFBWVAsUUFBQSxDQUFRRixlQUFBLElBQW1CWSxXQUFBLEtBQ3BDVixRQUFBLENBQVFILFFBQUEsSUFBWXhFLEVBQUEsQ0FBR3VGLElBQUEsSUFBUSxLQUFLWCxPQUFBLENBQVFZLGFBQUEsSUFBaUIsQ0FBQ0MsWUFBQSxDQUFhekYsRUFBQSxFQUFJMkUsUUFBQSxDQUFRSixVQUFVO0lBQzFHLElBQUlBLFVBQUEsR0FBYVcsUUFBQSxHQUFXUSxTQUFBLENBQVVmLFFBQUEsQ0FBUUosVUFBQSxFQUFZdkUsRUFBQSxDQUFHYyxPQUFPLElBQUlzRSxTQUFBLENBQVVwRixFQUFBLENBQUdjLE9BQUEsQ0FBUWhCLElBQUk7SUFDakcsT0FBTyxJQUFJc0UsWUFBQSxDQUFhTyxRQUFBLENBQVFOLElBQUEsQ0FBS2xELFlBQUEsQ0FBYW5CLEVBQUEsRUFBSXNGLFFBQUEsR0FBV2xHLEtBQUEsQ0FBTU0sU0FBQSxDQUFVaUcsV0FBQSxDQUFZLElBQUksUUFBV2YsT0FBQSxFQUFTTyxpQkFBQSxDQUFrQi9GLEtBQUssQ0FBQyxHQUFHTCxNQUFBLENBQU9pRixLQUFBLEVBQU9PLFVBQUEsRUFBWXZFLEVBQUEsQ0FBR3VGLElBQUEsRUFBTUYsV0FBQSxJQUFlLE9BQU9WLFFBQUEsQ0FBUUYsZUFBQSxHQUFrQlksV0FBVztFQUNsUCxXQUNTNUMsT0FBQSxHQUFVekMsRUFBQSxDQUFHOEUsT0FBQSxDQUFRLFNBQVMsR0FBRztJQUd0QyxPQUFPLElBQUlWLFlBQUEsQ0FBYU8sUUFBQSxDQUFRTixJQUFBLENBQUs1QixPQUFBLENBQVF6QyxFQUFBLEVBQUl5QyxPQUFPLEdBQUdrQyxRQUFBLENBQVFMLE1BQUEsQ0FBTzdCLE9BQUEsQ0FBUXpDLEVBQUEsRUFBSXlDLE9BQU8sR0FBR2lELFNBQUEsQ0FBVWYsUUFBQSxDQUFRSixVQUFBLEVBQVl2RSxFQUFBLENBQUdjLE9BQU8sR0FBRzZELFFBQUEsQ0FBUUgsUUFBQSxFQUFVRyxRQUFBLENBQVFGLGVBQWU7RUFDeEwsT0FDSztJQUNELE9BQU8sSUFBSUwsWUFBQSxDQUFhTyxRQUFBLENBQVFOLElBQUEsQ0FBSzlCLE9BQUEsQ0FBUXZDLEVBQUEsQ0FBR2MsT0FBQSxDQUFRaEIsSUFBSSxHQUFHNkUsUUFBQSxDQUFRTCxNQUFBLENBQU8vQixPQUFBLENBQVF2QyxFQUFBLENBQUdjLE9BQUEsQ0FBUWhCLElBQUksR0FBRzRGLFNBQUEsQ0FBVWYsUUFBQSxDQUFRSixVQUFBLEVBQVl2RSxFQUFBLENBQUdjLE9BQU8sR0FBRzZELFFBQUEsQ0FBUUgsUUFBQSxFQUFVRyxRQUFBLENBQVFGLGVBQWU7RUFDaE07QUFDSjtBQUNBLFNBQVNnQixhQUFhMUYsU0FBQSxFQUFXd0UsVUFBQSxFQUFZO0VBQ3pDLElBQUksQ0FBQ0EsVUFBQSxFQUNELE9BQU87RUFDWCxJQUFJLENBQUN4RSxTQUFBLENBQVU2RixVQUFBLEVBQ1gsT0FBTztFQUNYLElBQUlDLFFBQUEsR0FBVztFQUNmOUYsU0FBQSxDQUFVZSxPQUFBLENBQVFoQixJQUFBLENBQUssR0FBR00sT0FBQSxDQUFRLENBQUN5QyxLQUFBLEVBQU92RCxHQUFBLEtBQVE7SUFDOUMsU0FBU2dCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlpRSxVQUFBLENBQVdoRixNQUFBLEVBQVFlLENBQUEsSUFBSyxHQUN4QyxJQUFJdUMsS0FBQSxJQUFTMEIsVUFBQSxDQUFXakUsQ0FBQSxHQUFJLE1BQU1oQixHQUFBLElBQU9pRixVQUFBLENBQVdqRSxDQUFBLEdBQ2hEdUYsUUFBQSxHQUFXO0VBQ3ZCLENBQUM7RUFDRCxPQUFPQSxRQUFBO0FBQ1g7QUFDQSxTQUFTVCxVQUFVdEYsSUFBQSxFQUFNO0VBQ3JCLElBQUlnRyxNQUFBLEdBQVMsRUFBQztFQUNkLFNBQVN4RixDQUFBLEdBQUlSLElBQUEsQ0FBS1AsTUFBQSxHQUFTLEdBQUdlLENBQUEsSUFBSyxLQUFLd0YsTUFBQSxDQUFPdkcsTUFBQSxJQUFVLEdBQUdlLENBQUEsSUFDeERSLElBQUEsQ0FBS1EsQ0FBQSxFQUFHRixPQUFBLENBQVEsQ0FBQzJGLEtBQUEsRUFBT0MsR0FBQSxFQUFLOUQsSUFBQSxFQUFNQyxFQUFBLEtBQU8yRCxNQUFBLENBQU90RixJQUFBLENBQUswQixJQUFBLEVBQU1DLEVBQUUsQ0FBQztFQUNuRSxPQUFPMkQsTUFBQTtBQUNYO0FBQ0EsU0FBU0osVUFBVU8sTUFBQSxFQUFRbkYsT0FBQSxFQUFTO0VBQ2hDLElBQUksQ0FBQ21GLE1BQUEsRUFDRCxPQUFPO0VBQ1gsSUFBSUgsTUFBQSxHQUFTLEVBQUM7RUFDZCxTQUFTeEYsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTJGLE1BQUEsQ0FBTzFHLE1BQUEsRUFBUWUsQ0FBQSxJQUFLLEdBQUc7SUFDdkMsSUFBSTRCLElBQUEsR0FBT3BCLE9BQUEsQ0FBUUosR0FBQSxDQUFJdUYsTUFBQSxDQUFPM0YsQ0FBQSxHQUFJLENBQUM7TUFBRzZCLEVBQUEsR0FBS3JCLE9BQUEsQ0FBUUosR0FBQSxDQUFJdUYsTUFBQSxDQUFPM0YsQ0FBQSxHQUFJLElBQUksRUFBRTtJQUN4RSxJQUFJNEIsSUFBQSxJQUFRQyxFQUFBLEVBQ1IyRCxNQUFBLENBQU90RixJQUFBLENBQUswQixJQUFBLEVBQU1DLEVBQUU7RUFDNUI7RUFDQSxPQUFPMkQsTUFBQTtBQUNYO0FBR0EsU0FBU0ksZ0JBQWdCdkIsUUFBQSxFQUFTdkYsS0FBQSxFQUFPK0csS0FBQSxFQUFNO0VBQzNDLElBQUk5RyxhQUFBLEdBQWdCOEYsaUJBQUEsQ0FBa0IvRixLQUFLO0VBQzNDLElBQUlnQyxXQUFBLEdBQWMyRCxVQUFBLENBQVd0RixHQUFBLENBQUlMLEtBQUssRUFBRWdILElBQUEsQ0FBS0MsTUFBQTtFQUM3QyxJQUFJeEUsR0FBQSxJQUFPc0UsS0FBQSxHQUFPeEIsUUFBQSxDQUFRTCxNQUFBLEdBQVNLLFFBQUEsQ0FBUU4sSUFBQSxFQUFNbEYsUUFBQSxDQUFTQyxLQUFBLEVBQU9DLGFBQWE7RUFDOUUsSUFBSSxDQUFDd0MsR0FBQSxFQUNELE9BQU87RUFDWCxJQUFJbkMsU0FBQSxHQUFZbUMsR0FBQSxDQUFJbkMsU0FBQSxDQUFVNEcsT0FBQSxDQUFRekUsR0FBQSxDQUFJOUIsU0FBQSxDQUFVYyxHQUFHO0VBQ3ZELElBQUkwRixLQUFBLElBQVNKLEtBQUEsR0FBT3hCLFFBQUEsQ0FBUU4sSUFBQSxHQUFPTSxRQUFBLENBQVFMLE1BQUEsRUFBUW5ELFlBQUEsQ0FBYVUsR0FBQSxDQUFJOUIsU0FBQSxFQUFXWCxLQUFBLENBQU1NLFNBQUEsQ0FBVWlHLFdBQUEsQ0FBWSxHQUFHdkUsV0FBQSxFQUFhL0IsYUFBYTtFQUN4SSxJQUFJbUgsT0FBQSxHQUFVLElBQUlwQyxZQUFBLENBQWErQixLQUFBLEdBQU9JLEtBQUEsR0FBUTFFLEdBQUEsQ0FBSTVCLFNBQUEsRUFBV2tHLEtBQUEsR0FBT3RFLEdBQUEsQ0FBSTVCLFNBQUEsR0FBWXNHLEtBQUEsRUFBTyxNQUFNLEdBQUcsRUFBRTtFQUN0RyxPQUFPMUUsR0FBQSxDQUFJOUIsU0FBQSxDQUFVMEcsWUFBQSxDQUFhL0csU0FBUyxFQUFFZ0gsT0FBQSxDQUFRM0IsVUFBQSxFQUFZO0lBQUUvRyxJQUFBLEVBQUFtSSxLQUFBO0lBQU1uQixZQUFBLEVBQWN3QjtFQUFRLENBQUM7QUFDcEc7QUFDQSxJQUFJRyxtQkFBQSxHQUFzQjtFQUFPQywwQkFBQSxHQUE2QjtBQUs5RCxTQUFTekIsa0JBQWtCL0YsS0FBQSxFQUFPO0VBQzlCLElBQUl5SCxPQUFBLEdBQVV6SCxLQUFBLENBQU15SCxPQUFBO0VBQ3BCLElBQUlELDBCQUFBLElBQThCQyxPQUFBLEVBQVM7SUFDdkNGLG1CQUFBLEdBQXNCO0lBQ3RCQywwQkFBQSxHQUE2QkMsT0FBQTtJQUM3QixTQUFTdkcsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSXVHLE9BQUEsQ0FBUXRILE1BQUEsRUFBUWUsQ0FBQSxJQUNoQyxJQUFJdUcsT0FBQSxDQUFRdkcsQ0FBQSxFQUFHOEYsSUFBQSxDQUFLVSxvQkFBQSxFQUFzQjtNQUN0Q0gsbUJBQUEsR0FBc0I7TUFDdEI7SUFDSjtFQUNSO0VBQ0EsT0FBT0EsbUJBQUE7QUFDWDtBQU1BLFNBQVM3SSxhQUFha0MsRUFBQSxFQUFJO0VBQ3RCLE9BQU9BLEVBQUEsQ0FBRzBHLE9BQUEsQ0FBUXpCLGVBQUEsRUFBaUIsSUFBSTtBQUMzQztBQUNBLElBQU1GLFVBQUEsR0FBYSxJQUFJbEcsd0JBQUEsQ0FBQWtJLFNBQUEsQ0FBVSxTQUFTO0FBQzFDLElBQU05QixlQUFBLEdBQWtCLElBQUlwRyx3QkFBQSxDQUFBa0ksU0FBQSxDQUFVLGNBQWM7QUFVcEQsU0FBU2hKLFFBQVFzSSxNQUFBLEdBQVMsQ0FBQyxHQUFHO0VBQzFCQSxNQUFBLEdBQVM7SUFBRXRFLEtBQUEsRUFBT3NFLE1BQUEsQ0FBT3RFLEtBQUEsSUFBUztJQUM5QnlELGFBQUEsRUFBZWEsTUFBQSxDQUFPYixhQUFBLElBQWlCO0VBQUk7RUFDL0MsT0FBTyxJQUFJM0csd0JBQUEsQ0FBQW1JLE1BQUEsQ0FBTztJQUNkQyxHQUFBLEVBQUtsQyxVQUFBO0lBQ0wzRixLQUFBLEVBQU87TUFDSDhILEtBQUEsRUFBTztRQUNILE9BQU8sSUFBSTlDLFlBQUEsQ0FBYXJGLE1BQUEsQ0FBT2lGLEtBQUEsRUFBT2pGLE1BQUEsQ0FBT2lGLEtBQUEsRUFBTyxNQUFNLEdBQUcsRUFBRTtNQUNuRTtNQUNBbUQsTUFBTW5ILEVBQUEsRUFBSW9ILElBQUEsRUFBTWhJLEtBQUEsRUFBTztRQUNuQixPQUFPc0YsZ0JBQUEsQ0FBaUIwQyxJQUFBLEVBQU1oSSxLQUFBLEVBQU9ZLEVBQUEsRUFBSXFHLE1BQU07TUFDbkQ7SUFDSjtJQUNBQSxNQUFBO0lBQ0FnQixLQUFBLEVBQU87TUFDSEMsZUFBQSxFQUFpQjtRQUNiQyxZQUFZQyxJQUFBLEVBQU1DLENBQUEsRUFBRztVQUNqQixJQUFJQyxTQUFBLEdBQVlELENBQUEsQ0FBRUMsU0FBQTtVQUNsQixJQUFJQyxPQUFBLEdBQVVELFNBQUEsSUFBYSxnQkFBZ0J2SixJQUFBLEdBQU91SixTQUFBLElBQWEsZ0JBQWdCMUosSUFBQSxHQUFPO1VBQ3RGLElBQUksQ0FBQzJKLE9BQUEsRUFDRCxPQUFPO1VBQ1hGLENBQUEsQ0FBRUcsY0FBQSxDQUFlO1VBQ2pCLE9BQU9ELE9BQUEsQ0FBUUgsSUFBQSxDQUFLcEksS0FBQSxFQUFPb0ksSUFBQSxDQUFLSyxRQUFRO1FBQzVDO01BQ0o7SUFDSjtFQUNKLENBQUM7QUFDTDtBQUNBLFNBQVNDLGFBQWEzQixLQUFBLEVBQU00QixNQUFBLEVBQVE7RUFDaEMsT0FBTyxDQUFDM0ksS0FBQSxFQUFPeUksUUFBQSxLQUFhO0lBQ3hCLElBQUlULElBQUEsR0FBT3JDLFVBQUEsQ0FBV2lELFFBQUEsQ0FBUzVJLEtBQUs7SUFDcEMsSUFBSSxDQUFDZ0ksSUFBQSxLQUFTakIsS0FBQSxHQUFPaUIsSUFBQSxDQUFLOUMsTUFBQSxHQUFTOEMsSUFBQSxDQUFLL0MsSUFBQSxFQUFNbkYsVUFBQSxJQUFjLEdBQ3hELE9BQU87SUFDWCxJQUFJMkksUUFBQSxFQUFVO01BQ1YsSUFBSTdILEVBQUEsR0FBS2tHLGVBQUEsQ0FBZ0JrQixJQUFBLEVBQU1oSSxLQUFBLEVBQU8rRyxLQUFJO01BQzFDLElBQUluRyxFQUFBLEVBQ0E2SCxRQUFBLENBQVNFLE1BQUEsR0FBUy9ILEVBQUEsQ0FBR2lJLGNBQUEsQ0FBZSxJQUFJakksRUFBRTtJQUNsRDtJQUNBLE9BQU87RUFDWDtBQUNKO0FBSUEsSUFBTTdCLElBQUEsR0FBTzJKLFlBQUEsQ0FBYSxPQUFPLElBQUk7QUFJckMsSUFBTTlKLElBQUEsR0FBTzhKLFlBQUEsQ0FBYSxNQUFNLElBQUk7QUFLcEMsSUFBTXpKLFlBQUEsR0FBZXlKLFlBQUEsQ0FBYSxPQUFPLEtBQUs7QUFLOUMsSUFBTTVKLFlBQUEsR0FBZTRKLFlBQUEsQ0FBYSxNQUFNLEtBQUs7QUFJN0MsU0FBUzFKLFVBQVVnQixLQUFBLEVBQU87RUFDdEIsSUFBSWdJLElBQUEsR0FBT3JDLFVBQUEsQ0FBV2lELFFBQUEsQ0FBUzVJLEtBQUs7RUFDcEMsT0FBT2dJLElBQUEsR0FBT0EsSUFBQSxDQUFLL0MsSUFBQSxDQUFLbkYsVUFBQSxHQUFhO0FBQ3pDO0FBSUEsU0FBU2pCLFVBQVVtQixLQUFBLEVBQU87RUFDdEIsSUFBSWdJLElBQUEsR0FBT3JDLFVBQUEsQ0FBV2lELFFBQUEsQ0FBUzVJLEtBQUs7RUFDcEMsT0FBT2dJLElBQUEsR0FBT0EsSUFBQSxDQUFLOUMsTUFBQSxDQUFPcEYsVUFBQSxHQUFhO0FBQzNDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9ydmQvb3V0In0=