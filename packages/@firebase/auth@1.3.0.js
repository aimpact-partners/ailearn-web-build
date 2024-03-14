System.register(["@firebase/util@1.9.3","@firebase/component@0.6.4","@firebase/logger@0.4.0","idb@7.1.1","@firebase/app@0.9.20","tslib@2.6.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.9.3"],["@firebase/component","0.6.4"],["@firebase/logger","0.4.0"],["idb","7.1.1"],["@firebase/app","0.9.20"],["tslib","2.6.2"],["@firebase/auth","1.3.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.9.3', dep), dep => dependencies.set('@firebase/component@0.6.4', dep), dep => dependencies.set('@firebase/logger@0.4.0', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.9.20', dep), dep => dependencies.set('tslib@2.6.2', dep)],
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

// .beyond/uimport/temp/@firebase/auth.1.3.0.js
var auth_1_3_0_exports = {};
__export(auth_1_3_0_exports, {
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
module.exports = __toCommonJS(auth_1_3_0_exports);

// node_modules/@firebase/auth/dist/esm2017/index-9a76d29a.js
var import_util = require("@firebase/util@1.9.3");
var import_app = require("@firebase/app@0.9.20");
var import_logger = require("@firebase/logger@0.4.0");
var import_tslib = require("tslib@2.6.2");
var import_component = require("@firebase/component@0.6.4");
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
function isV2(grecaptcha) {
  return grecaptcha !== void 0 && grecaptcha.getResponse !== void 0;
}
function isEnterprise(grecaptcha) {
  return grecaptcha !== void 0 && grecaptcha.enterprise !== void 0;
}
var RecaptchaConfig = class {
  constructor(response) {
    this.siteKey = "";
    this.emailPasswordEnabled = false;
    if (response.recaptchaKey === void 0) {
      throw new Error("recaptchaKey undefined");
    }
    this.siteKey = response.recaptchaKey.split("/")[3];
    this.emailPasswordEnabled = response.recaptchaEnforcementState.some(enforcementState => enforcementState.provider === "EMAIL_PASSWORD_PROVIDER" && enforcementState.enforcementState !== "OFF");
  }
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
    ["invalid-credential"]: "The supplied auth credential is malformed or has expired.",
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
    debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl) {
      return this.headersImpl;
    }
    if (typeof self !== "undefined" && "Headers" in self) {
      return self.Headers;
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
function getScriptParentElement() {
  var _a, _b;
  return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}
function _loadJS(url) {
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
}
function _generateCallbackName(prefix) {
  return `__${prefix}${Math.floor(Math.random() * 1e6)}`;
}
var RECAPTCHA_ENTERPRISE_URL = "https://www.google.com/recaptcha/enterprise.js?render=";
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
          _loadJS(RECAPTCHA_ENTERPRISE_URL + siteKey).then(() => {
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
  if (config.emailPasswordEnabled) {
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
    var _a;
    switch (this.signInMethod) {
      case "password":
        const request = {
          returnSecureToken: true,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
        };
        if ((_a = auth._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
          const requestWithRecaptcha = await injectRecaptchaFields(auth, request, "signInWithPassword");
          return signInWithPassword(auth, requestWithRecaptcha);
        } else {
          return signInWithPassword(auth, request).catch(async error => {
            if (error.code === `auth/${"missing-recaptcha-token"}`) {
              console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const requestWithRecaptcha = await injectRecaptchaFields(auth, request, "signInWithPassword");
              return signInWithPassword(auth, requestWithRecaptcha);
            } else {
              return Promise.reject(error);
            }
          });
        }
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
        return updateEmailPassword(auth, {
          idToken,
          returnSecureToken: true,
          email: this._email,
          password: this._password
        });
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
  var _a;
  const authInternal = _castAuth(auth);
  const request = {
    requestType: "PASSWORD_RESET",
    email,
    clientType: "CLIENT_TYPE_WEB"
  };
  if ((_a = authInternal._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
    const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "getOobCode", true);
    if (actionCodeSettings) {
      _setActionCodeSettingsOnRequest(authInternal, requestWithRecaptcha, actionCodeSettings);
    }
    await sendPasswordResetEmail$1(authInternal, requestWithRecaptcha);
  } else {
    if (actionCodeSettings) {
      _setActionCodeSettingsOnRequest(authInternal, request, actionCodeSettings);
    }
    await sendPasswordResetEmail$1(authInternal, request).catch(async error => {
      if (error.code === `auth/${"missing-recaptcha-token"}`) {
        console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
        const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "getOobCode", true);
        if (actionCodeSettings) {
          _setActionCodeSettingsOnRequest(authInternal, requestWithRecaptcha, actionCodeSettings);
        }
        await sendPasswordResetEmail$1(authInternal, requestWithRecaptcha);
      } else {
        return Promise.reject(error);
      }
    });
  }
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
  var _a;
  const authInternal = _castAuth(auth);
  const request = {
    returnSecureToken: true,
    email,
    password,
    clientType: "CLIENT_TYPE_WEB"
  };
  let signUpResponse;
  if ((_a = authInternal._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
    const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "signUpPassword");
    signUpResponse = signUp(authInternal, requestWithRecaptcha);
  } else {
    signUpResponse = signUp(authInternal, request).catch(async error => {
      if (error.code === `auth/${"missing-recaptcha-token"}`) {
        console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
        const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "signUpPassword");
        return signUp(authInternal, requestWithRecaptcha);
      }
      throw error;
    });
  }
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
  var _a;
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
  if ((_a = authInternal._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
    const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "getOobCode", true);
    setActionCodeSettings(requestWithRecaptcha, actionCodeSettings);
    await sendSignInLinkToEmail$1(authInternal, requestWithRecaptcha);
  } else {
    setActionCodeSettings(request, actionCodeSettings);
    await sendSignInLinkToEmail$1(authInternal, request).catch(async error => {
      if (error.code === `auth/${"missing-recaptcha-token"}`) {
        console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
        const requestWithRecaptcha = await injectRecaptchaFields(authInternal, request, "getOobCode", true);
        setActionCodeSettings(requestWithRecaptcha, actionCodeSettings);
        await sendSignInLinkToEmail$1(authInternal, requestWithRecaptcha);
      } else {
        return Promise.reject(error);
      }
    });
  }
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
var RECAPTCHA_BASE = "https://www.google.com/recaptcha/api.js?";
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
      const url = `${RECAPTCHA_BASE}?${(0, import_util.querystring)({
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
      return _loadJS(`https://apis.google.com/js/api.js?onload=${cbName}`).catch(e => reject(e));
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
var version = "1.3.0";
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
  const authTokenSyncUrl = (0, import_util.getExperimentalSetting)("authTokenSyncURL");
  if (authTokenSyncUrl) {
    const mintCookie = mintCookieFactory(authTokenSyncUrl);
    beforeAuthStateChanged(auth, mintCookie, () => mintCookie(auth.currentUser));
    onIdTokenChanged(auth, user => mintCookie(user));
  }
  const authEmulatorHost = (0, import_util.getDefaultEmulatorHost)("auth");
  if (authEmulatorHost) {
    connectAuthEmulator(auth, `http://${authEmulatorHost}`);
  }
  return auth;
}
registerAuth("Browser");

// node_modules/@firebase/auth/dist/esm2017/index.js
var import_util2 = require("@firebase/util@1.9.3");
var import_app2 = require("@firebase/app@0.9.20");
var import_logger2 = require("@firebase/logger@0.4.0");
var import_tslib2 = require("tslib@2.6.2");
var import_component2 = require("@firebase/component@0.6.4");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hdXRoLjEuMy4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tb2RlbC9lbnVtX21hcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9sb2cudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9hc3NlcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9sb2NhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL25hdmlnYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2RlbGF5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9mZXRjaF9wcm92aWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vcmVjYXB0Y2hhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2FjY291bnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC90aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaWRfdG9rZW5fcmVzdWx0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaW52YWxpZGF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcHJvYWN0aXZlX3JlZnJlc2gudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX21ldGFkYXRhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVsb2FkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci90b2tlbl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaW5zdGFudGlhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luX21lbW9yeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9wZXJzaXN0ZW5jZV91c2VyX21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmVyc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL21pZGRsZXdhcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wYXNzd29yZF9wb2xpY3kvZ2V0X3Bhc3N3b3JkX3BvbGljeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3Bhc3N3b3JkX3BvbGljeV9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2xvYWRfanMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9lbnRlcnByaXNlX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvaW5pdGlhbGl6ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2F1dGhfY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc21zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2FjdGlvbl9jb2RlX3VybC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZlZGVyYXRlZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZhY2Vib29rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9nb29nbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dpdGh1Yi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy90d2l0dGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc2lnbl91cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfY3JlZGVudGlhbF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYW5vbnltb3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Vycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcHJvdmlkZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvbGlua191bmxpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWF1dGhlbnRpY2F0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2FjdGlvbl9jb2RlX3NldHRpbmdzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2NyZWF0ZV9hdXRoX3VyaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L3Byb2ZpbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hY2NvdW50X2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hZGRpdGlvbmFsX3VzZXJfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9zZXNzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV91c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvbG9jYWxfc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9zZXNzaW9uX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcHJvbWlzZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9yZWNlaXZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2V2ZW50X2lkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3NlbmRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9hdXRoX3dpbmRvdy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3dvcmtlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9pbmRleGVkX2RiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbW9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2xvYWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcHJvdmlkZXJzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hYnN0cmFjdF9wb3B1cF9yZWRpcmVjdF9vcGVyYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2V2ZW50X21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wcm9qZWN0X2NvbmZpZy9nZXRfcHJvamVjdF9jb25maWcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92YWxpZGF0ZV9vcmlnaW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2dhcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2lmcmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaGFuZGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wb3B1cF9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9hc3NlcnRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWZhL2Fzc2VydGlvbnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9hc3NlcnRpb25zL3RvdHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9maXJlYmFzZV9pbnRlcm5hbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3JlZ2lzdGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL2Rpc3QvZXNtMjAxNy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhdXRoXzFfM18wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFjdGlvbkNvZGVPcGVyYXRpb24iLCJBY3Rpb25Db2RlVVJMIiwiQXV0aENyZWRlbnRpYWwiLCJBdXRoRXJyb3JDb2RlcyIsIkFVVEhfRVJST1JfQ09ERVNfTUFQX0RPX05PVF9VU0VfSU5URVJOQUxMWSIsIkVtYWlsQXV0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiRmFjdG9ySWQiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJPQXV0aENyZWRlbnRpYWwiLCJPQXV0aFByb3ZpZGVyIiwiT3BlcmF0aW9uVHlwZSIsIlBob25lQXV0aENyZWRlbnRpYWwiLCJQaG9uZUF1dGhQcm92aWRlciIsIlBob25lTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJQcm92aWRlcklkIiwiUmVjYXB0Y2hhVmVyaWZpZXIiLCJTQU1MQXV0aFByb3ZpZGVyIiwiU2lnbkluTWV0aG9kIiwiVG90cE11bHRpRmFjdG9yR2VuZXJhdG9yIiwiVG90cFNlY3JldCIsIlR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJhcHBseUFjdGlvbkNvZGUiLCJiZWZvcmVBdXRoU3RhdGVDaGFuZ2VkIiwiYnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJicm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsImNoZWNrQWN0aW9uQ29kZSIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29ubmVjdEF1dGhFbXVsYXRvciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRlYnVnRXJyb3JNYXAiLCJkZWxldGVVc2VyIiwiZmV0Y2hTaWduSW5NZXRob2RzRm9yRW1haWwiLCJnZXRBZGRpdGlvbmFsVXNlckluZm8iLCJnZXRBdXRoIiwiZ2V0SWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJnZXRNdWx0aUZhY3RvclJlc29sdmVyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJpbk1lbW9yeVBlcnNpc3RlbmNlIiwiaW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsImluaXRpYWxpemVBdXRoIiwiaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImlzU2lnbkluV2l0aEVtYWlsTGluayIsImxpbmtXaXRoQ3JlZGVudGlhbCIsImxpbmtXaXRoUGhvbmVOdW1iZXIiLCJsaW5rV2l0aFBvcHVwIiwibGlua1dpdGhSZWRpcmVjdCIsIm11bHRpRmFjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwib25JZFRva2VuQ2hhbmdlZCIsInBhcnNlQWN0aW9uQ29kZVVSTCIsInByb2RFcnJvck1hcCIsInJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQaG9uZU51bWJlciIsInJlYXV0aGVudGljYXRlV2l0aFBvcHVwIiwicmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJyZWxvYWQiLCJzZW5kRW1haWxWZXJpZmljYXRpb24iLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsIiwic2V0UGVyc2lzdGVuY2UiLCJzaWduSW5Bbm9ueW1vdXNseSIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxMaW5rIiwic2lnbkluV2l0aFBob25lTnVtYmVyIiwic2lnbkluV2l0aFBvcHVwIiwic2lnbkluV2l0aFJlZGlyZWN0Iiwic2lnbk91dCIsInVubGluayIsInVwZGF0ZUN1cnJlbnRVc2VyIiwidXBkYXRlRW1haWwiLCJ1cGRhdGVQYXNzd29yZCIsInVwZGF0ZVBob25lTnVtYmVyIiwidXBkYXRlUHJvZmlsZSIsInVzZURldmljZUxhbmd1YWdlIiwidmFsaWRhdGVQYXNzd29yZCIsInZlcmlmeUJlZm9yZVVwZGF0ZUVtYWlsIiwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUEhPTkUiLCJUT1RQIiwiRkFDRUJPT0siLCJHSVRIVUIiLCJHT09HTEUiLCJQQVNTV09SRCIsIlRXSVRURVIiLCJFTUFJTF9MSU5LIiwiRU1BSUxfUEFTU1dPUkQiLCJMSU5LIiwiUkVBVVRIRU5USUNBVEUiLCJTSUdOX0lOIiwiRU1BSUxfU0lHTklOIiwiUEFTU1dPUkRfUkVTRVQiLCJSRUNPVkVSX0VNQUlMIiwiUkVWRVJUX1NFQ09ORF9GQUNUT1JfQURESVRJT04iLCJWRVJJRllfQU5EX0NIQU5HRV9FTUFJTCIsIlZFUklGWV9FTUFJTCIsImlzVjIiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJpc0VudGVycHJpc2UiLCJlbnRlcnByaXNlIiwiUmVjYXB0Y2hhQ29uZmlnIiwiY29uc3RydWN0b3IiLCJyZXNwb25zZSIsInNpdGVLZXkiLCJlbWFpbFBhc3N3b3JkRW5hYmxlZCIsInJlY2FwdGNoYUtleSIsIkVycm9yIiwic3BsaXQiLCJyZWNhcHRjaGFFbmZvcmNlbWVudFN0YXRlIiwic29tZSIsImVuZm9yY2VtZW50U3RhdGUiLCJwcm92aWRlciIsIl9kZWJ1Z0Vycm9yTWFwIiwiX3Byb2RFcnJvck1hcCIsIl9ERUZBVUxUX0FVVEhfRVJST1JfRkFDVE9SWSIsImltcG9ydF91dGlsIiwiRXJyb3JGYWN0b3J5IiwiQURNSU5fT05MWV9PUEVSQVRJT04iLCJBUkdVTUVOVF9FUlJPUiIsIkFQUF9OT1RfQVVUSE9SSVpFRCIsIkFQUF9OT1RfSU5TVEFMTEVEIiwiQ0FQVENIQV9DSEVDS19GQUlMRUQiLCJDT0RFX0VYUElSRUQiLCJDT1JET1ZBX05PVF9SRUFEWSIsIkNPUlNfVU5TVVBQT1JURUQiLCJDUkVERU5USUFMX0FMUkVBRFlfSU5fVVNFIiwiQ1JFREVOVElBTF9NSVNNQVRDSCIsIkNSRURFTlRJQUxfVE9PX09MRF9MT0dJTl9BR0FJTiIsIkRFUEVOREVOVF9TREtfSU5JVF9CRUZPUkVfQVVUSCIsIkRZTkFNSUNfTElOS19OT1RfQUNUSVZBVEVEIiwiRU1BSUxfQ0hBTkdFX05FRURTX1ZFUklGSUNBVElPTiIsIkVNQUlMX0VYSVNUUyIsIkVNVUxBVE9SX0NPTkZJR19GQUlMRUQiLCJFWFBJUkVEX09PQl9DT0RFIiwiRVhQSVJFRF9QT1BVUF9SRVFVRVNUIiwiSU5URVJOQUxfRVJST1IiLCJJTlZBTElEX0FQSV9LRVkiLCJJTlZBTElEX0FQUF9DUkVERU5USUFMIiwiSU5WQUxJRF9BUFBfSUQiLCJJTlZBTElEX0FVVEgiLCJJTlZBTElEX0FVVEhfRVZFTlQiLCJJTlZBTElEX0NFUlRfSEFTSCIsIklOVkFMSURfQ09ERSIsIklOVkFMSURfQ09OVElOVUVfVVJJIiwiSU5WQUxJRF9DT1JET1ZBX0NPTkZJR1VSQVRJT04iLCJJTlZBTElEX0NVU1RPTV9UT0tFTiIsIklOVkFMSURfRFlOQU1JQ19MSU5LX0RPTUFJTiIsIklOVkFMSURfRU1BSUwiLCJJTlZBTElEX0VNVUxBVE9SX1NDSEVNRSIsIklOVkFMSURfSURQX1JFU1BPTlNFIiwiSU5WQUxJRF9NRVNTQUdFX1BBWUxPQUQiLCJJTlZBTElEX01GQV9TRVNTSU9OIiwiSU5WQUxJRF9PQVVUSF9DTElFTlRfSUQiLCJJTlZBTElEX09BVVRIX1BST1ZJREVSIiwiSU5WQUxJRF9PT0JfQ09ERSIsIklOVkFMSURfT1JJR0lOIiwiSU5WQUxJRF9QQVNTV09SRCIsIklOVkFMSURfUEVSU0lTVEVOQ0UiLCJJTlZBTElEX1BIT05FX05VTUJFUiIsIklOVkFMSURfUFJPVklERVJfSUQiLCJJTlZBTElEX1JFQ0lQSUVOVF9FTUFJTCIsIklOVkFMSURfU0VOREVSIiwiSU5WQUxJRF9TRVNTSU9OX0lORk8iLCJJTlZBTElEX1RFTkFOVF9JRCIsIk1GQV9JTkZPX05PVF9GT1VORCIsIk1GQV9SRVFVSVJFRCIsIk1JU1NJTkdfQU5EUk9JRF9QQUNLQUdFX05BTUUiLCJNSVNTSU5HX0FQUF9DUkVERU5USUFMIiwiTUlTU0lOR19BVVRIX0RPTUFJTiIsIk1JU1NJTkdfQ09ERSIsIk1JU1NJTkdfQ09OVElOVUVfVVJJIiwiTUlTU0lOR19JRlJBTUVfU1RBUlQiLCJNSVNTSU5HX0lPU19CVU5ETEVfSUQiLCJNSVNTSU5HX09SX0lOVkFMSURfTk9OQ0UiLCJNSVNTSU5HX01GQV9JTkZPIiwiTUlTU0lOR19NRkFfU0VTU0lPTiIsIk1JU1NJTkdfUEhPTkVfTlVNQkVSIiwiTUlTU0lOR19TRVNTSU9OX0lORk8iLCJNT0RVTEVfREVTVFJPWUVEIiwiTkVFRF9DT05GSVJNQVRJT04iLCJORVRXT1JLX1JFUVVFU1RfRkFJTEVEIiwiTlVMTF9VU0VSIiwiTk9fQVVUSF9FVkVOVCIsIk5PX1NVQ0hfUFJPVklERVIiLCJPUEVSQVRJT05fTk9UX0FMTE9XRUQiLCJPUEVSQVRJT05fTk9UX1NVUFBPUlRFRCIsIlBPUFVQX0JMT0NLRUQiLCJQT1BVUF9DTE9TRURfQllfVVNFUiIsIlBST1ZJREVSX0FMUkVBRFlfTElOS0VEIiwiUVVPVEFfRVhDRUVERUQiLCJSRURJUkVDVF9DQU5DRUxMRURfQllfVVNFUiIsIlJFRElSRUNUX09QRVJBVElPTl9QRU5ESU5HIiwiUkVKRUNURURfQ1JFREVOVElBTCIsIlNFQ09ORF9GQUNUT1JfQUxSRUFEWV9FTlJPTExFRCIsIlNFQ09ORF9GQUNUT1JfTElNSVRfRVhDRUVERUQiLCJURU5BTlRfSURfTUlTTUFUQ0giLCJUSU1FT1VUIiwiVE9LRU5fRVhQSVJFRCIsIlRPT19NQU5ZX0FUVEVNUFRTX1RSWV9MQVRFUiIsIlVOQVVUSE9SSVpFRF9ET01BSU4iLCJVTlNVUFBPUlRFRF9GSVJTVF9GQUNUT1IiLCJVTlNVUFBPUlRFRF9QRVJTSVNURU5DRSIsIlVOU1VQUE9SVEVEX1RFTkFOVF9PUEVSQVRJT04iLCJVTlZFUklGSUVEX0VNQUlMIiwiVVNFUl9DQU5DRUxMRUQiLCJVU0VSX0RFTEVURUQiLCJVU0VSX0RJU0FCTEVEIiwiVVNFUl9NSVNNQVRDSCIsIlVTRVJfU0lHTkVEX09VVCIsIldFQUtfUEFTU1dPUkQiLCJXRUJfU1RPUkFHRV9VTlNVUFBPUlRFRCIsIkFMUkVBRFlfSU5JVElBTElaRUQiLCJSRUNBUFRDSEFfTk9UX0VOQUJMRUQiLCJNSVNTSU5HX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfQUNUSU9OIiwiTUlTU0lOR19DTElFTlRfVFlQRSIsIk1JU1NJTkdfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRVFfVFlQRSIsImxvZ0NsaWVudCIsImltcG9ydF9sb2dnZXIiLCJMb2dnZXIiLCJfbG9nV2FybiIsIm1zZyIsImFyZ3MiLCJsb2dMZXZlbCIsIkxvZ0xldmVsIiwiV0FSTiIsIndhcm4iLCJpbXBvcnRfYXBwIiwiU0RLX1ZFUlNJT04iLCJfbG9nRXJyb3IiLCJFUlJPUiIsImVycm9yIiwiX2ZhaWwiLCJhdXRoT3JDb2RlIiwicmVzdCIsImNyZWF0ZUVycm9ySW50ZXJuYWwiLCJfY3JlYXRlRXJyb3IiLCJfZXJyb3JXaXRoQ3VzdG9tTWVzc2FnZSIsImF1dGgiLCJjb2RlIiwibWVzc2FnZSIsImVycm9yTWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiZmFjdG9yeSIsImNyZWF0ZSIsImFwcE5hbWUiLCJuYW1lIiwiX2Fzc2VydEluc3RhbmNlT2YiLCJvYmplY3QiLCJpbnN0YW5jZSIsImNvbnN0cnVjdG9ySW5zdGFuY2UiLCJmdWxsUGFyYW1zIiwic2xpY2UiLCJfZXJyb3JGYWN0b3J5IiwiX2Fzc2VydCIsImFzc2VydGlvbiIsImRlYnVnRmFpbCIsImZhaWx1cmUiLCJkZWJ1Z0Fzc2VydCIsIl9nZXRDdXJyZW50VXJsIiwic2VsZiIsIl9hIiwibG9jYXRpb24iLCJocmVmIiwiX2lzSHR0cE9ySHR0cHMiLCJfZ2V0Q3VycmVudFNjaGVtZSIsInByb3RvY29sIiwiX2lzT25saW5lIiwibmF2aWdhdG9yIiwib25MaW5lIiwiaXNCcm93c2VyRXh0ZW5zaW9uIiwiX2dldFVzZXJMYW5ndWFnZSIsIm5hdmlnYXRvckxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJEZWxheSIsInNob3J0RGVsYXkiLCJsb25nRGVsYXkiLCJpc01vYmlsZSIsImlzTW9iaWxlQ29yZG92YSIsImlzUmVhY3ROYXRpdmUiLCJnZXQiLCJNYXRoIiwibWluIiwiX2VtdWxhdG9yVXJsIiwiY29uZmlnIiwicGF0aCIsImVtdWxhdG9yIiwidXJsIiwic3RhcnRzV2l0aCIsIkZldGNoUHJvdmlkZXIiLCJpbml0aWFsaXplIiwiZmV0Y2hJbXBsIiwiaGVhZGVyc0ltcGwiLCJyZXNwb25zZUltcGwiLCJmZXRjaCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiUmVzcG9uc2UiLCJTRVJWRVJfRVJST1JfTUFQIiwiREVGQVVMVF9BUElfVElNRU9VVF9NUyIsIl9hZGRUaWRJZk5lY2Vzc2FyeSIsInJlcXVlc3QiLCJ0ZW5hbnRJZCIsIl9wZXJmb3JtQXBpUmVxdWVzdCIsIm1ldGhvZCIsImN1c3RvbUVycm9yTWFwIiwiX3BlcmZvcm1GZXRjaFdpdGhFcnJvckhhbmRsaW5nIiwiYm9keSIsInBhcmFtcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInF1ZXJ5c3RyaW5nIiwia2V5IiwiYXBpS2V5IiwiX2dldEFkZGl0aW9uYWxIZWFkZXJzIiwibGFuZ3VhZ2VDb2RlIiwiX2dldEZpbmFsVGFyZ2V0IiwiYXBpSG9zdCIsInJlZmVycmVyUG9saWN5IiwiZmV0Y2hGbiIsIl9jYW5Jbml0RW11bGF0b3IiLCJuZXR3b3JrVGltZW91dCIsIk5ldHdvcmtUaW1lb3V0IiwiUHJvbWlzZSIsInJhY2UiLCJwcm9taXNlIiwiY2xlYXJOZXR3b3JrVGltZW91dCIsImpzb24iLCJfbWFrZVRhZ2dlZEVycm9yIiwib2siLCJlcnJvck1lc3NhZ2UiLCJzZXJ2ZXJFcnJvckNvZGUiLCJzZXJ2ZXJFcnJvck1lc3NhZ2UiLCJhdXRoRXJyb3IiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJlIiwiRmlyZWJhc2VFcnJvciIsIlN0cmluZyIsIl9wZXJmb3JtU2lnbkluUmVxdWVzdCIsInNlcnZlclJlc3BvbnNlIiwiX3NlcnZlclJlc3BvbnNlIiwiaG9zdCIsImJhc2UiLCJhcGlTY2hlbWUiLCJ0aW1lciIsIl8iLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZXJyb3JQYXJhbXMiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiY3VzdG9tRGF0YSIsIl90b2tlblJlc3BvbnNlIiwiZ2V0UmVjYXB0Y2hhUGFyYW1zIiwicmVjYXB0Y2hhU2l0ZUtleSIsImdldFJlY2FwdGNoYUNvbmZpZyIsImRlbGV0ZUFjY291bnQiLCJkZWxldGVMaW5rZWRBY2NvdW50cyIsImdldEFjY291bnRJbmZvIiwidXRjVGltZXN0YW1wVG9EYXRlU3RyaW5nIiwidXRjVGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJOdW1iZXIiLCJpc05hTiIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsInVzZXIiLCJmb3JjZVJlZnJlc2giLCJnZXRNb2R1bGFySW5zdGFuY2UiLCJ1c2VySW50ZXJuYWwiLCJ0b2tlbiIsImNsYWltcyIsIl9wYXJzZVRva2VuIiwiZXhwIiwiYXV0aF90aW1lIiwiaWF0IiwiZmlyZWJhc2UiLCJzaWduSW5Qcm92aWRlciIsImF1dGhUaW1lIiwic2Vjb25kc1N0cmluZ1RvTWlsbGlzZWNvbmRzIiwiaXNzdWVkQXRUaW1lIiwiZXhwaXJhdGlvblRpbWUiLCJzaWduSW5TZWNvbmRGYWN0b3IiLCJzZWNvbmRzIiwiYWxnb3JpdGhtIiwicGF5bG9hZCIsInNpZ25hdHVyZSIsImRlY29kZWQiLCJiYXNlNjREZWNvZGUiLCJwYXJzZSIsInRvU3RyaW5nIiwiX3Rva2VuRXhwaXJlc0luIiwicGFyc2VkVG9rZW4iLCJfbG9nb3V0SWZJbnZhbGlkYXRlZCIsImJ5cGFzc0F1dGhTdGF0ZSIsImlzVXNlckludmFsaWRhdGVkIiwiY3VycmVudFVzZXIiLCJQcm9hY3RpdmVSZWZyZXNoIiwiaXNSdW5uaW5nIiwidGltZXJJZCIsImVycm9yQmFja29mZiIsIl9zdGFydCIsInNjaGVkdWxlIiwiX3N0b3AiLCJnZXRJbnRlcnZhbCIsIndhc0Vycm9yIiwiaW50ZXJ2YWwiLCJleHBUaW1lIiwic3RzVG9rZW5NYW5hZ2VyIiwibm93IiwibWF4IiwiaXRlcmF0aW9uIiwiVXNlck1ldGFkYXRhIiwiY3JlYXRlZEF0IiwibGFzdExvZ2luQXQiLCJfaW5pdGlhbGl6ZVRpbWUiLCJsYXN0U2lnbkluVGltZSIsImNyZWF0aW9uVGltZSIsIl9jb3B5IiwibWV0YWRhdGEiLCJ0b0pTT04iLCJfcmVsb2FkV2l0aG91dFNhdmluZyIsImlkVG9rZW4iLCJ1c2VycyIsImxlbmd0aCIsImNvcmVBY2NvdW50IiwiX25vdGlmeVJlbG9hZExpc3RlbmVyIiwibmV3UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJVc2VySW5mbyIsImV4dHJhY3RQcm92aWRlckRhdGEiLCJwcm92aWRlckRhdGEiLCJtZXJnZVByb3ZpZGVyRGF0YSIsIm9sZElzQW5vbnltb3VzIiwiaXNBbm9ueW1vdXMiLCJuZXdJc0Fub255bW91cyIsInBhc3N3b3JkSGFzaCIsInVwZGF0ZXMiLCJ1aWQiLCJsb2NhbElkIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsInBob3RvVXJsIiwiZW1haWxWZXJpZmllZCIsIl9wZXJzaXN0VXNlcklmQ3VycmVudCIsIl9ub3RpZnlMaXN0ZW5lcnNJZkN1cnJlbnQiLCJvcmlnaW5hbCIsIm5ld0RhdGEiLCJkZWR1cGVkIiwiZmlsdGVyIiwibyIsIm4iLCJwcm92aWRlcklkIiwicHJvdmlkZXJzIiwibWFwIiwiaW1wb3J0X3RzbGliIiwiX19yZXN0IiwicmF3SWQiLCJyZXF1ZXN0U3RzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJ0b2tlbkFwaUhvc3QiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNJbiIsImV4cGlyZXNfaW4iLCJyZWZyZXNoX3Rva2VuIiwiU3RzVG9rZW5NYW5hZ2VyIiwiaXNFeHBpcmVkIiwidXBkYXRlRnJvbVNlcnZlclJlc3BvbnNlIiwidXBkYXRlVG9rZW5zQW5kRXhwaXJhdGlvbiIsImdldFRva2VuIiwicmVmcmVzaCIsImNsZWFyUmVmcmVzaFRva2VuIiwib2xkVG9rZW4iLCJleHBpcmVzSW5TZWMiLCJmcm9tSlNPTiIsIm1hbmFnZXIiLCJfYXNzaWduIiwiX2Nsb25lIiwiX3BlcmZvcm1SZWZyZXNoIiwiYXNzZXJ0U3RyaW5nT3JVbmRlZmluZWQiLCJVc2VySW1wbCIsIm9wdCIsInByb2FjdGl2ZVJlZnJlc2giLCJyZWxvYWRVc2VySW5mbyIsInJlbG9hZExpc3RlbmVyIiwidXNlckluZm8iLCJuZXdVc2VyIiwiX29uUmVsb2FkIiwiY2FsbGJhY2siLCJfc3RhcnRQcm9hY3RpdmVSZWZyZXNoIiwiX3N0b3BQcm9hY3RpdmVSZWZyZXNoIiwiX3VwZGF0ZVRva2Vuc0lmTmVjZXNzYXJ5IiwicmVsb2FkMiIsInRva2Vuc1JlZnJlc2hlZCIsImRlbGV0ZSIsIl9yZWRpcmVjdEV2ZW50SWQiLCJfZnJvbUpTT04iLCJfYiIsIl9jIiwiX2QiLCJfZSIsIl9mIiwiX2ciLCJfaCIsInBsYWluT2JqZWN0VG9rZW5NYW5hZ2VyIiwiQXJyYXkiLCJpc0FycmF5IiwiX2Zyb21JZFRva2VuUmVzcG9uc2UiLCJpZFRva2VuUmVzcG9uc2UiLCJpbnN0YW5jZUNhY2hlIiwiTWFwIiwiX2dldEluc3RhbmNlIiwiY2xzIiwiRnVuY3Rpb24iLCJzZXQiLCJJbk1lbW9yeVBlcnNpc3RlbmNlIiwidHlwZSIsInN0b3JhZ2UiLCJfaXNBdmFpbGFibGUiLCJfc2V0IiwidmFsdWUiLCJfZ2V0IiwiX3JlbW92ZSIsIl9hZGRMaXN0ZW5lciIsIl9rZXkiLCJfbGlzdGVuZXIiLCJfcmVtb3ZlTGlzdGVuZXIiLCJfcGVyc2lzdGVuY2VLZXlOYW1lIiwiUGVyc2lzdGVuY2VVc2VyTWFuYWdlciIsInBlcnNpc3RlbmNlIiwidXNlcktleSIsIm5hbWUyIiwiZnVsbFVzZXJLZXkiLCJmdWxsUGVyc2lzdGVuY2VLZXkiLCJib3VuZEV2ZW50SGFuZGxlciIsIl9vblN0b3JhZ2VFdmVudCIsImJpbmQiLCJzZXRDdXJyZW50VXNlciIsImdldEN1cnJlbnRVc2VyIiwiYmxvYiIsInJlbW92ZUN1cnJlbnRVc2VyIiwic2F2ZVBlcnNpc3RlbmNlRm9yUmVkaXJlY3QiLCJuZXdQZXJzaXN0ZW5jZSIsInBlcnNpc3RlbmNlSGllcmFyY2h5IiwiYXZhaWxhYmxlUGVyc2lzdGVuY2VzIiwiYWxsIiwic2VsZWN0ZWRQZXJzaXN0ZW5jZSIsInVzZXJUb01pZ3JhdGUiLCJtaWdyYXRpb25IaWVyYXJjaHkiLCJwIiwiX3Nob3VsZEFsbG93TWlncmF0aW9uIiwiX2dldEJyb3dzZXJOYW1lIiwidXNlckFnZW50IiwidWEiLCJpbmNsdWRlcyIsIl9pc0lFTW9iaWxlIiwiX2lzRmlyZWZveCIsIl9pc0JsYWNrQmVycnkiLCJfaXNXZWJPUyIsIl9pc1NhZmFyaSIsIl9pc0Nocm9tZUlPUyIsIl9pc0FuZHJvaWQiLCJyZSIsIm1hdGNoZXMiLCJtYXRjaCIsImdldFVBIiwidGVzdCIsIl9pc0lPUyIsIl9pc0lPUzdPcjgiLCJfaXNJT1NTdGFuZGFsb25lIiwid2luZG93Iiwic3RhbmRhbG9uZSIsIl9pc0lFMTAiLCJpc0lFIiwiZG9jdW1lbnQiLCJkb2N1bWVudE1vZGUiLCJfaXNNb2JpbGVCcm93c2VyIiwiX2lzSWZyYW1lIiwidG9wIiwiX2dldENsaWVudFZlcnNpb24iLCJjbGllbnRQbGF0Zm9ybSIsImZyYW1ld29ya3MiLCJyZXBvcnRlZFBsYXRmb3JtIiwicmVwb3J0ZWRGcmFtZXdvcmtzIiwiam9pbiIsIkF1dGhNaWRkbGV3YXJlUXVldWUiLCJxdWV1ZSIsInB1c2hDYWxsYmFjayIsIm9uQWJvcnQiLCJ3cmFwcGVkQ2FsbGJhY2siLCJyZXNvbHZlIiwicmVzdWx0IiwicHVzaCIsImluZGV4IiwicnVuTWlkZGxld2FyZSIsIm5leHRVc2VyIiwib25BYm9ydFN0YWNrIiwiYmVmb3JlU3RhdGVDYWxsYmFjayIsInJldmVyc2UiLCJvcmlnaW5hbE1lc3NhZ2UiLCJfZ2V0UGFzc3dvcmRQb2xpY3kiLCJNSU5JTVVNX01JTl9QQVNTV09SRF9MRU5HVEgiLCJQYXNzd29yZFBvbGljeUltcGwiLCJyZXNwb25zZU9wdGlvbnMiLCJjdXN0b21TdHJlbmd0aE9wdGlvbnMiLCJtaW5QYXNzd29yZExlbmd0aCIsIm1heFBhc3N3b3JkTGVuZ3RoIiwiY29udGFpbnNMb3dlcmNhc2VDaGFyYWN0ZXIiLCJjb250YWluc0xvd2VyY2FzZUxldHRlciIsImNvbnRhaW5zVXBwZXJjYXNlQ2hhcmFjdGVyIiwiY29udGFpbnNVcHBlcmNhc2VMZXR0ZXIiLCJjb250YWluc051bWVyaWNDaGFyYWN0ZXIiLCJjb250YWluc05vbkFscGhhbnVtZXJpY0NoYXJhY3RlciIsImFsbG93ZWROb25BbHBoYW51bWVyaWNDaGFyYWN0ZXJzIiwiZm9yY2VVcGdyYWRlT25TaWduaW4iLCJzY2hlbWFWZXJzaW9uIiwicGFzc3dvcmQiLCJzdGF0dXMiLCJpc1ZhbGlkIiwicGFzc3dvcmRQb2xpY3kiLCJ2YWxpZGF0ZVBhc3N3b3JkTGVuZ3RoT3B0aW9ucyIsInZhbGlkYXRlUGFzc3dvcmRDaGFyYWN0ZXJPcHRpb25zIiwibWVldHNNaW5QYXNzd29yZExlbmd0aCIsIm1lZXRzTWF4UGFzc3dvcmRMZW5ndGgiLCJ1cGRhdGVQYXNzd29yZENoYXJhY3Rlck9wdGlvbnNTdGF0dXNlcyIsInBhc3N3b3JkQ2hhciIsImkiLCJjaGFyQXQiLCJBdXRoSW1wbCIsImFwcCIsImhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlciIsImFwcENoZWNrU2VydmljZVByb3ZpZGVyIiwiZW11bGF0b3JDb25maWciLCJvcGVyYXRpb25zIiwiYXV0aFN0YXRlU3Vic2NyaXB0aW9uIiwiU3Vic2NyaXB0aW9uIiwiaWRUb2tlblN1YnNjcmlwdGlvbiIsImJlZm9yZVN0YXRlUXVldWUiLCJyZWRpcmVjdFVzZXIiLCJpc1Byb2FjdGl2ZVJlZnJlc2hFbmFibGVkIiwiRVhQRUNURURfUEFTU1dPUkRfUE9MSUNZX1NDSEVNQV9WRVJTSU9OIiwiX2lzSW5pdGlhbGl6ZWQiLCJfZGVsZXRlZCIsIl9pbml0aWFsaXphdGlvblByb21pc2UiLCJfcG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiX2FnZW50UmVjYXB0Y2hhQ29uZmlnIiwiX3RlbmFudFJlY2FwdGNoYUNvbmZpZ3MiLCJfcHJvamVjdFBhc3N3b3JkUG9saWN5IiwiX3RlbmFudFBhc3N3b3JkUG9saWNpZXMiLCJsYXN0Tm90aWZpZWRVaWQiLCJzZXR0aW5ncyIsImFwcFZlcmlmaWNhdGlvbkRpc2FibGVkRm9yVGVzdGluZyIsImNsaWVudFZlcnNpb24iLCJzZGtDbGllbnRWZXJzaW9uIiwiX2luaXRpYWxpemVXaXRoUGVyc2lzdGVuY2UiLCJwb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJwZXJzaXN0ZW5jZU1hbmFnZXIiLCJfc2hvdWxkSW5pdFByb2FjdGl2ZWx5IiwiX2luaXRpYWxpemUiLCJpbml0aWFsaXplQ3VycmVudFVzZXIiLCJhc3NlcnRlZFBlcnNpc3RlbmNlIiwiX2N1cnJlbnRVc2VyIiwiX3VwZGF0ZUN1cnJlbnRVc2VyIiwicHJldmlvdXNseVN0b3JlZFVzZXIiLCJmdXR1cmVDdXJyZW50VXNlciIsIm5lZWRzVG9jaGVja01pZGRsZXdhcmUiLCJhdXRoRG9tYWluIiwiZ2V0T3JJbml0UmVkaXJlY3RQZXJzaXN0ZW5jZU1hbmFnZXIiLCJyZWRpcmVjdFVzZXJFdmVudElkIiwic3RvcmVkVXNlckV2ZW50SWQiLCJ0cnlSZWRpcmVjdFNpZ25JbiIsImRpcmVjdGx5U2V0Q3VycmVudFVzZXIiLCJfb3ZlcnJpZGVSZWRpcmVjdFJlc3VsdCIsInJlbG9hZEFuZFNldEN1cnJlbnRVc2VyT3JDbGVhciIsInJlZGlyZWN0UmVzb2x2ZXIiLCJfY29tcGxldGVSZWRpcmVjdEZuIiwiX3NldFJlZGlyZWN0VXNlciIsIl9kZWxldGUiLCJ1c2VyRXh0ZXJuIiwic2tpcEJlZm9yZVN0YXRlQ2FsbGJhY2tzIiwibm90aWZ5QXV0aExpc3RlbmVycyIsInJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwiX2dldFJlY2FwdGNoYUNvbmZpZyIsIl9nZXRQYXNzd29yZFBvbGljeUludGVybmFsIiwiX3VwZGF0ZVBhc3N3b3JkUG9saWN5IiwiX2dldFBlcnNpc3RlbmNlIiwiX3VwZGF0ZUVycm9yTWFwIiwibmV4dE9yT2JzZXJ2ZXIiLCJjb21wbGV0ZWQiLCJyZWdpc3RlclN0YXRlTGlzdGVuZXIiLCJhdXRoU3RhdGVSZWFkeSIsInVuc3Vic2NyaWJlIiwicmVkaXJlY3RNYW5hZ2VyIiwicmVzb2x2ZXIiLCJfcmVkaXJlY3RQZXJzaXN0ZW5jZSIsIl9yZWRpcmVjdFVzZXJGb3JJZCIsImlkIiwibmV4dCIsImN1cnJlbnRVaWQiLCJzdWJzY3JpcHRpb24iLCJjYiIsImlzVW5zdWJzY3JpYmVkIiwidGhlbiIsImFkZE9ic2VydmVyIiwiYWN0aW9uIiwiX2xvZ0ZyYW1ld29yayIsImZyYW1ld29yayIsInNvcnQiLCJfZ2V0RnJhbWV3b3JrcyIsIm9wdGlvbnMiLCJhcHBJZCIsImhlYXJ0YmVhdHNIZWFkZXIiLCJnZXRJbW1lZGlhdGUiLCJvcHRpb25hbCIsImdldEhlYXJ0YmVhdHNIZWFkZXIiLCJhcHBDaGVja1Rva2VuIiwiX2dldEFwcENoZWNrVG9rZW4iLCJhcHBDaGVja1Rva2VuUmVzdWx0IiwiX2Nhc3RBdXRoIiwib2JzZXJ2ZXIiLCJjcmVhdGVTdWJzY3JpYmUiLCJnZXRTY3JpcHRQYXJlbnRFbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJfbG9hZEpTIiwiZWwiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwib25sb2FkIiwib25lcnJvciIsImNoYXJzZXQiLCJhcHBlbmRDaGlsZCIsIl9nZW5lcmF0ZUNhbGxiYWNrTmFtZSIsInByZWZpeCIsImZsb29yIiwicmFuZG9tIiwiUkVDQVBUQ0hBX0VOVEVSUFJJU0VfVVJMIiwiUkVDQVBUQ0hBX0VOVEVSUFJJU0VfVkVSSUZJRVJfVFlQRSIsIkZBS0VfVE9LRU4iLCJSZWNhcHRjaGFFbnRlcnByaXNlVmVyaWZpZXIiLCJhdXRoRXh0ZXJuIiwidmVyaWZ5IiwicmV0cmlldmVTaXRlS2V5IiwiY2xpZW50VHlwZSIsInZlcnNpb24iLCJjYXRjaCIsInJldHJpZXZlUmVjYXB0Y2hhVG9rZW4iLCJyZWFkeSIsImV4ZWN1dGUiLCJpbmplY3RSZWNhcHRjaGFGaWVsZHMiLCJjYXB0Y2hhUmVzcCIsInZlcmlmaWVyIiwiY2FwdGNoYVJlc3BvbnNlIiwibmV3UmVxdWVzdCIsIl9pbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiYXV0aEludGVybmFsIiwiZGVwcyIsIl9nZXRQcm92aWRlciIsImlzSW5pdGlhbGl6ZWQiLCJhdXRoMiIsImluaXRpYWxPcHRpb25zIiwiZ2V0T3B0aW9ucyIsImRlZXBFcXVhbCIsIl9pbml0aWFsaXplQXV0aEluc3RhbmNlIiwiaGllcmFyY2h5IiwiZGlzYWJsZVdhcm5pbmdzIiwiZXh0cmFjdFByb3RvY29sIiwicG9ydCIsImV4dHJhY3RIb3N0QW5kUG9ydCIsInBvcnRTdHIiLCJmcmVlemUiLCJlbWl0RW11bGF0b3JXYXJuaW5nIiwicHJvdG9jb2xFbmQiLCJpbmRleE9mIiwic3Vic3RyIiwiYXV0aG9yaXR5IiwiZXhlYyIsImhvc3RBbmRQb3J0IiwicG9wIiwiYnJhY2tldGVkSVB2NiIsInBhcnNlUG9ydCIsImF0dGFjaEJhbm5lciIsInN0eSIsInN0eWxlIiwiaW5uZXJUZXh0IiwicG9zaXRpb24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImNvbG9yIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbiIsInpJbmRleCIsInRleHRBbGlnbiIsImNsYXNzTGlzdCIsImFkZCIsImNvbnNvbGUiLCJpbmZvIiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaWduSW5NZXRob2QiLCJfZ2V0SWRUb2tlblJlc3BvbnNlIiwiX2F1dGgiLCJfbGlua1RvSWRUb2tlbiIsIl9pZFRva2VuIiwiX2dldFJlYXV0aGVudGljYXRpb25SZXNvbHZlciIsInJlc2V0UGFzc3dvcmQiLCJ1cGRhdGVFbWFpbFBhc3N3b3JkIiwiYXBwbHlBY3Rpb25Db2RlJDEiLCJzaWduSW5XaXRoUGFzc3dvcmQiLCJzZW5kT29iQ29kZSIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiQxIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCQxIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsJDEiLCJ2ZXJpZnlBbmRDaGFuZ2VFbWFpbCIsInNpZ25JbldpdGhFbWFpbExpbmskMSIsInNpZ25JbldpdGhFbWFpbExpbmtGb3JMaW5raW5nIiwiX2VtYWlsIiwiX3Bhc3N3b3JkIiwiX3RlbmFudElkIiwiX2Zyb21FbWFpbEFuZFBhc3N3b3JkIiwiX2Zyb21FbWFpbEFuZENvZGUiLCJvb2JDb2RlIiwib2JqIiwicmV0dXJuU2VjdXJlVG9rZW4iLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYSIsImxvZyIsInNpZ25JbldpdGhJZHAiLCJJRFBfUkVRVUVTVF9VUkkkMSIsInBlbmRpbmdUb2tlbiIsIl9mcm9tUGFyYW1zIiwiY3JlZCIsIm5vbmNlIiwib2F1dGhUb2tlbiIsIm9hdXRoVG9rZW5TZWNyZXQiLCJzZWNyZXQiLCJidWlsZFJlcXVlc3QiLCJhdXRvQ3JlYXRlIiwicmVxdWVzdFVyaSIsInBvc3RCb2R5Iiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZSIsInNpZ25JbldpdGhQaG9uZU51bWJlciQxIiwibGlua1dpdGhQaG9uZU51bWJlciQxIiwidGVtcG9yYXJ5UHJvb2YiLCJWRVJJRllfUEhPTkVfTlVNQkVSX0ZPUl9FWElTVElOR19FUlJPUl9NQVBfIiwidmVyaWZ5UGhvbmVOdW1iZXJGb3JFeGlzdGluZyIsImFwaVJlcXVlc3QiLCJvcGVyYXRpb24iLCJfZnJvbVZlcmlmaWNhdGlvbiIsInZlcmlmaWNhdGlvbklkIiwidmVyaWZpY2F0aW9uQ29kZSIsIl9mcm9tVG9rZW5SZXNwb25zZSIsIl9tYWtlVmVyaWZpY2F0aW9uUmVxdWVzdCIsInNlc3Npb25JbmZvIiwicGFyc2VNb2RlIiwibW9kZSIsInBhcnNlRGVlcExpbmsiLCJsaW5rIiwicXVlcnlzdHJpbmdEZWNvZGUiLCJleHRyYWN0UXVlcnlzdHJpbmciLCJkb3VibGVEZWVwTGluayIsImlPU0RlZXBMaW5rIiwiaU9TRG91YmxlRGVlcExpbmsiLCJhY3Rpb25MaW5rIiwic2VhcmNoUGFyYW1zIiwiY29udGludWVVcmwiLCJwYXJzZUxpbmsiLCJQUk9WSURFUl9JRCIsImNyZWRlbnRpYWwiLCJjcmVkZW50aWFsV2l0aExpbmsiLCJlbWFpbExpbmsiLCJhY3Rpb25Db2RlVXJsIiwiRU1BSUxfUEFTU1dPUkRfU0lHTl9JTl9NRVRIT0QiLCJFTUFJTF9MSU5LX1NJR05fSU5fTUVUSE9EIiwiRmVkZXJhdGVkQXV0aFByb3ZpZGVyIiwiZGVmYXVsdExhbmd1YWdlQ29kZSIsImN1c3RvbVBhcmFtZXRlcnMiLCJzZXREZWZhdWx0TGFuZ3VhZ2UiLCJzZXRDdXN0b21QYXJhbWV0ZXJzIiwiY3VzdG9tT0F1dGhQYXJhbWV0ZXJzIiwiZ2V0Q3VzdG9tUGFyYW1ldGVycyIsIkJhc2VPQXV0aFByb3ZpZGVyIiwic2NvcGVzIiwiYWRkU2NvcGUiLCJzY29wZSIsImdldFNjb3BlcyIsImNyZWRlbnRpYWxGcm9tSlNPTiIsIl9jcmVkZW50aWFsIiwicmF3Tm9uY2UiLCJjcmVkZW50aWFsRnJvbVJlc3VsdCIsInVzZXJDcmVkZW50aWFsIiwib2F1dGhDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsImNyZWRlbnRpYWxGcm9tRXJyb3IiLCJ0b2tlblJlc3BvbnNlIiwib2F1dGhJZFRva2VuIiwib2F1dGhBY2Nlc3NUb2tlbiIsIkZBQ0VCT09LX1NJR05fSU5fTUVUSE9EIiwiY3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJHT09HTEVfU0lHTl9JTl9NRVRIT0QiLCJHSVRIVUJfU0lHTl9JTl9NRVRIT0QiLCJJRFBfUkVRVUVTVF9VUkkiLCJTQU1MQXV0aENyZWRlbnRpYWwiLCJfY3JlYXRlIiwiU0FNTF9QUk9WSURFUl9QUkVGSVgiLCJzYW1sQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJUV0lUVEVSX1NJR05fSU5fTUVUSE9EIiwic2lnblVwIiwiVXNlckNyZWRlbnRpYWxJbXBsIiwib3BlcmF0aW9uVHlwZSIsInByb3ZpZGVySWRGb3JSZXNwb25zZSIsInVzZXJDcmVkIiwiX2Zvck9wZXJhdGlvbiIsIk11bHRpRmFjdG9yRXJyb3IiLCJzZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsIl9mcm9tRXJyb3JBbmRPcGVyYXRpb24iLCJfcHJvY2Vzc0NyZWRlbnRpYWxTYXZpbmdNZmFDb250ZXh0SWZOZWNlc3NhcnkiLCJpZFRva2VuUHJvdmlkZXIiLCJwcm92aWRlckRhdGFBc05hbWVzIiwiU2V0IiwicGlkIiwiX2Fzc2VydExpbmtlZFN0YXR1cyIsImRlbGV0ZVByb3ZpZGVyIiwicHJvdmlkZXJzTGVmdCIsInBkIiwiaGFzIiwiX2xpbmskMSIsImV4cGVjdGVkIiwicHJvdmlkZXJJZHMiLCJfcmVhdXRoZW50aWNhdGUiLCJwYXJzZWQiLCJzdWIiLCJfc2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4kMSIsImN1c3RvbVRva2VuIiwiTXVsdGlGYWN0b3JJbmZvSW1wbCIsImZhY3RvcklkIiwibWZhRW5yb2xsbWVudElkIiwiZW5yb2xsbWVudFRpbWUiLCJlbnJvbGxlZEF0IiwiX2Zyb21TZXJ2ZXJSZXNwb25zZSIsImVucm9sbG1lbnQiLCJQaG9uZU11bHRpRmFjdG9ySW5mb0ltcGwiLCJUb3RwTXVsdGlGYWN0b3JJbmZvSW1wbCIsInBob25lSW5mbyIsIl9zZXRBY3Rpb25Db2RlU2V0dGluZ3NPblJlcXVlc3QiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJkeW5hbWljTGlua0RvbWFpbiIsImNhbkhhbmRsZUNvZGVJbkFwcCIsImhhbmRsZUNvZGVJbkFwcCIsImlPUyIsImJ1bmRsZUlkIiwiaU9TQnVuZGxlSWQiLCJhbmRyb2lkIiwicGFja2FnZU5hbWUiLCJhbmRyb2lkSW5zdGFsbEFwcCIsImluc3RhbGxBcHAiLCJhbmRyb2lkTWluaW11bVZlcnNpb25Db2RlIiwibWluaW11bVZlcnNpb24iLCJhbmRyb2lkUGFja2FnZU5hbWUiLCJyZWNhY2hlUGFzc3dvcmRQb2xpY3kiLCJyZXF1ZXN0VHlwZSIsIm5ld1Bhc3N3b3JkIiwiYXV0aE1vZHVsYXIiLCJuZXdFbWFpbCIsIm1mYUluZm8iLCJtdWx0aUZhY3RvckluZm8iLCJkYXRhIiwicHJldmlvdXNFbWFpbCIsInNpZ25VcFJlc3BvbnNlIiwic2V0QWN0aW9uQ29kZVNldHRpbmdzIiwicmVxdWVzdDIiLCJhY3Rpb25Db2RlU2V0dGluZ3MyIiwiY3JlYXRlQXV0aFVyaSIsImNvbnRpbnVlVXJpIiwiaWRlbnRpZmllciIsInNpZ25pbk1ldGhvZHMiLCJ1cGRhdGVQcm9maWxlJDEiLCJwcm9maWxlUmVxdWVzdCIsInBhc3N3b3JkUHJvdmlkZXIiLCJmaW5kIiwidXBkYXRlRW1haWxPclBhc3N3b3JkIiwicHJvZmlsZSIsInJhd1VzZXJJbmZvIiwiaXNOZXdVc2VyIiwia2luZCIsImZpbHRlcmVkUHJvdmlkZXJJZCIsIkdlbmVyaWNBZGRpdGlvbmFsVXNlckluZm8iLCJGYWNlYm9va0FkZGl0aW9uYWxVc2VySW5mbyIsIkdpdGh1YkFkZGl0aW9uYWxVc2VySW5mbyIsIkdvb2dsZUFkZGl0aW9uYWxVc2VySW5mbyIsIlR3aXR0ZXJBZGRpdGlvbmFsVXNlckluZm8iLCJzY3JlZW5OYW1lIiwiRmVkZXJhdGVkQWRkaXRpb25hbFVzZXJJbmZvV2l0aFVzZXJuYW1lIiwidXNlcm5hbWUiLCJsb2dpbiIsIk11bHRpRmFjdG9yU2Vzc2lvbkltcGwiLCJfZnJvbUlkdG9rZW4iLCJfZnJvbU1mYVBlbmRpbmdDcmVkZW50aWFsIiwibWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtdWx0aUZhY3RvclNlc3Npb24iLCJwZW5kaW5nQ3JlZGVudGlhbCIsIk11bHRpRmFjdG9yUmVzb2x2ZXJJbXBsIiwic2Vzc2lvbiIsImhpbnRzIiwic2lnbkluUmVzb2x2ZXIiLCJfZnJvbUVycm9yIiwibWZhUmVzcG9uc2UiLCJfcHJvY2VzcyIsInJlc29sdmVTaWduSW4iLCJhc3NlcnRpb25FeHRlcm4iLCJlcnJvckludGVybmFsIiwic3RhcnRFbnJvbGxQaG9uZU1mYSIsImZpbmFsaXplRW5yb2xsUGhvbmVNZmEiLCJzdGFydEVucm9sbFRvdHBNZmEiLCJmaW5hbGl6ZUVucm9sbFRvdHBNZmEiLCJ3aXRoZHJhd01mYSIsIk11bHRpRmFjdG9yVXNlckltcGwiLCJlbnJvbGxlZEZhY3RvcnMiLCJfZnJvbVVzZXIiLCJnZXRTZXNzaW9uIiwiZW5yb2xsIiwiZmluYWxpemVNZmFSZXNwb25zZSIsInVuZW5yb2xsIiwiaW5mb09yVWlkIiwibXVsdGlGYWN0b3JVc2VyQ2FjaGUiLCJXZWFrTWFwIiwidXNlck1vZHVsYXIiLCJTVE9SQUdFX0FWQUlMQUJMRV9LRVkiLCJCcm93c2VyUGVyc2lzdGVuY2VDbGFzcyIsInN0b3JhZ2VSZXRyaWV2ZXIiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImdldEl0ZW0iLCJfaWZyYW1lQ2Fubm90U3luY1dlYlN0b3JhZ2UiLCJfUE9MTElOR19JTlRFUlZBTF9NUyQxIiwiSUUxMF9MT0NBTF9TVE9SQUdFX1NZTkNfREVMQVkiLCJCcm93c2VyTG9jYWxQZXJzaXN0ZW5jZSIsImxvY2FsU3RvcmFnZSIsImV2ZW50IiwicG9sbCIsIm9uU3RvcmFnZUV2ZW50IiwibGlzdGVuZXJzIiwibG9jYWxDYWNoZSIsInBvbGxUaW1lciIsInNhZmFyaUxvY2FsU3RvcmFnZU5vdFN5bmNlZCIsImZhbGxiYWNrVG9Qb2xsaW5nIiwiZm9yQWxsQ2hhbmdlZEtleXMiLCJrZXlzIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImtleTIiLCJfb2xkVmFsdWUiLCJub3RpZnlMaXN0ZW5lcnMiLCJkZXRhY2hMaXN0ZW5lciIsInN0b3BQb2xsaW5nIiwic3RvcmVkVmFsdWUyIiwidHJpZ2dlckxpc3RlbmVycyIsInN0b3JlZFZhbHVlIiwibGlzdGVuZXIiLCJmcm9tIiwic3RhcnRQb2xsaW5nIiwic2V0SW50ZXJ2YWwiLCJTdG9yYWdlRXZlbnQiLCJjbGVhckludGVydmFsIiwiYXR0YWNoTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2l6ZSIsIkJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UiLCJzZXNzaW9uU3RvcmFnZSIsIl9hbGxTZXR0bGVkIiwicHJvbWlzZXMiLCJmdWxmaWxsZWQiLCJyZWFzb24iLCJSZWNlaXZlciIsImV2ZW50VGFyZ2V0IiwiaGFuZGxlcnNNYXAiLCJoYW5kbGVFdmVudCIsImV4aXN0aW5nSW5zdGFuY2UiLCJyZWNlaXZlcnMiLCJyZWNlaXZlciIsImlzTGlzdGVuaW5ndG8iLCJuZXdJbnN0YW5jZSIsIm1lc3NhZ2VFdmVudCIsImV2ZW50SWQiLCJldmVudFR5cGUiLCJoYW5kbGVycyIsInBvcnRzIiwicG9zdE1lc3NhZ2UiLCJoYW5kbGVyIiwib3JpZ2luIiwiX3N1YnNjcmliZSIsImV2ZW50SGFuZGxlciIsIl91bnN1YnNjcmliZSIsIl9nZW5lcmF0ZUV2ZW50SWQiLCJkaWdpdHMiLCJTZW5kZXIiLCJ0YXJnZXQiLCJyZW1vdmVNZXNzYWdlSGFuZGxlciIsIm1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJvbk1lc3NhZ2UiLCJjbG9zZSIsIl9zZW5kIiwidGltZW91dCIsIk1lc3NhZ2VDaGFubmVsIiwiY29tcGxldGlvblRpbWVyIiwic3RhcnQiLCJhY2tUaW1lciIsInBvcnQyIiwiZmluYWxseSIsIl93aW5kb3ciLCJfc2V0V2luZG93TG9jYXRpb24iLCJfaXNXb3JrZXIiLCJfZ2V0QWN0aXZlU2VydmljZVdvcmtlciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RyYXRpb24iLCJhY3RpdmUiLCJfZ2V0U2VydmljZVdvcmtlckNvbnRyb2xsZXIiLCJjb250cm9sbGVyIiwiX2dldFdvcmtlckdsb2JhbFNjb3BlIiwiREJfTkFNRSIsIkRCX1ZFUlNJT04iLCJEQl9PQkpFQ1RTVE9SRV9OQU1FIiwiREJfREFUQV9LRVlQQVRIIiwiREJQcm9taXNlIiwidG9Qcm9taXNlIiwiZ2V0T2JqZWN0U3RvcmUiLCJkYiIsImlzUmVhZFdyaXRlIiwidHJhbnNhY3Rpb24iLCJvYmplY3RTdG9yZSIsIl9kZWxldGVEYXRhYmFzZSIsImluZGV4ZWREQiIsImRlbGV0ZURhdGFiYXNlIiwiX29wZW5EYXRhYmFzZSIsIm9wZW4iLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJvYmplY3RTdG9yZU5hbWVzIiwiY29udGFpbnMiLCJfcHV0T2JqZWN0IiwicHV0IiwiZ2V0T2JqZWN0IiwiX2RlbGV0ZU9iamVjdCIsIl9QT0xMSU5HX0lOVEVSVkFMX01TIiwiX1RSQU5TQUNUSU9OX1JFVFJZX0NPVU5UIiwiSW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsInBlbmRpbmdXcml0ZXMiLCJzZW5kZXIiLCJzZXJ2aWNlV29ya2VyUmVjZWl2ZXJBdmFpbGFibGUiLCJhY3RpdmVTZXJ2aWNlV29ya2VyIiwiX3dvcmtlckluaXRpYWxpemF0aW9uUHJvbWlzZSIsImluaXRpYWxpemVTZXJ2aWNlV29ya2VyTWVzc2FnaW5nIiwiX29wZW5EYiIsIl93aXRoUmV0cmllcyIsIm9wIiwibnVtQXR0ZW1wdHMiLCJpbml0aWFsaXplUmVjZWl2ZXIiLCJpbml0aWFsaXplU2VuZGVyIiwiX29yaWdpbiIsIl9wb2xsIiwia2V5UHJvY2Vzc2VkIiwiX2RhdGEiLCJyZXN1bHRzIiwibm90aWZ5U2VydmljZVdvcmtlciIsIl93aXRoUGVuZGluZ1dyaXRlIiwid3JpdGUiLCJnZXRBbGxSZXF1ZXN0IiwiZ2V0QWxsIiwia2V5c0luUmVzdWx0IiwiZmJhc2Vfa2V5IiwibG9jYWxLZXkiLCJzdGFydFNpZ25JblBob25lTWZhIiwiZmluYWxpemVTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluVG90cE1mYSIsIl9TT0xWRV9USU1FX01TIiwiX0VYUElSQVRJT05fVElNRV9NUyIsIl9XSURHRVRfSURfU1RBUlQiLCJNb2NrUmVDYXB0Y2hhIiwiY291bnRlciIsIl93aWRnZXRzIiwicmVuZGVyIiwiY29udGFpbmVyIiwicGFyYW1ldGVycyIsIk1vY2tXaWRnZXQiLCJyZXNldCIsIm9wdFdpZGdldElkIiwiY29udGFpbmVyT3JJZCIsImRlbGV0ZWQiLCJyZXNwb25zZVRva2VuIiwiY2xpY2tIYW5kbGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpc1Zpc2libGUiLCJjaGVja0lmRGVsZXRlZCIsImdlbmVyYXRlUmFuZG9tQWxwaGFOdW1lcmljU3RyaW5nIiwiZXhwaXJlZENhbGxiYWNrIiwibGVuIiwiY2hhcnMiLCJhbGxvd2VkQ2hhcnMiLCJfSlNMT0FEX0NBTExCQUNLIiwiTkVUV09SS19USU1FT1VUX0RFTEFZIiwiUkVDQVBUQ0hBX0JBU0UiLCJSZUNhcHRjaGFMb2FkZXJJbXBsIiwiaG9zdExhbmd1YWdlIiwibGlicmFyeVNlcGFyYXRlbHlMb2FkZWQiLCJsb2FkIiwiaGwiLCJpc0hvc3RMYW5ndWFnZVZhbGlkIiwic2hvdWxkUmVzb2x2ZUltbWVkaWF0ZWx5IiwicmVjYXB0Y2hhIiwid2lkZ2V0SWQiLCJjbGVhcmVkT25lSW5zdGFuY2UiLCJNb2NrUmVDYXB0Y2hhTG9hZGVySW1wbCIsIlJFQ0FQVENIQV9WRVJJRklFUl9UWVBFIiwiREVGQVVMVF9QQVJBTVMiLCJ0aGVtZSIsImRlc3Ryb3llZCIsInRva2VuQ2hhbmdlTGlzdGVuZXJzIiwicmVuZGVyUHJvbWlzZSIsImlzSW52aXNpYmxlIiwibWFrZVRva2VuQ2FsbGJhY2siLCJfcmVjYXB0Y2hhTG9hZGVyIiwidmFsaWRhdGVTdGFydGluZ1N0YXRlIiwiYXNzZXJ0Tm90RGVzdHJveWVkIiwiZ2V0QXNzZXJ0ZWRSZWNhcHRjaGEiLCJ0b2tlbkNoYW5nZSIsIm1ha2VSZW5kZXJQcm9taXNlIiwiX3Jlc2V0IiwiY2xlYXIiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJyZW1vdmVDaGlsZCIsInNpdGVrZXkiLCJoYXNDaGlsZE5vZGVzIiwiZXhpc3RpbmciLCJnbG9iYWxGdW5jIiwiaW5pdCIsImd1YXJhbnRlZWRFbXB0eSIsImRvbVJlYWR5IiwiQ29uZmlybWF0aW9uUmVzdWx0SW1wbCIsIm9uQ29uZmlybWF0aW9uIiwiY29uZmlybSIsImF1dGhDcmVkZW50aWFsIiwiYXBwVmVyaWZpZXIiLCJfdmVyaWZ5UGhvbmVOdW1iZXIiLCJyZWNhcHRjaGFUb2tlbiIsInBob25lSW5mb09wdGlvbnMiLCJwaG9uZUVucm9sbG1lbnRJbmZvIiwicGhvbmVTZXNzaW9uSW5mbyIsIm11bHRpRmFjdG9ySGludCIsIm11bHRpRmFjdG9yVWlkIiwicGhvbmVTaWduSW5JbmZvIiwicGhvbmVSZXNwb25zZUluZm8iLCJ2ZXJpZnlQaG9uZU51bWJlciIsInBob25lT3B0aW9ucyIsImFwcGxpY2F0aW9uVmVyaWZpZXIiLCJQSE9ORV9TSUdOX0lOX01FVEhPRCIsIl93aXRoRGVmYXVsdFJlc29sdmVyIiwicmVzb2x2ZXJPdmVycmlkZSIsIklkcENyZWRlbnRpYWwiLCJfYnVpbGRJZHBSZXF1ZXN0Iiwic2Vzc2lvbklkIiwicmV0dXJuSWRwQ3JlZGVudGlhbCIsIl9zaWduSW4iLCJfcmVhdXRoIiwiX2xpbmsiLCJBYnN0cmFjdFBvcHVwUmVkaXJlY3RPcGVyYXRpb24iLCJwZW5kaW5nUHJvbWlzZSIsImV2ZW50TWFuYWdlciIsIm9uRXhlY3V0aW9uIiwicmVnaXN0ZXJDb25zdW1lciIsIm9uQXV0aEV2ZW50IiwidXJsUmVzcG9uc2UiLCJnZXRJZHBUYXNrIiwib25FcnJvciIsInVucmVnaXN0ZXJBbmRDbGVhblVwIiwidW5yZWdpc3RlckNvbnN1bWVyIiwiY2xlYW5VcCIsIl9QT0xMX1dJTkRPV19DTE9TRV9USU1FT1VUIiwicmVzb2x2ZXJJbnRlcm5hbCIsIlBvcHVwT3BlcmF0aW9uIiwiZXhlY3V0ZU5vdE51bGwiLCJhdXRoV2luZG93IiwicG9sbElkIiwiY3VycmVudFBvcHVwQWN0aW9uIiwiY2FuY2VsIiwiX29wZW5Qb3B1cCIsImFzc29jaWF0ZWRFdmVudCIsIl9vcmlnaW5WYWxpZGF0aW9uIiwiX2lzSWZyYW1lV2ViU3RvcmFnZVN1cHBvcnRlZCIsImlzU3VwcG9ydGVkIiwicG9sbFVzZXJDYW5jZWxsYXRpb24iLCJjbG9zZWQiLCJQRU5ESU5HX1JFRElSRUNUX0tFWSIsInJlZGlyZWN0T3V0Y29tZU1hcCIsIlJlZGlyZWN0QWN0aW9uIiwicmVhZHlPdXRjb21lIiwiaGFzUGVuZGluZ1JlZGlyZWN0IiwiX2dldEFuZENsZWFyUGVuZGluZ1JlZGlyZWN0U3RhdHVzIiwicGVuZGluZ1JlZGlyZWN0S2V5IiwicmVzb2x2ZXJQZXJzaXN0ZW5jZSIsIl9zZXRQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJfY2xlYXJSZWRpcmVjdE91dGNvbWVzIiwiX3NpZ25JbldpdGhSZWRpcmVjdCIsIl9vcGVuUmVkaXJlY3QiLCJfcmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJwcmVwYXJlVXNlckZvclJlZGlyZWN0IiwiX2xpbmtXaXRoUmVkaXJlY3QiLCJfZ2V0UmVkaXJlY3RSZXN1bHQiLCJyZXNvbHZlckV4dGVybiIsIkVWRU5UX0RVUExJQ0FUSU9OX0NBQ0hFX0RVUkFUSU9OX01TIiwiQXV0aEV2ZW50TWFuYWdlciIsImNhY2hlZEV2ZW50VWlkcyIsImNvbnN1bWVycyIsInF1ZXVlZFJlZGlyZWN0RXZlbnQiLCJoYXNIYW5kbGVkUG90ZW50aWFsUmVkaXJlY3QiLCJsYXN0UHJvY2Vzc2VkRXZlbnRUaW1lIiwiYXV0aEV2ZW50Q29uc3VtZXIiLCJpc0V2ZW50Rm9yQ29uc3VtZXIiLCJzZW5kVG9Db25zdW1lciIsInNhdmVFdmVudFRvQ2FjaGUiLCJvbkV2ZW50IiwiaGFzRXZlbnRCZWVuSGFuZGxlZCIsImhhbmRsZWQiLCJjb25zdW1lciIsImlzUmVkaXJlY3RFdmVudCIsImlzTnVsbFJlZGlyZWN0RXZlbnQiLCJldmVudElkTWF0Y2hlcyIsImV2ZW50VWlkIiwidiIsIl9nZXRQcm9qZWN0Q29uZmlnIiwiSVBfQUREUkVTU19SRUdFWCIsIkhUVFBfUkVHRVgiLCJfdmFsaWRhdGVPcmlnaW4iLCJhdXRob3JpemVkRG9tYWlucyIsImRvbWFpbiIsIm1hdGNoRG9tYWluIiwiY3VycmVudFVybCIsImhvc3RuYW1lIiwiVVJMIiwiY2VVcmwiLCJlc2NhcGVkRG9tYWluUGF0dGVybiIsIlJlZ0V4cCIsIk5FVFdPUktfVElNRU9VVCIsInJlc2V0VW5sb2FkZWRHYXBpTW9kdWxlcyIsImJlYWNvbiIsIl9fX2pzbCIsIkgiLCJoaW50IiwiciIsIkwiLCJDUCIsImxvYWRHYXBpIiwibG9hZEdhcGlJZnJhbWUiLCJnYXBpIiwiaWZyYW1lcyIsImdldENvbnRleHQiLCJvbnRpbWVvdXQiLCJJZnJhbWUiLCJjYk5hbWUiLCJjYWNoZWRHQXBpTG9hZGVyIiwiX2xvYWRHYXBpIiwiUElOR19USU1FT1VUIiwiSUZSQU1FX1BBVEgiLCJFTVVMQVRFRF9JRlJBTUVfUEFUSCIsIklGUkFNRV9BVFRSSUJVVEVTIiwiaGVpZ2h0IiwidGFiaW5kZXgiLCJFSURfRlJPTV9BUElIT1NUIiwiZ2V0SWZyYW1lVXJsIiwiZWlkIiwiZnciLCJfb3BlbklmcmFtZSIsImNvbnRleHQiLCJnYXBpMiIsIndoZXJlIiwibWVzc2FnZUhhbmRsZXJzRmlsdGVyIiwiQ1JPU1NfT1JJR0lOX0lGUkFNRVNfRklMVEVSIiwiYXR0cmlidXRlcyIsImRvbnRjbGVhciIsImlmcmFtZSIsInJlc3R5bGUiLCJzZXRIaWRlT25MZWF2ZSIsIm5ldHdvcmtFcnJvciIsIm5ldHdvcmtFcnJvclRpbWVyIiwiY2xlYXJUaW1lckFuZFJlc29sdmUiLCJwaW5nIiwiQkFTRV9QT1BVUF9PUFRJT05TIiwicmVzaXphYmxlIiwic3RhdHVzYmFyIiwidG9vbGJhciIsIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIlRBUkdFVF9CTEFOSyIsIkZJUkVGT1hfRU1QVFlfVVJMIiwiQXV0aFBvcHVwIiwid2luZG93MiIsIl9vcGVuIiwic2NyZWVuIiwiYXZhaWxIZWlnaHQiLCJhdmFpbFdpZHRoIiwic2Nyb2xsYmFycyIsIm9wdGlvbnNTdHJpbmciLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjdW0iLCJvcGVuQXNOZXdXaW5kb3dJT1MiLCJuZXdXaW4iLCJmb2N1cyIsImNsaWNrIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJXSURHRVRfUEFUSCIsIkVNVUxBVE9SX1dJREdFVF9QQVRIIiwiRklSRUJBU0VfQVBQX0NIRUNLX0ZSQUdNRU5UX0lEIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX2dldFJlZGlyZWN0VXJsIiwiYXV0aFR5cGUiLCJyZWRpcmVjdFVybCIsImFkZGl0aW9uYWxQYXJhbXMiLCJpc0VtcHR5IiwidGlkIiwicGFyYW1zRGljdCIsImFwcENoZWNrVG9rZW5GcmFnbWVudCIsImdldEhhbmRsZXJCYXNlIiwiV0VCX1NUT1JBR0VfU1VQUE9SVF9LRVkiLCJCcm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiZXZlbnRNYW5hZ2VycyIsIm9yaWdpblZhbGlkYXRpb25Qcm9taXNlcyIsInByb21pc2UyIiwiaW5pdEFuZEdldE1hbmFnZXIiLCJyZWdpc3RlciIsImlmcmFtZUV2ZW50IiwiYXV0aEV2ZW50Iiwic2VuZCIsIk11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9maW5hbGl6ZUVucm9sbCIsIl9maW5hbGl6ZVNpZ25JbiIsIlBob25lTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2Zyb21DcmVkZW50aWFsIiwicGhvbmVWZXJpZmljYXRpb25JbmZvIiwiRkFDVE9SX0lEIiwiYXNzZXJ0aW9uRm9yRW5yb2xsbWVudCIsIm9uZVRpbWVQYXNzd29yZCIsIlRvdHBNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbVNlY3JldCIsImFzc2VydGlvbkZvclNpZ25JbiIsImVucm9sbG1lbnRJZCIsIl9mcm9tRW5yb2xsbWVudElkIiwiZ2VuZXJhdGVTZWNyZXQiLCJtZmFTZXNzaW9uIiwidG90cEVucm9sbG1lbnRJbmZvIiwiX2Zyb21TdGFydFRvdHBNZmFFbnJvbGxtZW50UmVzcG9uc2UiLCJvdHAiLCJ0b3RwVmVyaWZpY2F0aW9uSW5mbyIsIl9tYWtlVG90cFZlcmlmaWNhdGlvbkluZm8iLCJzZWNyZXRLZXkiLCJoYXNoaW5nQWxnb3JpdGhtIiwiY29kZUxlbmd0aCIsImNvZGVJbnRlcnZhbFNlY29uZHMiLCJlbnJvbGxtZW50Q29tcGxldGlvbkRlYWRsaW5lIiwidG90cFNlc3Npb25JbmZvIiwic2hhcmVkU2VjcmV0S2V5IiwidmVyaWZpY2F0aW9uQ29kZUxlbmd0aCIsInBlcmlvZFNlYyIsImZpbmFsaXplRW5yb2xsbWVudFRpbWUiLCJnZW5lcmF0ZVFyQ29kZVVybCIsImFjY291bnROYW1lIiwiaXNzdWVyIiwidXNlRGVmYXVsdHMiLCJfaXNFbXB0eVN0cmluZyIsImlucHV0IiwiQXV0aEludGVyb3AiLCJpbnRlcm5hbExpc3RlbmVycyIsImdldFVpZCIsImFzc2VydEF1dGhDb25maWd1cmVkIiwiYWRkQXV0aFRva2VuTGlzdGVuZXIiLCJ1cGRhdGVQcm9hY3RpdmVSZWZyZXNoIiwicmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIiLCJnZXRWZXJzaW9uRm9yUGxhdGZvcm0iLCJyZWdpc3RlckF1dGgiLCJfcmVnaXN0ZXJDb21wb25lbnQiLCJpbXBvcnRfY29tcG9uZW50IiwiQ29tcG9uZW50IiwiZ2V0UHJvdmlkZXIiLCJhdXRoSW5zdGFuY2UiLCJzZXRJbnN0YW50aWF0aW9uTW9kZSIsInNldEluc3RhbmNlQ3JlYXRlZENhbGxiYWNrIiwiX2luc3RhbmNlSWRlbnRpZmllciIsIl9pbnN0YW5jZSIsImF1dGhJbnRlcm5hbFByb3ZpZGVyIiwicmVnaXN0ZXJWZXJzaW9uIiwiREVGQVVMVF9JRF9UT0tFTl9NQVhfQUdFIiwiYXV0aElkVG9rZW5NYXhBZ2UiLCJnZXRFeHBlcmltZW50YWxTZXR0aW5nIiwibGFzdFBvc3RlZElkVG9rZW4iLCJtaW50Q29va2llRmFjdG9yeSIsImlkVG9rZW5SZXN1bHQiLCJpZFRva2VuQWdlIiwiZ2V0QXBwIiwiYXV0aFRva2VuU3luY1VybCIsIm1pbnRDb29raWUiLCJhdXRoRW11bGF0b3JIb3N0IiwiZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdCIsImltcG9ydF91dGlsMiIsInJlcXVpcmUiLCJpbXBvcnRfYXBwMiIsImltcG9ydF9sb2dnZXIyIiwiaW1wb3J0X3RzbGliMiIsImltcG9ydF9jb21wb25lbnQyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFDLDBDQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsaUJBQUEsRUFBQUEs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