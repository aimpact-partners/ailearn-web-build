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

// .beyond/uimport/engine.io-parser.5.1.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tcGFyc2VyLjUuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvYnVpbGQvZXNtL2NvbW1vbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZW5jb2RlUGFja2V0LmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vY29udHJpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZGVjb2RlUGFja2V0LmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWNvZGVQYWNrZXQiLCJkZWNvZGVQYWNrZXRGcm9tQmluYXJ5IiwiZGVjb2RlUGF5bG9hZCIsImVuY29kZVBhY2tldCIsImVuY29kZVBhY2tldFRvQmluYXJ5IiwiZW5jb2RlUGF5bG9hZCIsInByb3RvY29sIiwibW9kdWxlIiwiUEFDS0VUX1RZUEVTIiwiY3JlYXRlIiwiUEFDS0VUX1RZUEVTX1JFVkVSU0UiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIkVSUk9SX1BBQ0tFVCIsInR5cGUiLCJkYXRhIiwid2l0aE5hdGl2ZUJsb2IiLCJCbG9iIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJvYmoiLCJidWZmZXIiLCJzdXBwb3J0c0JpbmFyeSIsImNhbGxiYWNrIiwiZW5jb2RlQmxvYkFzQmFzZTY0IiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJjb250ZW50IiwicmVzdWx0Iiwic3BsaXQiLCJyZWFkQXNEYXRhVVJMIiwidG9BcnJheSIsIlVpbnQ4QXJyYXkiLCJieXRlT2Zmc2V0IiwiYnl0ZUxlbmd0aCIsIlRFWFRfRU5DT0RFUiIsInBhY2tldCIsImFycmF5QnVmZmVyIiwidGhlbiIsImVuY29kZWQiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsImNoYXJzIiwibG9va3VwIiwiaSIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJhcnJheWJ1ZmZlciIsImJ5dGVzIiwibGVuIiwiYmFzZTY0Iiwic3Vic3RyaW5nIiwiZGVjb2RlIiwiYnVmZmVyTGVuZ3RoIiwicCIsImVuY29kZWQxIiwiZW5jb2RlZDIiLCJlbmNvZGVkMyIsImVuY29kZWQ0IiwiZW5jb2RlZFBhY2tldCIsImJpbmFyeVR5cGUiLCJtYXBCaW5hcnkiLCJjaGFyQXQiLCJkZWNvZGVCYXNlNjRQYWNrZXQiLCJwYWNrZXRUeXBlIiwiZGVjb2RlZCIsIlNFUEFSQVRPUiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhY2tldHMiLCJlbmNvZGVkUGFja2V0cyIsIkFycmF5IiwiY291bnQiLCJqb2luIiwiZW5jb2RlZFBheWxvYWQiLCJkZWNvZGVkUGFja2V0IiwicHVzaCIsIlRFWFRfREVDT0RFUiIsImlzQmluYXJ5IiwiVGV4dERlY29kZXIiLCJpc1BsYWluQmluYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSxJQUFNQyxlQUFlLHNCQUFPQyxPQUFPLElBQUk7QUFDdkNELGFBQWEsVUFBVTtBQUN2QkEsYUFBYSxXQUFXO0FBQ3hCQSxhQUFhLFVBQVU7QUFDdkJBLGFBQWEsVUFBVTtBQUN2QkEsYUFBYSxhQUFhO0FBQzFCQSxhQUFhLGFBQWE7QUFDMUJBLGFBQWEsVUFBVTtBQUN2QixJQUFNRSx1QkFBdUIsc0JBQU9ELE9BQU8sSUFBSTtBQUMvQ0UsT0FBT0MsS0FBS0osWUFBWSxFQUFF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