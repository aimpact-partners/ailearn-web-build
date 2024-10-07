System.register(["@firebase/util@1.9.7","@firebase/component@0.6.8","@firebase/logger@0.4.2","idb@7.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.9.7"],["@firebase/component","0.6.8"],["@firebase/logger","0.4.2"],["idb","7.1.1"],["@firebase/app","0.10.10"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.9.7', dep), dep => dependencies.set('@firebase/component@0.6.8', dep), dep => dependencies.set('@firebase/logger@0.4.2', dep), dep => dependencies.set('idb@7.1.1', dep)],
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

// .beyond/uimport/temp/@firebase/app.0.10.10.js
var app_0_10_10_exports = {};
__export(app_0_10_10_exports, {
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
module.exports = __toCommonJS(app_0_10_10_exports);

// node_modules/@firebase/app/dist/esm/index.esm2017.js
var import_component = require("@firebase/component@0.6.8");
var import_logger = require("@firebase/logger@0.4.2");
var import_util = require("@firebase/util@1.9.7");
var import_util2 = require("@firebase/util@1.9.7");
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
var version$1 = "0.10.10";
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
var version = "10.13.1";
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hcHAuMC4xMC4xMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9wbGF0Zm9ybUxvZ2dlclNlcnZpY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvbG9nZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2NvbnN0YW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9pbnRlcm5hbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvZmlyZWJhc2VBcHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvZmlyZWJhc2VTZXJ2ZXJBcHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvYXBpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2luZGV4ZWRkYi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9oZWFydGJlYXRTZXJ2aWNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL3JlZ2lzdGVyQ29yZUNvbXBvbmVudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiYXBwXzBfMTBfMTBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiRmlyZWJhc2VFcnJvciIsImltcG9ydF91dGlsMiIsIlNES19WRVJTSU9OIiwiX0RFRkFVTFRfRU5UUllfTkFNRSIsIkRFRkFVTFRfRU5UUllfTkFNRSIsIl9hZGRDb21wb25lbnQiLCJfYWRkT3JPdmVyd3JpdGVDb21wb25lbnQiLCJfYXBwcyIsIl9jbGVhckNvbXBvbmVudHMiLCJfY29tcG9uZW50cyIsIl9nZXRQcm92aWRlciIsIl9pc0ZpcmViYXNlQXBwIiwiX2lzRmlyZWJhc2VTZXJ2ZXJBcHAiLCJfcmVnaXN0ZXJDb21wb25lbnQiLCJfcmVtb3ZlU2VydmljZUluc3RhbmNlIiwiX3NlcnZlckFwcHMiLCJkZWxldGVBcHAiLCJnZXRBcHAiLCJnZXRBcHBzIiwiaW5pdGlhbGl6ZUFwcCIsImluaXRpYWxpemVTZXJ2ZXJBcHAiLCJvbkxvZyIsInJlZ2lzdGVyVmVyc2lvbiIsInNldExvZ0xldmVsIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlBsYXRmb3JtTG9nZ2VyU2VydmljZUltcGwiLCJjb25zdHJ1Y3RvciIsImNvbnRhaW5lciIsImdldFBsYXRmb3JtSW5mb1N0cmluZyIsInByb3ZpZGVycyIsImdldFByb3ZpZGVycyIsIm1hcCIsInByb3ZpZGVyIiwiaXNWZXJzaW9uU2VydmljZVByb3ZpZGVyIiwic2VydmljZSIsImdldEltbWVkaWF0ZSIsImxpYnJhcnkiLCJ2ZXJzaW9uIiwiZmlsdGVyIiwibG9nU3RyaW5nIiwiam9pbiIsImNvbXBvbmVudCIsImdldENvbXBvbmVudCIsInR5cGUiLCJsb2dnZXIiLCJpbXBvcnRfbG9nZ2VyIiwiTG9nZ2VyIiwiUExBVEZPUk1fTE9HX1NUUklORyIsIm5hbWUkcCIsIm5hbWUkbyIsIm5hbWUkbSIsIm5hbWUkbiIsIm5hbWUkayIsIm5hbWUkbCIsIm5hbWUkaiIsIm5hbWUkaSIsIm5hbWUkaCIsIm5hbWUkZyIsIm5hbWUkZiIsIm5hbWUkZSIsIm5hbWUkZCIsIm5hbWUkYyIsIm5hbWUkYiIsIm5hbWUkYSIsIm5hbWUkOSIsIm5hbWUkOCIsIm5hbWUkNyIsIm5hbWUkNiIsIm5hbWUkNSIsIm5hbWUkNCIsIm5hbWUkMyIsIm5hbWUkMSIsIm5hbWUkMiIsIm5hbWUiLCJNYXAiLCJhcHAiLCJhZGRDb21wb25lbnQiLCJlIiwiZGVidWciLCJhZGRPck92ZXJ3cml0ZUNvbXBvbmVudCIsImNvbXBvbmVudE5hbWUiLCJoYXMiLCJzZXQiLCJ2YWx1ZXMiLCJzZXJ2ZXJBcHAiLCJuYW1lMiIsImhlYXJ0YmVhdENvbnRyb2xsZXIiLCJnZXRQcm92aWRlciIsIm9wdGlvbmFsIiwidHJpZ2dlckhlYXJ0YmVhdCIsImluc3RhbmNlSWRlbnRpZmllciIsImNsZWFySW5zdGFuY2UiLCJvYmoiLCJvcHRpb25zIiwic2V0dGluZ3MiLCJjbGVhciIsIkVSUk9SUyIsIkVSUk9SX0ZBQ1RPUlkiLCJpbXBvcnRfdXRpbCIsIkVycm9yRmFjdG9yeSIsIkZpcmViYXNlQXBwSW1wbCIsImNvbmZpZyIsIl9pc0RlbGV0ZWQiLCJfb3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsIl9jb25maWciLCJfbmFtZSIsIl9hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQiLCJhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQiLCJfY29udGFpbmVyIiwiaW1wb3J0X2NvbXBvbmVudCIsIkNvbXBvbmVudCIsImNoZWNrRGVzdHJveWVkIiwidmFsIiwiaXNEZWxldGVkIiwiY3JlYXRlIiwiYXBwTmFtZSIsIkZpcmViYXNlU2VydmVyQXBwSW1wbCIsInNlcnZlckNvbmZpZyIsImFwaUtleSIsImFwcEltcGwiLCJfc2VydmVyQ29uZmlnIiwiX2ZpbmFsaXphdGlvblJlZ2lzdHJ5IiwiRmluYWxpemF0aW9uUmVnaXN0cnkiLCJhdXRvbWF0aWNDbGVhbnVwIiwiX3JlZkNvdW50IiwiaW5jUmVmQ291bnQiLCJyZWxlYXNlT25EZXJlZiIsInZlcnNpb24kMSIsInRvSlNPTiIsInJlZkNvdW50IiwicmVnaXN0ZXIiLCJkZWNSZWZDb3VudCIsInJhd0NvbmZpZyIsIm5hbWUzIiwiU3RyaW5nIiwiZ2V0RGVmYXVsdEFwcENvbmZpZyIsImV4aXN0aW5nQXBwIiwiZ2V0IiwiZGVlcEVxdWFsIiwiQ29tcG9uZW50Q29udGFpbmVyIiwibmV3QXBwIiwiX3NlcnZlckFwcENvbmZpZyIsImlzQnJvd3NlciIsImlzV2ViV29ya2VyIiwiYXBwT3B0aW9ucyIsIm5hbWVPYmoiLCJoYXNoQ29kZSIsInMiLCJyZWR1Y2UiLCJoYXNoIiwiYyIsIk1hdGgiLCJpbXVsIiwiY2hhckNvZGVBdCIsIm5hbWVTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiQXJyYXkiLCJmcm9tIiwiY2xlYW51cFByb3ZpZGVycyIsImRlbGV0ZSIsImZpcmViYXNlU2VydmVyQXBwIiwiUHJvbWlzZSIsImFsbCIsImxpYnJhcnlLZXlPck5hbWUiLCJ2ZXJzaW9uMiIsInZhcmlhbnQiLCJfYSIsImxpYnJhcnlNaXNtYXRjaCIsIm1hdGNoIiwidmVyc2lvbk1pc21hdGNoIiwid2FybmluZyIsInB1c2giLCJ3YXJuIiwibG9nQ2FsbGJhY2siLCJzZXRVc2VyTG9nSGFuZGxlciIsImxvZ0xldmVsIiwiREJfTkFNRSIsIkRCX1ZFUlNJT04iLCJTVE9SRV9OQU1FIiwiZGJQcm9taXNlIiwiZ2V0RGJQcm9taXNlIiwiaW1wb3J0X2lkYiIsIm9wZW5EQiIsInVwZ3JhZGUiLCJkYiIsIm9sZFZlcnNpb24iLCJjcmVhdGVPYmplY3RTdG9yZSIsImNvbnNvbGUiLCJjYXRjaCIsIm9yaWdpbmFsRXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsInJlYWRIZWFydGJlYXRzRnJvbUluZGV4ZWREQiIsInR4IiwidHJhbnNhY3Rpb24iLCJyZXN1bHQiLCJvYmplY3RTdG9yZSIsImNvbXB1dGVLZXkiLCJkb25lIiwiaWRiR2V0RXJyb3IiLCJ3cml0ZUhlYXJ0YmVhdHNUb0luZGV4ZWREQiIsImhlYXJ0YmVhdE9iamVjdCIsInB1dCIsImFwcElkIiwiTUFYX0hFQURFUl9CWVRFUyIsIlNUT1JFRF9IRUFSVEJFQVRfUkVURU5USU9OX01BWF9NSUxMSVMiLCJIZWFydGJlYXRTZXJ2aWNlSW1wbCIsIl9oZWFydGJlYXRzQ2FjaGUiLCJfc3RvcmFnZSIsIkhlYXJ0YmVhdFN0b3JhZ2VJbXBsIiwiX2hlYXJ0YmVhdHNDYWNoZVByb21pc2UiLCJyZWFkIiwidGhlbiIsInBsYXRmb3JtTG9nZ2VyIiwiYWdlbnQiLCJkYXRlIiwiZ2V0VVRDRGF0ZVN0cmluZyIsImhlYXJ0YmVhdHMiLCJfYiIsImxhc3RTZW50SGVhcnRiZWF0RGF0ZSIsInNvbWUiLCJzaW5nbGVEYXRlSGVhcnRiZWF0IiwiaGJUaW1lc3RhbXAiLCJEYXRlIiwidmFsdWVPZiIsIm5vdyIsIm92ZXJ3cml0ZSIsImdldEhlYXJ0YmVhdHNIZWFkZXIiLCJsZW5ndGgiLCJoZWFydGJlYXRzVG9TZW5kIiwidW5zZW50RW50cmllcyIsImV4dHJhY3RIZWFydGJlYXRzRm9ySGVhZGVyIiwiaGVhZGVyU3RyaW5nIiwiYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmciLCJ0b2RheSIsInRvSVNPU3RyaW5nIiwic3Vic3RyaW5nIiwiaGVhcnRiZWF0c0NhY2hlIiwibWF4U2l6ZSIsInNsaWNlIiwiaGVhcnRiZWF0RW50cnkiLCJmaW5kIiwiaGIiLCJkYXRlcyIsImNvdW50Qnl0ZXMiLCJwb3AiLCJfY2FuVXNlSW5kZXhlZERCUHJvbWlzZSIsInJ1bkluZGV4ZWREQkVudmlyb25tZW50Q2hlY2siLCJpc0luZGV4ZWREQkF2YWlsYWJsZSIsInZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUiLCJjYW5Vc2VJbmRleGVkREIiLCJpZGJIZWFydGJlYXRPYmplY3QiLCJoZWFydGJlYXRzT2JqZWN0IiwiZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0IiwiYWRkIiwicmVnaXN0ZXJDb3JlQ29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxhQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQSxDQUFBRCxhQUFBO0VBQUFFLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUMsa0JBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsd0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSx3QkFBQTtFQUFBQyxLQUFBLEVB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QUFPN0ksV0FBQSxDQUFBeUksNkJBQUEsRUFFTDlFLElBQUEsQ0FBS0MsU0FBQSxDQUFVO0lBQUV6SCxPQUFBLEVBQVM7SUFBR3NMLFVBQUEsRUFBWW9CO0VBQWUsQ0FBRSxDQUFDLEVBQzNEVCxNQUFBO0FBQ0o7QUN4Uk0sU0FBVTJCLHVCQUF1QnpGLE9BQUEsRUFBZ0I7RUFDckQ3SixrQkFBQSxDQUNFLElBQUlvRyxnQkFBQSxDQUFBQyxTQUFBLENBQ0YsbUJBQ0FyRixTQUFBLElBQWEsSUFBSUYseUJBQUEsQ0FBMEJFLFNBQVMsR0FBQyxVQUV0RDtFQUVIaEIsa0JBQUEsQ0FDRSxJQUFJb0csZ0JBQUEsQ0FBQUMsU0FBQSxDQUNGLGFBQ0FyRixTQUFBLElBQWEsSUFBSXFMLG9CQUFBLENBQXFCckwsU0FBUyxHQUFDLFVBRWpEO0VBSUhQLGVBQUEsQ0FBZ0I0QixNQUFBLEVBQU1pRixTQUFBLEVBQVN1QyxPQUFPO0VBRXRDcEosZUFBQSxDQUFnQjRCLE1BQUEsRUFBTWlGLFNBQUEsRUFBUyxTQUFrQjtFQUVqRDdHLGVBQUEsQ0FBZ0IsV0FBVyxFQUFFO0FBQy9CO0FDaEJBNk8sc0JBQUEsQ0FBdUIsRUFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=