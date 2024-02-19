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

// .beyond/uimport/@firebase/auth.1.3.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXV0aC4xLjMuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbW9kZWwvZW51bV9tYXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYXNzZXJ0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9jYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9uYXZpZ2F0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9kZWxheS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZmV0Y2hfcHJvdmlkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9hY2NvdW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2lkX3Rva2VuX3Jlc3VsdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2ludmFsaWRhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Byb2FjdGl2ZV9yZWZyZXNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9tZXRhZGF0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlbG9hZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdG9rZW5fbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2luc3RhbnRpYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbl9tZW1vcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvcGVyc2lzdGVuY2VfdXNlcl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcGFzc3dvcmRfcG9saWN5L2dldF9wYXNzd29yZF9wb2xpY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9wYXNzd29yZF9wb2xpY3lfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9sb2FkX2pzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfZW50ZXJwcmlzZV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2luaXRpYWxpemUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9hdXRoX2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Ntcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hY3Rpb25fY29kZV91cmwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mZWRlcmF0ZWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mYWNlYm9vay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ29vZ2xlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9naXRodWIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvdHdpdHRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3NpZ25fdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX2NyZWRlbnRpYWxfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fub255bW91cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9lcnJvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Byb3ZpZGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2xpbmtfdW5saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVhdXRoZW50aWNhdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hY3Rpb25fY29kZV9zZXR0aW5ncy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jcmVhdGVfYXV0aF91cmkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9wcm9maWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWNjb3VudF9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWRkaXRpb25hbF91c2VyX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfc2Vzc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfdXNlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2xvY2FsX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2Uvc2Vzc2lvbl9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3Byb21pc2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcmVjZWl2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9ldmVudF9pZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9zZW5kZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvYXV0aF93aW5kb3cudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC93b3JrZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvaW5kZXhlZF9kYi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX21vY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9sb2FkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3Byb3ZpZGVycy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWJzdHJhY3RfcG9wdXBfcmVkaXJlY3Rfb3BlcmF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9ldmVudF9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcHJvamVjdF9jb25maWcvZ2V0X3Byb2plY3RfY29uZmlnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmFsaWRhdGVfb3JpZ2luLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9nYXBpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9pZnJhbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2hhbmRsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcG9wdXBfcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfYXNzZXJ0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21mYS9hc3NlcnRpb25zL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvYXNzZXJ0aW9ucy90b3RwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZmlyZWJhc2VfaW50ZXJuYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9yZWdpc3Rlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9kaXN0L2VzbTIwMTcvaW5kZXguanMiXSwibmFtZXMiOlsiYXV0aF8xXzNfMF9leHBvcnRzIiwiX19leHBvcnQiLCJBY3Rpb25Db2RlT3BlcmF0aW9uIiwiQWN0aW9uQ29kZVVSTCIsIkF1dGhDcmVkZW50aWFsIiwiQXV0aEVycm9yQ29kZXMiLCJBVVRIX0VSUk9SX0NPREVTX01BUF9ET19OT1RfVVNFX0lOVEVSTkFMTFkiLCJFbWFpbEF1dGhDcmVkZW50aWFsIiwiRW1haWxBdXRoUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsIkZhY3RvcklkIiwiR2l0aHViQXV0aFByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiT0F1dGhDcmVkZW50aWFsIiwiT0F1dGhQcm92aWRlciIsIk9wZXJhdGlvblR5cGUiLCJQaG9uZUF1dGhDcmVkZW50aWFsIiwiUGhvbmVBdXRoUHJvdmlkZXIiLCJQaG9uZU11bHRpRmFjdG9yR2VuZXJhdG9yIiwiUHJvdmlkZXJJZCIsIlJlY2FwdGNoYVZlcmlmaWVyIiwiU0FNTEF1dGhQcm92aWRlciIsIlNpZ25Jbk1ldGhvZCIsIlRvdHBNdWx0aUZhY3RvckdlbmVyYXRvciIsIlRvdHBTZWNyZXQiLCJUd2l0dGVyQXV0aFByb3ZpZGVyIiwiYXBwbHlBY3Rpb25Db2RlIiwiYmVmb3JlQXV0aFN0YXRlQ2hhbmdlZCIsImJyb3dzZXJMb2NhbFBlcnNpc3RlbmNlIiwiYnJvd3NlclBvcHVwUmVkaXJlY3RSZXNvbHZlciIsImJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UiLCJjaGVja0FjdGlvbkNvZGUiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImNvbm5lY3RBdXRoRW11bGF0b3IiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkZWJ1Z0Vycm9yTWFwIiwiZGVsZXRlVXNlciIsImZldGNoU2lnbkluTWV0aG9kc0ZvckVtYWlsIiwiZ2V0QWRkaXRpb25hbFVzZXJJbmZvIiwiZ2V0QXV0aCIsImdldElkVG9rZW4iLCJnZXRJZFRva2VuUmVzdWx0IiwiZ2V0TXVsdGlGYWN0b3JSZXNvbHZlciIsImdldFJlZGlyZWN0UmVzdWx0IiwiaW5NZW1vcnlQZXJzaXN0ZW5jZSIsImluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJpbml0aWFsaXplQXV0aCIsImluaXRpYWxpemVSZWNhcHRjaGFDb25maWciLCJpc1NpZ25JbldpdGhFbWFpbExpbmsiLCJsaW5rV2l0aENyZWRlbnRpYWwiLCJsaW5rV2l0aFBob25lTnVtYmVyIiwibGlua1dpdGhQb3B1cCIsImxpbmtXaXRoUmVkaXJlY3QiLCJtdWx0aUZhY3RvciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIm9uSWRUb2tlbkNoYW5nZWQiLCJwYXJzZUFjdGlvbkNvZGVVUkwiLCJwcm9kRXJyb3JNYXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsIiwicmVhdXRoZW50aWNhdGVXaXRoUGhvbmVOdW1iZXIiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQb3B1cCIsInJlYXV0aGVudGljYXRlV2l0aFJlZGlyZWN0IiwicmVsb2FkIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCIsInNldFBlcnNpc3RlbmNlIiwic2lnbkluQW5vbnltb3VzbHkiLCJzaWduSW5XaXRoQ3JlZGVudGlhbCIsInNpZ25JbldpdGhDdXN0b21Ub2tlbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsTGluayIsInNpZ25JbldpdGhQaG9uZU51bWJlciIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25JbldpdGhSZWRpcmVjdCIsInNpZ25PdXQiLCJ1bmxpbmsiLCJ1cGRhdGVDdXJyZW50VXNlciIsInVwZGF0ZUVtYWlsIiwidXBkYXRlUGFzc3dvcmQiLCJ1cGRhdGVQaG9uZU51bWJlciIsInVwZGF0ZVByb2ZpbGUiLCJ1c2VEZXZpY2VMYW5ndWFnZSIsInZhbGlkYXRlUGFzc3dvcmQiLCJ2ZXJpZnlCZWZvcmVVcGRhdGVFbWFpbCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlBIT05FIiwiVE9UUCIsIkZBQ0VCT09LIiwiR0lUSFVCIiwiR09PR0xFIiwiUEFTU1dPUkQiLCJUV0lUVEVSIiwiRU1BSUxfTElOSyIsIkVNQUlMX1BBU1NXT1JEIiwiTElOSyIsIlJFQVVUSEVOVElDQVRFIiwiU0lHTl9JTiIsIkVNQUlMX1NJR05JTiIsIlBBU1NXT1JEX1JFU0VUIiwiUkVDT1ZFUl9FTUFJTCIsIlJFVkVSVF9TRUNPTkRfRkFDVE9SX0FERElUSU9OIiwiVkVSSUZZX0FORF9DSEFOR0VfRU1BSUwiLCJWRVJJRllfRU1BSUwiLCJpc1YyIiwiZ3JlY2FwdGNoYSIsImdldFJlc3BvbnNlIiwiaXNFbnRlcnByaXNlIiwiZW50ZXJwcmlzZSIsIlJlY2FwdGNoYUNvbmZpZyIsImNvbnN0cnVjdG9yIiwicmVzcG9uc2UiLCJzaXRlS2V5IiwiZW1haWxQYXNzd29yZEVuYWJsZWQiLCJyZWNhcHRjaGFLZXkiLCJFcnJvciIsInNwbGl0IiwicmVjYXB0Y2hhRW5mb3JjZW1lbnRTdGF0ZSIsInNvbWUiLCJlbmZvcmNlbWVudFN0YXRlIiwicHJvdmlkZXIiLCJfZGVidWdFcnJvck1hcCIsIl9wcm9kRXJyb3JNYXAiLCJfREVGQVVMVF9BVVRIX0VSUk9SX0ZBQ1RPUlkiLCJpbXBvcnRfdXRpbCIsIkVycm9yRmFjdG9yeSIsIkFETUlOX09OTFlfT1BFUkFUSU9OIiwiQVJHVU1FTlRfRVJST1IiLCJBUFBfTk9UX0FVVEhPUklaRUQiLCJBUFBfTk9UX0lOU1RBTExFRCIsIkNBUFRDSEFfQ0hFQ0tfRkFJTEVEIiwiQ09ERV9FWFBJUkVEIiwiQ09SRE9WQV9OT1RfUkVBRFkiLCJDT1JTX1VOU1VQUE9SVEVEIiwiQ1JFREVOVElBTF9BTFJFQURZX0lOX1VTRSIsIkNSRURFTlRJQUxfTUlTTUFUQ0giLCJDUkVERU5USUFMX1RPT19PTERfTE9HSU5fQUdBSU4iLCJERVBFTkRFTlRfU0RLX0lOSVRfQkVGT1JFX0FVVEgiLCJEWU5BTUlDX0xJTktfTk9UX0FDVElWQVRFRCIsIkVNQUlMX0NIQU5HRV9ORUVEU19WRVJJRklDQVRJT04iLCJFTUFJTF9FWElTVFMiLCJFTVVMQVRPUl9DT05GSUdfRkFJTEVEIiwiRVhQSVJFRF9PT0JfQ09ERSIsIkVYUElSRURfUE9QVVBfUkVRVUVTVCIsIklOVEVSTkFMX0VSUk9SIiwiSU5WQUxJRF9BUElfS0VZIiwiSU5WQUxJRF9BUFBfQ1JFREVOVElBTCIsIklOVkFMSURfQVBQX0lEIiwiSU5WQUxJRF9BVVRIIiwiSU5WQUxJRF9BVVRIX0VWRU5UIiwiSU5WQUxJRF9DRVJUX0hBU0giLCJJTlZBTElEX0NPREUiLCJJTlZBTElEX0NPTlRJTlVFX1VSSSIsIklOVkFMSURfQ09SRE9WQV9DT05GSUdVUkFUSU9OIiwiSU5WQUxJRF9DVVNUT01fVE9LRU4iLCJJTlZBTElEX0RZTkFNSUNfTElOS19ET01BSU4iLCJJTlZBTElEX0VNQUlMIiwiSU5WQUxJRF9FTVVMQVRPUl9TQ0hFTUUiLCJJTlZBTElEX0lEUF9SRVNQT05TRSIsIklOVkFMSURfTUVTU0FHRV9QQVlMT0FEIiwiSU5WQUxJRF9NRkFfU0VTU0lPTiIsIklOVkFMSURfT0FVVEhfQ0xJRU5UX0lEIiwiSU5WQUxJRF9PQVVUSF9QUk9WSURFUiIsIklOVkFMSURfT09CX0NPREUiLCJJTlZBTElEX09SSUdJTiIsIklOVkFMSURfUEFTU1dPUkQiLCJJTlZBTElEX1BFUlNJU1RFTkNFIiwiSU5WQUxJRF9QSE9ORV9OVU1CRVIiLCJJTlZBTElEX1BST1ZJREVSX0lEIiwiSU5WQUxJRF9SRUNJUElFTlRfRU1BSUwiLCJJTlZBTElEX1NFTkRFUiIsIklOVkFMSURfU0VTU0lPTl9JTkZPIiwiSU5WQUxJRF9URU5BTlRfSUQiLCJNRkFfSU5GT19OT1RfRk9VTkQiLCJNRkFfUkVRVUlSRUQiLCJNSVNTSU5HX0FORFJPSURfUEFDS0FHRV9OQU1FIiwiTUlTU0lOR19BUFBfQ1JFREVOVElBTCIsIk1JU1NJTkdfQVVUSF9ET01BSU4iLCJNSVNTSU5HX0NPREUiLCJNSVNTSU5HX0NPTlRJTlVFX1VSSSIsIk1JU1NJTkdfSUZSQU1FX1NUQVJUIiwiTUlTU0lOR19JT1NfQlVORExFX0lEIiwiTUlTU0lOR19PUl9JTlZBTElEX05PTkNFIiwiTUlTU0lOR19NRkFfSU5GTyIsIk1JU1NJTkdfTUZBX1NFU1NJT04iLCJNSVNTSU5HX1BIT05FX05VTUJFUiIsIk1JU1NJTkdfU0VTU0lPTl9JTkZPIiwiTU9EVUxFX0RFU1RST1lFRCIsIk5FRURfQ09ORklSTUFUSU9OIiwiTkVUV09SS19SRVFVRVNUX0ZBSUxFRCIsIk5VTExfVVNFUiIsIk5PX0FVVEhfRVZFTlQiLCJOT19TVUNIX1BST1ZJREVSIiwiT1BFUkFUSU9OX05PVF9BTExPV0VEIiwiT1BFUkFUSU9OX05PVF9TVVBQT1JURUQiLCJQT1BVUF9CTE9DS0VEIiwiUE9QVVBfQ0xPU0VEX0JZX1VTRVIiLCJQUk9WSURFUl9BTFJFQURZX0xJTktFRCIsIlFVT1RBX0VYQ0VFREVEIiwiUkVESVJFQ1RfQ0FOQ0VMTEVEX0JZX1VTRVIiLCJSRURJUkVDVF9PUEVSQVRJT05fUEVORElORyIsIlJFSkVDVEVEX0NSRURFTlRJQUwiLCJTRUNPTkRfRkFDVE9SX0FMUkVBRFlfRU5ST0xMRUQiLCJTRUNPTkRfRkFDVE9SX0xJTUlUX0VYQ0VFREVEIiwiVEVOQU5UX0lEX01JU01BVENIIiwiVElNRU9VVCIsIlRPS0VOX0VYUElSRUQiLCJUT09fTUFOWV9BVFRFTVBUU19UUllfTEFURVIiLCJVTkFVVEhPUklaRURfRE9NQUlOIiwiVU5TVVBQT1JURURfRklSU1RfRkFDVE9SIiwiVU5TVVBQT1JURURfUEVSU0lTVEVOQ0UiLCJVTlNVUFBPUlRFRF9URU5BTlRfT1BFUkFUSU9OIiwiVU5WRVJJRklFRF9FTUFJTCIsIlVTRVJfQ0FOQ0VMTEVEIiwiVVNFUl9ERUxFVEVEIiwiVVNFUl9ESVNBQkxFRCIsIlVTRVJfTUlTTUFUQ0giLCJVU0VSX1NJR05FRF9PVVQiLCJXRUFLX1BBU1NXT1JEIiwiV0VCX1NUT1JBR0VfVU5TVVBQT1JURUQiLCJBTFJFQURZX0lOSVRJQUxJWkVEIiwiUkVDQVBUQ0hBX05PVF9FTkFCTEVEIiwiTUlTU0lOR19SRUNBUFRDSEFfVE9LRU4iLCJJTlZBTElEX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX0FDVElPTiIsIk1JU1NJTkdfQ0xJRU5UX1RZUEUiLCJNSVNTSU5HX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRUNBUFRDSEFfVkVSU0lPTiIsIklOVkFMSURfUkVRX1RZUEUiLCJsb2dDbGllbnQiLCJpbXBvcnRfbG9nZ2VyIiwiTG9nZ2VyIiwiX2xvZ1dhcm4iLCJtc2ciLCJhcmdzIiwibG9nTGV2ZWwiLCJMb2dMZXZlbCIsIldBUk4iLCJ3YXJuIiwiaW1wb3J0X2FwcCIsIlNES19WRVJTSU9OIiwiX2xvZ0Vycm9yIiwiRVJST1IiLCJlcnJvciIsIl9mYWlsIiwiYXV0aE9yQ29kZSIsInJlc3QiLCJjcmVhdGVFcnJvckludGVybmFsIiwiX2NyZWF0ZUVycm9yIiwiX2Vycm9yV2l0aEN1c3RvbU1lc3NhZ2UiLCJhdXRoIiwiY29kZSIsIm1lc3NhZ2UiLCJlcnJvck1hcCIsIk9iamVjdCIsImFzc2lnbiIsImZhY3RvcnkiLCJjcmVhdGUiLCJhcHBOYW1lIiwibmFtZSIsIl9hc3NlcnRJbnN0YW5jZU9mIiwib2JqZWN0IiwiaW5zdGFuY2UiLCJjb25zdHJ1Y3Rvckluc3RhbmNlIiwiZnVsbFBhcmFtcyIsInNsaWNlIiwiX2Vycm9yRmFjdG9yeSIsIl9hc3NlcnQiLCJhc3NlcnRpb24iLCJkZWJ1Z0ZhaWwiLCJmYWlsdXJlIiwiZGVidWdBc3NlcnQiLCJfZ2V0Q3VycmVudFVybCIsInNlbGYiLCJfYSIsImxvY2F0aW9uIiwiaHJlZiIsIl9pc0h0dHBPckh0dHBzIiwiX2dldEN1cnJlbnRTY2hlbWUiLCJwcm90b2NvbCIsIl9pc09ubGluZSIsIm5hdmlnYXRvciIsIm9uTGluZSIsImlzQnJvd3NlckV4dGVuc2lvbiIsIl9nZXRVc2VyTGFuZ3VhZ2UiLCJuYXZpZ2F0b3JMYW5ndWFnZSIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiRGVsYXkiLCJzaG9ydERlbGF5IiwibG9uZ0RlbGF5IiwiaXNNb2JpbGUiLCJpc01vYmlsZUNvcmRvdmEiLCJpc1JlYWN0TmF0aXZlIiwiZ2V0IiwiTWF0aCIsIm1pbiIsIl9lbXVsYXRvclVybCIsImNvbmZpZyIsInBhdGgiLCJlbXVsYXRvciIsInVybCIsInN0YXJ0c1dpdGgiLCJGZXRjaFByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsImZldGNoSW1wbCIsImhlYWRlcnNJbXBsIiwicmVzcG9uc2VJbXBsIiwiZmV0Y2giLCJoZWFkZXJzIiwiSGVhZGVycyIsIlJlc3BvbnNlIiwiU0VSVkVSX0VSUk9SX01BUCIsIkRFRkFVTFRfQVBJX1RJTUVPVVRfTVMiLCJfYWRkVGlkSWZOZWNlc3NhcnkiLCJyZXF1ZXN0IiwidGVuYW50SWQiLCJfcGVyZm9ybUFwaVJlcXVlc3QiLCJtZXRob2QiLCJjdXN0b21FcnJvck1hcCIsIl9wZXJmb3JtRmV0Y2hXaXRoRXJyb3JIYW5kbGluZyIsImJvZHkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJxdWVyeXN0cmluZyIsImtleSIsImFwaUtleSIsIl9nZXRBZGRpdGlvbmFsSGVhZGVycyIsImxhbmd1YWdlQ29kZSIsIl9nZXRGaW5hbFRhcmdldCIsImFwaUhvc3QiLCJyZWZlcnJlclBvbGljeSIsImZldGNoRm4iLCJfY2FuSW5pdEVtdWxhdG9yIiwibmV0d29ya1RpbWVvdXQiLCJOZXR3b3JrVGltZW91dCIsIlByb21pc2UiLCJyYWNlIiwicHJvbWlzZSIsImNsZWFyTmV0d29ya1RpbWVvdXQiLCJqc29uIiwiX21ha2VUYWdnZWRFcnJvciIsIm9rIiwiZXJyb3JNZXNzYWdlIiwic2VydmVyRXJyb3JDb2RlIiwic2VydmVyRXJyb3JNZXNzYWdlIiwiYXV0aEVycm9yIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiZSIsIkZpcmViYXNlRXJyb3IiLCJTdHJpbmciLCJfcGVyZm9ybVNpZ25JblJlcXVlc3QiLCJzZXJ2ZXJSZXNwb25zZSIsIl9zZXJ2ZXJSZXNwb25zZSIsImhvc3QiLCJiYXNlIiwiYXBpU2NoZW1lIiwidGltZXIiLCJfIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImVycm9yUGFyYW1zIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImN1c3RvbURhdGEiLCJfdG9rZW5SZXNwb25zZSIsImdldFJlY2FwdGNoYVBhcmFtcyIsInJlY2FwdGNoYVNpdGVLZXkiLCJnZXRSZWNhcHRjaGFDb25maWciLCJkZWxldGVBY2NvdW50IiwiZGVsZXRlTGlua2VkQWNjb3VudHMiLCJnZXRBY2NvdW50SW5mbyIsInV0Y1RpbWVzdGFtcFRvRGF0ZVN0cmluZyIsInV0Y1RpbWVzdGFtcCIsImRhdGUiLCJEYXRlIiwiTnVtYmVyIiwiaXNOYU4iLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJ1c2VyIiwiZm9yY2VSZWZyZXNoIiwiZ2V0TW9kdWxhckluc3RhbmNlIiwidXNlckludGVybmFsIiwidG9rZW4iLCJjbGFpbXMiLCJfcGFyc2VUb2tlbiIsImV4cCIsImF1dGhfdGltZSIsImlhdCIsImZpcmViYXNlIiwic2lnbkluUHJvdmlkZXIiLCJhdXRoVGltZSIsInNlY29uZHNTdHJpbmdUb01pbGxpc2Vjb25kcyIsImlzc3VlZEF0VGltZSIsImV4cGlyYXRpb25UaW1lIiwic2lnbkluU2Vjb25kRmFjdG9yIiwic2Vjb25kcyIsImFsZ29yaXRobSIsInBheWxvYWQiLCJzaWduYXR1cmUiLCJkZWNvZGVkIiwiYmFzZTY0RGVjb2RlIiwicGFyc2UiLCJ0b1N0cmluZyIsIl90b2tlbkV4cGlyZXNJbiIsInBhcnNlZFRva2VuIiwiX2xvZ291dElmSW52YWxpZGF0ZWQiLCJieXBhc3NBdXRoU3RhdGUiLCJpc1VzZXJJbnZhbGlkYXRlZCIsImN1cnJlbnRVc2VyIiwiUHJvYWN0aXZlUmVmcmVzaCIsImlzUnVubmluZyIsInRpbWVySWQiLCJlcnJvckJhY2tvZmYiLCJfc3RhcnQiLCJzY2hlZHVsZSIsIl9zdG9wIiwiZ2V0SW50ZXJ2YWwiLCJ3YXNFcnJvciIsImludGVydmFsIiwiZXhwVGltZSIsInN0c1Rva2VuTWFuYWdlciIsIm5vdyIsIm1heCIsIml0ZXJhdGlvbiIsIlVzZXJNZXRhZGF0YSIsImNyZWF0ZWRBdCIsImxhc3RMb2dpbkF0IiwiX2luaXRpYWxpemVUaW1lIiwibGFzdFNpZ25JblRpbWUiLCJjcmVhdGlvblRpbWUiLCJfY29weSIsIm1ldGFkYXRhIiwidG9KU09OIiwiX3JlbG9hZFdpdGhvdXRTYXZpbmciLCJpZFRva2VuIiwidXNlcnMiLCJsZW5ndGgiLCJjb3JlQWNjb3VudCIsIl9ub3RpZnlSZWxvYWRMaXN0ZW5lciIsIm5ld1Byb3ZpZGVyRGF0YSIsInByb3ZpZGVyVXNlckluZm8iLCJleHRyYWN0UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJEYXRhIiwibWVyZ2VQcm92aWRlckRhdGEiLCJvbGRJc0Fub255bW91cyIsImlzQW5vbnltb3VzIiwibmV3SXNBbm9ueW1vdXMiLCJwYXNzd29yZEhhc2giLCJ1cGRhdGVzIiwidWlkIiwibG9jYWxJZCIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJwaG90b1VybCIsImVtYWlsVmVyaWZpZWQiLCJfcGVyc2lzdFVzZXJJZkN1cnJlbnQiLCJfbm90aWZ5TGlzdGVuZXJzSWZDdXJyZW50Iiwib3JpZ2luYWwiLCJuZXdEYXRhIiwiZGVkdXBlZCIsImZpbHRlciIsIm8iLCJuIiwicHJvdmlkZXJJZCIsInByb3ZpZGVycyIsIm1hcCIsImltcG9ydF90c2xpYiIsIl9fcmVzdCIsInJhd0lkIiwicmVxdWVzdFN0c1Rva2VuIiwicmVmcmVzaFRva2VuIiwidG9rZW5BcGlIb3N0IiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzSW4iLCJleHBpcmVzX2luIiwicmVmcmVzaF90b2tlbiIsIlN0c1Rva2VuTWFuYWdlciIsImlzRXhwaXJlZCIsInVwZGF0ZUZyb21TZXJ2ZXJSZXNwb25zZSIsInVwZGF0ZVRva2Vuc0FuZEV4cGlyYXRpb24iLCJnZXRUb2tlbiIsInJlZnJlc2giLCJjbGVhclJlZnJlc2hUb2tlbiIsIm9sZFRva2VuIiwiZXhwaXJlc0luU2VjIiwiZnJvbUpTT04iLCJtYW5hZ2VyIiwiX2Fzc2lnbiIsIl9jbG9uZSIsIl9wZXJmb3JtUmVmcmVzaCIsImFzc2VydFN0cmluZ09yVW5kZWZpbmVkIiwiVXNlckltcGwiLCJvcHQiLCJwcm9hY3RpdmVSZWZyZXNoIiwicmVsb2FkVXNlckluZm8iLCJyZWxvYWRMaXN0ZW5lciIsInVzZXJJbmZvIiwibmV3VXNlciIsIl9vblJlbG9hZCIsImNhbGxiYWNrIiwiX3N0YXJ0UHJvYWN0aXZlUmVmcmVzaCIsIl9zdG9wUHJvYWN0aXZlUmVmcmVzaCIsIl91cGRhdGVUb2tlbnNJZk5lY2Vzc2FyeSIsInJlbG9hZDIiLCJ0b2tlbnNSZWZyZXNoZWQiLCJkZWxldGUiLCJfcmVkaXJlY3RFdmVudElkIiwiX2Zyb21KU09OIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJfZiIsIl9nIiwiX2giLCJwbGFpbk9iamVjdFRva2VuTWFuYWdlciIsIkFycmF5IiwiaXNBcnJheSIsIl9mcm9tSWRUb2tlblJlc3BvbnNlIiwiaWRUb2tlblJlc3BvbnNlIiwiaW5zdGFuY2VDYWNoZSIsIk1hcCIsIl9nZXRJbnN0YW5jZSIsImNscyIsIkZ1bmN0aW9uIiwic2V0IiwiSW5NZW1vcnlQZXJzaXN0ZW5jZSIsInR5cGUiLCJzdG9yYWdlIiwiX2lzQXZhaWxhYmxlIiwiX3NldCIsInZhbHVlIiwiX2dldCIsIl9yZW1vdmUiLCJfYWRkTGlzdGVuZXIiLCJfa2V5IiwiX2xpc3RlbmVyIiwiX3JlbW92ZUxpc3RlbmVyIiwiX3BlcnNpc3RlbmNlS2V5TmFtZSIsIlBlcnNpc3RlbmNlVXNlck1hbmFnZXIiLCJwZXJzaXN0ZW5jZSIsInVzZXJLZXkiLCJuYW1lMiIsImZ1bGxVc2VyS2V5IiwiZnVsbFBlcnNpc3RlbmNlS2V5IiwiYm91bmRFdmVudEhhbmRsZXIiLCJfb25TdG9yYWdlRXZlbnQiLCJiaW5kIiwic2V0Q3VycmVudFVzZXIiLCJnZXRDdXJyZW50VXNlciIsImJsb2IiLCJyZW1vdmVDdXJyZW50VXNlciIsInNhdmVQZXJzaXN0ZW5jZUZvclJlZGlyZWN0IiwibmV3UGVyc2lzdGVuY2UiLCJwZXJzaXN0ZW5jZUhpZXJhcmNoeSIsImF2YWlsYWJsZVBlcnNpc3RlbmNlcyIsImFsbCIsInNlbGVjdGVkUGVyc2lzdGVuY2UiLCJ1c2VyVG9NaWdyYXRlIiwibWlncmF0aW9uSGllcmFyY2h5IiwicCIsIl9zaG91bGRBbGxvd01pZ3JhdGlvbiIsIl9nZXRCcm93c2VyTmFtZSIsInVzZXJBZ2VudCIsInVhIiwiaW5jbHVkZXMiLCJfaXNJRU1vYmlsZSIsIl9pc0ZpcmVmb3giLCJfaXNCbGFja0JlcnJ5IiwiX2lzV2ViT1MiLCJfaXNTYWZhcmkiLCJfaXNDaHJvbWVJT1MiLCJfaXNBbmRyb2lkIiwicmUiLCJtYXRjaGVzIiwibWF0Y2giLCJnZXRVQSIsInRlc3QiLCJfaXNJT1MiLCJfaXNJT1M3T3I4IiwiX2lzSU9TU3RhbmRhbG9uZSIsIndpbmRvdyIsInN0YW5kYWxvbmUiLCJfaXNJRTEwIiwiaXNJRSIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiX2lzTW9iaWxlQnJvd3NlciIsIl9pc0lmcmFtZSIsInRvcCIsIl9nZXRDbGllbnRWZXJzaW9uIiwiY2xpZW50UGxhdGZvcm0iLCJmcmFtZXdvcmtzIiwicmVwb3J0ZWRQbGF0Zm9ybSIsInJlcG9ydGVkRnJhbWV3b3JrcyIsImpvaW4iLCJBdXRoTWlkZGxld2FyZVF1ZXVlIiwicXVldWUiLCJwdXNoQ2FsbGJhY2siLCJvbkFib3J0Iiwid3JhcHBlZENhbGxiYWNrIiwicmVzb2x2ZSIsInJlc3VsdCIsInB1c2giLCJpbmRleCIsInJ1bk1pZGRsZXdhcmUiLCJuZXh0VXNlciIsIm9uQWJvcnRTdGFjayIsImJlZm9yZVN0YXRlQ2FsbGJhY2siLCJyZXZlcnNlIiwib3JpZ2luYWxNZXNzYWdlIiwiX2dldFBhc3N3b3JkUG9saWN5IiwiTUlOSU1VTV9NSU5fUEFTU1dPUkRfTEVOR1RIIiwiUGFzc3dvcmRQb2xpY3lJbXBsIiwicmVzcG9uc2VPcHRpb25zIiwiY3VzdG9tU3RyZW5ndGhPcHRpb25zIiwibWluUGFzc3dvcmRMZW5ndGgiLCJtYXhQYXNzd29yZExlbmd0aCIsImNvbnRhaW5zTG93ZXJjYXNlQ2hhcmFjdGVyIiwiY29udGFpbnNMb3dlcmNhc2VMZXR0ZXIiLCJjb250YWluc1VwcGVyY2FzZUNoYXJhY3RlciIsImNvbnRhaW5zVXBwZXJjYXNlTGV0dGVyIiwiY29udGFpbnNOdW1lcmljQ2hhcmFjdGVyIiwiY29udGFpbnNOb25BbHBoYW51bWVyaWNDaGFyYWN0ZXIiLCJhbGxvd2VkTm9uQWxwaGFudW1lcmljQ2hhcmFjdGVycyIsImZvcmNlVXBncmFkZU9uU2lnbmluIiwic2NoZW1hVmVyc2lvbiIsInBhc3N3b3JkIiwic3RhdHVzIiwiaXNWYWxpZCIsInBhc3N3b3JkUG9saWN5IiwidmFsaWRhdGVQYXNzd29yZExlbmd0aE9wdGlvbnMiLCJ2YWxpZGF0ZVBhc3N3b3JkQ2hhcmFjdGVyT3B0aW9ucyIsIm1lZXRzTWluUGFzc3dvcmRMZW5ndGgiLCJtZWV0c01heFBhc3N3b3JkTGVuZ3RoIiwidXBkYXRlUGFzc3dvcmRDaGFyYWN0ZXJPcHRpb25zU3RhdHVzZXMiLCJwYXNzd29yZENoYXIiLCJpIiwiY2hhckF0IiwiQXV0aEltcGwiLCJhcHAiLCJoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIiLCJhcHBDaGVja1NlcnZpY2VQcm92aWRlciIsImVtdWxhdG9yQ29uZmlnIiwib3BlcmF0aW9ucyIsImF1dGhTdGF0ZVN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkVG9rZW5TdWJzY3JpcHRpb24iLCJiZWZvcmVTdGF0ZVF1ZXVlIiwicmVkaXJlY3RVc2VyIiwiaXNQcm9hY3RpdmVSZWZyZXNoRW5hYmxlZCIsIkVYUEVDVEVEX1BBU1NXT1JEX1BPTElDWV9TQ0hFTUFfVkVSU0lPTiIsIl9pc0luaXRpYWxpemVkIiwiX2RlbGV0ZWQiLCJfaW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiX3BvcHVwUmVkaXJlY3RSZXNvbHZlciIsIl9hZ2VudFJlY2FwdGNoYUNvbmZpZyIsIl90ZW5hbnRSZWNhcHRjaGFDb25maWdzIiwiX3Byb2plY3RQYXNzd29yZFBvbGljeSIsIl90ZW5hbnRQYXNzd29yZFBvbGljaWVzIiwibGFzdE5vdGlmaWVkVWlkIiwic2V0dGluZ3MiLCJhcHBWZXJpZmljYXRpb25EaXNhYmxlZEZvclRlc3RpbmciLCJjbGllbnRWZXJzaW9uIiwic2RrQ2xpZW50VmVyc2lvbiIsIl9pbml0aWFsaXplV2l0aFBlcnNpc3RlbmNlIiwicG9wdXBSZWRpcmVjdFJlc29sdmVyIiwicGVyc2lzdGVuY2VNYW5hZ2VyIiwiX3Nob3VsZEluaXRQcm9hY3RpdmVseSIsIl9pbml0aWFsaXplIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyIiwiYXNzZXJ0ZWRQZXJzaXN0ZW5jZSIsIl9jdXJyZW50VXNlciIsIl91cGRhdGVDdXJyZW50VXNlciIsInByZXZpb3VzbHlTdG9yZWRVc2VyIiwiZnV0dXJlQ3VycmVudFVzZXIiLCJuZWVkc1RvY2hlY2tNaWRkbGV3YXJlIiwiYXV0aERvbWFpbiIsImdldE9ySW5pdFJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwicmVkaXJlY3RVc2VyRXZlbnRJZCIsInN0b3JlZFVzZXJFdmVudElkIiwidHJ5UmVkaXJlY3RTaWduSW4iLCJkaXJlY3RseVNldEN1cnJlbnRVc2VyIiwiX292ZXJyaWRlUmVkaXJlY3RSZXN1bHQiLCJyZWxvYWRBbmRTZXRDdXJyZW50VXNlck9yQ2xlYXIiLCJyZWRpcmVjdFJlc29sdmVyIiwiX2NvbXBsZXRlUmVkaXJlY3RGbiIsIl9zZXRSZWRpcmVjdFVzZXIiLCJfZGVsZXRlIiwidXNlckV4dGVybiIsInNraXBCZWZvcmVTdGF0ZUNhbGxiYWNrcyIsIm5vdGlmeUF1dGhMaXN0ZW5lcnMiLCJyZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsIl9nZXRSZWNhcHRjaGFDb25maWciLCJfZ2V0UGFzc3dvcmRQb2xpY3lJbnRlcm5hbCIsIl91cGRhdGVQYXNzd29yZFBvbGljeSIsIl9nZXRQZXJzaXN0ZW5jZSIsIl91cGRhdGVFcnJvck1hcCIsIm5leHRPck9ic2VydmVyIiwiY29tcGxldGVkIiwicmVnaXN0ZXJTdGF0ZUxpc3RlbmVyIiwiYXV0aFN0YXRlUmVhZHkiLCJ1bnN1YnNjcmliZSIsInJlZGlyZWN0TWFuYWdlciIsInJlc29sdmVyIiwiX3JlZGlyZWN0UGVyc2lzdGVuY2UiLCJfcmVkaXJlY3RVc2VyRm9ySWQiLCJpZCIsIm5leHQiLCJjdXJyZW50VWlkIiwic3Vic2NyaXB0aW9uIiwiY2IiLCJpc1Vuc3Vic2NyaWJlZCIsInRoZW4iLCJhZGRPYnNlcnZlciIsImFjdGlvbiIsIl9sb2dGcmFtZXdvcmsiLCJmcmFtZXdvcmsiLCJzb3J0IiwiX2dldEZyYW1ld29ya3MiLCJvcHRpb25zIiwiYXBwSWQiLCJoZWFydGJlYXRzSGVhZGVyIiwiZ2V0SW1tZWRpYXRlIiwib3B0aW9uYWwiLCJnZXRIZWFydGJlYXRzSGVhZGVyIiwiYXBwQ2hlY2tUb2tlbiIsIl9nZXRBcHBDaGVja1Rva2VuIiwiYXBwQ2hlY2tUb2tlblJlc3VsdCIsIl9jYXN0QXV0aCIsIm9ic2VydmVyIiwiY3JlYXRlU3Vic2NyaWJlIiwiZ2V0U2NyaXB0UGFyZW50RWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiX2xvYWRKUyIsImVsIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJjaGFyc2V0IiwiYXBwZW5kQ2hpbGQiLCJfZ2VuZXJhdGVDYWxsYmFja05hbWUiLCJwcmVmaXgiLCJmbG9vciIsInJhbmRvbSIsIlJFQ0FQVENIQV9FTlRFUlBSSVNFX1VSTCIsIlJFQ0FQVENIQV9FTlRFUlBSSVNFX1ZFUklGSUVSX1RZUEUiLCJGQUtFX1RPS0VOIiwiUmVjYXB0Y2hhRW50ZXJwcmlzZVZlcmlmaWVyIiwiYXV0aEV4dGVybiIsInZlcmlmeSIsInJldHJpZXZlU2l0ZUtleSIsImNsaWVudFR5cGUiLCJ2ZXJzaW9uIiwiY2F0Y2giLCJyZXRyaWV2ZVJlY2FwdGNoYVRva2VuIiwicmVhZHkiLCJleGVjdXRlIiwiaW5qZWN0UmVjYXB0Y2hhRmllbGRzIiwiY2FwdGNoYVJlc3AiLCJ2ZXJpZmllciIsImNhcHRjaGFSZXNwb25zZSIsIm5ld1JlcXVlc3QiLCJfaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImF1dGhJbnRlcm5hbCIsImRlcHMiLCJfZ2V0UHJvdmlkZXIiLCJpc0luaXRpYWxpemVkIiwiYXV0aDIiLCJpbml0aWFsT3B0aW9ucyIsImdldE9wdGlvbnMiLCJkZWVwRXF1YWwiLCJfaW5pdGlhbGl6ZUF1dGhJbnN0YW5jZSIsImhpZXJhcmNoeSIsImRpc2FibGVXYXJuaW5ncyIsImV4dHJhY3RQcm90b2NvbCIsInBvcnQiLCJleHRyYWN0SG9zdEFuZFBvcnQiLCJwb3J0U3RyIiwiZnJlZXplIiwiZW1pdEVtdWxhdG9yV2FybmluZyIsInByb3RvY29sRW5kIiwiaW5kZXhPZiIsInN1YnN0ciIsImF1dGhvcml0eSIsImV4ZWMiLCJob3N0QW5kUG9ydCIsInBvcCIsImJyYWNrZXRlZElQdjYiLCJwYXJzZVBvcnQiLCJhdHRhY2hCYW5uZXIiLCJzdHkiLCJzdHlsZSIsImlubmVyVGV4dCIsInBvc2l0aW9uIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJjb2xvciIsImJvdHRvbSIsImxlZnQiLCJtYXJnaW4iLCJ6SW5kZXgiLCJ0ZXh0QWxpZ24iLCJjbGFzc0xpc3QiLCJhZGQiLCJjb25zb2xlIiwiaW5mbyIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2lnbkluTWV0aG9kIiwiX2dldElkVG9rZW5SZXNwb25zZSIsIl9hdXRoIiwiX2xpbmtUb0lkVG9rZW4iLCJfaWRUb2tlbiIsIl9nZXRSZWF1dGhlbnRpY2F0aW9uUmVzb2x2ZXIiLCJyZXNldFBhc3N3b3JkIiwidXBkYXRlRW1haWxQYXNzd29yZCIsImFwcGx5QWN0aW9uQ29kZSQxIiwic2lnbkluV2l0aFBhc3N3b3JkIiwic2VuZE9vYkNvZGUiLCJzZW5kRW1haWxWZXJpZmljYXRpb24kMSIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwkMSIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCQxIiwidmVyaWZ5QW5kQ2hhbmdlRW1haWwiLCJzaWduSW5XaXRoRW1haWxMaW5rJDEiLCJzaWduSW5XaXRoRW1haWxMaW5rRm9yTGlua2luZyIsIl9lbWFpbCIsIl9wYXNzd29yZCIsIl90ZW5hbnRJZCIsIl9mcm9tRW1haWxBbmRQYXNzd29yZCIsIl9mcm9tRW1haWxBbmRDb2RlIiwib29iQ29kZSIsIm9iaiIsInJldHVyblNlY3VyZVRva2VuIiwicmVxdWVzdFdpdGhSZWNhcHRjaGEiLCJsb2ciLCJzaWduSW5XaXRoSWRwIiwiSURQX1JFUVVFU1RfVVJJJDEiLCJwZW5kaW5nVG9rZW4iLCJfZnJvbVBhcmFtcyIsImNyZWQiLCJub25jZSIsIm9hdXRoVG9rZW4iLCJvYXV0aFRva2VuU2VjcmV0Iiwic2VjcmV0IiwiYnVpbGRSZXF1ZXN0IiwiYXV0b0NyZWF0ZSIsInJlcXVlc3RVcmkiLCJwb3N0Qm9keSIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGUiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIkMSIsImxpbmtXaXRoUGhvbmVOdW1iZXIkMSIsInRlbXBvcmFyeVByb29mIiwiVkVSSUZZX1BIT05FX05VTUJFUl9GT1JfRVhJU1RJTkdfRVJST1JfTUFQXyIsInZlcmlmeVBob25lTnVtYmVyRm9yRXhpc3RpbmciLCJhcGlSZXF1ZXN0Iiwib3BlcmF0aW9uIiwiX2Zyb21WZXJpZmljYXRpb24iLCJ2ZXJpZmljYXRpb25JZCIsInZlcmlmaWNhdGlvbkNvZGUiLCJfZnJvbVRva2VuUmVzcG9uc2UiLCJfbWFrZVZlcmlmaWNhdGlvblJlcXVlc3QiLCJzZXNzaW9uSW5mbyIsInBhcnNlTW9kZSIsIm1vZGUiLCJwYXJzZURlZXBMaW5rIiwibGluayIsInF1ZXJ5c3RyaW5nRGVjb2RlIiwiZXh0cmFjdFF1ZXJ5c3RyaW5nIiwiZG91YmxlRGVlcExpbmsiLCJpT1NEZWVwTGluayIsImlPU0RvdWJsZURlZXBMaW5rIiwiYWN0aW9uTGluayIsInNlYXJjaFBhcmFtcyIsImNvbnRpbnVlVXJsIiwicGFyc2VMaW5rIiwiUFJPVklERVJfSUQiLCJjcmVkZW50aWFsIiwiY3JlZGVudGlhbFdpdGhMaW5rIiwiZW1haWxMaW5rIiwiYWN0aW9uQ29kZVVybCIsIkVNQUlMX1BBU1NXT1JEX1NJR05fSU5fTUVUSE9EIiwiRU1BSUxfTElOS19TSUdOX0lOX01FVEhPRCIsIkZlZGVyYXRlZEF1dGhQcm92aWRlciIsImRlZmF1bHRMYW5ndWFnZUNvZGUiLCJjdXN0b21QYXJhbWV0ZXJzIiwic2V0RGVmYXVsdExhbmd1YWdlIiwic2V0Q3VzdG9tUGFyYW1ldGVycyIsImN1c3RvbU9BdXRoUGFyYW1ldGVycyIsImdldEN1c3RvbVBhcmFtZXRlcnMiLCJCYXNlT0F1dGhQcm92aWRlciIsInNjb3BlcyIsImFkZFNjb3BlIiwic2NvcGUiLCJnZXRTY29wZXMiLCJjcmVkZW50aWFsRnJvbUpTT04iLCJfY3JlZGVudGlhbCIsInJhd05vbmNlIiwiY3JlZGVudGlhbEZyb21SZXN1bHQiLCJ1c2VyQ3JlZGVudGlhbCIsIm9hdXRoQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJjcmVkZW50aWFsRnJvbUVycm9yIiwidG9rZW5SZXNwb25zZSIsIm9hdXRoSWRUb2tlbiIsIm9hdXRoQWNjZXNzVG9rZW4iLCJGQUNFQk9PS19TSUdOX0lOX01FVEhPRCIsImNyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiR09PR0xFX1NJR05fSU5fTUVUSE9EIiwiR0lUSFVCX1NJR05fSU5fTUVUSE9EIiwiSURQX1JFUVVFU1RfVVJJIiwiU0FNTEF1dGhDcmVkZW50aWFsIiwiX2NyZWF0ZSIsIlNBTUxfUFJPVklERVJfUFJFRklYIiwic2FtbENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiVFdJVFRFUl9TSUdOX0lOX01FVEhPRCIsInNpZ25VcCIsIlVzZXJDcmVkZW50aWFsSW1wbCIsIm9wZXJhdGlvblR5cGUiLCJwcm92aWRlcklkRm9yUmVzcG9uc2UiLCJ1c2VyQ3JlZCIsIl9mb3JPcGVyYXRpb24iLCJNdWx0aUZhY3RvckVycm9yIiwic2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJfZnJvbUVycm9yQW5kT3BlcmF0aW9uIiwiX3Byb2Nlc3NDcmVkZW50aWFsU2F2aW5nTWZhQ29udGV4dElmTmVjZXNzYXJ5IiwiaWRUb2tlblByb3ZpZGVyIiwicHJvdmlkZXJEYXRhQXNOYW1lcyIsIlNldCIsInBpZCIsIl9hc3NlcnRMaW5rZWRTdGF0dXMiLCJkZWxldGVQcm92aWRlciIsInByb3ZpZGVyc0xlZnQiLCJwZCIsImhhcyIsIl9saW5rJDEiLCJleHBlY3RlZCIsInByb3ZpZGVySWRzIiwiX3JlYXV0aGVudGljYXRlIiwicGFyc2VkIiwic3ViIiwiX3NpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuJDEiLCJjdXN0b21Ub2tlbiIsIk11bHRpRmFjdG9ySW5mb0ltcGwiLCJmYWN0b3JJZCIsIm1mYUVucm9sbG1lbnRJZCIsImVucm9sbG1lbnRUaW1lIiwiZW5yb2xsZWRBdCIsIl9mcm9tU2VydmVyUmVzcG9uc2UiLCJlbnJvbGxtZW50IiwiUGhvbmVNdWx0aUZhY3RvckluZm9JbXBsIiwiVG90cE11bHRpRmFjdG9ySW5mb0ltcGwiLCJwaG9uZUluZm8iLCJfc2V0QWN0aW9uQ29kZVNldHRpbmdzT25SZXF1ZXN0IiwiYWN0aW9uQ29kZVNldHRpbmdzIiwiZHluYW1pY0xpbmtEb21haW4iLCJjYW5IYW5kbGVDb2RlSW5BcHAiLCJoYW5kbGVDb2RlSW5BcHAiLCJpT1MiLCJidW5kbGVJZCIsImlPU0J1bmRsZUlkIiwiYW5kcm9pZCIsInBhY2thZ2VOYW1lIiwiYW5kcm9pZEluc3RhbGxBcHAiLCJpbnN0YWxsQXBwIiwiYW5kcm9pZE1pbmltdW1WZXJzaW9uQ29kZSIsIm1pbmltdW1WZXJzaW9uIiwiYW5kcm9pZFBhY2thZ2VOYW1lIiwicmVjYWNoZVBhc3N3b3JkUG9saWN5IiwicmVxdWVzdFR5cGUiLCJuZXdQYXNzd29yZCIsImF1dGhNb2R1bGFyIiwibmV3RW1haWwiLCJtZmFJbmZvIiwibXVsdGlGYWN0b3JJbmZvIiwiZGF0YSIsInByZXZpb3VzRW1haWwiLCJzaWduVXBSZXNwb25zZSIsInNldEFjdGlvbkNvZGVTZXR0aW5ncyIsInJlcXVlc3QyIiwiYWN0aW9uQ29kZVNldHRpbmdzMiIsImNyZWF0ZUF1dGhVcmkiLCJjb250aW51ZVVyaSIsImlkZW50aWZpZXIiLCJzaWduaW5NZXRob2RzIiwidXBkYXRlUHJvZmlsZSQxIiwicHJvZmlsZVJlcXVlc3QiLCJwYXNzd29yZFByb3ZpZGVyIiwiZmluZCIsInVwZGF0ZUVtYWlsT3JQYXNzd29yZCIsInByb2ZpbGUiLCJyYXdVc2VySW5mbyIsImlzTmV3VXNlciIsImtpbmQiLCJmaWx0ZXJlZFByb3ZpZGVySWQiLCJHZW5lcmljQWRkaXRpb25hbFVzZXJJbmZvIiwiRmFjZWJvb2tBZGRpdGlvbmFsVXNlckluZm8iLCJHaXRodWJBZGRpdGlvbmFsVXNlckluZm8iLCJHb29nbGVBZGRpdGlvbmFsVXNlckluZm8iLCJUd2l0dGVyQWRkaXRpb25hbFVzZXJJbmZvIiwic2NyZWVuTmFtZSIsIkZlZGVyYXRlZEFkZGl0aW9uYWxVc2VySW5mb1dpdGhVc2VybmFtZSIsInVzZXJuYW1lIiwibG9naW4iLCJNdWx0aUZhY3RvclNlc3Npb25JbXBsIiwiX2Zyb21JZHRva2VuIiwiX2Zyb21NZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm1mYVBlbmRpbmdDcmVkZW50aWFsIiwibXVsdGlGYWN0b3JTZXNzaW9uIiwicGVuZGluZ0NyZWRlbnRpYWwiLCJNdWx0aUZhY3RvclJlc29sdmVySW1wbCIsInNlc3Npb24iLCJoaW50cyIsInNpZ25JblJlc29sdmVyIiwiX2Zyb21FcnJvciIsIm1mYVJlc3BvbnNlIiwiX3Byb2Nlc3MiLCJyZXNvbHZlU2lnbkluIiwiYXNzZXJ0aW9uRXh0ZXJuIiwiZXJyb3JJbnRlcm5hbCIsInN0YXJ0RW5yb2xsUGhvbmVNZmEiLCJmaW5hbGl6ZUVucm9sbFBob25lTWZhIiwic3RhcnRFbnJvbGxUb3RwTWZhIiwiZmluYWxpemVFbnJvbGxUb3RwTWZhIiwid2l0aGRyYXdNZmEiLCJNdWx0aUZhY3RvclVzZXJJbXBsIiwiZW5yb2xsZWRGYWN0b3JzIiwiX2Zyb21Vc2VyIiwiZ2V0U2Vzc2lvbiIsImVucm9sbCIsImZpbmFsaXplTWZhUmVzcG9uc2UiLCJ1bmVucm9sbCIsImluZm9PclVpZCIsIm11bHRpRmFjdG9yVXNlckNhY2hlIiwiV2Vha01hcCIsInVzZXJNb2R1bGFyIiwiU1RPUkFHRV9BVkFJTEFCTEVfS0VZIiwiQnJvd3NlclBlcnNpc3RlbmNlQ2xhc3MiLCJzdG9yYWdlUmV0cmlldmVyIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwiX2lmcmFtZUNhbm5vdFN5bmNXZWJTdG9yYWdlIiwiX1BPTExJTkdfSU5URVJWQUxfTVMkMSIsIklFMTBfTE9DQUxfU1RPUkFHRV9TWU5DX0RFTEFZIiwiQnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJldmVudCIsInBvbGwiLCJvblN0b3JhZ2VFdmVudCIsImxpc3RlbmVycyIsImxvY2FsQ2FjaGUiLCJwb2xsVGltZXIiLCJzYWZhcmlMb2NhbFN0b3JhZ2VOb3RTeW5jZWQiLCJmYWxsYmFja1RvUG9sbGluZyIsImZvckFsbENoYW5nZWRLZXlzIiwia2V5cyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJrZXkyIiwiX29sZFZhbHVlIiwibm90aWZ5TGlzdGVuZXJzIiwiZGV0YWNoTGlzdGVuZXIiLCJzdG9wUG9sbGluZyIsInN0b3JlZFZhbHVlMiIsInRyaWdnZXJMaXN0ZW5lcnMiLCJzdG9yZWRWYWx1ZSIsImxpc3RlbmVyIiwiZnJvbSIsInN0YXJ0UG9sbGluZyIsInNldEludGVydmFsIiwiU3RvcmFnZUV2ZW50IiwiY2xlYXJJbnRlcnZhbCIsImF0dGFjaExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpemUiLCJCcm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwic2Vzc2lvblN0b3JhZ2UiLCJfYWxsU2V0dGxlZCIsInByb21pc2VzIiwiZnVsZmlsbGVkIiwicmVhc29uIiwiUmVjZWl2ZXIiLCJldmVudFRhcmdldCIsImhhbmRsZXJzTWFwIiwiaGFuZGxlRXZlbnQiLCJleGlzdGluZ0luc3RhbmNlIiwicmVjZWl2ZXJzIiwicmVjZWl2ZXIiLCJpc0xpc3RlbmluZ3RvIiwibmV3SW5zdGFuY2UiLCJtZXNzYWdlRXZlbnQiLCJldmVudElkIiwiZXZlbnRUeXBlIiwiaGFuZGxlcnMiLCJwb3J0cyIsInBvc3RNZXNzYWdlIiwiaGFuZGxlciIsIm9yaWdpbiIsIl9zdWJzY3JpYmUiLCJldmVudEhhbmRsZXIiLCJfdW5zdWJzY3JpYmUiLCJfZ2VuZXJhdGVFdmVudElkIiwiZGlnaXRzIiwiU2VuZGVyIiwidGFyZ2V0IiwicmVtb3ZlTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25NZXNzYWdlIiwiY2xvc2UiLCJfc2VuZCIsInRpbWVvdXQiLCJNZXNzYWdlQ2hhbm5lbCIsImNvbXBsZXRpb25UaW1lciIsInN0YXJ0IiwiYWNrVGltZXIiLCJwb3J0MiIsImZpbmFsbHkiLCJfd2luZG93IiwiX3NldFdpbmRvd0xvY2F0aW9uIiwiX2lzV29ya2VyIiwiX2dldEFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0cmF0aW9uIiwiYWN0aXZlIiwiX2dldFNlcnZpY2VXb3JrZXJDb250cm9sbGVyIiwiY29udHJvbGxlciIsIl9nZXRXb3JrZXJHbG9iYWxTY29wZSIsIkRCX05BTUUiLCJEQl9WRVJTSU9OIiwiREJfT0JKRUNUU1RPUkVfTkFNRSIsIkRCX0RBVEFfS0VZUEFUSCIsIkRCUHJvbWlzZSIsInRvUHJvbWlzZSIsImdldE9iamVjdFN0b3JlIiwiZGIiLCJpc1JlYWRXcml0ZSIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJfZGVsZXRlRGF0YWJhc2UiLCJpbmRleGVkREIiLCJkZWxldGVEYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJvcGVuIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwiX3B1dE9iamVjdCIsInB1dCIsImdldE9iamVjdCIsIl9kZWxldGVPYmplY3QiLCJfUE9MTElOR19JTlRFUlZBTF9NUyIsIl9UUkFOU0FDVElPTl9SRVRSWV9DT1VOVCIsIkluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJwZW5kaW5nV3JpdGVzIiwic2VuZGVyIiwic2VydmljZVdvcmtlclJlY2VpdmVyQXZhaWxhYmxlIiwiYWN0aXZlU2VydmljZVdvcmtlciIsIl93b3JrZXJJbml0aWFsaXphdGlvblByb21pc2UiLCJpbml0aWFsaXplU2VydmljZVdvcmtlck1lc3NhZ2luZyIsIl9vcGVuRGIiLCJfd2l0aFJldHJpZXMiLCJvcCIsIm51bUF0dGVtcHRzIiwiaW5pdGlhbGl6ZVJlY2VpdmVyIiwiaW5pdGlhbGl6ZVNlbmRlciIsIl9vcmlnaW4iLCJfcG9sbCIsImtleVByb2Nlc3NlZCIsIl9kYXRhIiwicmVzdWx0cyIsIm5vdGlmeVNlcnZpY2VXb3JrZXIiLCJfd2l0aFBlbmRpbmdXcml0ZSIsIndyaXRlIiwiZ2V0QWxsUmVxdWVzdCIsImdldEFsbCIsImtleXNJblJlc3VsdCIsImZiYXNlX2tleSIsImxvY2FsS2V5Iiwic3RhcnRTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblRvdHBNZmEiLCJfU09MVkVfVElNRV9NUyIsIl9FWFBJUkFUSU9OX1RJTUVfTVMiLCJfV0lER0VUX0lEX1NUQVJUIiwiTW9ja1JlQ2FwdGNoYSIsImNvdW50ZXIiLCJfd2lkZ2V0cyIsInJlbmRlciIsImNvbnRhaW5lciIsInBhcmFtZXRlcnMiLCJNb2NrV2lkZ2V0IiwicmVzZXQiLCJvcHRXaWRnZXRJZCIsImNvbnRhaW5lck9ySWQiLCJkZWxldGVkIiwicmVzcG9uc2VUb2tlbiIsImNsaWNrSGFuZGxlciIsImdldEVsZW1lbnRCeUlkIiwiaXNWaXNpYmxlIiwiY2hlY2tJZkRlbGV0ZWQiLCJnZW5lcmF0ZVJhbmRvbUFscGhhTnVtZXJpY1N0cmluZyIsImV4cGlyZWRDYWxsYmFjayIsImxlbiIsImNoYXJzIiwiYWxsb3dlZENoYXJzIiwiX0pTTE9BRF9DQUxMQkFDSyIsIk5FVFdPUktfVElNRU9VVF9ERUxBWSIsIlJFQ0FQVENIQV9CQVNFIiwiUmVDYXB0Y2hhTG9hZGVySW1wbCIsImhvc3RMYW5ndWFnZSIsImxpYnJhcnlTZXBhcmF0ZWx5TG9hZGVkIiwibG9hZCIsImhsIiwiaXNIb3N0TGFuZ3VhZ2VWYWxpZCIsInNob3VsZFJlc29sdmVJbW1lZGlhdGVseSIsInJlY2FwdGNoYSIsIndpZGdldElkIiwiY2xlYXJlZE9uZUluc3RhbmNlIiwiTW9ja1JlQ2FwdGNoYUxvYWRlckltcGwiLCJSRUNBUFRDSEFfVkVSSUZJRVJfVFlQRSIsIkRFRkFVTFRfUEFSQU1TIiwidGhlbWUiLCJkZXN0cm95ZWQiLCJ0b2tlbkNoYW5nZUxpc3RlbmVycyIsInJlbmRlclByb21pc2UiLCJpc0ludmlzaWJsZSIsIm1ha2VUb2tlbkNhbGxiYWNrIiwiX3JlY2FwdGNoYUxvYWRlciIsInZhbGlkYXRlU3RhcnRpbmdTdGF0ZSIsImFzc2VydE5vdERlc3Ryb3llZCIsImdldEFzc2VydGVkUmVjYXB0Y2hhIiwidG9rZW5DaGFuZ2UiLCJtYWtlUmVuZGVyUHJvbWlzZSIsIl9yZXNldCIsImNsZWFyIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlQ2hpbGQiLCJzaXRla2V5IiwiaGFzQ2hpbGROb2RlcyIsImV4aXN0aW5nIiwiZ2xvYmFsRnVuYyIsImluaXQiLCJndWFyYW50ZWVkRW1wdHkiLCJkb21SZWFkeSIsIkNvbmZpcm1hdGlvblJlc3VsdEltcGwiLCJvbkNvbmZpcm1hdGlvbiIsImNvbmZpcm0iLCJhdXRoQ3JlZGVudGlhbCIsImFwcFZlcmlmaWVyIiwiX3ZlcmlmeVBob25lTnVtYmVyIiwicmVjYXB0Y2hhVG9rZW4iLCJwaG9uZUluZm9PcHRpb25zIiwicGhvbmVFbnJvbGxtZW50SW5mbyIsInBob25lU2Vzc2lvbkluZm8iLCJtdWx0aUZhY3RvckhpbnQiLCJtdWx0aUZhY3RvclVpZCIsInBob25lU2lnbkluSW5mbyIsInBob25lUmVzcG9uc2VJbmZvIiwidmVyaWZ5UGhvbmVOdW1iZXIiLCJwaG9uZU9wdGlvbnMiLCJhcHBsaWNhdGlvblZlcmlmaWVyIiwiUEhPTkVfU0lHTl9JTl9NRVRIT0QiLCJfd2l0aERlZmF1bHRSZXNvbHZlciIsInJlc29sdmVyT3ZlcnJpZGUiLCJJZHBDcmVkZW50aWFsIiwiX2J1aWxkSWRwUmVxdWVzdCIsInNlc3Npb25JZCIsInJldHVybklkcENyZWRlbnRpYWwiLCJfc2lnbkluIiwiX3JlYXV0aCIsIl9saW5rIiwiQWJzdHJhY3RQb3B1cFJlZGlyZWN0T3BlcmF0aW9uIiwicGVuZGluZ1Byb21pc2UiLCJldmVudE1hbmFnZXIiLCJvbkV4ZWN1dGlvbiIsInJlZ2lzdGVyQ29uc3VtZXIiLCJvbkF1dGhFdmVudCIsInVybFJlc3BvbnNlIiwiZ2V0SWRwVGFzayIsIm9uRXJyb3IiLCJ1bnJlZ2lzdGVyQW5kQ2xlYW5VcCIsInVucmVnaXN0ZXJDb25zdW1lciIsImNsZWFuVXAiLCJfUE9MTF9XSU5ET1dfQ0xPU0VfVElNRU9VVCIsInJlc29sdmVySW50ZXJuYWwiLCJQb3B1cE9wZXJhdGlvbiIsImV4ZWN1dGVOb3ROdWxsIiwiYXV0aFdpbmRvdyIsInBvbGxJZCIsImN1cnJlbnRQb3B1cEFjdGlvbiIsImNhbmNlbCIsIl9vcGVuUG9wdXAiLCJhc3NvY2lhdGVkRXZlbnQiLCJfb3JpZ2luVmFsaWRhdGlvbiIsIl9pc0lmcmFtZVdlYlN0b3JhZ2VTdXBwb3J0ZWQiLCJpc1N1cHBvcnRlZCIsInBvbGxVc2VyQ2FuY2VsbGF0aW9uIiwiY2xvc2VkIiwiUEVORElOR19SRURJUkVDVF9LRVkiLCJyZWRpcmVjdE91dGNvbWVNYXAiLCJSZWRpcmVjdEFjdGlvbiIsInJlYWR5T3V0Y29tZSIsImhhc1BlbmRpbmdSZWRpcmVjdCIsIl9nZXRBbmRDbGVhclBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsInBlbmRpbmdSZWRpcmVjdEtleSIsInJlc29sdmVyUGVyc2lzdGVuY2UiLCJfc2V0UGVuZGluZ1JlZGlyZWN0U3RhdHVzIiwiX2NsZWFyUmVkaXJlY3RPdXRjb21lcyIsIl9zaWduSW5XaXRoUmVkaXJlY3QiLCJfb3BlblJlZGlyZWN0IiwiX3JlYXV0aGVudGljYXRlV2l0aFJlZGlyZWN0IiwicHJlcGFyZVVzZXJGb3JSZWRpcmVjdCIsIl9saW5rV2l0aFJlZGlyZWN0IiwiX2dldFJlZGlyZWN0UmVzdWx0IiwicmVzb2x2ZXJFeHRlcm4iLCJFVkVOVF9EVVBMSUNBVElPTl9DQUNIRV9EVVJBVElPTl9NUyIsIkF1dGhFdmVudE1hbmFnZXIiLCJjYWNoZWRFdmVudFVpZHMiLCJjb25zdW1lcnMiLCJxdWV1ZWRSZWRpcmVjdEV2ZW50IiwiaGFzSGFuZGxlZFBvdGVudGlhbFJlZGlyZWN0IiwibGFzdFByb2Nlc3NlZEV2ZW50VGltZSIsImF1dGhFdmVudENvbnN1bWVyIiwiaXNFdmVudEZvckNvbnN1bWVyIiwic2VuZFRvQ29uc3VtZXIiLCJzYXZlRXZlbnRUb0NhY2hlIiwib25FdmVudCIsImhhc0V2ZW50QmVlbkhhbmRsZWQiLCJoYW5kbGVkIiwiY29uc3VtZXIiLCJpc1JlZGlyZWN0RXZlbnQiLCJpc051bGxSZWRpcmVjdEV2ZW50IiwiZXZlbnRJZE1hdGNoZXMiLCJldmVudFVpZCIsInYiLCJfZ2V0UHJvamVjdENvbmZpZyIsIklQX0FERFJFU1NfUkVHRVgiLCJIVFRQX1JFR0VYIiwiX3ZhbGlkYXRlT3JpZ2luIiwiYXV0aG9yaXplZERvbWFpbnMiLCJkb21haW4iLCJtYXRjaERvbWFpbiIsImN1cnJlbnRVcmwiLCJob3N0bmFtZSIsIlVSTCIsImNlVXJsIiwiZXNjYXBlZERvbWFpblBhdHRlcm4iLCJSZWdFeHAiLCJORVRXT1JLX1RJTUVPVVQiLCJyZXNldFVubG9hZGVkR2FwaU1vZHVsZXMiLCJiZWFjb24iLCJfX19qc2wiLCJIIiwiaGludCIsInIiLCJMIiwiQ1AiLCJsb2FkR2FwaSIsImxvYWRHYXBpSWZyYW1lIiwiZ2FwaSIsImlmcmFtZXMiLCJnZXRDb250ZXh0Iiwib250aW1lb3V0IiwiSWZyYW1lIiwiY2JOYW1lIiwiY2FjaGVkR0FwaUxvYWRlciIsIl9sb2FkR2FwaSIsIlBJTkdfVElNRU9VVCIsIklGUkFNRV9QQVRIIiwiRU1VTEFURURfSUZSQU1FX1BBVEgiLCJJRlJBTUVfQVRUUklCVVRFUyIsImhlaWdodCIsInRhYmluZGV4IiwiRUlEX0ZST01fQVBJSE9TVCIsImdldElmcmFtZVVybCIsImVpZCIsImZ3IiwiX29wZW5JZnJhbWUiLCJjb250ZXh0IiwiZ2FwaTIiLCJ3aGVyZSIsIm1lc3NhZ2VIYW5kbGVyc0ZpbHRlciIsIkNST1NTX09SSUdJTl9JRlJBTUVTX0ZJTFRFUiIsImF0dHJpYnV0ZXMiLCJkb250Y2xlYXIiLCJpZnJhbWUiLCJyZXN0eWxlIiwic2V0SGlkZU9uTGVhdmUiLCJuZXR3b3JrRXJyb3IiLCJuZXR3b3JrRXJyb3JUaW1lciIsImNsZWFyVGltZXJBbmRSZXNvbHZlIiwicGluZyIsIkJBU0VfUE9QVVBfT1BUSU9OUyIsInJlc2l6YWJsZSIsInN0YXR1c2JhciIsInRvb2xiYXIiLCJERUZBVUxUX1dJRFRIIiwiREVGQVVMVF9IRUlHSFQiLCJUQVJHRVRfQkxBTksiLCJGSVJFRk9YX0VNUFRZX1VSTCIsIkF1dGhQb3B1cCIsIndpbmRvdzIiLCJfb3BlbiIsInNjcmVlbiIsImF2YWlsSGVpZ2h0IiwiYXZhaWxXaWR0aCIsInNjcm9sbGJhcnMiLCJvcHRpb25zU3RyaW5nIiwiZW50cmllcyIsInJlZHVjZSIsImFjY3VtIiwib3BlbkFzTmV3V2luZG93SU9TIiwibmV3V2luIiwiZm9jdXMiLCJjbGljayIsImNyZWF0ZUV2ZW50IiwiaW5pdE1vdXNlRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiV0lER0VUX1BBVEgiLCJFTVVMQVRPUl9XSURHRVRfUEFUSCIsIkZJUkVCQVNFX0FQUF9DSEVDS19GUkFHTUVOVF9JRCIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9nZXRSZWRpcmVjdFVybCIsImF1dGhUeXBlIiwicmVkaXJlY3RVcmwiLCJhZGRpdGlvbmFsUGFyYW1zIiwiaXNFbXB0eSIsInRpZCIsInBhcmFtc0RpY3QiLCJhcHBDaGVja1Rva2VuRnJhZ21lbnQiLCJnZXRIYW5kbGVyQmFzZSIsIldFQl9TVE9SQUdFX1NVUFBPUlRfS0VZIiwiQnJvd3NlclBvcHVwUmVkaXJlY3RSZXNvbHZlciIsImV2ZW50TWFuYWdlcnMiLCJvcmlnaW5WYWxpZGF0aW9uUHJvbWlzZXMiLCJwcm9taXNlMiIsImluaXRBbmRHZXRNYW5hZ2VyIiwicmVnaXN0ZXIiLCJpZnJhbWVFdmVudCIsImF1dGhFdmVudCIsInNlbmQiLCJNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZmluYWxpemVFbnJvbGwiLCJfZmluYWxpemVTaWduSW4iLCJQaG9uZU11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tQ3JlZGVudGlhbCIsInBob25lVmVyaWZpY2F0aW9uSW5mbyIsIkZBQ1RPUl9JRCIsImFzc2VydGlvbkZvckVucm9sbG1lbnQiLCJvbmVUaW1lUGFzc3dvcmQiLCJUb3RwTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2Zyb21TZWNyZXQiLCJhc3NlcnRpb25Gb3JTaWduSW4iLCJlbnJvbGxtZW50SWQiLCJfZnJvbUVucm9sbG1lbnRJZCIsImdlbmVyYXRlU2VjcmV0IiwibWZhU2Vzc2lvbiIsInRvdHBFbnJvbGxtZW50SW5mbyIsIl9mcm9tU3RhcnRUb3RwTWZhRW5yb2xsbWVudFJlc3BvbnNlIiwib3RwIiwidG90cFZlcmlmaWNhdGlvbkluZm8iLCJfbWFrZVRvdHBWZXJpZmljYXRpb25JbmZvIiwic2VjcmV0S2V5IiwiaGFzaGluZ0FsZ29yaXRobSIsImNvZGVMZW5ndGgiLCJjb2RlSW50ZXJ2YWxTZWNvbmRzIiwiZW5yb2xsbWVudENvbXBsZXRpb25EZWFkbGluZSIsInRvdHBTZXNzaW9uSW5mbyIsInNoYXJlZFNlY3JldEtleSIsInZlcmlmaWNhdGlvbkNvZGVMZW5ndGgiLCJwZXJpb2RTZWMiLCJmaW5hbGl6ZUVucm9sbG1lbnRUaW1lIiwiZ2VuZXJhdGVRckNvZGVVcmwiLCJhY2NvdW50TmFtZSIsImlzc3VlciIsInVzZURlZmF1bHRzIiwiX2lzRW1wdHlTdHJpbmciLCJpbnB1dCIsIkF1dGhJbnRlcm9wIiwiaW50ZXJuYWxMaXN0ZW5lcnMiLCJnZXRVaWQiLCJhc3NlcnRBdXRoQ29uZmlndXJlZCIsImFkZEF1dGhUb2tlbkxpc3RlbmVyIiwidXBkYXRlUHJvYWN0aXZlUmVmcmVzaCIsInJlbW92ZUF1dGhUb2tlbkxpc3RlbmVyIiwiZ2V0VmVyc2lvbkZvclBsYXRmb3JtIiwicmVnaXN0ZXJBdXRoIiwiX3JlZ2lzdGVyQ29tcG9uZW50IiwiaW1wb3J0X2NvbXBvbmVudCIsIkNvbXBvbmVudCIsImdldFByb3ZpZGVyIiwiYXV0aEluc3RhbmNlIiwic2V0SW5zdGFudGlhdGlvbk1vZGUiLCJzZXRJbnN0YW5jZUNyZWF0ZWRDYWxsYmFjayIsIl9pbnN0YW5jZUlkZW50aWZpZXIiLCJfaW5zdGFuY2UiLCJhdXRoSW50ZXJuYWxQcm92aWRlciIsInJlZ2lzdGVyVmVyc2lvbiIsIkRFRkFVTFRfSURfVE9LRU5fTUFYX0FHRSIsImF1dGhJZFRva2VuTWF4QWdlIiwiZ2V0RXhwZXJpbWVudGFsU2V0dGluZyIsImxhc3RQb3N0ZWRJZFRva2VuIiwibWludENvb2tpZUZhY3RvcnkiLCJpZFRva2VuUmVzdWx0IiwiaWRUb2tlbkFnZSIsImdldEFwcCIsImF1dGhUb2tlblN5bmNVcmwiLCJtaW50Q29va2llIiwiYXV0aEVtdWxhdG9ySG9zdCIsImdldERlZmF1bHRFbXVsYXRvckhvc3QiLCJpbXBvcnRfdXRpbDIiLCJyZXF1aXJlIiwiaW1wb3J0X2FwcDIiLCJpbXBvcnRfbG9nZ2VyMiIsImltcG9ydF90c2xpYjIiLCJpbXBvcnRfY29tcG9uZW50MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQywwQ0FBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEs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