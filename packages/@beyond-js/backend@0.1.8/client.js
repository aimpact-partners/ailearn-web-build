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

// .beyond/uimport/@beyond-js/backend/client.0.1.8.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50LjAuMS44LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vYnJpZGdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vZXhlY3V0aW9uLWVycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2JhY2tlbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2JhY2tlbmRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9pby50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50L19fc291cmNlcy9jbGllbnQvc29ja2V0L2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9zb2NrZXQvaW5pdGlhdG9yLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiQWN0aW9uc0JyaWRnZSIsIkJhY2tlbmQiLCJfX2JleW9uZF9wa2ciLCJiYWNrZW5kcyIsImhtciIsIm1vZHVsZSIsImJhY2tlbmQiLCJnZXQiLCJjb25zdHJ1Y3RvciIsImRpc3RyaWJ1dGlvbiIsImJ1bmRsZSIsInNwZWNpZmllciIsInBrZyIsImV4ZWN1dGUiLCJhY3Rpb24iLCJwYXJhbXMiLCJhIiwiQWN0aW9uIiwiZXhwb3J0cyIsIkV4ZWN1dGlvbkVycm9yIiwibWVzc2FnZSIsInN0YWNrIiwiYXV0b2luY3JlbWVudCIsIkV2ZW50cyIsImlkIiwic3BsaXQiLCJwb3AiLCJqb2luIiwiY2hhbm5lbCIsImV4ZWN1dGVkIiwiZXhlY3V0aW5nIiwiZXJyb3IiLCJQZW5kaW5nUHJvbWlzZSIsInNvY2tldCIsInRyaWdnZXIiLCJlbWl0IiwiZXhjIiwicmVqZWN0IiwiRXJyb3IiLCJvbnJlc3BvbnNlIiwicmVzcG9uc2UiLCJjbGVhclRpbWVvdXQiLCJvZmYiLCJzb3VyY2UiLCJwcm9jZXNzaW5nVGltZSIsInJlc29sdmUiLCJvbkVycm9yIiwib24iLCJob3N0IiwibG9jYWwiLCJTZXJ2aWNlSU9Db25maWd1cmF0aW9uIiwiaW8iLCJTb2NrZXQiLCJNYXAiLCJyZWdpc3RlciIsImhhcyIsInNldCIsImNvbmZpZyIsImJpbXBvcnQiLCJkZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlcXVpcmUiLCJxdWVyeXN0cmluZyIsIkluaXRpYXRvciIsImNoZWNrIiwicXVlcnkiLCJ0cmFuc3BvcnRzIiwiX19kZWNvcmF0ZSIsIlNpbmdsZUNhbGwiLCJsYXVuY2hlciIsImxhdW5jaGVycyIsInN0YXR1cyIsInN0YXJ0IiwiUHJvbWlzZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBRUE7SUFDaUIsTUFDWEwsZUFBYTtNQUNUO01BQ0E7TUFDVDtNQUNTO01BRVQsSUFBSU0sVUFBTztRQUNWLE9BQU9ILG1CQUFTSSxJQUFJLEtBQUssSUFBSTtNQUM5QjtNQUNBQyxZQUFZQyxjQUFzQkMsUUFBYztRQUMvQyxLQUFLLGdCQUFnQkQ7UUFDckIsS0FBSyxVQUFVQyxPQUFPQztRQUN0QixLQUFLLE9BQU9ELE9B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QU07UUFDdkcsT0FBTyxNQUFNQyxFQUFFSCxTQUFPO01BQzFCO09BQ0g7SUFBQUs7Ozs7Ozs7Ozs7OztJQ25ESyxNQUFPZ0MsdUJBQXNCO01BQy9CYTs7SUFDSDdDOzs7Ozs7Ozs7Ozs7SUNGRDtJQUdBOzs7Ozs7OztJQUljO01BQ0Q7TUFDQTtNQUNUO01BRUFWLFlBQVlGLFNBQWdCO1FBQ3hCLEtBQUssV0FBV0E7UUFDaEIsS0FBSyxhQUFhLElBQUkwRCxtQkFBVTFELE9BQU87TUFDM0M7TUFHQSxNQUFNQyxNQUFHO1FBQ0wsSUFBSSxLQUFLLFNBQVMsT0FBTyxLQUFLO1FBRTlCLE1BQU1ELFVBQVUsS0FBSztRQUNyQixNQUFNO1VBQUNNO1FBQUcsSUFBSU47UUFHZE0sUUFBUSx1QkFBc0IsTUFBTSxLQUFLLFdBQVdxRCxPQUFLO1FBRXpELE1BQU07VUFBQ2Q7UUFBRSxJQUFJLE1BQU1PLFFBQVEsa0JBQWtCO1FBQzdDLElBQUlRLFFBQVE1RCxRQUFRNkMsR0FBR1ksZ0JBQWUsTUFBTXpELFFBQVE2QyxHQUFHWSxhQUFXO1FBRWxFLE1BQU07VUFBQ2Y7UUFBSSxJQUFJLEtBQUs7UUFDcEIsT0FBTyxLQUFLLFVBQVVHLEdBQUdILE1BQU07VUFBQ21CLFlBQVksQ0FBQyxXQUFXO1VBQUcsU0FBU0Q7UUFBSyxDQUFDO01BQzlFOztJQUNIaEQ7SUFmR2tELFlBRENDLGdCQUFVOzs7Ozs7Ozs7Ozs7SUNqQmY7SUF3QmM7TUFDRDtNQUNUO01BRUE3RCxZQUFZRixTQUFnQjtRQUN4QixLQUFLLFdBQVdBO01BQ3BCO01BRUE7TUFDQSxjQUFjLFlBQVc7UUFDckIsSUFBSSxLQUFLLFVBQVU7VUFDZixNQUFNLEtBQUs7VUFDWDs7UUFFSixLQUFLLFdBQVcsSUFBSTBCLHNCQUFjO1FBRWxDLElBQUksQ0FBQyxLQUFLLFNBQVNpQixTQUFTLEtBQUssUUFBUTtRQUN6QyxLQUFLLFVBQXVCLE1BQU1TLFFBQVEsdUJBQXVCLEdBQUdUO1FBQ3BFLEtBQUssU0FBU0osU0FBTztNQUN6QjtNQUVBLE1BQU1vQixRQUFLO1FBQ1AsTUFBTSxLQUFLLGFBQVc7UUFDdEIsSUFBSSxDQUFDLEtBQUssUUFBUTtRQUVsQixNQUFNO1VBQUNyRDtVQUFLcUM7UUFBSyxJQUFJLEtBQUs7UUFDMUIsTUFBTXpCLEtBQUssR0FBR1osT0FBT3FDO1FBQ3JCLE1BQU1xQixXQUFXLEtBQUssT0FBT0MsVUFBVWhFLElBQUlpQixFQUFFO1FBQzdDLE1BQU1nRCxTQUFTLE1BQU1GLFNBQVNFO1FBQzlCLElBQUlBLFdBQVcsV0FBVztRQUUxQixNQUFNRixTQUFTRyxPQUFLO1FBQ3BCLE1BQU0sSUFBSUMsUUFBUTdCLFdBQVc4QixXQUFXOUIsU0FBUyxHQUFJLENBQUM7TUFDMUQ7O0lBQ0gzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpbGVhcm4vYXBwL291dCJ9