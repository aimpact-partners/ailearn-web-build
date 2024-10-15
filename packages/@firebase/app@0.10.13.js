System.register(["@firebase/util@1.10.0","@firebase/component@0.6.9","@firebase/logger@0.4.2","idb@7.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.10.0"],["@firebase/component","0.6.9"],["@firebase/logger","0.4.2"],["idb","7.1.1"],["@firebase/app","0.10.13"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.10.0', dep), dep => dependencies.set('@firebase/component@0.6.9', dep), dep => dependencies.set('@firebase/logger@0.4.2', dep), dep => dependencies.set('idb@7.1.1', dep)],
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

// .beyond/uimport/@firebase/app.0.10.13.js
var app_0_10_13_exports = {};
__export(app_0_10_13_exports, {
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
module.exports = __toCommonJS(app_0_10_13_exports);

// node_modules/@firebase/app/dist/esm/index.esm2017.js
var import_component = require("@firebase/component@0.6.9");
var import_logger = require("@firebase/logger@0.4.2");
var import_util = require("@firebase/util@1.10.0");
var import_util2 = require("@firebase/util@1.10.0");
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
var name$q = "@firebase/app";
var version$1 = "0.10.13";
var logger = new import_logger.Logger("@firebase/app");
var name$p = "@firebase/app-compat";
var name$o = "@firebase/analytics-compat";
var name$n = "@firebase/analytics";
var name$m = "@firebase/app-check-compat";
var name$l = "@firebase/app-check";
var name$k = "@firebase/auth";
var name$j = "@firebase/auth-compat";
var name$i = "@firebase/database";
var name$h = "@firebase/data-connect";
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
var version = "10.14.1";
var DEFAULT_ENTRY_NAME = "[DEFAULT]";
var PLATFORM_LOG_STRING = {
  [name$q]: "fire-core",
  [name$p]: "fire-core-compat",
  [name$n]: "fire-analytics",
  [name$o]: "fire-analytics-compat",
  [name$l]: "fire-app-check",
  [name$m]: "fire-app-check-compat",
  [name$k]: "fire-auth",
  [name$j]: "fire-auth-compat",
  [name$i]: "fire-rtdb",
  [name$h]: "fire-data-connect",
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
    this._finalizationRegistry = null;
    if (typeof FinalizationRegistry !== "undefined") {
      this._finalizationRegistry = new FinalizationRegistry(() => {
        this.automaticCleanup();
      });
    }
    this._refCount = 0;
    this.incRefCount(this._serverConfig.releaseOnDeref);
    this._serverConfig.releaseOnDeref = void 0;
    serverConfig.releaseOnDeref = void 0;
    registerVersion(name$q, version$1, "serverapp");
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
    if (obj !== void 0 && this._finalizationRegistry !== null) {
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
  if ((0, import_util.isBrowser)() && !(0, import_util.isWebWorker)()) {
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
    try {
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
    } catch (e) {
      logger.warn(e);
    }
  }
  async getHeartbeatsHeader() {
    var _a;
    try {
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
    } catch (e) {
      logger.warn(e);
      return "";
    }
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
  registerVersion(name$q, version$1, variant);
  registerVersion(name$q, version$1, "esm2017");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXBwLjAuMTAuMTMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvcGxhdGZvcm1Mb2dnZXJTZXJ2aWNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2xvZ2dlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9jb25zdGFudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvaW50ZXJuYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2ZpcmViYXNlQXBwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2ZpcmViYXNlU2VydmVyQXBwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2FwaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9pbmRleGVkZGIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvaGVhcnRiZWF0U2VydmljZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9yZWdpc3RlckNvcmVDb21wb25lbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImFwcF8wXzEwXzEzX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkZpcmViYXNlRXJyb3IiLCJpbXBvcnRfdXRpbDIiLCJTREtfVkVSU0lPTiIsIl9ERUZBVUxUX0VOVFJZX05BTUUiLCJERUZBVUxUX0VOVFJZX05BTUUiLCJfYWRkQ29tcG9uZW50IiwiX2FkZE9yT3ZlcndyaXRlQ29tcG9uZW50IiwiX2FwcHMiLCJfY2xlYXJDb21wb25lbnRzIiwiX2NvbXBvbmVudHMiLCJfZ2V0UHJvdmlkZXIiLCJfaXNGaXJlYmFzZUFwcCIsIl9pc0ZpcmViYXNlU2VydmVyQXBwIiwiX3JlZ2lzdGVyQ29tcG9uZW50IiwiX3JlbW92ZVNlcnZpY2VJbnN0YW5jZSIsIl9zZXJ2ZXJBcHBzIiwiZGVsZXRlQXBwIiwiZ2V0QXBwIiwiZ2V0QXBwcyIsImluaXRpYWxpemVBcHAiLCJpbml0aWFsaXplU2VydmVyQXBwIiwib25Mb2ciLCJyZWdpc3RlclZlcnNpb24iLCJzZXRMb2dMZXZlbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJQbGF0Zm9ybUxvZ2dlclNlcnZpY2VJbXBsIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJnZXRQbGF0Zm9ybUluZm9TdHJpbmciLCJwcm92aWRlcnMiLCJnZXRQcm92aWRlcnMiLCJtYXAiLCJwcm92aWRlciIsImlzVmVyc2lvblNlcnZpY2VQcm92aWRlciIsInNlcnZpY2UiLCJnZXRJbW1lZGlhdGUiLCJsaWJyYXJ5IiwidmVyc2lvbiIsImZpbHRlciIsImxvZ1N0cmluZyIsImpvaW4iLCJjb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJ0eXBlIiwibG9nZ2VyIiwiaW1wb3J0X2xvZ2dlciIsIkxvZ2dlciIsIlBMQVRGT1JNX0xPR19TVFJJTkciLCJuYW1lJHEiLCJuYW1lJHAiLCJuYW1lJG4iLCJuYW1lJG8iLCJuYW1lJGwiLCJuYW1lJG0iLCJuYW1lJGsiLCJuYW1lJGoiLCJuYW1lJGkiLCJuYW1lJGgiLCJuYW1lJGciLCJuYW1lJGYiLCJuYW1lJGUiLCJuYW1lJGQiLCJuYW1lJGMiLCJuYW1lJGIiLCJuYW1lJGEiLCJuYW1lJDkiLCJuYW1lJDgiLCJuYW1lJDciLCJuYW1lJDYiLCJuYW1lJDUiLCJuYW1lJDQiLCJuYW1lJDMiLCJuYW1lJDEiLCJuYW1lJDIiLCJuYW1lIiwiTWFwIiwiYXBwIiwiYWRkQ29tcG9uZW50IiwiZSIsImRlYnVnIiwiYWRkT3JPdmVyd3JpdGVDb21wb25lbnQiLCJjb21wb25lbnROYW1lIiwiaGFzIiwic2V0IiwidmFsdWVzIiwic2VydmVyQXBwIiwibmFtZTIiLCJoZWFydGJlYXRDb250cm9sbGVyIiwiZ2V0UHJvdmlkZXIiLCJvcHRpb25hbCIsInRyaWdnZXJIZWFydGJlYXQiLCJpbnN0YW5jZUlkZW50aWZpZXIiLCJjbGVhckluc3RhbmNlIiwib2JqIiwib3B0aW9ucyIsInNldHRpbmdzIiwiY2xlYXIiLCJFUlJPUlMiLCJFUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJFcnJvckZhY3RvcnkiLCJGaXJlYmFzZUFwcEltcGwiLCJjb25maWciLCJfaXNEZWxldGVkIiwiX29wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJfY29uZmlnIiwiX25hbWUiLCJfYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkIiwiYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkIiwiX2NvbnRhaW5lciIsImltcG9ydF9jb21wb25lbnQiLCJDb21wb25lbnQiLCJjaGVja0Rlc3Ryb3llZCIsInZhbCIsImlzRGVsZXRlZCIsImNyZWF0ZSIsImFwcE5hbWUiLCJGaXJlYmFzZVNlcnZlckFwcEltcGwiLCJzZXJ2ZXJDb25maWciLCJhcGlLZXkiLCJhcHBJbXBsIiwiX3NlcnZlckNvbmZpZyIsIl9maW5hbGl6YXRpb25SZWdpc3RyeSIsIkZpbmFsaXphdGlvblJlZ2lzdHJ5IiwiYXV0b21hdGljQ2xlYW51cCIsIl9yZWZDb3VudCIsImluY1JlZkNvdW50IiwicmVsZWFzZU9uRGVyZWYiLCJ2ZXJzaW9uJDEiLCJ0b0pTT04iLCJyZWZDb3VudCIsInJlZ2lzdGVyIiwiZGVjUmVmQ291bnQiLCJyYXdDb25maWciLCJuYW1lMyIsIlN0cmluZyIsImdldERlZmF1bHRBcHBDb25maWciLCJleGlzdGluZ0FwcCIsImdldCIsImRlZXBFcXVhbCIsIkNvbXBvbmVudENvbnRhaW5lciIsIm5ld0FwcCIsIl9zZXJ2ZXJBcHBDb25maWciLCJpc0Jyb3dzZXIiLCJpc1dlYldvcmtlciIsImFwcE9wdGlvbnMiLCJuYW1lT2JqIiwiaGFzaENvZGUiLCJzIiwicmVkdWNlIiwiaGFzaCIsImMiLCJNYXRoIiwiaW11bCIsImNoYXJDb2RlQXQiLCJuYW1lU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsIkFycmF5IiwiZnJvbSIsImNsZWFudXBQcm92aWRlcnMiLCJkZWxldGUiLCJmaXJlYmFzZVNlcnZlckFwcCIsIlByb21pc2UiLCJhbGwiLCJsaWJyYXJ5S2V5T3JOYW1lIiwidmVyc2lvbjIiLCJ2YXJpYW50IiwiX2EiLCJsaWJyYXJ5TWlzbWF0Y2giLCJtYXRjaCIsInZlcnNpb25NaXNtYXRjaCIsIndhcm5pbmciLCJwdXNoIiwid2FybiIsImxvZ0NhbGxiYWNrIiwic2V0VXNlckxvZ0hhbmRsZXIiLCJsb2dMZXZlbCIsIkRCX05BTUUiLCJEQl9WRVJTSU9OIiwiU1RPUkVfTkFNRSIsImRiUHJvbWlzZSIsImdldERiUHJvbWlzZSIsImltcG9ydF9pZGIiLCJvcGVuREIiLCJ1cGdyYWRlIiwiZGIiLCJvbGRWZXJzaW9uIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJjb25zb2xlIiwiY2F0Y2giLCJvcmlnaW5hbEVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJyZWFkSGVhcnRiZWF0c0Zyb21JbmRleGVkREIiLCJ0eCIsInRyYW5zYWN0aW9uIiwicmVzdWx0Iiwib2JqZWN0U3RvcmUiLCJjb21wdXRlS2V5IiwiZG9uZSIsImlkYkdldEVycm9yIiwid3JpdGVIZWFydGJlYXRzVG9JbmRleGVkREIiLCJoZWFydGJlYXRPYmplY3QiLCJwdXQiLCJhcHBJZCIsIk1BWF9IRUFERVJfQllURVMiLCJTVE9SRURfSEVBUlRCRUFUX1JFVEVOVElPTl9NQVhfTUlMTElTIiwiSGVhcnRiZWF0U2VydmljZUltcGwiLCJfaGVhcnRiZWF0c0NhY2hlIiwiX3N0b3JhZ2UiLCJIZWFydGJlYXRTdG9yYWdlSW1wbCIsIl9oZWFydGJlYXRzQ2FjaGVQcm9taXNlIiwicmVhZCIsInRoZW4iLCJwbGF0Zm9ybUxvZ2dlciIsImFnZW50IiwiZGF0ZSIsImdldFVUQ0RhdGVTdHJpbmciLCJoZWFydGJlYXRzIiwiX2IiLCJsYXN0U2VudEhlYXJ0YmVhdERhdGUiLCJzb21lIiwic2luZ2xlRGF0ZUhlYXJ0YmVhdCIsImhiVGltZXN0YW1wIiwiRGF0ZSIsInZhbHVlT2YiLCJub3ciLCJvdmVyd3JpdGUiLCJnZXRIZWFydGJlYXRzSGVhZGVyIiwibGVuZ3RoIiwiaGVhcnRiZWF0c1RvU2VuZCIsInVuc2VudEVudHJpZXMiLCJleHRyYWN0SGVhcnRiZWF0c0ZvckhlYWRlciIsImhlYWRlclN0cmluZyIsImJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nIiwidG9kYXkiLCJ0b0lTT1N0cmluZyIsInN1YnN0cmluZyIsImhlYXJ0YmVhdHNDYWNoZSIsIm1heFNpemUiLCJzbGljZSIsImhlYXJ0YmVhdEVudHJ5IiwiZmluZCIsImhiIiwiZGF0ZXMiLCJjb3VudEJ5dGVzIiwicG9wIiwiX2NhblVzZUluZGV4ZWREQlByb21pc2UiLCJydW5JbmRleGVkREJFbnZpcm9ubWVudENoZWNrIiwiaXNJbmRleGVkREJBdmFpbGFibGUiLCJ2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlIiwiY2FuVXNlSW5kZXhlZERCIiwiaWRiSGVhcnRiZWF0T2JqZWN0IiwiaGVhcnRiZWF0c09iamVjdCIsImV4aXN0aW5nSGVhcnRiZWF0c09iamVjdCIsImFkZCIsInJlZ2lzdGVyQ29yZUNvbXBvbmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUJBQUE7RUFBQUUsYUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUEsQ0FBQUQsYUFBQTtFQUFBRSxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFDLGtCQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLHdCQUFBLEVBQUFBLENBQUEsS0FBQUEsd0JBQUE7RUFBQUMsS0FB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VTJCLFdBQVdQLGVBQUEsRUFBd0M7RUFFakUsV0FBTzdJLFdBQUEsQ0FBQXlJLDZCQUFBLEVBRUw5RSxJQUFBLENBQUtDLFNBQUEsQ0FBVTtJQUFFMUgsT0FBQSxFQUFTO0lBQUd1TCxVQUFBLEVBQVlvQjtFQUFlLENBQUUsQ0FBQyxFQUMzRFQsTUFBQTtBQUNKO0FDeFJNLFNBQVUyQix1QkFBdUJ6RixPQUFBLEVBQWdCO0VBQ3JEOUosa0JBQUEsQ0FDRSxJQUFJcUcsZ0JBQUEsQ0FBQUMsU0FBQSxDQUNGLG1CQUNBdEYsU0FBQSxJQUFhLElBQUlGLHlCQUFBLENBQTBCRSxTQUFTLEdBQUMsVUFFdEQ7RUFFSGhCLGtCQUFBLENBQ0UsSUFBSXFHLGdCQUFBLENBQUFDLFNBQUEsQ0FDRixhQUNBdEYsU0FBQSxJQUFhLElBQUlzTCxvQkFBQSxDQUFxQnRMLFNBQVMsR0FBQyxVQUVqRDtFQUlIUCxlQUFBLENBQWdCNEIsTUFBQSxFQUFNa0YsU0FBQSxFQUFTdUMsT0FBTztFQUV0Q3JKLGVBQUEsQ0FBZ0I0QixNQUFBLEVBQU1rRixTQUFBLEVBQVMsU0FBa0I7RUFFakQ5RyxlQUFBLENBQWdCLFdBQVcsRUFBRTtBQUMvQjtBQ2hCQThPLHNCQUFBLENBQXVCLEVBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9