System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["wavesurfer.js","7.8.5"]]);
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

// .beyond/uimport/wavesurfer.js.7.8.5.js
var wavesurfer_js_7_8_5_exports = {};
__export(wavesurfer_js_7_8_5_exports, {
  default: () => wavesurfer_js_7_8_5_default
});
module.exports = __toCommonJS(wavesurfer_js_7_8_5_exports);

// node_modules/wavesurfer.js/dist/wavesurfer.esm.js
function t(t2, e2, i2, s2) {
  return new (i2 || (i2 = Promise))(function (n2, r2) {
    function o2(t3) {
      try {
        h2(s2.next(t3));
      } catch (t4) {
        r2(t4);
      }
    }
    function a2(t3) {
      try {
        h2(s2.throw(t3));
      } catch (t4) {
        r2(t4);
      }
    }
    function h2(t3) {
      var e3;
      t3.done ? n2(t3.value) : (e3 = t3.value, e3 instanceof i2 ? e3 : new i2(function (t4) {
        t4(e3);
      })).then(o2, a2);
    }
    h2((s2 = s2.apply(t2, e2 || [])).next());
  });
}
"function" == typeof SuppressedError && SuppressedError;
var e = class {
  constructor() {
    this.listeners = {};
  }
  on(t2, e2, i2) {
    if (this.listeners[t2] || (this.listeners[t2] = /* @__PURE__ */new Set()), this.listeners[t2].add(e2), null == i2 ? void 0 : i2.once) {
      const i3 = () => {
        this.un(t2, i3), this.un(t2, e2);
      };
      return this.on(t2, i3), i3;
    }
    return () => this.un(t2, e2);
  }
  un(t2, e2) {
    var i2;
    null === (i2 = this.listeners[t2]) || void 0 === i2 || i2.delete(e2);
  }
  once(t2, e2) {
    return this.on(t2, e2, {
      once: true
    });
  }
  unAll() {
    this.listeners = {};
  }
  emit(t2, ...e2) {
    this.listeners[t2] && this.listeners[t2].forEach(t3 => t3(...e2));
  }
};
var i = {
  decode: function (e2, i2) {
    return t(this, void 0, void 0, function* () {
      const t2 = new AudioContext({
        sampleRate: i2
      });
      return t2.decodeAudioData(e2).finally(() => t2.close());
    });
  },
  createBuffer: function (t2, e2) {
    return "number" == typeof t2[0] && (t2 = [t2]), function (t3) {
      const e3 = t3[0];
      if (e3.some(t4 => t4 > 1 || t4 < -1)) {
        const i2 = e3.length;
        let s2 = 0;
        for (let t4 = 0; t4 < i2; t4++) {
          const i3 = Math.abs(e3[t4]);
          i3 > s2 && (s2 = i3);
        }
        for (const e4 of t3) for (let t4 = 0; t4 < i2; t4++) e4[t4] /= s2;
      }
    }(t2), {
      duration: e2,
      length: t2[0].length,
      sampleRate: t2[0].length / e2,
      numberOfChannels: t2.length,
      getChannelData: e3 => null == t2 ? void 0 : t2[e3],
      copyFromChannel: AudioBuffer.prototype.copyFromChannel,
      copyToChannel: AudioBuffer.prototype.copyToChannel
    };
  }
};
function s(t2, e2) {
  const i2 = e2.xmlns ? document.createElementNS(e2.xmlns, t2) : document.createElement(t2);
  for (const [t3, n2] of Object.entries(e2)) if ("children" === t3) for (const [t4, n3] of Object.entries(e2)) "string" == typeof n3 ? i2.appendChild(document.createTextNode(n3)) : i2.appendChild(s(t4, n3));else "style" === t3 ? Object.assign(i2.style, n2) : "textContent" === t3 ? i2.textContent = n2 : i2.setAttribute(t3, n2.toString());
  return i2;
}
function n(t2, e2, i2) {
  const n2 = s(t2, e2 || {});
  return null == i2 || i2.appendChild(n2), n2;
}
var r = Object.freeze({
  __proto__: null,
  createElement: n,
  default: n
});
var o = {
  fetchBlob: function (e2, i2, s2) {
    return t(this, void 0, void 0, function* () {
      const n2 = yield fetch(e2, s2);
      if (n2.status >= 400) throw new Error(`Failed to fetch ${e2}: ${n2.status} (${n2.statusText})`);
      return function (e3, i3) {
        t(this, void 0, void 0, function* () {
          if (!e3.body || !e3.headers) return;
          const s3 = e3.body.getReader(),
            n3 = Number(e3.headers.get("Content-Length")) || 0;
          let r2 = 0;
          const o2 = e4 => t(this, void 0, void 0, function* () {
              r2 += (null == e4 ? void 0 : e4.length) || 0;
              const t2 = Math.round(r2 / n3 * 100);
              i3(t2);
            }),
            a2 = () => t(this, void 0, void 0, function* () {
              let t2;
              try {
                t2 = yield s3.read();
              } catch (t3) {
                return;
              }
              t2.done || (o2(t2.value), yield a2());
            });
          a2();
        });
      }(n2.clone(), i2), n2.blob();
    });
  }
};
var a = class extends e {
  constructor(t2) {
    super(), this.isExternalMedia = false, t2.media ? (this.media = t2.media, this.isExternalMedia = true) : this.media = document.createElement("audio"), t2.mediaControls && (this.media.controls = true), t2.autoplay && (this.media.autoplay = true), null != t2.playbackRate && this.onMediaEvent("canplay", () => {
      null != t2.playbackRate && (this.media.playbackRate = t2.playbackRate);
    }, {
      once: true
    });
  }
  onMediaEvent(t2, e2, i2) {
    return this.media.addEventListener(t2, e2, i2), () => this.media.removeEventListener(t2, e2, i2);
  }
  getSrc() {
    return this.media.currentSrc || this.media.src || "";
  }
  revokeSrc() {
    const t2 = this.getSrc();
    t2.startsWith("blob:") && URL.revokeObjectURL(t2);
  }
  canPlayType(t2) {
    return "" !== this.media.canPlayType(t2);
  }
  setSrc(t2, e2) {
    const i2 = this.getSrc();
    if (t2 && i2 === t2) return;
    this.revokeSrc();
    const s2 = e2 instanceof Blob && (this.canPlayType(e2.type) || !t2) ? URL.createObjectURL(e2) : t2;
    try {
      this.media.src = s2;
    } catch (e3) {
      this.media.src = t2;
    }
  }
  destroy() {
    this.media.pause(), this.isExternalMedia || (this.media.remove(), this.revokeSrc(), this.media.src = "", this.media.load());
  }
  setMediaElement(t2) {
    this.media = t2;
  }
  play() {
    return t(this, void 0, void 0, function* () {
      return this.media.play();
    });
  }
  pause() {
    this.media.pause();
  }
  isPlaying() {
    return !this.media.paused && !this.media.ended;
  }
  setTime(t2) {
    this.media.currentTime = t2;
  }
  getDuration() {
    return this.media.duration;
  }
  getCurrentTime() {
    return this.media.currentTime;
  }
  getVolume() {
    return this.media.volume;
  }
  setVolume(t2) {
    this.media.volume = t2;
  }
  getMuted() {
    return this.media.muted;
  }
  setMuted(t2) {
    this.media.muted = t2;
  }
  getPlaybackRate() {
    return this.media.playbackRate;
  }
  isSeeking() {
    return this.media.seeking;
  }
  setPlaybackRate(t2, e2) {
    null != e2 && (this.media.preservesPitch = e2), this.media.playbackRate = t2;
  }
  getMediaElement() {
    return this.media;
  }
  setSinkId(t2) {
    return this.media.setSinkId(t2);
  }
};
var h = class extends e {
  constructor(t2, e2) {
    super(), this.timeouts = [], this.isScrollable = false, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = false, this.subscriptions = [], this.subscriptions = [], this.options = t2;
    const i2 = this.parentFromOptionsContainer(t2.container);
    this.parent = i2;
    const [s2, n2] = this.initHtml();
    i2.appendChild(s2), this.container = s2, this.scrollContainer = n2.querySelector(".scroll"), this.wrapper = n2.querySelector(".wrapper"), this.canvasWrapper = n2.querySelector(".canvases"), this.progressWrapper = n2.querySelector(".progress"), this.cursor = n2.querySelector(".cursor"), e2 && n2.appendChild(e2), this.initEvents();
  }
  parentFromOptionsContainer(t2) {
    let e2;
    if ("string" == typeof t2 ? e2 = document.querySelector(t2) : t2 instanceof HTMLElement && (e2 = t2), !e2) throw new Error("Container not found");
    return e2;
  }
  initEvents() {
    const t2 = t3 => {
      const e2 = this.wrapper.getBoundingClientRect(),
        i2 = t3.clientX - e2.left,
        s2 = t3.clientY - e2.top;
      return [i2 / e2.width, s2 / e2.height];
    };
    if (this.wrapper.addEventListener("click", e2 => {
      const [i2, s2] = t2(e2);
      this.emit("click", i2, s2);
    }), this.wrapper.addEventListener("dblclick", e2 => {
      const [i2, s2] = t2(e2);
      this.emit("dblclick", i2, s2);
    }), true !== this.options.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.scrollContainer.addEventListener("scroll", () => {
      const {
          scrollLeft: t3,
          scrollWidth: e2,
          clientWidth: i2
        } = this.scrollContainer,
        s2 = t3 / e2,
        n2 = (t3 + i2) / e2;
      this.emit("scroll", s2, n2, t3, t3 + i2);
    }), "function" == typeof ResizeObserver) {
      const t3 = this.createDelay(100);
      this.resizeObserver = new ResizeObserver(() => {
        t3().then(() => this.onContainerResize()).catch(() => {});
      }), this.resizeObserver.observe(this.scrollContainer);
    }
  }
  onContainerResize() {
    const t2 = this.parent.clientWidth;
    t2 === this.lastContainerWidth && "auto" !== this.options.height || (this.lastContainerWidth = t2, this.reRender());
  }
  initDrag() {
    this.subscriptions.push(function (t2, e2, i2, s2, n2 = 3, r2 = 0, o2 = 100) {
      if (!t2) return () => {};
      const a2 = matchMedia("(pointer: coarse)").matches;
      let h2 = () => {};
      const l2 = l3 => {
        if (l3.button !== r2) return;
        l3.preventDefault(), l3.stopPropagation();
        let d2 = l3.clientX,
          c2 = l3.clientY,
          u2 = false;
        const p = Date.now(),
          m = s3 => {
            if (s3.preventDefault(), s3.stopPropagation(), a2 && Date.now() - p < o2) return;
            const r3 = s3.clientX,
              h3 = s3.clientY,
              l4 = r3 - d2,
              m2 = h3 - c2;
            if (u2 || Math.abs(l4) > n2 || Math.abs(m2) > n2) {
              const s4 = t2.getBoundingClientRect(),
                {
                  left: n3,
                  top: o3
                } = s4;
              u2 || (null == i2 || i2(d2 - n3, c2 - o3), u2 = true), e2(l4, m2, r3 - n3, h3 - o3), d2 = r3, c2 = h3;
            }
          },
          g = e3 => {
            if (u2) {
              const i3 = e3.clientX,
                n3 = e3.clientY,
                r3 = t2.getBoundingClientRect(),
                {
                  left: o3,
                  top: a3
                } = r3;
              null == s2 || s2(i3 - o3, n3 - a3);
            }
            h2();
          },
          f = t3 => {
            t3.relatedTarget && t3.relatedTarget !== document.documentElement || g(t3);
          },
          v = t3 => {
            u2 && (t3.stopPropagation(), t3.preventDefault());
          },
          b = t3 => {
            u2 && t3.preventDefault();
          };
        document.addEventListener("pointermove", m), document.addEventListener("pointerup", g), document.addEventListener("pointerout", f), document.addEventListener("pointercancel", f), document.addEventListener("touchmove", b, {
          passive: false
        }), document.addEventListener("click", v, {
          capture: true
        }), h2 = () => {
          document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", g), document.removeEventListener("pointerout", f), document.removeEventListener("pointercancel", f), document.removeEventListener("touchmove", b), setTimeout(() => {
            document.removeEventListener("click", v, {
              capture: true
            });
          }, 10);
        };
      };
      return t2.addEventListener("pointerdown", l2), () => {
        h2(), t2.removeEventListener("pointerdown", l2);
      };
    }(this.wrapper, (t2, e2, i2) => {
      this.emit("drag", Math.max(0, Math.min(1, i2 / this.wrapper.getBoundingClientRect().width)));
    }, t2 => {
      this.isDragging = true, this.emit("dragstart", Math.max(0, Math.min(1, t2 / this.wrapper.getBoundingClientRect().width)));
    }, t2 => {
      this.isDragging = false, this.emit("dragend", Math.max(0, Math.min(1, t2 / this.wrapper.getBoundingClientRect().width)));
    }));
  }
  getHeight(t2, e2) {
    var i2;
    const s2 = (null === (i2 = this.audioData) || void 0 === i2 ? void 0 : i2.numberOfChannels) || 1;
    if (null == t2) return 128;
    if (!isNaN(Number(t2))) return Number(t2);
    if ("auto" === t2) {
      const t3 = this.parent.clientHeight || 128;
      return (null == e2 ? void 0 : e2.every(t4 => !t4.overlay)) ? t3 / s2 : t3;
    }
    return 128;
  }
  initHtml() {
    const t2 = document.createElement("div"),
      e2 = t2.attachShadow({
        mode: "open"
      }),
      i2 = this.options.cspNonce && "string" == typeof this.options.cspNonce ? this.options.cspNonce.replace(/"/g, "") : "";
    return e2.innerHTML = `
      <style${i2 ? ` nonce="${i2}"` : ""}>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height, this.options.splitChannels)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `, [t2, e2];
  }
  setOptions(t2) {
    if (this.options.container !== t2.container) {
      const e2 = this.parentFromOptionsContainer(t2.container);
      e2.appendChild(this.container), this.parent = e2;
    }
    true !== t2.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.options = t2, this.reRender();
  }
  getWrapper() {
    return this.wrapper;
  }
  getWidth() {
    return this.scrollContainer.clientWidth;
  }
  getScroll() {
    return this.scrollContainer.scrollLeft;
  }
  setScroll(t2) {
    this.scrollContainer.scrollLeft = t2;
  }
  setScrollPercentage(t2) {
    const {
        scrollWidth: e2
      } = this.scrollContainer,
      i2 = e2 * t2;
    this.setScroll(i2);
  }
  destroy() {
    var t2, e2;
    this.subscriptions.forEach(t3 => t3()), this.container.remove(), null === (t2 = this.resizeObserver) || void 0 === t2 || t2.disconnect(), null === (e2 = this.unsubscribeOnScroll) || void 0 === e2 || e2.call(this);
  }
  createDelay(t2 = 10) {
    let e2, i2;
    const s2 = () => {
      e2 && clearTimeout(e2), i2 && i2();
    };
    return this.timeouts.push(s2), () => new Promise((n2, r2) => {
      s2(), i2 = r2, e2 = setTimeout(() => {
        e2 = void 0, i2 = void 0, n2();
      }, t2);
    });
  }
  convertColorValues(t2) {
    if (!Array.isArray(t2)) return t2 || "";
    if (t2.length < 2) return t2[0] || "";
    const e2 = document.createElement("canvas"),
      i2 = e2.getContext("2d"),
      s2 = e2.height * (window.devicePixelRatio || 1),
      n2 = i2.createLinearGradient(0, 0, 0, s2),
      r2 = 1 / (t2.length - 1);
    return t2.forEach((t3, e3) => {
      const i3 = e3 * r2;
      n2.addColorStop(i3, t3);
    }), n2;
  }
  getPixelRatio() {
    return Math.max(1, window.devicePixelRatio || 1);
  }
  renderBarWaveform(t2, e2, i2, s2) {
    const n2 = t2[0],
      r2 = t2[1] || t2[0],
      o2 = n2.length,
      {
        width: a2,
        height: h2
      } = i2.canvas,
      l2 = h2 / 2,
      d2 = this.getPixelRatio(),
      c2 = e2.barWidth ? e2.barWidth * d2 : 1,
      u2 = e2.barGap ? e2.barGap * d2 : e2.barWidth ? c2 / 2 : 0,
      p = e2.barRadius || 0,
      m = a2 / (c2 + u2) / o2,
      g = p && "roundRect" in i2 ? "roundRect" : "rect";
    i2.beginPath();
    let f = 0,
      v = 0,
      b = 0;
    for (let t3 = 0; t3 <= o2; t3++) {
      const o3 = Math.round(t3 * m);
      if (o3 > f) {
        const t4 = Math.round(v * l2 * s2),
          n3 = t4 + Math.round(b * l2 * s2) || 1;
        let r3 = l2 - t4;
        "top" === e2.barAlign ? r3 = 0 : "bottom" === e2.barAlign && (r3 = h2 - n3), i2[g](f * (c2 + u2), r3, c2, n3, p), f = o3, v = 0, b = 0;
      }
      const a3 = Math.abs(n2[t3] || 0),
        d3 = Math.abs(r2[t3] || 0);
      a3 > v && (v = a3), d3 > b && (b = d3);
    }
    i2.fill(), i2.closePath();
  }
  renderLineWaveform(t2, e2, i2, s2) {
    const n2 = e3 => {
      const n3 = t2[e3] || t2[0],
        r2 = n3.length,
        {
          height: o2
        } = i2.canvas,
        a2 = o2 / 2,
        h2 = i2.canvas.width / r2;
      i2.moveTo(0, a2);
      let l2 = 0,
        d2 = 0;
      for (let t3 = 0; t3 <= r2; t3++) {
        const r3 = Math.round(t3 * h2);
        if (r3 > l2) {
          const t4 = a2 + (Math.round(d2 * a2 * s2) || 1) * (0 === e3 ? -1 : 1);
          i2.lineTo(l2, t4), l2 = r3, d2 = 0;
        }
        const o3 = Math.abs(n3[t3] || 0);
        o3 > d2 && (d2 = o3);
      }
      i2.lineTo(l2, a2);
    };
    i2.beginPath(), n2(0), n2(1), i2.fill(), i2.closePath();
  }
  renderWaveform(t2, e2, i2) {
    if (i2.fillStyle = this.convertColorValues(e2.waveColor), e2.renderFunction) return void e2.renderFunction(t2, i2);
    let s2 = e2.barHeight || 1;
    if (e2.normalize) {
      const e3 = Array.from(t2[0]).reduce((t3, e4) => Math.max(t3, Math.abs(e4)), 0);
      s2 = e3 ? 1 / e3 : 1;
    }
    e2.barWidth || e2.barGap || e2.barAlign ? this.renderBarWaveform(t2, e2, i2, s2) : this.renderLineWaveform(t2, e2, i2, s2);
  }
  renderSingleCanvas(t2, e2, i2, s2, n2, r2, o2) {
    const a2 = this.getPixelRatio(),
      h2 = document.createElement("canvas");
    h2.width = Math.round(i2 * a2), h2.height = Math.round(s2 * a2), h2.style.width = `${i2}px`, h2.style.height = `${s2}px`, h2.style.left = `${Math.round(n2)}px`, r2.appendChild(h2);
    const l2 = h2.getContext("2d");
    if (this.renderWaveform(t2, e2, l2), h2.width > 0 && h2.height > 0) {
      const t3 = h2.cloneNode(),
        i3 = t3.getContext("2d");
      i3.drawImage(h2, 0, 0), i3.globalCompositeOperation = "source-in", i3.fillStyle = this.convertColorValues(e2.progressColor), i3.fillRect(0, 0, h2.width, h2.height), o2.appendChild(t3);
    }
  }
  renderMultiCanvas(t2, e2, i2, s2, n2, r2) {
    const o2 = this.getPixelRatio(),
      {
        clientWidth: a2
      } = this.scrollContainer,
      l2 = i2 / o2;
    let d2 = Math.min(h.MAX_CANVAS_WIDTH, a2, l2),
      c2 = {};
    if (e2.barWidth || e2.barGap) {
      const t3 = e2.barWidth || 0.5,
        i3 = t3 + (e2.barGap || t3 / 2);
      d2 % i3 != 0 && (d2 = Math.floor(d2 / i3) * i3);
    }
    const u2 = i3 => {
        if (i3 < 0 || i3 >= p) return;
        if (c2[i3]) return;
        c2[i3] = true;
        const o3 = i3 * d2,
          a3 = Math.min(l2 - o3, d2);
        if (a3 <= 0) return;
        const h2 = t2.map(t3 => {
          const e3 = Math.floor(o3 / l2 * t3.length),
            i4 = Math.floor((o3 + a3) / l2 * t3.length);
          return t3.slice(e3, i4);
        });
        this.renderSingleCanvas(h2, e2, a3, s2, o3, n2, r2);
      },
      p = Math.ceil(l2 / d2);
    if (!this.isScrollable) {
      for (let t3 = 0; t3 < p; t3++) u2(t3);
      return;
    }
    const m = this.scrollContainer.scrollLeft / l2,
      g = Math.floor(m * p);
    u2(g - 1), u2(g), u2(g + 1), p > 1 && (this.unsubscribeOnScroll = this.on("scroll", () => {
      const {
          scrollLeft: t3
        } = this.scrollContainer,
        e3 = Math.floor(t3 / l2 * p);
      Object.keys(c2).length > h.MAX_NODES && (n2.innerHTML = "", r2.innerHTML = "", c2 = {}), u2(e3 - 1), u2(e3), u2(e3 + 1);
    }));
  }
  renderChannel(t2, e2, i2, s2) {
    var {
        overlay: n2
      } = e2,
      r2 = function (t3, e3) {
        var i3 = {};
        for (var s3 in t3) Object.prototype.hasOwnProperty.call(t3, s3) && e3.indexOf(s3) < 0 && (i3[s3] = t3[s3]);
        if (null != t3 && "function" == typeof Object.getOwnPropertySymbols) {
          var n3 = 0;
          for (s3 = Object.getOwnPropertySymbols(t3); n3 < s3.length; n3++) e3.indexOf(s3[n3]) < 0 && Object.prototype.propertyIsEnumerable.call(t3, s3[n3]) && (i3[s3[n3]] = t3[s3[n3]]);
        }
        return i3;
      }(e2, ["overlay"]);
    const o2 = document.createElement("div"),
      a2 = this.getHeight(r2.height, r2.splitChannels);
    o2.style.height = `${a2}px`, n2 && s2 > 0 && (o2.style.marginTop = `-${a2}px`), this.canvasWrapper.style.minHeight = `${a2}px`, this.canvasWrapper.appendChild(o2);
    const h2 = o2.cloneNode();
    this.progressWrapper.appendChild(h2), this.renderMultiCanvas(t2, r2, i2, a2, o2, h2);
  }
  render(e2) {
    return t(this, void 0, void 0, function* () {
      var t2;
      this.timeouts.forEach(t3 => t3()), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", null != this.options.width && (this.scrollContainer.style.width = "number" == typeof this.options.width ? `${this.options.width}px` : this.options.width);
      const i2 = this.getPixelRatio(),
        s2 = this.scrollContainer.clientWidth,
        n2 = Math.ceil(e2.duration * (this.options.minPxPerSec || 0));
      this.isScrollable = n2 > s2;
      const r2 = this.options.fillParent && !this.isScrollable,
        o2 = (r2 ? s2 : n2) * i2;
      if (this.wrapper.style.width = r2 ? "100%" : `${n2}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = e2, this.emit("render"), this.options.splitChannels) for (let i3 = 0; i3 < e2.numberOfChannels; i3++) {
        const s3 = Object.assign(Object.assign({}, this.options), null === (t2 = this.options.splitChannels) || void 0 === t2 ? void 0 : t2[i3]);
        this.renderChannel([e2.getChannelData(i3)], s3, o2, i3);
      } else {
        const t3 = [e2.getChannelData(0)];
        e2.numberOfChannels > 1 && t3.push(e2.getChannelData(1)), this.renderChannel(t3, this.options, o2, 0);
      }
      Promise.resolve().then(() => this.emit("rendered"));
    });
  }
  reRender() {
    var t2;
    if (null === (t2 = this.unsubscribeOnScroll) || void 0 === t2 || t2.call(this), delete this.unsubscribeOnScroll, !this.audioData) return;
    const {
        scrollWidth: e2
      } = this.scrollContainer,
      {
        right: i2
      } = this.progressWrapper.getBoundingClientRect();
    if (this.render(this.audioData), this.isScrollable && e2 !== this.scrollContainer.scrollWidth) {
      const {
        right: t3
      } = this.progressWrapper.getBoundingClientRect();
      let e3 = t3 - i2;
      e3 *= 2, e3 = e3 < 0 ? Math.floor(e3) : Math.ceil(e3), e3 /= 2, this.scrollContainer.scrollLeft += e3;
    }
  }
  zoom(t2) {
    this.options.minPxPerSec = t2, this.reRender();
  }
  scrollIntoView(t2, e2 = false) {
    const {
        scrollLeft: i2,
        scrollWidth: s2,
        clientWidth: n2
      } = this.scrollContainer,
      r2 = t2 * s2,
      o2 = i2,
      a2 = i2 + n2,
      h2 = n2 / 2;
    if (this.isDragging) {
      const t3 = 30;
      r2 + t3 > a2 ? this.scrollContainer.scrollLeft += t3 : r2 - t3 < o2 && (this.scrollContainer.scrollLeft -= t3);
    } else {
      (r2 < o2 || r2 > a2) && (this.scrollContainer.scrollLeft = r2 - (this.options.autoCenter ? h2 : 0));
      const t3 = r2 - i2 - h2;
      e2 && this.options.autoCenter && t3 > 0 && (this.scrollContainer.scrollLeft += Math.min(t3, 10));
    }
    {
      const t3 = this.scrollContainer.scrollLeft,
        e3 = t3 / s2,
        i3 = (t3 + n2) / s2;
      this.emit("scroll", e3, i3, t3, t3 + n2);
    }
  }
  renderProgress(t2, e2) {
    if (isNaN(t2)) return;
    const i2 = 100 * t2;
    this.canvasWrapper.style.clipPath = `polygon(${i2}% 0, 100% 0, 100% 100%, ${i2}% 100%)`, this.progressWrapper.style.width = `${i2}%`, this.cursor.style.left = `${i2}%`, this.cursor.style.transform = `translateX(-${100 === Math.round(i2) ? this.options.cursorWidth : 0}px)`, this.isScrollable && this.options.autoScroll && this.scrollIntoView(t2, e2);
  }
  exportImage(e2, i2, s2) {
    return t(this, void 0, void 0, function* () {
      const t2 = this.canvasWrapper.querySelectorAll("canvas");
      if (!t2.length) throw new Error("No waveform data");
      if ("dataURL" === s2) {
        const s3 = Array.from(t2).map(t3 => t3.toDataURL(e2, i2));
        return Promise.resolve(s3);
      }
      return Promise.all(Array.from(t2).map(t3 => new Promise((s3, n2) => {
        t3.toBlob(t4 => {
          t4 ? s3(t4) : n2(new Error("Could not export image"));
        }, e2, i2);
      })));
    });
  }
};
h.MAX_CANVAS_WIDTH = 8e3, h.MAX_NODES = 10;
var l = class extends e {
  constructor() {
    super(...arguments), this.unsubscribe = () => {};
  }
  start() {
    this.unsubscribe = this.on("tick", () => {
      requestAnimationFrame(() => {
        this.emit("tick");
      });
    }), this.emit("tick");
  }
  stop() {
    this.unsubscribe();
  }
  destroy() {
    this.unsubscribe();
  }
};
var d = class extends e {
  constructor(t2 = new AudioContext()) {
    super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = false, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = true, this.crossOrigin = null, this.seeking = false, this.autoplay = false, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = t2, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
  }
  load() {
    return t(this, void 0, void 0, function* () {});
  }
  get src() {
    return this.currentSrc;
  }
  set src(t2) {
    if (this.currentSrc = t2, this._duration = void 0, !t2) return this.buffer = null, void this.emit("emptied");
    fetch(t2).then(e2 => {
      if (e2.status >= 400) throw new Error(`Failed to fetch ${t2}: ${e2.status} (${e2.statusText})`);
      return e2.arrayBuffer();
    }).then(e2 => this.currentSrc !== t2 ? null : this.audioContext.decodeAudioData(e2)).then(e2 => {
      this.currentSrc === t2 && (this.buffer = e2, this.emit("loadedmetadata"), this.emit("canplay"), this.autoplay && this.play());
    });
  }
  _play() {
    var t2;
    if (!this.paused) return;
    this.paused = false, null === (t2 = this.bufferNode) || void 0 === t2 || t2.disconnect(), this.bufferNode = this.audioContext.createBufferSource(), this.buffer && (this.bufferNode.buffer = this.buffer), this.bufferNode.playbackRate.value = this._playbackRate, this.bufferNode.connect(this.gainNode);
    let e2 = this.playedDuration * this._playbackRate;
    e2 >= this.duration && (e2 = 0, this.playedDuration = 0), this.bufferNode.start(this.audioContext.currentTime, e2), this.playStartTime = this.audioContext.currentTime, this.bufferNode.onended = () => {
      this.currentTime >= this.duration && (this.pause(), this.emit("ended"));
    };
  }
  _pause() {
    var t2;
    this.paused = true, null === (t2 = this.bufferNode) || void 0 === t2 || t2.stop(), this.playedDuration += this.audioContext.currentTime - this.playStartTime;
  }
  play() {
    return t(this, void 0, void 0, function* () {
      this.paused && (this._play(), this.emit("play"));
    });
  }
  pause() {
    this.paused || (this._pause(), this.emit("pause"));
  }
  stopAt(t2) {
    var e2, i2;
    const s2 = t2 - this.currentTime;
    null === (e2 = this.bufferNode) || void 0 === e2 || e2.stop(this.audioContext.currentTime + s2), null === (i2 = this.bufferNode) || void 0 === i2 || i2.addEventListener("ended", () => {
      this.bufferNode = null, this.pause();
    }, {
      once: true
    });
  }
  setSinkId(e2) {
    return t(this, void 0, void 0, function* () {
      return this.audioContext.setSinkId(e2);
    });
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(t2) {
    this._playbackRate = t2, this.bufferNode && (this.bufferNode.playbackRate.value = t2);
  }
  get currentTime() {
    return (this.paused ? this.playedDuration : this.playedDuration + (this.audioContext.currentTime - this.playStartTime)) * this._playbackRate;
  }
  set currentTime(t2) {
    const e2 = !this.paused;
    e2 && this._pause(), this.playedDuration = t2 / this._playbackRate, e2 && this._play(), this.emit("seeking"), this.emit("timeupdate");
  }
  get duration() {
    var t2, e2;
    return null !== (t2 = this._duration) && void 0 !== t2 ? t2 : (null === (e2 = this.buffer) || void 0 === e2 ? void 0 : e2.duration) || 0;
  }
  set duration(t2) {
    this._duration = t2;
  }
  get volume() {
    return this.gainNode.gain.value;
  }
  set volume(t2) {
    this.gainNode.gain.value = t2, this.emit("volumechange");
  }
  get muted() {
    return this._muted;
  }
  set muted(t2) {
    this._muted !== t2 && (this._muted = t2, this._muted ? this.gainNode.disconnect() : this.gainNode.connect(this.audioContext.destination));
  }
  canPlayType(t2) {
    return /^(audio|video)\//.test(t2);
  }
  getGainNode() {
    return this.gainNode;
  }
  getChannelData() {
    const t2 = [];
    if (!this.buffer) return t2;
    const e2 = this.buffer.numberOfChannels;
    for (let i2 = 0; i2 < e2; i2++) t2.push(this.buffer.getChannelData(i2));
    return t2;
  }
};
var c = {
  waveColor: "#999",
  progressColor: "#555",
  cursorWidth: 1,
  minPxPerSec: 0,
  fillParent: true,
  interact: true,
  dragToSeek: false,
  autoScroll: true,
  autoCenter: true,
  sampleRate: 8e3
};
var u = class extends a {
  static create(t2) {
    return new u(t2);
  }
  constructor(t2) {
    const e2 = t2.media || ("WebAudio" === t2.backend ? new d() : void 0);
    super({
      media: e2,
      mediaControls: t2.mediaControls,
      autoplay: t2.autoplay,
      playbackRate: t2.audioRate
    }), this.plugins = [], this.decodedData = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, c, t2), this.timer = new l();
    const i2 = e2 ? void 0 : this.getMediaElement();
    this.renderer = new h(this.options, i2), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
    const s2 = this.options.url || this.getSrc() || "";
    Promise.resolve().then(() => {
      this.emit("init");
      const {
        peaks: t3,
        duration: e3
      } = this.options;
      (s2 || t3 && e3) && this.load(s2, t3, e3).catch(() => null);
    });
  }
  updateProgress(t2 = this.getCurrentTime()) {
    return this.renderer.renderProgress(t2 / this.getDuration(), this.isPlaying()), t2;
  }
  initTimerEvents() {
    this.subscriptions.push(this.timer.on("tick", () => {
      if (!this.isSeeking()) {
        const t2 = this.updateProgress();
        this.emit("timeupdate", t2), this.emit("audioprocess", t2);
      }
    }));
  }
  initPlayerEvents() {
    this.isPlaying() && (this.emit("play"), this.timer.start()), this.mediaSubscriptions.push(this.onMediaEvent("timeupdate", () => {
      const t2 = this.updateProgress();
      this.emit("timeupdate", t2);
    }), this.onMediaEvent("play", () => {
      this.emit("play"), this.timer.start();
    }), this.onMediaEvent("pause", () => {
      this.emit("pause"), this.timer.stop();
    }), this.onMediaEvent("emptied", () => {
      this.timer.stop();
    }), this.onMediaEvent("ended", () => {
      this.emit("finish");
    }), this.onMediaEvent("seeking", () => {
      this.emit("seeking", this.getCurrentTime());
    }), this.onMediaEvent("error", t2 => {
      this.emit("error", t2.error);
    }));
  }
  initRendererEvents() {
    this.subscriptions.push(this.renderer.on("click", (t2, e2) => {
      this.options.interact && (this.seekTo(t2), this.emit("interaction", t2 * this.getDuration()), this.emit("click", t2, e2));
    }), this.renderer.on("dblclick", (t2, e2) => {
      this.emit("dblclick", t2, e2);
    }), this.renderer.on("scroll", (t2, e2, i2, s2) => {
      const n2 = this.getDuration();
      this.emit("scroll", t2 * n2, e2 * n2, i2, s2);
    }), this.renderer.on("render", () => {
      this.emit("redraw");
    }), this.renderer.on("rendered", () => {
      this.emit("redrawcomplete");
    }), this.renderer.on("dragstart", t2 => {
      this.emit("dragstart", t2);
    }), this.renderer.on("dragend", t2 => {
      this.emit("dragend", t2);
    }));
    {
      let t2;
      this.subscriptions.push(this.renderer.on("drag", e2 => {
        if (!this.options.interact) return;
        let i2;
        this.renderer.renderProgress(e2), clearTimeout(t2), this.isPlaying() ? i2 = 0 : true === this.options.dragToSeek ? i2 = 200 : "object" == typeof this.options.dragToSeek && void 0 !== this.options.dragToSeek && (i2 = this.options.dragToSeek.debounceTime), t2 = setTimeout(() => {
          this.seekTo(e2);
        }, i2), this.emit("interaction", e2 * this.getDuration()), this.emit("drag", e2);
      }));
    }
  }
  initPlugins() {
    var t2;
    (null === (t2 = this.options.plugins) || void 0 === t2 ? void 0 : t2.length) && this.options.plugins.forEach(t3 => {
      this.registerPlugin(t3);
    });
  }
  unsubscribePlayerEvents() {
    this.mediaSubscriptions.forEach(t2 => t2()), this.mediaSubscriptions = [];
  }
  setOptions(t2) {
    this.options = Object.assign({}, this.options, t2), this.renderer.setOptions(this.options), t2.audioRate && this.setPlaybackRate(t2.audioRate), null != t2.mediaControls && (this.getMediaElement().controls = t2.mediaControls);
  }
  registerPlugin(t2) {
    return t2._init(this), this.plugins.push(t2), this.subscriptions.push(t2.once("destroy", () => {
      this.plugins = this.plugins.filter(e2 => e2 !== t2);
    })), t2;
  }
  getWrapper() {
    return this.renderer.getWrapper();
  }
  getWidth() {
    return this.renderer.getWidth();
  }
  getScroll() {
    return this.renderer.getScroll();
  }
  setScroll(t2) {
    return this.renderer.setScroll(t2);
  }
  setScrollTime(t2) {
    const e2 = t2 / this.getDuration();
    this.renderer.setScrollPercentage(e2);
  }
  getActivePlugins() {
    return this.plugins;
  }
  loadAudio(e2, s2, n2, r2) {
    return t(this, void 0, void 0, function* () {
      var t2;
      if (this.emit("load", e2), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, !s2 && !n2) {
        const i2 = this.options.fetchParams || {};
        window.AbortController && !i2.signal && (this.abortController = new AbortController(), i2.signal = null === (t2 = this.abortController) || void 0 === t2 ? void 0 : t2.signal);
        const n3 = t3 => this.emit("loading", t3);
        s2 = yield o.fetchBlob(e2, n3, i2);
      }
      this.setSrc(e2, s2);
      const a2 = yield new Promise(t3 => {
        const e3 = r2 || this.getDuration();
        e3 ? t3(e3) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", () => t3(this.getDuration()), {
          once: true
        }));
      });
      if (!e2 && !s2) {
        const t3 = this.getMediaElement();
        t3 instanceof d && (t3.duration = a2);
      }
      if (n2) this.decodedData = i.createBuffer(n2, a2 || 0);else if (s2) {
        const t3 = yield s2.arrayBuffer();
        this.decodedData = yield i.decode(t3, this.options.sampleRate);
      }
      this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
    });
  }
  load(e2, i2, s2) {
    return t(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio(e2, void 0, i2, s2);
      } catch (t2) {
        throw this.emit("error", t2), t2;
      }
    });
  }
  loadBlob(e2, i2, s2) {
    return t(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio("", e2, i2, s2);
      } catch (t2) {
        throw this.emit("error", t2), t2;
      }
    });
  }
  zoom(t2) {
    if (!this.decodedData) throw new Error("No audio loaded");
    this.renderer.zoom(t2), this.emit("zoom", t2);
  }
  getDecodedData() {
    return this.decodedData;
  }
  exportPeaks({
    channels: t2 = 2,
    maxLength: e2 = 8e3,
    precision: i2 = 1e4
  } = {}) {
    if (!this.decodedData) throw new Error("The audio has not been decoded yet");
    const s2 = Math.min(t2, this.decodedData.numberOfChannels),
      n2 = [];
    for (let t3 = 0; t3 < s2; t3++) {
      const s3 = this.decodedData.getChannelData(t3),
        r2 = [],
        o2 = s3.length / e2;
      for (let t4 = 0; t4 < e2; t4++) {
        const e3 = s3.slice(Math.floor(t4 * o2), Math.ceil((t4 + 1) * o2));
        let n3 = 0;
        for (let t5 = 0; t5 < e3.length; t5++) {
          const i3 = e3[t5];
          Math.abs(i3) > Math.abs(n3) && (n3 = i3);
        }
        r2.push(Math.round(n3 * i2) / i2);
      }
      n2.push(r2);
    }
    return n2;
  }
  getDuration() {
    let t2 = super.getDuration() || 0;
    return 0 !== t2 && t2 !== 1 / 0 || !this.decodedData || (t2 = this.decodedData.duration), t2;
  }
  toggleInteraction(t2) {
    this.options.interact = t2;
  }
  setTime(t2) {
    super.setTime(t2), this.updateProgress(t2), this.emit("timeupdate", t2);
  }
  seekTo(t2) {
    const e2 = this.getDuration() * t2;
    this.setTime(e2);
  }
  playPause() {
    return t(this, void 0, void 0, function* () {
      return this.isPlaying() ? this.pause() : this.play();
    });
  }
  stop() {
    this.pause(), this.setTime(0);
  }
  skip(t2) {
    this.setTime(this.getCurrentTime() + t2);
  }
  empty() {
    this.load("", [[0]], 1e-3);
  }
  setMediaElement(t2) {
    this.unsubscribePlayerEvents(), super.setMediaElement(t2), this.initPlayerEvents();
  }
  exportImage() {
    return t(this, arguments, void 0, function* (t2 = "image/png", e2 = 1, i2 = "dataURL") {
      return this.renderer.exportImage(t2, e2, i2);
    });
  }
  destroy() {
    var t2;
    this.emit("destroy"), null === (t2 = this.abortController) || void 0 === t2 || t2.abort(), this.plugins.forEach(t3 => t3.destroy()), this.subscriptions.forEach(t3 => t3()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
  }
};
u.BasePlugin = class extends e {
  constructor(t2) {
    super(), this.subscriptions = [], this.options = t2;
  }
  onInit() {}
  _init(t2) {
    this.wavesurfer = t2, this.onInit();
  }
  destroy() {
    this.emit("destroy"), this.subscriptions.forEach(t2 => t2());
  }
}, u.dom = r;

// .beyond/uimport/wavesurfer.js.7.8.5.js
var wavesurfer_js_7_8_5_default = u;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC93YXZlc3VyZmVyLmpzLjcuOC41LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dhdmVzdXJmZXIuanMvZGlzdC93YXZlc3VyZmVyLmVzbS5qcyJdLCJuYW1lcyI6WyJ3YXZlc3VyZmVyX2pzXzdfOF81X2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJ3YXZlc3VyZmVyX2pzXzdfOF81X2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwidCIsInQyIiwiZTIiLCJpMiIsInMyIiwiUHJvbWlzZSIsIm4yIiwicjIiLCJvMiIsInQzIiwiaDIiLCJuZXh0IiwidDQiLCJhMiIsInRocm93IiwiZTMiLCJkb25lIiwidmFsdWUiLCJ0aGVuIiwiYXBwbHkiLCJTdXBwcmVzc2VkRXJyb3IiLCJlIiwiY29uc3RydWN0b3IiLCJsaXN0ZW5lcnMiLCJvbiIsIlNldCIsImFkZCIsIm9uY2UiLCJpMyIsImkiLCJ1biIsImRlbGV0ZSIsInVuQWxsIiwiZW1pdCIsImZvckVhY2giLCJkZWNvZGUiLCJBdWRpb0NvbnRleHQiLCJzYW1wbGVSYXRlIiwiZGVjb2RlQXVkaW9EYXRhIiwiZmluYWxseSIsImNsb3NlIiwiY3JlYXRlQnVmZmVyIiwic29tZSIsImxlbmd0aCIsIk1hdGgiLCJhYnMiLCJlNCIsImR1cmF0aW9uIiwibnVtYmVyT2ZDaGFubmVscyIsImdldENoYW5uZWxEYXRhIiwiY29weUZyb21DaGFubmVsIiwiQXVkaW9CdWZmZXIiLCJwcm90b3R5cGUiLCJjb3B5VG9DaGFubmVsIiwicyIsInhtbG5zIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiZW50cmllcyIsIm4zIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImFzc2lnbiIsInN0eWxlIiwidGV4dENvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsIm4iLCJyIiwiZnJlZXplIiwiX19wcm90b19fIiwibyIsImZldGNoQmxvYiIsImZldGNoIiwic3RhdHVzIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiYm9keSIsImhlYWRlcnMiLCJzMyIsImdldFJlYWRlciIsIk51bWJlciIsImdldCIsInJvdW5kIiwiYSIsInJlYWQiLCJjbG9uZSIsImJsb2IiLCJpc0V4dGVybmFsTWVkaWEiLCJtZWRpYSIsIm1lZGlhQ29udHJvbHMiLCJjb250cm9scyIsImF1dG9wbGF5IiwicGxheWJhY2tSYXRlIiwib25NZWRpYUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRTcmMiLCJjdXJyZW50U3JjIiwic3JjIiwicmV2b2tlU3JjIiwic3RhcnRzV2l0aCIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImNhblBsYXlUeXBlIiwic2V0U3JjIiwiQmxvYiIsInR5cGUiLCJjcmVhdGVPYmplY3RVUkwiLCJkZXN0cm95IiwicGF1c2UiLCJyZW1vdmUiLCJsb2FkIiwic2V0TWVkaWFFbGVtZW50IiwicGxheSIsImlzUGxheWluZyIsInBhdXNlZCIsImVuZGVkIiwic2V0VGltZSIsImN1cnJlbnRUaW1lIiwiZ2V0RHVyYXRpb24iLCJnZXRDdXJyZW50VGltZSIsImdldFZvbHVtZSIsInZvbHVtZSIsInNldFZvbHVtZSIsImdldE11dGVkIiwibXV0ZWQiLCJzZXRNdXRlZCIsImdldFBsYXliYWNrUmF0ZSIsImlzU2Vla2luZyIsInNlZWtpbmciLCJzZXRQbGF5YmFja1JhdGUiLCJwcmVzZXJ2ZXNQaXRjaCIsImdldE1lZGlhRWxlbWVudCIsInNldFNpbmtJZCIsImgiLCJ0aW1lb3V0cyIsImlzU2Nyb2xsYWJsZSIsImF1ZGlvRGF0YSIsInJlc2l6ZU9ic2VydmVyIiwibGFzdENvbnRhaW5lcldpZHRoIiwiaXNEcmFnZ2luZyIsInN1YnNjcmlwdGlvbnMiLCJvcHRpb25zIiwicGFyZW50RnJvbU9wdGlvbnNDb250YWluZXIiLCJjb250YWluZXIiLCJwYXJlbnQiLCJpbml0SHRtbCIsInNjcm9sbENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJ3cmFwcGVyIiwiY2FudmFzV3JhcHBlciIsInByb2dyZXNzV3JhcHBlciIsImN1cnNvciIsImluaXRFdmVudHMiLCJIVE1MRWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhZ1RvU2VlayIsImluaXREcmFnIiwic2Nyb2xsTGVmdCIsInNjcm9sbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJSZXNpemVPYnNlcnZlciIsImNyZWF0ZURlbGF5Iiwib25Db250YWluZXJSZXNpemUiLCJjYXRjaCIsIm9ic2VydmUiLCJyZVJlbmRlciIsInB1c2giLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImwyIiwibDMiLCJidXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImQyIiwiYzIiLCJ1MiIsInAiLCJEYXRlIiwibm93IiwibSIsInIzIiwiaDMiLCJsNCIsIm0yIiwiczQiLCJvMyIsImciLCJhMyIsImYiLCJyZWxhdGVkVGFyZ2V0IiwiZG9jdW1lbnRFbGVtZW50IiwidiIsImIiLCJwYXNzaXZlIiwiY2FwdHVyZSIsInNldFRpbWVvdXQiLCJtYXgiLCJtaW4iLCJnZXRIZWlnaHQiLCJpc05hTiIsImNsaWVudEhlaWdodCIsImV2ZXJ5Iiwib3ZlcmxheSIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJjc3BOb25jZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJzcGxpdENoYW5uZWxzIiwic2V0T3B0aW9ucyIsImdldFdyYXBwZXIiLCJnZXRXaWR0aCIsImdldFNjcm9sbCIsInNldFNjcm9sbCIsInNldFNjcm9sbFBlcmNlbnRhZ2UiLCJkaXNjb25uZWN0IiwidW5zdWJzY3JpYmVPblNjcm9sbCIsImNhbGwiLCJjbGVhclRpbWVvdXQiLCJjb252ZXJ0Q29sb3JWYWx1ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJnZXRDb250ZXh0Iiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZ2V0UGl4ZWxSYXRpbyIsInJlbmRlckJhcldhdmVmb3JtIiwiY2FudmFzIiwiYmFyV2lkdGgiLCJiYXJHYXAiLCJiYXJSYWRpdXMiLCJiZWdpblBhdGgiLCJiYXJBbGlnbiIsImQzIiwiZmlsbCIsImNsb3NlUGF0aCIsInJlbmRlckxpbmVXYXZlZm9ybSIsIm1vdmVUbyIsImxpbmVUbyIsInJlbmRlcldhdmVmb3JtIiwiZmlsbFN0eWxlIiwid2F2ZUNvbG9yIiwicmVuZGVyRnVuY3Rpb24iLCJiYXJIZWlnaHQiLCJub3JtYWxpemUiLCJmcm9tIiwicmVkdWNlIiwicmVuZGVyU2luZ2xlQ2FudmFzIiwiY2xvbmVOb2RlIiwiZHJhd0ltYWdlIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwicHJvZ3Jlc3NDb2xvciIsImZpbGxSZWN0IiwicmVuZGVyTXVsdGlDYW52YXMiLCJNQVhfQ0FOVkFTX1dJRFRIIiwiZmxvb3IiLCJtYXAiLCJpNCIsInNsaWNlIiwiY2VpbCIsImtleXMiLCJNQVhfTk9ERVMiLCJyZW5kZXJDaGFubmVsIiwiaGFzT3duUHJvcGVydHkiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJtYXJnaW5Ub3AiLCJtaW5IZWlnaHQiLCJyZW5kZXIiLCJtaW5QeFBlclNlYyIsImZpbGxQYXJlbnQiLCJvdmVyZmxvd1giLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoaWRlU2Nyb2xsYmFyIiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yQ29sb3IiLCJjdXJzb3JXaWR0aCIsInJlc29sdmUiLCJyaWdodCIsInpvb20iLCJzY3JvbGxJbnRvVmlldyIsImF1dG9DZW50ZXIiLCJyZW5kZXJQcm9ncmVzcyIsImNsaXBQYXRoIiwidHJhbnNmb3JtIiwiYXV0b1Njcm9sbCIsImV4cG9ydEltYWdlIiwicXVlcnlTZWxlY3RvckFsbCIsInRvRGF0YVVSTCIsImFsbCIsInRvQmxvYiIsImwiLCJhcmd1bWVudHMiLCJ1bnN1YnNjcmliZSIsInN0YXJ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RvcCIsImQiLCJidWZmZXJOb2RlIiwicGxheVN0YXJ0VGltZSIsInBsYXllZER1cmF0aW9uIiwiX211dGVkIiwiX3BsYXliYWNrUmF0ZSIsIl9kdXJhdGlvbiIsImJ1ZmZlciIsImNyb3NzT3JpZ2luIiwiYXVkaW9Db250ZXh0IiwiZ2Fpbk5vZGUiLCJjcmVhdGVHYWluIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiYXJyYXlCdWZmZXIiLCJfcGxheSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsIm9uZW5kZWQiLCJfcGF1c2UiLCJzdG9wQXQiLCJnYWluIiwidGVzdCIsImdldEdhaW5Ob2RlIiwiYyIsImludGVyYWN0IiwidSIsImNyZWF0ZSIsImJhY2tlbmQiLCJhdWRpb1JhdGUiLCJwbHVnaW5zIiwiZGVjb2RlZERhdGEiLCJtZWRpYVN1YnNjcmlwdGlvbnMiLCJhYm9ydENvbnRyb2xsZXIiLCJ0aW1lciIsInJlbmRlcmVyIiwiaW5pdFBsYXllckV2ZW50cyIsImluaXRSZW5kZXJlckV2ZW50cyIsImluaXRUaW1lckV2ZW50cyIsImluaXRQbHVnaW5zIiwidXJsIiwicGVha3MiLCJ1cGRhdGVQcm9ncmVzcyIsImVycm9yIiwic2Vla1RvIiwiZGVib3VuY2VUaW1lIiwicmVnaXN0ZXJQbHVnaW4iLCJ1bnN1YnNjcmliZVBsYXllckV2ZW50cyIsIl9pbml0IiwiZmlsdGVyIiwic2V0U2Nyb2xsVGltZSIsImdldEFjdGl2ZVBsdWdpbnMiLCJsb2FkQXVkaW8iLCJmZXRjaFBhcmFtcyIsIkFib3J0Q29udHJvbGxlciIsInNpZ25hbCIsImxvYWRCbG9iIiwiZ2V0RGVjb2RlZERhdGEiLCJleHBvcnRQZWFrcyIsImNoYW5uZWxzIiwibWF4TGVuZ3RoIiwicHJlY2lzaW9uIiwidDUiLCJ0b2dnbGVJbnRlcmFjdGlvbiIsInBsYXlQYXVzZSIsInNraXAiLCJlbXB0eSIsImFib3J0IiwiQmFzZVBsdWdpbiIsIm9uSW5pdCIsIndhdmVzdXJmZXIiLCJkb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDJCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsMkJBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sMkJBQUE7OztBQ0FBLFNBQVNPLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtFQUFDLE9BQU8sS0FBSUQsRUFBQSxLQUFJQSxFQUFBLEdBQUVFLE9BQUEsR0FBVyxVQUFTQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLFNBQVNDLEdBQUVDLEVBQUEsRUFBRTtNQUFDLElBQUc7UUFBQ0MsRUFBQSxDQUFFTixFQUFBLENBQUVPLElBQUEsQ0FBS0YsRUFBQyxDQUFDO01BQUMsU0FBT0csRUFBQSxFQUFOO1FBQVNMLEVBQUEsQ0FBRUssRUFBQztNQUFDO0lBQUM7SUFBQyxTQUFTQyxHQUFFSixFQUFBLEVBQUU7TUFBQyxJQUFHO1FBQUNDLEVBQUEsQ0FBRU4sRUFBQSxDQUFFVSxLQUFBLENBQU1MLEVBQUMsQ0FBQztNQUFDLFNBQU9HLEVBQUEsRUFBTjtRQUFTTCxFQUFBLENBQUVLLEVBQUM7TUFBQztJQUFDO0lBQUMsU0FBU0YsR0FBRUQsRUFBQSxFQUFFO01BQUMsSUFBSU0sRUFBQTtNQUFFTixFQUFBLENBQUVPLElBQUEsR0FBS1YsRUFBQSxDQUFFRyxFQUFBLENBQUVRLEtBQUssS0FBR0YsRUFBQSxHQUFFTixFQUFBLENBQUVRLEtBQUEsRUFBTUYsRUFBQSxZQUFhWixFQUFBLEdBQUVZLEVBQUEsR0FBRSxJQUFJWixFQUFBLENBQUcsVUFBU1MsRUFBQSxFQUFFO1FBQUNBLEVBQUEsQ0FBRUcsRUFBQztNQUFDLENBQUUsR0FBR0csSUFBQSxDQUFLVixFQUFBLEVBQUVLLEVBQUM7SUFBQztJQUFDSCxFQUFBLEVBQUdOLEVBQUEsR0FBRUEsRUFBQSxDQUFFZSxLQUFBLENBQU1sQixFQUFBLEVBQUVDLEVBQUEsSUFBRyxFQUFFLEdBQUdTLElBQUEsQ0FBSyxDQUFDO0VBQUMsQ0FBRTtBQUFDO0FBQUMsY0FBWSxPQUFPUyxlQUFBLElBQWlCQSxlQUFBO0FBQWdCLElBQU1DLENBQUEsR0FBTixNQUFPO0VBQUNDLFlBQUEsRUFBYTtJQUFDLEtBQUtDLFNBQUEsR0FBVSxDQUFDO0VBQUM7RUFBQ0MsR0FBR3ZCLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxJQUFHLEtBQUtvQixTQUFBLENBQVV0QixFQUFBLE1BQUssS0FBS3NCLFNBQUEsQ0FBVXRCLEVBQUEsSUFBRyxtQkFBSXdCLEdBQUEsS0FBSyxLQUFLRixTQUFBLENBQVV0QixFQUFBLEVBQUd5QixHQUFBLENBQUl4QixFQUFDLEdBQUUsUUFBTUMsRUFBQSxHQUFFLFNBQU9BLEVBQUEsQ0FBRXdCLElBQUEsRUFBSztNQUFDLE1BQU1DLEVBQUEsR0FBRUMsQ0FBQSxLQUFJO1FBQUMsS0FBS0MsRUFBQSxDQUFHN0IsRUFBQSxFQUFFMkIsRUFBQyxHQUFFLEtBQUtFLEVBQUEsQ0FBRzdCLEVBQUEsRUFBRUMsRUFBQztNQUFDO01BQUUsT0FBTyxLQUFLc0IsRUFBQSxDQUFHdkIsRUFBQSxFQUFFMkIsRUFBQyxHQUFFQSxFQUFBO0lBQUM7SUFBQyxPQUFNLE1BQUksS0FBS0UsRUFBQSxDQUFHN0IsRUFBQSxFQUFFQyxFQUFDO0VBQUM7RUFBQzRCLEdBQUc3QixFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLElBQUlDLEVBQUE7SUFBRSxVQUFRQSxFQUFBLEdBQUUsS0FBS29CLFNBQUEsQ0FBVXRCLEVBQUEsTUFBSyxXQUFTRSxFQUFBLElBQUdBLEVBQUEsQ0FBRTRCLE1BQUEsQ0FBTzdCLEVBQUM7RUFBQztFQUFDeUIsS0FBSzFCLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsT0FBTyxLQUFLc0IsRUFBQSxDQUFHdkIsRUFBQSxFQUFFQyxFQUFBLEVBQUU7TUFBQ3lCLElBQUEsRUFBSztJQUFFLENBQUM7RUFBQztFQUFDSyxNQUFBLEVBQU87SUFBQyxLQUFLVCxTQUFBLEdBQVUsQ0FBQztFQUFDO0VBQUNVLEtBQUtoQyxFQUFBLEtBQUtDLEVBQUEsRUFBRTtJQUFDLEtBQUtxQixTQUFBLENBQVV0QixFQUFBLEtBQUksS0FBS3NCLFNBQUEsQ0FBVXRCLEVBQUEsRUFBR2lDLE9BQUEsQ0FBU3pCLEVBQUEsSUFBR0EsRUFBQSxDQUFFLEdBQUdQLEVBQUMsQ0FBRTtFQUFDO0FBQUM7QUFBQyxJQUFNMkIsQ0FBQSxHQUFFO0VBQUNNLE1BQUEsRUFBTyxTQUFBQSxDQUFTakMsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxPQUFPSCxDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztNQUFDLE1BQU1DLEVBQUEsR0FBRSxJQUFJbUMsWUFBQSxDQUFhO1FBQUNDLFVBQUEsRUFBV2xDO01BQUMsQ0FBQztNQUFFLE9BQU9GLEVBQUEsQ0FBRXFDLGVBQUEsQ0FBZ0JwQyxFQUFDLEVBQUVxQyxPQUFBLENBQVMsTUFBSXRDLEVBQUEsQ0FBRXVDLEtBQUEsQ0FBTSxDQUFFO0lBQUMsQ0FBRTtFQUFDO0VBQUVDLFlBQUEsRUFBYSxTQUFBQSxDQUFTeEMsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxPQUFNLFlBQVUsT0FBT0QsRUFBQSxDQUFFLE9BQUtBLEVBQUEsR0FBRSxDQUFDQSxFQUFDLElBQUcsVUFBU1EsRUFBQSxFQUFFO01BQUMsTUFBTU0sRUFBQSxHQUFFTixFQUFBLENBQUU7TUFBRyxJQUFHTSxFQUFBLENBQUUyQixJQUFBLENBQU05QixFQUFBLElBQUdBLEVBQUEsR0FBRSxLQUFHQSxFQUFBLEdBQUUsRUFBRyxHQUFFO1FBQUMsTUFBTVQsRUFBQSxHQUFFWSxFQUFBLENBQUU0QixNQUFBO1FBQU8sSUFBSXZDLEVBQUEsR0FBRTtRQUFFLFNBQVFRLEVBQUEsR0FBRSxHQUFFQSxFQUFBLEdBQUVULEVBQUEsRUFBRVMsRUFBQSxJQUFJO1VBQUMsTUFBTWdCLEVBQUEsR0FBRWdCLElBQUEsQ0FBS0MsR0FBQSxDQUFJOUIsRUFBQSxDQUFFSCxFQUFBLENBQUU7VUFBRWdCLEVBQUEsR0FBRXhCLEVBQUEsS0FBSUEsRUFBQSxHQUFFd0IsRUFBQTtRQUFFO1FBQUMsV0FBVWtCLEVBQUEsSUFBS3JDLEVBQUEsRUFBRSxTQUFRRyxFQUFBLEdBQUUsR0FBRUEsRUFBQSxHQUFFVCxFQUFBLEVBQUVTLEVBQUEsSUFBSWtDLEVBQUEsQ0FBRWxDLEVBQUEsS0FBSVIsRUFBQTtNQUFDO0lBQUMsRUFBRUgsRUFBQyxHQUFFO01BQUM4QyxRQUFBLEVBQVM3QyxFQUFBO01BQUV5QyxNQUFBLEVBQU8xQyxFQUFBLENBQUUsR0FBRzBDLE1BQUE7TUFBT04sVUFBQSxFQUFXcEMsRUFBQSxDQUFFLEdBQUcwQyxNQUFBLEdBQU96QyxFQUFBO01BQUU4QyxnQkFBQSxFQUFpQi9DLEVBQUEsQ0FBRTBDLE1BQUE7TUFBT00sY0FBQSxFQUFlbEMsRUFBQSxJQUFHLFFBQU1kLEVBQUEsR0FBRSxTQUFPQSxFQUFBLENBQUVjLEVBQUE7TUFBR21DLGVBQUEsRUFBZ0JDLFdBQUEsQ0FBWUMsU0FBQSxDQUFVRixlQUFBO01BQWdCRyxhQUFBLEVBQWNGLFdBQUEsQ0FBWUMsU0FBQSxDQUFVQztJQUFhO0VBQUM7QUFBQztBQUFFLFNBQVNDLEVBQUVyRCxFQUFBLEVBQUVDLEVBQUEsRUFBRTtFQUFDLE1BQU1DLEVBQUEsR0FBRUQsRUFBQSxDQUFFcUQsS0FBQSxHQUFNQyxRQUFBLENBQVNDLGVBQUEsQ0FBZ0J2RCxFQUFBLENBQUVxRCxLQUFBLEVBQU10RCxFQUFDLElBQUV1RCxRQUFBLENBQVNFLGFBQUEsQ0FBY3pELEVBQUM7RUFBRSxXQUFTLENBQUNRLEVBQUEsRUFBRUgsRUFBQyxLQUFJcUQsTUFBQSxDQUFPQyxPQUFBLENBQVExRCxFQUFDLEdBQUUsSUFBRyxlQUFhTyxFQUFBLEVBQUUsV0FBUyxDQUFDRyxFQUFBLEVBQUVpRCxFQUFDLEtBQUlGLE1BQUEsQ0FBT0MsT0FBQSxDQUFRMUQsRUFBQyxHQUFFLFlBQVUsT0FBTzJELEVBQUEsR0FBRTFELEVBQUEsQ0FBRTJELFdBQUEsQ0FBWU4sUUFBQSxDQUFTTyxjQUFBLENBQWVGLEVBQUMsQ0FBQyxJQUFFMUQsRUFBQSxDQUFFMkQsV0FBQSxDQUFZUixDQUFBLENBQUUxQyxFQUFBLEVBQUVpRCxFQUFDLENBQUMsT0FBTSxZQUFVcEQsRUFBQSxHQUFFa0QsTUFBQSxDQUFPSyxNQUFBLENBQU83RCxFQUFBLENBQUU4RCxLQUFBLEVBQU0zRCxFQUFDLElBQUUsa0JBQWdCRyxFQUFBLEdBQUVOLEVBQUEsQ0FBRStELFdBQUEsR0FBWTVELEVBQUEsR0FBRUgsRUFBQSxDQUFFZ0UsWUFBQSxDQUFhMUQsRUFBQSxFQUFFSCxFQUFBLENBQUU4RCxRQUFBLENBQVMsQ0FBQztFQUFFLE9BQU9qRSxFQUFBO0FBQUM7QUFBQyxTQUFTa0UsRUFBRXBFLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUU7RUFBQyxNQUFNRyxFQUFBLEdBQUVnRCxDQUFBLENBQUVyRCxFQUFBLEVBQUVDLEVBQUEsSUFBRyxDQUFDLENBQUM7RUFBRSxPQUFPLFFBQU1DLEVBQUEsSUFBR0EsRUFBQSxDQUFFMkQsV0FBQSxDQUFZeEQsRUFBQyxHQUFFQSxFQUFBO0FBQUM7QUFBQyxJQUFJZ0UsQ0FBQSxHQUFFWCxNQUFBLENBQU9ZLE1BQUEsQ0FBTztFQUFDQyxTQUFBLEVBQVU7RUFBS2QsYUFBQSxFQUFjVyxDQUFBO0VBQUUxRSxPQUFBLEVBQVEwRTtBQUFDLENBQUM7QUFBRSxJQUFNSSxDQUFBLEdBQUU7RUFBQ0MsU0FBQSxFQUFVLFNBQUFBLENBQVN4RSxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsT0FBT0osQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxNQUFNTSxFQUFBLEdBQUUsTUFBTXFFLEtBQUEsQ0FBTXpFLEVBQUEsRUFBRUUsRUFBQztNQUFFLElBQUdFLEVBQUEsQ0FBRXNFLE1BQUEsSUFBUSxLQUFJLE1BQU0sSUFBSUMsS0FBQSxDQUFNLG1CQUFtQjNFLEVBQUEsS0FBTUksRUFBQSxDQUFFc0UsTUFBQSxLQUFXdEUsRUFBQSxDQUFFd0UsVUFBQSxHQUFhO01BQUUsT0FBTyxVQUFTL0QsRUFBQSxFQUFFYSxFQUFBLEVBQUU7UUFBQzVCLENBQUEsQ0FBRSxNQUFLLFFBQU8sUUFBUSxhQUFXO1VBQUMsSUFBRyxDQUFDZSxFQUFBLENBQUVnRSxJQUFBLElBQU0sQ0FBQ2hFLEVBQUEsQ0FBRWlFLE9BQUEsRUFBUTtVQUFPLE1BQU1DLEVBQUEsR0FBRWxFLEVBQUEsQ0FBRWdFLElBQUEsQ0FBS0csU0FBQSxDQUFVO1lBQUVyQixFQUFBLEdBQUVzQixNQUFBLENBQU9wRSxFQUFBLENBQUVpRSxPQUFBLENBQVFJLEdBQUEsQ0FBSSxnQkFBZ0IsQ0FBQyxLQUFHO1VBQUUsSUFBSTdFLEVBQUEsR0FBRTtVQUFFLE1BQU1DLEVBQUEsR0FBRXNDLEVBQUEsSUFBRzlDLENBQUEsQ0FBRSxNQUFLLFFBQU8sUUFBUSxhQUFXO2NBQUNPLEVBQUEsS0FBSSxRQUFNdUMsRUFBQSxHQUFFLFNBQU9BLEVBQUEsQ0FBRUgsTUFBQSxLQUFTO2NBQUUsTUFBTTFDLEVBQUEsR0FBRTJDLElBQUEsQ0FBS3lDLEtBQUEsQ0FBTTlFLEVBQUEsR0FBRXNELEVBQUEsR0FBRSxHQUFHO2NBQUVqQyxFQUFBLENBQUUzQixFQUFDO1lBQUMsQ0FBRTtZQUFFWSxFQUFBLEdBQUV5RSxDQUFBLEtBQUl0RixDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztjQUFDLElBQUlDLEVBQUE7Y0FBRSxJQUFHO2dCQUFDQSxFQUFBLEdBQUUsTUFBTWdGLEVBQUEsQ0FBRU0sSUFBQSxDQUFLO2NBQUMsU0FBTzlFLEVBQUEsRUFBTjtnQkFBUztjQUFNO2NBQUNSLEVBQUEsQ0FBRWUsSUFBQSxLQUFPUixFQUFBLENBQUVQLEVBQUEsQ0FBRWdCLEtBQUssR0FBRSxNQUFNSixFQUFBLENBQUU7WUFBRSxDQUFFO1VBQUVBLEVBQUEsQ0FBRTtRQUFDLENBQUU7TUFBQyxFQUFFUCxFQUFBLENBQUVrRixLQUFBLENBQU0sR0FBRXJGLEVBQUMsR0FBRUcsRUFBQSxDQUFFbUYsSUFBQSxDQUFLO0lBQUMsQ0FBRTtFQUFDO0FBQUM7QUFBRSxJQUFNSCxDQUFBLEdBQU4sY0FBZ0JqRSxDQUFBLENBQUM7RUFBQ0MsWUFBWXJCLEVBQUEsRUFBRTtJQUFDLE1BQU0sR0FBRSxLQUFLeUYsZUFBQSxHQUFnQixPQUFHekYsRUFBQSxDQUFFMEYsS0FBQSxJQUFPLEtBQUtBLEtBQUEsR0FBTTFGLEVBQUEsQ0FBRTBGLEtBQUEsRUFBTSxLQUFLRCxlQUFBLEdBQWdCLFFBQUksS0FBS0MsS0FBQSxHQUFNbkMsUUFBQSxDQUFTRSxhQUFBLENBQWMsT0FBTyxHQUFFekQsRUFBQSxDQUFFMkYsYUFBQSxLQUFnQixLQUFLRCxLQUFBLENBQU1FLFFBQUEsR0FBUyxPQUFJNUYsRUFBQSxDQUFFNkYsUUFBQSxLQUFXLEtBQUtILEtBQUEsQ0FBTUcsUUFBQSxHQUFTLE9BQUksUUFBTTdGLEVBQUEsQ0FBRThGLFlBQUEsSUFBYyxLQUFLQyxZQUFBLENBQWEsV0FBVyxNQUFJO01BQUMsUUFBTS9GLEVBQUEsQ0FBRThGLFlBQUEsS0FBZSxLQUFLSixLQUFBLENBQU1JLFlBQUEsR0FBYTlGLEVBQUEsQ0FBRThGLFlBQUE7SUFBYSxHQUFHO01BQUNwRSxJQUFBLEVBQUs7SUFBRSxDQUFDO0VBQUM7RUFBQ3FFLGFBQWEvRixFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsT0FBTyxLQUFLd0YsS0FBQSxDQUFNTSxnQkFBQSxDQUFpQmhHLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFDLEdBQUUsTUFBSSxLQUFLd0YsS0FBQSxDQUFNTyxtQkFBQSxDQUFvQmpHLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFDO0VBQUM7RUFBQ2dHLE9BQUEsRUFBUTtJQUFDLE9BQU8sS0FBS1IsS0FBQSxDQUFNUyxVQUFBLElBQVksS0FBS1QsS0FBQSxDQUFNVSxHQUFBLElBQUs7RUFBRTtFQUFDQyxVQUFBLEVBQVc7SUFBQyxNQUFNckcsRUFBQSxHQUFFLEtBQUtrRyxNQUFBLENBQU87SUFBRWxHLEVBQUEsQ0FBRXNHLFVBQUEsQ0FBVyxPQUFPLEtBQUdDLEdBQUEsQ0FBSUMsZUFBQSxDQUFnQnhHLEVBQUM7RUFBQztFQUFDeUcsWUFBWXpHLEVBQUEsRUFBRTtJQUFDLE9BQU0sT0FBSyxLQUFLMEYsS0FBQSxDQUFNZSxXQUFBLENBQVl6RyxFQUFDO0VBQUM7RUFBQzBHLE9BQU8xRyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLE1BQU1DLEVBQUEsR0FBRSxLQUFLZ0csTUFBQSxDQUFPO0lBQUUsSUFBR2xHLEVBQUEsSUFBR0UsRUFBQSxLQUFJRixFQUFBLEVBQUU7SUFBTyxLQUFLcUcsU0FBQSxDQUFVO0lBQUUsTUFBTWxHLEVBQUEsR0FBRUYsRUFBQSxZQUFhMEcsSUFBQSxLQUFPLEtBQUtGLFdBQUEsQ0FBWXhHLEVBQUEsQ0FBRTJHLElBQUksS0FBRyxDQUFDNUcsRUFBQSxJQUFHdUcsR0FBQSxDQUFJTSxlQUFBLENBQWdCNUcsRUFBQyxJQUFFRCxFQUFBO0lBQUUsSUFBRztNQUFDLEtBQUswRixLQUFBLENBQU1VLEdBQUEsR0FBSWpHLEVBQUE7SUFBQyxTQUFPVyxFQUFBLEVBQU47TUFBUyxLQUFLNEUsS0FBQSxDQUFNVSxHQUFBLEdBQUlwRyxFQUFBO0lBQUM7RUFBQztFQUFDOEcsUUFBQSxFQUFTO0lBQUMsS0FBS3BCLEtBQUEsQ0FBTXFCLEtBQUEsQ0FBTSxHQUFFLEtBQUt0QixlQUFBLEtBQWtCLEtBQUtDLEtBQUEsQ0FBTXNCLE1BQUEsQ0FBTyxHQUFFLEtBQUtYLFNBQUEsQ0FBVSxHQUFFLEtBQUtYLEtBQUEsQ0FBTVUsR0FBQSxHQUFJLElBQUcsS0FBS1YsS0FBQSxDQUFNdUIsSUFBQSxDQUFLO0VBQUU7RUFBQ0MsZ0JBQWdCbEgsRUFBQSxFQUFFO0lBQUMsS0FBSzBGLEtBQUEsR0FBTTFGLEVBQUE7RUFBQztFQUFDbUgsS0FBQSxFQUFNO0lBQUMsT0FBT3BILENBQUEsQ0FBRSxNQUFLLFFBQU8sUUFBUSxhQUFXO01BQUMsT0FBTyxLQUFLMkYsS0FBQSxDQUFNeUIsSUFBQSxDQUFLO0lBQUMsQ0FBRTtFQUFDO0VBQUNKLE1BQUEsRUFBTztJQUFDLEtBQUtyQixLQUFBLENBQU1xQixLQUFBLENBQU07RUFBQztFQUFDSyxVQUFBLEVBQVc7SUFBQyxPQUFNLENBQUMsS0FBSzFCLEtBQUEsQ0FBTTJCLE1BQUEsSUFBUSxDQUFDLEtBQUszQixLQUFBLENBQU00QixLQUFBO0VBQUs7RUFBQ0MsUUFBUXZILEVBQUEsRUFBRTtJQUFDLEtBQUswRixLQUFBLENBQU04QixXQUFBLEdBQVl4SCxFQUFBO0VBQUM7RUFBQ3lILFlBQUEsRUFBYTtJQUFDLE9BQU8sS0FBSy9CLEtBQUEsQ0FBTTVDLFFBQUE7RUFBUTtFQUFDNEUsZUFBQSxFQUFnQjtJQUFDLE9BQU8sS0FBS2hDLEtBQUEsQ0FBTThCLFdBQUE7RUFBVztFQUFDRyxVQUFBLEVBQVc7SUFBQyxPQUFPLEtBQUtqQyxLQUFBLENBQU1rQyxNQUFBO0VBQU07RUFBQ0MsVUFBVTdILEVBQUEsRUFBRTtJQUFDLEtBQUswRixLQUFBLENBQU1rQyxNQUFBLEdBQU81SCxFQUFBO0VBQUM7RUFBQzhILFNBQUEsRUFBVTtJQUFDLE9BQU8sS0FBS3BDLEtBQUEsQ0FBTXFDLEtBQUE7RUFBSztFQUFDQyxTQUFTaEksRUFBQSxFQUFFO0lBQUMsS0FBSzBGLEtBQUEsQ0FBTXFDLEtBQUEsR0FBTS9ILEVBQUE7RUFBQztFQUFDaUksZ0JBQUEsRUFBaUI7SUFBQyxPQUFPLEtBQUt2QyxLQUFBLENBQU1JLFlBQUE7RUFBWTtFQUFDb0MsVUFBQSxFQUFXO0lBQUMsT0FBTyxLQUFLeEMsS0FBQSxDQUFNeUMsT0FBQTtFQUFPO0VBQUNDLGdCQUFnQnBJLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsUUFBTUEsRUFBQSxLQUFJLEtBQUt5RixLQUFBLENBQU0yQyxjQUFBLEdBQWVwSSxFQUFBLEdBQUcsS0FBS3lGLEtBQUEsQ0FBTUksWUFBQSxHQUFhOUYsRUFBQTtFQUFDO0VBQUNzSSxnQkFBQSxFQUFpQjtJQUFDLE9BQU8sS0FBSzVDLEtBQUE7RUFBSztFQUFDNkMsVUFBVXZJLEVBQUEsRUFBRTtJQUFDLE9BQU8sS0FBSzBGLEtBQUEsQ0FBTTZDLFNBQUEsQ0FBVXZJLEVBQUM7RUFBQztBQUFDO0FBQUMsSUFBTXdJLENBQUEsR0FBTixjQUFnQnBILENBQUEsQ0FBQztFQUFDQyxZQUFZckIsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxNQUFNLEdBQUUsS0FBS3dJLFFBQUEsR0FBUyxFQUFDLEVBQUUsS0FBS0MsWUFBQSxHQUFhLE9BQUcsS0FBS0MsU0FBQSxHQUFVLE1BQUssS0FBS0MsY0FBQSxHQUFlLE1BQUssS0FBS0Msa0JBQUEsR0FBbUIsR0FBRSxLQUFLQyxVQUFBLEdBQVcsT0FBRyxLQUFLQyxhQUFBLEdBQWMsRUFBQyxFQUFFLEtBQUtBLGFBQUEsR0FBYyxFQUFDLEVBQUUsS0FBS0MsT0FBQSxHQUFRaEosRUFBQTtJQUFFLE1BQU1FLEVBQUEsR0FBRSxLQUFLK0ksMEJBQUEsQ0FBMkJqSixFQUFBLENBQUVrSixTQUFTO0lBQUUsS0FBS0MsTUFBQSxHQUFPakosRUFBQTtJQUFFLE1BQUssQ0FBQ0MsRUFBQSxFQUFFRSxFQUFDLElBQUUsS0FBSytJLFFBQUEsQ0FBUztJQUFFbEosRUFBQSxDQUFFMkQsV0FBQSxDQUFZMUQsRUFBQyxHQUFFLEtBQUsrSSxTQUFBLEdBQVUvSSxFQUFBLEVBQUUsS0FBS2tKLGVBQUEsR0FBZ0JoSixFQUFBLENBQUVpSixhQUFBLENBQWMsU0FBUyxHQUFFLEtBQUtDLE9BQUEsR0FBUWxKLEVBQUEsQ0FBRWlKLGFBQUEsQ0FBYyxVQUFVLEdBQUUsS0FBS0UsYUFBQSxHQUFjbkosRUFBQSxDQUFFaUosYUFBQSxDQUFjLFdBQVcsR0FBRSxLQUFLRyxlQUFBLEdBQWdCcEosRUFBQSxDQUFFaUosYUFBQSxDQUFjLFdBQVcsR0FBRSxLQUFLSSxNQUFBLEdBQU9ySixFQUFBLENBQUVpSixhQUFBLENBQWMsU0FBUyxHQUFFckosRUFBQSxJQUFHSSxFQUFBLENBQUV3RCxXQUFBLENBQVk1RCxFQUFDLEdBQUUsS0FBSzBKLFVBQUEsQ0FBVztFQUFDO0VBQUNWLDJCQUEyQmpKLEVBQUEsRUFBRTtJQUFDLElBQUlDLEVBQUE7SUFBRSxJQUFHLFlBQVUsT0FBT0QsRUFBQSxHQUFFQyxFQUFBLEdBQUVzRCxRQUFBLENBQVMrRixhQUFBLENBQWN0SixFQUFDLElBQUVBLEVBQUEsWUFBYTRKLFdBQUEsS0FBYzNKLEVBQUEsR0FBRUQsRUFBQSxHQUFHLENBQUNDLEVBQUEsRUFBRSxNQUFNLElBQUkyRSxLQUFBLENBQU0scUJBQXFCO0lBQUUsT0FBTzNFLEVBQUE7RUFBQztFQUFDMEosV0FBQSxFQUFZO0lBQUMsTUFBTTNKLEVBQUEsR0FBRVEsRUFBQSxJQUFHO01BQUMsTUFBTVAsRUFBQSxHQUFFLEtBQUtzSixPQUFBLENBQVFNLHFCQUFBLENBQXNCO1FBQUUzSixFQUFBLEdBQUVNLEVBQUEsQ0FBRXNKLE9BQUEsR0FBUTdKLEVBQUEsQ0FBRThKLElBQUE7UUFBSzVKLEVBQUEsR0FBRUssRUFBQSxDQUFFd0osT0FBQSxHQUFRL0osRUFBQSxDQUFFZ0ssR0FBQTtNQUFJLE9BQU0sQ0FBQy9KLEVBQUEsR0FBRUQsRUFBQSxDQUFFaUssS0FBQSxFQUFNL0osRUFBQSxHQUFFRixFQUFBLENBQUVrSyxNQUFNO0lBQUM7SUFBRSxJQUFHLEtBQUtaLE9BQUEsQ0FBUXZELGdCQUFBLENBQWlCLFNBQVMvRixFQUFBLElBQUc7TUFBQyxNQUFLLENBQUNDLEVBQUEsRUFBRUMsRUFBQyxJQUFFSCxFQUFBLENBQUVDLEVBQUM7TUFBRSxLQUFLK0IsSUFBQSxDQUFLLFNBQVE5QixFQUFBLEVBQUVDLEVBQUM7SUFBQyxDQUFFLEdBQUUsS0FBS29KLE9BQUEsQ0FBUXZELGdCQUFBLENBQWlCLFlBQVkvRixFQUFBLElBQUc7TUFBQyxNQUFLLENBQUNDLEVBQUEsRUFBRUMsRUFBQyxJQUFFSCxFQUFBLENBQUVDLEVBQUM7TUFBRSxLQUFLK0IsSUFBQSxDQUFLLFlBQVc5QixFQUFBLEVBQUVDLEVBQUM7SUFBQyxDQUFFLEdBQUUsU0FBSyxLQUFLNkksT0FBQSxDQUFRb0IsVUFBQSxJQUFZLFlBQVUsT0FBTyxLQUFLcEIsT0FBQSxDQUFRb0IsVUFBQSxJQUFZLEtBQUtDLFFBQUEsQ0FBUyxHQUFFLEtBQUtoQixlQUFBLENBQWdCckQsZ0JBQUEsQ0FBaUIsVUFBVSxNQUFJO01BQUMsTUFBSztVQUFDc0UsVUFBQSxFQUFXOUosRUFBQTtVQUFFK0osV0FBQSxFQUFZdEssRUFBQTtVQUFFdUssV0FBQSxFQUFZdEs7UUFBQyxJQUFFLEtBQUttSixlQUFBO1FBQWdCbEosRUFBQSxHQUFFSyxFQUFBLEdBQUVQLEVBQUE7UUFBRUksRUFBQSxJQUFHRyxFQUFBLEdBQUVOLEVBQUEsSUFBR0QsRUFBQTtNQUFFLEtBQUsrQixJQUFBLENBQUssVUFBUzdCLEVBQUEsRUFBRUUsRUFBQSxFQUFFRyxFQUFBLEVBQUVBLEVBQUEsR0FBRU4sRUFBQztJQUFDLENBQUUsR0FBRSxjQUFZLE9BQU91SyxjQUFBLEVBQWU7TUFBQyxNQUFNakssRUFBQSxHQUFFLEtBQUtrSyxXQUFBLENBQVksR0FBRztNQUFFLEtBQUs5QixjQUFBLEdBQWUsSUFBSTZCLGNBQUEsQ0FBZ0IsTUFBSTtRQUFDakssRUFBQSxDQUFFLEVBQUVTLElBQUEsQ0FBTSxNQUFJLEtBQUswSixpQkFBQSxDQUFrQixDQUFFLEVBQUVDLEtBQUEsQ0FBTyxNQUFJLENBQUMsQ0FBRTtNQUFDLENBQUUsR0FBRSxLQUFLaEMsY0FBQSxDQUFlaUMsT0FBQSxDQUFRLEtBQUt4QixlQUFlO0lBQUM7RUFBQztFQUFDc0Isa0JBQUEsRUFBbUI7SUFBQyxNQUFNM0ssRUFBQSxHQUFFLEtBQUttSixNQUFBLENBQU9xQixXQUFBO0lBQVl4SyxFQUFBLEtBQUksS0FBSzZJLGtCQUFBLElBQW9CLFdBQVMsS0FBS0csT0FBQSxDQUFRbUIsTUFBQSxLQUFTLEtBQUt0QixrQkFBQSxHQUFtQjdJLEVBQUEsRUFBRSxLQUFLOEssUUFBQSxDQUFTO0VBQUU7RUFBQ1QsU0FBQSxFQUFVO0lBQUMsS0FBS3RCLGFBQUEsQ0FBY2dDLElBQUEsQ0FBSyxVQUFTL0ssRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFRSxFQUFBLEdBQUUsR0FBRUMsRUFBQSxHQUFFLEdBQUVDLEVBQUEsR0FBRSxLQUFJO01BQUMsSUFBRyxDQUFDUCxFQUFBLEVBQUUsT0FBTSxNQUFJLENBQUM7TUFBRSxNQUFNWSxFQUFBLEdBQUVvSyxVQUFBLENBQVcsbUJBQW1CLEVBQUVDLE9BQUE7TUFBUSxJQUFJeEssRUFBQSxHQUFFK0gsQ0FBQSxLQUFJLENBQUM7TUFBRSxNQUFNMEMsRUFBQSxHQUFFQyxFQUFBLElBQUc7UUFBQyxJQUFHQSxFQUFBLENBQUVDLE1BQUEsS0FBUzlLLEVBQUEsRUFBRTtRQUFPNkssRUFBQSxDQUFFRSxjQUFBLENBQWUsR0FBRUYsRUFBQSxDQUFFRyxlQUFBLENBQWdCO1FBQUUsSUFBSUMsRUFBQSxHQUFFSixFQUFBLENBQUVyQixPQUFBO1VBQVEwQixFQUFBLEdBQUVMLEVBQUEsQ0FBRW5CLE9BQUE7VUFBUXlCLEVBQUEsR0FBRTtRQUFHLE1BQU1DLENBQUEsR0FBRUMsSUFBQSxDQUFLQyxHQUFBLENBQUk7VUFBRUMsQ0FBQSxHQUFFN0csRUFBQSxJQUFHO1lBQUMsSUFBR0EsRUFBQSxDQUFFcUcsY0FBQSxDQUFlLEdBQUVyRyxFQUFBLENBQUVzRyxlQUFBLENBQWdCLEdBQUUxSyxFQUFBLElBQUcrSyxJQUFBLENBQUtDLEdBQUEsQ0FBSSxJQUFFRixDQUFBLEdBQUVuTCxFQUFBLEVBQUU7WUFBTyxNQUFNdUwsRUFBQSxHQUFFOUcsRUFBQSxDQUFFOEUsT0FBQTtjQUFRaUMsRUFBQSxHQUFFL0csRUFBQSxDQUFFZ0YsT0FBQTtjQUFRZ0MsRUFBQSxHQUFFRixFQUFBLEdBQUVQLEVBQUE7Y0FBRVUsRUFBQSxHQUFFRixFQUFBLEdBQUVQLEVBQUE7WUFBRSxJQUFHQyxFQUFBLElBQUc5SSxJQUFBLENBQUtDLEdBQUEsQ0FBSW9KLEVBQUMsSUFBRTNMLEVBQUEsSUFBR3NDLElBQUEsQ0FBS0MsR0FBQSxDQUFJcUosRUFBQyxJQUFFNUwsRUFBQSxFQUFFO2NBQUMsTUFBTTZMLEVBQUEsR0FBRWxNLEVBQUEsQ0FBRTZKLHFCQUFBLENBQXNCO2dCQUFFO2tCQUFDRSxJQUFBLEVBQUtuRyxFQUFBO2tCQUFFcUcsR0FBQSxFQUFJa0M7Z0JBQUMsSUFBRUQsRUFBQTtjQUFFVCxFQUFBLEtBQUksUUFBTXZMLEVBQUEsSUFBR0EsRUFBQSxDQUFFcUwsRUFBQSxHQUFFM0gsRUFBQSxFQUFFNEgsRUFBQSxHQUFFVyxFQUFDLEdBQUVWLEVBQUEsR0FBRSxPQUFJeEwsRUFBQSxDQUFFK0wsRUFBQSxFQUFFQyxFQUFBLEVBQUVILEVBQUEsR0FBRWxJLEVBQUEsRUFBRW1JLEVBQUEsR0FBRUksRUFBQyxHQUFFWixFQUFBLEdBQUVPLEVBQUEsRUFBRU4sRUFBQSxHQUFFTyxFQUFBO1lBQUM7VUFBQztVQUFFSyxDQUFBLEdBQUV0TCxFQUFBLElBQUc7WUFBQyxJQUFHMkssRUFBQSxFQUFFO2NBQUMsTUFBTTlKLEVBQUEsR0FBRWIsRUFBQSxDQUFFZ0osT0FBQTtnQkFBUWxHLEVBQUEsR0FBRTlDLEVBQUEsQ0FBRWtKLE9BQUE7Z0JBQVE4QixFQUFBLEdBQUU5TCxFQUFBLENBQUU2SixxQkFBQSxDQUFzQjtnQkFBRTtrQkFBQ0UsSUFBQSxFQUFLb0MsRUFBQTtrQkFBRWxDLEdBQUEsRUFBSW9DO2dCQUFDLElBQUVQLEVBQUE7Y0FBRSxRQUFNM0wsRUFBQSxJQUFHQSxFQUFBLENBQUV3QixFQUFBLEdBQUV3SyxFQUFBLEVBQUV2SSxFQUFBLEdBQUV5SSxFQUFDO1lBQUM7WUFBQzVMLEVBQUEsQ0FBRTtVQUFDO1VBQUU2TCxDQUFBLEdBQUU5TCxFQUFBLElBQUc7WUFBQ0EsRUFBQSxDQUFFK0wsYUFBQSxJQUFlL0wsRUFBQSxDQUFFK0wsYUFBQSxLQUFnQmhKLFFBQUEsQ0FBU2lKLGVBQUEsSUFBaUJKLENBQUEsQ0FBRTVMLEVBQUM7VUFBQztVQUFFaU0sQ0FBQSxHQUFFak0sRUFBQSxJQUFHO1lBQUNpTCxFQUFBLEtBQUlqTCxFQUFBLENBQUU4SyxlQUFBLENBQWdCLEdBQUU5SyxFQUFBLENBQUU2SyxjQUFBLENBQWU7VUFBRTtVQUFFcUIsQ0FBQSxHQUFFbE0sRUFBQSxJQUFHO1lBQUNpTCxFQUFBLElBQUdqTCxFQUFBLENBQUU2SyxjQUFBLENBQWU7VUFBQztRQUFFOUgsUUFBQSxDQUFTeUMsZ0JBQUEsQ0FBaUIsZUFBYzZGLENBQUMsR0FBRXRJLFFBQUEsQ0FBU3lDLGdCQUFBLENBQWlCLGFBQVlvRyxDQUFDLEdBQUU3SSxRQUFBLENBQVN5QyxnQkFBQSxDQUFpQixjQUFhc0csQ0FBQyxHQUFFL0ksUUFBQSxDQUFTeUMsZ0JBQUEsQ0FBaUIsaUJBQWdCc0csQ0FBQyxHQUFFL0ksUUFBQSxDQUFTeUMsZ0JBQUEsQ0FBaUIsYUFBWTBHLENBQUEsRUFBRTtVQUFDQyxPQUFBLEVBQVE7UUFBRSxDQUFDLEdBQUVwSixRQUFBLENBQVN5QyxnQkFBQSxDQUFpQixTQUFReUcsQ0FBQSxFQUFFO1VBQUNHLE9BQUEsRUFBUTtRQUFFLENBQUMsR0FBRW5NLEVBQUEsR0FBRStILENBQUEsS0FBSTtVQUFDakYsUUFBQSxDQUFTMEMsbUJBQUEsQ0FBb0IsZUFBYzRGLENBQUMsR0FBRXRJLFFBQUEsQ0FBUzBDLG1CQUFBLENBQW9CLGFBQVltRyxDQUFDLEdBQUU3SSxRQUFBLENBQVMwQyxtQkFBQSxDQUFvQixjQUFhcUcsQ0FBQyxHQUFFL0ksUUFBQSxDQUFTMEMsbUJBQUEsQ0FBb0IsaUJBQWdCcUcsQ0FBQyxHQUFFL0ksUUFBQSxDQUFTMEMsbUJBQUEsQ0FBb0IsYUFBWXlHLENBQUMsR0FBRUcsVUFBQSxDQUFZLE1BQUk7WUFBQ3RKLFFBQUEsQ0FBUzBDLG1CQUFBLENBQW9CLFNBQVF3RyxDQUFBLEVBQUU7Y0FBQ0csT0FBQSxFQUFRO1lBQUUsQ0FBQztVQUFDLEdBQUcsRUFBRTtRQUFDO01BQUM7TUFBRSxPQUFPNU0sRUFBQSxDQUFFZ0csZ0JBQUEsQ0FBaUIsZUFBY2tGLEVBQUMsR0FBRSxNQUFJO1FBQUN6SyxFQUFBLENBQUUsR0FBRVQsRUFBQSxDQUFFaUcsbUJBQUEsQ0FBb0IsZUFBY2lGLEVBQUM7TUFBQztJQUFDLEVBQUUsS0FBSzNCLE9BQUEsRUFBUyxDQUFDdkosRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsS0FBSTtNQUFDLEtBQUs4QixJQUFBLENBQUssUUFBT1csSUFBQSxDQUFLbUssR0FBQSxDQUFJLEdBQUVuSyxJQUFBLENBQUtvSyxHQUFBLENBQUksR0FBRTdNLEVBQUEsR0FBRSxLQUFLcUosT0FBQSxDQUFRTSxxQkFBQSxDQUFzQixFQUFFSyxLQUFLLENBQUMsQ0FBQztJQUFDLEdBQUlsSyxFQUFBLElBQUc7TUFBQyxLQUFLOEksVUFBQSxHQUFXLE1BQUcsS0FBSzlHLElBQUEsQ0FBSyxhQUFZVyxJQUFBLENBQUttSyxHQUFBLENBQUksR0FBRW5LLElBQUEsQ0FBS29LLEdBQUEsQ0FBSSxHQUFFL00sRUFBQSxHQUFFLEtBQUt1SixPQUFBLENBQVFNLHFCQUFBLENBQXNCLEVBQUVLLEtBQUssQ0FBQyxDQUFDO0lBQUMsR0FBSWxLLEVBQUEsSUFBRztNQUFDLEtBQUs4SSxVQUFBLEdBQVcsT0FBRyxLQUFLOUcsSUFBQSxDQUFLLFdBQVVXLElBQUEsQ0FBS21LLEdBQUEsQ0FBSSxHQUFFbkssSUFBQSxDQUFLb0ssR0FBQSxDQUFJLEdBQUUvTSxFQUFBLEdBQUUsS0FBS3VKLE9BQUEsQ0FBUU0scUJBQUEsQ0FBc0IsRUFBRUssS0FBSyxDQUFDLENBQUM7SUFBQyxDQUFFLENBQUM7RUFBQztFQUFDOEMsVUFBVWhOLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsSUFBSUMsRUFBQTtJQUFFLE1BQU1DLEVBQUEsSUFBRyxVQUFRRCxFQUFBLEdBQUUsS0FBS3lJLFNBQUEsS0FBWSxXQUFTekksRUFBQSxHQUFFLFNBQU9BLEVBQUEsQ0FBRTZDLGdCQUFBLEtBQW1CO0lBQUUsSUFBRyxRQUFNL0MsRUFBQSxFQUFFLE9BQU87SUFBSSxJQUFHLENBQUNpTixLQUFBLENBQU0vSCxNQUFBLENBQU9sRixFQUFDLENBQUMsR0FBRSxPQUFPa0YsTUFBQSxDQUFPbEYsRUFBQztJQUFFLElBQUcsV0FBU0EsRUFBQSxFQUFFO01BQUMsTUFBTVEsRUFBQSxHQUFFLEtBQUsySSxNQUFBLENBQU8rRCxZQUFBLElBQWM7TUFBSSxRQUFPLFFBQU1qTixFQUFBLEdBQUUsU0FBT0EsRUFBQSxDQUFFa04sS0FBQSxDQUFPeE0sRUFBQSxJQUFHLENBQUNBLEVBQUEsQ0FBRXlNLE9BQVEsS0FBRzVNLEVBQUEsR0FBRUwsRUFBQSxHQUFFSyxFQUFBO0lBQUM7SUFBQyxPQUFPO0VBQUc7RUFBQzRJLFNBQUEsRUFBVTtJQUFDLE1BQU1wSixFQUFBLEdBQUV1RCxRQUFBLENBQVNFLGFBQUEsQ0FBYyxLQUFLO01BQUV4RCxFQUFBLEdBQUVELEVBQUEsQ0FBRXFOLFlBQUEsQ0FBYTtRQUFDQyxJQUFBLEVBQUs7TUFBTSxDQUFDO01BQUVwTixFQUFBLEdBQUUsS0FBSzhJLE9BQUEsQ0FBUXVFLFFBQUEsSUFBVSxZQUFVLE9BQU8sS0FBS3ZFLE9BQUEsQ0FBUXVFLFFBQUEsR0FBUyxLQUFLdkUsT0FBQSxDQUFRdUUsUUFBQSxDQUFTQyxPQUFBLENBQVEsTUFBSyxFQUFFLElBQUU7SUFBRyxPQUFPdk4sRUFBQSxDQUFFd04sU0FBQSxHQUFVO0FBQUEsY0FBaUJ2TixFQUFBLEdBQUUsV0FBV0EsRUFBQSxNQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBa3VCLEtBQUs4TSxTQUFBLENBQVUsS0FBS2hFLE9BQUEsQ0FBUW1CLE1BQUEsRUFBTyxLQUFLbkIsT0FBQSxDQUFRMEUsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwakMsQ0FBQzFOLEVBQUEsRUFBRUMsRUFBQztFQUFDO0VBQUMwTixXQUFXM04sRUFBQSxFQUFFO0lBQUMsSUFBRyxLQUFLZ0osT0FBQSxDQUFRRSxTQUFBLEtBQVlsSixFQUFBLENBQUVrSixTQUFBLEVBQVU7TUFBQyxNQUFNakosRUFBQSxHQUFFLEtBQUtnSiwwQkFBQSxDQUEyQmpKLEVBQUEsQ0FBRWtKLFNBQVM7TUFBRWpKLEVBQUEsQ0FBRTRELFdBQUEsQ0FBWSxLQUFLcUYsU0FBUyxHQUFFLEtBQUtDLE1BQUEsR0FBT2xKLEVBQUE7SUFBQztJQUFDLFNBQUtELEVBQUEsQ0FBRW9LLFVBQUEsSUFBWSxZQUFVLE9BQU8sS0FBS3BCLE9BQUEsQ0FBUW9CLFVBQUEsSUFBWSxLQUFLQyxRQUFBLENBQVMsR0FBRSxLQUFLckIsT0FBQSxHQUFRaEosRUFBQSxFQUFFLEtBQUs4SyxRQUFBLENBQVM7RUFBQztFQUFDOEMsV0FBQSxFQUFZO0lBQUMsT0FBTyxLQUFLckUsT0FBQTtFQUFPO0VBQUNzRSxTQUFBLEVBQVU7SUFBQyxPQUFPLEtBQUt4RSxlQUFBLENBQWdCbUIsV0FBQTtFQUFXO0VBQUNzRCxVQUFBLEVBQVc7SUFBQyxPQUFPLEtBQUt6RSxlQUFBLENBQWdCaUIsVUFBQTtFQUFVO0VBQUN5RCxVQUFVL04sRUFBQSxFQUFFO0lBQUMsS0FBS3FKLGVBQUEsQ0FBZ0JpQixVQUFBLEdBQVd0SyxFQUFBO0VBQUM7RUFBQ2dPLG9CQUFvQmhPLEVBQUEsRUFBRTtJQUFDLE1BQUs7UUFBQ3VLLFdBQUEsRUFBWXRLO01BQUMsSUFBRSxLQUFLb0osZUFBQTtNQUFnQm5KLEVBQUEsR0FBRUQsRUFBQSxHQUFFRCxFQUFBO0lBQUUsS0FBSytOLFNBQUEsQ0FBVTdOLEVBQUM7RUFBQztFQUFDNEcsUUFBQSxFQUFTO0lBQUMsSUFBSTlHLEVBQUEsRUFBRUMsRUFBQTtJQUFFLEtBQUs4SSxhQUFBLENBQWM5RyxPQUFBLENBQVN6QixFQUFBLElBQUdBLEVBQUEsQ0FBRSxDQUFFLEdBQUUsS0FBSzBJLFNBQUEsQ0FBVWxDLE1BQUEsQ0FBTyxHQUFFLFVBQVFoSCxFQUFBLEdBQUUsS0FBSzRJLGNBQUEsS0FBaUIsV0FBUzVJLEVBQUEsSUFBR0EsRUFBQSxDQUFFaU8sVUFBQSxDQUFXLEdBQUUsVUFBUWhPLEVBQUEsR0FBRSxLQUFLaU8sbUJBQUEsS0FBc0IsV0FBU2pPLEVBQUEsSUFBR0EsRUFBQSxDQUFFa08sSUFBQSxDQUFLLElBQUk7RUFBQztFQUFDekQsWUFBWTFLLEVBQUEsR0FBRSxJQUFHO0lBQUMsSUFBSUMsRUFBQSxFQUFFQyxFQUFBO0lBQUUsTUFBTUMsRUFBQSxHQUFFa0QsQ0FBQSxLQUFJO01BQUNwRCxFQUFBLElBQUdtTyxZQUFBLENBQWFuTyxFQUFDLEdBQUVDLEVBQUEsSUFBR0EsRUFBQSxDQUFFO0lBQUM7SUFBRSxPQUFPLEtBQUt1SSxRQUFBLENBQVNzQyxJQUFBLENBQUs1SyxFQUFDLEdBQUUsTUFBSSxJQUFJQyxPQUFBLENBQVMsQ0FBQ0MsRUFBQSxFQUFFQyxFQUFBLEtBQUk7TUFBQ0gsRUFBQSxDQUFFLEdBQUVELEVBQUEsR0FBRUksRUFBQSxFQUFFTCxFQUFBLEdBQUU0TSxVQUFBLENBQVksTUFBSTtRQUFDNU0sRUFBQSxHQUFFLFFBQU9DLEVBQUEsR0FBRSxRQUFPRyxFQUFBLENBQUU7TUFBQyxHQUFHTCxFQUFDO0lBQUMsQ0FBRTtFQUFDO0VBQUNxTyxtQkFBbUJyTyxFQUFBLEVBQUU7SUFBQyxJQUFHLENBQUNzTyxLQUFBLENBQU1DLE9BQUEsQ0FBUXZPLEVBQUMsR0FBRSxPQUFPQSxFQUFBLElBQUc7SUFBRyxJQUFHQSxFQUFBLENBQUUwQyxNQUFBLEdBQU8sR0FBRSxPQUFPMUMsRUFBQSxDQUFFLE1BQUk7SUFBRyxNQUFNQyxFQUFBLEdBQUVzRCxRQUFBLENBQVNFLGFBQUEsQ0FBYyxRQUFRO01BQUV2RCxFQUFBLEdBQUVELEVBQUEsQ0FBRXVPLFVBQUEsQ0FBVyxJQUFJO01BQUVyTyxFQUFBLEdBQUVGLEVBQUEsQ0FBRWtLLE1BQUEsSUFBUXNFLE1BQUEsQ0FBT0MsZ0JBQUEsSUFBa0I7TUFBR3JPLEVBQUEsR0FBRUgsRUFBQSxDQUFFeU8sb0JBQUEsQ0FBcUIsR0FBRSxHQUFFLEdBQUV4TyxFQUFDO01BQUVHLEVBQUEsR0FBRSxLQUFHTixFQUFBLENBQUUwQyxNQUFBLEdBQU87SUFBRyxPQUFPMUMsRUFBQSxDQUFFaUMsT0FBQSxDQUFTLENBQUN6QixFQUFBLEVBQUVNLEVBQUEsS0FBSTtNQUFDLE1BQU1hLEVBQUEsR0FBRWIsRUFBQSxHQUFFUixFQUFBO01BQUVELEVBQUEsQ0FBRXVPLFlBQUEsQ0FBYWpOLEVBQUEsRUFBRW5CLEVBQUM7SUFBQyxDQUFFLEdBQUVILEVBQUE7RUFBQztFQUFDd08sY0FBQSxFQUFlO0lBQUMsT0FBT2xNLElBQUEsQ0FBS21LLEdBQUEsQ0FBSSxHQUFFMkIsTUFBQSxDQUFPQyxnQkFBQSxJQUFrQixDQUFDO0VBQUM7RUFBQ0ksa0JBQWtCOU8sRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsTUFBTUUsRUFBQSxHQUFFTCxFQUFBLENBQUU7TUFBR00sRUFBQSxHQUFFTixFQUFBLENBQUUsTUFBSUEsRUFBQSxDQUFFO01BQUdPLEVBQUEsR0FBRUYsRUFBQSxDQUFFcUMsTUFBQTtNQUFPO1FBQUN3SCxLQUFBLEVBQU10SixFQUFBO1FBQUV1SixNQUFBLEVBQU8xSjtNQUFDLElBQUVQLEVBQUEsQ0FBRTZPLE1BQUE7TUFBTzdELEVBQUEsR0FBRXpLLEVBQUEsR0FBRTtNQUFFOEssRUFBQSxHQUFFLEtBQUtzRCxhQUFBLENBQWM7TUFBRXJELEVBQUEsR0FBRXZMLEVBQUEsQ0FBRStPLFFBQUEsR0FBUy9PLEVBQUEsQ0FBRStPLFFBQUEsR0FBU3pELEVBQUEsR0FBRTtNQUFFRSxFQUFBLEdBQUV4TCxFQUFBLENBQUVnUCxNQUFBLEdBQU9oUCxFQUFBLENBQUVnUCxNQUFBLEdBQU8xRCxFQUFBLEdBQUV0TCxFQUFBLENBQUUrTyxRQUFBLEdBQVN4RCxFQUFBLEdBQUUsSUFBRTtNQUFFRSxDQUFBLEdBQUV6TCxFQUFBLENBQUVpUCxTQUFBLElBQVc7TUFBRXJELENBQUEsR0FBRWpMLEVBQUEsSUFBRzRLLEVBQUEsR0FBRUMsRUFBQSxJQUFHbEwsRUFBQTtNQUFFNkwsQ0FBQSxHQUFFVixDQUFBLElBQUcsZUFBY3hMLEVBQUEsR0FBRSxjQUFZO0lBQU9BLEVBQUEsQ0FBRWlQLFNBQUEsQ0FBVTtJQUFFLElBQUk3QyxDQUFBLEdBQUU7TUFBRUcsQ0FBQSxHQUFFO01BQUVDLENBQUEsR0FBRTtJQUFFLFNBQVFsTSxFQUFBLEdBQUUsR0FBRUEsRUFBQSxJQUFHRCxFQUFBLEVBQUVDLEVBQUEsSUFBSTtNQUFDLE1BQU0yTCxFQUFBLEdBQUV4SixJQUFBLENBQUt5QyxLQUFBLENBQU01RSxFQUFBLEdBQUVxTCxDQUFDO01BQUUsSUFBR00sRUFBQSxHQUFFRyxDQUFBLEVBQUU7UUFBQyxNQUFNM0wsRUFBQSxHQUFFZ0MsSUFBQSxDQUFLeUMsS0FBQSxDQUFNcUgsQ0FBQSxHQUFFdkIsRUFBQSxHQUFFL0ssRUFBQztVQUFFeUQsRUFBQSxHQUFFakQsRUFBQSxHQUFFZ0MsSUFBQSxDQUFLeUMsS0FBQSxDQUFNc0gsQ0FBQSxHQUFFeEIsRUFBQSxHQUFFL0ssRUFBQyxLQUFHO1FBQUUsSUFBSTJMLEVBQUEsR0FBRVosRUFBQSxHQUFFdkssRUFBQTtRQUFFLFVBQVFWLEVBQUEsQ0FBRW1QLFFBQUEsR0FBU3RELEVBQUEsR0FBRSxJQUFFLGFBQVc3TCxFQUFBLENBQUVtUCxRQUFBLEtBQVd0RCxFQUFBLEdBQUVyTCxFQUFBLEdBQUVtRCxFQUFBLEdBQUcxRCxFQUFBLENBQUVrTSxDQUFBLEVBQUdFLENBQUEsSUFBR2QsRUFBQSxHQUFFQyxFQUFBLEdBQUdLLEVBQUEsRUFBRU4sRUFBQSxFQUFFNUgsRUFBQSxFQUFFOEgsQ0FBQyxHQUFFWSxDQUFBLEdBQUVILEVBQUEsRUFBRU0sQ0FBQSxHQUFFLEdBQUVDLENBQUEsR0FBRTtNQUFDO01BQUMsTUFBTUwsRUFBQSxHQUFFMUosSUFBQSxDQUFLQyxHQUFBLENBQUl2QyxFQUFBLENBQUVHLEVBQUEsS0FBSSxDQUFDO1FBQUU2TyxFQUFBLEdBQUUxTSxJQUFBLENBQUtDLEdBQUEsQ0FBSXRDLEVBQUEsQ0FBRUUsRUFBQSxLQUFJLENBQUM7TUFBRTZMLEVBQUEsR0FBRUksQ0FBQSxLQUFJQSxDQUFBLEdBQUVKLEVBQUEsR0FBR2dELEVBQUEsR0FBRTNDLENBQUEsS0FBSUEsQ0FBQSxHQUFFMkMsRUFBQTtJQUFFO0lBQUNuUCxFQUFBLENBQUVvUCxJQUFBLENBQUssR0FBRXBQLEVBQUEsQ0FBRXFQLFNBQUEsQ0FBVTtFQUFDO0VBQUNDLG1CQUFtQnhQLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLE1BQU1FLEVBQUEsR0FBRVMsRUFBQSxJQUFHO01BQUMsTUFBTThDLEVBQUEsR0FBRTVELEVBQUEsQ0FBRWMsRUFBQSxLQUFJZCxFQUFBLENBQUU7UUFBR00sRUFBQSxHQUFFc0QsRUFBQSxDQUFFbEIsTUFBQTtRQUFPO1VBQUN5SCxNQUFBLEVBQU81SjtRQUFDLElBQUVMLEVBQUEsQ0FBRTZPLE1BQUE7UUFBT25PLEVBQUEsR0FBRUwsRUFBQSxHQUFFO1FBQUVFLEVBQUEsR0FBRVAsRUFBQSxDQUFFNk8sTUFBQSxDQUFPN0UsS0FBQSxHQUFNNUosRUFBQTtNQUFFSixFQUFBLENBQUV1UCxNQUFBLENBQU8sR0FBRTdPLEVBQUM7TUFBRSxJQUFJc0ssRUFBQSxHQUFFO1FBQUVLLEVBQUEsR0FBRTtNQUFFLFNBQVEvSyxFQUFBLEdBQUUsR0FBRUEsRUFBQSxJQUFHRixFQUFBLEVBQUVFLEVBQUEsSUFBSTtRQUFDLE1BQU1zTCxFQUFBLEdBQUVuSixJQUFBLENBQUt5QyxLQUFBLENBQU01RSxFQUFBLEdBQUVDLEVBQUM7UUFBRSxJQUFHcUwsRUFBQSxHQUFFWixFQUFBLEVBQUU7VUFBQyxNQUFNdkssRUFBQSxHQUFFQyxFQUFBLElBQUcrQixJQUFBLENBQUt5QyxLQUFBLENBQU1tRyxFQUFBLEdBQUUzSyxFQUFBLEdBQUVULEVBQUMsS0FBRyxNQUFJLE1BQUlXLEVBQUEsR0FBRSxLQUFHO1VBQUdaLEVBQUEsQ0FBRXdQLE1BQUEsQ0FBT3hFLEVBQUEsRUFBRXZLLEVBQUMsR0FBRXVLLEVBQUEsR0FBRVksRUFBQSxFQUFFUCxFQUFBLEdBQUU7UUFBQztRQUFDLE1BQU1ZLEVBQUEsR0FBRXhKLElBQUEsQ0FBS0MsR0FBQSxDQUFJZ0IsRUFBQSxDQUFFcEQsRUFBQSxLQUFJLENBQUM7UUFBRTJMLEVBQUEsR0FBRVosRUFBQSxLQUFJQSxFQUFBLEdBQUVZLEVBQUE7TUFBRTtNQUFDak0sRUFBQSxDQUFFd1AsTUFBQSxDQUFPeEUsRUFBQSxFQUFFdEssRUFBQztJQUFDO0lBQUVWLEVBQUEsQ0FBRWlQLFNBQUEsQ0FBVSxHQUFFOU8sRUFBQSxDQUFFLENBQUMsR0FBRUEsRUFBQSxDQUFFLENBQUMsR0FBRUgsRUFBQSxDQUFFb1AsSUFBQSxDQUFLLEdBQUVwUCxFQUFBLENBQUVxUCxTQUFBLENBQVU7RUFBQztFQUFDSSxlQUFlM1AsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLElBQUdBLEVBQUEsQ0FBRTBQLFNBQUEsR0FBVSxLQUFLdkIsa0JBQUEsQ0FBbUJwTyxFQUFBLENBQUU0UCxTQUFTLEdBQUU1UCxFQUFBLENBQUU2UCxjQUFBLEVBQWUsT0FBTyxLQUFLN1AsRUFBQSxDQUFFNlAsY0FBQSxDQUFlOVAsRUFBQSxFQUFFRSxFQUFDO0lBQUUsSUFBSUMsRUFBQSxHQUFFRixFQUFBLENBQUU4UCxTQUFBLElBQVc7SUFBRSxJQUFHOVAsRUFBQSxDQUFFK1AsU0FBQSxFQUFVO01BQUMsTUFBTWxQLEVBQUEsR0FBRXdOLEtBQUEsQ0FBTTJCLElBQUEsQ0FBS2pRLEVBQUEsQ0FBRSxFQUFFLEVBQUVrUSxNQUFBLENBQVEsQ0FBQzFQLEVBQUEsRUFBRXFDLEVBQUEsS0FBSUYsSUFBQSxDQUFLbUssR0FBQSxDQUFJdE0sRUFBQSxFQUFFbUMsSUFBQSxDQUFLQyxHQUFBLENBQUlDLEVBQUMsQ0FBQyxHQUFHLENBQUM7TUFBRTFDLEVBQUEsR0FBRVcsRUFBQSxHQUFFLElBQUVBLEVBQUEsR0FBRTtJQUFDO0lBQUNiLEVBQUEsQ0FBRStPLFFBQUEsSUFBVS9PLEVBQUEsQ0FBRWdQLE1BQUEsSUFBUWhQLEVBQUEsQ0FBRW1QLFFBQUEsR0FBUyxLQUFLTixpQkFBQSxDQUFrQjlPLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUMsSUFBRSxLQUFLcVAsa0JBQUEsQ0FBbUJ4UCxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFDO0VBQUM7RUFBQ2dRLG1CQUFtQm5RLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUUsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLE1BQU1LLEVBQUEsR0FBRSxLQUFLaU8sYUFBQSxDQUFjO01BQUVwTyxFQUFBLEdBQUU4QyxRQUFBLENBQVNFLGFBQUEsQ0FBYyxRQUFRO0lBQUVoRCxFQUFBLENBQUV5SixLQUFBLEdBQU12SCxJQUFBLENBQUt5QyxLQUFBLENBQU1sRixFQUFBLEdBQUVVLEVBQUMsR0FBRUgsRUFBQSxDQUFFMEosTUFBQSxHQUFPeEgsSUFBQSxDQUFLeUMsS0FBQSxDQUFNakYsRUFBQSxHQUFFUyxFQUFDLEdBQUVILEVBQUEsQ0FBRXVELEtBQUEsQ0FBTWtHLEtBQUEsR0FBTSxHQUFHaEssRUFBQSxNQUFNTyxFQUFBLENBQUV1RCxLQUFBLENBQU1tRyxNQUFBLEdBQU8sR0FBR2hLLEVBQUEsTUFBTU0sRUFBQSxDQUFFdUQsS0FBQSxDQUFNK0YsSUFBQSxHQUFLLEdBQUdwSCxJQUFBLENBQUt5QyxLQUFBLENBQU0vRSxFQUFDLE9BQU1DLEVBQUEsQ0FBRXVELFdBQUEsQ0FBWXBELEVBQUM7SUFBRSxNQUFNeUssRUFBQSxHQUFFekssRUFBQSxDQUFFK04sVUFBQSxDQUFXLElBQUk7SUFBRSxJQUFHLEtBQUttQixjQUFBLENBQWUzUCxFQUFBLEVBQUVDLEVBQUEsRUFBRWlMLEVBQUMsR0FBRXpLLEVBQUEsQ0FBRXlKLEtBQUEsR0FBTSxLQUFHekosRUFBQSxDQUFFMEosTUFBQSxHQUFPLEdBQUU7TUFBQyxNQUFNM0osRUFBQSxHQUFFQyxFQUFBLENBQUUyUCxTQUFBLENBQVU7UUFBRXpPLEVBQUEsR0FBRW5CLEVBQUEsQ0FBRWdPLFVBQUEsQ0FBVyxJQUFJO01BQUU3TSxFQUFBLENBQUUwTyxTQUFBLENBQVU1UCxFQUFBLEVBQUUsR0FBRSxDQUFDLEdBQUVrQixFQUFBLENBQUUyTyx3QkFBQSxHQUF5QixhQUFZM08sRUFBQSxDQUFFaU8sU0FBQSxHQUFVLEtBQUt2QixrQkFBQSxDQUFtQnBPLEVBQUEsQ0FBRXNRLGFBQWEsR0FBRTVPLEVBQUEsQ0FBRTZPLFFBQUEsQ0FBUyxHQUFFLEdBQUUvUCxFQUFBLENBQUV5SixLQUFBLEVBQU16SixFQUFBLENBQUUwSixNQUFNLEdBQUU1SixFQUFBLENBQUVzRCxXQUFBLENBQVlyRCxFQUFDO0lBQUM7RUFBQztFQUFDaVEsa0JBQWtCelEsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFRSxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLE1BQU1DLEVBQUEsR0FBRSxLQUFLc08sYUFBQSxDQUFjO01BQUU7UUFBQ3JFLFdBQUEsRUFBWTVKO01BQUMsSUFBRSxLQUFLeUksZUFBQTtNQUFnQjZCLEVBQUEsR0FBRWhMLEVBQUEsR0FBRUssRUFBQTtJQUFFLElBQUlnTCxFQUFBLEdBQUU1SSxJQUFBLENBQUtvSyxHQUFBLENBQUl2RSxDQUFBLENBQUVrSSxnQkFBQSxFQUFpQjlQLEVBQUEsRUFBRXNLLEVBQUM7TUFBRU0sRUFBQSxHQUFFLENBQUM7SUFBRSxJQUFHdkwsRUFBQSxDQUFFK08sUUFBQSxJQUFVL08sRUFBQSxDQUFFZ1AsTUFBQSxFQUFPO01BQUMsTUFBTXpPLEVBQUEsR0FBRVAsRUFBQSxDQUFFK08sUUFBQSxJQUFVO1FBQUdyTixFQUFBLEdBQUVuQixFQUFBLElBQUdQLEVBQUEsQ0FBRWdQLE1BQUEsSUFBUXpPLEVBQUEsR0FBRTtNQUFHK0ssRUFBQSxHQUFFNUosRUFBQSxJQUFHLE1BQUk0SixFQUFBLEdBQUU1SSxJQUFBLENBQUtnTyxLQUFBLENBQU1wRixFQUFBLEdBQUU1SixFQUFDLElBQUVBLEVBQUE7SUFBRTtJQUFDLE1BQU04SixFQUFBLEdBQUU5SixFQUFBLElBQUc7UUFBQyxJQUFHQSxFQUFBLEdBQUUsS0FBR0EsRUFBQSxJQUFHK0osQ0FBQSxFQUFFO1FBQU8sSUFBR0YsRUFBQSxDQUFFN0osRUFBQSxHQUFHO1FBQU82SixFQUFBLENBQUU3SixFQUFBLElBQUc7UUFBRyxNQUFNd0ssRUFBQSxHQUFFeEssRUFBQSxHQUFFNEosRUFBQTtVQUFFYyxFQUFBLEdBQUUxSixJQUFBLENBQUtvSyxHQUFBLENBQUk3QixFQUFBLEdBQUVpQixFQUFBLEVBQUVaLEVBQUM7UUFBRSxJQUFHYyxFQUFBLElBQUcsR0FBRTtRQUFPLE1BQU01TCxFQUFBLEdBQUVULEVBQUEsQ0FBRTRRLEdBQUEsQ0FBS3BRLEVBQUEsSUFBRztVQUFDLE1BQU1NLEVBQUEsR0FBRTZCLElBQUEsQ0FBS2dPLEtBQUEsQ0FBTXhFLEVBQUEsR0FBRWpCLEVBQUEsR0FBRTFLLEVBQUEsQ0FBRWtDLE1BQU07WUFBRW1PLEVBQUEsR0FBRWxPLElBQUEsQ0FBS2dPLEtBQUEsRUFBT3hFLEVBQUEsR0FBRUUsRUFBQSxJQUFHbkIsRUFBQSxHQUFFMUssRUFBQSxDQUFFa0MsTUFBTTtVQUFFLE9BQU9sQyxFQUFBLENBQUVzUSxLQUFBLENBQU1oUSxFQUFBLEVBQUUrUCxFQUFDO1FBQUMsQ0FBRTtRQUFFLEtBQUtWLGtCQUFBLENBQW1CMVAsRUFBQSxFQUFFUixFQUFBLEVBQUVvTSxFQUFBLEVBQUVsTSxFQUFBLEVBQUVnTSxFQUFBLEVBQUU5TCxFQUFBLEVBQUVDLEVBQUM7TUFBQztNQUFFb0wsQ0FBQSxHQUFFL0ksSUFBQSxDQUFLb08sSUFBQSxDQUFLN0YsRUFBQSxHQUFFSyxFQUFDO0lBQUUsSUFBRyxDQUFDLEtBQUs3QyxZQUFBLEVBQWE7TUFBQyxTQUFRbEksRUFBQSxHQUFFLEdBQUVBLEVBQUEsR0FBRWtMLENBQUEsRUFBRWxMLEVBQUEsSUFBSWlMLEVBQUEsQ0FBRWpMLEVBQUM7TUFBRTtJQUFNO0lBQUMsTUFBTXFMLENBQUEsR0FBRSxLQUFLeEMsZUFBQSxDQUFnQmlCLFVBQUEsR0FBV1ksRUFBQTtNQUFFa0IsQ0FBQSxHQUFFekosSUFBQSxDQUFLZ08sS0FBQSxDQUFNOUUsQ0FBQSxHQUFFSCxDQUFDO0lBQUVELEVBQUEsQ0FBRVcsQ0FBQSxHQUFFLENBQUMsR0FBRVgsRUFBQSxDQUFFVyxDQUFDLEdBQUVYLEVBQUEsQ0FBRVcsQ0FBQSxHQUFFLENBQUMsR0FBRVYsQ0FBQSxHQUFFLE1BQUksS0FBS3dDLG1CQUFBLEdBQW9CLEtBQUszTSxFQUFBLENBQUcsVUFBVSxNQUFJO01BQUMsTUFBSztVQUFDK0ksVUFBQSxFQUFXOUo7UUFBQyxJQUFFLEtBQUs2SSxlQUFBO1FBQWdCdkksRUFBQSxHQUFFNkIsSUFBQSxDQUFLZ08sS0FBQSxDQUFNblEsRUFBQSxHQUFFMEssRUFBQSxHQUFFUSxDQUFDO01BQUVoSSxNQUFBLENBQU9zTixJQUFBLENBQUt4RixFQUFDLEVBQUU5SSxNQUFBLEdBQU84RixDQUFBLENBQUV5SSxTQUFBLEtBQVk1USxFQUFBLENBQUVvTixTQUFBLEdBQVUsSUFBR25OLEVBQUEsQ0FBRW1OLFNBQUEsR0FBVSxJQUFHakMsRUFBQSxHQUFFLENBQUMsSUFBR0MsRUFBQSxDQUFFM0ssRUFBQSxHQUFFLENBQUMsR0FBRTJLLEVBQUEsQ0FBRTNLLEVBQUMsR0FBRTJLLEVBQUEsQ0FBRTNLLEVBQUEsR0FBRSxDQUFDO0lBQUMsQ0FBRTtFQUFFO0VBQUNvUSxjQUFjbFIsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsSUFBRztRQUFDaU4sT0FBQSxFQUFRL007TUFBQyxJQUFFSixFQUFBO01BQUVLLEVBQUEsR0FBRSxVQUFTRSxFQUFBLEVBQUVNLEVBQUEsRUFBRTtRQUFDLElBQUlhLEVBQUEsR0FBRSxDQUFDO1FBQUUsU0FBUXFELEVBQUEsSUFBS3hFLEVBQUEsRUFBRWtELE1BQUEsQ0FBT1AsU0FBQSxDQUFVZ08sY0FBQSxDQUFlaEQsSUFBQSxDQUFLM04sRUFBQSxFQUFFd0UsRUFBQyxLQUFHbEUsRUFBQSxDQUFFc1EsT0FBQSxDQUFRcE0sRUFBQyxJQUFFLE1BQUlyRCxFQUFBLENBQUVxRCxFQUFBLElBQUd4RSxFQUFBLENBQUV3RSxFQUFBO1FBQUksSUFBRyxRQUFNeEUsRUFBQSxJQUFHLGNBQVksT0FBT2tELE1BQUEsQ0FBTzJOLHFCQUFBLEVBQXNCO1VBQUMsSUFBSXpOLEVBQUEsR0FBRTtVQUFFLEtBQUlvQixFQUFBLEdBQUV0QixNQUFBLENBQU8yTixxQkFBQSxDQUFzQjdRLEVBQUMsR0FBRW9ELEVBQUEsR0FBRW9CLEVBQUEsQ0FBRXRDLE1BQUEsRUFBT2tCLEVBQUEsSUFBSTlDLEVBQUEsQ0FBRXNRLE9BQUEsQ0FBUXBNLEVBQUEsQ0FBRXBCLEVBQUEsQ0FBRSxJQUFFLEtBQUdGLE1BQUEsQ0FBT1AsU0FBQSxDQUFVbU8sb0JBQUEsQ0FBcUJuRCxJQUFBLENBQUszTixFQUFBLEVBQUV3RSxFQUFBLENBQUVwQixFQUFBLENBQUUsTUFBSWpDLEVBQUEsQ0FBRXFELEVBQUEsQ0FBRXBCLEVBQUEsS0FBSXBELEVBQUEsQ0FBRXdFLEVBQUEsQ0FBRXBCLEVBQUE7UUFBSTtRQUFDLE9BQU9qQyxFQUFBO01BQUMsRUFBRTFCLEVBQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQztJQUFFLE1BQU1NLEVBQUEsR0FBRWdELFFBQUEsQ0FBU0UsYUFBQSxDQUFjLEtBQUs7TUFBRTdDLEVBQUEsR0FBRSxLQUFLb00sU0FBQSxDQUFVMU0sRUFBQSxDQUFFNkosTUFBQSxFQUFPN0osRUFBQSxDQUFFb04sYUFBYTtJQUFFbk4sRUFBQSxDQUFFeUQsS0FBQSxDQUFNbUcsTUFBQSxHQUFPLEdBQUd2SixFQUFBLE1BQU1QLEVBQUEsSUFBR0YsRUFBQSxHQUFFLE1BQUlJLEVBQUEsQ0FBRXlELEtBQUEsQ0FBTXVOLFNBQUEsR0FBVSxJQUFJM1EsRUFBQSxPQUFPLEtBQUs0SSxhQUFBLENBQWN4RixLQUFBLENBQU13TixTQUFBLEdBQVUsR0FBRzVRLEVBQUEsTUFBTSxLQUFLNEksYUFBQSxDQUFjM0YsV0FBQSxDQUFZdEQsRUFBQztJQUFFLE1BQU1FLEVBQUEsR0FBRUYsRUFBQSxDQUFFNlAsU0FBQSxDQUFVO0lBQUUsS0FBSzNHLGVBQUEsQ0FBZ0I1RixXQUFBLENBQVlwRCxFQUFDLEdBQUUsS0FBS2dRLGlCQUFBLENBQWtCelEsRUFBQSxFQUFFTSxFQUFBLEVBQUVKLEVBQUEsRUFBRVUsRUFBQSxFQUFFTCxFQUFBLEVBQUVFLEVBQUM7RUFBQztFQUFDZ1IsT0FBT3hSLEVBQUEsRUFBRTtJQUFDLE9BQU9GLENBQUEsQ0FBRSxNQUFLLFFBQU8sUUFBUSxhQUFXO01BQUMsSUFBSUMsRUFBQTtNQUFFLEtBQUt5SSxRQUFBLENBQVN4RyxPQUFBLENBQVN6QixFQUFBLElBQUdBLEVBQUEsQ0FBRSxDQUFFLEdBQUUsS0FBS2lJLFFBQUEsR0FBUyxFQUFDLEVBQUUsS0FBS2UsYUFBQSxDQUFjaUUsU0FBQSxHQUFVLElBQUcsS0FBS2hFLGVBQUEsQ0FBZ0JnRSxTQUFBLEdBQVUsSUFBRyxRQUFNLEtBQUt6RSxPQUFBLENBQVFrQixLQUFBLEtBQVEsS0FBS2IsZUFBQSxDQUFnQnJGLEtBQUEsQ0FBTWtHLEtBQUEsR0FBTSxZQUFVLE9BQU8sS0FBS2xCLE9BQUEsQ0FBUWtCLEtBQUEsR0FBTSxHQUFHLEtBQUtsQixPQUFBLENBQVFrQixLQUFBLE9BQVUsS0FBS2xCLE9BQUEsQ0FBUWtCLEtBQUE7TUFBTyxNQUFNaEssRUFBQSxHQUFFLEtBQUsyTyxhQUFBLENBQWM7UUFBRTFPLEVBQUEsR0FBRSxLQUFLa0osZUFBQSxDQUFnQm1CLFdBQUE7UUFBWW5LLEVBQUEsR0FBRXNDLElBQUEsQ0FBS29PLElBQUEsQ0FBSzlRLEVBQUEsQ0FBRTZDLFFBQUEsSUFBVSxLQUFLa0csT0FBQSxDQUFRMEksV0FBQSxJQUFhLEVBQUU7TUFBRSxLQUFLaEosWUFBQSxHQUFhckksRUFBQSxHQUFFRixFQUFBO01BQUUsTUFBTUcsRUFBQSxHQUFFLEtBQUswSSxPQUFBLENBQVEySSxVQUFBLElBQVksQ0FBQyxLQUFLakosWUFBQTtRQUFhbkksRUFBQSxJQUFHRCxFQUFBLEdBQUVILEVBQUEsR0FBRUUsRUFBQSxJQUFHSCxFQUFBO01BQUUsSUFBRyxLQUFLcUosT0FBQSxDQUFRdkYsS0FBQSxDQUFNa0csS0FBQSxHQUFNNUosRUFBQSxHQUFFLFNBQU8sR0FBR0QsRUFBQSxNQUFNLEtBQUtnSixlQUFBLENBQWdCckYsS0FBQSxDQUFNNE4sU0FBQSxHQUFVLEtBQUtsSixZQUFBLEdBQWEsU0FBTyxVQUFTLEtBQUtXLGVBQUEsQ0FBZ0J3SSxTQUFBLENBQVVDLE1BQUEsQ0FBTyxlQUFjLENBQUMsQ0FBQyxLQUFLOUksT0FBQSxDQUFRK0ksYUFBYSxHQUFFLEtBQUtySSxNQUFBLENBQU8xRixLQUFBLENBQU1nTyxlQUFBLEdBQWdCLEdBQUcsS0FBS2hKLE9BQUEsQ0FBUWlKLFdBQUEsSUFBYSxLQUFLakosT0FBQSxDQUFRdUgsYUFBQSxJQUFnQixLQUFLN0csTUFBQSxDQUFPMUYsS0FBQSxDQUFNa0csS0FBQSxHQUFNLEdBQUcsS0FBS2xCLE9BQUEsQ0FBUWtKLFdBQUEsTUFBZ0IsS0FBS3ZKLFNBQUEsR0FBVTFJLEVBQUEsRUFBRSxLQUFLK0IsSUFBQSxDQUFLLFFBQVEsR0FBRSxLQUFLZ0gsT0FBQSxDQUFRMEUsYUFBQSxFQUFjLFNBQVEvTCxFQUFBLEdBQUUsR0FBRUEsRUFBQSxHQUFFMUIsRUFBQSxDQUFFOEMsZ0JBQUEsRUFBaUJwQixFQUFBLElBQUk7UUFBQyxNQUFNcUQsRUFBQSxHQUFFdEIsTUFBQSxDQUFPSyxNQUFBLENBQU9MLE1BQUEsQ0FBT0ssTUFBQSxDQUFPLENBQUMsR0FBRSxLQUFLaUYsT0FBTyxHQUFFLFVBQVFoSixFQUFBLEdBQUUsS0FBS2dKLE9BQUEsQ0FBUTBFLGFBQUEsS0FBZ0IsV0FBUzFOLEVBQUEsR0FBRSxTQUFPQSxFQUFBLENBQUUyQixFQUFBLENBQUU7UUFBRSxLQUFLdVAsYUFBQSxDQUFjLENBQUNqUixFQUFBLENBQUUrQyxjQUFBLENBQWVyQixFQUFDLENBQUMsR0FBRXFELEVBQUEsRUFBRXpFLEVBQUEsRUFBRW9CLEVBQUM7TUFBQyxPQUFLO1FBQUMsTUFBTW5CLEVBQUEsR0FBRSxDQUFDUCxFQUFBLENBQUUrQyxjQUFBLENBQWUsQ0FBQyxDQUFDO1FBQUUvQyxFQUFBLENBQUU4QyxnQkFBQSxHQUFpQixLQUFHdkMsRUFBQSxDQUFFdUssSUFBQSxDQUFLOUssRUFBQSxDQUFFK0MsY0FBQSxDQUFlLENBQUMsQ0FBQyxHQUFFLEtBQUtrTyxhQUFBLENBQWMxUSxFQUFBLEVBQUUsS0FBS3dJLE9BQUEsRUFBUXpJLEVBQUEsRUFBRSxDQUFDO01BQUM7TUFBQ0gsT0FBQSxDQUFRK1IsT0FBQSxDQUFRLEVBQUVsUixJQUFBLENBQU0sTUFBSSxLQUFLZSxJQUFBLENBQUssVUFBVSxDQUFFO0lBQUMsQ0FBRTtFQUFDO0VBQUM4SSxTQUFBLEVBQVU7SUFBQyxJQUFJOUssRUFBQTtJQUFFLElBQUcsVUFBUUEsRUFBQSxHQUFFLEtBQUtrTyxtQkFBQSxLQUFzQixXQUFTbE8sRUFBQSxJQUFHQSxFQUFBLENBQUVtTyxJQUFBLENBQUssSUFBSSxHQUFFLE9BQU8sS0FBS0QsbUJBQUEsRUFBb0IsQ0FBQyxLQUFLdkYsU0FBQSxFQUFVO0lBQU8sTUFBSztRQUFDNEIsV0FBQSxFQUFZdEs7TUFBQyxJQUFFLEtBQUtvSixlQUFBO01BQWdCO1FBQUMrSSxLQUFBLEVBQU1sUztNQUFDLElBQUUsS0FBS3VKLGVBQUEsQ0FBZ0JJLHFCQUFBLENBQXNCO0lBQUUsSUFBRyxLQUFLNEgsTUFBQSxDQUFPLEtBQUs5SSxTQUFTLEdBQUUsS0FBS0QsWUFBQSxJQUFjekksRUFBQSxLQUFJLEtBQUtvSixlQUFBLENBQWdCa0IsV0FBQSxFQUFZO01BQUMsTUFBSztRQUFDNkgsS0FBQSxFQUFNNVI7TUFBQyxJQUFFLEtBQUtpSixlQUFBLENBQWdCSSxxQkFBQSxDQUFzQjtNQUFFLElBQUkvSSxFQUFBLEdBQUVOLEVBQUEsR0FBRU4sRUFBQTtNQUFFWSxFQUFBLElBQUcsR0FBRUEsRUFBQSxHQUFFQSxFQUFBLEdBQUUsSUFBRTZCLElBQUEsQ0FBS2dPLEtBQUEsQ0FBTTdQLEVBQUMsSUFBRTZCLElBQUEsQ0FBS29PLElBQUEsQ0FBS2pRLEVBQUMsR0FBRUEsRUFBQSxJQUFHLEdBQUUsS0FBS3VJLGVBQUEsQ0FBZ0JpQixVQUFBLElBQVl4SixFQUFBO0lBQUM7RUFBQztFQUFDdVIsS0FBS3JTLEVBQUEsRUFBRTtJQUFDLEtBQUtnSixPQUFBLENBQVEwSSxXQUFBLEdBQVkxUixFQUFBLEVBQUUsS0FBSzhLLFFBQUEsQ0FBUztFQUFDO0VBQUN3SCxlQUFldFMsRUFBQSxFQUFFQyxFQUFBLEdBQUUsT0FBRztJQUFDLE1BQUs7UUFBQ3FLLFVBQUEsRUFBV3BLLEVBQUE7UUFBRXFLLFdBQUEsRUFBWXBLLEVBQUE7UUFBRXFLLFdBQUEsRUFBWW5LO01BQUMsSUFBRSxLQUFLZ0osZUFBQTtNQUFnQi9JLEVBQUEsR0FBRU4sRUFBQSxHQUFFRyxFQUFBO01BQUVJLEVBQUEsR0FBRUwsRUFBQTtNQUFFVSxFQUFBLEdBQUVWLEVBQUEsR0FBRUcsRUFBQTtNQUFFSSxFQUFBLEdBQUVKLEVBQUEsR0FBRTtJQUFFLElBQUcsS0FBS3lJLFVBQUEsRUFBVztNQUFDLE1BQU10SSxFQUFBLEdBQUU7TUFBR0YsRUFBQSxHQUFFRSxFQUFBLEdBQUVJLEVBQUEsR0FBRSxLQUFLeUksZUFBQSxDQUFnQmlCLFVBQUEsSUFBWTlKLEVBQUEsR0FBRUYsRUFBQSxHQUFFRSxFQUFBLEdBQUVELEVBQUEsS0FBSSxLQUFLOEksZUFBQSxDQUFnQmlCLFVBQUEsSUFBWTlKLEVBQUE7SUFBRSxPQUFLO01BQUMsQ0FBQ0YsRUFBQSxHQUFFQyxFQUFBLElBQUdELEVBQUEsR0FBRU0sRUFBQSxNQUFLLEtBQUt5SSxlQUFBLENBQWdCaUIsVUFBQSxHQUFXaEssRUFBQSxJQUFHLEtBQUswSSxPQUFBLENBQVF1SixVQUFBLEdBQVc5UixFQUFBLEdBQUU7TUFBSSxNQUFNRCxFQUFBLEdBQUVGLEVBQUEsR0FBRUosRUFBQSxHQUFFTyxFQUFBO01BQUVSLEVBQUEsSUFBRyxLQUFLK0ksT0FBQSxDQUFRdUosVUFBQSxJQUFZL1IsRUFBQSxHQUFFLE1BQUksS0FBSzZJLGVBQUEsQ0FBZ0JpQixVQUFBLElBQVkzSCxJQUFBLENBQUtvSyxHQUFBLENBQUl2TSxFQUFBLEVBQUUsRUFBRTtJQUFFO0lBQUM7TUFBQyxNQUFNQSxFQUFBLEdBQUUsS0FBSzZJLGVBQUEsQ0FBZ0JpQixVQUFBO1FBQVd4SixFQUFBLEdBQUVOLEVBQUEsR0FBRUwsRUFBQTtRQUFFd0IsRUFBQSxJQUFHbkIsRUFBQSxHQUFFSCxFQUFBLElBQUdGLEVBQUE7TUFBRSxLQUFLNkIsSUFBQSxDQUFLLFVBQVNsQixFQUFBLEVBQUVhLEVBQUEsRUFBRW5CLEVBQUEsRUFBRUEsRUFBQSxHQUFFSCxFQUFDO0lBQUM7RUFBQztFQUFDbVMsZUFBZXhTLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsSUFBR2dOLEtBQUEsQ0FBTWpOLEVBQUMsR0FBRTtJQUFPLE1BQU1FLEVBQUEsR0FBRSxNQUFJRixFQUFBO0lBQUUsS0FBS3dKLGFBQUEsQ0FBY3hGLEtBQUEsQ0FBTXlPLFFBQUEsR0FBUyxXQUFXdlMsRUFBQSwyQkFBNEJBLEVBQUEsV0FBVyxLQUFLdUosZUFBQSxDQUFnQnpGLEtBQUEsQ0FBTWtHLEtBQUEsR0FBTSxHQUFHaEssRUFBQSxLQUFLLEtBQUt3SixNQUFBLENBQU8xRixLQUFBLENBQU0rRixJQUFBLEdBQUssR0FBRzdKLEVBQUEsS0FBSyxLQUFLd0osTUFBQSxDQUFPMUYsS0FBQSxDQUFNME8sU0FBQSxHQUFVLGVBQWUsUUFBTS9QLElBQUEsQ0FBS3lDLEtBQUEsQ0FBTWxGLEVBQUMsSUFBRSxLQUFLOEksT0FBQSxDQUFRa0osV0FBQSxHQUFZLFFBQU8sS0FBS3hKLFlBQUEsSUFBYyxLQUFLTSxPQUFBLENBQVEySixVQUFBLElBQVksS0FBS0wsY0FBQSxDQUFldFMsRUFBQSxFQUFFQyxFQUFDO0VBQUM7RUFBQzJTLFlBQVkzUyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsT0FBT0osQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxNQUFNQyxFQUFBLEdBQUUsS0FBS3dKLGFBQUEsQ0FBY3FKLGdCQUFBLENBQWlCLFFBQVE7TUFBRSxJQUFHLENBQUM3UyxFQUFBLENBQUUwQyxNQUFBLEVBQU8sTUFBTSxJQUFJa0MsS0FBQSxDQUFNLGtCQUFrQjtNQUFFLElBQUcsY0FBWXpFLEVBQUEsRUFBRTtRQUFDLE1BQU02RSxFQUFBLEdBQUVzSixLQUFBLENBQU0yQixJQUFBLENBQUtqUSxFQUFDLEVBQUU0USxHQUFBLENBQUtwUSxFQUFBLElBQUdBLEVBQUEsQ0FBRXNTLFNBQUEsQ0FBVTdTLEVBQUEsRUFBRUMsRUFBQyxDQUFFO1FBQUUsT0FBT0UsT0FBQSxDQUFRK1IsT0FBQSxDQUFRbk4sRUFBQztNQUFDO01BQUMsT0FBTzVFLE9BQUEsQ0FBUTJTLEdBQUEsQ0FBSXpFLEtBQUEsQ0FBTTJCLElBQUEsQ0FBS2pRLEVBQUMsRUFBRTRRLEdBQUEsQ0FBS3BRLEVBQUEsSUFBRyxJQUFJSixPQUFBLENBQVMsQ0FBQzRFLEVBQUEsRUFBRTNFLEVBQUEsS0FBSTtRQUFDRyxFQUFBLENBQUV3UyxNQUFBLENBQVFyUyxFQUFBLElBQUc7VUFBQ0EsRUFBQSxHQUFFcUUsRUFBQSxDQUFFckUsRUFBQyxJQUFFTixFQUFBLENBQUUsSUFBSXVFLEtBQUEsQ0FBTSx3QkFBd0IsQ0FBQztRQUFDLEdBQUczRSxFQUFBLEVBQUVDLEVBQUM7TUFBQyxDQUFFLENBQUUsQ0FBQztJQUFDLENBQUU7RUFBQztBQUFDO0FBQUNzSSxDQUFBLENBQUVrSSxnQkFBQSxHQUFpQixLQUFJbEksQ0FBQSxDQUFFeUksU0FBQSxHQUFVO0FBQUcsSUFBTWdDLENBQUEsR0FBTixjQUFnQjdSLENBQUEsQ0FBQztFQUFDQyxZQUFBLEVBQWE7SUFBQyxNQUFNLEdBQUc2UixTQUFTLEdBQUUsS0FBS0MsV0FBQSxHQUFZLE1BQUksQ0FBQztFQUFDO0VBQUNDLE1BQUEsRUFBTztJQUFDLEtBQUtELFdBQUEsR0FBWSxLQUFLNVIsRUFBQSxDQUFHLFFBQVEsTUFBSTtNQUFDOFIscUJBQUEsQ0FBdUIsTUFBSTtRQUFDLEtBQUtyUixJQUFBLENBQUssTUFBTTtNQUFDLENBQUU7SUFBQyxDQUFFLEdBQUUsS0FBS0EsSUFBQSxDQUFLLE1BQU07RUFBQztFQUFDc1IsS0FBQSxFQUFNO0lBQUMsS0FBS0gsV0FBQSxDQUFZO0VBQUM7RUFBQ3JNLFFBQUEsRUFBUztJQUFDLEtBQUtxTSxXQUFBLENBQVk7RUFBQztBQUFDO0FBQUMsSUFBTUksQ0FBQSxHQUFOLGNBQWdCblMsQ0FBQSxDQUFDO0VBQUNDLFlBQVlyQixFQUFBLEdBQUUsSUFBSW1DLFlBQUEsSUFBYTtJQUFDLE1BQU0sR0FBRSxLQUFLcVIsVUFBQSxHQUFXLE1BQUssS0FBS0MsYUFBQSxHQUFjLEdBQUUsS0FBS0MsY0FBQSxHQUFlLEdBQUUsS0FBS0MsTUFBQSxHQUFPLE9BQUcsS0FBS0MsYUFBQSxHQUFjLEdBQUUsS0FBS0MsU0FBQSxHQUFVLFFBQU8sS0FBS0MsTUFBQSxHQUFPLE1BQUssS0FBSzNOLFVBQUEsR0FBVyxJQUFHLEtBQUtrQixNQUFBLEdBQU8sTUFBRyxLQUFLME0sV0FBQSxHQUFZLE1BQUssS0FBSzVMLE9BQUEsR0FBUSxPQUFHLEtBQUt0QyxRQUFBLEdBQVMsT0FBRyxLQUFLRyxnQkFBQSxHQUFpQixLQUFLekUsRUFBQSxFQUFHLEtBQUswRSxtQkFBQSxHQUFvQixLQUFLcEUsRUFBQSxFQUFHLEtBQUttUyxZQUFBLEdBQWFoVSxFQUFBLEVBQUUsS0FBS2lVLFFBQUEsR0FBUyxLQUFLRCxZQUFBLENBQWFFLFVBQUEsQ0FBVyxHQUFFLEtBQUtELFFBQUEsQ0FBU0UsT0FBQSxDQUFRLEtBQUtILFlBQUEsQ0FBYUksV0FBVztFQUFDO0VBQUNuTixLQUFBLEVBQU07SUFBQyxPQUFPbEgsQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVcsQ0FBQyxDQUFFO0VBQUM7RUFBQyxJQUFJcUcsSUFBQSxFQUFLO0lBQUMsT0FBTyxLQUFLRCxVQUFBO0VBQVU7RUFBQyxJQUFJQyxJQUFJcEcsRUFBQSxFQUFFO0lBQUMsSUFBRyxLQUFLbUcsVUFBQSxHQUFXbkcsRUFBQSxFQUFFLEtBQUs2VCxTQUFBLEdBQVUsUUFBTyxDQUFDN1QsRUFBQSxFQUFFLE9BQU8sS0FBSzhULE1BQUEsR0FBTyxNQUFLLEtBQUssS0FBSzlSLElBQUEsQ0FBSyxTQUFTO0lBQUUwQyxLQUFBLENBQU0xRSxFQUFDLEVBQUVpQixJQUFBLENBQU1oQixFQUFBLElBQUc7TUFBQyxJQUFHQSxFQUFBLENBQUUwRSxNQUFBLElBQVEsS0FBSSxNQUFNLElBQUlDLEtBQUEsQ0FBTSxtQkFBbUI1RSxFQUFBLEtBQU1DLEVBQUEsQ0FBRTBFLE1BQUEsS0FBVzFFLEVBQUEsQ0FBRTRFLFVBQUEsR0FBYTtNQUFFLE9BQU81RSxFQUFBLENBQUVvVSxXQUFBLENBQVk7SUFBQyxDQUFFLEVBQUVwVCxJQUFBLENBQU1oQixFQUFBLElBQUcsS0FBS2tHLFVBQUEsS0FBYW5HLEVBQUEsR0FBRSxPQUFLLEtBQUtnVSxZQUFBLENBQWEzUixlQUFBLENBQWdCcEMsRUFBQyxDQUFFLEVBQUVnQixJQUFBLENBQU1oQixFQUFBLElBQUc7TUFBQyxLQUFLa0csVUFBQSxLQUFhbkcsRUFBQSxLQUFJLEtBQUs4VCxNQUFBLEdBQU83VCxFQUFBLEVBQUUsS0FBSytCLElBQUEsQ0FBSyxnQkFBZ0IsR0FBRSxLQUFLQSxJQUFBLENBQUssU0FBUyxHQUFFLEtBQUs2RCxRQUFBLElBQVUsS0FBS3NCLElBQUEsQ0FBSztJQUFFLENBQUU7RUFBQztFQUFDbU4sTUFBQSxFQUFPO0lBQUMsSUFBSXRVLEVBQUE7SUFBRSxJQUFHLENBQUMsS0FBS3FILE1BQUEsRUFBTztJQUFPLEtBQUtBLE1BQUEsR0FBTyxPQUFHLFVBQVFySCxFQUFBLEdBQUUsS0FBS3dULFVBQUEsS0FBYSxXQUFTeFQsRUFBQSxJQUFHQSxFQUFBLENBQUVpTyxVQUFBLENBQVcsR0FBRSxLQUFLdUYsVUFBQSxHQUFXLEtBQUtRLFlBQUEsQ0FBYU8sa0JBQUEsQ0FBbUIsR0FBRSxLQUFLVCxNQUFBLEtBQVMsS0FBS04sVUFBQSxDQUFXTSxNQUFBLEdBQU8sS0FBS0EsTUFBQSxHQUFRLEtBQUtOLFVBQUEsQ0FBVzFOLFlBQUEsQ0FBYTlFLEtBQUEsR0FBTSxLQUFLNFMsYUFBQSxFQUFjLEtBQUtKLFVBQUEsQ0FBV1csT0FBQSxDQUFRLEtBQUtGLFFBQVE7SUFBRSxJQUFJaFUsRUFBQSxHQUFFLEtBQUt5VCxjQUFBLEdBQWUsS0FBS0UsYUFBQTtJQUFjM1QsRUFBQSxJQUFHLEtBQUs2QyxRQUFBLEtBQVc3QyxFQUFBLEdBQUUsR0FBRSxLQUFLeVQsY0FBQSxHQUFlLElBQUcsS0FBS0YsVUFBQSxDQUFXSixLQUFBLENBQU0sS0FBS1ksWUFBQSxDQUFheE0sV0FBQSxFQUFZdkgsRUFBQyxHQUFFLEtBQUt3VCxhQUFBLEdBQWMsS0FBS08sWUFBQSxDQUFheE0sV0FBQSxFQUFZLEtBQUtnTSxVQUFBLENBQVdnQixPQUFBLEdBQVEsTUFBSTtNQUFDLEtBQUtoTixXQUFBLElBQWEsS0FBSzFFLFFBQUEsS0FBVyxLQUFLaUUsS0FBQSxDQUFNLEdBQUUsS0FBSy9FLElBQUEsQ0FBSyxPQUFPO0lBQUU7RUFBQztFQUFDeVMsT0FBQSxFQUFRO0lBQUMsSUFBSXpVLEVBQUE7SUFBRSxLQUFLcUgsTUFBQSxHQUFPLE1BQUcsVUFBUXJILEVBQUEsR0FBRSxLQUFLd1QsVUFBQSxLQUFhLFdBQVN4VCxFQUFBLElBQUdBLEVBQUEsQ0FBRXNULElBQUEsQ0FBSyxHQUFFLEtBQUtJLGNBQUEsSUFBZ0IsS0FBS00sWUFBQSxDQUFheE0sV0FBQSxHQUFZLEtBQUtpTSxhQUFBO0VBQWE7RUFBQ3RNLEtBQUEsRUFBTTtJQUFDLE9BQU9wSCxDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztNQUFDLEtBQUtzSCxNQUFBLEtBQVMsS0FBS2lOLEtBQUEsQ0FBTSxHQUFFLEtBQUt0UyxJQUFBLENBQUssTUFBTTtJQUFFLENBQUU7RUFBQztFQUFDK0UsTUFBQSxFQUFPO0lBQUMsS0FBS00sTUFBQSxLQUFTLEtBQUtvTixNQUFBLENBQU8sR0FBRSxLQUFLelMsSUFBQSxDQUFLLE9BQU87RUFBRTtFQUFDMFMsT0FBTzFVLEVBQUEsRUFBRTtJQUFDLElBQUlDLEVBQUEsRUFBRUMsRUFBQTtJQUFFLE1BQU1DLEVBQUEsR0FBRUgsRUFBQSxHQUFFLEtBQUt3SCxXQUFBO0lBQVksVUFBUXZILEVBQUEsR0FBRSxLQUFLdVQsVUFBQSxLQUFhLFdBQVN2VCxFQUFBLElBQUdBLEVBQUEsQ0FBRXFULElBQUEsQ0FBSyxLQUFLVSxZQUFBLENBQWF4TSxXQUFBLEdBQVlySCxFQUFDLEdBQUUsVUFBUUQsRUFBQSxHQUFFLEtBQUtzVCxVQUFBLEtBQWEsV0FBU3RULEVBQUEsSUFBR0EsRUFBQSxDQUFFOEYsZ0JBQUEsQ0FBaUIsU0FBUyxNQUFJO01BQUMsS0FBS3dOLFVBQUEsR0FBVyxNQUFLLEtBQUt6TSxLQUFBLENBQU07SUFBQyxHQUFHO01BQUNyRixJQUFBLEVBQUs7SUFBRSxDQUFDO0VBQUM7RUFBQzZHLFVBQVV0SSxFQUFBLEVBQUU7SUFBQyxPQUFPRixDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztNQUFDLE9BQU8sS0FBS2lVLFlBQUEsQ0FBYXpMLFNBQUEsQ0FBVXRJLEVBQUM7SUFBQyxDQUFFO0VBQUM7RUFBQyxJQUFJNkYsYUFBQSxFQUFjO0lBQUMsT0FBTyxLQUFLOE4sYUFBQTtFQUFhO0VBQUMsSUFBSTlOLGFBQWE5RixFQUFBLEVBQUU7SUFBQyxLQUFLNFQsYUFBQSxHQUFjNVQsRUFBQSxFQUFFLEtBQUt3VCxVQUFBLEtBQWEsS0FBS0EsVUFBQSxDQUFXMU4sWUFBQSxDQUFhOUUsS0FBQSxHQUFNaEIsRUFBQTtFQUFFO0VBQUMsSUFBSXdILFlBQUEsRUFBYTtJQUFDLFFBQU8sS0FBS0gsTUFBQSxHQUFPLEtBQUtxTSxjQUFBLEdBQWUsS0FBS0EsY0FBQSxJQUFnQixLQUFLTSxZQUFBLENBQWF4TSxXQUFBLEdBQVksS0FBS2lNLGFBQUEsS0FBZ0IsS0FBS0csYUFBQTtFQUFhO0VBQUMsSUFBSXBNLFlBQVl4SCxFQUFBLEVBQUU7SUFBQyxNQUFNQyxFQUFBLEdBQUUsQ0FBQyxLQUFLb0gsTUFBQTtJQUFPcEgsRUFBQSxJQUFHLEtBQUt3VSxNQUFBLENBQU8sR0FBRSxLQUFLZixjQUFBLEdBQWUxVCxFQUFBLEdBQUUsS0FBSzRULGFBQUEsRUFBYzNULEVBQUEsSUFBRyxLQUFLcVUsS0FBQSxDQUFNLEdBQUUsS0FBS3RTLElBQUEsQ0FBSyxTQUFTLEdBQUUsS0FBS0EsSUFBQSxDQUFLLFlBQVk7RUFBQztFQUFDLElBQUljLFNBQUEsRUFBVTtJQUFDLElBQUk5QyxFQUFBLEVBQUVDLEVBQUE7SUFBRSxPQUFPLFVBQVFELEVBQUEsR0FBRSxLQUFLNlQsU0FBQSxLQUFZLFdBQVM3VCxFQUFBLEdBQUVBLEVBQUEsSUFBRyxVQUFRQyxFQUFBLEdBQUUsS0FBSzZULE1BQUEsS0FBUyxXQUFTN1QsRUFBQSxHQUFFLFNBQU9BLEVBQUEsQ0FBRTZDLFFBQUEsS0FBVztFQUFDO0VBQUMsSUFBSUEsU0FBUzlDLEVBQUEsRUFBRTtJQUFDLEtBQUs2VCxTQUFBLEdBQVU3VCxFQUFBO0VBQUM7RUFBQyxJQUFJNEgsT0FBQSxFQUFRO0lBQUMsT0FBTyxLQUFLcU0sUUFBQSxDQUFTVSxJQUFBLENBQUszVCxLQUFBO0VBQUs7RUFBQyxJQUFJNEcsT0FBTzVILEVBQUEsRUFBRTtJQUFDLEtBQUtpVSxRQUFBLENBQVNVLElBQUEsQ0FBSzNULEtBQUEsR0FBTWhCLEVBQUEsRUFBRSxLQUFLZ0MsSUFBQSxDQUFLLGNBQWM7RUFBQztFQUFDLElBQUkrRixNQUFBLEVBQU87SUFBQyxPQUFPLEtBQUs0TCxNQUFBO0VBQU07RUFBQyxJQUFJNUwsTUFBTS9ILEVBQUEsRUFBRTtJQUFDLEtBQUsyVCxNQUFBLEtBQVMzVCxFQUFBLEtBQUksS0FBSzJULE1BQUEsR0FBTzNULEVBQUEsRUFBRSxLQUFLMlQsTUFBQSxHQUFPLEtBQUtNLFFBQUEsQ0FBU2hHLFVBQUEsQ0FBVyxJQUFFLEtBQUtnRyxRQUFBLENBQVNFLE9BQUEsQ0FBUSxLQUFLSCxZQUFBLENBQWFJLFdBQVc7RUFBRTtFQUFDM04sWUFBWXpHLEVBQUEsRUFBRTtJQUFDLE9BQU0sbUJBQW1CNFUsSUFBQSxDQUFLNVUsRUFBQztFQUFDO0VBQUM2VSxZQUFBLEVBQWE7SUFBQyxPQUFPLEtBQUtaLFFBQUE7RUFBUTtFQUFDalIsZUFBQSxFQUFnQjtJQUFDLE1BQU1oRCxFQUFBLEdBQUUsRUFBQztJQUFFLElBQUcsQ0FBQyxLQUFLOFQsTUFBQSxFQUFPLE9BQU85VCxFQUFBO0lBQUUsTUFBTUMsRUFBQSxHQUFFLEtBQUs2VCxNQUFBLENBQU8vUSxnQkFBQTtJQUFpQixTQUFRN0MsRUFBQSxHQUFFLEdBQUVBLEVBQUEsR0FBRUQsRUFBQSxFQUFFQyxFQUFBLElBQUlGLEVBQUEsQ0FBRStLLElBQUEsQ0FBSyxLQUFLK0ksTUFBQSxDQUFPOVEsY0FBQSxDQUFlOUMsRUFBQyxDQUFDO0lBQUUsT0FBT0YsRUFBQTtFQUFDO0FBQUM7QUFBQyxJQUFNOFUsQ0FBQSxHQUFFO0VBQUNqRixTQUFBLEVBQVU7RUFBT1UsYUFBQSxFQUFjO0VBQU8yQixXQUFBLEVBQVk7RUFBRVIsV0FBQSxFQUFZO0VBQUVDLFVBQUEsRUFBVztFQUFHb0QsUUFBQSxFQUFTO0VBQUczSyxVQUFBLEVBQVc7RUFBR3VJLFVBQUEsRUFBVztFQUFHSixVQUFBLEVBQVc7RUFBR25RLFVBQUEsRUFBVztBQUFHO0FBQUUsSUFBTTRTLENBQUEsR0FBTixjQUFnQjNQLENBQUEsQ0FBQztFQUFDLE9BQU80UCxPQUFPalYsRUFBQSxFQUFFO0lBQUMsT0FBTyxJQUFJZ1YsQ0FBQSxDQUFFaFYsRUFBQztFQUFDO0VBQUNxQixZQUFZckIsRUFBQSxFQUFFO0lBQUMsTUFBTUMsRUFBQSxHQUFFRCxFQUFBLENBQUUwRixLQUFBLEtBQVEsZUFBYTFGLEVBQUEsQ0FBRWtWLE9BQUEsR0FBUSxJQUFJM0IsQ0FBQSxLQUFFO0lBQVEsTUFBTTtNQUFDN04sS0FBQSxFQUFNekYsRUFBQTtNQUFFMEYsYUFBQSxFQUFjM0YsRUFBQSxDQUFFMkYsYUFBQTtNQUFjRSxRQUFBLEVBQVM3RixFQUFBLENBQUU2RixRQUFBO01BQVNDLFlBQUEsRUFBYTlGLEVBQUEsQ0FBRW1WO0lBQVMsQ0FBQyxHQUFFLEtBQUtDLE9BQUEsR0FBUSxFQUFDLEVBQUUsS0FBS0MsV0FBQSxHQUFZLE1BQUssS0FBS3RNLGFBQUEsR0FBYyxFQUFDLEVBQUUsS0FBS3VNLGtCQUFBLEdBQW1CLEVBQUMsRUFBRSxLQUFLQyxlQUFBLEdBQWdCLE1BQUssS0FBS3ZNLE9BQUEsR0FBUXRGLE1BQUEsQ0FBT0ssTUFBQSxDQUFPLENBQUMsR0FBRStRLENBQUEsRUFBRTlVLEVBQUMsR0FBRSxLQUFLd1YsS0FBQSxHQUFNLElBQUl2QyxDQUFBO0lBQUUsTUFBTS9TLEVBQUEsR0FBRUQsRUFBQSxHQUFFLFNBQU8sS0FBS3FJLGVBQUEsQ0FBZ0I7SUFBRSxLQUFLbU4sUUFBQSxHQUFTLElBQUlqTixDQUFBLENBQUUsS0FBS1EsT0FBQSxFQUFROUksRUFBQyxHQUFFLEtBQUt3VixnQkFBQSxDQUFpQixHQUFFLEtBQUtDLGtCQUFBLENBQW1CLEdBQUUsS0FBS0MsZUFBQSxDQUFnQixHQUFFLEtBQUtDLFdBQUEsQ0FBWTtJQUFFLE1BQU0xVixFQUFBLEdBQUUsS0FBSzZJLE9BQUEsQ0FBUThNLEdBQUEsSUFBSyxLQUFLNVAsTUFBQSxDQUFPLEtBQUc7SUFBRzlGLE9BQUEsQ0FBUStSLE9BQUEsQ0FBUSxFQUFFbFIsSUFBQSxDQUFNLE1BQUk7TUFBQyxLQUFLZSxJQUFBLENBQUssTUFBTTtNQUFFLE1BQUs7UUFBQytULEtBQUEsRUFBTXZWLEVBQUE7UUFBRXNDLFFBQUEsRUFBU2hDO01BQUMsSUFBRSxLQUFLa0ksT0FBQTtNQUFRLENBQUM3SSxFQUFBLElBQUdLLEVBQUEsSUFBR00sRUFBQSxLQUFJLEtBQUttRyxJQUFBLENBQUs5RyxFQUFBLEVBQUVLLEVBQUEsRUFBRU0sRUFBQyxFQUFFOEosS0FBQSxDQUFPLE1BQUksSUFBSztJQUFDLENBQUU7RUFBQztFQUFDb0wsZUFBZWhXLEVBQUEsR0FBRSxLQUFLMEgsY0FBQSxDQUFlLEdBQUU7SUFBQyxPQUFPLEtBQUsrTixRQUFBLENBQVNqRCxjQUFBLENBQWV4UyxFQUFBLEdBQUUsS0FBS3lILFdBQUEsQ0FBWSxHQUFFLEtBQUtMLFNBQUEsQ0FBVSxDQUFDLEdBQUVwSCxFQUFBO0VBQUM7RUFBQzRWLGdCQUFBLEVBQWlCO0lBQUMsS0FBSzdNLGFBQUEsQ0FBY2dDLElBQUEsQ0FBSyxLQUFLeUssS0FBQSxDQUFNalUsRUFBQSxDQUFHLFFBQVEsTUFBSTtNQUFDLElBQUcsQ0FBQyxLQUFLMkcsU0FBQSxDQUFVLEdBQUU7UUFBQyxNQUFNbEksRUFBQSxHQUFFLEtBQUtnVyxjQUFBLENBQWU7UUFBRSxLQUFLaFUsSUFBQSxDQUFLLGNBQWFoQyxFQUFDLEdBQUUsS0FBS2dDLElBQUEsQ0FBSyxnQkFBZWhDLEVBQUM7TUFBQztJQUFDLENBQUUsQ0FBQztFQUFDO0VBQUMwVixpQkFBQSxFQUFrQjtJQUFDLEtBQUt0TyxTQUFBLENBQVUsTUFBSSxLQUFLcEYsSUFBQSxDQUFLLE1BQU0sR0FBRSxLQUFLd1QsS0FBQSxDQUFNcEMsS0FBQSxDQUFNLElBQUcsS0FBS2tDLGtCQUFBLENBQW1CdkssSUFBQSxDQUFLLEtBQUtoRixZQUFBLENBQWEsY0FBYyxNQUFJO01BQUMsTUFBTS9GLEVBQUEsR0FBRSxLQUFLZ1csY0FBQSxDQUFlO01BQUUsS0FBS2hVLElBQUEsQ0FBSyxjQUFhaEMsRUFBQztJQUFDLENBQUUsR0FBRSxLQUFLK0YsWUFBQSxDQUFhLFFBQVEsTUFBSTtNQUFDLEtBQUsvRCxJQUFBLENBQUssTUFBTSxHQUFFLEtBQUt3VCxLQUFBLENBQU1wQyxLQUFBLENBQU07SUFBQyxDQUFFLEdBQUUsS0FBS3JOLFlBQUEsQ0FBYSxTQUFTLE1BQUk7TUFBQyxLQUFLL0QsSUFBQSxDQUFLLE9BQU8sR0FBRSxLQUFLd1QsS0FBQSxDQUFNbEMsSUFBQSxDQUFLO0lBQUMsQ0FBRSxHQUFFLEtBQUt2TixZQUFBLENBQWEsV0FBVyxNQUFJO01BQUMsS0FBS3lQLEtBQUEsQ0FBTWxDLElBQUEsQ0FBSztJQUFDLENBQUUsR0FBRSxLQUFLdk4sWUFBQSxDQUFhLFNBQVMsTUFBSTtNQUFDLEtBQUsvRCxJQUFBLENBQUssUUFBUTtJQUFDLENBQUUsR0FBRSxLQUFLK0QsWUFBQSxDQUFhLFdBQVcsTUFBSTtNQUFDLEtBQUsvRCxJQUFBLENBQUssV0FBVSxLQUFLMEYsY0FBQSxDQUFlLENBQUM7SUFBQyxDQUFFLEdBQUUsS0FBSzNCLFlBQUEsQ0FBYSxTQUFTL0YsRUFBQSxJQUFHO01BQUMsS0FBS2dDLElBQUEsQ0FBSyxTQUFRaEMsRUFBQSxDQUFFaVcsS0FBSztJQUFDLENBQUUsQ0FBQztFQUFDO0VBQUNOLG1CQUFBLEVBQW9CO0lBQUMsS0FBSzVNLGFBQUEsQ0FBY2dDLElBQUEsQ0FBSyxLQUFLMEssUUFBQSxDQUFTbFUsRUFBQSxDQUFHLFNBQVMsQ0FBQ3ZCLEVBQUEsRUFBRUMsRUFBQSxLQUFJO01BQUMsS0FBSytJLE9BQUEsQ0FBUStMLFFBQUEsS0FBVyxLQUFLbUIsTUFBQSxDQUFPbFcsRUFBQyxHQUFFLEtBQUtnQyxJQUFBLENBQUssZUFBY2hDLEVBQUEsR0FBRSxLQUFLeUgsV0FBQSxDQUFZLENBQUMsR0FBRSxLQUFLekYsSUFBQSxDQUFLLFNBQVFoQyxFQUFBLEVBQUVDLEVBQUM7SUFBRSxDQUFFLEdBQUUsS0FBS3dWLFFBQUEsQ0FBU2xVLEVBQUEsQ0FBRyxZQUFZLENBQUN2QixFQUFBLEVBQUVDLEVBQUEsS0FBSTtNQUFDLEtBQUsrQixJQUFBLENBQUssWUFBV2hDLEVBQUEsRUFBRUMsRUFBQztJQUFDLENBQUUsR0FBRSxLQUFLd1YsUUFBQSxDQUFTbFUsRUFBQSxDQUFHLFVBQVUsQ0FBQ3ZCLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsS0FBSTtNQUFDLE1BQU1FLEVBQUEsR0FBRSxLQUFLb0gsV0FBQSxDQUFZO01BQUUsS0FBS3pGLElBQUEsQ0FBSyxVQUFTaEMsRUFBQSxHQUFFSyxFQUFBLEVBQUVKLEVBQUEsR0FBRUksRUFBQSxFQUFFSCxFQUFBLEVBQUVDLEVBQUM7SUFBQyxDQUFFLEdBQUUsS0FBS3NWLFFBQUEsQ0FBU2xVLEVBQUEsQ0FBRyxVQUFVLE1BQUk7TUFBQyxLQUFLUyxJQUFBLENBQUssUUFBUTtJQUFDLENBQUUsR0FBRSxLQUFLeVQsUUFBQSxDQUFTbFUsRUFBQSxDQUFHLFlBQVksTUFBSTtNQUFDLEtBQUtTLElBQUEsQ0FBSyxnQkFBZ0I7SUFBQyxDQUFFLEdBQUUsS0FBS3lULFFBQUEsQ0FBU2xVLEVBQUEsQ0FBRyxhQUFhdkIsRUFBQSxJQUFHO01BQUMsS0FBS2dDLElBQUEsQ0FBSyxhQUFZaEMsRUFBQztJQUFDLENBQUUsR0FBRSxLQUFLeVYsUUFBQSxDQUFTbFUsRUFBQSxDQUFHLFdBQVd2QixFQUFBLElBQUc7TUFBQyxLQUFLZ0MsSUFBQSxDQUFLLFdBQVVoQyxFQUFDO0lBQUMsQ0FBRSxDQUFDO0lBQUU7TUFBQyxJQUFJQSxFQUFBO01BQUUsS0FBSytJLGFBQUEsQ0FBY2dDLElBQUEsQ0FBSyxLQUFLMEssUUFBQSxDQUFTbFUsRUFBQSxDQUFHLFFBQVF0QixFQUFBLElBQUc7UUFBQyxJQUFHLENBQUMsS0FBSytJLE9BQUEsQ0FBUStMLFFBQUEsRUFBUztRQUFPLElBQUk3VSxFQUFBO1FBQUUsS0FBS3VWLFFBQUEsQ0FBU2pELGNBQUEsQ0FBZXZTLEVBQUMsR0FBRW1PLFlBQUEsQ0FBYXBPLEVBQUMsR0FBRSxLQUFLb0gsU0FBQSxDQUFVLElBQUVsSCxFQUFBLEdBQUUsSUFBRSxTQUFLLEtBQUs4SSxPQUFBLENBQVFvQixVQUFBLEdBQVdsSyxFQUFBLEdBQUUsTUFBSSxZQUFVLE9BQU8sS0FBSzhJLE9BQUEsQ0FBUW9CLFVBQUEsSUFBWSxXQUFTLEtBQUtwQixPQUFBLENBQVFvQixVQUFBLEtBQWFsSyxFQUFBLEdBQUUsS0FBSzhJLE9BQUEsQ0FBUW9CLFVBQUEsQ0FBVytMLFlBQUEsR0FBY25XLEVBQUEsR0FBRTZNLFVBQUEsQ0FBWSxNQUFJO1VBQUMsS0FBS3FKLE1BQUEsQ0FBT2pXLEVBQUM7UUFBQyxHQUFHQyxFQUFDLEdBQUUsS0FBSzhCLElBQUEsQ0FBSyxlQUFjL0IsRUFBQSxHQUFFLEtBQUt3SCxXQUFBLENBQVksQ0FBQyxHQUFFLEtBQUt6RixJQUFBLENBQUssUUFBTy9CLEVBQUM7TUFBQyxDQUFFLENBQUM7SUFBQztFQUFDO0VBQUM0VixZQUFBLEVBQWE7SUFBQyxJQUFJN1YsRUFBQTtJQUFFLENBQUMsVUFBUUEsRUFBQSxHQUFFLEtBQUtnSixPQUFBLENBQVFvTSxPQUFBLEtBQVUsV0FBU3BWLEVBQUEsR0FBRSxTQUFPQSxFQUFBLENBQUUwQyxNQUFBLEtBQVMsS0FBS3NHLE9BQUEsQ0FBUW9NLE9BQUEsQ0FBUW5ULE9BQUEsQ0FBU3pCLEVBQUEsSUFBRztNQUFDLEtBQUs0VixjQUFBLENBQWU1VixFQUFDO0lBQUMsQ0FBRTtFQUFDO0VBQUM2Vix3QkFBQSxFQUF5QjtJQUFDLEtBQUtmLGtCQUFBLENBQW1CclQsT0FBQSxDQUFTakMsRUFBQSxJQUFHQSxFQUFBLENBQUUsQ0FBRSxHQUFFLEtBQUtzVixrQkFBQSxHQUFtQixFQUFDO0VBQUM7RUFBQzNILFdBQVczTixFQUFBLEVBQUU7SUFBQyxLQUFLZ0osT0FBQSxHQUFRdEYsTUFBQSxDQUFPSyxNQUFBLENBQU8sQ0FBQyxHQUFFLEtBQUtpRixPQUFBLEVBQVFoSixFQUFDLEdBQUUsS0FBS3lWLFFBQUEsQ0FBUzlILFVBQUEsQ0FBVyxLQUFLM0UsT0FBTyxHQUFFaEosRUFBQSxDQUFFbVYsU0FBQSxJQUFXLEtBQUsvTSxlQUFBLENBQWdCcEksRUFBQSxDQUFFbVYsU0FBUyxHQUFFLFFBQU1uVixFQUFBLENBQUUyRixhQUFBLEtBQWdCLEtBQUsyQyxlQUFBLENBQWdCLEVBQUUxQyxRQUFBLEdBQVM1RixFQUFBLENBQUUyRixhQUFBO0VBQWM7RUFBQ3lRLGVBQWVwVyxFQUFBLEVBQUU7SUFBQyxPQUFPQSxFQUFBLENBQUVzVyxLQUFBLENBQU0sSUFBSSxHQUFFLEtBQUtsQixPQUFBLENBQVFySyxJQUFBLENBQUsvSyxFQUFDLEdBQUUsS0FBSytJLGFBQUEsQ0FBY2dDLElBQUEsQ0FBSy9LLEVBQUEsQ0FBRTBCLElBQUEsQ0FBSyxXQUFXLE1BQUk7TUFBQyxLQUFLMFQsT0FBQSxHQUFRLEtBQUtBLE9BQUEsQ0FBUW1CLE1BQUEsQ0FBUXRXLEVBQUEsSUFBR0EsRUFBQSxLQUFJRCxFQUFFO0lBQUMsQ0FBRSxDQUFDLEdBQUVBLEVBQUE7RUFBQztFQUFDNE4sV0FBQSxFQUFZO0lBQUMsT0FBTyxLQUFLNkgsUUFBQSxDQUFTN0gsVUFBQSxDQUFXO0VBQUM7RUFBQ0MsU0FBQSxFQUFVO0lBQUMsT0FBTyxLQUFLNEgsUUFBQSxDQUFTNUgsUUFBQSxDQUFTO0VBQUM7RUFBQ0MsVUFBQSxFQUFXO0lBQUMsT0FBTyxLQUFLMkgsUUFBQSxDQUFTM0gsU0FBQSxDQUFVO0VBQUM7RUFBQ0MsVUFBVS9OLEVBQUEsRUFBRTtJQUFDLE9BQU8sS0FBS3lWLFFBQUEsQ0FBUzFILFNBQUEsQ0FBVS9OLEVBQUM7RUFBQztFQUFDd1csY0FBY3hXLEVBQUEsRUFBRTtJQUFDLE1BQU1DLEVBQUEsR0FBRUQsRUFBQSxHQUFFLEtBQUt5SCxXQUFBLENBQVk7SUFBRSxLQUFLZ08sUUFBQSxDQUFTekgsbUJBQUEsQ0FBb0IvTixFQUFDO0VBQUM7RUFBQ3dXLGlCQUFBLEVBQWtCO0lBQUMsT0FBTyxLQUFLckIsT0FBQTtFQUFPO0VBQUNzQixVQUFVelcsRUFBQSxFQUFFRSxFQUFBLEVBQUVFLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsT0FBT1AsQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxJQUFJQyxFQUFBO01BQUUsSUFBRyxLQUFLZ0MsSUFBQSxDQUFLLFFBQU8vQixFQUFDLEdBQUUsQ0FBQyxLQUFLK0ksT0FBQSxDQUFRdEQsS0FBQSxJQUFPLEtBQUswQixTQUFBLENBQVUsS0FBRyxLQUFLTCxLQUFBLENBQU0sR0FBRSxLQUFLc08sV0FBQSxHQUFZLE1BQUssQ0FBQ2xWLEVBQUEsSUFBRyxDQUFDRSxFQUFBLEVBQUU7UUFBQyxNQUFNSCxFQUFBLEdBQUUsS0FBSzhJLE9BQUEsQ0FBUTJOLFdBQUEsSUFBYSxDQUFDO1FBQUVsSSxNQUFBLENBQU9tSSxlQUFBLElBQWlCLENBQUMxVyxFQUFBLENBQUUyVyxNQUFBLEtBQVMsS0FBS3RCLGVBQUEsR0FBZ0IsSUFBSXFCLGVBQUEsSUFBZ0IxVyxFQUFBLENBQUUyVyxNQUFBLEdBQU8sVUFBUTdXLEVBQUEsR0FBRSxLQUFLdVYsZUFBQSxLQUFrQixXQUFTdlYsRUFBQSxHQUFFLFNBQU9BLEVBQUEsQ0FBRTZXLE1BQUE7UUFBUSxNQUFNalQsRUFBQSxHQUFFcEQsRUFBQSxJQUFHLEtBQUt3QixJQUFBLENBQUssV0FBVXhCLEVBQUM7UUFBRUwsRUFBQSxHQUFFLE1BQU1xRSxDQUFBLENBQUVDLFNBQUEsQ0FBVXhFLEVBQUEsRUFBRTJELEVBQUEsRUFBRTFELEVBQUM7TUFBQztNQUFDLEtBQUt3RyxNQUFBLENBQU96RyxFQUFBLEVBQUVFLEVBQUM7TUFBRSxNQUFNUyxFQUFBLEdBQUUsTUFBTSxJQUFJUixPQUFBLENBQVNJLEVBQUEsSUFBRztRQUFDLE1BQU1NLEVBQUEsR0FBRVIsRUFBQSxJQUFHLEtBQUttSCxXQUFBLENBQVk7UUFBRTNHLEVBQUEsR0FBRU4sRUFBQSxDQUFFTSxFQUFDLElBQUUsS0FBS3dVLGtCQUFBLENBQW1CdkssSUFBQSxDQUFLLEtBQUtoRixZQUFBLENBQWEsa0JBQWtCLE1BQUl2RixFQUFBLENBQUUsS0FBS2lILFdBQUEsQ0FBWSxDQUFDLEdBQUc7VUFBQy9GLElBQUEsRUFBSztRQUFFLENBQUMsQ0FBQztNQUFDLENBQUU7TUFBRSxJQUFHLENBQUN6QixFQUFBLElBQUcsQ0FBQ0UsRUFBQSxFQUFFO1FBQUMsTUFBTUssRUFBQSxHQUFFLEtBQUs4SCxlQUFBLENBQWdCO1FBQUU5SCxFQUFBLFlBQWErUyxDQUFBLEtBQUkvUyxFQUFBLENBQUVzQyxRQUFBLEdBQVNsQyxFQUFBO01BQUU7TUFBQyxJQUFHUCxFQUFBLEVBQUUsS0FBS2dWLFdBQUEsR0FBWXpULENBQUEsQ0FBRVksWUFBQSxDQUFhbkMsRUFBQSxFQUFFTyxFQUFBLElBQUcsQ0FBQyxXQUFVVCxFQUFBLEVBQUU7UUFBQyxNQUFNSyxFQUFBLEdBQUUsTUFBTUwsRUFBQSxDQUFFa1UsV0FBQSxDQUFZO1FBQUUsS0FBS2dCLFdBQUEsR0FBWSxNQUFNelQsQ0FBQSxDQUFFTSxNQUFBLENBQU8xQixFQUFBLEVBQUUsS0FBS3dJLE9BQUEsQ0FBUTVHLFVBQVU7TUFBQztNQUFDLEtBQUtpVCxXQUFBLEtBQWMsS0FBS3JULElBQUEsQ0FBSyxVQUFTLEtBQUt5RixXQUFBLENBQVksQ0FBQyxHQUFFLEtBQUtnTyxRQUFBLENBQVNoRSxNQUFBLENBQU8sS0FBSzRELFdBQVcsSUFBRyxLQUFLclQsSUFBQSxDQUFLLFNBQVEsS0FBS3lGLFdBQUEsQ0FBWSxDQUFDO0lBQUMsQ0FBRTtFQUFDO0VBQUNSLEtBQUtoSCxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsT0FBT0osQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxJQUFHO1FBQUMsT0FBTyxNQUFNLEtBQUsyVyxTQUFBLENBQVV6VyxFQUFBLEVBQUUsUUFBT0MsRUFBQSxFQUFFQyxFQUFDO01BQUMsU0FBT0gsRUFBQSxFQUFOO1FBQVMsTUFBTSxLQUFLZ0MsSUFBQSxDQUFLLFNBQVFoQyxFQUFDLEdBQUVBLEVBQUE7TUFBQztJQUFDLENBQUU7RUFBQztFQUFDOFcsU0FBUzdXLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxPQUFPSixDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztNQUFDLElBQUc7UUFBQyxPQUFPLE1BQU0sS0FBSzJXLFNBQUEsQ0FBVSxJQUFHelcsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUM7TUFBQyxTQUFPSCxFQUFBLEVBQU47UUFBUyxNQUFNLEtBQUtnQyxJQUFBLENBQUssU0FBUWhDLEVBQUMsR0FBRUEsRUFBQTtNQUFDO0lBQUMsQ0FBRTtFQUFDO0VBQUNxUyxLQUFLclMsRUFBQSxFQUFFO0lBQUMsSUFBRyxDQUFDLEtBQUtxVixXQUFBLEVBQVksTUFBTSxJQUFJelEsS0FBQSxDQUFNLGlCQUFpQjtJQUFFLEtBQUs2USxRQUFBLENBQVNwRCxJQUFBLENBQUtyUyxFQUFDLEdBQUUsS0FBS2dDLElBQUEsQ0FBSyxRQUFPaEMsRUFBQztFQUFDO0VBQUMrVyxlQUFBLEVBQWdCO0lBQUMsT0FBTyxLQUFLMUIsV0FBQTtFQUFXO0VBQUMyQixZQUFZO0lBQUNDLFFBQUEsRUFBU2pYLEVBQUEsR0FBRTtJQUFFa1gsU0FBQSxFQUFValgsRUFBQSxHQUFFO0lBQUlrWCxTQUFBLEVBQVVqWCxFQUFBLEdBQUU7RUFBRyxJQUFFLENBQUMsR0FBRTtJQUFDLElBQUcsQ0FBQyxLQUFLbVYsV0FBQSxFQUFZLE1BQU0sSUFBSXpRLEtBQUEsQ0FBTSxvQ0FBb0M7SUFBRSxNQUFNekUsRUFBQSxHQUFFd0MsSUFBQSxDQUFLb0ssR0FBQSxDQUFJL00sRUFBQSxFQUFFLEtBQUtxVixXQUFBLENBQVl0UyxnQkFBZ0I7TUFBRTFDLEVBQUEsR0FBRSxFQUFDO0lBQUUsU0FBUUcsRUFBQSxHQUFFLEdBQUVBLEVBQUEsR0FBRUwsRUFBQSxFQUFFSyxFQUFBLElBQUk7TUFBQyxNQUFNd0UsRUFBQSxHQUFFLEtBQUtxUSxXQUFBLENBQVlyUyxjQUFBLENBQWV4QyxFQUFDO1FBQUVGLEVBQUEsR0FBRSxFQUFDO1FBQUVDLEVBQUEsR0FBRXlFLEVBQUEsQ0FBRXRDLE1BQUEsR0FBT3pDLEVBQUE7TUFBRSxTQUFRVSxFQUFBLEdBQUUsR0FBRUEsRUFBQSxHQUFFVixFQUFBLEVBQUVVLEVBQUEsSUFBSTtRQUFDLE1BQU1HLEVBQUEsR0FBRWtFLEVBQUEsQ0FBRThMLEtBQUEsQ0FBTW5PLElBQUEsQ0FBS2dPLEtBQUEsQ0FBTWhRLEVBQUEsR0FBRUosRUFBQyxHQUFFb0MsSUFBQSxDQUFLb08sSUFBQSxFQUFNcFEsRUFBQSxHQUFFLEtBQUdKLEVBQUMsQ0FBQztRQUFFLElBQUlxRCxFQUFBLEdBQUU7UUFBRSxTQUFRd1QsRUFBQSxHQUFFLEdBQUVBLEVBQUEsR0FBRXRXLEVBQUEsQ0FBRTRCLE1BQUEsRUFBTzBVLEVBQUEsSUFBSTtVQUFDLE1BQU16VixFQUFBLEdBQUViLEVBQUEsQ0FBRXNXLEVBQUE7VUFBR3pVLElBQUEsQ0FBS0MsR0FBQSxDQUFJakIsRUFBQyxJQUFFZ0IsSUFBQSxDQUFLQyxHQUFBLENBQUlnQixFQUFDLE1BQUlBLEVBQUEsR0FBRWpDLEVBQUE7UUFBRTtRQUFDckIsRUFBQSxDQUFFeUssSUFBQSxDQUFLcEksSUFBQSxDQUFLeUMsS0FBQSxDQUFNeEIsRUFBQSxHQUFFMUQsRUFBQyxJQUFFQSxFQUFDO01BQUM7TUFBQ0csRUFBQSxDQUFFMEssSUFBQSxDQUFLekssRUFBQztJQUFDO0lBQUMsT0FBT0QsRUFBQTtFQUFDO0VBQUNvSCxZQUFBLEVBQWE7SUFBQyxJQUFJekgsRUFBQSxHQUFFLE1BQU15SCxXQUFBLENBQVksS0FBRztJQUFFLE9BQU8sTUFBSXpILEVBQUEsSUFBR0EsRUFBQSxLQUFJLElBQUUsS0FBRyxDQUFDLEtBQUtxVixXQUFBLEtBQWNyVixFQUFBLEdBQUUsS0FBS3FWLFdBQUEsQ0FBWXZTLFFBQUEsR0FBVTlDLEVBQUE7RUFBQztFQUFDcVgsa0JBQWtCclgsRUFBQSxFQUFFO0lBQUMsS0FBS2dKLE9BQUEsQ0FBUStMLFFBQUEsR0FBUy9VLEVBQUE7RUFBQztFQUFDdUgsUUFBUXZILEVBQUEsRUFBRTtJQUFDLE1BQU11SCxPQUFBLENBQVF2SCxFQUFDLEdBQUUsS0FBS2dXLGNBQUEsQ0FBZWhXLEVBQUMsR0FBRSxLQUFLZ0MsSUFBQSxDQUFLLGNBQWFoQyxFQUFDO0VBQUM7RUFBQ2tXLE9BQU9sVyxFQUFBLEVBQUU7SUFBQyxNQUFNQyxFQUFBLEdBQUUsS0FBS3dILFdBQUEsQ0FBWSxJQUFFekgsRUFBQTtJQUFFLEtBQUt1SCxPQUFBLENBQVF0SCxFQUFDO0VBQUM7RUFBQ3FYLFVBQUEsRUFBVztJQUFDLE9BQU92WCxDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztNQUFDLE9BQU8sS0FBS3FILFNBQUEsQ0FBVSxJQUFFLEtBQUtMLEtBQUEsQ0FBTSxJQUFFLEtBQUtJLElBQUEsQ0FBSztJQUFDLENBQUU7RUFBQztFQUFDbU0sS0FBQSxFQUFNO0lBQUMsS0FBS3ZNLEtBQUEsQ0FBTSxHQUFFLEtBQUtRLE9BQUEsQ0FBUSxDQUFDO0VBQUM7RUFBQ2dRLEtBQUt2WCxFQUFBLEVBQUU7SUFBQyxLQUFLdUgsT0FBQSxDQUFRLEtBQUtHLGNBQUEsQ0FBZSxJQUFFMUgsRUFBQztFQUFDO0VBQUN3WCxNQUFBLEVBQU87SUFBQyxLQUFLdlEsSUFBQSxDQUFLLElBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLElBQUk7RUFBQztFQUFDQyxnQkFBZ0JsSCxFQUFBLEVBQUU7SUFBQyxLQUFLcVcsdUJBQUEsQ0FBd0IsR0FBRSxNQUFNblAsZUFBQSxDQUFnQmxILEVBQUMsR0FBRSxLQUFLMFYsZ0JBQUEsQ0FBaUI7RUFBQztFQUFDOUMsWUFBQSxFQUFhO0lBQUMsT0FBTzdTLENBQUEsQ0FBRSxNQUFLbVQsU0FBQSxFQUFVLFFBQVEsV0FBVWxULEVBQUEsR0FBRSxhQUFZQyxFQUFBLEdBQUUsR0FBRUMsRUFBQSxHQUFFLFdBQVU7TUFBQyxPQUFPLEtBQUt1VixRQUFBLENBQVM3QyxXQUFBLENBQVk1UyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQztJQUFDLENBQUU7RUFBQztFQUFDNEcsUUFBQSxFQUFTO0lBQUMsSUFBSTlHLEVBQUE7SUFBRSxLQUFLZ0MsSUFBQSxDQUFLLFNBQVMsR0FBRSxVQUFRaEMsRUFBQSxHQUFFLEtBQUt1VixlQUFBLEtBQWtCLFdBQVN2VixFQUFBLElBQUdBLEVBQUEsQ0FBRXlYLEtBQUEsQ0FBTSxHQUFFLEtBQUtyQyxPQUFBLENBQVFuVCxPQUFBLENBQVN6QixFQUFBLElBQUdBLEVBQUEsQ0FBRXNHLE9BQUEsQ0FBUSxDQUFFLEdBQUUsS0FBS2lDLGFBQUEsQ0FBYzlHLE9BQUEsQ0FBU3pCLEVBQUEsSUFBR0EsRUFBQSxDQUFFLENBQUUsR0FBRSxLQUFLNlYsdUJBQUEsQ0FBd0IsR0FBRSxLQUFLYixLQUFBLENBQU0xTyxPQUFBLENBQVEsR0FBRSxLQUFLMk8sUUFBQSxDQUFTM08sT0FBQSxDQUFRLEdBQUUsTUFBTUEsT0FBQSxDQUFRO0VBQUM7QUFBQztBQUFDa08sQ0FBQSxDQUFFMEMsVUFBQSxHQUFXLGNBQWN0VyxDQUFBLENBQUM7RUFBQ0MsWUFBWXJCLEVBQUEsRUFBRTtJQUFDLE1BQU0sR0FBRSxLQUFLK0ksYUFBQSxHQUFjLEVBQUMsRUFBRSxLQUFLQyxPQUFBLEdBQVFoSixFQUFBO0VBQUM7RUFBQzJYLE9BQUEsRUFBUSxDQUFDO0VBQUNyQixNQUFNdFcsRUFBQSxFQUFFO0lBQUMsS0FBSzRYLFVBQUEsR0FBVzVYLEVBQUEsRUFBRSxLQUFLMlgsTUFBQSxDQUFPO0VBQUM7RUFBQzdRLFFBQUEsRUFBUztJQUFDLEtBQUs5RSxJQUFBLENBQUssU0FBUyxHQUFFLEtBQUsrRyxhQUFBLENBQWM5RyxPQUFBLENBQVNqQyxFQUFBLElBQUdBLEVBQUEsQ0FBRSxDQUFFO0VBQUM7QUFBQyxHQUFFZ1YsQ0FBQSxDQUFFNkMsR0FBQSxHQUFJeFQsQ0FBQTs7O0FERzd3M0IsSUFBTzFFLDJCQUFBLEdBQVFxVixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9