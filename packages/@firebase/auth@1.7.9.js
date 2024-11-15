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

// .beyond/uimport/@firebase/auth.1.7.9.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXV0aC4xLjcuOS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbW9kZWwvZW51bV9tYXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Fzc2VydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvY2F0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbmF2aWdhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZGVsYXkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2ZldGNoX3Byb3ZpZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9hY2NvdW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2lkX3Rva2VuX3Jlc3VsdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2ludmFsaWRhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Byb2FjdGl2ZV9yZWZyZXNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9tZXRhZGF0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlbG9hZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdG9rZW5fbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2luc3RhbnRpYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbl9tZW1vcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvcGVyc2lzdGVuY2VfdXNlcl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcGFzc3dvcmRfcG9saWN5L2dldF9wYXNzd29yZF9wb2xpY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9wYXNzd29yZF9wb2xpY3lfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9sb2FkX2pzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfZW50ZXJwcmlzZV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2luaXRpYWxpemUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9hdXRoX2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Ntcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hY3Rpb25fY29kZV91cmwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mZWRlcmF0ZWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mYWNlYm9vay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ29vZ2xlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9naXRodWIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvdHdpdHRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3NpZ25fdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX2NyZWRlbnRpYWxfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fub255bW91cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9lcnJvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Byb3ZpZGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2xpbmtfdW5saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVhdXRoZW50aWNhdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hY3Rpb25fY29kZV9zZXR0aW5ncy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jcmVhdGVfYXV0aF91cmkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9wcm9maWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWNjb3VudF9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWRkaXRpb25hbF91c2VyX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfc2Vzc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfdXNlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2xvY2FsX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2Uvc2Vzc2lvbl9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3Byb21pc2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcmVjZWl2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9ldmVudF9pZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9zZW5kZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvYXV0aF93aW5kb3cudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC93b3JrZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvaW5kZXhlZF9kYi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX21vY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9sb2FkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3Byb3ZpZGVycy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWJzdHJhY3RfcG9wdXBfcmVkaXJlY3Rfb3BlcmF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9ldmVudF9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcHJvamVjdF9jb25maWcvZ2V0X3Byb2plY3RfY29uZmlnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmFsaWRhdGVfb3JpZ2luLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9nYXBpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9pZnJhbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2hhbmRsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcG9wdXBfcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfYXNzZXJ0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21mYS9hc3NlcnRpb25zL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvYXNzZXJ0aW9ucy90b3RwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZmlyZWJhc2VfaW50ZXJuYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9yZWdpc3Rlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9kaXN0L2VzbTIwMTcvaW5kZXguanMiXSwibmFtZXMiOlsiYXV0aF8xXzdfOV9leHBvcnRzIiwiX19leHBvcnQiLCJBY3Rpb25Db2RlT3BlcmF0aW9uIiwiQWN0aW9uQ29kZVVSTCIsIkF1dGhDcmVkZW50aWFsIiwiQXV0aEVycm9yQ29kZXMiLCJBVVRIX0VSUk9SX0NPREVTX01BUF9ET19OT1RfVVNFX0lOVEVSTkFMTFkiLCJFbWFpbEF1dGhDcmVkZW50aWFsIiwiRW1haWxBdXRoUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsIkZhY3RvcklkIiwiR2l0aHViQXV0aFByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiT0F1dGhDcmVkZW50aWFsIiwiT0F1dGhQcm92aWRlciIsIk9wZXJhdGlvblR5cGUiLCJQaG9uZUF1dGhDcmVkZW50aWFsIiwiUGhvbmVBdXRoUHJvdmlkZXIiLCJQaG9uZU11bHRpRmFjdG9yR2VuZXJhdG9yIiwiUHJvdmlkZXJJZCIsIlJlY2FwdGNoYVZlcmlmaWVyIiwiU0FNTEF1dGhQcm92aWRlciIsIlNpZ25Jbk1ldGhvZCIsIlRvdHBNdWx0aUZhY3RvckdlbmVyYXRvciIsIlRvdHBTZWNyZXQiLCJUd2l0dGVyQXV0aFByb3ZpZGVyIiwiYXBwbHlBY3Rpb25Db2RlIiwiYmVmb3JlQXV0aFN0YXRlQ2hhbmdlZCIsImJyb3dzZXJMb2NhbFBlcnNpc3RlbmNlIiwiYnJvd3NlclBvcHVwUmVkaXJlY3RSZXNvbHZlciIsImJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UiLCJjaGVja0FjdGlvbkNvZGUiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImNvbm5lY3RBdXRoRW11bGF0b3IiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkZWJ1Z0Vycm9yTWFwIiwiZGVsZXRlVXNlciIsImZldGNoU2lnbkluTWV0aG9kc0ZvckVtYWlsIiwiZ2V0QWRkaXRpb25hbFVzZXJJbmZvIiwiZ2V0QXV0aCIsImdldElkVG9rZW4iLCJnZXRJZFRva2VuUmVzdWx0IiwiZ2V0TXVsdGlGYWN0b3JSZXNvbHZlciIsImdldFJlZGlyZWN0UmVzdWx0IiwiaW5NZW1vcnlQZXJzaXN0ZW5jZSIsImluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJpbml0aWFsaXplQXV0aCIsImluaXRpYWxpemVSZWNhcHRjaGFDb25maWciLCJpc1NpZ25JbldpdGhFbWFpbExpbmsiLCJsaW5rV2l0aENyZWRlbnRpYWwiLCJsaW5rV2l0aFBob25lTnVtYmVyIiwibGlua1dpdGhQb3B1cCIsImxpbmtXaXRoUmVkaXJlY3QiLCJtdWx0aUZhY3RvciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIm9uSWRUb2tlbkNoYW5nZWQiLCJwYXJzZUFjdGlvbkNvZGVVUkwiLCJwcm9kRXJyb3JNYXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsIiwicmVhdXRoZW50aWNhdGVXaXRoUGhvbmVOdW1iZXIiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQb3B1cCIsInJlYXV0aGVudGljYXRlV2l0aFJlZGlyZWN0IiwicmVsb2FkIiwicmV2b2tlQWNjZXNzVG9rZW4iLCJzZW5kRW1haWxWZXJpZmljYXRpb24iLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsIiwic2V0UGVyc2lzdGVuY2UiLCJzaWduSW5Bbm9ueW1vdXNseSIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxMaW5rIiwic2lnbkluV2l0aFBob25lTnVtYmVyIiwic2lnbkluV2l0aFBvcHVwIiwic2lnbkluV2l0aFJlZGlyZWN0Iiwic2lnbk91dCIsInVubGluayIsInVwZGF0ZUN1cnJlbnRVc2VyIiwidXBkYXRlRW1haWwiLCJ1cGRhdGVQYXNzd29yZCIsInVwZGF0ZVBob25lTnVtYmVyIiwidXBkYXRlUHJvZmlsZSIsInVzZURldmljZUxhbmd1YWdlIiwidmFsaWRhdGVQYXNzd29yZCIsInZlcmlmeUJlZm9yZVVwZGF0ZUVtYWlsIiwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUEhPTkUiLCJUT1RQIiwiRkFDRUJPT0siLCJHSVRIVUIiLCJHT09HTEUiLCJQQVNTV09SRCIsIlRXSVRURVIiLCJFTUFJTF9MSU5LIiwiRU1BSUxfUEFTU1dPUkQiLCJMSU5LIiwiUkVBVVRIRU5USUNBVEUiLCJTSUdOX0lOIiwiRU1BSUxfU0lHTklOIiwiUEFTU1dPUkRfUkVTRVQiLCJSRUNPVkVSX0VNQUlMIiwiUkVWRVJUX1NFQ09ORF9GQUNUT1JfQURESVRJT04iLCJWRVJJRllfQU5EX0NIQU5HRV9FTUFJTCIsIlZFUklGWV9FTUFJTCIsIl9kZWJ1Z0Vycm9yTWFwIiwiX3Byb2RFcnJvck1hcCIsIl9ERUZBVUxUX0FVVEhfRVJST1JfRkFDVE9SWSIsImltcG9ydF91dGlsIiwiRXJyb3JGYWN0b3J5IiwiQURNSU5fT05MWV9PUEVSQVRJT04iLCJBUkdVTUVOVF9FUlJPUiIsIkFQUF9OT1RfQVVUSE9SSVpFRCIsIkFQUF9OT1RfSU5TVEFMTEVEIiwiQ0FQVENIQV9DSEVDS19GQUlMRUQiLCJDT0RFX0VYUElSRUQiLCJDT1JET1ZBX05PVF9SRUFEWSIsIkNPUlNfVU5TVVBQT1JURUQiLCJDUkVERU5USUFMX0FMUkVBRFlfSU5fVVNFIiwiQ1JFREVOVElBTF9NSVNNQVRDSCIsIkNSRURFTlRJQUxfVE9PX09MRF9MT0dJTl9BR0FJTiIsIkRFUEVOREVOVF9TREtfSU5JVF9CRUZPUkVfQVVUSCIsIkRZTkFNSUNfTElOS19OT1RfQUNUSVZBVEVEIiwiRU1BSUxfQ0hBTkdFX05FRURTX1ZFUklGSUNBVElPTiIsIkVNQUlMX0VYSVNUUyIsIkVNVUxBVE9SX0NPTkZJR19GQUlMRUQiLCJFWFBJUkVEX09PQl9DT0RFIiwiRVhQSVJFRF9QT1BVUF9SRVFVRVNUIiwiSU5URVJOQUxfRVJST1IiLCJJTlZBTElEX0FQSV9LRVkiLCJJTlZBTElEX0FQUF9DUkVERU5USUFMIiwiSU5WQUxJRF9BUFBfSUQiLCJJTlZBTElEX0FVVEgiLCJJTlZBTElEX0FVVEhfRVZFTlQiLCJJTlZBTElEX0NFUlRfSEFTSCIsIklOVkFMSURfQ09ERSIsIklOVkFMSURfQ09OVElOVUVfVVJJIiwiSU5WQUxJRF9DT1JET1ZBX0NPTkZJR1VSQVRJT04iLCJJTlZBTElEX0NVU1RPTV9UT0tFTiIsIklOVkFMSURfRFlOQU1JQ19MSU5LX0RPTUFJTiIsIklOVkFMSURfRU1BSUwiLCJJTlZBTElEX0VNVUxBVE9SX1NDSEVNRSIsIklOVkFMSURfSURQX1JFU1BPTlNFIiwiSU5WQUxJRF9MT0dJTl9DUkVERU5USUFMUyIsIklOVkFMSURfTUVTU0FHRV9QQVlMT0FEIiwiSU5WQUxJRF9NRkFfU0VTU0lPTiIsIklOVkFMSURfT0FVVEhfQ0xJRU5UX0lEIiwiSU5WQUxJRF9PQVVUSF9QUk9WSURFUiIsIklOVkFMSURfT09CX0NPREUiLCJJTlZBTElEX09SSUdJTiIsIklOVkFMSURfUEFTU1dPUkQiLCJJTlZBTElEX1BFUlNJU1RFTkNFIiwiSU5WQUxJRF9QSE9ORV9OVU1CRVIiLCJJTlZBTElEX1BST1ZJREVSX0lEIiwiSU5WQUxJRF9SRUNJUElFTlRfRU1BSUwiLCJJTlZBTElEX1NFTkRFUiIsIklOVkFMSURfU0VTU0lPTl9JTkZPIiwiSU5WQUxJRF9URU5BTlRfSUQiLCJNRkFfSU5GT19OT1RfRk9VTkQiLCJNRkFfUkVRVUlSRUQiLCJNSVNTSU5HX0FORFJPSURfUEFDS0FHRV9OQU1FIiwiTUlTU0lOR19BUFBfQ1JFREVOVElBTCIsIk1JU1NJTkdfQVVUSF9ET01BSU4iLCJNSVNTSU5HX0NPREUiLCJNSVNTSU5HX0NPTlRJTlVFX1VSSSIsIk1JU1NJTkdfSUZSQU1FX1NUQVJUIiwiTUlTU0lOR19JT1NfQlVORExFX0lEIiwiTUlTU0lOR19PUl9JTlZBTElEX05PTkNFIiwiTUlTU0lOR19NRkFfSU5GTyIsIk1JU1NJTkdfTUZBX1NFU1NJT04iLCJNSVNTSU5HX1BIT05FX05VTUJFUiIsIk1JU1NJTkdfU0VTU0lPTl9JTkZPIiwiTU9EVUxFX0RFU1RST1lFRCIsIk5FRURfQ09ORklSTUFUSU9OIiwiTkVUV09SS19SRVFVRVNUX0ZBSUxFRCIsIk5VTExfVVNFUiIsIk5PX0FVVEhfRVZFTlQiLCJOT19TVUNIX1BST1ZJREVSIiwiT1BFUkFUSU9OX05PVF9BTExPV0VEIiwiT1BFUkFUSU9OX05PVF9TVVBQT1JURUQiLCJQT1BVUF9CTE9DS0VEIiwiUE9QVVBfQ0xPU0VEX0JZX1VTRVIiLCJQUk9WSURFUl9BTFJFQURZX0xJTktFRCIsIlFVT1RBX0VYQ0VFREVEIiwiUkVESVJFQ1RfQ0FOQ0VMTEVEX0JZX1VTRVIiLCJSRURJUkVDVF9PUEVSQVRJT05fUEVORElORyIsIlJFSkVDVEVEX0NSRURFTlRJQUwiLCJTRUNPTkRfRkFDVE9SX0FMUkVBRFlfRU5ST0xMRUQiLCJTRUNPTkRfRkFDVE9SX0xJTUlUX0VYQ0VFREVEIiwiVEVOQU5UX0lEX01JU01BVENIIiwiVElNRU9VVCIsIlRPS0VOX0VYUElSRUQiLCJUT09fTUFOWV9BVFRFTVBUU19UUllfTEFURVIiLCJVTkFVVEhPUklaRURfRE9NQUlOIiwiVU5TVVBQT1JURURfRklSU1RfRkFDVE9SIiwiVU5TVVBQT1JURURfUEVSU0lTVEVOQ0UiLCJVTlNVUFBPUlRFRF9URU5BTlRfT1BFUkFUSU9OIiwiVU5WRVJJRklFRF9FTUFJTCIsIlVTRVJfQ0FOQ0VMTEVEIiwiVVNFUl9ERUxFVEVEIiwiVVNFUl9ESVNBQkxFRCIsIlVTRVJfTUlTTUFUQ0giLCJVU0VSX1NJR05FRF9PVVQiLCJXRUFLX1BBU1NXT1JEIiwiV0VCX1NUT1JBR0VfVU5TVVBQT1JURUQiLCJBTFJFQURZX0lOSVRJQUxJWkVEIiwiUkVDQVBUQ0hBX05PVF9FTkFCTEVEIiwiTUlTU0lOR19SRUNBUFRDSEFfVE9LRU4iLCJJTlZBTElEX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX0FDVElPTiIsIk1JU1NJTkdfQ0xJRU5UX1RZUEUiLCJNSVNTSU5HX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRUNBUFRDSEFfVkVSU0lPTiIsIklOVkFMSURfUkVRX1RZUEUiLCJsb2dDbGllbnQiLCJpbXBvcnRfbG9nZ2VyIiwiTG9nZ2VyIiwiX2xvZ1dhcm4iLCJtc2ciLCJhcmdzIiwibG9nTGV2ZWwiLCJMb2dMZXZlbCIsIldBUk4iLCJ3YXJuIiwiaW1wb3J0X2FwcCIsIlNES19WRVJTSU9OIiwiX2xvZ0Vycm9yIiwiRVJST1IiLCJlcnJvciIsIl9mYWlsIiwiYXV0aE9yQ29kZSIsInJlc3QiLCJjcmVhdGVFcnJvckludGVybmFsIiwiX2NyZWF0ZUVycm9yIiwiX2Vycm9yV2l0aEN1c3RvbU1lc3NhZ2UiLCJhdXRoIiwiY29kZSIsIm1lc3NhZ2UiLCJlcnJvck1hcCIsIk9iamVjdCIsImFzc2lnbiIsImZhY3RvcnkiLCJjcmVhdGUiLCJhcHBOYW1lIiwibmFtZSIsIl9zZXJ2ZXJBcHBDdXJyZW50VXNlck9wZXJhdGlvbk5vdFN1cHBvcnRlZEVycm9yIiwiX2Fzc2VydEluc3RhbmNlT2YiLCJvYmplY3QiLCJpbnN0YW5jZSIsImNvbnN0cnVjdG9ySW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsImZ1bGxQYXJhbXMiLCJzbGljZSIsIl9lcnJvckZhY3RvcnkiLCJfYXNzZXJ0IiwiYXNzZXJ0aW9uIiwiZGVidWdGYWlsIiwiZmFpbHVyZSIsIkVycm9yIiwiZGVidWdBc3NlcnQiLCJfZ2V0Q3VycmVudFVybCIsInNlbGYiLCJfYSIsImxvY2F0aW9uIiwiaHJlZiIsIl9pc0h0dHBPckh0dHBzIiwiX2dldEN1cnJlbnRTY2hlbWUiLCJwcm90b2NvbCIsIl9pc09ubGluZSIsIm5hdmlnYXRvciIsIm9uTGluZSIsImlzQnJvd3NlckV4dGVuc2lvbiIsIl9nZXRVc2VyTGFuZ3VhZ2UiLCJuYXZpZ2F0b3JMYW5ndWFnZSIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiRGVsYXkiLCJzaG9ydERlbGF5IiwibG9uZ0RlbGF5IiwiaXNNb2JpbGUiLCJpc01vYmlsZUNvcmRvdmEiLCJpc1JlYWN0TmF0aXZlIiwiZ2V0IiwiTWF0aCIsIm1pbiIsIl9lbXVsYXRvclVybCIsImNvbmZpZyIsInBhdGgiLCJlbXVsYXRvciIsInVybCIsInN0YXJ0c1dpdGgiLCJGZXRjaFByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsImZldGNoSW1wbCIsImhlYWRlcnNJbXBsIiwicmVzcG9uc2VJbXBsIiwiZmV0Y2giLCJnbG9iYWxUaGlzIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJyZXNwb25zZSIsIlJlc3BvbnNlIiwiU0VSVkVSX0VSUk9SX01BUCIsIkRFRkFVTFRfQVBJX1RJTUVPVVRfTVMiLCJfYWRkVGlkSWZOZWNlc3NhcnkiLCJyZXF1ZXN0IiwidGVuYW50SWQiLCJfcGVyZm9ybUFwaVJlcXVlc3QiLCJtZXRob2QiLCJjdXN0b21FcnJvck1hcCIsIl9wZXJmb3JtRmV0Y2hXaXRoRXJyb3JIYW5kbGluZyIsImJvZHkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJxdWVyeXN0cmluZyIsImtleSIsImFwaUtleSIsIl9nZXRBZGRpdGlvbmFsSGVhZGVycyIsImxhbmd1YWdlQ29kZSIsImZldGNoQXJncyIsImlzQ2xvdWRmbGFyZVdvcmtlciIsInJlZmVycmVyUG9saWN5IiwiX2dldEZpbmFsVGFyZ2V0IiwiYXBpSG9zdCIsImZldGNoRm4iLCJfY2FuSW5pdEVtdWxhdG9yIiwibmV0d29ya1RpbWVvdXQiLCJOZXR3b3JrVGltZW91dCIsIlByb21pc2UiLCJyYWNlIiwicHJvbWlzZSIsImNsZWFyTmV0d29ya1RpbWVvdXQiLCJqc29uIiwiX21ha2VUYWdnZWRFcnJvciIsIm9rIiwiZXJyb3JNZXNzYWdlIiwic2VydmVyRXJyb3JDb2RlIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic3BsaXQiLCJhdXRoRXJyb3IiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJlIiwiRmlyZWJhc2VFcnJvciIsIlN0cmluZyIsIl9wZXJmb3JtU2lnbkluUmVxdWVzdCIsInNlcnZlclJlc3BvbnNlIiwiX3NlcnZlclJlc3BvbnNlIiwiaG9zdCIsImJhc2UiLCJhcGlTY2hlbWUiLCJfcGFyc2VFbmZvcmNlbWVudFN0YXRlIiwiZW5mb3JjZW1lbnRTdGF0ZVN0ciIsInRpbWVyIiwiXyIsInJlamVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJlcnJvclBhcmFtcyIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJjdXN0b21EYXRhIiwiX3Rva2VuUmVzcG9uc2UiLCJpc1YyIiwiZ3JlY2FwdGNoYSIsImdldFJlc3BvbnNlIiwiaXNFbnRlcnByaXNlIiwiZW50ZXJwcmlzZSIsIlJlY2FwdGNoYUNvbmZpZyIsInNpdGVLZXkiLCJyZWNhcHRjaGFFbmZvcmNlbWVudFN0YXRlIiwicmVjYXB0Y2hhS2V5IiwiZ2V0UHJvdmlkZXJFbmZvcmNlbWVudFN0YXRlIiwicHJvdmlkZXJTdHIiLCJsZW5ndGgiLCJwcm92aWRlciIsImVuZm9yY2VtZW50U3RhdGUiLCJpc1Byb3ZpZGVyRW5hYmxlZCIsImdldFJlY2FwdGNoYVBhcmFtcyIsInJlY2FwdGNoYVNpdGVLZXkiLCJnZXRSZWNhcHRjaGFDb25maWciLCJkZWxldGVBY2NvdW50IiwiZGVsZXRlTGlua2VkQWNjb3VudHMiLCJnZXRBY2NvdW50SW5mbyIsInV0Y1RpbWVzdGFtcFRvRGF0ZVN0cmluZyIsInV0Y1RpbWVzdGFtcCIsImRhdGUiLCJEYXRlIiwiTnVtYmVyIiwiaXNOYU4iLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJ1c2VyIiwiZm9yY2VSZWZyZXNoIiwiZ2V0TW9kdWxhckluc3RhbmNlIiwidXNlckludGVybmFsIiwidG9rZW4iLCJjbGFpbXMiLCJfcGFyc2VUb2tlbiIsImV4cCIsImF1dGhfdGltZSIsImlhdCIsImZpcmViYXNlIiwic2lnbkluUHJvdmlkZXIiLCJhdXRoVGltZSIsInNlY29uZHNTdHJpbmdUb01pbGxpc2Vjb25kcyIsImlzc3VlZEF0VGltZSIsImV4cGlyYXRpb25UaW1lIiwic2lnbkluU2Vjb25kRmFjdG9yIiwic2Vjb25kcyIsImFsZ29yaXRobSIsInBheWxvYWQiLCJzaWduYXR1cmUiLCJkZWNvZGVkIiwiYmFzZTY0RGVjb2RlIiwicGFyc2UiLCJ0b1N0cmluZyIsIl90b2tlbkV4cGlyZXNJbiIsInBhcnNlZFRva2VuIiwiX2xvZ291dElmSW52YWxpZGF0ZWQiLCJieXBhc3NBdXRoU3RhdGUiLCJpc1VzZXJJbnZhbGlkYXRlZCIsImN1cnJlbnRVc2VyIiwiUHJvYWN0aXZlUmVmcmVzaCIsImlzUnVubmluZyIsInRpbWVySWQiLCJlcnJvckJhY2tvZmYiLCJfc3RhcnQiLCJzY2hlZHVsZSIsIl9zdG9wIiwiZ2V0SW50ZXJ2YWwiLCJ3YXNFcnJvciIsImludGVydmFsIiwiZXhwVGltZSIsInN0c1Rva2VuTWFuYWdlciIsIm5vdyIsIm1heCIsIml0ZXJhdGlvbiIsIlVzZXJNZXRhZGF0YSIsImNyZWF0ZWRBdCIsImxhc3RMb2dpbkF0IiwiX2luaXRpYWxpemVUaW1lIiwibGFzdFNpZ25JblRpbWUiLCJjcmVhdGlvblRpbWUiLCJfY29weSIsIm1ldGFkYXRhIiwidG9KU09OIiwiX3JlbG9hZFdpdGhvdXRTYXZpbmciLCJpZFRva2VuIiwidXNlcnMiLCJjb3JlQWNjb3VudCIsIl9ub3RpZnlSZWxvYWRMaXN0ZW5lciIsIm5ld1Byb3ZpZGVyRGF0YSIsInByb3ZpZGVyVXNlckluZm8iLCJleHRyYWN0UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJEYXRhIiwibWVyZ2VQcm92aWRlckRhdGEiLCJvbGRJc0Fub255bW91cyIsImlzQW5vbnltb3VzIiwibmV3SXNBbm9ueW1vdXMiLCJwYXNzd29yZEhhc2giLCJ1cGRhdGVzIiwidWlkIiwibG9jYWxJZCIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJwaG90b1VybCIsImVtYWlsVmVyaWZpZWQiLCJfcGVyc2lzdFVzZXJJZkN1cnJlbnQiLCJfbm90aWZ5TGlzdGVuZXJzSWZDdXJyZW50Iiwib3JpZ2luYWwiLCJuZXdEYXRhIiwiZGVkdXBlZCIsImZpbHRlciIsIm8iLCJzb21lIiwibiIsInByb3ZpZGVySWQiLCJwcm92aWRlcnMiLCJtYXAiLCJpbXBvcnRfdHNsaWIiLCJfX3Jlc3QiLCJyYXdJZCIsInJlcXVlc3RTdHNUb2tlbiIsInJlZnJlc2hUb2tlbiIsInRva2VuQXBpSG9zdCIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlc0luIiwiZXhwaXJlc19pbiIsInJlZnJlc2hfdG9rZW4iLCJyZXZva2VUb2tlbiIsIlN0c1Rva2VuTWFuYWdlciIsImlzRXhwaXJlZCIsInVwZGF0ZUZyb21TZXJ2ZXJSZXNwb25zZSIsInVwZGF0ZVRva2Vuc0FuZEV4cGlyYXRpb24iLCJ1cGRhdGVGcm9tSWRUb2tlbiIsImdldFRva2VuIiwicmVmcmVzaCIsImNsZWFyUmVmcmVzaFRva2VuIiwib2xkVG9rZW4iLCJleHBpcmVzSW5TZWMiLCJmcm9tSlNPTiIsIm1hbmFnZXIiLCJfYXNzaWduIiwiX2Nsb25lIiwiX3BlcmZvcm1SZWZyZXNoIiwiYXNzZXJ0U3RyaW5nT3JVbmRlZmluZWQiLCJVc2VySW1wbCIsIm9wdCIsInByb2FjdGl2ZVJlZnJlc2giLCJyZWxvYWRVc2VySW5mbyIsInJlbG9hZExpc3RlbmVyIiwidXNlckluZm8iLCJuZXdVc2VyIiwiX29uUmVsb2FkIiwiY2FsbGJhY2siLCJfc3RhcnRQcm9hY3RpdmVSZWZyZXNoIiwiX3N0b3BQcm9hY3RpdmVSZWZyZXNoIiwiX3VwZGF0ZVRva2Vuc0lmTmVjZXNzYXJ5IiwicmVsb2FkMiIsInRva2Vuc1JlZnJlc2hlZCIsImRlbGV0ZSIsIl9pc0ZpcmViYXNlU2VydmVyQXBwIiwiYXBwIiwiX3JlZGlyZWN0RXZlbnRJZCIsIl9mcm9tSlNPTiIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiX2YiLCJfZyIsIl9oIiwicGxhaW5PYmplY3RUb2tlbk1hbmFnZXIiLCJBcnJheSIsImlzQXJyYXkiLCJfZnJvbUlkVG9rZW5SZXNwb25zZSIsImlkVG9rZW5SZXNwb25zZSIsIl9mcm9tR2V0QWNjb3VudEluZm9SZXNwb25zZSIsImluc3RhbmNlQ2FjaGUiLCJNYXAiLCJfZ2V0SW5zdGFuY2UiLCJjbHMiLCJGdW5jdGlvbiIsInNldCIsIkluTWVtb3J5UGVyc2lzdGVuY2UiLCJ0eXBlIiwic3RvcmFnZSIsIl9pc0F2YWlsYWJsZSIsIl9zZXQiLCJ2YWx1ZSIsIl9nZXQiLCJfcmVtb3ZlIiwiX2FkZExpc3RlbmVyIiwiX2tleSIsIl9saXN0ZW5lciIsIl9yZW1vdmVMaXN0ZW5lciIsIl9wZXJzaXN0ZW5jZUtleU5hbWUiLCJQZXJzaXN0ZW5jZVVzZXJNYW5hZ2VyIiwicGVyc2lzdGVuY2UiLCJ1c2VyS2V5IiwibmFtZTIiLCJmdWxsVXNlcktleSIsImZ1bGxQZXJzaXN0ZW5jZUtleSIsImJvdW5kRXZlbnRIYW5kbGVyIiwiX29uU3RvcmFnZUV2ZW50IiwiYmluZCIsInNldEN1cnJlbnRVc2VyIiwiZ2V0Q3VycmVudFVzZXIiLCJibG9iIiwicmVtb3ZlQ3VycmVudFVzZXIiLCJzYXZlUGVyc2lzdGVuY2VGb3JSZWRpcmVjdCIsIm5ld1BlcnNpc3RlbmNlIiwicGVyc2lzdGVuY2VIaWVyYXJjaHkiLCJhdmFpbGFibGVQZXJzaXN0ZW5jZXMiLCJhbGwiLCJzZWxlY3RlZFBlcnNpc3RlbmNlIiwidXNlclRvTWlncmF0ZSIsIm1pZ3JhdGlvbkhpZXJhcmNoeSIsInAiLCJfc2hvdWxkQWxsb3dNaWdyYXRpb24iLCJfZ2V0QnJvd3Nlck5hbWUiLCJ1c2VyQWdlbnQiLCJ1YSIsImluY2x1ZGVzIiwiX2lzSUVNb2JpbGUiLCJfaXNGaXJlZm94IiwiX2lzQmxhY2tCZXJyeSIsIl9pc1dlYk9TIiwiX2lzU2FmYXJpIiwiX2lzQ2hyb21lSU9TIiwiX2lzQW5kcm9pZCIsInJlIiwibWF0Y2hlcyIsIm1hdGNoIiwiZ2V0VUEiLCJ0ZXN0IiwiX2lzSU9TIiwiX2lzSU9TN09yOCIsIl9pc0lPU1N0YW5kYWxvbmUiLCJ3aW5kb3ciLCJzdGFuZGFsb25lIiwiX2lzSUUxMCIsImlzSUUiLCJkb2N1bWVudCIsImRvY3VtZW50TW9kZSIsIl9pc01vYmlsZUJyb3dzZXIiLCJfZ2V0Q2xpZW50VmVyc2lvbiIsImNsaWVudFBsYXRmb3JtIiwiZnJhbWV3b3JrcyIsInJlcG9ydGVkUGxhdGZvcm0iLCJyZXBvcnRlZEZyYW1ld29ya3MiLCJqb2luIiwiQXV0aE1pZGRsZXdhcmVRdWV1ZSIsInF1ZXVlIiwicHVzaENhbGxiYWNrIiwib25BYm9ydCIsIndyYXBwZWRDYWxsYmFjayIsInJlc29sdmUiLCJyZXN1bHQiLCJwdXNoIiwiaW5kZXgiLCJydW5NaWRkbGV3YXJlIiwibmV4dFVzZXIiLCJvbkFib3J0U3RhY2siLCJiZWZvcmVTdGF0ZUNhbGxiYWNrIiwicmV2ZXJzZSIsIm9yaWdpbmFsTWVzc2FnZSIsIl9nZXRQYXNzd29yZFBvbGljeSIsIk1JTklNVU1fTUlOX1BBU1NXT1JEX0xFTkdUSCIsIlBhc3N3b3JkUG9saWN5SW1wbCIsInJlc3BvbnNlT3B0aW9ucyIsImN1c3RvbVN0cmVuZ3RoT3B0aW9ucyIsIm1pblBhc3N3b3JkTGVuZ3RoIiwibWF4UGFzc3dvcmRMZW5ndGgiLCJjb250YWluc0xvd2VyY2FzZUNoYXJhY3RlciIsImNvbnRhaW5zTG93ZXJjYXNlTGV0dGVyIiwiY29udGFpbnNVcHBlcmNhc2VDaGFyYWN0ZXIiLCJjb250YWluc1VwcGVyY2FzZUxldHRlciIsImNvbnRhaW5zTnVtZXJpY0NoYXJhY3RlciIsImNvbnRhaW5zTm9uQWxwaGFudW1lcmljQ2hhcmFjdGVyIiwiYWxsb3dlZE5vbkFscGhhbnVtZXJpY0NoYXJhY3RlcnMiLCJmb3JjZVVwZ3JhZGVPblNpZ25pbiIsInNjaGVtYVZlcnNpb24iLCJwYXNzd29yZCIsInN0YXR1cyIsImlzVmFsaWQiLCJwYXNzd29yZFBvbGljeSIsInZhbGlkYXRlUGFzc3dvcmRMZW5ndGhPcHRpb25zIiwidmFsaWRhdGVQYXNzd29yZENoYXJhY3Rlck9wdGlvbnMiLCJtZWV0c01pblBhc3N3b3JkTGVuZ3RoIiwibWVldHNNYXhQYXNzd29yZExlbmd0aCIsInVwZGF0ZVBhc3N3b3JkQ2hhcmFjdGVyT3B0aW9uc1N0YXR1c2VzIiwicGFzc3dvcmRDaGFyIiwiaSIsImNoYXJBdCIsIkF1dGhJbXBsIiwiaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyIiwiYXBwQ2hlY2tTZXJ2aWNlUHJvdmlkZXIiLCJlbXVsYXRvckNvbmZpZyIsIm9wZXJhdGlvbnMiLCJhdXRoU3RhdGVTdWJzY3JpcHRpb24iLCJTdWJzY3JpcHRpb24iLCJpZFRva2VuU3Vic2NyaXB0aW9uIiwiYmVmb3JlU3RhdGVRdWV1ZSIsInJlZGlyZWN0VXNlciIsImlzUHJvYWN0aXZlUmVmcmVzaEVuYWJsZWQiLCJFWFBFQ1RFRF9QQVNTV09SRF9QT0xJQ1lfU0NIRU1BX1ZFUlNJT04iLCJfaXNJbml0aWFsaXplZCIsIl9kZWxldGVkIiwiX2luaXRpYWxpemF0aW9uUHJvbWlzZSIsIl9wb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJfYWdlbnRSZWNhcHRjaGFDb25maWciLCJfdGVuYW50UmVjYXB0Y2hhQ29uZmlncyIsIl9wcm9qZWN0UGFzc3dvcmRQb2xpY3kiLCJfdGVuYW50UGFzc3dvcmRQb2xpY2llcyIsImxhc3ROb3RpZmllZFVpZCIsInNldHRpbmdzIiwiYXBwVmVyaWZpY2F0aW9uRGlzYWJsZWRGb3JUZXN0aW5nIiwiY2xpZW50VmVyc2lvbiIsInNka0NsaWVudFZlcnNpb24iLCJfaW5pdGlhbGl6ZVdpdGhQZXJzaXN0ZW5jZSIsInBvcHVwUmVkaXJlY3RSZXNvbHZlciIsInBlcnNpc3RlbmNlTWFuYWdlciIsIl9zaG91bGRJbml0UHJvYWN0aXZlbHkiLCJfaW5pdGlhbGl6ZSIsImluaXRpYWxpemVDdXJyZW50VXNlciIsImFzc2VydGVkUGVyc2lzdGVuY2UiLCJfY3VycmVudFVzZXIiLCJfdXBkYXRlQ3VycmVudFVzZXIiLCJpbml0aWFsaXplQ3VycmVudFVzZXJGcm9tSWRUb2tlbiIsImRpcmVjdGx5U2V0Q3VycmVudFVzZXIiLCJlcnIiLCJjb25zb2xlIiwiYXV0aElkVG9rZW4iLCJ0aGVuIiwicHJldmlvdXNseVN0b3JlZFVzZXIiLCJmdXR1cmVDdXJyZW50VXNlciIsIm5lZWRzVG9jaGVja01pZGRsZXdhcmUiLCJhdXRoRG9tYWluIiwiZ2V0T3JJbml0UmVkaXJlY3RQZXJzaXN0ZW5jZU1hbmFnZXIiLCJyZWRpcmVjdFVzZXJFdmVudElkIiwic3RvcmVkVXNlckV2ZW50SWQiLCJ0cnlSZWRpcmVjdFNpZ25JbiIsIl9vdmVycmlkZVJlZGlyZWN0UmVzdWx0IiwicmVsb2FkQW5kU2V0Q3VycmVudFVzZXJPckNsZWFyIiwicmVkaXJlY3RSZXNvbHZlciIsIl9jb21wbGV0ZVJlZGlyZWN0Rm4iLCJfc2V0UmVkaXJlY3RVc2VyIiwiX2RlbGV0ZSIsInVzZXJFeHRlcm4iLCJza2lwQmVmb3JlU3RhdGVDYWxsYmFja3MiLCJub3RpZnlBdXRoTGlzdGVuZXJzIiwicmVkaXJlY3RQZXJzaXN0ZW5jZU1hbmFnZXIiLCJfZ2V0UmVjYXB0Y2hhQ29uZmlnIiwiX2dldFBhc3N3b3JkUG9saWN5SW50ZXJuYWwiLCJfdXBkYXRlUGFzc3dvcmRQb2xpY3kiLCJfZ2V0UGVyc2lzdGVuY2UiLCJfdXBkYXRlRXJyb3JNYXAiLCJuZXh0T3JPYnNlcnZlciIsImNvbXBsZXRlZCIsInJlZ2lzdGVyU3RhdGVMaXN0ZW5lciIsImF1dGhTdGF0ZVJlYWR5IiwidW5zdWJzY3JpYmUiLCJ0b2tlblR5cGUiLCJyZWRpcmVjdE1hbmFnZXIiLCJyZXNvbHZlciIsIl9yZWRpcmVjdFBlcnNpc3RlbmNlIiwiX3JlZGlyZWN0VXNlckZvcklkIiwiaWQiLCJuZXh0IiwiY3VycmVudFVpZCIsInN1YnNjcmlwdGlvbiIsImNiIiwiaXNVbnN1YnNjcmliZWQiLCJhZGRPYnNlcnZlciIsImFjdGlvbiIsIl9sb2dGcmFtZXdvcmsiLCJmcmFtZXdvcmsiLCJzb3J0IiwiX2dldEZyYW1ld29ya3MiLCJvcHRpb25zIiwiYXBwSWQiLCJoZWFydGJlYXRzSGVhZGVyIiwiZ2V0SW1tZWRpYXRlIiwib3B0aW9uYWwiLCJnZXRIZWFydGJlYXRzSGVhZGVyIiwiYXBwQ2hlY2tUb2tlbiIsIl9nZXRBcHBDaGVja1Rva2VuIiwiYXBwQ2hlY2tUb2tlblJlc3VsdCIsIl9jYXN0QXV0aCIsIm9ic2VydmVyIiwiY3JlYXRlU3Vic2NyaWJlIiwiZXh0ZXJuYWxKU1Byb3ZpZGVyIiwibG9hZEpTIiwicmVjYXB0Y2hhVjJTY3JpcHQiLCJyZWNhcHRjaGFFbnRlcnByaXNlU2NyaXB0IiwiZ2FwaVNjcmlwdCIsIl9zZXRFeHRlcm5hbEpTUHJvdmlkZXIiLCJfbG9hZEpTIiwiX3JlY2FwdGNoYVYyU2NyaXB0VXJsIiwiX3JlY2FwdGNoYUVudGVycHJpc2VTY3JpcHRVcmwiLCJfZ2FwaVNjcmlwdFVybCIsIl9nZW5lcmF0ZUNhbGxiYWNrTmFtZSIsInByZWZpeCIsImZsb29yIiwicmFuZG9tIiwiUkVDQVBUQ0hBX0VOVEVSUFJJU0VfVkVSSUZJRVJfVFlQRSIsIkZBS0VfVE9LRU4iLCJSZWNhcHRjaGFFbnRlcnByaXNlVmVyaWZpZXIiLCJhdXRoRXh0ZXJuIiwidmVyaWZ5IiwicmV0cmlldmVTaXRlS2V5IiwiY2xpZW50VHlwZSIsInZlcnNpb24iLCJjYXRjaCIsInJldHJpZXZlUmVjYXB0Y2hhVG9rZW4iLCJyZWFkeSIsImV4ZWN1dGUiLCJpbmplY3RSZWNhcHRjaGFGaWVsZHMiLCJjYXB0Y2hhUmVzcCIsInZlcmlmaWVyIiwiY2FwdGNoYVJlc3BvbnNlIiwibmV3UmVxdWVzdCIsImhhbmRsZVJlY2FwdGNoYUZsb3ciLCJhdXRoSW5zdGFuY2UiLCJhY3Rpb25OYW1lIiwiYWN0aW9uTWV0aG9kIiwicmVxdWVzdFdpdGhSZWNhcHRjaGEiLCJsb2ciLCJfaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImF1dGhJbnRlcm5hbCIsImRlcHMiLCJfZ2V0UHJvdmlkZXIiLCJpc0luaXRpYWxpemVkIiwiYXV0aDIiLCJpbml0aWFsT3B0aW9ucyIsImdldE9wdGlvbnMiLCJkZWVwRXF1YWwiLCJfaW5pdGlhbGl6ZUF1dGhJbnN0YW5jZSIsImhpZXJhcmNoeSIsImRpc2FibGVXYXJuaW5ncyIsImV4dHJhY3RQcm90b2NvbCIsInBvcnQiLCJleHRyYWN0SG9zdEFuZFBvcnQiLCJwb3J0U3RyIiwiZnJlZXplIiwiZW1pdEVtdWxhdG9yV2FybmluZyIsInByb3RvY29sRW5kIiwiaW5kZXhPZiIsInN1YnN0ciIsImF1dGhvcml0eSIsImV4ZWMiLCJob3N0QW5kUG9ydCIsInBvcCIsImJyYWNrZXRlZElQdjYiLCJwYXJzZVBvcnQiLCJhdHRhY2hCYW5uZXIiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJzdHkiLCJzdHlsZSIsImlubmVyVGV4dCIsInBvc2l0aW9uIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJjb2xvciIsImJvdHRvbSIsImxlZnQiLCJtYXJnaW4iLCJ6SW5kZXgiLCJ0ZXh0QWxpZ24iLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImluZm8iLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpZ25Jbk1ldGhvZCIsIl9nZXRJZFRva2VuUmVzcG9uc2UiLCJfYXV0aCIsIl9saW5rVG9JZFRva2VuIiwiX2lkVG9rZW4iLCJfZ2V0UmVhdXRoZW50aWNhdGlvblJlc29sdmVyIiwicmVzZXRQYXNzd29yZCIsInVwZGF0ZUVtYWlsUGFzc3dvcmQiLCJsaW5rRW1haWxQYXNzd29yZCIsImFwcGx5QWN0aW9uQ29kZSQxIiwic2lnbkluV2l0aFBhc3N3b3JkIiwic2VuZE9vYkNvZGUiLCJzZW5kRW1haWxWZXJpZmljYXRpb24kMSIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwkMSIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCQxIiwidmVyaWZ5QW5kQ2hhbmdlRW1haWwiLCJzaWduSW5XaXRoRW1haWxMaW5rJDEiLCJzaWduSW5XaXRoRW1haWxMaW5rRm9yTGlua2luZyIsIl9lbWFpbCIsIl9wYXNzd29yZCIsIl90ZW5hbnRJZCIsIl9mcm9tRW1haWxBbmRQYXNzd29yZCIsIl9mcm9tRW1haWxBbmRDb2RlIiwib29iQ29kZSIsIm9iaiIsInJldHVyblNlY3VyZVRva2VuIiwic2lnbkluV2l0aElkcCIsIklEUF9SRVFVRVNUX1VSSSQxIiwicGVuZGluZ1Rva2VuIiwiX2Zyb21QYXJhbXMiLCJjcmVkIiwibm9uY2UiLCJvYXV0aFRva2VuIiwib2F1dGhUb2tlblNlY3JldCIsInNlY3JldCIsImJ1aWxkUmVxdWVzdCIsImF1dG9DcmVhdGUiLCJyZXF1ZXN0VXJpIiwicG9zdEJvZHkiLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlIiwic2lnbkluV2l0aFBob25lTnVtYmVyJDEiLCJsaW5rV2l0aFBob25lTnVtYmVyJDEiLCJ0ZW1wb3JhcnlQcm9vZiIsIlZFUklGWV9QSE9ORV9OVU1CRVJfRk9SX0VYSVNUSU5HX0VSUk9SX01BUF8iLCJ2ZXJpZnlQaG9uZU51bWJlckZvckV4aXN0aW5nIiwiYXBpUmVxdWVzdCIsIm9wZXJhdGlvbiIsIl9mcm9tVmVyaWZpY2F0aW9uIiwidmVyaWZpY2F0aW9uSWQiLCJ2ZXJpZmljYXRpb25Db2RlIiwiX2Zyb21Ub2tlblJlc3BvbnNlIiwiX21ha2VWZXJpZmljYXRpb25SZXF1ZXN0Iiwic2Vzc2lvbkluZm8iLCJwYXJzZU1vZGUiLCJtb2RlIiwicGFyc2VEZWVwTGluayIsImxpbmsiLCJxdWVyeXN0cmluZ0RlY29kZSIsImV4dHJhY3RRdWVyeXN0cmluZyIsImRvdWJsZURlZXBMaW5rIiwiaU9TRGVlcExpbmsiLCJpT1NEb3VibGVEZWVwTGluayIsImFjdGlvbkxpbmsiLCJzZWFyY2hQYXJhbXMiLCJjb250aW51ZVVybCIsInBhcnNlTGluayIsIlBST1ZJREVSX0lEIiwiY3JlZGVudGlhbCIsImNyZWRlbnRpYWxXaXRoTGluayIsImVtYWlsTGluayIsImFjdGlvbkNvZGVVcmwiLCJFTUFJTF9QQVNTV09SRF9TSUdOX0lOX01FVEhPRCIsIkVNQUlMX0xJTktfU0lHTl9JTl9NRVRIT0QiLCJGZWRlcmF0ZWRBdXRoUHJvdmlkZXIiLCJkZWZhdWx0TGFuZ3VhZ2VDb2RlIiwiY3VzdG9tUGFyYW1ldGVycyIsInNldERlZmF1bHRMYW5ndWFnZSIsInNldEN1c3RvbVBhcmFtZXRlcnMiLCJjdXN0b21PQXV0aFBhcmFtZXRlcnMiLCJnZXRDdXN0b21QYXJhbWV0ZXJzIiwiQmFzZU9BdXRoUHJvdmlkZXIiLCJzY29wZXMiLCJhZGRTY29wZSIsInNjb3BlIiwiZ2V0U2NvcGVzIiwiY3JlZGVudGlhbEZyb21KU09OIiwiX2NyZWRlbnRpYWwiLCJyYXdOb25jZSIsImNyZWRlbnRpYWxGcm9tUmVzdWx0IiwidXNlckNyZWRlbnRpYWwiLCJvYXV0aENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiY3JlZGVudGlhbEZyb21FcnJvciIsInRva2VuUmVzcG9uc2UiLCJvYXV0aElkVG9rZW4iLCJvYXV0aEFjY2Vzc1Rva2VuIiwiRkFDRUJPT0tfU0lHTl9JTl9NRVRIT0QiLCJjcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIkdPT0dMRV9TSUdOX0lOX01FVEhPRCIsIkdJVEhVQl9TSUdOX0lOX01FVEhPRCIsIklEUF9SRVFVRVNUX1VSSSIsIlNBTUxBdXRoQ3JlZGVudGlhbCIsIl9jcmVhdGUiLCJTQU1MX1BST1ZJREVSX1BSRUZJWCIsInNhbWxDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIlRXSVRURVJfU0lHTl9JTl9NRVRIT0QiLCJzaWduVXAiLCJVc2VyQ3JlZGVudGlhbEltcGwiLCJvcGVyYXRpb25UeXBlIiwicHJvdmlkZXJJZEZvclJlc3BvbnNlIiwidXNlckNyZWQiLCJfZm9yT3BlcmF0aW9uIiwiTXVsdGlGYWN0b3JFcnJvciIsInNldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiX2Zyb21FcnJvckFuZE9wZXJhdGlvbiIsIl9wcm9jZXNzQ3JlZGVudGlhbFNhdmluZ01mYUNvbnRleHRJZk5lY2Vzc2FyeSIsImlkVG9rZW5Qcm92aWRlciIsInByb3ZpZGVyRGF0YUFzTmFtZXMiLCJTZXQiLCJwaWQiLCJfYXNzZXJ0TGlua2VkU3RhdHVzIiwiZGVsZXRlUHJvdmlkZXIiLCJwcm92aWRlcnNMZWZ0IiwicGQiLCJoYXMiLCJfbGluayQxIiwiZXhwZWN0ZWQiLCJwcm92aWRlcklkcyIsIl9yZWF1dGhlbnRpY2F0ZSIsInBhcnNlZCIsInN1YiIsIl9zaWduSW5XaXRoQ3JlZGVudGlhbCIsInNpZ25JbldpdGhDdXN0b21Ub2tlbiQxIiwiY3VzdG9tVG9rZW4iLCJNdWx0aUZhY3RvckluZm9JbXBsIiwiZmFjdG9ySWQiLCJtZmFFbnJvbGxtZW50SWQiLCJlbnJvbGxtZW50VGltZSIsImVucm9sbGVkQXQiLCJfZnJvbVNlcnZlclJlc3BvbnNlIiwiZW5yb2xsbWVudCIsIlBob25lTXVsdGlGYWN0b3JJbmZvSW1wbCIsIlRvdHBNdWx0aUZhY3RvckluZm9JbXBsIiwicGhvbmVJbmZvIiwiX3NldEFjdGlvbkNvZGVTZXR0aW5nc09uUmVxdWVzdCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsImR5bmFtaWNMaW5rRG9tYWluIiwiY2FuSGFuZGxlQ29kZUluQXBwIiwiaGFuZGxlQ29kZUluQXBwIiwiaU9TIiwiYnVuZGxlSWQiLCJpT1NCdW5kbGVJZCIsImFuZHJvaWQiLCJwYWNrYWdlTmFtZSIsImFuZHJvaWRJbnN0YWxsQXBwIiwiaW5zdGFsbEFwcCIsImFuZHJvaWRNaW5pbXVtVmVyc2lvbkNvZGUiLCJtaW5pbXVtVmVyc2lvbiIsImFuZHJvaWRQYWNrYWdlTmFtZSIsInJlY2FjaGVQYXNzd29yZFBvbGljeSIsInJlcXVlc3RUeXBlIiwibmV3UGFzc3dvcmQiLCJhdXRoTW9kdWxhciIsIm5ld0VtYWlsIiwibWZhSW5mbyIsIm11bHRpRmFjdG9ySW5mbyIsImRhdGEiLCJwcmV2aW91c0VtYWlsIiwic2lnblVwUmVzcG9uc2UiLCJzZXRBY3Rpb25Db2RlU2V0dGluZ3MiLCJyZXF1ZXN0MiIsImFjdGlvbkNvZGVTZXR0aW5nczIiLCJjcmVhdGVBdXRoVXJpIiwiY29udGludWVVcmkiLCJpZGVudGlmaWVyIiwic2lnbmluTWV0aG9kcyIsInVwZGF0ZVByb2ZpbGUkMSIsInByb2ZpbGVSZXF1ZXN0IiwicGFzc3dvcmRQcm92aWRlciIsImZpbmQiLCJ1cGRhdGVFbWFpbE9yUGFzc3dvcmQiLCJwcm9maWxlIiwicmF3VXNlckluZm8iLCJpc05ld1VzZXIiLCJraW5kIiwiZmlsdGVyZWRQcm92aWRlcklkIiwiR2VuZXJpY0FkZGl0aW9uYWxVc2VySW5mbyIsIkZhY2Vib29rQWRkaXRpb25hbFVzZXJJbmZvIiwiR2l0aHViQWRkaXRpb25hbFVzZXJJbmZvIiwiR29vZ2xlQWRkaXRpb25hbFVzZXJJbmZvIiwiVHdpdHRlckFkZGl0aW9uYWxVc2VySW5mbyIsInNjcmVlbk5hbWUiLCJGZWRlcmF0ZWRBZGRpdGlvbmFsVXNlckluZm9XaXRoVXNlcm5hbWUiLCJ1c2VybmFtZSIsImxvZ2luIiwiTXVsdGlGYWN0b3JTZXNzaW9uSW1wbCIsIl9mcm9tSWR0b2tlbiIsIl9mcm9tTWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm11bHRpRmFjdG9yU2Vzc2lvbiIsInBlbmRpbmdDcmVkZW50aWFsIiwiTXVsdGlGYWN0b3JSZXNvbHZlckltcGwiLCJzZXNzaW9uIiwiaGludHMiLCJzaWduSW5SZXNvbHZlciIsIl9mcm9tRXJyb3IiLCJtZmFSZXNwb25zZSIsIl9wcm9jZXNzIiwicmVzb2x2ZVNpZ25JbiIsImFzc2VydGlvbkV4dGVybiIsImVycm9ySW50ZXJuYWwiLCJzdGFydEVucm9sbFBob25lTWZhIiwiZmluYWxpemVFbnJvbGxQaG9uZU1mYSIsInN0YXJ0RW5yb2xsVG90cE1mYSIsImZpbmFsaXplRW5yb2xsVG90cE1mYSIsIndpdGhkcmF3TWZhIiwiTXVsdGlGYWN0b3JVc2VySW1wbCIsImVucm9sbGVkRmFjdG9ycyIsIl9mcm9tVXNlciIsImdldFNlc3Npb24iLCJlbnJvbGwiLCJmaW5hbGl6ZU1mYVJlc3BvbnNlIiwidW5lbnJvbGwiLCJpbmZvT3JVaWQiLCJtdWx0aUZhY3RvclVzZXJDYWNoZSIsIldlYWtNYXAiLCJ1c2VyTW9kdWxhciIsIlNUT1JBR0VfQVZBSUxBQkxFX0tFWSIsIkJyb3dzZXJQZXJzaXN0ZW5jZUNsYXNzIiwic3RvcmFnZVJldHJpZXZlciIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsIl9QT0xMSU5HX0lOVEVSVkFMX01TJDEiLCJJRTEwX0xPQ0FMX1NUT1JBR0VfU1lOQ19ERUxBWSIsIkJyb3dzZXJMb2NhbFBlcnNpc3RlbmNlIiwibG9jYWxTdG9yYWdlIiwiZXZlbnQiLCJwb2xsIiwib25TdG9yYWdlRXZlbnQiLCJsaXN0ZW5lcnMiLCJsb2NhbENhY2hlIiwicG9sbFRpbWVyIiwiZmFsbGJhY2tUb1BvbGxpbmciLCJmb3JBbGxDaGFuZ2VkS2V5cyIsImtleXMiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwia2V5MiIsIl9vbGRWYWx1ZSIsIm5vdGlmeUxpc3RlbmVycyIsImRldGFjaExpc3RlbmVyIiwic3RvcFBvbGxpbmciLCJ0cmlnZ2VyTGlzdGVuZXJzIiwic3RvcmVkVmFsdWUyIiwic3RvcmVkVmFsdWUiLCJsaXN0ZW5lciIsImZyb20iLCJzdGFydFBvbGxpbmciLCJzZXRJbnRlcnZhbCIsIlN0b3JhZ2VFdmVudCIsImNsZWFySW50ZXJ2YWwiLCJhdHRhY2hMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaXplIiwiQnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsInNlc3Npb25TdG9yYWdlIiwiX2FsbFNldHRsZWQiLCJwcm9taXNlcyIsImZ1bGZpbGxlZCIsInJlYXNvbiIsIlJlY2VpdmVyIiwiZXZlbnRUYXJnZXQiLCJoYW5kbGVyc01hcCIsImhhbmRsZUV2ZW50IiwiZXhpc3RpbmdJbnN0YW5jZSIsInJlY2VpdmVycyIsInJlY2VpdmVyIiwiaXNMaXN0ZW5pbmd0byIsIm5ld0luc3RhbmNlIiwibWVzc2FnZUV2ZW50IiwiZXZlbnRJZCIsImV2ZW50VHlwZSIsImhhbmRsZXJzIiwicG9ydHMiLCJwb3N0TWVzc2FnZSIsImhhbmRsZXIiLCJvcmlnaW4iLCJfc3Vic2NyaWJlIiwiZXZlbnRIYW5kbGVyIiwiX3Vuc3Vic2NyaWJlIiwiX2dlbmVyYXRlRXZlbnRJZCIsImRpZ2l0cyIsIlNlbmRlciIsInRhcmdldCIsInJlbW92ZU1lc3NhZ2VIYW5kbGVyIiwibWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsIm9uTWVzc2FnZSIsImNsb3NlIiwiX3NlbmQiLCJ0aW1lb3V0IiwiTWVzc2FnZUNoYW5uZWwiLCJjb21wbGV0aW9uVGltZXIiLCJzdGFydCIsImFja1RpbWVyIiwicG9ydDIiLCJmaW5hbGx5IiwiX3dpbmRvdyIsIl9zZXRXaW5kb3dMb2NhdGlvbiIsIl9pc1dvcmtlciIsIl9nZXRBY3RpdmVTZXJ2aWNlV29ya2VyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdHJhdGlvbiIsImFjdGl2ZSIsIl9nZXRTZXJ2aWNlV29ya2VyQ29udHJvbGxlciIsImNvbnRyb2xsZXIiLCJfZ2V0V29ya2VyR2xvYmFsU2NvcGUiLCJEQl9OQU1FIiwiREJfVkVSU0lPTiIsIkRCX09CSkVDVFNUT1JFX05BTUUiLCJEQl9EQVRBX0tFWVBBVEgiLCJEQlByb21pc2UiLCJ0b1Byb21pc2UiLCJnZXRPYmplY3RTdG9yZSIsImRiIiwiaXNSZWFkV3JpdGUiLCJ0cmFuc2FjdGlvbiIsIm9iamVjdFN0b3JlIiwiX2RlbGV0ZURhdGFiYXNlIiwiaW5kZXhlZERCIiwiZGVsZXRlRGF0YWJhc2UiLCJfb3BlbkRhdGFiYXNlIiwib3BlbiIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsIl9wdXRPYmplY3QiLCJwdXQiLCJnZXRPYmplY3QiLCJfZGVsZXRlT2JqZWN0IiwiX1BPTExJTkdfSU5URVJWQUxfTVMiLCJfVFJBTlNBQ1RJT05fUkVUUllfQ09VTlQiLCJJbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwicGVuZGluZ1dyaXRlcyIsInNlbmRlciIsInNlcnZpY2VXb3JrZXJSZWNlaXZlckF2YWlsYWJsZSIsImFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJfd29ya2VySW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiaW5pdGlhbGl6ZVNlcnZpY2VXb3JrZXJNZXNzYWdpbmciLCJfb3BlbkRiIiwiX3dpdGhSZXRyaWVzIiwib3AiLCJudW1BdHRlbXB0cyIsImluaXRpYWxpemVSZWNlaXZlciIsImluaXRpYWxpemVTZW5kZXIiLCJfb3JpZ2luIiwiX3BvbGwiLCJrZXlQcm9jZXNzZWQiLCJfZGF0YSIsInJlc3VsdHMiLCJub3RpZnlTZXJ2aWNlV29ya2VyIiwiX3dpdGhQZW5kaW5nV3JpdGUiLCJ3cml0ZSIsImdldEFsbFJlcXVlc3QiLCJnZXRBbGwiLCJrZXlzSW5SZXN1bHQiLCJmYmFzZV9rZXkiLCJsb2NhbEtleSIsInN0YXJ0U2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblBob25lTWZhIiwiZmluYWxpemVTaWduSW5Ub3RwTWZhIiwiX1NPTFZFX1RJTUVfTVMiLCJfRVhQSVJBVElPTl9USU1FX01TIiwiX1dJREdFVF9JRF9TVEFSVCIsIk1vY2tSZUNhcHRjaGEiLCJjb3VudGVyIiwiX3dpZGdldHMiLCJyZW5kZXIiLCJjb250YWluZXIiLCJwYXJhbWV0ZXJzIiwiTW9ja1dpZGdldCIsInJlc2V0Iiwib3B0V2lkZ2V0SWQiLCJjb250YWluZXJPcklkIiwiZGVsZXRlZCIsInJlc3BvbnNlVG9rZW4iLCJjbGlja0hhbmRsZXIiLCJnZXRFbGVtZW50QnlJZCIsImlzVmlzaWJsZSIsImNoZWNrSWZEZWxldGVkIiwiZ2VuZXJhdGVSYW5kb21BbHBoYU51bWVyaWNTdHJpbmciLCJleHBpcmVkQ2FsbGJhY2siLCJsZW4iLCJjaGFycyIsImFsbG93ZWRDaGFycyIsIl9KU0xPQURfQ0FMTEJBQ0siLCJORVRXT1JLX1RJTUVPVVRfREVMQVkiLCJSZUNhcHRjaGFMb2FkZXJJbXBsIiwiaG9zdExhbmd1YWdlIiwibGlicmFyeVNlcGFyYXRlbHlMb2FkZWQiLCJsb2FkIiwiaGwiLCJpc0hvc3RMYW5ndWFnZVZhbGlkIiwic2hvdWxkUmVzb2x2ZUltbWVkaWF0ZWx5IiwicmVjYXB0Y2hhIiwid2lkZ2V0SWQiLCJvbmxvYWQiLCJjbGVhcmVkT25lSW5zdGFuY2UiLCJNb2NrUmVDYXB0Y2hhTG9hZGVySW1wbCIsIlJFQ0FQVENIQV9WRVJJRklFUl9UWVBFIiwiREVGQVVMVF9QQVJBTVMiLCJ0aGVtZSIsImRlc3Ryb3llZCIsInRva2VuQ2hhbmdlTGlzdGVuZXJzIiwicmVuZGVyUHJvbWlzZSIsImlzSW52aXNpYmxlIiwibWFrZVRva2VuQ2FsbGJhY2siLCJfcmVjYXB0Y2hhTG9hZGVyIiwidmFsaWRhdGVTdGFydGluZ1N0YXRlIiwiYXNzZXJ0Tm90RGVzdHJveWVkIiwiZ2V0QXNzZXJ0ZWRSZWNhcHRjaGEiLCJ0b2tlbkNoYW5nZSIsIm1ha2VSZW5kZXJQcm9taXNlIiwiX3Jlc2V0IiwiY2xlYXIiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJyZW1vdmVDaGlsZCIsInNpdGVrZXkiLCJoYXNDaGlsZE5vZGVzIiwiZXhpc3RpbmciLCJnbG9iYWxGdW5jIiwiaW5pdCIsImd1YXJhbnRlZWRFbXB0eSIsImRvbVJlYWR5IiwiQ29uZmlybWF0aW9uUmVzdWx0SW1wbCIsIm9uQ29uZmlybWF0aW9uIiwiY29uZmlybSIsImF1dGhDcmVkZW50aWFsIiwiYXBwVmVyaWZpZXIiLCJfdmVyaWZ5UGhvbmVOdW1iZXIiLCJyZWNhcHRjaGFUb2tlbiIsInBob25lSW5mb09wdGlvbnMiLCJwaG9uZUVucm9sbG1lbnRJbmZvIiwicGhvbmVTZXNzaW9uSW5mbyIsIm11bHRpRmFjdG9ySGludCIsIm11bHRpRmFjdG9yVWlkIiwicGhvbmVTaWduSW5JbmZvIiwicGhvbmVSZXNwb25zZUluZm8iLCJ2ZXJpZnlQaG9uZU51bWJlciIsInBob25lT3B0aW9ucyIsImFwcGxpY2F0aW9uVmVyaWZpZXIiLCJQSE9ORV9TSUdOX0lOX01FVEhPRCIsIl93aXRoRGVmYXVsdFJlc29sdmVyIiwicmVzb2x2ZXJPdmVycmlkZSIsIklkcENyZWRlbnRpYWwiLCJfYnVpbGRJZHBSZXF1ZXN0Iiwic2Vzc2lvbklkIiwicmV0dXJuSWRwQ3JlZGVudGlhbCIsIl9zaWduSW4iLCJfcmVhdXRoIiwiX2xpbmsiLCJBYnN0cmFjdFBvcHVwUmVkaXJlY3RPcGVyYXRpb24iLCJwZW5kaW5nUHJvbWlzZSIsImV2ZW50TWFuYWdlciIsIm9uRXhlY3V0aW9uIiwicmVnaXN0ZXJDb25zdW1lciIsIm9uQXV0aEV2ZW50IiwidXJsUmVzcG9uc2UiLCJnZXRJZHBUYXNrIiwib25FcnJvciIsInVucmVnaXN0ZXJBbmRDbGVhblVwIiwidW5yZWdpc3RlckNvbnN1bWVyIiwiY2xlYW5VcCIsIl9QT0xMX1dJTkRPV19DTE9TRV9USU1FT1VUIiwicmVzb2x2ZXJJbnRlcm5hbCIsIlBvcHVwT3BlcmF0aW9uIiwiZXhlY3V0ZU5vdE51bGwiLCJhdXRoV2luZG93IiwicG9sbElkIiwiY3VycmVudFBvcHVwQWN0aW9uIiwiY2FuY2VsIiwiX29wZW5Qb3B1cCIsImFzc29jaWF0ZWRFdmVudCIsIl9vcmlnaW5WYWxpZGF0aW9uIiwiX2lzSWZyYW1lV2ViU3RvcmFnZVN1cHBvcnRlZCIsImlzU3VwcG9ydGVkIiwicG9sbFVzZXJDYW5jZWxsYXRpb24iLCJjbG9zZWQiLCJQRU5ESU5HX1JFRElSRUNUX0tFWSIsInJlZGlyZWN0T3V0Y29tZU1hcCIsIlJlZGlyZWN0QWN0aW9uIiwicmVhZHlPdXRjb21lIiwiaGFzUGVuZGluZ1JlZGlyZWN0IiwiX2dldEFuZENsZWFyUGVuZGluZ1JlZGlyZWN0U3RhdHVzIiwicGVuZGluZ1JlZGlyZWN0S2V5IiwicmVzb2x2ZXJQZXJzaXN0ZW5jZSIsIl9zZXRQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJfY2xlYXJSZWRpcmVjdE91dGNvbWVzIiwiX3NpZ25JbldpdGhSZWRpcmVjdCIsIl9vcGVuUmVkaXJlY3QiLCJfcmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJwcmVwYXJlVXNlckZvclJlZGlyZWN0IiwiX2xpbmtXaXRoUmVkaXJlY3QiLCJfZ2V0UmVkaXJlY3RSZXN1bHQiLCJyZXNvbHZlckV4dGVybiIsIkVWRU5UX0RVUExJQ0FUSU9OX0NBQ0hFX0RVUkFUSU9OX01TIiwiQXV0aEV2ZW50TWFuYWdlciIsImNhY2hlZEV2ZW50VWlkcyIsImNvbnN1bWVycyIsInF1ZXVlZFJlZGlyZWN0RXZlbnQiLCJoYXNIYW5kbGVkUG90ZW50aWFsUmVkaXJlY3QiLCJsYXN0UHJvY2Vzc2VkRXZlbnRUaW1lIiwiYXV0aEV2ZW50Q29uc3VtZXIiLCJpc0V2ZW50Rm9yQ29uc3VtZXIiLCJzZW5kVG9Db25zdW1lciIsInNhdmVFdmVudFRvQ2FjaGUiLCJvbkV2ZW50IiwiaGFzRXZlbnRCZWVuSGFuZGxlZCIsImhhbmRsZWQiLCJjb25zdW1lciIsImlzUmVkaXJlY3RFdmVudCIsImlzTnVsbFJlZGlyZWN0RXZlbnQiLCJldmVudElkTWF0Y2hlcyIsImV2ZW50VWlkIiwidiIsIl9nZXRQcm9qZWN0Q29uZmlnIiwiSVBfQUREUkVTU19SRUdFWCIsIkhUVFBfUkVHRVgiLCJfdmFsaWRhdGVPcmlnaW4iLCJhdXRob3JpemVkRG9tYWlucyIsImRvbWFpbiIsIm1hdGNoRG9tYWluIiwiY3VycmVudFVybCIsImhvc3RuYW1lIiwiVVJMIiwiY2VVcmwiLCJlc2NhcGVkRG9tYWluUGF0dGVybiIsIlJlZ0V4cCIsIk5FVFdPUktfVElNRU9VVCIsInJlc2V0VW5sb2FkZWRHYXBpTW9kdWxlcyIsImJlYWNvbiIsIl9fX2pzbCIsIkgiLCJoaW50IiwiciIsIkwiLCJDUCIsImxvYWRHYXBpIiwibG9hZEdhcGlJZnJhbWUiLCJnYXBpIiwiaWZyYW1lcyIsImdldENvbnRleHQiLCJvbnRpbWVvdXQiLCJJZnJhbWUiLCJjYk5hbWUiLCJjYWNoZWRHQXBpTG9hZGVyIiwiX2xvYWRHYXBpIiwiUElOR19USU1FT1VUIiwiSUZSQU1FX1BBVEgiLCJFTVVMQVRFRF9JRlJBTUVfUEFUSCIsIklGUkFNRV9BVFRSSUJVVEVTIiwidG9wIiwiaGVpZ2h0IiwidGFiaW5kZXgiLCJFSURfRlJPTV9BUElIT1NUIiwiZ2V0SWZyYW1lVXJsIiwiZWlkIiwiZnciLCJfb3BlbklmcmFtZSIsImNvbnRleHQiLCJnYXBpMiIsIndoZXJlIiwibWVzc2FnZUhhbmRsZXJzRmlsdGVyIiwiQ1JPU1NfT1JJR0lOX0lGUkFNRVNfRklMVEVSIiwiYXR0cmlidXRlcyIsImRvbnRjbGVhciIsImlmcmFtZSIsInJlc3R5bGUiLCJzZXRIaWRlT25MZWF2ZSIsIm5ldHdvcmtFcnJvciIsIm5ldHdvcmtFcnJvclRpbWVyIiwiY2xlYXJUaW1lckFuZFJlc29sdmUiLCJwaW5nIiwiQkFTRV9QT1BVUF9PUFRJT05TIiwicmVzaXphYmxlIiwic3RhdHVzYmFyIiwidG9vbGJhciIsIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIlRBUkdFVF9CTEFOSyIsIkZJUkVGT1hfRU1QVFlfVVJMIiwiQXV0aFBvcHVwIiwid2luZG93MiIsIl9vcGVuIiwic2NyZWVuIiwiYXZhaWxIZWlnaHQiLCJhdmFpbFdpZHRoIiwic2Nyb2xsYmFycyIsIm9wdGlvbnNTdHJpbmciLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjdW0iLCJvcGVuQXNOZXdXaW5kb3dJT1MiLCJuZXdXaW4iLCJmb2N1cyIsImNsaWNrIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJXSURHRVRfUEFUSCIsIkVNVUxBVE9SX1dJREdFVF9QQVRIIiwiRklSRUJBU0VfQVBQX0NIRUNLX0ZSQUdNRU5UX0lEIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX2dldFJlZGlyZWN0VXJsIiwiYXV0aFR5cGUiLCJyZWRpcmVjdFVybCIsImFkZGl0aW9uYWxQYXJhbXMiLCJpc0VtcHR5IiwidGlkIiwicGFyYW1zRGljdCIsImFwcENoZWNrVG9rZW5GcmFnbWVudCIsImdldEhhbmRsZXJCYXNlIiwiV0VCX1NUT1JBR0VfU1VQUE9SVF9LRVkiLCJCcm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiZXZlbnRNYW5hZ2VycyIsIm9yaWdpblZhbGlkYXRpb25Qcm9taXNlcyIsInByb21pc2UyIiwiaW5pdEFuZEdldE1hbmFnZXIiLCJyZWdpc3RlciIsImlmcmFtZUV2ZW50IiwiYXV0aEV2ZW50Iiwic2VuZCIsIk11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9maW5hbGl6ZUVucm9sbCIsIl9maW5hbGl6ZVNpZ25JbiIsIlBob25lTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2Zyb21DcmVkZW50aWFsIiwicGhvbmVWZXJpZmljYXRpb25JbmZvIiwiRkFDVE9SX0lEIiwiYXNzZXJ0aW9uRm9yRW5yb2xsbWVudCIsIm9uZVRpbWVQYXNzd29yZCIsIlRvdHBNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbVNlY3JldCIsImFzc2VydGlvbkZvclNpZ25JbiIsImVucm9sbG1lbnRJZCIsIl9mcm9tRW5yb2xsbWVudElkIiwiZ2VuZXJhdGVTZWNyZXQiLCJtZmFTZXNzaW9uIiwidG90cEVucm9sbG1lbnRJbmZvIiwiX2Zyb21TdGFydFRvdHBNZmFFbnJvbGxtZW50UmVzcG9uc2UiLCJvdHAiLCJ0b3RwVmVyaWZpY2F0aW9uSW5mbyIsIl9tYWtlVG90cFZlcmlmaWNhdGlvbkluZm8iLCJzZWNyZXRLZXkiLCJoYXNoaW5nQWxnb3JpdGhtIiwiY29kZUxlbmd0aCIsImNvZGVJbnRlcnZhbFNlY29uZHMiLCJlbnJvbGxtZW50Q29tcGxldGlvbkRlYWRsaW5lIiwidG90cFNlc3Npb25JbmZvIiwic2hhcmVkU2VjcmV0S2V5IiwidmVyaWZpY2F0aW9uQ29kZUxlbmd0aCIsInBlcmlvZFNlYyIsImZpbmFsaXplRW5yb2xsbWVudFRpbWUiLCJnZW5lcmF0ZVFyQ29kZVVybCIsImFjY291bnROYW1lIiwiaXNzdWVyIiwidXNlRGVmYXVsdHMiLCJfaXNFbXB0eVN0cmluZyIsImlucHV0IiwiQXV0aEludGVyb3AiLCJpbnRlcm5hbExpc3RlbmVycyIsImdldFVpZCIsImFzc2VydEF1dGhDb25maWd1cmVkIiwiYWRkQXV0aFRva2VuTGlzdGVuZXIiLCJ1cGRhdGVQcm9hY3RpdmVSZWZyZXNoIiwicmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIiLCJnZXRWZXJzaW9uRm9yUGxhdGZvcm0iLCJyZWdpc3RlckF1dGgiLCJfcmVnaXN0ZXJDb21wb25lbnQiLCJpbXBvcnRfY29tcG9uZW50IiwiQ29tcG9uZW50IiwiZ2V0UHJvdmlkZXIiLCJzZXRJbnN0YW50aWF0aW9uTW9kZSIsInNldEluc3RhbmNlQ3JlYXRlZENhbGxiYWNrIiwiX2luc3RhbmNlSWRlbnRpZmllciIsIl9pbnN0YW5jZSIsImF1dGhJbnRlcm5hbFByb3ZpZGVyIiwicmVnaXN0ZXJWZXJzaW9uIiwiREVGQVVMVF9JRF9UT0tFTl9NQVhfQUdFIiwiYXV0aElkVG9rZW5NYXhBZ2UiLCJnZXRFeHBlcmltZW50YWxTZXR0aW5nIiwibGFzdFBvc3RlZElkVG9rZW4iLCJtaW50Q29va2llRmFjdG9yeSIsImlkVG9rZW5SZXN1bHQiLCJpZFRva2VuQWdlIiwiZ2V0QXBwIiwiYXV0aFRva2VuU3luY1BhdGgiLCJpc1NlY3VyZUNvbnRleHQiLCJhdXRoVG9rZW5TeW5jVXJsIiwibWludENvb2tpZSIsImF1dGhFbXVsYXRvckhvc3QiLCJnZXREZWZhdWx0RW11bGF0b3JIb3N0IiwiZ2V0U2NyaXB0UGFyZW50RWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0QXR0cmlidXRlIiwib25lcnJvciIsImNoYXJzZXQiLCJpbXBvcnRfYXBwMiIsInJlcXVpcmUiLCJpbXBvcnRfdXRpbDIiLCJpbXBvcnRfbG9nZ2VyMiIsImltcG9ydF90c2xpYjIiLCJpbXBvcnRfY29tcG9uZW50MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQywwQ0FBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLHlCQUFBLEVB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dG1DLFFBQUEsQ0FBUSxDQUFFO01BQ2hFMVksc0JBQUEsQ0FBdUJtTixJQUFBLEVBQU04eEMsVUFBQSxFQUFZLE1BQ3ZDQSxVQUFBLENBQVc5eEMsSUFBQSxDQUFLNkwsV0FBVyxDQUFDO01BRTlCcFgsZ0JBQUEsQ0FBaUJ1TCxJQUFBLEVBQU0rSixJQUFBLElBQVErbkMsVUFBQSxDQUFXL25DLElBQUksQ0FBQztJQUNoRDtFQUNGO0VBRUQsTUFBTWdvQyxnQkFBQSxPQUFtQjk1QyxXQUFBLENBQUErNUMsc0JBQUEsRUFBdUIsTUFBTTtFQUN0RCxJQUFJRCxnQkFBQSxFQUFrQjtJQUNwQjUrQyxtQkFBQSxDQUFvQjZNLElBQUEsRUFBTSxVQUFVK3hDLGdCQUFBLEVBQWtCO0VBQ3ZEO0VBRUQsT0FBTy94QyxJQUFBO0FBQ1Q7QUFFQSxTQUFTaXlDLHVCQUFBLEVBQXNCOztFQUM3QixRQUFPMy9CLEVBQUEsSUFBQTNRLEVBQUEsR0FBQXlWLFFBQUEsQ0FBUzg2QixvQkFBQSxDQUFxQixNQUFNLE9BQUksUUFBQXZ3QyxFQUFBLHVCQUFBQSxFQUFBLFNBQUUsUUFBQTJRLEVBQUEsY0FBQUEsRUFBQSxHQUFJOEUsUUFBQTtBQUN2RDtBQUVBMEosc0JBQUEsQ0FBdUI7RUFDckJKLE9BQU9wZCxHQUFBLEVBQVc7SUFFaEIsT0FBTyxJQUFJeUMsT0FBQSxDQUFRLENBQUNtUyxPQUFBLEVBQVN4USxNQUFBLEtBQVU7TUFDckMsTUFBTWdkLEVBQUEsR0FBS3ROLFFBQUEsQ0FBU3VOLGFBQUEsQ0FBYyxRQUFRO01BQzFDRCxFQUFBLENBQUd5dEIsWUFBQSxDQUFhLE9BQU83dUMsR0FBRztNQUMxQm9oQixFQUFBLENBQUc2YSxNQUFBLEdBQVNybkIsT0FBQTtNQUNad00sRUFBQSxDQUFHMHRCLE9BQUEsR0FBVXZyQyxDQUFBLElBQUk7UUFDZixNQUFNcEgsS0FBQSxHQUFRSyxZQUFBLENBQVk7UUFDMUJMLEtBQUEsQ0FBTXVJLFVBQUEsR0FBYW5CLENBQUE7UUFDbkJhLE1BQUEsQ0FBT2pJLEtBQUs7TUFDZDtNQUNBaWxCLEVBQUEsQ0FBR2hSLElBQUEsR0FBTztNQUNWZ1IsRUFBQSxDQUFHMnRCLE9BQUEsR0FBVTtNQUNiSixzQkFBQSxDQUFzQixFQUFHdHNCLFdBQUEsQ0FBWWpCLEVBQUU7SUFDekMsQ0FBQzs7RUFHSDdELFVBQUEsRUFBWTtFQUNaRixpQkFBQSxFQUFtQjtFQUNuQkMseUJBQUEsRUFDRTtBQUNIO0FBRUQ0dkIsWUFBQSxDQUFZOzs7QUNoSlosSUFBQThCLFdBQUEsR0FBT0MsT0FBQTtBQUNQLElBQUFDLFlBQUEsR0FBT0QsT0FBQTtBQUNQLElBQUFFLGNBQUEsR0FBT0YsT0FBQTtBQUNQLElBQUFHLGFBQUEsR0FBT0gsT0FBQTtBQUNQLElBQUFJLGlCQUFBLEdBQU9KLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=