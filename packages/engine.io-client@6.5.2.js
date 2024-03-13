System.register(["engine.io-parser@5.2.1","@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.2.1"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.5.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.2.1', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
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

// .beyond/uimport/temp/engine.io-client.6.5.2.js
var engine_io_client_6_5_2_exports = {};
__export(engine_io_client_6_5_2_exports, {
  Socket: () => Socket,
  Transport: () => Transport,
  installTimerFunctions: () => installTimerFunctions,
  nextTick: () => nextTick,
  parse: () => parse,
  protocol: () => protocol2,
  transports: () => transports
});
module.exports = __toCommonJS(engine_io_client_6_5_2_exports);

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
var import_engine = require("engine.io-parser@5.2.1");
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
var import_engine2 = require("engine.io-parser@5.2.1");
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
var import_engine3 = require("engine.io-parser@5.2.1");
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
var import_engine4 = require("engine.io-parser@5.2.1");
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
var import_engine5 = require("engine.io-parser@5.2.1");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2VuZ2luZS5pby1jbGllbnQuNi41LjIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vZ2xvYmFsVGhpcy5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3V0aWwuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9wYXJzZXFzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL3llYXN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvaGFzLWNvcnMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy94bWxodHRwcmVxdWVzdC5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnNvY2tldC1jb25zdHJ1Y3Rvci5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvd2Vic29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvd2VidHJhbnNwb3J0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9wYXJzZXVyaS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9zb2NrZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiZW5naW5lX2lvX2NsaWVudF82XzVfMl9leHBvcnRzIiwiX19leHBvcnQiLCJTb2NrZXQiLCJUcmFuc3BvcnQiLCJpbnN0YWxsVGltZXJGdW5jdGlvbnMiLCJuZXh0VGljayIsInBhcnNlIiwicHJvdG9jb2wiLCJwcm90b2NvbDIiLCJ0cmFuc3BvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImdsb2JhbFRoaXNTaGltIiwic2VsZiIsIndpbmRvdyIsIkZ1bmN0aW9uIiwicGljayIsIm9iaiIsImF0dHIiLCJyZWR1Y2UiLCJhY2MiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJOQVRJVkVfU0VUX1RJTUVPVVQiLCJzZXRUaW1lb3V0IiwiTkFUSVZFX0NMRUFSX1RJTUVPVVQiLCJjbGVhclRpbWVvdXQiLCJvcHRzIiwidXNlTmF0aXZlVGltZXJzIiwic2V0VGltZW91dEZuIiwiYmluZCIsImNsZWFyVGltZW91dEZuIiwiQkFTRTY0X09WRVJIRUFEIiwiYnl0ZUxlbmd0aCIsInV0ZjhMZW5ndGgiLCJNYXRoIiwiY2VpbCIsInNpemUiLCJzdHIiLCJjIiwibGVuZ3RoMiIsImkyIiwibCIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWNvZGUiLCJxcyIsInFyeSIsInBhaXJzIiwic3BsaXQiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiaW1wb3J0X2VuZ2luZSIsInJlcXVpcmUiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJUcmFuc3BvcnRFcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJyZWFzb24iLCJkZXNjcmlwdGlvbiIsImNvbnRleHQiLCJ0eXBlIiwiRW1pdHRlciIsIndyaXRhYmxlIiwicXVlcnkiLCJzb2NrZXQiLCJvbkVycm9yIiwiZW1pdFJlc2VydmVkIiwib3BlbiIsInJlYWR5U3RhdGUiLCJkb09wZW4iLCJjbG9zZSIsImRvQ2xvc2UiLCJvbkNsb3NlIiwic2VuZCIsInBhY2tldHMiLCJ3cml0ZSIsIm9uT3BlbiIsIm9uRGF0YSIsImRhdGEiLCJwYWNrZXQiLCJkZWNvZGVQYWNrZXQiLCJiaW5hcnlUeXBlIiwib25QYWNrZXQiLCJkZXRhaWxzIiwicGF1c2UiLCJvblBhdXNlIiwiY3JlYXRlVXJpIiwic2NoZW1hIiwiX2hvc3RuYW1lIiwiX3BvcnQiLCJwYXRoIiwiX3F1ZXJ5IiwiaG9zdG5hbWUiLCJpbmRleE9mIiwicG9ydCIsInNlY3VyZSIsIk51bWJlciIsImVuY29kZWRRdWVyeSIsImFscGhhYmV0IiwibWFwIiwic2VlZCIsImkiLCJwcmV2IiwiZW5jb2RlMiIsIm51bSIsImVuY29kZWQiLCJmbG9vciIsImRlY29kZTIiLCJkZWNvZGVkIiwiY2hhckF0IiwieWVhc3QiLCJub3ciLCJEYXRlIiwidmFsdWUiLCJYTUxIdHRwUmVxdWVzdCIsImVyciIsImhhc0NPUlMiLCJYSFIiLCJ4ZG9tYWluIiwiZSIsImNvbmNhdCIsImpvaW4iLCJjcmVhdGVDb29raWVKYXIiLCJpbXBvcnRfZW5naW5lMiIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlcjIiLCJlbXB0eSIsImhhc1hIUjIiLCJ4aHIiLCJyZXNwb25zZVR5cGUiLCJQb2xsaW5nIiwicG9sbGluZyIsImxvY2F0aW9uIiwiaXNTU0wiLCJ4ZCIsImZvcmNlQmFzZTY0Iiwic3VwcG9ydHNCaW5hcnkiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb29raWVKYXIiLCJuYW1lIiwicG9sbCIsInRvdGFsIiwib25jZSIsImRvUG9sbCIsImNhbGxiYWNrIiwiZGVjb2RlUGF5bG9hZCIsImZvckVhY2giLCJlbmNvZGVQYXlsb2FkIiwiZG9Xcml0ZSIsInVyaSIsInRpbWVzdGFtcFJlcXVlc3RzIiwidGltZXN0YW1wUGFyYW0iLCJzaWQiLCJiNjQiLCJyZXF1ZXN0IiwiT2JqZWN0IiwiYXNzaWduIiwiUmVxdWVzdCIsImZuIiwicmVxIiwibWV0aG9kIiwib24iLCJ4aHJTdGF0dXMiLCJwb2xsWGhyIiwiY3JlYXRlIiwiX2EiLCJleHRyYUhlYWRlcnMiLCJzZXREaXNhYmxlSGVhZGVyQ2hlY2siLCJzZXRSZXF1ZXN0SGVhZGVyIiwiYWRkQ29va2llcyIsInJlcXVlc3RUaW1lb3V0IiwidGltZW91dCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIl9hMiIsInBhcnNlQ29va2llcyIsInN0YXR1cyIsIm9uTG9hZCIsImRvY3VtZW50IiwiaW5kZXgiLCJyZXF1ZXN0c0NvdW50IiwicmVxdWVzdHMiLCJjbGVhbnVwIiwiZnJvbUVycm9yIiwiYWJvcnQiLCJyZXNwb25zZVRleHQiLCJhdHRhY2hFdmVudCIsInVubG9hZEhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidGVybWluYXRpb25FdmVudCIsImlzUHJvbWlzZUF2YWlsYWJsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2IiLCJ0aGVuIiwiV2ViU29ja2V0IiwiTW96V2ViU29ja2V0IiwidXNpbmdCcm93c2VyV2ViU29ja2V0IiwiZGVmYXVsdEJpbmFyeVR5cGUiLCJpbXBvcnRfZW5naW5lMyIsImlzUmVhY3ROYXRpdmUiLCJuYXZpZ2F0b3IiLCJwcm9kdWN0IiwidG9Mb3dlckNhc2UiLCJXUyIsImNoZWNrIiwicHJvdG9jb2xzIiwiaGVhZGVycyIsIndzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbm9wZW4iLCJhdXRvVW5yZWYiLCJfc29ja2V0IiwidW5yZWYiLCJvbmNsb3NlIiwiY2xvc2VFdmVudCIsIm9ubWVzc2FnZSIsImV2Iiwib25lcnJvciIsImxhc3RQYWNrZXQiLCJlbmNvZGVQYWNrZXQiLCJvcHRpb25zIiwiY29tcHJlc3MiLCJwZXJNZXNzYWdlRGVmbGF0ZSIsImxlbiIsIkJ1ZmZlciIsInRocmVzaG9sZCIsImltcG9ydF9lbmdpbmU0IiwiV1QiLCJXZWJUcmFuc3BvcnQiLCJ0cmFuc3BvcnQiLCJ0cmFuc3BvcnRPcHRpb25zIiwiY2xvc2VkIiwiY2F0Y2giLCJyZWFkeSIsImNyZWF0ZUJpZGlyZWN0aW9uYWxTdHJlYW0iLCJzdHJlYW0iLCJkZWNvZGVyU3RyZWFtIiwiY3JlYXRlUGFja2V0RGVjb2RlclN0cmVhbSIsIk1BWF9TQUZFX0lOVEVHRVIiLCJyZWFkZXIiLCJyZWFkYWJsZSIsInBpcGVUaHJvdWdoIiwiZ2V0UmVhZGVyIiwiZW5jb2RlclN0cmVhbSIsImNyZWF0ZVBhY2tldEVuY29kZXJTdHJlYW0iLCJwaXBlVG8iLCJ3cml0ZXIiLCJnZXRXcml0ZXIiLCJyZWFkIiwiZG9uZSIsInZhbHVlMiIsIndlYnNvY2tldCIsIndlYnRyYW5zcG9ydCIsInJlIiwicGFydHMiLCJzcmMiLCJiIiwic3Vic3RyaW5nIiwicmVwbGFjZSIsIm0iLCJleGVjIiwic291cmNlIiwiaG9zdCIsImF1dGhvcml0eSIsImlwdjZ1cmkiLCJwYXRoTmFtZXMiLCJxdWVyeUtleSIsInJlZ3giLCJuYW1lcyIsInNsaWNlIiwic3BsaWNlIiwiJDAiLCIkMSIsIiQyIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMyIsImltcG9ydF9lbmdpbmU1Iiwid3JpdGVCdWZmZXIiLCJwcmV2QnVmZmVyTGVuIiwiYWdlbnQiLCJ1cGdyYWRlIiwicmVtZW1iZXJVcGdyYWRlIiwiYWRkVHJhaWxpbmdTbGFzaCIsInJlamVjdFVuYXV0aG9yaXplZCIsImNsb3NlT25CZWZvcmV1bmxvYWQiLCJpZCIsInVwZ3JhZGVzIiwicGluZ0ludGVydmFsIiwicGluZ1RpbWVvdXQiLCJwaW5nVGltZW91dFRpbWVyIiwiYmVmb3JldW5sb2FkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsIm9mZmxpbmVFdmVudExpc3RlbmVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiRUlPIiwicHJpb3JXZWJzb2NrZXRTdWNjZXNzIiwic2hpZnQiLCJzZXRUcmFuc3BvcnQiLCJvbkRyYWluIiwicHJvYmUiLCJmYWlsZWQiLCJvblRyYW5zcG9ydE9wZW4iLCJtc2ciLCJ1cGdyYWRpbmciLCJmbHVzaCIsImZyZWV6ZVRyYW5zcG9ydCIsImVycm9yIiwib25UcmFuc3BvcnRDbG9zZSIsIm9udXBncmFkZSIsInRvIiwicmVtb3ZlTGlzdGVuZXIiLCJvZmYiLCJyZXNldFBpbmdUaW1lb3V0Iiwib25IYW5kc2hha2UiLCJKU09OIiwic2VuZFBhY2tldCIsImNvZGUiLCJmaWx0ZXJVcGdyYWRlcyIsIm1heFBheWxvYWQiLCJnZXRXcml0YWJsZVBhY2tldHMiLCJzaG91bGRDaGVja1BheWxvYWRTaXplIiwicGF5bG9hZFNpemUiLCJwdXNoIiwiY2xlYW51cEFuZENsb3NlIiwid2FpdEZvclVwZ3JhZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyZWRVcGdyYWRlcyIsImoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQUUsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBWiw4QkFBQTs7O0FDQU8sSUFBTWEsY0FBQSxJQUFrQixNQUFNO0VBQ2pDLElBQUksT0FBT0MsSUFBQSxLQUFTLGFBQWE7SUFDN0IsT0FBT0EsSUFBQTtFQUNYLFdBQ1MsT0FBT0MsTUFBQSxLQUFXLGFBQWE7SUFDcEMsT0FBT0EsTUFBQTtFQUNYLE9BQ0s7SUFDRCxPQUFPQyxRQUFBLENBQVMsYUFBYSxFQUFFO0VBQ25DO0FBQ0osR0FBRzs7O0FDVEksU0FBU0MsS0FBS0MsR0FBQSxLQUFRQyxJQUFBLEVBQU07RUFDL0IsT0FBT0EsSUFBQSxDQUFLQyxNQUFBLENBQU8sQ0FBQ0MsR0FBQSxFQUFLQyxDQUFBLEtBQU07SUFDM0IsSUFBSUosR0FBQSxDQUFJSyxjQUFBLENBQWVELENBQUMsR0FBRztNQUN2QkQsR0FBQSxDQUFJQyxDQUFBLElBQUtKLEdBQUEsQ0FBSUksQ0FBQTtJQUNqQjtJQUNBLE9BQU9ELEdBQUE7RUFDWCxHQUFHLENBQUMsQ0FBQztBQUNUO0FBRUEsSUFBTUcsa0JBQUEsR0FBcUJYLGNBQUEsQ0FBV1ksVUFBQTtBQUN0QyxJQUFNQyxvQkFBQSxHQUF1QmIsY0FBQSxDQUFXYyxZQUFBO0FBQ2pDLFNBQVN2QixzQkFBc0JjLEdBQUEsRUFBS1UsSUFBQSxFQUFNO0VBQzdDLElBQUlBLElBQUEsQ0FBS0MsZUFBQSxFQUFpQjtJQUN0QlgsR0FBQSxDQUFJWSxZQUFBLEdBQWVOLGtCQUFBLENBQW1CTyxJQUFBLENBQUtsQixjQUFVO0lBQ3JESyxHQUFBLENBQUljLGNBQUEsR0FBaUJOLG9CQUFBLENBQXFCSyxJQUFBLENBQUtsQixjQUFVO0VBQzdELE9BQ0s7SUFDREssR0FBQSxDQUFJWSxZQUFBLEdBQWVqQixjQUFBLENBQVdZLFVBQUEsQ0FBV00sSUFBQSxDQUFLbEIsY0FBVTtJQUN4REssR0FBQSxDQUFJYyxjQUFBLEdBQWlCbkIsY0FBQSxDQUFXYyxZQUFBLENBQWFJLElBQUEsQ0FBS2xCLGNBQVU7RUFDaEU7QUFDSjtBQUVBLElBQU1vQixlQUFBLEdBQWtCO0FBRWpCLFNBQVNDLFdBQVdoQixHQUFBLEVBQUs7RUFDNUIsSUFBSSxPQUFPQSxHQUFBLEtBQVEsVUFBVTtJQUN6QixPQUFPaUIsVUFBQSxDQUFXakIsR0FBRztFQUN6QjtFQUVBLE9BQU9rQixJQUFBLENBQUtDLElBQUEsRUFBTW5CLEdBQUEsQ0FBSWdCLFVBQUEsSUFBY2hCLEdBQUEsQ0FBSW9CLElBQUEsSUFBUUwsZUFBZTtBQUNuRTtBQUNBLFNBQVNFLFdBQVdJLEdBQUEsRUFBSztFQUNyQixJQUFJQyxDQUFBLEdBQUk7SUFBR0MsT0FBQSxHQUFTO0VBQ3BCLFNBQVNDLEVBQUEsR0FBSSxHQUFHQyxDQUFBLEdBQUlKLEdBQUEsQ0FBSUssTUFBQSxFQUFRRixFQUFBLEdBQUlDLENBQUEsRUFBR0QsRUFBQSxJQUFLO0lBQ3hDRixDQUFBLEdBQUlELEdBQUEsQ0FBSU0sVUFBQSxDQUFXSCxFQUFDO0lBQ3BCLElBQUlGLENBQUEsR0FBSSxLQUFNO01BQ1ZDLE9BQUEsSUFBVTtJQUNkLFdBQ1NELENBQUEsR0FBSSxNQUFPO01BQ2hCQyxPQUFBLElBQVU7SUFDZCxXQUNTRCxDQUFBLEdBQUksU0FBVUEsQ0FBQSxJQUFLLE9BQVE7TUFDaENDLE9BQUEsSUFBVTtJQUNkLE9BQ0s7TUFDREMsRUFBQTtNQUNBRCxPQUFBLElBQVU7SUFDZDtFQUNKO0VBQ0EsT0FBT0EsT0FBQTtBQUNYOzs7QUMzQ08sU0FBU0ssT0FBTzVCLEdBQUEsRUFBSztFQUN4QixJQUFJcUIsR0FBQSxHQUFNO0VBQ1YsU0FBU0csRUFBQSxJQUFLeEIsR0FBQSxFQUFLO0lBQ2YsSUFBSUEsR0FBQSxDQUFJSyxjQUFBLENBQWVtQixFQUFDLEdBQUc7TUFDdkIsSUFBSUgsR0FBQSxDQUFJSyxNQUFBLEVBQ0pMLEdBQUEsSUFBTztNQUNYQSxHQUFBLElBQU9RLGtCQUFBLENBQW1CTCxFQUFDLElBQUksTUFBTUssa0JBQUEsQ0FBbUI3QixHQUFBLENBQUl3QixFQUFBLENBQUU7SUFDbEU7RUFDSjtFQUNBLE9BQU9ILEdBQUE7QUFDWDtBQU9PLFNBQVNTLE9BQU9DLEVBQUEsRUFBSTtFQUN2QixJQUFJQyxHQUFBLEdBQU0sQ0FBQztFQUNYLElBQUlDLEtBQUEsR0FBUUYsRUFBQSxDQUFHRyxLQUFBLENBQU0sR0FBRztFQUN4QixTQUFTVixFQUFBLEdBQUksR0FBR0MsQ0FBQSxHQUFJUSxLQUFBLENBQU1QLE1BQUEsRUFBUUYsRUFBQSxHQUFJQyxDQUFBLEVBQUdELEVBQUEsSUFBSztJQUMxQyxJQUFJVyxJQUFBLEdBQU9GLEtBQUEsQ0FBTVQsRUFBQSxFQUFHVSxLQUFBLENBQU0sR0FBRztJQUM3QkYsR0FBQSxDQUFJSSxrQkFBQSxDQUFtQkQsSUFBQSxDQUFLLEVBQUUsS0FBS0Msa0JBQUEsQ0FBbUJELElBQUEsQ0FBSyxFQUFFO0VBQ2pFO0VBQ0EsT0FBT0gsR0FBQTtBQUNYOzs7QUNqQ0EsSUFBQUssYUFBQSxHQUE2QkMsT0FBQTtBQUM3QixJQUFBQyx3QkFBQSxHQUF3QkQsT0FBQTtBQUd4QixJQUFNRSxjQUFBLEdBQU4sY0FBNkJDLEtBQUEsQ0FBTTtFQUMvQkMsWUFBWUMsTUFBQSxFQUFRQyxXQUFBLEVBQWFDLE9BQUEsRUFBUztJQUN0QyxNQUFNRixNQUFNO0lBQ1osS0FBS0MsV0FBQSxHQUFjQSxXQUFBO0lBQ25CLEtBQUtDLE9BQUEsR0FBVUEsT0FBQTtJQUNmLEtBQUtDLElBQUEsR0FBTztFQUNoQjtBQUNKO0FBQ08sSUFBTTdELFNBQUEsR0FBTixjQUF3QnNELHdCQUFBLENBQUFRLE9BQUEsQ0FBUTtFQU9uQ0wsWUFBWWhDLElBQUEsRUFBTTtJQUNkLE1BQU07SUFDTixLQUFLc0MsUUFBQSxHQUFXO0lBQ2hCOUQscUJBQUEsQ0FBc0IsTUFBTXdCLElBQUk7SUFDaEMsS0FBS0EsSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBS3VDLEtBQUEsR0FBUXZDLElBQUEsQ0FBS3VDLEtBQUE7SUFDbEIsS0FBS0MsTUFBQSxHQUFTeEMsSUFBQSxDQUFLd0MsTUFBQTtFQUN2QjtFQVVBQyxRQUFRUixNQUFBLEVBQVFDLFdBQUEsRUFBYUMsT0FBQSxFQUFTO0lBQ2xDLE1BQU1PLFlBQUEsQ0FBYSxTQUFTLElBQUlaLGNBQUEsQ0FBZUcsTUFBQSxFQUFRQyxXQUFBLEVBQWFDLE9BQU8sQ0FBQztJQUM1RSxPQUFPO0VBQ1g7RUFJQVEsS0FBQSxFQUFPO0lBQ0gsS0FBS0MsVUFBQSxHQUFhO0lBQ2xCLEtBQUtDLE1BQUEsQ0FBTztJQUNaLE9BQU87RUFDWDtFQUlBQyxNQUFBLEVBQVE7SUFDSixJQUFJLEtBQUtGLFVBQUEsS0FBZSxhQUFhLEtBQUtBLFVBQUEsS0FBZSxRQUFRO01BQzdELEtBQUtHLE9BQUEsQ0FBUTtNQUNiLEtBQUtDLE9BQUEsQ0FBUTtJQUNqQjtJQUNBLE9BQU87RUFDWDtFQU1BQyxLQUFLQyxPQUFBLEVBQVM7SUFDVixJQUFJLEtBQUtOLFVBQUEsS0FBZSxRQUFRO01BQzVCLEtBQUtPLEtBQUEsQ0FBTUQsT0FBTztJQUN0QixPQUNLLENBRUw7RUFDSjtFQU1BRSxPQUFBLEVBQVM7SUFDTCxLQUFLUixVQUFBLEdBQWE7SUFDbEIsS0FBS04sUUFBQSxHQUFXO0lBQ2hCLE1BQU1JLFlBQUEsQ0FBYSxNQUFNO0VBQzdCO0VBT0FXLE9BQU9DLElBQUEsRUFBTTtJQUNULE1BQU1DLE1BQUEsT0FBUzVCLGFBQUEsQ0FBQTZCLFlBQUEsRUFBYUYsSUFBQSxFQUFNLEtBQUtkLE1BQUEsQ0FBT2lCLFVBQVU7SUFDeEQsS0FBS0MsUUFBQSxDQUFTSCxNQUFNO0VBQ3hCO0VBTUFHLFNBQVNILE1BQUEsRUFBUTtJQUNiLE1BQU1iLFlBQUEsQ0FBYSxVQUFVYSxNQUFNO0VBQ3ZDO0VBTUFQLFFBQVFXLE9BQUEsRUFBUztJQUNiLEtBQUtmLFVBQUEsR0FBYTtJQUNsQixNQUFNRixZQUFBLENBQWEsU0FBU2lCLE9BQU87RUFDdkM7RUFNQUMsTUFBTUMsT0FBQSxFQUFTLENBQUU7RUFDakJDLFVBQVVDLE1BQUEsRUFBUXhCLEtBQUEsR0FBUSxDQUFDLEdBQUc7SUFDMUIsT0FBUXdCLE1BQUEsR0FDSixRQUNBLEtBQUtDLFNBQUEsQ0FBVSxJQUNmLEtBQUtDLEtBQUEsQ0FBTSxJQUNYLEtBQUtqRSxJQUFBLENBQUtrRSxJQUFBLEdBQ1YsS0FBS0MsTUFBQSxDQUFPNUIsS0FBSztFQUN6QjtFQUNBeUIsVUFBQSxFQUFZO0lBQ1IsTUFBTUksUUFBQSxHQUFXLEtBQUtwRSxJQUFBLENBQUtvRSxRQUFBO0lBQzNCLE9BQU9BLFFBQUEsQ0FBU0MsT0FBQSxDQUFRLEdBQUcsTUFBTSxLQUFLRCxRQUFBLEdBQVcsTUFBTUEsUUFBQSxHQUFXO0VBQ3RFO0VBQ0FILE1BQUEsRUFBUTtJQUNKLElBQUksS0FBS2pFLElBQUEsQ0FBS3NFLElBQUEsS0FDUixLQUFLdEUsSUFBQSxDQUFLdUUsTUFBQSxJQUFVQyxNQUFBLENBQU8sS0FBS3hFLElBQUEsQ0FBS3NFLElBQUEsS0FBUyxHQUFHLEtBQzlDLENBQUMsS0FBS3RFLElBQUEsQ0FBS3VFLE1BQUEsSUFBVUMsTUFBQSxDQUFPLEtBQUt4RSxJQUFBLENBQUtzRSxJQUFJLE1BQU0sS0FBTTtNQUMzRCxPQUFPLE1BQU0sS0FBS3RFLElBQUEsQ0FBS3NFLElBQUE7SUFDM0IsT0FDSztNQUNELE9BQU87SUFDWDtFQUNKO0VBQ0FILE9BQU81QixLQUFBLEVBQU87SUFDVixNQUFNa0MsWUFBQSxHQUFldkQsTUFBQSxDQUFPcUIsS0FBSztJQUNqQyxPQUFPa0MsWUFBQSxDQUFhekQsTUFBQSxHQUFTLE1BQU15RCxZQUFBLEdBQWU7RUFDdEQ7QUFDSjs7O0FDMUlBLElBQU1DLFFBQUEsR0FBVyxtRUFBbUVsRCxLQUFBLENBQU0sRUFBRTtFQUFHUixNQUFBLEdBQVM7RUFBSTJELEdBQUEsR0FBTSxDQUFDO0FBQ25ILElBQUlDLElBQUEsR0FBTztFQUFHQyxDQUFBLEdBQUk7RUFBR0MsSUFBQTtBQVFkLFNBQVNDLFFBQU9DLEdBQUEsRUFBSztFQUN4QixJQUFJQyxPQUFBLEdBQVU7RUFDZCxHQUFHO0lBQ0NBLE9BQUEsR0FBVVAsUUFBQSxDQUFTTSxHQUFBLEdBQU1oRSxNQUFBLElBQVVpRSxPQUFBO0lBQ25DRCxHQUFBLEdBQU14RSxJQUFBLENBQUswRSxLQUFBLENBQU1GLEdBQUEsR0FBTWhFLE1BQU07RUFDakMsU0FBU2dFLEdBQUEsR0FBTTtFQUNmLE9BQU9DLE9BQUE7QUFDWDtBQVFPLFNBQVNFLFFBQU94RSxHQUFBLEVBQUs7RUFDeEIsSUFBSXlFLE9BQUEsR0FBVTtFQUNkLEtBQUtQLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlsRSxHQUFBLENBQUlLLE1BQUEsRUFBUTZELENBQUEsSUFBSztJQUM3Qk8sT0FBQSxHQUFVQSxPQUFBLEdBQVVwRSxNQUFBLEdBQVMyRCxHQUFBLENBQUloRSxHQUFBLENBQUkwRSxNQUFBLENBQU9SLENBQUM7RUFDakQ7RUFDQSxPQUFPTyxPQUFBO0FBQ1g7QUFPTyxTQUFTRSxNQUFBLEVBQVE7RUFDcEIsTUFBTUMsR0FBQSxHQUFNUixPQUFBLENBQU8sQ0FBQyxJQUFJUyxJQUFBLENBQUssQ0FBQztFQUM5QixJQUFJRCxHQUFBLEtBQVFULElBQUEsRUFDUixPQUFPRixJQUFBLEdBQU8sR0FBR0UsSUFBQSxHQUFPUyxHQUFBO0VBQzVCLE9BQU9BLEdBQUEsR0FBTSxNQUFNUixPQUFBLENBQU9ILElBQUEsRUFBTTtBQUNwQztBQUlBLE9BQU9DLENBQUEsR0FBSTdELE1BQUEsRUFBUTZELENBQUEsSUFDZkYsR0FBQSxDQUFJRCxRQUFBLENBQVNHLENBQUEsS0FBTUEsQ0FBQTs7O0FDaER2QixJQUFJWSxLQUFBLEdBQVE7QUFDWixJQUFJO0VBQ0FBLEtBQUEsR0FBUSxPQUFPQyxjQUFBLEtBQW1CLGVBQzlCLHFCQUFxQixJQUFJQSxjQUFBLENBQWU7QUFDaEQsU0FDT0MsR0FBQSxFQUFQLENBR0E7QUFDTyxJQUFNQyxPQUFBLEdBQVVILEtBQUE7OztBQ1BoQixTQUFTSSxJQUFJN0YsSUFBQSxFQUFNO0VBQ3RCLE1BQU04RixPQUFBLEdBQVU5RixJQUFBLENBQUs4RixPQUFBO0VBRXJCLElBQUk7SUFDQSxJQUFJLGdCQUFnQixPQUFPSixjQUFBLEtBQW1CLENBQUNJLE9BQUEsSUFBV0YsT0FBQSxHQUFVO01BQ2hFLE9BQU8sSUFBSUYsY0FBQSxDQUFlO0lBQzlCO0VBQ0osU0FDT0ssQ0FBQSxFQUFQLENBQVk7RUFDWixJQUFJLENBQUNELE9BQUEsRUFBUztJQUNWLElBQUk7TUFDQSxPQUFPLElBQUk3RyxjQUFBLENBQVcsQ0FBQyxRQUFRLEVBQUUrRyxNQUFBLENBQU8sUUFBUSxFQUFFQyxJQUFBLENBQUssR0FBRyxHQUFHLG1CQUFtQjtJQUNwRixTQUNPRixDQUFBLEVBQVAsQ0FBWTtFQUNoQjtBQUNKO0FBQ08sU0FBU0csZ0JBQUEsRUFBa0IsQ0FBRTs7O0FDakJwQyxJQUFBQyxjQUFBLEdBQTZDdkUsT0FBQTtBQUU3QyxJQUFBd0UseUJBQUEsR0FBd0J4RSxPQUFBO0FBR3hCLFNBQVN5RSxNQUFBLEVBQVEsQ0FBRTtBQUNuQixJQUFNQyxPQUFBLEdBQVcsWUFBWTtFQUN6QixNQUFNQyxHQUFBLEdBQU0sSUFBSVYsR0FBQSxDQUFlO0lBQzNCQyxPQUFBLEVBQVM7RUFDYixDQUFDO0VBQ0QsT0FBTyxRQUFRUyxHQUFBLENBQUlDLFlBQUE7QUFDdkIsRUFBRztBQUNJLElBQU1DLE9BQUEsR0FBTixjQUFzQmxJLFNBQUEsQ0FBVTtFQU9uQ3lELFlBQVloQyxJQUFBLEVBQU07SUFDZCxNQUFNQSxJQUFJO0lBQ1YsS0FBSzBHLE9BQUEsR0FBVTtJQUNmLElBQUksT0FBT0MsUUFBQSxLQUFhLGFBQWE7TUFDakMsTUFBTUMsS0FBQSxHQUFRLGFBQWFELFFBQUEsQ0FBU2hJLFFBQUE7TUFDcEMsSUFBSTJGLElBQUEsR0FBT3FDLFFBQUEsQ0FBU3JDLElBQUE7TUFFcEIsSUFBSSxDQUFDQSxJQUFBLEVBQU07UUFDUEEsSUFBQSxHQUFPc0MsS0FBQSxHQUFRLFFBQVE7TUFDM0I7TUFDQSxLQUFLQyxFQUFBLEdBQ0EsT0FBT0YsUUFBQSxLQUFhLGVBQ2pCM0csSUFBQSxDQUFLb0UsUUFBQSxLQUFhdUMsUUFBQSxDQUFTdkMsUUFBQSxJQUMzQkUsSUFBQSxLQUFTdEUsSUFBQSxDQUFLc0UsSUFBQTtJQUMxQjtJQUlBLE1BQU13QyxXQUFBLEdBQWM5RyxJQUFBLElBQVFBLElBQUEsQ0FBSzhHLFdBQUE7SUFDakMsS0FBS0MsY0FBQSxHQUFpQlQsT0FBQSxJQUFXLENBQUNRLFdBQUE7SUFDbEMsSUFBSSxLQUFLOUcsSUFBQSxDQUFLZ0gsZUFBQSxFQUFpQjtNQUMzQixLQUFLQyxTQUFBLEdBQVlmLGVBQUEsQ0FBZ0I7SUFDckM7RUFDSjtFQUNBLElBQUlnQixLQUFBLEVBQU87SUFDUCxPQUFPO0VBQ1g7RUFPQXJFLE9BQUEsRUFBUztJQUNMLEtBQUtzRSxJQUFBLENBQUs7RUFDZDtFQU9BdkQsTUFBTUMsT0FBQSxFQUFTO0lBQ1gsS0FBS2pCLFVBQUEsR0FBYTtJQUNsQixNQUFNZ0IsS0FBQSxHQUFRQSxDQUFBLEtBQU07TUFDaEIsS0FBS2hCLFVBQUEsR0FBYTtNQUNsQmlCLE9BQUEsQ0FBUTtJQUNaO0lBQ0EsSUFBSSxLQUFLNkMsT0FBQSxJQUFXLENBQUMsS0FBS3BFLFFBQUEsRUFBVTtNQUNoQyxJQUFJOEUsS0FBQSxHQUFRO01BQ1osSUFBSSxLQUFLVixPQUFBLEVBQVM7UUFDZFUsS0FBQTtRQUNBLEtBQUtDLElBQUEsQ0FBSyxnQkFBZ0IsWUFBWTtVQUNsQyxFQUFFRCxLQUFBLElBQVN4RCxLQUFBLENBQU07UUFDckIsQ0FBQztNQUNMO01BQ0EsSUFBSSxDQUFDLEtBQUt0QixRQUFBLEVBQVU7UUFDaEI4RSxLQUFBO1FBQ0EsS0FBS0MsSUFBQSxDQUFLLFNBQVMsWUFBWTtVQUMzQixFQUFFRCxLQUFBLElBQVN4RCxLQUFBLENBQU07UUFDckIsQ0FBQztNQUNMO0lBQ0osT0FDSztNQUNEQSxLQUFBLENBQU07SUFDVjtFQUNKO0VBTUF1RCxLQUFBLEVBQU87SUFDSCxLQUFLVCxPQUFBLEdBQVU7SUFDZixLQUFLWSxNQUFBLENBQU87SUFDWixLQUFLNUUsWUFBQSxDQUFhLE1BQU07RUFDNUI7RUFNQVcsT0FBT0MsSUFBQSxFQUFNO0lBQ1QsTUFBTWlFLFFBQUEsR0FBWWhFLE1BQUEsSUFBVztNQUV6QixJQUFJLGNBQWMsS0FBS1gsVUFBQSxJQUFjVyxNQUFBLENBQU9uQixJQUFBLEtBQVMsUUFBUTtRQUN6RCxLQUFLZ0IsTUFBQSxDQUFPO01BQ2hCO01BRUEsSUFBSSxZQUFZRyxNQUFBLENBQU9uQixJQUFBLEVBQU07UUFDekIsS0FBS1ksT0FBQSxDQUFRO1VBQUVkLFdBQUEsRUFBYTtRQUFpQyxDQUFDO1FBQzlELE9BQU87TUFDWDtNQUVBLEtBQUt3QixRQUFBLENBQVNILE1BQU07SUFDeEI7SUFFQSxJQUFBNEMsY0FBQSxDQUFBcUIsYUFBQSxFQUFjbEUsSUFBQSxFQUFNLEtBQUtkLE1BQUEsQ0FBT2lCLFVBQVUsRUFBRWdFLE9BQUEsQ0FBUUYsUUFBUTtJQUU1RCxJQUFJLGFBQWEsS0FBSzNFLFVBQUEsRUFBWTtNQUU5QixLQUFLOEQsT0FBQSxHQUFVO01BQ2YsS0FBS2hFLFlBQUEsQ0FBYSxjQUFjO01BQ2hDLElBQUksV0FBVyxLQUFLRSxVQUFBLEVBQVk7UUFDNUIsS0FBS3VFLElBQUEsQ0FBSztNQUNkLE9BQ0ssQ0FDTDtJQUNKO0VBQ0o7RUFNQXBFLFFBQUEsRUFBVTtJQUNOLE1BQU1ELEtBQUEsR0FBUUEsQ0FBQSxLQUFNO01BQ2hCLEtBQUtLLEtBQUEsQ0FBTSxDQUFDO1FBQUVmLElBQUEsRUFBTTtNQUFRLENBQUMsQ0FBQztJQUNsQztJQUNBLElBQUksV0FBVyxLQUFLUSxVQUFBLEVBQVk7TUFDNUJFLEtBQUEsQ0FBTTtJQUNWLE9BQ0s7TUFHRCxLQUFLdUUsSUFBQSxDQUFLLFFBQVF2RSxLQUFLO0lBQzNCO0VBQ0o7RUFPQUssTUFBTUQsT0FBQSxFQUFTO0lBQ1gsS0FBS1osUUFBQSxHQUFXO0lBQ2hCLElBQUE2RCxjQUFBLENBQUF1QixhQUFBLEVBQWN4RSxPQUFBLEVBQVVJLElBQUEsSUFBUztNQUM3QixLQUFLcUUsT0FBQSxDQUFRckUsSUFBQSxFQUFNLE1BQU07UUFDckIsS0FBS2hCLFFBQUEsR0FBVztRQUNoQixLQUFLSSxZQUFBLENBQWEsT0FBTztNQUM3QixDQUFDO0lBQ0wsQ0FBQztFQUNMO0VBTUFrRixJQUFBLEVBQU07SUFDRixNQUFNN0QsTUFBQSxHQUFTLEtBQUsvRCxJQUFBLENBQUt1RSxNQUFBLEdBQVMsVUFBVTtJQUM1QyxNQUFNaEMsS0FBQSxHQUFRLEtBQUtBLEtBQUEsSUFBUyxDQUFDO0lBRTdCLElBQUksVUFBVSxLQUFLdkMsSUFBQSxDQUFLNkgsaUJBQUEsRUFBbUI7TUFDdkN0RixLQUFBLENBQU0sS0FBS3ZDLElBQUEsQ0FBSzhILGNBQUEsSUFBa0J4QyxLQUFBLENBQU07SUFDNUM7SUFDQSxJQUFJLENBQUMsS0FBS3lCLGNBQUEsSUFBa0IsQ0FBQ3hFLEtBQUEsQ0FBTXdGLEdBQUEsRUFBSztNQUNwQ3hGLEtBQUEsQ0FBTXlGLEdBQUEsR0FBTTtJQUNoQjtJQUNBLE9BQU8sS0FBS2xFLFNBQUEsQ0FBVUMsTUFBQSxFQUFReEIsS0FBSztFQUN2QztFQU9BMEYsUUFBUWpJLElBQUEsR0FBTyxDQUFDLEdBQUc7SUFDZmtJLE1BQUEsQ0FBT0MsTUFBQSxDQUFPbkksSUFBQSxFQUFNO01BQUU2RyxFQUFBLEVBQUksS0FBS0EsRUFBQTtNQUFJSSxTQUFBLEVBQVcsS0FBS0E7SUFBVSxHQUFHLEtBQUtqSCxJQUFJO0lBQ3pFLE9BQU8sSUFBSW9JLE9BQUEsQ0FBUSxLQUFLUixHQUFBLENBQUksR0FBRzVILElBQUk7RUFDdkM7RUFRQTJILFFBQVFyRSxJQUFBLEVBQU0rRSxFQUFBLEVBQUk7SUFDZCxNQUFNQyxHQUFBLEdBQU0sS0FBS0wsT0FBQSxDQUFRO01BQ3JCTSxNQUFBLEVBQVE7TUFDUmpGO0lBQ0osQ0FBQztJQUNEZ0YsR0FBQSxDQUFJRSxFQUFBLENBQUcsV0FBV0gsRUFBRTtJQUNwQkMsR0FBQSxDQUFJRSxFQUFBLENBQUcsU0FBUyxDQUFDQyxTQUFBLEVBQVd0RyxPQUFBLEtBQVk7TUFDcEMsS0FBS00sT0FBQSxDQUFRLGtCQUFrQmdHLFNBQUEsRUFBV3RHLE9BQU87SUFDckQsQ0FBQztFQUNMO0VBTUFtRixPQUFBLEVBQVM7SUFDTCxNQUFNZ0IsR0FBQSxHQUFNLEtBQUtMLE9BQUEsQ0FBUTtJQUN6QkssR0FBQSxDQUFJRSxFQUFBLENBQUcsUUFBUSxLQUFLbkYsTUFBQSxDQUFPbEQsSUFBQSxDQUFLLElBQUksQ0FBQztJQUNyQ21JLEdBQUEsQ0FBSUUsRUFBQSxDQUFHLFNBQVMsQ0FBQ0MsU0FBQSxFQUFXdEcsT0FBQSxLQUFZO01BQ3BDLEtBQUtNLE9BQUEsQ0FBUSxrQkFBa0JnRyxTQUFBLEVBQVd0RyxPQUFPO0lBQ3JELENBQUM7SUFDRCxLQUFLdUcsT0FBQSxHQUFVSixHQUFBO0VBQ25CO0FBQ0o7QUFDTyxJQUFNRixPQUFBLEdBQU4sY0FBc0JoQyx5QkFBQSxDQUFBL0QsT0FBQSxDQUFRO0VBT2pDTCxZQUFZNEYsR0FBQSxFQUFLNUgsSUFBQSxFQUFNO0lBQ25CLE1BQU07SUFDTnhCLHFCQUFBLENBQXNCLE1BQU13QixJQUFJO0lBQ2hDLEtBQUtBLElBQUEsR0FBT0EsSUFBQTtJQUNaLEtBQUt1SSxNQUFBLEdBQVN2SSxJQUFBLENBQUt1SSxNQUFBLElBQVU7SUFDN0IsS0FBS1gsR0FBQSxHQUFNQSxHQUFBO0lBQ1gsS0FBS3RFLElBQUEsR0FBTyxXQUFjdEQsSUFBQSxDQUFLc0QsSUFBQSxHQUFPdEQsSUFBQSxDQUFLc0QsSUFBQSxHQUFPO0lBQ2xELEtBQUtxRixNQUFBLENBQU87RUFDaEI7RUFNQUEsT0FBQSxFQUFTO0lBQ0wsSUFBSUMsRUFBQTtJQUNKLE1BQU01SSxJQUFBLEdBQU9YLElBQUEsQ0FBSyxLQUFLVyxJQUFBLEVBQU0sU0FBUyxPQUFPLE9BQU8sY0FBYyxRQUFRLE1BQU0sV0FBVyxzQkFBc0IsV0FBVztJQUM1SEEsSUFBQSxDQUFLOEYsT0FBQSxHQUFVLENBQUMsQ0FBQyxLQUFLOUYsSUFBQSxDQUFLNkcsRUFBQTtJQUMzQixNQUFNTixHQUFBLEdBQU8sS0FBS0EsR0FBQSxHQUFNLElBQUlWLEdBQUEsQ0FBZTdGLElBQUk7SUFDL0MsSUFBSTtNQUNBdUcsR0FBQSxDQUFJNUQsSUFBQSxDQUFLLEtBQUs0RixNQUFBLEVBQVEsS0FBS1gsR0FBQSxFQUFLLElBQUk7TUFDcEMsSUFBSTtRQUNBLElBQUksS0FBSzVILElBQUEsQ0FBSzZJLFlBQUEsRUFBYztVQUN4QnRDLEdBQUEsQ0FBSXVDLHFCQUFBLElBQXlCdkMsR0FBQSxDQUFJdUMscUJBQUEsQ0FBc0IsSUFBSTtVQUMzRCxTQUFTaEksRUFBQSxJQUFLLEtBQUtkLElBQUEsQ0FBSzZJLFlBQUEsRUFBYztZQUNsQyxJQUFJLEtBQUs3SSxJQUFBLENBQUs2SSxZQUFBLENBQWFsSixjQUFBLENBQWVtQixFQUFDLEdBQUc7Y0FDMUN5RixHQUFBLENBQUl3QyxnQkFBQSxDQUFpQmpJLEVBQUEsRUFBRyxLQUFLZCxJQUFBLENBQUs2SSxZQUFBLENBQWEvSCxFQUFBLENBQUU7WUFDckQ7VUFDSjtRQUNKO01BQ0osU0FDT2lGLENBQUEsRUFBUCxDQUFZO01BQ1osSUFBSSxXQUFXLEtBQUt3QyxNQUFBLEVBQVE7UUFDeEIsSUFBSTtVQUNBaEMsR0FBQSxDQUFJd0MsZ0JBQUEsQ0FBaUIsZ0JBQWdCLDBCQUEwQjtRQUNuRSxTQUNPaEQsQ0FBQSxFQUFQLENBQVk7TUFDaEI7TUFDQSxJQUFJO1FBQ0FRLEdBQUEsQ0FBSXdDLGdCQUFBLENBQWlCLFVBQVUsS0FBSztNQUN4QyxTQUNPaEQsQ0FBQSxFQUFQLENBQVk7TUFDWixDQUFDNkMsRUFBQSxHQUFLLEtBQUs1SSxJQUFBLENBQUtpSCxTQUFBLE1BQWUsUUFBUTJCLEVBQUEsS0FBTyxTQUFTLFNBQVNBLEVBQUEsQ0FBR0ksVUFBQSxDQUFXekMsR0FBRztNQUVqRixJQUFJLHFCQUFxQkEsR0FBQSxFQUFLO1FBQzFCQSxHQUFBLENBQUlTLGVBQUEsR0FBa0IsS0FBS2hILElBQUEsQ0FBS2dILGVBQUE7TUFDcEM7TUFDQSxJQUFJLEtBQUtoSCxJQUFBLENBQUtpSixjQUFBLEVBQWdCO1FBQzFCMUMsR0FBQSxDQUFJMkMsT0FBQSxHQUFVLEtBQUtsSixJQUFBLENBQUtpSixjQUFBO01BQzVCO01BQ0ExQyxHQUFBLENBQUk0QyxrQkFBQSxHQUFxQixNQUFNO1FBQzNCLElBQUlDLEdBQUE7UUFDSixJQUFJN0MsR0FBQSxDQUFJM0QsVUFBQSxLQUFlLEdBQUc7VUFDdEIsQ0FBQ3dHLEdBQUEsR0FBSyxLQUFLcEosSUFBQSxDQUFLaUgsU0FBQSxNQUFlLFFBQVFtQyxHQUFBLEtBQU8sU0FBUyxTQUFTQSxHQUFBLENBQUdDLFlBQUEsQ0FBYTlDLEdBQUc7UUFDdkY7UUFDQSxJQUFJLE1BQU1BLEdBQUEsQ0FBSTNELFVBQUEsRUFDVjtRQUNKLElBQUksUUFBUTJELEdBQUEsQ0FBSStDLE1BQUEsSUFBVSxTQUFTL0MsR0FBQSxDQUFJK0MsTUFBQSxFQUFRO1VBQzNDLEtBQUtDLE1BQUEsQ0FBTztRQUNoQixPQUNLO1VBR0QsS0FBS3JKLFlBQUEsQ0FBYSxNQUFNO1lBQ3BCLEtBQUt1QyxPQUFBLENBQVEsT0FBTzhELEdBQUEsQ0FBSStDLE1BQUEsS0FBVyxXQUFXL0MsR0FBQSxDQUFJK0MsTUFBQSxHQUFTLENBQUM7VUFDaEUsR0FBRyxDQUFDO1FBQ1I7TUFDSjtNQUNBL0MsR0FBQSxDQUFJdEQsSUFBQSxDQUFLLEtBQUtLLElBQUk7SUFDdEIsU0FDT3lDLENBQUEsRUFBUDtNQUlJLEtBQUs3RixZQUFBLENBQWEsTUFBTTtRQUNwQixLQUFLdUMsT0FBQSxDQUFRc0QsQ0FBQztNQUNsQixHQUFHLENBQUM7TUFDSjtJQUNKO0lBQ0EsSUFBSSxPQUFPeUQsUUFBQSxLQUFhLGFBQWE7TUFDakMsS0FBS0MsS0FBQSxHQUFRckIsT0FBQSxDQUFRc0IsYUFBQTtNQUNyQnRCLE9BQUEsQ0FBUXVCLFFBQUEsQ0FBUyxLQUFLRixLQUFBLElBQVM7SUFDbkM7RUFDSjtFQU1BaEgsUUFBUWtELEdBQUEsRUFBSztJQUNULEtBQUtqRCxZQUFBLENBQWEsU0FBU2lELEdBQUEsRUFBSyxLQUFLWSxHQUFHO0lBQ3hDLEtBQUtxRCxPQUFBLENBQVEsSUFBSTtFQUNyQjtFQU1BQSxRQUFRQyxTQUFBLEVBQVc7SUFDZixJQUFJLGdCQUFnQixPQUFPLEtBQUt0RCxHQUFBLElBQU8sU0FBUyxLQUFLQSxHQUFBLEVBQUs7TUFDdEQ7SUFDSjtJQUNBLEtBQUtBLEdBQUEsQ0FBSTRDLGtCQUFBLEdBQXFCOUMsS0FBQTtJQUM5QixJQUFJd0QsU0FBQSxFQUFXO01BQ1gsSUFBSTtRQUNBLEtBQUt0RCxHQUFBLENBQUl1RCxLQUFBLENBQU07TUFDbkIsU0FDTy9ELENBQUEsRUFBUCxDQUFZO0lBQ2hCO0lBQ0EsSUFBSSxPQUFPeUQsUUFBQSxLQUFhLGFBQWE7TUFDakMsT0FBT3BCLE9BQUEsQ0FBUXVCLFFBQUEsQ0FBUyxLQUFLRixLQUFBO0lBQ2pDO0lBQ0EsS0FBS2xELEdBQUEsR0FBTTtFQUNmO0VBTUFnRCxPQUFBLEVBQVM7SUFDTCxNQUFNakcsSUFBQSxHQUFPLEtBQUtpRCxHQUFBLENBQUl3RCxZQUFBO0lBQ3RCLElBQUl6RyxJQUFBLEtBQVMsTUFBTTtNQUNmLEtBQUtaLFlBQUEsQ0FBYSxRQUFRWSxJQUFJO01BQzlCLEtBQUtaLFlBQUEsQ0FBYSxTQUFTO01BQzNCLEtBQUtrSCxPQUFBLENBQVE7SUFDakI7RUFDSjtFQU1BRSxNQUFBLEVBQVE7SUFDSixLQUFLRixPQUFBLENBQVE7RUFDakI7QUFDSjtBQUNBeEIsT0FBQSxDQUFRc0IsYUFBQSxHQUFnQjtBQUN4QnRCLE9BQUEsQ0FBUXVCLFFBQUEsR0FBVyxDQUFDO0FBTXBCLElBQUksT0FBT0gsUUFBQSxLQUFhLGFBQWE7RUFFakMsSUFBSSxPQUFPUSxXQUFBLEtBQWdCLFlBQVk7SUFFbkNBLFdBQUEsQ0FBWSxZQUFZQyxhQUFhO0VBQ3pDLFdBQ1MsT0FBT0MsZ0JBQUEsS0FBcUIsWUFBWTtJQUM3QyxNQUFNQyxnQkFBQSxHQUFtQixnQkFBZ0JsTCxjQUFBLEdBQWEsYUFBYTtJQUNuRWlMLGdCQUFBLENBQWlCQyxnQkFBQSxFQUFrQkYsYUFBQSxFQUFlLEtBQUs7RUFDM0Q7QUFDSjtBQUNBLFNBQVNBLGNBQUEsRUFBZ0I7RUFDckIsU0FBU25KLEVBQUEsSUFBS3NILE9BQUEsQ0FBUXVCLFFBQUEsRUFBVTtJQUM1QixJQUFJdkIsT0FBQSxDQUFRdUIsUUFBQSxDQUFTaEssY0FBQSxDQUFlbUIsRUFBQyxHQUFHO01BQ3BDc0gsT0FBQSxDQUFRdUIsUUFBQSxDQUFTN0ksRUFBQSxFQUFHZ0osS0FBQSxDQUFNO0lBQzlCO0VBQ0o7QUFDSjs7O0FDcFlPLElBQU1yTCxRQUFBLElBQVksTUFBTTtFQUMzQixNQUFNMkwsa0JBQUEsR0FBcUIsT0FBT0MsT0FBQSxLQUFZLGNBQWMsT0FBT0EsT0FBQSxDQUFRQyxPQUFBLEtBQVk7RUFDdkYsSUFBSUYsa0JBQUEsRUFBb0I7SUFDcEIsT0FBUUcsRUFBQSxJQUFPRixPQUFBLENBQVFDLE9BQUEsQ0FBUSxFQUFFRSxJQUFBLENBQUtELEVBQUU7RUFDNUMsT0FDSztJQUNELE9BQU8sQ0FBQ0EsRUFBQSxFQUFJckssWUFBQSxLQUFpQkEsWUFBQSxDQUFhcUssRUFBQSxFQUFJLENBQUM7RUFDbkQ7QUFDSixHQUFHO0FBQ0ksSUFBTUUsU0FBQSxHQUFZeEwsY0FBQSxDQUFXd0wsU0FBQSxJQUFheEwsY0FBQSxDQUFXeUwsWUFBQTtBQUNyRCxJQUFNQyxxQkFBQSxHQUF3QjtBQUM5QixJQUFNQyxpQkFBQSxHQUFvQjs7O0FDUmpDLElBQUFDLGNBQUEsR0FBNkJqSixPQUFBO0FBRTdCLElBQU1rSixhQUFBLEdBQWdCLE9BQU9DLFNBQUEsS0FBYyxlQUN2QyxPQUFPQSxTQUFBLENBQVVDLE9BQUEsS0FBWSxZQUM3QkQsU0FBQSxDQUFVQyxPQUFBLENBQVFDLFdBQUEsQ0FBWSxNQUFNO0FBQ2pDLElBQU1DLEVBQUEsR0FBTixjQUFpQjNNLFNBQUEsQ0FBVTtFQU85QnlELFlBQVloQyxJQUFBLEVBQU07SUFDZCxNQUFNQSxJQUFJO0lBQ1YsS0FBSytHLGNBQUEsR0FBaUIsQ0FBQy9HLElBQUEsQ0FBSzhHLFdBQUE7RUFDaEM7RUFDQSxJQUFJSSxLQUFBLEVBQU87SUFDUCxPQUFPO0VBQ1g7RUFDQXJFLE9BQUEsRUFBUztJQUNMLElBQUksQ0FBQyxLQUFLc0ksS0FBQSxDQUFNLEdBQUc7TUFFZjtJQUNKO0lBQ0EsTUFBTXZELEdBQUEsR0FBTSxLQUFLQSxHQUFBLENBQUk7SUFDckIsTUFBTXdELFNBQUEsR0FBWSxLQUFLcEwsSUFBQSxDQUFLb0wsU0FBQTtJQUU1QixNQUFNcEwsSUFBQSxHQUFPOEssYUFBQSxHQUNQLENBQUMsSUFDRHpMLElBQUEsQ0FBSyxLQUFLVyxJQUFBLEVBQU0sU0FBUyxxQkFBcUIsT0FBTyxPQUFPLGNBQWMsUUFBUSxNQUFNLFdBQVcsc0JBQXNCLGdCQUFnQixtQkFBbUIsVUFBVSxjQUFjLFVBQVUscUJBQXFCO0lBQ3pOLElBQUksS0FBS0EsSUFBQSxDQUFLNkksWUFBQSxFQUFjO01BQ3hCN0ksSUFBQSxDQUFLcUwsT0FBQSxHQUFVLEtBQUtyTCxJQUFBLENBQUs2SSxZQUFBO0lBQzdCO0lBQ0EsSUFBSTtNQUNBLEtBQUt5QyxFQUFBLEdBQ0RYLHFCQUFBLElBQXlCLENBQUNHLGFBQUEsR0FDcEJNLFNBQUEsR0FDSSxJQUFJWCxTQUFBLENBQVU3QyxHQUFBLEVBQUt3RCxTQUFTLElBQzVCLElBQUlYLFNBQUEsQ0FBVTdDLEdBQUcsSUFDckIsSUFBSTZDLFNBQUEsQ0FBVTdDLEdBQUEsRUFBS3dELFNBQUEsRUFBV3BMLElBQUk7SUFDaEQsU0FDTzJGLEdBQUEsRUFBUDtNQUNJLE9BQU8sS0FBS2pELFlBQUEsQ0FBYSxTQUFTaUQsR0FBRztJQUN6QztJQUNBLEtBQUsyRixFQUFBLENBQUc3SCxVQUFBLEdBQWEsS0FBS2pCLE1BQUEsQ0FBT2lCLFVBQUE7SUFDakMsS0FBSzhILGlCQUFBLENBQWtCO0VBQzNCO0VBTUFBLGtCQUFBLEVBQW9CO0lBQ2hCLEtBQUtELEVBQUEsQ0FBR0UsTUFBQSxHQUFTLE1BQU07TUFDbkIsSUFBSSxLQUFLeEwsSUFBQSxDQUFLeUwsU0FBQSxFQUFXO1FBQ3JCLEtBQUtILEVBQUEsQ0FBR0ksT0FBQSxDQUFRQyxLQUFBLENBQU07TUFDMUI7TUFDQSxLQUFLdkksTUFBQSxDQUFPO0lBQ2hCO0lBQ0EsS0FBS2tJLEVBQUEsQ0FBR00sT0FBQSxHQUFXQyxVQUFBLElBQWUsS0FBSzdJLE9BQUEsQ0FBUTtNQUMzQ2QsV0FBQSxFQUFhO01BQ2JDLE9BQUEsRUFBUzBKO0lBQ2IsQ0FBQztJQUNELEtBQUtQLEVBQUEsQ0FBR1EsU0FBQSxHQUFhQyxFQUFBLElBQU8sS0FBSzFJLE1BQUEsQ0FBTzBJLEVBQUEsQ0FBR3pJLElBQUk7SUFDL0MsS0FBS2dJLEVBQUEsQ0FBR1UsT0FBQSxHQUFXakcsQ0FBQSxJQUFNLEtBQUt0RCxPQUFBLENBQVEsbUJBQW1Cc0QsQ0FBQztFQUM5RDtFQUNBNUMsTUFBTUQsT0FBQSxFQUFTO0lBQ1gsS0FBS1osUUFBQSxHQUFXO0lBR2hCLFNBQVN4QixFQUFBLEdBQUksR0FBR0EsRUFBQSxHQUFJb0MsT0FBQSxDQUFRbEMsTUFBQSxFQUFRRixFQUFBLElBQUs7TUFDckMsTUFBTXlDLE1BQUEsR0FBU0wsT0FBQSxDQUFRcEMsRUFBQTtNQUN2QixNQUFNbUwsVUFBQSxHQUFhbkwsRUFBQSxLQUFNb0MsT0FBQSxDQUFRbEMsTUFBQSxHQUFTO01BQzFDLElBQUE2SixjQUFBLENBQUFxQixZQUFBLEVBQWEzSSxNQUFBLEVBQVEsS0FBS3dELGNBQUEsRUFBaUJ6RCxJQUFBLElBQVM7UUFFaEQsTUFBTXRELElBQUEsR0FBTyxDQUFDO1FBQ2QsSUFBSSxDQUFDMksscUJBQUEsRUFBdUI7VUFDeEIsSUFBSXBILE1BQUEsQ0FBTzRJLE9BQUEsRUFBUztZQUNoQm5NLElBQUEsQ0FBS29NLFFBQUEsR0FBVzdJLE1BQUEsQ0FBTzRJLE9BQUEsQ0FBUUMsUUFBQTtVQUNuQztVQUNBLElBQUksS0FBS3BNLElBQUEsQ0FBS3FNLGlCQUFBLEVBQW1CO1lBQzdCLE1BQU1DLEdBQUEsR0FFTixhQUFhLE9BQU9oSixJQUFBLEdBQU9pSixNQUFBLENBQU9qTSxVQUFBLENBQVdnRCxJQUFJLElBQUlBLElBQUEsQ0FBS3RDLE1BQUE7WUFDMUQsSUFBSXNMLEdBQUEsR0FBTSxLQUFLdE0sSUFBQSxDQUFLcU0saUJBQUEsQ0FBa0JHLFNBQUEsRUFBVztjQUM3Q3hNLElBQUEsQ0FBS29NLFFBQUEsR0FBVztZQUNwQjtVQUNKO1FBQ0o7UUFJQSxJQUFJO1VBQ0EsSUFBSXpCLHFCQUFBLEVBQXVCO1lBRXZCLEtBQUtXLEVBQUEsQ0FBR3JJLElBQUEsQ0FBS0ssSUFBSTtVQUNyQixPQUNLO1lBQ0QsS0FBS2dJLEVBQUEsQ0FBR3JJLElBQUEsQ0FBS0ssSUFBQSxFQUFNdEQsSUFBSTtVQUMzQjtRQUNKLFNBQ08rRixDQUFBLEVBQVAsQ0FDQTtRQUNBLElBQUlrRyxVQUFBLEVBQVk7VUFHWnhOLFFBQUEsQ0FBUyxNQUFNO1lBQ1gsS0FBSzZELFFBQUEsR0FBVztZQUNoQixLQUFLSSxZQUFBLENBQWEsT0FBTztVQUM3QixHQUFHLEtBQUt4QyxZQUFZO1FBQ3hCO01BQ0osQ0FBQztJQUNMO0VBQ0o7RUFDQTZDLFFBQUEsRUFBVTtJQUNOLElBQUksT0FBTyxLQUFLdUksRUFBQSxLQUFPLGFBQWE7TUFDaEMsS0FBS0EsRUFBQSxDQUFHeEksS0FBQSxDQUFNO01BQ2QsS0FBS3dJLEVBQUEsR0FBSztJQUNkO0VBQ0o7RUFNQTFELElBQUEsRUFBTTtJQUNGLE1BQU03RCxNQUFBLEdBQVMsS0FBSy9ELElBQUEsQ0FBS3VFLE1BQUEsR0FBUyxRQUFRO0lBQzFDLE1BQU1oQyxLQUFBLEdBQVEsS0FBS0EsS0FBQSxJQUFTLENBQUM7SUFFN0IsSUFBSSxLQUFLdkMsSUFBQSxDQUFLNkgsaUJBQUEsRUFBbUI7TUFDN0J0RixLQUFBLENBQU0sS0FBS3ZDLElBQUEsQ0FBSzhILGNBQUEsSUFBa0J4QyxLQUFBLENBQU07SUFDNUM7SUFFQSxJQUFJLENBQUMsS0FBS3lCLGNBQUEsRUFBZ0I7TUFDdEJ4RSxLQUFBLENBQU15RixHQUFBLEdBQU07SUFDaEI7SUFDQSxPQUFPLEtBQUtsRSxTQUFBLENBQVVDLE1BQUEsRUFBUXhCLEtBQUs7RUFDdkM7RUFPQTRJLE1BQUEsRUFBUTtJQUNKLE9BQU8sQ0FBQyxDQUFDVixTQUFBO0VBQ2I7QUFDSjs7O0FDckpBLElBQUFnQyxjQUFBLEdBQXNFN0ssT0FBQTtBQUMvRCxJQUFNOEssRUFBQSxHQUFOLGNBQWlCbk8sU0FBQSxDQUFVO0VBQzlCLElBQUkySSxLQUFBLEVBQU87SUFDUCxPQUFPO0VBQ1g7RUFDQXJFLE9BQUEsRUFBUztJQUVMLElBQUksT0FBTzhKLFlBQUEsS0FBaUIsWUFBWTtNQUNwQztJQUNKO0lBRUEsS0FBS0MsU0FBQSxHQUFZLElBQUlELFlBQUEsQ0FBYSxLQUFLN0ksU0FBQSxDQUFVLE9BQU8sR0FBRyxLQUFLOUQsSUFBQSxDQUFLNk0sZ0JBQUEsQ0FBaUIsS0FBSzNGLElBQUEsQ0FBSztJQUNoRyxLQUFLMEYsU0FBQSxDQUFVRSxNQUFBLENBQ1Z0QyxJQUFBLENBQUssTUFBTTtNQUNaLEtBQUt4SCxPQUFBLENBQVE7SUFDakIsQ0FBQyxFQUNJK0osS0FBQSxDQUFPcEgsR0FBQSxJQUFRO01BQ2hCLEtBQUtsRCxPQUFBLENBQVEsc0JBQXNCa0QsR0FBRztJQUMxQyxDQUFDO0lBRUQsS0FBS2lILFNBQUEsQ0FBVUksS0FBQSxDQUFNeEMsSUFBQSxDQUFLLE1BQU07TUFDNUIsS0FBS29DLFNBQUEsQ0FBVUsseUJBQUEsQ0FBMEIsRUFBRXpDLElBQUEsQ0FBTTBDLE1BQUEsSUFBVztRQUN4RCxNQUFNQyxhQUFBLE9BQWdCVixjQUFBLENBQUFXLHlCQUFBLEVBQTBCNUksTUFBQSxDQUFPNkksZ0JBQUEsRUFBa0IsS0FBSzdLLE1BQUEsQ0FBT2lCLFVBQVU7UUFDL0YsTUFBTTZKLE1BQUEsR0FBU0osTUFBQSxDQUFPSyxRQUFBLENBQVNDLFdBQUEsQ0FBWUwsYUFBYSxFQUFFTSxTQUFBLENBQVU7UUFDcEUsTUFBTUMsYUFBQSxPQUFnQmpCLGNBQUEsQ0FBQWtCLHlCQUFBLEVBQTBCO1FBQ2hERCxhQUFBLENBQWNILFFBQUEsQ0FBU0ssTUFBQSxDQUFPVixNQUFBLENBQU81SyxRQUFRO1FBQzdDLEtBQUt1TCxNQUFBLEdBQVNILGFBQUEsQ0FBY3BMLFFBQUEsQ0FBU3dMLFNBQUEsQ0FBVTtRQUMvQyxNQUFNQyxJQUFBLEdBQU9BLENBQUEsS0FBTTtVQUNmVCxNQUFBLENBQ0tTLElBQUEsQ0FBSyxFQUNMdkQsSUFBQSxDQUFLLENBQUM7WUFBRXdELElBQUE7WUFBTXZJLEtBQUEsRUFBQXdJO1VBQU0sTUFBTTtZQUMzQixJQUFJRCxJQUFBLEVBQU07Y0FDTjtZQUNKO1lBQ0EsS0FBS3RLLFFBQUEsQ0FBU3VLLE1BQUs7WUFDbkJGLElBQUEsQ0FBSztVQUNULENBQUMsRUFDSWhCLEtBQUEsQ0FBT3BILEdBQUEsSUFBUSxDQUNwQixDQUFDO1FBQ0w7UUFDQW9JLElBQUEsQ0FBSztRQUNMLE1BQU14SyxNQUFBLEdBQVM7VUFBRW5CLElBQUEsRUFBTTtRQUFPO1FBQzlCLElBQUksS0FBS0csS0FBQSxDQUFNd0YsR0FBQSxFQUFLO1VBQ2hCeEUsTUFBQSxDQUFPRCxJQUFBLEdBQU8sV0FBVyxLQUFLZixLQUFBLENBQU13RixHQUFBO1FBQ3hDO1FBQ0EsS0FBSzhGLE1BQUEsQ0FBTzFLLEtBQUEsQ0FBTUksTUFBTSxFQUFFaUgsSUFBQSxDQUFLLE1BQU0sS0FBS3BILE1BQUEsQ0FBTyxDQUFDO01BQ3RELENBQUM7SUFDTCxDQUFDO0VBQ0w7RUFDQUQsTUFBTUQsT0FBQSxFQUFTO0lBQ1gsS0FBS1osUUFBQSxHQUFXO0lBQ2hCLFNBQVN4QixFQUFBLEdBQUksR0FBR0EsRUFBQSxHQUFJb0MsT0FBQSxDQUFRbEMsTUFBQSxFQUFRRixFQUFBLElBQUs7TUFDckMsTUFBTXlDLE1BQUEsR0FBU0wsT0FBQSxDQUFRcEMsRUFBQTtNQUN2QixNQUFNbUwsVUFBQSxHQUFhbkwsRUFBQSxLQUFNb0MsT0FBQSxDQUFRbEMsTUFBQSxHQUFTO01BQzFDLEtBQUs2TSxNQUFBLENBQU8xSyxLQUFBLENBQU1JLE1BQU0sRUFBRWlILElBQUEsQ0FBSyxNQUFNO1FBQ2pDLElBQUl5QixVQUFBLEVBQVk7VUFDWnhOLFFBQUEsQ0FBUyxNQUFNO1lBQ1gsS0FBSzZELFFBQUEsR0FBVztZQUNoQixLQUFLSSxZQUFBLENBQWEsT0FBTztVQUM3QixHQUFHLEtBQUt4QyxZQUFZO1FBQ3hCO01BQ0osQ0FBQztJQUNMO0VBQ0o7RUFDQTZDLFFBQUEsRUFBVTtJQUNOLElBQUk2RixFQUFBO0lBQ0osQ0FBQ0EsRUFBQSxHQUFLLEtBQUtnRSxTQUFBLE1BQWUsUUFBUWhFLEVBQUEsS0FBTyxTQUFTLFNBQVNBLEVBQUEsQ0FBRzlGLEtBQUEsQ0FBTTtFQUN4RTtBQUNKOzs7QUNuRU8sSUFBTWpFLFVBQUEsR0FBYTtFQUN0QnFQLFNBQUEsRUFBV2hELEVBQUE7RUFDWGlELFlBQUEsRUFBY3pCLEVBQUE7RUFDZGhHLE9BQUEsRUFBU0Q7QUFDYjs7O0FDWUEsSUFBTTJILEVBQUEsR0FBSztBQUNYLElBQU1DLEtBQUEsR0FBUSxDQUNWLFVBQVUsWUFBWSxhQUFhLFlBQVksUUFBUSxZQUFZLFFBQVEsUUFBUSxZQUFZLFFBQVEsYUFBYSxRQUFRLFNBQVMsU0FDekk7QUFDTyxTQUFTM1AsTUFBTWlDLEdBQUEsRUFBSztFQUN2QixNQUFNMk4sR0FBQSxHQUFNM04sR0FBQTtJQUFLNE4sQ0FBQSxHQUFJNU4sR0FBQSxDQUFJMEQsT0FBQSxDQUFRLEdBQUc7SUFBRzBCLENBQUEsR0FBSXBGLEdBQUEsQ0FBSTBELE9BQUEsQ0FBUSxHQUFHO0VBQzFELElBQUlrSyxDQUFBLElBQUssTUFBTXhJLENBQUEsSUFBSyxJQUFJO0lBQ3BCcEYsR0FBQSxHQUFNQSxHQUFBLENBQUk2TixTQUFBLENBQVUsR0FBR0QsQ0FBQyxJQUFJNU4sR0FBQSxDQUFJNk4sU0FBQSxDQUFVRCxDQUFBLEVBQUd4SSxDQUFDLEVBQUUwSSxPQUFBLENBQVEsTUFBTSxHQUFHLElBQUk5TixHQUFBLENBQUk2TixTQUFBLENBQVV6SSxDQUFBLEVBQUdwRixHQUFBLENBQUlLLE1BQU07RUFDcEc7RUFDQSxJQUFJME4sQ0FBQSxHQUFJTixFQUFBLENBQUdPLElBQUEsQ0FBS2hPLEdBQUEsSUFBTyxFQUFFO0lBQUdpSCxHQUFBLEdBQU0sQ0FBQztJQUFHOUcsRUFBQSxHQUFJO0VBQzFDLE9BQU9BLEVBQUEsSUFBSztJQUNSOEcsR0FBQSxDQUFJeUcsS0FBQSxDQUFNdk4sRUFBQSxLQUFNNE4sQ0FBQSxDQUFFNU4sRUFBQSxLQUFNO0VBQzVCO0VBQ0EsSUFBSXlOLENBQUEsSUFBSyxNQUFNeEksQ0FBQSxJQUFLLElBQUk7SUFDcEI2QixHQUFBLENBQUlnSCxNQUFBLEdBQVNOLEdBQUE7SUFDYjFHLEdBQUEsQ0FBSWlILElBQUEsR0FBT2pILEdBQUEsQ0FBSWlILElBQUEsQ0FBS0wsU0FBQSxDQUFVLEdBQUc1RyxHQUFBLENBQUlpSCxJQUFBLENBQUs3TixNQUFBLEdBQVMsQ0FBQyxFQUFFeU4sT0FBQSxDQUFRLE1BQU0sR0FBRztJQUN2RTdHLEdBQUEsQ0FBSWtILFNBQUEsR0FBWWxILEdBQUEsQ0FBSWtILFNBQUEsQ0FBVUwsT0FBQSxDQUFRLEtBQUssRUFBRSxFQUFFQSxPQUFBLENBQVEsS0FBSyxFQUFFLEVBQUVBLE9BQUEsQ0FBUSxNQUFNLEdBQUc7SUFDakY3RyxHQUFBLENBQUltSCxPQUFBLEdBQVU7RUFDbEI7RUFDQW5ILEdBQUEsQ0FBSW9ILFNBQUEsR0FBWUEsU0FBQSxDQUFVcEgsR0FBQSxFQUFLQSxHQUFBLENBQUksT0FBTztFQUMxQ0EsR0FBQSxDQUFJcUgsUUFBQSxHQUFXQSxRQUFBLENBQVNySCxHQUFBLEVBQUtBLEdBQUEsQ0FBSSxRQUFRO0VBQ3pDLE9BQU9BLEdBQUE7QUFDWDtBQUNBLFNBQVNvSCxVQUFVMVAsR0FBQSxFQUFLNEUsSUFBQSxFQUFNO0VBQzFCLE1BQU1nTCxJQUFBLEdBQU87SUFBWUMsS0FBQSxHQUFRakwsSUFBQSxDQUFLdUssT0FBQSxDQUFRUyxJQUFBLEVBQU0sR0FBRyxFQUFFMU4sS0FBQSxDQUFNLEdBQUc7RUFDbEUsSUFBSTBDLElBQUEsQ0FBS2tMLEtBQUEsQ0FBTSxHQUFHLENBQUMsS0FBSyxPQUFPbEwsSUFBQSxDQUFLbEQsTUFBQSxLQUFXLEdBQUc7SUFDOUNtTyxLQUFBLENBQU1FLE1BQUEsQ0FBTyxHQUFHLENBQUM7RUFDckI7RUFDQSxJQUFJbkwsSUFBQSxDQUFLa0wsS0FBQSxDQUFNLEVBQUUsS0FBSyxLQUFLO0lBQ3ZCRCxLQUFBLENBQU1FLE1BQUEsQ0FBT0YsS0FBQSxDQUFNbk8sTUFBQSxHQUFTLEdBQUcsQ0FBQztFQUNwQztFQUNBLE9BQU9tTyxLQUFBO0FBQ1g7QUFDQSxTQUFTRixTQUFTckgsR0FBQSxFQUFLckYsS0FBQSxFQUFPO0VBQzFCLE1BQU1lLElBQUEsR0FBTyxDQUFDO0VBQ2RmLEtBQUEsQ0FBTWtNLE9BQUEsQ0FBUSw2QkFBNkIsVUFBVWEsRUFBQSxFQUFJQyxFQUFBLEVBQUlDLEVBQUEsRUFBSTtJQUM3RCxJQUFJRCxFQUFBLEVBQUk7TUFDSmpNLElBQUEsQ0FBS2lNLEVBQUEsSUFBTUMsRUFBQTtJQUNmO0VBQ0osQ0FBQztFQUNELE9BQU9sTSxJQUFBO0FBQ1g7OztBQ3hEQSxJQUFBbU0seUJBQUEsR0FBd0I3TixPQUFBO0FBQ3hCLElBQUE4TixjQUFBLEdBQXlCOU4sT0FBQTtBQUVsQixJQUFNdEQsTUFBQSxHQUFOLGNBQXFCbVIseUJBQUEsQ0FBQXBOLE9BQUEsQ0FBUTtFQU9oQ0wsWUFBWTRGLEdBQUEsRUFBSzVILElBQUEsR0FBTyxDQUFDLEdBQUc7SUFDeEIsTUFBTTtJQUNOLEtBQUt5RCxVQUFBLEdBQWFtSCxpQkFBQTtJQUNsQixLQUFLK0UsV0FBQSxHQUFjLEVBQUM7SUFDcEIsSUFBSS9ILEdBQUEsSUFBTyxhQUFhLE9BQU9BLEdBQUEsRUFBSztNQUNoQzVILElBQUEsR0FBTzRILEdBQUE7TUFDUEEsR0FBQSxHQUFNO0lBQ1Y7SUFDQSxJQUFJQSxHQUFBLEVBQUs7TUFDTEEsR0FBQSxHQUFNbEosS0FBQSxDQUFNa0osR0FBRztNQUNmNUgsSUFBQSxDQUFLb0UsUUFBQSxHQUFXd0QsR0FBQSxDQUFJaUgsSUFBQTtNQUNwQjdPLElBQUEsQ0FBS3VFLE1BQUEsR0FBU3FELEdBQUEsQ0FBSWpKLFFBQUEsS0FBYSxXQUFXaUosR0FBQSxDQUFJakosUUFBQSxLQUFhO01BQzNEcUIsSUFBQSxDQUFLc0UsSUFBQSxHQUFPc0QsR0FBQSxDQUFJdEQsSUFBQTtNQUNoQixJQUFJc0QsR0FBQSxDQUFJckYsS0FBQSxFQUNKdkMsSUFBQSxDQUFLdUMsS0FBQSxHQUFRcUYsR0FBQSxDQUFJckYsS0FBQTtJQUN6QixXQUNTdkMsSUFBQSxDQUFLNk8sSUFBQSxFQUFNO01BQ2hCN08sSUFBQSxDQUFLb0UsUUFBQSxHQUFXMUYsS0FBQSxDQUFNc0IsSUFBQSxDQUFLNk8sSUFBSSxFQUFFQSxJQUFBO0lBQ3JDO0lBQ0FyUSxxQkFBQSxDQUFzQixNQUFNd0IsSUFBSTtJQUNoQyxLQUFLdUUsTUFBQSxHQUNELFFBQVF2RSxJQUFBLENBQUt1RSxNQUFBLEdBQ1B2RSxJQUFBLENBQUt1RSxNQUFBLEdBQ0wsT0FBT29DLFFBQUEsS0FBYSxlQUFlLGFBQWFBLFFBQUEsQ0FBU2hJLFFBQUE7SUFDbkUsSUFBSXFCLElBQUEsQ0FBS29FLFFBQUEsSUFBWSxDQUFDcEUsSUFBQSxDQUFLc0UsSUFBQSxFQUFNO01BRTdCdEUsSUFBQSxDQUFLc0UsSUFBQSxHQUFPLEtBQUtDLE1BQUEsR0FBUyxRQUFRO0lBQ3RDO0lBQ0EsS0FBS0gsUUFBQSxHQUNEcEUsSUFBQSxDQUFLb0UsUUFBQSxLQUNBLE9BQU91QyxRQUFBLEtBQWEsY0FBY0EsUUFBQSxDQUFTdkMsUUFBQSxHQUFXO0lBQy9ELEtBQUtFLElBQUEsR0FDRHRFLElBQUEsQ0FBS3NFLElBQUEsS0FDQSxPQUFPcUMsUUFBQSxLQUFhLGVBQWVBLFFBQUEsQ0FBU3JDLElBQUEsR0FDdkNxQyxRQUFBLENBQVNyQyxJQUFBLEdBQ1QsS0FBS0MsTUFBQSxHQUNELFFBQ0E7SUFDbEIsS0FBSzFGLFVBQUEsR0FBYW1CLElBQUEsQ0FBS25CLFVBQUEsSUFBYyxDQUNqQyxXQUNBLGFBQ0EsZUFDSjtJQUNBLEtBQUs4USxXQUFBLEdBQWMsRUFBQztJQUNwQixLQUFLQyxhQUFBLEdBQWdCO0lBQ3JCLEtBQUs1UCxJQUFBLEdBQU9rSSxNQUFBLENBQU9DLE1BQUEsQ0FBTztNQUN0QmpFLElBQUEsRUFBTTtNQUNOMkwsS0FBQSxFQUFPO01BQ1A3SSxlQUFBLEVBQWlCO01BQ2pCOEksT0FBQSxFQUFTO01BQ1RoSSxjQUFBLEVBQWdCO01BQ2hCaUksZUFBQSxFQUFpQjtNQUNqQkMsZ0JBQUEsRUFBa0I7TUFDbEJDLGtCQUFBLEVBQW9CO01BQ3BCNUQsaUJBQUEsRUFBbUI7UUFDZkcsU0FBQSxFQUFXO01BQ2Y7TUFDQUssZ0JBQUEsRUFBa0IsQ0FBQztNQUNuQnFELG1CQUFBLEVBQXFCO0lBQ3pCLEdBQUdsUSxJQUFJO0lBQ1AsS0FBS0EsSUFBQSxDQUFLa0UsSUFBQSxHQUNOLEtBQUtsRSxJQUFBLENBQUtrRSxJQUFBLENBQUt1SyxPQUFBLENBQVEsT0FBTyxFQUFFLEtBQzNCLEtBQUt6TyxJQUFBLENBQUtnUSxnQkFBQSxHQUFtQixNQUFNO0lBQzVDLElBQUksT0FBTyxLQUFLaFEsSUFBQSxDQUFLdUMsS0FBQSxLQUFVLFVBQVU7TUFDckMsS0FBS3ZDLElBQUEsQ0FBS3VDLEtBQUEsR0FBUW5CLE1BQUEsQ0FBTyxLQUFLcEIsSUFBQSxDQUFLdUMsS0FBSztJQUM1QztJQUVBLEtBQUs0TixFQUFBLEdBQUs7SUFDVixLQUFLQyxRQUFBLEdBQVc7SUFDaEIsS0FBS0MsWUFBQSxHQUFlO0lBQ3BCLEtBQUtDLFdBQUEsR0FBYztJQUVuQixLQUFLQyxnQkFBQSxHQUFtQjtJQUN4QixJQUFJLE9BQU9yRyxnQkFBQSxLQUFxQixZQUFZO01BQ3hDLElBQUksS0FBS2xLLElBQUEsQ0FBS2tRLG1CQUFBLEVBQXFCO1FBSS9CLEtBQUtNLHlCQUFBLEdBQTRCLE1BQU07VUFDbkMsSUFBSSxLQUFLNUQsU0FBQSxFQUFXO1lBRWhCLEtBQUtBLFNBQUEsQ0FBVTZELGtCQUFBLENBQW1CO1lBQ2xDLEtBQUs3RCxTQUFBLENBQVU5SixLQUFBLENBQU07VUFDekI7UUFDSjtRQUNBb0gsZ0JBQUEsQ0FBaUIsZ0JBQWdCLEtBQUtzRyx5QkFBQSxFQUEyQixLQUFLO01BQzFFO01BQ0EsSUFBSSxLQUFLcE0sUUFBQSxLQUFhLGFBQWE7UUFDL0IsS0FBS3NNLG9CQUFBLEdBQXVCLE1BQU07VUFDOUIsS0FBSzFOLE9BQUEsQ0FBUSxtQkFBbUI7WUFDNUJkLFdBQUEsRUFBYTtVQUNqQixDQUFDO1FBQ0w7UUFDQWdJLGdCQUFBLENBQWlCLFdBQVcsS0FBS3dHLG9CQUFBLEVBQXNCLEtBQUs7TUFDaEU7SUFDSjtJQUNBLEtBQUsvTixJQUFBLENBQUs7RUFDZDtFQVFBZ08sZ0JBQWdCekosSUFBQSxFQUFNO0lBQ2xCLE1BQU0zRSxLQUFBLEdBQVEyRixNQUFBLENBQU9DLE1BQUEsQ0FBTyxDQUFDLEdBQUcsS0FBS25JLElBQUEsQ0FBS3VDLEtBQUs7SUFFL0NBLEtBQUEsQ0FBTXFPLEdBQUEsR0FBTWxCLGNBQUEsQ0FBQS9RLFFBQUE7SUFFWjRELEtBQUEsQ0FBTXFLLFNBQUEsR0FBWTFGLElBQUE7SUFFbEIsSUFBSSxLQUFLaUosRUFBQSxFQUNMNU4sS0FBQSxDQUFNd0YsR0FBQSxHQUFNLEtBQUtvSSxFQUFBO0lBQ3JCLE1BQU1uUSxJQUFBLEdBQU9rSSxNQUFBLENBQU9DLE1BQUEsQ0FBTyxDQUFDLEdBQUcsS0FBS25JLElBQUEsRUFBTTtNQUN0Q3VDLEtBQUE7TUFDQUMsTUFBQSxFQUFRO01BQ1I0QixRQUFBLEVBQVUsS0FBS0EsUUFBQTtNQUNmRyxNQUFBLEVBQVEsS0FBS0EsTUFBQTtNQUNiRCxJQUFBLEVBQU0sS0FBS0E7SUFDZixHQUFHLEtBQUt0RSxJQUFBLENBQUs2TSxnQkFBQSxDQUFpQjNGLElBQUEsQ0FBSztJQUNuQyxPQUFPLElBQUlySSxVQUFBLENBQVdxSSxJQUFBLEVBQU1sSCxJQUFJO0VBQ3BDO0VBTUEyQyxLQUFBLEVBQU87SUFDSCxJQUFJaUssU0FBQTtJQUNKLElBQUksS0FBSzVNLElBQUEsQ0FBSytQLGVBQUEsSUFDVnpSLE1BQUEsQ0FBT3VTLHFCQUFBLElBQ1AsS0FBS2hTLFVBQUEsQ0FBV3dGLE9BQUEsQ0FBUSxXQUFXLE1BQU0sSUFBSTtNQUM3Q3VJLFNBQUEsR0FBWTtJQUNoQixXQUNTLE1BQU0sS0FBSy9OLFVBQUEsQ0FBV21DLE1BQUEsRUFBUTtNQUVuQyxLQUFLZCxZQUFBLENBQWEsTUFBTTtRQUNwQixLQUFLd0MsWUFBQSxDQUFhLFNBQVMseUJBQXlCO01BQ3hELEdBQUcsQ0FBQztNQUNKO0lBQ0osT0FDSztNQUNEa0ssU0FBQSxHQUFZLEtBQUsvTixVQUFBLENBQVc7SUFDaEM7SUFDQSxLQUFLK0QsVUFBQSxHQUFhO0lBRWxCLElBQUk7TUFDQWdLLFNBQUEsR0FBWSxLQUFLK0QsZUFBQSxDQUFnQi9ELFNBQVM7SUFDOUMsU0FDTzdHLENBQUEsRUFBUDtNQUNJLEtBQUtsSCxVQUFBLENBQVdpUyxLQUFBLENBQU07TUFDdEIsS0FBS25PLElBQUEsQ0FBSztNQUNWO0lBQ0o7SUFDQWlLLFNBQUEsQ0FBVWpLLElBQUEsQ0FBSztJQUNmLEtBQUtvTyxZQUFBLENBQWFuRSxTQUFTO0VBQy9CO0VBTUFtRSxhQUFhbkUsU0FBQSxFQUFXO0lBQ3BCLElBQUksS0FBS0EsU0FBQSxFQUFXO01BQ2hCLEtBQUtBLFNBQUEsQ0FBVTZELGtCQUFBLENBQW1CO0lBQ3RDO0lBRUEsS0FBSzdELFNBQUEsR0FBWUEsU0FBQTtJQUVqQkEsU0FBQSxDQUNLcEUsRUFBQSxDQUFHLFNBQVMsS0FBS3dJLE9BQUEsQ0FBUTdRLElBQUEsQ0FBSyxJQUFJLENBQUMsRUFDbkNxSSxFQUFBLENBQUcsVUFBVSxLQUFLOUUsUUFBQSxDQUFTdkQsSUFBQSxDQUFLLElBQUksQ0FBQyxFQUNyQ3FJLEVBQUEsQ0FBRyxTQUFTLEtBQUsvRixPQUFBLENBQVF0QyxJQUFBLENBQUssSUFBSSxDQUFDLEVBQ25DcUksRUFBQSxDQUFHLFNBQVV2RyxNQUFBLElBQVcsS0FBS2UsT0FBQSxDQUFRLG1CQUFtQmYsTUFBTSxDQUFDO0VBQ3hFO0VBT0FnUCxNQUFNL0osSUFBQSxFQUFNO0lBQ1IsSUFBSTBGLFNBQUEsR0FBWSxLQUFLK0QsZUFBQSxDQUFnQnpKLElBQUk7SUFDekMsSUFBSWdLLE1BQUEsR0FBUztJQUNiNVMsTUFBQSxDQUFPdVMscUJBQUEsR0FBd0I7SUFDL0IsTUFBTU0sZUFBQSxHQUFrQkEsQ0FBQSxLQUFNO01BQzFCLElBQUlELE1BQUEsRUFDQTtNQUNKdEUsU0FBQSxDQUFVM0osSUFBQSxDQUFLLENBQUM7UUFBRWIsSUFBQSxFQUFNO1FBQVFrQixJQUFBLEVBQU07TUFBUSxDQUFDLENBQUM7TUFDaERzSixTQUFBLENBQVV2RixJQUFBLENBQUssVUFBVytKLEdBQUEsSUFBUTtRQUM5QixJQUFJRixNQUFBLEVBQ0E7UUFDSixJQUFJLFdBQVdFLEdBQUEsQ0FBSWhQLElBQUEsSUFBUSxZQUFZZ1AsR0FBQSxDQUFJOU4sSUFBQSxFQUFNO1VBQzdDLEtBQUsrTixTQUFBLEdBQVk7VUFDakIsS0FBSzNPLFlBQUEsQ0FBYSxhQUFha0ssU0FBUztVQUN4QyxJQUFJLENBQUNBLFNBQUEsRUFDRDtVQUNKdE8sTUFBQSxDQUFPdVMscUJBQUEsR0FBd0IsZ0JBQWdCakUsU0FBQSxDQUFVMUYsSUFBQTtVQUN6RCxLQUFLMEYsU0FBQSxDQUFVaEosS0FBQSxDQUFNLE1BQU07WUFDdkIsSUFBSXNOLE1BQUEsRUFDQTtZQUNKLElBQUksYUFBYSxLQUFLdE8sVUFBQSxFQUNsQjtZQUNKZ0gsT0FBQSxDQUFRO1lBQ1IsS0FBS21ILFlBQUEsQ0FBYW5FLFNBQVM7WUFDM0JBLFNBQUEsQ0FBVTNKLElBQUEsQ0FBSyxDQUFDO2NBQUViLElBQUEsRUFBTTtZQUFVLENBQUMsQ0FBQztZQUNwQyxLQUFLTSxZQUFBLENBQWEsV0FBV2tLLFNBQVM7WUFDdENBLFNBQUEsR0FBWTtZQUNaLEtBQUt5RSxTQUFBLEdBQVk7WUFDakIsS0FBS0MsS0FBQSxDQUFNO1VBQ2YsQ0FBQztRQUNMLE9BQ0s7VUFDRCxNQUFNM0wsR0FBQSxHQUFNLElBQUk1RCxLQUFBLENBQU0sYUFBYTtVQUVuQzRELEdBQUEsQ0FBSWlILFNBQUEsR0FBWUEsU0FBQSxDQUFVMUYsSUFBQTtVQUMxQixLQUFLeEUsWUFBQSxDQUFhLGdCQUFnQmlELEdBQUc7UUFDekM7TUFDSixDQUFDO0lBQ0w7SUFDQSxTQUFTNEwsZ0JBQUEsRUFBa0I7TUFDdkIsSUFBSUwsTUFBQSxFQUNBO01BRUpBLE1BQUEsR0FBUztNQUNUdEgsT0FBQSxDQUFRO01BQ1JnRCxTQUFBLENBQVU5SixLQUFBLENBQU07TUFDaEI4SixTQUFBLEdBQVk7SUFDaEI7SUFFQSxNQUFNWixPQUFBLEdBQVdyRyxHQUFBLElBQVE7TUFDckIsTUFBTTZMLEtBQUEsR0FBUSxJQUFJelAsS0FBQSxDQUFNLGtCQUFrQjRELEdBQUc7TUFFN0M2TCxLQUFBLENBQU01RSxTQUFBLEdBQVlBLFNBQUEsQ0FBVTFGLElBQUE7TUFDNUJxSyxlQUFBLENBQWdCO01BQ2hCLEtBQUs3TyxZQUFBLENBQWEsZ0JBQWdCOE8sS0FBSztJQUMzQztJQUNBLFNBQVNDLGlCQUFBLEVBQW1CO01BQ3hCekYsT0FBQSxDQUFRLGtCQUFrQjtJQUM5QjtJQUVBLFNBQVNKLFFBQUEsRUFBVTtNQUNmSSxPQUFBLENBQVEsZUFBZTtJQUMzQjtJQUVBLFNBQVMwRixVQUFVQyxFQUFBLEVBQUk7TUFDbkIsSUFBSS9FLFNBQUEsSUFBYStFLEVBQUEsQ0FBR3pLLElBQUEsS0FBUzBGLFNBQUEsQ0FBVTFGLElBQUEsRUFBTTtRQUN6Q3FLLGVBQUEsQ0FBZ0I7TUFDcEI7SUFDSjtJQUVBLE1BQU0zSCxPQUFBLEdBQVVBLENBQUEsS0FBTTtNQUNsQmdELFNBQUEsQ0FBVWdGLGNBQUEsQ0FBZSxRQUFRVCxlQUFlO01BQ2hEdkUsU0FBQSxDQUFVZ0YsY0FBQSxDQUFlLFNBQVM1RixPQUFPO01BQ3pDWSxTQUFBLENBQVVnRixjQUFBLENBQWUsU0FBU0gsZ0JBQWdCO01BQ2xELEtBQUtJLEdBQUEsQ0FBSSxTQUFTakcsT0FBTztNQUN6QixLQUFLaUcsR0FBQSxDQUFJLGFBQWFILFNBQVM7SUFDbkM7SUFDQTlFLFNBQUEsQ0FBVXZGLElBQUEsQ0FBSyxRQUFROEosZUFBZTtJQUN0Q3ZFLFNBQUEsQ0FBVXZGLElBQUEsQ0FBSyxTQUFTMkUsT0FBTztJQUMvQlksU0FBQSxDQUFVdkYsSUFBQSxDQUFLLFNBQVNvSyxnQkFBZ0I7SUFDeEMsS0FBS3BLLElBQUEsQ0FBSyxTQUFTdUUsT0FBTztJQUMxQixLQUFLdkUsSUFBQSxDQUFLLGFBQWFxSyxTQUFTO0lBQ2hDLElBQUksS0FBS3RCLFFBQUEsQ0FBUy9MLE9BQUEsQ0FBUSxjQUFjLE1BQU0sTUFDMUM2QyxJQUFBLEtBQVMsZ0JBQWdCO01BRXpCLEtBQUtoSCxZQUFBLENBQWEsTUFBTTtRQUNwQixJQUFJLENBQUNnUixNQUFBLEVBQVE7VUFDVHRFLFNBQUEsQ0FBVWpLLElBQUEsQ0FBSztRQUNuQjtNQUNKLEdBQUcsR0FBRztJQUNWLE9BQ0s7TUFDRGlLLFNBQUEsQ0FBVWpLLElBQUEsQ0FBSztJQUNuQjtFQUNKO0VBTUFTLE9BQUEsRUFBUztJQUNMLEtBQUtSLFVBQUEsR0FBYTtJQUNsQnRFLE1BQUEsQ0FBT3VTLHFCQUFBLEdBQXdCLGdCQUFnQixLQUFLakUsU0FBQSxDQUFVMUYsSUFBQTtJQUM5RCxLQUFLeEUsWUFBQSxDQUFhLE1BQU07SUFDeEIsS0FBSzRPLEtBQUEsQ0FBTTtJQUdYLElBQUksV0FBVyxLQUFLMU8sVUFBQSxJQUFjLEtBQUs1QyxJQUFBLENBQUs4UCxPQUFBLEVBQVM7TUFDakQsSUFBSWhQLEVBQUEsR0FBSTtNQUNSLE1BQU1DLENBQUEsR0FBSSxLQUFLcVAsUUFBQSxDQUFTcFAsTUFBQTtNQUN4QixPQUFPRixFQUFBLEdBQUlDLENBQUEsRUFBR0QsRUFBQSxJQUFLO1FBQ2YsS0FBS21RLEtBQUEsQ0FBTSxLQUFLYixRQUFBLENBQVN0UCxFQUFBLENBQUU7TUFDL0I7SUFDSjtFQUNKO0VBTUE0QyxTQUFTSCxNQUFBLEVBQVE7SUFDYixJQUFJLGNBQWMsS0FBS1gsVUFBQSxJQUNuQixXQUFXLEtBQUtBLFVBQUEsSUFDaEIsY0FBYyxLQUFLQSxVQUFBLEVBQVk7TUFDL0IsS0FBS0YsWUFBQSxDQUFhLFVBQVVhLE1BQU07TUFFbEMsS0FBS2IsWUFBQSxDQUFhLFdBQVc7TUFDN0IsS0FBS29QLGdCQUFBLENBQWlCO01BQ3RCLFFBQVF2TyxNQUFBLENBQU9uQixJQUFBO1FBQUEsS0FDTjtVQUNELEtBQUsyUCxXQUFBLENBQVlDLElBQUEsQ0FBS3RULEtBQUEsQ0FBTTZFLE1BQUEsQ0FBT0QsSUFBSSxDQUFDO1VBQ3hDO1FBQUEsS0FDQztVQUNELEtBQUsyTyxVQUFBLENBQVcsTUFBTTtVQUN0QixLQUFLdlAsWUFBQSxDQUFhLE1BQU07VUFDeEIsS0FBS0EsWUFBQSxDQUFhLE1BQU07VUFDeEI7UUFBQSxLQUNDO1VBQ0QsTUFBTWlELEdBQUEsR0FBTSxJQUFJNUQsS0FBQSxDQUFNLGNBQWM7VUFFcEM0RCxHQUFBLENBQUl1TSxJQUFBLEdBQU8zTyxNQUFBLENBQU9ELElBQUE7VUFDbEIsS0FBS2IsT0FBQSxDQUFRa0QsR0FBRztVQUNoQjtRQUFBLEtBQ0M7VUFDRCxLQUFLakQsWUFBQSxDQUFhLFFBQVFhLE1BQUEsQ0FBT0QsSUFBSTtVQUNyQyxLQUFLWixZQUFBLENBQWEsV0FBV2EsTUFBQSxDQUFPRCxJQUFJO1VBQ3hDO01BQUE7SUFFWixPQUNLLENBQ0w7RUFDSjtFQU9BeU8sWUFBWXpPLElBQUEsRUFBTTtJQUNkLEtBQUtaLFlBQUEsQ0FBYSxhQUFhWSxJQUFJO0lBQ25DLEtBQUs2TSxFQUFBLEdBQUs3TSxJQUFBLENBQUt5RSxHQUFBO0lBQ2YsS0FBSzZFLFNBQUEsQ0FBVXJLLEtBQUEsQ0FBTXdGLEdBQUEsR0FBTXpFLElBQUEsQ0FBS3lFLEdBQUE7SUFDaEMsS0FBS3FJLFFBQUEsR0FBVyxLQUFLK0IsY0FBQSxDQUFlN08sSUFBQSxDQUFLOE0sUUFBUTtJQUNqRCxLQUFLQyxZQUFBLEdBQWUvTSxJQUFBLENBQUsrTSxZQUFBO0lBQ3pCLEtBQUtDLFdBQUEsR0FBY2hOLElBQUEsQ0FBS2dOLFdBQUE7SUFDeEIsS0FBSzhCLFVBQUEsR0FBYTlPLElBQUEsQ0FBSzhPLFVBQUE7SUFDdkIsS0FBS2hQLE1BQUEsQ0FBTztJQUVaLElBQUksYUFBYSxLQUFLUixVQUFBLEVBQ2xCO0lBQ0osS0FBS2tQLGdCQUFBLENBQWlCO0VBQzFCO0VBTUFBLGlCQUFBLEVBQW1CO0lBQ2YsS0FBSzFSLGNBQUEsQ0FBZSxLQUFLbVEsZ0JBQWdCO0lBQ3pDLEtBQUtBLGdCQUFBLEdBQW1CLEtBQUtyUSxZQUFBLENBQWEsTUFBTTtNQUM1QyxLQUFLOEMsT0FBQSxDQUFRLGNBQWM7SUFDL0IsR0FBRyxLQUFLcU4sWUFBQSxHQUFlLEtBQUtDLFdBQVc7SUFDdkMsSUFBSSxLQUFLdFEsSUFBQSxDQUFLeUwsU0FBQSxFQUFXO01BQ3JCLEtBQUs4RSxnQkFBQSxDQUFpQjVFLEtBQUEsQ0FBTTtJQUNoQztFQUNKO0VBTUFxRixRQUFBLEVBQVU7SUFDTixLQUFLckIsV0FBQSxDQUFZTixNQUFBLENBQU8sR0FBRyxLQUFLTyxhQUFhO0lBSTdDLEtBQUtBLGFBQUEsR0FBZ0I7SUFDckIsSUFBSSxNQUFNLEtBQUtELFdBQUEsQ0FBWTNPLE1BQUEsRUFBUTtNQUMvQixLQUFLMEIsWUFBQSxDQUFhLE9BQU87SUFDN0IsT0FDSztNQUNELEtBQUs0TyxLQUFBLENBQU07SUFDZjtFQUNKO0VBTUFBLE1BQUEsRUFBUTtJQUNKLElBQUksYUFBYSxLQUFLMU8sVUFBQSxJQUNsQixLQUFLZ0ssU0FBQSxDQUFVdEssUUFBQSxJQUNmLENBQUMsS0FBSytPLFNBQUEsSUFDTixLQUFLMUIsV0FBQSxDQUFZM08sTUFBQSxFQUFRO01BQ3pCLE1BQU1rQyxPQUFBLEdBQVUsS0FBS21QLGtCQUFBLENBQW1CO01BQ3hDLEtBQUt6RixTQUFBLENBQVUzSixJQUFBLENBQUtDLE9BQU87TUFHM0IsS0FBSzBNLGFBQUEsR0FBZ0IxTSxPQUFBLENBQVFsQyxNQUFBO01BQzdCLEtBQUswQixZQUFBLENBQWEsT0FBTztJQUM3QjtFQUNKO0VBT0EyUCxtQkFBQSxFQUFxQjtJQUNqQixNQUFNQyxzQkFBQSxHQUF5QixLQUFLRixVQUFBLElBQ2hDLEtBQUt4RixTQUFBLENBQVUxRixJQUFBLEtBQVMsYUFDeEIsS0FBS3lJLFdBQUEsQ0FBWTNPLE1BQUEsR0FBUztJQUM5QixJQUFJLENBQUNzUixzQkFBQSxFQUF3QjtNQUN6QixPQUFPLEtBQUszQyxXQUFBO0lBQ2hCO0lBQ0EsSUFBSTRDLFdBQUEsR0FBYztJQUNsQixTQUFTelIsRUFBQSxHQUFJLEdBQUdBLEVBQUEsR0FBSSxLQUFLNk8sV0FBQSxDQUFZM08sTUFBQSxFQUFRRixFQUFBLElBQUs7TUFDOUMsTUFBTXdDLElBQUEsR0FBTyxLQUFLcU0sV0FBQSxDQUFZN08sRUFBQSxFQUFHd0MsSUFBQTtNQUNqQyxJQUFJQSxJQUFBLEVBQU07UUFDTmlQLFdBQUEsSUFBZWpTLFVBQUEsQ0FBV2dELElBQUk7TUFDbEM7TUFDQSxJQUFJeEMsRUFBQSxHQUFJLEtBQUt5UixXQUFBLEdBQWMsS0FBS0gsVUFBQSxFQUFZO1FBQ3hDLE9BQU8sS0FBS3pDLFdBQUEsQ0FBWVAsS0FBQSxDQUFNLEdBQUd0TyxFQUFDO01BQ3RDO01BQ0F5UixXQUFBLElBQWU7SUFDbkI7SUFDQSxPQUFPLEtBQUs1QyxXQUFBO0VBQ2hCO0VBU0F4TSxNQUFNaU8sR0FBQSxFQUFLakYsT0FBQSxFQUFTOUQsRUFBQSxFQUFJO0lBQ3BCLEtBQUs0SixVQUFBLENBQVcsV0FBV2IsR0FBQSxFQUFLakYsT0FBQSxFQUFTOUQsRUFBRTtJQUMzQyxPQUFPO0VBQ1g7RUFDQXBGLEtBQUttTyxHQUFBLEVBQUtqRixPQUFBLEVBQVM5RCxFQUFBLEVBQUk7SUFDbkIsS0FBSzRKLFVBQUEsQ0FBVyxXQUFXYixHQUFBLEVBQUtqRixPQUFBLEVBQVM5RCxFQUFFO0lBQzNDLE9BQU87RUFDWDtFQVVBNEosV0FBVzdQLElBQUEsRUFBTWtCLElBQUEsRUFBTTZJLE9BQUEsRUFBUzlELEVBQUEsRUFBSTtJQUNoQyxJQUFJLGVBQWUsT0FBTy9FLElBQUEsRUFBTTtNQUM1QitFLEVBQUEsR0FBSy9FLElBQUE7TUFDTEEsSUFBQSxHQUFPO0lBQ1g7SUFDQSxJQUFJLGVBQWUsT0FBTzZJLE9BQUEsRUFBUztNQUMvQjlELEVBQUEsR0FBSzhELE9BQUE7TUFDTEEsT0FBQSxHQUFVO0lBQ2Q7SUFDQSxJQUFJLGNBQWMsS0FBS3ZKLFVBQUEsSUFBYyxhQUFhLEtBQUtBLFVBQUEsRUFBWTtNQUMvRDtJQUNKO0lBQ0F1SixPQUFBLEdBQVVBLE9BQUEsSUFBVyxDQUFDO0lBQ3RCQSxPQUFBLENBQVFDLFFBQUEsR0FBVyxVQUFVRCxPQUFBLENBQVFDLFFBQUE7SUFDckMsTUFBTTdJLE1BQUEsR0FBUztNQUNYbkIsSUFBQTtNQUNBa0IsSUFBQTtNQUNBNkk7SUFDSjtJQUNBLEtBQUt6SixZQUFBLENBQWEsZ0JBQWdCYSxNQUFNO0lBQ3hDLEtBQUtvTSxXQUFBLENBQVk2QyxJQUFBLENBQUtqUCxNQUFNO0lBQzVCLElBQUk4RSxFQUFBLEVBQ0EsS0FBS2hCLElBQUEsQ0FBSyxTQUFTZ0IsRUFBRTtJQUN6QixLQUFLaUosS0FBQSxDQUFNO0VBQ2Y7RUFJQXhPLE1BQUEsRUFBUTtJQUNKLE1BQU1BLEtBQUEsR0FBUUEsQ0FBQSxLQUFNO01BQ2hCLEtBQUtFLE9BQUEsQ0FBUSxjQUFjO01BQzNCLEtBQUs0SixTQUFBLENBQVU5SixLQUFBLENBQU07SUFDekI7SUFDQSxNQUFNMlAsZUFBQSxHQUFrQkEsQ0FBQSxLQUFNO01BQzFCLEtBQUtaLEdBQUEsQ0FBSSxXQUFXWSxlQUFlO01BQ25DLEtBQUtaLEdBQUEsQ0FBSSxnQkFBZ0JZLGVBQWU7TUFDeEMzUCxLQUFBLENBQU07SUFDVjtJQUNBLE1BQU00UCxjQUFBLEdBQWlCQSxDQUFBLEtBQU07TUFFekIsS0FBS3JMLElBQUEsQ0FBSyxXQUFXb0wsZUFBZTtNQUNwQyxLQUFLcEwsSUFBQSxDQUFLLGdCQUFnQm9MLGVBQWU7SUFDN0M7SUFDQSxJQUFJLGNBQWMsS0FBSzdQLFVBQUEsSUFBYyxXQUFXLEtBQUtBLFVBQUEsRUFBWTtNQUM3RCxLQUFLQSxVQUFBLEdBQWE7TUFDbEIsSUFBSSxLQUFLK00sV0FBQSxDQUFZM08sTUFBQSxFQUFRO1FBQ3pCLEtBQUtxRyxJQUFBLENBQUssU0FBUyxNQUFNO1VBQ3JCLElBQUksS0FBS2dLLFNBQUEsRUFBVztZQUNoQnFCLGNBQUEsQ0FBZTtVQUNuQixPQUNLO1lBQ0Q1UCxLQUFBLENBQU07VUFDVjtRQUNKLENBQUM7TUFDTCxXQUNTLEtBQUt1TyxTQUFBLEVBQVc7UUFDckJxQixjQUFBLENBQWU7TUFDbkIsT0FDSztRQUNENVAsS0FBQSxDQUFNO01BQ1Y7SUFDSjtJQUNBLE9BQU87RUFDWDtFQU1BTCxRQUFRa0QsR0FBQSxFQUFLO0lBQ1RySCxNQUFBLENBQU91UyxxQkFBQSxHQUF3QjtJQUMvQixLQUFLbk8sWUFBQSxDQUFhLFNBQVNpRCxHQUFHO0lBQzlCLEtBQUszQyxPQUFBLENBQVEsbUJBQW1CMkMsR0FBRztFQUN2QztFQU1BM0MsUUFBUWYsTUFBQSxFQUFRQyxXQUFBLEVBQWE7SUFDekIsSUFBSSxjQUFjLEtBQUtVLFVBQUEsSUFDbkIsV0FBVyxLQUFLQSxVQUFBLElBQ2hCLGNBQWMsS0FBS0EsVUFBQSxFQUFZO01BRS9CLEtBQUt4QyxjQUFBLENBQWUsS0FBS21RLGdCQUFnQjtNQUV6QyxLQUFLM0QsU0FBQSxDQUFVNkQsa0JBQUEsQ0FBbUIsT0FBTztNQUV6QyxLQUFLN0QsU0FBQSxDQUFVOUosS0FBQSxDQUFNO01BRXJCLEtBQUs4SixTQUFBLENBQVU2RCxrQkFBQSxDQUFtQjtNQUNsQyxJQUFJLE9BQU9rQyxtQkFBQSxLQUF3QixZQUFZO1FBQzNDQSxtQkFBQSxDQUFvQixnQkFBZ0IsS0FBS25DLHlCQUFBLEVBQTJCLEtBQUs7UUFDekVtQyxtQkFBQSxDQUFvQixXQUFXLEtBQUtqQyxvQkFBQSxFQUFzQixLQUFLO01BQ25FO01BRUEsS0FBSzlOLFVBQUEsR0FBYTtNQUVsQixLQUFLdU4sRUFBQSxHQUFLO01BRVYsS0FBS3pOLFlBQUEsQ0FBYSxTQUFTVCxNQUFBLEVBQVFDLFdBQVc7TUFHOUMsS0FBS3lOLFdBQUEsR0FBYyxFQUFDO01BQ3BCLEtBQUtDLGFBQUEsR0FBZ0I7SUFDekI7RUFDSjtFQU9BdUMsZUFBZS9CLFFBQUEsRUFBVTtJQUNyQixNQUFNd0MsZ0JBQUEsR0FBbUIsRUFBQztJQUMxQixJQUFJOVIsRUFBQSxHQUFJO0lBQ1IsTUFBTStSLENBQUEsR0FBSXpDLFFBQUEsQ0FBU3BQLE1BQUE7SUFDbkIsT0FBT0YsRUFBQSxHQUFJK1IsQ0FBQSxFQUFHL1IsRUFBQSxJQUFLO01BQ2YsSUFBSSxDQUFDLEtBQUtqQyxVQUFBLENBQVd3RixPQUFBLENBQVErTCxRQUFBLENBQVN0UCxFQUFBLENBQUUsR0FDcEM4UixnQkFBQSxDQUFpQkosSUFBQSxDQUFLcEMsUUFBQSxDQUFTdFAsRUFBQSxDQUFFO0lBQ3pDO0lBQ0EsT0FBTzhSLGdCQUFBO0VBQ1g7QUFDSjtBQUNBdFUsTUFBQSxDQUFPSyxRQUFBLEdBQVcrUSxjQUFBLENBQUEvUSxRQUFBOzs7QUMva0JYLElBQU1DLFNBQUEsR0FBV04sTUFBQSxDQUFPSyxRQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYXBwL291dCJ9