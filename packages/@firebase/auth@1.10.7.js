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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXV0aC4xLjEwLjcuanMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21vZGVsL2VudW1fbWFwcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9sb2cudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9hc3NlcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9sb2NhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL25hdmlnYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2RlbGF5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9mZXRjaF9wcm92aWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9yZWNhcHRjaGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvYWNjb3VudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3RpbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9pZF90b2tlbl9yZXN1bHQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9pbnZhbGlkYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9wcm9hY3RpdmVfcmVmcmVzaC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfbWV0YWRhdGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWxvYWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Rva2VuX21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9pbnN0YW50aWF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvaW5fbWVtb3J5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL3BlcnNpc3RlbmNlX3VzZXJfbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92ZXJzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL3Bhc3N3b3JkX3BvbGljeS9nZXRfcGFzc3dvcmRfcG9saWN5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvcGFzc3dvcmRfcG9saWN5X2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbG9hZF9qcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX21vY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9lbnRlcnByaXNlX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvaW5pdGlhbGl6ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2F1dGhfY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc21zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2FjdGlvbl9jb2RlX3VybC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZlZGVyYXRlZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZhY2Vib29rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9nb29nbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dpdGh1Yi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy90d2l0dGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc2lnbl91cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfY3JlZGVudGlhbF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYW5vbnltb3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Vycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcHJvdmlkZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvbGlua191bmxpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWF1dGhlbnRpY2F0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2FjdGlvbl9jb2RlX3NldHRpbmdzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2NyZWF0ZV9hdXRoX3VyaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L3Byb2ZpbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hY2NvdW50X2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hZGRpdGlvbmFsX3VzZXJfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9zZXNzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV91c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvbG9jYWxfc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9jb29raWVfc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9zZXNzaW9uX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcHJvbWlzZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9yZWNlaXZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2V2ZW50X2lkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3NlbmRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9hdXRoX3dpbmRvdy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3dvcmtlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9pbmRleGVkX2RiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbG9hZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfdmVyaWZpZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wcm92aWRlcnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fic3RyYWN0X3BvcHVwX3JlZGlyZWN0X29wZXJhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfZXZlbnRfbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL3Byb2plY3RfY29uZmlnL2dldF9wcm9qZWN0X2NvbmZpZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZhbGlkYXRlX29yaWdpbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pZnJhbWUvZ2FwaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pZnJhbWUvaWZyYW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3V0aWwvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9oYW5kbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BvcHVwX3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Fzc2VydGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZmEvYXNzZXJ0aW9ucy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL2Fzc2VydGlvbnMvdG90cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2ZpcmViYXNlX2ludGVybmFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvcmVnaXN0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvZGlzdC9lc20yMDE3L2luZGV4LmpzIl0sIm5hbWVzIjpbImF1dGhfMV8xMF83X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFjdGlvbkNvZGVPcGVyYXRpb24iLCJBY3Rpb25Db2RlVVJMIiwiQXV0aENyZWRlbnRpYWwiLCJBdXRoRXJyb3JDb2RlcyIsIkFVVEhfRVJST1JfQ09ERVNfTUFQX0RPX05PVF9VU0VfSU5URVJOQUxMWSIsIkVtYWlsQXV0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiRmFjdG9ySWQiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJPQXV0aENyZWRlbnRpYWwiLCJPQXV0aFByb3ZpZGVyIiwiT3BlcmF0aW9uVHlwZSIsIlBob25lQXV0aENyZWRlbnRpYWwiLCJQaG9uZUF1dGhQcm92aWRlciIsIlBob25lTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJQcm92aWRlcklkIiwiUmVjYXB0Y2hhVmVyaWZpZXIiLCJTQU1MQXV0aFByb3ZpZGVyIiwiU2lnbkluTWV0aG9kIiwiVG90cE11bHRpRmFjdG9yR2VuZXJhdG9yIiwiVG90cFNlY3JldCIsIlR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJhcHBseUFjdGlvbkNvZGUiLCJiZWZvcmVBdXRoU3RhdGVDaGFuZ2VkIiwiYnJvd3NlckNvb2tpZVBlcnNpc3RlbmNlIiwiYnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJicm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsImNoZWNrQWN0aW9uQ29kZSIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29ubmVjdEF1dGhFbXVsYXRvciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRlYnVnRXJyb3JNYXAiLCJkZWxldGVVc2VyIiwiZmV0Y2hTaWduSW5NZXRob2RzRm9yRW1haWwiLCJnZXRBZGRpdGlvbmFsVXNlckluZm8iLCJnZXRBdXRoIiwiZ2V0SWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJnZXRNdWx0aUZhY3RvclJlc29sdmVyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJpbk1lbW9yeVBlcnNpc3RlbmNlIiwiaW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsImluaXRpYWxpemVBdXRoIiwiaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImlzU2lnbkluV2l0aEVtYWlsTGluayIsImxpbmtXaXRoQ3JlZGVudGlhbCIsImxpbmtXaXRoUGhvbmVOdW1iZXIiLCJsaW5rV2l0aFBvcHVwIiwibGlua1dpdGhSZWRpcmVjdCIsIm11bHRpRmFjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwib25JZFRva2VuQ2hhbmdlZCIsInBhcnNlQWN0aW9uQ29kZVVSTCIsInByb2RFcnJvck1hcCIsInJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQaG9uZU51bWJlciIsInJlYXV0aGVudGljYXRlV2l0aFBvcHVwIiwicmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJyZWxvYWQiLCJyZXZva2VBY2Nlc3NUb2tlbiIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJzZXRQZXJzaXN0ZW5jZSIsInNpZ25JbkFub255bW91c2x5Iiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbExpbmsiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJzaWduT3V0IiwidW5saW5rIiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGhvbmVOdW1iZXIiLCJ1cGRhdGVQcm9maWxlIiwidXNlRGV2aWNlTGFuZ3VhZ2UiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwidmVyaWZ5QmVmb3JlVXBkYXRlRW1haWwiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJQSE9ORSIsIlRPVFAiLCJGQUNFQk9PSyIsIkdJVEhVQiIsIkdPT0dMRSIsIlBBU1NXT1JEIiwiVFdJVFRFUiIsIkVNQUlMX0xJTksiLCJFTUFJTF9QQVNTV09SRCIsIkxJTksiLCJSRUFVVEhFTlRJQ0FURSIsIlNJR05fSU4iLCJFTUFJTF9TSUdOSU4iLCJQQVNTV09SRF9SRVNFVCIsIlJFQ09WRVJfRU1BSUwiLCJSRVZFUlRfU0VDT05EX0ZBQ1RPUl9BRERJVElPTiIsIlZFUklGWV9BTkRfQ0hBTkdFX0VNQUlMIiwiVkVSSUZZX0VNQUlMIiwiX2RlYnVnRXJyb3JNYXAiLCJfcHJvZEVycm9yTWFwIiwiX0RFRkFVTFRfQVVUSF9FUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJFcnJvckZhY3RvcnkiLCJBRE1JTl9PTkxZX09QRVJBVElPTiIsIkFSR1VNRU5UX0VSUk9SIiwiQVBQX05PVF9BVVRIT1JJWkVEIiwiQVBQX05PVF9JTlNUQUxMRUQiLCJDQVBUQ0hBX0NIRUNLX0ZBSUxFRCIsIkNPREVfRVhQSVJFRCIsIkNPUkRPVkFfTk9UX1JFQURZIiwiQ09SU19VTlNVUFBPUlRFRCIsIkNSRURFTlRJQUxfQUxSRUFEWV9JTl9VU0UiLCJDUkVERU5USUFMX01JU01BVENIIiwiQ1JFREVOVElBTF9UT09fT0xEX0xPR0lOX0FHQUlOIiwiREVQRU5ERU5UX1NES19JTklUX0JFRk9SRV9BVVRIIiwiRFlOQU1JQ19MSU5LX05PVF9BQ1RJVkFURUQiLCJFTUFJTF9DSEFOR0VfTkVFRFNfVkVSSUZJQ0FUSU9OIiwiRU1BSUxfRVhJU1RTIiwiRU1VTEFUT1JfQ09ORklHX0ZBSUxFRCIsIkVYUElSRURfT09CX0NPREUiLCJFWFBJUkVEX1BPUFVQX1JFUVVFU1QiLCJJTlRFUk5BTF9FUlJPUiIsIklOVkFMSURfQVBJX0tFWSIsIklOVkFMSURfQVBQX0NSRURFTlRJQUwiLCJJTlZBTElEX0FQUF9JRCIsIklOVkFMSURfQVVUSCIsIklOVkFMSURfQVVUSF9FVkVOVCIsIklOVkFMSURfQ0VSVF9IQVNIIiwiSU5WQUxJRF9DT0RFIiwiSU5WQUxJRF9DT05USU5VRV9VUkkiLCJJTlZBTElEX0NPUkRPVkFfQ09ORklHVVJBVElPTiIsIklOVkFMSURfQ1VTVE9NX1RPS0VOIiwiSU5WQUxJRF9EWU5BTUlDX0xJTktfRE9NQUlOIiwiSU5WQUxJRF9FTUFJTCIsIklOVkFMSURfRU1VTEFUT1JfU0NIRU1FIiwiSU5WQUxJRF9JRFBfUkVTUE9OU0UiLCJJTlZBTElEX0xPR0lOX0NSRURFTlRJQUxTIiwiSU5WQUxJRF9NRVNTQUdFX1BBWUxPQUQiLCJJTlZBTElEX01GQV9TRVNTSU9OIiwiSU5WQUxJRF9PQVVUSF9DTElFTlRfSUQiLCJJTlZBTElEX09BVVRIX1BST1ZJREVSIiwiSU5WQUxJRF9PT0JfQ09ERSIsIklOVkFMSURfT1JJR0lOIiwiSU5WQUxJRF9QQVNTV09SRCIsIklOVkFMSURfUEVSU0lTVEVOQ0UiLCJJTlZBTElEX1BIT05FX05VTUJFUiIsIklOVkFMSURfUFJPVklERVJfSUQiLCJJTlZBTElEX1JFQ0lQSUVOVF9FTUFJTCIsIklOVkFMSURfU0VOREVSIiwiSU5WQUxJRF9TRVNTSU9OX0lORk8iLCJJTlZBTElEX1RFTkFOVF9JRCIsIk1GQV9JTkZPX05PVF9GT1VORCIsIk1GQV9SRVFVSVJFRCIsIk1JU1NJTkdfQU5EUk9JRF9QQUNLQUdFX05BTUUiLCJNSVNTSU5HX0FQUF9DUkVERU5USUFMIiwiTUlTU0lOR19BVVRIX0RPTUFJTiIsIk1JU1NJTkdfQ09ERSIsIk1JU1NJTkdfQ09OVElOVUVfVVJJIiwiTUlTU0lOR19JRlJBTUVfU1RBUlQiLCJNSVNTSU5HX0lPU19CVU5ETEVfSUQiLCJNSVNTSU5HX09SX0lOVkFMSURfTk9OQ0UiLCJNSVNTSU5HX01GQV9JTkZPIiwiTUlTU0lOR19NRkFfU0VTU0lPTiIsIk1JU1NJTkdfUEhPTkVfTlVNQkVSIiwiTUlTU0lOR19TRVNTSU9OX0lORk8iLCJNT0RVTEVfREVTVFJPWUVEIiwiTkVFRF9DT05GSVJNQVRJT04iLCJORVRXT1JLX1JFUVVFU1RfRkFJTEVEIiwiTlVMTF9VU0VSIiwiTk9fQVVUSF9FVkVOVCIsIk5PX1NVQ0hfUFJPVklERVIiLCJPUEVSQVRJT05fTk9UX0FMTE9XRUQiLCJPUEVSQVRJT05fTk9UX1NVUFBPUlRFRCIsIlBPUFVQX0JMT0NLRUQiLCJQT1BVUF9DTE9TRURfQllfVVNFUiIsIlBST1ZJREVSX0FMUkVBRFlfTElOS0VEIiwiUVVPVEFfRVhDRUVERUQiLCJSRURJUkVDVF9DQU5DRUxMRURfQllfVVNFUiIsIlJFRElSRUNUX09QRVJBVElPTl9QRU5ESU5HIiwiUkVKRUNURURfQ1JFREVOVElBTCIsIlNFQ09ORF9GQUNUT1JfQUxSRUFEWV9FTlJPTExFRCIsIlNFQ09ORF9GQUNUT1JfTElNSVRfRVhDRUVERUQiLCJURU5BTlRfSURfTUlTTUFUQ0giLCJUSU1FT1VUIiwiVE9LRU5fRVhQSVJFRCIsIlRPT19NQU5ZX0FUVEVNUFRTX1RSWV9MQVRFUiIsIlVOQVVUSE9SSVpFRF9ET01BSU4iLCJVTlNVUFBPUlRFRF9GSVJTVF9GQUNUT1IiLCJVTlNVUFBPUlRFRF9QRVJTSVNURU5DRSIsIlVOU1VQUE9SVEVEX1RFTkFOVF9PUEVSQVRJT04iLCJVTlZFUklGSUVEX0VNQUlMIiwiVVNFUl9DQU5DRUxMRUQiLCJVU0VSX0RFTEVURUQiLCJVU0VSX0RJU0FCTEVEIiwiVVNFUl9NSVNNQVRDSCIsIlVTRVJfU0lHTkVEX09VVCIsIldFQUtfUEFTU1dPUkQiLCJXRUJfU1RPUkFHRV9VTlNVUFBPUlRFRCIsIkFMUkVBRFlfSU5JVElBTElaRUQiLCJSRUNBUFRDSEFfTk9UX0VOQUJMRUQiLCJNSVNTSU5HX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfQUNUSU9OIiwiTUlTU0lOR19DTElFTlRfVFlQRSIsIk1JU1NJTkdfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRVFfVFlQRSIsIklOVkFMSURfSE9TVElOR19MSU5LX0RPTUFJTiIsImxvZ0NsaWVudCIsImltcG9ydF9sb2dnZXIiLCJMb2dnZXIiLCJfbG9nV2FybiIsIm1zZyIsImFyZ3MiLCJsb2dMZXZlbCIsIkxvZ0xldmVsIiwiV0FSTiIsIndhcm4iLCJpbXBvcnRfYXBwIiwiU0RLX1ZFUlNJT04iLCJfbG9nRXJyb3IiLCJFUlJPUiIsImVycm9yIiwiX2ZhaWwiLCJhdXRoT3JDb2RlIiwicmVzdCIsImNyZWF0ZUVycm9ySW50ZXJuYWwiLCJfY3JlYXRlRXJyb3IiLCJfZXJyb3JXaXRoQ3VzdG9tTWVzc2FnZSIsImF1dGgiLCJjb2RlIiwibWVzc2FnZSIsImVycm9yTWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiZmFjdG9yeSIsImNyZWF0ZSIsImFwcE5hbWUiLCJuYW1lIiwiX3NlcnZlckFwcEN1cnJlbnRVc2VyT3BlcmF0aW9uTm90U3VwcG9ydGVkRXJyb3IiLCJfYXNzZXJ0SW5zdGFuY2VPZiIsIm9iamVjdCIsImluc3RhbmNlIiwiY29uc3RydWN0b3JJbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiZnVsbFBhcmFtcyIsInNsaWNlIiwiX2Vycm9yRmFjdG9yeSIsIl9hc3NlcnQiLCJhc3NlcnRpb24iLCJkZWJ1Z0ZhaWwiLCJmYWlsdXJlIiwiRXJyb3IiLCJkZWJ1Z0Fzc2VydCIsIl9nZXRDdXJyZW50VXJsIiwic2VsZiIsIl9hIiwibG9jYXRpb24iLCJocmVmIiwiX2lzSHR0cE9ySHR0cHMiLCJfZ2V0Q3VycmVudFNjaGVtZSIsInByb3RvY29sIiwiX2lzT25saW5lIiwibmF2aWdhdG9yIiwib25MaW5lIiwiaXNCcm93c2VyRXh0ZW5zaW9uIiwiX2dldFVzZXJMYW5ndWFnZSIsIm5hdmlnYXRvckxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJEZWxheSIsInNob3J0RGVsYXkiLCJsb25nRGVsYXkiLCJpc01vYmlsZSIsImlzTW9iaWxlQ29yZG92YSIsImlzUmVhY3ROYXRpdmUiLCJnZXQiLCJNYXRoIiwibWluIiwiX2VtdWxhdG9yVXJsIiwiY29uZmlnIiwicGF0aCIsImVtdWxhdG9yIiwidXJsIiwic3RhcnRzV2l0aCIsIkZldGNoUHJvdmlkZXIiLCJpbml0aWFsaXplIiwiZmV0Y2hJbXBsIiwiaGVhZGVyc0ltcGwiLCJyZXNwb25zZUltcGwiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJoZWFkZXJzIiwiSGVhZGVycyIsInJlc3BvbnNlIiwiUmVzcG9uc2UiLCJTRVJWRVJfRVJST1JfTUFQIiwiQ29va2llQXV0aFByb3hpZWRFbmRwb2ludHMiLCJERUZBVUxUX0FQSV9USU1FT1VUX01TIiwiX2FkZFRpZElmTmVjZXNzYXJ5IiwicmVxdWVzdCIsInRlbmFudElkIiwiX3BlcmZvcm1BcGlSZXF1ZXN0IiwibWV0aG9kIiwiY3VzdG9tRXJyb3JNYXAiLCJfcGVyZm9ybUZldGNoV2l0aEVycm9ySGFuZGxpbmciLCJib2R5IiwicGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwicXVlcnlzdHJpbmciLCJrZXkiLCJhcGlLZXkiLCJfZ2V0QWRkaXRpb25hbEhlYWRlcnMiLCJsYW5ndWFnZUNvZGUiLCJmZXRjaEFyZ3MiLCJpc0Nsb3VkZmxhcmVXb3JrZXIiLCJyZWZlcnJlclBvbGljeSIsImVtdWxhdG9yQ29uZmlnIiwiaXNDbG91ZFdvcmtzdGF0aW9uIiwiaG9zdCIsImNyZWRlbnRpYWxzIiwiX2dldEZpbmFsVGFyZ2V0IiwiYXBpSG9zdCIsImZldGNoRm4iLCJfY2FuSW5pdEVtdWxhdG9yIiwibmV0d29ya1RpbWVvdXQiLCJOZXR3b3JrVGltZW91dCIsIlByb21pc2UiLCJyYWNlIiwicHJvbWlzZSIsImNsZWFyTmV0d29ya1RpbWVvdXQiLCJqc29uIiwiX21ha2VUYWdnZWRFcnJvciIsIm9rIiwiZXJyb3JNZXNzYWdlIiwic2VydmVyRXJyb3JDb2RlIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic3BsaXQiLCJhdXRoRXJyb3IiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJlIiwiRmlyZWJhc2VFcnJvciIsIlN0cmluZyIsIl9wZXJmb3JtU2lnbkluUmVxdWVzdCIsInNlcnZlclJlc3BvbnNlIiwiX3NlcnZlclJlc3BvbnNlIiwiYmFzZSIsImF1dGhJbnRlcm5hbCIsImZpbmFsVGFyZ2V0IiwiYXBpU2NoZW1lIiwiaW5jbHVkZXMiLCJfcGVyc2lzdGVuY2VNYW5hZ2VyQXZhaWxhYmxlIiwiX2dldFBlcnNpc3RlbmNlVHlwZSIsImNvb2tpZVBlcnNpc3RlbmNlIiwiX2dldFBlcnNpc3RlbmNlIiwidG9TdHJpbmciLCJfcGFyc2VFbmZvcmNlbWVudFN0YXRlIiwiZW5mb3JjZW1lbnRTdGF0ZVN0ciIsImNsZWFyVGltZW91dCIsInRpbWVyIiwiXyIsInJlamVjdCIsInNldFRpbWVvdXQiLCJlcnJvclBhcmFtcyIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJjdXN0b21EYXRhIiwiX3Rva2VuUmVzcG9uc2UiLCJpc1YyIiwiZ3JlY2FwdGNoYSIsImdldFJlc3BvbnNlIiwiaXNFbnRlcnByaXNlIiwiZW50ZXJwcmlzZSIsIlJlY2FwdGNoYUNvbmZpZyIsInNpdGVLZXkiLCJyZWNhcHRjaGFFbmZvcmNlbWVudFN0YXRlIiwicmVjYXB0Y2hhS2V5IiwiZ2V0UHJvdmlkZXJFbmZvcmNlbWVudFN0YXRlIiwicHJvdmlkZXJTdHIiLCJsZW5ndGgiLCJwcm92aWRlciIsImVuZm9yY2VtZW50U3RhdGUiLCJpc1Byb3ZpZGVyRW5hYmxlZCIsImlzQW55UHJvdmlkZXJFbmFibGVkIiwiZ2V0UmVjYXB0Y2hhUGFyYW1zIiwicmVjYXB0Y2hhU2l0ZUtleSIsImdldFJlY2FwdGNoYUNvbmZpZyIsImRlbGV0ZUFjY291bnQiLCJkZWxldGVMaW5rZWRBY2NvdW50cyIsImdldEFjY291bnRJbmZvIiwidXRjVGltZXN0YW1wVG9EYXRlU3RyaW5nIiwidXRjVGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJOdW1iZXIiLCJpc05hTiIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsInVzZXIiLCJmb3JjZVJlZnJlc2giLCJnZXRNb2R1bGFySW5zdGFuY2UiLCJ1c2VySW50ZXJuYWwiLCJ0b2tlbiIsImNsYWltcyIsIl9wYXJzZVRva2VuIiwiZXhwIiwiYXV0aF90aW1lIiwiaWF0IiwiZmlyZWJhc2UiLCJzaWduSW5Qcm92aWRlciIsImF1dGhUaW1lIiwic2Vjb25kc1N0cmluZ1RvTWlsbGlzZWNvbmRzIiwiaXNzdWVkQXRUaW1lIiwiZXhwaXJhdGlvblRpbWUiLCJzaWduSW5TZWNvbmRGYWN0b3IiLCJzZWNvbmRzIiwiYWxnb3JpdGhtIiwicGF5bG9hZCIsInNpZ25hdHVyZSIsImRlY29kZWQiLCJiYXNlNjREZWNvZGUiLCJwYXJzZSIsIl90b2tlbkV4cGlyZXNJbiIsInBhcnNlZFRva2VuIiwiX2xvZ291dElmSW52YWxpZGF0ZWQiLCJieXBhc3NBdXRoU3RhdGUiLCJpc1VzZXJJbnZhbGlkYXRlZCIsImN1cnJlbnRVc2VyIiwiUHJvYWN0aXZlUmVmcmVzaCIsImlzUnVubmluZyIsInRpbWVySWQiLCJlcnJvckJhY2tvZmYiLCJfc3RhcnQiLCJzY2hlZHVsZSIsIl9zdG9wIiwiZ2V0SW50ZXJ2YWwiLCJ3YXNFcnJvciIsImludGVydmFsIiwiZXhwVGltZSIsInN0c1Rva2VuTWFuYWdlciIsIm5vdyIsIm1heCIsIml0ZXJhdGlvbiIsIlVzZXJNZXRhZGF0YSIsImNyZWF0ZWRBdCIsImxhc3RMb2dpbkF0IiwiX2luaXRpYWxpemVUaW1lIiwibGFzdFNpZ25JblRpbWUiLCJjcmVhdGlvblRpbWUiLCJfY29weSIsIm1ldGFkYXRhIiwidG9KU09OIiwiX3JlbG9hZFdpdGhvdXRTYXZpbmciLCJpZFRva2VuIiwidXNlcnMiLCJjb3JlQWNjb3VudCIsIl9ub3RpZnlSZWxvYWRMaXN0ZW5lciIsIm5ld1Byb3ZpZGVyRGF0YSIsInByb3ZpZGVyVXNlckluZm8iLCJleHRyYWN0UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJEYXRhIiwibWVyZ2VQcm92aWRlckRhdGEiLCJvbGRJc0Fub255bW91cyIsImlzQW5vbnltb3VzIiwibmV3SXNBbm9ueW1vdXMiLCJwYXNzd29yZEhhc2giLCJ1cGRhdGVzIiwidWlkIiwibG9jYWxJZCIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJwaG90b1VybCIsImVtYWlsVmVyaWZpZWQiLCJfcGVyc2lzdFVzZXJJZkN1cnJlbnQiLCJfbm90aWZ5TGlzdGVuZXJzSWZDdXJyZW50Iiwib3JpZ2luYWwiLCJuZXdEYXRhIiwiZGVkdXBlZCIsImZpbHRlciIsIm8iLCJzb21lIiwibiIsInByb3ZpZGVySWQiLCJwcm92aWRlcnMiLCJtYXAiLCJpbXBvcnRfdHNsaWIiLCJfX3Jlc3QiLCJyYXdJZCIsInJlcXVlc3RTdHNUb2tlbiIsInJlZnJlc2hUb2tlbiIsInRva2VuQXBpSG9zdCIsIm9wdGlvbnMiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNJbiIsImV4cGlyZXNfaW4iLCJyZWZyZXNoX3Rva2VuIiwicmV2b2tlVG9rZW4iLCJTdHNUb2tlbk1hbmFnZXIiLCJfU3RzVG9rZW5NYW5hZ2VyIiwiaXNFeHBpcmVkIiwidXBkYXRlRnJvbVNlcnZlclJlc3BvbnNlIiwidXBkYXRlVG9rZW5zQW5kRXhwaXJhdGlvbiIsInVwZGF0ZUZyb21JZFRva2VuIiwiZ2V0VG9rZW4iLCJyZWZyZXNoIiwiY2xlYXJSZWZyZXNoVG9rZW4iLCJvbGRUb2tlbiIsImV4cGlyZXNJblNlYyIsImZyb21KU09OIiwibWFuYWdlciIsIl9hc3NpZ24iLCJfY2xvbmUiLCJfcGVyZm9ybVJlZnJlc2giLCJhc3NlcnRTdHJpbmdPclVuZGVmaW5lZCIsIlVzZXJJbXBsIiwiX1VzZXJJbXBsIiwib3B0IiwicHJvYWN0aXZlUmVmcmVzaCIsInJlbG9hZFVzZXJJbmZvIiwicmVsb2FkTGlzdGVuZXIiLCJ1c2VySW5mbyIsIm5ld1VzZXIiLCJfb25SZWxvYWQiLCJjYWxsYmFjayIsIl9zdGFydFByb2FjdGl2ZVJlZnJlc2giLCJfc3RvcFByb2FjdGl2ZVJlZnJlc2giLCJfdXBkYXRlVG9rZW5zSWZOZWNlc3NhcnkiLCJyZWxvYWQyIiwidG9rZW5zUmVmcmVzaGVkIiwiZGVsZXRlIiwiX2lzRmlyZWJhc2VTZXJ2ZXJBcHAiLCJhcHAiLCJfcmVkaXJlY3RFdmVudElkIiwiX2Zyb21KU09OIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJfZiIsIl9nIiwiX2giLCJwbGFpbk9iamVjdFRva2VuTWFuYWdlciIsIkFycmF5IiwiaXNBcnJheSIsIl9mcm9tSWRUb2tlblJlc3BvbnNlIiwiaWRUb2tlblJlc3BvbnNlIiwiX2Zyb21HZXRBY2NvdW50SW5mb1Jlc3BvbnNlIiwiaW5zdGFuY2VDYWNoZSIsIk1hcCIsIl9nZXRJbnN0YW5jZSIsImNscyIsIkZ1bmN0aW9uIiwic2V0IiwiSW5NZW1vcnlQZXJzaXN0ZW5jZSIsInR5cGUiLCJzdG9yYWdlIiwiX2lzQXZhaWxhYmxlIiwiX3NldCIsInZhbHVlIiwiX2dldCIsIl9yZW1vdmUiLCJfYWRkTGlzdGVuZXIiLCJfa2V5IiwiX2xpc3RlbmVyIiwiX3JlbW92ZUxpc3RlbmVyIiwiX3BlcnNpc3RlbmNlS2V5TmFtZSIsIlBlcnNpc3RlbmNlVXNlck1hbmFnZXIiLCJfUGVyc2lzdGVuY2VVc2VyTWFuYWdlciIsInBlcnNpc3RlbmNlIiwidXNlcktleSIsIm5hbWUyIiwiZnVsbFVzZXJLZXkiLCJmdWxsUGVyc2lzdGVuY2VLZXkiLCJib3VuZEV2ZW50SGFuZGxlciIsIl9vblN0b3JhZ2VFdmVudCIsImJpbmQiLCJzZXRDdXJyZW50VXNlciIsImdldEN1cnJlbnRVc2VyIiwiYmxvYiIsImNhdGNoIiwicmVtb3ZlQ3VycmVudFVzZXIiLCJzYXZlUGVyc2lzdGVuY2VGb3JSZWRpcmVjdCIsIm5ld1BlcnNpc3RlbmNlIiwicGVyc2lzdGVuY2VIaWVyYXJjaHkiLCJhdmFpbGFibGVQZXJzaXN0ZW5jZXMiLCJhbGwiLCJzZWxlY3RlZFBlcnNpc3RlbmNlIiwidXNlclRvTWlncmF0ZSIsIm1pZ3JhdGlvbkhpZXJhcmNoeSIsInAiLCJfc2hvdWxkQWxsb3dNaWdyYXRpb24iLCJfZ2V0QnJvd3Nlck5hbWUiLCJ1c2VyQWdlbnQiLCJ1YSIsIl9pc0lFTW9iaWxlIiwiX2lzRmlyZWZveCIsIl9pc0JsYWNrQmVycnkiLCJfaXNXZWJPUyIsIl9pc1NhZmFyaSIsIl9pc0Nocm9tZUlPUyIsIl9pc0FuZHJvaWQiLCJyZSIsIm1hdGNoZXMiLCJtYXRjaCIsImdldFVBIiwidGVzdCIsIl9pc0lPUyIsIl9pc0lPUzdPcjgiLCJfaXNJT1NTdGFuZGFsb25lIiwid2luZG93Iiwic3RhbmRhbG9uZSIsIl9pc0lFMTAiLCJpc0lFIiwiZG9jdW1lbnQiLCJkb2N1bWVudE1vZGUiLCJfaXNNb2JpbGVCcm93c2VyIiwiX2dldENsaWVudFZlcnNpb24iLCJjbGllbnRQbGF0Zm9ybSIsImZyYW1ld29ya3MiLCJyZXBvcnRlZFBsYXRmb3JtIiwicmVwb3J0ZWRGcmFtZXdvcmtzIiwiam9pbiIsIkF1dGhNaWRkbGV3YXJlUXVldWUiLCJxdWV1ZSIsInB1c2hDYWxsYmFjayIsIm9uQWJvcnQiLCJ3cmFwcGVkQ2FsbGJhY2siLCJyZXNvbHZlIiwicmVzdWx0IiwicHVzaCIsImluZGV4IiwicnVuTWlkZGxld2FyZSIsIm5leHRVc2VyIiwib25BYm9ydFN0YWNrIiwiYmVmb3JlU3RhdGVDYWxsYmFjayIsInJldmVyc2UiLCJvcmlnaW5hbE1lc3NhZ2UiLCJfZ2V0UGFzc3dvcmRQb2xpY3kiLCJNSU5JTVVNX01JTl9QQVNTV09SRF9MRU5HVEgiLCJQYXNzd29yZFBvbGljeUltcGwiLCJyZXNwb25zZU9wdGlvbnMiLCJjdXN0b21TdHJlbmd0aE9wdGlvbnMiLCJtaW5QYXNzd29yZExlbmd0aCIsIm1heFBhc3N3b3JkTGVuZ3RoIiwiY29udGFpbnNMb3dlcmNhc2VDaGFyYWN0ZXIiLCJjb250YWluc0xvd2VyY2FzZUxldHRlciIsImNvbnRhaW5zVXBwZXJjYXNlQ2hhcmFjdGVyIiwiY29udGFpbnNVcHBlcmNhc2VMZXR0ZXIiLCJjb250YWluc051bWVyaWNDaGFyYWN0ZXIiLCJjb250YWluc05vbkFscGhhbnVtZXJpY0NoYXJhY3RlciIsImFsbG93ZWROb25BbHBoYW51bWVyaWNDaGFyYWN0ZXJzIiwiZm9yY2VVcGdyYWRlT25TaWduaW4iLCJzY2hlbWFWZXJzaW9uIiwicGFzc3dvcmQiLCJzdGF0dXMiLCJpc1ZhbGlkIiwicGFzc3dvcmRQb2xpY3kiLCJ2YWxpZGF0ZVBhc3N3b3JkTGVuZ3RoT3B0aW9ucyIsInZhbGlkYXRlUGFzc3dvcmRDaGFyYWN0ZXJPcHRpb25zIiwibWVldHNNaW5QYXNzd29yZExlbmd0aCIsIm1lZXRzTWF4UGFzc3dvcmRMZW5ndGgiLCJ1cGRhdGVQYXNzd29yZENoYXJhY3Rlck9wdGlvbnNTdGF0dXNlcyIsInBhc3N3b3JkQ2hhciIsImkiLCJjaGFyQXQiLCJBdXRoSW1wbCIsImhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlciIsImFwcENoZWNrU2VydmljZVByb3ZpZGVyIiwib3BlcmF0aW9ucyIsImF1dGhTdGF0ZVN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkVG9rZW5TdWJzY3JpcHRpb24iLCJiZWZvcmVTdGF0ZVF1ZXVlIiwicmVkaXJlY3RVc2VyIiwiaXNQcm9hY3RpdmVSZWZyZXNoRW5hYmxlZCIsIkVYUEVDVEVEX1BBU1NXT1JEX1BPTElDWV9TQ0hFTUFfVkVSU0lPTiIsIl9pc0luaXRpYWxpemVkIiwiX2RlbGV0ZWQiLCJfaW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiX3BvcHVwUmVkaXJlY3RSZXNvbHZlciIsIl9hZ2VudFJlY2FwdGNoYUNvbmZpZyIsIl90ZW5hbnRSZWNhcHRjaGFDb25maWdzIiwiX3Byb2plY3RQYXNzd29yZFBvbGljeSIsIl90ZW5hbnRQYXNzd29yZFBvbGljaWVzIiwiX3Jlc29sdmVQZXJzaXN0ZW5jZU1hbmFnZXJBdmFpbGFibGUiLCJsYXN0Tm90aWZpZWRVaWQiLCJzZXR0aW5ncyIsImFwcFZlcmlmaWNhdGlvbkRpc2FibGVkRm9yVGVzdGluZyIsImNsaWVudFZlcnNpb24iLCJzZGtDbGllbnRWZXJzaW9uIiwiX2luaXRpYWxpemVXaXRoUGVyc2lzdGVuY2UiLCJwb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJwZXJzaXN0ZW5jZU1hbmFnZXIiLCJjYWxsIiwiX3Nob3VsZEluaXRQcm9hY3RpdmVseSIsIl9pbml0aWFsaXplIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyIiwiYXNzZXJ0ZWRQZXJzaXN0ZW5jZSIsIl9jdXJyZW50VXNlciIsIl91cGRhdGVDdXJyZW50VXNlciIsImluaXRpYWxpemVDdXJyZW50VXNlckZyb21JZFRva2VuIiwiZGlyZWN0bHlTZXRDdXJyZW50VXNlciIsImVyciIsImNvbnNvbGUiLCJhdXRoSWRUb2tlbiIsInRoZW4iLCJwcmV2aW91c2x5U3RvcmVkVXNlciIsImZ1dHVyZUN1cnJlbnRVc2VyIiwibmVlZHNUb2NoZWNrTWlkZGxld2FyZSIsImF1dGhEb21haW4iLCJnZXRPckluaXRSZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsInJlZGlyZWN0VXNlckV2ZW50SWQiLCJzdG9yZWRVc2VyRXZlbnRJZCIsInRyeVJlZGlyZWN0U2lnbkluIiwiX292ZXJyaWRlUmVkaXJlY3RSZXN1bHQiLCJyZWxvYWRBbmRTZXRDdXJyZW50VXNlck9yQ2xlYXIiLCJyZWRpcmVjdFJlc29sdmVyIiwiX2NvbXBsZXRlUmVkaXJlY3RGbiIsIl9zZXRSZWRpcmVjdFVzZXIiLCJfZGVsZXRlIiwidXNlckV4dGVybiIsInNraXBCZWZvcmVTdGF0ZUNhbGxiYWNrcyIsIm5vdGlmeUF1dGhMaXN0ZW5lcnMiLCJyZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsIl9nZXRSZWNhcHRjaGFDb25maWciLCJfZ2V0UGFzc3dvcmRQb2xpY3lJbnRlcm5hbCIsIl91cGRhdGVQYXNzd29yZFBvbGljeSIsIl91cGRhdGVFcnJvck1hcCIsIm5leHRPck9ic2VydmVyIiwiY29tcGxldGVkIiwicmVnaXN0ZXJTdGF0ZUxpc3RlbmVyIiwiYXV0aFN0YXRlUmVhZHkiLCJ1bnN1YnNjcmliZSIsInRva2VuVHlwZSIsInJlZGlyZWN0TWFuYWdlciIsInJlc29sdmVyIiwiX3JlZGlyZWN0UGVyc2lzdGVuY2UiLCJfcmVkaXJlY3RVc2VyRm9ySWQiLCJpZCIsIm5leHQiLCJjdXJyZW50VWlkIiwic3Vic2NyaXB0aW9uIiwiY2IiLCJpc1Vuc3Vic2NyaWJlZCIsImFkZE9ic2VydmVyIiwiYWN0aW9uIiwiX2xvZ0ZyYW1ld29yayIsImZyYW1ld29yayIsInNvcnQiLCJfZ2V0RnJhbWV3b3JrcyIsImFwcElkIiwiaGVhcnRiZWF0c0hlYWRlciIsImdldEltbWVkaWF0ZSIsIm9wdGlvbmFsIiwiZ2V0SGVhcnRiZWF0c0hlYWRlciIsImFwcENoZWNrVG9rZW4iLCJfZ2V0QXBwQ2hlY2tUb2tlbiIsImFwcENoZWNrVG9rZW5SZXN1bHQiLCJfY2FzdEF1dGgiLCJvYnNlcnZlciIsImNyZWF0ZVN1YnNjcmliZSIsImV4dGVybmFsSlNQcm92aWRlciIsImxvYWRKUyIsInJlY2FwdGNoYVYyU2NyaXB0IiwicmVjYXB0Y2hhRW50ZXJwcmlzZVNjcmlwdCIsImdhcGlTY3JpcHQiLCJfc2V0RXh0ZXJuYWxKU1Byb3ZpZGVyIiwiX2xvYWRKUyIsIl9yZWNhcHRjaGFWMlNjcmlwdFVybCIsIl9yZWNhcHRjaGFFbnRlcnByaXNlU2NyaXB0VXJsIiwiX2dhcGlTY3JpcHRVcmwiLCJfZ2VuZXJhdGVDYWxsYmFja05hbWUiLCJwcmVmaXgiLCJmbG9vciIsInJhbmRvbSIsIl9TT0xWRV9USU1FX01TIiwiX0VYUElSQVRJT05fVElNRV9NUyIsIl9XSURHRVRfSURfU1RBUlQiLCJNb2NrUmVDYXB0Y2hhIiwiY291bnRlciIsIl93aWRnZXRzIiwicmVuZGVyIiwiY29udGFpbmVyIiwicGFyYW1ldGVycyIsIk1vY2tXaWRnZXQiLCJyZXNldCIsIm9wdFdpZGdldElkIiwiZXhlY3V0ZSIsIk1vY2tHcmVDQVBUQ0hBVG9wTGV2ZWwiLCJNb2NrR3JlQ0FQVENIQSIsInJlYWR5IiwiX3NpdGVLZXkiLCJfb3B0aW9ucyIsIl9jb250YWluZXIiLCJfcGFyYW1ldGVycyIsImNvbnRhaW5lck9ySWQiLCJkZWxldGVkIiwicmVzcG9uc2VUb2tlbiIsImNsaWNrSGFuZGxlciIsImdldEVsZW1lbnRCeUlkIiwiaXNWaXNpYmxlIiwic2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0lmRGVsZXRlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZW5lcmF0ZVJhbmRvbUFscGhhTnVtZXJpY1N0cmluZyIsImV4cGlyZWRDYWxsYmFjayIsImxlbiIsImNoYXJzIiwiYWxsb3dlZENoYXJzIiwiUkVDQVBUQ0hBX0VOVEVSUFJJU0VfVkVSSUZJRVJfVFlQRSIsIkZBS0VfVE9LRU4iLCJSZWNhcHRjaGFFbnRlcnByaXNlVmVyaWZpZXIiLCJhdXRoRXh0ZXJuIiwidmVyaWZ5IiwicmV0cmlldmVTaXRlS2V5IiwiY2xpZW50VHlwZSIsInZlcnNpb24iLCJyZXRyaWV2ZVJlY2FwdGNoYVRva2VuIiwibW9ja1JlY2FwdGNoYSIsImluamVjdFJlY2FwdGNoYUZpZWxkcyIsImlzQ2FwdGNoYVJlc3AiLCJpc0Zha2VUb2tlbiIsInZlcmlmaWVyIiwiY2FwdGNoYVJlc3BvbnNlIiwibmV3UmVxdWVzdCIsInBob25lRW5yb2xsbWVudEluZm8iLCJyZWNhcHRjaGFUb2tlbiIsInBob25lU2lnbkluSW5mbyIsImhhbmRsZVJlY2FwdGNoYUZsb3ciLCJhdXRoSW5zdGFuY2UiLCJhY3Rpb25OYW1lIiwiYWN0aW9uTWV0aG9kIiwicmVjYXB0Y2hhQXV0aFByb3ZpZGVyIiwicmVxdWVzdFdpdGhSZWNhcHRjaGEiLCJsb2ciLCJfYTIiLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYUZpZWxkcyIsIl9pbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiZGVwcyIsIl9nZXRQcm92aWRlciIsImlzSW5pdGlhbGl6ZWQiLCJhdXRoMiIsImluaXRpYWxPcHRpb25zIiwiZ2V0T3B0aW9ucyIsImRlZXBFcXVhbCIsIl9pbml0aWFsaXplQXV0aEluc3RhbmNlIiwiaGllcmFyY2h5IiwiZGlzYWJsZVdhcm5pbmdzIiwiZXh0cmFjdFByb3RvY29sIiwicG9ydCIsImV4dHJhY3RIb3N0QW5kUG9ydCIsInBvcnRTdHIiLCJmcmVlemUiLCJwaW5nU2VydmVyIiwidXBkYXRlRW11bGF0b3JCYW5uZXIiLCJlbWl0RW11bGF0b3JXYXJuaW5nIiwicHJvdG9jb2xFbmQiLCJpbmRleE9mIiwic3Vic3RyIiwiYXV0aG9yaXR5IiwiZXhlYyIsImhvc3RBbmRQb3J0IiwicG9wIiwiYnJhY2tldGVkSVB2NiIsInBhcnNlUG9ydCIsImF0dGFjaEJhbm5lciIsImVsIiwiY3JlYXRlRWxlbWVudCIsInN0eSIsInN0eWxlIiwiaW5uZXJUZXh0IiwicG9zaXRpb24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImNvbG9yIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbiIsInpJbmRleCIsInRleHRBbGlnbiIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiaW5mbyIsInJlYWR5U3RhdGUiLCJzaWduSW5NZXRob2QiLCJfZ2V0SWRUb2tlblJlc3BvbnNlIiwiX2F1dGgiLCJfbGlua1RvSWRUb2tlbiIsIl9pZFRva2VuIiwiX2dldFJlYXV0aGVudGljYXRpb25SZXNvbHZlciIsInJlc2V0UGFzc3dvcmQiLCJ1cGRhdGVFbWFpbFBhc3N3b3JkIiwibGlua0VtYWlsUGFzc3dvcmQiLCJhcHBseUFjdGlvbkNvZGUkMSIsInNpZ25JbldpdGhQYXNzd29yZCIsInNlbmRPb2JDb2RlIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uJDEiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsJDEiLCJzZW5kU2lnbkluTGlua1RvRW1haWwkMSIsInZlcmlmeUFuZENoYW5nZUVtYWlsIiwic2lnbkluV2l0aEVtYWlsTGluayQxIiwic2lnbkluV2l0aEVtYWlsTGlua0ZvckxpbmtpbmciLCJfRW1haWxBdXRoQ3JlZGVudGlhbCIsIl9lbWFpbCIsIl9wYXNzd29yZCIsIl90ZW5hbnRJZCIsIl9mcm9tRW1haWxBbmRQYXNzd29yZCIsIl9mcm9tRW1haWxBbmRDb2RlIiwib29iQ29kZSIsIm9iaiIsInJldHVyblNlY3VyZVRva2VuIiwic2lnbkluV2l0aElkcCIsIklEUF9SRVFVRVNUX1VSSSQxIiwiX09BdXRoQ3JlZGVudGlhbCIsInBlbmRpbmdUb2tlbiIsIl9mcm9tUGFyYW1zIiwiY3JlZCIsIm5vbmNlIiwib2F1dGhUb2tlbiIsIm9hdXRoVG9rZW5TZWNyZXQiLCJzZWNyZXQiLCJidWlsZFJlcXVlc3QiLCJhdXRvQ3JlYXRlIiwicmVxdWVzdFVyaSIsInBvc3RCb2R5Iiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZSIsInNpZ25JbldpdGhQaG9uZU51bWJlciQxIiwibGlua1dpdGhQaG9uZU51bWJlciQxIiwidGVtcG9yYXJ5UHJvb2YiLCJWRVJJRllfUEhPTkVfTlVNQkVSX0ZPUl9FWElTVElOR19FUlJPUl9NQVBfIiwidmVyaWZ5UGhvbmVOdW1iZXJGb3JFeGlzdGluZyIsImFwaVJlcXVlc3QiLCJvcGVyYXRpb24iLCJfUGhvbmVBdXRoQ3JlZGVudGlhbCIsIl9mcm9tVmVyaWZpY2F0aW9uIiwidmVyaWZpY2F0aW9uSWQiLCJ2ZXJpZmljYXRpb25Db2RlIiwiX2Zyb21Ub2tlblJlc3BvbnNlIiwiX21ha2VWZXJpZmljYXRpb25SZXF1ZXN0Iiwic2Vzc2lvbkluZm8iLCJwYXJzZU1vZGUiLCJtb2RlIiwicGFyc2VEZWVwTGluayIsImxpbmsiLCJxdWVyeXN0cmluZ0RlY29kZSIsImV4dHJhY3RRdWVyeXN0cmluZyIsImRvdWJsZURlZXBMaW5rIiwiaU9TRGVlcExpbmsiLCJpT1NEb3VibGVEZWVwTGluayIsIl9BY3Rpb25Db2RlVVJMIiwiYWN0aW9uTGluayIsInNlYXJjaFBhcmFtcyIsImNvbnRpbnVlVXJsIiwicGFyc2VMaW5rIiwiX0VtYWlsQXV0aFByb3ZpZGVyIiwiUFJPVklERVJfSUQiLCJjcmVkZW50aWFsIiwiY3JlZGVudGlhbFdpdGhMaW5rIiwiZW1haWxMaW5rIiwiYWN0aW9uQ29kZVVybCIsIkVNQUlMX1BBU1NXT1JEX1NJR05fSU5fTUVUSE9EIiwiRU1BSUxfTElOS19TSUdOX0lOX01FVEhPRCIsIkZlZGVyYXRlZEF1dGhQcm92aWRlciIsImRlZmF1bHRMYW5ndWFnZUNvZGUiLCJjdXN0b21QYXJhbWV0ZXJzIiwic2V0RGVmYXVsdExhbmd1YWdlIiwic2V0Q3VzdG9tUGFyYW1ldGVycyIsImN1c3RvbU9BdXRoUGFyYW1ldGVycyIsImdldEN1c3RvbVBhcmFtZXRlcnMiLCJCYXNlT0F1dGhQcm92aWRlciIsInNjb3BlcyIsImFkZFNjb3BlIiwic2NvcGUiLCJnZXRTY29wZXMiLCJfT0F1dGhQcm92aWRlciIsImNyZWRlbnRpYWxGcm9tSlNPTiIsIl9jcmVkZW50aWFsIiwicmF3Tm9uY2UiLCJjcmVkZW50aWFsRnJvbVJlc3VsdCIsInVzZXJDcmVkZW50aWFsIiwib2F1dGhDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsImNyZWRlbnRpYWxGcm9tRXJyb3IiLCJ0b2tlblJlc3BvbnNlIiwib2F1dGhJZFRva2VuIiwib2F1dGhBY2Nlc3NUb2tlbiIsIl9GYWNlYm9va0F1dGhQcm92aWRlciIsIkZBQ0VCT09LX1NJR05fSU5fTUVUSE9EIiwiY3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJfR29vZ2xlQXV0aFByb3ZpZGVyIiwiR09PR0xFX1NJR05fSU5fTUVUSE9EIiwiX0dpdGh1YkF1dGhQcm92aWRlciIsIkdJVEhVQl9TSUdOX0lOX01FVEhPRCIsIklEUF9SRVFVRVNUX1VSSSIsIlNBTUxBdXRoQ3JlZGVudGlhbCIsIl9TQU1MQXV0aENyZWRlbnRpYWwiLCJfY3JlYXRlIiwiU0FNTF9QUk9WSURFUl9QUkVGSVgiLCJfU0FNTEF1dGhQcm92aWRlciIsInNhbWxDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIl9Ud2l0dGVyQXV0aFByb3ZpZGVyIiwiVFdJVFRFUl9TSUdOX0lOX01FVEhPRCIsInNpZ25VcCIsIlVzZXJDcmVkZW50aWFsSW1wbCIsIl9Vc2VyQ3JlZGVudGlhbEltcGwiLCJvcGVyYXRpb25UeXBlIiwicHJvdmlkZXJJZEZvclJlc3BvbnNlIiwidXNlckNyZWQiLCJfZm9yT3BlcmF0aW9uIiwiTXVsdGlGYWN0b3JFcnJvciIsIl9NdWx0aUZhY3RvckVycm9yIiwic2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJfZnJvbUVycm9yQW5kT3BlcmF0aW9uIiwiX3Byb2Nlc3NDcmVkZW50aWFsU2F2aW5nTWZhQ29udGV4dElmTmVjZXNzYXJ5IiwiaWRUb2tlblByb3ZpZGVyIiwicHJvdmlkZXJEYXRhQXNOYW1lcyIsIlNldCIsInBpZCIsIl9hc3NlcnRMaW5rZWRTdGF0dXMiLCJkZWxldGVQcm92aWRlciIsInByb3ZpZGVyc0xlZnQiLCJwZCIsImhhcyIsIl9saW5rJDEiLCJleHBlY3RlZCIsInByb3ZpZGVySWRzIiwiX3JlYXV0aGVudGljYXRlIiwicGFyc2VkIiwic3ViIiwiX3NpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuJDEiLCJjdXN0b21Ub2tlbiIsIk11bHRpRmFjdG9ySW5mb0ltcGwiLCJmYWN0b3JJZCIsIm1mYUVucm9sbG1lbnRJZCIsImVucm9sbG1lbnRUaW1lIiwiZW5yb2xsZWRBdCIsIl9mcm9tU2VydmVyUmVzcG9uc2UiLCJlbnJvbGxtZW50IiwiUGhvbmVNdWx0aUZhY3RvckluZm9JbXBsIiwiVG90cE11bHRpRmFjdG9ySW5mb0ltcGwiLCJfUGhvbmVNdWx0aUZhY3RvckluZm9JbXBsIiwicGhvbmVJbmZvIiwiX1RvdHBNdWx0aUZhY3RvckluZm9JbXBsIiwiX3NldEFjdGlvbkNvZGVTZXR0aW5nc09uUmVxdWVzdCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsImR5bmFtaWNMaW5rRG9tYWluIiwibGlua0RvbWFpbiIsImNhbkhhbmRsZUNvZGVJbkFwcCIsImhhbmRsZUNvZGVJbkFwcCIsImlPUyIsImJ1bmRsZUlkIiwiaU9TQnVuZGxlSWQiLCJhbmRyb2lkIiwicGFja2FnZU5hbWUiLCJhbmRyb2lkSW5zdGFsbEFwcCIsImluc3RhbGxBcHAiLCJhbmRyb2lkTWluaW11bVZlcnNpb25Db2RlIiwibWluaW11bVZlcnNpb24iLCJhbmRyb2lkUGFja2FnZU5hbWUiLCJyZWNhY2hlUGFzc3dvcmRQb2xpY3kiLCJyZXF1ZXN0VHlwZSIsIm5ld1Bhc3N3b3JkIiwiYXV0aE1vZHVsYXIiLCJuZXdFbWFpbCIsIm1mYUluZm8iLCJtdWx0aUZhY3RvckluZm8iLCJkYXRhIiwicHJldmlvdXNFbWFpbCIsInNpZ25VcFJlc3BvbnNlIiwic2V0QWN0aW9uQ29kZVNldHRpbmdzIiwicmVxdWVzdDIiLCJhY3Rpb25Db2RlU2V0dGluZ3MyIiwiY3JlYXRlQXV0aFVyaSIsImNvbnRpbnVlVXJpIiwiaWRlbnRpZmllciIsInNpZ25pbk1ldGhvZHMiLCJ1cGRhdGVQcm9maWxlJDEiLCJwcm9maWxlUmVxdWVzdCIsInBhc3N3b3JkUHJvdmlkZXIiLCJmaW5kIiwidXBkYXRlRW1haWxPclBhc3N3b3JkIiwicHJvZmlsZSIsInJhd1VzZXJJbmZvIiwiaXNOZXdVc2VyIiwia2luZCIsImZpbHRlcmVkUHJvdmlkZXJJZCIsIkdlbmVyaWNBZGRpdGlvbmFsVXNlckluZm8iLCJGYWNlYm9va0FkZGl0aW9uYWxVc2VySW5mbyIsIkdpdGh1YkFkZGl0aW9uYWxVc2VySW5mbyIsIkdvb2dsZUFkZGl0aW9uYWxVc2VySW5mbyIsIlR3aXR0ZXJBZGRpdGlvbmFsVXNlckluZm8iLCJzY3JlZW5OYW1lIiwiRmVkZXJhdGVkQWRkaXRpb25hbFVzZXJJbmZvV2l0aFVzZXJuYW1lIiwidXNlcm5hbWUiLCJsb2dpbiIsIk11bHRpRmFjdG9yU2Vzc2lvbkltcGwiLCJfTXVsdGlGYWN0b3JTZXNzaW9uSW1wbCIsIl9mcm9tSWR0b2tlbiIsIl9mcm9tTWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm11bHRpRmFjdG9yU2Vzc2lvbiIsInBlbmRpbmdDcmVkZW50aWFsIiwiTXVsdGlGYWN0b3JSZXNvbHZlckltcGwiLCJfTXVsdGlGYWN0b3JSZXNvbHZlckltcGwiLCJzZXNzaW9uIiwiaGludHMiLCJzaWduSW5SZXNvbHZlciIsIl9mcm9tRXJyb3IiLCJtZmFSZXNwb25zZSIsIl9wcm9jZXNzIiwicmVzb2x2ZVNpZ25JbiIsImFzc2VydGlvbkV4dGVybiIsImVycm9ySW50ZXJuYWwiLCJzdGFydEVucm9sbFBob25lTWZhIiwiZmluYWxpemVFbnJvbGxQaG9uZU1mYSIsInN0YXJ0RW5yb2xsVG90cE1mYSIsImZpbmFsaXplRW5yb2xsVG90cE1mYSIsIndpdGhkcmF3TWZhIiwiTXVsdGlGYWN0b3JVc2VySW1wbCIsIl9NdWx0aUZhY3RvclVzZXJJbXBsIiwiZW5yb2xsZWRGYWN0b3JzIiwiX2Zyb21Vc2VyIiwiZ2V0U2Vzc2lvbiIsImVucm9sbCIsImZpbmFsaXplTWZhUmVzcG9uc2UiLCJ1bmVucm9sbCIsImluZm9PclVpZCIsIm11bHRpRmFjdG9yVXNlckNhY2hlIiwiV2Vha01hcCIsInVzZXJNb2R1bGFyIiwiU1RPUkFHRV9BVkFJTEFCTEVfS0VZIiwiQnJvd3NlclBlcnNpc3RlbmNlQ2xhc3MiLCJzdG9yYWdlUmV0cmlldmVyIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwiX1BPTExJTkdfSU5URVJWQUxfTVMkMSIsIklFMTBfTE9DQUxfU1RPUkFHRV9TWU5DX0RFTEFZIiwiQnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJldmVudCIsInBvbGwiLCJvblN0b3JhZ2VFdmVudCIsImxpc3RlbmVycyIsImxvY2FsQ2FjaGUiLCJwb2xsVGltZXIiLCJmYWxsYmFja1RvUG9sbGluZyIsImZvckFsbENoYW5nZWRLZXlzIiwia2V5cyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJrZXkyIiwiX29sZFZhbHVlIiwibm90aWZ5TGlzdGVuZXJzIiwiZGV0YWNoTGlzdGVuZXIiLCJzdG9wUG9sbGluZyIsInRyaWdnZXJMaXN0ZW5lcnMiLCJzdG9yZWRWYWx1ZTIiLCJzdG9yZWRWYWx1ZSIsImxpc3RlbmVyIiwiZnJvbSIsInN0YXJ0UG9sbGluZyIsInNldEludGVydmFsIiwiU3RvcmFnZUV2ZW50IiwiY2xlYXJJbnRlcnZhbCIsImF0dGFjaExpc3RlbmVyIiwiUE9MTElOR19JTlRFUlZBTF9NUyIsImdldERvY3VtZW50Q29va2llIiwiZXNjYXBlZE5hbWUiLCJtYXRjaGVyIiwiUmVnRXhwIiwiY29va2llIiwiZ2V0Q29va2llTmFtZSIsImlzRGV2TW9kZSIsIkNvb2tpZVBlcnNpc3RlbmNlIiwibGlzdGVuZXJVbnN1YnNjcmliZXMiLCJvcmlnaW5hbFVybCIsIlVSTCIsIm9yaWdpbiIsImlzU2VjdXJlQ29udGV4dCIsImNvb2tpZUVuYWJsZWQiLCJfdmFsdWUiLCJjb29raWVTdG9yZSIsImV4aXN0aW5nVmFsdWUiLCJjaGFuZ2VkQ29va2llIiwiY2hhbmdlZCIsImNoYW5nZSIsImRlbGV0ZWRDb29raWUiLCJ1bnN1YnNjcmliZTIiLCJsYXN0VmFsdWUiLCJjdXJyZW50VmFsdWUiLCJCcm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwic2Vzc2lvblN0b3JhZ2UiLCJfYWxsU2V0dGxlZCIsInByb21pc2VzIiwiZnVsZmlsbGVkIiwicmVhc29uIiwiUmVjZWl2ZXIiLCJfUmVjZWl2ZXIiLCJldmVudFRhcmdldCIsImhhbmRsZXJzTWFwIiwiaGFuZGxlRXZlbnQiLCJleGlzdGluZ0luc3RhbmNlIiwicmVjZWl2ZXJzIiwicmVjZWl2ZXIiLCJpc0xpc3RlbmluZ3RvIiwibmV3SW5zdGFuY2UiLCJtZXNzYWdlRXZlbnQiLCJldmVudElkIiwiZXZlbnRUeXBlIiwiaGFuZGxlcnMiLCJwb3J0cyIsInBvc3RNZXNzYWdlIiwiaGFuZGxlciIsIl9zdWJzY3JpYmUiLCJldmVudEhhbmRsZXIiLCJfdW5zdWJzY3JpYmUiLCJfZ2VuZXJhdGVFdmVudElkIiwiZGlnaXRzIiwiU2VuZGVyIiwidGFyZ2V0IiwicmVtb3ZlTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25NZXNzYWdlIiwiY2xvc2UiLCJfc2VuZCIsInRpbWVvdXQiLCJNZXNzYWdlQ2hhbm5lbCIsImNvbXBsZXRpb25UaW1lciIsInN0YXJ0IiwiYWNrVGltZXIiLCJwb3J0MiIsImZpbmFsbHkiLCJfd2luZG93IiwiX3NldFdpbmRvd0xvY2F0aW9uIiwiX2lzV29ya2VyIiwiX2dldEFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0cmF0aW9uIiwiYWN0aXZlIiwiX2dldFNlcnZpY2VXb3JrZXJDb250cm9sbGVyIiwiY29udHJvbGxlciIsIl9nZXRXb3JrZXJHbG9iYWxTY29wZSIsIkRCX05BTUUiLCJEQl9WRVJTSU9OIiwiREJfT0JKRUNUU1RPUkVfTkFNRSIsIkRCX0RBVEFfS0VZUEFUSCIsIkRCUHJvbWlzZSIsInRvUHJvbWlzZSIsImdldE9iamVjdFN0b3JlIiwiZGIiLCJpc1JlYWRXcml0ZSIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJfZGVsZXRlRGF0YWJhc2UiLCJpbmRleGVkREIiLCJkZWxldGVEYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJvcGVuIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwiX3B1dE9iamVjdCIsInB1dCIsImdldE9iamVjdCIsIl9kZWxldGVPYmplY3QiLCJfUE9MTElOR19JTlRFUlZBTF9NUyIsIl9UUkFOU0FDVElPTl9SRVRSWV9DT1VOVCIsIkluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJwZW5kaW5nV3JpdGVzIiwic2VuZGVyIiwic2VydmljZVdvcmtlclJlY2VpdmVyQXZhaWxhYmxlIiwiYWN0aXZlU2VydmljZVdvcmtlciIsIl93b3JrZXJJbml0aWFsaXphdGlvblByb21pc2UiLCJpbml0aWFsaXplU2VydmljZVdvcmtlck1lc3NhZ2luZyIsIl9vcGVuRGIiLCJfd2l0aFJldHJpZXMiLCJvcCIsIm51bUF0dGVtcHRzIiwiaW5pdGlhbGl6ZVJlY2VpdmVyIiwiaW5pdGlhbGl6ZVNlbmRlciIsIl9vcmlnaW4iLCJfcG9sbCIsImtleVByb2Nlc3NlZCIsIl9kYXRhIiwicmVzdWx0cyIsIm5vdGlmeVNlcnZpY2VXb3JrZXIiLCJfd2l0aFBlbmRpbmdXcml0ZSIsIndyaXRlIiwiZ2V0QWxsUmVxdWVzdCIsImdldEFsbCIsImtleXNJblJlc3VsdCIsImZiYXNlX2tleSIsImxvY2FsS2V5Iiwic3RhcnRTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblRvdHBNZmEiLCJfSlNMT0FEX0NBTExCQUNLIiwiTkVUV09SS19USU1FT1VUX0RFTEFZIiwiUmVDYXB0Y2hhTG9hZGVySW1wbCIsImhvc3RMYW5ndWFnZSIsImxpYnJhcnlTZXBhcmF0ZWx5TG9hZGVkIiwibG9hZCIsImhsIiwiaXNIb3N0TGFuZ3VhZ2VWYWxpZCIsInNob3VsZFJlc29sdmVJbW1lZGlhdGVseSIsInJlY2FwdGNoYSIsIndpZGdldElkIiwib25sb2FkIiwiY2xlYXJlZE9uZUluc3RhbmNlIiwiTW9ja1JlQ2FwdGNoYUxvYWRlckltcGwiLCJSRUNBUFRDSEFfVkVSSUZJRVJfVFlQRSIsIkRFRkFVTFRfUEFSQU1TIiwidGhlbWUiLCJkZXN0cm95ZWQiLCJ0b2tlbkNoYW5nZUxpc3RlbmVycyIsInJlbmRlclByb21pc2UiLCJpc0ludmlzaWJsZSIsIm1ha2VUb2tlbkNhbGxiYWNrIiwiX3JlY2FwdGNoYUxvYWRlciIsInZhbGlkYXRlU3RhcnRpbmdTdGF0ZSIsImFzc2VydE5vdERlc3Ryb3llZCIsImdldEFzc2VydGVkUmVjYXB0Y2hhIiwidG9rZW5DaGFuZ2UiLCJtYWtlUmVuZGVyUHJvbWlzZSIsIl9yZXNldCIsImNsZWFyIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlQ2hpbGQiLCJzaXRla2V5IiwiaGFzQ2hpbGROb2RlcyIsImV4aXN0aW5nIiwiZ2xvYmFsRnVuYyIsImluaXQiLCJndWFyYW50ZWVkRW1wdHkiLCJkb21SZWFkeSIsIkNvbmZpcm1hdGlvblJlc3VsdEltcGwiLCJvbkNvbmZpcm1hdGlvbiIsImNvbmZpcm0iLCJhdXRoQ3JlZGVudGlhbCIsImFwcFZlcmlmaWVyIiwiX3ZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVJbmZvT3B0aW9ucyIsInN0YXJ0UGhvbmVNZmFFbnJvbGxtZW50UmVxdWVzdCIsInN0YXJ0RW5yb2xsUGhvbmVNZmFBY3Rpb25DYWxsYmFjayIsInJlcXVlc3RXaXRoUmVjYXB0Y2hhVjIiLCJpbmplY3RSZWNhcHRjaGFWMlRva2VuIiwic3RhcnRQaG9uZU1mYUVucm9sbG1lbnRSZXNwb25zZSIsInBob25lU2Vzc2lvbkluZm8iLCJtdWx0aUZhY3RvckhpbnQiLCJtdWx0aUZhY3RvclVpZCIsInN0YXJ0UGhvbmVNZmFTaWduSW5SZXF1ZXN0Iiwic3RhcnRTaWduSW5QaG9uZU1mYUFjdGlvbkNhbGxiYWNrIiwic3RhcnRQaG9uZU1mYVNpZ25JblJlc3BvbnNlIiwicGhvbmVSZXNwb25zZUluZm8iLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlUmVxdWVzdCIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGVBY3Rpb25DYWxsYmFjayIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGVSZXNwb25zZSIsInJlY2FwdGNoYVYyVmVyaWZpZXIiLCJyZWNhcHRjaGFWMlRva2VuIiwicmVjYXB0Y2hhVmVyc2lvbiIsIl9QaG9uZUF1dGhQcm92aWRlciIsInZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVPcHRpb25zIiwiYXBwbGljYXRpb25WZXJpZmllciIsIlBIT05FX1NJR05fSU5fTUVUSE9EIiwiX3dpdGhEZWZhdWx0UmVzb2x2ZXIiLCJyZXNvbHZlck92ZXJyaWRlIiwiSWRwQ3JlZGVudGlhbCIsIl9idWlsZElkcFJlcXVlc3QiLCJzZXNzaW9uSWQiLCJyZXR1cm5JZHBDcmVkZW50aWFsIiwiX3NpZ25JbiIsIl9yZWF1dGgiLCJfbGluayIsIkFic3RyYWN0UG9wdXBSZWRpcmVjdE9wZXJhdGlvbiIsInBlbmRpbmdQcm9taXNlIiwiZXZlbnRNYW5hZ2VyIiwib25FeGVjdXRpb24iLCJyZWdpc3RlckNvbnN1bWVyIiwib25BdXRoRXZlbnQiLCJ1cmxSZXNwb25zZSIsImdldElkcFRhc2siLCJvbkVycm9yIiwidW5yZWdpc3RlckFuZENsZWFuVXAiLCJ1bnJlZ2lzdGVyQ29uc3VtZXIiLCJjbGVhblVwIiwiX1BPTExfV0lORE9XX0NMT1NFX1RJTUVPVVQiLCJyZXNvbHZlckludGVybmFsIiwiUG9wdXBPcGVyYXRpb24iLCJleGVjdXRlTm90TnVsbCIsIl9Qb3B1cE9wZXJhdGlvbiIsImF1dGhXaW5kb3ciLCJwb2xsSWQiLCJjdXJyZW50UG9wdXBBY3Rpb24iLCJjYW5jZWwiLCJfb3BlblBvcHVwIiwiYXNzb2NpYXRlZEV2ZW50IiwiX29yaWdpblZhbGlkYXRpb24iLCJfaXNJZnJhbWVXZWJTdG9yYWdlU3VwcG9ydGVkIiwiaXNTdXBwb3J0ZWQiLCJwb2xsVXNlckNhbmNlbGxhdGlvbiIsImNsb3NlZCIsIlBFTkRJTkdfUkVESVJFQ1RfS0VZIiwicmVkaXJlY3RPdXRjb21lTWFwIiwiUmVkaXJlY3RBY3Rpb24iLCJyZWFkeU91dGNvbWUiLCJoYXNQZW5kaW5nUmVkaXJlY3QiLCJfZ2V0QW5kQ2xlYXJQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJwZW5kaW5nUmVkaXJlY3RLZXkiLCJyZXNvbHZlclBlcnNpc3RlbmNlIiwiX3NldFBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsIl9jbGVhclJlZGlyZWN0T3V0Y29tZXMiLCJfc2lnbkluV2l0aFJlZGlyZWN0IiwiX29wZW5SZWRpcmVjdCIsIl9yZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInByZXBhcmVVc2VyRm9yUmVkaXJlY3QiLCJfbGlua1dpdGhSZWRpcmVjdCIsIl9nZXRSZWRpcmVjdFJlc3VsdCIsInJlc29sdmVyRXh0ZXJuIiwiRVZFTlRfRFVQTElDQVRJT05fQ0FDSEVfRFVSQVRJT05fTVMiLCJBdXRoRXZlbnRNYW5hZ2VyIiwiY2FjaGVkRXZlbnRVaWRzIiwiY29uc3VtZXJzIiwicXVldWVkUmVkaXJlY3RFdmVudCIsImhhc0hhbmRsZWRQb3RlbnRpYWxSZWRpcmVjdCIsImxhc3RQcm9jZXNzZWRFdmVudFRpbWUiLCJhdXRoRXZlbnRDb25zdW1lciIsImlzRXZlbnRGb3JDb25zdW1lciIsInNlbmRUb0NvbnN1bWVyIiwic2F2ZUV2ZW50VG9DYWNoZSIsIm9uRXZlbnQiLCJoYXNFdmVudEJlZW5IYW5kbGVkIiwiaGFuZGxlZCIsImNvbnN1bWVyIiwiaXNSZWRpcmVjdEV2ZW50IiwiaXNOdWxsUmVkaXJlY3RFdmVudCIsImV2ZW50SWRNYXRjaGVzIiwiZXZlbnRVaWQiLCJ2IiwiX2dldFByb2plY3RDb25maWciLCJJUF9BRERSRVNTX1JFR0VYIiwiSFRUUF9SRUdFWCIsIl92YWxpZGF0ZU9yaWdpbiIsImF1dGhvcml6ZWREb21haW5zIiwiZG9tYWluIiwibWF0Y2hEb21haW4iLCJjdXJyZW50VXJsIiwiaG9zdG5hbWUiLCJjZVVybCIsImVzY2FwZWREb21haW5QYXR0ZXJuIiwiTkVUV09SS19USU1FT1VUIiwicmVzZXRVbmxvYWRlZEdhcGlNb2R1bGVzIiwiYmVhY29uIiwiX19fanNsIiwiSCIsImhpbnQiLCJyIiwiTCIsIkNQIiwibG9hZEdhcGkiLCJsb2FkR2FwaUlmcmFtZSIsImdhcGkiLCJpZnJhbWVzIiwiZ2V0Q29udGV4dCIsIm9udGltZW91dCIsIklmcmFtZSIsImNiTmFtZSIsImNhY2hlZEdBcGlMb2FkZXIiLCJfbG9hZEdhcGkiLCJQSU5HX1RJTUVPVVQiLCJJRlJBTUVfUEFUSCIsIkVNVUxBVEVEX0lGUkFNRV9QQVRIIiwiSUZSQU1FX0FUVFJJQlVURVMiLCJ0b3AiLCJoZWlnaHQiLCJ0YWJpbmRleCIsIkVJRF9GUk9NX0FQSUhPU1QiLCJnZXRJZnJhbWVVcmwiLCJlaWQiLCJmdyIsIl9vcGVuSWZyYW1lIiwiY29udGV4dCIsImdhcGkyIiwid2hlcmUiLCJtZXNzYWdlSGFuZGxlcnNGaWx0ZXIiLCJDUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVIiLCJhdHRyaWJ1dGVzIiwiZG9udGNsZWFyIiwiaWZyYW1lIiwicmVzdHlsZSIsInNldEhpZGVPbkxlYXZlIiwibmV0d29ya0Vycm9yIiwibmV0d29ya0Vycm9yVGltZXIiLCJjbGVhclRpbWVyQW5kUmVzb2x2ZSIsInBpbmciLCJCQVNFX1BPUFVQX09QVElPTlMiLCJyZXNpemFibGUiLCJzdGF0dXNiYXIiLCJ0b29sYmFyIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiVEFSR0VUX0JMQU5LIiwiRklSRUZPWF9FTVBUWV9VUkwiLCJBdXRoUG9wdXAiLCJ3aW5kb3cyIiwiX29wZW4iLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImF2YWlsV2lkdGgiLCJzY3JvbGxiYXJzIiwib3B0aW9uc1N0cmluZyIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2N1bSIsIm9wZW5Bc05ld1dpbmRvd0lPUyIsIm5ld1dpbiIsImZvY3VzIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIldJREdFVF9QQVRIIiwiRU1VTEFUT1JfV0lER0VUX1BBVEgiLCJGSVJFQkFTRV9BUFBfQ0hFQ0tfRlJBR01FTlRfSUQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfZ2V0UmVkaXJlY3RVcmwiLCJhdXRoVHlwZSIsInJlZGlyZWN0VXJsIiwiYWRkaXRpb25hbFBhcmFtcyIsImlzRW1wdHkiLCJ0aWQiLCJwYXJhbXNEaWN0IiwiYXBwQ2hlY2tUb2tlbkZyYWdtZW50IiwiZ2V0SGFuZGxlckJhc2UiLCJXRUJfU1RPUkFHRV9TVVBQT1JUX0tFWSIsIkJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJldmVudE1hbmFnZXJzIiwib3JpZ2luVmFsaWRhdGlvblByb21pc2VzIiwicHJvbWlzZTIiLCJpbml0QW5kR2V0TWFuYWdlciIsInJlZ2lzdGVyIiwiaWZyYW1lRXZlbnQiLCJhdXRoRXZlbnQiLCJzZW5kIiwiTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2ZpbmFsaXplRW5yb2xsIiwiX2ZpbmFsaXplU2lnbkluIiwiUGhvbmVNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfUGhvbmVNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbUNyZWRlbnRpYWwiLCJwaG9uZVZlcmlmaWNhdGlvbkluZm8iLCJGQUNUT1JfSUQiLCJhc3NlcnRpb25Gb3JFbnJvbGxtZW50Iiwib25lVGltZVBhc3N3b3JkIiwiVG90cE11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tU2VjcmV0IiwiYXNzZXJ0aW9uRm9yU2lnbkluIiwiZW5yb2xsbWVudElkIiwiX2Zyb21FbnJvbGxtZW50SWQiLCJnZW5lcmF0ZVNlY3JldCIsIm1mYVNlc3Npb24iLCJ0b3RwRW5yb2xsbWVudEluZm8iLCJfZnJvbVN0YXJ0VG90cE1mYUVucm9sbG1lbnRSZXNwb25zZSIsIl9Ub3RwTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwib3RwIiwidG90cFZlcmlmaWNhdGlvbkluZm8iLCJfbWFrZVRvdHBWZXJpZmljYXRpb25JbmZvIiwiX1RvdHBTZWNyZXQiLCJzZWNyZXRLZXkiLCJoYXNoaW5nQWxnb3JpdGhtIiwiY29kZUxlbmd0aCIsImNvZGVJbnRlcnZhbFNlY29uZHMiLCJlbnJvbGxtZW50Q29tcGxldGlvbkRlYWRsaW5lIiwidG90cFNlc3Npb25JbmZvIiwic2hhcmVkU2VjcmV0S2V5IiwidmVyaWZpY2F0aW9uQ29kZUxlbmd0aCIsInBlcmlvZFNlYyIsImZpbmFsaXplRW5yb2xsbWVudFRpbWUiLCJnZW5lcmF0ZVFyQ29kZVVybCIsImFjY291bnROYW1lIiwiaXNzdWVyIiwidXNlRGVmYXVsdHMiLCJfaXNFbXB0eVN0cmluZyIsImlucHV0IiwiQXV0aEludGVyb3AiLCJpbnRlcm5hbExpc3RlbmVycyIsImdldFVpZCIsImFzc2VydEF1dGhDb25maWd1cmVkIiwiYWRkQXV0aFRva2VuTGlzdGVuZXIiLCJ1cGRhdGVQcm9hY3RpdmVSZWZyZXNoIiwicmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIiLCJnZXRWZXJzaW9uRm9yUGxhdGZvcm0iLCJyZWdpc3RlckF1dGgiLCJfcmVnaXN0ZXJDb21wb25lbnQiLCJpbXBvcnRfY29tcG9uZW50IiwiQ29tcG9uZW50IiwiZ2V0UHJvdmlkZXIiLCJzZXRJbnN0YW50aWF0aW9uTW9kZSIsInNldEluc3RhbmNlQ3JlYXRlZENhbGxiYWNrIiwiX2luc3RhbmNlSWRlbnRpZmllciIsIl9pbnN0YW5jZSIsImF1dGhJbnRlcm5hbFByb3ZpZGVyIiwicmVnaXN0ZXJWZXJzaW9uIiwiREVGQVVMVF9JRF9UT0tFTl9NQVhfQUdFIiwiYXV0aElkVG9rZW5NYXhBZ2UiLCJnZXRFeHBlcmltZW50YWxTZXR0aW5nIiwibGFzdFBvc3RlZElkVG9rZW4iLCJtaW50Q29va2llRmFjdG9yeSIsImlkVG9rZW5SZXN1bHQiLCJpZFRva2VuQWdlIiwiZ2V0QXBwIiwiYXV0aFRva2VuU3luY1BhdGgiLCJhdXRoVG9rZW5TeW5jVXJsIiwibWludENvb2tpZSIsImF1dGhFbXVsYXRvckhvc3QiLCJnZXREZWZhdWx0RW11bGF0b3JIb3N0IiwiZ2V0U2NyaXB0UGFyZW50RWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0QXR0cmlidXRlIiwib25lcnJvciIsImNoYXJzZXQiLCJpbXBvcnRfYXBwMiIsInJlcXVpcmUiLCJpbXBvcnRfdXRpbDIiLCJpbXBvcnRfbG9nZ2VyMiIsImltcG9ydF90c2xpYjIiLCJpbXBvcnRfY29tcG9uZW50MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQywwQ0FBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsYUFBQSxFQUFB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QSxDQUFZOzBDQUFBO1FBQzFCTCxLQUFBLENBQU1tSixVQUFBLEdBQWExQixDQUFBO1FBQ25CcUIsTUFBQSxDQUFPOUksS0FBSztNQUNkO01BQ0F5b0IsRUFBQSxDQUFHelQsSUFBQSxHQUFPO01BQ1Z5VCxFQUFBLENBQUcwdkIsT0FBQSxHQUFVO01BQ2JKLHNCQUFBLENBQXNCLEVBQUdydUIsV0FBQSxDQUFZakIsRUFBRTtJQUN6QyxDQUFDOztFQUdIdEcsVUFBQSxFQUFZO0VBQ1pGLGlCQUFBLEVBQW1CO0VBQ25CQyx5QkFBQSxFQUNFO0FBQ0g7QUFFRHEwQixZQUFBLENBQVk7NEJBQUE7OztBQ2hKWixJQUFBNkIsV0FBQSxHQUFPQyxPQUFBO0FBQ1AsSUFBQUMsWUFBQSxHQUFPRCxPQUFBO0FBQ1AsSUFBQUUsY0FBQSxHQUFPRixPQUFBO0FBQ1AsSUFBQUcsYUFBQSxHQUFPSCxPQUFBO0FBQ1AsSUFBQUksaUJBQUEsR0FBT0osT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvcnZkL291dCJ9