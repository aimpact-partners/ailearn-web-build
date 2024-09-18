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

// .beyond/uimport/temp/zod.3.23.8.js
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

// .beyond/uimport/temp/zod.3.23.8.js
var zod_3_23_8_default = z;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3pvZC4zLjIzLjguanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2xpYi9pbmRleC5tanMiXSwibmFtZXMiOlsiem9kXzNfMjNfOF9leHBvcnRzIiwiX19leHBvcnQiLCJCUkFORCIsIkRJUlRZIiwiRU1QVFlfUEFUSCIsIklOVkFMSUQiLCJORVZFUiIsIk9LIiwiUGFyc2VTdGF0dXMiLCJTY2hlbWEiLCJab2RUeXBlIiwiWm9kQW55IiwiWm9kQXJyYXkiLCJab2RCaWdJbnQiLCJab2RCb29sZWFuIiwiWm9kQnJhbmRlZCIsIlpvZENhdGNoIiwiWm9kRGF0ZSIsIlpvZERlZmF1bHQiLCJab2REaXNjcmltaW5hdGVkVW5pb24iLCJab2RFZmZlY3RzIiwiWm9kRW51bSIsIlpvZEVycm9yIiwiWm9kRmlyc3RQYXJ0eVR5cGVLaW5kIiwiWm9kRnVuY3Rpb24iLCJab2RJbnRlcnNlY3Rpb24iLCJab2RJc3N1ZUNvZGUiLCJab2RMYXp5IiwiWm9kTGl0ZXJhbCIsIlpvZE1hcCIsIlpvZE5hTiIsIlpvZE5hdGl2ZUVudW0iLCJab2ROZXZlciIsIlpvZE51bGwiLCJab2ROdWxsYWJsZSIsIlpvZE51bWJlciIsIlpvZE9iamVjdCIsIlpvZE9wdGlvbmFsIiwiWm9kUGFyc2VkVHlwZSIsIlpvZFBpcGVsaW5lIiwiWm9kUHJvbWlzZSIsIlpvZFJlYWRvbmx5IiwiWm9kUmVjb3JkIiwiWm9kU2NoZW1hIiwiWm9kU2V0IiwiWm9kU3RyaW5nIiwiWm9kU3ltYm9sIiwiWm9kVHJhbnNmb3JtZXIiLCJab2RUdXBsZSIsIlpvZFVuZGVmaW5lZCIsIlpvZFVuaW9uIiwiWm9kVW5rbm93biIsIlpvZFZvaWQiLCJhZGRJc3N1ZVRvQ29udGV4dCIsImFueSIsImFueVR5cGUiLCJhcnJheSIsImFycmF5VHlwZSIsImJpZ2ludCIsImJpZ0ludFR5cGUiLCJib29sZWFuIiwiYm9vbGVhblR5cGUiLCJjb2VyY2UiLCJjdXN0b20iLCJkYXRlIiwiZGF0ZVR5cGUiLCJkYXRldGltZVJlZ2V4IiwiZGVmYXVsdCIsInpvZF8zXzIzXzhfZGVmYXVsdCIsImRlZmF1bHRFcnJvck1hcCIsImVycm9yTWFwIiwiZGlzY3JpbWluYXRlZFVuaW9uIiwiZGlzY3JpbWluYXRlZFVuaW9uVHlwZSIsImVmZmVjdCIsImVmZmVjdHNUeXBlIiwiZW51bSIsImVudW1UeXBlIiwiZnVuY3Rpb24iLCJmdW5jdGlvblR5cGUiLCJnZXRFcnJvck1hcCIsImdldFBhcnNlZFR5cGUiLCJpbnN0YW5jZW9mIiwiaW5zdGFuY2VPZlR5cGUiLCJpbnRlcnNlY3Rpb24iLCJpbnRlcnNlY3Rpb25UeXBlIiwiaXNBYm9ydGVkIiwiaXNBc3luYyIsImlzRGlydHkiLCJpc1ZhbGlkIiwibGF0ZSIsImxhenkiLCJsYXp5VHlwZSIsImxpdGVyYWwiLCJsaXRlcmFsVHlwZSIsIm1ha2VJc3N1ZSIsIm1hcCIsIm1hcFR5cGUiLCJuYW4iLCJuYW5UeXBlIiwibmF0aXZlRW51bSIsIm5hdGl2ZUVudW1UeXBlIiwibmV2ZXIiLCJuZXZlclR5cGUiLCJudWxsIiwibnVsbFR5cGUiLCJudWxsYWJsZSIsIm51bGxhYmxlVHlwZSIsIm51bWJlciIsIm51bWJlclR5cGUiLCJvYmplY3QiLCJvYmplY3RUeXBlIiwib2JqZWN0VXRpbCIsIm9ib29sZWFuIiwib251bWJlciIsIm9wdGlvbmFsIiwib3B0aW9uYWxUeXBlIiwib3N0cmluZyIsInBpcGVsaW5lIiwicGlwZWxpbmVUeXBlIiwicHJlcHJvY2VzcyIsInByZXByb2Nlc3NUeXBlIiwicHJvbWlzZSIsInByb21pc2VUeXBlIiwicXVvdGVsZXNzSnNvbiIsInJlY29yZCIsInJlY29yZFR5cGUiLCJzZXQiLCJzZXRUeXBlIiwic2V0RXJyb3JNYXAiLCJzdHJpY3RPYmplY3QiLCJzdHJpY3RPYmplY3RUeXBlIiwic3RyaW5nIiwic3RyaW5nVHlwZSIsInN5bWJvbCIsInN5bWJvbFR5cGUiLCJ0cmFuc2Zvcm1lciIsInR1cGxlIiwidHVwbGVUeXBlIiwidW5kZWZpbmVkIiwidW5kZWZpbmVkVHlwZSIsInVuaW9uIiwidW5pb25UeXBlIiwidW5rbm93biIsInVua25vd25UeXBlIiwidXRpbCIsInZvaWQiLCJ2b2lkVHlwZSIsInoiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwidXRpbDIiLCJhc3NlcnRFcXVhbCIsInZhbCIsImFzc2VydElzIiwiX2FyZyIsImFzc2VydE5ldmVyIiwiX3giLCJFcnJvciIsImFycmF5VG9FbnVtIiwiaXRlbXMiLCJvYmoiLCJpdGVtIiwiZ2V0VmFsaWRFbnVtVmFsdWVzIiwidmFsaWRLZXlzIiwib2JqZWN0S2V5cyIsImZpbHRlciIsImsiLCJmaWx0ZXJlZCIsIm9iamVjdFZhbHVlcyIsImUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicHVzaCIsImZpbmQiLCJhcnIiLCJjaGVja2VyIiwiaXNJbnRlZ2VyIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJqb2luVmFsdWVzIiwic2VwYXJhdG9yIiwiam9pbiIsImpzb25TdHJpbmdpZnlSZXBsYWNlciIsIl8iLCJ2YWx1ZSIsInRvU3RyaW5nIiwib2JqZWN0VXRpbDIiLCJtZXJnZVNoYXBlcyIsImZpcnN0Iiwic2Vjb25kIiwiZGF0YSIsInQiLCJpc05hTiIsIkFycmF5IiwiaXNBcnJheSIsInRoZW4iLCJjYXRjaCIsIk1hcCIsIlNldCIsIkRhdGUiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJjb25zdHJ1Y3RvciIsImlzc3VlcyIsImFkZElzc3VlIiwic3ViIiwiYWRkSXNzdWVzIiwic3VicyIsImFjdHVhbFByb3RvIiwibmV3IiwidGFyZ2V0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJuYW1lIiwiZXJyb3JzIiwiZm9ybWF0IiwiX21hcHBlciIsIm1hcHBlciIsImlzc3VlIiwibWVzc2FnZSIsImZpZWxkRXJyb3JzIiwiX2Vycm9ycyIsInByb2Nlc3NFcnJvciIsImVycm9yIiwiY29kZSIsInVuaW9uRXJyb3JzIiwicmV0dXJuVHlwZUVycm9yIiwiYXJndW1lbnRzRXJyb3IiLCJwYXRoIiwibGVuZ3RoIiwiY3VyciIsImkiLCJlbCIsInRlcm1pbmFsIiwiYXNzZXJ0IiwiaXNFbXB0eSIsImZsYXR0ZW4iLCJmb3JtRXJyb3JzIiwiY3JlYXRlIiwiX2N0eCIsImludmFsaWRfdHlwZSIsInJlY2VpdmVkIiwiZXhwZWN0ZWQiLCJpbnZhbGlkX2xpdGVyYWwiLCJ1bnJlY29nbml6ZWRfa2V5cyIsImludmFsaWRfdW5pb24iLCJpbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3IiLCJvcHRpb25zIiwiaW52YWxpZF9lbnVtX3ZhbHVlIiwiaW52YWxpZF9hcmd1bWVudHMiLCJpbnZhbGlkX3JldHVybl90eXBlIiwiaW52YWxpZF9kYXRlIiwiaW52YWxpZF9zdHJpbmciLCJ2YWxpZGF0aW9uIiwiaW5jbHVkZXMiLCJwb3NpdGlvbiIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsInRvb19zbWFsbCIsInR5cGUiLCJleGFjdCIsImluY2x1c2l2ZSIsIm1pbmltdW0iLCJ0b29fYmlnIiwibWF4aW11bSIsImludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzIiwibm90X211bHRpcGxlX29mIiwibXVsdGlwbGVPZiIsIm5vdF9maW5pdGUiLCJkZWZhdWx0RXJyb3IiLCJvdmVycmlkZUVycm9yTWFwIiwicGFyYW1zIiwiZXJyb3JNYXBzIiwiaXNzdWVEYXRhIiwiZnVsbFBhdGgiLCJmdWxsSXNzdWUiLCJlcnJvck1lc3NhZ2UiLCJtYXBzIiwibSIsInNsaWNlIiwicmV2ZXJzZSIsImN0eCIsIm92ZXJyaWRlTWFwIiwiY29tbW9uIiwiY29udGV4dHVhbEVycm9yTWFwIiwic2NoZW1hRXJyb3JNYXAiLCJ4IiwiZGlydHkiLCJhYm9ydCIsIm1lcmdlQXJyYXkiLCJzdGF0dXMiLCJyZXN1bHRzIiwiYXJyYXlWYWx1ZSIsInMiLCJtZXJnZU9iamVjdEFzeW5jIiwicGFpcnMiLCJzeW5jUGFpcnMiLCJwYWlyIiwibWVyZ2VPYmplY3RTeW5jIiwiZmluYWxPYmplY3QiLCJhbHdheXNTZXQiLCJmcmVlemUiLCJQcm9taXNlIiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsInJlY2VpdmVyIiwic3RhdGUiLCJraW5kIiwiZiIsIlR5cGVFcnJvciIsImhhcyIsImdldCIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQiLCJTdXBwcmVzc2VkRXJyb3IiLCJzdXBwcmVzc2VkIiwiZXJyb3JVdGlsIiwiZXJyb3JVdGlsMiIsImVyclRvT2JqIiwiX1pvZEVudW1fY2FjaGUiLCJfWm9kTmF0aXZlRW51bV9jYWNoZSIsIlBhcnNlSW5wdXRMYXp5UGF0aCIsInBhcmVudCIsIl9jYWNoZWRQYXRoIiwiX3BhdGgiLCJfa2V5IiwiaGFuZGxlUmVzdWx0IiwicmVzdWx0Iiwic3VjY2VzcyIsIl9lcnJvciIsInByb2Nlc3NDcmVhdGVQYXJhbXMiLCJlcnJvck1hcDIiLCJpbnZhbGlkX3R5cGVfZXJyb3IiLCJyZXF1aXJlZF9lcnJvciIsImRlc2NyaXB0aW9uIiwiY3VzdG9tTWFwIiwiaXNzIiwiX2EiLCJfYiIsImRlZiIsInNwYSIsInNhZmVQYXJzZUFzeW5jIiwiX2RlZiIsInBhcnNlIiwiYmluZCIsInNhZmVQYXJzZSIsInBhcnNlQXN5bmMiLCJyZWZpbmUiLCJyZWZpbmVtZW50Iiwic3VwZXJSZWZpbmUiLCJudWxsaXNoIiwib3IiLCJhbmQiLCJ0cmFuc2Zvcm0iLCJicmFuZCIsImRlc2NyaWJlIiwicGlwZSIsInJlYWRvbmx5IiwiaXNOdWxsYWJsZSIsImlzT3B0aW9uYWwiLCJfZ2V0VHlwZSIsImlucHV0IiwiX2dldE9yUmV0dXJuQ3R4IiwicGFyc2VkVHlwZSIsIl9wcm9jZXNzSW5wdXRQYXJhbXMiLCJfcGFyc2VTeW5jIiwiX3BhcnNlIiwiX3BhcnNlQXN5bmMiLCJyZXNvbHZlIiwiYXN5bmMiLCJtYXliZUFzeW5jUmVzdWx0IiwiY2hlY2siLCJnZXRJc3N1ZVByb3BlcnRpZXMiLCJfcmVmaW5lbWVudCIsInNldEVycm9yIiwicmVmaW5lbWVudERhdGEiLCJzY2hlbWEiLCJ0eXBlTmFtZSIsIm9wdGlvbiIsImluY29taW5nIiwiZGVmYXVsdFZhbHVlRnVuYyIsImlubmVyVHlwZSIsImRlZmF1bHRWYWx1ZSIsImNhdGNoVmFsdWVGdW5jIiwiY2F0Y2hWYWx1ZSIsIlRoaXMiLCJjdWlkUmVnZXgiLCJjdWlkMlJlZ2V4IiwidWxpZFJlZ2V4IiwidXVpZFJlZ2V4IiwibmFub2lkUmVnZXgiLCJkdXJhdGlvblJlZ2V4IiwiZW1haWxSZWdleCIsIl9lbW9qaVJlZ2V4IiwiZW1vamlSZWdleCIsImlwdjRSZWdleCIsImlwdjZSZWdleCIsImJhc2U2NFJlZ2V4IiwiZGF0ZVJlZ2V4U291cmNlIiwiZGF0ZVJlZ2V4IiwiUmVnRXhwIiwidGltZVJlZ2V4U291cmNlIiwiYXJncyIsInJlZ2V4IiwicHJlY2lzaW9uIiwidGltZVJlZ2V4Iiwib3B0cyIsImxvY2FsIiwib2Zmc2V0IiwiaXNWYWxpZElQIiwiaXAiLCJ2ZXJzaW9uIiwidGVzdCIsIlN0cmluZyIsImN0eDIiLCJjaGVja3MiLCJ0b29CaWciLCJ0b29TbWFsbCIsIlVSTCIsImxhc3RJbmRleCIsInRlc3RSZXN1bHQiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsIl9yZWdleCIsIl9hZGRDaGVjayIsImVtYWlsIiwidXJsIiwiZW1vamkiLCJ1dWlkIiwibmFub2lkIiwiY3VpZCIsImN1aWQyIiwidWxpZCIsImJhc2U2NCIsImRhdGV0aW1lIiwidGltZSIsImR1cmF0aW9uIiwibWluIiwibWluTGVuZ3RoIiwibWF4IiwibWF4TGVuZ3RoIiwibGVuIiwibm9uZW1wdHkiLCJpc0RhdGV0aW1lIiwiY2giLCJpc0RhdGUiLCJpc1RpbWUiLCJpc0R1cmF0aW9uIiwiaXNFbWFpbCIsImlzVVJMIiwiaXNFbW9qaSIsImlzVVVJRCIsImlzTkFOT0lEIiwiaXNDVUlEIiwiaXNDVUlEMiIsImlzVUxJRCIsImlzSVAiLCJpc0Jhc2U2NCIsImZsb2F0U2FmZVJlbWFpbmRlciIsInN0ZXAiLCJ2YWxEZWNDb3VudCIsInNwbGl0Iiwic3RlcERlY0NvdW50IiwiZGVjQ291bnQiLCJ2YWxJbnQiLCJwYXJzZUludCIsInRvRml4ZWQiLCJzdGVwSW50IiwicG93IiwiYXJndW1lbnRzIiwiZ3RlIiwibHRlIiwic2V0TGltaXQiLCJndCIsImx0IiwiaW50IiwicG9zaXRpdmUiLCJuZWdhdGl2ZSIsIm5vbnBvc2l0aXZlIiwibm9ubmVnYXRpdmUiLCJmaW5pdGUiLCJzYWZlIiwiTUlOX1NBRkVfSU5URUdFUiIsIk1BWF9TQUZFX0lOVEVHRVIiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiaXNJbnQiLCJCaWdJbnQiLCJCb29sZWFuIiwiZ2V0VGltZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiX2FueSIsIl91bmtub3duIiwiZXhhY3RMZW5ndGgiLCJhbGwiLCJyZXN1bHQyIiwiZWxlbWVudCIsImRlZXBQYXJ0aWFsaWZ5IiwibmV3U2hhcGUiLCJzaGFwZSIsImZpZWxkU2NoZW1hIiwidW53cmFwIiwiX2NhY2hlZCIsIm5vbnN0cmljdCIsInBhc3N0aHJvdWdoIiwiYXVnbWVudCIsImV4dGVuZCIsIl9nZXRDYWNoZWQiLCJzaGFwZUtleXMiLCJleHRyYUtleXMiLCJjYXRjaGFsbCIsInVua25vd25LZXlzIiwia2V5VmFsaWRhdG9yIiwic3RyaWN0IiwiX2MiLCJfZCIsInN0cmlwIiwiYXVnbWVudGF0aW9uIiwibWVyZ2UiLCJtZXJnaW5nIiwibWVyZ2VkIiwic2V0S2V5IiwiaW5kZXgiLCJwaWNrIiwibWFzayIsImZvckVhY2giLCJvbWl0IiwiZGVlcFBhcnRpYWwiLCJwYXJ0aWFsIiwicmVxdWlyZWQiLCJuZXdGaWVsZCIsImtleW9mIiwiY3JlYXRlWm9kRW51bSIsInN0cmljdENyZWF0ZSIsImxhenljcmVhdGUiLCJoYW5kbGVSZXN1bHRzIiwiY2hpbGRDdHgiLCJpc3N1ZXMyIiwidHlwZXMiLCJnZXREaXNjcmltaW5hdG9yIiwiZGlzY3JpbWluYXRvciIsImRpc2NyaW1pbmF0b3JWYWx1ZSIsIm9wdGlvbnNNYXAiLCJmcm9tIiwiZGlzY3JpbWluYXRvclZhbHVlcyIsIm1lcmdlVmFsdWVzIiwiYSIsImIiLCJhVHlwZSIsImJUeXBlIiwidmFsaWQiLCJiS2V5cyIsInNoYXJlZEtleXMiLCJpbmRleE9mIiwibmV3T2JqIiwic2hhcmVkVmFsdWUiLCJuZXdBcnJheSIsIml0ZW1BIiwiaXRlbUIiLCJoYW5kbGVQYXJzZWQiLCJwYXJzZWRMZWZ0IiwicGFyc2VkUmlnaHQiLCJsZWZ0IiwicmlnaHQiLCJyZXN0IiwiaXRlbUluZGV4Iiwic2NoZW1hcyIsImtleVNjaGVtYSIsImtleVR5cGUiLCJ2YWx1ZVNjaGVtYSIsInZhbHVlVHlwZSIsInRoaXJkIiwiZW50cmllcyIsImZpbmFsTWFwIiwibWluU2l6ZSIsInNpemUiLCJtYXhTaXplIiwiZmluYWxpemVTZXQiLCJlbGVtZW50czIiLCJwYXJzZWRTZXQiLCJhZGQiLCJlbGVtZW50cyIsInZhbHVlcyIsInZhbGlkYXRlIiwiaW1wbGVtZW50IiwibWFrZUFyZ3NJc3N1ZSIsIm1ha2VSZXR1cm5zSXNzdWUiLCJyZXR1cm5zIiwiZm4iLCJtZSIsInBhcnNlZEFyZ3MiLCJSZWZsZWN0IiwiYXBwbHkiLCJwYXJzZWRSZXR1cm5zIiwicGFyYW1ldGVycyIsInJldHVyblR5cGUiLCJmdW5jIiwidmFsaWRhdGVkRnVuYyIsInN0cmljdEltcGxlbWVudCIsImdldHRlciIsImxhenlTY2hlbWEiLCJleHBlY3RlZFZhbHVlcyIsImVudW1WYWx1ZXMiLCJWYWx1ZXMiLCJFbnVtIiwiZXh0cmFjdCIsIm5ld0RlZiIsImV4Y2x1ZGUiLCJvcHQiLCJXZWFrTWFwIiwibmF0aXZlRW51bVZhbHVlcyIsInByb21pc2lmaWVkIiwic291cmNlVHlwZSIsImNoZWNrQ3R4IiwiYXJnIiwiZmF0YWwiLCJwcm9jZXNzZWQiLCJwcm9jZXNzZWQyIiwiZXhlY3V0ZVJlZmluZW1lbnQiLCJhY2MiLCJpbm5lciIsImJhc2UiLCJjcmVhdGVXaXRoUHJlcHJvY2VzcyIsInJlbW92ZURlZmF1bHQiLCJuZXdDdHgiLCJyZW1vdmVDYXRjaCIsIlN5bWJvbCIsImhhbmRsZUFzeW5jIiwiaW5SZXN1bHQiLCJpbiIsIm91dCIsInAiLCJfZmF0YWwiLCJwMiIsIlpvZEZpcnN0UGFydHlUeXBlS2luZDIiLCJjbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsRUFBQSxFQUFBQSxDQUFBLEtBQUFBLEVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBakMsT0FBQTtFQUFBa0MsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUEzQixVQUFBO0VBQUE0QixRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBdEMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQXVDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLGtCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUMsc0JBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFDLGdCQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQyxnQkFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEs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QyxZQUFBO0VBQ1ZDLE9BQUE7RUFDQUMsUUFBQSxFQUFVQyxZQUFBO0VBQ1ZDLFVBQUEsRUFBWUMsY0FBQTtFQUNaQyxPQUFBLEVBQVNDLFdBQUE7RUFDVEUsTUFBQSxFQUFRQyxVQUFBO0VBQ1JDLEdBQUEsRUFBS0MsT0FBQTtFQUNMRSxZQUFBLEVBQWNDLGdCQUFBO0VBQ2RDLE1BQUEsRUFBUUMsVUFBQTtFQUNSQyxNQUFBLEVBQVFDLFVBQUE7RUFDUkMsV0FBQSxFQUFhN0QsV0FBQTtFQUNiOEQsS0FBQSxFQUFPQyxTQUFBO0VBQ1AsYUFBYUUsYUFBQTtFQUNiQyxLQUFBLEVBQU9DLFNBQUE7RUFDUEMsT0FBQSxFQUFTQyxXQUFBO0VBQ1QsUUFBUUcsUUFBQTtFQUNSNUksS0FBQTtFQUNBb0IsWUFBQTtFQUNBaUcsYUFBQTtFQUNBckc7QUFDSixDQUFDOzs7QUR0b0lELElBQU84QyxrQkFBQSxHQUFRK0UsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==