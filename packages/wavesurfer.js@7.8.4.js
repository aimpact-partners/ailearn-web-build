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

// .beyond/uimport/temp/wavesurfer.js.7.8.4.js
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

// .beyond/uimport/temp/wavesurfer.js.7.8.4.js
var wavesurfer_js_7_8_4_default = u;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3dhdmVzdXJmZXIuanMuNy44LjQuanMiLCIuLi9ub2RlX21vZHVsZXMvd2F2ZXN1cmZlci5qcy9kaXN0L3dhdmVzdXJmZXIuZXNtLmpzIl0sIm5hbWVzIjpbIndhdmVzdXJmZXJfanNfN184XzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIndhdmVzdXJmZXJfanNfN184XzRfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ0IiwidDIiLCJlMiIsImkyIiwiczIiLCJQcm9taXNlIiwibjIiLCJyMiIsIm8yIiwidDMiLCJoMiIsIm5leHQiLCJ0NCIsImEyIiwidGhyb3ciLCJlMyIsImRvbmUiLCJ2YWx1ZSIsInRoZW4iLCJhcHBseSIsIlN1cHByZXNzZWRFcnJvciIsImUiLCJjb25zdHJ1Y3RvciIsImxpc3RlbmVycyIsIm9uIiwiU2V0IiwiYWRkIiwib25jZSIsImkzIiwiaSIsInVuIiwiZGVsZXRlIiwidW5BbGwiLCJlbWl0IiwiZm9yRWFjaCIsImRlY29kZSIsIkF1ZGlvQ29udGV4dCIsInNhbXBsZVJhdGUiLCJkZWNvZGVBdWRpb0RhdGEiLCJmaW5hbGx5IiwiY2xvc2UiLCJjcmVhdGVCdWZmZXIiLCJzb21lIiwibGVuZ3RoIiwiTWF0aCIsImFicyIsImU0IiwiZHVyYXRpb24iLCJudW1iZXJPZkNoYW5uZWxzIiwiZ2V0Q2hhbm5lbERhdGEiLCJjb3B5RnJvbUNoYW5uZWwiLCJBdWRpb0J1ZmZlciIsInByb3RvdHlwZSIsImNvcHlUb0NoYW5uZWwiLCJzIiwieG1sbnMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJlbnRyaWVzIiwibjMiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiYXNzaWduIiwic3R5bGUiLCJ0ZXh0Q29udGVudCIsInNldEF0dHJpYnV0ZSIsInRvU3RyaW5nIiwibiIsInIiLCJmcmVlemUiLCJfX3Byb3RvX18iLCJvIiwiZmV0Y2hCbG9iIiwiZmV0Y2giLCJzdGF0dXMiLCJFcnJvciIsInN0YXR1c1RleHQiLCJib2R5IiwiaGVhZGVycyIsInMzIiwiZ2V0UmVhZGVyIiwiTnVtYmVyIiwiZ2V0Iiwicm91bmQiLCJhIiwicmVhZCIsImNsb25lIiwiYmxvYiIsImlzRXh0ZXJuYWxNZWRpYSIsIm1lZGlhIiwibWVkaWFDb250cm9scyIsImNvbnRyb2xzIiwiYXV0b3BsYXkiLCJwbGF5YmFja1JhdGUiLCJvbk1lZGlhRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldFNyYyIsImN1cnJlbnRTcmMiLCJzcmMiLCJyZXZva2VTcmMiLCJzdGFydHNXaXRoIiwiVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiY2FuUGxheVR5cGUiLCJzZXRTcmMiLCJCbG9iIiwidHlwZSIsImNyZWF0ZU9iamVjdFVSTCIsImRlc3Ryb3kiLCJwYXVzZSIsInJlbW92ZSIsImxvYWQiLCJzZXRNZWRpYUVsZW1lbnQiLCJwbGF5IiwiaXNQbGF5aW5nIiwicGF1c2VkIiwiZW5kZWQiLCJzZXRUaW1lIiwiY3VycmVudFRpbWUiLCJnZXREdXJhdGlvbiIsImdldEN1cnJlbnRUaW1lIiwiZ2V0Vm9sdW1lIiwidm9sdW1lIiwic2V0Vm9sdW1lIiwiZ2V0TXV0ZWQiLCJtdXRlZCIsInNldE11dGVkIiwiZ2V0UGxheWJhY2tSYXRlIiwiaXNTZWVraW5nIiwic2Vla2luZyIsInNldFBsYXliYWNrUmF0ZSIsInByZXNlcnZlc1BpdGNoIiwiZ2V0TWVkaWFFbGVtZW50Iiwic2V0U2lua0lkIiwiaCIsInRpbWVvdXRzIiwiaXNTY3JvbGxhYmxlIiwiYXVkaW9EYXRhIiwicmVzaXplT2JzZXJ2ZXIiLCJsYXN0Q29udGFpbmVyV2lkdGgiLCJpc0RyYWdnaW5nIiwic3Vic2NyaXB0aW9ucyIsIm9wdGlvbnMiLCJwYXJlbnRGcm9tT3B0aW9uc0NvbnRhaW5lciIsImNvbnRhaW5lciIsInBhcmVudCIsImluaXRIdG1sIiwic2Nyb2xsQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIndyYXBwZXIiLCJjYW52YXNXcmFwcGVyIiwicHJvZ3Jlc3NXcmFwcGVyIiwiY3Vyc29yIiwiaW5pdEV2ZW50cyIsIkhUTUxFbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJkcmFnVG9TZWVrIiwiaW5pdERyYWciLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsV2lkdGgiLCJjbGllbnRXaWR0aCIsIlJlc2l6ZU9ic2VydmVyIiwiY3JlYXRlRGVsYXkiLCJvbkNvbnRhaW5lclJlc2l6ZSIsImNhdGNoIiwib2JzZXJ2ZSIsInJlUmVuZGVyIiwicHVzaCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwibDIiLCJsMyIsImJ1dHRvbiIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZDIiLCJjMiIsInUyIiwicCIsIkRhdGUiLCJub3ciLCJtIiwicjMiLCJoMyIsImw0IiwibTIiLCJzNCIsIm8zIiwiZyIsImEzIiwiZiIsInJlbGF0ZWRUYXJnZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJ2IiwiYiIsInBhc3NpdmUiLCJjYXB0dXJlIiwic2V0VGltZW91dCIsIm1heCIsIm1pbiIsImdldEhlaWdodCIsImlzTmFOIiwiY2xpZW50SGVpZ2h0IiwiZXZlcnkiLCJvdmVybGF5IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImlubmVySFRNTCIsInNwbGl0Q2hhbm5lbHMiLCJzZXRPcHRpb25zIiwiZ2V0V3JhcHBlciIsImdldFdpZHRoIiwiZ2V0U2Nyb2xsIiwic2V0U2Nyb2xsIiwic2V0U2Nyb2xsUGVyY2VudGFnZSIsImRpc2Nvbm5lY3QiLCJ1bnN1YnNjcmliZU9uU2Nyb2xsIiwiY2FsbCIsImNsZWFyVGltZW91dCIsImNvbnZlcnRDb2xvclZhbHVlcyIsIkFycmF5IiwiaXNBcnJheSIsImdldENvbnRleHQiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJnZXRQaXhlbFJhdGlvIiwicmVuZGVyQmFyV2F2ZWZvcm0iLCJjYW52YXMiLCJiYXJXaWR0aCIsImJhckdhcCIsImJhclJhZGl1cyIsImJlZ2luUGF0aCIsImJhckFsaWduIiwiZDMiLCJmaWxsIiwiY2xvc2VQYXRoIiwicmVuZGVyTGluZVdhdmVmb3JtIiwibW92ZVRvIiwibGluZVRvIiwicmVuZGVyV2F2ZWZvcm0iLCJmaWxsU3R5bGUiLCJ3YXZlQ29sb3IiLCJyZW5kZXJGdW5jdGlvbiIsImJhckhlaWdodCIsIm5vcm1hbGl6ZSIsImZyb20iLCJyZWR1Y2UiLCJyZW5kZXJTaW5nbGVDYW52YXMiLCJjbG9uZU5vZGUiLCJkcmF3SW1hZ2UiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJwcm9ncmVzc0NvbG9yIiwiZmlsbFJlY3QiLCJyZW5kZXJNdWx0aUNhbnZhcyIsIk1BWF9DQU5WQVNfV0lEVEgiLCJmbG9vciIsIm1hcCIsImk0Iiwic2xpY2UiLCJjZWlsIiwia2V5cyIsIk1BWF9OT0RFUyIsInJlbmRlckNoYW5uZWwiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIm1hcmdpblRvcCIsIm1pbkhlaWdodCIsInJlbmRlciIsIm1pblB4UGVyU2VjIiwiZmlsbFBhcmVudCIsIm92ZXJmbG93WCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhpZGVTY3JvbGxiYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3JDb2xvciIsImN1cnNvcldpZHRoIiwicmVzb2x2ZSIsInJpZ2h0Iiwiem9vbSIsInNjcm9sbEludG9WaWV3IiwiYXV0b0NlbnRlciIsInJlbmRlclByb2dyZXNzIiwiY2xpcFBhdGgiLCJ0cmFuc2Zvcm0iLCJhdXRvU2Nyb2xsIiwiZXhwb3J0SW1hZ2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9EYXRhVVJMIiwiYWxsIiwidG9CbG9iIiwibCIsImFyZ3VtZW50cyIsInVuc3Vic2NyaWJlIiwic3RhcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdG9wIiwiZCIsImJ1ZmZlck5vZGUiLCJwbGF5U3RhcnRUaW1lIiwicGxheWVkRHVyYXRpb24iLCJfbXV0ZWQiLCJfcGxheWJhY2tSYXRlIiwiX2R1cmF0aW9uIiwiYnVmZmVyIiwiY3Jvc3NPcmlnaW4iLCJhdWRpb0NvbnRleHQiLCJnYWluTm9kZSIsImNyZWF0ZUdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJhcnJheUJ1ZmZlciIsIl9wbGF5IiwiY3JlYXRlQnVmZmVyU291cmNlIiwib25lbmRlZCIsIl9wYXVzZSIsInN0b3BBdCIsImdhaW4iLCJ0ZXN0IiwiZ2V0R2Fpbk5vZGUiLCJjIiwiaW50ZXJhY3QiLCJ1IiwiY3JlYXRlIiwiYmFja2VuZCIsImF1ZGlvUmF0ZSIsInBsdWdpbnMiLCJkZWNvZGVkRGF0YSIsIm1lZGlhU3Vic2NyaXB0aW9ucyIsImFib3J0Q29udHJvbGxlciIsInRpbWVyIiwicmVuZGVyZXIiLCJpbml0UGxheWVyRXZlbnRzIiwiaW5pdFJlbmRlcmVyRXZlbnRzIiwiaW5pdFRpbWVyRXZlbnRzIiwiaW5pdFBsdWdpbnMiLCJ1cmwiLCJwZWFrcyIsInVwZGF0ZVByb2dyZXNzIiwiZXJyb3IiLCJzZWVrVG8iLCJkZWJvdW5jZVRpbWUiLCJyZWdpc3RlclBsdWdpbiIsInVuc3Vic2NyaWJlUGxheWVyRXZlbnRzIiwiX2luaXQiLCJmaWx0ZXIiLCJzZXRTY3JvbGxUaW1lIiwiZ2V0QWN0aXZlUGx1Z2lucyIsImxvYWRBdWRpbyIsImZldGNoUGFyYW1zIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwibG9hZEJsb2IiLCJnZXREZWNvZGVkRGF0YSIsImV4cG9ydFBlYWtzIiwiY2hhbm5lbHMiLCJtYXhMZW5ndGgiLCJwcmVjaXNpb24iLCJ0NSIsInRvZ2dsZUludGVyYWN0aW9uIiwicGxheVBhdXNlIiwic2tpcCIs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S0FBSzJWLHVCQUFBLENBQXdCLEdBQUUsS0FBS2IsS0FBQSxDQUFNeE8sT0FBQSxDQUFRLEdBQUUsS0FBS3lPLFFBQUEsQ0FBU3pPLE9BQUEsQ0FBUSxHQUFFLE1BQU1BLE9BQUEsQ0FBUTtFQUFDO0FBQUM7QUFBQ2dPLENBQUEsQ0FBRTBDLFVBQUEsR0FBVyxjQUFjcFcsQ0FBQSxDQUFDO0VBQUNDLFlBQVlyQixFQUFBLEVBQUU7SUFBQyxNQUFNLEdBQUUsS0FBSytJLGFBQUEsR0FBYyxFQUFDLEVBQUUsS0FBS0MsT0FBQSxHQUFRaEosRUFBQTtFQUFDO0VBQUN5WCxPQUFBLEVBQVEsQ0FBQztFQUFDckIsTUFBTXBXLEVBQUEsRUFBRTtJQUFDLEtBQUswWCxVQUFBLEdBQVcxWCxFQUFBLEVBQUUsS0FBS3lYLE1BQUEsQ0FBTztFQUFDO0VBQUMzUSxRQUFBLEVBQVM7SUFBQyxLQUFLOUUsSUFBQSxDQUFLLFNBQVMsR0FBRSxLQUFLK0csYUFBQSxDQUFjOUcsT0FBQSxDQUFTakMsRUFBQSxJQUFHQSxFQUFBLENBQUUsQ0FBRTtFQUFDO0FBQUMsR0FBRThVLENBQUEsQ0FBRTZDLEdBQUEsR0FBSXRULENBQUE7OztBREc1bzNCLElBQU8xRSwyQkFBQSxHQUFRbVYsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==