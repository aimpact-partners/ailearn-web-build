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

// .beyond/uimport/@firebase/auth.1.1.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXV0aC4xLjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbW9kZWwvZW51bV9tYXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Fzc2VydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvY2F0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbmF2aWdhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZGVsYXkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2ZldGNoX3Byb3ZpZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvYWNjb3VudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3RpbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9pZF90b2tlbl9yZXN1bHQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9pbnZhbGlkYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9wcm9hY3RpdmVfcmVmcmVzaC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfbWV0YWRhdGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWxvYWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Rva2VuX21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9pbnN0YW50aWF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvaW5fbWVtb3J5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL3BlcnNpc3RlbmNlX3VzZXJfbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92ZXJzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vcmVjYXB0Y2hhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbG9hZF9qcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2VudGVycHJpc2VfdmVyaWZpZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvaW5pdGlhbGl6ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2F1dGhfY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc21zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2FjdGlvbl9jb2RlX3VybC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZlZGVyYXRlZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZhY2Vib29rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9nb29nbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dpdGh1Yi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy90d2l0dGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc2lnbl91cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfY3JlZGVudGlhbF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYW5vbnltb3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Vycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcHJvdmlkZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvbGlua191bmxpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWF1dGhlbnRpY2F0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2FjdGlvbl9jb2RlX3NldHRpbmdzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2NyZWF0ZV9hdXRoX3VyaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L3Byb2ZpbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hY2NvdW50X2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hZGRpdGlvbmFsX3VzZXJfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9zZXNzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV91c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvbG9jYWxfc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9zZXNzaW9uX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcHJvbWlzZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9yZWNlaXZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2V2ZW50X2lkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3NlbmRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9hdXRoX3dpbmRvdy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3dvcmtlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9pbmRleGVkX2RiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbW9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2xvYWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcHJvdmlkZXJzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hYnN0cmFjdF9wb3B1cF9yZWRpcmVjdF9vcGVyYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2V2ZW50X21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wcm9qZWN0X2NvbmZpZy9nZXRfcHJvamVjdF9jb25maWcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92YWxpZGF0ZV9vcmlnaW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2dhcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2lmcmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaGFuZGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wb3B1cF9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9hc3NlcnRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWZhL2Fzc2VydGlvbnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9hc3NlcnRpb25zL3RvdHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9maXJlYmFzZV9pbnRlcm5hbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3JlZ2lzdGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL2Rpc3QvZXNtMjAxNy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhdXRoXzFfMV8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFjdGlvbkNvZGVPcGVyYXRpb24iLCJBY3Rpb25Db2RlVVJMIiwiQXV0aENyZWRlbnRpYWwiLCJBdXRoRXJyb3JDb2RlcyIsIkFVVEhfRVJST1JfQ09ERVNfTUFQX0RPX05PVF9VU0VfSU5URVJOQUxMWSIsIkVtYWlsQXV0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiRmFjdG9ySWQiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJPQXV0aENyZWRlbnRpYWwiLCJPQXV0aFByb3ZpZGVyIiwiT3BlcmF0aW9uVHlwZSIsIlBob25lQXV0aENyZWRlbnRpYWwiLCJQaG9uZUF1dGhQcm92aWRlciIsIlBob25lTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJQcm92aWRlcklkIiwiUmVjYXB0Y2hhVmVyaWZpZXIiLCJTQU1MQXV0aFByb3ZpZGVyIiwiU2lnbkluTWV0aG9kIiwiVG90cE11bHRpRmFjdG9yR2VuZXJhdG9yIiwiVG90cFNlY3JldCIsIlR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJhcHBseUFjdGlvbkNvZGUiLCJiZWZvcmVBdXRoU3RhdGVDaGFuZ2VkIiwiYnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJicm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsImNoZWNrQWN0aW9uQ29kZSIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29ubmVjdEF1dGhFbXVsYXRvciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRlYnVnRXJyb3JNYXAiLCJkZWxldGVVc2VyIiwiZmV0Y2hTaWduSW5NZXRob2RzRm9yRW1haWwiLCJnZXRBZGRpdGlvbmFsVXNlckluZm8iLCJnZXRBdXRoIiwiZ2V0SWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJnZXRNdWx0aUZhY3RvclJlc29sdmVyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJpbk1lbW9yeVBlcnNpc3RlbmNlIiwiaW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsImluaXRpYWxpemVBdXRoIiwiaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImlzU2lnbkluV2l0aEVtYWlsTGluayIsImxpbmtXaXRoQ3JlZGVudGlhbCIsImxpbmtXaXRoUGhvbmVOdW1iZXIiLCJsaW5rV2l0aFBvcHVwIiwibGlua1dpdGhSZWRpcmVjdCIsIm11bHRpRmFjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwib25JZFRva2VuQ2hhbmdlZCIsInBhcnNlQWN0aW9uQ29kZVVSTCIsInByb2RFcnJvck1hcCIsInJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQaG9uZU51bWJlciIsInJlYXV0aGVudGljYXRlV2l0aFBvcHVwIiwicmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJyZWxvYWQiLCJzZW5kRW1haWxWZXJpZmljYXRpb24iLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsIiwic2V0UGVyc2lzdGVuY2UiLCJzaWduSW5Bbm9ueW1vdXNseSIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxMaW5rIiwic2lnbkluV2l0aFBob25lTnVtYmVyIiwic2lnbkluV2l0aFBvcHVwIiwic2lnbkluV2l0aFJlZGlyZWN0Iiwic2lnbk91dCIsInVubGluayIsInVwZGF0ZUN1cnJlbnRVc2VyIiwidXBkYXRlRW1haWwiLCJ1cGRhdGVQYXNzd29yZCIsInVwZGF0ZVBob25lTnVtYmVyIiwidXBkYXRlUHJvZmlsZSIsInVzZURldmljZUxhbmd1YWdlIiwidmVyaWZ5QmVmb3JlVXBkYXRlRW1haWwiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJQSE9ORSIsIlRPVFAiLCJGQUNFQk9PSyIsIkdJVEhVQiIsIkdPT0dMRSIsIlBBU1NXT1JEIiwiVFdJVFRFUiIsIkVNQUlMX0xJTksiLCJFTUFJTF9QQVNTV09SRCIsIkxJTksiLCJSRUFVVEhFTlRJQ0FURSIsIlNJR05fSU4iLCJFTUFJTF9TSUdOSU4iLCJQQVNTV09SRF9SRVNFVCIsIlJFQ09WRVJfRU1BSUwiLCJSRVZFUlRfU0VDT05EX0ZBQ1RPUl9BRERJVElPTiIsIlZFUklGWV9BTkRfQ0hBTkdFX0VNQUlMIiwiVkVSSUZZX0VNQUlMIiwiX2RlYnVnRXJyb3JNYXAiLCJfcHJvZEVycm9yTWFwIiwiX0RFRkFVTFRfQVVUSF9FUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJFcnJvckZhY3RvcnkiLCJBRE1JTl9PTkxZX09QRVJBVElPTiIsIkFSR1VNRU5UX0VSUk9SIiwiQVBQX05PVF9BVVRIT1JJWkVEIiwiQVBQX05PVF9JTlNUQUxMRUQiLCJDQVBUQ0hBX0NIRUNLX0ZBSUxFRCIsIkNPREVfRVhQSVJFRCIsIkNPUkRPVkFfTk9UX1JFQURZIiwiQ09SU19VTlNVUFBPUlRFRCIsIkNSRURFTlRJQUxfQUxSRUFEWV9JTl9VU0UiLCJDUkVERU5USUFMX01JU01BVENIIiwiQ1JFREVOVElBTF9UT09fT0xEX0xPR0lOX0FHQUlOIiwiREVQRU5ERU5UX1NES19JTklUX0JFRk9SRV9BVVRIIiwiRFlOQU1JQ19MSU5LX05PVF9BQ1RJVkFURUQiLCJFTUFJTF9DSEFOR0VfTkVFRFNfVkVSSUZJQ0FUSU9OIiwiRU1BSUxfRVhJU1RTIiwiRU1VTEFUT1JfQ09ORklHX0ZBSUxFRCIsIkVYUElSRURfT09CX0NPREUiLCJFWFBJUkVEX1BPUFVQX1JFUVVFU1QiLCJJTlRFUk5BTF9FUlJPUiIsIklOVkFMSURfQVBJX0tFWSIsIklOVkFMSURfQVBQX0NSRURFTlRJQUwiLCJJTlZBTElEX0FQUF9JRCIsIklOVkFMSURfQVVUSCIsIklOVkFMSURfQVVUSF9FVkVOVCIsIklOVkFMSURfQ0VSVF9IQVNIIiwiSU5WQUxJRF9DT0RFIiwiSU5WQUxJRF9DT05USU5VRV9VUkkiLCJJTlZBTElEX0NPUkRPVkFfQ09ORklHVVJBVElPTiIsIklOVkFMSURfQ1VTVE9NX1RPS0VOIiwiSU5WQUxJRF9EWU5BTUlDX0xJTktfRE9NQUlOIiwiSU5WQUxJRF9FTUFJTCIsIklOVkFMSURfRU1VTEFUT1JfU0NIRU1FIiwiSU5WQUxJRF9JRFBfUkVTUE9OU0UiLCJJTlZBTElEX01FU1NBR0VfUEFZTE9BRCIsIklOVkFMSURfTUZBX1NFU1NJT04iLCJJTlZBTElEX09BVVRIX0NMSUVOVF9JRCIsIklOVkFMSURfT0FVVEhfUFJPVklERVIiLCJJTlZBTElEX09PQl9DT0RFIiwiSU5WQUxJRF9PUklHSU4iLCJJTlZBTElEX1BBU1NXT1JEIiwiSU5WQUxJRF9QRVJTSVNURU5DRSIsIklOVkFMSURfUEhPTkVfTlVNQkVSIiwiSU5WQUxJRF9QUk9WSURFUl9JRCIsIklOVkFMSURfUkVDSVBJRU5UX0VNQUlMIiwiSU5WQUxJRF9TRU5ERVIiLCJJTlZBTElEX1NFU1NJT05fSU5GTyIsIklOVkFMSURfVEVOQU5UX0lEIiwiTUZBX0lORk9fTk9UX0ZPVU5EIiwiTUZBX1JFUVVJUkVEIiwiTUlTU0lOR19BTkRST0lEX1BBQ0tBR0VfTkFNRSIsIk1JU1NJTkdfQVBQX0NSRURFTlRJQUwiLCJNSVNTSU5HX0FVVEhfRE9NQUlOIiwiTUlTU0lOR19DT0RFIiwiTUlTU0lOR19DT05USU5VRV9VUkkiLCJNSVNTSU5HX0lGUkFNRV9TVEFSVCIsIk1JU1NJTkdfSU9TX0JVTkRMRV9JRCIsIk1JU1NJTkdfT1JfSU5WQUxJRF9OT05DRSIsIk1JU1NJTkdfTUZBX0lORk8iLCJNSVNTSU5HX01GQV9TRVNTSU9OIiwiTUlTU0lOR19QSE9ORV9OVU1CRVIiLCJNSVNTSU5HX1NFU1NJT05fSU5GTyIsIk1PRFVMRV9ERVNUUk9ZRUQiLCJORUVEX0NPTkZJUk1BVElPTiIsIk5FVFdPUktfUkVRVUVTVF9GQUlMRUQiLCJOVUxMX1VTRVIiLCJOT19BVVRIX0VWRU5UIiwiTk9fU1VDSF9QUk9WSURFUiIsIk9QRVJBVElPTl9OT1RfQUxMT1dFRCIsIk9QRVJBVElPTl9OT1RfU1VQUE9SVEVEIiwiUE9QVVBfQkxPQ0tFRCIsIlBPUFVQX0NMT1NFRF9CWV9VU0VSIiwiUFJPVklERVJfQUxSRUFEWV9MSU5LRUQiLCJRVU9UQV9FWENFRURFRCIsIlJFRElSRUNUX0NBTkNFTExFRF9CWV9VU0VSIiwiUkVESVJFQ1RfT1BFUkFUSU9OX1BFTkRJTkciLCJSRUpFQ1RFRF9DUkVERU5USUFMIiwiU0VDT05EX0ZBQ1RPUl9BTFJFQURZX0VOUk9MTEVEIiwiU0VDT05EX0ZBQ1RPUl9MSU1JVF9FWENFRURFRCIsIlRFTkFOVF9JRF9NSVNNQVRDSCIsIlRJTUVPVVQiLCJUT0tFTl9FWFBJUkVEIiwiVE9PX01BTllfQVRURU1QVFNfVFJZX0xBVEVSIiwiVU5BVVRIT1JJWkVEX0RPTUFJTiIsIlVOU1VQUE9SVEVEX0ZJUlNUX0ZBQ1RPUiIsIlVOU1VQUE9SVEVEX1BFUlNJU1RFTkNFIiwiVU5TVVBQT1JURURfVEVOQU5UX09QRVJBVElPTiIsIlVOVkVSSUZJRURfRU1BSUwiLCJVU0VSX0NBTkNFTExFRCIsIlVTRVJfREVMRVRFRCIsIlVTRVJfRElTQUJMRUQiLCJVU0VSX01JU01BVENIIiwiVVNFUl9TSUdORURfT1VUIiwiV0VBS19QQVNTV09SRCIsIldFQl9TVE9SQUdFX1VOU1VQUE9SVEVEIiwiQUxSRUFEWV9JTklUSUFMSVpFRCIsIlJFQ0FQVENIQV9OT1RfRU5BQkxFRCIsIk1JU1NJTkdfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfVE9LRU4iLCJJTlZBTElEX1JFQ0FQVENIQV9BQ1RJT04iLCJNSVNTSU5HX0NMSUVOVF9UWVBFIiwiTUlTU0lOR19SRUNBUFRDSEFfVkVSU0lPTiIsIklOVkFMSURfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFUV9UWVBFIiwibG9nQ2xpZW50IiwiaW1wb3J0X2xvZ2dlciIsIkxvZ2dlciIsIl9sb2dXYXJuIiwibXNnIiwiYXJncyIsImxvZ0xldmVsIiwiTG9nTGV2ZWwiLCJXQVJOIiwid2FybiIsImltcG9ydF9hcHAiLCJTREtfVkVSU0lPTiIsIl9sb2dFcnJvciIsIkVSUk9SIiwiZXJyb3IiLCJfZmFpbCIsImF1dGhPckNvZGUiLCJyZXN0IiwiY3JlYXRlRXJyb3JJbnRlcm5hbCIsIl9jcmVhdGVFcnJvciIsIl9lcnJvcldpdGhDdXN0b21NZXNzYWdlIiwiYXV0aCIsImNvZGUiLCJtZXNzYWdlIiwiZXJyb3JNYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJmYWN0b3J5IiwiY3JlYXRlIiwiYXBwTmFtZSIsIm5hbWUiLCJfYXNzZXJ0SW5zdGFuY2VPZiIsIm9iamVjdCIsImluc3RhbmNlIiwiY29uc3RydWN0b3JJbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiZnVsbFBhcmFtcyIsInNsaWNlIiwiX2Vycm9yRmFjdG9yeSIsIl9hc3NlcnQiLCJhc3NlcnRpb24iLCJkZWJ1Z0ZhaWwiLCJmYWlsdXJlIiwiRXJyb3IiLCJkZWJ1Z0Fzc2VydCIsIl9nZXRDdXJyZW50VXJsIiwic2VsZiIsIl9hIiwibG9jYXRpb24iLCJocmVmIiwiX2lzSHR0cE9ySHR0cHMiLCJfZ2V0Q3VycmVudFNjaGVtZSIsInByb3RvY29sIiwiX2lzT25saW5lIiwibmF2aWdhdG9yIiwib25MaW5lIiwiaXNCcm93c2VyRXh0ZW5zaW9uIiwiX2dldFVzZXJMYW5ndWFnZSIsIm5hdmlnYXRvckxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJEZWxheSIsInNob3J0RGVsYXkiLCJsb25nRGVsYXkiLCJpc01vYmlsZSIsImlzTW9iaWxlQ29yZG92YSIsImlzUmVhY3ROYXRpdmUiLCJnZXQiLCJNYXRoIiwibWluIiwiX2VtdWxhdG9yVXJsIiwiY29uZmlnIiwicGF0aCIsImVtdWxhdG9yIiwidXJsIiwic3RhcnRzV2l0aCIsIkZldGNoUHJvdmlkZXIiLCJpbml0aWFsaXplIiwiZmV0Y2hJbXBsIiwiaGVhZGVyc0ltcGwiLCJyZXNwb25zZUltcGwiLCJmZXRjaCIsImhlYWRlcnMiLCJIZWFkZXJzIiwicmVzcG9uc2UiLCJSZXNwb25zZSIsIlNFUlZFUl9FUlJPUl9NQVAiLCJERUZBVUxUX0FQSV9USU1FT1VUX01TIiwiX2FkZFRpZElmTmVjZXNzYXJ5IiwicmVxdWVzdCIsInRlbmFudElkIiwiX3BlcmZvcm1BcGlSZXF1ZXN0IiwibWV0aG9kIiwiY3VzdG9tRXJyb3JNYXAiLCJfcGVyZm9ybUZldGNoV2l0aEVycm9ySGFuZGxpbmciLCJib2R5IiwicGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwicXVlcnlzdHJpbmciLCJrZXkiLCJhcGlLZXkiLCJfZ2V0QWRkaXRpb25hbEhlYWRlcnMiLCJsYW5ndWFnZUNvZGUiLCJfZ2V0RmluYWxUYXJnZXQiLCJhcGlIb3N0IiwicmVmZXJyZXJQb2xpY3kiLCJmZXRjaEZuIiwiX2NhbkluaXRFbXVsYXRvciIsIm5ldHdvcmtUaW1lb3V0IiwiTmV0d29ya1RpbWVvdXQiLCJQcm9taXNlIiwicmFjZSIsInByb21pc2UiLCJjbGVhck5ldHdvcmtUaW1lb3V0IiwianNvbiIsIl9tYWtlVGFnZ2VkRXJyb3IiLCJvayIsImVycm9yTWVzc2FnZSIsInNlcnZlckVycm9yQ29kZSIsInNlcnZlckVycm9yTWVzc2FnZSIsInNwbGl0IiwiYXV0aEVycm9yIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiZSIsIkZpcmViYXNlRXJyb3IiLCJTdHJpbmciLCJfcGVyZm9ybVNpZ25JblJlcXVlc3QiLCJzZXJ2ZXJSZXNwb25zZSIsIl9zZXJ2ZXJSZXNwb25zZSIsImhvc3QiLCJiYXNlIiwiYXBpU2NoZW1lIiwidGltZXIiLCJfIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImVycm9yUGFyYW1zIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImN1c3RvbURhdGEiLCJfdG9rZW5SZXNwb25zZSIsImRlbGV0ZUFjY291bnQiLCJkZWxldGVMaW5rZWRBY2NvdW50cyIsImdldEFjY291bnRJbmZvIiwidXRjVGltZXN0YW1wVG9EYXRlU3RyaW5nIiwidXRjVGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJOdW1iZXIiLCJpc05hTiIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsInVzZXIiLCJmb3JjZVJlZnJlc2giLCJnZXRNb2R1bGFySW5zdGFuY2UiLCJ1c2VySW50ZXJuYWwiLCJ0b2tlbiIsImNsYWltcyIsIl9wYXJzZVRva2VuIiwiZXhwIiwiYXV0aF90aW1lIiwiaWF0IiwiZmlyZWJhc2UiLCJzaWduSW5Qcm92aWRlciIsImF1dGhUaW1lIiwic2Vjb25kc1N0cmluZ1RvTWlsbGlzZWNvbmRzIiwiaXNzdWVkQXRUaW1lIiwiZXhwaXJhdGlvblRpbWUiLCJzaWduSW5TZWNvbmRGYWN0b3IiLCJzZWNvbmRzIiwiYWxnb3JpdGhtIiwicGF5bG9hZCIsInNpZ25hdHVyZSIsImRlY29kZWQiLCJiYXNlNjREZWNvZGUiLCJwYXJzZSIsInRvU3RyaW5nIiwiX3Rva2VuRXhwaXJlc0luIiwicGFyc2VkVG9rZW4iLCJfbG9nb3V0SWZJbnZhbGlkYXRlZCIsImJ5cGFzc0F1dGhTdGF0ZSIsImlzVXNlckludmFsaWRhdGVkIiwiY3VycmVudFVzZXIiLCJQcm9hY3RpdmVSZWZyZXNoIiwiaXNSdW5uaW5nIiwidGltZXJJZCIsImVycm9yQmFja29mZiIsIl9zdGFydCIsInNjaGVkdWxlIiwiX3N0b3AiLCJnZXRJbnRlcnZhbCIsIndhc0Vycm9yIiwiaW50ZXJ2YWwiLCJleHBUaW1lIiwic3RzVG9rZW5NYW5hZ2VyIiwibm93IiwibWF4IiwiaXRlcmF0aW9uIiwiVXNlck1ldGFkYXRhIiwiY3JlYXRlZEF0IiwibGFzdExvZ2luQXQiLCJfaW5pdGlhbGl6ZVRpbWUiLCJsYXN0U2lnbkluVGltZSIsImNyZWF0aW9uVGltZSIsIl9jb3B5IiwibWV0YWRhdGEiLCJ0b0pTT04iLCJfcmVsb2FkV2l0aG91dFNhdmluZyIsImlkVG9rZW4iLCJ1c2VycyIsImxlbmd0aCIsImNvcmVBY2NvdW50IiwiX25vdGlmeVJlbG9hZExpc3RlbmVyIiwibmV3UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJVc2VySW5mbyIsImV4dHJhY3RQcm92aWRlckRhdGEiLCJwcm92aWRlckRhdGEiLCJtZXJnZVByb3ZpZGVyRGF0YSIsIm9sZElzQW5vbnltb3VzIiwiaXNBbm9ueW1vdXMiLCJuZXdJc0Fub255bW91cyIsInBhc3N3b3JkSGFzaCIsInVwZGF0ZXMiLCJ1aWQiLCJsb2NhbElkIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsInBob3RvVXJsIiwiZW1haWxWZXJpZmllZCIsIl9wZXJzaXN0VXNlcklmQ3VycmVudCIsIl9ub3RpZnlMaXN0ZW5lcnNJZkN1cnJlbnQiLCJvcmlnaW5hbCIsIm5ld0RhdGEiLCJkZWR1cGVkIiwiZmlsdGVyIiwibyIsInNvbWUiLCJuIiwicHJvdmlkZXJJZCIsInByb3ZpZGVycyIsIm1hcCIsInByb3ZpZGVyIiwiaW1wb3J0X3RzbGliIiwiX19yZXN0IiwicmF3SWQiLCJyZXF1ZXN0U3RzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJ0b2tlbkFwaUhvc3QiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNJbiIsImV4cGlyZXNfaW4iLCJyZWZyZXNoX3Rva2VuIiwiU3RzVG9rZW5NYW5hZ2VyIiwiaXNFeHBpcmVkIiwidXBkYXRlRnJvbVNlcnZlclJlc3BvbnNlIiwidXBkYXRlVG9rZW5zQW5kRXhwaXJhdGlvbiIsImdldFRva2VuIiwicmVmcmVzaCIsImNsZWFyUmVmcmVzaFRva2VuIiwib2xkVG9rZW4iLCJleHBpcmVzSW5TZWMiLCJmcm9tSlNPTiIsIm1hbmFnZXIiLCJfYXNzaWduIiwiX2Nsb25lIiwiX3BlcmZvcm1SZWZyZXNoIiwiYXNzZXJ0U3RyaW5nT3JVbmRlZmluZWQiLCJVc2VySW1wbCIsIm9wdCIsInByb2FjdGl2ZVJlZnJlc2giLCJyZWxvYWRVc2VySW5mbyIsInJlbG9hZExpc3RlbmVyIiwidXNlckluZm8iLCJuZXdVc2VyIiwiX29uUmVsb2FkIiwiY2FsbGJhY2siLCJfc3RhcnRQcm9hY3RpdmVSZWZyZXNoIiwiX3N0b3BQcm9hY3RpdmVSZWZyZXNoIiwiX3VwZGF0ZVRva2Vuc0lmTmVjZXNzYXJ5IiwicmVsb2FkMiIsInRva2Vuc1JlZnJlc2hlZCIsImRlbGV0ZSIsIl9yZWRpcmVjdEV2ZW50SWQiLCJfZnJvbUpTT04iLCJfYiIsIl9jIiwiX2QiLCJfZSIsIl9mIiwiX2ciLCJfaCIsInBsYWluT2JqZWN0VG9rZW5NYW5hZ2VyIiwiQXJyYXkiLCJpc0FycmF5IiwiX2Zyb21JZFRva2VuUmVzcG9uc2UiLCJpZFRva2VuUmVzcG9uc2UiLCJpbnN0YW5jZUNhY2hlIiwiTWFwIiwiX2dldEluc3RhbmNlIiwiY2xzIiwiRnVuY3Rpb24iLCJzZXQiLCJJbk1lbW9yeVBlcnNpc3RlbmNlIiwidHlwZSIsInN0b3JhZ2UiLCJfaXNBdmFpbGFibGUiLCJfc2V0IiwidmFsdWUiLCJfZ2V0IiwiX3JlbW92ZSIsIl9hZGRMaXN0ZW5lciIsIl9rZXkiLCJfbGlzdGVuZXIiLCJfcmVtb3ZlTGlzdGVuZXIiLCJfcGVyc2lzdGVuY2VLZXlOYW1lIiwiUGVyc2lzdGVuY2VVc2VyTWFuYWdlciIsInBlcnNpc3RlbmNlIiwidXNlcktleSIsIm5hbWUyIiwiZnVsbFVzZXJLZXkiLCJmdWxsUGVyc2lzdGVuY2VLZXkiLCJib3VuZEV2ZW50SGFuZGxlciIsIl9vblN0b3JhZ2VFdmVudCIsImJpbmQiLCJzZXRDdXJyZW50VXNlciIsImdldEN1cnJlbnRVc2VyIiwiYmxvYiIsInJlbW92ZUN1cnJlbnRVc2VyIiwic2F2ZVBlcnNpc3RlbmNlRm9yUmVkaXJlY3QiLCJuZXdQZXJzaXN0ZW5jZSIsInBlcnNpc3RlbmNlSGllcmFyY2h5IiwiYXZhaWxhYmxlUGVyc2lzdGVuY2VzIiwiYWxsIiwic2VsZWN0ZWRQZXJzaXN0ZW5jZSIsInVzZXJUb01pZ3JhdGUiLCJtaWdyYXRpb25IaWVyYXJjaHkiLCJwIiwiX3Nob3VsZEFsbG93TWlncmF0aW9uIiwiX2dldEJyb3dzZXJOYW1lIiwidXNlckFnZW50IiwidWEiLCJpbmNsdWRlcyIsIl9pc0lFTW9iaWxlIiwiX2lzRmlyZWZveCIsIl9pc0JsYWNrQmVycnkiLCJfaXNXZWJPUyIsIl9pc1NhZmFyaSIsIl9pc0Nocm9tZUlPUyIsIl9pc0FuZHJvaWQiLCJyZSIsIm1hdGNoZXMiLCJtYXRjaCIsImdldFVBIiwidGVzdCIsIl9pc0lPUyIsIl9pc0lPUzdPcjgiLCJfaXNJT1NTdGFuZGFsb25lIiwid2luZG93Iiwic3RhbmRhbG9uZSIsIl9pc0lFMTAiLCJpc0lFIiwiZG9jdW1lbnQiLCJkb2N1bWVudE1vZGUiLCJfaXNNb2JpbGVCcm93c2VyIiwiX2lzSWZyYW1lIiwidG9wIiwiX2dldENsaWVudFZlcnNpb24iLCJjbGllbnRQbGF0Zm9ybSIsImZyYW1ld29ya3MiLCJyZXBvcnRlZFBsYXRmb3JtIiwicmVwb3J0ZWRGcmFtZXdvcmtzIiwiam9pbiIsImdldFJlY2FwdGNoYVBhcmFtcyIsInJlY2FwdGNoYVNpdGVLZXkiLCJnZXRSZWNhcHRjaGFDb25maWciLCJpc1YyIiwiZ3JlY2FwdGNoYSIsImdldFJlc3BvbnNlIiwiaXNFbnRlcnByaXNlIiwiZW50ZXJwcmlzZSIsIlJlY2FwdGNoYUNvbmZpZyIsInNpdGVLZXkiLCJlbWFpbFBhc3N3b3JkRW5hYmxlZCIsInJlY2FwdGNoYUtleSIsInJlY2FwdGNoYUVuZm9yY2VtZW50U3RhdGUiLCJlbmZvcmNlbWVudFN0YXRlIiwiZ2V0U2NyaXB0UGFyZW50RWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiX2xvYWRKUyIsInJlc29sdmUiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJvbmVycm9yIiwiY2hhcnNldCIsImFwcGVuZENoaWxkIiwiX2dlbmVyYXRlQ2FsbGJhY2tOYW1lIiwicHJlZml4IiwiZmxvb3IiLCJyYW5kb20iLCJSRUNBUFRDSEFfRU5URVJQUklTRV9VUkwiLCJSRUNBUFRDSEFfRU5URVJQUklTRV9WRVJJRklFUl9UWVBFIiwiRkFLRV9UT0tFTiIsIlJlY2FwdGNoYUVudGVycHJpc2VWZXJpZmllciIsImF1dGhFeHRlcm4iLCJfY2FzdEF1dGgiLCJ2ZXJpZnkiLCJhY3Rpb24iLCJyZXRyaWV2ZVNpdGVLZXkiLCJfYWdlbnRSZWNhcHRjaGFDb25maWciLCJfdGVuYW50UmVjYXB0Y2hhQ29uZmlncyIsImNsaWVudFR5cGUiLCJ2ZXJzaW9uIiwidGhlbiIsImNhdGNoIiwicmV0cmlldmVSZWNhcHRjaGFUb2tlbiIsInJlYWR5IiwiZXhlY3V0ZSIsImluamVjdFJlY2FwdGNoYUZpZWxkcyIsImNhcHRjaGFSZXNwIiwidmVyaWZpZXIiLCJjYXB0Y2hhUmVzcG9uc2UiLCJuZXdSZXF1ZXN0IiwiQXV0aE1pZGRsZXdhcmVRdWV1ZSIsInF1ZXVlIiwicHVzaENhbGxiYWNrIiwib25BYm9ydCIsIndyYXBwZWRDYWxsYmFjayIsInJlc3VsdCIsInB1c2giLCJpbmRleCIsInJ1bk1pZGRsZXdhcmUiLCJuZXh0VXNlciIsIm9uQWJvcnRTdGFjayIsImJlZm9yZVN0YXRlQ2FsbGJhY2siLCJyZXZlcnNlIiwib3JpZ2luYWxNZXNzYWdlIiwiQXV0aEltcGwiLCJhcHAiLCJoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIiLCJhcHBDaGVja1NlcnZpY2VQcm92aWRlciIsImVtdWxhdG9yQ29uZmlnIiwib3BlcmF0aW9ucyIsImF1dGhTdGF0ZVN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkVG9rZW5TdWJzY3JpcHRpb24iLCJiZWZvcmVTdGF0ZVF1ZXVlIiwicmVkaXJlY3RVc2VyIiwiaXNQcm9hY3RpdmVSZWZyZXNoRW5hYmxlZCIsIl9pc0luaXRpYWxpemVkIiwiX2RlbGV0ZWQiLCJfaW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiX3BvcHVwUmVkaXJlY3RSZXNvbHZlciIsImxhc3ROb3RpZmllZFVpZCIsInNldHRpbmdzIiwiYXBwVmVyaWZpY2F0aW9uRGlzYWJsZWRGb3JUZXN0aW5nIiwiY2xpZW50VmVyc2lvbiIsInNka0NsaWVudFZlcnNpb24iLCJfaW5pdGlhbGl6ZVdpdGhQZXJzaXN0ZW5jZSIsInBvcHVwUmVkaXJlY3RSZXNvbHZlciIsInBlcnNpc3RlbmNlTWFuYWdlciIsIl9zaG91bGRJbml0UHJvYWN0aXZlbHkiLCJfaW5pdGlhbGl6ZSIsImluaXRpYWxpemVDdXJyZW50VXNlciIsImFzc2VydGVkUGVyc2lzdGVuY2UiLCJfY3VycmVudFVzZXIiLCJfdXBkYXRlQ3VycmVudFVzZXIiLCJwcmV2aW91c2x5U3RvcmVkVXNlciIsImZ1dHVyZUN1cnJlbnRVc2VyIiwibmVlZHNUb2NoZWNrTWlkZGxld2FyZSIsImF1dGhEb21haW4iLCJnZXRPckluaXRSZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsInJlZGlyZWN0VXNlckV2ZW50SWQiLCJzdG9yZWRVc2VyRXZlbnRJZCIsInRyeVJlZGlyZWN0U2lnbkluIiwiZGlyZWN0bHlTZXRDdXJyZW50VXNlciIsIl9vdmVycmlkZVJlZGlyZWN0UmVzdWx0IiwicmVsb2FkQW5kU2V0Q3VycmVudFVzZXJPckNsZWFyIiwicmVkaXJlY3RSZXNvbHZlciIsIl9jb21wbGV0ZVJlZGlyZWN0Rm4iLCJfc2V0UmVkaXJlY3RVc2VyIiwiX2RlbGV0ZSIsInVzZXJFeHRlcm4iLCJza2lwQmVmb3JlU3RhdGVDYWxsYmFja3MiLCJub3RpZnlBdXRoTGlzdGVuZXJzIiwicmVkaXJlY3RQZXJzaXN0ZW5jZU1hbmFnZXIiLCJfZ2V0UmVjYXB0Y2hhQ29uZmlnIiwiX2dldFBlcnNpc3RlbmNlIiwiX3VwZGF0ZUVycm9yTWFwIiwibmV4dE9yT2JzZXJ2ZXIiLCJjb21wbGV0ZWQiLCJyZWdpc3RlclN0YXRlTGlzdGVuZXIiLCJhdXRoU3RhdGVSZWFkeSIsInVuc3Vic2NyaWJlIiwicmVkaXJlY3RNYW5hZ2VyIiwicmVzb2x2ZXIiLCJfcmVkaXJlY3RQZXJzaXN0ZW5jZSIsIl9yZWRpcmVjdFVzZXJGb3JJZCIsImlkIiwibmV4dCIsImN1cnJlbnRVaWQiLCJzdWJzY3JpcHRpb24iLCJjYiIsImFkZE9ic2VydmVyIiwiX2xvZ0ZyYW1ld29yayIsImZyYW1ld29yayIsInNvcnQiLCJfZ2V0RnJhbWV3b3JrcyIsIm9wdGlvbnMiLCJhcHBJZCIsImhlYXJ0YmVhdHNIZWFkZXIiLCJnZXRJbW1lZGlhdGUiLCJvcHRpb25hbCIsImdldEhlYXJ0YmVhdHNIZWFkZXIiLCJhcHBDaGVja1Rva2VuIiwiX2dldEFwcENoZWNrVG9rZW4iLCJhcHBDaGVja1Rva2VuUmVzdWx0Iiwib2JzZXJ2ZXIiLCJjcmVhdGVTdWJzY3JpYmUiLCJkZXBzIiwiX2dldFByb3ZpZGVyIiwiaXNJbml0aWFsaXplZCIsImF1dGgyIiwiaW5pdGlhbE9wdGlvbnMiLCJnZXRPcHRpb25zIiwiZGVlcEVxdWFsIiwiX2luaXRpYWxpemVBdXRoSW5zdGFuY2UiLCJoaWVyYXJjaHkiLCJhdXRoSW50ZXJuYWwiLCJkaXNhYmxlV2FybmluZ3MiLCJleHRyYWN0UHJvdG9jb2wiLCJwb3J0IiwiZXh0cmFjdEhvc3RBbmRQb3J0IiwicG9ydFN0ciIsImZyZWV6ZSIsImVtaXRFbXVsYXRvcldhcm5pbmciLCJwcm90b2NvbEVuZCIsImluZGV4T2YiLCJzdWJzdHIiLCJhdXRob3JpdHkiLCJleGVjIiwiaG9zdEFuZFBvcnQiLCJwb3AiLCJicmFja2V0ZWRJUHY2IiwicGFyc2VQb3J0IiwiYXR0YWNoQmFubmVyIiwic3R5Iiwic3R5bGUiLCJpbm5lclRleHQiLCJwb3NpdGlvbiIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJib3R0b20iLCJsZWZ0IiwibWFyZ2luIiwiekluZGV4IiwidGV4dEFsaWduIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29uc29sZSIsImluZm8iLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpZ25Jbk1ldGhvZCIsIl9nZXRJZFRva2VuUmVzcG9uc2UiLCJfYXV0aCIsIl9saW5rVG9JZFRva2VuIiwiX2lkVG9rZW4iLCJfZ2V0UmVhdXRoZW50aWNhdGlvblJlc29sdmVyIiwicmVzZXRQYXNzd29yZCIsInVwZGF0ZUVtYWlsUGFzc3dvcmQiLCJhcHBseUFjdGlvbkNvZGUkMSIsInNpZ25JbldpdGhQYXNzd29yZCIsInNlbmRPb2JDb2RlIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uJDEiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsJDEiLCJzZW5kU2lnbkluTGlua1RvRW1haWwkMSIsInZlcmlmeUFuZENoYW5nZUVtYWlsIiwic2lnbkluV2l0aEVtYWlsTGluayQxIiwic2lnbkluV2l0aEVtYWlsTGlua0ZvckxpbmtpbmciLCJfZW1haWwiLCJfcGFzc3dvcmQiLCJfdGVuYW50SWQiLCJfZnJvbUVtYWlsQW5kUGFzc3dvcmQiLCJwYXNzd29yZCIsIl9mcm9tRW1haWxBbmRDb2RlIiwib29iQ29kZSIsIm9iaiIsInJldHVyblNlY3VyZVRva2VuIiwicmVxdWVzdFdpdGhSZWNhcHRjaGEiLCJsb2ciLCJzaWduSW5XaXRoSWRwIiwiSURQX1JFUVVFU1RfVVJJJDEiLCJwZW5kaW5nVG9rZW4iLCJfZnJvbVBhcmFtcyIsImNyZWQiLCJub25jZSIsIm9hdXRoVG9rZW4iLCJvYXV0aFRva2VuU2VjcmV0Iiwic2VjcmV0IiwiYnVpbGRSZXF1ZXN0IiwiYXV0b0NyZWF0ZSIsInJlcXVlc3RVcmkiLCJwb3N0Qm9keSIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGUiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIkMSIsImxpbmtXaXRoUGhvbmVOdW1iZXIkMSIsInRlbXBvcmFyeVByb29mIiwiVkVSSUZZX1BIT05FX05VTUJFUl9GT1JfRVhJU1RJTkdfRVJST1JfTUFQXyIsInZlcmlmeVBob25lTnVtYmVyRm9yRXhpc3RpbmciLCJhcGlSZXF1ZXN0Iiwib3BlcmF0aW9uIiwiX2Zyb21WZXJpZmljYXRpb24iLCJ2ZXJpZmljYXRpb25JZCIsInZlcmlmaWNhdGlvbkNvZGUiLCJfZnJvbVRva2VuUmVzcG9uc2UiLCJfbWFrZVZlcmlmaWNhdGlvblJlcXVlc3QiLCJzZXNzaW9uSW5mbyIsInBhcnNlTW9kZSIsIm1vZGUiLCJwYXJzZURlZXBMaW5rIiwibGluayIsInF1ZXJ5c3RyaW5nRGVjb2RlIiwiZXh0cmFjdFF1ZXJ5c3RyaW5nIiwiZG91YmxlRGVlcExpbmsiLCJpT1NEZWVwTGluayIsImlPU0RvdWJsZURlZXBMaW5rIiwiYWN0aW9uTGluayIsInNlYXJjaFBhcmFtcyIsImNvbnRpbnVlVXJsIiwicGFyc2VMaW5rIiwiUFJPVklERVJfSUQiLCJjcmVkZW50aWFsIiwiY3JlZGVudGlhbFdpdGhMaW5rIiwiZW1haWxMaW5rIiwiYWN0aW9uQ29kZVVybCIsIkVNQUlMX1BBU1NXT1JEX1NJR05fSU5fTUVUSE9EIiwiRU1BSUxfTElOS19TSUdOX0lOX01FVEhPRCIsIkZlZGVyYXRlZEF1dGhQcm92aWRlciIsImRlZmF1bHRMYW5ndWFnZUNvZGUiLCJjdXN0b21QYXJhbWV0ZXJzIiwic2V0RGVmYXVsdExhbmd1YWdlIiwic2V0Q3VzdG9tUGFyYW1ldGVycyIsImN1c3RvbU9BdXRoUGFyYW1ldGVycyIsImdldEN1c3RvbVBhcmFtZXRlcnMiLCJCYXNlT0F1dGhQcm92aWRlciIsInNjb3BlcyIsImFkZFNjb3BlIiwic2NvcGUiLCJnZXRTY29wZXMiLCJjcmVkZW50aWFsRnJvbUpTT04iLCJfY3JlZGVudGlhbCIsInJhd05vbmNlIiwiY3JlZGVudGlhbEZyb21SZXN1bHQiLCJ1c2VyQ3JlZGVudGlhbCIsIm9hdXRoQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJjcmVkZW50aWFsRnJvbUVycm9yIiwidG9rZW5SZXNwb25zZSIsIm9hdXRoSWRUb2tlbiIsIm9hdXRoQWNjZXNzVG9rZW4iLCJGQUNFQk9PS19TSUdOX0lOX01FVEhPRCIsImNyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiR09PR0xFX1NJR05fSU5fTUVUSE9EIiwiR0lUSFVCX1NJR05fSU5fTUVUSE9EIiwiSURQX1JFUVVFU1RfVVJJIiwiU0FNTEF1dGhDcmVkZW50aWFsIiwiX2NyZWF0ZSIsIlNBTUxfUFJPVklERVJfUFJFRklYIiwic2FtbENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiVFdJVFRFUl9TSUdOX0lOX01FVEhPRCIsInNpZ25VcCIsIlVzZXJDcmVkZW50aWFsSW1wbCIsIm9wZXJhdGlvblR5cGUiLCJwcm92aWRlcklkRm9yUmVzcG9uc2UiLCJ1c2VyQ3JlZCIsIl9mb3JPcGVyYXRpb24iLCJNdWx0aUZhY3RvckVycm9yIiwic2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJfZnJvbUVycm9yQW5kT3BlcmF0aW9uIiwiX3Byb2Nlc3NDcmVkZW50aWFsU2F2aW5nTWZhQ29udGV4dElmTmVjZXNzYXJ5IiwiaWRUb2tlblByb3ZpZGVyIiwicHJvdmlkZXJEYXRhQXNOYW1lcyIsIlNldCIsInBpZCIsIl9hc3NlcnRMaW5rZWRTdGF0dXMiLCJkZWxldGVQcm92aWRlciIsInByb3ZpZGVyc0xlZnQiLCJwZCIsImhhcyIsIl9saW5rJDEiLCJleHBlY3RlZCIsInByb3ZpZGVySWRzIiwiX3JlYXV0aGVudGljYXRlIiwicGFyc2VkIiwic3ViIiwiX3NpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuJDEiLCJjdXN0b21Ub2tlbiIsIk11bHRpRmFjdG9ySW5mb0ltcGwiLCJmYWN0b3JJZCIsIm1mYUVucm9sbG1lbnRJZCIsImVucm9sbG1lbnRUaW1lIiwiZW5yb2xsZWRBdCIsIl9mcm9tU2VydmVyUmVzcG9uc2UiLCJlbnJvbGxtZW50IiwiUGhvbmVNdWx0aUZhY3RvckluZm9JbXBsIiwiVG90cE11bHRpRmFjdG9ySW5mb0ltcGwiLCJwaG9uZUluZm8iLCJfc2V0QWN0aW9uQ29kZVNldHRpbmdzT25SZXF1ZXN0IiwiYWN0aW9uQ29kZVNldHRpbmdzIiwiZHluYW1pY0xpbmtEb21haW4iLCJjYW5IYW5kbGVDb2RlSW5BcHAiLCJoYW5kbGVDb2RlSW5BcHAiLCJpT1MiLCJidW5kbGVJZCIsImlPU0J1bmRsZUlkIiwiYW5kcm9pZCIsInBhY2thZ2VOYW1lIiwiYW5kcm9pZEluc3RhbGxBcHAiLCJpbnN0YWxsQXBwIiwiYW5kcm9pZE1pbmltdW1WZXJzaW9uQ29kZSIsIm1pbmltdW1WZXJzaW9uIiwiYW5kcm9pZFBhY2thZ2VOYW1lIiwicmVxdWVzdFR5cGUiLCJuZXdQYXNzd29yZCIsImF1dGhNb2R1bGFyIiwibmV3RW1haWwiLCJtZmFJbmZvIiwibXVsdGlGYWN0b3JJbmZvIiwiZGF0YSIsInByZXZpb3VzRW1haWwiLCJzaWduVXBSZXNwb25zZSIsInNldEFjdGlvbkNvZGVTZXR0aW5ncyIsInJlcXVlc3QyIiwiYWN0aW9uQ29kZVNldHRpbmdzMiIsImNyZWF0ZUF1dGhVcmkiLCJjb250aW51ZVVyaSIsImlkZW50aWZpZXIiLCJzaWduaW5NZXRob2RzIiwidXBkYXRlUHJvZmlsZSQxIiwicHJvZmlsZVJlcXVlc3QiLCJwYXNzd29yZFByb3ZpZGVyIiwiZmluZCIsInVwZGF0ZUVtYWlsT3JQYXNzd29yZCIsInByb2ZpbGUiLCJyYXdVc2VySW5mbyIsImlzTmV3VXNlciIsImtpbmQiLCJmaWx0ZXJlZFByb3ZpZGVySWQiLCJHZW5lcmljQWRkaXRpb25hbFVzZXJJbmZvIiwiRmFjZWJvb2tBZGRpdGlvbmFsVXNlckluZm8iLCJHaXRodWJBZGRpdGlvbmFsVXNlckluZm8iLCJHb29nbGVBZGRpdGlvbmFsVXNlckluZm8iLCJUd2l0dGVyQWRkaXRpb25hbFVzZXJJbmZvIiwic2NyZWVuTmFtZSIsIkZlZGVyYXRlZEFkZGl0aW9uYWxVc2VySW5mb1dpdGhVc2VybmFtZSIsInVzZXJuYW1lIiwibG9naW4iLCJNdWx0aUZhY3RvclNlc3Npb25JbXBsIiwiX2Zyb21JZHRva2VuIiwiX2Zyb21NZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm1mYVBlbmRpbmdDcmVkZW50aWFsIiwibXVsdGlGYWN0b3JTZXNzaW9uIiwicGVuZGluZ0NyZWRlbnRpYWwiLCJNdWx0aUZhY3RvclJlc29sdmVySW1wbCIsInNlc3Npb24iLCJoaW50cyIsInNpZ25JblJlc29sdmVyIiwiX2Zyb21FcnJvciIsIm1mYVJlc3BvbnNlIiwiX3Byb2Nlc3MiLCJyZXNvbHZlU2lnbkluIiwiYXNzZXJ0aW9uRXh0ZXJuIiwiZXJyb3JJbnRlcm5hbCIsInN0YXJ0RW5yb2xsUGhvbmVNZmEiLCJmaW5hbGl6ZUVucm9sbFBob25lTWZhIiwic3RhcnRFbnJvbGxUb3RwTWZhIiwiZmluYWxpemVFbnJvbGxUb3RwTWZhIiwid2l0aGRyYXdNZmEiLCJNdWx0aUZhY3RvclVzZXJJbXBsIiwiZW5yb2xsZWRGYWN0b3JzIiwiX2Zyb21Vc2VyIiwiZ2V0U2Vzc2lvbiIsImVucm9sbCIsImZpbmFsaXplTWZhUmVzcG9uc2UiLCJ1bmVucm9sbCIsImluZm9PclVpZCIsIm11bHRpRmFjdG9yVXNlckNhY2hlIiwiV2Vha01hcCIsInVzZXJNb2R1bGFyIiwiU1RPUkFHRV9BVkFJTEFCTEVfS0VZIiwiQnJvd3NlclBlcnNpc3RlbmNlQ2xhc3MiLCJzdG9yYWdlUmV0cmlldmVyIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwiX2lmcmFtZUNhbm5vdFN5bmNXZWJTdG9yYWdlIiwiX1BPTExJTkdfSU5URVJWQUxfTVMkMSIsIklFMTBfTE9DQUxfU1RPUkFHRV9TWU5DX0RFTEFZIiwiQnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJldmVudCIsInBvbGwiLCJvblN0b3JhZ2VFdmVudCIsImxpc3RlbmVycyIsImxvY2FsQ2FjaGUiLCJwb2xsVGltZXIiLCJzYWZhcmlMb2NhbFN0b3JhZ2VOb3RTeW5jZWQiLCJmYWxsYmFja1RvUG9sbGluZyIsImZvckFsbENoYW5nZWRLZXlzIiwia2V5cyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJrZXkyIiwiX29sZFZhbHVlIiwibm90aWZ5TGlzdGVuZXJzIiwiZGV0YWNoTGlzdGVuZXIiLCJzdG9wUG9sbGluZyIsInN0b3JlZFZhbHVlMiIsInRyaWdnZXJMaXN0ZW5lcnMiLCJzdG9yZWRWYWx1ZSIsImxpc3RlbmVyIiwiZnJvbSIsInN0YXJ0UG9sbGluZyIsInNldEludGVydmFsIiwiU3RvcmFnZUV2ZW50IiwiY2xlYXJJbnRlcnZhbCIsImF0dGFjaExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpemUiLCJCcm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwic2Vzc2lvblN0b3JhZ2UiLCJfYWxsU2V0dGxlZCIsInByb21pc2VzIiwiZnVsZmlsbGVkIiwicmVhc29uIiwiUmVjZWl2ZXIiLCJldmVudFRhcmdldCIsImhhbmRsZXJzTWFwIiwiaGFuZGxlRXZlbnQiLCJleGlzdGluZ0luc3RhbmNlIiwicmVjZWl2ZXJzIiwicmVjZWl2ZXIiLCJpc0xpc3RlbmluZ3RvIiwibmV3SW5zdGFuY2UiLCJtZXNzYWdlRXZlbnQiLCJldmVudElkIiwiZXZlbnRUeXBlIiwiaGFuZGxlcnMiLCJwb3J0cyIsInBvc3RNZXNzYWdlIiwic3RhdHVzIiwiaGFuZGxlciIsIm9yaWdpbiIsIl9zdWJzY3JpYmUiLCJldmVudEhhbmRsZXIiLCJfdW5zdWJzY3JpYmUiLCJfZ2VuZXJhdGVFdmVudElkIiwiZGlnaXRzIiwiaSIsIlNlbmRlciIsInRhcmdldCIsInJlbW92ZU1lc3NhZ2VIYW5kbGVyIiwibWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsIm9uTWVzc2FnZSIsImNsb3NlIiwiX3NlbmQiLCJ0aW1lb3V0IiwiTWVzc2FnZUNoYW5uZWwiLCJjb21wbGV0aW9uVGltZXIiLCJzdGFydCIsImFja1RpbWVyIiwicG9ydDIiLCJmaW5hbGx5IiwiX3dpbmRvdyIsIl9zZXRXaW5kb3dMb2NhdGlvbiIsIl9pc1dvcmtlciIsIl9nZXRBY3RpdmVTZXJ2aWNlV29ya2VyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdHJhdGlvbiIsImFjdGl2ZSIsIl9nZXRTZXJ2aWNlV29ya2VyQ29udHJvbGxlciIsImNvbnRyb2xsZXIiLCJfZ2V0V29ya2VyR2xvYmFsU2NvcGUiLCJEQl9OQU1FIiwiREJfVkVSU0lPTiIsIkRCX09CSkVDVFNUT1JFX05BTUUiLCJEQl9EQVRBX0tFWVBBVEgiLCJEQlByb21pc2UiLCJ0b1Byb21pc2UiLCJnZXRPYmplY3RTdG9yZSIsImRiIiwiaXNSZWFkV3JpdGUiLCJ0cmFuc2FjdGlvbiIsIm9iamVjdFN0b3JlIiwiX2RlbGV0ZURhdGFiYXNlIiwiaW5kZXhlZERCIiwiZGVsZXRlRGF0YWJhc2UiLCJfb3BlbkRhdGFiYXNlIiwib3BlbiIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsIl9wdXRPYmplY3QiLCJwdXQiLCJnZXRPYmplY3QiLCJfZGVsZXRlT2JqZWN0IiwiX1BPTExJTkdfSU5URVJWQUxfTVMiLCJfVFJBTlNBQ1RJT05fUkVUUllfQ09VTlQiLCJJbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwicGVuZGluZ1dyaXRlcyIsInNlbmRlciIsInNlcnZpY2VXb3JrZXJSZWNlaXZlckF2YWlsYWJsZSIsImFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJfd29ya2VySW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiaW5pdGlhbGl6ZVNlcnZpY2VXb3JrZXJNZXNzYWdpbmciLCJfb3BlbkRiIiwiX3dpdGhSZXRyaWVzIiwib3AiLCJudW1BdHRlbXB0cyIsImluaXRpYWxpemVSZWNlaXZlciIsImluaXRpYWxpemVTZW5kZXIiLCJfb3JpZ2luIiwiX3BvbGwiLCJrZXlQcm9jZXNzZWQiLCJfZGF0YSIsInJlc3VsdHMiLCJub3RpZnlTZXJ2aWNlV29ya2VyIiwiX3dpdGhQZW5kaW5nV3JpdGUiLCJ3cml0ZSIsImdldEFsbFJlcXVlc3QiLCJnZXRBbGwiLCJrZXlzSW5SZXN1bHQiLCJmYmFzZV9rZXkiLCJsb2NhbEtleSIsInN0YXJ0U2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblBob25lTWZhIiwiZmluYWxpemVTaWduSW5Ub3RwTWZhIiwiX1NPTFZFX1RJTUVfTVMiLCJfRVhQSVJBVElPTl9USU1FX01TIiwiX1dJREdFVF9JRF9TVEFSVCIsIk1vY2tSZUNhcHRjaGEiLCJjb3VudGVyIiwiX3dpZGdldHMiLCJyZW5kZXIiLCJjb250YWluZXIiLCJwYXJhbWV0ZXJzIiwiTW9ja1dpZGdldCIsInJlc2V0Iiwib3B0V2lkZ2V0SWQiLCJjb250YWluZXJPcklkIiwiZGVsZXRlZCIsInJlc3BvbnNlVG9rZW4iLCJjbGlja0hhbmRsZXIiLCJnZXRFbGVtZW50QnlJZCIsImlzVmlzaWJsZSIsImNoZWNrSWZEZWxldGVkIiwiZ2VuZXJhdGVSYW5kb21BbHBoYU51bWVyaWNTdHJpbmciLCJleHBpcmVkQ2FsbGJhY2siLCJsZW4iLCJjaGFycyIsImFsbG93ZWRDaGFycyIsImNoYXJBdCIsIl9KU0xPQURfQ0FMTEJBQ0siLCJORVRXT1JLX1RJTUVPVVRfREVMQVkiLCJSRUNBUFRDSEFfQkFTRSIsIlJlQ2FwdGNoYUxvYWRlckltcGwiLCJob3N0TGFuZ3VhZ2UiLCJsaWJyYXJ5U2VwYXJhdGVseUxvYWRlZCIsImxvYWQiLCJobCIsImlzSG9zdExhbmd1YWdlVmFsaWQiLCJzaG91bGRSZXNvbHZlSW1tZWRpYXRlbHkiLCJyZWNhcHRjaGEiLCJ3aWRnZXRJZCIsImNsZWFyZWRPbmVJbnN0YW5jZSIsIk1vY2tSZUNhcHRjaGFMb2FkZXJJbXBsIiwiUkVDQVBUQ0hBX1ZFUklGSUVSX1RZUEUiLCJERUZBVUxUX1BBUkFNUyIsInRoZW1lIiwiZGVzdHJveWVkIiwidG9rZW5DaGFuZ2VMaXN0ZW5lcnMiLCJyZW5kZXJQcm9taXNlIiwiaXNJbnZpc2libGUiLCJtYWtlVG9rZW5DYWxsYmFjayIsIl9yZWNhcHRjaGFMb2FkZXIiLCJ2YWxpZGF0ZVN0YXJ0aW5nU3RhdGUiLCJhc3NlcnROb3REZXN0cm95ZWQiLCJnZXRBc3NlcnRlZFJlY2FwdGNoYSIsInRva2VuQ2hhbmdlIiwibWFrZVJlbmRlclByb21pc2UiLCJfcmVzZXQiLCJjbGVhciIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZUNoaWxkIiwic2l0ZWtleSIsImhhc0NoaWxkTm9kZXMiLCJleGlzdGluZyIsImdsb2JhbEZ1bmMiLCJpbml0IiwiZ3VhcmFudGVlZEVtcHR5IiwiZG9tUmVhZHkiLCJDb25maXJtYXRpb25SZXN1bHRJbXBsIiwib25Db25maXJtYXRpb24iLCJjb25maXJtIiwiYXV0aENyZWRlbnRpYWwiLCJhcHBWZXJpZmllciIsIl92ZXJpZnlQaG9uZU51bWJlciIsInJlY2FwdGNoYVRva2VuIiwicGhvbmVJbmZvT3B0aW9ucyIsInBob25lRW5yb2xsbWVudEluZm8iLCJwaG9uZVNlc3Npb25JbmZvIiwibXVsdGlGYWN0b3JIaW50IiwibXVsdGlGYWN0b3JVaWQiLCJwaG9uZVNpZ25JbkluZm8iLCJwaG9uZVJlc3BvbnNlSW5mbyIsInZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVPcHRpb25zIiwiYXBwbGljYXRpb25WZXJpZmllciIsIlBIT05FX1NJR05fSU5fTUVUSE9EIiwiX3dpdGhEZWZhdWx0UmVzb2x2ZXIiLCJyZXNvbHZlck92ZXJyaWRlIiwiSWRwQ3JlZGVudGlhbCIsIl9idWlsZElkcFJlcXVlc3QiLCJzZXNzaW9uSWQiLCJyZXR1cm5JZHBDcmVkZW50aWFsIiwiX3NpZ25JbiIsIl9yZWF1dGgiLCJfbGluayIsIkFic3RyYWN0UG9wdXBSZWRpcmVjdE9wZXJhdGlvbiIsInBlbmRpbmdQcm9taXNlIiwiZXZlbnRNYW5hZ2VyIiwib25FeGVjdXRpb24iLCJyZWdpc3RlckNvbnN1bWVyIiwib25BdXRoRXZlbnQiLCJ1cmxSZXNwb25zZSIsImdldElkcFRhc2siLCJvbkVycm9yIiwidW5yZWdpc3RlckFuZENsZWFuVXAiLCJ1bnJlZ2lzdGVyQ29uc3VtZXIiLCJjbGVhblVwIiwiX1BPTExfV0lORE9XX0NMT1NFX1RJTUVPVVQiLCJyZXNvbHZlckludGVybmFsIiwiUG9wdXBPcGVyYXRpb24iLCJleGVjdXRlTm90TnVsbCIsImF1dGhXaW5kb3ciLCJwb2xsSWQiLCJjdXJyZW50UG9wdXBBY3Rpb24iLCJjYW5jZWwiLCJfb3BlblBvcHVwIiwiYXNzb2NpYXRlZEV2ZW50IiwiX29yaWdpblZhbGlkYXRpb24iLCJfaXNJZnJhbWVXZWJTdG9yYWdlU3VwcG9ydGVkIiwiaXNTdXBwb3J0ZWQiLCJwb2xsVXNlckNhbmNlbGxhdGlvbiIsImNsb3NlZCIsIlBFTkRJTkdfUkVESVJFQ1RfS0VZIiwicmVkaXJlY3RPdXRjb21lTWFwIiwiUmVkaXJlY3RBY3Rpb24iLCJyZWFkeU91dGNvbWUiLCJoYXNQZW5kaW5nUmVkaXJlY3QiLCJfZ2V0QW5kQ2xlYXJQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJwZW5kaW5nUmVkaXJlY3RLZXkiLCJyZXNvbHZlclBlcnNpc3RlbmNlIiwiX3NldFBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsIl9jbGVhclJlZGlyZWN0T3V0Y29tZXMiLCJfc2lnbkluV2l0aFJlZGlyZWN0IiwiX29wZW5SZWRpcmVjdCIsIl9yZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInByZXBhcmVVc2VyRm9yUmVkaXJlY3QiLCJfbGlua1dpdGhSZWRpcmVjdCIsIl9nZXRSZWRpcmVjdFJlc3VsdCIsInJlc29sdmVyRXh0ZXJuIiwiRVZFTlRfRFVQTElDQVRJT05fQ0FDSEVfRFVSQVRJT05fTVMiLCJBdXRoRXZlbnRNYW5hZ2VyIiwiY2FjaGVkRXZlbnRVaWRzIiwiY29uc3VtZXJzIiwicXVldWVkUmVkaXJlY3RFdmVudCIsImhhc0hhbmRsZWRQb3RlbnRpYWxSZWRpcmVjdCIsImxhc3RQcm9jZXNzZWRFdmVudFRpbWUiLCJhdXRoRXZlbnRDb25zdW1lciIsImlzRXZlbnRGb3JDb25zdW1lciIsInNlbmRUb0NvbnN1bWVyIiwic2F2ZUV2ZW50VG9DYWNoZSIsIm9uRXZlbnQiLCJoYXNFdmVudEJlZW5IYW5kbGVkIiwiaGFuZGxlZCIsImNvbnN1bWVyIiwiaXNSZWRpcmVjdEV2ZW50IiwiaXNOdWxsUmVkaXJlY3RFdmVudCIsImV2ZW50SWRNYXRjaGVzIiwiZXZlbnRVaWQiLCJ2IiwiX2dldFByb2plY3RDb25maWciLCJJUF9BRERSRVNTX1JFR0VYIiwiSFRUUF9SRUdFWCIsIl92YWxpZGF0ZU9yaWdpbiIsImF1dGhvcml6ZWREb21haW5zIiwiZG9tYWluIiwibWF0Y2hEb21haW4iLCJjdXJyZW50VXJsIiwiaG9zdG5hbWUiLCJVUkwiLCJjZVVybCIsImVzY2FwZWREb21haW5QYXR0ZXJuIiwiUmVnRXhwIiwiTkVUV09SS19USU1FT1VUIiwicmVzZXRVbmxvYWRlZEdhcGlNb2R1bGVzIiwiYmVhY29uIiwiX19fanNsIiwiSCIsImhpbnQiLCJyIiwiTCIsIkNQIiwibG9hZEdhcGkiLCJsb2FkR2FwaUlmcmFtZSIsImdhcGkiLCJpZnJhbWVzIiwiZ2V0Q29udGV4dCIsIm9udGltZW91dCIsIklmcmFtZSIsImNiTmFtZSIsImNhY2hlZEdBcGlMb2FkZXIiLCJfbG9hZEdhcGkiLCJQSU5HX1RJTUVPVVQiLCJJRlJBTUVfUEFUSCIsIkVNVUxBVEVEX0lGUkFNRV9QQVRIIiwiSUZSQU1FX0FUVFJJQlVURVMiLCJoZWlnaHQiLCJ0YWJpbmRleCIsIkVJRF9GUk9NX0FQSUhPU1QiLCJnZXRJZnJhbWVVcmwiLCJlaWQiLCJmdyIsIl9vcGVuSWZyYW1lIiwiY29udGV4dCIsImdhcGkyIiwid2hlcmUiLCJtZXNzYWdlSGFuZGxlcnNGaWx0ZXIiLCJDUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVIiLCJhdHRyaWJ1dGVzIiwiZG9udGNsZWFyIiwiaWZyYW1lIiwicmVzdHlsZSIsInNldEhpZGVPbkxlYXZlIiwibmV0d29ya0Vycm9yIiwibmV0d29ya0Vycm9yVGltZXIiLCJjbGVhclRpbWVyQW5kUmVzb2x2ZSIsInBpbmciLCJCQVNFX1BPUFVQX09QVElPTlMiLCJyZXNpemFibGUiLCJzdGF0dXNiYXIiLCJ0b29sYmFyIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiVEFSR0VUX0JMQU5LIiwiRklSRUZPWF9FTVBUWV9VUkwiLCJBdXRoUG9wdXAiLCJ3aW5kb3cyIiwiX29wZW4iLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImF2YWlsV2lkdGgiLCJzY3JvbGxiYXJzIiwib3B0aW9uc1N0cmluZyIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2N1bSIsIm9wZW5Bc05ld1dpbmRvd0lPUyIsIm5ld1dpbiIsImZvY3VzIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIldJREdFVF9QQVRIIiwiRU1VTEFUT1JfV0lER0VUX1BBVEgiLCJGSVJFQkFTRV9BUFBfQ0hFQ0tfRlJBR01FTlRfSUQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfZ2V0UmVkaXJlY3RVcmwiLCJhdXRoVHlwZSIsInJlZGlyZWN0VXJsIiwiYWRkaXRpb25hbFBhcmFtcyIsImlzRW1wdHkiLCJ0aWQiLCJwYXJhbXNEaWN0IiwiYXBwQ2hlY2tUb2tlbkZyYWdtZW50IiwiZ2V0SGFuZGxlckJhc2UiLCJXRUJfU1RPUkFHRV9TVVBQT1JUX0tFWSIsIkJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJldmVudE1hbmFnZXJzIiwib3JpZ2luVmFsaWRhdGlvblByb21pc2VzIiwicHJvbWlzZTIiLCJpbml0QW5kR2V0TWFuYWdlciIsInJlZ2lzdGVyIiwiaWZyYW1lRXZlbnQiLCJhdXRoRXZlbnQiLCJzZW5kIiwiTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2ZpbmFsaXplRW5yb2xsIiwiX2ZpbmFsaXplU2lnbkluIiwiUGhvbmVNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbUNyZWRlbnRpYWwiLCJwaG9uZVZlcmlmaWNhdGlvbkluZm8iLCJGQUNUT1JfSUQiLCJhc3NlcnRpb25Gb3JFbnJvbGxtZW50Iiwib25lVGltZVBhc3N3b3JkIiwiVG90cE11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tU2VjcmV0IiwiYXNzZXJ0aW9uRm9yU2lnbkluIiwiZW5yb2xsbWVudElkIiwiX2Zyb21FbnJvbGxtZW50SWQiLCJnZW5lcmF0ZVNlY3JldCIsIm1mYVNlc3Npb24iLCJ0b3RwRW5yb2xsbWVudEluZm8iLCJfZnJvbVN0YXJ0VG90cE1mYUVucm9sbG1lbnRSZXNwb25zZSIsIm90cCIsInRvdHBWZXJpZmljYXRpb25JbmZvIiwiX21ha2VUb3RwVmVyaWZpY2F0aW9uSW5mbyIsInNlY3JldEtleSIsImhhc2hpbmdBbGdvcml0aG0iLCJjb2RlTGVuZ3RoIiwiY29kZUludGVydmFsU2Vjb25kcyIsImVucm9sbG1lbnRDb21wbGV0aW9uRGVhZGxpbmUiLCJ0b3RwU2Vzc2lvbkluZm8iLCJzaGFyZWRTZWNyZXRLZXkiLCJ2ZXJpZmljYXRpb25Db2RlTGVuZ3RoIiwicGVyaW9kU2VjIiwiZmluYWxpemVFbnJvbGxtZW50VGltZSIsImdlbmVyYXRlUXJDb2RlVXJsIiwiYWNjb3VudE5hbWUiLCJpc3N1ZXIiLCJ1c2VEZWZhdWx0cyIsIl9pc0VtcHR5U3RyaW5nIiwiaW5wdXQiLCJBdXRoSW50ZXJvcCIsImludGVybmFsTGlzdGVuZXJzIiwiZ2V0VWlkIiwiYXNzZXJ0QXV0aENvbmZpZ3VyZWQiLCJhZGRBdXRoVG9rZW5MaXN0ZW5lciIsInVwZGF0ZVByb2FjdGl2ZVJlZnJlc2giLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsImdldFZlcnNpb25Gb3JQbGF0Zm9ybSIsInJlZ2lzdGVyQXV0aCIsIl9yZWdpc3RlckNvbXBvbmVudCIsImltcG9ydF9jb21wb25lbnQiLCJDb21wb25lbnQiLCJnZXRQcm92aWRlciIsImF1dGhJbnN0YW5jZSIsInNldEluc3RhbnRpYXRpb25Nb2RlIiwic2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2siLCJfaW5zdGFuY2VJZGVudGlmaWVyIiwiX2luc3RhbmNlIiwiYXV0aEludGVybmFsUHJvdmlkZXIiLCJyZWdpc3RlclZlcnNpb24iLCJERUZBVUxUX0lEX1RPS0VOX01BWF9BR0UiLCJhdXRoSWRUb2tlbk1heEFnZSIsImdldEV4cGVyaW1lbnRhbFNldHRpbmciLCJsYXN0UG9zdGVkSWRUb2tlbiIsIm1pbnRDb29raWVGYWN0b3J5IiwiaWRUb2tlblJlc3VsdCIsImlkVG9rZW5BZ2UiLCJnZXRBcHAiLCJhdXRoVG9rZW5TeW5jVXJsIiwibWludENvb2tpZSIsImF1dGhFbXVsYXRvckhvc3QiLCJnZXREZWZhdWx0RW11bGF0b3JIb3N0IiwiaW1wb3J0X3V0aWwyIiwicmVxdWlyZSIsImltcG9ydF9hcHAyIiwiaW1wb3J0X3RzbGliMiIsImltcG9ydF9sb2dnZXIyIiwiaW1wb3J0X2NvbXBvbmVudDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUMsMENBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMs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