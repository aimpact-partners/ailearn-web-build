System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/logger","0.4.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
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

// .beyond/uimport/@firebase/logger.0.4.2.js
var logger_0_4_2_exports = {};
__export(logger_0_4_2_exports, {
  LogLevel: () => LogLevel,
  Logger: () => Logger,
  setLogLevel: () => setLogLevel,
  setUserLogHandler: () => setUserLogHandler
});
module.exports = __toCommonJS(logger_0_4_2_exports);

// node_modules/@firebase/logger/dist/esm/index.esm2017.js
var instances = [];
var LogLevel;
(function (LogLevel2) {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
  "debug": LogLevel.DEBUG,
  "verbose": LogLevel.VERBOSE,
  "info": LogLevel.INFO,
  "warn": LogLevel.WARN,
  "error": LogLevel.ERROR,
  "silent": LogLevel.SILENT
};
var defaultLogLevel = LogLevel.INFO;
var ConsoleMethod = {
  [LogLevel.DEBUG]: "log",
  [LogLevel.VERBOSE]: "log",
  [LogLevel.INFO]: "info",
  [LogLevel.WARN]: "warn",
  [LogLevel.ERROR]: "error"
};
var defaultLogHandler = (instance, logType, ...args) => {
  if (logType < instance.logLevel) {
    return;
  }
  const now = new Date().toISOString();
  const method = ConsoleMethod[logType];
  if (method) {
    console[method](`[${now}]  ${instance.name}:`, ...args);
  } else {
    throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
  }
};
var Logger = class {
  constructor(name) {
    this.name = name;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
    instances.push(this);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(val) {
    if (!(val in LogLevel)) {
      throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
    }
    this._logLevel = val;
  }
  setLogLevel(val) {
    this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(val) {
    if (typeof val !== "function") {
      throw new TypeError("Value assigned to `logHandler` must be a function");
    }
    this._logHandler = val;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(val) {
    this._userLogHandler = val;
  }
  debug(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
    this._logHandler(this, LogLevel.DEBUG, ...args);
  }
  log(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
    this._logHandler(this, LogLevel.VERBOSE, ...args);
  }
  info(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
    this._logHandler(this, LogLevel.INFO, ...args);
  }
  warn(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
    this._logHandler(this, LogLevel.WARN, ...args);
  }
  error(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
    this._logHandler(this, LogLevel.ERROR, ...args);
  }
};
function setLogLevel(level) {
  instances.forEach(inst => {
    inst.setLogLevel(level);
  });
}
function setUserLogHandler(logCallback, options) {
  for (const instance of instances) {
    let customLogLevel = null;
    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }
    if (logCallback === null) {
      instance.userLogHandler = null;
    } else {
      instance.userLogHandler = (instance2, level, ...args) => {
        const message = args.map(arg => {
          if (arg == null) {
            return null;
          } else if (typeof arg === "string") {
            return arg;
          } else if (typeof arg === "number" || typeof arg === "boolean") {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(arg => arg).join(" ");
        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance2.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message,
            args,
            type: instance2.name
          });
        }
      };
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvbG9nZ2VyLjAuNC4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9sb2dnZXIvc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6WyJsb2dnZXJfMF80XzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiTG9nTGV2ZWwiLCJMb2dnZXIiLCJzZXRMb2dMZXZlbCIsInNldFVzZXJMb2dIYW5kbGVyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImluc3RhbmNlcyIsIkxvZ0xldmVsMiIsImxldmVsU3RyaW5nVG9FbnVtIiwiREVCVUciLCJWRVJCT1NFIiwiSU5GTyIsIldBUk4iLCJFUlJPUiIsIlNJTEVOVCIsImRlZmF1bHRMb2dMZXZlbCIsIkNvbnNvbGVNZXRob2QiLCJkZWZhdWx0TG9nSGFuZGxlciIsImluc3RhbmNlIiwibG9nVHlwZSIsImFyZ3MiLCJsb2dMZXZlbCIsIm5vdyIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIm1ldGhvZCIsImNvbnNvbGUiLCJuYW1lIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsIl9sb2dMZXZlbCIsIl9sb2dIYW5kbGVyIiwiX3VzZXJMb2dIYW5kbGVyIiwicHVzaCIsInZhbCIsIlR5cGVFcnJvciIsImxvZ0hhbmRsZXIiLCJ1c2VyTG9nSGFuZGxlciIsImRlYnVnIiwibG9nIiwiaW5mbyIsIndhcm4iLCJlcnJvciIsImxldmVsIiwiZm9yRWFjaCIsImluc3QiLCJsb2dDYWxsYmFjayIsIm9wdGlvbnMiLCJjdXN0b21Mb2dMZXZlbCIsImluc3RhbmNlMiIsIm1lc3NhZ2UiLCJtYXAiLCJhcmciLCJ0b1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZ25vcmVkIiwiZmlsdGVyIiwiam9pbiIsInRvTG93ZXJDYXNlIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFB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bUIsS0FBS0EsZUFBQSxDQUFnQixNQUFNakMsUUFBQSxDQUFTYyxLQUFBLEVBQU8sR0FBR08sSUFBSTtJQUMxRSxLQUFLVyxXQUFBLENBQVksTUFBTWhDLFFBQUEsQ0FBU2MsS0FBQSxFQUFPLEdBQUdPLElBQUk7O0FBRWpEO0FBRUssU0FBVW5CLFlBQVkwQyxLQUFBLEVBQWdDO0VBQzFEckMsU0FBQSxDQUFVc0MsT0FBQSxDQUFRQyxJQUFBLElBQU87SUFDdkJBLElBQUEsQ0FBSzVDLFdBQUEsQ0FBWTBDLEtBQUs7RUFDeEIsQ0FBQztBQUNIO0FBRWdCLFNBQUF6QyxrQkFDZDRDLFdBQUEsRUFDQUMsT0FBQSxFQUFvQjtFQUVwQixXQUFXN0IsUUFBQSxJQUFZWixTQUFBLEVBQVc7SUFDaEMsSUFBSTBDLGNBQUEsR0FBa0M7SUFDdEMsSUFBSUQsT0FBQSxJQUFXQSxPQUFBLENBQVFKLEtBQUEsRUFBTztNQUM1QkssY0FBQSxHQUFpQnhDLGlCQUFBLENBQWtCdUMsT0FBQSxDQUFRSixLQUFBO0lBQzVDO0lBQ0QsSUFBSUcsV0FBQSxLQUFnQixNQUFNO01BQ3hCNUIsUUFBQSxDQUFTbUIsY0FBQSxHQUFpQjtJQUMzQixPQUFNO01BQ0xuQixRQUFBLENBQVNtQixjQUFBLEdBQWlCLENBQ3hCWSxTQUFBLEVBQ0FOLEtBQUEsS0FDR3ZCLElBQUEsS0FDRDtRQUNGLE1BQU04QixPQUFBLEdBQVU5QixJQUFBLENBQ2IrQixHQUFBLENBQUlDLEdBQUEsSUFBTTtVQUNULElBQUlBLEdBQUEsSUFBTyxNQUFNO1lBQ2YsT0FBTztVQUNSLFdBQVUsT0FBT0EsR0FBQSxLQUFRLFVBQVU7WUFDbEMsT0FBT0EsR0FBQTtVQUNSLFdBQVUsT0FBT0EsR0FBQSxLQUFRLFlBQVksT0FBT0EsR0FBQSxLQUFRLFdBQVc7WUFDOUQsT0FBT0EsR0FBQSxDQUFJQyxRQUFBLENBQVE7VUFDcEIsV0FBVUQsR0FBQSxZQUFleEIsS0FBQSxFQUFPO1lBQy9CLE9BQU93QixHQUFBLENBQUlGLE9BQUE7VUFDWixPQUFNO1lBQ0wsSUFBSTtjQUNGLE9BQU9JLElBQUEsQ0FBS0MsU0FBQSxDQUFVSCxHQUFHO1lBQzFCLFNBQVFJLE9BQUEsRUFBUDtjQUNBLE9BQU87WUFDUjtVQUNGO1FBQ0gsQ0FBQyxFQUNBQyxNQUFBLENBQU9MLEdBQUEsSUFBT0EsR0FBRyxFQUNqQk0sSUFBQSxDQUFLLEdBQUc7UUFDWCxJQUFJZixLQUFBLEtBQVVLLGNBQUEsYUFBQUEsY0FBQSxjQUFBQSxjQUFBLEdBQWtCQyxTQUFBLENBQVM1QixRQUFBLEdBQVc7VUFDbER5QixXQUFBLENBQVk7WUFDVkgsS0FBQSxFQUFPNUMsUUFBQSxDQUFTNEMsS0FBQSxFQUFPZ0IsV0FBQSxDQUFXO1lBQ2xDVCxPQUFBO1lBQ0E5QixJQUFBO1lBQ0F3QyxJQUFBLEVBQU1YLFNBQUEsQ0FBU3RCO1VBQ2hCO1FBQ0Y7TUFDSDtJQUNEO0VBQ0Y7QUFDSCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2NoYXQvYXBwL291dCJ9