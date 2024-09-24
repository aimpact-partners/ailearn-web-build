System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["zod","3.23.8"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
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
  for (var name in all) __defProp(target, name, {
    get: all[name],
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

// .beyond/uimport/zod.3.23.8.js
var zod_3_23_8_exports = {};
__export(zod_3_23_8_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  default: () => zod_3_23_8_default,
  defaultErrorMap: () => errorMap,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType,
  z: () => z
});
module.exports = __toCommonJS(zod_3_23_8_exports);

// node_modules/zod/lib/index.mjs
var util;
(function (util2) {
  util2.assertEqual = val => val;
  function assertIs(_arg) {}
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = items => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = obj => {
    const validKeys = util2.objectKeys(obj).filter(k => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = obj => {
    return util2.objectKeys(obj).map(function (e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? obj => Object.keys(obj) : object => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item)) return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? val => Number.isInteger(val) : val => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map(val => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function (objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
var getParsedType = data => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
var quotelessJson = obj => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = sub => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function (issue) {
      return issue.message;
    };
    const fieldErrors = {
      _errors: []
    };
    const processError = error => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || {
                _errors: []
              };
            } else {
              curr[el] = curr[el] || {
                _errors: []
              };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = issue => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return {
      formErrors,
      fieldErrors
    };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = issues => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;else message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;else message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return {
    message
  };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = params => {
  const {
    data,
    path,
    errorMaps,
    issueData
  } = params;
  const fullPath = [...path, ...(issueData.path || [])];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter(m => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, {
      data,
      defaultError: errorMessage
    }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, overrideMap, overrideMap === errorMap ? void 0 : errorMap].filter(x => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted") this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted") return INVALID;
      if (s.status === "dirty") status.dirty();
      arrayValue.push(s.value);
    }
    return {
      status: status.value,
      value: arrayValue
    };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const {
        key,
        value
      } = pair;
      if (key.status === "aborted") return INVALID;
      if (value.status === "aborted") return INVALID;
      if (key.status === "dirty") status.dirty();
      if (value.status === "dirty") status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return {
      status: status.value,
      value: finalObject
    };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = value => ({
  status: "dirty",
  value
});
var OK = value => ({
  status: "valid",
  value
});
var isAborted = x => x.status === "aborted";
var isDirty = x => x.status === "dirty";
var isValid = x => x.status === "valid";
var isAsync = x => typeof Promise !== "undefined" && x instanceof Promise;
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var errorUtil;
(function (errorUtil2) {
  errorUtil2.errToObj = message => typeof message === "string" ? {
    message
  } : message || {};
  errorUtil2.toString = message => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var _ZodEnum_cache, _ZodNativeEnum_cache;
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return {
      success: true,
      data: result.value
    };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error) return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params) return {};
  const {
    errorMap: errorMap2,
    invalid_type_error,
    required_error,
    description
  } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2) return {
    errorMap: errorMap2,
    description
  };
  const customMap = (iss, ctx) => {
    var _a, _b;
    const {
      message
    } = params;
    if (iss.code === "invalid_enum_value") {
      return {
        message: message !== null && message !== void 0 ? message : ctx.defaultError
      };
    }
    if (typeof ctx.data === "undefined") {
      return {
        message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError
      };
    }
    if (iss.code !== "invalid_type") return {
      message: ctx.defaultError
    };
    return {
      message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError
    };
  };
  return {
    errorMap: customMap,
    description
  };
}
var ZodType = class {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success) return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({
      data,
      path: ctx.path,
      parent: ctx
    });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success) return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = val => {
      if (typeof message === "string" || typeof message === "undefined") {
        return {
          message
        };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then(data => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: {
        type: "refinement",
        refinement
      }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: {
        type: "transform",
        transform
      }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
  if (args.precision) {
    regex = `${regex}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    regex = `${regex}(\\.\\d+)?`;
  }
  return regex;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: {
              includes: check.value,
              position: check.position
            },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: {
              startsWith: check.value
            },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: {
              endsWith: check.value
            },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: input.data
    };
  }
  _regex(regex, validation, message) {
    return this.refinement(data => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({
      kind: "email",
      ...errorUtil.errToObj(message)
    });
  }
  url(message) {
    return this._addCheck({
      kind: "url",
      ...errorUtil.errToObj(message)
    });
  }
  emoji(message) {
    return this._addCheck({
      kind: "emoji",
      ...errorUtil.errToObj(message)
    });
  }
  uuid(message) {
    return this._addCheck({
      kind: "uuid",
      ...errorUtil.errToObj(message)
    });
  }
  nanoid(message) {
    return this._addCheck({
      kind: "nanoid",
      ...errorUtil.errToObj(message)
    });
  }
  cuid(message) {
    return this._addCheck({
      kind: "cuid",
      ...errorUtil.errToObj(message)
    });
  }
  cuid2(message) {
    return this._addCheck({
      kind: "cuid2",
      ...errorUtil.errToObj(message)
    });
  }
  ulid(message) {
    return this._addCheck({
      kind: "ulid",
      ...errorUtil.errToObj(message)
    });
  }
  base64(message) {
    return this._addCheck({
      kind: "base64",
      ...errorUtil.errToObj(message)
    });
  }
  ip(options) {
    return this._addCheck({
      kind: "ip",
      ...errorUtil.errToObj(options)
    });
  }
  datetime(options) {
    var _a, _b;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
      local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  date(message) {
    return this._addCheck({
      kind: "date",
      message
    });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  duration(message) {
    return this._addCheck({
      kind: "duration",
      ...errorUtil.errToObj(message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toUpperCase"
      }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find(ch => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find(ch => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find(ch => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find(ch => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find(ch => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find(ch => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find(ch => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find(ch => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find(ch => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find(ch => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find(ch => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find(ch => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find(ch => ch.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find(ch => ch.kind === "base64");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = params => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: input.data
    };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, {
        kind,
        value,
        inclusive,
        message: errorUtil.toString(message)
      }]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find(ch => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null,
      min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = params => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: input.data
    };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, {
        kind,
        value,
        inclusive,
        message: errorUtil.toString(message)
      }]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = params => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = params => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = params => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = params => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = params => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = params => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = params => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = params => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = params => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = params => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class extends ZodType {
  _parse(input) {
    const {
      ctx,
      status
    } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then(result2 => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: {
        value: minLength,
        message: errorUtil.toString(message)
      }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: {
        value: maxLength,
        message: errorUtil.toString(message)
      }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: {
        value: len,
        message: errorUtil.toString(message)
      }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map(item => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = {
      shape,
      keys
    };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const {
      status,
      ctx
    } = this._processInputParams(input);
    const {
      shape,
      keys: shapeKeys
    } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: {
          status: "valid",
          value: key
        },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: {
              status: "valid",
              value: key
            },
            value: {
              status: "valid",
              value: ctx.data[key]
            }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") ;else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: {
            status: "valid",
            value: key
          },
          value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then(syncPairs => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...(message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys") return {
            message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
          };
          return {
            message: defaultError
          };
        }
      } : {})
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  setKey(key, schema) {
    return this.augment({
      [key]: schema
    });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach(key => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach(key => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach(key => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach(key => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map(result => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async option => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = {
            result,
            ctx: childCtx
          };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map(issues2 => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = type => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return {
      valid: true,
      data: a
    };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter(key => bKeys.indexOf(key) !== -1);
    const newObj = {
      ...a,
      ...b
    };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false
        };
      }
      newObj[key] = sharedValue.data;
    }
    return {
      valid: true,
      data: newObj
    };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return {
        valid: false
      };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false
        };
      }
      newArray.push(sharedValue.data);
    }
    return {
      valid: true,
      data: newArray
    };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return {
      valid: true,
      data: a
    };
  } else {
    return {
      valid: false
    };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return {
        status: status.value,
        value: merged.data
      };
    };
    if (ctx.common.async) {
      return Promise.all([this._def.left._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      })]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema) return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter(x => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then(results => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return {
          status: status.value,
          value: finalMap
        };
      });
    } else {
      const finalMap = /* @__PURE__ */new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return {
        status: status.value,
        value: finalMap
      };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */new Set();
      for (const element of elements2) {
        if (element.status === "aborted") return INVALID;
        if (element.status === "dirty") status.dirty();
        parsedSet.add(element.value);
      }
      return {
        status: status.value,
        value: parsedSet
      };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then(elements2 => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: {
        value: minSize,
        message: errorUtil.toString(message)
      }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: {
        value: maxSize,
        message: errorUtil.toString(message)
      }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter(x => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter(x => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = {
      errorMap: ctx.common.contextualErrorMap
    };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function (...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch(e => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch(e => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function (...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return {
      status: "valid",
      value: input.data
    };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class extends ZodType {
  constructor() {
    super(...arguments);
    _ZodEnum_cache.set(this, void 0);
  }
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return ZodEnum.create(this.options.filter(opt => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
_ZodEnum_cache = /* @__PURE__ */new WeakMap();
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  constructor() {
    super(...arguments);
    _ZodNativeEnum_cache.set(this, void 0);
  }
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
_ZodNativeEnum_cache = /* @__PURE__ */new WeakMap();
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then(data => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: arg => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async processed2 => {
          if (status.value === "aborted") return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted") return INVALID;
          if (result.status === "dirty") return DIRTY(result.value);
          if (status.value === "dirty") return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted") return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted") return INVALID;
        if (result.status === "dirty") return DIRTY(result.value);
        if (status.value === "dirty") return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = acc => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted") return INVALID;
        if (inner.status === "dirty") status.dirty();
        executeRefinement(inner.value);
        return {
          status: status.value,
          value: inner.value
        };
      } else {
        return this._def.schema._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }).then(inner => {
          if (inner.status === "aborted") return INVALID;
          if (inner.status === "dirty") status.dirty();
          return executeRefinement(inner.value).then(() => {
            return {
              status: status.value,
              value: inner.value
            };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base)) return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return {
          status: status.value,
          value: result
        };
      } else {
        return this._def.schema._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }).then(base => {
          if (!isValid(base)) return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then(result => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: {
      type: "preprocess",
      transform: preprocess
    },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then(result2 => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return {
      status: "valid",
      value: input.data
    };
  }
};
ZodNaN.create = params => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted") return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted") return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = data => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then(data => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function custom(check, params = {}, fatal) {
  if (check) return ZodAny.create().superRefine((data, ctx) => {
    var _a, _b;
    if (!check(data)) {
      const p = typeof params === "function" ? params(data) : typeof params === "string" ? {
        message: params
      } : params;
      const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
      const p2 = typeof p === "string" ? {
        message: p
      } : p;
      ctx.addIssue({
        code: "custom",
        ...p2,
        fatal: _fatal
      });
    }
  });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom(data => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: arg => ZodString.create({
    ...arg,
    coerce: true
  }),
  number: arg => ZodNumber.create({
    ...arg,
    coerce: true
  }),
  boolean: arg => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: arg => ZodBigInt.create({
    ...arg,
    coerce: true
  }),
  date: arg => ZodDate.create({
    ...arg,
    coerce: true
  })
};
var NEVER = INVALID;
var z = /* @__PURE__ */Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  datetimeRegex,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// .beyond/uimport/zod.3.23.8.js
var zod_3_23_8_default = z;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC96b2QuMy4yMy44LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3pvZC9saWIvaW5kZXgubWpzIl0sIm5hbWVzIjpbInpvZF8zXzIzXzhfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQlJBTkQiLCJESVJUWSIsIkVNUFRZX1BBVEgiLCJJTlZBTElEIiwiTkVWRVIiLCJPSyIsIlBhcnNlU3RhdHVzIiwiU2NoZW1hIiwiWm9kVHlwZSIsIlpvZEFueSIsIlpvZEFycmF5IiwiWm9kQmlnSW50IiwiWm9kQm9vbGVhbiIsIlpvZEJyYW5kZWQiLCJab2RDYXRjaCIsIlpvZERhdGUiLCJab2REZWZhdWx0IiwiWm9kRGlzY3JpbWluYXRlZFVuaW9uIiwiWm9kRWZmZWN0cyIsIlpvZEVudW0iLCJab2RFcnJvciIsIlpvZEZpcnN0UGFydHlUeXBlS2luZCIsIlpvZEZ1bmN0aW9uIiwiWm9kSW50ZXJzZWN0aW9uIiwiWm9kSXNzdWVDb2RlIiwiWm9kTGF6eSIsIlpvZExpdGVyYWwiLCJab2RNYXAiLCJab2ROYU4iLCJab2ROYXRpdmVFbnVtIiwiWm9kTmV2ZXIiLCJab2ROdWxsIiwiWm9kTnVsbGFibGUiLCJab2ROdW1iZXIiLCJab2RPYmplY3QiLCJab2RPcHRpb25hbCIsIlpvZFBhcnNlZFR5cGUiLCJab2RQaXBlbGluZSIsIlpvZFByb21pc2UiLCJab2RSZWFkb25seSIsIlpvZFJlY29yZCIsIlpvZFNjaGVtYSIsIlpvZFNldCIsIlpvZFN0cmluZyIsIlpvZFN5bWJvbCIsIlpvZFRyYW5zZm9ybWVyIiwiWm9kVHVwbGUiLCJab2RVbmRlZmluZWQiLCJab2RVbmlvbiIsIlpvZFVua25vd24iLCJab2RWb2lkIiwiYWRkSXNzdWVUb0NvbnRleHQiLCJhbnkiLCJhbnlUeXBlIiwiYXJyYXkiLCJhcnJheVR5cGUiLCJiaWdpbnQiLCJiaWdJbnRUeXBlIiwiYm9vbGVhbiIsImJvb2xlYW5UeXBlIiwiY29lcmNlIiwiY3VzdG9tIiwiZGF0ZSIsImRhdGVUeXBlIiwiZGF0ZXRpbWVSZWdleCIsImRlZmF1bHQiLCJ6b2RfM18yM184X2RlZmF1bHQiLCJkZWZhdWx0RXJyb3JNYXAiLCJlcnJvck1hcCIsImRpc2NyaW1pbmF0ZWRVbmlvbiIsImRpc2NyaW1pbmF0ZWRVbmlvblR5cGUiLCJlZmZlY3QiLCJlZmZlY3RzVHlwZSIsImVudW0iLCJlbnVtVHlwZSIsImZ1bmN0aW9uIiwiZnVuY3Rpb25UeXBlIiwiZ2V0RXJyb3JNYXAiLCJnZXRQYXJzZWRUeXBlIiwiaW5zdGFuY2VvZiIsImluc3RhbmNlT2ZUeXBlIiwiaW50ZXJzZWN0aW9uIiwiaW50ZXJzZWN0aW9uVHlwZSIsImlzQWJvcnRlZCIsImlzQXN5bmMiLCJpc0RpcnR5IiwiaXNWYWxpZCIsImxhdGUiLCJsYXp5IiwibGF6eVR5cGUiLCJsaXRlcmFsIiwibGl0ZXJhbFR5cGUiLCJtYWtlSXNzdWUiLCJtYXAiLCJtYXBUeXBlIiwibmFuIiwibmFuVHlwZSIsIm5hdGl2ZUVudW0iLCJuYXRpdmVFbnVtVHlwZSIsIm5ldmVyIiwibmV2ZXJUeXBlIiwibnVsbCIsIm51bGxUeXBlIiwibnVsbGFibGUiLCJudWxsYWJsZVR5cGUiLCJudW1iZXIiLCJudW1iZXJUeXBlIiwib2JqZWN0Iiwib2JqZWN0VHlwZSIsIm9iamVjdFV0aWwiLCJvYm9vbGVhbiIsIm9udW1iZXIiLCJvcHRpb25hbCIsIm9wdGlvbmFsVHlwZSIsIm9zdHJpbmciLCJwaXBlbGluZSIsInBpcGVsaW5lVHlwZSIsInByZXByb2Nlc3MiLCJwcmVwcm9jZXNzVHlwZSIsInByb21pc2UiLCJwcm9taXNlVHlwZSIsInF1b3RlbGVzc0pzb24iLCJyZWNvcmQiLCJyZWNvcmRUeXBlIiwic2V0Iiwic2V0VHlwZSIsInNldEVycm9yTWFwIiwic3RyaWN0T2JqZWN0Iiwic3RyaWN0T2JqZWN0VHlwZSIsInN0cmluZyIsInN0cmluZ1R5cGUiLCJzeW1ib2wiLCJzeW1ib2xUeXBlIiwidHJhbnNmb3JtZXIiLCJ0dXBsZSIsInR1cGxlVHlwZSIsInVuZGVmaW5lZCIsInVuZGVmaW5lZFR5cGUiLCJ1bmlvbiIsInVuaW9uVHlwZSIsInVua25vd24iLCJ1bmtub3duVHlwZSIsInV0aWwiLCJ2b2lkIiwidm9pZFR5cGUiLCJ6IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInV0aWwyIiwiYXNzZXJ0RXF1YWwiLCJ2YWwiLCJhc3NlcnRJcyIsIl9hcmciLCJhc3NlcnROZXZlciIsIl94IiwiRXJyb3IiLCJhcnJheVRvRW51bSIsIml0ZW1zIiwib2JqIiwiaXRlbSIsImdldFZhbGlkRW51bVZhbHVlcyIsInZhbGlkS2V5cyIsIm9iamVjdEtleXMiLCJmaWx0ZXIiLCJrIiwiZmlsdGVyZWQiLCJvYmplY3RWYWx1ZXMiLCJlIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInB1c2giLCJmaW5kIiwiYXJyIiwiY2hlY2tlciIsImlzSW50ZWdlciIsIk51bWJlciIsImlzRmluaXRlIiwiTWF0aCIsImZsb29yIiwiam9pblZhbHVlcyIsInNlcGFyYXRvciIsImpvaW4iLCJqc29uU3RyaW5naWZ5UmVwbGFjZXIiLCJfIiwidmFsdWUiLCJ0b1N0cmluZyIsIm9iamVjdFV0aWwyIiwibWVyZ2VTaGFwZXMiLCJmaXJzdCIsInNlY29uZCIsImRhdGEiLCJ0IiwiaXNOYU4iLCJBcnJheSIsImlzQXJyYXkiLCJ0aGVuIiwiY2F0Y2giLCJNYXAiLCJTZXQiLCJEYXRlIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlIiwiY29uc3RydWN0b3IiLCJpc3N1ZXMiLCJhZGRJc3N1ZSIsInN1YiIsImFkZElzc3VlcyIsInN1YnMiLCJhY3R1YWxQcm90byIsIm5ldyIsInRhcmdldCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwibmFtZSIsImVycm9ycyIsImZvcm1hdCIsIl9tYXBwZXIiLCJtYXBwZXIiLCJpc3N1ZSIsIm1lc3NhZ2UiLCJmaWVsZEVycm9ycyIsIl9lcnJvcnMiLCJwcm9jZXNzRXJyb3IiLCJlcnJvciIsImNvZGUiLCJ1bmlvbkVycm9ycyIsInJldHVyblR5cGVFcnJvciIsImFyZ3VtZW50c0Vycm9yIiwicGF0aCIsImxlbmd0aCIsImN1cnIiLCJpIiwiZWwiLCJ0ZXJtaW5hbCIsImFzc2VydCIsImlzRW1wdHkiLCJmbGF0dGVuIiwiZm9ybUVycm9ycyIsImNyZWF0ZSIsIl9jdHgiLCJpbnZhbGlkX3R5cGUiLCJyZWNlaXZlZCIsImV4cGVjdGVkIiwiaW52YWxpZF9saXRlcmFsIiwidW5yZWNvZ25pemVkX2tleXMiLCJpbnZhbGlkX3VuaW9uIiwiaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yIiwib3B0aW9ucyIsImludmFsaWRfZW51bV92YWx1ZSIsImludmFsaWRfYXJndW1lbnRzIiwiaW52YWxpZF9yZXR1cm5fdHlwZSIsImludmFsaWRfZGF0ZSIsImludmFsaWRfc3RyaW5nIiwidmFsaWRhdGlvbiIsImluY2x1ZGVzIiwicG9zaXRpb24iLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJ0b29fc21hbGwiLCJ0eXBlIiwiZXhhY3QiLCJpbmNsdXNpdmUiLCJtaW5pbXVtIiwidG9vX2JpZyIsIm1heGltdW0iLCJpbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlcyIsIm5vdF9tdWx0aXBsZV9vZiIsIm11bHRpcGxlT2YiLCJub3RfZmluaXRlIiwiZGVmYXVsdEVycm9yIiwib3ZlcnJpZGVFcnJvck1hcCIsInBhcmFtcyIsImVycm9yTWFwcyIsImlzc3VlRGF0YSIsImZ1bGxQYXRoIiwiZnVsbElzc3VlIiwiZXJyb3JNZXNzYWdlIiwibWFwcyIsIm0iLCJzbGljZSIsInJldmVyc2UiLCJjdHgiLCJvdmVycmlkZU1hcCIsImNvbW1vbiIsImNvbnRleHR1YWxFcnJvck1hcCIsInNjaGVtYUVycm9yTWFwIiwieCIsImRpcnR5IiwiYWJvcnQiLCJtZXJnZUFycmF5Iiwic3RhdHVzIiwicmVzdWx0cyIsImFycmF5VmFsdWUiLCJzIiwibWVyZ2VPYmplY3RBc3luYyIsInBhaXJzIiwic3luY1BhaXJzIiwicGFpciIsIm1lcmdlT2JqZWN0U3luYyIsImZpbmFsT2JqZWN0IiwiYWx3YXlzU2V0IiwiZnJlZXplIiwiUHJvbWlzZSIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJyZWNlaXZlciIsInN0YXRlIiwia2luZCIsImYiLCJUeXBlRXJyb3IiLCJoYXMiLCJnZXQiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiU3VwcHJlc3NlZEVycm9yIiwic3VwcHJlc3NlZCIsImVycm9yVXRpbCIsImVycm9yVXRpbDIiLCJlcnJUb09iaiIsIl9ab2RFbnVtX2NhY2hlIiwiX1pvZE5hdGl2ZUVudW1fY2FjaGUiLCJQYXJzZUlucHV0TGF6eVBhdGgiLCJwYXJlbnQiLCJfY2FjaGVkUGF0aCIsIl9wYXRoIiwiX2tleSIsImhhbmRsZVJlc3VsdCIsInJlc3VsdCIsInN1Y2Nlc3MiLCJfZXJyb3IiLCJwcm9jZXNzQ3JlYXRlUGFyYW1zIiwiZXJyb3JNYXAyIiwiaW52YWxpZF90eXBlX2Vycm9yIiwicmVxdWlyZWRfZXJyb3IiLCJkZXNjcmlwdGlvbiIsImN1c3RvbU1hcCIsImlzcyIsIl9hIiwiX2IiLCJkZWYiLCJzcGEiLCJzYWZlUGFyc2VBc3luYyIsIl9kZWYiLCJwYXJzZSIsImJpbmQiLCJzYWZlUGFyc2UiLCJwYXJzZUFzeW5jIiwicmVmaW5lIiwicmVmaW5lbWVudCIsInN1cGVyUmVmaW5lIiwibnVsbGlzaCIsIm9yIiwiYW5kIiwidHJhbnNmb3JtIiwiYnJhbmQiLCJkZXNjcmliZSIsInBpcGUiLCJyZWFkb25seSIsImlzTnVsbGFibGUiLCJpc09wdGlvbmFsIiwiX2dldFR5cGUiLCJpbnB1dCIsIl9nZXRPclJldHVybkN0eCIsInBhcnNlZFR5cGUiLCJfcHJvY2Vzc0lucHV0UGFyYW1zIiwiX3BhcnNlU3luYyIsIl9wYXJzZSIsIl9wYXJzZUFzeW5jIiwicmVzb2x2ZSIsImFzeW5jIiwibWF5YmVBc3luY1Jlc3VsdCIsImNoZWNrIiwiZ2V0SXNzdWVQcm9wZXJ0aWVzIiwiX3JlZmluZW1lbnQiLCJzZXRFcnJvciIsInJlZmluZW1lbnREYXRhIiwic2NoZW1hIiwidHlwZU5hbWUiLCJvcHRpb24iLCJpbmNvbWluZyIsImRlZmF1bHRWYWx1ZUZ1bmMiLCJpbm5lclR5cGUiLCJkZWZhdWx0VmFsdWUiLCJjYXRjaFZhbHVlRnVuYyIsImNhdGNoVmFsdWUiLCJUaGlzIiwiY3VpZFJlZ2V4IiwiY3VpZDJSZWdleCIsInVsaWRSZWdleCIsInV1aWRSZWdleCIsIm5hbm9pZFJlZ2V4IiwiZHVyYXRpb25SZWdleCIsImVtYWlsUmVnZXgiLCJfZW1vamlSZWdleCIsImVtb2ppUmVnZXgiLCJpcHY0UmVnZXgiLCJpcHY2UmVnZXgiLCJiYXNlNjRSZWdleCIsImRhdGVSZWdleFNvdXJjZSIsImRhdGVSZWdleCIsIlJlZ0V4cCIsInRpbWVSZWdleFNvdXJjZSIsImFyZ3MiLCJyZWdleCIsInByZWNpc2lvbiIsInRpbWVSZWdleCIsIm9wdHMiLCJsb2NhbCIsIm9mZnNldCIsImlzVmFsaWRJUCIsImlwIiwidmVyc2lvbiIsInRlc3QiLCJTdHJpbmciLCJjdHgyIiwiY2hlY2tzIiwidG9vQmlnIiwidG9vU21hbGwiLCJVUkwiLCJsYXN0SW5kZXgiLCJ0ZXN0UmVzdWx0IiwidHJpbSIsInRvTG93ZXJDYXNlIiwidG9VcHBlckNhc2UiLCJfcmVnZXgiLCJfYWRkQ2hlY2siLCJlbWFpbCIsInVybCIsImVtb2ppIiwidXVpZCIsIm5hbm9pZCIsImN1aWQiLCJjdWlkMiIsInVsaWQiLCJiYXNlNjQiLCJkYXRldGltZSIsInRpbWUiLCJkdXJhdGlvbiIsIm1pbiIsIm1pbkxlbmd0aCIsIm1heCIsIm1heExlbmd0aCIsImxlbiIsIm5vbmVtcHR5IiwiaXNEYXRldGltZSIsImNoIiwiaXNEYXRlIiwiaXNUaW1lIiwiaXNEdXJhdGlvbiIsImlzRW1haWwiLCJpc1VSTCIsImlzRW1vamkiLCJpc1VVSUQiLCJpc05BTk9JRCIsImlzQ1VJRCIsImlzQ1VJRDIiLCJpc1VMSUQiLCJpc0lQIiwiaXNCYXNlNjQiLCJmbG9hdFNhZmVSZW1haW5kZXIiLCJzdGVwIiwidmFsRGVjQ291bnQiLCJzcGxpdCIsInN0ZXBEZWNDb3VudCIsImRlY0NvdW50IiwidmFsSW50IiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwic3RlcEludCIsInBvdyIsImFyZ3VtZW50cyIsImd0ZSIsImx0ZSIsInNldExpbWl0IiwiZ3QiLCJsdCIsImludCIsInBvc2l0aXZlIiwibmVnYXRpdmUiLCJub25wb3NpdGl2ZSIsIm5vbm5lZ2F0aXZlIiwiZmluaXRlIiwic2FmZSIsIk1JTl9TQUZFX0lOVEVHRVIiLCJNQVhfU0FGRV9JTlRFR0VSIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImlzSW50IiwiQmlnSW50IiwiQm9vbGVhbiIsImdldFRpbWUiLCJtaW5EYXRlIiwibWF4RGF0ZSIsIl9hbnkiLCJfdW5rbm93biIsImV4YWN0TGVuZ3RoIiwiYWxsIiwicmVzdWx0MiIsImVsZW1lbnQiLCJkZWVwUGFydGlhbGlmeSIsIm5ld1NoYXBlIiwic2hhcGUiLCJmaWVsZFNjaGVtYSIsInVud3JhcCIsIl9jYWNoZWQiLCJub25zdHJpY3QiLCJwYXNzdGhyb3VnaCIsImF1Z21lbnQiLCJleHRlbmQiLCJfZ2V0Q2FjaGVkIiwic2hhcGVLZXlzIiwiZXh0cmFLZXlzIiwiY2F0Y2hhbGwiLCJ1bmtub3duS2V5cyIsImtleVZhbGlkYXRvciIsInN0cmljdCIsIl9jIiwiX2QiLCJzdHJpcCIsImF1Z21lbnRhdGlvbiIsIm1lcmdlIiwibWVyZ2luZyIsIm1lcmdlZCIsInNldEtleSIsImluZGV4IiwicGljayIsIm1hc2siLCJmb3JFYWNoIiwib21pdCIsImRlZXBQYXJ0aWFsIiwicGFydGlhbCIsInJlcXVpcmVkIiwibmV3RmllbGQiLCJrZXlvZiIsImNyZWF0ZVpvZEVudW0iLCJzdHJpY3RDcmVhdGUiLCJsYXp5Y3JlYXRlIiwiaGFuZGxlUmVzdWx0cyIsImNoaWxkQ3R4IiwiaXNzdWVzMiIsInR5cGVzIiwiZ2V0RGlzY3JpbWluYXRvciIsImRpc2NyaW1pbmF0b3IiLCJkaXNjcmltaW5hdG9yVmFsdWUiLCJvcHRpb25zTWFwIiwiZnJvbSIsImRpc2NyaW1pbmF0b3JWYWx1ZXMiLCJtZXJnZVZhbHVlcyIsImEiLCJiIiwiYVR5cGUiLCJiVHlwZSIsInZhbGlkIiwiYktleXMiLCJzaGFyZWRLZXlzIiwiaW5kZXhPZiIsIm5ld09iaiIsInNoYXJlZFZhbHVlIiwibmV3QXJyYXkiLCJpdGVtQSIsIml0ZW1CIiwiaGFuZGxlUGFyc2VkIiwicGFyc2VkTGVmdCIsInBhcnNlZFJpZ2h0IiwibGVmdCIsInJpZ2h0IiwicmVzdCIsIml0ZW1JbmRleCIsInNjaGVtYXMiLCJrZXlTY2hlbWEiLCJrZXlUeXBlIiwidmFsdWVTY2hlbWEiLCJ2YWx1ZVR5cGUiLCJ0aGlyZCIsImVudHJpZXMiLCJmaW5hbE1hcCIsIm1pblNpemUiLCJzaXplIiwibWF4U2l6ZSIsImZpbmFsaXplU2V0IiwiZWxlbWVudHMyIiwicGFyc2VkU2V0IiwiYWRkIiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJ2YWxpZGF0ZSIsImltcGxlbWVudCIsIm1ha2VBcmdzSXNzdWUiLCJtYWtlUmV0dXJuc0lzc3VlIiwicmV0dXJucyIsImZuIiwibWUiLCJwYXJzZWRBcmdzIiwiUmVmbGVjdCIsImFwcGx5IiwicGFyc2VkUmV0dXJucyIsInBhcmFtZXRlcnMiLCJyZXR1cm5UeXBlIiwiZnVuYyIsInZhbGlkYXRlZEZ1bmMiLCJzdHJpY3RJbXBsZW1lbnQiLCJnZXR0ZXIiLCJsYXp5U2NoZW1hIiwiZXhwZWN0ZWRWYWx1ZXMiLCJlbnVtVmFsdWVzIiwiVmFsdWVzIiwiRW51bSIsImV4dHJhY3QiLCJuZXdEZWYiLCJleGNsdWRlIiwib3B0IiwiV2Vha01hcCIsIm5hdGl2ZUVudW1WYWx1ZXMiLCJwcm9taXNpZmllZCIsInNvdXJjZVR5cGUiLCJjaGVja0N0eCIsImFyZyIsImZhdGFsIiwicHJvY2Vzc2VkIiwicHJvY2Vzc2VkMiIsImV4ZWN1dGVSZWZpbmVtZW50IiwiYWNjIiwiaW5uZXIiLCJiYXNlIiwiY3JlYXRlV2l0aFByZXByb2Nlc3MiLCJyZW1vdmVEZWZhdWx0IiwibmV3Q3R4IiwicmVtb3ZlQ2F0Y2giLCJTeW1ib2wiLCJoYW5kbGVBc3luYyIsImluUmVzdWx0IiwiaW4iLCJvdXQiLCJwIiwiX2ZhdGFsIiwicDIiLCJab2RGaXJzdFBhcnR5VHlwZUtpbmQyIiwiY2xzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxFQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQWpDLE9BQUE7RUFBQWtDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBM0IsVUFBQTtFQUFBNEIsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQXRDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUF1QyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxrQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFDLHNCQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQyxnQkFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUMsZ0JBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUE3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QTtFQUNWQyxPQUFBO0VBQ0FDLFFBQUEsRUFBVUMsWUFBQTtFQUNWQyxVQUFBLEVBQVlDLGNBQUE7RUFDWkMsT0FBQSxFQUFTQyxXQUFBO0VBQ1RFLE1BQUEsRUFBUUMsVUFBQTtFQUNSQyxHQUFBLEVBQUtDLE9BQUE7RUFDTEUsWUFBQSxFQUFjQyxnQkFBQTtFQUNkQyxNQUFBLEVBQVFDLFVBQUE7RUFDUkMsTUFBQSxFQUFRQyxVQUFBO0VBQ1JDLFdBQUEsRUFBYTdELFdBQUE7RUFDYjhELEtBQUEsRUFBT0MsU0FBQTtFQUNQLGFBQWFFLGFBQUE7RUFDYkMsS0FBQSxFQUFPQyxTQUFBO0VBQ1BDLE9BQUEsRUFBU0MsV0FBQTtFQUNULFFBQVFHLFFBQUE7RUFDUjVJLEtBQUE7RUFDQW9CLFlBQUE7RUFDQWlHLGFBQUE7RUFDQXJHO0FBQ0osQ0FBQzs7O0FEdG9JRCxJQUFPOEMsa0JBQUEsR0FBUStFLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=