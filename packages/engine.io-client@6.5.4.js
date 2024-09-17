System.register(["engine.io-parser@5.2.3","@socket.io/component-emitter@3.1.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.2.3"],["@socket.io/component-emitter","3.1.2"],["engine.io-client","6.5.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.2.3', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.2', dep)],
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

// .beyond/uimport/engine.io-client.6.5.4.js
var engine_io_client_6_5_4_exports = {};
__export(engine_io_client_6_5_4_exports, {
  Socket: () => Socket,
  Transport: () => Transport,
  TransportError: () => TransportError,
  installTimerFunctions: () => installTimerFunctions,
  nextTick: () => nextTick,
  parse: () => parse,
  protocol: () => protocol2,
  transports: () => transports
});
module.exports = __toCommonJS(engine_io_client_6_5_4_exports);

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
var import_engine = require("engine.io-parser@5.2.3");
var import_component_emitter = require("@socket.io/component-emitter@3.1.2");
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
var import_engine2 = require("engine.io-parser@5.2.3");
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.2");
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
var import_engine3 = require("engine.io-parser@5.2.3");
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
    this.ws.binaryType = this.socket.binaryType;
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
var import_engine4 = require("engine.io-parser@5.2.3");
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
        const decoderStream = (0, import_engine4.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
        const reader = stream.readable.pipeThrough(decoderStream).getReader();
        const encoderStream = (0, import_engine4.createPacketEncoderStream)();
        encoderStream.readable.pipeTo(stream.writable);
        this.writer = encoderStream.writable.getWriter();
        const read = () => {
          reader.read().then(({
            done,
            value: value2
          }) => {
            if (done) {
              return;
            }
            this.onPacket(value2);
            read();
          }).catch(err => {});
        };
        read();
        const packet = {
          type: "open"
        };
        if (this.query.sid) {
          packet.data = `{"sid":"${this.query.sid}"}`;
        }
        this.writer.write(packet).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      this.writer.write(packet).then(() => {
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
  if (str.length > 2e3) {
    throw "URI too long";
  }
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
var import_component_emitter3 = require("@socket.io/component-emitter@3.1.2");
var import_engine5 = require("engine.io-parser@5.2.3");
var Socket = class extends import_component_emitter3.Emitter {
  constructor(uri, opts = {}) {
    super();
    this.binaryType = defaultBinaryType;
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
      this.resetPingTimeout();
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tY2xpZW50LjYuNS40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2dsb2JhbFRoaXMuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS91dGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2Vxcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi95ZWFzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2hhcy1jb3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMveG1saHR0cHJlcXVlc3QuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3BvbGxpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy93ZWJzb2NrZXQtY29uc3RydWN0b3IuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnRyYW5zcG9ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2V1cmkuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vc29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbImVuZ2luZV9pb19jbGllbnRfNl81XzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiU29ja2V0IiwiVHJhbnNwb3J0IiwiVHJhbnNwb3J0RXJyb3IiLCJpbnN0YWxsVGltZXJGdW5jdGlvbnMiLCJuZXh0VGljayIsInBhcnNlIiwicHJvdG9jb2wiLCJwcm90b2NvbDIiLCJ0cmFuc3BvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImdsb2JhbFRoaXNTaGltIiwic2VsZiIsIndpbmRvdyIsIkZ1bmN0aW9uIiwicGljayIsIm9iaiIsImF0dHIiLCJyZWR1Y2UiLCJhY2MiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJOQVRJVkVfU0VUX1RJTUVPVVQiLCJzZXRUaW1lb3V0IiwiTkFUSVZFX0NMRUFSX1RJTUVPVVQiLCJjbGVhclRpbWVvdXQiLCJvcHRzIiwidXNlTmF0aXZlVGltZXJzIiwic2V0VGltZW91dEZuIiwiYmluZCIsImNsZWFyVGltZW91dEZuIiwiQkFTRTY0X09WRVJIRUFEIiwiYnl0ZUxlbmd0aCIsInV0ZjhMZW5ndGgiLCJNYXRoIiwiY2VpbCIsInNpemUiLCJzdHIiLCJjIiwibGVuZ3RoMiIsImkyIiwibCIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWNvZGUiLCJxcyIsInFyeSIsInBhaXJzIiwic3BsaXQiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiaW1wb3J0X2VuZ2luZSIsInJlcXVpcmUiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwicmVhc29uIiwiZGVzY3JpcHRpb24iLCJjb250ZXh0IiwidHlwZSIsIkVtaXR0ZXIiLCJ3cml0YWJsZSIsInF1ZXJ5Iiwic29ja2V0Iiwib25FcnJvciIsImVtaXRSZXNlcnZlZCIsIm9wZW4iLCJyZWFkeVN0YXRlIiwiZG9PcGVuIiwiY2xvc2UiLCJkb0Nsb3NlIiwib25DbG9zZSIsInNlbmQiLCJwYWNrZXRzIiwid3JpdGUiLCJvbk9wZW4iLCJvbkRhdGEiLCJkYXRhIiwicGFja2V0IiwiZGVjb2RlUGFja2V0IiwiYmluYXJ5VHlwZSIsIm9uUGFja2V0IiwiZGV0YWlscyIsInBhdXNlIiwib25QYXVzZSIsImNyZWF0ZVVyaSIsInNjaGVtYSIsIl9ob3N0bmFtZSIsIl9wb3J0IiwicGF0aCIsIl9xdWVyeSIsImhvc3RuYW1lIiwiaW5kZXhPZiIsInBvcnQiLCJzZWN1cmUiLCJOdW1iZXIiLCJlbmNvZGVkUXVlcnkiLCJhbHBoYWJldCIsIm1hcCIsInNlZWQiLCJpIiwicHJldiIsImVuY29kZTIiLCJudW0iLCJlbmNvZGVkIiwiZmxvb3IiLCJkZWNvZGUyIiwiZGVjb2RlZCIsImNoYXJBdCIsInllYXN0Iiwibm93IiwiRGF0ZSIsInZhbHVlIiwiWE1MSHR0cFJlcXVlc3QiLCJlcnIiLCJoYXNDT1JTIiwiWEhSIiwieGRvbWFpbiIsImUiLCJjb25jYXQiLCJqb2luIiwiY3JlYXRlQ29va2llSmFyIiwiaW1wb3J0X2VuZ2luZTIiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIyIiwiZW1wdHkiLCJoYXNYSFIyIiwieGhyIiwicmVzcG9uc2VUeXBlIiwiUG9sbGluZyIsInBvbGxpbmciLCJsb2NhdGlvbiIsImlzU1NMIiwieGQiLCJmb3JjZUJhc2U2NCIsInN1cHBvcnRzQmluYXJ5Iiwid2l0aENyZWRlbnRpYWxzIiwiY29va2llSmFyIiwibmFtZSIsInBvbGwiLCJ0b3RhbCIsIm9uY2UiLCJkb1BvbGwiLCJjYWxsYmFjayIsImRlY29kZVBheWxvYWQiLCJmb3JFYWNoIiwiZW5jb2RlUGF5bG9hZCIsImRvV3JpdGUiLCJ1cmkiLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsInRpbWVzdGFtcFBhcmFtIiwic2lkIiwiYjY0IiwicmVxdWVzdCIsIk9iamVjdCIsImFzc2lnbiIsIlJlcXVlc3QiLCJmbiIsInJlcSIsIm1ldGhvZCIsIm9uIiwieGhyU3RhdHVzIiwicG9sbFhociIsImNyZWF0ZSIsIl9hIiwiZXh0cmFIZWFkZXJzIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsImFkZENvb2tpZXMiLCJyZXF1ZXN0VGltZW91dCIsInRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJfYTIiLCJwYXJzZUNvb2tpZXMiLCJzdGF0dXMiLCJvbkxvYWQiLCJkb2N1bWVudCIsImluZGV4IiwicmVxdWVzdHNDb3VudCIsInJlcXVlc3RzIiwiY2xlYW51cCIsImZyb21FcnJvciIsImFib3J0IiwicmVzcG9uc2VUZXh0IiwiYXR0YWNoRXZlbnQiLCJ1bmxvYWRIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlcm1pbmF0aW9uRXZlbnQiLCJpc1Byb21pc2VBdmFpbGFibGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNiIiwidGhlbiIsIldlYlNvY2tldCIsIk1veldlYlNvY2tldCIsInVzaW5nQnJvd3NlcldlYlNvY2tldCIsImRlZmF1bHRCaW5hcnlUeXBlIiwiaW1wb3J0X2VuZ2luZTMiLCJpc1JlYWN0TmF0aXZlIiwibmF2aWdhdG9yIiwicHJvZHVjdCIsInRvTG93ZXJDYXNlIiwiV1MiLCJjaGVjayIsInByb3RvY29scyIsImhlYWRlcnMiLCJ3cyIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25vcGVuIiwiYXV0b1VucmVmIiwiX3NvY2tldCIsInVucmVmIiwib25jbG9zZSIsImNsb3NlRXZlbnQiLCJvbm1lc3NhZ2UiLCJldiIsIm9uZXJyb3IiLCJsYXN0UGFja2V0IiwiZW5jb2RlUGFja2V0Iiwib3B0aW9ucyIsImNvbXByZXNzIiwicGVyTWVzc2FnZURlZmxhdGUiLCJsZW4iLCJCdWZmZXIiLCJ0aHJlc2hvbGQiLCJpbXBvcnRfZW5naW5lNCIsIldUIiwiV2ViVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwidHJhbnNwb3J0T3B0aW9ucyIsImNsb3NlZCIsImNhdGNoIiwicmVhZHkiLCJjcmVhdGVCaWRpcmVjdGlvbmFsU3RyZWFtIiwic3RyZWFtIiwiZGVjb2RlclN0cmVhbSIsImNyZWF0ZVBhY2tldERlY29kZXJTdHJlYW0iLCJNQVhfU0FGRV9JTlRFR0VSIiwicmVhZGVyIiwicmVhZGFibGUiLCJwaXBlVGhyb3VnaCIsImdldFJlYWRlciIsImVuY29kZXJTdHJlYW0iLCJjcmVhdGVQYWNrZXRFbmNvZGVyU3RyZWFtIiwicGlwZVRvIiwid3JpdGVyIiwiZ2V0V3JpdGVyIiwicmVhZCIsImRvbmUiLCJ2YWx1ZTIiLCJ3ZWJzb2NrZXQiLCJ3ZWJ0cmFuc3BvcnQiLCJyZSIsInBhcnRzIiwic3JjIiwiYiIsInN1YnN0cmluZyIsInJlcGxhY2UiLCJtIiwiZXhlYyIsInNvdXJjZSIsImhvc3QiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwicGF0aE5hbWVzIiwicXVlcnlLZXkiLCJyZWd4IiwibmFtZXMiLCJzbGljZSIsInNwbGljZSIsIiQwIiwiJDEiLCIkMiIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlcjMiLCJpbXBvcnRfZW5naW5lNSIsIndyaXRlQnVmZmVyIiwicHJldkJ1ZmZlckxlbiIsImFnZW50IiwidXBncmFkZSIsInJlbWVtYmVyVXBncmFkZSIsImFkZFRyYWlsaW5nU2xhc2giLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJjbG9zZU9uQmVmb3JldW5sb2FkIiwiaWQiLCJ1cGdyYWRlcyIsInBpbmdJbnRlcnZhbCIsInBpbmdUaW1lb3V0IiwicGluZ1RpbWVvdXRUaW1lciIsImJlZm9yZXVubG9hZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJvZmZsaW5lRXZlbnRMaXN0ZW5lciIsImNyZWF0ZVRyYW5zcG9ydCIsIkVJTyIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsInNoaWZ0Iiwic2V0VHJhbnNwb3J0Iiwib25EcmFpbiIsInByb2JlIiwiZmFpbGVkIiwib25UcmFuc3BvcnRPcGVuIiwibXNnIiwidXBncmFkaW5nIiwiZmx1c2giLCJmcmVlemVUcmFuc3BvcnQiLCJlcnJvciIsIm9uVHJhbnNwb3J0Q2xvc2UiLCJvbnVwZ3JhZGUiLCJ0byIsInJlbW92ZUxpc3RlbmVyIiwib2ZmIiwicmVzZXRQaW5nVGltZW91dCIsIm9uSGFuZHNoYWtlIiwiSlNPTiIsInNlbmRQYWNrZXQiLCJjb2RlIiwiZmlsdGVyVXBncmFkZXMiLCJtYXhQYXlsb2FkIiwiZ2V0V3JpdGFibGVQYWNrZXRzIiwic2hvdWxkQ2hlY2tQYXlsb2FkU2l6ZSIsInBheWxvYWRTaXplIiwicHVzaCIsImNsZWFudXBBbmRDbG9zZSIsIndhaXRGb3JVcGdyYWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbHRlcmVkVXBncmFkZXMiLCJqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw4QkFBQTtBQUFBQyxRQUFBLENBQUFELDhCQUFBO0VBQUFFLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQWIsOEJBQUE7OztBQ0FPLElBQU1jLGNBQUEsSUFBa0IsTUFBTTtFQUNqQyxJQUFJLE9BQU9DLElBQUEsS0FBUyxhQUFhO0lBQzdCLE9BQU9BLElBQUE7RUFDWCxXQUNTLE9BQU9D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O0lBQ0o7SUFDQSxPQUFPO0VBQ1g7RUFNQUwsUUFBUWtELEdBQUEsRUFBSztJQUNUckgsTUFBQSxDQUFPdVMscUJBQUEsR0FBd0I7SUFDL0IsS0FBS25PLFlBQUEsQ0FBYSxTQUFTaUQsR0FBRztJQUM5QixLQUFLM0MsT0FBQSxDQUFRLG1CQUFtQjJDLEdBQUc7RUFDdkM7RUFNQTNDLFFBQVFmLE1BQUEsRUFBUUMsV0FBQSxFQUFhO0lBQ3pCLElBQUksY0FBYyxLQUFLVSxVQUFBLElBQ25CLFdBQVcsS0FBS0EsVUFBQSxJQUNoQixjQUFjLEtBQUtBLFVBQUEsRUFBWTtNQUUvQixLQUFLdkMsY0FBQSxDQUFlLEtBQUtrUSxnQkFBZ0I7TUFFekMsS0FBSzNELFNBQUEsQ0FBVTZELGtCQUFBLENBQW1CLE9BQU87TUFFekMsS0FBSzdELFNBQUEsQ0FBVTlKLEtBQUEsQ0FBTTtNQUVyQixLQUFLOEosU0FBQSxDQUFVNkQsa0JBQUEsQ0FBbUI7TUFDbEMsSUFBSSxPQUFPa0MsbUJBQUEsS0FBd0IsWUFBWTtRQUMzQ0EsbUJBQUEsQ0FBb0IsZ0JBQWdCLEtBQUtuQyx5QkFBQSxFQUEyQixLQUFLO1FBQ3pFbUMsbUJBQUEsQ0FBb0IsV0FBVyxLQUFLakMsb0JBQUEsRUFBc0IsS0FBSztNQUNuRTtNQUVBLEtBQUs5TixVQUFBLEdBQWE7TUFFbEIsS0FBS3VOLEVBQUEsR0FBSztNQUVWLEtBQUt6TixZQUFBLENBQWEsU0FBU1QsTUFBQSxFQUFRQyxXQUFXO01BRzlDLEtBQUt5TixXQUFBLEdBQWMsRUFBQztNQUNwQixLQUFLQyxhQUFBLEdBQWdCO0lBQ3pCO0VBQ0o7RUFPQXVDLGVBQWUvQixRQUFBLEVBQVU7SUFDckIsTUFBTXdDLGdCQUFBLEdBQW1CLEVBQUM7SUFDMUIsSUFBSTdSLEVBQUEsR0FBSTtJQUNSLE1BQU04UixDQUFBLEdBQUl6QyxRQUFBLENBQVNuUCxNQUFBO0lBQ25CLE9BQU9GLEVBQUEsR0FBSThSLENBQUEsRUFBRzlSLEVBQUEsSUFBSztNQUNmLElBQUksQ0FBQyxLQUFLakMsVUFBQSxDQUFXdUYsT0FBQSxDQUFRK0wsUUFBQSxDQUFTclAsRUFBQSxDQUFFLEdBQ3BDNlIsZ0JBQUEsQ0FBaUJKLElBQUEsQ0FBS3BDLFFBQUEsQ0FBU3JQLEVBQUEsQ0FBRTtJQUN6QztJQUNBLE9BQU82UixnQkFBQTtFQUNYO0FBQ0o7QUFDQXRVLE1BQUEsQ0FBT00sUUFBQSxHQUFXOFEsY0FBQSxDQUFBOVEsUUFBQTs7O0FDL2tCWCxJQUFNQyxTQUFBLEdBQVdQLE1BQUEsQ0FBT00sUUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==