System.register(["@firebase/util@1.9.6","@firebase/component@0.6.7","@firebase/logger@0.4.2","idb@7.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.9.6"],["@firebase/component","0.6.7"],["@firebase/logger","0.4.2"],["idb","7.1.1"],["@firebase/app","0.10.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.9.6', dep), dep => dependencies.set('@firebase/component@0.6.7', dep), dep => dependencies.set('@firebase/logger@0.4.2', dep), dep => dependencies.set('idb@7.1.1', dep)],
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
  for (var name2 in all) __defProp(target, name2, {
    get: all[name2],
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

// .beyond/uimport/temp/@firebase/app.0.10.3.js
var app_0_10_3_exports = {};
__export(app_0_10_3_exports, {
  FirebaseError: () => import_util2.FirebaseError,
  SDK_VERSION: () => SDK_VERSION,
  _DEFAULT_ENTRY_NAME: () => DEFAULT_ENTRY_NAME,
  _addComponent: () => _addComponent,
  _addOrOverwriteComponent: () => _addOrOverwriteComponent,
  _apps: () => _apps,
  _clearComponents: () => _clearComponents,
  _components: () => _components,
  _getProvider: () => _getProvider,
  _isFirebaseApp: () => _isFirebaseApp,
  _isFirebaseServerApp: () => _isFirebaseServerApp,
  _registerComponent: () => _registerComponent,
  _removeServiceInstance: () => _removeServiceInstance,
  _serverApps: () => _serverApps,
  deleteApp: () => deleteApp,
  getApp: () => getApp,
  getApps: () => getApps,
  initializeApp: () => initializeApp,
  initializeServerApp: () => initializeServerApp,
  onLog: () => onLog,
  registerVersion: () => registerVersion,
  setLogLevel: () => setLogLevel
});
module.exports = __toCommonJS(app_0_10_3_exports);

// node_modules/@firebase/app/dist/esm/index.esm2017.js
var import_component = require("@firebase/component@0.6.7");
var import_logger = require("@firebase/logger@0.4.2");
var import_util = require("@firebase/util@1.9.6");
var import_util2 = require("@firebase/util@1.9.6");
var import_idb = require("idb@7.1.1");
var PlatformLoggerServiceImpl = class {
  constructor(container) {
    this.container = container;
  }
  getPlatformInfoString() {
    const providers = this.container.getProviders();
    return providers.map(provider => {
      if (isVersionServiceProvider(provider)) {
        const service = provider.getImmediate();
        return `${service.library}/${service.version}`;
      } else {
        return null;
      }
    }).filter(logString => logString).join(" ");
  }
};
function isVersionServiceProvider(provider) {
  const component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
}
var name$p = "@firebase/app";
var version$1 = "0.10.3";
var logger = new import_logger.Logger("@firebase/app");
var name$o = "@firebase/app-compat";
var name$n = "@firebase/analytics-compat";
var name$m = "@firebase/analytics";
var name$l = "@firebase/app-check-compat";
var name$k = "@firebase/app-check";
var name$j = "@firebase/auth";
var name$i = "@firebase/auth-compat";
var name$h = "@firebase/database";
var name$g = "@firebase/database-compat";
var name$f = "@firebase/functions";
var name$e = "@firebase/functions-compat";
var name$d = "@firebase/installations";
var name$c = "@firebase/installations-compat";
var name$b = "@firebase/messaging";
var name$a = "@firebase/messaging-compat";
var name$9 = "@firebase/performance";
var name$8 = "@firebase/performance-compat";
var name$7 = "@firebase/remote-config";
var name$6 = "@firebase/remote-config-compat";
var name$5 = "@firebase/storage";
var name$4 = "@firebase/storage-compat";
var name$3 = "@firebase/firestore";
var name$2 = "@firebase/vertexai-preview";
var name$1 = "@firebase/firestore-compat";
var name = "firebase";
var version = "10.12.0";
var DEFAULT_ENTRY_NAME = "[DEFAULT]";
var PLATFORM_LOG_STRING = {
  [name$p]: "fire-core",
  [name$o]: "fire-core-compat",
  [name$m]: "fire-analytics",
  [name$n]: "fire-analytics-compat",
  [name$k]: "fire-app-check",
  [name$l]: "fire-app-check-compat",
  [name$j]: "fire-auth",
  [name$i]: "fire-auth-compat",
  [name$h]: "fire-rtdb",
  [name$g]: "fire-rtdb-compat",
  [name$f]: "fire-fn",
  [name$e]: "fire-fn-compat",
  [name$d]: "fire-iid",
  [name$c]: "fire-iid-compat",
  [name$b]: "fire-fcm",
  [name$a]: "fire-fcm-compat",
  [name$9]: "fire-perf",
  [name$8]: "fire-perf-compat",
  [name$7]: "fire-rc",
  [name$6]: "fire-rc-compat",
  [name$5]: "fire-gcs",
  [name$4]: "fire-gcs-compat",
  [name$3]: "fire-fst",
  [name$1]: "fire-fst-compat",
  [name$2]: "fire-vertex",
  "fire-js": "fire-js",
  [name]: "fire-js-all"
};
var _apps = /* @__PURE__ */new Map();
var _serverApps = /* @__PURE__ */new Map();
var _components = /* @__PURE__ */new Map();
function _addComponent(app, component) {
  try {
    app.container.addComponent(component);
  } catch (e) {
    logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
  }
}
function _addOrOverwriteComponent(app, component) {
  app.container.addOrOverwriteComponent(component);
}
function _registerComponent(component) {
  const componentName = component.name;
  if (_components.has(componentName)) {
    logger.debug(`There were multiple attempts to register component ${componentName}.`);
    return false;
  }
  _components.set(componentName, component);
  for (const app of _apps.values()) {
    _addComponent(app, component);
  }
  for (const serverApp of _serverApps.values()) {
    _addComponent(serverApp, component);
  }
  return true;
}
function _getProvider(app, name2) {
  const heartbeatController = app.container.getProvider("heartbeat").getImmediate({
    optional: true
  });
  if (heartbeatController) {
    void heartbeatController.triggerHeartbeat();
  }
  return app.container.getProvider(name2);
}
function _removeServiceInstance(app, name2, instanceIdentifier = DEFAULT_ENTRY_NAME) {
  _getProvider(app, name2).clearInstance(instanceIdentifier);
}
function _isFirebaseApp(obj) {
  return obj.options !== void 0;
}
function _isFirebaseServerApp(obj) {
  return obj.settings !== void 0;
}
function _clearComponents() {
  _components.clear();
}
var ERRORS = {
  ["no-app"]: "No Firebase App '{$appName}' has been created - call initializeApp() first",
  ["bad-app-name"]: "Illegal App name: '{$appName}'",
  ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
  ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
  ["server-app-deleted"]: "Firebase Server App has been deleted",
  ["no-options"]: "Need to provide options, when not being deployed to hosting via source.",
  ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  ["invalid-log-argument"]: "First argument to `onLog` must be null or a function.",
  ["idb-open"]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  ["idb-get"]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  ["idb-set"]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  ["idb-delete"]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  ["finalization-registry-not-supported"]: "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
  ["invalid-server-app-environment"]: "FirebaseServerApp is not for use in browser environments."
};
var ERROR_FACTORY = new import_util.ErrorFactory("app", "Firebase", ERRORS);
var FirebaseAppImpl = class {
  constructor(options, config, container) {
    this._isDeleted = false;
    this._options = Object.assign({}, options);
    this._config = Object.assign({}, config);
    this._name = config.name;
    this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
    this._container = container;
    this.container.addComponent(new import_component.Component("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    this.checkDestroyed();
    return this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(val) {
    this.checkDestroyed();
    this._automaticDataCollectionEnabled = val;
  }
  get name() {
    this.checkDestroyed();
    return this._name;
  }
  get options() {
    this.checkDestroyed();
    return this._options;
  }
  get config() {
    this.checkDestroyed();
    return this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(val) {
    this._isDeleted = val;
  }
  checkDestroyed() {
    if (this.isDeleted) {
      throw ERROR_FACTORY.create("app-deleted", {
        appName: this._name
      });
    }
  }
};
var FirebaseServerAppImpl = class extends FirebaseAppImpl {
  constructor(options, serverConfig, name2, container) {
    const automaticDataCollectionEnabled = serverConfig.automaticDataCollectionEnabled !== void 0 ? serverConfig.automaticDataCollectionEnabled : false;
    const config = {
      name: name2,
      automaticDataCollectionEnabled
    };
    if (options.apiKey !== void 0) {
      super(options, config, container);
    } else {
      const appImpl = options;
      super(appImpl.options, config, container);
    }
    this._serverConfig = Object.assign({
      automaticDataCollectionEnabled
    }, serverConfig);
    this._finalizationRegistry = new FinalizationRegistry(() => {
      this.automaticCleanup();
    });
    this._refCount = 0;
    this.incRefCount(this._serverConfig.releaseOnDeref);
    this._serverConfig.releaseOnDeref = void 0;
    serverConfig.releaseOnDeref = void 0;
    registerVersion(name$p, version$1, "serverapp");
  }
  toJSON() {
    return void 0;
  }
  get refCount() {
    return this._refCount;
  }
  incRefCount(obj) {
    if (this.isDeleted) {
      return;
    }
    this._refCount++;
    if (obj !== void 0) {
      this._finalizationRegistry.register(obj, this);
    }
  }
  decRefCount() {
    if (this.isDeleted) {
      return 0;
    }
    return --this._refCount;
  }
  automaticCleanup() {
    void deleteApp(this);
  }
  get settings() {
    this.checkDestroyed();
    return this._serverConfig;
  }
  checkDestroyed() {
    if (this.isDeleted) {
      throw ERROR_FACTORY.create("server-app-deleted");
    }
  }
};
var SDK_VERSION = version;
function initializeApp(_options, rawConfig = {}) {
  let options = _options;
  if (typeof rawConfig !== "object") {
    const name3 = rawConfig;
    rawConfig = {
      name: name3
    };
  }
  const config = Object.assign({
    name: DEFAULT_ENTRY_NAME,
    automaticDataCollectionEnabled: false
  }, rawConfig);
  const name2 = config.name;
  if (typeof name2 !== "string" || !name2) {
    throw ERROR_FACTORY.create("bad-app-name", {
      appName: String(name2)
    });
  }
  options || (options = (0, import_util.getDefaultAppConfig)());
  if (!options) {
    throw ERROR_FACTORY.create("no-options");
  }
  const existingApp = _apps.get(name2);
  if (existingApp) {
    if ((0, import_util.deepEqual)(options, existingApp.options) && (0, import_util.deepEqual)(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY.create("duplicate-app", {
        appName: name2
      });
    }
  }
  const container = new import_component.ComponentContainer(name2);
  for (const component of _components.values()) {
    container.addComponent(component);
  }
  const newApp = new FirebaseAppImpl(options, config, container);
  _apps.set(name2, newApp);
  return newApp;
}
function initializeServerApp(_options, _serverAppConfig) {
  if ((0, import_util.isBrowser)()) {
    throw ERROR_FACTORY.create("invalid-server-app-environment");
  }
  if (_serverAppConfig.automaticDataCollectionEnabled === void 0) {
    _serverAppConfig.automaticDataCollectionEnabled = false;
  }
  let appOptions;
  if (_isFirebaseApp(_options)) {
    appOptions = _options.options;
  } else {
    appOptions = _options;
  }
  const nameObj = Object.assign(Object.assign({}, _serverAppConfig), appOptions);
  if (nameObj.releaseOnDeref !== void 0) {
    delete nameObj.releaseOnDeref;
  }
  const hashCode = s => {
    return [...s].reduce((hash, c) => Math.imul(31, hash) + c.charCodeAt(0) | 0, 0);
  };
  if (_serverAppConfig.releaseOnDeref !== void 0) {
    if (typeof FinalizationRegistry === "undefined") {
      throw ERROR_FACTORY.create("finalization-registry-not-supported", {});
    }
  }
  const nameString = "" + hashCode(JSON.stringify(nameObj));
  const existingApp = _serverApps.get(nameString);
  if (existingApp) {
    existingApp.incRefCount(_serverAppConfig.releaseOnDeref);
    return existingApp;
  }
  const container = new import_component.ComponentContainer(nameString);
  for (const component of _components.values()) {
    container.addComponent(component);
  }
  const newApp = new FirebaseServerAppImpl(appOptions, _serverAppConfig, nameString, container);
  _serverApps.set(nameString, newApp);
  return newApp;
}
function getApp(name2 = DEFAULT_ENTRY_NAME) {
  const app = _apps.get(name2);
  if (!app && name2 === DEFAULT_ENTRY_NAME && (0, import_util.getDefaultAppConfig)()) {
    return initializeApp();
  }
  if (!app) {
    throw ERROR_FACTORY.create("no-app", {
      appName: name2
    });
  }
  return app;
}
function getApps() {
  return Array.from(_apps.values());
}
async function deleteApp(app) {
  let cleanupProviders = false;
  const name2 = app.name;
  if (_apps.has(name2)) {
    cleanupProviders = true;
    _apps.delete(name2);
  } else if (_serverApps.has(name2)) {
    const firebaseServerApp = app;
    if (firebaseServerApp.decRefCount() <= 0) {
      _serverApps.delete(name2);
      cleanupProviders = true;
    }
  }
  if (cleanupProviders) {
    await Promise.all(app.container.getProviders().map(provider => provider.delete()));
    app.isDeleted = true;
  }
}
function registerVersion(libraryKeyOrName, version2, variant) {
  var _a;
  let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
  if (variant) {
    library += `-${variant}`;
  }
  const libraryMismatch = library.match(/\s|\//);
  const versionMismatch = version2.match(/\s|\//);
  if (libraryMismatch || versionMismatch) {
    const warning = [`Unable to register library "${library}" with version "${version2}":`];
    if (libraryMismatch) {
      warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
    }
    if (libraryMismatch && versionMismatch) {
      warning.push("and");
    }
    if (versionMismatch) {
      warning.push(`version name "${version2}" contains illegal characters (whitespace or "/")`);
    }
    logger.warn(warning.join(" "));
    return;
  }
  _registerComponent(new import_component.Component(`${library}-version`, () => ({
    library,
    version: version2
  }), "VERSION"));
}
function onLog(logCallback, options) {
  if (logCallback !== null && typeof logCallback !== "function") {
    throw ERROR_FACTORY.create("invalid-log-argument");
  }
  (0, import_logger.setUserLogHandler)(logCallback, options);
}
function setLogLevel(logLevel) {
  (0, import_logger.setLogLevel)(logLevel);
}
var DB_NAME = "firebase-heartbeat-database";
var DB_VERSION = 1;
var STORE_NAME = "firebase-heartbeat-store";
var dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = (0, import_idb.openDB)(DB_NAME, DB_VERSION, {
      upgrade: (db, oldVersion) => {
        switch (oldVersion) {
          case 0:
            try {
              db.createObjectStore(STORE_NAME);
            } catch (e) {
              console.warn(e);
            }
        }
      }
    }).catch(e => {
      throw ERROR_FACTORY.create("idb-open", {
        originalErrorMessage: e.message
      });
    });
  }
  return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app) {
  try {
    const db = await getDbPromise();
    const tx = db.transaction(STORE_NAME);
    const result = await tx.objectStore(STORE_NAME).get(computeKey(app));
    await tx.done;
    return result;
  } catch (e) {
    if (e instanceof import_util.FirebaseError) {
      logger.warn(e.message);
    } else {
      const idbGetError = ERROR_FACTORY.create("idb-get", {
        originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
      });
      logger.warn(idbGetError.message);
    }
  }
}
async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
  try {
    const db = await getDbPromise();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const objectStore = tx.objectStore(STORE_NAME);
    await objectStore.put(heartbeatObject, computeKey(app));
    await tx.done;
  } catch (e) {
    if (e instanceof import_util.FirebaseError) {
      logger.warn(e.message);
    } else {
      const idbGetError = ERROR_FACTORY.create("idb-set", {
        originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
      });
      logger.warn(idbGetError.message);
    }
  }
}
function computeKey(app) {
  return `${app.name}!${app.options.appId}`;
}
var MAX_HEADER_BYTES = 1024;
var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
var HeartbeatServiceImpl = class {
  constructor(container) {
    this.container = container;
    this._heartbeatsCache = null;
    const app = this.container.getProvider("app").getImmediate();
    this._storage = new HeartbeatStorageImpl(app);
    this._heartbeatsCachePromise = this._storage.read().then(result => {
      this._heartbeatsCache = result;
      return result;
    });
  }
  async triggerHeartbeat() {
    var _a, _b;
    const platformLogger = this.container.getProvider("platform-logger").getImmediate();
    const agent = platformLogger.getPlatformInfoString();
    const date = getUTCDateString();
    if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null) {
      this._heartbeatsCache = await this._heartbeatsCachePromise;
      if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
        return;
      }
    }
    if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some(singleDateHeartbeat => singleDateHeartbeat.date === date)) {
      return;
    } else {
      this._heartbeatsCache.heartbeats.push({
        date,
        agent
      });
    }
    this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(singleDateHeartbeat => {
      const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
      const now = Date.now();
      return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
    });
    return this._storage.overwrite(this._heartbeatsCache);
  }
  async getHeartbeatsHeader() {
    var _a;
    if (this._heartbeatsCache === null) {
      await this._heartbeatsCachePromise;
    }
    if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) {
      return "";
    }
    const date = getUTCDateString();
    const {
      heartbeatsToSend,
      unsentEntries
    } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
    const headerString = (0, import_util.base64urlEncodeWithoutPadding)(JSON.stringify({
      version: 2,
      heartbeats: heartbeatsToSend
    }));
    this._heartbeatsCache.lastSentHeartbeatDate = date;
    if (unsentEntries.length > 0) {
      this._heartbeatsCache.heartbeats = unsentEntries;
      await this._storage.overwrite(this._heartbeatsCache);
    } else {
      this._heartbeatsCache.heartbeats = [];
      void this._storage.overwrite(this._heartbeatsCache);
    }
    return headerString;
  }
};
function getUTCDateString() {
  const today = new Date();
  return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
  const heartbeatsToSend = [];
  let unsentEntries = heartbeatsCache.slice();
  for (const singleDateHeartbeat of heartbeatsCache) {
    const heartbeatEntry = heartbeatsToSend.find(hb => hb.agent === singleDateHeartbeat.agent);
    if (!heartbeatEntry) {
      heartbeatsToSend.push({
        agent: singleDateHeartbeat.agent,
        dates: [singleDateHeartbeat.date]
      });
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatsToSend.pop();
        break;
      }
    } else {
      heartbeatEntry.dates.push(singleDateHeartbeat.date);
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatEntry.dates.pop();
        break;
      }
    }
    unsentEntries = unsentEntries.slice(1);
  }
  return {
    heartbeatsToSend,
    unsentEntries
  };
}
var HeartbeatStorageImpl = class {
  constructor(app) {
    this.app = app;
    this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    if (!(0, import_util.isIndexedDBAvailable)()) {
      return false;
    } else {
      return (0, import_util.validateIndexedDBOpenable)().then(() => true).catch(() => false);
    }
  }
  async read() {
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return {
        heartbeats: []
      };
    } else {
      const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
      if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
        return idbHeartbeatObject;
      } else {
        return {
          heartbeats: []
        };
      }
    }
  }
  async overwrite(heartbeatsObject) {
    var _a;
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return;
    } else {
      const existingHeartbeatsObject = await this.read();
      return writeHeartbeatsToIndexedDB(this.app, {
        lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
        heartbeats: heartbeatsObject.heartbeats
      });
    }
  }
  async add(heartbeatsObject) {
    var _a;
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return;
    } else {
      const existingHeartbeatsObject = await this.read();
      return writeHeartbeatsToIndexedDB(this.app, {
        lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
        heartbeats: [...existingHeartbeatsObject.heartbeats, ...heartbeatsObject.heartbeats]
      });
    }
  }
};
function countBytes(heartbeatsCache) {
  return (0, import_util.base64urlEncodeWithoutPadding)(JSON.stringify({
    version: 2,
    heartbeats: heartbeatsCache
  })).length;
}
function registerCoreComponents(variant) {
  _registerComponent(new import_component.Component("platform-logger", container => new PlatformLoggerServiceImpl(container), "PRIVATE"));
  _registerComponent(new import_component.Component("heartbeat", container => new HeartbeatServiceImpl(container), "PRIVATE"));
  registerVersion(name$p, version$1, variant);
  registerVersion(name$p, version$1, "esm2017");
  registerVersion("fire-js", "");
}
registerCoreComponents("");
/**
 * @license
 * Copyright 2019 Google LLC
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
/**
 * @license
 * Copyright 2021 Google LLC
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
/**
 * @license
 * Copyright 2023 Google LLC
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hcHAuMC4xMC4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL3BsYXRmb3JtTG9nZ2VyU2VydmljZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9sb2dnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvY29uc3RhbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2ludGVybmFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9maXJlYmFzZUFwcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9maXJlYmFzZVNlcnZlckFwcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9hcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvaW5kZXhlZGRiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2hlYXJ0YmVhdFNlcnZpY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvcmVnaXN0ZXJDb3JlQ29tcG9uZW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhcHBfMF8xMF8zX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkZpcmViYXNlRXJyb3IiLCJpbXBvcnRfdXRpbDIiLCJTREtfVkVSU0lPTiIsIl9ERUZBVUxUX0VOVFJZX05BTUUiLCJERUZBVUxUX0VOVFJZX05BTUUiLCJfYWRkQ29tcG9uZW50IiwiX2FkZE9yT3ZlcndyaXRlQ29tcG9uZW50IiwiX2FwcHMiLCJfY2xlYXJDb21wb25lbnRzIiwiX2NvbXBvbmVudHMiLCJfZ2V0UHJvdmlkZXIiLCJfaXNGaXJlYmFzZUFwcCIsIl9pc0ZpcmViYXNlU2VydmVyQXBwIiwiX3JlZ2lzdGVyQ29tcG9uZW50IiwiX3JlbW92ZVNlcnZpY2VJbnN0YW5jZSIsIl9zZXJ2ZXJBcHBzIiwiZGVsZXRlQXBwIiwiZ2V0QXBwIiwiZ2V0QXBwcyIsImluaXRpYWxpemVBcHAiLCJpbml0aWFsaXplU2VydmVyQXBwIiwib25Mb2ciLCJyZWdpc3RlclZlcnNpb24iLCJzZXRMb2dMZXZlbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJQbGF0Zm9ybUxvZ2dlclNlcnZpY2VJbXBsIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJnZXRQbGF0Zm9ybUluZm9TdHJpbmciLCJwcm92aWRlcnMiLCJnZXRQcm92aWRlcnMiLCJtYXAiLCJwcm92aWRlciIsImlzVmVyc2lvblNlcnZpY2VQcm92aWRlciIsInNlcnZpY2UiLCJnZXRJbW1lZGlhdGUiLCJsaWJyYXJ5IiwidmVyc2lvbiIsImZpbHRlciIsImxvZ1N0cmluZyIsImpvaW4iLCJjb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJ0eXBlIiwibG9nZ2VyIiwiaW1wb3J0X2xvZ2dlciIsIkxvZ2dlciIsIlBMQVRGT1JNX0xPR19TVFJJTkciLCJuYW1lJHAiLCJuYW1lJG8iLCJuYW1lJG0iLCJuYW1lJG4iLCJuYW1lJGsiLCJuYW1lJGwiLCJuYW1lJGoiLCJuYW1lJGkiLCJuYW1lJGgiLCJuYW1lJGciLCJuYW1lJGYiLCJuYW1lJGUiLCJuYW1lJGQiLCJuYW1lJGMiLCJuYW1lJGIiLCJuYW1lJGEiLCJuYW1lJDkiLCJuYW1lJDgiLCJuYW1lJDciLCJuYW1lJDYiLCJuYW1lJDUiLCJuYW1lJDQiLCJuYW1lJDMiLCJuYW1lJDEiLCJuYW1lJDIiLCJuYW1lIiwiTWFwIiwiYXBwIiwiYWRkQ29tcG9uZW50IiwiZSIsImRlYnVnIiwiYWRkT3JPdmVyd3JpdGVDb21wb25lbnQiLCJjb21wb25lbnROYW1lIiwiaGFzIiwic2V0IiwidmFsdWVzIiwic2VydmVyQXBwIiwibmFtZTIiLCJoZWFydGJlYXRDb250cm9sbGVyIiwiZ2V0UHJvdmlkZXIiLCJvcHRpb25hbCIsInRyaWdnZXJIZWFydGJlYXQiLCJpbnN0YW5jZUlkZW50aWZpZXIiLCJjbGVhckluc3RhbmNlIiwib2JqIiwib3B0aW9ucyIsInNldHRpbmdzIiwiY2xlYXIiLCJFUlJPUlMiLCJFUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJFcnJvckZhY3RvcnkiLCJGaXJlYmFzZUFwcEltcGwiLCJjb25maWciLCJfaXNEZWxldGVkIiwiX29wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJfY29uZmlnIiwiX25hbWUiLCJfYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkIiwiYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkIiwiX2NvbnRhaW5lciIsImltcG9ydF9jb21wb25lbnQiLCJDb21wb25lbnQiLCJjaGVja0Rlc3Ryb3llZCIsInZhbCIsImlzRGVsZXRlZCIsImNyZWF0ZSIsImFwcE5hbWUiLCJGaXJlYmFzZVNlcnZlckFwcEltcGwiLCJzZXJ2ZXJDb25maWciLCJhcGlLZXkiLCJhcHBJbXBsIiwiX3NlcnZlckNvbmZpZyIsIl9maW5hbGl6YXRpb25SZWdpc3RyeSIsIkZpbmFsaXphdGlvblJlZ2lzdHJ5IiwiYXV0b21hdGljQ2xlYW51cCIsIl9yZWZDb3VudCIsImluY1JlZkNvdW50IiwicmVsZWFzZU9uRGVyZWYiLCJ2ZXJzaW9uJDEiLCJ0b0pTT04iLCJyZWZDb3VudCIsInJlZ2lzdGVyIiwiZGVjUmVmQ291bnQiLCJyYXdDb25maWciLCJuYW1lMyIsIlN0cmluZyIsImdldERlZmF1bHRBcHBDb25maWciLCJleGlzdGluZ0FwcCIsImdldCIsImRlZXBFcXVhbCIsIkNvbXBvbmVudENvbnRhaW5lciIsIm5ld0FwcCIsIl9zZXJ2ZXJBcHBDb25maWciLCJpc0Jyb3dzZXIiLCJhcHBPcHRpb25zIiwibmFtZU9iaiIsImhhc2hDb2RlIiwicyIsInJlZHVjZSIsImhhc2giLCJjIiwiTWF0aCIsImltdWwiLCJjaGFyQ29kZUF0IiwibmFtZVN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJBcnJheSIsImZyb20iLCJjbGVhbnVwUHJvdmlkZXJzIiwiZGVsZXRlIiwiZmlyZWJhc2VTZXJ2ZXJBcHAiLCJQcm9taXNlIiwiYWxsIiwibGlicmFyeUtleU9yTmFtZSIsInZlcnNpb24yIiwidmFyaWFudCIsIl9hIiwibGlicmFyeU1pc21hdGNoIiwibWF0Y2giLCJ2ZXJzaW9uTWlzbWF0Y2giLCJ3YXJuaW5nIiwicHVzaCIsIndhcm4iLCJsb2dDYWxsYmFjayIsInNldFVzZXJMb2dIYW5kbGVyIiwibG9nTGV2ZWwiLCJEQl9OQU1FIiwiREJfVkVSU0lPTiIsIlNUT1JFX05BTUUiLCJkYlByb21pc2UiLCJnZXREYlByb21pc2UiLCJpbXBvcnRfaWRiIiwib3BlbkRCIiwidXBncmFkZSIsImRiIiwib2xkVmVyc2lvbiIsImNyZWF0ZU9iamVjdFN0b3JlIiwiY29uc29sZSIsImNhdGNoIiwib3JpZ2luYWxFcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwicmVhZEhlYXJ0YmVhdHNGcm9tSW5kZXhlZERCIiwidHgiLCJ0cmFuc2FjdGlvbiIsInJlc3VsdCIsIm9iamVjdFN0b3JlIiwiY29tcHV0ZUtleSIsImRvbmUiLCJpZGJHZXRFcnJvciIsIndyaXRlSGVhcnRiZWF0c1RvSW5kZXhlZERCIiwiaGVhcnRiZWF0T2JqZWN0IiwicHV0IiwiYXBwSWQiLCJNQVhfSEVBREVSX0JZVEVTIiwiU1RPUkVEX0hFQVJUQkVBVF9SRVRFTlRJT05fTUFYX01JTExJUyIsIkhlYXJ0YmVhdFNlcnZpY2VJbXBsIiwiX2hlYXJ0YmVhdHNDYWNoZSIsIl9zdG9yYWdlIiwiSGVhcnRiZWF0U3RvcmFnZUltcGwiLCJfaGVhcnRiZWF0c0NhY2hlUHJvbWlzZSIsInJlYWQiLCJ0aGVuIiwicGxhdGZvcm1Mb2dnZXIiLCJhZ2VudCIsImRhdGUiLCJnZXRVVENEYXRlU3RyaW5nIiwiaGVhcnRiZWF0cyIsIl9iIiwibGFzdFNlbnRIZWFydGJlYXREYXRlIiwic29tZSIsInNpbmdsZURhdGVIZWFydGJlYXQiLCJoYlRpbWVzdGFtcCIsIkRhdGUiLCJ2YWx1ZU9mIiwibm93Iiwib3ZlcndyaXRlIiwiZ2V0SGVhcnRiZWF0c0hlYWRlciIsImxlbmd0aCIsImhlYXJ0YmVhdHNUb1NlbmQiLCJ1bnNlbnRFbnRyaWVzIiwiZXh0cmFjdEhlYXJ0YmVhdHNGb3JIZWFkZXIiLCJoZWFkZXJTdHJpbmciLCJiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyIsInRvZGF5IiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJoZWFydGJlYXRzQ2FjaGUiLCJtYXhTaXplIiwic2xpY2UiLCJoZWFydGJlYXRFbnRyeSIsImZpbmQiLCJoYiIsImRhdGVzIiwiY291bnRCeXRlcyIsInBvcCIsIl9jYW5Vc2VJbmRleGVkREJQcm9taXNlIiwicnVuSW5kZXhlZERCRW52aXJvbm1lbnRDaGVjayIsImlzSW5kZXhlZERCQXZhaWxhYmxlIiwidmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSIsImNhblVzZUluZGV4ZWREQiIsImlkYkhlYXJ0YmVhdE9iamVjdCIsImhlYXJ0YmVhdHNPYmplY3QiLCJleGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QiLCJhZGQiLCJyZWdpc3RlckNvcmVDb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBLENBQUFELGFBQUE7RUFBQUUsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQyxrQkFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyx3QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHdCQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxL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R0FBQSxFQUFLO1FBQzFDaUoscUJBQUEsR0FDRXBELEVBQUEsR0FBQXFGLGdCQUFBLENBQWlCakMscUJBQUEsTUFDakIsUUFBQXBELEVBQUEsY0FBQUEsRUFBQSxHQUFBc0Ysd0JBQUEsQ0FBeUJsQyxxQkFBQTtRQUMzQkYsVUFBQSxFQUFZbUMsZ0JBQUEsQ0FBaUJuQztNQUM5QjtJQUNGOztFQUdILE1BQU1xQyxJQUFJRixnQkFBQSxFQUF1Qzs7SUFDL0MsTUFBTUYsZUFBQSxHQUFrQixNQUFNLEtBQUtKLHVCQUFBO0lBQ25DLElBQUksQ0FBQ0ksZUFBQSxFQUFpQjtNQUNwQjtJQUNELE9BQU07TUFDTCxNQUFNRyx3QkFBQSxHQUEyQixNQUFNLEtBQUsxQyxJQUFBLENBQUk7TUFDaEQsT0FBT1gsMEJBQUEsQ0FBMkIsS0FBSzlILEdBQUEsRUFBSztRQUMxQ2lKLHFCQUFBLEdBQ0VwRCxFQUFBLEdBQUFxRixnQkFBQSxDQUFpQmpDLHFCQUFBLE1BQ2pCLFFBQUFwRCxFQUFBLGNBQUFBLEVBQUEsR0FBQXNGLHdCQUFBLENBQXlCbEMscUJBQUE7UUFDM0JGLFVBQUEsRUFBWSxDQUNWLEdBQUdvQyx3QkFBQSxDQUF5QnBDLFVBQUEsRUFDNUIsR0FBR21DLGdCQUFBLENBQWlCbkMsVUFBQTtNQUV2QjtJQUNGOztBQUVKO0FBT0ssU0FBVTJCLFdBQVdQLGVBQUEsRUFBd0M7RUFFakUsV0FBTzVJLFdBQUEsQ0FBQXdJLDZCQUFBLEVBRUw5RSxJQUFBLENBQUtDLFNBQUEsQ0FBVTtJQUFFeEgsT0FBQSxFQUFTO0lBQUdxTCxVQUFBLEVBQVlvQjtFQUFlLENBQUUsQ0FBQyxFQUMzRFQsTUFBQTtBQUNKO0FDL1FNLFNBQVUyQix1QkFBdUJ6RixPQUFBLEVBQWdCO0VBQ3JENUosa0JBQUEsQ0FDRSxJQUFJb0csZ0JBQUEsQ0FBQUMsU0FBQSxDQUNGLG1CQUNBckYsU0FBQSxJQUFhLElBQUlGLHlCQUFBLENBQTBCRSxTQUFTLEdBQUMsVUFFdEQ7RUFFSGhCLGtCQUFBLENBQ0UsSUFBSW9HLGdCQUFBLENBQUFDLFNBQUEsQ0FDRixhQUNBckYsU0FBQSxJQUFhLElBQUlvTCxvQkFBQSxDQUFxQnBMLFNBQVMsR0FBQyxVQUVqRDtFQUlIUCxlQUFBLENBQWdCNEIsTUFBQSxFQUFNaUYsU0FBQSxFQUFTc0MsT0FBTztFQUV0Q25KLGVBQUEsQ0FBZ0I0QixNQUFBLEVBQU1pRixTQUFBLEVBQVMsU0FBa0I7RUFFakQ3RyxlQUFBLENBQWdCLFdBQVcsRUFBRTtBQUMvQjtBQ2hCQTRPLHNCQUFBLENBQXVCLEVBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9hcHAvb3V0In0=