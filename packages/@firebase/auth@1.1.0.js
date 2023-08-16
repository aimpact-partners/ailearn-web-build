System.register(["@firebase/util@1.9.3","@firebase/component@0.6.4","@firebase/logger@0.4.0","idb@7.1.1","@firebase/app@0.9.15","tslib@2.6.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.9.3"],["@firebase/component","0.6.4"],["@firebase/logger","0.4.0"],["idb","7.1.1"],["@firebase/app","0.9.15"],["tslib","2.6.1"],["@firebase/auth","1.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.9.3', dep), dep => dependencies.set('@firebase/component@0.6.4', dep), dep => dependencies.set('@firebase/logger@0.4.0', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.9.15', dep), dep => dependencies.set('tslib@2.6.1', dep)],
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

// .beyond/uimport/temp/@firebase/auth.1.1.0.js
var auth_1_1_0_exports = {};
__export(auth_1_1_0_exports, {
  ActionCodeOperation: () => ActionCodeOperation,
  ActionCodeURL: () => ActionCodeURL,
  AuthCredential: () => AuthCredential,
  AuthErrorCodes: () => AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY,
  EmailAuthCredential: () => EmailAuthCredential,
  EmailAuthProvider: () => EmailAuthProvider,
  FacebookAuthProvider: () => FacebookAuthProvider,
  FactorId: () => FactorId,
  GithubAuthProvider: () => GithubAuthProvider,
  GoogleAuthProvider: () => GoogleAuthProvider,
  OAuthCredential: () => OAuthCredential,
  OAuthProvider: () => OAuthProvider,
  OperationType: () => OperationType,
  PhoneAuthCredential: () => PhoneAuthCredential,
  PhoneAuthProvider: () => PhoneAuthProvider,
  PhoneMultiFactorGenerator: () => PhoneMultiFactorGenerator,
  ProviderId: () => ProviderId,
  RecaptchaVerifier: () => RecaptchaVerifier,
  SAMLAuthProvider: () => SAMLAuthProvider,
  SignInMethod: () => SignInMethod,
  TotpMultiFactorGenerator: () => TotpMultiFactorGenerator,
  TotpSecret: () => TotpSecret,
  TwitterAuthProvider: () => TwitterAuthProvider,
  applyActionCode: () => applyActionCode,
  beforeAuthStateChanged: () => beforeAuthStateChanged,
  browserLocalPersistence: () => browserLocalPersistence,
  browserPopupRedirectResolver: () => browserPopupRedirectResolver,
  browserSessionPersistence: () => browserSessionPersistence,
  checkActionCode: () => checkActionCode,
  confirmPasswordReset: () => confirmPasswordReset,
  connectAuthEmulator: () => connectAuthEmulator,
  createUserWithEmailAndPassword: () => createUserWithEmailAndPassword,
  debugErrorMap: () => debugErrorMap,
  deleteUser: () => deleteUser,
  fetchSignInMethodsForEmail: () => fetchSignInMethodsForEmail,
  getAdditionalUserInfo: () => getAdditionalUserInfo,
  getAuth: () => getAuth,
  getIdToken: () => getIdToken,
  getIdTokenResult: () => getIdTokenResult,
  getMultiFactorResolver: () => getMultiFactorResolver,
  getRedirectResult: () => getRedirectResult,
  inMemoryPersistence: () => inMemoryPersistence,
  indexedDBLocalPersistence: () => indexedDBLocalPersistence,
  initializeAuth: () => initializeAuth,
  initializeRecaptchaConfig: () => initializeRecaptchaConfig,
  isSignInWithEmailLink: () => isSignInWithEmailLink,
  linkWithCredential: () => linkWithCredential,
  linkWithPhoneNumber: () => linkWithPhoneNumber,
  linkWithPopup: () => linkWithPopup,
  linkWithRedirect: () => linkWithRedirect,
  multiFactor: () => multiFactor,
  onAuthStateChanged: () => onAuthStateChanged,
  onIdTokenChanged: () => onIdTokenChanged,
  parseActionCodeURL: () => parseActionCodeURL,
  prodErrorMap: () => prodErrorMap,
  reauthenticateWithCredential: () => reauthenticateWithCredential,
  reauthenticateWithPhoneNumber: () => reauthenticateWithPhoneNumber,
  reauthenticateWithPopup: () => reauthenticateWithPopup,
  reauthenticateWithRedirect: () => reauthenticateWithRedirect,
  reload: () => reload,
  sendEmailVerification: () => sendEmailVerification,
  sendPasswordResetEmail: () => sendPasswordResetEmail,
  sendSignInLinkToEmail: () => sendSignInLinkToEmail,
  setPersistence: () => setPersistence,
  signInAnonymously: () => signInAnonymously,
  signInWithCredential: () => signInWithCredential,
  signInWithCustomToken: () => signInWithCustomToken,
  signInWithEmailAndPassword: () => signInWithEmailAndPassword,
  signInWithEmailLink: () => signInWithEmailLink,
  signInWithPhoneNumber: () => signInWithPhoneNumber,
  signInWithPopup: () => signInWithPopup,
  signInWithRedirect: () => signInWithRedirect,
  signOut: () => signOut,
  unlink: () => unlink,
  updateCurrentUser: () => updateCurrentUser,
  updateEmail: () => updateEmail,
  updatePassword: () => updatePassword,
  updatePhoneNumber: () => updatePhoneNumber,
  updateProfile: () => updateProfile,
  useDeviceLanguage: () => useDeviceLanguage,
  verifyBeforeUpdateEmail: () => verifyBeforeUpdateEmail,
  verifyPasswordResetCode: () => verifyPasswordResetCode
});
module.exports = __toCommonJS(auth_1_1_0_exports);

// node_modules/@firebase/auth/dist/esm2017/index-e24386e7.js
var import_util = require("@firebase/util@1.9.3");
var import_app = require("@firebase/app@0.9.15");
var import_tslib = require("tslib@2.6.1");
var import_logger = require("@firebase/logger@0.4.0");
var import_component = require("@firebase/component@0.6.4");
var FactorId = {
  PHONE: "phone",
  TOTP: "totp"
};
var ProviderId = {
  FACEBOOK: "facebook.com",
  GITHUB: "github.com",
  GOOGLE: "google.com",
  PASSWORD: "password",
  PHONE: "phone",
  TWITTER: "twitter.com"
};
var SignInMethod = {
  EMAIL_LINK: "emailLink",
  EMAIL_PASSWORD: "password",
  FACEBOOK: "facebook.com",
  GITHUB: "github.com",
  GOOGLE: "google.com",
  PHONE: "phone",
  TWITTER: "twitter.com"
};
var OperationType = {
  LINK: "link",
  REAUTHENTICATE: "reauthenticate",
  SIGN_IN: "signIn"
};
var ActionCodeOperation = {
  EMAIL_SIGNIN: "EMAIL_SIGNIN",
  PASSWORD_RESET: "PASSWORD_RESET",
  RECOVER_EMAIL: "RECOVER_EMAIL",
  REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
  VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
  VERIFY_EMAIL: "VERIFY_EMAIL"
};
function _debugErrorMap() {
  return {
    ["admin-restricted-operation"]: "This operation is restricted to administrators only.",
    ["argument-error"]: "",
    ["app-not-authorized"]: "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    ["app-not-installed"]: "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    ["captcha-check-failed"]: "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
    ["code-expired"]: "The SMS code has expired. Please re-send the verification code to try again.",
    ["cordova-not-ready"]: "Cordova framework is not ready.",
    ["cors-unsupported"]: "This browser is not supported.",
    ["credential-already-in-use"]: "This credential is already associated with a different user account.",
    ["custom-token-mismatch"]: "The custom token corresponds to a different audience.",
    ["requires-recent-login"]: "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    ["dynamic-link-not-activated"]: "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    ["email-change-needs-verification"]: "Multi-factor users must always have a verified email.",
    ["email-already-in-use"]: "The email address is already in use by another account.",
    ["emulator-config-failed"]: 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
    ["expired-action-code"]: "The action code has expired.",
    ["cancelled-popup-request"]: "This operation has been cancelled due to another conflicting popup being opened.",
    ["internal-error"]: "An internal AuthError has occurred.",
    ["invalid-app-credential"]: "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
    ["invalid-app-id"]: "The mobile app identifier is not registed for the current project.",
    ["invalid-user-token"]: "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
    ["invalid-auth-event"]: "An internal AuthError has occurred.",
    ["invalid-verification-code"]: "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
    ["invalid-continue-uri"]: "The continue URL provided in the request is invalid.",
    ["invalid-cordova-configuration"]: "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    ["invalid-custom-token"]: "The custom token format is incorrect. Please check the documentation.",
    ["invalid-dynamic-link-domain"]: "The provided dynamic link domain is not configured or authorized for the current project.",
    ["invalid-email"]: "The email address is badly formatted.",
    ["invalid-emulator-scheme"]: "Emulator URL must start with a valid scheme (http:// or https://).",
    ["invalid-api-key"]: "Your API key is invalid, please check you have copied it correctly.",
    ["invalid-cert-hash"]: "The SHA-1 certificate hash provided is invalid.",
    ["invalid-credential"]: "The supplied auth credential is malformed or has expired.",
    ["invalid-message-payload"]: "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
    ["invalid-multi-factor-session"]: "The request does not contain a valid proof of first factor successful sign-in.",
    ["invalid-oauth-provider"]: "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    ["invalid-oauth-client-id"]: "The OAuth client ID provided is either invalid or does not match the specified API key.",
    ["unauthorized-domain"]: "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    ["invalid-action-code"]: "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    ["wrong-password"]: "The password is invalid or the user does not have a password.",
    ["invalid-persistence-type"]: "The specified persistence type is invalid. It can only be local, session or none.",
    ["invalid-phone-number"]: "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
    ["invalid-provider-id"]: "The specified provider ID is invalid.",
    ["invalid-recipient-email"]: "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
    ["invalid-sender"]: "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
    ["invalid-verification-id"]: "The verification ID used to create the phone auth credential is invalid.",
    ["invalid-tenant-id"]: "The Auth instance's tenant ID is invalid.",
    ["login-blocked"]: "Login blocked by user-provided method: {$originalMessage}",
    ["missing-android-pkg-name"]: "An Android Package Name must be provided if the Android App is required to be installed.",
    ["auth-domain-config-required"]: "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    ["missing-app-credential"]: "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
    ["missing-verification-code"]: "The phone auth credential was created with an empty SMS verification code.",
    ["missing-continue-uri"]: "A continue URL must be provided in the request.",
    ["missing-iframe-start"]: "An internal AuthError has occurred.",
    ["missing-ios-bundle-id"]: "An iOS Bundle ID must be provided if an App Store ID is provided.",
    ["missing-or-invalid-nonce"]: "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
    ["missing-password"]: "A non-empty password must be provided",
    ["missing-multi-factor-info"]: "No second factor identifier is provided.",
    ["missing-multi-factor-session"]: "The request is missing proof of first factor successful sign-in.",
    ["missing-phone-number"]: "To send verification codes, provide a phone number for the recipient.",
    ["missing-verification-id"]: "The phone auth credential was created with an empty verification ID.",
    ["app-deleted"]: "This instance of FirebaseApp has been deleted.",
    ["multi-factor-info-not-found"]: "The user does not have a second factor matching the identifier provided.",
    ["multi-factor-auth-required"]: "Proof of ownership of a second factor is required to complete sign-in.",
    ["account-exists-with-different-credential"]: "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    ["network-request-failed"]: "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
    ["no-auth-event"]: "An internal AuthError has occurred.",
    ["no-such-provider"]: "User was not linked to an account with the given provider.",
    ["null-user"]: "A null user object was provided as the argument for an operation which requires a non-null user object.",
    ["operation-not-allowed"]: "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    ["operation-not-supported-in-this-environment"]: 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
    ["popup-blocked"]: "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    ["popup-closed-by-user"]: "The popup has been closed by the user before finalizing the operation.",
    ["provider-already-linked"]: "User can only be linked to one identity for the given provider.",
    ["quota-exceeded"]: "The project's quota for this operation has been exceeded.",
    ["redirect-cancelled-by-user"]: "The redirect operation has been cancelled by the user before finalizing.",
    ["redirect-operation-pending"]: "A redirect sign-in operation is already pending.",
    ["rejected-credential"]: "The request contains malformed or mismatching credentials.",
    ["second-factor-already-in-use"]: "The second factor is already enrolled on this account.",
    ["maximum-second-factor-count-exceeded"]: "The maximum allowed number of second factors on a user has been exceeded.",
    ["tenant-id-mismatch"]: "The provided tenant ID does not match the Auth instance's tenant ID",
    ["timeout"]: "The operation has timed out.",
    ["user-token-expired"]: "The user's credential is no longer valid. The user must sign in again.",
    ["too-many-requests"]: "We have blocked all requests from this device due to unusual activity. Try again later.",
    ["unauthorized-continue-uri"]: "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
    ["unsupported-first-factor"]: "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
    ["unsupported-persistence-type"]: "The current environment does not support the specified persistence type.",
    ["unsupported-tenant-operation"]: "This operation is not supported in a multi-tenant context.",
    ["unverified-email"]: "The operation requires a verified email.",
    ["user-cancelled"]: "The user did not grant your application the permissions it requested.",
    ["user-not-found"]: "There is no user record corresponding to this identifier. The user may have been deleted.",
    ["user-disabled"]: "The user account has been disabled by an administrator.",
    ["user-mismatch"]: "The supplied credentials do not correspond to the previously signed in user.",
    ["user-signed-out"]: "",
    ["weak-password"]: "The password must be 6 characters long or more.",
    ["web-storage-unsupported"]: "This browser is not supported or 3rd party cookies and data may be disabled.",
    ["already-initialized"]: "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
    ["missing-recaptcha-token"]: "The reCAPTCHA token is missing when sending request to the backend.",
    ["invalid-recaptcha-token"]: "The reCAPTCHA token is invalid when sending request to the backend.",
    ["invalid-recaptcha-action"]: "The reCAPTCHA action is invalid when sending request to the backend.",
    ["recaptcha-not-enabled"]: "reCAPTCHA Enterprise integration is not enabled for this project.",
    ["missing-client-type"]: "The reCAPTCHA client type is missing when sending request to the backend.",
    ["missing-recaptcha-version"]: "The reCAPTCHA version is missing when sending request to the backend.",
    ["invalid-req-type"]: "Invalid request parameters.",
    ["invalid-recaptcha-version"]: "The reCAPTCHA version is invalid when sending request to the backend."
  };
}
function _prodErrorMap() {
  return {
    ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
var debugErrorMap = _debugErrorMap;
var prodErrorMap = _prodErrorMap;
var _DEFAULT_AUTH_ERROR_FACTORY = new import_util.ErrorFactory("auth", "Firebase", _prodErrorMap());
var AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY = {
  ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
  ARGUMENT_ERROR: "auth/argument-error",
  APP_NOT_AUTHORIZED: "auth/app-not-authorized",
  APP_NOT_INSTALLED: "auth/app-not-installed",
  CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
  CODE_EXPIRED: "auth/code-expired",
  CORDOVA_NOT_READY: "auth/cordova-not-ready",
  CORS_UNSUPPORTED: "auth/cors-unsupported",
  CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
  CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
  DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
  DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
  EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
  EMAIL_EXISTS: "auth/email-already-in-use",
  EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
  EXPIRED_OOB_CODE: "auth/expired-action-code",
  EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
  INTERNAL_ERROR: "auth/internal-error",
  INVALID_API_KEY: "auth/invalid-api-key",
  INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
  INVALID_APP_ID: "auth/invalid-app-id",
  INVALID_AUTH: "auth/invalid-user-token",
  INVALID_AUTH_EVENT: "auth/invalid-auth-event",
  INVALID_CERT_HASH: "auth/invalid-cert-hash",
  INVALID_CODE: "auth/invalid-verification-code",
  INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
  INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
  INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
  INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
  INVALID_EMAIL: "auth/invalid-email",
  INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
  INVALID_IDP_RESPONSE: "auth/invalid-credential",
  INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
  INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
  INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
  INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
  INVALID_OOB_CODE: "auth/invalid-action-code",
  INVALID_ORIGIN: "auth/unauthorized-domain",
  INVALID_PASSWORD: "auth/wrong-password",
  INVALID_PERSISTENCE: "auth/invalid-persistence-type",
  INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
  INVALID_PROVIDER_ID: "auth/invalid-provider-id",
  INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
  INVALID_SENDER: "auth/invalid-sender",
  INVALID_SESSION_INFO: "auth/invalid-verification-id",
  INVALID_TENANT_ID: "auth/invalid-tenant-id",
  MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
  MFA_REQUIRED: "auth/multi-factor-auth-required",
  MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
  MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
  MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
  MISSING_CODE: "auth/missing-verification-code",
  MISSING_CONTINUE_URI: "auth/missing-continue-uri",
  MISSING_IFRAME_START: "auth/missing-iframe-start",
  MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
  MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
  MISSING_MFA_INFO: "auth/missing-multi-factor-info",
  MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
  MISSING_PHONE_NUMBER: "auth/missing-phone-number",
  MISSING_SESSION_INFO: "auth/missing-verification-id",
  MODULE_DESTROYED: "auth/app-deleted",
  NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
  NETWORK_REQUEST_FAILED: "auth/network-request-failed",
  NULL_USER: "auth/null-user",
  NO_AUTH_EVENT: "auth/no-auth-event",
  NO_SUCH_PROVIDER: "auth/no-such-provider",
  OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
  OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
  POPUP_BLOCKED: "auth/popup-blocked",
  POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
  PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
  QUOTA_EXCEEDED: "auth/quota-exceeded",
  REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
  REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
  REJECTED_CREDENTIAL: "auth/rejected-credential",
  SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
  TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
  TIMEOUT: "auth/timeout",
  TOKEN_EXPIRED: "auth/user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
  UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
  UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
  UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
  UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
  UNVERIFIED_EMAIL: "auth/unverified-email",
  USER_CANCELLED: "auth/user-cancelled",
  USER_DELETED: "auth/user-not-found",
  USER_DISABLED: "auth/user-disabled",
  USER_MISMATCH: "auth/user-mismatch",
  USER_SIGNED_OUT: "auth/user-signed-out",
  WEAK_PASSWORD: "auth/weak-password",
  WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
  ALREADY_INITIALIZED: "auth/already-initialized",
  RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "auth/missing-client-type",
  MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version",
  INVALID_REQ_TYPE: "auth/invalid-req-type"
};
var logClient = new import_logger.Logger("@firebase/auth");
function _logWarn(msg, ...args) {
  if (logClient.logLevel <= import_logger.LogLevel.WARN) {
    logClient.warn(`Auth (${import_app.SDK_VERSION}): ${msg}`, ...args);
  }
}
function _logError(msg, ...args) {
  if (logClient.logLevel <= import_logger.LogLevel.ERROR) {
    logClient.error(`Auth (${import_app.SDK_VERSION}): ${msg}`, ...args);
  }
}
function _fail(authOrCode, ...rest) {
  throw createErrorInternal(authOrCode, ...rest);
}
function _createError(authOrCode, ...rest) {
  return createErrorInternal(authOrCode, ...rest);
}
function _errorWithCustomMessage(auth, code, message) {
  const errorMap = Object.assign(Object.assign({}, prodErrorMap()), {
    [code]: message
  });
  const factory = new import_util.ErrorFactory("auth", "Firebase", errorMap);
  return factory.create(code, {
    appName: auth.name
  });
}
function _assertInstanceOf(auth, object, instance) {
  const constructorInstance = instance;
  if (!(object instanceof constructorInstance)) {
    if (constructorInstance.name !== object.constructor.name) {
      _fail(auth, "argument-error");
    }
    throw _errorWithCustomMessage(auth, "argument-error", `Type of ${object.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
  }
}
function createErrorInternal(authOrCode, ...rest) {
  if (typeof authOrCode !== "string") {
    const code = rest[0];
    const fullParams = [...rest.slice(1)];
    if (fullParams[0]) {
      fullParams[0].appName = authOrCode.name;
    }
    return authOrCode._errorFactory.create(code, ...fullParams);
  }
  return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
}
function _assert(assertion, authOrCode, ...rest) {
  if (!assertion) {
    throw createErrorInternal(authOrCode, ...rest);
  }
}
function debugFail(failure) {
  const message = `INTERNAL ASSERTION FAILED: ` + failure;
  _logError(message);
  throw new Error(message);
}
function debugAssert(assertion, message) {
  if (!assertion) {
    debugFail(message);
  }
}
function _getCurrentUrl() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || "";
}
function _isHttpOrHttps() {
  return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
}
function _getCurrentScheme() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
function _isOnline() {
  if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && (_isHttpOrHttps() || (0, import_util.isBrowserExtension)() || "connection" in navigator)) {
    return navigator.onLine;
  }
  return true;
}
function _getUserLanguage() {
  if (typeof navigator === "undefined") {
    return null;
  }
  const navigatorLanguage = navigator;
  return navigatorLanguage.languages && navigatorLanguage.languages[0] || navigatorLanguage.language || null;
}
var Delay = class {
  constructor(shortDelay, longDelay) {
    this.shortDelay = shortDelay;
    this.longDelay = longDelay;
    debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
    this.isMobile = (0, import_util.isMobileCordova)() || (0, import_util.isReactNative)();
  }
  get() {
    if (!_isOnline()) {
      return Math.min(5e3, this.shortDelay);
    }
    return this.isMobile ? this.longDelay : this.shortDelay;
  }
};
function _emulatorUrl(config, path) {
  debugAssert(config.emulator, "Emulator should always be set here");
  const {
    url
  } = config.emulator;
  if (!path) {
    return url;
  }
  return `${url}${path.startsWith("/") ? path.slice(1) : path}`;
}
var FetchProvider = class {
  static initialize(fetchImpl, headersImpl, responseImpl) {
    this.fetchImpl = fetchImpl;
    if (headersImpl) {
      this.headersImpl = headersImpl;
    }
    if (responseImpl) {
      this.responseImpl = responseImpl;
    }
  }
  static fetch() {
    if (this.fetchImpl) {
      return this.fetchImpl;
    }
    if (typeof self !== "undefined" && "fetch" in self) {
      return self.fetch;
    }
    debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl) {
      return this.headersImpl;
    }
    if (typeof self !== "undefined" && "Headers" in self) {
      return self.Headers;
    }
    debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl) {
      return this.responseImpl;
    }
    if (typeof self !== "undefined" && "Response" in self) {
      return self.Response;
    }
    debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
};
var SERVER_ERROR_MAP = {
  ["CREDENTIAL_MISMATCH"]: "custom-token-mismatch",
  ["MISSING_CUSTOM_TOKEN"]: "internal-error",
  ["INVALID_IDENTIFIER"]: "invalid-email",
  ["MISSING_CONTINUE_URI"]: "internal-error",
  ["INVALID_PASSWORD"]: "wrong-password",
  ["MISSING_PASSWORD"]: "missing-password",
  ["EMAIL_EXISTS"]: "email-already-in-use",
  ["PASSWORD_LOGIN_DISABLED"]: "operation-not-allowed",
  ["INVALID_IDP_RESPONSE"]: "invalid-credential",
  ["INVALID_PENDING_TOKEN"]: "invalid-credential",
  ["FEDERATED_USER_ID_ALREADY_LINKED"]: "credential-already-in-use",
  ["MISSING_REQ_TYPE"]: "internal-error",
  ["EMAIL_NOT_FOUND"]: "user-not-found",
  ["RESET_PASSWORD_EXCEED_LIMIT"]: "too-many-requests",
  ["EXPIRED_OOB_CODE"]: "expired-action-code",
  ["INVALID_OOB_CODE"]: "invalid-action-code",
  ["MISSING_OOB_CODE"]: "internal-error",
  ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]: "requires-recent-login",
  ["INVALID_ID_TOKEN"]: "invalid-user-token",
  ["TOKEN_EXPIRED"]: "user-token-expired",
  ["USER_NOT_FOUND"]: "user-token-expired",
  ["TOO_MANY_ATTEMPTS_TRY_LATER"]: "too-many-requests",
  ["INVALID_CODE"]: "invalid-verification-code",
  ["INVALID_SESSION_INFO"]: "invalid-verification-id",
  ["INVALID_TEMPORARY_PROOF"]: "invalid-credential",
  ["MISSING_SESSION_INFO"]: "missing-verification-id",
  ["SESSION_EXPIRED"]: "code-expired",
  ["MISSING_ANDROID_PACKAGE_NAME"]: "missing-android-pkg-name",
  ["UNAUTHORIZED_DOMAIN"]: "unauthorized-continue-uri",
  ["INVALID_OAUTH_CLIENT_ID"]: "invalid-oauth-client-id",
  ["ADMIN_ONLY_OPERATION"]: "admin-restricted-operation",
  ["INVALID_MFA_PENDING_CREDENTIAL"]: "invalid-multi-factor-session",
  ["MFA_ENROLLMENT_NOT_FOUND"]: "multi-factor-info-not-found",
  ["MISSING_MFA_ENROLLMENT_ID"]: "missing-multi-factor-info",
  ["MISSING_MFA_PENDING_CREDENTIAL"]: "missing-multi-factor-session",
  ["SECOND_FACTOR_EXISTS"]: "second-factor-already-in-use",
  ["SECOND_FACTOR_LIMIT_EXCEEDED"]: "maximum-second-factor-count-exceeded",
  ["BLOCKING_FUNCTION_ERROR_RESPONSE"]: "internal-error",
  ["RECAPTCHA_NOT_ENABLED"]: "recaptcha-not-enabled",
  ["MISSING_RECAPTCHA_TOKEN"]: "missing-recaptcha-token",
  ["INVALID_RECAPTCHA_TOKEN"]: "invalid-recaptcha-token",
  ["INVALID_RECAPTCHA_ACTION"]: "invalid-recaptcha-action",
  ["MISSING_CLIENT_TYPE"]: "missing-client-type",
  ["MISSING_RECAPTCHA_VERSION"]: "missing-recaptcha-version",
  ["INVALID_RECAPTCHA_VERSION"]: "invalid-recaptcha-version",
  ["INVALID_REQ_TYPE"]: "invalid-req-type"
};
var DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
function _addTidIfNecessary(auth, request) {
  if (auth.tenantId && !request.tenantId) {
    return Object.assign(Object.assign({}, request), {
      tenantId: auth.tenantId
    });
  }
  return request;
}
async function _performApiRequest(auth, method, path, request, customErrorMap = {}) {
  return _performFetchWithErrorHandling(auth, customErrorMap, async () => {
    let body = {};
    let params = {};
    if (request) {
      if (method === "GET") {
        params = request;
      } else {
        body = {
          body: JSON.stringify(request)
        };
      }
    }
    const query = (0, import_util.querystring)(Object.assign({
      key: auth.config.apiKey
    }, params)).slice(1);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"] = "application/json";
    if (auth.languageCode) {
      headers["X-Firebase-Locale"] = auth.languageCode;
    }
    return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), Object.assign({
      method,
      headers,
      referrerPolicy: "no-referrer"
    }, body));
  });
}
async function _performFetchWithErrorHandling(auth, customErrorMap, fetchFn) {
  auth._canInitEmulator = false;
  const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
  try {
    const networkTimeout = new NetworkTimeout(auth);
    const response = await Promise.race([fetchFn(), networkTimeout.promise]);
    networkTimeout.clearNetworkTimeout();
    const json = await response.json();
    if ("needConfirmation" in json) {
      throw _makeTaggedError(auth, "account-exists-with-different-credential", json);
    }
    if (response.ok && !("errorMessage" in json)) {
      return json;
    } else {
      const errorMessage = response.ok ? json.errorMessage : json.error.message;
      const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
      if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED") {
        throw _makeTaggedError(auth, "credential-already-in-use", json);
      } else if (serverErrorCode === "EMAIL_EXISTS") {
        throw _makeTaggedError(auth, "email-already-in-use", json);
      } else if (serverErrorCode === "USER_DISABLED") {
        throw _makeTaggedError(auth, "user-disabled", json);
      }
      const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
      if (serverErrorMessage) {
        throw _errorWithCustomMessage(auth, authError, serverErrorMessage);
      } else {
        _fail(auth, authError);
      }
    }
  } catch (e) {
    if (e instanceof import_util.FirebaseError) {
      throw e;
    }
    _fail(auth, "network-request-failed", {
      "message": String(e)
    });
  }
}
async function _performSignInRequest(auth, method, path, request, customErrorMap = {}) {
  const serverResponse = await _performApiRequest(auth, method, path, request, customErrorMap);
  if ("mfaPendingCredential" in serverResponse) {
    _fail(auth, "multi-factor-auth-required", {
      _serverResponse: serverResponse
    });
  }
  return serverResponse;
}
function _getFinalTarget(auth, host, path, query) {
  const base = `${host}${path}?${query}`;
  if (!auth.config.emulator) {
    return `${auth.config.apiScheme}://${base}`;
  }
  return _emulatorUrl(auth.config, base);
}
var NetworkTimeout = class {
  constructor(auth) {
    this.auth = auth;
    this.timer = null;
    this.promise = new Promise((_, reject) => {
      this.timer = setTimeout(() => {
        return reject(_createError(this.auth, "network-request-failed"));
      }, DEFAULT_API_TIMEOUT_MS.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
};
function _makeTaggedError(auth, code, response) {
  const errorParams = {
    appName: auth.name
  };
  if (response.email) {
    errorParams.email = response.email;
  }
  if (response.phoneNumber) {
    errorParams.phoneNumber = response.phoneNumber;
  }
  const error = _createError(auth, code, errorParams);
  error.customData._tokenResponse = response;
  return error;
}
async function deleteAccount(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:delete", request);
}
async function deleteLinkedAccounts(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function getAccountInfo(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:lookup", request);
}
function utcTimestampToDateString(utcTimestamp) {
  if (!utcTimestamp) {
    return void 0;
  }
  try {
    const date = new Date(Number(utcTimestamp));
    if (!isNaN(date.getTime())) {
      return date.toUTCString();
    }
  } catch (e) {}
  return void 0;
}
function getIdToken(user, forceRefresh = false) {
  return (0, import_util.getModularInstance)(user).getIdToken(forceRefresh);
}
async function getIdTokenResult(user, forceRefresh = false) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const token = await userInternal.getIdToken(forceRefresh);
  const claims = _parseToken(token);
  _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error");
  const firebase = typeof claims.firebase === "object" ? claims.firebase : void 0;
  const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_provider"];
  return {
    claims,
    token,
    authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
    issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
    expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
    signInProvider: signInProvider || null,
    signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_second_factor"]) || null
  };
}
function secondsStringToMilliseconds(seconds) {
  return Number(seconds) * 1e3;
}
function _parseToken(token) {
  const [algorithm, payload, signature] = token.split(".");
  if (algorithm === void 0 || payload === void 0 || signature === void 0) {
    _logError("JWT malformed, contained fewer than 3 sections");
    return null;
  }
  try {
    const decoded = (0, import_util.base64Decode)(payload);
    if (!decoded) {
      _logError("Failed to decode base64 JWT payload");
      return null;
    }
    return JSON.parse(decoded);
  } catch (e) {
    _logError("Caught error parsing JWT payload as JSON", e === null || e === void 0 ? void 0 : e.toString());
    return null;
  }
}
function _tokenExpiresIn(token) {
  const parsedToken = _parseToken(token);
  _assert(parsedToken, "internal-error");
  _assert(typeof parsedToken.exp !== "undefined", "internal-error");
  _assert(typeof parsedToken.iat !== "undefined", "internal-error");
  return Number(parsedToken.exp) - Number(parsedToken.iat);
}
async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
  if (bypassAuthState) {
    return promise;
  }
  try {
    return await promise;
  } catch (e) {
    if (e instanceof import_util.FirebaseError && isUserInvalidated(e)) {
      if (user.auth.currentUser === user) {
        await user.auth.signOut();
      }
    }
    throw e;
  }
}
function isUserInvalidated({
  code
}) {
  return code === `auth/${"user-disabled"}` || code === `auth/${"user-token-expired"}`;
}
var ProactiveRefresh = class {
  constructor(user) {
    this.user = user;
    this.isRunning = false;
    this.timerId = null;
    this.errorBackoff = 3e4;
  }
  _start() {
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    this.schedule();
  }
  _stop() {
    if (!this.isRunning) {
      return;
    }
    this.isRunning = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
    }
  }
  getInterval(wasError) {
    var _a;
    if (wasError) {
      const interval = this.errorBackoff;
      this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4);
      return interval;
    } else {
      this.errorBackoff = 3e4;
      const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
      const interval = expTime - Date.now() - 3e5;
      return Math.max(0, interval);
    }
  }
  schedule(wasError = false) {
    if (!this.isRunning) {
      return;
    }
    const interval = this.getInterval(wasError);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, interval);
  }
  async iteration() {
    try {
      await this.user.getIdToken(true);
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"network-request-failed"}`) {
        this.schedule(true);
      }
      return;
    }
    this.schedule();
  }
};
var UserMetadata = class {
  constructor(createdAt, lastLoginAt) {
    this.createdAt = createdAt;
    this.lastLoginAt = lastLoginAt;
    this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
    this.creationTime = utcTimestampToDateString(this.createdAt);
  }
  _copy(metadata) {
    this.createdAt = metadata.createdAt;
    this.lastLoginAt = metadata.lastLoginAt;
    this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
};
async function _reloadWithoutSaving(user) {
  var _a;
  const auth = user.auth;
  const idToken = await user.getIdToken();
  const response = await _logoutIfInvalidated(user, getAccountInfo(auth, {
    idToken
  }));
  _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error");
  const coreAccount = response.users[0];
  user._notifyReloadListener(coreAccount);
  const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
  const providerData = mergeProviderData(user.providerData, newProviderData);
  const oldIsAnonymous = user.isAnonymous;
  const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
  const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
  const updates = {
    uid: coreAccount.localId,
    displayName: coreAccount.displayName || null,
    photoURL: coreAccount.photoUrl || null,
    email: coreAccount.email || null,
    emailVerified: coreAccount.emailVerified || false,
    phoneNumber: coreAccount.phoneNumber || null,
    tenantId: coreAccount.tenantId || null,
    providerData,
    metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
    isAnonymous
  };
  Object.assign(user, updates);
}
async function reload(user) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _reloadWithoutSaving(userInternal);
  await userInternal.auth._persistUserIfCurrent(userInternal);
  userInternal.auth._notifyListenersIfCurrent(userInternal);
}
function mergeProviderData(original, newData) {
  const deduped = original.filter(o => !newData.some(n => n.providerId === o.providerId));
  return [...deduped, ...newData];
}
function extractProviderData(providers) {
  return providers.map(_a => {
    var {
        providerId
      } = _a,
      provider = (0, import_tslib.__rest)(_a, ["providerId"]);
    return {
      providerId,
      uid: provider.rawId || "",
      displayName: provider.displayName || null,
      email: provider.email || null,
      phoneNumber: provider.phoneNumber || null,
      photoURL: provider.photoUrl || null
    };
  });
}
async function requestStsToken(auth, refreshToken) {
  const response = await _performFetchWithErrorHandling(auth, {}, async () => {
    const body = (0, import_util.querystring)({
      "grant_type": "refresh_token",
      "refresh_token": refreshToken
    }).slice(1);
    const {
      tokenApiHost,
      apiKey
    } = auth.config;
    const url = _getFinalTarget(auth, tokenApiHost, "/v1/token", `key=${apiKey}`);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    return FetchProvider.fetch()(url, {
      method: "POST",
      headers,
      body
    });
  });
  return {
    accessToken: response.access_token,
    expiresIn: response.expires_in,
    refreshToken: response.refresh_token
  };
}
var StsTokenManager = class {
  constructor() {
    this.refreshToken = null;
    this.accessToken = null;
    this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(response) {
    _assert(response.idToken, "internal-error");
    _assert(typeof response.idToken !== "undefined", "internal-error");
    _assert(typeof response.refreshToken !== "undefined", "internal-error");
    const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
    this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
  }
  async getToken(auth, forceRefresh = false) {
    _assert(!this.accessToken || this.refreshToken, auth, "user-token-expired");
    if (!forceRefresh && this.accessToken && !this.isExpired) {
      return this.accessToken;
    }
    if (this.refreshToken) {
      await this.refresh(auth, this.refreshToken);
      return this.accessToken;
    }
    return null;
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(auth, oldToken) {
    const {
      accessToken,
      refreshToken,
      expiresIn
    } = await requestStsToken(auth, oldToken);
    this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
  }
  updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
    this.refreshToken = refreshToken || null;
    this.accessToken = accessToken || null;
    this.expirationTime = Date.now() + expiresInSec * 1e3;
  }
  static fromJSON(appName, object) {
    const {
      refreshToken,
      accessToken,
      expirationTime
    } = object;
    const manager = new StsTokenManager();
    if (refreshToken) {
      _assert(typeof refreshToken === "string", "internal-error", {
        appName
      });
      manager.refreshToken = refreshToken;
    }
    if (accessToken) {
      _assert(typeof accessToken === "string", "internal-error", {
        appName
      });
      manager.accessToken = accessToken;
    }
    if (expirationTime) {
      _assert(typeof expirationTime === "number", "internal-error", {
        appName
      });
      manager.expirationTime = expirationTime;
    }
    return manager;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(stsTokenManager) {
    this.accessToken = stsTokenManager.accessToken;
    this.refreshToken = stsTokenManager.refreshToken;
    this.expirationTime = stsTokenManager.expirationTime;
  }
  _clone() {
    return Object.assign(new StsTokenManager(), this.toJSON());
  }
  _performRefresh() {
    return debugFail("not implemented");
  }
};
function assertStringOrUndefined(assertion, appName) {
  _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error", {
    appName
  });
}
var UserImpl = class {
  constructor(_a) {
    var {
        uid,
        auth,
        stsTokenManager
      } = _a,
      opt = (0, import_tslib.__rest)(_a, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase";
    this.proactiveRefresh = new ProactiveRefresh(this);
    this.reloadUserInfo = null;
    this.reloadListener = null;
    this.uid = uid;
    this.auth = auth;
    this.stsTokenManager = stsTokenManager;
    this.accessToken = stsTokenManager.accessToken;
    this.displayName = opt.displayName || null;
    this.email = opt.email || null;
    this.emailVerified = opt.emailVerified || false;
    this.phoneNumber = opt.phoneNumber || null;
    this.photoURL = opt.photoURL || null;
    this.isAnonymous = opt.isAnonymous || false;
    this.tenantId = opt.tenantId || null;
    this.providerData = opt.providerData ? [...opt.providerData] : [];
    this.metadata = new UserMetadata(opt.createdAt || void 0, opt.lastLoginAt || void 0);
  }
  async getIdToken(forceRefresh) {
    const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
    _assert(accessToken, this.auth, "internal-error");
    if (this.accessToken !== accessToken) {
      this.accessToken = accessToken;
      await this.auth._persistUserIfCurrent(this);
      this.auth._notifyListenersIfCurrent(this);
    }
    return accessToken;
  }
  getIdTokenResult(forceRefresh) {
    return getIdTokenResult(this, forceRefresh);
  }
  reload() {
    return reload(this);
  }
  _assign(user) {
    if (this === user) {
      return;
    }
    _assert(this.uid === user.uid, this.auth, "internal-error");
    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
    this.email = user.email;
    this.emailVerified = user.emailVerified;
    this.phoneNumber = user.phoneNumber;
    this.isAnonymous = user.isAnonymous;
    this.tenantId = user.tenantId;
    this.providerData = user.providerData.map(userInfo => Object.assign({}, userInfo));
    this.metadata._copy(user.metadata);
    this.stsTokenManager._assign(user.stsTokenManager);
  }
  _clone(auth) {
    const newUser = new UserImpl(Object.assign(Object.assign({}, this), {
      auth,
      stsTokenManager: this.stsTokenManager._clone()
    }));
    newUser.metadata._copy(this.metadata);
    return newUser;
  }
  _onReload(callback) {
    _assert(!this.reloadListener, this.auth, "internal-error");
    this.reloadListener = callback;
    if (this.reloadUserInfo) {
      this._notifyReloadListener(this.reloadUserInfo);
      this.reloadUserInfo = null;
    }
  }
  _notifyReloadListener(userInfo) {
    if (this.reloadListener) {
      this.reloadListener(userInfo);
    } else {
      this.reloadUserInfo = userInfo;
    }
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(response, reload2 = false) {
    let tokensRefreshed = false;
    if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
      this.stsTokenManager.updateFromServerResponse(response);
      tokensRefreshed = true;
    }
    if (reload2) {
      await _reloadWithoutSaving(this);
    }
    await this.auth._persistUserIfCurrent(this);
    if (tokensRefreshed) {
      this.auth._notifyListenersIfCurrent(this);
    }
  }
  async delete() {
    const idToken = await this.getIdToken();
    await _logoutIfInvalidated(this, deleteAccount(this.auth, {
      idToken
    }));
    this.stsTokenManager.clearRefreshToken();
    return this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map(userInfo => Object.assign({}, userInfo)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(auth, object) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : void 0;
    const email = (_b = object.email) !== null && _b !== void 0 ? _b : void 0;
    const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : void 0;
    const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : void 0;
    const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : void 0;
    const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : void 0;
    const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : void 0;
    const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : void 0;
    const {
      uid,
      emailVerified,
      isAnonymous,
      providerData,
      stsTokenManager: plainObjectTokenManager
    } = object;
    _assert(uid && plainObjectTokenManager, auth, "internal-error");
    const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
    _assert(typeof uid === "string", auth, "internal-error");
    assertStringOrUndefined(displayName, auth.name);
    assertStringOrUndefined(email, auth.name);
    _assert(typeof emailVerified === "boolean", auth, "internal-error");
    _assert(typeof isAnonymous === "boolean", auth, "internal-error");
    assertStringOrUndefined(phoneNumber, auth.name);
    assertStringOrUndefined(photoURL, auth.name);
    assertStringOrUndefined(tenantId, auth.name);
    assertStringOrUndefined(_redirectEventId, auth.name);
    assertStringOrUndefined(createdAt, auth.name);
    assertStringOrUndefined(lastLoginAt, auth.name);
    const user = new UserImpl({
      uid,
      auth,
      email,
      emailVerified,
      displayName,
      isAnonymous,
      photoURL,
      phoneNumber,
      tenantId,
      stsTokenManager,
      createdAt,
      lastLoginAt
    });
    if (providerData && Array.isArray(providerData)) {
      user.providerData = providerData.map(userInfo => Object.assign({}, userInfo));
    }
    if (_redirectEventId) {
      user._redirectEventId = _redirectEventId;
    }
    return user;
  }
  static async _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromServerResponse(idTokenResponse);
    const user = new UserImpl({
      uid: idTokenResponse.localId,
      auth,
      stsTokenManager,
      isAnonymous
    });
    await _reloadWithoutSaving(user);
    return user;
  }
};
var instanceCache = /* @__PURE__ */new Map();
function _getInstance(cls) {
  debugAssert(cls instanceof Function, "Expected a class definition");
  let instance = instanceCache.get(cls);
  if (instance) {
    debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
    return instance;
  }
  instance = new cls();
  instanceCache.set(cls, instance);
  return instance;
}
var InMemoryPersistence = class {
  constructor() {
    this.type = "NONE";
    this.storage = {};
  }
  async _isAvailable() {
    return true;
  }
  async _set(key, value) {
    this.storage[key] = value;
  }
  async _get(key) {
    const value = this.storage[key];
    return value === void 0 ? null : value;
  }
  async _remove(key) {
    delete this.storage[key];
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
};
InMemoryPersistence.type = "NONE";
var inMemoryPersistence = InMemoryPersistence;
function _persistenceKeyName(key, apiKey, appName) {
  return `${"firebase"}:${key}:${apiKey}:${appName}`;
}
var PersistenceUserManager = class {
  constructor(persistence, auth, userKey) {
    this.persistence = persistence;
    this.auth = auth;
    this.userKey = userKey;
    const {
      config,
      name: name2
    } = this.auth;
    this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name2);
    this.fullPersistenceKey = _persistenceKeyName("persistence", config.apiKey, name2);
    this.boundEventHandler = auth._onStorageEvent.bind(auth);
    this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(user) {
    return this.persistence._set(this.fullUserKey, user.toJSON());
  }
  async getCurrentUser() {
    const blob = await this.persistence._get(this.fullUserKey);
    return blob ? UserImpl._fromJSON(this.auth, blob) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(newPersistence) {
    if (this.persistence === newPersistence) {
      return;
    }
    const currentUser = await this.getCurrentUser();
    await this.removeCurrentUser();
    this.persistence = newPersistence;
    if (currentUser) {
      return this.setCurrentUser(currentUser);
    }
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(auth, persistenceHierarchy, userKey = "authUser") {
    if (!persistenceHierarchy.length) {
      return new PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
    }
    const availablePersistences = (await Promise.all(persistenceHierarchy.map(async persistence => {
      if (await persistence._isAvailable()) {
        return persistence;
      }
      return void 0;
    }))).filter(persistence => persistence);
    let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
    const key = _persistenceKeyName(userKey, auth.config.apiKey, auth.name);
    let userToMigrate = null;
    for (const persistence of persistenceHierarchy) {
      try {
        const blob = await persistence._get(key);
        if (blob) {
          const user = UserImpl._fromJSON(auth, blob);
          if (persistence !== selectedPersistence) {
            userToMigrate = user;
          }
          selectedPersistence = persistence;
          break;
        }
      } catch (_a) {}
    }
    const migrationHierarchy = availablePersistences.filter(p => p._shouldAllowMigration);
    if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
      return new PersistenceUserManager(selectedPersistence, auth, userKey);
    }
    selectedPersistence = migrationHierarchy[0];
    if (userToMigrate) {
      await selectedPersistence._set(key, userToMigrate.toJSON());
    }
    await Promise.all(persistenceHierarchy.map(async persistence => {
      if (persistence !== selectedPersistence) {
        try {
          await persistence._remove(key);
        } catch (_a) {}
      }
    }));
    return new PersistenceUserManager(selectedPersistence, auth, userKey);
  }
};
function _getBrowserName(userAgent) {
  const ua = userAgent.toLowerCase();
  if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) {
    return "Opera";
  } else if (_isIEMobile(ua)) {
    return "IEMobile";
  } else if (ua.includes("msie") || ua.includes("trident/")) {
    return "IE";
  } else if (ua.includes("edge/")) {
    return "Edge";
  } else if (_isFirefox(ua)) {
    return "Firefox";
  } else if (ua.includes("silk/")) {
    return "Silk";
  } else if (_isBlackBerry(ua)) {
    return "Blackberry";
  } else if (_isWebOS(ua)) {
    return "Webos";
  } else if (_isSafari(ua)) {
    return "Safari";
  } else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) {
    return "Chrome";
  } else if (_isAndroid(ua)) {
    return "Android";
  } else {
    const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
    const matches = userAgent.match(re);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
      return matches[1];
    }
  }
  return "Other";
}
function _isFirefox(ua = (0, import_util.getUA)()) {
  return /firefox\//i.test(ua);
}
function _isSafari(userAgent = (0, import_util.getUA)()) {
  const ua = userAgent.toLowerCase();
  return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
}
function _isChromeIOS(ua = (0, import_util.getUA)()) {
  return /crios\//i.test(ua);
}
function _isIEMobile(ua = (0, import_util.getUA)()) {
  return /iemobile/i.test(ua);
}
function _isAndroid(ua = (0, import_util.getUA)()) {
  return /android/i.test(ua);
}
function _isBlackBerry(ua = (0, import_util.getUA)()) {
  return /blackberry/i.test(ua);
}
function _isWebOS(ua = (0, import_util.getUA)()) {
  return /webos/i.test(ua);
}
function _isIOS(ua = (0, import_util.getUA)()) {
  return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
}
function _isIOS7Or8(ua = (0, import_util.getUA)()) {
  return /(iPad|iPhone|iPod).*OS 7_\d/i.test(ua) || /(iPad|iPhone|iPod).*OS 8_\d/i.test(ua);
}
function _isIOSStandalone(ua = (0, import_util.getUA)()) {
  var _a;
  return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
}
function _isIE10() {
  return (0, import_util.isIE)() && document.documentMode === 10;
}
function _isMobileBrowser(ua = (0, import_util.getUA)()) {
  return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
}
function _isIframe() {
  try {
    return !!(window && window !== window.top);
  } catch (e) {
    return false;
  }
}
function _getClientVersion(clientPlatform, frameworks = []) {
  let reportedPlatform;
  switch (clientPlatform) {
    case "Browser":
      reportedPlatform = _getBrowserName((0, import_util.getUA)());
      break;
    case "Worker":
      reportedPlatform = `${_getBrowserName((0, import_util.getUA)())}-${clientPlatform}`;
      break;
    default:
      reportedPlatform = clientPlatform;
  }
  const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web";
  return `${reportedPlatform}/${"JsCore"}/${import_app.SDK_VERSION}/${reportedFrameworks}`;
}
async function getRecaptchaParams(auth) {
  return (await _performApiRequest(auth, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || "";
}
async function getRecaptchaConfig(auth, request) {
  return _performApiRequest(auth, "GET", "/v2/recaptchaConfig", _addTidIfNecessary(auth, request));
}
function isV2(grecaptcha) {
  return grecaptcha !== void 0 && grecaptcha.getResponse !== void 0;
}
function isEnterprise(grecaptcha) {
  return grecaptcha !== void 0 && grecaptcha.enterprise !== void 0;
}
var RecaptchaConfig = class {
  constructor(response) {
    this.siteKey = "";
    this.emailPasswordEnabled = false;
    if (response.recaptchaKey === void 0) {
      throw new Error("recaptchaKey undefined");
    }
    this.siteKey = response.recaptchaKey.split("/")[3];
    this.emailPasswordEnabled = response.recaptchaEnforcementState.some(enforcementState => enforcementState.provider === "EMAIL_PASSWORD_PROVIDER" && enforcementState.enforcementState !== "OFF");
  }
};
function getScriptParentElement() {
  var _a, _b;
  return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}
function _loadJS(url) {
  return new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.setAttribute("src", url);
    el.onload = resolve;
    el.onerror = e => {
      const error = _createError("internal-error");
      error.customData = e;
      reject(error);
    };
    el.type = "text/javascript";
    el.charset = "UTF-8";
    getScriptParentElement().appendChild(el);
  });
}
function _generateCallbackName(prefix) {
  return `__${prefix}${Math.floor(Math.random() * 1e6)}`;
}
var RECAPTCHA_ENTERPRISE_URL = "https://www.google.com/recaptcha/enterprise.js?render=";
var RECAPTCHA_ENTERPRISE_VERIFIER_TYPE = "recaptcha-enterprise";
var FAKE_TOKEN = "NO_RECAPTCHA";
var RecaptchaEnterpriseVerifier = class {
  constructor(authExtern) {
    this.type = RECAPTCHA_ENTERPRISE_VERIFIER_TYPE;
    this.auth = _castAuth(authExtern);
  }
  async verify(action = "verify", forceRefresh = false) {
    async function retrieveSiteKey(auth) {
      if (!forceRefresh) {
        if (auth.tenantId == null && auth._agentRecaptchaConfig != null) {
          return auth._agentRecaptchaConfig.siteKey;
        }
        if (auth.tenantId != null && auth._tenantRecaptchaConfigs[auth.tenantId] !== void 0) {
          return auth._tenantRecaptchaConfigs[auth.tenantId].siteKey;
        }
      }
      return new Promise(async (resolve, reject) => {
        getRecaptchaConfig(auth, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
        }).then(response => {
          if (response.recaptchaKey === void 0) {
            reject(new Error("recaptcha Enterprise site key undefined"));
          } else {
            const config = new RecaptchaConfig(response);
            if (auth.tenantId == null) {
              auth._agentRecaptchaConfig = config;
            } else {
              auth._tenantRecaptchaConfigs[auth.tenantId] = config;
            }
            return resolve(config.siteKey);
          }
        }).catch(error => {
          reject(error);
        });
      });
    }
    function retrieveRecaptchaToken(siteKey, resolve, reject) {
      const grecaptcha = window.grecaptcha;
      if (isEnterprise(grecaptcha)) {
        grecaptcha.enterprise.ready(() => {
          grecaptcha.enterprise.execute(siteKey, {
            action
          }).then(token => {
            resolve(token);
          }).catch(() => {
            resolve(FAKE_TOKEN);
          });
        });
      } else {
        reject(Error("No reCAPTCHA enterprise script loaded."));
      }
    }
    return new Promise((resolve, reject) => {
      retrieveSiteKey(this.auth).then(siteKey => {
        if (!forceRefresh && isEnterprise(window.grecaptcha)) {
          retrieveRecaptchaToken(siteKey, resolve, reject);
        } else {
          if (typeof window === "undefined") {
            reject(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          _loadJS(RECAPTCHA_ENTERPRISE_URL + siteKey).then(() => {
            retrieveRecaptchaToken(siteKey, resolve, reject);
          }).catch(error => {
            reject(error);
          });
        }
      }).catch(error => {
        reject(error);
      });
    });
  }
};
async function injectRecaptchaFields(auth, request, action, captchaResp = false) {
  const verifier = new RecaptchaEnterpriseVerifier(auth);
  let captchaResponse;
  try {
    captchaResponse = await verifier.verify(action);
  } catch (error) {
    captchaResponse = await verifier.verify(action, true);
  }
  const newRequest = Object.assign({}, request);
  if (!captchaResp) {
    Object.assign(newRequest, {
      captchaResponse
    });
  } else {
    Object.assign(newRequest, {
      "captchaResp": captchaResponse
    });
  }
  Object.assign(newRequest, {
    "clientType": "CLIENT_TYPE_WEB"
  });
  Object.assign(newRequest, {
    "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
  });
  return newRequest;
}
var AuthMiddlewareQueue = class {
  constructor(auth) {
    this.auth = auth;
    this.queue = [];
  }
  pushCallback(callback, onAbort) {
    const wrappedCallback = user => new Promise((resolve, reject) => {
      try {
        const result = callback(user);
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
    wrappedCallback.onAbort = onAbort;
    this.queue.push(wrappedCallback);
    const index = this.queue.length - 1;
    return () => {
      this.queue[index] = () => Promise.resolve();
    };
  }
  async runMiddleware(nextUser) {
    if (this.auth.currentUser === nextUser) {
      return;
    }
    const onAbortStack = [];
    try {
      for (const beforeStateCallback of this.queue) {
        await beforeStateCallback(nextUser);
        if (beforeStateCallback.onAbort) {
          onAbortStack.push(beforeStateCallback.onAbort);
        }
      }
    } catch (e) {
      onAbortStack.reverse();
      for (const onAbort of onAbortStack) {
        try {
          onAbort();
        } catch (_) {}
      }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: e === null || e === void 0 ? void 0 : e.message
      });
    }
  }
};
var AuthImpl = class {
  constructor(app, heartbeatServiceProvider, appCheckServiceProvider, config) {
    this.app = app;
    this.heartbeatServiceProvider = heartbeatServiceProvider;
    this.appCheckServiceProvider = appCheckServiceProvider;
    this.config = config;
    this.currentUser = null;
    this.emulatorConfig = null;
    this.operations = Promise.resolve();
    this.authStateSubscription = new Subscription(this);
    this.idTokenSubscription = new Subscription(this);
    this.beforeStateQueue = new AuthMiddlewareQueue(this);
    this.redirectUser = null;
    this.isProactiveRefreshEnabled = false;
    this._canInitEmulator = true;
    this._isInitialized = false;
    this._deleted = false;
    this._initializationPromise = null;
    this._popupRedirectResolver = null;
    this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
    this._agentRecaptchaConfig = null;
    this._tenantRecaptchaConfigs = {};
    this.lastNotifiedUid = void 0;
    this.languageCode = null;
    this.tenantId = null;
    this.settings = {
      appVerificationDisabledForTesting: false
    };
    this.frameworks = [];
    this.name = app.name;
    this.clientVersion = config.sdkClientVersion;
  }
  _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
    if (popupRedirectResolver) {
      this._popupRedirectResolver = _getInstance(popupRedirectResolver);
    }
    this._initializationPromise = this.queue(async () => {
      var _a, _b;
      if (this._deleted) {
        return;
      }
      this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
      if (this._deleted) {
        return;
      }
      if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) {
        try {
          await this._popupRedirectResolver._initialize(this);
        } catch (e) {}
      }
      await this.initializeCurrentUser(popupRedirectResolver);
      this.lastNotifiedUid = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;
      if (this._deleted) {
        return;
      }
      this._isInitialized = true;
    });
    return this._initializationPromise;
  }
  async _onStorageEvent() {
    if (this._deleted) {
      return;
    }
    const user = await this.assertedPersistence.getCurrentUser();
    if (!this.currentUser && !user) {
      return;
    }
    if (this.currentUser && user && this.currentUser.uid === user.uid) {
      this._currentUser._assign(user);
      await this.currentUser.getIdToken();
      return;
    }
    await this._updateCurrentUser(user, true);
  }
  async initializeCurrentUser(popupRedirectResolver) {
    var _a;
    const previouslyStoredUser = await this.assertedPersistence.getCurrentUser();
    let futureCurrentUser = previouslyStoredUser;
    let needsTocheckMiddleware = false;
    if (popupRedirectResolver && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
      const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
      const result = await this.tryRedirectSignIn(popupRedirectResolver);
      if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
        futureCurrentUser = result.user;
        needsTocheckMiddleware = true;
      }
    }
    if (!futureCurrentUser) {
      return this.directlySetCurrentUser(null);
    }
    if (!futureCurrentUser._redirectEventId) {
      if (needsTocheckMiddleware) {
        try {
          await this.beforeStateQueue.runMiddleware(futureCurrentUser);
        } catch (e) {
          futureCurrentUser = previouslyStoredUser;
          this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e));
        }
      }
      if (futureCurrentUser) {
        return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
      } else {
        return this.directlySetCurrentUser(null);
      }
    }
    _assert(this._popupRedirectResolver, this, "argument-error");
    await this.getOrInitRedirectPersistenceManager();
    if (this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
      return this.directlySetCurrentUser(futureCurrentUser);
    }
    return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
  }
  async tryRedirectSignIn(redirectResolver) {
    let result = null;
    try {
      result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
    } catch (e) {
      await this._setRedirectUser(null);
    }
    return result;
  }
  async reloadAndSetCurrentUserOrClear(user) {
    try {
      await _reloadWithoutSaving(user);
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.code) !== `auth/${"network-request-failed"}`) {
        return this.directlySetCurrentUser(null);
      }
    }
    return this.directlySetCurrentUser(user);
  }
  useDeviceLanguage() {
    this.languageCode = _getUserLanguage();
  }
  async _delete() {
    this._deleted = true;
  }
  async updateCurrentUser(userExtern) {
    const user = userExtern ? (0, import_util.getModularInstance)(userExtern) : null;
    if (user) {
      _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token");
    }
    return this._updateCurrentUser(user && user._clone(this));
  }
  async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
    if (this._deleted) {
      return;
    }
    if (user) {
      _assert(this.tenantId === user.tenantId, this, "tenant-id-mismatch");
    }
    if (!skipBeforeStateCallbacks) {
      await this.beforeStateQueue.runMiddleware(user);
    }
    return this.queue(async () => {
      await this.directlySetCurrentUser(user);
      this.notifyAuthListeners();
    });
  }
  async signOut() {
    await this.beforeStateQueue.runMiddleware(null);
    if (this.redirectPersistenceManager || this._popupRedirectResolver) {
      await this._setRedirectUser(null);
    }
    return this._updateCurrentUser(null, true);
  }
  setPersistence(persistence) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(_getInstance(persistence));
    });
  }
  async initializeRecaptchaConfig() {
    const response = await getRecaptchaConfig(this, {
      clientType: "CLIENT_TYPE_WEB",
      version: "RECAPTCHA_ENTERPRISE"
    });
    const config = new RecaptchaConfig(response);
    if (this.tenantId == null) {
      this._agentRecaptchaConfig = config;
    } else {
      this._tenantRecaptchaConfigs[this.tenantId] = config;
    }
    if (config.emailPasswordEnabled) {
      const verifier = new RecaptchaEnterpriseVerifier(this);
      void verifier.verify();
    }
  }
  _getRecaptchaConfig() {
    if (this.tenantId == null) {
      return this._agentRecaptchaConfig;
    } else {
      return this._tenantRecaptchaConfigs[this.tenantId];
    }
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(errorMap) {
    this._errorFactory = new import_util.ErrorFactory("auth", "Firebase", errorMap());
  }
  onAuthStateChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
  }
  beforeAuthStateChanged(callback, onAbort) {
    return this.beforeStateQueue.pushCallback(callback, onAbort);
  }
  onIdTokenChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
  }
  authStateReady() {
    return new Promise((resolve, reject) => {
      if (this.currentUser) {
        resolve();
      } else {
        const unsubscribe = this.onAuthStateChanged(() => {
          unsubscribe();
          resolve();
        }, reject);
      }
    });
  }
  toJSON() {
    var _a;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
    };
  }
  async _setRedirectUser(user, popupRedirectResolver) {
    const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
    return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
  }
  async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
    if (!this.redirectPersistenceManager) {
      const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
      _assert(resolver, this, "argument-error");
      this.redirectPersistenceManager = await PersistenceUserManager.create(this, [_getInstance(resolver._redirectPersistence)], "redirectUser");
      this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(id) {
    var _a, _b;
    if (this._isInitialized) {
      await this.queue(async () => {});
    }
    if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
      return this._currentUser;
    }
    if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
      return this.redirectUser;
    }
    return null;
  }
  async _persistUserIfCurrent(user) {
    if (user === this.currentUser) {
      return this.queue(async () => this.directlySetCurrentUser(user));
    }
  }
  _notifyListenersIfCurrent(user) {
    if (user === this.currentUser) {
      this.notifyAuthListeners();
    }
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = true;
    if (this.currentUser) {
      this._currentUser._startProactiveRefresh();
    }
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = false;
    if (this.currentUser) {
      this._currentUser._stopProactiveRefresh();
    }
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var _a, _b;
    if (!this._isInitialized) {
      return;
    }
    this.idTokenSubscription.next(this.currentUser);
    const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
    if (this.lastNotifiedUid !== currentUid) {
      this.lastNotifiedUid = currentUid;
      this.authStateSubscription.next(this.currentUser);
    }
  }
  registerStateListener(subscription, nextOrObserver, error, completed) {
    if (this._deleted) {
      return () => {};
    }
    const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
    const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    _assert(promise, this, "internal-error");
    promise.then(() => cb(this.currentUser));
    if (typeof nextOrObserver === "function") {
      return subscription.addObserver(nextOrObserver, error, completed);
    } else {
      return subscription.addObserver(nextOrObserver);
    }
  }
  async directlySetCurrentUser(user) {
    if (this.currentUser && this.currentUser !== user) {
      this._currentUser._stopProactiveRefresh();
    }
    if (user && this.isProactiveRefreshEnabled) {
      user._startProactiveRefresh();
    }
    this.currentUser = user;
    if (user) {
      await this.assertedPersistence.setCurrentUser(user);
    } else {
      await this.assertedPersistence.removeCurrentUser();
    }
  }
  queue(action) {
    this.operations = this.operations.then(action, action);
    return this.operations;
  }
  get assertedPersistence() {
    _assert(this.persistenceManager, this, "internal-error");
    return this.persistenceManager;
  }
  _logFramework(framework) {
    if (!framework || this.frameworks.includes(framework)) {
      return;
    }
    this.frameworks.push(framework);
    this.frameworks.sort();
    this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var _a;
    const headers = {
      ["X-Client-Version"]: this.clientVersion
    };
    if (this.app.options.appId) {
      headers["X-Firebase-gmpid"] = this.app.options.appId;
    }
    const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
      optional: true
    })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
    if (heartbeatsHeader) {
      headers["X-Firebase-Client"] = heartbeatsHeader;
    }
    const appCheckToken = await this._getAppCheckToken();
    if (appCheckToken) {
      headers["X-Firebase-AppCheck"] = appCheckToken;
    }
    return headers;
  }
  async _getAppCheckToken() {
    var _a;
    const appCheckTokenResult = await ((_a = this.appCheckServiceProvider.getImmediate({
      optional: true
    })) === null || _a === void 0 ? void 0 : _a.getToken());
    if (appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.error) {
      _logWarn(`Error while retrieving App Check token: ${appCheckTokenResult.error}`);
    }
    return appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.token;
  }
};
function _castAuth(auth) {
  return (0, import_util.getModularInstance)(auth);
}
var Subscription = class {
  constructor(auth) {
    this.auth = auth;
    this.observer = null;
    this.addObserver = (0, import_util.createSubscribe)(observer => this.observer = observer);
  }
  get next() {
    _assert(this.observer, this.auth, "internal-error");
    return this.observer.next.bind(this.observer);
  }
};
function initializeAuth(app, deps) {
  const provider = (0, import_app._getProvider)(app, "auth");
  if (provider.isInitialized()) {
    const auth2 = provider.getImmediate();
    const initialOptions = provider.getOptions();
    if ((0, import_util.deepEqual)(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
      return auth2;
    } else {
      _fail(auth2, "already-initialized");
    }
  }
  const auth = provider.initialize({
    options: deps
  });
  return auth;
}
function _initializeAuthInstance(auth, deps) {
  const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
  const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
  if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
    auth._updateErrorMap(deps.errorMap);
  }
  auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
}
function connectAuthEmulator(auth, url, options) {
  const authInternal = _castAuth(auth);
  _assert(authInternal._canInitEmulator, authInternal, "emulator-config-failed");
  _assert(/^https?:\/\//.test(url), authInternal, "invalid-emulator-scheme");
  const disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
  const protocol = extractProtocol(url);
  const {
    host,
    port
  } = extractHostAndPort(url);
  const portStr = port === null ? "" : `:${port}`;
  authInternal.config.emulator = {
    url: `${protocol}//${host}${portStr}/`
  };
  authInternal.settings.appVerificationDisabledForTesting = true;
  authInternal.emulatorConfig = Object.freeze({
    host,
    port,
    protocol: protocol.replace(":", ""),
    options: Object.freeze({
      disableWarnings
    })
  });
  if (!disableWarnings) {
    emitEmulatorWarning();
  }
}
function extractProtocol(url) {
  const protocolEnd = url.indexOf(":");
  return protocolEnd < 0 ? "" : url.substr(0, protocolEnd + 1);
}
function extractHostAndPort(url) {
  const protocol = extractProtocol(url);
  const authority = /(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length));
  if (!authority) {
    return {
      host: "",
      port: null
    };
  }
  const hostAndPort = authority[2].split("@").pop() || "";
  const bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);
  if (bracketedIPv6) {
    const host = bracketedIPv6[1];
    return {
      host,
      port: parsePort(hostAndPort.substr(host.length + 1))
    };
  } else {
    const [host, port] = hostAndPort.split(":");
    return {
      host,
      port: parsePort(port)
    };
  }
}
function parsePort(portStr) {
  if (!portStr) {
    return null;
  }
  const port = Number(portStr);
  if (isNaN(port)) {
    return null;
  }
  return port;
}
function emitEmulatorWarning() {
  function attachBanner() {
    const el = document.createElement("p");
    const sty = el.style;
    el.innerText = "Running in emulator mode. Do not use with production credentials.";
    sty.position = "fixed";
    sty.width = "100%";
    sty.backgroundColor = "#ffffff";
    sty.border = ".1em solid #000000";
    sty.color = "#b50000";
    sty.bottom = "0px";
    sty.left = "0px";
    sty.margin = "0px";
    sty.zIndex = "10000";
    sty.textAlign = "center";
    el.classList.add("firebase-emulator-warning");
    document.body.appendChild(el);
  }
  if (typeof console !== "undefined" && typeof console.info === "function") {
    console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
  }
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    if (document.readyState === "loading") {
      window.addEventListener("DOMContentLoaded", attachBanner);
    } else {
      attachBanner();
    }
  }
}
var AuthCredential = class {
  constructor(providerId, signInMethod) {
    this.providerId = providerId;
    this.signInMethod = signInMethod;
  }
  toJSON() {
    return debugFail("not implemented");
  }
  _getIdTokenResponse(_auth) {
    return debugFail("not implemented");
  }
  _linkToIdToken(_auth, _idToken) {
    return debugFail("not implemented");
  }
  _getReauthenticationResolver(_auth) {
    return debugFail("not implemented");
  }
};
async function resetPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:resetPassword", _addTidIfNecessary(auth, request));
}
async function updateEmailPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function applyActionCode$1(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", _addTidIfNecessary(auth, request));
}
async function signInWithPassword(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth, request));
}
async function sendOobCode(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:sendOobCode", _addTidIfNecessary(auth, request));
}
async function sendEmailVerification$1(auth, request) {
  return sendOobCode(auth, request);
}
async function sendPasswordResetEmail$1(auth, request) {
  return sendOobCode(auth, request);
}
async function sendSignInLinkToEmail$1(auth, request) {
  return sendOobCode(auth, request);
}
async function verifyAndChangeEmail(auth, request) {
  return sendOobCode(auth, request);
}
async function signInWithEmailLink$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
async function signInWithEmailLinkForLinking(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
var EmailAuthCredential = class extends AuthCredential {
  constructor(_email, _password, signInMethod, _tenantId = null) {
    super("password", signInMethod);
    this._email = _email;
    this._password = _password;
    this._tenantId = _tenantId;
  }
  static _fromEmailAndPassword(email, password) {
    return new EmailAuthCredential(email, password, "password");
  }
  static _fromEmailAndCode(email, oobCode, tenantId = null) {
    return new EmailAuthCredential(email, oobCode, "emailLink", tenantId);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
      if (obj.signInMethod === "password") {
        return this._fromEmailAndPassword(obj.email, obj.password);
      } else if (obj.signInMethod === "emailLink") {
        return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
      }
    }
    return null;
  }
  async _getIdTokenResponse(auth) {
    var _a;
    switch (this.signInMethod) {
      case "password":
        const request = {
          returnSecureToken: true,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
        };
        if ((_a = auth._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
          const requestWithRecaptcha = await injectRecaptchaFields(auth, request, "signInWithPassword");
          return signInWithPassword(auth, requestWithRecaptcha);
        } else {
          return signInWithPassword(auth, request).catch(async error => {
            if (error.code === `auth/${"missing-recaptcha-token"}`) {
              console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const requestWithRecaptcha = await injectRecaptchaFields(auth, request, "signInWithPassword");
              return signInWithPassword(auth, requestWithRecaptcha);
            } else {
              return Promise.reject(error);
            }
          });
        }
      case "emailLink":
        return signInWithEmailLink$1(auth, {
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error");
    }
  }
  async _linkToIdToken(auth, idToken) {
    switch (this.signInMethod) {
      case "password":
        return updateEmailPassword(auth, {
          idToken,
          returnSecureToken: true,
          email: this._email,
          password: this._password
        });
      case "emailLink":
        return signInWithEmailLinkForLinking(auth, {
          idToken,
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error");
    }
  }
  _getReauthenticationResolver(auth) {
    return this._getIdTokenResponse(auth);
  }
};
async function signInWithIdp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth, request));
}
var IDP_REQUEST_URI$1 = "http://localhost";
var OAuthCredential = class extends AuthCredential {
  constructor() {
    super(...arguments);
    this.pendingToken = null;
  }
  static _fromParams(params) {
    const cred = new OAuthCredential(params.providerId, params.signInMethod);
    if (params.idToken || params.accessToken) {
      if (params.idToken) {
        cred.idToken = params.idToken;
      }
      if (params.accessToken) {
        cred.accessToken = params.accessToken;
      }
      if (params.nonce && !params.pendingToken) {
        cred.nonce = params.nonce;
      }
      if (params.pendingToken) {
        cred.pendingToken = params.pendingToken;
      }
    } else if (params.oauthToken && params.oauthTokenSecret) {
      cred.accessToken = params.oauthToken;
      cred.secret = params.oauthTokenSecret;
    } else {
      _fail("argument-error");
    }
    return cred;
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    const {
        providerId,
        signInMethod
      } = obj,
      rest = (0, import_tslib.__rest)(obj, ["providerId", "signInMethod"]);
    if (!providerId || !signInMethod) {
      return null;
    }
    const cred = new OAuthCredential(providerId, signInMethod);
    cred.idToken = rest.idToken || void 0;
    cred.accessToken = rest.accessToken || void 0;
    cred.secret = rest.secret;
    cred.nonce = rest.nonce;
    cred.pendingToken = rest.pendingToken || null;
    return cred;
  }
  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  _getReauthenticationResolver(auth) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }
  buildRequest() {
    const request = {
      requestUri: IDP_REQUEST_URI$1,
      returnSecureToken: true
    };
    if (this.pendingToken) {
      request.pendingToken = this.pendingToken;
    } else {
      const postBody = {};
      if (this.idToken) {
        postBody["id_token"] = this.idToken;
      }
      if (this.accessToken) {
        postBody["access_token"] = this.accessToken;
      }
      if (this.secret) {
        postBody["oauth_token_secret"] = this.secret;
      }
      postBody["providerId"] = this.providerId;
      if (this.nonce && !this.pendingToken) {
        postBody["nonce"] = this.nonce;
      }
      request.postBody = (0, import_util.querystring)(postBody);
    }
    return request;
  }
};
async function sendPhoneVerificationCode(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:sendVerificationCode", _addTidIfNecessary(auth, request));
}
async function signInWithPhoneNumber$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
}
async function linkWithPhoneNumber$1(auth, request) {
  const response = await _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
  if (response.temporaryProof) {
    throw _makeTaggedError(auth, "account-exists-with-different-credential", response);
  }
  return response;
}
var VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
  ["USER_NOT_FOUND"]: "user-not-found"
};
async function verifyPhoneNumberForExisting(auth, request) {
  const apiRequest = Object.assign(Object.assign({}, request), {
    operation: "REAUTH"
  });
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
}
var PhoneAuthCredential = class extends AuthCredential {
  constructor(params) {
    super("phone", "phone");
    this.params = params;
  }
  static _fromVerification(verificationId, verificationCode) {
    return new PhoneAuthCredential({
      verificationId,
      verificationCode
    });
  }
  static _fromTokenResponse(phoneNumber, temporaryProof) {
    return new PhoneAuthCredential({
      phoneNumber,
      temporaryProof
    });
  }
  _getIdTokenResponse(auth) {
    return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
  }
  _linkToIdToken(auth, idToken) {
    return linkWithPhoneNumber$1(auth, Object.assign({
      idToken
    }, this._makeVerificationRequest()));
  }
  _getReauthenticationResolver(auth) {
    return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
  }
  _makeVerificationRequest() {
    const {
      temporaryProof,
      phoneNumber,
      verificationId,
      verificationCode
    } = this.params;
    if (temporaryProof && phoneNumber) {
      return {
        temporaryProof,
        phoneNumber
      };
    }
    return {
      sessionInfo: verificationId,
      code: verificationCode
    };
  }
  toJSON() {
    const obj = {
      providerId: this.providerId
    };
    if (this.params.phoneNumber) {
      obj.phoneNumber = this.params.phoneNumber;
    }
    if (this.params.temporaryProof) {
      obj.temporaryProof = this.params.temporaryProof;
    }
    if (this.params.verificationCode) {
      obj.verificationCode = this.params.verificationCode;
    }
    if (this.params.verificationId) {
      obj.verificationId = this.params.verificationId;
    }
    return obj;
  }
  static fromJSON(json) {
    if (typeof json === "string") {
      json = JSON.parse(json);
    }
    const {
      verificationId,
      verificationCode,
      phoneNumber,
      temporaryProof
    } = json;
    if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
      return null;
    }
    return new PhoneAuthCredential({
      verificationId,
      verificationCode,
      phoneNumber,
      temporaryProof
    });
  }
};
function parseMode(mode) {
  switch (mode) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function parseDeepLink(url) {
  const link = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(url))["link"];
  const doubleDeepLink = link ? (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(link))["deep_link_id"] : null;
  const iOSDeepLink = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(url))["deep_link_id"];
  const iOSDoubleDeepLink = iOSDeepLink ? (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(iOSDeepLink))["link"] : null;
  return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
