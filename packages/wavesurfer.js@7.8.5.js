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

// .beyond/uimport/temp/wavesurfer.js.7.8.5.js
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

// .beyond/uimport/temp/wavesurfer.js.7.8.5.js
var wavesurfer_js_7_8_5_default = u;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3dhdmVzdXJmZXIuanMuNy44LjUuanMiLCIuLi9ub2RlX21vZHVsZXMvd2F2ZXN1cmZlci5qcy9kaXN0L3dhdmVzdXJmZXIuZXNtLmpzIl0sIm5hbWVzIjpbIndhdmVzdXJmZXJfanNfN184XzVfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIndhdmVzdXJmZXJfanNfN184XzVfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ0IiwidDIiLCJlMiIsImkyIiwiczIiLCJQcm9taXNlIiwibjIiLCJyMiIsIm8yIiwidDMiLCJoMiIsIm5leHQiLCJ0NCIsImEyIiwidGhyb3ciLCJlMyIsImRvbmUiLCJ2YWx1ZSIsInRoZW4iLCJhcHBseSIsIlN1cHByZXNzZWRFcnJvciIsImUiLCJjb25zdHJ1Y3RvciIsImxpc3RlbmVycyIsIm9uIiwiU2V0IiwiYWRkIiwib25jZSIsImkzIiwiaSIsInVuIiwiZGVsZXRlIiwidW5BbGwiLCJlbWl0IiwiZm9yRWFjaCIsImRlY29kZSIsIkF1ZGlvQ29udGV4dCIsInNhbXBsZVJhdGUiLCJkZWNvZGVBdWRpb0RhdGEiLCJmaW5hbGx5IiwiY2xvc2UiLCJjcmVhdGVCdWZmZXIiLCJzb21lIiwibGVuZ3RoIiwiTWF0aCIsImFicyIsImU0IiwiZHVyYXRpb24iLCJudW1iZXJPZkNoYW5uZWxzIiwiZ2V0Q2hhbm5lbERhdGEiLCJjb3B5RnJvbUNoYW5uZWwiLCJBdWRpb0J1ZmZlciIsInByb3RvdHlwZSIsImNvcHlUb0NoYW5uZWwiLCJzIiwieG1sbnMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJlbnRyaWVzIiwibjMiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiYXNzaWduIiwic3R5bGUiLCJ0ZXh0Q29udGVudCIsInNldEF0dHJpYnV0ZSIsInRvU3RyaW5nIiwibiIsInIiLCJmcmVlemUiLCJfX3Byb3RvX18iLCJvIiwiZmV0Y2hCbG9iIiwiZmV0Y2giLCJzdGF0dXMiLCJFcnJvciIsInN0YXR1c1RleHQiLCJib2R5IiwiaGVhZGVycyIsInMzIiwiZ2V0UmVhZGVyIiwiTnVtYmVyIiwiZ2V0Iiwicm91bmQiLCJhIiwicmVhZCIsImNsb25lIiwiYmxvYiIsImlzRXh0ZXJuYWxNZWRpYSIsIm1lZGlhIiwibWVkaWFDb250cm9scyIsImNvbnRyb2xzIiwiYXV0b3BsYXkiLCJwbGF5YmFja1JhdGUiLCJvbk1lZGlhRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldFNyYyIsImN1cnJlbnRTcmMiLCJzcmMiLCJyZXZva2VTcmMiLCJzdGFydHNXaXRoIiwiVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiY2FuUGxheVR5cGUiLCJzZXRTcmMiLCJCbG9iIiwidHlwZSIsImNyZWF0ZU9iamVjdFVSTCIsImRlc3Ryb3kiLCJwYXVzZSIsInJlbW92ZSIsImxvYWQiLCJzZXRNZWRpYUVsZW1lbnQiLCJwbGF5IiwiaXNQbGF5aW5nIiwicGF1c2VkIiwiZW5kZWQiLCJzZXRUaW1lIiwiY3VycmVudFRpbWUiLCJnZXREdXJhdGlvbiIsImdldEN1cnJlbnRUaW1lIiwiZ2V0Vm9sdW1lIiwidm9sdW1lIiwic2V0Vm9sdW1lIiwiZ2V0TXV0ZWQiLCJtdXRlZCIsInNldE11dGVkIiwiZ2V0UGxheWJhY2tSYXRlIiwiaXNTZWVraW5nIiwic2Vla2luZyIsInNldFBsYXliYWNrUmF0ZSIsInByZXNlcnZlc1BpdGNoIiwiZ2V0TWVkaWFFbGVtZW50Iiwic2V0U2lua0lkIiwiaCIsInRpbWVvdXRzIiwiaXNTY3JvbGxhYmxlIiwiYXVkaW9EYXRhIiwicmVzaXplT2JzZXJ2ZXIiLCJsYXN0Q29udGFpbmVyV2lkdGgiLCJpc0RyYWdnaW5nIiwic3Vic2NyaXB0aW9ucyIsIm9wdGlvbnMiLCJwYXJlbnRGcm9tT3B0aW9uc0NvbnRhaW5lciIsImNvbnRhaW5lciIsInBhcmVudCIsImluaXRIdG1sIiwic2Nyb2xsQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIndyYXBwZXIiLCJjYW52YXNXcmFwcGVyIiwicHJvZ3Jlc3NXcmFwcGVyIiwiY3Vyc29yIiwiaW5pdEV2ZW50cyIsIkhUTUxFbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJkcmFnVG9TZWVrIiwiaW5pdERyYWciLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsV2lkdGgiLCJjbGllbnRXaWR0aCIsIlJlc2l6ZU9ic2VydmVyIiwiY3JlYXRlRGVsYXkiLCJvbkNvbnRhaW5lclJlc2l6ZSIsImNhdGNoIiwib2JzZXJ2ZSIsInJlUmVuZGVyIiwicHVzaCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwibDIiLCJsMyIsImJ1dHRvbiIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZDIiLCJjMiIsInUyIiwicCIsIkRhdGUiLCJub3ciLCJtIiwicjMiLCJoMyIsImw0IiwibTIiLCJzNCIsIm8zIiwiZyIsImEzIiwiZiIsInJlbGF0ZWRUYXJnZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJ2IiwiYiIsInBhc3NpdmUiLCJjYXB0dXJlIiwic2V0VGltZW91dCIsIm1heCIsIm1pbiIsImdldEhlaWdodCIsImlzTmFOIiwiY2xpZW50SGVpZ2h0IiwiZXZlcnkiLCJvdmVybGF5IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImNzcE5vbmNlIiwicmVwbGFjZSIsImlubmVySFRNTCIsInNwbGl0Q2hhbm5lbHMiLCJzZXRPcHRpb25zIiwiZ2V0V3JhcHBlciIsImdldFdpZHRoIiwiZ2V0U2Nyb2xsIiwic2V0U2Nyb2xsIiwic2V0U2Nyb2xsUGVyY2VudGFnZSIsImRpc2Nvbm5lY3QiLCJ1bnN1YnNjcmliZU9uU2Nyb2xsIiwiY2FsbCIsImNsZWFyVGltZW91dCIsImNvbnZlcnRDb2xvclZhbHVlcyIsIkFycmF5IiwiaXNBcnJheSIsImdldENvbnRleHQiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJnZXRQaXhlbFJhdGlvIiwicmVuZGVyQmFyV2F2ZWZvcm0iLCJjYW52YXMiLCJiYXJXaWR0aCIsImJhckdhcCIsImJhclJhZGl1cyIsImJlZ2luUGF0aCIsImJhckFsaWduIiwiZDMiLCJmaWxsIiwiY2xvc2VQYXRoIiwicmVuZGVyTGluZVdhdmVmb3JtIiwibW92ZVRvIiwibGluZVRvIiwicmVuZGVyV2F2ZWZvcm0iLCJmaWxsU3R5bGUiLCJ3YXZlQ29sb3IiLCJyZW5kZXJGdW5jdGlvbiIsImJhckhlaWdodCIsIm5vcm1hbGl6ZSIsImZyb20iLCJyZWR1Y2UiLCJyZW5kZXJTaW5nbGVDYW52YXMiLCJjbG9uZU5vZGUiLCJkcmF3SW1hZ2UiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJwcm9ncmVzc0NvbG9yIiwiZmlsbFJlY3QiLCJyZW5kZXJNdWx0aUNhbnZhcyIsIk1BWF9DQU5WQVNfV0lEVEgiLCJmbG9vciIsIm1hcCIsImk0Iiwic2xpY2UiLCJjZWlsIiwia2V5cyIsIk1BWF9OT0RFUyIsInJlbmRlckNoYW5uZWwiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIm1hcmdpblRvcCIsIm1pbkhlaWdodCIsInJlbmRlciIsIm1pblB4UGVyU2VjIiwiZmlsbFBhcmVudCIsIm92ZXJmbG93WCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhpZGVTY3JvbGxiYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3JDb2xvciIsImN1cnNvcldpZHRoIiwicmVzb2x2ZSIsInJpZ2h0Iiwiem9vbSIsInNjcm9sbEludG9WaWV3IiwiYXV0b0NlbnRlciIsInJlbmRlclByb2dyZXNzIiwiY2xpcFBhdGgiLCJ0cmFuc2Zvcm0iLCJhdXRvU2Nyb2xsIiwiZXhwb3J0SW1hZ2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9EYXRhVVJMIiwiYWxsIiwidG9CbG9iIiwibCIsImFyZ3VtZW50cyIsInVuc3Vic2NyaWJlIiwic3RhcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdG9wIiwiZCIsImJ1ZmZlck5vZGUiLCJwbGF5U3RhcnRUaW1lIiwicGxheWVkRHVyYXRpb24iLCJfbXV0ZWQiLCJfcGxheWJhY2tSYXRlIiwiX2R1cmF0aW9uIiwiYnVmZmVyIiwiY3Jvc3NPcmlnaW4iLCJhdWRpb0NvbnRleHQiLCJnYWluTm9kZSIsImNyZWF0ZUdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJhcnJheUJ1ZmZlciIsIl9wbGF5IiwiY3JlYXRlQnVmZmVyU291cmNlIiwib25lbmRlZCIsIl9wYXVzZSIsInN0b3BBdCIsImdhaW4iLCJ0ZXN0IiwiZ2V0R2Fpbk5vZGUiLCJjIiwiaW50ZXJhY3QiLCJ1IiwiY3JlYXRlIiwiYmFja2VuZCIsImF1ZGlvUmF0ZSIsInBsdWdpbnMiLCJkZWNvZGVkRGF0YSIsIm1lZGlhU3Vic2NyaXB0aW9ucyIsImFib3J0Q29udHJvbGxlciIsInRpbWVyIiwicmVuZGVyZXIiLCJpbml0UGxheWVyRXZlbnRzIiwiaW5pdFJlbmRlcmVyRXZlbnRzIiwiaW5pdFRpbWVyRXZlbnRzIiwiaW5pdFBsdWdpbnMiLCJ1cmwiLCJwZWFrcyIsInVwZGF0ZVByb2dyZXNzIiwiZXJyb3IiLCJzZWVrVG8iLCJkZWJvdW5jZVRpbWUiLCJyZWdpc3RlclBsdWdpbiIsInVuc3Vic2NyaWJlUGxheWVyRXZlbnRzIiwiX2luaXQiLCJmaWx0ZXIiLCJzZXRTY3JvbGxUaW1lIiwiZ2V0QWN0aXZlUGx1Z2lucyIsImxvYWRBdWRpbyIsImZldGNoUGFyYW1zIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwibG9hZEJsb2IiLCJnZXREZWNvZGVkRGF0YSIsImV4cG9ydFBlYWtzIiwiY2hhbm5lbHMiLCJtYXhMZW5ndGgiLCJwcmVjaXNpb24iLCJ0NSIsInRvZ2dsZUludGVyYWN0aW9uIiwicGxheVBhdXNlIiwic2tpcCIsImVtcHR5IiwiYWJvcnQiLCJCYXNlUGx1Z2luIiwib25Jbml0Iiwid2F2ZXN1cmZlciIsImRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsMkJBQUE7QUFBQUMsUUFBQSxDQUFBRCwyQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTiwyQkFBQTs7O0FDQUEsU0FBU08sRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0VBQUMsT0FBTyxLQUFJRCxFQUFBLEtBQUlBLEVBQUEsR0FBRUUsT0FBQSxHQUFXLFVBQVNDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsU0FBU0MsR0FBRUMsRUFBQSxFQUFFO01BQUMsSUFBRztRQUFDQyxFQUFBLENBQUVOLEVBQUEsQ0FBRU8sSUFBQSxDQUFLRixFQUFDLENBQUM7TUFBQyxTQUFPRyxFQUFBLEVBQU47UUFBU0wsRUFBQSxDQUFFSyxFQUFDO01BQUM7SUFBQztJQUFDLFNBQVNDLEdBQUVKLEVBQUEsRUFBRTtNQUFDLElBQUc7UUFBQ0MsRUFBQSxDQUFFTixFQUFBLENBQUVVLEtBQUEsQ0FBTUwsRUFBQyxDQUFDO01BQUMsU0FBT0csRUFBQSxFQUFOO1FBQVNMLEVBQUEsQ0FBRUssRUFBQztNQUFDO0lBQUM7SUFBQyxTQUFTRixHQUFFRCxFQUFBLEVBQUU7TUFBQyxJQUFJTSxFQUFBO01BQUVOLEVBQUEsQ0FBRU8sSUFBQSxHQUFLVixFQUFBLENBQUVHLEVBQUEsQ0FBRVEsS0FBSyxLQUFHRixFQUFBLEdBQUVOLEVBQUEsQ0FBRVEsS0FBQSxFQUFNRixFQUFBLFlBQWFaLEVBQUEsR0FBRVksRUFBQSxHQUFFLElBQUlaLEVBQUEsQ0FBRyxVQUFTUyxFQUFBLEVBQUU7UUFBQ0EsRUFBQSxDQUFFRyxFQUFDO01BQUMsQ0FBRSxH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