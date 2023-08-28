System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.1.0"]]);
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

// .beyond/uimport/temp/engine.io-parser.5.1.0.js
var engine_io_parser_5_1_0_exports = {};
__export(engine_io_parser_5_1_0_exports, {
  decodePacket: () => decodePacket,
  decodePacketFromBinary: () => decodePacketFromBinary,
  decodePayload: () => decodePayload,
  encodePacket: () => encodePacket,
  encodePacketToBinary: () => encodePacketToBinary,
  encodePayload: () => encodePayload,
  protocol: () => protocol
});
module.exports = __toCommonJS(engine_io_parser_5_1_0_exports);

// node_modules/engine.io-parser/build/esm/commons.js
var PACKET_TYPES = /* @__PURE__ */Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = /* @__PURE__ */Object.create(null);
Object.keys(PACKET_TYPES).forEach(key => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = {
  type: "error",
  data: "parser error"
};

// node_modules/engine.io-parser/build/esm/encodePacket.browser.js
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = ({
  type,
  data
}, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
var encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function () {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
function toArray(data) {
  if (data instanceof Uint8Array) {
    return data;
  } else if (data instanceof ArrayBuffer) {
    return new Uint8Array(data);
  } else {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
}
var TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
  if (withNativeBlob && packet.data instanceof Blob) {
    return packet.data.arrayBuffer().then(toArray).then(callback);
  } else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
    return callback(toArray(packet.data));
  }
  encodePacket(packet, false, encoded => {
    if (!TEXT_ENCODER) {
      TEXT_ENCODER = new TextEncoder();
    }
    callback(TEXT_ENCODER.encode(encoded));
  });
}

// node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var encode = arraybuffer => {
  let bytes = new Uint8Array(arraybuffer),
    i,
    len = bytes.length,
    base64 = "";
  for (i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + "=";
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + "==";
  }
  return base64;
};
var decode = base64 => {
  let bufferLength = base64.length * 0.75,
    len = base64.length,
    i,
    p = 0,
    encoded1,
    encoded2,
    encoded3,
    encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

// node_modules/engine.io-parser/build/esm/decodePacket.browser.js
var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer2) {
    const decoded = decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data
    };
  }
};
var mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      if (data instanceof Blob) {
        return data;
      } else {
        return new Blob([data]);
      }
    case "arraybuffer":
    default:
      if (data instanceof ArrayBuffer) {
        return data;
      } else {
        return data.buffer;
      }
  }
};

// node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    encodePacket(packet, false, encodedPacket => {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
var TEXT_DECODER;
function decodePacketFromBinary(data, isBinary, binaryType) {
  if (!TEXT_DECODER) {
    TEXT_DECODER = new TextDecoder();
  }
  const isPlainBinary = isBinary || data[0] < 48 || data[0] > 54;
  return decodePacket(isPlainBinary ? data : TEXT_DECODER.decode(data), binaryType);
}
var protocol = 4;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2VuZ2luZS5pby1wYXJzZXIuNS4xLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vY29tbW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9lbmNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9jb250cmliL2Jhc2U2NC1hcnJheWJ1ZmZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9kZWNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlY29kZVBhY2tldCIsImRlY29kZVBhY2tldEZyb21CaW5hcnkiLCJkZWNvZGVQYXlsb2FkIiwiZW5jb2RlUGFja2V0IiwiZW5jb2RlUGFja2V0VG9CaW5hcnkiLCJlbmNvZGVQYXlsb2FkIiwicHJvdG9jb2wiLCJtb2R1bGUiLCJQQUNLRVRfVFlQRVMiLCJjcmVhdGUiLCJQQUNLRVRfVFlQRVNfUkVWRVJTRSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiRVJST1JfUEFDS0VUIiwidHlwZSIsImRhdGEiLCJ3aXRoTmF0aXZlQmxvYiIsIkJsb2IiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJ3aXRoTmF0aXZlQXJyYXlCdWZmZXIiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsIm9iaiIsImJ1ZmZlciIsInN1cHBvcnRzQmluYXJ5IiwiY2FsbGJhY2siLCJlbmNvZGVCbG9iQXNCYXNlNjQiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImNvbnRlbnQiLCJyZXN1bHQiLCJzcGxpdCIsInJlYWRBc0RhdGFVUkwiLCJ0b0FycmF5IiwiVWludDhBcnJheSIsImJ5dGVPZmZzZXQiLCJieXRlTGVuZ3RoIiwiVEVYVF9FTkNPREVSIiwicGFja2V0IiwiYXJyYXlCdWZmZXIiLCJ0aGVuIiwiZW5jb2RlZCIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwiY2hhcnMiLCJsb29rdXAiLCJpIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsImFycmF5YnVmZmVyIiwiYnl0ZXMiLCJsZW4iLCJiYXNlNjQiLCJzdWJzdHJpbmciLCJkZWNvZGUiLCJidWZmZXJMZW5ndGgiLCJwIiwiZW5jb2RlZDEiLCJlbmNvZGVkMiIsImVuY29kZWQzIiwiZW5jb2RlZDQiLCJlbmNvZGVkUGFja2V0IiwiYmluYXJ5VHlwZSIsIm1hcEJpbmFyeSIsImNoYXJBdCIsImRlY29kZUJhc2U2NFBhY2tldCIsInBhY2tldFR5cGUiLCJkZWNvZGVkIiwiU0VQQVJBVE9SIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFja2V0cyIsImVuY29kZWRQYWNrZXRzIiwiQXJyYXkiLCJjb3VudCIsImpvaW4iLCJlbmNvZGVkUGF5bG9hZCIsImRlY29kZWRQYWNrZXQiLCJwdXNoIiwiVEVYVF9ERUNPREVSIiwiaXNCaW5hcnkiLCJUZXh0RGVjb2RlciIsImlzUGxhaW5CaW5hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FBLElBQU1DLGVBQWUsc0JBQU9DLE9BQU8sSUFBSTtBQUN2Q0QsYUFBYSxVQUFVO0FBQ3ZCQSxhQUFhLFdBQVc7QUFDeEJBLGFBQWEsVUFBVTtBQUN2QkEsYUFBYSxVQUFVO0FBQ3ZCQSxhQUFhLGFBQWE7QUFDMUJBLGFBQWEsYUFBYTtBQUMxQkEsYUFBYSxVQUFVO0FBQ3ZCLElBQU1FLHVCQUF1QixzQkFBT0QsT0FBTyxJQUFJO0FBQy9DRSxPQUFPQyxLQUFLSixZQUFZ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