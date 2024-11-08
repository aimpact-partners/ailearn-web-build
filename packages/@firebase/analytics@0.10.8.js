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

// .beyond/uimport/temp/@firebase/analytics.0.10.8.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hbmFseXRpY3MuMC4xMC44LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hbmFseXRpY3Mvc3JjL2NvbnN0YW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYW5hbHl0aWNzL3NyYy9sb2dnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FuYWx5dGljcy9zcmMvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hbmFseXRpY3Mvc3JjL2hlbHBlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FuYWx5dGljcy9zcmMvZ2V0LWNvbmZpZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYW5hbHl0aWNzL3NyYy9mdW5jdGlvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FuYWx5dGljcy9zcmMvaW5pdGlhbGl6ZS1hbmFseXRpY3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FuYWx5dGljcy9zcmMvZmFjdG9yeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYW5hbHl0aWNzL3NyYy9hcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FuYWx5dGljcy9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiYW5hbHl0aWNzXzBfMTBfOF9leHBvcnRzIiwiX19leHBvcnQiLCJnZXRBbmFseXRpY3MiLCJnZXRHb29nbGVBbmFseXRpY3NDbGllbnRJZCIsImluaXRpYWxpemVBbmFseXRpY3MiLCJpc1N1cHBvcnRlZCIsImxvZ0V2ZW50Iiwic2V0QW5hbHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQiLCJzZXRDb25zZW50Iiwic2V0Q3VycmVudFNjcmVlbiIsInNldERlZmF1bHRFdmVudFBhcmFtZXRlcnMiLCJzZXRVc2VySWQiLCJzZXRVc2VyUHJvcGVydGllcyIsInNldHRpbmdzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIkFOQUxZVElDU19UWVBFIiwiR0FfRklEX0tFWSIsIk9SSUdJTl9LRVkiLCJGRVRDSF9USU1FT1VUX01JTExJUyIsIkRZTkFNSUNfQ09ORklHX1VSTCIsIkdUQUdfVVJMIiwibG9nZ2VyIiwiaW1wb3J0X2xvZ2dlciIsIkxvZ2dlciIsIkVSUk9SUyIsIkVSUk9SX0ZBQ1RPUlkiLCJpbXBvcnRfdXRpbCIsIkVycm9yRmFjdG9yeSIsImNyZWF0ZUd0YWdUcnVzdGVkVHlwZXNTY3JpcHRVUkwiLCJ1cmwiLCJzdGFydHNXaXRoIiwiZXJyIiwiY3JlYXRlIiwiZ3RhZ1VSTCIsIndhcm4iLCJtZXNzYWdlIiwicHJvbWlzZUFsbFNldHRsZWQiLCJwcm9taXNlcyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJwcm9taXNlIiwiY2F0Y2giLCJlIiwiY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5IiwicG9saWN5TmFtZSIsInBvbGljeU9wdGlvbnMiLCJ0cnVzdGVkVHlwZXNQb2xpY3kiLCJ3aW5kb3ciLCJ0cnVzdGVkVHlwZXMiLCJjcmVhdGVQb2xpY3kiLCJpbnNlcnRTY3JpcHRUYWciLCJkYXRhTGF5ZXJOYW1lMiIsIm1lYXN1cmVtZW50SWQiLCJjcmVhdGVTY3JpcHRVUkwiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJndGFnU2NyaXB0VVJMIiwic3JjIiwiYXN5bmMiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJnZXRPckNyZWF0ZURhdGFMYXllciIsImRhdGFMYXllciIsIkFycmF5IiwiaXNBcnJheSIsImd0YWdPbkNvbmZpZyIsImd0YWdDb3JlIiwiaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcDIiLCJkeW5hbWljQ29uZmlnUHJvbWlzZXNMaXN0MiIsIm1lYXN1cmVtZW50SWRUb0FwcElkMiIsImd0YWdQYXJhbXMiLCJjb3JyZXNwb25kaW5nQXBwSWQiLCJkeW5hbWljQ29uZmlnUmVzdWx0cyIsImZvdW5kQ29uZmlnIiwiZmluZCIsImNvbmZpZyIsImFwcElkIiwiZXJyb3IiLCJndGFnT25FdmVudCIsImluaXRpYWxpemF0aW9uUHJvbWlzZXNUb1dhaXRGb3IiLCJnYVNlbmRUb0xpc3QiLCJzZW5kVG9JZCIsImluaXRpYWxpemF0aW9uUHJvbWlzZSIsInB1c2giLCJsZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ3cmFwR3RhZyIsImd0YWdXcmFwcGVyIiwiY29tbWFuZCIsImFyZ3MiLCJjb25zZW50QWN0aW9uIiwiZmllbGROYW1lIiwiY2FsbGJhY2siLCJjdXN0b21QYXJhbXMiLCJ3cmFwT3JDcmVhdGVHdGFnIiwiZ3RhZ0Z1bmN0aW9uTmFtZSIsIl9hcmdzIiwiYXJndW1lbnRzIiwid3JhcHBlZEd0YWciLCJmaW5kR3RhZ1NjcmlwdE9uUGFnZSIsInNjcmlwdFRhZ3MiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInRhZyIsImluY2x1ZGVzIiwiTE9OR19SRVRSWV9GQUNUT1IiLCJCQVNFX0lOVEVSVkFMX01JTExJUyIsIlJldHJ5RGF0YSIsImNvbnN0cnVjdG9yIiwidGhyb3R0bGVNZXRhZGF0YSIsImludGVydmFsTWlsbGlzIiwiZ2V0VGhyb3R0bGVNZXRhZGF0YSIsInNldFRocm90dGxlTWV0YWRhdGEiLCJtZXRhZGF0YSIsImRlbGV0ZVRocm90dGxlTWV0YWRhdGEiLCJkZWZhdWx0UmV0cnlEYXRhIiwiZ2V0SGVhZGVycyIsImFwaUtleSIsIkhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaER5bmFtaWNDb25maWciLCJhcHBGaWVsZHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVycyIsImFwcFVybCIsInJlcGxhY2UiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwiZXJyb3JNZXNzYWdlIiwianNvblJlc3BvbnNlIiwianNvbiIsIl9hIiwiX2lnbm9yZWQiLCJodHRwU3RhdHVzIiwicmVzcG9uc2VNZXNzYWdlIiwiZmV0Y2hEeW5hbWljQ29uZmlnV2l0aFJldHJ5IiwiYXBwIiwicmV0cnlEYXRhIiwidGltZW91dE1pbGxpcyIsIm9wdGlvbnMiLCJiYWNrb2ZmQ291bnQiLCJ0aHJvdHRsZUVuZFRpbWVNaWxsaXMiLCJEYXRlIiwibm93Iiwic2lnbmFsIiwiQW5hbHl0aWNzQWJvcnRTaWduYWwiLCJzZXRUaW1lb3V0IiwiYWJvcnQiLCJhdHRlbXB0RmV0Y2hEeW5hbWljQ29uZmlnV2l0aFJldHJ5Iiwic2V0QWJvcnRhYmxlVGltZW91dCIsImlzUmV0cmlhYmxlRXJyb3IiLCJiYWNrb2ZmTWlsbGlzIiwiTnVtYmVyIiwiY3VzdG9tRGF0YSIsImNhbGN1bGF0ZUJhY2tvZmZNaWxsaXMiLCJkZWJ1ZyIsInJlc29sdmUiLCJyZWplY3QiLCJNYXRoIiwibWF4IiwidGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhclRpbWVvdXQiLCJGaXJlYmFzZUVycm9yIiwibGlzdGVuZXJzIiwibGlzdGVuZXIiLCJmb3JFYWNoIiwiZGVmYXVsdEV2ZW50UGFyYW1ldGVyc0ZvckluaXQiLCJsb2dFdmVudCQxIiwiZ3RhZ0Z1bmN0aW9uIiwiZXZlbnROYW1lIiwiZXZlbnRQYXJhbXMiLCJnbG9iYWwiLCJwYXJhbXMiLCJhc3NpZ24iLCJzZXRDdXJyZW50U2NyZWVuJDEiLCJzY3JlZW5OYW1lIiwidXBkYXRlIiwic2V0VXNlcklkJDEiLCJpZCIsInNldFVzZXJQcm9wZXJ0aWVzJDEiLCJwcm9wZXJ0aWVzIiwiZmxhdFByb3BlcnRpZXMiLCJrZXkiLCJrZXlzIiwiaW50ZXJuYWxHZXRHb29nbGVBbmFseXRpY3NDbGllbnRJZCIsImNsaWVudElkIiwic2V0QW5hbHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQkMSIsImVuYWJsZWQiLCJkZWZhdWx0Q29uc2VudFNldHRpbmdzRm9ySW5pdCIsIl9zZXRDb25zZW50RGVmYXVsdEZvckluaXQiLCJjb25zZW50U2V0dGluZ3MiLCJfc2V0RGVmYXVsdEV2ZW50UGFyYW1ldGVyc0ZvckluaXQiLCJ2YWxpZGF0ZUluZGV4ZWREQiIsImlzSW5kZXhlZERCQXZhaWxhYmxlIiwiZXJyb3JJbmZvIiwidmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSIsInRvU3RyaW5nIiwiX2luaXRpYWxpemVBbmFseXRpY3MiLCJpbnN0YWxsYXRpb25zIiwiZHluYW1pY0NvbmZpZ1Byb21pc2UiLCJ0aGVuIiwiZmlkUHJvbWlzZSIsImVudklzVmFsaWQiLCJnZXRJZCIsImR5bmFtaWNDb25maWciLCJmaWQiLCJjb25maWdQcm9wZXJ0aWVzIiwiQW5hbHl0aWNzU2VydmljZSIsIl9kZWxldGUiLCJpbml0aWFsaXphdGlvblByb21pc2VzTWFwIiwiZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCIsIm1lYXN1cmVtZW50SWRUb0FwcElkIiwiZGF0YUxheWVyTmFtZSIsImd0YWdOYW1lIiwiZ3RhZ0NvcmVGdW5jdGlvbiIsIndyYXBwZWRHdGFnRnVuY3Rpb24iLCJnbG9iYWxJbml0RG9uZSIsIndhcm5PbkJyb3dzZXJDb250ZXh0TWlzbWF0Y2giLCJtaXNtYXRjaGVkRW52TWVzc2FnZXMiLCJpc0Jyb3dzZXJFeHRlbnNpb24iLCJhcmVDb29raWVzRW5hYmxlZCIsImRldGFpbHMiLCJpbmRleCIsImpvaW4iLCJmYWN0b3J5IiwiYW5hbHl0aWNzSW5zdGFuY2UiLCJpbXBvcnRfYXBwIiwiZ2V0QXBwIiwiZ2V0TW9kdWxhckluc3RhbmNlIiwiYW5hbHl0aWNzUHJvdmlkZXIiLCJfZ2V0UHJvdmlkZXIiLCJpc0luaXRpYWxpemVkIiwiZ2V0SW1tZWRpYXRlIiwiZXhpc3RpbmdJbnN0YW5jZSIsImRlZXBFcXVhbCIsImdldE9wdGlvbnMiLCJpbml0aWFsaXplIiwiaXNEQk9wZW5hYmxlIiwicmVnaXN0ZXJBbmFseXRpY3MiLCJfcmVnaXN0ZXJDb21wb25lbnQiLCJpbXBvcnRfY29tcG9uZW50IiwiQ29tcG9uZW50IiwiY29udGFpbmVyIiwiYW5hbHl0aWNzT3B0aW9ucyIsImdldFByb3ZpZGVyIiwiaW50ZXJuYWxGYWN0b3J5IiwicmVnaXN0ZXJWZXJzaW9uIiwibmFtZSIsInZlcnNpb24iLCJhbmFseXRpY3MiLCJyZWFzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsd0JBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsMEJBQUEsRUFBQUEsQ0FBQSxLQUFBQSwwQkFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLDZCQUFBLEVBQUFBLENBQUEsS0FBQUEsNkJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyx5QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHlCQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQWhCLHdCQUFBOzs7Ozs7OztBQ29CTyxJQUFNaUIsY0FBQSxHQUFpQjtBQUd2QixJQUFNQyxVQUFBLEdBQWE7QUFDbkIsSUFBTUMsVUFBQSxHQUFhO0FBRW5CLElBQU1DLG9CQUFBLEdBQXVCLEtBQUs7QUFFbEMsSUFBTUMsa0JBQUEsR0FDWDtBQUVLLElBQU1DLFFBQUEsR0FBVztBQ1pqQixJQUFNQyxNQUFBLEdBQVMsSUFBSUMsYUFBQSxDQUFBQyxNQUFBLENBQU8scUJBQXFCO0FDZXRELElBQU1DLE1BQUEsR0FBbUM7RUFDdkMsb0JBQ0U7RUFHRix5QkFDRTtFQUlGLGtDQUNFO0VBR0Ysa0NBQ0U7RUFDRiwrQkFDRTtFQUdGLDJCQUNFO0VBR0Ysb0JBQ0U7RUFFRix5QkFDRTtFQUNGLGdCQUNFO0VBRUYsZUFDRTtFQUVGLGtCQUErQjtFQUMvQiwyQkFDRTs7QUFnQkcsSUFBTUMsYUFBQSxHQUFnQixJQUFJQyxXQUFBLENBQUFDLFlBQUEsQ0FDL0IsYUFDQSxhQUNBSCxNQUFNO0FDeERGLFNBQVVJLGdDQUFnQ0MsR0FBQSxFQUFXO0VBQ3pELElBQUksQ0FBQ0EsR0FBQSxDQUFJQyxVQUFBLENBQVdWLFFBQVEsR0FBRztJQUM3QixNQUFNVyxHQUFBLEdBQU1OLGFBQUEsQ0FBY08sTUFBQSxDQUE2QztNQUNyRUMsT0FBQSxFQUFTSjtJQUNWO0lBQ0RSLE1BQUEsQ0FBT2EsSUFBQSxDQUFLSCxHQUFBLENBQUlJLE9BQU87SUFDdkIsT0FBTztFQUNSO0VBQ0QsT0FBT04sR0FBQTtBQUNUO0FBUU0sU0FBVU8sa0JBQ2RDLFFBQUEsRUFBMkI7RUFFM0IsT0FBT0MsT0FBQSxDQUFRQyxHQUFBLENBQUlGLFFBQUEsQ0FBU0csR0FBQSxDQUFJQyxPQUFBLElBQVdBLE9BQUEsQ0FBUUMsS0FBQSxDQUFNQyxDQUFBLElBQUtBLENBQUMsQ0FBQyxDQUFDO0FBQ25FO0FBU2dCLFNBQUFDLHlCQUNkQyxVQUFBLEVBQ0FDLGFBQUEsRUFBZ0Q7RUFJaEQsSUFBSUMsa0JBQUE7RUFDSixJQUFJQyxNQUFBLENBQU9DLFlBQUEsRUFBYztJQUN2QkYsa0JBQUEsR0FBcUJDLE1BQUEsQ0FBT0MsWUFBQSxDQUFhQyxZQUFBLENBQ3ZDTCxVQUFBLEVBQ0FDLGFBQWE7RUFFaEI7RUFDRCxPQUFPQyxrQkFBQTtBQUNUO0FBTWdCLFNBQUFJLGdCQUNkQyxjQUFBLEVBQ0FDLGFBQUEsRUFBcUI7RUFFckIsTUFBTU4sa0JBQUEsR0FBcUJILHdCQUFBLENBQ3pCLDBCQUNBO0lBQ0VVLGVBQUEsRUFBaUIxQjtFQUNsQjtFQUdILE1BQU0yQixNQUFBLEdBQVNDLFFBQUEsQ0FBU0MsYUFBQSxDQUFjLFFBQVE7RUFJOUMsTUFBTUMsYUFBQSxHQUFnQixHQUFHdEMsUUFBQSxNQUFjZ0MsY0FBQSxPQUFvQkMsYUFBQTtFQUMxREUsTUFBQSxDQUFPSSxHQUFBLEdBQW9DWixrQkFBQSxHQUN2Q0Esa0JBQUEsS0FBd0MsUUFBeENBLGtCQUFBLEtBQWtCLGtCQUFsQkEsa0JBQUEsQ0FBMENPLGVBQUEsQ0FBZ0JJLGFBQWEsSUFDeEVBLGFBQUE7RUFFSkgsTUFBQSxDQUFPSyxLQUFBLEdBQVE7RUFDZkosUUFBQSxDQUFTSyxJQUFBLENBQUtDLFdBQUEsQ0FBWVAsTUFBTTtBQUNsQztBQU1NLFNBQVVRLHFCQUFxQlgsY0FBQSxFQUFxQjtFQUV4RCxJQUFJWSxTQUFBLEdBQXVCO0VBQzNCLElBQUlDLEtBQUEsQ0FBTUMsT0FBQSxDQUFRbEIsTUFBQSxDQUFPSSxjQUFBLENBQWMsR0FBRztJQUN4Q1ksU0FBQSxHQUFZaEIsTUFBQSxDQUFPSSxjQUFBO0VBQ3BCLE9BQU07SUFDTEosTUFBQSxDQUFPSSxjQUFBLElBQWlCWSxTQUFBO0VBQ3pCO0VBQ0QsT0FBT0EsU0FBQTtBQUNUO0FBWUEsZUFBZUcsYUFDYkMsUUFBQSxFQUNBQywwQkFBQSxFQUNBQywwQkFBQSxFQUdBQyxxQkFBQSxFQUNBbEIsYUFBQSxFQUNBbUIsVUFBQSxFQUF1RDtFQUl2RCxNQUFNQyxrQkFBQSxHQUFxQkYscUJBQUEsQ0FBcUJsQixhQUFBO0VBQ2hELElBQUk7SUFDRixJQUFJb0Isa0JBQUEsRUFBb0I7TUFDdEIsTUFBTUosMEJBQUEsQ0FBMEJJLGtCQUFBO0lBQ2pDLE9BQU07TUFLTCxNQUFNQyxvQkFBQSxHQUF1QixNQUFNdEMsaUJBQUEsQ0FDakNrQywwQkFBeUI7TUFFM0IsTUFBTUssV0FBQSxHQUFjRCxvQkFBQSxDQUFxQkUsSUFBQSxDQUN2Q0MsTUFBQSxJQUFVQSxNQUFBLENBQU94QixhQUFBLEtBQWtCQSxhQUFhO01BRWxELElBQUlzQixXQUFBLEVBQWE7UUFDZixNQUFNTiwwQkFBQSxDQUEwQk0sV0FBQSxDQUFZRyxLQUFBO01BQzdDO0lBQ0Y7RUFDRixTQUFRbkMsQ0FBQSxFQUFQO0lBQ0F0QixNQUFBLENBQU8wRCxLQUFBLENBQU1wQyxDQUFDO0VBQ2Y7RUFDRHlCLFFBQUEsQ0FBNkIsVUFBQWYsYUFBQSxFQUFlbUIsVUFBVTtBQUN4RDtBQVdBLGVBQWVRLFlBQ2JaLFFBQUEsRUFDQUMsMEJBQUEsRUFDQUMsMEJBQUEsRUFHQWpCLGFBQUEsRUFDQW1CLFVBQUEsRUFBdUQ7RUFFdkQsSUFBSTtJQUNGLElBQUlTLCtCQUFBLEdBQTBEO0lBSTlELElBQUlULFVBQUEsSUFBY0EsVUFBQSxDQUFXLFlBQVk7TUFDdkMsSUFBSVUsWUFBQSxHQUFrQ1YsVUFBQSxDQUFXO01BRWpELElBQUksQ0FBQ1AsS0FBQSxDQUFNQyxPQUFBLENBQVFnQixZQUFZLEdBQUc7UUFDaENBLFlBQUEsR0FBZSxDQUFDQSxZQUFZO01BQzdCO01BR0QsTUFBTVIsb0JBQUEsR0FBdUIsTUFBTXRDLGlCQUFBLENBQ2pDa0MsMEJBQXlCO01BRTNCLFdBQVdhLFFBQUEsSUFBWUQsWUFBQSxFQUFjO1FBRW5DLE1BQU1QLFdBQUEsR0FBY0Qsb0JBQUEsQ0FBcUJFLElBQUEsQ0FDdkNDLE1BQUEsSUFBVUEsTUFBQSxDQUFPeEIsYUFBQSxLQUFrQjhCLFFBQVE7UUFFN0MsTUFBTUMscUJBQUEsR0FDSlQsV0FBQSxJQUFlTiwwQkFBQSxDQUEwQk0sV0FBQSxDQUFZRyxLQUFBO1FBQ3ZELElBQUlNLHFCQUFBLEVBQXVCO1VBQ3pCSCwrQkFBQSxDQUFnQ0ksSUFBQSxDQUFLRCxxQkFBcUI7UUFDM0QsT0FBTTtVQUlMSCwrQkFBQSxHQUFrQztVQUNsQztRQUNEO01BQ0Y7SUFDRjtJQUtELElBQUlBLCtCQUFBLENBQWdDSyxNQUFBLEtBQVcsR0FBRztNQUVoREwsK0JBQUEsR0FBa0NNLE1BQUEsQ0FBT0MsTUFBQSxDQUN2Q25CLDBCQUF5QjtJQUU1QjtJQUlELE1BQU0vQixPQUFBLENBQVFDLEdBQUEsQ0FBSTBDLCtCQUErQjtJQUVqRGIsUUFBQSxDQUFRLFNBQW9CZixhQUFBLEVBQWVtQixVQUFBLElBQWMsRUFBRTtFQUM1RCxTQUFRN0IsQ0FBQSxFQUFQO0lBQ0F0QixNQUFBLENBQU8wRCxLQUFBLENBQU1wQyxDQUFDO0VBQ2Y7QUFDSDtBQVdBLFNBQVM4QyxTQUNQckIsUUFBQSxFQUtBQywwQkFBQSxFQUtBQywwQkFBQSxFQVFBQyxxQkFBQSxFQUF5RDtFQVF6RCxlQUFlbUIsWUFDYkMsT0FBQSxLQUNHQyxJQUFBLEVBQWU7SUFFbEIsSUFBSTtNQUVGLElBQUlELE9BQUEsS0FBTyxTQUF3QjtRQUNqQyxNQUFNLENBQUN0QyxhQUFBLEVBQWVtQixVQUFVLElBQUlvQixJQUFBO1FBRXBDLE1BQU1aLFdBQUEsQ0FDSlosUUFBQSxFQUNBQywwQkFBQSxFQUNBQywwQkFBQSxFQUNBakIsYUFBQSxFQUNBbUIsVUFBcUM7TUFFeEMsV0FBVW1CLE9BQUEsS0FBTyxVQUF5QjtRQUN6QyxNQUFNLENBQUN0QyxhQUFBLEVBQWVtQixVQUFVLElBQUlvQixJQUFBO1FBRXBDLE1BQU16QixZQUFBLENBQ0pDLFFBQUEsRUFDQUMsMEJBQUEsRUFDQUMsMEJBQUEsRUFDQUMscUJBQUEsRUFDQWxCLGFBQUEsRUFDQW1CLFVBQXFDO01BRXhDLFdBQVVtQixPQUFBLEtBQU8sV0FBMEI7UUFDMUMsTUFBTSxDQUFDRSxhQUFBLEVBQWVyQixVQUFVLElBQUlvQixJQUFBO1FBRXBDeEIsUUFBQSxDQUVFLFdBQUF5QixhQUFBLEVBQ0FyQixVQUE2QjtNQUVoQyxXQUFVbUIsT0FBQSxLQUFPLE9BQXNCO1FBQ3RDLE1BQU0sQ0FBQ3RDLGFBQUEsRUFBZXlDLFNBQUEsRUFBV0MsUUFBUSxJQUFJSCxJQUFBO1FBQzdDeEIsUUFBQSxDQUFRLE9BRU5mLGFBQUEsRUFDQXlDLFNBQUEsRUFDQUMsUUFBd0M7TUFFM0MsV0FBVUosT0FBQSxLQUFPLE9BQXNCO1FBQ3RDLE1BQU0sQ0FBQ0ssWUFBWSxJQUFJSixJQUFBO1FBRXZCeEIsUUFBQSxDQUFRLE9BQWtCNEIsWUFBNEI7TUFDdkQsT0FBTTtRQUNMNUIsUUFBQSxDQUFTdUIsT0FBQSxFQUFTLEdBQUdDLElBQUk7TUFDMUI7SUFDRixTQUFRakQsQ0FBQSxFQUFQO01BQ0F0QixNQUFBLENBQU8wRCxLQUFBLENBQU1wQyxDQUFDO0lBQ2Y7O0VBRUgsT0FBTytDLFdBQUE7QUFDVDtBQWFNLFNBQVVPLGlCQUNkNUIsMEJBQUEsRUFDQUMsMEJBQUEsRUFHQUMscUJBQUEsRUFDQW5CLGNBQUEsRUFDQThDLGdCQUFBLEVBQXdCO0VBTXhCLElBQUk5QixRQUFBLEdBQWlCLFNBQUFBLENBQUEsR0FBYStCLEtBQUEsRUFBZ0I7SUFFL0NuRCxNQUFBLENBQU9JLGNBQUEsRUFBNkJpQyxJQUFBLENBQUtlLFNBQVM7RUFDckQ7RUFHQSxJQUNFcEQsTUFBQSxDQUFPa0QsZ0JBQUEsS0FDUCxPQUFPbEQsTUFBQSxDQUFPa0QsZ0JBQUEsTUFBc0IsWUFDcEM7SUFFQTlCLFFBQUEsR0FBV3BCLE1BQUEsQ0FBT2tELGdCQUFBO0VBQ25CO0VBRURsRCxNQUFBLENBQU9rRCxnQkFBQSxJQUFvQlQsUUFBQSxDQUN6QnJCLFFBQUEsRUFDQUMsMEJBQUEsRUFDQUMsMEJBQUEsRUFDQUMscUJBQW9CO0VBR3RCLE9BQU87SUFDTEgsUUFBQTtJQUNBaUMsV0FBQSxFQUFhckQsTUFBQSxDQUFPa0QsZ0JBQUE7O0FBRXhCO0FBTU0sU0FBVUkscUJBQ2RsRCxjQUFBLEVBQXFCO0VBRXJCLE1BQU1tRCxVQUFBLEdBQWF2RCxNQUFBLENBQU9RLFFBQUEsQ0FBU2dELG9CQUFBLENBQXFCLFFBQVE7RUFDaEUsV0FBV0MsR0FBQSxJQUFPbEIsTUFBQSxDQUFPQyxNQUFBLENBQU9lLFVBQVUsR0FBRztJQUMzQyxJQUNFRSxHQUFBLENBQUk5QyxHQUFBLElBQ0o4QyxHQUFBLENBQUk5QyxHQUFBLENBQUkrQyxRQUFBLENBQVN0RixRQUFRLEtBQ3pCcUYsR0FBQSxDQUFJOUMsR0FBQSxDQUFJK0MsUUFBQSxDQUFTdEQsY0FBYSxHQUM5QjtNQUNBLE9BQU9xRCxHQUFBO0lBQ1I7RUFDRjtFQUNELE9BQU87QUFDVDtBQzVXTyxJQUFNRSxpQkFBQSxHQUFvQjtBQUtqQyxJQUFNQyxvQkFBQSxHQUF1QjtBQUs3QixJQUFNQyxTQUFBLEdBQU4sTUFBZTtFQUNiQyxZQUNTQyxnQkFBQSxHQUEwRCxJQUMxREMsY0FBQSxHQUF5Qkosb0JBQUEsRUFBb0I7SUFEN0MsS0FBZ0JHLGdCQUFBLEdBQWhCQSxnQkFBQTtJQUNBLEtBQWNDLGNBQUEsR0FBZEEsY0FBQTs7RUFHVEMsb0JBQW9CbkMsS0FBQSxFQUFhO0lBQy9CLE9BQU8sS0FBS2lDLGdCQUFBLENBQWlCakMsS0FBQTs7RUFHL0JvQyxvQkFBb0JwQyxLQUFBLEVBQWVxQyxRQUFBLEVBQTBCO0lBQzNELEtBQUtKLGdCQUFBLENBQWlCakMsS0FBQSxJQUFTcUMsUUFBQTs7RUFHakNDLHVCQUF1QnRDLEtBQUEsRUFBYTtJQUNsQyxPQUFPLEtBQUtpQyxnQkFBQSxDQUFpQmpDLEtBQUE7O0FBRWhDO0FBRUQsSUFBTXVDLGdCQUFBLEdBQW1CLElBQUlSLFNBQUEsQ0FBUztBQU10QyxTQUFTUyxXQUFXQyxNQUFBLEVBQWM7RUFDaEMsT0FBTyxJQUFJQyxPQUFBLENBQVE7SUFDakJDLE1BQUEsRUFBUTtJQUNSLGtCQUFrQkY7RUFDbkI7QUFDSDtBQU1PLGVBQWVHLG1CQUNwQkMsU0FBQSxFQUFvQjs7RUFFcEIsTUFBTTtJQUFFN0MsS0FBQTtJQUFPeUM7RUFBTSxJQUFLSSxTQUFBO0VBQzFCLE1BQU1DLE9BQUEsR0FBdUI7SUFDM0JDLE1BQUEsRUFBUTtJQUNSQyxPQUFBLEVBQVNSLFVBQUEsQ0FBV0MsTUFBTTs7RUFFNUIsTUFBTVEsTUFBQSxHQUFTNUcsa0JBQUEsQ0FBbUI2RyxPQUFBLENBQVEsWUFBWWxELEtBQUs7RUFDM0QsTUFBTW1ELFFBQUEsR0FBVyxNQUFNQyxLQUFBLENBQU1ILE1BQUEsRUFBUUgsT0FBTztFQUM1QyxJQUFJSyxRQUFBLENBQVNFLE1BQUEsS0FBVyxPQUFPRixRQUFBLENBQVNFLE1BQUEsS0FBVyxLQUFLO0lBQ3RELElBQUlDLFlBQUEsR0FBZTtJQUNuQixJQUFJO01BRUYsTUFBTUMsWUFBQSxHQUFnQixNQUFNSixRQUFBLENBQVNLLElBQUEsQ0FBSTtNQUd6QyxLQUFJQyxFQUFBLEdBQUFGLFlBQUEsQ0FBYXRELEtBQUEsTUFBSyxRQUFBd0QsRUFBQSx1QkFBQUEsRUFBQSxDQUFFcEcsT0FBQSxFQUFTO1FBQy9CaUcsWUFBQSxHQUFlQyxZQUFBLENBQWF0RCxLQUFBLENBQU01QyxPQUFBO01BQ25DO0lBQ0YsU0FBUXFHLFFBQUEsRUFBUCxDQUFpQjtJQUNuQixNQUFNL0csYUFBQSxDQUFjTyxNQUFBLENBQTJDO01BQzdEeUcsVUFBQSxFQUFZUixRQUFBLENBQVNFLE1BQUE7TUFDckJPLGVBQUEsRUFBaUJOO0lBQ2xCO0VBQ0Y7RUFDRCxPQUFPSCxRQUFBLENBQVNLLElBQUEsQ0FBSTtBQUN0QjtBQU1PLGVBQWVLLDRCQUNwQkMsR0FBQSxFQUVBQyxTQUFBLEdBQXVCeEIsZ0JBQUEsRUFDdkJ5QixhQUFBLEVBQXNCO0VBRXRCLE1BQU07SUFBRWhFLEtBQUE7SUFBT3lDLE1BQUE7SUFBUWxFO0VBQWEsSUFBS3VGLEdBQUEsQ0FBSUcsT0FBQTtFQUU3QyxJQUFJLENBQUNqRSxLQUFBLEVBQU87SUFDVixNQUFNckQsYUFBQSxDQUFjTyxNQUFBLENBQU07RUFDM0I7RUFFRCxJQUFJLENBQUN1RixNQUFBLEVBQVE7SUFDWCxJQUFJbEUsYUFBQSxFQUFlO01BQ2pCLE9BQU87UUFDTEEsYUFBQTtRQUNBeUI7O0lBRUg7SUFDRCxNQUFNckQsYUFBQSxDQUFjTyxNQUFBLENBQU07RUFDM0I7RUFFRCxNQUFNK0UsZ0JBQUEsR0FBcUM4QixTQUFBLENBQVU1QixtQkFBQSxDQUNuRG5DLEtBQUssS0FDRjtJQUNIa0UsWUFBQSxFQUFjO0lBQ2RDLHFCQUFBLEVBQXVCQyxJQUFBLENBQUtDLEdBQUEsQ0FBRzs7RUFHakMsTUFBTUMsTUFBQSxHQUFTLElBQUlDLG9CQUFBLENBQW9CO0VBRXZDQyxVQUFBLENBQ0UsWUFBVztJQUVURixNQUFBLENBQU9HLEtBQUEsQ0FBSztFQUNkLEdBQ0FULGFBQUEsS0FBa0IsU0FBWUEsYUFBQSxHQUFnQjVILG9CQUFvQjtFQUdwRSxPQUFPc0ksa0NBQUEsQ0FDTDtJQUFFMUUsS0FBQTtJQUFPeUMsTUFBQTtJQUFRbEU7RUFBYSxHQUM5QjBELGdCQUFBLEVBQ0FxQyxNQUFBLEVBQ0FQLFNBQVM7QUFFYjtBQVFBLGVBQWVXLG1DQUNiN0IsU0FBQSxFQUNBO0VBQUVzQixxQkFBQTtFQUF1QkQ7QUFBWSxHQUNyQ0ksTUFBQSxFQUNBUCxTQUFBLEdBQXVCeEIsZ0JBQUE7O0VBRXZCLE1BQU07SUFBRXZDLEtBQUE7SUFBT3pCO0VBQWEsSUFBS3NFLFNBQUE7RUFJakMsSUFBSTtJQUNGLE1BQU04QixtQkFBQSxDQUFvQkwsTUFBQSxFQUFRSCxxQkFBcUI7RUFDeEQsU0FBUXRHLENBQUEsRUFBUDtJQUNBLElBQUlVLGFBQUEsRUFBZTtNQUNqQmhDLE1BQUEsQ0FBT2EsSUFBQSxDQUNMLDZHQUN5Q21CLGFBQUEseUVBRXBDVixDQUFBLEtBQVcsUUFBWEEsQ0FBQSxLQUFDLGtCQUFEQSxDQUFBLENBQWFSLE9BQUEsR0FDYjtNQUVQLE9BQU87UUFBRTJDLEtBQUE7UUFBT3pCO01BQWE7SUFDOUI7SUFDRCxNQUFNVixDQUFBO0VBQ1A7RUFFRCxJQUFJO0lBQ0YsTUFBTXNGLFFBQUEsR0FBVyxNQUFNUCxrQkFBQSxDQUFtQkMsU0FBUztJQUduRGtCLFNBQUEsQ0FBVXpCLHNCQUFBLENBQXVCdEMsS0FBSztJQUV0QyxPQUFPbUQsUUFBQTtFQUNSLFNBQVF0RixDQUFBLEVBQVA7SUFDQSxNQUFNb0MsS0FBQSxHQUFRcEMsQ0FBQTtJQUNkLElBQUksQ0FBQytHLGdCQUFBLENBQWlCM0UsS0FBSyxHQUFHO01BQzVCOEQsU0FBQSxDQUFVekIsc0JBQUEsQ0FBdUJ0QyxLQUFLO01BQ3RDLElBQUl6QixhQUFBLEVBQWU7UUFDakJoQyxNQUFBLENBQU9hLElBQUEsQ0FDTCwwR0FDeUNtQixhQUFBLHlFQUNrQzBCLEtBQUEsS0FBSyxRQUFMQSxLQUFBLEtBQUssa0JBQUxBLEtBQUEsQ0FBTzVDLE9BQUEsR0FBVTtRQUU5RixPQUFPO1VBQUUyQyxLQUFBO1VBQU96QjtRQUFhO01BQzlCLE9BQU07UUFDTCxNQUFNVixDQUFBO01BQ1A7SUFDRjtJQUVELE1BQU1nSCxhQUFBLEdBQ0pDLE1BQUEsRUFBT3JCLEVBQUEsR0FBQXhELEtBQUEsYUFBQUEsS0FBQSx1QkFBQUEsS0FBQSxDQUFPOEUsVUFBQSxNQUFVLFFBQUF0QixFQUFBLHVCQUFBQSxFQUFBLENBQUVFLFVBQVUsTUFBTSxVQUN0Qy9HLFdBQUEsQ0FBQW9JLHNCQUFBLEVBQ0VkLFlBQUEsRUFDQUgsU0FBQSxDQUFVN0IsY0FBQSxFQUNWTCxpQkFBaUIsUUFFbkJqRixXQUFBLENBQUFvSSxzQkFBQSxFQUF1QmQsWUFBQSxFQUFjSCxTQUFBLENBQVU3QixjQUFjO0lBR25FLE1BQU1ELGdCQUFBLEdBQW1CO01BQ3ZCa0MscUJBQUEsRUFBdUJDLElBQUEsQ0FBS0MsR0FBQSxDQUFHLElBQUtRLGFBQUE7TUFDcENYLFlBQUEsRUFBY0EsWUFBQSxHQUFlOztJQUkvQkgsU0FBQSxDQUFVM0IsbUJBQUEsQ0FBb0JwQyxLQUFBLEVBQU9pQyxnQkFBZ0I7SUFDckQxRixNQUFBLENBQU8wSSxLQUFBLENBQU0saUNBQWlDSixhQUFBLFNBQXNCO0lBRXBFLE9BQU9ILGtDQUFBLENBQ0w3QixTQUFBLEVBQ0FaLGdCQUFBLEVBQ0FxQyxNQUFBLEVBQ0FQLFNBQVM7RUFFWjtBQUNIO0FBY0EsU0FBU1ksb0JBQ1BMLE1BQUEsRUFDQUgscUJBQUEsRUFBNkI7RUFFN0IsT0FBTyxJQUFJM0csT0FBQSxDQUFRLENBQUMwSCxPQUFBLEVBQVNDLE1BQUEsS0FBVTtJQUVyQyxNQUFNTixhQUFBLEdBQWdCTyxJQUFBLENBQUtDLEdBQUEsQ0FBSWxCLHFCQUFBLEdBQXdCQyxJQUFBLENBQUtDLEdBQUEsQ0FBRyxHQUFJLENBQUM7SUFFcEUsTUFBTWlCLE9BQUEsR0FBVWQsVUFBQSxDQUFXVSxPQUFBLEVBQVNMLGFBQWE7SUFHakRQLE1BQUEsQ0FBT2lCLGdCQUFBLENBQWlCLE1BQUs7TUFDM0JDLFlBQUEsQ0FBYUYsT0FBTztNQUVwQkgsTUFBQSxDQUNFeEksYUFBQSxDQUFjTyxNQUFBLENBQXNDO1FBQ2xEaUg7TUFDRCxFQUFDO0lBRU4sQ0FBQztFQUNILENBQUM7QUFDSDtBQU9BLFNBQVNTLGlCQUFpQi9HLENBQUEsRUFBUTtFQUNoQyxJQUFJLEVBQUVBLENBQUEsWUFBYWpCLFdBQUEsQ0FBQTZJLGFBQUEsS0FBa0IsQ0FBQzVILENBQUEsQ0FBRWtILFVBQUEsRUFBWTtJQUNsRCxPQUFPO0VBQ1I7RUFHRCxNQUFNcEIsVUFBQSxHQUFhbUIsTUFBQSxDQUFPakgsQ0FBQSxDQUFFa0gsVUFBQSxDQUFXLGFBQWE7RUFFcEQsT0FDRXBCLFVBQUEsS0FBZSxPQUNmQSxVQUFBLEtBQWUsT0FDZkEsVUFBQSxLQUFlLE9BQ2ZBLFVBQUEsS0FBZTtBQUVuQjtJQVVhWSxvQkFBQSxTQUFvQjtFQUFqQ3ZDLFlBQUE7SUFDRSxLQUFTMEQsU0FBQSxHQUFzQjs7RUFDL0JILGlCQUFpQkksUUFBQSxFQUFvQjtJQUNuQyxLQUFLRCxTQUFBLENBQVVuRixJQUFBLENBQUtvRixRQUFROztFQUU5QmxCLE1BQUEsRUFBSztJQUNILEtBQUtpQixTQUFBLENBQVVFLE9BQUEsQ0FBUUQsUUFBQSxJQUFZQSxRQUFBLENBQVEsQ0FBRTs7QUFFaEQ7QUNuU00sSUFBSUUsNkJBQUE7QUFTSixlQUFlQyxXQUNwQkMsWUFBQSxFQUNBekYscUJBQUEsRUFDQTBGLFNBQUEsRUFDQUMsV0FBQSxFQUNBaEMsT0FBQSxFQUE4QjtFQUU5QixJQUFJQSxPQUFBLElBQVdBLE9BQUEsQ0FBUWlDLE1BQUEsRUFBUTtJQUM3QkgsWUFBQSxDQUFnQyxTQUFBQyxTQUFBLEVBQVdDLFdBQVc7SUFDdEQ7RUFDRCxPQUFNO0lBQ0wsTUFBTTFILGFBQUEsR0FBZ0IsTUFBTStCLHFCQUFBO0lBQzVCLE1BQU02RixNQUFBLEdBQU0xRixNQUFBLENBQUEyRixNQUFBLENBQUEzRixNQUFBLENBQUEyRixNQUFBLEtBQ1BILFdBQVc7TUFDZCxXQUFXMUg7SUFBYTtJQUUxQndILFlBQUEsQ0FBZ0MsU0FBQUMsU0FBQSxFQUFXRyxNQUFNO0VBQ2xEO0FBQ0g7QUFXTyxlQUFlRSxtQkFDcEJOLFlBQUEsRUFDQXpGLHFCQUFBLEVBQ0FnRyxVQUFBLEVBQ0FyQyxPQUFBLEVBQThCO0VBRTlCLElBQUlBLE9BQUEsSUFBV0EsT0FBQSxDQUFRaUMsTUFBQSxFQUFRO0lBQzdCSCxZQUFBLENBQVksT0FBa0I7TUFBRSxlQUFlTztJQUFVLENBQUU7SUFDM0QsT0FBTzlJLE9BQUEsQ0FBUTBILE9BQUEsQ0FBTztFQUN2QixPQUFNO0lBQ0wsTUFBTTNHLGFBQUEsR0FBZ0IsTUFBTStCLHFCQUFBO0lBQzVCeUYsWUFBQSxDQUFZLFVBQXFCeEgsYUFBQSxFQUFlO01BQzlDZ0ksTUFBQSxFQUFRO01BQ1IsZUFBZUQ7SUFDaEI7RUFDRjtBQUNIO0FBUU8sZUFBZUUsWUFDcEJULFlBQUEsRUFDQXpGLHFCQUFBLEVBQ0FtRyxFQUFBLEVBQ0F4QyxPQUFBLEVBQThCO0VBRTlCLElBQUlBLE9BQUEsSUFBV0EsT0FBQSxDQUFRaUMsTUFBQSxFQUFRO0lBQzdCSCxZQUFBLENBQVksT0FBa0I7TUFBRSxXQUFXVTtJQUFFLENBQUU7SUFDL0MsT0FBT2pKLE9BQUEsQ0FBUTBILE9BQUEsQ0FBTztFQUN2QixPQUFNO0lBQ0wsTUFBTTNHLGFBQUEsR0FBZ0IsTUFBTStCLHFCQUFBO0lBQzVCeUYsWUFBQSxDQUFZLFVBQXFCeEgsYUFBQSxFQUFlO01BQzlDZ0ksTUFBQSxFQUFRO01BQ1IsV0FBV0U7SUFDWjtFQUNGO0FBQ0g7QUFRTyxlQUFlQyxvQkFDcEJYLFlBQUEsRUFDQXpGLHFCQUFBLEVBQ0FxRyxVQUFBLEVBQ0ExQyxPQUFBLEVBQThCO0VBRTlCLElBQUlBLE9BQUEsSUFBV0EsT0FBQSxDQUFRaUMsTUFBQSxFQUFRO0lBQzdCLE1BQU1VLGNBQUEsR0FBNkM7SUFDbkQsV0FBV0MsR0FBQSxJQUFPcEcsTUFBQSxDQUFPcUcsSUFBQSxDQUFLSCxVQUFVLEdBQUc7TUFFekNDLGNBQUEsQ0FBZSxtQkFBbUJDLEdBQUEsTUFBU0YsVUFBQSxDQUFXRSxHQUFBO0lBQ3ZEO0lBQ0RkLFlBQUEsQ0FBWSxPQUFrQmEsY0FBYztJQUM1QyxPQUFPcEosT0FBQSxDQUFRMEgsT0FBQSxDQUFPO0VBQ3ZCLE9BQU07SUFDTCxNQUFNM0csYUFBQSxHQUFnQixNQUFNK0IscUJBQUE7SUFDNUJ5RixZQUFBLENBQVksVUFBcUJ4SCxhQUFBLEVBQWU7TUFDOUNnSSxNQUFBLEVBQVE7TUFDUixtQkFBbUJJO0lBQ3BCO0VBQ0Y7QUFDSDtBQVFPLGVBQWVJLG1DQUNwQmhCLFlBQUEsRUFDQXpGLHFCQUFBLEVBQXNDO0VBRXRDLE1BQU0vQixhQUFBLEdBQWdCLE1BQU0rQixxQkFBQTtFQUM1QixPQUFPLElBQUk5QyxPQUFBLENBQVEsQ0FBQzBILE9BQUEsRUFBU0MsTUFBQSxLQUFVO0lBQ3JDWSxZQUFBLENBQVksT0FFVnhILGFBQUEsRUFDQSxhQUNDeUksUUFBQSxJQUFvQjtNQUNuQixJQUFJLENBQUNBLFFBQUEsRUFBVTtRQUNiN0IsTUFBQSxDQUFPeEksYUFBQSxDQUFjTyxNQUFBLENBQU0sZUFBNkI7TUFDekQ7TUFDRGdJLE9BQUEsQ0FBUThCLFFBQVE7SUFDbEIsQ0FBQztFQUVMLENBQUM7QUFDSDtBQU9PLGVBQWVDLGdDQUNwQjNHLHFCQUFBLEVBQ0E0RyxPQUFBLEVBQWdCO0VBRWhCLE1BQU0zSSxhQUFBLEdBQWdCLE1BQU0rQixxQkFBQTtFQUM1QnBDLE1BQUEsQ0FBTyxjQUFjSyxhQUFBLE1BQW1CLENBQUMySSxPQUFBO0FBQzNDO0FBS08sSUFBSUMsNkJBQUE7QUFRTCxTQUFVQywwQkFDZEMsZUFBQSxFQUFpQztFQUVqQ0YsNkJBQUEsR0FBZ0NFLGVBQUE7QUFDbEM7QUFRTSxTQUFVQyxrQ0FDZHBHLFlBQUEsRUFBMkI7RUFFM0IyRSw2QkFBQSxHQUFnQzNFLFlBQUE7QUFDbEM7QUN6S0EsZUFBZXFHLGtCQUFBLEVBQWlCO0VBQzlCLElBQUksS0FBQzNLLFdBQUEsQ0FBQTRLLG9CQUFBLEVBQW9CLEdBQUk7SUFDM0JqTCxNQUFBLENBQU9hLElBQUEsQ0FDTFQsYUFBQSxDQUFjTyxNQUFBLENBQTZDO01BQ3pEdUssU0FBQSxFQUFXO0tBQ1osRUFBRXBLLE9BQU87SUFFWixPQUFPO0VBQ1IsT0FBTTtJQUNMLElBQUk7TUFDRixVQUFNVCxXQUFBLENBQUE4Syx5QkFBQSxFQUF5QjtJQUNoQyxTQUFRN0osQ0FBQSxFQUFQO01BQ0F0QixNQUFBLENBQU9hLElBQUEsQ0FDTFQsYUFBQSxDQUFjTyxNQUFBLENBQTZDO1FBQ3pEdUssU0FBQSxFQUFZNUosQ0FBQSxhQUFBQSxDQUFBLEtBQUMsa0JBQURBLENBQUEsQ0FBYThKLFFBQUEsQ0FBUTtPQUNsQyxFQUFFdEssT0FBTztNQUVaLE9BQU87SUFDUjtFQUNGO0VBQ0QsT0FBTztBQUNUO0FBZU8sZUFBZXVLLHFCQUNwQjlELEdBQUEsRUFDQXRFLDBCQUFBLEVBR0FDLHFCQUFBLEVBQ0FvSSxhQUFBLEVBQ0F2SSxRQUFBLEVBQ0FoQixjQUFBLEVBQ0EyRixPQUFBLEVBQTJCOztFQUUzQixNQUFNNkQsb0JBQUEsR0FBdUJqRSwyQkFBQSxDQUE0QkMsR0FBRztFQUU1RGdFLG9CQUFBLENBQ0dDLElBQUEsQ0FBS2hJLE1BQUEsSUFBUztJQUNiTixxQkFBQSxDQUFxQk0sTUFBQSxDQUFPeEIsYUFBQSxJQUFpQndCLE1BQUEsQ0FBT0MsS0FBQTtJQUNwRCxJQUNFOEQsR0FBQSxDQUFJRyxPQUFBLENBQVExRixhQUFBLElBQ1p3QixNQUFBLENBQU94QixhQUFBLEtBQWtCdUYsR0FBQSxDQUFJRyxPQUFBLENBQVExRixhQUFBLEVBQ3JDO01BQ0FoQyxNQUFBLENBQU9hLElBQUEsQ0FDTCxvREFBb0QwRyxHQUFBLENBQUlHLE9BQUEsQ0FBUTFGLGFBQUEsZ0VBQ0N3QixNQUFBLENBQU94QixhQUFBLDBLQUdTO0lBRXBGO0VBQ0gsQ0FBQyxFQUNBWCxLQUFBLENBQU1DLENBQUEsSUFBS3RCLE1BQUEsQ0FBTzBELEtBQUEsQ0FBTXBDLENBQUMsQ0FBQztFQUU3QjJCLDBCQUFBLENBQTBCZSxJQUFBLENBQUt1SCxvQkFBb0I7RUFFbkQsTUFBTUUsVUFBQSxHQUEwQ1QsaUJBQUEsQ0FBaUIsRUFBR1EsSUFBQSxDQUNsRUUsVUFBQSxJQUFhO0lBQ1gsSUFBSUEsVUFBQSxFQUFZO01BQ2QsT0FBT0osYUFBQSxDQUFjSyxLQUFBLENBQUs7SUFDM0IsT0FBTTtNQUNMLE9BQU87SUFDUjtFQUNILENBQUM7RUFHSCxNQUFNLENBQUNDLGFBQUEsRUFBZUMsR0FBRyxJQUFJLE1BQU01SyxPQUFBLENBQVFDLEdBQUEsQ0FBSSxDQUM3Q3FLLG9CQUFBLEVBQ0FFLFVBQUEsQ0FDRDtFQUlELElBQUksQ0FBQ3hHLG9CQUFBLENBQXFCbEQsY0FBYSxHQUFHO0lBQ3hDRCxlQUFBLENBQWdCQyxjQUFBLEVBQWU2SixhQUFBLENBQWM1SixhQUFhO0VBQzNEO0VBR0QsSUFBSTRJLDZCQUFBLEVBQStCO0lBQ2pDN0gsUUFBQSxDQUE4QixzQkFBVzZILDZCQUE2QjtJQUN0RUMseUJBQUEsQ0FBMEIsTUFBUztFQUNwQztFQU1BOUgsUUFBQSxDQUFpQixNQUFNLElBQUk4RSxJQUFBLENBQUksQ0FBRTtFQUdsQyxNQUFNaUUsZ0JBQUEsSUFBNEM1RSxFQUFBLEdBQUFRLE9BQUEsYUFBQUEsT0FBQSx1QkFBQUEsT0FBQSxDQUFTbEUsTUFBQSxNQUFVLFFBQUEwRCxFQUFBLGNBQUFBLEVBQUE7RUFHckU0RSxnQkFBQSxDQUFpQmxNLFVBQUEsSUFBYztFQUMvQmtNLGdCQUFBLENBQWlCOUIsTUFBQSxHQUFTO0VBRTFCLElBQUk2QixHQUFBLElBQU8sTUFBTTtJQUNmQyxnQkFBQSxDQUFpQm5NLFVBQUEsSUFBY2tNLEdBQUE7RUFDaEM7RUFNRDlJLFFBQUEsQ0FBUSxVQUFxQjZJLGFBQUEsQ0FBYzVKLGFBQUEsRUFBZThKLGdCQUFnQjtFQUcxRSxJQUFJeEMsNkJBQUEsRUFBK0I7SUFDakN2RyxRQUFBLENBQVEsT0FBa0J1Ryw2QkFBNkI7SUFDdkR5QixpQ0FBQSxDQUFrQyxNQUFTO0VBQzVDO0VBRUQsT0FBT2EsYUFBQSxDQUFjNUosYUFBQTtBQUN2QjtJQ3JJYStKLGdCQUFBLFNBQWdCO0VBQzNCdEcsWUFBbUI4QixHQUFBLEVBQWdCO0lBQWhCLEtBQUdBLEdBQUEsR0FBSEEsR0FBQTs7RUFDbkJ5RSxRQUFBLEVBQU87SUFDTCxPQUFPQyx5QkFBQSxDQUEwQixLQUFLMUUsR0FBQSxDQUFJRyxPQUFBLENBQVFqRSxLQUFBO0lBQ2xELE9BQU94QyxPQUFBLENBQVEwSCxPQUFBLENBQU87O0FBRXpCO0FBT00sSUFBSXNELHlCQUFBLEdBRVA7QUFPSixJQUFJQyx5QkFBQSxHQUVBO0FBUUosSUFBTUMsb0JBQUEsR0FBNEQ7QUFLbEUsSUFBSUMsYUFBQSxHQUF3QjtBQUs1QixJQUFJQyxRQUFBLEdBQW1CO0FBTXZCLElBQUlDLGdCQUFBO0FBTUcsSUFBSUMsbUJBQUE7QUFNWCxJQUFJQyxjQUFBLEdBQTBCO0FBOEN4QixTQUFVbE4sU0FBU29JLE9BQUEsRUFBd0I7RUFDL0MsSUFBSThFLGNBQUEsRUFBZ0I7SUFDbEIsTUFBTXBNLGFBQUEsQ0FBY08sTUFBQSxDQUFNO0VBQzNCO0VBQ0QsSUFBSStHLE9BQUEsQ0FBUTBFLGFBQUEsRUFBZTtJQUN6QkEsYUFBQSxHQUFnQjFFLE9BQUEsQ0FBUTBFLGFBQUE7RUFDekI7RUFDRCxJQUFJMUUsT0FBQSxDQUFRMkUsUUFBQSxFQUFVO0lBQ3BCQSxRQUFBLEdBQVczRSxPQUFBLENBQVEyRSxRQUFBO0VBQ3BCO0FBQ0g7QUFPQSxTQUFTSSw2QkFBQSxFQUE0QjtFQUNuQyxNQUFNQyxxQkFBQSxHQUF3QjtFQUM5QixRQUFJck0sV0FBQSxDQUFBc00sa0JBQUEsRUFBa0IsR0FBSTtJQUN4QkQscUJBQUEsQ0FBc0IxSSxJQUFBLENBQUssMENBQTBDO0VBQ3RFO0VBQ0QsSUFBSSxLQUFDM0QsV0FBQSxDQUFBdU0saUJBQUEsRUFBaUIsR0FBSTtJQUN4QkYscUJBQUEsQ0FBc0IxSSxJQUFBLENBQUssNEJBQTRCO0VBQ3hEO0VBQ0QsSUFBSTBJLHFCQUFBLENBQXNCekksTUFBQSxHQUFTLEdBQUc7SUFDcEMsTUFBTTRJLE9BQUEsR0FBVUgscUJBQUEsQ0FDYnZMLEdBQUEsQ0FBSSxDQUFDTCxPQUFBLEVBQVNnTSxLQUFBLEtBQVUsSUFBSUEsS0FBQSxHQUFRLE1BQU1oTSxPQUFBLEVBQVMsRUFDbkRpTSxJQUFBLENBQUssR0FBRztJQUNYLE1BQU1yTSxHQUFBLEdBQU1OLGFBQUEsQ0FBY08sTUFBQSxDQUFpRDtNQUN6RXVLLFNBQUEsRUFBVzJCO0lBQ1o7SUFDRDdNLE1BQUEsQ0FBT2EsSUFBQSxDQUFLSCxHQUFBLENBQUlJLE9BQU87RUFDeEI7QUFDSDtTQU1nQmtNLFFBQ2R6RixHQUFBLEVBQ0ErRCxhQUFBLEVBQ0E1RCxPQUFBLEVBQTJCO0VBRTNCK0UsNEJBQUEsQ0FBNEI7RUFDNUIsTUFBTWhKLEtBQUEsR0FBUThELEdBQUEsQ0FBSUcsT0FBQSxDQUFRakUsS0FBQTtFQUMxQixJQUFJLENBQUNBLEtBQUEsRUFBTztJQUNWLE1BQU1yRCxhQUFBLENBQWNPLE1BQUEsQ0FBTTtFQUMzQjtFQUNELElBQUksQ0FBQzRHLEdBQUEsQ0FBSUcsT0FBQSxDQUFReEIsTUFBQSxFQUFRO0lBQ3ZCLElBQUlxQixHQUFBLENBQUlHLE9BQUEsQ0FBUTFGLGFBQUEsRUFBZTtNQUM3QmhDLE1BQUEsQ0FBT2EsSUFBQSxDQUNMLHlLQUMrRTBHLEdBQUEsQ0FBSUcsT0FBQSxDQUFRMUYsYUFBQSxzRUFDbkI7SUFFM0UsT0FBTTtNQUNMLE1BQU01QixhQUFBLENBQWNPLE1BQUEsQ0FBTTtJQUMzQjtFQUNGO0VBQ0QsSUFBSXNMLHlCQUFBLENBQTBCeEksS0FBQSxLQUFVLE1BQU07SUFDNUMsTUFBTXJELGFBQUEsQ0FBY08sTUFBQSxDQUFzQztNQUN4RHVKLEVBQUEsRUFBSXpHO0lBQ0w7RUFDRjtFQUVELElBQUksQ0FBQytJLGNBQUEsRUFBZ0I7SUFJbkI5SixvQkFBQSxDQUFxQjBKLGFBQWE7SUFFbEMsTUFBTTtNQUFFcEgsV0FBQTtNQUFhakM7SUFBUSxJQUFLNkIsZ0JBQUEsQ0FDaENxSCx5QkFBQSxFQUNBQyx5QkFBQSxFQUNBQyxvQkFBQSxFQUNBQyxhQUFBLEVBQ0FDLFFBQVE7SUFFVkUsbUJBQUEsR0FBc0J2SCxXQUFBO0lBQ3RCc0gsZ0JBQUEsR0FBbUJ2SixRQUFBO0lBRW5CeUosY0FBQSxHQUFpQjtFQUNsQjtFQUdEUCx5QkFBQSxDQUEwQnhJLEtBQUEsSUFBUzRILG9CQUFBLENBQ2pDOUQsR0FBQSxFQUNBMkUseUJBQUEsRUFDQUMsb0JBQUEsRUFDQWIsYUFBQSxFQUNBZ0IsZ0JBQUEsRUFDQUYsYUFBQSxFQUNBMUUsT0FBTztFQUdULE1BQU11RixpQkFBQSxHQUFzQyxJQUFJbEIsZ0JBQUEsQ0FBaUJ4RSxHQUFHO0VBRXBFLE9BQU8wRixpQkFBQTtBQUNUO0FDcEtnQixTQUFBdE8sYUFBYTRJLEdBQUEsT0FBbUIyRixVQUFBLENBQUFDLE1BQUEsRUFBTSxHQUFFO0VBQ3RENUYsR0FBQSxPQUFNbEgsV0FBQSxDQUFBK00sa0JBQUEsRUFBbUI3RixHQUFHO0VBRTVCLE1BQU04RixpQkFBQSxPQUEyQ0gsVUFBQSxDQUFBSSxZQUFBLEVBQy9DL0YsR0FBQSxFQUNBN0gsY0FBYztFQUdoQixJQUFJMk4saUJBQUEsQ0FBa0JFLGFBQUEsQ0FBYSxHQUFJO0lBQ3JDLE9BQU9GLGlCQUFBLENBQWtCRyxZQUFBLENBQVk7RUFDdEM7RUFFRCxPQUFPM08sbUJBQUEsQ0FBb0IwSSxHQUFHO0FBQ2hDO1NBU2dCMUksb0JBQ2QwSSxHQUFBLEVBQ0FHLE9BQUEsR0FBNkIsSUFBRTtFQUcvQixNQUFNMkYsaUJBQUEsT0FBMkNILFVBQUEsQ0FBQUksWUFBQSxFQUMvQy9GLEdBQUEsRUFDQTdILGNBQWM7RUFFaEIsSUFBSTJOLGlCQUFBLENBQWtCRSxhQUFBLENBQWEsR0FBSTtJQUNyQyxNQUFNRSxnQkFBQSxHQUFtQkosaUJBQUEsQ0FBa0JHLFlBQUEsQ0FBWTtJQUN2RCxRQUFJbk4sV0FBQSxDQUFBcU4sU0FBQSxFQUFVaEcsT0FBQSxFQUFTMkYsaUJBQUEsQ0FBa0JNLFVBQUEsQ0FBVSxDQUFFLEdBQUc7TUFDdEQsT0FBT0YsZ0JBQUE7SUFDUixPQUFNO01BQ0wsTUFBTXJOLGFBQUEsQ0FBY08sTUFBQSxDQUFNO0lBQzNCO0VBQ0Y7RUFDRCxNQUFNc00saUJBQUEsR0FBb0JJLGlCQUFBLENBQWtCTyxVQUFBLENBQVc7SUFBRWxHO0VBQU8sQ0FBRTtFQUNsRSxPQUFPdUYsaUJBQUE7QUFDVDtBQWFPLGVBQWVuTyxZQUFBLEVBQVc7RUFDL0IsUUFBSXVCLFdBQUEsQ0FBQXNNLGtCQUFBLEVBQWtCLEdBQUk7SUFDeEIsT0FBTztFQUNSO0VBQ0QsSUFBSSxLQUFDdE0sV0FBQSxDQUFBdU0saUJBQUEsRUFBaUIsR0FBSTtJQUN4QixPQUFPO0VBQ1I7RUFDRCxJQUFJLEtBQUN2TSxXQUFBLENBQUE0SyxvQkFBQSxFQUFvQixHQUFJO0lBQzNCLE9BQU87RUFDUjtFQUVELElBQUk7SUFDRixNQUFNNEMsWUFBQSxHQUF3QixVQUFNeE4sV0FBQSxDQUFBOEsseUJBQUEsRUFBeUI7SUFDN0QsT0FBTzBDLFlBQUE7RUFDUixTQUFRbkssS0FBQSxFQUFQO0lBQ0EsT0FBTztFQUNSO0FBQ0g7U0FhZ0J4RSxpQkFDZCtOLGlCQUFBLEVBQ0FsRCxVQUFBLEVBQ0FyQyxPQUFBLEVBQThCO0VBRTlCdUYsaUJBQUEsT0FBb0I1TSxXQUFBLENBQUErTSxrQkFBQSxFQUFtQkgsaUJBQWlCO0VBQ3hEbkQsa0JBQUEsQ0FDRXlDLG1CQUFBLEVBQ0FOLHlCQUFBLENBQTBCZ0IsaUJBQUEsQ0FBa0IxRixHQUFBLENBQUlHLE9BQUEsQ0FBUWpFLEtBQUEsR0FDeERzRyxVQUFBLEVBQ0FyQyxPQUFPLEVBQ1ByRyxLQUFBLENBQU1DLENBQUEsSUFBS3RCLE1BQUEsQ0FBTzBELEtBQUEsQ0FBTXBDLENBQUMsQ0FBQztBQUM5QjtBQVVPLGVBQWUxQywyQkFDcEJxTyxpQkFBQSxFQUE0QjtFQUU1QkEsaUJBQUEsT0FBb0I1TSxXQUFBLENBQUErTSxrQkFBQSxFQUFtQkgsaUJBQWlCO0VBQ3hELE9BQU96QyxrQ0FBQSxDQUNMK0IsbUJBQUEsRUFDQU4seUJBQUEsQ0FBMEJnQixpQkFBQSxDQUFrQjFGLEdBQUEsQ0FBSUcsT0FBQSxDQUFRakUsS0FBQSxDQUFPO0FBRW5FO1NBVWdCckUsVUFDZDZOLGlCQUFBLEVBQ0EvQyxFQUFBLEVBQ0F4QyxPQUFBLEVBQThCO0VBRTlCdUYsaUJBQUEsT0FBb0I1TSxXQUFBLENBQUErTSxrQkFBQSxFQUFtQkgsaUJBQWlCO0VBQ3hEaEQsV0FBQSxDQUNFc0MsbUJBQUEsRUFDQU4seUJBQUEsQ0FBMEJnQixpQkFBQSxDQUFrQjFGLEdBQUEsQ0FBSUcsT0FBQSxDQUFRakUsS0FBQSxHQUN4RHlHLEVBQUEsRUFDQXhDLE9BQU8sRUFDUHJHLEtBQUEsQ0FBTUMsQ0FBQSxJQUFLdEIsTUFBQSxDQUFPMEQsS0FBQSxDQUFNcEMsQ0FBQyxDQUFDO0FBQzlCO1NBT2dCakMsa0JBQ2Q0TixpQkFBQSxFQUNBN0MsVUFBQSxFQUNBMUMsT0FBQSxFQUE4QjtFQUU5QnVGLGlCQUFBLE9BQW9CNU0sV0FBQSxDQUFBK00sa0JBQUEsRUFBbUJILGlCQUFpQjtFQUN4RDlDLG1CQUFBLENBQ0VvQyxtQkFBQSxFQUNBTix5QkFBQSxDQUEwQmdCLGlCQUFBLENBQWtCMUYsR0FBQSxDQUFJRyxPQUFBLENBQVFqRSxLQUFBLEdBQ3hEMkcsVUFBQSxFQUNBMUMsT0FBTyxFQUNQckcsS0FBQSxDQUFNQyxDQUFBLElBQUt0QixNQUFBLENBQU8wRCxLQUFBLENBQU1wQyxDQUFDLENBQUM7QUFDOUI7QUFXZ0IsU0FBQXRDLDhCQUNkaU8saUJBQUEsRUFDQXRDLE9BQUEsRUFBZ0I7RUFFaEJzQyxpQkFBQSxPQUFvQjVNLFdBQUEsQ0FBQStNLGtCQUFBLEVBQW1CSCxpQkFBaUI7RUFDeER2QywrQkFBQSxDQUNFdUIseUJBQUEsQ0FBMEJnQixpQkFBQSxDQUFrQjFGLEdBQUEsQ0FBSUcsT0FBQSxDQUFRakUsS0FBQSxHQUN4RGtILE9BQU8sRUFDUHRKLEtBQUEsQ0FBTUMsQ0FBQSxJQUFLdEIsTUFBQSxDQUFPMEQsS0FBQSxDQUFNcEMsQ0FBQyxDQUFDO0FBQzlCO0FBU00sU0FBVW5DLDBCQUEwQndGLFlBQUEsRUFBMEI7RUFFbEUsSUFBSTRILG1CQUFBLEVBQXFCO0lBQ3ZCQSxtQkFBQSxDQUFtQixPQUFrQjVILFlBQVk7RUFDbEQsT0FBTTtJQUNMb0csaUNBQUEsQ0FBa0NwRyxZQUFZO0VBQy9DO0FBQ0g7QUF3ZE0sU0FBVTVGLFNBQ2RrTyxpQkFBQSxFQUNBeEQsU0FBQSxFQUNBQyxXQUFBLEVBQ0FoQyxPQUFBLEVBQThCO0VBRTlCdUYsaUJBQUEsT0FBb0I1TSxXQUFBLENBQUErTSxrQkFBQSxFQUFtQkgsaUJBQWlCO0VBQ3hEMUQsVUFBQSxDQUNFZ0QsbUJBQUEsRUFDQU4seUJBQUEsQ0FBMEJnQixpQkFBQSxDQUFrQjFGLEdBQUEsQ0FBSUcsT0FBQSxDQUFRakUsS0FBQSxHQUN4RGdHLFNBQUEsRUFDQUMsV0FBQSxFQUNBaEMsT0FBTyxFQUNQckcsS0FBQSxDQUFNQyxDQUFBLElBQUt0QixNQUFBLENBQU8wRCxLQUFBLENBQU1wQyxDQUFDLENBQUM7QUFDOUI7QUFrQk0sU0FBVXJDLFdBQVc2TCxlQUFBLEVBQWdDO0VBRXpELElBQUl5QixtQkFBQSxFQUFxQjtJQUN2QkEsbUJBQUEsQ0FBeUMscUJBQVV6QixlQUFlO0VBQ25FLE9BQU07SUFDTEQseUJBQUEsQ0FBMEJDLGVBQWU7RUFDMUM7QUFDSDs7O0FDeHRCQSxTQUFTZ0Qsa0JBQUEsRUFBaUI7RUFDeEIsSUFBQVosVUFBQSxDQUFBYSxrQkFBQSxFQUNFLElBQUlDLGdCQUFBLENBQUFDLFNBQUEsQ0FDRnZPLGNBQUEsRUFDQSxDQUFDd08sU0FBQSxFQUFXO0lBQUV4RyxPQUFBLEVBQVN5RztFQUFnQixNQUE4QjtJQUVuRSxNQUFNNUcsR0FBQSxHQUFNMkcsU0FBQSxDQUFVRSxXQUFBLENBQVksS0FBSyxFQUFFWixZQUFBLENBQVk7SUFDckQsTUFBTWxDLGFBQUEsR0FBZ0I0QyxTQUFBLENBQ25CRSxXQUFBLENBQVksd0JBQXdCLEVBQ3BDWixZQUFBLENBQVk7SUFFZixPQUFPUixPQUFBLENBQVF6RixHQUFBLEVBQUsrRCxhQUFBLEVBQWU2QyxnQkFBZ0I7S0FDcEQsU0FFRjtFQUdILElBQUFqQixVQUFBLENBQUFhLGtCQUFBLEVBQ0UsSUFBSUMsZ0JBQUEsQ0FBQUMsU0FBQSxDQUFVLHNCQUFzQkksZUFBQSxFQUF1QztFQUc3RSxJQUFBbkIsVUFBQSxDQUFBb0IsZUFBQSxFQUFnQkMsSUFBQSxFQUFNQyxPQUFPO0VBRTdCLElBQUF0QixVQUFBLENBQUFvQixlQUFBLEVBQWdCQyxJQUFBLEVBQU1DLE9BQUEsRUFBUyxTQUFrQjtFQUVqRCxTQUFTSCxnQkFDUEgsU0FBQSxFQUE2QjtJQUU3QixJQUFJO01BQ0YsTUFBTU8sU0FBQSxHQUFZUCxTQUFBLENBQVVFLFdBQUEsQ0FBWTFPLGNBQWMsRUFBRThOLFlBQUEsQ0FBWTtNQUNwRSxPQUFPO1FBQ0x6TyxRQUFBLEVBQVVBLENBQ1IwSyxTQUFBLEVBQ0FDLFdBQUEsRUFDQWhDLE9BQUEsS0FDRzNJLFFBQUEsQ0FBUzBQLFNBQUEsRUFBV2hGLFNBQUEsRUFBV0MsV0FBQSxFQUFhaEMsT0FBTzs7SUFFM0QsU0FBUXBHLENBQUEsRUFBUDtNQUNBLE1BQU1sQixhQUFBLENBQWNPLE1BQUEsQ0FBb0Q7UUFDdEUrTixNQUFBLEVBQVFwTjtNQUNUO0lBQ0Y7O0FBRUw7QUFFQXdNLGlCQUFBLENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9