var ActionCodeURL = class {
  constructor(actionLink) {
    var _a, _b, _c, _d, _e, _f;
    const searchParams = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(actionLink));
    const apiKey = (_a = searchParams["apiKey"]) !== null && _a !== void 0 ? _a : null;
    const code = (_b = searchParams["oobCode"]) !== null && _b !== void 0 ? _b : null;
    const operation = parseMode((_c = searchParams["mode"]) !== null && _c !== void 0 ? _c : null);
    _assert(apiKey && code && operation, "argument-error");
    this.apiKey = apiKey;
    this.operation = operation;
    this.code = code;
    this.continueUrl = (_d = searchParams["continueUrl"]) !== null && _d !== void 0 ? _d : null;
    this.languageCode = (_e = searchParams["languageCode"]) !== null && _e !== void 0 ? _e : null;
    this.tenantId = (_f = searchParams["tenantId"]) !== null && _f !== void 0 ? _f : null;
  }
  static parseLink(link) {
    const actionLink = parseDeepLink(link);
    try {
      return new ActionCodeURL(actionLink);
    } catch (_a) {
      return null;
    }
  }
};
function parseActionCodeURL(link) {
  return ActionCodeURL.parseLink(link);
}
var EmailAuthProvider = class {
  constructor() {
    this.providerId = EmailAuthProvider.PROVIDER_ID;
  }
  static credential(email, password) {
    return EmailAuthCredential._fromEmailAndPassword(email, password);
  }
  static credentialWithLink(email, emailLink) {
    const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
    _assert(actionCodeUrl, "argument-error");
    return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
  }
};
EmailAuthProvider.PROVIDER_ID = "password";
EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
var FederatedAuthProvider = class {
  constructor(providerId) {
    this.providerId = providerId;
    this.defaultLanguageCode = null;
    this.customParameters = {};
  }
  setDefaultLanguage(languageCode) {
    this.defaultLanguageCode = languageCode;
  }
  setCustomParameters(customOAuthParameters) {
    this.customParameters = customOAuthParameters;
    return this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
};
var BaseOAuthProvider = class extends FederatedAuthProvider {
  constructor() {
    super(...arguments);
    this.scopes = [];
  }
  addScope(scope) {
    if (!this.scopes.includes(scope)) {
      this.scopes.push(scope);
    }
    return this;
  }
  getScopes() {
    return [...this.scopes];
  }
};
var OAuthProvider = class extends BaseOAuthProvider {
  static credentialFromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    _assert("providerId" in obj && "signInMethod" in obj, "argument-error");
    return OAuthCredential._fromParams(obj);
  }
  credential(params) {
    return this._credential(Object.assign(Object.assign({}, params), {
      nonce: params.rawNonce
    }));
  }
  _credential(params) {
    _assert(params.idToken || params.accessToken, "argument-error");
    return OAuthCredential._fromParams(Object.assign(Object.assign({}, params), {
      providerId: this.providerId,
      signInMethod: this.providerId
    }));
  }
  static credentialFromResult(userCredential) {
    return OAuthProvider.oauthCredentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return OAuthProvider.oauthCredentialFromTaggedObject(error.customData || {});
  }
  static oauthCredentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      oauthIdToken,
      oauthAccessToken,
      oauthTokenSecret,
      pendingToken,
      nonce,
      providerId
    } = tokenResponse;
    if (!oauthAccessToken && !oauthTokenSecret && !oauthIdToken && !pendingToken) {
      return null;
    }
    if (!providerId) {
      return null;
    }
    try {
      return new OAuthProvider(providerId)._credential({
        idToken: oauthIdToken,
        accessToken: oauthAccessToken,
        nonce,
        pendingToken
      });
    } catch (e) {
      return null;
    }
  }
};
var FacebookAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("facebook.com");
  }
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: FacebookAuthProvider.PROVIDER_ID,
      signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return FacebookAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
