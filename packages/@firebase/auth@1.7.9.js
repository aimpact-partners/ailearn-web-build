System.register(["@firebase/util@1.10.0","@firebase/component@0.6.9","@firebase/logger@0.4.2","idb@7.1.1","@firebase/app@0.10.13","tslib@2.7.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.10.0"],["@firebase/component","0.6.9"],["@firebase/logger","0.4.2"],["idb","7.1.1"],["@firebase/app","0.10.13"],["tslib","2.7.0"],["@firebase/auth","1.7.9"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.10.0', dep), dep => dependencies.set('@firebase/component@0.6.9', dep), dep => dependencies.set('@firebase/logger@0.4.2', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.10.13', dep), dep => dependencies.set('tslib@2.7.0', dep)],
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

// .beyond/uimport/temp/@firebase/auth.1.7.9.js
var auth_1_7_9_exports = {};
__export(auth_1_7_9_exports, {
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
  revokeAccessToken: () => revokeAccessToken,
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
  validatePassword: () => validatePassword,
  verifyBeforeUpdateEmail: () => verifyBeforeUpdateEmail,
  verifyPasswordResetCode: () => verifyPasswordResetCode
});
module.exports = __toCommonJS(auth_1_7_9_exports);

// node_modules/@firebase/auth/dist/esm2017/index-68602d24.js
var import_app = require("@firebase/app@0.10.13");
var import_util = require("@firebase/util@1.10.0");
var import_logger = require("@firebase/logger@0.4.2");
var import_tslib = require("tslib@2.7.0");
var import_component = require("@firebase/component@0.6.9");
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
    ["invalid-app-id"]: "The mobile app identifier is not registered for the current project.",
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
    ["invalid-credential"]: "The supplied auth credential is incorrect, malformed or has expired.",
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
    ["invalid-recaptcha-version"]: "The reCAPTCHA version is invalid when sending request to the backend.",
    ["unsupported-password-policy-schema-version"]: "The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",
    ["password-does-not-meet-requirements"]: "The password does not meet the requirements."
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
  INVALID_LOGIN_CREDENTIALS: "auth/invalid-credential",
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
function _serverAppCurrentUserOperationNotSupportedError(auth) {
  return _errorWithCustomMessage(auth, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
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
    if (typeof globalThis !== "undefined" && globalThis.fetch) {
      return globalThis.fetch;
    }
    if (typeof fetch !== "undefined") {
      return fetch;
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
    if (typeof globalThis !== "undefined" && globalThis.Headers) {
      return globalThis.Headers;
    }
    if (typeof Headers !== "undefined") {
      return Headers;
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
    if (typeof globalThis !== "undefined" && globalThis.Response) {
      return globalThis.Response;
    }
    if (typeof Response !== "undefined") {
      return Response;
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
  ["INVALID_LOGIN_CREDENTIALS"]: "invalid-credential",
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
  ["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]: "password-does-not-meet-requirements",
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
    const fetchArgs = Object.assign({
      method,
      headers
    }, body);
    if (!(0, import_util.isCloudflareWorker)()) {
      fetchArgs.referrerPolicy = "no-referrer";
    }
    return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), fetchArgs);
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
function _parseEnforcementState(enforcementStateStr) {
  switch (enforcementStateStr) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
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
function isV2(grecaptcha) {
  return grecaptcha !== void 0 && grecaptcha.getResponse !== void 0;
}
function isEnterprise(grecaptcha) {
  return grecaptcha !== void 0 && grecaptcha.enterprise !== void 0;
}
var RecaptchaConfig = class {
  constructor(response) {
    this.siteKey = "";
    this.recaptchaEnforcementState = [];
    if (response.recaptchaKey === void 0) {
      throw new Error("recaptchaKey undefined");
    }
    this.siteKey = response.recaptchaKey.split("/")[3];
    this.recaptchaEnforcementState = response.recaptchaEnforcementState;
  }
  getProviderEnforcementState(providerStr) {
    if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) {
      return null;
    }
    for (const recaptchaEnforcementState of this.recaptchaEnforcementState) {
      if (recaptchaEnforcementState.provider && recaptchaEnforcementState.provider === providerStr) {
        return _parseEnforcementState(recaptchaEnforcementState.enforcementState);
      }
    }
    return null;
  }
  isProviderEnabled(providerStr) {
    return this.getProviderEnforcementState(providerStr) === "ENFORCE" || this.getProviderEnforcementState(providerStr) === "AUDIT";
  }
};
async function getRecaptchaParams(auth) {
  return (await _performApiRequest(auth, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || "";
}
async function getRecaptchaConfig(auth, request) {
  return _performApiRequest(auth, "GET", "/v2/recaptchaConfig", _addTidIfNecessary(auth, request));
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
async function revokeToken(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts:revokeToken", _addTidIfNecessary(auth, request));
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
  updateFromIdToken(idToken) {
    _assert(idToken.length !== 0, "internal-error");
    const expiresIn = _tokenExpiresIn(idToken);
    this.updateTokensAndExpiration(idToken, null, expiresIn);
  }
  async getToken(auth, forceRefresh = false) {
    if (!forceRefresh && this.accessToken && !this.isExpired) {
      return this.accessToken;
    }
    _assert(this.refreshToken, auth, "user-token-expired");
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
    if ((0, import_app._isFirebaseServerApp)(this.auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this.auth));
    }
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
  static async _fromGetAccountInfoResponse(auth, response, idToken) {
    const coreAccount = response.users[0];
    _assert(coreAccount.localId !== void 0, "internal-error");
    const providerData = coreAccount.providerUserInfo !== void 0 ? extractProviderData(coreAccount.providerUserInfo) : [];
    const isAnonymous = !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromIdToken(idToken);
    const user = new UserImpl({
      uid: coreAccount.localId,
      auth,
      stsTokenManager,
      isAnonymous
    });
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
      isAnonymous: !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length)
    };
    Object.assign(user, updates);
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
async function _getPasswordPolicy(auth, request = {}) {
  return _performApiRequest(auth, "GET", "/v2/passwordPolicy", _addTidIfNecessary(auth, request));
}
var MINIMUM_MIN_PASSWORD_LENGTH = 6;
var PasswordPolicyImpl = class {
  constructor(response) {
    var _a, _b, _c, _d;
    const responseOptions = response.customStrengthOptions;
    this.customStrengthOptions = {};
    this.customStrengthOptions.minPasswordLength = (_a = responseOptions.minPasswordLength) !== null && _a !== void 0 ? _a : MINIMUM_MIN_PASSWORD_LENGTH;
    if (responseOptions.maxPasswordLength) {
      this.customStrengthOptions.maxPasswordLength = responseOptions.maxPasswordLength;
    }
    if (responseOptions.containsLowercaseCharacter !== void 0) {
      this.customStrengthOptions.containsLowercaseLetter = responseOptions.containsLowercaseCharacter;
    }
    if (responseOptions.containsUppercaseCharacter !== void 0) {
      this.customStrengthOptions.containsUppercaseLetter = responseOptions.containsUppercaseCharacter;
    }
    if (responseOptions.containsNumericCharacter !== void 0) {
      this.customStrengthOptions.containsNumericCharacter = responseOptions.containsNumericCharacter;
    }
    if (responseOptions.containsNonAlphanumericCharacter !== void 0) {
      this.customStrengthOptions.containsNonAlphanumericCharacter = responseOptions.containsNonAlphanumericCharacter;
    }
    this.enforcementState = response.enforcementState;
    if (this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED") {
      this.enforcementState = "OFF";
    }
    this.allowedNonAlphanumericCharacters = (_c = (_b = response.allowedNonAlphanumericCharacters) === null || _b === void 0 ? void 0 : _b.join("")) !== null && _c !== void 0 ? _c : "";
    this.forceUpgradeOnSignin = (_d = response.forceUpgradeOnSignin) !== null && _d !== void 0 ? _d : false;
    this.schemaVersion = response.schemaVersion;
  }
  validatePassword(password) {
    var _a, _b, _c, _d, _e, _f;
    const status = {
      isValid: true,
      passwordPolicy: this
    };
    this.validatePasswordLengthOptions(password, status);
    this.validatePasswordCharacterOptions(password, status);
    status.isValid && (status.isValid = (_a = status.meetsMinPasswordLength) !== null && _a !== void 0 ? _a : true);
    status.isValid && (status.isValid = (_b = status.meetsMaxPasswordLength) !== null && _b !== void 0 ? _b : true);
    status.isValid && (status.isValid = (_c = status.containsLowercaseLetter) !== null && _c !== void 0 ? _c : true);
    status.isValid && (status.isValid = (_d = status.containsUppercaseLetter) !== null && _d !== void 0 ? _d : true);
    status.isValid && (status.isValid = (_e = status.containsNumericCharacter) !== null && _e !== void 0 ? _e : true);
    status.isValid && (status.isValid = (_f = status.containsNonAlphanumericCharacter) !== null && _f !== void 0 ? _f : true);
    return status;
  }
  validatePasswordLengthOptions(password, status) {
    const minPasswordLength = this.customStrengthOptions.minPasswordLength;
    const maxPasswordLength = this.customStrengthOptions.maxPasswordLength;
    if (minPasswordLength) {
      status.meetsMinPasswordLength = password.length >= minPasswordLength;
    }
    if (maxPasswordLength) {
      status.meetsMaxPasswordLength = password.length <= maxPasswordLength;
    }
  }
  validatePasswordCharacterOptions(password, status) {
    this.updatePasswordCharacterOptionsStatuses(status, false, false, false, false);
    let passwordChar;
    for (let i = 0; i < password.length; i++) {
      passwordChar = password.charAt(i);
      this.updatePasswordCharacterOptionsStatuses(status, passwordChar >= "a" && passwordChar <= "z", passwordChar >= "A" && passwordChar <= "Z", passwordChar >= "0" && passwordChar <= "9", this.allowedNonAlphanumericCharacters.includes(passwordChar));
    }
  }
  updatePasswordCharacterOptionsStatuses(status, containsLowercaseCharacter, containsUppercaseCharacter, containsNumericCharacter, containsNonAlphanumericCharacter) {
    if (this.customStrengthOptions.containsLowercaseLetter) {
      status.containsLowercaseLetter || (status.containsLowercaseLetter = containsLowercaseCharacter);
    }
    if (this.customStrengthOptions.containsUppercaseLetter) {
      status.containsUppercaseLetter || (status.containsUppercaseLetter = containsUppercaseCharacter);
    }
    if (this.customStrengthOptions.containsNumericCharacter) {
      status.containsNumericCharacter || (status.containsNumericCharacter = containsNumericCharacter);
    }
    if (this.customStrengthOptions.containsNonAlphanumericCharacter) {
      status.containsNonAlphanumericCharacter || (status.containsNonAlphanumericCharacter = containsNonAlphanumericCharacter);
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
    this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1;
    this._canInitEmulator = true;
    this._isInitialized = false;
    this._deleted = false;
    this._initializationPromise = null;
    this._popupRedirectResolver = null;
    this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
    this._agentRecaptchaConfig = null;
    this._tenantRecaptchaConfigs = {};
    this._projectPasswordPolicy = null;
    this._tenantPasswordPolicies = {};
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
  async initializeCurrentUserFromIdToken(idToken) {
    try {
      const response = await getAccountInfo(this, {
        idToken
      });
      const user = await UserImpl._fromGetAccountInfoResponse(this, response, idToken);
      await this.directlySetCurrentUser(user);
    } catch (err) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", err);
      await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(popupRedirectResolver) {
    var _a;
    if ((0, import_app._isFirebaseServerApp)(this.app)) {
      const idToken = this.app.settings.authIdToken;
      if (idToken) {
        return new Promise(resolve => {
          setTimeout(() => this.initializeCurrentUserFromIdToken(idToken).then(resolve, resolve));
        });
      } else {
        return this.directlySetCurrentUser(null);
      }
    }
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
    if ((0, import_app._isFirebaseServerApp)(this.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
    }
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
    if ((0, import_app._isFirebaseServerApp)(this.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
    }
    await this.beforeStateQueue.runMiddleware(null);
    if (this.redirectPersistenceManager || this._popupRedirectResolver) {
      await this._setRedirectUser(null);
    }
    return this._updateCurrentUser(null, true);
  }
  setPersistence(persistence) {
    if ((0, import_app._isFirebaseServerApp)(this.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
    }
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(_getInstance(persistence));
    });
  }
  _getRecaptchaConfig() {
    if (this.tenantId == null) {
      return this._agentRecaptchaConfig;
    } else {
      return this._tenantRecaptchaConfigs[this.tenantId];
    }
  }
  async validatePassword(password) {
    if (!this._getPasswordPolicyInternal()) {
      await this._updatePasswordPolicy();
    }
    const passwordPolicy = this._getPasswordPolicyInternal();
    if (passwordPolicy.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION) {
      return Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {}));
    }
    return passwordPolicy.validatePassword(password);
  }
  _getPasswordPolicyInternal() {
    if (this.tenantId === null) {
      return this._projectPasswordPolicy;
    } else {
      return this._tenantPasswordPolicies[this.tenantId];
    }
  }
  async _updatePasswordPolicy() {
    const response = await _getPasswordPolicy(this);
    const passwordPolicy = new PasswordPolicyImpl(response);
    if (this.tenantId === null) {
      this._projectPasswordPolicy = passwordPolicy;
    } else {
      this._tenantPasswordPolicies[this.tenantId] = passwordPolicy;
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
  async revokeAccessToken(token) {
    if (this.currentUser) {
      const idToken = await this.currentUser.getIdToken();
      const request = {
        providerId: "apple.com",
        tokenType: "ACCESS_TOKEN",
        token,
        idToken
      };
      if (this.tenantId != null) {
        request.tenantId = this.tenantId;
      }
      await revokeToken(this, request);
    }
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
    let isUnsubscribed = false;
    const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    _assert(promise, this, "internal-error");
    promise.then(() => {
      if (isUnsubscribed) {
        return;
      }
      cb(this.currentUser);
    });
    if (typeof nextOrObserver === "function") {
      const unsubscribe = subscription.addObserver(nextOrObserver, error, completed);
      return () => {
        isUnsubscribed = true;
        unsubscribe();
      };
    } else {
      const unsubscribe = subscription.addObserver(nextOrObserver);
      return () => {
        isUnsubscribed = true;
        unsubscribe();
      };
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
var externalJSProvider = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function _setExternalJSProvider(p) {
  externalJSProvider = p;
}
function _loadJS(url) {
  return externalJSProvider.loadJS(url);
}
function _recaptchaV2ScriptUrl() {
  return externalJSProvider.recaptchaV2Script;
}
function _recaptchaEnterpriseScriptUrl() {
  return externalJSProvider.recaptchaEnterpriseScript;
}
function _gapiScriptUrl() {
  return externalJSProvider.gapiScript;
}
function _generateCallbackName(prefix) {
  return `__${prefix}${Math.floor(Math.random() * 1e6)}`;
}
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
          let url = _recaptchaEnterpriseScriptUrl();
          if (url.length !== 0) {
            url += siteKey;
          }
          _loadJS(url).then(() => {
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
async function handleRecaptchaFlow(authInstance, request, actionName, actionMethod) {
  var _a;
  if ((_a = authInstance._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
    const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName, actionName === "getOobCode");
    return actionMethod(authInstance, requestWithRecaptcha);
  } else {
    return actionMethod(authInstance, request).catch(async error => {
      if (error.code === `auth/${"missing-recaptcha-token"}`) {
        console.log(`${actionName} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
        const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName, actionName === "getOobCode");
        return actionMethod(authInstance, requestWithRecaptcha);
      } else {
        return Promise.reject(error);
      }
    });
  }
}
async function _initializeRecaptchaConfig(auth) {
  const authInternal = _castAuth(auth);
  const response = await getRecaptchaConfig(authInternal, {
    clientType: "CLIENT_TYPE_WEB",
    version: "RECAPTCHA_ENTERPRISE"
  });
  const config = new RecaptchaConfig(response);
  if (authInternal.tenantId == null) {
    authInternal._agentRecaptchaConfig = config;
  } else {
    authInternal._tenantRecaptchaConfigs[authInternal.tenantId] = config;
  }
  if (config.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
    const verifier = new RecaptchaEnterpriseVerifier(authInternal);
    void verifier.verify();
  }
}
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
async function linkEmailPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:signUp", request);
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
    switch (this.signInMethod) {
      case "password":
        const request = {
          returnSecureToken: true,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
        };
        return handleRecaptchaFlow(auth, request, "signInWithPassword", signInWithPassword);
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
        const request = {
          idToken,
          returnSecureToken: true,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
        };
        return handleRecaptchaFlow(auth, request, "signUpPassword", linkEmailPassword);
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
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
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
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
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
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
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
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
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
async function recachePasswordPolicy(auth) {
  const authInternal = _castAuth(auth);
  if (authInternal._getPasswordPolicyInternal()) {
    await authInternal._updatePasswordPolicy();
  }
}
async function sendPasswordResetEmail(auth, email, actionCodeSettings) {
  const authInternal = _castAuth(auth);
  const request = {
    requestType: "PASSWORD_RESET",
    email,
    clientType: "CLIENT_TYPE_WEB"
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(authInternal, request, actionCodeSettings);
  }
  await handleRecaptchaFlow(authInternal, request, "getOobCode", sendPasswordResetEmail$1);
}
async function confirmPasswordReset(auth, oobCode, newPassword) {
  await resetPassword((0, import_util.getModularInstance)(auth), {
    oobCode,
    newPassword
  }).catch(async error => {
    if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
      void recachePasswordPolicy(auth);
    }
    throw error;
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
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const authInternal = _castAuth(auth);
  const request = {
    returnSecureToken: true,
    email,
    password,
    clientType: "CLIENT_TYPE_WEB"
  };
  const signUpResponse = handleRecaptchaFlow(authInternal, request, "signUpPassword", signUp);
  const response = await signUpResponse.catch(error => {
    if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
      void recachePasswordPolicy(auth);
    }
    throw error;
  });
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
  await authInternal._updateCurrentUser(userCredential.user);
  return userCredential;
}
function signInWithEmailAndPassword(auth, email, password) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  return signInWithCredential((0, import_util.getModularInstance)(auth), EmailAuthProvider.credential(email, password)).catch(async error => {
    if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
      void recachePasswordPolicy(auth);
    }
    throw error;
  });
}
async function sendSignInLinkToEmail(auth, email, actionCodeSettings) {
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
  setActionCodeSettings(request, actionCodeSettings);
  await handleRecaptchaFlow(authInternal, request, "getOobCode", sendSignInLinkToEmail$1);
}
function isSignInWithEmailLink(auth, emailLink) {
  const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
  return (actionCodeUrl === null || actionCodeUrl === void 0 ? void 0 : actionCodeUrl.operation) === "EMAIL_SIGNIN";
}
async function signInWithEmailLink(auth, email, emailLink) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
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
  const userInternal = (0, import_util.getModularInstance)(user);
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
  }
  return updateEmailOrPassword(userInternal, newEmail, null);
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
  return _initializeRecaptchaConfig(auth);
}
async function validatePassword(auth, password) {
  const authInternal = _castAuth(auth);
  return authInternal.validatePassword(password);
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
function revokeAccessToken(auth, token) {
  const authInternal = _castAuth(auth);
  return authInternal.revokeAccessToken(token);
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
var _POLLING_INTERVAL_MS$1 = 1e3;
var IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
var BrowserLocalPersistence = class extends BrowserPersistenceClass {
  constructor() {
    super(() => window.localStorage, "LOCAL");
    this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
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
    if (result.length !== 0) {
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
      const url = `${_recaptchaV2ScriptUrl()}?${(0, import_util.querystring)({
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
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
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
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
  }
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
  const userInternal = (0, import_util.getModularInstance)(user);
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
  }
  await _link$1(userInternal, credential);
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
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_createError(auth, "operation-not-supported-in-this-environment"));
  }
  const authInternal = _castAuth(auth);
  _assertInstanceOf(auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(authInternal, resolver);
  const action = new PopupOperation(authInternal, "signInViaPopup", provider, resolverInternal);
  return action.executeNotNull();
}
async function reauthenticateWithPopup(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_createError(userInternal.auth, "operation-not-supported-in-this-environment"));
  }
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
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
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
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
  }
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
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
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
      return _loadJS(`${_gapiScriptUrl()}?onload=${cbName}`).catch(e => reject(e));
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
var version = "1.7.9";
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
    case "WebExtension":
      return "web-extension";
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
  const authTokenSyncPath = (0, import_util.getExperimentalSetting)("authTokenSyncURL");
  if (authTokenSyncPath && typeof isSecureContext === "boolean" && isSecureContext) {
    const authTokenSyncUrl = new URL(authTokenSyncPath, location.origin);
    if (location.origin === authTokenSyncUrl.origin) {
      const mintCookie = mintCookieFactory(authTokenSyncUrl.toString());
      beforeAuthStateChanged(auth, mintCookie, () => mintCookie(auth.currentUser));
      onIdTokenChanged(auth, user => mintCookie(user));
    }
  }
  const authEmulatorHost = (0, import_util.getDefaultEmulatorHost)("auth");
  if (authEmulatorHost) {
    connectAuthEmulator(auth, `http://${authEmulatorHost}`);
  }
  return auth;
}
function getScriptParentElement() {
  var _a, _b;
  return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}
_setExternalJSProvider({
  loadJS(url) {
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
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
registerAuth("Browser");

// node_modules/@firebase/auth/dist/esm2017/index.js
var import_app2 = require("@firebase/app@0.10.13");
var import_util2 = require("@firebase/util@1.10.0");
var import_logger2 = require("@firebase/logger@0.4.2");
var import_tslib2 = require("tslib@2.7.0");
var import_component2 = require("@firebase/component@0.6.9");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hdXRoLjEuNy45LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tb2RlbC9lbnVtX21hcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYXNzZXJ0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9jYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9uYXZpZ2F0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9kZWxheS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZmV0Y2hfcHJvdmlkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vcmVjYXB0Y2hhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2FjY291bnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC90aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaWRfdG9rZW5fcmVzdWx0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaW52YWxpZGF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcHJvYWN0aXZlX3JlZnJlc2gudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX21ldGFkYXRhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVsb2FkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci90b2tlbl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaW5zdGFudGlhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luX21lbW9yeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9wZXJzaXN0ZW5jZV91c2VyX21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmVyc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL21pZGRsZXdhcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wYXNzd29yZF9wb2xpY3kvZ2V0X3Bhc3N3b3JkX3BvbGljeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3Bhc3N3b3JkX3BvbGljeV9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2xvYWRfanMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9lbnRlcnByaXNlX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvaW5pdGlhbGl6ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2F1dGhfY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc21zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2FjdGlvbl9jb2RlX3VybC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZlZGVyYXRlZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZhY2Vib29rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9nb29nbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dpdGh1Yi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy90d2l0dGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc2lnbl91cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfY3JlZGVudGlhbF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYW5vbnltb3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Vycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcHJvdmlkZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvbGlua191bmxpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWF1dGhlbnRpY2F0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2FjdGlvbl9jb2RlX3NldHRpbmdzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2NyZWF0ZV9hdXRoX3VyaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L3Byb2ZpbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hY2NvdW50X2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hZGRpdGlvbmFsX3VzZXJfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9zZXNzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV91c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvbG9jYWxfc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9zZXNzaW9uX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcHJvbWlzZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9yZWNlaXZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2V2ZW50X2lkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3NlbmRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9hdXRoX3dpbmRvdy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3dvcmtlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9pbmRleGVkX2RiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbW9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2xvYWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcHJvdmlkZXJzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hYnN0cmFjdF9wb3B1cF9yZWRpcmVjdF9vcGVyYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2V2ZW50X21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wcm9qZWN0X2NvbmZpZy9nZXRfcHJvamVjdF9jb25maWcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92YWxpZGF0ZV9vcmlnaW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2dhcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2lmcmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaGFuZGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wb3B1cF9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9hc3NlcnRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWZhL2Fzc2VydGlvbnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9hc3NlcnRpb25zL3RvdHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9maXJlYmFzZV9pbnRlcm5hbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3JlZ2lzdGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL2Rpc3QvZXNtMjAxNy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhdXRoXzFfN185X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFjdGlvbkNvZGVPcGVyYXRpb24iLCJBY3Rpb25Db2RlVVJMIiwiQXV0aENyZWRlbnRpYWwiLCJBdXRoRXJyb3JDb2RlcyIsIkFVVEhfRVJST1JfQ09ERVNfTUFQX0RPX05PVF9VU0VfSU5URVJOQUxMWSIsIkVtYWlsQXV0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiRmFjdG9ySWQiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJPQXV0aENyZWRlbnRpYWwiLCJPQXV0aFByb3ZpZGVyIiwiT3BlcmF0aW9uVHlwZSIsIlBob25lQXV0aENyZWRlbnRpYWwiLCJQaG9uZUF1dGhQcm92aWRlciIsIlBob25lTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJQcm92aWRlcklkIiwiUmVjYXB0Y2hhVmVyaWZpZXIiLCJTQU1MQXV0aFByb3ZpZGVyIiwiU2lnbkluTWV0aG9kIiwiVG90cE11bHRpRmFjdG9yR2VuZXJhdG9yIiwiVG90cFNlY3JldCIsIlR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJhcHBseUFjdGlvbkNvZGUiLCJiZWZvcmVBdXRoU3RhdGVDaGFuZ2VkIiwiYnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJicm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsImNoZWNrQWN0aW9uQ29kZSIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29ubmVjdEF1dGhFbXVsYXRvciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRlYnVnRXJyb3JNYXAiLCJkZWxldGVVc2VyIiwiZmV0Y2hTaWduSW5NZXRob2RzRm9yRW1haWwiLCJnZXRBZGRpdGlvbmFsVXNlckluZm8iLCJnZXRBdXRoIiwiZ2V0SWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJnZXRNdWx0aUZhY3RvclJlc29sdmVyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJpbk1lbW9yeVBlcnNpc3RlbmNlIiwiaW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsImluaXRpYWxpemVBdXRoIiwiaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImlzU2lnbkluV2l0aEVtYWlsTGluayIsImxpbmtXaXRoQ3JlZGVudGlhbCIsImxpbmtXaXRoUGhvbmVOdW1iZXIiLCJsaW5rV2l0aFBvcHVwIiwibGlua1dpdGhSZWRpcmVjdCIsIm11bHRpRmFjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwib25JZFRva2VuQ2hhbmdlZCIsInBhcnNlQWN0aW9uQ29kZVVSTCIsInByb2RFcnJvck1hcCIsInJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQaG9uZU51bWJlciIsInJlYXV0aGVudGljYXRlV2l0aFBvcHVwIiwicmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJyZWxvYWQiLCJyZXZva2VBY2Nlc3NUb2tlbiIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJzZXRQZXJzaXN0ZW5jZSIsInNpZ25JbkFub255bW91c2x5Iiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbExpbmsiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJzaWduT3V0IiwidW5saW5rIiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGhvbmVOdW1iZXIiLCJ1cGRhdGVQcm9maWxlIiwidXNlRGV2aWNlTGFuZ3VhZ2UiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwidmVyaWZ5QmVmb3JlVXBkYXRlRW1haWwiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJQSE9ORSIsIlRPVFAiLCJGQUNFQk9PSyIsIkdJVEhVQiIsIkdPT0dMRSIsIlBBU1NXT1JEIiwiVFdJVFRFUiIsIkVNQUlMX0xJTksiLCJFTUFJTF9QQVNTV09SRCIsIkxJTksiLCJSRUFVVEhFTlRJQ0FURSIsIlNJR05fSU4iLCJFTUFJTF9TSUdOSU4iLCJQQVNTV09SRF9SRVNFVCIsIlJFQ09WRVJfRU1BSUwiLCJSRVZFUlRfU0VDT05EX0ZBQ1RPUl9BRERJVElPTiIsIlZFUklGWV9BTkRfQ0hBTkdFX0VNQUlMIiwiVkVSSUZZX0VNQUlMIiwiX2RlYnVnRXJyb3JNYXAiLCJfcHJvZEVycm9yTWFwIiwiX0RFRkFVTFRfQVVUSF9FUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJFcnJvckZhY3RvcnkiLCJBRE1JTl9PTkxZX09QRVJBVElPTiIsIkFSR1VNRU5UX0VSUk9SIiwiQVBQX05PVF9BVVRIT1JJWkVEIiwiQVBQX05PVF9JTlNUQUxMRUQiLCJDQVBUQ0hBX0NIRUNLX0ZBSUxFRCIsIkNPREVfRVhQSVJFRCIsIkNPUkRPVkFfTk9UX1JFQURZIiwiQ09SU19VTlNVUFBPUlRFRCIsIkNSRURFTlRJQUxfQUxSRUFEWV9JTl9VU0UiLCJDUkVERU5USUFMX01JU01BVENIIiwiQ1JFREVOVElBTF9UT09fT0xEX0xPR0lOX0FHQUlOIiwiREVQRU5ERU5UX1NES19JTklUX0JFRk9SRV9BVVRIIiwiRFlOQU1JQ19MSU5LX05PVF9BQ1RJVkFURUQiLCJFTUFJTF9DSEFOR0VfTkVFRFNfVkVSSUZJQ0FUSU9OIiwiRU1BSUxfRVhJU1RTIiwiRU1VTEFUT1JfQ09ORklHX0ZBSUxFRCIsIkVYUElSRURfT09CX0NPREUiLCJFWFBJUkVEX1BPUFVQX1JFUVVFU1QiLCJJTlRFUk5BTF9FUlJPUiIsIklOVkFMSURfQVBJX0tFWSIsIklOVkFMSURfQVBQX0NSRURFTlRJQUwiLCJJTlZBTElEX0FQUF9JRCIsIklOVkFMSURfQVVUSCIsIklOVkFMSURfQVVUSF9FVkVOVCIsIklOVkFMSURfQ0VSVF9IQVNIIiwiSU5WQUxJRF9DT0RFIiwiSU5WQUxJRF9DT05USU5VRV9VUkkiLCJJTlZBTElEX0NPUkRPVkFfQ09ORklHVVJBVElPTiIsIklOVkFMSURfQ1VTVE9NX1RPS0VOIiwiSU5WQUxJRF9EWU5BTUlDX0xJTktfRE9NQUlOIiwiSU5WQUxJRF9FTUFJTCIsIklOVkFMSURfRU1VTEFUT1JfU0NIRU1FIiwiSU5WQUxJRF9JRFBfUkVTUE9OU0UiLCJJTlZBTElEX0xPR0lOX0NSRURFTlRJQUxTIiwiSU5WQUxJRF9NRVNTQUdFX1BBWUxPQUQiLCJJTlZBTElEX01GQV9TRVNTSU9OIiwiSU5WQUxJRF9PQVVUSF9DTElFTlRfSUQiLCJJTlZBTElEX09BVVRIX1BST1ZJREVSIiwiSU5WQUxJRF9PT0JfQ09ERSIsIklOVkFMSURfT1JJR0lOIiwiSU5WQUxJRF9QQVNTV09SRCIsIklOVkFMSURfUEVSU0lTVEVOQ0UiLCJJTlZBTElEX1BIT05FX05VTUJFUiIsIklOVkFMSURfUFJPVklERVJfSUQiLCJJTlZBTElEX1JFQ0lQSUVOVF9FTUFJTCIsIklOVkFMSURfU0VOREVSIiwiSU5WQUxJRF9TRVNTSU9OX0lORk8iLCJJTlZBTElEX1RFTkFOVF9JRCIsIk1GQV9JTkZPX05PVF9GT1VORCIsIk1GQV9SRVFVSVJFRCIsIk1JU1NJTkdfQU5EUk9JRF9QQUNLQUdFX05BTUUiLCJNSVNTSU5HX0FQUF9DUkVERU5USUFMIiwiTUlTU0lOR19BVVRIX0RPTUFJTiIsIk1JU1NJTkdfQ09ERSIsIk1JU1NJTkdfQ09OVElOVUVfVVJJIiwiTUlTU0lOR19JRlJBTUVfU1RBUlQiLCJNSVNTSU5HX0lPU19CVU5ETEVfSUQiLCJNSVNTSU5HX09SX0lOVkFMSURfTk9OQ0UiLCJNSVNTSU5HX01GQV9JTkZPIiwiTUlTU0lOR19NRkFfU0VTU0lPTiIsIk1JU1NJTkdfUEhPTkVfTlVNQkVSIiwiTUlTU0lOR19TRVNTSU9OX0lORk8iLCJNT0RVTEVfREVTVFJPWUVEIiwiTkVFRF9DT05GSVJNQVRJT04iLCJORVRXT1JLX1JFUVVFU1RfRkFJTEVEIiwiTlVMTF9VU0VSIiwiTk9fQVVUSF9FVkVOVCIsIk5PX1NVQ0hfUFJPVklERVIiLCJPUEVSQVRJT05fTk9UX0FMTE9XRUQiLCJPUEVSQVRJT05fTk9UX1NVUFBPUlRFRCIsIlBPUFVQX0JMT0NLRUQiLCJQT1BVUF9DTE9TRURfQllfVVNFUiIsIlBST1ZJREVSX0FMUkVBRFlfTElOS0VEIiwiUVVPVEFfRVhDRUVERUQiLCJSRURJUkVDVF9DQU5DRUxMRURfQllfVVNFUiIsIlJFRElSRUNUX09QRVJBVElPTl9QRU5ESU5HIiwiUkVKRUNURURfQ1JFREVOVElBTCIsIlNFQ09ORF9GQUNUT1JfQUxSRUFEWV9FTlJPTExFRCIsIlNFQ09ORF9GQUNUT1JfTElNSVRfRVhDRUVERUQiLCJURU5BTlRfSURfTUlTTUFUQ0giLCJUSU1FT1VUIiwiVE9LRU5fRVhQSVJFRCIsIlRPT19NQU5ZX0FUVEVNUFRTX1RSWV9MQVRFUiIsIlVOQVVUSE9SSVpFRF9ET01BSU4iLCJVTlNVUFBPUlRFRF9GSVJTVF9GQUNUT1IiLCJVTlNVUFBPUlRFRF9QRVJTSVNURU5DRSIsIlVOU1VQUE9SVEVEX1RFTkFOVF9PUEVSQVRJT04iLCJVTlZFUklGSUVEX0VNQUlMIiwiVVNFUl9DQU5DRUxMRUQiLCJVU0VSX0RFTEVURUQiLCJVU0VSX0RJU0FCTEVEIiwiVVNFUl9NSVNNQVRDSCIsIlVTRVJfU0lHTkVEX09VVCIsIldFQUtfUEFTU1dPUkQiLCJXRUJfU1RPUkFHRV9VTlNVUFBPUlRFRCIsIkFMUkVBRFlfSU5JVElBTElaRUQiLCJSRUNBUFRDSEFfTk9UX0VOQUJMRUQiLCJNSVNTSU5HX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfQUNUSU9OIiwiTUlTU0lOR19DTElFTlRfVFlQRSIsIk1JU1NJTkdfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRVFfVFlQRSIsImxvZ0NsaWVudCIsImltcG9ydF9sb2dnZXIiLCJMb2dnZXIiLCJfbG9nV2FybiIsIm1zZyIsImFyZ3MiLCJsb2dMZXZlbCIsIkxvZ0xldmVsIiwiV0FSTiIsIndhcm4iLCJpbXBvcnRfYXBwIiwiU0RLX1ZFUlNJT04iLCJfbG9nRXJyb3IiLCJFUlJPUiIsImVycm9yIiwiX2ZhaWwiLCJhdXRoT3JDb2RlIiwicmVzdCIsImNyZWF0ZUVycm9ySW50ZXJuYWwiLCJfY3JlYXRlRXJyb3IiLCJfZXJyb3JXaXRoQ3VzdG9tTWVzc2FnZSIsImF1dGgiLCJjb2RlIiwibWVzc2FnZSIsImVycm9yTWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiZmFjdG9yeSIsImNyZWF0ZSIsImFwcE5hbWUiLCJuYW1lIiwiX3NlcnZlckFwcEN1cnJlbnRVc2VyT3BlcmF0aW9uTm90U3VwcG9ydGVkRXJyb3IiLCJfYXNzZXJ0SW5zdGFuY2VPZiIsIm9iamVjdCIsImluc3RhbmNlIiwiY29uc3RydWN0b3JJbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiZnVsbFBhcmFtcyIsInNsaWNlIiwiX2Vycm9yRmFjdG9yeSIsIl9hc3NlcnQiLCJhc3NlcnRpb24iLCJkZWJ1Z0ZhaWwiLCJmYWlsdXJlIiwiRXJyb3IiLCJkZWJ1Z0Fzc2VydCIsIl9nZXRDdXJyZW50VXJsIiwic2VsZiIsIl9hIiwibG9jYXRpb24iLCJocmVmIiwiX2lzSHR0cE9ySHR0cHMiLCJfZ2V0Q3VycmVudFNjaGVtZSIsInByb3RvY29sIiwiX2lzT25saW5lIiwibmF2aWdhdG9yIiwib25MaW5lIiwiaXNCcm93c2VyRXh0ZW5zaW9uIiwiX2dldFVzZXJMYW5ndWFnZSIsIm5hdmlnYXRvckxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJEZWxheSIsInNob3J0RGVsYXkiLCJsb25nRGVsYXkiLCJpc01vYmlsZSIsImlzTW9iaWxlQ29yZG92YSIsImlzUmVhY3ROYXRpdmUiLCJnZXQiLCJNYXRoIiwibWluIiwiX2VtdWxhdG9yVXJsIiwiY29uZmlnIiwicGF0aCIsImVtdWxhdG9yIiwidXJsIiwic3RhcnRzV2l0aCIsIkZldGNoUHJvdmlkZXIiLCJpbml0aWFsaXplIiwiZmV0Y2hJbXBsIiwiaGVhZGVyc0ltcGwiLCJyZXNwb25zZUltcGwiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJoZWFkZXJzIiwiSGVhZGVycyIsInJlc3BvbnNlIiwiUmVzcG9uc2UiLCJTRVJWRVJfRVJST1JfTUFQIiwiREVGQVVMVF9BUElfVElNRU9VVF9NUyIsIl9hZGRUaWRJZk5lY2Vzc2FyeSIsInJlcXVlc3QiLCJ0ZW5hbnRJZCIsIl9wZXJmb3JtQXBpUmVxdWVzdCIsIm1ldGhvZCIsImN1c3RvbUVycm9yTWFwIiwiX3BlcmZvcm1GZXRjaFdpdGhFcnJvckhhbmRsaW5nIiwiYm9keSIsInBhcmFtcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInF1ZXJ5c3RyaW5nIiwia2V5IiwiYXBpS2V5IiwiX2dldEFkZGl0aW9uYWxIZWFkZXJzIiwibGFuZ3VhZ2VDb2RlIiwiZmV0Y2hBcmdzIiwiaXNDbG91ZGZsYXJlV29ya2VyIiwicmVmZXJyZXJQb2xpY3kiLCJfZ2V0RmluYWxUYXJnZXQiLCJhcGlIb3N0IiwiZmV0Y2hGbiIsIl9jYW5Jbml0RW11bGF0b3IiLCJuZXR3b3JrVGltZW91dCIsIk5ldHdvcmtUaW1lb3V0IiwiUHJvbWlzZSIsInJhY2UiLCJwcm9taXNlIiwiY2xlYXJOZXR3b3JrVGltZW91dCIsImpzb24iLCJfbWFrZVRhZ2dlZEVycm9yIiwib2siLCJlcnJvck1lc3NhZ2UiLCJzZXJ2ZXJFcnJvckNvZGUiLCJzZXJ2ZXJFcnJvck1lc3NhZ2UiLCJzcGxpdCIsImF1dGhFcnJvciIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImUiLCJGaXJlYmFzZUVycm9yIiwiU3RyaW5nIiwiX3BlcmZvcm1TaWduSW5SZXF1ZXN0Iiwic2VydmVyUmVzcG9uc2UiLCJfc2VydmVyUmVzcG9uc2UiLCJob3N0IiwiYmFzZSIsImFwaVNjaGVtZSIsIl9wYXJzZUVuZm9yY2VtZW50U3RhdGUiLCJlbmZvcmNlbWVudFN0YXRlU3RyIiwidGltZXIiLCJfIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImVycm9yUGFyYW1zIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImN1c3RvbURhdGEiLCJfdG9rZW5SZXNwb25zZSIsImlzVjIiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJpc0VudGVycHJpc2UiLCJlbnRlcnByaXNlIiwiUmVjYXB0Y2hhQ29uZmlnIiwic2l0ZUtleSIsInJlY2FwdGNoYUVuZm9yY2VtZW50U3RhdGUiLCJyZWNhcHRjaGFLZXkiLCJnZXRQcm92aWRlckVuZm9yY2VtZW50U3RhdGUiLCJwcm92aWRlclN0ciIsImxlbmd0aCIsInByb3ZpZGVyIiwiZW5mb3JjZW1lbnRTdGF0ZSIsImlzUHJvdmlkZXJFbmFibGVkIiwiZ2V0UmVjYXB0Y2hhUGFyYW1zIiwicmVjYXB0Y2hhU2l0ZUtleSIsImdldFJlY2FwdGNoYUNvbmZpZyIsImRlbGV0ZUFjY291bnQiLCJkZWxldGVMaW5rZWRBY2NvdW50cyIsImdldEFjY291bnRJbmZvIiwidXRjVGltZXN0YW1wVG9EYXRlU3RyaW5nIiwidXRjVGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJOdW1iZXIiLCJpc05hTiIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsInVzZXIiLCJmb3JjZVJlZnJlc2giLCJnZXRNb2R1bGFySW5zdGFuY2UiLCJ1c2VySW50ZXJuYWwiLCJ0b2tlbiIsImNsYWltcyIsIl9wYXJzZVRva2VuIiwiZXhwIiwiYXV0aF90aW1lIiwiaWF0IiwiZmlyZWJhc2UiLCJzaWduSW5Qcm92aWRlciIsImF1dGhUaW1lIiwic2Vjb25kc1N0cmluZ1RvTWlsbGlzZWNvbmRzIiwiaXNzdWVkQXRUaW1lIiwiZXhwaXJhdGlvblRpbWUiLCJzaWduSW5TZWNvbmRGYWN0b3IiLCJzZWNvbmRzIiwiYWxnb3JpdGhtIiwicGF5bG9hZCIsInNpZ25hdHVyZSIsImRlY29kZWQiLCJiYXNlNjREZWNvZGUiLCJwYXJzZSIsInRvU3RyaW5nIiwiX3Rva2VuRXhwaXJlc0luIiwicGFyc2VkVG9rZW4iLCJfbG9nb3V0SWZJbnZhbGlkYXRlZCIsImJ5cGFzc0F1dGhTdGF0ZSIsImlzVXNlckludmFsaWRhdGVkIiwiY3VycmVudFVzZXIiLCJQcm9hY3RpdmVSZWZyZXNoIiwiaXNSdW5uaW5nIiwidGltZXJJZCIsImVycm9yQmFja29mZiIsIl9zdGFydCIsInNjaGVkdWxlIiwiX3N0b3AiLCJnZXRJbnRlcnZhbCIsIndhc0Vycm9yIiwiaW50ZXJ2YWwiLCJleHBUaW1lIiwic3RzVG9rZW5NYW5hZ2VyIiwibm93IiwibWF4IiwiaXRlcmF0aW9uIiwiVXNlck1ldGFkYXRhIiwiY3JlYXRlZEF0IiwibGFzdExvZ2luQXQiLCJfaW5pdGlhbGl6ZVRpbWUiLCJsYXN0U2lnbkluVGltZSIsImNyZWF0aW9uVGltZSIsIl9jb3B5IiwibWV0YWRhdGEiLCJ0b0pTT04iLCJfcmVsb2FkV2l0aG91dFNhdmluZyIsImlkVG9rZW4iLCJ1c2VycyIsImNvcmVBY2NvdW50IiwiX25vdGlmeVJlbG9hZExpc3RlbmVyIiwibmV3UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJVc2VySW5mbyIsImV4dHJhY3RQcm92aWRlckRhdGEiLCJwcm92aWRlckRhdGEiLCJtZXJnZVByb3ZpZGVyRGF0YSIsIm9sZElzQW5vbnltb3VzIiwiaXNBbm9ueW1vdXMiLCJuZXdJc0Fub255bW91cyIsInBhc3N3b3JkSGFzaCIsInVwZGF0ZXMiLCJ1aWQiLCJsb2NhbElkIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsInBob3RvVXJsIiwiZW1haWxWZXJpZmllZCIsIl9wZXJzaXN0VXNlcklmQ3VycmVudCIsIl9ub3RpZnlMaXN0ZW5lcnNJZkN1cnJlbnQiLCJvcmlnaW5hbCIsIm5ld0RhdGEiLCJkZWR1cGVkIiwiZmlsdGVyIiwibyIsInNvbWUiLCJuIiwicHJvdmlkZXJJZCIsInByb3ZpZGVycyIsIm1hcCIsImltcG9ydF90c2xpYiIsIl9fcmVzdCIsInJhd0lkIiwicmVxdWVzdFN0c1Rva2VuIiwicmVmcmVzaFRva2VuIiwidG9rZW5BcGlIb3N0IiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzSW4iLCJleHBpcmVzX2luIiwicmVmcmVzaF90b2tlbiIsInJldm9rZVRva2VuIiwiU3RzVG9rZW5NYW5hZ2VyIiwiaXNFeHBpcmVkIiwidXBkYXRlRnJvbVNlcnZlclJlc3BvbnNlIiwidXBkYXRlVG9rZW5zQW5kRXhwaXJhdGlvbiIsInVwZGF0ZUZyb21JZFRva2VuIiwiZ2V0VG9rZW4iLCJyZWZyZXNoIiwiY2xlYXJSZWZyZXNoVG9rZW4iLCJvbGRUb2tlbiIsImV4cGlyZXNJblNlYyIsImZyb21KU09OIiwibWFuYWdlciIsIl9hc3NpZ24iLCJfY2xvbmUiLCJfcGVyZm9ybVJlZnJlc2giLCJhc3NlcnRTdHJpbmdPclVuZGVmaW5lZCIsIlVzZXJJbXBsIiwib3B0IiwicHJvYWN0aXZlUmVmcmVzaCIsInJlbG9hZFVzZXJJbmZvIiwicmVsb2FkTGlzdGVuZXIiLCJ1c2VySW5mbyIsIm5ld1VzZXIiLCJfb25SZWxvYWQiLCJjYWxsYmFjayIsIl9zdGFydFByb2FjdGl2ZVJlZnJlc2giLCJfc3RvcFByb2FjdGl2ZVJlZnJlc2giLCJfdXBkYXRlVG9rZW5zSWZOZWNlc3NhcnkiLCJyZWxvYWQyIiwidG9rZW5zUmVmcmVzaGVkIiwiZGVsZXRlIiwiX2lzRmlyZWJhc2VTZXJ2ZXJBcHAiLCJhcHAiLCJfcmVkaXJlY3RFdmVudElkIiwiX2Zyb21KU09OIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJfZiIsIl9nIiwiX2giLCJwbGFpbk9iamVjdFRva2VuTWFuYWdlciIsIkFycmF5IiwiaXNBcnJheSIsIl9mcm9tSWRUb2tlblJlc3BvbnNlIiwiaWRUb2tlblJlc3BvbnNlIiwiX2Zyb21HZXRBY2NvdW50SW5mb1Jlc3BvbnNlIiwiaW5zdGFuY2VDYWNoZSIsIk1hcCIsIl9nZXRJbnN0YW5jZSIsImNscyIsIkZ1bmN0aW9uIiwic2V0IiwiSW5NZW1vcnlQZXJzaXN0ZW5jZSIsInR5cGUiLCJzdG9yYWdlIiwiX2lzQXZhaWxhYmxlIiwiX3NldCIsInZhbHVlIiwiX2dldCIsIl9yZW1vdmUiLCJfYWRkTGlzdGVuZXIiLCJfa2V5IiwiX2xpc3RlbmVyIiwiX3JlbW92ZUxpc3RlbmVyIiwiX3BlcnNpc3RlbmNlS2V5TmFtZSIsIlBlcnNpc3RlbmNlVXNlck1hbmFnZXIiLCJwZXJzaXN0ZW5jZSIsInVzZXJLZXkiLCJuYW1lMiIsImZ1bGxVc2VyS2V5IiwiZnVsbFBlcnNpc3RlbmNlS2V5IiwiYm91bmRFdmVudEhhbmRsZXIiLCJfb25TdG9yYWdlRXZlbnQiLCJiaW5kIiwic2V0Q3VycmVudFVzZXIiLCJnZXRDdXJyZW50VXNlciIsImJsb2IiLCJyZW1vdmVDdXJyZW50VXNlciIsInNhdmVQZXJzaXN0ZW5jZUZvclJlZGlyZWN0IiwibmV3UGVyc2lzdGVuY2UiLCJwZXJzaXN0ZW5jZUhpZXJhcmNoeSIsImF2YWlsYWJsZVBlcnNpc3RlbmNlcyIsImFsbCIsInNlbGVjdGVkUGVyc2lzdGVuY2UiLCJ1c2VyVG9NaWdyYXRlIiwibWlncmF0aW9uSGllcmFyY2h5IiwicCIsIl9zaG91bGRBbGxvd01pZ3JhdGlvbiIsIl9nZXRCcm93c2VyTmFtZSIsInVzZXJBZ2VudCIsInVhIiwiaW5jbHVkZXMiLCJfaXNJRU1vYmlsZSIsIl9pc0ZpcmVmb3giLCJfaXNCbGFja0JlcnJ5IiwiX2lzV2ViT1MiLCJfaXNTYWZhcmkiLCJfaXNDaHJvbWVJT1MiLCJfaXNBbmRyb2lkIiwicmUiLCJtYXRjaGVzIiwibWF0Y2giLCJnZXRVQSIsInRlc3QiLCJfaXNJT1MiLCJfaXNJT1M3T3I4IiwiX2lzSU9TU3RhbmRhbG9uZSIsIndpbmRvdyIsInN0YW5kYWxvbmUiLCJfaXNJRTEwIiwiaXNJRSIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiX2lzTW9iaWxlQnJvd3NlciIsIl9nZXRDbGllbnRWZXJzaW9uIiwiY2xpZW50UGxhdGZvcm0iLCJmcmFtZXdvcmtzIiwicmVwb3J0ZWRQbGF0Zm9ybSIsInJlcG9ydGVkRnJhbWV3b3JrcyIsImpvaW4iLCJBdXRoTWlkZGxld2FyZVF1ZXVlIiwicXVldWUiLCJwdXNoQ2FsbGJhY2siLCJvbkFib3J0Iiwid3JhcHBlZENhbGxiYWNrIiwicmVzb2x2ZSIsInJlc3VsdCIsInB1c2giLCJpbmRleCIsInJ1bk1pZGRsZXdhcmUiLCJuZXh0VXNlciIsIm9uQWJvcnRTdGFjayIsImJlZm9yZVN0YXRlQ2FsbGJhY2siLCJyZXZlcnNlIiwib3JpZ2luYWxNZXNzYWdlIiwiX2dldFBhc3N3b3JkUG9saWN5IiwiTUlOSU1VTV9NSU5fUEFTU1dPUkRfTEVOR1RIIiwiUGFzc3dvcmRQb2xpY3lJbXBsIiwicmVzcG9uc2VPcHRpb25zIiwiY3VzdG9tU3RyZW5ndGhPcHRpb25zIiwibWluUGFzc3dvcmRMZW5ndGgiLCJtYXhQYXNzd29yZExlbmd0aCIsImNvbnRhaW5zTG93ZXJjYXNlQ2hhcmFjdGVyIiwiY29udGFpbnNMb3dlcmNhc2VMZXR0ZXIiLCJjb250YWluc1VwcGVyY2FzZUNoYXJhY3RlciIsImNvbnRhaW5zVXBwZXJjYXNlTGV0dGVyIiwiY29udGFpbnNOdW1lcmljQ2hhcmFjdGVyIiwiY29udGFpbnNOb25BbHBoYW51bWVyaWNDaGFyYWN0ZXIiLCJhbGxvd2VkTm9uQWxwaGFudW1lcmljQ2hhcmFjdGVycyIsImZvcmNlVXBncmFkZU9uU2lnbmluIiwic2NoZW1hVmVyc2lvbiIsInBhc3N3b3JkIiwic3RhdHVzIiwiaXNWYWxpZCIsInBhc3N3b3JkUG9saWN5IiwidmFsaWRhdGVQYXNzd29yZExlbmd0aE9wdGlvbnMiLCJ2YWxpZGF0ZVBhc3N3b3JkQ2hhcmFjdGVyT3B0aW9ucyIsIm1lZXRzTWluUGFzc3dvcmRMZW5ndGgiLCJtZWV0c01heFBhc3N3b3JkTGVuZ3RoIiwidXBkYXRlUGFzc3dvcmRDaGFyYWN0ZXJPcHRpb25zU3RhdHVzZXMiLCJwYXNzd29yZENoYXIiLCJpIiwiY2hhckF0IiwiQXV0aEltcGwiLCJoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIiLCJhcHBDaGVja1NlcnZpY2VQcm92aWRlciIsImVtdWxhdG9yQ29uZmlnIiwib3BlcmF0aW9ucyIsImF1dGhTdGF0ZVN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkVG9rZW5TdWJzY3JpcHRpb24iLCJiZWZvcmVTdGF0ZVF1ZXVlIiwicmVkaXJlY3RVc2VyIiwiaXNQcm9hY3RpdmVSZWZyZXNoRW5hYmxlZCIsIkVYUEVDVEVEX1BBU1NXT1JEX1BPTElDWV9TQ0hFTUFfVkVSU0lPTiIsIl9pc0luaXRpYWxpemVkIiwiX2RlbGV0ZWQiLCJfaW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiX3BvcHVwUmVkaXJlY3RSZXNvbHZlciIsIl9hZ2VudFJlY2FwdGNoYUNvbmZpZyIsIl90ZW5hbnRSZWNhcHRjaGFDb25maWdzIiwiX3Byb2plY3RQYXNzd29yZFBvbGljeSIsIl90ZW5hbnRQYXNzd29yZFBvbGljaWVzIiwibGFzdE5vdGlmaWVkVWlkIiwic2V0dGluZ3MiLCJhcHBWZXJpZmljYXRpb25EaXNhYmxlZEZvclRlc3RpbmciLCJjbGllbnRWZXJzaW9uIiwic2RrQ2xpZW50VmVyc2lvbiIsIl9pbml0aWFsaXplV2l0aFBlcnNpc3RlbmNlIiwicG9wdXBSZWRpcmVjdFJlc29sdmVyIiwicGVyc2lzdGVuY2VNYW5hZ2VyIiwiX3Nob3VsZEluaXRQcm9hY3RpdmVseSIsIl9pbml0aWFsaXplIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyIiwiYXNzZXJ0ZWRQZXJzaXN0ZW5jZSIsIl9jdXJyZW50VXNlciIsIl91cGRhdGVDdXJyZW50VXNlciIsImluaXRpYWxpemVDdXJyZW50VXNlckZyb21JZFRva2VuIiwiZGlyZWN0bHlTZXRDdXJyZW50VXNlciIsImVyciIsImNvbnNvbGUiLCJhdXRoSWRUb2tlbiIsInRoZW4iLCJwcmV2aW91c2x5U3RvcmVkVXNlciIsImZ1dHVyZUN1cnJlbnRVc2VyIiwibmVlZHNUb2NoZWNrTWlkZGxld2FyZSIsImF1dGhEb21haW4iLCJnZXRPckluaXRSZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsInJlZGlyZWN0VXNlckV2ZW50SWQiLCJzdG9yZWRVc2VyRXZlbnRJZCIsInRyeVJlZGlyZWN0U2lnbkluIiwiX292ZXJyaWRlUmVkaXJlY3RSZXN1bHQiLCJyZWxvYWRBbmRTZXRDdXJyZW50VXNlck9yQ2xlYXIiLCJyZWRpcmVjdFJlc29sdmVyIiwiX2NvbXBsZXRlUmVkaXJlY3RGbiIsIl9zZXRSZWRpcmVjdFVzZXIiLCJfZGVsZXRlIiwidXNlckV4dGVybiIsInNraXBCZWZvcmVTdGF0ZUNhbGxiYWNrcyIsIm5vdGlmeUF1dGhMaXN0ZW5lcnMiLCJyZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsIl9nZXRSZWNhcHRjaGFDb25maWciLCJfZ2V0UGFzc3dvcmRQb2xpY3lJbnRlcm5hbCIsIl91cGRhdGVQYXNzd29yZFBvbGljeSIsIl9nZXRQZXJzaXN0ZW5jZSIsIl91cGRhdGVFcnJvck1hcCIsIm5leHRPck9ic2VydmVyIiwiY29tcGxldGVkIiwicmVnaXN0ZXJTdGF0ZUxpc3RlbmVyIiwiYXV0aFN0YXRlUmVhZHkiLCJ1bnN1YnNjcmliZSIsInRva2VuVHlwZSIsInJlZGlyZWN0TWFuYWdlciIsInJlc29sdmVyIiwiX3JlZGlyZWN0UGVyc2lzdGVuY2UiLCJfcmVkaXJlY3RVc2VyRm9ySWQiLCJpZCIsIm5leHQiLCJjdXJyZW50VWlkIiwic3Vic2NyaXB0aW9uIiwiY2IiLCJpc1Vuc3Vic2NyaWJlZCIsImFkZE9ic2VydmVyIiwiYWN0aW9uIiwiX2xvZ0ZyYW1ld29yayIsImZyYW1ld29yayIsInNvcnQiLCJfZ2V0RnJhbWV3b3JrcyIsIm9wdGlvbnMiLCJhcHBJZCIsImhlYXJ0YmVhdHNIZWFkZXIiLCJnZXRJbW1lZGlhdGUiLCJvcHRpb25hbCIsImdldEhlYXJ0YmVhdHNIZWFkZXIiLCJhcHBDaGVja1Rva2VuIiwiX2dldEFwcENoZWNrVG9rZW4iLCJhcHBDaGVja1Rva2VuUmVzdWx0IiwiX2Nhc3RBdXRoIiwib2JzZXJ2ZXIiLCJjcmVhdGVTdWJzY3JpYmUiLCJleHRlcm5hbEpTUHJvdmlkZXIiLCJsb2FkSlMiLCJyZWNhcHRjaGFWMlNjcmlwdCIsInJlY2FwdGNoYUVudGVycHJpc2VTY3JpcHQiLCJnYXBpU2NyaXB0IiwiX3NldEV4dGVybmFsSlNQcm92aWRlciIsIl9sb2FkSlMiLCJfcmVjYXB0Y2hhVjJTY3JpcHRVcmwiLCJfcmVjYXB0Y2hhRW50ZXJwcmlzZVNjcmlwdFVybCIsIl9nYXBpU2NyaXB0VXJsIiwiX2dlbmVyYXRlQ2FsbGJhY2tOYW1lIiwicHJlZml4IiwiZmxvb3IiLCJyYW5kb20iLCJSRUNBUFRDSEFfRU5URVJQUklTRV9WRVJJRklFUl9UWVBFIiwiRkFLRV9UT0tFTiIsIlJlY2FwdGNoYUVudGVycHJpc2VWZXJpZmllciIsImF1dGhFeHRlcm4iLCJ2ZXJpZnkiLCJyZXRyaWV2ZVNpdGVLZXkiLCJjbGllbnRUeXBlIiwidmVyc2lvbiIsImNhdGNoIiwicmV0cmlldmVSZWNhcHRjaGFUb2tlbiIsInJlYWR5IiwiZXhlY3V0ZSIsImluamVjdFJlY2FwdGNoYUZpZWxkcyIsImNhcHRjaGFSZXNwIiwidmVyaWZpZXIiLCJjYXB0Y2hhUmVzcG9uc2UiLCJuZXdSZXF1ZXN0IiwiaGFuZGxlUmVjYXB0Y2hhRmxvdyIsImF1dGhJbnN0YW5jZSIsImFjdGlvbk5hbWUiLCJhY3Rpb25NZXRob2QiLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYSIsImxvZyIsIl9pbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiYXV0aEludGVybmFsIiwiZGVwcyIsIl9nZXRQcm92aWRlciIsImlzSW5pdGlhbGl6ZWQiLCJhdXRoMiIsImluaXRpYWxPcHRpb25zIiwiZ2V0T3B0aW9ucyIsImRlZXBFcXVhbCIsIl9pbml0aWFsaXplQXV0aEluc3RhbmNlIiwiaGllcmFyY2h5IiwiZGlzYWJsZVdhcm5pbmdzIiwiZXh0cmFjdFByb3RvY29sIiwicG9ydCIsImV4dHJhY3RIb3N0QW5kUG9ydCIsInBvcnRTdHIiLCJmcmVlemUiLCJlbWl0RW11bGF0b3JXYXJuaW5nIiwicHJvdG9jb2xFbmQiLCJpbmRleE9mIiwic3Vic3RyIiwiYXV0aG9yaXR5IiwiZXhlYyIsImhvc3RBbmRQb3J0IiwicG9wIiwiYnJhY2tldGVkSVB2NiIsInBhcnNlUG9ydCIsImF0dGFjaEJhbm5lciIsImVsIiwiY3JlYXRlRWxlbWVudCIsInN0eSIsInN0eWxlIiwiaW5uZXJUZXh0IiwicG9zaXRpb24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImNvbG9yIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbiIsInpJbmRleCIsInRleHRBbGlnbiIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiaW5mbyIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2lnbkluTWV0aG9kIiwiX2dldElkVG9rZW5SZXNwb25zZSIsIl9hdXRoIiwiX2xpbmtUb0lkVG9rZW4iLCJfaWRUb2tlbiIsIl9nZXRSZWF1dGhlbnRpY2F0aW9uUmVzb2x2ZXIiLCJyZXNldFBhc3N3b3JkIiwidXBkYXRlRW1haWxQYXNzd29yZCIsImxpbmtFbWFpbFBhc3N3b3JkIiwiYXBwbHlBY3Rpb25Db2RlJDEiLCJzaWduSW5XaXRoUGFzc3dvcmQiLCJzZW5kT29iQ29kZSIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiQxIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCQxIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsJDEiLCJ2ZXJpZnlBbmRDaGFuZ2VFbWFpbCIsInNpZ25JbldpdGhFbWFpbExpbmskMSIsInNpZ25JbldpdGhFbWFpbExpbmtGb3JMaW5raW5nIiwiX2VtYWlsIiwiX3Bhc3N3b3JkIiwiX3RlbmFudElkIiwiX2Zyb21FbWFpbEFuZFBhc3N3b3JkIiwiX2Zyb21FbWFpbEFuZENvZGUiLCJvb2JDb2RlIiwib2JqIiwicmV0dXJuU2VjdXJlVG9rZW4iLCJzaWduSW5XaXRoSWRwIiwiSURQX1JFUVVFU1RfVVJJJDEiLCJwZW5kaW5nVG9rZW4iLCJfZnJvbVBhcmFtcyIsImNyZWQiLCJub25jZSIsIm9hdXRoVG9rZW4iLCJvYXV0aFRva2VuU2VjcmV0Iiwic2VjcmV0IiwiYnVpbGRSZXF1ZXN0IiwiYXV0b0NyZWF0ZSIsInJlcXVlc3RVcmkiLCJwb3N0Qm9keSIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGUiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIkMSIsImxpbmtXaXRoUGhvbmVOdW1iZXIkMSIsInRlbXBvcmFyeVByb29mIiwiVkVSSUZZX1BIT05FX05VTUJFUl9GT1JfRVhJU1RJTkdfRVJST1JfTUFQXyIsInZlcmlmeVBob25lTnVtYmVyRm9yRXhpc3RpbmciLCJhcGlSZXF1ZXN0Iiwib3BlcmF0aW9uIiwiX2Zyb21WZXJpZmljYXRpb24iLCJ2ZXJpZmljYXRpb25JZCIsInZlcmlmaWNhdGlvbkNvZGUiLCJfZnJvbVRva2VuUmVzcG9uc2UiLCJfbWFrZVZlcmlmaWNhdGlvblJlcXVlc3QiLCJzZXNzaW9uSW5mbyIsInBhcnNlTW9kZSIsIm1vZGUiLCJwYXJzZURlZXBMaW5rIiwibGluayIsInF1ZXJ5c3RyaW5nRGVjb2RlIiwiZXh0cmFjdFF1ZXJ5c3RyaW5nIiwiZG91YmxlRGVlcExpbmsiLCJpT1NEZWVwTGluayIsImlPU0RvdWJsZURlZXBMaW5rIiwiYWN0aW9uTGluayIsInNlYXJjaFBhcmFtcyIsImNvbnRpbnVlVXJsIiwicGFyc2VMaW5rIiwiUFJPVklERVJfSUQiLCJjcmVkZW50aWFsIiwiY3JlZGVudGlhbFdpdGhMaW5rIiwiZW1haWxMaW5rIiwiYWN0aW9uQ29kZVVybCIsIkVNQUlMX1BBU1NXT1JEX1NJR05fSU5fTUVUSE9EIiwiRU1BSUxfTElOS19TSUdOX0lOX01FVEhPRCIsIkZlZGVyYXRlZEF1dGhQcm92aWRlciIsImRlZmF1bHRMYW5ndWFnZUNvZGUiLCJjdXN0b21QYXJhbWV0ZXJzIiwic2V0RGVmYXVsdExhbmd1YWdlIiwic2V0Q3VzdG9tUGFyYW1ldGVycyIsImN1c3RvbU9BdXRoUGFyYW1ldGVycyIsImdldEN1c3RvbVBhcmFtZXRlcnMiLCJCYXNlT0F1dGhQcm92aWRlciIsInNjb3BlcyIsImFkZFNjb3BlIiwic2NvcGUiLCJnZXRTY29wZXMiLCJjcmVkZW50aWFsRnJvbUpTT04iLCJfY3JlZGVudGlhbCIsInJhd05vbmNlIiwiY3JlZGVudGlhbEZyb21SZXN1bHQiLCJ1c2VyQ3JlZGVudGlhbCIsIm9hdXRoQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJjcmVkZW50aWFsRnJvbUVycm9yIiwidG9rZW5SZXNwb25zZSIsIm9hdXRoSWRUb2tlbiIsIm9hdXRoQWNjZXNzVG9rZW4iLCJGQUNFQk9PS19TSUdOX0lOX01FVEhPRCIsImNyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiR09PR0xFX1NJR05fSU5fTUVUSE9EIiwiR0lUSFVCX1NJR05fSU5fTUVUSE9EIiwiSURQX1JFUVVFU1RfVVJJIiwiU0FNTEF1dGhDcmVkZW50aWFsIiwiX2NyZWF0ZSIsIlNBTUxfUFJPVklERVJfUFJFRklYIiwic2FtbENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiVFdJVFRFUl9TSUdOX0lOX01FVEhPRCIsInNpZ25VcCIsIlVzZXJDcmVkZW50aWFsSW1wbCIsIm9wZXJhdGlvblR5cGUiLCJwcm92aWRlcklkRm9yUmVzcG9uc2UiLCJ1c2VyQ3JlZCIsIl9mb3JPcGVyYXRpb24iLCJNdWx0aUZhY3RvckVycm9yIiwic2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJfZnJvbUVycm9yQW5kT3BlcmF0aW9uIiwiX3Byb2Nlc3NDcmVkZW50aWFsU2F2aW5nTWZhQ29udGV4dElmTmVjZXNzYXJ5IiwiaWRUb2tlblByb3ZpZGVyIiwicHJvdmlkZXJEYXRhQXNOYW1lcyIsIlNldCIsInBpZCIsIl9hc3NlcnRMaW5rZWRTdGF0dXMiLCJkZWxldGVQcm92aWRlciIsInByb3ZpZGVyc0xlZnQiLCJwZCIsImhhcyIsIl9saW5rJDEiLCJleHBlY3RlZCIsInByb3ZpZGVySWRzIiwiX3JlYXV0aGVudGljYXRlIiwicGFyc2VkIiwic3ViIiwiX3NpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuJDEiLCJjdXN0b21Ub2tlbiIsIk11bHRpRmFjdG9ySW5mb0ltcGwiLCJmYWN0b3JJZCIsIm1mYUVucm9sbG1lbnRJZCIsImVucm9sbG1lbnRUaW1lIiwiZW5yb2xsZWRBdCIsIl9mcm9tU2VydmVyUmVzcG9uc2UiLCJlbnJvbGxtZW50IiwiUGhvbmVNdWx0aUZhY3RvckluZm9JbXBsIiwiVG90cE11bHRpRmFjdG9ySW5mb0ltcGwiLCJwaG9uZUluZm8iLCJfc2V0QWN0aW9uQ29kZVNldHRpbmdzT25SZXF1ZXN0IiwiYWN0aW9uQ29kZVNldHRpbmdzIiwiZHluYW1pY0xpbmtEb21haW4iLCJjYW5IYW5kbGVDb2RlSW5BcHAiLCJoYW5kbGVDb2RlSW5BcHAiLCJpT1MiLCJidW5kbGVJZCIsImlPU0J1bmRsZUlkIiwiYW5kcm9pZCIsInBhY2thZ2VOYW1lIiwiYW5kcm9pZEluc3RhbGxBcHAiLCJpbnN0YWxsQXBwIiwiYW5kcm9pZE1pbmltdW1WZXJzaW9uQ29kZSIsIm1pbmltdW1WZXJzaW9uIiwiYW5kcm9pZFBhY2thZ2VOYW1lIiwicmVjYWNoZVBhc3N3b3JkUG9saWN5IiwicmVxdWVzdFR5cGUiLCJuZXdQYXNzd29yZCIsImF1dGhNb2R1bGFyIiwibmV3RW1haWwiLCJtZmFJbmZvIiwibXVsdGlGYWN0b3JJbmZvIiwiZGF0YSIsInByZXZpb3VzRW1haWwiLCJzaWduVXBSZXNwb25zZSIsInNldEFjdGlvbkNvZGVTZXR0aW5ncyIsInJlcXVlc3QyIiwiYWN0aW9uQ29kZVNldHRpbmdzMiIsImNyZWF0ZUF1dGhVcmkiLCJjb250aW51ZVVyaSIsImlkZW50aWZpZXIiLCJzaWduaW5NZXRob2RzIiwidXBkYXRlUHJvZmlsZSQxIiwicHJvZmlsZVJlcXVlc3QiLCJwYXNzd29yZFByb3ZpZGVyIiwiZmluZCIsInVwZGF0ZUVtYWlsT3JQYXNzd29yZCIsInByb2ZpbGUiLCJyYXdVc2VySW5mbyIsImlzTmV3VXNlciIsImtpbmQiLCJmaWx0ZXJlZFByb3ZpZGVySWQiLCJHZW5lcmljQWRkaXRpb25hbFVzZXJJbmZvIiwiRmFjZWJvb2tBZGRpdGlvbmFsVXNlckluZm8iLCJHaXRodWJBZGRpdGlvbmFsVXNlckluZm8iLCJHb29nbGVBZGRpdGlvbmFsVXNlckluZm8iLCJUd2l0dGVyQWRkaXRpb25hbFVzZXJJbmZvIiwic2NyZWVuTmFtZSIsIkZlZGVyYXRlZEFkZGl0aW9uYWxVc2VySW5mb1dpdGhVc2VybmFtZSIsInVzZXJuYW1lIiwibG9naW4iLCJNdWx0aUZhY3RvclNlc3Npb25JbXBsIiwiX2Zyb21JZHRva2VuIiwiX2Zyb21NZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm1mYVBlbmRpbmdDcmVkZW50aWFsIiwibXVsdGlGYWN0b3JTZXNzaW9uIiwicGVuZGluZ0NyZWRlbnRpYWwiLCJNdWx0aUZhY3RvclJlc29sdmVySW1wbCIsInNlc3Npb24iLCJoaW50cyIsInNpZ25JblJlc29sdmVyIiwiX2Zyb21FcnJvciIsIm1mYVJlc3BvbnNlIiwiX3Byb2Nlc3MiLCJyZXNvbHZlU2lnbkluIiwiYXNzZXJ0aW9uRXh0ZXJuIiwiZXJyb3JJbnRlcm5hbCIsInN0YXJ0RW5yb2xsUGhvbmVNZmEiLCJmaW5hbGl6ZUVucm9sbFBob25lTWZhIiwic3RhcnRFbnJvbGxUb3RwTWZhIiwiZmluYWxpemVFbnJvbGxUb3RwTWZhIiwid2l0aGRyYXdNZmEiLCJNdWx0aUZhY3RvclVzZXJJbXBsIiwiZW5yb2xsZWRGYWN0b3JzIiwiX2Zyb21Vc2VyIiwiZ2V0U2Vzc2lvbiIsImVucm9sbCIsImZpbmFsaXplTWZhUmVzcG9uc2UiLCJ1bmVucm9sbCIsImluZm9PclVpZCIsIm11bHRpRmFjdG9yVXNlckNhY2hlIiwiV2Vha01hcCIsInVzZXJNb2R1bGFyIiwiU1RPUkFHRV9BVkFJTEFCTEVfS0VZIiwiQnJvd3NlclBlcnNpc3RlbmNlQ2xhc3MiLCJzdG9yYWdlUmV0cmlldmVyIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwiX1BPTExJTkdfSU5URVJWQUxfTVMkMSIsIklFMTBfTE9DQUxfU1RPUkFHRV9TWU5DX0RFTEFZIiwiQnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJldmVudCIsInBvbGwiLCJvblN0b3JhZ2VFdmVudCIsImxpc3RlbmVycyIsImxvY2FsQ2FjaGUiLCJwb2xsVGltZXIiLCJmYWxsYmFja1RvUG9sbGluZyIsImZvckFsbENoYW5nZWRLZXlzIiwia2V5cyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJrZXkyIiwiX29sZFZhbHVlIiwibm90aWZ5TGlzdGVuZXJzIiwiZGV0YWNoTGlzdGVuZXIiLCJzdG9wUG9sbGluZyIsInRyaWdnZXJMaXN0ZW5lcnMiLCJzdG9yZWRWYWx1ZTIiLCJzdG9yZWRWYWx1ZSIsImxpc3RlbmVyIiwiZnJvbSIsInN0YXJ0UG9sbGluZyIsInNldEludGVydmFsIiwiU3RvcmFnZUV2ZW50IiwiY2xlYXJJbnRlcnZhbCIsImF0dGFjaExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpemUiLCJCcm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwic2Vzc2lvblN0b3JhZ2UiLCJfYWxsU2V0dGxlZCIsInByb21pc2VzIiwiZnVsZmlsbGVkIiwicmVhc29uIiwiUmVjZWl2ZXIiLCJldmVudFRhcmdldCIsImhhbmRsZXJzTWFwIiwiaGFuZGxlRXZlbnQiLCJleGlzdGluZ0luc3RhbmNlIiwicmVjZWl2ZXJzIiwicmVjZWl2ZXIiLCJpc0xpc3RlbmluZ3RvIiwibmV3SW5zdGFuY2UiLCJtZXNzYWdlRXZlbnQiLCJldmVudElkIiwiZXZlbnRUeXBlIiwiaGFuZGxlcnMiLCJwb3J0cyIsInBvc3RNZXNzYWdlIiwiaGFuZGxlciIsIm9yaWdpbiIsIl9zdWJzY3JpYmUiLCJldmVudEhhbmRsZXIiLCJfdW5zdWJzY3JpYmUiLCJfZ2VuZXJhdGVFdmVudElkIiwiZGlnaXRzIiwiU2VuZGVyIiwidGFyZ2V0IiwicmVtb3ZlTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25NZXNzYWdlIiwiY2xvc2UiLCJfc2VuZCIsInRpbWVvdXQiLCJNZXNzYWdlQ2hhbm5lbCIsImNvbXBsZXRpb25UaW1lciIsInN0YXJ0IiwiYWNrVGltZXIiLCJwb3J0MiIsImZpbmFsbHkiLCJfd2luZG93IiwiX3NldFdpbmRvd0xvY2F0aW9uIiwiX2lzV29ya2VyIiwiX2dldEFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0cmF0aW9uIiwiYWN0aXZlIiwiX2dldFNlcnZpY2VXb3JrZXJDb250cm9sbGVyIiwiY29udHJvbGxlciIsIl9nZXRXb3JrZXJHbG9iYWxTY29wZSIsIkRCX05BTUUiLCJEQl9WRVJTSU9OIiwiREJfT0JKRUNUU1RPUkVfTkFNRSIsIkRCX0RBVEFfS0VZUEFUSCIsIkRCUHJvbWlzZSIsInRvUHJvbWlzZSIsImdldE9iamVjdFN0b3JlIiwiZGIiLCJpc1JlYWRXcml0ZSIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJfZGVsZXRlRGF0YWJhc2UiLCJpbmRleGVkREIiLCJkZWxldGVEYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJvcGVuIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwiX3B1dE9iamVjdCIsInB1dCIsImdldE9iamVjdCIsIl9kZWxldGVPYmplY3QiLCJfUE9MTElOR19JTlRFUlZBTF9NUyIsIl9UUkFOU0FDVElPTl9SRVRSWV9DT1VOVCIsIkluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJwZW5kaW5nV3JpdGVzIiwic2VuZGVyIiwic2VydmljZVdvcmtlclJlY2VpdmVyQXZhaWxhYmxlIiwiYWN0aXZlU2VydmljZVdvcmtlciIsIl93b3JrZXJJbml0aWFsaXphdGlvblByb21pc2UiLCJpbml0aWFsaXplU2VydmljZVdvcmtlck1lc3NhZ2luZyIsIl9vcGVuRGIiLCJfd2l0aFJldHJpZXMiLCJvcCIsIm51bUF0dGVtcHRzIiwiaW5pdGlhbGl6ZVJlY2VpdmVyIiwiaW5pdGlhbGl6ZVNlbmRlciIsIl9vcmlnaW4iLCJfcG9sbCIsImtleVByb2Nlc3NlZCIsIl9kYXRhIiwicmVzdWx0cyIsIm5vdGlmeVNlcnZpY2VXb3JrZXIiLCJfd2l0aFBlbmRpbmdXcml0ZSIsIndyaXRlIiwiZ2V0QWxsUmVxdWVzdCIsImdldEFsbCIsImtleXNJblJlc3VsdCIsImZiYXNlX2tleSIsImxvY2FsS2V5Iiwic3RhcnRTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblRvdHBNZmEiLCJfU09MVkVfVElNRV9NUyIsIl9FWFBJUkFUSU9OX1RJTUVfTVMiLCJfV0lER0VUX0lEX1NUQVJUIiwiTW9ja1JlQ2FwdGNoYSIsImNvdW50ZXIiLCJfd2lkZ2V0cyIsInJlbmRlciIsImNvbnRhaW5lciIsInBhcmFtZXRlcnMiLCJNb2NrV2lkZ2V0IiwicmVzZXQiLCJvcHRXaWRnZXRJZCIsImNvbnRhaW5lck9ySWQiLCJkZWxldGVkIiwicmVzcG9uc2VUb2tlbiIsImNsaWNrSGFuZGxlciIsImdldEVsZW1lbnRCeUlkIiwiaXNWaXNpYmxlIiwiY2hlY2tJZkRlbGV0ZWQiLCJnZW5lcmF0ZVJhbmRvbUFscGhhTnVtZXJpY1N0cmluZyIsImV4cGlyZWRDYWxsYmFjayIsImxlbiIsImNoYXJzIiwiYWxsb3dlZENoYXJzIiwiX0pTTE9BRF9DQUxMQkFDSyIsIk5FVFdPUktfVElNRU9VVF9ERUxBWSIsIlJlQ2FwdGNoYUxvYWRlckltcGwiLCJob3N0TGFuZ3VhZ2UiLCJsaWJyYXJ5U2VwYXJhdGVseUxvYWRlZCIsImxvYWQiLCJobCIsImlzSG9zdExhbmd1YWdlVmFsaWQiLCJzaG91bGRSZXNvbHZlSW1tZWRpYXRlbHkiLCJyZWNhcHRjaGEiLCJ3aWRnZXRJZCIsIm9ubG9hZCIsImNsZWFyZWRPbmVJbnN0YW5jZSIsIk1vY2tSZUNhcHRjaGFMb2FkZXJJbXBsIiwiUkVDQVBUQ0hBX1ZFUklGSUVSX1RZUEUiLCJERUZBVUxUX1BBUkFNUyIsInRoZW1lIiwiZGVzdHJveWVkIiwidG9rZW5DaGFuZ2VMaXN0ZW5lcnMiLCJyZW5kZXJQcm9taXNlIiwiaXNJbnZpc2libGUiLCJtYWtlVG9rZW5DYWxsYmFjayIsIl9yZWNhcHRjaGFMb2FkZXIiLCJ2YWxpZGF0ZVN0YXJ0aW5nU3RhdGUiLCJhc3NlcnROb3REZXN0cm95ZWQiLCJnZXRBc3NlcnRlZFJlY2FwdGNoYSIsInRva2VuQ2hhbmdlIiwibWFrZVJlbmRlclByb21pc2UiLCJfcmVzZXQiLCJjbGVhciIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZUNoaWxkIiwic2l0ZWtleSIsImhhc0NoaWxkTm9kZXMiLCJleGlzdGluZyIsImdsb2JhbEZ1bmMiLCJpbml0IiwiZ3VhcmFudGVlZEVtcHR5IiwiZG9tUmVhZHkiLCJDb25maXJtYXRpb25SZXN1bHRJbXBsIiwib25Db25maXJtYXRpb24iLCJjb25maXJtIiwiYXV0aENyZWRlbnRpYWwiLCJhcHBWZXJpZmllciIsIl92ZXJpZnlQaG9uZU51bWJlciIsInJlY2FwdGNoYVRva2VuIiwicGhvbmVJbmZvT3B0aW9ucyIsInBob25lRW5yb2xsbWVudEluZm8iLCJwaG9uZVNlc3Npb25JbmZvIiwibXVsdGlGYWN0b3JIaW50IiwibXVsdGlGYWN0b3JVaWQiLCJwaG9uZVNpZ25JbkluZm8iLCJwaG9uZVJlc3BvbnNlSW5mbyIsInZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVPcHRpb25zIiwiYXBwbGljYXRpb25WZXJpZmllciIsIlBIT05FX1NJR05fSU5fTUVUSE9EIiwiX3dpdGhEZWZhdWx0UmVzb2x2ZXIiLCJyZXNvbHZlck92ZXJyaWRlIiwiSWRwQ3JlZGVudGlhbCIsIl9idWlsZElkcFJlcXVlc3QiLCJzZXNzaW9uSWQiLCJyZXR1cm5JZHBDcmVkZW50aWFsIiwiX3NpZ25JbiIsIl9yZWF1dGgiLCJfbGluayIsIkFic3RyYWN0UG9wdXBSZWRpcmVjdE9wZXJhdGlvbiIsInBlbmRpbmdQcm9taXNlIiwiZXZlbnRNYW5hZ2VyIiwib25FeGVjdXRpb24iLCJyZWdpc3RlckNvbnN1bWVyIiwib25BdXRoRXZlbnQiLCJ1cmxSZXNwb25zZSIsImdldElkcFRhc2siLCJvbkVycm9yIiwidW5yZWdpc3RlckFuZENsZWFuVXAiLCJ1bnJlZ2lzdGVyQ29uc3VtZXIiLCJjbGVhblVwIiwiX1BPTExfV0lORE9XX0NMT1NFX1RJTUVPVVQiLCJyZXNvbHZlckludGVybmFsIiwiUG9wdXBPcGVyYXRpb24iLCJleGVjdXRlTm90TnVsbCIsImF1dGhXaW5kb3ciLCJwb2xsSWQiLCJjdXJyZW50UG9wdXBBY3Rpb24iLCJjYW5jZWwiLCJfb3BlblBvcHVwIiwiYXNzb2NpYXRlZEV2ZW50IiwiX29yaWdpblZhbGlkYXRpb24iLCJfaXNJZnJhbWVXZWJTdG9yYWdlU3VwcG9ydGVkIiwiaXNTdXBwb3J0ZWQiLCJwb2xsVXNlckNhbmNlbGxhdGlvbiIsImNsb3NlZCIsIlBFTkRJTkdfUkVESVJFQ1RfS0VZIiwicmVkaXJlY3RPdXRjb21lTWFwIiwiUmVkaXJlY3RBY3Rpb24iLCJyZWFkeU91dGNvbWUiLCJoYXNQZW5kaW5nUmVkaXJlY3QiLCJfZ2V0QW5kQ2xlYXJQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJwZW5kaW5nUmVkaXJlY3RLZXkiLCJyZXNvbHZlclBlcnNpc3RlbmNlIiwiX3NldFBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsIl9jbGVhclJlZGlyZWN0T3V0Y29tZXMiLCJfc2lnbkluV2l0aFJlZGlyZWN0IiwiX29wZW5SZWRpcmVjdCIsIl9yZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInByZXBhcmVVc2VyRm9yUmVkaXJlY3QiLCJfbGlua1dpdGhSZWRpcmVjdCIsIl9nZXRSZWRpcmVjdFJlc3VsdCIsInJlc29sdmVyRXh0ZXJuIiwiRVZFTlRfRFVQTElDQVRJT05fQ0FDSEVfRFVSQVRJT05fTVMiLCJBdXRoRXZlbnRNYW5hZ2VyIiwiY2FjaGVkRXZlbnRVaWRzIiwiY29uc3VtZXJzIiwicXVldWVkUmVkaXJlY3RFdmVudCIsImhhc0hhbmRsZWRQb3RlbnRpYWxSZWRpcmVjdCIsImxhc3RQcm9jZXNzZWRFdmVudFRpbWUiLCJhdXRoRXZlbnRDb25zdW1lciIsImlzRXZlbnRGb3JDb25zdW1lciIsInNlbmRUb0NvbnN1bWVyIiwic2F2ZUV2ZW50VG9DYWNoZSIsIm9uRXZlbnQiLCJoYXNFdmVudEJlZW5IYW5kbGVkIiwiaGFuZGxlZCIsImNvbnN1bWVyIiwiaXNSZWRpcmVjdEV2ZW50IiwiaXNOdWxsUmVkaXJlY3RFdmVudCIsImV2ZW50SWRNYXRjaGVzIiwiZXZlbnRVaWQiLCJ2IiwiX2dldFByb2plY3RDb25maWciLCJJUF9BRERSRVNTX1JFR0VYIiwiSFRUUF9SRUdFWCIsIl92YWxpZGF0ZU9yaWdpbiIsImF1dGhvcml6ZWREb21haW5zIiwiZG9tYWluIiwibWF0Y2hEb21haW4iLCJjdXJyZW50VXJsIiwiaG9zdG5hbWUiLCJVUkwiLCJjZVVybCIsImVzY2FwZWREb21haW5QYXR0ZXJuIiwiUmVnRXhwIiwiTkVUV09SS19USU1FT1VUIiwicmVzZXRVbmxvYWRlZEdhcGlNb2R1bGVzIiwiYmVhY29uIiwiX19fanNsIiwiSCIsImhpbnQiLCJyIiwiTCIsIkNQIiwibG9hZEdhcGkiLCJsb2FkR2FwaUlmcmFtZSIsImdhcGkiLCJpZnJhbWVzIiwiZ2V0Q29udGV4dCIsIm9udGltZW91dCIsIklmcmFtZSIsImNiTmFtZSIsImNhY2hlZEdBcGlMb2FkZXIiLCJfbG9hZEdhcGkiLCJQSU5HX1RJTUVPVVQiLCJJRlJBTUVfUEFUSCIsIkVNVUxBVEVEX0lGUkFNRV9QQVRIIiwiSUZSQU1FX0FUVFJJQlVURVMiLCJ0b3AiLCJoZWlnaHQiLCJ0YWJpbmRleCIsIkVJRF9GUk9NX0FQSUhPU1QiLCJnZXRJZnJhbWVVcmwiLCJlaWQiLCJmdyIsIl9vcGVuSWZyYW1lIiwiY29udGV4dCIsImdhcGkyIiwid2hlcmUiLCJtZXNzYWdlSGFuZGxlcnNGaWx0ZXIiLCJDUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVIiLCJhdHRyaWJ1dGVzIiwiZG9udGNsZWFyIiwiaWZyYW1lIiwicmVzdHlsZSIsInNldEhpZGVPbkxlYXZlIiwibmV0d29ya0Vycm9yIiwibmV0d29ya0Vycm9yVGltZXIiLCJjbGVhclRpbWVyQW5kUmVzb2x2ZSIsInBpbmciLCJCQVNFX1BPUFVQX09QVElPTlMiLCJyZXNpemFibGUiLCJzdGF0dXNiYXIiLCJ0b29sYmFyIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiVEFSR0VUX0JMQU5LIiwiRklSRUZPWF9FTVBUWV9VUkwiLCJBdXRoUG9wdXAiLCJ3aW5kb3cyIiwiX29wZW4iLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImF2YWlsV2lkdGgiLCJzY3JvbGxiYXJzIiwib3B0aW9uc1N0cmluZyIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2N1bSIsIm9wZW5Bc05ld1dpbmRvd0lPUyIsIm5ld1dpbiIsImZvY3VzIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIldJREdFVF9QQVRIIiwiRU1VTEFUT1JfV0lER0VUX1BBVEgiLCJGSVJFQkFTRV9BUFBfQ0hFQ0tfRlJBR01FTlRfSUQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfZ2V0UmVkaXJlY3RVcmwiLCJhdXRoVHlwZSIsInJlZGlyZWN0VXJsIiwiYWRkaXRpb25hbFBhcmFtcyIsImlzRW1wdHkiLCJ0aWQiLCJwYXJhbXNEaWN0IiwiYXBwQ2hlY2tUb2tlbkZyYWdtZW50IiwiZ2V0SGFuZGxlckJhc2UiLCJXRUJfU1RPUkFHRV9TVVBQT1JUX0tFWSIsIkJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJldmVudE1hbmFnZXJzIiwib3JpZ2luVmFsaWRhdGlvblByb21pc2VzIiwicHJvbWlzZTIiLCJpbml0QW5kR2V0TWFuYWdlciIsInJlZ2lzdGVyIiwiaWZyYW1lRXZlbnQiLCJhdXRoRXZlbnQiLCJzZW5kIiwiTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2ZpbmFsaXplRW5yb2xsIiwiX2ZpbmFsaXplU2lnbkluIiwiUGhvbmVNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbUNyZWRlbnRpYWwiLCJwaG9uZVZlcmlmaWNhdGlvbkluZm8iLCJGQUNUT1JfSUQiLCJhc3NlcnRpb25Gb3JFbnJvbGxtZW50Iiwib25lVGltZVBhc3N3b3JkIiwiVG90cE11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tU2VjcmV0IiwiYXNzZXJ0aW9uRm9yU2lnbkluIiwiZW5yb2xsbWVudElkIiwiX2Zyb21FbnJvbGxtZW50SWQiLCJnZW5lcmF0ZVNlY3JldCIsIm1mYVNlc3Npb24iLCJ0b3RwRW5yb2xsbWVudEluZm8iLCJfZnJvbVN0YXJ0VG90cE1mYUVucm9sbG1lbnRSZXNwb25zZSIsIm90cCIsInRvdHBWZXJpZmljYXRpb25JbmZvIiwiX21ha2VUb3RwVmVyaWZpY2F0aW9uSW5mbyIsInNlY3JldEtleSIsImhhc2hpbmdBbGdvcml0aG0iLCJjb2RlTGVuZ3RoIiwiY29kZUludGVydmFsU2Vjb25kcyIsImVucm9sbG1lbnRDb21wbGV0aW9uRGVhZGxpbmUiLCJ0b3RwU2Vzc2lvbkluZm8iLCJzaGFyZWRTZWNyZXRLZXkiLCJ2ZXJpZmljYXRpb25Db2RlTGVuZ3RoIiwicGVyaW9kU2VjIiwiZmluYWxpemVFbnJvbGxtZW50VGltZSIsImdlbmVyYXRlUXJDb2RlVXJsIiwiYWNjb3VudE5hbWUiLCJpc3N1ZXIiLCJ1c2VEZWZhdWx0cyIsIl9pc0VtcHR5U3RyaW5nIiwiaW5wdXQiLCJBdXRoSW50ZXJvcCIsImludGVybmFsTGlzdGVuZXJzIiwiZ2V0VWlkIiwiYXNzZXJ0QXV0aENvbmZpZ3VyZWQiLCJhZGRBdXRoVG9rZW5MaXN0ZW5lciIsInVwZGF0ZVByb2FjdGl2ZVJlZnJlc2giLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsImdldFZlcnNpb25Gb3JQbGF0Zm9ybSIsInJlZ2lzdGVyQXV0aCIsIl9yZWdpc3RlckNvbXBvbmVudCIsImltcG9ydF9jb21wb25lbnQiLCJDb21wb25lbnQiLCJnZXRQcm92aWRlciIsInNldEluc3RhbnRpYXRpb25Nb2RlIiwic2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2siLCJfaW5zdGFuY2VJZGVudGlmaWVyIiwiX2luc3RhbmNlIiwiYXV0aEludGVybmFsUHJvdmlkZXIiLCJyZWdpc3RlclZlcnNpb24iLCJERUZBVUxUX0lEX1RPS0VOX01BWF9BR0UiLCJhdXRoSWRUb2tlbk1heEFnZSIsImdldEV4cGVyaW1lbnRhbFNldHRpbmciLCJsYXN0UG9zdGVkSWRUb2tlbiIsIm1pbnRDb29raWVGYWN0b3J5IiwiaWRUb2tlblJlc3VsdCIsImlkVG9rZW5BZ2UiLCJnZXRBcHAiLCJhdXRoVG9rZW5TeW5jUGF0aCIsImlzU2VjdXJlQ29udGV4dCIsImF1dGhUb2tlblN5bmNVcmwiLCJtaW50Q29va2llIiwiYXV0aEVtdWxhdG9ySG9zdCIsImdldERlZmF1bHRFbXVsYXRvckhvc3QiLCJnZXRTY3JpcHRQYXJlbnRFbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJvbmVycm9yIiwiY2hhcnNldCIsImltcG9ydF9hcHAyIiwicmVxdWlyZSIsImltcG9ydF91dGlsMiIsImltcG9ydF9sb2dnZXIyIiwiaW1wb3J0X3RzbGliMiIsImltcG9ydF9jb21wb25lbnQyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFDLDBDQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMseUJB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Q0FBaUJ0bUMsUUFBQSxDQUFRLENBQUU7TUFDaEUxWSxzQkFBQSxDQUF1Qm1OLElBQUEsRUFBTTh4QyxVQUFBLEVBQVksTUFDdkNBLFVBQUEsQ0FBVzl4QyxJQUFBLENBQUs2TCxXQUFXLENBQUM7TUFFOUJwWCxnQkFBQSxDQUFpQnVMLElBQUEsRUFBTStKLElBQUEsSUFBUStuQyxVQUFBLENBQVcvbkMsSUFBSSxDQUFDO0lBQ2hEO0VBQ0Y7RUFFRCxNQUFNZ29DLGdCQUFBLE9BQW1COTVDLFdBQUEsQ0FBQSs1QyxzQkFBQSxFQUF1QixNQUFNO0VBQ3RELElBQUlELGdCQUFBLEVBQWtCO0lBQ3BCNStDLG1CQUFBLENBQW9CNk0sSUFBQSxFQUFNLFVBQVUreEMsZ0JBQUEsRUFBa0I7RUFDdkQ7RUFFRCxPQUFPL3hDLElBQUE7QUFDVDtBQUVBLFNBQVNpeUMsdUJBQUEsRUFBc0I7O0VBQzdCLFFBQU8zL0IsRUFBQSxJQUFBM1EsRUFBQSxHQUFBeVYsUUFBQSxDQUFTODZCLG9CQUFBLENBQXFCLE1BQU0sT0FBSSxRQUFBdndDLEVBQUEsdUJBQUFBLEVBQUEsU0FBRSxRQUFBMlEsRUFBQSxjQUFBQSxFQUFBLEdBQUk4RSxRQUFBO0FBQ3ZEO0FBRUEwSixzQkFBQSxDQUF1QjtFQUNyQkosT0FBT3BkLEdBQUEsRUFBVztJQUVoQixPQUFPLElBQUl5QyxPQUFBLENBQVEsQ0FBQ21TLE9BQUEsRUFBU3hRLE1BQUEsS0FBVTtNQUNyQyxNQUFNZ2QsRUFBQSxHQUFLdE4sUUFBQSxDQUFTdU4sYUFBQSxDQUFjLFFBQVE7TUFDMUNELEVBQUEsQ0FBR3l0QixZQUFBLENBQWEsT0FBTzd1QyxHQUFHO01BQzFCb2hCLEVBQUEsQ0FBRzZhLE1BQUEsR0FBU3JuQixPQUFBO01BQ1p3TSxFQUFBLENBQUcwdEIsT0FBQSxHQUFVdnJDLENBQUEsSUFBSTtRQUNmLE1BQU1wSCxLQUFBLEdBQVFLLFlBQUEsQ0FBWTtRQUMxQkwsS0FBQSxDQUFNdUksVUFBQSxHQUFhbkIsQ0FBQTtRQUNuQmEsTUFBQSxDQUFPakksS0FBSztNQUNkO01BQ0FpbEIsRUFBQSxDQUFHaFIsSUFBQSxHQUFPO01BQ1ZnUixFQUFBLENBQUcydEIsT0FBQSxHQUFVO01BQ2JKLHNCQUFBLENBQXNCLEVBQUd0c0IsV0FBQSxDQUFZakIsRUFBRTtJQUN6QyxDQUFDOztFQUdIN0QsVUFBQSxFQUFZO0VBQ1pGLGlCQUFBLEVBQW1CO0VBQ25CQyx5QkFBQSxFQUNFO0FBQ0g7QUFFRDR2QixZQUFBLENBQVk7OztBQ2hKWixJQUFBOEIsV0FBQSxHQUFPQyxPQUFBO0FBQ1AsSUFBQUMsWUFBQSxHQUFPRCxPQUFBO0FBQ1AsSUFBQUUsY0FBQSxHQUFPRixPQUFBO0FBQ1AsSUFBQUcsYUFBQSxHQUFPSCxPQUFBO0FBQ1AsSUFBQUksaUJBQUEsR0FBT0osT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==