System.register(["@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.0"],["socket.io-parser","4.2.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
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

// .beyond/uimport/temp/socket.io-parser.4.2.4.js
var socket_io_parser_4_2_4_exports = {};
__export(socket_io_parser_4_2_4_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol
});
module.exports = __toCommonJS(socket_io_parser_4_2_4_exports);

// node_modules/socket.io-parser/build/esm/is-binary.js
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return {
    packet: pack,
    buffers
  };
}
function _deconstructPacket(data, buffers) {
  if (!data) return data;
  if (isBinary(data)) {
    const placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data) return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// node_modules/socket.io-parser/build/esm/index.js
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var RESERVED_EVENTS = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var protocol = 5;
var PacketType;
(function (PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  constructor(replacer) {
    this.replacer = replacer;
  }
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
var Decoder = class extends import_component_emitter.Emitter {
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  decodeString(str) {
    let i = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {}
      const buf = str.substring(start, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if ("/" === str.charAt(i + 1)) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if ("," === c) break;
        if (i === str.length) break;
      }
      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if ("" !== next && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (null == c || Number(c) != c) {
          --i;
          break;
        }
        if (i === str.length) break;
      }
      p.id = Number(str.substring(start, i + 1));
    }
    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));
      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return isObject(payload);
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject(payload);
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3NvY2tldC5pby1wYXJzZXIuNC4yLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9idWlsZC9lc20vaXMtYmluYXJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvYnVpbGQvZXNtL2JpbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIkRlY29kZXIiLCJFbmNvZGVyIiwiUGFja2V0VHlwZSIsInByb3RvY29sIiwibW9kdWxlIiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJvYmoiLCJidWZmZXIiLCJ0b1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsIndpdGhOYXRpdmVCbG9iIiwiQmxvYiIsImNhbGwiLCJ3aXRoTmF0aXZlRmlsZSIsIkZpbGUiLCJpc0JpbmFyeSIsImhhc0JpbmFyeSIsInRvSlNPTiIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsIiwibGVuZ3RoIiwiYXJndW1lbnRzIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJkZWNvbnN0cnVjdFBhY2tldCIsInBhY2tldCIsImJ1ZmZlcnMiLCJwYWNrZXREYXRhIiwiZGF0YSIsInBhY2siLCJfZGVjb25zdHJ1Y3RQYWNrZXQiLCJhdHRhY2htZW50cyIsInBsYWNlaG9sZGVyIiwiX3BsYWNlaG9sZGVyIiwibnVtIiwicHVzaCIsIm5ld0RhdGEiLCJEYXRlIiwicmVjb25zdHJ1Y3RQYWNrZXQiLCJfcmVjb25zdHJ1Y3RQYWNrZXQiLCJpc0luZGV4VmFsaWQiLCJFcnJvciIsInJlcXVpcmUiLCJSRVNFUlZFRF9FVkVOVFMiLCJjb25zdHJ1Y3RvciIsInJlcGxhY2VyIiwiZW5jb2RlIiwidHlwZSIsIkVWRU5UIiwiQUNLIiwiZW5jb2RlQXNCaW5hcnkiLCJCSU5BUllfRVZFTlQiLCJCSU5BUllfQUNLIiwibnNwIiwiaWQiLCJlbmNvZGVBc1N0cmluZyIsInN0ciIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWNvbnN0cnVjdGlvbiIsInVuc2hpZnQiLCJpc09iamVjdCIsInZhbHVlIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwicmV2aXZlciIsImFkZCIsInJlY29uc3RydWN0b3IiLCJkZWNvZGVTdHJpbmciLCJpc0JpbmFyeUV2ZW50IiwiQmluYXJ5UmVjb25zdHJ1Y3RvciIsImVtaXRSZXNlcnZlZCIsImJhc2U2NCIsInRha2VCaW5hcnlEYXRhIiwicCIsIk51bWJlciIsImNoYXJBdCIsInN0YXJ0IiwiYnVmIiwic3Vic3RyaW5nIiwiYyIsIm5leHQiLCJwYXlsb2FkIiwidHJ5UGFyc2UiLCJzdWJzdHIiLCJpc1BheWxvYWRWYWxpZCIsInBhcnNlIiwiZSIsIkNPTk5FQ1QiLCJESVNDT05ORUNUIiwiQ09OTkVDVF9FUlJPUiIsImluZGV4T2YiLCJkZXN0cm95IiwiZmluaXNoZWRSZWNvbnN0cnVjdGlvbiIsInJlY29uUGFjayIsImJpbkRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FBLElBQU1DLHdCQUF3QixPQUFPQyxnQkFBZ0I7QUFDckQsSUFBTUMsU0FBVUMsT0FBUTtFQUNwQixPQUFPLE9BQU9GLFlBQVlDLFdBQVcsYUFDL0JELFlBQVlDLE9BQU9DLEdBQUcsSUFDdEJBLElBQUlDLGtCQUFrQkg7QUFDaEM7QUFDQSxJQUFNSSxXQUFXQyxPQUFPQyxVQUFVRjtBQUNsQyxJQUFNRyxpQkFBaUIsT0FBT0MsU0FBUyxjQUNsQyxPQUFPQSxTQUFTLGVBQ2JKLFNBQVNLLEtBQUtELElBQUksTUFBTTtBQUNoQyxJQUFNRSxpQkFBaUIsT0FBT0MsU0FBUyxjQUNsQyxPQUFPQSxTQUFTLGVBQ2JQLFNBQVNLLEtBQUtF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QUFLb0IsT0FBT2xCLElBQUlzQixVQUFVRixPQUFPMUQsSUFBSSxDQUFDLENBQUM7SUFDN0M7SUFFQSxJQUFJc0MsSUFBSW1CLE9BQU8sRUFBRXpELENBQUMsR0FBRztNQUNqQixNQUFNK0QsVUFBVSxLQUFLQyxTQUFTMUIsSUFBSTJCLE9BQU9qRSxDQUFDLENBQUM7TUFDM0MsSUFBSXZCLFFBQVF5RixlQUFlWCxFQUFFMUIsTUFBTWtDLE9BQU8sR0FBRztRQUN6Q1IsRUFBRTdDLE9BQU9xRDtNQUNiLE9BQ0s7UUFDRCxNQUFNLElBQUl4QyxNQUFNLGlCQUFpQjtNQUNyQztJQUNKO0lBQ0EsT0FBT2dDO0VBQ1g7RUFDQVMsU0FBUzFCLEtBQUs7SUFDVixJQUFJO01BQ0EsT0FBT0MsS0FBSzRCLE1BQU03QixLQUFLLEtBQUtRLE9BQU87SUFDdkMsU0FDT3NCLEdBQVA7TUFDSSxPQUFPO0lBQ1g7RUFDSjtFQUNBLE9BQU9GLGVBQWVyQyxNQUFNa0MsU0FBUztJQUNqQyxRQUFRbEM7TUFBQSxLQUNDbEQsV0FBVzBGO1FBQ1osT0FBTzFCLFNBQVNvQixPQUFPO01BQUEsS0FDdEJwRixXQUFXMkY7UUFDWixPQUFPUCxZQUFZO01BQUEsS0FDbEJwRixXQUFXNEY7UUFDWixPQUFPLE9BQU9SLFlBQVksWUFBWXBCLFNBQVNvQixPQUFPO01BQUEsS0FDckRwRixXQUFXbUQ7TUFBQSxLQUNYbkQsV0FBV3NEO1FBQ1osT0FBUW5DLE1BQU1DLFFBQVFnRSxPQUFPLE1BQ3hCLE9BQU9BLFFBQVEsT0FBTyxZQUNsQixPQUFPQSxRQUFRLE9BQU8sWUFDbkJ0QyxnQkFBZ0IrQyxRQUFRVCxRQUFRLEVBQUUsTUFBTTtNQUFBLEtBQ25EcEYsV0FBV29EO01BQUEsS0FDWHBELFdBQVd1RDtRQUNaLE9BQU9wQyxNQUFNQyxRQUFRZ0UsT0FBTztJQUFBO0VBRXhDO0VBSUFVLFVBQVU7SUFDTixJQUFJLEtBQUt6QixlQUFlO01BQ3BCLEtBQUtBLGNBQWMwQix3QkFBdUI7TUFDMUMsS0FBSzFCLGdCQUFnQjtJQUN6QjtFQUNKO0FBQ0o7QUFTQSxJQUFNRyxzQkFBTixNQUEwQjtFQUN0QnpCLFlBQVluQixRQUFRO0lBQ2hCLEtBQUtBLFNBQVNBO0lBQ2QsS0FBS0MsVUFBVSxFQUFDO0lBQ2hCLEtBQUttRSxZQUFZcEU7RUFDckI7RUFTQStDLGVBQWVzQixTQUFTO0lBQ3BCLEtBQUtwRSxRQUFRUyxLQUFLMkQsT0FBTztJQUN6QixJQUFJLEtBQUtwRSxRQUFRTixXQUFXLEtBQUt5RSxVQUFVOUQsYUFBYTtNQUVwRCxNQUFNTixTQUFTYSxrQkFBa0IsS0FBS3VELFdBQVcsS0FBS25FLE9BQU87TUFDN0QsS0FBS2tFLHdCQUF1QjtNQUM1QixPQUFPbkU7SUFDWDtJQUNBLE9BQU87RUFDWDtFQUlBbUUseUJBQXlCO0lBQ3JCLEtBQUtDLFlBQVk7SUFDakIsS0FBS25FLFVBQVUsRUFBQztFQUNwQjtBQUNKIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWlsZWFybi9hcHAvb3V0In0=