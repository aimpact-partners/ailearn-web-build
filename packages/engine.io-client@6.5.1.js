System.register(["engine.io-parser@5.1.0","@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.1.0"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.5.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.1.0', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
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

// .beyond/uimport/temp/engine.io-client.6.5.1.js
var engine_io_client_6_5_1_exports = {};
__export(engine_io_client_6_5_1_exports, {
  Socket: () => Socket,
  Transport: () => Transport,
  installTimerFunctions: () => installTimerFunctions,
  nextTick: () => nextTick,
  parse: () => parse,
  protocol: () => protocol2,
  transports: () => transports
});
module.exports = __toCommonJS(engine_io_client_6_5_1_exports);

// node_modules/engine.io-client/build/esm/globalThis.browser.js
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

// node_modules/engine.io-client/build/esm/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0,
    length2 = 0;
  for (let i2 = 0, l = str.length; i2 < l; i2++) {
    c = str.charCodeAt(i2);
    if (c < 128) {
      length2 += 1;
    } else if (c < 2048) {
      length2 += 2;
    } else if (c < 55296 || c >= 57344) {
      length2 += 3;
    } else {
      i2++;
      length2 += 4;
    }
  }
  return length2;
}

// node_modules/engine.io-client/build/esm/contrib/parseqs.js
function encode(obj) {
  let str = "";
  for (let i2 in obj) {
    if (obj.hasOwnProperty(i2)) {
      if (str.length) str += "&";
      str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
    }
  }
  return str;
}
function decode(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i2 = 0, l = pairs.length; i2 < l; i2++) {
    let pair = pairs[i2].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// node_modules/engine.io-client/build/esm/transport.js
var import_engine = require("engine.io-parser@5.1.0");
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends import_component_emitter.Emitter {
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
  }
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {}
  }
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  onData(data) {
    const packet = (0, import_engine.decodePacket)(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  pause(onPause) {}
  createUri(schema, query = {}) {
    return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
  }
  _hostname() {
    const hostname = this.opts.hostname;
    return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
  }
  _port() {
    if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
      return ":" + this.opts.port;
    } else {
      return "";
    }
  }
  _query(query) {
    const encodedQuery = encode(query);
    return encodedQuery.length ? "?" + encodedQuery : "";
  }
};

// node_modules/engine.io-client/build/esm/contrib/yeast.js
var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
  length = 64,
  map = {};
var seed = 0,
  i = 0,
  prev;
function encode2(num) {
  let encoded = "";
  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);
  return encoded;
}
function decode2(str) {
  let decoded = 0;
  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }
  return decoded;
}
function yeast() {
  const now = encode2(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + "." + encode2(seed++);
}
for (; i < length; i++) map[alphabet[i]] = i;

// node_modules/engine.io-client/build/esm/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {}
var hasCORS = value;

// node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js
function XHR(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}
function createCookieJar() {}

// node_modules/engine.io-client/build/esm/transports/polling.js
var import_engine2 = require("engine.io-parser@5.1.0");
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");
function empty() {}
var hasXHR2 = function () {
  const xhr = new XHR({
    xdomain: false
  });
  return null != xhr.responseType;
}();
var Polling = class extends Transport {
  constructor(opts) {
    super(opts);
    this.polling = false;
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
    if (this.opts.withCredentials) {
      this.cookieJar = createCookieJar();
    }
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function () {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function () {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  onData(data) {
    const callback = packet => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({
          description: "transport closed by the server"
        });
        return false;
      }
      this.onPacket(packet);
    };
    (0, import_engine2.decodePayload)(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this.polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this.poll();
      } else {}
    }
  }
  doClose() {
    const close = () => {
      this.write([{
        type: "close"
      }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  write(packets) {
    this.writable = false;
    (0, import_engine2.encodePayload)(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  uri() {
    const schema = this.opts.secure ? "https" : "http";
    const query = this.query || {};
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
  request(opts = {}) {
    Object.assign(opts, {
      xd: this.xd,
      cookieJar: this.cookieJar
    }, this.opts);
    return new Request(this.uri(), opts);
  }
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.data = void 0 !== opts.data ? opts.data : null;
    this.create();
  }
  create() {
    var _a;
    const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    const xhr = this.xhr = new XHR(opts);
    try {
      xhr.open(this.method, this.uri, true);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i2 in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i2)) {
              xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
            }
          }
        }
      } catch (e) {}
      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {}
      (_a = this.opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a2;
        if (xhr.readyState === 3) {
          (_a2 = this.opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(xhr);
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    this.xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  }
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  abort() {
    this.cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i2 in Request.requests) {
    if (Request.requests.hasOwnProperty(i2)) {
      Request.requests[i2].abort();
    }
  }
}

// node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js
var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return cb => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
var WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var usingBrowserWebSocket = true;
var defaultBinaryType = "arraybuffer";

// node_modules/engine.io-client/build/esm/transports/websocket.js
var import_engine3 = require("engine.io-parser@5.1.0");
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var WS = class extends Transport {
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) {
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
    this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = closeEvent => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = ev => this.onData(ev.data);
    this.ws.onerror = e => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      (0, import_engine3.encodePacket)(packet, this.supportsBinary, data => {
        const opts = {};
        if (!usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }
          if (this.opts.perMessageDeflate) {
            const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }
        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {}
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  uri() {
    const schema = this.opts.secure ? "wss" : "ws";
    const query = this.query || {};
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
  check() {
    return !!WebSocket;
  }
};

// node_modules/engine.io-client/build/esm/transports/webtransport.js
var import_engine4 = require("engine.io-parser@5.1.0");
function shouldIncludeBinaryHeader(packet, encoded) {
  return packet.type === "message" && typeof packet.data !== "string" && encoded[0] >= 48 && encoded[0] <= 54;
}
var WT = class extends Transport {
  get name() {
    return "webtransport";
  }
  doOpen() {
    if (typeof WebTransport !== "function") {
      return;
    }
    this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    this.transport.closed.then(() => {
      this.onClose();
    }).catch(err => {
      this.onError("webtransport error", err);
    });
    this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then(stream => {
        const reader = stream.readable.getReader();
        this.writer = stream.writable.getWriter();
        let binaryFlag;
        const read = () => {
          reader.read().then(({
            done,
            value: value2
          }) => {
            if (done) {
              return;
            }
            if (!binaryFlag && value2.byteLength === 1 && value2[0] === 54) {
              binaryFlag = true;
            } else {
              this.onPacket((0, import_engine4.decodePacketFromBinary)(value2, binaryFlag, "arraybuffer"));
              binaryFlag = false;
            }
            read();
          }).catch(err => {});
        };
        read();
        const handshake = this.query.sid ? `0{"sid":"${this.query.sid}"}` : "0";
        this.writer.write(new TextEncoder().encode(handshake)).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      (0, import_engine4.encodePacketToBinary)(packet, data => {
        if (shouldIncludeBinaryHeader(packet, data)) {
          this.writer.write(Uint8Array.of(54));
        }
        this.writer.write(data).then(() => {
          if (lastPacket) {
            nextTick(() => {
              this.writable = true;
              this.emitReserved("drain");
            }, this.setTimeoutFn);
          }
        });
      });
    }
  }
  doClose() {
    var _a;
    (_a = this.transport) === null || _a === void 0 ? void 0 : _a.close();
  }
};

// node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  webtransport: WT,
  polling: Polling
};

// node_modules/engine.io-client/build/esm/contrib/parseuri.js
var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function parse(str) {
  const src = str,
    b = str.indexOf("["),
    e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""),
    uri = {},
    i2 = 14;
  while (i2--) {
    uri[parts[i2]] = m[i2] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g,
    names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// node_modules/engine.io-client/build/esm/socket.js
var import_component_emitter3 = require("@socket.io/component-emitter@3.1.0");
var import_engine5 = require("engine.io-parser@5.1.0");
var Socket = class extends import_component_emitter3.Emitter {
  constructor(uri, opts = {}) {
    super();
    this.writeBuffer = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = parse(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket", "webtransport"];
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = import_engine5.protocol;
    query.transport = name;
    if (this.id) query.sid = this.id;
    const opts = Object.assign({}, this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[name]);
    return new transports[name](opts);
  }
  open() {
    let transport;
    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", reason => this.onClose("transport close", reason));
  }
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed) return;
      transport.send([{
        type: "ping",
        data: "probe"
      }]);
      transport.once("packet", msg => {
        if (failed) return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed) return;
            if ("closed" === this.readyState) return;
            cleanup();
            this.setTransport(transport);
            transport.send([{
              type: "upgrade"
            }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed) return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = err => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    if (this.upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
      this.setTimeoutFn(() => {
        if (!failed) {
          transport.open();
        }
      }, 200);
    } else {
      transport.open();
    }
  }
  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
    if ("open" === this.readyState && this.opts.upgrade) {
      let i2 = 0;
      const l = this.upgrades.length;
      for (; i2 < l; i2++) {
        this.probe(this.upgrades[i2]);
      }
    }
  }
  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {}
  }
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState) return;
    this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets);
      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
      const data = this.writeBuffer[i2].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i2 > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i2);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i2 = 0;
    const j = upgrades.length;
    for (; i2 < j; i2++) {
      if (~this.transports.indexOf(upgrades[i2])) filteredUpgrades.push(upgrades[i2]);
    }
    return filteredUpgrades;
  }
};
Socket.protocol = import_engine5.protocol;

// node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2VuZ2luZS5pby1jbGllbnQuNi41LjEuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vZ2xvYmFsVGhpcy5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3V0aWwuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9wYXJzZXFzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL3llYXN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvaGFzLWNvcnMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy94bWxodHRwcmVxdWVzdC5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnNvY2tldC1jb25zdHJ1Y3Rvci5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvd2Vic29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvd2VidHJhbnNwb3J0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9wYXJzZXVyaS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9zb2NrZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJTb2NrZXQiLCJUcmFuc3BvcnQiLCJpbnN0YWxsVGltZXJGdW5jdGlvbnMiLCJuZXh0VGljayIsInBhcnNlIiwicHJvdG9jb2wiLCJ0cmFuc3BvcnRzIiwibW9kdWxlIiwiZ2xvYmFsVGhpc1NoaW0iLCJzZWxmIiwid2luZG93IiwiRnVuY3Rpb24iLCJwaWNrIiwib2JqIiwiYXR0ciIsInJlZHVjZSIsImFjYyIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsIk5BVElWRV9TRVRfVElNRU9VVCIsInNldFRpbWVvdXQiLCJOQVRJVkVfQ0xFQVJfVElNRU9VVCIsImNsZWFyVGltZW91dCIsIm9wdHMiLCJ1c2VOYXRpdmVUaW1lcnMiLCJzZXRUaW1lb3V0Rm4iLCJiaW5kIiwiY2xlYXJUaW1lb3V0Rm4iLCJCQVNFNjRfT1ZFUkhFQUQiLCJieXRlTGVuZ3RoIiwidXRmOExlbmd0aCIsIk1hdGgiLCJjZWlsIiwic2l6ZSIsInN0ciIsImMiLCJsZW5ndGgiLCJpIiwibCIsImNoYXJDb2RlQXQiLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWNvZGUiLCJxcyIsInFyeSIsInBhaXJzIiwic3BsaXQiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVxdWlyZSIsIlRyYW5zcG9ydEVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsImRlc2NyaXB0aW9uIiwiY29udGV4dCIsInR5cGUiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJ3cml0YWJsZSIsInF1ZXJ5Iiwic29ja2V0Iiwib25FcnJvciIsImVtaXRSZXNlcnZlZCIsIm9wZW4iLCJyZWFkeVN0YXRlIiwiZG9PcGVuIiwiY2xvc2UiLCJkb0Nsb3NlIiwib25DbG9zZSIsInNlbmQiLCJwYWNrZXRzIiwid3JpdGUiLCJvbk9wZW4iLCJvbkRhdGEiLCJkYXRhIiwicGFja2V0IiwiaW1wb3J0X2VuZ2luZSIsImJpbmFyeVR5cGUiLCJvblBhY2tldCIsImRldGFpbHMiLCJwYXVzZSIsIm9uUGF1c2UiLCJjcmVhdGVVcmkiLCJzY2hlbWEiLCJfaG9zdG5hbWUiLCJfcG9ydCIsInBhdGgiLCJfcXVlcnkiLCJob3N0bmFtZSIsImluZGV4T2YiLCJwb3J0Iiwic2VjdXJlIiwiTnVtYmVyIiwiZW5jb2RlZFF1ZXJ5IiwiYWxwaGFiZXQiLCJtYXAiLCJzZWVkIiwicHJldiIsIm51bSIsImVuY29kZWQiLCJmbG9vciIsImRlY29kZWQiLCJjaGFyQXQiLCJ5ZWFzdCIsIm5vdyIsIkRhdGUiLCJ2YWx1ZSIsIlhNTEh0dHBSZXF1ZXN0IiwiZXJyIiwiaGFzQ09SUyIsIlhIUiIsInhkb21haW4iLCJlIiwiY29uY2F0Iiwiam9pbiIsImNyZWF0ZUNvb2tpZUphciIsImVtcHR5IiwiaGFzWEhSMiIsInhociIsInJlc3BvbnNlVHlwZSIsIlBvbGxpbmciLCJwb2xsaW5nIiwibG9jYXRpb24iLCJpc1NTTCIsInhkIiwiZm9yY2VCYXNlNjQiLCJzdXBwb3J0c0JpbmFyeSIsIndpdGhDcmVkZW50aWFscyIsImNvb2tpZUphciIsIm5hbWUiLCJwb2xsIiwidG90YWwiLCJvbmNlIiwiZG9Qb2xsIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZG9Xcml0ZSIsInVyaSIsInRpbWVzdGFtcFJlcXVlc3RzIiwidGltZXN0YW1wUGFyYW0iLCJzaWQiLCJiNjQiLCJyZXF1ZXN0IiwiT2JqZWN0IiwiYXNzaWduIiwiUmVxdWVzdCIsImZuIiwicmVxIiwibWV0aG9kIiwib24iLCJ4aHJTdGF0dXMiLCJwb2xsWGhyIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMiIsImNyZWF0ZSIsIl9hIiwiZXh0cmFIZWFkZXJzIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsImFkZENvb2tpZXMiLCJyZXF1ZXN0VGltZW91dCIsInRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJwYXJzZUNvb2tpZXMiLCJzdGF0dXMiLCJvbkxvYWQiLCJkb2N1bWVudCIsImluZGV4IiwicmVxdWVzdHNDb3VudCIsInJlcXVlc3RzIiwiY2xlYW51cCIsImZyb21FcnJvciIsImFib3J0IiwicmVzcG9uc2VUZXh0IiwiYXR0YWNoRXZlbnQiLCJ1bmxvYWRIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlcm1pbmF0aW9uRXZlbnQiLCJpc1Byb21pc2VBdmFpbGFibGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNiIiwidGhlbiIsIldlYlNvY2tldCIsIk1veldlYlNvY2tldCIsInVzaW5nQnJvd3NlcldlYlNvY2tldCIsImRlZmF1bHRCaW5hcnlUeXBlIiwiaXNSZWFjdE5hdGl2ZSIsIm5hdmlnYXRvciIsInByb2R1Y3QiLCJ0b0xvd2VyQ2FzZSIsIldTIiwiY2hlY2siLCJwcm90b2NvbHMiLCJoZWFkZXJzIiwid3MiLCJhZGRFdmVudExpc3RlbmVycyIsIm9ub3BlbiIsImF1dG9VbnJlZiIsIl9zb2NrZXQiLCJ1bnJlZiIsIm9uY2xvc2UiLCJjbG9zZUV2ZW50Iiwib25tZXNzYWdlIiwiZXYiLCJvbmVycm9yIiwibGFzdFBhY2tldCIsIm9wdGlvbnMiLCJjb21wcmVzcyIsInBlck1lc3NhZ2VEZWZsYXRlIiwibGVuIiwiQnVmZmVyIiwidGhyZXNob2xkIiwic2hvdWxkSW5jbHVkZUJpbmFyeUhlYWRlciIsIldUIiwiV2ViVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwidHJhbnNwb3J0T3B0aW9ucyIsImNsb3NlZCIsImNhdGNoIiwicmVhZHkiLCJjcmVhdGVCaWRpcmVjdGlvbmFsU3RyZWFtIiwic3RyZWFtIiwicmVhZGVyIiwicmVhZGFibGUiLCJnZXRSZWFkZXIiLCJ3cml0ZXIiLCJnZXRXcml0ZXIiLCJiaW5hcnlGbGFnIiwicmVhZCIsImRvbmUiLCJpbXBvcnRfZW5naW5lNCIsImhhbmRzaGFrZSIsIlRleHRFbmNvZGVyIiwiVWludDhBcnJheSIsIm9mIiwid2Vic29ja2V0Iiwid2VidHJhbnNwb3J0IiwicmUiLCJwYXJ0cyIsInNyYyIsImIiLCJzdWJzdHJpbmciLCJyZXBsYWNlIiwibSIsImV4ZWMiLCJzb3VyY2UiLCJob3N0IiwiYXV0aG9yaXR5IiwiaXB2NnVyaSIsInBhdGhOYW1lcyIsInF1ZXJ5S2V5IiwicmVneCIsIm5hbWVzIiwic2xpY2UiLCJzcGxpY2UiLCIkMCIsIiQxIiwiJDIiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIzIiwid3JpdGVCdWZmZXIiLCJwcmV2QnVmZmVyTGVuIiwiYWdlbnQiLCJ1cGdyYWRlIiwicmVtZW1iZXJVcGdyYWRlIiwiYWRkVHJhaWxpbmdTbGFzaCIsInJlamVjdFVuYXV0aG9yaXplZCIsImNsb3NlT25CZWZvcmV1bmxvYWQiLCJpZCIsInVwZ3JhZGVzIiwicGluZ0ludGVydmFsIiwicGluZ1RpbWVvdXQiLCJwaW5nVGltZW91dFRpbWVyIiwiYmVmb3JldW5sb2FkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsIm9mZmxpbmVFdmVudExpc3RlbmVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiRUlPIiwiaW1wb3J0X2VuZ2luZTUiLCJwcmlvcldlYnNvY2tldFN1Y2Nlc3MiLCJzaGlmdCIsInNldFRyYW5zcG9ydCIsIm9uRHJhaW4iLCJwcm9iZSIsImZhaWxlZCIsIm9uVHJhbnNwb3J0T3BlbiIsIm1zZyIsInVwZ3JhZGluZyIsImZsdXNoIiwiZnJlZXplVHJhbnNwb3J0IiwiZXJyb3IiLCJvblRyYW5zcG9ydENsb3NlIiwib251cGdyYWRlIiwidG8iLCJyZW1vdmVMaXN0ZW5lciIsIm9mZiIsIm9uSGFuZHNoYWtlIiwiSlNPTiIsInJlc2V0UGluZ1RpbWVvdXQiLCJzZW5kUGFja2V0IiwiY29kZSIsImZpbHRlclVwZ3JhZGVzIiwibWF4UGF5bG9hZCIsImdldFdyaXRhYmxlUGFja2V0cyIsInNob3VsZENoZWNrUGF5bG9hZFNpemUiLCJwYXlsb2FkU2l6ZSIsInB1c2giLCJjbGVhbnVwQW5kQ2xvc2UiLCJ3YWl0Rm9yVXBncmFkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmaWx0ZXJlZFVwZ3JhZGVzIiwiaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQU8sSUFBTUMsa0JBQWtCLE1BQU07RUFDakMsSUFBSSxPQUFPQyxTQUFTLGFBQWE7SUFDN0IsT0FBT0E7RUFDWCxXQUNTLE9BQU9DLFdBQVcsYUFBYTtJQUNwQyxPQUFPQTtFQUNYLE9BQ0s7SUFDRCxPQUFPQyxTQUFTLGFBQWEsR0FBRTtFQUNuQztBQUNKLElBQUc7OztBQ1RJLFNBQVNDLEtBQUtDLFFBQVFDLE1BQU07RUFDL0IsT0FBT0EsS0FBS0MsT0FBTyxDQUFDQyxLQUFLQyxNQUFNO0lBQzNCLElBQUlKLElBQUlLLGVBQWVELENBQUMsR0FBRztNQUN2QkQsSUFBSUMsS0FBS0osSUFBSUk7SUFDakI7SUFDQSxPQUFPRDtFQUNYLEdBQUcsQ0FBQyxDQUFDO0FBQ1Q7QUFFQSxJQUFNRyxxQkFBcUJYLGVBQVdZO0FBQ3RDLElBQU1DLHVCQUF1QmIsZUFBV2M7QUFDakMsU0FBU3BCLHNCQUFzQlcsS0FBS1UsTUFBTTtFQUM3QyxJQUFJQSxLQUFLQyxpQkFBaUI7SUFDdEJYLElBQUlZLGVBQWVOLG1CQUFtQk8sS0FBS2xCLGNBQVU7SUFDckRLLElBQUljLGlCQUFpQk4scUJBQXFCSyxLQUFLbEIsY0FBVTtFQUM3RCxPQUNLO0lBQ0RLLElBQUlZLGVBQWVqQixlQUFXWSxXQUFXTSxLQUFLbEIsY0FBVTtJQUN4REssSUFBSWMsaUJBQWlCbkIsZUFBV2MsYUFBYUksS0FBS2xCLGNBQVU7RUFDaEU7QUFDSjtBQUVBLElBQU1vQixrQkFBa0I7QUFF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