FacebookAuthProvider.PROVIDER_ID = "facebook.com";
var GoogleAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("google.com");
    this.addScope("profile");
  }
  static credential(idToken, accessToken) {
    return OAuthCredential._fromParams({
      providerId: GoogleAuthProvider.PROVIDER_ID,
      signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
      idToken,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return GoogleAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      oauthIdToken,
      oauthAccessToken
    } = tokenResponse;
    if (!oauthIdToken && !oauthAccessToken) {
      return null;
    }
    try {
      return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
GoogleAuthProvider.PROVIDER_ID = "google.com";
var GithubAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("github.com");
  }
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: GithubAuthProvider.PROVIDER_ID,
      signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return GithubAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
GithubAuthProvider.PROVIDER_ID = "github.com";
var IDP_REQUEST_URI = "http://localhost";
var SAMLAuthCredential = class extends AuthCredential {
  constructor(providerId, pendingToken) {
    super(providerId, providerId);
    this.pendingToken = pendingToken;
  }
  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  _getReauthenticationResolver(auth) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }
  toJSON() {
    return {
      signInMethod: this.signInMethod,
      providerId: this.providerId,
      pendingToken: this.pendingToken
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    const {
      providerId,
      signInMethod,
      pendingToken
    } = obj;
    if (!providerId || !signInMethod || !pendingToken || providerId !== signInMethod) {
      return null;
    }
    return new SAMLAuthCredential(providerId, pendingToken);
  }
  static _create(providerId, pendingToken) {
    return new SAMLAuthCredential(providerId, pendingToken);
  }
  buildRequest() {
    return {
      requestUri: IDP_REQUEST_URI,
      returnSecureToken: true,
      pendingToken: this.pendingToken
    };
  }
};
var SAML_PROVIDER_PREFIX = "saml.";
var SAMLAuthProvider = class extends FederatedAuthProvider {
  constructor(providerId) {
    _assert(providerId.startsWith(SAML_PROVIDER_PREFIX), "argument-error");
    super(providerId);
  }
  static credentialFromResult(userCredential) {
    return SAMLAuthProvider.samlCredentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return SAMLAuthProvider.samlCredentialFromTaggedObject(error.customData || {});
  }
  static credentialFromJSON(json) {
    const credential = SAMLAuthCredential.fromJSON(json);
    _assert(credential, "argument-error");
    return credential;
  }
  static samlCredentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      pendingToken,
      providerId
    } = tokenResponse;
    if (!pendingToken || !providerId) {
      return null;
    }
    try {
      return SAMLAuthCredential._create(providerId, pendingToken);
    } catch (e) {
      return null;
    }
  }
};
var TwitterAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("twitter.com");
  }
  static credential(token, secret) {
    return OAuthCredential._fromParams({
      providerId: TwitterAuthProvider.PROVIDER_ID,
      signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
      oauthToken: token,
      oauthTokenSecret: secret
    });
  }
  static credentialFromResult(userCredential) {
    return TwitterAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      oauthAccessToken,
      oauthTokenSecret
    } = tokenResponse;
    if (!oauthAccessToken || !oauthTokenSecret) {
      return null;
    }
    try {
      return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
    } catch (_a) {
      return null;
    }
  }
};
TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
TwitterAuthProvider.PROVIDER_ID = "twitter.com";
async function signUp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signUp", _addTidIfNecessary(auth, request));
}
var UserCredentialImpl = class {
  constructor(params) {
    this.user = params.user;
    this.providerId = params.providerId;
    this._tokenResponse = params._tokenResponse;
    this.operationType = params.operationType;
  }
  static async _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
    const user = await UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
    const providerId = providerIdForResponse(idTokenResponse);
    const userCred = new UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: idTokenResponse,
      operationType
    });
    return userCred;
  }
  static async _forOperation(user, operationType, response) {
    await user._updateTokensIfNecessary(response, true);
    const providerId = providerIdForResponse(response);
    return new UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: response,
      operationType
    });
  }
};
function providerIdForResponse(response) {
  if (response.providerId) {
    return response.providerId;
  }
  if ("phoneNumber" in response) {
    return "phone";
  }
  return null;
}
async function signInAnonymously(auth) {
  var _a;
  const authInternal = _castAuth(auth);
  await authInternal._initializationPromise;
  if ((_a = authInternal.currentUser) === null || _a === void 0 ? void 0 : _a.isAnonymous) {
    return new UserCredentialImpl({
      user: authInternal.currentUser,
      providerId: null,
      operationType: "signIn"
    });
  }
  const response = await signUp(authInternal, {
    returnSecureToken: true
  });
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response, true);
  await authInternal._updateCurrentUser(userCredential.user);
  return userCredential;
}
var MultiFactorError = class extends import_util.FirebaseError {
  constructor(auth, error, operationType, user) {
    var _a;
    super(error.code, error.message);
    this.operationType = operationType;
    this.user = user;
    Object.setPrototypeOf(this, MultiFactorError.prototype);
    this.customData = {
      appName: auth.name,
      tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : void 0,
      _serverResponse: error.customData._serverResponse,
      operationType
    };
  }
  static _fromErrorAndOperation(auth, error, operationType, user) {
    return new MultiFactorError(auth, error, operationType, user);
  }
};
function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
  const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
  return idTokenProvider.catch(error => {
    if (error.code === `auth/${"multi-factor-auth-required"}`) {
      throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
    }
    throw error;
  });
}
function providerDataAsNames(providerData) {
  return new Set(providerData.map(({
    providerId
  }) => providerId).filter(pid => !!pid));
}
async function unlink(user, providerId) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _assertLinkedStatus(true, userInternal, providerId);
  const {
    providerUserInfo
  } = await deleteLinkedAccounts(userInternal.auth, {
    idToken: await userInternal.getIdToken(),
    deleteProvider: [providerId]
  });
  const providersLeft = providerDataAsNames(providerUserInfo || []);
  userInternal.providerData = userInternal.providerData.filter(pd => providersLeft.has(pd.providerId));
  if (!providersLeft.has("phone")) {
    userInternal.phoneNumber = null;
  }
  await userInternal.auth._persistUserIfCurrent(userInternal);
  return userInternal;
}
async function _link$1(user, credential, bypassAuthState = false) {
  const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
  return UserCredentialImpl._forOperation(user, "link", response);
}
async function _assertLinkedStatus(expected, user, provider) {
  await _reloadWithoutSaving(user);
  const providerIds = providerDataAsNames(user.providerData);
  const code = expected === false ? "provider-already-linked" : "no-such-provider";
  _assert(providerIds.has(provider) === expected, user.auth, code);
}
async function _reauthenticate(user, credential, bypassAuthState = false) {
  const {
    auth
  } = user;
  const operationType = "reauthenticate";
  try {
    const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);
    _assert(response.idToken, auth, "internal-error");
    const parsed = _parseToken(response.idToken);
    _assert(parsed, auth, "internal-error");
    const {
      sub: localId
    } = parsed;
    _assert(user.uid === localId, auth, "user-mismatch");
    return UserCredentialImpl._forOperation(user, operationType, response);
  } catch (e) {
    if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found"}`) {
      _fail(auth, "user-mismatch");
    }
    throw e;
  }
}
async function _signInWithCredential(auth, credential, bypassAuthState = false) {
  const operationType = "signIn";
  const response = await _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);
  if (!bypassAuthState) {
    await auth._updateCurrentUser(userCredential.user);
  }
  return userCredential;
}
async function signInWithCredential(auth, credential) {
  return _signInWithCredential(_castAuth(auth), credential);
}
async function linkWithCredential(user, credential) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _assertLinkedStatus(false, userInternal, credential.providerId);
  return _link$1(userInternal, credential);
}
async function reauthenticateWithCredential(user, credential) {
  return _reauthenticate((0, import_util.getModularInstance)(user), credential);
}
async function signInWithCustomToken$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithCustomToken", _addTidIfNecessary(auth, request));
}
async function signInWithCustomToken(auth, customToken) {
  const authInternal = _castAuth(auth);
  const response = await signInWithCustomToken$1(authInternal, {
    token: customToken,
    returnSecureToken: true
  });
  const cred = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
  await authInternal._updateCurrentUser(cred.user);
  return cred;
}
var MultiFactorInfoImpl = class {
  constructor(factorId, response) {
    this.factorId = factorId;
    this.uid = response.mfaEnrollmentId;
    this.enrollmentTime = new Date(response.enrolledAt).toUTCString();
    this.displayName = response.displayName;
  }
  static _fromServerResponse(auth, enrollment) {
    if ("phoneInfo" in enrollment) {
      return PhoneMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
    } else if ("totpInfo" in enrollment) {
      return TotpMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
    }
    return _fail(auth, "internal-error");
  }
};
var PhoneMultiFactorInfoImpl = class extends MultiFactorInfoImpl {
  constructor(response) {
    super("phone", response);
    this.phoneNumber = response.phoneInfo;
  }
  static _fromServerResponse(_auth, enrollment) {
    return new PhoneMultiFactorInfoImpl(enrollment);
  }
};
var TotpMultiFactorInfoImpl = class extends MultiFactorInfoImpl {
  constructor(response) {
    super("totp", response);
  }
  static _fromServerResponse(_auth, enrollment) {
    return new TotpMultiFactorInfoImpl(enrollment);
  }
};
function _setActionCodeSettingsOnRequest(auth, request, actionCodeSettings) {
  var _a;
  _assert(((_a = actionCodeSettings.url) === null || _a === void 0 ? void 0 : _a.length) > 0, auth, "invalid-continue-uri");
  _assert(typeof actionCodeSettings.dynamicLinkDomain === "undefined" || actionCodeSettings.dynamicLinkDomain.length > 0, auth, "invalid-dynamic-link-domain");
  request.continueUrl = actionCodeSettings.url;
  request.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
  request.canHandleCodeInApp = actionCodeSettings.handleCodeInApp;
  if (actionCodeSettings.iOS) {
    _assert(actionCodeSettings.iOS.bundleId.length > 0, auth, "missing-ios-bundle-id");
    request.iOSBundleId = actionCodeSettings.iOS.bundleId;
  }
  if (actionCodeSettings.android) {
    _assert(actionCodeSettings.android.packageName.length > 0, auth, "missing-android-pkg-name");
    request.androidInstallApp = actionCodeSettings.android.installApp;
    request.androidMinimumVersionCode = actionCodeSettings.android.minimumVersion;
    request.androidPackageName = actionCodeSettings.android.packageName;
  }
}
async function sendPasswordResetEmail(auth, email, actionCodeSettings) {
  var _a;
  const authInternal = _castAuth(auth);
  const request = {
    requestType: "PASSWORD_RESET",
    email,
    clientType: "CLIENT_TYPE_WEB"
  };
  if ((_a = authInternal._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
    const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "getOobCode", true);
    if (actionCodeSettings) {
      _setActionCodeSettingsOnRequest(authInternal, requestWithRecaptcha, actionCodeSettings);
    }
    await sendPasswordResetEmail$1(authInternal, requestWithRecaptcha);
  } else {
    if (actionCodeSettings) {
      _setActionCodeSettingsOnRequest(authInternal, request, actionCodeSettings);
    }
    await sendPasswordResetEmail$1(authInternal, request).catch(async error => {
      if (error.code === `auth/${"missing-recaptcha-token"}`) {
        console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
        const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "getOobCode", true);
        if (actionCodeSettings) {
          _setActionCodeSettingsOnRequest(authInternal, requestWithRecaptcha, actionCodeSettings);
        }
        await sendPasswordResetEmail$1(authInternal, requestWithRecaptcha);
      } else {
        return Promise.reject(error);
      }
    });
  }
}
async function confirmPasswordReset(auth, oobCode, newPassword) {
  await resetPassword((0, import_util.getModularInstance)(auth), {
    oobCode,
    newPassword
  });
}
async function applyActionCode(auth, oobCode) {
  await applyActionCode$1((0, import_util.getModularInstance)(auth), {
    oobCode
  });
}
async function checkActionCode(auth, oobCode) {
  const authModular = (0, import_util.getModularInstance)(auth);
  const response = await resetPassword(authModular, {
    oobCode
  });
  const operation = response.requestType;
  _assert(operation, authModular, "internal-error");
  switch (operation) {
    case "EMAIL_SIGNIN":
      break;
    case "VERIFY_AND_CHANGE_EMAIL":
      _assert(response.newEmail, authModular, "internal-error");
      break;
    case "REVERT_SECOND_FACTOR_ADDITION":
      _assert(response.mfaInfo, authModular, "internal-error");
    default:
      _assert(response.email, authModular, "internal-error");
  }
  let multiFactorInfo = null;
  if (response.mfaInfo) {
    multiFactorInfo = MultiFactorInfoImpl._fromServerResponse(_castAuth(authModular), response.mfaInfo);
  }
  return {
    data: {
      email: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.newEmail : response.email) || null,
      previousEmail: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.email : response.newEmail) || null,
      multiFactorInfo
    },
    operation
  };
}
async function verifyPasswordResetCode(auth, code) {
  const {
    data
  } = await checkActionCode((0, import_util.getModularInstance)(auth), code);
  return data.email;
}
async function createUserWithEmailAndPassword(auth, email, password) {
  var _a;
  const authInternal = _castAuth(auth);
  const request = {
    returnSecureToken: true,
    email,
    password,
    clientType: "CLIENT_TYPE_WEB"
  };
  let signUpResponse;
  if ((_a = authInternal._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
    const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "signUpPassword");
    signUpResponse = signUp(authInternal, requestWithRecaptcha);
  } else {
    signUpResponse = signUp(authInternal, request).catch(async error => {
      if (error.code === `auth/${"missing-recaptcha-token"}`) {
        console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
        const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "signUpPassword");
        return signUp(authInternal, requestWithRecaptcha);
      } else {
        return Promise.reject(error);
      }
    });
  }
  const response = await signUpResponse.catch(error => {
    return Promise.reject(error);
  });
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
  await authInternal._updateCurrentUser(userCredential.user);
  return userCredential;
}
function signInWithEmailAndPassword(auth, email, password) {
  return signInWithCredential((0, import_util.getModularInstance)(auth), EmailAuthProvider.credential(email, password));
}
async function sendSignInLinkToEmail(auth, email, actionCodeSettings) {
  var _a;
  const authInternal = _castAuth(auth);
  const request = {
    requestType: "EMAIL_SIGNIN",
    email,
    clientType: "CLIENT_TYPE_WEB"
  };
  function setActionCodeSettings(request2, actionCodeSettings2) {
    _assert(actionCodeSettings2.handleCodeInApp, authInternal, "argument-error");
    if (actionCodeSettings2) {
      _setActionCodeSettingsOnRequest(authInternal, request2, actionCodeSettings2);
    }
  }
  if ((_a = authInternal._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
    const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "getOobCode", true);
    setActionCodeSettings(requestWithRecaptcha, actionCodeSettings);
    await sendSignInLinkToEmail$1(authInternal, requestWithRecaptcha);
  } else {
    setActionCodeSettings(request, actionCodeSettings);
    await sendSignInLinkToEmail$1(authInternal, request).catch(async error => {
      if (error.code === `auth/${"missing-recaptcha-token"}`) {
        console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
        const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "getOobCode", true);
        setActionCodeSettings(requestWithRecaptcha, actionCodeSettings);
        await sendSignInLinkToEmail$1(authInternal, requestWithRecaptcha);
      } else {
        return Promise.reject(error);
      }
    });
  }
}
function isSignInWithEmailLink(auth, emailLink) {
  const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
  return (actionCodeUrl === null || actionCodeUrl === void 0 ? void 0 : actionCodeUrl.operation) === "EMAIL_SIGNIN";
}
async function signInWithEmailLink(auth, email, emailLink) {
  const authModular = (0, import_util.getModularInstance)(auth);
  const credential = EmailAuthProvider.credentialWithLink(email, emailLink || _getCurrentUrl());
  _assert(credential._tenantId === (authModular.tenantId || null), authModular, "tenant-id-mismatch");
  return signInWithCredential(authModular, credential);
}
async function createAuthUri(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:createAuthUri", _addTidIfNecessary(auth, request));
}
async function fetchSignInMethodsForEmail(auth, email) {
  const continueUri = _isHttpOrHttps() ? _getCurrentUrl() : "http://localhost";
  const request = {
    identifier: email,
    continueUri
  };
  const {
    signinMethods
  } = await createAuthUri((0, import_util.getModularInstance)(auth), request);
  return signinMethods || [];
}
async function sendEmailVerification(user, actionCodeSettings) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const idToken = await user.getIdToken();
  const request = {
    requestType: "VERIFY_EMAIL",
    idToken
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
  }
  const {
    email
  } = await sendEmailVerification$1(userInternal.auth, request);
  if (email !== user.email) {
    await user.reload();
  }
}
async function verifyBeforeUpdateEmail(user, newEmail, actionCodeSettings) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const idToken = await user.getIdToken();
  const request = {
    requestType: "VERIFY_AND_CHANGE_EMAIL",
    idToken,
    newEmail
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
  }
  const {
    email
  } = await verifyAndChangeEmail(userInternal.auth, request);
  if (email !== user.email) {
    await user.reload();
  }
}
async function updateProfile$1(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function updateProfile(user, {
  displayName,
  photoURL: photoUrl
}) {
  if (displayName === void 0 && photoUrl === void 0) {
    return;
  }
  const userInternal = (0, import_util.getModularInstance)(user);
  const idToken = await userInternal.getIdToken();
  const profileRequest = {
    idToken,
    displayName,
    photoUrl,
    returnSecureToken: true
  };
  const response = await _logoutIfInvalidated(userInternal, updateProfile$1(userInternal.auth, profileRequest));
  userInternal.displayName = response.displayName || null;
  userInternal.photoURL = response.photoUrl || null;
  const passwordProvider = userInternal.providerData.find(({
    providerId
  }) => providerId === "password");
  if (passwordProvider) {
    passwordProvider.displayName = userInternal.displayName;
    passwordProvider.photoURL = userInternal.photoURL;
  }
  await userInternal._updateTokensIfNecessary(response);
}
function updateEmail(user, newEmail) {
  return updateEmailOrPassword((0, import_util.getModularInstance)(user), newEmail, null);
}
function updatePassword(user, newPassword) {
  return updateEmailOrPassword((0, import_util.getModularInstance)(user), null, newPassword);
}
async function updateEmailOrPassword(user, email, password) {
  const {
    auth
  } = user;
  const idToken = await user.getIdToken();
  const request = {
    idToken,
    returnSecureToken: true
  };
  if (email) {
    request.email = email;
  }
  if (password) {
    request.password = password;
  }
  const response = await _logoutIfInvalidated(user, updateEmailPassword(auth, request));
  await user._updateTokensIfNecessary(response, true);
}
function _fromIdTokenResponse(idTokenResponse) {
  var _a, _b;
  if (!idTokenResponse) {
    return null;
  }
  const {
    providerId
  } = idTokenResponse;
  const profile = idTokenResponse.rawUserInfo ? JSON.parse(idTokenResponse.rawUserInfo) : {};
  const isNewUser = idTokenResponse.isNewUser || idTokenResponse.kind === "identitytoolkit#SignupNewUserResponse";
  if (!providerId && (idTokenResponse === null || idTokenResponse === void 0 ? void 0 : idTokenResponse.idToken)) {
    const signInProvider = (_b = (_a = _parseToken(idTokenResponse.idToken)) === null || _a === void 0 ? void 0 : _a.firebase) === null || _b === void 0 ? void 0 : _b["sign_in_provider"];
    if (signInProvider) {
      const filteredProviderId = signInProvider !== "anonymous" && signInProvider !== "custom" ? signInProvider : null;
      return new GenericAdditionalUserInfo(isNewUser, filteredProviderId);
    }
  }
  if (!providerId) {
    return null;
  }
  switch (providerId) {
    case "facebook.com":
      return new FacebookAdditionalUserInfo(isNewUser, profile);
    case "github.com":
      return new GithubAdditionalUserInfo(isNewUser, profile);
    case "google.com":
      return new GoogleAdditionalUserInfo(isNewUser, profile);
    case "twitter.com":
      return new TwitterAdditionalUserInfo(isNewUser, profile, idTokenResponse.screenName || null);
    case "custom":
    case "anonymous":
      return new GenericAdditionalUserInfo(isNewUser, null);
    default:
      return new GenericAdditionalUserInfo(isNewUser, providerId, profile);
  }
}
var GenericAdditionalUserInfo = class {
  constructor(isNewUser, providerId, profile = {}) {
    this.isNewUser = isNewUser;
    this.providerId = providerId;
    this.profile = profile;
  }
};
var FederatedAdditionalUserInfoWithUsername = class extends GenericAdditionalUserInfo {
  constructor(isNewUser, providerId, profile, username) {
    super(isNewUser, providerId, profile);
    this.username = username;
  }
};
var FacebookAdditionalUserInfo = class extends GenericAdditionalUserInfo {
  constructor(isNewUser, profile) {
    super(isNewUser, "facebook.com", profile);
  }
};
var GithubAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
  constructor(isNewUser, profile) {
    super(isNewUser, "github.com", profile, typeof (profile === null || profile === void 0 ? void 0 : profile.login) === "string" ? profile === null || profile === void 0 ? void 0 : profile.login : null);
  }
};
var GoogleAdditionalUserInfo = class extends GenericAdditionalUserInfo {
  constructor(isNewUser, profile) {
    super(isNewUser, "google.com", profile);
  }
};
var TwitterAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
  constructor(isNewUser, profile, screenName) {
    super(isNewUser, "twitter.com", profile, screenName);
  }
};
function getAdditionalUserInfo(userCredential) {
  const {
    user,
    _tokenResponse
  } = userCredential;
  if (user.isAnonymous && !_tokenResponse) {
    return {
      providerId: null,
      isNewUser: false,
      profile: null
    };
  }
  return _fromIdTokenResponse(_tokenResponse);
}
function setPersistence(auth, persistence) {
  return (0, import_util.getModularInstance)(auth).setPersistence(persistence);
}
function initializeRecaptchaConfig(auth) {
  const authInternal = _castAuth(auth);
  return authInternal.initializeRecaptchaConfig();
}
function onIdTokenChanged(auth, nextOrObserver, error, completed) {
  return (0, import_util.getModularInstance)(auth).onIdTokenChanged(nextOrObserver, error, completed);
}
function beforeAuthStateChanged(auth, callback, onAbort) {
  return (0, import_util.getModularInstance)(auth).beforeAuthStateChanged(callback, onAbort);
}
function onAuthStateChanged(auth, nextOrObserver, error, completed) {
  return (0, import_util.getModularInstance)(auth).onAuthStateChanged(nextOrObserver, error, completed);
}
function useDeviceLanguage(auth) {
  (0, import_util.getModularInstance)(auth).useDeviceLanguage();
}
function updateCurrentUser(auth, user) {
  return (0, import_util.getModularInstance)(auth).updateCurrentUser(user);
}
function signOut(auth) {
  return (0, import_util.getModularInstance)(auth).signOut();
}
async function deleteUser(user) {
  return (0, import_util.getModularInstance)(user).delete();
}
var MultiFactorSessionImpl = class {
  constructor(type, credential, user) {
    this.type = type;
    this.credential = credential;
    this.user = user;
  }
  static _fromIdtoken(idToken, user) {
    return new MultiFactorSessionImpl("enroll", idToken, user);
  }
  static _fromMfaPendingCredential(mfaPendingCredential) {
    return new MultiFactorSessionImpl("signin", mfaPendingCredential);
  }
  toJSON() {
    const key = this.type === "enroll" ? "idToken" : "pendingCredential";
    return {
      multiFactorSession: {
        [key]: this.credential
      }
    };
  }
  static fromJSON(obj) {
    var _a, _b;
    if (obj === null || obj === void 0 ? void 0 : obj.multiFactorSession) {
      if ((_a = obj.multiFactorSession) === null || _a === void 0 ? void 0 : _a.pendingCredential) {
        return MultiFactorSessionImpl._fromMfaPendingCredential(obj.multiFactorSession.pendingCredential);
      } else if ((_b = obj.multiFactorSession) === null || _b === void 0 ? void 0 : _b.idToken) {
        return MultiFactorSessionImpl._fromIdtoken(obj.multiFactorSession.idToken);
      }
    }
    return null;
  }
};
var MultiFactorResolverImpl = class {
  constructor(session, hints, signInResolver) {
    this.session = session;
    this.hints = hints;
    this.signInResolver = signInResolver;
  }
  static _fromError(authExtern, error) {
    const auth = _castAuth(authExtern);
    const serverResponse = error.customData._serverResponse;
    const hints = (serverResponse.mfaInfo || []).map(enrollment => MultiFactorInfoImpl._fromServerResponse(auth, enrollment));
    _assert(serverResponse.mfaPendingCredential, auth, "internal-error");
    const session = MultiFactorSessionImpl._fromMfaPendingCredential(serverResponse.mfaPendingCredential);
    return new MultiFactorResolverImpl(session, hints, async assertion => {
      const mfaResponse = await assertion._process(auth, session);
      delete serverResponse.mfaInfo;
      delete serverResponse.mfaPendingCredential;
      const idTokenResponse = Object.assign(Object.assign({}, serverResponse), {
        idToken: mfaResponse.idToken,
        refreshToken: mfaResponse.refreshToken
      });
      switch (error.operationType) {
        case "signIn":
          const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, error.operationType, idTokenResponse);
          await auth._updateCurrentUser(userCredential.user);
          return userCredential;
        case "reauthenticate":
          _assert(error.user, auth, "internal-error");
          return UserCredentialImpl._forOperation(error.user, error.operationType, idTokenResponse);
        default:
          _fail(auth, "internal-error");
      }
    });
  }
  async resolveSignIn(assertionExtern) {
    const assertion = assertionExtern;
    return this.signInResolver(assertion);
  }
};
function getMultiFactorResolver(auth, error) {
  var _a;
  const authModular = (0, import_util.getModularInstance)(auth);
  const errorInternal = error;
  _assert(error.customData.operationType, authModular, "argument-error");
  _assert((_a = errorInternal.customData._serverResponse) === null || _a === void 0 ? void 0 : _a.mfaPendingCredential, authModular, "argument-error");
  return MultiFactorResolverImpl._fromError(authModular, errorInternal);
}
function startEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
}
function finalizeEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
}
function startEnrollTotpMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
}
function finalizeEnrollTotpMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
}
function withdrawMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:withdraw", _addTidIfNecessary(auth, request));
}
var MultiFactorUserImpl = class {
  constructor(user) {
    this.user = user;
    this.enrolledFactors = [];
    user._onReload(userInfo => {
      if (userInfo.mfaInfo) {
        this.enrolledFactors = userInfo.mfaInfo.map(enrollment => MultiFactorInfoImpl._fromServerResponse(user.auth, enrollment));
      }
    });
  }
  static _fromUser(user) {
    return new MultiFactorUserImpl(user);
  }
  async getSession() {
    return MultiFactorSessionImpl._fromIdtoken(await this.user.getIdToken(), this.user);
  }
  async enroll(assertionExtern, displayName) {
    const assertion = assertionExtern;
    const session = await this.getSession();
    const finalizeMfaResponse = await _logoutIfInvalidated(this.user, assertion._process(this.user.auth, session, displayName));
    await this.user._updateTokensIfNecessary(finalizeMfaResponse);
    return this.user.reload();
  }
  async unenroll(infoOrUid) {
    const mfaEnrollmentId = typeof infoOrUid === "string" ? infoOrUid : infoOrUid.uid;
    const idToken = await this.user.getIdToken();
    try {
      const idTokenResponse = await _logoutIfInvalidated(this.user, withdrawMfa(this.user.auth, {
        idToken,
        mfaEnrollmentId
      }));
      this.enrolledFactors = this.enrolledFactors.filter(({
        uid
      }) => uid !== mfaEnrollmentId);
      await this.user._updateTokensIfNecessary(idTokenResponse);
      await this.user.reload();
    } catch (e) {
      throw e;
    }
  }
};
var multiFactorUserCache = /* @__PURE__ */new WeakMap();
function multiFactor(user) {
  const userModular = (0, import_util.getModularInstance)(user);
  if (!multiFactorUserCache.has(userModular)) {
    multiFactorUserCache.set(userModular, MultiFactorUserImpl._fromUser(userModular));
  }
  return multiFactorUserCache.get(userModular);
}
var STORAGE_AVAILABLE_KEY = "__sak";
var BrowserPersistenceClass = class {
  constructor(storageRetriever, type) {
    this.storageRetriever = storageRetriever;
    this.type = type;
  }
  _isAvailable() {
    try {
      if (!this.storage) {
        return Promise.resolve(false);
      }
      this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
      this.storage.removeItem(STORAGE_AVAILABLE_KEY);
      return Promise.resolve(true);
    } catch (_a) {
      return Promise.resolve(false);
    }
  }
  _set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
    return Promise.resolve();
  }
  _get(key) {
    const json = this.storage.getItem(key);
    return Promise.resolve(json ? JSON.parse(json) : null);
  }
  _remove(key) {
    this.storage.removeItem(key);
    return Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
};
function _iframeCannotSyncWebStorage() {
  const ua = (0, import_util.getUA)();
  return _isSafari(ua) || _isIOS(ua);
}
var _POLLING_INTERVAL_MS$1 = 1e3;
var IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
var BrowserLocalPersistence = class extends BrowserPersistenceClass {
  constructor() {
    super(() => window.localStorage, "LOCAL");
    this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.safariLocalStorageNotSynced = _iframeCannotSyncWebStorage() && _isIframe();
    this.fallbackToPolling = _isMobileBrowser();
    this._shouldAllowMigration = true;
  }
  forAllChangedKeys(cb) {
    for (const key of Object.keys(this.listeners)) {
      const newValue = this.storage.getItem(key);
      const oldValue = this.localCache[key];
      if (newValue !== oldValue) {
        cb(key, oldValue, newValue);
      }
    }
  }
  onStorageEvent(event, poll = false) {
    if (!event.key) {
      this.forAllChangedKeys((key2, _oldValue, newValue) => {
        this.notifyListeners(key2, newValue);
      });
      return;
    }
    const key = event.key;
    if (poll) {
      this.detachListener();
    } else {
      this.stopPolling();
    }
    if (this.safariLocalStorageNotSynced) {
      const storedValue2 = this.storage.getItem(key);
      if (event.newValue !== storedValue2) {
        if (event.newValue !== null) {
          this.storage.setItem(key, event.newValue);
        } else {
          this.storage.removeItem(key);
        }
      } else if (this.localCache[key] === event.newValue && !poll) {
        return;
      }
    }
    const triggerListeners = () => {
      const storedValue2 = this.storage.getItem(key);
      if (!poll && this.localCache[key] === storedValue2) {
        return;
      }
      this.notifyListeners(key, storedValue2);
    };
    const storedValue = this.storage.getItem(key);
    if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
      setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
    } else {
      triggerListeners();
    }
  }
  notifyListeners(key, value) {
    this.localCache[key] = value;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(value ? JSON.parse(value) : value);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((key, oldValue, newValue) => {
        this.onStorageEvent(new StorageEvent("storage", {
          key,
          oldValue,
          newValue
        }), true);
      });
    }, _POLLING_INTERVAL_MS$1);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      if (this.fallbackToPolling) {
        this.startPolling();
      } else {
        this.attachListener();
      }
    }
    if (!this.listeners[key]) {
      this.listeners[key] = /* @__PURE__ */new Set();
      this.localCache[key] = this.storage.getItem(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.detachListener();
      this.stopPolling();
    }
  }
  async _set(key, value) {
    await super._set(key, value);
    this.localCache[key] = JSON.stringify(value);
  }
  async _get(key) {
    const value = await super._get(key);
    this.localCache[key] = JSON.stringify(value);
    return value;
  }
  async _remove(key) {
    await super._remove(key);
    delete this.localCache[key];
  }
};
BrowserLocalPersistence.type = "LOCAL";
var browserLocalPersistence = BrowserLocalPersistence;
var BrowserSessionPersistence = class extends BrowserPersistenceClass {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
};
BrowserSessionPersistence.type = "SESSION";
var browserSessionPersistence = BrowserSessionPersistence;
function _allSettled(promises) {
  return Promise.all(promises.map(async promise => {
    try {
      const value = await promise;
      return {
        fulfilled: true,
        value
      };
    } catch (reason) {
      return {
        fulfilled: false,
        reason
      };
    }
  }));
}
var Receiver = class {
  constructor(eventTarget) {
    this.eventTarget = eventTarget;
    this.handlersMap = {};
    this.boundEventHandler = this.handleEvent.bind(this);
  }
  static _getInstance(eventTarget) {
    const existingInstance = this.receivers.find(receiver => receiver.isListeningto(eventTarget));
    if (existingInstance) {
      return existingInstance;
    }
    const newInstance = new Receiver(eventTarget);
    this.receivers.push(newInstance);
    return newInstance;
  }
  isListeningto(eventTarget) {
    return this.eventTarget === eventTarget;
  }
  async handleEvent(event) {
    const messageEvent = event;
    const {
      eventId,
      eventType,
      data
    } = messageEvent.data;
    const handlers = this.handlersMap[eventType];
    if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
      return;
    }
    messageEvent.ports[0].postMessage({
      status: "ack",
      eventId,
      eventType
    });
    const promises = Array.from(handlers).map(async handler => handler(messageEvent.origin, data));
    const response = await _allSettled(promises);
    messageEvent.ports[0].postMessage({
      status: "done",
      eventId,
      eventType,
      response
    });
  }
  _subscribe(eventType, eventHandler) {
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.addEventListener("message", this.boundEventHandler);
    }
    if (!this.handlersMap[eventType]) {
      this.handlersMap[eventType] = /* @__PURE__ */new Set();
    }
    this.handlersMap[eventType].add(eventHandler);
  }
  _unsubscribe(eventType, eventHandler) {
    if (this.handlersMap[eventType] && eventHandler) {
      this.handlersMap[eventType].delete(eventHandler);
    }
    if (!eventHandler || this.handlersMap[eventType].size === 0) {
      delete this.handlersMap[eventType];
    }
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.removeEventListener("message", this.boundEventHandler);
    }
  }
};
Receiver.receivers = [];
function _generateEventId(prefix = "", digits = 10) {
  let random = "";
  for (let i = 0; i < digits; i++) {
    random += Math.floor(Math.random() * 10);
  }
  return prefix + random;
}
var Sender = class {
  constructor(target) {
    this.target = target;
    this.handlers = /* @__PURE__ */new Set();
  }
  removeMessageHandler(handler) {
    if (handler.messageChannel) {
      handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
      handler.messageChannel.port1.close();
    }
    this.handlers.delete(handler);
  }
  async _send(eventType, data, timeout = 50) {
    const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
    if (!messageChannel) {
      throw new Error("connection_unavailable");
    }
    let completionTimer;
    let handler;
    return new Promise((resolve, reject) => {
      const eventId = _generateEventId("", 20);
      messageChannel.port1.start();
      const ackTimer = setTimeout(() => {
        reject(new Error("unsupported_event"));
      }, timeout);
      handler = {
        messageChannel,
        onMessage(event) {
          const messageEvent = event;
          if (messageEvent.data.eventId !== eventId) {
            return;
          }
          switch (messageEvent.data.status) {
            case "ack":
              clearTimeout(ackTimer);
              completionTimer = setTimeout(() => {
                reject(new Error("timeout"));
              }, 3e3);
              break;
            case "done":
              clearTimeout(completionTimer);
              resolve(messageEvent.data.response);
              break;
            default:
              clearTimeout(ackTimer);
              clearTimeout(completionTimer);
              reject(new Error("invalid_response"));
              break;
          }
        }
      };
      this.handlers.add(handler);
      messageChannel.port1.addEventListener("message", handler.onMessage);
      this.target.postMessage({
        eventType,
        eventId,
        data
      }, [messageChannel.port2]);
    }).finally(() => {
      if (handler) {
        this.removeMessageHandler(handler);
      }
    });
  }
};
function _window() {
  return window;
}
function _setWindowLocation(url) {
  _window().location.href = url;
}
function _isWorker() {
  return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
}
async function _getActiveServiceWorker() {
  if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
    return null;
  }
  try {
    const registration = await navigator.serviceWorker.ready;
    return registration.active;
  } catch (_a) {
    return null;
  }
}
function _getServiceWorkerController() {
  var _a;
  return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
}
function _getWorkerGlobalScope() {
  return _isWorker() ? self : null;
}
var DB_NAME = "firebaseLocalStorageDb";
var DB_VERSION = 1;
var DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
var DB_DATA_KEYPATH = "fbase_key";
var DBPromise = class {
  constructor(request) {
    this.request = request;
  }
  toPromise() {
    return new Promise((resolve, reject) => {
      this.request.addEventListener("success", () => {
        resolve(this.request.result);
      });
      this.request.addEventListener("error", () => {
        reject(this.request.error);
      });
    });
  }
};
function getObjectStore(db, isReadWrite) {
  return db.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
}
function _deleteDatabase() {
  const request = indexedDB.deleteDatabase(DB_NAME);
  return new DBPromise(request).toPromise();
}
function _openDatabase() {
  const request = indexedDB.open(DB_NAME, DB_VERSION);
  return new Promise((resolve, reject) => {
    request.addEventListener("error", () => {
      reject(request.error);
    });
    request.addEventListener("upgradeneeded", () => {
      const db = request.result;
      try {
        db.createObjectStore(DB_OBJECTSTORE_NAME, {
          keyPath: DB_DATA_KEYPATH
        });
      } catch (e) {
        reject(e);
      }
    });
    request.addEventListener("success", async () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
        db.close();
        await _deleteDatabase();
        resolve(await _openDatabase());
      } else {
        resolve(db);
      }
    });
  });
}
async function _putObject(db, key, value) {
  const request = getObjectStore(db, true).put({
    [DB_DATA_KEYPATH]: key,
    value
  });
  return new DBPromise(request).toPromise();
}
async function getObject(db, key) {
  const request = getObjectStore(db, false).get(key);
  const data = await new DBPromise(request).toPromise();
  return data === void 0 ? null : data.value;
}
function _deleteObject(db, key) {
  const request = getObjectStore(db, true).delete(key);
  return new DBPromise(request).toPromise();
}
var _POLLING_INTERVAL_MS = 800;
var _TRANSACTION_RETRY_COUNT = 3;
var IndexedDBLocalPersistence = class {
  constructor() {
    this.type = "LOCAL";
    this._shouldAllowMigration = true;
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.pendingWrites = 0;
    this.receiver = null;
    this.sender = null;
    this.serviceWorkerReceiverAvailable = false;
    this.activeServiceWorker = null;
    this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {});
  }
  async _openDb() {
    if (this.db) {
      return this.db;
    }
    this.db = await _openDatabase();
    return this.db;
  }
  async _withRetries(op) {
    let numAttempts = 0;
    while (true) {
      try {
        const db = await this._openDb();
        return await op(db);
      } catch (e) {
        if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
          throw e;
        }
        if (this.db) {
          this.db.close();
          this.db = void 0;
        }
      }
    }
  }
  async initializeServiceWorkerMessaging() {
    return _isWorker() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
    this.receiver._subscribe("keyChanged", async (_origin, data) => {
      const keys = await this._poll();
      return {
        keyProcessed: keys.includes(data.key)
      };
    });
    this.receiver._subscribe("ping", async (_origin, _data) => {
      return ["keyChanged"];
    });
  }
  async initializeSender() {
    var _a, _b;
    this.activeServiceWorker = await _getActiveServiceWorker();
    if (!this.activeServiceWorker) {
      return;
    }
    this.sender = new Sender(this.activeServiceWorker);
    const results = await this.sender._send("ping", {}, 800);
    if (!results) {
      return;
    }
    if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged"))) {
      this.serviceWorkerReceiverAvailable = true;
    }
  }
  async notifyServiceWorker(key) {
    if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
      return;
    }
    try {
      await this.sender._send("keyChanged", {
        key
      }, this.serviceWorkerReceiverAvailable ? 800 : 50);
    } catch (_a) {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) {
        return false;
      }
      const db = await _openDatabase();
      await _putObject(db, STORAGE_AVAILABLE_KEY, "1");
      await _deleteObject(db, STORAGE_AVAILABLE_KEY);
      return true;
    } catch (_a) {}
    return false;
  }
  async _withPendingWrite(write) {
    this.pendingWrites++;
    try {
      await write();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(key, value) {
    return this._withPendingWrite(async () => {
      await this._withRetries(db => _putObject(db, key, value));
      this.localCache[key] = value;
      return this.notifyServiceWorker(key);
    });
  }
  async _get(key) {
    const obj = await this._withRetries(db => getObject(db, key));
    this.localCache[key] = obj;
    return obj;
  }
  async _remove(key) {
    return this._withPendingWrite(async () => {
      await this._withRetries(db => _deleteObject(db, key));
      delete this.localCache[key];
      return this.notifyServiceWorker(key);
    });
  }
  async _poll() {
    const result = await this._withRetries(db => {
      const getAllRequest = getObjectStore(db, false).getAll();
      return new DBPromise(getAllRequest).toPromise();
    });
    if (!result) {
      return [];
    }
    if (this.pendingWrites !== 0) {
      return [];
    }
    const keys = [];
    const keysInResult = /* @__PURE__ */new Set();
    for (const {
      fbase_key: key,
      value
    } of result) {
      keysInResult.add(key);
      if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
        this.notifyListeners(key, value);
        keys.push(key);
      }
    }
    for (const localKey of Object.keys(this.localCache)) {
      if (this.localCache[localKey] && !keysInResult.has(localKey)) {
        this.notifyListeners(localKey, null);
        keys.push(localKey);
      }
    }
    return keys;
  }
  notifyListeners(key, newValue) {
    this.localCache[key] = newValue;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(newValue);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      this.startPolling();
    }
    if (!this.listeners[key]) {
      this.listeners[key] = /* @__PURE__ */new Set();
      void this._get(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.stopPolling();
    }
  }
};
IndexedDBLocalPersistence.type = "LOCAL";
var indexedDBLocalPersistence = IndexedDBLocalPersistence;
function startSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:start", _addTidIfNecessary(auth, request));
}
function finalizeSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
}
function finalizeSignInTotpMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
}
var _SOLVE_TIME_MS = 500;
var _EXPIRATION_TIME_MS = 6e4;
var _WIDGET_ID_START = 1e12;
var MockReCaptcha = class {
  constructor(auth) {
    this.auth = auth;
    this.counter = _WIDGET_ID_START;
    this._widgets = /* @__PURE__ */new Map();
  }
  render(container, parameters) {
    const id = this.counter;
    this._widgets.set(id, new MockWidget(container, this.auth.name, parameters || {}));
    this.counter++;
    return id;
  }
  reset(optWidgetId) {
    var _a;
    const id = optWidgetId || _WIDGET_ID_START;
    void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.delete());
    this._widgets.delete(id);
  }
  getResponse(optWidgetId) {
    var _a;
    const id = optWidgetId || _WIDGET_ID_START;
    return ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.getResponse()) || "";
  }
  async execute(optWidgetId) {
    var _a;
    const id = optWidgetId || _WIDGET_ID_START;
    void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.execute());
    return "";
  }
};
var MockWidget = class {
  constructor(containerOrId, appName, params) {
    this.params = params;
    this.timerId = null;
    this.deleted = false;
    this.responseToken = null;
    this.clickHandler = () => {
      this.execute();
    };
    const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
    _assert(container, "argument-error", {
      appName
    });
    this.container = container;
    this.isVisible = this.params.size !== "invisible";
    if (this.isVisible) {
      this.execute();
    } else {
      this.container.addEventListener("click", this.clickHandler);
    }
  }
  getResponse() {
    this.checkIfDeleted();
    return this.responseToken;
  }
  delete() {
    this.checkIfDeleted();
    this.deleted = true;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.container.removeEventListener("click", this.clickHandler);
  }
  execute() {
    this.checkIfDeleted();
    if (this.timerId) {
      return;
    }
    this.timerId = window.setTimeout(() => {
      this.responseToken = generateRandomAlphaNumericString(50);
      const {
        callback,
        "expired-callback": expiredCallback
      } = this.params;
      if (callback) {
        try {
          callback(this.responseToken);
        } catch (e) {}
      }
      this.timerId = window.setTimeout(() => {
        this.timerId = null;
        this.responseToken = null;
        if (expiredCallback) {
          try {
            expiredCallback();
          } catch (e) {}
        }
        if (this.isVisible) {
          this.execute();
        }
      }, _EXPIRATION_TIME_MS);
    }, _SOLVE_TIME_MS);
  }
  checkIfDeleted() {
    if (this.deleted) {
      throw new Error("reCAPTCHA mock was already deleted!");
    }
  }
};
function generateRandomAlphaNumericString(len) {
  const chars = [];
  const allowedChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < len; i++) {
    chars.push(allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)));
  }
  return chars.join("");
}
var _JSLOAD_CALLBACK = _generateCallbackName("rcb");
var NETWORK_TIMEOUT_DELAY = new Delay(3e4, 6e4);
var RECAPTCHA_BASE = "https://www.google.com/recaptcha/api.js?";
var ReCaptchaLoaderImpl = class {
  constructor() {
    var _a;
    this.hostLanguage = "";
    this.counter = 0;
    this.librarySeparatelyLoaded = !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render);
  }
  load(auth, hl = "") {
    _assert(isHostLanguageValid(hl), auth, "argument-error");
    if (this.shouldResolveImmediately(hl) && isV2(_window().grecaptcha)) {
      return Promise.resolve(_window().grecaptcha);
    }
    return new Promise((resolve, reject) => {
      const networkTimeout = _window().setTimeout(() => {
        reject(_createError(auth, "network-request-failed"));
      }, NETWORK_TIMEOUT_DELAY.get());
      _window()[_JSLOAD_CALLBACK] = () => {
        _window().clearTimeout(networkTimeout);
        delete _window()[_JSLOAD_CALLBACK];
        const recaptcha = _window().grecaptcha;
        if (!recaptcha || !isV2(recaptcha)) {
          reject(_createError(auth, "internal-error"));
          return;
        }
        const render = recaptcha.render;
        recaptcha.render = (container, params) => {
          const widgetId = render(container, params);
          this.counter++;
          return widgetId;
        };
        this.hostLanguage = hl;
        resolve(recaptcha);
      };
      const url = `${RECAPTCHA_BASE}?${(0, import_util.querystring)({
        onload: _JSLOAD_CALLBACK,
        render: "explicit",
        hl
      })}`;
      _loadJS(url).catch(() => {
        clearTimeout(networkTimeout);
        reject(_createError(auth, "internal-error"));
      });
    });
  }
  clearedOneInstance() {
    this.counter--;
  }
  shouldResolveImmediately(hl) {
    var _a;
    return !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render) && (hl === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
  }
};
function isHostLanguageValid(hl) {
  return hl.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(hl);
}
var MockReCaptchaLoaderImpl = class {
  async load(auth) {
    return new MockReCaptcha(auth);
  }
  clearedOneInstance() {}
};
var RECAPTCHA_VERIFIER_TYPE = "recaptcha";
var DEFAULT_PARAMS = {
  theme: "light",
  type: "image"
};
var RecaptchaVerifier = class {
  constructor(authExtern, containerOrId, parameters = Object.assign({}, DEFAULT_PARAMS)) {
    this.parameters = parameters;
    this.type = RECAPTCHA_VERIFIER_TYPE;
    this.destroyed = false;
    this.widgetId = null;
    this.tokenChangeListeners = /* @__PURE__ */new Set();
    this.renderPromise = null;
    this.recaptcha = null;
    this.auth = _castAuth(authExtern);
    this.isInvisible = this.parameters.size === "invisible";
    _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment");
    const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
    _assert(container, this.auth, "argument-error");
    this.container = container;
    this.parameters.callback = this.makeTokenCallback(this.parameters.callback);
    this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new MockReCaptchaLoaderImpl() : new ReCaptchaLoaderImpl();
    this.validateStartingState();
  }
  async verify() {
    this.assertNotDestroyed();
    const id = await this.render();
    const recaptcha = this.getAssertedRecaptcha();
    const response = recaptcha.getResponse(id);
    if (response) {
      return response;
    }
    return new Promise(resolve => {
      const tokenChange = token => {
        if (!token) {
          return;
        }
        this.tokenChangeListeners.delete(tokenChange);
        resolve(token);
      };
      this.tokenChangeListeners.add(tokenChange);
      if (this.isInvisible) {
        recaptcha.execute(id);
      }
    });
  }
  render() {
    try {
      this.assertNotDestroyed();
    } catch (e) {
      return Promise.reject(e);
    }
    if (this.renderPromise) {
      return this.renderPromise;
    }
    this.renderPromise = this.makeRenderPromise().catch(e => {
      this.renderPromise = null;
      throw e;
    });
    return this.renderPromise;
  }
  _reset() {
    this.assertNotDestroyed();
    if (this.widgetId !== null) {
      this.getAssertedRecaptcha().reset(this.widgetId);
    }
  }
  clear() {
    this.assertNotDestroyed();
    this.destroyed = true;
    this._recaptchaLoader.clearedOneInstance();
    if (!this.isInvisible) {
      this.container.childNodes.forEach(node => {
        this.container.removeChild(node);
      });
    }
  }
  validateStartingState() {
    _assert(!this.parameters.sitekey, this.auth, "argument-error");
    _assert(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error");
    _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment");
  }
  makeTokenCallback(existing) {
    return token => {
      this.tokenChangeListeners.forEach(listener => listener(token));
      if (typeof existing === "function") {
        existing(token);
      } else if (typeof existing === "string") {
        const globalFunc = _window()[existing];
        if (typeof globalFunc === "function") {
          globalFunc(token);
        }
      }
    };
  }
  assertNotDestroyed() {
    _assert(!this.destroyed, this.auth, "internal-error");
  }
  async makeRenderPromise() {
    await this.init();
    if (!this.widgetId) {
      let container = this.container;
      if (!this.isInvisible) {
        const guaranteedEmpty = document.createElement("div");
        container.appendChild(guaranteedEmpty);
        container = guaranteedEmpty;
      }
      this.widgetId = this.getAssertedRecaptcha().render(container, this.parameters);
    }
    return this.widgetId;
  }
  async init() {
    _assert(_isHttpOrHttps() && !_isWorker(), this.auth, "internal-error");
    await domReady();
    this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
    const siteKey = await getRecaptchaParams(this.auth);
    _assert(siteKey, this.auth, "internal-error");
    this.parameters.sitekey = siteKey;
  }
  getAssertedRecaptcha() {
    _assert(this.recaptcha, this.auth, "internal-error");
    return this.recaptcha;
  }
};
function domReady() {
  let resolver = null;
  return new Promise(resolve => {
    if (document.readyState === "complete") {
      resolve();
      return;
    }
    resolver = () => resolve();
    window.addEventListener("load", resolver);
  }).catch(e => {
    if (resolver) {
      window.removeEventListener("load", resolver);
    }
    throw e;
  });
}
var ConfirmationResultImpl = class {
  constructor(verificationId, onConfirmation) {
    this.verificationId = verificationId;
    this.onConfirmation = onConfirmation;
  }
  confirm(verificationCode) {
    const authCredential = PhoneAuthCredential._fromVerification(this.verificationId, verificationCode);
    return this.onConfirmation(authCredential);
  }
};
async function signInWithPhoneNumber(auth, phoneNumber, appVerifier) {
  const authInternal = _castAuth(auth);
  const verificationId = await _verifyPhoneNumber(authInternal, phoneNumber, (0, import_util.getModularInstance)(appVerifier));
  return new ConfirmationResultImpl(verificationId, cred => signInWithCredential(authInternal, cred));
}
async function linkWithPhoneNumber(user, phoneNumber, appVerifier) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _assertLinkedStatus(false, userInternal, "phone");
  const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, (0, import_util.getModularInstance)(appVerifier));
  return new ConfirmationResultImpl(verificationId, cred => linkWithCredential(userInternal, cred));
}
async function reauthenticateWithPhoneNumber(user, phoneNumber, appVerifier) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, (0, import_util.getModularInstance)(appVerifier));
  return new ConfirmationResultImpl(verificationId, cred => reauthenticateWithCredential(userInternal, cred));
}
async function _verifyPhoneNumber(auth, options, verifier) {
  var _a;
  const recaptchaToken = await verifier.verify();
  try {
    _assert(typeof recaptchaToken === "string", auth, "argument-error");
    _assert(verifier.type === RECAPTCHA_VERIFIER_TYPE, auth, "argument-error");
    let phoneInfoOptions;
    if (typeof options === "string") {
      phoneInfoOptions = {
        phoneNumber: options
      };
    } else {
      phoneInfoOptions = options;
    }
    if ("session" in phoneInfoOptions) {
      const session = phoneInfoOptions.session;
      if ("phoneNumber" in phoneInfoOptions) {
        _assert(session.type === "enroll", auth, "internal-error");
        const response = await startEnrollPhoneMfa(auth, {
          idToken: session.credential,
          phoneEnrollmentInfo: {
            phoneNumber: phoneInfoOptions.phoneNumber,
            recaptchaToken
          }
        });
        return response.phoneSessionInfo.sessionInfo;
      } else {
        _assert(session.type === "signin", auth, "internal-error");
        const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
        _assert(mfaEnrollmentId, auth, "missing-multi-factor-info");
        const response = await startSignInPhoneMfa(auth, {
          mfaPendingCredential: session.credential,
          mfaEnrollmentId,
          phoneSignInInfo: {
            recaptchaToken
          }
        });
        return response.phoneResponseInfo.sessionInfo;
      }
    } else {
      const {
        sessionInfo
      } = await sendPhoneVerificationCode(auth, {
        phoneNumber: phoneInfoOptions.phoneNumber,
        recaptchaToken
      });
      return sessionInfo;
    }
  } finally {
    verifier._reset();
  }
}
async function updatePhoneNumber(user, credential) {
  await _link$1((0, import_util.getModularInstance)(user), credential);
}
var PhoneAuthProvider = class {
  constructor(auth) {
    this.providerId = PhoneAuthProvider.PROVIDER_ID;
    this.auth = _castAuth(auth);
  }
  verifyPhoneNumber(phoneOptions, applicationVerifier) {
    return _verifyPhoneNumber(this.auth, phoneOptions, (0, import_util.getModularInstance)(applicationVerifier));
  }
  static credential(verificationId, verificationCode) {
    return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
  }
  static credentialFromResult(userCredential) {
    const credential = userCredential;
    return PhoneAuthProvider.credentialFromTaggedObject(credential);
  }
  static credentialFromError(error) {
    return PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      phoneNumber,
      temporaryProof
    } = tokenResponse;
    if (phoneNumber && temporaryProof) {
      return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
    }
    return null;
  }
};
PhoneAuthProvider.PROVIDER_ID = "phone";
PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone";
function _withDefaultResolver(auth, resolverOverride) {
  if (resolverOverride) {
    return _getInstance(resolverOverride);
  }
  _assert(auth._popupRedirectResolver, auth, "argument-error");
  return auth._popupRedirectResolver;
}
var IdpCredential = class extends AuthCredential {
  constructor(params) {
    super("custom", "custom");
    this.params = params;
  }
  _getIdTokenResponse(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  }
  _linkToIdToken(auth, idToken) {
    return signInWithIdp(auth, this._buildIdpRequest(idToken));
  }
  _getReauthenticationResolver(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  }
  _buildIdpRequest(idToken) {
    const request = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: true,
      returnIdpCredential: true
    };
    if (idToken) {
      request.idToken = idToken;
    }
    return request;
  }
};
function _signIn(params) {
  return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
}
function _reauth(params) {
  const {
    auth,
    user
  } = params;
  _assert(user, auth, "internal-error");
  return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}
