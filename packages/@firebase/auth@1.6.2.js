System.register(["@firebase/util@1.9.4","@firebase/component@0.6.5","@firebase/logger@0.4.0","idb@7.1.1","@firebase/app@0.9.29","tslib@2.6.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.9.4"],["@firebase/component","0.6.5"],["@firebase/logger","0.4.0"],["idb","7.1.1"],["@firebase/app","0.9.29"],["tslib","2.6.2"],["@firebase/auth","1.6.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.9.4', dep), dep => dependencies.set('@firebase/component@0.6.5', dep), dep => dependencies.set('@firebase/logger@0.4.0', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.9.29', dep), dep => dependencies.set('tslib@2.6.2', dep)],
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

// .beyond/uimport/temp/@firebase/auth.1.6.2.js
var auth_1_6_2_exports = {};
__export(auth_1_6_2_exports, {
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
module.exports = __toCommonJS(auth_1_6_2_exports);

// node_modules/@firebase/auth/dist/esm2017/index-e939beb5.js
var import_util = require("@firebase/util@1.9.4");
var import_app = require("@firebase/app@0.9.29");
var import_logger = require("@firebase/logger@0.4.0");
var import_tslib = require("tslib@2.6.2");
var import_component = require("@firebase/component@0.6.5");
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
var version = "1.6.2";
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
  if (authTokenSyncPath && authTokenSyncPath.match(/^\/[^\/].*/)) {
    const mintCookie = mintCookieFactory(authTokenSyncPath);
    beforeAuthStateChanged(auth, mintCookie, () => mintCookie(auth.currentUser));
    onIdTokenChanged(auth, user => mintCookie(user));
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
var import_util2 = require("@firebase/util@1.9.4");
var import_app2 = require("@firebase/app@0.9.29");
var import_logger2 = require("@firebase/logger@0.4.0");
var import_tslib2 = require("tslib@2.6.2");
var import_component2 = require("@firebase/component@0.6.5");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hdXRoLjEuNi4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tb2RlbC9lbnVtX21hcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYXNzZXJ0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9jYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9uYXZpZ2F0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9kZWxheS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZmV0Y2hfcHJvdmlkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vcmVjYXB0Y2hhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2FjY291bnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC90aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaWRfdG9rZW5fcmVzdWx0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaW52YWxpZGF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcHJvYWN0aXZlX3JlZnJlc2gudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX21ldGFkYXRhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVsb2FkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci90b2tlbl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaW5zdGFudGlhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luX21lbW9yeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9wZXJzaXN0ZW5jZV91c2VyX21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmVyc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL21pZGRsZXdhcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wYXNzd29yZF9wb2xpY3kvZ2V0X3Bhc3N3b3JkX3BvbGljeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3Bhc3N3b3JkX3BvbGljeV9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2xvYWRfanMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9lbnRlcnByaXNlX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvaW5pdGlhbGl6ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2F1dGhfY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc21zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2FjdGlvbl9jb2RlX3VybC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZlZGVyYXRlZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZhY2Vib29rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9nb29nbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dpdGh1Yi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy90d2l0dGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc2lnbl91cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfY3JlZGVudGlhbF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYW5vbnltb3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Vycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcHJvdmlkZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvbGlua191bmxpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWF1dGhlbnRpY2F0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2FjdGlvbl9jb2RlX3NldHRpbmdzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2NyZWF0ZV9hdXRoX3VyaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L3Byb2ZpbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hY2NvdW50X2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hZGRpdGlvbmFsX3VzZXJfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9zZXNzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV91c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvbG9jYWxfc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9zZXNzaW9uX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcHJvbWlzZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9yZWNlaXZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2V2ZW50X2lkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3NlbmRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9hdXRoX3dpbmRvdy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3dvcmtlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9pbmRleGVkX2RiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbW9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2xvYWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcHJvdmlkZXJzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hYnN0cmFjdF9wb3B1cF9yZWRpcmVjdF9vcGVyYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2V2ZW50X21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wcm9qZWN0X2NvbmZpZy9nZXRfcHJvamVjdF9jb25maWcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92YWxpZGF0ZV9vcmlnaW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2dhcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2lmcmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaGFuZGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wb3B1cF9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9hc3NlcnRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWZhL2Fzc2VydGlvbnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9hc3NlcnRpb25zL3RvdHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9maXJlYmFzZV9pbnRlcm5hbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3JlZ2lzdGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL2Rpc3QvZXNtMjAxNy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhdXRoXzFfNl8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFjdGlvbkNvZGVPcGVyYXRpb24iLCJBY3Rpb25Db2RlVVJMIiwiQXV0aENyZWRlbnRpYWwiLCJBdXRoRXJyb3JDb2RlcyIsIkFVVEhfRVJST1JfQ09ERVNfTUFQX0RPX05PVF9VU0VfSU5URVJOQUxMWSIsIkVtYWlsQXV0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiRmFjdG9ySWQiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJPQXV0aENyZWRlbnRpYWwiLCJPQXV0aFByb3ZpZGVyIiwiT3BlcmF0aW9uVHlwZSIsIlBob25lQXV0aENyZWRlbnRpYWwiLCJQaG9uZUF1dGhQcm92aWRlciIsIlBob25lTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJQcm92aWRlcklkIiwiUmVjYXB0Y2hhVmVyaWZpZXIiLCJTQU1MQXV0aFByb3ZpZGVyIiwiU2lnbkluTWV0aG9kIiwiVG90cE11bHRpRmFjdG9yR2VuZXJhdG9yIiwiVG90cFNlY3JldCIsIlR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJhcHBseUFjdGlvbkNvZGUiLCJiZWZvcmVBdXRoU3RhdGVDaGFuZ2VkIiwiYnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJicm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsImNoZWNrQWN0aW9uQ29kZSIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29ubmVjdEF1dGhFbXVsYXRvciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRlYnVnRXJyb3JNYXAiLCJkZWxldGVVc2VyIiwiZmV0Y2hTaWduSW5NZXRob2RzRm9yRW1haWwiLCJnZXRBZGRpdGlvbmFsVXNlckluZm8iLCJnZXRBdXRoIiwiZ2V0SWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJnZXRNdWx0aUZhY3RvclJlc29sdmVyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJpbk1lbW9yeVBlcnNpc3RlbmNlIiwiaW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsImluaXRpYWxpemVBdXRoIiwiaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImlzU2lnbkluV2l0aEVtYWlsTGluayIsImxpbmtXaXRoQ3JlZGVudGlhbCIsImxpbmtXaXRoUGhvbmVOdW1iZXIiLCJsaW5rV2l0aFBvcHVwIiwibGlua1dpdGhSZWRpcmVjdCIsIm11bHRpRmFjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwib25JZFRva2VuQ2hhbmdlZCIsInBhcnNlQWN0aW9uQ29kZVVSTCIsInByb2RFcnJvck1hcCIsInJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQaG9uZU51bWJlciIsInJlYXV0aGVudGljYXRlV2l0aFBvcHVwIiwicmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJyZWxvYWQiLCJyZXZva2VBY2Nlc3NUb2tlbiIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJzZXRQZXJzaXN0ZW5jZSIsInNpZ25JbkFub255bW91c2x5Iiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbExpbmsiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJzaWduT3V0IiwidW5saW5rIiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGhvbmVOdW1iZXIiLCJ1cGRhdGVQcm9maWxlIiwidXNlRGV2aWNlTGFuZ3VhZ2UiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwidmVyaWZ5QmVmb3JlVXBkYXRlRW1haWwiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJQSE9ORSIsIlRPVFAiLCJGQUNFQk9PSyIsIkdJVEhVQiIsIkdPT0dMRSIsIlBBU1NXT1JEIiwiVFdJVFRFUiIsIkVNQUlMX0xJTksiLCJFTUFJTF9QQVNTV09SRCIsIkxJTksiLCJSRUFVVEhFTlRJQ0FURSIsIlNJR05fSU4iLCJFTUFJTF9TSUdOSU4iLCJQQVNTV09SRF9SRVNFVCIsIlJFQ09WRVJfRU1BSUwiLCJSRVZFUlRfU0VDT05EX0ZBQ1RPUl9BRERJVElPTiIsIlZFUklGWV9BTkRfQ0hBTkdFX0VNQUlMIiwiVkVSSUZZX0VNQUlMIiwiX2RlYnVnRXJyb3JNYXAiLCJfcHJvZEVycm9yTWFwIiwiX0RFRkFVTFRfQVVUSF9FUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJFcnJvckZhY3RvcnkiLCJBRE1JTl9PTkxZX09QRVJBVElPTiIsIkFSR1VNRU5UX0VSUk9SIiwiQVBQX05PVF9BVVRIT1JJWkVEIiwiQVBQX05PVF9JTlNUQUxMRUQiLCJDQVBUQ0hBX0NIRUNLX0ZBSUxFRCIsIkNPREVfRVhQSVJFRCIsIkNPUkRPVkFfTk9UX1JFQURZIiwiQ09SU19VTlNVUFBPUlRFRCIsIkNSRURFTlRJQUxfQUxSRUFEWV9JTl9VU0UiLCJDUkVERU5USUFMX01JU01BVENIIiwiQ1JFREVOVElBTF9UT09fT0xEX0xPR0lOX0FHQUlOIiwiREVQRU5ERU5UX1NES19JTklUX0JFRk9SRV9BVVRIIiwiRFlOQU1JQ19MSU5LX05PVF9BQ1RJVkFURUQiLCJFTUFJTF9DSEFOR0VfTkVFRFNfVkVSSUZJQ0FUSU9OIiwiRU1BSUxfRVhJU1RTIiwiRU1VTEFUT1JfQ09ORklHX0ZBSUxFRCIsIkVYUElSRURfT09CX0NPREUiLCJFWFBJUkVEX1BPUFVQX1JFUVVFU1QiLCJJTlRFUk5BTF9FUlJPUiIsIklOVkFMSURfQVBJX0tFWSIsIklOVkFMSURfQVBQX0NSRURFTlRJQUwiLCJJTlZBTElEX0FQUF9JRCIsIklOVkFMSURfQVVUSCIsIklOVkFMSURfQVVUSF9FVkVOVCIsIklOVkFMSURfQ0VSVF9IQVNIIiwiSU5WQUxJRF9DT0RFIiwiSU5WQUxJRF9DT05USU5VRV9VUkkiLCJJTlZBTElEX0NPUkRPVkFfQ09ORklHVVJBVElPTiIsIklOVkFMSURfQ1VTVE9NX1RPS0VOIiwiSU5WQUxJRF9EWU5BTUlDX0xJTktfRE9NQUlOIiwiSU5WQUxJRF9FTUFJTCIsIklOVkFMSURfRU1VTEFUT1JfU0NIRU1FIiwiSU5WQUxJRF9JRFBfUkVTUE9OU0UiLCJJTlZBTElEX0xPR0lOX0NSRURFTlRJQUxTIiwiSU5WQUxJRF9NRVNTQUdFX1BBWUxPQUQiLCJJTlZBTElEX01GQV9TRVNTSU9OIiwiSU5WQUxJRF9PQVVUSF9DTElFTlRfSUQiLCJJTlZBTElEX09BVVRIX1BST1ZJREVSIiwiSU5WQUxJRF9PT0JfQ09ERSIsIklOVkFMSURfT1JJR0lOIiwiSU5WQUxJRF9QQVNTV09SRCIsIklOVkFMSURfUEVSU0lTVEVOQ0UiLCJJTlZBTElEX1BIT05FX05VTUJFUiIsIklOVkFMSURfUFJPVklERVJfSUQiLCJJTlZBTElEX1JFQ0lQSUVOVF9FTUFJTCIsIklOVkFMSURfU0VOREVSIiwiSU5WQUxJRF9TRVNTSU9OX0lORk8iLCJJTlZBTElEX1RFTkFOVF9JRCIsIk1GQV9JTkZPX05PVF9GT1VORCIsIk1GQV9SRVFVSVJFRCIsIk1JU1NJTkdfQU5EUk9JRF9QQUNLQUdFX05BTUUiLCJNSVNTSU5HX0FQUF9DUkVERU5USUFMIiwiTUlTU0lOR19BVVRIX0RPTUFJTiIsIk1JU1NJTkdfQ09ERSIsIk1JU1NJTkdfQ09OVElOVUVfVVJJIiwiTUlTU0lOR19JRlJBTUVfU1RBUlQiLCJNSVNTSU5HX0lPU19CVU5ETEVfSUQiLCJNSVNTSU5HX09SX0lOVkFMSURfTk9OQ0UiLCJNSVNTSU5HX01GQV9JTkZPIiwiTUlTU0lOR19NRkFfU0VTU0lPTiIsIk1JU1NJTkdfUEhPTkVfTlVNQkVSIiwiTUlTU0lOR19TRVNTSU9OX0lORk8iLCJNT0RVTEVfREVTVFJPWUVEIiwiTkVFRF9DT05GSVJNQVRJT04iLCJORVRXT1JLX1JFUVVFU1RfRkFJTEVEIiwiTlVMTF9VU0VSIiwiTk9fQVVUSF9FVkVOVCIsIk5PX1NVQ0hfUFJPVklERVIiLCJPUEVSQVRJT05fTk9UX0FMTE9XRUQiLCJPUEVSQVRJT05fTk9UX1NVUFBPUlRFRCIsIlBPUFVQX0JMT0NLRUQiLCJQT1BVUF9DTE9TRURfQllfVVNFUiIsIlBST1ZJREVSX0FMUkVBRFlfTElOS0VEIiwiUVVPVEFfRVhDRUVERUQiLCJSRURJUkVDVF9DQU5DRUxMRURfQllfVVNFUiIsIlJFRElSRUNUX09QRVJBVElPTl9QRU5ESU5HIiwiUkVKRUNURURfQ1JFREVOVElBTCIsIlNFQ09ORF9GQUNUT1JfQUxSRUFEWV9FTlJPTExFRCIsIlNFQ09ORF9GQUNUT1JfTElNSVRfRVhDRUVERUQiLCJURU5BTlRfSURfTUlTTUFUQ0giLCJUSU1FT1VUIiwiVE9LRU5fRVhQSVJFRCIsIlRPT19NQU5ZX0FUVEVNUFRTX1RSWV9MQVRFUiIsIlVOQVVUSE9SSVpFRF9ET01BSU4iLCJVTlNVUFBPUlRFRF9GSVJTVF9GQUNUT1IiLCJVTlNVUFBPUlRFRF9QRVJTSVNURU5DRSIsIlVOU1VQUE9SVEVEX1RFTkFOVF9PUEVSQVRJT04iLCJVTlZFUklGSUVEX0VNQUlMIiwiVVNFUl9DQU5DRUxMRUQiLCJVU0VSX0RFTEVURUQiLCJVU0VSX0RJU0FCTEVEIiwiVVNFUl9NSVNNQVRDSCIsIlVTRVJfU0lHTkVEX09VVCIsIldFQUtfUEFTU1dPUkQiLCJXRUJfU1RPUkFHRV9VTlNVUFBPUlRFRCIsIkFMUkVBRFlfSU5JVElBTElaRUQiLCJSRUNBUFRDSEFfTk9UX0VOQUJMRUQiLCJNSVNTSU5HX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfQUNUSU9OIiwiTUlTU0lOR19DTElFTlRfVFlQRSIsIk1JU1NJTkdfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRVFfVFlQRSIsImxvZ0NsaWVudCIsImltcG9ydF9sb2dnZXIiLCJMb2dnZXIiLCJfbG9nV2FybiIsIm1zZyIsImFyZ3MiLCJsb2dMZXZlbCIsIkxvZ0xldmVsIiwiV0FSTiIsIndhcm4iLCJpbXBvcnRfYXBwIiwiU0RLX1ZFUlNJT04iLCJfbG9nRXJyb3IiLCJFUlJPUiIsImVycm9yIiwiX2ZhaWwiLCJhdXRoT3JDb2RlIiwicmVzdCIsImNyZWF0ZUVycm9ySW50ZXJuYWwiLCJfY3JlYXRlRXJyb3IiLCJfZXJyb3JXaXRoQ3VzdG9tTWVzc2FnZSIsImF1dGgiLCJjb2RlIiwibWVzc2FnZSIsImVycm9yTWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiZmFjdG9yeSIsImNyZWF0ZSIsImFwcE5hbWUiLCJuYW1lIiwiX2Fzc2VydEluc3RhbmNlT2YiLCJvYmplY3QiLCJpbnN0YW5jZSIsImNvbnN0cnVjdG9ySW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsImZ1bGxQYXJhbXMiLCJzbGljZSIsIl9lcnJvckZhY3RvcnkiLCJfYXNzZXJ0IiwiYXNzZXJ0aW9uIiwiZGVidWdGYWlsIiwiZmFpbHVyZSIsIkVycm9yIiwiZGVidWdBc3NlcnQiLCJfZ2V0Q3VycmVudFVybCIsInNlbGYiLCJfYSIsImxvY2F0aW9uIiwiaHJlZiIsIl9pc0h0dHBPckh0dHBzIiwiX2dldEN1cnJlbnRTY2hlbWUiLCJwcm90b2NvbCIsIl9pc09ubGluZSIsIm5hdmlnYXRvciIsIm9uTGluZSIsImlzQnJvd3NlckV4dGVuc2lvbiIsIl9nZXRVc2VyTGFuZ3VhZ2UiLCJuYXZpZ2F0b3JMYW5ndWFnZSIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiRGVsYXkiLCJzaG9ydERlbGF5IiwibG9uZ0RlbGF5IiwiaXNNb2JpbGUiLCJpc01vYmlsZUNvcmRvdmEiLCJpc1JlYWN0TmF0aXZlIiwiZ2V0IiwiTWF0aCIsIm1pbiIsIl9lbXVsYXRvclVybCIsImNvbmZpZyIsInBhdGgiLCJlbXVsYXRvciIsInVybCIsInN0YXJ0c1dpdGgiLCJGZXRjaFByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsImZldGNoSW1wbCIsImhlYWRlcnNJbXBsIiwicmVzcG9uc2VJbXBsIiwiZmV0Y2giLCJnbG9iYWxUaGlzIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJyZXNwb25zZSIsIlJlc3BvbnNlIiwiU0VSVkVSX0VSUk9SX01BUCIsIkRFRkFVTFRfQVBJX1RJTUVPVVRfTVMiLCJfYWRkVGlkSWZOZWNlc3NhcnkiLCJyZXF1ZXN0IiwidGVuYW50SWQiLCJfcGVyZm9ybUFwaVJlcXVlc3QiLCJtZXRob2QiLCJjdXN0b21FcnJvck1hcCIsIl9wZXJmb3JtRmV0Y2hXaXRoRXJyb3JIYW5kbGluZyIsImJvZHkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJxdWVyeXN0cmluZyIsImtleSIsImFwaUtleSIsIl9nZXRBZGRpdGlvbmFsSGVhZGVycyIsImxhbmd1YWdlQ29kZSIsIl9nZXRGaW5hbFRhcmdldCIsImFwaUhvc3QiLCJyZWZlcnJlclBvbGljeSIsImZldGNoRm4iLCJfY2FuSW5pdEVtdWxhdG9yIiwibmV0d29ya1RpbWVvdXQiLCJOZXR3b3JrVGltZW91dCIsIlByb21pc2UiLCJyYWNlIiwicHJvbWlzZSIsImNsZWFyTmV0d29ya1RpbWVvdXQiLCJqc29uIiwiX21ha2VUYWdnZWRFcnJvciIsIm9rIiwiZXJyb3JNZXNzYWdlIiwic2VydmVyRXJyb3JDb2RlIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic3BsaXQiLCJhdXRoRXJyb3IiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJlIiwiRmlyZWJhc2VFcnJvciIsIlN0cmluZyIsIl9wZXJmb3JtU2lnbkluUmVxdWVzdCIsInNlcnZlclJlc3BvbnNlIiwiX3NlcnZlclJlc3BvbnNlIiwiaG9zdCIsImJhc2UiLCJhcGlTY2hlbWUiLCJfcGFyc2VFbmZvcmNlbWVudFN0YXRlIiwiZW5mb3JjZW1lbnRTdGF0ZVN0ciIsInRpbWVyIiwiXyIsInJlamVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJlcnJvclBhcmFtcyIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJjdXN0b21EYXRhIiwiX3Rva2VuUmVzcG9uc2UiLCJpc1YyIiwiZ3JlY2FwdGNoYSIsImdldFJlc3BvbnNlIiwiaXNFbnRlcnByaXNlIiwiZW50ZXJwcmlzZSIsIlJlY2FwdGNoYUNvbmZpZyIsInNpdGVLZXkiLCJyZWNhcHRjaGFFbmZvcmNlbWVudFN0YXRlIiwicmVjYXB0Y2hhS2V5IiwiZ2V0UHJvdmlkZXJFbmZvcmNlbWVudFN0YXRlIiwicHJvdmlkZXJTdHIiLCJsZW5ndGgiLCJwcm92aWRlciIsImVuZm9yY2VtZW50U3RhdGUiLCJpc1Byb3ZpZGVyRW5hYmxlZCIsImdldFJlY2FwdGNoYVBhcmFtcyIsInJlY2FwdGNoYVNpdGVLZXkiLCJnZXRSZWNhcHRjaGFDb25maWciLCJkZWxldGVBY2NvdW50IiwiZGVsZXRlTGlua2VkQWNjb3VudHMiLCJnZXRBY2NvdW50SW5mbyIsInV0Y1RpbWVzdGFtcFRvRGF0ZVN0cmluZyIsInV0Y1RpbWVzdGFtcCIsImRhdGUiLCJEYXRlIiwiTnVtYmVyIiwiaXNOYU4iLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJ1c2VyIiwiZm9yY2VSZWZyZXNoIiwiZ2V0TW9kdWxhckluc3RhbmNlIiwidXNlckludGVybmFsIiwidG9rZW4iLCJjbGFpbXMiLCJfcGFyc2VUb2tlbiIsImV4cCIsImF1dGhfdGltZSIsImlhdCIsImZpcmViYXNlIiwic2lnbkluUHJvdmlkZXIiLCJhdXRoVGltZSIsInNlY29uZHNTdHJpbmdUb01pbGxpc2Vjb25kcyIsImlzc3VlZEF0VGltZSIsImV4cGlyYXRpb25UaW1lIiwic2lnbkluU2Vjb25kRmFjdG9yIiwic2Vjb25kcyIsImFsZ29yaXRobSIsInBheWxvYWQiLCJzaWduYXR1cmUiLCJkZWNvZGVkIiwiYmFzZTY0RGVjb2RlIiwicGFyc2UiLCJ0b1N0cmluZyIsIl90b2tlbkV4cGlyZXNJbiIsInBhcnNlZFRva2VuIiwiX2xvZ291dElmSW52YWxpZGF0ZWQiLCJieXBhc3NBdXRoU3RhdGUiLCJpc1VzZXJJbnZhbGlkYXRlZCIsImN1cnJlbnRVc2VyIiwiUHJvYWN0aXZlUmVmcmVzaCIsImlzUnVubmluZyIsInRpbWVySWQiLCJlcnJvckJhY2tvZmYiLCJfc3RhcnQiLCJzY2hlZHVsZSIsIl9zdG9wIiwiZ2V0SW50ZXJ2YWwiLCJ3YXNFcnJvciIsImludGVydmFsIiwiZXhwVGltZSIsInN0c1Rva2VuTWFuYWdlciIsIm5vdyIsIm1heCIsIml0ZXJhdGlvbiIsIlVzZXJNZXRhZGF0YSIsImNyZWF0ZWRBdCIsImxhc3RMb2dpbkF0IiwiX2luaXRpYWxpemVUaW1lIiwibGFzdFNpZ25JblRpbWUiLCJjcmVhdGlvblRpbWUiLCJfY29weSIsIm1ldGFkYXRhIiwidG9KU09OIiwiX3JlbG9hZFdpdGhvdXRTYXZpbmciLCJpZFRva2VuIiwidXNlcnMiLCJjb3JlQWNjb3VudCIsIl9ub3RpZnlSZWxvYWRMaXN0ZW5lciIsIm5ld1Byb3ZpZGVyRGF0YSIsInByb3ZpZGVyVXNlckluZm8iLCJleHRyYWN0UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJEYXRhIiwibWVyZ2VQcm92aWRlckRhdGEiLCJvbGRJc0Fub255bW91cyIsImlzQW5vbnltb3VzIiwibmV3SXNBbm9ueW1vdXMiLCJwYXNzd29yZEhhc2giLCJ1cGRhdGVzIiwidWlkIiwibG9jYWxJZCIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJwaG90b1VybCIsImVtYWlsVmVyaWZpZWQiLCJfcGVyc2lzdFVzZXJJZkN1cnJlbnQiLCJfbm90aWZ5TGlzdGVuZXJzSWZDdXJyZW50Iiwib3JpZ2luYWwiLCJuZXdEYXRhIiwiZGVkdXBlZCIsImZpbHRlciIsIm8iLCJzb21lIiwibiIsInByb3ZpZGVySWQiLCJwcm92aWRlcnMiLCJtYXAiLCJpbXBvcnRfdHNsaWIiLCJfX3Jlc3QiLCJyYXdJZCIsInJlcXVlc3RTdHNUb2tlbiIsInJlZnJlc2hUb2tlbiIsInRva2VuQXBpSG9zdCIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlc0luIiwiZXhwaXJlc19pbiIsInJlZnJlc2hfdG9rZW4iLCJyZXZva2VUb2tlbiIsIlN0c1Rva2VuTWFuYWdlciIsImlzRXhwaXJlZCIsInVwZGF0ZUZyb21TZXJ2ZXJSZXNwb25zZSIsInVwZGF0ZVRva2Vuc0FuZEV4cGlyYXRpb24iLCJnZXRUb2tlbiIsInJlZnJlc2giLCJjbGVhclJlZnJlc2hUb2tlbiIsIm9sZFRva2VuIiwiZXhwaXJlc0luU2VjIiwiZnJvbUpTT04iLCJtYW5hZ2VyIiwiX2Fzc2lnbiIsIl9jbG9uZSIsIl9wZXJmb3JtUmVmcmVzaCIsImFzc2VydFN0cmluZ09yVW5kZWZpbmVkIiwiVXNlckltcGwiLCJvcHQiLCJwcm9hY3RpdmVSZWZyZXNoIiwicmVsb2FkVXNlckluZm8iLCJyZWxvYWRMaXN0ZW5lciIsInVzZXJJbmZvIiwibmV3VXNlciIsIl9vblJlbG9hZCIsImNhbGxiYWNrIiwiX3N0YXJ0UHJvYWN0aXZlUmVmcmVzaCIsIl9zdG9wUHJvYWN0aXZlUmVmcmVzaCIsIl91cGRhdGVUb2tlbnNJZk5lY2Vzc2FyeSIsInJlbG9hZDIiLCJ0b2tlbnNSZWZyZXNoZWQiLCJkZWxldGUiLCJfcmVkaXJlY3RFdmVudElkIiwiX2Zyb21KU09OIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJfZiIsIl9nIiwiX2giLCJwbGFpbk9iamVjdFRva2VuTWFuYWdlciIsIkFycmF5IiwiaXNBcnJheSIsIl9mcm9tSWRUb2tlblJlc3BvbnNlIiwiaWRUb2tlblJlc3BvbnNlIiwiaW5zdGFuY2VDYWNoZSIsIk1hcCIsIl9nZXRJbnN0YW5jZSIsImNscyIsIkZ1bmN0aW9uIiwic2V0IiwiSW5NZW1vcnlQZXJzaXN0ZW5jZSIsInR5cGUiLCJzdG9yYWdlIiwiX2lzQXZhaWxhYmxlIiwiX3NldCIsInZhbHVlIiwiX2dldCIsIl9yZW1vdmUiLCJfYWRkTGlzdGVuZXIiLCJfa2V5IiwiX2xpc3RlbmVyIiwiX3JlbW92ZUxpc3RlbmVyIiwiX3BlcnNpc3RlbmNlS2V5TmFtZSIsIlBlcnNpc3RlbmNlVXNlck1hbmFnZXIiLCJwZXJzaXN0ZW5jZSIsInVzZXJLZXkiLCJuYW1lMiIsImZ1bGxVc2VyS2V5IiwiZnVsbFBlcnNpc3RlbmNlS2V5IiwiYm91bmRFdmVudEhhbmRsZXIiLCJfb25TdG9yYWdlRXZlbnQiLCJiaW5kIiwic2V0Q3VycmVudFVzZXIiLCJnZXRDdXJyZW50VXNlciIsImJsb2IiLCJyZW1vdmVDdXJyZW50VXNlciIsInNhdmVQZXJzaXN0ZW5jZUZvclJlZGlyZWN0IiwibmV3UGVyc2lzdGVuY2UiLCJwZXJzaXN0ZW5jZUhpZXJhcmNoeSIsImF2YWlsYWJsZVBlcnNpc3RlbmNlcyIsImFsbCIsInNlbGVjdGVkUGVyc2lzdGVuY2UiLCJ1c2VyVG9NaWdyYXRlIiwibWlncmF0aW9uSGllcmFyY2h5IiwicCIsIl9zaG91bGRBbGxvd01pZ3JhdGlvbiIsIl9nZXRCcm93c2VyTmFtZSIsInVzZXJBZ2VudCIsInVhIiwiaW5jbHVkZXMiLCJfaXNJRU1vYmlsZSIsIl9pc0ZpcmVmb3giLCJfaXNCbGFja0JlcnJ5IiwiX2lzV2ViT1MiLCJfaXNTYWZhcmkiLCJfaXNDaHJvbWVJT1MiLCJfaXNBbmRyb2lkIiwicmUiLCJtYXRjaGVzIiwibWF0Y2giLCJnZXRVQSIsInRlc3QiLCJfaXNJT1MiLCJfaXNJT1M3T3I4IiwiX2lzSU9TU3RhbmRhbG9uZSIsIndpbmRvdyIsInN0YW5kYWxvbmUiLCJfaXNJRTEwIiwiaXNJRSIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiX2lzTW9iaWxlQnJvd3NlciIsIl9pc0lmcmFtZSIsInRvcCIsIl9nZXRDbGllbnRWZXJzaW9uIiwiY2xpZW50UGxhdGZvcm0iLCJmcmFtZXdvcmtzIiwicmVwb3J0ZWRQbGF0Zm9ybSIsInJlcG9ydGVkRnJhbWV3b3JrcyIsImpvaW4iLCJBdXRoTWlkZGxld2FyZVF1ZXVlIiwicXVldWUiLCJwdXNoQ2FsbGJhY2siLCJvbkFib3J0Iiwid3JhcHBlZENhbGxiYWNrIiwicmVzb2x2ZSIsInJlc3VsdCIsInB1c2giLCJpbmRleCIsInJ1bk1pZGRsZXdhcmUiLCJuZXh0VXNlciIsIm9uQWJvcnRTdGFjayIsImJlZm9yZVN0YXRlQ2FsbGJhY2siLCJyZXZlcnNlIiwib3JpZ2luYWxNZXNzYWdlIiwiX2dldFBhc3N3b3JkUG9saWN5IiwiTUlOSU1VTV9NSU5fUEFTU1dPUkRfTEVOR1RIIiwiUGFzc3dvcmRQb2xpY3lJbXBsIiwicmVzcG9uc2VPcHRpb25zIiwiY3VzdG9tU3RyZW5ndGhPcHRpb25zIiwibWluUGFzc3dvcmRMZW5ndGgiLCJtYXhQYXNzd29yZExlbmd0aCIsImNvbnRhaW5zTG93ZXJjYXNlQ2hhcmFjdGVyIiwiY29udGFpbnNMb3dlcmNhc2VMZXR0ZXIiLCJjb250YWluc1VwcGVyY2FzZUNoYXJhY3RlciIsImNvbnRhaW5zVXBwZXJjYXNlTGV0dGVyIiwiY29udGFpbnNOdW1lcmljQ2hhcmFjdGVyIiwiY29udGFpbnNOb25BbHBoYW51bWVyaWNDaGFyYWN0ZXIiLCJhbGxvd2VkTm9uQWxwaGFudW1lcmljQ2hhcmFjdGVycyIsImZvcmNlVXBncmFkZU9uU2lnbmluIiwic2NoZW1hVmVyc2lvbiIsInBhc3N3b3JkIiwic3RhdHVzIiwiaXNWYWxpZCIsInBhc3N3b3JkUG9saWN5IiwidmFsaWRhdGVQYXNzd29yZExlbmd0aE9wdGlvbnMiLCJ2YWxpZGF0ZVBhc3N3b3JkQ2hhcmFjdGVyT3B0aW9ucyIsIm1lZXRzTWluUGFzc3dvcmRMZW5ndGgiLCJtZWV0c01heFBhc3N3b3JkTGVuZ3RoIiwidXBkYXRlUGFzc3dvcmRDaGFyYWN0ZXJPcHRpb25zU3RhdHVzZXMiLCJwYXNzd29yZENoYXIiLCJpIiwiY2hhckF0IiwiQXV0aEltcGwiLCJhcHAiLCJoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIiLCJhcHBDaGVja1NlcnZpY2VQcm92aWRlciIsImVtdWxhdG9yQ29uZmlnIiwib3BlcmF0aW9ucyIsImF1dGhTdGF0ZVN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkVG9rZW5TdWJzY3JpcHRpb24iLCJiZWZvcmVTdGF0ZVF1ZXVlIiwicmVkaXJlY3RVc2VyIiwiaXNQcm9hY3RpdmVSZWZyZXNoRW5hYmxlZCIsIkVYUEVDVEVEX1BBU1NXT1JEX1BPTElDWV9TQ0hFTUFfVkVSU0lPTiIsIl9pc0luaXRpYWxpemVkIiwiX2RlbGV0ZWQiLCJfaW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiX3BvcHVwUmVkaXJlY3RSZXNvbHZlciIsIl9hZ2VudFJlY2FwdGNoYUNvbmZpZyIsIl90ZW5hbnRSZWNhcHRjaGFDb25maWdzIiwiX3Byb2plY3RQYXNzd29yZFBvbGljeSIsIl90ZW5hbnRQYXNzd29yZFBvbGljaWVzIiwibGFzdE5vdGlmaWVkVWlkIiwic2V0dGluZ3MiLCJhcHBWZXJpZmljYXRpb25EaXNhYmxlZEZvclRlc3RpbmciLCJjbGllbnRWZXJzaW9uIiwic2RrQ2xpZW50VmVyc2lvbiIsIl9pbml0aWFsaXplV2l0aFBlcnNpc3RlbmNlIiwicG9wdXBSZWRpcmVjdFJlc29sdmVyIiwicGVyc2lzdGVuY2VNYW5hZ2VyIiwiX3Nob3VsZEluaXRQcm9hY3RpdmVseSIsIl9pbml0aWFsaXplIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyIiwiYXNzZXJ0ZWRQZXJzaXN0ZW5jZSIsIl9jdXJyZW50VXNlciIsIl91cGRhdGVDdXJyZW50VXNlciIsInByZXZpb3VzbHlTdG9yZWRVc2VyIiwiZnV0dXJlQ3VycmVudFVzZXIiLCJuZWVkc1RvY2hlY2tNaWRkbGV3YXJlIiwiYXV0aERvbWFpbiIsImdldE9ySW5pdFJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwicmVkaXJlY3RVc2VyRXZlbnRJZCIsInN0b3JlZFVzZXJFdmVudElkIiwidHJ5UmVkaXJlY3RTaWduSW4iLCJkaXJlY3RseVNldEN1cnJlbnRVc2VyIiwiX292ZXJyaWRlUmVkaXJlY3RSZXN1bHQiLCJyZWxvYWRBbmRTZXRDdXJyZW50VXNlck9yQ2xlYXIiLCJyZWRpcmVjdFJlc29sdmVyIiwiX2NvbXBsZXRlUmVkaXJlY3RGbiIsIl9zZXRSZWRpcmVjdFVzZXIiLCJfZGVsZXRlIiwidXNlckV4dGVybiIsInNraXBCZWZvcmVTdGF0ZUNhbGxiYWNrcyIsIm5vdGlmeUF1dGhMaXN0ZW5lcnMiLCJyZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsIl9nZXRSZWNhcHRjaGFDb25maWciLCJfZ2V0UGFzc3dvcmRQb2xpY3lJbnRlcm5hbCIsIl91cGRhdGVQYXNzd29yZFBvbGljeSIsIl9nZXRQZXJzaXN0ZW5jZSIsIl91cGRhdGVFcnJvck1hcCIsIm5leHRPck9ic2VydmVyIiwiY29tcGxldGVkIiwicmVnaXN0ZXJTdGF0ZUxpc3RlbmVyIiwiYXV0aFN0YXRlUmVhZHkiLCJ1bnN1YnNjcmliZSIsInRva2VuVHlwZSIsInJlZGlyZWN0TWFuYWdlciIsInJlc29sdmVyIiwiX3JlZGlyZWN0UGVyc2lzdGVuY2UiLCJfcmVkaXJlY3RVc2VyRm9ySWQiLCJpZCIsIm5leHQiLCJjdXJyZW50VWlkIiwic3Vic2NyaXB0aW9uIiwiY2IiLCJpc1Vuc3Vic2NyaWJlZCIsInRoZW4iLCJhZGRPYnNlcnZlciIsImFjdGlvbiIsIl9sb2dGcmFtZXdvcmsiLCJmcmFtZXdvcmsiLCJzb3J0IiwiX2dldEZyYW1ld29ya3MiLCJvcHRpb25zIiwiYXBwSWQiLCJoZWFydGJlYXRzSGVhZGVyIiwiZ2V0SW1tZWRpYXRlIiwib3B0aW9uYWwiLCJnZXRIZWFydGJlYXRzSGVhZGVyIiwiYXBwQ2hlY2tUb2tlbiIsIl9nZXRBcHBDaGVja1Rva2VuIiwiYXBwQ2hlY2tUb2tlblJlc3VsdCIsIl9jYXN0QXV0aCIsIm9ic2VydmVyIiwiY3JlYXRlU3Vic2NyaWJlIiwiZXh0ZXJuYWxKU1Byb3ZpZGVyIiwibG9hZEpTIiwicmVjYXB0Y2hhVjJTY3JpcHQiLCJyZWNhcHRjaGFFbnRlcnByaXNlU2NyaXB0IiwiZ2FwaVNjcmlwdCIsIl9zZXRFeHRlcm5hbEpTUHJvdmlkZXIiLCJfbG9hZEpTIiwiX3JlY2FwdGNoYVYyU2NyaXB0VXJsIiwiX3JlY2FwdGNoYUVudGVycHJpc2VTY3JpcHRVcmwiLCJfZ2FwaVNjcmlwdFVybCIsIl9nZW5lcmF0ZUNhbGxiYWNrTmFtZSIsInByZWZpeCIsImZsb29yIiwicmFuZG9tIiwiUkVDQVBUQ0hBX0VOVEVSUFJJU0VfVkVSSUZJRVJfVFlQRSIsIkZBS0VfVE9LRU4iLCJSZWNhcHRjaGFFbnRlcnByaXNlVmVyaWZpZXIiLCJhdXRoRXh0ZXJuIiwidmVyaWZ5IiwicmV0cmlldmVTaXRlS2V5IiwiY2xpZW50VHlwZSIsInZlcnNpb24iLCJjYXRjaCIsInJldHJpZXZlUmVjYXB0Y2hhVG9rZW4iLCJyZWFkeSIsImV4ZWN1dGUiLCJpbmplY3RSZWNhcHRjaGFGaWVsZHMiLCJjYXB0Y2hhUmVzcCIsInZlcmlmaWVyIiwiY2FwdGNoYVJlc3BvbnNlIiwibmV3UmVxdWVzdCIsImhhbmRsZVJlY2FwdGNoYUZsb3ciLCJhdXRoSW5zdGFuY2UiLCJhY3Rpb25OYW1lIiwiYWN0aW9uTWV0aG9kIiwicmVxdWVzdFdpdGhSZWNhcHRjaGEiLCJjb25zb2xlIiwibG9nIiwiX2luaXRpYWxpemVSZWNhcHRjaGFDb25maWciLCJhdXRoSW50ZXJuYWwiLCJkZXBzIiwiX2dldFByb3ZpZGVyIiwiaXNJbml0aWFsaXplZCIsImF1dGgyIiwiaW5pdGlhbE9wdGlvbnMiLCJnZXRPcHRpb25zIiwiZGVlcEVxdWFsIiwiX2luaXRpYWxpemVBdXRoSW5zdGFuY2UiLCJoaWVyYXJjaHkiLCJkaXNhYmxlV2FybmluZ3MiLCJleHRyYWN0UHJvdG9jb2wiLCJwb3J0IiwiZXh0cmFjdEhvc3RBbmRQb3J0IiwicG9ydFN0ciIsImZyZWV6ZSIsImVtaXRFbXVsYXRvcldhcm5pbmciLCJwcm90b2NvbEVuZCIsImluZGV4T2YiLCJzdWJzdHIiLCJhdXRob3JpdHkiLCJleGVjIiwiaG9zdEFuZFBvcnQiLCJwb3AiLCJicmFja2V0ZWRJUHY2IiwicGFyc2VQb3J0IiwiYXR0YWNoQmFubmVyIiwiZWwiLCJjcmVhdGVFbGVtZW50Iiwic3R5Iiwic3R5bGUiLCJpbm5lclRleHQiLCJwb3NpdGlvbiIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJib3R0b20iLCJsZWZ0IiwibWFyZ2luIiwiekluZGV4IiwidGV4dEFsaWduIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJpbmZvIiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaWduSW5NZXRob2QiLCJfZ2V0SWRUb2tlblJlc3BvbnNlIiwiX2F1dGgiLCJfbGlua1RvSWRUb2tlbiIsIl9pZFRva2VuIiwiX2dldFJlYXV0aGVudGljYXRpb25SZXNvbHZlciIsInJlc2V0UGFzc3dvcmQiLCJ1cGRhdGVFbWFpbFBhc3N3b3JkIiwibGlua0VtYWlsUGFzc3dvcmQiLCJhcHBseUFjdGlvbkNvZGUkMSIsInNpZ25JbldpdGhQYXNzd29yZCIsInNlbmRPb2JDb2RlIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uJDEiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsJDEiLCJzZW5kU2lnbkluTGlua1RvRW1haWwkMSIsInZlcmlmeUFuZENoYW5nZUVtYWlsIiwic2lnbkluV2l0aEVtYWlsTGluayQxIiwic2lnbkluV2l0aEVtYWlsTGlua0ZvckxpbmtpbmciLCJfZW1haWwiLCJfcGFzc3dvcmQiLCJfdGVuYW50SWQiLCJfZnJvbUVtYWlsQW5kUGFzc3dvcmQiLCJfZnJvbUVtYWlsQW5kQ29kZSIsIm9vYkNvZGUiLCJvYmoiLCJyZXR1cm5TZWN1cmVUb2tlbiIsInNpZ25JbldpdGhJZHAiLCJJRFBfUkVRVUVTVF9VUkkkMSIsInBlbmRpbmdUb2tlbiIsIl9mcm9tUGFyYW1zIiwiY3JlZCIsIm5vbmNlIiwib2F1dGhUb2tlbiIsIm9hdXRoVG9rZW5TZWNyZXQiLCJzZWNyZXQiLCJidWlsZFJlcXVlc3QiLCJhdXRvQ3JlYXRlIiwicmVxdWVzdFVyaSIsInBvc3RCb2R5Iiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZSIsInNpZ25JbldpdGhQaG9uZU51bWJlciQxIiwibGlua1dpdGhQaG9uZU51bWJlciQxIiwidGVtcG9yYXJ5UHJvb2YiLCJWRVJJRllfUEhPTkVfTlVNQkVSX0ZPUl9FWElTVElOR19FUlJPUl9NQVBfIiwidmVyaWZ5UGhvbmVOdW1iZXJGb3JFeGlzdGluZyIsImFwaVJlcXVlc3QiLCJvcGVyYXRpb24iLCJfZnJvbVZlcmlmaWNhdGlvbiIsInZlcmlmaWNhdGlvbklkIiwidmVyaWZpY2F0aW9uQ29kZSIsIl9mcm9tVG9rZW5SZXNwb25zZSIsIl9tYWtlVmVyaWZpY2F0aW9uUmVxdWVzdCIsInNlc3Npb25JbmZvIiwicGFyc2VNb2RlIiwibW9kZSIsInBhcnNlRGVlcExpbmsiLCJsaW5rIiwicXVlcnlzdHJpbmdEZWNvZGUiLCJleHRyYWN0UXVlcnlzdHJpbmciLCJkb3VibGVEZWVwTGluayIsImlPU0RlZXBMaW5rIiwiaU9TRG91YmxlRGVlcExpbmsiLCJhY3Rpb25MaW5rIiwic2VhcmNoUGFyYW1zIiwiY29udGludWVVcmwiLCJwYXJzZUxpbmsiLCJQUk9WSURFUl9JRCIsImNyZWRlbnRpYWwiLCJjcmVkZW50aWFsV2l0aExpbmsiLCJlbWFpbExpbmsiLCJhY3Rpb25Db2RlVXJsIiwiRU1BSUxfUEFTU1dPUkRfU0lHTl9JTl9NRVRIT0QiLCJFTUFJTF9MSU5LX1NJR05fSU5fTUVUSE9EIiwiRmVkZXJhdGVkQXV0aFByb3ZpZGVyIiwiZGVmYXVsdExhbmd1YWdlQ29kZSIsImN1c3RvbVBhcmFtZXRlcnMiLCJzZXREZWZhdWx0TGFuZ3VhZ2UiLCJzZXRDdXN0b21QYXJhbWV0ZXJzIiwiY3VzdG9tT0F1dGhQYXJhbWV0ZXJzIiwiZ2V0Q3VzdG9tUGFyYW1ldGVycyIsIkJhc2VPQXV0aFByb3ZpZGVyIiwic2NvcGVzIiwiYWRkU2NvcGUiLCJzY29wZSIsImdldFNjb3BlcyIsImNyZWRlbnRpYWxGcm9tSlNPTiIsIl9jcmVkZW50aWFsIiwicmF3Tm9uY2UiLCJjcmVkZW50aWFsRnJvbVJlc3VsdCIsInVzZXJDcmVkZW50aWFsIiwib2F1dGhDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsImNyZWRlbnRpYWxGcm9tRXJyb3IiLCJ0b2tlblJlc3BvbnNlIiwib2F1dGhJZFRva2VuIiwib2F1dGhBY2Nlc3NUb2tlbiIsIkZBQ0VCT09LX1NJR05fSU5fTUVUSE9EIiwiY3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJHT09HTEVfU0lHTl9JTl9NRVRIT0QiLCJHSVRIVUJfU0lHTl9JTl9NRVRIT0QiLCJJRFBfUkVRVUVTVF9VUkkiLCJTQU1MQXV0aENyZWRlbnRpYWwiLCJfY3JlYXRlIiwiU0FNTF9QUk9WSURFUl9QUkVGSVgiLCJzYW1sQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJUV0lUVEVSX1NJR05fSU5fTUVUSE9EIiwic2lnblVwIiwiVXNlckNyZWRlbnRpYWxJbXBsIiwib3BlcmF0aW9uVHlwZSIsInByb3ZpZGVySWRGb3JSZXNwb25zZSIsInVzZXJDcmVkIiwiX2Zvck9wZXJhdGlvbiIsIk11bHRpRmFjdG9yRXJyb3IiLCJzZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsIl9mcm9tRXJyb3JBbmRPcGVyYXRpb24iLCJfcHJvY2Vzc0NyZWRlbnRpYWxTYXZpbmdNZmFDb250ZXh0SWZOZWNlc3NhcnkiLCJpZFRva2VuUHJvdmlkZXIiLCJwcm92aWRlckRhdGFBc05hbWVzIiwiU2V0IiwicGlkIiwiX2Fzc2VydExpbmtlZFN0YXR1cyIsImRlbGV0ZVByb3ZpZGVyIiwicHJvdmlkZXJzTGVmdCIsInBkIiwiaGFzIiwiX2xpbmskMSIsImV4cGVjdGVkIiwicHJvdmlkZXJJZHMiLCJfcmVhdXRoZW50aWNhdGUiLCJwYXJzZWQiLCJzdWIiLCJfc2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4kMSIsImN1c3RvbVRva2VuIiwiTXVsdGlGYWN0b3JJbmZvSW1wbCIsImZhY3RvcklkIiwibWZhRW5yb2xsbWVudElkIiwiZW5yb2xsbWVudFRpbWUiLCJlbnJvbGxlZEF0IiwiX2Zyb21TZXJ2ZXJSZXNwb25zZSIsImVucm9sbG1lbnQiLCJQaG9uZU11bHRpRmFjdG9ySW5mb0ltcGwiLCJUb3RwTXVsdGlGYWN0b3JJbmZvSW1wbCIsInBob25lSW5mbyIsIl9zZXRBY3Rpb25Db2RlU2V0dGluZ3NPblJlcXVlc3QiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJkeW5hbWljTGlua0RvbWFpbiIsImNhbkhhbmRsZUNvZGVJbkFwcCIsImhhbmRsZUNvZGVJbkFwcCIsImlPUyIsImJ1bmRsZUlkIiwiaU9TQnVuZGxlSWQiLCJhbmRyb2lkIiwicGFja2FnZU5hbWUiLCJhbmRyb2lkSW5zdGFsbEFwcCIsImluc3RhbGxBcHAiLCJhbmRyb2lkTWluaW11bVZlcnNpb25Db2RlIiwibWluaW11bVZlcnNpb24iLCJhbmRyb2lkUGFja2FnZU5hbWUiLCJyZWNhY2hlUGFzc3dvcmRQb2xpY3kiLCJyZXF1ZXN0VHlwZSIsIm5ld1Bhc3N3b3JkIiwiYXV0aE1vZHVsYXIiLCJuZXdFbWFpbCIsIm1mYUluZm8iLCJtdWx0aUZhY3RvckluZm8iLCJkYXRhIiwicHJldmlvdXNFbWFpbCIsInNpZ25VcFJlc3BvbnNlIiwic2V0QWN0aW9uQ29kZVNldHRpbmdzIiwicmVxdWVzdDIiLCJhY3Rpb25Db2RlU2V0dGluZ3MyIiwiY3JlYXRlQXV0aFVyaSIsImNvbnRpbnVlVXJpIiwiaWRlbnRpZmllciIsInNpZ25pbk1ldGhvZHMiLCJ1cGRhdGVQcm9maWxlJDEiLCJwcm9maWxlUmVxdWVzdCIsInBhc3N3b3JkUHJvdmlkZXIiLCJmaW5kIiwidXBkYXRlRW1haWxPclBhc3N3b3JkIiwicHJvZmlsZSIsInJhd1VzZXJJbmZvIiwiaXNOZXdVc2VyIiwia2luZCIsImZpbHRlcmVkUHJvdmlkZXJJZCIsIkdlbmVyaWNBZGRpdGlvbmFsVXNlckluZm8iLCJGYWNlYm9va0FkZGl0aW9uYWxVc2VySW5mbyIsIkdpdGh1YkFkZGl0aW9uYWxVc2VySW5mbyIsIkdvb2dsZUFkZGl0aW9uYWxVc2VySW5mbyIsIlR3aXR0ZXJBZGRpdGlvbmFsVXNlckluZm8iLCJzY3JlZW5OYW1lIiwiRmVkZXJhdGVkQWRkaXRpb25hbFVzZXJJbmZvV2l0aFVzZXJuYW1lIiwidXNlcm5hbWUiLCJsb2dpbiIsIk11bHRpRmFjdG9yU2Vzc2lvbkltcGwiLCJfZnJvbUlkdG9rZW4iLCJfZnJvbU1mYVBlbmRpbmdDcmVkZW50aWFsIiwibWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtdWx0aUZhY3RvclNlc3Npb24iLCJwZW5kaW5nQ3JlZGVudGlhbCIsIk11bHRpRmFjdG9yUmVzb2x2ZXJJbXBsIiwic2Vzc2lvbiIsImhpbnRzIiwic2lnbkluUmVzb2x2ZXIiLCJfZnJvbUVycm9yIiwibWZhUmVzcG9uc2UiLCJfcHJvY2VzcyIsInJlc29sdmVTaWduSW4iLCJhc3NlcnRpb25FeHRlcm4iLCJlcnJvckludGVybmFsIiwic3RhcnRFbnJvbGxQaG9uZU1mYSIsImZpbmFsaXplRW5yb2xsUGhvbmVNZmEiLCJzdGFydEVucm9sbFRvdHBNZmEiLCJmaW5hbGl6ZUVucm9sbFRvdHBNZmEiLCJ3aXRoZHJhd01mYSIsIk11bHRpRmFjdG9yVXNlckltcGwiLCJlbnJvbGxlZEZhY3RvcnMiLCJfZnJvbVVzZXIiLCJnZXRTZXNzaW9uIiwiZW5yb2xsIiwiZmluYWxpemVNZmFSZXNwb25zZSIsInVuZW5yb2xsIiwiaW5mb09yVWlkIiwibXVsdGlGYWN0b3JVc2VyQ2FjaGUiLCJXZWFrTWFwIiwidXNlck1vZHVsYXIiLCJTVE9SQUdFX0FWQUlMQUJMRV9LRVkiLCJCcm93c2VyUGVyc2lzdGVuY2VDbGFzcyIsInN0b3JhZ2VSZXRyaWV2ZXIiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImdldEl0ZW0iLCJfaWZyYW1lQ2Fubm90U3luY1dlYlN0b3JhZ2UiLCJfUE9MTElOR19JTlRFUlZBTF9NUyQxIiwiSUUxMF9MT0NBTF9TVE9SQUdFX1NZTkNfREVMQVkiLCJCcm93c2VyTG9jYWxQZXJzaXN0ZW5jZSIsImxvY2FsU3RvcmFnZSIsImV2ZW50IiwicG9sbCIsIm9uU3RvcmFnZUV2ZW50IiwibGlzdGVuZXJzIiwibG9jYWxDYWNoZSIsInBvbGxUaW1lciIsInNhZmFyaUxvY2FsU3RvcmFnZU5vdFN5bmNlZCIsImZhbGxiYWNrVG9Qb2xsaW5nIiwiZm9yQWxsQ2hhbmdlZEtleXMiLCJrZXlzIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImtleTIiLCJfb2xkVmFsdWUiLCJub3RpZnlMaXN0ZW5lcnMiLCJkZXRhY2hMaXN0ZW5lciIsInN0b3BQb2xsaW5nIiwic3RvcmVkVmFsdWUyIiwidHJpZ2dlckxpc3RlbmVycyIsInN0b3JlZFZhbHVlIiwibGlzdGVuZXIiLCJmcm9tIiwic3RhcnRQb2xsaW5nIiwic2V0SW50ZXJ2YWwiLCJTdG9yYWdlRXZlbnQiLCJjbGVhckludGVydmFsIiwiYXR0YWNoTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2l6ZSIsIkJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UiLCJzZXNzaW9uU3RvcmFnZSIsIl9hbGxTZXR0bGVkIiwicHJvbWlzZXMiLCJmdWxmaWxsZWQiLCJyZWFzb24iLCJSZWNlaXZlciIsImV2ZW50VGFyZ2V0IiwiaGFuZGxlcnNNYXAiLCJoYW5kbGVFdmVudCIsImV4aXN0aW5nSW5zdGFuY2UiLCJyZWNlaXZlcnMiLCJyZWNlaXZlciIsImlzTGlzdGVuaW5ndG8iLCJuZXdJbnN0YW5jZSIsIm1lc3NhZ2VFdmVudCIsImV2ZW50SWQiLCJldmVudFR5cGUiLCJoYW5kbGVycyIsInBvcnRzIiwicG9zdE1lc3NhZ2UiLCJoYW5kbGVyIiwib3JpZ2luIiwiX3N1YnNjcmliZSIsImV2ZW50SGFuZGxlciIsIl91bnN1YnNjcmliZSIsIl9nZW5lcmF0ZUV2ZW50SWQiLCJkaWdpdHMiLCJTZW5kZXIiLCJ0YXJnZXQiLCJyZW1vdmVNZXNzYWdlSGFuZGxlciIsIm1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJvbk1lc3NhZ2UiLCJjbG9zZSIsIl9zZW5kIiwidGltZW91dCIsIk1lc3NhZ2VDaGFubmVsIiwiY29tcGxldGlvblRpbWVyIiwic3RhcnQiLCJhY2tUaW1lciIsInBvcnQyIiwiZmluYWxseSIsIl93aW5kb3ciLCJfc2V0V2luZG93TG9jYXRpb24iLCJfaXNXb3JrZXIiLCJfZ2V0QWN0aXZlU2VydmljZVdvcmtlciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RyYXRpb24iLCJhY3RpdmUiLCJfZ2V0U2VydmljZVdvcmtlckNvbnRyb2xsZXIiLCJjb250cm9sbGVyIiwiX2dldFdvcmtlckdsb2JhbFNjb3BlIiwiREJfTkFNRSIsIkRCX1ZFUlNJT04iLCJEQl9PQkpFQ1RTVE9SRV9OQU1FIiwiREJfREFUQV9LRVlQQVRIIiwiREJQcm9taXNlIiwidG9Qcm9taXNlIiwiZ2V0T2JqZWN0U3RvcmUiLCJkYiIsImlzUmVhZFdyaXRlIiwidHJhbnNhY3Rpb24iLCJvYmplY3RTdG9yZSIsIl9kZWxldGVEYXRhYmFzZSIsImluZGV4ZWREQiIsImRlbGV0ZURhdGFiYXNlIiwiX29wZW5EYXRhYmFzZSIsIm9wZW4iLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJvYmplY3RTdG9yZU5hbWVzIiwiY29udGFpbnMiLCJfcHV0T2JqZWN0IiwicHV0IiwiZ2V0T2JqZWN0IiwiX2RlbGV0ZU9iamVjdCIsIl9QT0xMSU5HX0lOVEVSVkFMX01TIiwiX1RSQU5TQUNUSU9OX1JFVFJZX0NPVU5UIiwiSW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsInBlbmRpbmdXcml0ZXMiLCJzZW5kZXIiLCJzZXJ2aWNlV29ya2VyUmVjZWl2ZXJBdmFpbGFibGUiLCJhY3RpdmVTZXJ2aWNlV29ya2VyIiwiX3dvcmtlckluaXRpYWxpemF0aW9uUHJvbWlzZSIsImluaXRpYWxpemVTZXJ2aWNlV29ya2VyTWVzc2FnaW5nIiwiX29wZW5EYiIsIl93aXRoUmV0cmllcyIsIm9wIiwibnVtQXR0ZW1wdHMiLCJpbml0aWFsaXplUmVjZWl2ZXIiLCJpbml0aWFsaXplU2VuZGVyIiwiX29yaWdpbiIsIl9wb2xsIiwia2V5UHJvY2Vzc2VkIiwiX2RhdGEiLCJyZXN1bHRzIiwibm90aWZ5U2VydmljZVdvcmtlciIsIl93aXRoUGVuZGluZ1dyaXRlIiwid3JpdGUiLCJnZXRBbGxSZXF1ZXN0IiwiZ2V0QWxsIiwia2V5c0luUmVzdWx0IiwiZmJhc2Vfa2V5IiwibG9jYWxLZXkiLCJzdGFydFNpZ25JblBob25lTWZhIiwiZmluYWxpemVTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluVG90cE1mYSIsIl9TT0xWRV9USU1FX01TIiwiX0VYUElSQVRJT05fVElNRV9NUyIsIl9XSURHRVRfSURfU1RBUlQiLCJNb2NrUmVDYXB0Y2hhIiwiY291bnRlciIsIl93aWRnZXRzIiwicmVuZGVyIiwiY29udGFpbmVyIiwicGFyYW1ldGVycyIsIk1vY2tXaWRnZXQiLCJyZXNldCIsIm9wdFdpZGdldElkIiwiY29udGFpbmVyT3JJZCIsImRlbGV0ZWQiLCJyZXNwb25zZVRva2VuIiwiY2xpY2tIYW5kbGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpc1Zpc2libGUiLCJjaGVja0lmRGVsZXRlZCIsImdlbmVyYXRlUmFuZG9tQWxwaGFOdW1lcmljU3RyaW5nIiwiZXhwaXJlZENhbGxiYWNrIiwibGVuIiwiY2hhcnMiLCJhbGxvd2VkQ2hhcnMiLCJfSlNMT0FEX0NBTExCQUNLIiwiTkVUV09SS19USU1FT1VUX0RFTEFZIiwiUmVDYXB0Y2hhTG9hZGVySW1wbCIsImhvc3RMYW5ndWFnZSIsImxpYnJhcnlTZXBhcmF0ZWx5TG9hZGVkIiwibG9hZCIsImhsIiwiaXNIb3N0TGFuZ3VhZ2VWYWxpZCIsInNob3VsZFJlc29sdmVJbW1lZGlhdGVseSIsInJlY2FwdGNoYSIsIndpZGdldElkIiwib25sb2FkIiwiY2xlYXJlZE9uZUluc3RhbmNlIiwiTW9ja1JlQ2FwdGNoYUxvYWRlckltcGwiLCJSRUNBUFRDSEFfVkVSSUZJRVJfVFlQRSIsIkRFRkFVTFRfUEFSQU1TIiwidGhlbWUiLCJkZXN0cm95ZWQiLCJ0b2tlbkNoYW5nZUxpc3RlbmVycyIsInJlbmRlclByb21pc2UiLCJpc0ludmlzaWJsZSIsIm1ha2VUb2tlbkNhbGxiYWNrIiwiX3JlY2FwdGNoYUxvYWRlciIsInZhbGlkYXRlU3RhcnRpbmdTdGF0ZSIsImFzc2VydE5vdERlc3Ryb3llZCIsImdldEFzc2VydGVkUmVjYXB0Y2hhIiwidG9rZW5DaGFuZ2UiLCJtYWtlUmVuZGVyUHJvbWlzZSIsIl9yZXNldCIsImNsZWFyIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlQ2hpbGQiLCJzaXRla2V5IiwiaGFzQ2hpbGROb2RlcyIsImV4aXN0aW5nIiwiZ2xvYmFsRnVuYyIsImluaXQiLCJndWFyYW50ZWVkRW1wdHkiLCJkb21SZWFkeSIsIkNvbmZpcm1hdGlvblJlc3VsdEltcGwiLCJvbkNvbmZpcm1hdGlvbiIsImNvbmZpcm0iLCJhdXRoQ3JlZGVudGlhbCIsImFwcFZlcmlmaWVyIiwiX3ZlcmlmeVBob25lTnVtYmVyIiwicmVjYXB0Y2hhVG9rZW4iLCJwaG9uZUluZm9PcHRpb25zIiwicGhvbmVFbnJvbGxtZW50SW5mbyIsInBob25lU2Vzc2lvbkluZm8iLCJtdWx0aUZhY3RvckhpbnQiLCJtdWx0aUZhY3RvclVpZCIsInBob25lU2lnbkluSW5mbyIsInBob25lUmVzcG9uc2VJbmZvIiwidmVyaWZ5UGhvbmVOdW1iZXIiLCJwaG9uZU9wdGlvbnMiLCJhcHBsaWNhdGlvblZlcmlmaWVyIiwiUEhPTkVfU0lHTl9JTl9NRVRIT0QiLCJfd2l0aERlZmF1bHRSZXNvbHZlciIsInJlc29sdmVyT3ZlcnJpZGUiLCJJZHBDcmVkZW50aWFsIiwiX2J1aWxkSWRwUmVxdWVzdCIsInNlc3Npb25JZCIsInJldHVybklkcENyZWRlbnRpYWwiLCJfc2lnbkluIiwiX3JlYXV0aCIsIl9saW5rIiwiQWJzdHJhY3RQb3B1cFJlZGlyZWN0T3BlcmF0aW9uIiwicGVuZGluZ1Byb21pc2UiLCJldmVudE1hbmFnZXIiLCJvbkV4ZWN1dGlvbiIsInJlZ2lzdGVyQ29uc3VtZXIiLCJvbkF1dGhFdmVudCIsInVybFJlc3BvbnNlIiwiZ2V0SWRwVGFzayIsIm9uRXJyb3IiLCJ1bnJlZ2lzdGVyQW5kQ2xlYW5VcCIsInVucmVnaXN0ZXJDb25zdW1lciIsImNsZWFuVXAiLCJfUE9MTF9XSU5ET1dfQ0xPU0VfVElNRU9VVCIsInJlc29sdmVySW50ZXJuYWwiLCJQb3B1cE9wZXJhdGlvbiIsImV4ZWN1dGVOb3ROdWxsIiwiYXV0aFdpbmRvdyIsInBvbGxJZCIsImN1cnJlbnRQb3B1cEFjdGlvbiIsImNhbmNlbCIsIl9vcGVuUG9wdXAiLCJhc3NvY2lhdGVkRXZlbnQiLCJfb3JpZ2luVmFsaWRhdGlvbiIsIl9pc0lmcmFtZVdlYlN0b3JhZ2VTdXBwb3J0ZWQiLCJpc1N1cHBvcnRlZCIsInBvbGxVc2VyQ2FuY2VsbGF0aW9uIiwiY2xvc2VkIiwiUEVORElOR19SRURJUkVDVF9LRVkiLCJyZWRpcmVjdE91dGNvbWVNYXAiLCJSZWRpcmVjdEFjdGlvbiIsInJlYWR5T3V0Y29tZSIsImhhc1BlbmRpbmdSZWRpcmVjdCIsIl9nZXRBbmRDbGVhclBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsInBlbmRpbmdSZWRpcmVjdEtleSIsInJlc29sdmVyUGVyc2lzdGVuY2UiLCJfc2V0UGVuZGluZ1JlZGlyZWN0U3RhdHVzIiwiX2NsZWFyUmVkaXJlY3RPdXRjb21lcyIsIl9zaWduSW5XaXRoUmVkaXJlY3QiLCJfb3BlblJlZGlyZWN0IiwiX3JlYXV0aGVudGljYXRlV2l0aFJlZGlyZWN0IiwicHJlcGFyZVVzZXJGb3JSZWRpcmVjdCIsIl9saW5rV2l0aFJlZGlyZWN0IiwiX2dldFJlZGlyZWN0UmVzdWx0IiwicmVzb2x2ZXJFeHRlcm4iLCJFVkVOVF9EVVBMSUNBVElPTl9DQUNIRV9EVVJBVElPTl9NUyIsIkF1dGhFdmVudE1hbmFnZXIiLCJjYWNoZWRFdmVudFVpZHMiLCJjb25zdW1lcnMiLCJxdWV1ZWRSZWRpcmVjdEV2ZW50IiwiaGFzSGFuZGxlZFBvdGVudGlhbFJlZGlyZWN0IiwibGFzdFByb2Nlc3NlZEV2ZW50VGltZSIsImF1dGhFdmVudENvbnN1bWVyIiwiaXNFdmVudEZvckNvbnN1bWVyIiwic2VuZFRvQ29uc3VtZXIiLCJzYXZlRXZlbnRUb0NhY2hlIiwib25FdmVudCIsImhhc0V2ZW50QmVlbkhhbmRsZWQiLCJoYW5kbGVkIiwiY29uc3VtZXIiLCJpc1JlZGlyZWN0RXZlbnQiLCJpc051bGxSZWRpcmVjdEV2ZW50IiwiZXZlbnRJZE1hdGNoZXMiLCJldmVudFVpZCIsInYiLCJfZ2V0UHJvamVjdENvbmZpZyIsIklQX0FERFJFU1NfUkVHRVgiLCJIVFRQX1JFR0VYIiwiX3ZhbGlkYXRlT3JpZ2luIiwiYXV0aG9yaXplZERvbWFpbnMiLCJkb21haW4iLCJtYXRjaERvbWFpbiIsImN1cnJlbnRVcmwiLCJob3N0bmFtZSIsIlVSTCIsImNlVXJsIiwiZXNjYXBlZERvbWFpblBhdHRlcm4iLCJSZWdFeHAiLCJORVRXT1JLX1RJTUVPVVQiLCJyZXNldFVubG9hZGVkR2FwaU1vZHVsZXMiLCJiZWFjb24iLCJfX19qc2wiLCJIIiwiaGludCIsInIiLCJMIiwiQ1AiLCJsb2FkR2FwaSIsImxvYWRHYXBpSWZyYW1lIiwiZ2FwaSIsImlmcmFtZXMiLCJnZXRDb250ZXh0Iiwib250aW1lb3V0IiwiSWZyYW1lIiwiY2JOYW1lIiwiY2FjaGVkR0FwaUxvYWRlciIsIl9sb2FkR2FwaSIsIlBJTkdfVElNRU9VVCIsIklGUkFNRV9QQVRIIiwiRU1VTEFURURfSUZSQU1FX1BBVEgiLCJJRlJBTUVfQVRUUklCVVRFUyIsImhlaWdodCIsInRhYmluZGV4IiwiRUlEX0ZST01fQVBJSE9TVCIsImdldElmcmFtZVVybCIsImVpZCIsImZ3IiwiX29wZW5JZnJhbWUiLCJjb250ZXh0IiwiZ2FwaTIiLCJ3aGVyZSIsIm1lc3NhZ2VIYW5kbGVyc0ZpbHRlciIsIkNST1NTX09SSUdJTl9JRlJBTUVTX0ZJTFRFUiIsImF0dHJpYnV0ZXMiLCJkb250Y2xlYXIiLCJpZnJhbWUiLCJyZXN0eWxlIiwic2V0SGlkZU9uTGVhdmUiLCJuZXR3b3JrRXJyb3IiLCJuZXR3b3JrRXJyb3JUaW1lciIsImNsZWFyVGltZXJBbmRSZXNvbHZlIiwicGluZyIsIkJBU0VfUE9QVVBfT1BUSU9OUyIsInJlc2l6YWJsZSIsInN0YXR1c2JhciIsInRvb2xiYXIiLCJERUZBVUxUX1dJRFRIIiwiREVGQVVMVF9IRUlHSFQiLCJUQVJHRVRfQkxBTksiLCJGSVJFRk9YX0VNUFRZX1VSTCIsIkF1dGhQb3B1cCIsIndpbmRvdzIiLCJfb3BlbiIsInNjcmVlbiIsImF2YWlsSGVpZ2h0IiwiYXZhaWxXaWR0aCIsInNjcm9sbGJhcnMiLCJvcHRpb25zU3RyaW5nIiwiZW50cmllcyIsInJlZHVjZSIsImFjY3VtIiwib3BlbkFzTmV3V2luZG93SU9TIiwibmV3V2luIiwiZm9jdXMiLCJjbGljayIsImNyZWF0ZUV2ZW50IiwiaW5pdE1vdXNlRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiV0lER0VUX1BBVEgiLCJFTVVMQVRPUl9XSURHRVRfUEFUSCIsIkZJUkVCQVNFX0FQUF9DSEVDS19GUkFHTUVOVF9JRCIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9nZXRSZWRpcmVjdFVybCIsImF1dGhUeXBlIiwicmVkaXJlY3RVcmwiLCJhZGRpdGlvbmFsUGFyYW1zIiwiaXNFbXB0eSIsInRpZCIsInBhcmFtc0RpY3QiLCJhcHBDaGVja1Rva2VuRnJhZ21lbnQiLCJnZXRIYW5kbGVyQmFzZSIsIldFQl9TVE9SQUdFX1NVUFBPUlRfS0VZIiwiQnJvd3NlclBvcHVwUmVkaXJlY3RSZXNvbHZlciIsImV2ZW50TWFuYWdlcnMiLCJvcmlnaW5WYWxpZGF0aW9uUHJvbWlzZXMiLCJwcm9taXNlMiIsImluaXRBbmRHZXRNYW5hZ2VyIiwicmVnaXN0ZXIiLCJpZnJhbWVFdmVudCIsImF1dGhFdmVudCIsInNlbmQiLCJNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZmluYWxpemVFbnJvbGwiLCJfZmluYWxpemVTaWduSW4iLCJQaG9uZU11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tQ3JlZGVudGlhbCIsInBob25lVmVyaWZpY2F0aW9uSW5mbyIsIkZBQ1RPUl9JRCIsImFzc2VydGlvbkZvckVucm9sbG1lbnQiLCJvbmVUaW1lUGFzc3dvcmQiLCJUb3RwTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2Zyb21TZWNyZXQiLCJhc3NlcnRpb25Gb3JTaWduSW4iLCJlbnJvbGxtZW50SWQiLCJfZnJvbUVucm9sbG1lbnRJZCIsImdlbmVyYXRlU2VjcmV0IiwibWZhU2Vzc2lvbiIsInRvdHBFbnJvbGxtZW50SW5mbyIsIl9mcm9tU3RhcnRUb3RwTWZhRW5yb2xsbWVudFJlc3BvbnNlIiwib3RwIiwidG90cFZlcmlmaWNhdGlvbkluZm8iLCJfbWFrZVRvdHBWZXJpZmljYXRpb25JbmZvIiwic2VjcmV0S2V5IiwiaGFzaGluZ0FsZ29yaXRobSIsImNvZGVMZW5ndGgiLCJjb2RlSW50ZXJ2YWxTZWNvbmRzIiwiZW5yb2xsbWVudENvbXBsZXRpb25EZWFkbGluZSIsInRvdHBTZXNzaW9uSW5mbyIsInNoYXJlZFNlY3JldEtleSIsInZlcmlmaWNhdGlvbkNvZGVMZW5ndGgiLCJwZXJpb2RTZWMiLCJmaW5hbGl6ZUVucm9sbG1lbnRUaW1lIiwiZ2VuZXJhdGVRckNvZGVVcmwiLCJhY2NvdW50TmFtZSIsImlzc3VlciIsInVzZURlZmF1bHRzIiwiX2lzRW1wdHlTdHJpbmciLCJpbnB1dCIsIkF1dGhJbnRlcm9wIiwiaW50ZXJuYWxMaXN0ZW5lcnMiLCJnZXRVaWQiLCJhc3NlcnRBdXRoQ29uZmlndXJlZCIsImFkZEF1dGhUb2tlbkxpc3RlbmVyIiwidXBkYXRlUHJvYWN0aXZlUmVmcmVzaCIsInJlbW92ZUF1dGhUb2tlbkxpc3RlbmVyIiwiZ2V0VmVyc2lvbkZvclBsYXRmb3JtIiwicmVnaXN0ZXJBdXRoIiwiX3JlZ2lzdGVyQ29tcG9uZW50IiwiaW1wb3J0X2NvbXBvbmVudCIsIkNvbXBvbmVudCIsImdldFByb3ZpZGVyIiwic2V0SW5zdGFudGlhdGlvbk1vZGUiLCJzZXRJbnN0YW5jZUNyZWF0ZWRDYWxsYmFjayIsIl9pbnN0YW5jZUlkZW50aWZpZXIiLCJfaW5zdGFuY2UiLCJhdXRoSW50ZXJuYWxQcm92aWRlciIsInJlZ2lzdGVyVmVyc2lvbiIsIkRFRkFVTFRfSURfVE9LRU5fTUFYX0FHRSIsImF1dGhJZFRva2VuTWF4QWdlIiwiZ2V0RXhwZXJpbWVudGFsU2V0dGluZyIsImxhc3RQb3N0ZWRJZFRva2VuIiwibWludENvb2tpZUZhY3RvcnkiLCJpZFRva2VuUmVzdWx0IiwiaWRUb2tlbkFnZSIsImdldEFwcCIsImF1dGhUb2tlblN5bmNQYXRoIiwibWludENvb2tpZSIsImF1dGhFbXVsYXRvckhvc3QiLCJnZXREZWZhdWx0RW11bGF0b3JIb3N0IiwiZ2V0U2NyaXB0UGFyZW50RWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0QXR0cmlidXRlIiwib25lcnJvciIsImNoYXJzZXQiLCJpbXBvcnRfdXRpbDIiLCJyZXF1aXJlIiwiaW1wb3J0X2FwcDIiLCJpbXBvcnRfbG9nZ2VyMiIsImltcG9ydF90c2xpYjIiLCJpbXBvcnRfY29tcG9uZW50MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQywwQ0FBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLHlCQUFBLEVBQUFBLENBQUEsS0FBQUEseUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLHdCQUFBLEVB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LENBQU0sWUFBWSxHQUFHO0lBQzlELE1BQU1tN0IsVUFBQSxHQUFhTCxpQkFBQSxDQUFrQkksaUJBQWlCO0lBQ3REeCtDLHNCQUFBLENBQXVCbU4sSUFBQSxFQUFNc3hDLFVBQUEsRUFBWSxNQUN2Q0EsVUFBQSxDQUFXdHhDLElBQUEsQ0FBSzBMLFdBQVcsQ0FBQztJQUU5QmpYLGdCQUFBLENBQWlCdUwsSUFBQSxFQUFNNEosSUFBQSxJQUFRMG5DLFVBQUEsQ0FBVzFuQyxJQUFJLENBQUM7RUFDaEQ7RUFFRCxNQUFNMm5DLGdCQUFBLE9BQW1CdDVDLFdBQUEsQ0FBQXU1QyxzQkFBQSxFQUF1QixNQUFNO0VBQ3RELElBQUlELGdCQUFBLEVBQWtCO0lBQ3BCcCtDLG1CQUFBLENBQW9CNk0sSUFBQSxFQUFNLFVBQVV1eEMsZ0JBQUEsRUFBa0I7RUFDdkQ7RUFFRCxPQUFPdnhDLElBQUE7QUFDVDtBQUVBLFNBQVN5eEMsdUJBQUEsRUFBc0I7O0VBQzdCLFFBQU96L0IsRUFBQSxJQUFBdFEsRUFBQSxHQUFBbVYsUUFBQSxDQUFTNjZCLG9CQUFBLENBQXFCLE1BQU0sT0FBSSxRQUFBaHdDLEVBQUEsdUJBQUFBLEVBQUEsU0FBRSxRQUFBc1EsRUFBQSxjQUFBQSxFQUFBLEdBQUk2RSxRQUFBO0FBQ3ZEO0FBRUF5SixzQkFBQSxDQUF1QjtFQUNyQkosT0FBTzdjLEdBQUEsRUFBVztJQUVoQixPQUFPLElBQUl1QyxPQUFBLENBQVEsQ0FBQ2lTLE9BQUEsRUFBU3RRLE1BQUEsS0FBVTtNQUNyQyxNQUFNNGMsRUFBQSxHQUFLdE4sUUFBQSxDQUFTdU4sYUFBQSxDQUFjLFFBQVE7TUFDMUNELEVBQUEsQ0FBR3d0QixZQUFBLENBQWEsT0FBT3R1QyxHQUFHO01BQzFCOGdCLEVBQUEsQ0FBRythLE1BQUEsR0FBU3JuQixPQUFBO01BQ1pzTSxFQUFBLENBQUd5dEIsT0FBQSxHQUFVbHJDLENBQUEsSUFBSTtRQUNmLE1BQU1qSCxLQUFBLEdBQVFLLFlBQUEsQ0FBWTtRQUMxQkwsS0FBQSxDQUFNb0ksVUFBQSxHQUFhbkIsQ0FBQTtRQUNuQmEsTUFBQSxDQUFPOUgsS0FBSztNQUNkO01BQ0Ewa0IsRUFBQSxDQUFHaFIsSUFBQSxHQUFPO01BQ1ZnUixFQUFBLENBQUcwdEIsT0FBQSxHQUFVO01BQ2JKLHNCQUFBLENBQXNCLEVBQUdyc0IsV0FBQSxDQUFZakIsRUFBRTtJQUN6QyxDQUFDOztFQUdIOUQsVUFBQSxFQUFZO0VBQ1pGLGlCQUFBLEVBQW1CO0VBQ25CQyx5QkFBQSxFQUNFO0FBQ0g7QUFFRDh2QixZQUFBLENBQVk7OztBQ3pJWixJQUFBNEIsWUFBQSxHQUFPQyxPQUFBO0FBQ1AsSUFBQUMsV0FBQSxHQUFPRCxPQUFBO0FBQ1AsSUFBQUUsY0FBQSxHQUFPRixPQUFBO0FBQ1AsSUFBQUcsYUFBQSxHQUFPSCxPQUFBO0FBQ1AsSUFBQUksaUJBQUEsR0FBT0osT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FwcC9vdXQifQ==