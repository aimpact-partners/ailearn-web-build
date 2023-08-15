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

// .beyond/uimport/@firebase/auth.1.0.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXV0aC4xLjAuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbW9kZWwvZW51bV9tYXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Fzc2VydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvY2F0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbmF2aWdhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZGVsYXkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2ZldGNoX3Byb3ZpZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvYWNjb3VudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3RpbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9pZF90b2tlbl9yZXN1bHQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9pbnZhbGlkYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9wcm9hY3RpdmVfcmVmcmVzaC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfbWV0YWRhdGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWxvYWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Rva2VuX21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9pbnN0YW50aWF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvaW5fbWVtb3J5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL3BlcnNpc3RlbmNlX3VzZXJfbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92ZXJzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vcmVjYXB0Y2hhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbG9hZF9qcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2VudGVycHJpc2VfdmVyaWZpZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvaW5pdGlhbGl6ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2F1dGhfY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc21zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2FjdGlvbl9jb2RlX3VybC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZlZGVyYXRlZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZhY2Vib29rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9nb29nbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dpdGh1Yi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy90d2l0dGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc2lnbl91cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfY3JlZGVudGlhbF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYW5vbnltb3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Vycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcHJvdmlkZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvbGlua191bmxpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWF1dGhlbnRpY2F0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2FjdGlvbl9jb2RlX3NldHRpbmdzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2NyZWF0ZV9hdXRoX3VyaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L3Byb2ZpbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hY2NvdW50X2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hZGRpdGlvbmFsX3VzZXJfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9zZXNzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV91c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvbG9jYWxfc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9zZXNzaW9uX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcHJvbWlzZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9yZWNlaXZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2V2ZW50X2lkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3NlbmRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9hdXRoX3dpbmRvdy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3dvcmtlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9pbmRleGVkX2RiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbW9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2xvYWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcHJvdmlkZXJzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hYnN0cmFjdF9wb3B1cF9yZWRpcmVjdF9vcGVyYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2V2ZW50X21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wcm9qZWN0X2NvbmZpZy9nZXRfcHJvamVjdF9jb25maWcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92YWxpZGF0ZV9vcmlnaW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2dhcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2lmcmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaGFuZGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wb3B1cF9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9hc3NlcnRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWZhL2Fzc2VydGlvbnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9hc3NlcnRpb25zL3RvdHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9maXJlYmFzZV9pbnRlcm5hbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3JlZ2lzdGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL2Rpc3QvZXNtMjAxNy9pbmRleC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIkFjdGlvbkNvZGVPcGVyYXRpb24iLCJBY3Rpb25Db2RlVVJMIiwiQXV0aENyZWRlbnRpYWwiLCJBdXRoRXJyb3JDb2RlcyIsIkVtYWlsQXV0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiRmFjdG9ySWQiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJPQXV0aENyZWRlbnRpYWwiLCJPQXV0aFByb3ZpZGVyIiwiT3BlcmF0aW9uVHlwZSIsIlBob25lQXV0aENyZWRlbnRpYWwiLCJQaG9uZUF1dGhQcm92aWRlciIsIlBob25lTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJQcm92aWRlcklkIiwiUmVjYXB0Y2hhVmVyaWZpZXIiLCJTQU1MQXV0aFByb3ZpZGVyIiwiU2lnbkluTWV0aG9kIiwiVG90cE11bHRpRmFjdG9yR2VuZXJhdG9yIiwiVG90cFNlY3JldCIsIlR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJhcHBseUFjdGlvbkNvZGUiLCJiZWZvcmVBdXRoU3RhdGVDaGFuZ2VkIiwiYnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJicm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsImNoZWNrQWN0aW9uQ29kZSIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29ubmVjdEF1dGhFbXVsYXRvciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRlYnVnRXJyb3JNYXAiLCJkZWxldGVVc2VyIiwiZmV0Y2hTaWduSW5NZXRob2RzRm9yRW1haWwiLCJnZXRBZGRpdGlvbmFsVXNlckluZm8iLCJnZXRBdXRoIiwiZ2V0SWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJnZXRNdWx0aUZhY3RvclJlc29sdmVyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJpbk1lbW9yeVBlcnNpc3RlbmNlIiwiaW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsImluaXRpYWxpemVBdXRoIiwiaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImlzU2lnbkluV2l0aEVtYWlsTGluayIsImxpbmtXaXRoQ3JlZGVudGlhbCIsImxpbmtXaXRoUGhvbmVOdW1iZXIiLCJsaW5rV2l0aFBvcHVwIiwibGlua1dpdGhSZWRpcmVjdCIsIm11bHRpRmFjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwib25JZFRva2VuQ2hhbmdlZCIsInBhcnNlQWN0aW9uQ29kZVVSTCIsInByb2RFcnJvck1hcCIsInJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQaG9uZU51bWJlciIsInJlYXV0aGVudGljYXRlV2l0aFBvcHVwIiwicmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJyZWxvYWQiLCJzZW5kRW1haWxWZXJpZmljYXRpb24iLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsIiwic2V0UGVyc2lzdGVuY2UiLCJzaWduSW5Bbm9ueW1vdXNseSIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxMaW5rIiwic2lnbkluV2l0aFBob25lTnVtYmVyIiwic2lnbkluV2l0aFBvcHVwIiwic2lnbkluV2l0aFJlZGlyZWN0Iiwic2lnbk91dCIsInVubGluayIsInVwZGF0ZUN1cnJlbnRVc2VyIiwidXBkYXRlRW1haWwiLCJ1cGRhdGVQYXNzd29yZCIsInVwZGF0ZVBob25lTnVtYmVyIiwidXBkYXRlUHJvZmlsZSIsInVzZURldmljZUxhbmd1YWdlIiwidmVyaWZ5QmVmb3JlVXBkYXRlRW1haWwiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsIm1vZHVsZSIsIlBIT05FIiwiVE9UUCIsIkZBQ0VCT09LIiwiR0lUSFVCIiwiR09PR0xFIiwiUEFTU1dPUkQiLCJUV0lUVEVSIiwiRU1BSUxfTElOSyIsIkVNQUlMX1BBU1NXT1JEIiwiTElOSyIsIlJFQVVUSEVOVElDQVRFIiwiU0lHTl9JTiIsIkVNQUlMX1NJR05JTiIsIlBBU1NXT1JEX1JFU0VUIiwiUkVDT1ZFUl9FTUFJTCIsIlJFVkVSVF9TRUNPTkRfRkFDVE9SX0FERElUSU9OIiwiVkVSSUZZX0FORF9DSEFOR0VfRU1BSUwiLCJWRVJJRllfRU1BSUwiLCJfZGVidWdFcnJvck1hcCIsIl9wcm9kRXJyb3JNYXAiLCJfREVGQVVMVF9BVVRIX0VSUk9SX0ZBQ1RPUlkiLCJpbXBvcnRfdXRpbCIsIkFETUlOX09OTFlfT1BFUkFUSU9OIiwiQVJHVU1FTlRfRVJST1IiLCJBUFBfTk9UX0FVVEhPUklaRUQiLCJBUFBfTk9UX0lOU1RBTExFRCIsIkNBUFRDSEFfQ0hFQ0tfRkFJTEVEIiwiQ09ERV9FWFBJUkVEIiwiQ09SRE9WQV9OT1RfUkVBRFkiLCJDT1JTX1VOU1VQUE9SVEVEIiwiQ1JFREVOVElBTF9BTFJFQURZX0lOX1VTRSIsIkNSRURFTlRJQUxfTUlTTUFUQ0giLCJDUkVERU5USUFMX1RPT19PTERfTE9HSU5fQUdBSU4iLCJERVBFTkRFTlRfU0RLX0lOSVRfQkVGT1JFX0FVVEgiLCJEWU5BTUlDX0xJTktfTk9UX0FDVElWQVRFRCIsIkVNQUlMX0NIQU5HRV9ORUVEU19WRVJJRklDQVRJT04iLCJFTUFJTF9FWElTVFMiLCJFTVVMQVRPUl9DT05GSUdfRkFJTEVEIiwiRVhQSVJFRF9PT0JfQ09ERSIsIkVYUElSRURfUE9QVVBfUkVRVUVTVCIsIklOVEVSTkFMX0VSUk9SIiwiSU5WQUxJRF9BUElfS0VZIiwiSU5WQUxJRF9BUFBfQ1JFREVOVElBTCIsIklOVkFMSURfQVBQX0lEIiwiSU5WQUxJRF9BVVRIIiwiSU5WQUxJRF9BVVRIX0VWRU5UIiwiSU5WQUxJRF9DRVJUX0hBU0giLCJJTlZBTElEX0NPREUiLCJJTlZBTElEX0NPTlRJTlVFX1VSSSIsIklOVkFMSURfQ09SRE9WQV9DT05GSUdVUkFUSU9OIiwiSU5WQUxJRF9DVVNUT01fVE9LRU4iLCJJTlZBTElEX0RZTkFNSUNfTElOS19ET01BSU4iLCJJTlZBTElEX0VNQUlMIiwiSU5WQUxJRF9FTVVMQVRPUl9TQ0hFTUUiLCJJTlZBTElEX0lEUF9SRVNQT05TRSIsIklOVkFMSURfTUVTU0FHRV9QQVlMT0FEIiwiSU5WQUxJRF9NRkFfU0VTU0lPTiIsIklOVkFMSURfT0FVVEhfQ0xJRU5UX0lEIiwiSU5WQUxJRF9PQVVUSF9QUk9WSURFUiIsIklOVkFMSURfT09CX0NPREUiLCJJTlZBTElEX09SSUdJTiIsIklOVkFMSURfUEFTU1dPUkQiLCJJTlZBTElEX1BFUlNJU1RFTkNFIiwiSU5WQUxJRF9QSE9ORV9OVU1CRVIiLCJJTlZBTElEX1BST1ZJREVSX0lEIiwiSU5WQUxJRF9SRUNJUElFTlRfRU1BSUwiLCJJTlZBTElEX1NFTkRFUiIsIklOVkFMSURfU0VTU0lPTl9JTkZPIiwiSU5WQUxJRF9URU5BTlRfSUQiLCJNRkFfSU5GT19OT1RfRk9VTkQiLCJNRkFfUkVRVUlSRUQiLCJNSVNTSU5HX0FORFJPSURfUEFDS0FHRV9OQU1FIiwiTUlTU0lOR19BUFBfQ1JFREVOVElBTCIsIk1JU1NJTkdfQVVUSF9ET01BSU4iLCJNSVNTSU5HX0NPREUiLCJNSVNTSU5HX0NPTlRJTlVFX1VSSSIsIk1JU1NJTkdfSUZSQU1FX1NUQVJUIiwiTUlTU0lOR19JT1NfQlVORExFX0lEIiwiTUlTU0lOR19PUl9JTlZBTElEX05PTkNFIiwiTUlTU0lOR19NRkFfSU5GTyIsIk1JU1NJTkdfTUZBX1NFU1NJT04iLCJNSVNTSU5HX1BIT05FX05VTUJFUiIsIk1JU1NJTkdfU0VTU0lPTl9JTkZPIiwiTU9EVUxFX0RFU1RST1lFRCIsIk5FRURfQ09ORklSTUFUSU9OIiwiTkVUV09SS19SRVFVRVNUX0ZBSUxFRCIsIk5VTExfVVNFUiIsIk5PX0FVVEhfRVZFTlQiLCJOT19TVUNIX1BST1ZJREVSIiwiT1BFUkFUSU9OX05PVF9BTExPV0VEIiwiT1BFUkFUSU9OX05PVF9TVVBQT1JURUQiLCJQT1BVUF9CTE9DS0VEIiwiUE9QVVBfQ0xPU0VEX0JZX1VTRVIiLCJQUk9WSURFUl9BTFJFQURZX0xJTktFRCIsIlFVT1RBX0VYQ0VFREVEIiwiUkVESVJFQ1RfQ0FOQ0VMTEVEX0JZX1VTRVIiLCJSRURJUkVDVF9PUEVSQVRJT05fUEVORElORyIsIlJFSkVDVEVEX0NSRURFTlRJQUwiLCJTRUNPTkRfRkFDVE9SX0FMUkVBRFlfRU5ST0xMRUQiLCJTRUNPTkRfRkFDVE9SX0xJTUlUX0VYQ0VFREVEIiwiVEVOQU5UX0lEX01JU01BVENIIiwiVElNRU9VVCIsIlRPS0VOX0VYUElSRUQiLCJUT09fTUFOWV9BVFRFTVBUU19UUllfTEFURVIiLCJVTkFVVEhPUklaRURfRE9NQUlOIiwiVU5TVVBQT1JURURfRklSU1RfRkFDVE9SIiwiVU5TVVBQT1JURURfUEVSU0lTVEVOQ0UiLCJVTlNVUFBPUlRFRF9URU5BTlRfT1BFUkFUSU9OIiwiVU5WRVJJRklFRF9FTUFJTCIsIlVTRVJfQ0FOQ0VMTEVEIiwiVVNFUl9ERUxFVEVEIiwiVVNFUl9ESVNBQkxFRCIsIlVTRVJfTUlTTUFUQ0giLCJVU0VSX1NJR05FRF9PVVQiLCJXRUFLX1BBU1NXT1JEIiwiV0VCX1NUT1JBR0VfVU5TVVBQT1JURUQiLCJBTFJFQURZX0lOSVRJQUxJWkVEIiwiUkVDQVBUQ0hBX05PVF9FTkFCTEVEIiwiTUlTU0lOR19SRUNBUFRDSEFfVE9LRU4iLCJJTlZBTElEX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX0FDVElPTiIsIk1JU1NJTkdfQ0xJRU5UX1RZUEUiLCJNSVNTSU5HX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRUNBUFRDSEFfVkVSU0lPTiIsIklOVkFMSURfUkVRX1RZUEUiLCJsb2dDbGllbnQiLCJpbXBvcnRfbG9nZ2VyIiwiX2xvZ1dhcm4iLCJtc2ciLCJhcmdzIiwibG9nTGV2ZWwiLCJXQVJOIiwid2FybiIsImltcG9ydF9hcHAiLCJfbG9nRXJyb3IiLCJFUlJPUiIsImVycm9yIiwiX2ZhaWwiLCJhdXRoT3JDb2RlIiwicmVzdCIsImNyZWF0ZUVycm9ySW50ZXJuYWwiLCJfY3JlYXRlRXJyb3IiLCJfZXJyb3JXaXRoQ3VzdG9tTWVzc2FnZSIsImF1dGgiLCJjb2RlIiwibWVzc2FnZSIsImVycm9yTWFwIiwiT2JqZWN0IiwiZmFjdG9yeSIsImNyZWF0ZSIsImFwcE5hbWUiLCJuYW1lIiwiX2Fzc2VydEluc3RhbmNlT2YiLCJvYmplY3QiLCJpbnN0YW5jZSIsImNvbnN0cnVjdG9ySW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsImZ1bGxQYXJhbXMiLCJzbGljZSIsIl9lcnJvckZhY3RvcnkiLCJfYXNzZXJ0IiwiYXNzZXJ0aW9uIiwiZGVidWdGYWlsIiwiZmFpbHVyZSIsIkVycm9yIiwiX2dldEN1cnJlbnRVcmwiLCJzZWxmIiwiX2EiLCJsb2NhdGlvbiIsImhyZWYiLCJfaXNIdHRwT3JIdHRwcyIsIl9nZXRDdXJyZW50U2NoZW1lIiwicHJvdG9jb2wiLCJfaXNPbmxpbmUiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJfZ2V0VXNlckxhbmd1YWdlIiwibmF2aWdhdG9yTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsIkRlbGF5Iiwic2hvcnREZWxheSIsImxvbmdEZWxheSIsImRlYnVnQXNzZXJ0IiwiaXNNb2JpbGUiLCJnZXQiLCJNYXRoIiwibWluIiwiY29uZmlnIiwicGF0aCIsImVtdWxhdG9yIiwidXJsIiwic3RhcnRzV2l0aCIsIkZldGNoUHJvdmlkZXIiLCJpbml0aWFsaXplIiwiZmV0Y2hJbXBsIiwiaGVhZGVyc0ltcGwiLCJyZXNwb25zZUltcGwiLCJmZXRjaCIsImhlYWRlcnMiLCJIZWFkZXJzIiwicmVzcG9uc2UiLCJSZXNwb25zZSIsIlNFUlZFUl9FUlJPUl9NQVAiLCJERUZBVUxUX0FQSV9USU1FT1VUX01TIiwicmVxdWVzdCIsInRlbmFudElkIiwiX3BlcmZvcm1BcGlSZXF1ZXN0IiwibWV0aG9kIiwiY3VzdG9tRXJyb3JNYXAiLCJfcGVyZm9ybUZldGNoV2l0aEVycm9ySGFuZGxpbmciLCJib2R5IiwicGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5Iiwia2V5IiwiYXBpS2V5IiwiX2dldEFkZGl0aW9uYWxIZWFkZXJzIiwibGFuZ3VhZ2VDb2RlIiwiX2dldEZpbmFsVGFyZ2V0IiwiYXBpSG9zdCIsInJlZmVycmVyUG9saWN5IiwiZmV0Y2hGbiIsIl9jYW5Jbml0RW11bGF0b3IiLCJuZXR3b3JrVGltZW91dCIsIk5ldHdvcmtUaW1lb3V0IiwiUHJvbWlzZSIsInJhY2UiLCJwcm9taXNlIiwiY2xlYXJOZXR3b3JrVGltZW91dCIsImpzb24iLCJfbWFrZVRhZ2dlZEVycm9yIiwib2siLCJlcnJvck1lc3NhZ2UiLCJzZXJ2ZXJFcnJvckNvZGUiLCJzZXJ2ZXJFcnJvck1lc3NhZ2UiLCJzcGxpdCIsImF1dGhFcnJvciIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImUiLCJTdHJpbmciLCJfcGVyZm9ybVNpZ25JblJlcXVlc3QiLCJzZXJ2ZXJSZXNwb25zZSIsIl9zZXJ2ZXJSZXNwb25zZSIsImhvc3QiLCJiYXNlIiwiYXBpU2NoZW1lIiwiX2VtdWxhdG9yVXJsIiwidGltZXIiLCJfIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImVycm9yUGFyYW1zIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImN1c3RvbURhdGEiLCJfdG9rZW5SZXNwb25zZSIsImRlbGV0ZUFjY291bnQiLCJkZWxldGVMaW5rZWRBY2NvdW50cyIsImdldEFjY291bnRJbmZvIiwidXRjVGltZXN0YW1wVG9EYXRlU3RyaW5nIiwidXRjVGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJOdW1iZXIiLCJpc05hTiIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsInVzZXIiLCJmb3JjZVJlZnJlc2giLCJ1c2VySW50ZXJuYWwiLCJ0b2tlbiIsImNsYWltcyIsIl9wYXJzZVRva2VuIiwiZXhwIiwiYXV0aF90aW1lIiwiaWF0IiwiZmlyZWJhc2UiLCJzaWduSW5Qcm92aWRlciIsImF1dGhUaW1lIiwic2Vjb25kc1N0cmluZ1RvTWlsbGlzZWNvbmRzIiwiaXNzdWVkQXRUaW1lIiwiZXhwaXJhdGlvblRpbWUiLCJzaWduSW5TZWNvbmRGYWN0b3IiLCJzZWNvbmRzIiwiYWxnb3JpdGhtIiwicGF5bG9hZCIsInNpZ25hdHVyZSIsImRlY29kZWQiLCJwYXJzZSIsInRvU3RyaW5nIiwiX3Rva2VuRXhwaXJlc0luIiwicGFyc2VkVG9rZW4iLCJfbG9nb3V0SWZJbnZhbGlkYXRlZCIsImJ5cGFzc0F1dGhTdGF0ZSIsImlzVXNlckludmFsaWRhdGVkIiwiY3VycmVudFVzZXIiLCJQcm9hY3RpdmVSZWZyZXNoIiwiaXNSdW5uaW5nIiwidGltZXJJZCIsIl9zdGFydCIsInNjaGVkdWxlIiwiX3N0b3AiLCJnZXRJbnRlcnZhbCIsIndhc0Vycm9yIiwiaW50ZXJ2YWwiLCJlcnJvckJhY2tvZmYiLCJleHBUaW1lIiwic3RzVG9rZW5NYW5hZ2VyIiwibm93IiwibWF4IiwiaXRlcmF0aW9uIiwiVXNlck1ldGFkYXRhIiwiY3JlYXRlZEF0IiwibGFzdExvZ2luQXQiLCJfaW5pdGlhbGl6ZVRpbWUiLCJsYXN0U2lnbkluVGltZSIsImNyZWF0aW9uVGltZSIsIl9jb3B5IiwibWV0YWRhdGEiLCJ0b0pTT04iLCJfcmVsb2FkV2l0aG91dFNhdmluZyIsImlkVG9rZW4iLCJ1c2VycyIsImxlbmd0aCIsImNvcmVBY2NvdW50IiwiX25vdGlmeVJlbG9hZExpc3RlbmVyIiwibmV3UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJVc2VySW5mbyIsImV4dHJhY3RQcm92aWRlckRhdGEiLCJwcm92aWRlckRhdGEiLCJtZXJnZVByb3ZpZGVyRGF0YSIsIm9sZElzQW5vbnltb3VzIiwiaXNBbm9ueW1vdXMiLCJuZXdJc0Fub255bW91cyIsInBhc3N3b3JkSGFzaCIsInVwZGF0ZXMiLCJ1aWQiLCJsb2NhbElkIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsInBob3RvVXJsIiwiZW1haWxWZXJpZmllZCIsImFzc2lnbiIsIl9wZXJzaXN0VXNlcklmQ3VycmVudCIsIl9ub3RpZnlMaXN0ZW5lcnNJZkN1cnJlbnQiLCJvcmlnaW5hbCIsIm5ld0RhdGEiLCJkZWR1cGVkIiwiZmlsdGVyIiwibyIsInNvbWUiLCJuIiwicHJvdmlkZXJJZCIsInByb3ZpZGVycyIsIm1hcCIsInByb3ZpZGVyIiwiaW1wb3J0X3RzbGliIiwicmF3SWQiLCJyZXF1ZXN0U3RzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJ0b2tlbkFwaUhvc3QiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNJbiIsImV4cGlyZXNfaW4iLCJyZWZyZXNoX3Rva2VuIiwiU3RzVG9rZW5NYW5hZ2VyIiwiaXNFeHBpcmVkIiwidXBkYXRlRnJvbVNlcnZlclJlc3BvbnNlIiwidXBkYXRlVG9rZW5zQW5kRXhwaXJhdGlvbiIsImdldFRva2VuIiwicmVmcmVzaCIsImNsZWFyUmVmcmVzaFRva2VuIiwib2xkVG9rZW4iLCJleHBpcmVzSW5TZWMiLCJmcm9tSlNPTiIsIm1hbmFnZXIiLCJfYXNzaWduIiwiX2Nsb25lIiwiX3BlcmZvcm1SZWZyZXNoIiwiYXNzZXJ0U3RyaW5nT3JVbmRlZmluZWQiLCJVc2VySW1wbCIsIm9wdCIsInJlbG9hZFVzZXJJbmZvIiwicmVsb2FkTGlzdGVuZXIiLCJ1c2VySW5mbyIsIm5ld1VzZXIiLCJfb25SZWxvYWQiLCJjYWxsYmFjayIsIl9zdGFydFByb2FjdGl2ZVJlZnJlc2giLCJwcm9hY3RpdmVSZWZyZXNoIiwiX3N0b3BQcm9hY3RpdmVSZWZyZXNoIiwiX3VwZGF0ZVRva2Vuc0lmTmVjZXNzYXJ5IiwidG9rZW5zUmVmcmVzaGVkIiwiZGVsZXRlIiwiX3JlZGlyZWN0RXZlbnRJZCIsIl9mcm9tSlNPTiIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiX2YiLCJfZyIsIl9oIiwicGxhaW5PYmplY3RUb2tlbk1hbmFnZXIiLCJBcnJheSIsImlzQXJyYXkiLCJfZnJvbUlkVG9rZW5SZXNwb25zZSIsImlkVG9rZW5SZXNwb25zZSIsImluc3RhbmNlQ2FjaGUiLCJNYXAiLCJfZ2V0SW5zdGFuY2UiLCJjbHMiLCJGdW5jdGlvbiIsInNldCIsIkluTWVtb3J5UGVyc2lzdGVuY2UiLCJzdG9yYWdlIiwiX2lzQXZhaWxhYmxlIiwiX3NldCIsInZhbHVlIiwiX2dldCIsIl9yZW1vdmUiLCJfYWRkTGlzdGVuZXIiLCJfa2V5IiwiX2xpc3RlbmVyIiwiX3JlbW92ZUxpc3RlbmVyIiwidHlwZSIsIl9wZXJzaXN0ZW5jZUtleU5hbWUiLCJQZXJzaXN0ZW5jZVVzZXJNYW5hZ2VyIiwicGVyc2lzdGVuY2UiLCJ1c2VyS2V5IiwiZnVsbFVzZXJLZXkiLCJmdWxsUGVyc2lzdGVuY2VLZXkiLCJib3VuZEV2ZW50SGFuZGxlciIsIl9vblN0b3JhZ2VFdmVudCIsImJpbmQiLCJzZXRDdXJyZW50VXNlciIsImdldEN1cnJlbnRVc2VyIiwiYmxvYiIsInJlbW92ZUN1cnJlbnRVc2VyIiwic2F2ZVBlcnNpc3RlbmNlRm9yUmVkaXJlY3QiLCJuZXdQZXJzaXN0ZW5jZSIsInBlcnNpc3RlbmNlSGllcmFyY2h5IiwiYXZhaWxhYmxlUGVyc2lzdGVuY2VzIiwiYWxsIiwic2VsZWN0ZWRQZXJzaXN0ZW5jZSIsInVzZXJUb01pZ3JhdGUiLCJtaWdyYXRpb25IaWVyYXJjaHkiLCJwIiwiX3Nob3VsZEFsbG93TWlncmF0aW9uIiwiX2dldEJyb3dzZXJOYW1lIiwidXNlckFnZW50IiwidWEiLCJpbmNsdWRlcyIsIl9pc0lFTW9iaWxlIiwiX2lzRmlyZWZveCIsIl9pc0JsYWNrQmVycnkiLCJfaXNXZWJPUyIsIl9pc1NhZmFyaSIsIl9pc0Nocm9tZUlPUyIsIl9pc0FuZHJvaWQiLCJyZSIsIm1hdGNoZXMiLCJtYXRjaCIsInRlc3QiLCJfaXNJT1MiLCJfaXNJT1M3T3I4IiwiX2lzSU9TU3RhbmRhbG9uZSIsIndpbmRvdyIsIl9pc0lFMTAiLCJkb2N1bWVudCIsImRvY3VtZW50TW9kZSIsIl9pc0lmcmFtZSIsInRvcCIsIl9nZXRDbGllbnRWZXJzaW9uIiwiY2xpZW50UGxhdGZvcm0iLCJmcmFtZXdvcmtzIiwicmVwb3J0ZWRQbGF0Zm9ybSIsInJlcG9ydGVkRnJhbWV3b3JrcyIsImpvaW4iLCJnZXRSZWNhcHRjaGFQYXJhbXMiLCJyZWNhcHRjaGFTaXRlS2V5IiwiZ2V0UmVjYXB0Y2hhQ29uZmlnIiwiaXNWMiIsImdyZWNhcHRjaGEiLCJnZXRSZXNwb25zZSIsImlzRW50ZXJwcmlzZSIsImVudGVycHJpc2UiLCJSZWNhcHRjaGFDb25maWciLCJzaXRlS2V5IiwiZW1haWxQYXNzd29yZEVuYWJsZWQiLCJyZWNhcHRjaGFLZXkiLCJyZWNhcHRjaGFFbmZvcmNlbWVudFN0YXRlIiwiZW5mb3JjZW1lbnRTdGF0ZSIsImdldFNjcmlwdFBhcmVudEVsZW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIl9sb2FkSlMiLCJyZXNvbHZlIiwiZWwiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwib25sb2FkIiwib25lcnJvciIsImNoYXJzZXQiLCJhcHBlbmRDaGlsZCIsIl9nZW5lcmF0ZUNhbGxiYWNrTmFtZSIsInByZWZpeCIsImZsb29yIiwicmFuZG9tIiwiUkVDQVBUQ0hBX0VOVEVSUFJJU0VfVVJMIiwiUkVDQVBUQ0hBX0VOVEVSUFJJU0VfVkVSSUZJRVJfVFlQRSIsIkZBS0VfVE9LRU4iLCJSZWNhcHRjaGFFbnRlcnByaXNlVmVyaWZpZXIiLCJhdXRoRXh0ZXJuIiwiX2Nhc3RBdXRoIiwidmVyaWZ5IiwiYWN0aW9uIiwicmV0cmlldmVTaXRlS2V5IiwiX2FnZW50UmVjYXB0Y2hhQ29uZmlnIiwiX3RlbmFudFJlY2FwdGNoYUNvbmZpZ3MiLCJjbGllbnRUeXBlIiwidmVyc2lvbiIsInRoZW4iLCJjYXRjaCIsInJldHJpZXZlUmVjYXB0Y2hhVG9rZW4iLCJyZWFkeSIsImV4ZWN1dGUiLCJqc0hlbHBlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLl9sb2FkSlMiLCJpbmplY3RSZWNhcHRjaGFGaWVsZHMiLCJjYXB0Y2hhUmVzcCIsInZlcmlmaWVyIiwiY2FwdGNoYVJlc3BvbnNlIiwibmV3UmVxdWVzdCIsIkF1dGhNaWRkbGV3YXJlUXVldWUiLCJxdWV1ZSIsInB1c2hDYWxsYmFjayIsIm9uQWJvcnQiLCJ3cmFwcGVkQ2FsbGJhY2siLCJyZXN1bHQiLCJwdXNoIiwiaW5kZXgiLCJydW5NaWRkbGV3YXJlIiwibmV4dFVzZXIiLCJvbkFib3J0U3RhY2siLCJiZWZvcmVTdGF0ZUNhbGxiYWNrIiwicmV2ZXJzZSIsIm9yaWdpbmFsTWVzc2FnZSIsIkF1dGhJbXBsIiwiYXBwIiwiaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyIiwiYXBwQ2hlY2tTZXJ2aWNlUHJvdmlkZXIiLCJlbXVsYXRvckNvbmZpZyIsIlN1YnNjcmlwdGlvbiIsInJlZGlyZWN0VXNlciIsImlzUHJvYWN0aXZlUmVmcmVzaEVuYWJsZWQiLCJfaXNJbml0aWFsaXplZCIsIl9kZWxldGVkIiwiX2luaXRpYWxpemF0aW9uUHJvbWlzZSIsIl9wb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJsYXN0Tm90aWZpZWRVaWQiLCJhcHBWZXJpZmljYXRpb25EaXNhYmxlZEZvclRlc3RpbmciLCJjbGllbnRWZXJzaW9uIiwic2RrQ2xpZW50VmVyc2lvbiIsIl9pbml0aWFsaXplV2l0aFBlcnNpc3RlbmNlIiwicG9wdXBSZWRpcmVjdFJlc29sdmVyIiwicGVyc2lzdGVuY2VNYW5hZ2VyIiwiX3Nob3VsZEluaXRQcm9hY3RpdmVseSIsIl9pbml0aWFsaXplIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyIiwiYXNzZXJ0ZWRQZXJzaXN0ZW5jZSIsIl9jdXJyZW50VXNlciIsIl91cGRhdGVDdXJyZW50VXNlciIsInByZXZpb3VzbHlTdG9yZWRVc2VyIiwiZnV0dXJlQ3VycmVudFVzZXIiLCJuZWVkc1RvY2hlY2tNaWRkbGV3YXJlIiwiYXV0aERvbWFpbiIsImdldE9ySW5pdFJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwicmVkaXJlY3RVc2VyRXZlbnRJZCIsInN0b3JlZFVzZXJFdmVudElkIiwidHJ5UmVkaXJlY3RTaWduSW4iLCJkaXJlY3RseVNldEN1cnJlbnRVc2VyIiwiYmVmb3JlU3RhdGVRdWV1ZSIsIl9vdmVycmlkZVJlZGlyZWN0UmVzdWx0IiwicmVsb2FkQW5kU2V0Q3VycmVudFVzZXJPckNsZWFyIiwicmVkaXJlY3RSZXNvbHZlciIsIl9jb21wbGV0ZVJlZGlyZWN0Rm4iLCJfc2V0UmVkaXJlY3RVc2VyIiwiX2RlbGV0ZSIsInVzZXJFeHRlcm4iLCJza2lwQmVmb3JlU3RhdGVDYWxsYmFja3MiLCJub3RpZnlBdXRoTGlzdGVuZXJzIiwicmVkaXJlY3RQZXJzaXN0ZW5jZU1hbmFnZXIiLCJfZ2V0UmVjYXB0Y2hhQ29uZmlnIiwiX2dldFBlcnNpc3RlbmNlIiwiX3VwZGF0ZUVycm9yTWFwIiwibmV4dE9yT2JzZXJ2ZXIiLCJjb21wbGV0ZWQiLCJyZWdpc3RlclN0YXRlTGlzdGVuZXIiLCJhdXRoU3RhdGVTdWJzY3JpcHRpb24iLCJpZFRva2VuU3Vic2NyaXB0aW9uIiwicmVkaXJlY3RNYW5hZ2VyIiwicmVzb2x2ZXIiLCJfcmVkaXJlY3RQZXJzaXN0ZW5jZSIsIl9yZWRpcmVjdFVzZXJGb3JJZCIsImlkIiwibmV4dCIsImN1cnJlbnRVaWQiLCJzdWJzY3JpcHRpb24iLCJjYiIsImFkZE9ic2VydmVyIiwib3BlcmF0aW9ucyIsIl9sb2dGcmFtZXdvcmsiLCJmcmFtZXdvcmsiLCJzb3J0IiwiX2dldEZyYW1ld29ya3MiLCJvcHRpb25zIiwiYXBwSWQiLCJoZWFydGJlYXRzSGVhZGVyIiwiZ2V0SW1tZWRpYXRlIiwib3B0aW9uYWwiLCJhcHBDaGVja1Rva2VuIiwiX2dldEFwcENoZWNrVG9rZW4iLCJhcHBDaGVja1Rva2VuUmVzdWx0Iiwib2JzZXJ2ZXIiLCJkZXBzIiwiaXNJbml0aWFsaXplZCIsImluaXRpYWxPcHRpb25zIiwiZ2V0T3B0aW9ucyIsImhpZXJhcmNoeSIsImF1dGhJbnRlcm5hbCIsImRpc2FibGVXYXJuaW5ncyIsImV4dHJhY3RQcm90b2NvbCIsInBvcnQiLCJleHRyYWN0SG9zdEFuZFBvcnQiLCJwb3J0U3RyIiwic2V0dGluZ3MiLCJmcmVlemUiLCJlbWl0RW11bGF0b3JXYXJuaW5nIiwicHJvdG9jb2xFbmQiLCJpbmRleE9mIiwic3Vic3RyIiwiYXV0aG9yaXR5IiwiZXhlYyIsImhvc3RBbmRQb3J0IiwicG9wIiwiYnJhY2tldGVkSVB2NiIsInBhcnNlUG9ydCIsImF0dGFjaEJhbm5lciIsInN0eSIsInN0eWxlIiwiaW5uZXJUZXh0IiwicG9zaXRpb24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImNvbG9yIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbiIsInpJbmRleCIsInRleHRBbGlnbiIsImNsYXNzTGlzdCIsImFkZCIsImNvbnNvbGUiLCJpbmZvIiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaWduSW5NZXRob2QiLCJfZ2V0SWRUb2tlblJlc3BvbnNlIiwiX2F1dGgiLCJfbGlua1RvSWRUb2tlbiIsIl9pZFRva2VuIiwiX2dldFJlYXV0aGVudGljYXRpb25SZXNvbHZlciIsInJlc2V0UGFzc3dvcmQiLCJ1cGRhdGVFbWFpbFBhc3N3b3JkIiwic2lnbkluV2l0aFBhc3N3b3JkIiwic2VuZE9vYkNvZGUiLCJ2ZXJpZnlBbmRDaGFuZ2VFbWFpbCIsInNpZ25JbldpdGhFbWFpbExpbmtGb3JMaW5raW5nIiwiX2VtYWlsIiwiX3Bhc3N3b3JkIiwiX3RlbmFudElkIiwiX2Zyb21FbWFpbEFuZFBhc3N3b3JkIiwicGFzc3dvcmQiLCJfZnJvbUVtYWlsQW5kQ29kZSIsIm9vYkNvZGUiLCJvYmoiLCJyZXR1cm5TZWN1cmVUb2tlbiIsInJlcXVlc3RXaXRoUmVjYXB0Y2hhIiwibG9nIiwic2lnbkluV2l0aElkcCIsIklEUF9SRVFVRVNUX1VSSSIsInBlbmRpbmdUb2tlbiIsIl9mcm9tUGFyYW1zIiwiY3JlZCIsIm5vbmNlIiwib2F1dGhUb2tlbiIsIm9hdXRoVG9rZW5TZWNyZXQiLCJzZWNyZXQiLCJidWlsZFJlcXVlc3QiLCJhdXRvQ3JlYXRlIiwicmVxdWVzdFVyaSIsInBvc3RCb2R5Iiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZSIsIl9hZGRUaWRJZk5lY2Vzc2FyeSIsInRlbXBvcmFyeVByb29mIiwiVkVSSUZZX1BIT05FX05VTUJFUl9GT1JfRVhJU1RJTkdfRVJST1JfTUFQXyIsInZlcmlmeVBob25lTnVtYmVyRm9yRXhpc3RpbmciLCJhcGlSZXF1ZXN0Iiwib3BlcmF0aW9uIiwiX2Zyb21WZXJpZmljYXRpb24iLCJ2ZXJpZmljYXRpb25JZCIsInZlcmlmaWNhdGlvbkNvZGUiLCJfZnJvbVRva2VuUmVzcG9uc2UiLCJfbWFrZVZlcmlmaWNhdGlvblJlcXVlc3QiLCJzZXNzaW9uSW5mbyIsInBhcnNlTW9kZSIsIm1vZGUiLCJwYXJzZURlZXBMaW5rIiwibGluayIsImRvdWJsZURlZXBMaW5rIiwiaU9TRGVlcExpbmsiLCJpT1NEb3VibGVEZWVwTGluayIsImFjdGlvbkxpbmsiLCJzZWFyY2hQYXJhbXMiLCJjb250aW51ZVVybCIsInBhcnNlTGluayIsIlBST1ZJREVSX0lEIiwiY3JlZGVudGlhbCIsImNyZWRlbnRpYWxXaXRoTGluayIsImVtYWlsTGluayIsImFjdGlvbkNvZGVVcmwiLCJGZWRlcmF0ZWRBdXRoUHJvdmlkZXIiLCJkZWZhdWx0TGFuZ3VhZ2VDb2RlIiwiY3VzdG9tUGFyYW1ldGVycyIsInNldERlZmF1bHRMYW5ndWFnZSIsInNldEN1c3RvbVBhcmFtZXRlcnMiLCJjdXN0b21PQXV0aFBhcmFtZXRlcnMiLCJnZXRDdXN0b21QYXJhbWV0ZXJzIiwiQmFzZU9BdXRoUHJvdmlkZXIiLCJzY29wZXMiLCJhZGRTY29wZSIsInNjb3BlIiwiZ2V0U2NvcGVzIiwiY3JlZGVudGlhbEZyb21KU09OIiwiX2NyZWRlbnRpYWwiLCJyYXdOb25jZSIsImNyZWRlbnRpYWxGcm9tUmVzdWx0IiwidXNlckNyZWRlbnRpYWwiLCJvYXV0aENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiY3JlZGVudGlhbEZyb21FcnJvciIsInRva2VuUmVzcG9uc2UiLCJvYXV0aElkVG9rZW4iLCJvYXV0aEFjY2Vzc1Rva2VuIiwiRkFDRUJPT0tfU0lHTl9JTl9NRVRIT0QiLCJjcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIkdPT0dMRV9TSUdOX0lOX01FVEhPRCIsIkdJVEhVQl9TSUdOX0lOX01FVEhPRCIsIlNBTUxBdXRoQ3JlZGVudGlhbCIsIl9jcmVhdGUiLCJTQU1MX1BST1ZJREVSX1BSRUZJWCIsInNhbWxDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIlRXSVRURVJfU0lHTl9JTl9NRVRIT0QiLCJzaWduVXAiLCJVc2VyQ3JlZGVudGlhbEltcGwiLCJvcGVyYXRpb25UeXBlIiwicHJvdmlkZXJJZEZvclJlc3BvbnNlIiwidXNlckNyZWQiLCJfZm9yT3BlcmF0aW9uIiwiTXVsdGlGYWN0b3JFcnJvciIsInNldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiX2Zyb21FcnJvckFuZE9wZXJhdGlvbiIsIl9wcm9jZXNzQ3JlZGVudGlhbFNhdmluZ01mYUNvbnRleHRJZk5lY2Vzc2FyeSIsImlkVG9rZW5Qcm92aWRlciIsInByb3ZpZGVyRGF0YUFzTmFtZXMiLCJTZXQiLCJwaWQiLCJfYXNzZXJ0TGlua2VkU3RhdHVzIiwiZGVsZXRlUHJvdmlkZXIiLCJwcm92aWRlcnNMZWZ0IiwicGQiLCJoYXMiLCJfbGluayIsImV4cGVjdGVkIiwicHJvdmlkZXJJZHMiLCJfcmVhdXRoZW50aWNhdGUiLCJwYXJzZWQiLCJzdWIiLCJfc2lnbkluV2l0aENyZWRlbnRpYWwiLCJjdXN0b21Ub2tlbiIsImdldElkVG9rZW5SZXNwb25zZSIsIk11bHRpRmFjdG9ySW5mb0ltcGwiLCJmYWN0b3JJZCIsIm1mYUVucm9sbG1lbnRJZCIsImVucm9sbG1lbnRUaW1lIiwiZW5yb2xsZWRBdCIsIl9mcm9tU2VydmVyUmVzcG9uc2UiLCJlbnJvbGxtZW50IiwiUGhvbmVNdWx0aUZhY3RvckluZm9JbXBsIiwiVG90cE11bHRpRmFjdG9ySW5mb0ltcGwiLCJwaG9uZUluZm8iLCJfc2V0QWN0aW9uQ29kZVNldHRpbmdzT25SZXF1ZXN0IiwiYWN0aW9uQ29kZVNldHRpbmdzIiwiZHluYW1pY0xpbmtEb21haW4iLCJjYW5IYW5kbGVDb2RlSW5BcHAiLCJoYW5kbGVDb2RlSW5BcHAiLCJpT1MiLCJidW5kbGVJZCIsImlPU0J1bmRsZUlkIiwiYW5kcm9pZCIsInBhY2thZ2VOYW1lIiwiYW5kcm9pZEluc3RhbGxBcHAiLCJpbnN0YWxsQXBwIiwiYW5kcm9pZE1pbmltdW1WZXJzaW9uQ29kZSIsIm1pbmltdW1WZXJzaW9uIiwiYW5kcm9pZFBhY2thZ2VOYW1lIiwicmVxdWVzdFR5cGUiLCJhdXRoZW50aWNhdGlvbi5zZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiYXV0aGVudGljYXRpb25cclxuICAgICAgICAgICAgLnNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJuZXdQYXNzd29yZCIsImFjY291bnQucmVzZXRQYXNzd29yZCIsImFjY291bnQuYXBwbHlBY3Rpb25Db2RlIiwiYXV0aE1vZHVsYXIiLCJuZXdFbWFpbCIsIm1mYUluZm8iLCJtdWx0aUZhY3RvckluZm8iLCJkYXRhIiwicHJldmlvdXNFbWFpbCIsInNpZ25VcFJlc3BvbnNlIiwic2V0QWN0aW9uQ29kZVNldHRpbmdzIiwiYXBpLnNlbmRTaWduSW5MaW5rVG9FbWFpbCIsImFwaVxyXG4gICAgICAgICAgICAuc2VuZFNpZ25JbkxpbmtUb0VtYWlsIiwiY3JlYXRlQXV0aFVyaSIsImNvbnRpbnVlVXJpIiwiaWRlbnRpZmllciIsInNpZ25pbk1ldGhvZHMiLCJhcGkuc2VuZEVtYWlsVmVyaWZpY2F0aW9uIiwiYXBpLnZlcmlmeUFuZENoYW5nZUVtYWlsIiwicHJvZmlsZVJlcXVlc3QiLCJhcGlVcGRhdGVQcm9maWxlIiwicGFzc3dvcmRQcm92aWRlciIsImZpbmQiLCJ1cGRhdGVFbWFpbE9yUGFzc3dvcmQiLCJhcGlVcGRhdGVFbWFpbFBhc3N3b3JkIiwicHJvZmlsZSIsInJhd1VzZXJJbmZvIiwiaXNOZXdVc2VyIiwia2luZCIsImZpbHRlcmVkUHJvdmlkZXJJZCIsIkdlbmVyaWNBZGRpdGlvbmFsVXNlckluZm8iLCJGYWNlYm9va0FkZGl0aW9uYWxVc2VySW5mbyIsIkdpdGh1YkFkZGl0aW9uYWxVc2VySW5mbyIsIkdvb2dsZUFkZGl0aW9uYWxVc2VySW5mbyIsIlR3aXR0ZXJBZGRpdGlvbmFsVXNlckluZm8iLCJzY3JlZW5OYW1lIiwiRmVkZXJhdGVkQWRkaXRpb25hbFVzZXJJbmZvV2l0aFVzZXJuYW1lIiwidXNlcm5hbWUiLCJsb2dpbiIsIk11bHRpRmFjdG9yU2Vzc2lvbkltcGwiLCJfZnJvbUlkdG9rZW4iLCJfZnJvbU1mYVBlbmRpbmdDcmVkZW50aWFsIiwibWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtdWx0aUZhY3RvclNlc3Npb24iLCJwZW5kaW5nQ3JlZGVudGlhbCIsIk11bHRpRmFjdG9yUmVzb2x2ZXJJbXBsIiwic2Vzc2lvbiIsImhpbnRzIiwic2lnbkluUmVzb2x2ZXIiLCJfZnJvbUVycm9yIiwibWZhUmVzcG9uc2UiLCJfcHJvY2VzcyIsInJlc29sdmVTaWduSW4iLCJhc3NlcnRpb25FeHRlcm4iLCJlcnJvckludGVybmFsIiwiTXVsdGlGYWN0b3JVc2VySW1wbCIsImVucm9sbGVkRmFjdG9ycyIsIl9mcm9tVXNlciIsImdldFNlc3Npb24iLCJlbnJvbGwiLCJmaW5hbGl6ZU1mYVJlc3BvbnNlIiwidW5lbnJvbGwiLCJpbmZvT3JVaWQiLCJ3aXRoZHJhd01mYSIsIm11bHRpRmFjdG9yVXNlckNhY2hlIiwiV2Vha01hcCIsInVzZXJNb2R1bGFyIiwiU1RPUkFHRV9BVkFJTEFCTEVfS0VZIiwiQnJvd3NlclBlcnNpc3RlbmNlQ2xhc3MiLCJzdG9yYWdlUmV0cmlldmVyIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwiX2lmcmFtZUNhbm5vdFN5bmNXZWJTdG9yYWdlIiwiX1BPTExJTkdfSU5URVJWQUxfTVMiLCJJRTEwX0xPQ0FMX1NUT1JBR0VfU1lOQ19ERUxBWSIsIkJyb3dzZXJMb2NhbFBlcnNpc3RlbmNlIiwibG9jYWxTdG9yYWdlIiwiZXZlbnQiLCJwb2xsIiwib25TdG9yYWdlRXZlbnQiLCJsaXN0ZW5lcnMiLCJsb2NhbENhY2hlIiwicG9sbFRpbWVyIiwiZmFsbGJhY2tUb1BvbGxpbmciLCJfaXNNb2JpbGVCcm93c2VyIiwiZm9yQWxsQ2hhbmdlZEtleXMiLCJrZXlzIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsIl9vbGRWYWx1ZSIsIm5vdGlmeUxpc3RlbmVycyIsImRldGFjaExpc3RlbmVyIiwic3RvcFBvbGxpbmciLCJzYWZhcmlMb2NhbFN0b3JhZ2VOb3RTeW5jZWQiLCJzdG9yZWRWYWx1ZSIsInRyaWdnZXJMaXN0ZW5lcnMiLCJsaXN0ZW5lciIsImZyb20iLCJzdGFydFBvbGxpbmciLCJzZXRJbnRlcnZhbCIsIlN0b3JhZ2VFdmVudCIsImNsZWFySW50ZXJ2YWwiLCJhdHRhY2hMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaXplIiwiQnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsInNlc3Npb25TdG9yYWdlIiwiX2FsbFNldHRsZWQiLCJwcm9taXNlcyIsImZ1bGZpbGxlZCIsInJlYXNvbiIsIlJlY2VpdmVyIiwiZXZlbnRUYXJnZXQiLCJoYW5kbGVyc01hcCIsImhhbmRsZUV2ZW50IiwiZXhpc3RpbmdJbnN0YW5jZSIsInJlY2VpdmVycyIsInJlY2VpdmVyIiwiaXNMaXN0ZW5pbmd0byIsIm5ld0luc3RhbmNlIiwibWVzc2FnZUV2ZW50IiwiZXZlbnRJZCIsImV2ZW50VHlwZSIsImhhbmRsZXJzIiwicG9ydHMiLCJwb3N0TWVzc2FnZSIsInN0YXR1cyIsImhhbmRsZXIiLCJvcmlnaW4iLCJfc3Vic2NyaWJlIiwiZXZlbnRIYW5kbGVyIiwiX3Vuc3Vic2NyaWJlIiwiX2dlbmVyYXRlRXZlbnRJZCIsImRpZ2l0cyIsImkiLCJTZW5kZXIiLCJ0YXJnZXQiLCJyZW1vdmVNZXNzYWdlSGFuZGxlciIsIm1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJvbk1lc3NhZ2UiLCJjbG9zZSIsIl9zZW5kIiwidGltZW91dCIsIk1lc3NhZ2VDaGFubmVsIiwiY29tcGxldGlvblRpbWVyIiwic3RhcnQiLCJhY2tUaW1lciIsInBvcnQyIiwiZmluYWxseSIsIl93aW5kb3ciLCJfc2V0V2luZG93TG9jYXRpb24iLCJfaXNXb3JrZXIiLCJfZ2V0QWN0aXZlU2VydmljZVdvcmtlciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RyYXRpb24iLCJhY3RpdmUiLCJfZ2V0U2VydmljZVdvcmtlckNvbnRyb2xsZXIiLCJjb250cm9sbGVyIiwiX2dldFdvcmtlckdsb2JhbFNjb3BlIiwiREJfTkFNRSIsIkRCX1ZFUlNJT04iLCJEQl9PQkpFQ1RTVE9SRV9OQU1FIiwiREJfREFUQV9LRVlQQVRIIiwiREJQcm9taXNlIiwidG9Qcm9taXNlIiwiZ2V0T2JqZWN0U3RvcmUiLCJkYiIsImlzUmVhZFdyaXRlIiwidHJhbnNhY3Rpb24iLCJvYmplY3RTdG9yZSIsIl9kZWxldGVEYXRhYmFzZSIsImluZGV4ZWREQiIsImRlbGV0ZURhdGFiYXNlIiwiX29wZW5EYXRhYmFzZSIsIm9wZW4iLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJvYmplY3RTdG9yZU5hbWVzIiwiY29udGFpbnMiLCJfcHV0T2JqZWN0IiwicHV0IiwiZ2V0T2JqZWN0IiwiX1RSQU5TQUNUSU9OX1JFVFJZX0NPVU5UIiwiSW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsInBlbmRpbmdXcml0ZXMiLCJzZW5kZXIiLCJzZXJ2aWNlV29ya2VyUmVjZWl2ZXJBdmFpbGFibGUiLCJhY3RpdmVTZXJ2aWNlV29ya2VyIiwiX3dvcmtlckluaXRpYWxpemF0aW9uUHJvbWlzZSIsImluaXRpYWxpemVTZXJ2aWNlV29ya2VyTWVzc2FnaW5nIiwiX29wZW5EYiIsIl93aXRoUmV0cmllcyIsIm9wIiwibnVtQXR0ZW1wdHMiLCJpbml0aWFsaXplUmVjZWl2ZXIiLCJpbml0aWFsaXplU2VuZGVyIiwiX29yaWdpbiIsIl9wb2xsIiwia2V5UHJvY2Vzc2VkIiwiX2RhdGEiLCJyZXN1bHRzIiwibm90aWZ5U2VydmljZVdvcmtlciIsIl9kZWxldGVPYmplY3QiLCJfd2l0aFBlbmRpbmdXcml0ZSIsIndyaXRlIiwiZ2V0QWxsUmVxdWVzdCIsImdldEFsbCIsImtleXNJblJlc3VsdCIsImZiYXNlX2tleSIsImxvY2FsS2V5IiwiX1NPTFZFX1RJTUVfTVMiLCJfRVhQSVJBVElPTl9USU1FX01TIiwiX1dJREdFVF9JRF9TVEFSVCIsIk1vY2tSZUNhcHRjaGEiLCJjb3VudGVyIiwicmVuZGVyIiwiY29udGFpbmVyIiwicGFyYW1ldGVycyIsIl93aWRnZXRzIiwiTW9ja1dpZGdldCIsInJlc2V0Iiwib3B0V2lkZ2V0SWQiLCJjb250YWluZXJPcklkIiwiZGVsZXRlZCIsInJlc3BvbnNlVG9rZW4iLCJjbGlja0hhbmRsZXIiLCJnZXRFbGVtZW50QnlJZCIsImlzVmlzaWJsZSIsImNoZWNrSWZEZWxldGVkIiwiZ2VuZXJhdGVSYW5kb21BbHBoYU51bWVyaWNTdHJpbmciLCJleHBpcmVkQ2FsbGJhY2siLCJsZW4iLCJjaGFycyIsImFsbG93ZWRDaGFycyIsImNoYXJBdCIsIl9KU0xPQURfQ0FMTEJBQ0siLCJqc0hlbHBlcnMuX2dlbmVyYXRlQ2FsbGJhY2tOYW1lIiwiTkVUV09SS19USU1FT1VUX0RFTEFZIiwiUkVDQVBUQ0hBX0JBU0UiLCJSZUNhcHRjaGFMb2FkZXJJbXBsIiwiaG9zdExhbmd1YWdlIiwibG9hZCIsImhsIiwiaXNIb3N0TGFuZ3VhZ2VWYWxpZCIsInNob3VsZFJlc29sdmVJbW1lZGlhdGVseSIsInJlY2FwdGNoYSIsIndpZGdldElkIiwianNIZWxwZXJzLl9sb2FkSlMiLCJjbGVhcmVkT25lSW5zdGFuY2UiLCJsaWJyYXJ5U2VwYXJhdGVseUxvYWRlZCIsIk1vY2tSZUNhcHRjaGFMb2FkZXJJbXBsIiwiUkVDQVBUQ0hBX1ZFUklGSUVSX1RZUEUiLCJERUZBVUxUX1BBUkFNUyIsInRoZW1lIiwiZGVzdHJveWVkIiwicmVuZGVyUHJvbWlzZSIsImlzSW52aXNpYmxlIiwibWFrZVRva2VuQ2FsbGJhY2siLCJfcmVjYXB0Y2hhTG9hZGVyIiwidmFsaWRhdGVTdGFydGluZ1N0YXRlIiwiYXNzZXJ0Tm90RGVzdHJveWVkIiwiZ2V0QXNzZXJ0ZWRSZWNhcHRjaGEiLCJ0b2tlbkNoYW5nZSIsInRva2VuQ2hhbmdlTGlzdGVuZXJzIiwibWFrZVJlbmRlclByb21pc2UiLCJfcmVzZXQiLCJjbGVhciIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZUNoaWxkIiwic2l0ZWtleSIsImhhc0NoaWxkTm9kZXMiLCJleGlzdGluZyIsImdsb2JhbEZ1bmMiLCJpbml0IiwiZ3VhcmFudGVlZEVtcHR5IiwiZG9tUmVhZHkiLCJDb25maXJtYXRpb25SZXN1bHRJbXBsIiwib25Db25maXJtYXRpb24iLCJjb25maXJtIiwiYXV0aENyZWRlbnRpYWwiLCJhcHBWZXJpZmllciIsIl92ZXJpZnlQaG9uZU51bWJlciIsInJlY2FwdGNoYVRva2VuIiwicGhvbmVJbmZvT3B0aW9ucyIsInN0YXJ0RW5yb2xsUGhvbmVNZmEiLCJwaG9uZUVucm9sbG1lbnRJbmZvIiwicGhvbmVTZXNzaW9uSW5mbyIsIm11bHRpRmFjdG9ySGludCIsIm11bHRpRmFjdG9yVWlkIiwic3RhcnRTaWduSW5QaG9uZU1mYSIsInBob25lU2lnbkluSW5mbyIsInBob25lUmVzcG9uc2VJbmZvIiwidmVyaWZ5UGhvbmVOdW1iZXIiLCJwaG9uZU9wdGlvbnMiLCJhcHBsaWNhdGlvblZlcmlmaWVyIiwicmVzb2x2ZXJPdmVycmlkZSIsIklkcENyZWRlbnRpYWwiLCJfYnVpbGRJZHBSZXF1ZXN0Iiwic2Vzc2lvbklkIiwicmV0dXJuSWRwQ3JlZGVudGlhbCIsIl9zaWduSW4iLCJfcmVhdXRoIiwiX2xpbmtVc2VyIiwiQWJzdHJhY3RQb3B1cFJlZGlyZWN0T3BlcmF0aW9uIiwicGVuZGluZ1Byb21pc2UiLCJldmVudE1hbmFnZXIiLCJvbkV4ZWN1dGlvbiIsInJlZ2lzdGVyQ29uc3VtZXIiLCJvbkF1dGhFdmVudCIsInVybFJlc3BvbnNlIiwiZ2V0SWRwVGFzayIsIm9uRXJyb3IiLCJ1bnJlZ2lzdGVyQW5kQ2xlYW5VcCIsInVucmVnaXN0ZXJDb25zdW1lciIsImNsZWFuVXAiLCJfUE9MTF9XSU5ET1dfQ0xPU0VfVElNRU9VVCIsInJlc29sdmVySW50ZXJuYWwiLCJfd2l0aERlZmF1bHRSZXNvbHZlciIsIlBvcHVwT3BlcmF0aW9uIiwiZXhlY3V0ZU5vdE51bGwiLCJhdXRoV2luZG93IiwicG9sbElkIiwiY3VycmVudFBvcHVwQWN0aW9uIiwiY2FuY2VsIiwiX29wZW5Qb3B1cCIsImFzc29jaWF0ZWRFdmVudCIsIl9vcmlnaW5WYWxpZGF0aW9uIiwiX2lzSWZyYW1lV2ViU3RvcmFnZVN1cHBvcnRlZCIsImlzU3VwcG9ydGVkIiwicG9sbFVzZXJDYW5jZWxsYXRpb24iLCJQRU5ESU5HX1JFRElSRUNUX0tFWSIsInJlZGlyZWN0T3V0Y29tZU1hcCIsIlJlZGlyZWN0QWN0aW9uIiwicmVhZHlPdXRjb21lIiwiaGFzUGVuZGluZ1JlZGlyZWN0IiwiX2dldEFuZENsZWFyUGVuZGluZ1JlZGlyZWN0U3RhdHVzIiwicGVuZGluZ1JlZGlyZWN0S2V5IiwicmVzb2x2ZXJQZXJzaXN0ZW5jZSIsIl9zZXRQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJfY2xlYXJSZWRpcmVjdE91dGNvbWVzIiwiX3NpZ25JbldpdGhSZWRpcmVjdCIsIl9vcGVuUmVkaXJlY3QiLCJfcmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJwcmVwYXJlVXNlckZvclJlZGlyZWN0IiwiX2xpbmtXaXRoUmVkaXJlY3QiLCJfZ2V0UmVkaXJlY3RSZXN1bHQiLCJyZXNvbHZlckV4dGVybiIsIkVWRU5UX0RVUExJQ0FUSU9OX0NBQ0hFX0RVUkFUSU9OX01TIiwiQXV0aEV2ZW50TWFuYWdlciIsInF1ZXVlZFJlZGlyZWN0RXZlbnQiLCJoYXNIYW5kbGVkUG90ZW50aWFsUmVkaXJlY3QiLCJhdXRoRXZlbnRDb25zdW1lciIsImNvbnN1bWVycyIsImlzRXZlbnRGb3JDb25zdW1lciIsInNlbmRUb0NvbnN1bWVyIiwic2F2ZUV2ZW50VG9DYWNoZSIsIm9uRXZlbnQiLCJoYXNFdmVudEJlZW5IYW5kbGVkIiwiaGFuZGxlZCIsImNvbnN1bWVyIiwiaXNSZWRpcmVjdEV2ZW50IiwiaXNOdWxsUmVkaXJlY3RFdmVudCIsImV2ZW50SWRNYXRjaGVzIiwibGFzdFByb2Nlc3NlZEV2ZW50VGltZSIsImNhY2hlZEV2ZW50VWlkcyIsImV2ZW50VWlkIiwidiIsIl9nZXRQcm9qZWN0Q29uZmlnIiwiSVBfQUREUkVTU19SRUdFWCIsIkhUVFBfUkVHRVgiLCJfdmFsaWRhdGVPcmlnaW4iLCJhdXRob3JpemVkRG9tYWlucyIsImRvbWFpbiIsIm1hdGNoRG9tYWluIiwiY3VycmVudFVybCIsImhvc3RuYW1lIiwiVVJMIiwiY2VVcmwiLCJlc2NhcGVkRG9tYWluUGF0dGVybiIsIlJlZ0V4cCIsIk5FVFdPUktfVElNRU9VVCIsInJlc2V0VW5sb2FkZWRHYXBpTW9kdWxlcyIsImJlYWNvbiIsIl9fX2pzbCIsIkgiLCJoaW50IiwiciIsIkwiLCJDUCIsImxvYWRHYXBpIiwibG9hZEdhcGlJZnJhbWUiLCJnYXBpIiwiaWZyYW1lcyIsImdldENvbnRleHQiLCJvbnRpbWVvdXQiLCJjYk5hbWUiLCJqcy5fZ2VuZXJhdGVDYWxsYmFja05hbWUiLCJqc1xyXG4gICAgICAgICAgICAgICAgLl9sb2FkSlMiLCJjYWNoZWRHQXBpTG9hZGVyIiwiX2xvYWRHYXBpIiwiUElOR19USU1FT1VUIiwiSUZSQU1FX1BBVEgiLCJFTVVMQVRFRF9JRlJBTUVfUEFUSCIsIklGUkFNRV9BVFRSSUJVVEVTIiwiaGVpZ2h0IiwidGFiaW5kZXgiLCJFSURfRlJPTV9BUElIT1NUIiwiZ2V0SWZyYW1lVXJsIiwiZWlkIiwiZnciLCJfb3BlbklmcmFtZSIsImNvbnRleHQiLCJnYXBpTG9hZGVyLl9sb2FkR2FwaSIsIndoZXJlIiwibWVzc2FnZUhhbmRsZXJzRmlsdGVyIiwiQ1JPU1NfT1JJR0lOX0lGUkFNRVNfRklMVEVSIiwiYXR0cmlidXRlcyIsImRvbnRjbGVhciIsImlmcmFtZSIsInJlc3R5bGUiLCJzZXRIaWRlT25MZWF2ZSIsIm5ldHdvcmtFcnJvciIsIm5ldHdvcmtFcnJvclRpbWVyIiwiY2xlYXJUaW1lckFuZFJlc29sdmUiLCJwaW5nIiwiQkFTRV9QT1BVUF9PUFRJT05TIiwicmVzaXphYmxlIiwic3RhdHVzYmFyIiwidG9vbGJhciIsIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIlRBUkdFVF9CTEFOSyIsIkZJUkVGT1hfRU1QVFlfVVJMIiwiQXV0aFBvcHVwIiwic2NyZWVuIiwiYXZhaWxIZWlnaHQiLCJhdmFpbFdpZHRoIiwic2Nyb2xsYmFycyIsIm9wdGlvbnNTdHJpbmciLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjdW0iLCJvcGVuQXNOZXdXaW5kb3dJT1MiLCJuZXdXaW4iLCJmb2N1cyIsImNsaWNrIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJXSURHRVRfUEFUSCIsIkVNVUxBVE9SX1dJREdFVF9QQVRIIiwiRklSRUJBU0VfQVBQX0NIRUNLX0ZSQUdNRU5UX0lEIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX2dldFJlZGlyZWN0VXJsIiwiYXV0aFR5cGUiLCJyZWRpcmVjdFVybCIsImFkZGl0aW9uYWxQYXJhbXMiLCJ0aWQiLCJwYXJhbXNEaWN0IiwiYXBwQ2hlY2tUb2tlbkZyYWdtZW50IiwiZ2V0SGFuZGxlckJhc2UiLCJXRUJfU1RPUkFHRV9TVVBQT1JUX0tFWSIsIkJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJldmVudE1hbmFnZXJzIiwib3JpZ2luVmFsaWRhdGlvblByb21pc2VzIiwiX29wZW4iLCJpbml0QW5kR2V0TWFuYWdlciIsInJlZ2lzdGVyIiwiaWZyYW1lRXZlbnQiLCJhdXRoRXZlbnQiLCJzZW5kIiwiTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2ZpbmFsaXplRW5yb2xsIiwiX2ZpbmFsaXplU2lnbkluIiwiUGhvbmVNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbUNyZWRlbnRpYWwiLCJmaW5hbGl6ZUVucm9sbFBob25lTWZhIiwicGhvbmVWZXJpZmljYXRpb25JbmZvIiwiZmluYWxpemVTaWduSW5QaG9uZU1mYSIsIkZBQ1RPUl9JRCIsImFzc2VydGlvbkZvckVucm9sbG1lbnQiLCJvbmVUaW1lUGFzc3dvcmQiLCJUb3RwTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2Zyb21TZWNyZXQiLCJhc3NlcnRpb25Gb3JTaWduSW4iLCJlbnJvbGxtZW50SWQiLCJfZnJvbUVucm9sbG1lbnRJZCIsImdlbmVyYXRlU2VjcmV0IiwibWZhU2Vzc2lvbiIsInN0YXJ0RW5yb2xsVG90cE1mYSIsInRvdHBFbnJvbGxtZW50SW5mbyIsIl9mcm9tU3RhcnRUb3RwTWZhRW5yb2xsbWVudFJlc3BvbnNlIiwib3RwIiwiZmluYWxpemVFbnJvbGxUb3RwTWZhIiwidG90cFZlcmlmaWNhdGlvbkluZm8iLCJfbWFrZVRvdHBWZXJpZmljYXRpb25JbmZvIiwiZmluYWxpemVTaWduSW5Ub3RwTWZhIiwic2VjcmV0S2V5IiwiaGFzaGluZ0FsZ29yaXRobSIsImNvZGVMZW5ndGgiLCJjb2RlSW50ZXJ2YWxTZWNvbmRzIiwiZW5yb2xsbWVudENvbXBsZXRpb25EZWFkbGluZSIsInRvdHBTZXNzaW9uSW5mbyIsInNoYXJlZFNlY3JldEtleSIsInZlcmlmaWNhdGlvbkNvZGVMZW5ndGgiLCJwZXJpb2RTZWMiLCJmaW5hbGl6ZUVucm9sbG1lbnRUaW1lIiwiZ2VuZXJhdGVRckNvZGVVcmwiLCJhY2NvdW50TmFtZSIsImlzc3VlciIsInVzZURlZmF1bHRzIiwiX2lzRW1wdHlTdHJpbmciLCJpbnB1dCIsIkF1dGhJbnRlcm9wIiwiZ2V0VWlkIiwiYXNzZXJ0QXV0aENvbmZpZ3VyZWQiLCJhZGRBdXRoVG9rZW5MaXN0ZW5lciIsImludGVybmFsTGlzdGVuZXJzIiwidW5zdWJzY3JpYmUiLCJ1cGRhdGVQcm9hY3RpdmVSZWZyZXNoIiwicmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIiLCJnZXRWZXJzaW9uRm9yUGxhdGZvcm0iLCJyZWdpc3RlckF1dGgiLCJpbXBvcnRfY29tcG9uZW50IiwiZ2V0UHJvdmlkZXIiLCJhdXRoSW5zdGFuY2UiLCJfaW5pdGlhbGl6ZUF1dGhJbnN0YW5jZSIsInNldEluc3RhbnRpYXRpb25Nb2RlIiwic2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2siLCJfaW5zdGFuY2VJZGVudGlmaWVyIiwiX2luc3RhbmNlIiwiYXV0aEludGVybmFsUHJvdmlkZXIiLCJERUZBVUxUX0lEX1RPS0VOX01BWF9BR0UiLCJhdXRoSWRUb2tlbk1heEFnZSIsImxhc3RQb3N0ZWRJZFRva2VuIiwibWludENvb2tpZUZhY3RvcnkiLCJpZFRva2VuUmVzdWx0IiwiaWRUb2tlbkFnZSIsImF1dGhUb2tlblN5bmNVcmwiLCJtaW50Q29va2llIiwiYXV0aEVtdWxhdG9ySG9zdCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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