System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep)],
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

// .beyond/uimport/temp/@beyond-js/kernel/texts.0.1.9.js
var texts_0_1_9_exports = {};
__export(texts_0_1_9_exports, {
  CurrentTexts: () => CurrentTexts,
  Texts: () => Texts,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(texts_0_1_9_exports);

// node_modules/@beyond-js/kernel/texts/texts.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.9/texts"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./current", {
  hash: 1735458173,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CurrentTexts = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _texts = require2("./texts");
    class CurrentTexts2 extends _core.Events {
      #texts = /* @__PURE__ */new Map();
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #enabled = false;
      get enabled() {
        return this.#enabled;
      }
      set enabled(value) {
        this.#enabled = !!value;
        value && this.fetch().catch(exc => console.error(exc.stack));
      }
      #last;
      get #current() {
        const {
          current: language
        } = _core.languages;
        if (this.#texts.has(language)) return this.#texts.get(language);
        const texts = new _texts.Texts(this.#bundle, {
          language
        });
        this.#texts.set(language, texts);
        return texts;
      }
      get loading() {
        return this.#current.loading;
      }
      get loaded() {
        return this.#current.loaded;
      }
      get ready() {
        !this.loaded && !this.loading && this.fetch().catch(exc => console.error(exc.stack));
        return this.loaded;
      }
      get value() {
        return this.#current.value;
      }
      constructor(bundle) {
        super();
        this.#bundle = bundle;
        if (!bundle) throw new Error(`Bundle parameter must be specified`);
        _core.languages.on("change", this.#change);
        this.#current.on("change", this.#triggerChange);
        this.#last = this.#current;
      }
      #triggerChange = () => {
        this.trigger("change");
      };
      #change = () => {
        this.#last.off("change", this.#triggerChange);
        this.#enabled && this.fetch().catch(exc => console.log(exc.stack));
        this.#current.on("change", this.#triggerChange);
        this.#last = this.#current;
        this.#triggerChange();
      };
      async fetch() {
        await _core.languages.ready;
        await this.#current.fetch();
      }
      async load() {
        await this.#current.fetch();
      }
      destroy() {
        this.#texts.forEach(texts => texts.destroy());
        _core.languages.off("change", this.#change);
      }
      toJSON() {
        return {};
      }
    }
    exports.CurrentTexts = CurrentTexts2;
  }
});
ims.set("./texts", {
  hash: 678111696,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Texts = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Texts2 extends _core.Events {
      #module;
      get module() {
        return this.#module;
      }
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #transversal;
      get transversal() {
        return this.#transversal;
      }
      #multilanguage;
      get multilanguage() {
        return this.#multilanguage;
      }
      #language;
      get language() {
        return this.#language;
      }
      #texts;
      #loaded = false;
      get loaded() {
        return this.#loaded;
      }
      #loading;
      get loading() {
        return this.#loading;
      }
      get value() {
        return this.#texts?.txt;
      }
      get ready() {
        if (this.#loading) return false;
        this.fetch().catch(exc => console.log(exc.stack));
        return !this.#loading && this.#loaded;
      }
      constructor(module2, specs) {
        if (!module2) throw new Error("Invalid parameters");
        super();
        this.#module = module2;
        specs = specs ? specs : {};
        this.#language = specs.language;
        this.#multilanguage = !!specs.language;
        this.#bundle = !specs.transversal ? specs.bundle ? specs.bundle : "txt" : void 0;
        this.#transversal = specs.transversal;
      }
      #update = () => this.trigger("change");
      async fetch() {
        if (this.#loading || this.#loaded) return;
        this.#loading = true;
        this.trigger("change");
        const language = this.#language ? `.${this.#language}` : "";
        const {
          specifier,
          resource
        } = (() => {
          if (this.#transversal) {
            const specifier2 = `${this.#module}.${this.#transversal}${language}`;
            const pkg = (() => {
              const split = this.#module.split("/");
              return split[0].startsWith("@") ? `${split[0]}/${split[1]}` : split[0];
            })();
            const resource2 = `${pkg}/${this.#transversal}${language}`;
            return {
              specifier: specifier2,
              resource: resource2
            };
          } else {
            const specifier2 = `${this.#module}.${this.#bundle}${language}`;
            return {
              specifier: specifier2,
              resource: specifier2
            };
          }
        })();
        const imported = await bimport(resource);
        this.#texts = (() => {
          if (!this.#transversal) return imported;
          const {
            __beyond_transversal: transversal
          } = imported;
          return transversal.bundles.get(specifier);
        })();
        this.#texts.hmr.on("change", this.#update);
        this.#loading = false;
        this.#loaded = true;
        this.trigger("change");
      }
      async load() {
        await this.fetch();
      }
      destroy() {
        this.#texts?.hmr.off("change", this.#update);
      }
      toJSON() {
        return {};
      }
    }
    exports.Texts = Texts2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./current",
  "from": "CurrentTexts",
  "name": "CurrentTexts"
}, {
  "im": "./texts",
  "from": "Texts",
  "name": "Texts"
}];
var CurrentTexts, Texts;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "CurrentTexts") && (CurrentTexts = require2 ? require2("./current").CurrentTexts : value);
  (require2 || prop === "Texts") && (Texts = require2 ? require2("./texts").Texts : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL3RleHRzLjAuMS45LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3RleHRzL19fc291cmNlcy90ZXh0cy9jdXJyZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3RleHRzL19fc291cmNlcy90ZXh0cy90ZXh0cy50cyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIkN1cnJlbnRUZXh0cyIsIlRleHRzIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiRXZlbnRzIiwiTWFwIiwiYnVuZGxlIiwiZW5hYmxlZCIsInZhbHVlIiwiZmV0Y2giLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiY3VycmVudCIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiaGFzIiwiZ2V0IiwidGV4dHMiLCJzZXQiLCJsb2FkaW5nIiwibG9hZGVkIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkVycm9yIiwib24iLCJ0cmlnZ2VyIiwib2ZmIiwibG9nIiwibG9hZCIsImRlc3Ryb3kiLCJmb3JFYWNoIiwidG9KU09OIiwiZXhwb3J0cyIsInRyYW5zdmVyc2FsIiwibXVsdGlsYW5ndWFnZSIsInR4dCIsInNwZWNzIiwic3BlY2lmaWVyIiwicmVzb3VyY2UiLCJwa2ciLCJzcGxpdCIsInN0YXJ0c1dpdGgiLCJpbXBvcnRlZCIsImJpbXBvcnQiLCJfX2JleW9uZF90cmFuc3ZlcnNhbCIsImJ1bmRsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBQ0E7SUFhaUIsTUFDWEosc0JBQXVDSyxhQUFNO01BQy9DLFNBQStDLG1CQUFJQyxL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LGFBQVksR0FBRyxLQUFLLFdBQVcsS0FBSyxVQUFVeEI7WUFDcEQsT0FBTztjQUFDd0I7Y0FBV0MsVUFBVUQ7WUFBUzs7UUFFOUMsSUFBQztRQUVELE1BQU1LLFdBQVcsTUFBTUMsUUFBUUwsUUFBUTtRQUV2QyxLQUFLLFVBQVUsTUFBSztVQUNoQixJQUFJLENBQUMsS0FBSyxjQUFjLE9BQU9JO1VBRS9CLE1BQU07WUFBQ0Usc0JBQXNCWDtVQUFXLElBQUlTO1VBQzVDLE9BQU9ULFlBQVlZLFFBQVE3QixJQUFJcUIsU0FBUztRQUM1QyxJQUFDO1FBRUQsS0FBSyxPQUFPdEMsSUFBSXlCLEdBQUcsVUFBVSxLQUFLLE9BQU87UUFFekMsS0FBSyxXQUFXO1FBQ2hCLEtBQUssVUFBVTtRQUNmLEtBQUtDLFFBQVEsUUFBUTtNQUN6QjtNQU1BLE1BQU1HLE9BQUk7UUFDTixNQUFNLEtBQUt0QixPQUFLO01BQ3BCO01BRUF1QixVQUFPO1FBQ0gsS0FBSyxRQUFROUIsSUFBSTJCLElBQUksVUFBVSxLQUFLLE9BQU87TUFDL0M7TUFFQUssU0FBTTtRQUNGLE9BQU87TUFDWDs7SUFDSEMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haWxlYXJuL2FwcC9vdXQifQ==