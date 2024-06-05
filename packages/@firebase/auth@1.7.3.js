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

// .beyond/uimport/@firebase/auth.1.7.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXV0aC4xLjcuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbW9kZWwvZW51bV9tYXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Fzc2VydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvY2F0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbmF2aWdhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZGVsYXkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2ZldGNoX3Byb3ZpZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9hY2NvdW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2lkX3Rva2VuX3Jlc3VsdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2ludmFsaWRhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Byb2FjdGl2ZV9yZWZyZXNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9tZXRhZGF0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlbG9hZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdG9rZW5fbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2luc3RhbnRpYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbl9tZW1vcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvcGVyc2lzdGVuY2VfdXNlcl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcGFzc3dvcmRfcG9saWN5L2dldF9wYXNzd29yZF9wb2xpY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9wYXNzd29yZF9wb2xpY3lfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9sb2FkX2pzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfZW50ZXJwcmlzZV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2luaXRpYWxpemUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9hdXRoX2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Ntcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hY3Rpb25fY29kZV91cmwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mZWRlcmF0ZWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mYWNlYm9vay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ29vZ2xlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9naXRodWIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvdHdpdHRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3NpZ25fdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX2NyZWRlbnRpYWxfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fub255bW91cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9lcnJvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Byb3ZpZGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2xpbmtfdW5saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVhdXRoZW50aWNhdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hY3Rpb25fY29kZV9zZXR0aW5ncy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jcmVhdGVfYXV0aF91cmkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9wcm9maWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWNjb3VudF9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWRkaXRpb25hbF91c2VyX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfc2Vzc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfdXNlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2xvY2FsX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2Uvc2Vzc2lvbl9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3Byb21pc2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcmVjZWl2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9ldmVudF9pZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9zZW5kZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvYXV0aF93aW5kb3cudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC93b3JrZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvaW5kZXhlZF9kYi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX21vY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9sb2FkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3Byb3ZpZGVycy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWJzdHJhY3RfcG9wdXBfcmVkaXJlY3Rfb3BlcmF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9ldmVudF9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcHJvamVjdF9jb25maWcvZ2V0X3Byb2plY3RfY29uZmlnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmFsaWRhdGVfb3JpZ2luLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9nYXBpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9pZnJhbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2hhbmRsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcG9wdXBfcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfYXNzZXJ0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21mYS9hc3NlcnRpb25zL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvYXNzZXJ0aW9ucy90b3RwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZmlyZWJhc2VfaW50ZXJuYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9yZWdpc3Rlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9kaXN0L2VzbTIwMTcvaW5kZXguanMiXSwibmFtZXMiOlsiYXV0aF8xXzdfM19leHBvcnRzIiwiX19leHBvcnQiLCJBY3Rpb25Db2RlT3BlcmF0aW9uIiwiQWN0aW9uQ29kZVVSTCIsIkF1dGhDcmVkZW50aWFsIiwiQXV0aEVycm9yQ29kZXMiLCJBVVRIX0VSUk9SX0NPREVTX01BUF9ET19OT1RfVVNFX0lOVEVSTkFMTFkiLCJFbWFpbEF1dGhDcmVkZW50aWFsIiwiRW1haWxBdXRoUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsIkZhY3RvcklkIiwiR2l0aHViQXV0aFByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiT0F1dGhDcmVkZW50aWFsIiwiT0F1dGhQcm92aWRlciIsIk9wZXJhdGlvblR5cGUiLCJQaG9uZUF1dGhDcmVkZW50aWFsIiwiUGhvbmVBdXRoUHJvdmlkZXIiLCJQaG9uZU11bHRpRmFjdG9yR2VuZXJhdG9yIiwiUHJvdmlkZXJJZCIsIlJlY2FwdGNoYVZlcmlmaWVyIiwiU0FNTEF1dGhQcm92aWRlciIsIlNpZ25Jbk1ldGhvZCIsIlRvdHBNdWx0aUZhY3RvckdlbmVyYXRvciIsIlRvdHBTZWNyZXQiLCJUd2l0dGVyQXV0aFByb3ZpZGVyIiwiYXBwbHlBY3Rpb25Db2RlIiwiYmVmb3JlQXV0aFN0YXRlQ2hhbmdlZCIsImJyb3dzZXJMb2NhbFBlcnNpc3RlbmNlIiwiYnJvd3NlclBvcHVwUmVkaXJlY3RSZXNvbHZlciIsImJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UiLCJjaGVja0FjdGlvbkNvZGUiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImNvbm5lY3RBdXRoRW11bGF0b3IiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkZWJ1Z0Vycm9yTWFwIiwiZGVsZXRlVXNlciIsImZldGNoU2lnbkluTWV0aG9kc0ZvckVtYWlsIiwiZ2V0QWRkaXRpb25hbFVzZXJJbmZvIiwiZ2V0QXV0aCIsImdldElkVG9rZW4iLCJnZXRJZFRva2VuUmVzdWx0IiwiZ2V0TXVsdGlGYWN0b3JSZXNvbHZlciIsImdldFJlZGlyZWN0UmVzdWx0IiwiaW5NZW1vcnlQZXJzaXN0ZW5jZSIsImluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJpbml0aWFsaXplQXV0aCIsImluaXRpYWxpemVSZWNhcHRjaGFDb25maWciLCJpc1NpZ25JbldpdGhFbWFpbExpbmsiLCJsaW5rV2l0aENyZWRlbnRpYWwiLCJsaW5rV2l0aFBob25lTnVtYmVyIiwibGlua1dpdGhQb3B1cCIsImxpbmtXaXRoUmVkaXJlY3QiLCJtdWx0aUZhY3RvciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIm9uSWRUb2tlbkNoYW5nZWQiLCJwYXJzZUFjdGlvbkNvZGVVUkwiLCJwcm9kRXJyb3JNYXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsIiwicmVhdXRoZW50aWNhdGVXaXRoUGhvbmVOdW1iZXIiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQb3B1cCIsInJlYXV0aGVudGljYXRlV2l0aFJlZGlyZWN0IiwicmVsb2FkIiwicmV2b2tlQWNjZXNzVG9rZW4iLCJzZW5kRW1haWxWZXJpZmljYXRpb24iLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsIiwic2V0UGVyc2lzdGVuY2UiLCJzaWduSW5Bbm9ueW1vdXNseSIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxMaW5rIiwic2lnbkluV2l0aFBob25lTnVtYmVyIiwic2lnbkluV2l0aFBvcHVwIiwic2lnbkluV2l0aFJlZGlyZWN0Iiwic2lnbk91dCIsInVubGluayIsInVwZGF0ZUN1cnJlbnRVc2VyIiwidXBkYXRlRW1haWwiLCJ1cGRhdGVQYXNzd29yZCIsInVwZGF0ZVBob25lTnVtYmVyIiwidXBkYXRlUHJvZmlsZSIsInVzZURldmljZUxhbmd1YWdlIiwidmFsaWRhdGVQYXNzd29yZCIsInZlcmlmeUJlZm9yZVVwZGF0ZUVtYWlsIiwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUEhPTkUiLCJUT1RQIiwiRkFDRUJPT0siLCJHSVRIVUIiLCJHT09HTEUiLCJQQVNTV09SRCIsIlRXSVRURVIiLCJFTUFJTF9MSU5LIiwiRU1BSUxfUEFTU1dPUkQiLCJMSU5LIiwiUkVBVVRIRU5USUNBVEUiLCJTSUdOX0lOIiwiRU1BSUxfU0lHTklOIiwiUEFTU1dPUkRfUkVTRVQiLCJSRUNPVkVSX0VNQUlMIiwiUkVWRVJUX1NFQ09ORF9GQUNUT1JfQURESVRJT04iLCJWRVJJRllfQU5EX0NIQU5HRV9FTUFJTCIsIlZFUklGWV9FTUFJTCIsIl9kZWJ1Z0Vycm9yTWFwIiwiX3Byb2RFcnJvck1hcCIsIl9ERUZBVUxUX0FVVEhfRVJST1JfRkFDVE9SWSIsImltcG9ydF91dGlsIiwiRXJyb3JGYWN0b3J5IiwiQURNSU5fT05MWV9PUEVSQVRJT04iLCJBUkdVTUVOVF9FUlJPUiIsIkFQUF9OT1RfQVVUSE9SSVpFRCIsIkFQUF9OT1RfSU5TVEFMTEVEIiwiQ0FQVENIQV9DSEVDS19GQUlMRUQiLCJDT0RFX0VYUElSRUQiLCJDT1JET1ZBX05PVF9SRUFEWSIsIkNPUlNfVU5TVVBQT1JURUQiLCJDUkVERU5USUFMX0FMUkVBRFlfSU5fVVNFIiwiQ1JFREVOVElBTF9NSVNNQVRDSCIsIkNSRURFTlRJQUxfVE9PX09MRF9MT0dJTl9BR0FJTiIsIkRFUEVOREVOVF9TREtfSU5JVF9CRUZPUkVfQVVUSCIsIkRZTkFNSUNfTElOS19OT1RfQUNUSVZBVEVEIiwiRU1BSUxfQ0hBTkdFX05FRURTX1ZFUklGSUNBVElPTiIsIkVNQUlMX0VYSVNUUyIsIkVNVUxBVE9SX0NPTkZJR19GQUlMRUQiLCJFWFBJUkVEX09PQl9DT0RFIiwiRVhQSVJFRF9QT1BVUF9SRVFVRVNUIiwiSU5URVJOQUxfRVJST1IiLCJJTlZBTElEX0FQSV9LRVkiLCJJTlZBTElEX0FQUF9DUkVERU5USUFMIiwiSU5WQUxJRF9BUFBfSUQiLCJJTlZBTElEX0FVVEgiLCJJTlZBTElEX0FVVEhfRVZFTlQiLCJJTlZBTElEX0NFUlRfSEFTSCIsIklOVkFMSURfQ09ERSIsIklOVkFMSURfQ09OVElOVUVfVVJJIiwiSU5WQUxJRF9DT1JET1ZBX0NPTkZJR1VSQVRJT04iLCJJTlZBTElEX0NVU1RPTV9UT0tFTiIsIklOVkFMSURfRFlOQU1JQ19MSU5LX0RPTUFJTiIsIklOVkFMSURfRU1BSUwiLCJJTlZBTElEX0VNVUxBVE9SX1NDSEVNRSIsIklOVkFMSURfSURQX1JFU1BPTlNFIiwiSU5WQUxJRF9MT0dJTl9DUkVERU5USUFMUyIsIklOVkFMSURfTUVTU0FHRV9QQVlMT0FEIiwiSU5WQUxJRF9NRkFfU0VTU0lPTiIsIklOVkFMSURfT0FVVEhfQ0xJRU5UX0lEIiwiSU5WQUxJRF9PQVVUSF9QUk9WSURFUiIsIklOVkFMSURfT09CX0NPREUiLCJJTlZBTElEX09SSUdJTiIsIklOVkFMSURfUEFTU1dPUkQiLCJJTlZBTElEX1BFUlNJU1RFTkNFIiwiSU5WQUxJRF9QSE9ORV9OVU1CRVIiLCJJTlZBTElEX1BST1ZJREVSX0lEIiwiSU5WQUxJRF9SRUNJUElFTlRfRU1BSUwiLCJJTlZBTElEX1NFTkRFUiIsIklOVkFMSURfU0VTU0lPTl9JTkZPIiwiSU5WQUxJRF9URU5BTlRfSUQiLCJNRkFfSU5GT19OT1RfRk9VTkQiLCJNRkFfUkVRVUlSRUQiLCJNSVNTSU5HX0FORFJPSURfUEFDS0FHRV9OQU1FIiwiTUlTU0lOR19BUFBfQ1JFREVOVElBTCIsIk1JU1NJTkdfQVVUSF9ET01BSU4iLCJNSVNTSU5HX0NPREUiLCJNSVNTSU5HX0NPTlRJTlVFX1VSSSIsIk1JU1NJTkdfSUZSQU1FX1NUQVJUIiwiTUlTU0lOR19JT1NfQlVORExFX0lEIiwiTUlTU0lOR19PUl9JTlZBTElEX05PTkNFIiwiTUlTU0lOR19NRkFfSU5GTyIsIk1JU1NJTkdfTUZBX1NFU1NJT04iLCJNSVNTSU5HX1BIT05FX05VTUJFUiIsIk1JU1NJTkdfU0VTU0lPTl9JTkZPIiwiTU9EVUxFX0RFU1RST1lFRCIsIk5FRURfQ09ORklSTUFUSU9OIiwiTkVUV09SS19SRVFVRVNUX0ZBSUxFRCIsIk5VTExfVVNFUiIsIk5PX0FVVEhfRVZFTlQiLCJOT19TVUNIX1BST1ZJREVSIiwiT1BFUkFUSU9OX05PVF9BTExPV0VEIiwiT1BFUkFUSU9OX05PVF9TVVBQT1JURUQiLCJQT1BVUF9CTE9DS0VEIiwiUE9QVVBfQ0xPU0VEX0JZX1VTRVIiLCJQUk9WSURFUl9BTFJFQURZX0xJTktFRCIsIlFVT1RBX0VYQ0VFREVEIiwiUkVESVJFQ1RfQ0FOQ0VMTEVEX0JZX1VTRVIiLCJSRURJUkVDVF9PUEVSQVRJT05fUEVORElORyIsIlJFSkVDVEVEX0NSRURFTlRJQUwiLCJTRUNPTkRfRkFDVE9SX0FMUkVBRFlfRU5ST0xMRUQiLCJTRUNPTkRfRkFDVE9SX0xJTUlUX0VYQ0VFREVEIiwiVEVOQU5UX0lEX01JU01BVENIIiwiVElNRU9VVCIsIlRPS0VOX0VYUElSRUQiLCJUT09fTUFOWV9BVFRFTVBUU19UUllfTEFURVIiLCJVTkFVVEhPUklaRURfRE9NQUlOIiwiVU5TVVBQT1JURURfRklSU1RfRkFDVE9SIiwiVU5TVVBQT1JURURfUEVSU0lTVEVOQ0UiLCJVTlNVUFBPUlRFRF9URU5BTlRfT1BFUkFUSU9OIiwiVU5WRVJJRklFRF9FTUFJTCIsIlVTRVJfQ0FOQ0VMTEVEIiwiVVNFUl9ERUxFVEVEIiwiVVNFUl9ESVNBQkxFRCIsIlVTRVJfTUlTTUFUQ0giLCJVU0VSX1NJR05FRF9PVVQiLCJXRUFLX1BBU1NXT1JEIiwiV0VCX1NUT1JBR0VfVU5TVVBQT1JURUQiLCJBTFJFQURZX0lOSVRJQUxJWkVEIiwiUkVDQVBUQ0hBX05PVF9FTkFCTEVEIiwiTUlTU0lOR19SRUNBUFRDSEFfVE9LRU4iLCJJTlZBTElEX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX0FDVElPTiIsIk1JU1NJTkdfQ0xJRU5UX1RZUEUiLCJNSVNTSU5HX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRUNBUFRDSEFfVkVSU0lPTiIsIklOVkFMSURfUkVRX1RZUEUiLCJsb2dDbGllbnQiLCJpbXBvcnRfbG9nZ2VyIiwiTG9nZ2VyIiwiX2xvZ1dhcm4iLCJtc2ciLCJhcmdzIiwibG9nTGV2ZWwiLCJMb2dMZXZlbCIsIldBUk4iLCJ3YXJuIiwiaW1wb3J0X2FwcCIsIlNES19WRVJTSU9OIiwiX2xvZ0Vycm9yIiwiRVJST1IiLCJlcnJvciIsIl9mYWlsIiwiYXV0aE9yQ29kZSIsInJlc3QiLCJjcmVhdGVFcnJvckludGVybmFsIiwiX2NyZWF0ZUVycm9yIiwiX2Vycm9yV2l0aEN1c3RvbU1lc3NhZ2UiLCJhdXRoIiwiY29kZSIsIm1lc3NhZ2UiLCJlcnJvck1hcCIsIk9iamVjdCIsImFzc2lnbiIsImZhY3RvcnkiLCJjcmVhdGUiLCJhcHBOYW1lIiwibmFtZSIsIl9zZXJ2ZXJBcHBDdXJyZW50VXNlck9wZXJhdGlvbk5vdFN1cHBvcnRlZEVycm9yIiwiX2Fzc2VydEluc3RhbmNlT2YiLCJvYmplY3QiLCJpbnN0YW5jZSIsImNvbnN0cnVjdG9ySW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsImZ1bGxQYXJhbXMiLCJzbGljZSIsIl9lcnJvckZhY3RvcnkiLCJfYXNzZXJ0IiwiYXNzZXJ0aW9uIiwiZGVidWdGYWlsIiwiZmFpbHVyZSIsIkVycm9yIiwiZGVidWdBc3NlcnQiLCJfZ2V0Q3VycmVudFVybCIsInNlbGYiLCJfYSIsImxvY2F0aW9uIiwiaHJlZiIsIl9pc0h0dHBPckh0dHBzIiwiX2dldEN1cnJlbnRTY2hlbWUiLCJwcm90b2NvbCIsIl9pc09ubGluZSIsIm5hdmlnYXRvciIsIm9uTGluZSIsImlzQnJvd3NlckV4dGVuc2lvbiIsIl9nZXRVc2VyTGFuZ3VhZ2UiLCJuYXZpZ2F0b3JMYW5ndWFnZSIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiRGVsYXkiLCJzaG9ydERlbGF5IiwibG9uZ0RlbGF5IiwiaXNNb2JpbGUiLCJpc01vYmlsZUNvcmRvdmEiLCJpc1JlYWN0TmF0aXZlIiwiZ2V0IiwiTWF0aCIsIm1pbiIsIl9lbXVsYXRvclVybCIsImNvbmZpZyIsInBhdGgiLCJlbXVsYXRvciIsInVybCIsInN0YXJ0c1dpdGgiLCJGZXRjaFByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsImZldGNoSW1wbCIsImhlYWRlcnNJbXBsIiwicmVzcG9uc2VJbXBsIiwiZmV0Y2giLCJnbG9iYWxUaGlzIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJyZXNwb25zZSIsIlJlc3BvbnNlIiwiU0VSVkVSX0VSUk9SX01BUCIsIkRFRkFVTFRfQVBJX1RJTUVPVVRfTVMiLCJfYWRkVGlkSWZOZWNlc3NhcnkiLCJyZXF1ZXN0IiwidGVuYW50SWQiLCJfcGVyZm9ybUFwaVJlcXVlc3QiLCJtZXRob2QiLCJjdXN0b21FcnJvck1hcCIsIl9wZXJmb3JtRmV0Y2hXaXRoRXJyb3JIYW5kbGluZyIsImJvZHkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJxdWVyeXN0cmluZyIsImtleSIsImFwaUtleSIsIl9nZXRBZGRpdGlvbmFsSGVhZGVycyIsImxhbmd1YWdlQ29kZSIsIl9nZXRGaW5hbFRhcmdldCIsImFwaUhvc3QiLCJyZWZlcnJlclBvbGljeSIsImZldGNoRm4iLCJfY2FuSW5pdEVtdWxhdG9yIiwibmV0d29ya1RpbWVvdXQiLCJOZXR3b3JrVGltZW91dCIsIlByb21pc2UiLCJyYWNlIiwicHJvbWlzZSIsImNsZWFyTmV0d29ya1RpbWVvdXQiLCJqc29uIiwiX21ha2VUYWdnZWRFcnJvciIsIm9rIiwiZXJyb3JNZXNzYWdlIiwic2VydmVyRXJyb3JDb2RlIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic3BsaXQiLCJhdXRoRXJyb3IiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJlIiwiRmlyZWJhc2VFcnJvciIsIlN0cmluZyIsIl9wZXJmb3JtU2lnbkluUmVxdWVzdCIsInNlcnZlclJlc3BvbnNlIiwiX3NlcnZlclJlc3BvbnNlIiwiaG9zdCIsImJhc2UiLCJhcGlTY2hlbWUiLCJfcGFyc2VFbmZvcmNlbWVudFN0YXRlIiwiZW5mb3JjZW1lbnRTdGF0ZVN0ciIsInRpbWVyIiwiXyIsInJlamVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJlcnJvclBhcmFtcyIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJjdXN0b21EYXRhIiwiX3Rva2VuUmVzcG9uc2UiLCJpc1YyIiwiZ3JlY2FwdGNoYSIsImdldFJlc3BvbnNlIiwiaXNFbnRlcnByaXNlIiwiZW50ZXJwcmlzZSIsIlJlY2FwdGNoYUNvbmZpZyIsInNpdGVLZXkiLCJyZWNhcHRjaGFFbmZvcmNlbWVudFN0YXRlIiwicmVjYXB0Y2hhS2V5IiwiZ2V0UHJvdmlkZXJFbmZvcmNlbWVudFN0YXRlIiwicHJvdmlkZXJTdHIiLCJsZW5ndGgiLCJwcm92aWRlciIsImVuZm9yY2VtZW50U3RhdGUiLCJpc1Byb3ZpZGVyRW5hYmxlZCIsImdldFJlY2FwdGNoYVBhcmFtcyIsInJlY2FwdGNoYVNpdGVLZXkiLCJnZXRSZWNhcHRjaGFDb25maWciLCJkZWxldGVBY2NvdW50IiwiZGVsZXRlTGlua2VkQWNjb3VudHMiLCJnZXRBY2NvdW50SW5mbyIsInV0Y1RpbWVzdGFtcFRvRGF0ZVN0cmluZyIsInV0Y1RpbWVzdGFtcCIsImRhdGUiLCJEYXRlIiwiTnVtYmVyIiwiaXNOYU4iLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJ1c2VyIiwiZm9yY2VSZWZyZXNoIiwiZ2V0TW9kdWxhckluc3RhbmNlIiwidXNlckludGVybmFsIiwidG9rZW4iLCJjbGFpbXMiLCJfcGFyc2VUb2tlbiIsImV4cCIsImF1dGhfdGltZSIsImlhdCIsImZpcmViYXNlIiwic2lnbkluUHJvdmlkZXIiLCJhdXRoVGltZSIsInNlY29uZHNTdHJpbmdUb01pbGxpc2Vjb25kcyIsImlzc3VlZEF0VGltZSIsImV4cGlyYXRpb25UaW1lIiwic2lnbkluU2Vjb25kRmFjdG9yIiwic2Vjb25kcyIsImFsZ29yaXRobSIsInBheWxvYWQiLCJzaWduYXR1cmUiLCJkZWNvZGVkIiwiYmFzZTY0RGVjb2RlIiwicGFyc2UiLCJ0b1N0cmluZyIsIl90b2tlbkV4cGlyZXNJbiIsInBhcnNlZFRva2VuIiwiX2xvZ291dElmSW52YWxpZGF0ZWQiLCJieXBhc3NBdXRoU3RhdGUiLCJpc1VzZXJJbnZhbGlkYXRlZCIsImN1cnJlbnRVc2VyIiwiUHJvYWN0aXZlUmVmcmVzaCIsImlzUnVubmluZyIsInRpbWVySWQiLCJlcnJvckJhY2tvZmYiLCJfc3RhcnQiLCJzY2hlZHVsZSIsIl9zdG9wIiwiZ2V0SW50ZXJ2YWwiLCJ3YXNFcnJvciIsImludGVydmFsIiwiZXhwVGltZSIsInN0c1Rva2VuTWFuYWdlciIsIm5vdyIsIm1heCIsIml0ZXJhdGlvbiIsIlVzZXJNZXRhZGF0YSIsImNyZWF0ZWRBdCIsImxhc3RMb2dpbkF0IiwiX2luaXRpYWxpemVUaW1lIiwibGFzdFNpZ25JblRpbWUiLCJjcmVhdGlvblRpbWUiLCJfY29weSIsIm1ldGFkYXRhIiwidG9KU09OIiwiX3JlbG9hZFdpdGhvdXRTYXZpbmciLCJpZFRva2VuIiwidXNlcnMiLCJjb3JlQWNjb3VudCIsIl9ub3RpZnlSZWxvYWRMaXN0ZW5lciIsIm5ld1Byb3ZpZGVyRGF0YSIsInByb3ZpZGVyVXNlckluZm8iLCJleHRyYWN0UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJEYXRhIiwibWVyZ2VQcm92aWRlckRhdGEiLCJvbGRJc0Fub255bW91cyIsImlzQW5vbnltb3VzIiwibmV3SXNBbm9ueW1vdXMiLCJwYXNzd29yZEhhc2giLCJ1cGRhdGVzIiwidWlkIiwibG9jYWxJZCIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJwaG90b1VybCIsImVtYWlsVmVyaWZpZWQiLCJfcGVyc2lzdFVzZXJJZkN1cnJlbnQiLCJfbm90aWZ5TGlzdGVuZXJzSWZDdXJyZW50Iiwib3JpZ2luYWwiLCJuZXdEYXRhIiwiZGVkdXBlZCIsImZpbHRlciIsIm8iLCJzb21lIiwibiIsInByb3ZpZGVySWQiLCJwcm92aWRlcnMiLCJtYXAiLCJpbXBvcnRfdHNsaWIiLCJfX3Jlc3QiLCJyYXdJZCIsInJlcXVlc3RTdHNUb2tlbiIsInJlZnJlc2hUb2tlbiIsInRva2VuQXBpSG9zdCIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlc0luIiwiZXhwaXJlc19pbiIsInJlZnJlc2hfdG9rZW4iLCJyZXZva2VUb2tlbiIsIlN0c1Rva2VuTWFuYWdlciIsImlzRXhwaXJlZCIsInVwZGF0ZUZyb21TZXJ2ZXJSZXNwb25zZSIsInVwZGF0ZVRva2Vuc0FuZEV4cGlyYXRpb24iLCJ1cGRhdGVGcm9tSWRUb2tlbiIsImdldFRva2VuIiwicmVmcmVzaCIsImNsZWFyUmVmcmVzaFRva2VuIiwib2xkVG9rZW4iLCJleHBpcmVzSW5TZWMiLCJmcm9tSlNPTiIsIm1hbmFnZXIiLCJfYXNzaWduIiwiX2Nsb25lIiwiX3BlcmZvcm1SZWZyZXNoIiwiYXNzZXJ0U3RyaW5nT3JVbmRlZmluZWQiLCJVc2VySW1wbCIsIm9wdCIsInByb2FjdGl2ZVJlZnJlc2giLCJyZWxvYWRVc2VySW5mbyIsInJlbG9hZExpc3RlbmVyIiwidXNlckluZm8iLCJuZXdVc2VyIiwiX29uUmVsb2FkIiwiY2FsbGJhY2siLCJfc3RhcnRQcm9hY3RpdmVSZWZyZXNoIiwiX3N0b3BQcm9hY3RpdmVSZWZyZXNoIiwiX3VwZGF0ZVRva2Vuc0lmTmVjZXNzYXJ5IiwicmVsb2FkMiIsInRva2Vuc1JlZnJlc2hlZCIsImRlbGV0ZSIsIl9pc0ZpcmViYXNlU2VydmVyQXBwIiwiYXBwIiwiX3JlZGlyZWN0RXZlbnRJZCIsIl9mcm9tSlNPTiIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiX2YiLCJfZyIsIl9oIiwicGxhaW5PYmplY3RUb2tlbk1hbmFnZXIiLCJBcnJheSIsImlzQXJyYXkiLCJfZnJvbUlkVG9rZW5SZXNwb25zZSIsImlkVG9rZW5SZXNwb25zZSIsIl9mcm9tR2V0QWNjb3VudEluZm9SZXNwb25zZSIsImluc3RhbmNlQ2FjaGUiLCJNYXAiLCJfZ2V0SW5zdGFuY2UiLCJjbHMiLCJGdW5jdGlvbiIsInNldCIsIkluTWVtb3J5UGVyc2lzdGVuY2UiLCJ0eXBlIiwic3RvcmFnZSIsIl9pc0F2YWlsYWJsZSIsIl9zZXQiLCJ2YWx1ZSIsIl9nZXQiLCJfcmVtb3ZlIiwiX2FkZExpc3RlbmVyIiwiX2tleSIsIl9saXN0ZW5lciIsIl9yZW1vdmVMaXN0ZW5lciIsIl9wZXJzaXN0ZW5jZUtleU5hbWUiLCJQZXJzaXN0ZW5jZVVzZXJNYW5hZ2VyIiwicGVyc2lzdGVuY2UiLCJ1c2VyS2V5IiwibmFtZTIiLCJmdWxsVXNlcktleSIsImZ1bGxQZXJzaXN0ZW5jZUtleSIsImJvdW5kRXZlbnRIYW5kbGVyIiwiX29uU3RvcmFnZUV2ZW50IiwiYmluZCIsInNldEN1cnJlbnRVc2VyIiwiZ2V0Q3VycmVudFVzZXIiLCJibG9iIiwicmVtb3ZlQ3VycmVudFVzZXIiLCJzYXZlUGVyc2lzdGVuY2VGb3JSZWRpcmVjdCIsIm5ld1BlcnNpc3RlbmNlIiwicGVyc2lzdGVuY2VIaWVyYXJjaHkiLCJhdmFpbGFibGVQZXJzaXN0ZW5jZXMiLCJhbGwiLCJzZWxlY3RlZFBlcnNpc3RlbmNlIiwidXNlclRvTWlncmF0ZSIsIm1pZ3JhdGlvbkhpZXJhcmNoeSIsInAiLCJfc2hvdWxkQWxsb3dNaWdyYXRpb24iLCJfZ2V0QnJvd3Nlck5hbWUiLCJ1c2VyQWdlbnQiLCJ1YSIsImluY2x1ZGVzIiwiX2lzSUVNb2JpbGUiLCJfaXNGaXJlZm94IiwiX2lzQmxhY2tCZXJyeSIsIl9pc1dlYk9TIiwiX2lzU2FmYXJpIiwiX2lzQ2hyb21lSU9TIiwiX2lzQW5kcm9pZCIsInJlIiwibWF0Y2hlcyIsIm1hdGNoIiwiZ2V0VUEiLCJ0ZXN0IiwiX2lzSU9TIiwiX2lzSU9TN09yOCIsIl9pc0lPU1N0YW5kYWxvbmUiLCJ3aW5kb3ciLCJzdGFuZGFsb25lIiwiX2lzSUUxMCIsImlzSUUiLCJkb2N1bWVudCIsImRvY3VtZW50TW9kZSIsIl9pc01vYmlsZUJyb3dzZXIiLCJfaXNJZnJhbWUiLCJ0b3AiLCJfZ2V0Q2xpZW50VmVyc2lvbiIsImNsaWVudFBsYXRmb3JtIiwiZnJhbWV3b3JrcyIsInJlcG9ydGVkUGxhdGZvcm0iLCJyZXBvcnRlZEZyYW1ld29ya3MiLCJqb2luIiwiQXV0aE1pZGRsZXdhcmVRdWV1ZSIsInF1ZXVlIiwicHVzaENhbGxiYWNrIiwib25BYm9ydCIsIndyYXBwZWRDYWxsYmFjayIsInJlc29sdmUiLCJyZXN1bHQiLCJwdXNoIiwiaW5kZXgiLCJydW5NaWRkbGV3YXJlIiwibmV4dFVzZXIiLCJvbkFib3J0U3RhY2siLCJiZWZvcmVTdGF0ZUNhbGxiYWNrIiwicmV2ZXJzZSIsIm9yaWdpbmFsTWVzc2FnZSIsIl9nZXRQYXNzd29yZFBvbGljeSIsIk1JTklNVU1fTUlOX1BBU1NXT1JEX0xFTkdUSCIsIlBhc3N3b3JkUG9saWN5SW1wbCIsInJlc3BvbnNlT3B0aW9ucyIsImN1c3RvbVN0cmVuZ3RoT3B0aW9ucyIsIm1pblBhc3N3b3JkTGVuZ3RoIiwibWF4UGFzc3dvcmRMZW5ndGgiLCJjb250YWluc0xvd2VyY2FzZUNoYXJhY3RlciIsImNvbnRhaW5zTG93ZXJjYXNlTGV0dGVyIiwiY29udGFpbnNVcHBlcmNhc2VDaGFyYWN0ZXIiLCJjb250YWluc1VwcGVyY2FzZUxldHRlciIsImNvbnRhaW5zTnVtZXJpY0NoYXJhY3RlciIsImNvbnRhaW5zTm9uQWxwaGFudW1lcmljQ2hhcmFjdGVyIiwiYWxsb3dlZE5vbkFscGhhbnVtZXJpY0NoYXJhY3RlcnMiLCJmb3JjZVVwZ3JhZGVPblNpZ25pbiIsInNjaGVtYVZlcnNpb24iLCJwYXNzd29yZCIsInN0YXR1cyIsImlzVmFsaWQiLCJwYXNzd29yZFBvbGljeSIsInZhbGlkYXRlUGFzc3dvcmRMZW5ndGhPcHRpb25zIiwidmFsaWRhdGVQYXNzd29yZENoYXJhY3Rlck9wdGlvbnMiLCJtZWV0c01pblBhc3N3b3JkTGVuZ3RoIiwibWVldHNNYXhQYXNzd29yZExlbmd0aCIsInVwZGF0ZVBhc3N3b3JkQ2hhcmFjdGVyT3B0aW9uc1N0YXR1c2VzIiwicGFzc3dvcmRDaGFyIiwiaSIsImNoYXJBdCIsIkF1dGhJbXBsIiwiaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyIiwiYXBwQ2hlY2tTZXJ2aWNlUHJvdmlkZXIiLCJlbXVsYXRvckNvbmZpZyIsIm9wZXJhdGlvbnMiLCJhdXRoU3RhdGVTdWJzY3JpcHRpb24iLCJTdWJzY3JpcHRpb24iLCJpZFRva2VuU3Vic2NyaXB0aW9uIiwiYmVmb3JlU3RhdGVRdWV1ZSIsInJlZGlyZWN0VXNlciIsImlzUHJvYWN0aXZlUmVmcmVzaEVuYWJsZWQiLCJFWFBFQ1RFRF9QQVNTV09SRF9QT0xJQ1lfU0NIRU1BX1ZFUlNJT04iLCJfaXNJbml0aWFsaXplZCIsIl9kZWxldGVkIiwiX2luaXRpYWxpemF0aW9uUHJvbWlzZSIsIl9wb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJfYWdlbnRSZWNhcHRjaGFDb25maWciLCJfdGVuYW50UmVjYXB0Y2hhQ29uZmlncyIsIl9wcm9qZWN0UGFzc3dvcmRQb2xpY3kiLCJfdGVuYW50UGFzc3dvcmRQb2xpY2llcyIsImxhc3ROb3RpZmllZFVpZCIsInNldHRpbmdzIiwiYXBwVmVyaWZpY2F0aW9uRGlzYWJsZWRGb3JUZXN0aW5nIiwiY2xpZW50VmVyc2lvbiIsInNka0NsaWVudFZlcnNpb24iLCJfaW5pdGlhbGl6ZVdpdGhQZXJzaXN0ZW5jZSIsInBvcHVwUmVkaXJlY3RSZXNvbHZlciIsInBlcnNpc3RlbmNlTWFuYWdlciIsIl9zaG91bGRJbml0UHJvYWN0aXZlbHkiLCJfaW5pdGlhbGl6ZSIsImluaXRpYWxpemVDdXJyZW50VXNlciIsImFzc2VydGVkUGVyc2lzdGVuY2UiLCJfY3VycmVudFVzZXIiLCJfdXBkYXRlQ3VycmVudFVzZXIiLCJpbml0aWFsaXplQ3VycmVudFVzZXJGcm9tSWRUb2tlbiIsImRpcmVjdGx5U2V0Q3VycmVudFVzZXIiLCJlcnIiLCJjb25zb2xlIiwiYXV0aElkVG9rZW4iLCJ0aGVuIiwicHJldmlvdXNseVN0b3JlZFVzZXIiLCJmdXR1cmVDdXJyZW50VXNlciIsIm5lZWRzVG9jaGVja01pZGRsZXdhcmUiLCJhdXRoRG9tYWluIiwiZ2V0T3JJbml0UmVkaXJlY3RQZXJzaXN0ZW5jZU1hbmFnZXIiLCJyZWRpcmVjdFVzZXJFdmVudElkIiwic3RvcmVkVXNlckV2ZW50SWQiLCJ0cnlSZWRpcmVjdFNpZ25JbiIsIl9vdmVycmlkZVJlZGlyZWN0UmVzdWx0IiwicmVsb2FkQW5kU2V0Q3VycmVudFVzZXJPckNsZWFyIiwicmVkaXJlY3RSZXNvbHZlciIsIl9jb21wbGV0ZVJlZGlyZWN0Rm4iLCJfc2V0UmVkaXJlY3RVc2VyIiwiX2RlbGV0ZSIsInVzZXJFeHRlcm4iLCJza2lwQmVmb3JlU3RhdGVDYWxsYmFja3MiLCJub3RpZnlBdXRoTGlzdGVuZXJzIiwicmVkaXJlY3RQZXJzaXN0ZW5jZU1hbmFnZXIiLCJfZ2V0UmVjYXB0Y2hhQ29uZmlnIiwiX2dldFBhc3N3b3JkUG9saWN5SW50ZXJuYWwiLCJfdXBkYXRlUGFzc3dvcmRQb2xpY3kiLCJfZ2V0UGVyc2lzdGVuY2UiLCJfdXBkYXRlRXJyb3JNYXAiLCJuZXh0T3JPYnNlcnZlciIsImNvbXBsZXRlZCIsInJlZ2lzdGVyU3RhdGVMaXN0ZW5lciIsImF1dGhTdGF0ZVJlYWR5IiwidW5zdWJzY3JpYmUiLCJ0b2tlblR5cGUiLCJyZWRpcmVjdE1hbmFnZXIiLCJyZXNvbHZlciIsIl9yZWRpcmVjdFBlcnNpc3RlbmNlIiwiX3JlZGlyZWN0VXNlckZvcklkIiwiaWQiLCJuZXh0IiwiY3VycmVudFVpZCIsInN1YnNjcmlwdGlvbiIsImNiIiwiaXNVbnN1YnNjcmliZWQiLCJhZGRPYnNlcnZlciIsImFjdGlvbiIsIl9sb2dGcmFtZXdvcmsiLCJmcmFtZXdvcmsiLCJzb3J0IiwiX2dldEZyYW1ld29ya3MiLCJvcHRpb25zIiwiYXBwSWQiLCJoZWFydGJlYXRzSGVhZGVyIiwiZ2V0SW1tZWRpYXRlIiwib3B0aW9uYWwiLCJnZXRIZWFydGJlYXRzSGVhZGVyIiwiYXBwQ2hlY2tUb2tlbiIsIl9nZXRBcHBDaGVja1Rva2VuIiwiYXBwQ2hlY2tUb2tlblJlc3VsdCIsIl9jYXN0QXV0aCIsIm9ic2VydmVyIiwiY3JlYXRlU3Vic2NyaWJlIiwiZXh0ZXJuYWxKU1Byb3ZpZGVyIiwibG9hZEpTIiwicmVjYXB0Y2hhVjJTY3JpcHQiLCJyZWNhcHRjaGFFbnRlcnByaXNlU2NyaXB0IiwiZ2FwaVNjcmlwdCIsIl9zZXRFeHRlcm5hbEpTUHJvdmlkZXIiLCJfbG9hZEpTIiwiX3JlY2FwdGNoYVYyU2NyaXB0VXJsIiwiX3JlY2FwdGNoYUVudGVycHJpc2VTY3JpcHRVcmwiLCJfZ2FwaVNjcmlwdFVybCIsIl9nZW5lcmF0ZUNhbGxiYWNrTmFtZSIsInByZWZpeCIsImZsb29yIiwicmFuZG9tIiwiUkVDQVBUQ0hBX0VOVEVSUFJJU0VfVkVSSUZJRVJfVFlQRSIsIkZBS0VfVE9LRU4iLCJSZWNhcHRjaGFFbnRlcnByaXNlVmVyaWZpZXIiLCJhdXRoRXh0ZXJuIiwidmVyaWZ5IiwicmV0cmlldmVTaXRlS2V5IiwiY2xpZW50VHlwZSIsInZlcnNpb24iLCJjYXRjaCIsInJldHJpZXZlUmVjYXB0Y2hhVG9rZW4iLCJyZWFkeSIsImV4ZWN1dGUiLCJpbmplY3RSZWNhcHRjaGFGaWVsZHMiLCJjYXB0Y2hhUmVzcCIsInZlcmlmaWVyIiwiY2FwdGNoYVJlc3BvbnNlIiwibmV3UmVxdWVzdCIsImhhbmRsZVJlY2FwdGNoYUZsb3ciLCJhdXRoSW5zdGFuY2UiLCJhY3Rpb25OYW1lIiwiYWN0aW9uTWV0aG9kIiwicmVxdWVzdFdpdGhSZWNhcHRjaGEiLCJsb2ciLCJfaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImF1dGhJbnRlcm5hbCIsImRlcHMiLCJfZ2V0UHJvdmlkZXIiLCJpc0luaXRpYWxpemVkIiwiYXV0aDIiLCJpbml0aWFsT3B0aW9ucyIsImdldE9wdGlvbnMiLCJkZWVwRXF1YWwiLCJfaW5pdGlhbGl6ZUF1dGhJbnN0YW5jZSIsImhpZXJhcmNoeSIsImRpc2FibGVXYXJuaW5ncyIsImV4dHJhY3RQcm90b2NvbCIsInBvcnQiLCJleHRyYWN0SG9zdEFuZFBvcnQiLCJwb3J0U3RyIiwiZnJlZXplIiwiZW1pdEVtdWxhdG9yV2FybmluZyIsInByb3RvY29sRW5kIiwiaW5kZXhPZiIsInN1YnN0ciIsImF1dGhvcml0eSIsImV4ZWMiLCJob3N0QW5kUG9ydCIsInBvcCIsImJyYWNrZXRlZElQdjYiLCJwYXJzZVBvcnQiLCJhdHRhY2hCYW5uZXIiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJzdHkiLCJzdHlsZSIsImlubmVyVGV4dCIsInBvc2l0aW9uIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJjb2xvciIsImJvdHRvbSIsImxlZnQiLCJtYXJnaW4iLCJ6SW5kZXgiLCJ0ZXh0QWxpZ24iLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImluZm8iLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpZ25Jbk1ldGhvZCIsIl9nZXRJZFRva2VuUmVzcG9uc2UiLCJfYXV0aCIsIl9saW5rVG9JZFRva2VuIiwiX2lkVG9rZW4iLCJfZ2V0UmVhdXRoZW50aWNhdGlvblJlc29sdmVyIiwicmVzZXRQYXNzd29yZCIsInVwZGF0ZUVtYWlsUGFzc3dvcmQiLCJsaW5rRW1haWxQYXNzd29yZCIsImFwcGx5QWN0aW9uQ29kZSQxIiwic2lnbkluV2l0aFBhc3N3b3JkIiwic2VuZE9vYkNvZGUiLCJzZW5kRW1haWxWZXJpZmljYXRpb24kMSIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwkMSIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCQxIiwidmVyaWZ5QW5kQ2hhbmdlRW1haWwiLCJzaWduSW5XaXRoRW1haWxMaW5rJDEiLCJzaWduSW5XaXRoRW1haWxMaW5rRm9yTGlua2luZyIsIl9lbWFpbCIsIl9wYXNzd29yZCIsIl90ZW5hbnRJZCIsIl9mcm9tRW1haWxBbmRQYXNzd29yZCIsIl9mcm9tRW1haWxBbmRDb2RlIiwib29iQ29kZSIsIm9iaiIsInJldHVyblNlY3VyZVRva2VuIiwic2lnbkluV2l0aElkcCIsIklEUF9SRVFVRVNUX1VSSSQxIiwicGVuZGluZ1Rva2VuIiwiX2Zyb21QYXJhbXMiLCJjcmVkIiwibm9uY2UiLCJvYXV0aFRva2VuIiwib2F1dGhUb2tlblNlY3JldCIsInNlY3JldCIsImJ1aWxkUmVxdWVzdCIsImF1dG9DcmVhdGUiLCJyZXF1ZXN0VXJpIiwicG9zdEJvZHkiLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlIiwic2lnbkluV2l0aFBob25lTnVtYmVyJDEiLCJsaW5rV2l0aFBob25lTnVtYmVyJDEiLCJ0ZW1wb3JhcnlQcm9vZiIsIlZFUklGWV9QSE9ORV9OVU1CRVJfRk9SX0VYSVNUSU5HX0VSUk9SX01BUF8iLCJ2ZXJpZnlQaG9uZU51bWJlckZvckV4aXN0aW5nIiwiYXBpUmVxdWVzdCIsIm9wZXJhdGlvbiIsIl9mcm9tVmVyaWZpY2F0aW9uIiwidmVyaWZpY2F0aW9uSWQiLCJ2ZXJpZmljYXRpb25Db2RlIiwiX2Zyb21Ub2tlblJlc3BvbnNlIiwiX21ha2VWZXJpZmljYXRpb25SZXF1ZXN0Iiwic2Vzc2lvbkluZm8iLCJwYXJzZU1vZGUiLCJtb2RlIiwicGFyc2VEZWVwTGluayIsImxpbmsiLCJxdWVyeXN0cmluZ0RlY29kZSIsImV4dHJhY3RRdWVyeXN0cmluZyIsImRvdWJsZURlZXBMaW5rIiwiaU9TRGVlcExpbmsiLCJpT1NEb3VibGVEZWVwTGluayIsImFjdGlvbkxpbmsiLCJzZWFyY2hQYXJhbXMiLCJjb250aW51ZVVybCIsInBhcnNlTGluayIsIlBST1ZJREVSX0lEIiwiY3JlZGVudGlhbCIsImNyZWRlbnRpYWxXaXRoTGluayIsImVtYWlsTGluayIsImFjdGlvbkNvZGVVcmwiLCJFTUFJTF9QQVNTV09SRF9TSUdOX0lOX01FVEhPRCIsIkVNQUlMX0xJTktfU0lHTl9JTl9NRVRIT0QiLCJGZWRlcmF0ZWRBdXRoUHJvdmlkZXIiLCJkZWZhdWx0TGFuZ3VhZ2VDb2RlIiwiY3VzdG9tUGFyYW1ldGVycyIsInNldERlZmF1bHRMYW5ndWFnZSIsInNldEN1c3RvbVBhcmFtZXRlcnMiLCJjdXN0b21PQXV0aFBhcmFtZXRlcnMiLCJnZXRDdXN0b21QYXJhbWV0ZXJzIiwiQmFzZU9BdXRoUHJvdmlkZXIiLCJzY29wZXMiLCJhZGRTY29wZSIsInNjb3BlIiwiZ2V0U2NvcGVzIiwiY3JlZGVudGlhbEZyb21KU09OIiwiX2NyZWRlbnRpYWwiLCJyYXdOb25jZSIsImNyZWRlbnRpYWxGcm9tUmVzdWx0IiwidXNlckNyZWRlbnRpYWwiLCJvYXV0aENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiY3JlZGVudGlhbEZyb21FcnJvciIsInRva2VuUmVzcG9uc2UiLCJvYXV0aElkVG9rZW4iLCJvYXV0aEFjY2Vzc1Rva2VuIiwiRkFDRUJPT0tfU0lHTl9JTl9NRVRIT0QiLCJjcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIkdPT0dMRV9TSUdOX0lOX01FVEhPRCIsIkdJVEhVQl9TSUdOX0lOX01FVEhPRCIsIklEUF9SRVFVRVNUX1VSSSIsIlNBTUxBdXRoQ3JlZGVudGlhbCIsIl9jcmVhdGUiLCJTQU1MX1BST1ZJREVSX1BSRUZJWCIsInNhbWxDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIlRXSVRURVJfU0lHTl9JTl9NRVRIT0QiLCJzaWduVXAiLCJVc2VyQ3JlZGVudGlhbEltcGwiLCJvcGVyYXRpb25UeXBlIiwicHJvdmlkZXJJZEZvclJlc3BvbnNlIiwidXNlckNyZWQiLCJfZm9yT3BlcmF0aW9uIiwiTXVsdGlGYWN0b3JFcnJvciIsInNldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiX2Zyb21FcnJvckFuZE9wZXJhdGlvbiIsIl9wcm9jZXNzQ3JlZGVudGlhbFNhdmluZ01mYUNvbnRleHRJZk5lY2Vzc2FyeSIsImlkVG9rZW5Qcm92aWRlciIsInByb3ZpZGVyRGF0YUFzTmFtZXMiLCJTZXQiLCJwaWQiLCJfYXNzZXJ0TGlua2VkU3RhdHVzIiwiZGVsZXRlUHJvdmlkZXIiLCJwcm92aWRlcnNMZWZ0IiwicGQiLCJoYXMiLCJfbGluayQxIiwiZXhwZWN0ZWQiLCJwcm92aWRlcklkcyIsIl9yZWF1dGhlbnRpY2F0ZSIsInBhcnNlZCIsInN1YiIsIl9zaWduSW5XaXRoQ3JlZGVudGlhbCIsInNpZ25JbldpdGhDdXN0b21Ub2tlbiQxIiwiY3VzdG9tVG9rZW4iLCJNdWx0aUZhY3RvckluZm9JbXBsIiwiZmFjdG9ySWQiLCJtZmFFbnJvbGxtZW50SWQiLCJlbnJvbGxtZW50VGltZSIsImVucm9sbGVkQXQiLCJfZnJvbVNlcnZlclJlc3BvbnNlIiwiZW5yb2xsbWVudCIsIlBob25lTXVsdGlGYWN0b3JJbmZvSW1wbCIsIlRvdHBNdWx0aUZhY3RvckluZm9JbXBsIiwicGhvbmVJbmZvIiwiX3NldEFjdGlvbkNvZGVTZXR0aW5nc09uUmVxdWVzdCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsImR5bmFtaWNMaW5rRG9tYWluIiwiY2FuSGFuZGxlQ29kZUluQXBwIiwiaGFuZGxlQ29kZUluQXBwIiwiaU9TIiwiYnVuZGxlSWQiLCJpT1NCdW5kbGVJZCIsImFuZHJvaWQiLCJwYWNrYWdlTmFtZSIsImFuZHJvaWRJbnN0YWxsQXBwIiwiaW5zdGFsbEFwcCIsImFuZHJvaWRNaW5pbXVtVmVyc2lvbkNvZGUiLCJtaW5pbXVtVmVyc2lvbiIsImFuZHJvaWRQYWNrYWdlTmFtZSIsInJlY2FjaGVQYXNzd29yZFBvbGljeSIsInJlcXVlc3RUeXBlIiwibmV3UGFzc3dvcmQiLCJhdXRoTW9kdWxhciIsIm5ld0VtYWlsIiwibWZhSW5mbyIsIm11bHRpRmFjdG9ySW5mbyIsImRhdGEiLCJwcmV2aW91c0VtYWlsIiwic2lnblVwUmVzcG9uc2UiLCJzZXRBY3Rpb25Db2RlU2V0dGluZ3MiLCJyZXF1ZXN0MiIsImFjdGlvbkNvZGVTZXR0aW5nczIiLCJjcmVhdGVBdXRoVXJpIiwiY29udGludWVVcmkiLCJpZGVudGlmaWVyIiwic2lnbmluTWV0aG9kcyIsInVwZGF0ZVByb2ZpbGUkMSIsInByb2ZpbGVSZXF1ZXN0IiwicGFzc3dvcmRQcm92aWRlciIsImZpbmQiLCJ1cGRhdGVFbWFpbE9yUGFzc3dvcmQiLCJwcm9maWxlIiwicmF3VXNlckluZm8iLCJpc05ld1VzZXIiLCJraW5kIiwiZmlsdGVyZWRQcm92aWRlcklkIiwiR2VuZXJpY0FkZGl0aW9uYWxVc2VySW5mbyIsIkZhY2Vib29rQWRkaXRpb25hbFVzZXJJbmZvIiwiR2l0aHViQWRkaXRpb25hbFVzZXJJbmZvIiwiR29vZ2xlQWRkaXRpb25hbFVzZXJJbmZvIiwiVHdpdHRlckFkZGl0aW9uYWxVc2VySW5mbyIsInNjcmVlbk5hbWUiLCJGZWRlcmF0ZWRBZGRpdGlvbmFsVXNlckluZm9XaXRoVXNlcm5hbWUiLCJ1c2VybmFtZSIsImxvZ2luIiwiTXVsdGlGYWN0b3JTZXNzaW9uSW1wbCIsIl9mcm9tSWR0b2tlbiIsIl9mcm9tTWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm11bHRpRmFjdG9yU2Vzc2lvbiIsInBlbmRpbmdDcmVkZW50aWFsIiwiTXVsdGlGYWN0b3JSZXNvbHZlckltcGwiLCJzZXNzaW9uIiwiaGludHMiLCJzaWduSW5SZXNvbHZlciIsIl9mcm9tRXJyb3IiLCJtZmFSZXNwb25zZSIsIl9wcm9jZXNzIiwicmVzb2x2ZVNpZ25JbiIsImFzc2VydGlvbkV4dGVybiIsImVycm9ySW50ZXJuYWwiLCJzdGFydEVucm9sbFBob25lTWZhIiwiZmluYWxpemVFbnJvbGxQaG9uZU1mYSIsInN0YXJ0RW5yb2xsVG90cE1mYSIsImZpbmFsaXplRW5yb2xsVG90cE1mYSIsIndpdGhkcmF3TWZhIiwiTXVsdGlGYWN0b3JVc2VySW1wbCIsImVucm9sbGVkRmFjdG9ycyIsIl9mcm9tVXNlciIsImdldFNlc3Npb24iLCJlbnJvbGwiLCJmaW5hbGl6ZU1mYVJlc3BvbnNlIiwidW5lbnJvbGwiLCJpbmZvT3JVaWQiLCJtdWx0aUZhY3RvclVzZXJDYWNoZSIsIldlYWtNYXAiLCJ1c2VyTW9kdWxhciIsIlNUT1JBR0VfQVZBSUxBQkxFX0tFWSIsIkJyb3dzZXJQZXJzaXN0ZW5jZUNsYXNzIiwic3RvcmFnZVJldHJpZXZlciIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsIl9pZnJhbWVDYW5ub3RTeW5jV2ViU3RvcmFnZSIsIl9QT0xMSU5HX0lOVEVSVkFMX01TJDEiLCJJRTEwX0xPQ0FMX1NUT1JBR0VfU1lOQ19ERUxBWSIsIkJyb3dzZXJMb2NhbFBlcnNpc3RlbmNlIiwibG9jYWxTdG9yYWdlIiwiZXZlbnQiLCJwb2xsIiwib25TdG9yYWdlRXZlbnQiLCJsaXN0ZW5lcnMiLCJsb2NhbENhY2hlIiwicG9sbFRpbWVyIiwic2FmYXJpTG9jYWxTdG9yYWdlTm90U3luY2VkIiwiZmFsbGJhY2tUb1BvbGxpbmciLCJmb3JBbGxDaGFuZ2VkS2V5cyIsImtleXMiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwia2V5MiIsIl9vbGRWYWx1ZSIsIm5vdGlmeUxpc3RlbmVycyIsImRldGFjaExpc3RlbmVyIiwic3RvcFBvbGxpbmciLCJzdG9yZWRWYWx1ZTIiLCJ0cmlnZ2VyTGlzdGVuZXJzIiwic3RvcmVkVmFsdWUiLCJsaXN0ZW5lciIsImZyb20iLCJzdGFydFBvbGxpbmciLCJzZXRJbnRlcnZhbCIsIlN0b3JhZ2VFdmVudCIsImNsZWFySW50ZXJ2YWwiLCJhdHRhY2hMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaXplIiwiQnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsInNlc3Npb25TdG9yYWdlIiwiX2FsbFNldHRsZWQiLCJwcm9taXNlcyIsImZ1bGZpbGxlZCIsInJlYXNvbiIsIlJlY2VpdmVyIiwiZXZlbnRUYXJnZXQiLCJoYW5kbGVyc01hcCIsImhhbmRsZUV2ZW50IiwiZXhpc3RpbmdJbnN0YW5jZSIsInJlY2VpdmVycyIsInJlY2VpdmVyIiwiaXNMaXN0ZW5pbmd0byIsIm5ld0luc3RhbmNlIiwibWVzc2FnZUV2ZW50IiwiZXZlbnRJZCIsImV2ZW50VHlwZSIsImhhbmRsZXJzIiwicG9ydHMiLCJwb3N0TWVzc2FnZSIsImhhbmRsZXIiLCJvcmlnaW4iLCJfc3Vic2NyaWJlIiwiZXZlbnRIYW5kbGVyIiwiX3Vuc3Vic2NyaWJlIiwiX2dlbmVyYXRlRXZlbnRJZCIsImRpZ2l0cyIsIlNlbmRlciIsInRhcmdldCIsInJlbW92ZU1lc3NhZ2VIYW5kbGVyIiwibWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsIm9uTWVzc2FnZSIsImNsb3NlIiwiX3NlbmQiLCJ0aW1lb3V0IiwiTWVzc2FnZUNoYW5uZWwiLCJjb21wbGV0aW9uVGltZXIiLCJzdGFydCIsImFja1RpbWVyIiwicG9ydDIiLCJmaW5hbGx5IiwiX3dpbmRvdyIsIl9zZXRXaW5kb3dMb2NhdGlvbiIsIl9pc1dvcmtlciIsIl9nZXRBY3RpdmVTZXJ2aWNlV29ya2VyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdHJhdGlvbiIsImFjdGl2ZSIsIl9nZXRTZXJ2aWNlV29ya2VyQ29udHJvbGxlciIsImNvbnRyb2xsZXIiLCJfZ2V0V29ya2VyR2xvYmFsU2NvcGUiLCJEQl9OQU1FIiwiREJfVkVSU0lPTiIsIkRCX09CSkVDVFNUT1JFX05BTUUiLCJEQl9EQVRBX0tFWVBBVEgiLCJEQlByb21pc2UiLCJ0b1Byb21pc2UiLCJnZXRPYmplY3RTdG9yZSIsImRiIiwiaXNSZWFkV3JpdGUiLCJ0cmFuc2FjdGlvbiIsIm9iamVjdFN0b3JlIiwiX2RlbGV0ZURhdGFiYXNlIiwiaW5kZXhlZERCIiwiZGVsZXRlRGF0YWJhc2UiLCJfb3BlbkRhdGFiYXNlIiwib3BlbiIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsIl9wdXRPYmplY3QiLCJwdXQiLCJnZXRPYmplY3QiLCJfZGVsZXRlT2JqZWN0IiwiX1BPTExJTkdfSU5URVJWQUxfTVMiLCJfVFJBTlNBQ1RJT05fUkVUUllfQ09VTlQiLCJJbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwicGVuZGluZ1dyaXRlcyIsInNlbmRlciIsInNlcnZpY2VXb3JrZXJSZWNlaXZlckF2YWlsYWJsZSIsImFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJfd29ya2VySW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiaW5pdGlhbGl6ZVNlcnZpY2VXb3JrZXJNZXNzYWdpbmciLCJfb3BlbkRiIiwiX3dpdGhSZXRyaWVzIiwib3AiLCJudW1BdHRlbXB0cyIsImluaXRpYWxpemVSZWNlaXZlciIsImluaXRpYWxpemVTZW5kZXIiLCJfb3JpZ2luIiwiX3BvbGwiLCJrZXlQcm9jZXNzZWQiLCJfZGF0YSIsInJlc3VsdHMiLCJub3RpZnlTZXJ2aWNlV29ya2VyIiwiX3dpdGhQZW5kaW5nV3JpdGUiLCJ3cml0ZSIsImdldEFsbFJlcXVlc3QiLCJnZXRBbGwiLCJrZXlzSW5SZXN1bHQiLCJmYmFzZV9rZXkiLCJsb2NhbEtleSIsInN0YXJ0U2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblBob25lTWZhIiwiZmluYWxpemVTaWduSW5Ub3RwTWZhIiwiX1NPTFZFX1RJTUVfTVMiLCJfRVhQSVJBVElPTl9USU1FX01TIiwiX1dJREdFVF9JRF9TVEFSVCIsIk1vY2tSZUNhcHRjaGEiLCJjb3VudGVyIiwiX3dpZGdldHMiLCJyZW5kZXIiLCJjb250YWluZXIiLCJwYXJhbWV0ZXJzIiwiTW9ja1dpZGdldCIsInJlc2V0Iiwib3B0V2lkZ2V0SWQiLCJjb250YWluZXJPcklkIiwiZGVsZXRlZCIsInJlc3BvbnNlVG9rZW4iLCJjbGlja0hhbmRsZXIiLCJnZXRFbGVtZW50QnlJZCIsImlzVmlzaWJsZSIsImNoZWNrSWZEZWxldGVkIiwiZ2VuZXJhdGVSYW5kb21BbHBoYU51bWVyaWNTdHJpbmciLCJleHBpcmVkQ2FsbGJhY2siLCJsZW4iLCJjaGFycyIsImFsbG93ZWRDaGFycyIsIl9KU0xPQURfQ0FMTEJBQ0siLCJORVRXT1JLX1RJTUVPVVRfREVMQVkiLCJSZUNhcHRjaGFMb2FkZXJJbXBsIiwiaG9zdExhbmd1YWdlIiwibGlicmFyeVNlcGFyYXRlbHlMb2FkZWQiLCJsb2FkIiwiaGwiLCJpc0hvc3RMYW5ndWFnZVZhbGlkIiwic2hvdWxkUmVzb2x2ZUltbWVkaWF0ZWx5IiwicmVjYXB0Y2hhIiwid2lkZ2V0SWQiLCJvbmxvYWQiLCJjbGVhcmVkT25lSW5zdGFuY2UiLCJNb2NrUmVDYXB0Y2hhTG9hZGVySW1wbCIsIlJFQ0FQVENIQV9WRVJJRklFUl9UWVBFIiwiREVGQVVMVF9QQVJBTVMiLCJ0aGVtZSIsImRlc3Ryb3llZCIsInRva2VuQ2hhbmdlTGlzdGVuZXJzIiwicmVuZGVyUHJvbWlzZSIsImlzSW52aXNpYmxlIiwibWFrZVRva2VuQ2FsbGJhY2siLCJfcmVjYXB0Y2hhTG9hZGVyIiwidmFsaWRhdGVTdGFydGluZ1N0YXRlIiwiYXNzZXJ0Tm90RGVzdHJveWVkIiwiZ2V0QXNzZXJ0ZWRSZWNhcHRjaGEiLCJ0b2tlbkNoYW5nZSIsIm1ha2VSZW5kZXJQcm9taXNlIiwiX3Jlc2V0IiwiY2xlYXIiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJyZW1vdmVDaGlsZCIsInNpdGVrZXkiLCJoYXNDaGlsZE5vZGVzIiwiZXhpc3RpbmciLCJnbG9iYWxGdW5jIiwiaW5pdCIsImd1YXJhbnRlZWRFbXB0eSIsImRvbVJlYWR5IiwiQ29uZmlybWF0aW9uUmVzdWx0SW1wbCIsIm9uQ29uZmlybWF0aW9uIiwiY29uZmlybSIsImF1dGhDcmVkZW50aWFsIiwiYXBwVmVyaWZpZXIiLCJfdmVyaWZ5UGhvbmVOdW1iZXIiLCJyZWNhcHRjaGFUb2tlbiIsInBob25lSW5mb09wdGlvbnMiLCJwaG9uZUVucm9sbG1lbnRJbmZvIiwicGhvbmVTZXNzaW9uSW5mbyIsIm11bHRpRmFjdG9ySGludCIsIm11bHRpRmFjdG9yVWlkIiwicGhvbmVTaWduSW5JbmZvIiwicGhvbmVSZXNwb25zZUluZm8iLCJ2ZXJpZnlQaG9uZU51bWJlciIsInBob25lT3B0aW9ucyIsImFwcGxpY2F0aW9uVmVyaWZpZXIiLCJQSE9ORV9TSUdOX0lOX01FVEhPRCIsIl93aXRoRGVmYXVsdFJlc29sdmVyIiwicmVzb2x2ZXJPdmVycmlkZSIsIklkcENyZWRlbnRpYWwiLCJfYnVpbGRJZHBSZXF1ZXN0Iiwic2Vzc2lvbklkIiwicmV0dXJuSWRwQ3JlZGVudGlhbCIsIl9zaWduSW4iLCJfcmVhdXRoIiwiX2xpbmsiLCJBYnN0cmFjdFBvcHVwUmVkaXJlY3RPcGVyYXRpb24iLCJwZW5kaW5nUHJvbWlzZSIsImV2ZW50TWFuYWdlciIsIm9uRXhlY3V0aW9uIiwicmVnaXN0ZXJDb25zdW1lciIsIm9uQXV0aEV2ZW50IiwidXJsUmVzcG9uc2UiLCJnZXRJZHBUYXNrIiwib25FcnJvciIsInVucmVnaXN0ZXJBbmRDbGVhblVwIiwidW5yZWdpc3RlckNvbnN1bWVyIiwiY2xlYW5VcCIsIl9QT0xMX1dJTkRPV19DTE9TRV9USU1FT1VUIiwicmVzb2x2ZXJJbnRlcm5hbCIsIlBvcHVwT3BlcmF0aW9uIiwiZXhlY3V0ZU5vdE51bGwiLCJhdXRoV2luZG93IiwicG9sbElkIiwiY3VycmVudFBvcHVwQWN0aW9uIiwiY2FuY2VsIiwiX29wZW5Qb3B1cCIsImFzc29jaWF0ZWRFdmVudCIsIl9vcmlnaW5WYWxpZGF0aW9uIiwiX2lzSWZyYW1lV2ViU3RvcmFnZVN1cHBvcnRlZCIsImlzU3VwcG9ydGVkIiwicG9sbFVzZXJDYW5jZWxsYXRpb24iLCJjbG9zZWQiLCJQRU5ESU5HX1JFRElSRUNUX0tFWSIsInJlZGlyZWN0T3V0Y29tZU1hcCIsIlJlZGlyZWN0QWN0aW9uIiwicmVhZHlPdXRjb21lIiwiaGFzUGVuZGluZ1JlZGlyZWN0IiwiX2dldEFuZENsZWFyUGVuZGluZ1JlZGlyZWN0U3RhdHVzIiwicGVuZGluZ1JlZGlyZWN0S2V5IiwicmVzb2x2ZXJQZXJzaXN0ZW5jZSIsIl9zZXRQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJfY2xlYXJSZWRpcmVjdE91dGNvbWVzIiwiX3NpZ25JbldpdGhSZWRpcmVjdCIsIl9vcGVuUmVkaXJlY3QiLCJfcmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJwcmVwYXJlVXNlckZvclJlZGlyZWN0IiwiX2xpbmtXaXRoUmVkaXJlY3QiLCJfZ2V0UmVkaXJlY3RSZXN1bHQiLCJyZXNvbHZlckV4dGVybiIsIkVWRU5UX0RVUExJQ0FUSU9OX0NBQ0hFX0RVUkFUSU9OX01TIiwiQXV0aEV2ZW50TWFuYWdlciIsImNhY2hlZEV2ZW50VWlkcyIsImNvbnN1bWVycyIsInF1ZXVlZFJlZGlyZWN0RXZlbnQiLCJoYXNIYW5kbGVkUG90ZW50aWFsUmVkaXJlY3QiLCJsYXN0UHJvY2Vzc2VkRXZlbnRUaW1lIiwiYXV0aEV2ZW50Q29uc3VtZXIiLCJpc0V2ZW50Rm9yQ29uc3VtZXIiLCJzZW5kVG9Db25zdW1lciIsInNhdmVFdmVudFRvQ2FjaGUiLCJvbkV2ZW50IiwiaGFzRXZlbnRCZWVuSGFuZGxlZCIsImhhbmRsZWQiLCJjb25zdW1lciIsImlzUmVkaXJlY3RFdmVudCIsImlzTnVsbFJlZGlyZWN0RXZlbnQiLCJldmVudElkTWF0Y2hlcyIsImV2ZW50VWlkIiwidiIsIl9nZXRQcm9qZWN0Q29uZmlnIiwiSVBfQUREUkVTU19SRUdFWCIsIkhUVFBfUkVHRVgiLCJfdmFsaWRhdGVPcmlnaW4iLCJhdXRob3JpemVkRG9tYWlucyIsImRvbWFpbiIsIm1hdGNoRG9tYWluIiwiY3VycmVudFVybCIsImhvc3RuYW1lIiwiVVJMIiwiY2VVcmwiLCJlc2NhcGVkRG9tYWluUGF0dGVybiIsIlJlZ0V4cCIsIk5FVFdPUktfVElNRU9VVCIsInJlc2V0VW5sb2FkZWRHYXBpTW9kdWxlcyIsImJlYWNvbiIsIl9fX2pzbCIsIkgiLCJoaW50IiwiciIsIkwiLCJDUCIsImxvYWRHYXBpIiwibG9hZEdhcGlJZnJhbWUiLCJnYXBpIiwiaWZyYW1lcyIsImdldENvbnRleHQiLCJvbnRpbWVvdXQiLCJJZnJhbWUiLCJjYk5hbWUiLCJjYWNoZWRHQXBpTG9hZGVyIiwiX2xvYWRHYXBpIiwiUElOR19USU1FT1VUIiwiSUZSQU1FX1BBVEgiLCJFTVVMQVRFRF9JRlJBTUVfUEFUSCIsIklGUkFNRV9BVFRSSUJVVEVTIiwiaGVpZ2h0IiwidGFiaW5kZXgiLCJFSURfRlJPTV9BUElIT1NUIiwiZ2V0SWZyYW1lVXJsIiwiZWlkIiwiZnciLCJfb3BlbklmcmFtZSIsImNvbnRleHQiLCJnYXBpMiIsIndoZXJlIiwibWVzc2FnZUhhbmRsZXJzRmlsdGVyIiwiQ1JPU1NfT1JJR0lOX0lGUkFNRVNfRklMVEVSIiwiYXR0cmlidXRlcyIsImRvbnRjbGVhciIsImlmcmFtZSIsInJlc3R5bGUiLCJzZXRIaWRlT25MZWF2ZSIsIm5ldHdvcmtFcnJvciIsIm5ldHdvcmtFcnJvclRpbWVyIiwiY2xlYXJUaW1lckFuZFJlc29sdmUiLCJwaW5nIiwiQkFTRV9QT1BVUF9PUFRJT05TIiwicmVzaXphYmxlIiwic3RhdHVzYmFyIiwidG9vbGJhciIsIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIlRBUkdFVF9CTEFOSyIsIkZJUkVGT1hfRU1QVFlfVVJMIiwiQXV0aFBvcHVwIiwid2luZG93MiIsIl9vcGVuIiwic2NyZWVuIiwiYXZhaWxIZWlnaHQiLCJhdmFpbFdpZHRoIiwic2Nyb2xsYmFycyIsIm9wdGlvbnNTdHJpbmciLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjdW0iLCJvcGVuQXNOZXdXaW5kb3dJT1MiLCJuZXdXaW4iLCJmb2N1cyIsImNsaWNrIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJXSURHRVRfUEFUSCIsIkVNVUxBVE9SX1dJREdFVF9QQVRIIiwiRklSRUJBU0VfQVBQX0NIRUNLX0ZSQUdNRU5UX0lEIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX2dldFJlZGlyZWN0VXJsIiwiYXV0aFR5cGUiLCJyZWRpcmVjdFVybCIsImFkZGl0aW9uYWxQYXJhbXMiLCJpc0VtcHR5IiwidGlkIiwicGFyYW1zRGljdCIsImFwcENoZWNrVG9rZW5GcmFnbWVudCIsImdldEhhbmRsZXJCYXNlIiwiV0VCX1NUT1JBR0VfU1VQUE9SVF9LRVkiLCJCcm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiZXZlbnRNYW5hZ2VycyIsIm9yaWdpblZhbGlkYXRpb25Qcm9taXNlcyIsInByb21pc2UyIiwiaW5pdEFuZEdldE1hbmFnZXIiLCJyZWdpc3RlciIsImlmcmFtZUV2ZW50IiwiYXV0aEV2ZW50Iiwic2VuZCIsIk11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9maW5hbGl6ZUVucm9sbCIsIl9maW5hbGl6ZVNpZ25JbiIsIlBob25lTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2Zyb21DcmVkZW50aWFsIiwicGhvbmVWZXJpZmljYXRpb25JbmZvIiwiRkFDVE9SX0lEIiwiYXNzZXJ0aW9uRm9yRW5yb2xsbWVudCIsIm9uZVRpbWVQYXNzd29yZCIsIlRvdHBNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbVNlY3JldCIsImFzc2VydGlvbkZvclNpZ25JbiIsImVucm9sbG1lbnRJZCIsIl9mcm9tRW5yb2xsbWVudElkIiwiZ2VuZXJhdGVTZWNyZXQiLCJtZmFTZXNzaW9uIiwidG90cEVucm9sbG1lbnRJbmZvIiwiX2Zyb21TdGFydFRvdHBNZmFFbnJvbGxtZW50UmVzcG9uc2UiLCJvdHAiLCJ0b3RwVmVyaWZpY2F0aW9uSW5mbyIsIl9tYWtlVG90cFZlcmlmaWNhdGlvbkluZm8iLCJzZWNyZXRLZXkiLCJoYXNoaW5nQWxnb3JpdGhtIiwiY29kZUxlbmd0aCIsImNvZGVJbnRlcnZhbFNlY29uZHMiLCJlbnJvbGxtZW50Q29tcGxldGlvbkRlYWRsaW5lIiwidG90cFNlc3Npb25JbmZvIiwic2hhcmVkU2VjcmV0S2V5IiwidmVyaWZpY2F0aW9uQ29kZUxlbmd0aCIsInBlcmlvZFNlYyIsImZpbmFsaXplRW5yb2xsbWVudFRpbWUiLCJnZW5lcmF0ZVFyQ29kZVVybCIsImFjY291bnROYW1lIiwiaXNzdWVyIiwidXNlRGVmYXVsdHMiLCJfaXNFbXB0eVN0cmluZyIsImlucHV0IiwiQXV0aEludGVyb3AiLCJpbnRlcm5hbExpc3RlbmVycyIsImdldFVpZCIsImFzc2VydEF1dGhDb25maWd1cmVkIiwiYWRkQXV0aFRva2VuTGlzdGVuZXIiLCJ1cGRhdGVQcm9hY3RpdmVSZWZyZXNoIiwicmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIiLCJnZXRWZXJzaW9uRm9yUGxhdGZvcm0iLCJyZWdpc3RlckF1dGgiLCJfcmVnaXN0ZXJDb21wb25lbnQiLCJpbXBvcnRfY29tcG9uZW50IiwiQ29tcG9uZW50IiwiZ2V0UHJvdmlkZXIiLCJzZXRJbnN0YW50aWF0aW9uTW9kZSIsInNldEluc3RhbmNlQ3JlYXRlZENhbGxiYWNrIiwiX2luc3RhbmNlSWRlbnRpZmllciIsIl9pbnN0YW5jZSIsImF1dGhJbnRlcm5hbFByb3ZpZGVyIiwicmVnaXN0ZXJWZXJzaW9uIiwiREVGQVVMVF9JRF9UT0tFTl9NQVhfQUdFIiwiYXV0aElkVG9rZW5NYXhBZ2UiLCJnZXRFeHBlcmltZW50YWxTZXR0aW5nIiwibGFzdFBvc3RlZElkVG9rZW4iLCJtaW50Q29va2llRmFjdG9yeSIsImlkVG9rZW5SZXN1bHQiLCJpZFRva2VuQWdlIiwiZ2V0QXBwIiwiYXV0aFRva2VuU3luY1BhdGgiLCJpc1NlY3VyZUNvbnRleHQiLCJhdXRoVG9rZW5TeW5jVXJsIiwibWludENvb2tpZSIsImF1dGhFbXVsYXRvckhvc3QiLCJnZXREZWZhdWx0RW11bGF0b3JIb3N0IiwiZ2V0U2NyaXB0UGFyZW50RWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0QXR0cmlidXRlIiwib25lcnJvciIsImNoYXJzZXQiLCJpbXBvcnRfYXBwMiIsInJlcXVpcmUiLCJpbXBvcnRfdXRpbDIiLCJpbXBvcnRfbG9nZ2VyMiIsImltcG9ydF90c2xpYjIiLCJpbXBvcnRfY29tcG9uZW50MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQywwQ0FBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxpQkFB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