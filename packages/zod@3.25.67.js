System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["zod","3.25.67"]]);
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

// .beyond/uimport/zod.3.25.67.js
var zod_3_25_67_exports = {};
__export(zod_3_25_67_exports, {
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
  default: () => zod_3_25_67_default,
  defaultErrorMap: () => en_default,
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
  z: () => external_exports
});
module.exports = __toCommonJS(zod_3_25_67_exports);

// node_modules/zod/dist/esm/v3/external.js
var external_exports = {};
__export(external_exports, {
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
  defaultErrorMap: () => en_default,
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
  void: () => voidType
});

// node_modules/zod/dist/esm/v3/helpers/util.js
var util;
(function (util2) {
  util2.assertEqual = _ => {};
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
  util2.isInteger = typeof Number.isInteger === "function" ? val => Number.isInteger(val) : val => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
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
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
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

// node_modules/zod/dist/esm/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
var quotelessJson = obj => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class extends Error {
  get errors() {
    return this.issues;
  }
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

// node_modules/zod/dist/esm/v3/locales/en.js
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
var en_default = errorMap;

// node_modules/zod/dist/esm/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/zod/dist/esm/v3/helpers/parseUtil.js
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
    errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, overrideMap, overrideMap === en_default ? void 0 : en_default].filter(x => !!x)
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

// node_modules/zod/dist/esm/v3/helpers/errorUtil.js
var errorUtil;
(function (errorUtil2) {
  errorUtil2.errToObj = message => typeof message === "string" ? {
    message
  } : message || {};
  errorUtil2.toString = message => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/dist/esm/v3/types.js
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
      if (Array.isArray(this._key)) {
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
    const {
      message
    } = params;
    if (iss.code === "invalid_enum_value") {
      return {
        message: message ?? ctx.defaultError
      };
    }
    if (typeof ctx.data === "undefined") {
      return {
        message: message ?? required_error ?? ctx.defaultError
      };
    }
    if (iss.code !== "invalid_type") return {
      message: ctx.defaultError
    };
    return {
      message: message ?? invalid_type_error ?? ctx.defaultError
    };
  };
  return {
    errorMap: customMap,
    description
  };
}
var ZodType = class {
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
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
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
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({
          data,
          path: [],
          parent: ctx
        });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({
      data,
      path: [],
      parent: ctx
    }).then(result => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
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
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
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
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: data => this["~validate"](data)
    };
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
    return ZodArray.create(this);
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
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
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
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt)) return false;
  try {
    const [header] = jwt.split(".");
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null) return false;
    if ("typ" in decoded && decoded?.typ !== "JWT") return false;
    if (!decoded.alg) return false;
    if (alg && decoded.alg !== alg) return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
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
        } catch {
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
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
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
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
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
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({
      kind: "jwt",
      ...errorUtil.errToObj(options)
    });
  }
  ip(options) {
    return this._addCheck({
      kind: "ip",
      ...errorUtil.errToObj(options)
    });
  }
  cidr(options) {
    return this._addCheck({
      kind: "cidr",
      ...errorUtil.errToObj(options)
    });
  }
  datetime(options) {
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
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
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
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
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
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
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
  get isCIDR() {
    return !!this._def.checks.find(ch => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find(ch => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find(ch => ch.kind === "base64url");
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
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
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
    let max = null;
    let min = null;
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
    coerce: params?.coerce || false,
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
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
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
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
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
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
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
    coerce: params?.coerce || false,
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
    if (Number.isNaN(input.data.getTime())) {
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
    coerce: params?.coerce || false,
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
    this._cached = {
      shape,
      keys
    };
    return this._cached;
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
      } else if (unknownKeys === "strip") {} else {
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
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys") return {
            message: errorUtil.errToObj(message).message ?? defaultError
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
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
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
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
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
    }
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
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter(x => !!x),
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
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter(x => !!x),
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
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
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
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
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
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
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
        if (!isValid(base)) return INVALID;
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
          if (!isValid(base)) return INVALID;
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
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? {
    message: params
  } : params;
  const p2 = typeof p === "string" ? {
    message: p
  } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check) return ZodAny.create().superRefine((data, ctx) => {
    const r = check(data);
    if (r instanceof Promise) {
      return r.then(r2 => {
        if (!r2) {
          const params = cleanParams(_params, data);
          const _fatal = params.fatal ?? fatal ?? true;
          ctx.addIssue({
            code: "custom",
            ...params,
            fatal: _fatal
          });
        }
      });
    }
    if (!r) {
      const params = cleanParams(_params, data);
      const _fatal = params.fatal ?? fatal ?? true;
      ctx.addIssue({
        code: "custom",
        ...params,
        fatal: _fatal
      });
    }
    return;
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
var Class = class {
  constructor(..._) {}
};
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

// node_modules/zod/dist/esm/v3/index.js
var v3_default = external_exports;

// node_modules/zod/dist/esm/index.js
var esm_default = v3_default;

// .beyond/uimport/zod.3.25.67.js
var zod_3_25_67_default = esm_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC96b2QuMy4yNS42Ny5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvZXh0ZXJuYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2Rpc3QvZXNtL3YzL2hlbHBlcnMvdXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvWm9kRXJyb3IuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2Rpc3QvZXNtL3YzL2xvY2FsZXMvZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2Rpc3QvZXNtL3YzL2Vycm9ycy5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvaGVscGVycy9wYXJzZVV0aWwuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2Rpc3QvZXNtL3YzL2hlbHBlcnMvZXJyb3JVdGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3pvZC9kaXN0L2VzbS92My90eXBlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2Rpc3QvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbInpvZF8zXzI1XzY3X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkJSQU5EIiwiRElSVFkiLCJFTVBUWV9QQVRIIiwiSU5WQUxJRCIsIk5FVkVSIiwiT0siLCJQYXJzZVN0YXR1cyIsIlNjaGVtYSIsIlpvZFR5cGUiLCJab2RBbnkiLCJab2RBcnJheSIsIlpvZEJpZ0ludCIsIlpvZEJvb2xlYW4iLCJab2RCcmFuZGVkIiwiWm9kQ2F0Y2giLCJab2REYXRlIiwiWm9kRGVmYXVsdCIsIlpvZERpc2NyaW1pbmF0ZWRVbmlvbiIsIlpvZEVmZmVjdHMiLCJab2RFbnVtIiwiWm9kRXJyb3IiLCJab2RGaXJzdFBhcnR5VHlwZUtpbmQiLCJab2RGdW5jdGlvbiIsIlpvZEludGVyc2VjdGlvbiIsIlpvZElzc3VlQ29kZSIsIlpvZExhenkiLCJab2RMaXRlcmFsIiwiWm9kTWFwIiwiWm9kTmFOIiwiWm9kTmF0aXZlRW51bSIsIlpvZE5ldmVyIiwiWm9kTnVsbCIsIlpvZE51bGxhYmxlIiwiWm9kTnVtYmVyIiwiWm9kT2JqZWN0IiwiWm9kT3B0aW9uYWwiLCJab2RQYXJzZWRUeXBlIiwiWm9kUGlwZWxpbmUiLCJab2RQcm9taXNlIiwiWm9kUmVhZG9ubHkiLCJab2RSZWNvcmQiLCJab2RTY2hlbWEiLCJab2RTZXQiLCJab2RTdHJpbmciLCJab2RTeW1ib2wiLCJab2RUcmFuc2Zvcm1lciIsIlpvZFR1cGxlIiwiWm9kVW5kZWZpbmVkIiwiWm9kVW5pb24iLCJab2RVbmtub3duIiwiWm9kVm9pZCIsImFkZElzc3VlVG9Db250ZXh0IiwiYW55IiwiYW55VHlwZSIsImFycmF5IiwiYXJyYXlUeXBlIiwiYmlnaW50IiwiYmlnSW50VHlwZSIsImJvb2xlYW4iLCJib29sZWFuVHlwZSIsImNvZXJjZSIsImN1c3RvbSIsImRhdGUiLCJkYXRlVHlwZSIsImRhdGV0aW1lUmVnZXgiLCJkZWZhdWx0Iiwiem9kXzNfMjVfNjdfZGVmYXVsdCIsImRlZmF1bHRFcnJvck1hcCIsImVuX2RlZmF1bHQiLCJkaXNjcmltaW5hdGVkVW5pb24iLCJkaXNjcmltaW5hdGVkVW5pb25UeXBlIiwiZWZmZWN0IiwiZWZmZWN0c1R5cGUiLCJlbnVtIiwiZW51bVR5cGUiLCJmdW5jdGlvbiIsImZ1bmN0aW9uVHlwZSIsImdldEVycm9yTWFwIiwiZ2V0UGFyc2VkVHlwZSIsImluc3RhbmNlb2YiLCJpbnN0YW5jZU9mVHlwZSIsImludGVyc2VjdGlvbiIsImludGVyc2VjdGlvblR5cGUiLCJpc0Fib3J0ZWQiLCJpc0FzeW5jIiwiaXNEaXJ0eSIsImlzVmFsaWQiLCJsYXRlIiwibGF6eSIsImxhenlUeXBlIiwibGl0ZXJhbCIsImxpdGVyYWxUeXBlIiwibWFrZUlzc3VlIiwibWFwIiwibWFwVHlwZSIsIm5hbiIsIm5hblR5cGUiLCJuYXRpdmVFbnVtIiwibmF0aXZlRW51bVR5cGUiLCJuZXZlciIsIm5ldmVyVHlwZSIsIm51bGwiLCJudWxsVHlwZSIsIm51bGxhYmxlIiwibnVsbGFibGVUeXBlIiwibnVtYmVyIiwibnVtYmVyVHlwZSIsIm9iamVjdCIsIm9iamVjdFR5cGUiLCJvYmplY3RVdGlsIiwib2Jvb2xlYW4iLCJvbnVtYmVyIiwib3B0aW9uYWwiLCJvcHRpb25hbFR5cGUiLCJvc3RyaW5nIiwicGlwZWxpbmUiLCJwaXBlbGluZVR5cGUiLCJwcmVwcm9jZXNzIiwicHJlcHJvY2Vzc1R5cGUiLCJwcm9taXNlIiwicHJvbWlzZVR5cGUiLCJxdW90ZWxlc3NKc29uIiwicmVjb3JkIiwicmVjb3JkVHlwZSIsInNldCIsInNldFR5cGUiLCJzZXRFcnJvck1hcCIsInN0cmljdE9iamVjdCIsInN0cmljdE9iamVjdFR5cGUiLCJzdHJpbmciLCJzdHJpbmdUeXBlIiwic3ltYm9sIiwic3ltYm9sVHlwZSIsInRyYW5zZm9ybWVyIiwidHVwbGUiLCJ0dXBsZVR5cGUiLCJ1bmRlZmluZWQiLCJ1bmRlZmluZWRUeXBlIiwidW5pb24iLCJ1bmlvblR5cGUiLCJ1bmtub3duIiwidW5rbm93blR5cGUiLCJ1dGlsIiwidm9pZCIsInZvaWRUeXBlIiwieiIsImV4dGVybmFsX2V4cG9ydHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwidXRpbDIiLCJhc3NlcnRFcXVhbCIsIl8iLCJhc3NlcnRJcyIsIl9hcmciLCJhc3NlcnROZXZlciIsIl94IiwiRXJyb3IiLCJhcnJheVRvRW51bSIsIml0ZW1zIiwib2JqIiwiaXRlbSIsImdldFZhbGlkRW51bVZhbHVlcyIsInZhbGlkS2V5cyIsIm9iamVjdEtleXMiLCJmaWx0ZXIiLCJrIiwiZmlsdGVyZWQiLCJvYmplY3RWYWx1ZXMiLCJlIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInB1c2giLCJmaW5kIiwiYXJyIiwiY2hlY2tlciIsImlzSW50ZWdlciIsIk51bWJlciIsInZhbCIsImlzRmluaXRlIiwiTWF0aCIsImZsb29yIiwiam9pblZhbHVlcyIsInNlcGFyYXRvciIsImpvaW4iLCJqc29uU3RyaW5naWZ5UmVwbGFjZXIiLCJ2YWx1ZSIsInRvU3RyaW5nIiwib2JqZWN0VXRpbDIiLCJtZXJnZVNoYXBlcyIsImZpcnN0Iiwic2Vjb25kIiwiZGF0YSIsInQiLCJpc05hTiIsIkFycmF5IiwiaXNBcnJheSIsInRoZW4iLCJjYXRjaCIsIk1hcCIsIlNldCIsIkRhdGUiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJlcnJvcnMiLCJpc3N1ZXMiLCJjb25zdHJ1Y3RvciIsImFkZElzc3VlIiwic3ViIiwiYWRkSXNzdWVzIiwic3VicyIsImFjdHVhbFByb3RvIiwibmV3IiwidGFyZ2V0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJuYW1lIiwiZm9ybWF0IiwiX21hcHBlciIsIm1hcHBlciIsImlzc3VlIiwibWVzc2FnZSIsImZpZWxkRXJyb3JzIiwiX2Vycm9ycyIsInByb2Nlc3NFcnJvciIsImVycm9yIiwiY29kZSIsInVuaW9uRXJyb3JzIiwicmV0dXJuVHlwZUVycm9yIiwiYXJndW1lbnRzRXJyb3IiLCJwYXRoIiwibGVuZ3RoIiwiY3VyciIsImkiLCJlbCIsInRlcm1pbmFsIiwiYXNzZXJ0IiwiaXNFbXB0eSIsImZsYXR0ZW4iLCJmb3JtRXJyb3JzIiwiY3JlYXRlIiwiZXJyb3JNYXAiLCJfY3R4IiwiaW52YWxpZF90eXBlIiwicmVjZWl2ZWQiLCJleHBlY3RlZCIsImludmFsaWRfbGl0ZXJhbCIsInVucmVjb2duaXplZF9rZXlzIiwiaW52YWxpZF91bmlvbiIsImludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvciIsIm9wdGlvbnMiLCJpbnZhbGlkX2VudW1fdmFsdWUiLCJpbnZhbGlkX2FyZ3VtZW50cyIsImludmFsaWRfcmV0dXJuX3R5cGUiLCJpbnZhbGlkX2RhdGUiLCJpbnZhbGlkX3N0cmluZyIsInZhbGlkYXRpb24iLCJpbmNsdWRlcyIsInBvc2l0aW9uIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwidG9vX3NtYWxsIiwidHlwZSIsImV4YWN0IiwiaW5jbHVzaXZlIiwibWluaW11bSIsInRvb19iaWciLCJtYXhpbXVtIiwiaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXMiLCJub3RfbXVsdGlwbGVfb2YiLCJtdWx0aXBsZU9mIiwibm90X2Zpbml0ZSIsImRlZmF1bHRFcnJvciIsIm92ZXJyaWRlRXJyb3JNYXAiLCJwYXJhbXMiLCJlcnJvck1hcHMiLCJpc3N1ZURhdGEiLCJmdWxsUGF0aCIsImZ1bGxJc3N1ZSIsImVycm9yTWVzc2FnZSIsIm1hcHMiLCJtIiwic2xpY2UiLCJyZXZlcnNlIiwiY3R4Iiwib3ZlcnJpZGVNYXAiLCJjb21tb24iLCJjb250ZXh0dWFsRXJyb3JNYXAiLCJzY2hlbWFFcnJvck1hcCIsIngiLCJkaXJ0eSIsImFib3J0IiwibWVyZ2VBcnJheSIsInN0YXR1cyIsInJlc3VsdHMiLCJhcnJheVZhbHVlIiwicyIsIm1lcmdlT2JqZWN0QXN5bmMiLCJwYWlycyIsInN5bmNQYWlycyIsInBhaXIiLCJtZXJnZU9iamVjdFN5bmMiLCJmaW5hbE9iamVjdCIsImFsd2F5c1NldCIsImZyZWV6ZSIsIlByb21pc2UiLCJlcnJvclV0aWwiLCJlcnJvclV0aWwyIiwiZXJyVG9PYmoiLCJQYXJzZUlucHV0TGF6eVBhdGgiLCJwYXJlbnQiLCJfY2FjaGVkUGF0aCIsIl9wYXRoIiwiX2tleSIsImhhbmRsZVJlc3VsdCIsInJlc3VsdCIsInN1Y2Nlc3MiLCJfZXJyb3IiLCJwcm9jZXNzQ3JlYXRlUGFyYW1zIiwiZXJyb3JNYXAyIiwiaW52YWxpZF90eXBlX2Vycm9yIiwicmVxdWlyZWRfZXJyb3IiLCJkZXNjcmlwdGlvbiIsImN1c3RvbU1hcCIsImlzcyIsIl9kZWYiLCJfZ2V0VHlwZSIsImlucHV0IiwiX2dldE9yUmV0dXJuQ3R4IiwicGFyc2VkVHlwZSIsIl9wcm9jZXNzSW5wdXRQYXJhbXMiLCJfcGFyc2VTeW5jIiwiX3BhcnNlIiwiX3BhcnNlQXN5bmMiLCJyZXNvbHZlIiwicGFyc2UiLCJzYWZlUGFyc2UiLCJhc3luYyIsIn52YWxpZGF0ZSIsImVyciIsInRvTG93ZXJDYXNlIiwicGFyc2VBc3luYyIsInNhZmVQYXJzZUFzeW5jIiwibWF5YmVBc3luY1Jlc3VsdCIsInJlZmluZSIsImNoZWNrIiwiZ2V0SXNzdWVQcm9wZXJ0aWVzIiwiX3JlZmluZW1lbnQiLCJzZXRFcnJvciIsInJlZmluZW1lbnQiLCJyZWZpbmVtZW50RGF0YSIsInNjaGVtYSIsInR5cGVOYW1lIiwic3VwZXJSZWZpbmUiLCJkZWYiLCJzcGEiLCJiaW5kIiwibnVsbGlzaCIsIm9yIiwiYW5kIiwidHJhbnNmb3JtIiwiYnJhbmQiLCJkZXNjcmliZSIsInBpcGUiLCJyZWFkb25seSIsImlzTnVsbGFibGUiLCJpc09wdGlvbmFsIiwidmVyc2lvbiIsInZlbmRvciIsInZhbGlkYXRlIiwib3B0aW9uIiwiaW5jb21pbmciLCJkZWZhdWx0VmFsdWVGdW5jIiwiaW5uZXJUeXBlIiwiZGVmYXVsdFZhbHVlIiwiY2F0Y2hWYWx1ZUZ1bmMiLCJjYXRjaFZhbHVlIiwiVGhpcyIsImN1aWRSZWdleCIsImN1aWQyUmVnZXgiLCJ1bGlkUmVnZXgiLCJ1dWlkUmVnZXgiLCJuYW5vaWRSZWdleCIsImp3dFJlZ2V4IiwiZHVyYXRpb25SZWdleCIsImVtYWlsUmVnZXgiLCJfZW1vamlSZWdleCIsImVtb2ppUmVnZXgiLCJpcHY0UmVnZXgiLCJpcHY0Q2lkclJlZ2V4IiwiaXB2NlJlZ2V4IiwiaXB2NkNpZHJSZWdleCIsImJhc2U2NFJlZ2V4IiwiYmFzZTY0dXJsUmVnZXgiLCJkYXRlUmVnZXhTb3VyY2UiLCJkYXRlUmVnZXgiLCJSZWdFeHAiLCJ0aW1lUmVnZXhTb3VyY2UiLCJhcmdzIiwic2Vjb25kc1JlZ2V4U291cmNlIiwicHJlY2lzaW9uIiwic2Vjb25kc1F1YW50aWZpZXIiLCJ0aW1lUmVnZXgiLCJyZWdleCIsIm9wdHMiLCJsb2NhbCIsIm9mZnNldCIsImlzVmFsaWRJUCIsImlwIiwidGVzdCIsImlzVmFsaWRKV1QiLCJqd3QiLCJhbGciLCJoZWFkZXIiLCJzcGxpdCIsImJhc2U2NCIsInBhZEVuZCIsImRlY29kZWQiLCJhdG9iIiwidHlwIiwiaXNWYWxpZENpZHIiLCJTdHJpbmciLCJjdHgyIiwiY2hlY2tzIiwia2luZCIsInRvb0JpZyIsInRvb1NtYWxsIiwiVVJMIiwibGFzdEluZGV4IiwidGVzdFJlc3VsdCIsInRyaW0iLCJ0b1VwcGVyQ2FzZSIsIl9yZWdleCIsIl9hZGRDaGVjayIsImVtYWlsIiwidXJsIiwiZW1vamkiLCJ1dWlkIiwibmFub2lkIiwiY3VpZCIsImN1aWQyIiwidWxpZCIsImJhc2U2NHVybCIsImNpZHIiLCJkYXRldGltZSIsInRpbWUiLCJkdXJhdGlvbiIsIm1pbiIsIm1pbkxlbmd0aCIsIm1heCIsIm1heExlbmd0aCIsImxlbiIsIm5vbmVtcHR5IiwiaXNEYXRldGltZSIsImNoIiwiaXNEYXRlIiwiaXNUaW1lIiwiaXNEdXJhdGlvbiIsImlzRW1haWwiLCJpc1VSTCIsImlzRW1vamkiLCJpc1VVSUQiLCJpc05BTk9JRCIsImlzQ1VJRCIsImlzQ1VJRDIiLCJpc1VMSUQiLCJpc0lQIiwiaXNDSURSIiwiaXNCYXNlNjQiLCJpc0Jhc2U2NHVybCIsImZsb2F0U2FmZVJlbWFpbmRlciIsInN0ZXAiLCJ2YWxEZWNDb3VudCIsInN0ZXBEZWNDb3VudCIsImRlY0NvdW50IiwidmFsSW50IiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwic3RlcEludCIsImFyZ3VtZW50cyIsImd0ZSIsImx0ZSIsInNldExpbWl0IiwiZ3QiLCJsdCIsImludCIsInBvc2l0aXZlIiwibmVnYXRpdmUiLCJub25wb3NpdGl2ZSIsIm5vbm5lZ2F0aXZlIiwiZmluaXRlIiwic2FmZSIsIk1JTl9TQUZFX0lOVEVHRVIiLCJNQVhfU0FGRV9JTlRFR0VSIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImlzSW50IiwiQmlnSW50IiwiX2dldEludmFsaWRJbnB1dCIsIkJvb2xlYW4iLCJnZXRUaW1lIiwibWluRGF0ZSIsIm1heERhdGUiLCJfYW55IiwiX3Vua25vd24iLCJleGFjdExlbmd0aCIsImFsbCIsInJlc3VsdDIiLCJlbGVtZW50IiwiZGVlcFBhcnRpYWxpZnkiLCJuZXdTaGFwZSIsInNoYXBlIiwiZmllbGRTY2hlbWEiLCJ1bndyYXAiLCJfY2FjaGVkIiwibm9uc3RyaWN0IiwicGFzc3Rocm91Z2giLCJhdWdtZW50IiwiZXh0ZW5kIiwiX2dldENhY2hlZCIsInNoYXBlS2V5cyIsImV4dHJhS2V5cyIsImNhdGNoYWxsIiwidW5rbm93bktleXMiLCJrZXlWYWxpZGF0b3IiLCJzdHJpY3QiLCJzdHJpcCIsImF1Z21lbnRhdGlvbiIsIm1lcmdlIiwibWVyZ2luZyIsIm1lcmdlZCIsInNldEtleSIsImluZGV4IiwicGljayIsIm1hc2siLCJvbWl0IiwiZGVlcFBhcnRpYWwiLCJwYXJ0aWFsIiwicmVxdWlyZWQiLCJuZXdGaWVsZCIsImtleW9mIiwiY3JlYXRlWm9kRW51bSIsInN0cmljdENyZWF0ZSIsImxhenljcmVhdGUiLCJoYW5kbGVSZXN1bHRzIiwiY2hpbGRDdHgiLCJpc3N1ZXMyIiwidHlwZXMiLCJnZXREaXNjcmltaW5hdG9yIiwiZGlzY3JpbWluYXRvciIsImRpc2NyaW1pbmF0b3JWYWx1ZSIsIm9wdGlvbnNNYXAiLCJnZXQiLCJmcm9tIiwiZGlzY3JpbWluYXRvclZhbHVlcyIsImhhcyIsIm1lcmdlVmFsdWVzIiwiYSIsImIiLCJhVHlwZSIsImJUeXBlIiwidmFsaWQiLCJiS2V5cyIsInNoYXJlZEtleXMiLCJpbmRleE9mIiwibmV3T2JqIiwic2hhcmVkVmFsdWUiLCJuZXdBcnJheSIsIml0ZW1BIiwiaXRlbUIiLCJoYW5kbGVQYXJzZWQiLCJwYXJzZWRMZWZ0IiwicGFyc2VkUmlnaHQiLCJsZWZ0IiwicmlnaHQiLCJyZXN0IiwiaXRlbUluZGV4Iiwic2NoZW1hcyIsImtleVNjaGVtYSIsImtleVR5cGUiLCJ2YWx1ZVNjaGVtYSIsInZhbHVlVHlwZSIsInRoaXJkIiwiZW50cmllcyIsImZpbmFsTWFwIiwibWluU2l6ZSIsInNpemUiLCJtYXhTaXplIiwiZmluYWxpemVTZXQiLCJlbGVtZW50czIiLCJwYXJzZWRTZXQiLCJhZGQiLCJlbGVtZW50cyIsInZhbHVlcyIsImltcGxlbWVudCIsIm1ha2VBcmdzSXNzdWUiLCJtYWtlUmV0dXJuc0lzc3VlIiwicmV0dXJucyIsImZuIiwibWUiLCJwYXJzZWRBcmdzIiwiUmVmbGVjdCIsImFwcGx5IiwicGFyc2VkUmV0dXJucyIsInBhcmFtZXRlcnMiLCJyZXR1cm5UeXBlIiwiZnVuYyIsInZhbGlkYXRlZEZ1bmMiLCJzdHJpY3RJbXBsZW1lbnQiLCJnZXR0ZXIiLCJsYXp5U2NoZW1hIiwiZXhwZWN0ZWRWYWx1ZXMiLCJfY2FjaGUiLCJlbnVtVmFsdWVzIiwiVmFsdWVzIiwiRW51bSIsImV4dHJhY3QiLCJuZXdEZWYiLCJleGNsdWRlIiwib3B0IiwibmF0aXZlRW51bVZhbHVlcyIsInByb21pc2lmaWVkIiwic291cmNlVHlwZSIsImNoZWNrQ3R4IiwiYXJnIiwiZmF0YWwiLCJwcm9jZXNzZWQiLCJwcm9jZXNzZWQyIiwiZXhlY3V0ZVJlZmluZW1lbnQiLCJhY2MiLCJpbm5lciIsImJhc2UiLCJjcmVhdGVXaXRoUHJlcHJvY2VzcyIsInJlbW92ZURlZmF1bHQiLCJuZXdDdHgiLCJyZW1vdmVDYXRjaCIsIlN5bWJvbCIsImhhbmRsZUFzeW5jIiwiaW5SZXN1bHQiLCJpbiIsIm91dCIsImNsZWFuUGFyYW1zIiwicCIsInAyIiwiX3BhcmFtcyIsInIiLCJyMiIsIl9mYXRhbCIsIlpvZEZpcnN0UGFydHlUeXBlS2luZDIiLCJDbGFzcyIsImNscyIsInYzX2RlZmF1bHQiLCJlc21fZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxFQUFBLEVBQUFBLENBQUEsS0FBQUEsRUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFqQyxPQUFBO0VBQUFrQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQTNCLFVBQUE7RUFBQTRCLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUF0QyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBdUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsbUJBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQyxzQkFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUMsZ0JBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFDLGdCQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBN0QsV0FBQTtFQUFBOEQsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFDLGFBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsQ0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQXZKLG1CQUFBOzs7QUNBQSxJQUFBb0osZ0JBQUE7QUFBQW5KLFFBQUEsQ0FBQW1KLGdCQUFBO0VBQUFsSixLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxFQUFBLEVBQUFBLENBQUEsS0FBQUEsRUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFqQyxPQUFBO0VBQUFrQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQTNCLFVBQUE7RUFBQTRCLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUF0QyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBdUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBRyxlQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFDLHNCQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQyxnQkFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUMsZ0JBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUE3RCxXQUFBO0VBQUE4RCxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUMsYUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTs7O0FDQU8s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QyxDQUFDLEtBQUtuSSxJQUFBLENBQUtrRyxNQUFBLENBQU81UCxJQUFBLENBQU0yUixFQUFBLElBQU9BLEVBQUEsQ0FBRzlCLElBQUEsS0FBUyxNQUFNO0VBQzdEO0VBQ0EsSUFBSWlDLFdBQUEsRUFBYTtJQUNiLE9BQU8sQ0FBQyxDQUFDLEtBQUtwSSxJQUFBLENBQUtrRyxNQUFBLENBQU81UCxJQUFBLENBQU0yUixFQUFBLElBQU9BLEVBQUEsQ0FBRzlCLElBQUEsS0FBUyxVQUFVO0VBQ2pFO0VBQ0EsSUFBSWtDLFFBQUEsRUFBVTtJQUNWLE9BQU8sQ0FBQyxDQUFDLEtBQUtySSxJQUFBLENBQUtrRyxNQUFBLENBQU81UCxJQUFBLENBQU0yUixFQUFBLElBQU9BLEVBQUEsQ0FBRzlCLElBQUEsS0FBUyxPQUFPO0VBQzlEO0VBQ0EsSUFBSW1DLE1BQUEsRUFBUTtJQUNSLE9BQU8sQ0FBQyxDQUFDLEtBQUt0SSxJQUFBLENBQUtrRyxNQUFBLENBQU81UCxJQUFBLENBQU0yUixFQUFBLElBQU9BLEVBQUEsQ0FBRzlCLElBQUEsS0FBUyxLQUFLO0VBQzVEO0VBQ0EsSUFBSW9DLFFBQUEsRUFBVTtJQUNWLE9BQU8sQ0FBQyxDQUFDLEtBQUt2SSxJQUFBLENBQUtrRyxNQUFBLENBQU81UCxJQUFBLENBQU0yUixFQUFBLElBQU9BLEVBQUEsQ0FBRzlCLElBQUEsS0FBUyxPQUFPO0VBQzlEO0VBQ0EsSUFBSXFDLE9BQUEsRUFBUztJQUNULE9BQU8sQ0FBQyxDQUFDLEtBQUt4SSxJQUFBLENBQUtrRyxNQUFBLENBQU81UCxJQUFBLENBQU0yUixFQUFBLElBQU9BLEVBQUEsQ0FBRzlCLElBQUEsS0FBUyxNQUFNO0VBQzdEO0VBQ0EsSUFBSXNDLFNBQUEsRUFBVztJQUNYLE9BQU8sQ0FBQyxDQUFDLEtBQUt6SSxJQUFBLENBQUtrRyxNQUFBLENBQU81UCxJQUFBLENBQU0yUixFQUFBLElBQU9BLEVBQUEsQ0FBRzlCLElBQUEsS0FBUyxRQUFRO0VBQy9EO0VBQ0EsSUFBSXVDLE9BQUEsRUFBUztJQUNULE9BQU8s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LEVBQVE7RUFBSyxDQUFDO0VBQzNERixPQUFBLEVBQVc0akIsR0FBQSxJQUFRMW1CLFVBQUEsQ0FBVzBPLE1BQUEsQ0FBTztJQUNqQyxHQUFHZ1ksR0FBQTtJQUNIMWpCLE1BQUEsRUFBUTtFQUNaLENBQUM7RUFDREosTUFBQSxFQUFVOGpCLEdBQUEsSUFBUTNtQixTQUFBLENBQVUyTyxNQUFBLENBQU87SUFBRSxHQUFHZ1ksR0FBQTtJQUFLMWpCLE1BQUEsRUFBUTtFQUFLLENBQUM7RUFDM0RFLElBQUEsRUFBUXdqQixHQUFBLElBQVF2bUIsT0FBQSxDQUFRdU8sTUFBQSxDQUFPO0lBQUUsR0FBR2dZLEdBQUE7SUFBSzFqQixNQUFBLEVBQVE7RUFBSyxDQUFDO0FBQzNEO0FBRU8sSUFBTXhELEtBQUEsR0FBUUQsT0FBQTs7O0FDdm1IckIsSUFBTzhvQixVQUFBLEdBQVEvZixnQkFBQTs7O0FDRGYsSUFBT2dnQixXQUFBLEdBQVFELFVBQUE7OztBVkNmLElBQU8va0IsbUJBQUEsR0FBUWdsQixXQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9ydmQvb3V0In0=