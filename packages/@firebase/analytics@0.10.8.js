System.register(["@firebase/util@1.10.0","@firebase/component@0.6.9","@firebase/logger@0.4.2","idb@7.1.1","@firebase/app@0.10.13","@firebase/installations@0.6.9"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.10.0"],["@firebase/component","0.6.9"],["@firebase/logger","0.4.2"],["idb","7.1.1"],["@firebase/app","0.10.13"],["@firebase/installations","0.6.9"],["@firebase/analytics","0.10.8"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.10.0', dep), dep => dependencies.set('@firebase/component@0.6.9', dep), dep => dependencies.set('@firebase/logger@0.4.2', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.10.13', dep), dep => dependencies.set('@firebase/installations@0.6.9', dep)],
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

// .beyond/uimport/@firebase/analytics.0.10.8.js
var analytics_0_10_8_exports = {};
__export(analytics_0_10_8_exports, {
  getAnalytics: () => getAnalytics,
  getGoogleAnalyticsClientId: () => getGoogleAnalyticsClientId,
  initializeAnalytics: () => initializeAnalytics,
  isSupported: () => isSupported,
  logEvent: () => logEvent,
  setAnalyticsCollectionEnabled: () => setAnalyticsCollectionEnabled,
  setConsent: () => setConsent,
  setCurrentScreen: () => setCurrentScreen,
  setDefaultEventParameters: () => setDefaultEventParameters,
  setUserId: () => setUserId,
  setUserProperties: () => setUserProperties,
  settings: () => settings
});
module.exports = __toCommonJS(analytics_0_10_8_exports);

// node_modules/@firebase/analytics/dist/esm/index.esm2017.js
var import_app = require("@firebase/app@0.10.13");
var import_logger = require("@firebase/logger@0.4.2");
var import_util = require("@firebase/util@1.10.0");
var import_component = require("@firebase/component@0.6.9");
var import_installations = require("@firebase/installations@0.6.9");
var ANALYTICS_TYPE = "analytics";
var GA_FID_KEY = "firebase_id";
var ORIGIN_KEY = "origin";
var FETCH_TIMEOUT_MILLIS = 60 * 1e3;
var DYNAMIC_CONFIG_URL = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig";
var GTAG_URL = "https://www.googletagmanager.com/gtag/js";
var logger = new import_logger.Logger("@firebase/analytics");
var ERRORS = {
  ["already-exists"]: "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
  ["already-initialized"]: "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",
  ["already-initialized-settings"]: "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
  ["interop-component-reg-failed"]: "Firebase Analytics Interop Component failed to instantiate: {$reason}",
  ["invalid-analytics-context"]: "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  ["indexeddb-unavailable"]: "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  ["fetch-throttle"]: "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
  ["config-fetch-failed"]: "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
  ["no-api-key"]: 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
  ["no-app-id"]: 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
  ["no-client-id"]: 'The "client_id" field is empty.',
  ["invalid-gtag-resource"]: "Trusted Types detected an invalid gtag resource: {$gtagURL}."
};
var ERROR_FACTORY = new import_util.ErrorFactory("analytics", "Analytics", ERRORS);
function createGtagTrustedTypesScriptURL(url) {
  if (!url.startsWith(GTAG_URL)) {
    const err = ERROR_FACTORY.create("invalid-gtag-resource", {
      gtagURL: url
    });
    logger.warn(err.message);
    return "";
  }
  return url;
}
function promiseAllSettled(promises) {
  return Promise.all(promises.map(promise => promise.catch(e => e)));
}
function createTrustedTypesPolicy(policyName, policyOptions) {
  let trustedTypesPolicy;
  if (window.trustedTypes) {
    trustedTypesPolicy = window.trustedTypes.createPolicy(policyName, policyOptions);
  }
  return trustedTypesPolicy;
}
function insertScriptTag(dataLayerName2, measurementId) {
  const trustedTypesPolicy = createTrustedTypesPolicy("firebase-js-sdk-policy", {
    createScriptURL: createGtagTrustedTypesScriptURL
  });
  const script = document.createElement("script");
  const gtagScriptURL = `${GTAG_URL}?l=${dataLayerName2}&id=${measurementId}`;
  script.src = trustedTypesPolicy ? trustedTypesPolicy === null || trustedTypesPolicy === void 0 ? void 0 : trustedTypesPolicy.createScriptURL(gtagScriptURL) : gtagScriptURL;
  script.async = true;
  document.head.appendChild(script);
}
function getOrCreateDataLayer(dataLayerName2) {
  let dataLayer = [];
  if (Array.isArray(window[dataLayerName2])) {
    dataLayer = window[dataLayerName2];
  } else {
    window[dataLayerName2] = dataLayer;
  }
  return dataLayer;
}
async function gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, measurementId, gtagParams) {
  const correspondingAppId = measurementIdToAppId2[measurementId];
  try {
    if (correspondingAppId) {
      await initializationPromisesMap2[correspondingAppId];
    } else {
      const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList2);
      const foundConfig = dynamicConfigResults.find(config => config.measurementId === measurementId);
      if (foundConfig) {
        await initializationPromisesMap2[foundConfig.appId];
      }
    }
  } catch (e) {
    logger.error(e);
  }
  gtagCore("config", measurementId, gtagParams);
}
async function gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementId, gtagParams) {
  try {
    let initializationPromisesToWaitFor = [];
    if (gtagParams && gtagParams["send_to"]) {
      let gaSendToList = gtagParams["send_to"];
      if (!Array.isArray(gaSendToList)) {
        gaSendToList = [gaSendToList];
      }
      const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList2);
      for (const sendToId of gaSendToList) {
        const foundConfig = dynamicConfigResults.find(config => config.measurementId === sendToId);
        const initializationPromise = foundConfig && initializationPromisesMap2[foundConfig.appId];
        if (initializationPromise) {
          initializationPromisesToWaitFor.push(initializationPromise);
        } else {
          initializationPromisesToWaitFor = [];
          break;
        }
      }
    }
    if (initializationPromisesToWaitFor.length === 0) {
      initializationPromisesToWaitFor = Object.values(initializationPromisesMap2);
    }
    await Promise.all(initializationPromisesToWaitFor);
    gtagCore("event", measurementId, gtagParams || {});
  } catch (e) {
    logger.error(e);
  }
}
function wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2) {
  async function gtagWrapper(command, ...args) {
    try {
      if (command === "event") {
        const [measurementId, gtagParams] = args;
        await gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementId, gtagParams);
      } else if (command === "config") {
        const [measurementId, gtagParams] = args;
        await gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, measurementId, gtagParams);
      } else if (command === "consent") {
        const [consentAction, gtagParams] = args;
        gtagCore("consent", consentAction, gtagParams);
      } else if (command === "get") {
        const [measurementId, fieldName, callback] = args;
        gtagCore("get", measurementId, fieldName, callback);
      } else if (command === "set") {
        const [customParams] = args;
        gtagCore("set", customParams);
      } else {
        gtagCore(command, ...args);
      }
    } catch (e) {
      logger.error(e);
    }
  }
  return gtagWrapper;
}
function wrapOrCreateGtag(initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, dataLayerName2, gtagFunctionName) {
  let gtagCore = function (..._args) {
    window[dataLayerName2].push(arguments);
  };
  if (window[gtagFunctionName] && typeof window[gtagFunctionName] === "function") {
    gtagCore = window[gtagFunctionName];
  }
  window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2);
  return {
    gtagCore,
    wrappedGtag: window[gtagFunctionName]
  };
}
function findGtagScriptOnPage(dataLayerName2) {
  const scriptTags = window.document.getElementsByTagName("script");
  for (const tag of Object.values(scriptTags)) {
    if (tag.src && tag.src.includes(GTAG_URL) && tag.src.includes(dataLayerName2)) {
      return tag;
    }
  }
  return null;
}
var LONG_RETRY_FACTOR = 30;
var BASE_INTERVAL_MILLIS = 1e3;
var RetryData = class {
  constructor(throttleMetadata = {}, intervalMillis = BASE_INTERVAL_MILLIS) {
    this.throttleMetadata = throttleMetadata;
    this.intervalMillis = intervalMillis;
  }
  getThrottleMetadata(appId) {
    return this.throttleMetadata[appId];
  }
  setThrottleMetadata(appId, metadata) {
    this.throttleMetadata[appId] = metadata;
  }
  deleteThrottleMetadata(appId) {
    delete this.throttleMetadata[appId];
  }
};
var defaultRetryData = new RetryData();
function getHeaders(apiKey) {
  return new Headers({
    Accept: "application/json",
    "x-goog-api-key": apiKey
  });
}
async function fetchDynamicConfig(appFields) {
  var _a;
  const {
    appId,
    apiKey
  } = appFields;
  const request = {
    method: "GET",
    headers: getHeaders(apiKey)
  };
  const appUrl = DYNAMIC_CONFIG_URL.replace("{app-id}", appId);
  const response = await fetch(appUrl, request);
  if (response.status !== 200 && response.status !== 304) {
    let errorMessage = "";
    try {
      const jsonResponse = await response.json();
      if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
        errorMessage = jsonResponse.error.message;
      }
    } catch (_ignored) {}
    throw ERROR_FACTORY.create("config-fetch-failed", {
      httpStatus: response.status,
      responseMessage: errorMessage
    });
  }
  return response.json();
}
async function fetchDynamicConfigWithRetry(app, retryData = defaultRetryData, timeoutMillis) {
  const {
    appId,
    apiKey,
    measurementId
  } = app.options;
  if (!appId) {
    throw ERROR_FACTORY.create("no-app-id");
  }
  if (!apiKey) {
    if (measurementId) {
      return {
        measurementId,
        appId
      };
    }
    throw ERROR_FACTORY.create("no-api-key");
  }
  const throttleMetadata = retryData.getThrottleMetadata(appId) || {
    backoffCount: 0,
    throttleEndTimeMillis: Date.now()
  };
  const signal = new AnalyticsAbortSignal();
  setTimeout(async () => {
    signal.abort();
  }, timeoutMillis !== void 0 ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
  return attemptFetchDynamicConfigWithRetry({
    appId,
    apiKey,
    measurementId
  }, throttleMetadata, signal, retryData);
}
async function attemptFetchDynamicConfigWithRetry(appFields, {
  throttleEndTimeMillis,
  backoffCount
}, signal, retryData = defaultRetryData) {
  var _a;
  const {
    appId,
    measurementId
  } = appFields;
  try {
    await setAbortableTimeout(signal, throttleEndTimeMillis);
  } catch (e) {
    if (measurementId) {
      logger.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${measurementId} provided in the "measurementId" field in the local Firebase config. [${e === null || e === void 0 ? void 0 : e.message}]`);
      return {
        appId,
        measurementId
      };
    }
    throw e;
  }
  try {
    const response = await fetchDynamicConfig(appFields);
    retryData.deleteThrottleMetadata(appId);
    return response;
  } catch (e) {
    const error = e;
    if (!isRetriableError(error)) {
      retryData.deleteThrottleMetadata(appId);
      if (measurementId) {
        logger.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${measurementId} provided in the "measurementId" field in the local Firebase config. [${error === null || error === void 0 ? void 0 : error.message}]`);
        return {
          appId,
          measurementId
        };
      } else {
        throw e;
      }
    }
    const backoffMillis = Number((_a = error === null || error === void 0 ? void 0 : error.customData) === null || _a === void 0 ? void 0 : _a.httpStatus) === 503 ? (0, import_util.calculateBackoffMillis)(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : (0, import_util.calculateBackoffMillis)(backoffCount, retryData.intervalMillis);
    const throttleMetadata = {
      throttleEndTimeMillis: Date.now() + backoffMillis,
      backoffCount: backoffCount + 1
    };
    retryData.setThrottleMetadata(appId, throttleMetadata);
    logger.debug(`Calling attemptFetch again in ${backoffMillis} millis`);
    return attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData);
  }
}
function setAbortableTimeout(signal, throttleEndTimeMillis) {
  return new Promise((resolve, reject) => {
    const backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
    const timeout = setTimeout(resolve, backoffMillis);
    signal.addEventListener(() => {
      clearTimeout(timeout);
      reject(ERROR_FACTORY.create("fetch-throttle", {
        throttleEndTimeMillis
      }));
    });
  });
}
function isRetriableError(e) {
  if (!(e instanceof import_util.FirebaseError) || !e.customData) {
    return false;
  }
  const httpStatus = Number(e.customData["httpStatus"]);
  return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
var AnalyticsAbortSignal = class {
  constructor() {
    this.listeners = [];
  }
  addEventListener(listener) {
    this.listeners.push(listener);
  }
  abort() {
    this.listeners.forEach(listener => listener());
  }
};
var defaultEventParametersForInit;
async function logEvent$1(gtagFunction, initializationPromise, eventName, eventParams, options) {
  if (options && options.global) {
    gtagFunction("event", eventName, eventParams);
    return;
  } else {
    const measurementId = await initializationPromise;
    const params = Object.assign(Object.assign({}, eventParams), {
      "send_to": measurementId
    });
    gtagFunction("event", eventName, params);
  }
}
async function setCurrentScreen$1(gtagFunction, initializationPromise, screenName, options) {
  if (options && options.global) {
    gtagFunction("set", {
      "screen_name": screenName
    });
    return Promise.resolve();
  } else {
    const measurementId = await initializationPromise;
    gtagFunction("config", measurementId, {
      update: true,
      "screen_name": screenName
    });
  }
}
async function setUserId$1(gtagFunction, initializationPromise, id, options) {
  if (options && options.global) {
    gtagFunction("set", {
      "user_id": id
    });
    return Promise.resolve();
  } else {
    const measurementId = await initializationPromise;
    gtagFunction("config", measurementId, {
      update: true,
      "user_id": id
    });
  }
}
async function setUserProperties$1(gtagFunction, initializationPromise, properties, options) {
  if (options && options.global) {
    const flatProperties = {};
    for (const key of Object.keys(properties)) {
      flatProperties[`user_properties.${key}`] = properties[key];
    }
    gtagFunction("set", flatProperties);
    return Promise.resolve();
  } else {
    const measurementId = await initializationPromise;
    gtagFunction("config", measurementId, {
      update: true,
      "user_properties": properties
    });
  }
}
async function internalGetGoogleAnalyticsClientId(gtagFunction, initializationPromise) {
  const measurementId = await initializationPromise;
  return new Promise((resolve, reject) => {
    gtagFunction("get", measurementId, "client_id", clientId => {
      if (!clientId) {
        reject(ERROR_FACTORY.create("no-client-id"));
      }
      resolve(clientId);
    });
  });
}
async function setAnalyticsCollectionEnabled$1(initializationPromise, enabled) {
  const measurementId = await initializationPromise;
  window[`ga-disable-${measurementId}`] = !enabled;
}
var defaultConsentSettingsForInit;
function _setConsentDefaultForInit(consentSettings) {
  defaultConsentSettingsForInit = consentSettings;
}
function _setDefaultEventParametersForInit(customParams) {
  defaultEventParametersForInit = customParams;
}
async function validateIndexedDB() {
  if (!(0, import_util.isIndexedDBAvailable)()) {
    logger.warn(ERROR_FACTORY.create("indexeddb-unavailable", {
      errorInfo: "IndexedDB is not available in this environment."
    }).message);
    return false;
  } else {
    try {
      await (0, import_util.validateIndexedDBOpenable)();
    } catch (e) {
      logger.warn(ERROR_FACTORY.create("indexeddb-unavailable", {
        errorInfo: e === null || e === void 0 ? void 0 : e.toString()
      }).message);
      return false;
    }
  }
  return true;
}
async function _initializeAnalytics(app, dynamicConfigPromisesList2, measurementIdToAppId2, installations, gtagCore, dataLayerName2, options) {
  var _a;
  const dynamicConfigPromise = fetchDynamicConfigWithRetry(app);
  dynamicConfigPromise.then(config => {
    measurementIdToAppId2[config.measurementId] = config.appId;
    if (app.options.measurementId && config.measurementId !== app.options.measurementId) {
      logger.warn(`The measurement ID in the local Firebase config (${app.options.measurementId}) does not match the measurement ID fetched from the server (${config.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`);
    }
  }).catch(e => logger.error(e));
  dynamicConfigPromisesList2.push(dynamicConfigPromise);
  const fidPromise = validateIndexedDB().then(envIsValid => {
    if (envIsValid) {
      return installations.getId();
    } else {
      return void 0;
    }
  });
  const [dynamicConfig, fid] = await Promise.all([dynamicConfigPromise, fidPromise]);
  if (!findGtagScriptOnPage(dataLayerName2)) {
    insertScriptTag(dataLayerName2, dynamicConfig.measurementId);
  }
  if (defaultConsentSettingsForInit) {
    gtagCore("consent", "default", defaultConsentSettingsForInit);
    _setConsentDefaultForInit(void 0);
  }
  gtagCore("js", new Date());
  const configProperties = (_a = options === null || options === void 0 ? void 0 : options.config) !== null && _a !== void 0 ? _a : {};
  configProperties[ORIGIN_KEY] = "firebase";
  configProperties.update = true;
  if (fid != null) {
    configProperties[GA_FID_KEY] = fid;
  }
  gtagCore("config", dynamicConfig.measurementId, configProperties);
  if (defaultEventParametersForInit) {
    gtagCore("set", defaultEventParametersForInit);
    _setDefaultEventParametersForInit(void 0);
  }
  return dynamicConfig.measurementId;
}
var AnalyticsService = class {
  constructor(app) {
    this.app = app;
  }
  _delete() {
    delete initializationPromisesMap[this.app.options.appId];
    return Promise.resolve();
  }
};
var initializationPromisesMap = {};
var dynamicConfigPromisesList = [];
var measurementIdToAppId = {};
var dataLayerName = "dataLayer";
var gtagName = "gtag";
var gtagCoreFunction;
var wrappedGtagFunction;
var globalInitDone = false;
function settings(options) {
  if (globalInitDone) {
    throw ERROR_FACTORY.create("already-initialized");
  }
  if (options.dataLayerName) {
    dataLayerName = options.dataLayerName;
  }
  if (options.gtagName) {
    gtagName = options.gtagName;
  }
}
function warnOnBrowserContextMismatch() {
  const mismatchedEnvMessages = [];
  if ((0, import_util.isBrowserExtension)()) {
    mismatchedEnvMessages.push("This is a browser extension environment.");
  }
  if (!(0, import_util.areCookiesEnabled)()) {
    mismatchedEnvMessages.push("Cookies are not available.");
  }
  if (mismatchedEnvMessages.length > 0) {
    const details = mismatchedEnvMessages.map((message, index) => `(${index + 1}) ${message}`).join(" ");
    const err = ERROR_FACTORY.create("invalid-analytics-context", {
      errorInfo: details
    });
    logger.warn(err.message);
  }
}
function factory(app, installations, options) {
  warnOnBrowserContextMismatch();
  const appId = app.options.appId;
  if (!appId) {
    throw ERROR_FACTORY.create("no-app-id");
  }
  if (!app.options.apiKey) {
    if (app.options.measurementId) {
      logger.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${app.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
    } else {
      throw ERROR_FACTORY.create("no-api-key");
    }
  }
  if (initializationPromisesMap[appId] != null) {
    throw ERROR_FACTORY.create("already-exists", {
      id: appId
    });
  }
  if (!globalInitDone) {
    getOrCreateDataLayer(dataLayerName);
    const {
      wrappedGtag,
      gtagCore
    } = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName);
    wrappedGtagFunction = wrappedGtag;
    gtagCoreFunction = gtagCore;
    globalInitDone = true;
  }
  initializationPromisesMap[appId] = _initializeAnalytics(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction, dataLayerName, options);
  const analyticsInstance = new AnalyticsService(app);
  return analyticsInstance;
}
function getAnalytics(app = (0, import_app.getApp)()) {
  app = (0, import_util.getModularInstance)(app);
  const analyticsProvider = (0, import_app._getProvider)(app, ANALYTICS_TYPE);
  if (analyticsProvider.isInitialized()) {
    return analyticsProvider.getImmediate();
  }
  return initializeAnalytics(app);
}
function initializeAnalytics(app, options = {}) {
  const analyticsProvider = (0, import_app._getProvider)(app, ANALYTICS_TYPE);
  if (analyticsProvider.isInitialized()) {
    const existingInstance = analyticsProvider.getImmediate();
    if ((0, import_util.deepEqual)(options, analyticsProvider.getOptions())) {
      return existingInstance;
    } else {
      throw ERROR_FACTORY.create("already-initialized");
    }
  }
  const analyticsInstance = analyticsProvider.initialize({
    options
  });
  return analyticsInstance;
}
async function isSupported() {
  if ((0, import_util.isBrowserExtension)()) {
    return false;
  }
  if (!(0, import_util.areCookiesEnabled)()) {
    return false;
  }
  if (!(0, import_util.isIndexedDBAvailable)()) {
    return false;
  }
  try {
    const isDBOpenable = await (0, import_util.validateIndexedDBOpenable)();
    return isDBOpenable;
  } catch (error) {
    return false;
  }
}
function setCurrentScreen(analyticsInstance, screenName, options) {
  analyticsInstance = (0, import_util.getModularInstance)(analyticsInstance);
  setCurrentScreen$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], screenName, options).catch(e => logger.error(e));
}
async function getGoogleAnalyticsClientId(analyticsInstance) {
  analyticsInstance = (0, import_util.getModularInstance)(analyticsInstance);
  return internalGetGoogleAnalyticsClientId(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId]);
}
function setUserId(analyticsInstance, id, options) {
  analyticsInstance = (0, import_util.getModularInstance)(analyticsInstance);
  setUserId$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], id, options).catch(e => logger.error(e));
}
function setUserProperties(analyticsInstance, properties, options) {
  analyticsInstance = (0, import_util.getModularInstance)(analyticsInstance);
  setUserProperties$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], properties, options).catch(e => logger.error(e));
}
function setAnalyticsCollectionEnabled(analyticsInstance, enabled) {
  analyticsInstance = (0, import_util.getModularInstance)(analyticsInstance);
  setAnalyticsCollectionEnabled$1(initializationPromisesMap[analyticsInstance.app.options.appId], enabled).catch(e => logger.error(e));
}
function setDefaultEventParameters(customParams) {
  if (wrappedGtagFunction) {
    wrappedGtagFunction("set", customParams);
  } else {
    _setDefaultEventParametersForInit(customParams);
  }
}
function logEvent(analyticsInstance, eventName, eventParams, options) {
  analyticsInstance = (0, import_util.getModularInstance)(analyticsInstance);
  logEvent$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], eventName, eventParams, options).catch(e => logger.error(e));
}
function setConsent(consentSettings) {
  if (wrappedGtagFunction) {
    wrappedGtagFunction("consent", "update", consentSettings);
  } else {
    _setConsentDefaultForInit(consentSettings);
  }
}
var name = "@firebase/analytics";
var version = "0.10.8";
function registerAnalytics() {
  (0, import_app._registerComponent)(new import_component.Component(ANALYTICS_TYPE, (container, {
    options: analyticsOptions
  }) => {
    const app = container.getProvider("app").getImmediate();
    const installations = container.getProvider("installations-internal").getImmediate();
    return factory(app, installations, analyticsOptions);
  }, "PUBLIC"));
  (0, import_app._registerComponent)(new import_component.Component("analytics-internal", internalFactory, "PRIVATE"));
  (0, import_app.registerVersion)(name, version);
  (0, import_app.registerVersion)(name, version, "esm2017");
  function internalFactory(container) {
    try {
      const analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
      return {
        logEvent: (eventName, eventParams, options) => logEvent(analytics, eventName, eventParams, options)
      };
    } catch (e) {
      throw ERROR_FACTORY.create("interop-component-reg-failed", {
        reason: e
      });
    }
  }
}
registerAnalytics();
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
 * Copyright 2020 Google LLC
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYW5hbHl0aWNzLjAuMTAuOC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYW5hbHl0aWNzL3NyYy9jb25zdGFudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FuYWx5dGljcy9zcmMvbG9nZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hbmFseXRpY3Mvc3JjL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYW5hbHl0aWNzL3NyYy9oZWxwZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hbmFseXRpY3Mvc3JjL2dldC1jb25maWcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FuYWx5dGljcy9zcmMvZnVuY3Rpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hbmFseXRpY3Mvc3JjL2luaXRpYWxpemUtYW5hbHl0aWNzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hbmFseXRpY3Mvc3JjL2ZhY3RvcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FuYWx5dGljcy9zcmMvYXBpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hbmFseXRpY3Mvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImFuYWx5dGljc18wXzEwXzhfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZ2V0QW5hbHl0aWNzIiwiZ2V0R29vZ2xlQW5hbHl0aWNzQ2xpZW50SWQiLCJpbml0aWFsaXplQW5hbHl0aWNzIiwiaXNTdXBwb3J0ZWQiLCJsb2dFdmVudCIsInNldEFuYWx5dGljc0NvbGxlY3Rpb25FbmFibGVkIiwic2V0Q29uc2VudCIsInNldEN1cnJlbnRTY3JlZW4iLCJzZXREZWZhdWx0RXZlbnRQYXJhbWV0ZXJzIiwic2V0VXNlcklkIiwic2V0VXNlclByb3BlcnRpZXMiLCJzZXR0aW5ncyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJBTkFMWVRJQ1NfVFlQRSIsIkdBX0ZJRF9LRVkiLCJPUklHSU5fS0VZIiwiRkVUQ0hfVElNRU9VVF9NSUxMSVMiLCJEWU5BTUlDX0NPTkZJR19VUkwiLCJHVEFHX1VSTCIsImxvZ2dlciIsImltcG9ydF9sb2dnZXIiLCJMb2dnZXIiLCJFUlJPUlMiLCJFUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJFcnJvckZhY3RvcnkiLCJjcmVhdGVHdGFnVHJ1c3RlZFR5cGVzU2NyaXB0VVJMIiwidXJsIiwic3RhcnRzV2l0aCIsImVyciIsImNyZWF0ZSIsImd0YWdVUkwiLCJ3YXJuIiwibWVzc2FnZSIsInByb21pc2VBbGxTZXR0bGVkIiwicHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwicHJvbWlzZSIsImNhdGNoIiwiZSIsImNyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSIsInBvbGljeU5hbWUiLCJwb2xpY3lPcHRpb25zIiwidHJ1c3RlZFR5cGVzUG9saWN5Iiwid2luZG93IiwidHJ1c3RlZFR5cGVzIiwiY3JlYXRlUG9saWN5IiwiaW5zZXJ0U2NyaXB0VGFnIiwiZGF0YUxheWVyTmFtZTIiLCJtZWFzdXJlbWVudElkIiwiY3JlYXRlU2NyaXB0VVJMIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZ3RhZ1NjcmlwdFVSTCIsInNyYyIsImFzeW5jIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiZ2V0T3JDcmVhdGVEYXRhTGF5ZXIiLCJkYXRhTGF5ZXIiLCJBcnJheSIsImlzQXJyYXkiLCJndGFnT25Db25maWciLCJndGFnQ29yZSIsImluaXRpYWxpemF0aW9uUHJvbWlzZXNNYXAyIiwiZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdDIiLCJtZWFzdXJlbWVudElkVG9BcHBJZDIiLCJndGFnUGFyYW1zIiwiY29ycmVzcG9uZGluZ0FwcElkIiwiZHluYW1pY0NvbmZpZ1Jlc3VsdHMiLCJmb3VuZENvbmZpZyIsImZpbmQiLCJjb25maWciLCJhcHBJZCIsImVycm9yIiwiZ3RhZ09uRXZlbnQiLCJpbml0aWFsaXphdGlvblByb21pc2VzVG9XYWl0Rm9yIiwiZ2FTZW5kVG9MaXN0Iiwic2VuZFRvSWQiLCJpbml0aWFsaXphdGlvblByb21pc2UiLCJwdXNoIiwibGVuZ3RoIiwiT2JqZWN0IiwidmFsdWVzIiwid3JhcEd0YWciLCJndGFnV3JhcHBlciIsImNvbW1hbmQiLCJhcmdzIiwiY29uc2VudEFjdGlvbiIsImZpZWxkTmFtZSIsImNhbGxiYWNrIiwiY3VzdG9tUGFyYW1zIiwid3JhcE9yQ3JlYXRlR3RhZyIsImd0YWdGdW5jdGlvbk5hbWUiLCJfYXJncyIsImFyZ3VtZW50cyIsIndyYXBwZWRHdGFnIiwiZmluZEd0YWdTY3JpcHRPblBhZ2UiLCJzY3JpcHRUYWdzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0YWciLCJpbmNsdWRlcyIsIkxPTkdfUkVUUllfRkFDVE9SIiwiQkFTRV9JTlRFUlZBTF9NSUxMSVMiLCJSZXRyeURhdGEiLCJjb25zdHJ1Y3RvciIsInRocm90dGxlTWV0YWRhdGEiLCJpbnRlcnZhbE1pbGxpcyIsImdldFRocm90dGxlTWV0YWRhdGEiLCJzZXRUaHJvdHRsZU1ldGFkYXRhIiwibWV0YWRhdGEiLCJkZWxldGVUaHJvdHRsZU1ldGFkYXRhIiwiZGVmYXVsdFJldHJ5RGF0YSIsImdldEhlYWRlcnMiLCJhcGlLZXkiLCJIZWFkZXJzIiwiQWNjZXB0IiwiZmV0Y2hEeW5hbWljQ29uZmlnIiwiYXBwRmllbGRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhcHBVcmwiLCJyZXBsYWNlIiwicmVzcG9uc2UiLCJmZXRjaCIsInN0YXR1cyIsImVycm9yTWVzc2FnZSIsImpzb25SZXNwb25zZSIsImpzb24iLCJfYSIsIl9pZ25vcmVkIiwiaHR0cFN0YXR1cyIsInJlc3BvbnNlTWVzc2FnZSIsImZldGNoRHluYW1pY0NvbmZpZ1dpdGhSZXRyeSIsImFwcCIsInJldHJ5RGF0YSIsInRpbWVvdXRNaWxsaXMiLCJvcHRpb25zIiwiYmFja29mZkNvdW50IiwidGhyb3R0bGVFbmRUaW1lTWlsbGlzIiwiRGF0ZSIsIm5vdyIsInNpZ25hbCIsIkFuYWx5dGljc0Fib3J0U2lnbmFsIiwic2V0VGltZW91dCIsImFib3J0IiwiYXR0ZW1wdEZldGNoRHluYW1pY0NvbmZpZ1dpdGhSZXRyeSIsInNldEFib3J0YWJsZVRpbWVvdXQiLCJpc1JldHJpYWJsZUVycm9yIiwiYmFja29mZk1pbGxpcyIsIk51bWJlciIsImN1c3RvbURhdGEiLCJjYWxjdWxhdGVCYWNrb2ZmTWlsbGlzIiwiZGVidWciLCJyZXNvbHZlIiwicmVqZWN0IiwiTWF0aCIsIm1heCIsInRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0IiwiRmlyZWJhc2VFcnJvciIsImxpc3RlbmVycyIsImxpc3RlbmVyIiwiZm9yRWFjaCIsImRlZmF1bHRFdmVudFBhcmFtZXRlcnNGb3JJbml0IiwibG9nRXZlbnQkMSIsImd0YWdGdW5jdGlvbiIsImV2ZW50TmFtZSIsImV2ZW50UGFyYW1zIiwiZ2xvYmFsIiwicGFyYW1zIiwiYXNzaWduIiwic2V0Q3VycmVudFNjcmVlbiQxIiwic2NyZWVuTmFtZSIsInVwZGF0ZSIsInNldFVzZXJJZCQxIiwiaWQiLCJzZXRVc2VyUHJvcGVydGllcyQxIiwicHJvcGVydGllcyIsImZsYXRQcm9wZXJ0aWVzIiwia2V5Iiwia2V5cyIsImludGVybmFsR2V0R29vZ2xlQW5hbHl0aWNzQ2xpZW50SWQiLCJjbGllbnRJZCIsInNldEFuYWx5dGljc0NvbGxlY3Rpb25FbmFibGVkJDEiLCJlbmFibGVkIiwiZGVmYXVsdENvbnNlbnRTZXR0aW5nc0ZvckluaXQiLCJfc2V0Q29uc2VudERlZmF1bHRGb3JJbml0IiwiY29uc2VudFNldHRpbmdzIiwiX3NldERlZmF1bHRFdmVudFBhcmFtZXRlcnNGb3JJbml0IiwidmFsaWRhdGVJbmRleGVkREIiLCJpc0luZGV4ZWREQkF2YWlsYWJsZSIsImVycm9ySW5mbyIsInZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUiLCJ0b1N0cmluZyIsIl9pbml0aWFsaXplQW5hbHl0aWNzIiwiaW5zdGFsbGF0aW9ucyIsImR5bmFtaWNDb25maWdQcm9taXNlIiwidGhlbiIsImZpZFByb21pc2UiLCJlbnZJc1ZhbGlkIiwiZ2V0SWQiLCJkeW5hbWljQ29uZmlnIiwiZmlkIiwiY29uZmlnUHJvcGVydGllcyIsIkFuYWx5dGljc1NlcnZpY2UiLCJfZGVsZXRlIiwiaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcCIsImR5bmFtaWNDb25maWdQcm9taXNlc0xpc3QiLCJtZWFzdXJlbWVudElkVG9BcHBJZCIsImRhdGFMYXllck5hbWUiLCJndGFnTmFtZSIsImd0YWdDb3JlRnVuY3Rpb24iLCJ3cmFwcGVkR3RhZ0Z1bmN0aW9uIiwiZ2xvYmFsSW5pdERvbmUiLCJ3YXJuT25Ccm93c2VyQ29udGV4dE1pc21hdGNoIiwibWlzbWF0Y2hlZEVudk1lc3NhZ2VzIiwiaXNCcm93c2VyRXh0ZW5zaW9uIiwiYXJlQ29va2llc0VuYWJsZWQiLCJkZXRhaWxzIiwiaW5kZXgiLCJqb2luIiwiZmFjdG9yeSIsImFuYWx5dGljc0luc3RhbmNlIiwiaW1wb3J0X2FwcCIsImdldEFwcCIsImdldE1vZHVsYXJJbnN0YW5jZSIsImFuYWx5dGljc1Byb3ZpZGVyIiwiX2dldFByb3ZpZGVyIiwiaXNJbml0aWFsaXplZCIsImdldEltbWVkaWF0ZSIsImV4aXN0aW5nSW5zdGFuY2UiLCJkZWVwRXF1YWwiLCJnZXRPcHRpb25zIiwiaW5pdGlhbGl6ZSIsImlzREJPcGVuYWJsZSIsInJlZ2lzdGVyQW5hbHl0aWNzIiwiX3JlZ2lzdGVyQ29tcG9uZW50IiwiaW1wb3J0X2NvbXBvbmVudCIsIkNvbXBvbmVudCIsImNvbnRhaW5lciIsImFuYWx5dGljc09wdGlvbnMiLCJnZXRQcm92aWRlciIsImludGVybmFsRmFjdG9yeSIsInJlZ2lzdGVyVmVyc2lvbiIsIm5hbWUiLCJ2ZXJzaW9uIiwiYW5hbHl0aWNzIiwicmVhc29uIl0sIm1hcHBpbmdzIjoiOzs7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QUEsQ0FBVSxzQkFBc0JJLGVBQUEsRUFBdUM7RUFHN0UsSUFBQW5CLFVBQUEsQ0FBQW9CLGVBQUEsRUFBZ0JDLElBQUEsRUFBTUMsT0FBTztFQUU3QixJQUFBdEIsVUFBQSxDQUFBb0IsZUFBQSxFQUFnQkMsSUFBQSxFQUFNQyxPQUFBLEVBQVMsU0FBa0I7RUFFakQsU0FBU0gsZ0JBQ1BILFNBQUEsRUFBNkI7SUFFN0IsSUFBSTtNQUNGLE1BQU1PLFNBQUEsR0FBWVAsU0FBQSxDQUFVRSxXQUFBLENBQVkxTyxjQUFjLEVBQUU4TixZQUFBLENBQVk7TUFDcEUsT0FBTztRQUNMek8sUUFBQSxFQUFVQSxDQUNSMEssU0FBQSxFQUNBQyxXQUFBLEVBQ0FoQyxPQUFBLEtBQ0czSSxRQUFBLENBQVMwUCxTQUFBLEVBQVdoRixTQUFBLEVBQVdDLFdBQUEsRUFBYWhDLE9BQU87O0lBRTNELFNBQVFwRyxDQUFBLEVBQVA7TUFDQSxNQUFNbEIsYUFBQSxDQUFjTyxNQUFBLENBQW9EO1FBQ3RFK04sTUFBQSxFQUFRcE47TUFDVDtJQUNGOztBQUVMO0FBRUF3TSxpQkFBQSxDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==