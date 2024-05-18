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

// .beyond/uimport/@firebase/auth.1.6.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXV0aC4xLjYuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbW9kZWwvZW51bV9tYXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Fzc2VydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvY2F0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbmF2aWdhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZGVsYXkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2ZldGNoX3Byb3ZpZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9hY2NvdW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2lkX3Rva2VuX3Jlc3VsdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2ludmFsaWRhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Byb2FjdGl2ZV9yZWZyZXNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9tZXRhZGF0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlbG9hZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdG9rZW5fbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2luc3RhbnRpYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbl9tZW1vcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvcGVyc2lzdGVuY2VfdXNlcl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcGFzc3dvcmRfcG9saWN5L2dldF9wYXNzd29yZF9wb2xpY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9wYXNzd29yZF9wb2xpY3lfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9sb2FkX2pzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfZW50ZXJwcmlzZV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2luaXRpYWxpemUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9hdXRoX2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Ntcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hY3Rpb25fY29kZV91cmwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mZWRlcmF0ZWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mYWNlYm9vay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ29vZ2xlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9naXRodWIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvdHdpdHRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3NpZ25fdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX2NyZWRlbnRpYWxfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fub255bW91cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9lcnJvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Byb3ZpZGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2xpbmtfdW5saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVhdXRoZW50aWNhdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hY3Rpb25fY29kZV9zZXR0aW5ncy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jcmVhdGVfYXV0aF91cmkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9wcm9maWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWNjb3VudF9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWRkaXRpb25hbF91c2VyX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfc2Vzc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfdXNlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2xvY2FsX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2Uvc2Vzc2lvbl9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3Byb21pc2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcmVjZWl2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9ldmVudF9pZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9zZW5kZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvYXV0aF93aW5kb3cudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC93b3JrZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvaW5kZXhlZF9kYi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX21vY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9sb2FkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3Byb3ZpZGVycy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWJzdHJhY3RfcG9wdXBfcmVkaXJlY3Rfb3BlcmF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9ldmVudF9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcHJvamVjdF9jb25maWcvZ2V0X3Byb2plY3RfY29uZmlnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmFsaWRhdGVfb3JpZ2luLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9nYXBpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9pZnJhbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2hhbmRsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcG9wdXBfcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfYXNzZXJ0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21mYS9hc3NlcnRpb25zL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvYXNzZXJ0aW9ucy90b3RwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZmlyZWJhc2VfaW50ZXJuYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9yZWdpc3Rlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9kaXN0L2VzbTIwMTcvaW5kZXguanMiXSwibmFtZXMiOlsiYXV0aF8xXzZfMl9leHBvcnRzIiwiX19leHBvcnQiLCJBY3Rpb25Db2RlT3BlcmF0aW9uIiwiQWN0aW9uQ29kZVVSTCIsIkF1dGhDcmVkZW50aWFsIiwiQXV0aEVycm9yQ29kZXMiLCJBVVRIX0VSUk9SX0NPREVTX01BUF9ET19OT1RfVVNFX0lOVEVSTkFMTFkiLCJFbWFpbEF1dGhDcmVkZW50aWFsIiwiRW1haWxBdXRoUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsIkZhY3RvcklkIiwiR2l0aHViQXV0aFByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiT0F1dGhDcmVkZW50aWFsIiwiT0F1dGhQcm92aWRlciIsIk9wZXJhdGlvblR5cGUiLCJQaG9uZUF1dGhDcmVkZW50aWFsIiwiUGhvbmVBdXRoUHJvdmlkZXIiLCJQaG9uZU11bHRpRmFjdG9yR2VuZXJhdG9yIiwiUHJvdmlkZXJJZCIsIlJlY2FwdGNoYVZlcmlmaWVyIiwiU0FNTEF1dGhQcm92aWRlciIsIlNpZ25Jbk1ldGhvZCIsIlRvdHBNdWx0aUZhY3RvckdlbmVyYXRvciIsIlRvdHBTZWNyZXQiLCJUd2l0dGVyQXV0aFByb3ZpZGVyIiwiYXBwbHlBY3Rpb25Db2RlIiwiYmVmb3JlQXV0aFN0YXRlQ2hhbmdlZCIsImJyb3dzZXJMb2NhbFBlcnNpc3RlbmNlIiwiYnJvd3NlclBvcHVwUmVkaXJlY3RSZXNvbHZlciIsImJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UiLCJjaGVja0FjdGlvbkNvZGUiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImNvbm5lY3RBdXRoRW11bGF0b3IiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkZWJ1Z0Vycm9yTWFwIiwiZGVsZXRlVXNlciIsImZldGNoU2lnbkluTWV0aG9kc0ZvckVtYWlsIiwiZ2V0QWRkaXRpb25hbFVzZXJJbmZvIiwiZ2V0QXV0aCIsImdldElkVG9rZW4iLCJnZXRJZFRva2VuUmVzdWx0IiwiZ2V0TXVsdGlGYWN0b3JSZXNvbHZlciIsImdldFJlZGlyZWN0UmVzdWx0IiwiaW5NZW1vcnlQZXJzaXN0ZW5jZSIsImluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJpbml0aWFsaXplQXV0aCIsImluaXRpYWxpemVSZWNhcHRjaGFDb25maWciLCJpc1NpZ25JbldpdGhFbWFpbExpbmsiLCJsaW5rV2l0aENyZWRlbnRpYWwiLCJsaW5rV2l0aFBob25lTnVtYmVyIiwibGlua1dpdGhQb3B1cCIsImxpbmtXaXRoUmVkaXJlY3QiLCJtdWx0aUZhY3RvciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIm9uSWRUb2tlbkNoYW5nZWQiLCJwYXJzZUFjdGlvbkNvZGVVUkwiLCJwcm9kRXJyb3JNYXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsIiwicmVhdXRoZW50aWNhdGVXaXRoUGhvbmVOdW1iZXIiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQb3B1cCIsInJlYXV0aGVudGljYXRlV2l0aFJlZGlyZWN0IiwicmVsb2FkIiwicmV2b2tlQWNjZXNzVG9rZW4iLCJzZW5kRW1haWxWZXJpZmljYXRpb24iLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsIiwic2V0UGVyc2lzdGVuY2UiLCJzaWduSW5Bbm9ueW1vdXNseSIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxMaW5rIiwic2lnbkluV2l0aFBob25lTnVtYmVyIiwic2lnbkluV2l0aFBvcHVwIiwic2lnbkluV2l0aFJlZGlyZWN0Iiwic2lnbk91dCIsInVubGluayIsInVwZGF0ZUN1cnJlbnRVc2VyIiwidXBkYXRlRW1haWwiLCJ1cGRhdGVQYXNzd29yZCIsInVwZGF0ZVBob25lTnVtYmVyIiwidXBkYXRlUHJvZmlsZSIsInVzZURldmljZUxhbmd1YWdlIiwidmFsaWRhdGVQYXNzd29yZCIsInZlcmlmeUJlZm9yZVVwZGF0ZUVtYWlsIiwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUEhPTkUiLCJUT1RQIiwiRkFDRUJPT0siLCJHSVRIVUIiLCJHT09HTEUiLCJQQVNTV09SRCIsIlRXSVRURVIiLCJFTUFJTF9MSU5LIiwiRU1BSUxfUEFTU1dPUkQiLCJMSU5LIiwiUkVBVVRIRU5USUNBVEUiLCJTSUdOX0lOIiwiRU1BSUxfU0lHTklOIiwiUEFTU1dPUkRfUkVTRVQiLCJSRUNPVkVSX0VNQUlMIiwiUkVWRVJUX1NFQ09ORF9GQUNUT1JfQURESVRJT04iLCJWRVJJRllfQU5EX0NIQU5HRV9FTUFJTCIsIlZFUklGWV9FTUFJTCIsIl9kZWJ1Z0Vycm9yTWFwIiwiX3Byb2RFcnJvck1hcCIsIl9ERUZBVUxUX0FVVEhfRVJST1JfRkFDVE9SWSIsImltcG9ydF91dGlsIiwiRXJyb3JGYWN0b3J5IiwiQURNSU5fT05MWV9PUEVSQVRJT04iLCJBUkdVTUVOVF9FUlJPUiIsIkFQUF9OT1RfQVVUSE9SSVpFRCIsIkFQUF9OT1RfSU5TVEFMTEVEIiwiQ0FQVENIQV9DSEVDS19GQUlMRUQiLCJDT0RFX0VYUElSRUQiLCJDT1JET1ZBX05PVF9SRUFEWSIsIkNPUlNfVU5TVVBQT1JURUQiLCJDUkVERU5USUFMX0FMUkVBRFlfSU5fVVNFIiwiQ1JFREVOVElBTF9NSVNNQVRDSCIsIkNSRURFTlRJQUxfVE9PX09MRF9MT0dJTl9BR0FJTiIsIkRFUEVOREVOVF9TREtfSU5JVF9CRUZPUkVfQVVUSCIsIkRZTkFNSUNfTElOS19OT1RfQUNUSVZBVEVEIiwiRU1BSUxfQ0hBTkdFX05FRURTX1ZFUklGSUNBVElPTiIsIkVNQUlMX0VYSVNUUyIsIkVNVUxBVE9SX0NPTkZJR19GQUlMRUQiLCJFWFBJUkVEX09PQl9DT0RFIiwiRVhQSVJFRF9QT1BVUF9SRVFVRVNUIiwiSU5URVJOQUxfRVJST1IiLCJJTlZBTElEX0FQSV9LRVkiLCJJTlZBTElEX0FQUF9DUkVERU5USUFMIiwiSU5WQUxJRF9BUFBfSUQiLCJJTlZBTElEX0FVVEgiLCJJTlZBTElEX0FVVEhfRVZFTlQiLCJJTlZBTElEX0NFUlRfSEFTSCIsIklOVkFMSURfQ09ERSIsIklOVkFMSURfQ09OVElOVUVfVVJJIiwiSU5WQUxJRF9DT1JET1ZBX0NPTkZJR1VSQVRJT04iLCJJTlZBTElEX0NVU1RPTV9UT0tFTiIsIklOVkFMSURfRFlOQU1JQ19MSU5LX0RPTUFJTiIsIklOVkFMSURfRU1BSUwiLCJJTlZBTElEX0VNVUxBVE9SX1NDSEVNRSIsIklOVkFMSURfSURQX1JFU1BPTlNFIiwiSU5WQUxJRF9MT0dJTl9DUkVERU5USUFMUyIsIklOVkFMSURfTUVTU0FHRV9QQVlMT0FEIiwiSU5WQUxJRF9NRkFfU0VTU0lPTiIsIklOVkFMSURfT0FVVEhfQ0xJRU5UX0lEIiwiSU5WQUxJRF9PQVVUSF9QUk9WSURFUiIsIklOVkFMSURfT09CX0NPREUiLCJJTlZBTElEX09SSUdJTiIsIklOVkFMSURfUEFTU1dPUkQiLCJJTlZBTElEX1BFUlNJU1RFTkNFIiwiSU5WQUxJRF9QSE9ORV9OVU1CRVIiLCJJTlZBTElEX1BST1ZJREVSX0lEIiwiSU5WQUxJRF9SRUNJUElFTlRfRU1BSUwiLCJJTlZBTElEX1NFTkRFUiIsIklOVkFMSURfU0VTU0lPTl9JTkZPIiwiSU5WQUxJRF9URU5BTlRfSUQiLCJNRkFfSU5GT19OT1RfRk9VTkQiLCJNRkFfUkVRVUlSRUQiLCJNSVNTSU5HX0FORFJPSURfUEFDS0FHRV9OQU1FIiwiTUlTU0lOR19BUFBfQ1JFREVOVElBTCIsIk1JU1NJTkdfQVVUSF9ET01BSU4iLCJNSVNTSU5HX0NPREUiLCJNSVNTSU5HX0NPTlRJTlVFX1VSSSIsIk1JU1NJTkdfSUZSQU1FX1NUQVJUIiwiTUlTU0lOR19JT1NfQlVORExFX0lEIiwiTUlTU0lOR19PUl9JTlZBTElEX05PTkNFIiwiTUlTU0lOR19NRkFfSU5GTyIsIk1JU1NJTkdfTUZBX1NFU1NJT04iLCJNSVNTSU5HX1BIT05FX05VTUJFUiIsIk1JU1NJTkdfU0VTU0lPTl9JTkZPIiwiTU9EVUxFX0RFU1RST1lFRCIsIk5FRURfQ09ORklSTUFUSU9OIiwiTkVUV09SS19SRVFVRVNUX0ZBSUxFRCIsIk5VTExfVVNFUiIsIk5PX0FVVEhfRVZFTlQiLCJOT19TVUNIX1BST1ZJREVSIiwiT1BFUkFUSU9OX05PVF9BTExPV0VEIiwiT1BFUkFUSU9OX05PVF9TVVBQT1JURUQiLCJQT1BVUF9CTE9DS0VEIiwiUE9QVVBfQ0xPU0VEX0JZX1VTRVIiLCJQUk9WSURFUl9BTFJFQURZX0xJTktFRCIsIlFVT1RBX0VYQ0VFREVEIiwiUkVESVJFQ1RfQ0FOQ0VMTEVEX0JZX1VTRVIiLCJSRURJUkVDVF9PUEVSQVRJT05fUEVORElORyIsIlJFSkVDVEVEX0NSRURFTlRJQUwiLCJTRUNPTkRfRkFDVE9SX0FMUkVBRFlfRU5ST0xMRUQiLCJTRUNPTkRfRkFDVE9SX0xJTUlUX0VYQ0VFREVEIiwiVEVOQU5UX0lEX01JU01BVENIIiwiVElNRU9VVCIsIlRPS0VOX0VYUElSRUQiLCJUT09fTUFOWV9BVFRFTVBUU19UUllfTEFURVIiLCJVTkFVVEhPUklaRURfRE9NQUlOIiwiVU5TVVBQT1JURURfRklSU1RfRkFDVE9SIiwiVU5TVVBQT1JURURfUEVSU0lTVEVOQ0UiLCJVTlNVUFBPUlRFRF9URU5BTlRfT1BFUkFUSU9OIiwiVU5WRVJJRklFRF9FTUFJTCIsIlVTRVJfQ0FOQ0VMTEVEIiwiVVNFUl9ERUxFVEVEIiwiVVNFUl9ESVNBQkxFRCIsIlVTRVJfTUlTTUFUQ0giLCJVU0VSX1NJR05FRF9PVVQiLCJXRUFLX1BBU1NXT1JEIiwiV0VCX1NUT1JBR0VfVU5TVVBQT1JURUQiLCJBTFJFQURZX0lOSVRJQUxJWkVEIiwiUkVDQVBUQ0hBX05PVF9FTkFCTEVEIiwiTUlTU0lOR19SRUNBUFRDSEFfVE9LRU4iLCJJTlZBTElEX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX0FDVElPTiIsIk1JU1NJTkdfQ0xJRU5UX1RZUEUiLCJNSVNTSU5HX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRUNBUFRDSEFfVkVSU0lPTiIsIklOVkFMSURfUkVRX1RZUEUiLCJsb2dDbGllbnQiLCJpbXBvcnRfbG9nZ2VyIiwiTG9nZ2VyIiwiX2xvZ1dhcm4iLCJtc2ciLCJhcmdzIiwibG9nTGV2ZWwiLCJMb2dMZXZlbCIsIldBUk4iLCJ3YXJuIiwiaW1wb3J0X2FwcCIsIlNES19WRVJTSU9OIiwiX2xvZ0Vycm9yIiwiRVJST1IiLCJlcnJvciIsIl9mYWlsIiwiYXV0aE9yQ29kZSIsInJlc3QiLCJjcmVhdGVFcnJvckludGVybmFsIiwiX2NyZWF0ZUVycm9yIiwiX2Vycm9yV2l0aEN1c3RvbU1lc3NhZ2UiLCJhdXRoIiwiY29kZSIsIm1lc3NhZ2UiLCJlcnJvck1hcCIsIk9iamVjdCIsImFzc2lnbiIsImZhY3RvcnkiLCJjcmVhdGUiLCJhcHBOYW1lIiwibmFtZSIsIl9hc3NlcnRJbnN0YW5jZU9mIiwib2JqZWN0IiwiaW5zdGFuY2UiLCJjb25zdHJ1Y3Rvckluc3RhbmNlIiwiY29uc3RydWN0b3IiLCJmdWxsUGFyYW1zIiwic2xpY2UiLCJfZXJyb3JGYWN0b3J5IiwiX2Fzc2VydCIsImFzc2VydGlvbiIsImRlYnVnRmFpbCIsImZhaWx1cmUiLCJFcnJvciIsImRlYnVnQXNzZXJ0IiwiX2dldEN1cnJlbnRVcmwiLCJzZWxmIiwiX2EiLCJsb2NhdGlvbiIsImhyZWYiLCJfaXNIdHRwT3JIdHRwcyIsIl9nZXRDdXJyZW50U2NoZW1lIiwicHJvdG9jb2wiLCJfaXNPbmxpbmUiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJpc0Jyb3dzZXJFeHRlbnNpb24iLCJfZ2V0VXNlckxhbmd1YWdlIiwibmF2aWdhdG9yTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsIkRlbGF5Iiwic2hvcnREZWxheSIsImxvbmdEZWxheSIsImlzTW9iaWxlIiwiaXNNb2JpbGVDb3Jkb3ZhIiwiaXNSZWFjdE5hdGl2ZSIsImdldCIsIk1hdGgiLCJtaW4iLCJfZW11bGF0b3JVcmwiLCJjb25maWciLCJwYXRoIiwiZW11bGF0b3IiLCJ1cmwiLCJzdGFydHNXaXRoIiwiRmV0Y2hQcm92aWRlciIsImluaXRpYWxpemUiLCJmZXRjaEltcGwiLCJoZWFkZXJzSW1wbCIsInJlc3BvbnNlSW1wbCIsImZldGNoIiwiZ2xvYmFsVGhpcyIsImhlYWRlcnMiLCJIZWFkZXJzIiwicmVzcG9uc2UiLCJSZXNwb25zZSIsIlNFUlZFUl9FUlJPUl9NQVAiLCJERUZBVUxUX0FQSV9USU1FT1VUX01TIiwiX2FkZFRpZElmTmVjZXNzYXJ5IiwicmVxdWVzdCIsInRlbmFudElkIiwiX3BlcmZvcm1BcGlSZXF1ZXN0IiwibWV0aG9kIiwiY3VzdG9tRXJyb3JNYXAiLCJfcGVyZm9ybUZldGNoV2l0aEVycm9ySGFuZGxpbmciLCJib2R5IiwicGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwicXVlcnlzdHJpbmciLCJrZXkiLCJhcGlLZXkiLCJfZ2V0QWRkaXRpb25hbEhlYWRlcnMiLCJsYW5ndWFnZUNvZGUiLCJfZ2V0RmluYWxUYXJnZXQiLCJhcGlIb3N0IiwicmVmZXJyZXJQb2xpY3kiLCJmZXRjaEZuIiwiX2NhbkluaXRFbXVsYXRvciIsIm5ldHdvcmtUaW1lb3V0IiwiTmV0d29ya1RpbWVvdXQiLCJQcm9taXNlIiwicmFjZSIsInByb21pc2UiLCJjbGVhck5ldHdvcmtUaW1lb3V0IiwianNvbiIsIl9tYWtlVGFnZ2VkRXJyb3IiLCJvayIsImVycm9yTWVzc2FnZSIsInNlcnZlckVycm9yQ29kZSIsInNlcnZlckVycm9yTWVzc2FnZSIsInNwbGl0IiwiYXV0aEVycm9yIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiZSIsIkZpcmViYXNlRXJyb3IiLCJTdHJpbmciLCJfcGVyZm9ybVNpZ25JblJlcXVlc3QiLCJzZXJ2ZXJSZXNwb25zZSIsIl9zZXJ2ZXJSZXNwb25zZSIsImhvc3QiLCJiYXNlIiwiYXBpU2NoZW1lIiwiX3BhcnNlRW5mb3JjZW1lbnRTdGF0ZSIsImVuZm9yY2VtZW50U3RhdGVTdHIiLCJ0aW1lciIsIl8iLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZXJyb3JQYXJhbXMiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiY3VzdG9tRGF0YSIsIl90b2tlblJlc3BvbnNlIiwiaXNWMiIsImdyZWNhcHRjaGEiLCJnZXRSZXNwb25zZSIsImlzRW50ZXJwcmlzZSIsImVudGVycHJpc2UiLCJSZWNhcHRjaGFDb25maWciLCJzaXRlS2V5IiwicmVjYXB0Y2hhRW5mb3JjZW1lbnRTdGF0ZSIsInJlY2FwdGNoYUtleSIsImdldFByb3ZpZGVyRW5mb3JjZW1lbnRTdGF0ZSIsInByb3ZpZGVyU3RyIiwibGVuZ3RoIiwicHJvdmlkZXIiLCJlbmZvcmNlbWVudFN0YXRlIiwiaXNQcm92aWRlckVuYWJsZWQiLCJnZXRSZWNhcHRjaGFQYXJhbXMiLCJyZWNhcHRjaGFTaXRlS2V5IiwiZ2V0UmVjYXB0Y2hhQ29uZmlnIiwiZGVsZXRlQWNjb3VudCIsImRlbGV0ZUxpbmtlZEFjY291bnRzIiwiZ2V0QWNjb3VudEluZm8iLCJ1dGNUaW1lc3RhbXBUb0RhdGVTdHJpbmciLCJ1dGNUaW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsIk51bWJlciIsImlzTmFOIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwidXNlciIsImZvcmNlUmVmcmVzaCIsImdldE1vZHVsYXJJbnN0YW5jZSIsInVzZXJJbnRlcm5hbCIsInRva2VuIiwiY2xhaW1zIiwiX3BhcnNlVG9rZW4iLCJleHAiLCJhdXRoX3RpbWUiLCJpYXQiLCJmaXJlYmFzZSIsInNpZ25JblByb3ZpZGVyIiwiYXV0aFRpbWUiLCJzZWNvbmRzU3RyaW5nVG9NaWxsaXNlY29uZHMiLCJpc3N1ZWRBdFRpbWUiLCJleHBpcmF0aW9uVGltZSIsInNpZ25JblNlY29uZEZhY3RvciIsInNlY29uZHMiLCJhbGdvcml0aG0iLCJwYXlsb2FkIiwic2lnbmF0dXJlIiwiZGVjb2RlZCIsImJhc2U2NERlY29kZSIsInBhcnNlIiwidG9TdHJpbmciLCJfdG9rZW5FeHBpcmVzSW4iLCJwYXJzZWRUb2tlbiIsIl9sb2dvdXRJZkludmFsaWRhdGVkIiwiYnlwYXNzQXV0aFN0YXRlIiwiaXNVc2VySW52YWxpZGF0ZWQiLCJjdXJyZW50VXNlciIsIlByb2FjdGl2ZVJlZnJlc2giLCJpc1J1bm5pbmciLCJ0aW1lcklkIiwiZXJyb3JCYWNrb2ZmIiwiX3N0YXJ0Iiwic2NoZWR1bGUiLCJfc3RvcCIsImdldEludGVydmFsIiwid2FzRXJyb3IiLCJpbnRlcnZhbCIsImV4cFRpbWUiLCJzdHNUb2tlbk1hbmFnZXIiLCJub3ciLCJtYXgiLCJpdGVyYXRpb24iLCJVc2VyTWV0YWRhdGEiLCJjcmVhdGVkQXQiLCJsYXN0TG9naW5BdCIsIl9pbml0aWFsaXplVGltZSIsImxhc3RTaWduSW5UaW1lIiwiY3JlYXRpb25UaW1lIiwiX2NvcHkiLCJtZXRhZGF0YSIsInRvSlNPTiIsIl9yZWxvYWRXaXRob3V0U2F2aW5nIiwiaWRUb2tlbiIsInVzZXJzIiwiY29yZUFjY291bnQiLCJfbm90aWZ5UmVsb2FkTGlzdGVuZXIiLCJuZXdQcm92aWRlckRhdGEiLCJwcm92aWRlclVzZXJJbmZvIiwiZXh0cmFjdFByb3ZpZGVyRGF0YSIsInByb3ZpZGVyRGF0YSIsIm1lcmdlUHJvdmlkZXJEYXRhIiwib2xkSXNBbm9ueW1vdXMiLCJpc0Fub255bW91cyIsIm5ld0lzQW5vbnltb3VzIiwicGFzc3dvcmRIYXNoIiwidXBkYXRlcyIsInVpZCIsImxvY2FsSWQiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwicGhvdG9VcmwiLCJlbWFpbFZlcmlmaWVkIiwiX3BlcnNpc3RVc2VySWZDdXJyZW50IiwiX25vdGlmeUxpc3RlbmVyc0lmQ3VycmVudCIsIm9yaWdpbmFsIiwibmV3RGF0YSIsImRlZHVwZWQiLCJmaWx0ZXIiLCJvIiwic29tZSIsIm4iLCJwcm92aWRlcklkIiwicHJvdmlkZXJzIiwibWFwIiwiaW1wb3J0X3RzbGliIiwiX19yZXN0IiwicmF3SWQiLCJyZXF1ZXN0U3RzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJ0b2tlbkFwaUhvc3QiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNJbiIsImV4cGlyZXNfaW4iLCJyZWZyZXNoX3Rva2VuIiwicmV2b2tlVG9rZW4iLCJTdHNUb2tlbk1hbmFnZXIiLCJpc0V4cGlyZWQiLCJ1cGRhdGVGcm9tU2VydmVyUmVzcG9uc2UiLCJ1cGRhdGVUb2tlbnNBbmRFeHBpcmF0aW9uIiwiZ2V0VG9rZW4iLCJyZWZyZXNoIiwiY2xlYXJSZWZyZXNoVG9rZW4iLCJvbGRUb2tlbiIsImV4cGlyZXNJblNlYyIsImZyb21KU09OIiwibWFuYWdlciIsIl9hc3NpZ24iLCJfY2xvbmUiLCJfcGVyZm9ybVJlZnJlc2giLCJhc3NlcnRTdHJpbmdPclVuZGVmaW5lZCIsIlVzZXJJbXBsIiwib3B0IiwicHJvYWN0aXZlUmVmcmVzaCIsInJlbG9hZFVzZXJJbmZvIiwicmVsb2FkTGlzdGVuZXIiLCJ1c2VySW5mbyIsIm5ld1VzZXIiLCJfb25SZWxvYWQiLCJjYWxsYmFjayIsIl9zdGFydFByb2FjdGl2ZVJlZnJlc2giLCJfc3RvcFByb2FjdGl2ZVJlZnJlc2giLCJfdXBkYXRlVG9rZW5zSWZOZWNlc3NhcnkiLCJyZWxvYWQyIiwidG9rZW5zUmVmcmVzaGVkIiwiZGVsZXRlIiwiX3JlZGlyZWN0RXZlbnRJZCIsIl9mcm9tSlNPTiIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiX2YiLCJfZyIsIl9oIiwicGxhaW5PYmplY3RUb2tlbk1hbmFnZXIiLCJBcnJheSIsImlzQXJyYXkiLCJfZnJvbUlkVG9rZW5SZXNwb25zZSIsImlkVG9rZW5SZXNwb25zZSIsImluc3RhbmNlQ2FjaGUiLCJNYXAiLCJfZ2V0SW5zdGFuY2UiLCJjbHMiLCJGdW5jdGlvbiIsInNldCIsIkluTWVtb3J5UGVyc2lzdGVuY2UiLCJ0eXBlIiwic3RvcmFnZSIsIl9pc0F2YWlsYWJsZSIsIl9zZXQiLCJ2YWx1ZSIsIl9nZXQiLCJfcmVtb3ZlIiwiX2FkZExpc3RlbmVyIiwiX2tleSIsIl9saXN0ZW5lciIsIl9yZW1vdmVMaXN0ZW5lciIsIl9wZXJzaXN0ZW5jZUtleU5hbWUiLCJQZXJzaXN0ZW5jZVVzZXJNYW5hZ2VyIiwicGVyc2lzdGVuY2UiLCJ1c2VyS2V5IiwibmFtZTIiLCJmdWxsVXNlcktleSIsImZ1bGxQZXJzaXN0ZW5jZUtleSIsImJvdW5kRXZlbnRIYW5kbGVyIiwiX29uU3RvcmFnZUV2ZW50IiwiYmluZCIsInNldEN1cnJlbnRVc2VyIiwiZ2V0Q3VycmVudFVzZXIiLCJibG9iIiwicmVtb3ZlQ3VycmVudFVzZXIiLCJzYXZlUGVyc2lzdGVuY2VGb3JSZWRpcmVjdCIsIm5ld1BlcnNpc3RlbmNlIiwicGVyc2lzdGVuY2VIaWVyYXJjaHkiLCJhdmFpbGFibGVQZXJzaXN0ZW5jZXMiLCJhbGwiLCJzZWxlY3RlZFBlcnNpc3RlbmNlIiwidXNlclRvTWlncmF0ZSIsIm1pZ3JhdGlvbkhpZXJhcmNoeSIsInAiLCJfc2hvdWxkQWxsb3dNaWdyYXRpb24iLCJfZ2V0QnJvd3Nlck5hbWUiLCJ1c2VyQWdlbnQiLCJ1YSIsImluY2x1ZGVzIiwiX2lzSUVNb2JpbGUiLCJfaXNGaXJlZm94IiwiX2lzQmxhY2tCZXJyeSIsIl9pc1dlYk9TIiwiX2lzU2FmYXJpIiwiX2lzQ2hyb21lSU9TIiwiX2lzQW5kcm9pZCIsInJlIiwibWF0Y2hlcyIsIm1hdGNoIiwiZ2V0VUEiLCJ0ZXN0IiwiX2lzSU9TIiwiX2lzSU9TN09yOCIsIl9pc0lPU1N0YW5kYWxvbmUiLCJ3aW5kb3ciLCJzdGFuZGFsb25lIiwiX2lzSUUxMCIsImlzSUUiLCJkb2N1bWVudCIsImRvY3VtZW50TW9kZSIsIl9pc01vYmlsZUJyb3dzZXIiLCJfaXNJZnJhbWUiLCJ0b3AiLCJfZ2V0Q2xpZW50VmVyc2lvbiIsImNsaWVudFBsYXRmb3JtIiwiZnJhbWV3b3JrcyIsInJlcG9ydGVkUGxhdGZvcm0iLCJyZXBvcnRlZEZyYW1ld29ya3MiLCJqb2luIiwiQXV0aE1pZGRsZXdhcmVRdWV1ZSIsInF1ZXVlIiwicHVzaENhbGxiYWNrIiwib25BYm9ydCIsIndyYXBwZWRDYWxsYmFjayIsInJlc29sdmUiLCJyZXN1bHQiLCJwdXNoIiwiaW5kZXgiLCJydW5NaWRkbGV3YXJlIiwibmV4dFVzZXIiLCJvbkFib3J0U3RhY2siLCJiZWZvcmVTdGF0ZUNhbGxiYWNrIiwicmV2ZXJzZSIsIm9yaWdpbmFsTWVzc2FnZSIsIl9nZXRQYXNzd29yZFBvbGljeSIsIk1JTklNVU1fTUlOX1BBU1NXT1JEX0xFTkdUSCIsIlBhc3N3b3JkUG9saWN5SW1wbCIsInJlc3BvbnNlT3B0aW9ucyIsImN1c3RvbVN0cmVuZ3RoT3B0aW9ucyIsIm1pblBhc3N3b3JkTGVuZ3RoIiwibWF4UGFzc3dvcmRMZW5ndGgiLCJjb250YWluc0xvd2VyY2FzZUNoYXJhY3RlciIsImNvbnRhaW5zTG93ZXJjYXNlTGV0dGVyIiwiY29udGFpbnNVcHBlcmNhc2VDaGFyYWN0ZXIiLCJjb250YWluc1VwcGVyY2FzZUxldHRlciIsImNvbnRhaW5zTnVtZXJpY0NoYXJhY3RlciIsImNvbnRhaW5zTm9uQWxwaGFudW1lcmljQ2hhcmFjdGVyIiwiYWxsb3dlZE5vbkFscGhhbnVtZXJpY0NoYXJhY3RlcnMiLCJmb3JjZVVwZ3JhZGVPblNpZ25pbiIsInNjaGVtYVZlcnNpb24iLCJwYXNzd29yZCIsInN0YXR1cyIsImlzVmFsaWQiLCJwYXNzd29yZFBvbGljeSIsInZhbGlkYXRlUGFzc3dvcmRMZW5ndGhPcHRpb25zIiwidmFsaWRhdGVQYXNzd29yZENoYXJhY3Rlck9wdGlvbnMiLCJtZWV0c01pblBhc3N3b3JkTGVuZ3RoIiwibWVldHNNYXhQYXNzd29yZExlbmd0aCIsInVwZGF0ZVBhc3N3b3JkQ2hhcmFjdGVyT3B0aW9uc1N0YXR1c2VzIiwicGFzc3dvcmRDaGFyIiwiaSIsImNoYXJBdCIsIkF1dGhJbXBsIiwiYXBwIiwiaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyIiwiYXBwQ2hlY2tTZXJ2aWNlUHJvdmlkZXIiLCJlbXVsYXRvckNvbmZpZyIsIm9wZXJhdGlvbnMiLCJhdXRoU3RhdGVTdWJzY3JpcHRpb24iLCJTdWJzY3JpcHRpb24iLCJpZFRva2VuU3Vic2NyaXB0aW9uIiwiYmVmb3JlU3RhdGVRdWV1ZSIsInJlZGlyZWN0VXNlciIsImlzUHJvYWN0aXZlUmVmcmVzaEVuYWJsZWQiLCJFWFBFQ1RFRF9QQVNTV09SRF9QT0xJQ1lfU0NIRU1BX1ZFUlNJT04iLCJfaXNJbml0aWFsaXplZCIsIl9kZWxldGVkIiwiX2luaXRpYWxpemF0aW9uUHJvbWlzZSIsIl9wb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJfYWdlbnRSZWNhcHRjaGFDb25maWciLCJfdGVuYW50UmVjYXB0Y2hhQ29uZmlncyIsIl9wcm9qZWN0UGFzc3dvcmRQb2xpY3kiLCJfdGVuYW50UGFzc3dvcmRQb2xpY2llcyIsImxhc3ROb3RpZmllZFVpZCIsInNldHRpbmdzIiwiYXBwVmVyaWZpY2F0aW9uRGlzYWJsZWRGb3JUZXN0aW5nIiwiY2xpZW50VmVyc2lvbiIsInNka0NsaWVudFZlcnNpb24iLCJfaW5pdGlhbGl6ZVdpdGhQZXJzaXN0ZW5jZSIsInBvcHVwUmVkaXJlY3RSZXNvbHZlciIsInBlcnNpc3RlbmNlTWFuYWdlciIsIl9zaG91bGRJbml0UHJvYWN0aXZlbHkiLCJfaW5pdGlhbGl6ZSIsImluaXRpYWxpemVDdXJyZW50VXNlciIsImFzc2VydGVkUGVyc2lzdGVuY2UiLCJfY3VycmVudFVzZXIiLCJfdXBkYXRlQ3VycmVudFVzZXIiLCJwcmV2aW91c2x5U3RvcmVkVXNlciIsImZ1dHVyZUN1cnJlbnRVc2VyIiwibmVlZHNUb2NoZWNrTWlkZGxld2FyZSIsImF1dGhEb21haW4iLCJnZXRPckluaXRSZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsInJlZGlyZWN0VXNlckV2ZW50SWQiLCJzdG9yZWRVc2VyRXZlbnRJZCIsInRyeVJlZGlyZWN0U2lnbkluIiwiZGlyZWN0bHlTZXRDdXJyZW50VXNlciIsIl9vdmVycmlkZVJlZGlyZWN0UmVzdWx0IiwicmVsb2FkQW5kU2V0Q3VycmVudFVzZXJPckNsZWFyIiwicmVkaXJlY3RSZXNvbHZlciIsIl9jb21wbGV0ZVJlZGlyZWN0Rm4iLCJfc2V0UmVkaXJlY3RVc2VyIiwiX2RlbGV0ZSIsInVzZXJFeHRlcm4iLCJza2lwQmVmb3JlU3RhdGVDYWxsYmFja3MiLCJub3RpZnlBdXRoTGlzdGVuZXJzIiwicmVkaXJlY3RQZXJzaXN0ZW5jZU1hbmFnZXIiLCJfZ2V0UmVjYXB0Y2hhQ29uZmlnIiwiX2dldFBhc3N3b3JkUG9saWN5SW50ZXJuYWwiLCJfdXBkYXRlUGFzc3dvcmRQb2xpY3kiLCJfZ2V0UGVyc2lzdGVuY2UiLCJfdXBkYXRlRXJyb3JNYXAiLCJuZXh0T3JPYnNlcnZlciIsImNvbXBsZXRlZCIsInJlZ2lzdGVyU3RhdGVMaXN0ZW5lciIsImF1dGhTdGF0ZVJlYWR5IiwidW5zdWJzY3JpYmUiLCJ0b2tlblR5cGUiLCJyZWRpcmVjdE1hbmFnZXIiLCJyZXNvbHZlciIsIl9yZWRpcmVjdFBlcnNpc3RlbmNlIiwiX3JlZGlyZWN0VXNlckZvcklkIiwiaWQiLCJuZXh0IiwiY3VycmVudFVpZCIsInN1YnNjcmlwdGlvbiIsImNiIiwiaXNVbnN1YnNjcmliZWQiLCJ0aGVuIiwiYWRkT2JzZXJ2ZXIiLCJhY3Rpb24iLCJfbG9nRnJhbWV3b3JrIiwiZnJhbWV3b3JrIiwic29ydCIsIl9nZXRGcmFtZXdvcmtzIiwib3B0aW9ucyIsImFwcElkIiwiaGVhcnRiZWF0c0hlYWRlciIsImdldEltbWVkaWF0ZSIsIm9wdGlvbmFsIiwiZ2V0SGVhcnRiZWF0c0hlYWRlciIsImFwcENoZWNrVG9rZW4iLCJfZ2V0QXBwQ2hlY2tUb2tlbiIsImFwcENoZWNrVG9rZW5SZXN1bHQiLCJfY2FzdEF1dGgiLCJvYnNlcnZlciIsImNyZWF0ZVN1YnNjcmliZSIsImV4dGVybmFsSlNQcm92aWRlciIsImxvYWRKUyIsInJlY2FwdGNoYVYyU2NyaXB0IiwicmVjYXB0Y2hhRW50ZXJwcmlzZVNjcmlwdCIsImdhcGlTY3JpcHQiLCJfc2V0RXh0ZXJuYWxKU1Byb3ZpZGVyIiwiX2xvYWRKUyIsIl9yZWNhcHRjaGFWMlNjcmlwdFVybCIsIl9yZWNhcHRjaGFFbnRlcnByaXNlU2NyaXB0VXJsIiwiX2dhcGlTY3JpcHRVcmwiLCJfZ2VuZXJhdGVDYWxsYmFja05hbWUiLCJwcmVmaXgiLCJmbG9vciIsInJhbmRvbSIsIlJFQ0FQVENIQV9FTlRFUlBSSVNFX1ZFUklGSUVSX1RZUEUiLCJGQUtFX1RPS0VOIiwiUmVjYXB0Y2hhRW50ZXJwcmlzZVZlcmlmaWVyIiwiYXV0aEV4dGVybiIsInZlcmlmeSIsInJldHJpZXZlU2l0ZUtleSIsImNsaWVudFR5cGUiLCJ2ZXJzaW9uIiwiY2F0Y2giLCJyZXRyaWV2ZVJlY2FwdGNoYVRva2VuIiwicmVhZHkiLCJleGVjdXRlIiwiaW5qZWN0UmVjYXB0Y2hhRmllbGRzIiwiY2FwdGNoYVJlc3AiLCJ2ZXJpZmllciIsImNhcHRjaGFSZXNwb25zZSIsIm5ld1JlcXVlc3QiLCJoYW5kbGVSZWNhcHRjaGFGbG93IiwiYXV0aEluc3RhbmNlIiwiYWN0aW9uTmFtZSIsImFjdGlvbk1ldGhvZCIsInJlcXVlc3RXaXRoUmVjYXB0Y2hhIiwiY29uc29sZSIsImxvZyIsIl9pbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiYXV0aEludGVybmFsIiwiZGVwcyIsIl9nZXRQcm92aWRlciIsImlzSW5pdGlhbGl6ZWQiLCJhdXRoMiIsImluaXRpYWxPcHRpb25zIiwiZ2V0T3B0aW9ucyIsImRlZXBFcXVhbCIsIl9pbml0aWFsaXplQXV0aEluc3RhbmNlIiwiaGllcmFyY2h5IiwiZGlzYWJsZVdhcm5pbmdzIiwiZXh0cmFjdFByb3RvY29sIiwicG9ydCIsImV4dHJhY3RIb3N0QW5kUG9ydCIsInBvcnRTdHIiLCJmcmVlemUiLCJlbWl0RW11bGF0b3JXYXJuaW5nIiwicHJvdG9jb2xFbmQiLCJpbmRleE9mIiwic3Vic3RyIiwiYXV0aG9yaXR5IiwiZXhlYyIsImhvc3RBbmRQb3J0IiwicG9wIiwiYnJhY2tldGVkSVB2NiIsInBhcnNlUG9ydCIsImF0dGFjaEJhbm5lciIsImVsIiwiY3JlYXRlRWxlbWVudCIsInN0eSIsInN0eWxlIiwiaW5uZXJUZXh0IiwicG9zaXRpb24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImNvbG9yIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbiIsInpJbmRleCIsInRleHRBbGlnbiIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiaW5mbyIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2lnbkluTWV0aG9kIiwiX2dldElkVG9rZW5SZXNwb25zZSIsIl9hdXRoIiwiX2xpbmtUb0lkVG9rZW4iLCJfaWRUb2tlbiIsIl9nZXRSZWF1dGhlbnRpY2F0aW9uUmVzb2x2ZXIiLCJyZXNldFBhc3N3b3JkIiwidXBkYXRlRW1haWxQYXNzd29yZCIsImxpbmtFbWFpbFBhc3N3b3JkIiwiYXBwbHlBY3Rpb25Db2RlJDEiLCJzaWduSW5XaXRoUGFzc3dvcmQiLCJzZW5kT29iQ29kZSIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiQxIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCQxIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsJDEiLCJ2ZXJpZnlBbmRDaGFuZ2VFbWFpbCIsInNpZ25JbldpdGhFbWFpbExpbmskMSIsInNpZ25JbldpdGhFbWFpbExpbmtGb3JMaW5raW5nIiwiX2VtYWlsIiwiX3Bhc3N3b3JkIiwiX3RlbmFudElkIiwiX2Zyb21FbWFpbEFuZFBhc3N3b3JkIiwiX2Zyb21FbWFpbEFuZENvZGUiLCJvb2JDb2RlIiwib2JqIiwicmV0dXJuU2VjdXJlVG9rZW4iLCJzaWduSW5XaXRoSWRwIiwiSURQX1JFUVVFU1RfVVJJJDEiLCJwZW5kaW5nVG9rZW4iLCJfZnJvbVBhcmFtcyIsImNyZWQiLCJub25jZSIsIm9hdXRoVG9rZW4iLCJvYXV0aFRva2VuU2VjcmV0Iiwic2VjcmV0IiwiYnVpbGRSZXF1ZXN0IiwiYXV0b0NyZWF0ZSIsInJlcXVlc3RVcmkiLCJwb3N0Qm9keSIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGUiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIkMSIsImxpbmtXaXRoUGhvbmVOdW1iZXIkMSIsInRlbXBvcmFyeVByb29mIiwiVkVSSUZZX1BIT05FX05VTUJFUl9GT1JfRVhJU1RJTkdfRVJST1JfTUFQXyIsInZlcmlmeVBob25lTnVtYmVyRm9yRXhpc3RpbmciLCJhcGlSZXF1ZXN0Iiwib3BlcmF0aW9uIiwiX2Zyb21WZXJpZmljYXRpb24iLCJ2ZXJpZmljYXRpb25JZCIsInZlcmlmaWNhdGlvbkNvZGUiLCJfZnJvbVRva2VuUmVzcG9uc2UiLCJfbWFrZVZlcmlmaWNhdGlvblJlcXVlc3QiLCJzZXNzaW9uSW5mbyIsInBhcnNlTW9kZSIsIm1vZGUiLCJwYXJzZURlZXBMaW5rIiwibGluayIsInF1ZXJ5c3RyaW5nRGVjb2RlIiwiZXh0cmFjdFF1ZXJ5c3RyaW5nIiwiZG91YmxlRGVlcExpbmsiLCJpT1NEZWVwTGluayIsImlPU0RvdWJsZURlZXBMaW5rIiwiYWN0aW9uTGluayIsInNlYXJjaFBhcmFtcyIsImNvbnRpbnVlVXJsIiwicGFyc2VMaW5rIiwiUFJPVklERVJfSUQiLCJjcmVkZW50aWFsIiwiY3JlZGVudGlhbFdpdGhMaW5rIiwiZW1haWxMaW5rIiwiYWN0aW9uQ29kZVVybCIsIkVNQUlMX1BBU1NXT1JEX1NJR05fSU5fTUVUSE9EIiwiRU1BSUxfTElOS19TSUdOX0lOX01FVEhPRCIsIkZlZGVyYXRlZEF1dGhQcm92aWRlciIsImRlZmF1bHRMYW5ndWFnZUNvZGUiLCJjdXN0b21QYXJhbWV0ZXJzIiwic2V0RGVmYXVsdExhbmd1YWdlIiwic2V0Q3VzdG9tUGFyYW1ldGVycyIsImN1c3RvbU9BdXRoUGFyYW1ldGVycyIsImdldEN1c3RvbVBhcmFtZXRlcnMiLCJCYXNlT0F1dGhQcm92aWRlciIsInNjb3BlcyIsImFkZFNjb3BlIiwic2NvcGUiLCJnZXRTY29wZXMiLCJjcmVkZW50aWFsRnJvbUpTT04iLCJfY3JlZGVudGlhbCIsInJhd05vbmNlIiwiY3JlZGVudGlhbEZyb21SZXN1bHQiLCJ1c2VyQ3JlZGVudGlhbCIsIm9hdXRoQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJjcmVkZW50aWFsRnJvbUVycm9yIiwidG9rZW5SZXNwb25zZSIsIm9hdXRoSWRUb2tlbiIsIm9hdXRoQWNjZXNzVG9rZW4iLCJGQUNFQk9PS19TSUdOX0lOX01FVEhPRCIsImNyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiR09PR0xFX1NJR05fSU5fTUVUSE9EIiwiR0lUSFVCX1NJR05fSU5fTUVUSE9EIiwiSURQX1JFUVVFU1RfVVJJIiwiU0FNTEF1dGhDcmVkZW50aWFsIiwiX2NyZWF0ZSIsIlNBTUxfUFJPVklERVJfUFJFRklYIiwic2FtbENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiVFdJVFRFUl9TSUdOX0lOX01FVEhPRCIsInNpZ25VcCIsIlVzZXJDcmVkZW50aWFsSW1wbCIsIm9wZXJhdGlvblR5cGUiLCJwcm92aWRlcklkRm9yUmVzcG9uc2UiLCJ1c2VyQ3JlZCIsIl9mb3JPcGVyYXRpb24iLCJNdWx0aUZhY3RvckVycm9yIiwic2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJfZnJvbUVycm9yQW5kT3BlcmF0aW9uIiwiX3Byb2Nlc3NDcmVkZW50aWFsU2F2aW5nTWZhQ29udGV4dElmTmVjZXNzYXJ5IiwiaWRUb2tlblByb3ZpZGVyIiwicHJvdmlkZXJEYXRhQXNOYW1lcyIsIlNldCIsInBpZCIsIl9hc3NlcnRMaW5rZWRTdGF0dXMiLCJkZWxldGVQcm92aWRlciIsInByb3ZpZGVyc0xlZnQiLCJwZCIsImhhcyIsIl9saW5rJDEiLCJleHBlY3RlZCIsInByb3ZpZGVySWRzIiwiX3JlYXV0aGVudGljYXRlIiwicGFyc2VkIiwic3ViIiwiX3NpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuJDEiLCJjdXN0b21Ub2tlbiIsIk11bHRpRmFjdG9ySW5mb0ltcGwiLCJmYWN0b3JJZCIsIm1mYUVucm9sbG1lbnRJZCIsImVucm9sbG1lbnRUaW1lIiwiZW5yb2xsZWRBdCIsIl9mcm9tU2VydmVyUmVzcG9uc2UiLCJlbnJvbGxtZW50IiwiUGhvbmVNdWx0aUZhY3RvckluZm9JbXBsIiwiVG90cE11bHRpRmFjdG9ySW5mb0ltcGwiLCJwaG9uZUluZm8iLCJfc2V0QWN0aW9uQ29kZVNldHRpbmdzT25SZXF1ZXN0IiwiYWN0aW9uQ29kZVNldHRpbmdzIiwiZHluYW1pY0xpbmtEb21haW4iLCJjYW5IYW5kbGVDb2RlSW5BcHAiLCJoYW5kbGVDb2RlSW5BcHAiLCJpT1MiLCJidW5kbGVJZCIsImlPU0J1bmRsZUlkIiwiYW5kcm9pZCIsInBhY2thZ2VOYW1lIiwiYW5kcm9pZEluc3RhbGxBcHAiLCJpbnN0YWxsQXBwIiwiYW5kcm9pZE1pbmltdW1WZXJzaW9uQ29kZSIsIm1pbmltdW1WZXJzaW9uIiwiYW5kcm9pZFBhY2thZ2VOYW1lIiwicmVjYWNoZVBhc3N3b3JkUG9saWN5IiwicmVxdWVzdFR5cGUiLCJuZXdQYXNzd29yZCIsImF1dGhNb2R1bGFyIiwibmV3RW1haWwiLCJtZmFJbmZvIiwibXVsdGlGYWN0b3JJbmZvIiwiZGF0YSIsInByZXZpb3VzRW1haWwiLCJzaWduVXBSZXNwb25zZSIsInNldEFjdGlvbkNvZGVTZXR0aW5ncyIsInJlcXVlc3QyIiwiYWN0aW9uQ29kZVNldHRpbmdzMiIsImNyZWF0ZUF1dGhVcmkiLCJjb250aW51ZVVyaSIsImlkZW50aWZpZXIiLCJzaWduaW5NZXRob2RzIiwidXBkYXRlUHJvZmlsZSQxIiwicHJvZmlsZVJlcXVlc3QiLCJwYXNzd29yZFByb3ZpZGVyIiwiZmluZCIsInVwZGF0ZUVtYWlsT3JQYXNzd29yZCIsInByb2ZpbGUiLCJyYXdVc2VySW5mbyIsImlzTmV3VXNlciIsImtpbmQiLCJmaWx0ZXJlZFByb3ZpZGVySWQiLCJHZW5lcmljQWRkaXRpb25hbFVzZXJJbmZvIiwiRmFjZWJvb2tBZGRpdGlvbmFsVXNlckluZm8iLCJHaXRodWJBZGRpdGlvbmFsVXNlckluZm8iLCJHb29nbGVBZGRpdGlvbmFsVXNlckluZm8iLCJUd2l0dGVyQWRkaXRpb25hbFVzZXJJbmZvIiwic2NyZWVuTmFtZSIsIkZlZGVyYXRlZEFkZGl0aW9uYWxVc2VySW5mb1dpdGhVc2VybmFtZSIsInVzZXJuYW1lIiwibG9naW4iLCJNdWx0aUZhY3RvclNlc3Npb25JbXBsIiwiX2Zyb21JZHRva2VuIiwiX2Zyb21NZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm1mYVBlbmRpbmdDcmVkZW50aWFsIiwibXVsdGlGYWN0b3JTZXNzaW9uIiwicGVuZGluZ0NyZWRlbnRpYWwiLCJNdWx0aUZhY3RvclJlc29sdmVySW1wbCIsInNlc3Npb24iLCJoaW50cyIsInNpZ25JblJlc29sdmVyIiwiX2Zyb21FcnJvciIsIm1mYVJlc3BvbnNlIiwiX3Byb2Nlc3MiLCJyZXNvbHZlU2lnbkluIiwiYXNzZXJ0aW9uRXh0ZXJuIiwiZXJyb3JJbnRlcm5hbCIsInN0YXJ0RW5yb2xsUGhvbmVNZmEiLCJmaW5hbGl6ZUVucm9sbFBob25lTWZhIiwic3RhcnRFbnJvbGxUb3RwTWZhIiwiZmluYWxpemVFbnJvbGxUb3RwTWZhIiwid2l0aGRyYXdNZmEiLCJNdWx0aUZhY3RvclVzZXJJbXBsIiwiZW5yb2xsZWRGYWN0b3JzIiwiX2Zyb21Vc2VyIiwiZ2V0U2Vzc2lvbiIsImVucm9sbCIsImZpbmFsaXplTWZhUmVzcG9uc2UiLCJ1bmVucm9sbCIsImluZm9PclVpZCIsIm11bHRpRmFjdG9yVXNlckNhY2hlIiwiV2Vha01hcCIsInVzZXJNb2R1bGFyIiwiU1RPUkFHRV9BVkFJTEFCTEVfS0VZIiwiQnJvd3NlclBlcnNpc3RlbmNlQ2xhc3MiLCJzdG9yYWdlUmV0cmlldmVyIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwiX2lmcmFtZUNhbm5vdFN5bmNXZWJTdG9yYWdlIiwiX1BPTExJTkdfSU5URVJWQUxfTVMkMSIsIklFMTBfTE9DQUxfU1RPUkFHRV9TWU5DX0RFTEFZIiwiQnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJldmVudCIsInBvbGwiLCJvblN0b3JhZ2VFdmVudCIsImxpc3RlbmVycyIsImxvY2FsQ2FjaGUiLCJwb2xsVGltZXIiLCJzYWZhcmlMb2NhbFN0b3JhZ2VOb3RTeW5jZWQiLCJmYWxsYmFja1RvUG9sbGluZyIsImZvckFsbENoYW5nZWRLZXlzIiwia2V5cyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJrZXkyIiwiX29sZFZhbHVlIiwibm90aWZ5TGlzdGVuZXJzIiwiZGV0YWNoTGlzdGVuZXIiLCJzdG9wUG9sbGluZyIsInN0b3JlZFZhbHVlMiIsInRyaWdnZXJMaXN0ZW5lcnMiLCJzdG9yZWRWYWx1ZSIsImxpc3RlbmVyIiwiZnJvbSIsInN0YXJ0UG9sbGluZyIsInNldEludGVydmFsIiwiU3RvcmFnZUV2ZW50IiwiY2xlYXJJbnRlcnZhbCIsImF0dGFjaExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpemUiLCJCcm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwic2Vzc2lvblN0b3JhZ2UiLCJfYWxsU2V0dGxlZCIsInByb21pc2VzIiwiZnVsZmlsbGVkIiwicmVhc29uIiwiUmVjZWl2ZXIiLCJldmVudFRhcmdldCIsImhhbmRsZXJzTWFwIiwiaGFuZGxlRXZlbnQiLCJleGlzdGluZ0luc3RhbmNlIiwicmVjZWl2ZXJzIiwicmVjZWl2ZXIiLCJpc0xpc3RlbmluZ3RvIiwibmV3SW5zdGFuY2UiLCJtZXNzYWdlRXZlbnQiLCJldmVudElkIiwiZXZlbnRUeXBlIiwiaGFuZGxlcnMiLCJwb3J0cyIsInBvc3RNZXNzYWdlIiwiaGFuZGxlciIsIm9yaWdpbiIsIl9zdWJzY3JpYmUiLCJldmVudEhhbmRsZXIiLCJfdW5zdWJzY3JpYmUiLCJfZ2VuZXJhdGVFdmVudElkIiwiZGlnaXRzIiwiU2VuZGVyIiwidGFyZ2V0IiwicmVtb3ZlTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25NZXNzYWdlIiwiY2xvc2UiLCJfc2VuZCIsInRpbWVvdXQiLCJNZXNzYWdlQ2hhbm5lbCIsImNvbXBsZXRpb25UaW1lciIsInN0YXJ0IiwiYWNrVGltZXIiLCJwb3J0MiIsImZpbmFsbHkiLCJfd2luZG93IiwiX3NldFdpbmRvd0xvY2F0aW9uIiwiX2lzV29ya2VyIiwiX2dldEFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0cmF0aW9uIiwiYWN0aXZlIiwiX2dldFNlcnZpY2VXb3JrZXJDb250cm9sbGVyIiwiY29udHJvbGxlciIsIl9nZXRXb3JrZXJHbG9iYWxTY29wZSIsIkRCX05BTUUiLCJEQl9WRVJTSU9OIiwiREJfT0JKRUNUU1RPUkVfTkFNRSIsIkRCX0RBVEFfS0VZUEFUSCIsIkRCUHJvbWlzZSIsInRvUHJvbWlzZSIsImdldE9iamVjdFN0b3JlIiwiZGIiLCJpc1JlYWRXcml0ZSIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJfZGVsZXRlRGF0YWJhc2UiLCJpbmRleGVkREIiLCJkZWxldGVEYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJvcGVuIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwiX3B1dE9iamVjdCIsInB1dCIsImdldE9iamVjdCIsIl9kZWxldGVPYmplY3QiLCJfUE9MTElOR19JTlRFUlZBTF9NUyIsIl9UUkFOU0FDVElPTl9SRVRSWV9DT1VOVCIsIkluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJwZW5kaW5nV3JpdGVzIiwic2VuZGVyIiwic2VydmljZVdvcmtlclJlY2VpdmVyQXZhaWxhYmxlIiwiYWN0aXZlU2VydmljZVdvcmtlciIsIl93b3JrZXJJbml0aWFsaXphdGlvblByb21pc2UiLCJpbml0aWFsaXplU2VydmljZVdvcmtlck1lc3NhZ2luZyIsIl9vcGVuRGIiLCJfd2l0aFJldHJpZXMiLCJvcCIsIm51bUF0dGVtcHRzIiwiaW5pdGlhbGl6ZVJlY2VpdmVyIiwiaW5pdGlhbGl6ZVNlbmRlciIsIl9vcmlnaW4iLCJfcG9sbCIsImtleVByb2Nlc3NlZCIsIl9kYXRhIiwicmVzdWx0cyIsIm5vdGlmeVNlcnZpY2VXb3JrZXIiLCJfd2l0aFBlbmRpbmdXcml0ZSIsIndyaXRlIiwiZ2V0QWxsUmVxdWVzdCIsImdldEFsbCIsImtleXNJblJlc3VsdCIsImZiYXNlX2tleSIsImxvY2FsS2V5Iiwic3RhcnRTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblRvdHBNZmEiLCJfU09MVkVfVElNRV9NUyIsIl9FWFBJUkFUSU9OX1RJTUVfTVMiLCJfV0lER0VUX0lEX1NUQVJUIiwiTW9ja1JlQ2FwdGNoYSIsImNvdW50ZXIiLCJfd2lkZ2V0cyIsInJlbmRlciIsImNvbnRhaW5lciIsInBhcmFtZXRlcnMiLCJNb2NrV2lkZ2V0IiwicmVzZXQiLCJvcHRXaWRnZXRJZCIsImNvbnRhaW5lck9ySWQiLCJkZWxldGVkIiwicmVzcG9uc2VUb2tlbiIsImNsaWNrSGFuZGxlciIsImdldEVsZW1lbnRCeUlkIiwiaXNWaXNpYmxlIiwiY2hlY2tJZkRlbGV0ZWQiLCJnZW5lcmF0ZVJhbmRvbUFscGhhTnVtZXJpY1N0cmluZyIsImV4cGlyZWRDYWxsYmFjayIsImxlbiIsImNoYXJzIiwiYWxsb3dlZENoYXJzIiwiX0pTTE9BRF9DQUxMQkFDSyIsIk5FVFdPUktfVElNRU9VVF9ERUxBWSIsIlJlQ2FwdGNoYUxvYWRlckltcGwiLCJob3N0TGFuZ3VhZ2UiLCJsaWJyYXJ5U2VwYXJhdGVseUxvYWRlZCIsImxvYWQiLCJobCIsImlzSG9zdExhbmd1YWdlVmFsaWQiLCJzaG91bGRSZXNvbHZlSW1tZWRpYXRlbHkiLCJyZWNhcHRjaGEiLCJ3aWRnZXRJZCIsIm9ubG9hZCIsImNsZWFyZWRPbmVJbnN0YW5jZSIsIk1vY2tSZUNhcHRjaGFMb2FkZXJJbXBsIiwiUkVDQVBUQ0hBX1ZFUklGSUVSX1RZUEUiLCJERUZBVUxUX1BBUkFNUyIsInRoZW1lIiwiZGVzdHJveWVkIiwidG9rZW5DaGFuZ2VMaXN0ZW5lcnMiLCJyZW5kZXJQcm9taXNlIiwiaXNJbnZpc2libGUiLCJtYWtlVG9rZW5DYWxsYmFjayIsIl9yZWNhcHRjaGFMb2FkZXIiLCJ2YWxpZGF0ZVN0YXJ0aW5nU3RhdGUiLCJhc3NlcnROb3REZXN0cm95ZWQiLCJnZXRBc3NlcnRlZFJlY2FwdGNoYSIsInRva2VuQ2hhbmdlIiwibWFrZVJlbmRlclByb21pc2UiLCJfcmVzZXQiLCJjbGVhciIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZUNoaWxkIiwic2l0ZWtleSIsImhhc0NoaWxkTm9kZXMiLCJleGlzdGluZyIsImdsb2JhbEZ1bmMiLCJpbml0IiwiZ3VhcmFudGVlZEVtcHR5IiwiZG9tUmVhZHkiLCJDb25maXJtYXRpb25SZXN1bHRJbXBsIiwib25Db25maXJtYXRpb24iLCJjb25maXJtIiwiYXV0aENyZWRlbnRpYWwiLCJhcHBWZXJpZmllciIsIl92ZXJpZnlQaG9uZU51bWJlciIsInJlY2FwdGNoYVRva2VuIiwicGhvbmVJbmZvT3B0aW9ucyIsInBob25lRW5yb2xsbWVudEluZm8iLCJwaG9uZVNlc3Npb25JbmZvIiwibXVsdGlGYWN0b3JIaW50IiwibXVsdGlGYWN0b3JVaWQiLCJwaG9uZVNpZ25JbkluZm8iLCJwaG9uZVJlc3BvbnNlSW5mbyIsInZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVPcHRpb25zIiwiYXBwbGljYXRpb25WZXJpZmllciIsIlBIT05FX1NJR05fSU5fTUVUSE9EIiwiX3dpdGhEZWZhdWx0UmVzb2x2ZXIiLCJyZXNvbHZlck92ZXJyaWRlIiwiSWRwQ3JlZGVudGlhbCIsIl9idWlsZElkcFJlcXVlc3QiLCJzZXNzaW9uSWQiLCJyZXR1cm5JZHBDcmVkZW50aWFsIiwiX3NpZ25JbiIsIl9yZWF1dGgiLCJfbGluayIsIkFic3RyYWN0UG9wdXBSZWRpcmVjdE9wZXJhdGlvbiIsInBlbmRpbmdQcm9taXNlIiwiZXZlbnRNYW5hZ2VyIiwib25FeGVjdXRpb24iLCJyZWdpc3RlckNvbnN1bWVyIiwib25BdXRoRXZlbnQiLCJ1cmxSZXNwb25zZSIsImdldElkcFRhc2siLCJvbkVycm9yIiwidW5yZWdpc3RlckFuZENsZWFuVXAiLCJ1bnJlZ2lzdGVyQ29uc3VtZXIiLCJjbGVhblVwIiwiX1BPTExfV0lORE9XX0NMT1NFX1RJTUVPVVQiLCJyZXNvbHZlckludGVybmFsIiwiUG9wdXBPcGVyYXRpb24iLCJleGVjdXRlTm90TnVsbCIsImF1dGhXaW5kb3ciLCJwb2xsSWQiLCJjdXJyZW50UG9wdXBBY3Rpb24iLCJjYW5jZWwiLCJfb3BlblBvcHVwIiwiYXNzb2NpYXRlZEV2ZW50IiwiX29yaWdpblZhbGlkYXRpb24iLCJfaXNJZnJhbWVXZWJTdG9yYWdlU3VwcG9ydGVkIiwiaXNTdXBwb3J0ZWQiLCJwb2xsVXNlckNhbmNlbGxhdGlvbiIsImNsb3NlZCIsIlBFTkRJTkdfUkVESVJFQ1RfS0VZIiwicmVkaXJlY3RPdXRjb21lTWFwIiwiUmVkaXJlY3RBY3Rpb24iLCJyZWFkeU91dGNvbWUiLCJoYXNQZW5kaW5nUmVkaXJlY3QiLCJfZ2V0QW5kQ2xlYXJQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJwZW5kaW5nUmVkaXJlY3RLZXkiLCJyZXNvbHZlclBlcnNpc3RlbmNlIiwiX3NldFBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsIl9jbGVhclJlZGlyZWN0T3V0Y29tZXMiLCJfc2lnbkluV2l0aFJlZGlyZWN0IiwiX29wZW5SZWRpcmVjdCIsIl9yZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInByZXBhcmVVc2VyRm9yUmVkaXJlY3QiLCJfbGlua1dpdGhSZWRpcmVjdCIsIl9nZXRSZWRpcmVjdFJlc3VsdCIsInJlc29sdmVyRXh0ZXJuIiwiRVZFTlRfRFVQTElDQVRJT05fQ0FDSEVfRFVSQVRJT05fTVMiLCJBdXRoRXZlbnRNYW5hZ2VyIiwiY2FjaGVkRXZlbnRVaWRzIiwiY29uc3VtZXJzIiwicXVldWVkUmVkaXJlY3RFdmVudCIsImhhc0hhbmRsZWRQb3RlbnRpYWxSZWRpcmVjdCIsImxhc3RQcm9jZXNzZWRFdmVudFRpbWUiLCJhdXRoRXZlbnRDb25zdW1lciIsImlzRXZlbnRGb3JDb25zdW1lciIsInNlbmRUb0NvbnN1bWVyIiwic2F2ZUV2ZW50VG9DYWNoZSIsIm9uRXZlbnQiLCJoYXNFdmVudEJlZW5IYW5kbGVkIiwiaGFuZGxlZCIsImNvbnN1bWVyIiwiaXNSZWRpcmVjdEV2ZW50IiwiaXNOdWxsUmVkaXJlY3RFdmVudCIsImV2ZW50SWRNYXRjaGVzIiwiZXZlbnRVaWQiLCJ2IiwiX2dldFByb2plY3RDb25maWciLCJJUF9BRERSRVNTX1JFR0VYIiwiSFRUUF9SRUdFWCIsIl92YWxpZGF0ZU9yaWdpbiIsImF1dGhvcml6ZWREb21haW5zIiwiZG9tYWluIiwibWF0Y2hEb21haW4iLCJjdXJyZW50VXJsIiwiaG9zdG5hbWUiLCJVUkwiLCJjZVVybCIsImVzY2FwZWREb21haW5QYXR0ZXJuIiwiUmVnRXhwIiwiTkVUV09SS19USU1FT1VUIiwicmVzZXRVbmxvYWRlZEdhcGlNb2R1bGVzIiwiYmVhY29uIiwiX19fanNsIiwiSCIsImhpbnQiLCJyIiwiTCIsIkNQIiwibG9hZEdhcGkiLCJsb2FkR2FwaUlmcmFtZSIsImdhcGkiLCJpZnJhbWVzIiwiZ2V0Q29udGV4dCIsIm9udGltZW91dCIsIklmcmFtZSIsImNiTmFtZSIsImNhY2hlZEdBcGlMb2FkZXIiLCJfbG9hZEdhcGkiLCJQSU5HX1RJTUVPVVQiLCJJRlJBTUVfUEFUSCIsIkVNVUxBVEVEX0lGUkFNRV9QQVRIIiwiSUZSQU1FX0FUVFJJQlVURVMiLCJoZWlnaHQiLCJ0YWJpbmRleCIsIkVJRF9GUk9NX0FQSUhPU1QiLCJnZXRJZnJhbWVVcmwiLCJlaWQiLCJmdyIsIl9vcGVuSWZyYW1lIiwiY29udGV4dCIsImdhcGkyIiwid2hlcmUiLCJtZXNzYWdlSGFuZGxlcnNGaWx0ZXIiLCJDUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVIiLCJhdHRyaWJ1dGVzIiwiZG9udGNsZWFyIiwiaWZyYW1lIiwicmVzdHlsZSIsInNldEhpZGVPbkxlYXZlIiwibmV0d29ya0Vycm9yIiwibmV0d29ya0Vycm9yVGltZXIiLCJjbGVhclRpbWVyQW5kUmVzb2x2ZSIsInBpbmciLCJCQVNFX1BPUFVQX09QVElPTlMiLCJyZXNpemFibGUiLCJzdGF0dXNiYXIiLCJ0b29sYmFyIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiVEFSR0VUX0JMQU5LIiwiRklSRUZPWF9FTVBUWV9VUkwiLCJBdXRoUG9wdXAiLCJ3aW5kb3cyIiwiX29wZW4iLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImF2YWlsV2lkdGgiLCJzY3JvbGxiYXJzIiwib3B0aW9uc1N0cmluZyIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2N1bSIsIm9wZW5Bc05ld1dpbmRvd0lPUyIsIm5ld1dpbiIsImZvY3VzIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIldJREdFVF9QQVRIIiwiRU1VTEFUT1JfV0lER0VUX1BBVEgiLCJGSVJFQkFTRV9BUFBfQ0hFQ0tfRlJBR01FTlRfSUQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfZ2V0UmVkaXJlY3RVcmwiLCJhdXRoVHlwZSIsInJlZGlyZWN0VXJsIiwiYWRkaXRpb25hbFBhcmFtcyIsImlzRW1wdHkiLCJ0aWQiLCJwYXJhbXNEaWN0IiwiYXBwQ2hlY2tUb2tlbkZyYWdtZW50IiwiZ2V0SGFuZGxlckJhc2UiLCJXRUJfU1RPUkFHRV9TVVBQT1JUX0tFWSIsIkJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJldmVudE1hbmFnZXJzIiwib3JpZ2luVmFsaWRhdGlvblByb21pc2VzIiwicHJvbWlzZTIiLCJpbml0QW5kR2V0TWFuYWdlciIsInJlZ2lzdGVyIiwiaWZyYW1lRXZlbnQiLCJhdXRoRXZlbnQiLCJzZW5kIiwiTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2ZpbmFsaXplRW5yb2xsIiwiX2ZpbmFsaXplU2lnbkluIiwiUGhvbmVNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbUNyZWRlbnRpYWwiLCJwaG9uZVZlcmlmaWNhdGlvbkluZm8iLCJGQUNUT1JfSUQiLCJhc3NlcnRpb25Gb3JFbnJvbGxtZW50Iiwib25lVGltZVBhc3N3b3JkIiwiVG90cE11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tU2VjcmV0IiwiYXNzZXJ0aW9uRm9yU2lnbkluIiwiZW5yb2xsbWVudElkIiwiX2Zyb21FbnJvbGxtZW50SWQiLCJnZW5lcmF0ZVNlY3JldCIsIm1mYVNlc3Npb24iLCJ0b3RwRW5yb2xsbWVudEluZm8iLCJfZnJvbVN0YXJ0VG90cE1mYUVucm9sbG1lbnRSZXNwb25zZSIsIm90cCIsInRvdHBWZXJpZmljYXRpb25JbmZvIiwiX21ha2VUb3RwVmVyaWZpY2F0aW9uSW5mbyIsInNlY3JldEtleSIsImhhc2hpbmdBbGdvcml0aG0iLCJjb2RlTGVuZ3RoIiwiY29kZUludGVydmFsU2Vjb25kcyIsImVucm9sbG1lbnRDb21wbGV0aW9uRGVhZGxpbmUiLCJ0b3RwU2Vzc2lvbkluZm8iLCJzaGFyZWRTZWNyZXRLZXkiLCJ2ZXJpZmljYXRpb25Db2RlTGVuZ3RoIiwicGVyaW9kU2VjIiwiZmluYWxpemVFbnJvbGxtZW50VGltZSIsImdlbmVyYXRlUXJDb2RlVXJsIiwiYWNjb3VudE5hbWUiLCJpc3N1ZXIiLCJ1c2VEZWZhdWx0cyIsIl9pc0VtcHR5U3RyaW5nIiwiaW5wdXQiLCJBdXRoSW50ZXJvcCIsImludGVybmFsTGlzdGVuZXJzIiwiZ2V0VWlkIiwiYXNzZXJ0QXV0aENvbmZpZ3VyZWQiLCJhZGRBdXRoVG9rZW5MaXN0ZW5lciIsInVwZGF0ZVByb2FjdGl2ZVJlZnJlc2giLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsImdldFZlcnNpb25Gb3JQbGF0Zm9ybSIsInJlZ2lzdGVyQXV0aCIsIl9yZWdpc3RlckNvbXBvbmVudCIsImltcG9ydF9jb21wb25lbnQiLCJDb21wb25lbnQiLCJnZXRQcm92aWRlciIsInNldEluc3RhbnRpYXRpb25Nb2RlIiwic2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2siLCJfaW5zdGFuY2VJZGVudGlmaWVyIiwiX2luc3RhbmNlIiwiYXV0aEludGVybmFsUHJvdmlkZXIiLCJyZWdpc3RlclZlcnNpb24iLCJERUZBVUxUX0lEX1RPS0VOX01BWF9BR0UiLCJhdXRoSWRUb2tlbk1heEFnZSIsImdldEV4cGVyaW1lbnRhbFNldHRpbmciLCJsYXN0UG9zdGVkSWRUb2tlbiIsIm1pbnRDb29raWVGYWN0b3J5IiwiaWRUb2tlblJlc3VsdCIsImlkVG9rZW5BZ2UiLCJnZXRBcHAiLCJhdXRoVG9rZW5TeW5jUGF0aCIsIm1pbnRDb29raWUiLCJhdXRoRW11bGF0b3JIb3N0IiwiZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdCIsImdldFNjcmlwdFBhcmVudEVsZW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNldEF0dHJpYnV0ZSIsIm9uZXJyb3IiLCJjaGFyc2V0IiwiaW1wb3J0X3V0aWwyIiwicmVxdWlyZSIsImltcG9ydF9hcHAyIiwiaW1wb3J0X2xvZ2dlcjIiLCJpbXBvcnRfdHNsaWIyIiwiaW1wb3J0X2NvbXBvbmVudDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUMsMENBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyx5QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHlCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyx3QkFBQSxFQUFBQSxD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LFlBQVksR0FBRztJQUM5RCxNQUFNbTdCLFVBQUEsR0FBYUwsaUJBQUEsQ0FBa0JJLGlCQUFpQjtJQUN0RHgrQyxzQkFBQSxDQUF1Qm1OLElBQUEsRUFBTXN4QyxVQUFBLEVBQVksTUFDdkNBLFVBQUEsQ0FBV3R4QyxJQUFBLENBQUswTCxXQUFXLENBQUM7SUFFOUJqWCxnQkFBQSxDQUFpQnVMLElBQUEsRUFBTTRKLElBQUEsSUFBUTBuQyxVQUFBLENBQVcxbkMsSUFBSSxDQUFDO0VBQ2hEO0VBRUQsTUFBTTJuQyxnQkFBQSxPQUFtQnQ1QyxXQUFBLENBQUF1NUMsc0JBQUEsRUFBdUIsTUFBTTtFQUN0RCxJQUFJRCxnQkFBQSxFQUFrQjtJQUNwQnArQyxtQkFBQSxDQUFvQjZNLElBQUEsRUFBTSxVQUFVdXhDLGdCQUFBLEVBQWtCO0VBQ3ZEO0VBRUQsT0FBT3Z4QyxJQUFBO0FBQ1Q7QUFFQSxTQUFTeXhDLHVCQUFBLEVBQXNCOztFQUM3QixRQUFPei9CLEVBQUEsSUFBQXRRLEVBQUEsR0FBQW1WLFFBQUEsQ0FBUzY2QixvQkFBQSxDQUFxQixNQUFNLE9BQUksUUFBQWh3QyxFQUFBLHVCQUFBQSxFQUFBLFNBQUUsUUFBQXNRLEVBQUEsY0FBQUEsRUFBQSxHQUFJNkUsUUFBQTtBQUN2RDtBQUVBeUosc0JBQUEsQ0FBdUI7RUFDckJKLE9BQU83YyxHQUFBLEVBQVc7SUFFaEIsT0FBTyxJQUFJdUMsT0FBQSxDQUFRLENBQUNpUyxPQUFBLEVBQVN0USxNQUFBLEtBQVU7TUFDckMsTUFBTTRjLEVBQUEsR0FBS3ROLFFBQUEsQ0FBU3VOLGFBQUEsQ0FBYyxRQUFRO01BQzFDRCxFQUFBLENBQUd3dEIsWUFBQSxDQUFhLE9BQU90dUMsR0FBRztNQUMxQjhnQixFQUFBLENBQUcrYSxNQUFBLEdBQVNybkIsT0FBQTtNQUNac00sRUFBQSxDQUFHeXRCLE9BQUEsR0FBVWxyQyxDQUFBLElBQUk7UUFDZixNQUFNakgsS0FBQSxHQUFRSyxZQUFBLENBQVk7UUFDMUJMLEtBQUEsQ0FBTW9JLFVBQUEsR0FBYW5CLENBQUE7UUFDbkJhLE1BQUEsQ0FBTzlILEtBQUs7TUFDZDtNQUNBMGtCLEVBQUEsQ0FBR2hSLElBQUEsR0FBTztNQUNWZ1IsRUFBQSxDQUFHMHRCLE9BQUEsR0FBVTtNQUNiSixzQkFBQSxDQUFzQixFQUFHcnNCLFdBQUEsQ0FBWWpCLEVBQUU7SUFDekMsQ0FBQzs7RUFHSDlELFVBQUEsRUFBWTtFQUNaRixpQkFBQSxFQUFtQjtFQUNuQkMseUJBQUEsRUFDRTtBQUNIO0FBRUQ4dkIsWUFBQSxDQUFZOzs7QUN6SVosSUFBQTRCLFlBQUEsR0FBT0MsT0FBQTtBQUNQLElBQUFDLFdBQUEsR0FBT0QsT0FBQTtBQUNQLElBQUFFLGNBQUEsR0FBT0YsT0FBQTtBQUNQLElBQUFHLGFBQUEsR0FBT0gsT0FBQTtBQUNQLElBQUFJLGlCQUFBLEdBQU9KLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9hcHAvb3V0In0=