async function _link(params) {
  const {
    auth,
    user
  } = params;
  _assert(user, auth, "internal-error");
  return _link$1(user, new IdpCredential(params), params.bypassAuthState);
}
var AbstractPopupRedirectOperation = class {
  constructor(auth, filter, resolver, user, bypassAuthState = false) {
    this.auth = auth;
    this.resolver = resolver;
    this.user = user;
    this.bypassAuthState = bypassAuthState;
    this.pendingPromise = null;
    this.eventManager = null;
    this.filter = Array.isArray(filter) ? filter : [filter];
  }
  execute() {
    return new Promise(async (resolve, reject) => {
      this.pendingPromise = {
        resolve,
        reject
      };
      try {
        this.eventManager = await this.resolver._initialize(this.auth);
        await this.onExecution();
        this.eventManager.registerConsumer(this);
      } catch (e) {
        this.reject(e);
      }
    });
  }
  async onAuthEvent(event) {
    const {
      urlResponse,
      sessionId,
      postBody,
      tenantId,
      error,
      type
    } = event;
    if (error) {
      this.reject(error);
      return;
    }
    const params = {
      auth: this.auth,
      requestUri: urlResponse,
      sessionId,
      tenantId: tenantId || void 0,
      postBody: postBody || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(type)(params));
    } catch (e) {
      this.reject(e);
    }
  }
  onError(error) {
    this.reject(error);
  }
  getIdpTask(type) {
    switch (type) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return _signIn;
      case "linkViaPopup":
      case "linkViaRedirect":
        return _link;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return _reauth;
      default:
        _fail(this.auth, "internal-error");
    }
  }
  resolve(cred) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.resolve(cred);
    this.unregisterAndCleanUp();
  }
  reject(error) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.reject(error);
    this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    if (this.eventManager) {
      this.eventManager.unregisterConsumer(this);
    }
    this.pendingPromise = null;
    this.cleanUp();
  }
};
var _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
async function signInWithPopup(auth, provider, resolver) {
  const authInternal = _castAuth(auth);
  _assertInstanceOf(auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(authInternal, resolver);
  const action = new PopupOperation(authInternal, "signInViaPopup", provider, resolverInternal);
  return action.executeNotNull();
}
async function reauthenticateWithPopup(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  const action = new PopupOperation(userInternal.auth, "reauthViaPopup", provider, resolverInternal, userInternal);
  return action.executeNotNull();
}
async function linkWithPopup(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  const action = new PopupOperation(userInternal.auth, "linkViaPopup", provider, resolverInternal, userInternal);
  return action.executeNotNull();
}
var PopupOperation = class extends AbstractPopupRedirectOperation {
  constructor(auth, filter, provider, resolver, user) {
    super(auth, filter, resolver, user);
    this.provider = provider;
    this.authWindow = null;
    this.pollId = null;
    if (PopupOperation.currentPopupAction) {
      PopupOperation.currentPopupAction.cancel();
    }
    PopupOperation.currentPopupAction = this;
  }
  async executeNotNull() {
    const result = await this.execute();
    _assert(result, this.auth, "internal-error");
    return result;
  }
  async onExecution() {
    debugAssert(this.filter.length === 1, "Popup operations only handle one event");
    const eventId = _generateEventId();
    this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], eventId);
    this.authWindow.associatedEvent = eventId;
    this.resolver._originValidation(this.auth).catch(e => {
      this.reject(e);
    });
    this.resolver._isIframeWebStorageSupported(this.auth, isSupported => {
      if (!isSupported) {
        this.reject(_createError(this.auth, "web-storage-unsupported"));
      }
    });
    this.pollUserCancellation();
  }
  get eventId() {
    var _a;
    return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
  }
  cancel() {
    this.reject(_createError(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    if (this.authWindow) {
      this.authWindow.close();
    }
    if (this.pollId) {
      window.clearTimeout(this.pollId);
    }
    this.authWindow = null;
    this.pollId = null;
    PopupOperation.currentPopupAction = null;
  }
  pollUserCancellation() {
    const poll = () => {
      var _a, _b;
      if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
        this.pollId = window.setTimeout(() => {
          this.pollId = null;
          this.reject(_createError(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
    };
    poll();
  }
};
PopupOperation.currentPopupAction = null;
var PENDING_REDIRECT_KEY = "pendingRedirect";
var redirectOutcomeMap = /* @__PURE__ */new Map();
var RedirectAction = class extends AbstractPopupRedirectOperation {
  constructor(auth, resolver, bypassAuthState = false) {
    super(auth, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], resolver, void 0, bypassAuthState);
    this.eventId = null;
  }
  async execute() {
    let readyOutcome = redirectOutcomeMap.get(this.auth._key());
    if (!readyOutcome) {
      try {
        const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
        const result = hasPendingRedirect ? await super.execute() : null;
        readyOutcome = () => Promise.resolve(result);
      } catch (e) {
        readyOutcome = () => Promise.reject(e);
      }
      redirectOutcomeMap.set(this.auth._key(), readyOutcome);
    }
    if (!this.bypassAuthState) {
      redirectOutcomeMap.set(this.auth._key(), () => Promise.resolve(null));
    }
    return readyOutcome();
  }
  async onAuthEvent(event) {
    if (event.type === "signInViaRedirect") {
      return super.onAuthEvent(event);
    } else if (event.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (event.eventId) {
      const user = await this.auth._redirectUserForId(event.eventId);
      if (user) {
        this.user = user;
        return super.onAuthEvent(event);
      } else {
        this.resolve(null);
      }
    }
  }
  async onExecution() {}
  cleanUp() {}
};
async function _getAndClearPendingRedirectStatus(resolver, auth) {
  const key = pendingRedirectKey(auth);
  const persistence = resolverPersistence(resolver);
  if (!(await persistence._isAvailable())) {
    return false;
  }
  const hasPendingRedirect = (await persistence._get(key)) === "true";
  await persistence._remove(key);
  return hasPendingRedirect;
}
async function _setPendingRedirectStatus(resolver, auth) {
  return resolverPersistence(resolver)._set(pendingRedirectKey(auth), "true");
}
function _clearRedirectOutcomes() {
  redirectOutcomeMap.clear();
}
function _overrideRedirectResult(auth, result) {
  redirectOutcomeMap.set(auth._key(), result);
}
function resolverPersistence(resolver) {
  return _getInstance(resolver._redirectPersistence);
}
function pendingRedirectKey(auth) {
  return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
}
function signInWithRedirect(auth, provider, resolver) {
  return _signInWithRedirect(auth, provider, resolver);
}
async function _signInWithRedirect(auth, provider, resolver) {
  const authInternal = _castAuth(auth);
  _assertInstanceOf(auth, provider, FederatedAuthProvider);
  await authInternal._initializationPromise;
  const resolverInternal = _withDefaultResolver(authInternal, resolver);
  await _setPendingRedirectStatus(resolverInternal, authInternal);
  return resolverInternal._openRedirect(authInternal, provider, "signInViaRedirect");
}
function reauthenticateWithRedirect(user, provider, resolver) {
  return _reauthenticateWithRedirect(user, provider, resolver);
}
async function _reauthenticateWithRedirect(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  await userInternal.auth._initializationPromise;
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
  const eventId = await prepareUserForRedirect(userInternal);
  return resolverInternal._openRedirect(userInternal.auth, provider, "reauthViaRedirect", eventId);
}
function linkWithRedirect(user, provider, resolver) {
  return _linkWithRedirect(user, provider, resolver);
}
async function _linkWithRedirect(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  await userInternal.auth._initializationPromise;
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  await _assertLinkedStatus(false, userInternal, provider.providerId);
  await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
  const eventId = await prepareUserForRedirect(userInternal);
  return resolverInternal._openRedirect(userInternal.auth, provider, "linkViaRedirect", eventId);
}
async function getRedirectResult(auth, resolver) {
  await _castAuth(auth)._initializationPromise;
  return _getRedirectResult(auth, resolver, false);
}
async function _getRedirectResult(auth, resolverExtern, bypassAuthState = false) {
  const authInternal = _castAuth(auth);
  const resolver = _withDefaultResolver(authInternal, resolverExtern);
  const action = new RedirectAction(authInternal, resolver, bypassAuthState);
  const result = await action.execute();
  if (result && !bypassAuthState) {
    delete result.user._redirectEventId;
    await authInternal._persistUserIfCurrent(result.user);
    await authInternal._setRedirectUser(null, resolverExtern);
  }
  return result;
}
async function prepareUserForRedirect(user) {
  const eventId = _generateEventId(`${user.uid}:::`);
  user._redirectEventId = eventId;
  await user.auth._setRedirectUser(user);
  await user.auth._persistUserIfCurrent(user);
  return eventId;
}
var EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
var AuthEventManager = class {
  constructor(auth) {
    this.auth = auth;
    this.cachedEventUids = /* @__PURE__ */new Set();
    this.consumers = /* @__PURE__ */new Set();
    this.queuedRedirectEvent = null;
    this.hasHandledPotentialRedirect = false;
    this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(authEventConsumer) {
    this.consumers.add(authEventConsumer);
    if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
      this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
      this.saveEventToCache(this.queuedRedirectEvent);
      this.queuedRedirectEvent = null;
    }
  }
  unregisterConsumer(authEventConsumer) {
    this.consumers.delete(authEventConsumer);
  }
  onEvent(event) {
    if (this.hasEventBeenHandled(event)) {
      return false;
    }
    let handled = false;
    this.consumers.forEach(consumer => {
      if (this.isEventForConsumer(event, consumer)) {
        handled = true;
        this.sendToConsumer(event, consumer);
        this.saveEventToCache(event);
      }
    });
    if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
      return handled;
    }
    this.hasHandledPotentialRedirect = true;
    if (!handled) {
      this.queuedRedirectEvent = event;
      handled = true;
    }
    return handled;
  }
  sendToConsumer(event, consumer) {
    var _a;
    if (event.error && !isNullRedirectEvent(event)) {
      const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split("auth/")[1]) || "internal-error";
      consumer.onError(_createError(this.auth, code));
    } else {
      consumer.onAuthEvent(event);
    }
  }
  isEventForConsumer(event, consumer) {
    const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
    return consumer.filter.includes(event.type) && eventIdMatches;
  }
  hasEventBeenHandled(event) {
    if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
      this.cachedEventUids.clear();
    }
    return this.cachedEventUids.has(eventUid(event));
  }
  saveEventToCache(event) {
    this.cachedEventUids.add(eventUid(event));
    this.lastProcessedEventTime = Date.now();
  }
};
function eventUid(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId].filter(v => v).join("-");
}
function isNullRedirectEvent({
  type,
  error
}) {
  return type === "unknown" && (error === null || error === void 0 ? void 0 : error.code) === `auth/${"no-auth-event"}`;
}
function isRedirectEvent(event) {
  switch (event.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return true;
    case "unknown":
      return isNullRedirectEvent(event);
    default:
      return false;
  }
}
async function _getProjectConfig(auth, request = {}) {
  return _performApiRequest(auth, "GET", "/v1/projects", request);
}
var IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
var HTTP_REGEX = /^https?/;
async function _validateOrigin(auth) {
  if (auth.config.emulator) {
    return;
  }
  const {
    authorizedDomains
  } = await _getProjectConfig(auth);
  for (const domain of authorizedDomains) {
    try {
      if (matchDomain(domain)) {
        return;
      }
    } catch (_a) {}
  }
  _fail(auth, "unauthorized-domain");
}
function matchDomain(expected) {
  const currentUrl = _getCurrentUrl();
  const {
    protocol,
    hostname
  } = new URL(currentUrl);
  if (expected.startsWith("chrome-extension://")) {
    const ceUrl = new URL(expected);
    if (ceUrl.hostname === "" && hostname === "") {
      return protocol === "chrome-extension:" && expected.replace("chrome-extension://", "") === currentUrl.replace("chrome-extension://", "");
    }
    return protocol === "chrome-extension:" && ceUrl.hostname === hostname;
  }
  if (!HTTP_REGEX.test(protocol)) {
    return false;
  }
  if (IP_ADDRESS_REGEX.test(expected)) {
    return hostname === expected;
  }
  const escapedDomainPattern = expected.replace(/\./g, "\\.");
  const re = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern + ")$", "i");
  return re.test(hostname);
}
var NETWORK_TIMEOUT = new Delay(3e4, 6e4);
function resetUnloadedGapiModules() {
  const beacon = _window().___jsl;
  if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
    for (const hint of Object.keys(beacon.H)) {
      beacon.H[hint].r = beacon.H[hint].r || [];
      beacon.H[hint].L = beacon.H[hint].L || [];
      beacon.H[hint].r = [...beacon.H[hint].L];
      if (beacon.CP) {
        for (let i = 0; i < beacon.CP.length; i++) {
          beacon.CP[i] = null;
        }
      }
    }
  }
}
function loadGapi(auth) {
  return new Promise((resolve, reject) => {
    var _a, _b, _c;
    function loadGapiIframe() {
      resetUnloadedGapiModules();
      gapi.load("gapi.iframes", {
        callback: () => {
          resolve(gapi.iframes.getContext());
        },
        ontimeout: () => {
          resetUnloadedGapiModules();
          reject(_createError(auth, "network-request-failed"));
        },
        timeout: NETWORK_TIMEOUT.get()
      });
    }
    if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
      resolve(gapi.iframes.getContext());
    } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
      loadGapiIframe();
    } else {
      const cbName = _generateCallbackName("iframefcb");
      _window()[cbName] = () => {
        if (!!gapi.load) {
          loadGapiIframe();
        } else {
          reject(_createError(auth, "network-request-failed"));
        }
      };
      return _loadJS(`https://apis.google.com/js/api.js?onload=${cbName}`).catch(e => reject(e));
    }
  }).catch(error => {
    cachedGApiLoader = null;
    throw error;
  });
}
var cachedGApiLoader = null;
function _loadGapi(auth) {
  cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
  return cachedGApiLoader;
}
var PING_TIMEOUT = new Delay(5e3, 15e3);
var IFRAME_PATH = "__/auth/iframe";
var EMULATED_IFRAME_PATH = "emulator/auth/iframe";
var IFRAME_ATTRIBUTES = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
};
var EID_FROM_APIHOST = /* @__PURE__ */new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
function getIframeUrl(auth) {
  const config = auth.config;
  _assert(config.authDomain, auth, "auth-domain-config-required");
  const url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : `https://${auth.config.authDomain}/${IFRAME_PATH}`;
  const params = {
    apiKey: config.apiKey,
    appName: auth.name,
    v: import_app.SDK_VERSION
  };
  const eid = EID_FROM_APIHOST.get(auth.config.apiHost);
  if (eid) {
    params.eid = eid;
  }
  const frameworks = auth._getFrameworks();
  if (frameworks.length) {
    params.fw = frameworks.join(",");
  }
  return `${url}?${(0, import_util.querystring)(params).slice(1)}`;
}
async function _openIframe(auth) {
  const context = await _loadGapi(auth);
  const gapi2 = _window().gapi;
  _assert(gapi2, auth, "internal-error");
  return context.open({
    where: document.body,
    url: getIframeUrl(auth),
    messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: IFRAME_ATTRIBUTES,
    dontclear: true
  }, iframe => new Promise(async (resolve, reject) => {
    await iframe.restyle({
      setHideOnLeave: false
    });
    const networkError = _createError(auth, "network-request-failed");
    const networkErrorTimer = _window().setTimeout(() => {
      reject(networkError);
    }, PING_TIMEOUT.get());
    function clearTimerAndResolve() {
      _window().clearTimeout(networkErrorTimer);
      resolve(iframe);
    }
    iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
      reject(networkError);
    });
  }));
}
var BASE_POPUP_OPTIONS = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
};
var DEFAULT_WIDTH = 500;
var DEFAULT_HEIGHT = 600;
var TARGET_BLANK = "_blank";
var FIREFOX_EMPTY_URL = "http://localhost";
var AuthPopup = class {
  constructor(window2) {
    this.window = window2;
    this.associatedEvent = null;
  }
  close() {
    if (this.window) {
      try {
        this.window.close();
      } catch (e) {}
    }
  }
};
function _open(auth, url, name2, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
  const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
  const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
  let target = "";
  const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
    width: width.toString(),
    height: height.toString(),
    top,
    left
  });
  const ua = (0, import_util.getUA)().toLowerCase();
  if (name2) {
    target = _isChromeIOS(ua) ? TARGET_BLANK : name2;
  }
  if (_isFirefox(ua)) {
    url = url || FIREFOX_EMPTY_URL;
    options.scrollbars = "yes";
  }
  const optionsString = Object.entries(options).reduce((accum, [key, value]) => `${accum}${key}=${value},`, "");
  if (_isIOSStandalone(ua) && target !== "_self") {
    openAsNewWindowIOS(url || "", target);
    return new AuthPopup(null);
  }
  const newWin = window.open(url || "", target, optionsString);
  _assert(newWin, auth, "popup-blocked");
  try {
    newWin.focus();
  } catch (e) {}
  return new AuthPopup(newWin);
}
function openAsNewWindowIOS(url, target) {
  const el = document.createElement("a");
  el.href = url;
  el.target = target;
  const click = document.createEvent("MouseEvent");
  click.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  el.dispatchEvent(click);
}
var WIDGET_PATH = "__/auth/handler";
var EMULATOR_WIDGET_PATH = "emulator/auth/handler";
var FIREBASE_APP_CHECK_FRAGMENT_ID = encodeURIComponent("fac");
async function _getRedirectUrl(auth, provider, authType, redirectUrl, eventId, additionalParams) {
  _assert(auth.config.authDomain, auth, "auth-domain-config-required");
  _assert(auth.config.apiKey, auth, "invalid-api-key");
  const params = {
    apiKey: auth.config.apiKey,
    appName: auth.name,
    authType,
    redirectUrl,
    v: import_app.SDK_VERSION,
    eventId
  };
  if (provider instanceof FederatedAuthProvider) {
    provider.setDefaultLanguage(auth.languageCode);
    params.providerId = provider.providerId || "";
    if (!(0, import_util.isEmpty)(provider.getCustomParameters())) {
      params.customParameters = JSON.stringify(provider.getCustomParameters());
    }
    for (const [key, value] of Object.entries(additionalParams || {})) {
      params[key] = value;
    }
  }
  if (provider instanceof BaseOAuthProvider) {
    const scopes = provider.getScopes().filter(scope => scope !== "");
    if (scopes.length > 0) {
      params.scopes = scopes.join(",");
    }
  }
  if (auth.tenantId) {
    params.tid = auth.tenantId;
  }
  const paramsDict = params;
  for (const key of Object.keys(paramsDict)) {
    if (paramsDict[key] === void 0) {
      delete paramsDict[key];
    }
  }
  const appCheckToken = await auth._getAppCheckToken();
  const appCheckTokenFragment = appCheckToken ? `#${FIREBASE_APP_CHECK_FRAGMENT_ID}=${encodeURIComponent(appCheckToken)}` : "";
  return `${getHandlerBase(auth)}?${(0, import_util.querystring)(paramsDict).slice(1)}${appCheckTokenFragment}`;
}
function getHandlerBase({
  config
}) {
  if (!config.emulator) {
    return `https://${config.authDomain}/${WIDGET_PATH}`;
  }
  return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
}
var WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
var BrowserPopupRedirectResolver = class {
  constructor() {
    this.eventManagers = {};
    this.iframes = {};
    this.originValidationPromises = {};
    this._redirectPersistence = browserSessionPersistence;
    this._completeRedirectFn = _getRedirectResult;
    this._overrideRedirectResult = _overrideRedirectResult;
  }
  async _openPopup(auth, provider, authType, eventId) {
    var _a;
    debugAssert((_a = this.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, "_initialize() not called before _openPopup()");
    const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
    return _open(auth, url, _generateEventId());
  }
  async _openRedirect(auth, provider, authType, eventId) {
    await this._originValidation(auth);
    const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
    _setWindowLocation(url);
    return new Promise(() => {});
  }
  _initialize(auth) {
    const key = auth._key();
    if (this.eventManagers[key]) {
      const {
        manager,
        promise: promise2
      } = this.eventManagers[key];
      if (manager) {
        return Promise.resolve(manager);
      } else {
        debugAssert(promise2, "If manager is not set, promise should be");
        return promise2;
      }
    }
    const promise = this.initAndGetManager(auth);
    this.eventManagers[key] = {
      promise
    };
    promise.catch(() => {
      delete this.eventManagers[key];
    });
    return promise;
  }
  async initAndGetManager(auth) {
    const iframe = await _openIframe(auth);
    const manager = new AuthEventManager(auth);
    iframe.register("authEvent", iframeEvent => {
      _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth, "invalid-auth-event");
      const handled = manager.onEvent(iframeEvent.authEvent);
      return {
        status: handled ? "ACK" : "ERROR"
      };
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
    this.eventManagers[auth._key()] = {
      manager
    };
    this.iframes[auth._key()] = iframe;
    return manager;
  }
  _isIframeWebStorageSupported(auth, cb) {
    const iframe = this.iframes[auth._key()];
    iframe.send(WEB_STORAGE_SUPPORT_KEY, {
      type: WEB_STORAGE_SUPPORT_KEY
    }, result => {
      var _a;
      const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
      if (isSupported !== void 0) {
        cb(!!isSupported);
      }
      _fail(auth, "internal-error");
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(auth) {
    const key = auth._key();
    if (!this.originValidationPromises[key]) {
      this.originValidationPromises[key] = _validateOrigin(auth);
    }
    return this.originValidationPromises[key];
  }
  get _shouldInitProactively() {
    return _isMobileBrowser() || _isSafari() || _isIOS();
  }
};
var browserPopupRedirectResolver = BrowserPopupRedirectResolver;
var MultiFactorAssertionImpl = class {
  constructor(factorId) {
    this.factorId = factorId;
  }
  _process(auth, session, displayName) {
    switch (session.type) {
      case "enroll":
        return this._finalizeEnroll(auth, session.credential, displayName);
      case "signin":
        return this._finalizeSignIn(auth, session.credential);
      default:
        return debugFail("unexpected MultiFactorSessionType");
    }
  }
};
var PhoneMultiFactorAssertionImpl = class extends MultiFactorAssertionImpl {
  constructor(credential) {
    super("phone");
    this.credential = credential;
  }
  static _fromCredential(credential) {
    return new PhoneMultiFactorAssertionImpl(credential);
  }
  _finalizeEnroll(auth, idToken, displayName) {
    return finalizeEnrollPhoneMfa(auth, {
      idToken,
      displayName,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
  _finalizeSignIn(auth, mfaPendingCredential) {
    return finalizeSignInPhoneMfa(auth, {
      mfaPendingCredential,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
};
var PhoneMultiFactorGenerator = class {
  constructor() {}
  static assertion(credential) {
    return PhoneMultiFactorAssertionImpl._fromCredential(credential);
  }
};
PhoneMultiFactorGenerator.FACTOR_ID = "phone";
var TotpMultiFactorGenerator = class {
  static assertionForEnrollment(secret, oneTimePassword) {
    return TotpMultiFactorAssertionImpl._fromSecret(secret, oneTimePassword);
  }
  static assertionForSignIn(enrollmentId, oneTimePassword) {
    return TotpMultiFactorAssertionImpl._fromEnrollmentId(enrollmentId, oneTimePassword);
  }
  static async generateSecret(session) {
    var _a;
    const mfaSession = session;
    _assert(typeof ((_a = mfaSession.user) === null || _a === void 0 ? void 0 : _a.auth) !== "undefined", "internal-error");
    const response = await startEnrollTotpMfa(mfaSession.user.auth, {
      idToken: mfaSession.credential,
      totpEnrollmentInfo: {}
    });
    return TotpSecret._fromStartTotpMfaEnrollmentResponse(response, mfaSession.user.auth);
  }
};
TotpMultiFactorGenerator.FACTOR_ID = "totp";
var TotpMultiFactorAssertionImpl = class extends MultiFactorAssertionImpl {
  constructor(otp, enrollmentId, secret) {
    super("totp");
    this.otp = otp;
    this.enrollmentId = enrollmentId;
    this.secret = secret;
  }
  static _fromSecret(secret, otp) {
    return new TotpMultiFactorAssertionImpl(otp, void 0, secret);
  }
  static _fromEnrollmentId(enrollmentId, otp) {
    return new TotpMultiFactorAssertionImpl(otp, enrollmentId);
  }
  async _finalizeEnroll(auth, idToken, displayName) {
    _assert(typeof this.secret !== "undefined", auth, "argument-error");
    return finalizeEnrollTotpMfa(auth, {
      idToken,
      displayName,
      totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
    });
  }
  async _finalizeSignIn(auth, mfaPendingCredential) {
    _assert(this.enrollmentId !== void 0 && this.otp !== void 0, auth, "argument-error");
    const totpVerificationInfo = {
      verificationCode: this.otp
    };
    return finalizeSignInTotpMfa(auth, {
      mfaPendingCredential,
      mfaEnrollmentId: this.enrollmentId,
      totpVerificationInfo
    });
  }
};
var TotpSecret = class {
  constructor(secretKey, hashingAlgorithm, codeLength, codeIntervalSeconds, enrollmentCompletionDeadline, sessionInfo, auth) {
    this.sessionInfo = sessionInfo;
    this.auth = auth;
    this.secretKey = secretKey;
    this.hashingAlgorithm = hashingAlgorithm;
    this.codeLength = codeLength;
    this.codeIntervalSeconds = codeIntervalSeconds;
    this.enrollmentCompletionDeadline = enrollmentCompletionDeadline;
  }
  static _fromStartTotpMfaEnrollmentResponse(response, auth) {
    return new TotpSecret(response.totpSessionInfo.sharedSecretKey, response.totpSessionInfo.hashingAlgorithm, response.totpSessionInfo.verificationCodeLength, response.totpSessionInfo.periodSec, new Date(response.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), response.totpSessionInfo.sessionInfo, auth);
  }
  _makeTotpVerificationInfo(otp) {
    return {
      sessionInfo: this.sessionInfo,
      verificationCode: otp
    };
  }
  generateQrCodeUrl(accountName, issuer) {
    var _a;
    let useDefaults = false;
    if (_isEmptyString(accountName) || _isEmptyString(issuer)) {
      useDefaults = true;
    }
    if (useDefaults) {
      if (_isEmptyString(accountName)) {
        accountName = ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.email) || "unknownuser";
      }
      if (_isEmptyString(issuer)) {
        issuer = this.auth.name;
      }
    }
    return `otpauth://totp/${issuer}:${accountName}?secret=${this.secretKey}&issuer=${issuer}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
  }
};
function _isEmptyString(input) {
  return typeof input === "undefined" || (input === null || input === void 0 ? void 0 : input.length) === 0;
}
var name = "@firebase/auth";
var version = "1.1.0";
var AuthInterop = class {
  constructor(auth) {
    this.auth = auth;
    this.internalListeners = /* @__PURE__ */new Map();
  }
  getUid() {
    var _a;
    this.assertAuthConfigured();
    return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
  }
  async getToken(forceRefresh) {
    this.assertAuthConfigured();
    await this.auth._initializationPromise;
    if (!this.auth.currentUser) {
      return null;
    }
    const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
    return {
      accessToken
    };
  }
  addAuthTokenListener(listener) {
    this.assertAuthConfigured();
    if (this.internalListeners.has(listener)) {
      return;
    }
    const unsubscribe = this.auth.onIdTokenChanged(user => {
      listener((user === null || user === void 0 ? void 0 : user.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(listener, unsubscribe);
    this.updateProactiveRefresh();
  }
  removeAuthTokenListener(listener) {
    this.assertAuthConfigured();
    const unsubscribe = this.internalListeners.get(listener);
    if (!unsubscribe) {
      return;
    }
    this.internalListeners.delete(listener);
    unsubscribe();
    this.updateProactiveRefresh();
  }
  assertAuthConfigured() {
    _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
  }
  updateProactiveRefresh() {
    if (this.internalListeners.size > 0) {
      this.auth._startProactiveRefresh();
    } else {
      this.auth._stopProactiveRefresh();
    }
  }
};
function getVersionForPlatform(clientPlatform) {
  switch (clientPlatform) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return void 0;
  }
}
function registerAuth(clientPlatform) {
  (0, import_app._registerComponent)(new import_component.Component("auth", (container, {
    options: deps
  }) => {
    const app = container.getProvider("app").getImmediate();
    const heartbeatServiceProvider = container.getProvider("heartbeat");
    const appCheckServiceProvider = container.getProvider("app-check-internal");
    const {
      apiKey,
      authDomain
    } = app.options;
    _assert(apiKey && !apiKey.includes(":"), "invalid-api-key", {
      appName: app.name
    });
    const config = {
      apiKey,
      authDomain,
      clientPlatform,
      apiHost: "identitytoolkit.googleapis.com",
      tokenApiHost: "securetoken.googleapis.com",
      apiScheme: "https",
      sdkClientVersion: _getClientVersion(clientPlatform)
    };
    const authInstance = new AuthImpl(app, heartbeatServiceProvider, appCheckServiceProvider, config);
    _initializeAuthInstance(authInstance, deps);
    return authInstance;
  }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
    const authInternalProvider = container.getProvider("auth-internal");
    authInternalProvider.initialize();
  }));
  (0, import_app._registerComponent)(new import_component.Component("auth-internal", container => {
    const auth = _castAuth(container.getProvider("auth").getImmediate());
    return (auth2 => new AuthInterop(auth2))(auth);
  }, "PRIVATE").setInstantiationMode("EXPLICIT"));
  (0, import_app.registerVersion)(name, version, getVersionForPlatform(clientPlatform));
  (0, import_app.registerVersion)(name, version, "esm2017");
}
var DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60;
var authIdTokenMaxAge = (0, import_util.getExperimentalSetting)("authIdTokenMaxAge") || DEFAULT_ID_TOKEN_MAX_AGE;
var lastPostedIdToken = null;
var mintCookieFactory = url => async user => {
  const idTokenResult = user && (await user.getIdTokenResult());
  const idTokenAge = idTokenResult && (new Date().getTime() - Date.parse(idTokenResult.issuedAtTime)) / 1e3;
  if (idTokenAge && idTokenAge > authIdTokenMaxAge) {
    return;
  }
  const idToken = idTokenResult === null || idTokenResult === void 0 ? void 0 : idTokenResult.token;
  if (lastPostedIdToken === idToken) {
    return;
  }
  lastPostedIdToken = idToken;
  await fetch(url, {
    method: idToken ? "POST" : "DELETE",
    headers: idToken ? {
      "Authorization": `Bearer ${idToken}`
    } : {}
  });
};
function getAuth(app = (0, import_app.getApp)()) {
  const provider = (0, import_app._getProvider)(app, "auth");
  if (provider.isInitialized()) {
    return provider.getImmediate();
  }
  const auth = initializeAuth(app, {
    popupRedirectResolver: browserPopupRedirectResolver,
    persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence]
  });
  const authTokenSyncUrl = (0, import_util.getExperimentalSetting)("authTokenSyncURL");
  if (authTokenSyncUrl) {
    const mintCookie = mintCookieFactory(authTokenSyncUrl);
    beforeAuthStateChanged(auth, mintCookie, () => mintCookie(auth.currentUser));
    onIdTokenChanged(auth, user => mintCookie(user));
  }
  const authEmulatorHost = (0, import_util.getDefaultEmulatorHost)("auth");
  if (authEmulatorHost) {
    connectAuthEmulator(auth, `http://${authEmulatorHost}`);
  }
  return auth;
}
registerAuth("Browser");

// node_modules/@firebase/auth/dist/esm2017/index.js
var import_util2 = require("@firebase/util@1.9.3");
var import_app2 = require("@firebase/app@0.9.15");
var import_tslib2 = require("tslib@2.6.1");
var import_logger2 = require("@firebase/logger@0.4.0");
var import_component2 = require("@firebase/component@0.6.4");
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
/**
 * @license
 * Copyright 2020 Google LLC.
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
 * Copyright 2022 Google LLC
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hdXRoLjEuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tb2RlbC9lbnVtX21hcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYXNzZXJ0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9jYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9uYXZpZ2F0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9kZWxheS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZmV0Y2hfcHJvdmlkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9hY2NvdW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2lkX3Rva2VuX3Jlc3VsdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2ludmFsaWRhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Byb2FjdGl2ZV9yZWZyZXNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9tZXRhZGF0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlbG9hZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdG9rZW5fbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2luc3RhbnRpYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbl9tZW1vcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvcGVyc2lzdGVuY2VfdXNlcl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9yZWNhcHRjaGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9sb2FkX2pzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfZW50ZXJwcmlzZV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL21pZGRsZXdhcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9pbml0aWFsaXplLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvYXV0aF9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zbXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYWN0aW9uX2NvZGVfdXJsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmVkZXJhdGVkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmFjZWJvb2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dvb2dsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ2l0aHViLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3R3aXR0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zaWduX3VwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9jcmVkZW50aWFsX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hbm9ueW1vdXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfZXJyb3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9wcm92aWRlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9saW5rX3VubGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlYXV0aGVudGljYXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWN0aW9uX2NvZGVfc2V0dGluZ3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3JlYXRlX2F1dGhfdXJpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvcHJvZmlsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FjY291bnRfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FkZGl0aW9uYWxfdXNlcl9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Nlc3Npb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3VzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9sb2NhbF9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL3Nlc3Npb25fc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9wcm9taXNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3JlY2VpdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZXZlbnRfaWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvc2VuZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2F1dGhfd2luZG93LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3V0aWwvd29ya2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2luZGV4ZWRfZGIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9tb2NrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbG9hZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfdmVyaWZpZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wcm92aWRlcnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fic3RyYWN0X3BvcHVwX3JlZGlyZWN0X29wZXJhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfZXZlbnRfbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL3Byb2plY3RfY29uZmlnL2dldF9wcm9qZWN0X2NvbmZpZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZhbGlkYXRlX29yaWdpbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pZnJhbWUvZ2FwaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pZnJhbWUvaWZyYW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3V0aWwvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9oYW5kbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BvcHVwX3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Fzc2VydGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZmEvYXNzZXJ0aW9ucy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL2Fzc2VydGlvbnMvdG90cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2ZpcmViYXNlX2ludGVybmFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvcmVnaXN0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvZGlzdC9lc20yMDE3L2luZGV4LmpzIl0sIm5hbWVzIjpbImF1dGhfMV8xXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQWN0aW9uQ29kZU9wZXJhdGlvbiIsIkFjdGlvbkNvZGVVUkwiLCJBdXRoQ3JlZGVudGlhbCIsIkF1dGhFcnJvckNvZGVzIiwiQVVUSF9FUlJPUl9DT0RFU19NQVBfRE9fTk9UX1VTRV9JTlRFUk5BTExZIiwiRW1haWxBdXRoQ3JlZGVudGlhbCIsIkVtYWlsQXV0aFByb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJGYWN0b3JJZCIsIkdpdGh1YkF1dGhQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsIk9BdXRoQ3JlZGVudGlhbCIsIk9BdXRoUHJvdmlkZXIiLCJPcGVyYXRpb25UeXBlIiwiUGhvbmVBdXRoQ3JlZGVudGlhbCIsIlBob25lQXV0aFByb3ZpZGVyIiwiUGhvbmVNdWx0aUZhY3RvckdlbmVyYXRvciIsIlByb3ZpZGVySWQiLCJSZWNhcHRjaGFWZXJpZmllciIsIlNBTUxBdXRoUHJvdmlkZXIiLCJTaWduSW5NZXRob2QiLCJUb3RwTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJUb3RwU2VjcmV0IiwiVHdpdHRlckF1dGhQcm92aWRlciIsImFwcGx5QWN0aW9uQ29kZSIsImJlZm9yZUF1dGhTdGF0ZUNoYW5nZWQiLCJicm93c2VyTG9jYWxQZXJzaXN0ZW5jZSIsImJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJicm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwiY2hlY2tBY3Rpb25Db2RlIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJjb25uZWN0QXV0aEVtdWxhdG9yIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZGVidWdFcnJvck1hcCIsImRlbGV0ZVVzZXIiLCJmZXRjaFNpZ25Jbk1ldGhvZHNGb3JFbWFpbCIsImdldEFkZGl0aW9uYWxVc2VySW5mbyIsImdldEF1dGgiLCJnZXRJZFRva2VuIiwiZ2V0SWRUb2tlblJlc3VsdCIsImdldE11bHRpRmFjdG9yUmVzb2x2ZXIiLCJnZXRSZWRpcmVjdFJlc3VsdCIsImluTWVtb3J5UGVyc2lzdGVuY2UiLCJpbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwiaW5pdGlhbGl6ZUF1dGgiLCJpbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiaXNTaWduSW5XaXRoRW1haWxMaW5rIiwibGlua1dpdGhDcmVkZW50aWFsIiwibGlua1dpdGhQaG9uZU51bWJlciIsImxpbmtXaXRoUG9wdXAiLCJsaW5rV2l0aFJlZGlyZWN0IiwibXVsdGlGYWN0b3IiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJvbklkVG9rZW5DaGFuZ2VkIiwicGFyc2VBY3Rpb25Db2RlVVJMIiwicHJvZEVycm9yTWFwIiwicmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbCIsInJlYXV0aGVudGljYXRlV2l0aFBob25lTnVtYmVyIiwicmVhdXRoZW50aWNhdGVXaXRoUG9wdXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInJlbG9hZCIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJzZXRQZXJzaXN0ZW5jZSIsInNpZ25JbkFub255bW91c2x5Iiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbExpbmsiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJzaWduT3V0IiwidW5saW5rIiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGhvbmVOdW1iZXIiLCJ1cGRhdGVQcm9maWxlIiwidXNlRGV2aWNlTGFuZ3VhZ2UiLCJ2ZXJpZnlCZWZvcmVVcGRhdGVFbWFpbCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlBIT05FIiwiVE9UUCIsIkZBQ0VCT09LIiwiR0lUSFVCIiwiR09PR0xFIiwiUEFTU1dPUkQiLCJUV0lUVEVSIiwiRU1BSUxfTElOSyIsIkVNQUlMX1BBU1NXT1JEIiwiTElOSyIsIlJFQVVUSEVOVElDQVRFIiwiU0lHTl9JTiIsIkVNQUlMX1NJR05JTiIsIlBBU1NXT1JEX1JFU0VUIiwiUkVDT1ZFUl9FTUFJTCIsIlJFVkVSVF9TRUNPTkRfRkFDVE9SX0FERElUSU9OIiwiVkVSSUZZX0FORF9DSEFOR0VfRU1BSUwiLCJWRVJJRllfRU1BSUwiLCJfZGVidWdFcnJvck1hcCIsIl9wcm9kRXJyb3JNYXAiLCJfREVGQVVMVF9BVVRIX0VSUk9SX0ZBQ1RPUlkiLCJpbXBvcnRfdXRpbCIsIkVycm9yRmFjdG9yeSIsIkFETUlOX09OTFlfT1BFUkFUSU9OIiwiQVJHVU1FTlRfRVJST1IiLCJBUFBfTk9UX0FVVEhPUklaRUQiLCJBUFBfTk9UX0lOU1RBTExFRCIsIkNBUFRDSEFfQ0hFQ0tfRkFJTEVEIiwiQ09ERV9FWFBJUkVEIiwiQ09SRE9WQV9OT1RfUkVBRFkiLCJDT1JTX1VOU1VQUE9SVEVEIiwiQ1JFREVOVElBTF9BTFJFQURZX0lOX1VTRSIsIkNSRURFTlRJQUxfTUlTTUFUQ0giLCJDUkVERU5USUFMX1RPT19PTERfTE9HSU5fQUdBSU4iLCJERVBFTkRFTlRfU0RLX0lOSVRfQkVGT1JFX0FVVEgiLCJEWU5BTUlDX0xJTktfTk9UX0FDVElWQVRFRCIsIkVNQUlMX0NIQU5HRV9ORUVEU19WRVJJRklDQVRJT04iLCJFTUFJTF9FWElTVFMiLCJFTVVMQVRPUl9DT05GSUdfRkFJTEVEIiwiRVhQSVJFRF9PT0JfQ09ERSIsIkVYUElSRURfUE9QVVBfUkVRVUVTVCIsIklOVEVSTkFMX0VSUk9SIiwiSU5WQUxJRF9BUElfS0VZIiwiSU5WQUxJRF9BUFBfQ1JFREVOVElBTCIsIklOVkFMSURfQVBQX0lEIiwiSU5WQUxJRF9BVVRIIiwiSU5WQUxJRF9BVVRIX0VWRU5UIiwiSU5WQUxJRF9DRVJUX0hBU0giLCJJTlZBTElEX0NPREUiLCJJTlZBTElEX0NPTlRJTlVFX1VSSSIsIklOVkFMSURfQ09SRE9WQV9DT05GSUdVUkFUSU9OIiwiSU5WQUxJRF9DVVNUT01fVE9LRU4iLCJJTlZBTElEX0RZTkFNSUNfTElOS19ET01BSU4iLCJJTlZBTElEX0VNQUlMIiwiSU5WQUxJRF9FTVVMQVRPUl9TQ0hFTUUiLCJJTlZBTElEX0lEUF9SRVNQT05TRSIsIklOVkFMSURfTUVTU0FHRV9QQVlMT0FEIiwiSU5WQUxJRF9NRkFfU0VTU0lPTiIsIklOVkFMSURfT0FVVEhfQ0xJRU5UX0lEIiwiSU5WQUxJRF9PQVVUSF9QUk9WSURFUiIsIklOVkFMSURfT09CX0NPREUiLCJJTlZBTElEX09SSUdJTiIsIklOVkFMSURfUEFTU1dPUkQiLCJJTlZBTElEX1BFUlNJU1RFTkNFIiwiSU5WQUxJRF9QSE9ORV9OVU1CRVIiLCJJTlZBTElEX1BST1ZJREVSX0lEIiwiSU5WQUxJRF9SRUNJUElFTlRfRU1BSUwiLCJJTlZBTElEX1NFTkRFUiIsIklOVkFMSURfU0VTU0lPTl9JTkZPIiwiSU5WQUxJRF9URU5BTlRfSUQiLCJNRkFfSU5GT19OT1RfRk9VTkQiLCJNRkFfUkVRVUlSRUQiLCJNSVNTSU5HX0FORFJPSURfUEFDS0FHRV9OQU1FIiwiTUlTU0lOR19BUFBfQ1JFREVOVElBTCIsIk1JU1NJTkdfQVVUSF9ET01BSU4iLCJNSVNTSU5HX0NPREUiLCJNSVNTSU5HX0NPTlRJTlVFX1VSSSIsIk1JU1NJTkdfSUZSQU1FX1NUQVJUIiwiTUlTU0lOR19JT1NfQlVORExFX0lEIiwiTUlTU0lOR19PUl9JTlZBTElEX05PTkNFIiwiTUlTU0lOR19NRkFfSU5GTyIsIk1JU1NJTkdfTUZBX1NFU1NJT04iLCJNSVNTSU5HX1BIT05FX05VTUJFUiIsIk1JU1NJTkdfU0VTU0lPTl9JTkZPIiwiTU9EVUxFX0RFU1RST1lFRCIsIk5FRURfQ09ORklSTUFUSU9OIiwiTkVUV09SS19SRVFVRVNUX0ZBSUxFRCIsIk5VTExfVVNFUiIsIk5PX0FVVEhfRVZFTlQiLCJOT19TVUNIX1BST1ZJREVSIiwiT1BFUkFUSU9OX05PVF9BTExPV0VEIiwiT1BFUkFUSU9OX05PVF9TVVBQT1JURUQiLCJQT1BVUF9CTE9DS0VEIiwiUE9QVVBfQ0xPU0VEX0JZX1VTRVIiLCJQUk9WSURFUl9BTFJFQURZX0xJTktFRCIsIlFVT1RBX0VYQ0VFREVEIiwiUkVESVJFQ1RfQ0FOQ0VMTEVEX0JZX1VTRVIiLCJSRURJUkVDVF9PUEVSQVRJT05fUEVORElORyIsIlJFSkVDVEVEX0NSRURFTlRJQUwiLCJTRUNPTkRfRkFDVE9SX0FMUkVBRFlfRU5ST0xMRUQiLCJTRUNPTkRfRkFDVE9SX0xJTUlUX0VYQ0VFREVEIiwiVEVOQU5UX0lEX01JU01BVENIIiwiVElNRU9VVCIsIlRPS0VOX0VYUElSRUQiLCJUT09fTUFOWV9BVFRFTVBUU19UUllfTEFURVIiLCJVTkFVVEhPUklaRURfRE9NQUlOIiwiVU5TVVBQT1JURURfRklSU1RfRkFDVE9SIiwiVU5TVVBQT1JURURfUEVSU0lTVEVOQ0UiLCJVTlNVUFBPUlRFRF9URU5BTlRfT1BFUkFUSU9OIiwiVU5WRVJJRklFRF9FTUFJTCIsIlVTRVJfQ0FOQ0VMTEVEIiwiVVNFUl9ERUxFVEVEIiwiVVNFUl9ESVNBQkxFRCIsIlVTRVJfTUlTTUFUQ0giLCJVU0VSX1NJR05FRF9PVVQiLCJXRUFLX1BBU1NXT1JEIiwiV0VCX1NUT1JBR0VfVU5TVVBQT1JURUQiLCJBTFJFQURZX0lOSVRJQUxJWkVEIiwiUkVDQVBUQ0hBX05PVF9FTkFCTEVEIiwiTUlTU0lOR19SRUNBUFRDSEFfVE9LRU4iLCJJTlZBTElEX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX0FDVElPTiIsIk1JU1NJTkdfQ0xJRU5UX1RZUEUiLCJNSVNTSU5HX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRUNBUFRDSEFfVkVSU0lPTiIsIklOVkFMSURfUkVRX1RZUEUiLCJsb2dDbGllbnQiLCJpbXBvcnRfbG9nZ2VyIiwiTG9nZ2VyIiwiX2xvZ1dhcm4iLCJtc2ciLCJhcmdzIiwibG9nTGV2ZWwiLCJMb2dMZXZlbCIsIldBUk4iLCJ3YXJuIiwiaW1wb3J0X2FwcCIsIlNES19WRVJTSU9OIiwiX2xvZ0Vycm9yIiwiRVJST1IiLCJlcnJvciIsIl9mYWlsIiwiYXV0aE9yQ29kZSIsInJlc3QiLCJjcmVhdGVFcnJvckludGVybmFsIiwiX2NyZWF0ZUVycm9yIiwiX2Vycm9yV2l0aEN1c3RvbU1lc3NhZ2UiLCJhdXRoIiwiY29kZSIsIm1lc3NhZ2UiLCJlcnJvck1hcCIsIk9iamVjdCIsImFzc2lnbiIsImZhY3RvcnkiLCJjcmVhdGUiLCJhcHBOYW1lIiwibmFtZSIsIl9hc3NlcnRJbnN0YW5jZU9mIiwib2JqZWN0IiwiaW5zdGFuY2UiLCJjb25zdHJ1Y3Rvckluc3RhbmNlIiwiY29uc3RydWN0b3IiLCJmdWxsUGFyYW1zIiwic2xpY2UiLCJfZXJyb3JGYWN0b3J5IiwiX2Fzc2VydCIsImFzc2VydGlvbiIsImRlYnVnRmFpbCIsImZhaWx1cmUiLCJFcnJvciIsImRlYnVnQXNzZXJ0IiwiX2dldEN1cnJlbnRVcmwiLCJzZWxmIiwiX2EiLCJsb2NhdGlvbiIsImhyZWYiLCJfaXNIdHRwT3JIdHRwcyIsIl9nZXRDdXJyZW50U2NoZW1lIiwicHJvdG9jb2wiLCJfaXNPbmxpbmUiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJpc0Jyb3dzZXJFeHRlbnNpb24iLCJfZ2V0VXNlckxhbmd1YWdlIiwibmF2aWdhdG9yTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsIkRlbGF5Iiwic2hvcnREZWxheSIsImxvbmdEZWxheSIsImlzTW9iaWxlIiwiaXNNb2JpbGVDb3Jkb3ZhIiwiaXNSZWFjdE5hdGl2ZSIsImdldCIsIk1hdGgiLCJtaW4iLCJfZW11bGF0b3JVcmwiLCJjb25maWciLCJwYXRoIiwiZW11bGF0b3IiLCJ1cmwiLCJzdGFydHNXaXRoIiwiRmV0Y2hQcm92aWRlciIsImluaXRpYWxpemUiLCJmZXRjaEltcGwiLCJoZWFkZXJzSW1wbCIsInJlc3BvbnNlSW1wbCIsImZldGNoIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJyZXNwb25zZSIsIlJlc3BvbnNlIiwiU0VSVkVSX0VSUk9SX01BUCIsIkRFRkFVTFRfQVBJX1RJTUVPVVRfTVMiLCJfYWRkVGlkSWZOZWNlc3NhcnkiLCJyZXF1ZXN0IiwidGVuYW50SWQiLCJfcGVyZm9ybUFwaVJlcXVlc3QiLCJtZXRob2QiLCJjdXN0b21FcnJvck1hcCIsIl9wZXJmb3JtRmV0Y2hXaXRoRXJyb3JIYW5kbGluZyIsImJvZHkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJxdWVyeXN0cmluZyIsImtleSIsImFwaUtleSIsIl9nZXRBZGRpdGlvbmFsSGVhZGVycyIsImxhbmd1YWdlQ29kZSIsIl9nZXRGaW5hbFRhcmdldCIsImFwaUhvc3QiLCJyZWZlcnJlclBvbGljeSIsImZldGNoRm4iLCJfY2FuSW5pdEVtdWxhdG9yIiwibmV0d29ya1RpbWVvdXQiLCJOZXR3b3JrVGltZW91dCIsIlByb21pc2UiLCJyYWNlIiwicHJvbWlzZSIsImNsZWFyTmV0d29ya1RpbWVvdXQiLCJqc29uIiwiX21ha2VUYWdnZWRFcnJvciIsIm9rIiwiZXJyb3JNZXNzYWdlIiwic2VydmVyRXJyb3JDb2RlIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic3BsaXQiLCJhdXRoRXJyb3IiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJlIiwiRmlyZWJhc2VFcnJvciIsIlN0cmluZyIsIl9wZXJmb3JtU2lnbkluUmVxdWVzdCIsInNlcnZlclJlc3BvbnNlIiwiX3NlcnZlclJlc3BvbnNlIiwiaG9zdCIsImJhc2UiLCJhcGlTY2hlbWUiLCJ0aW1lciIsIl8iLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZXJyb3JQYXJhbXMiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiY3VzdG9tRGF0YSIsIl90b2tlblJlc3BvbnNlIiwiZGVsZXRlQWNjb3VudCIsImRlbGV0ZUxpbmtlZEFjY291bnRzIiwiZ2V0QWNjb3VudEluZm8iLCJ1dGNUaW1lc3RhbXBUb0RhdGVTdHJpbmciLCJ1dGNUaW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsIk51bWJlciIsImlzTmFOIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwidXNlciIsImZvcmNlUmVmcmVzaCIsImdldE1vZHVsYXJJbnN0YW5jZSIsInVzZXJJbnRlcm5hbCIsInRva2VuIiwiY2xhaW1zIiwiX3BhcnNlVG9rZW4iLCJleHAiLCJhdXRoX3RpbWUiLCJpYXQiLCJmaXJlYmFzZSIsInNpZ25JblByb3ZpZGVyIiwiYXV0aFRpbWUiLCJzZWNvbmRzU3RyaW5nVG9NaWxsaXNlY29uZHMiLCJpc3N1ZWRBdFRpbWUiLCJleHBpcmF0aW9uVGltZSIsInNpZ25JblNlY29uZEZhY3RvciIsInNlY29uZHMiLCJhbGdvcml0aG0iLCJwYXlsb2FkIiwic2lnbmF0dXJlIiwiZGVjb2RlZCIsImJhc2U2NERlY29kZSIsInBhcnNlIiwidG9TdHJpbmciLCJfdG9rZW5FeHBpcmVzSW4iLCJwYXJzZWRUb2tlbiIsIl9sb2dvdXRJZkludmFsaWRhdGVkIiwiYnlwYXNzQXV0aFN0YXRlIiwiaXNVc2VySW52YWxpZGF0ZWQiLCJjdXJyZW50VXNlciIsIlByb2FjdGl2ZVJlZnJlc2giLCJpc1J1bm5pbmciLCJ0aW1lcklkIiwiZXJyb3JCYWNrb2ZmIiwiX3N0YXJ0Iiwic2NoZWR1bGUiLCJfc3RvcCIsImdldEludGVydmFsIiwid2FzRXJyb3IiLCJpbnRlcnZhbCIsImV4cFRpbWUiLCJzdHNUb2tlbk1hbmFnZXIiLCJub3ciLCJtYXgiLCJpdGVyYXRpb24iLCJVc2VyTWV0YWRhdGEiLCJjcmVhdGVkQXQiLCJsYXN0TG9naW5BdCIsIl9pbml0aWFsaXplVGltZSIsImxhc3RTaWduSW5UaW1lIiwiY3JlYXRpb25UaW1lIiwiX2NvcHkiLCJtZXRhZGF0YSIsInRvSlNPTiIsIl9yZWxvYWRXaXRob3V0U2F2aW5nIiwiaWRUb2tlbiIsInVzZXJzIiwibGVuZ3RoIiwiY29yZUFjY291bnQiLCJfbm90aWZ5UmVsb2FkTGlzdGVuZXIiLCJuZXdQcm92aWRlckRhdGEiLCJwcm92aWRlclVzZXJJbmZvIiwiZXh0cmFjdFByb3ZpZGVyRGF0YSIsInByb3ZpZGVyRGF0YSIsIm1lcmdlUHJvdmlkZXJEYXRhIiwib2xkSXNBbm9ueW1vdXMiLCJpc0Fub255bW91cyIsIm5ld0lzQW5vbnltb3VzIiwicGFzc3dvcmRIYXNoIiwidXBkYXRlcyIsInVpZCIsImxvY2FsSWQiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwicGhvdG9VcmwiLCJlbWFpbFZlcmlmaWVkIiwiX3BlcnNpc3RVc2VySWZDdXJyZW50IiwiX25vdGlmeUxpc3RlbmVyc0lmQ3VycmVudCIsIm9yaWdpbmFsIiwibmV3RGF0YSIsImRlZHVwZWQiLCJmaWx0ZXIiLCJvIiwic29tZSIsIm4iLCJwcm92aWRlcklkIiwicHJvdmlkZXJzIiwibWFwIiwicHJvdmlkZXIiLCJpbXBvcnRfdHNsaWIiLCJfX3Jlc3QiLCJyYXdJZCIsInJlcXVlc3RTdHNUb2tlbiIsInJlZnJlc2hUb2tlbiIsInRva2VuQXBpSG9zdCIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlc0luIiwiZXhwaXJlc19pbiIsInJlZnJlc2hfdG9rZW4iLCJTdHNUb2tlbk1hbmFnZXIiLCJpc0V4cGlyZWQiLCJ1cGRhdGVGcm9tU2VydmVyUmVzcG9uc2UiLCJ1cGRhdGVUb2tlbnNBbmRFeHBpcmF0aW9uIiwiZ2V0VG9rZW4iLCJyZWZyZXNoIiwiY2xlYXJSZWZyZXNoVG9rZW4iLCJvbGRUb2tlbiIsImV4cGlyZXNJblNlYyIsImZyb21KU09OIiwibWFuYWdlciIsIl9hc3NpZ24iLCJfY2xvbmUiLCJfcGVyZm9ybVJlZnJlc2giLCJhc3NlcnRTdHJpbmdPclVuZGVmaW5lZCIsIlVzZXJJbXBsIiwib3B0IiwicHJvYWN0aXZlUmVmcmVzaCIsInJlbG9hZFVzZXJJbmZvIiwicmVsb2FkTGlzdGVuZXIiLCJ1c2VySW5mbyIsIm5ld1VzZXIiLCJfb25SZWxvYWQiLCJjYWxsYmFjayIsIl9zdGFydFByb2FjdGl2ZVJlZnJlc2giLCJfc3RvcFByb2FjdGl2ZVJlZnJlc2giLCJfdXBkYXRlVG9rZW5zSWZOZWNlc3NhcnkiLCJyZWxvYWQyIiwidG9rZW5zUmVmcmVzaGVkIiwiZGVsZXRlIiwiX3JlZGlyZWN0RXZlbnRJZCIsIl9mcm9tSlNPTiIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiX2YiLCJfZyIsIl9oIiwicGxhaW5PYmplY3RUb2tlbk1hbmFnZXIiLCJBcnJheSIsImlzQXJyYXkiLCJfZnJvbUlkVG9rZW5SZXNwb25zZSIsImlkVG9rZW5SZXNwb25zZSIsImluc3RhbmNlQ2FjaGUiLCJNYXAiLCJfZ2V0SW5zdGFuY2UiLCJjbHMiLCJGdW5jdGlvbiIsInNldCIsIkluTWVtb3J5UGVyc2lzdGVuY2UiLCJ0eXBlIiwic3RvcmFnZSIsIl9pc0F2YWlsYWJsZSIsIl9zZXQiLCJ2YWx1ZSIsIl9nZXQiLCJfcmVtb3ZlIiwiX2FkZExpc3RlbmVyIiwiX2tleSIsIl9saXN0ZW5lciIsIl9yZW1vdmVMaXN0ZW5lciIsIl9wZXJzaXN0ZW5jZUtleU5hbWUiLCJQZXJzaXN0ZW5jZVVzZXJNYW5hZ2VyIiwicGVyc2lzdGVuY2UiLCJ1c2VyS2V5IiwibmFtZTIiLCJmdWxsVXNlcktleSIsImZ1bGxQZXJzaXN0ZW5jZUtleSIsImJvdW5kRXZlbnRIYW5kbGVyIiwiX29uU3RvcmFnZUV2ZW50IiwiYmluZCIsInNldEN1cnJlbnRVc2VyIiwiZ2V0Q3VycmVudFVzZXIiLCJibG9iIiwicmVtb3ZlQ3VycmVudFVzZXIiLCJzYXZlUGVyc2lzdGVuY2VGb3JSZWRpcmVjdCIsIm5ld1BlcnNpc3RlbmNlIiwicGVyc2lzdGVuY2VIaWVyYXJjaHkiLCJhdmFpbGFibGVQZXJzaXN0ZW5jZXMiLCJhbGwiLCJzZWxlY3RlZFBlcnNpc3RlbmNlIiwidXNlclRvTWlncmF0ZSIsIm1pZ3JhdGlvbkhpZXJhcmNoeSIsInAiLCJfc2hvdWxkQWxsb3dNaWdyYXRpb24iLCJfZ2V0QnJvd3Nlck5hbWUiLCJ1c2VyQWdlbnQiLCJ1YSIsImluY2x1ZGVzIiwiX2lzSUVNb2JpbGUiLCJfaXNGaXJlZm94IiwiX2lzQmxhY2tCZXJyeSIsIl9pc1dlYk9TIiwiX2lzU2FmYXJpIiwiX2lzQ2hyb21lSU9TIiwiX2lzQW5kcm9pZCIsInJlIiwibWF0Y2hlcyIsIm1hdGNoIiwiZ2V0VUEiLCJ0ZXN0IiwiX2lzSU9TIiwiX2lzSU9TN09yOCIsIl9pc0lPU1N0YW5kYWxvbmUiLCJ3aW5kb3ciLCJzdGFuZGFsb25lIiwiX2lzSUUxMCIsImlzSUUiLCJkb2N1bWVudCIsImRvY3VtZW50TW9kZSIsIl9pc01vYmlsZUJyb3dzZXIiLCJfaXNJZnJhbWUiLCJ0b3AiLCJfZ2V0Q2xpZW50VmVyc2lvbiIsImNsaWVudFBsYXRmb3JtIiwiZnJhbWV3b3JrcyIsInJlcG9ydGVkUGxhdGZvcm0iLCJyZXBvcnRlZEZyYW1ld29ya3MiLCJqb2luIiwiZ2V0UmVjYXB0Y2hhUGFyYW1zIiwicmVjYXB0Y2hhU2l0ZUtleSIsImdldFJlY2FwdGNoYUNvbmZpZyIsImlzVjIiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJpc0VudGVycHJpc2UiLCJlbnRlcnByaXNlIiwiUmVjYXB0Y2hhQ29uZmlnIiwic2l0ZUtleSIsImVtYWlsUGFzc3dvcmRFbmFibGVkIiwicmVjYXB0Y2hhS2V5IiwicmVjYXB0Y2hhRW5mb3JjZW1lbnRTdGF0ZSIsImVuZm9yY2VtZW50U3RhdGUiLCJnZXRTY3JpcHRQYXJlbnRFbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJfbG9hZEpTIiwicmVzb2x2ZSIsImVsIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJjaGFyc2V0IiwiYXBwZW5kQ2hpbGQiLCJfZ2VuZXJhdGVDYWxsYmFja05hbWUiLCJwcmVmaXgiLCJmbG9vciIsInJhbmRvbSIsIlJFQ0FQVENIQV9FTlRFUlBSSVNFX1VSTCIsIlJFQ0FQVENIQV9FTlRFUlBSSVNFX1ZFUklGSUVSX1RZUEUiLCJGQUtFX1RPS0VOIiwiUmVjYXB0Y2hhRW50ZXJwcmlzZVZlcmlmaWVyIiwiYXV0aEV4dGVybiIsIl9jYXN0QXV0aCIsInZlcmlmeSIsImFjdGlvbiIsInJldHJpZXZlU2l0ZUtleSIsIl9hZ2VudFJlY2FwdGNoYUNvbmZpZyIsIl90ZW5hbnRSZWNhcHRjaGFDb25maWdzIiwiY2xpZW50VHlwZSIsInZlcnNpb24iLCJ0aGVuIiwiY2F0Y2giLCJyZXRyaWV2ZVJlY2FwdGNoYVRva2VuIiwicmVhZHkiLCJleGVjdXRlIiwiaW5qZWN0UmVjYXB0Y2hhRmllbGRzIiwiY2FwdGNoYVJlc3AiLCJ2ZXJpZmllciIsImNhcHRjaGFSZXNwb25zZSIsIm5ld1JlcXVlc3QiLCJBdXRoTWlkZGxld2FyZVF1ZXVlIiwicXVldWUiLCJwdXNoQ2FsbGJhY2siLCJvbkFib3J0Iiwid3JhcHBlZENhbGxiYWNrIiwicmVzdWx0IiwicHVzaCIsImluZGV4IiwicnVuTWlkZGxld2FyZSIsIm5leHRVc2VyIiwib25BYm9ydFN0YWNrIiwiYmVmb3JlU3RhdGVDYWxsYmFjayIsInJldmVyc2UiLCJvcmlnaW5hbE1lc3NhZ2UiLCJBdXRoSW1wbCIsImFwcCIsImhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlciIsImFwcENoZWNrU2VydmljZVByb3ZpZGVyIiwiZW11bGF0b3JDb25maWciLCJvcGVyYXRpb25zIiwiYXV0aFN0YXRlU3Vic2NyaXB0aW9uIiwiU3Vic2NyaXB0aW9uIiwiaWRUb2tlblN1YnNjcmlwdGlvbiIsImJlZm9yZVN0YXRlUXVldWUiLCJyZWRpcmVjdFVzZXIiLCJpc1Byb2FjdGl2ZVJlZnJlc2hFbmFibGVkIiwiX2lzSW5pdGlhbGl6ZWQiLCJfZGVsZXRlZCIsIl9pbml0aWFsaXphdGlvblByb21pc2UiLCJfcG9wdXBSZWRpcmVjdFJlc29sdmVyIiwibGFzdE5vdGlmaWVkVWlkIiwic2V0dGluZ3MiLCJhcHBWZXJpZmljYXRpb25EaXNhYmxlZEZvclRlc3RpbmciLCJjbGllbnRWZXJzaW9uIiwic2RrQ2xpZW50VmVyc2lvbiIsIl9pbml0aWFsaXplV2l0aFBlcnNpc3RlbmNlIiwicG9wdXBSZWRpcmVjdFJlc29sdmVyIiwicGVyc2lzdGVuY2VNYW5hZ2VyIiwiX3Nob3VsZEluaXRQcm9hY3RpdmVseSIsIl9pbml0aWFsaXplIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyIiwiYXNzZXJ0ZWRQZXJzaXN0ZW5jZSIsIl9jdXJyZW50VXNlciIsIl91cGRhdGVDdXJyZW50VXNlciIsInByZXZpb3VzbHlTdG9yZWRVc2VyIiwiZnV0dXJlQ3VycmVudFVzZXIiLCJuZWVkc1RvY2hlY2tNaWRkbGV3YXJlIiwiYXV0aERvbWFpbiIsImdldE9ySW5pdFJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwicmVkaXJlY3RVc2VyRXZlbnRJZCIsInN0b3JlZFVzZXJFdmVudElkIiwidHJ5UmVkaXJlY3RTaWduSW4iLCJkaXJlY3RseVNldEN1cnJlbnRVc2VyIiwiX292ZXJyaWRlUmVkaXJlY3RSZXN1bHQiLCJyZWxvYWRBbmRTZXRDdXJyZW50VXNlck9yQ2xlYXIiLCJyZWRpcmVjdFJlc29sdmVyIiwiX2NvbXBsZXRlUmVkaXJlY3RGbiIsIl9zZXRSZWRpcmVjdFVzZXIiLCJfZGVsZXRlIiwidXNlckV4dGVybiIsInNraXBCZWZvcmVTdGF0ZUNhbGxiYWNrcyIsIm5vdGlmeUF1dGhMaXN0ZW5lcnMiLCJyZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsIl9nZXRSZWNhcHRjaGFDb25maWciLCJfZ2V0UGVyc2lzdGVuY2UiLCJfdXBkYXRlRXJyb3JNYXAiLCJuZXh0T3JPYnNlcnZlciIsImNvbXBsZXRlZCIsInJlZ2lzdGVyU3RhdGVMaXN0ZW5lciIsImF1dGhTdGF0ZVJlYWR5IiwidW5zdWJzY3JpYmUiLCJyZWRpcmVjdE1hbmFnZXIiLCJyZXNvbHZlciIsIl9yZWRpcmVjdFBlcnNpc3RlbmNlIiwiX3JlZGlyZWN0VXNlckZvcklkIiwiaWQiLCJuZXh0IiwiY3VycmVudFVpZCIsInN1YnNjcmlwdGlvbiIsImNiIiwiYWRkT2JzZXJ2ZXIiLCJfbG9nRnJhbWV3b3JrIiwiZnJhbWV3b3JrIiwic29ydCIsIl9nZXRGcmFtZXdvcmtzIiwib3B0aW9ucyIsImFwcElkIiwiaGVhcnRiZWF0c0hlYWRlciIsImdldEltbWVkaWF0ZSIsIm9wdGlvbmFsIiwiZ2V0SGVhcnRiZWF0c0hlYWRlciIsImFwcENoZWNrVG9rZW4iLCJfZ2V0QXBwQ2hlY2tUb2tlbiIsImFwcENoZWNrVG9rZW5SZXN1bHQiLCJvYnNlcnZlciIsImNyZWF0ZVN1YnNjcmliZSIsImRlcHMiLCJfZ2V0UHJvdmlkZXIiLCJpc0luaXRpYWxpemVkIiwiYXV0aDIiLCJpbml0aWFsT3B0aW9ucyIsImdldE9wdGlvbnMiLCJkZWVwRXF1YWwiLCJfaW5pdGlhbGl6ZUF1dGhJbnN0YW5jZSIsImhpZXJhcmNoeSIsImF1dGhJbnRlcm5hbCIsImRpc2FibGVXYXJuaW5ncyIsImV4dHJhY3RQcm90b2NvbCIsInBvcnQiLCJleHRyYWN0SG9zdEFuZFBvcnQiLCJwb3J0U3RyIiwiZnJlZXplIiwiZW1pdEVtdWxhdG9yV2FybmluZyIsInByb3RvY29sRW5kIiwiaW5kZXhPZiIsInN1YnN0ciIsImF1dGhvcml0eSIsImV4ZWMiLCJob3N0QW5kUG9ydCIsInBvcCIsImJyYWNrZXRlZElQdjYiLCJwYXJzZVBvcnQiLCJhdHRhY2hCYW5uZXIiLCJzdHkiLCJzdHlsZSIsImlubmVyVGV4dCIsInBvc2l0aW9uIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJjb2xvciIsImJvdHRvbSIsImxlZnQiLCJtYXJnaW4iLCJ6SW5kZXgiLCJ0ZXh0QWxpZ24iLCJjbGFzc0xpc3QiLCJhZGQiLCJjb25zb2xlIiwiaW5mbyIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2lnbkluTWV0aG9kIiwiX2dldElkVG9rZW5SZXNwb25zZSIsIl9hdXRoIiwiX2xpbmtUb0lkVG9rZW4iLCJfaWRUb2tlbiIsIl9nZXRSZWF1dGhlbnRpY2F0aW9uUmVzb2x2ZXIiLCJyZXNldFBhc3N3b3JkIiwidXBkYXRlRW1haWxQYXNzd29yZCIsImFwcGx5QWN0aW9uQ29kZSQxIiwic2lnbkluV2l0aFBhc3N3b3JkIiwic2VuZE9vYkNvZGUiLCJzZW5kRW1haWxWZXJpZmljYXRpb24kMSIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwkMSIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCQxIiwidmVyaWZ5QW5kQ2hhbmdlRW1haWwiLCJzaWduSW5XaXRoRW1haWxMaW5rJDEiLCJzaWduSW5XaXRoRW1haWxMaW5rRm9yTGlua2luZyIsIl9lbWFpbCIsIl9wYXNzd29yZCIsIl90ZW5hbnRJZCIsIl9mcm9tRW1haWxBbmRQYXNzd29yZCIsInBhc3N3b3JkIiwiX2Zyb21FbWFpbEFuZENvZGUiLCJvb2JDb2RlIiwib2JqIiwicmV0dXJuU2VjdXJlVG9rZW4iLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYSIsImxvZyIsInNpZ25JbldpdGhJZHAiLCJJRFBfUkVRVUVTVF9VUkkkMSIsInBlbmRpbmdUb2tlbiIsIl9mcm9tUGFyYW1zIiwiY3JlZCIsIm5vbmNlIiwib2F1dGhUb2tlbiIsIm9hdXRoVG9rZW5TZWNyZXQiLCJzZWNyZXQiLCJidWlsZFJlcXVlc3QiLCJhdXRvQ3JlYXRlIiwicmVxdWVzdFVyaSIsInBvc3RCb2R5Iiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZSIsInNpZ25JbldpdGhQaG9uZU51bWJlciQxIiwibGlua1dpdGhQaG9uZU51bWJlciQxIiwidGVtcG9yYXJ5UHJvb2YiLCJWRVJJRllfUEhPTkVfTlVNQkVSX0ZPUl9FWElTVElOR19FUlJPUl9NQVBfIiwidmVyaWZ5UGhvbmVOdW1iZXJGb3JFeGlzdGluZyIsImFwaVJlcXVlc3QiLCJvcGVyYXRpb24iLCJfZnJvbVZlcmlmaWNhdGlvbiIsInZlcmlmaWNhdGlvbklkIiwidmVyaWZpY2F0aW9uQ29kZSIsIl9mcm9tVG9rZW5SZXNwb25zZSIsIl9tYWtlVmVyaWZpY2F0aW9uUmVxdWVzdCIsInNlc3Npb25JbmZvIiwicGFyc2VNb2RlIiwibW9kZSIsInBhcnNlRGVlcExpbmsiLCJsaW5rIiwicXVlcnlzdHJpbmdEZWNvZGUiLCJleHRyYWN0UXVlcnlzdHJpbmciLCJkb3VibGVEZWVwTGluayIsImlPU0RlZXBMaW5rIiwiaU9TRG91YmxlRGVlcExpbmsiLCJhY3Rpb25MaW5rIiwic2VhcmNoUGFyYW1zIiwiY29udGludWVVcmwiLCJwYXJzZUxpbmsiLCJQUk9WSURFUl9JRCIsImNyZWRlbnRpYWwiLCJjcmVkZW50aWFsV2l0aExpbmsiLCJlbWFpbExpbmsiLCJhY3Rpb25Db2RlVXJsIiwiRU1BSUxfUEFTU1dPUkRfU0lHTl9JTl9NRVRIT0QiLCJFTUFJTF9MSU5LX1NJR05fSU5fTUVUSE9EIiwiRmVkZXJhdGVkQXV0aFByb3ZpZGVyIiwiZGVmYXVsdExhbmd1YWdlQ29kZSIsImN1c3RvbVBhcmFtZXRlcnMiLCJzZXREZWZhdWx0TGFuZ3VhZ2UiLCJzZXRDdXN0b21QYXJhbWV0ZXJzIiwiY3VzdG9tT0F1dGhQYXJhbWV0ZXJzIiwiZ2V0Q3VzdG9tUGFyYW1ldGVycyIsIkJhc2VPQXV0aFByb3ZpZGVyIiwic2NvcGVzIiwiYWRkU2NvcGUiLCJzY29wZSIsImdldFNjb3BlcyIsImNyZWRlbnRpYWxGcm9tSlNPTiIsIl9jcmVkZW50aWFsIiwicmF3Tm9uY2UiLCJjcmVkZW50aWFsRnJvbVJlc3VsdCIsInVzZXJDcmVkZW50aWFsIiwib2F1dGhDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsImNyZWRlbnRpYWxGcm9tRXJyb3IiLCJ0b2tlblJlc3BvbnNlIiwib2F1dGhJZFRva2VuIiwib2F1dGhBY2Nlc3NUb2tlbiIsIkZBQ0VCT09LX1NJR05fSU5fTUVUSE9EIiwiY3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJHT09HTEVfU0lHTl9JTl9NRVRIT0QiLCJHSVRIVUJfU0lHTl9JTl9NRVRIT0QiLCJJRFBfUkVRVUVTVF9VUkkiLCJTQU1MQXV0aENyZWRlbnRpYWwiLCJfY3JlYXRlIiwiU0FNTF9QUk9WSURFUl9QUkVGSVgiLCJzYW1sQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJUV0lUVEVSX1NJR05fSU5fTUVUSE9EIiwic2lnblVwIiwiVXNlckNyZWRlbnRpYWxJbXBsIiwib3BlcmF0aW9uVHlwZSIsInByb3ZpZGVySWRGb3JSZXNwb25zZSIsInVzZXJDcmVkIiwiX2Zvck9wZXJhdGlvbiIsIk11bHRpRmFjdG9yRXJyb3IiLCJzZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsIl9mcm9tRXJyb3JBbmRPcGVyYXRpb24iLCJfcHJvY2Vzc0NyZWRlbnRpYWxTYXZpbmdNZmFDb250ZXh0SWZOZWNlc3NhcnkiLCJpZFRva2VuUHJvdmlkZXIiLCJwcm92aWRlckRhdGFBc05hbWVzIiwiU2V0IiwicGlkIiwiX2Fzc2VydExpbmtlZFN0YXR1cyIsImRlbGV0ZVByb3ZpZGVyIiwicHJvdmlkZXJzTGVmdCIsInBkIiwiaGFzIiwiX2xpbmskMSIsImV4cGVjdGVkIiwicHJvdmlkZXJJZHMiLCJfcmVhdXRoZW50aWNhdGUiLCJwYXJzZWQiLCJzdWIiLCJfc2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4kMSIsImN1c3RvbVRva2VuIiwiTXVsdGlGYWN0b3JJbmZvSW1wbCIsImZhY3RvcklkIiwibWZhRW5yb2xsbWVudElkIiwiZW5yb2xsbWVudFRpbWUiLCJlbnJvbGxlZEF0IiwiX2Zyb21TZXJ2ZXJSZXNwb25zZSIsImVucm9sbG1lbnQiLCJQaG9uZU11bHRpRmFjdG9ySW5mb0ltcGwiLCJUb3RwTXVsdGlGYWN0b3JJbmZvSW1wbCIsInBob25lSW5mbyIsIl9zZXRBY3Rpb25Db2RlU2V0dGluZ3NPblJlcXVlc3QiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJkeW5hbWljTGlua0RvbWFpbiIsImNhbkhhbmRsZUNvZGVJbkFwcCIsImhhbmRsZUNvZGVJbkFwcCIsImlPUyIsImJ1bmRsZUlkIiwiaU9TQnVuZGxlSWQiLCJhbmRyb2lkIiwicGFja2FnZU5hbWUiLCJhbmRyb2lkSW5zdGFsbEFwcCIsImluc3RhbGxBcHAiLCJhbmRyb2lkTWluaW11bVZlcnNpb25Db2RlIiwibWluaW11bVZlcnNpb24iLCJhbmRyb2lkUGFja2FnZU5hbWUiLCJyZXF1ZXN0VHlwZSIsIm5ld1Bhc3N3b3JkIiwiYXV0aE1vZHVsYXIiLCJuZXdFbWFpbCIsIm1mYUluZm8iLCJtdWx0aUZhY3RvckluZm8iLCJkYXRhIiwicHJldmlvdXNFbWFpbCIsInNpZ25VcFJlc3BvbnNlIiwic2V0QWN0aW9uQ29kZVNldHRpbmdzIiwicmVxdWVzdDIiLCJhY3Rpb25Db2RlU2V0dGluZ3MyIiwiY3JlYXRlQXV0aFVyaSIsImNvbnRpbnVlVXJpIiwiaWRlbnRpZmllciIsInNpZ25pbk1ldGhvZHMiLCJ1cGRhdGVQcm9maWxlJDEiLCJwcm9maWxlUmVxdWVzdCIsInBhc3N3b3JkUHJvdmlkZXIiLCJmaW5kIiwidXBkYXRlRW1haWxPclBhc3N3b3JkIiwicHJvZmlsZSIsInJhd1VzZXJJbmZvIiwiaXNOZXdVc2VyIiwia2luZCIsImZpbHRlcmVkUHJvdmlkZXJJZCIsIkdlbmVyaWNBZGRpdGlvbmFsVXNlckluZm8iLCJGYWNlYm9va0FkZGl0aW9uYWxVc2VySW5mbyIsIkdpdGh1YkFkZGl0aW9uYWxVc2VySW5mbyIsIkdvb2dsZUFkZGl0aW9uYWxVc2VySW5mbyIsIlR3aXR0ZXJBZGRpdGlvbmFsVXNlckluZm8iLCJzY3JlZW5OYW1lIiwiRmVkZXJhdGVkQWRkaXRpb25hbFVzZXJJbmZvV2l0aFVzZXJuYW1lIiwidXNlcm5hbWUiLCJsb2dpbiIsIk11bHRpRmFjdG9yU2Vzc2lvbkltcGwiLCJfZnJvbUlkdG9rZW4iLCJfZnJvbU1mYVBlbmRpbmdDcmVkZW50aWFsIiwibWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtdWx0aUZhY3RvclNlc3Npb24iLCJwZW5kaW5nQ3JlZGVudGlhbCIsIk11bHRpRmFjdG9yUmVzb2x2ZXJJbXBsIiwic2Vzc2lvbiIsImhpbnRzIiwic2lnbkluUmVzb2x2ZXIiLCJfZnJvbUVycm9yIiwibWZhUmVzcG9uc2UiLCJfcHJvY2VzcyIsInJlc29sdmVTaWduSW4iLCJhc3NlcnRpb25FeHRlcm4iLCJlcnJvckludGVybmFsIiwic3RhcnRFbnJvbGxQaG9uZU1mYSIsImZpbmFsaXplRW5yb2xsUGhvbmVNZmEiLCJzdGFydEVucm9sbFRvdHBNZmEiLCJmaW5hbGl6ZUVucm9sbFRvdHBNZmEiLCJ3aXRoZHJhd01mYSIsIk11bHRpRmFjdG9yVXNlckltcGwiLCJlbnJvbGxlZEZhY3RvcnMiLCJfZnJvbVVzZXIiLCJnZXRTZXNzaW9uIiwiZW5yb2xsIiwiZmluYWxpemVNZmFSZXNwb25zZSIsInVuZW5yb2xsIiwiaW5mb09yVWlkIiwibXVsdGlGYWN0b3JVc2VyQ2FjaGUiLCJXZWFrTWFwIiwidXNlck1vZHVsYXIiLCJTVE9SQUdFX0FWQUlMQUJMRV9LRVkiLCJCcm93c2VyUGVyc2lzdGVuY2VDbGFzcyIsInN0b3JhZ2VSZXRyaWV2ZXIiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImdldEl0ZW0iLCJfaWZyYW1lQ2Fubm90U3luY1dlYlN0b3JhZ2UiLCJfUE9MTElOR19JTlRFUlZBTF9NUyQxIiwiSUUxMF9MT0NBTF9TVE9SQUdFX1NZTkNfREVMQVkiLCJCcm93c2VyTG9jYWxQZXJzaXN0ZW5jZSIsImxvY2FsU3RvcmFnZSIsImV2ZW50IiwicG9sbCIsIm9uU3RvcmFnZUV2ZW50IiwibGlzdGVuZXJzIiwibG9jYWxDYWNoZSIsInBvbGxUaW1lciIsInNhZmFyaUxvY2FsU3RvcmFnZU5vdFN5bmNlZCIsImZhbGxiYWNrVG9Qb2xsaW5nIiwiZm9yQWxsQ2hhbmdlZEtleXMiLCJrZXlzIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImtleTIiLCJfb2xkVmFsdWUiLCJub3RpZnlMaXN0ZW5lcnMiLCJkZXRhY2hMaXN0ZW5lciIsInN0b3BQb2xsaW5nIiwic3RvcmVkVmFsdWUyIiwidHJpZ2dlckxpc3RlbmVycyIsInN0b3JlZFZhbHVlIiwibGlzdGVuZXIiLCJmcm9tIiwic3RhcnRQb2xsaW5nIiwic2V0SW50ZXJ2YWwiLCJTdG9yYWdlRXZlbnQiLCJjbGVhckludGVydmFsIiwiYXR0YWNoTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2l6ZSIsIkJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UiLCJzZXNzaW9uU3RvcmFnZSIsIl9hbGxTZXR0bGVkIiwicHJvbWlzZXMiLCJmdWxmaWxsZWQiLCJyZWFzb24iLCJSZWNlaXZlciIsImV2ZW50VGFyZ2V0IiwiaGFuZGxlcnNNYXAiLCJoYW5kbGVFdmVudCIsImV4aXN0aW5nSW5zdGFuY2UiLCJyZWNlaXZlcnMiLCJyZWNlaXZlciIsImlzTGlzdGVuaW5ndG8iLCJuZXdJbnN0YW5jZSIsIm1lc3NhZ2VFdmVudCIsImV2ZW50SWQiLCJldmVudFR5cGUiLCJoYW5kbGVycyIsInBvcnRzIiwicG9zdE1lc3NhZ2UiLCJzdGF0dXMiLCJoYW5kbGVyIiwib3JpZ2luIiwiX3N1YnNjcmliZSIsImV2ZW50SGFuZGxlciIsIl91bnN1YnNjcmliZSIsIl9nZW5lcmF0ZUV2ZW50SWQiLCJkaWdpdHMiLCJpIiwiU2VuZGVyIiwidGFyZ2V0IiwicmVtb3ZlTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25NZXNzYWdlIiwiY2xvc2UiLCJfc2VuZCIsInRpbWVvdXQiLCJNZXNzYWdlQ2hhbm5lbCIsImNvbXBsZXRpb25UaW1lciIsInN0YXJ0IiwiYWNrVGltZXIiLCJwb3J0MiIsImZpbmFsbHkiLCJfd2luZG93IiwiX3NldFdpbmRvd0xvY2F0aW9uIiwiX2lzV29ya2VyIiwiX2dldEFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0cmF0aW9uIiwiYWN0aXZlIiwiX2dldFNlcnZpY2VXb3JrZXJDb250cm9sbGVyIiwiY29udHJvbGxlciIsIl9nZXRXb3JrZXJHbG9iYWxTY29wZSIsIkRCX05BTUUiLCJEQl9WRVJTSU9OIiwiREJfT0JKRUNUU1RPUkVfTkFNRSIsIkRCX0RBVEFfS0VZUEFUSCIsIkRCUHJvbWlzZSIsInRvUHJvbWlzZSIsImdldE9iamVjdFN0b3JlIiwiZGIiLCJpc1JlYWRXcml0ZSIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJfZGVsZXRlRGF0YWJhc2UiLCJpbmRleGVkREIiLCJkZWxldGVEYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJvcGVuIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwiX3B1dE9iamVjdCIsInB1dCIsImdldE9iamVjdCIsIl9kZWxldGVPYmplY3QiLCJfUE9MTElOR19JTlRFUlZBTF9NUyIsIl9UUkFOU0FDVElPTl9SRVRSWV9DT1VOVCIsIkluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJwZW5kaW5nV3JpdGVzIiwic2VuZGVyIiwic2VydmljZVdvcmtlclJlY2VpdmVyQXZhaWxhYmxlIiwiYWN0aXZlU2VydmljZVdvcmtlciIsIl93b3JrZXJJbml0aWFsaXphdGlvblByb21pc2UiLCJpbml0aWFsaXplU2VydmljZVdvcmtlck1lc3NhZ2luZyIsIl9vcGVuRGIiLCJfd2l0aFJldHJpZXMiLCJvcCIsIm51bUF0dGVtcHRzIiwiaW5pdGlhbGl6ZVJlY2VpdmVyIiwiaW5pdGlhbGl6ZVNlbmRlciIsIl9vcmlnaW4iLCJfcG9sbCIsImtleVByb2Nlc3NlZCIsIl9kYXRhIiwicmVzdWx0cyIsIm5vdGlmeVNlcnZpY2VXb3JrZXIiLCJfd2l0aFBlbmRpbmdXcml0ZSIsIndyaXRlIiwiZ2V0QWxsUmVxdWVzdCIsImdldEFsbCIsImtleXNJblJlc3VsdCIsImZiYXNlX2tleSIsImxvY2FsS2V5Iiwic3RhcnRTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblRvdHBNZmEiLCJfU09MVkVfVElNRV9NUyIsIl9FWFBJUkFUSU9OX1RJTUVfTVMiLCJfV0lER0VUX0lEX1NUQVJUIiwiTW9ja1JlQ2FwdGNoYSIsImNvdW50ZXIiLCJfd2lkZ2V0cyIsInJlbmRlciIsImNvbnRhaW5lciIsInBhcmFtZXRlcnMiLCJNb2NrV2lkZ2V0IiwicmVzZXQiLCJvcHRXaWRnZXRJZCIsImNvbnRhaW5lck9ySWQiLCJkZWxldGVkIiwicmVzcG9uc2VUb2tlbiIsImNsaWNrSGFuZGxlciIsImdldEVsZW1lbnRCeUlkIiwiaXNWaXNpYmxlIiwiY2hlY2tJZkRlbGV0ZWQiLCJnZW5lcmF0ZVJhbmRvbUFscGhhTnVtZXJpY1N0cmluZyIsImV4cGlyZWRDYWxsYmFjayIsImxlbiIsImNoYXJzIiwiYWxsb3dlZENoYXJzIiwiY2hhckF0IiwiX0pTTE9BRF9DQUxMQkFDSyIsIk5FVFdPUktfVElNRU9VVF9ERUxBWSIsIlJFQ0FQVENIQV9CQVNFIiwiUmVDYXB0Y2hhTG9hZGVySW1wbCIsImhvc3RMYW5ndWFnZSIsImxpYnJhcnlTZXBhcmF0ZWx5TG9hZGVkIiwibG9hZCIsImhsIiwiaXNIb3N0TGFuZ3VhZ2VWYWxpZCIsInNob3VsZFJlc29sdmVJbW1lZGlhdGVseSIsInJlY2FwdGNoYSIsIndpZGdldElkIiwiY2xlYXJlZE9uZUluc3RhbmNlIiwiTW9ja1JlQ2FwdGNoYUxvYWRlckltcGwiLCJSRUNBUFRDSEFfVkVSSUZJRVJfVFlQRSIsIkRFRkFVTFRfUEFSQU1TIiwidGhlbWUiLCJkZXN0cm95ZWQiLCJ0b2tlbkNoYW5nZUxpc3RlbmVycyIsInJlbmRlclByb21pc2UiLCJpc0ludmlzaWJsZSIsIm1ha2VUb2tlbkNhbGxiYWNrIiwiX3JlY2FwdGNoYUxvYWRlciIsInZhbGlkYXRlU3RhcnRpbmdTdGF0ZSIsImFzc2VydE5vdERlc3Ryb3llZCIsImdldEFzc2VydGVkUmVjYXB0Y2hhIiwidG9rZW5DaGFuZ2UiLCJtYWtlUmVuZGVyUHJvbWlzZSIsIl9yZXNldCIsImNsZWFyIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlQ2hpbGQiLCJzaXRla2V5IiwiaGFzQ2hpbGROb2RlcyIsImV4aXN0aW5nIiwiZ2xvYmFsRnVuYyIsImluaXQiLCJndWFyYW50ZWVkRW1wdHkiLCJkb21SZWFkeSIsIkNvbmZpcm1hdGlvblJlc3VsdEltcGwiLCJvbkNvbmZpcm1hdGlvbiIsImNvbmZpcm0iLCJhdXRoQ3JlZGVudGlhbCIsImFwcFZlcmlmaWVyIiwiX3ZlcmlmeVBob25lTnVtYmVyIiwicmVjYXB0Y2hhVG9rZW4iLCJwaG9uZUluZm9PcHRpb25zIiwicGhvbmVFbnJvbGxtZW50SW5mbyIsInBob25lU2Vzc2lvbkluZm8iLCJtdWx0aUZhY3RvckhpbnQiLCJtdWx0aUZhY3RvclVpZCIsInBob25lU2lnbkluSW5mbyIsInBob25lUmVzcG9uc2VJbmZvIiwidmVyaWZ5UGhvbmVOdW1iZXIiLCJwaG9uZU9wdGlvbnMiLCJhcHBsaWNhdGlvblZlcmlmaWVyIiwiUEhPTkVfU0lHTl9JTl9NRVRIT0QiLCJfd2l0aERlZmF1bHRSZXNvbHZlciIsInJlc29sdmVyT3ZlcnJpZGUiLCJJZHBDcmVkZW50aWFsIiwiX2J1aWxkSWRwUmVxdWVzdCIsInNlc3Npb25JZCIsInJldHVybklkcENyZWRlbnRpYWwiLCJfc2lnbkluIiwiX3JlYXV0aCIsIl9saW5rIiwiQWJzdHJhY3RQb3B1cFJlZGlyZWN0T3BlcmF0aW9uIiwicGVuZGluZ1Byb21pc2UiLCJldmVudE1hbmFnZXIiLCJvbkV4ZWN1dGlvbiIsInJlZ2lzdGVyQ29uc3VtZXIiLCJvbkF1dGhFdmVudCIsInVybFJlc3BvbnNlIiwiZ2V0SWRwVGFzayIsIm9uRXJyb3IiLCJ1bnJlZ2lzdGVyQW5kQ2xlYW5VcCIsInVucmVnaXN0ZXJDb25zdW1lciIsImNsZWFuVXAiLCJfUE9MTF9XSU5ET1dfQ0xPU0VfVElNRU9VVCIsInJlc29sdmVySW50ZXJuYWwiLCJQb3B1cE9wZXJhdGlvbiIsImV4ZWN1dGVOb3ROdWxsIiwiYXV0aFdpbmRvdyIsInBvbGxJZCIsImN1cnJlbnRQb3B1cEFjdGlvbiIsImNhbmNlbCIsIl9vcGVuUG9wdXAiLCJhc3NvY2lhdGVkRXZlbnQiLCJfb3JpZ2luVmFsaWRhdGlvbiIsIl9pc0lmcmFtZVdlYlN0b3JhZ2VTdXBwb3J0ZWQiLCJpc1N1cHBvcnRlZCIsInBvbGxVc2VyQ2FuY2VsbGF0aW9uIiwiY2xvc2VkIiwiUEVORElOR19SRURJUkVDVF9LRVkiLCJyZWRpcmVjdE91dGNvbWVNYXAiLCJSZWRpcmVjdEFjdGlvbiIsInJlYWR5T3V0Y29tZSIsImhhc1BlbmRpbmdSZWRpcmVjdCIsIl9nZXRBbmRDbGVhclBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsInBlbmRpbmdSZWRpcmVjdEtleSIsInJlc29sdmVyUGVyc2lzdGVuY2UiLCJfc2V0UGVuZGluZ1JlZGlyZWN0U3RhdHVzIiwiX2NsZWFyUmVkaXJlY3RPdXRjb21lcyIsIl9zaWduSW5XaXRoUmVkaXJlY3QiLCJfb3BlblJlZGlyZWN0IiwiX3JlYXV0aGVudGljYXRlV2l0aFJlZGlyZWN0IiwicHJlcGFyZVVzZXJGb3JSZWRpcmVjdCIsIl9saW5rV2l0aFJlZGlyZWN0IiwiX2dldFJlZGlyZWN0UmVzdWx0IiwicmVzb2x2ZXJFeHRlcm4iLCJFVkVOVF9EVVBMSUNBVElPTl9DQUNIRV9EVVJBVElPTl9NUyIsIkF1dGhFdmVudE1hbmFnZXIiLCJjYWNoZWRFdmVudFVpZHMiLCJjb25zdW1lcnMiLCJxdWV1ZWRSZWRpcmVjdEV2ZW50IiwiaGFzSGFuZGxlZFBvdGVudGlhbFJlZGlyZWN0IiwibGFzdFByb2Nlc3NlZEV2ZW50VGltZSIsImF1dGhFdmVudENvbnN1bWVyIiwiaXNFdmVudEZvckNvbnN1bWVyIiwic2VuZFRvQ29uc3VtZXIiLCJzYXZlRXZlbnRUb0NhY2hlIiwib25FdmVudCIsImhhc0V2ZW50QmVlbkhhbmRsZWQiLCJoYW5kbGVkIiwiY29uc3VtZXIiLCJpc1JlZGlyZWN0RXZlbnQiLCJpc051bGxSZWRpcmVjdEV2ZW50IiwiZXZlbnRJZE1hdGNoZXMiLCJldmVudFVpZCIsInYiLCJfZ2V0UHJvamVjdENvbmZpZyIsIklQX0FERFJFU1NfUkVHRVgiLCJIVFRQX1JFR0VYIiwiX3ZhbGlkYXRlT3JpZ2luIiwiYXV0aG9yaXplZERvbWFpbnMiLCJkb21haW4iLCJtYXRjaERvbWFpbiIsImN1cnJlbnRVcmwiLCJob3N0bmFtZSIsIlVSTCIsImNlVXJsIiwiZXNjYXBlZERvbWFpblBhdHRlcm4iLCJSZWdFeHAiLCJORVRXT1JLX1RJTUVPVVQiLCJyZXNldFVubG9hZGVkR2FwaU1vZHVsZXMiLCJiZWFjb24iLCJfX19qc2wiLCJIIiwiaGludCIsInIiLCJMIiwiQ1AiLCJsb2FkR2FwaSIsImxvYWRHYXBpSWZyYW1lIiwiZ2FwaSIsImlmcmFtZXMiLCJnZXRDb250ZXh0Iiwib250aW1lb3V0IiwiSWZyYW1lIiwiY2JOYW1lIiwiY2FjaGVkR0FwaUxvYWRlciIsIl9sb2FkR2FwaSIsIlBJTkdfVElNRU9VVCIsIklGUkFNRV9QQVRIIiwiRU1VTEFURURfSUZSQU1FX1BBVEgiLCJJRlJBTUVfQVRUUklCVVRFUyIsImhlaWdodCIsInRhYmluZGV4IiwiRUlEX0ZST01fQVBJSE9TVCIsImdldElmcmFtZVVybCIsImVpZCIsImZ3IiwiX29wZW5JZnJhbWUiLCJjb250ZXh0IiwiZ2FwaTIiLCJ3aGVyZSIsIm1lc3NhZ2VIYW5kbGVyc0ZpbHRlciIsIkNST1NTX09SSUdJTl9JRlJBTUVTX0ZJTFRFUiIsImF0dHJpYnV0ZXMiLCJkb250Y2xlYXIiLCJpZnJhbWUiLCJyZXN0eWxlIiwic2V0SGlkZU9uTGVhdmUiLCJuZXR3b3JrRXJyb3IiLCJuZXR3b3JrRXJyb3JUaW1lciIsImNsZWFyVGltZXJBbmRSZXNvbHZlIiwicGluZyIsIkJBU0VfUE9QVVBfT1BUSU9OUyIsInJlc2l6YWJsZSIsInN0YXR1c2JhciIsInRvb2xiYXIiLCJERUZBVUxUX1dJRFRIIiwiREVGQVVMVF9IRUlHSFQiLCJUQVJHRVRfQkxBTksiLCJGSVJFRk9YX0VNUFRZX1VSTCIsIkF1dGhQb3B1cCIsIndpbmRvdzIiLCJfb3BlbiIsInNjcmVlbiIsImF2YWlsSGVpZ2h0IiwiYXZhaWxXaWR0aCIsInNjcm9sbGJhcnMiLCJvcHRpb25zU3RyaW5nIiwiZW50cmllcyIsInJlZHVjZSIsImFjY3VtIiwib3BlbkFzTmV3V2luZG93SU9TIiwibmV3V2luIiwiZm9jdXMiLCJjbGljayIsImNyZWF0ZUV2ZW50IiwiaW5pdE1vdXNlRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiV0lER0VUX1BBVEgiLCJFTVVMQVRPUl9XSURHRVRfUEFUSCIsIkZJUkVCQVNFX0FQUF9DSEVDS19GUkFHTUVOVF9JRCIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9nZXRSZWRpcmVjdFVybCIsImF1dGhUeXBlIiwicmVkaXJlY3RVcmwiLCJhZGRpdGlvbmFsUGFyYW1zIiwiaXNFbXB0eSIsInRpZCIsInBhcmFtc0RpY3QiLCJhcHBDaGVja1Rva2VuRnJhZ21lbnQiLCJnZXRIYW5kbGVyQmFzZSIsIldFQl9TVE9SQUdFX1NVUFBPUlRfS0VZIiwiQnJvd3NlclBvcHVwUmVkaXJlY3RSZXNvbHZlciIsImV2ZW50TWFuYWdlcnMiLCJvcmlnaW5WYWxpZGF0aW9uUHJvbWlzZXMiLCJwcm9taXNlMiIsImluaXRBbmRHZXRNYW5hZ2VyIiwicmVnaXN0ZXIiLCJpZnJhbWVFdmVudCIsImF1dGhFdmVudCIsInNlbmQiLCJNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZmluYWxpemVFbnJvbGwiLCJfZmluYWxpemVTaWduSW4iLCJQaG9uZU11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tQ3JlZGVudGlhbCIsInBob25lVmVyaWZpY2F0aW9uSW5mbyIsIkZBQ1RPUl9JRCIsImFzc2VydGlvbkZvckVucm9sbG1lbnQiLCJvbmVUaW1lUGFzc3dvcmQiLCJUb3RwTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2Zyb21TZWNyZXQiLCJhc3NlcnRpb25Gb3JTaWduSW4iLCJlbnJvbGxtZW50SWQiLCJfZnJvbUVucm9sbG1lbnRJZCIsImdlbmVyYXRlU2VjcmV0IiwibWZhU2Vzc2lvbiIsInRvdHBFbnJvbGxtZW50SW5mbyIsIl9mcm9tU3RhcnRUb3RwTWZhRW5yb2xsbWVudFJlc3BvbnNlIiwib3RwIiwidG90cFZlcmlmaWNhdGlvbkluZm8iLCJfbWFrZVRvdHBWZXJpZmljYXRpb25JbmZvIiwic2VjcmV0S2V5IiwiaGFzaGluZ0FsZ29yaXRobSIsImNvZGVMZW5ndGgiLCJjb2RlSW50ZXJ2YWxTZWNvbmRzIiwiZW5yb2xsbWVudENvbXBsZXRpb25EZWFkbGluZSIsInRvdHBTZXNzaW9uSW5mbyIsInNoYXJlZFNlY3JldEtleSIsInZlcmlmaWNhdGlvbkNvZGVMZW5ndGgiLCJwZXJpb2RTZWMiLCJmaW5hbGl6ZUVucm9sbG1lbnRUaW1lIiwiZ2VuZXJhdGVRckNvZGVVcmwiLCJhY2NvdW50TmFtZSIsImlzc3VlciIsInVzZURlZmF1bHRzIiwiX2lzRW1wdHlTdHJpbmciLCJpbnB1dCIsIkF1dGhJbnRlcm9wIiwiaW50ZXJuYWxMaXN0ZW5lcnMiLCJnZXRVaWQiLCJhc3NlcnRBdXRoQ29uZmlndXJlZCIsImFkZEF1dGhUb2tlbkxpc3RlbmVyIiwidXBkYXRlUHJvYWN0aXZlUmVmcmVzaCIsInJlbW92ZUF1dGhUb2tlbkxpc3RlbmVyIiwiZ2V0VmVyc2lvbkZvclBsYXRmb3JtIiwicmVnaXN0ZXJBdXRoIiwiX3JlZ2lzdGVyQ29tcG9uZW50IiwiaW1wb3J0X2NvbXBvbmVudCIsIkNvbXBvbmVudCIsImdldFByb3ZpZGVyIiwiYXV0aEluc3RhbmNlIiwic2V0SW5zdGFudGlhdGlvbk1vZGUiLCJzZXRJbnN0YW5jZUNyZWF0ZWRDYWxsYmFjayIsIl9pbnN0YW5jZUlkZW50aWZpZXIiLCJfaW5zdGFuY2UiLCJhdXRoSW50ZXJuYWxQcm92aWRlciIsInJlZ2lzdGVyVmVyc2lvbiIsIkRFRkFVTFRfSURfVE9LRU5fTUFYX0FHRSIsImF1dGhJZFRva2VuTWF4QWdlIiwiZ2V0RXhwZXJpbWVudGFsU2V0dGluZyIsImxhc3RQb3N0ZWRJZFRva2VuIiwibWludENvb2tpZUZhY3RvcnkiLCJpZFRva2VuUmVzdWx0IiwiaWRUb2tlbkFnZSIsImdldEFwcCIsImF1dGhUb2tlblN5bmNVcmwiLCJtaW50Q29va2llIiwiYXV0aEVtdWxhdG9ySG9zdCIsImdldERlZmF1bHRFbXVsYXRvckhvc3QiLCJpbXBvcnRfdXRpbDIiLCJyZXF1aXJlIiwiaW1wb3J0X2FwcDIiLCJpbXBvcnRfdHNsaWIyIiwiaW1wb3J0X2xvZ2dlcjIiLCJpbXBvcnRfY29tcG9uZW50MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQywwQ0FBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtF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