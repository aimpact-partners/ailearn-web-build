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

// .beyond/uimport/@firebase/auth.1.7.8.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXV0aC4xLjcuOC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbW9kZWwvZW51bV9tYXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Fzc2VydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvY2F0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbmF2aWdhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZGVsYXkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2ZldGNoX3Byb3ZpZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9hY2NvdW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2lkX3Rva2VuX3Jlc3VsdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2ludmFsaWRhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Byb2FjdGl2ZV9yZWZyZXNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9tZXRhZGF0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlbG9hZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdG9rZW5fbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2luc3RhbnRpYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbl9tZW1vcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvcGVyc2lzdGVuY2VfdXNlcl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcGFzc3dvcmRfcG9saWN5L2dldF9wYXNzd29yZF9wb2xpY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9wYXNzd29yZF9wb2xpY3lfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9sb2FkX2pzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfZW50ZXJwcmlzZV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2luaXRpYWxpemUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9hdXRoX2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Ntcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hY3Rpb25fY29kZV91cmwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mZWRlcmF0ZWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mYWNlYm9vay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ29vZ2xlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9naXRodWIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvdHdpdHRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3NpZ25fdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX2NyZWRlbnRpYWxfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fub255bW91cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9lcnJvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Byb3ZpZGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2xpbmtfdW5saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVhdXRoZW50aWNhdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hY3Rpb25fY29kZV9zZXR0aW5ncy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jcmVhdGVfYXV0aF91cmkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9wcm9maWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWNjb3VudF9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWRkaXRpb25hbF91c2VyX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfc2Vzc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfdXNlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2xvY2FsX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2Uvc2Vzc2lvbl9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3Byb21pc2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcmVjZWl2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9ldmVudF9pZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9zZW5kZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvYXV0aF93aW5kb3cudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC93b3JrZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvaW5kZXhlZF9kYi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX21vY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9sb2FkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3Byb3ZpZGVycy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWJzdHJhY3RfcG9wdXBfcmVkaXJlY3Rfb3BlcmF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9ldmVudF9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcHJvamVjdF9jb25maWcvZ2V0X3Byb2plY3RfY29uZmlnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmFsaWRhdGVfb3JpZ2luLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9nYXBpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9pZnJhbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2hhbmRsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcG9wdXBfcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfYXNzZXJ0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21mYS9hc3NlcnRpb25zL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvYXNzZXJ0aW9ucy90b3RwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZmlyZWJhc2VfaW50ZXJuYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9yZWdpc3Rlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9kaXN0L2VzbTIwMTcvaW5kZXguanMiXSwibmFtZXMiOlsiYXV0aF8xXzdfOF9leHBvcnRzIiwiX19leHBvcnQiLCJBY3Rpb25Db2RlT3BlcmF0aW9uIiwiQWN0aW9uQ29kZVVSTCIsIkF1dGhDcmVkZW50aWFsIiwiQXV0aEVycm9yQ29kZXMiLCJBVVRIX0VSUk9SX0NPREVTX01BUF9ET19OT1RfVVNFX0lOVEVSTkFMTFkiLCJFbWFpbEF1dGhDcmVkZW50aWFsIiwiRW1haWxBdXRoUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsIkZhY3RvcklkIiwiR2l0aHViQXV0aFByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiT0F1dGhDcmVkZW50aWFsIiwiT0F1dGhQcm92aWRlciIsIk9wZXJhdGlvblR5cGUiLCJQaG9uZUF1dGhDcmVkZW50aWFsIiwiUGhvbmVBdXRoUHJvdmlkZXIiLCJQaG9uZU11bHRpRmFjdG9yR2VuZXJhdG9yIiwiUHJvdmlkZXJJZCIsIlJlY2FwdGNoYVZlcmlmaWVyIiwiU0FNTEF1dGhQcm92aWRlciIsIlNpZ25Jbk1ldGhvZCIsIlRvdHBNdWx0aUZhY3RvckdlbmVyYXRvciIsIlRvdHBTZWNyZXQiLCJUd2l0dGVyQXV0aFByb3ZpZGVyIiwiYXBwbHlBY3Rpb25Db2RlIiwiYmVmb3JlQXV0aFN0YXRlQ2hhbmdlZCIsImJyb3dzZXJMb2NhbFBlcnNpc3RlbmNlIiwiYnJvd3NlclBvcHVwUmVkaXJlY3RSZXNvbHZlciIsImJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UiLCJjaGVja0FjdGlvbkNvZGUiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImNvbm5lY3RBdXRoRW11bGF0b3IiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkZWJ1Z0Vycm9yTWFwIiwiZGVsZXRlVXNlciIsImZldGNoU2lnbkluTWV0aG9kc0ZvckVtYWlsIiwiZ2V0QWRkaXRpb25hbFVzZXJJbmZvIiwiZ2V0QXV0aCIsImdldElkVG9rZW4iLCJnZXRJZFRva2VuUmVzdWx0IiwiZ2V0TXVsdGlGYWN0b3JSZXNvbHZlciIsImdldFJlZGlyZWN0UmVzdWx0IiwiaW5NZW1vcnlQZXJzaXN0ZW5jZSIsImluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJpbml0aWFsaXplQXV0aCIsImluaXRpYWxpemVSZWNhcHRjaGFDb25maWciLCJpc1NpZ25JbldpdGhFbWFpbExpbmsiLCJsaW5rV2l0aENyZWRlbnRpYWwiLCJsaW5rV2l0aFBob25lTnVtYmVyIiwibGlua1dpdGhQb3B1cCIsImxpbmtXaXRoUmVkaXJlY3QiLCJtdWx0aUZhY3RvciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIm9uSWRUb2tlbkNoYW5nZWQiLCJwYXJzZUFjdGlvbkNvZGVVUkwiLCJwcm9kRXJyb3JNYXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsIiwicmVhdXRoZW50aWNhdGVXaXRoUGhvbmVOdW1iZXIiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQb3B1cCIsInJlYXV0aGVudGljYXRlV2l0aFJlZGlyZWN0IiwicmVsb2FkIiwicmV2b2tlQWNjZXNzVG9rZW4iLCJzZW5kRW1haWxWZXJpZmljYXRpb24iLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsIiwic2V0UGVyc2lzdGVuY2UiLCJzaWduSW5Bbm9ueW1vdXNseSIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxMaW5rIiwic2lnbkluV2l0aFBob25lTnVtYmVyIiwic2lnbkluV2l0aFBvcHVwIiwic2lnbkluV2l0aFJlZGlyZWN0Iiwic2lnbk91dCIsInVubGluayIsInVwZGF0ZUN1cnJlbnRVc2VyIiwidXBkYXRlRW1haWwiLCJ1cGRhdGVQYXNzd29yZCIsInVwZGF0ZVBob25lTnVtYmVyIiwidXBkYXRlUHJvZmlsZSIsInVzZURldmljZUxhbmd1YWdlIiwidmFsaWRhdGVQYXNzd29yZCIsInZlcmlmeUJlZm9yZVVwZGF0ZUVtYWlsIiwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUEhPTkUiLCJUT1RQIiwiRkFDRUJPT0siLCJHSVRIVUIiLCJHT09HTEUiLCJQQVNTV09SRCIsIlRXSVRURVIiLCJFTUFJTF9MSU5LIiwiRU1BSUxfUEFTU1dPUkQiLCJMSU5LIiwiUkVBVVRIRU5USUNBVEUiLCJTSUdOX0lOIiwiRU1BSUxfU0lHTklOIiwiUEFTU1dPUkRfUkVTRVQiLCJSRUNPVkVSX0VNQUlMIiwiUkVWRVJUX1NFQ09ORF9GQUNUT1JfQURESVRJT04iLCJWRVJJRllfQU5EX0NIQU5HRV9FTUFJTCIsIlZFUklGWV9FTUFJTCIsIl9kZWJ1Z0Vycm9yTWFwIiwiX3Byb2RFcnJvck1hcCIsIl9ERUZBVUxUX0FVVEhfRVJST1JfRkFDVE9SWSIsImltcG9ydF91dGlsIiwiRXJyb3JGYWN0b3J5IiwiQURNSU5fT05MWV9PUEVSQVRJT04iLCJBUkdVTUVOVF9FUlJPUiIsIkFQUF9OT1RfQVVUSE9SSVpFRCIsIkFQUF9OT1RfSU5TVEFMTEVEIiwiQ0FQVENIQV9DSEVDS19GQUlMRUQiLCJDT0RFX0VYUElSRUQiLCJDT1JET1ZBX05PVF9SRUFEWSIsIkNPUlNfVU5TVVBQT1JURUQiLCJDUkVERU5USUFMX0FMUkVBRFlfSU5fVVNFIiwiQ1JFREVOVElBTF9NSVNNQVRDSCIsIkNSRURFTlRJQUxfVE9PX09MRF9MT0dJTl9BR0FJTiIsIkRFUEVOREVOVF9TREtfSU5JVF9CRUZPUkVfQVVUSCIsIkRZTkFNSUNfTElOS19OT1RfQUNUSVZBVEVEIiwiRU1BSUxfQ0hBTkdFX05FRURTX1ZFUklGSUNBVElPTiIsIkVNQUlMX0VYSVNUUyIsIkVNVUxBVE9SX0NPTkZJR19GQUlMRUQiLCJFWFBJUkVEX09PQl9DT0RFIiwiRVhQSVJFRF9QT1BVUF9SRVFVRVNUIiwiSU5URVJOQUxfRVJST1IiLCJJTlZBTElEX0FQSV9LRVkiLCJJTlZBTElEX0FQUF9DUkVERU5USUFMIiwiSU5WQUxJRF9BUFBfSUQiLCJJTlZBTElEX0FVVEgiLCJJTlZBTElEX0FVVEhfRVZFTlQiLCJJTlZBTElEX0NFUlRfSEFTSCIsIklOVkFMSURfQ09ERSIsIklOVkFMSURfQ09OVElOVUVfVVJJIiwiSU5WQUxJRF9DT1JET1ZBX0NPTkZJR1VSQVRJT04iLCJJTlZBTElEX0NVU1RPTV9UT0tFTiIsIklOVkFMSURfRFlOQU1JQ19MSU5LX0RPTUFJTiIsIklOVkFMSURfRU1BSUwiLCJJTlZBTElEX0VNVUxBVE9SX1NDSEVNRSIsIklOVkFMSURfSURQX1JFU1BPTlNFIiwiSU5WQUxJRF9MT0dJTl9DUkVERU5USUFMUyIsIklOVkFMSURfTUVTU0FHRV9QQVlMT0FEIiwiSU5WQUxJRF9NRkFfU0VTU0lPTiIsIklOVkFMSURfT0FVVEhfQ0xJRU5UX0lEIiwiSU5WQUxJRF9PQVVUSF9QUk9WSURFUiIsIklOVkFMSURfT09CX0NPREUiLCJJTlZBTElEX09SSUdJTiIsIklOVkFMSURfUEFTU1dPUkQiLCJJTlZBTElEX1BFUlNJU1RFTkNFIiwiSU5WQUxJRF9QSE9ORV9OVU1CRVIiLCJJTlZBTElEX1BST1ZJREVSX0lEIiwiSU5WQUxJRF9SRUNJUElFTlRfRU1BSUwiLCJJTlZBTElEX1NFTkRFUiIsIklOVkFMSURfU0VTU0lPTl9JTkZPIiwiSU5WQUxJRF9URU5BTlRfSUQiLCJNRkFfSU5GT19OT1RfRk9VTkQiLCJNRkFfUkVRVUlSRUQiLCJNSVNTSU5HX0FORFJPSURfUEFDS0FHRV9OQU1FIiwiTUlTU0lOR19BUFBfQ1JFREVOVElBTCIsIk1JU1NJTkdfQVVUSF9ET01BSU4iLCJNSVNTSU5HX0NPREUiLCJNSVNTSU5HX0NPTlRJTlVFX1VSSSIsIk1JU1NJTkdfSUZSQU1FX1NUQVJUIiwiTUlTU0lOR19JT1NfQlVORExFX0lEIiwiTUlTU0lOR19PUl9JTlZBTElEX05PTkNFIiwiTUlTU0lOR19NRkFfSU5GTyIsIk1JU1NJTkdfTUZBX1NFU1NJT04iLCJNSVNTSU5HX1BIT05FX05VTUJFUiIsIk1JU1NJTkdfU0VTU0lPTl9JTkZPIiwiTU9EVUxFX0RFU1RST1lFRCIsIk5FRURfQ09ORklSTUFUSU9OIiwiTkVUV09SS19SRVFVRVNUX0ZBSUxFRCIsIk5VTExfVVNFUiIsIk5PX0FVVEhfRVZFTlQiLCJOT19TVUNIX1BST1ZJREVSIiwiT1BFUkFUSU9OX05PVF9BTExPV0VEIiwiT1BFUkFUSU9OX05PVF9TVVBQT1JURUQiLCJQT1BVUF9CTE9DS0VEIiwiUE9QVVBfQ0xPU0VEX0JZX1VTRVIiLCJQUk9WSURFUl9BTFJFQURZX0xJTktFRCIsIlFVT1RBX0VYQ0VFREVEIiwiUkVESVJFQ1RfQ0FOQ0VMTEVEX0JZX1VTRVIiLCJSRURJUkVDVF9PUEVSQVRJT05fUEVORElORyIsIlJFSkVDVEVEX0NSRURFTlRJQUwiLCJTRUNPTkRfRkFDVE9SX0FMUkVBRFlfRU5ST0xMRUQiLCJTRUNPTkRfRkFDVE9SX0xJTUlUX0VYQ0VFREVEIiwiVEVOQU5UX0lEX01JU01BVENIIiwiVElNRU9VVCIsIlRPS0VOX0VYUElSRUQiLCJUT09fTUFOWV9BVFRFTVBUU19UUllfTEFURVIiLCJVTkFVVEhPUklaRURfRE9NQUlOIiwiVU5TVVBQT1JURURfRklSU1RfRkFDVE9SIiwiVU5TVVBQT1JURURfUEVSU0lTVEVOQ0UiLCJVTlNVUFBPUlRFRF9URU5BTlRfT1BFUkFUSU9OIiwiVU5WRVJJRklFRF9FTUFJTCIsIlVTRVJfQ0FOQ0VMTEVEIiwiVVNFUl9ERUxFVEVEIiwiVVNFUl9ESVNBQkxFRCIsIlVTRVJfTUlTTUFUQ0giLCJVU0VSX1NJR05FRF9PVVQiLCJXRUFLX1BBU1NXT1JEIiwiV0VCX1NUT1JBR0VfVU5TVVBQT1JURUQiLCJBTFJFQURZX0lOSVRJQUxJWkVEIiwiUkVDQVBUQ0hBX05PVF9FTkFCTEVEIiwiTUlTU0lOR19SRUNBUFRDSEFfVE9LRU4iLCJJTlZBTElEX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX0FDVElPTiIsIk1JU1NJTkdfQ0xJRU5UX1RZUEUiLCJNSVNTSU5HX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRUNBUFRDSEFfVkVSU0lPTiIsIklOVkFMSURfUkVRX1RZUEUiLCJsb2dDbGllbnQiLCJpbXBvcnRfbG9nZ2VyIiwiTG9nZ2VyIiwiX2xvZ1dhcm4iLCJtc2ciLCJhcmdzIiwibG9nTGV2ZWwiLCJMb2dMZXZlbCIsIldBUk4iLCJ3YXJuIiwiaW1wb3J0X2FwcCIsIlNES19WRVJTSU9OIiwiX2xvZ0Vycm9yIiwiRVJST1IiLCJlcnJvciIsIl9mYWlsIiwiYXV0aE9yQ29kZSIsInJlc3QiLCJjcmVhdGVFcnJvckludGVybmFsIiwiX2NyZWF0ZUVycm9yIiwiX2Vycm9yV2l0aEN1c3RvbU1lc3NhZ2UiLCJhdXRoIiwiY29kZSIsIm1lc3NhZ2UiLCJlcnJvck1hcCIsIk9iamVjdCIsImFzc2lnbiIsImZhY3RvcnkiLCJjcmVhdGUiLCJhcHBOYW1lIiwibmFtZSIsIl9zZXJ2ZXJBcHBDdXJyZW50VXNlck9wZXJhdGlvbk5vdFN1cHBvcnRlZEVycm9yIiwiX2Fzc2VydEluc3RhbmNlT2YiLCJvYmplY3QiLCJpbnN0YW5jZSIsImNvbnN0cnVjdG9ySW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsImZ1bGxQYXJhbXMiLCJzbGljZSIsIl9lcnJvckZhY3RvcnkiLCJfYXNzZXJ0IiwiYXNzZXJ0aW9uIiwiZGVidWdGYWlsIiwiZmFpbHVyZSIsIkVycm9yIiwiZGVidWdBc3NlcnQiLCJfZ2V0Q3VycmVudFVybCIsInNlbGYiLCJfYSIsImxvY2F0aW9uIiwiaHJlZiIsIl9pc0h0dHBPckh0dHBzIiwiX2dldEN1cnJlbnRTY2hlbWUiLCJwcm90b2NvbCIsIl9pc09ubGluZSIsIm5hdmlnYXRvciIsIm9uTGluZSIsImlzQnJvd3NlckV4dGVuc2lvbiIsIl9nZXRVc2VyTGFuZ3VhZ2UiLCJuYXZpZ2F0b3JMYW5ndWFnZSIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiRGVsYXkiLCJzaG9ydERlbGF5IiwibG9uZ0RlbGF5IiwiaXNNb2JpbGUiLCJpc01vYmlsZUNvcmRvdmEiLCJpc1JlYWN0TmF0aXZlIiwiZ2V0IiwiTWF0aCIsIm1pbiIsIl9lbXVsYXRvclVybCIsImNvbmZpZyIsInBhdGgiLCJlbXVsYXRvciIsInVybCIsInN0YXJ0c1dpdGgiLCJGZXRjaFByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsImZldGNoSW1wbCIsImhlYWRlcnNJbXBsIiwicmVzcG9uc2VJbXBsIiwiZmV0Y2giLCJnbG9iYWxUaGlzIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJyZXNwb25zZSIsIlJlc3BvbnNlIiwiU0VSVkVSX0VSUk9SX01BUCIsIkRFRkFVTFRfQVBJX1RJTUVPVVRfTVMiLCJfYWRkVGlkSWZOZWNlc3NhcnkiLCJyZXF1ZXN0IiwidGVuYW50SWQiLCJfcGVyZm9ybUFwaVJlcXVlc3QiLCJtZXRob2QiLCJjdXN0b21FcnJvck1hcCIsIl9wZXJmb3JtRmV0Y2hXaXRoRXJyb3JIYW5kbGluZyIsImJvZHkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJxdWVyeXN0cmluZyIsImtleSIsImFwaUtleSIsIl9nZXRBZGRpdGlvbmFsSGVhZGVycyIsImxhbmd1YWdlQ29kZSIsIl9nZXRGaW5hbFRhcmdldCIsImFwaUhvc3QiLCJyZWZlcnJlclBvbGljeSIsImZldGNoRm4iLCJfY2FuSW5pdEVtdWxhdG9yIiwibmV0d29ya1RpbWVvdXQiLCJOZXR3b3JrVGltZW91dCIsIlByb21pc2UiLCJyYWNlIiwicHJvbWlzZSIsImNsZWFyTmV0d29ya1RpbWVvdXQiLCJqc29uIiwiX21ha2VUYWdnZWRFcnJvciIsIm9rIiwiZXJyb3JNZXNzYWdlIiwic2VydmVyRXJyb3JDb2RlIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic3BsaXQiLCJhdXRoRXJyb3IiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJlIiwiRmlyZWJhc2VFcnJvciIsIlN0cmluZyIsIl9wZXJmb3JtU2lnbkluUmVxdWVzdCIsInNlcnZlclJlc3BvbnNlIiwiX3NlcnZlclJlc3BvbnNlIiwiaG9zdCIsImJhc2UiLCJhcGlTY2hlbWUiLCJfcGFyc2VFbmZvcmNlbWVudFN0YXRlIiwiZW5mb3JjZW1lbnRTdGF0ZVN0ciIsInRpbWVyIiwiXyIsInJlamVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJlcnJvclBhcmFtcyIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJjdXN0b21EYXRhIiwiX3Rva2VuUmVzcG9uc2UiLCJpc1YyIiwiZ3JlY2FwdGNoYSIsImdldFJlc3BvbnNlIiwiaXNFbnRlcnByaXNlIiwiZW50ZXJwcmlzZSIsIlJlY2FwdGNoYUNvbmZpZyIsInNpdGVLZXkiLCJyZWNhcHRjaGFFbmZvcmNlbWVudFN0YXRlIiwicmVjYXB0Y2hhS2V5IiwiZ2V0UHJvdmlkZXJFbmZvcmNlbWVudFN0YXRlIiwicHJvdmlkZXJTdHIiLCJsZW5ndGgiLCJwcm92aWRlciIsImVuZm9yY2VtZW50U3RhdGUiLCJpc1Byb3ZpZGVyRW5hYmxlZCIsImdldFJlY2FwdGNoYVBhcmFtcyIsInJlY2FwdGNoYVNpdGVLZXkiLCJnZXRSZWNhcHRjaGFDb25maWciLCJkZWxldGVBY2NvdW50IiwiZGVsZXRlTGlua2VkQWNjb3VudHMiLCJnZXRBY2NvdW50SW5mbyIsInV0Y1RpbWVzdGFtcFRvRGF0ZVN0cmluZyIsInV0Y1RpbWVzdGFtcCIsImRhdGUiLCJEYXRlIiwiTnVtYmVyIiwiaXNOYU4iLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJ1c2VyIiwiZm9yY2VSZWZyZXNoIiwiZ2V0TW9kdWxhckluc3RhbmNlIiwidXNlckludGVybmFsIiwidG9rZW4iLCJjbGFpbXMiLCJfcGFyc2VUb2tlbiIsImV4cCIsImF1dGhfdGltZSIsImlhdCIsImZpcmViYXNlIiwic2lnbkluUHJvdmlkZXIiLCJhdXRoVGltZSIsInNlY29uZHNTdHJpbmdUb01pbGxpc2Vjb25kcyIsImlzc3VlZEF0VGltZSIsImV4cGlyYXRpb25UaW1lIiwic2lnbkluU2Vjb25kRmFjdG9yIiwic2Vjb25kcyIsImFsZ29yaXRobSIsInBheWxvYWQiLCJzaWduYXR1cmUiLCJkZWNvZGVkIiwiYmFzZTY0RGVjb2RlIiwicGFyc2UiLCJ0b1N0cmluZyIsIl90b2tlbkV4cGlyZXNJbiIsInBhcnNlZFRva2VuIiwiX2xvZ291dElmSW52YWxpZGF0ZWQiLCJieXBhc3NBdXRoU3RhdGUiLCJpc1VzZXJJbnZhbGlkYXRlZCIsImN1cnJlbnRVc2VyIiwiUHJvYWN0aXZlUmVmcmVzaCIsImlzUnVubmluZyIsInRpbWVySWQiLCJlcnJvckJhY2tvZmYiLCJfc3RhcnQiLCJzY2hlZHVsZSIsIl9zdG9wIiwiZ2V0SW50ZXJ2YWwiLCJ3YXNFcnJvciIsImludGVydmFsIiwiZXhwVGltZSIsInN0c1Rva2VuTWFuYWdlciIsIm5vdyIsIm1heCIsIml0ZXJhdGlvbiIsIlVzZXJNZXRhZGF0YSIsImNyZWF0ZWRBdCIsImxhc3RMb2dpbkF0IiwiX2luaXRpYWxpemVUaW1lIiwibGFzdFNpZ25JblRpbWUiLCJjcmVhdGlvblRpbWUiLCJfY29weSIsIm1ldGFkYXRhIiwidG9KU09OIiwiX3JlbG9hZFdpdGhvdXRTYXZpbmciLCJpZFRva2VuIiwidXNlcnMiLCJjb3JlQWNjb3VudCIsIl9ub3RpZnlSZWxvYWRMaXN0ZW5lciIsIm5ld1Byb3ZpZGVyRGF0YSIsInByb3ZpZGVyVXNlckluZm8iLCJleHRyYWN0UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJEYXRhIiwibWVyZ2VQcm92aWRlckRhdGEiLCJvbGRJc0Fub255bW91cyIsImlzQW5vbnltb3VzIiwibmV3SXNBbm9ueW1vdXMiLCJwYXNzd29yZEhhc2giLCJ1cGRhdGVzIiwidWlkIiwibG9jYWxJZCIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJwaG90b1VybCIsImVtYWlsVmVyaWZpZWQiLCJfcGVyc2lzdFVzZXJJZkN1cnJlbnQiLCJfbm90aWZ5TGlzdGVuZXJzSWZDdXJyZW50Iiwib3JpZ2luYWwiLCJuZXdEYXRhIiwiZGVkdXBlZCIsImZpbHRlciIsIm8iLCJzb21lIiwibiIsInByb3ZpZGVySWQiLCJwcm92aWRlcnMiLCJtYXAiLCJpbXBvcnRfdHNsaWIiLCJfX3Jlc3QiLCJyYXdJZCIsInJlcXVlc3RTdHNUb2tlbiIsInJlZnJlc2hUb2tlbiIsInRva2VuQXBpSG9zdCIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlc0luIiwiZXhwaXJlc19pbiIsInJlZnJlc2hfdG9rZW4iLCJyZXZva2VUb2tlbiIsIlN0c1Rva2VuTWFuYWdlciIsImlzRXhwaXJlZCIsInVwZGF0ZUZyb21TZXJ2ZXJSZXNwb25zZSIsInVwZGF0ZVRva2Vuc0FuZEV4cGlyYXRpb24iLCJ1cGRhdGVGcm9tSWRUb2tlbiIsImdldFRva2VuIiwicmVmcmVzaCIsImNsZWFyUmVmcmVzaFRva2VuIiwib2xkVG9rZW4iLCJleHBpcmVzSW5TZWMiLCJmcm9tSlNPTiIsIm1hbmFnZXIiLCJfYXNzaWduIiwiX2Nsb25lIiwiX3BlcmZvcm1SZWZyZXNoIiwiYXNzZXJ0U3RyaW5nT3JVbmRlZmluZWQiLCJVc2VySW1wbCIsIm9wdCIsInByb2FjdGl2ZVJlZnJlc2giLCJyZWxvYWRVc2VySW5mbyIsInJlbG9hZExpc3RlbmVyIiwidXNlckluZm8iLCJuZXdVc2VyIiwiX29uUmVsb2FkIiwiY2FsbGJhY2siLCJfc3RhcnRQcm9hY3RpdmVSZWZyZXNoIiwiX3N0b3BQcm9hY3RpdmVSZWZyZXNoIiwiX3VwZGF0ZVRva2Vuc0lmTmVjZXNzYXJ5IiwicmVsb2FkMiIsInRva2Vuc1JlZnJlc2hlZCIsImRlbGV0ZSIsIl9pc0ZpcmViYXNlU2VydmVyQXBwIiwiYXBwIiwiX3JlZGlyZWN0RXZlbnRJZCIsIl9mcm9tSlNPTiIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiX2YiLCJfZyIsIl9oIiwicGxhaW5PYmplY3RUb2tlbk1hbmFnZXIiLCJBcnJheSIsImlzQXJyYXkiLCJfZnJvbUlkVG9rZW5SZXNwb25zZSIsImlkVG9rZW5SZXNwb25zZSIsIl9mcm9tR2V0QWNjb3VudEluZm9SZXNwb25zZSIsImluc3RhbmNlQ2FjaGUiLCJNYXAiLCJfZ2V0SW5zdGFuY2UiLCJjbHMiLCJGdW5jdGlvbiIsInNldCIsIkluTWVtb3J5UGVyc2lzdGVuY2UiLCJ0eXBlIiwic3RvcmFnZSIsIl9pc0F2YWlsYWJsZSIsIl9zZXQiLCJ2YWx1ZSIsIl9nZXQiLCJfcmVtb3ZlIiwiX2FkZExpc3RlbmVyIiwiX2tleSIsIl9saXN0ZW5lciIsIl9yZW1vdmVMaXN0ZW5lciIsIl9wZXJzaXN0ZW5jZUtleU5hbWUiLCJQZXJzaXN0ZW5jZVVzZXJNYW5hZ2VyIiwicGVyc2lzdGVuY2UiLCJ1c2VyS2V5IiwibmFtZTIiLCJmdWxsVXNlcktleSIsImZ1bGxQZXJzaXN0ZW5jZUtleSIsImJvdW5kRXZlbnRIYW5kbGVyIiwiX29uU3RvcmFnZUV2ZW50IiwiYmluZCIsInNldEN1cnJlbnRVc2VyIiwiZ2V0Q3VycmVudFVzZXIiLCJibG9iIiwicmVtb3ZlQ3VycmVudFVzZXIiLCJzYXZlUGVyc2lzdGVuY2VGb3JSZWRpcmVjdCIsIm5ld1BlcnNpc3RlbmNlIiwicGVyc2lzdGVuY2VIaWVyYXJjaHkiLCJhdmFpbGFibGVQZXJzaXN0ZW5jZXMiLCJhbGwiLCJzZWxlY3RlZFBlcnNpc3RlbmNlIiwidXNlclRvTWlncmF0ZSIsIm1pZ3JhdGlvbkhpZXJhcmNoeSIsInAiLCJfc2hvdWxkQWxsb3dNaWdyYXRpb24iLCJfZ2V0QnJvd3Nlck5hbWUiLCJ1c2VyQWdlbnQiLCJ1YSIsImluY2x1ZGVzIiwiX2lzSUVNb2JpbGUiLCJfaXNGaXJlZm94IiwiX2lzQmxhY2tCZXJyeSIsIl9pc1dlYk9TIiwiX2lzU2FmYXJpIiwiX2lzQ2hyb21lSU9TIiwiX2lzQW5kcm9pZCIsInJlIiwibWF0Y2hlcyIsIm1hdGNoIiwiZ2V0VUEiLCJ0ZXN0IiwiX2lzSU9TIiwiX2lzSU9TN09yOCIsIl9pc0lPU1N0YW5kYWxvbmUiLCJ3aW5kb3ciLCJzdGFuZGFsb25lIiwiX2lzSUUxMCIsImlzSUUiLCJkb2N1bWVudCIsImRvY3VtZW50TW9kZSIsIl9pc01vYmlsZUJyb3dzZXIiLCJfZ2V0Q2xpZW50VmVyc2lvbiIsImNsaWVudFBsYXRmb3JtIiwiZnJhbWV3b3JrcyIsInJlcG9ydGVkUGxhdGZvcm0iLCJyZXBvcnRlZEZyYW1ld29ya3MiLCJqb2luIiwiQXV0aE1pZGRsZXdhcmVRdWV1ZSIsInF1ZXVlIiwicHVzaENhbGxiYWNrIiwib25BYm9ydCIsIndyYXBwZWRDYWxsYmFjayIsInJlc29sdmUiLCJyZXN1bHQiLCJwdXNoIiwiaW5kZXgiLCJydW5NaWRkbGV3YXJlIiwibmV4dFVzZXIiLCJvbkFib3J0U3RhY2siLCJiZWZvcmVTdGF0ZUNhbGxiYWNrIiwicmV2ZXJzZSIsIm9yaWdpbmFsTWVzc2FnZSIsIl9nZXRQYXNzd29yZFBvbGljeSIsIk1JTklNVU1fTUlOX1BBU1NXT1JEX0xFTkdUSCIsIlBhc3N3b3JkUG9saWN5SW1wbCIsInJlc3BvbnNlT3B0aW9ucyIsImN1c3RvbVN0cmVuZ3RoT3B0aW9ucyIsIm1pblBhc3N3b3JkTGVuZ3RoIiwibWF4UGFzc3dvcmRMZW5ndGgiLCJjb250YWluc0xvd2VyY2FzZUNoYXJhY3RlciIsImNvbnRhaW5zTG93ZXJjYXNlTGV0dGVyIiwiY29udGFpbnNVcHBlcmNhc2VDaGFyYWN0ZXIiLCJjb250YWluc1VwcGVyY2FzZUxldHRlciIsImNvbnRhaW5zTnVtZXJpY0NoYXJhY3RlciIsImNvbnRhaW5zTm9uQWxwaGFudW1lcmljQ2hhcmFjdGVyIiwiYWxsb3dlZE5vbkFscGhhbnVtZXJpY0NoYXJhY3RlcnMiLCJmb3JjZVVwZ3JhZGVPblNpZ25pbiIsInNjaGVtYVZlcnNpb24iLCJwYXNzd29yZCIsInN0YXR1cyIsImlzVmFsaWQiLCJwYXNzd29yZFBvbGljeSIsInZhbGlkYXRlUGFzc3dvcmRMZW5ndGhPcHRpb25zIiwidmFsaWRhdGVQYXNzd29yZENoYXJhY3Rlck9wdGlvbnMiLCJtZWV0c01pblBhc3N3b3JkTGVuZ3RoIiwibWVldHNNYXhQYXNzd29yZExlbmd0aCIsInVwZGF0ZVBhc3N3b3JkQ2hhcmFjdGVyT3B0aW9uc1N0YXR1c2VzIiwicGFzc3dvcmRDaGFyIiwiaSIsImNoYXJBdCIsIkF1dGhJbXBsIiwiaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyIiwiYXBwQ2hlY2tTZXJ2aWNlUHJvdmlkZXIiLCJlbXVsYXRvckNvbmZpZyIsIm9wZXJhdGlvbnMiLCJhdXRoU3RhdGVTdWJzY3JpcHRpb24iLCJTdWJzY3JpcHRpb24iLCJpZFRva2VuU3Vic2NyaXB0aW9uIiwiYmVmb3JlU3RhdGVRdWV1ZSIsInJlZGlyZWN0VXNlciIsImlzUHJvYWN0aXZlUmVmcmVzaEVuYWJsZWQiLCJFWFBFQ1RFRF9QQVNTV09SRF9QT0xJQ1lfU0NIRU1BX1ZFUlNJT04iLCJfaXNJbml0aWFsaXplZCIsIl9kZWxldGVkIiwiX2luaXRpYWxpemF0aW9uUHJvbWlzZSIsIl9wb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJfYWdlbnRSZWNhcHRjaGFDb25maWciLCJfdGVuYW50UmVjYXB0Y2hhQ29uZmlncyIsIl9wcm9qZWN0UGFzc3dvcmRQb2xpY3kiLCJfdGVuYW50UGFzc3dvcmRQb2xpY2llcyIsImxhc3ROb3RpZmllZFVpZCIsInNldHRpbmdzIiwiYXBwVmVyaWZpY2F0aW9uRGlzYWJsZWRGb3JUZXN0aW5nIiwiY2xpZW50VmVyc2lvbiIsInNka0NsaWVudFZlcnNpb24iLCJfaW5pdGlhbGl6ZVdpdGhQZXJzaXN0ZW5jZSIsInBvcHVwUmVkaXJlY3RSZXNvbHZlciIsInBlcnNpc3RlbmNlTWFuYWdlciIsIl9zaG91bGRJbml0UHJvYWN0aXZlbHkiLCJfaW5pdGlhbGl6ZSIsImluaXRpYWxpemVDdXJyZW50VXNlciIsImFzc2VydGVkUGVyc2lzdGVuY2UiLCJfY3VycmVudFVzZXIiLCJfdXBkYXRlQ3VycmVudFVzZXIiLCJpbml0aWFsaXplQ3VycmVudFVzZXJGcm9tSWRUb2tlbiIsImRpcmVjdGx5U2V0Q3VycmVudFVzZXIiLCJlcnIiLCJjb25zb2xlIiwiYXV0aElkVG9rZW4iLCJ0aGVuIiwicHJldmlvdXNseVN0b3JlZFVzZXIiLCJmdXR1cmVDdXJyZW50VXNlciIsIm5lZWRzVG9jaGVja01pZGRsZXdhcmUiLCJhdXRoRG9tYWluIiwiZ2V0T3JJbml0UmVkaXJlY3RQZXJzaXN0ZW5jZU1hbmFnZXIiLCJyZWRpcmVjdFVzZXJFdmVudElkIiwic3RvcmVkVXNlckV2ZW50SWQiLCJ0cnlSZWRpcmVjdFNpZ25JbiIsIl9vdmVycmlkZVJlZGlyZWN0UmVzdWx0IiwicmVsb2FkQW5kU2V0Q3VycmVudFVzZXJPckNsZWFyIiwicmVkaXJlY3RSZXNvbHZlciIsIl9jb21wbGV0ZVJlZGlyZWN0Rm4iLCJfc2V0UmVkaXJlY3RVc2VyIiwiX2RlbGV0ZSIsInVzZXJFeHRlcm4iLCJza2lwQmVmb3JlU3RhdGVDYWxsYmFja3MiLCJub3RpZnlBdXRoTGlzdGVuZXJzIiwicmVkaXJlY3RQZXJzaXN0ZW5jZU1hbmFnZXIiLCJfZ2V0UmVjYXB0Y2hhQ29uZmlnIiwiX2dldFBhc3N3b3JkUG9saWN5SW50ZXJuYWwiLCJfdXBkYXRlUGFzc3dvcmRQb2xpY3kiLCJfZ2V0UGVyc2lzdGVuY2UiLCJfdXBkYXRlRXJyb3JNYXAiLCJuZXh0T3JPYnNlcnZlciIsImNvbXBsZXRlZCIsInJlZ2lzdGVyU3RhdGVMaXN0ZW5lciIsImF1dGhTdGF0ZVJlYWR5IiwidW5zdWJzY3JpYmUiLCJ0b2tlblR5cGUiLCJyZWRpcmVjdE1hbmFnZXIiLCJyZXNvbHZlciIsIl9yZWRpcmVjdFBlcnNpc3RlbmNlIiwiX3JlZGlyZWN0VXNlckZvcklkIiwiaWQiLCJuZXh0IiwiY3VycmVudFVpZCIsInN1YnNjcmlwdGlvbiIsImNiIiwiaXNVbnN1YnNjcmliZWQiLCJhZGRPYnNlcnZlciIsImFjdGlvbiIsIl9sb2dGcmFtZXdvcmsiLCJmcmFtZXdvcmsiLCJzb3J0IiwiX2dldEZyYW1ld29ya3MiLCJvcHRpb25zIiwiYXBwSWQiLCJoZWFydGJlYXRzSGVhZGVyIiwiZ2V0SW1tZWRpYXRlIiwib3B0aW9uYWwiLCJnZXRIZWFydGJlYXRzSGVhZGVyIiwiYXBwQ2hlY2tUb2tlbiIsIl9nZXRBcHBDaGVja1Rva2VuIiwiYXBwQ2hlY2tUb2tlblJlc3VsdCIsIl9jYXN0QXV0aCIsIm9ic2VydmVyIiwiY3JlYXRlU3Vic2NyaWJlIiwiZXh0ZXJuYWxKU1Byb3ZpZGVyIiwibG9hZEpTIiwicmVjYXB0Y2hhVjJTY3JpcHQiLCJyZWNhcHRjaGFFbnRlcnByaXNlU2NyaXB0IiwiZ2FwaVNjcmlwdCIsIl9zZXRFeHRlcm5hbEpTUHJvdmlkZXIiLCJfbG9hZEpTIiwiX3JlY2FwdGNoYVYyU2NyaXB0VXJsIiwiX3JlY2FwdGNoYUVudGVycHJpc2VTY3JpcHRVcmwiLCJfZ2FwaVNjcmlwdFVybCIsIl9nZW5lcmF0ZUNhbGxiYWNrTmFtZSIsInByZWZpeCIsImZsb29yIiwicmFuZG9tIiwiUkVDQVBUQ0hBX0VOVEVSUFJJU0VfVkVSSUZJRVJfVFlQRSIsIkZBS0VfVE9LRU4iLCJSZWNhcHRjaGFFbnRlcnByaXNlVmVyaWZpZXIiLCJhdXRoRXh0ZXJuIiwidmVyaWZ5IiwicmV0cmlldmVTaXRlS2V5IiwiY2xpZW50VHlwZSIsInZlcnNpb24iLCJjYXRjaCIsInJldHJpZXZlUmVjYXB0Y2hhVG9rZW4iLCJyZWFkeSIsImV4ZWN1dGUiLCJpbmplY3RSZWNhcHRjaGFGaWVsZHMiLCJjYXB0Y2hhUmVzcCIsInZlcmlmaWVyIiwiY2FwdGNoYVJlc3BvbnNlIiwibmV3UmVxdWVzdCIsImhhbmRsZVJlY2FwdGNoYUZsb3ciLCJhdXRoSW5zdGFuY2UiLCJhY3Rpb25OYW1lIiwiYWN0aW9uTWV0aG9kIiwicmVxdWVzdFdpdGhSZWNhcHRjaGEiLCJsb2ciLCJfaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImF1dGhJbnRlcm5hbCIsImRlcHMiLCJfZ2V0UHJvdmlkZXIiLCJpc0luaXRpYWxpemVkIiwiYXV0aDIiLCJpbml0aWFsT3B0aW9ucyIsImdldE9wdGlvbnMiLCJkZWVwRXF1YWwiLCJfaW5pdGlhbGl6ZUF1dGhJbnN0YW5jZSIsImhpZXJhcmNoeSIsImRpc2FibGVXYXJuaW5ncyIsImV4dHJhY3RQcm90b2NvbCIsInBvcnQiLCJleHRyYWN0SG9zdEFuZFBvcnQiLCJwb3J0U3RyIiwiZnJlZXplIiwiZW1pdEVtdWxhdG9yV2FybmluZyIsInByb3RvY29sRW5kIiwiaW5kZXhPZiIsInN1YnN0ciIsImF1dGhvcml0eSIsImV4ZWMiLCJob3N0QW5kUG9ydCIsInBvcCIsImJyYWNrZXRlZElQdjYiLCJwYXJzZVBvcnQiLCJhdHRhY2hCYW5uZXIiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJzdHkiLCJzdHlsZSIsImlubmVyVGV4dCIsInBvc2l0aW9uIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJjb2xvciIsImJvdHRvbSIsImxlZnQiLCJtYXJnaW4iLCJ6SW5kZXgiLCJ0ZXh0QWxpZ24iLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImluZm8iLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpZ25Jbk1ldGhvZCIsIl9nZXRJZFRva2VuUmVzcG9uc2UiLCJfYXV0aCIsIl9saW5rVG9JZFRva2VuIiwiX2lkVG9rZW4iLCJfZ2V0UmVhdXRoZW50aWNhdGlvblJlc29sdmVyIiwicmVzZXRQYXNzd29yZCIsInVwZGF0ZUVtYWlsUGFzc3dvcmQiLCJsaW5rRW1haWxQYXNzd29yZCIsImFwcGx5QWN0aW9uQ29kZSQxIiwic2lnbkluV2l0aFBhc3N3b3JkIiwic2VuZE9vYkNvZGUiLCJzZW5kRW1haWxWZXJpZmljYXRpb24kMSIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwkMSIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCQxIiwidmVyaWZ5QW5kQ2hhbmdlRW1haWwiLCJzaWduSW5XaXRoRW1haWxMaW5rJDEiLCJzaWduSW5XaXRoRW1haWxMaW5rRm9yTGlua2luZyIsIl9lbWFpbCIsIl9wYXNzd29yZCIsIl90ZW5hbnRJZCIsIl9mcm9tRW1haWxBbmRQYXNzd29yZCIsIl9mcm9tRW1haWxBbmRDb2RlIiwib29iQ29kZSIsIm9iaiIsInJldHVyblNlY3VyZVRva2VuIiwic2lnbkluV2l0aElkcCIsIklEUF9SRVFVRVNUX1VSSSQxIiwicGVuZGluZ1Rva2VuIiwiX2Zyb21QYXJhbXMiLCJjcmVkIiwibm9uY2UiLCJvYXV0aFRva2VuIiwib2F1dGhUb2tlblNlY3JldCIsInNlY3JldCIsImJ1aWxkUmVxdWVzdCIsImF1dG9DcmVhdGUiLCJyZXF1ZXN0VXJpIiwicG9zdEJvZHkiLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlIiwic2lnbkluV2l0aFBob25lTnVtYmVyJDEiLCJsaW5rV2l0aFBob25lTnVtYmVyJDEiLCJ0ZW1wb3JhcnlQcm9vZiIsIlZFUklGWV9QSE9ORV9OVU1CRVJfRk9SX0VYSVNUSU5HX0VSUk9SX01BUF8iLCJ2ZXJpZnlQaG9uZU51bWJlckZvckV4aXN0aW5nIiwiYXBpUmVxdWVzdCIsIm9wZXJhdGlvbiIsIl9mcm9tVmVyaWZpY2F0aW9uIiwidmVyaWZpY2F0aW9uSWQiLCJ2ZXJpZmljYXRpb25Db2RlIiwiX2Zyb21Ub2tlblJlc3BvbnNlIiwiX21ha2VWZXJpZmljYXRpb25SZXF1ZXN0Iiwic2Vzc2lvbkluZm8iLCJwYXJzZU1vZGUiLCJtb2RlIiwicGFyc2VEZWVwTGluayIsImxpbmsiLCJxdWVyeXN0cmluZ0RlY29kZSIsImV4dHJhY3RRdWVyeXN0cmluZyIsImRvdWJsZURlZXBMaW5rIiwiaU9TRGVlcExpbmsiLCJpT1NEb3VibGVEZWVwTGluayIsImFjdGlvbkxpbmsiLCJzZWFyY2hQYXJhbXMiLCJjb250aW51ZVVybCIsInBhcnNlTGluayIsIlBST1ZJREVSX0lEIiwiY3JlZGVudGlhbCIsImNyZWRlbnRpYWxXaXRoTGluayIsImVtYWlsTGluayIsImFjdGlvbkNvZGVVcmwiLCJFTUFJTF9QQVNTV09SRF9TSUdOX0lOX01FVEhPRCIsIkVNQUlMX0xJTktfU0lHTl9JTl9NRVRIT0QiLCJGZWRlcmF0ZWRBdXRoUHJvdmlkZXIiLCJkZWZhdWx0TGFuZ3VhZ2VDb2RlIiwiY3VzdG9tUGFyYW1ldGVycyIsInNldERlZmF1bHRMYW5ndWFnZSIsInNldEN1c3RvbVBhcmFtZXRlcnMiLCJjdXN0b21PQXV0aFBhcmFtZXRlcnMiLCJnZXRDdXN0b21QYXJhbWV0ZXJzIiwiQmFzZU9BdXRoUHJvdmlkZXIiLCJzY29wZXMiLCJhZGRTY29wZSIsInNjb3BlIiwiZ2V0U2NvcGVzIiwiY3JlZGVudGlhbEZyb21KU09OIiwiX2NyZWRlbnRpYWwiLCJyYXdOb25jZSIsImNyZWRlbnRpYWxGcm9tUmVzdWx0IiwidXNlckNyZWRlbnRpYWwiLCJvYXV0aENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiY3JlZGVudGlhbEZyb21FcnJvciIsInRva2VuUmVzcG9uc2UiLCJvYXV0aElkVG9rZW4iLCJvYXV0aEFjY2Vzc1Rva2VuIiwiRkFDRUJPT0tfU0lHTl9JTl9NRVRIT0QiLCJjcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIkdPT0dMRV9TSUdOX0lOX01FVEhPRCIsIkdJVEhVQl9TSUdOX0lOX01FVEhPRCIsIklEUF9SRVFVRVNUX1VSSSIsIlNBTUxBdXRoQ3JlZGVudGlhbCIsIl9jcmVhdGUiLCJTQU1MX1BST1ZJREVSX1BSRUZJWCIsInNhbWxDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIlRXSVRURVJfU0lHTl9JTl9NRVRIT0QiLCJzaWduVXAiLCJVc2VyQ3JlZGVudGlhbEltcGwiLCJvcGVyYXRpb25UeXBlIiwicHJvdmlkZXJJZEZvclJlc3BvbnNlIiwidXNlckNyZWQiLCJfZm9yT3BlcmF0aW9uIiwiTXVsdGlGYWN0b3JFcnJvciIsInNldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiX2Zyb21FcnJvckFuZE9wZXJhdGlvbiIsIl9wcm9jZXNzQ3JlZGVudGlhbFNhdmluZ01mYUNvbnRleHRJZk5lY2Vzc2FyeSIsImlkVG9rZW5Qcm92aWRlciIsInByb3ZpZGVyRGF0YUFzTmFtZXMiLCJTZXQiLCJwaWQiLCJfYXNzZXJ0TGlua2VkU3RhdHVzIiwiZGVsZXRlUHJvdmlkZXIiLCJwcm92aWRlcnNMZWZ0IiwicGQiLCJoYXMiLCJfbGluayQxIiwiZXhwZWN0ZWQiLCJwcm92aWRlcklkcyIsIl9yZWF1dGhlbnRpY2F0ZSIsInBhcnNlZCIsInN1YiIsIl9zaWduSW5XaXRoQ3JlZGVudGlhbCIsInNpZ25JbldpdGhDdXN0b21Ub2tlbiQxIiwiY3VzdG9tVG9rZW4iLCJNdWx0aUZhY3RvckluZm9JbXBsIiwiZmFjdG9ySWQiLCJtZmFFbnJvbGxtZW50SWQiLCJlbnJvbGxtZW50VGltZSIsImVucm9sbGVkQXQiLCJfZnJvbVNlcnZlclJlc3BvbnNlIiwiZW5yb2xsbWVudCIsIlBob25lTXVsdGlGYWN0b3JJbmZvSW1wbCIsIlRvdHBNdWx0aUZhY3RvckluZm9JbXBsIiwicGhvbmVJbmZvIiwiX3NldEFjdGlvbkNvZGVTZXR0aW5nc09uUmVxdWVzdCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsImR5bmFtaWNMaW5rRG9tYWluIiwiY2FuSGFuZGxlQ29kZUluQXBwIiwiaGFuZGxlQ29kZUluQXBwIiwiaU9TIiwiYnVuZGxlSWQiLCJpT1NCdW5kbGVJZCIsImFuZHJvaWQiLCJwYWNrYWdlTmFtZSIsImFuZHJvaWRJbnN0YWxsQXBwIiwiaW5zdGFsbEFwcCIsImFuZHJvaWRNaW5pbXVtVmVyc2lvbkNvZGUiLCJtaW5pbXVtVmVyc2lvbiIsImFuZHJvaWRQYWNrYWdlTmFtZSIsInJlY2FjaGVQYXNzd29yZFBvbGljeSIsInJlcXVlc3RUeXBlIiwibmV3UGFzc3dvcmQiLCJhdXRoTW9kdWxhciIsIm5ld0VtYWlsIiwibWZhSW5mbyIsIm11bHRpRmFjdG9ySW5mbyIsImRhdGEiLCJwcmV2aW91c0VtYWlsIiwic2lnblVwUmVzcG9uc2UiLCJzZXRBY3Rpb25Db2RlU2V0dGluZ3MiLCJyZXF1ZXN0MiIsImFjdGlvbkNvZGVTZXR0aW5nczIiLCJjcmVhdGVBdXRoVXJpIiwiY29udGludWVVcmkiLCJpZGVudGlmaWVyIiwic2lnbmluTWV0aG9kcyIsInVwZGF0ZVByb2ZpbGUkMSIsInByb2ZpbGVSZXF1ZXN0IiwicGFzc3dvcmRQcm92aWRlciIsImZpbmQiLCJ1cGRhdGVFbWFpbE9yUGFzc3dvcmQiLCJwcm9maWxlIiwicmF3VXNlckluZm8iLCJpc05ld1VzZXIiLCJraW5kIiwiZmlsdGVyZWRQcm92aWRlcklkIiwiR2VuZXJpY0FkZGl0aW9uYWxVc2VySW5mbyIsIkZhY2Vib29rQWRkaXRpb25hbFVzZXJJbmZvIiwiR2l0aHViQWRkaXRpb25hbFVzZXJJbmZvIiwiR29vZ2xlQWRkaXRpb25hbFVzZXJJbmZvIiwiVHdpdHRlckFkZGl0aW9uYWxVc2VySW5mbyIsInNjcmVlbk5hbWUiLCJGZWRlcmF0ZWRBZGRpdGlvbmFsVXNlckluZm9XaXRoVXNlcm5hbWUiLCJ1c2VybmFtZSIsImxvZ2luIiwiTXVsdGlGYWN0b3JTZXNzaW9uSW1wbCIsIl9mcm9tSWR0b2tlbiIsIl9mcm9tTWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm11bHRpRmFjdG9yU2Vzc2lvbiIsInBlbmRpbmdDcmVkZW50aWFsIiwiTXVsdGlGYWN0b3JSZXNvbHZlckltcGwiLCJzZXNzaW9uIiwiaGludHMiLCJzaWduSW5SZXNvbHZlciIsIl9mcm9tRXJyb3IiLCJtZmFSZXNwb25zZSIsIl9wcm9jZXNzIiwicmVzb2x2ZVNpZ25JbiIsImFzc2VydGlvbkV4dGVybiIsImVycm9ySW50ZXJuYWwiLCJzdGFydEVucm9sbFBob25lTWZhIiwiZmluYWxpemVFbnJvbGxQaG9uZU1mYSIsInN0YXJ0RW5yb2xsVG90cE1mYSIsImZpbmFsaXplRW5yb2xsVG90cE1mYSIsIndpdGhkcmF3TWZhIiwiTXVsdGlGYWN0b3JVc2VySW1wbCIsImVucm9sbGVkRmFjdG9ycyIsIl9mcm9tVXNlciIsImdldFNlc3Npb24iLCJlbnJvbGwiLCJmaW5hbGl6ZU1mYVJlc3BvbnNlIiwidW5lbnJvbGwiLCJpbmZvT3JVaWQiLCJtdWx0aUZhY3RvclVzZXJDYWNoZSIsIldlYWtNYXAiLCJ1c2VyTW9kdWxhciIsIlNUT1JBR0VfQVZBSUxBQkxFX0tFWSIsIkJyb3dzZXJQZXJzaXN0ZW5jZUNsYXNzIiwic3RvcmFnZVJldHJpZXZlciIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsIl9QT0xMSU5HX0lOVEVSVkFMX01TJDEiLCJJRTEwX0xPQ0FMX1NUT1JBR0VfU1lOQ19ERUxBWSIsIkJyb3dzZXJMb2NhbFBlcnNpc3RlbmNlIiwibG9jYWxTdG9yYWdlIiwiZXZlbnQiLCJwb2xsIiwib25TdG9yYWdlRXZlbnQiLCJsaXN0ZW5lcnMiLCJsb2NhbENhY2hlIiwicG9sbFRpbWVyIiwiZmFsbGJhY2tUb1BvbGxpbmciLCJmb3JBbGxDaGFuZ2VkS2V5cyIsImtleXMiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwia2V5MiIsIl9vbGRWYWx1ZSIsIm5vdGlmeUxpc3RlbmVycyIsImRldGFjaExpc3RlbmVyIiwic3RvcFBvbGxpbmciLCJ0cmlnZ2VyTGlzdGVuZXJzIiwic3RvcmVkVmFsdWUyIiwic3RvcmVkVmFsdWUiLCJsaXN0ZW5lciIsImZyb20iLCJzdGFydFBvbGxpbmciLCJzZXRJbnRlcnZhbCIsIlN0b3JhZ2VFdmVudCIsImNsZWFySW50ZXJ2YWwiLCJhdHRhY2hMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaXplIiwiQnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsInNlc3Npb25TdG9yYWdlIiwiX2FsbFNldHRsZWQiLCJwcm9taXNlcyIsImZ1bGZpbGxlZCIsInJlYXNvbiIsIlJlY2VpdmVyIiwiZXZlbnRUYXJnZXQiLCJoYW5kbGVyc01hcCIsImhhbmRsZUV2ZW50IiwiZXhpc3RpbmdJbnN0YW5jZSIsInJlY2VpdmVycyIsInJlY2VpdmVyIiwiaXNMaXN0ZW5pbmd0byIsIm5ld0luc3RhbmNlIiwibWVzc2FnZUV2ZW50IiwiZXZlbnRJZCIsImV2ZW50VHlwZSIsImhhbmRsZXJzIiwicG9ydHMiLCJwb3N0TWVzc2FnZSIsImhhbmRsZXIiLCJvcmlnaW4iLCJfc3Vic2NyaWJlIiwiZXZlbnRIYW5kbGVyIiwiX3Vuc3Vic2NyaWJlIiwiX2dlbmVyYXRlRXZlbnRJZCIsImRpZ2l0cyIsIlNlbmRlciIsInRhcmdldCIsInJlbW92ZU1lc3NhZ2VIYW5kbGVyIiwibWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsIm9uTWVzc2FnZSIsImNsb3NlIiwiX3NlbmQiLCJ0aW1lb3V0IiwiTWVzc2FnZUNoYW5uZWwiLCJjb21wbGV0aW9uVGltZXIiLCJzdGFydCIsImFja1RpbWVyIiwicG9ydDIiLCJmaW5hbGx5IiwiX3dpbmRvdyIsIl9zZXRXaW5kb3dMb2NhdGlvbiIsIl9pc1dvcmtlciIsIl9nZXRBY3RpdmVTZXJ2aWNlV29ya2VyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdHJhdGlvbiIsImFjdGl2ZSIsIl9nZXRTZXJ2aWNlV29ya2VyQ29udHJvbGxlciIsImNvbnRyb2xsZXIiLCJfZ2V0V29ya2VyR2xvYmFsU2NvcGUiLCJEQl9OQU1FIiwiREJfVkVSU0lPTiIsIkRCX09CSkVDVFNUT1JFX05BTUUiLCJEQl9EQVRBX0tFWVBBVEgiLCJEQlByb21pc2UiLCJ0b1Byb21pc2UiLCJnZXRPYmplY3RTdG9yZSIsImRiIiwiaXNSZWFkV3JpdGUiLCJ0cmFuc2FjdGlvbiIsIm9iamVjdFN0b3JlIiwiX2RlbGV0ZURhdGFiYXNlIiwiaW5kZXhlZERCIiwiZGVsZXRlRGF0YWJhc2UiLCJfb3BlbkRhdGFiYXNlIiwib3BlbiIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsIl9wdXRPYmplY3QiLCJwdXQiLCJnZXRPYmplY3QiLCJfZGVsZXRlT2JqZWN0IiwiX1BPTExJTkdfSU5URVJWQUxfTVMiLCJfVFJBTlNBQ1RJT05fUkVUUllfQ09VTlQiLCJJbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwicGVuZGluZ1dyaXRlcyIsInNlbmRlciIsInNlcnZpY2VXb3JrZXJSZWNlaXZlckF2YWlsYWJsZSIsImFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJfd29ya2VySW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiaW5pdGlhbGl6ZVNlcnZpY2VXb3JrZXJNZXNzYWdpbmciLCJfb3BlbkRiIiwiX3dpdGhSZXRyaWVzIiwib3AiLCJudW1BdHRlbXB0cyIsImluaXRpYWxpemVSZWNlaXZlciIsImluaXRpYWxpemVTZW5kZXIiLCJfb3JpZ2luIiwiX3BvbGwiLCJrZXlQcm9jZXNzZWQiLCJfZGF0YSIsInJlc3VsdHMiLCJub3RpZnlTZXJ2aWNlV29ya2VyIiwiX3dpdGhQZW5kaW5nV3JpdGUiLCJ3cml0ZSIsImdldEFsbFJlcXVlc3QiLCJnZXRBbGwiLCJrZXlzSW5SZXN1bHQiLCJmYmFzZV9rZXkiLCJsb2NhbEtleSIsInN0YXJ0U2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblBob25lTWZhIiwiZmluYWxpemVTaWduSW5Ub3RwTWZhIiwiX1NPTFZFX1RJTUVfTVMiLCJfRVhQSVJBVElPTl9USU1FX01TIiwiX1dJREdFVF9JRF9TVEFSVCIsIk1vY2tSZUNhcHRjaGEiLCJjb3VudGVyIiwiX3dpZGdldHMiLCJyZW5kZXIiLCJjb250YWluZXIiLCJwYXJhbWV0ZXJzIiwiTW9ja1dpZGdldCIsInJlc2V0Iiwib3B0V2lkZ2V0SWQiLCJjb250YWluZXJPcklkIiwiZGVsZXRlZCIsInJlc3BvbnNlVG9rZW4iLCJjbGlja0hhbmRsZXIiLCJnZXRFbGVtZW50QnlJZCIsImlzVmlzaWJsZSIsImNoZWNrSWZEZWxldGVkIiwiZ2VuZXJhdGVSYW5kb21BbHBoYU51bWVyaWNTdHJpbmciLCJleHBpcmVkQ2FsbGJhY2siLCJsZW4iLCJjaGFycyIsImFsbG93ZWRDaGFycyIsIl9KU0xPQURfQ0FMTEJBQ0siLCJORVRXT1JLX1RJTUVPVVRfREVMQVkiLCJSZUNhcHRjaGFMb2FkZXJJbXBsIiwiaG9zdExhbmd1YWdlIiwibGlicmFyeVNlcGFyYXRlbHlMb2FkZWQiLCJsb2FkIiwiaGwiLCJpc0hvc3RMYW5ndWFnZVZhbGlkIiwic2hvdWxkUmVzb2x2ZUltbWVkaWF0ZWx5IiwicmVjYXB0Y2hhIiwid2lkZ2V0SWQiLCJvbmxvYWQiLCJjbGVhcmVkT25lSW5zdGFuY2UiLCJNb2NrUmVDYXB0Y2hhTG9hZGVySW1wbCIsIlJFQ0FQVENIQV9WRVJJRklFUl9UWVBFIiwiREVGQVVMVF9QQVJBTVMiLCJ0aGVtZSIsImRlc3Ryb3llZCIsInRva2VuQ2hhbmdlTGlzdGVuZXJzIiwicmVuZGVyUHJvbWlzZSIsImlzSW52aXNpYmxlIiwibWFrZVRva2VuQ2FsbGJhY2siLCJfcmVjYXB0Y2hhTG9hZGVyIiwidmFsaWRhdGVTdGFydGluZ1N0YXRlIiwiYXNzZXJ0Tm90RGVzdHJveWVkIiwiZ2V0QXNzZXJ0ZWRSZWNhcHRjaGEiLCJ0b2tlbkNoYW5nZSIsIm1ha2VSZW5kZXJQcm9taXNlIiwiX3Jlc2V0IiwiY2xlYXIiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJyZW1vdmVDaGlsZCIsInNpdGVrZXkiLCJoYXNDaGlsZE5vZGVzIiwiZXhpc3RpbmciLCJnbG9iYWxGdW5jIiwiaW5pdCIsImd1YXJhbnRlZWRFbXB0eSIsImRvbVJlYWR5IiwiQ29uZmlybWF0aW9uUmVzdWx0SW1wbCIsIm9uQ29uZmlybWF0aW9uIiwiY29uZmlybSIsImF1dGhDcmVkZW50aWFsIiwiYXBwVmVyaWZpZXIiLCJfdmVyaWZ5UGhvbmVOdW1iZXIiLCJyZWNhcHRjaGFUb2tlbiIsInBob25lSW5mb09wdGlvbnMiLCJwaG9uZUVucm9sbG1lbnRJbmZvIiwicGhvbmVTZXNzaW9uSW5mbyIsIm11bHRpRmFjdG9ySGludCIsIm11bHRpRmFjdG9yVWlkIiwicGhvbmVTaWduSW5JbmZvIiwicGhvbmVSZXNwb25zZUluZm8iLCJ2ZXJpZnlQaG9uZU51bWJlciIsInBob25lT3B0aW9ucyIsImFwcGxpY2F0aW9uVmVyaWZpZXIiLCJQSE9ORV9TSUdOX0lOX01FVEhPRCIsIl93aXRoRGVmYXVsdFJlc29sdmVyIiwicmVzb2x2ZXJPdmVycmlkZSIsIklkcENyZWRlbnRpYWwiLCJfYnVpbGRJZHBSZXF1ZXN0Iiwic2Vzc2lvbklkIiwicmV0dXJuSWRwQ3JlZGVudGlhbCIsIl9zaWduSW4iLCJfcmVhdXRoIiwiX2xpbmsiLCJBYnN0cmFjdFBvcHVwUmVkaXJlY3RPcGVyYXRpb24iLCJwZW5kaW5nUHJvbWlzZSIsImV2ZW50TWFuYWdlciIsIm9uRXhlY3V0aW9uIiwicmVnaXN0ZXJDb25zdW1lciIsIm9uQXV0aEV2ZW50IiwidXJsUmVzcG9uc2UiLCJnZXRJZHBUYXNrIiwib25FcnJvciIsInVucmVnaXN0ZXJBbmRDbGVhblVwIiwidW5yZWdpc3RlckNvbnN1bWVyIiwiY2xlYW5VcCIsIl9QT0xMX1dJTkRPV19DTE9TRV9USU1FT1VUIiwicmVzb2x2ZXJJbnRlcm5hbCIsIlBvcHVwT3BlcmF0aW9uIiwiZXhlY3V0ZU5vdE51bGwiLCJhdXRoV2luZG93IiwicG9sbElkIiwiY3VycmVudFBvcHVwQWN0aW9uIiwiY2FuY2VsIiwiX29wZW5Qb3B1cCIsImFzc29jaWF0ZWRFdmVudCIsIl9vcmlnaW5WYWxpZGF0aW9uIiwiX2lzSWZyYW1lV2ViU3RvcmFnZVN1cHBvcnRlZCIsImlzU3VwcG9ydGVkIiwicG9sbFVzZXJDYW5jZWxsYXRpb24iLCJjbG9zZWQiLCJQRU5ESU5HX1JFRElSRUNUX0tFWSIsInJlZGlyZWN0T3V0Y29tZU1hcCIsIlJlZGlyZWN0QWN0aW9uIiwicmVhZHlPdXRjb21lIiwiaGFzUGVuZGluZ1JlZGlyZWN0IiwiX2dldEFuZENsZWFyUGVuZGluZ1JlZGlyZWN0U3RhdHVzIiwicGVuZGluZ1JlZGlyZWN0S2V5IiwicmVzb2x2ZXJQZXJzaXN0ZW5jZSIsIl9zZXRQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJfY2xlYXJSZWRpcmVjdE91dGNvbWVzIiwiX3NpZ25JbldpdGhSZWRpcmVjdCIsIl9vcGVuUmVkaXJlY3QiLCJfcmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJwcmVwYXJlVXNlckZvclJlZGlyZWN0IiwiX2xpbmtXaXRoUmVkaXJlY3QiLCJfZ2V0UmVkaXJlY3RSZXN1bHQiLCJyZXNvbHZlckV4dGVybiIsIkVWRU5UX0RVUExJQ0FUSU9OX0NBQ0hFX0RVUkFUSU9OX01TIiwiQXV0aEV2ZW50TWFuYWdlciIsImNhY2hlZEV2ZW50VWlkcyIsImNvbnN1bWVycyIsInF1ZXVlZFJlZGlyZWN0RXZlbnQiLCJoYXNIYW5kbGVkUG90ZW50aWFsUmVkaXJlY3QiLCJsYXN0UHJvY2Vzc2VkRXZlbnRUaW1lIiwiYXV0aEV2ZW50Q29uc3VtZXIiLCJpc0V2ZW50Rm9yQ29uc3VtZXIiLCJzZW5kVG9Db25zdW1lciIsInNhdmVFdmVudFRvQ2FjaGUiLCJvbkV2ZW50IiwiaGFzRXZlbnRCZWVuSGFuZGxlZCIsImhhbmRsZWQiLCJjb25zdW1lciIsImlzUmVkaXJlY3RFdmVudCIsImlzTnVsbFJlZGlyZWN0RXZlbnQiLCJldmVudElkTWF0Y2hlcyIsImV2ZW50VWlkIiwidiIsIl9nZXRQcm9qZWN0Q29uZmlnIiwiSVBfQUREUkVTU19SRUdFWCIsIkhUVFBfUkVHRVgiLCJfdmFsaWRhdGVPcmlnaW4iLCJhdXRob3JpemVkRG9tYWlucyIsImRvbWFpbiIsIm1hdGNoRG9tYWluIiwiY3VycmVudFVybCIsImhvc3RuYW1lIiwiVVJMIiwiY2VVcmwiLCJlc2NhcGVkRG9tYWluUGF0dGVybiIsIlJlZ0V4cCIsIk5FVFdPUktfVElNRU9VVCIsInJlc2V0VW5sb2FkZWRHYXBpTW9kdWxlcyIsImJlYWNvbiIsIl9fX2pzbCIsIkgiLCJoaW50IiwiciIsIkwiLCJDUCIsImxvYWRHYXBpIiwibG9hZEdhcGlJZnJhbWUiLCJnYXBpIiwiaWZyYW1lcyIsImdldENvbnRleHQiLCJvbnRpbWVvdXQiLCJJZnJhbWUiLCJjYk5hbWUiLCJjYWNoZWRHQXBpTG9hZGVyIiwiX2xvYWRHYXBpIiwiUElOR19USU1FT1VUIiwiSUZSQU1FX1BBVEgiLCJFTVVMQVRFRF9JRlJBTUVfUEFUSCIsIklGUkFNRV9BVFRSSUJVVEVTIiwidG9wIiwiaGVpZ2h0IiwidGFiaW5kZXgiLCJFSURfRlJPTV9BUElIT1NUIiwiZ2V0SWZyYW1lVXJsIiwiZWlkIiwiZnciLCJfb3BlbklmcmFtZSIsImNvbnRleHQiLCJnYXBpMiIsIndoZXJlIiwibWVzc2FnZUhhbmRsZXJzRmlsdGVyIiwiQ1JPU1NfT1JJR0lOX0lGUkFNRVNfRklMVEVSIiwiYXR0cmlidXRlcyIsImRvbnRjbGVhciIsImlmcmFtZSIsInJlc3R5bGUiLCJzZXRIaWRlT25MZWF2ZSIsIm5ldHdvcmtFcnJvciIsIm5ldHdvcmtFcnJvclRpbWVyIiwiY2xlYXJUaW1lckFuZFJlc29sdmUiLCJwaW5nIiwiQkFTRV9QT1BVUF9PUFRJT05TIiwicmVzaXphYmxlIiwic3RhdHVzYmFyIiwidG9vbGJhciIsIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIlRBUkdFVF9CTEFOSyIsIkZJUkVGT1hfRU1QVFlfVVJMIiwiQXV0aFBvcHVwIiwid2luZG93MiIsIl9vcGVuIiwic2NyZWVuIiwiYXZhaWxIZWlnaHQiLCJhdmFpbFdpZHRoIiwic2Nyb2xsYmFycyIsIm9wdGlvbnNTdHJpbmciLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjdW0iLCJvcGVuQXNOZXdXaW5kb3dJT1MiLCJuZXdXaW4iLCJmb2N1cyIsImNsaWNrIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJXSURHRVRfUEFUSCIsIkVNVUxBVE9SX1dJREdFVF9QQVRIIiwiRklSRUJBU0VfQVBQX0NIRUNLX0ZSQUdNRU5UX0lEIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX2dldFJlZGlyZWN0VXJsIiwiYXV0aFR5cGUiLCJyZWRpcmVjdFVybCIsImFkZGl0aW9uYWxQYXJhbXMiLCJpc0VtcHR5IiwidGlkIiwicGFyYW1zRGljdCIsImFwcENoZWNrVG9rZW5GcmFnbWVudCIsImdldEhhbmRsZXJCYXNlIiwiV0VCX1NUT1JBR0VfU1VQUE9SVF9LRVkiLCJCcm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiZXZlbnRNYW5hZ2VycyIsIm9yaWdpblZhbGlkYXRpb25Qcm9taXNlcyIsInByb21pc2UyIiwiaW5pdEFuZEdldE1hbmFnZXIiLCJyZWdpc3RlciIsImlmcmFtZUV2ZW50IiwiYXV0aEV2ZW50Iiwic2VuZCIsIk11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9maW5hbGl6ZUVucm9sbCIsIl9maW5hbGl6ZVNpZ25JbiIsIlBob25lTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2Zyb21DcmVkZW50aWFsIiwicGhvbmVWZXJpZmljYXRpb25JbmZvIiwiRkFDVE9SX0lEIiwiYXNzZXJ0aW9uRm9yRW5yb2xsbWVudCIsIm9uZVRpbWVQYXNzd29yZCIsIlRvdHBNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbVNlY3JldCIsImFzc2VydGlvbkZvclNpZ25JbiIsImVucm9sbG1lbnRJZCIsIl9mcm9tRW5yb2xsbWVudElkIiwiZ2VuZXJhdGVTZWNyZXQiLCJtZmFTZXNzaW9uIiwidG90cEVucm9sbG1lbnRJbmZvIiwiX2Zyb21TdGFydFRvdHBNZmFFbnJvbGxtZW50UmVzcG9uc2UiLCJvdHAiLCJ0b3RwVmVyaWZpY2F0aW9uSW5mbyIsIl9tYWtlVG90cFZlcmlmaWNhdGlvbkluZm8iLCJzZWNyZXRLZXkiLCJoYXNoaW5nQWxnb3JpdGhtIiwiY29kZUxlbmd0aCIsImNvZGVJbnRlcnZhbFNlY29uZHMiLCJlbnJvbGxtZW50Q29tcGxldGlvbkRlYWRsaW5lIiwidG90cFNlc3Npb25JbmZvIiwic2hhcmVkU2VjcmV0S2V5IiwidmVyaWZpY2F0aW9uQ29kZUxlbmd0aCIsInBlcmlvZFNlYyIsImZpbmFsaXplRW5yb2xsbWVudFRpbWUiLCJnZW5lcmF0ZVFyQ29kZVVybCIsImFjY291bnROYW1lIiwiaXNzdWVyIiwidXNlRGVmYXVsdHMiLCJfaXNFbXB0eVN0cmluZyIsImlucHV0IiwiQXV0aEludGVyb3AiLCJpbnRlcm5hbExpc3RlbmVycyIsImdldFVpZCIsImFzc2VydEF1dGhDb25maWd1cmVkIiwiYWRkQXV0aFRva2VuTGlzdGVuZXIiLCJ1cGRhdGVQcm9hY3RpdmVSZWZyZXNoIiwicmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIiLCJnZXRWZXJzaW9uRm9yUGxhdGZvcm0iLCJyZWdpc3RlckF1dGgiLCJfcmVnaXN0ZXJDb21wb25lbnQiLCJpbXBvcnRfY29tcG9uZW50IiwiQ29tcG9uZW50IiwiZ2V0UHJvdmlkZXIiLCJzZXRJbnN0YW50aWF0aW9uTW9kZSIsInNldEluc3RhbmNlQ3JlYXRlZENhbGxiYWNrIiwiX2luc3RhbmNlSWRlbnRpZmllciIsIl9pbnN0YW5jZSIsImF1dGhJbnRlcm5hbFByb3ZpZGVyIiwicmVnaXN0ZXJWZXJzaW9uIiwiREVGQVVMVF9JRF9UT0tFTl9NQVhfQUdFIiwiYXV0aElkVG9rZW5NYXhBZ2UiLCJnZXRFeHBlcmltZW50YWxTZXR0aW5nIiwibGFzdFBvc3RlZElkVG9rZW4iLCJtaW50Q29va2llRmFjdG9yeSIsImlkVG9rZW5SZXN1bHQiLCJpZFRva2VuQWdlIiwiZ2V0QXBwIiwiYXV0aFRva2VuU3luY1BhdGgiLCJpc1NlY3VyZUNvbnRleHQiLCJhdXRoVG9rZW5TeW5jVXJsIiwibWludENvb2tpZSIsImF1dGhFbXVsYXRvckhvc3QiLCJnZXREZWZhdWx0RW11bGF0b3JIb3N0IiwiZ2V0U2NyaXB0UGFyZW50RWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0QXR0cmlidXRlIiwib25lcnJvciIsImNoYXJzZXQiLCJpbXBvcnRfYXBwMiIsInJlcXVpcmUiLCJpbXBvcnRfdXRpbDIiLCJpbXBvcnRfbG9nZ2VyMiIsImltcG9ydF90c2xpYjIiLCJpbXBvcnRfY29tcG9uZW50MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQywwQ0FBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLHlCQUFBLEVBQUFBLENBQUEsS0FBQUEseUJBQUE7RUFBQUMsVUFBQSxF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Q0FBaUJ1TCxJQUFBLEVBQU02SixJQUFBLElBQVErbkMsVUFBQSxDQUFXL25DLElBQUksQ0FBQztJQUNoRDtFQUNGO0VBRUQsTUFBTWdvQyxnQkFBQSxPQUFtQjU1QyxXQUFBLENBQUE2NUMsc0JBQUEsRUFBdUIsTUFBTTtFQUN0RCxJQUFJRCxnQkFBQSxFQUFrQjtJQUNwQjErQyxtQkFBQSxDQUFvQjZNLElBQUEsRUFBTSxVQUFVNnhDLGdCQUFBLEVBQWtCO0VBQ3ZEO0VBRUQsT0FBTzd4QyxJQUFBO0FBQ1Q7QUFFQSxTQUFTK3hDLHVCQUFBLEVBQXNCOztFQUM3QixRQUFPMy9CLEVBQUEsSUFBQXpRLEVBQUEsR0FBQXVWLFFBQUEsQ0FBUzg2QixvQkFBQSxDQUFxQixNQUFNLE9BQUksUUFBQXJ3QyxFQUFBLHVCQUFBQSxFQUFBLFNBQUUsUUFBQXlRLEVBQUEsY0FBQUEsRUFBQSxHQUFJOEUsUUFBQTtBQUN2RDtBQUVBMEosc0JBQUEsQ0FBdUI7RUFDckJKLE9BQU9sZCxHQUFBLEVBQVc7SUFFaEIsT0FBTyxJQUFJdUMsT0FBQSxDQUFRLENBQUNtUyxPQUFBLEVBQVN4USxNQUFBLEtBQVU7TUFDckMsTUFBTWdkLEVBQUEsR0FBS3ROLFFBQUEsQ0FBU3VOLGFBQUEsQ0FBYyxRQUFRO01BQzFDRCxFQUFBLENBQUd5dEIsWUFBQSxDQUFhLE9BQU8zdUMsR0FBRztNQUMxQmtoQixFQUFBLENBQUc2YSxNQUFBLEdBQVNybkIsT0FBQTtNQUNad00sRUFBQSxDQUFHMHRCLE9BQUEsR0FBVXZyQyxDQUFBLElBQUk7UUFDZixNQUFNbEgsS0FBQSxHQUFRSyxZQUFBLENBQVk7UUFDMUJMLEtBQUEsQ0FBTXFJLFVBQUEsR0FBYW5CLENBQUE7UUFDbkJhLE1BQUEsQ0FBTy9ILEtBQUs7TUFDZDtNQUNBK2tCLEVBQUEsQ0FBR2hSLElBQUEsR0FBTztNQUNWZ1IsRUFBQSxDQUFHMnRCLE9BQUEsR0FBVTtNQUNiSixzQkFBQSxDQUFzQixFQUFHdHNCLFdBQUEsQ0FBWWpCLEVBQUU7SUFDekMsQ0FBQzs7RUFHSDdELFVBQUEsRUFBWTtFQUNaRixpQkFBQSxFQUFtQjtFQUNuQkMseUJBQUEsRUFDRTtBQUNIO0FBRUQ0dkIsWUFBQSxDQUFZOzs7QUNoSlosSUFBQThCLFdBQUEsR0FBT0MsT0FBQTtBQUNQLElBQUFDLFlBQUEsR0FBT0QsT0FBQTtBQUNQLElBQUFFLGNBQUEsR0FBT0YsT0FBQTtBQUNQLElBQUFHLGFBQUEsR0FBT0gsT0FBQTtBQUNQLElBQUFJLGlCQUFBLEdBQU9KLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=