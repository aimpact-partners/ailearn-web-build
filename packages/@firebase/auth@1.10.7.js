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

// .beyond/uimport/@firebase/auth.1.10.7.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXV0aC4xLjEwLjcuanMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21vZGVsL2VudW1fbWFwcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9sb2cudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9hc3NlcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9sb2NhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL25hdmlnYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2RlbGF5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9mZXRjaF9wcm92aWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9yZWNhcHRjaGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvYWNjb3VudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3RpbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9pZF90b2tlbl9yZXN1bHQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9pbnZhbGlkYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9wcm9hY3RpdmVfcmVmcmVzaC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfbWV0YWRhdGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWxvYWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Rva2VuX21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9pbnN0YW50aWF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvaW5fbWVtb3J5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL3BlcnNpc3RlbmNlX3VzZXJfbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92ZXJzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL3Bhc3N3b3JkX3BvbGljeS9nZXRfcGFzc3dvcmRfcG9saWN5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvcGFzc3dvcmRfcG9saWN5X2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbG9hZF9qcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX21vY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9lbnRlcnByaXNlX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvaW5pdGlhbGl6ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2F1dGhfY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc21zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2FjdGlvbl9jb2RlX3VybC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZlZGVyYXRlZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZhY2Vib29rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9nb29nbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dpdGh1Yi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy90d2l0dGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc2lnbl91cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfY3JlZGVudGlhbF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYW5vbnltb3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Vycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcHJvdmlkZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvbGlua191bmxpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWF1dGhlbnRpY2F0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2FjdGlvbl9jb2RlX3NldHRpbmdzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2NyZWF0ZV9hdXRoX3VyaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L3Byb2ZpbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hY2NvdW50X2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hZGRpdGlvbmFsX3VzZXJfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9zZXNzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV91c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvbG9jYWxfc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9jb29raWVfc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9zZXNzaW9uX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcHJvbWlzZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9yZWNlaXZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2V2ZW50X2lkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3NlbmRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9hdXRoX3dpbmRvdy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3dvcmtlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9pbmRleGVkX2RiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbG9hZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfdmVyaWZpZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wcm92aWRlcnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fic3RyYWN0X3BvcHVwX3JlZGlyZWN0X29wZXJhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfZXZlbnRfbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL3Byb2plY3RfY29uZmlnL2dldF9wcm9qZWN0X2NvbmZpZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZhbGlkYXRlX29yaWdpbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pZnJhbWUvZ2FwaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pZnJhbWUvaWZyYW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3V0aWwvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9oYW5kbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BvcHVwX3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Fzc2VydGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZmEvYXNzZXJ0aW9ucy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL2Fzc2VydGlvbnMvdG90cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2ZpcmViYXNlX2ludGVybmFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvcmVnaXN0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvZGlzdC9lc20yMDE3L2luZGV4LmpzIl0sIm5hbWVzIjpbImF1dGhfMV8xMF83X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFjdGlvbkNvZGVPcGVyYXRpb24iLCJBY3Rpb25Db2RlVVJMIiwiQXV0aENyZWRlbnRpYWwiLCJBdXRoRXJyb3JDb2RlcyIsIkFVVEhfRVJST1JfQ09ERVNfTUFQX0RPX05PVF9VU0VfSU5URVJOQUxMWSIsIkVtYWlsQXV0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiRmFjdG9ySWQiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJPQXV0aENyZWRlbnRpYWwiLCJPQXV0aFByb3ZpZGVyIiwiT3BlcmF0aW9uVHlwZSIsIlBob25lQXV0aENyZWRlbnRpYWwiLCJQaG9uZUF1dGhQcm92aWRlciIsIlBob25lTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJQcm92aWRlcklkIiwiUmVjYXB0Y2hhVmVyaWZpZXIiLCJTQU1MQXV0aFByb3ZpZGVyIiwiU2lnbkluTWV0aG9kIiwiVG90cE11bHRpRmFjdG9yR2VuZXJhdG9yIiwiVG90cFNlY3JldCIsIlR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJhcHBseUFjdGlvbkNvZGUiLCJiZWZvcmVBdXRoU3RhdGVDaGFuZ2VkIiwiYnJvd3NlckNvb2tpZVBlcnNpc3RlbmNlIiwiYnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJicm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsImNoZWNrQWN0aW9uQ29kZSIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29ubmVjdEF1dGhFbXVsYXRvciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRlYnVnRXJyb3JNYXAiLCJkZWxldGVVc2VyIiwiZmV0Y2hTaWduSW5NZXRob2RzRm9yRW1haWwiLCJnZXRBZGRpdGlvbmFsVXNlckluZm8iLCJnZXRBdXRoIiwiZ2V0SWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJnZXRNdWx0aUZhY3RvclJlc29sdmVyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJpbk1lbW9yeVBlcnNpc3RlbmNlIiwiaW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsImluaXRpYWxpemVBdXRoIiwiaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImlzU2lnbkluV2l0aEVtYWlsTGluayIsImxpbmtXaXRoQ3JlZGVudGlhbCIsImxpbmtXaXRoUGhvbmVOdW1iZXIiLCJsaW5rV2l0aFBvcHVwIiwibGlua1dpdGhSZWRpcmVjdCIsIm11bHRpRmFjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwib25JZFRva2VuQ2hhbmdlZCIsInBhcnNlQWN0aW9uQ29kZVVSTCIsInByb2RFcnJvck1hcCIsInJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQaG9uZU51bWJlciIsInJlYXV0aGVudGljYXRlV2l0aFBvcHVwIiwicmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJyZWxvYWQiLCJyZXZva2VBY2Nlc3NUb2tlbiIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJzZXRQZXJzaXN0ZW5jZSIsInNpZ25JbkFub255bW91c2x5Iiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbExpbmsiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJzaWduT3V0IiwidW5saW5rIiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGhvbmVOdW1iZXIiLCJ1cGRhdGVQcm9maWxlIiwidXNlRGV2aWNlTGFuZ3VhZ2UiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwidmVyaWZ5QmVmb3JlVXBkYXRlRW1haWwiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJQSE9ORSIsIlRPVFAiLCJGQUNFQk9PSyIsIkdJVEhVQiIsIkdPT0dMRSIsIlBBU1NXT1JEIiwiVFdJVFRFUiIsIkVNQUlMX0xJTksiLCJFTUFJTF9QQVNTV09SRCIsIkxJTksiLCJSRUFVVEhFTlRJQ0FURSIsIlNJR05fSU4iLCJFTUFJTF9TSUdOSU4iLCJQQVNTV09SRF9SRVNFVCIsIlJFQ09WRVJfRU1BSUwiLCJSRVZFUlRfU0VDT05EX0ZBQ1RPUl9BRERJVElPTiIsIlZFUklGWV9BTkRfQ0hBTkdFX0VNQUlMIiwiVkVSSUZZX0VNQUlMIiwiX2RlYnVnRXJyb3JNYXAiLCJfcHJvZEVycm9yTWFwIiwiX0RFRkFVTFRfQVVUSF9FUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJFcnJvckZhY3RvcnkiLCJBRE1JTl9PTkxZX09QRVJBVElPTiIsIkFSR1VNRU5UX0VSUk9SIiwiQVBQX05PVF9BVVRIT1JJWkVEIiwiQVBQX05PVF9JTlNUQUxMRUQiLCJDQVBUQ0hBX0NIRUNLX0ZBSUxFRCIsIkNPREVfRVhQSVJFRCIsIkNPUkRPVkFfTk9UX1JFQURZIiwiQ09SU19VTlNVUFBPUlRFRCIsIkNSRURFTlRJQUxfQUxSRUFEWV9JTl9VU0UiLCJDUkVERU5USUFMX01JU01BVENIIiwiQ1JFREVOVElBTF9UT09fT0xEX0xPR0lOX0FHQUlOIiwiREVQRU5ERU5UX1NES19JTklUX0JFRk9SRV9BVVRIIiwiRFlOQU1JQ19MSU5LX05PVF9BQ1RJVkFURUQiLCJFTUFJTF9DSEFOR0VfTkVFRFNfVkVSSUZJQ0FUSU9OIiwiRU1BSUxfRVhJU1RTIiwiRU1VTEFUT1JfQ09ORklHX0ZBSUxFRCIsIkVYUElSRURfT09CX0NPREUiLCJFWFBJUkVEX1BPUFVQX1JFUVVFU1QiLCJJTlRFUk5BTF9FUlJPUiIsIklOVkFMSURfQVBJX0tFWSIsIklOVkFMSURfQVBQX0NSRURFTlRJQUwiLCJJTlZBTElEX0FQUF9JRCIsIklOVkFMSURfQVVUSCIsIklOVkFMSURfQVVUSF9FVkVOVCIsIklOVkFMSURfQ0VSVF9IQVNIIiwiSU5WQUxJRF9DT0RFIiwiSU5WQUxJRF9DT05USU5VRV9VUkkiLCJJTlZBTElEX0NPUkRPVkFfQ09ORklHVVJBVElPTiIsIklOVkFMSURfQ1VTVE9NX1RPS0VOIiwiSU5WQUxJRF9EWU5BTUlDX0xJTktfRE9NQUlOIiwiSU5WQUxJRF9FTUFJTCIsIklOVkFMSURfRU1VTEFUT1JfU0NIRU1FIiwiSU5WQUxJRF9JRFBfUkVTUE9OU0UiLCJJTlZBTElEX0xPR0lOX0NSRURFTlRJQUxTIiwiSU5WQUxJRF9NRVNTQUdFX1BBWUxPQUQiLCJJTlZBTElEX01GQV9TRVNTSU9OIiwiSU5WQUxJRF9PQVVUSF9DTElFTlRfSUQiLCJJTlZBTElEX09BVVRIX1BST1ZJREVSIiwiSU5WQUxJRF9PT0JfQ09ERSIsIklOVkFMSURfT1JJR0lOIiwiSU5WQUxJRF9QQVNTV09SRCIsIklOVkFMSURfUEVSU0lTVEVOQ0UiLCJJTlZBTElEX1BIT05FX05VTUJFUiIsIklOVkFMSURfUFJPVklERVJfSUQiLCJJTlZBTElEX1JFQ0lQSUVOVF9FTUFJTCIsIklOVkFMSURfU0VOREVSIiwiSU5WQUxJRF9TRVNTSU9OX0lORk8iLCJJTlZBTElEX1RFTkFOVF9JRCIsIk1GQV9JTkZPX05PVF9GT1VORCIsIk1GQV9SRVFVSVJFRCIsIk1JU1NJTkdfQU5EUk9JRF9QQUNLQUdFX05BTUUiLCJNSVNTSU5HX0FQUF9DUkVERU5USUFMIiwiTUlTU0lOR19BVVRIX0RPTUFJTiIsIk1JU1NJTkdfQ09ERSIsIk1JU1NJTkdfQ09OVElOVUVfVVJJIiwiTUlTU0lOR19JRlJBTUVfU1RBUlQiLCJNSVNTSU5HX0lPU19CVU5ETEVfSUQiLCJNSVNTSU5HX09SX0lOVkFMSURfTk9OQ0UiLCJNSVNTSU5HX01GQV9JTkZPIiwiTUlTU0lOR19NRkFfU0VTU0lPTiIsIk1JU1NJTkdfUEhPTkVfTlVNQkVSIiwiTUlTU0lOR19TRVNTSU9OX0lORk8iLCJNT0RVTEVfREVTVFJPWUVEIiwiTkVFRF9DT05GSVJNQVRJT04iLCJORVRXT1JLX1JFUVVFU1RfRkFJTEVEIiwiTlVMTF9VU0VSIiwiTk9fQVVUSF9FVkVOVCIsIk5PX1NVQ0hfUFJPVklERVIiLCJPUEVSQVRJT05fTk9UX0FMTE9XRUQiLCJPUEVSQVRJT05fTk9UX1NVUFBPUlRFRCIsIlBPUFVQX0JMT0NLRUQiLCJQT1BVUF9DTE9TRURfQllfVVNFUiIsIlBST1ZJREVSX0FMUkVBRFlfTElOS0VEIiwiUVVPVEFfRVhDRUVERUQiLCJSRURJUkVDVF9DQU5DRUxMRURfQllfVVNFUiIsIlJFRElSRUNUX09QRVJBVElPTl9QRU5ESU5HIiwiUkVKRUNURURfQ1JFREVOVElBTCIsIlNFQ09ORF9GQUNUT1JfQUxSRUFEWV9FTlJPTExFRCIsIlNFQ09ORF9GQUNUT1JfTElNSVRfRVhDRUVERUQiLCJURU5BTlRfSURfTUlTTUFUQ0giLCJUSU1FT1VUIiwiVE9LRU5fRVhQSVJFRCIsIlRPT19NQU5ZX0FUVEVNUFRTX1RSWV9MQVRFUiIsIlVOQVVUSE9SSVpFRF9ET01BSU4iLCJVTlNVUFBPUlRFRF9GSVJTVF9GQUNUT1IiLCJVTlNVUFBPUlRFRF9QRVJTSVNURU5DRSIsIlVOU1VQUE9SVEVEX1RFTkFOVF9PUEVSQVRJT04iLCJVTlZFUklGSUVEX0VNQUlMIiwiVVNFUl9DQU5DRUxMRUQiLCJVU0VSX0RFTEVURUQiLCJVU0VSX0RJU0FCTEVEIiwiVVNFUl9NSVNNQVRDSCIsIlVTRVJfU0lHTkVEX09VVCIsIldFQUtfUEFTU1dPUkQiLCJXRUJfU1RPUkFHRV9VTlNVUFBPUlRFRCIsIkFMUkVBRFlfSU5JVElBTElaRUQiLCJSRUNBUFRDSEFfTk9UX0VOQUJMRUQiLCJNSVNTSU5HX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfQUNUSU9OIiwiTUlTU0lOR19DTElFTlRfVFlQRSIsIk1JU1NJTkdfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRVFfVFlQRSIsIklOVkFMSURfSE9TVElOR19MSU5LX0RPTUFJTiIsImxvZ0NsaWVudCIsImltcG9ydF9sb2dnZXIiLCJMb2dnZXIiLCJfbG9nV2FybiIsIm1zZyIsImFyZ3MiLCJsb2dMZXZlbCIsIkxvZ0xldmVsIiwiV0FSTiIsIndhcm4iLCJpbXBvcnRfYXBwIiwiU0RLX1ZFUlNJT04iLCJfbG9nRXJyb3IiLCJFUlJPUiIsImVycm9yIiwiX2ZhaWwiLCJhdXRoT3JDb2RlIiwicmVzdCIsImNyZWF0ZUVycm9ySW50ZXJuYWwiLCJfY3JlYXRlRXJyb3IiLCJfZXJyb3JXaXRoQ3VzdG9tTWVzc2FnZSIsImF1dGgiLCJjb2RlIiwibWVzc2FnZSIsImVycm9yTWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiZmFjdG9yeSIsImNyZWF0ZSIsImFwcE5hbWUiLCJuYW1lIiwiX3NlcnZlckFwcEN1cnJlbnRVc2VyT3BlcmF0aW9uTm90U3VwcG9ydGVkRXJyb3IiLCJfYXNzZXJ0SW5zdGFuY2VPZiIsIm9iamVjdCIsImluc3RhbmNlIiwiY29uc3RydWN0b3JJbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiZnVsbFBhcmFtcyIsInNsaWNlIiwiX2Vycm9yRmFjdG9yeSIsIl9hc3NlcnQiLCJhc3NlcnRpb24iLCJkZWJ1Z0ZhaWwiLCJmYWlsdXJlIiwiRXJyb3IiLCJkZWJ1Z0Fzc2VydCIsIl9nZXRDdXJyZW50VXJsIiwic2VsZiIsIl9hIiwibG9jYXRpb24iLCJocmVmIiwiX2lzSHR0cE9ySHR0cHMiLCJfZ2V0Q3VycmVudFNjaGVtZSIsInByb3RvY29sIiwiX2lzT25saW5lIiwibmF2aWdhdG9yIiwib25MaW5lIiwiaXNCcm93c2VyRXh0ZW5zaW9uIiwiX2dldFVzZXJMYW5ndWFnZSIsIm5hdmlnYXRvckxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJEZWxheSIsInNob3J0RGVsYXkiLCJsb25nRGVsYXkiLCJpc01vYmlsZSIsImlzTW9iaWxlQ29yZG92YSIsImlzUmVhY3ROYXRpdmUiLCJnZXQiLCJNYXRoIiwibWluIiwiX2VtdWxhdG9yVXJsIiwiY29uZmlnIiwicGF0aCIsImVtdWxhdG9yIiwidXJsIiwic3RhcnRzV2l0aCIsIkZldGNoUHJvdmlkZXIiLCJpbml0aWFsaXplIiwiZmV0Y2hJbXBsIiwiaGVhZGVyc0ltcGwiLCJyZXNwb25zZUltcGwiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJoZWFkZXJzIiwiSGVhZGVycyIsInJlc3BvbnNlIiwiUmVzcG9uc2UiLCJTRVJWRVJfRVJST1JfTUFQIiwiQ29va2llQXV0aFByb3hpZWRFbmRwb2ludHMiLCJERUZBVUxUX0FQSV9USU1FT1VUX01TIiwiX2FkZFRpZElmTmVjZXNzYXJ5IiwicmVxdWVzdCIsInRlbmFudElkIiwiX3BlcmZvcm1BcGlSZXF1ZXN0IiwibWV0aG9kIiwiY3VzdG9tRXJyb3JNYXAiLCJfcGVyZm9ybUZldGNoV2l0aEVycm9ySGFuZGxpbmciLCJib2R5IiwicGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwicXVlcnlzdHJpbmciLCJrZXkiLCJhcGlLZXkiLCJfZ2V0QWRkaXRpb25hbEhlYWRlcnMiLCJsYW5ndWFnZUNvZGUiLCJmZXRjaEFyZ3MiLCJpc0Nsb3VkZmxhcmVXb3JrZXIiLCJyZWZlcnJlclBvbGljeSIsImVtdWxhdG9yQ29uZmlnIiwiaXNDbG91ZFdvcmtzdGF0aW9uIiwiaG9zdCIsImNyZWRlbnRpYWxzIiwiX2dldEZpbmFsVGFyZ2V0IiwiYXBpSG9zdCIsImZldGNoRm4iLCJfY2FuSW5pdEVtdWxhdG9yIiwibmV0d29ya1RpbWVvdXQiLCJOZXR3b3JrVGltZW91dCIsIlByb21pc2UiLCJyYWNlIiwicHJvbWlzZSIsImNsZWFyTmV0d29ya1RpbWVvdXQiLCJqc29uIiwiX21ha2VUYWdnZWRFcnJvciIsIm9rIiwiZXJyb3JNZXNzYWdlIiwic2VydmVyRXJyb3JDb2RlIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic3BsaXQiLCJhdXRoRXJyb3IiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJlIiwiRmlyZWJhc2VFcnJvciIsIlN0cmluZyIsIl9wZXJmb3JtU2lnbkluUmVxdWVzdCIsInNlcnZlclJlc3BvbnNlIiwiX3NlcnZlclJlc3BvbnNlIiwiYmFzZSIsImF1dGhJbnRlcm5hbCIsImZpbmFsVGFyZ2V0IiwiYXBpU2NoZW1lIiwiaW5jbHVkZXMiLCJfcGVyc2lzdGVuY2VNYW5hZ2VyQXZhaWxhYmxlIiwiX2dldFBlcnNpc3RlbmNlVHlwZSIsImNvb2tpZVBlcnNpc3RlbmNlIiwiX2dldFBlcnNpc3RlbmNlIiwidG9TdHJpbmciLCJfcGFyc2VFbmZvcmNlbWVudFN0YXRlIiwiZW5mb3JjZW1lbnRTdGF0ZVN0ciIsImNsZWFyVGltZW91dCIsInRpbWVyIiwiXyIsInJlamVjdCIsInNldFRpbWVvdXQiLCJlcnJvclBhcmFtcyIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJjdXN0b21EYXRhIiwiX3Rva2VuUmVzcG9uc2UiLCJpc1YyIiwiZ3JlY2FwdGNoYSIsImdldFJlc3BvbnNlIiwiaXNFbnRlcnByaXNlIiwiZW50ZXJwcmlzZSIsIlJlY2FwdGNoYUNvbmZpZyIsInNpdGVLZXkiLCJyZWNhcHRjaGFFbmZvcmNlbWVudFN0YXRlIiwicmVjYXB0Y2hhS2V5IiwiZ2V0UHJvdmlkZXJFbmZvcmNlbWVudFN0YXRlIiwicHJvdmlkZXJTdHIiLCJsZW5ndGgiLCJwcm92aWRlciIsImVuZm9yY2VtZW50U3RhdGUiLCJpc1Byb3ZpZGVyRW5hYmxlZCIsImlzQW55UHJvdmlkZXJFbmFibGVkIiwiZ2V0UmVjYXB0Y2hhUGFyYW1zIiwicmVjYXB0Y2hhU2l0ZUtleSIsImdldFJlY2FwdGNoYUNvbmZpZyIsImRlbGV0ZUFjY291bnQiLCJkZWxldGVMaW5rZWRBY2NvdW50cyIsImdldEFjY291bnRJbmZvIiwidXRjVGltZXN0YW1wVG9EYXRlU3RyaW5nIiwidXRjVGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJOdW1iZXIiLCJpc05hTiIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsInVzZXIiLCJmb3JjZVJlZnJlc2giLCJnZXRNb2R1bGFySW5zdGFuY2UiLCJ1c2VySW50ZXJuYWwiLCJ0b2tlbiIsImNsYWltcyIsIl9wYXJzZVRva2VuIiwiZXhwIiwiYXV0aF90aW1lIiwiaWF0IiwiZmlyZWJhc2UiLCJzaWduSW5Qcm92aWRlciIsImF1dGhUaW1lIiwic2Vjb25kc1N0cmluZ1RvTWlsbGlzZWNvbmRzIiwiaXNzdWVkQXRUaW1lIiwiZXhwaXJhdGlvblRpbWUiLCJzaWduSW5TZWNvbmRGYWN0b3IiLCJzZWNvbmRzIiwiYWxnb3JpdGhtIiwicGF5bG9hZCIsInNpZ25hdHVyZSIsImRlY29kZWQiLCJiYXNlNjREZWNvZGUiLCJwYXJzZSIsIl90b2tlbkV4cGlyZXNJbiIsInBhcnNlZFRva2VuIiwiX2xvZ291dElmSW52YWxpZGF0ZWQiLCJieXBhc3NBdXRoU3RhdGUiLCJpc1VzZXJJbnZhbGlkYXRlZCIsImN1cnJlbnRVc2VyIiwiUHJvYWN0aXZlUmVmcmVzaCIsImlzUnVubmluZyIsInRpbWVySWQiLCJlcnJvckJhY2tvZmYiLCJfc3RhcnQiLCJzY2hlZHVsZSIsIl9zdG9wIiwiZ2V0SW50ZXJ2YWwiLCJ3YXNFcnJvciIsImludGVydmFsIiwiZXhwVGltZSIsInN0c1Rva2VuTWFuYWdlciIsIm5vdyIsIm1heCIsIml0ZXJhdGlvbiIsIlVzZXJNZXRhZGF0YSIsImNyZWF0ZWRBdCIsImxhc3RMb2dpbkF0IiwiX2luaXRpYWxpemVUaW1lIiwibGFzdFNpZ25JblRpbWUiLCJjcmVhdGlvblRpbWUiLCJfY29weSIsIm1ldGFkYXRhIiwidG9KU09OIiwiX3JlbG9hZFdpdGhvdXRTYXZpbmciLCJpZFRva2VuIiwidXNlcnMiLCJjb3JlQWNjb3VudCIsIl9ub3RpZnlSZWxvYWRMaXN0ZW5lciIsIm5ld1Byb3ZpZGVyRGF0YSIsInByb3ZpZGVyVXNlckluZm8iLCJleHRyYWN0UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJEYXRhIiwibWVyZ2VQcm92aWRlckRhdGEiLCJvbGRJc0Fub255bW91cyIsImlzQW5vbnltb3VzIiwibmV3SXNBbm9ueW1vdXMiLCJwYXNzd29yZEhhc2giLCJ1cGRhdGVzIiwidWlkIiwibG9jYWxJZCIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJwaG90b1VybCIsImVtYWlsVmVyaWZpZWQiLCJfcGVyc2lzdFVzZXJJZkN1cnJlbnQiLCJfbm90aWZ5TGlzdGVuZXJzSWZDdXJyZW50Iiwib3JpZ2luYWwiLCJuZXdEYXRhIiwiZGVkdXBlZCIsImZpbHRlciIsIm8iLCJzb21lIiwibiIsInByb3ZpZGVySWQiLCJwcm92aWRlcnMiLCJtYXAiLCJpbXBvcnRfdHNsaWIiLCJfX3Jlc3QiLCJyYXdJZCIsInJlcXVlc3RTdHNUb2tlbiIsInJlZnJlc2hUb2tlbiIsInRva2VuQXBpSG9zdCIsIm9wdGlvbnMiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNJbiIsImV4cGlyZXNfaW4iLCJyZWZyZXNoX3Rva2VuIiwicmV2b2tlVG9rZW4iLCJTdHNUb2tlbk1hbmFnZXIiLCJpc0V4cGlyZWQiLCJ1cGRhdGVGcm9tU2VydmVyUmVzcG9uc2UiLCJ1cGRhdGVUb2tlbnNBbmRFeHBpcmF0aW9uIiwidXBkYXRlRnJvbUlkVG9rZW4iLCJnZXRUb2tlbiIsInJlZnJlc2giLCJjbGVhclJlZnJlc2hUb2tlbiIsIm9sZFRva2VuIiwiZXhwaXJlc0luU2VjIiwiZnJvbUpTT04iLCJtYW5hZ2VyIiwiX2Fzc2lnbiIsIl9jbG9uZSIsIl9wZXJmb3JtUmVmcmVzaCIsImFzc2VydFN0cmluZ09yVW5kZWZpbmVkIiwiVXNlckltcGwiLCJvcHQiLCJwcm9hY3RpdmVSZWZyZXNoIiwicmVsb2FkVXNlckluZm8iLCJyZWxvYWRMaXN0ZW5lciIsInVzZXJJbmZvIiwibmV3VXNlciIsIl9vblJlbG9hZCIsImNhbGxiYWNrIiwiX3N0YXJ0UHJvYWN0aXZlUmVmcmVzaCIsIl9zdG9wUHJvYWN0aXZlUmVmcmVzaCIsIl91cGRhdGVUb2tlbnNJZk5lY2Vzc2FyeSIsInJlbG9hZDIiLCJ0b2tlbnNSZWZyZXNoZWQiLCJkZWxldGUiLCJfaXNGaXJlYmFzZVNlcnZlckFwcCIsImFwcCIsIl9yZWRpcmVjdEV2ZW50SWQiLCJfZnJvbUpTT04iLCJfYiIsIl9jIiwiX2QiLCJfZSIsIl9mIiwiX2ciLCJfaCIsInBsYWluT2JqZWN0VG9rZW5NYW5hZ2VyIiwiQXJyYXkiLCJpc0FycmF5IiwiX2Zyb21JZFRva2VuUmVzcG9uc2UiLCJpZFRva2VuUmVzcG9uc2UiLCJfZnJvbUdldEFjY291bnRJbmZvUmVzcG9uc2UiLCJpbnN0YW5jZUNhY2hlIiwiTWFwIiwiX2dldEluc3RhbmNlIiwiY2xzIiwiRnVuY3Rpb24iLCJzZXQiLCJJbk1lbW9yeVBlcnNpc3RlbmNlIiwidHlwZSIsInN0b3JhZ2UiLCJfaXNBdmFpbGFibGUiLCJfc2V0IiwidmFsdWUiLCJfZ2V0IiwiX3JlbW92ZSIsIl9hZGRMaXN0ZW5lciIsIl9rZXkiLCJfbGlzdGVuZXIiLCJfcmVtb3ZlTGlzdGVuZXIiLCJfcGVyc2lzdGVuY2VLZXlOYW1lIiwiUGVyc2lzdGVuY2VVc2VyTWFuYWdlciIsInBlcnNpc3RlbmNlIiwidXNlcktleSIsIm5hbWUyIiwiZnVsbFVzZXJLZXkiLCJmdWxsUGVyc2lzdGVuY2VLZXkiLCJib3VuZEV2ZW50SGFuZGxlciIsIl9vblN0b3JhZ2VFdmVudCIsImJpbmQiLCJzZXRDdXJyZW50VXNlciIsImdldEN1cnJlbnRVc2VyIiwiYmxvYiIsImNhdGNoIiwicmVtb3ZlQ3VycmVudFVzZXIiLCJzYXZlUGVyc2lzdGVuY2VGb3JSZWRpcmVjdCIsIm5ld1BlcnNpc3RlbmNlIiwicGVyc2lzdGVuY2VIaWVyYXJjaHkiLCJhdmFpbGFibGVQZXJzaXN0ZW5jZXMiLCJhbGwiLCJzZWxlY3RlZFBlcnNpc3RlbmNlIiwidXNlclRvTWlncmF0ZSIsIm1pZ3JhdGlvbkhpZXJhcmNoeSIsInAiLCJfc2hvdWxkQWxsb3dNaWdyYXRpb24iLCJfZ2V0QnJvd3Nlck5hbWUiLCJ1c2VyQWdlbnQiLCJ1YSIsIl9pc0lFTW9iaWxlIiwiX2lzRmlyZWZveCIsIl9pc0JsYWNrQmVycnkiLCJfaXNXZWJPUyIsIl9pc1NhZmFyaSIsIl9pc0Nocm9tZUlPUyIsIl9pc0FuZHJvaWQiLCJyZSIsIm1hdGNoZXMiLCJtYXRjaCIsImdldFVBIiwidGVzdCIsIl9pc0lPUyIsIl9pc0lPUzdPcjgiLCJfaXNJT1NTdGFuZGFsb25lIiwid2luZG93Iiwic3RhbmRhbG9uZSIsIl9pc0lFMTAiLCJpc0lFIiwiZG9jdW1lbnQiLCJkb2N1bWVudE1vZGUiLCJfaXNNb2JpbGVCcm93c2VyIiwiX2dldENsaWVudFZlcnNpb24iLCJjbGllbnRQbGF0Zm9ybSIsImZyYW1ld29ya3MiLCJyZXBvcnRlZFBsYXRmb3JtIiwicmVwb3J0ZWRGcmFtZXdvcmtzIiwiam9pbiIsIkF1dGhNaWRkbGV3YXJlUXVldWUiLCJxdWV1ZSIsInB1c2hDYWxsYmFjayIsIm9uQWJvcnQiLCJ3cmFwcGVkQ2FsbGJhY2siLCJyZXNvbHZlIiwicmVzdWx0IiwicHVzaCIsImluZGV4IiwicnVuTWlkZGxld2FyZSIsIm5leHRVc2VyIiwib25BYm9ydFN0YWNrIiwiYmVmb3JlU3RhdGVDYWxsYmFjayIsInJldmVyc2UiLCJvcmlnaW5hbE1lc3NhZ2UiLCJfZ2V0UGFzc3dvcmRQb2xpY3kiLCJNSU5JTVVNX01JTl9QQVNTV09SRF9MRU5HVEgiLCJQYXNzd29yZFBvbGljeUltcGwiLCJyZXNwb25zZU9wdGlvbnMiLCJjdXN0b21TdHJlbmd0aE9wdGlvbnMiLCJtaW5QYXNzd29yZExlbmd0aCIsIm1heFBhc3N3b3JkTGVuZ3RoIiwiY29udGFpbnNMb3dlcmNhc2VDaGFyYWN0ZXIiLCJjb250YWluc0xvd2VyY2FzZUxldHRlciIsImNvbnRhaW5zVXBwZXJjYXNlQ2hhcmFjdGVyIiwiY29udGFpbnNVcHBlcmNhc2VMZXR0ZXIiLCJjb250YWluc051bWVyaWNDaGFyYWN0ZXIiLCJjb250YWluc05vbkFscGhhbnVtZXJpY0NoYXJhY3RlciIsImFsbG93ZWROb25BbHBoYW51bWVyaWNDaGFyYWN0ZXJzIiwiZm9yY2VVcGdyYWRlT25TaWduaW4iLCJzY2hlbWFWZXJzaW9uIiwicGFzc3dvcmQiLCJzdGF0dXMiLCJpc1ZhbGlkIiwicGFzc3dvcmRQb2xpY3kiLCJ2YWxpZGF0ZVBhc3N3b3JkTGVuZ3RoT3B0aW9ucyIsInZhbGlkYXRlUGFzc3dvcmRDaGFyYWN0ZXJPcHRpb25zIiwibWVldHNNaW5QYXNzd29yZExlbmd0aCIsIm1lZXRzTWF4UGFzc3dvcmRMZW5ndGgiLCJ1cGRhdGVQYXNzd29yZENoYXJhY3Rlck9wdGlvbnNTdGF0dXNlcyIsInBhc3N3b3JkQ2hhciIsImkiLCJjaGFyQXQiLCJBdXRoSW1wbCIsImhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlciIsImFwcENoZWNrU2VydmljZVByb3ZpZGVyIiwib3BlcmF0aW9ucyIsImF1dGhTdGF0ZVN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkVG9rZW5TdWJzY3JpcHRpb24iLCJiZWZvcmVTdGF0ZVF1ZXVlIiwicmVkaXJlY3RVc2VyIiwiaXNQcm9hY3RpdmVSZWZyZXNoRW5hYmxlZCIsIkVYUEVDVEVEX1BBU1NXT1JEX1BPTElDWV9TQ0hFTUFfVkVSU0lPTiIsIl9pc0luaXRpYWxpemVkIiwiX2RlbGV0ZWQiLCJfaW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiX3BvcHVwUmVkaXJlY3RSZXNvbHZlciIsIl9hZ2VudFJlY2FwdGNoYUNvbmZpZyIsIl90ZW5hbnRSZWNhcHRjaGFDb25maWdzIiwiX3Byb2plY3RQYXNzd29yZFBvbGljeSIsIl90ZW5hbnRQYXNzd29yZFBvbGljaWVzIiwiX3Jlc29sdmVQZXJzaXN0ZW5jZU1hbmFnZXJBdmFpbGFibGUiLCJsYXN0Tm90aWZpZWRVaWQiLCJzZXR0aW5ncyIsImFwcFZlcmlmaWNhdGlvbkRpc2FibGVkRm9yVGVzdGluZyIsImNsaWVudFZlcnNpb24iLCJzZGtDbGllbnRWZXJzaW9uIiwiX2luaXRpYWxpemVXaXRoUGVyc2lzdGVuY2UiLCJwb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJwZXJzaXN0ZW5jZU1hbmFnZXIiLCJjYWxsIiwiX3Nob3VsZEluaXRQcm9hY3RpdmVseSIsIl9pbml0aWFsaXplIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyIiwiYXNzZXJ0ZWRQZXJzaXN0ZW5jZSIsIl9jdXJyZW50VXNlciIsIl91cGRhdGVDdXJyZW50VXNlciIsImluaXRpYWxpemVDdXJyZW50VXNlckZyb21JZFRva2VuIiwiZGlyZWN0bHlTZXRDdXJyZW50VXNlciIsImVyciIsImNvbnNvbGUiLCJhdXRoSWRUb2tlbiIsInRoZW4iLCJwcmV2aW91c2x5U3RvcmVkVXNlciIsImZ1dHVyZUN1cnJlbnRVc2VyIiwibmVlZHNUb2NoZWNrTWlkZGxld2FyZSIsImF1dGhEb21haW4iLCJnZXRPckluaXRSZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsInJlZGlyZWN0VXNlckV2ZW50SWQiLCJzdG9yZWRVc2VyRXZlbnRJZCIsInRyeVJlZGlyZWN0U2lnbkluIiwiX292ZXJyaWRlUmVkaXJlY3RSZXN1bHQiLCJyZWxvYWRBbmRTZXRDdXJyZW50VXNlck9yQ2xlYXIiLCJyZWRpcmVjdFJlc29sdmVyIiwiX2NvbXBsZXRlUmVkaXJlY3RGbiIsIl9zZXRSZWRpcmVjdFVzZXIiLCJfZGVsZXRlIiwidXNlckV4dGVybiIsInNraXBCZWZvcmVTdGF0ZUNhbGxiYWNrcyIsIm5vdGlmeUF1dGhMaXN0ZW5lcnMiLCJyZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsIl9nZXRSZWNhcHRjaGFDb25maWciLCJfZ2V0UGFzc3dvcmRQb2xpY3lJbnRlcm5hbCIsIl91cGRhdGVQYXNzd29yZFBvbGljeSIsIl91cGRhdGVFcnJvck1hcCIsIm5leHRPck9ic2VydmVyIiwiY29tcGxldGVkIiwicmVnaXN0ZXJTdGF0ZUxpc3RlbmVyIiwiYXV0aFN0YXRlUmVhZHkiLCJ1bnN1YnNjcmliZSIsInRva2VuVHlwZSIsInJlZGlyZWN0TWFuYWdlciIsInJlc29sdmVyIiwiX3JlZGlyZWN0UGVyc2lzdGVuY2UiLCJfcmVkaXJlY3RVc2VyRm9ySWQiLCJpZCIsIm5leHQiLCJjdXJyZW50VWlkIiwic3Vic2NyaXB0aW9uIiwiY2IiLCJpc1Vuc3Vic2NyaWJlZCIsImFkZE9ic2VydmVyIiwiYWN0aW9uIiwiX2xvZ0ZyYW1ld29yayIsImZyYW1ld29yayIsInNvcnQiLCJfZ2V0RnJhbWV3b3JrcyIsImFwcElkIiwiaGVhcnRiZWF0c0hlYWRlciIsImdldEltbWVkaWF0ZSIsIm9wdGlvbmFsIiwiZ2V0SGVhcnRiZWF0c0hlYWRlciIsImFwcENoZWNrVG9rZW4iLCJfZ2V0QXBwQ2hlY2tUb2tlbiIsImFwcENoZWNrVG9rZW5SZXN1bHQiLCJfY2FzdEF1dGgiLCJvYnNlcnZlciIsImNyZWF0ZVN1YnNjcmliZSIsImV4dGVybmFsSlNQcm92aWRlciIsImxvYWRKUyIsInJlY2FwdGNoYVYyU2NyaXB0IiwicmVjYXB0Y2hhRW50ZXJwcmlzZVNjcmlwdCIsImdhcGlTY3JpcHQiLCJfc2V0RXh0ZXJuYWxKU1Byb3ZpZGVyIiwiX2xvYWRKUyIsIl9yZWNhcHRjaGFWMlNjcmlwdFVybCIsIl9yZWNhcHRjaGFFbnRlcnByaXNlU2NyaXB0VXJsIiwiX2dhcGlTY3JpcHRVcmwiLCJfZ2VuZXJhdGVDYWxsYmFja05hbWUiLCJwcmVmaXgiLCJmbG9vciIsInJhbmRvbSIsIl9TT0xWRV9USU1FX01TIiwiX0VYUElSQVRJT05fVElNRV9NUyIsIl9XSURHRVRfSURfU1RBUlQiLCJNb2NrUmVDYXB0Y2hhIiwiY291bnRlciIsIl93aWRnZXRzIiwicmVuZGVyIiwiY29udGFpbmVyIiwicGFyYW1ldGVycyIsIk1vY2tXaWRnZXQiLCJyZXNldCIsIm9wdFdpZGdldElkIiwiZXhlY3V0ZSIsIk1vY2tHcmVDQVBUQ0hBVG9wTGV2ZWwiLCJNb2NrR3JlQ0FQVENIQSIsInJlYWR5IiwiX3NpdGVLZXkiLCJfb3B0aW9ucyIsIl9jb250YWluZXIiLCJfcGFyYW1ldGVycyIsImNvbnRhaW5lck9ySWQiLCJkZWxldGVkIiwicmVzcG9uc2VUb2tlbiIsImNsaWNrSGFuZGxlciIsImdldEVsZW1lbnRCeUlkIiwiaXNWaXNpYmxlIiwic2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0lmRGVsZXRlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZW5lcmF0ZVJhbmRvbUFscGhhTnVtZXJpY1N0cmluZyIsImV4cGlyZWRDYWxsYmFjayIsImxlbiIsImNoYXJzIiwiYWxsb3dlZENoYXJzIiwiUkVDQVBUQ0hBX0VOVEVSUFJJU0VfVkVSSUZJRVJfVFlQRSIsIkZBS0VfVE9LRU4iLCJSZWNhcHRjaGFFbnRlcnByaXNlVmVyaWZpZXIiLCJhdXRoRXh0ZXJuIiwidmVyaWZ5IiwicmV0cmlldmVTaXRlS2V5IiwiY2xpZW50VHlwZSIsInZlcnNpb24iLCJyZXRyaWV2ZVJlY2FwdGNoYVRva2VuIiwibW9ja1JlY2FwdGNoYSIsImluamVjdFJlY2FwdGNoYUZpZWxkcyIsImlzQ2FwdGNoYVJlc3AiLCJpc0Zha2VUb2tlbiIsInZlcmlmaWVyIiwiY2FwdGNoYVJlc3BvbnNlIiwibmV3UmVxdWVzdCIsInBob25lRW5yb2xsbWVudEluZm8iLCJyZWNhcHRjaGFUb2tlbiIsInBob25lU2lnbkluSW5mbyIsImhhbmRsZVJlY2FwdGNoYUZsb3ciLCJhdXRoSW5zdGFuY2UiLCJhY3Rpb25OYW1lIiwiYWN0aW9uTWV0aG9kIiwicmVjYXB0Y2hhQXV0aFByb3ZpZGVyIiwicmVxdWVzdFdpdGhSZWNhcHRjaGEiLCJsb2ciLCJfYTIiLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYUZpZWxkcyIsIl9pbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiZGVwcyIsIl9nZXRQcm92aWRlciIsImlzSW5pdGlhbGl6ZWQiLCJhdXRoMiIsImluaXRpYWxPcHRpb25zIiwiZ2V0T3B0aW9ucyIsImRlZXBFcXVhbCIsIl9pbml0aWFsaXplQXV0aEluc3RhbmNlIiwiaGllcmFyY2h5IiwiZGlzYWJsZVdhcm5pbmdzIiwiZXh0cmFjdFByb3RvY29sIiwicG9ydCIsImV4dHJhY3RIb3N0QW5kUG9ydCIsInBvcnRTdHIiLCJmcmVlemUiLCJwaW5nU2VydmVyIiwidXBkYXRlRW11bGF0b3JCYW5uZXIiLCJlbWl0RW11bGF0b3JXYXJuaW5nIiwicHJvdG9jb2xFbmQiLCJpbmRleE9mIiwic3Vic3RyIiwiYXV0aG9yaXR5IiwiZXhlYyIsImhvc3RBbmRQb3J0IiwicG9wIiwiYnJhY2tldGVkSVB2NiIsInBhcnNlUG9ydCIsImF0dGFjaEJhbm5lciIsImVsIiwiY3JlYXRlRWxlbWVudCIsInN0eSIsInN0eWxlIiwiaW5uZXJUZXh0IiwicG9zaXRpb24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImNvbG9yIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbiIsInpJbmRleCIsInRleHRBbGlnbiIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiaW5mbyIsInJlYWR5U3RhdGUiLCJzaWduSW5NZXRob2QiLCJfZ2V0SWRUb2tlblJlc3BvbnNlIiwiX2F1dGgiLCJfbGlua1RvSWRUb2tlbiIsIl9pZFRva2VuIiwiX2dldFJlYXV0aGVudGljYXRpb25SZXNvbHZlciIsInJlc2V0UGFzc3dvcmQiLCJ1cGRhdGVFbWFpbFBhc3N3b3JkIiwibGlua0VtYWlsUGFzc3dvcmQiLCJhcHBseUFjdGlvbkNvZGUkMSIsInNpZ25JbldpdGhQYXNzd29yZCIsInNlbmRPb2JDb2RlIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uJDEiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsJDEiLCJzZW5kU2lnbkluTGlua1RvRW1haWwkMSIsInZlcmlmeUFuZENoYW5nZUVtYWlsIiwic2lnbkluV2l0aEVtYWlsTGluayQxIiwic2lnbkluV2l0aEVtYWlsTGlua0ZvckxpbmtpbmciLCJfZW1haWwiLCJfcGFzc3dvcmQiLCJfdGVuYW50SWQiLCJfZnJvbUVtYWlsQW5kUGFzc3dvcmQiLCJfZnJvbUVtYWlsQW5kQ29kZSIsIm9vYkNvZGUiLCJvYmoiLCJyZXR1cm5TZWN1cmVUb2tlbiIsInNpZ25JbldpdGhJZHAiLCJJRFBfUkVRVUVTVF9VUkkkMSIsInBlbmRpbmdUb2tlbiIsIl9mcm9tUGFyYW1zIiwiY3JlZCIsIm5vbmNlIiwib2F1dGhUb2tlbiIsIm9hdXRoVG9rZW5TZWNyZXQiLCJzZWNyZXQiLCJidWlsZFJlcXVlc3QiLCJhdXRvQ3JlYXRlIiwicmVxdWVzdFVyaSIsInBvc3RCb2R5Iiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZSIsInNpZ25JbldpdGhQaG9uZU51bWJlciQxIiwibGlua1dpdGhQaG9uZU51bWJlciQxIiwidGVtcG9yYXJ5UHJvb2YiLCJWRVJJRllfUEhPTkVfTlVNQkVSX0ZPUl9FWElTVElOR19FUlJPUl9NQVBfIiwidmVyaWZ5UGhvbmVOdW1iZXJGb3JFeGlzdGluZyIsImFwaVJlcXVlc3QiLCJvcGVyYXRpb24iLCJfZnJvbVZlcmlmaWNhdGlvbiIsInZlcmlmaWNhdGlvbklkIiwidmVyaWZpY2F0aW9uQ29kZSIsIl9mcm9tVG9rZW5SZXNwb25zZSIsIl9tYWtlVmVyaWZpY2F0aW9uUmVxdWVzdCIsInNlc3Npb25JbmZvIiwicGFyc2VNb2RlIiwibW9kZSIsInBhcnNlRGVlcExpbmsiLCJsaW5rIiwicXVlcnlzdHJpbmdEZWNvZGUiLCJleHRyYWN0UXVlcnlzdHJpbmciLCJkb3VibGVEZWVwTGluayIsImlPU0RlZXBMaW5rIiwiaU9TRG91YmxlRGVlcExpbmsiLCJhY3Rpb25MaW5rIiwic2VhcmNoUGFyYW1zIiwiY29udGludWVVcmwiLCJwYXJzZUxpbmsiLCJQUk9WSURFUl9JRCIsImNyZWRlbnRpYWwiLCJjcmVkZW50aWFsV2l0aExpbmsiLCJlbWFpbExpbmsiLCJhY3Rpb25Db2RlVXJsIiwiRU1BSUxfUEFTU1dPUkRfU0lHTl9JTl9NRVRIT0QiLCJFTUFJTF9MSU5LX1NJR05fSU5fTUVUSE9EIiwiRmVkZXJhdGVkQXV0aFByb3ZpZGVyIiwiZGVmYXVsdExhbmd1YWdlQ29kZSIsImN1c3RvbVBhcmFtZXRlcnMiLCJzZXREZWZhdWx0TGFuZ3VhZ2UiLCJzZXRDdXN0b21QYXJhbWV0ZXJzIiwiY3VzdG9tT0F1dGhQYXJhbWV0ZXJzIiwiZ2V0Q3VzdG9tUGFyYW1ldGVycyIsIkJhc2VPQXV0aFByb3ZpZGVyIiwic2NvcGVzIiwiYWRkU2NvcGUiLCJzY29wZSIsImdldFNjb3BlcyIsImNyZWRlbnRpYWxGcm9tSlNPTiIsIl9jcmVkZW50aWFsIiwicmF3Tm9uY2UiLCJjcmVkZW50aWFsRnJvbVJlc3VsdCIsInVzZXJDcmVkZW50aWFsIiwib2F1dGhDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsImNyZWRlbnRpYWxGcm9tRXJyb3IiLCJ0b2tlblJlc3BvbnNlIiwib2F1dGhJZFRva2VuIiwib2F1dGhBY2Nlc3NUb2tlbiIsIkZBQ0VCT09LX1NJR05fSU5fTUVUSE9EIiwiY3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJHT09HTEVfU0lHTl9JTl9NRVRIT0QiLCJHSVRIVUJfU0lHTl9JTl9NRVRIT0QiLCJJRFBfUkVRVUVTVF9VUkkiLCJTQU1MQXV0aENyZWRlbnRpYWwiLCJfY3JlYXRlIiwiU0FNTF9QUk9WSURFUl9QUkVGSVgiLCJzYW1sQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJUV0lUVEVSX1NJR05fSU5fTUVUSE9EIiwic2lnblVwIiwiVXNlckNyZWRlbnRpYWxJbXBsIiwib3BlcmF0aW9uVHlwZSIsInByb3ZpZGVySWRGb3JSZXNwb25zZSIsInVzZXJDcmVkIiwiX2Zvck9wZXJhdGlvbiIsIk11bHRpRmFjdG9yRXJyb3IiLCJzZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsIl9mcm9tRXJyb3JBbmRPcGVyYXRpb24iLCJfcHJvY2Vzc0NyZWRlbnRpYWxTYXZpbmdNZmFDb250ZXh0SWZOZWNlc3NhcnkiLCJpZFRva2VuUHJvdmlkZXIiLCJwcm92aWRlckRhdGFBc05hbWVzIiwiU2V0IiwicGlkIiwiX2Fzc2VydExpbmtlZFN0YXR1cyIsImRlbGV0ZVByb3ZpZGVyIiwicHJvdmlkZXJzTGVmdCIsInBkIiwiaGFzIiwiX2xpbmskMSIsImV4cGVjdGVkIiwicHJvdmlkZXJJZHMiLCJfcmVhdXRoZW50aWNhdGUiLCJwYXJzZWQiLCJzdWIiLCJfc2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4kMSIsImN1c3RvbVRva2VuIiwiTXVsdGlGYWN0b3JJbmZvSW1wbCIsImZhY3RvcklkIiwibWZhRW5yb2xsbWVudElkIiwiZW5yb2xsbWVudFRpbWUiLCJlbnJvbGxlZEF0IiwiX2Zyb21TZXJ2ZXJSZXNwb25zZSIsImVucm9sbG1lbnQiLCJQaG9uZU11bHRpRmFjdG9ySW5mb0ltcGwiLCJUb3RwTXVsdGlGYWN0b3JJbmZvSW1wbCIsInBob25lSW5mbyIsIl9zZXRBY3Rpb25Db2RlU2V0dGluZ3NPblJlcXVlc3QiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJkeW5hbWljTGlua0RvbWFpbiIsImxpbmtEb21haW4iLCJjYW5IYW5kbGVDb2RlSW5BcHAiLCJoYW5kbGVDb2RlSW5BcHAiLCJpT1MiLCJidW5kbGVJZCIsImlPU0J1bmRsZUlkIiwiYW5kcm9pZCIsInBhY2thZ2VOYW1lIiwiYW5kcm9pZEluc3RhbGxBcHAiLCJpbnN0YWxsQXBwIiwiYW5kcm9pZE1pbmltdW1WZXJzaW9uQ29kZSIsIm1pbmltdW1WZXJzaW9uIiwiYW5kcm9pZFBhY2thZ2VOYW1lIiwicmVjYWNoZVBhc3N3b3JkUG9saWN5IiwicmVxdWVzdFR5cGUiLCJuZXdQYXNzd29yZCIsImF1dGhNb2R1bGFyIiwibmV3RW1haWwiLCJtZmFJbmZvIiwibXVsdGlGYWN0b3JJbmZvIiwiZGF0YSIsInByZXZpb3VzRW1haWwiLCJzaWduVXBSZXNwb25zZSIsInNldEFjdGlvbkNvZGVTZXR0aW5ncyIsInJlcXVlc3QyIiwiYWN0aW9uQ29kZVNldHRpbmdzMiIsImNyZWF0ZUF1dGhVcmkiLCJjb250aW51ZVVyaSIsImlkZW50aWZpZXIiLCJzaWduaW5NZXRob2RzIiwidXBkYXRlUHJvZmlsZSQxIiwicHJvZmlsZVJlcXVlc3QiLCJwYXNzd29yZFByb3ZpZGVyIiwiZmluZCIsInVwZGF0ZUVtYWlsT3JQYXNzd29yZCIsInByb2ZpbGUiLCJyYXdVc2VySW5mbyIsImlzTmV3VXNlciIsImtpbmQiLCJmaWx0ZXJlZFByb3ZpZGVySWQiLCJHZW5lcmljQWRkaXRpb25hbFVzZXJJbmZvIiwiRmFjZWJvb2tBZGRpdGlvbmFsVXNlckluZm8iLCJHaXRodWJBZGRpdGlvbmFsVXNlckluZm8iLCJHb29nbGVBZGRpdGlvbmFsVXNlckluZm8iLCJUd2l0dGVyQWRkaXRpb25hbFVzZXJJbmZvIiwic2NyZWVuTmFtZSIsIkZlZGVyYXRlZEFkZGl0aW9uYWxVc2VySW5mb1dpdGhVc2VybmFtZSIsInVzZXJuYW1lIiwibG9naW4iLCJNdWx0aUZhY3RvclNlc3Npb25JbXBsIiwiX2Zyb21JZHRva2VuIiwiX2Zyb21NZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm1mYVBlbmRpbmdDcmVkZW50aWFsIiwibXVsdGlGYWN0b3JTZXNzaW9uIiwicGVuZGluZ0NyZWRlbnRpYWwiLCJNdWx0aUZhY3RvclJlc29sdmVySW1wbCIsInNlc3Npb24iLCJoaW50cyIsInNpZ25JblJlc29sdmVyIiwiX2Zyb21FcnJvciIsIm1mYVJlc3BvbnNlIiwiX3Byb2Nlc3MiLCJyZXNvbHZlU2lnbkluIiwiYXNzZXJ0aW9uRXh0ZXJuIiwiZXJyb3JJbnRlcm5hbCIsInN0YXJ0RW5yb2xsUGhvbmVNZmEiLCJmaW5hbGl6ZUVucm9sbFBob25lTWZhIiwic3RhcnRFbnJvbGxUb3RwTWZhIiwiZmluYWxpemVFbnJvbGxUb3RwTWZhIiwid2l0aGRyYXdNZmEiLCJNdWx0aUZhY3RvclVzZXJJbXBsIiwiZW5yb2xsZWRGYWN0b3JzIiwiX2Zyb21Vc2VyIiwiZ2V0U2Vzc2lvbiIsImVucm9sbCIsImZpbmFsaXplTWZhUmVzcG9uc2UiLCJ1bmVucm9sbCIsImluZm9PclVpZCIsIm11bHRpRmFjdG9yVXNlckNhY2hlIiwiV2Vha01hcCIsInVzZXJNb2R1bGFyIiwiU1RPUkFHRV9BVkFJTEFCTEVfS0VZIiwiQnJvd3NlclBlcnNpc3RlbmNlQ2xhc3MiLCJzdG9yYWdlUmV0cmlldmVyIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwiX1BPTExJTkdfSU5URVJWQUxfTVMkMSIsIklFMTBfTE9DQUxfU1RPUkFHRV9TWU5DX0RFTEFZIiwiQnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJldmVudCIsInBvbGwiLCJvblN0b3JhZ2VFdmVudCIsImxpc3RlbmVycyIsImxvY2FsQ2FjaGUiLCJwb2xsVGltZXIiLCJmYWxsYmFja1RvUG9sbGluZyIsImZvckFsbENoYW5nZWRLZXlzIiwia2V5cyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJrZXkyIiwiX29sZFZhbHVlIiwibm90aWZ5TGlzdGVuZXJzIiwiZGV0YWNoTGlzdGVuZXIiLCJzdG9wUG9sbGluZyIsInRyaWdnZXJMaXN0ZW5lcnMiLCJzdG9yZWRWYWx1ZTIiLCJzdG9yZWRWYWx1ZSIsImxpc3RlbmVyIiwiZnJvbSIsInN0YXJ0UG9sbGluZyIsInNldEludGVydmFsIiwiU3RvcmFnZUV2ZW50IiwiY2xlYXJJbnRlcnZhbCIsImF0dGFjaExpc3RlbmVyIiwiUE9MTElOR19JTlRFUlZBTF9NUyIsImdldERvY3VtZW50Q29va2llIiwiZXNjYXBlZE5hbWUiLCJtYXRjaGVyIiwiUmVnRXhwIiwiY29va2llIiwiZ2V0Q29va2llTmFtZSIsImlzRGV2TW9kZSIsIkNvb2tpZVBlcnNpc3RlbmNlIiwibGlzdGVuZXJVbnN1YnNjcmliZXMiLCJvcmlnaW5hbFVybCIsIlVSTCIsIm9yaWdpbiIsImlzU2VjdXJlQ29udGV4dCIsImNvb2tpZUVuYWJsZWQiLCJfdmFsdWUiLCJjb29raWVTdG9yZSIsImV4aXN0aW5nVmFsdWUiLCJjaGFuZ2VkQ29va2llIiwiY2hhbmdlZCIsImNoYW5nZSIsImRlbGV0ZWRDb29raWUiLCJ1bnN1YnNjcmliZTIiLCJsYXN0VmFsdWUiLCJjdXJyZW50VmFsdWUiLCJCcm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwic2Vzc2lvblN0b3JhZ2UiLCJfYWxsU2V0dGxlZCIsInByb21pc2VzIiwiZnVsZmlsbGVkIiwicmVhc29uIiwiUmVjZWl2ZXIiLCJldmVudFRhcmdldCIsImhhbmRsZXJzTWFwIiwiaGFuZGxlRXZlbnQiLCJleGlzdGluZ0luc3RhbmNlIiwicmVjZWl2ZXJzIiwicmVjZWl2ZXIiLCJpc0xpc3RlbmluZ3RvIiwibmV3SW5zdGFuY2UiLCJtZXNzYWdlRXZlbnQiLCJldmVudElkIiwiZXZlbnRUeXBlIiwiaGFuZGxlcnMiLCJwb3J0cyIsInBvc3RNZXNzYWdlIiwiaGFuZGxlciIsIl9zdWJzY3JpYmUiLCJldmVudEhhbmRsZXIiLCJfdW5zdWJzY3JpYmUiLCJfZ2VuZXJhdGVFdmVudElkIiwiZGlnaXRzIiwiU2VuZGVyIiwidGFyZ2V0IiwicmVtb3ZlTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25NZXNzYWdlIiwiY2xvc2UiLCJfc2VuZCIsInRpbWVvdXQiLCJNZXNzYWdlQ2hhbm5lbCIsImNvbXBsZXRpb25UaW1lciIsInN0YXJ0IiwiYWNrVGltZXIiLCJwb3J0MiIsImZpbmFsbHkiLCJfd2luZG93IiwiX3NldFdpbmRvd0xvY2F0aW9uIiwiX2lzV29ya2VyIiwiX2dldEFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0cmF0aW9uIiwiYWN0aXZlIiwiX2dldFNlcnZpY2VXb3JrZXJDb250cm9sbGVyIiwiY29udHJvbGxlciIsIl9nZXRXb3JrZXJHbG9iYWxTY29wZSIsIkRCX05BTUUiLCJEQl9WRVJTSU9OIiwiREJfT0JKRUNUU1RPUkVfTkFNRSIsIkRCX0RBVEFfS0VZUEFUSCIsIkRCUHJvbWlzZSIsInRvUHJvbWlzZSIsImdldE9iamVjdFN0b3JlIiwiZGIiLCJpc1JlYWRXcml0ZSIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJfZGVsZXRlRGF0YWJhc2UiLCJpbmRleGVkREIiLCJkZWxldGVEYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJvcGVuIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwiX3B1dE9iamVjdCIsInB1dCIsImdldE9iamVjdCIsIl9kZWxldGVPYmplY3QiLCJfUE9MTElOR19JTlRFUlZBTF9NUyIsIl9UUkFOU0FDVElPTl9SRVRSWV9DT1VOVCIsIkluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJwZW5kaW5nV3JpdGVzIiwic2VuZGVyIiwic2VydmljZVdvcmtlclJlY2VpdmVyQXZhaWxhYmxlIiwiYWN0aXZlU2VydmljZVdvcmtlciIsIl93b3JrZXJJbml0aWFsaXphdGlvblByb21pc2UiLCJpbml0aWFsaXplU2VydmljZVdvcmtlck1lc3NhZ2luZyIsIl9vcGVuRGIiLCJfd2l0aFJldHJpZXMiLCJvcCIsIm51bUF0dGVtcHRzIiwiaW5pdGlhbGl6ZVJlY2VpdmVyIiwiaW5pdGlhbGl6ZVNlbmRlciIsIl9vcmlnaW4iLCJfcG9sbCIsImtleVByb2Nlc3NlZCIsIl9kYXRhIiwicmVzdWx0cyIsIm5vdGlmeVNlcnZpY2VXb3JrZXIiLCJfd2l0aFBlbmRpbmdXcml0ZSIsIndyaXRlIiwiZ2V0QWxsUmVxdWVzdCIsImdldEFsbCIsImtleXNJblJlc3VsdCIsImZiYXNlX2tleSIsImxvY2FsS2V5Iiwic3RhcnRTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblRvdHBNZmEiLCJfSlNMT0FEX0NBTExCQUNLIiwiTkVUV09SS19USU1FT1VUX0RFTEFZIiwiUmVDYXB0Y2hhTG9hZGVySW1wbCIsImhvc3RMYW5ndWFnZSIsImxpYnJhcnlTZXBhcmF0ZWx5TG9hZGVkIiwibG9hZCIsImhsIiwiaXNIb3N0TGFuZ3VhZ2VWYWxpZCIsInNob3VsZFJlc29sdmVJbW1lZGlhdGVseSIsInJlY2FwdGNoYSIsIndpZGdldElkIiwib25sb2FkIiwiY2xlYXJlZE9uZUluc3RhbmNlIiwiTW9ja1JlQ2FwdGNoYUxvYWRlckltcGwiLCJSRUNBUFRDSEFfVkVSSUZJRVJfVFlQRSIsIkRFRkFVTFRfUEFSQU1TIiwidGhlbWUiLCJkZXN0cm95ZWQiLCJ0b2tlbkNoYW5nZUxpc3RlbmVycyIsInJlbmRlclByb21pc2UiLCJpc0ludmlzaWJsZSIsIm1ha2VUb2tlbkNhbGxiYWNrIiwiX3JlY2FwdGNoYUxvYWRlciIsInZhbGlkYXRlU3RhcnRpbmdTdGF0ZSIsImFzc2VydE5vdERlc3Ryb3llZCIsImdldEFzc2VydGVkUmVjYXB0Y2hhIiwidG9rZW5DaGFuZ2UiLCJtYWtlUmVuZGVyUHJvbWlzZSIsIl9yZXNldCIsImNsZWFyIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlQ2hpbGQiLCJzaXRla2V5IiwiaGFzQ2hpbGROb2RlcyIsImV4aXN0aW5nIiwiZ2xvYmFsRnVuYyIsImluaXQiLCJndWFyYW50ZWVkRW1wdHkiLCJkb21SZWFkeSIsIkNvbmZpcm1hdGlvblJlc3VsdEltcGwiLCJvbkNvbmZpcm1hdGlvbiIsImNvbmZpcm0iLCJhdXRoQ3JlZGVudGlhbCIsImFwcFZlcmlmaWVyIiwiX3ZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVJbmZvT3B0aW9ucyIsInN0YXJ0UGhvbmVNZmFFbnJvbGxtZW50UmVxdWVzdCIsInN0YXJ0RW5yb2xsUGhvbmVNZmFBY3Rpb25DYWxsYmFjayIsInJlcXVlc3RXaXRoUmVjYXB0Y2hhVjIiLCJpbmplY3RSZWNhcHRjaGFWMlRva2VuIiwic3RhcnRQaG9uZU1mYUVucm9sbG1lbnRSZXNwb25zZSIsInBob25lU2Vzc2lvbkluZm8iLCJtdWx0aUZhY3RvckhpbnQiLCJtdWx0aUZhY3RvclVpZCIsInN0YXJ0UGhvbmVNZmFTaWduSW5SZXF1ZXN0Iiwic3RhcnRTaWduSW5QaG9uZU1mYUFjdGlvbkNhbGxiYWNrIiwic3RhcnRQaG9uZU1mYVNpZ25JblJlc3BvbnNlIiwicGhvbmVSZXNwb25zZUluZm8iLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlUmVxdWVzdCIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGVBY3Rpb25DYWxsYmFjayIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGVSZXNwb25zZSIsInJlY2FwdGNoYVYyVmVyaWZpZXIiLCJyZWNhcHRjaGFWMlRva2VuIiwicmVjYXB0Y2hhVmVyc2lvbiIsInZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVPcHRpb25zIiwiYXBwbGljYXRpb25WZXJpZmllciIsIlBIT05FX1NJR05fSU5fTUVUSE9EIiwiX3dpdGhEZWZhdWx0UmVzb2x2ZXIiLCJyZXNvbHZlck92ZXJyaWRlIiwiSWRwQ3JlZGVudGlhbCIsIl9idWlsZElkcFJlcXVlc3QiLCJzZXNzaW9uSWQiLCJyZXR1cm5JZHBDcmVkZW50aWFsIiwiX3NpZ25JbiIsIl9yZWF1dGgiLCJfbGluayIsIkFic3RyYWN0UG9wdXBSZWRpcmVjdE9wZXJhdGlvbiIsInBlbmRpbmdQcm9taXNlIiwiZXZlbnRNYW5hZ2VyIiwib25FeGVjdXRpb24iLCJyZWdpc3RlckNvbnN1bWVyIiwib25BdXRoRXZlbnQiLCJ1cmxSZXNwb25zZSIsImdldElkcFRhc2siLCJvbkVycm9yIiwidW5yZWdpc3RlckFuZENsZWFuVXAiLCJ1bnJlZ2lzdGVyQ29uc3VtZXIiLCJjbGVhblVwIiwiX1BPTExfV0lORE9XX0NMT1NFX1RJTUVPVVQiLCJyZXNvbHZlckludGVybmFsIiwiUG9wdXBPcGVyYXRpb24iLCJleGVjdXRlTm90TnVsbCIsImF1dGhXaW5kb3ciLCJwb2xsSWQiLCJjdXJyZW50UG9wdXBBY3Rpb24iLCJjYW5jZWwiLCJfb3BlblBvcHVwIiwiYXNzb2NpYXRlZEV2ZW50IiwiX29yaWdpblZhbGlkYXRpb24iLCJfaXNJZnJhbWVXZWJTdG9yYWdlU3VwcG9ydGVkIiwiaXNTdXBwb3J0ZWQiLCJwb2xsVXNlckNhbmNlbGxhdGlvbiIsImNsb3NlZCIsIlBFTkRJTkdfUkVESVJFQ1RfS0VZIiwicmVkaXJlY3RPdXRjb21lTWFwIiwiUmVkaXJlY3RBY3Rpb24iLCJyZWFkeU91dGNvbWUiLCJoYXNQZW5kaW5nUmVkaXJlY3QiLCJfZ2V0QW5kQ2xlYXJQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJwZW5kaW5nUmVkaXJlY3RLZXkiLCJyZXNvbHZlclBlcnNpc3RlbmNlIiwiX3NldFBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsIl9jbGVhclJlZGlyZWN0T3V0Y29tZXMiLCJfc2lnbkluV2l0aFJlZGlyZWN0IiwiX29wZW5SZWRpcmVjdCIsIl9yZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInByZXBhcmVVc2VyRm9yUmVkaXJlY3QiLCJfbGlua1dpdGhSZWRpcmVjdCIsIl9nZXRSZWRpcmVjdFJlc3VsdCIsInJlc29sdmVyRXh0ZXJuIiwiRVZFTlRfRFVQTElDQVRJT05fQ0FDSEVfRFVSQVRJT05fTVMiLCJBdXRoRXZlbnRNYW5hZ2VyIiwiY2FjaGVkRXZlbnRVaWRzIiwiY29uc3VtZXJzIiwicXVldWVkUmVkaXJlY3RFdmVudCIsImhhc0hhbmRsZWRQb3RlbnRpYWxSZWRpcmVjdCIsImxhc3RQcm9jZXNzZWRFdmVudFRpbWUiLCJhdXRoRXZlbnRDb25zdW1lciIsImlzRXZlbnRGb3JDb25zdW1lciIsInNlbmRUb0NvbnN1bWVyIiwic2F2ZUV2ZW50VG9DYWNoZSIsIm9uRXZlbnQiLCJoYXNFdmVudEJlZW5IYW5kbGVkIiwiaGFuZGxlZCIsImNvbnN1bWVyIiwiaXNSZWRpcmVjdEV2ZW50IiwiaXNOdWxsUmVkaXJlY3RFdmVudCIsImV2ZW50SWRNYXRjaGVzIiwiZXZlbnRVaWQiLCJ2IiwiX2dldFByb2plY3RDb25maWciLCJJUF9BRERSRVNTX1JFR0VYIiwiSFRUUF9SRUdFWCIsIl92YWxpZGF0ZU9yaWdpbiIsImF1dGhvcml6ZWREb21haW5zIiwiZG9tYWluIiwibWF0Y2hEb21haW4iLCJjdXJyZW50VXJsIiwiaG9zdG5hbWUiLCJjZVVybCIsImVzY2FwZWREb21haW5QYXR0ZXJuIiwiTkVUV09SS19USU1FT1VUIiwicmVzZXRVbmxvYWRlZEdhcGlNb2R1bGVzIiwiYmVhY29uIiwiX19fanNsIiwiSCIsImhpbnQiLCJyIiwiTCIsIkNQIiwibG9hZEdhcGkiLCJsb2FkR2FwaUlmcmFtZSIsImdhcGkiLCJpZnJhbWVzIiwiZ2V0Q29udGV4dCIsIm9udGltZW91dCIsIklmcmFtZSIsImNiTmFtZSIsImNhY2hlZEdBcGlMb2FkZXIiLCJfbG9hZEdhcGkiLCJQSU5HX1RJTUVPVVQiLCJJRlJBTUVfUEFUSCIsIkVNVUxBVEVEX0lGUkFNRV9QQVRIIiwiSUZSQU1FX0FUVFJJQlVURVMiLCJ0b3AiLCJoZWlnaHQiLCJ0YWJpbmRleCIsIkVJRF9GUk9NX0FQSUhPU1QiLCJnZXRJZnJhbWVVcmwiLCJlaWQiLCJmdyIsIl9vcGVuSWZyYW1lIiwiY29udGV4dCIsImdhcGkyIiwid2hlcmUiLCJtZXNzYWdlSGFuZGxlcnNGaWx0ZXIiLCJDUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVIiLCJhdHRyaWJ1dGVzIiwiZG9udGNsZWFyIiwiaWZyYW1lIiwicmVzdHlsZSIsInNldEhpZGVPbkxlYXZlIiwibmV0d29ya0Vycm9yIiwibmV0d29ya0Vycm9yVGltZXIiLCJjbGVhclRpbWVyQW5kUmVzb2x2ZSIsInBpbmciLCJCQVNFX1BPUFVQX09QVElPTlMiLCJyZXNpemFibGUiLCJzdGF0dXNiYXIiLCJ0b29sYmFyIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiVEFSR0VUX0JMQU5LIiwiRklSRUZPWF9FTVBUWV9VUkwiLCJBdXRoUG9wdXAiLCJ3aW5kb3cyIiwiX29wZW4iLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImF2YWlsV2lkdGgiLCJzY3JvbGxiYXJzIiwib3B0aW9uc1N0cmluZyIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2N1bSIsIm9wZW5Bc05ld1dpbmRvd0lPUyIsIm5ld1dpbiIsImZvY3VzIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIldJREdFVF9QQVRIIiwiRU1VTEFUT1JfV0lER0VUX1BBVEgiLCJGSVJFQkFTRV9BUFBfQ0hFQ0tfRlJBR01FTlRfSUQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfZ2V0UmVkaXJlY3RVcmwiLCJhdXRoVHlwZSIsInJlZGlyZWN0VXJsIiwiYWRkaXRpb25hbFBhcmFtcyIsImlzRW1wdHkiLCJ0aWQiLCJwYXJhbXNEaWN0IiwiYXBwQ2hlY2tUb2tlbkZyYWdtZW50IiwiZ2V0SGFuZGxlckJhc2UiLCJXRUJfU1RPUkFHRV9TVVBQT1JUX0tFWSIsIkJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJldmVudE1hbmFnZXJzIiwib3JpZ2luVmFsaWRhdGlvblByb21pc2VzIiwicHJvbWlzZTIiLCJpbml0QW5kR2V0TWFuYWdlciIsInJlZ2lzdGVyIiwiaWZyYW1lRXZlbnQiLCJhdXRoRXZlbnQiLCJzZW5kIiwiTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2ZpbmFsaXplRW5yb2xsIiwiX2ZpbmFsaXplU2lnbkluIiwiUGhvbmVNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbUNyZWRlbnRpYWwiLCJwaG9uZVZlcmlmaWNhdGlvbkluZm8iLCJGQUNUT1JfSUQiLCJhc3NlcnRpb25Gb3JFbnJvbGxtZW50Iiwib25lVGltZVBhc3N3b3JkIiwiVG90cE11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tU2VjcmV0IiwiYXNzZXJ0aW9uRm9yU2lnbkluIiwiZW5yb2xsbWVudElkIiwiX2Zyb21FbnJvbGxtZW50SWQiLCJnZW5lcmF0ZVNlY3JldCIsIm1mYVNlc3Npb24iLCJ0b3RwRW5yb2xsbWVudEluZm8iLCJfZnJvbVN0YXJ0VG90cE1mYUVucm9sbG1lbnRSZXNwb25zZSIsIm90cCIsInRvdHBWZXJpZmljYXRpb25JbmZvIiwiX21ha2VUb3RwVmVyaWZpY2F0aW9uSW5mbyIsInNlY3JldEtleSIsImhhc2hpbmdBbGdvcml0aG0iLCJjb2RlTGVuZ3RoIiwiY29kZUludGVydmFsU2Vjb25kcyIsImVucm9sbG1lbnRDb21wbGV0aW9uRGVhZGxpbmUiLCJ0b3RwU2Vzc2lvbkluZm8iLCJzaGFyZWRTZWNyZXRLZXkiLCJ2ZXJpZmljYXRpb25Db2RlTGVuZ3RoIiwicGVyaW9kU2VjIiwiZmluYWxpemVFbnJvbGxtZW50VGltZSIsImdlbmVyYXRlUXJDb2RlVXJsIiwiYWNjb3VudE5hbWUiLCJpc3N1ZXIiLCJ1c2VEZWZhdWx0cyIsIl9pc0VtcHR5U3RyaW5nIiwiaW5wdXQiLCJBdXRoSW50ZXJvcCIsImludGVybmFsTGlzdGVuZXJzIiwiZ2V0VWlkIiwiYXNzZXJ0QXV0aENvbmZpZ3VyZWQiLCJhZGRBdXRoVG9rZW5MaXN0ZW5lciIsInVwZGF0ZVByb2FjdGl2ZVJlZnJlc2giLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsImdldFZlcnNpb25Gb3JQbGF0Zm9ybSIsInJlZ2lzdGVyQXV0aCIsIl9yZWdpc3RlckNvbXBvbmVudCIsImltcG9ydF9jb21wb25lbnQiLCJDb21wb25lbnQiLCJnZXRQcm92aWRlciIsInNldEluc3RhbnRpYXRpb25Nb2RlIiwic2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2siLCJfaW5zdGFuY2VJZGVudGlmaWVyIiwiX2luc3RhbmNlIiwiYXV0aEludGVybmFsUHJvdmlkZXIiLCJyZWdpc3RlclZlcnNpb24iLCJERUZBVUxUX0lEX1RPS0VOX01BWF9BR0UiLCJhdXRoSWRUb2tlbk1heEFnZSIsImdldEV4cGVyaW1lbnRhbFNldHRpbmciLCJsYXN0UG9zdGVkSWRUb2tlbiIsIm1pbnRDb29raWVGYWN0b3J5IiwiaWRUb2tlblJlc3VsdCIsImlkVG9rZW5BZ2UiLCJnZXRBcHAiLCJhdXRoVG9rZW5TeW5jUGF0aCIsImF1dGhUb2tlblN5bmNVcmwiLCJtaW50Q29va2llIiwiYXV0aEVtdWxhdG9ySG9zdCIsImdldERlZmF1bHRFbXVsYXRvckhvc3QiLCJnZXRTY3JpcHRQYXJlbnRFbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJvbmVycm9yIiwiY2hhcnNldCIsImltcG9ydF9hcHAyIiwicmVxdWlyZSIsImltcG9ydF91dGlsMiIsImltcG9ydF9sb2dnZXIyIiwiaW1wb3J0X3RzbGliMiIsImltcG9ydF9jb21wb25lbnQyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxRQUFBLENBQUFELG1CQUFBO0VBQUFFLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFB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