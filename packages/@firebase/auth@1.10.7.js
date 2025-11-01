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
  /** Phone as second factor */
  PHONE: "phone",
  TOTP: "totp"
};
var ProviderId = {
  /** Facebook provider ID */
  FACEBOOK: "facebook.com",
  /** GitHub provider ID */
  GITHUB: "github.com",
  /** Google provider ID */
  GOOGLE: "google.com",
  /** Password provider */
  PASSWORD: "password",
  /** Phone provider */
  PHONE: "phone",
  /** Twitter provider ID */
  TWITTER: "twitter.com"
};
var SignInMethod = {
  /** Email link sign in method */
  EMAIL_LINK: "emailLink",
  /** Email/password sign in method */
  EMAIL_PASSWORD: "password",
  /** Facebook sign in method */
  FACEBOOK: "facebook.com",
  /** GitHub sign in method */
  GITHUB: "github.com",
  /** Google sign in method */
  GOOGLE: "google.com",
  /** Phone sign in method */
  PHONE: "phone",
  /** Twitter sign in method */
  TWITTER: "twitter.com"
};
var OperationType = {
  /** Operation involving linking an additional provider to an already signed-in user. */
  LINK: "link",
  /** Operation involving using a provider to reauthenticate an already signed-in user. */
  REAUTHENTICATE: "reauthenticate",
  /** Operation involving signing in a user. */
  SIGN_IN: "signIn"
};
var ActionCodeOperation = {
  /** The email link sign-in action. */
  EMAIL_SIGNIN: "EMAIL_SIGNIN",
  /** The password reset action. */
  PASSWORD_RESET: "PASSWORD_RESET",
  /** The email revocation action. */
  RECOVER_EMAIL: "RECOVER_EMAIL",
  /** The revert second factor addition email action. */
  REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
  /** The revert second factor addition email action. */
  VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
  /** The email verification action. */
  VERIFY_EMAIL: "VERIFY_EMAIL"
};
function _debugErrorMap() {
  return {
    ["admin-restricted-operation"
    /* AuthErrorCode.ADMIN_ONLY_OPERATION */]: "This operation is restricted to administrators only.",
    ["argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */]: "",
    ["app-not-authorized"
    /* AuthErrorCode.APP_NOT_AUTHORIZED */]: "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    ["app-not-installed"
    /* AuthErrorCode.APP_NOT_INSTALLED */]: "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    ["captcha-check-failed"
    /* AuthErrorCode.CAPTCHA_CHECK_FAILED */]: "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
    ["code-expired"
    /* AuthErrorCode.CODE_EXPIRED */]: "The SMS code has expired. Please re-send the verification code to try again.",
    ["cordova-not-ready"
    /* AuthErrorCode.CORDOVA_NOT_READY */]: "Cordova framework is not ready.",
    ["cors-unsupported"
    /* AuthErrorCode.CORS_UNSUPPORTED */]: "This browser is not supported.",
    ["credential-already-in-use"
    /* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */]: "This credential is already associated with a different user account.",
    ["custom-token-mismatch"
    /* AuthErrorCode.CREDENTIAL_MISMATCH */]: "The custom token corresponds to a different audience.",
    ["requires-recent-login"
    /* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */]: "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    ["dependent-sdk-initialized-before-auth"
    /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    ["dynamic-link-not-activated"
    /* AuthErrorCode.DYNAMIC_LINK_NOT_ACTIVATED */]: "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    ["email-change-needs-verification"
    /* AuthErrorCode.EMAIL_CHANGE_NEEDS_VERIFICATION */]: "Multi-factor users must always have a verified email.",
    ["email-already-in-use"
    /* AuthErrorCode.EMAIL_EXISTS */]: "The email address is already in use by another account.",
    ["emulator-config-failed"
    /* AuthErrorCode.EMULATOR_CONFIG_FAILED */]: 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
    ["expired-action-code"
    /* AuthErrorCode.EXPIRED_OOB_CODE */]: "The action code has expired.",
    ["cancelled-popup-request"
    /* AuthErrorCode.EXPIRED_POPUP_REQUEST */]: "This operation has been cancelled due to another conflicting popup being opened.",
    ["internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */]: "An internal AuthError has occurred.",
    ["invalid-app-credential"
    /* AuthErrorCode.INVALID_APP_CREDENTIAL */]: "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
    ["invalid-app-id"
    /* AuthErrorCode.INVALID_APP_ID */]: "The mobile app identifier is not registered for the current project.",
    ["invalid-user-token"
    /* AuthErrorCode.INVALID_AUTH */]: "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
    ["invalid-auth-event"
    /* AuthErrorCode.INVALID_AUTH_EVENT */]: "An internal AuthError has occurred.",
    ["invalid-verification-code"
    /* AuthErrorCode.INVALID_CODE */]: "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
    ["invalid-continue-uri"
    /* AuthErrorCode.INVALID_CONTINUE_URI */]: "The continue URL provided in the request is invalid.",
    ["invalid-cordova-configuration"
    /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */]: "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    ["invalid-custom-token"
    /* AuthErrorCode.INVALID_CUSTOM_TOKEN */]: "The custom token format is incorrect. Please check the documentation.",
    ["invalid-dynamic-link-domain"
    /* AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN */]: "The provided dynamic link domain is not configured or authorized for the current project.",
    ["invalid-email"
    /* AuthErrorCode.INVALID_EMAIL */]: "The email address is badly formatted.",
    ["invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */]: "Emulator URL must start with a valid scheme (http:// or https://).",
    ["invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */]: "Your API key is invalid, please check you have copied it correctly.",
    ["invalid-cert-hash"
    /* AuthErrorCode.INVALID_CERT_HASH */]: "The SHA-1 certificate hash provided is invalid.",
    ["invalid-credential"
    /* AuthErrorCode.INVALID_CREDENTIAL */]: "The supplied auth credential is incorrect, malformed or has expired.",
    ["invalid-message-payload"
    /* AuthErrorCode.INVALID_MESSAGE_PAYLOAD */]: "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
    ["invalid-multi-factor-session"
    /* AuthErrorCode.INVALID_MFA_SESSION */]: "The request does not contain a valid proof of first factor successful sign-in.",
    ["invalid-oauth-provider"
    /* AuthErrorCode.INVALID_OAUTH_PROVIDER */]: "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    ["invalid-oauth-client-id"
    /* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */]: "The OAuth client ID provided is either invalid or does not match the specified API key.",
    ["unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */]: "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    ["invalid-action-code"
    /* AuthErrorCode.INVALID_OOB_CODE */]: "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    ["wrong-password"
    /* AuthErrorCode.INVALID_PASSWORD */]: "The password is invalid or the user does not have a password.",
    ["invalid-persistence-type"
    /* AuthErrorCode.INVALID_PERSISTENCE */]: "The specified persistence type is invalid. It can only be local, session or none.",
    ["invalid-phone-number"
    /* AuthErrorCode.INVALID_PHONE_NUMBER */]: "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
    ["invalid-provider-id"
    /* AuthErrorCode.INVALID_PROVIDER_ID */]: "The specified provider ID is invalid.",
    ["invalid-recipient-email"
    /* AuthErrorCode.INVALID_RECIPIENT_EMAIL */]: "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
    ["invalid-sender"
    /* AuthErrorCode.INVALID_SENDER */]: "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
    ["invalid-verification-id"
    /* AuthErrorCode.INVALID_SESSION_INFO */]: "The verification ID used to create the phone auth credential is invalid.",
    ["invalid-tenant-id"
    /* AuthErrorCode.INVALID_TENANT_ID */]: "The Auth instance's tenant ID is invalid.",
    ["login-blocked"
    /* AuthErrorCode.LOGIN_BLOCKED */]: "Login blocked by user-provided method: {$originalMessage}",
    ["missing-android-pkg-name"
    /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */]: "An Android Package Name must be provided if the Android App is required to be installed.",
    ["auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */]: "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    ["missing-app-credential"
    /* AuthErrorCode.MISSING_APP_CREDENTIAL */]: "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
    ["missing-verification-code"
    /* AuthErrorCode.MISSING_CODE */]: "The phone auth credential was created with an empty SMS verification code.",
    ["missing-continue-uri"
    /* AuthErrorCode.MISSING_CONTINUE_URI */]: "A continue URL must be provided in the request.",
    ["missing-iframe-start"
    /* AuthErrorCode.MISSING_IFRAME_START */]: "An internal AuthError has occurred.",
    ["missing-ios-bundle-id"
    /* AuthErrorCode.MISSING_IOS_BUNDLE_ID */]: "An iOS Bundle ID must be provided if an App Store ID is provided.",
    ["missing-or-invalid-nonce"
    /* AuthErrorCode.MISSING_OR_INVALID_NONCE */]: "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
    ["missing-password"
    /* AuthErrorCode.MISSING_PASSWORD */]: "A non-empty password must be provided",
    ["missing-multi-factor-info"
    /* AuthErrorCode.MISSING_MFA_INFO */]: "No second factor identifier is provided.",
    ["missing-multi-factor-session"
    /* AuthErrorCode.MISSING_MFA_SESSION */]: "The request is missing proof of first factor successful sign-in.",
    ["missing-phone-number"
    /* AuthErrorCode.MISSING_PHONE_NUMBER */]: "To send verification codes, provide a phone number for the recipient.",
    ["missing-verification-id"
    /* AuthErrorCode.MISSING_SESSION_INFO */]: "The phone auth credential was created with an empty verification ID.",
    ["app-deleted"
    /* AuthErrorCode.MODULE_DESTROYED */]: "This instance of FirebaseApp has been deleted.",
    ["multi-factor-info-not-found"
    /* AuthErrorCode.MFA_INFO_NOT_FOUND */]: "The user does not have a second factor matching the identifier provided.",
    ["multi-factor-auth-required"
    /* AuthErrorCode.MFA_REQUIRED */]: "Proof of ownership of a second factor is required to complete sign-in.",
    ["account-exists-with-different-credential"
    /* AuthErrorCode.NEED_CONFIRMATION */]: "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    ["network-request-failed"
    /* AuthErrorCode.NETWORK_REQUEST_FAILED */]: "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
    ["no-auth-event"
    /* AuthErrorCode.NO_AUTH_EVENT */]: "An internal AuthError has occurred.",
    ["no-such-provider"
    /* AuthErrorCode.NO_SUCH_PROVIDER */]: "User was not linked to an account with the given provider.",
    ["null-user"
    /* AuthErrorCode.NULL_USER */]: "A null user object was provided as the argument for an operation which requires a non-null user object.",
    ["operation-not-allowed"
    /* AuthErrorCode.OPERATION_NOT_ALLOWED */]: "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    ["operation-not-supported-in-this-environment"
    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */]: 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
    ["popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */]: "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    ["popup-closed-by-user"
    /* AuthErrorCode.POPUP_CLOSED_BY_USER */]: "The popup has been closed by the user before finalizing the operation.",
    ["provider-already-linked"
    /* AuthErrorCode.PROVIDER_ALREADY_LINKED */]: "User can only be linked to one identity for the given provider.",
    ["quota-exceeded"
    /* AuthErrorCode.QUOTA_EXCEEDED */]: "The project's quota for this operation has been exceeded.",
    ["redirect-cancelled-by-user"
    /* AuthErrorCode.REDIRECT_CANCELLED_BY_USER */]: "The redirect operation has been cancelled by the user before finalizing.",
    ["redirect-operation-pending"
    /* AuthErrorCode.REDIRECT_OPERATION_PENDING */]: "A redirect sign-in operation is already pending.",
    ["rejected-credential"
    /* AuthErrorCode.REJECTED_CREDENTIAL */]: "The request contains malformed or mismatching credentials.",
    ["second-factor-already-in-use"
    /* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */]: "The second factor is already enrolled on this account.",
    ["maximum-second-factor-count-exceeded"
    /* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */]: "The maximum allowed number of second factors on a user has been exceeded.",
    ["tenant-id-mismatch"
    /* AuthErrorCode.TENANT_ID_MISMATCH */]: "The provided tenant ID does not match the Auth instance's tenant ID",
    ["timeout"
    /* AuthErrorCode.TIMEOUT */]: "The operation has timed out.",
    ["user-token-expired"
    /* AuthErrorCode.TOKEN_EXPIRED */]: "The user's credential is no longer valid. The user must sign in again.",
    ["too-many-requests"
    /* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */]: "We have blocked all requests from this device due to unusual activity. Try again later.",
    ["unauthorized-continue-uri"
    /* AuthErrorCode.UNAUTHORIZED_DOMAIN */]: "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
    ["unsupported-first-factor"
    /* AuthErrorCode.UNSUPPORTED_FIRST_FACTOR */]: "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
    ["unsupported-persistence-type"
    /* AuthErrorCode.UNSUPPORTED_PERSISTENCE */]: "The current environment does not support the specified persistence type.",
    ["unsupported-tenant-operation"
    /* AuthErrorCode.UNSUPPORTED_TENANT_OPERATION */]: "This operation is not supported in a multi-tenant context.",
    ["unverified-email"
    /* AuthErrorCode.UNVERIFIED_EMAIL */]: "The operation requires a verified email.",
    ["user-cancelled"
    /* AuthErrorCode.USER_CANCELLED */]: "The user did not grant your application the permissions it requested.",
    ["user-not-found"
    /* AuthErrorCode.USER_DELETED */]: "There is no user record corresponding to this identifier. The user may have been deleted.",
    ["user-disabled"
    /* AuthErrorCode.USER_DISABLED */]: "The user account has been disabled by an administrator.",
    ["user-mismatch"
    /* AuthErrorCode.USER_MISMATCH */]: "The supplied credentials do not correspond to the previously signed in user.",
    ["user-signed-out"
    /* AuthErrorCode.USER_SIGNED_OUT */]: "",
    ["weak-password"
    /* AuthErrorCode.WEAK_PASSWORD */]: "The password must be 6 characters long or more.",
    ["web-storage-unsupported"
    /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */]: "This browser is not supported or 3rd party cookies and data may be disabled.",
    ["already-initialized"
    /* AuthErrorCode.ALREADY_INITIALIZED */]: "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
    ["missing-recaptcha-token"
    /* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */]: "The reCAPTCHA token is missing when sending request to the backend.",
    ["invalid-recaptcha-token"
    /* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */]: "The reCAPTCHA token is invalid when sending request to the backend.",
    ["invalid-recaptcha-action"
    /* AuthErrorCode.INVALID_RECAPTCHA_ACTION */]: "The reCAPTCHA action is invalid when sending request to the backend.",
    ["recaptcha-not-enabled"
    /* AuthErrorCode.RECAPTCHA_NOT_ENABLED */]: "reCAPTCHA Enterprise integration is not enabled for this project.",
    ["missing-client-type"
    /* AuthErrorCode.MISSING_CLIENT_TYPE */]: "The reCAPTCHA client type is missing when sending request to the backend.",
    ["missing-recaptcha-version"
    /* AuthErrorCode.MISSING_RECAPTCHA_VERSION */]: "The reCAPTCHA version is missing when sending request to the backend.",
    ["invalid-req-type"
    /* AuthErrorCode.INVALID_REQ_TYPE */]: "Invalid request parameters.",
    ["invalid-recaptcha-version"
    /* AuthErrorCode.INVALID_RECAPTCHA_VERSION */]: "The reCAPTCHA version is invalid when sending request to the backend.",
    ["unsupported-password-policy-schema-version"
    /* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */]: "The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",
    ["password-does-not-meet-requirements"
    /* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */]: "The password does not meet the requirements.",
    ["invalid-hosting-link-domain"
    /* AuthErrorCode.INVALID_HOSTING_LINK_DOMAIN */]: "The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."
  };
}
function _prodErrorMap() {
  return {
    ["dependent-sdk-initialized-before-auth"
    /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
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
      _fail(auth, "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */);
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
  if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && (
  // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  _isHttpOrHttps() || (0, import_util.isBrowserExtension)() || "connection" in navigator)) {
    return navigator.onLine;
  }
  return true;
}
function _getUserLanguage() {
  if (typeof navigator === "undefined") {
    return null;
  }
  const navigatorLanguage = navigator;
  return (
    // Most reliable, but only supported in Chrome/Firefox.
    navigatorLanguage.languages && navigatorLanguage.languages[0] ||
    // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    navigatorLanguage.language ||
    // Couldn't determine language.
    null
  );
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
  // Custom token errors.
  ["CREDENTIAL_MISMATCH"
  /* ServerError.CREDENTIAL_MISMATCH */]: "custom-token-mismatch",
  // This can only happen if the SDK sends a bad request.
  ["MISSING_CUSTOM_TOKEN"
  /* ServerError.MISSING_CUSTOM_TOKEN */]: "internal-error",
  // Create Auth URI errors.
  ["INVALID_IDENTIFIER"
  /* ServerError.INVALID_IDENTIFIER */]: "invalid-email",
  // This can only happen if the SDK sends a bad request.
  ["MISSING_CONTINUE_URI"
  /* ServerError.MISSING_CONTINUE_URI */]: "internal-error",
  // Sign in with email and password errors (some apply to sign up too).
  ["INVALID_PASSWORD"
  /* ServerError.INVALID_PASSWORD */]: "wrong-password",
  // This can only happen if the SDK sends a bad request.
  ["MISSING_PASSWORD"
  /* ServerError.MISSING_PASSWORD */]: "missing-password",
  // Thrown if Email Enumeration Protection is enabled in the project and the email or password is
  // invalid.
  ["INVALID_LOGIN_CREDENTIALS"
  /* ServerError.INVALID_LOGIN_CREDENTIALS */]: "invalid-credential",
  // Sign up with email and password errors.
  ["EMAIL_EXISTS"
  /* ServerError.EMAIL_EXISTS */]: "email-already-in-use",
  ["PASSWORD_LOGIN_DISABLED"
  /* ServerError.PASSWORD_LOGIN_DISABLED */]: "operation-not-allowed",
  // Verify assertion for sign in with credential errors:
  ["INVALID_IDP_RESPONSE"
  /* ServerError.INVALID_IDP_RESPONSE */]: "invalid-credential",
  ["INVALID_PENDING_TOKEN"
  /* ServerError.INVALID_PENDING_TOKEN */]: "invalid-credential",
  ["FEDERATED_USER_ID_ALREADY_LINKED"
  /* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */]: "credential-already-in-use",
  // This can only happen if the SDK sends a bad request.
  ["MISSING_REQ_TYPE"
  /* ServerError.MISSING_REQ_TYPE */]: "internal-error",
  // Send Password reset email errors:
  ["EMAIL_NOT_FOUND"
  /* ServerError.EMAIL_NOT_FOUND */]: "user-not-found",
  ["RESET_PASSWORD_EXCEED_LIMIT"
  /* ServerError.RESET_PASSWORD_EXCEED_LIMIT */]: "too-many-requests",
  ["EXPIRED_OOB_CODE"
  /* ServerError.EXPIRED_OOB_CODE */]: "expired-action-code",
  ["INVALID_OOB_CODE"
  /* ServerError.INVALID_OOB_CODE */]: "invalid-action-code",
  // This can only happen if the SDK sends a bad request.
  ["MISSING_OOB_CODE"
  /* ServerError.MISSING_OOB_CODE */]: "internal-error",
  // Operations that require ID token in request:
  ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"
  /* ServerError.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */]: "requires-recent-login",
  ["INVALID_ID_TOKEN"
  /* ServerError.INVALID_ID_TOKEN */]: "invalid-user-token",
  ["TOKEN_EXPIRED"
  /* ServerError.TOKEN_EXPIRED */]: "user-token-expired",
  ["USER_NOT_FOUND"
  /* ServerError.USER_NOT_FOUND */]: "user-token-expired",
  // Other errors.
  ["TOO_MANY_ATTEMPTS_TRY_LATER"
  /* ServerError.TOO_MANY_ATTEMPTS_TRY_LATER */]: "too-many-requests",
  ["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"
  /* ServerError.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */]: "password-does-not-meet-requirements",
  // Phone Auth related errors.
  ["INVALID_CODE"
  /* ServerError.INVALID_CODE */]: "invalid-verification-code",
  ["INVALID_SESSION_INFO"
  /* ServerError.INVALID_SESSION_INFO */]: "invalid-verification-id",
  ["INVALID_TEMPORARY_PROOF"
  /* ServerError.INVALID_TEMPORARY_PROOF */]: "invalid-credential",
  ["MISSING_SESSION_INFO"
  /* ServerError.MISSING_SESSION_INFO */]: "missing-verification-id",
  ["SESSION_EXPIRED"
  /* ServerError.SESSION_EXPIRED */]: "code-expired",
  // Other action code errors when additional settings passed.
  // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
  // This is OK as this error will be caught by client side validation.
  ["MISSING_ANDROID_PACKAGE_NAME"
  /* ServerError.MISSING_ANDROID_PACKAGE_NAME */]: "missing-android-pkg-name",
  ["UNAUTHORIZED_DOMAIN"
  /* ServerError.UNAUTHORIZED_DOMAIN */]: "unauthorized-continue-uri",
  // getProjectConfig errors when clientId is passed.
  ["INVALID_OAUTH_CLIENT_ID"
  /* ServerError.INVALID_OAUTH_CLIENT_ID */]: "invalid-oauth-client-id",
  // User actions (sign-up or deletion) disabled errors.
  ["ADMIN_ONLY_OPERATION"
  /* ServerError.ADMIN_ONLY_OPERATION */]: "admin-restricted-operation",
  // Multi factor related errors.
  ["INVALID_MFA_PENDING_CREDENTIAL"
  /* ServerError.INVALID_MFA_PENDING_CREDENTIAL */]: "invalid-multi-factor-session",
  ["MFA_ENROLLMENT_NOT_FOUND"
  /* ServerError.MFA_ENROLLMENT_NOT_FOUND */]: "multi-factor-info-not-found",
  ["MISSING_MFA_ENROLLMENT_ID"
  /* ServerError.MISSING_MFA_ENROLLMENT_ID */]: "missing-multi-factor-info",
  ["MISSING_MFA_PENDING_CREDENTIAL"
  /* ServerError.MISSING_MFA_PENDING_CREDENTIAL */]: "missing-multi-factor-session",
  ["SECOND_FACTOR_EXISTS"
  /* ServerError.SECOND_FACTOR_EXISTS */]: "second-factor-already-in-use",
  ["SECOND_FACTOR_LIMIT_EXCEEDED"
  /* ServerError.SECOND_FACTOR_LIMIT_EXCEEDED */]: "maximum-second-factor-count-exceeded",
  // Blocking functions related errors.
  ["BLOCKING_FUNCTION_ERROR_RESPONSE"
  /* ServerError.BLOCKING_FUNCTION_ERROR_RESPONSE */]: "internal-error",
  // Recaptcha related errors.
  ["RECAPTCHA_NOT_ENABLED"
  /* ServerError.RECAPTCHA_NOT_ENABLED */]: "recaptcha-not-enabled",
  ["MISSING_RECAPTCHA_TOKEN"
  /* ServerError.MISSING_RECAPTCHA_TOKEN */]: "missing-recaptcha-token",
  ["INVALID_RECAPTCHA_TOKEN"
  /* ServerError.INVALID_RECAPTCHA_TOKEN */]: "invalid-recaptcha-token",
  ["INVALID_RECAPTCHA_ACTION"
  /* ServerError.INVALID_RECAPTCHA_ACTION */]: "invalid-recaptcha-action",
  ["MISSING_CLIENT_TYPE"
  /* ServerError.MISSING_CLIENT_TYPE */]: "missing-client-type",
  ["MISSING_RECAPTCHA_VERSION"
  /* ServerError.MISSING_RECAPTCHA_VERSION */]: "missing-recaptcha-version",
  ["INVALID_RECAPTCHA_VERSION"
  /* ServerError.INVALID_RECAPTCHA_VERSION */]: "invalid-recaptcha-version",
  ["INVALID_REQ_TYPE"
  /* ServerError.INVALID_REQ_TYPE */]: "invalid-req-type"
  /* AuthErrorCode.INVALID_REQ_TYPE */
};
var CookieAuthProxiedEndpoints = ["/v1/accounts:signInWithCustomToken", "/v1/accounts:signInWithEmailLink", "/v1/accounts:signInWithIdp", "/v1/accounts:signInWithPassword", "/v1/accounts:signInWithPhoneNumber", "/v1/token"
/* Endpoint.TOKEN */];
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
    headers["Content-Type"
    /* HttpHeader.CONTENT_TYPE */] = "application/json";
    if (auth.languageCode) {
      headers["X-Firebase-Locale"
      /* HttpHeader.X_FIREBASE_LOCALE */] = auth.languageCode;
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
        return reject(_createError(this.auth, "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */));
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
  /**
   * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
   *
   * @param providerStr - The provider whose enforcement state is to be returned.
   * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
   */
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
  /**
   * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
   *
   * @param providerStr - The provider whose enablement state is to be returned.
   * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
   */
  isProviderEnabled(providerStr) {
    return this.getProviderEnforcementState(providerStr) === "ENFORCE" || this.getProviderEnforcementState(providerStr) === "AUDIT";
  }
  /**
   * Returns true if reCAPTCHA Enterprise protection is enabled in at least one provider, otherwise
   * returns false.
   *
   * @returns Whether or not reCAPTCHA Enterprise protection is enabled for at least one provider.
   */
  isAnyProviderEnabled() {
    return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"
    /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */) || this.isProviderEnabled("PHONE_PROVIDER"
    /* RecaptchaAuthProvider.PHONE_PROVIDER */);
  }
};
async function getRecaptchaParams(auth) {
  return (await _performApiRequest(auth, "GET", "/v1/recaptchaParams"
  /* Endpoint.GET_RECAPTCHA_PARAM */)).recaptchaSiteKey || "";
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
  _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
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
  _assert(parsedToken, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
  _assert(typeof parsedToken.exp !== "undefined", "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
  _assert(typeof parsedToken.iat !== "undefined", "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
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
      this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4
      /* Duration.RETRY_BACKOFF_MAX */);
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
        this.schedule(/* wasError */
        true);
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
  _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
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
    headers["Content-Type"
    /* HttpHeader.CONTENT_TYPE */] = "application/x-www-form-urlencoded";
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
var StsTokenManager = class _StsTokenManager {
  constructor() {
    this.refreshToken = null;
    this.accessToken = null;
    this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(response) {
    _assert(response.idToken, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    _assert(typeof response.idToken !== "undefined", "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    _assert(typeof response.refreshToken !== "undefined", "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
    this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
  }
  updateFromIdToken(idToken) {
    _assert(idToken.length !== 0, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const expiresIn = _tokenExpiresIn(idToken);
    this.updateTokensAndExpiration(idToken, null, expiresIn);
  }
  async getToken(auth, forceRefresh = false) {
    if (!forceRefresh && this.accessToken && !this.isExpired) {
      return this.accessToken;
    }
    _assert(this.refreshToken, auth, "user-token-expired"
    /* AuthErrorCode.TOKEN_EXPIRED */);
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
    const manager = new _StsTokenManager();
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
    return Object.assign(new _StsTokenManager(), this.toJSON());
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
var UserImpl = class _UserImpl {
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
    _assert(accessToken, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
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
    _assert(this.uid === user.uid, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
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
    const newUser = new _UserImpl(Object.assign(Object.assign({}, this), {
      auth,
      stsTokenManager: this.stsTokenManager._clone()
    }));
    newUser.metadata._copy(this.metadata);
    return newUser;
  }
  _onReload(callback) {
    _assert(!this.reloadListener, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
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
      // Redirect event ID must be maintained in case there is a pending
      // redirect event.
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
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
    _assert(uid && plainObjectTokenManager, auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
    _assert(typeof uid === "string", auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    assertStringOrUndefined(displayName, auth.name);
    assertStringOrUndefined(email, auth.name);
    _assert(typeof emailVerified === "boolean", auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    _assert(typeof isAnonymous === "boolean", auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    assertStringOrUndefined(phoneNumber, auth.name);
    assertStringOrUndefined(photoURL, auth.name);
    assertStringOrUndefined(tenantId, auth.name);
    assertStringOrUndefined(_redirectEventId, auth.name);
    assertStringOrUndefined(createdAt, auth.name);
    assertStringOrUndefined(lastLoginAt, auth.name);
    const user = new _UserImpl({
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
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromServerResponse(idTokenResponse);
    const user = new _UserImpl({
      uid: idTokenResponse.localId,
      auth,
      stsTokenManager,
      isAnonymous
    });
    await _reloadWithoutSaving(user);
    return user;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromGetAccountInfoResponse(auth, response, idToken) {
    const coreAccount = response.users[0];
    _assert(coreAccount.localId !== void 0, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const providerData = coreAccount.providerUserInfo !== void 0 ? extractProviderData(coreAccount.providerUserInfo) : [];
    const isAnonymous = !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromIdToken(idToken);
    const user = new _UserImpl({
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
var PersistenceUserManager = class _PersistenceUserManager {
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
      return new _PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
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
      return new _PersistenceUserManager(selectedPersistence, auth, userKey);
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
    return new _PersistenceUserManager(selectedPersistence, auth, userKey);
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
  /**
   * Validates that the password meets the length options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
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
  /**
   * Validates that the password meets the character options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordCharacterOptions(password, status) {
    this.updatePasswordCharacterOptionsStatuses(status, /* containsLowercaseCharacter= */
    false, /* containsUppercaseCharacter= */
    false, /* containsNumericCharacter= */
    false, /* containsNonAlphanumericCharacter= */
    false);
    let passwordChar;
    for (let i = 0; i < password.length; i++) {
      passwordChar = password.charAt(i);
      this.updatePasswordCharacterOptionsStatuses(status, /* containsLowercaseCharacter= */
      passwordChar >= "a" && passwordChar <= "z", /* containsUppercaseCharacter= */
      passwordChar >= "A" && passwordChar <= "Z", /* containsNumericCharacter= */
      passwordChar >= "0" && passwordChar <= "9", /* containsNonAlphanumericCharacter= */
      this.allowedNonAlphanumericCharacters.includes(passwordChar));
    }
  }
  /**
   * Updates the running validation status with the statuses for the character options.
   * Expected to be called each time a character is processed to update each option status
   * based on the current character.
   *
   * @param status Validation status.
   * @param containsLowercaseCharacter Whether the character is a lowercase letter.
   * @param containsUppercaseCharacter Whether the character is an uppercase letter.
   * @param containsNumericCharacter Whether the character is a numeric character.
   * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
   */
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
  /**
   * If the persistence is changed in another window, the user manager will let us know
   */
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
    await this._updateCurrentUser(user, /* skipBeforeStateCallbacks */
    true);
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
    _assert(this._popupRedirectResolver, this, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
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
      _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */);
    }
    return this._updateCurrentUser(user && user._clone(this));
  }
  async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
    if (this._deleted) {
      return;
    }
    if (user) {
      _assert(this.tenantId === user.tenantId, this, "tenant-id-mismatch"
      /* AuthErrorCode.TENANT_ID_MISMATCH */);
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
    return this._updateCurrentUser(null, /* skipBeforeStateCallbacks */
    true);
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
  /**
   * Revokes the given access token. Currently only supports Apple OAuth access tokens.
   */
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
      _assert(resolver, this, "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */);
      this.redirectPersistenceManager = await PersistenceUserManager.create(this, [_getInstance(resolver._redirectPersistence)], "redirectUser"
      /* KeyName.REDIRECT_USER */);
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
  /** Notifies listeners only if the user is current */
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
  /** Returns the current user cast as the internal type */
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
    _assert(promise, this, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
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
  /**
   * Unprotected (from race conditions) method to set the current user. This
   * should only be called from within a queued callback. This is necessary
   * because the queue shouldn't rely on another queued callback.
   */
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
    _assert(this.persistenceManager, this, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
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
      ["X-Client-Version"
      /* HttpHeader.X_CLIENT_VERSION */]: this.clientVersion
    };
    if (this.app.options.appId) {
      headers["X-Firebase-gmpid"
      /* HttpHeader.X_FIREBASE_GMPID */] = this.app.options.appId;
    }
    const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
      optional: true
    })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
    if (heartbeatsHeader) {
      headers["X-Firebase-Client"
      /* HttpHeader.X_FIREBASE_CLIENT */] = heartbeatsHeader;
    }
    const appCheckToken = await this._getAppCheckToken();
    if (appCheckToken) {
      headers["X-Firebase-AppCheck"
      /* HttpHeader.X_FIREBASE_APP_CHECK */] = appCheckToken;
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
    _assert(this.observer, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
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
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(authExtern) {
    this.type = RECAPTCHA_ENTERPRISE_VERIFIER_TYPE;
    this.auth = _castAuth(authExtern);
  }
  /**
   * Executes the verification process.
   *
   * @returns A Promise for a token that can be used to assert the validity of a request.
   */
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
          /* RecaptchaVersion.ENTERPRISE */
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
          /* RecaptchaVersion.ENTERPRISE */
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
          /* RecaptchaVersion.ENTERPRISE */
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
    /* RecaptchaClientType.WEB */
  });
  Object.assign(newRequest, {
    "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  });
  return newRequest;
}
async function handleRecaptchaFlow(authInstance, request, actionName, actionMethod, recaptchaAuthProvider) {
  var _a, _b;
  if (recaptchaAuthProvider === "EMAIL_PASSWORD_PROVIDER") {
    if ((_a = authInstance._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"
    /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */)) {
      const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName, actionName === "getOobCode"
      /* RecaptchaActionName.GET_OOB_CODE */);
      return actionMethod(authInstance, requestWithRecaptcha);
    } else {
      return actionMethod(authInstance, request).catch(async error => {
        if (error.code === `auth/${"missing-recaptcha-token"}`) {
          console.log(`${actionName} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
          const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName, actionName === "getOobCode"
          /* RecaptchaActionName.GET_OOB_CODE */);
          return actionMethod(authInstance, requestWithRecaptcha);
        } else {
          return Promise.reject(error);
        }
      });
    }
  } else if (recaptchaAuthProvider === "PHONE_PROVIDER") {
    if ((_b = authInstance._getRecaptchaConfig()) === null || _b === void 0 ? void 0 : _b.isProviderEnabled("PHONE_PROVIDER"
    /* RecaptchaAuthProvider.PHONE_PROVIDER */)) {
      const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName);
      return actionMethod(authInstance, requestWithRecaptcha).catch(async error => {
        var _a2;
        if (((_a2 = authInstance._getRecaptchaConfig()) === null || _a2 === void 0 ? void 0 : _a2.getProviderEnforcementState("PHONE_PROVIDER"
        /* RecaptchaAuthProvider.PHONE_PROVIDER */)) === "AUDIT") {
          if (error.code === `auth/${"missing-recaptcha-token"}` || error.code === `auth/${"invalid-app-credential"}`) {
            console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${actionName} flow.`);
            const requestWithRecaptchaFields = await injectRecaptchaFields(authInstance, request, actionName, false,
            // isCaptchaResp
            true
            // isFakeToken
            );
            return actionMethod(authInstance, requestWithRecaptchaFields);
          }
        }
        return Promise.reject(error);
      });
    } else {
      const requestWithRecaptchaFields = await injectRecaptchaFields(authInstance, request, actionName, false,
      // isCaptchaResp
      true
      // isFakeToken
      );
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
    /* RecaptchaVersion.ENTERPRISE */
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
      _fail(auth2, "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */);
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
  _assert(/^https?:\/\//.test(url), authInternal, "invalid-emulator-scheme"
  /* AuthErrorCode.INVALID_EMULATOR_SCHEME */);
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
    _assert(authInternal.config.emulator && authInternal.emulatorConfig, authInternal, "emulator-config-failed"
    /* AuthErrorCode.EMULATOR_CONFIG_FAILED */);
    _assert((0, import_util.deepEqual)(emulator, authInternal.config.emulator) && (0, import_util.deepEqual)(emulatorConfig, authInternal.emulatorConfig), authInternal, "emulator-config-failed"
    /* AuthErrorCode.EMULATOR_CONFIG_FAILED */);
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
  /** @internal */
  constructor(providerId, signInMethod) {
    this.providerId = providerId;
    this.signInMethod = signInMethod;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return debugFail("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(_auth) {
    return debugFail("not implemented");
  }
  /** @internal */
  _linkToIdToken(_auth, _idToken) {
    return debugFail("not implemented");
  }
  /** @internal */
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
var EmailAuthCredential = class _EmailAuthCredential extends AuthCredential {
  /** @internal */
  constructor(_email, _password, signInMethod, _tenantId = null) {
    super("password", signInMethod);
    this._email = _email;
    this._password = _password;
    this._tenantId = _tenantId;
  }
  /** @internal */
  static _fromEmailAndPassword(email, password) {
    return new _EmailAuthCredential(email, password, "password"
    /* SignInMethod.EMAIL_PASSWORD */);
  }
  /** @internal */
  static _fromEmailAndCode(email, oobCode, tenantId = null) {
    return new _EmailAuthCredential(email, oobCode, "emailLink", tenantId);
  }
  /** {@inheritdoc AuthCredential.toJSON} */
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
   *
   * @param json - Either `object` or the stringified representation of the object. When string is
   * provided, `JSON.parse` would be called first.
   *
   * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
   */
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
  /** @internal */
  async _getIdTokenResponse(auth) {
    switch (this.signInMethod) {
      case "password":
        const request = {
          returnSecureToken: true,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return handleRecaptchaFlow(auth, request, "signInWithPassword", signInWithPassword, "EMAIL_PASSWORD_PROVIDER"
        /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */);
      case "emailLink":
        return signInWithEmailLink$1(auth, {
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */);
    }
  }
  /** @internal */
  async _linkToIdToken(auth, idToken) {
    switch (this.signInMethod) {
      case "password":
        const request = {
          idToken,
          returnSecureToken: true,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return handleRecaptchaFlow(auth, request, "signUpPassword", linkEmailPassword, "EMAIL_PASSWORD_PROVIDER"
        /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */);
      case "emailLink":
        return signInWithEmailLinkForLinking(auth, {
          idToken,
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */);
    }
  }
  /** @internal */
  _getReauthenticationResolver(auth) {
    return this._getIdTokenResponse(auth);
  }
};
async function signInWithIdp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth, request));
}
var IDP_REQUEST_URI$1 = "http://localhost";
var OAuthCredential = class _OAuthCredential extends AuthCredential {
  constructor() {
    super(...arguments);
    this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(params) {
    const cred = new _OAuthCredential(params.providerId, params.signInMethod);
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
      _fail("argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */);
    }
    return cred;
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
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
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
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
    const cred = new _OAuthCredential(providerId, signInMethod);
    cred.idToken = rest.idToken || void 0;
    cred.accessToken = rest.accessToken || void 0;
    cred.secret = rest.secret;
    cred.nonce = rest.nonce;
    cred.pendingToken = rest.pendingToken || null;
    return cred;
  }
  /** @internal */
  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  /** @internal */
  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  /** @internal */
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
  ["USER_NOT_FOUND"
  /* ServerError.USER_NOT_FOUND */]: "user-not-found"
  /* AuthErrorCode.USER_DELETED */
};
async function verifyPhoneNumberForExisting(auth, request) {
  const apiRequest = Object.assign(Object.assign({}, request), {
    operation: "REAUTH"
  });
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
}
var PhoneAuthCredential = class _PhoneAuthCredential extends AuthCredential {
  constructor(params) {
    super("phone", "phone"
    /* SignInMethod.PHONE */);
    this.params = params;
  }
  /** @internal */
  static _fromVerification(verificationId, verificationCode) {
    return new _PhoneAuthCredential({
      verificationId,
      verificationCode
    });
  }
  /** @internal */
  static _fromTokenResponse(phoneNumber, temporaryProof) {
    return new _PhoneAuthCredential({
      phoneNumber,
      temporaryProof
    });
  }
  /** @internal */
  _getIdTokenResponse(auth) {
    return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
  }
  /** @internal */
  _linkToIdToken(auth, idToken) {
    return linkWithPhoneNumber$1(auth, Object.assign({
      idToken
    }, this._makeVerificationRequest()));
  }
  /** @internal */
  _getReauthenticationResolver(auth) {
    return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
  }
  /** @internal */
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
  /** {@inheritdoc AuthCredential.toJSON} */
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
  /** Generates a phone credential based on a plain object or a JSON string. */
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
    return new _PhoneAuthCredential({
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
var ActionCodeURL = class _ActionCodeURL {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(actionLink) {
    var _a, _b, _c, _d, _e, _f;
    const searchParams = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(actionLink));
    const apiKey = (_a = searchParams["apiKey"
    /* QueryField.API_KEY */]) !== null && _a !== void 0 ? _a : null;
    const code = (_b = searchParams["oobCode"
    /* QueryField.CODE */]) !== null && _b !== void 0 ? _b : null;
    const operation = parseMode((_c = searchParams["mode"
    /* QueryField.MODE */]) !== null && _c !== void 0 ? _c : null);
    _assert(apiKey && code && operation, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    this.apiKey = apiKey;
    this.operation = operation;
    this.code = code;
    this.continueUrl = (_d = searchParams["continueUrl"
    /* QueryField.CONTINUE_URL */]) !== null && _d !== void 0 ? _d : null;
    this.languageCode = (_e = searchParams["lang"
    /* QueryField.LANGUAGE_CODE */]) !== null && _e !== void 0 ? _e : null;
    this.tenantId = (_f = searchParams["tenantId"
    /* QueryField.TENANT_ID */]) !== null && _f !== void 0 ? _f : null;
  }
  /**
   * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
   * otherwise returns null.
   *
   * @param link  - The email action link string.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @public
   */
  static parseLink(link) {
    const actionLink = parseDeepLink(link);
    try {
      return new _ActionCodeURL(actionLink);
    } catch (_a) {
      return null;
    }
  }
};
function parseActionCodeURL(link) {
  return ActionCodeURL.parseLink(link);
}
var EmailAuthProvider = class _EmailAuthProvider {
  constructor() {
    this.providerId = _EmailAuthProvider.PROVIDER_ID;
  }
  /**
   * Initialize an {@link AuthCredential} using an email and password.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credential(email, password);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * const userCredential = await signInWithEmailAndPassword(auth, email, password);
   * ```
   *
   * @param email - Email address.
   * @param password - User account password.
   * @returns The auth provider credential.
   */
  static credential(email, password) {
    return EmailAuthCredential._fromEmailAndPassword(email, password);
  }
  /**
   * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
   * email link operation.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * await sendSignInLinkToEmail(auth, email);
   * // Obtain emailLink from user.
   * const userCredential = await signInWithEmailLink(auth, email, emailLink);
   * ```
   *
   * @param auth - The {@link Auth} instance used to verify the link.
   * @param email - Email address.
   * @param emailLink - Sign-in email link.
   * @returns - The auth provider credential.
   */
  static credentialWithLink(email, emailLink) {
    const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
    _assert(actionCodeUrl, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
  }
};
EmailAuthProvider.PROVIDER_ID = "password";
EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
var FederatedAuthProvider = class {
  /**
   * Constructor for generic OAuth providers.
   *
   * @param providerId - Provider for which credentials should be generated.
   */
  constructor(providerId) {
    this.providerId = providerId;
    this.defaultLanguageCode = null;
    this.customParameters = {};
  }
  /**
   * Set the language gode.
   *
   * @param languageCode - language code
   */
  setDefaultLanguage(languageCode) {
    this.defaultLanguageCode = languageCode;
  }
  /**
   * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
   * operations.
   *
   * @remarks
   * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
   * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
   *
   * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
   */
  setCustomParameters(customOAuthParameters) {
    this.customParameters = customOAuthParameters;
    return this;
  }
  /**
   * Retrieve the current list of {@link CustomParameters}.
   */
  getCustomParameters() {
    return this.customParameters;
  }
};
var BaseOAuthProvider = class extends FederatedAuthProvider {
  constructor() {
    super(...arguments);
    this.scopes = [];
  }
  /**
   * Add an OAuth scope to the credential.
   *
   * @param scope - Provider OAuth scope to add.
   */
  addScope(scope) {
    if (!this.scopes.includes(scope)) {
      this.scopes.push(scope);
    }
    return this;
  }
  /**
   * Retrieve the current list of OAuth scopes.
   */
  getScopes() {
    return [...this.scopes];
  }
};
var OAuthProvider = class _OAuthProvider extends BaseOAuthProvider {
  /**
   * Creates an {@link OAuthCredential} from a JSON string or a plain object.
   * @param json - A plain object or a JSON string
   */
  static credentialFromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    _assert("providerId" in obj && "signInMethod" in obj, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    return OAuthCredential._fromParams(obj);
  }
  /**
   * Creates a {@link OAuthCredential} from a generic OAuth provider's access token or ID token.
   *
   * @remarks
   * The raw nonce is required when an ID token with a nonce field is provided. The SHA-256 hash of
   * the raw nonce must match the nonce field in the ID token.
   *
   * @example
   * ```javascript
   * // `googleUser` from the onsuccess Google Sign In callback.
   * // Initialize a generate OAuth provider with a `google.com` providerId.
   * const provider = new OAuthProvider('google.com');
   * const credential = provider.credential({
   *   idToken: googleUser.getAuthResponse().id_token,
   * });
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param params - Either the options object containing the ID token, access token and raw nonce
   * or the ID token string.
   */
  credential(params) {
    return this._credential(Object.assign(Object.assign({}, params), {
      nonce: params.rawNonce
    }));
  }
  /** An internal credential method that accepts more permissive options */
  _credential(params) {
    _assert(params.idToken || params.accessToken, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    return OAuthCredential._fromParams(Object.assign(Object.assign({}, params), {
      providerId: this.providerId,
      signInMethod: this.providerId
    }));
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return _OAuthProvider.oauthCredentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return _OAuthProvider.oauthCredentialFromTaggedObject(error.customData || {});
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
      return new _OAuthProvider(providerId)._credential({
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
var FacebookAuthProvider = class _FacebookAuthProvider extends BaseOAuthProvider {
  constructor() {
    super("facebook.com"
    /* ProviderId.FACEBOOK */);
  }
  /**
   * Creates a credential for Facebook.
   *
   * @example
   * ```javascript
   * // `event` from the Facebook auth.authResponseChange callback.
   * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param accessToken - Facebook access token.
   */
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: _FacebookAuthProvider.PROVIDER_ID,
      signInMethod: _FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
      accessToken
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return _FacebookAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return _FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
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
      return _FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
FacebookAuthProvider.PROVIDER_ID = "facebook.com";
var GoogleAuthProvider = class _GoogleAuthProvider extends BaseOAuthProvider {
  constructor() {
    super("google.com"
    /* ProviderId.GOOGLE */);
    this.addScope("profile");
  }
  /**
   * Creates a credential for Google. At least one of ID token and access token is required.
   *
   * @example
   * ```javascript
   * // \`googleUser\` from the onsuccess Google Sign In callback.
   * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param idToken - Google ID token.
   * @param accessToken - Google access token.
   */
  static credential(idToken, accessToken) {
    return OAuthCredential._fromParams({
      providerId: _GoogleAuthProvider.PROVIDER_ID,
      signInMethod: _GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
      idToken,
      accessToken
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return _GoogleAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return _GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
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
      return _GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
GoogleAuthProvider.PROVIDER_ID = "google.com";
var GithubAuthProvider = class _GithubAuthProvider extends BaseOAuthProvider {
  constructor() {
    super("github.com"
    /* ProviderId.GITHUB */);
  }
  /**
   * Creates a credential for GitHub.
   *
   * @param accessToken - GitHub access token.
   */
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: _GithubAuthProvider.PROVIDER_ID,
      signInMethod: _GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
      accessToken
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return _GithubAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return _GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
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
      return _GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
GithubAuthProvider.PROVIDER_ID = "github.com";
var IDP_REQUEST_URI = "http://localhost";
var SAMLAuthCredential = class _SAMLAuthCredential extends AuthCredential {
  /** @internal */
  constructor(providerId, pendingToken) {
    super(providerId, providerId);
    this.pendingToken = pendingToken;
  }
  /** @internal */
  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  /** @internal */
  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  /** @internal */
  _getReauthenticationResolver(auth) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  toJSON() {
    return {
      signInMethod: this.signInMethod,
      providerId: this.providerId,
      pendingToken: this.pendingToken
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
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
    return new _SAMLAuthCredential(providerId, pendingToken);
  }
  /**
   * Helper static method to avoid exposing the constructor to end users.
   *
   * @internal
   */
  static _create(providerId, pendingToken) {
    return new _SAMLAuthCredential(providerId, pendingToken);
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
var SAMLAuthProvider = class _SAMLAuthProvider extends FederatedAuthProvider {
  /**
   * Constructor. The providerId must start with "saml."
   * @param providerId - SAML provider ID.
   */
  constructor(providerId) {
    _assert(providerId.startsWith(SAML_PROVIDER_PREFIX), "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    super(providerId);
  }
  /**
   * Generates an {@link AuthCredential} from a {@link UserCredential} after a
   * successful SAML flow completes.
   *
   * @remarks
   *
   * For example, to get an {@link AuthCredential}, you could write the
   * following code:
   *
   * ```js
   * const userCredential = await signInWithPopup(auth, samlProvider);
   * const credential = SAMLAuthProvider.credentialFromResult(userCredential);
   * ```
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return _SAMLAuthProvider.samlCredentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return _SAMLAuthProvider.samlCredentialFromTaggedObject(error.customData || {});
  }
  /**
   * Creates an {@link AuthCredential} from a JSON string or a plain object.
   * @param json - A plain object or a JSON string
   */
  static credentialFromJSON(json) {
    const credential = SAMLAuthCredential.fromJSON(json);
    _assert(credential, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
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
var TwitterAuthProvider = class _TwitterAuthProvider extends BaseOAuthProvider {
  constructor() {
    super("twitter.com"
    /* ProviderId.TWITTER */);
  }
  /**
   * Creates a credential for Twitter.
   *
   * @param token - Twitter access token.
   * @param secret - Twitter secret.
   */
  static credential(token, secret) {
    return OAuthCredential._fromParams({
      providerId: _TwitterAuthProvider.PROVIDER_ID,
      signInMethod: _TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
      oauthToken: token,
      oauthTokenSecret: secret
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return _TwitterAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return _TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
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
      return _TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
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
var UserCredentialImpl = class _UserCredentialImpl {
  constructor(params) {
    this.user = params.user;
    this.providerId = params.providerId;
    this._tokenResponse = params._tokenResponse;
    this.operationType = params.operationType;
  }
  static async _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
    const user = await UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
    const providerId = providerIdForResponse(idTokenResponse);
    const userCred = new _UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: idTokenResponse,
      operationType
    });
    return userCred;
  }
  static async _forOperation(user, operationType, response) {
    await user._updateTokensIfNecessary(response, /* reload */
    true);
    const providerId = providerIdForResponse(response);
    return new _UserCredentialImpl({
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
      /* OperationType.SIGN_IN */
    });
  }
  const response = await signUp(authInternal, {
    returnSecureToken: true
  });
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response, true);
  await authInternal._updateCurrentUser(userCredential.user);
  return userCredential;
}
var MultiFactorError = class _MultiFactorError extends import_util.FirebaseError {
  constructor(auth, error, operationType, user) {
    var _a;
    super(error.code, error.message);
    this.operationType = operationType;
    this.user = user;
    Object.setPrototypeOf(this, _MultiFactorError.prototype);
    this.customData = {
      appName: auth.name,
      tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : void 0,
      _serverResponse: error.customData._serverResponse,
      operationType
    };
  }
  static _fromErrorAndOperation(auth, error, operationType, user) {
    return new _MultiFactorError(auth, error, operationType, user);
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
  if (!providersLeft.has("phone"
  /* ProviderId.PHONE */)) {
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
    _assert(response.idToken, auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const parsed = _parseToken(response.idToken);
    _assert(parsed, auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const {
      sub: localId
    } = parsed;
    _assert(user.uid === localId, auth, "user-mismatch"
    /* AuthErrorCode.USER_MISMATCH */);
    return UserCredentialImpl._forOperation(user, operationType, response);
  } catch (e) {
    if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found"}`) {
      _fail(auth, "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */);
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
    return _fail(auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
  }
};
var PhoneMultiFactorInfoImpl = class _PhoneMultiFactorInfoImpl extends MultiFactorInfoImpl {
  constructor(response) {
    super("phone", response);
    this.phoneNumber = response.phoneInfo;
  }
  static _fromServerResponse(_auth, enrollment) {
    return new _PhoneMultiFactorInfoImpl(enrollment);
  }
};
var TotpMultiFactorInfoImpl = class _TotpMultiFactorInfoImpl extends MultiFactorInfoImpl {
  constructor(response) {
    super("totp", response);
  }
  static _fromServerResponse(_auth, enrollment) {
    return new _TotpMultiFactorInfoImpl(enrollment);
  }
};
function _setActionCodeSettingsOnRequest(auth, request, actionCodeSettings) {
  var _a;
  _assert(((_a = actionCodeSettings.url) === null || _a === void 0 ? void 0 : _a.length) > 0, auth, "invalid-continue-uri"
  /* AuthErrorCode.INVALID_CONTINUE_URI */);
  _assert(typeof actionCodeSettings.dynamicLinkDomain === "undefined" || actionCodeSettings.dynamicLinkDomain.length > 0, auth, "invalid-dynamic-link-domain"
  /* AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN */);
  _assert(typeof actionCodeSettings.linkDomain === "undefined" || actionCodeSettings.linkDomain.length > 0, auth, "invalid-hosting-link-domain"
  /* AuthErrorCode.INVALID_HOSTING_LINK_DOMAIN */);
  request.continueUrl = actionCodeSettings.url;
  request.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
  request.linkDomain = actionCodeSettings.linkDomain;
  request.canHandleCodeInApp = actionCodeSettings.handleCodeInApp;
  if (actionCodeSettings.iOS) {
    _assert(actionCodeSettings.iOS.bundleId.length > 0, auth, "missing-ios-bundle-id"
    /* AuthErrorCode.MISSING_IOS_BUNDLE_ID */);
    request.iOSBundleId = actionCodeSettings.iOS.bundleId;
  }
  if (actionCodeSettings.android) {
    _assert(actionCodeSettings.android.packageName.length > 0, auth, "missing-android-pkg-name"
    /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */);
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
    /* RecaptchaClientType.WEB */
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(authInternal, request, actionCodeSettings);
  }
  await handleRecaptchaFlow(authInternal, request, "getOobCode", sendPasswordResetEmail$1, "EMAIL_PASSWORD_PROVIDER"
  /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */);
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
  _assert(operation, authModular, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
  switch (operation) {
    case "EMAIL_SIGNIN":
      break;
    case "VERIFY_AND_CHANGE_EMAIL":
      _assert(response.newEmail, authModular, "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */);
      break;
    case "REVERT_SECOND_FACTOR_ADDITION":
      _assert(response.mfaInfo, authModular, "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */);
    // fall through
    default:
      _assert(response.email, authModular, "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */);
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
    /* RecaptchaClientType.WEB */
  };
  const signUpResponse = handleRecaptchaFlow(authInternal, request, "signUpPassword", signUp, "EMAIL_PASSWORD_PROVIDER"
  /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */);
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
    /* RecaptchaClientType.WEB */
  };
  function setActionCodeSettings(request2, actionCodeSettings2) {
    _assert(actionCodeSettings2.handleCodeInApp, authInternal, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    if (actionCodeSettings2) {
      _setActionCodeSettingsOnRequest(authInternal, request2, actionCodeSettings2);
    }
  }
  setActionCodeSettings(request, actionCodeSettings);
  await handleRecaptchaFlow(authInternal, request, "getOobCode", sendSignInLinkToEmail$1, "EMAIL_PASSWORD_PROVIDER"
  /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */);
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
  _assert(credential._tenantId === (authModular.tenantId || null), authModular, "tenant-id-mismatch"
  /* AuthErrorCode.TENANT_ID_MISMATCH */);
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
  }) => providerId === "password"
  /* ProviderId.PASSWORD */);
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
  await user._updateTokensIfNecessary(response, /* reload */
  true);
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
var MultiFactorSessionImpl = class _MultiFactorSessionImpl {
  constructor(type, credential, user) {
    this.type = type;
    this.credential = credential;
    this.user = user;
  }
  static _fromIdtoken(idToken, user) {
    return new _MultiFactorSessionImpl("enroll", idToken, user);
  }
  static _fromMfaPendingCredential(mfaPendingCredential) {
    return new _MultiFactorSessionImpl("signin", mfaPendingCredential);
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
        return _MultiFactorSessionImpl._fromMfaPendingCredential(obj.multiFactorSession.pendingCredential);
      } else if ((_b = obj.multiFactorSession) === null || _b === void 0 ? void 0 : _b.idToken) {
        return _MultiFactorSessionImpl._fromIdtoken(obj.multiFactorSession.idToken);
      }
    }
    return null;
  }
};
var MultiFactorResolverImpl = class _MultiFactorResolverImpl {
  constructor(session, hints, signInResolver) {
    this.session = session;
    this.hints = hints;
    this.signInResolver = signInResolver;
  }
  /** @internal */
  static _fromError(authExtern, error) {
    const auth = _castAuth(authExtern);
    const serverResponse = error.customData._serverResponse;
    const hints = (serverResponse.mfaInfo || []).map(enrollment => MultiFactorInfoImpl._fromServerResponse(auth, enrollment));
    _assert(serverResponse.mfaPendingCredential, auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const session = MultiFactorSessionImpl._fromMfaPendingCredential(serverResponse.mfaPendingCredential);
    return new _MultiFactorResolverImpl(session, hints, async assertion => {
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
          _assert(error.user, auth, "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */);
          return UserCredentialImpl._forOperation(error.user, error.operationType, idTokenResponse);
        default:
          _fail(auth, "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */);
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
  _assert(error.customData.operationType, authModular, "argument-error"
  /* AuthErrorCode.ARGUMENT_ERROR */);
  _assert((_a = errorInternal.customData._serverResponse) === null || _a === void 0 ? void 0 : _a.mfaPendingCredential, authModular, "argument-error"
  /* AuthErrorCode.ARGUMENT_ERROR */);
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
var MultiFactorUserImpl = class _MultiFactorUserImpl {
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
    return new _MultiFactorUserImpl(user);
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
    super(() => window.localStorage, "LOCAL"
    /* PersistenceType.LOCAL */);
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
        }), /* poll */
        true);
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
  // Update local cache on base operations:
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
  // used to get the URL to the backend to proxy to
  _getFinalTarget(originalUrl) {
    if (typeof window === void 0) {
      return originalUrl;
    }
    const url = new URL(`${window.location.origin}/__cookies__`);
    url.searchParams.set("finalTarget", originalUrl);
    return url;
  }
  // To be a usable persistence method in a chain browserCookiePersistence ensures that
  // prerequisites have been met, namely that we're in a secureContext, navigator and document are
  // available and cookies are enabled. Not all UAs support these method, so fallback accordingly.
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
  // Set should be a noop as we expect middleware to handle this
  async _set(_key, _value) {
    return;
  }
  // Attempt to get the cookie from cookieStore, fallback to document.cookie
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
  // Log out by overriding the idToken with a sentinel value of ""
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
  // Listen for cookie changes, both cookieStore and fallback to polling document.cookie
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
    super(() => window.sessionStorage, "SESSION"
    /* PersistenceType.SESSION */);
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
var Receiver = class _Receiver {
  constructor(eventTarget) {
    this.eventTarget = eventTarget;
    this.handlersMap = {};
    this.boundEventHandler = this.handleEvent.bind(this);
  }
  /**
   * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
   *
   * @param eventTarget - An event target (such as window or self) through which the underlying
   * messages will be received.
   */
  static _getInstance(eventTarget) {
    const existingInstance = this.receivers.find(receiver => receiver.isListeningto(eventTarget));
    if (existingInstance) {
      return existingInstance;
    }
    const newInstance = new _Receiver(eventTarget);
    this.receivers.push(newInstance);
    return newInstance;
  }
  isListeningto(eventTarget) {
    return this.eventTarget === eventTarget;
  }
  /**
   * Fans out a MessageEvent to the appropriate listeners.
   *
   * @remarks
   * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
   * finished processing.
   *
   * @param event - The MessageEvent.
   *
   */
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
  /**
   * Subscribe an event handler for a particular event.
   *
   * @param eventType - Event name to subscribe to.
   * @param eventHandler - The event handler which should receive the events.
   *
   */
  _subscribe(eventType, eventHandler) {
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.addEventListener("message", this.boundEventHandler);
    }
    if (!this.handlersMap[eventType]) {
      this.handlersMap[eventType] = /* @__PURE__ */new Set();
    }
    this.handlersMap[eventType].add(eventHandler);
  }
  /**
   * Unsubscribe an event handler from a particular event.
   *
   * @param eventType - Event name to unsubscribe from.
   * @param eventHandler - Optional event handler, if none provided, unsubscribe all handlers on this event.
   *
   */
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
  /**
   * Unsubscribe the handler and remove it from our tracking Set.
   *
   * @param handler - The handler to unsubscribe.
   */
  removeMessageHandler(handler) {
    if (handler.messageChannel) {
      handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
      handler.messageChannel.port1.close();
    }
    this.handlers.delete(handler);
  }
  /**
   * Send a message to the Receiver located at {@link target}.
   *
   * @remarks
   * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
   * receiver has had a chance to fully process the event.
   *
   * @param eventType - Type of event to send.
   * @param data - The payload of the event.
   * @param timeout - Timeout for waiting on an ACK from the receiver.
   *
   * @returns An array of settled promises from all the handlers that were listening on the receiver.
   */
  async _send(eventType, data, timeout = 50) {
    const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
    if (!messageChannel) {
      throw new Error("connection_unavailable"
      /* _MessageError.CONNECTION_UNAVAILABLE */);
    }
    let completionTimer;
    let handler;
    return new Promise((resolve, reject) => {
      const eventId = _generateEventId("", 20);
      messageChannel.port1.start();
      const ackTimer = setTimeout(() => {
        reject(new Error("unsupported_event"
        /* _MessageError.UNSUPPORTED_EVENT */));
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
                reject(new Error("timeout"
                /* _MessageError.TIMEOUT */));
              }, 3e3
              /* _TimeoutDuration.COMPLETION */);
              break;
            case "done":
              clearTimeout(completionTimer);
              resolve(messageEvent.data.response);
              break;
            default:
              clearTimeout(ackTimer);
              clearTimeout(completionTimer);
              reject(new Error("invalid_response"
              /* _MessageError.INVALID_RESPONSE */));
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
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return _isWorker() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
    this.receiver._subscribe("keyChanged", async (_origin, data) => {
      const keys = await this._poll();
      return {
        keyProcessed: keys.includes(data.key)
      };
    });
    this.receiver._subscribe("ping", async (_origin, _data) => {
      return ["keyChanged"
      /* _EventType.KEY_CHANGED */];
    });
  }
  /**
   * As the main window, we should let the worker know when keys change (set and remove).
   *
   * @remarks
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
   * may not resolve.
   */
  async initializeSender() {
    var _a, _b;
    this.activeServiceWorker = await _getActiveServiceWorker();
    if (!this.activeServiceWorker) {
      return;
    }
    this.sender = new Sender(this.activeServiceWorker);
    const results = await this.sender._send("ping", {}, 800
    /* _TimeoutDuration.LONG_ACK */);
    if (!results) {
      return;
    }
    if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged"
    /* _EventType.KEY_CHANGED */))) {
      this.serviceWorkerReceiverAvailable = true;
    }
  }
  /**
   * Let the worker know about a changed key, the exact key doesn't technically matter since the
   * worker will just trigger a full sync anyway.
   *
   * @remarks
   * For now, we only support one service worker per page.
   *
   * @param key - Storage key which changed.
   */
  async notifyServiceWorker(key) {
    if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
      return;
    }
    try {
      await this.sender._send("keyChanged", {
        key
      },
      // Use long timeout if receiver has previously responded to a ping from us.
      this.serviceWorkerReceiverAvailable ? 800 : 50
      /* _TimeoutDuration.ACK */);
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
    _assert(isHostLanguageValid(hl), auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    if (this.shouldResolveImmediately(hl) && isV2(_window().grecaptcha)) {
      return Promise.resolve(_window().grecaptcha);
    }
    return new Promise((resolve, reject) => {
      const networkTimeout = _window().setTimeout(() => {
        reject(_createError(auth, "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */));
      }, NETWORK_TIMEOUT_DELAY.get());
      _window()[_JSLOAD_CALLBACK] = () => {
        _window().clearTimeout(networkTimeout);
        delete _window()[_JSLOAD_CALLBACK];
        const recaptcha = _window().grecaptcha;
        if (!recaptcha || !isV2(recaptcha)) {
          reject(_createError(auth, "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */));
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
        reject(_createError(auth, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */));
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
  /**
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   * @param containerOrId - The reCAPTCHA container parameter.
   *
   * @remarks
   * This has different meaning depending on whether the reCAPTCHA is hidden or visible. For a
   * visible reCAPTCHA the container must be empty. If a string is used, it has to correspond to
   * an element ID. The corresponding element must also must be in the DOM at the time of
   * initialization.
   *
   * @param parameters - The optional reCAPTCHA parameters.
   *
   * @remarks
   * Check the reCAPTCHA docs for a comprehensive list. All parameters are accepted except for
   * the sitekey. Firebase Auth backend provisions a reCAPTCHA for each project and will
   * configure this upon rendering. For an invisible reCAPTCHA, a size key must have the value
   * 'invisible'.
   */
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
    _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment"
    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */);
    const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
    _assert(container, this.auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    this.container = container;
    this.parameters.callback = this.makeTokenCallback(this.parameters.callback);
    this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new MockReCaptchaLoaderImpl() : new ReCaptchaLoaderImpl();
    this.validateStartingState();
  }
  /**
   * Waits for the user to solve the reCAPTCHA and resolves with the reCAPTCHA token.
   *
   * @returns A Promise for the reCAPTCHA token.
   */
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
  /**
   * Renders the reCAPTCHA widget on the page.
   *
   * @returns A Promise that resolves with the reCAPTCHA widget ID.
   */
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
  /** @internal */
  _reset() {
    this.assertNotDestroyed();
    if (this.widgetId !== null) {
      this.getAssertedRecaptcha().reset(this.widgetId);
    }
  }
  /**
   * Clears the reCAPTCHA widget from the page and destroys the instance.
   */
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
    _assert(!this.parameters.sitekey, this.auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    _assert(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment"
    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */);
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
    _assert(!this.destroyed, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
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
    _assert(_isHttpOrHttps() && !_isWorker(), this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    await domReady();
    this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
    const siteKey = await getRecaptchaParams(this.auth);
    _assert(siteKey, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    this.parameters.sitekey = siteKey;
  }
  getAssertedRecaptcha() {
    _assert(this.recaptcha, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
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
  await _assertLinkedStatus(false, userInternal, "phone"
  /* ProviderId.PHONE */);
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
        _assert(session.type === "enroll", auth, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */);
        const startPhoneMfaEnrollmentRequest = {
          idToken: session.credential,
          phoneEnrollmentInfo: {
            phoneNumber: phoneInfoOptions.phoneNumber,
            clientType: "CLIENT_TYPE_WEB"
            /* RecaptchaClientType.WEB */
          }
        };
        const startEnrollPhoneMfaActionCallback = async (authInstance, request) => {
          if (request.phoneEnrollmentInfo.captchaResponse === FAKE_TOKEN) {
            _assert((verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE, authInstance, "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */);
            const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
            return startEnrollPhoneMfa(authInstance, requestWithRecaptchaV2);
          }
          return startEnrollPhoneMfa(authInstance, request);
        };
        const startPhoneMfaEnrollmentResponse = handleRecaptchaFlow(auth, startPhoneMfaEnrollmentRequest, "mfaSmsEnrollment", startEnrollPhoneMfaActionCallback, "PHONE_PROVIDER"
        /* RecaptchaAuthProvider.PHONE_PROVIDER */);
        const response = await startPhoneMfaEnrollmentResponse.catch(error => {
          return Promise.reject(error);
        });
        return response.phoneSessionInfo.sessionInfo;
      } else {
        _assert(session.type === "signin", auth, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */);
        const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
        _assert(mfaEnrollmentId, auth, "missing-multi-factor-info"
        /* AuthErrorCode.MISSING_MFA_INFO */);
        const startPhoneMfaSignInRequest = {
          mfaPendingCredential: session.credential,
          mfaEnrollmentId,
          phoneSignInInfo: {
            clientType: "CLIENT_TYPE_WEB"
            /* RecaptchaClientType.WEB */
          }
        };
        const startSignInPhoneMfaActionCallback = async (authInstance, request) => {
          if (request.phoneSignInInfo.captchaResponse === FAKE_TOKEN) {
            _assert((verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE, authInstance, "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */);
            const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
            return startSignInPhoneMfa(authInstance, requestWithRecaptchaV2);
          }
          return startSignInPhoneMfa(authInstance, request);
        };
        const startPhoneMfaSignInResponse = handleRecaptchaFlow(auth, startPhoneMfaSignInRequest, "mfaSmsSignIn", startSignInPhoneMfaActionCallback, "PHONE_PROVIDER"
        /* RecaptchaAuthProvider.PHONE_PROVIDER */);
        const response = await startPhoneMfaSignInResponse.catch(error => {
          return Promise.reject(error);
        });
        return response.phoneResponseInfo.sessionInfo;
      }
    } else {
      const sendPhoneVerificationCodeRequest = {
        phoneNumber: phoneInfoOptions.phoneNumber,
        clientType: "CLIENT_TYPE_WEB"
        /* RecaptchaClientType.WEB */
      };
      const sendPhoneVerificationCodeActionCallback = async (authInstance, request) => {
        if (request.captchaResponse === FAKE_TOKEN) {
          _assert((verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE, authInstance, "argument-error"
          /* AuthErrorCode.ARGUMENT_ERROR */);
          const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
          return sendPhoneVerificationCode(authInstance, requestWithRecaptchaV2);
        }
        return sendPhoneVerificationCode(authInstance, request);
      };
      const sendPhoneVerificationCodeResponse = handleRecaptchaFlow(auth, sendPhoneVerificationCodeRequest, "sendVerificationCode", sendPhoneVerificationCodeActionCallback, "PHONE_PROVIDER"
      /* RecaptchaAuthProvider.PHONE_PROVIDER */);
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
  _assert(recaptchaV2Verifier.type === RECAPTCHA_VERIFIER_TYPE, auth, "argument-error"
  /* AuthErrorCode.ARGUMENT_ERROR */);
  const recaptchaV2Token = await recaptchaV2Verifier.verify();
  _assert(typeof recaptchaV2Token === "string", auth, "argument-error"
  /* AuthErrorCode.ARGUMENT_ERROR */);
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
var PhoneAuthProvider = class _PhoneAuthProvider {
  /**
   * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
   *
   */
  constructor(auth) {
    this.providerId = _PhoneAuthProvider.PROVIDER_ID;
    this.auth = _castAuth(auth);
  }
  /**
   *
   * Starts a phone number authentication flow by sending a verification code to the given phone
   * number.
   *
   * @example
   * ```javascript
   * const provider = new PhoneAuthProvider(auth);
   * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * An alternative flow is provided using the `signInWithPhoneNumber` method.
   * ```javascript
   * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const userCredential = confirmationResult.confirm(verificationCode);
   * ```
   *
   * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
   * E.164 format (e.g. +16505550101).
   * @param applicationVerifier - An {@link ApplicationVerifier}, which prevents
   * requests from unauthorized clients. This SDK includes an implementation
   * based on reCAPTCHA v2, {@link RecaptchaVerifier}. If you've enabled
   * reCAPTCHA Enterprise bot protection in Enforce mode, this parameter is
   * optional; in all other configurations, the parameter is required.
   *
   * @returns A Promise for a verification ID that can be passed to
   * {@link PhoneAuthProvider.credential} to identify this flow.
   */
  verifyPhoneNumber(phoneOptions, applicationVerifier) {
    return _verifyPhoneNumber(this.auth, phoneOptions, (0, import_util.getModularInstance)(applicationVerifier));
  }
  /**
   * Creates a phone auth credential, given the verification ID from
   * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
   * mobile device.
   *
   * @example
   * ```javascript
   * const provider = new PhoneAuthProvider(auth);
   * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
   * const userCredential = signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * An alternative flow is provided using the `signInWithPhoneNumber` method.
   * ```javascript
   * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const userCredential = await confirmationResult.confirm(verificationCode);
   * ```
   *
   * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
   * @param verificationCode - The verification code sent to the user's mobile device.
   *
   * @returns The auth provider credential.
   */
  static credential(verificationId, verificationCode) {
    return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
  }
  /**
   * Generates an {@link AuthCredential} from a {@link UserCredential}.
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    const credential = userCredential;
    return _PhoneAuthProvider.credentialFromTaggedObject(credential);
  }
  /**
   * Returns an {@link AuthCredential} when passed an error.
   *
   * @remarks
   *
   * This method works for errors like
   * `auth/account-exists-with-different-credentials`. This is useful for
   * recovering when attempting to set a user's phone number but the number
   * in question is already tied to another account. For example, the following
   * code tries to update the current user's phone number, and if that
   * fails, links the user with the account associated with that number:
   *
   * ```js
   * const provider = new PhoneAuthProvider(auth);
   * const verificationId = await provider.verifyPhoneNumber(number, verifier);
   * try {
   *   const code = ''; // Prompt the user for the verification code
   *   await updatePhoneNumber(
   *       auth.currentUser,
   *       PhoneAuthProvider.credential(verificationId, code));
   * } catch (e) {
   *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
   *     const cred = PhoneAuthProvider.credentialFromError(e);
   *     await linkWithCredential(auth.currentUser, cred);
   *   }
   * }
   *
   * // At this point, auth.currentUser.phoneNumber === number.
   * ```
   *
   * @param error - The error to generate a credential from.
   */
  static credentialFromError(error) {
    return _PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
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
  _assert(auth._popupRedirectResolver, auth, "argument-error"
  /* AuthErrorCode.ARGUMENT_ERROR */);
  return auth._popupRedirectResolver;
}
var IdpCredential = class extends AuthCredential {
  constructor(params) {
    super("custom", "custom"
    /* ProviderId.CUSTOM */);
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
  _assert(user, auth, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
  return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}
async function _link(params) {
  const {
    auth,
    user
  } = params;
  _assert(user, auth, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
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
        _fail(this.auth, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */);
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
    return Promise.reject(_createError(auth, "operation-not-supported-in-this-environment"
    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */));
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
    return Promise.reject(_createError(userInternal.auth, "operation-not-supported-in-this-environment"
    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */));
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
var PopupOperation = class _PopupOperation extends AbstractPopupRedirectOperation {
  constructor(auth, filter, provider, resolver, user) {
    super(auth, filter, resolver, user);
    this.provider = provider;
    this.authWindow = null;
    this.pollId = null;
    if (_PopupOperation.currentPopupAction) {
      _PopupOperation.currentPopupAction.cancel();
    }
    _PopupOperation.currentPopupAction = this;
  }
  async executeNotNull() {
    const result = await this.execute();
    _assert(result, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    return result;
  }
  async onExecution() {
    debugAssert(this.filter.length === 1, "Popup operations only handle one event");
    const eventId = _generateEventId();
    this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0],
    // There's always one, see constructor
    eventId);
    this.authWindow.associatedEvent = eventId;
    this.resolver._originValidation(this.auth).catch(e => {
      this.reject(e);
    });
    this.resolver._isIframeWebStorageSupported(this.auth, isSupported => {
      if (!isSupported) {
        this.reject(_createError(this.auth, "web-storage-unsupported"
        /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */));
      }
    });
    this.pollUserCancellation();
  }
  get eventId() {
    var _a;
    return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
  }
  cancel() {
    this.reject(_createError(this.auth, "cancelled-popup-request"
    /* AuthErrorCode.EXPIRED_POPUP_REQUEST */));
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
    _PopupOperation.currentPopupAction = null;
  }
  pollUserCancellation() {
    const poll = () => {
      var _a, _b;
      if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
        this.pollId = window.setTimeout(() => {
          this.pollId = null;
          this.reject(_createError(this.auth, "popup-closed-by-user"
          /* AuthErrorCode.POPUP_CLOSED_BY_USER */));
        }, 8e3
        /* _Timeout.AUTH_EVENT */);
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
    super(auth, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"
    /* AuthEventType.UNKNOWN */], resolver, void 0, bypassAuthState);
    this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
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
  return resolverInternal._openRedirect(authInternal, provider, "signInViaRedirect"
  /* AuthEventType.SIGN_IN_VIA_REDIRECT */);
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
  _fail(auth, "unauthorized-domain"
  /* AuthErrorCode.INVALID_ORIGIN */);
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
          reject(_createError(auth, "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */));
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
          reject(_createError(auth, "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */));
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
var EID_FROM_APIHOST = /* @__PURE__ */new Map([["identitytoolkit.googleapis.com", "p"],
// production
["staging-identitytoolkit.sandbox.googleapis.com", "s"],
// staging
["test-identitytoolkit.sandbox.googleapis.com", "t"]
// test
]);
function getIframeUrl(auth) {
  const config = auth.config;
  _assert(config.authDomain, auth, "auth-domain-config-required"
  /* AuthErrorCode.MISSING_AUTH_DOMAIN */);
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
  _assert(gapi2, auth, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
  return context.open({
    where: document.body,
    url: getIframeUrl(auth),
    messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: IFRAME_ATTRIBUTES,
    dontclear: true
  }, iframe => new Promise(async (resolve, reject) => {
    await iframe.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: false
    });
    const networkError = _createError(auth, "network-request-failed"
    /* AuthErrorCode.NETWORK_REQUEST_FAILED */);
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
  _assert(newWin, auth, "popup-blocked"
  /* AuthErrorCode.POPUP_BLOCKED */);
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
  _assert(auth.config.authDomain, auth, "auth-domain-config-required"
  /* AuthErrorCode.MISSING_AUTH_DOMAIN */);
  _assert(auth.config.apiKey, auth, "invalid-api-key"
  /* AuthErrorCode.INVALID_API_KEY */);
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
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
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
      _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth, "invalid-auth-event"
      /* AuthErrorCode.INVALID_AUTH_EVENT */);
      const handled = manager.onEvent(iframeEvent.authEvent);
      return {
        status: handled ? "ACK" : "ERROR"
        /* GapiOutcome.ERROR */
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
      _fail(auth, "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */);
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
var PhoneMultiFactorAssertionImpl = class _PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
  constructor(credential) {
    super("phone"
    /* FactorId.PHONE */);
    this.credential = credential;
  }
  /** @internal */
  static _fromCredential(credential) {
    return new _PhoneMultiFactorAssertionImpl(credential);
  }
  /** @internal */
  _finalizeEnroll(auth, idToken, displayName) {
    return finalizeEnrollPhoneMfa(auth, {
      idToken,
      displayName,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
  /** @internal */
  _finalizeSignIn(auth, mfaPendingCredential) {
    return finalizeSignInPhoneMfa(auth, {
      mfaPendingCredential,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
};
var PhoneMultiFactorGenerator = class {
  constructor() {}
  /**
   * Provides a {@link PhoneMultiFactorAssertion} to confirm ownership of the phone second factor.
   *
   * @remarks
   * This method does not work in a Node.js environment.
   *
   * @param phoneAuthCredential - A credential provided by {@link PhoneAuthProvider.credential}.
   * @returns A {@link PhoneMultiFactorAssertion} which can be used with
   * {@link MultiFactorResolver.resolveSignIn}
   */
  static assertion(credential) {
    return PhoneMultiFactorAssertionImpl._fromCredential(credential);
  }
};
PhoneMultiFactorGenerator.FACTOR_ID = "phone";
var TotpMultiFactorGenerator = class {
  /**
   * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of
   * the TOTP (time-based one-time password) second factor.
   * This assertion is used to complete enrollment in TOTP second factor.
   *
   * @param secret A {@link TotpSecret} containing the shared secret key and other TOTP parameters.
   * @param oneTimePassword One-time password from TOTP App.
   * @returns A {@link TotpMultiFactorAssertion} which can be used with
   * {@link MultiFactorUser.enroll}.
   */
  static assertionForEnrollment(secret, oneTimePassword) {
    return TotpMultiFactorAssertionImpl._fromSecret(secret, oneTimePassword);
  }
  /**
   * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of the TOTP second factor.
   * This assertion is used to complete signIn with TOTP as the second factor.
   *
   * @param enrollmentId identifies the enrolled TOTP second factor.
   * @param oneTimePassword One-time password from TOTP App.
   * @returns A {@link TotpMultiFactorAssertion} which can be used with
   * {@link MultiFactorResolver.resolveSignIn}.
   */
  static assertionForSignIn(enrollmentId, oneTimePassword) {
    return TotpMultiFactorAssertionImpl._fromEnrollmentId(enrollmentId, oneTimePassword);
  }
  /**
   * Returns a promise to {@link TotpSecret} which contains the TOTP shared secret key and other parameters.
   * Creates a TOTP secret as part of enrolling a TOTP second factor.
   * Used for generating a QR code URL or inputting into a TOTP app.
   * This method uses the auth instance corresponding to the user in the multiFactorSession.
   *
   * @param session The {@link MultiFactorSession} that the user is part of.
   * @returns A promise to {@link TotpSecret}.
   */
  static async generateSecret(session) {
    var _a;
    const mfaSession = session;
    _assert(typeof ((_a = mfaSession.user) === null || _a === void 0 ? void 0 : _a.auth) !== "undefined", "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const response = await startEnrollTotpMfa(mfaSession.user.auth, {
      idToken: mfaSession.credential,
      totpEnrollmentInfo: {}
    });
    return TotpSecret._fromStartTotpMfaEnrollmentResponse(response, mfaSession.user.auth);
  }
};
TotpMultiFactorGenerator.FACTOR_ID = "totp";
var TotpMultiFactorAssertionImpl = class _TotpMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
  constructor(otp, enrollmentId, secret) {
    super("totp"
    /* FactorId.TOTP */);
    this.otp = otp;
    this.enrollmentId = enrollmentId;
    this.secret = secret;
  }
  /** @internal */
  static _fromSecret(secret, otp) {
    return new _TotpMultiFactorAssertionImpl(otp, void 0, secret);
  }
  /** @internal */
  static _fromEnrollmentId(enrollmentId, otp) {
    return new _TotpMultiFactorAssertionImpl(otp, enrollmentId);
  }
  /** @internal */
  async _finalizeEnroll(auth, idToken, displayName) {
    _assert(typeof this.secret !== "undefined", auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    return finalizeEnrollTotpMfa(auth, {
      idToken,
      displayName,
      totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
    });
  }
  /** @internal */
  async _finalizeSignIn(auth, mfaPendingCredential) {
    _assert(this.enrollmentId !== void 0 && this.otp !== void 0, auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
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
var TotpSecret = class _TotpSecret {
  // The public members are declared outside the constructor so the docs can be generated.
  constructor(secretKey, hashingAlgorithm, codeLength, codeIntervalSeconds, enrollmentCompletionDeadline, sessionInfo, auth) {
    this.sessionInfo = sessionInfo;
    this.auth = auth;
    this.secretKey = secretKey;
    this.hashingAlgorithm = hashingAlgorithm;
    this.codeLength = codeLength;
    this.codeIntervalSeconds = codeIntervalSeconds;
    this.enrollmentCompletionDeadline = enrollmentCompletionDeadline;
  }
  /** @internal */
  static _fromStartTotpMfaEnrollmentResponse(response, auth) {
    return new _TotpSecret(response.totpSessionInfo.sharedSecretKey, response.totpSessionInfo.hashingAlgorithm, response.totpSessionInfo.verificationCodeLength, response.totpSessionInfo.periodSec, new Date(response.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), response.totpSessionInfo.sessionInfo, auth);
  }
  /** @internal */
  _makeTotpVerificationInfo(otp) {
    return {
      sessionInfo: this.sessionInfo,
      verificationCode: otp
    };
  }
  /**
   * Returns a QR code URL as described in
   * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
   * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
   * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
   *
   * @param accountName the name of the account/app along with a user identifier.
   * @param issuer issuer of the TOTP (likely the app name).
   * @returns A QR code URL string.
   */
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
    _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth"
    /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */);
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
  }, "PUBLIC"
  /* ComponentType.PUBLIC */).setInstantiationMode("EXPLICIT"
  /* InstantiationMode.EXPLICIT */).setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
    const authInternalProvider = container.getProvider("auth-internal"
    /* _ComponentName.AUTH_INTERNAL */);
    authInternalProvider.initialize();
  }));
  (0, import_app._registerComponent)(new import_component.Component("auth-internal", container => {
    const auth = _castAuth(container.getProvider("auth"
    /* _ComponentName.AUTH */).getImmediate());
    return (auth2 => new AuthInterop(auth2))(auth);
  }, "PRIVATE"
  /* ComponentType.PRIVATE */).setInstantiationMode("EXPLICIT"
  /* InstantiationMode.EXPLICIT */));
  (0, import_app.registerVersion)(name, version, getVersionForPlatform(clientPlatform));
  (0, import_app.registerVersion)(name, version, "esm2017");
}
var DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60;
var authIdTokenMaxAge = (0, import_util.getExperimentalSetting)("authIdTokenMaxAge") || DEFAULT_ID_TOKEN_MAX_AGE;
var lastPostedIdToken = null;
var mintCookieFactory = url => async user => {
  const idTokenResult = user && (await user.getIdTokenResult());
  const idTokenAge = idTokenResult && ((/* @__PURE__ */new Date()).getTime() - Date.parse(idTokenResult.issuedAtTime)) / 1e3;
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
        const error = _createError("internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */);
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
registerAuth("Browser"
/* ClientPlatform.BROWSER */);

// node_modules/@firebase/auth/dist/esm2017/index.js
var import_app2 = require("@firebase/app@0.13.1");
var import_util2 = require("@firebase/util@1.12.0");
var import_logger2 = require("@firebase/logger@0.4.4");
var import_tslib2 = require("tslib@2.8.1");
var import_component2 = require("@firebase/component@0.6.17");
/*! Bundled license information:

@firebase/auth/dist/esm2017/index-8e6e89cb.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
*/
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hdXRoLjEuMTAuNy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbW9kZWwvZW51bV9tYXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Fzc2VydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvY2F0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbmF2aWdhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZGVsYXkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2ZldGNoX3Byb3ZpZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9hY2NvdW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2lkX3Rva2VuX3Jlc3VsdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2ludmFsaWRhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Byb2FjdGl2ZV9yZWZyZXNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9tZXRhZGF0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlbG9hZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdG9rZW5fbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2luc3RhbnRpYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbl9tZW1vcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvcGVyc2lzdGVuY2VfdXNlcl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcGFzc3dvcmRfcG9saWN5L2dldF9wYXNzd29yZF9wb2xpY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9wYXNzd29yZF9wb2xpY3lfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9sb2FkX2pzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbW9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2VudGVycHJpc2VfdmVyaWZpZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9pbml0aWFsaXplLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvYXV0aF9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zbXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYWN0aW9uX2NvZGVfdXJsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmVkZXJhdGVkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmFjZWJvb2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dvb2dsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ2l0aHViLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3R3aXR0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zaWduX3VwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9jcmVkZW50aWFsX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hbm9ueW1vdXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfZXJyb3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9wcm92aWRlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9saW5rX3VubGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlYXV0aGVudGljYXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWN0aW9uX2NvZGVfc2V0dGluZ3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3JlYXRlX2F1dGhfdXJpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvcHJvZmlsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FjY291bnRfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FkZGl0aW9uYWxfdXNlcl9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Nlc3Npb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3VzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9sb2NhbF9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2Nvb2tpZV9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL3Nlc3Npb25fc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9wcm9taXNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3JlY2VpdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZXZlbnRfaWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvc2VuZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2F1dGhfd2luZG93LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3V0aWwvd29ya2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2luZGV4ZWRfZGIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9sb2FkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3Byb3ZpZGVycy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWJzdHJhY3RfcG9wdXBfcmVkaXJlY3Rfb3BlcmF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9ldmVudF9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcHJvamVjdF9jb25maWcvZ2V0X3Byb2plY3RfY29uZmlnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmFsaWRhdGVfb3JpZ2luLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9nYXBpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9pZnJhbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2hhbmRsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcG9wdXBfcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfYXNzZXJ0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21mYS9hc3NlcnRpb25zL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvYXNzZXJ0aW9ucy90b3RwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZmlyZWJhc2VfaW50ZXJuYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9yZWdpc3Rlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9kaXN0L2VzbTIwMTcvaW5kZXguanMiXSwibmFtZXMiOlsiYXV0aF8xXzEwXzdfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQWN0aW9uQ29kZU9wZXJhdGlvbiIsIkFjdGlvbkNvZGVVUkwiLCJBdXRoQ3JlZGVudGlhbCIsIkF1dGhFcnJvckNvZGVzIiwiQVVUSF9FUlJPUl9DT0RFU19NQVBfRE9fTk9UX1VTRV9JTlRFUk5BTExZIiwiRW1haWxBdXRoQ3JlZGVudGlhbCIsIkVtYWlsQXV0aFByb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJGYWN0b3JJZCIsIkdpdGh1YkF1dGhQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsIk9BdXRoQ3JlZGVudGlhbCIsIk9BdXRoUHJvdmlkZXIiLCJPcGVyYXRpb25UeXBlIiwiUGhvbmVBdXRoQ3JlZGVudGlhbCIsIlBob25lQXV0aFByb3ZpZGVyIiwiUGhvbmVNdWx0aUZhY3RvckdlbmVyYXRvciIsIlByb3ZpZGVySWQiLCJSZWNhcHRjaGFWZXJpZmllciIsIlNBTUxBdXRoUHJvdmlkZXIiLCJTaWduSW5NZXRob2QiLCJUb3RwTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJUb3RwU2VjcmV0IiwiVHdpdHRlckF1dGhQcm92aWRlciIsImFwcGx5QWN0aW9uQ29kZSIsImJlZm9yZUF1dGhTdGF0ZUNoYW5nZWQiLCJicm93c2VyQ29va2llUGVyc2lzdGVuY2UiLCJicm93c2VyTG9jYWxQZXJzaXN0ZW5jZSIsImJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJicm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwiY2hlY2tBY3Rpb25Db2RlIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJjb25uZWN0QXV0aEVtdWxhdG9yIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZGVidWdFcnJvck1hcCIsImRlbGV0ZVVzZXIiLCJmZXRjaFNpZ25Jbk1ldGhvZHNGb3JFbWFpbCIsImdldEFkZGl0aW9uYWxVc2VySW5mbyIsImdldEF1dGgiLCJnZXRJZFRva2VuIiwiZ2V0SWRUb2tlblJlc3VsdCIsImdldE11bHRpRmFjdG9yUmVzb2x2ZXIiLCJnZXRSZWRpcmVjdFJlc3VsdCIsImluTWVtb3J5UGVyc2lzdGVuY2UiLCJpbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwiaW5pdGlhbGl6ZUF1dGgiLCJpbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiaXNTaWduSW5XaXRoRW1haWxMaW5rIiwibGlua1dpdGhDcmVkZW50aWFsIiwibGlua1dpdGhQaG9uZU51bWJlciIsImxpbmtXaXRoUG9wdXAiLCJsaW5rV2l0aFJlZGlyZWN0IiwibXVsdGlGYWN0b3IiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJvbklkVG9rZW5DaGFuZ2VkIiwicGFyc2VBY3Rpb25Db2RlVVJMIiwicHJvZEVycm9yTWFwIiwicmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbCIsInJlYXV0aGVudGljYXRlV2l0aFBob25lTnVtYmVyIiwicmVhdXRoZW50aWNhdGVXaXRoUG9wdXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInJlbG9hZCIsInJldm9rZUFjY2Vzc1Rva2VuIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCIsInNldFBlcnNpc3RlbmNlIiwic2lnbkluQW5vbnltb3VzbHkiLCJzaWduSW5XaXRoQ3JlZGVudGlhbCIsInNpZ25JbldpdGhDdXN0b21Ub2tlbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsTGluayIsInNpZ25JbldpdGhQaG9uZU51bWJlciIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25JbldpdGhSZWRpcmVjdCIsInNpZ25PdXQiLCJ1bmxpbmsiLCJ1cGRhdGVDdXJyZW50VXNlciIsInVwZGF0ZUVtYWlsIiwidXBkYXRlUGFzc3dvcmQiLCJ1cGRhdGVQaG9uZU51bWJlciIsInVwZGF0ZVByb2ZpbGUiLCJ1c2VEZXZpY2VMYW5ndWFnZSIsInZhbGlkYXRlUGFzc3dvcmQiLCJ2ZXJpZnlCZWZvcmVVcGRhdGVFbWFpbCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlBIT05FIiwiVE9UUCIsIkZBQ0VCT09LIiwiR0lUSFVCIiwiR09PR0xFIiwiUEFTU1dPUkQiLCJUV0lUVEVSIiwiRU1BSUxfTElOSyIsIkVNQUlMX1BBU1NXT1JEIiwiTElOSyIsIlJFQVVUSEVOVElDQVRFIiwiU0lHTl9JTiIsIkVNQUlMX1NJR05JTiIsIlBBU1NXT1JEX1JFU0VUIiwiUkVDT1ZFUl9FTUFJTCIsIlJFVkVSVF9TRUNPTkRfRkFDVE9SX0FERElUSU9OIiwiVkVSSUZZX0FORF9DSEFOR0VfRU1BSUwiLCJWRVJJRllfRU1BSUwiLCJfZGVidWdFcnJvck1hcCIsIl9wcm9kRXJyb3JNYXAiLCJfREVGQVVMVF9BVVRIX0VSUk9SX0ZBQ1RPUlkiLCJpbXBvcnRfdXRpbCIsIkVycm9yRmFjdG9yeSIsIkFETUlOX09OTFlfT1BFUkFUSU9OIiwiQVJHVU1FTlRfRVJST1IiLCJBUFBfTk9UX0FVVEhPUklaRUQiLCJBUFBfTk9UX0lOU1RBTExFRCIsIkNBUFRDSEFfQ0hFQ0tfRkFJTEVEIiwiQ09ERV9FWFBJUkVEIiwiQ09SRE9WQV9OT1RfUkVBRFkiLCJDT1JTX1VOU1VQUE9SVEVEIiwiQ1JFREVOVElBTF9BTFJFQURZX0lOX1VTRSIsIkNSRURFTlRJQUxfTUlTTUFUQ0giLCJDUkVERU5USUFMX1RPT19PTERfTE9HSU5fQUdBSU4iLCJERVBFTkRFTlRfU0RLX0lOSVRfQkVGT1JFX0FVVEgiLCJEWU5BTUlDX0xJTktfTk9UX0FDVElWQVRFRCIsIkVNQUlMX0NIQU5HRV9ORUVEU19WRVJJRklDQVRJT04iLCJFTUFJTF9FWElTVFMiLCJFTVVMQVRPUl9DT05GSUdfRkFJTEVEIiwiRVhQSVJFRF9PT0JfQ09ERSIsIkVYUElSRURfUE9QVVBfUkVRVUVTVCIsIklOVEVSTkFMX0VSUk9SIiwiSU5WQUxJRF9BUElfS0VZIiwiSU5WQUxJRF9BUFBfQ1JFREVOVElBTCIsIklOVkFMSURfQVBQX0lEIiwiSU5WQUxJRF9BVVRIIiwiSU5WQUxJRF9BVVRIX0VWRU5UIiwiSU5WQUxJRF9DRVJUX0hBU0giLCJJTlZBTElEX0NPREUiLCJJTlZBTElEX0NPTlRJTlVFX1VSSSIsIklOVkFMSURfQ09SRE9WQV9DT05GSUdVUkFUSU9OIiwiSU5WQUxJRF9DVVNUT01fVE9LRU4iLCJJTlZBTElEX0RZTkFNSUNfTElOS19ET01BSU4iLCJJTlZBTElEX0VNQUlMIiwiSU5WQUxJRF9FTVVMQVRPUl9TQ0hFTUUiLCJJTlZBTElEX0lEUF9SRVNQT05TRSIsIklOVkFMSURfTE9HSU5fQ1JFREVOVElBTFMiLCJJTlZBTElEX01FU1NBR0VfUEFZTE9BRCIsIklOVkFMSURfTUZBX1NFU1NJT04iLCJJTlZBTElEX09BVVRIX0NMSUVOVF9JRCIsIklOVkFMSURfT0FVVEhfUFJPVklERVIiLCJJTlZBTElEX09PQl9DT0RFIiwiSU5WQUxJRF9PUklHSU4iLCJJTlZBTElEX1BBU1NXT1JEIiwiSU5WQUxJRF9QRVJTSVNURU5DRSIsIklOVkFMSURfUEhPTkVfTlVNQkVSIiwiSU5WQUxJRF9QUk9WSURFUl9JRCIsIklOVkFMSURfUkVDSVBJRU5UX0VNQUlMIiwiSU5WQUxJRF9TRU5ERVIiLCJJTlZBTElEX1NFU1NJT05fSU5GTyIsIklOVkFMSURfVEVOQU5UX0lEIiwiTUZBX0lORk9fTk9UX0ZPVU5EIiwiTUZBX1JFUVVJUkVEIiwiTUlTU0lOR19BTkRST0lEX1BBQ0tBR0VfTkFNRSIsIk1JU1NJTkdfQVBQX0NSRURFTlRJQUwiLCJNSVNTSU5HX0FVVEhfRE9NQUlOIiwiTUlTU0lOR19DT0RFIiwiTUlTU0lOR19DT05USU5VRV9VUkkiLCJNSVNTSU5HX0lGUkFNRV9TVEFSVCIsIk1JU1NJTkdfSU9TX0JVTkRMRV9JRCIsIk1JU1NJTkdfT1JfSU5WQUxJRF9OT05DRSIsIk1JU1NJTkdfTUZBX0lORk8iLCJNSVNTSU5HX01GQV9TRVNTSU9OIiwiTUlTU0lOR19QSE9ORV9OVU1CRVIiLCJNSVNTSU5HX1NFU1NJT05fSU5GTyIsIk1PRFVMRV9ERVNUUk9ZRUQiLCJORUVEX0NPTkZJUk1BVElPTiIsIk5FVFdPUktfUkVRVUVTVF9GQUlMRUQiLCJOVUxMX1VTRVIiLCJOT19BVVRIX0VWRU5UIiwiTk9fU1VDSF9QUk9WSURFUiIsIk9QRVJBVElPTl9OT1RfQUxMT1dFRCIsIk9QRVJBVElPTl9OT1RfU1VQUE9SVEVEIiwiUE9QVVBfQkxPQ0tFRCIsIlBPUFVQX0NMT1NFRF9CWV9VU0VSIiwiUFJPVklERVJfQUxSRUFEWV9MSU5LRUQiLCJRVU9UQV9FWENFRURFRCIsIlJFRElSRUNUX0NBTkNFTExFRF9CWV9VU0VSIiwiUkVESVJFQ1RfT1BFUkFUSU9OX1BFTkRJTkciLCJSRUpFQ1RFRF9DUkVERU5USUFMIiwiU0VDT05EX0ZBQ1RPUl9BTFJFQURZX0VOUk9MTEVEIiwiU0VDT05EX0ZBQ1RPUl9MSU1JVF9FWENFRURFRCIsIlRFTkFOVF9JRF9NSVNNQVRDSCIsIlRJTUVPVVQiLCJUT0tFTl9FWFBJUkVEIiwiVE9PX01BTllfQVRURU1QVFNfVFJZX0xBVEVSIiwiVU5BVVRIT1JJWkVEX0RPTUFJTiIsIlVOU1VQUE9SVEVEX0ZJUlNUX0ZBQ1RPUiIsIlVOU1VQUE9SVEVEX1BFUlNJU1RFTkNFIiwiVU5TVVBQT1JURURfVEVOQU5UX09QRVJBVElPTiIsIlVOVkVSSUZJRURfRU1BSUwiLCJVU0VSX0NBTkNFTExFRCIsIlVTRVJfREVMRVRFRCIsIlVTRVJfRElTQUJMRUQiLCJVU0VSX01JU01BVENIIiwiVVNFUl9TSUdORURfT1VUIiwiV0VBS19QQVNTV09SRCIsIldFQl9TVE9SQUdFX1VOU1VQUE9SVEVEIiwiQUxSRUFEWV9JTklUSUFMSVpFRCIsIlJFQ0FQVENIQV9OT1RfRU5BQkxFRCIsIk1JU1NJTkdfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfVE9LRU4iLCJJTlZBTElEX1JFQ0FQVENIQV9BQ1RJT04iLCJNSVNTSU5HX0NMSUVOVF9UWVBFIiwiTUlTU0lOR19SRUNBUFRDSEFfVkVSU0lPTiIsIklOVkFMSURfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFUV9UWVBFIiwiSU5WQUxJRF9IT1NUSU5HX0xJTktfRE9NQUlOIiwibG9nQ2xpZW50IiwiaW1wb3J0X2xvZ2dlciIsIkxvZ2dlciIsIl9sb2dXYXJuIiwibXNnIiwiYXJncyIsImxvZ0xldmVsIiwiTG9nTGV2ZWwiLCJXQVJOIiwid2FybiIsImltcG9ydF9hcHAiLCJTREtfVkVSU0lPTiIsIl9sb2dFcnJvciIsIkVSUk9SIiwiZXJyb3IiLCJfZmFpbCIsImF1dGhPckNvZGUiLCJyZXN0IiwiY3JlYXRlRXJyb3JJbnRlcm5hbCIsIl9jcmVhdGVFcnJvciIsIl9lcnJvcldpdGhDdXN0b21NZXNzYWdlIiwiYXV0aCIsImNvZGUiLCJtZXNzYWdlIiwiZXJyb3JNYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJmYWN0b3J5IiwiY3JlYXRlIiwiYXBwTmFtZSIsIm5hbWUiLCJfc2VydmVyQXBwQ3VycmVudFVzZXJPcGVyYXRpb25Ob3RTdXBwb3J0ZWRFcnJvciIsIl9hc3NlcnRJbnN0YW5jZU9mIiwib2JqZWN0IiwiaW5zdGFuY2UiLCJjb25zdHJ1Y3Rvckluc3RhbmNlIiwiY29uc3RydWN0b3IiLCJmdWxsUGFyYW1zIiwic2xpY2UiLCJfZXJyb3JGYWN0b3J5IiwiX2Fzc2VydCIsImFzc2VydGlvbiIsImRlYnVnRmFpbCIsImZhaWx1cmUiLCJFcnJvciIsImRlYnVnQXNzZXJ0IiwiX2dldEN1cnJlbnRVcmwiLCJzZWxmIiwiX2EiLCJsb2NhdGlvbiIsImhyZWYiLCJfaXNIdHRwT3JIdHRwcyIsIl9nZXRDdXJyZW50U2NoZW1lIiwicHJvdG9jb2wiLCJfaXNPbmxpbmUiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJpc0Jyb3dzZXJFeHRlbnNpb24iLCJfZ2V0VXNlckxhbmd1YWdlIiwibmF2aWdhdG9yTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsIkRlbGF5Iiwic2hvcnREZWxheSIsImxvbmdEZWxheSIsImlzTW9iaWxlIiwiaXNNb2JpbGVDb3Jkb3ZhIiwiaXNSZWFjdE5hdGl2ZSIsImdldCIsIk1hdGgiLCJtaW4iLCJfZW11bGF0b3JVcmwiLCJjb25maWciLCJwYXRoIiwiZW11bGF0b3IiLCJ1cmwiLCJzdGFydHNXaXRoIiwiRmV0Y2hQcm92aWRlciIsImluaXRpYWxpemUiLCJmZXRjaEltcGwiLCJoZWFkZXJzSW1wbCIsInJlc3BvbnNlSW1wbCIsImZldGNoIiwiZ2xvYmFsVGhpcyIsImhlYWRlcnMiLCJIZWFkZXJzIiwicmVzcG9uc2UiLCJSZXNwb25zZSIsIlNFUlZFUl9FUlJPUl9NQVAiLCJDb29raWVBdXRoUHJveGllZEVuZHBvaW50cyIsIkRFRkFVTFRfQVBJX1RJTUVPVVRfTVMiLCJfYWRkVGlkSWZOZWNlc3NhcnkiLCJyZXF1ZXN0IiwidGVuYW50SWQiLCJfcGVyZm9ybUFwaVJlcXVlc3QiLCJtZXRob2QiLCJjdXN0b21FcnJvck1hcCIsIl9wZXJmb3JtRmV0Y2hXaXRoRXJyb3JIYW5kbGluZyIsImJvZHkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJxdWVyeXN0cmluZyIsImtleSIsImFwaUtleSIsIl9nZXRBZGRpdGlvbmFsSGVhZGVycyIsImxhbmd1YWdlQ29kZSIsImZldGNoQXJncyIsImlzQ2xvdWRmbGFyZVdvcmtlciIsInJlZmVycmVyUG9saWN5IiwiZW11bGF0b3JDb25maWciLCJpc0Nsb3VkV29ya3N0YXRpb24iLCJob3N0IiwiY3JlZGVudGlhbHMiLCJfZ2V0RmluYWxUYXJnZXQiLCJhcGlIb3N0IiwiZmV0Y2hGbiIsIl9jYW5Jbml0RW11bGF0b3IiLCJuZXR3b3JrVGltZW91dCIsIk5ldHdvcmtUaW1lb3V0IiwiUHJvbWlzZSIsInJhY2UiLCJwcm9taXNlIiwiY2xlYXJOZXR3b3JrVGltZW91dCIsImpzb24iLCJfbWFrZVRhZ2dlZEVycm9yIiwib2siLCJlcnJvck1lc3NhZ2UiLCJzZXJ2ZXJFcnJvckNvZGUiLCJzZXJ2ZXJFcnJvck1lc3NhZ2UiLCJzcGxpdCIsImF1dGhFcnJvciIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImUiLCJGaXJlYmFzZUVycm9yIiwiU3RyaW5nIiwiX3BlcmZvcm1TaWduSW5SZXF1ZXN0Iiwic2VydmVyUmVzcG9uc2UiLCJfc2VydmVyUmVzcG9uc2UiLCJiYXNlIiwiYXV0aEludGVybmFsIiwiZmluYWxUYXJnZXQiLCJhcGlTY2hlbWUiLCJpbmNsdWRlcyIsIl9wZXJzaXN0ZW5jZU1hbmFnZXJBdmFpbGFibGUiLCJfZ2V0UGVyc2lzdGVuY2VUeXBlIiwiY29va2llUGVyc2lzdGVuY2UiLCJfZ2V0UGVyc2lzdGVuY2UiLCJ0b1N0cmluZyIsIl9wYXJzZUVuZm9yY2VtZW50U3RhdGUiLCJlbmZvcmNlbWVudFN0YXRlU3RyIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJfIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImVycm9yUGFyYW1zIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImN1c3RvbURhdGEiLCJfdG9rZW5SZXNwb25zZSIsImlzVjIiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJpc0VudGVycHJpc2UiLCJlbnRlcnByaXNlIiwiUmVjYXB0Y2hhQ29uZmlnIiwic2l0ZUtleSIsInJlY2FwdGNoYUVuZm9yY2VtZW50U3RhdGUiLCJyZWNhcHRjaGFLZXkiLCJnZXRQcm92aWRlckVuZm9yY2VtZW50U3RhdGUiLCJwcm92aWRlclN0ciIsImxlbmd0aCIsInByb3ZpZGVyIiwiZW5mb3JjZW1lbnRTdGF0ZSIsImlzUHJvdmlkZXJFbmFibGVkIiwiaXNBbnlQcm92aWRlckVuYWJsZWQiLCJnZXRSZWNhcHRjaGFQYXJhbXMiLCJyZWNhcHRjaGFTaXRlS2V5IiwiZ2V0UmVjYXB0Y2hhQ29uZmlnIiwiZGVsZXRlQWNjb3VudCIsImRlbGV0ZUxpbmtlZEFjY291bnRzIiwiZ2V0QWNjb3VudEluZm8iLCJ1dGNUaW1lc3RhbXBUb0RhdGVTdHJpbmciLCJ1dGNUaW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsIk51bWJlciIsImlzTmFOIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwidXNlciIsImZvcmNlUmVmcmVzaCIsImdldE1vZHVsYXJJbnN0YW5jZSIsInVzZXJJbnRlcm5hbCIsInRva2VuIiwiY2xhaW1zIiwiX3BhcnNlVG9rZW4iLCJleHAiLCJhdXRoX3RpbWUiLCJpYXQiLCJmaXJlYmFzZSIsInNpZ25JblByb3ZpZGVyIiwiYXV0aFRpbWUiLCJzZWNvbmRzU3RyaW5nVG9NaWxsaXNlY29uZHMiLCJpc3N1ZWRBdFRpbWUiLCJleHBpcmF0aW9uVGltZSIsInNpZ25JblNlY29uZEZhY3RvciIsInNlY29uZHMiLCJhbGdvcml0aG0iLCJwYXlsb2FkIiwic2lnbmF0dXJlIiwiZGVjb2RlZCIsImJhc2U2NERlY29kZSIsInBhcnNlIiwiX3Rva2VuRXhwaXJlc0luIiwicGFyc2VkVG9rZW4iLCJfbG9nb3V0SWZJbnZhbGlkYXRlZCIsImJ5cGFzc0F1dGhTdGF0ZSIsImlzVXNlckludmFsaWRhdGVkIiwiY3VycmVudFVzZXIiLCJQcm9hY3RpdmVSZWZyZXNoIiwiaXNSdW5uaW5nIiwidGltZXJJZCIsImVycm9yQmFja29mZiIsIl9zdGFydCIsInNjaGVkdWxlIiwiX3N0b3AiLCJnZXRJbnRlcnZhbCIsIndhc0Vycm9yIiwiaW50ZXJ2YWwiLCJleHBUaW1lIiwic3RzVG9rZW5NYW5hZ2VyIiwibm93IiwibWF4IiwiaXRlcmF0aW9uIiwiVXNlck1ldGFkYXRhIiwiY3JlYXRlZEF0IiwibGFzdExvZ2luQXQiLCJfaW5pdGlhbGl6ZVRpbWUiLCJsYXN0U2lnbkluVGltZSIsImNyZWF0aW9uVGltZSIsIl9jb3B5IiwibWV0YWRhdGEiLCJ0b0pTT04iLCJfcmVsb2FkV2l0aG91dFNhdmluZyIsImlkVG9rZW4iLCJ1c2VycyIsImNvcmVBY2NvdW50IiwiX25vdGlmeVJlbG9hZExpc3RlbmVyIiwibmV3UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJVc2VySW5mbyIsImV4dHJhY3RQcm92aWRlckRhdGEiLCJwcm92aWRlckRhdGEiLCJtZXJnZVByb3ZpZGVyRGF0YSIsIm9sZElzQW5vbnltb3VzIiwiaXNBbm9ueW1vdXMiLCJuZXdJc0Fub255bW91cyIsInBhc3N3b3JkSGFzaCIsInVwZGF0ZXMiLCJ1aWQiLCJsb2NhbElkIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsInBob3RvVXJsIiwiZW1haWxWZXJpZmllZCIsIl9wZXJzaXN0VXNlcklmQ3VycmVudCIsIl9ub3RpZnlMaXN0ZW5lcnNJZkN1cnJlbnQiLCJvcmlnaW5hbCIsIm5ld0RhdGEiLCJkZWR1cGVkIiwiZmlsdGVyIiwibyIsInNvbWUiLCJuIiwicHJvdmlkZXJJZCIsInByb3ZpZGVycyIsIm1hcCIsImltcG9ydF90c2xpYiIsIl9fcmVzdCIsInJhd0lkIiwicmVxdWVzdFN0c1Rva2VuIiwicmVmcmVzaFRva2VuIiwidG9rZW5BcGlIb3N0Iiwib3B0aW9ucyIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlc0luIiwiZXhwaXJlc19pbiIsInJlZnJlc2hfdG9rZW4iLCJyZXZva2VUb2tlbiIsIlN0c1Rva2VuTWFuYWdlciIsIl9TdHNUb2tlbk1hbmFnZXIiLCJpc0V4cGlyZWQiLCJ1cGRhdGVGcm9tU2VydmVyUmVzcG9uc2UiLCJ1cGRhdGVUb2tlbnNBbmRFeHBpcmF0aW9uIiwidXBkYXRlRnJvbUlkVG9rZW4iLCJnZXRUb2tlbiIsInJlZnJlc2giLCJjbGVhclJlZnJlc2hUb2tlbiIsIm9sZFRva2VuIiwiZXhwaXJlc0luU2VjIiwiZnJvbUpTT04iLCJtYW5hZ2VyIiwiX2Fzc2lnbiIsIl9jbG9uZSIsIl9wZXJmb3JtUmVmcmVzaCIsImFzc2VydFN0cmluZ09yVW5kZWZpbmVkIiwiVXNlckltcGwiLCJfVXNlckltcGwiLCJvcHQiLCJwcm9hY3RpdmVSZWZyZXNoIiwicmVsb2FkVXNlckluZm8iLCJyZWxvYWRMaXN0ZW5lciIsInVzZXJJbmZvIiwibmV3VXNlciIsIl9vblJlbG9hZCIsImNhbGxiYWNrIiwiX3N0YXJ0UHJvYWN0aXZlUmVmcmVzaCIsIl9zdG9wUHJvYWN0aXZlUmVmcmVzaCIsIl91cGRhdGVUb2tlbnNJZk5lY2Vzc2FyeSIsInJlbG9hZDIiLCJ0b2tlbnNSZWZyZXNoZWQiLCJkZWxldGUiLCJfaXNGaXJlYmFzZVNlcnZlckFwcCIsImFwcCIsIl9yZWRpcmVjdEV2ZW50SWQiLCJfZnJvbUpTT04iLCJfYiIsIl9jIiwiX2QiLCJfZSIsIl9mIiwiX2ciLCJfaCIsInBsYWluT2JqZWN0VG9rZW5NYW5hZ2VyIiwiQXJyYXkiLCJpc0FycmF5IiwiX2Zyb21JZFRva2VuUmVzcG9uc2UiLCJpZFRva2VuUmVzcG9uc2UiLCJfZnJvbUdldEFjY291bnRJbmZvUmVzcG9uc2UiLCJpbnN0YW5jZUNhY2hlIiwiTWFwIiwiX2dldEluc3RhbmNlIiwiY2xzIiwiRnVuY3Rpb24iLCJzZXQiLCJJbk1lbW9yeVBlcnNpc3RlbmNlIiwidHlwZSIsInN0b3JhZ2UiLCJfaXNBdmFpbGFibGUiLCJfc2V0IiwidmFsdWUiLCJfZ2V0IiwiX3JlbW92ZSIsIl9hZGRMaXN0ZW5lciIsIl9rZXkiLCJfbGlzdGVuZXIiLCJfcmVtb3ZlTGlzdGVuZXIiLCJfcGVyc2lzdGVuY2VLZXlOYW1lIiwiUGVyc2lzdGVuY2VVc2VyTWFuYWdlciIsIl9QZXJzaXN0ZW5jZVVzZXJNYW5hZ2VyIiwicGVyc2lzdGVuY2UiLCJ1c2VyS2V5IiwibmFtZTIiLCJmdWxsVXNlcktleSIsImZ1bGxQZXJzaXN0ZW5jZUtleSIsImJvdW5kRXZlbnRIYW5kbGVyIiwiX29uU3RvcmFnZUV2ZW50IiwiYmluZCIsInNldEN1cnJlbnRVc2VyIiwiZ2V0Q3VycmVudFVzZXIiLCJibG9iIiwiY2F0Y2giLCJyZW1vdmVDdXJyZW50VXNlciIsInNhdmVQZXJzaXN0ZW5jZUZvclJlZGlyZWN0IiwibmV3UGVyc2lzdGVuY2UiLCJwZXJzaXN0ZW5jZUhpZXJhcmNoeSIsImF2YWlsYWJsZVBlcnNpc3RlbmNlcyIsImFsbCIsInNlbGVjdGVkUGVyc2lzdGVuY2UiLCJ1c2VyVG9NaWdyYXRlIiwibWlncmF0aW9uSGllcmFyY2h5IiwicCIsIl9zaG91bGRBbGxvd01pZ3JhdGlvbiIsIl9nZXRCcm93c2VyTmFtZSIsInVzZXJBZ2VudCIsInVhIiwiX2lzSUVNb2JpbGUiLCJfaXNGaXJlZm94IiwiX2lzQmxhY2tCZXJyeSIsIl9pc1dlYk9TIiwiX2lzU2FmYXJpIiwiX2lzQ2hyb21lSU9TIiwiX2lzQW5kcm9pZCIsInJlIiwibWF0Y2hlcyIsIm1hdGNoIiwiZ2V0VUEiLCJ0ZXN0IiwiX2lzSU9TIiwiX2lzSU9TN09yOCIsIl9pc0lPU1N0YW5kYWxvbmUiLCJ3aW5kb3ciLCJzdGFuZGFsb25lIiwiX2lzSUUxMCIsImlzSUUiLCJkb2N1bWVudCIsImRvY3VtZW50TW9kZSIsIl9pc01vYmlsZUJyb3dzZXIiLCJfZ2V0Q2xpZW50VmVyc2lvbiIsImNsaWVudFBsYXRmb3JtIiwiZnJhbWV3b3JrcyIsInJlcG9ydGVkUGxhdGZvcm0iLCJyZXBvcnRlZEZyYW1ld29ya3MiLCJqb2luIiwiQXV0aE1pZGRsZXdhcmVRdWV1ZSIsInF1ZXVlIiwicHVzaENhbGxiYWNrIiwib25BYm9ydCIsIndyYXBwZWRDYWxsYmFjayIsInJlc29sdmUiLCJyZXN1bHQiLCJwdXNoIiwiaW5kZXgiLCJydW5NaWRkbGV3YXJlIiwibmV4dFVzZXIiLCJvbkFib3J0U3RhY2siLCJiZWZvcmVTdGF0ZUNhbGxiYWNrIiwicmV2ZXJzZSIsIm9yaWdpbmFsTWVzc2FnZSIsIl9nZXRQYXNzd29yZFBvbGljeSIsIk1JTklNVU1fTUlOX1BBU1NXT1JEX0xFTkdUSCIsIlBhc3N3b3JkUG9saWN5SW1wbCIsInJlc3BvbnNlT3B0aW9ucyIsImN1c3RvbVN0cmVuZ3RoT3B0aW9ucyIsIm1pblBhc3N3b3JkTGVuZ3RoIiwibWF4UGFzc3dvcmRMZW5ndGgiLCJjb250YWluc0xvd2VyY2FzZUNoYXJhY3RlciIsImNvbnRhaW5zTG93ZXJjYXNlTGV0dGVyIiwiY29udGFpbnNVcHBlcmNhc2VDaGFyYWN0ZXIiLCJjb250YWluc1VwcGVyY2FzZUxldHRlciIsImNvbnRhaW5zTnVtZXJpY0NoYXJhY3RlciIsImNvbnRhaW5zTm9uQWxwaGFudW1lcmljQ2hhcmFjdGVyIiwiYWxsb3dlZE5vbkFscGhhbnVtZXJpY0NoYXJhY3RlcnMiLCJmb3JjZVVwZ3JhZGVPblNpZ25pbiIsInNjaGVtYVZlcnNpb24iLCJwYXNzd29yZCIsInN0YXR1cyIsImlzVmFsaWQiLCJwYXNzd29yZFBvbGljeSIsInZhbGlkYXRlUGFzc3dvcmRMZW5ndGhPcHRpb25zIiwidmFsaWRhdGVQYXNzd29yZENoYXJhY3Rlck9wdGlvbnMiLCJtZWV0c01pblBhc3N3b3JkTGVuZ3RoIiwibWVldHNNYXhQYXNzd29yZExlbmd0aCIsInVwZGF0ZVBhc3N3b3JkQ2hhcmFjdGVyT3B0aW9uc1N0YXR1c2VzIiwicGFzc3dvcmRDaGFyIiwiaSIsImNoYXJBdCIsIkF1dGhJbXBsIiwiaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyIiwiYXBwQ2hlY2tTZXJ2aWNlUHJvdmlkZXIiLCJvcGVyYXRpb25zIiwiYXV0aFN0YXRlU3Vic2NyaXB0aW9uIiwiU3Vic2NyaXB0aW9uIiwiaWRUb2tlblN1YnNjcmlwdGlvbiIsImJlZm9yZVN0YXRlUXVldWUiLCJyZWRpcmVjdFVzZXIiLCJpc1Byb2FjdGl2ZVJlZnJlc2hFbmFibGVkIiwiRVhQRUNURURfUEFTU1dPUkRfUE9MSUNZX1NDSEVNQV9WRVJTSU9OIiwiX2lzSW5pdGlhbGl6ZWQiLCJfZGVsZXRlZCIsIl9pbml0aWFsaXphdGlvblByb21pc2UiLCJfcG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiX2FnZW50UmVjYXB0Y2hhQ29uZmlnIiwiX3RlbmFudFJlY2FwdGNoYUNvbmZpZ3MiLCJfcHJvamVjdFBhc3N3b3JkUG9saWN5IiwiX3RlbmFudFBhc3N3b3JkUG9saWNpZXMiLCJfcmVzb2x2ZVBlcnNpc3RlbmNlTWFuYWdlckF2YWlsYWJsZSIsImxhc3ROb3RpZmllZFVpZCIsInNldHRpbmdzIiwiYXBwVmVyaWZpY2F0aW9uRGlzYWJsZWRGb3JUZXN0aW5nIiwiY2xpZW50VmVyc2lvbiIsInNka0NsaWVudFZlcnNpb24iLCJfaW5pdGlhbGl6ZVdpdGhQZXJzaXN0ZW5jZSIsInBvcHVwUmVkaXJlY3RSZXNvbHZlciIsInBlcnNpc3RlbmNlTWFuYWdlciIsImNhbGwiLCJfc2hvdWxkSW5pdFByb2FjdGl2ZWx5IiwiX2luaXRpYWxpemUiLCJpbml0aWFsaXplQ3VycmVudFVzZXIiLCJhc3NlcnRlZFBlcnNpc3RlbmNlIiwiX2N1cnJlbnRVc2VyIiwiX3VwZGF0ZUN1cnJlbnRVc2VyIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyRnJvbUlkVG9rZW4iLCJkaXJlY3RseVNldEN1cnJlbnRVc2VyIiwiZXJyIiwiY29uc29sZSIsImF1dGhJZFRva2VuIiwidGhlbiIsInByZXZpb3VzbHlTdG9yZWRVc2VyIiwiZnV0dXJlQ3VycmVudFVzZXIiLCJuZWVkc1RvY2hlY2tNaWRkbGV3YXJlIiwiYXV0aERvbWFpbiIsImdldE9ySW5pdFJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwicmVkaXJlY3RVc2VyRXZlbnRJZCIsInN0b3JlZFVzZXJFdmVudElkIiwidHJ5UmVkaXJlY3RTaWduSW4iLCJfb3ZlcnJpZGVSZWRpcmVjdFJlc3VsdCIsInJlbG9hZEFuZFNldEN1cnJlbnRVc2VyT3JDbGVhciIsInJlZGlyZWN0UmVzb2x2ZXIiLCJfY29tcGxldGVSZWRpcmVjdEZuIiwiX3NldFJlZGlyZWN0VXNlciIsIl9kZWxldGUiLCJ1c2VyRXh0ZXJuIiwic2tpcEJlZm9yZVN0YXRlQ2FsbGJhY2tzIiwibm90aWZ5QXV0aExpc3RlbmVycyIsInJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwiX2dldFJlY2FwdGNoYUNvbmZpZyIsIl9nZXRQYXNzd29yZFBvbGljeUludGVybmFsIiwiX3VwZGF0ZVBhc3N3b3JkUG9saWN5IiwiX3VwZGF0ZUVycm9yTWFwIiwibmV4dE9yT2JzZXJ2ZXIiLCJjb21wbGV0ZWQiLCJyZWdpc3RlclN0YXRlTGlzdGVuZXIiLCJhdXRoU3RhdGVSZWFkeSIsInVuc3Vic2NyaWJlIiwidG9rZW5UeXBlIiwicmVkaXJlY3RNYW5hZ2VyIiwicmVzb2x2ZXIiLCJfcmVkaXJlY3RQZXJzaXN0ZW5jZSIsIl9yZWRpcmVjdFVzZXJGb3JJZCIsImlkIiwibmV4dCIsImN1cnJlbnRVaWQiLCJzdWJzY3JpcHRpb24iLCJjYiIsImlzVW5zdWJzY3JpYmVkIiwiYWRkT2JzZXJ2ZXIiLCJhY3Rpb24iLCJfbG9nRnJhbWV3b3JrIiwiZnJhbWV3b3JrIiwic29ydCIsIl9nZXRGcmFtZXdvcmtzIiwiYXBwSWQiLCJoZWFydGJlYXRzSGVhZGVyIiwiZ2V0SW1tZWRpYXRlIiwib3B0aW9uYWwiLCJnZXRIZWFydGJlYXRzSGVhZGVyIiwiYXBwQ2hlY2tUb2tlbiIsIl9nZXRBcHBDaGVja1Rva2VuIiwiYXBwQ2hlY2tUb2tlblJlc3VsdCIsIl9jYXN0QXV0aCIsIm9ic2VydmVyIiwiY3JlYXRlU3Vic2NyaWJlIiwiZXh0ZXJuYWxKU1Byb3ZpZGVyIiwibG9hZEpTIiwicmVjYXB0Y2hhVjJTY3JpcHQiLCJyZWNhcHRjaGFFbnRlcnByaXNlU2NyaXB0IiwiZ2FwaVNjcmlwdCIsIl9zZXRFeHRlcm5hbEpTUHJvdmlkZXIiLCJfbG9hZEpTIiwiX3JlY2FwdGNoYVYyU2NyaXB0VXJsIiwiX3JlY2FwdGNoYUVudGVycHJpc2VTY3JpcHRVcmwiLCJfZ2FwaVNjcmlwdFVybCIsIl9nZW5lcmF0ZUNhbGxiYWNrTmFtZSIsInByZWZpeCIsImZsb29yIiwicmFuZG9tIiwiX1NPTFZFX1RJTUVfTVMiLCJfRVhQSVJBVElPTl9USU1FX01TIiwiX1dJREdFVF9JRF9TVEFSVCIsIk1vY2tSZUNhcHRjaGEiLCJjb3VudGVyIiwiX3dpZGdldHMiLCJyZW5kZXIiLCJjb250YWluZXIiLCJwYXJhbWV0ZXJzIiwiTW9ja1dpZGdldCIsInJlc2V0Iiwib3B0V2lkZ2V0SWQiLCJleGVjdXRlIiwiTW9ja0dyZUNBUFRDSEFUb3BMZXZlbCIsIk1vY2tHcmVDQVBUQ0hBIiwicmVhZHkiLCJfc2l0ZUtleSIsIl9vcHRpb25zIiwiX2NvbnRhaW5lciIsIl9wYXJhbWV0ZXJzIiwiY29udGFpbmVyT3JJZCIsImRlbGV0ZWQiLCJyZXNwb25zZVRva2VuIiwiY2xpY2tIYW5kbGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpc1Zpc2libGUiLCJzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrSWZEZWxldGVkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdlbmVyYXRlUmFuZG9tQWxwaGFOdW1lcmljU3RyaW5nIiwiZXhwaXJlZENhbGxiYWNrIiwibGVuIiwiY2hhcnMiLCJhbGxvd2VkQ2hhcnMiLCJSRUNBUFRDSEFfRU5URVJQUklTRV9WRVJJRklFUl9UWVBFIiwiRkFLRV9UT0tFTiIsIlJlY2FwdGNoYUVudGVycHJpc2VWZXJpZmllciIsImF1dGhFeHRlcm4iLCJ2ZXJpZnkiLCJyZXRyaWV2ZVNpdGVLZXkiLCJjbGllbnRUeXBlIiwidmVyc2lvbiIsInJldHJpZXZlUmVjYXB0Y2hhVG9rZW4iLCJtb2NrUmVjYXB0Y2hhIiwiaW5qZWN0UmVjYXB0Y2hhRmllbGRzIiwiaXNDYXB0Y2hhUmVzcCIsImlzRmFrZVRva2VuIiwidmVyaWZpZXIiLCJjYXB0Y2hhUmVzcG9uc2UiLCJuZXdSZXF1ZXN0IiwicGhvbmVFbnJvbGxtZW50SW5mbyIsInJlY2FwdGNoYVRva2VuIiwicGhvbmVTaWduSW5JbmZvIiwiaGFuZGxlUmVjYXB0Y2hhRmxvdyIsImF1dGhJbnN0YW5jZSIsImFjdGlvbk5hbWUiLCJhY3Rpb25NZXRob2QiLCJyZWNhcHRjaGFBdXRoUHJvdmlkZXIiLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYSIsImxvZyIsIl9hMiIsInJlcXVlc3RXaXRoUmVjYXB0Y2hhRmllbGRzIiwiX2luaXRpYWxpemVSZWNhcHRjaGFDb25maWciLCJkZXBzIiwiX2dldFByb3ZpZGVyIiwiaXNJbml0aWFsaXplZCIsImF1dGgyIiwiaW5pdGlhbE9wdGlvbnMiLCJnZXRPcHRpb25zIiwiZGVlcEVxdWFsIiwiX2luaXRpYWxpemVBdXRoSW5zdGFuY2UiLCJoaWVyYXJjaHkiLCJkaXNhYmxlV2FybmluZ3MiLCJleHRyYWN0UHJvdG9jb2wiLCJwb3J0IiwiZXh0cmFjdEhvc3RBbmRQb3J0IiwicG9ydFN0ciIsImZyZWV6ZSIsInBpbmdTZXJ2ZXIiLCJ1cGRhdGVFbXVsYXRvckJhbm5lciIsImVtaXRFbXVsYXRvcldhcm5pbmciLCJwcm90b2NvbEVuZCIsImluZGV4T2YiLCJzdWJzdHIiLCJhdXRob3JpdHkiLCJleGVjIiwiaG9zdEFuZFBvcnQiLCJwb3AiLCJicmFja2V0ZWRJUHY2IiwicGFyc2VQb3J0IiwiYXR0YWNoQmFubmVyIiwiZWwiLCJjcmVhdGVFbGVtZW50Iiwic3R5Iiwic3R5bGUiLCJpbm5lclRleHQiLCJwb3NpdGlvbiIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJib3R0b20iLCJsZWZ0IiwibWFyZ2luIiwiekluZGV4IiwidGV4dEFsaWduIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJpbmZvIiwicmVhZHlTdGF0ZSIsInNpZ25Jbk1ldGhvZCIsIl9nZXRJZFRva2VuUmVzcG9uc2UiLCJfYXV0aCIsIl9saW5rVG9JZFRva2VuIiwiX2lkVG9rZW4iLCJfZ2V0UmVhdXRoZW50aWNhdGlvblJlc29sdmVyIiwicmVzZXRQYXNzd29yZCIsInVwZGF0ZUVtYWlsUGFzc3dvcmQiLCJsaW5rRW1haWxQYXNzd29yZCIsImFwcGx5QWN0aW9uQ29kZSQxIiwic2lnbkluV2l0aFBhc3N3b3JkIiwic2VuZE9vYkNvZGUiLCJzZW5kRW1haWxWZXJpZmljYXRpb24kMSIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwkMSIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCQxIiwidmVyaWZ5QW5kQ2hhbmdlRW1haWwiLCJzaWduSW5XaXRoRW1haWxMaW5rJDEiLCJzaWduSW5XaXRoRW1haWxMaW5rRm9yTGlua2luZyIsIl9FbWFpbEF1dGhDcmVkZW50aWFsIiwiX2VtYWlsIiwiX3Bhc3N3b3JkIiwiX3RlbmFudElkIiwiX2Zyb21FbWFpbEFuZFBhc3N3b3JkIiwiX2Zyb21FbWFpbEFuZENvZGUiLCJvb2JDb2RlIiwib2JqIiwicmV0dXJuU2VjdXJlVG9rZW4iLCJzaWduSW5XaXRoSWRwIiwiSURQX1JFUVVFU1RfVVJJJDEiLCJfT0F1dGhDcmVkZW50aWFsIiwicGVuZGluZ1Rva2VuIiwiX2Zyb21QYXJhbXMiLCJjcmVkIiwibm9uY2UiLCJvYXV0aFRva2VuIiwib2F1dGhUb2tlblNlY3JldCIsInNlY3JldCIsImJ1aWxkUmVxdWVzdCIsImF1dG9DcmVhdGUiLCJyZXF1ZXN0VXJpIiwicG9zdEJvZHkiLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlIiwic2lnbkluV2l0aFBob25lTnVtYmVyJDEiLCJsaW5rV2l0aFBob25lTnVtYmVyJDEiLCJ0ZW1wb3JhcnlQcm9vZiIsIlZFUklGWV9QSE9ORV9OVU1CRVJfRk9SX0VYSVNUSU5HX0VSUk9SX01BUF8iLCJ2ZXJpZnlQaG9uZU51bWJlckZvckV4aXN0aW5nIiwiYXBpUmVxdWVzdCIsIm9wZXJhdGlvbiIsIl9QaG9uZUF1dGhDcmVkZW50aWFsIiwiX2Zyb21WZXJpZmljYXRpb24iLCJ2ZXJpZmljYXRpb25JZCIsInZlcmlmaWNhdGlvbkNvZGUiLCJfZnJvbVRva2VuUmVzcG9uc2UiLCJfbWFrZVZlcmlmaWNhdGlvblJlcXVlc3QiLCJzZXNzaW9uSW5mbyIsInBhcnNlTW9kZSIsIm1vZGUiLCJwYXJzZURlZXBMaW5rIiwibGluayIsInF1ZXJ5c3RyaW5nRGVjb2RlIiwiZXh0cmFjdFF1ZXJ5c3RyaW5nIiwiZG91YmxlRGVlcExpbmsiLCJpT1NEZWVwTGluayIsImlPU0RvdWJsZURlZXBMaW5rIiwiX0FjdGlvbkNvZGVVUkwiLCJhY3Rpb25MaW5rIiwic2VhcmNoUGFyYW1zIiwiY29udGludWVVcmwiLCJwYXJzZUxpbmsiLCJfRW1haWxBdXRoUHJvdmlkZXIiLCJQUk9WSURFUl9JRCIsImNyZWRlbnRpYWwiLCJjcmVkZW50aWFsV2l0aExpbmsiLCJlbWFpbExpbmsiLCJhY3Rpb25Db2RlVXJsIiwiRU1BSUxfUEFTU1dPUkRfU0lHTl9JTl9NRVRIT0QiLCJFTUFJTF9MSU5LX1NJR05fSU5fTUVUSE9EIiwiRmVkZXJhdGVkQXV0aFByb3ZpZGVyIiwiZGVmYXVsdExhbmd1YWdlQ29kZSIsImN1c3RvbVBhcmFtZXRlcnMiLCJzZXREZWZhdWx0TGFuZ3VhZ2UiLCJzZXRDdXN0b21QYXJhbWV0ZXJzIiwiY3VzdG9tT0F1dGhQYXJhbWV0ZXJzIiwiZ2V0Q3VzdG9tUGFyYW1ldGVycyIsIkJhc2VPQXV0aFByb3ZpZGVyIiwic2NvcGVzIiwiYWRkU2NvcGUiLCJzY29wZSIsImdldFNjb3BlcyIsIl9PQXV0aFByb3ZpZGVyIiwiY3JlZGVudGlhbEZyb21KU09OIiwiX2NyZWRlbnRpYWwiLCJyYXdOb25jZSIsImNyZWRlbnRpYWxGcm9tUmVzdWx0IiwidXNlckNyZWRlbnRpYWwiLCJvYXV0aENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiY3JlZGVudGlhbEZyb21FcnJvciIsInRva2VuUmVzcG9uc2UiLCJvYXV0aElkVG9rZW4iLCJvYXV0aEFjY2Vzc1Rva2VuIiwiX0ZhY2Vib29rQXV0aFByb3ZpZGVyIiwiRkFDRUJPT0tfU0lHTl9JTl9NRVRIT0QiLCJjcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIl9Hb29nbGVBdXRoUHJvdmlkZXIiLCJHT09HTEVfU0lHTl9JTl9NRVRIT0QiLCJfR2l0aHViQXV0aFByb3ZpZGVyIiwiR0lUSFVCX1NJR05fSU5fTUVUSE9EIiwiSURQX1JFUVVFU1RfVVJJIiwiU0FNTEF1dGhDcmVkZW50aWFsIiwiX1NBTUxBdXRoQ3JlZGVudGlhbCIsIl9jcmVhdGUiLCJTQU1MX1BST1ZJREVSX1BSRUZJWCIsIl9TQU1MQXV0aFByb3ZpZGVyIiwic2FtbENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiX1R3aXR0ZXJBdXRoUHJvdmlkZXIiLCJUV0lUVEVSX1NJR05fSU5fTUVUSE9EIiwic2lnblVwIiwiVXNlckNyZWRlbnRpYWxJbXBsIiwiX1VzZXJDcmVkZW50aWFsSW1wbCIsIm9wZXJhdGlvblR5cGUiLCJwcm92aWRlcklkRm9yUmVzcG9uc2UiLCJ1c2VyQ3JlZCIsIl9mb3JPcGVyYXRpb24iLCJNdWx0aUZhY3RvckVycm9yIiwiX011bHRpRmFjdG9yRXJyb3IiLCJzZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsIl9mcm9tRXJyb3JBbmRPcGVyYXRpb24iLCJfcHJvY2Vzc0NyZWRlbnRpYWxTYXZpbmdNZmFDb250ZXh0SWZOZWNlc3NhcnkiLCJpZFRva2VuUHJvdmlkZXIiLCJwcm92aWRlckRhdGFBc05hbWVzIiwiU2V0IiwicGlkIiwiX2Fzc2VydExpbmtlZFN0YXR1cyIsImRlbGV0ZVByb3ZpZGVyIiwicHJvdmlkZXJzTGVmdCIsInBkIiwiaGFzIiwiX2xpbmskMSIsImV4cGVjdGVkIiwicHJvdmlkZXJJZHMiLCJfcmVhdXRoZW50aWNhdGUiLCJwYXJzZWQiLCJzdWIiLCJfc2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4kMSIsImN1c3RvbVRva2VuIiwiTXVsdGlGYWN0b3JJbmZvSW1wbCIsImZhY3RvcklkIiwibWZhRW5yb2xsbWVudElkIiwiZW5yb2xsbWVudFRpbWUiLCJlbnJvbGxlZEF0IiwiX2Zyb21TZXJ2ZXJSZXNwb25zZSIsImVucm9sbG1lbnQiLCJQaG9uZU11bHRpRmFjdG9ySW5mb0ltcGwiLCJUb3RwTXVsdGlGYWN0b3JJbmZvSW1wbCIsIl9QaG9uZU11bHRpRmFjdG9ySW5mb0ltcGwiLCJwaG9uZUluZm8iLCJfVG90cE11bHRpRmFjdG9ySW5mb0ltcGwiLCJfc2V0QWN0aW9uQ29kZVNldHRpbmdzT25SZXF1ZXN0IiwiYWN0aW9uQ29kZVNldHRpbmdzIiwiZHluYW1pY0xpbmtEb21haW4iLCJsaW5rRG9tYWluIiwiY2FuSGFuZGxlQ29kZUluQXBwIiwiaGFuZGxlQ29kZUluQXBwIiwiaU9TIiwiYnVuZGxlSWQiLCJpT1NCdW5kbGVJZCIsImFuZHJvaWQiLCJwYWNrYWdlTmFtZSIsImFuZHJvaWRJbnN0YWxsQXBwIiwiaW5zdGFsbEFwcCIsImFuZHJvaWRNaW5pbXVtVmVyc2lvbkNvZGUiLCJtaW5pbXVtVmVyc2lvbiIsImFuZHJvaWRQYWNrYWdlTmFtZSIsInJlY2FjaGVQYXNzd29yZFBvbGljeSIsInJlcXVlc3RUeXBlIiwibmV3UGFzc3dvcmQiLCJhdXRoTW9kdWxhciIsIm5ld0VtYWlsIiwibWZhSW5mbyIsIm11bHRpRmFjdG9ySW5mbyIsImRhdGEiLCJwcmV2aW91c0VtYWlsIiwic2lnblVwUmVzcG9uc2UiLCJzZXRBY3Rpb25Db2RlU2V0dGluZ3MiLCJyZXF1ZXN0MiIsImFjdGlvbkNvZGVTZXR0aW5nczIiLCJjcmVhdGVBdXRoVXJpIiwiY29udGludWVVcmkiLCJpZGVudGlmaWVyIiwic2lnbmluTWV0aG9kcyIsInVwZGF0ZVByb2ZpbGUkMSIsInByb2ZpbGVSZXF1ZXN0IiwicGFzc3dvcmRQcm92aWRlciIsImZpbmQiLCJ1cGRhdGVFbWFpbE9yUGFzc3dvcmQiLCJwcm9maWxlIiwicmF3VXNlckluZm8iLCJpc05ld1VzZXIiLCJraW5kIiwiZmlsdGVyZWRQcm92aWRlcklkIiwiR2VuZXJpY0FkZGl0aW9uYWxVc2VySW5mbyIsIkZhY2Vib29rQWRkaXRpb25hbFVzZXJJbmZvIiwiR2l0aHViQWRkaXRpb25hbFVzZXJJbmZvIiwiR29vZ2xlQWRkaXRpb25hbFVzZXJJbmZvIiwiVHdpdHRlckFkZGl0aW9uYWxVc2VySW5mbyIsInNjcmVlbk5hbWUiLCJGZWRlcmF0ZWRBZGRpdGlvbmFsVXNlckluZm9XaXRoVXNlcm5hbWUiLCJ1c2VybmFtZSIsImxvZ2luIiwiTXVsdGlGYWN0b3JTZXNzaW9uSW1wbCIsIl9NdWx0aUZhY3RvclNlc3Npb25JbXBsIiwiX2Zyb21JZHRva2VuIiwiX2Zyb21NZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm1mYVBlbmRpbmdDcmVkZW50aWFsIiwibXVsdGlGYWN0b3JTZXNzaW9uIiwicGVuZGluZ0NyZWRlbnRpYWwiLCJNdWx0aUZhY3RvclJlc29sdmVySW1wbCIsIl9NdWx0aUZhY3RvclJlc29sdmVySW1wbCIsInNlc3Npb24iLCJoaW50cyIsInNpZ25JblJlc29sdmVyIiwiX2Zyb21FcnJvciIsIm1mYVJlc3BvbnNlIiwiX3Byb2Nlc3MiLCJyZXNvbHZlU2lnbkluIiwiYXNzZXJ0aW9uRXh0ZXJuIiwiZXJyb3JJbnRlcm5hbCIsInN0YXJ0RW5yb2xsUGhvbmVNZmEiLCJmaW5hbGl6ZUVucm9sbFBob25lTWZhIiwic3RhcnRFbnJvbGxUb3RwTWZhIiwiZmluYWxpemVFbnJvbGxUb3RwTWZhIiwid2l0aGRyYXdNZmEiLCJNdWx0aUZhY3RvclVzZXJJbXBsIiwiX011bHRpRmFjdG9yVXNlckltcGwiLCJlbnJvbGxlZEZhY3RvcnMiLCJfZnJvbVVzZXIiLCJnZXRTZXNzaW9uIiwiZW5yb2xsIiwiZmluYWxpemVNZmFSZXNwb25zZSIsInVuZW5yb2xsIiwiaW5mb09yVWlkIiwibXVsdGlGYWN0b3JVc2VyQ2FjaGUiLCJXZWFrTWFwIiwidXNlck1vZHVsYXIiLCJTVE9SQUdFX0FWQUlMQUJMRV9LRVkiLCJCcm93c2VyUGVyc2lzdGVuY2VDbGFzcyIsInN0b3JhZ2VSZXRyaWV2ZXIiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImdldEl0ZW0iLCJfUE9MTElOR19JTlRFUlZBTF9NUyQxIiwiSUUxMF9MT0NBTF9TVE9SQUdFX1NZTkNfREVMQVkiLCJCcm93c2VyTG9jYWxQZXJzaXN0ZW5jZSIsImxvY2FsU3RvcmFnZSIsImV2ZW50IiwicG9sbCIsIm9uU3RvcmFnZUV2ZW50IiwibGlzdGVuZXJzIiwibG9jYWxDYWNoZSIsInBvbGxUaW1lciIsImZhbGxiYWNrVG9Qb2xsaW5nIiwiZm9yQWxsQ2hhbmdlZEtleXMiLCJrZXlzIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImtleTIiLCJfb2xkVmFsdWUiLCJub3RpZnlMaXN0ZW5lcnMiLCJkZXRhY2hMaXN0ZW5lciIsInN0b3BQb2xsaW5nIiwidHJpZ2dlckxpc3RlbmVycyIsInN0b3JlZFZhbHVlMiIsInN0b3JlZFZhbHVlIiwibGlzdGVuZXIiLCJmcm9tIiwic3RhcnRQb2xsaW5nIiwic2V0SW50ZXJ2YWwiLCJTdG9yYWdlRXZlbnQiLCJjbGVhckludGVydmFsIiwiYXR0YWNoTGlzdGVuZXIiLCJQT0xMSU5HX0lOVEVSVkFMX01TIiwiZ2V0RG9jdW1lbnRDb29raWUiLCJlc2NhcGVkTmFtZSIsIm1hdGNoZXIiLCJSZWdFeHAiLCJjb29raWUiLCJnZXRDb29raWVOYW1lIiwiaXNEZXZNb2RlIiwiQ29va2llUGVyc2lzdGVuY2UiLCJsaXN0ZW5lclVuc3Vic2NyaWJlcyIsIm9yaWdpbmFsVXJsIiwiVVJMIiwib3JpZ2luIiwiaXNTZWN1cmVDb250ZXh0IiwiY29va2llRW5hYmxlZCIsIl92YWx1ZSIsImNvb2tpZVN0b3JlIiwiZXhpc3RpbmdWYWx1ZSIsImNoYW5nZWRDb29raWUiLCJjaGFuZ2VkIiwiY2hhbmdlIiwiZGVsZXRlZENvb2tpZSIsInVuc3Vic2NyaWJlMiIsImxhc3RWYWx1ZSIsImN1cnJlbnRWYWx1ZSIsIkJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UiLCJzZXNzaW9uU3RvcmFnZSIsIl9hbGxTZXR0bGVkIiwicHJvbWlzZXMiLCJmdWxmaWxsZWQiLCJyZWFzb24iLCJSZWNlaXZlciIsIl9SZWNlaXZlciIsImV2ZW50VGFyZ2V0IiwiaGFuZGxlcnNNYXAiLCJoYW5kbGVFdmVudCIsImV4aXN0aW5nSW5zdGFuY2UiLCJyZWNlaXZlcnMiLCJyZWNlaXZlciIsImlzTGlzdGVuaW5ndG8iLCJuZXdJbnN0YW5jZSIsIm1lc3NhZ2VFdmVudCIsImV2ZW50SWQiLCJldmVudFR5cGUiLCJoYW5kbGVycyIsInBvcnRzIiwicG9zdE1lc3NhZ2UiLCJoYW5kbGVyIiwiX3N1YnNjcmliZSIsImV2ZW50SGFuZGxlciIsIl91bnN1YnNjcmliZSIsIl9nZW5lcmF0ZUV2ZW50SWQiLCJkaWdpdHMiLCJTZW5kZXIiLCJ0YXJnZXQiLCJyZW1vdmVNZXNzYWdlSGFuZGxlciIsIm1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJvbk1lc3NhZ2UiLCJjbG9zZSIsIl9zZW5kIiwidGltZW91dCIsIk1lc3NhZ2VDaGFubmVsIiwiY29tcGxldGlvblRpbWVyIiwic3RhcnQiLCJhY2tUaW1lciIsInBvcnQyIiwiZmluYWxseSIsIl93aW5kb3ciLCJfc2V0V2luZG93TG9jYXRpb24iLCJfaXNXb3JrZXIiLCJfZ2V0QWN0aXZlU2VydmljZVdvcmtlciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RyYXRpb24iLCJhY3RpdmUiLCJfZ2V0U2VydmljZVdvcmtlckNvbnRyb2xsZXIiLCJjb250cm9sbGVyIiwiX2dldFdvcmtlckdsb2JhbFNjb3BlIiwiREJfTkFNRSIsIkRCX1ZFUlNJT04iLCJEQl9PQkpFQ1RTVE9SRV9OQU1FIiwiREJfREFUQV9LRVlQQVRIIiwiREJQcm9taXNlIiwidG9Qcm9taXNlIiwiZ2V0T2JqZWN0U3RvcmUiLCJkYiIsImlzUmVhZFdyaXRlIiwidHJhbnNhY3Rpb24iLCJvYmplY3RTdG9yZSIsIl9kZWxldGVEYXRhYmFzZSIsImluZGV4ZWREQiIsImRlbGV0ZURhdGFiYXNlIiwiX29wZW5EYXRhYmFzZSIsIm9wZW4iLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJvYmplY3RTdG9yZU5hbWVzIiwiY29udGFpbnMiLCJfcHV0T2JqZWN0IiwicHV0IiwiZ2V0T2JqZWN0IiwiX2RlbGV0ZU9iamVjdCIsIl9QT0xMSU5HX0lOVEVSVkFMX01TIiwiX1RSQU5TQUNUSU9OX1JFVFJZX0NPVU5UIiwiSW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsInBlbmRpbmdXcml0ZXMiLCJzZW5kZXIiLCJzZXJ2aWNlV29ya2VyUmVjZWl2ZXJBdmFpbGFibGUiLCJhY3RpdmVTZXJ2aWNlV29ya2VyIiwiX3dvcmtlckluaXRpYWxpemF0aW9uUHJvbWlzZSIsImluaXRpYWxpemVTZXJ2aWNlV29ya2VyTWVzc2FnaW5nIiwiX29wZW5EYiIsIl93aXRoUmV0cmllcyIsIm9wIiwibnVtQXR0ZW1wdHMiLCJpbml0aWFsaXplUmVjZWl2ZXIiLCJpbml0aWFsaXplU2VuZGVyIiwiX29yaWdpbiIsIl9wb2xsIiwia2V5UHJvY2Vzc2VkIiwiX2RhdGEiLCJyZXN1bHRzIiwibm90aWZ5U2VydmljZVdvcmtlciIsIl93aXRoUGVuZGluZ1dyaXRlIiwid3JpdGUiLCJnZXRBbGxSZXF1ZXN0IiwiZ2V0QWxsIiwia2V5c0luUmVzdWx0IiwiZmJhc2Vfa2V5IiwibG9jYWxLZXkiLCJzdGFydFNpZ25JblBob25lTWZhIiwiZmluYWxpemVTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluVG90cE1mYSIsIl9KU0xPQURfQ0FMTEJBQ0siLCJORVRXT1JLX1RJTUVPVVRfREVMQVkiLCJSZUNhcHRjaGFMb2FkZXJJbXBsIiwiaG9zdExhbmd1YWdlIiwibGlicmFyeVNlcGFyYXRlbHlMb2FkZWQiLCJsb2FkIiwiaGwiLCJpc0hvc3RMYW5ndWFnZVZhbGlkIiwic2hvdWxkUmVzb2x2ZUltbWVkaWF0ZWx5IiwicmVjYXB0Y2hhIiwid2lkZ2V0SWQiLCJvbmxvYWQiLCJjbGVhcmVkT25lSW5zdGFuY2UiLCJNb2NrUmVDYXB0Y2hhTG9hZGVySW1wbCIsIlJFQ0FQVENIQV9WRVJJRklFUl9UWVBFIiwiREVGQVVMVF9QQVJBTVMiLCJ0aGVtZSIsImRlc3Ryb3llZCIsInRva2VuQ2hhbmdlTGlzdGVuZXJzIiwicmVuZGVyUHJvbWlzZSIsImlzSW52aXNpYmxlIiwibWFrZVRva2VuQ2FsbGJhY2siLCJfcmVjYXB0Y2hhTG9hZGVyIiwidmFsaWRhdGVTdGFydGluZ1N0YXRlIiwiYXNzZXJ0Tm90RGVzdHJveWVkIiwiZ2V0QXNzZXJ0ZWRSZWNhcHRjaGEiLCJ0b2tlbkNoYW5nZSIsIm1ha2VSZW5kZXJQcm9taXNlIiwiX3Jlc2V0IiwiY2xlYXIiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJyZW1vdmVDaGlsZCIsInNpdGVrZXkiLCJoYXNDaGlsZE5vZGVzIiwiZXhpc3RpbmciLCJnbG9iYWxGdW5jIiwiaW5pdCIsImd1YXJhbnRlZWRFbXB0eSIsImRvbVJlYWR5IiwiQ29uZmlybWF0aW9uUmVzdWx0SW1wbCIsIm9uQ29uZmlybWF0aW9uIiwiY29uZmlybSIsImF1dGhDcmVkZW50aWFsIiwiYXBwVmVyaWZpZXIiLCJfdmVyaWZ5UGhvbmVOdW1iZXIiLCJwaG9uZUluZm9PcHRpb25zIiwic3RhcnRQaG9uZU1mYUVucm9sbG1lbnRSZXF1ZXN0Iiwic3RhcnRFbnJvbGxQaG9uZU1mYUFjdGlvbkNhbGxiYWNrIiwicmVxdWVzdFdpdGhSZWNhcHRjaGFWMiIsImluamVjdFJlY2FwdGNoYVYyVG9rZW4iLCJzdGFydFBob25lTWZhRW5yb2xsbWVudFJlc3BvbnNlIiwicGhvbmVTZXNzaW9uSW5mbyIsIm11bHRpRmFjdG9ySGludCIsIm11bHRpRmFjdG9yVWlkIiwic3RhcnRQaG9uZU1mYVNpZ25JblJlcXVlc3QiLCJzdGFydFNpZ25JblBob25lTWZhQWN0aW9uQ2FsbGJhY2siLCJzdGFydFBob25lTWZhU2lnbkluUmVzcG9uc2UiLCJwaG9uZVJlc3BvbnNlSW5mbyIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGVSZXF1ZXN0Iiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZUFjdGlvbkNhbGxiYWNrIiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZVJlc3BvbnNlIiwicmVjYXB0Y2hhVjJWZXJpZmllciIsInJlY2FwdGNoYVYyVG9rZW4iLCJyZWNhcHRjaGFWZXJzaW9uIiwiX1Bob25lQXV0aFByb3ZpZGVyIiwidmVyaWZ5UGhvbmVOdW1iZXIiLCJwaG9uZU9wdGlvbnMiLCJhcHBsaWNhdGlvblZlcmlmaWVyIiwiUEhPTkVfU0lHTl9JTl9NRVRIT0QiLCJfd2l0aERlZmF1bHRSZXNvbHZlciIsInJlc29sdmVyT3ZlcnJpZGUiLCJJZHBDcmVkZW50aWFsIiwiX2J1aWxkSWRwUmVxdWVzdCIsInNlc3Npb25JZCIsInJldHVybklkcENyZWRlbnRpYWwiLCJfc2lnbkluIiwiX3JlYXV0aCIsIl9saW5rIiwiQWJzdHJhY3RQb3B1cFJlZGlyZWN0T3BlcmF0aW9uIiwicGVuZGluZ1Byb21pc2UiLCJldmVudE1hbmFnZXIiLCJvbkV4ZWN1dGlvbiIsInJlZ2lzdGVyQ29uc3VtZXIiLCJvbkF1dGhFdmVudCIsInVybFJlc3BvbnNlIiwiZ2V0SWRwVGFzayIsIm9uRXJyb3IiLCJ1bnJlZ2lzdGVyQW5kQ2xlYW5VcCIsInVucmVnaXN0ZXJDb25zdW1lciIsImNsZWFuVXAiLCJfUE9MTF9XSU5ET1dfQ0xPU0VfVElNRU9VVCIsInJlc29sdmVySW50ZXJuYWwiLCJQb3B1cE9wZXJhdGlvbiIsImV4ZWN1dGVOb3ROdWxsIiwiX1BvcHVwT3BlcmF0aW9uIiwiYXV0aFdpbmRvdyIsInBvbGxJZCIsImN1cnJlbnRQb3B1cEFjdGlvbiIsImNhbmNlbCIsIl9vcGVuUG9wdXAiLCJhc3NvY2lhdGVkRXZlbnQiLCJfb3JpZ2luVmFsaWRhdGlvbiIsIl9pc0lmcmFtZVdlYlN0b3JhZ2VTdXBwb3J0ZWQiLCJpc1N1cHBvcnRlZCIsInBvbGxVc2VyQ2FuY2VsbGF0aW9uIiwiY2xvc2VkIiwiUEVORElOR19SRURJUkVDVF9LRVkiLCJyZWRpcmVjdE91dGNvbWVNYXAiLCJSZWRpcmVjdEFjdGlvbiIsInJlYWR5T3V0Y29tZSIsImhhc1BlbmRpbmdSZWRpcmVjdCIsIl9nZXRBbmRDbGVhclBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsInBlbmRpbmdSZWRpcmVjdEtleSIsInJlc29sdmVyUGVyc2lzdGVuY2UiLCJfc2V0UGVuZGluZ1JlZGlyZWN0U3RhdHVzIiwiX2NsZWFyUmVkaXJlY3RPdXRjb21lcyIsIl9zaWduSW5XaXRoUmVkaXJlY3QiLCJfb3BlblJlZGlyZWN0IiwiX3JlYXV0aGVudGljYXRlV2l0aFJlZGlyZWN0IiwicHJlcGFyZVVzZXJGb3JSZWRpcmVjdCIsIl9saW5rV2l0aFJlZGlyZWN0IiwiX2dldFJlZGlyZWN0UmVzdWx0IiwicmVzb2x2ZXJFeHRlcm4iLCJFVkVOVF9EVVBMSUNBVElPTl9DQUNIRV9EVVJBVElPTl9NUyIsIkF1dGhFdmVudE1hbmFnZXIiLCJjYWNoZWRFdmVudFVpZHMiLCJjb25zdW1lcnMiLCJxdWV1ZWRSZWRpcmVjdEV2ZW50IiwiaGFzSGFuZGxlZFBvdGVudGlhbFJlZGlyZWN0IiwibGFzdFByb2Nlc3NlZEV2ZW50VGltZSIsImF1dGhFdmVudENvbnN1bWVyIiwiaXNFdmVudEZvckNvbnN1bWVyIiwic2VuZFRvQ29uc3VtZXIiLCJzYXZlRXZlbnRUb0NhY2hlIiwib25FdmVudCIsImhhc0V2ZW50QmVlbkhhbmRsZWQiLCJoYW5kbGVkIiwiY29uc3VtZXIiLCJpc1JlZGlyZWN0RXZlbnQiLCJpc051bGxSZWRpcmVjdEV2ZW50IiwiZXZlbnRJZE1hdGNoZXMiLCJldmVudFVpZCIsInYiLCJfZ2V0UHJvamVjdENvbmZpZyIsIklQX0FERFJFU1NfUkVHRVgiLCJIVFRQX1JFR0VYIiwiX3ZhbGlkYXRlT3JpZ2luIiwiYXV0aG9yaXplZERvbWFpbnMiLCJkb21haW4iLCJtYXRjaERvbWFpbiIsImN1cnJlbnRVcmwiLCJob3N0bmFtZSIsImNlVXJsIiwiZXNjYXBlZERvbWFpblBhdHRlcm4iLCJORVRXT1JLX1RJTUVPVVQiLCJyZXNldFVubG9hZGVkR2FwaU1vZHVsZXMiLCJiZWFjb24iLCJfX19qc2wiLCJIIiwiaGludCIsInIiLCJMIiwiQ1AiLCJsb2FkR2FwaSIsImxvYWRHYXBpSWZyYW1lIiwiZ2FwaSIsImlmcmFtZXMiLCJnZXRDb250ZXh0Iiwib250aW1lb3V0IiwiSWZyYW1lIiwiY2JOYW1lIiwiY2FjaGVkR0FwaUxvYWRlciIsIl9sb2FkR2FwaSIsIlBJTkdfVElNRU9VVCIsIklGUkFNRV9QQVRIIiwiRU1VTEFURURfSUZSQU1FX1BBVEgiLCJJRlJBTUVfQVRUUklCVVRFUyIsInRvcCIsImhlaWdodCIsInRhYmluZGV4IiwiRUlEX0ZST01fQVBJSE9TVCIsImdldElmcmFtZVVybCIsImVpZCIsImZ3IiwiX29wZW5JZnJhbWUiLCJjb250ZXh0IiwiZ2FwaTIiLCJ3aGVyZSIsIm1lc3NhZ2VIYW5kbGVyc0ZpbHRlciIsIkNST1NTX09SSUdJTl9JRlJBTUVTX0ZJTFRFUiIsImF0dHJpYnV0ZXMiLCJkb250Y2xlYXIiLCJpZnJhbWUiLCJyZXN0eWxlIiwic2V0SGlkZU9uTGVhdmUiLCJuZXR3b3JrRXJyb3IiLCJuZXR3b3JrRXJyb3JUaW1lciIsImNsZWFyVGltZXJBbmRSZXNvbHZlIiwicGluZyIsIkJBU0VfUE9QVVBfT1BUSU9OUyIsInJlc2l6YWJsZSIsInN0YXR1c2JhciIsInRvb2xiYXIiLCJERUZBVUxUX1dJRFRIIiwiREVGQVVMVF9IRUlHSFQiLCJUQVJHRVRfQkxBTksiLCJGSVJFRk9YX0VNUFRZX1VSTCIsIkF1dGhQb3B1cCIsIndpbmRvdzIiLCJfb3BlbiIsInNjcmVlbiIsImF2YWlsSGVpZ2h0IiwiYXZhaWxXaWR0aCIsInNjcm9sbGJhcnMiLCJvcHRpb25zU3RyaW5nIiwiZW50cmllcyIsInJlZHVjZSIsImFjY3VtIiwib3BlbkFzTmV3V2luZG93SU9TIiwibmV3V2luIiwiZm9jdXMiLCJjbGljayIsImNyZWF0ZUV2ZW50IiwiaW5pdE1vdXNlRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiV0lER0VUX1BBVEgiLCJFTVVMQVRPUl9XSURHRVRfUEFUSCIsIkZJUkVCQVNFX0FQUF9DSEVDS19GUkFHTUVOVF9JRCIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9nZXRSZWRpcmVjdFVybCIsImF1dGhUeXBlIiwicmVkaXJlY3RVcmwiLCJhZGRpdGlvbmFsUGFyYW1zIiwiaXNFbXB0eSIsInRpZCIsInBhcmFtc0RpY3QiLCJhcHBDaGVja1Rva2VuRnJhZ21lbnQiLCJnZXRIYW5kbGVyQmFzZSIsIldFQl9TVE9SQUdFX1NVUFBPUlRfS0VZIiwiQnJvd3NlclBvcHVwUmVkaXJlY3RSZXNvbHZlciIsImV2ZW50TWFuYWdlcnMiLCJvcmlnaW5WYWxpZGF0aW9uUHJvbWlzZXMiLCJwcm9taXNlMiIsImluaXRBbmRHZXRNYW5hZ2VyIiwicmVnaXN0ZXIiLCJpZnJhbWVFdmVudCIsImF1dGhFdmVudCIsInNlbmQiLCJNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZmluYWxpemVFbnJvbGwiLCJfZmluYWxpemVTaWduSW4iLCJQaG9uZU11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9QaG9uZU11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tQ3JlZGVudGlhbCIsInBob25lVmVyaWZpY2F0aW9uSW5mbyIsIkZBQ1RPUl9JRCIsImFzc2VydGlvbkZvckVucm9sbG1lbnQiLCJvbmVUaW1lUGFzc3dvcmQiLCJUb3RwTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2Zyb21TZWNyZXQiLCJhc3NlcnRpb25Gb3JTaWduSW4iLCJlbnJvbGxtZW50SWQiLCJfZnJvbUVucm9sbG1lbnRJZCIsImdlbmVyYXRlU2VjcmV0IiwibWZhU2Vzc2lvbiIsInRvdHBFbnJvbGxtZW50SW5mbyIsIl9mcm9tU3RhcnRUb3RwTWZhRW5yb2xsbWVudFJlc3BvbnNlIiwiX1RvdHBNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJvdHAiLCJ0b3RwVmVyaWZpY2F0aW9uSW5mbyIsIl9tYWtlVG90cFZlcmlmaWNhdGlvbkluZm8iLCJfVG90cFNlY3JldCIsInNlY3JldEtleSIsImhhc2hpbmdBbGdvcml0aG0iLCJjb2RlTGVuZ3RoIiwiY29kZUludGVydmFsU2Vjb25kcyIsImVucm9sbG1lbnRDb21wbGV0aW9uRGVhZGxpbmUiLCJ0b3RwU2Vzc2lvbkluZm8iLCJzaGFyZWRTZWNyZXRLZXkiLCJ2ZXJpZmljYXRpb25Db2RlTGVuZ3RoIiwicGVyaW9kU2VjIiwiZmluYWxpemVFbnJvbGxtZW50VGltZSIsImdlbmVyYXRlUXJDb2RlVXJsIiwiYWNjb3VudE5hbWUiLCJpc3N1ZXIiLCJ1c2VEZWZhdWx0cyIsIl9pc0VtcHR5U3RyaW5nIiwiaW5wdXQiLCJBdXRoSW50ZXJvcCIsImludGVybmFsTGlzdGVuZXJzIiwiZ2V0VWlkIiwiYXNzZXJ0QXV0aENvbmZpZ3VyZWQiLCJhZGRBdXRoVG9rZW5MaXN0ZW5lciIsInVwZGF0ZVByb2FjdGl2ZVJlZnJlc2giLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsImdldFZlcnNpb25Gb3JQbGF0Zm9ybSIsInJlZ2lzdGVyQXV0aCIsIl9yZWdpc3RlckNvbXBvbmVudCIsImltcG9ydF9jb21wb25lbnQiLCJDb21wb25lbnQiLCJnZXRQcm92aWRlciIsInNldEluc3RhbnRpYXRpb25Nb2RlIiwic2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2siLCJfaW5zdGFuY2VJZGVudGlmaWVyIiwiX2luc3RhbmNlIiwiYXV0aEludGVybmFsUHJvdmlkZXIiLCJyZWdpc3RlclZlcnNpb24iLCJERUZBVUxUX0lEX1RPS0VOX01BWF9BR0UiLCJhdXRoSWRUb2tlbk1heEFnZSIsImdldEV4cGVyaW1lbnRhbFNldHRpbmciLCJsYXN0UG9zdGVkSWRUb2tlbiIsIm1pbnRDb29raWVGYWN0b3J5IiwiaWRUb2tlblJlc3VsdCIsImlkVG9rZW5BZ2UiLCJnZXRBcHAiLCJhdXRoVG9rZW5TeW5jUGF0aCIsImF1dGhUb2tlblN5bmNVcmwiLCJtaW50Q29va2llIiwiYXV0aEVtdWxhdG9ySG9zdCIsImdldERlZmF1bHRFbXVsYXRvckhvc3QiLCJnZXRTY3JpcHRQYXJlbnRFbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJvbmVycm9yIiwiY2hhcnNldCIsImltcG9ydF9hcHAyIiwicmVxdWlyZSIsImltcG9ydF91dGlsMiIsImltcG9ydF9sb2dnZXIyIiwiaW1wb3J0X3RzbGliMiIsImltcG9ydF9jb21wb25lbnQyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxRQUFBLENBQUFELG1CQUFBO0VBQUFFLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFDLDBDQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxhQUFB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SyxZQUFBLENBQVk7MENBQUE7UUFDMUJMLEtBQUEsQ0FBTW1KLFVBQUEsR0FBYTFCLENBQUE7UUFDbkJxQixNQUFBLENBQU85SSxLQUFLO01BQ2Q7TUFDQXlvQixFQUFBLENBQUd6VCxJQUFBLEdBQU87TUFDVnlULEVBQUEsQ0FBRzB2QixPQUFBLEdBQVU7TUFDYkosc0JBQUEsQ0FBc0IsRUFBR3J1QixXQUFBLENBQVlqQixFQUFFO0lBQ3pDLENBQUM7O0VBR0h0RyxVQUFBLEVBQVk7RUFDWkYsaUJBQUEsRUFBbUI7RUFDbkJDLHlCQUFBLEVBQ0U7QUFDSDtBQUVEcTBCLFlBQUEsQ0FBWTs0QkFBQTs7O0FDaEpaLElBQUE2QixXQUFBLEdBQU9DLE9BQUE7QUFDUCxJQUFBQyxZQUFBLEdBQU9ELE9BQUE7QUFDUCxJQUFBRSxjQUFBLEdBQU9GLE9BQUE7QUFDUCxJQUFBRyxhQUFBLEdBQU9ILE9BQUE7QUFDUCxJQUFBSSxpQkFBQSxHQUFPSixPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9ydmQvb3V0In0=