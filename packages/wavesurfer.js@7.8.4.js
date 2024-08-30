System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["wavesurfer.js","7.8.4"]]);
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

// .beyond/uimport/wavesurfer.js.7.8.4.js
var wavesurfer_js_7_8_4_exports = {};
__export(wavesurfer_js_7_8_4_exports, {
  default: () => wavesurfer_js_7_8_4_default
});
module.exports = __toCommonJS(wavesurfer_js_7_8_4_exports);

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
      });
    return e2.innerHTML = `
      <style>
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

// .beyond/uimport/wavesurfer.js.7.8.4.js
var wavesurfer_js_7_8_4_default = u;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC93YXZlc3VyZmVyLmpzLjcuOC40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dhdmVzdXJmZXIuanMvZGlzdC93YXZlc3VyZmVyLmVzbS5qcyJdLCJuYW1lcyI6WyJ3YXZlc3VyZmVyX2pzXzdfOF80X2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJ3YXZlc3VyZmVyX2pzXzdfOF80X2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwidCIsInQyIiwiZTIiLCJpMiIsInMyIiwiUHJvbWlzZSIsIm4yIiwicjIiLCJvMiIsInQzIiwiaDIiLCJuZXh0IiwidDQiLCJhMiIsInRocm93IiwiZTMiLCJkb25lIiwidmFsdWUiLCJ0aGVuIiwiYXBwbHkiLCJTdXBwcmVzc2VkRXJyb3IiLCJlIiwiY29uc3RydWN0b3IiLCJsaXN0ZW5lcnMiLCJvbiIsIlNldCIsImFkZCIsIm9uY2UiLCJpMyIsImkiLCJ1biIsImRlbGV0ZSIsInVuQWxsIiwiZW1pdCIsImZvckVhY2giLCJkZWNvZGUiLCJBdWRpb0NvbnRleHQiLCJzYW1wbGVSYXRlIiwiZGVjb2RlQXVkaW9EYXRhIiwiZmluYWxseSIsImNsb3NlIiwiY3JlYXRlQnVmZmVyIiwic29tZSIsImxlbmd0aCIsIk1hdGgiLCJhYnMiLCJlNCIsImR1cmF0aW9uIiwibnVtYmVyT2ZDaGFubmVscyIsImdldENoYW5uZWxEYXRhIiwiY29weUZyb21DaGFubmVsIiwiQXVkaW9CdWZmZXIiLCJwcm90b3R5cGUiLCJjb3B5VG9DaGFubmVsIiwicyIsInhtbG5zIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiZW50cmllcyIsIm4zIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImFzc2lnbiIsInN0eWxlIiwidGV4dENvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsIm4iLCJyIiwiZnJlZXplIiwiX19wcm90b19fIiwibyIsImZldGNoQmxvYiIsImZldGNoIiwic3RhdHVzIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiYm9keSIsImhlYWRlcnMiLCJzMyIsImdldFJlYWRlciIsIk51bWJlciIsImdldCIsInJvdW5kIiwiYSIsInJlYWQiLCJjbG9uZSIsImJsb2IiLCJpc0V4dGVybmFsTWVkaWEiLCJtZWRpYSIsIm1lZGlhQ29udHJvbHMiLCJjb250cm9scyIsImF1dG9wbGF5IiwicGxheWJhY2tSYXRlIiwib25NZWRpYUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRTcmMiLCJjdXJyZW50U3JjIiwic3JjIiwicmV2b2tlU3JjIiwic3RhcnRzV2l0aCIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImNhblBsYXlUeXBlIiwic2V0U3JjIiwiQmxvYiIsInR5cGUiLCJjcmVhdGVPYmplY3RVUkwiLCJkZXN0cm95IiwicGF1c2UiLCJyZW1vdmUiLCJsb2FkIiwic2V0TWVkaWFFbGVtZW50IiwicGxheSIsImlzUGxheWluZyIsInBhdXNlZCIsImVuZGVkIiwic2V0VGltZSIsImN1cnJlbnRUaW1lIiwiZ2V0RHVyYXRpb24iLCJnZXRDdXJyZW50VGltZSIsImdldFZvbHVtZSIsInZvbHVtZSIsInNldFZvbHVtZSIsImdldE11dGVkIiwibXV0ZWQiLCJzZXRNdXRlZCIsImdldFBsYXliYWNrUmF0ZSIsImlzU2Vla2luZyIsInNlZWtpbmciLCJzZXRQbGF5YmFja1JhdGUiLCJwcmVzZXJ2ZXNQaXRjaCIsImdldE1lZGlhRWxlbWVudCIsInNldFNpbmtJZCIsImgiLCJ0aW1lb3V0cyIsImlzU2Nyb2xsYWJsZSIsImF1ZGlvRGF0YSIsInJlc2l6ZU9ic2VydmVyIiwibGFzdENvbnRhaW5lcldpZHRoIiwiaXNEcmFnZ2luZyIsInN1YnNjcmlwdGlvbnMiLCJvcHRpb25zIiwicGFyZW50RnJvbU9wdGlvbnNDb250YWluZXIiLCJjb250YWluZXIiLCJwYXJlbnQiLCJpbml0SHRtbCIsInNjcm9sbENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJ3cmFwcGVyIiwiY2FudmFzV3JhcHBlciIsInByb2dyZXNzV3JhcHBlciIsImN1cnNvciIsImluaXRFdmVudHMiLCJIVE1MRWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhZ1RvU2VlayIsImluaXREcmFnIiwic2Nyb2xsTGVmdCIsInNjcm9sbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJSZXNpemVPYnNlcnZlciIsImNyZWF0ZURlbGF5Iiwib25Db250YWluZXJSZXNpemUiLCJjYXRjaCIsIm9ic2VydmUiLCJyZVJlbmRlciIsInB1c2giLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImwyIiwibDMiLCJidXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImQyIiwiYzIiLCJ1MiIsInAiLCJEYXRlIiwibm93IiwibSIsInIzIiwiaDMiLCJsNCIsIm0yIiwiczQiLCJvMyIsImciLCJhMyIsImYiLCJyZWxhdGVkVGFyZ2V0IiwiZG9jdW1lbnRFbGVtZW50IiwidiIsImIiLCJwYXNzaXZlIiwiY2FwdHVyZSIsInNldFRpbWVvdXQiLCJtYXgiLCJtaW4iLCJnZXRIZWlnaHQiLCJpc05hTiIsImNsaWVudEhlaWdodCIsImV2ZXJ5Iiwib3ZlcmxheSIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJpbm5lckhUTUwiLCJzcGxpdENoYW5uZWxzIiwic2V0T3B0aW9ucyIsImdldFdyYXBwZXIiLCJnZXRXaWR0aCIsImdldFNjcm9sbCIsInNldFNjcm9sbCIsInNldFNjcm9sbFBlcmNlbnRhZ2UiLCJkaXNjb25uZWN0IiwidW5zdWJzY3JpYmVPblNjcm9sbCIsImNhbGwiLCJjbGVhclRpbWVvdXQiLCJjb252ZXJ0Q29sb3JWYWx1ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJnZXRDb250ZXh0Iiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZ2V0UGl4ZWxSYXRpbyIsInJlbmRlckJhcldhdmVmb3JtIiwiY2FudmFzIiwiYmFyV2lkdGgiLCJiYXJHYXAiLCJiYXJSYWRpdXMiLCJiZWdpblBhdGgiLCJiYXJBbGlnbiIsImQzIiwiZmlsbCIsImNsb3NlUGF0aCIsInJlbmRlckxpbmVXYXZlZm9ybSIsIm1vdmVUbyIsImxpbmVUbyIsInJlbmRlcldhdmVmb3JtIiwiZmlsbFN0eWxlIiwid2F2ZUNvbG9yIiwicmVuZGVyRnVuY3Rpb24iLCJiYXJIZWlnaHQiLCJub3JtYWxpemUiLCJmcm9tIiwicmVkdWNlIiwicmVuZGVyU2luZ2xlQ2FudmFzIiwiY2xvbmVOb2RlIiwiZHJhd0ltYWdlIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwicHJvZ3Jlc3NDb2xvciIsImZpbGxSZWN0IiwicmVuZGVyTXVsdGlDYW52YXMiLCJNQVhfQ0FOVkFTX1dJRFRIIiwiZmxvb3IiLCJtYXAiLCJpNCIsInNsaWNlIiwiY2VpbCIsImtleXMiLCJNQVhfTk9ERVMiLCJyZW5kZXJDaGFubmVsIiwiaGFzT3duUHJvcGVydHkiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJtYXJnaW5Ub3AiLCJtaW5IZWlnaHQiLCJyZW5kZXIiLCJtaW5QeFBlclNlYyIsImZpbGxQYXJlbnQiLCJvdmVyZmxvd1giLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoaWRlU2Nyb2xsYmFyIiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yQ29sb3IiLCJjdXJzb3JXaWR0aCIsInJlc29sdmUiLCJyaWdodCIsInpvb20iLCJzY3JvbGxJbnRvVmlldyIsImF1dG9DZW50ZXIiLCJyZW5kZXJQcm9ncmVzcyIsImNsaXBQYXRoIiwidHJhbnNmb3JtIiwiYXV0b1Njcm9sbCIsImV4cG9ydEltYWdlIiwicXVlcnlTZWxlY3RvckFsbCIsInRvRGF0YVVSTCIsImFsbCIsInRvQmxvYiIsImwiLCJhcmd1bWVudHMiLCJ1bnN1YnNjcmliZSIsInN0YXJ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RvcCIsImQiLCJidWZmZXJOb2RlIiwicGxheVN0YXJ0VGltZSIsInBsYXllZER1cmF0aW9uIiwiX211dGVkIiwiX3BsYXliYWNrUmF0ZSIsIl9kdXJhdGlvbiIsImJ1ZmZlciIsImNyb3NzT3JpZ2luIiwiYXVkaW9Db250ZXh0IiwiZ2Fpbk5vZGUiLCJjcmVhdGVHYWluIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiYXJyYXlCdWZmZXIiLCJfcGxheSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsIm9uZW5kZWQiLCJfcGF1c2UiLCJzdG9wQXQiLCJnYWluIiwidGVzdCIsImdldEdhaW5Ob2RlIiwiYyIsImludGVyYWN0IiwidSIsImNyZWF0ZSIsImJhY2tlbmQiLCJhdWRpb1JhdGUiLCJwbHVnaW5zIiwiZGVjb2RlZERhdGEiLCJtZWRpYVN1YnNjcmlwdGlvbnMiLCJhYm9ydENvbnRyb2xsZXIiLCJ0aW1lciIsInJlbmRlcmVyIiwiaW5pdFBsYXllckV2ZW50cyIsImluaXRSZW5kZXJlckV2ZW50cyIsImluaXRUaW1lckV2ZW50cyIsImluaXRQbHVnaW5zIiwidXJsIiwicGVha3MiLCJ1cGRhdGVQcm9ncmVzcyIsImVycm9yIiwic2Vla1RvIiwiZGVib3VuY2VUaW1lIiwicmVnaXN0ZXJQbHVnaW4iLCJ1bnN1YnNjcmliZVBsYXllckV2ZW50cyIsIl9pbml0IiwiZmlsdGVyIiwic2V0U2Nyb2xsVGltZSIsImdldEFjdGl2ZVBsdWdpbnMiLCJsb2FkQXVkaW8iLCJmZXRjaFBhcmFtcyIsIkFib3J0Q29udHJvbGxlciIsInNpZ25hbCIsImxvYWRCbG9iIiwiZ2V0RGVjb2RlZERhdGEiLCJleHBvcnRQZWFrcyIsImNoYW5uZWxzIiwibWF4TGVuZ3RoIiwicHJlY2lzaW9uIiwidDUiLCJ0b2dnbGVJbnRlcmFjdGlvbiIsInBsYXlQYXVzZSIsInNraXAiLCJlbXB0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Vix1QkFBQSxDQUF3QixHQUFFLEtBQUtiLEtBQUEsQ0FBTXhPLE9BQUEsQ0FBUSxHQUFFLEtBQUt5TyxRQUFBLENBQVN6TyxPQUFBLENBQVEsR0FBRSxNQUFNQSxPQUFBLENBQVE7RUFBQztBQUFDO0FBQUNnTyxDQUFBLENBQUUwQyxVQUFBLEdBQVcsY0FBY3BXLENBQUEsQ0FBQztFQUFDQyxZQUFZckIsRUFBQSxFQUFFO0lBQUMsTUFBTSxHQUFFLEtBQUsrSSxhQUFBLEdBQWMsRUFBQyxFQUFFLEtBQUtDLE9BQUEsR0FBUWhKLEVBQUE7RUFBQztFQUFDeVgsT0FBQSxFQUFRLENBQUM7RUFBQ3JCLE1BQU1wVyxFQUFBLEVBQUU7SUFBQyxLQUFLMFgsVUFBQSxHQUFXMVgsRUFBQSxFQUFFLEtBQUt5WCxNQUFBLENBQU87RUFBQztFQUFDM1EsUUFBQSxFQUFTO0lBQUMsS0FBSzlFLElBQUEsQ0FBSyxTQUFTLEdBQUUsS0FBSytHLGFBQUEsQ0FBYzlHLE9BQUEsQ0FBU2pDLEVBQUEsSUFBR0EsRUFBQSxDQUFFLENBQUU7RUFBQztBQUFDLEdBQUU4VSxDQUFBLENBQUU2QyxHQUFBLEdBQUl0VCxDQUFBOzs7QURHNW8zQixJQUFPMUUsMkJBQUEsR0FBUW1WLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=