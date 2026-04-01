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
      // second overwrites first
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
var ZodError = class _ZodError extends Error {
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
    if (!(value instanceof _ZodError)) {
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
    errorMaps: [ctx.common.contextualErrorMap,
    // contextual error map is first priority
    ctx.schemaErrorMap,
    // then schema-bound map if available
    overrideMap,
    // then global override map
    overrideMap === en_default ? void 0 : en_default
    // then global default map
    ].filter(x => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
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
    return _ParseStatus.mergeObjectSync(status, syncPairs);
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
var ZodString = class _ZodString extends ZodType {
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
    return new _ZodString({
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
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    });
  }
  toUpperCase() {
    return new _ZodString({
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
var ZodNumber = class _ZodNumber extends ZodType {
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
    return new _ZodNumber({
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
    return new _ZodNumber({
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
var ZodBigInt = class _ZodBigInt extends ZodType {
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
    return new _ZodBigInt({
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
    return new _ZodBigInt({
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
var ZodDate = class _ZodDate extends ZodType {
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
    return new _ZodDate({
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
var ZodArray = class _ZodArray extends ZodType {
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
    return new _ZodArray({
      ...this._def,
      minLength: {
        value: minLength,
        message: errorUtil.toString(message)
      }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: {
        value: maxLength,
        message: errorUtil.toString(message)
      }
    });
  }
  length(len, message) {
    return new _ZodArray({
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
var ZodObject = class _ZodObject extends ZodType {
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
          value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)
          //, ctx.child(key), value, getParsedType(value)
          ),
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
    return new _ZodObject({
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
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
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
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({
      [key]: schema
    });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
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
    return new _ZodObject({
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
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
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
    return new _ZodObject({
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
    return new _ZodObject({
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
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
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
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
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
    return new _ZodDiscriminatedUnion({
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
var ZodTuple = class _ZodTuple extends ZodType {
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
    return new _ZodTuple({
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
var ZodRecord = class _ZodRecord extends ZodType {
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
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
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
var ZodSet = class _ZodSet extends ZodType {
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
    return new _ZodSet({
      ...this._def,
      minSize: {
        value: minSize,
        message: errorUtil.toString(message)
      }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
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
var ZodFunction = class _ZodFunction extends ZodType {
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
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
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
    return new _ZodFunction({
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
var ZodEnum = class _ZodEnum extends ZodType {
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
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter(opt => !values.includes(opt)), {
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
var ZodPipeline = class _ZodPipeline extends ZodType {
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
    return new _ZodPipeline({
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC96b2QuMy4yNS42Ny5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvZXh0ZXJuYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2Rpc3QvZXNtL3YzL2hlbHBlcnMvdXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvWm9kRXJyb3IuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2Rpc3QvZXNtL3YzL2xvY2FsZXMvZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2Rpc3QvZXNtL3YzL2Vycm9ycy5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvaGVscGVycy9wYXJzZVV0aWwuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2Rpc3QvZXNtL3YzL2hlbHBlcnMvZXJyb3JVdGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3pvZC9kaXN0L2VzbS92My90eXBlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2Rpc3QvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbInpvZF8zXzI1XzY3X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkJSQU5EIiwiRElSVFkiLCJFTVBUWV9QQVRIIiwiSU5WQUxJRCIsIk5FVkVSIiwiT0siLCJQYXJzZVN0YXR1cyIsIlNjaGVtYSIsIlpvZFR5cGUiLCJab2RBbnkiLCJab2RBcnJheSIsIlpvZEJpZ0ludCIsIlpvZEJvb2xlYW4iLCJab2RCcmFuZGVkIiwiWm9kQ2F0Y2giLCJab2REYXRlIiwiWm9kRGVmYXVsdCIsIlpvZERpc2NyaW1pbmF0ZWRVbmlvbiIsIlpvZEVmZmVjdHMiLCJab2RFbnVtIiwiWm9kRXJyb3IiLCJab2RGaXJzdFBhcnR5VHlwZUtpbmQiLCJab2RGdW5jdGlvbiIsIlpvZEludGVyc2VjdGlvbiIsIlpvZElzc3VlQ29kZSIsIlpvZExhenkiLCJab2RMaXRlcmFsIiwiWm9kTWFwIiwiWm9kTmFOIiwiWm9kTmF0aXZlRW51bSIsIlpvZE5ldmVyIiwiWm9kTnVsbCIsIlpvZE51bGxhYmxlIiwiWm9kTnVtYmVyIiwiWm9kT2JqZWN0IiwiWm9kT3B0aW9uYWwiLCJab2RQYXJzZWRUeXBlIiwiWm9kUGlwZWxpbmUiLCJab2RQcm9taXNlIiwiWm9kUmVhZG9ubHkiLCJab2RSZWNvcmQiLCJab2RTY2hlbWEiLCJab2RTZXQiLCJab2RTdHJpbmciLCJab2RTeW1ib2wiLCJab2RUcmFuc2Zvcm1lciIsIlpvZFR1cGxlIiwiWm9kVW5kZWZpbmVkIiwiWm9kVW5pb24iLCJab2RVbmtub3duIiwiWm9kVm9pZCIsImFkZElzc3VlVG9Db250ZXh0IiwiYW55IiwiYW55VHlwZSIsImFycmF5IiwiYXJyYXlUeXBlIiwiYmlnaW50IiwiYmlnSW50VHlwZSIsImJvb2xlYW4iLCJib29sZWFuVHlwZSIsImNvZXJjZSIsImN1c3RvbSIsImRhdGUiLCJkYXRlVHlwZSIsImRhdGV0aW1lUmVnZXgiLCJkZWZhdWx0Iiwiem9kXzNfMjVfNjdfZGVmYXVsdCIsImRlZmF1bHRFcnJvck1hcCIsImVuX2RlZmF1bHQiLCJkaXNjcmltaW5hdGVkVW5pb24iLCJkaXNjcmltaW5hdGVkVW5pb25UeXBlIiwiZWZmZWN0IiwiZWZmZWN0c1R5cGUiLCJlbnVtIiwiZW51bVR5cGUiLCJmdW5jdGlvbiIsImZ1bmN0aW9uVHlwZSIsImdldEVycm9yTWFwIiwiZ2V0UGFyc2VkVHlwZSIsImluc3RhbmNlb2YiLCJpbnN0YW5jZU9mVHlwZSIsImludGVyc2VjdGlvbiIsImludGVyc2VjdGlvblR5cGUiLCJpc0Fib3J0ZWQiLCJpc0FzeW5jIiwiaXNEaXJ0eSIsImlzVmFsaWQiLCJsYXRlIiwibGF6eSIsImxhenlUeXBlIiwibGl0ZXJhbCIsImxpdGVyYWxUeXBlIiwibWFrZUlzc3VlIiwibWFwIiwibWFwVHlwZSIsIm5hbiIsIm5hblR5cGUiLCJuYXRpdmVFbnVtIiwibmF0aXZlRW51bVR5cGUiLCJuZXZlciIsIm5ldmVyVHlwZSIsIm51bGwiLCJudWxsVHlwZSIsIm51bGxhYmxlIiwibnVsbGFibGVUeXBlIiwibnVtYmVyIiwibnVtYmVyVHlwZSIsIm9iamVjdCIsIm9iamVjdFR5cGUiLCJvYmplY3RVdGlsIiwib2Jvb2xlYW4iLCJvbnVtYmVyIiwib3B0aW9uYWwiLCJvcHRpb25hbFR5cGUiLCJvc3RyaW5nIiwicGlwZWxpbmUiLCJwaXBlbGluZVR5cGUiLCJwcmVwcm9jZXNzIiwicHJlcHJvY2Vzc1R5cGUiLCJwcm9taXNlIiwicHJvbWlzZVR5cGUiLCJxdW90ZWxlc3NKc29uIiwicmVjb3JkIiwicmVjb3JkVHlwZSIsInNldCIsInNldFR5cGUiLCJzZXRFcnJvck1hcCIsInN0cmljdE9iamVjdCIsInN0cmljdE9iamVjdFR5cGUiLCJzdHJpbmciLCJzdHJpbmdUeXBlIiwic3ltYm9sIiwic3ltYm9sVHlwZSIsInRyYW5zZm9ybWVyIiwidHVwbGUiLCJ0dXBsZVR5cGUiLCJ1bmRlZmluZWQiLCJ1bmRlZmluZWRUeXBlIiwidW5pb24iLCJ1bmlvblR5cGUiLCJ1bmtub3duIiwidW5rbm93blR5cGUiLCJ1dGlsIiwidm9pZCIsInZvaWRUeXBlIiwieiIsImV4dGVybmFsX2V4cG9ydHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwidXRpbDIiLCJhc3NlcnRFcXVhbCIsIl8iLCJhc3NlcnRJcyIsIl9hcmciLCJhc3NlcnROZXZlciIsIl94IiwiRXJyb3IiLCJhcnJheVRvRW51bSIsIml0ZW1zIiwib2JqIiwiaXRlbSIsImdldFZhbGlkRW51bVZhbHVlcyIsInZhbGlkS2V5cyIsIm9iamVjdEtleXMiLCJmaWx0ZXIiLCJrIiwiZmlsdGVyZWQiLCJvYmplY3RWYWx1ZXMiLCJlIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInB1c2giLCJmaW5kIiwiYXJyIiwiY2hlY2tlciIsImlzSW50ZWdlciIsIk51bWJlciIsInZhbCIsImlzRmluaXRlIiwiTWF0aCIsImZsb29yIiwiam9pblZhbHVlcyIsInNlcGFyYXRvciIsImpvaW4iLCJqc29uU3RyaW5naWZ5UmVwbGFjZXIiLCJ2YWx1ZSIsInRvU3RyaW5nIiwib2JqZWN0VXRpbDIiLCJtZXJnZVNoYXBlcyIsImZpcnN0Iiwic2Vjb25kIiwiZGF0YSIsInQiLCJpc05hTiIsIkFycmF5IiwiaXNBcnJheSIsInRoZW4iLCJjYXRjaCIsIk1hcCIsIlNldCIsIkRhdGUiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJfWm9kRXJyb3IiLCJlcnJvcnMiLCJpc3N1ZXMiLCJjb25zdHJ1Y3RvciIsImFkZElzc3VlIiwic3ViIiwiYWRkSXNzdWVzIiwic3VicyIsImFjdHVhbFByb3RvIiwibmV3IiwidGFyZ2V0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJuYW1lIiwiZm9ybWF0IiwiX21hcHBlciIsIm1hcHBlciIsImlzc3VlIiwibWVzc2FnZSIsImZpZWxkRXJyb3JzIiwiX2Vycm9ycyIsInByb2Nlc3NFcnJvciIsImVycm9yIiwiY29kZSIsInVuaW9uRXJyb3JzIiwicmV0dXJuVHlwZUVycm9yIiwiYXJndW1lbnRzRXJyb3IiLCJwYXRoIiwibGVuZ3RoIiwiY3VyciIsImkiLCJlbCIsInRlcm1pbmFsIiwiYXNzZXJ0IiwiaXNFbXB0eSIsImZsYXR0ZW4iLCJmb3JtRXJyb3JzIiwiY3JlYXRlIiwiZXJyb3JNYXAiLCJfY3R4IiwiaW52YWxpZF90eXBlIiwicmVjZWl2ZWQiLCJleHBlY3RlZCIsImludmFsaWRfbGl0ZXJhbCIsInVucmVjb2duaXplZF9rZXlzIiwiaW52YWxpZF91bmlvbiIsImludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvciIsIm9wdGlvbnMiLCJpbnZhbGlkX2VudW1fdmFsdWUiLCJpbnZhbGlkX2FyZ3VtZW50cyIsImludmFsaWRfcmV0dXJuX3R5cGUiLCJpbnZhbGlkX2RhdGUiLCJpbnZhbGlkX3N0cmluZyIsInZhbGlkYXRpb24iLCJpbmNsdWRlcyIsInBvc2l0aW9uIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwidG9vX3NtYWxsIiwidHlwZSIsImV4YWN0IiwiaW5jbHVzaXZlIiwibWluaW11bSIsInRvb19iaWciLCJtYXhpbXVtIiwiaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXMiLCJub3RfbXVsdGlwbGVfb2YiLCJtdWx0aXBsZU9mIiwibm90X2Zpbml0ZSIsImRlZmF1bHRFcnJvciIsIm92ZXJyaWRlRXJyb3JNYXAiLCJwYXJhbXMiLCJlcnJvck1hcHMiLCJpc3N1ZURhdGEiLCJmdWxsUGF0aCIsImZ1bGxJc3N1ZSIsImVycm9yTWVzc2FnZSIsIm1hcHMiLCJtIiwic2xpY2UiLCJyZXZlcnNlIiwiY3R4Iiwib3ZlcnJpZGVNYXAiLCJjb21tb24iLCJjb250ZXh0dWFsRXJyb3JNYXAiLCJzY2hlbWFFcnJvck1hcCIsIngiLCJfUGFyc2VTdGF0dXMiLCJkaXJ0eSIsImFib3J0IiwibWVyZ2VBcnJheSIsInN0YXR1cyIsInJlc3VsdHMiLCJhcnJheVZhbHVlIiwicyIsIm1lcmdlT2JqZWN0QXN5bmMiLCJwYWlycyIsInN5bmNQYWlycyIsInBhaXIiLCJtZXJnZU9iamVjdFN5bmMiLCJmaW5hbE9iamVjdCIsImFsd2F5c1NldCIsImZyZWV6ZSIsIlByb21pc2UiLCJlcnJvclV0aWwiLCJlcnJvclV0aWwyIiwiZXJyVG9PYmoiLCJQYXJzZUlucHV0TGF6eVBhdGgiLCJwYXJlbnQiLCJfY2FjaGVkUGF0aCIsIl9wYXRoIiwiX2tleSIsImhhbmRsZVJlc3VsdCIsInJlc3VsdCIsInN1Y2Nlc3MiLCJfZXJyb3IiLCJwcm9jZXNzQ3JlYXRlUGFyYW1zIiwiZXJyb3JNYXAyIiwiaW52YWxpZF90eXBlX2Vycm9yIiwicmVxdWlyZWRfZXJyb3IiLCJkZXNjcmlwdGlvbiIsImN1c3RvbU1hcCIsImlzcyIsIl9kZWYiLCJfZ2V0VHlwZSIsImlucHV0IiwiX2dldE9yUmV0dXJuQ3R4IiwicGFyc2VkVHlwZSIsIl9wcm9jZXNzSW5wdXRQYXJhbXMiLCJfcGFyc2VTeW5jIiwiX3BhcnNlIiwiX3BhcnNlQXN5bmMiLCJyZXNvbHZlIiwicGFyc2UiLCJzYWZlUGFyc2UiLCJhc3luYyIsIn52YWxpZGF0ZSIsImVyciIsInRvTG93ZXJDYXNlIiwicGFyc2VBc3luYyIsInNhZmVQYXJzZUFzeW5jIiwibWF5YmVBc3luY1Jlc3VsdCIsInJlZmluZSIsImNoZWNrIiwiZ2V0SXNzdWVQcm9wZXJ0aWVzIiwiX3JlZmluZW1lbnQiLCJzZXRFcnJvciIsInJlZmluZW1lbnQiLCJyZWZpbmVtZW50RGF0YSIsInNjaGVtYSIsInR5cGVOYW1lIiwic3VwZXJSZWZpbmUiLCJkZWYiLCJzcGEiLCJiaW5kIiwibnVsbGlzaCIsIm9yIiwiYW5kIiwidHJhbnNmb3JtIiwiYnJhbmQiLCJkZXNjcmliZSIsInBpcGUiLCJyZWFkb25seSIsImlzTnVsbGFibGUiLCJpc09wdGlvbmFsIiwidmVyc2lvbiIsInZlbmRvciIsInZhbGlkYXRlIiwib3B0aW9uIiwiaW5jb21pbmciLCJkZWZhdWx0VmFsdWVGdW5jIiwiaW5uZXJUeXBlIiwiZGVmYXVsdFZhbHVlIiwiY2F0Y2hWYWx1ZUZ1bmMiLCJjYXRjaFZhbHVlIiwiVGhpcyIsImN1aWRSZWdleCIsImN1aWQyUmVnZXgiLCJ1bGlkUmVnZXgiLCJ1dWlkUmVnZXgiLCJuYW5vaWRSZWdleCIsImp3dFJlZ2V4IiwiZHVyYXRpb25SZWdleCIsImVtYWlsUmVnZXgiLCJfZW1vamlSZWdleCIsImVtb2ppUmVnZXgiLCJpcHY0UmVnZXgiLCJpcHY0Q2lkclJlZ2V4IiwiaXB2NlJlZ2V4IiwiaXB2NkNpZHJSZWdleCIsImJhc2U2NFJlZ2V4IiwiYmFzZTY0dXJsUmVnZXgiLCJkYXRlUmVnZXhTb3VyY2UiLCJkYXRlUmVnZXgiLCJSZWdFeHAiLCJ0aW1lUmVnZXhTb3VyY2UiLCJhcmdzIiwic2Vjb25kc1JlZ2V4U291cmNlIiwicHJlY2lzaW9uIiwic2Vjb25kc1F1YW50aWZpZXIiLCJ0aW1lUmVnZXgiLCJyZWdleCIsIm9wdHMiLCJsb2NhbCIsIm9mZnNldCIsImlzVmFsaWRJUCIsImlwIiwidGVzdCIsImlzVmFsaWRKV1QiLCJqd3QiLCJhbGciLCJoZWFkZXIiLCJzcGxpdCIsImJhc2U2NCIsInBhZEVuZCIsImRlY29kZWQiLCJhdG9iIiwidHlwIiwiaXNWYWxpZENpZHIiLCJfWm9kU3RyaW5nIiwiU3RyaW5nIiwiY3R4MiIsImNoZWNrcyIsImtpbmQiLCJ0b29CaWciLCJ0b29TbWFsbCIsIlVSTCIsImxhc3RJbmRleCIsInRlc3RSZXN1bHQiLCJ0cmltIiwidG9VcHBlckNhc2UiLCJfcmVnZXgiLCJfYWRkQ2hlY2siLCJlbWFpbCIsInVybCIsImVtb2ppIiwidXVpZCIsIm5hbm9pZCIsImN1aWQiLCJjdWlkMiIsInVsaWQiLCJiYXNlNjR1cmwiLCJjaWRyIiwiZGF0ZXRpbWUiLCJ0aW1lIiwiZHVyYXRpb24iLCJtaW4iLCJtaW5MZW5ndGgiLCJtYXgiLCJtYXhMZW5ndGgiLCJsZW4iLCJub25lbXB0eSIsImlzRGF0ZXRpbWUiLCJjaCIsImlzRGF0ZSIsImlzVGltZSIsImlzRHVyYXRpb24iLCJpc0VtYWlsIiwiaXNVUkwiLCJpc0Vtb2ppIiwiaXNVVUlEIiwiaXNOQU5PSUQiLCJpc0NVSUQiLCJpc0NVSUQyIiwiaXNVTElEIiwiaXNJUCIsImlzQ0lEUiIsImlzQmFzZTY0IiwiaXNCYXNlNjR1cmwiLCJmbG9hdFNhZmVSZW1haW5kZXIiLCJzdGVwIiwidmFsRGVjQ291bnQiLCJzdGVwRGVjQ291bnQiLCJkZWNDb3VudCIsInZhbEludCIsInBhcnNlSW50IiwidG9GaXhlZCIsInN0ZXBJbnQiLCJfWm9kTnVtYmVyIiwiYXJndW1lbnRzIiwiZ3RlIiwibHRlIiwic2V0TGltaXQiLCJndCIsImx0IiwiaW50IiwicG9zaXRpdmUiLCJuZWdhdGl2ZSIsIm5vbnBvc2l0aXZlIiwibm9ubmVnYXRpdmUiLCJmaW5pdGUiLCJzYWZlIiwiTUlOX1NBRkVfSU5URUdFUiIsIk1BWF9TQUZFX0lOVEVHRVIiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiaXNJbnQiLCJfWm9kQmlnSW50IiwiQmlnSW50IiwiX2dldEludmFsaWRJbnB1dCIsIkJvb2xlYW4iLCJfWm9kRGF0ZSIsImdldFRpbWUiLCJtaW5EYXRlIiwibWF4RGF0ZSIsIl9hbnkiLCJfdW5rbm93biIsIl9ab2RBcnJheSIsImV4YWN0TGVuZ3RoIiwiYWxsIiwicmVzdWx0MiIsImVsZW1lbnQiLCJkZWVwUGFydGlhbGlmeSIsIm5ld1NoYXBlIiwic2hhcGUiLCJmaWVsZFNjaGVtYSIsInVud3JhcCIsIl9ab2RPYmplY3QiLCJfY2FjaGVkIiwibm9uc3RyaWN0IiwicGFzc3Rocm91Z2giLCJhdWdtZW50IiwiZXh0ZW5kIiwiX2dldENhY2hlZCIsInNoYXBlS2V5cyIsImV4dHJhS2V5cyIsImNhdGNoYWxsIiwidW5rbm93bktleXMiLCJrZXlWYWxpZGF0b3IiLCJzdHJpY3QiLCJzdHJpcCIsImF1Z21lbnRhdGlvbiIsIm1lcmdlIiwibWVyZ2luZyIsIm1lcmdlZCIsInNldEtleSIsImluZGV4IiwicGljayIsIm1hc2siLCJvbWl0IiwiZGVlcFBhcnRpYWwiLCJwYXJ0aWFsIiwicmVxdWlyZWQiLCJuZXdGaWVsZCIsImtleW9mIiwiY3JlYXRlWm9kRW51bSIsInN0cmljdENyZWF0ZSIsImxhenljcmVhdGUiLCJoYW5kbGVSZXN1bHRzIiwiY2hpbGRDdHgiLCJpc3N1ZXMyIiwidHlwZXMiLCJnZXREaXNjcmltaW5hdG9yIiwiX1pvZERpc2NyaW1pbmF0ZWRVbmlvbiIsImRpc2NyaW1pbmF0b3IiLCJkaXNjcmltaW5hdG9yVmFsdWUiLCJvcHRpb25zTWFwIiwiZ2V0IiwiZnJvbSIsImRpc2NyaW1pbmF0b3JWYWx1ZXMiLCJoYXMiLCJtZXJnZVZhbHVlcyIsImEiLCJiIiwiYVR5cGUiLCJiVHlwZSIsInZhbGlkIiwiYktleXMiLCJzaGFyZWRLZXlzIiwiaW5kZXhPZiIsIm5ld09iaiIsInNoYXJlZFZhbHVlIiwibmV3QXJyYXkiLCJpdGVtQSIsIml0ZW1CIiwiaGFuZGxlUGFyc2VkIiwicGFyc2VkTGVmdCIsInBhcnNlZFJpZ2h0IiwibGVmdCIsInJpZ2h0IiwiX1pvZFR1cGxlIiwicmVzdCIsIml0ZW1JbmRleCIsInNjaGVtYXMiLCJfWm9kUmVjb3JkIiwia2V5U2NoZW1hIiwia2V5VHlwZSIsInZhbHVlU2NoZW1hIiwidmFsdWVUeXBlIiwidGhpcmQiLCJlbnRyaWVzIiwiZmluYWxNYXAiLCJfWm9kU2V0IiwibWluU2l6ZSIsInNpemUiLCJtYXhTaXplIiwiZmluYWxpemVTZXQiLCJlbGVtZW50czIiLCJwYXJzZWRTZXQiLCJhZGQiLCJlbGVtZW50cyIsInZhbHVlcyIsIl9ab2RGdW5jdGlvbiIsImltcGxlbWVudCIsIm1ha2VBcmdzSXNzdWUiLCJtYWtlUmV0dXJuc0lzc3VlIiwicmV0dXJucyIsImZuIiwibWUiLCJwYXJzZWRBcmdzIiwiUmVmbGVjdCIsImFwcGx5IiwicGFyc2VkUmV0dXJucyIsInBhcmFtZXRlcnMiLCJyZXR1cm5UeXBlIiwiZnVuYyIsInZhbGlkYXRlZEZ1bmMiLCJzdHJpY3RJbXBsZW1lbnQiLCJnZXR0ZXIiLCJsYXp5U2NoZW1hIiwiX1pvZEVudW0iLCJleHBlY3RlZFZhbHVlcyIsIl9jYWNoZSIsImVudW1WYWx1ZXMiLCJWYWx1ZXMiLCJFbnVtIiwiZXh0cmFjdCIsIm5ld0RlZiIsImV4Y2x1ZGUiLCJvcHQiLCJuYXRpdmVFbnVtVmFsdWVzIiwicHJvbWlzaWZpZWQiLCJzb3VyY2VUeXBlIiwiY2hlY2tDdHgiLCJhcmciLCJmYXRhbCIsInByb2Nlc3NlZCIsInByb2Nlc3NlZDIiLCJleGVjdXRlUmVmaW5lbWVudCIsImFjYyIsImlubmVyIiwiYmFzZSIsImNyZWF0ZVdpdGhQcmVwcm9jZXNzIiwicmVtb3ZlRGVmYXVsdCIsIm5ld0N0eCIsInJlbW92ZUNhdGNoIiwiU3ltYm9sIiwiX1pvZFBpcGVsaW5lIiwiaGFuZGxlQXN5bmMiLCJpblJlc3VsdCIsImluIiwib3V0IiwiY2xlYW5QYXJhbXMiLCJwIiwicDIiLCJfcGFyYW1zIiwiciIsInIyIiwiX2ZhdGFsIiwiWm9kRmlyc3RQYXJ0eVR5cGVLaW5kMiIsIkNsYXNzIiwiY2xzIiwidjNfZGVmYXVsdCIsImVzbV9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxRQUFBLENBQUFELG1CQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxFQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQWpDLE9BQUE7RUFBQWtDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBM0IsVUFBQTtFQUFBNEIsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQXRDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUF1QyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxtQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFDLHNCQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQyxnQkFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUMsZ0JBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUE3RCxXQUFBO0VBQUE4RCxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUMsYUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxDQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBdkosbUJBQUE7OztBQ0FBLElBQUFvSixnQkFBQTtBQUFBbkosUUFBQSxDQUFBbUosZ0JBQUE7RUFBQWxKLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxFQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQWpDLE9BQUE7RUFBQWtDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBM0IsVUFBQTtFQUFBNEIsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQXRDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUF1QyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFHLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUMsc0JBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFDLGdCQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQyxnQkFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQTdELFdBQUE7RUFB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Q0EsSUFBSW9DLFFBQUEsRUFBVTtJQUNWLE9BQU8sQ0FBQyxDQUFDLEtBQUt4SSxJQUFBLENBQUttRyxNQUFBLENBQU8vUCxJQUFBLENBQU04UixFQUFBLElBQU9BLEVBQUEsQ0FBRzlCLElBQUEsS0FBUyxPQUFPO0VBQzlEO0VBQ0EsSUFBSXFDLE9BQUEsRUFBUztJQUNULE9BQU8sQ0FBQyxDQUFDLEtBQUt6SSxJQUFBLENBQUttRyxNQUFBLENBQU8vUCxJQUFBLENBQU04UixFQUFBLElBQU9BLEVBQUEsQ0FBRzlCLElBQUEsS0FBUyxNQUFNO0VBQzdEO0VBQ0EsSUFBSXNDLFNBQUEsRUFBVztJQUNYLE9BQU8sQ0FBQyxDQUFDLEtBQUsxSSxJQUFBLENBQUttRyxNQUFBLENBQU8vUCxJQUFBLENBQU04UixFQUFBLElBQU9BLEVBQUEsQ0FBRzlCLElBQUEsS0FBUyxRQUFRO0VBQy9EO0VBQ0EsSUFBSXVDLE9BQUEsRUFBUztJQUNULE9BQU8sQ0FBQyxDQUFDLEtBQUszSSxJQUFBLENBQUttRyxNQUFBLENBQU8vUCxJQUFBLENBQU04UixFQUFBLElBQU9BLEVBQUEsQ0FBRzlCLElBQUEsS0FBUyxNQUFNO0VBQzdEO0VBQ0EsSUFBSXdDLFFBQUEsRUFBVTtJQUNWLE9BQU8sQ0FBQyxDQUFDLEtBQUs1SSxJQUFBLENBQUttRyxNQUFBLENBQU8vUCxJQUFBLENBQU04UixFQUFBLElBQU9BLEVBQUEsQ0FBRzlCLElBQUEsS0FBUyxPQUFPO0VBQzlEO0VBQ0EsSUFBSXlDLE9BQUEsRUFBUztJQUNULE9BQU8sQ0FBQyxDQUFDLEtBQUs3SSxJQUFBLENBQUttRyxNQUFBLENBQU8vUCxJQUFBLENBQU04UixFQUFBLElBQU9BLEVBQUEsQ0FBRzlCLElBQUEsS0FBUyxNQUFNO0VBQzdEO0VBQ0EsSUFBSTBDLEtBQUEsRUFBTztJQUNQLE9BQU8sQ0FBQyxDQUFDLEtBQUs5SSxJQUFBLENBQUttRyxNQUFBLENBQU8vUCxJQUFBLENBQU04UixFQUFBLElBQU9BLEVBQUEsQ0FBRzlCLElBQUEsS0FBUyxJQUFJO0VBQzNE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