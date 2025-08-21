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

// .beyond/uimport/temp/prosemirror-history.1.4.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLWhpc3RvcnkuMS40LjEuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3ItaGlzdG9yeS9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3NlbWlycm9yX2hpc3RvcnlfMV80XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiY2xvc2VIaXN0b3J5IiwiaGlzdG9yeSIsInJlZG8iLCJyZWRvRGVwdGgiLCJyZWRvTm9TY3JvbGwiLCJ1bmRvIiwidW5kb0RlcHRoIiwidW5kb05vU2Nyb2xsIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9yb3BlX3NlcXVlbmNlIiwiX190b0VTTSIsInJlcXVpcmUiLCJpbXBvcnRfcHJvc2VtaXJyb3JfdHJhbnNmb3JtIiwiaW1wb3J0X3Byb3NlbWlycm9yX3N0YXRlIiwibWF4X2VtcHR5X2l0ZW1zIiwiQnJhbmNoIiwiY29uc3RydWN0b3IiLCJpdGVtcyIsImV2ZW50Q291bnQiLCJwb3BFdmVudCIsInN0YXRlIiwicHJlc2VydmVJdGVtcyIsImVuZCIsImxlbmd0aCIsIm5leHQiLCJnZXQiLCJzZWxlY3Rpb24iLCJyZW1hcCIsIm1hcEZyb20iLCJyZW1hcHBpbmciLCJtYXBzIiwidHJhbnNmb3JtIiwidHIiLCJyZW1haW5pbmciLCJhZGRBZnRlciIsImFkZEJlZm9yZSIsImZvckVhY2giLCJpdGVtIiwiaSIsInN0ZXAiLCJwdXNoIiwiSXRlbSIsIm1hcCIsInNsaWNlIiwibWF5YmVTdGVwIiwiZG9jIiwibWFwcGluZyIsImFwcGVuZE1hcCIsImFwcGVuZCIsInJldmVyc2UiLCJjb25jYXQiLCJhZGRUcmFuc2Zvcm0iLCJoaXN0T3B0aW9ucyIsIm5ld0l0ZW1zIiwib2xkSXRlbXMiLCJsYXN0SXRlbSIsInN0ZXBzIiwiaW52ZXJ0IiwiZG9jcyIsIm1lcmdlZCIsIm1lcmdlIiwicG9wIiwib3ZlcmZsb3ciLCJkZXB0aCIsIkRFUFRIX09WRVJGTE9XIiwiY3V0T2ZmRXZlbnRzIiwiZnJvbSIsInRvIiwiTWFwcGluZyIsIm1pcnJvclBvcyIsIm1pcnJvck9mZnNldCIsImFkZE1hcHMiLCJhcnJheSIsInJlYmFzZWQiLCJyZWJhc2VkVHJhbnNmb3JtIiwicmViYXNlZENvdW50IiwicmViYXNlZEl0ZW1zIiwic3RhcnQiLCJNYXRoIiwibWF4IiwibmV3VW50aWwiLCJpUmViYXNlZCIsInBvcyIsImdldE1pcnJvciIsIm1pbiIsIm5ld01hcHMiLCJicmFuY2giLCJlbXB0eUl0ZW1Db3VudCIsImNvbXByZXNzIiwiY291bnQiLCJ1cHRvIiwiZXZlbnRzIiwiZ2V0TWFwIiwibmV3SXRlbSIsImxhc3QiLCJkZWZhdWx0IiwiZW1wdHkiLCJuIiwiY3V0UG9pbnQiLCJvdGhlciIsIkhpc3RvcnlTdGF0ZSIsImRvbmUiLCJ1bmRvbmUiLCJwcmV2UmFuZ2VzIiwicHJldlRpbWUiLCJwcmV2Q29tcG9zaXRpb24iLCJhcHBseVRyYW5zYWN0aW9uIiwiaGlzdG9yeTIiLCJvcHRpb25zIiwiaGlzdG9yeVRyIiwiZ2V0TWV0YSIsImhpc3RvcnlLZXkiLCJoaXN0b3J5U3RhdGUiLCJjbG9zZUhpc3RvcnlLZXkiLCJhcHBlbmRlZCIsIm11c3RQcmVzZXJ2ZUl0ZW1zIiwicmFuZ2VzRm9yIiwiY29tcG9zaXRpb24iLCJuZXdHcm91cCIsInRpbWUiLCJuZXdHcm91cERlbGF5IiwiaXNBZGphY2VudFRvIiwibWFwUmFuZ2VzIiwiZ2V0Qm9va21hcmsiLCJkb2NDaGFuZ2VkIiwiYWRqYWNlbnQiLCJyZXN1bHQiLCJfZnJvbSIsIl90byIsInJhbmdlcyIsImhpc3RUcmFuc2FjdGlvbiIsInJlZG8yIiwic3BlYyIsImNvbmZpZyIsInJlc29sdmUiLCJhZGRlZCIsIm5ld0hpc3QiLCJzZXRTZWxlY3Rpb24iLCJzZXRNZXRhIiwiY2FjaGVkUHJlc2VydmVJdGVtcyIsImNhY2hlZFByZXNlcnZlSXRlbXNQbHVnaW5zIiwicGx1Z2lucyIsImhpc3RvcnlQcmVzZXJ2ZUl0ZW1zIiwiUGx1Z2luS2V5IiwiUGx1Z2luIiwia2V5IiwiaW5pdCIsImFwcGx5IiwiaGlzdCIsInByb3BzIiwiaGFuZGxlRE9NRXZlbnRzIiwiYmVmb3JlaW5wdXQiLCJ2aWV3IiwiZSIsImlucHV0VHlwZSIsImNvbW1hbmQiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BhdGNoIiwiYnVpbGRDb21tYW5kIiwic2Nyb2xsIiwiZ2V0U3RhdGUiLCJzY3JvbGxJbnRvVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsaUNBQUE7QUFBQUMsUUFBQSxDQUFBRCxpQ0FBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBWixpQ0FBQTs7O0FDQUEsSUFBQWEsb0JBQUEsR0FBeUJDLE9BQUEsQ0FBQUMsT0FBQTtBQUN6QixJQUFBQyw0QkFBQSxHQUF3QkQsT0FBQTtBQUN4QixJQUFBRSx3QkFBQSxHQUFrQ0YsT0FBQTtBQWtCbEMsSUFBTUcsZUFBQSxHQUFrQjtBQUN4QixJQUFNQyxNQUFBLEdBQU4sTUFBYTtFQUNUQyxZQUFZQyxLQUFBLEVBQU9DLFVBQUEsRUFBWTtJQUMzQixLQUFLRCxLQUFBLEdBQVFBLEtBQUE7SUFDYixLQUFLQyxVQUFBLEdBQWFBLFVBQUE7RUFDdEI7RUFHQUMsU0FBU0MsS0FBQSxFQUFPQyxhQUFBLEVBQWU7SUFD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