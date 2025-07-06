System.register(["@firebase/util@1.12.0","@firebase/component@0.6.17","@firebase/logger@0.4.4","idb@7.1.1","@firebase/app@0.13.1","tslib@2.8.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.12.0"],["@firebase/component","0.6.17"],["@firebase/logger","0.4.4"],["idb","7.1.1"],["@firebase/app","0.13.1"],["tslib","2.8.1"],["@firebase/auth","1.10.7"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.12.0', dep), dep => dependencies.set('@firebase/component@0.6.17', dep), dep => dependencies.set('@firebase/logger@0.4.4', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.13.1', dep), dep => dependencies.set('tslib@2.8.1', dep)],
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

// .beyond/uimport/temp/@firebase/auth.1.10.7.js
var auth_1_10_7_exports = {};
__export(auth_1_10_7_exports, {
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
  browserCookiePersistence: () => browserCookiePersistence,
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
module.exports = __toCommonJS(auth_1_10_7_exports);

// node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js
var import_app = require("@firebase/app@0.13.1");
var import_util = require("@firebase/util@1.12.0");
var import_logger = require("@firebase/logger@0.4.4");
var import_tslib = require("tslib@2.8.1");
var import_component = require("@firebase/component@0.6.17");
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
    ["password-does-not-meet-requirements"]: "The password does not meet the requirements.",
    ["invalid-hosting-link-domain"]: "The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."
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
  INVALID_REQ_TYPE: "auth/invalid-req-type",
  INVALID_HOSTING_LINK_DOMAIN: "auth/invalid-hosting-link-domain"
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
var CookieAuthProxiedEndpoints = ["/v1/accounts:signInWithCustomToken", "/v1/accounts:signInWithEmailLink", "/v1/accounts:signInWithIdp", "/v1/accounts:signInWithPassword", "/v1/accounts:signInWithPhoneNumber", "/v1/token"];
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
    if (auth.emulatorConfig && (0, import_util.isCloudWorkstation)(auth.emulatorConfig.host)) {
      fetchArgs.credentials = "include";
    }
    return FetchProvider.fetch()(await _getFinalTarget(auth, auth.config.apiHost, path, query), fetchArgs);
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
async function _getFinalTarget(auth, host, path, query) {
  const base = `${host}${path}?${query}`;
  const authInternal = auth;
  const finalTarget = authInternal.config.emulator ? _emulatorUrl(auth.config, base) : `${auth.config.apiScheme}://${base}`;
  if (CookieAuthProxiedEndpoints.includes(path)) {
    await authInternal._persistenceManagerAvailable;
    if (authInternal._getPersistenceType() === "COOKIE") {
      const cookiePersistence = authInternal._getPersistence();
      return cookiePersistence._getFinalTarget(finalTarget).toString();
    }
  }
  return finalTarget;
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
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(auth) {
    this.auth = auth;
    this.timer = null;
    this.promise = new Promise((_, reject) => {
      this.timer = setTimeout(() => {
        return reject(_createError(this.auth, "network-request-failed"));
      }, DEFAULT_API_TIMEOUT_MS.get());
    });
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
  isAnyProviderEnabled() {
    return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") || this.isProviderEnabled("PHONE_PROVIDER");
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
    const url = await _getFinalTarget(auth, tokenApiHost, "/v1/token", `key=${apiKey}`);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const options = {
      method: "POST",
      headers,
      body
    };
    if (auth.emulatorConfig && (0, import_util.isCloudWorkstation)(auth.emulatorConfig.host)) {
      options.credentials = "include";
    }
    return FetchProvider.fetch()(url, options);
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
    if (!blob) {
      return null;
    }
    if (typeof blob === "string") {
      const response = await getAccountInfo(this.auth, {
        idToken: blob
      }).catch(() => void 0);
      if (!response) {
        return null;
      }
      return UserImpl._fromGetAccountInfoResponse(this.auth, response, blob);
    }
    return UserImpl._fromJSON(this.auth, blob);
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
          let user;
          if (typeof blob === "string") {
            const response = await getAccountInfo(auth, {
              idToken: blob
            }).catch(() => void 0);
            if (!response) {
              break;
            }
            user = await UserImpl._fromGetAccountInfoResponse(auth, response, blob);
          } else {
            user = UserImpl._fromJSON(auth, blob);
          }
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
    this._resolvePersistenceManagerAvailable = void 0;
    this.lastNotifiedUid = void 0;
    this.languageCode = null;
    this.tenantId = null;
    this.settings = {
      appVerificationDisabledForTesting: false
    };
    this.frameworks = [];
    this.name = app.name;
    this.clientVersion = config.sdkClientVersion;
    this._persistenceManagerAvailable = new Promise(resolve => this._resolvePersistenceManagerAvailable = resolve);
  }
  _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
    if (popupRedirectResolver) {
      this._popupRedirectResolver = _getInstance(popupRedirectResolver);
    }
    this._initializationPromise = this.queue(async () => {
      var _a, _b, _c;
      if (this._deleted) {
        return;
      }
      this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
      (_a = this._resolvePersistenceManagerAvailable) === null || _a === void 0 ? void 0 : _a.call(this);
      if (this._deleted) {
        return;
      }
      if ((_b = this._popupRedirectResolver) === null || _b === void 0 ? void 0 : _b._shouldInitProactively) {
        try {
          await this._popupRedirectResolver._initialize(this);
        } catch (e) {}
      }
      await this.initializeCurrentUser(popupRedirectResolver);
      this.lastNotifiedUid = ((_c = this.currentUser) === null || _c === void 0 ? void 0 : _c.uid) || null;
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
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
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
    if ((0, import_app._isFirebaseServerApp)(this.app) && this.app.settings.appCheckToken) {
      return this.app.settings.appCheckToken;
    }
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
var MockGreCAPTCHATopLevel = class {
  constructor() {
    this.enterprise = new MockGreCAPTCHA();
  }
  ready(callback) {
    callback();
  }
  execute(_siteKey, _options) {
    return Promise.resolve("token");
  }
  render(_container, _parameters) {
    return "";
  }
};
var MockGreCAPTCHA = class {
  ready(callback) {
    callback();
  }
  execute(_siteKey, _options) {
    return Promise.resolve("token");
  }
  render(_container, _parameters) {
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
    if (this.auth.settings.appVerificationDisabledForTesting) {
      const mockRecaptcha = new MockGreCAPTCHATopLevel();
      return mockRecaptcha.execute("siteKey", {
        action: "verify"
      });
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
async function injectRecaptchaFields(auth, request, action, isCaptchaResp = false, isFakeToken = false) {
  const verifier = new RecaptchaEnterpriseVerifier(auth);
  let captchaResponse;
  if (isFakeToken) {
    captchaResponse = FAKE_TOKEN;
  } else {
    try {
      captchaResponse = await verifier.verify(action);
    } catch (error) {
      captchaResponse = await verifier.verify(action, true);
    }
  }
  const newRequest = Object.assign({}, request);
  if (action === "mfaSmsEnrollment" || action === "mfaSmsSignIn") {
    if ("phoneEnrollmentInfo" in newRequest) {
      const phoneNumber = newRequest.phoneEnrollmentInfo.phoneNumber;
      const recaptchaToken = newRequest.phoneEnrollmentInfo.recaptchaToken;
      Object.assign(newRequest, {
        "phoneEnrollmentInfo": {
          phoneNumber,
          recaptchaToken,
          captchaResponse,
          "clientType": "CLIENT_TYPE_WEB",
          "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
        }
      });
    } else if ("phoneSignInInfo" in newRequest) {
      const recaptchaToken = newRequest.phoneSignInInfo.recaptchaToken;
      Object.assign(newRequest, {
        "phoneSignInInfo": {
          recaptchaToken,
          captchaResponse,
          "clientType": "CLIENT_TYPE_WEB",
          "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
        }
      });
    }
    return newRequest;
  }
  if (!isCaptchaResp) {
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
async function handleRecaptchaFlow(authInstance, request, actionName, actionMethod, recaptchaAuthProvider) {
  var _a, _b;
  if (recaptchaAuthProvider === "EMAIL_PASSWORD_PROVIDER") {
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
  } else if (recaptchaAuthProvider === "PHONE_PROVIDER") {
    if ((_b = authInstance._getRecaptchaConfig()) === null || _b === void 0 ? void 0 : _b.isProviderEnabled("PHONE_PROVIDER")) {
      const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName);
      return actionMethod(authInstance, requestWithRecaptcha).catch(async error => {
        var _a2;
        if (((_a2 = authInstance._getRecaptchaConfig()) === null || _a2 === void 0 ? void 0 : _a2.getProviderEnforcementState("PHONE_PROVIDER")) === "AUDIT") {
          if (error.code === `auth/${"missing-recaptcha-token"}` || error.code === `auth/${"invalid-app-credential"}`) {
            console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${actionName} flow.`);
            const requestWithRecaptchaFields = await injectRecaptchaFields(authInstance, request, actionName, false, true);
            return actionMethod(authInstance, requestWithRecaptchaFields);
          }
        }
        return Promise.reject(error);
      });
    } else {
      const requestWithRecaptchaFields = await injectRecaptchaFields(authInstance, request, actionName, false, true);
      return actionMethod(authInstance, requestWithRecaptchaFields);
    }
  } else {
    return Promise.reject(recaptchaAuthProvider + " provider is not supported.");
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
  if (config.isAnyProviderEnabled()) {
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
  _assert(/^https?:\/\//.test(url), authInternal, "invalid-emulator-scheme");
  const disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
  const protocol = extractProtocol(url);
  const {
    host,
    port
  } = extractHostAndPort(url);
  const portStr = port === null ? "" : `:${port}`;
  const emulator = {
    url: `${protocol}//${host}${portStr}/`
  };
  const emulatorConfig = Object.freeze({
    host,
    port,
    protocol: protocol.replace(":", ""),
    options: Object.freeze({
      disableWarnings
    })
  });
  if (!authInternal._canInitEmulator) {
    _assert(authInternal.config.emulator && authInternal.emulatorConfig, authInternal, "emulator-config-failed");
    _assert((0, import_util.deepEqual)(emulator, authInternal.config.emulator) && (0, import_util.deepEqual)(emulatorConfig, authInternal.emulatorConfig), authInternal, "emulator-config-failed");
    return;
  }
  authInternal.config.emulator = emulator;
  authInternal.emulatorConfig = emulatorConfig;
  authInternal.settings.appVerificationDisabledForTesting = true;
  if ((0, import_util.isCloudWorkstation)(host)) {
    void (0, import_util.pingServer)(`${protocol}//${host}${portStr}`);
    (0, import_util.updateEmulatorBanner)("Auth", true);
  } else if (!disableWarnings) {
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
        return handleRecaptchaFlow(auth, request, "signInWithPassword", signInWithPassword, "EMAIL_PASSWORD_PROVIDER");
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
        return handleRecaptchaFlow(auth, request, "signUpPassword", linkEmailPassword, "EMAIL_PASSWORD_PROVIDER");
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
    this.languageCode = (_e = searchParams["lang"]) !== null && _e !== void 0 ? _e : null;
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
  _assert(typeof actionCodeSettings.linkDomain === "undefined" || actionCodeSettings.linkDomain.length > 0, auth, "invalid-hosting-link-domain");
  request.continueUrl = actionCodeSettings.url;
  request.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
  request.linkDomain = actionCodeSettings.linkDomain;
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
  await handleRecaptchaFlow(authInternal, request, "getOobCode", sendPasswordResetEmail$1, "EMAIL_PASSWORD_PROVIDER");
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
  const signUpResponse = handleRecaptchaFlow(authInternal, request, "signUpPassword", signUp, "EMAIL_PASSWORD_PROVIDER");
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
  await handleRecaptchaFlow(authInternal, request, "getOobCode", sendSignInLinkToEmail$1, "EMAIL_PASSWORD_PROVIDER");
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
var POLLING_INTERVAL_MS = 1e3;
function getDocumentCookie(name2) {
  var _a, _b;
  const escapedName = name2.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
  const matcher = RegExp(`${escapedName}=([^;]+)`);
  return (_b = (_a = document.cookie.match(matcher)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : null;
}
function getCookieName(key) {
  const isDevMode = window.location.protocol === "http:";
  return `${isDevMode ? "__dev_" : "__HOST-"}FIREBASE_${key.split(":")[3]}`;
}
var CookiePersistence = class {
  constructor() {
    this.type = "COOKIE";
    this.listenerUnsubscribes = /* @__PURE__ */new Map();
  }
  _getFinalTarget(originalUrl) {
    if (typeof window === void 0) {
      return originalUrl;
    }
    const url = new URL(`${window.location.origin}/__cookies__`);
    url.searchParams.set("finalTarget", originalUrl);
    return url;
  }
  async _isAvailable() {
    var _a;
    if (typeof isSecureContext === "boolean" && !isSecureContext) {
      return false;
    }
    if (typeof navigator === "undefined" || typeof document === "undefined") {
      return false;
    }
    return (_a = navigator.cookieEnabled) !== null && _a !== void 0 ? _a : true;
  }
  async _set(_key, _value) {
    return;
  }
  async _get(key) {
    if (!this._isAvailable()) {
      return null;
    }
    const name2 = getCookieName(key);
    if (window.cookieStore) {
      const cookie = await window.cookieStore.get(name2);
      return cookie === null || cookie === void 0 ? void 0 : cookie.value;
    }
    return getDocumentCookie(name2);
  }
  async _remove(key) {
    if (!this._isAvailable()) {
      return;
    }
    const existingValue = await this._get(key);
    if (!existingValue) {
      return;
    }
    const name2 = getCookieName(key);
    document.cookie = `${name2}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`;
    await fetch(`/__cookies__`, {
      method: "DELETE"
    }).catch(() => void 0);
  }
  _addListener(key, listener) {
    if (!this._isAvailable()) {
      return;
    }
    const name2 = getCookieName(key);
    if (window.cookieStore) {
      const cb = event => {
        const changedCookie = event.changed.find(change => change.name === name2);
        if (changedCookie) {
          listener(changedCookie.value);
        }
        const deletedCookie = event.deleted.find(change => change.name === name2);
        if (deletedCookie) {
          listener(null);
        }
      };
      const unsubscribe2 = () => window.cookieStore.removeEventListener("change", cb);
      this.listenerUnsubscribes.set(listener, unsubscribe2);
      return window.cookieStore.addEventListener("change", cb);
    }
    let lastValue = getDocumentCookie(name2);
    const interval = setInterval(() => {
      const currentValue = getDocumentCookie(name2);
      if (currentValue !== lastValue) {
        listener(currentValue);
        lastValue = currentValue;
      }
    }, POLLING_INTERVAL_MS);
    const unsubscribe = () => clearInterval(interval);
    this.listenerUnsubscribes.set(listener, unsubscribe);
  }
  _removeListener(_key, listener) {
    const unsubscribe = this.listenerUnsubscribes.get(listener);
    if (!unsubscribe) {
      return;
    }
    unsubscribe();
    this.listenerUnsubscribes.delete(listener);
  }
};
CookiePersistence.type = "COOKIE";
var browserCookiePersistence = CookiePersistence;
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
  if (!auth._getRecaptchaConfig()) {
    try {
      await _initializeRecaptchaConfig(auth);
    } catch (error) {
      console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.");
    }
  }
  try {
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
        const startPhoneMfaEnrollmentRequest = {
          idToken: session.credential,
          phoneEnrollmentInfo: {
            phoneNumber: phoneInfoOptions.phoneNumber,
            clientType: "CLIENT_TYPE_WEB"
          }
        };
        const startEnrollPhoneMfaActionCallback = async (authInstance, request) => {
          if (request.phoneEnrollmentInfo.captchaResponse === FAKE_TOKEN) {
            _assert((verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE, authInstance, "argument-error");
            const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
            return startEnrollPhoneMfa(authInstance, requestWithRecaptchaV2);
          }
          return startEnrollPhoneMfa(authInstance, request);
        };
        const startPhoneMfaEnrollmentResponse = handleRecaptchaFlow(auth, startPhoneMfaEnrollmentRequest, "mfaSmsEnrollment", startEnrollPhoneMfaActionCallback, "PHONE_PROVIDER");
        const response = await startPhoneMfaEnrollmentResponse.catch(error => {
          return Promise.reject(error);
        });
        return response.phoneSessionInfo.sessionInfo;
      } else {
        _assert(session.type === "signin", auth, "internal-error");
        const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
        _assert(mfaEnrollmentId, auth, "missing-multi-factor-info");
        const startPhoneMfaSignInRequest = {
          mfaPendingCredential: session.credential,
          mfaEnrollmentId,
          phoneSignInInfo: {
            clientType: "CLIENT_TYPE_WEB"
          }
        };
        const startSignInPhoneMfaActionCallback = async (authInstance, request) => {
          if (request.phoneSignInInfo.captchaResponse === FAKE_TOKEN) {
            _assert((verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE, authInstance, "argument-error");
            const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
            return startSignInPhoneMfa(authInstance, requestWithRecaptchaV2);
          }
          return startSignInPhoneMfa(authInstance, request);
        };
        const startPhoneMfaSignInResponse = handleRecaptchaFlow(auth, startPhoneMfaSignInRequest, "mfaSmsSignIn", startSignInPhoneMfaActionCallback, "PHONE_PROVIDER");
        const response = await startPhoneMfaSignInResponse.catch(error => {
          return Promise.reject(error);
        });
        return response.phoneResponseInfo.sessionInfo;
      }
    } else {
      const sendPhoneVerificationCodeRequest = {
        phoneNumber: phoneInfoOptions.phoneNumber,
        clientType: "CLIENT_TYPE_WEB"
      };
      const sendPhoneVerificationCodeActionCallback = async (authInstance, request) => {
        if (request.captchaResponse === FAKE_TOKEN) {
          _assert((verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE, authInstance, "argument-error");
          const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
          return sendPhoneVerificationCode(authInstance, requestWithRecaptchaV2);
        }
        return sendPhoneVerificationCode(authInstance, request);
      };
      const sendPhoneVerificationCodeResponse = handleRecaptchaFlow(auth, sendPhoneVerificationCodeRequest, "sendVerificationCode", sendPhoneVerificationCodeActionCallback, "PHONE_PROVIDER");
      const response = await sendPhoneVerificationCodeResponse.catch(error => {
        return Promise.reject(error);
      });
      return response.sessionInfo;
    }
  } finally {
    verifier === null || verifier === void 0 ? void 0 : verifier._reset();
  }
}
async function updatePhoneNumber(user, credential) {
  const userInternal = (0, import_util.getModularInstance)(user);
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
  }
  await _link$1(userInternal, credential);
}
async function injectRecaptchaV2Token(auth, request, recaptchaV2Verifier) {
  _assert(recaptchaV2Verifier.type === RECAPTCHA_VERIFIER_TYPE, auth, "argument-error");
  const recaptchaV2Token = await recaptchaV2Verifier.verify();
  _assert(typeof recaptchaV2Token === "string", auth, "argument-error");
  const newRequest = Object.assign({}, request);
  if ("phoneEnrollmentInfo" in newRequest) {
    const phoneNumber = newRequest.phoneEnrollmentInfo.phoneNumber;
    const captchaResponse = newRequest.phoneEnrollmentInfo.captchaResponse;
    const clientType = newRequest.phoneEnrollmentInfo.clientType;
    const recaptchaVersion = newRequest.phoneEnrollmentInfo.recaptchaVersion;
    Object.assign(newRequest, {
      "phoneEnrollmentInfo": {
        phoneNumber,
        recaptchaToken: recaptchaV2Token,
        captchaResponse,
        clientType,
        recaptchaVersion
      }
    });
    return newRequest;
  } else if ("phoneSignInInfo" in newRequest) {
    const captchaResponse = newRequest.phoneSignInInfo.captchaResponse;
    const clientType = newRequest.phoneSignInInfo.clientType;
    const recaptchaVersion = newRequest.phoneSignInInfo.recaptchaVersion;
    Object.assign(newRequest, {
      "phoneSignInInfo": {
        recaptchaToken: recaptchaV2Token,
        captchaResponse,
        clientType,
        recaptchaVersion
      }
    });
    return newRequest;
  } else {
    Object.assign(newRequest, {
      "recaptchaToken": recaptchaV2Token
    });
    return newRequest;
  }
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
var version = "1.10.7";
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
var import_app2 = require("@firebase/app@0.13.1");
var import_util2 = require("@firebase/util@1.12.0");
var import_logger2 = require("@firebase/logger@0.4.4");
var import_tslib2 = require("tslib@2.8.1");
var import_component2 = require("@firebase/component@0.6.17");
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
/**
 * @license
 * Copyright 2025 Google LLC
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hdXRoLjEuMTAuNy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbW9kZWwvZW51bV9tYXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Fzc2VydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvY2F0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbmF2aWdhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZGVsYXkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2ZldGNoX3Byb3ZpZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9hY2NvdW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2lkX3Rva2VuX3Jlc3VsdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2ludmFsaWRhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Byb2FjdGl2ZV9yZWZyZXNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9tZXRhZGF0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlbG9hZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdG9rZW5fbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2luc3RhbnRpYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbl9tZW1vcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvcGVyc2lzdGVuY2VfdXNlcl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcGFzc3dvcmRfcG9saWN5L2dldF9wYXNzd29yZF9wb2xpY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9wYXNzd29yZF9wb2xpY3lfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9sb2FkX2pzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbW9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2VudGVycHJpc2VfdmVyaWZpZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9pbml0aWFsaXplLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvYXV0aF9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zbXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYWN0aW9uX2NvZGVfdXJsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmVkZXJhdGVkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmFjZWJvb2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dvb2dsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ2l0aHViLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3R3aXR0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zaWduX3VwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9jcmVkZW50aWFsX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hbm9ueW1vdXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfZXJyb3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9wcm92aWRlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9saW5rX3VubGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlYXV0aGVudGljYXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWN0aW9uX2NvZGVfc2V0dGluZ3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3JlYXRlX2F1dGhfdXJpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvcHJvZmlsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FjY291bnRfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FkZGl0aW9uYWxfdXNlcl9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Nlc3Npb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3VzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9sb2NhbF9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2Nvb2tpZV9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL3Nlc3Npb25fc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9wcm9taXNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3JlY2VpdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZXZlbnRfaWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvc2VuZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2F1dGhfd2luZG93LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3V0aWwvd29ya2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2luZGV4ZWRfZGIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9sb2FkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3Byb3ZpZGVycy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWJzdHJhY3RfcG9wdXBfcmVkaXJlY3Rfb3BlcmF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9ldmVudF9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcHJvamVjdF9jb25maWcvZ2V0X3Byb2plY3RfY29uZmlnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmFsaWRhdGVfb3JpZ2luLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9nYXBpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9pZnJhbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2hhbmRsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcG9wdXBfcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfYXNzZXJ0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21mYS9hc3NlcnRpb25zL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvYXNzZXJ0aW9ucy90b3RwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZmlyZWJhc2VfaW50ZXJuYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9yZWdpc3Rlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9kaXN0L2VzbTIwMTcvaW5kZXguanMiXSwibmFtZXMiOlsiYXV0aF8xXzEwXzdfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQWN0aW9uQ29kZU9wZXJhdGlvbiIsIkFjdGlvbkNvZGVVUkwiLCJBdXRoQ3JlZGVudGlhbCIsIkF1dGhFcnJvckNvZGVzIiwiQVVUSF9FUlJPUl9DT0RFU19NQVBfRE9fTk9UX1VTRV9JTlRFUk5BTExZIiwiRW1haWxBdXRoQ3JlZGVudGlhbCIsIkVtYWlsQXV0aFByb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJGYWN0b3JJZCIsIkdpdGh1YkF1dGhQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsIk9BdXRoQ3JlZGVudGlhbCIsIk9BdXRoUHJvdmlkZXIiLCJPcGVyYXRpb25UeXBlIiwiUGhvbmVBdXRoQ3JlZGVudGlhbCIsIlBob25lQXV0aFByb3ZpZGVyIiwiUGhvbmVNdWx0aUZhY3RvckdlbmVyYXRvciIsIlByb3ZpZGVySWQiLCJSZWNhcHRjaGFWZXJpZmllciIsIlNBTUxBdXRoUHJvdmlkZXIiLCJTaWduSW5NZXRob2QiLCJUb3RwTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJUb3RwU2VjcmV0IiwiVHdpdHRlckF1dGhQcm92aWRlciIsImFwcGx5QWN0aW9uQ29kZSIsImJlZm9yZUF1dGhTdGF0ZUNoYW5nZWQiLCJicm93c2VyQ29va2llUGVyc2lzdGVuY2UiLCJicm93c2VyTG9jYWxQZXJzaXN0ZW5jZSIsImJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJicm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwiY2hlY2tBY3Rpb25Db2RlIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJjb25uZWN0QXV0aEVtdWxhdG9yIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZGVidWdFcnJvck1hcCIsImRlbGV0ZVVzZXIiLCJmZXRjaFNpZ25Jbk1ldGhvZHNGb3JFbWFpbCIsImdldEFkZGl0aW9uYWxVc2VySW5mbyIsImdldEF1dGgiLCJnZXRJZFRva2VuIiwiZ2V0SWRUb2tlblJlc3VsdCIsImdldE11bHRpRmFjdG9yUmVzb2x2ZXIiLCJnZXRSZWRpcmVjdFJlc3VsdCIsImluTWVtb3J5UGVyc2lzdGVuY2UiLCJpbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwiaW5pdGlhbGl6ZUF1dGgiLCJpbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiaXNTaWduSW5XaXRoRW1haWxMaW5rIiwibGlua1dpdGhDcmVkZW50aWFsIiwibGlua1dpdGhQaG9uZU51bWJlciIsImxpbmtXaXRoUG9wdXAiLCJsaW5rV2l0aFJlZGlyZWN0IiwibXVsdGlGYWN0b3IiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJvbklkVG9rZW5DaGFuZ2VkIiwicGFyc2VBY3Rpb25Db2RlVVJMIiwicHJvZEVycm9yTWFwIiwicmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbCIsInJlYXV0aGVudGljYXRlV2l0aFBob25lTnVtYmVyIiwicmVhdXRoZW50aWNhdGVXaXRoUG9wdXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInJlbG9hZCIsInJldm9rZUFjY2Vzc1Rva2VuIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCIsInNldFBlcnNpc3RlbmNlIiwic2lnbkluQW5vbnltb3VzbHkiLCJzaWduSW5XaXRoQ3JlZGVudGlhbCIsInNpZ25JbldpdGhDdXN0b21Ub2tlbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsTGluayIsInNpZ25JbldpdGhQaG9uZU51bWJlciIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25JbldpdGhSZWRpcmVjdCIsInNpZ25PdXQiLCJ1bmxpbmsiLCJ1cGRhdGVDdXJyZW50VXNlciIsInVwZGF0ZUVtYWlsIiwidXBkYXRlUGFzc3dvcmQiLCJ1cGRhdGVQaG9uZU51bWJlciIsInVwZGF0ZVByb2ZpbGUiLCJ1c2VEZXZpY2VMYW5ndWFnZSIsInZhbGlkYXRlUGFzc3dvcmQiLCJ2ZXJpZnlCZWZvcmVVcGRhdGVFbWFpbCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlBIT05FIiwiVE9UUCIsIkZBQ0VCT09LIiwiR0lUSFVCIiwiR09PR0xFIiwiUEFTU1dPUkQiLCJUV0lUVEVSIiwiRU1BSUxfTElOSyIsIkVNQUlMX1BBU1NXT1JEIiwiTElOSyIsIlJFQVVUSEVOVElDQVRFIiwiU0lHTl9JTiIsIkVNQUlMX1NJR05JTiIsIlBBU1NXT1JEX1JFU0VUIiwiUkVDT1ZFUl9FTUFJTCIsIlJFVkVSVF9TRUNPTkRfRkFDVE9SX0FERElUSU9OIiwiVkVSSUZZX0FORF9DSEFOR0VfRU1BSUwiLCJWRVJJRllfRU1BSUwiLCJfZGVidWdFcnJvck1hcCIsIl9wcm9kRXJyb3JNYXAiLCJfREVGQVVMVF9BVVRIX0VSUk9SX0ZBQ1RPUlkiLCJpbXBvcnRfdXRpbCIsIkVycm9yRmFjdG9yeSIsIkFETUlOX09OTFlfT1BFUkFUSU9OIiwiQVJHVU1FTlRfRVJST1IiLCJBUFBfTk9UX0FVVEhPUklaRUQiLCJBUFBfTk9UX0lOU1RBTExFRCIsIkNBUFRDSEFfQ0hFQ0tfRkFJTEVEIiwiQ09ERV9FWFBJUkVEIiwiQ09SRE9WQV9OT1RfUkVBRFkiLCJDT1JTX1VOU1VQUE9SVEVEIiwiQ1JFREVOVElBTF9BTFJFQURZX0lOX1VTRSIsIkNSRURFTlRJQUxfTUlTTUFUQ0giLCJDUkVERU5USUFMX1RPT19PTERfTE9HSU5fQUdBSU4iLCJERVBFTkRFTlRfU0RLX0lOSVRfQkVGT1JFX0FVVEgiLCJEWU5BTUlDX0xJTktfTk9UX0FDVElWQVRFRCIsIkVNQUlMX0NIQU5HRV9ORUVEU19WRVJJRklDQVRJT04iLCJFTUFJTF9FWElTVFMiLCJFTVVMQVRPUl9DT05GSUdfRkFJTEVEIiwiRVhQSVJFRF9PT0JfQ09ERSIsIkVYUElSRURfUE9QVVBfUkVRVUVTVCIsIklOVEVSTkFMX0VSUk9SIiwiSU5WQUxJRF9BUElfS0VZIiwiSU5WQUxJRF9BUFBfQ1JFREVOVElBTCIsIklOVkFMSURfQVBQX0lEIiwiSU5WQUxJRF9BVVRIIiwiSU5WQUxJRF9BVVRIX0VWRU5UIiwiSU5WQUxJRF9DRVJUX0hBU0giLCJJTlZBTElEX0NPREUiLCJJTlZBTElEX0NPTlRJTlVFX1VSSSIsIklOVkFMSURfQ09SRE9WQV9DT05GSUdVUkFUSU9OIiwiSU5WQUxJRF9DVVNUT01fVE9LRU4iLCJJTlZBTElEX0RZTkFNSUNfTElOS19ET01BSU4iLCJJTlZBTElEX0VNQUlMIiwiSU5WQUxJRF9FTVVMQVRPUl9TQ0hFTUUiLCJJTlZBTElEX0lEUF9SRVNQT05TRSIsIklOVkFMSURfTE9HSU5fQ1JFREVOVElBTFMiLCJJTlZBTElEX01FU1NBR0VfUEFZTE9BRCIsIklOVkFMSURfTUZBX1NFU1NJT04iLCJJTlZBTElEX09BVVRIX0NMSUVOVF9JRCIsIklOVkFMSURfT0FVVEhfUFJPVklERVIiLCJJTlZBTElEX09PQl9DT0RFIiwiSU5WQUxJRF9PUklHSU4iLCJJTlZBTElEX1BBU1NXT1JEIiwiSU5WQUxJRF9QRVJTSVNURU5DRSIsIklOVkFMSURfUEhPTkVfTlVNQkVSIiwiSU5WQUxJRF9QUk9WSURFUl9JRCIsIklOVkFMSURfUkVDSVBJRU5UX0VNQUlMIiwiSU5WQUxJRF9TRU5ERVIiLCJJTlZBTElEX1NFU1NJT05fSU5GTyIsIklOVkFMSURfVEVOQU5UX0lEIiwiTUZBX0lORk9fTk9UX0ZPVU5EIiwiTUZBX1JFUVVJUkVEIiwiTUlTU0lOR19BTkRST0lEX1BBQ0tBR0VfTkFNRSIsIk1JU1NJTkdfQVBQX0NSRURFTlRJQUwiLCJNSVNTSU5HX0FVVEhfRE9NQUlOIiwiTUlTU0lOR19DT0RFIiwiTUlTU0lOR19DT05USU5VRV9VUkkiLCJNSVNTSU5HX0lGUkFNRV9TVEFSVCIsIk1JU1NJTkdfSU9TX0JVTkRMRV9JRCIsIk1JU1NJTkdfT1JfSU5WQUxJRF9OT05DRSIsIk1JU1NJTkdfTUZBX0lORk8iLCJNSVNTSU5HX01GQV9TRVNTSU9OIiwiTUlTU0lOR19QSE9ORV9OVU1CRVIiLCJNSVNTSU5HX1NFU1NJT05fSU5GTyIsIk1PRFVMRV9ERVNUUk9ZRUQiLCJORUVEX0NPTkZJUk1BVElPTiIsIk5FVFdPUktfUkVRVUVTVF9GQUlMRUQiLCJOVUxMX1VTRVIiLCJOT19BVVRIX0VWRU5UIiwiTk9fU1VDSF9QUk9WSURFUiIsIk9QRVJBVElPTl9OT1RfQUxMT1dFRCIsIk9QRVJBVElPTl9OT1RfU1VQUE9SVEVEIiwiUE9QVVBfQkxPQ0tFRCIsIlBPUFVQX0NMT1NFRF9CWV9VU0VSIiwiUFJPVklERVJfQUxSRUFEWV9MSU5LRUQiLCJRVU9UQV9FWENFRURFRCIsIlJFRElSRUNUX0NBTkNFTExFRF9CWV9VU0VSIiwiUkVESVJFQ1RfT1BFUkFUSU9OX1BFTkRJTkciLCJSRUpFQ1RFRF9DUkVERU5USUFMIiwiU0VDT05EX0ZBQ1RPUl9BTFJFQURZX0VOUk9MTEVEIiwiU0VDT05EX0ZBQ1RPUl9MSU1JVF9FWENFRURFRCIsIlRFTkFOVF9JRF9NSVNNQVRDSCIsIlRJTUVPVVQiLCJUT0tFTl9FWFBJUkVEIiwiVE9PX01BTllfQVRURU1QVFNfVFJZX0xBVEVSIiwiVU5BVVRIT1JJWkVEX0RPTUFJTiIsIlVOU1VQUE9SVEVEX0ZJUlNUX0ZBQ1RPUiIsIlVOU1VQUE9SVEVEX1BFUlNJU1RFTkNFIiwiVU5TVVBQT1JURURfVEVOQU5UX09QRVJBVElPTiIsIlVOVkVSSUZJRURfRU1BSUwiLCJVU0VSX0NBTkNFTExFRCIsIlVTRVJfREVMRVRFRCIsIlVTRVJfRElTQUJMRUQiLCJVU0VSX01JU01BVENIIiwiVVNFUl9TSUdORURfT1VUIiwiV0VBS19QQVNTV09SRCIsIldFQl9TVE9SQUdFX1VOU1VQUE9SVEVEIiwiQUxSRUFEWV9JTklUSUFMSVpFRCIsIlJFQ0FQVENIQV9OT1RfRU5BQkxFRCIsIk1JU1NJTkdfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfVE9LRU4iLCJJTlZBTElEX1JFQ0FQVENIQV9BQ1RJT04iLCJNSVNTSU5HX0NMSUVOVF9UWVBFIiwiTUlTU0lOR19SRUNBUFRDSEFfVkVSU0lPTiIsIklOVkFMSURfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFUV9UWVBFIiwiSU5WQUxJRF9IT1NUSU5HX0xJTktfRE9NQUlOIiwibG9nQ2xpZW50IiwiaW1wb3J0X2xvZ2dlciIsIkxvZ2dlciIsIl9sb2dXYXJuIiwibXNnIiwiYXJncyIsImxvZ0xldmVsIiwiTG9nTGV2ZWwiLCJXQVJOIiwid2FybiIsImltcG9ydF9hcHAiLCJTREtfVkVSU0lPTiIsIl9sb2dFcnJvciIsIkVSUk9SIiwiZXJyb3IiLCJfZmFpbCIsImF1dGhPckNvZGUiLCJyZXN0IiwiY3JlYXRlRXJyb3JJbnRlcm5hbCIsIl9jcmVhdGVFcnJvciIsIl9lcnJvcldpdGhDdXN0b21NZXNzYWdlIiwiYXV0aCIsImNvZGUiLCJtZXNzYWdlIiwiZXJyb3JNYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJmYWN0b3J5IiwiY3JlYXRlIiwiYXBwTmFtZSIsIm5hbWUiLCJfc2VydmVyQXBwQ3VycmVudFVzZXJPcGVyYXRpb25Ob3RTdXBwb3J0ZWRFcnJvciIsIl9hc3NlcnRJbnN0YW5jZU9mIiwib2JqZWN0IiwiaW5zdGFuY2UiLCJjb25zdHJ1Y3Rvckluc3RhbmNlIiwiY29uc3RydWN0b3IiLCJmdWxsUGFyYW1zIiwic2xpY2UiLCJfZXJyb3JGYWN0b3J5IiwiX2Fzc2VydCIsImFzc2VydGlvbiIsImRlYnVnRmFpbCIsImZhaWx1cmUiLCJFcnJvciIsImRlYnVnQXNzZXJ0IiwiX2dldEN1cnJlbnRVcmwiLCJzZWxmIiwiX2EiLCJsb2NhdGlvbiIsImhyZWYiLCJfaXNIdHRwT3JIdHRwcyIsIl9nZXRDdXJyZW50U2NoZW1lIiwicHJvdG9jb2wiLCJfaXNPbmxpbmUiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJpc0Jyb3dzZXJFeHRlbnNpb24iLCJfZ2V0VXNlckxhbmd1YWdlIiwibmF2aWdhdG9yTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsIkRlbGF5Iiwic2hvcnREZWxheSIsImxvbmdEZWxheSIsImlzTW9iaWxlIiwiaXNNb2JpbGVDb3Jkb3ZhIiwiaXNSZWFjdE5hdGl2ZSIsImdldCIsIk1hdGgiLCJtaW4iLCJfZW11bGF0b3JVcmwiLCJjb25maWciLCJwYXRoIiwiZW11bGF0b3IiLCJ1cmwiLCJzdGFydHNXaXRoIiwiRmV0Y2hQcm92aWRlciIsImluaXRpYWxpemUiLCJmZXRjaEltcGwiLCJoZWFkZXJzSW1wbCIsInJlc3BvbnNlSW1wbCIsImZldGNoIiwiZ2xvYmFsVGhpcyIsImhlYWRlcnMiLCJIZWFkZXJzIiwicmVzcG9uc2UiLCJSZXNwb25zZSIsIlNFUlZFUl9FUlJPUl9NQVAiLCJDb29raWVBdXRoUHJveGllZEVuZHBvaW50cyIsIkRFRkFVTFRfQVBJX1RJTUVPVVRfTVMiLCJfYWRkVGlkSWZOZWNlc3NhcnkiLCJyZXF1ZXN0IiwidGVuYW50SWQiLCJfcGVyZm9ybUFwaVJlcXVlc3QiLCJtZXRob2QiLCJjdXN0b21FcnJvck1hcCIsIl9wZXJmb3JtRmV0Y2hXaXRoRXJyb3JIYW5kbGluZyIsImJvZHkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJxdWVyeXN0cmluZyIsImtleSIsImFwaUtleSIsIl9nZXRBZGRpdGlvbmFsSGVhZGVycyIsImxhbmd1YWdlQ29kZSIsImZldGNoQXJncyIsImlzQ2xvdWRmbGFyZVdvcmtlciIsInJlZmVycmVyUG9saWN5IiwiZW11bGF0b3JDb25maWciLCJpc0Nsb3VkV29ya3N0YXRpb24iLCJob3N0IiwiY3JlZGVudGlhbHMiLCJfZ2V0RmluYWxUYXJnZXQiLCJhcGlIb3N0IiwiZmV0Y2hGbiIsIl9jYW5Jbml0RW11bGF0b3IiLCJuZXR3b3JrVGltZW91dCIsIk5ldHdvcmtUaW1lb3V0IiwiUHJvbWlzZSIsInJhY2UiLCJwcm9taXNlIiwiY2xlYXJOZXR3b3JrVGltZW91dCIsImpzb24iLCJfbWFrZVRhZ2dlZEVycm9yIiwib2siLCJlcnJvck1lc3NhZ2UiLCJzZXJ2ZXJFcnJvckNvZGUiLCJzZXJ2ZXJFcnJvck1lc3NhZ2UiLCJzcGxpdCIsImF1dGhFcnJvciIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImUiLCJGaXJlYmFzZUVycm9yIiwiU3RyaW5nIiwiX3BlcmZvcm1TaWduSW5SZXF1ZXN0Iiwic2VydmVyUmVzcG9uc2UiLCJfc2VydmVyUmVzcG9uc2UiLCJiYXNlIiwiYXV0aEludGVybmFsIiwiZmluYWxUYXJnZXQiLCJhcGlTY2hlbWUiLCJpbmNsdWRlcyIsIl9wZXJzaXN0ZW5jZU1hbmFnZXJBdmFpbGFibGUiLCJfZ2V0UGVyc2lzdGVuY2VUeXBlIiwiY29va2llUGVyc2lzdGVuY2UiLCJfZ2V0UGVyc2lzdGVuY2UiLCJ0b1N0cmluZyIsIl9wYXJzZUVuZm9yY2VtZW50U3RhdGUiLCJlbmZvcmNlbWVudFN0YXRlU3RyIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJfIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImVycm9yUGFyYW1zIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImN1c3RvbURhdGEiLCJfdG9rZW5SZXNwb25zZSIsImlzVjIiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJpc0VudGVycHJpc2UiLCJlbnRlcnByaXNlIiwiUmVjYXB0Y2hhQ29uZmlnIiwic2l0ZUtleSIsInJlY2FwdGNoYUVuZm9yY2VtZW50U3RhdGUiLCJyZWNhcHRjaGFLZXkiLCJnZXRQcm92aWRlckVuZm9yY2VtZW50U3RhdGUiLCJwcm92aWRlclN0ciIsImxlbmd0aCIsInByb3ZpZGVyIiwiZW5mb3JjZW1lbnRTdGF0ZSIsImlzUHJvdmlkZXJFbmFibGVkIiwiaXNBbnlQcm92aWRlckVuYWJsZWQiLCJnZXRSZWNhcHRjaGFQYXJhbXMiLCJyZWNhcHRjaGFTaXRlS2V5IiwiZ2V0UmVjYXB0Y2hhQ29uZmlnIiwiZGVsZXRlQWNjb3VudCIsImRlbGV0ZUxpbmtlZEFjY291bnRzIiwiZ2V0QWNjb3VudEluZm8iLCJ1dGNUaW1lc3RhbXBUb0RhdGVTdHJpbmciLCJ1dGNUaW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsIk51bWJlciIsImlzTmFOIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwidXNlciIsImZvcmNlUmVmcmVzaCIsImdldE1vZHVsYXJJbnN0YW5jZSIsInVzZXJJbnRlcm5hbCIsInRva2VuIiwiY2xhaW1zIiwiX3BhcnNlVG9rZW4iLCJleHAiLCJhdXRoX3RpbWUiLCJpYXQiLCJmaXJlYmFzZSIsInNpZ25JblByb3ZpZGVyIiwiYXV0aFRpbWUiLCJzZWNvbmRzU3RyaW5nVG9NaWxsaXNlY29uZHMiLCJpc3N1ZWRBdFRpbWUiLCJleHBpcmF0aW9uVGltZSIsInNpZ25JblNlY29uZEZhY3RvciIsInNlY29uZHMiLCJhbGdvcml0aG0iLCJwYXlsb2FkIiwic2lnbmF0dXJlIiwiZGVjb2RlZCIsImJhc2U2NERlY29kZSIsInBhcnNlIiwiX3Rva2VuRXhwaXJlc0luIiwicGFyc2VkVG9rZW4iLCJfbG9nb3V0SWZJbnZhbGlkYXRlZCIsImJ5cGFzc0F1dGhTdGF0ZSIsImlzVXNlckludmFsaWRhdGVkIiwiY3VycmVudFVzZXIiLCJQcm9hY3RpdmVSZWZyZXNoIiwiaXNSdW5uaW5nIiwidGltZXJJZCIsImVycm9yQmFja29mZiIsIl9zdGFydCIsInNjaGVkdWxlIiwiX3N0b3AiLCJnZXRJbnRlcnZhbCIsIndhc0Vycm9yIiwiaW50ZXJ2YWwiLCJleHBUaW1lIiwic3RzVG9rZW5NYW5hZ2VyIiwibm93IiwibWF4IiwiaXRlcmF0aW9uIiwiVXNlck1ldGFkYXRhIiwiY3JlYXRlZEF0IiwibGFzdExvZ2luQXQiLCJfaW5pdGlhbGl6ZVRpbWUiLCJsYXN0U2lnbkluVGltZSIsImNyZWF0aW9uVGltZSIsIl9jb3B5IiwibWV0YWRhdGEiLCJ0b0pTT04iLCJfcmVsb2FkV2l0aG91dFNhdmluZyIsImlkVG9rZW4iLCJ1c2VycyIsImNvcmVBY2NvdW50IiwiX25vdGlmeVJlbG9hZExpc3RlbmVyIiwibmV3UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJVc2VySW5mbyIsImV4dHJhY3RQcm92aWRlckRhdGEiLCJwcm92aWRlckRhdGEiLCJtZXJnZVByb3ZpZGVyRGF0YSIsIm9sZElzQW5vbnltb3VzIiwiaXNBbm9ueW1vdXMiLCJuZXdJc0Fub255bW91cyIsInBhc3N3b3JkSGFzaCIsInVwZGF0ZXMiLCJ1aWQiLCJsb2NhbElkIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsInBob3RvVXJsIiwiZW1haWxWZXJpZmllZCIsIl9wZXJzaXN0VXNlcklmQ3VycmVudCIsIl9ub3RpZnlMaXN0ZW5lcnNJZkN1cnJlbnQiLCJvcmlnaW5hbCIsIm5ld0RhdGEiLCJkZWR1cGVkIiwiZmlsdGVyIiwibyIsInNvbWUiLCJuIiwicHJvdmlkZXJJZCIsInByb3ZpZGVycyIsIm1hcCIsImltcG9ydF90c2xpYiIsIl9fcmVzdCIsInJhd0lkIiwicmVxdWVzdFN0c1Rva2VuIiwicmVmcmVzaFRva2VuIiwidG9rZW5BcGlIb3N0Iiwib3B0aW9ucyIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlc0luIiwiZXhwaXJlc19pbiIsInJlZnJlc2hfdG9rZW4iLCJyZXZva2VUb2tlbiIsIlN0c1Rva2VuTWFuYWdlciIsImlzRXhwaXJlZCIsInVwZGF0ZUZyb21TZXJ2ZXJSZXNwb25zZSIsInVwZGF0ZVRva2Vuc0FuZEV4cGlyYXRpb24iLCJ1cGRhdGVGcm9tSWRUb2tlbiIsImdldFRva2VuIiwicmVmcmVzaCIsImNsZWFyUmVmcmVzaFRva2VuIiwib2xkVG9rZW4iLCJleHBpcmVzSW5TZWMiLCJmcm9tSlNPTiIsIm1hbmFnZXIiLCJfYXNzaWduIiwiX2Nsb25lIiwiX3BlcmZvcm1SZWZyZXNoIiwiYXNzZXJ0U3RyaW5nT3JVbmRlZmluZWQiLCJVc2VySW1wbCIsIm9wdCIsInByb2FjdGl2ZVJlZnJlc2giLCJyZWxvYWRVc2VySW5mbyIsInJlbG9hZExpc3RlbmVyIiwidXNlckluZm8iLCJuZXdVc2VyIiwiX29uUmVsb2FkIiwiY2FsbGJhY2siLCJfc3RhcnRQcm9hY3RpdmVSZWZyZXNoIiwiX3N0b3BQcm9hY3RpdmVSZWZyZXNoIiwiX3VwZGF0ZVRva2Vuc0lmTmVjZXNzYXJ5IiwicmVsb2FkMiIsInRva2Vuc1JlZnJlc2hlZCIsImRlbGV0ZSIsIl9pc0ZpcmViYXNlU2VydmVyQXBwIiwiYXBwIiwiX3JlZGlyZWN0RXZlbnRJZCIsIl9mcm9tSlNPTiIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiX2YiLCJfZyIsIl9oIiwicGxhaW5PYmplY3RUb2tlbk1hbmFnZXIiLCJBcnJheSIsImlzQXJyYXkiLCJfZnJvbUlkVG9rZW5SZXNwb25zZSIsImlkVG9rZW5SZXNwb25zZSIsIl9mcm9tR2V0QWNjb3VudEluZm9SZXNwb25zZSIsImluc3RhbmNlQ2FjaGUiLCJNYXAiLCJfZ2V0SW5zdGFuY2UiLCJjbHMiLCJGdW5jdGlvbiIsInNldCIsIkluTWVtb3J5UGVyc2lzdGVuY2UiLCJ0eXBlIiwic3RvcmFnZSIsIl9pc0F2YWlsYWJsZSIsIl9zZXQiLCJ2YWx1ZSIsIl9nZXQiLCJfcmVtb3ZlIiwiX2FkZExpc3RlbmVyIiwiX2tleSIsIl9saXN0ZW5lciIsIl9yZW1vdmVMaXN0ZW5lciIsIl9wZXJzaXN0ZW5jZUtleU5hbWUiLCJQZXJzaXN0ZW5jZVVzZXJNYW5hZ2VyIiwicGVyc2lzdGVuY2UiLCJ1c2VyS2V5IiwibmFtZTIiLCJmdWxsVXNlcktleSIsImZ1bGxQZXJzaXN0ZW5jZUtleSIsImJvdW5kRXZlbnRIYW5kbGVyIiwiX29uU3RvcmFnZUV2ZW50IiwiYmluZCIsInNldEN1cnJlbnRVc2VyIiwiZ2V0Q3VycmVudFVzZXIiLCJibG9iIiwiY2F0Y2giLCJyZW1vdmVDdXJyZW50VXNlciIsInNhdmVQZXJzaXN0ZW5jZUZvclJlZGlyZWN0IiwibmV3UGVyc2lzdGVuY2UiLCJwZXJzaXN0ZW5jZUhpZXJhcmNoeSIsImF2YWlsYWJsZVBlcnNpc3RlbmNlcyIsImFsbCIsInNlbGVjdGVkUGVyc2lzdGVuY2UiLCJ1c2VyVG9NaWdyYXRlIiwibWlncmF0aW9uSGllcmFyY2h5IiwicCIsIl9zaG91bGRBbGxvd01pZ3JhdGlvbiIsIl9nZXRCcm93c2VyTmFtZSIsInVzZXJBZ2VudCIsInVhIiwiX2lzSUVNb2JpbGUiLCJfaXNGaXJlZm94IiwiX2lzQmxhY2tCZXJyeSIsIl9pc1dlYk9TIiwiX2lzU2FmYXJpIiwiX2lzQ2hyb21lSU9TIiwiX2lzQW5kcm9pZCIsInJlIiwibWF0Y2hlcyIsIm1hdGNoIiwiZ2V0VUEiLCJ0ZXN0IiwiX2lzSU9TIiwiX2lzSU9TN09yOCIsIl9pc0lPU1N0YW5kYWxvbmUiLCJ3aW5kb3ciLCJzdGFuZGFsb25lIiwiX2lzSUUxMCIsImlzSUUiLCJkb2N1bWVudCIsImRvY3VtZW50TW9kZSIsIl9pc01vYmlsZUJyb3dzZXIiLCJfZ2V0Q2xpZW50VmVyc2lvbiIsImNsaWVudFBsYXRmb3JtIiwiZnJhbWV3b3JrcyIsInJlcG9ydGVkUGxhdGZvcm0iLCJyZXBvcnRlZEZyYW1ld29ya3MiLCJqb2luIiwiQXV0aE1pZGRsZXdhcmVRdWV1ZSIsInF1ZXVlIiwicHVzaENhbGxiYWNrIiwib25BYm9ydCIsIndyYXBwZWRDYWxsYmFjayIsInJlc29sdmUiLCJyZXN1bHQiLCJwdXNoIiwiaW5kZXgiLCJydW5NaWRkbGV3YXJlIiwibmV4dFVzZXIiLCJvbkFib3J0U3RhY2siLCJiZWZvcmVTdGF0ZUNhbGxiYWNrIiwicmV2ZXJzZSIsIm9yaWdpbmFsTWVzc2FnZSIsIl9nZXRQYXNzd29yZFBvbGljeSIsIk1JTklNVU1fTUlOX1BBU1NXT1JEX0xFTkdUSCIsIlBhc3N3b3JkUG9saWN5SW1wbCIsInJlc3BvbnNlT3B0aW9ucyIsImN1c3RvbVN0cmVuZ3RoT3B0aW9ucyIsIm1pblBhc3N3b3JkTGVuZ3RoIiwibWF4UGFzc3dvcmRMZW5ndGgiLCJjb250YWluc0xvd2VyY2FzZUNoYXJhY3RlciIsImNvbnRhaW5zTG93ZXJjYXNlTGV0dGVyIiwiY29udGFpbnNVcHBlcmNhc2VDaGFyYWN0ZXIiLCJjb250YWluc1VwcGVyY2FzZUxldHRlciIsImNvbnRhaW5zTnVtZXJpY0NoYXJhY3RlciIsImNvbnRhaW5zTm9uQWxwaGFudW1lcmljQ2hhcmFjdGVyIiwiYWxsb3dlZE5vbkFscGhhbnVtZXJpY0NoYXJhY3RlcnMiLCJmb3JjZVVwZ3JhZGVPblNpZ25pbiIsInNjaGVtYVZlcnNpb24iLCJwYXNzd29yZCIsInN0YXR1cyIsImlzVmFsaWQiLCJwYXNzd29yZFBvbGljeSIsInZhbGlkYXRlUGFzc3dvcmRMZW5ndGhPcHRpb25zIiwidmFsaWRhdGVQYXNzd29yZENoYXJhY3Rlck9wdGlvbnMiLCJtZWV0c01pblBhc3N3b3JkTGVuZ3RoIiwibWVldHNNYXhQYXNzd29yZExlbmd0aCIsInVwZGF0ZVBhc3N3b3JkQ2hhcmFjdGVyT3B0aW9uc1N0YXR1c2VzIiwicGFzc3dvcmRDaGFyIiwiaSIsImNoYXJBdCIsIkF1dGhJbXBsIiwiaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyIiwiYXBwQ2hlY2tTZXJ2aWNlUHJvdmlkZXIiLCJvcGVyYXRpb25zIiwiYXV0aFN0YXRlU3Vic2NyaXB0aW9uIiwiU3Vic2NyaXB0aW9uIiwiaWRUb2tlblN1YnNjcmlwdGlvbiIsImJlZm9yZVN0YXRlUXVldWUiLCJyZWRpcmVjdFVzZXIiLCJpc1Byb2FjdGl2ZVJlZnJlc2hFbmFibGVkIiwiRVhQRUNURURfUEFTU1dPUkRfUE9MSUNZX1NDSEVNQV9WRVJTSU9OIiwiX2lzSW5pdGlhbGl6ZWQiLCJfZGVsZXRlZCIsIl9pbml0aWFsaXphdGlvblByb21pc2UiLCJfcG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiX2FnZW50UmVjYXB0Y2hhQ29uZmlnIiwiX3RlbmFudFJlY2FwdGNoYUNvbmZpZ3MiLCJfcHJvamVjdFBhc3N3b3JkUG9saWN5IiwiX3RlbmFudFBhc3N3b3JkUG9saWNpZXMiLCJfcmVzb2x2ZVBlcnNpc3RlbmNlTWFuYWdlckF2YWlsYWJsZSIsImxhc3ROb3RpZmllZFVpZCIsInNldHRpbmdzIiwiYXBwVmVyaWZpY2F0aW9uRGlzYWJsZWRGb3JUZXN0aW5nIiwiY2xpZW50VmVyc2lvbiIsInNka0NsaWVudFZlcnNpb24iLCJfaW5pdGlhbGl6ZVdpdGhQZXJzaXN0ZW5jZSIsInBvcHVwUmVkaXJlY3RSZXNvbHZlciIsInBlcnNpc3RlbmNlTWFuYWdlciIsImNhbGwiLCJfc2hvdWxkSW5pdFByb2FjdGl2ZWx5IiwiX2luaXRpYWxpemUiLCJpbml0aWFsaXplQ3VycmVudFVzZXIiLCJhc3NlcnRlZFBlcnNpc3RlbmNlIiwiX2N1cnJlbnRVc2VyIiwiX3VwZGF0ZUN1cnJlbnRVc2VyIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyRnJvbUlkVG9rZW4iLCJkaXJlY3RseVNldEN1cnJlbnRVc2VyIiwiZXJyIiwiY29uc29sZSIsImF1dGhJZFRva2VuIiwidGhlbiIsInByZXZpb3VzbHlTdG9yZWRVc2VyIiwiZnV0dXJlQ3VycmVudFVzZXIiLCJuZWVkc1RvY2hlY2tNaWRkbGV3YXJlIiwiYXV0aERvbWFpbiIsImdldE9ySW5pdFJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwicmVkaXJlY3RVc2VyRXZlbnRJZCIsInN0b3JlZFVzZXJFdmVudElkIiwidHJ5UmVkaXJlY3RTaWduSW4iLCJfb3ZlcnJpZGVSZWRpcmVjdFJlc3VsdCIsInJlbG9hZEFuZFNldEN1cnJlbnRVc2VyT3JDbGVhciIsInJlZGlyZWN0UmVzb2x2ZXIiLCJfY29tcGxldGVSZWRpcmVjdEZuIiwiX3NldFJlZGlyZWN0VXNlciIsIl9kZWxldGUiLCJ1c2VyRXh0ZXJuIiwic2tpcEJlZm9yZVN0YXRlQ2FsbGJhY2tzIiwibm90aWZ5QXV0aExpc3RlbmVycyIsInJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwiX2dldFJlY2FwdGNoYUNvbmZpZyIsIl9nZXRQYXNzd29yZFBvbGljeUludGVybmFsIiwiX3VwZGF0ZVBhc3N3b3JkUG9saWN5IiwiX3VwZGF0ZUVycm9yTWFwIiwibmV4dE9yT2JzZXJ2ZXIiLCJjb21wbGV0ZWQiLCJyZWdpc3RlclN0YXRlTGlzdGVuZXIiLCJhdXRoU3RhdGVSZWFkeSIsInVuc3Vic2NyaWJlIiwidG9rZW5UeXBlIiwicmVkaXJlY3RNYW5hZ2VyIiwicmVzb2x2ZXIiLCJfcmVkaXJlY3RQZXJzaXN0ZW5jZSIsIl9yZWRpcmVjdFVzZXJGb3JJZCIsImlkIiwibmV4dCIsImN1cnJlbnRVaWQiLCJzdWJzY3JpcHRpb24iLCJjYiIsImlzVW5zdWJzY3JpYmVkIiwiYWRkT2JzZXJ2ZXIiLCJhY3Rpb24iLCJfbG9nRnJhbWV3b3JrIiwiZnJhbWV3b3JrIiwic29ydCIsIl9nZXRGcmFtZXdvcmtzIiwiYXBwSWQiLCJoZWFydGJlYXRzSGVhZGVyIiwiZ2V0SW1tZWRpYXRlIiwib3B0aW9uYWwiLCJnZXRIZWFydGJlYXRzSGVhZGVyIiwiYXBwQ2hlY2tUb2tlbiIsIl9nZXRBcHBDaGVja1Rva2VuIiwiYXBwQ2hlY2tUb2tlblJlc3VsdCIsIl9jYXN0QXV0aCIsIm9ic2VydmVyIiwiY3JlYXRlU3Vic2NyaWJlIiwiZXh0ZXJuYWxKU1Byb3ZpZGVyIiwibG9hZEpTIiwicmVjYXB0Y2hhVjJTY3JpcHQiLCJyZWNhcHRjaGFFbnRlcnByaXNlU2NyaXB0IiwiZ2FwaVNjcmlwdCIsIl9zZXRFeHRlcm5hbEpTUHJvdmlkZXIiLCJfbG9hZEpTIiwiX3JlY2FwdGNoYVYyU2NyaXB0VXJsIiwiX3JlY2FwdGNoYUVudGVycHJpc2VTY3JpcHRVcmwiLCJfZ2FwaVNjcmlwdFVybCIsIl9nZW5lcmF0ZUNhbGxiYWNrTmFtZSIsInByZWZpeCIsImZsb29yIiwicmFuZG9tIiwiX1NPTFZFX1RJTUVfTVMiLCJfRVhQSVJBVElPTl9USU1FX01TIiwiX1dJREdFVF9JRF9TVEFSVCIsIk1vY2tSZUNhcHRjaGEiLCJjb3VudGVyIiwiX3dpZGdldHMiLCJyZW5kZXIiLCJjb250YWluZXIiLCJwYXJhbWV0ZXJzIiwiTW9ja1dpZGdldCIsInJlc2V0Iiwib3B0V2lkZ2V0SWQiLCJleGVjdXRlIiwiTW9ja0dyZUNBUFRDSEFUb3BMZXZlbCIsIk1vY2tHcmVDQVBUQ0hBIiwicmVhZHkiLCJfc2l0ZUtleSIsIl9vcHRpb25zIiwiX2NvbnRhaW5lciIsIl9wYXJhbWV0ZXJzIiwiY29udGFpbmVyT3JJZCIsImRlbGV0ZWQiLCJyZXNwb25zZVRva2VuIiwiY2xpY2tIYW5kbGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpc1Zpc2libGUiLCJzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrSWZEZWxldGVkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdlbmVyYXRlUmFuZG9tQWxwaGFOdW1lcmljU3RyaW5nIiwiZXhwaXJlZENhbGxiYWNrIiwibGVuIiwiY2hhcnMiLCJhbGxvd2VkQ2hhcnMiLCJSRUNBUFRDSEFfRU5URVJQUklTRV9WRVJJRklFUl9UWVBFIiwiRkFLRV9UT0tFTiIsIlJlY2FwdGNoYUVudGVycHJpc2VWZXJpZmllciIsImF1dGhFeHRlcm4iLCJ2ZXJpZnkiLCJyZXRyaWV2ZVNpdGVLZXkiLCJjbGllbnRUeXBlIiwidmVyc2lvbiIsInJldHJpZXZlUmVjYXB0Y2hhVG9rZW4iLCJtb2NrUmVjYXB0Y2hhIiwiaW5qZWN0UmVjYXB0Y2hhRmllbGRzIiwiaXNDYXB0Y2hhUmVzcCIsImlzRmFrZVRva2VuIiwidmVyaWZpZXIiLCJjYXB0Y2hhUmVzcG9uc2UiLCJuZXdSZXF1ZXN0IiwicGhvbmVFbnJvbGxtZW50SW5mbyIsInJlY2FwdGNoYVRva2VuIiwicGhvbmVTaWduSW5JbmZvIiwiaGFuZGxlUmVjYXB0Y2hhRmxvdyIsImF1dGhJbnN0YW5jZSIsImFjdGlvbk5hbWUiLCJhY3Rpb25NZXRob2QiLCJyZWNhcHRjaGFBdXRoUHJvdmlkZXIiLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYSIsImxvZyIsIl9hMiIsInJlcXVlc3RXaXRoUmVjYXB0Y2hhRmllbGRzIiwiX2luaXRpYWxpemVSZWNhcHRjaGFDb25maWciLCJkZXBzIiwiX2dldFByb3ZpZGVyIiwiaXNJbml0aWFsaXplZCIsImF1dGgyIiwiaW5pdGlhbE9wdGlvbnMiLCJnZXRPcHRpb25zIiwiZGVlcEVxdWFsIiwiX2luaXRpYWxpemVBdXRoSW5zdGFuY2UiLCJoaWVyYXJjaHkiLCJkaXNhYmxlV2FybmluZ3MiLCJleHRyYWN0UHJvdG9jb2wiLCJwb3J0IiwiZXh0cmFjdEhvc3RBbmRQb3J0IiwicG9ydFN0ciIsImZyZWV6ZSIsInBpbmdTZXJ2ZXIiLCJ1cGRhdGVFbXVsYXRvckJhbm5lciIsImVtaXRFbXVsYXRvcldhcm5pbmciLCJwcm90b2NvbEVuZCIsImluZGV4T2YiLCJzdWJzdHIiLCJhdXRob3JpdHkiLCJleGVjIiwiaG9zdEFuZFBvcnQiLCJwb3AiLCJicmFja2V0ZWRJUHY2IiwicGFyc2VQb3J0IiwiYXR0YWNoQmFubmVyIiwiZWwiLCJjcmVhdGVFbGVtZW50Iiwic3R5Iiwic3R5bGUiLCJpbm5lclRleHQiLCJwb3NpdGlvbiIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJib3R0b20iLCJsZWZ0IiwibWFyZ2luIiwiekluZGV4IiwidGV4dEFsaWduIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJpbmZvIiwicmVhZHlTdGF0ZSIsInNpZ25Jbk1ldGhvZCIsIl9nZXRJZFRva2VuUmVzcG9uc2UiLCJfYXV0aCIsIl9saW5rVG9JZFRva2VuIiwiX2lkVG9rZW4iLCJfZ2V0UmVhdXRoZW50aWNhdGlvblJlc29sdmVyIiwicmVzZXRQYXNzd29yZCIsInVwZGF0ZUVtYWlsUGFzc3dvcmQiLCJsaW5rRW1haWxQYXNzd29yZCIsImFwcGx5QWN0aW9uQ29kZSQxIiwic2lnbkluV2l0aFBhc3N3b3JkIiwic2VuZE9vYkNvZGUiLCJzZW5kRW1haWxWZXJpZmljYXRpb24kMSIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwkMSIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCQxIiwidmVyaWZ5QW5kQ2hhbmdlRW1haWwiLCJzaWduSW5XaXRoRW1haWxMaW5rJDEiLCJzaWduSW5XaXRoRW1haWxMaW5rRm9yTGlua2luZyIsIl9lbWFpbCIsIl9wYXNzd29yZCIsIl90ZW5hbnRJZCIsIl9mcm9tRW1haWxBbmRQYXNzd29yZCIsIl9mcm9tRW1haWxBbmRDb2RlIiwib29iQ29kZSIsIm9iaiIsInJldHVyblNlY3VyZVRva2VuIiwic2lnbkluV2l0aElkcCIsIklEUF9SRVFVRVNUX1VSSSQxIiwicGVuZGluZ1Rva2VuIiwiX2Zyb21QYXJhbXMiLCJjcmVkIiwibm9uY2UiLCJvYXV0aFRva2VuIiwib2F1dGhUb2tlblNlY3JldCIsInNlY3JldCIsImJ1aWxkUmVxdWVzdCIsImF1dG9DcmVhdGUiLCJyZXF1ZXN0VXJpIiwicG9zdEJvZHkiLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlIiwic2lnbkluV2l0aFBob25lTnVtYmVyJDEiLCJsaW5rV2l0aFBob25lTnVtYmVyJDEiLCJ0ZW1wb3JhcnlQcm9vZiIsIlZFUklGWV9QSE9ORV9OVU1CRVJfRk9SX0VYSVNUSU5HX0VSUk9SX01BUF8iLCJ2ZXJpZnlQaG9uZU51bWJlckZvckV4aXN0aW5nIiwiYXBpUmVxdWVzdCIsIm9wZXJhdGlvbiIsIl9mcm9tVmVyaWZpY2F0aW9uIiwidmVyaWZpY2F0aW9uSWQiLCJ2ZXJpZmljYXRpb25Db2RlIiwiX2Zyb21Ub2tlblJlc3BvbnNlIiwiX21ha2VWZXJpZmljYXRpb25SZXF1ZXN0Iiwic2Vzc2lvbkluZm8iLCJwYXJzZU1vZGUiLCJtb2RlIiwicGFyc2VEZWVwTGluayIsImxpbmsiLCJxdWVyeXN0cmluZ0RlY29kZSIsImV4dHJhY3RRdWVyeXN0cmluZyIsImRvdWJsZURlZXBMaW5rIiwiaU9TRGVlcExpbmsiLCJpT1NEb3VibGVEZWVwTGluayIsImFjdGlvbkxpbmsiLCJzZWFyY2hQYXJhbXMiLCJjb250aW51ZVVybCIsInBhcnNlTGluayIsIlBST1ZJREVSX0lEIiwiY3JlZGVudGlhbCIsImNyZWRlbnRpYWxXaXRoTGluayIsImVtYWlsTGluayIsImFjdGlvbkNvZGVVcmwiLCJFTUFJTF9QQVNTV09SRF9TSUdOX0lOX01FVEhPRCIsIkVNQUlMX0xJTktfU0lHTl9JTl9NRVRIT0QiLCJGZWRlcmF0ZWRBdXRoUHJvdmlkZXIiLCJkZWZhdWx0TGFuZ3VhZ2VDb2RlIiwiY3VzdG9tUGFyYW1ldGVycyIsInNldERlZmF1bHRMYW5ndWFnZSIsInNldEN1c3RvbVBhcmFtZXRlcnMiLCJjdXN0b21PQXV0aFBhcmFtZXRlcnMiLCJnZXRDdXN0b21QYXJhbWV0ZXJzIiwiQmFzZU9BdXRoUHJvdmlkZXIiLCJzY29wZXMiLCJhZGRTY29wZSIsInNjb3BlIiwiZ2V0U2NvcGVzIiwiY3JlZGVudGlhbEZyb21KU09OIiwiX2NyZWRlbnRpYWwiLCJyYXdOb25jZSIsImNyZWRlbnRpYWxGcm9tUmVzdWx0IiwidXNlckNyZWRlbnRpYWwiLCJvYXV0aENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiY3JlZGVudGlhbEZyb21FcnJvciIsInRva2VuUmVzcG9uc2UiLCJvYXV0aElkVG9rZW4iLCJvYXV0aEFjY2Vzc1Rva2VuIiwiRkFDRUJPT0tfU0lHTl9JTl9NRVRIT0QiLCJjcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIkdPT0dMRV9TSUdOX0lOX01FVEhPRCIsIkdJVEhVQl9TSUdOX0lOX01FVEhPRCIsIklEUF9SRVFVRVNUX1VSSSIsIlNBTUxBdXRoQ3JlZGVudGlhbCIsIl9jcmVhdGUiLCJTQU1MX1BST1ZJREVSX1BSRUZJWCIsInNhbWxDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIlRXSVRURVJfU0lHTl9JTl9NRVRIT0QiLCJzaWduVXAiLCJVc2VyQ3JlZGVudGlhbEltcGwiLCJvcGVyYXRpb25UeXBlIiwicHJvdmlkZXJJZEZvclJlc3BvbnNlIiwidXNlckNyZWQiLCJfZm9yT3BlcmF0aW9uIiwiTXVsdGlGYWN0b3JFcnJvciIsInNldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiX2Zyb21FcnJvckFuZE9wZXJhdGlvbiIsIl9wcm9jZXNzQ3JlZGVudGlhbFNhdmluZ01mYUNvbnRleHRJZk5lY2Vzc2FyeSIsImlkVG9rZW5Qcm92aWRlciIsInByb3ZpZGVyRGF0YUFzTmFtZXMiLCJTZXQiLCJwaWQiLCJfYXNzZXJ0TGlua2VkU3RhdHVzIiwiZGVsZXRlUHJvdmlkZXIiLCJwcm92aWRlcnNMZWZ0IiwicGQiLCJoYXMiLCJfbGluayQxIiwiZXhwZWN0ZWQiLCJwcm92aWRlcklkcyIsIl9yZWF1dGhlbnRpY2F0ZSIsInBhcnNlZCIsInN1YiIsIl9zaWduSW5XaXRoQ3JlZGVudGlhbCIsInNpZ25JbldpdGhDdXN0b21Ub2tlbiQxIiwiY3VzdG9tVG9rZW4iLCJNdWx0aUZhY3RvckluZm9JbXBsIiwiZmFjdG9ySWQiLCJtZmFFbnJvbGxtZW50SWQiLCJlbnJvbGxtZW50VGltZSIsImVucm9sbGVkQXQiLCJfZnJvbVNlcnZlclJlc3BvbnNlIiwiZW5yb2xsbWVudCIsIlBob25lTXVsdGlGYWN0b3JJbmZvSW1wbCIsIlRvdHBNdWx0aUZhY3RvckluZm9JbXBsIiwicGhvbmVJbmZvIiwiX3NldEFjdGlvbkNvZGVTZXR0aW5nc09uUmVxdWVzdCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsImR5bmFtaWNMaW5rRG9tYWluIiwibGlua0RvbWFpbiIsImNhbkhhbmRsZUNvZGVJbkFwcCIsImhhbmRsZUNvZGVJbkFwcCIsImlPUyIsImJ1bmRsZUlkIiwiaU9TQnVuZGxlSWQiLCJhbmRyb2lkIiwicGFja2FnZU5hbWUiLCJhbmRyb2lkSW5zdGFsbEFwcCIsImluc3RhbGxBcHAiLCJhbmRyb2lkTWluaW11bVZlcnNpb25Db2RlIiwibWluaW11bVZlcnNpb24iLCJhbmRyb2lkUGFja2FnZU5hbWUiLCJyZWNhY2hlUGFzc3dvcmRQb2xpY3kiLCJyZXF1ZXN0VHlwZSIsIm5ld1Bhc3N3b3JkIiwiYXV0aE1vZHVsYXIiLCJuZXdFbWFpbCIsIm1mYUluZm8iLCJtdWx0aUZhY3RvckluZm8iLCJkYXRhIiwicHJldmlvdXNFbWFpbCIsInNpZ25VcFJlc3BvbnNlIiwic2V0QWN0aW9uQ29kZVNldHRpbmdzIiwicmVxdWVzdDIiLCJhY3Rpb25Db2RlU2V0dGluZ3MyIiwiY3JlYXRlQXV0aFVyaSIsImNvbnRpbnVlVXJpIiwiaWRlbnRpZmllciIsInNpZ25pbk1ldGhvZHMiLCJ1cGRhdGVQcm9maWxlJDEiLCJwcm9maWxlUmVxdWVzdCIsInBhc3N3b3JkUHJvdmlkZXIiLCJmaW5kIiwidXBkYXRlRW1haWxPclBhc3N3b3JkIiwicHJvZmlsZSIsInJhd1VzZXJJbmZvIiwiaXNOZXdVc2VyIiwia2luZCIsImZpbHRlcmVkUHJvdmlkZXJJZCIsIkdlbmVyaWNBZGRpdGlvbmFsVXNlckluZm8iLCJGYWNlYm9va0FkZGl0aW9uYWxVc2VySW5mbyIsIkdpdGh1YkFkZGl0aW9uYWxVc2VySW5mbyIsIkdvb2dsZUFkZGl0aW9uYWxVc2VySW5mbyIsIlR3aXR0ZXJBZGRpdGlvbmFsVXNlckluZm8iLCJzY3JlZW5OYW1lIiwiRmVkZXJhdGVkQWRkaXRpb25hbFVzZXJJbmZvV2l0aFVzZXJuYW1lIiwidXNlcm5hbWUiLCJsb2dpbiIsIk11bHRpRmFjdG9yU2Vzc2lvbkltcGwiLCJfZnJvbUlkdG9rZW4iLCJfZnJvbU1mYVBlbmRpbmdDcmVkZW50aWFsIiwibWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtdWx0aUZhY3RvclNlc3Npb24iLCJwZW5kaW5nQ3JlZGVudGlhbCIsIk11bHRpRmFjdG9yUmVzb2x2ZXJJbXBsIiwic2Vzc2lvbiIsImhpbnRzIiwic2lnbkluUmVzb2x2ZXIiLCJfZnJvbUVycm9yIiwibWZhUmVzcG9uc2UiLCJfcHJvY2VzcyIsInJlc29sdmVTaWduSW4iLCJhc3NlcnRpb25FeHRlcm4iLCJlcnJvckludGVybmFsIiwic3RhcnRFbnJvbGxQaG9uZU1mYSIsImZpbmFsaXplRW5yb2xsUGhvbmVNZmEiLCJzdGFydEVucm9sbFRvdHBNZmEiLCJmaW5hbGl6ZUVucm9sbFRvdHBNZmEiLCJ3aXRoZHJhd01mYSIsIk11bHRpRmFjdG9yVXNlckltcGwiLCJlbnJvbGxlZEZhY3RvcnMiLCJfZnJvbVVzZXIiLCJnZXRTZXNzaW9uIiwiZW5yb2xsIiwiZmluYWxpemVNZmFSZXNwb25zZSIsInVuZW5yb2xsIiwiaW5mb09yVWlkIiwibXVsdGlGYWN0b3JVc2VyQ2FjaGUiLCJXZWFrTWFwIiwidXNlck1vZHVsYXIiLCJTVE9SQUdFX0FWQUlMQUJMRV9LRVkiLCJCcm93c2VyUGVyc2lzdGVuY2VDbGFzcyIsInN0b3JhZ2VSZXRyaWV2ZXIiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImdldEl0ZW0iLCJfUE9MTElOR19JTlRFUlZBTF9NUyQxIiwiSUUxMF9MT0NBTF9TVE9SQUdFX1NZTkNfREVMQVkiLCJCcm93c2VyTG9jYWxQZXJzaXN0ZW5jZSIsImxvY2FsU3RvcmFnZSIsImV2ZW50IiwicG9sbCIsIm9uU3RvcmFnZUV2ZW50IiwibGlzdGVuZXJzIiwibG9jYWxDYWNoZSIsInBvbGxUaW1lciIsImZhbGxiYWNrVG9Qb2xsaW5nIiwiZm9yQWxsQ2hhbmdlZEtleXMiLCJrZXlzIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImtleTIiLCJfb2xkVmFsdWUiLCJub3RpZnlMaXN0ZW5lcnMiLCJkZXRhY2hMaXN0ZW5lciIsInN0b3BQb2xsaW5nIiwidHJpZ2dlckxpc3RlbmVycyIsInN0b3JlZFZhbHVlMiIsInN0b3JlZFZhbHVlIiwibGlzdGVuZXIiLCJmcm9tIiwic3RhcnRQb2xsaW5nIiwic2V0SW50ZXJ2YWwiLCJTdG9yYWdlRXZlbnQiLCJjbGVhckludGVydmFsIiwiYXR0YWNoTGlzdGVuZXIiLCJQT0xMSU5HX0lOVEVSVkFMX01TIiwiZ2V0RG9jdW1lbnRDb29raWUiLCJlc2NhcGVkTmFtZSIsIm1hdGNoZXIiLCJSZWdFeHAiLCJjb29raWUiLCJnZXRDb29raWVOYW1lIiwiaXNEZXZNb2RlIiwiQ29va2llUGVyc2lzdGVuY2UiLCJsaXN0ZW5lclVuc3Vic2NyaWJlcyIsIm9yaWdpbmFsVXJsIiwiVVJMIiwib3JpZ2luIiwiaXNTZWN1cmVDb250ZXh0IiwiY29va2llRW5hYmxlZCIsIl92YWx1ZSIsImNvb2tpZVN0b3JlIiwiZXhpc3RpbmdWYWx1ZSIsImNoYW5nZWRDb29raWUiLCJjaGFuZ2VkIiwiY2hhbmdlIiwiZGVsZXRlZENvb2tpZSIsInVuc3Vic2NyaWJlMiIsImxhc3RWYWx1ZSIsImN1cnJlbnRWYWx1ZSIsIkJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UiLCJzZXNzaW9uU3RvcmFnZSIsIl9hbGxTZXR0bGVkIiwicHJvbWlzZXMiLCJmdWxmaWxsZWQiLCJyZWFzb24iLCJSZWNlaXZlciIsImV2ZW50VGFyZ2V0IiwiaGFuZGxlcnNNYXAiLCJoYW5kbGVFdmVudCIsImV4aXN0aW5nSW5zdGFuY2UiLCJyZWNlaXZlcnMiLCJyZWNlaXZlciIsImlzTGlzdGVuaW5ndG8iLCJuZXdJbnN0YW5jZSIsIm1lc3NhZ2VFdmVudCIsImV2ZW50SWQiLCJldmVudFR5cGUiLCJoYW5kbGVycyIsInBvcnRzIiwicG9zdE1lc3NhZ2UiLCJoYW5kbGVyIiwiX3N1YnNjcmliZSIsImV2ZW50SGFuZGxlciIsIl91bnN1YnNjcmliZSIsIl9nZW5lcmF0ZUV2ZW50SWQiLCJkaWdpdHMiLCJTZW5kZXIiLCJ0YXJnZXQiLCJyZW1vdmVNZXNzYWdlSGFuZGxlciIsIm1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJvbk1lc3NhZ2UiLCJjbG9zZSIsIl9zZW5kIiwidGltZW91dCIsIk1lc3NhZ2VDaGFubmVsIiwiY29tcGxldGlvblRpbWVyIiwic3RhcnQiLCJhY2tUaW1lciIsInBvcnQyIiwiZmluYWxseSIsIl93aW5kb3ciLCJfc2V0V2luZG93TG9jYXRpb24iLCJfaXNXb3JrZXIiLCJfZ2V0QWN0aXZlU2VydmljZVdvcmtlciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RyYXRpb24iLCJhY3RpdmUiLCJfZ2V0U2VydmljZVdvcmtlckNvbnRyb2xsZXIiLCJjb250cm9sbGVyIiwiX2dldFdvcmtlckdsb2JhbFNjb3BlIiwiREJfTkFNRSIsIkRCX1ZFUlNJT04iLCJEQl9PQkpFQ1RTVE9SRV9OQU1FIiwiREJfREFUQV9LRVlQQVRIIiwiREJQcm9taXNlIiwidG9Qcm9taXNlIiwiZ2V0T2JqZWN0U3RvcmUiLCJkYiIsImlzUmVhZFdyaXRlIiwidHJhbnNhY3Rpb24iLCJvYmplY3RTdG9yZSIsIl9kZWxldGVEYXRhYmFzZSIsImluZGV4ZWREQiIsImRlbGV0ZURhdGFiYXNlIiwiX29wZW5EYXRhYmFzZSIsIm9wZW4iLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJvYmplY3RTdG9yZU5hbWVzIiwiY29udGFpbnMiLCJfcHV0T2JqZWN0IiwicHV0IiwiZ2V0T2JqZWN0IiwiX2RlbGV0ZU9iamVjdCIsIl9QT0xMSU5HX0lOVEVSVkFMX01TIiwiX1RSQU5TQUNUSU9OX1JFVFJZX0NPVU5UIiwiSW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsInBlbmRpbmdXcml0ZXMiLCJzZW5kZXIiLCJzZXJ2aWNlV29ya2VyUmVjZWl2ZXJBdmFpbGFibGUiLCJhY3RpdmVTZXJ2aWNlV29ya2VyIiwiX3dvcmtlckluaXRpYWxpemF0aW9uUHJvbWlzZSIsImluaXRpYWxpemVTZXJ2aWNlV29ya2VyTWVzc2FnaW5nIiwiX29wZW5EYiIsIl93aXRoUmV0cmllcyIsIm9wIiwibnVtQXR0ZW1wdHMiLCJpbml0aWFsaXplUmVjZWl2ZXIiLCJpbml0aWFsaXplU2VuZGVyIiwiX29yaWdpbiIsIl9wb2xsIiwia2V5UHJvY2Vzc2VkIiwiX2RhdGEiLCJyZXN1bHRzIiwibm90aWZ5U2VydmljZVdvcmtlciIsIl93aXRoUGVuZGluZ1dyaXRlIiwid3JpdGUiLCJnZXRBbGxSZXF1ZXN0IiwiZ2V0QWxsIiwia2V5c0luUmVzdWx0IiwiZmJhc2Vfa2V5IiwibG9jYWxLZXkiLCJzdGFydFNpZ25JblBob25lTWZhIiwiZmluYWxpemVTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluVG90cE1mYSIsIl9KU0xPQURfQ0FMTEJBQ0siLCJORVRXT1JLX1RJTUVPVVRfREVMQVkiLCJSZUNhcHRjaGFMb2FkZXJJbXBsIiwiaG9zdExhbmd1YWdlIiwibGlicmFyeVNlcGFyYXRlbHlMb2FkZWQiLCJsb2FkIiwiaGwiLCJpc0hvc3RMYW5ndWFnZVZhbGlkIiwic2hvdWxkUmVzb2x2ZUltbWVkaWF0ZWx5IiwicmVjYXB0Y2hhIiwid2lkZ2V0SWQiLCJvbmxvYWQiLCJjbGVhcmVkT25lSW5zdGFuY2UiLCJNb2NrUmVDYXB0Y2hhTG9hZGVySW1wbCIsIlJFQ0FQVENIQV9WRVJJRklFUl9UWVBFIiwiREVGQVVMVF9QQVJBTVMiLCJ0aGVtZSIsImRlc3Ryb3llZCIsInRva2VuQ2hhbmdlTGlzdGVuZXJzIiwicmVuZGVyUHJvbWlzZSIsImlzSW52aXNpYmxlIiwibWFrZVRva2VuQ2FsbGJhY2siLCJfcmVjYXB0Y2hhTG9hZGVyIiwidmFsaWRhdGVTdGFydGluZ1N0YXRlIiwiYXNzZXJ0Tm90RGVzdHJveWVkIiwiZ2V0QXNzZXJ0ZWRSZWNhcHRjaGEiLCJ0b2tlbkNoYW5nZSIsIm1ha2VSZW5kZXJQcm9taXNlIiwiX3Jlc2V0IiwiY2xlYXIiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJyZW1vdmVDaGlsZCIsInNpdGVrZXkiLCJoYXNDaGlsZE5vZGVzIiwiZXhpc3RpbmciLCJnbG9iYWxGdW5jIiwiaW5pdCIsImd1YXJhbnRlZWRFbXB0eSIsImRvbVJlYWR5IiwiQ29uZmlybWF0aW9uUmVzdWx0SW1wbCIsIm9uQ29uZmlybWF0aW9uIiwiY29uZmlybSIsImF1dGhDcmVkZW50aWFsIiwiYXBwVmVyaWZpZXIiLCJfdmVyaWZ5UGhvbmVOdW1iZXIiLCJwaG9uZUluZm9PcHRpb25zIiwic3RhcnRQaG9uZU1mYUVucm9sbG1lbnRSZXF1ZXN0Iiwic3RhcnRFbnJvbGxQaG9uZU1mYUFjdGlvbkNhbGxiYWNrIiwicmVxdWVzdFdpdGhSZWNhcHRjaGFWMiIsImluamVjdFJlY2FwdGNoYVYyVG9rZW4iLCJzdGFydFBob25lTWZhRW5yb2xsbWVudFJlc3BvbnNlIiwicGhvbmVTZXNzaW9uSW5mbyIsIm11bHRpRmFjdG9ySGludCIsIm11bHRpRmFjdG9yVWlkIiwic3RhcnRQaG9uZU1mYVNpZ25JblJlcXVlc3QiLCJzdGFydFNpZ25JblBob25lTWZhQWN0aW9uQ2FsbGJhY2siLCJzdGFydFBob25lTWZhU2lnbkluUmVzcG9uc2UiLCJwaG9uZVJlc3BvbnNlSW5mbyIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGVSZXF1ZXN0Iiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZUFjdGlvbkNhbGxiYWNrIiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZVJlc3BvbnNlIiwicmVjYXB0Y2hhVjJWZXJpZmllciIsInJlY2FwdGNoYVYyVG9rZW4iLCJyZWNhcHRjaGFWZXJzaW9uIiwidmVyaWZ5UGhvbmVOdW1iZXIiLCJwaG9uZU9wdGlvbnMiLCJhcHBsaWNhdGlvblZlcmlmaWVyIiwiUEhPTkVfU0lHTl9JTl9NRVRIT0QiLCJfd2l0aERlZmF1bHRSZXNvbHZlciIsInJlc29sdmVyT3ZlcnJpZGUiLCJJZHBDcmVkZW50aWFsIiwiX2J1aWxkSWRwUmVxdWVzdCIsInNlc3Npb25JZCIsInJldHVybklkcENyZWRlbnRpYWwiLCJfc2lnbkluIiwiX3JlYXV0aCIsIl9saW5rIiwiQWJzdHJhY3RQb3B1cFJlZGlyZWN0T3BlcmF0aW9uIiwicGVuZGluZ1Byb21pc2UiLCJldmVudE1hbmFnZXIiLCJvbkV4ZWN1dGlvbiIsInJlZ2lzdGVyQ29uc3VtZXIiLCJvbkF1dGhFdmVudCIsInVybFJlc3BvbnNlIiwiZ2V0SWRwVGFzayIsIm9uRXJyb3IiLCJ1bnJlZ2lzdGVyQW5kQ2xlYW5VcCIsInVucmVnaXN0ZXJDb25zdW1lciIsImNsZWFuVXAiLCJfUE9MTF9XSU5ET1dfQ0xPU0VfVElNRU9VVCIsInJlc29sdmVySW50ZXJuYWwiLCJQb3B1cE9wZXJhdGlvbiIsImV4ZWN1dGVOb3ROdWxsIiwiYXV0aFdpbmRvdyIsInBvbGxJZCIsImN1cnJlbnRQb3B1cEFjdGlvbiIsImNhbmNlbCIsIl9vcGVuUG9wdXAiLCJhc3NvY2lhdGVkRXZlbnQiLCJfb3JpZ2luVmFsaWRhdGlvbiIsIl9pc0lmcmFtZVdlYlN0b3JhZ2VTdXBwb3J0ZWQiLCJpc1N1cHBvcnRlZCIsInBvbGxVc2VyQ2FuY2VsbGF0aW9uIiwiY2xvc2VkIiwiUEVORElOR19SRURJUkVDVF9LRVkiLCJyZWRpcmVjdE91dGNvbWVNYXAiLCJSZWRpcmVjdEFjdGlvbiIsInJlYWR5T3V0Y29tZSIsImhhc1BlbmRpbmdSZWRpcmVjdCIsIl9nZXRBbmRDbGVhclBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsInBlbmRpbmdSZWRpcmVjdEtleSIsInJlc29sdmVyUGVyc2lzdGVuY2UiLCJfc2V0UGVuZGluZ1JlZGlyZWN0U3RhdHVzIiwiX2NsZWFyUmVkaXJlY3RPdXRjb21lcyIsIl9zaWduSW5XaXRoUmVkaXJlY3QiLCJfb3BlblJlZGlyZWN0IiwiX3JlYXV0aGVudGljYXRlV2l0aFJlZGlyZWN0IiwicHJlcGFyZVVzZXJGb3JSZWRpcmVjdCIsIl9saW5rV2l0aFJlZGlyZWN0IiwiX2dldFJlZGlyZWN0UmVzdWx0IiwicmVzb2x2ZXJFeHRlcm4iLCJFVkVOVF9EVVBMSUNBVElPTl9DQUNIRV9EVVJBVElPTl9NUyIsIkF1dGhFdmVudE1hbmFnZXIiLCJjYWNoZWRFdmVudFVpZHMiLCJjb25zdW1lcnMiLCJxdWV1ZWRSZWRpcmVjdEV2ZW50IiwiaGFzSGFuZGxlZFBvdGVudGlhbFJlZGlyZWN0IiwibGFzdFByb2Nlc3NlZEV2ZW50VGltZSIsImF1dGhFdmVudENvbnN1bWVyIiwiaXNFdmVudEZvckNvbnN1bWVyIiwic2VuZFRvQ29uc3VtZXIiLCJzYXZlRXZlbnRUb0NhY2hlIiwib25FdmVudCIsImhhc0V2ZW50QmVlbkhhbmRsZWQiLCJoYW5kbGVkIiwiY29uc3VtZXIiLCJpc1JlZGlyZWN0RXZlbnQiLCJpc051bGxSZWRpcmVjdEV2ZW50IiwiZXZlbnRJZE1hdGNoZXMiLCJldmVudFVpZCIsInYiLCJfZ2V0UHJvamVjdENvbmZpZyIsIklQX0FERFJFU1NfUkVHRVgiLCJIVFRQX1JFR0VYIiwiX3ZhbGlkYXRlT3JpZ2luIiwiYXV0aG9yaXplZERvbWFpbnMiLCJkb21haW4iLCJtYXRjaERvbWFpbiIsImN1cnJlbnRVcmwiLCJob3N0bmFtZSIsImNlVXJsIiwiZXNjYXBlZERvbWFpblBhdHRlcm4iLCJORVRXT1JLX1RJTUVPVVQiLCJyZXNldFVubG9hZGVkR2FwaU1vZHVsZXMiLCJiZWFjb24iLCJfX19qc2wiLCJIIiwiaGludCIsInIiLCJMIiwiQ1AiLCJsb2FkR2FwaSIsImxvYWRHYXBpSWZyYW1lIiwiZ2FwaSIsImlmcmFtZXMiLCJnZXRDb250ZXh0Iiwib250aW1lb3V0IiwiSWZyYW1lIiwiY2JOYW1lIiwiY2FjaGVkR0FwaUxvYWRlciIsIl9sb2FkR2FwaSIsIlBJTkdfVElNRU9VVCIsIklGUkFNRV9QQVRIIiwiRU1VTEFURURfSUZSQU1FX1BBVEgiLCJJRlJBTUVfQVRUUklCVVRFUyIsInRvcCIsImhlaWdodCIsInRhYmluZGV4IiwiRUlEX0ZST01fQVBJSE9TVCIsImdldElmcmFtZVVybCIsImVpZCIsImZ3IiwiX29wZW5JZnJhbWUiLCJjb250ZXh0IiwiZ2FwaTIiLCJ3aGVyZSIsIm1lc3NhZ2VIYW5kbGVyc0ZpbHRlciIsIkNST1NTX09SSUdJTl9JRlJBTUVTX0ZJTFRFUiIsImF0dHJpYnV0ZXMiLCJkb250Y2xlYXIiLCJpZnJhbWUiLCJyZXN0eWxlIiwic2V0SGlkZU9uTGVhdmUiLCJuZXR3b3JrRXJyb3IiLCJuZXR3b3JrRXJyb3JUaW1lciIsImNsZWFyVGltZXJBbmRSZXNvbHZlIiwicGluZyIsIkJBU0VfUE9QVVBfT1BUSU9OUyIsInJlc2l6YWJsZSIsInN0YXR1c2JhciIsInRvb2xiYXIiLCJERUZBVUxUX1dJRFRIIiwiREVGQVVMVF9IRUlHSFQiLCJUQVJHRVRfQkxBTksiLCJGSVJFRk9YX0VNUFRZX1VSTCIsIkF1dGhQb3B1cCIsIndpbmRvdzIiLCJfb3BlbiIsInNjcmVlbiIsImF2YWlsSGVpZ2h0IiwiYXZhaWxXaWR0aCIsInNjcm9sbGJhcnMiLCJvcHRpb25zU3RyaW5nIiwiZW50cmllcyIsInJlZHVjZSIsImFjY3VtIiwib3BlbkFzTmV3V2luZG93SU9TIiwibmV3V2luIiwiZm9jdXMiLCJjbGljayIsImNyZWF0ZUV2ZW50IiwiaW5pdE1vdXNlRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiV0lER0VUX1BBVEgiLCJFTVVMQVRPUl9XSURHRVRfUEFUSCIsIkZJUkVCQVNFX0FQUF9DSEVDS19GUkFHTUVOVF9JRCIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9nZXRSZWRpcmVjdFVybCIsImF1dGhUeXBlIiwicmVkaXJlY3RVcmwiLCJhZGRpdGlvbmFsUGFyYW1zIiwiaXNFbXB0eSIsInRpZCIsInBhcmFtc0RpY3QiLCJhcHBDaGVja1Rva2VuRnJhZ21lbnQiLCJnZXRIYW5kbGVyQmFzZSIsIldFQl9TVE9SQUdFX1NVUFBPUlRfS0VZIiwiQnJvd3NlclBvcHVwUmVkaXJlY3RSZXNvbHZlciIsImV2ZW50TWFuYWdlcnMiLCJvcmlnaW5WYWxpZGF0aW9uUHJvbWlzZXMiLCJwcm9taXNlMiIsImluaXRBbmRHZXRNYW5hZ2VyIiwicmVnaXN0ZXIiLCJpZnJhbWVFdmVudCIsImF1dGhFdmVudCIsInNlbmQiLCJNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZmluYWxpemVFbnJvbGwiLCJfZmluYWxpemVTaWduSW4iLCJQaG9uZU11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tQ3JlZGVudGlhbCIsInBob25lVmVyaWZpY2F0aW9uSW5mbyIsIkZBQ1RPUl9JRCIsImFzc2VydGlvbkZvckVucm9sbG1lbnQiLCJvbmVUaW1lUGFzc3dvcmQiLCJUb3RwTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2Zyb21TZWNyZXQiLCJhc3NlcnRpb25Gb3JTaWduSW4iLCJlbnJvbGxtZW50SWQiLCJfZnJvbUVucm9sbG1lbnRJZCIsImdlbmVyYXRlU2VjcmV0IiwibWZhU2Vzc2lvbiIsInRvdHBFbnJvbGxtZW50SW5mbyIsIl9mcm9tU3RhcnRUb3RwTWZhRW5yb2xsbWVudFJlc3BvbnNlIiwib3RwIiwidG90cFZlcmlmaWNhdGlvbkluZm8iLCJfbWFrZVRvdHBWZXJpZmljYXRpb25JbmZvIiwic2VjcmV0S2V5IiwiaGFzaGluZ0FsZ29yaXRobSIsImNvZGVMZW5ndGgiLCJjb2RlSW50ZXJ2YWxTZWNvbmRzIiwiZW5yb2xsbWVudENvbXBsZXRpb25EZWFkbGluZSIsInRvdHBTZXNzaW9uSW5mbyIsInNoYXJlZFNlY3JldEtleSIsInZlcmlmaWNhdGlvbkNvZGVMZW5ndGgiLCJwZXJpb2RTZWMiLCJmaW5hbGl6ZUVucm9sbG1lbnRUaW1lIiwiZ2VuZXJhdGVRckNvZGVVcmwiLCJhY2NvdW50TmFtZSIsImlzc3VlciIsInVzZURlZmF1bHRzIiwiX2lzRW1wdHlTdHJpbmciLCJpbnB1dCIsIkF1dGhJbnRlcm9wIiwiaW50ZXJuYWxMaXN0ZW5lcnMiLCJnZXRVaWQiLCJhc3NlcnRBdXRoQ29uZmlndXJlZCIsImFkZEF1dGhUb2tlbkxpc3RlbmVyIiwidXBkYXRlUHJvYWN0aXZlUmVmcmVzaCIsInJlbW92ZUF1dGhUb2tlbkxpc3RlbmVyIiwiZ2V0VmVyc2lvbkZvclBsYXRmb3JtIiwicmVnaXN0ZXJBdXRoIiwiX3JlZ2lzdGVyQ29tcG9uZW50IiwiaW1wb3J0X2NvbXBvbmVudCIsIkNvbXBvbmVudCIsImdldFByb3ZpZGVyIiwic2V0SW5zdGFudGlhdGlvbk1vZGUiLCJzZXRJbnN0YW5jZUNyZWF0ZWRDYWxsYmFjayIsIl9pbnN0YW5jZUlkZW50aWZpZXIiLCJfaW5zdGFuY2UiLCJhdXRoSW50ZXJuYWxQcm92aWRlciIsInJlZ2lzdGVyVmVyc2lvbiIsIkRFRkFVTFRfSURfVE9LRU5fTUFYX0FHRSIsImF1dGhJZFRva2VuTWF4QWdlIiwiZ2V0RXhwZXJpbWVudGFsU2V0dGluZyIsImxhc3RQb3N0ZWRJZFRva2VuIiwibWludENvb2tpZUZhY3RvcnkiLCJpZFRva2VuUmVzdWx0IiwiaWRUb2tlbkFnZSIsImdldEFwcCIsImF1dGhUb2tlblN5bmNQYXRoIiwiYXV0aFRva2VuU3luY1VybCIsIm1pbnRDb29raWUiLCJhdXRoRW11bGF0b3JIb3N0IiwiZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdCIsImdldFNjcmlwdFBhcmVudEVsZW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNldEF0dHJpYnV0ZSIsIm9uZXJyb3IiLCJjaGFyc2V0IiwiaW1wb3J0X2FwcDIiLCJyZXF1aXJlIiwiaW1wb3J0X3V0aWwyIiwiaW1wb3J0X2xvZ2dlcjIiLCJpbXBvcnRfdHNsaWIyIiwiaW1wb3J0X2NvbXBvbmVudDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUJBQUE7RUFBQUUsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FB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