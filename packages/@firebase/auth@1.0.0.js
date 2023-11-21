System.register(["@firebase/util@1.9.3","@firebase/component@0.6.4","@firebase/logger@0.4.0","idb@7.1.1","@firebase/app@0.9.14","tslib@2.6.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.9.3"],["@firebase/component","0.6.4"],["@firebase/logger","0.4.0"],["idb","7.1.1"],["@firebase/app","0.9.14"],["tslib","2.6.0"],["@firebase/auth","1.0.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.9.3', dep), dep => dependencies.set('@firebase/component@0.6.4', dep), dep => dependencies.set('@firebase/logger@0.4.0', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.9.14', dep), dep => dependencies.set('tslib@2.6.0', dep)],
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

// .beyond/uimport/temp/@firebase/auth.1.0.0.js
var auth_1_0_0_exports = {};
__export(auth_1_0_0_exports, {
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
module.exports = __toCommonJS(auth_1_0_0_exports);

// node_modules/@firebase/auth/dist/esm2017/index-59cc561a.js
var import_util = require("@firebase/util@1.9.3");
var import_app = require("@firebase/app@0.9.14");
var import_tslib = require("tslib@2.6.0");
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
var version = "1.0.0";
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
var import_app2 = require("@firebase/app@0.9.14");
var import_tslib2 = require("tslib@2.6.0");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hdXRoLjEuMC4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tb2RlbC9lbnVtX21hcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYXNzZXJ0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9jYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9uYXZpZ2F0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9kZWxheS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZmV0Y2hfcHJvdmlkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9hY2NvdW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2lkX3Rva2VuX3Jlc3VsdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2ludmFsaWRhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Byb2FjdGl2ZV9yZWZyZXNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9tZXRhZGF0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlbG9hZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdG9rZW5fbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2luc3RhbnRpYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbl9tZW1vcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvcGVyc2lzdGVuY2VfdXNlcl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9yZWNhcHRjaGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9sb2FkX2pzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfZW50ZXJwcmlzZV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL21pZGRsZXdhcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9pbml0aWFsaXplLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvYXV0aF9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zbXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYWN0aW9uX2NvZGVfdXJsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmVkZXJhdGVkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmFjZWJvb2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dvb2dsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ2l0aHViLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3R3aXR0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zaWduX3VwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9jcmVkZW50aWFsX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hbm9ueW1vdXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfZXJyb3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9wcm92aWRlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9saW5rX3VubGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlYXV0aGVudGljYXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWN0aW9uX2NvZGVfc2V0dGluZ3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3JlYXRlX2F1dGhfdXJpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvcHJvZmlsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FjY291bnRfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FkZGl0aW9uYWxfdXNlcl9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Nlc3Npb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3VzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9sb2NhbF9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL3Nlc3Npb25fc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9wcm9taXNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3JlY2VpdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZXZlbnRfaWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvc2VuZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2F1dGhfd2luZG93LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3V0aWwvd29ya2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2luZGV4ZWRfZGIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9tb2NrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbG9hZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfdmVyaWZpZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wcm92aWRlcnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fic3RyYWN0X3BvcHVwX3JlZGlyZWN0X29wZXJhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfZXZlbnRfbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL3Byb2plY3RfY29uZmlnL2dldF9wcm9qZWN0X2NvbmZpZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZhbGlkYXRlX29yaWdpbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pZnJhbWUvZ2FwaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pZnJhbWUvaWZyYW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3V0aWwvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9oYW5kbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BvcHVwX3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Fzc2VydGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZmEvYXNzZXJ0aW9ucy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL2Fzc2VydGlvbnMvdG90cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2ZpcmViYXNlX2ludGVybmFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvcmVnaXN0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvZGlzdC9lc20yMDE3L2luZGV4LmpzIl0sIm5hbWVzIjpbImF1dGhfMV8wXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQWN0aW9uQ29kZU9wZXJhdGlvbiIsIkFjdGlvbkNvZGVVUkwiLCJBdXRoQ3JlZGVudGlhbCIsIkF1dGhFcnJvckNvZGVzIiwiQVVUSF9FUlJPUl9DT0RFU19NQVBfRE9fTk9UX1VTRV9JTlRFUk5BTExZIiwiRW1haWxBdXRoQ3JlZGVudGlhbCIsIkVtYWlsQXV0aFByb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJGYWN0b3JJZCIsIkdpdGh1YkF1dGhQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsIk9BdXRoQ3JlZGVudGlhbCIsIk9BdXRoUHJvdmlkZXIiLCJPcGVyYXRpb25UeXBlIiwiUGhvbmVBdXRoQ3JlZGVudGlhbCIsIlBob25lQXV0aFByb3ZpZGVyIiwiUGhvbmVNdWx0aUZhY3RvckdlbmVyYXRvciIsIlByb3ZpZGVySWQiLCJSZWNhcHRjaGFWZXJpZmllciIsIlNBTUxBdXRoUHJvdmlkZXIiLCJTaWduSW5NZXRob2QiLCJUb3RwTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJUb3RwU2VjcmV0IiwiVHdpdHRlckF1dGhQcm92aWRlciIsImFwcGx5QWN0aW9uQ29kZSIsImJlZm9yZUF1dGhTdGF0ZUNoYW5nZWQiLCJicm93c2VyTG9jYWxQZXJzaXN0ZW5jZSIsImJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJicm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwiY2hlY2tBY3Rpb25Db2RlIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJjb25uZWN0QXV0aEVtdWxhdG9yIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZGVidWdFcnJvck1hcCIsImRlbGV0ZVVzZXIiLCJmZXRjaFNpZ25Jbk1ldGhvZHNGb3JFbWFpbCIsImdldEFkZGl0aW9uYWxVc2VySW5mbyIsImdldEF1dGgiLCJnZXRJZFRva2VuIiwiZ2V0SWRUb2tlblJlc3VsdCIsImdldE11bHRpRmFjdG9yUmVzb2x2ZXIiLCJnZXRSZWRpcmVjdFJlc3VsdCIsImluTWVtb3J5UGVyc2lzdGVuY2UiLCJpbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwiaW5pdGlhbGl6ZUF1dGgiLCJpbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiaXNTaWduSW5XaXRoRW1haWxMaW5rIiwibGlua1dpdGhDcmVkZW50aWFsIiwibGlua1dpdGhQaG9uZU51bWJlciIsImxpbmtXaXRoUG9wdXAiLCJsaW5rV2l0aFJlZGlyZWN0IiwibXVsdGlGYWN0b3IiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJvbklkVG9rZW5DaGFuZ2VkIiwicGFyc2VBY3Rpb25Db2RlVVJMIiwicHJvZEVycm9yTWFwIiwicmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbCIsInJlYXV0aGVudGljYXRlV2l0aFBob25lTnVtYmVyIiwicmVhdXRoZW50aWNhdGVXaXRoUG9wdXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInJlbG9hZCIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJzZXRQZXJzaXN0ZW5jZSIsInNpZ25JbkFub255bW91c2x5Iiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbExpbmsiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJzaWduT3V0IiwidW5saW5rIiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGhvbmVOdW1iZXIiLCJ1cGRhdGVQcm9maWxlIiwidXNlRGV2aWNlTGFuZ3VhZ2UiLCJ2ZXJpZnlCZWZvcmVVcGRhdGVFbWFpbCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlBIT05FIiwiVE9UUCIsIkZBQ0VCT09LIiwiR0lUSFVCIiwiR09PR0xFIiwiUEFTU1dPUkQiLCJUV0lUVEVSIiwiRU1BSUxfTElOSyIsIkVNQUlMX1BBU1NXT1JEIiwiTElOSyIsIlJFQVVUSEVOVElDQVRFIiwiU0lHTl9JTiIsIkVNQUlMX1NJR05JTiIsIlBBU1NXT1JEX1JFU0VUIiwiUkVDT1ZFUl9FTUFJTCIsIlJFVkVSVF9TRUNPTkRfRkFDVE9SX0FERElUSU9OIiwiVkVSSUZZX0FORF9DSEFOR0VfRU1BSUwiLCJWRVJJRllfRU1BSUwiLCJfZGVidWdFcnJvck1hcCIsIl9wcm9kRXJyb3JNYXAiLCJfREVGQVVMVF9BVVRIX0VSUk9SX0ZBQ1RPUlkiLCJpbXBvcnRfdXRpbCIsIkVycm9yRmFjdG9yeSIsIkFETUlOX09OTFlfT1BFUkFUSU9OIiwiQVJHVU1FTlRfRVJST1IiLCJBUFBfTk9UX0FVVEhPUklaRUQiLCJBUFBfTk9UX0lOU1RBTExFRCIsIkNBUFRDSEFfQ0hFQ0tfRkFJTEVEIiwiQ09ERV9FWFBJUkVEIiwiQ09SRE9WQV9OT1RfUkVBRFkiLCJDT1JTX1VOU1VQUE9SVEVEIiwiQ1JFREVOVElBTF9BTFJFQURZX0lOX1VTRSIsIkNSRURFTlRJQUxfTUlTTUFUQ0giLCJDUkVERU5USUFMX1RPT19PTERfTE9HSU5fQUdBSU4iLCJERVBFTkRFTlRfU0RLX0lOSVRfQkVGT1JFX0FVVEgiLCJEWU5BTUlDX0xJTktfTk9UX0FDVElWQVRFRCIsIkVNQUlMX0NIQU5HRV9ORUVEU19WRVJJRklDQVRJT04iLCJFTUFJTF9FWElTVFMiLCJFTVVMQVRPUl9DT05GSUdfRkFJTEVEIiwiRVhQSVJFRF9PT0JfQ09ERSIsIkVYUElSRURfUE9QVVBfUkVRVUVTVCIsIklOVEVSTkFMX0VSUk9SIiwiSU5WQUxJRF9BUElfS0VZIiwiSU5WQUxJRF9BUFBfQ1JFREVOVElBTCIsIklOVkFMSURfQVBQX0lEIiwiSU5WQUxJRF9BVVRIIiwiSU5WQUxJRF9BVVRIX0VWRU5UIiwiSU5WQUxJRF9DRVJUX0hBU0giLCJJTlZBTElEX0NPREUiLCJJTlZBTElEX0NPTlRJTlVFX1VSSSIsIklOVkFMSURfQ09SRE9WQV9DT05GSUdVUkFUSU9OIiwiSU5WQUxJRF9DVVNUT01fVE9LRU4iLCJJTlZBTElEX0RZTkFNSUNfTElOS19ET01BSU4iLCJJTlZBTElEX0VNQUlMIiwiSU5WQUxJRF9FTVVMQVRPUl9TQ0hFTUUiLCJJTlZBTElEX0lEUF9SRVNQT05TRSIsIklOVkFMSURfTUVTU0FHRV9QQVlMT0FEIiwiSU5WQUxJRF9NRkFfU0VTU0lPTiIsIklOVkFMSURfT0FVVEhfQ0xJRU5UX0lEIiwiSU5WQUxJRF9PQVVUSF9QUk9WSURFUiIsIklOVkFMSURfT09CX0NPREUiLCJJTlZBTElEX09SSUdJTiIsIklOVkFMSURfUEFTU1dPUkQiLCJJTlZBTElEX1BFUlNJU1RFTkNFIiwiSU5WQUxJRF9QSE9ORV9OVU1CRVIiLCJJTlZBTElEX1BST1ZJREVSX0lEIiwiSU5WQUxJRF9SRUNJUElFTlRfRU1BSUwiLCJJTlZBTElEX1NFTkRFUiIsIklOVkFMSURfU0VTU0lPTl9JTkZPIiwiSU5WQUxJRF9URU5BTlRfSUQiLCJNRkFfSU5GT19OT1RfRk9VTkQiLCJNRkFfUkVRVUlSRUQiLCJNSVNTSU5HX0FORFJPSURfUEFDS0FHRV9OQU1FIiwiTUlTU0lOR19BUFBfQ1JFREVOVElBTCIsIk1JU1NJTkdfQVVUSF9ET01BSU4iLCJNSVNTSU5HX0NPREUiLCJNSVNTSU5HX0NPTlRJTlVFX1VSSSIsIk1JU1NJTkdfSUZSQU1FX1NUQVJUIiwiTUlTU0lOR19JT1NfQlVORExFX0lEIiwiTUlTU0lOR19PUl9JTlZBTElEX05PTkNFIiwiTUlTU0lOR19NRkFfSU5GTyIsIk1JU1NJTkdfTUZBX1NFU1NJT04iLCJNSVNTSU5HX1BIT05FX05VTUJFUiIsIk1JU1NJTkdfU0VTU0lPTl9JTkZPIiwiTU9EVUxFX0RFU1RST1lFRCIsIk5FRURfQ09ORklSTUFUSU9OIiwiTkVUV09SS19SRVFVRVNUX0ZBSUxFRCIsIk5VTExfVVNFUiIsIk5PX0FVVEhfRVZFTlQiLCJOT19TVUNIX1BST1ZJREVSIiwiT1BFUkFUSU9OX05PVF9BTExPV0VEIiwiT1BFUkFUSU9OX05PVF9TVVBQT1JURUQiLCJQT1BVUF9CTE9DS0VEIiwiUE9QVVBfQ0xPU0VEX0JZX1VTRVIiLCJQUk9WSURFUl9BTFJFQURZX0xJTktFRCIsIlFVT1RBX0VYQ0VFREVEIiwiUkVESVJFQ1RfQ0FOQ0VMTEVEX0JZX1VTRVIiLCJSRURJUkVDVF9PUEVSQVRJT05fUEVORElORyIsIlJFSkVDVEVEX0NSRURFTlRJQUwiLCJTRUNPTkRfRkFDVE9SX0FMUkVBRFlfRU5ST0xMRUQiLCJTRUNPTkRfRkFDVE9SX0xJTUlUX0VYQ0VFREVEIiwiVEVOQU5UX0lEX01JU01BVENIIiwiVElNRU9VVCIsIlRPS0VOX0VYUElSRUQiLCJUT09fTUFOWV9BVFRFTVBUU19UUllfTEFURVIiLCJVTkFVVEhPUklaRURfRE9NQUlOIiwiVU5TVVBQT1JURURfRklSU1RfRkFDVE9SIiwiVU5TVVBQT1JURURfUEVSU0lTVEVOQ0UiLCJVTlNVUFBPUlRFRF9URU5BTlRfT1BFUkFUSU9OIiwiVU5WRVJJRklFRF9FTUFJTCIsIlVTRVJfQ0FOQ0VMTEVEIiwiVVNFUl9ERUxFVEVEIiwiVVNFUl9ESVNBQkxFRCIsIlVTRVJfTUlTTUFUQ0giLCJVU0VSX1NJR05FRF9PVVQiLCJXRUFLX1BBU1NXT1JEIiwiV0VCX1NUT1JBR0VfVU5TVVBQT1JURUQiLCJBTFJFQURZX0lOSVRJQUxJWkVEIiwiUkVDQVBUQ0hBX05PVF9FTkFCTEVEIiwiTUlTU0lOR19SRUNBUFRDSEFfVE9LRU4iLCJJTlZBTElEX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX0FDVElPTiIsIk1JU1NJTkdfQ0xJRU5UX1RZUEUiLCJNSVNTSU5HX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRUNBUFRDSEFfVkVSU0lPTiIsIklOVkFMSURfUkVRX1RZUEUiLCJsb2dDbGllbnQiLCJpbXBvcnRfbG9nZ2VyIiwiTG9nZ2VyIiwiX2xvZ1dhcm4iLCJtc2ciLCJhcmdzIiwibG9nTGV2ZWwiLCJMb2dMZXZlbCIsIldBUk4iLCJ3YXJuIiwiaW1wb3J0X2FwcCIsIlNES19WRVJTSU9OIiwiX2xvZ0Vycm9yIiwiRVJST1IiLCJlcnJvciIsIl9mYWlsIiwiYXV0aE9yQ29kZSIsInJlc3QiLCJjcmVhdGVFcnJvckludGVybmFsIiwiX2NyZWF0ZUVycm9yIiwiX2Vycm9yV2l0aEN1c3RvbU1lc3NhZ2UiLCJhdXRoIiwiY29kZSIsIm1lc3NhZ2UiLCJlcnJvck1hcCIsIk9iamVjdCIsImFzc2lnbiIsImZhY3RvcnkiLCJjcmVhdGUiLCJhcHBOYW1lIiwibmFtZSIsIl9hc3NlcnRJbnN0YW5jZU9mIiwib2JqZWN0IiwiaW5zdGFuY2UiLCJjb25zdHJ1Y3Rvckluc3RhbmNlIiwiY29uc3RydWN0b3IiLCJmdWxsUGFyYW1zIiwic2xpY2UiLCJfZXJyb3JGYWN0b3J5IiwiX2Fzc2VydCIsImFzc2VydGlvbiIsImRlYnVnRmFpbCIsImZhaWx1cmUiLCJFcnJvciIsImRlYnVnQXNzZXJ0IiwiX2dldEN1cnJlbnRVcmwiLCJzZWxmIiwiX2EiLCJsb2NhdGlvbiIsImhyZWYiLCJfaXNIdHRwT3JIdHRwcyIsIl9nZXRDdXJyZW50U2NoZW1lIiwicHJvdG9jb2wiLCJfaXNPbmxpbmUiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJpc0Jyb3dzZXJFeHRlbnNpb24iLCJfZ2V0VXNlckxhbmd1YWdlIiwibmF2aWdhdG9yTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsIkRlbGF5Iiwic2hvcnREZWxheSIsImxvbmdEZWxheSIsImlzTW9iaWxlIiwiaXNNb2JpbGVDb3Jkb3ZhIiwiaXNSZWFjdE5hdGl2ZSIsImdldCIsIk1hdGgiLCJtaW4iLCJfZW11bGF0b3JVcmwiLCJjb25maWciLCJwYXRoIiwiZW11bGF0b3IiLCJ1cmwiLCJzdGFydHNXaXRoIiwiRmV0Y2hQcm92aWRlciIsImluaXRpYWxpemUiLCJmZXRjaEltcGwiLCJoZWFkZXJzSW1wbCIsInJlc3BvbnNlSW1wbCIsImZldGNoIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJyZXNwb25zZSIsIlJlc3BvbnNlIiwiU0VSVkVSX0VSUk9SX01BUCIsIkRFRkFVTFRfQVBJX1RJTUVPVVRfTVMiLCJfYWRkVGlkSWZOZWNlc3NhcnkiLCJyZXF1ZXN0IiwidGVuYW50SWQiLCJfcGVyZm9ybUFwaVJlcXVlc3QiLCJtZXRob2QiLCJjdXN0b21FcnJvck1hcCIsIl9wZXJmb3JtRmV0Y2hXaXRoRXJyb3JIYW5kbGluZyIsImJvZHkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJxdWVyeXN0cmluZyIsImtleSIsImFwaUtleSIsIl9nZXRBZGRpdGlvbmFsSGVhZGVycyIsImxhbmd1YWdlQ29kZSIsIl9nZXRGaW5hbFRhcmdldCIsImFwaUhvc3QiLCJyZWZlcnJlclBvbGljeSIsImZldGNoRm4iLCJfY2FuSW5pdEVtdWxhdG9yIiwibmV0d29ya1RpbWVvdXQiLCJOZXR3b3JrVGltZW91dCIsIlByb21pc2UiLCJyYWNlIiwicHJvbWlzZSIsImNsZWFyTmV0d29ya1RpbWVvdXQiLCJqc29uIiwiX21ha2VUYWdnZWRFcnJvciIsIm9rIiwiZXJyb3JNZXNzYWdlIiwic2VydmVyRXJyb3JDb2RlIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic3BsaXQiLCJhdXRoRXJyb3IiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJlIiwiRmlyZWJhc2VFcnJvciIsIlN0cmluZyIsIl9wZXJmb3JtU2lnbkluUmVxdWVzdCIsInNlcnZlclJlc3BvbnNlIiwiX3NlcnZlclJlc3BvbnNlIiwiaG9zdCIsImJhc2UiLCJhcGlTY2hlbWUiLCJ0aW1lciIsIl8iLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZXJyb3JQYXJhbXMiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiY3VzdG9tRGF0YSIsIl90b2tlblJlc3BvbnNlIiwiZGVsZXRlQWNjb3VudCIsImRlbGV0ZUxpbmtlZEFjY291bnRzIiwiZ2V0QWNjb3VudEluZm8iLCJ1dGNUaW1lc3RhbXBUb0RhdGVTdHJpbmciLCJ1dGNUaW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsIk51bWJlciIsImlzTmFOIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwidXNlciIsImZvcmNlUmVmcmVzaCIsImdldE1vZHVsYXJJbnN0YW5jZSIsInVzZXJJbnRlcm5hbCIsInRva2VuIiwiY2xhaW1zIiwiX3BhcnNlVG9rZW4iLCJleHAiLCJhdXRoX3RpbWUiLCJpYXQiLCJmaXJlYmFzZSIsInNpZ25JblByb3ZpZGVyIiwiYXV0aFRpbWUiLCJzZWNvbmRzU3RyaW5nVG9NaWxsaXNlY29uZHMiLCJpc3N1ZWRBdFRpbWUiLCJleHBpcmF0aW9uVGltZSIsInNpZ25JblNlY29uZEZhY3RvciIsInNlY29uZHMiLCJhbGdvcml0aG0iLCJwYXlsb2FkIiwic2lnbmF0dXJlIiwiZGVjb2RlZCIsImJhc2U2NERlY29kZSIsInBhcnNlIiwidG9TdHJpbmciLCJfdG9rZW5FeHBpcmVzSW4iLCJwYXJzZWRUb2tlbiIsIl9sb2dvdXRJZkludmFsaWRhdGVkIiwiYnlwYXNzQXV0aFN0YXRlIiwiaXNVc2VySW52YWxpZGF0ZWQiLCJjdXJyZW50VXNlciIsIlByb2FjdGl2ZVJlZnJlc2giLCJpc1J1bm5pbmciLCJ0aW1lcklkIiwiZXJyb3JCYWNrb2ZmIiwiX3N0YXJ0Iiwic2NoZWR1bGUiLCJfc3RvcCIsImdldEludGVydmFsIiwid2FzRXJyb3IiLCJpbnRlcnZhbCIsImV4cFRpbWUiLCJzdHNUb2tlbk1hbmFnZXIiLCJub3ciLCJtYXgiLCJpdGVyYXRpb24iLCJVc2VyTWV0YWRhdGEiLCJjcmVhdGVkQXQiLCJsYXN0TG9naW5BdCIsIl9pbml0aWFsaXplVGltZSIsImxhc3RTaWduSW5UaW1lIiwiY3JlYXRpb25UaW1lIiwiX2NvcHkiLCJtZXRhZGF0YSIsInRvSlNPTiIsIl9yZWxvYWRXaXRob3V0U2F2aW5nIiwiaWRUb2tlbiIsInVzZXJzIiwibGVuZ3RoIiwiY29yZUFjY291bnQiLCJfbm90aWZ5UmVsb2FkTGlzdGVuZXIiLCJuZXdQcm92aWRlckRhdGEiLCJwcm92aWRlclVzZXJJbmZvIiwiZXh0cmFjdFByb3ZpZGVyRGF0YSIsInByb3ZpZGVyRGF0YSIsIm1lcmdlUHJvdmlkZXJEYXRhIiwib2xkSXNBbm9ueW1vdXMiLCJpc0Fub255bW91cyIsIm5ld0lzQW5vbnltb3VzIiwicGFzc3dvcmRIYXNoIiwidXBkYXRlcyIsInVpZCIsImxvY2FsSWQiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwicGhvdG9VcmwiLCJlbWFpbFZlcmlmaWVkIiwiX3BlcnNpc3RVc2VySWZDdXJyZW50IiwiX25vdGlmeUxpc3RlbmVyc0lmQ3VycmVudCIsIm9yaWdpbmFsIiwibmV3RGF0YSIsImRlZHVwZWQiLCJmaWx0ZXIiLCJvIiwic29tZSIsIm4iLCJwcm92aWRlcklkIiwicHJvdmlkZXJzIiwibWFwIiwicHJvdmlkZXIiLCJpbXBvcnRfdHNsaWIiLCJfX3Jlc3QiLCJyYXdJZCIsInJlcXVlc3RTdHNUb2tlbiIsInJlZnJlc2hUb2tlbiIsInRva2VuQXBpSG9zdCIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlc0luIiwiZXhwaXJlc19pbiIsInJlZnJlc2hfdG9rZW4iLCJTdHNUb2tlbk1hbmFnZXIiLCJpc0V4cGlyZWQiLCJ1cGRhdGVGcm9tU2VydmVyUmVzcG9uc2UiLCJ1cGRhdGVUb2tlbnNBbmRFeHBpcmF0aW9uIiwiZ2V0VG9rZW4iLCJyZWZyZXNoIiwiY2xlYXJSZWZyZXNoVG9rZW4iLCJvbGRUb2tlbiIsImV4cGlyZXNJblNlYyIsImZyb21KU09OIiwibWFuYWdlciIsIl9hc3NpZ24iLCJfY2xvbmUiLCJfcGVyZm9ybVJlZnJlc2giLCJhc3NlcnRTdHJpbmdPclVuZGVmaW5lZCIsIlVzZXJJbXBsIiwib3B0IiwicHJvYWN0aXZlUmVmcmVzaCIsInJlbG9hZFVzZXJJbmZvIiwicmVsb2FkTGlzdGVuZXIiLCJ1c2VySW5mbyIsIm5ld1VzZXIiLCJfb25SZWxvYWQiLCJjYWxsYmFjayIsIl9zdGFydFByb2FjdGl2ZVJlZnJlc2giLCJfc3RvcFByb2FjdGl2ZVJlZnJlc2giLCJfdXBkYXRlVG9rZW5zSWZOZWNlc3NhcnkiLCJyZWxvYWQyIiwidG9rZW5zUmVmcmVzaGVkIiwiZGVsZXRlIiwiX3JlZGlyZWN0RXZlbnRJZCIsIl9mcm9tSlNPTiIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiX2YiLCJfZyIsIl9oIiwicGxhaW5PYmplY3RUb2tlbk1hbmFnZXIiLCJBcnJheSIsImlzQXJyYXkiLCJfZnJvbUlkVG9rZW5SZXNwb25zZSIsImlkVG9rZW5SZXNwb25zZSIsImluc3RhbmNlQ2FjaGUiLCJNYXAiLCJfZ2V0SW5zdGFuY2UiLCJjbHMiLCJGdW5jdGlvbiIsInNldCIsIkluTWVtb3J5UGVyc2lzdGVuY2UiLCJ0eXBlIiwic3RvcmFnZSIsIl9pc0F2YWlsYWJsZSIsIl9zZXQiLCJ2YWx1ZSIsIl9nZXQiLCJfcmVtb3ZlIiwiX2FkZExpc3RlbmVyIiwiX2tleSIsIl9saXN0ZW5lciIsIl9yZW1vdmVMaXN0ZW5lciIsIl9wZXJzaXN0ZW5jZUtleU5hbWUiLCJQZXJzaXN0ZW5jZVVzZXJNYW5hZ2VyIiwicGVyc2lzdGVuY2UiLCJ1c2VyS2V5IiwibmFtZTIiLCJmdWxsVXNlcktleSIsImZ1bGxQZXJzaXN0ZW5jZUtleSIsImJvdW5kRXZlbnRIYW5kbGVyIiwiX29uU3RvcmFnZUV2ZW50IiwiYmluZCIsInNldEN1cnJlbnRVc2VyIiwiZ2V0Q3VycmVudFVzZXIiLCJibG9iIiwicmVtb3ZlQ3VycmVudFVzZXIiLCJzYXZlUGVyc2lzdGVuY2VGb3JSZWRpcmVjdCIsIm5ld1BlcnNpc3RlbmNlIiwicGVyc2lzdGVuY2VIaWVyYXJjaHkiLCJhdmFpbGFibGVQZXJzaXN0ZW5jZXMiLCJhbGwiLCJzZWxlY3RlZFBlcnNpc3RlbmNlIiwidXNlclRvTWlncmF0ZSIsIm1pZ3JhdGlvbkhpZXJhcmNoeSIsInAiLCJfc2hvdWxkQWxsb3dNaWdyYXRpb24iLCJfZ2V0QnJvd3Nlck5hbWUiLCJ1c2VyQWdlbnQiLCJ1YSIsImluY2x1ZGVzIiwiX2lzSUVNb2JpbGUiLCJfaXNGaXJlZm94IiwiX2lzQmxhY2tCZXJyeSIsIl9pc1dlYk9TIiwiX2lzU2FmYXJpIiwiX2lzQ2hyb21lSU9TIiwiX2lzQW5kcm9pZCIsInJlIiwibWF0Y2hlcyIsIm1hdGNoIiwiZ2V0VUEiLCJ0ZXN0IiwiX2lzSU9TIiwiX2lzSU9TN09yOCIsIl9pc0lPU1N0YW5kYWxvbmUiLCJ3aW5kb3ciLCJzdGFuZGFsb25lIiwiX2lzSUUxMCIsImlzSUUiLCJkb2N1bWVudCIsImRvY3VtZW50TW9kZSIsIl9pc01vYmlsZUJyb3dzZXIiLCJfaXNJZnJhbWUiLCJ0b3AiLCJfZ2V0Q2xpZW50VmVyc2lvbiIsImNsaWVudFBsYXRmb3JtIiwiZnJhbWV3b3JrcyIsInJlcG9ydGVkUGxhdGZvcm0iLCJyZXBvcnRlZEZyYW1ld29ya3MiLCJqb2luIiwiZ2V0UmVjYXB0Y2hhUGFyYW1zIiwicmVjYXB0Y2hhU2l0ZUtleSIsImdldFJlY2FwdGNoYUNvbmZpZyIsImlzVjIiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJpc0VudGVycHJpc2UiLCJlbnRlcnByaXNlIiwiUmVjYXB0Y2hhQ29uZmlnIiwic2l0ZUtleSIsImVtYWlsUGFzc3dvcmRFbmFibGVkIiwicmVjYXB0Y2hhS2V5IiwicmVjYXB0Y2hhRW5mb3JjZW1lbnRTdGF0ZSIsImVuZm9yY2VtZW50U3RhdGUiLCJnZXRTY3JpcHRQYXJlbnRFbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJfbG9hZEpTIiwicmVzb2x2ZSIsImVsIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJjaGFyc2V0IiwiYXBwZW5kQ2hpbGQiLCJfZ2VuZXJhdGVDYWxsYmFja05hbWUiLCJwcmVmaXgiLCJmbG9vciIsInJhbmRvbSIsIlJFQ0FQVENIQV9FTlRFUlBSSVNFX1VSTCIsIlJFQ0FQVENIQV9FTlRFUlBSSVNFX1ZFUklGSUVSX1RZUEUiLCJGQUtFX1RPS0VOIiwiUmVjYXB0Y2hhRW50ZXJwcmlzZVZlcmlmaWVyIiwiYXV0aEV4dGVybiIsIl9jYXN0QXV0aCIsInZlcmlmeSIsImFjdGlvbiIsInJldHJpZXZlU2l0ZUtleSIsIl9hZ2VudFJlY2FwdGNoYUNvbmZpZyIsIl90ZW5hbnRSZWNhcHRjaGFDb25maWdzIiwiY2xpZW50VHlwZSIsInZlcnNpb24iLCJ0aGVuIiwiY2F0Y2giLCJyZXRyaWV2ZVJlY2FwdGNoYVRva2VuIiwicmVhZHkiLCJleGVjdXRlIiwiaW5qZWN0UmVjYXB0Y2hhRmllbGRzIiwiY2FwdGNoYVJlc3AiLCJ2ZXJpZmllciIsImNhcHRjaGFSZXNwb25zZSIsIm5ld1JlcXVlc3QiLCJBdXRoTWlkZGxld2FyZVF1ZXVlIiwicXVldWUiLCJwdXNoQ2FsbGJhY2siLCJvbkFib3J0Iiwid3JhcHBlZENhbGxiYWNrIiwicmVzdWx0IiwicHVzaCIsImluZGV4IiwicnVuTWlkZGxld2FyZSIsIm5leHRVc2VyIiwib25BYm9ydFN0YWNrIiwiYmVmb3JlU3RhdGVDYWxsYmFjayIsInJldmVyc2UiLCJvcmlnaW5hbE1lc3NhZ2UiLCJBdXRoSW1wbCIsImFwcCIsImhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlciIsImFwcENoZWNrU2VydmljZVByb3ZpZGVyIiwiZW11bGF0b3JDb25maWciLCJvcGVyYXRpb25zIiwiYXV0aFN0YXRlU3Vic2NyaXB0aW9uIiwiU3Vic2NyaXB0aW9uIiwiaWRUb2tlblN1YnNjcmlwdGlvbiIsImJlZm9yZVN0YXRlUXVldWUiLCJyZWRpcmVjdFVzZXIiLCJpc1Byb2FjdGl2ZVJlZnJlc2hFbmFibGVkIiwiX2lzSW5pdGlhbGl6ZWQiLCJfZGVsZXRlZCIsIl9pbml0aWFsaXphdGlvblByb21pc2UiLCJfcG9wdXBSZWRpcmVjdFJlc29sdmVyIiwibGFzdE5vdGlmaWVkVWlkIiwic2V0dGluZ3MiLCJhcHBWZXJpZmljYXRpb25EaXNhYmxlZEZvclRlc3RpbmciLCJjbGllbnRWZXJzaW9uIiwic2RrQ2xpZW50VmVyc2lvbiIsIl9pbml0aWFsaXplV2l0aFBlcnNpc3RlbmNlIiwicG9wdXBSZWRpcmVjdFJlc29sdmVyIiwicGVyc2lzdGVuY2VNYW5hZ2VyIiwiX3Nob3VsZEluaXRQcm9hY3RpdmVseSIsIl9pbml0aWFsaXplIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyIiwiYXNzZXJ0ZWRQZXJzaXN0ZW5jZSIsIl9jdXJyZW50VXNlciIsIl91cGRhdGVDdXJyZW50VXNlciIsInByZXZpb3VzbHlTdG9yZWRVc2VyIiwiZnV0dXJlQ3VycmVudFVzZXIiLCJuZWVkc1RvY2hlY2tNaWRkbGV3YXJlIiwiYXV0aERvbWFpbiIsImdldE9ySW5pdFJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwicmVkaXJlY3RVc2VyRXZlbnRJZCIsInN0b3JlZFVzZXJFdmVudElkIiwidHJ5UmVkaXJlY3RTaWduSW4iLCJkaXJlY3RseVNldEN1cnJlbnRVc2VyIiwiX292ZXJyaWRlUmVkaXJlY3RSZXN1bHQiLCJyZWxvYWRBbmRTZXRDdXJyZW50VXNlck9yQ2xlYXIiLCJyZWRpcmVjdFJlc29sdmVyIiwiX2NvbXBsZXRlUmVkaXJlY3RGbiIsIl9zZXRSZWRpcmVjdFVzZXIiLCJfZGVsZXRlIiwidXNlckV4dGVybiIsInNraXBCZWZvcmVTdGF0ZUNhbGxiYWNrcyIsIm5vdGlmeUF1dGhMaXN0ZW5lcnMiLCJyZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsIl9nZXRSZWNhcHRjaGFDb25maWciLCJfZ2V0UGVyc2lzdGVuY2UiLCJfdXBkYXRlRXJyb3JNYXAiLCJuZXh0T3JPYnNlcnZlciIsImNvbXBsZXRlZCIsInJlZ2lzdGVyU3RhdGVMaXN0ZW5lciIsInJlZGlyZWN0TWFuYWdlciIsInJlc29sdmVyIiwiX3JlZGlyZWN0UGVyc2lzdGVuY2UiLCJfcmVkaXJlY3RVc2VyRm9ySWQiLCJpZCIsIm5leHQiLCJjdXJyZW50VWlkIiwic3Vic2NyaXB0aW9uIiwiY2IiLCJhZGRPYnNlcnZlciIsIl9sb2dGcmFtZXdvcmsiLCJmcmFtZXdvcmsiLCJzb3J0IiwiX2dldEZyYW1ld29ya3MiLCJvcHRpb25zIiwiYXBwSWQiLCJoZWFydGJlYXRzSGVhZGVyIiwiZ2V0SW1tZWRpYXRlIiwib3B0aW9uYWwiLCJnZXRIZWFydGJlYXRzSGVhZGVyIiwiYXBwQ2hlY2tUb2tlbiIsIl9nZXRBcHBDaGVja1Rva2VuIiwiYXBwQ2hlY2tUb2tlblJlc3VsdCIsIm9ic2VydmVyIiwiY3JlYXRlU3Vic2NyaWJlIiwiZGVwcyIsIl9nZXRQcm92aWRlciIsImlzSW5pdGlhbGl6ZWQiLCJhdXRoMiIsImluaXRpYWxPcHRpb25zIiwiZ2V0T3B0aW9ucyIsImRlZXBFcXVhbCIsIl9pbml0aWFsaXplQXV0aEluc3RhbmNlIiwiaGllcmFyY2h5IiwiYXV0aEludGVybmFsIiwiZGlzYWJsZVdhcm5pbmdzIiwiZXh0cmFjdFByb3RvY29sIiwicG9ydCIsImV4dHJhY3RIb3N0QW5kUG9ydCIsInBvcnRTdHIiLCJmcmVlemUiLCJlbWl0RW11bGF0b3JXYXJuaW5nIiwicHJvdG9jb2xFbmQiLCJpbmRleE9mIiwic3Vic3RyIiwiYXV0aG9yaXR5IiwiZXhlYyIsImhvc3RBbmRQb3J0IiwicG9wIiwiYnJhY2tldGVkSVB2NiIsInBhcnNlUG9ydCIsImF0dGFjaEJhbm5lciIsInN0eSIsInN0eWxlIiwiaW5uZXJUZXh0IiwicG9zaXRpb24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImNvbG9yIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbiIsInpJbmRleCIsInRleHRBbGlnbiIsImNsYXNzTGlzdCIsImFkZCIsImNvbnNvbGUiLCJpbmZvIiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaWduSW5NZXRob2QiLCJfZ2V0SWRUb2tlblJlc3BvbnNlIiwiX2F1dGgiLCJfbGlua1RvSWRUb2tlbiIsIl9pZFRva2VuIiwiX2dldFJlYXV0aGVudGljYXRpb25SZXNvbHZlciIsInJlc2V0UGFzc3dvcmQiLCJ1cGRhdGVFbWFpbFBhc3N3b3JkIiwiYXBwbHlBY3Rpb25Db2RlJDEiLCJzaWduSW5XaXRoUGFzc3dvcmQiLCJzZW5kT29iQ29kZSIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiQxIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCQxIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsJDEiLCJ2ZXJpZnlBbmRDaGFuZ2VFbWFpbCIsInNpZ25JbldpdGhFbWFpbExpbmskMSIsInNpZ25JbldpdGhFbWFpbExpbmtGb3JMaW5raW5nIiwiX2VtYWlsIiwiX3Bhc3N3b3JkIiwiX3RlbmFudElkIiwiX2Zyb21FbWFpbEFuZFBhc3N3b3JkIiwicGFzc3dvcmQiLCJfZnJvbUVtYWlsQW5kQ29kZSIsIm9vYkNvZGUiLCJvYmoiLCJyZXR1cm5TZWN1cmVUb2tlbiIsInJlcXVlc3RXaXRoUmVjYXB0Y2hhIiwibG9nIiwic2lnbkluV2l0aElkcCIsIklEUF9SRVFVRVNUX1VSSSQxIiwicGVuZGluZ1Rva2VuIiwiX2Zyb21QYXJhbXMiLCJjcmVkIiwibm9uY2UiLCJvYXV0aFRva2VuIiwib2F1dGhUb2tlblNlY3JldCIsInNlY3JldCIsImJ1aWxkUmVxdWVzdCIsImF1dG9DcmVhdGUiLCJyZXF1ZXN0VXJpIiwicG9zdEJvZHkiLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlIiwic2lnbkluV2l0aFBob25lTnVtYmVyJDEiLCJsaW5rV2l0aFBob25lTnVtYmVyJDEiLCJ0ZW1wb3JhcnlQcm9vZiIsIlZFUklGWV9QSE9ORV9OVU1CRVJfRk9SX0VYSVNUSU5HX0VSUk9SX01BUF8iLCJ2ZXJpZnlQaG9uZU51bWJlckZvckV4aXN0aW5nIiwiYXBpUmVxdWVzdCIsIm9wZXJhdGlvbiIsIl9mcm9tVmVyaWZpY2F0aW9uIiwidmVyaWZpY2F0aW9uSWQiLCJ2ZXJpZmljYXRpb25Db2RlIiwiX2Zyb21Ub2tlblJlc3BvbnNlIiwiX21ha2VWZXJpZmljYXRpb25SZXF1ZXN0Iiwic2Vzc2lvbkluZm8iLCJwYXJzZU1vZGUiLCJtb2RlIiwicGFyc2VEZWVwTGluayIsImxpbmsiLCJxdWVyeXN0cmluZ0RlY29kZSIsImV4dHJhY3RRdWVyeXN0cmluZyIsImRvdWJsZURlZXBMaW5rIiwiaU9TRGVlcExpbmsiLCJpT1NEb3VibGVEZWVwTGluayIsImFjdGlvbkxpbmsiLCJzZWFyY2hQYXJhbXMiLCJjb250aW51ZVVybCIsInBhcnNlTGluayIsIlBST1ZJREVSX0lEIiwiY3JlZGVudGlhbCIsImNyZWRlbnRpYWxXaXRoTGluayIsImVtYWlsTGluayIsImFjdGlvbkNvZGVVcmwiLCJFTUFJTF9QQVNTV09SRF9TSUdOX0lOX01FVEhPRCIsIkVNQUlMX0xJTktfU0lHTl9JTl9NRVRIT0QiLCJGZWRlcmF0ZWRBdXRoUHJvdmlkZXIiLCJkZWZhdWx0TGFuZ3VhZ2VDb2RlIiwiY3VzdG9tUGFyYW1ldGVycyIsInNldERlZmF1bHRMYW5ndWFnZSIsInNldEN1c3RvbVBhcmFtZXRlcnMiLCJjdXN0b21PQXV0aFBhcmFtZXRlcnMiLCJnZXRDdXN0b21QYXJhbWV0ZXJzIiwiQmFzZU9BdXRoUHJvdmlkZXIiLCJzY29wZXMiLCJhZGRTY29wZSIsInNjb3BlIiwiZ2V0U2NvcGVzIiwiY3JlZGVudGlhbEZyb21KU09OIiwiX2NyZWRlbnRpYWwiLCJyYXdOb25jZSIsImNyZWRlbnRpYWxGcm9tUmVzdWx0IiwidXNlckNyZWRlbnRpYWwiLCJvYXV0aENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiY3JlZGVudGlhbEZyb21FcnJvciIsInRva2VuUmVzcG9uc2UiLCJvYXV0aElkVG9rZW4iLCJvYXV0aEFjY2Vzc1Rva2VuIiwiRkFDRUJPT0tfU0lHTl9JTl9NRVRIT0QiLCJjcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIkdPT0dMRV9TSUdOX0lOX01FVEhPRCIsIkdJVEhVQl9TSUdOX0lOX01FVEhPRCIsIklEUF9SRVFVRVNUX1VSSSIsIlNBTUxBdXRoQ3JlZGVudGlhbCIsIl9jcmVhdGUiLCJTQU1MX1BST1ZJREVSX1BSRUZJWCIsInNhbWxDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIlRXSVRURVJfU0lHTl9JTl9NRVRIT0QiLCJzaWduVXAiLCJVc2VyQ3JlZGVudGlhbEltcGwiLCJvcGVyYXRpb25UeXBlIiwicHJvdmlkZXJJZEZvclJlc3BvbnNlIiwidXNlckNyZWQiLCJfZm9yT3BlcmF0aW9uIiwiTXVsdGlGYWN0b3JFcnJvciIsInNldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiX2Zyb21FcnJvckFuZE9wZXJhdGlvbiIsIl9wcm9jZXNzQ3JlZGVudGlhbFNhdmluZ01mYUNvbnRleHRJZk5lY2Vzc2FyeSIsImlkVG9rZW5Qcm92aWRlciIsInByb3ZpZGVyRGF0YUFzTmFtZXMiLCJTZXQiLCJwaWQiLCJfYXNzZXJ0TGlua2VkU3RhdHVzIiwiZGVsZXRlUHJvdmlkZXIiLCJwcm92aWRlcnNMZWZ0IiwicGQiLCJoYXMiLCJfbGluayQxIiwiZXhwZWN0ZWQiLCJwcm92aWRlcklkcyIsIl9yZWF1dGhlbnRpY2F0ZSIsInBhcnNlZCIsInN1YiIsIl9zaWduSW5XaXRoQ3JlZGVudGlhbCIsInNpZ25JbldpdGhDdXN0b21Ub2tlbiQxIiwiY3VzdG9tVG9rZW4iLCJNdWx0aUZhY3RvckluZm9JbXBsIiwiZmFjdG9ySWQiLCJtZmFFbnJvbGxtZW50SWQiLCJlbnJvbGxtZW50VGltZSIsImVucm9sbGVkQXQiLCJfZnJvbVNlcnZlclJlc3BvbnNlIiwiZW5yb2xsbWVudCIsIlBob25lTXVsdGlGYWN0b3JJbmZvSW1wbCIsIlRvdHBNdWx0aUZhY3RvckluZm9JbXBsIiwicGhvbmVJbmZvIiwiX3NldEFjdGlvbkNvZGVTZXR0aW5nc09uUmVxdWVzdCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsImR5bmFtaWNMaW5rRG9tYWluIiwiY2FuSGFuZGxlQ29kZUluQXBwIiwiaGFuZGxlQ29kZUluQXBwIiwiaU9TIiwiYnVuZGxlSWQiLCJpT1NCdW5kbGVJZCIsImFuZHJvaWQiLCJwYWNrYWdlTmFtZSIsImFuZHJvaWRJbnN0YWxsQXBwIiwiaW5zdGFsbEFwcCIsImFuZHJvaWRNaW5pbXVtVmVyc2lvbkNvZGUiLCJtaW5pbXVtVmVyc2lvbiIsImFuZHJvaWRQYWNrYWdlTmFtZSIsInJlcXVlc3RUeXBlIiwibmV3UGFzc3dvcmQiLCJhdXRoTW9kdWxhciIsIm5ld0VtYWlsIiwibWZhSW5mbyIsIm11bHRpRmFjdG9ySW5mbyIsImRhdGEiLCJwcmV2aW91c0VtYWlsIiwic2lnblVwUmVzcG9uc2UiLCJzZXRBY3Rpb25Db2RlU2V0dGluZ3MiLCJyZXF1ZXN0MiIsImFjdGlvbkNvZGVTZXR0aW5nczIiLCJjcmVhdGVBdXRoVXJpIiwiY29udGludWVVcmkiLCJpZGVudGlmaWVyIiwic2lnbmluTWV0aG9kcyIsInVwZGF0ZVByb2ZpbGUkMSIsInByb2ZpbGVSZXF1ZXN0IiwicGFzc3dvcmRQcm92aWRlciIsImZpbmQiLCJ1cGRhdGVFbWFpbE9yUGFzc3dvcmQiLCJwcm9maWxlIiwicmF3VXNlckluZm8iLCJpc05ld1VzZXIiLCJraW5kIiwiZmlsdGVyZWRQcm92aWRlcklkIiwiR2VuZXJpY0FkZGl0aW9uYWxVc2VySW5mbyIsIkZhY2Vib29rQWRkaXRpb25hbFVzZXJJbmZvIiwiR2l0aHViQWRkaXRpb25hbFVzZXJJbmZvIiwiR29vZ2xlQWRkaXRpb25hbFVzZXJJbmZvIiwiVHdpdHRlckFkZGl0aW9uYWxVc2VySW5mbyIsInNjcmVlbk5hbWUiLCJGZWRlcmF0ZWRBZGRpdGlvbmFsVXNlckluZm9XaXRoVXNlcm5hbWUiLCJ1c2VybmFtZSIsImxvZ2luIiwiTXVsdGlGYWN0b3JTZXNzaW9uSW1wbCIsIl9mcm9tSWR0b2tlbiIsIl9mcm9tTWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm11bHRpRmFjdG9yU2Vzc2lvbiIsInBlbmRpbmdDcmVkZW50aWFsIiwiTXVsdGlGYWN0b3JSZXNvbHZlckltcGwiLCJzZXNzaW9uIiwiaGludHMiLCJzaWduSW5SZXNvbHZlciIsIl9mcm9tRXJyb3IiLCJtZmFSZXNwb25zZSIsIl9wcm9jZXNzIiwicmVzb2x2ZVNpZ25JbiIsImFzc2VydGlvbkV4dGVybiIsImVycm9ySW50ZXJuYWwiLCJzdGFydEVucm9sbFBob25lTWZhIiwiZmluYWxpemVFbnJvbGxQaG9uZU1mYSIsInN0YXJ0RW5yb2xsVG90cE1mYSIsImZpbmFsaXplRW5yb2xsVG90cE1mYSIsIndpdGhkcmF3TWZhIiwiTXVsdGlGYWN0b3JVc2VySW1wbCIsImVucm9sbGVkRmFjdG9ycyIsIl9mcm9tVXNlciIsImdldFNlc3Npb24iLCJlbnJvbGwiLCJmaW5hbGl6ZU1mYVJlc3BvbnNlIiwidW5lbnJvbGwiLCJpbmZvT3JVaWQiLCJtdWx0aUZhY3RvclVzZXJDYWNoZSIsIldlYWtNYXAiLCJ1c2VyTW9kdWxhciIsIlNUT1JBR0VfQVZBSUxBQkxFX0tFWSIsIkJyb3dzZXJQZXJzaXN0ZW5jZUNsYXNzIiwic3RvcmFnZVJldHJpZXZlciIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsIl9pZnJhbWVDYW5ub3RTeW5jV2ViU3RvcmFnZSIsIl9QT0xMSU5HX0lOVEVSVkFMX01TJDEiLCJJRTEwX0xPQ0FMX1NUT1JBR0VfU1lOQ19ERUxBWSIsIkJyb3dzZXJMb2NhbFBlcnNpc3RlbmNlIiwibG9jYWxTdG9yYWdlIiwiZXZlbnQiLCJwb2xsIiwib25TdG9yYWdlRXZlbnQiLCJsaXN0ZW5lcnMiLCJsb2NhbENhY2hlIiwicG9sbFRpbWVyIiwic2FmYXJpTG9jYWxTdG9yYWdlTm90U3luY2VkIiwiZmFsbGJhY2tUb1BvbGxpbmciLCJmb3JBbGxDaGFuZ2VkS2V5cyIsImtleXMiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwia2V5MiIsIl9vbGRWYWx1ZSIsIm5vdGlmeUxpc3RlbmVycyIsImRldGFjaExpc3RlbmVyIiwic3RvcFBvbGxpbmciLCJzdG9yZWRWYWx1ZTIiLCJ0cmlnZ2VyTGlzdGVuZXJzIiwic3RvcmVkVmFsdWUiLCJsaXN0ZW5lciIsImZyb20iLCJzdGFydFBvbGxpbmciLCJzZXRJbnRlcnZhbCIsIlN0b3JhZ2VFdmVudCIsImNsZWFySW50ZXJ2YWwiLCJhdHRhY2hMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaXplIiwiQnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsInNlc3Npb25TdG9yYWdlIiwiX2FsbFNldHRsZWQiLCJwcm9taXNlcyIsImZ1bGZpbGxlZCIsInJlYXNvbiIsIlJlY2VpdmVyIiwiZXZlbnRUYXJnZXQiLCJoYW5kbGVyc01hcCIsImhhbmRsZUV2ZW50IiwiZXhpc3RpbmdJbnN0YW5jZSIsInJlY2VpdmVycyIsInJlY2VpdmVyIiwiaXNMaXN0ZW5pbmd0byIsIm5ld0luc3RhbmNlIiwibWVzc2FnZUV2ZW50IiwiZXZlbnRJZCIsImV2ZW50VHlwZSIsImhhbmRsZXJzIiwicG9ydHMiLCJwb3N0TWVzc2FnZSIsInN0YXR1cyIsImhhbmRsZXIiLCJvcmlnaW4iLCJfc3Vic2NyaWJlIiwiZXZlbnRIYW5kbGVyIiwiX3Vuc3Vic2NyaWJlIiwiX2dlbmVyYXRlRXZlbnRJZCIsImRpZ2l0cyIsImkiLCJTZW5kZXIiLCJ0YXJnZXQiLCJyZW1vdmVNZXNzYWdlSGFuZGxlciIsIm1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJvbk1lc3NhZ2UiLCJjbG9zZSIsIl9zZW5kIiwidGltZW91dCIsIk1lc3NhZ2VDaGFubmVsIiwiY29tcGxldGlvblRpbWVyIiwic3RhcnQiLCJhY2tUaW1lciIsInBvcnQyIiwiZmluYWxseSIsIl93aW5kb3ciLCJfc2V0V2luZG93TG9jYXRpb24iLCJfaXNXb3JrZXIiLCJfZ2V0QWN0aXZlU2VydmljZVdvcmtlciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RyYXRpb24iLCJhY3RpdmUiLCJfZ2V0U2VydmljZVdvcmtlckNvbnRyb2xsZXIiLCJjb250cm9sbGVyIiwiX2dldFdvcmtlckdsb2JhbFNjb3BlIiwiREJfTkFNRSIsIkRCX1ZFUlNJT04iLCJEQl9PQkpFQ1RTVE9SRV9OQU1FIiwiREJfREFUQV9LRVlQQVRIIiwiREJQcm9taXNlIiwidG9Qcm9taXNlIiwiZ2V0T2JqZWN0U3RvcmUiLCJkYiIsImlzUmVhZFdyaXRlIiwidHJhbnNhY3Rpb24iLCJvYmplY3RTdG9yZSIsIl9kZWxldGVEYXRhYmFzZSIsImluZGV4ZWREQiIsImRlbGV0ZURhdGFiYXNlIiwiX29wZW5EYXRhYmFzZSIsIm9wZW4iLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJvYmplY3RTdG9yZU5hbWVzIiwiY29udGFpbnMiLCJfcHV0T2JqZWN0IiwicHV0IiwiZ2V0T2JqZWN0IiwiX2RlbGV0ZU9iamVjdCIsIl9QT0xMSU5HX0lOVEVSVkFMX01TIiwiX1RSQU5TQUNUSU9OX1JFVFJZX0NPVU5UIiwiSW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsInBlbmRpbmdXcml0ZXMiLCJzZW5kZXIiLCJzZXJ2aWNlV29ya2VyUmVjZWl2ZXJBdmFpbGFibGUiLCJhY3RpdmVTZXJ2aWNlV29ya2VyIiwiX3dvcmtlckluaXRpYWxpemF0aW9uUHJvbWlzZSIsImluaXRpYWxpemVTZXJ2aWNlV29ya2VyTWVzc2FnaW5nIiwiX29wZW5EYiIsIl93aXRoUmV0cmllcyIsIm9wIiwibnVtQXR0ZW1wdHMiLCJpbml0aWFsaXplUmVjZWl2ZXIiLCJpbml0aWFsaXplU2VuZGVyIiwiX29yaWdpbiIsIl9wb2xsIiwia2V5UHJvY2Vzc2VkIiwiX2RhdGEiLCJyZXN1bHRzIiwibm90aWZ5U2VydmljZVdvcmtlciIsIl93aXRoUGVuZGluZ1dyaXRlIiwid3JpdGUiLCJnZXRBbGxSZXF1ZXN0IiwiZ2V0QWxsIiwia2V5c0luUmVzdWx0IiwiZmJhc2Vfa2V5IiwibG9jYWxLZXkiLCJzdGFydFNpZ25JblBob25lTWZhIiwiZmluYWxpemVTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluVG90cE1mYSIsIl9TT0xWRV9USU1FX01TIiwiX0VYUElSQVRJT05fVElNRV9NUyIsIl9XSURHRVRfSURfU1RBUlQiLCJNb2NrUmVDYXB0Y2hhIiwiY291bnRlciIsIl93aWRnZXRzIiwicmVuZGVyIiwiY29udGFpbmVyIiwicGFyYW1ldGVycyIsIk1vY2tXaWRnZXQiLCJyZXNldCIsIm9wdFdpZGdldElkIiwiY29udGFpbmVyT3JJZCIsImRlbGV0ZWQiLCJyZXNwb25zZVRva2VuIiwiY2xpY2tIYW5kbGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpc1Zpc2libGUiLCJjaGVja0lmRGVsZXRlZCIsImdlbmVyYXRlUmFuZG9tQWxwaGFOdW1lcmljU3RyaW5nIiwiZXhwaXJlZENhbGxiYWNrIiwibGVuIiwiY2hhcnMiLCJhbGxvd2VkQ2hhcnMiLCJjaGFyQXQiLCJfSlNMT0FEX0NBTExCQUNLIiwiTkVUV09SS19USU1FT1VUX0RFTEFZIiwiUkVDQVBUQ0hBX0JBU0UiLCJSZUNhcHRjaGFMb2FkZXJJbXBsIiwiaG9zdExhbmd1YWdlIiwibGlicmFyeVNlcGFyYXRlbHlMb2FkZWQiLCJsb2FkIiwiaGwiLCJpc0hvc3RMYW5ndWFnZVZhbGlkIiwic2hvdWxkUmVzb2x2ZUltbWVkaWF0ZWx5IiwicmVjYXB0Y2hhIiwid2lkZ2V0SWQiLCJjbGVhcmVkT25lSW5zdGFuY2UiLCJNb2NrUmVDYXB0Y2hhTG9hZGVySW1wbCIsIlJFQ0FQVENIQV9WRVJJRklFUl9UWVBFIiwiREVGQVVMVF9QQVJBTVMiLCJ0aGVtZSIsImRlc3Ryb3llZCIsInRva2VuQ2hhbmdlTGlzdGVuZXJzIiwicmVuZGVyUHJvbWlzZSIsImlzSW52aXNpYmxlIiwibWFrZVRva2VuQ2FsbGJhY2siLCJfcmVjYXB0Y2hhTG9hZGVyIiwidmFsaWRhdGVTdGFydGluZ1N0YXRlIiwiYXNzZXJ0Tm90RGVzdHJveWVkIiwiZ2V0QXNzZXJ0ZWRSZWNhcHRjaGEiLCJ0b2tlbkNoYW5nZSIsIm1ha2VSZW5kZXJQcm9taXNlIiwiX3Jlc2V0IiwiY2xlYXIiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJyZW1vdmVDaGlsZCIsInNpdGVrZXkiLCJoYXNDaGlsZE5vZGVzIiwiZXhpc3RpbmciLCJnbG9iYWxGdW5jIiwiaW5pdCIsImd1YXJhbnRlZWRFbXB0eSIsImRvbVJlYWR5IiwiQ29uZmlybWF0aW9uUmVzdWx0SW1wbCIsIm9uQ29uZmlybWF0aW9uIiwiY29uZmlybSIsImF1dGhDcmVkZW50aWFsIiwiYXBwVmVyaWZpZXIiLCJfdmVyaWZ5UGhvbmVOdW1iZXIiLCJyZWNhcHRjaGFUb2tlbiIsInBob25lSW5mb09wdGlvbnMiLCJwaG9uZUVucm9sbG1lbnRJbmZvIiwicGhvbmVTZXNzaW9uSW5mbyIsIm11bHRpRmFjdG9ySGludCIsIm11bHRpRmFjdG9yVWlkIiwicGhvbmVTaWduSW5JbmZvIiwicGhvbmVSZXNwb25zZUluZm8iLCJ2ZXJpZnlQaG9uZU51bWJlciIsInBob25lT3B0aW9ucyIsImFwcGxpY2F0aW9uVmVyaWZpZXIiLCJQSE9ORV9TSUdOX0lOX01FVEhPRCIsIl93aXRoRGVmYXVsdFJlc29sdmVyIiwicmVzb2x2ZXJPdmVycmlkZSIsIklkcENyZWRlbnRpYWwiLCJfYnVpbGRJZHBSZXF1ZXN0Iiwic2Vzc2lvbklkIiwicmV0dXJuSWRwQ3JlZGVudGlhbCIsIl9zaWduSW4iLCJfcmVhdXRoIiwiX2xpbmsiLCJBYnN0cmFjdFBvcHVwUmVkaXJlY3RPcGVyYXRpb24iLCJwZW5kaW5nUHJvbWlzZSIsImV2ZW50TWFuYWdlciIsIm9uRXhlY3V0aW9uIiwicmVnaXN0ZXJDb25zdW1lciIsIm9uQXV0aEV2ZW50IiwidXJsUmVzcG9uc2UiLCJnZXRJZHBUYXNrIiwib25FcnJvciIsInVucmVnaXN0ZXJBbmRDbGVhblVwIiwidW5yZWdpc3RlckNvbnN1bWVyIiwiY2xlYW5VcCIsIl9QT0xMX1dJTkRPV19DTE9TRV9USU1FT1VUIiwicmVzb2x2ZXJJbnRlcm5hbCIsIlBvcHVwT3BlcmF0aW9uIiwiZXhlY3V0ZU5vdE51bGwiLCJhdXRoV2luZG93IiwicG9sbElkIiwiY3VycmVudFBvcHVwQWN0aW9uIiwiY2FuY2VsIiwiX29wZW5Qb3B1cCIsImFzc29jaWF0ZWRFdmVudCIsIl9vcmlnaW5WYWxpZGF0aW9uIiwiX2lzSWZyYW1lV2ViU3RvcmFnZVN1cHBvcnRlZCIsImlzU3VwcG9ydGVkIiwicG9sbFVzZXJDYW5jZWxsYXRpb24iLCJjbG9zZWQiLCJQRU5ESU5HX1JFRElSRUNUX0tFWSIsInJlZGlyZWN0T3V0Y29tZU1hcCIsIlJlZGlyZWN0QWN0aW9uIiwicmVhZHlPdXRjb21lIiwiaGFzUGVuZGluZ1JlZGlyZWN0IiwiX2dldEFuZENsZWFyUGVuZGluZ1JlZGlyZWN0U3RhdHVzIiwicGVuZGluZ1JlZGlyZWN0S2V5IiwicmVzb2x2ZXJQZXJzaXN0ZW5jZSIsIl9zZXRQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJfY2xlYXJSZWRpcmVjdE91dGNvbWVzIiwiX3NpZ25JbldpdGhSZWRpcmVjdCIsIl9vcGVuUmVkaXJlY3QiLCJfcmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJwcmVwYXJlVXNlckZvclJlZGlyZWN0IiwiX2xpbmtXaXRoUmVkaXJlY3QiLCJfZ2V0UmVkaXJlY3RSZXN1bHQiLCJyZXNvbHZlckV4dGVybiIsIkVWRU5UX0RVUExJQ0FUSU9OX0NBQ0hFX0RVUkFUSU9OX01TIiwiQXV0aEV2ZW50TWFuYWdlciIsImNhY2hlZEV2ZW50VWlkcyIsImNvbnN1bWVycyIsInF1ZXVlZFJlZGlyZWN0RXZlbnQiLCJoYXNIYW5kbGVkUG90ZW50aWFsUmVkaXJlY3QiLCJsYXN0UHJvY2Vzc2VkRXZlbnRUaW1lIiwiYXV0aEV2ZW50Q29uc3VtZXIiLCJpc0V2ZW50Rm9yQ29uc3VtZXIiLCJzZW5kVG9Db25zdW1lciIsInNhdmVFdmVudFRvQ2FjaGUiLCJvbkV2ZW50IiwiaGFzRXZlbnRCZWVuSGFuZGxlZCIsImhhbmRsZWQiLCJjb25zdW1lciIsImlzUmVkaXJlY3RFdmVudCIsImlzTnVsbFJlZGlyZWN0RXZlbnQiLCJldmVudElkTWF0Y2hlcyIsImV2ZW50VWlkIiwidiIsIl9nZXRQcm9qZWN0Q29uZmlnIiwiSVBfQUREUkVTU19SRUdFWCIsIkhUVFBfUkVHRVgiLCJfdmFsaWRhdGVPcmlnaW4iLCJhdXRob3JpemVkRG9tYWlucyIsImRvbWFpbiIsIm1hdGNoRG9tYWluIiwiY3VycmVudFVybCIsImhvc3RuYW1lIiwiVVJMIiwiY2VVcmwiLCJlc2NhcGVkRG9tYWluUGF0dGVybiIsIlJlZ0V4cCIsIk5FVFdPUktfVElNRU9VVCIsInJlc2V0VW5sb2FkZWRHYXBpTW9kdWxlcyIsImJlYWNvbiIsIl9fX2pzbCIsIkgiLCJoaW50IiwiciIsIkwiLCJDUCIsImxvYWRHYXBpIiwibG9hZEdhcGlJZnJhbWUiLCJnYXBpIiwiaWZyYW1lcyIsImdldENvbnRleHQiLCJvbnRpbWVvdXQiLCJJZnJhbWUiLCJjYk5hbWUiLCJjYWNoZWRHQXBpTG9hZGVyIiwiX2xvYWRHYXBpIiwiUElOR19USU1FT1VUIiwiSUZSQU1FX1BBVEgiLCJFTVVMQVRFRF9JRlJBTUVfUEFUSCIsIklGUkFNRV9BVFRSSUJVVEVTIiwiaGVpZ2h0IiwidGFiaW5kZXgiLCJFSURfRlJPTV9BUElIT1NUIiwiZ2V0SWZyYW1lVXJsIiwiZWlkIiwiZnciLCJfb3BlbklmcmFtZSIsImNvbnRleHQiLCJnYXBpMiIsIndoZXJlIiwibWVzc2FnZUhhbmRsZXJzRmlsdGVyIiwiQ1JPU1NfT1JJR0lOX0lGUkFNRVNfRklMVEVSIiwiYXR0cmlidXRlcyIsImRvbnRjbGVhciIsImlmcmFtZSIsInJlc3R5bGUiLCJzZXRIaWRlT25MZWF2ZSIsIm5ldHdvcmtFcnJvciIsIm5ldHdvcmtFcnJvclRpbWVyIiwiY2xlYXJUaW1lckFuZFJlc29sdmUiLCJwaW5nIiwiQkFTRV9QT1BVUF9PUFRJT05TIiwicmVzaXphYmxlIiwic3RhdHVzYmFyIiwidG9vbGJhciIsIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIlRBUkdFVF9CTEFOSyIsIkZJUkVGT1hfRU1QVFlfVVJMIiwiQXV0aFBvcHVwIiwid2luZG93MiIsIl9vcGVuIiwic2NyZWVuIiwiYXZhaWxIZWlnaHQiLCJhdmFpbFdpZHRoIiwic2Nyb2xsYmFycyIsIm9wdGlvbnNTdHJpbmciLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjdW0iLCJvcGVuQXNOZXdXaW5kb3dJT1MiLCJuZXdXaW4iLCJmb2N1cyIsImNsaWNrIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJXSURHRVRfUEFUSCIsIkVNVUxBVE9SX1dJREdFVF9QQVRIIiwiRklSRUJBU0VfQVBQX0NIRUNLX0ZSQUdNRU5UX0lEIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX2dldFJlZGlyZWN0VXJsIiwiYXV0aFR5cGUiLCJyZWRpcmVjdFVybCIsImFkZGl0aW9uYWxQYXJhbXMiLCJpc0VtcHR5IiwidGlkIiwicGFyYW1zRGljdCIsImFwcENoZWNrVG9rZW5GcmFnbWVudCIsImdldEhhbmRsZXJCYXNlIiwiV0VCX1NUT1JBR0VfU1VQUE9SVF9LRVkiLCJCcm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiZXZlbnRNYW5hZ2VycyIsIm9yaWdpblZhbGlkYXRpb25Qcm9taXNlcyIsInByb21pc2UyIiwiaW5pdEFuZEdldE1hbmFnZXIiLCJyZWdpc3RlciIsImlmcmFtZUV2ZW50IiwiYXV0aEV2ZW50Iiwic2VuZCIsIk11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9maW5hbGl6ZUVucm9sbCIsIl9maW5hbGl6ZVNpZ25JbiIsIlBob25lTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2Zyb21DcmVkZW50aWFsIiwicGhvbmVWZXJpZmljYXRpb25JbmZvIiwiRkFDVE9SX0lEIiwiYXNzZXJ0aW9uRm9yRW5yb2xsbWVudCIsIm9uZVRpbWVQYXNzd29yZCIsIlRvdHBNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbVNlY3JldCIsImFzc2VydGlvbkZvclNpZ25JbiIsImVucm9sbG1lbnRJZCIsIl9mcm9tRW5yb2xsbWVudElkIiwiZ2VuZXJhdGVTZWNyZXQiLCJtZmFTZXNzaW9uIiwidG90cEVucm9sbG1lbnRJbmZvIiwiX2Zyb21TdGFydFRvdHBNZmFFbnJvbGxtZW50UmVzcG9uc2UiLCJvdHAiLCJ0b3RwVmVyaWZpY2F0aW9uSW5mbyIsIl9tYWtlVG90cFZlcmlmaWNhdGlvbkluZm8iLCJzZWNyZXRLZXkiLCJoYXNoaW5nQWxnb3JpdGhtIiwiY29kZUxlbmd0aCIsImNvZGVJbnRlcnZhbFNlY29uZHMiLCJlbnJvbGxtZW50Q29tcGxldGlvbkRlYWRsaW5lIiwidG90cFNlc3Npb25JbmZvIiwic2hhcmVkU2VjcmV0S2V5IiwidmVyaWZpY2F0aW9uQ29kZUxlbmd0aCIsInBlcmlvZFNlYyIsImZpbmFsaXplRW5yb2xsbWVudFRpbWUiLCJnZW5lcmF0ZVFyQ29kZVVybCIsImFjY291bnROYW1lIiwiaXNzdWVyIiwidXNlRGVmYXVsdHMiLCJfaXNFbXB0eVN0cmluZyIsImlucHV0IiwiQXV0aEludGVyb3AiLCJpbnRlcm5hbExpc3RlbmVycyIsImdldFVpZCIsImFzc2VydEF1dGhDb25maWd1cmVkIiwiYWRkQXV0aFRva2VuTGlzdGVuZXIiLCJ1bnN1YnNjcmliZSIsInVwZGF0ZVByb2FjdGl2ZVJlZnJlc2giLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsImdldFZlcnNpb25Gb3JQbGF0Zm9ybSIsInJlZ2lzdGVyQXV0aCIsIl9yZWdpc3RlckNvbXBvbmVudCIsImltcG9ydF9jb21wb25lbnQiLCJDb21wb25lbnQiLCJnZXRQcm92aWRlciIsImF1dGhJbnN0YW5jZSIsInNldEluc3RhbnRpYXRpb25Nb2RlIiwic2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2siLCJfaW5zdGFuY2VJZGVudGlmaWVyIiwiX2luc3RhbmNlIiwiYXV0aEludGVybmFsUHJvdmlkZXIiLCJyZWdpc3RlclZlcnNpb24iLCJERUZBVUxUX0lEX1RPS0VOX01BWF9BR0UiLCJhdXRoSWRUb2tlbk1heEFnZSIsImdldEV4cGVyaW1lbnRhbFNldHRpbmciLCJsYXN0UG9zdGVkSWRUb2tlbiIsIm1pbnRDb29raWVGYWN0b3J5IiwiaWRUb2tlblJlc3VsdCIsImlkVG9rZW5BZ2UiLCJnZXRBcHAiLCJhdXRoVG9rZW5TeW5jVXJsIiwibWludENvb2tpZSIsImF1dGhFbXVsYXRvckhvc3QiLCJnZXREZWZhdWx0RW11bGF0b3JIb3N0IiwiaW1wb3J0X3V0aWwyIiwicmVxdWlyZSIsImltcG9ydF9hcHAyIiwiaW1wb3J0X3RzbGliMiIsImltcG9ydF9sb2dnZXIyIiwiaW1wb3J0X2NvbXBvbmVudDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUMsMENBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsa0JBQUEsRUFBQUEs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