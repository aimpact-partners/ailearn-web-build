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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hdXRoLjEuMC4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tb2RlbC9lbnVtX21hcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYXNzZXJ0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9jYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9uYXZpZ2F0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9kZWxheS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZmV0Y2hfcHJvdmlkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9hY2NvdW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2lkX3Rva2VuX3Jlc3VsdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2ludmFsaWRhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Byb2FjdGl2ZV9yZWZyZXNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9tZXRhZGF0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlbG9hZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdG9rZW5fbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2luc3RhbnRpYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbl9tZW1vcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvcGVyc2lzdGVuY2VfdXNlcl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9yZWNhcHRjaGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9sb2FkX2pzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfZW50ZXJwcmlzZV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL21pZGRsZXdhcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9pbml0aWFsaXplLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvYXV0aF9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zbXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYWN0aW9uX2NvZGVfdXJsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmVkZXJhdGVkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmFjZWJvb2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dvb2dsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ2l0aHViLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3R3aXR0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zaWduX3VwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9jcmVkZW50aWFsX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hbm9ueW1vdXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfZXJyb3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9wcm92aWRlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9saW5rX3VubGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlYXV0aGVudGljYXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWN0aW9uX2NvZGVfc2V0dGluZ3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3JlYXRlX2F1dGhfdXJpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvcHJvZmlsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FjY291bnRfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FkZGl0aW9uYWxfdXNlcl9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Nlc3Npb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3VzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9sb2NhbF9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL3Nlc3Npb25fc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9wcm9taXNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3JlY2VpdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZXZlbnRfaWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvc2VuZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2F1dGhfd2luZG93LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3V0aWwvd29ya2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2luZGV4ZWRfZGIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9tb2NrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbG9hZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfdmVyaWZpZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wcm92aWRlcnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fic3RyYWN0X3BvcHVwX3JlZGlyZWN0X29wZXJhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfZXZlbnRfbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL3Byb2plY3RfY29uZmlnL2dldF9wcm9qZWN0X2NvbmZpZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZhbGlkYXRlX29yaWdpbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pZnJhbWUvZ2FwaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pZnJhbWUvaWZyYW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3V0aWwvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9oYW5kbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BvcHVwX3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Fzc2VydGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZmEvYXNzZXJ0aW9ucy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL2Fzc2VydGlvbnMvdG90cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2ZpcmViYXNlX2ludGVybmFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvcmVnaXN0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvZGlzdC9lc20yMDE3L2luZGV4LmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiQWN0aW9uQ29kZU9wZXJhdGlvbiIsIkFjdGlvbkNvZGVVUkwiLCJBdXRoQ3JlZGVudGlhbCIsIkF1dGhFcnJvckNvZGVzIiwiRW1haWxBdXRoQ3JlZGVudGlhbCIsIkVtYWlsQXV0aFByb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJGYWN0b3JJZCIsIkdpdGh1YkF1dGhQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsIk9BdXRoQ3JlZGVudGlhbCIsIk9BdXRoUHJvdmlkZXIiLCJPcGVyYXRpb25UeXBlIiwiUGhvbmVBdXRoQ3JlZGVudGlhbCIsIlBob25lQXV0aFByb3ZpZGVyIiwiUGhvbmVNdWx0aUZhY3RvckdlbmVyYXRvciIsIlByb3ZpZGVySWQiLCJSZWNhcHRjaGFWZXJpZmllciIsIlNBTUxBdXRoUHJvdmlkZXIiLCJTaWduSW5NZXRob2QiLCJUb3RwTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJUb3RwU2VjcmV0IiwiVHdpdHRlckF1dGhQcm92aWRlciIsImFwcGx5QWN0aW9uQ29kZSIsImJlZm9yZUF1dGhTdGF0ZUNoYW5nZWQiLCJicm93c2VyTG9jYWxQZXJzaXN0ZW5jZSIsImJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJicm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwiY2hlY2tBY3Rpb25Db2RlIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJjb25uZWN0QXV0aEVtdWxhdG9yIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZGVidWdFcnJvck1hcCIsImRlbGV0ZVVzZXIiLCJmZXRjaFNpZ25Jbk1ldGhvZHNGb3JFbWFpbCIsImdldEFkZGl0aW9uYWxVc2VySW5mbyIsImdldEF1dGgiLCJnZXRJZFRva2VuIiwiZ2V0SWRUb2tlblJlc3VsdCIsImdldE11bHRpRmFjdG9yUmVzb2x2ZXIiLCJnZXRSZWRpcmVjdFJlc3VsdCIsImluTWVtb3J5UGVyc2lzdGVuY2UiLCJpbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwiaW5pdGlhbGl6ZUF1dGgiLCJpbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiaXNTaWduSW5XaXRoRW1haWxMaW5rIiwibGlua1dpdGhDcmVkZW50aWFsIiwibGlua1dpdGhQaG9uZU51bWJlciIsImxpbmtXaXRoUG9wdXAiLCJsaW5rV2l0aFJlZGlyZWN0IiwibXVsdGlGYWN0b3IiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJvbklkVG9rZW5DaGFuZ2VkIiwicGFyc2VBY3Rpb25Db2RlVVJMIiwicHJvZEVycm9yTWFwIiwicmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbCIsInJlYXV0aGVudGljYXRlV2l0aFBob25lTnVtYmVyIiwicmVhdXRoZW50aWNhdGVXaXRoUG9wdXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInJlbG9hZCIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJzZXRQZXJzaXN0ZW5jZSIsInNpZ25JbkFub255bW91c2x5Iiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbExpbmsiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJzaWduT3V0IiwidW5saW5rIiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGhvbmVOdW1iZXIiLCJ1cGRhdGVQcm9maWxlIiwidXNlRGV2aWNlTGFuZ3VhZ2UiLCJ2ZXJpZnlCZWZvcmVVcGRhdGVFbWFpbCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwibW9kdWxlIiwiUEhPTkUiLCJUT1RQIiwiRkFDRUJPT0siLCJHSVRIVUIiLCJHT09HTEUiLCJQQVNTV09SRCIsIlRXSVRURVIiLCJFTUFJTF9MSU5LIiwiRU1BSUxfUEFTU1dPUkQiLCJMSU5LIiwiUkVBVVRIRU5USUNBVEUiLCJTSUdOX0lOIiwiRU1BSUxfU0lHTklOIiwiUEFTU1dPUkRfUkVTRVQiLCJSRUNPVkVSX0VNQUlMIiwiUkVWRVJUX1NFQ09ORF9GQUNUT1JfQURESVRJT04iLCJWRVJJRllfQU5EX0NIQU5HRV9FTUFJTCIsIlZFUklGWV9FTUFJTCIsIl9kZWJ1Z0Vycm9yTWFwIiwiX3Byb2RFcnJvck1hcCIsIl9ERUZBVUxUX0FVVEhfRVJST1JfRkFDVE9SWSIsImltcG9ydF91dGlsIiwiQURNSU5fT05MWV9PUEVSQVRJT04iLCJBUkdVTUVOVF9FUlJPUiIsIkFQUF9OT1RfQVVUSE9SSVpFRCIsIkFQUF9OT1RfSU5TVEFMTEVEIiwiQ0FQVENIQV9DSEVDS19GQUlMRUQiLCJDT0RFX0VYUElSRUQiLCJDT1JET1ZBX05PVF9SRUFEWSIsIkNPUlNfVU5TVVBQT1JURUQiLCJDUkVERU5USUFMX0FMUkVBRFlfSU5fVVNFIiwiQ1JFREVOVElBTF9NSVNNQVRDSCIsIkNSRURFTlRJQUxfVE9PX09MRF9MT0dJTl9BR0FJTiIsIkRFUEVOREVOVF9TREtfSU5JVF9CRUZPUkVfQVVUSCIsIkRZTkFNSUNfTElOS19OT1RfQUNUSVZBVEVEIiwiRU1BSUxfQ0hBTkdFX05FRURTX1ZFUklGSUNBVElPTiIsIkVNQUlMX0VYSVNUUyIsIkVNVUxBVE9SX0NPTkZJR19GQUlMRUQiLCJFWFBJUkVEX09PQl9DT0RFIiwiRVhQSVJFRF9QT1BVUF9SRVFVRVNUIiwiSU5URVJOQUxfRVJST1IiLCJJTlZBTElEX0FQSV9LRVkiLCJJTlZBTElEX0FQUF9DUkVERU5USUFMIiwiSU5WQUxJRF9BUFBfSUQiLCJJTlZBTElEX0FVVEgiLCJJTlZBTElEX0FVVEhfRVZFTlQiLCJJTlZBTElEX0NFUlRfSEFTSCIsIklOVkFMSURfQ09ERSIsIklOVkFMSURfQ09OVElOVUVfVVJJIiwiSU5WQUxJRF9DT1JET1ZBX0NPTkZJR1VSQVRJT04iLCJJTlZBTElEX0NVU1RPTV9UT0tFTiIsIklOVkFMSURfRFlOQU1JQ19MSU5LX0RPTUFJTiIsIklOVkFMSURfRU1BSUwiLCJJTlZBTElEX0VNVUxBVE9SX1NDSEVNRSIsIklOVkFMSURfSURQX1JFU1BPTlNFIiwiSU5WQUxJRF9NRVNTQUdFX1BBWUxPQUQiLCJJTlZBTElEX01GQV9TRVNTSU9OIiwiSU5WQUxJRF9PQVVUSF9DTElFTlRfSUQiLCJJTlZBTElEX09BVVRIX1BST1ZJREVSIiwiSU5WQUxJRF9PT0JfQ09ERSIsIklOVkFMSURfT1JJR0lOIiwiSU5WQUxJRF9QQVNTV09SRCIsIklOVkFMSURfUEVSU0lTVEVOQ0UiLCJJTlZBTElEX1BIT05FX05VTUJFUiIsIklOVkFMSURfUFJPVklERVJfSUQiLCJJTlZBTElEX1JFQ0lQSUVOVF9FTUFJTCIsIklOVkFMSURfU0VOREVSIiwiSU5WQUxJRF9TRVNTSU9OX0lORk8iLCJJTlZBTElEX1RFTkFOVF9JRCIsIk1GQV9JTkZPX05PVF9GT1VORCIsIk1GQV9SRVFVSVJFRCIsIk1JU1NJTkdfQU5EUk9JRF9QQUNLQUdFX05BTUUiLCJNSVNTSU5HX0FQUF9DUkVERU5USUFMIiwiTUlTU0lOR19BVVRIX0RPTUFJTiIsIk1JU1NJTkdfQ09ERSIsIk1JU1NJTkdfQ09OVElOVUVfVVJJIiwiTUlTU0lOR19JRlJBTUVfU1RBUlQiLCJNSVNTSU5HX0lPU19CVU5ETEVfSUQiLCJNSVNTSU5HX09SX0lOVkFMSURfTk9OQ0UiLCJNSVNTSU5HX01GQV9JTkZPIiwiTUlTU0lOR19NRkFfU0VTU0lPTiIsIk1JU1NJTkdfUEhPTkVfTlVNQkVSIiwiTUlTU0lOR19TRVNTSU9OX0lORk8iLCJNT0RVTEVfREVTVFJPWUVEIiwiTkVFRF9DT05GSVJNQVRJT04iLCJORVRXT1JLX1JFUVVFU1RfRkFJTEVEIiwiTlVMTF9VU0VSIiwiTk9fQVVUSF9FVkVOVCIsIk5PX1NVQ0hfUFJPVklERVIiLCJPUEVSQVRJT05fTk9UX0FMTE9XRUQiLCJPUEVSQVRJT05fTk9UX1NVUFBPUlRFRCIsIlBPUFVQX0JMT0NLRUQiLCJQT1BVUF9DTE9TRURfQllfVVNFUiIsIlBST1ZJREVSX0FMUkVBRFlfTElOS0VEIiwiUVVPVEFfRVhDRUVERUQiLCJSRURJUkVDVF9DQU5DRUxMRURfQllfVVNFUiIsIlJFRElSRUNUX09QRVJBVElPTl9QRU5ESU5HIiwiUkVKRUNURURfQ1JFREVOVElBTCIsIlNFQ09ORF9GQUNUT1JfQUxSRUFEWV9FTlJPTExFRCIsIlNFQ09ORF9GQUNUT1JfTElNSVRfRVhDRUVERUQiLCJURU5BTlRfSURfTUlTTUFUQ0giLCJUSU1FT1VUIiwiVE9LRU5fRVhQSVJFRCIsIlRPT19NQU5ZX0FUVEVNUFRTX1RSWV9MQVRFUiIsIlVOQVVUSE9SSVpFRF9ET01BSU4iLCJVTlNVUFBPUlRFRF9GSVJTVF9GQUNUT1IiLCJVTlNVUFBPUlRFRF9QRVJTSVNURU5DRSIsIlVOU1VQUE9SVEVEX1RFTkFOVF9PUEVSQVRJT04iLCJVTlZFUklGSUVEX0VNQUlMIiwiVVNFUl9DQU5DRUxMRUQiLCJVU0VSX0RFTEVURUQiLCJVU0VSX0RJU0FCTEVEIiwiVVNFUl9NSVNNQVRDSCIsIlVTRVJfU0lHTkVEX09VVCIsIldFQUtfUEFTU1dPUkQiLCJXRUJfU1RPUkFHRV9VTlNVUFBPUlRFRCIsIkFMUkVBRFlfSU5JVElBTElaRUQiLCJSRUNBUFRDSEFfTk9UX0VOQUJMRUQiLCJNSVNTSU5HX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfQUNUSU9OIiwiTUlTU0lOR19DTElFTlRfVFlQRSIsIk1JU1NJTkdfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRVFfVFlQRSIsImxvZ0NsaWVudCIsImltcG9ydF9sb2dnZXIiLCJfbG9nV2FybiIsIm1zZyIsImFyZ3MiLCJsb2dMZXZlbCIsIldBUk4iLCJ3YXJuIiwiaW1wb3J0X2FwcCIsIl9sb2dFcnJvciIsIkVSUk9SIiwiZXJyb3IiLCJfZmFpbCIsImF1dGhPckNvZGUiLCJyZXN0IiwiY3JlYXRlRXJyb3JJbnRlcm5hbCIsIl9jcmVhdGVFcnJvciIsIl9lcnJvcldpdGhDdXN0b21NZXNzYWdlIiwiYXV0aCIsImNvZGUiLCJtZXNzYWdlIiwiZXJyb3JNYXAiLCJPYmplY3QiLCJmYWN0b3J5IiwiY3JlYXRlIiwiYXBwTmFtZSIsIm5hbWUiLCJfYXNzZXJ0SW5zdGFuY2VPZiIsIm9iamVjdCIsImluc3RhbmNlIiwiY29uc3RydWN0b3JJbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiZnVsbFBhcmFtcyIsInNsaWNlIiwiX2Vycm9yRmFjdG9yeSIsIl9hc3NlcnQiLCJhc3NlcnRpb24iLCJkZWJ1Z0ZhaWwiLCJmYWlsdXJlIiwiRXJyb3IiLCJfZ2V0Q3VycmVudFVybCIsInNlbGYiLCJfYSIsImxvY2F0aW9uIiwiaHJlZiIsIl9pc0h0dHBPckh0dHBzIiwiX2dldEN1cnJlbnRTY2hlbWUiLCJwcm90b2NvbCIsIl9pc09ubGluZSIsIm5hdmlnYXRvciIsIm9uTGluZSIsIl9nZXRVc2VyTGFuZ3VhZ2UiLCJuYXZpZ2F0b3JMYW5ndWFnZSIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiRGVsYXkiLCJzaG9ydERlbGF5IiwibG9uZ0RlbGF5IiwiZGVidWdBc3NlcnQiLCJpc01vYmlsZSIsImdldCIsIk1hdGgiLCJtaW4iLCJjb25maWciLCJwYXRoIiwiZW11bGF0b3IiLCJ1cmwiLCJzdGFydHNXaXRoIiwiRmV0Y2hQcm92aWRlciIsImluaXRpYWxpemUiLCJmZXRjaEltcGwiLCJoZWFkZXJzSW1wbCIsInJlc3BvbnNlSW1wbCIsImZldGNoIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJyZXNwb25zZSIsIlJlc3BvbnNlIiwiU0VSVkVSX0VSUk9SX01BUCIsIkRFRkFVTFRfQVBJX1RJTUVPVVRfTVMiLCJyZXF1ZXN0IiwidGVuYW50SWQiLCJfcGVyZm9ybUFwaVJlcXVlc3QiLCJtZXRob2QiLCJjdXN0b21FcnJvck1hcCIsIl9wZXJmb3JtRmV0Y2hXaXRoRXJyb3JIYW5kbGluZyIsImJvZHkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJrZXkiLCJhcGlLZXkiLCJfZ2V0QWRkaXRpb25hbEhlYWRlcnMiLCJsYW5ndWFnZUNvZGUiLCJfZ2V0RmluYWxUYXJnZXQiLCJhcGlIb3N0IiwicmVmZXJyZXJQb2xpY3kiLCJmZXRjaEZuIiwiX2NhbkluaXRFbXVsYXRvciIsIm5ldHdvcmtUaW1lb3V0IiwiTmV0d29ya1RpbWVvdXQiLCJQcm9taXNlIiwicmFjZSIsInByb21pc2UiLCJjbGVhck5ldHdvcmtUaW1lb3V0IiwianNvbiIsIl9tYWtlVGFnZ2VkRXJyb3IiLCJvayIsImVycm9yTWVzc2FnZSIsInNlcnZlckVycm9yQ29kZSIsInNlcnZlckVycm9yTWVzc2FnZSIsInNwbGl0IiwiYXV0aEVycm9yIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiZSIsIlN0cmluZyIsIl9wZXJmb3JtU2lnbkluUmVxdWVzdCIsInNlcnZlclJlc3BvbnNlIiwiX3NlcnZlclJlc3BvbnNlIiwiaG9zdCIsImJhc2UiLCJhcGlTY2hlbWUiLCJfZW11bGF0b3JVcmwiLCJ0aW1lciIsIl8iLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZXJyb3JQYXJhbXMiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiY3VzdG9tRGF0YSIsIl90b2tlblJlc3BvbnNlIiwiZGVsZXRlQWNjb3VudCIsImRlbGV0ZUxpbmtlZEFjY291bnRzIiwiZ2V0QWNjb3VudEluZm8iLCJ1dGNUaW1lc3RhbXBUb0RhdGVTdHJpbmciLCJ1dGNUaW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsIk51bWJlciIsImlzTmFOIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwidXNlciIsImZvcmNlUmVmcmVzaCIsInVzZXJJbnRlcm5hbCIsInRva2VuIiwiY2xhaW1zIiwiX3BhcnNlVG9rZW4iLCJleHAiLCJhdXRoX3RpbWUiLCJpYXQiLCJmaXJlYmFzZSIsInNpZ25JblByb3ZpZGVyIiwiYXV0aFRpbWUiLCJzZWNvbmRzU3RyaW5nVG9NaWxsaXNlY29uZHMiLCJpc3N1ZWRBdFRpbWUiLCJleHBpcmF0aW9uVGltZSIsInNpZ25JblNlY29uZEZhY3RvciIsInNlY29uZHMiLCJhbGdvcml0aG0iLCJwYXlsb2FkIiwic2lnbmF0dXJlIiwiZGVjb2RlZCIsInBhcnNlIiwidG9TdHJpbmciLCJfdG9rZW5FeHBpcmVzSW4iLCJwYXJzZWRUb2tlbiIsIl9sb2dvdXRJZkludmFsaWRhdGVkIiwiYnlwYXNzQXV0aFN0YXRlIiwiaXNVc2VySW52YWxpZGF0ZWQiLCJjdXJyZW50VXNlciIsIlByb2FjdGl2ZVJlZnJlc2giLCJpc1J1bm5pbmciLCJ0aW1lcklkIiwiX3N0YXJ0Iiwic2NoZWR1bGUiLCJfc3RvcCIsImdldEludGVydmFsIiwid2FzRXJyb3IiLCJpbnRlcnZhbCIsImVycm9yQmFja29mZiIsImV4cFRpbWUiLCJzdHNUb2tlbk1hbmFnZXIiLCJub3ciLCJtYXgiLCJpdGVyYXRpb24iLCJVc2VyTWV0YWRhdGEiLCJjcmVhdGVkQXQiLCJsYXN0TG9naW5BdCIsIl9pbml0aWFsaXplVGltZSIsImxhc3RTaWduSW5UaW1lIiwiY3JlYXRpb25UaW1lIiwiX2NvcHkiLCJtZXRhZGF0YSIsInRvSlNPTiIsIl9yZWxvYWRXaXRob3V0U2F2aW5nIiwiaWRUb2tlbiIsInVzZXJzIiwibGVuZ3RoIiwiY29yZUFjY291bnQiLCJfbm90aWZ5UmVsb2FkTGlzdGVuZXIiLCJuZXdQcm92aWRlckRhdGEiLCJwcm92aWRlclVzZXJJbmZvIiwiZXh0cmFjdFByb3ZpZGVyRGF0YSIsInByb3ZpZGVyRGF0YSIsIm1lcmdlUHJvdmlkZXJEYXRhIiwib2xkSXNBbm9ueW1vdXMiLCJpc0Fub255bW91cyIsIm5ld0lzQW5vbnltb3VzIiwicGFzc3dvcmRIYXNoIiwidXBkYXRlcyIsInVpZCIsImxvY2FsSWQiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwicGhvdG9VcmwiLCJlbWFpbFZlcmlmaWVkIiwiYXNzaWduIiwiX3BlcnNpc3RVc2VySWZDdXJyZW50IiwiX25vdGlmeUxpc3RlbmVyc0lmQ3VycmVudCIsIm9yaWdpbmFsIiwibmV3RGF0YSIsImRlZHVwZWQiLCJmaWx0ZXIiLCJvIiwic29tZSIsIm4iLCJwcm92aWRlcklkIiwicHJvdmlkZXJzIiwibWFwIiwicHJvdmlkZXIiLCJpbXBvcnRfdHNsaWIiLCJyYXdJZCIsInJlcXVlc3RTdHNUb2tlbiIsInJlZnJlc2hUb2tlbiIsInRva2VuQXBpSG9zdCIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlc0luIiwiZXhwaXJlc19pbiIsInJlZnJlc2hfdG9rZW4iLCJTdHNUb2tlbk1hbmFnZXIiLCJpc0V4cGlyZWQiLCJ1cGRhdGVGcm9tU2VydmVyUmVzcG9uc2UiLCJ1cGRhdGVUb2tlbnNBbmRFeHBpcmF0aW9uIiwiZ2V0VG9rZW4iLCJyZWZyZXNoIiwiY2xlYXJSZWZyZXNoVG9rZW4iLCJvbGRUb2tlbiIsImV4cGlyZXNJblNlYyIsImZyb21KU09OIiwibWFuYWdlciIsIl9hc3NpZ24iLCJfY2xvbmUiLCJfcGVyZm9ybVJlZnJlc2giLCJhc3NlcnRTdHJpbmdPclVuZGVmaW5lZCIsIlVzZXJJbXBsIiwib3B0IiwicmVsb2FkVXNlckluZm8iLCJyZWxvYWRMaXN0ZW5lciIsInVzZXJJbmZvIiwibmV3VXNlciIsIl9vblJlbG9hZCIsImNhbGxiYWNrIiwiX3N0YXJ0UHJvYWN0aXZlUmVmcmVzaCIsInByb2FjdGl2ZVJlZnJlc2giLCJfc3RvcFByb2FjdGl2ZVJlZnJlc2giLCJfdXBkYXRlVG9rZW5zSWZOZWNlc3NhcnkiLCJ0b2tlbnNSZWZyZXNoZWQiLCJkZWxldGUiLCJfcmVkaXJlY3RFdmVudElkIiwiX2Zyb21KU09OIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJfZiIsIl9nIiwiX2giLCJwbGFpbk9iamVjdFRva2VuTWFuYWdlciIsIkFycmF5IiwiaXNBcnJheSIsIl9mcm9tSWRUb2tlblJlc3BvbnNlIiwiaWRUb2tlblJlc3BvbnNlIiwiaW5zdGFuY2VDYWNoZSIsIk1hcCIsIl9nZXRJbnN0YW5jZSIsImNscyIsIkZ1bmN0aW9uIiwic2V0IiwiSW5NZW1vcnlQZXJzaXN0ZW5jZSIsInN0b3JhZ2UiLCJfaXNBdmFpbGFibGUiLCJfc2V0IiwidmFsdWUiLCJfZ2V0IiwiX3JlbW92ZSIsIl9hZGRMaXN0ZW5lciIsIl9rZXkiLCJfbGlzdGVuZXIiLCJfcmVtb3ZlTGlzdGVuZXIiLCJ0eXBlIiwiX3BlcnNpc3RlbmNlS2V5TmFtZSIsIlBlcnNpc3RlbmNlVXNlck1hbmFnZXIiLCJwZXJzaXN0ZW5jZSIsInVzZXJLZXkiLCJmdWxsVXNlcktleSIsImZ1bGxQZXJzaXN0ZW5jZUtleSIsImJvdW5kRXZlbnRIYW5kbGVyIiwiX29uU3RvcmFnZUV2ZW50IiwiYmluZCIsInNldEN1cnJlbnRVc2VyIiwiZ2V0Q3VycmVudFVzZXIiLCJibG9iIiwicmVtb3ZlQ3VycmVudFVzZXIiLCJzYXZlUGVyc2lzdGVuY2VGb3JSZWRpcmVjdCIsIm5ld1BlcnNpc3RlbmNlIiwicGVyc2lzdGVuY2VIaWVyYXJjaHkiLCJhdmFpbGFibGVQZXJzaXN0ZW5jZXMiLCJhbGwiLCJzZWxlY3RlZFBlcnNpc3RlbmNlIiwidXNlclRvTWlncmF0ZSIsIm1pZ3JhdGlvbkhpZXJhcmNoeSIsInAiLCJfc2hvdWxkQWxsb3dNaWdyYXRpb24iLCJfZ2V0QnJvd3Nlck5hbWUiLCJ1c2VyQWdlbnQiLCJ1YSIsImluY2x1ZGVzIiwiX2lzSUVNb2JpbGUiLCJfaXNGaXJlZm94IiwiX2lzQmxhY2tCZXJyeSIsIl9pc1dlYk9TIiwiX2lzU2FmYXJpIiwiX2lzQ2hyb21lSU9TIiwiX2lzQW5kcm9pZCIsInJlIiwibWF0Y2hlcyIsIm1hdGNoIiwidGVzdCIsIl9pc0lPUyIsIl9pc0lPUzdPcjgiLCJfaXNJT1NTdGFuZGFsb25lIiwid2luZG93IiwiX2lzSUUxMCIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiX2lzSWZyYW1lIiwidG9wIiwiX2dldENsaWVudFZlcnNpb24iLCJjbGllbnRQbGF0Zm9ybSIsImZyYW1ld29ya3MiLCJyZXBvcnRlZFBsYXRmb3JtIiwicmVwb3J0ZWRGcmFtZXdvcmtzIiwiam9pbiIsImdldFJlY2FwdGNoYVBhcmFtcyIsInJlY2FwdGNoYVNpdGVLZXkiLCJnZXRSZWNhcHRjaGFDb25maWciLCJpc1YyIiwiZ3JlY2FwdGNoYSIsImdldFJlc3BvbnNlIiwiaXNFbnRlcnByaXNlIiwiZW50ZXJwcmlzZSIsIlJlY2FwdGNoYUNvbmZpZyIsInNpdGVLZXkiLCJlbWFpbFBhc3N3b3JkRW5hYmxlZCIsInJlY2FwdGNoYUtleSIsInJlY2FwdGNoYUVuZm9yY2VtZW50U3RhdGUiLCJlbmZvcmNlbWVudFN0YXRlIiwiZ2V0U2NyaXB0UGFyZW50RWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiX2xvYWRKUyIsInJlc29sdmUiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJvbmVycm9yIiwiY2hhcnNldCIsImFwcGVuZENoaWxkIiwiX2dlbmVyYXRlQ2FsbGJhY2tOYW1lIiwicHJlZml4IiwiZmxvb3IiLCJyYW5kb20iLCJSRUNBUFRDSEFfRU5URVJQUklTRV9VUkwiLCJSRUNBUFRDSEFfRU5URVJQUklTRV9WRVJJRklFUl9UWVBFIiwiRkFLRV9UT0tFTiIsIlJlY2FwdGNoYUVudGVycHJpc2VWZXJpZmllciIsImF1dGhFeHRlcm4iLCJfY2FzdEF1dGgiLCJ2ZXJpZnkiLCJhY3Rpb24iLCJyZXRyaWV2ZVNpdGVLZXkiLCJfYWdlbnRSZWNhcHRjaGFDb25maWciLCJfdGVuYW50UmVjYXB0Y2hhQ29uZmlncyIsImNsaWVudFR5cGUiLCJ2ZXJzaW9uIiwidGhlbiIsImNhdGNoIiwicmV0cmlldmVSZWNhcHRjaGFUb2tlbiIsInJlYWR5IiwiZXhlY3V0ZSIsImpzSGVscGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuX2xvYWRKUyIsImluamVjdFJlY2FwdGNoYUZpZWxkcyIsImNhcHRjaGFSZXNwIiwidmVyaWZpZXIiLCJjYXB0Y2hhUmVzcG9uc2UiLCJuZXdSZXF1ZXN0IiwiQXV0aE1pZGRsZXdhcmVRdWV1ZSIsInF1ZXVlIiwicHVzaENhbGxiYWNrIiwib25BYm9ydCIsIndyYXBwZWRDYWxsYmFjayIsInJlc3VsdCIsInB1c2giLCJpbmRleCIsInJ1bk1pZGRsZXdhcmUiLCJuZXh0VXNlciIsIm9uQWJvcnRTdGFjayIsImJlZm9yZVN0YXRlQ2FsbGJhY2siLCJyZXZlcnNlIiwib3JpZ2luYWxNZXNzYWdlIiwiQXV0aEltcGwiLCJhcHAiLCJoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIiLCJhcHBDaGVja1NlcnZpY2VQcm92aWRlciIsImVtdWxhdG9yQ29uZmlnIiwiU3Vic2NyaXB0aW9uIiwicmVkaXJlY3RVc2VyIiwiaXNQcm9hY3RpdmVSZWZyZXNoRW5hYmxlZCIsIl9pc0luaXRpYWxpemVkIiwiX2RlbGV0ZWQiLCJfaW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiX3BvcHVwUmVkaXJlY3RSZXNvbHZlciIsImxhc3ROb3RpZmllZFVpZCIsImFwcFZlcmlmaWNhdGlvbkRpc2FibGVkRm9yVGVzdGluZyIsImNsaWVudFZlcnNpb24iLCJzZGtDbGllbnRWZXJzaW9uIiwiX2luaXRpYWxpemVXaXRoUGVyc2lzdGVuY2UiLCJwb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJwZXJzaXN0ZW5jZU1hbmFnZXIiLCJfc2hvdWxkSW5pdFByb2FjdGl2ZWx5IiwiX2luaXRpYWxpemUiLCJpbml0aWFsaXplQ3VycmVudFVzZXIiLCJhc3NlcnRlZFBlcnNpc3RlbmNlIiwiX2N1cnJlbnRVc2VyIiwiX3VwZGF0ZUN1cnJlbnRVc2VyIiwicHJldmlvdXNseVN0b3JlZFVzZXIiLCJmdXR1cmVDdXJyZW50VXNlciIsIm5lZWRzVG9jaGVja01pZGRsZXdhcmUiLCJhdXRoRG9tYWluIiwiZ2V0T3JJbml0UmVkaXJlY3RQZXJzaXN0ZW5jZU1hbmFnZXIiLCJyZWRpcmVjdFVzZXJFdmVudElkIiwic3RvcmVkVXNlckV2ZW50SWQiLCJ0cnlSZWRpcmVjdFNpZ25JbiIsImRpcmVjdGx5U2V0Q3VycmVudFVzZXIiLCJiZWZvcmVTdGF0ZVF1ZXVlIiwiX292ZXJyaWRlUmVkaXJlY3RSZXN1bHQiLCJyZWxvYWRBbmRTZXRDdXJyZW50VXNlck9yQ2xlYXIiLCJyZWRpcmVjdFJlc29sdmVyIiwiX2NvbXBsZXRlUmVkaXJlY3RGbiIsIl9zZXRSZWRpcmVjdFVzZXIiLCJfZGVsZXRlIiwidXNlckV4dGVybiIsInNraXBCZWZvcmVTdGF0ZUNhbGxiYWNrcyIsIm5vdGlmeUF1dGhMaXN0ZW5lcnMiLCJyZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsIl9nZXRSZWNhcHRjaGFDb25maWciLCJfZ2V0UGVyc2lzdGVuY2UiLCJfdXBkYXRlRXJyb3JNYXAiLCJuZXh0T3JPYnNlcnZlciIsImNvbXBsZXRlZCIsInJlZ2lzdGVyU3RhdGVMaXN0ZW5lciIsImF1dGhTdGF0ZVN1YnNjcmlwdGlvbiIsImlkVG9rZW5TdWJzY3JpcHRpb24iLCJyZWRpcmVjdE1hbmFnZXIiLCJyZXNvbHZlciIsIl9yZWRpcmVjdFBlcnNpc3RlbmNlIiwiX3JlZGlyZWN0VXNlckZvcklkIiwiaWQiLCJuZXh0IiwiY3VycmVudFVpZCIsInN1YnNjcmlwdGlvbiIsImNiIiwiYWRkT2JzZXJ2ZXIiLCJvcGVyYXRpb25zIiwiX2xvZ0ZyYW1ld29yayIsImZyYW1ld29yayIsInNvcnQiLCJfZ2V0RnJhbWV3b3JrcyIsIm9wdGlvbnMiLCJhcHBJZCIsImhlYXJ0YmVhdHNIZWFkZXIiLCJnZXRJbW1lZGlhdGUiLCJvcHRpb25hbCIsImFwcENoZWNrVG9rZW4iLCJfZ2V0QXBwQ2hlY2tUb2tlbiIsImFwcENoZWNrVG9rZW5SZXN1bHQiLCJvYnNlcnZlciIsImRlcHMiLCJpc0luaXRpYWxpemVkIiwiaW5pdGlhbE9wdGlvbnMiLCJnZXRPcHRpb25zIiwiaGllcmFyY2h5IiwiYXV0aEludGVybmFsIiwiZGlzYWJsZVdhcm5pbmdzIiwiZXh0cmFjdFByb3RvY29sIiwicG9ydCIsImV4dHJhY3RIb3N0QW5kUG9ydCIsInBvcnRTdHIiLCJzZXR0aW5ncyIsImZyZWV6ZSIsImVtaXRFbXVsYXRvcldhcm5pbmciLCJwcm90b2NvbEVuZCIsImluZGV4T2YiLCJzdWJzdHIiLCJhdXRob3JpdHkiLCJleGVjIiwiaG9zdEFuZFBvcnQiLCJwb3AiLCJicmFja2V0ZWRJUHY2IiwicGFyc2VQb3J0IiwiYXR0YWNoQmFubmVyIiwic3R5Iiwic3R5bGUiLCJpbm5lclRleHQiLCJwb3NpdGlvbiIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJib3R0b20iLCJsZWZ0IiwibWFyZ2luIiwiekluZGV4IiwidGV4dEFsaWduIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29uc29sZSIsImluZm8iLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpZ25Jbk1ldGhvZCIsIl9nZXRJZFRva2VuUmVzcG9uc2UiLCJfYXV0aCIsIl9saW5rVG9JZFRva2VuIiwiX2lkVG9rZW4iLCJfZ2V0UmVhdXRoZW50aWNhdGlvblJlc29sdmVyIiwicmVzZXRQYXNzd29yZCIsInVwZGF0ZUVtYWlsUGFzc3dvcmQiLCJzaWduSW5XaXRoUGFzc3dvcmQiLCJzZW5kT29iQ29kZSIsInZlcmlmeUFuZENoYW5nZUVtYWlsIiwic2lnbkluV2l0aEVtYWlsTGlua0ZvckxpbmtpbmciLCJfZW1haWwiLCJfcGFzc3dvcmQiLCJfdGVuYW50SWQiLCJfZnJvbUVtYWlsQW5kUGFzc3dvcmQiLCJwYXNzd29yZCIsIl9mcm9tRW1haWxBbmRDb2RlIiwib29iQ29kZSIsIm9iaiIsInJldHVyblNlY3VyZVRva2VuIiwicmVxdWVzdFdpdGhSZWNhcHRjaGEiLCJsb2ciLCJzaWduSW5XaXRoSWRwIiwiSURQX1JFUVVFU1RfVVJJIiwicGVuZGluZ1Rva2VuIiwiX2Zyb21QYXJhbXMiLCJjcmVkIiwibm9uY2UiLCJvYXV0aFRva2VuIiwib2F1dGhUb2tlblNlY3JldCIsInNlY3JldCIsImJ1aWxkUmVxdWVzdCIsImF1dG9DcmVhdGUiLCJyZXF1ZXN0VXJpIiwicG9zdEJvZHkiLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlIiwiX2FkZFRpZElmTmVjZXNzYXJ5IiwidGVtcG9yYXJ5UHJvb2YiLCJWRVJJRllfUEhPTkVfTlVNQkVSX0ZPUl9FWElTVElOR19FUlJPUl9NQVBfIiwidmVyaWZ5UGhvbmVOdW1iZXJGb3JFeGlzdGluZyIsImFwaVJlcXVlc3QiLCJvcGVyYXRpb24iLCJfZnJvbVZlcmlmaWNhdGlvbiIsInZlcmlmaWNhdGlvbklkIiwidmVyaWZpY2F0aW9uQ29kZSIsIl9mcm9tVG9rZW5SZXNwb25zZSIsIl9tYWtlVmVyaWZpY2F0aW9uUmVxdWVzdCIsInNlc3Npb25JbmZvIiwicGFyc2VNb2RlIiwibW9kZSIsInBhcnNlRGVlcExpbmsiLCJsaW5rIiwiZG91YmxlRGVlcExpbmsiLCJpT1NEZWVwTGluayIsImlPU0RvdWJsZURlZXBMaW5rIiwiYWN0aW9uTGluayIsInNlYXJjaFBhcmFtcyIsImNvbnRpbnVlVXJsIiwicGFyc2VMaW5rIiwiUFJPVklERVJfSUQiLCJjcmVkZW50aWFsIiwiY3JlZGVudGlhbFdpdGhMaW5rIiwiZW1haWxMaW5rIiwiYWN0aW9uQ29kZVVybCIsIkZlZGVyYXRlZEF1dGhQcm92aWRlciIsImRlZmF1bHRMYW5ndWFnZUNvZGUiLCJjdXN0b21QYXJhbWV0ZXJzIiwic2V0RGVmYXVsdExhbmd1YWdlIiwic2V0Q3VzdG9tUGFyYW1ldGVycyIsImN1c3RvbU9BdXRoUGFyYW1ldGVycyIsImdldEN1c3RvbVBhcmFtZXRlcnMiLCJCYXNlT0F1dGhQcm92aWRlciIsInNjb3BlcyIsImFkZFNjb3BlIiwic2NvcGUiLCJnZXRTY29wZXMiLCJjcmVkZW50aWFsRnJvbUpTT04iLCJfY3JlZGVudGlhbCIsInJhd05vbmNlIiwiY3JlZGVudGlhbEZyb21SZXN1bHQiLCJ1c2VyQ3JlZGVudGlhbCIsIm9hdXRoQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJjcmVkZW50aWFsRnJvbUVycm9yIiwidG9rZW5SZXNwb25zZSIsIm9hdXRoSWRUb2tlbiIsIm9hdXRoQWNjZXNzVG9rZW4iLCJGQUNFQk9PS19TSUdOX0lOX01FVEhPRCIsImNyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiR09PR0xFX1NJR05fSU5fTUVUSE9EIiwiR0lUSFVCX1NJR05fSU5fTUVUSE9EIiwiU0FNTEF1dGhDcmVkZW50aWFsIiwiX2NyZWF0ZSIsIlNBTUxfUFJPVklERVJfUFJFRklYIiwic2FtbENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiVFdJVFRFUl9TSUdOX0lOX01FVEhPRCIsInNpZ25VcCIsIlVzZXJDcmVkZW50aWFsSW1wbCIsIm9wZXJhdGlvblR5cGUiLCJwcm92aWRlcklkRm9yUmVzcG9uc2UiLCJ1c2VyQ3JlZCIsIl9mb3JPcGVyYXRpb24iLCJNdWx0aUZhY3RvckVycm9yIiwic2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJfZnJvbUVycm9yQW5kT3BlcmF0aW9uIiwiX3Byb2Nlc3NDcmVkZW50aWFsU2F2aW5nTWZhQ29udGV4dElmTmVjZXNzYXJ5IiwiaWRUb2tlblByb3ZpZGVyIiwicHJvdmlkZXJEYXRhQXNOYW1lcyIsIlNldCIsInBpZCIsIl9hc3NlcnRMaW5rZWRTdGF0dXMiLCJkZWxldGVQcm92aWRlciIsInByb3ZpZGVyc0xlZnQiLCJwZCIsImhhcyIsIl9saW5rIiwiZXhwZWN0ZWQiLCJwcm92aWRlcklkcyIsIl9yZWF1dGhlbnRpY2F0ZSIsInBhcnNlZCIsInN1YiIsIl9zaWduSW5XaXRoQ3JlZGVudGlhbCIsImN1c3RvbVRva2VuIiwiZ2V0SWRUb2tlblJlc3BvbnNlIiwiTXVsdGlGYWN0b3JJbmZvSW1wbCIsImZhY3RvcklkIiwibWZhRW5yb2xsbWVudElkIiwiZW5yb2xsbWVudFRpbWUiLCJlbnJvbGxlZEF0IiwiX2Zyb21TZXJ2ZXJSZXNwb25zZSIsImVucm9sbG1lbnQiLCJQaG9uZU11bHRpRmFjdG9ySW5mb0ltcGwiLCJUb3RwTXVsdGlGYWN0b3JJbmZvSW1wbCIsInBob25lSW5mbyIsIl9zZXRBY3Rpb25Db2RlU2V0dGluZ3NPblJlcXVlc3QiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJkeW5hbWljTGlua0RvbWFpbiIsImNhbkhhbmRsZUNvZGVJbkFwcCIsImhhbmRsZUNvZGVJbkFwcCIsImlPUyIsImJ1bmRsZUlkIiwiaU9TQnVuZGxlSWQiLCJhbmRyb2lkIiwicGFja2FnZU5hbWUiLCJhbmRyb2lkSW5zdGFsbEFwcCIsImluc3RhbGxBcHAiLCJhbmRyb2lkTWluaW11bVZlcnNpb25Db2RlIiwibWluaW11bVZlcnNpb24iLCJhbmRyb2lkUGFja2FnZU5hbWUiLCJyZXF1ZXN0VHlwZSIsImF1dGhlbnRpY2F0aW9uLnNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJhdXRoZW50aWNhdGlvblxyXG4gICAgICAgICAgICAuc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsIm5ld1Bhc3N3b3JkIiwiYWNjb3VudC5yZXNldFBhc3N3b3JkIiwiYWNjb3VudC5hcHBseUFjdGlvbkNvZGUiLCJhdXRoTW9kdWxhciIsIm5ld0VtYWlsIiwibWZhSW5mbyIsIm11bHRpRmFjdG9ySW5mbyIsImRhdGEiLCJwcmV2aW91c0VtYWlsIiwic2lnblVwUmVzcG9uc2UiLCJzZXRBY3Rpb25Db2RlU2V0dGluZ3MiLCJhcGkuc2VuZFNpZ25JbkxpbmtUb0VtYWlsIiwiYXBpXHJcbiAgICAgICAgICAgIC5zZW5kU2lnbkluTGlua1RvRW1haWwiLCJjcmVhdGVBdXRoVXJpIiwiY29udGludWVVcmkiLCJpZGVudGlmaWVyIiwic2lnbmluTWV0aG9kcyIsImFwaS5zZW5kRW1haWxWZXJpZmljYXRpb24iLCJhcGkudmVyaWZ5QW5kQ2hhbmdlRW1haWwiLCJwcm9maWxlUmVxdWVzdCIsImFwaVVwZGF0ZVByb2ZpbGUiLCJwYXNzd29yZFByb3ZpZGVyIiwiZmluZCIsInVwZGF0ZUVtYWlsT3JQYXNzd29yZCIsImFwaVVwZGF0ZUVtYWlsUGFzc3dvcmQiLCJwcm9maWxlIiwicmF3VXNlckluZm8iLCJpc05ld1VzZXIiLCJraW5kIiwiZmlsdGVyZWRQcm92aWRlcklkIiwiR2VuZXJpY0FkZGl0aW9uYWxVc2VySW5mbyIsIkZhY2Vib29rQWRkaXRpb25hbFVzZXJJbmZvIiwiR2l0aHViQWRkaXRpb25hbFVzZXJJbmZvIiwiR29vZ2xlQWRkaXRpb25hbFVzZXJJbmZvIiwiVHdpdHRlckFkZGl0aW9uYWxVc2VySW5mbyIsInNjcmVlbk5hbWUiLCJGZWRlcmF0ZWRBZGRpdGlvbmFsVXNlckluZm9XaXRoVXNlcm5hbWUiLCJ1c2VybmFtZSIsImxvZ2luIiwiTXVsdGlGYWN0b3JTZXNzaW9uSW1wbCIsIl9mcm9tSWR0b2tlbiIsIl9mcm9tTWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm11bHRpRmFjdG9yU2Vzc2lvbiIsInBlbmRpbmdDcmVkZW50aWFsIiwiTXVsdGlGYWN0b3JSZXNvbHZlckltcGwiLCJzZXNzaW9uIiwiaGludHMiLCJzaWduSW5SZXNvbHZlciIsIl9mcm9tRXJyb3IiLCJtZmFSZXNwb25zZSIsIl9wcm9jZXNzIiwicmVzb2x2ZVNpZ25JbiIsImFzc2VydGlvbkV4dGVybiIsImVycm9ySW50ZXJuYWwiLCJNdWx0aUZhY3RvclVzZXJJbXBsIiwiZW5yb2xsZWRGYWN0b3JzIiwiX2Zyb21Vc2VyIiwiZ2V0U2Vzc2lvbiIsImVucm9sbCIsImZpbmFsaXplTWZhUmVzcG9uc2UiLCJ1bmVucm9sbCIsImluZm9PclVpZCIsIndpdGhkcmF3TWZhIiwibXVsdGlGYWN0b3JVc2VyQ2FjaGUiLCJXZWFrTWFwIiwidXNlck1vZHVsYXIiLCJTVE9SQUdFX0FWQUlMQUJMRV9LRVkiLCJCcm93c2VyUGVyc2lzdGVuY2VDbGFzcyIsInN0b3JhZ2VSZXRyaWV2ZXIiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImdldEl0ZW0iLCJfaWZyYW1lQ2Fubm90U3luY1dlYlN0b3JhZ2UiLCJfUE9MTElOR19JTlRFUlZBTF9NUyIsIklFMTBfTE9DQUxfU1RPUkFHRV9TWU5DX0RFTEFZIiwiQnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJldmVudCIsInBvbGwiLCJvblN0b3JhZ2VFdmVudCIsImxpc3RlbmVycyIsImxvY2FsQ2FjaGUiLCJwb2xsVGltZXIiLCJmYWxsYmFja1RvUG9sbGluZyIsIl9pc01vYmlsZUJyb3dzZXIiLCJmb3JBbGxDaGFuZ2VkS2V5cyIsImtleXMiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiX29sZFZhbHVlIiwibm90aWZ5TGlzdGVuZXJzIiwiZGV0YWNoTGlzdGVuZXIiLCJzdG9wUG9sbGluZyIsInNhZmFyaUxvY2FsU3RvcmFnZU5vdFN5bmNlZCIsInN0b3JlZFZhbHVlIiwidHJpZ2dlckxpc3RlbmVycyIsImxpc3RlbmVyIiwiZnJvbSIsInN0YXJ0UG9sbGluZyIsInNldEludGVydmFsIiwiU3RvcmFnZUV2ZW50IiwiY2xlYXJJbnRlcnZhbCIsImF0dGFjaExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpemUiLCJCcm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwic2Vzc2lvblN0b3JhZ2UiLCJfYWxsU2V0dGxlZCIsInByb21pc2VzIiwiZnVsZmlsbGVkIiwicmVhc29uIiwiUmVjZWl2ZXIiLCJldmVudFRhcmdldCIsImhhbmRsZXJzTWFwIiwiaGFuZGxlRXZlbnQiLCJleGlzdGluZ0luc3RhbmNlIiwicmVjZWl2ZXJzIiwicmVjZWl2ZXIiLCJpc0xpc3RlbmluZ3RvIiwibmV3SW5zdGFuY2UiLCJtZXNzYWdlRXZlbnQiLCJldmVudElkIiwiZXZlbnRUeXBlIiwiaGFuZGxlcnMiLCJwb3J0cyIsInBvc3RNZXNzYWdlIiwic3RhdHVzIiwiaGFuZGxlciIsIm9yaWdpbiIsIl9zdWJzY3JpYmUiLCJldmVudEhhbmRsZXIiLCJfdW5zdWJzY3JpYmUiLCJfZ2VuZXJhdGVFdmVudElkIiwiZGlnaXRzIiwiaSIsIlNlbmRlciIsInRhcmdldCIsInJlbW92ZU1lc3NhZ2VIYW5kbGVyIiwibWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsIm9uTWVzc2FnZSIsImNsb3NlIiwiX3NlbmQiLCJ0aW1lb3V0IiwiTWVzc2FnZUNoYW5uZWwiLCJjb21wbGV0aW9uVGltZXIiLCJzdGFydCIsImFja1RpbWVyIiwicG9ydDIiLCJmaW5hbGx5IiwiX3dpbmRvdyIsIl9zZXRXaW5kb3dMb2NhdGlvbiIsIl9pc1dvcmtlciIsIl9nZXRBY3RpdmVTZXJ2aWNlV29ya2VyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdHJhdGlvbiIsImFjdGl2ZSIsIl9nZXRTZXJ2aWNlV29ya2VyQ29udHJvbGxlciIsImNvbnRyb2xsZXIiLCJfZ2V0V29ya2VyR2xvYmFsU2NvcGUiLCJEQl9OQU1FIiwiREJfVkVSU0lPTiIsIkRCX09CSkVDVFNUT1JFX05BTUUiLCJEQl9EQVRBX0tFWVBBVEgiLCJEQlByb21pc2UiLCJ0b1Byb21pc2UiLCJnZXRPYmplY3RTdG9yZSIsImRiIiwiaXNSZWFkV3JpdGUiLCJ0cmFuc2FjdGlvbiIsIm9iamVjdFN0b3JlIiwiX2RlbGV0ZURhdGFiYXNlIiwiaW5kZXhlZERCIiwiZGVsZXRlRGF0YWJhc2UiLCJfb3BlbkRhdGFiYXNlIiwib3BlbiIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsIl9wdXRPYmplY3QiLCJwdXQiLCJnZXRPYmplY3QiLCJfVFJBTlNBQ1RJT05fUkVUUllfQ09VTlQiLCJJbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwicGVuZGluZ1dyaXRlcyIsInNlbmRlciIsInNlcnZpY2VXb3JrZXJSZWNlaXZlckF2YWlsYWJsZSIsImFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJfd29ya2VySW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiaW5pdGlhbGl6ZVNlcnZpY2VXb3JrZXJNZXNzYWdpbmciLCJfb3BlbkRiIiwiX3dpdGhSZXRyaWVzIiwib3AiLCJudW1BdHRlbXB0cyIsImluaXRpYWxpemVSZWNlaXZlciIsImluaXRpYWxpemVTZW5kZXIiLCJfb3JpZ2luIiwiX3BvbGwiLCJrZXlQcm9jZXNzZWQiLCJfZGF0YSIsInJlc3VsdHMiLCJub3RpZnlTZXJ2aWNlV29ya2VyIiwiX2RlbGV0ZU9iamVjdCIsIl93aXRoUGVuZGluZ1dyaXRlIiwid3JpdGUiLCJnZXRBbGxSZXF1ZXN0IiwiZ2V0QWxsIiwia2V5c0luUmVzdWx0IiwiZmJhc2Vfa2V5IiwibG9jYWxLZXkiLCJfU09MVkVfVElNRV9NUyIsIl9FWFBJUkFUSU9OX1RJTUVfTVMiLCJfV0lER0VUX0lEX1NUQVJUIiwiTW9ja1JlQ2FwdGNoYSIsImNvdW50ZXIiLCJyZW5kZXIiLCJjb250YWluZXIiLCJwYXJhbWV0ZXJzIiwiX3dpZGdldHMiLCJNb2NrV2lkZ2V0IiwicmVzZXQiLCJvcHRXaWRnZXRJZCIsImNvbnRhaW5lck9ySWQiLCJkZWxldGVkIiwicmVzcG9uc2VUb2tlbiIsImNsaWNrSGFuZGxlciIsImdldEVsZW1lbnRCeUlkIiwiaXNWaXNpYmxlIiwiY2hlY2tJZkRlbGV0ZWQiLCJnZW5lcmF0ZVJhbmRvbUFscGhhTnVtZXJpY1N0cmluZyIsImV4cGlyZWRDYWxsYmFjayIsImxlbiIsImNoYXJzIiwiYWxsb3dlZENoYXJzIiwiY2hhckF0IiwiX0pTTE9BRF9DQUxMQkFDSyIsImpzSGVscGVycy5fZ2VuZXJhdGVDYWxsYmFja05hbWUiLCJORVRXT1JLX1RJTUVPVVRfREVMQVkiLCJSRUNBUFRDSEFfQkFTRSIsIlJlQ2FwdGNoYUxvYWRlckltcGwiLCJob3N0TGFuZ3VhZ2UiLCJsb2FkIiwiaGwiLCJpc0hvc3RMYW5ndWFnZVZhbGlkIiwic2hvdWxkUmVzb2x2ZUltbWVkaWF0ZWx5IiwicmVjYXB0Y2hhIiwid2lkZ2V0SWQiLCJqc0hlbHBlcnMuX2xvYWRKUyIsImNsZWFyZWRPbmVJbnN0YW5jZSIsImxpYnJhcnlTZXBhcmF0ZWx5TG9hZGVkIiwiTW9ja1JlQ2FwdGNoYUxvYWRlckltcGwiLCJSRUNBUFRDSEFfVkVSSUZJRVJfVFlQRSIsIkRFRkFVTFRfUEFSQU1TIiwidGhlbWUiLCJkZXN0cm95ZWQiLCJyZW5kZXJQcm9taXNlIiwiaXNJbnZpc2libGUiLCJtYWtlVG9rZW5DYWxsYmFjayIsIl9yZWNhcHRjaGFMb2FkZXIiLCJ2YWxpZGF0ZVN0YXJ0aW5nU3RhdGUiLCJhc3NlcnROb3REZXN0cm95ZWQiLCJnZXRBc3NlcnRlZFJlY2FwdGNoYSIsInRva2VuQ2hhbmdlIiwidG9rZW5DaGFuZ2VMaXN0ZW5lcnMiLCJtYWtlUmVuZGVyUHJvbWlzZSIsIl9yZXNldCIsImNsZWFyIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlQ2hpbGQiLCJzaXRla2V5IiwiaGFzQ2hpbGROb2RlcyIsImV4aXN0aW5nIiwiZ2xvYmFsRnVuYyIsImluaXQiLCJndWFyYW50ZWVkRW1wdHkiLCJkb21SZWFkeSIsIkNvbmZpcm1hdGlvblJlc3VsdEltcGwiLCJvbkNvbmZpcm1hdGlvbiIsImNvbmZpcm0iLCJhdXRoQ3JlZGVudGlhbCIsImFwcFZlcmlmaWVyIiwiX3ZlcmlmeVBob25lTnVtYmVyIiwicmVjYXB0Y2hhVG9rZW4iLCJwaG9uZUluZm9PcHRpb25zIiwic3RhcnRFbnJvbGxQaG9uZU1mYSIsInBob25lRW5yb2xsbWVudEluZm8iLCJwaG9uZVNlc3Npb25JbmZvIiwibXVsdGlGYWN0b3JIaW50IiwibXVsdGlGYWN0b3JVaWQiLCJzdGFydFNpZ25JblBob25lTWZhIiwicGhvbmVTaWduSW5JbmZvIiwicGhvbmVSZXNwb25zZUluZm8iLCJ2ZXJpZnlQaG9uZU51bWJlciIsInBob25lT3B0aW9ucyIsImFwcGxpY2F0aW9uVmVyaWZpZXIiLCJyZXNvbHZlck92ZXJyaWRlIiwiSWRwQ3JlZGVudGlhbCIsIl9idWlsZElkcFJlcXVlc3QiLCJzZXNzaW9uSWQiLCJyZXR1cm5JZHBDcmVkZW50aWFsIiwiX3NpZ25JbiIsIl9yZWF1dGgiLCJfbGlua1VzZXIiLCJBYnN0cmFjdFBvcHVwUmVkaXJlY3RPcGVyYXRpb24iLCJwZW5kaW5nUHJvbWlzZSIsImV2ZW50TWFuYWdlciIsIm9uRXhlY3V0aW9uIiwicmVnaXN0ZXJDb25zdW1lciIsIm9uQXV0aEV2ZW50IiwidXJsUmVzcG9uc2UiLCJnZXRJZHBUYXNrIiwib25FcnJvciIsInVucmVnaXN0ZXJBbmRDbGVhblVwIiwidW5yZWdpc3RlckNvbnN1bWVyIiwiY2xlYW5VcCIsIl9QT0xMX1dJTkRPV19DTE9TRV9USU1FT1VUIiwicmVzb2x2ZXJJbnRlcm5hbCIsIl93aXRoRGVmYXVsdFJlc29sdmVyIiwiUG9wdXBPcGVyYXRpb24iLCJleGVjdXRlTm90TnVsbCIsImF1dGhXaW5kb3ciLCJwb2xsSWQiLCJjdXJyZW50UG9wdXBBY3Rpb24iLCJjYW5jZWwiLCJfb3BlblBvcHVwIiwiYXNzb2NpYXRlZEV2ZW50IiwiX29yaWdpblZhbGlkYXRpb24iLCJfaXNJZnJhbWVXZWJTdG9yYWdlU3VwcG9ydGVkIiwiaXNTdXBwb3J0ZWQiLCJwb2xsVXNlckNhbmNlbGxhdGlvbiIsIlBFTkRJTkdfUkVESVJFQ1RfS0VZIiwicmVkaXJlY3RPdXRjb21lTWFwIiwiUmVkaXJlY3RBY3Rpb24iLCJyZWFkeU91dGNvbWUiLCJoYXNQZW5kaW5nUmVkaXJlY3QiLCJfZ2V0QW5kQ2xlYXJQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJwZW5kaW5nUmVkaXJlY3RLZXkiLCJyZXNvbHZlclBlcnNpc3RlbmNlIiwiX3NldFBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsIl9jbGVhclJlZGlyZWN0T3V0Y29tZXMiLCJfc2lnbkluV2l0aFJlZGlyZWN0IiwiX29wZW5SZWRpcmVjdCIsIl9yZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInByZXBhcmVVc2VyRm9yUmVkaXJlY3QiLCJfbGlua1dpdGhSZWRpcmVjdCIsIl9nZXRSZWRpcmVjdFJlc3VsdCIsInJlc29sdmVyRXh0ZXJuIiwiRVZFTlRfRFVQTElDQVRJT05fQ0FDSEVfRFVSQVRJT05fTVMiLCJBdXRoRXZlbnRNYW5hZ2VyIiwicXVldWVkUmVkaXJlY3RFdmVudCIsImhhc0hhbmRsZWRQb3RlbnRpYWxSZWRpcmVjdCIsImF1dGhFdmVudENvbnN1bWVyIiwiY29uc3VtZXJzIiwiaXNFdmVudEZvckNvbnN1bWVyIiwic2VuZFRvQ29uc3VtZXIiLCJzYXZlRXZlbnRUb0NhY2hlIiwib25FdmVudCIsImhhc0V2ZW50QmVlbkhhbmRsZWQiLCJoYW5kbGVkIiwiY29uc3VtZXIiLCJpc1JlZGlyZWN0RXZlbnQiLCJpc051bGxSZWRpcmVjdEV2ZW50IiwiZXZlbnRJZE1hdGNoZXMiLCJsYXN0UHJvY2Vzc2VkRXZlbnRUaW1lIiwiY2FjaGVkRXZlbnRVaWRzIiwiZXZlbnRVaWQiLCJ2IiwiX2dldFByb2plY3RDb25maWciLCJJUF9BRERSRVNTX1JFR0VYIiwiSFRUUF9SRUdFWCIsIl92YWxpZGF0ZU9yaWdpbiIsImF1dGhvcml6ZWREb21haW5zIiwiZG9tYWluIiwibWF0Y2hEb21haW4iLCJjdXJyZW50VXJsIiwiaG9zdG5hbWUiLCJVUkwiLCJjZVVybCIsImVzY2FwZWREb21haW5QYXR0ZXJuIiwiUmVnRXhwIiwiTkVUV09SS19USU1FT1VUIiwicmVzZXRVbmxvYWRlZEdhcGlNb2R1bGVzIiwiYmVhY29uIiwiX19fanNsIiwiSCIsImhpbnQiLCJyIiwiTCIsIkNQIiwibG9hZEdhcGkiLCJsb2FkR2FwaUlmcmFtZSIsImdhcGkiLCJpZnJhbWVzIiwiZ2V0Q29udGV4dCIsIm9udGltZW91dCIsImNiTmFtZSIsImpzLl9nZW5lcmF0ZUNhbGxiYWNrTmFtZSIsImpzXHJcbiAgICAgICAgICAgICAgICAuX2xvYWRKUyIsImNhY2hlZEdBcGlMb2FkZXIiLCJfbG9hZEdhcGkiLCJQSU5HX1RJTUVPVVQiLCJJRlJBTUVfUEFUSCIsIkVNVUxBVEVEX0lGUkFNRV9QQVRIIiwiSUZSQU1FX0FUVFJJQlVURVMiLCJoZWlnaHQiLCJ0YWJpbmRleCIsIkVJRF9GUk9NX0FQSUhPU1QiLCJnZXRJZnJhbWVVcmwiLCJlaWQiLCJmdyIsIl9vcGVuSWZyYW1lIiwiY29udGV4dCIsImdhcGlMb2FkZXIuX2xvYWRHYXBpIiwid2hlcmUiLCJtZXNzYWdlSGFuZGxlcnNGaWx0ZXIiLCJDUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVIiLCJhdHRyaWJ1dGVzIiwiZG9udGNsZWFyIiwiaWZyYW1lIiwicmVzdHlsZSIsInNldEhpZGVPbkxlYXZlIiwibmV0d29ya0Vycm9yIiwibmV0d29ya0Vycm9yVGltZXIiLCJjbGVhclRpbWVyQW5kUmVzb2x2ZSIsInBpbmciLCJCQVNFX1BPUFVQX09QVElPTlMiLCJyZXNpemFibGUiLCJzdGF0dXNiYXIiLCJ0b29sYmFyIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiVEFSR0VUX0JMQU5LIiwiRklSRUZPWF9FTVBUWV9VUkwiLCJBdXRoUG9wdXAiLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImF2YWlsV2lkdGgiLCJzY3JvbGxiYXJzIiwib3B0aW9uc1N0cmluZyIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2N1bSIsIm9wZW5Bc05ld1dpbmRvd0lPUyIsIm5ld1dpbiIsImZvY3VzIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIldJREdFVF9QQVRIIiwiRU1VTEFUT1JfV0lER0VUX1BBVEgiLCJGSVJFQkFTRV9BUFBfQ0hFQ0tfRlJBR01FTlRfSUQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfZ2V0UmVkaXJlY3RVcmwiLCJhdXRoVHlwZSIsInJlZGlyZWN0VXJsIiwiYWRkaXRpb25hbFBhcmFtcyIsInRpZCIsInBhcmFtc0RpY3QiLCJhcHBDaGVja1Rva2VuRnJhZ21lbnQiLCJnZXRIYW5kbGVyQmFzZSIsIldFQl9TVE9SQUdFX1NVUFBPUlRfS0VZIiwiQnJvd3NlclBvcHVwUmVkaXJlY3RSZXNvbHZlciIsImV2ZW50TWFuYWdlcnMiLCJvcmlnaW5WYWxpZGF0aW9uUHJvbWlzZXMiLCJfb3BlbiIsImluaXRBbmRHZXRNYW5hZ2VyIiwicmVnaXN0ZXIiLCJpZnJhbWVFdmVudCIsImF1dGhFdmVudCIsInNlbmQiLCJNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZmluYWxpemVFbnJvbGwiLCJfZmluYWxpemVTaWduSW4iLCJQaG9uZU11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tQ3JlZGVudGlhbCIsImZpbmFsaXplRW5yb2xsUGhvbmVNZmEiLCJwaG9uZVZlcmlmaWNhdGlvbkluZm8iLCJmaW5hbGl6ZVNpZ25JblBob25lTWZhIiwiRkFDVE9SX0lEIiwiYXNzZXJ0aW9uRm9yRW5yb2xsbWVudCIsIm9uZVRpbWVQYXNzd29yZCIsIlRvdHBNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbVNlY3JldCIsImFzc2VydGlvbkZvclNpZ25JbiIsImVucm9sbG1lbnRJZCIsIl9mcm9tRW5yb2xsbWVudElkIiwiZ2VuZXJhdGVTZWNyZXQiLCJtZmFTZXNzaW9uIiwic3RhcnRFbnJvbGxUb3RwTWZhIiwidG90cEVucm9sbG1lbnRJbmZvIiwiX2Zyb21TdGFydFRvdHBNZmFFbnJvbGxtZW50UmVzcG9uc2UiLCJvdHAiLCJmaW5hbGl6ZUVucm9sbFRvdHBNZmEiLCJ0b3RwVmVyaWZpY2F0aW9uSW5mbyIsIl9tYWtlVG90cFZlcmlmaWNhdGlvbkluZm8iLCJmaW5hbGl6ZVNpZ25JblRvdHBNZmEiLCJzZWNyZXRLZXkiLCJoYXNoaW5nQWxnb3JpdGhtIiwiY29kZUxlbmd0aCIsImNvZGVJbnRlcnZhbFNlY29uZHMiLCJlbnJvbGxtZW50Q29tcGxldGlvbkRlYWRsaW5lIiwidG90cFNlc3Npb25JbmZvIiwic2hhcmVkU2VjcmV0S2V5IiwidmVyaWZpY2F0aW9uQ29kZUxlbmd0aCIsInBlcmlvZFNlYyIsImZpbmFsaXplRW5yb2xsbWVudFRpbWUiLCJnZW5lcmF0ZVFyQ29kZVVybCIsImFjY291bnROYW1lIiwiaXNzdWVyIiwidXNlRGVmYXVsdHMiLCJfaXNFbXB0eVN0cmluZyIsImlucHV0IiwiQXV0aEludGVyb3AiLCJnZXRVaWQiLCJhc3NlcnRBdXRoQ29uZmlndXJlZCIsImFkZEF1dGhUb2tlbkxpc3RlbmVyIiwiaW50ZXJuYWxMaXN0ZW5lcnMiLCJ1bnN1YnNjcmliZSIsInVwZGF0ZVByb2FjdGl2ZVJlZnJlc2giLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsImdldFZlcnNpb25Gb3JQbGF0Zm9ybSIsInJlZ2lzdGVyQXV0aCIsImltcG9ydF9jb21wb25lbnQiLCJnZXRQcm92aWRlciIsImF1dGhJbnN0YW5jZSIsIl9pbml0aWFsaXplQXV0aEluc3RhbmNlIiwic2V0SW5zdGFudGlhdGlvbk1vZGUiLCJzZXRJbnN0YW5jZUNyZWF0ZWRDYWxsYmFjayIsIl9pbnN0YW5jZUlkZW50aWZpZXIiLCJfaW5zdGFuY2UiLCJhdXRoSW50ZXJuYWxQcm92aWRlciIsIkRFRkFVTFRfSURfVE9LRU5fTUFYX0FHRSIsImF1dGhJZFRva2VuTWF4QWdlIiwibGFzdFBvc3RlZElkVG9rZW4iLCJtaW50Q29va2llRmFjdG9yeSIsImlkVG9rZW5SZXN1bHQiLCJpZFRva2VuQWdlIiwiYXV0aFRva2VuU3luY1VybCIsIm1pbnRDb29raWUiLCJhdXRoRW11bGF0b3JIb3N0IiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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