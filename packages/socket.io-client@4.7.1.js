System.register(["engine.io-parser@5.1.0","@socket.io/component-emitter@3.1.0","engine.io-client@6.5.1","socket.io-parser@4.2.4"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.1.0"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.5.1"],["socket.io-client","4.7.1"],["socket.io-parser","4.2.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.1.0', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep), dep => dependencies.set('engine.io-client@6.5.1', dep), dep => dependencies.set('socket.io-parser@4.2.4', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/socket.io-client.4.7.1.js
var socket_io_client_4_7_1_exports = {};
__export(socket_io_client_4_7_1_exports, {
  Manager: () => Manager,
  Socket: () => Socket,
  connect: () => lookup,
  default: () => socket_io_client_4_7_1_default,
  io: () => lookup,
  protocol: () => import_socket4.protocol
});
module.exports = __toCommonJS(socket_io_client_4_7_1_exports);

// node_modules/socket.io-client/build/esm/url.js
var import_engine = require("engine.io-client@6.5.1");
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri) uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = (0, import_engine.parse)(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// node_modules/socket.io-client/build/esm/on.js
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

// node_modules/socket.io-client/build/esm/socket.js
var import_socket = require("socket.io-parser@4.2.4");
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});
var Socket = class extends import_component_emitter.Emitter {
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect) this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const io = this.io;
    this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    if (this.connected) return this;
    this.subEvents();
    if (!this.io["_reconnecting"]) this.io.open();
    if ("open" === this.io._readyState) this.onopen();
    return this;
  }
  open() {
    return this.connect();
  }
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: import_socket.PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
    if (discardPacket) {} else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  _registerAckCallback(id, ack) {
    var _a;
    const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    this.acks[id] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  emitWithAck(ev, ...args) {
    const withErr = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((resolve, reject) => {
      args.push((arg1, arg2) => {
        if (withErr) {
          return arg1 ? reject(arg1) : resolve(arg2);
        } else {
          return resolve(arg1);
        }
      });
      this.emit(ev, ...args);
    });
  }
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({
        fromQueue: true
      }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        return;
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  _drainQueue(force = false) {
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  onopen() {
    if (typeof this.auth == "function") {
      this.auth(data => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  _sendConnectPacket(data) {
    this.packet({
      type: import_socket.PacketType.CONNECT,
      data: this._pid ? Object.assign({
        pid: this._pid,
        offset: this._lastOffset
      }, data) : data
    });
  }
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace) return;
    switch (packet.type) {
      case import_socket.PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case import_socket.PacketType.EVENT:
      case import_socket.PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case import_socket.PacketType.ACK:
      case import_socket.PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case import_socket.PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case import_socket.PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  ack(id) {
    const self = this;
    let sent = false;
    return function (...args) {
      if (sent) return;
      sent = true;
      self.packet({
        type: import_socket.PacketType.ACK,
        id,
        data: args
      });
    };
  }
  onack(packet) {
    const ack = this.acks[packet.id];
    if ("function" === typeof ack) {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {}
  }
  onconnect(id, pid) {
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
    this._drainQueue(true);
  }
  emitBuffered() {
    this.receiveBuffer.forEach(args => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach(packet => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  destroy() {
    if (this.subs) {
      this.subs.forEach(subDestroy => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  disconnect() {
    if (this.connected) {
      this.packet({
        type: import_socket.PacketType.DISCONNECT
      });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  close() {
    return this.disconnect();
  }
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};

// node_modules/socket.io-client/build/esm/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function () {
  this.attempts = 0;
};
Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
Backoff.prototype.setMax = function (max) {
  this.max = max;
};
Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

// node_modules/socket.io-client/build/esm/manager.js
var import_engine2 = require("engine.io-client@6.5.1");
var parser = __toESM(require("socket.io-parser@4.2.4"), 0);
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");
var Manager = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    (0, import_engine2.installTimerFunctions)(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || parser;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect) this.open();
  }
  reconnection(v) {
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0) return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  }
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  open(fn) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new import_engine2.Socket(this.uri, this.opts);
    const socket = this.engine;
    const self = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function () {
      self.onopen();
      fn && fn();
    });
    const onError = err => {
      this.cleanup();
      this._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        this.maybeReconnectOnOpen();
      }
    };
    const errorSub = on(socket, "error", onError);
    if (false !== this._timeout) {
      const timeout = this._timeout;
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        onError(new Error("timeout"));
        socket.close();
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  connect(fn) {
    return this.open(fn);
  }
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  ondecoded(packet) {
    (0, import_engine2.nextTick)(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  onerror(err) {
    this.emitReserved("error", err);
  }
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket(this, nsp, opts);
      this.nsps[nsp] = socket;
    } else if (this._autoConnect && !socket.active) {
      socket.connect();
    }
    return socket;
  }
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  cleanup() {
    this.subs.forEach(subDestroy => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine) this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const self = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self.skipReconnect) return;
        this.emitReserved("reconnect_attempt", self.backoff.attempts);
        if (self.skipReconnect) return;
        self.open(err => {
          if (err) {
            self._reconnecting = false;
            self.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
  }
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// node_modules/socket.io-client/build/esm/index.js
var import_socket4 = require("socket.io-parser@4.2.4");
var cache = {};
function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup, {
  Manager,
  Socket,
  io: lookup,
  connect: lookup
});

// .beyond/uimport/socket.io-client.4.7.1.js
var socket_io_client_4_7_1_default = lookup;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zb2NrZXQuaW8tY2xpZW50LjQuNy4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL3VybC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9vbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9zb2NrZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9iYWNrbzIuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vbWFuYWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIk1hbmFnZXIiLCJTb2NrZXQiLCJjb25uZWN0IiwiZGVmYXVsdCIsImlvIiwicHJvdG9jb2wiLCJtb2R1bGUiLCJyZXF1aXJlIiwidXJsIiwidXJpIiwicGF0aCIsImxvYyIsIm9iaiIsImxvY2F0aW9uIiwiaG9zdCIsImNoYXJBdCIsInRlc3QiLCJpbXBvcnRfZW5naW5lIiwicG9ydCIsImlwdjYiLCJpbmRleE9mIiwiaWQiLCJocmVmIiwib24iLCJldiIsImZuIiwic3ViRGVzdHJveSIsIm9mZiIsIlJFU0VSVkVEX0VWRU5UUyIsIk9iamVjdCIsImZyZWV6ZSIsImNvbm5lY3RfZXJyb3IiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsIm5ld0xpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJjb25zdHJ1Y3RvciIsIm5zcCIsIm9wdHMiLCJjb25uZWN0ZWQiLCJyZWNvdmVyZWQiLCJyZWNlaXZlQnVmZmVyIiwic2VuZEJ1ZmZlciIsIl9xdWV1ZSIsIl9xdWV1ZVNlcSIsImlkcyIsImFja3MiLCJmbGFncyIsImF1dGgiLCJfb3B0cyIsImFzc2lnbiIsIl9hdXRvQ29ubmVjdCIsIm9wZW4iLCJkaXNjb25uZWN0ZWQiLCJzdWJFdmVudHMiLCJzdWJzIiwib25vcGVuIiwiYmluZCIsIm9ucGFja2V0Iiwib25lcnJvciIsIm9uY2xvc2UiLCJhY3RpdmUiLCJfcmVhZHlTdGF0ZSIsInNlbmQiLCJhcmdzIiwidW5zaGlmdCIsImVtaXQiLCJhcHBseSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJ0b1N0cmluZyIsInJldHJpZXMiLCJmcm9tUXVldWUiLCJ2b2xhdGlsZSIsIl9hZGRUb1F1ZXVlIiwicGFja2V0IiwidHlwZSIsImltcG9ydF9zb2NrZXQiLCJFVkVOVCIsImRhdGEiLCJvcHRpb25zIiwiY29tcHJlc3MiLCJsZW5ndGgiLCJhY2siLCJwb3AiLCJfcmVnaXN0ZXJBY2tDYWxsYmFjayIsImlzVHJhbnNwb3J0V3JpdGFibGUiLCJlbmdpbmUiLCJ0cmFuc3BvcnQiLCJ3cml0YWJsZSIsImRpc2NhcmRQYWNrZXQiLCJub3RpZnlPdXRnb2luZ0xpc3RlbmVycyIsInB1c2giLCJfYSIsInRpbWVvdXQiLCJhY2tUaW1lb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0Rm4iLCJpIiwic3BsaWNlIiwiY2FsbCIsImNsZWFyVGltZW91dEZuIiwiZW1pdFdpdGhBY2siLCJ3aXRoRXJyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhcmcxIiwiYXJnMiIsInRyeUNvdW50IiwicGVuZGluZyIsImVyciIsInJlc3BvbnNlQXJncyIsImhhc0Vycm9yIiwic2hpZnQiLCJfZHJhaW5RdWV1ZSIsImZvcmNlIiwiX3BhY2tldCIsIl9zZW5kQ29ubmVjdFBhY2tldCIsIkNPTk5FQ1QiLCJfcGlkIiwicGlkIiwib2Zmc2V0IiwiX2xhc3RPZmZzZXQiLCJlbWl0UmVzZXJ2ZWQiLCJyZWFzb24iLCJkZXNjcmlwdGlvbiIsInNhbWVOYW1lc3BhY2UiLCJzaWQiLCJvbmNvbm5lY3QiLCJCSU5BUllfRVZFTlQiLCJvbmV2ZW50IiwiQUNLIiwiQklOQVJZX0FDSyIsIm9uYWNrIiwiRElTQ09OTkVDVCIsIm9uZGlzY29ubmVjdCIsIkNPTk5FQ1RfRVJST1IiLCJkZXN0cm95IiwibWVzc2FnZSIsImVtaXRFdmVudCIsIl9hbnlMaXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJzbGljZSIsImxpc3RlbmVyIiwic2VsZiIsInNlbnQiLCJlbWl0QnVmZmVyZWQiLCJmb3JFYWNoIiwiY2xvc2UiLCJvbkFueSIsInByZXBlbmRBbnkiLCJvZmZBbnkiLCJsaXN0ZW5lcnNBbnkiLCJvbkFueU91dGdvaW5nIiwiX2FueU91dGdvaW5nTGlzdGVuZXJzIiwicHJlcGVuZEFueU91dGdvaW5nIiwib2ZmQW55T3V0Z29pbmciLCJsaXN0ZW5lcnNBbnlPdXRnb2luZyIsIkJhY2tvZmYiLCJtcyIsIm1pbiIsIm1heCIsImZhY3RvciIsImppdHRlciIsImF0dGVtcHRzIiwicHJvdG90eXBlIiwiZHVyYXRpb24iLCJNYXRoIiwicG93IiwicmFuZCIsInJhbmRvbSIsImRldmlhdGlvbiIsImZsb29yIiwicmVzZXQiLCJzZXRNaW4iLCJzZXRNYXgiLCJzZXRKaXR0ZXIiLCJfX3RvRVNNIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMiIsIm5zcHMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInJhbmRvbWl6YXRpb25GYWN0b3IiLCJiYWNrb2ZmIiwiX3BhcnNlciIsInBhcnNlciIsImVuY29kZXIiLCJFbmNvZGVyIiwiZGVjb2RlciIsIkRlY29kZXIiLCJhdXRvQ29ubmVjdCIsInYiLCJhcmd1bWVudHMiLCJfcmVjb25uZWN0aW9uIiwiX3JlY29ubmVjdGlvbkF0dGVtcHRzIiwiX3JlY29ubmVjdGlvbkRlbGF5IiwiX3JhbmRvbWl6YXRpb25GYWN0b3IiLCJfcmVjb25uZWN0aW9uRGVsYXlNYXgiLCJfdGltZW91dCIsIm1heWJlUmVjb25uZWN0T25PcGVuIiwiX3JlY29ubmVjdGluZyIsInJlY29ubmVjdCIsImltcG9ydF9lbmdpbmUyIiwic29ja2V0Iiwic2tpcFJlY29ubmVjdCIsIm9wZW5TdWJEZXN0cm95Iiwib25FcnJvciIsImNsZWFudXAiLCJlcnJvclN1YiIsImF1dG9VbnJlZiIsInVucmVmIiwib25waW5nIiwib25kYXRhIiwib25kZWNvZGVkIiwiYWRkIiwiZSIsIl9kZXN0cm95Iiwia2V5cyIsIl9jbG9zZSIsImVuY29kZWRQYWNrZXRzIiwiZW5jb2RlIiwid3JpdGUiLCJkZWxheSIsIm9ucmVjb25uZWN0IiwiYXR0ZW1wdCIsImNhY2hlIiwibG9va3VwIiwicGFyc2VkIiwic291cmNlIiwibmV3Q29ubmVjdGlvbiIsImZvcmNlTmV3IiwibXVsdGlwbGV4IiwicXVlcnkiLCJxdWVyeUtleSIsInNvY2tldF9pb19jbGllbnRfNF83XzFfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQUEsb0JBQXNCQztBQVVmLFNBQVNDLElBQUlDLEtBQUtDLE9BQU8sSUFBSUMsS0FBSztFQUNyQyxJQUFJQyxNQUFNSDtFQUVWRSxNQUFNQSxPQUFRLE9BQU9FLGFBQWEsZUFBZUE7RUFDakQsSUFBSSxRQUFRSixLQUNSQSxNQUFNRSxJQUFJTixXQUFXLE9BQU9NLElBQUlHO0VBRXBDLElBQUksT0FBT0wsUUFBUSxVQUFVO0lBQ3pCLElBQUksUUFBUUEsSUFBSU0sT0FBTyxDQUFDLEdBQUc7TUFDdkIsSUFBSSxRQUFRTixJQUFJTSxPQUFPLENBQUMsR0FBRztRQUN2Qk4sTUFBTUUsSUFBSU4sV0FBV0k7TUFDekIsT0FDSztRQUNEQSxNQUFNRSxJQUFJRyxPQUFPTDtNQUNyQjtJQUNKO0lBQ0EsSUFBSSxDQUFDLHNCQUFzQk8sS0FBS1AsR0FBRyxH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