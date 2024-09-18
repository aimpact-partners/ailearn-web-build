System.register(["@firebase/util@1.9.7","@firebase/component@0.6.8","@firebase/logger@0.4.2","idb@7.1.1","@firebase/app@0.10.10","tslib@2.7.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.9.7"],["@firebase/component","0.6.8"],["@firebase/logger","0.4.2"],["idb","7.1.1"],["@firebase/app","0.10.10"],["tslib","2.7.0"],["@firebase/auth","1.7.8"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.9.7', dep), dep => dependencies.set('@firebase/component@0.6.8', dep), dep => dependencies.set('@firebase/logger@0.4.2', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.10.10', dep), dep => dependencies.set('tslib@2.7.0', dep)],
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

// .beyond/uimport/temp/@firebase/auth.1.7.8.js
var auth_1_7_8_exports = {};
__export(auth_1_7_8_exports, {
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
module.exports = __toCommonJS(auth_1_7_8_exports);

// node_modules/@firebase/auth/dist/esm2017/index-2788dcb0.js
var import_app = require("@firebase/app@0.10.10");
var import_util = require("@firebase/util@1.9.7");
var import_logger = require("@firebase/logger@0.4.2");
var import_tslib = require("tslib@2.7.0");
var import_component = require("@firebase/component@0.6.8");
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
var version = "1.7.8";
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
var import_app2 = require("@firebase/app@0.10.10");
var import_util2 = require("@firebase/util@1.9.7");
var import_logger2 = require("@firebase/logger@0.4.2");
var import_tslib2 = require("tslib@2.7.0");
var import_component2 = require("@firebase/component@0.6.8");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hdXRoLjEuNy44LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tb2RlbC9lbnVtX21hcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYXNzZXJ0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9jYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9uYXZpZ2F0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9kZWxheS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZmV0Y2hfcHJvdmlkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vcmVjYXB0Y2hhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2FjY291bnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC90aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaWRfdG9rZW5fcmVzdWx0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaW52YWxpZGF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcHJvYWN0aXZlX3JlZnJlc2gudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX21ldGFkYXRhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVsb2FkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci90b2tlbl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaW5zdGFudGlhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luX21lbW9yeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9wZXJzaXN0ZW5jZV91c2VyX21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmVyc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL21pZGRsZXdhcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wYXNzd29yZF9wb2xpY3kvZ2V0X3Bhc3N3b3JkX3BvbGljeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3Bhc3N3b3JkX3BvbGljeV9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2xvYWRfanMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9lbnRlcnByaXNlX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvaW5pdGlhbGl6ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2F1dGhfY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc21zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2FjdGlvbl9jb2RlX3VybC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZlZGVyYXRlZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZhY2Vib29rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9nb29nbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dpdGh1Yi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy90d2l0dGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc2lnbl91cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfY3JlZGVudGlhbF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYW5vbnltb3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Vycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcHJvdmlkZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvbGlua191bmxpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWF1dGhlbnRpY2F0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2FjdGlvbl9jb2RlX3NldHRpbmdzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2NyZWF0ZV9hdXRoX3VyaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L3Byb2ZpbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hY2NvdW50X2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hZGRpdGlvbmFsX3VzZXJfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9zZXNzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV91c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvbG9jYWxfc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9zZXNzaW9uX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcHJvbWlzZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9yZWNlaXZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2V2ZW50X2lkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3NlbmRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9hdXRoX3dpbmRvdy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3dvcmtlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9pbmRleGVkX2RiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbW9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2xvYWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcHJvdmlkZXJzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hYnN0cmFjdF9wb3B1cF9yZWRpcmVjdF9vcGVyYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2V2ZW50X21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wcm9qZWN0X2NvbmZpZy9nZXRfcHJvamVjdF9jb25maWcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92YWxpZGF0ZV9vcmlnaW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2dhcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2lmcmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaGFuZGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wb3B1cF9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9hc3NlcnRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWZhL2Fzc2VydGlvbnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9hc3NlcnRpb25zL3RvdHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9maXJlYmFzZV9pbnRlcm5hbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3JlZ2lzdGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL2Rpc3QvZXNtMjAxNy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhdXRoXzFfN184X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFjdGlvbkNvZGVPcGVyYXRpb24iLCJBY3Rpb25Db2RlVVJMIiwiQXV0aENyZWRlbnRpYWwiLCJBdXRoRXJyb3JDb2RlcyIsIkFVVEhfRVJST1JfQ09ERVNfTUFQX0RPX05PVF9VU0VfSU5URVJOQUxMWSIsIkVtYWlsQXV0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiRmFjdG9ySWQiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJPQXV0aENyZWRlbnRpYWwiLCJPQXV0aFByb3ZpZGVyIiwiT3BlcmF0aW9uVHlwZSIsIlBob25lQXV0aENyZWRlbnRpYWwiLCJQaG9uZUF1dGhQcm92aWRlciIsIlBob25lTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJQcm92aWRlcklkIiwiUmVjYXB0Y2hhVmVyaWZpZXIiLCJTQU1MQXV0aFByb3ZpZGVyIiwiU2lnbkluTWV0aG9kIiwiVG90cE11bHRpRmFjdG9yR2VuZXJhdG9yIiwiVG90cFNlY3JldCIsIlR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJhcHBseUFjdGlvbkNvZGUiLCJiZWZvcmVBdXRoU3RhdGVDaGFuZ2VkIiwiYnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJicm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsImNoZWNrQWN0aW9uQ29kZSIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29ubmVjdEF1dGhFbXVsYXRvciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRlYnVnRXJyb3JNYXAiLCJkZWxldGVVc2VyIiwiZmV0Y2hTaWduSW5NZXRob2RzRm9yRW1haWwiLCJnZXRBZGRpdGlvbmFsVXNlckluZm8iLCJnZXRBdXRoIiwiZ2V0SWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJnZXRNdWx0aUZhY3RvclJlc29sdmVyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJpbk1lbW9yeVBlcnNpc3RlbmNlIiwiaW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsImluaXRpYWxpemVBdXRoIiwiaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImlzU2lnbkluV2l0aEVtYWlsTGluayIsImxpbmtXaXRoQ3JlZGVudGlhbCIsImxpbmtXaXRoUGhvbmVOdW1iZXIiLCJsaW5rV2l0aFBvcHVwIiwibGlua1dpdGhSZWRpcmVjdCIsIm11bHRpRmFjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwib25JZFRva2VuQ2hhbmdlZCIsInBhcnNlQWN0aW9uQ29kZVVSTCIsInByb2RFcnJvck1hcCIsInJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQaG9uZU51bWJlciIsInJlYXV0aGVudGljYXRlV2l0aFBvcHVwIiwicmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJyZWxvYWQiLCJyZXZva2VBY2Nlc3NUb2tlbiIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJzZXRQZXJzaXN0ZW5jZSIsInNpZ25JbkFub255bW91c2x5Iiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbExpbmsiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJzaWduT3V0IiwidW5saW5rIiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGhvbmVOdW1iZXIiLCJ1cGRhdGVQcm9maWxlIiwidXNlRGV2aWNlTGFuZ3VhZ2UiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwidmVyaWZ5QmVmb3JlVXBkYXRlRW1haWwiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJQSE9ORSIsIlRPVFAiLCJGQUNFQk9PSyIsIkdJVEhVQiIsIkdPT0dMRSIsIlBBU1NXT1JEIiwiVFdJVFRFUiIsIkVNQUlMX0xJTksiLCJFTUFJTF9QQVNTV09SRCIsIkxJTksiLCJSRUFVVEhFTlRJQ0FURSIsIlNJR05fSU4iLCJFTUFJTF9TSUdOSU4iLCJQQVNTV09SRF9SRVNFVCIsIlJFQ09WRVJfRU1BSUwiLCJSRVZFUlRfU0VDT05EX0ZBQ1RPUl9BRERJVElPTiIsIlZFUklGWV9BTkRfQ0hBTkdFX0VNQUlMIiwiVkVSSUZZX0VNQUlMIiwiX2RlYnVnRXJyb3JNYXAiLCJfcHJvZEVycm9yTWFwIiwiX0RFRkFVTFRfQVVUSF9FUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJFcnJvckZhY3RvcnkiLCJBRE1JTl9PTkxZX09QRVJBVElPTiIsIkFSR1VNRU5UX0VSUk9SIiwiQVBQX05PVF9BVVRIT1JJWkVEIiwiQVBQX05PVF9JTlNUQUxMRUQiLCJDQVBUQ0hBX0NIRUNLX0ZBSUxFRCIsIkNPREVfRVhQSVJFRCIsIkNPUkRPVkFfTk9UX1JFQURZIiwiQ09SU19VTlNVUFBPUlRFRCIsIkNSRURFTlRJQUxfQUxSRUFEWV9JTl9VU0UiLCJDUkVERU5USUFMX01JU01BVENIIiwiQ1JFREVOVElBTF9UT09fT0xEX0xPR0lOX0FHQUlOIiwiREVQRU5ERU5UX1NES19JTklUX0JFRk9SRV9BVVRIIiwiRFlOQU1JQ19MSU5LX05PVF9BQ1RJVkFURUQiLCJFTUFJTF9DSEFOR0VfTkVFRFNfVkVSSUZJQ0FUSU9OIiwiRU1BSUxfRVhJU1RTIiwiRU1VTEFUT1JfQ09ORklHX0ZBSUxFRCIsIkVYUElSRURfT09CX0NPREUiLCJFWFBJUkVEX1BPUFVQX1JFUVVFU1QiLCJJTlRFUk5BTF9FUlJPUiIsIklOVkFMSURfQVBJX0tFWSIsIklOVkFMSURfQVBQX0NSRURFTlRJQUwiLCJJTlZBTElEX0FQUF9JRCIsIklOVkFMSURfQVVUSCIsIklOVkFMSURfQVVUSF9FVkVOVCIsIklOVkFMSURfQ0VSVF9IQVNIIiwiSU5WQUxJRF9DT0RFIiwiSU5WQUxJRF9DT05USU5VRV9VUkkiLCJJTlZBTElEX0NPUkRPVkFfQ09ORklHVVJBVElPTiIsIklOVkFMSURfQ1VTVE9NX1RPS0VOIiwiSU5WQUxJRF9EWU5BTUlDX0xJTktfRE9NQUlOIiwiSU5WQUxJRF9FTUFJTCIsIklOVkFMSURfRU1VTEFUT1JfU0NIRU1FIiwiSU5WQUxJRF9JRFBfUkVTUE9OU0UiLCJJTlZBTElEX0xPR0lOX0NSRURFTlRJQUxTIiwiSU5WQUxJRF9NRVNTQUdFX1BBWUxPQUQiLCJJTlZBTElEX01GQV9TRVNTSU9OIiwiSU5WQUxJRF9PQVVUSF9DTElFTlRfSUQiLCJJTlZBTElEX09BVVRIX1BST1ZJREVSIiwiSU5WQUxJRF9PT0JfQ09ERSIsIklOVkFMSURfT1JJR0lOIiwiSU5WQUxJRF9QQVNTV09SRCIsIklOVkFMSURfUEVSU0lTVEVOQ0UiLCJJTlZBTElEX1BIT05FX05VTUJFUiIsIklOVkFMSURfUFJPVklERVJfSUQiLCJJTlZBTElEX1JFQ0lQSUVOVF9FTUFJTCIsIklOVkFMSURfU0VOREVSIiwiSU5WQUxJRF9TRVNTSU9OX0lORk8iLCJJTlZBTElEX1RFTkFOVF9JRCIsIk1GQV9JTkZPX05PVF9GT1VORCIsIk1GQV9SRVFVSVJFRCIsIk1JU1NJTkdfQU5EUk9JRF9QQUNLQUdFX05BTUUiLCJNSVNTSU5HX0FQUF9DUkVERU5USUFMIiwiTUlTU0lOR19BVVRIX0RPTUFJTiIsIk1JU1NJTkdfQ09ERSIsIk1JU1NJTkdfQ09OVElOVUVfVVJJIiwiTUlTU0lOR19JRlJBTUVfU1RBUlQiLCJNSVNTSU5HX0lPU19CVU5ETEVfSUQiLCJNSVNTSU5HX09SX0lOVkFMSURfTk9OQ0UiLCJNSVNTSU5HX01GQV9JTkZPIiwiTUlTU0lOR19NRkFfU0VTU0lPTiIsIk1JU1NJTkdfUEhPTkVfTlVNQkVSIiwiTUlTU0lOR19TRVNTSU9OX0lORk8iLCJNT0RVTEVfREVTVFJPWUVEIiwiTkVFRF9DT05GSVJNQVRJT04iLCJORVRXT1JLX1JFUVVFU1RfRkFJTEVEIiwiTlVMTF9VU0VSIiwiTk9fQVVUSF9FVkVOVCIsIk5PX1NVQ0hfUFJPVklERVIiLCJPUEVSQVRJT05fTk9UX0FMTE9XRUQiLCJPUEVSQVRJT05fTk9UX1NVUFBPUlRFRCIsIlBPUFVQX0JMT0NLRUQiLCJQT1BVUF9DTE9TRURfQllfVVNFUiIsIlBST1ZJREVSX0FMUkVBRFlfTElOS0VEIiwiUVVPVEFfRVhDRUVERUQiLCJSRURJUkVDVF9DQU5DRUxMRURfQllfVVNFUiIsIlJFRElSRUNUX09QRVJBVElPTl9QRU5ESU5HIiwiUkVKRUNURURfQ1JFREVOVElBTCIsIlNFQ09ORF9GQUNUT1JfQUxSRUFEWV9FTlJPTExFRCIsIlNFQ09ORF9GQUNUT1JfTElNSVRfRVhDRUVERUQiLCJURU5BTlRfSURfTUlTTUFUQ0giLCJUSU1FT1VUIiwiVE9LRU5fRVhQSVJFRCIsIlRPT19NQU5ZX0FUVEVNUFRTX1RSWV9MQVRFUiIsIlVOQVVUSE9SSVpFRF9ET01BSU4iLCJVTlNVUFBPUlRFRF9GSVJTVF9GQUNUT1IiLCJVTlNVUFBPUlRFRF9QRVJTSVNURU5DRSIsIlVOU1VQUE9SVEVEX1RFTkFOVF9PUEVSQVRJT04iLCJVTlZFUklGSUVEX0VNQUlMIiwiVVNFUl9DQU5DRUxMRUQiLCJVU0VSX0RFTEVURUQiLCJVU0VSX0RJU0FCTEVEIiwiVVNFUl9NSVNNQVRDSCIsIlVTRVJfU0lHTkVEX09VVCIsIldFQUtfUEFTU1dPUkQiLCJXRUJfU1RPUkFHRV9VTlNVUFBPUlRFRCIsIkFMUkVBRFlfSU5JVElBTElaRUQiLCJSRUNBUFRDSEFfTk9UX0VOQUJMRUQiLCJNSVNTSU5HX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfQUNUSU9OIiwiTUlTU0lOR19DTElFTlRfVFlQRSIsIk1JU1NJTkdfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRVFfVFlQRSIsImxvZ0NsaWVudCIsImltcG9ydF9sb2dnZXIiLCJMb2dnZXIiLCJfbG9nV2FybiIsIm1zZyIsImFyZ3MiLCJsb2dMZXZlbCIsIkxvZ0xldmVsIiwiV0FSTiIsIndhcm4iLCJpbXBvcnRfYXBwIiwiU0RLX1ZFUlNJT04iLCJfbG9nRXJyb3IiLCJFUlJPUiIsImVycm9yIiwiX2ZhaWwiLCJhdXRoT3JDb2RlIiwicmVzdCIsImNyZWF0ZUVycm9ySW50ZXJuYWwiLCJfY3JlYXRlRXJyb3IiLCJfZXJyb3JXaXRoQ3VzdG9tTWVzc2FnZSIsImF1dGgiLCJjb2RlIiwibWVzc2FnZSIsImVycm9yTWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiZmFjdG9yeSIsImNyZWF0ZSIsImFwcE5hbWUiLCJuYW1lIiwiX3NlcnZlckFwcEN1cnJlbnRVc2VyT3BlcmF0aW9uTm90U3VwcG9ydGVkRXJyb3IiLCJfYXNzZXJ0SW5zdGFuY2VPZiIsIm9iamVjdCIsImluc3RhbmNlIiwiY29uc3RydWN0b3JJbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiZnVsbFBhcmFtcyIsInNsaWNlIiwiX2Vycm9yRmFjdG9yeSIsIl9hc3NlcnQiLCJhc3NlcnRpb24iLCJkZWJ1Z0ZhaWwiLCJmYWlsdXJlIiwiRXJyb3IiLCJkZWJ1Z0Fzc2VydCIsIl9nZXRDdXJyZW50VXJsIiwic2VsZiIsIl9hIiwibG9jYXRpb24iLCJocmVmIiwiX2lzSHR0cE9ySHR0cHMiLCJfZ2V0Q3VycmVudFNjaGVtZSIsInByb3RvY29sIiwiX2lzT25saW5lIiwibmF2aWdhdG9yIiwib25MaW5lIiwiaXNCcm93c2VyRXh0ZW5zaW9uIiwiX2dldFVzZXJMYW5ndWFnZSIsIm5hdmlnYXRvckxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJEZWxheSIsInNob3J0RGVsYXkiLCJsb25nRGVsYXkiLCJpc01vYmlsZSIsImlzTW9iaWxlQ29yZG92YSIsImlzUmVhY3ROYXRpdmUiLCJnZXQiLCJNYXRoIiwibWluIiwiX2VtdWxhdG9yVXJsIiwiY29uZmlnIiwicGF0aCIsImVtdWxhdG9yIiwidXJsIiwic3RhcnRzV2l0aCIsIkZldGNoUHJvdmlkZXIiLCJpbml0aWFsaXplIiwiZmV0Y2hJbXBsIiwiaGVhZGVyc0ltcGwiLCJyZXNwb25zZUltcGwiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJoZWFkZXJzIiwiSGVhZGVycyIsInJlc3BvbnNlIiwiUmVzcG9uc2UiLCJTRVJWRVJfRVJST1JfTUFQIiwiREVGQVVMVF9BUElfVElNRU9VVF9NUyIsIl9hZGRUaWRJZk5lY2Vzc2FyeSIsInJlcXVlc3QiLCJ0ZW5hbnRJZCIsIl9wZXJmb3JtQXBpUmVxdWVzdCIsIm1ldGhvZCIsImN1c3RvbUVycm9yTWFwIiwiX3BlcmZvcm1GZXRjaFdpdGhFcnJvckhhbmRsaW5nIiwiYm9keSIsInBhcmFtcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInF1ZXJ5c3RyaW5nIiwia2V5IiwiYXBpS2V5IiwiX2dldEFkZGl0aW9uYWxIZWFkZXJzIiwibGFuZ3VhZ2VDb2RlIiwiX2dldEZpbmFsVGFyZ2V0IiwiYXBpSG9zdCIsInJlZmVycmVyUG9saWN5IiwiZmV0Y2hGbiIsIl9jYW5Jbml0RW11bGF0b3IiLCJuZXR3b3JrVGltZW91dCIsIk5ldHdvcmtUaW1lb3V0IiwiUHJvbWlzZSIsInJhY2UiLCJwcm9taXNlIiwiY2xlYXJOZXR3b3JrVGltZW91dCIsImpzb24iLCJfbWFrZVRhZ2dlZEVycm9yIiwib2siLCJlcnJvck1lc3NhZ2UiLCJzZXJ2ZXJFcnJvckNvZGUiLCJzZXJ2ZXJFcnJvck1lc3NhZ2UiLCJzcGxpdCIsImF1dGhFcnJvciIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImUiLCJGaXJlYmFzZUVycm9yIiwiU3RyaW5nIiwiX3BlcmZvcm1TaWduSW5SZXF1ZXN0Iiwic2VydmVyUmVzcG9uc2UiLCJfc2VydmVyUmVzcG9uc2UiLCJob3N0IiwiYmFzZSIsImFwaVNjaGVtZSIsIl9wYXJzZUVuZm9yY2VtZW50U3RhdGUiLCJlbmZvcmNlbWVudFN0YXRlU3RyIiwidGltZXIiLCJfIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImVycm9yUGFyYW1zIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImN1c3RvbURhdGEiLCJfdG9rZW5SZXNwb25zZSIsImlzVjIiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJpc0VudGVycHJpc2UiLCJlbnRlcnByaXNlIiwiUmVjYXB0Y2hhQ29uZmlnIiwic2l0ZUtleSIsInJlY2FwdGNoYUVuZm9yY2VtZW50U3RhdGUiLCJyZWNhcHRjaGFLZXkiLCJnZXRQcm92aWRlckVuZm9yY2VtZW50U3RhdGUiLCJwcm92aWRlclN0ciIsImxlbmd0aCIsInByb3ZpZGVyIiwiZW5mb3JjZW1lbnRTdGF0ZSIsImlzUHJvdmlkZXJFbmFibGVkIiwiZ2V0UmVjYXB0Y2hhUGFyYW1zIiwicmVjYXB0Y2hhU2l0ZUtleSIsImdldFJlY2FwdGNoYUNvbmZpZyIsImRlbGV0ZUFjY291bnQiLCJkZWxldGVMaW5rZWRBY2NvdW50cyIsImdldEFjY291bnRJbmZvIiwidXRjVGltZXN0YW1wVG9EYXRlU3RyaW5nIiwidXRjVGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJOdW1iZXIiLCJpc05hTiIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsInVzZXIiLCJmb3JjZVJlZnJlc2giLCJnZXRNb2R1bGFySW5zdGFuY2UiLCJ1c2VySW50ZXJuYWwiLCJ0b2tlbiIsImNsYWltcyIsIl9wYXJzZVRva2VuIiwiZXhwIiwiYXV0aF90aW1lIiwiaWF0IiwiZmlyZWJhc2UiLCJzaWduSW5Qcm92aWRlciIsImF1dGhUaW1lIiwic2Vjb25kc1N0cmluZ1RvTWlsbGlzZWNvbmRzIiwiaXNzdWVkQXRUaW1lIiwiZXhwaXJhdGlvblRpbWUiLCJzaWduSW5TZWNvbmRGYWN0b3IiLCJzZWNvbmRzIiwiYWxnb3JpdGhtIiwicGF5bG9hZCIsInNpZ25hdHVyZSIsImRlY29kZWQiLCJiYXNlNjREZWNvZGUiLCJwYXJzZSIsInRvU3RyaW5nIiwiX3Rva2VuRXhwaXJlc0luIiwicGFyc2VkVG9rZW4iLCJfbG9nb3V0SWZJbnZhbGlkYXRlZCIsImJ5cGFzc0F1dGhTdGF0ZSIsImlzVXNlckludmFsaWRhdGVkIiwiY3VycmVudFVzZXIiLCJQcm9hY3RpdmVSZWZyZXNoIiwiaXNSdW5uaW5nIiwidGltZXJJZCIsImVycm9yQmFja29mZiIsIl9zdGFydCIsInNjaGVkdWxlIiwiX3N0b3AiLCJnZXRJbnRlcnZhbCIsIndhc0Vycm9yIiwiaW50ZXJ2YWwiLCJleHBUaW1lIiwic3RzVG9rZW5NYW5hZ2VyIiwibm93IiwibWF4IiwiaXRlcmF0aW9uIiwiVXNlck1ldGFkYXRhIiwiY3JlYXRlZEF0IiwibGFzdExvZ2luQXQiLCJfaW5pdGlhbGl6ZVRpbWUiLCJsYXN0U2lnbkluVGltZSIsImNyZWF0aW9uVGltZSIsIl9jb3B5IiwibWV0YWRhdGEiLCJ0b0pTT04iLCJfcmVsb2FkV2l0aG91dFNhdmluZyIsImlkVG9rZW4iLCJ1c2VycyIsImNvcmVBY2NvdW50IiwiX25vdGlmeVJlbG9hZExpc3RlbmVyIiwibmV3UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJVc2VySW5mbyIsImV4dHJhY3RQcm92aWRlckRhdGEiLCJwcm92aWRlckRhdGEiLCJtZXJnZVByb3ZpZGVyRGF0YSIsIm9sZElzQW5vbnltb3VzIiwiaXNBbm9ueW1vdXMiLCJuZXdJc0Fub255bW91cyIsInBhc3N3b3JkSGFzaCIsInVwZGF0ZXMiLCJ1aWQiLCJsb2NhbElkIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsInBob3RvVXJsIiwiZW1haWxWZXJpZmllZCIsIl9wZXJzaXN0VXNlcklmQ3VycmVudCIsIl9ub3RpZnlMaXN0ZW5lcnNJZkN1cnJlbnQiLCJvcmlnaW5hbCIsIm5ld0RhdGEiLCJkZWR1cGVkIiwiZmlsdGVyIiwibyIsInNvbWUiLCJuIiwicHJvdmlkZXJJZCIsInByb3ZpZGVycyIsIm1hcCIsImltcG9ydF90c2xpYiIsIl9fcmVzdCIsInJhd0lkIiwicmVxdWVzdFN0c1Rva2VuIiwicmVmcmVzaFRva2VuIiwidG9rZW5BcGlIb3N0IiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzSW4iLCJleHBpcmVzX2luIiwicmVmcmVzaF90b2tlbiIsInJldm9rZVRva2VuIiwiU3RzVG9rZW5NYW5hZ2VyIiwiaXNFeHBpcmVkIiwidXBkYXRlRnJvbVNlcnZlclJlc3BvbnNlIiwidXBkYXRlVG9rZW5zQW5kRXhwaXJhdGlvbiIsInVwZGF0ZUZyb21JZFRva2VuIiwiZ2V0VG9rZW4iLCJyZWZyZXNoIiwiY2xlYXJSZWZyZXNoVG9rZW4iLCJvbGRUb2tlbiIsImV4cGlyZXNJblNlYyIsImZyb21KU09OIiwibWFuYWdlciIsIl9hc3NpZ24iLCJfY2xvbmUiLCJfcGVyZm9ybVJlZnJlc2giLCJhc3NlcnRTdHJpbmdPclVuZGVmaW5lZCIsIlVzZXJJbXBsIiwib3B0IiwicHJvYWN0aXZlUmVmcmVzaCIsInJlbG9hZFVzZXJJbmZvIiwicmVsb2FkTGlzdGVuZXIiLCJ1c2VySW5mbyIsIm5ld1VzZXIiLCJfb25SZWxvYWQiLCJjYWxsYmFjayIsIl9zdGFydFByb2FjdGl2ZVJlZnJlc2giLCJfc3RvcFByb2FjdGl2ZVJlZnJlc2giLCJfdXBkYXRlVG9rZW5zSWZOZWNlc3NhcnkiLCJyZWxvYWQyIiwidG9rZW5zUmVmcmVzaGVkIiwiZGVsZXRlIiwiX2lzRmlyZWJhc2VTZXJ2ZXJBcHAiLCJhcHAiLCJfcmVkaXJlY3RFdmVudElkIiwiX2Zyb21KU09OIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJfZiIsIl9nIiwiX2giLCJwbGFpbk9iamVjdFRva2VuTWFuYWdlciIsIkFycmF5IiwiaXNBcnJheSIsIl9mcm9tSWRUb2tlblJlc3BvbnNlIiwiaWRUb2tlblJlc3BvbnNlIiwiX2Zyb21HZXRBY2NvdW50SW5mb1Jlc3BvbnNlIiwiaW5zdGFuY2VDYWNoZSIsIk1hcCIsIl9nZXRJbnN0YW5jZSIsImNscyIsIkZ1bmN0aW9uIiwic2V0IiwiSW5NZW1vcnlQZXJzaXN0ZW5jZSIsInR5cGUiLCJzdG9yYWdlIiwiX2lzQXZhaWxhYmxlIiwiX3NldCIsInZhbHVlIiwiX2dldCIsIl9yZW1vdmUiLCJfYWRkTGlzdGVuZXIiLCJfa2V5IiwiX2xpc3RlbmVyIiwiX3JlbW92ZUxpc3RlbmVyIiwiX3BlcnNpc3RlbmNlS2V5TmFtZSIsIlBlcnNpc3RlbmNlVXNlck1hbmFnZXIiLCJwZXJzaXN0ZW5jZSIsInVzZXJLZXkiLCJuYW1lMiIsImZ1bGxVc2VyS2V5IiwiZnVsbFBlcnNpc3RlbmNlS2V5IiwiYm91bmRFdmVudEhhbmRsZXIiLCJfb25TdG9yYWdlRXZlbnQiLCJiaW5kIiwic2V0Q3VycmVudFVzZXIiLCJnZXRDdXJyZW50VXNlciIsImJsb2IiLCJyZW1vdmVDdXJyZW50VXNlciIsInNhdmVQZXJzaXN0ZW5jZUZvclJlZGlyZWN0IiwibmV3UGVyc2lzdGVuY2UiLCJwZXJzaXN0ZW5jZUhpZXJhcmNoeSIsImF2YWlsYWJsZVBlcnNpc3RlbmNlcyIsImFsbCIsInNlbGVjdGVkUGVyc2lzdGVuY2UiLCJ1c2VyVG9NaWdyYXRlIiwibWlncmF0aW9uSGllcmFyY2h5IiwicCIsIl9zaG91bGRBbGxvd01pZ3JhdGlvbiIsIl9nZXRCcm93c2VyTmFtZSIsInVzZXJBZ2VudCIsInVhIiwiaW5jbHVkZXMiLCJfaXNJRU1vYmlsZSIsIl9pc0ZpcmVmb3giLCJfaXNCbGFja0JlcnJ5IiwiX2lzV2ViT1MiLCJfaXNTYWZhcmkiLCJfaXNDaHJvbWVJT1MiLCJfaXNBbmRyb2lkIiwicmUiLCJtYXRjaGVzIiwibWF0Y2giLCJnZXRVQSIsInRlc3QiLCJfaXNJT1MiLCJfaXNJT1M3T3I4IiwiX2lzSU9TU3RhbmRhbG9uZSIsIndpbmRvdyIsInN0YW5kYWxvbmUiLCJfaXNJRTEwIiwiaXNJRSIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiX2lzTW9iaWxlQnJvd3NlciIsIl9nZXRDbGllbnRWZXJzaW9uIiwiY2xpZW50UGxhdGZvcm0iLCJmcmFtZXdvcmtzIiwicmVwb3J0ZWRQbGF0Zm9ybSIsInJlcG9ydGVkRnJhbWV3b3JrcyIsImpvaW4iLCJBdXRoTWlkZGxld2FyZVF1ZXVlIiwicXVldWUiLCJwdXNoQ2FsbGJhY2siLCJvbkFib3J0Iiwid3JhcHBlZENhbGxiYWNrIiwicmVzb2x2ZSIsInJlc3VsdCIsInB1c2giLCJpbmRleCIsInJ1bk1pZGRsZXdhcmUiLCJuZXh0VXNlciIsIm9uQWJvcnRTdGFjayIsImJlZm9yZVN0YXRlQ2FsbGJhY2siLCJyZXZlcnNlIiwib3JpZ2luYWxNZXNzYWdlIiwiX2dldFBhc3N3b3JkUG9saWN5IiwiTUlOSU1VTV9NSU5fUEFTU1dPUkRfTEVOR1RIIiwiUGFzc3dvcmRQb2xpY3lJbXBsIiwicmVzcG9uc2VPcHRpb25zIiwiY3VzdG9tU3RyZW5ndGhPcHRpb25zIiwibWluUGFzc3dvcmRMZW5ndGgiLCJtYXhQYXNzd29yZExlbmd0aCIsImNvbnRhaW5zTG93ZXJjYXNlQ2hhcmFjdGVyIiwiY29udGFpbnNMb3dlcmNhc2VMZXR0ZXIiLCJjb250YWluc1VwcGVyY2FzZUNoYXJhY3RlciIsImNvbnRhaW5zVXBwZXJjYXNlTGV0dGVyIiwiY29udGFpbnNOdW1lcmljQ2hhcmFjdGVyIiwiY29udGFpbnNOb25BbHBoYW51bWVyaWNDaGFyYWN0ZXIiLCJhbGxvd2VkTm9uQWxwaGFudW1lcmljQ2hhcmFjdGVycyIsImZvcmNlVXBncmFkZU9uU2lnbmluIiwic2NoZW1hVmVyc2lvbiIsInBhc3N3b3JkIiwic3RhdHVzIiwiaXNWYWxpZCIsInBhc3N3b3JkUG9saWN5IiwidmFsaWRhdGVQYXNzd29yZExlbmd0aE9wdGlvbnMiLCJ2YWxpZGF0ZVBhc3N3b3JkQ2hhcmFjdGVyT3B0aW9ucyIsIm1lZXRzTWluUGFzc3dvcmRMZW5ndGgiLCJtZWV0c01heFBhc3N3b3JkTGVuZ3RoIiwidXBkYXRlUGFzc3dvcmRDaGFyYWN0ZXJPcHRpb25zU3RhdHVzZXMiLCJwYXNzd29yZENoYXIiLCJpIiwiY2hhckF0IiwiQXV0aEltcGwiLCJoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIiLCJhcHBDaGVja1NlcnZpY2VQcm92aWRlciIsImVtdWxhdG9yQ29uZmlnIiwib3BlcmF0aW9ucyIsImF1dGhTdGF0ZVN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkVG9rZW5TdWJzY3JpcHRpb24iLCJiZWZvcmVTdGF0ZVF1ZXVlIiwicmVkaXJlY3RVc2VyIiwiaXNQcm9hY3RpdmVSZWZyZXNoRW5hYmxlZCIsIkVYUEVDVEVEX1BBU1NXT1JEX1BPTElDWV9TQ0hFTUFfVkVSU0lPTiIsIl9pc0luaXRpYWxpemVkIiwiX2RlbGV0ZWQiLCJfaW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiX3BvcHVwUmVkaXJlY3RSZXNvbHZlciIsIl9hZ2VudFJlY2FwdGNoYUNvbmZpZyIsIl90ZW5hbnRSZWNhcHRjaGFDb25maWdzIiwiX3Byb2plY3RQYXNzd29yZFBvbGljeSIsIl90ZW5hbnRQYXNzd29yZFBvbGljaWVzIiwibGFzdE5vdGlmaWVkVWlkIiwic2V0dGluZ3MiLCJhcHBWZXJpZmljYXRpb25EaXNhYmxlZEZvclRlc3RpbmciLCJjbGllbnRWZXJzaW9uIiwic2RrQ2xpZW50VmVyc2lvbiIsIl9pbml0aWFsaXplV2l0aFBlcnNpc3RlbmNlIiwicG9wdXBSZWRpcmVjdFJlc29sdmVyIiwicGVyc2lzdGVuY2VNYW5hZ2VyIiwiX3Nob3VsZEluaXRQcm9hY3RpdmVseSIsIl9pbml0aWFsaXplIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyIiwiYXNzZXJ0ZWRQZXJzaXN0ZW5jZSIsIl9jdXJyZW50VXNlciIsIl91cGRhdGVDdXJyZW50VXNlciIsImluaXRpYWxpemVDdXJyZW50VXNlckZyb21JZFRva2VuIiwiZGlyZWN0bHlTZXRDdXJyZW50VXNlciIsImVyciIsImNvbnNvbGUiLCJhdXRoSWRUb2tlbiIsInRoZW4iLCJwcmV2aW91c2x5U3RvcmVkVXNlciIsImZ1dHVyZUN1cnJlbnRVc2VyIiwibmVlZHNUb2NoZWNrTWlkZGxld2FyZSIsImF1dGhEb21haW4iLCJnZXRPckluaXRSZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsInJlZGlyZWN0VXNlckV2ZW50SWQiLCJzdG9yZWRVc2VyRXZlbnRJZCIsInRyeVJlZGlyZWN0U2lnbkluIiwiX292ZXJyaWRlUmVkaXJlY3RSZXN1bHQiLCJyZWxvYWRBbmRTZXRDdXJyZW50VXNlck9yQ2xlYXIiLCJyZWRpcmVjdFJlc29sdmVyIiwiX2NvbXBsZXRlUmVkaXJlY3RGbiIsIl9zZXRSZWRpcmVjdFVzZXIiLCJfZGVsZXRlIiwidXNlckV4dGVybiIsInNraXBCZWZvcmVTdGF0ZUNhbGxiYWNrcyIsIm5vdGlmeUF1dGhMaXN0ZW5lcnMiLCJyZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsIl9nZXRSZWNhcHRjaGFDb25maWciLCJfZ2V0UGFzc3dvcmRQb2xpY3lJbnRlcm5hbCIsIl91cGRhdGVQYXNzd29yZFBvbGljeSIsIl9nZXRQZXJzaXN0ZW5jZSIsIl91cGRhdGVFcnJvck1hcCIsIm5leHRPck9ic2VydmVyIiwiY29tcGxldGVkIiwicmVnaXN0ZXJTdGF0ZUxpc3RlbmVyIiwiYXV0aFN0YXRlUmVhZHkiLCJ1bnN1YnNjcmliZSIsInRva2VuVHlwZSIsInJlZGlyZWN0TWFuYWdlciIsInJlc29sdmVyIiwiX3JlZGlyZWN0UGVyc2lzdGVuY2UiLCJfcmVkaXJlY3RVc2VyRm9ySWQiLCJpZCIsIm5leHQiLCJjdXJyZW50VWlkIiwic3Vic2NyaXB0aW9uIiwiY2IiLCJpc1Vuc3Vic2NyaWJlZCIsImFkZE9ic2VydmVyIiwiYWN0aW9uIiwiX2xvZ0ZyYW1ld29yayIsImZyYW1ld29yayIsInNvcnQiLCJfZ2V0RnJhbWV3b3JrcyIsIm9wdGlvbnMiLCJhcHBJZCIsImhlYXJ0YmVhdHNIZWFkZXIiLCJnZXRJbW1lZGlhdGUiLCJvcHRpb25hbCIsImdldEhlYXJ0YmVhdHNIZWFkZXIiLCJhcHBDaGVja1Rva2VuIiwiX2dldEFwcENoZWNrVG9rZW4iLCJhcHBDaGVja1Rva2VuUmVzdWx0IiwiX2Nhc3RBdXRoIiwib2JzZXJ2ZXIiLCJjcmVhdGVTdWJzY3JpYmUiLCJleHRlcm5hbEpTUHJvdmlkZXIiLCJsb2FkSlMiLCJyZWNhcHRjaGFWMlNjcmlwdCIsInJlY2FwdGNoYUVudGVycHJpc2VTY3JpcHQiLCJnYXBpU2NyaXB0IiwiX3NldEV4dGVybmFsSlNQcm92aWRlciIsIl9sb2FkSlMiLCJfcmVjYXB0Y2hhVjJTY3JpcHRVcmwiLCJfcmVjYXB0Y2hhRW50ZXJwcmlzZVNjcmlwdFVybCIsIl9nYXBpU2NyaXB0VXJsIiwiX2dlbmVyYXRlQ2FsbGJhY2tOYW1lIiwicHJlZml4IiwiZmxvb3IiLCJyYW5kb20iLCJSRUNBUFRDSEFfRU5URVJQUklTRV9WRVJJRklFUl9UWVBFIiwiRkFLRV9UT0tFTiIsIlJlY2FwdGNoYUVudGVycHJpc2VWZXJpZmllciIsImF1dGhFeHRlcm4iLCJ2ZXJpZnkiLCJyZXRyaWV2ZVNpdGVLZXkiLCJjbGllbnRUeXBlIiwidmVyc2lvbiIsImNhdGNoIiwicmV0cmlldmVSZWNhcHRjaGFUb2tlbiIsInJlYWR5IiwiZXhlY3V0ZSIsImluamVjdFJlY2FwdGNoYUZpZWxkcyIsImNhcHRjaGFSZXNwIiwidmVyaWZpZXIiLCJjYXB0Y2hhUmVzcG9uc2UiLCJuZXdSZXF1ZXN0IiwiaGFuZGxlUmVjYXB0Y2hhRmxvdyIsImF1dGhJbnN0YW5jZSIsImFjdGlvbk5hbWUiLCJhY3Rpb25NZXRob2QiLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYSIsImxvZyIsIl9pbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiYXV0aEludGVybmFsIiwiZGVwcyIsIl9nZXRQcm92aWRlciIsImlzSW5pdGlhbGl6ZWQiLCJhdXRoMiIsImluaXRpYWxPcHRpb25zIiwiZ2V0T3B0aW9ucyIsImRlZXBFcXVhbCIsIl9pbml0aWFsaXplQXV0aEluc3RhbmNlIiwiaGllcmFyY2h5IiwiZGlzYWJsZVdhcm5pbmdzIiwiZXh0cmFjdFByb3RvY29sIiwicG9ydCIsImV4dHJhY3RIb3N0QW5kUG9ydCIsInBvcnRTdHIiLCJmcmVlemUiLCJlbWl0RW11bGF0b3JXYXJuaW5nIiwicHJvdG9jb2xFbmQiLCJpbmRleE9mIiwic3Vic3RyIiwiYXV0aG9yaXR5IiwiZXhlYyIsImhvc3RBbmRQb3J0IiwicG9wIiwiYnJhY2tldGVkSVB2NiIsInBhcnNlUG9ydCIsImF0dGFjaEJhbm5lciIsImVsIiwiY3JlYXRlRWxlbWVudCIsInN0eSIsInN0eWxlIiwiaW5uZXJUZXh0IiwicG9zaXRpb24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImNvbG9yIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbiIsInpJbmRleCIsInRleHRBbGlnbiIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiaW5mbyIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2lnbkluTWV0aG9kIiwiX2dldElkVG9rZW5SZXNwb25zZSIsIl9hdXRoIiwiX2xpbmtUb0lkVG9rZW4iLCJfaWRUb2tlbiIsIl9nZXRSZWF1dGhlbnRpY2F0aW9uUmVzb2x2ZXIiLCJyZXNldFBhc3N3b3JkIiwidXBkYXRlRW1haWxQYXNzd29yZCIsImxpbmtFbWFpbFBhc3N3b3JkIiwiYXBwbHlBY3Rpb25Db2RlJDEiLCJzaWduSW5XaXRoUGFzc3dvcmQiLCJzZW5kT29iQ29kZSIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiQxIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCQxIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsJDEiLCJ2ZXJpZnlBbmRDaGFuZ2VFbWFpbCIsInNpZ25JbldpdGhFbWFpbExpbmskMSIsInNpZ25JbldpdGhFbWFpbExpbmtGb3JMaW5raW5nIiwiX2VtYWlsIiwiX3Bhc3N3b3JkIiwiX3RlbmFudElkIiwiX2Zyb21FbWFpbEFuZFBhc3N3b3JkIiwiX2Zyb21FbWFpbEFuZENvZGUiLCJvb2JDb2RlIiwib2JqIiwicmV0dXJuU2VjdXJlVG9rZW4iLCJzaWduSW5XaXRoSWRwIiwiSURQX1JFUVVFU1RfVVJJJDEiLCJwZW5kaW5nVG9rZW4iLCJfZnJvbVBhcmFtcyIsImNyZWQiLCJub25jZSIsIm9hdXRoVG9rZW4iLCJvYXV0aFRva2VuU2VjcmV0Iiwic2VjcmV0IiwiYnVpbGRSZXF1ZXN0IiwiYXV0b0NyZWF0ZSIsInJlcXVlc3RVcmkiLCJwb3N0Qm9keSIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGUiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIkMSIsImxpbmtXaXRoUGhvbmVOdW1iZXIkMSIsInRlbXBvcmFyeVByb29mIiwiVkVSSUZZX1BIT05FX05VTUJFUl9GT1JfRVhJU1RJTkdfRVJST1JfTUFQXyIsInZlcmlmeVBob25lTnVtYmVyRm9yRXhpc3RpbmciLCJhcGlSZXF1ZXN0Iiwib3BlcmF0aW9uIiwiX2Zyb21WZXJpZmljYXRpb24iLCJ2ZXJpZmljYXRpb25JZCIsInZlcmlmaWNhdGlvbkNvZGUiLCJfZnJvbVRva2VuUmVzcG9uc2UiLCJfbWFrZVZlcmlmaWNhdGlvblJlcXVlc3QiLCJzZXNzaW9uSW5mbyIsInBhcnNlTW9kZSIsIm1vZGUiLCJwYXJzZURlZXBMaW5rIiwibGluayIsInF1ZXJ5c3RyaW5nRGVjb2RlIiwiZXh0cmFjdFF1ZXJ5c3RyaW5nIiwiZG91YmxlRGVlcExpbmsiLCJpT1NEZWVwTGluayIsImlPU0RvdWJsZURlZXBMaW5rIiwiYWN0aW9uTGluayIsInNlYXJjaFBhcmFtcyIsImNvbnRpbnVlVXJsIiwicGFyc2VMaW5rIiwiUFJPVklERVJfSUQiLCJjcmVkZW50aWFsIiwiY3JlZGVudGlhbFdpdGhMaW5rIiwiZW1haWxMaW5rIiwiYWN0aW9uQ29kZVVybCIsIkVNQUlMX1BBU1NXT1JEX1NJR05fSU5fTUVUSE9EIiwiRU1BSUxfTElOS19TSUdOX0lOX01FVEhPRCIsIkZlZGVyYXRlZEF1dGhQcm92aWRlciIsImRlZmF1bHRMYW5ndWFnZUNvZGUiLCJjdXN0b21QYXJhbWV0ZXJzIiwic2V0RGVmYXVsdExhbmd1YWdlIiwic2V0Q3VzdG9tUGFyYW1ldGVycyIsImN1c3RvbU9BdXRoUGFyYW1ldGVycyIsImdldEN1c3RvbVBhcmFtZXRlcnMiLCJCYXNlT0F1dGhQcm92aWRlciIsInNjb3BlcyIsImFkZFNjb3BlIiwic2NvcGUiLCJnZXRTY29wZXMiLCJjcmVkZW50aWFsRnJvbUpTT04iLCJfY3JlZGVudGlhbCIsInJhd05vbmNlIiwiY3JlZGVudGlhbEZyb21SZXN1bHQiLCJ1c2VyQ3JlZGVudGlhbCIsIm9hdXRoQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJjcmVkZW50aWFsRnJvbUVycm9yIiwidG9rZW5SZXNwb25zZSIsIm9hdXRoSWRUb2tlbiIsIm9hdXRoQWNjZXNzVG9rZW4iLCJGQUNFQk9PS19TSUdOX0lOX01FVEhPRCIsImNyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiR09PR0xFX1NJR05fSU5fTUVUSE9EIiwiR0lUSFVCX1NJR05fSU5fTUVUSE9EIiwiSURQX1JFUVVFU1RfVVJJIiwiU0FNTEF1dGhDcmVkZW50aWFsIiwiX2NyZWF0ZSIsIlNBTUxfUFJPVklERVJfUFJFRklYIiwic2FtbENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiVFdJVFRFUl9TSUdOX0lOX01FVEhPRCIsInNpZ25VcCIsIlVzZXJDcmVkZW50aWFsSW1wbCIsIm9wZXJhdGlvblR5cGUiLCJwcm92aWRlcklkRm9yUmVzcG9uc2UiLCJ1c2VyQ3JlZCIsIl9mb3JPcGVyYXRpb24iLCJNdWx0aUZhY3RvckVycm9yIiwic2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJfZnJvbUVycm9yQW5kT3BlcmF0aW9uIiwiX3Byb2Nlc3NDcmVkZW50aWFsU2F2aW5nTWZhQ29udGV4dElmTmVjZXNzYXJ5IiwiaWRUb2tlblByb3ZpZGVyIiwicHJvdmlkZXJEYXRhQXNOYW1lcyIsIlNldCIsInBpZCIsIl9hc3NlcnRMaW5rZWRTdGF0dXMiLCJkZWxldGVQcm92aWRlciIsInByb3ZpZGVyc0xlZnQiLCJwZCIsImhhcyIsIl9saW5rJDEiLCJleHBlY3RlZCIsInByb3ZpZGVySWRzIiwiX3JlYXV0aGVudGljYXRlIiwicGFyc2VkIiwic3ViIiwiX3NpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuJDEiLCJjdXN0b21Ub2tlbiIsIk11bHRpRmFjdG9ySW5mb0ltcGwiLCJmYWN0b3JJZCIsIm1mYUVucm9sbG1lbnRJZCIsImVucm9sbG1lbnRUaW1lIiwiZW5yb2xsZWRBdCIsIl9mcm9tU2VydmVyUmVzcG9uc2UiLCJlbnJvbGxtZW50IiwiUGhvbmVNdWx0aUZhY3RvckluZm9JbXBsIiwiVG90cE11bHRpRmFjdG9ySW5mb0ltcGwiLCJwaG9uZUluZm8iLCJfc2V0QWN0aW9uQ29kZVNldHRpbmdzT25SZXF1ZXN0IiwiYWN0aW9uQ29kZVNldHRpbmdzIiwiZHluYW1pY0xpbmtEb21haW4iLCJjYW5IYW5kbGVDb2RlSW5BcHAiLCJoYW5kbGVDb2RlSW5BcHAiLCJpT1MiLCJidW5kbGVJZCIsImlPU0J1bmRsZUlkIiwiYW5kcm9pZCIsInBhY2thZ2VOYW1lIiwiYW5kcm9pZEluc3RhbGxBcHAiLCJpbnN0YWxsQXBwIiwiYW5kcm9pZE1pbmltdW1WZXJzaW9uQ29kZSIsIm1pbmltdW1WZXJzaW9uIiwiYW5kcm9pZFBhY2thZ2VOYW1lIiwicmVjYWNoZVBhc3N3b3JkUG9saWN5IiwicmVxdWVzdFR5cGUiLCJuZXdQYXNzd29yZCIsImF1dGhNb2R1bGFyIiwibmV3RW1haWwiLCJtZmFJbmZvIiwibXVsdGlGYWN0b3JJbmZvIiwiZGF0YSIsInByZXZpb3VzRW1haWwiLCJzaWduVXBSZXNwb25zZSIsInNldEFjdGlvbkNvZGVTZXR0aW5ncyIsInJlcXVlc3QyIiwiYWN0aW9uQ29kZVNldHRpbmdzMiIsImNyZWF0ZUF1dGhVcmkiLCJjb250aW51ZVVyaSIsImlkZW50aWZpZXIiLCJzaWduaW5NZXRob2RzIiwidXBkYXRlUHJvZmlsZSQxIiwicHJvZmlsZVJlcXVlc3QiLCJwYXNzd29yZFByb3ZpZGVyIiwiZmluZCIsInVwZGF0ZUVtYWlsT3JQYXNzd29yZCIsInByb2ZpbGUiLCJyYXdVc2VySW5mbyIsImlzTmV3VXNlciIsImtpbmQiLCJmaWx0ZXJlZFByb3ZpZGVySWQiLCJHZW5lcmljQWRkaXRpb25hbFVzZXJJbmZvIiwiRmFjZWJvb2tBZGRpdGlvbmFsVXNlckluZm8iLCJHaXRodWJBZGRpdGlvbmFsVXNlckluZm8iLCJHb29nbGVBZGRpdGlvbmFsVXNlckluZm8iLCJUd2l0dGVyQWRkaXRpb25hbFVzZXJJbmZvIiwic2NyZWVuTmFtZSIsIkZlZGVyYXRlZEFkZGl0aW9uYWxVc2VySW5mb1dpdGhVc2VybmFtZSIsInVzZXJuYW1lIiwibG9naW4iLCJNdWx0aUZhY3RvclNlc3Npb25JbXBsIiwiX2Zyb21JZHRva2VuIiwiX2Zyb21NZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm1mYVBlbmRpbmdDcmVkZW50aWFsIiwibXVsdGlGYWN0b3JTZXNzaW9uIiwicGVuZGluZ0NyZWRlbnRpYWwiLCJNdWx0aUZhY3RvclJlc29sdmVySW1wbCIsInNlc3Npb24iLCJoaW50cyIsInNpZ25JblJlc29sdmVyIiwiX2Zyb21FcnJvciIsIm1mYVJlc3BvbnNlIiwiX3Byb2Nlc3MiLCJyZXNvbHZlU2lnbkluIiwiYXNzZXJ0aW9uRXh0ZXJuIiwiZXJyb3JJbnRlcm5hbCIsInN0YXJ0RW5yb2xsUGhvbmVNZmEiLCJmaW5hbGl6ZUVucm9sbFBob25lTWZhIiwic3RhcnRFbnJvbGxUb3RwTWZhIiwiZmluYWxpemVFbnJvbGxUb3RwTWZhIiwid2l0aGRyYXdNZmEiLCJNdWx0aUZhY3RvclVzZXJJbXBsIiwiZW5yb2xsZWRGYWN0b3JzIiwiX2Zyb21Vc2VyIiwiZ2V0U2Vzc2lvbiIsImVucm9sbCIsImZpbmFsaXplTWZhUmVzcG9uc2UiLCJ1bmVucm9sbCIsImluZm9PclVpZCIsIm11bHRpRmFjdG9yVXNlckNhY2hlIiwiV2Vha01hcCIsInVzZXJNb2R1bGFyIiwiU1RPUkFHRV9BVkFJTEFCTEVfS0VZIiwiQnJvd3NlclBlcnNpc3RlbmNlQ2xhc3MiLCJzdG9yYWdlUmV0cmlldmVyIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwiX1BPTExJTkdfSU5URVJWQUxfTVMkMSIsIklFMTBfTE9DQUxfU1RPUkFHRV9TWU5DX0RFTEFZIiwiQnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJldmVudCIsInBvbGwiLCJvblN0b3JhZ2VFdmVudCIsImxpc3RlbmVycyIsImxvY2FsQ2FjaGUiLCJwb2xsVGltZXIiLCJmYWxsYmFja1RvUG9sbGluZyIsImZvckFsbENoYW5nZWRLZXlzIiwia2V5cyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJrZXkyIiwiX29sZFZhbHVlIiwibm90aWZ5TGlzdGVuZXJzIiwiZGV0YWNoTGlzdGVuZXIiLCJzdG9wUG9sbGluZyIsInRyaWdnZXJMaXN0ZW5lcnMiLCJzdG9yZWRWYWx1ZTIiLCJzdG9yZWRWYWx1ZSIsImxpc3RlbmVyIiwiZnJvbSIsInN0YXJ0UG9sbGluZyIsInNldEludGVydmFsIiwiU3RvcmFnZUV2ZW50IiwiY2xlYXJJbnRlcnZhbCIsImF0dGFjaExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpemUiLCJCcm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwic2Vzc2lvblN0b3JhZ2UiLCJfYWxsU2V0dGxlZCIsInByb21pc2VzIiwiZnVsZmlsbGVkIiwicmVhc29uIiwiUmVjZWl2ZXIiLCJldmVudFRhcmdldCIsImhhbmRsZXJzTWFwIiwiaGFuZGxlRXZlbnQiLCJleGlzdGluZ0luc3RhbmNlIiwicmVjZWl2ZXJzIiwicmVjZWl2ZXIiLCJpc0xpc3RlbmluZ3RvIiwibmV3SW5zdGFuY2UiLCJtZXNzYWdlRXZlbnQiLCJldmVudElkIiwiZXZlbnRUeXBlIiwiaGFuZGxlcnMiLCJwb3J0cyIsInBvc3RNZXNzYWdlIiwiaGFuZGxlciIsIm9yaWdpbiIsIl9zdWJzY3JpYmUiLCJldmVudEhhbmRsZXIiLCJfdW5zdWJzY3JpYmUiLCJfZ2VuZXJhdGVFdmVudElkIiwiZGlnaXRzIiwiU2VuZGVyIiwidGFyZ2V0IiwicmVtb3ZlTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25NZXNzYWdlIiwiY2xvc2UiLCJfc2VuZCIsInRpbWVvdXQiLCJNZXNzYWdlQ2hhbm5lbCIsImNvbXBsZXRpb25UaW1lciIsInN0YXJ0IiwiYWNrVGltZXIiLCJwb3J0MiIsImZpbmFsbHkiLCJfd2luZG93IiwiX3NldFdpbmRvd0xvY2F0aW9uIiwiX2lzV29ya2VyIiwiX2dldEFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0cmF0aW9uIiwiYWN0aXZlIiwiX2dldFNlcnZpY2VXb3JrZXJDb250cm9sbGVyIiwiY29udHJvbGxlciIsIl9nZXRXb3JrZXJHbG9iYWxTY29wZSIsIkRCX05BTUUiLCJEQl9WRVJTSU9OIiwiREJfT0JKRUNUU1RPUkVfTkFNRSIsIkRCX0RBVEFfS0VZUEFUSCIsIkRCUHJvbWlzZSIsInRvUHJvbWlzZSIsImdldE9iamVjdFN0b3JlIiwiZGIiLCJpc1JlYWRXcml0ZSIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJfZGVsZXRlRGF0YWJhc2UiLCJpbmRleGVkREIiLCJkZWxldGVEYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJvcGVuIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwiX3B1dE9iamVjdCIsInB1dCIsImdldE9iamVjdCIsIl9kZWxldGVPYmplY3QiLCJfUE9MTElOR19JTlRFUlZBTF9NUyIsIl9UUkFOU0FDVElPTl9SRVRSWV9DT1VOVCIsIkluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJwZW5kaW5nV3JpdGVzIiwic2VuZGVyIiwic2VydmljZVdvcmtlclJlY2VpdmVyQXZhaWxhYmxlIiwiYWN0aXZlU2VydmljZVdvcmtlciIsIl93b3JrZXJJbml0aWFsaXphdGlvblByb21pc2UiLCJpbml0aWFsaXplU2VydmljZVdvcmtlck1lc3NhZ2luZyIsIl9vcGVuRGIiLCJfd2l0aFJldHJpZXMiLCJvcCIsIm51bUF0dGVtcHRzIiwiaW5pdGlhbGl6ZVJlY2VpdmVyIiwiaW5pdGlhbGl6ZVNlbmRlciIsIl9vcmlnaW4iLCJfcG9sbCIsImtleVByb2Nlc3NlZCIsIl9kYXRhIiwicmVzdWx0cyIsIm5vdGlmeVNlcnZpY2VXb3JrZXIiLCJfd2l0aFBlbmRpbmdXcml0ZSIsIndyaXRlIiwiZ2V0QWxsUmVxdWVzdCIsImdldEFsbCIsImtleXNJblJlc3VsdCIsImZiYXNlX2tleSIsImxvY2FsS2V5Iiwic3RhcnRTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblRvdHBNZmEiLCJfU09MVkVfVElNRV9NUyIsIl9FWFBJUkFUSU9OX1RJTUVfTVMiLCJfV0lER0VUX0lEX1NUQVJUIiwiTW9ja1JlQ2FwdGNoYSIsImNvdW50ZXIiLCJfd2lkZ2V0cyIsInJlbmRlciIsImNvbnRhaW5lciIsInBhcmFtZXRlcnMiLCJNb2NrV2lkZ2V0IiwicmVzZXQiLCJvcHRXaWRnZXRJZCIsImNvbnRhaW5lck9ySWQiLCJkZWxldGVkIiwicmVzcG9uc2VUb2tlbiIsImNsaWNrSGFuZGxlciIsImdldEVsZW1lbnRCeUlkIiwiaXNWaXNpYmxlIiwiY2hlY2tJZkRlbGV0ZWQiLCJnZW5lcmF0ZVJhbmRvbUFscGhhTnVtZXJpY1N0cmluZyIsImV4cGlyZWRDYWxsYmFjayIsImxlbiIsImNoYXJzIiwiYWxsb3dlZENoYXJzIiwiX0pTTE9BRF9DQUxMQkFDSyIsIk5FVFdPUktfVElNRU9VVF9ERUxBWSIsIlJlQ2FwdGNoYUxvYWRlckltcGwiLCJob3N0TGFuZ3VhZ2UiLCJsaWJyYXJ5U2VwYXJhdGVseUxvYWRlZCIsImxvYWQiLCJobCIsImlzSG9zdExhbmd1YWdlVmFsaWQiLCJzaG91bGRSZXNvbHZlSW1tZWRpYXRlbHkiLCJyZWNhcHRjaGEiLCJ3aWRnZXRJZCIsIm9ubG9hZCIsImNsZWFyZWRPbmVJbnN0YW5jZSIsIk1vY2tSZUNhcHRjaGFMb2FkZXJJbXBsIiwiUkVDQVBUQ0hBX1ZFUklGSUVSX1RZUEUiLCJERUZBVUxUX1BBUkFNUyIsInRoZW1lIiwiZGVzdHJveWVkIiwidG9rZW5DaGFuZ2VMaXN0ZW5lcnMiLCJyZW5kZXJQcm9taXNlIiwiaXNJbnZpc2libGUiLCJtYWtlVG9rZW5DYWxsYmFjayIsIl9yZWNhcHRjaGFMb2FkZXIiLCJ2YWxpZGF0ZVN0YXJ0aW5nU3RhdGUiLCJhc3NlcnROb3REZXN0cm95ZWQiLCJnZXRBc3NlcnRlZFJlY2FwdGNoYSIsInRva2VuQ2hhbmdlIiwibWFrZVJlbmRlclByb21pc2UiLCJfcmVzZXQiLCJjbGVhciIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZUNoaWxkIiwic2l0ZWtleSIsImhhc0NoaWxkTm9kZXMiLCJleGlzdGluZyIsImdsb2JhbEZ1bmMiLCJpbml0IiwiZ3VhcmFudGVlZEVtcHR5IiwiZG9tUmVhZHkiLCJDb25maXJtYXRpb25SZXN1bHRJbXBsIiwib25Db25maXJtYXRpb24iLCJjb25maXJtIiwiYXV0aENyZWRlbnRpYWwiLCJhcHBWZXJpZmllciIsIl92ZXJpZnlQaG9uZU51bWJlciIsInJlY2FwdGNoYVRva2VuIiwicGhvbmVJbmZvT3B0aW9ucyIsInBob25lRW5yb2xsbWVudEluZm8iLCJwaG9uZVNlc3Npb25JbmZvIiwibXVsdGlGYWN0b3JIaW50IiwibXVsdGlGYWN0b3JVaWQiLCJwaG9uZVNpZ25JbkluZm8iLCJwaG9uZVJlc3BvbnNlSW5mbyIsInZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVPcHRpb25zIiwiYXBwbGljYXRpb25WZXJpZmllciIsIlBIT05FX1NJR05fSU5fTUVUSE9EIiwiX3dpdGhEZWZhdWx0UmVzb2x2ZXIiLCJyZXNvbHZlck92ZXJyaWRlIiwiSWRwQ3JlZGVudGlhbCIsIl9idWlsZElkcFJlcXVlc3QiLCJzZXNzaW9uSWQiLCJyZXR1cm5JZHBDcmVkZW50aWFsIiwiX3NpZ25JbiIsIl9yZWF1dGgiLCJfbGluayIsIkFic3RyYWN0UG9wdXBSZWRpcmVjdE9wZXJhdGlvbiIsInBlbmRpbmdQcm9taXNlIiwiZXZlbnRNYW5hZ2VyIiwib25FeGVjdXRpb24iLCJyZWdpc3RlckNvbnN1bWVyIiwib25BdXRoRXZlbnQiLCJ1cmxSZXNwb25zZSIsImdldElkcFRhc2siLCJvbkVycm9yIiwidW5yZWdpc3RlckFuZENsZWFuVXAiLCJ1bnJlZ2lzdGVyQ29uc3VtZXIiLCJjbGVhblVwIiwiX1BPTExfV0lORE9XX0NMT1NFX1RJTUVPVVQiLCJyZXNvbHZlckludGVybmFsIiwiUG9wdXBPcGVyYXRpb24iLCJleGVjdXRlTm90TnVsbCIsImF1dGhXaW5kb3ciLCJwb2xsSWQiLCJjdXJyZW50UG9wdXBBY3Rpb24iLCJjYW5jZWwiLCJfb3BlblBvcHVwIiwiYXNzb2NpYXRlZEV2ZW50IiwiX29yaWdpblZhbGlkYXRpb24iLCJfaXNJZnJhbWVXZWJTdG9yYWdlU3VwcG9ydGVkIiwiaXNTdXBwb3J0ZWQiLCJwb2xsVXNlckNhbmNlbGxhdGlvbiIsImNsb3NlZCIsIlBFTkRJTkdfUkVESVJFQ1RfS0VZIiwicmVkaXJlY3RPdXRjb21lTWFwIiwiUmVkaXJlY3RBY3Rpb24iLCJyZWFkeU91dGNvbWUiLCJoYXNQZW5kaW5nUmVkaXJlY3QiLCJfZ2V0QW5kQ2xlYXJQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJwZW5kaW5nUmVkaXJlY3RLZXkiLCJyZXNvbHZlclBlcnNpc3RlbmNlIiwiX3NldFBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsIl9jbGVhclJlZGlyZWN0T3V0Y29tZXMiLCJfc2lnbkluV2l0aFJlZGlyZWN0IiwiX29wZW5SZWRpcmVjdCIsIl9yZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInByZXBhcmVVc2VyRm9yUmVkaXJlY3QiLCJfbGlua1dpdGhSZWRpcmVjdCIsIl9nZXRSZWRpcmVjdFJlc3VsdCIsInJlc29sdmVyRXh0ZXJuIiwiRVZFTlRfRFVQTElDQVRJT05fQ0FDSEVfRFVSQVRJT05fTVMiLCJBdXRoRXZlbnRNYW5hZ2VyIiwiY2FjaGVkRXZlbnRVaWRzIiwiY29uc3VtZXJzIiwicXVldWVkUmVkaXJlY3RFdmVudCIsImhhc0hhbmRsZWRQb3RlbnRpYWxSZWRpcmVjdCIsImxhc3RQcm9jZXNzZWRFdmVudFRpbWUiLCJhdXRoRXZlbnRDb25zdW1lciIsImlzRXZlbnRGb3JDb25zdW1lciIsInNlbmRUb0NvbnN1bWVyIiwic2F2ZUV2ZW50VG9DYWNoZSIsIm9uRXZlbnQiLCJoYXNFdmVudEJlZW5IYW5kbGVkIiwiaGFuZGxlZCIsImNvbnN1bWVyIiwiaXNSZWRpcmVjdEV2ZW50IiwiaXNOdWxsUmVkaXJlY3RFdmVudCIsImV2ZW50SWRNYXRjaGVzIiwiZXZlbnRVaWQiLCJ2IiwiX2dldFByb2plY3RDb25maWciLCJJUF9BRERSRVNTX1JFR0VYIiwiSFRUUF9SRUdFWCIsIl92YWxpZGF0ZU9yaWdpbiIsImF1dGhvcml6ZWREb21haW5zIiwiZG9tYWluIiwibWF0Y2hEb21haW4iLCJjdXJyZW50VXJsIiwiaG9zdG5hbWUiLCJVUkwiLCJjZVVybCIsImVzY2FwZWREb21haW5QYXR0ZXJuIiwiUmVnRXhwIiwiTkVUV09SS19USU1FT1VUIiwicmVzZXRVbmxvYWRlZEdhcGlNb2R1bGVzIiwiYmVhY29uIiwiX19fanNsIiwiSCIsImhpbnQiLCJyIiwiTCIsIkNQIiwibG9hZEdhcGkiLCJsb2FkR2FwaUlmcmFtZSIsImdhcGkiLCJpZnJhbWVzIiwiZ2V0Q29udGV4dCIsIm9udGltZW91dCIsIklmcmFtZSIsImNiTmFtZSIsImNhY2hlZEdBcGlMb2FkZXIiLCJfbG9hZEdhcGkiLCJQSU5HX1RJTUVPVVQiLCJJRlJBTUVfUEFUSCIsIkVNVUxBVEVEX0lGUkFNRV9QQVRIIiwiSUZSQU1FX0FUVFJJQlVURVMiLCJ0b3AiLCJoZWlnaHQiLCJ0YWJpbmRleCIsIkVJRF9GUk9NX0FQSUhPU1QiLCJnZXRJZnJhbWVVcmwiLCJlaWQiLCJmdyIsIl9vcGVuSWZyYW1lIiwiY29udGV4dCIsImdhcGkyIiwid2hlcmUiLCJtZXNzYWdlSGFuZGxlcnNGaWx0ZXIiLCJDUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVIiLCJhdHRyaWJ1dGVzIiwiZG9udGNsZWFyIiwiaWZyYW1lIiwicmVzdHlsZSIsInNldEhpZGVPbkxlYXZlIiwibmV0d29ya0Vycm9yIiwibmV0d29ya0Vycm9yVGltZXIiLCJjbGVhclRpbWVyQW5kUmVzb2x2ZSIsInBpbmciLCJCQVNFX1BPUFVQX09QVElPTlMiLCJyZXNpemFibGUiLCJzdGF0dXNiYXIiLCJ0b29sYmFyIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiVEFSR0VUX0JMQU5LIiwiRklSRUZPWF9FTVBUWV9VUkwiLCJBdXRoUG9wdXAiLCJ3aW5kb3cyIiwiX29wZW4iLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImF2YWlsV2lkdGgiLCJzY3JvbGxiYXJzIiwib3B0aW9uc1N0cmluZyIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2N1bSIsIm9wZW5Bc05ld1dpbmRvd0lPUyIsIm5ld1dpbiIsImZvY3VzIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIldJREdFVF9QQVRIIiwiRU1VTEFUT1JfV0lER0VUX1BBVEgiLCJGSVJFQkFTRV9BUFBfQ0hFQ0tfRlJBR01FTlRfSUQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfZ2V0UmVkaXJlY3RVcmwiLCJhdXRoVHlwZSIsInJlZGlyZWN0VXJsIiwiYWRkaXRpb25hbFBhcmFtcyIsImlzRW1wdHkiLCJ0aWQiLCJwYXJhbXNEaWN0IiwiYXBwQ2hlY2tUb2tlbkZyYWdtZW50IiwiZ2V0SGFuZGxlckJhc2UiLCJXRUJfU1RPUkFHRV9TVVBQT1JUX0tFWSIsIkJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJldmVudE1hbmFnZXJzIiwib3JpZ2luVmFsaWRhdGlvblByb21pc2VzIiwicHJvbWlzZTIiLCJpbml0QW5kR2V0TWFuYWdlciIsInJlZ2lzdGVyIiwiaWZyYW1lRXZlbnQiLCJhdXRoRXZlbnQiLCJzZW5kIiwiTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2ZpbmFsaXplRW5yb2xsIiwiX2ZpbmFsaXplU2lnbkluIiwiUGhvbmVNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbUNyZWRlbnRpYWwiLCJwaG9uZVZlcmlmaWNhdGlvbkluZm8iLCJGQUNUT1JfSUQiLCJhc3NlcnRpb25Gb3JFbnJvbGxtZW50Iiwib25lVGltZVBhc3N3b3JkIiwiVG90cE11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tU2VjcmV0IiwiYXNzZXJ0aW9uRm9yU2lnbkluIiwiZW5yb2xsbWVudElkIiwiX2Zyb21FbnJvbGxtZW50SWQiLCJnZW5lcmF0ZVNlY3JldCIsIm1mYVNlc3Npb24iLCJ0b3RwRW5yb2xsbWVudEluZm8iLCJfZnJvbVN0YXJ0VG90cE1mYUVucm9sbG1lbnRSZXNwb25zZSIsIm90cCIsInRvdHBWZXJpZmljYXRpb25JbmZvIiwiX21ha2VUb3RwVmVyaWZpY2F0aW9uSW5mbyIsInNlY3JldEtleSIsImhhc2hpbmdBbGdvcml0aG0iLCJjb2RlTGVuZ3RoIiwiY29kZUludGVydmFsU2Vjb25kcyIsImVucm9sbG1lbnRDb21wbGV0aW9uRGVhZGxpbmUiLCJ0b3RwU2Vzc2lvbkluZm8iLCJzaGFyZWRTZWNyZXRLZXkiLCJ2ZXJpZmljYXRpb25Db2RlTGVuZ3RoIiwicGVyaW9kU2VjIiwiZmluYWxpemVFbnJvbGxtZW50VGltZSIsImdlbmVyYXRlUXJDb2RlVXJsIiwiYWNjb3VudE5hbWUiLCJpc3N1ZXIiLCJ1c2VEZWZhdWx0cyIsIl9pc0VtcHR5U3RyaW5nIiwiaW5wdXQiLCJBdXRoSW50ZXJvcCIsImludGVybmFsTGlzdGVuZXJzIiwiZ2V0VWlkIiwiYXNzZXJ0QXV0aENvbmZpZ3VyZWQiLCJhZGRBdXRoVG9rZW5MaXN0ZW5lciIsInVwZGF0ZVByb2FjdGl2ZVJlZnJlc2giLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsImdldFZlcnNpb25Gb3JQbGF0Zm9ybSIsInJlZ2lzdGVyQXV0aCIsIl9yZWdpc3RlckNvbXBvbmVudCIsImltcG9ydF9jb21wb25lbnQiLCJDb21wb25lbnQiLCJnZXRQcm92aWRlciIsInNldEluc3RhbnRpYXRpb25Nb2RlIiwic2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2siLCJfaW5zdGFuY2VJZGVudGlmaWVyIiwiX2luc3RhbmNlIiwiYXV0aEludGVybmFsUHJvdmlkZXIiLCJyZWdpc3RlclZlcnNpb24iLCJERUZBVUxUX0lEX1RPS0VOX01BWF9BR0UiLCJhdXRoSWRUb2tlbk1heEFnZSIsImdldEV4cGVyaW1lbnRhbFNldHRpbmciLCJsYXN0UG9zdGVkSWRUb2tlbiIsIm1pbnRDb29raWVGYWN0b3J5IiwiaWRUb2tlblJlc3VsdCIsImlkVG9rZW5BZ2UiLCJnZXRBcHAiLCJhdXRoVG9rZW5TeW5jUGF0aCIsImlzU2VjdXJlQ29udGV4dCIsImF1dGhUb2tlblN5bmNVcmwiLCJtaW50Q29va2llIiwiYXV0aEVtdWxhdG9ySG9zdCIsImdldERlZmF1bHRFbXVsYXRvckhvc3QiLCJnZXRTY3JpcHRQYXJlbnRFbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJvbmVycm9yIiwiY2hhcnNldCIsImltcG9ydF9hcHAyIiwicmVxdWlyZSIsImltcG9ydF91dGlsMiIsImltcG9ydF9sb2dnZXIyIiwiaW1wb3J0X3RzbGliMiIsImltcG9ydF9jb21wb25lbnQyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFDLDBDQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMseUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx5QkFBQTtFQUFBQyxV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QkFBQSxDQUFpQnVMLElBQUEsRUFBTTZKLElBQUEsSUFBUStuQyxVQUFBLENBQVcvbkMsSUFBSSxDQUFDO0lBQ2hEO0VBQ0Y7RUFFRCxNQUFNZ29DLGdCQUFBLE9BQW1CNTVDLFdBQUEsQ0FBQTY1QyxzQkFBQSxFQUF1QixNQUFNO0VBQ3RELElBQUlELGdCQUFBLEVBQWtCO0lBQ3BCMStDLG1CQUFBLENBQW9CNk0sSUFBQSxFQUFNLFVBQVU2eEMsZ0JBQUEsRUFBa0I7RUFDdkQ7RUFFRCxPQUFPN3hDLElBQUE7QUFDVDtBQUVBLFNBQVMreEMsdUJBQUEsRUFBc0I7O0VBQzdCLFFBQU8zL0IsRUFBQSxJQUFBelEsRUFBQSxHQUFBdVYsUUFBQSxDQUFTODZCLG9CQUFBLENBQXFCLE1BQU0sT0FBSSxRQUFBcndDLEVBQUEsdUJBQUFBLEVBQUEsU0FBRSxRQUFBeVEsRUFBQSxjQUFBQSxFQUFBLEdBQUk4RSxRQUFBO0FBQ3ZEO0FBRUEwSixzQkFBQSxDQUF1QjtFQUNyQkosT0FBT2xkLEdBQUEsRUFBVztJQUVoQixPQUFPLElBQUl1QyxPQUFBLENBQVEsQ0FBQ21TLE9BQUEsRUFBU3hRLE1BQUEsS0FBVTtNQUNyQyxNQUFNZ2QsRUFBQSxHQUFLdE4sUUFBQSxDQUFTdU4sYUFBQSxDQUFjLFFBQVE7TUFDMUNELEVBQUEsQ0FBR3l0QixZQUFBLENBQWEsT0FBTzN1QyxHQUFHO01BQzFCa2hCLEVBQUEsQ0FBRzZhLE1BQUEsR0FBU3JuQixPQUFBO01BQ1p3TSxFQUFBLENBQUcwdEIsT0FBQSxHQUFVdnJDLENBQUEsSUFBSTtRQUNmLE1BQU1sSCxLQUFBLEdBQVFLLFlBQUEsQ0FBWTtRQUMxQkwsS0FBQSxDQUFNcUksVUFBQSxHQUFhbkIsQ0FBQTtRQUNuQmEsTUFBQSxDQUFPL0gsS0FBSztNQUNkO01BQ0Era0IsRUFBQSxDQUFHaFIsSUFBQSxHQUFPO01BQ1ZnUixFQUFBLENBQUcydEIsT0FBQSxHQUFVO01BQ2JKLHNCQUFBLENBQXNCLEVBQUd0c0IsV0FBQSxDQUFZakIsRUFBRTtJQUN6QyxDQUFDOztFQUdIN0QsVUFBQSxFQUFZO0VBQ1pGLGlCQUFBLEVBQW1CO0VBQ25CQyx5QkFBQSxFQUNFO0FBQ0g7QUFFRDR2QixZQUFBLENBQVk7OztBQ2hKWixJQUFBOEIsV0FBQSxHQUFPQyxPQUFBO0FBQ1AsSUFBQUMsWUFBQSxHQUFPRCxPQUFBO0FBQ1AsSUFBQUUsY0FBQSxHQUFPRixPQUFBO0FBQ1AsSUFBQUcsYUFBQSxHQUFPSCxPQUFBO0FBQ1AsSUFBQUksaUJBQUEsR0FBT0osT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==