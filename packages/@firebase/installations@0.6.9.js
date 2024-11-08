System.register(["@firebase/util@1.10.0","@firebase/component@0.6.9","@firebase/logger@0.4.2","idb@7.1.1","@firebase/app@0.10.13"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.10.0"],["@firebase/component","0.6.9"],["@firebase/logger","0.4.2"],["idb","7.1.1"],["@firebase/app","0.10.13"],["@firebase/installations","0.6.9"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.10.0', dep), dep => dependencies.set('@firebase/component@0.6.9', dep), dep => dependencies.set('@firebase/logger@0.4.2', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.10.13', dep)],
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

// .beyond/uimport/temp/@firebase/installations.0.6.9.js
var installations_0_6_9_exports = {};
__export(installations_0_6_9_exports, {
  deleteInstallations: () => deleteInstallations,
  getId: () => getId,
  getInstallations: () => getInstallations,
  getToken: () => getToken,
  onIdChange: () => onIdChange
});
module.exports = __toCommonJS(installations_0_6_9_exports);

// node_modules/@firebase/installations/dist/esm/index.esm2017.js
var import_app = require("@firebase/app@0.10.13");
var import_component = require("@firebase/component@0.6.9");
var import_util = require("@firebase/util@1.10.0");
var import_idb = require("idb@7.1.1");
var name = "@firebase/installations";
var version = "0.6.9";
var PENDING_TIMEOUT_MS = 1e4;
var PACKAGE_VERSION = `w:${version}`;
var INTERNAL_AUTH_VERSION = "FIS_v2";
var INSTALLATIONS_API_URL = "https://firebaseinstallations.googleapis.com/v1";
var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1e3;
var SERVICE = "installations";
var SERVICE_NAME = "Installations";
var ERROR_DESCRIPTION_MAP = {
  ["missing-app-config-values"]: 'Missing App configuration value: "{$valueName}"',
  ["not-registered"]: "Firebase Installation is not registered.",
  ["installation-not-found"]: "Firebase Installation not found.",
  ["request-failed"]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
  ["app-offline"]: "Could not process request. Application offline.",
  ["delete-pending-registration"]: "Can't delete installation while there is a pending registration request."
};
var ERROR_FACTORY = new import_util.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
function isServerError(error) {
  return error instanceof import_util.FirebaseError && error.code.includes("request-failed");
}
function getInstallationsEndpoint({
  projectId
}) {
  return `${INSTALLATIONS_API_URL}/projects/${projectId}/installations`;
}
function extractAuthTokenInfoFromResponse(response) {
  return {
    token: response.token,
    requestStatus: 2,
    expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
    creationTime: Date.now()
  };
}
async function getErrorFromResponse(requestName, response) {
  const responseJson = await response.json();
  const errorData = responseJson.error;
  return ERROR_FACTORY.create("request-failed", {
    requestName,
    serverCode: errorData.code,
    serverMessage: errorData.message,
    serverStatus: errorData.status
  });
}
function getHeaders({
  apiKey
}) {
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": apiKey
  });
}
function getHeadersWithAuth(appConfig, {
  refreshToken
}) {
  const headers = getHeaders(appConfig);
  headers.append("Authorization", getAuthorizationHeader(refreshToken));
  return headers;
}
async function retryIfServerError(fn) {
  const result = await fn();
  if (result.status >= 500 && result.status < 600) {
    return fn();
  }
  return result;
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
  return Number(responseExpiresIn.replace("s", "000"));
}
function getAuthorizationHeader(refreshToken) {
  return `${INTERNAL_AUTH_VERSION} ${refreshToken}`;
}
async function createInstallationRequest({
  appConfig,
  heartbeatServiceProvider
}, {
  fid
}) {
  const endpoint = getInstallationsEndpoint(appConfig);
  const headers = getHeaders(appConfig);
  const heartbeatService = heartbeatServiceProvider.getImmediate({
    optional: true
  });
  if (heartbeatService) {
    const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
    if (heartbeatsHeader) {
      headers.append("x-firebase-client", heartbeatsHeader);
    }
  }
  const body = {
    fid,
    authVersion: INTERNAL_AUTH_VERSION,
    appId: appConfig.appId,
    sdkVersion: PACKAGE_VERSION
  };
  const request = {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  };
  const response = await retryIfServerError(() => fetch(endpoint, request));
  if (response.ok) {
    const responseValue = await response.json();
    const registeredInstallationEntry = {
      fid: responseValue.fid || fid,
      registrationStatus: 2,
      refreshToken: responseValue.refreshToken,
      authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
    };
    return registeredInstallationEntry;
  } else {
    throw await getErrorFromResponse("Create Installation", response);
  }
}
function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
function bufferToBase64UrlSafe(array) {
  const b64 = btoa(String.fromCharCode(...array));
  return b64.replace(/\+/g, "-").replace(/\//g, "_");
}
var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
var INVALID_FID = "";
function generateFid() {
  try {
    const fidByteArray = new Uint8Array(17);
    const crypto = self.crypto || self.msCrypto;
    crypto.getRandomValues(fidByteArray);
    fidByteArray[0] = 112 + fidByteArray[0] % 16;
    const fid = encode(fidByteArray);
    return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
  } catch (_a) {
    return INVALID_FID;
  }
}
function encode(fidByteArray) {
  const b64String = bufferToBase64UrlSafe(fidByteArray);
  return b64String.substr(0, 22);
}
function getKey(appConfig) {
  return `${appConfig.appName}!${appConfig.appId}`;
}
var fidChangeCallbacks = /* @__PURE__ */new Map();
function fidChanged(appConfig, fid) {
  const key = getKey(appConfig);
  callFidChangeCallbacks(key, fid);
  broadcastFidChange(key, fid);
}
function addCallback(appConfig, callback) {
  getBroadcastChannel();
  const key = getKey(appConfig);
  let callbackSet = fidChangeCallbacks.get(key);
  if (!callbackSet) {
    callbackSet = /* @__PURE__ */new Set();
    fidChangeCallbacks.set(key, callbackSet);
  }
  callbackSet.add(callback);
}
function removeCallback(appConfig, callback) {
  const key = getKey(appConfig);
  const callbackSet = fidChangeCallbacks.get(key);
  if (!callbackSet) {
    return;
  }
  callbackSet.delete(callback);
  if (callbackSet.size === 0) {
    fidChangeCallbacks.delete(key);
  }
  closeBroadcastChannel();
}
function callFidChangeCallbacks(key, fid) {
  const callbacks = fidChangeCallbacks.get(key);
  if (!callbacks) {
    return;
  }
  for (const callback of callbacks) {
    callback(fid);
  }
}
function broadcastFidChange(key, fid) {
  const channel = getBroadcastChannel();
  if (channel) {
    channel.postMessage({
      key,
      fid
    });
  }
  closeBroadcastChannel();
}
var broadcastChannel = null;
function getBroadcastChannel() {
  if (!broadcastChannel && "BroadcastChannel" in self) {
    broadcastChannel = new BroadcastChannel("[Firebase] FID Change");
    broadcastChannel.onmessage = e => {
      callFidChangeCallbacks(e.data.key, e.data.fid);
    };
  }
  return broadcastChannel;
}
function closeBroadcastChannel() {
  if (fidChangeCallbacks.size === 0 && broadcastChannel) {
    broadcastChannel.close();
    broadcastChannel = null;
  }
}
var DATABASE_NAME = "firebase-installations-database";
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = "firebase-installations-store";
var dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = (0, import_idb.openDB)(DATABASE_NAME, DATABASE_VERSION, {
      upgrade: (db, oldVersion) => {
        switch (oldVersion) {
          case 0:
            db.createObjectStore(OBJECT_STORE_NAME);
        }
      }
    });
  }
  return dbPromise;
}
async function set(appConfig, value) {
  const key = getKey(appConfig);
  const db = await getDbPromise();
  const tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
  const objectStore = tx.objectStore(OBJECT_STORE_NAME);
  const oldValue = await objectStore.get(key);
  await objectStore.put(value, key);
  await tx.done;
  if (!oldValue || oldValue.fid !== value.fid) {
    fidChanged(appConfig, value.fid);
  }
  return value;
}
async function remove(appConfig) {
  const key = getKey(appConfig);
  const db = await getDbPromise();
  const tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
  await tx.objectStore(OBJECT_STORE_NAME).delete(key);
  await tx.done;
}
async function update(appConfig, updateFn) {
  const key = getKey(appConfig);
  const db = await getDbPromise();
  const tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
  const store = tx.objectStore(OBJECT_STORE_NAME);
  const oldValue = await store.get(key);
  const newValue = updateFn(oldValue);
  if (newValue === void 0) {
    await store.delete(key);
  } else {
    await store.put(newValue, key);
  }
  await tx.done;
  if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
    fidChanged(appConfig, newValue.fid);
  }
  return newValue;
}
async function getInstallationEntry(installations) {
  let registrationPromise;
  const installationEntry = await update(installations.appConfig, oldEntry => {
    const installationEntry2 = updateOrCreateInstallationEntry(oldEntry);
    const entryWithPromise = triggerRegistrationIfNecessary(installations, installationEntry2);
    registrationPromise = entryWithPromise.registrationPromise;
    return entryWithPromise.installationEntry;
  });
  if (installationEntry.fid === INVALID_FID) {
    return {
      installationEntry: await registrationPromise
    };
  }
  return {
    installationEntry,
    registrationPromise
  };
}
function updateOrCreateInstallationEntry(oldEntry) {
  const entry = oldEntry || {
    fid: generateFid(),
    registrationStatus: 0
  };
  return clearTimedOutRequest(entry);
}
function triggerRegistrationIfNecessary(installations, installationEntry) {
  if (installationEntry.registrationStatus === 0) {
    if (!navigator.onLine) {
      const registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline"));
      return {
        installationEntry,
        registrationPromise: registrationPromiseWithError
      };
    }
    const inProgressEntry = {
      fid: installationEntry.fid,
      registrationStatus: 1,
      registrationTime: Date.now()
    };
    const registrationPromise = registerInstallation(installations, inProgressEntry);
    return {
      installationEntry: inProgressEntry,
      registrationPromise
    };
  } else if (installationEntry.registrationStatus === 1) {
    return {
      installationEntry,
      registrationPromise: waitUntilFidRegistration(installations)
    };
  } else {
    return {
      installationEntry
    };
  }
}
async function registerInstallation(installations, installationEntry) {
  try {
    const registeredInstallationEntry = await createInstallationRequest(installations, installationEntry);
    return set(installations.appConfig, registeredInstallationEntry);
  } catch (e) {
    if (isServerError(e) && e.customData.serverCode === 409) {
      await remove(installations.appConfig);
    } else {
      await set(installations.appConfig, {
        fid: installationEntry.fid,
        registrationStatus: 0
      });
    }
    throw e;
  }
}
async function waitUntilFidRegistration(installations) {
  let entry = await updateInstallationRequest(installations.appConfig);
  while (entry.registrationStatus === 1) {
    await sleep(100);
    entry = await updateInstallationRequest(installations.appConfig);
  }
  if (entry.registrationStatus === 0) {
    const {
      installationEntry,
      registrationPromise
    } = await getInstallationEntry(installations);
    if (registrationPromise) {
      return registrationPromise;
    } else {
      return installationEntry;
    }
  }
  return entry;
}
function updateInstallationRequest(appConfig) {
  return update(appConfig, oldEntry => {
    if (!oldEntry) {
      throw ERROR_FACTORY.create("installation-not-found");
    }
    return clearTimedOutRequest(oldEntry);
  });
}
function clearTimedOutRequest(entry) {
  if (hasInstallationRequestTimedOut(entry)) {
    return {
      fid: entry.fid,
      registrationStatus: 0
    };
  }
  return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
  return installationEntry.registrationStatus === 1 && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
}
async function generateAuthTokenRequest({
  appConfig,
  heartbeatServiceProvider
}, installationEntry) {
  const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
  const headers = getHeadersWithAuth(appConfig, installationEntry);
  const heartbeatService = heartbeatServiceProvider.getImmediate({
    optional: true
  });
  if (heartbeatService) {
    const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
    if (heartbeatsHeader) {
      headers.append("x-firebase-client", heartbeatsHeader);
    }
  }
  const body = {
    installation: {
      sdkVersion: PACKAGE_VERSION,
      appId: appConfig.appId
    }
  };
  const request = {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  };
  const response = await retryIfServerError(() => fetch(endpoint, request));
  if (response.ok) {
    const responseValue = await response.json();
    const completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
    return completedAuthToken;
  } else {
    throw await getErrorFromResponse("Generate Auth Token", response);
  }
}
function getGenerateAuthTokenEndpoint(appConfig, {
  fid
}) {
  return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
}
async function refreshAuthToken(installations, forceRefresh = false) {
  let tokenPromise;
  const entry = await update(installations.appConfig, oldEntry => {
    if (!isEntryRegistered(oldEntry)) {
      throw ERROR_FACTORY.create("not-registered");
    }
    const oldAuthToken = oldEntry.authToken;
    if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
      return oldEntry;
    } else if (oldAuthToken.requestStatus === 1) {
      tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
      return oldEntry;
    } else {
      if (!navigator.onLine) {
        throw ERROR_FACTORY.create("app-offline");
      }
      const inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
      tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
      return inProgressEntry;
    }
  });
  const authToken = tokenPromise ? await tokenPromise : entry.authToken;
  return authToken;
}
async function waitUntilAuthTokenRequest(installations, forceRefresh) {
  let entry = await updateAuthTokenRequest(installations.appConfig);
  while (entry.authToken.requestStatus === 1) {
    await sleep(100);
    entry = await updateAuthTokenRequest(installations.appConfig);
  }
  const authToken = entry.authToken;
  if (authToken.requestStatus === 0) {
    return refreshAuthToken(installations, forceRefresh);
  } else {
    return authToken;
  }
}
function updateAuthTokenRequest(appConfig) {
  return update(appConfig, oldEntry => {
    if (!isEntryRegistered(oldEntry)) {
      throw ERROR_FACTORY.create("not-registered");
    }
    const oldAuthToken = oldEntry.authToken;
    if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
      return Object.assign(Object.assign({}, oldEntry), {
        authToken: {
          requestStatus: 0
        }
      });
    }
    return oldEntry;
  });
}
async function fetchAuthTokenFromServer(installations, installationEntry) {
  try {
    const authToken = await generateAuthTokenRequest(installations, installationEntry);
    const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), {
      authToken
    });
    await set(installations.appConfig, updatedInstallationEntry);
    return authToken;
  } catch (e) {
    if (isServerError(e) && (e.customData.serverCode === 401 || e.customData.serverCode === 404)) {
      await remove(installations.appConfig);
    } else {
      const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), {
        authToken: {
          requestStatus: 0
        }
      });
      await set(installations.appConfig, updatedInstallationEntry);
    }
    throw e;
  }
}
function isEntryRegistered(installationEntry) {
  return installationEntry !== void 0 && installationEntry.registrationStatus === 2;
}
function isAuthTokenValid(authToken) {
  return authToken.requestStatus === 2 && !isAuthTokenExpired(authToken);
}
function isAuthTokenExpired(authToken) {
  const now = Date.now();
  return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
}
function makeAuthTokenRequestInProgressEntry(oldEntry) {
  const inProgressAuthToken = {
    requestStatus: 1,
    requestTime: Date.now()
  };
  return Object.assign(Object.assign({}, oldEntry), {
    authToken: inProgressAuthToken
  });
}
function hasAuthTokenRequestTimedOut(authToken) {
  return authToken.requestStatus === 1 && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
}
async function getId(installations) {
  const installationsImpl = installations;
  const {
    installationEntry,
    registrationPromise
  } = await getInstallationEntry(installationsImpl);
  if (registrationPromise) {
    registrationPromise.catch(console.error);
  } else {
    refreshAuthToken(installationsImpl).catch(console.error);
  }
  return installationEntry.fid;
}
async function getToken(installations, forceRefresh = false) {
  const installationsImpl = installations;
  await completeInstallationRegistration(installationsImpl);
  const authToken = await refreshAuthToken(installationsImpl, forceRefresh);
  return authToken.token;
}
async function completeInstallationRegistration(installations) {
  const {
    registrationPromise
  } = await getInstallationEntry(installations);
  if (registrationPromise) {
    await registrationPromise;
  }
}
async function deleteInstallationRequest(appConfig, installationEntry) {
  const endpoint = getDeleteEndpoint(appConfig, installationEntry);
  const headers = getHeadersWithAuth(appConfig, installationEntry);
  const request = {
    method: "DELETE",
    headers
  };
  const response = await retryIfServerError(() => fetch(endpoint, request));
  if (!response.ok) {
    throw await getErrorFromResponse("Delete Installation", response);
  }
}
function getDeleteEndpoint(appConfig, {
  fid
}) {
  return `${getInstallationsEndpoint(appConfig)}/${fid}`;
}
async function deleteInstallations(installations) {
  const {
    appConfig
  } = installations;
  const entry = await update(appConfig, oldEntry => {
    if (oldEntry && oldEntry.registrationStatus === 0) {
      return void 0;
    }
    return oldEntry;
  });
  if (entry) {
    if (entry.registrationStatus === 1) {
      throw ERROR_FACTORY.create("delete-pending-registration");
    } else if (entry.registrationStatus === 2) {
      if (!navigator.onLine) {
        throw ERROR_FACTORY.create("app-offline");
      } else {
        await deleteInstallationRequest(appConfig, entry);
        await remove(appConfig);
      }
    }
  }
}
function onIdChange(installations, callback) {
  const {
    appConfig
  } = installations;
  addCallback(appConfig, callback);
  return () => {
    removeCallback(appConfig, callback);
  };
}
function getInstallations(app = (0, import_app.getApp)()) {
  const installationsImpl = (0, import_app._getProvider)(app, "installations").getImmediate();
  return installationsImpl;
}
function extractAppConfig(app) {
  if (!app || !app.options) {
    throw getMissingValueError("App Configuration");
  }
  if (!app.name) {
    throw getMissingValueError("App Name");
  }
  const configKeys = ["projectId", "apiKey", "appId"];
  for (const keyName of configKeys) {
    if (!app.options[keyName]) {
      throw getMissingValueError(keyName);
    }
  }
  return {
    appName: app.name,
    projectId: app.options.projectId,
    apiKey: app.options.apiKey,
    appId: app.options.appId
  };
}
function getMissingValueError(valueName) {
  return ERROR_FACTORY.create("missing-app-config-values", {
    valueName
  });
}
var INSTALLATIONS_NAME = "installations";
var INSTALLATIONS_NAME_INTERNAL = "installations-internal";
var publicFactory = container => {
  const app = container.getProvider("app").getImmediate();
  const appConfig = extractAppConfig(app);
  const heartbeatServiceProvider = (0, import_app._getProvider)(app, "heartbeat");
  const installationsImpl = {
    app,
    appConfig,
    heartbeatServiceProvider,
    _delete: () => Promise.resolve()
  };
  return installationsImpl;
};
var internalFactory = container => {
  const app = container.getProvider("app").getImmediate();
  const installations = (0, import_app._getProvider)(app, INSTALLATIONS_NAME).getImmediate();
  const installationsInternal = {
    getId: () => getId(installations),
    getToken: forceRefresh => getToken(installations, forceRefresh)
  };
  return installationsInternal;
};
function registerInstallations() {
  (0, import_app._registerComponent)(new import_component.Component(INSTALLATIONS_NAME, publicFactory, "PUBLIC"));
  (0, import_app._registerComponent)(new import_component.Component(INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE"));
}
registerInstallations();
(0, import_app.registerVersion)(name, version);
(0, import_app.registerVersion)(name, version, "esm2017");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zLjAuNi45LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy91dGlsL2NvbnN0YW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvdXRpbC9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2Z1bmN0aW9ucy9jb21tb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2Z1bmN0aW9ucy9jcmVhdGUtaW5zdGFsbGF0aW9uLXJlcXVlc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL3V0aWwvc2xlZXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2hlbHBlcnMvYnVmZmVyLXRvLWJhc2U2NC11cmwtc2FmZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvaGVscGVycy9nZW5lcmF0ZS1maWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL3V0aWwvZ2V0LWtleS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvaGVscGVycy9maWQtY2hhbmdlZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvaGVscGVycy9pZGItbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvaGVscGVycy9nZXQtaW5zdGFsbGF0aW9uLWVudHJ5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9mdW5jdGlvbnMvZ2VuZXJhdGUtYXV0aC10b2tlbi1yZXF1ZXN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9oZWxwZXJzL3JlZnJlc2gtYXV0aC10b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvYXBpL2dldC1pZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvYXBpL2dldC10b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvZnVuY3Rpb25zL2RlbGV0ZS1pbnN0YWxsYXRpb24tcmVxdWVzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvYXBpL2RlbGV0ZS1pbnN0YWxsYXRpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9hcGkvb24taWQtY2hhbmdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9hcGkvZ2V0LWluc3RhbGxhdGlvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2hlbHBlcnMvZXh0cmFjdC1hcHAtY29uZmlnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9mdW5jdGlvbnMvY29uZmlnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJpbnN0YWxsYXRpb25zXzBfNl85X2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlbGV0ZUluc3RhbGxhdGlvbnMiLCJnZXRJZCIsImdldEluc3RhbGxhdGlvbnMiLCJnZXRUb2tlbiIsIm9uSWRDaGFuZ2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUEVORElOR19USU1FT1VUX01TIiwiUEFDS0FHRV9WRVJTSU9OIiwidmVyc2lvbiIsIklOVEVSTkFMX0FVVEhfVkVSU0lPTiIsIklOU1RBTExBVElPTlNfQVBJX1VSTCIsIlRPS0VOX0VYUElSQVRJT05fQlVGRkVSIiwiU0VSVklDRSIsIlNFUlZJQ0VfTkFNRSIsIkVSUk9SX0RFU0NSSVBUSU9OX01BUCIsIkVSUk9SX0ZBQ1RPUlkiLCJpbXBvcnRfdXRpbCIsIkVycm9yRmFjdG9yeSIsImlzU2VydmVyRXJyb3IiLCJlcnJvciIsIkZpcmViYXNlRXJyb3IiLCJjb2RlIiwiaW5jbHVkZXMiLCJnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQiLCJwcm9qZWN0SWQiLCJleHRyYWN0QXV0aFRva2VuSW5mb0Zyb21SZXNwb25zZSIsInJlc3BvbnNlIiwidG9rZW4iLCJyZXF1ZXN0U3RhdHVzIiwiZXhwaXJlc0luIiwiZ2V0RXhwaXJlc0luRnJvbVJlc3BvbnNlRXhwaXJlc0luIiwiY3JlYXRpb25UaW1lIiwiRGF0ZSIsIm5vdyIsImdldEVycm9yRnJvbVJlc3BvbnNlIiwicmVxdWVzdE5hbWUiLCJyZXNwb25zZUpzb24iLCJqc29uIiwiZXJyb3JEYXRhIiwiY3JlYXRlIiwic2VydmVyQ29kZSIsInNlcnZlck1lc3NhZ2UiLCJtZXNzYWdlIiwic2VydmVyU3RhdHVzIiwic3RhdHVzIiwiZ2V0SGVhZGVycyIsImFwaUtleSIsIkhlYWRlcnMiLCJBY2NlcHQiLCJnZXRIZWFkZXJzV2l0aEF1dGgiLCJhcHBDb25maWciLCJyZWZyZXNoVG9rZW4iLCJoZWFkZXJzIiwiYXBwZW5kIiwiZ2V0QXV0aG9yaXphdGlvbkhlYWRlciIsInJldHJ5SWZTZXJ2ZXJFcnJvciIsImZuIiwicmVzdWx0IiwicmVzcG9uc2VFeHBpcmVzSW4iLCJOdW1iZXIiLCJyZXBsYWNlIiwiY3JlYXRlSW5zdGFsbGF0aW9uUmVxdWVzdCIsImhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlciIsImZpZCIsImVuZHBvaW50IiwiaGVhcnRiZWF0U2VydmljZSIsImdldEltbWVkaWF0ZSIsIm9wdGlvbmFsIiwiaGVhcnRiZWF0c0hlYWRlciIsImdldEhlYXJ0YmVhdHNIZWFkZXIiLCJib2R5IiwiYXV0aFZlcnNpb24iLCJhcHBJZCIsInNka1ZlcnNpb24iLCJyZXF1ZXN0IiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwib2siLCJyZXNwb25zZVZhbHVlIiwicmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5IiwicmVnaXN0cmF0aW9uU3RhdHVzIiwiYXV0aFRva2VuIiwic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImJ1ZmZlclRvQmFzZTY0VXJsU2FmZSIsImFycmF5IiwiYjY0IiwiYnRvYSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIlZBTElEX0ZJRF9QQVRURVJOIiwiSU5WQUxJRF9GSUQiLCJnZW5lcmF0ZUZpZCIsImZpZEJ5dGVBcnJheSIsIlVpbnQ4QXJyYXkiLCJjcnlwdG8iLCJzZWxmIiwibXNDcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJlbmNvZGUiLCJ0ZXN0IiwiX2EiLCJiNjRTdHJpbmciLCJzdWJzdHIiLCJnZXRLZXkiLCJhcHBOYW1lIiwiZmlkQ2hhbmdlQ2FsbGJhY2tzIiwiTWFwIiwiZmlkQ2hhbmdlZCIsImtleSIsImNhbGxGaWRDaGFuZ2VDYWxsYmFja3MiLCJicm9hZGNhc3RGaWRDaGFuZ2UiLCJhZGRDYWxsYmFjayIsImNhbGxiYWNrIiwiZ2V0QnJvYWRjYXN0Q2hhbm5lbCIsImNhbGxiYWNrU2V0IiwiZ2V0IiwiU2V0Iiwic2V0IiwiYWRkIiwicmVtb3ZlQ2FsbGJhY2siLCJkZWxldGUiLCJzaXplIiwiY2xvc2VCcm9hZGNhc3RDaGFubmVsIiwiY2FsbGJhY2tzIiwiY2hhbm5lbCIsInBvc3RNZXNzYWdlIiwiYnJvYWRjYXN0Q2hhbm5lbCIsIkJyb2FkY2FzdENoYW5uZWwiLCJvbm1lc3NhZ2UiLCJlIiwiZGF0YSIsImNsb3NlIiwiREFUQUJBU0VfTkFNRSIsIkRBVEFCQVNFX1ZFUlNJT04iLCJPQkpFQ1RfU1RPUkVfTkFNRSIsImRiUHJvbWlzZSIsImdldERiUHJvbWlzZSIsImltcG9ydF9pZGIiLCJvcGVuREIiLCJ1cGdyYWRlIiwiZGIiLCJvbGRWZXJzaW9uIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJ2YWx1ZSIsInR4IiwidHJhbnNhY3Rpb24iLCJvYmplY3RTdG9yZSIsIm9sZFZhbHVlIiwicHV0IiwiZG9uZSIsInJlbW92ZSIsInVwZGF0ZSIsInVwZGF0ZUZuIiwic3RvcmUiLCJuZXdWYWx1ZSIsImdldEluc3RhbGxhdGlvbkVudHJ5IiwiaW5zdGFsbGF0aW9ucyIsInJlZ2lzdHJhdGlvblByb21pc2UiLCJpbnN0YWxsYXRpb25FbnRyeSIsIm9sZEVudHJ5IiwiaW5zdGFsbGF0aW9uRW50cnkyIiwidXBkYXRlT3JDcmVhdGVJbnN0YWxsYXRpb25FbnRyeSIsImVudHJ5V2l0aFByb21pc2UiLCJ0cmlnZ2VyUmVnaXN0cmF0aW9uSWZOZWNlc3NhcnkiLCJlbnRyeSIsImNsZWFyVGltZWRPdXRSZXF1ZXN0IiwibmF2aWdhdG9yIiwib25MaW5lIiwicmVnaXN0cmF0aW9uUHJvbWlzZVdpdGhFcnJvciIsInJlamVjdCIsImluUHJvZ3Jlc3NFbnRyeSIsInJlZ2lzdHJhdGlvblRpbWUiLCJyZWdpc3Rlckluc3RhbGxhdGlvbiIsIndhaXRVbnRpbEZpZFJlZ2lzdHJhdGlvbiIsImN1c3RvbURhdGEiLCJ1cGRhdGVJbnN0YWxsYXRpb25SZXF1ZXN0IiwiaGFzSW5zdGFsbGF0aW9uUmVxdWVzdFRpbWVkT3V0IiwiZ2VuZXJhdGVBdXRoVG9rZW5SZXF1ZXN0IiwiZ2V0R2VuZXJhdGVBdXRoVG9rZW5FbmRwb2ludCIsImluc3RhbGxhdGlvbiIsImNvbXBsZXRlZEF1dGhUb2tlbiIsInJlZnJlc2hBdXRoVG9rZW4iLCJmb3JjZVJlZnJlc2giLCJ0b2tlblByb21pc2UiLCJpc0VudHJ5UmVnaXN0ZXJlZCIsIm9sZEF1dGhUb2tlbiIsImlzQXV0aFRva2VuVmFsaWQiLCJ3YWl0VW50aWxBdXRoVG9rZW5SZXF1ZXN0IiwibWFrZUF1dGhUb2tlblJlcXVlc3RJblByb2dyZXNzRW50cnkiLCJmZXRjaEF1dGhUb2tlbkZyb21TZXJ2ZXIiLCJ1cGRhdGVBdXRoVG9rZW5SZXF1ZXN0IiwiaGFzQXV0aFRva2VuUmVxdWVzdFRpbWVkT3V0IiwiT2JqZWN0IiwiYXNzaWduIiwidXBkYXRlZEluc3RhbGxhdGlvbkVudHJ5IiwiaXNBdXRoVG9rZW5FeHBpcmVkIiwiaW5Qcm9ncmVzc0F1dGhUb2tlbiIsInJlcXVlc3RUaW1lIiwiaW5zdGFsbGF0aW9uc0ltcGwiLCJjYXRjaCIsImNvbnNvbGUiLCJjb21wbGV0ZUluc3RhbGxhdGlvblJlZ2lzdHJhdGlvbiIsImRlbGV0ZUluc3RhbGxhdGlvblJlcXVlc3QiLCJnZXREZWxldGVFbmRwb2ludCIsImFwcCIsImltcG9ydF9hcHAiLCJnZXRBcHAiLCJfZ2V0UHJvdmlkZXIiLCJleHRyYWN0QXBwQ29uZmlnIiwib3B0aW9ucyIsImdldE1pc3NpbmdWYWx1ZUVycm9yIiwibmFtZSIsImNvbmZpZ0tleXMiLCJrZXlOYW1lIiwidmFsdWVOYW1lIiwiSU5TVEFMTEFUSU9OU19OQU1FIiwiSU5TVEFMTEFUSU9OU19OQU1FX0lOVEVSTkFMIiwicHVibGljRmFjdG9yeSIsImNvbnRhaW5lciIsImdldFByb3ZpZGVyIiwiX2RlbGV0ZSIsImludGVybmFsRmFjdG9yeSIsImluc3RhbGxhdGlvbnNJbnRlcm5hbCIsInJlZ2lzdGVySW5zdGFsbGF0aW9ucyIsIl9yZWdpc3RlckNvbXBvbmVudCIsImltcG9ydF9jb21wb25lbnQiLCJDb21wb25lbnQiLCJyZWdpc3RlclZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDJCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsMkJBQUE7RUFBQUUsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxn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LENBQUlLLE9BQUEsQ0FBUS9MLFNBQUE7SUFDdkJzQixNQUFBLEVBQVFvSyxHQUFBLENBQUlLLE9BQUEsQ0FBUXpLLE1BQUE7SUFDcEIwQixLQUFBLEVBQU8wSSxHQUFBLENBQUlLLE9BQUEsQ0FBUS9JOztBQUV2QjtBQUVBLFNBQVNnSixxQkFBcUJJLFNBQUEsRUFBaUI7RUFDN0MsT0FBTzdNLGFBQUEsQ0FBY3dCLE1BQUEsQ0FBNEM7SUFDL0RxTDtFQUNEO0FBQ0g7QUMzQkEsSUFBTUMsa0JBQUEsR0FBcUI7QUFDM0IsSUFBTUMsMkJBQUEsR0FBOEI7QUFFcEMsSUFBTUMsYUFBQSxHQUNKQyxTQUFBLElBQ0U7RUFDRixNQUFNZCxHQUFBLEdBQU1jLFNBQUEsQ0FBVUMsV0FBQSxDQUFZLEtBQUssRUFBRS9KLFlBQUEsQ0FBWTtFQUVyRCxNQUFNaEIsU0FBQSxHQUFZb0ssZ0JBQUEsQ0FBaUJKLEdBQUc7RUFDdEMsTUFBTXBKLHdCQUFBLE9BQTJCcUosVUFBQSxDQUFBRSxZQUFBLEVBQWFILEdBQUEsRUFBSyxXQUFXO0VBRTlELE1BQU1OLGlCQUFBLEdBQStDO0lBQ25ETSxHQUFBO0lBQ0FoSyxTQUFBO0lBQ0FZLHdCQUFBO0lBQ0FvSyxPQUFBLEVBQVNBLENBQUEsS0FBTTVJLE9BQUEsQ0FBUUMsT0FBQSxDQUFPOztFQUVoQyxPQUFPcUgsaUJBQUE7QUFDVDtBQUVBLElBQU11QixlQUFBLEdBQ0pILFNBQUEsSUFDRTtFQUNGLE1BQU1kLEdBQUEsR0FBTWMsU0FBQSxDQUFVQyxXQUFBLENBQVksS0FBSyxFQUFFL0osWUFBQSxDQUFZO0VBRXJELE1BQU1nRyxhQUFBLE9BQWdCaUQsVUFBQSxDQUFBRSxZQUFBLEVBQWFILEdBQUEsRUFBS1csa0JBQWtCLEVBQUUzSixZQUFBLENBQVk7RUFFeEUsTUFBTWtLLHFCQUFBLEdBQXdEO0lBQzVEck8sS0FBQSxFQUFPQSxDQUFBLEtBQU1BLEtBQUEsQ0FBTW1LLGFBQWE7SUFDaENqSyxRQUFBLEVBQVcyTCxZQUFBLElBQTJCM0wsUUFBQSxDQUFTaUssYUFBQSxFQUFlMEIsWUFBWTs7RUFFNUUsT0FBT3dDLHFCQUFBO0FBQ1Q7U0FFZ0JDLHNCQUFBLEVBQXFCO0VBQ25DLElBQUFsQixVQUFBLENBQUFtQixrQkFBQSxFQUNFLElBQUlDLGdCQUFBLENBQUFDLFNBQUEsQ0FBVVgsa0JBQUEsRUFBb0JFLGFBQUEsRUFBb0M7RUFFeEUsSUFBQVosVUFBQSxDQUFBbUIsa0JBQUEsRUFDRSxJQUFJQyxnQkFBQSxDQUFBQyxTQUFBLENBQ0ZWLDJCQUFBLEVBQ0FLLGVBQUEsRUFFRDtBQUVMO0FDM0NBRSxxQkFBQSxDQUFxQjtJQUNyQmxCLFVBQUEsQ0FBQXNCLGVBQUEsRUFBZ0JoQixJQUFBLEVBQU1qTixPQUFPO0lBRTdCMk0sVUFBQSxDQUFBc0IsZUFBQSxFQUFnQmhCLElBQUEsRUFBTWpOLE9BQUEsRUFBUyxTQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==