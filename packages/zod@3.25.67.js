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

// .beyond/uimport/temp/zod.3.25.67.js
var zod_3_25_67_default = esm_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3pvZC4zLjI1LjY3LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3pvZC9kaXN0L2VzbS92My9leHRlcm5hbC5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvaGVscGVycy91dGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3pvZC9kaXN0L2VzbS92My9ab2RFcnJvci5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvbG9jYWxlcy9lbi5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvZXJyb3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3pvZC9kaXN0L2VzbS92My9oZWxwZXJzL3BhcnNlVXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjMvaGVscGVycy9lcnJvclV0aWwuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2Rpc3QvZXNtL3YzL3R5cGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3pvZC9kaXN0L2VzbS92My9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiem9kXzNfMjVfNjdfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQlJBTkQiLCJESVJUWSIsIkVNUFRZX1BBVEgiLCJJTlZBTElEIiwiTkVWRVIiLCJPSyIsIlBhcnNlU3RhdHVzIiwiU2NoZW1hIiwiWm9kVHlwZSIsIlpvZEFueSIsIlpvZEFycmF5IiwiWm9kQmlnSW50IiwiWm9kQm9vbGVhbiIsIlpvZEJyYW5kZWQiLCJab2RDYXRjaCIsIlpvZERhdGUiLCJab2REZWZhdWx0IiwiWm9kRGlzY3JpbWluYXRlZFVuaW9uIiwiWm9kRWZmZWN0cyIsIlpvZEVudW0iLCJab2RFcnJvciIsIlpvZEZpcnN0UGFydHlUeXBlS2luZCIsIlpvZEZ1bmN0aW9uIiwiWm9kSW50ZXJzZWN0aW9uIiwiWm9kSXNzdWVDb2RlIiwiWm9kTGF6eSIsIlpvZExpdGVyYWwiLCJab2RNYXAiLCJab2ROYU4iLCJab2ROYXRpdmVFbnVtIiwiWm9kTmV2ZXIiLCJab2ROdWxsIiwiWm9kTnVsbGFibGUiLCJab2ROdW1iZXIiLCJab2RPYmplY3QiLCJab2RPcHRpb25hbCIsIlpvZFBhcnNlZFR5cGUiLCJab2RQaXBlbGluZSIsIlpvZFByb21pc2UiLCJab2RSZWFkb25seSIsIlpvZFJlY29yZCIsIlpvZFNjaGVtYSIsIlpvZFNldCIsIlpvZFN0cmluZyIsIlpvZFN5bWJvbCIsIlpvZFRyYW5zZm9ybWVyIiwiWm9kVHVwbGUiLCJab2RVbmRlZmluZWQiLCJab2RVbmlvbiIsIlpvZFVua25vd24iLCJab2RWb2lkIiwiYWRkSXNzdWVUb0NvbnRleHQiLCJhbnkiLCJhbnlUeXBlIiwiYXJyYXkiLCJhcnJheVR5cGUiLCJiaWdpbnQiLCJiaWdJbnRUeXBlIiwiYm9vbGVhbiIsImJvb2xlYW5UeXBlIiwiY29lcmNlIiwiY3VzdG9tIiwiZGF0ZSIsImRhdGVUeXBlIiwiZGF0ZXRpbWVSZWdleCIsImRlZmF1bHQiLCJ6b2RfM18yNV82N19kZWZhdWx0IiwiZGVmYXVsdEVycm9yTWFwIiwiZW5fZGVmYXVsdCIsImRpc2NyaW1pbmF0ZWRVbmlvbiIsImRpc2NyaW1pbmF0ZWRVbmlvblR5cGUiLCJlZmZlY3QiLCJlZmZlY3RzVHlwZSIsImVudW0iLCJlbnVtVHlwZSIsImZ1bmN0aW9uIiwiZnVuY3Rpb25UeXBlIiwiZ2V0RXJyb3JNYXAiLCJnZXRQYXJzZWRUeXBlIiwiaW5zdGFuY2VvZiIsImluc3RhbmNlT2ZUeXBlIiwiaW50ZXJzZWN0aW9uIiwiaW50ZXJzZWN0aW9uVHlwZSIsImlzQWJvcnRlZCIsImlzQXN5bmMiLCJpc0RpcnR5IiwiaXNWYWxpZCIsImxhdGUiLCJsYXp5IiwibGF6eVR5cGUiLCJsaXRlcmFsIiwibGl0ZXJhbFR5cGUiLCJtYWtlSXNzdWUiLCJtYXAiLCJtYXBUeXBlIiwibmFuIiwibmFuVHlwZSIsIm5hdGl2ZUVudW0iLCJuYXRpdmVFbnVtVHlwZSIsIm5ldmVyIiwibmV2ZXJUeXBlIiwibnVsbCIsIm51bGxUeXBlIiwibnVsbGFibGUiLCJudWxsYWJsZVR5cGUiLCJudW1iZXIiLCJudW1iZXJUeXBlIiwib2JqZWN0Iiwib2JqZWN0VHlwZSIsIm9iamVjdFV0aWwiLCJvYm9vbGVhbiIsIm9udW1iZXIiLCJvcHRpb25hbCIsIm9wdGlvbmFsVHlwZSIsIm9zdHJpbmciLCJwaXBlbGluZSIsInBpcGVsaW5lVHlwZSIsInByZXByb2Nlc3MiLCJwcmVwcm9jZXNzVHlwZSIsInByb21pc2UiLCJwcm9taXNlVHlwZSIsInF1b3RlbGVzc0pzb24iLCJyZWNvcmQiLCJyZWNvcmRUeXBlIiwic2V0Iiwic2V0VHlwZSIsInNldEVycm9yTWFwIiwic3RyaWN0T2JqZWN0Iiwic3RyaWN0T2JqZWN0VHlwZSIsInN0cmluZyIsInN0cmluZ1R5cGUiLCJzeW1ib2wiLCJzeW1ib2xUeXBlIiwidHJhbnNmb3JtZXIiLCJ0dXBsZSIsInR1cGxlVHlwZSIsInVuZGVmaW5lZCIsInVuZGVmaW5lZFR5cGUiLCJ1bmlvbiIsInVuaW9uVHlwZSIsInVua25vd24iLCJ1bmtub3duVHlwZSIsInV0aWwiLCJ2b2lkIiwidm9pZFR5cGUiLCJ6IiwiZXh0ZXJuYWxfZXhwb3J0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ1dGlsMiIsImFzc2VydEVxdWFsIiwiXyIsImFzc2VydElzIiwiX2FyZyIsImFzc2VydE5ldmVyIiwiX3giLCJFcnJvciIsImFycmF5VG9FbnVtIiwiaXRlbXMiLCJvYmoiLCJpdGVtIiwiZ2V0VmFsaWRFbnVtVmFsdWVzIiwidmFsaWRLZXlzIiwib2JqZWN0S2V5cyIsImZpbHRlciIsImsiLCJmaWx0ZXJlZCIsIm9iamVjdFZhbHVlcyIsImUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicHVzaCIsImZpbmQiLCJhcnIiLCJjaGVja2VyIiwiaXNJbnRlZ2VyIiwiTnVtYmVyIiwidmFsIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJqb2luVmFsdWVzIiwic2VwYXJhdG9yIiwiam9pbiIsImpzb25TdHJpbmdpZnlSZXBsYWNlciIsInZhbHVlIiwidG9TdHJpbmciLCJvYmplY3RVdGlsMiIsIm1lcmdlU2hhcGVzIiwiZmlyc3QiLCJzZWNvbmQiLCJkYXRhIiwidCIsImlzTmFOIiwiQXJyYXkiLCJpc0FycmF5IiwidGhlbiIsImNhdGNoIiwiTWFwIiwiU2V0IiwiRGF0ZSIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZSIsIl9ab2RFcnJvciIsImVycm9ycyIsImlzc3VlcyIsImNvbnN0cnVjdG9yIiwiYWRkSXNzdWUiLCJzdWIiLCJhZGRJc3N1ZXMiLCJzdWJzIiwiYWN0dWFsUHJvdG8iLCJuZXciLCJ0YXJnZXQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIm5hbWUiLCJmb3JtYXQiLCJfbWFwcGVyIiwibWFwcGVyIiwiaXNzdWUiLCJtZXNzYWdlIiwiZmllbGRFcnJvcnMiLCJfZXJyb3JzIiwicHJvY2Vzc0Vycm9yIiwiZXJyb3IiLCJjb2RlIiwidW5pb25FcnJvcnMiLCJyZXR1cm5UeXBlRXJyb3IiLCJhcmd1bWVudHNFcnJvciIsInBhdGgiLCJsZW5ndGgiLCJjdXJyIiwiaSIsImVsIiwidGVybWluYWwiLCJhc3NlcnQiLCJpc0VtcHR5IiwiZmxhdHRlbiIsImZvcm1FcnJvcnMiLCJjcmVhdGUiLCJlcnJvck1hcCIsIl9jdHgiLCJpbnZhbGlkX3R5cGUiLCJyZWNlaXZlZCIsImV4cGVjdGVkIiwiaW52YWxpZF9saXRlcmFsIiwidW5yZWNvZ25pemVkX2tleXMiLCJpbnZhbGlkX3VuaW9uIiwiaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yIiwib3B0aW9ucyIsImludmFsaWRfZW51bV92YWx1ZSIsImludmFsaWRfYXJndW1lbnRzIiwiaW52YWxpZF9yZXR1cm5fdHlwZSIsImludmFsaWRfZGF0ZSIsImludmFsaWRfc3RyaW5nIiwidmFsaWRhdGlvbiIsImluY2x1ZGVzIiwicG9zaXRpb24iLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJ0b29fc21hbGwiLCJ0eXBlIiwiZXhhY3QiLCJpbmNsdXNpdmUiLCJtaW5pbXVtIiwidG9vX2JpZyIsIm1heGltdW0iLCJpbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlcyIsIm5vdF9tdWx0aXBsZV9vZiIsIm11bHRpcGxlT2YiLCJub3RfZmluaXRlIiwiZGVmYXVsdEVycm9yIiwib3ZlcnJpZGVFcnJvck1hcCIsInBhcmFtcyIsImVycm9yTWFwcyIsImlzc3VlRGF0YSIsImZ1bGxQYXRoIiwiZnVsbElzc3VlIiwiZXJyb3JNZXNzYWdlIiwibWFwcyIsIm0iLCJzbGljZSIsInJldmVyc2UiLCJjdHgiLCJvdmVycmlkZU1hcCIsImNvbW1vbiIsImNvbnRleHR1YWxFcnJvck1hcCIsInNjaGVtYUVycm9yTWFwIiwieCIsIl9QYXJzZVN0YXR1cyIsImRpcnR5IiwiYWJvcnQiLCJtZXJnZUFycmF5Iiwic3RhdHVzIiwicmVzdWx0cyIsImFycmF5VmFsdWUiLCJzIiwibWVyZ2VPYmplY3RBc3luYyIsInBhaXJzIiwic3luY1BhaXJzIiwicGFpciIsIm1lcmdlT2JqZWN0U3luYyIsImZpbmFsT2JqZWN0IiwiYWx3YXlzU2V0IiwiZnJlZXplIiwiUHJvbWlzZSIsImVycm9yVXRpbCIsImVycm9yVXRpbDIiLCJlcnJUb09iaiIsIlBhcnNlSW5wdXRMYXp5UGF0aCIsInBhcmVudCIsIl9jYWNoZWRQYXRoIiwiX3BhdGgiLCJfa2V5IiwiaGFuZGxlUmVzdWx0IiwicmVzdWx0Iiwic3VjY2VzcyIsIl9lcnJvciIsInByb2Nlc3NDcmVhdGVQYXJhbXMiLCJlcnJvck1hcDIiLCJpbnZhbGlkX3R5cGVfZXJyb3IiLCJyZXF1aXJlZF9lcnJvciIsImRlc2NyaXB0aW9uIiwiY3VzdG9tTWFwIiwiaXNzIiwiX2RlZiIsIl9nZXRUeXBlIiwiaW5wdXQiLCJfZ2V0T3JSZXR1cm5DdHgiLCJwYXJzZWRUeXBlIiwiX3Byb2Nlc3NJbnB1dFBhcmFtcyIsIl9wYXJzZVN5bmMiLCJfcGFyc2UiLCJfcGFyc2VBc3luYyIsInJlc29sdmUiLCJwYXJzZSIsInNhZmVQYXJzZSIsImFzeW5jIiwifnZhbGlkYXRlIiwiZXJyIiwidG9Mb3dlckNhc2UiLCJwYXJzZUFzeW5jIiwic2FmZVBhcnNlQXN5bmMiLCJtYXliZUFzeW5jUmVzdWx0IiwicmVmaW5lIiwiY2hlY2siLCJnZXRJc3N1ZVByb3BlcnRpZXMiLCJfcmVmaW5lbWVudCIsInNldEVycm9yIiwicmVmaW5lbWVudCIsInJlZmluZW1lbnREYXRhIiwic2NoZW1hIiwidHlwZU5hbWUiLCJzdXBlclJlZmluZSIsImRlZiIsInNwYSIsImJpbmQiLCJudWxsaXNoIiwib3IiLCJhbmQiLCJ0cmFuc2Zvcm0iLCJicmFuZCIsImRlc2NyaWJlIiwicGlwZSIsInJlYWRvbmx5IiwiaXNOdWxsYWJsZSIsImlzT3B0aW9uYWwiLCJ2ZXJzaW9uIiwidmVuZG9yIiwidmFsaWRhdGUiLCJvcHRpb24iLCJpbmNvbWluZyIsImRlZmF1bHRWYWx1ZUZ1bmMiLCJpbm5lclR5cGUiLCJkZWZhdWx0VmFsdWUiLCJjYXRjaFZhbHVlRnVuYyIsImNhdGNoVmFsdWUiLCJUaGlzIiwiY3VpZFJlZ2V4IiwiY3VpZDJSZWdleCIsInVsaWRSZWdleCIsInV1aWRSZWdleCIsIm5hbm9pZFJlZ2V4Iiwiand0UmVnZXgiLCJkdXJhdGlvblJlZ2V4IiwiZW1haWxSZWdleCIsIl9lbW9qaVJlZ2V4IiwiZW1vamlSZWdleCIsImlwdjRSZWdleCIsImlwdjRDaWRyUmVnZXgiLCJpcHY2UmVnZXgiLCJpcHY2Q2lkclJlZ2V4IiwiYmFzZTY0UmVnZXgiLCJiYXNlNjR1cmxSZWdleCIsImRhdGVSZWdleFNvdXJjZSIsImRhdGVSZWdleCIsIlJlZ0V4cCIsInRpbWVSZWdleFNvdXJjZSIsImFyZ3MiLCJzZWNvbmRzUmVnZXhTb3VyY2UiLCJwcmVjaXNpb24iLCJzZWNvbmRzUXVhbnRpZmllciIsInRpbWVSZWdleCIsInJlZ2V4Iiwib3B0cyIsImxvY2FsIiwib2Zmc2V0IiwiaXNWYWxpZElQIiwiaXAiLCJ0ZXN0IiwiaXNWYWxpZEpXVCIsImp3dCIsImFsZyIsImhlYWRlciIsInNwbGl0IiwiYmFzZTY0IiwicGFkRW5kIiwiZGVjb2RlZCIsImF0b2IiLCJ0eXAiLCJpc1ZhbGlkQ2lkciIsIl9ab2RTdHJpbmciLCJTdHJpbmciLCJjdHgyIiwiY2hlY2tzIiwia2luZCIsInRvb0JpZyIsInRvb1NtYWxsIiwiVVJMIiwibGFzdEluZGV4IiwidGVzdFJlc3VsdCIsInRyaW0iLCJ0b1VwcGVyQ2FzZSIsIl9yZWdleCIsIl9hZGRDaGVjayIsImVtYWlsIiwidXJsIiwiZW1vamkiLCJ1dWlkIiwibmFub2lkIiwiY3VpZCIsImN1aWQyIiwidWxpZCIsImJhc2U2NHVybCIsImNpZHIiLCJkYXRldGltZSIsInRpbWUiLCJkdXJhdGlvbiIsIm1pbiIsIm1pbkxlbmd0aCIsIm1heCIsIm1heExlbmd0aCIsImxlbiIsIm5vbmVtcHR5IiwiaXNEYXRldGltZSIsImNoIiwiaXNEYXRlIiwiaXNUaW1lIiwiaXNEdXJhdGlvbiIsImlzRW1haWwiLCJpc1VSTCIsImlzRW1vamkiLCJpc1VVSUQiLCJpc05BTk9JRCIsImlzQ1VJRCIsImlzQ1VJRDIiLCJpc1VMSUQiLCJpc0lQIiwiaXNDSURSIiwiaXNCYXNlNjQiLCJpc0Jhc2U2NHVybCIsImZsb2F0U2FmZVJlbWFpbmRlciIsInN0ZXAiLCJ2YWxEZWNDb3VudCIsInN0ZXBEZWNDb3VudCIsImRlY0NvdW50IiwidmFsSW50IiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwic3RlcEludCIsIl9ab2ROdW1iZXIiLCJhcmd1bWVudHMiLCJndGUiLCJsdGUiLCJzZXRMaW1pdCIsImd0IiwibHQiLCJpbnQiLCJwb3NpdGl2ZSIsIm5lZ2F0aXZlIiwibm9ucG9zaXRpdmUiLCJub25uZWdhdGl2ZSIsImZpbml0ZSIsInNhZmUiLCJNSU5fU0FGRV9JTlRFR0VSIiwiTUFYX1NBRkVfSU5URUdFUiIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJpc0ludCIsIl9ab2RCaWdJbnQiLCJCaWdJbnQiLCJfZ2V0SW52YWxpZElucHV0IiwiQm9vbGVhbiIsIl9ab2REYXRlIiwiZ2V0VGltZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiX2FueSIsIl91bmtub3duIiwiX1pvZEFycmF5IiwiZXhhY3RMZW5ndGgiLCJhbGwiLCJyZXN1bHQyIiwiZWxlbWVudCIsImRlZXBQYXJ0aWFsaWZ5IiwibmV3U2hhcGUiLCJzaGFwZSIsImZpZWxkU2NoZW1hIiwidW53cmFwIiwiX1pvZE9iamVjdCIsIl9jYWNoZWQiLCJub25zdHJpY3QiLCJwYXNzdGhyb3VnaCIsImF1Z21lbnQiLCJleHRlbmQiLCJfZ2V0Q2FjaGVkIiwic2hhcGVLZXlzIiwiZXh0cmFLZXlzIiwiY2F0Y2hhbGwiLCJ1bmtub3duS2V5cyIsImtleVZhbGlkYXRvciIsInN0cmljdCIsInN0cmlwIiwiYXVnbWVudGF0aW9uIiwibWVyZ2UiLCJtZXJnaW5nIiwibWVyZ2VkIiwic2V0S2V5IiwiaW5kZXgiLCJwaWNrIiwibWFzayIsIm9taXQiLCJkZWVwUGFydGlhbCIsInBhcnRpYWwiLCJyZXF1aXJlZCIsIm5ld0ZpZWxkIiwia2V5b2YiLCJjcmVhdGVab2RFbnVtIiwic3RyaWN0Q3JlYXRlIiwibGF6eWNyZWF0ZSIsImhhbmRsZVJlc3VsdHMiLCJjaGlsZEN0eCIsImlzc3VlczIiLCJ0eXBlcyIsImdldERpc2NyaW1pbmF0b3IiLCJfWm9kRGlzY3JpbWluYXRlZFVuaW9uIiwiZGlzY3JpbWluYXRvciIsImRpc2NyaW1pbmF0b3JWYWx1ZSIsIm9wdGlvbnNNYXAiLCJnZXQiLCJmcm9tIiwiZGlzY3JpbWluYXRvclZhbHVlcyIsImhhcyIsIm1lcmdlVmFsdWVzIiwiYSIsImIiLCJhVHlwZSIsImJUeXBlIiwidmFsaWQiLCJiS2V5cyIsInNoYXJlZEtleXMiLCJpbmRleE9mIiwibmV3T2JqIiwic2hhcmVkVmFsdWUiLCJuZXdBcnJheSIsIml0ZW1BIiwiaXRlbUIiLCJoYW5kbGVQYXJzZWQiLCJwYXJzZWRMZWZ0IiwicGFyc2VkUmlnaHQiLCJsZWZ0IiwicmlnaHQiLCJfWm9kVHVwbGUiLCJyZXN0IiwiaXRlbUluZGV4Iiwic2NoZW1hcyIsIl9ab2RSZWNvcmQiLCJrZXlTY2hlbWEiLCJrZXlUeXBlIiwidmFsdWVTY2hlbWEiLCJ2YWx1ZVR5cGUiLCJ0aGlyZCIsImVudHJpZXMiLCJmaW5hbE1hcCIsIl9ab2RTZXQiLCJtaW5TaXplIiwic2l6ZSIsIm1heFNpemUiLCJmaW5hbGl6ZVNldCIsImVsZW1lbnRzMiIsInBhcnNlZFNldCIsImFkZCIsImVsZW1lbnRzIiwidmFsdWVzIiwiX1pvZEZ1bmN0aW9uIiwiaW1wbGVtZW50IiwibWFrZUFyZ3NJc3N1ZSIsIm1ha2VSZXR1cm5zSXNzdWUiLCJyZXR1cm5zIiwiZm4iLCJtZSIsInBhcnNlZEFyZ3MiLCJSZWZsZWN0IiwiYXBwbHkiLCJwYXJzZWRSZXR1cm5zIiwicGFyYW1ldGVycyIsInJldHVyblR5cGUiLCJmdW5jIiwidmFsaWRhdGVkRnVuYyIsInN0cmljdEltcGxlbWVudCIsImdldHRlciIsImxhenlTY2hlbWEiLCJfWm9kRW51bSIsImV4cGVjdGVkVmFsdWVzIiwiX2NhY2hlIiwiZW51bVZhbHVlcyIsIlZhbHVlcyIsIkVudW0iLCJleHRyYWN0IiwibmV3RGVmIiwiZXhjbHVkZSIsIm9wdCIsIm5hdGl2ZUVudW1WYWx1ZXMiLCJwcm9taXNpZmllZCIsInNvdXJjZVR5cGUiLCJjaGVja0N0eCIsImFyZyIsImZhdGFsIiwicHJvY2Vzc2VkIiwicHJvY2Vzc2VkMiIsImV4ZWN1dGVSZWZpbmVtZW50IiwiYWNjIiwiaW5uZXIiLCJiYXNlIiwiY3JlYXRlV2l0aFByZXByb2Nlc3MiLCJyZW1vdmVEZWZhdWx0IiwibmV3Q3R4IiwicmVtb3ZlQ2F0Y2giLCJTeW1ib2wiLCJfWm9kUGlwZWxpbmUiLCJoYW5kbGVBc3luYyIsImluUmVzdWx0IiwiaW4iLCJvdXQiLCJjbGVhblBhcmFtcyIsInAiLCJwMiIsIl9wYXJhbXMiLCJyIiwicjIiLCJfZmF0YWwiLCJab2RGaXJzdFBhcnR5VHlwZUtpbmQyIiwiQ2xhc3MiLCJjbHMiLCJ2M19kZWZhdWx0IiwiZXNtX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUJBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsRUFBQSxFQUFBQSxDQUFBLEtBQUFBLEVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBakMsT0FBQTtFQUFBa0MsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUEzQixVQUFBO0VBQUE0QixRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBdEMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQXVDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLG1CQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUMsc0JBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFDLGdCQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQyxnQkFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQTdELFdBQUE7RUFBQThELEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQyxhQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLENBQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUF2SixtQkFBQTs7O0FDQUEsSUFBQW9KLGdCQUFBO0FBQUFuSixRQUFBLENBQUFtSixnQkFBQTtFQUFBbEosS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsRUFBQSxFQUFBQSxDQUFBLEtBQUFBLEVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBakMsT0FBQTtFQUFBa0MsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUEzQixVQUFBO0VBQUE0QixRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBdEMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQXVDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUcsZUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQyxzQkFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUMsZ0JBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFDLGdCQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBN0QsV0FB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