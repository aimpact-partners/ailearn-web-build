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

// .beyond/uimport/temp/zod.3.25.67.js
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

// .beyond/uimport/temp/zod.3.25.67.js
var zod_3_25_67_default = esm_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3pvZC4zLjI1LjY3LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3pvZC9kaXN0L2VzbS92My9leHRlcm5hbC5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvaGVscGVycy91dGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3pvZC9kaXN0L2VzbS92My9ab2RFcnJvci5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvbG9jYWxlcy9lbi5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvZXJyb3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3pvZC9kaXN0L2VzbS92My9oZWxwZXJzL3BhcnNlVXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvaGVscGVycy9lcnJvclV0aWwuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2Rpc3QvZXNtL3YzL3R5cGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3pvZC9kaXN0L2VzbS92My9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiem9kXzNfMjVfNjdfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQlJBTkQiLCJESVJUWSIsIkVNUFRZX1BBVEgiLCJJTlZBTElEIiwiTkVWRVIiLCJPSyIsIlBhcnNlU3RhdHVzIiwiU2NoZW1hIiwiWm9kVHlwZSIsIlpvZEFueSIsIlpvZEFycmF5IiwiWm9kQmlnSW50IiwiWm9kQm9vbGVhbiIsIlpvZEJyYW5kZWQiLCJab2RDYXRjaCIsIlpvZERhdGUiLCJab2REZWZhdWx0IiwiWm9kRGlzY3JpbWluYXRlZFVuaW9uIiwiWm9kRWZmZWN0cyIsIlpvZEVudW0iLCJab2RFcnJvciIsIlpvZEZpcnN0UGFydHlUeXBlS2luZCIsIlpvZEZ1bmN0aW9uIiwiWm9kSW50ZXJzZWN0aW9uIiwiWm9kSXNzdWVDb2RlIiwiWm9kTGF6eSIsIlpvZExpdGVyYWwiLCJab2RNYXAiLCJab2ROYU4iLCJab2ROYXRpdmVFbnVtIiwiWm9kTmV2ZXIiLCJab2ROdWxsIiwiWm9kTnVsbGFibGUiLCJab2ROdW1iZXIiLCJab2RPYmplY3QiLCJab2RPcHRpb25hbCIsIlpvZFBhcnNlZFR5cGUiLCJab2RQaXBlbGluZSIsIlpvZFByb21pc2UiLCJab2RSZWFkb25seSIsIlpvZFJlY29yZCIsIlpvZFNjaGVtYSIsIlpvZFNldCIsIlpvZFN0cmluZyIsIlpvZFN5bWJvbCIsIlpvZFRyYW5zZm9ybWVyIiwiWm9kVHVwbGUiLCJab2RVbmRlZmluZWQiLCJab2RVbmlvbiIsIlpvZFVua25vd24iLCJab2RWb2lkIiwiYWRkSXNzdWVUb0NvbnRleHQiLCJhbnkiLCJhbnlUeXBlIiwiYXJyYXkiLCJhcnJheVR5cGUiLCJiaWdpbnQiLCJiaWdJbnRUeXBlIiwiYm9vbGVhbiIsImJvb2xlYW5UeXBlIiwiY29lcmNlIiwiY3VzdG9tIiwiZGF0ZSIsImRhdGVUeXBlIiwiZGF0ZXRpbWVSZWdleCIsImRlZmF1bHQiLCJ6b2RfM18yNV82N19kZWZhdWx0IiwiZGVmYXVsdEVycm9yTWFwIiwiZW5fZGVmYXVsdCIsImRpc2NyaW1pbmF0ZWRVbmlvbiIsImRpc2NyaW1pbmF0ZWRVbmlvblR5cGUiLCJlZmZlY3QiLCJlZmZlY3RzVHlwZSIsImVudW0iLCJlbnVtVHlwZSIsImZ1bmN0aW9uIiwiZnVuY3Rpb25UeXBlIiwiZ2V0RXJyb3JNYXAiLCJnZXRQYXJzZWRUeXBlIiwiaW5zdGFuY2VvZiIsImluc3RhbmNlT2ZUeXBlIiwiaW50ZXJzZWN0aW9uIiwiaW50ZXJzZWN0aW9uVHlwZSIsImlzQWJvcnRlZCIsImlzQXN5bmMiLCJpc0RpcnR5IiwiaXNWYWxpZCIsImxhdGUiLCJsYXp5IiwibGF6eVR5cGUiLCJsaXRlcmFsIiwibGl0ZXJhbFR5cGUiLCJtYWtlSXNzdWUiLCJtYXAiLCJtYXBUeXBlIiwibmFuIiwibmFuVHlwZSIsIm5hdGl2ZUVudW0iLCJuYXRpdmVFbnVtVHlwZSIsIm5ldmVyIiwibmV2ZXJUeXBlIiwibnVsbCIsIm51bGxUeXBlIiwibnVsbGFibGUiLCJudWxsYWJsZVR5cGUiLCJudW1iZXIiLCJudW1iZXJUeXBlIiwib2JqZWN0Iiwib2JqZWN0VHlwZSIsIm9iamVjdFV0aWwiLCJvYm9vbGVhbiIsIm9udW1iZXIiLCJvcHRpb25hbCIsIm9wdGlvbmFsVHlwZSIsIm9zdHJpbmciLCJwaXBlbGluZSIsInBpcGVsaW5lVHlwZSIsInByZXByb2Nlc3MiLCJwcmVwcm9jZXNzVHlwZSIsInByb21pc2UiLCJwcm9taXNlVHlwZSIsInF1b3RlbGVzc0pzb24iLCJyZWNvcmQiLCJyZWNvcmRUeXBlIiwic2V0Iiwic2V0VHlwZSIsInNldEVycm9yTWFwIiwic3RyaWN0T2JqZWN0Iiwic3RyaWN0T2JqZWN0VHlwZSIsInN0cmluZyIsInN0cmluZ1R5cGUiLCJzeW1ib2wiLCJzeW1ib2xUeXBlIiwidHJhbnNmb3JtZXIiLCJ0dXBsZSIsInR1cGxlVHlwZSIsInVuZGVmaW5lZCIsInVuZGVmaW5lZFR5cGUiLCJ1bmlvbiIsInVuaW9uVHlwZSIsInVua25vd24iLCJ1bmtub3duVHlwZSIsInV0aWwiLCJ2b2lkIiwidm9pZFR5cGUiLCJ6IiwiZXh0ZXJuYWxfZXhwb3J0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ1dGlsMiIsImFzc2VydEVxdWFsIiwiXyIsImFzc2VydElzIiwiX2FyZyIsImFzc2VydE5ldmVyIiwiX3giLCJFcnJvciIsImFycmF5VG9FbnVtIiwiaXRlbXMiLCJvYmoiLCJpdGVtIiwiZ2V0VmFsaWRFbnVtVmFsdWVzIiwidmFsaWRLZXlzIiwib2JqZWN0S2V5cyIsImZpbHRlciIsImsiLCJmaWx0ZXJlZCIsIm9iamVjdFZhbHVlcyIsImUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicHVzaCIsImZpbmQiLCJhcnIiLCJjaGVja2VyIiwiaXNJbnRlZ2VyIiwiTnVtYmVyIiwidmFsIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJqb2luVmFsdWVzIiwic2VwYXJhdG9yIiwiam9pbiIsImpzb25TdHJpbmdpZnlSZXBsYWNlciIsInZhbHVlIiwidG9TdHJpbmciLCJvYmplY3RVdGlsMiIsIm1lcmdlU2hhcGVzIiwiZmlyc3QiLCJzZWNvbmQiLCJkYXRhIiwidCIsImlzTmFOIiwiQXJyYXkiLCJpc0FycmF5IiwidGhlbiIsImNhdGNoIiwiTWFwIiwiU2V0IiwiRGF0ZSIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZSIsImVycm9ycyIsImlzc3VlcyIsImNvbnN0cnVjdG9yIiwiYWRkSXNzdWUiLCJzdWIiLCJhZGRJc3N1ZXMiLCJzdWJzIiwiYWN0dWFsUHJvdG8iLCJuZXciLCJ0YXJnZXQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIm5hbWUiLCJmb3JtYXQiLCJfbWFwcGVyIiwibWFwcGVyIiwiaXNzdWUiLCJtZXNzYWdlIiwiZmllbGRFcnJvcnMiLCJfZXJyb3JzIiwicHJvY2Vzc0Vycm9yIiwiZXJyb3IiLCJjb2RlIiwidW5pb25FcnJvcnMiLCJyZXR1cm5UeXBlRXJyb3IiLCJhcmd1bWVudHNFcnJvciIsInBhdGgiLCJsZW5ndGgiLCJjdXJyIiwiaSIsImVsIiwidGVybWluYWwiLCJhc3NlcnQiLCJpc0VtcHR5IiwiZmxhdHRlbiIsImZvcm1FcnJvcnMiLCJjcmVhdGUiLCJlcnJvck1hcCIsIl9jdHgiLCJpbnZhbGlkX3R5cGUiLCJyZWNlaXZlZCIsImV4cGVjdGVkIiwiaW52YWxpZF9saXRlcmFsIiwidW5yZWNvZ25pemVkX2tleXMiLCJpbnZhbGlkX3VuaW9uIiwiaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yIiwib3B0aW9ucyIsImludmFsaWRfZW51bV92YWx1ZSIsImludmFsaWRfYXJndW1lbnRzIiwiaW52YWxpZF9yZXR1cm5fdHlwZSIsImludmFsaWRfZGF0ZSIsImludmFsaWRfc3RyaW5nIiwidmFsaWRhdGlvbiIsImluY2x1ZGVzIiwicG9zaXRpb24iLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJ0b29fc21hbGwiLCJ0eXBlIiwiZXhhY3QiLCJpbmNsdXNpdmUiLCJtaW5pbXVtIiwidG9vX2JpZyIsIm1heGltdW0iLCJpbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlcyIsIm5vdF9tdWx0aXBsZV9vZiIsIm11bHRpcGxlT2YiLCJub3RfZmluaXRlIiwiZGVmYXVsdEVycm9yIiwib3ZlcnJpZGVFcnJvck1hcCIsInBhcmFtcyIsImVycm9yTWFwcyIsImlzc3VlRGF0YSIsImZ1bGxQYXRoIiwiZnVsbElzc3VlIiwiZXJyb3JNZXNzYWdlIiwibWFwcyIsIm0iLCJzbGljZSIsInJldmVyc2UiLCJjdHgiLCJvdmVycmlkZU1hcCIsImNvbW1vbiIsImNvbnRleHR1YWxFcnJvck1hcCIsInNjaGVtYUVycm9yTWFwIiwieCIsImRpcnR5IiwiYWJvcnQiLCJtZXJnZUFycmF5Iiwic3RhdHVzIiwicmVzdWx0cyIsImFycmF5VmFsdWUiLCJzIiwibWVyZ2VPYmplY3RBc3luYyIsInBhaXJzIiwic3luY1BhaXJzIiwicGFpciIsIm1lcmdlT2JqZWN0U3luYyIsImZpbmFsT2JqZWN0IiwiYWx3YXlzU2V0IiwiZnJlZXplIiwiUHJvbWlzZSIsImVycm9yVXRpbCIsImVycm9yVXRpbDIiLCJlcnJUb09iaiIsIlBhcnNlSW5wdXRMYXp5UGF0aCIsInBhcmVudCIsIl9jYWNoZWRQYXRoIiwiX3BhdGgiLCJfa2V5IiwiaGFuZGxlUmVzdWx0IiwicmVzdWx0Iiwic3VjY2VzcyIsIl9lcnJvciIsInByb2Nlc3NDcmVhdGVQYXJhbXMiLCJlcnJvck1hcDIiLCJpbnZhbGlkX3R5cGVfZXJyb3IiLCJyZXF1aXJlZF9lcnJvciIsImRlc2NyaXB0aW9uIiwiY3VzdG9tTWFwIiwiaXNzIiwiX2RlZiIsIl9nZXRUeXBlIiwiaW5wdXQiLCJfZ2V0T3JSZXR1cm5DdHgiLCJwYXJzZWRUeXBlIiwiX3Byb2Nlc3NJbnB1dFBhcmFtcyIsIl9wYXJzZVN5bmMiLCJfcGFyc2UiLCJfcGFyc2VBc3luYyIsInJlc29sdmUiLCJwYXJzZSIsInNhZmVQYXJzZSIsImFzeW5jIiwifnZhbGlkYXRlIiwiZXJyIiwidG9Mb3dlckNhc2UiLCJwYXJzZUFzeW5jIiwic2FmZVBhcnNlQXN5bmMiLCJtYXliZUFzeW5jUmVzdWx0IiwicmVmaW5lIiwiY2hlY2siLCJnZXRJc3N1ZVByb3BlcnRpZXMiLCJfcmVmaW5lbWVudCIsInNldEVycm9yIiwicmVmaW5lbWVudCIsInJlZmluZW1lbnREYXRhIiwic2NoZW1hIiwidHlwZU5hbWUiLCJzdXBlclJlZmluZSIsImRlZiIsInNwYSIsImJpbmQiLCJudWxsaXNoIiwib3IiLCJhbmQiLCJ0cmFuc2Zvcm0iLCJicmFuZCIsImRlc2NyaWJlIiwicGlwZSIsInJlYWRvbmx5IiwiaXNOdWxsYWJsZSIsImlzT3B0aW9uYWwiLCJ2ZXJzaW9uIiwidmVuZG9yIiwidmFsaWRhdGUiLCJvcHRpb24iLCJpbmNvbWluZyIsImRlZmF1bHRWYWx1ZUZ1bmMiLCJpbm5lclR5cGUiLCJkZWZhdWx0VmFsdWUiLCJjYXRjaFZhbHVlRnVuYyIsImNhdGNoVmFsdWUiLCJUaGlzIiwiY3VpZFJlZ2V4IiwiY3VpZDJSZWdleCIsInVsaWRSZWdleCIsInV1aWRSZWdleCIsIm5hbm9pZFJlZ2V4Iiwiand0UmVnZXgiLCJkdXJhdGlvblJlZ2V4IiwiZW1haWxSZWdleCIsIl9lbW9qaVJlZ2V4IiwiZW1vamlSZWdleCIsImlwdjRSZWdleCIsImlwdjRDaWRyUmVnZXgiLCJpcHY2UmVnZXgiLCJpcHY2Q2lkclJlZ2V4IiwiYmFzZTY0UmVnZXgiLCJiYXNlNjR1cmxSZWdleCIsImRhdGVSZWdleFNvdXJjZSIsImRhdGVSZWdleCIsIlJlZ0V4cCIsInRpbWVSZWdleFNvdXJjZSIsImFyZ3MiLCJzZWNvbmRzUmVnZXhTb3VyY2UiLCJwcmVjaXNpb24iLCJzZWNvbmRzUXVhbnRpZmllciIsInRpbWVSZWdleCIsInJlZ2V4Iiwib3B0cyIsImxvY2FsIiwib2Zmc2V0IiwiaXNWYWxpZElQIiwiaXAiLCJ0ZXN0IiwiaXNWYWxpZEpXVCIsImp3dCIsImFsZyIsImhlYWRlciIsInNwbGl0IiwiYmFzZTY0IiwicGFkRW5kIiwiZGVjb2RlZCIsImF0b2IiLCJ0eXAiLCJpc1ZhbGlkQ2lkciIsIlN0cmluZyIsImN0eDIiLCJjaGVja3MiLCJraW5kIiwidG9vQmlnIiwidG9vU21hbGwiLCJVUkwiLCJsYXN0SW5kZXgiLCJ0ZXN0UmVzdWx0IiwidHJpbSIsInRvVXBwZXJDYXNlIiwiX3JlZ2V4IiwiX2FkZENoZWNrIiwiZW1haWwiLCJ1cmwiLCJlbW9qaSIsInV1aWQiLCJuYW5vaWQiLCJjdWlkIiwiY3VpZDIiLCJ1bGlkIiwiYmFzZTY0dXJsIiwiY2lkciIsImRhdGV0aW1lIiwidGltZSIsImR1cmF0aW9uIiwibWluIiwibWluTGVuZ3RoIiwibWF4IiwibWF4TGVuZ3RoIiwibGVuIiwibm9uZW1wdHkiLCJpc0RhdGV0aW1lIiwiY2giLCJpc0RhdGUiLCJpc1RpbWUiLCJpc0R1cmF0aW9uIiwiaXNFbWFpbCIsImlzVVJMIiwiaXNFbW9qaSIsImlzVVVJRCIsImlzTkFOT0lEIiwiaXNDVUlEIiwiaXNDVUlEMiIsImlzVUxJRCIsImlzSVAiLCJpc0NJRFIiLCJpc0Jhc2U2NCIsImlzQmFzZTY0dXJsIiwiZmxvYXRTYWZlUmVtYWluZGVyIiwic3RlcCIsInZhbERlY0NvdW50Iiwic3RlcERlY0NvdW50IiwiZGVjQ291bnQiLCJ2YWxJbnQiLCJwYXJzZUludCIsInRvRml4ZWQiLCJzdGVwSW50IiwiYXJndW1lbnRzIiwiZ3RlIiwibHRlIiwic2V0TGltaXQiLCJndCIsImx0IiwiaW50IiwicG9zaXRpdmUiLCJuZWdhdGl2ZSIsIm5vbnBvc2l0aXZlIiwibm9ubmVnYXRpdmUiLCJmaW5pdGUiLCJzYWZlIiwiTUlOX1NBRkVfSU5URUdFUiIsIk1BWF9TQUZFX0lOVEVHRVIiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiaXNJbnQiLCJCaWdJbnQiLCJfZ2V0SW52YWxpZElucHV0IiwiQm9vbGVhbiIsImdldFRpbWUiLCJtaW5EYXRlIiwibWF4RGF0ZSIsIl9hbnkiLCJfdW5rbm93biIsImV4YWN0TGVuZ3RoIiwiYWxsIiwicmVzdWx0MiIsImVsZW1lbnQiLCJkZWVwUGFydGlhbGlmeSIsIm5ld1NoYXBlIiwic2hhcGUiLCJmaWVsZFNjaGVtYSIsInVud3JhcCIsIl9jYWNoZWQiLCJub25zdHJpY3QiLCJwYXNzdGhyb3VnaCIsImF1Z21lbnQiLCJleHRlbmQiLCJfZ2V0Q2FjaGVkIiwic2hhcGVLZXlzIiwiZXh0cmFLZXlzIiwiY2F0Y2hhbGwiLCJ1bmtub3duS2V5cyIsImtleVZhbGlkYXRvciIsInN0cmljdCIsInN0cmlwIiwiYXVnbWVudGF0aW9uIiwibWVyZ2UiLCJtZXJnaW5nIiwibWVyZ2VkIiwic2V0S2V5IiwiaW5kZXgiLCJwaWNrIiwibWFzayIsIm9taXQiLCJkZWVwUGFydGlhbCIsInBhcnRpYWwiLCJyZXF1aXJlZCIsIm5ld0ZpZWxkIiwia2V5b2YiLCJjcmVhdGVab2RFbnVtIiwic3RyaWN0Q3JlYXRlIiwibGF6eWNyZWF0ZSIsImhhbmRsZVJlc3VsdHMiLCJjaGlsZEN0eCIsImlzc3VlczIiLCJ0eXBlcyIsImdldERpc2NyaW1pbmF0b3IiLCJkaXNjcmltaW5hdG9yIiwiZGlzY3JpbWluYXRvclZhbHVlIiwib3B0aW9uc01hcCIsImdldCIsImZyb20iLCJkaXNjcmltaW5hdG9yVmFsdWVzIiwiaGFzIiwibWVyZ2VWYWx1ZXMiLCJhIiwiYiIsImFUeXBlIiwiYlR5cGUiLCJ2YWxpZCIsImJLZXlzIiwic2hhcmVkS2V5cyIsImluZGV4T2YiLCJuZXdPYmoiLCJzaGFyZWRWYWx1ZSIsIm5ld0FycmF5IiwiaXRlbUEiLCJpdGVtQiIsImhhbmRsZVBhcnNlZCIsInBhcnNlZExlZnQiLCJwYXJzZWRSaWdodCIsImxlZnQiLCJyaWdodCIsInJlc3QiLCJpdGVtSW5kZXgiLCJzY2hlbWFzIiwia2V5U2NoZW1hIiwia2V5VHlwZSIsInZhbHVlU2NoZW1hIiwidmFsdWVUeXBlIiwidGhpcmQiLCJlbnRyaWVzIiwiZmluYWxNYXAiLCJtaW5TaXplIiwic2l6ZSIsIm1heFNpemUiLCJmaW5hbGl6ZVNldCIsImVsZW1lbnRzMiIsInBhcnNlZFNldCIsImFkZCIsImVsZW1lbnRzIiwidmFsdWVzIiwiaW1wbGVtZW50IiwibWFrZUFyZ3NJc3N1ZSIsIm1ha2VSZXR1cm5zSXNzdWUiLCJyZXR1cm5zIiwiZm4iLCJtZSIsInBhcnNlZEFyZ3MiLCJSZWZsZWN0IiwiYXBwbHkiLCJwYXJzZWRSZXR1cm5zIiwicGFyYW1ldGVycyIsInJldHVyblR5cGUiLCJmdW5jIiwidmFsaWRhdGVkRnVuYyIsInN0cmljdEltcGxlbWVudCIsImdldHRlciIsImxhenlTY2hlbWEiLCJleHBlY3RlZFZhbHVlcyIsIl9jYWNoZSIsImVudW1WYWx1ZXMiLCJWYWx1ZXMiLCJFbnVtIiwiZXh0cmFjdCIsIm5ld0RlZiIsImV4Y2x1ZGUiLCJvcHQiLCJuYXRpdmVFbnVtVmFsdWVzIiwicHJvbWlzaWZpZWQiLCJzb3VyY2VUeXBlIiwiY2hlY2tDdHgiLCJhcmciLCJmYXRhbCIsInByb2Nlc3NlZCIsInByb2Nlc3NlZDIiLCJleGVjdXRlUmVmaW5lbWVudCIsImFjYyIsImlubmVyIiwiYmFzZSIsImNyZWF0ZVdpdGhQcmVwcm9jZXNzIiwicmVtb3ZlRGVmYXVsdCIsIm5ld0N0eCIsInJlbW92ZUNhdGNoIiwiU3ltYm9sIiwiaGFuZGxlQXN5bmMiLCJpblJlc3VsdCIsImluIiwib3V0IiwiY2xlYW5QYXJhbXMiLCJwIiwicDIiLCJfcGFyYW1zIiwiciIsInIyIiwiX2ZhdGFsIiwiWm9kRmlyc3RQYXJ0eVR5cGVLaW5kMiIsIkNsYXNzIiwiY2xzIiwidjNfZGVmYXVsdCIsImVzbV9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxRQUFBLENBQUFELG1CQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxFQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQWpDLE9BQUE7RUFBQWtDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBM0IsVUFBQTtFQUFBNEIsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQXRDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUF1QyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxtQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFDLHNCQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQyxnQkFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUMsZ0JBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUE3RCxXQUFBO0VBQUE4RCxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUMsYUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxDQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBdkosbUJBQUE7OztBQ0FBLElBQUFvSixnQkFBQTtBQUFBbkosUUFBQSxDQUFBbUosZ0JBQUE7RUFBQWxKLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxFQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQWpDLE9BQUE7RUFBQWtDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBM0IsVUFBQTtFQUFBNEIsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQXRDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUF1QyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFHLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUMsc0JBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFDLGdCQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQyxnQkFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQTdELFdBQUE7RUFBQThELEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQyxhQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBOzs7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LE1BQUEsRUFBUTtFQUFLLENBQUM7RUFDM0RGLE9BQUEsRUFBVzRqQixHQUFBLElBQVExbUIsVUFBQSxDQUFXME8sTUFBQSxDQUFPO0lBQ2pDLEdBQUdnWSxHQUFBO0lBQ0gxakIsTUFBQSxFQUFRO0VBQ1osQ0FBQztFQUNESixNQUFBLEVBQVU4akIsR0FBQSxJQUFRM21CLFNBQUEsQ0FBVTJPLE1BQUEsQ0FBTztJQUFFLEdBQUdnWSxHQUFBO0lBQUsxakIsTUFBQSxFQUFRO0VBQUssQ0FBQztFQUMzREUsSUFBQSxFQUFRd2pCLEdBQUEsSUFBUXZtQixPQUFBLENBQVF1TyxNQUFBLENBQU87SUFBRSxHQUFHZ1ksR0FBQTtJQUFLMWpCLE1BQUEsRUFBUTtFQUFLLENBQUM7QUFDM0Q7QUFFTyxJQUFNeEQsS0FBQSxHQUFRRCxPQUFBOzs7QUN2bUhyQixJQUFPOG9CLFVBQUEsR0FBUS9mLGdCQUFBOzs7QUNEZixJQUFPZ2dCLFdBQUEsR0FBUUQsVUFBQTs7O0FWQ2YsSUFBTy9rQixtQkFBQSxHQUFRZ2xCLFdBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL3J2ZC9vdXQifQ==