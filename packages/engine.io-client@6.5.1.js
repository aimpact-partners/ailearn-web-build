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

// .beyond/uimport/engine.io-client.6.5.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tY2xpZW50LjYuNS4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2dsb2JhbFRoaXMuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS91dGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2Vxcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi95ZWFzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2hhcy1jb3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMveG1saHR0cHJlcXVlc3QuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3BvbGxpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy93ZWJzb2NrZXQtY29uc3RydWN0b3IuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnRyYW5zcG9ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2V1cmkuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vc29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiU29ja2V0IiwiVHJhbnNwb3J0IiwiaW5zdGFsbFRpbWVyRnVuY3Rpb25zIiwibmV4dFRpY2siLCJwYXJzZSIsInByb3RvY29sIiwidHJhbnNwb3J0cyIsIm1vZHVsZSIsImdsb2JhbFRoaXNTaGltIiwic2VsZiIsIndpbmRvdyIsIkZ1bmN0aW9uIiwicGljayIsIm9iaiIsImF0dHIiLCJyZWR1Y2UiLCJhY2MiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJOQVRJVkVfU0VUX1RJTUVPVVQiLCJzZXRUaW1lb3V0IiwiTkFUSVZFX0NMRUFSX1RJTUVPVVQiLCJjbGVhclRpbWVvdXQiLCJvcHRzIiwidXNlTmF0aXZlVGltZXJzIiwic2V0VGltZW91dEZuIiwiYmluZCIsImNsZWFyVGltZW91dEZuIiwiQkFTRTY0X09WRVJIRUFEIiwiYnl0ZUxlbmd0aCIsInV0ZjhMZW5ndGgiLCJNYXRoIiwiY2VpbCIsInNpemUiLCJzdHIiLCJjIiwibGVuZ3RoIiwiaSIsImwiLCJjaGFyQ29kZUF0IiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGVjb2RlIiwicXMiLCJxcnkiLCJwYWlycyIsInNwbGl0IiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlcXVpcmUiLCJUcmFuc3BvcnRFcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJyZWFzb24iLCJkZXNjcmlwdGlvbiIsImNvbnRleHQiLCJ0eXBlIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwid3JpdGFibGUiLCJxdWVyeSIsInNvY2tldCIsIm9uRXJyb3IiLCJlbWl0UmVzZXJ2ZWQiLCJvcGVuIiwicmVhZHlTdGF0ZSIsImRvT3BlbiIsImNsb3NlIiwiZG9DbG9zZSIsIm9uQ2xvc2UiLCJzZW5kIiwicGFja2V0cyIsIndyaXRlIiwib25PcGVuIiwib25EYXRhIiwiZGF0YSIsInBhY2tldCIsImltcG9ydF9lbmdpbmUiLCJiaW5hcnlUeXBlIiwib25QYWNrZXQiLCJkZXRhaWxzIiwicGF1c2UiLCJvblBhdXNlIiwiY3JlYXRlVXJpIiwic2NoZW1hIiwiX2hvc3RuYW1lIiwiX3BvcnQiLCJwYXRoIiwiX3F1ZXJ5IiwiaG9zdG5hbWUiLCJpbmRleE9mIiwicG9ydCIsInNlY3VyZSIsIk51bWJlciIsImVuY29kZWRRdWVyeSIsImFscGhhYmV0IiwibWFwIiwic2VlZCIsInByZXYiLCJudW0iLCJlbmNvZGVkIiwiZmxvb3IiLCJkZWNvZGVkIiwiY2hhckF0IiwieWVhc3QiLCJub3ciLCJEYXRlIiwidmFsdWUiLCJYTUxIdHRwUmVxdWVzdCIsImVyciIsImhhc0NPUlMiLCJYSFIiLCJ4ZG9tYWluIiwiZSIsImNvbmNhdCIsImpvaW4iLCJjcmVhdGVDb29raWVKYXIiLCJlbXB0eSIsImhhc1hIUjIiLCJ4aHIiLCJyZXNwb25zZVR5cGUiLCJQb2xsaW5nIiwicG9sbGluZyIsImxvY2F0aW9uIiwiaXNTU0wiLCJ4ZCIsImZvcmNlQmFzZTY0Iiwic3VwcG9ydHNCaW5hcnkiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb29raWVKYXIiLCJuYW1lIiwicG9sbCIsInRvdGFsIiwib25jZSIsImRvUG9sbCIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImRvV3JpdGUiLCJ1cmkiLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsInRpbWVzdGFtcFBhcmFtIiwic2lkIiwiYjY0IiwicmVxdWVzdCIsIk9iamVjdCIsImFzc2lnbiIsIlJlcXVlc3QiLCJmbiIsInJlcSIsIm1ldGhvZCIsIm9uIiwieGhyU3RhdHVzIiwicG9sbFhociIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlcjIiLCJjcmVhdGUiLCJfYSIsImV4dHJhSGVhZGVycyIsInNldERpc2FibGVIZWFkZXJDaGVjayIsInNldFJlcXVlc3RIZWFkZXIiLCJhZGRDb29raWVzIiwicmVxdWVzdFRpbWVvdXQiLCJ0aW1lb3V0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicGFyc2VDb29raWVzIiwic3RhdHVzIiwib25Mb2FkIiwiZG9jdW1lbnQiLCJpbmRleCIsInJlcXVlc3RzQ291bnQiLCJyZXF1ZXN0cyIsImNsZWFudXAiLCJmcm9tRXJyb3IiLCJhYm9ydCIsInJlc3BvbnNlVGV4dCIsImF0dGFjaEV2ZW50IiwidW5sb2FkSGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXJtaW5hdGlvbkV2ZW50IiwiaXNQcm9taXNlQXZhaWxhYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYiIsInRoZW4iLCJXZWJTb2NrZXQiLCJNb3pXZWJTb2NrZXQiLCJ1c2luZ0Jyb3dzZXJXZWJTb2NrZXQiLCJkZWZhdWx0QmluYXJ5VHlwZSIsImlzUmVhY3ROYXRpdmUiLCJuYXZpZ2F0b3IiLCJwcm9kdWN0IiwidG9Mb3dlckNhc2UiLCJXUyIsImNoZWNrIiwicHJvdG9jb2xzIiwiaGVhZGVycyIsIndzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbm9wZW4iLCJhdXRvVW5yZWYiLCJfc29ja2V0IiwidW5yZWYiLCJvbmNsb3NlIiwiY2xvc2VFdmVudCIsIm9ubWVzc2FnZSIsImV2Iiwib25lcnJvciIsImxhc3RQYWNrZXQiLCJvcHRpb25zIiwiY29tcHJlc3MiLCJwZXJNZXNzYWdlRGVmbGF0ZSIsImxlbiIsIkJ1ZmZlciIsInRocmVzaG9sZCIsInNob3VsZEluY2x1ZGVCaW5hcnlIZWFkZXIiLCJXVCIsIldlYlRyYW5zcG9ydCIsInRyYW5zcG9ydCIsInRyYW5zcG9ydE9wdGlvbnMiLCJjbG9zZWQiLCJjYXRjaCIsInJlYWR5IiwiY3JlYXRlQmlkaXJlY3Rpb25hbFN0cmVhbSIsInN0cmVhbSIsInJlYWRlciIsInJlYWRhYmxlIiwiZ2V0UmVhZGVyIiwid3JpdGVyIiwiZ2V0V3JpdGVyIiwiYmluYXJ5RmxhZyIsInJlYWQiLCJkb25lIiwiaW1wb3J0X2VuZ2luZTQiLCJoYW5kc2hha2UiLCJUZXh0RW5jb2RlciIsIlVpbnQ4QXJyYXkiLCJvZiIsIndlYnNvY2tldCIsIndlYnRyYW5zcG9ydCIsInJlIiwicGFydHMiLCJzcmMiLCJiIiwic3Vic3RyaW5nIiwicmVwbGFjZSIsIm0iLCJleGVjIiwic291cmNlIiwiaG9zdCIsImF1dGhvcml0eSIsImlwdjZ1cmkiLCJwYXRoTmFtZXMiLCJxdWVyeUtleSIsInJlZ3giLCJuYW1lcyIsInNsaWNlIiwic3BsaWNlIiwiJDAiLCIkMSIsIiQyIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMyIsIndyaXRlQnVmZmVyIiwicHJldkJ1ZmZlckxlbiIsImFnZW50IiwidXBncmFkZSIsInJlbWVtYmVyVXBncmFkZSIsImFkZFRyYWlsaW5nU2xhc2giLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJjbG9zZU9uQmVmb3JldW5sb2FkIiwiaWQiLCJ1cGdyYWRlcyIsInBpbmdJbnRlcnZhbCIsInBpbmdUaW1lb3V0IiwicGluZ1RpbWVvdXRUaW1lciIsImJlZm9yZXVubG9hZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJvZmZsaW5lRXZlbnRMaXN0ZW5lciIsImNyZWF0ZVRyYW5zcG9ydCIsIkVJTyIsImltcG9ydF9lbmdpbmU1IiwicHJpb3JXZWJzb2NrZXRTdWNjZXNzIiwic2hpZnQiLCJzZXRUcmFuc3BvcnQiLCJvbkRyYWluIiwicHJvYmUiLCJmYWlsZWQiLCJvblRyYW5zcG9ydE9wZW4iLCJtc2ciLCJ1cGdyYWRpbmciLCJmbHVzaCIsImZyZWV6ZVRyYW5zcG9ydCIsImVycm9yIiwib25UcmFuc3BvcnRDbG9zZSIsIm9udXBncmFkZSIsInRvIiwicmVtb3ZlTGlzdGVuZXIiLCJvZmYiLCJvbkhhbmRzaGFrZSIsIkpTT04iLCJyZXNldFBpbmdUaW1lb3V0Iiwic2VuZFBhY2tldCIsImNvZGUiLCJmaWx0ZXJVcGdyYWRlcyIsIm1heFBheWxvYWQiLCJnZXRXcml0YWJsZVBhY2tldHMiLCJzaG91bGRDaGVja1BheWxvYWRTaXplIiwicGF5bG9hZFNpemUiLCJwdXNoIiwiY2xlYW51cEFuZENsb3NlIiwid2FpdEZvclVwZ3JhZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyZWRVcGdyYWRlcyIsImoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FPLElBQU1DLGtCQUFrQixNQUFNO0VBQ2pDLElBQUksT0FBT0MsU0FBUyxhQUFhO0lBQzdCLE9BQU9BO0VBQ1gsV0FDUyxPQUFPQyxXQUFXLGFBQWE7SUFDcEMsT0FBT0E7RUFDWCxPQUNLO0lBQ0QsT0FBT0MsU0FBUyxhQUFhLEdBQUU7RUFDbkM7QUFDSixJQUFHOzs7QUNUSSxTQUFTQyxLQUFLQyxRQUFRQyxNQUFNO0VBQy9CLE9BQU9BLEtBQUtDLE9BQU8sQ0FBQ0MsS0FBS0MsTUFBTTtJQUMzQixJQUFJSixJQUFJSyxlQUFlRCxDQUFDLEdBQUc7TUFDdkJELElBQUlDLEtBQUtKLElBQUlJO0lBQ2pCO0lBQ0EsT0FBT0Q7RUFDWCxHQUFHLENBQUMsQ0FBQztBQUNUO0FBRUEsSUFBTUcscUJBQXFCWCxlQUFXWTtBQUN0QyxJQUFNQyx1QkFBdUJiLGVBQVdjO0FBQ2pDLFNBQVNwQixzQkFBc0JXLEtBQUtVLE1BQU07RUFDN0MsSUFBSUEsS0FBS0MsaUJBQWlCO0lBQ3RCWCxJQUFJWSxlQUFlTixtQkFBbUJPLEtBQUtsQixjQUFVO0lBQ3JESyxJQUFJYyxpQkFBaUJOLHFCQUFxQkssS0FBS2xCLGNBQVU7RUFDN0QsT0FDSztJQUNESyxJQUFJWSxlQUFlakIsZUFBV1ksV0FBV00sS0FBS2xCLGNBQVU7SUFDeERLLElBQUljLGlCQUFpQm5CLGVBQVdjLGFBQWFJLEtBQUtsQixjQUFVO0VBQ2hFO0FBQ0o7QUFFQSxJQUFNb0Isa0JBQWtCO0FBRWpCLFNB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