System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/events@0.0.6/events","@beyond-js/reactive@1.1.11/model"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.6"],["@beyond-js/reactive","1.1.11"],["@bgroup/http-suite","1.0.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/events@0.0.6/events', dep), dep => dependencies.set('@beyond-js/reactive@1.1.11/model', dep)],
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

// .beyond/uimport/@bgroup/http-suite/api.1.0.3.js
var api_1_0_3_exports = {};
__export(api_1_0_3_exports, {
  Api: () => Api,
  JCall: () => JCall,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(api_1_0_3_exports);

// node_modules/@bgroup/http-suite/api/api.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/reactive@1.1.11/model"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/http-suite@0.0.1/api"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/reactive/model", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./api", {
  hash: 3516067986,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Api = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _jcall = require2("./jcall");
    class Api2 extends _core.Events {
      #url;
      get url() {
        return this.#url ?? "";
      }
      #fetcher;
      get actions() {
        return this.#fetcher.actions;
      }
      get streamResponse() {
        return this.#fetcher.streamResponse;
      }
      get metadata() {
        return this.#fetcher.metadata;
      }
      constructor(url) {
        super();
        this.#url = url;
        this.#fetcher = new _jcall.JCall();
        this.#fetcher.on("action.received", () => this.trigger("action.received"));
        this.#fetcher.on("stream.response", this.#getResponse);
      }
      #getResponse = () => {
        this.trigger("stream.response");
      };
      async action(method = "get", route, specs = {}) {
        return this.#fetcher[method](this.getURL(route), specs);
      }
      getURL(route) {
        return `${this.#url}${route}`;
      }
      bearer(bearer) {
        this.#fetcher.bearer(bearer);
        return this;
      }
      get(route, specs) {
        return this.action("get", route, specs);
      }
      post(route, specs) {
        return this.action("post", route, specs);
      }
      put(route, specs) {
        return this.action("put", route, specs);
      }
      delete(route, specs) {
        return this.action("delete", route, specs);
      }
      stream(route, specs = {}) {
        return this.action("stream", route, specs);
      }
    }
    exports.Api = Api2;
  }
});
ims.set("./jcall", {
  hash: 2319073315,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.JCall = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _stream = require2("./stream");
    class JCall2 extends _model.ReactiveModel {
      get actions() {
        return this.#streamer.actions;
      }
      get streamResponse() {
        return this.#streamer.response;
      }
      #bearer;
      bearer(bearer) {
        if (bearer) this.#bearer = bearer;
        return this;
      }
      #streamer;
      constructor() {
        super();
        this.#streamer = new _stream.Stream(this);
      }
      getHeaders = (specs, multipart) => {
        let headers = new Headers();
        const bearer = specs.bearer || this.#bearer;
        if (bearer) {
          headers.append("Authorization", `Bearer ${bearer}`);
        }
        if (specs.bearer) delete specs.bearer;
        const keys = Object.keys(specs);
        keys.forEach(key => {
          if (key === "bearer") return;
          headers.append(key, specs[key]);
        });
        if (multipart) {
          headers.delete("Content-Type");
        }
        return headers;
      };
      #formData;
      formData = specs => {
        this.#formData = new FormData();
        const keys = Object.keys(specs);
        keys.forEach(key => {
          this.#formData.append(key, specs[key]);
        });
        return this.#formData;
      };
      #processGetParams(params) {
        const emptyParams = Object.entries(params).length === 0 && params.constructor === Object;
        if (emptyParams) return "";
        const parameters = new URLSearchParams();
        for (const key in params) {
          if (![NaN, void 0, ""].includes(params[key])) {
            parameters.append(key, params[key]);
          }
        }
        return parameters;
      }
      #processPostParams = (params, multipart) => {
        const emptyParams = Object.entries(params).length === 0 && params.constructor === Object;
        if (emptyParams) return;
        if (multipart) {
          const data = this.formData(params);
          return data;
        }
        return JSON.stringify(params);
      };
      execute = async (url, method = "get", params = {}, headersSpecs, stream, data) => {
        try {
          if (!headersSpecs) {
            headersSpecs = {};
          }
          const multipart = params.multipart;
          let headers = this.getHeaders({
            ...headersSpecs,
            bearer: params.bearer
          }, multipart);
          delete params.multipart;
          delete params.bearer;
          const specs = {
            method,
            headers,
            mode: "cors"
          };
          if (params.bearer) delete params.bearer;
          if (method === "post" || method === "put" || method === "DELETE") {
            specs.body = this.#processPostParams(params, multipart);
          } else if (method === "get") {
            const queryString = this.#processGetParams(params).toString();
            if (queryString) url += `?${queryString}`;
          }
          if (stream) return this.#streamer.execute(url, specs);
          const response = await fetch(url, specs);
          return response.json();
        } catch (e) {
          console.error("error jcall", e);
        }
      };
      stream = (url, params, headers = {
        "Content-Type": "application/json"
      }) => this.execute(url, "post", params, headers, true);
      get = (url, params, headers) => {
        return this.execute(url, "get", params);
      };
      post = (url, params, headers = {
        "Content-Type": "application/json"
      }) => this.execute(url, "post", params, headers);
      delete = (url, params, headers = {
        "Content-Type": "application/json"
      }) => {
        return this.execute(url, "DELETE", params, headers);
      };
      put = (url, params, headers = {
        "Content-Type": "application/json"
      }) => this.execute(url, "put", params, headers);
    }
    exports.JCall = JCall2;
  }
});
ims.set("./stream", {
  hash: 3091227484,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Stream = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Stream {
      #SEPARATORS = {
        METADATA: "\xFF",
        START: "\u{1F638}",
        END: "\u{1F58B}\uFE0F"
      };
      #metadata = {
        started: false,
        value: "",
        parsed: {
          value: void 0
        }
      };
      get metadata() {
        return this.#metadata.parsed;
      }
      #actions = [];
      get actions() {
        return this.#actions;
      }
      #response = "";
      get response() {
        return this.#response;
      }
      #parent;
      #currentTool = {
        started: false,
        value: "",
        parsed: {
          value: void 0
        }
      };
      constructor(parent) {
        this.#parent = parent;
      }
      #processResponse = promise => {
        const metadata = this.#metadata;
        try {
          this.#metadata.parsed.value = JSON.parse(metadata.value);
        } catch (exc) {
          console.log(metadata);
          console.error(exc);
          this.#metadata.parsed.error = "Error parsing metadata";
        }
        promise.resolve({
          value: this.#response,
          ...metadata.parsed.value
        });
        this.#response = void 0;
      };
      #cleanCurrentTool() {
        this.#currentTool = {
          started: false,
          value: "",
          parsed: {
            value: void 0
          }
        };
      }
      async #handleMetadata(chunk, response) {
        this.#metadata.started = true;
        const split = chunk.split(this.#SEPARATORS.METADATA);
        this.#metadata.value += split[1];
        return split[0] ? response += split[0] : response;
      }
      handleStart(chunk, response) {
        const splitted = chunk.split(this.#SEPARATORS.START);
        this.#currentTool.started = true;
        chunk = "";
        if (splitted[1].includes(this.#SEPARATORS.END)) {
          const splitted2 = splitted[1].split(this.#SEPARATORS.END);
          this.#currentTool.value = splitted2[0];
          this.#actions.push(splitted2[0]);
          response += this.#SEPARATORS.START + this.#currentTool.value + this.#SEPARATORS.END;
        } else {
          response += splitted[0];
          this.#currentTool.value += splitted[1];
        }
        return response;
      }
      handleEnd(chunk, response) {
        const splitted = chunk.split(this.#SEPARATORS.END);
        this.#currentTool.value += splitted[0];
        this.#currentTool.started = false;
        this.#actions.push(this.#currentTool.value);
        this.#response += this.#SEPARATORS.START + this.#currentTool.value + this.#SEPARATORS.END;
        return splitted[1];
      }
      async #read(response, promise) {
        const reader = response.body?.getReader();
        while (true) {
          const {
            done,
            value
          } = await reader.read();
          let chunk = new TextDecoder().decode(value);
          if (done) return this.#processResponse(promise);
          if (chunk.includes(this.#SEPARATORS.METADATA)) {
            this.#handleMetadata(chunk, this.#response);
            continue;
          }
          if (this.#metadata.started) {
            this.#metadata.value += chunk;
            this.#parent.trigger("stream.response");
            return;
          }
          if (chunk.includes(this.#SEPARATORS.START)) {
            this.handleStart(chunk, this.#response);
          } else if (this.#currentTool.started && chunk.includes(this.#SEPARATORS.END)) {
            this.handleEnd(chunk, this.#response);
            this.#cleanCurrentTool();
          }
          this.#response += chunk;
          this.#parent.triggerEvent("action.received");
          this.#parent.triggerEvent("stream.response");
        }
      }
      async execute(url, specs) {
        try {
          const promise = new _core.PendingPromise();
          this.#response = "";
          const response = await fetch(url, specs);
          if (!response.ok) {
            throw new Error("error in stream");
          }
          this.#read(response, promise);
          return promise;
        } catch (e) {
          console.error(e);
        }
      }
    }
    exports.Stream = Stream;
  }
});
__pkg.exports.descriptor = [{
  "im": "./api",
  "from": "Api",
  "name": "Api"
}, {
  "im": "./jcall",
  "from": "JCall",
  "name": "JCall"
}];
var Api, JCall;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Api") && (Api = require2 ? require2("./api").Api : value);
  (require2 || prop === "JCall") && (JCall = require2 ? require2("./jcall").JCall : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmdyb3VwL2h0dHAtc3VpdGUvYXBpLjEuMC4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvaHR0cC1zdWl0ZS9hcGkvX19zb3VyY2VzL2FwaS9hcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJncm91cC9odHRwLXN1aXRlL2FwaS9fX3NvdXJjZXMvYXBpL2pjYWxsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvaHR0cC1zdWl0ZS9hcGkvX19zb3VyY2VzL2FwaS9zdHJlYW0udHMiXSwibmFtZXMiOlsiYXBpXzFfMF8zX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFwaSIsIkpDYWxsIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9jb3JlIiwicmVxdWlyZTIiLCJfamNhbGwiLCJBcGkyIiwiRXZlbnRzIiwidXJsIiwiZmV0Y2hlciIsImFjdGlvbnMiLCJzdHJlYW1SZXNwb25zZSIsIm1ldGFkYXRhIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXIiLCJnZXRSZXNwb25zZSIsIiNnZXRSZXNwb25zZSIsImFjdGlvbiIsIm1ldGhvZCIsInJvdXRlIiwic3BlY3MiLCJnZXRVUkwiLCJiZWFyZXIiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsZXRlIiwic3RyZWFtIiwiX21vZGVsIiwiX3N0cmVhbSIsIkpDYWxsMiIsIlJlYWN0aXZlTW9kZWwiLCJzdHJlYW1lciIsInJlc3BvbnNlIiwiU3RyZWFtIiwiZ2V0SGVhZGVycyIsIm11bHRpcGFydCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwicHJvY2Vzc0dldFBhcmFtcyIsIiNwcm9jZXNzR2V0UGFyYW1zIiwicGFyYW1zIiwiZW1wdHlQYXJhbXMiLCJlbnRyaWVzIiwibGVuZ3RoIiwicGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIk5hTiIsImluY2x1ZGVzIiwicHJvY2Vzc1Bvc3RQYXJhbXMiLCIjcHJvY2Vzc1Bvc3RQYXJhbXMiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImV4ZWN1dGUiLCJoZWFkZXJzU3BlY3MiLCJtb2RlIiwiYm9keSIsInF1ZXJ5U3RyaW5nIiwidG9TdHJpbmciLCJmZXRjaCIsImpzb24iLCJlIiwiY29uc29sZSIsImVycm9yIiwiU0VQQVJBVE9SUyIsIk1FVEFEQVRBIiwiU1RBUlQiLCJFTkQiLCJzdGFydGVkIiwidmFsdWUiLCJwYXJzZWQiLCJwYXJlbnQiLCJjdXJyZW50VG9vbCIsInByb2Nlc3NSZXNwb25zZSIsInByb21pc2UiLCJwYXJzZSIsImV4YyIsImxvZyIsInJlc29sdmUiLCJjbGVhbkN1cnJlbnRUb29sIiwiI2NsZWFuQ3VycmVudFRvb2wiLCJoYW5kbGVNZXRhZGF0YSIsIiNoYW5kbGVNZXRhZGF0YSIsImNodW5rIiwic3BsaXQiLCJoYW5kbGVTdGFydCIsInNwbGl0dGVkIiwic3BsaXR0ZWQyIiwicHVzaCIsImhhbmRsZUVuZCIsInJlYWQiLCIjcmVhZCIsInJlYWRlciIsImdldFJlYWRlciIsImRvbmUiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsInRyaWdnZXJFdmVudCIsIlBlbmRpbmdQcm9taXNlIiwib2siLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsaUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxpQkFBQTtFQUFBRSxHQUFBLEVBQUFBLENBQUEsS0FBQUEsR0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUixpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7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QixVQUFBLENBQVlDLFFBQVEsR0FBRztZQUM5QyxLQUFLLENBQUFnQixjQUFBLENBQWdCRSxLQUFBLEVBQU8sS0FBSyxDQUFBMUQsUUFBUztZQUMxQzs7VUFHRCxJQUFJLEtBQUssQ0FBQXRCLFFBQUEsQ0FBVWlFLE9BQUEsRUFBUztZQUMzQixLQUFLLENBQUFqRSxRQUFBLENBQVVrRSxLQUFBLElBQVNjLEtBQUE7WUFDeEIsS0FBSyxDQUFBWixNQUFBLENBQVFqRSxPQUFBLENBQVEsaUJBQWlCO1lBQ3RDOztVQUdELElBQUk2RSxLQUFBLENBQU1wQyxRQUFBLENBQVMsS0FBSyxDQUFBaUIsVUFBQSxDQUFZRSxLQUFLLEdBQUc7WUFDM0MsS0FBS21CLFdBQUEsQ0FBWUYsS0FBQSxFQUFPLEtBQUssQ0FBQTFELFFBQVM7cUJBQzVCLEtBQUssQ0FBQStDLFdBQUEsQ0FBYUosT0FBQSxJQUFXZSxLQUFBLENBQU1wQyxRQUFBLENBQVMsS0FBSyxDQUFBaUIsVUFBQSxDQUFZRyxHQUFHLEdBQUc7WUFFN0UsS0FBS3NCLFNBQUEsQ0FBVU4sS0FBQSxFQUFPLEtBQUssQ0FBQTFELFFBQVM7WUFDcEMsS0FBSyxDQUFBc0QsZ0JBQUEsQ0FBaUI7O1VBR3ZCLEtBQUssQ0FBQXRELFFBQUEsSUFBYTBELEtBQUE7VUFDbEIsS0FBSyxDQUFBWixNQUFBLENBQVEwQixZQUFBLENBQWEsaUJBQWlCO1VBQzNDLEtBQUssQ0FBQTFCLE1BQUEsQ0FBUTBCLFlBQUEsQ0FBYSxpQkFBaUI7O01BRTdDO01BRUEsTUFBTTVDLFFBQVF0RCxHQUFBLEVBQUthLEtBQUEsRUFBSztRQUN2QixJQUFJO1VBQ0gsTUFBTThELE9BQUEsR0FBVSxJQUFJaEYsS0FBQSxDQUFBd0csY0FBQSxDQUFjO1VBQ2xDLEtBQUssQ0FBQXpFLFFBQUEsR0FBWTtVQUNqQixNQUFNQSxRQUFBLEdBQXFCLE1BQU1rQyxLQUFBLENBQU01RCxHQUFBLEVBQUthLEtBQUs7VUFFakQsSUFBSSxDQUFDYSxRQUFBLENBQVMwRSxFQUFBLEVBQUk7WUFDakIsTUFBTSxJQUFJQyxLQUFBLENBQU0saUJBQWlCOztVQUdsQyxLQUFLLENBQUFWLElBQUEsQ0FBTWpFLFFBQUEsRUFBVWlELE9BQU87VUFDNUIsT0FBT0EsT0FBQTtpQkFDQ2IsQ0FBQSxFQUFQO1VBQ0RDLE9BQUEsQ0FBUUMsS0FBQSxDQUFNRixDQUFDOztNQUVqQjs7SUFDQXJFLE9BQUEsQ0FBQWtDLE1BQUEsR0FBQUEsTUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FwcC9vdXQifQ==