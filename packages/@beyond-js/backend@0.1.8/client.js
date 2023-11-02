System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/backend","0.1.8"]]);
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

// .beyond/uimport/temp/@beyond-js/backend/client.0.1.8.js
var client_0_1_8_exports = {};
__export(client_0_1_8_exports, {
  ActionsBridge: () => ActionsBridge,
  Backend: () => Backend,
  __beyond_pkg: () => __beyond_pkg,
  backends: () => backends,
  hmr: () => hmr
});
module.exports = __toCommonJS(client_0_1_8_exports);

// node_modules/@beyond-js/backend/client/client.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/backend@0.1.8/client"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./action/bridge", {
  hash: 1745530134,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ActionsBridge = void 0;
    var _ = require2("./");
    var _backends = require2("../backends");
    class ActionsBridge2 {
      #distribution;
      #bundle;
      #pkg;
      #backend;
      get backend() {
        return _backends.backends.get(this.#pkg);
      }
      constructor(distribution, bundle) {
        this.#distribution = distribution;
        this.#bundle = bundle.specifier;
        this.#pkg = bundle.module.pkg;
        this.#backend = `${bundle.module.pkg}/${this.#distribution}`;
      }
      async execute(action, ...params) {
        const a = new _.default(this.#backend, this.#bundle, action, ...params);
        return await a.execute();
      }
    }
    exports.ActionsBridge = ActionsBridge2;
  }
});
ims.set("./action/execution-error", {
  hash: 3368390780,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ExecutionError = void 0;
    const ExecutionError = class {
      #message;
      get message() {
        return this.#message;
      }
      #stack;
      get stack() {
        return this.#stack;
      }
      constructor(message, stack) {
        this.#message = message;
        this.#stack = stack;
      }
    };
    exports.ExecutionError = ExecutionError;
  }
});
ims.set("./action/index", {
  hash: 501662521,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _backends = require2("../backends");
    var _executionError = require2("./execution-error");
    let autoincrement = 0;
    class _default extends _core.Events {
      #pkg;
      #request;
      #module;
      get module() {
        return this.#module;
      }
      #action;
      get action() {
        return this.#action;
      }
      #params;
      get params() {
        return this.#params;
      }
      constructor(backend, module2, action, ...params) {
        super();
        const id = this.#id;
        const pkg = this.#pkg = (() => {
          const split = backend.split("/");
          split.pop();
          return split.join("/");
        })();
        this.#module = module2;
        this.#action = action;
        this.#params = params;
        this.#request = {
          id,
          pkg,
          module: module2,
          action,
          params
        };
      }
      #id = ++autoincrement;
      get id() {
        return this.#id;
      }
      #channel = `response-v2-${this.#id}`;
      get channel() {
        return this.#channel;
      }
      #executed = false;
      get executed() {
        return this.#executed;
      }
      #executing = false;
      get executing() {
        return this.#executing;
      }
      #error = false;
      get error() {
        return this.#error;
      }
      #timer;
      #attempts = 0;
      #promise = new _core.PendingPromise();
      #send = socket => {
        this.#attempts && this.trigger("retrying", this.#attempts);
        this.#attempts++;
        try {
          socket.emit("rpc-v2", this.#request);
        } catch (exc) {
          this.#executing = false;
          this.#executed = true;
          this.#error = true;
          this.#promise.reject(exc);
        }
      };
      async execute() {
        if (this.#executing || this.#executed) return this.#promise;
        this.#executing = true;
        const backend = await _backends.backends.get(this.#pkg);
        if (!backend) throw new Error(`Project "${this.#pkg}" does not have a backend configured`);
        try {
          const socket = await backend.socket;
          if (!socket) {
            const message = `Error getting socket on "${backend.pkg}" backend. `;
            this.#promise.reject(new Error(message));
            return;
          }
          const onresponse = response => {
            this.#executed = true;
            this.#executing = false;
            clearTimeout(this.#timer);
            socket.off(this.#channel, onresponse);
            const {
              error,
              message,
              source,
              processingTime
            } = response;
            error ? this.#promise.reject(new _executionError.ExecutionError(error.message, error.stack)) : this.#promise.resolve(message);
          };
          const onError = error => {
            this.#executed = true;
            this.#executing = false;
            clearTimeout(this.#timer);
            socket.off();
            this.#promise.reject(new Error("Socket disconnected"));
          };
          socket.on(this.#channel, onresponse);
          socket.on("disconnect", onError);
          socket.on("connect_error", onError);
          this.#send(socket);
        } catch (exc) {
          this.#promise.reject(exc);
          return;
        }
        return this.#promise;
      }
    }
    exports.default = _default;
  }
});
ims.set("./backend", {
  hash: 486330626,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Backend = void 0;
    var _io = require2("./io");
    var _socket = require2("./socket");
    class Backend2 {
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      #host;
      get host() {
        return this.#host;
      }
      #local;
      get local() {
        return this.#local;
      }
      #socket;
      #io = new _io.ServiceIOConfiguration();
      get io() {
        return this.#io;
      }
      constructor(pkg, host, local) {
        this.#pkg = pkg;
        this.#host = host;
        this.#local = local;
        this.#socket = new _socket.default(this);
      }
      get socket() {
        return this.#socket.get();
      }
    }
    exports.Backend = Backend2;
  }
});
ims.set("./backends", {
  hash: 1705909413,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.backends = void 0;
    var _backend = require2("./backend");
    const backends2 = new class {
      #hosts = /* @__PURE__ */new Map();
      register(pkg, host) {
        !this.#hosts.has(pkg) && this.#hosts.set(pkg, new _backend.Backend(pkg, host));
      }
      async get(pkg) {
        if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);
        try {
          const {
            backend: config
          } = (await bimport(`${pkg}/config`)).default;
          if (!config) {
            console.log(`Backend configuration not set on package "${pkg}"`);
            this.#hosts.set(pkg, void 0);
            return;
          }
          const {
            host,
            local
          } = config;
          if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);
          const backend = new _backend.Backend(pkg, host, local);
          this.#hosts.set(pkg, backend);
          return this.#hosts.get(pkg);
        } catch (exc) {
          console.log(`Error importing package "${pkg}" configuration: ${exc.message}`);
          this.#hosts.set(pkg, void 0);
        }
      }
      async execute(pkg, distribution, module2, action, ...params) {
        const a = new (require2("./action").default)(`${pkg}/${distribution}`, module2, action, ...params);
        return await a.execute();
      }
    }();
    exports.backends = backends2;
  }
});
ims.set("./io", {
  hash: 2941830475,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ServiceIOConfiguration = void 0;
    class ServiceIOConfiguration {
      querystring;
    }
    exports.ServiceIOConfiguration = ServiceIOConfiguration;
  }
});
ims.set("./socket/index", {
  hash: 1119353765,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _initiator = require2("./initiator");
    var __decorate = function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    class default_1 {
      #backend;
      #initiator;
      #socket;
      constructor(backend) {
        this.#backend = backend;
        this.#initiator = new _initiator.default(backend);
      }
      async get() {
        if (this.#socket) return this.#socket;
        const backend = this.#backend;
        const {
          pkg
        } = backend;
        pkg !== "@beyond-js/local" && (await this.#initiator.check());
        const {
          io
        } = await bimport("socket.io-client");
        let query = backend.io.querystring && (await backend.io.querystring());
        const {
          host
        } = this.#backend;
        return this.#socket = io(host, {
          transports: ["websocket"],
          "query": query
        });
      }
    }
    exports.default = default_1;
    __decorate([_core.SingleCall], default_1.prototype, "get", null);
  }
});
ims.set("./socket/initiator", {
  hash: 4260137755,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class _default {
      #backend;
      #local;
      constructor(backend) {
        this.#backend = backend;
      }
      #promise;
      #initialise = async () => {
        if (this.#promise) {
          await this.#promise;
          return;
        }
        this.#promise = new _core.PendingPromise();
        if (!this.#backend.local || this.#local) return;
        this.#local = (await bimport("@beyond-js/local/main")).local;
        this.#promise.resolve();
      };
      async check() {
        await this.#initialise();
        if (!this.#local) return;
        const {
          pkg,
          local
        } = this.#backend;
        const id = `${pkg}/${local}`;
        const launcher = this.#local.launchers.get(id);
        const status = await launcher.status;
        if (status === "running") return;
        await launcher.start();
        await new Promise(resolve => setTimeout(resolve, 2e3));
      }
    }
    exports.default = _default;
  }
});
__pkg.exports.descriptor = [{
  "im": "./action/bridge",
  "from": "ActionsBridge",
  "name": "ActionsBridge"
}, {
  "im": "./backend",
  "from": "Backend",
  "name": "Backend"
}, {
  "im": "./backends",
  "from": "backends",
  "name": "backends"
}];
var ActionsBridge, Backend, backends;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ActionsBridge") && (ActionsBridge = require2 ? require2("./action/bridge").ActionsBridge : value);
  (require2 || prop === "Backend") && (Backend = require2 ? require2("./backend").Backend : value);
  (require2 || prop === "backends") && (backends = require2 ? require2("./backends").backends : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQuMC4xLjguanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2FjdGlvbi9icmlkZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2FjdGlvbi9leGVjdXRpb24tZXJyb3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2FjdGlvbi9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50L19fc291cmNlcy9jbGllbnQvYmFja2VuZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50L19fc291cmNlcy9jbGllbnQvYmFja2VuZHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2lvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9zb2NrZXQvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L3NvY2tldC9pbml0aWF0b3IudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJBY3Rpb25zQnJpZGdlIiwiQmFja2VuZCIsIl9fYmV5b25kX3BrZyIsImJhY2tlbmRzIiwiaG1yIiwibW9kdWxlIiwiYmFja2VuZCIsImdldCIsImNvbnN0cnVjdG9yIiwiZGlzdHJpYnV0aW9uIiwiYnVuZGxlIiwic3BlY2lmaWVyIiwicGtnIiwiZXhlY3V0ZSIsImFjdGlvbiIsInBhcmFtcyIsImEiLCJBY3Rpb24iLCJleHBvcnRzIiwiRXhlY3V0aW9uRXJyb3IiLCJtZXNzYWdlIiwic3RhY2siLCJhdXRvaW5jcmVtZW50IiwiRXZlbnRzIiwiaWQiLCJzcGxpdCIsInBvcCIsImpvaW4iLCJjaGFubmVsIiwiZXhlY3V0ZWQiLCJleGVjdXRpbmciLCJlcnJvciIsIlBlbmRpbmdQcm9taXNlIiwic29ja2V0IiwidHJpZ2dlciIsImVtaXQiLCJleGMiLCJyZWplY3QiLCJFcnJvciIsIm9ucmVzcG9uc2UiLCJyZXNwb25zZSIsImNsZWFyVGltZW91dCIsIm9mZiIsInNvdXJjZSIsInByb2Nlc3NpbmdUaW1lIiwicmVzb2x2ZSIsIm9uRXJyb3IiLCJvbiIsImhvc3QiLCJsb2NhbCIsIlNlcnZpY2VJT0NvbmZpZ3VyYXRpb24iLCJpbyIsIlNvY2tldCIsIk1hcCIsInJlZ2lzdGVyIiwiaGFzIiwic2V0IiwiY29uZmlnIiwiYmltcG9ydCIsImRlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicmVxdWlyZSIsInF1ZXJ5c3RyaW5nIiwiSW5pdGlhdG9yIiwiY2hlY2siLCJxdWVyeSIsInRyYW5zcG9ydHMiLCJfX2RlY29yYXRlIiwiU2luZ2xlQ2FsbCIsImxhdW5jaGVyIiwibGF1bmNoZXJzIiwic3RhdHVzIiwic3RhcnQiLCJQcm9taXNlIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFFQTtJQUNpQixNQUNYTCxlQUFhO01BQ1Q7TUFDQTtNQUNUO01BQ1M7TUFFVCxJQUFJTSxVQUFPO1FBQ1YsT0FBT0gsbUJBQVNJLElBQUksS0FBSyxJQUFJO01BQzlCO01BQ0FDLFlBQVlDLGNBQXNCQyxRQUFjO1FBQy9DLEtBQUssZ0JBQWdCRDtRQUNyQixLQUFLLFVBQVVDLE9BQU9DO1FBQ3RCLEtBQUssT0FB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R0MsTUFBTTtRQUN2RyxPQUFPLE1BQU1DLEVBQUVILFNBQU87TUFDMUI7T0FDSDtJQUFBSzs7Ozs7Ozs7Ozs7O0lDbkRLLE1BQU9nQyx1QkFBc0I7TUFDL0JhOztJQUNIN0M7Ozs7Ozs7Ozs7OztJQ0ZEO0lBR0E7Ozs7Ozs7O0lBSWM7TUFDRDtNQUNBO01BQ1Q7TUFFQVYsWUFBWUYsU0FBZ0I7UUFDeEIsS0FBSyxXQUFXQTtRQUNoQixLQUFLLGFBQWEsSUFBSTBELG1CQUFVMUQsT0FBTztNQUMzQztNQUdBLE1BQU1DLE1BQUc7UUFDTCxJQUFJLEtBQUssU0FBUyxPQUFPLEtBQUs7UUFFOUIsTUFBTUQsVUFBVSxLQUFLO1FBQ3JCLE1BQU07VUFBQ007UUFBRyxJQUFJTjtRQUdkTSxRQUFRLHVCQUFzQixNQUFNLEtBQUssV0FBV3FELE9BQUs7UUFFekQsTUFBTTtVQUFDZDtRQUFFLElBQUksTUFBTU8sUUFBUSxrQkFBa0I7UUFDN0MsSUFBSVEsUUFBUTVELFFBQVE2QyxHQUFHWSxnQkFBZSxNQUFNekQsUUFBUTZDLEdBQUdZLGFBQVc7UUFFbEUsTUFBTTtVQUFDZjtRQUFJLElBQUksS0FBSztRQUNwQixPQUFPLEtBQUssVUFBVUcsR0FBR0gsTUFBTTtVQUFDbUIsWUFBWSxDQUFDLFdBQVc7VUFBRyxTQUFTRDtRQUFLLENBQUM7TUFDOUU7O0lBQ0hoRDtJQWZHa0QsWUFEQ0MsZ0JBQVU7Ozs7Ozs7Ozs7OztJQ2pCZjtJQXdCYztNQUNEO01BQ1Q7TUFFQTdELFlBQVlGLFNBQWdCO1FBQ3hCLEtBQUssV0FBV0E7TUFDcEI7TUFFQTtNQUNBLGNBQWMsWUFBVztRQUNyQixJQUFJLEtBQUssVUFBVTtVQUNmLE1BQU0sS0FBSztVQUNYOztRQUVKLEtBQUssV0FBVyxJQUFJMEIsc0JBQWM7UUFFbEMsSUFBSSxDQUFDLEtBQUssU0FBU2lCLFNBQVMsS0FBSyxRQUFRO1FBQ3pDLEtBQUssVUFBdUIsTUFBTVMsUUFBUSx1QkFBdUIsR0FBR1Q7UUFDcEUsS0FBSyxTQUFTSixTQUFPO01BQ3pCO01BRUEsTUFBTW9CLFFBQUs7UUFDUCxNQUFNLEtBQUssYUFBVztRQUN0QixJQUFJLENBQUMsS0FBSyxRQUFRO1FBRWxCLE1BQU07VUFBQ3JEO1VBQUtxQztRQUFLLElBQUksS0FBSztRQUMxQixNQUFNekIsS0FBSyxHQUFHWixPQUFPcUM7UUFDckIsTUFBTXFCLFdBQVcsS0FBSyxPQUFPQyxVQUFVaEUsSUFBSWlCLEVBQUU7UUFDN0MsTUFBTWdELFNBQVMsTUFBTUYsU0FBU0U7UUFDOUIsSUFBSUEsV0FBVyxXQUFXO1FBRTFCLE1BQU1GLFNBQVNHLE9BQUs7UUFDcEIsTUFBTSxJQUFJQyxRQUFRN0IsV0FBVzhCLFdBQVc5QixTQUFTLEdBQUksQ0FBQztNQUMxRDs7SUFDSDNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWlsZWFybi9hcHAvb3V0In0=