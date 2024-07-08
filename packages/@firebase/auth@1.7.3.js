System.register(["@firebase/util@1.9.6","@firebase/component@0.6.7","@firebase/logger@0.4.2","idb@7.1.1","@firebase/app@0.10.3","tslib@2.6.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.9.6"],["@firebase/component","0.6.7"],["@firebase/logger","0.4.2"],["idb","7.1.1"],["@firebase/app","0.10.3"],["tslib","2.6.2"],["@firebase/auth","1.7.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.9.6', dep), dep => dependencies.set('@firebase/component@0.6.7', dep), dep => dependencies.set('@firebase/logger@0.4.2', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.10.3', dep), dep => dependencies.set('tslib@2.6.2', dep)],
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

// .beyond/uimport/temp/@firebase/auth.1.7.3.js
var auth_1_7_3_exports = {};
__export(auth_1_7_3_exports, {
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
module.exports = __toCommonJS(auth_1_7_3_exports);

// node_modules/@firebase/auth/dist/esm2017/index-d0d29856.js
var import_app = require("@firebase/app@0.10.3");
var import_util = require("@firebase/util@1.9.6");
var import_logger = require("@firebase/logger@0.4.2");
var import_tslib = require("tslib@2.6.2");
var import_component = require("@firebase/component@0.6.7");
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
var version = "1.7.3";
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
var import_app2 = require("@firebase/app@0.10.3");
var import_util2 = require("@firebase/util@1.9.6");
var import_logger2 = require("@firebase/logger@0.4.2");
var import_tslib2 = require("tslib@2.6.2");
var import_component2 = require("@firebase/component@0.6.7");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hdXRoLjEuNy4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tb2RlbC9lbnVtX21hcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYXNzZXJ0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9jYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9uYXZpZ2F0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9kZWxheS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZmV0Y2hfcHJvdmlkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vcmVjYXB0Y2hhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2FjY291bnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC90aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaWRfdG9rZW5fcmVzdWx0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaW52YWxpZGF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcHJvYWN0aXZlX3JlZnJlc2gudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX21ldGFkYXRhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVsb2FkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci90b2tlbl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaW5zdGFudGlhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luX21lbW9yeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9wZXJzaXN0ZW5jZV91c2VyX21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmVyc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL21pZGRsZXdhcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wYXNzd29yZF9wb2xpY3kvZ2V0X3Bhc3N3b3JkX3BvbGljeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3Bhc3N3b3JkX3BvbGljeV9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2xvYWRfanMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9lbnRlcnByaXNlX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvaW5pdGlhbGl6ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2F1dGhfY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc21zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2FjdGlvbl9jb2RlX3VybC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZlZGVyYXRlZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZhY2Vib29rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9nb29nbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dpdGh1Yi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy90d2l0dGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc2lnbl91cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfY3JlZGVudGlhbF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYW5vbnltb3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Vycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcHJvdmlkZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvbGlua191bmxpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWF1dGhlbnRpY2F0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2FjdGlvbl9jb2RlX3NldHRpbmdzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2NyZWF0ZV9hdXRoX3VyaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L3Byb2ZpbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hY2NvdW50X2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hZGRpdGlvbmFsX3VzZXJfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9zZXNzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV91c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvbG9jYWxfc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9zZXNzaW9uX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcHJvbWlzZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9yZWNlaXZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2V2ZW50X2lkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3NlbmRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9hdXRoX3dpbmRvdy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3dvcmtlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9pbmRleGVkX2RiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbW9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2xvYWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcHJvdmlkZXJzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hYnN0cmFjdF9wb3B1cF9yZWRpcmVjdF9vcGVyYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2V2ZW50X21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wcm9qZWN0X2NvbmZpZy9nZXRfcHJvamVjdF9jb25maWcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92YWxpZGF0ZV9vcmlnaW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2dhcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2lmcmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaGFuZGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wb3B1cF9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9hc3NlcnRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWZhL2Fzc2VydGlvbnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9hc3NlcnRpb25zL3RvdHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9maXJlYmFzZV9pbnRlcm5hbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3JlZ2lzdGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL2Rpc3QvZXNtMjAxNy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhdXRoXzFfN18zX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFjdGlvbkNvZGVPcGVyYXRpb24iLCJBY3Rpb25Db2RlVVJMIiwiQXV0aENyZWRlbnRpYWwiLCJBdXRoRXJyb3JDb2RlcyIsIkFVVEhfRVJST1JfQ09ERVNfTUFQX0RPX05PVF9VU0VfSU5URVJOQUxMWSIsIkVtYWlsQXV0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiRmFjdG9ySWQiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJPQXV0aENyZWRlbnRpYWwiLCJPQXV0aFByb3ZpZGVyIiwiT3BlcmF0aW9uVHlwZSIsIlBob25lQXV0aENyZWRlbnRpYWwiLCJQaG9uZUF1dGhQcm92aWRlciIsIlBob25lTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJQcm92aWRlcklkIiwiUmVjYXB0Y2hhVmVyaWZpZXIiLCJTQU1MQXV0aFByb3ZpZGVyIiwiU2lnbkluTWV0aG9kIiwiVG90cE11bHRpRmFjdG9yR2VuZXJhdG9yIiwiVG90cFNlY3JldCIsIlR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJhcHBseUFjdGlvbkNvZGUiLCJiZWZvcmVBdXRoU3RhdGVDaGFuZ2VkIiwiYnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJicm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsImNoZWNrQWN0aW9uQ29kZSIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29ubmVjdEF1dGhFbXVsYXRvciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRlYnVnRXJyb3JNYXAiLCJkZWxldGVVc2VyIiwiZmV0Y2hTaWduSW5NZXRob2RzRm9yRW1haWwiLCJnZXRBZGRpdGlvbmFsVXNlckluZm8iLCJnZXRBdXRoIiwiZ2V0SWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJnZXRNdWx0aUZhY3RvclJlc29sdmVyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJpbk1lbW9yeVBlcnNpc3RlbmNlIiwiaW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsImluaXRpYWxpemVBdXRoIiwiaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImlzU2lnbkluV2l0aEVtYWlsTGluayIsImxpbmtXaXRoQ3JlZGVudGlhbCIsImxpbmtXaXRoUGhvbmVOdW1iZXIiLCJsaW5rV2l0aFBvcHVwIiwibGlua1dpdGhSZWRpcmVjdCIsIm11bHRpRmFjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwib25JZFRva2VuQ2hhbmdlZCIsInBhcnNlQWN0aW9uQ29kZVVSTCIsInByb2RFcnJvck1hcCIsInJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQaG9uZU51bWJlciIsInJlYXV0aGVudGljYXRlV2l0aFBvcHVwIiwicmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJyZWxvYWQiLCJyZXZva2VBY2Nlc3NUb2tlbiIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJzZXRQZXJzaXN0ZW5jZSIsInNpZ25JbkFub255bW91c2x5Iiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbExpbmsiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJzaWduT3V0IiwidW5saW5rIiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGhvbmVOdW1iZXIiLCJ1cGRhdGVQcm9maWxlIiwidXNlRGV2aWNlTGFuZ3VhZ2UiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwidmVyaWZ5QmVmb3JlVXBkYXRlRW1haWwiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJQSE9ORSIsIlRPVFAiLCJGQUNFQk9PSyIsIkdJVEhVQiIsIkdPT0dMRSIsIlBBU1NXT1JEIiwiVFdJVFRFUiIsIkVNQUlMX0xJTksiLCJFTUFJTF9QQVNTV09SRCIsIkxJTksiLCJSRUFVVEhFTlRJQ0FURSIsIlNJR05fSU4iLCJFTUFJTF9TSUdOSU4iLCJQQVNTV09SRF9SRVNFVCIsIlJFQ09WRVJfRU1BSUwiLCJSRVZFUlRfU0VDT05EX0ZBQ1RPUl9BRERJVElPTiIsIlZFUklGWV9BTkRfQ0hBTkdFX0VNQUlMIiwiVkVSSUZZX0VNQUlMIiwiX2RlYnVnRXJyb3JNYXAiLCJfcHJvZEVycm9yTWFwIiwiX0RFRkFVTFRfQVVUSF9FUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJFcnJvckZhY3RvcnkiLCJBRE1JTl9PTkxZX09QRVJBVElPTiIsIkFSR1VNRU5UX0VSUk9SIiwiQVBQX05PVF9BVVRIT1JJWkVEIiwiQVBQX05PVF9JTlNUQUxMRUQiLCJDQVBUQ0hBX0NIRUNLX0ZBSUxFRCIsIkNPREVfRVhQSVJFRCIsIkNPUkRPVkFfTk9UX1JFQURZIiwiQ09SU19VTlNVUFBPUlRFRCIsIkNSRURFTlRJQUxfQUxSRUFEWV9JTl9VU0UiLCJDUkVERU5USUFMX01JU01BVENIIiwiQ1JFREVOVElBTF9UT09fT0xEX0xPR0lOX0FHQUlOIiwiREVQRU5ERU5UX1NES19JTklUX0JFRk9SRV9BVVRIIiwiRFlOQU1JQ19MSU5LX05PVF9BQ1RJVkFURUQiLCJFTUFJTF9DSEFOR0VfTkVFRFNfVkVSSUZJQ0FUSU9OIiwiRU1BSUxfRVhJU1RTIiwiRU1VTEFUT1JfQ09ORklHX0ZBSUxFRCIsIkVYUElSRURfT09CX0NPREUiLCJFWFBJUkVEX1BPUFVQX1JFUVVFU1QiLCJJTlRFUk5BTF9FUlJPUiIsIklOVkFMSURfQVBJX0tFWSIsIklOVkFMSURfQVBQX0NSRURFTlRJQUwiLCJJTlZBTElEX0FQUF9JRCIsIklOVkFMSURfQVVUSCIsIklOVkFMSURfQVVUSF9FVkVOVCIsIklOVkFMSURfQ0VSVF9IQVNIIiwiSU5WQUxJRF9DT0RFIiwiSU5WQUxJRF9DT05USU5VRV9VUkkiLCJJTlZBTElEX0NPUkRPVkFfQ09ORklHVVJBVElPTiIsIklOVkFMSURfQ1VTVE9NX1RPS0VOIiwiSU5WQUxJRF9EWU5BTUlDX0xJTktfRE9NQUlOIiwiSU5WQUxJRF9FTUFJTCIsIklOVkFMSURfRU1VTEFUT1JfU0NIRU1FIiwiSU5WQUxJRF9JRFBfUkVTUE9OU0UiLCJJTlZBTElEX0xPR0lOX0NSRURFTlRJQUxTIiwiSU5WQUxJRF9NRVNTQUdFX1BBWUxPQUQiLCJJTlZBTElEX01GQV9TRVNTSU9OIiwiSU5WQUxJRF9PQVVUSF9DTElFTlRfSUQiLCJJTlZBTElEX09BVVRIX1BST1ZJREVSIiwiSU5WQUxJRF9PT0JfQ09ERSIsIklOVkFMSURfT1JJR0lOIiwiSU5WQUxJRF9QQVNTV09SRCIsIklOVkFMSURfUEVSU0lTVEVOQ0UiLCJJTlZBTElEX1BIT05FX05VTUJFUiIsIklOVkFMSURfUFJPVklERVJfSUQiLCJJTlZBTElEX1JFQ0lQSUVOVF9FTUFJTCIsIklOVkFMSURfU0VOREVSIiwiSU5WQUxJRF9TRVNTSU9OX0lORk8iLCJJTlZBTElEX1RFTkFOVF9JRCIsIk1GQV9JTkZPX05PVF9GT1VORCIsIk1GQV9SRVFVSVJFRCIsIk1JU1NJTkdfQU5EUk9JRF9QQUNLQUdFX05BTUUiLCJNSVNTSU5HX0FQUF9DUkVERU5USUFMIiwiTUlTU0lOR19BVVRIX0RPTUFJTiIsIk1JU1NJTkdfQ09ERSIsIk1JU1NJTkdfQ09OVElOVUVfVVJJIiwiTUlTU0lOR19JRlJBTUVfU1RBUlQiLCJNSVNTSU5HX0lPU19CVU5ETEVfSUQiLCJNSVNTSU5HX09SX0lOVkFMSURfTk9OQ0UiLCJNSVNTSU5HX01GQV9JTkZPIiwiTUlTU0lOR19NRkFfU0VTU0lPTiIsIk1JU1NJTkdfUEhPTkVfTlVNQkVSIiwiTUlTU0lOR19TRVNTSU9OX0lORk8iLCJNT0RVTEVfREVTVFJPWUVEIiwiTkVFRF9DT05GSVJNQVRJT04iLCJORVRXT1JLX1JFUVVFU1RfRkFJTEVEIiwiTlVMTF9VU0VSIiwiTk9fQVVUSF9FVkVOVCIsIk5PX1NVQ0hfUFJPVklERVIiLCJPUEVSQVRJT05fTk9UX0FMTE9XRUQiLCJPUEVSQVRJT05fTk9UX1NVUFBPUlRFRCIsIlBPUFVQX0JMT0NLRUQiLCJQT1BVUF9DTE9TRURfQllfVVNFUiIsIlBST1ZJREVSX0FMUkVBRFlfTElOS0VEIiwiUVVPVEFfRVhDRUVERUQiLCJSRURJUkVDVF9DQU5DRUxMRURfQllfVVNFUiIsIlJFRElSRUNUX09QRVJBVElPTl9QRU5ESU5HIiwiUkVKRUNURURfQ1JFREVOVElBTCIsIlNFQ09ORF9GQUNUT1JfQUxSRUFEWV9FTlJPTExFRCIsIlNFQ09ORF9GQUNUT1JfTElNSVRfRVhDRUVERUQiLCJURU5BTlRfSURfTUlTTUFUQ0giLCJUSU1FT1VUIiwiVE9LRU5fRVhQSVJFRCIsIlRPT19NQU5ZX0FUVEVNUFRTX1RSWV9MQVRFUiIsIlVOQVVUSE9SSVpFRF9ET01BSU4iLCJVTlNVUFBPUlRFRF9GSVJTVF9GQUNUT1IiLCJVTlNVUFBPUlRFRF9QRVJTSVNURU5DRSIsIlVOU1VQUE9SVEVEX1RFTkFOVF9PUEVSQVRJT04iLCJVTlZFUklGSUVEX0VNQUlMIiwiVVNFUl9DQU5DRUxMRUQiLCJVU0VSX0RFTEVURUQiLCJVU0VSX0RJU0FCTEVEIiwiVVNFUl9NSVNNQVRDSCIsIlVTRVJfU0lHTkVEX09VVCIsIldFQUtfUEFTU1dPUkQiLCJXRUJfU1RPUkFHRV9VTlNVUFBPUlRFRCIsIkFMUkVBRFlfSU5JVElBTElaRUQiLCJSRUNBUFRDSEFfTk9UX0VOQUJMRUQiLCJNSVNTSU5HX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfQUNUSU9OIiwiTUlTU0lOR19DTElFTlRfVFlQRSIsIk1JU1NJTkdfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRVFfVFlQRSIsImxvZ0NsaWVudCIsImltcG9ydF9sb2dnZXIiLCJMb2dnZXIiLCJfbG9nV2FybiIsIm1zZyIsImFyZ3MiLCJsb2dMZXZlbCIsIkxvZ0xldmVsIiwiV0FSTiIsIndhcm4iLCJpbXBvcnRfYXBwIiwiU0RLX1ZFUlNJT04iLCJfbG9nRXJyb3IiLCJFUlJPUiIsImVycm9yIiwiX2ZhaWwiLCJhdXRoT3JDb2RlIiwicmVzdCIsImNyZWF0ZUVycm9ySW50ZXJuYWwiLCJfY3JlYXRlRXJyb3IiLCJfZXJyb3JXaXRoQ3VzdG9tTWVzc2FnZSIsImF1dGgiLCJjb2RlIiwibWVzc2FnZSIsImVycm9yTWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiZmFjdG9yeSIsImNyZWF0ZSIsImFwcE5hbWUiLCJuYW1lIiwiX3NlcnZlckFwcEN1cnJlbnRVc2VyT3BlcmF0aW9uTm90U3VwcG9ydGVkRXJyb3IiLCJfYXNzZXJ0SW5zdGFuY2VPZiIsIm9iamVjdCIsImluc3RhbmNlIiwiY29uc3RydWN0b3JJbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiZnVsbFBhcmFtcyIsInNsaWNlIiwiX2Vycm9yRmFjdG9yeSIsIl9hc3NlcnQiLCJhc3NlcnRpb24iLCJkZWJ1Z0ZhaWwiLCJmYWlsdXJlIiwiRXJyb3IiLCJkZWJ1Z0Fzc2VydCIsIl9nZXRDdXJyZW50VXJsIiwic2VsZiIsIl9hIiwibG9jYXRpb24iLCJocmVmIiwiX2lzSHR0cE9ySHR0cHMiLCJfZ2V0Q3VycmVudFNjaGVtZSIsInByb3RvY29sIiwiX2lzT25saW5lIiwibmF2aWdhdG9yIiwib25MaW5lIiwiaXNCcm93c2VyRXh0ZW5zaW9uIiwiX2dldFVzZXJMYW5ndWFnZSIsIm5hdmlnYXRvckxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJEZWxheSIsInNob3J0RGVsYXkiLCJsb25nRGVsYXkiLCJpc01vYmlsZSIsImlzTW9iaWxlQ29yZG92YSIsImlzUmVhY3ROYXRpdmUiLCJnZXQiLCJNYXRoIiwibWluIiwiX2VtdWxhdG9yVXJsIiwiY29uZmlnIiwicGF0aCIsImVtdWxhdG9yIiwidXJsIiwic3RhcnRzV2l0aCIsIkZldGNoUHJvdmlkZXIiLCJpbml0aWFsaXplIiwiZmV0Y2hJbXBsIiwiaGVhZGVyc0ltcGwiLCJyZXNwb25zZUltcGwiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJoZWFkZXJzIiwiSGVhZGVycyIsInJlc3BvbnNlIiwiUmVzcG9uc2UiLCJTRVJWRVJfRVJST1JfTUFQIiwiREVGQVVMVF9BUElfVElNRU9VVF9NUyIsIl9hZGRUaWRJZk5lY2Vzc2FyeSIsInJlcXVlc3QiLCJ0ZW5hbnRJZCIsIl9wZXJmb3JtQXBpUmVxdWVzdCIsIm1ldGhvZCIsImN1c3RvbUVycm9yTWFwIiwiX3BlcmZvcm1GZXRjaFdpdGhFcnJvckhhbmRsaW5nIiwiYm9keSIsInBhcmFtcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInF1ZXJ5c3RyaW5nIiwia2V5IiwiYXBpS2V5IiwiX2dldEFkZGl0aW9uYWxIZWFkZXJzIiwibGFuZ3VhZ2VDb2RlIiwiX2dldEZpbmFsVGFyZ2V0IiwiYXBpSG9zdCIsInJlZmVycmVyUG9saWN5IiwiZmV0Y2hGbiIsIl9jYW5Jbml0RW11bGF0b3IiLCJuZXR3b3JrVGltZW91dCIsIk5ldHdvcmtUaW1lb3V0IiwiUHJvbWlzZSIsInJhY2UiLCJwcm9taXNlIiwiY2xlYXJOZXR3b3JrVGltZW91dCIsImpzb24iLCJfbWFrZVRhZ2dlZEVycm9yIiwib2siLCJlcnJvck1lc3NhZ2UiLCJzZXJ2ZXJFcnJvckNvZGUiLCJzZXJ2ZXJFcnJvck1lc3NhZ2UiLCJzcGxpdCIsImF1dGhFcnJvciIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImUiLCJGaXJlYmFzZUVycm9yIiwiU3RyaW5nIiwiX3BlcmZvcm1TaWduSW5SZXF1ZXN0Iiwic2VydmVyUmVzcG9uc2UiLCJfc2VydmVyUmVzcG9uc2UiLCJob3N0IiwiYmFzZSIsImFwaVNjaGVtZSIsIl9wYXJzZUVuZm9yY2VtZW50U3RhdGUiLCJlbmZvcmNlbWVudFN0YXRlU3RyIiwidGltZXIiLCJfIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImVycm9yUGFyYW1zIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImN1c3RvbURhdGEiLCJfdG9rZW5SZXNwb25zZSIsImlzVjIiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJpc0VudGVycHJpc2UiLCJlbnRlcnByaXNlIiwiUmVjYXB0Y2hhQ29uZmlnIiwic2l0ZUtleSIsInJlY2FwdGNoYUVuZm9yY2VtZW50U3RhdGUiLCJyZWNhcHRjaGFLZXkiLCJnZXRQcm92aWRlckVuZm9yY2VtZW50U3RhdGUiLCJwcm92aWRlclN0ciIsImxlbmd0aCIsInByb3ZpZGVyIiwiZW5mb3JjZW1lbnRTdGF0ZSIsImlzUHJvdmlkZXJFbmFibGVkIiwiZ2V0UmVjYXB0Y2hhUGFyYW1zIiwicmVjYXB0Y2hhU2l0ZUtleSIsImdldFJlY2FwdGNoYUNvbmZpZyIsImRlbGV0ZUFjY291bnQiLCJkZWxldGVMaW5rZWRBY2NvdW50cyIsImdldEFjY291bnRJbmZvIiwidXRjVGltZXN0YW1wVG9EYXRlU3RyaW5nIiwidXRjVGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJOdW1iZXIiLCJpc05hTiIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsInVzZXIiLCJmb3JjZVJlZnJlc2giLCJnZXRNb2R1bGFySW5zdGFuY2UiLCJ1c2VySW50ZXJuYWwiLCJ0b2tlbiIsImNsYWltcyIsIl9wYXJzZVRva2VuIiwiZXhwIiwiYXV0aF90aW1lIiwiaWF0IiwiZmlyZWJhc2UiLCJzaWduSW5Qcm92aWRlciIsImF1dGhUaW1lIiwic2Vjb25kc1N0cmluZ1RvTWlsbGlzZWNvbmRzIiwiaXNzdWVkQXRUaW1lIiwiZXhwaXJhdGlvblRpbWUiLCJzaWduSW5TZWNvbmRGYWN0b3IiLCJzZWNvbmRzIiwiYWxnb3JpdGhtIiwicGF5bG9hZCIsInNpZ25hdHVyZSIsImRlY29kZWQiLCJiYXNlNjREZWNvZGUiLCJwYXJzZSIsInRvU3RyaW5nIiwiX3Rva2VuRXhwaXJlc0luIiwicGFyc2VkVG9rZW4iLCJfbG9nb3V0SWZJbnZhbGlkYXRlZCIsImJ5cGFzc0F1dGhTdGF0ZSIsImlzVXNlckludmFsaWRhdGVkIiwiY3VycmVudFVzZXIiLCJQcm9hY3RpdmVSZWZyZXNoIiwiaXNSdW5uaW5nIiwidGltZXJJZCIsImVycm9yQmFja29mZiIsIl9zdGFydCIsInNjaGVkdWxlIiwiX3N0b3AiLCJnZXRJbnRlcnZhbCIsIndhc0Vycm9yIiwiaW50ZXJ2YWwiLCJleHBUaW1lIiwic3RzVG9rZW5NYW5hZ2VyIiwibm93IiwibWF4IiwiaXRlcmF0aW9uIiwiVXNlck1ldGFkYXRhIiwiY3JlYXRlZEF0IiwibGFzdExvZ2luQXQiLCJfaW5pdGlhbGl6ZVRpbWUiLCJsYXN0U2lnbkluVGltZSIsImNyZWF0aW9uVGltZSIsIl9jb3B5IiwibWV0YWRhdGEiLCJ0b0pTT04iLCJfcmVsb2FkV2l0aG91dFNhdmluZyIsImlkVG9rZW4iLCJ1c2VycyIsImNvcmVBY2NvdW50IiwiX25vdGlmeVJlbG9hZExpc3RlbmVyIiwibmV3UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJVc2VySW5mbyIsImV4dHJhY3RQcm92aWRlckRhdGEiLCJwcm92aWRlckRhdGEiLCJtZXJnZVByb3ZpZGVyRGF0YSIsIm9sZElzQW5vbnltb3VzIiwiaXNBbm9ueW1vdXMiLCJuZXdJc0Fub255bW91cyIsInBhc3N3b3JkSGFzaCIsInVwZGF0ZXMiLCJ1aWQiLCJsb2NhbElkIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsInBob3RvVXJsIiwiZW1haWxWZXJpZmllZCIsIl9wZXJzaXN0VXNlcklmQ3VycmVudCIsIl9ub3RpZnlMaXN0ZW5lcnNJZkN1cnJlbnQiLCJvcmlnaW5hbCIsIm5ld0RhdGEiLCJkZWR1cGVkIiwiZmlsdGVyIiwibyIsInNvbWUiLCJuIiwicHJvdmlkZXJJZCIsInByb3ZpZGVycyIsIm1hcCIsImltcG9ydF90c2xpYiIsIl9fcmVzdCIsInJhd0lkIiwicmVxdWVzdFN0c1Rva2VuIiwicmVmcmVzaFRva2VuIiwidG9rZW5BcGlIb3N0IiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzSW4iLCJleHBpcmVzX2luIiwicmVmcmVzaF90b2tlbiIsInJldm9rZVRva2VuIiwiU3RzVG9rZW5NYW5hZ2VyIiwiaXNFeHBpcmVkIiwidXBkYXRlRnJvbVNlcnZlclJlc3BvbnNlIiwidXBkYXRlVG9rZW5zQW5kRXhwaXJhdGlvbiIsInVwZGF0ZUZyb21JZFRva2VuIiwiZ2V0VG9rZW4iLCJyZWZyZXNoIiwiY2xlYXJSZWZyZXNoVG9rZW4iLCJvbGRUb2tlbiIsImV4cGlyZXNJblNlYyIsImZyb21KU09OIiwibWFuYWdlciIsIl9hc3NpZ24iLCJfY2xvbmUiLCJfcGVyZm9ybVJlZnJlc2giLCJhc3NlcnRTdHJpbmdPclVuZGVmaW5lZCIsIlVzZXJJbXBsIiwib3B0IiwicHJvYWN0aXZlUmVmcmVzaCIsInJlbG9hZFVzZXJJbmZvIiwicmVsb2FkTGlzdGVuZXIiLCJ1c2VySW5mbyIsIm5ld1VzZXIiLCJfb25SZWxvYWQiLCJjYWxsYmFjayIsIl9zdGFydFByb2FjdGl2ZVJlZnJlc2giLCJfc3RvcFByb2FjdGl2ZVJlZnJlc2giLCJfdXBkYXRlVG9rZW5zSWZOZWNlc3NhcnkiLCJyZWxvYWQyIiwidG9rZW5zUmVmcmVzaGVkIiwiZGVsZXRlIiwiX2lzRmlyZWJhc2VTZXJ2ZXJBcHAiLCJhcHAiLCJfcmVkaXJlY3RFdmVudElkIiwiX2Zyb21KU09OIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJfZiIsIl9nIiwiX2giLCJwbGFpbk9iamVjdFRva2VuTWFuYWdlciIsIkFycmF5IiwiaXNBcnJheSIsIl9mcm9tSWRUb2tlblJlc3BvbnNlIiwiaWRUb2tlblJlc3BvbnNlIiwiX2Zyb21HZXRBY2NvdW50SW5mb1Jlc3BvbnNlIiwiaW5zdGFuY2VDYWNoZSIsIk1hcCIsIl9nZXRJbnN0YW5jZSIsImNscyIsIkZ1bmN0aW9uIiwic2V0IiwiSW5NZW1vcnlQZXJzaXN0ZW5jZSIsInR5cGUiLCJzdG9yYWdlIiwiX2lzQXZhaWxhYmxlIiwiX3NldCIsInZhbHVlIiwiX2dldCIsIl9yZW1vdmUiLCJfYWRkTGlzdGVuZXIiLCJfa2V5IiwiX2xpc3RlbmVyIiwiX3JlbW92ZUxpc3RlbmVyIiwiX3BlcnNpc3RlbmNlS2V5TmFtZSIsIlBlcnNpc3RlbmNlVXNlck1hbmFnZXIiLCJwZXJzaXN0ZW5jZSIsInVzZXJLZXkiLCJuYW1lMiIsImZ1bGxVc2VyS2V5IiwiZnVsbFBlcnNpc3RlbmNlS2V5IiwiYm91bmRFdmVudEhhbmRsZXIiLCJfb25TdG9yYWdlRXZlbnQiLCJiaW5kIiwic2V0Q3VycmVudFVzZXIiLCJnZXRDdXJyZW50VXNlciIsImJsb2IiLCJyZW1vdmVDdXJyZW50VXNlciIsInNhdmVQZXJzaXN0ZW5jZUZvclJlZGlyZWN0IiwibmV3UGVyc2lzdGVuY2UiLCJwZXJzaXN0ZW5jZUhpZXJhcmNoeSIsImF2YWlsYWJsZVBlcnNpc3RlbmNlcyIsImFsbCIsInNlbGVjdGVkUGVyc2lzdGVuY2UiLCJ1c2VyVG9NaWdyYXRlIiwibWlncmF0aW9uSGllcmFyY2h5IiwicCIsIl9zaG91bGRBbGxvd01pZ3JhdGlvbiIsIl9nZXRCcm93c2VyTmFtZSIsInVzZXJBZ2VudCIsInVhIiwiaW5jbHVkZXMiLCJfaXNJRU1vYmlsZSIsIl9pc0ZpcmVmb3giLCJfaXNCbGFja0JlcnJ5IiwiX2lzV2ViT1MiLCJfaXNTYWZhcmkiLCJfaXNDaHJvbWVJT1MiLCJfaXNBbmRyb2lkIiwicmUiLCJtYXRjaGVzIiwibWF0Y2giLCJnZXRVQSIsInRlc3QiLCJfaXNJT1MiLCJfaXNJT1M3T3I4IiwiX2lzSU9TU3RhbmRhbG9uZSIsIndpbmRvdyIsInN0YW5kYWxvbmUiLCJfaXNJRTEwIiwiaXNJRSIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiX2lzTW9iaWxlQnJvd3NlciIsIl9pc0lmcmFtZSIsInRvcCIsIl9nZXRDbGllbnRWZXJzaW9uIiwiY2xpZW50UGxhdGZvcm0iLCJmcmFtZXdvcmtzIiwicmVwb3J0ZWRQbGF0Zm9ybSIsInJlcG9ydGVkRnJhbWV3b3JrcyIsImpvaW4iLCJBdXRoTWlkZGxld2FyZVF1ZXVlIiwicXVldWUiLCJwdXNoQ2FsbGJhY2siLCJvbkFib3J0Iiwid3JhcHBlZENhbGxiYWNrIiwicmVzb2x2ZSIsInJlc3VsdCIsInB1c2giLCJpbmRleCIsInJ1bk1pZGRsZXdhcmUiLCJuZXh0VXNlciIsIm9uQWJvcnRTdGFjayIsImJlZm9yZVN0YXRlQ2FsbGJhY2siLCJyZXZlcnNlIiwib3JpZ2luYWxNZXNzYWdlIiwiX2dldFBhc3N3b3JkUG9saWN5IiwiTUlOSU1VTV9NSU5fUEFTU1dPUkRfTEVOR1RIIiwiUGFzc3dvcmRQb2xpY3lJbXBsIiwicmVzcG9uc2VPcHRpb25zIiwiY3VzdG9tU3RyZW5ndGhPcHRpb25zIiwibWluUGFzc3dvcmRMZW5ndGgiLCJtYXhQYXNzd29yZExlbmd0aCIsImNvbnRhaW5zTG93ZXJjYXNlQ2hhcmFjdGVyIiwiY29udGFpbnNMb3dlcmNhc2VMZXR0ZXIiLCJjb250YWluc1VwcGVyY2FzZUNoYXJhY3RlciIsImNvbnRhaW5zVXBwZXJjYXNlTGV0dGVyIiwiY29udGFpbnNOdW1lcmljQ2hhcmFjdGVyIiwiY29udGFpbnNOb25BbHBoYW51bWVyaWNDaGFyYWN0ZXIiLCJhbGxvd2VkTm9uQWxwaGFudW1lcmljQ2hhcmFjdGVycyIsImZvcmNlVXBncmFkZU9uU2lnbmluIiwic2NoZW1hVmVyc2lvbiIsInBhc3N3b3JkIiwic3RhdHVzIiwiaXNWYWxpZCIsInBhc3N3b3JkUG9saWN5IiwidmFsaWRhdGVQYXNzd29yZExlbmd0aE9wdGlvbnMiLCJ2YWxpZGF0ZVBhc3N3b3JkQ2hhcmFjdGVyT3B0aW9ucyIsIm1lZXRzTWluUGFzc3dvcmRMZW5ndGgiLCJtZWV0c01heFBhc3N3b3JkTGVuZ3RoIiwidXBkYXRlUGFzc3dvcmRDaGFyYWN0ZXJPcHRpb25zU3RhdHVzZXMiLCJwYXNzd29yZENoYXIiLCJpIiwiY2hhckF0IiwiQXV0aEltcGwiLCJoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIiLCJhcHBDaGVja1NlcnZpY2VQcm92aWRlciIsImVtdWxhdG9yQ29uZmlnIiwib3BlcmF0aW9ucyIsImF1dGhTdGF0ZVN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkVG9rZW5TdWJzY3JpcHRpb24iLCJiZWZvcmVTdGF0ZVF1ZXVlIiwicmVkaXJlY3RVc2VyIiwiaXNQcm9hY3RpdmVSZWZyZXNoRW5hYmxlZCIsIkVYUEVDVEVEX1BBU1NXT1JEX1BPTElDWV9TQ0hFTUFfVkVSU0lPTiIsIl9pc0luaXRpYWxpemVkIiwiX2RlbGV0ZWQiLCJfaW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiX3BvcHVwUmVkaXJlY3RSZXNvbHZlciIsIl9hZ2VudFJlY2FwdGNoYUNvbmZpZyIsIl90ZW5hbnRSZWNhcHRjaGFDb25maWdzIiwiX3Byb2plY3RQYXNzd29yZFBvbGljeSIsIl90ZW5hbnRQYXNzd29yZFBvbGljaWVzIiwibGFzdE5vdGlmaWVkVWlkIiwic2V0dGluZ3MiLCJhcHBWZXJpZmljYXRpb25EaXNhYmxlZEZvclRlc3RpbmciLCJjbGllbnRWZXJzaW9uIiwic2RrQ2xpZW50VmVyc2lvbiIsIl9pbml0aWFsaXplV2l0aFBlcnNpc3RlbmNlIiwicG9wdXBSZWRpcmVjdFJlc29sdmVyIiwicGVyc2lzdGVuY2VNYW5hZ2VyIiwiX3Nob3VsZEluaXRQcm9hY3RpdmVseSIsIl9pbml0aWFsaXplIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyIiwiYXNzZXJ0ZWRQZXJzaXN0ZW5jZSIsIl9jdXJyZW50VXNlciIsIl91cGRhdGVDdXJyZW50VXNlciIsImluaXRpYWxpemVDdXJyZW50VXNlckZyb21JZFRva2VuIiwiZGlyZWN0bHlTZXRDdXJyZW50VXNlciIsImVyciIsImNvbnNvbGUiLCJhdXRoSWRUb2tlbiIsInRoZW4iLCJwcmV2aW91c2x5U3RvcmVkVXNlciIsImZ1dHVyZUN1cnJlbnRVc2VyIiwibmVlZHNUb2NoZWNrTWlkZGxld2FyZSIsImF1dGhEb21haW4iLCJnZXRPckluaXRSZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsInJlZGlyZWN0VXNlckV2ZW50SWQiLCJzdG9yZWRVc2VyRXZlbnRJZCIsInRyeVJlZGlyZWN0U2lnbkluIiwiX292ZXJyaWRlUmVkaXJlY3RSZXN1bHQiLCJyZWxvYWRBbmRTZXRDdXJyZW50VXNlck9yQ2xlYXIiLCJyZWRpcmVjdFJlc29sdmVyIiwiX2NvbXBsZXRlUmVkaXJlY3RGbiIsIl9zZXRSZWRpcmVjdFVzZXIiLCJfZGVsZXRlIiwidXNlckV4dGVybiIsInNraXBCZWZvcmVTdGF0ZUNhbGxiYWNrcyIsIm5vdGlmeUF1dGhMaXN0ZW5lcnMiLCJyZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsIl9nZXRSZWNhcHRjaGFDb25maWciLCJfZ2V0UGFzc3dvcmRQb2xpY3lJbnRlcm5hbCIsIl91cGRhdGVQYXNzd29yZFBvbGljeSIsIl9nZXRQZXJzaXN0ZW5jZSIsIl91cGRhdGVFcnJvck1hcCIsIm5leHRPck9ic2VydmVyIiwiY29tcGxldGVkIiwicmVnaXN0ZXJTdGF0ZUxpc3RlbmVyIiwiYXV0aFN0YXRlUmVhZHkiLCJ1bnN1YnNjcmliZSIsInRva2VuVHlwZSIsInJlZGlyZWN0TWFuYWdlciIsInJlc29sdmVyIiwiX3JlZGlyZWN0UGVyc2lzdGVuY2UiLCJfcmVkaXJlY3RVc2VyRm9ySWQiLCJpZCIsIm5leHQiLCJjdXJyZW50VWlkIiwic3Vic2NyaXB0aW9uIiwiY2IiLCJpc1Vuc3Vic2NyaWJlZCIsImFkZE9ic2VydmVyIiwiYWN0aW9uIiwiX2xvZ0ZyYW1ld29yayIsImZyYW1ld29yayIsInNvcnQiLCJfZ2V0RnJhbWV3b3JrcyIsIm9wdGlvbnMiLCJhcHBJZCIsImhlYXJ0YmVhdHNIZWFkZXIiLCJnZXRJbW1lZGlhdGUiLCJvcHRpb25hbCIsImdldEhlYXJ0YmVhdHNIZWFkZXIiLCJhcHBDaGVja1Rva2VuIiwiX2dldEFwcENoZWNrVG9rZW4iLCJhcHBDaGVja1Rva2VuUmVzdWx0IiwiX2Nhc3RBdXRoIiwib2JzZXJ2ZXIiLCJjcmVhdGVTdWJzY3JpYmUiLCJleHRlcm5hbEpTUHJvdmlkZXIiLCJsb2FkSlMiLCJyZWNhcHRjaGFWMlNjcmlwdCIsInJlY2FwdGNoYUVudGVycHJpc2VTY3JpcHQiLCJnYXBpU2NyaXB0IiwiX3NldEV4dGVybmFsSlNQcm92aWRlciIsIl9sb2FkSlMiLCJfcmVjYXB0Y2hhVjJTY3JpcHRVcmwiLCJfcmVjYXB0Y2hhRW50ZXJwcmlzZVNjcmlwdFVybCIsIl9nYXBpU2NyaXB0VXJsIiwiX2dlbmVyYXRlQ2FsbGJhY2tOYW1lIiwicHJlZml4IiwiZmxvb3IiLCJyYW5kb20iLCJSRUNBUFRDSEFfRU5URVJQUklTRV9WRVJJRklFUl9UWVBFIiwiRkFLRV9UT0tFTiIsIlJlY2FwdGNoYUVudGVycHJpc2VWZXJpZmllciIsImF1dGhFeHRlcm4iLCJ2ZXJpZnkiLCJyZXRyaWV2ZVNpdGVLZXkiLCJjbGllbnRUeXBlIiwidmVyc2lvbiIsImNhdGNoIiwicmV0cmlldmVSZWNhcHRjaGFUb2tlbiIsInJlYWR5IiwiZXhlY3V0ZSIsImluamVjdFJlY2FwdGNoYUZpZWxkcyIsImNhcHRjaGFSZXNwIiwidmVyaWZpZXIiLCJjYXB0Y2hhUmVzcG9uc2UiLCJuZXdSZXF1ZXN0IiwiaGFuZGxlUmVjYXB0Y2hhRmxvdyIsImF1dGhJbnN0YW5jZSIsImFjdGlvbk5hbWUiLCJhY3Rpb25NZXRob2QiLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYSIsImxvZyIsIl9pbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiYXV0aEludGVybmFsIiwiZGVwcyIsIl9nZXRQcm92aWRlciIsImlzSW5pdGlhbGl6ZWQiLCJhdXRoMiIsImluaXRpYWxPcHRpb25zIiwiZ2V0T3B0aW9ucyIsImRlZXBFcXVhbCIsIl9pbml0aWFsaXplQXV0aEluc3RhbmNlIiwiaGllcmFyY2h5IiwiZGlzYWJsZVdhcm5pbmdzIiwiZXh0cmFjdFByb3RvY29sIiwicG9ydCIsImV4dHJhY3RIb3N0QW5kUG9ydCIsInBvcnRTdHIiLCJmcmVlemUiLCJlbWl0RW11bGF0b3JXYXJuaW5nIiwicHJvdG9jb2xFbmQiLCJpbmRleE9mIiwic3Vic3RyIiwiYXV0aG9yaXR5IiwiZXhlYyIsImhvc3RBbmRQb3J0IiwicG9wIiwiYnJhY2tldGVkSVB2NiIsInBhcnNlUG9ydCIsImF0dGFjaEJhbm5lciIsImVsIiwiY3JlYXRlRWxlbWVudCIsInN0eSIsInN0eWxlIiwiaW5uZXJUZXh0IiwicG9zaXRpb24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImNvbG9yIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbiIsInpJbmRleCIsInRleHRBbGlnbiIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiaW5mbyIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2lnbkluTWV0aG9kIiwiX2dldElkVG9rZW5SZXNwb25zZSIsIl9hdXRoIiwiX2xpbmtUb0lkVG9rZW4iLCJfaWRUb2tlbiIsIl9nZXRSZWF1dGhlbnRpY2F0aW9uUmVzb2x2ZXIiLCJyZXNldFBhc3N3b3JkIiwidXBkYXRlRW1haWxQYXNzd29yZCIsImxpbmtFbWFpbFBhc3N3b3JkIiwiYXBwbHlBY3Rpb25Db2RlJDEiLCJzaWduSW5XaXRoUGFzc3dvcmQiLCJzZW5kT29iQ29kZSIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiQxIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCQxIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsJDEiLCJ2ZXJpZnlBbmRDaGFuZ2VFbWFpbCIsInNpZ25JbldpdGhFbWFpbExpbmskMSIsInNpZ25JbldpdGhFbWFpbExpbmtGb3JMaW5raW5nIiwiX2VtYWlsIiwiX3Bhc3N3b3JkIiwiX3RlbmFudElkIiwiX2Zyb21FbWFpbEFuZFBhc3N3b3JkIiwiX2Zyb21FbWFpbEFuZENvZGUiLCJvb2JDb2RlIiwib2JqIiwicmV0dXJuU2VjdXJlVG9rZW4iLCJzaWduSW5XaXRoSWRwIiwiSURQX1JFUVVFU1RfVVJJJDEiLCJwZW5kaW5nVG9rZW4iLCJfZnJvbVBhcmFtcyIsImNyZWQiLCJub25jZSIsIm9hdXRoVG9rZW4iLCJvYXV0aFRva2VuU2VjcmV0Iiwic2VjcmV0IiwiYnVpbGRSZXF1ZXN0IiwiYXV0b0NyZWF0ZSIsInJlcXVlc3RVcmkiLCJwb3N0Qm9keSIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGUiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIkMSIsImxpbmtXaXRoUGhvbmVOdW1iZXIkMSIsInRlbXBvcmFyeVByb29mIiwiVkVSSUZZX1BIT05FX05VTUJFUl9GT1JfRVhJU1RJTkdfRVJST1JfTUFQXyIsInZlcmlmeVBob25lTnVtYmVyRm9yRXhpc3RpbmciLCJhcGlSZXF1ZXN0Iiwib3BlcmF0aW9uIiwiX2Zyb21WZXJpZmljYXRpb24iLCJ2ZXJpZmljYXRpb25JZCIsInZlcmlmaWNhdGlvbkNvZGUiLCJfZnJvbVRva2VuUmVzcG9uc2UiLCJfbWFrZVZlcmlmaWNhdGlvblJlcXVlc3QiLCJzZXNzaW9uSW5mbyIsInBhcnNlTW9kZSIsIm1vZGUiLCJwYXJzZURlZXBMaW5rIiwibGluayIsInF1ZXJ5c3RyaW5nRGVjb2RlIiwiZXh0cmFjdFF1ZXJ5c3RyaW5nIiwiZG91YmxlRGVlcExpbmsiLCJpT1NEZWVwTGluayIsImlPU0RvdWJsZURlZXBMaW5rIiwiYWN0aW9uTGluayIsInNlYXJjaFBhcmFtcyIsImNvbnRpbnVlVXJsIiwicGFyc2VMaW5rIiwiUFJPVklERVJfSUQiLCJjcmVkZW50aWFsIiwiY3JlZGVudGlhbFdpdGhMaW5rIiwiZW1haWxMaW5rIiwiYWN0aW9uQ29kZVVybCIsIkVNQUlMX1BBU1NXT1JEX1NJR05fSU5fTUVUSE9EIiwiRU1BSUxfTElOS19TSUdOX0lOX01FVEhPRCIsIkZlZGVyYXRlZEF1dGhQcm92aWRlciIsImRlZmF1bHRMYW5ndWFnZUNvZGUiLCJjdXN0b21QYXJhbWV0ZXJzIiwic2V0RGVmYXVsdExhbmd1YWdlIiwic2V0Q3VzdG9tUGFyYW1ldGVycyIsImN1c3RvbU9BdXRoUGFyYW1ldGVycyIsImdldEN1c3RvbVBhcmFtZXRlcnMiLCJCYXNlT0F1dGhQcm92aWRlciIsInNjb3BlcyIsImFkZFNjb3BlIiwic2NvcGUiLCJnZXRTY29wZXMiLCJjcmVkZW50aWFsRnJvbUpTT04iLCJfY3JlZGVudGlhbCIsInJhd05vbmNlIiwiY3JlZGVudGlhbEZyb21SZXN1bHQiLCJ1c2VyQ3JlZGVudGlhbCIsIm9hdXRoQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJjcmVkZW50aWFsRnJvbUVycm9yIiwidG9rZW5SZXNwb25zZSIsIm9hdXRoSWRUb2tlbiIsIm9hdXRoQWNjZXNzVG9rZW4iLCJGQUNFQk9PS19TSUdOX0lOX01FVEhPRCIsImNyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiR09PR0xFX1NJR05fSU5fTUVUSE9EIiwiR0lUSFVCX1NJR05fSU5fTUVUSE9EIiwiSURQX1JFUVVFU1RfVVJJIiwiU0FNTEF1dGhDcmVkZW50aWFsIiwiX2NyZWF0ZSIsIlNBTUxfUFJPVklERVJfUFJFRklYIiwic2FtbENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiVFdJVFRFUl9TSUdOX0lOX01FVEhPRCIsInNpZ25VcCIsIlVzZXJDcmVkZW50aWFsSW1wbCIsIm9wZXJhdGlvblR5cGUiLCJwcm92aWRlcklkRm9yUmVzcG9uc2UiLCJ1c2VyQ3JlZCIsIl9mb3JPcGVyYXRpb24iLCJNdWx0aUZhY3RvckVycm9yIiwic2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJfZnJvbUVycm9yQW5kT3BlcmF0aW9uIiwiX3Byb2Nlc3NDcmVkZW50aWFsU2F2aW5nTWZhQ29udGV4dElmTmVjZXNzYXJ5IiwiaWRUb2tlblByb3ZpZGVyIiwicHJvdmlkZXJEYXRhQXNOYW1lcyIsIlNldCIsInBpZCIsIl9hc3NlcnRMaW5rZWRTdGF0dXMiLCJkZWxldGVQcm92aWRlciIsInByb3ZpZGVyc0xlZnQiLCJwZCIsImhhcyIsIl9saW5rJDEiLCJleHBlY3RlZCIsInByb3ZpZGVySWRzIiwiX3JlYXV0aGVudGljYXRlIiwicGFyc2VkIiwic3ViIiwiX3NpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuJDEiLCJjdXN0b21Ub2tlbiIsIk11bHRpRmFjdG9ySW5mb0ltcGwiLCJmYWN0b3JJZCIsIm1mYUVucm9sbG1lbnRJZCIsImVucm9sbG1lbnRUaW1lIiwiZW5yb2xsZWRBdCIsIl9mcm9tU2VydmVyUmVzcG9uc2UiLCJlbnJvbGxtZW50IiwiUGhvbmVNdWx0aUZhY3RvckluZm9JbXBsIiwiVG90cE11bHRpRmFjdG9ySW5mb0ltcGwiLCJwaG9uZUluZm8iLCJfc2V0QWN0aW9uQ29kZVNldHRpbmdzT25SZXF1ZXN0IiwiYWN0aW9uQ29kZVNldHRpbmdzIiwiZHluYW1pY0xpbmtEb21haW4iLCJjYW5IYW5kbGVDb2RlSW5BcHAiLCJoYW5kbGVDb2RlSW5BcHAiLCJpT1MiLCJidW5kbGVJZCIsImlPU0J1bmRsZUlkIiwiYW5kcm9pZCIsInBhY2thZ2VOYW1lIiwiYW5kcm9pZEluc3RhbGxBcHAiLCJpbnN0YWxsQXBwIiwiYW5kcm9pZE1pbmltdW1WZXJzaW9uQ29kZSIsIm1pbmltdW1WZXJzaW9uIiwiYW5kcm9pZFBhY2thZ2VOYW1lIiwicmVjYWNoZVBhc3N3b3JkUG9saWN5IiwicmVxdWVzdFR5cGUiLCJuZXdQYXNzd29yZCIsImF1dGhNb2R1bGFyIiwibmV3RW1haWwiLCJtZmFJbmZvIiwibXVsdGlGYWN0b3JJbmZvIiwiZGF0YSIsInByZXZpb3VzRW1haWwiLCJzaWduVXBSZXNwb25zZSIsInNldEFjdGlvbkNvZGVTZXR0aW5ncyIsInJlcXVlc3QyIiwiYWN0aW9uQ29kZVNldHRpbmdzMiIsImNyZWF0ZUF1dGhVcmkiLCJjb250aW51ZVVyaSIsImlkZW50aWZpZXIiLCJzaWduaW5NZXRob2RzIiwidXBkYXRlUHJvZmlsZSQxIiwicHJvZmlsZVJlcXVlc3QiLCJwYXNzd29yZFByb3ZpZGVyIiwiZmluZCIsInVwZGF0ZUVtYWlsT3JQYXNzd29yZCIsInByb2ZpbGUiLCJyYXdVc2VySW5mbyIsImlzTmV3VXNlciIsImtpbmQiLCJmaWx0ZXJlZFByb3ZpZGVySWQiLCJHZW5lcmljQWRkaXRpb25hbFVzZXJJbmZvIiwiRmFjZWJvb2tBZGRpdGlvbmFsVXNlckluZm8iLCJHaXRodWJBZGRpdGlvbmFsVXNlckluZm8iLCJHb29nbGVBZGRpdGlvbmFsVXNlckluZm8iLCJUd2l0dGVyQWRkaXRpb25hbFVzZXJJbmZvIiwic2NyZWVuTmFtZSIsIkZlZGVyYXRlZEFkZGl0aW9uYWxVc2VySW5mb1dpdGhVc2VybmFtZSIsInVzZXJuYW1lIiwibG9naW4iLCJNdWx0aUZhY3RvclNlc3Npb25JbXBsIiwiX2Zyb21JZHRva2VuIiwiX2Zyb21NZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm1mYVBlbmRpbmdDcmVkZW50aWFsIiwibXVsdGlGYWN0b3JTZXNzaW9uIiwicGVuZGluZ0NyZWRlbnRpYWwiLCJNdWx0aUZhY3RvclJlc29sdmVySW1wbCIsInNlc3Npb24iLCJoaW50cyIsInNpZ25JblJlc29sdmVyIiwiX2Zyb21FcnJvciIsIm1mYVJlc3BvbnNlIiwiX3Byb2Nlc3MiLCJyZXNvbHZlU2lnbkluIiwiYXNzZXJ0aW9uRXh0ZXJuIiwiZXJyb3JJbnRlcm5hbCIsInN0YXJ0RW5yb2xsUGhvbmVNZmEiLCJmaW5hbGl6ZUVucm9sbFBob25lTWZhIiwic3RhcnRFbnJvbGxUb3RwTWZhIiwiZmluYWxpemVFbnJvbGxUb3RwTWZhIiwid2l0aGRyYXdNZmEiLCJNdWx0aUZhY3RvclVzZXJJbXBsIiwiZW5yb2xsZWRGYWN0b3JzIiwiX2Zyb21Vc2VyIiwiZ2V0U2Vzc2lvbiIsImVucm9sbCIsImZpbmFsaXplTWZhUmVzcG9uc2UiLCJ1bmVucm9sbCIsImluZm9PclVpZCIsIm11bHRpRmFjdG9yVXNlckNhY2hlIiwiV2Vha01hcCIsInVzZXJNb2R1bGFyIiwiU1RPUkFHRV9BVkFJTEFCTEVfS0VZIiwiQnJvd3NlclBlcnNpc3RlbmNlQ2xhc3MiLCJzdG9yYWdlUmV0cmlldmVyIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwiX2lmcmFtZUNhbm5vdFN5bmNXZWJTdG9yYWdlIiwiX1BPTExJTkdfSU5URVJWQUxfTVMkMSIsIklFMTBfTE9DQUxfU1RPUkFHRV9TWU5DX0RFTEFZIiwiQnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJldmVudCIsInBvbGwiLCJvblN0b3JhZ2VFdmVudCIsImxpc3RlbmVycyIsImxvY2FsQ2FjaGUiLCJwb2xsVGltZXIiLCJzYWZhcmlMb2NhbFN0b3JhZ2VOb3RTeW5jZWQiLCJmYWxsYmFja1RvUG9sbGluZyIsImZvckFsbENoYW5nZWRLZXlzIiwia2V5cyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJrZXkyIiwiX29sZFZhbHVlIiwibm90aWZ5TGlzdGVuZXJzIiwiZGV0YWNoTGlzdGVuZXIiLCJzdG9wUG9sbGluZyIsInN0b3JlZFZhbHVlMiIsInRyaWdnZXJMaXN0ZW5lcnMiLCJzdG9yZWRWYWx1ZSIsImxpc3RlbmVyIiwiZnJvbSIsInN0YXJ0UG9sbGluZyIsInNldEludGVydmFsIiwiU3RvcmFnZUV2ZW50IiwiY2xlYXJJbnRlcnZhbCIsImF0dGFjaExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpemUiLCJCcm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwic2Vzc2lvblN0b3JhZ2UiLCJfYWxsU2V0dGxlZCIsInByb21pc2VzIiwiZnVsZmlsbGVkIiwicmVhc29uIiwiUmVjZWl2ZXIiLCJldmVudFRhcmdldCIsImhhbmRsZXJzTWFwIiwiaGFuZGxlRXZlbnQiLCJleGlzdGluZ0luc3RhbmNlIiwicmVjZWl2ZXJzIiwicmVjZWl2ZXIiLCJpc0xpc3RlbmluZ3RvIiwibmV3SW5zdGFuY2UiLCJtZXNzYWdlRXZlbnQiLCJldmVudElkIiwiZXZlbnRUeXBlIiwiaGFuZGxlcnMiLCJwb3J0cyIsInBvc3RNZXNzYWdlIiwiaGFuZGxlciIsIm9yaWdpbiIsIl9zdWJzY3JpYmUiLCJldmVudEhhbmRsZXIiLCJfdW5zdWJzY3JpYmUiLCJfZ2VuZXJhdGVFdmVudElkIiwiZGlnaXRzIiwiU2VuZGVyIiwidGFyZ2V0IiwicmVtb3ZlTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25NZXNzYWdlIiwiY2xvc2UiLCJfc2VuZCIsInRpbWVvdXQiLCJNZXNzYWdlQ2hhbm5lbCIsImNvbXBsZXRpb25UaW1lciIsInN0YXJ0IiwiYWNrVGltZXIiLCJwb3J0MiIsImZpbmFsbHkiLCJfd2luZG93IiwiX3NldFdpbmRvd0xvY2F0aW9uIiwiX2lzV29ya2VyIiwiX2dldEFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0cmF0aW9uIiwiYWN0aXZlIiwiX2dldFNlcnZpY2VXb3JrZXJDb250cm9sbGVyIiwiY29udHJvbGxlciIsIl9nZXRXb3JrZXJHbG9iYWxTY29wZSIsIkRCX05BTUUiLCJEQl9WRVJTSU9OIiwiREJfT0JKRUNUU1RPUkVfTkFNRSIsIkRCX0RBVEFfS0VZUEFUSCIsIkRCUHJvbWlzZSIsInRvUHJvbWlzZSIsImdldE9iamVjdFN0b3JlIiwiZGIiLCJpc1JlYWRXcml0ZSIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJfZGVsZXRlRGF0YWJhc2UiLCJpbmRleGVkREIiLCJkZWxldGVEYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJvcGVuIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwiX3B1dE9iamVjdCIsInB1dCIsImdldE9iamVjdCIsIl9kZWxldGVPYmplY3QiLCJfUE9MTElOR19JTlRFUlZBTF9NUyIsIl9UUkFOU0FDVElPTl9SRVRSWV9DT1VOVCIsIkluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJwZW5kaW5nV3JpdGVzIiwic2VuZGVyIiwic2VydmljZVdvcmtlclJlY2VpdmVyQXZhaWxhYmxlIiwiYWN0aXZlU2VydmljZVdvcmtlciIsIl93b3JrZXJJbml0aWFsaXphdGlvblByb21pc2UiLCJpbml0aWFsaXplU2VydmljZVdvcmtlck1lc3NhZ2luZyIsIl9vcGVuRGIiLCJfd2l0aFJldHJpZXMiLCJvcCIsIm51bUF0dGVtcHRzIiwiaW5pdGlhbGl6ZVJlY2VpdmVyIiwiaW5pdGlhbGl6ZVNlbmRlciIsIl9vcmlnaW4iLCJfcG9sbCIsImtleVByb2Nlc3NlZCIsIl9kYXRhIiwicmVzdWx0cyIsIm5vdGlmeVNlcnZpY2VXb3JrZXIiLCJfd2l0aFBlbmRpbmdXcml0ZSIsIndyaXRlIiwiZ2V0QWxsUmVxdWVzdCIsImdldEFsbCIsImtleXNJblJlc3VsdCIsImZiYXNlX2tleSIsImxvY2FsS2V5Iiwic3RhcnRTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblRvdHBNZmEiLCJfU09MVkVfVElNRV9NUyIsIl9FWFBJUkFUSU9OX1RJTUVfTVMiLCJfV0lER0VUX0lEX1NUQVJUIiwiTW9ja1JlQ2FwdGNoYSIsImNvdW50ZXIiLCJfd2lkZ2V0cyIsInJlbmRlciIsImNvbnRhaW5lciIsInBhcmFtZXRlcnMiLCJNb2NrV2lkZ2V0IiwicmVzZXQiLCJvcHRXaWRnZXRJZCIsImNvbnRhaW5lck9ySWQiLCJkZWxldGVkIiwicmVzcG9uc2VUb2tlbiIsImNsaWNrSGFuZGxlciIsImdldEVsZW1lbnRCeUlkIiwiaXNWaXNpYmxlIiwiY2hlY2tJZkRlbGV0ZWQiLCJnZW5lcmF0ZVJhbmRvbUFscGhhTnVtZXJpY1N0cmluZyIsImV4cGlyZWRDYWxsYmFjayIsImxlbiIsImNoYXJzIiwiYWxsb3dlZENoYXJzIiwiX0pTTE9BRF9DQUxMQkFDSyIsIk5FVFdPUktfVElNRU9VVF9ERUxBWSIsIlJlQ2FwdGNoYUxvYWRlckltcGwiLCJob3N0TGFuZ3VhZ2UiLCJsaWJyYXJ5U2VwYXJhdGVseUxvYWRlZCIsImxvYWQiLCJobCIsImlzSG9zdExhbmd1YWdlVmFsaWQiLCJzaG91bGRSZXNvbHZlSW1tZWRpYXRlbHkiLCJyZWNhcHRjaGEiLCJ3aWRnZXRJZCIsIm9ubG9hZCIsImNsZWFyZWRPbmVJbnN0YW5jZSIsIk1vY2tSZUNhcHRjaGFMb2FkZXJJbXBsIiwiUkVDQVBUQ0hBX1ZFUklGSUVSX1RZUEUiLCJERUZBVUxUX1BBUkFNUyIsInRoZW1lIiwiZGVzdHJveWVkIiwidG9rZW5DaGFuZ2VMaXN0ZW5lcnMiLCJyZW5kZXJQcm9taXNlIiwiaXNJbnZpc2libGUiLCJtYWtlVG9rZW5DYWxsYmFjayIsIl9yZWNhcHRjaGFMb2FkZXIiLCJ2YWxpZGF0ZVN0YXJ0aW5nU3RhdGUiLCJhc3NlcnROb3REZXN0cm95ZWQiLCJnZXRBc3NlcnRlZFJlY2FwdGNoYSIsInRva2VuQ2hhbmdlIiwibWFrZVJlbmRlclByb21pc2UiLCJfcmVzZXQiLCJjbGVhciIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZUNoaWxkIiwic2l0ZWtleSIsImhhc0NoaWxkTm9kZXMiLCJleGlzdGluZyIsImdsb2JhbEZ1bmMiLCJpbml0IiwiZ3VhcmFudGVlZEVtcHR5IiwiZG9tUmVhZHkiLCJDb25maXJtYXRpb25SZXN1bHRJbXBsIiwib25Db25maXJtYXRpb24iLCJjb25maXJtIiwiYXV0aENyZWRlbnRpYWwiLCJhcHBWZXJpZmllciIsIl92ZXJpZnlQaG9uZU51bWJlciIsInJlY2FwdGNoYVRva2VuIiwicGhvbmVJbmZvT3B0aW9ucyIsInBob25lRW5yb2xsbWVudEluZm8iLCJwaG9uZVNlc3Npb25JbmZvIiwibXVsdGlGYWN0b3JIaW50IiwibXVsdGlGYWN0b3JVaWQiLCJwaG9uZVNpZ25JbkluZm8iLCJwaG9uZVJlc3BvbnNlSW5mbyIsInZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVPcHRpb25zIiwiYXBwbGljYXRpb25WZXJpZmllciIsIlBIT05FX1NJR05fSU5fTUVUSE9EIiwiX3dpdGhEZWZhdWx0UmVzb2x2ZXIiLCJyZXNvbHZlck92ZXJyaWRlIiwiSWRwQ3JlZGVudGlhbCIsIl9idWlsZElkcFJlcXVlc3QiLCJzZXNzaW9uSWQiLCJyZXR1cm5JZHBDcmVkZW50aWFsIiwiX3NpZ25JbiIsIl9yZWF1dGgiLCJfbGluayIsIkFic3RyYWN0UG9wdXBSZWRpcmVjdE9wZXJhdGlvbiIsInBlbmRpbmdQcm9taXNlIiwiZXZlbnRNYW5hZ2VyIiwib25FeGVjdXRpb24iLCJyZWdpc3RlckNvbnN1bWVyIiwib25BdXRoRXZlbnQiLCJ1cmxSZXNwb25zZSIsImdldElkcFRhc2siLCJvbkVycm9yIiwidW5yZWdpc3RlckFuZENsZWFuVXAiLCJ1bnJlZ2lzdGVyQ29uc3VtZXIiLCJjbGVhblVwIiwiX1BPTExfV0lORE9XX0NMT1NFX1RJTUVPVVQiLCJyZXNvbHZlckludGVybmFsIiwiUG9wdXBPcGVyYXRpb24iLCJleGVjdXRlTm90TnVsbCIsImF1dGhXaW5kb3ciLCJwb2xsSWQiLCJjdXJyZW50UG9wdXBBY3Rpb24iLCJjYW5jZWwiLCJfb3BlblBvcHVwIiwiYXNzb2NpYXRlZEV2ZW50IiwiX29yaWdpblZhbGlkYXRpb24iLCJfaXNJZnJhbWVXZWJTdG9yYWdlU3VwcG9ydGVkIiwiaXNTdXBwb3J0ZWQiLCJwb2xsVXNlckNhbmNlbGxhdGlvbiIsImNsb3NlZCIsIlBFTkRJTkdfUkVESVJFQ1RfS0VZIiwicmVkaXJlY3RPdXRjb21lTWFwIiwiUmVkaXJlY3RBY3Rpb24iLCJyZWFkeU91dGNvbWUiLCJoYXNQZW5kaW5nUmVkaXJlY3QiLCJfZ2V0QW5kQ2xlYXJQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJwZW5kaW5nUmVkaXJlY3RLZXkiLCJyZXNvbHZlclBlcnNpc3RlbmNlIiwiX3NldFBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsIl9jbGVhclJlZGlyZWN0T3V0Y29tZXMiLCJfc2lnbkluV2l0aFJlZGlyZWN0IiwiX29wZW5SZWRpcmVjdCIsIl9yZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInByZXBhcmVVc2VyRm9yUmVkaXJlY3QiLCJfbGlua1dpdGhSZWRpcmVjdCIsIl9nZXRSZWRpcmVjdFJlc3VsdCIsInJlc29sdmVyRXh0ZXJuIiwiRVZFTlRfRFVQTElDQVRJT05fQ0FDSEVfRFVSQVRJT05fTVMiLCJBdXRoRXZlbnRNYW5hZ2VyIiwiY2FjaGVkRXZlbnRVaWRzIiwiY29uc3VtZXJzIiwicXVldWVkUmVkaXJlY3RFdmVudCIsImhhc0hhbmRsZWRQb3RlbnRpYWxSZWRpcmVjdCIsImxhc3RQcm9jZXNzZWRFdmVudFRpbWUiLCJhdXRoRXZlbnRDb25zdW1lciIsImlzRXZlbnRGb3JDb25zdW1lciIsInNlbmRUb0NvbnN1bWVyIiwic2F2ZUV2ZW50VG9DYWNoZSIsIm9uRXZlbnQiLCJoYXNFdmVudEJlZW5IYW5kbGVkIiwiaGFuZGxlZCIsImNvbnN1bWVyIiwiaXNSZWRpcmVjdEV2ZW50IiwiaXNOdWxsUmVkaXJlY3RFdmVudCIsImV2ZW50SWRNYXRjaGVzIiwiZXZlbnRVaWQiLCJ2IiwiX2dldFByb2plY3RDb25maWciLCJJUF9BRERSRVNTX1JFR0VYIiwiSFRUUF9SRUdFWCIsIl92YWxpZGF0ZU9yaWdpbiIsImF1dGhvcml6ZWREb21haW5zIiwiZG9tYWluIiwibWF0Y2hEb21haW4iLCJjdXJyZW50VXJsIiwiaG9zdG5hbWUiLCJVUkwiLCJjZVVybCIsImVzY2FwZWREb21haW5QYXR0ZXJuIiwiUmVnRXhwIiwiTkVUV09SS19USU1FT1VUIiwicmVzZXRVbmxvYWRlZEdhcGlNb2R1bGVzIiwiYmVhY29uIiwiX19fanNsIiwiSCIsImhpbnQiLCJyIiwiTCIsIkNQIiwibG9hZEdhcGkiLCJsb2FkR2FwaUlmcmFtZSIsImdhcGkiLCJpZnJhbWVzIiwiZ2V0Q29udGV4dCIsIm9udGltZW91dCIsIklmcmFtZSIsImNiTmFtZSIsImNhY2hlZEdBcGlMb2FkZXIiLCJfbG9hZEdhcGkiLCJQSU5HX1RJTUVPVVQiLCJJRlJBTUVfUEFUSCIsIkVNVUxBVEVEX0lGUkFNRV9QQVRIIiwiSUZSQU1FX0FUVFJJQlVURVMiLCJoZWlnaHQiLCJ0YWJpbmRleCIsIkVJRF9GUk9NX0FQSUhPU1QiLCJnZXRJZnJhbWVVcmwiLCJlaWQiLCJmdyIsIl9vcGVuSWZyYW1lIiwiY29udGV4dCIsImdhcGkyIiwid2hlcmUiLCJtZXNzYWdlSGFuZGxlcnNGaWx0ZXIiLCJDUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVIiLCJhdHRyaWJ1dGVzIiwiZG9udGNsZWFyIiwiaWZyYW1lIiwicmVzdHlsZSIsInNldEhpZGVPbkxlYXZlIiwibmV0d29ya0Vycm9yIiwibmV0d29ya0Vycm9yVGltZXIiLCJjbGVhclRpbWVyQW5kUmVzb2x2ZSIsInBpbmciLCJCQVNFX1BPUFVQX09QVElPTlMiLCJyZXNpemFibGUiLCJzdGF0dXNiYXIiLCJ0b29sYmFyIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiVEFSR0VUX0JMQU5LIiwiRklSRUZPWF9FTVBUWV9VUkwiLCJBdXRoUG9wdXAiLCJ3aW5kb3cyIiwiX29wZW4iLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImF2YWlsV2lkdGgiLCJzY3JvbGxiYXJzIiwib3B0aW9uc1N0cmluZyIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2N1bSIsIm9wZW5Bc05ld1dpbmRvd0lPUyIsIm5ld1dpbiIsImZvY3VzIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIldJREdFVF9QQVRIIiwiRU1VTEFUT1JfV0lER0VUX1BBVEgiLCJGSVJFQkFTRV9BUFBfQ0hFQ0tfRlJBR01FTlRfSUQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfZ2V0UmVkaXJlY3RVcmwiLCJhdXRoVHlwZSIsInJlZGlyZWN0VXJsIiwiYWRkaXRpb25hbFBhcmFtcyIsImlzRW1wdHkiLCJ0aWQiLCJwYXJhbXNEaWN0IiwiYXBwQ2hlY2tUb2tlbkZyYWdtZW50IiwiZ2V0SGFuZGxlckJhc2UiLCJXRUJfU1RPUkFHRV9TVVBQT1JUX0tFWSIsIkJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJldmVudE1hbmFnZXJzIiwib3JpZ2luVmFsaWRhdGlvblByb21pc2VzIiwicHJvbWlzZTIiLCJpbml0QW5kR2V0TWFuYWdlciIsInJlZ2lzdGVyIiwiaWZyYW1lRXZlbnQiLCJhdXRoRXZlbnQiLCJzZW5kIiwiTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2ZpbmFsaXplRW5yb2xsIiwiX2ZpbmFsaXplU2lnbkluIiwiUGhvbmVNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbUNyZWRlbnRpYWwiLCJwaG9uZVZlcmlmaWNhdGlvbkluZm8iLCJGQUNUT1JfSUQiLCJhc3NlcnRpb25Gb3JFbnJvbGxtZW50Iiwib25lVGltZVBhc3N3b3JkIiwiVG90cE11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tU2VjcmV0IiwiYXNzZXJ0aW9uRm9yU2lnbkluIiwiZW5yb2xsbWVudElkIiwiX2Zyb21FbnJvbGxtZW50SWQiLCJnZW5lcmF0ZVNlY3JldCIsIm1mYVNlc3Npb24iLCJ0b3RwRW5yb2xsbWVudEluZm8iLCJfZnJvbVN0YXJ0VG90cE1mYUVucm9sbG1lbnRSZXNwb25zZSIsIm90cCIsInRvdHBWZXJpZmljYXRpb25JbmZvIiwiX21ha2VUb3RwVmVyaWZpY2F0aW9uSW5mbyIsInNlY3JldEtleSIsImhhc2hpbmdBbGdvcml0aG0iLCJjb2RlTGVuZ3RoIiwiY29kZUludGVydmFsU2Vjb25kcyIsImVucm9sbG1lbnRDb21wbGV0aW9uRGVhZGxpbmUiLCJ0b3RwU2Vzc2lvbkluZm8iLCJzaGFyZWRTZWNyZXRLZXkiLCJ2ZXJpZmljYXRpb25Db2RlTGVuZ3RoIiwicGVyaW9kU2VjIiwiZmluYWxpemVFbnJvbGxtZW50VGltZSIsImdlbmVyYXRlUXJDb2RlVXJsIiwiYWNjb3VudE5hbWUiLCJpc3N1ZXIiLCJ1c2VEZWZhdWx0cyIsIl9pc0VtcHR5U3RyaW5nIiwiaW5wdXQiLCJBdXRoSW50ZXJvcCIsImludGVybmFsTGlzdGVuZXJzIiwiZ2V0VWlkIiwiYXNzZXJ0QXV0aENvbmZpZ3VyZWQiLCJhZGRBdXRoVG9rZW5MaXN0ZW5lciIsInVwZGF0ZVByb2FjdGl2ZVJlZnJlc2giLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsImdldFZlcnNpb25Gb3JQbGF0Zm9ybSIsInJlZ2lzdGVyQXV0aCIsIl9yZWdpc3RlckNvbXBvbmVudCIsImltcG9ydF9jb21wb25lbnQiLCJDb21wb25lbnQiLCJnZXRQcm92aWRlciIsInNldEluc3RhbnRpYXRpb25Nb2RlIiwic2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2siLCJfaW5zdGFuY2VJZGVudGlmaWVyIiwiX2luc3RhbmNlIiwiYXV0aEludGVybmFsUHJvdmlkZXIiLCJyZWdpc3RlclZlcnNpb24iLCJERUZBVUxUX0lEX1RPS0VOX01BWF9BR0UiLCJhdXRoSWRUb2tlbk1heEFnZSIsImdldEV4cGVyaW1lbnRhbFNldHRpbmciLCJsYXN0UG9zdGVkSWRUb2tlbiIsIm1pbnRDb29raWVGYWN0b3J5IiwiaWRUb2tlblJlc3VsdCIsImlkVG9rZW5BZ2UiLCJnZXRBcHAiLCJhdXRoVG9rZW5TeW5jUGF0aCIsImlzU2VjdXJlQ29udGV4dCIsImF1dGhUb2tlblN5bmNVcmwiLCJtaW50Q29va2llIiwiYXV0aEVtdWxhdG9ySG9zdCIsImdldERlZmF1bHRFbXVsYXRvckhvc3QiLCJnZXRTY3JpcHRQYXJlbnRFbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJvbmVycm9yIiwiY2hhcnNldCIsImltcG9ydF9hcHAyIiwicmVxdWlyZSIsImltcG9ydF91dGlsMiIsImltcG9ydF9sb2dnZXIyIiwiaW1wb3J0X3RzbGliMiIsImltcG9ydF9jb21wb25lbnQyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFDLDBDQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFD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