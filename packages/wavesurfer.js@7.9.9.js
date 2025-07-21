System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["wavesurfer.js","7.9.9"]]);
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

// .beyond/uimport/wavesurfer.js.7.9.9.js
var wavesurfer_js_7_9_9_exports = {};
__export(wavesurfer_js_7_9_9_exports, {
  default: () => wavesurfer_js_7_9_9_default
});
module.exports = __toCommonJS(wavesurfer_js_7_9_9_exports);

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
  for (const [t3, n2] of Object.entries(e2)) if ("children" === t3 && n2) for (const [t4, e3] of Object.entries(n2)) e3 instanceof Node ? i2.appendChild(e3) : "string" == typeof e3 ? i2.appendChild(document.createTextNode(e3)) : i2.appendChild(s(t4, e3));else "style" === t3 ? Object.assign(i2.style, n2) : "textContent" === t3 ? i2.textContent = n2 : i2.setAttribute(t3, n2.toString());
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
    if (i2 && this.media.removeAttribute("src"), s2 || t2) try {
      this.media.src = s2;
    } catch (e3) {
      this.media.src = t2;
    }
  }
  destroy() {
    this.isExternalMedia || (this.media.pause(), this.media.remove(), this.revokeSrc(), this.media.removeAttribute("src"), this.media.load());
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
    this.media.currentTime = Math.max(0, Math.min(t2, this.getDuration()));
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
    super(), this.timeouts = [], this.isScrollable = false, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = false, this.subscriptions = [], this.unsubscribeOnScroll = [], this.subscriptions = [], this.options = t2;
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
          f = e3 => {
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
          g = t3 => {
            t3.relatedTarget && t3.relatedTarget !== document.documentElement || f(t3);
          },
          v = t3 => {
            u2 && (t3.stopPropagation(), t3.preventDefault());
          },
          b = t3 => {
            u2 && t3.preventDefault();
          };
        document.addEventListener("pointermove", m), document.addEventListener("pointerup", f), document.addEventListener("pointerout", g), document.addEventListener("pointercancel", g), document.addEventListener("touchmove", b, {
          passive: false
        }), document.addEventListener("click", v, {
          capture: true
        }), h2 = () => {
          document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", f), document.removeEventListener("pointerout", g), document.removeEventListener("pointercancel", g), document.removeEventListener("touchmove", b), setTimeout(() => {
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
    this.subscriptions.forEach(t3 => t3()), this.container.remove(), null === (t2 = this.resizeObserver) || void 0 === t2 || t2.disconnect(), null === (e2 = this.unsubscribeOnScroll) || void 0 === e2 || e2.forEach(t3 => t3()), this.unsubscribeOnScroll = [];
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
      f = p && "roundRect" in i2 ? "roundRect" : "rect";
    i2.beginPath();
    let g = 0,
      v = 0,
      b = 0;
    for (let t3 = 0; t3 <= o2; t3++) {
      const o3 = Math.round(t3 * m);
      if (o3 > g) {
        const t4 = Math.round(v * l2 * s2),
          n3 = t4 + Math.round(b * l2 * s2) || 1;
        let r3 = l2 - t4;
        "top" === e2.barAlign ? r3 = 0 : "bottom" === e2.barAlign && (r3 = h2 - n3), i2[f](g * (c2 + u2), r3, c2, n3, p), g = o3, v = 0, b = 0;
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
    if (0 === d2) return;
    const u2 = i3 => {
        if (i3 < 0 || i3 >= p) return;
        if (c2[i3]) return;
        c2[i3] = true;
        const o3 = i3 * d2;
        let a3 = Math.min(l2 - o3, d2);
        if (e2.barWidth || e2.barGap) {
          const t3 = e2.barWidth || 0.5,
            i4 = t3 + (e2.barGap || t3 / 2);
          a3 = Math.floor(a3 / i4) * i4;
        }
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
      f = Math.floor(m * p);
    if (u2(f - 1), u2(f), u2(f + 1), p > 1) {
      const t3 = this.on("scroll", () => {
        const {
            scrollLeft: t4
          } = this.scrollContainer,
          e3 = Math.floor(t4 / l2 * p);
        Object.keys(c2).length > h.MAX_NODES && (n2.innerHTML = "", r2.innerHTML = "", c2 = {}), u2(e3 - 1), u2(e3), u2(e3 + 1);
      });
      this.unsubscribeOnScroll.push(t3);
    }
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
    if (this.unsubscribeOnScroll.forEach(t3 => t3()), this.unsubscribeOnScroll = [], !this.audioData) return;
    const {
        scrollWidth: t2
      } = this.scrollContainer,
      {
        right: e2
      } = this.progressWrapper.getBoundingClientRect();
    if (this.render(this.audioData), this.isScrollable && t2 !== this.scrollContainer.scrollWidth) {
      const {
        right: t3
      } = this.progressWrapper.getBoundingClientRect();
      let i2 = t3 - e2;
      i2 *= 2, i2 = i2 < 0 ? Math.floor(i2) : Math.ceil(i2), i2 /= 2, this.scrollContainer.scrollLeft += i2;
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
    this.canvasWrapper.style.clipPath = `polygon(${i2}% 0%, 100% 0%, 100% 100%, ${i2}% 100%)`, this.progressWrapper.style.width = `${i2}%`, this.cursor.style.left = `${i2}%`, this.cursor.style.transform = `translateX(-${100 === Math.round(i2) ? this.options.cursorWidth : 0}px)`, this.isScrollable && this.options.autoScroll && this.scrollIntoView(t2, e2);
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
    (e2 >= this.duration || e2 < 0) && (e2 = 0, this.playedDuration = 0), this.bufferNode.start(this.audioContext.currentTime, e2), this.playStartTime = this.audioContext.currentTime, this.bufferNode.onended = () => {
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
    const e2 = t2 - this.currentTime,
      i2 = this.bufferNode;
    null == i2 || i2.stop(this.audioContext.currentTime + e2), null == i2 || i2.addEventListener("ended", () => {
      i2 === this.bufferNode && (this.bufferNode = null, this.pause());
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
    }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, c, t2), this.timer = new l();
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
        this.emit("timeupdate", t2), this.emit("audioprocess", t2), null != this.stopAtPosition && this.isPlaying() && t2 >= this.stopAtPosition && this.pause();
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
      this.emit("pause"), this.timer.stop(), this.stopAtPosition = null;
    }), this.onMediaEvent("emptied", () => {
      this.timer.stop(), this.stopAtPosition = null;
    }), this.onMediaEvent("ended", () => {
      this.emit("timeupdate", this.getDuration()), this.emit("finish"), this.stopAtPosition = null;
    }), this.onMediaEvent("seeking", () => {
      this.emit("seeking", this.getCurrentTime());
    }), this.onMediaEvent("error", () => {
      var t2;
      this.emit("error", null !== (t2 = this.getMediaElement().error) && void 0 !== t2 ? t2 : new Error("Media error")), this.stopAtPosition = null;
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
    this.options = Object.assign({}, this.options, t2), t2.duration && !t2.peaks && (this.decodedData = i.createBuffer(this.exportPeaks(), t2.duration)), t2.peaks && t2.duration && (this.decodedData = i.createBuffer(t2.peaks, t2.duration)), this.renderer.setOptions(this.options), t2.audioRate && this.setPlaybackRate(t2.audioRate), null != t2.mediaControls && (this.getMediaElement().controls = t2.mediaControls);
  }
  registerPlugin(t2) {
    t2._init(this), this.plugins.push(t2);
    const e2 = t2.once("destroy", () => {
      this.plugins = this.plugins.filter(e3 => e3 !== t2), this.subscriptions = this.subscriptions.filter(t3 => t3 !== e2);
    });
    return this.subscriptions.push(e2), t2;
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
      if (this.emit("load", e2), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, !s2 && !n2) {
        const i2 = this.options.fetchParams || {};
        window.AbortController && !i2.signal && (this.abortController = new AbortController(), i2.signal = null === (t2 = this.abortController) || void 0 === t2 ? void 0 : t2.signal);
        const n3 = t3 => this.emit("loading", t3);
        s2 = yield o.fetchBlob(e2, n3, i2);
        const r3 = this.options.blobMimeType;
        r3 && (s2 = new Blob([s2], {
          type: r3
        }));
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
    this.stopAtPosition = null, super.setTime(t2), this.updateProgress(t2), this.emit("timeupdate", t2);
  }
  seekTo(t2) {
    const e2 = this.getDuration() * t2;
    this.setTime(e2);
  }
  play(e2, i2) {
    const s2 = Object.create(null, {
      play: {
        get: () => super.play
      }
    });
    return t(this, void 0, void 0, function* () {
      null != e2 && this.setTime(e2);
      const t2 = yield s2.play.call(this);
      return null != i2 && (this.media instanceof d ? this.media.stopAt(i2) : this.stopAtPosition = i2), t2;
    });
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

// .beyond/uimport/wavesurfer.js.7.9.9.js
var wavesurfer_js_7_9_9_default = u;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC93YXZlc3VyZmVyLmpzLjcuOS45LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dhdmVzdXJmZXIuanMvZGlzdC93YXZlc3VyZmVyLmVzbS5qcyJdLCJuYW1lcyI6WyJ3YXZlc3VyZmVyX2pzXzdfOV85X2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJ3YXZlc3VyZmVyX2pzXzdfOV85X2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwidCIsInQyIiwiZTIiLCJpMiIsInMyIiwiUHJvbWlzZSIsIm4yIiwicjIiLCJvMiIsInQzIiwiaDIiLCJuZXh0IiwidDQiLCJhMiIsInRocm93IiwiZTMiLCJkb25lIiwidmFsdWUiLCJ0aGVuIiwiYXBwbHkiLCJTdXBwcmVzc2VkRXJyb3IiLCJlIiwiY29uc3RydWN0b3IiLCJsaXN0ZW5lcnMiLCJvbiIsIlNldCIsImFkZCIsIm9uY2UiLCJpMyIsImkiLCJ1biIsImRlbGV0ZSIsInVuQWxsIiwiZW1pdCIsImZvckVhY2giLCJkZWNvZGUiLCJBdWRpb0NvbnRleHQiLCJzYW1wbGVSYXRlIiwiZGVjb2RlQXVkaW9EYXRhIiwiZmluYWxseSIsImNsb3NlIiwiY3JlYXRlQnVmZmVyIiwic29tZSIsImxlbmd0aCIsIk1hdGgiLCJhYnMiLCJlNCIsImR1cmF0aW9uIiwibnVtYmVyT2ZDaGFubmVscyIsImdldENoYW5uZWxEYXRhIiwiY29weUZyb21DaGFubmVsIiwiQXVkaW9CdWZmZXIiLCJwcm90b3R5cGUiLCJjb3B5VG9DaGFubmVsIiwicyIsInhtbG5zIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiZW50cmllcyIsIk5vZGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiYXNzaWduIiwic3R5bGUiLCJ0ZXh0Q29udGVudCIsInNldEF0dHJpYnV0ZSIsInRvU3RyaW5nIiwibiIsInIiLCJmcmVlemUiLCJfX3Byb3RvX18iLCJvIiwiZmV0Y2hCbG9iIiwiZmV0Y2giLCJzdGF0dXMiLCJFcnJvciIsInN0YXR1c1RleHQiLCJib2R5IiwiaGVhZGVycyIsInMzIiwiZ2V0UmVhZGVyIiwibjMiLCJOdW1iZXIiLCJnZXQiLCJyb3VuZCIsImEiLCJyZWFkIiwiY2xvbmUiLCJibG9iIiwiaXNFeHRlcm5hbE1lZGlhIiwibWVkaWEiLCJtZWRpYUNvbnRyb2xzIiwiY29udHJvbHMiLCJhdXRvcGxheSIsInBsYXliYWNrUmF0ZSIsIm9uTWVkaWFFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0U3JjIiwiY3VycmVudFNyYyIsInNyYyIsInJldm9rZVNyYyIsInN0YXJ0c1dpdGgiLCJVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJjYW5QbGF5VHlwZSIsInNldFNyYyIsIkJsb2IiLCJ0eXBlIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVtb3ZlQXR0cmlidXRlIiwiZGVzdHJveSIsInBhdXNlIiwicmVtb3ZlIiwibG9hZCIsInNldE1lZGlhRWxlbWVudCIsInBsYXkiLCJpc1BsYXlpbmciLCJwYXVzZWQiLCJlbmRlZCIsInNldFRpbWUiLCJjdXJyZW50VGltZSIsIm1heCIsIm1pbiIsImdldER1cmF0aW9uIiwiZ2V0Q3VycmVudFRpbWUiLCJnZXRWb2x1bWUiLCJ2b2x1bWUiLCJzZXRWb2x1bWUiLCJnZXRNdXRlZCIsIm11dGVkIiwic2V0TXV0ZWQiLCJnZXRQbGF5YmFja1JhdGUiLCJpc1NlZWtpbmciLCJzZWVraW5nIiwic2V0UGxheWJhY2tSYXRlIiwicHJlc2VydmVzUGl0Y2giLCJnZXRNZWRpYUVsZW1lbnQiLCJzZXRTaW5rSWQiLCJoIiwidGltZW91dHMiLCJpc1Njcm9sbGFibGUiLCJhdWRpb0RhdGEiLCJyZXNpemVPYnNlcnZlciIsImxhc3RDb250YWluZXJXaWR0aCIsImlzRHJhZ2dpbmciLCJzdWJzY3JpcHRpb25zIiwidW5zdWJzY3JpYmVPblNjcm9sbCIsIm9wdGlvbnMiLCJwYXJlbnRGcm9tT3B0aW9uc0NvbnRhaW5lciIsImNvbnRhaW5lciIsInBhcmVudCIsImluaXRIdG1sIiwic2Nyb2xsQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIndyYXBwZXIiLCJjYW52YXNXcmFwcGVyIiwicHJvZ3Jlc3NXcmFwcGVyIiwiY3Vyc29yIiwiaW5pdEV2ZW50cyIsIkhUTUxFbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJkcmFnVG9TZWVrIiwiaW5pdERyYWciLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsV2lkdGgiLCJjbGllbnRXaWR0aCIsIlJlc2l6ZU9ic2VydmVyIiwiY3JlYXRlRGVsYXkiLCJvbkNvbnRhaW5lclJlc2l6ZSIsImNhdGNoIiwib2JzZXJ2ZSIsInJlUmVuZGVyIiwicHVzaCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwibDIiLCJsMyIsImJ1dHRvbiIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZDIiLCJjMiIsInUyIiwicCIsIkRhdGUiLCJub3ciLCJtIiwicjMiLCJoMyIsImw0IiwibTIiLCJzNCIsIm8zIiwiZiIsImEzIiwiZyIsInJlbGF0ZWRUYXJnZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJ2IiwiYiIsInBhc3NpdmUiLCJjYXB0dXJlIiwic2V0VGltZW91dCIsImdldEhlaWdodCIsImlzTmFOIiwiY2xpZW50SGVpZ2h0IiwiZXZlcnkiLCJvdmVybGF5IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImNzcE5vbmNlIiwicmVwbGFjZSIsImlubmVySFRNTCIsInNwbGl0Q2hhbm5lbHMiLCJzZXRPcHRpb25zIiwiZ2V0V3JhcHBlciIsImdldFdpZHRoIiwiZ2V0U2Nyb2xsIiwic2V0U2Nyb2xsIiwic2V0U2Nyb2xsUGVyY2VudGFnZSIsImRpc2Nvbm5lY3QiLCJjbGVhclRpbWVvdXQiLCJjb252ZXJ0Q29sb3JWYWx1ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJnZXRDb250ZXh0Iiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZ2V0UGl4ZWxSYXRpbyIsInJlbmRlckJhcldhdmVmb3JtIiwiY2FudmFzIiwiYmFyV2lkdGgiLCJiYXJHYXAiLCJiYXJSYWRpdXMiLCJiZWdpblBhdGgiLCJiYXJBbGlnbiIsImQzIiwiZmlsbCIsImNsb3NlUGF0aCIsInJlbmRlckxpbmVXYXZlZm9ybSIsIm1vdmVUbyIsImxpbmVUbyIsInJlbmRlcldhdmVmb3JtIiwiZmlsbFN0eWxlIiwid2F2ZUNvbG9yIiwicmVuZGVyRnVuY3Rpb24iLCJiYXJIZWlnaHQiLCJub3JtYWxpemUiLCJmcm9tIiwicmVkdWNlIiwicmVuZGVyU2luZ2xlQ2FudmFzIiwiY2xvbmVOb2RlIiwiZHJhd0ltYWdlIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwicHJvZ3Jlc3NDb2xvciIsImZpbGxSZWN0IiwicmVuZGVyTXVsdGlDYW52YXMiLCJNQVhfQ0FOVkFTX1dJRFRIIiwiZmxvb3IiLCJpNCIsIm1hcCIsInNsaWNlIiwiY2VpbCIsImtleXMiLCJNQVhfTk9ERVMiLCJyZW5kZXJDaGFubmVsIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwibWFyZ2luVG9wIiwibWluSGVpZ2h0IiwicmVuZGVyIiwibWluUHhQZXJTZWMiLCJmaWxsUGFyZW50Iiwib3ZlcmZsb3dYIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiaGlkZVNjcm9sbGJhciIsImJhY2tncm91bmRDb2xvciIsImN1cnNvckNvbG9yIiwiY3Vyc29yV2lkdGgiLCJyZXNvbHZlIiwicmlnaHQiLCJ6b29tIiwic2Nyb2xsSW50b1ZpZXciLCJhdXRvQ2VudGVyIiwicmVuZGVyUHJvZ3Jlc3MiLCJjbGlwUGF0aCIsInRyYW5zZm9ybSIsImF1dG9TY3JvbGwiLCJleHBvcnRJbWFnZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b0RhdGFVUkwiLCJhbGwiLCJ0b0Jsb2IiLCJsIiwiYXJndW1lbnRzIiwidW5zdWJzY3JpYmUiLCJzdGFydCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0b3AiLCJkIiwiYnVmZmVyTm9kZSIsInBsYXlTdGFydFRpbWUiLCJwbGF5ZWREdXJhdGlvbiIsIl9tdXRlZCIsIl9wbGF5YmFja1JhdGUiLCJfZHVyYXRpb24iLCJidWZmZXIiLCJjcm9zc09yaWdpbiIsImF1ZGlvQ29udGV4dCIsImdhaW5Ob2RlIiwiY3JlYXRlR2FpbiIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImFycmF5QnVmZmVyIiwiX3BsYXkiLCJjcmVhdGVCdWZmZXJTb3VyY2UiLCJvbmVuZGVkIiwiX3BhdXNlIiwic3RvcEF0IiwiZ2FpbiIsInRlc3QiLCJnZXRHYWluTm9kZSIsImMiLCJpbnRlcmFjdCIsInUiLCJjcmVhdGUiLCJiYWNrZW5kIiwiYXVkaW9SYXRlIiwicGx1Z2lucyIsImRlY29kZWREYXRhIiwic3RvcEF0UG9zaXRpb24iLCJtZWRpYVN1YnNjcmlwdGlvbnMiLCJhYm9ydENvbnRyb2xsZXIiLCJ0aW1lciIsInJlbmRlcmVyIiwiaW5pdFBsYXllckV2ZW50cyIsImluaXRSZW5kZXJlckV2ZW50cyIsImluaXRUaW1lckV2ZW50cyIsImluaXRQbHVnaW5zIiwidXJsIiwicGVha3MiLCJ1cGRhdGVQcm9ncmVzcyIsImVycm9yIiwic2Vla1RvIiwiZGVib3VuY2VUaW1lIiwicmVnaXN0ZXJQbHVnaW4iLCJ1bnN1YnNjcmliZVBsYXllckV2ZW50cyIsImV4cG9ydFBlYWtzIiwiX2luaXQiLCJmaWx0ZXIiLCJzZXRTY3JvbGxUaW1lIiwiZ2V0QWN0aXZlUGx1Z2lucyIsImxvYWRBdWRpbyIsImZldGNoUGFyYW1zIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwiYmxvYk1pbWVUeXBlIiwibG9hZEJsb2IiLCJnZXREZWNvZGVkRGF0YSIsImNoYW5uZWxzIiwibWF4TGVuZ3RoIiwicHJlY2lzaW9uIiwidDUiLCJ0b2dnbGVJbnRlcmFjdGlvbiIsInBsYXlQYXVzZSIsInNraXAiLCJlbXB0eSIsImFib3J0IiwiQmFzZVBsdWdpbiIsIm9uSW5pdCIsIndhdmVzdXJmZXIiLCJkb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDJCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsMkJBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sMkJBQUE7OztBQ0FBLFNBQVNPLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtFQUFDLE9BQU8sS0FBSUQsRUFBQSxLQUFJQSxFQUFBLEdBQUVFLE9BQUEsR0FBVyxVQUFTQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLFNBQVNDLEdBQUVDLEVBQUEsRUFBRTtNQUFDLElBQUc7UUFBQ0MsRUFBQSxDQUFFTixFQUFBLENBQUVPLElBQUEsQ0FBS0YsRUFBQyxDQUFDO01BQUMsU0FBT0csRUFBQSxFQUFOO1FBQVNMLEVBQUEsQ0FBRUssRUFBQztNQUFDO0lBQUM7SUFBQyxTQUFTQyxHQUFFSixFQUFBLEVBQUU7TUFBQyxJQUFHO1FBQUNDLEVBQUEsQ0FBRU4sRUFBQSxDQUFFVSxLQUFBLENBQU1MLEVBQUMsQ0FBQztNQUFDLFNBQU9HLEVBQUEsRUFBTjtRQUFTTCxFQUFBLENBQUVLLEVBQUM7TUFBQztJQUFDO0lBQUMsU0FBU0YsR0FBRUQsRUFBQSxFQUFFO01BQUMsSUFBSU0sRUFBQTtNQUFFTixFQUFBLENBQUVPLElBQUEsR0FBS1YsRUFBQSxDQUFFRyxFQUFBLENBQUVRLEtBQUssS0FBR0YsRUFBQSxHQUFFTixFQUFBLENBQUVRLEtBQUEsRUFBTUYsRUFBQSxZQUFhWixFQUFBLEdBQUVZLEVBQUEsR0FBRSxJQUFJWixFQUFBLENBQUcsVUFBU1MsRUFBQSxFQUFFO1FBQUNBLEVBQUEsQ0FBRUcsRUFBQztNQUFDLENBQUUsR0FBR0csSUFBQSxDQUFLVixFQUFBLEVBQUVLLEVBQUM7SUFBQztJQUFDSCxFQUFBLEVBQUdOLEVBQUEsR0FBRUEsRUFBQSxDQUFFZSxLQUFBLENBQU1sQixFQUFBLEVBQUVDLEVBQUEsSUFBRyxFQUFFLEdBQUdTLElBQUEsQ0FBSyxDQUFDO0VBQUMsQ0FBRTtBQUFDO0FBQUMsY0FBWSxPQUFPUyxlQUFBLElBQWlCQSxlQUFBO0FBQWdCLElBQU1DLENBQUEsR0FBTixNQUFPO0VBQUNDLFlBQUEsRUFBYTtJQUFDLEtBQUtDLFNBQUEsR0FBVSxDQUFDO0VBQUM7RUFBQ0MsR0FBR3ZCLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxJQUFHLEtBQUtvQixTQUFBLENBQVV0QixFQUFBLE1BQUssS0FBS3NCLFNBQUEsQ0FBVXRCLEVBQUEsSUFBRyxtQkFBSXdCLEdBQUEsS0FBSyxLQUFLRixTQUFBLENBQVV0QixFQUFBLEVBQUd5QixHQUFBLENBQUl4QixFQUFDLEdBQUUsUUFBTUMsRUFBQSxHQUFFLFNBQU9BLEVBQUEsQ0FBRXdCLElBQUEsRUFBSztNQUFDLE1BQU1DLEVBQUEsR0FBRUMsQ0FBQSxLQUFJO1FBQUMsS0FBS0MsRUFBQSxDQUFHN0IsRUFBQSxFQUFFMkIsRUFBQyxHQUFFLEtBQUtFLEVBQUEsQ0FBRzdCLEVBQUEsRUFBRUMsRUFBQztNQUFDO01BQUUsT0FBTyxLQUFLc0IsRUFBQSxDQUFHdkIsRUFBQSxFQUFFMkIsRUFBQyxHQUFFQSxFQUFBO0lBQUM7SUFBQyxPQUFNLE1BQUksS0FBS0UsRUFBQSxDQUFHN0IsRUFBQSxFQUFFQyxFQUFDO0VBQUM7RUFBQzRCLEdBQUc3QixFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLElBQUlDLEVBQUE7SUFBRSxVQUFRQSxFQUFBLEdBQUUsS0FBS29CLFNBQUEsQ0FBVXRCLEVBQUEsTUFBSyxXQUFTRSxFQUFBLElBQUdBLEVBQUEsQ0FBRTRCLE1BQUEsQ0FBTzdCLEVBQUM7RUFBQztFQUFDeUIsS0FBSzFCLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsT0FBTyxLQUFLc0IsRUFBQSxDQUFHdkIsRUFBQSxFQUFFQyxFQUFBLEVBQUU7TUFBQ3lCLElBQUEsRUFBSztJQUFFLENBQUM7RUFBQztFQUFDSyxNQUFBLEVBQU87SUFBQyxLQUFLVCxTQUFBLEdBQVUsQ0FBQztFQUFDO0VBQUNVLEtBQUtoQyxFQUFBLEtBQUtDLEVBQUEsRUFBRTtJQUFDLEtBQUtxQixTQUFBLENBQVV0QixFQUFBLEtBQUksS0FBS3NCLFNBQUEsQ0FBVXRCLEVBQUEsRUFBR2lDLE9BQUEsQ0FBU3pCLEVBQUEsSUFBR0EsRUFBQSxDQUFFLEdBQUdQLEVBQUMsQ0FBRTtFQUFDO0FBQUM7QUFBQyxJQUFNMkIsQ0FBQSxHQUFFO0VBQUNNLE1BQUEsRUFBTyxTQUFBQSxDQUFTakMsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxPQUFPSCxDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztNQUFDLE1BQU1DLEVBQUEsR0FBRSxJQUFJbUMsWUFBQSxDQUFhO1FBQUNDLFVBQUEsRUFBV2xDO01BQUMsQ0FBQztNQUFFLE9BQU9GLEVBQUEsQ0FBRXFDLGVBQUEsQ0FBZ0JwQyxFQUFDLEVBQUVxQyxPQUFBLENBQVMsTUFBSXRDLEVBQUEsQ0FBRXVDLEtBQUEsQ0FBTSxDQUFFO0lBQUMsQ0FBRTtFQUFDO0VBQUVDLFlBQUEsRUFBYSxTQUFBQSxDQUFTeEMsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxPQUFNLFlBQVUsT0FBT0QsRUFBQSxDQUFFLE9BQUtBLEVBQUEsR0FBRSxDQUFDQSxFQUFDLElBQUcsVUFBU1EsRUFBQSxFQUFFO01BQUMsTUFBTU0sRUFBQSxHQUFFTixFQUFBLENBQUU7TUFBRyxJQUFHTSxFQUFBLENBQUUyQixJQUFBLENBQU05QixFQUFBLElBQUdBLEVBQUEsR0FBRSxLQUFHQSxFQUFBLEdBQUUsRUFBRyxHQUFFO1FBQUMsTUFBTVQsRUFBQSxHQUFFWSxFQUFBLENBQUU0QixNQUFBO1FBQU8sSUFBSXZDLEVBQUEsR0FBRTtRQUFFLFNBQVFRLEVBQUEsR0FBRSxHQUFFQSxFQUFBLEdBQUVULEVBQUEsRUFBRVMsRUFBQSxJQUFJO1VBQUMsTUFBTWdCLEVBQUEsR0FBRWdCLElBQUEsQ0FBS0MsR0FBQSxDQUFJOUIsRUFBQSxDQUFFSCxFQUFBLENBQUU7VUFBRWdCLEVBQUEsR0FBRXhCLEVBQUEsS0FBSUEsRUFBQSxHQUFFd0IsRUFBQTtRQUFFO1FBQUMsV0FBVWtCLEVBQUEsSUFBS3JDLEVBQUEsRUFBRSxTQUFRRyxFQUFBLEdBQUUsR0FBRUEsRUFBQSxHQUFFVCxFQUFBLEVBQUVTLEVBQUEsSUFBSWtDLEVBQUEsQ0FBRWxDLEVBQUEsS0FBSVIsRUFBQTtNQUFDO0lBQUMsRUFBRUgsRUFBQyxHQUFFO01BQUM4QyxRQUFBLEVBQVM3QyxFQUFBO01BQUV5QyxNQUFBLEVBQU8xQyxFQUFBLENBQUUsR0FBRzBDLE1BQUE7TUFBT04sVUFBQSxFQUFXcEMsRUFBQSxDQUFFLEdBQUcwQyxNQUFBLEdBQU96QyxFQUFBO01BQUU4QyxnQkFBQSxFQUFpQi9DLEVBQUEsQ0FBRTBDLE1BQUE7TUFBT00sY0FBQSxFQUFlbEMsRUFBQSxJQUFHLFFBQU1kLEVBQUEsR0FBRSxTQUFPQSxFQUFBLENBQUVjLEVBQUE7TUFBR21DLGVBQUEsRUFBZ0JDLFdBQUEsQ0FBWUMsU0FBQSxDQUFVRixlQUFBO01BQWdCRyxhQUFBLEVBQWNGLFdBQUEsQ0FBWUMsU0FBQSxDQUFVQztJQUFhO0VBQUM7QUFBQztBQUFFLFNBQVNDLEVBQUVyRCxFQUFBLEVBQUVDLEVBQUEsRUFBRTtFQUFDLE1BQU1DLEVBQUEsR0FBRUQsRUFBQSxDQUFFcUQsS0FBQSxHQUFNQyxRQUFBLENBQVNDLGVBQUEsQ0FBZ0J2RCxFQUFBLENBQUVxRCxLQUFBLEVBQU10RCxFQUFDLElBQUV1RCxRQUFBLENBQVNFLGFBQUEsQ0FBY3pELEVBQUM7RUFBRSxXQUFTLENBQUNRLEVBQUEsRUFBRUgsRUFBQyxLQUFJcUQsTUFBQSxDQUFPQyxPQUFBLENBQVExRCxFQUFDLEdBQUUsSUFBRyxlQUFhTyxFQUFBLElBQUdILEVBQUEsRUFBRSxXQUFTLENBQUNNLEVBQUEsRUFBRUcsRUFBQyxLQUFJNEMsTUFBQSxDQUFPQyxPQUFBLENBQVF0RCxFQUFDLEdBQUVTLEVBQUEsWUFBYThDLElBQUEsR0FBSzFELEVBQUEsQ0FBRTJELFdBQUEsQ0FBWS9DLEVBQUMsSUFBRSxZQUFVLE9BQU9BLEVBQUEsR0FBRVosRUFBQSxDQUFFMkQsV0FBQSxDQUFZTixRQUFBLENBQVNPLGNBQUEsQ0FBZWhELEVBQUMsQ0FBQyxJQUFFWixFQUFBLENBQUUyRCxXQUFBLENBQVlSLENBQUEsQ0FBRTFDLEVBQUEsRUFBRUcsRUFBQyxDQUFDLE9BQU0sWUFBVU4sRUFBQSxHQUFFa0QsTUFBQSxDQUFPSyxNQUFBLENBQU83RCxFQUFBLENBQUU4RCxLQUFBLEVBQU0zRCxFQUFDLElBQUUsa0JBQWdCRyxFQUFBLEdBQUVOLEVBQUEsQ0FBRStELFdBQUEsR0FBWTVELEVBQUEsR0FBRUgsRUFBQSxDQUFFZ0UsWUFBQSxDQUFhMUQsRUFBQSxFQUFFSCxFQUFBLENBQUU4RCxRQUFBLENBQVMsQ0FBQztFQUFFLE9BQU9qRSxFQUFBO0FBQUM7QUFBQyxTQUFTa0UsRUFBRXBFLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUU7RUFBQyxNQUFNRyxFQUFBLEdBQUVnRCxDQUFBLENBQUVyRCxFQUFBLEVBQUVDLEVBQUEsSUFBRyxDQUFDLENBQUM7RUFBRSxPQUFPLFFBQU1DLEVBQUEsSUFBR0EsRUFBQSxDQUFFMkQsV0FBQSxDQUFZeEQsRUFBQyxHQUFFQSxFQUFBO0FBQUM7QUFBQyxJQUFJZ0UsQ0FBQSxHQUFFWCxNQUFBLENBQU9ZLE1BQUEsQ0FBTztFQUFDQyxTQUFBLEVBQVU7RUFBS2QsYUFBQSxFQUFjVyxDQUFBO0VBQUUxRSxPQUFBLEVBQVEwRTtBQUFDLENBQUM7QUFBRSxJQUFNSSxDQUFBLEdBQUU7RUFBQ0MsU0FBQSxFQUFVLFNBQUFBLENBQVN4RSxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsT0FBT0osQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxNQUFNTSxFQUFBLEdBQUUsTUFBTXFFLEtBQUEsQ0FBTXpFLEVBQUEsRUFBRUUsRUFBQztNQUFFLElBQUdFLEVBQUEsQ0FBRXNFLE1BQUEsSUFBUSxLQUFJLE1BQU0sSUFBSUMsS0FBQSxDQUFNLG1CQUFtQjNFLEVBQUEsS0FBTUksRUFBQSxDQUFFc0UsTUFBQSxLQUFXdEUsRUFBQSxDQUFFd0UsVUFBQSxHQUFhO01BQUUsT0FBTyxVQUFTL0QsRUFBQSxFQUFFYSxFQUFBLEVBQUU7UUFBQzVCLENBQUEsQ0FBRSxNQUFLLFFBQU8sUUFBUSxhQUFXO1VBQUMsSUFBRyxDQUFDZSxFQUFBLENBQUVnRSxJQUFBLElBQU0sQ0FBQ2hFLEVBQUEsQ0FBRWlFLE9BQUEsRUFBUTtVQUFPLE1BQU1DLEVBQUEsR0FBRWxFLEVBQUEsQ0FBRWdFLElBQUEsQ0FBS0csU0FBQSxDQUFVO1lBQUVDLEVBQUEsR0FBRUMsTUFBQSxDQUFPckUsRUFBQSxDQUFFaUUsT0FBQSxDQUFRSyxHQUFBLENBQUksZ0JBQWdCLENBQUMsS0FBRztVQUFFLElBQUk5RSxFQUFBLEdBQUU7VUFBRSxNQUFNQyxFQUFBLEdBQUVzQyxFQUFBLElBQUc5QyxDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztjQUFDTyxFQUFBLEtBQUksUUFBTXVDLEVBQUEsR0FBRSxTQUFPQSxFQUFBLENBQUVILE1BQUEsS0FBUztjQUFFLE1BQU0xQyxFQUFBLEdBQUUyQyxJQUFBLENBQUswQyxLQUFBLENBQU0vRSxFQUFBLEdBQUU0RSxFQUFBLEdBQUUsR0FBRztjQUFFdkQsRUFBQSxDQUFFM0IsRUFBQztZQUFDLENBQUU7WUFBRVksRUFBQSxHQUFFMEUsQ0FBQSxLQUFJdkYsQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7Y0FBQyxJQUFJQyxFQUFBO2NBQUUsSUFBRztnQkFBQ0EsRUFBQSxHQUFFLE1BQU1nRixFQUFBLENBQUVPLElBQUEsQ0FBSztjQUFDLFNBQU8vRSxFQUFBLEVBQU47Z0JBQVM7Y0FBTTtjQUFDUixFQUFBLENBQUVlLElBQUEsS0FBT1IsRUFBQSxDQUFFUCxFQUFBLENBQUVnQixLQUFLLEdBQUUsTUFBTUosRUFBQSxDQUFFO1lBQUUsQ0FBRTtVQUFFQSxFQUFBLENBQUU7UUFBQyxDQUFFO01BQUMsRUFBRVAsRUFBQSxDQUFFbUYsS0FBQSxDQUFNLEdBQUV0RixFQUFDLEdBQUVHLEVBQUEsQ0FBRW9GLElBQUEsQ0FBSztJQUFDLENBQUU7RUFBQztBQUFDO0FBQUUsSUFBTUgsQ0FBQSxHQUFOLGNBQWdCbEUsQ0FBQSxDQUFDO0VBQUNDLFlBQVlyQixFQUFBLEVBQUU7SUFBQyxNQUFNLEdBQUUsS0FBSzBGLGVBQUEsR0FBZ0IsT0FBRzFGLEVBQUEsQ0FBRTJGLEtBQUEsSUFBTyxLQUFLQSxLQUFBLEdBQU0zRixFQUFBLENBQUUyRixLQUFBLEVBQU0sS0FBS0QsZUFBQSxHQUFnQixRQUFJLEtBQUtDLEtBQUEsR0FBTXBDLFFBQUEsQ0FBU0UsYUFBQSxDQUFjLE9BQU8sR0FBRXpELEVBQUEsQ0FBRTRGLGFBQUEsS0FBZ0IsS0FBS0QsS0FBQSxDQUFNRSxRQUFBLEdBQVMsT0FBSTdGLEVBQUEsQ0FBRThGLFFBQUEsS0FBVyxLQUFLSCxLQUFBLENBQU1HLFFBQUEsR0FBUyxPQUFJLFFBQU05RixFQUFBLENBQUUrRixZQUFBLElBQWMsS0FBS0MsWUFBQSxDQUFhLFdBQVcsTUFBSTtNQUFDLFFBQU1oRyxFQUFBLENBQUUrRixZQUFBLEtBQWUsS0FBS0osS0FBQSxDQUFNSSxZQUFBLEdBQWEvRixFQUFBLENBQUUrRixZQUFBO0lBQWEsR0FBRztNQUFDckUsSUFBQSxFQUFLO0lBQUUsQ0FBQztFQUFDO0VBQUNzRSxhQUFhaEcsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLE9BQU8sS0FBS3lGLEtBQUEsQ0FBTU0sZ0JBQUEsQ0FBaUJqRyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQyxHQUFFLE1BQUksS0FBS3lGLEtBQUEsQ0FBTU8sbUJBQUEsQ0FBb0JsRyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQztFQUFDO0VBQUNpRyxPQUFBLEVBQVE7SUFBQyxPQUFPLEtBQUtSLEtBQUEsQ0FBTVMsVUFBQSxJQUFZLEtBQUtULEtBQUEsQ0FBTVUsR0FBQSxJQUFLO0VBQUU7RUFBQ0MsVUFBQSxFQUFXO0lBQUMsTUFBTXRHLEVBQUEsR0FBRSxLQUFLbUcsTUFBQSxDQUFPO0lBQUVuRyxFQUFBLENBQUV1RyxVQUFBLENBQVcsT0FBTyxLQUFHQyxHQUFBLENBQUlDLGVBQUEsQ0FBZ0J6RyxFQUFDO0VBQUM7RUFBQzBHLFlBQVkxRyxFQUFBLEVBQUU7SUFBQyxPQUFNLE9BQUssS0FBSzJGLEtBQUEsQ0FBTWUsV0FBQSxDQUFZMUcsRUFBQztFQUFDO0VBQUMyRyxPQUFPM0csRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxNQUFNQyxFQUFBLEdBQUUsS0FBS2lHLE1BQUEsQ0FBTztJQUFFLElBQUduRyxFQUFBLElBQUdFLEVBQUEsS0FBSUYsRUFBQSxFQUFFO0lBQU8sS0FBS3NHLFNBQUEsQ0FBVTtJQUFFLE1BQU1uRyxFQUFBLEdBQUVGLEVBQUEsWUFBYTJHLElBQUEsS0FBTyxLQUFLRixXQUFBLENBQVl6RyxFQUFBLENBQUU0RyxJQUFJLEtBQUcsQ0FBQzdHLEVBQUEsSUFBR3dHLEdBQUEsQ0FBSU0sZUFBQSxDQUFnQjdHLEVBQUMsSUFBRUQsRUFBQTtJQUFFLElBQUdFLEVBQUEsSUFBRyxLQUFLeUYsS0FBQSxDQUFNb0IsZUFBQSxDQUFnQixLQUFLLEdBQUU1RyxFQUFBLElBQUdILEVBQUEsRUFBRSxJQUFHO01BQUMsS0FBSzJGLEtBQUEsQ0FBTVUsR0FBQSxHQUFJbEcsRUFBQTtJQUFDLFNBQU9XLEVBQUEsRUFBTjtNQUFTLEtBQUs2RSxLQUFBLENBQU1VLEdBQUEsR0FBSXJHLEVBQUE7SUFBQztFQUFDO0VBQUNnSCxRQUFBLEVBQVM7SUFBQyxLQUFLdEIsZUFBQSxLQUFrQixLQUFLQyxLQUFBLENBQU1zQixLQUFBLENBQU0sR0FBRSxLQUFLdEIsS0FBQSxDQUFNdUIsTUFBQSxDQUFPLEdBQUUsS0FBS1osU0FBQSxDQUFVLEdBQUUsS0FBS1gsS0FBQSxDQUFNb0IsZUFBQSxDQUFnQixLQUFLLEdBQUUsS0FBS3BCLEtBQUEsQ0FBTXdCLElBQUEsQ0FBSztFQUFFO0VBQUNDLGdCQUFnQnBILEVBQUEsRUFBRTtJQUFDLEtBQUsyRixLQUFBLEdBQU0zRixFQUFBO0VBQUM7RUFBQ3FILEtBQUEsRUFBTTtJQUFDLE9BQU90SCxDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztNQUFDLE9BQU8sS0FBSzRGLEtBQUEsQ0FBTTBCLElBQUEsQ0FBSztJQUFDLENBQUU7RUFBQztFQUFDSixNQUFBLEVBQU87SUFBQyxLQUFLdEIsS0FBQSxDQUFNc0IsS0FBQSxDQUFNO0VBQUM7RUFBQ0ssVUFBQSxFQUFXO0lBQUMsT0FBTSxDQUFDLEtBQUszQixLQUFBLENBQU00QixNQUFBLElBQVEsQ0FBQyxLQUFLNUIsS0FBQSxDQUFNNkIsS0FBQTtFQUFLO0VBQUNDLFFBQVF6SCxFQUFBLEVBQUU7SUFBQyxLQUFLMkYsS0FBQSxDQUFNK0IsV0FBQSxHQUFZL0UsSUFBQSxDQUFLZ0YsR0FBQSxDQUFJLEdBQUVoRixJQUFBLENBQUtpRixHQUFBLENBQUk1SCxFQUFBLEVBQUUsS0FBSzZILFdBQUEsQ0FBWSxDQUFDLENBQUM7RUFBQztFQUFDQSxZQUFBLEVBQWE7SUFBQyxPQUFPLEtBQUtsQyxLQUFBLENBQU03QyxRQUFBO0VBQVE7RUFBQ2dGLGVBQUEsRUFBZ0I7SUFBQyxPQUFPLEtBQUtuQyxLQUFBLENBQU0rQixXQUFBO0VBQVc7RUFBQ0ssVUFBQSxFQUFXO0lBQUMsT0FBTyxLQUFLcEMsS0FBQSxDQUFNcUMsTUFBQTtFQUFNO0VBQUNDLFVBQVVqSSxFQUFBLEVBQUU7SUFBQyxLQUFLMkYsS0FBQSxDQUFNcUMsTUFBQSxHQUFPaEksRUFBQTtFQUFDO0VBQUNrSSxTQUFBLEVBQVU7SUFBQyxPQUFPLEtBQUt2QyxLQUFBLENBQU13QyxLQUFBO0VBQUs7RUFBQ0MsU0FBU3BJLEVBQUEsRUFBRTtJQUFDLEtBQUsyRixLQUFBLENBQU13QyxLQUFBLEdBQU1uSSxFQUFBO0VBQUM7RUFBQ3FJLGdCQUFBLEVBQWlCO0lBQUMsT0FBTyxLQUFLMUMsS0FBQSxDQUFNSSxZQUFBO0VBQVk7RUFBQ3VDLFVBQUEsRUFBVztJQUFDLE9BQU8sS0FBSzNDLEtBQUEsQ0FBTTRDLE9BQUE7RUFBTztFQUFDQyxnQkFBZ0J4SSxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLFFBQU1BLEVBQUEsS0FBSSxLQUFLMEYsS0FBQSxDQUFNOEMsY0FBQSxHQUFleEksRUFBQSxHQUFHLEtBQUswRixLQUFBLENBQU1JLFlBQUEsR0FBYS9GLEVBQUE7RUFBQztFQUFDMEksZ0JBQUEsRUFBaUI7SUFBQyxPQUFPLEtBQUsvQyxLQUFBO0VBQUs7RUFBQ2dELFVBQVUzSSxFQUFBLEVBQUU7SUFBQyxPQUFPLEtBQUsyRixLQUFBLENBQU1nRCxTQUFBLENBQVUzSSxFQUFDO0VBQUM7QUFBQztBQUFDLElBQU00SSxDQUFBLEdBQU4sY0FBZ0J4SCxDQUFBLENBQUM7RUFBQ0MsWUFBWXJCLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsTUFBTSxHQUFFLEtBQUs0SSxRQUFBLEdBQVMsRUFBQyxFQUFFLEtBQUtDLFlBQUEsR0FBYSxPQUFHLEtBQUtDLFNBQUEsR0FBVSxNQUFLLEtBQUtDLGNBQUEsR0FBZSxNQUFLLEtBQUtDLGtCQUFBLEdBQW1CLEdBQUUsS0FBS0MsVUFBQSxHQUFXLE9BQUcsS0FBS0MsYUFBQSxHQUFjLEVBQUMsRUFBRSxLQUFLQyxtQkFBQSxHQUFvQixFQUFDLEVBQUUsS0FBS0QsYUFBQSxHQUFjLEVBQUMsRUFBRSxLQUFLRSxPQUFBLEdBQVFySixFQUFBO0lBQUUsTUFBTUUsRUFBQSxHQUFFLEtBQUtvSiwwQkFBQSxDQUEyQnRKLEVBQUEsQ0FBRXVKLFNBQVM7SUFBRSxLQUFLQyxNQUFBLEdBQU90SixFQUFBO0lBQUUsTUFBSyxDQUFDQyxFQUFBLEVBQUVFLEVBQUMsSUFBRSxLQUFLb0osUUFBQSxDQUFTO0lBQUV2SixFQUFBLENBQUUyRCxXQUFBLENBQVkxRCxFQUFDLEdBQUUsS0FBS29KLFNBQUEsR0FBVXBKLEVBQUEsRUFBRSxLQUFLdUosZUFBQSxHQUFnQnJKLEVBQUEsQ0FBRXNKLGFBQUEsQ0FBYyxTQUFTLEdBQUUsS0FBS0MsT0FBQSxHQUFRdkosRUFBQSxDQUFFc0osYUFBQSxDQUFjLFVBQVUsR0FBRSxLQUFLRSxhQUFBLEdBQWN4SixFQUFBLENBQUVzSixhQUFBLENBQWMsV0FBVyxHQUFFLEtBQUtHLGVBQUEsR0FBZ0J6SixFQUFBLENBQUVzSixhQUFBLENBQWMsV0FBVyxHQUFFLEtBQUtJLE1BQUEsR0FBTzFKLEVBQUEsQ0FBRXNKLGFBQUEsQ0FBYyxTQUFTLEdBQUUxSixFQUFBLElBQUdJLEVBQUEsQ0FBRXdELFdBQUEsQ0FBWTVELEVBQUMsR0FBRSxLQUFLK0osVUFBQSxDQUFXO0VBQUM7RUFBQ1YsMkJBQTJCdEosRUFBQSxFQUFFO0lBQUMsSUFBSUMsRUFBQTtJQUFFLElBQUcsWUFBVSxPQUFPRCxFQUFBLEdBQUVDLEVBQUEsR0FBRXNELFFBQUEsQ0FBU29HLGFBQUEsQ0FBYzNKLEVBQUMsSUFBRUEsRUFBQSxZQUFhaUssV0FBQSxLQUFjaEssRUFBQSxHQUFFRCxFQUFBLEdBQUcsQ0FBQ0MsRUFBQSxFQUFFLE1BQU0sSUFBSTJFLEtBQUEsQ0FBTSxxQkFBcUI7SUFBRSxPQUFPM0UsRUFBQTtFQUFDO0VBQUMrSixXQUFBLEVBQVk7SUFBQyxNQUFNaEssRUFBQSxHQUFFUSxFQUFBLElBQUc7TUFBQyxNQUFNUCxFQUFBLEdBQUUsS0FBSzJKLE9BQUEsQ0FBUU0scUJBQUEsQ0FBc0I7UUFBRWhLLEVBQUEsR0FBRU0sRUFBQSxDQUFFMkosT0FBQSxHQUFRbEssRUFBQSxDQUFFbUssSUFBQTtRQUFLakssRUFBQSxHQUFFSyxFQUFBLENBQUU2SixPQUFBLEdBQVFwSyxFQUFBLENBQUVxSyxHQUFBO01BQUksT0FBTSxDQUFDcEssRUFBQSxHQUFFRCxFQUFBLENBQUVzSyxLQUFBLEVBQU1wSyxFQUFBLEdBQUVGLEVBQUEsQ0FBRXVLLE1BQU07SUFBQztJQUFFLElBQUcsS0FBS1osT0FBQSxDQUFRM0QsZ0JBQUEsQ0FBaUIsU0FBU2hHLEVBQUEsSUFBRztNQUFDLE1BQUssQ0FBQ0MsRUFBQSxFQUFFQyxFQUFDLElBQUVILEVBQUEsQ0FBRUMsRUFBQztNQUFFLEtBQUsrQixJQUFBLENBQUssU0FBUTlCLEVBQUEsRUFBRUMsRUFBQztJQUFDLENBQUUsR0FBRSxLQUFLeUosT0FBQSxDQUFRM0QsZ0JBQUEsQ0FBaUIsWUFBWWhHLEVBQUEsSUFBRztNQUFDLE1BQUssQ0FBQ0MsRUFBQSxFQUFFQyxFQUFDLElBQUVILEVBQUEsQ0FBRUMsRUFBQztNQUFFLEtBQUsrQixJQUFBLENBQUssWUFBVzlCLEVBQUEsRUFBRUMsRUFBQztJQUFDLENBQUUsR0FBRSxTQUFLLEtBQUtrSixPQUFBLENBQVFvQixVQUFBLElBQVksWUFBVSxPQUFPLEtBQUtwQixPQUFBLENBQVFvQixVQUFBLElBQVksS0FBS0MsUUFBQSxDQUFTLEdBQUUsS0FBS2hCLGVBQUEsQ0FBZ0J6RCxnQkFBQSxDQUFpQixVQUFVLE1BQUk7TUFBQyxNQUFLO1VBQUMwRSxVQUFBLEVBQVduSyxFQUFBO1VBQUVvSyxXQUFBLEVBQVkzSyxFQUFBO1VBQUU0SyxXQUFBLEVBQVkzSztRQUFDLElBQUUsS0FBS3dKLGVBQUE7UUFBZ0J2SixFQUFBLEdBQUVLLEVBQUEsR0FBRVAsRUFBQTtRQUFFSSxFQUFBLElBQUdHLEVBQUEsR0FBRU4sRUFBQSxJQUFHRCxFQUFBO01BQUUsS0FBSytCLElBQUEsQ0FBSyxVQUFTN0IsRUFBQSxFQUFFRSxFQUFBLEVBQUVHLEVBQUEsRUFBRUEsRUFBQSxHQUFFTixFQUFDO0lBQUMsQ0FBRSxHQUFFLGNBQVksT0FBTzRLLGNBQUEsRUFBZTtNQUFDLE1BQU10SyxFQUFBLEdBQUUsS0FBS3VLLFdBQUEsQ0FBWSxHQUFHO01BQUUsS0FBSy9CLGNBQUEsR0FBZSxJQUFJOEIsY0FBQSxDQUFnQixNQUFJO1FBQUN0SyxFQUFBLENBQUUsRUFBRVMsSUFBQSxDQUFNLE1BQUksS0FBSytKLGlCQUFBLENBQWtCLENBQUUsRUFBRUMsS0FBQSxDQUFPLE1BQUksQ0FBQyxDQUFFO01BQUMsQ0FBRSxHQUFFLEtBQUtqQyxjQUFBLENBQWVrQyxPQUFBLENBQVEsS0FBS3hCLGVBQWU7SUFBQztFQUFDO0VBQUNzQixrQkFBQSxFQUFtQjtJQUFDLE1BQU1oTCxFQUFBLEdBQUUsS0FBS3dKLE1BQUEsQ0FBT3FCLFdBQUE7SUFBWTdLLEVBQUEsS0FBSSxLQUFLaUosa0JBQUEsSUFBb0IsV0FBUyxLQUFLSSxPQUFBLENBQVFtQixNQUFBLEtBQVMsS0FBS3ZCLGtCQUFBLEdBQW1CakosRUFBQSxFQUFFLEtBQUttTCxRQUFBLENBQVM7RUFBRTtFQUFDVCxTQUFBLEVBQVU7SUFBQyxLQUFLdkIsYUFBQSxDQUFjaUMsSUFBQSxDQUFLLFVBQVNwTCxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVFLEVBQUEsR0FBRSxHQUFFQyxFQUFBLEdBQUUsR0FBRUMsRUFBQSxHQUFFLEtBQUk7TUFBQyxJQUFHLENBQUNQLEVBQUEsRUFBRSxPQUFNLE1BQUksQ0FBQztNQUFFLE1BQU1ZLEVBQUEsR0FBRXlLLFVBQUEsQ0FBVyxtQkFBbUIsRUFBRUMsT0FBQTtNQUFRLElBQUk3SyxFQUFBLEdBQUVtSSxDQUFBLEtBQUksQ0FBQztNQUFFLE1BQU0yQyxFQUFBLEdBQUVDLEVBQUEsSUFBRztRQUFDLElBQUdBLEVBQUEsQ0FBRUMsTUFBQSxLQUFTbkwsRUFBQSxFQUFFO1FBQU9rTCxFQUFBLENBQUVFLGNBQUEsQ0FBZSxHQUFFRixFQUFBLENBQUVHLGVBQUEsQ0FBZ0I7UUFBRSxJQUFJQyxFQUFBLEdBQUVKLEVBQUEsQ0FBRXJCLE9BQUE7VUFBUTBCLEVBQUEsR0FBRUwsRUFBQSxDQUFFbkIsT0FBQTtVQUFReUIsRUFBQSxHQUFFO1FBQUcsTUFBTUMsQ0FBQSxHQUFFQyxJQUFBLENBQUtDLEdBQUEsQ0FBSTtVQUFFQyxDQUFBLEdBQUVsSCxFQUFBLElBQUc7WUFBQyxJQUFHQSxFQUFBLENBQUUwRyxjQUFBLENBQWUsR0FBRTFHLEVBQUEsQ0FBRTJHLGVBQUEsQ0FBZ0IsR0FBRS9LLEVBQUEsSUFBR29MLElBQUEsQ0FBS0MsR0FBQSxDQUFJLElBQUVGLENBQUEsR0FBRXhMLEVBQUEsRUFBRTtZQUFPLE1BQU00TCxFQUFBLEdBQUVuSCxFQUFBLENBQUVtRixPQUFBO2NBQVFpQyxFQUFBLEdBQUVwSCxFQUFBLENBQUVxRixPQUFBO2NBQVFnQyxFQUFBLEdBQUVGLEVBQUEsR0FBRVAsRUFBQTtjQUFFVSxFQUFBLEdBQUVGLEVBQUEsR0FBRVAsRUFBQTtZQUFFLElBQUdDLEVBQUEsSUFBR25KLElBQUEsQ0FBS0MsR0FBQSxDQUFJeUosRUFBQyxJQUFFaE0sRUFBQSxJQUFHc0MsSUFBQSxDQUFLQyxHQUFBLENBQUkwSixFQUFDLElBQUVqTSxFQUFBLEVBQUU7Y0FBQyxNQUFNa00sRUFBQSxHQUFFdk0sRUFBQSxDQUFFa0sscUJBQUEsQ0FBc0I7Z0JBQUU7a0JBQUNFLElBQUEsRUFBS2xGLEVBQUE7a0JBQUVvRixHQUFBLEVBQUlrQztnQkFBQyxJQUFFRCxFQUFBO2NBQUVULEVBQUEsS0FBSSxRQUFNNUwsRUFBQSxJQUFHQSxFQUFBLENBQUUwTCxFQUFBLEdBQUUxRyxFQUFBLEVBQUUyRyxFQUFBLEdBQUVXLEVBQUMsR0FBRVYsRUFBQSxHQUFFLE9BQUk3TCxFQUFBLENBQUVvTSxFQUFBLEVBQUVDLEVBQUEsRUFBRUgsRUFBQSxHQUFFakgsRUFBQSxFQUFFa0gsRUFBQSxHQUFFSSxFQUFDLEdBQUVaLEVBQUEsR0FBRU8sRUFBQSxFQUFFTixFQUFBLEdBQUVPLEVBQUE7WUFBQztVQUFDO1VBQUVLLENBQUEsR0FBRTNMLEVBQUEsSUFBRztZQUFDLElBQUdnTCxFQUFBLEVBQUU7Y0FBQyxNQUFNbkssRUFBQSxHQUFFYixFQUFBLENBQUVxSixPQUFBO2dCQUFRakYsRUFBQSxHQUFFcEUsRUFBQSxDQUFFdUosT0FBQTtnQkFBUThCLEVBQUEsR0FBRW5NLEVBQUEsQ0FBRWtLLHFCQUFBLENBQXNCO2dCQUFFO2tCQUFDRSxJQUFBLEVBQUtvQyxFQUFBO2tCQUFFbEMsR0FBQSxFQUFJb0M7Z0JBQUMsSUFBRVAsRUFBQTtjQUFFLFFBQU1oTSxFQUFBLElBQUdBLEVBQUEsQ0FBRXdCLEVBQUEsR0FBRTZLLEVBQUEsRUFBRXRILEVBQUEsR0FBRXdILEVBQUM7WUFBQztZQUFDak0sRUFBQSxDQUFFO1VBQUM7VUFBRWtNLENBQUEsR0FBRW5NLEVBQUEsSUFBRztZQUFDQSxFQUFBLENBQUVvTSxhQUFBLElBQWVwTSxFQUFBLENBQUVvTSxhQUFBLEtBQWdCckosUUFBQSxDQUFTc0osZUFBQSxJQUFpQkosQ0FBQSxDQUFFak0sRUFBQztVQUFDO1VBQUVzTSxDQUFBLEdBQUV0TSxFQUFBLElBQUc7WUFBQ3NMLEVBQUEsS0FBSXRMLEVBQUEsQ0FBRW1MLGVBQUEsQ0FBZ0IsR0FBRW5MLEVBQUEsQ0FBRWtMLGNBQUEsQ0FBZTtVQUFFO1VBQUVxQixDQUFBLEdBQUV2TSxFQUFBLElBQUc7WUFBQ3NMLEVBQUEsSUFBR3RMLEVBQUEsQ0FBRWtMLGNBQUEsQ0FBZTtVQUFDO1FBQUVuSSxRQUFBLENBQVMwQyxnQkFBQSxDQUFpQixlQUFjaUcsQ0FBQyxHQUFFM0ksUUFBQSxDQUFTMEMsZ0JBQUEsQ0FBaUIsYUFBWXdHLENBQUMsR0FBRWxKLFFBQUEsQ0FBUzBDLGdCQUFBLENBQWlCLGNBQWEwRyxDQUFDLEdBQUVwSixRQUFBLENBQVMwQyxnQkFBQSxDQUFpQixpQkFBZ0IwRyxDQUFDLEdBQUVwSixRQUFBLENBQVMwQyxnQkFBQSxDQUFpQixhQUFZOEcsQ0FBQSxFQUFFO1VBQUNDLE9BQUEsRUFBUTtRQUFFLENBQUMsR0FBRXpKLFFBQUEsQ0FBUzBDLGdCQUFBLENBQWlCLFNBQVE2RyxDQUFBLEVBQUU7VUFBQ0csT0FBQSxFQUFRO1FBQUUsQ0FBQyxHQUFFeE0sRUFBQSxHQUFFbUksQ0FBQSxLQUFJO1VBQUNyRixRQUFBLENBQVMyQyxtQkFBQSxDQUFvQixlQUFjZ0csQ0FBQyxHQUFFM0ksUUFBQSxDQUFTMkMsbUJBQUEsQ0FBb0IsYUFBWXVHLENBQUMsR0FBRWxKLFFBQUEsQ0FBUzJDLG1CQUFBLENBQW9CLGNBQWF5RyxDQUFDLEdBQUVwSixRQUFBLENBQVMyQyxtQkFBQSxDQUFvQixpQkFBZ0J5RyxDQUFDLEdBQUVwSixRQUFBLENBQVMyQyxtQkFBQSxDQUFvQixhQUFZNkcsQ0FBQyxHQUFFRyxVQUFBLENBQVksTUFBSTtZQUFDM0osUUFBQSxDQUFTMkMsbUJBQUEsQ0FBb0IsU0FBUTRHLENBQUEsRUFBRTtjQUFDRyxPQUFBLEVBQVE7WUFBRSxDQUFDO1VBQUMsR0FBRyxFQUFFO1FBQUM7TUFBQztNQUFFLE9BQU9qTixFQUFBLENBQUVpRyxnQkFBQSxDQUFpQixlQUFjc0YsRUFBQyxHQUFFLE1BQUk7UUFBQzlLLEVBQUEsQ0FBRSxHQUFFVCxFQUFBLENBQUVrRyxtQkFBQSxDQUFvQixlQUFjcUYsRUFBQztNQUFDO0lBQUMsRUFBRSxLQUFLM0IsT0FBQSxFQUFTLENBQUM1SixFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxLQUFJO01BQUMsS0FBSzhCLElBQUEsQ0FBSyxRQUFPVyxJQUFBLENBQUtnRixHQUFBLENBQUksR0FBRWhGLElBQUEsQ0FBS2lGLEdBQUEsQ0FBSSxHQUFFMUgsRUFBQSxHQUFFLEtBQUswSixPQUFBLENBQVFNLHFCQUFBLENBQXNCLEVBQUVLLEtBQUssQ0FBQyxDQUFDO0lBQUMsR0FBSXZLLEVBQUEsSUFBRztNQUFDLEtBQUtrSixVQUFBLEdBQVcsTUFBRyxLQUFLbEgsSUFBQSxDQUFLLGFBQVlXLElBQUEsQ0FBS2dGLEdBQUEsQ0FBSSxHQUFFaEYsSUFBQSxDQUFLaUYsR0FBQSxDQUFJLEdBQUU1SCxFQUFBLEdBQUUsS0FBSzRKLE9BQUEsQ0FBUU0scUJBQUEsQ0FBc0IsRUFBRUssS0FBSyxDQUFDLENBQUM7SUFBQyxHQUFJdkssRUFBQSxJQUFHO01BQUMsS0FBS2tKLFVBQUEsR0FBVyxPQUFHLEtBQUtsSCxJQUFBLENBQUssV0FBVVcsSUFBQSxDQUFLZ0YsR0FBQSxDQUFJLEdBQUVoRixJQUFBLENBQUtpRixHQUFBLENBQUksR0FBRTVILEVBQUEsR0FBRSxLQUFLNEosT0FBQSxDQUFRTSxxQkFBQSxDQUFzQixFQUFFSyxLQUFLLENBQUMsQ0FBQztJQUFDLENBQUUsQ0FBQztFQUFDO0VBQUM0QyxVQUFVbk4sRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxJQUFJQyxFQUFBO0lBQUUsTUFBTUMsRUFBQSxJQUFHLFVBQVFELEVBQUEsR0FBRSxLQUFLNkksU0FBQSxLQUFZLFdBQVM3SSxFQUFBLEdBQUUsU0FBT0EsRUFBQSxDQUFFNkMsZ0JBQUEsS0FBbUI7SUFBRSxJQUFHLFFBQU0vQyxFQUFBLEVBQUUsT0FBTztJQUFJLElBQUcsQ0FBQ29OLEtBQUEsQ0FBTWpJLE1BQUEsQ0FBT25GLEVBQUMsQ0FBQyxHQUFFLE9BQU9tRixNQUFBLENBQU9uRixFQUFDO0lBQUUsSUFBRyxXQUFTQSxFQUFBLEVBQUU7TUFBQyxNQUFNUSxFQUFBLEdBQUUsS0FBS2dKLE1BQUEsQ0FBTzZELFlBQUEsSUFBYztNQUFJLFFBQU8sUUFBTXBOLEVBQUEsR0FBRSxTQUFPQSxFQUFBLENBQUVxTixLQUFBLENBQU8zTSxFQUFBLElBQUcsQ0FBQ0EsRUFBQSxDQUFFNE0sT0FBUSxLQUFHL00sRUFBQSxHQUFFTCxFQUFBLEdBQUVLLEVBQUE7SUFBQztJQUFDLE9BQU87RUFBRztFQUFDaUosU0FBQSxFQUFVO0lBQUMsTUFBTXpKLEVBQUEsR0FBRXVELFFBQUEsQ0FBU0UsYUFBQSxDQUFjLEtBQUs7TUFBRXhELEVBQUEsR0FBRUQsRUFBQSxDQUFFd04sWUFBQSxDQUFhO1FBQUNDLElBQUEsRUFBSztNQUFNLENBQUM7TUFBRXZOLEVBQUEsR0FBRSxLQUFLbUosT0FBQSxDQUFRcUUsUUFBQSxJQUFVLFlBQVUsT0FBTyxLQUFLckUsT0FBQSxDQUFRcUUsUUFBQSxHQUFTLEtBQUtyRSxPQUFBLENBQVFxRSxRQUFBLENBQVNDLE9BQUEsQ0FBUSxNQUFLLEVBQUUsSUFBRTtJQUFHLE9BQU8xTixFQUFBLENBQUUyTixTQUFBLEdBQVU7QUFBQSxjQUFpQjFOLEVBQUEsR0FBRSxXQUFXQSxFQUFBLE1BQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFrdUIsS0FBS2lOLFNBQUEsQ0FBVSxLQUFLOUQsT0FBQSxDQUFRbUIsTUFBQSxFQUFPLEtBQUtuQixPQUFBLENBQVF3RSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBqQyxDQUFDN04sRUFBQSxFQUFFQyxFQUFDO0VBQUM7RUFBQzZOLFdBQVc5TixFQUFBLEVBQUU7SUFBQyxJQUFHLEtBQUtxSixPQUFBLENBQVFFLFNBQUEsS0FBWXZKLEVBQUEsQ0FBRXVKLFNBQUEsRUFBVTtNQUFDLE1BQU10SixFQUFBLEdBQUUsS0FBS3FKLDBCQUFBLENBQTJCdEosRUFBQSxDQUFFdUosU0FBUztNQUFFdEosRUFBQSxDQUFFNEQsV0FBQSxDQUFZLEtBQUswRixTQUFTLEdBQUUsS0FBS0MsTUFBQSxHQUFPdkosRUFBQTtJQUFDO0lBQUMsU0FBS0QsRUFBQSxDQUFFeUssVUFBQSxJQUFZLFlBQVUsT0FBTyxLQUFLcEIsT0FBQSxDQUFRb0IsVUFBQSxJQUFZLEtBQUtDLFFBQUEsQ0FBUyxHQUFFLEtBQUtyQixPQUFBLEdBQVFySixFQUFBLEVBQUUsS0FBS21MLFFBQUEsQ0FBUztFQUFDO0VBQUM0QyxXQUFBLEVBQVk7SUFBQyxPQUFPLEtBQUtuRSxPQUFBO0VBQU87RUFBQ29FLFNBQUEsRUFBVTtJQUFDLE9BQU8sS0FBS3RFLGVBQUEsQ0FBZ0JtQixXQUFBO0VBQVc7RUFBQ29ELFVBQUEsRUFBVztJQUFDLE9BQU8sS0FBS3ZFLGVBQUEsQ0FBZ0JpQixVQUFBO0VBQVU7RUFBQ3VELFVBQVVsTyxFQUFBLEVBQUU7SUFBQyxLQUFLMEosZUFBQSxDQUFnQmlCLFVBQUEsR0FBVzNLLEVBQUE7RUFBQztFQUFDbU8sb0JBQW9Cbk8sRUFBQSxFQUFFO0lBQUMsTUFBSztRQUFDNEssV0FBQSxFQUFZM0s7TUFBQyxJQUFFLEtBQUt5SixlQUFBO01BQWdCeEosRUFBQSxHQUFFRCxFQUFBLEdBQUVELEVBQUE7SUFBRSxLQUFLa08sU0FBQSxDQUFVaE8sRUFBQztFQUFDO0VBQUM4RyxRQUFBLEVBQVM7SUFBQyxJQUFJaEgsRUFBQSxFQUFFQyxFQUFBO0lBQUUsS0FBS2tKLGFBQUEsQ0FBY2xILE9BQUEsQ0FBU3pCLEVBQUEsSUFBR0EsRUFBQSxDQUFFLENBQUUsR0FBRSxLQUFLK0ksU0FBQSxDQUFVckMsTUFBQSxDQUFPLEdBQUUsVUFBUWxILEVBQUEsR0FBRSxLQUFLZ0osY0FBQSxLQUFpQixXQUFTaEosRUFBQSxJQUFHQSxFQUFBLENBQUVvTyxVQUFBLENBQVcsR0FBRSxVQUFRbk8sRUFBQSxHQUFFLEtBQUttSixtQkFBQSxLQUFzQixXQUFTbkosRUFBQSxJQUFHQSxFQUFBLENBQUVnQyxPQUFBLENBQVN6QixFQUFBLElBQUdBLEVBQUEsQ0FBRSxDQUFFLEdBQUUsS0FBSzRJLG1CQUFBLEdBQW9CLEVBQUM7RUFBQztFQUFDMkIsWUFBWS9LLEVBQUEsR0FBRSxJQUFHO0lBQUMsSUFBSUMsRUFBQSxFQUFFQyxFQUFBO0lBQUUsTUFBTUMsRUFBQSxHQUFFa0QsQ0FBQSxLQUFJO01BQUNwRCxFQUFBLElBQUdvTyxZQUFBLENBQWFwTyxFQUFDLEdBQUVDLEVBQUEsSUFBR0EsRUFBQSxDQUFFO0lBQUM7SUFBRSxPQUFPLEtBQUsySSxRQUFBLENBQVN1QyxJQUFBLENBQUtqTCxFQUFDLEdBQUUsTUFBSSxJQUFJQyxPQUFBLENBQVMsQ0FBQ0MsRUFBQSxFQUFFQyxFQUFBLEtBQUk7TUFBQ0gsRUFBQSxDQUFFLEdBQUVELEVBQUEsR0FBRUksRUFBQSxFQUFFTCxFQUFBLEdBQUVpTixVQUFBLENBQVksTUFBSTtRQUFDak4sRUFBQSxHQUFFLFFBQU9DLEVBQUEsR0FBRSxRQUFPRyxFQUFBLENBQUU7TUFBQyxHQUFHTCxFQUFDO0lBQUMsQ0FBRTtFQUFDO0VBQUNzTyxtQkFBbUJ0TyxFQUFBLEVBQUU7SUFBQyxJQUFHLENBQUN1TyxLQUFBLENBQU1DLE9BQUEsQ0FBUXhPLEVBQUMsR0FBRSxPQUFPQSxFQUFBLElBQUc7SUFBRyxJQUFHQSxFQUFBLENBQUUwQyxNQUFBLEdBQU8sR0FBRSxPQUFPMUMsRUFBQSxDQUFFLE1BQUk7SUFBRyxNQUFNQyxFQUFBLEdBQUVzRCxRQUFBLENBQVNFLGFBQUEsQ0FBYyxRQUFRO01BQUV2RCxFQUFBLEdBQUVELEVBQUEsQ0FBRXdPLFVBQUEsQ0FBVyxJQUFJO01BQUV0TyxFQUFBLEdBQUVGLEVBQUEsQ0FBRXVLLE1BQUEsSUFBUWtFLE1BQUEsQ0FBT0MsZ0JBQUEsSUFBa0I7TUFBR3RPLEVBQUEsR0FBRUgsRUFBQSxDQUFFME8sb0JBQUEsQ0FBcUIsR0FBRSxHQUFFLEdBQUV6TyxFQUFDO01BQUVHLEVBQUEsR0FBRSxLQUFHTixFQUFBLENBQUUwQyxNQUFBLEdBQU87SUFBRyxPQUFPMUMsRUFBQSxDQUFFaUMsT0FBQSxDQUFTLENBQUN6QixFQUFBLEVBQUVNLEVBQUEsS0FBSTtNQUFDLE1BQU1hLEVBQUEsR0FBRWIsRUFBQSxHQUFFUixFQUFBO01BQUVELEVBQUEsQ0FBRXdPLFlBQUEsQ0FBYWxOLEVBQUEsRUFBRW5CLEVBQUM7SUFBQyxDQUFFLEdBQUVILEVBQUE7RUFBQztFQUFDeU8sY0FBQSxFQUFlO0lBQUMsT0FBT25NLElBQUEsQ0FBS2dGLEdBQUEsQ0FBSSxHQUFFK0csTUFBQSxDQUFPQyxnQkFBQSxJQUFrQixDQUFDO0VBQUM7RUFBQ0ksa0JBQWtCL08sRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsTUFBTUUsRUFBQSxHQUFFTCxFQUFBLENBQUU7TUFBR00sRUFBQSxHQUFFTixFQUFBLENBQUUsTUFBSUEsRUFBQSxDQUFFO01BQUdPLEVBQUEsR0FBRUYsRUFBQSxDQUFFcUMsTUFBQTtNQUFPO1FBQUM2SCxLQUFBLEVBQU0zSixFQUFBO1FBQUU0SixNQUFBLEVBQU8vSjtNQUFDLElBQUVQLEVBQUEsQ0FBRThPLE1BQUE7TUFBT3pELEVBQUEsR0FBRTlLLEVBQUEsR0FBRTtNQUFFbUwsRUFBQSxHQUFFLEtBQUtrRCxhQUFBLENBQWM7TUFBRWpELEVBQUEsR0FBRTVMLEVBQUEsQ0FBRWdQLFFBQUEsR0FBU2hQLEVBQUEsQ0FBRWdQLFFBQUEsR0FBU3JELEVBQUEsR0FBRTtNQUFFRSxFQUFBLEdBQUU3TCxFQUFBLENBQUVpUCxNQUFBLEdBQU9qUCxFQUFBLENBQUVpUCxNQUFBLEdBQU90RCxFQUFBLEdBQUUzTCxFQUFBLENBQUVnUCxRQUFBLEdBQVNwRCxFQUFBLEdBQUUsSUFBRTtNQUFFRSxDQUFBLEdBQUU5TCxFQUFBLENBQUVrUCxTQUFBLElBQVc7TUFBRWpELENBQUEsR0FBRXRMLEVBQUEsSUFBR2lMLEVBQUEsR0FBRUMsRUFBQSxJQUFHdkwsRUFBQTtNQUFFa00sQ0FBQSxHQUFFVixDQUFBLElBQUcsZUFBYzdMLEVBQUEsR0FBRSxjQUFZO0lBQU9BLEVBQUEsQ0FBRWtQLFNBQUEsQ0FBVTtJQUFFLElBQUl6QyxDQUFBLEdBQUU7TUFBRUcsQ0FBQSxHQUFFO01BQUVDLENBQUEsR0FBRTtJQUFFLFNBQVF2TSxFQUFBLEdBQUUsR0FBRUEsRUFBQSxJQUFHRCxFQUFBLEVBQUVDLEVBQUEsSUFBSTtNQUFDLE1BQU1nTSxFQUFBLEdBQUU3SixJQUFBLENBQUswQyxLQUFBLENBQU03RSxFQUFBLEdBQUUwTCxDQUFDO01BQUUsSUFBR00sRUFBQSxHQUFFRyxDQUFBLEVBQUU7UUFBQyxNQUFNaE0sRUFBQSxHQUFFZ0MsSUFBQSxDQUFLMEMsS0FBQSxDQUFNeUgsQ0FBQSxHQUFFdkIsRUFBQSxHQUFFcEwsRUFBQztVQUFFK0UsRUFBQSxHQUFFdkUsRUFBQSxHQUFFZ0MsSUFBQSxDQUFLMEMsS0FBQSxDQUFNMEgsQ0FBQSxHQUFFeEIsRUFBQSxHQUFFcEwsRUFBQyxLQUFHO1FBQUUsSUFBSWdNLEVBQUEsR0FBRVosRUFBQSxHQUFFNUssRUFBQTtRQUFFLFVBQVFWLEVBQUEsQ0FBRW9QLFFBQUEsR0FBU2xELEVBQUEsR0FBRSxJQUFFLGFBQVdsTSxFQUFBLENBQUVvUCxRQUFBLEtBQVdsRCxFQUFBLEdBQUUxTCxFQUFBLEdBQUV5RSxFQUFBLEdBQUdoRixFQUFBLENBQUV1TSxDQUFBLEVBQUdFLENBQUEsSUFBR2QsRUFBQSxHQUFFQyxFQUFBLEdBQUdLLEVBQUEsRUFBRU4sRUFBQSxFQUFFM0csRUFBQSxFQUFFNkcsQ0FBQyxHQUFFWSxDQUFBLEdBQUVILEVBQUEsRUFBRU0sQ0FBQSxHQUFFLEdBQUVDLENBQUEsR0FBRTtNQUFDO01BQUMsTUFBTUwsRUFBQSxHQUFFL0osSUFBQSxDQUFLQyxHQUFBLENBQUl2QyxFQUFBLENBQUVHLEVBQUEsS0FBSSxDQUFDO1FBQUU4TyxFQUFBLEdBQUUzTSxJQUFBLENBQUtDLEdBQUEsQ0FBSXRDLEVBQUEsQ0FBRUUsRUFBQSxLQUFJLENBQUM7TUFBRWtNLEVBQUEsR0FBRUksQ0FBQSxLQUFJQSxDQUFBLEdBQUVKLEVBQUEsR0FBRzRDLEVBQUEsR0FBRXZDLENBQUEsS0FBSUEsQ0FBQSxHQUFFdUMsRUFBQTtJQUFFO0lBQUNwUCxFQUFBLENBQUVxUCxJQUFBLENBQUssR0FBRXJQLEVBQUEsQ0FBRXNQLFNBQUEsQ0FBVTtFQUFDO0VBQUNDLG1CQUFtQnpQLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLE1BQU1FLEVBQUEsR0FBRVMsRUFBQSxJQUFHO01BQUMsTUFBTW9FLEVBQUEsR0FBRWxGLEVBQUEsQ0FBRWMsRUFBQSxLQUFJZCxFQUFBLENBQUU7UUFBR00sRUFBQSxHQUFFNEUsRUFBQSxDQUFFeEMsTUFBQTtRQUFPO1VBQUM4SCxNQUFBLEVBQU9qSztRQUFDLElBQUVMLEVBQUEsQ0FBRThPLE1BQUE7UUFBT3BPLEVBQUEsR0FBRUwsRUFBQSxHQUFFO1FBQUVFLEVBQUEsR0FBRVAsRUFBQSxDQUFFOE8sTUFBQSxDQUFPekUsS0FBQSxHQUFNakssRUFBQTtNQUFFSixFQUFBLENBQUV3UCxNQUFBLENBQU8sR0FBRTlPLEVBQUM7TUFBRSxJQUFJMkssRUFBQSxHQUFFO1FBQUVLLEVBQUEsR0FBRTtNQUFFLFNBQVFwTCxFQUFBLEdBQUUsR0FBRUEsRUFBQSxJQUFHRixFQUFBLEVBQUVFLEVBQUEsSUFBSTtRQUFDLE1BQU0yTCxFQUFBLEdBQUV4SixJQUFBLENBQUswQyxLQUFBLENBQU03RSxFQUFBLEdBQUVDLEVBQUM7UUFBRSxJQUFHMEwsRUFBQSxHQUFFWixFQUFBLEVBQUU7VUFBQyxNQUFNNUssRUFBQSxHQUFFQyxFQUFBLElBQUcrQixJQUFBLENBQUswQyxLQUFBLENBQU11RyxFQUFBLEdBQUVoTCxFQUFBLEdBQUVULEVBQUMsS0FBRyxNQUFJLE1BQUlXLEVBQUEsR0FBRSxLQUFHO1VBQUdaLEVBQUEsQ0FBRXlQLE1BQUEsQ0FBT3BFLEVBQUEsRUFBRTVLLEVBQUMsR0FBRTRLLEVBQUEsR0FBRVksRUFBQSxFQUFFUCxFQUFBLEdBQUU7UUFBQztRQUFDLE1BQU1ZLEVBQUEsR0FBRTdKLElBQUEsQ0FBS0MsR0FBQSxDQUFJc0MsRUFBQSxDQUFFMUUsRUFBQSxLQUFJLENBQUM7UUFBRWdNLEVBQUEsR0FBRVosRUFBQSxLQUFJQSxFQUFBLEdBQUVZLEVBQUE7TUFBRTtNQUFDdE0sRUFBQSxDQUFFeVAsTUFBQSxDQUFPcEUsRUFBQSxFQUFFM0ssRUFBQztJQUFDO0lBQUVWLEVBQUEsQ0FBRWtQLFNBQUEsQ0FBVSxHQUFFL08sRUFBQSxDQUFFLENBQUMsR0FBRUEsRUFBQSxDQUFFLENBQUMsR0FBRUgsRUFBQSxDQUFFcVAsSUFBQSxDQUFLLEdBQUVyUCxFQUFBLENBQUVzUCxTQUFBLENBQVU7RUFBQztFQUFDSSxlQUFlNVAsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLElBQUdBLEVBQUEsQ0FBRTJQLFNBQUEsR0FBVSxLQUFLdkIsa0JBQUEsQ0FBbUJyTyxFQUFBLENBQUU2UCxTQUFTLEdBQUU3UCxFQUFBLENBQUU4UCxjQUFBLEVBQWUsT0FBTyxLQUFLOVAsRUFBQSxDQUFFOFAsY0FBQSxDQUFlL1AsRUFBQSxFQUFFRSxFQUFDO0lBQUUsSUFBSUMsRUFBQSxHQUFFRixFQUFBLENBQUUrUCxTQUFBLElBQVc7SUFBRSxJQUFHL1AsRUFBQSxDQUFFZ1EsU0FBQSxFQUFVO01BQUMsTUFBTW5QLEVBQUEsR0FBRXlOLEtBQUEsQ0FBTTJCLElBQUEsQ0FBS2xRLEVBQUEsQ0FBRSxFQUFFLEVBQUVtUSxNQUFBLENBQVEsQ0FBQzNQLEVBQUEsRUFBRXFDLEVBQUEsS0FBSUYsSUFBQSxDQUFLZ0YsR0FBQSxDQUFJbkgsRUFBQSxFQUFFbUMsSUFBQSxDQUFLQyxHQUFBLENBQUlDLEVBQUMsQ0FBQyxHQUFHLENBQUM7TUFBRTFDLEVBQUEsR0FBRVcsRUFBQSxHQUFFLElBQUVBLEVBQUEsR0FBRTtJQUFDO0lBQUNiLEVBQUEsQ0FBRWdQLFFBQUEsSUFBVWhQLEVBQUEsQ0FBRWlQLE1BQUEsSUFBUWpQLEVBQUEsQ0FBRW9QLFFBQUEsR0FBUyxLQUFLTixpQkFBQSxDQUFrQi9PLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUMsSUFBRSxLQUFLc1Asa0JBQUEsQ0FBbUJ6UCxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFDO0VBQUM7RUFBQ2lRLG1CQUFtQnBRLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUUsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLE1BQU1LLEVBQUEsR0FBRSxLQUFLa08sYUFBQSxDQUFjO01BQUVyTyxFQUFBLEdBQUU4QyxRQUFBLENBQVNFLGFBQUEsQ0FBYyxRQUFRO0lBQUVoRCxFQUFBLENBQUU4SixLQUFBLEdBQU01SCxJQUFBLENBQUswQyxLQUFBLENBQU1uRixFQUFBLEdBQUVVLEVBQUMsR0FBRUgsRUFBQSxDQUFFK0osTUFBQSxHQUFPN0gsSUFBQSxDQUFLMEMsS0FBQSxDQUFNbEYsRUFBQSxHQUFFUyxFQUFDLEdBQUVILEVBQUEsQ0FBRXVELEtBQUEsQ0FBTXVHLEtBQUEsR0FBTSxHQUFHckssRUFBQSxNQUFNTyxFQUFBLENBQUV1RCxLQUFBLENBQU13RyxNQUFBLEdBQU8sR0FBR3JLLEVBQUEsTUFBTU0sRUFBQSxDQUFFdUQsS0FBQSxDQUFNb0csSUFBQSxHQUFLLEdBQUd6SCxJQUFBLENBQUswQyxLQUFBLENBQU1oRixFQUFDLE9BQU1DLEVBQUEsQ0FBRXVELFdBQUEsQ0FBWXBELEVBQUM7SUFBRSxNQUFNOEssRUFBQSxHQUFFOUssRUFBQSxDQUFFZ08sVUFBQSxDQUFXLElBQUk7SUFBRSxJQUFHLEtBQUttQixjQUFBLENBQWU1UCxFQUFBLEVBQUVDLEVBQUEsRUFBRXNMLEVBQUMsR0FBRTlLLEVBQUEsQ0FBRThKLEtBQUEsR0FBTSxLQUFHOUosRUFBQSxDQUFFK0osTUFBQSxHQUFPLEdBQUU7TUFBQyxNQUFNaEssRUFBQSxHQUFFQyxFQUFBLENBQUU0UCxTQUFBLENBQVU7UUFBRTFPLEVBQUEsR0FBRW5CLEVBQUEsQ0FBRWlPLFVBQUEsQ0FBVyxJQUFJO01BQUU5TSxFQUFBLENBQUUyTyxTQUFBLENBQVU3UCxFQUFBLEVBQUUsR0FBRSxDQUFDLEdBQUVrQixFQUFBLENBQUU0Tyx3QkFBQSxHQUF5QixhQUFZNU8sRUFBQSxDQUFFa08sU0FBQSxHQUFVLEtBQUt2QixrQkFBQSxDQUFtQnJPLEVBQUEsQ0FBRXVRLGFBQWEsR0FBRTdPLEVBQUEsQ0FBRThPLFFBQUEsQ0FBUyxHQUFFLEdBQUVoUSxFQUFBLENBQUU4SixLQUFBLEVBQU05SixFQUFBLENBQUUrSixNQUFNLEdBQUVqSyxFQUFBLENBQUVzRCxXQUFBLENBQVlyRCxFQUFDO0lBQUM7RUFBQztFQUFDa1Esa0JBQWtCMVEsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFRSxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLE1BQU1DLEVBQUEsR0FBRSxLQUFLdU8sYUFBQSxDQUFjO01BQUU7UUFBQ2pFLFdBQUEsRUFBWWpLO01BQUMsSUFBRSxLQUFLOEksZUFBQTtNQUFnQjZCLEVBQUEsR0FBRXJMLEVBQUEsR0FBRUssRUFBQTtJQUFFLElBQUlxTCxFQUFBLEdBQUVqSixJQUFBLENBQUtpRixHQUFBLENBQUlnQixDQUFBLENBQUUrSCxnQkFBQSxFQUFpQi9QLEVBQUEsRUFBRTJLLEVBQUM7TUFBRU0sRUFBQSxHQUFFLENBQUM7SUFBRSxJQUFHNUwsRUFBQSxDQUFFZ1AsUUFBQSxJQUFVaFAsRUFBQSxDQUFFaVAsTUFBQSxFQUFPO01BQUMsTUFBTTFPLEVBQUEsR0FBRVAsRUFBQSxDQUFFZ1AsUUFBQSxJQUFVO1FBQUd0TixFQUFBLEdBQUVuQixFQUFBLElBQUdQLEVBQUEsQ0FBRWlQLE1BQUEsSUFBUTFPLEVBQUEsR0FBRTtNQUFHb0wsRUFBQSxHQUFFakssRUFBQSxJQUFHLE1BQUlpSyxFQUFBLEdBQUVqSixJQUFBLENBQUtpTyxLQUFBLENBQU1oRixFQUFBLEdBQUVqSyxFQUFDLElBQUVBLEVBQUE7SUFBRTtJQUFDLElBQUcsTUFBSWlLLEVBQUEsRUFBRTtJQUFPLE1BQU1FLEVBQUEsR0FBRW5LLEVBQUEsSUFBRztRQUFDLElBQUdBLEVBQUEsR0FBRSxLQUFHQSxFQUFBLElBQUdvSyxDQUFBLEVBQUU7UUFBTyxJQUFHRixFQUFBLENBQUVsSyxFQUFBLEdBQUc7UUFBT2tLLEVBQUEsQ0FBRWxLLEVBQUEsSUFBRztRQUFHLE1BQU02SyxFQUFBLEdBQUU3SyxFQUFBLEdBQUVpSyxFQUFBO1FBQUUsSUFBSWMsRUFBQSxHQUFFL0osSUFBQSxDQUFLaUYsR0FBQSxDQUFJMkQsRUFBQSxHQUFFaUIsRUFBQSxFQUFFWixFQUFDO1FBQUUsSUFBRzNMLEVBQUEsQ0FBRWdQLFFBQUEsSUFBVWhQLEVBQUEsQ0FBRWlQLE1BQUEsRUFBTztVQUFDLE1BQU0xTyxFQUFBLEdBQUVQLEVBQUEsQ0FBRWdQLFFBQUEsSUFBVTtZQUFHNEIsRUFBQSxHQUFFclEsRUFBQSxJQUFHUCxFQUFBLENBQUVpUCxNQUFBLElBQVExTyxFQUFBLEdBQUU7VUFBR2tNLEVBQUEsR0FBRS9KLElBQUEsQ0FBS2lPLEtBQUEsQ0FBTWxFLEVBQUEsR0FBRW1FLEVBQUMsSUFBRUEsRUFBQTtRQUFDO1FBQUMsSUFBR25FLEVBQUEsSUFBRyxHQUFFO1FBQU8sTUFBTWpNLEVBQUEsR0FBRVQsRUFBQSxDQUFFOFEsR0FBQSxDQUFLdFEsRUFBQSxJQUFHO1VBQUMsTUFBTU0sRUFBQSxHQUFFNkIsSUFBQSxDQUFLaU8sS0FBQSxDQUFNcEUsRUFBQSxHQUFFakIsRUFBQSxHQUFFL0ssRUFBQSxDQUFFa0MsTUFBTTtZQUFFbU8sRUFBQSxHQUFFbE8sSUFBQSxDQUFLaU8sS0FBQSxFQUFPcEUsRUFBQSxHQUFFRSxFQUFBLElBQUduQixFQUFBLEdBQUUvSyxFQUFBLENBQUVrQyxNQUFNO1VBQUUsT0FBT2xDLEVBQUEsQ0FBRXVRLEtBQUEsQ0FBTWpRLEVBQUEsRUFBRStQLEVBQUM7UUFBQyxDQUFFO1FBQUUsS0FBS1Qsa0JBQUEsQ0FBbUIzUCxFQUFBLEVBQUVSLEVBQUEsRUFBRXlNLEVBQUEsRUFBRXZNLEVBQUEsRUFBRXFNLEVBQUEsRUFBRW5NLEVBQUEsRUFBRUMsRUFBQztNQUFDO01BQUV5TCxDQUFBLEdBQUVwSixJQUFBLENBQUtxTyxJQUFBLENBQUt6RixFQUFBLEdBQUVLLEVBQUM7SUFBRSxJQUFHLENBQUMsS0FBSzlDLFlBQUEsRUFBYTtNQUFDLFNBQVF0SSxFQUFBLEdBQUUsR0FBRUEsRUFBQSxHQUFFdUwsQ0FBQSxFQUFFdkwsRUFBQSxJQUFJc0wsRUFBQSxDQUFFdEwsRUFBQztNQUFFO0lBQU07SUFBQyxNQUFNMEwsQ0FBQSxHQUFFLEtBQUt4QyxlQUFBLENBQWdCaUIsVUFBQSxHQUFXWSxFQUFBO01BQUVrQixDQUFBLEdBQUU5SixJQUFBLENBQUtpTyxLQUFBLENBQU0xRSxDQUFBLEdBQUVILENBQUM7SUFBRSxJQUFHRCxFQUFBLENBQUVXLENBQUEsR0FBRSxDQUFDLEdBQUVYLEVBQUEsQ0FBRVcsQ0FBQyxHQUFFWCxFQUFBLENBQUVXLENBQUEsR0FBRSxDQUFDLEdBQUVWLENBQUEsR0FBRSxHQUFFO01BQUMsTUFBTXZMLEVBQUEsR0FBRSxLQUFLZSxFQUFBLENBQUcsVUFBVSxNQUFJO1FBQUMsTUFBSztZQUFDb0osVUFBQSxFQUFXaEs7VUFBQyxJQUFFLEtBQUsrSSxlQUFBO1VBQWdCNUksRUFBQSxHQUFFNkIsSUFBQSxDQUFLaU8sS0FBQSxDQUFNalEsRUFBQSxHQUFFNEssRUFBQSxHQUFFUSxDQUFDO1FBQUVySSxNQUFBLENBQU91TixJQUFBLENBQUtwRixFQUFDLEVBQUVuSixNQUFBLEdBQU9rRyxDQUFBLENBQUVzSSxTQUFBLEtBQVk3USxFQUFBLENBQUV1TixTQUFBLEdBQVUsSUFBR3ROLEVBQUEsQ0FBRXNOLFNBQUEsR0FBVSxJQUFHL0IsRUFBQSxHQUFFLENBQUMsSUFBR0MsRUFBQSxDQUFFaEwsRUFBQSxHQUFFLENBQUMsR0FBRWdMLEVBQUEsQ0FBRWhMLEVBQUMsR0FBRWdMLEVBQUEsQ0FBRWhMLEVBQUEsR0FBRSxDQUFDO01BQUMsQ0FBRTtNQUFFLEtBQUtzSSxtQkFBQSxDQUFvQmdDLElBQUEsQ0FBSzVLLEVBQUM7SUFBQztFQUFDO0VBQUMyUSxjQUFjblIsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsSUFBRztRQUFDb04sT0FBQSxFQUFRbE47TUFBQyxJQUFFSixFQUFBO01BQUVLLEVBQUEsR0FBRSxVQUFTRSxFQUFBLEVBQUVNLEVBQUEsRUFBRTtRQUFDLElBQUlhLEVBQUEsR0FBRSxDQUFDO1FBQUUsU0FBUXFELEVBQUEsSUFBS3hFLEVBQUEsRUFBRWtELE1BQUEsQ0FBT1AsU0FBQSxDQUFVaU8sY0FBQSxDQUFlQyxJQUFBLENBQUs3USxFQUFBLEVBQUV3RSxFQUFDLEtBQUdsRSxFQUFBLENBQUV3USxPQUFBLENBQVF0TSxFQUFDLElBQUUsTUFBSXJELEVBQUEsQ0FBRXFELEVBQUEsSUFBR3hFLEVBQUEsQ0FBRXdFLEVBQUE7UUFBSSxJQUFHLFFBQU14RSxFQUFBLElBQUcsY0FBWSxPQUFPa0QsTUFBQSxDQUFPNk4scUJBQUEsRUFBc0I7VUFBQyxJQUFJck0sRUFBQSxHQUFFO1VBQUUsS0FBSUYsRUFBQSxHQUFFdEIsTUFBQSxDQUFPNk4scUJBQUEsQ0FBc0IvUSxFQUFDLEdBQUUwRSxFQUFBLEdBQUVGLEVBQUEsQ0FBRXRDLE1BQUEsRUFBT3dDLEVBQUEsSUFBSXBFLEVBQUEsQ0FBRXdRLE9BQUEsQ0FBUXRNLEVBQUEsQ0FBRUUsRUFBQSxDQUFFLElBQUUsS0FBR3hCLE1BQUEsQ0FBT1AsU0FBQSxDQUFVcU8sb0JBQUEsQ0FBcUJILElBQUEsQ0FBSzdRLEVBQUEsRUFBRXdFLEVBQUEsQ0FBRUUsRUFBQSxDQUFFLE1BQUl2RCxFQUFBLENBQUVxRCxFQUFBLENBQUVFLEVBQUEsS0FBSTFFLEVBQUEsQ0FBRXdFLEVBQUEsQ0FBRUUsRUFBQTtRQUFJO1FBQUMsT0FBT3ZELEVBQUE7TUFBQyxFQUFFMUIsRUFBQSxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQUUsTUFBTU0sRUFBQSxHQUFFZ0QsUUFBQSxDQUFTRSxhQUFBLENBQWMsS0FBSztNQUFFN0MsRUFBQSxHQUFFLEtBQUt1TSxTQUFBLENBQVU3TSxFQUFBLENBQUVrSyxNQUFBLEVBQU9sSyxFQUFBLENBQUV1TixhQUFhO0lBQUV0TixFQUFBLENBQUV5RCxLQUFBLENBQU13RyxNQUFBLEdBQU8sR0FBRzVKLEVBQUEsTUFBTVAsRUFBQSxJQUFHRixFQUFBLEdBQUUsTUFBSUksRUFBQSxDQUFFeUQsS0FBQSxDQUFNeU4sU0FBQSxHQUFVLElBQUk3USxFQUFBLE9BQU8sS0FBS2lKLGFBQUEsQ0FBYzdGLEtBQUEsQ0FBTTBOLFNBQUEsR0FBVSxHQUFHOVEsRUFBQSxNQUFNLEtBQUtpSixhQUFBLENBQWNoRyxXQUFBLENBQVl0RCxFQUFDO0lBQUUsTUFBTUUsRUFBQSxHQUFFRixFQUFBLENBQUU4UCxTQUFBLENBQVU7SUFBRSxLQUFLdkcsZUFBQSxDQUFnQmpHLFdBQUEsQ0FBWXBELEVBQUMsR0FBRSxLQUFLaVEsaUJBQUEsQ0FBa0IxUSxFQUFBLEVBQUVNLEVBQUEsRUFBRUosRUFBQSxFQUFFVSxFQUFBLEVBQUVMLEVBQUEsRUFBRUUsRUFBQztFQUFDO0VBQUNrUixPQUFPMVIsRUFBQSxFQUFFO0lBQUMsT0FBT0YsQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxJQUFJQyxFQUFBO01BQUUsS0FBSzZJLFFBQUEsQ0FBUzVHLE9BQUEsQ0FBU3pCLEVBQUEsSUFBR0EsRUFBQSxDQUFFLENBQUUsR0FBRSxLQUFLcUksUUFBQSxHQUFTLEVBQUMsRUFBRSxLQUFLZ0IsYUFBQSxDQUFjK0QsU0FBQSxHQUFVLElBQUcsS0FBSzlELGVBQUEsQ0FBZ0I4RCxTQUFBLEdBQVUsSUFBRyxRQUFNLEtBQUt2RSxPQUFBLENBQVFrQixLQUFBLEtBQVEsS0FBS2IsZUFBQSxDQUFnQjFGLEtBQUEsQ0FBTXVHLEtBQUEsR0FBTSxZQUFVLE9BQU8sS0FBS2xCLE9BQUEsQ0FBUWtCLEtBQUEsR0FBTSxHQUFHLEtBQUtsQixPQUFBLENBQVFrQixLQUFBLE9BQVUsS0FBS2xCLE9BQUEsQ0FBUWtCLEtBQUE7TUFBTyxNQUFNckssRUFBQSxHQUFFLEtBQUs0TyxhQUFBLENBQWM7UUFBRTNPLEVBQUEsR0FBRSxLQUFLdUosZUFBQSxDQUFnQm1CLFdBQUE7UUFBWXhLLEVBQUEsR0FBRXNDLElBQUEsQ0FBS3FPLElBQUEsQ0FBSy9RLEVBQUEsQ0FBRTZDLFFBQUEsSUFBVSxLQUFLdUcsT0FBQSxDQUFRdUksV0FBQSxJQUFhLEVBQUU7TUFBRSxLQUFLOUksWUFBQSxHQUFhekksRUFBQSxHQUFFRixFQUFBO01BQUUsTUFBTUcsRUFBQSxHQUFFLEtBQUsrSSxPQUFBLENBQVF3SSxVQUFBLElBQVksQ0FBQyxLQUFLL0ksWUFBQTtRQUFhdkksRUFBQSxJQUFHRCxFQUFBLEdBQUVILEVBQUEsR0FBRUUsRUFBQSxJQUFHSCxFQUFBO01BQUUsSUFBRyxLQUFLMEosT0FBQSxDQUFRNUYsS0FBQSxDQUFNdUcsS0FBQSxHQUFNakssRUFBQSxHQUFFLFNBQU8sR0FBR0QsRUFBQSxNQUFNLEtBQUtxSixlQUFBLENBQWdCMUYsS0FBQSxDQUFNOE4sU0FBQSxHQUFVLEtBQUtoSixZQUFBLEdBQWEsU0FBTyxVQUFTLEtBQUtZLGVBQUEsQ0FBZ0JxSSxTQUFBLENBQVVDLE1BQUEsQ0FBTyxlQUFjLENBQUMsQ0FBQyxLQUFLM0ksT0FBQSxDQUFRNEksYUFBYSxHQUFFLEtBQUtsSSxNQUFBLENBQU8vRixLQUFBLENBQU1rTyxlQUFBLEdBQWdCLEdBQUcsS0FBSzdJLE9BQUEsQ0FBUThJLFdBQUEsSUFBYSxLQUFLOUksT0FBQSxDQUFRbUgsYUFBQSxJQUFnQixLQUFLekcsTUFBQSxDQUFPL0YsS0FBQSxDQUFNdUcsS0FBQSxHQUFNLEdBQUcsS0FBS2xCLE9BQUEsQ0FBUStJLFdBQUEsTUFBZ0IsS0FBS3JKLFNBQUEsR0FBVTlJLEVBQUEsRUFBRSxLQUFLK0IsSUFBQSxDQUFLLFFBQVEsR0FBRSxLQUFLcUgsT0FBQSxDQUFRd0UsYUFBQSxFQUFjLFNBQVFsTSxFQUFBLEdBQUUsR0FBRUEsRUFBQSxHQUFFMUIsRUFBQSxDQUFFOEMsZ0JBQUEsRUFBaUJwQixFQUFBLElBQUk7UUFBQyxNQUFNcUQsRUFBQSxHQUFFdEIsTUFBQSxDQUFPSyxNQUFBLENBQU9MLE1BQUEsQ0FBT0ssTUFBQSxDQUFPLENBQUMsR0FBRSxLQUFLc0YsT0FBTyxHQUFFLFVBQVFySixFQUFBLEdBQUUsS0FBS3FKLE9BQUEsQ0FBUXdFLGFBQUEsS0FBZ0IsV0FBUzdOLEVBQUEsR0FBRSxTQUFPQSxFQUFBLENBQUUyQixFQUFBLENBQUU7UUFBRSxLQUFLd1AsYUFBQSxDQUFjLENBQUNsUixFQUFBLENBQUUrQyxjQUFBLENBQWVyQixFQUFDLENBQUMsR0FBRXFELEVBQUEsRUFBRXpFLEVBQUEsRUFBRW9CLEVBQUM7TUFBQyxPQUFLO1FBQUMsTUFBTW5CLEVBQUEsR0FBRSxDQUFDUCxFQUFBLENBQUUrQyxjQUFBLENBQWUsQ0FBQyxDQUFDO1FBQUUvQyxFQUFBLENBQUU4QyxnQkFBQSxHQUFpQixLQUFHdkMsRUFBQSxDQUFFNEssSUFBQSxDQUFLbkwsRUFBQSxDQUFFK0MsY0FBQSxDQUFlLENBQUMsQ0FBQyxHQUFFLEtBQUttTyxhQUFBLENBQWMzUSxFQUFBLEVBQUUsS0FBSzZJLE9BQUEsRUFBUTlJLEVBQUEsRUFBRSxDQUFDO01BQUM7TUFBQ0gsT0FBQSxDQUFRaVMsT0FBQSxDQUFRLEVBQUVwUixJQUFBLENBQU0sTUFBSSxLQUFLZSxJQUFBLENBQUssVUFBVSxDQUFFO0lBQUMsQ0FBRTtFQUFDO0VBQUNtSixTQUFBLEVBQVU7SUFBQyxJQUFHLEtBQUsvQixtQkFBQSxDQUFvQm5ILE9BQUEsQ0FBU3pCLEVBQUEsSUFBR0EsRUFBQSxDQUFFLENBQUUsR0FBRSxLQUFLNEksbUJBQUEsR0FBb0IsRUFBQyxFQUFFLENBQUMsS0FBS0wsU0FBQSxFQUFVO0lBQU8sTUFBSztRQUFDNkIsV0FBQSxFQUFZNUs7TUFBQyxJQUFFLEtBQUswSixlQUFBO01BQWdCO1FBQUM0SSxLQUFBLEVBQU1yUztNQUFDLElBQUUsS0FBSzZKLGVBQUEsQ0FBZ0JJLHFCQUFBLENBQXNCO0lBQUUsSUFBRyxLQUFLeUgsTUFBQSxDQUFPLEtBQUs1SSxTQUFTLEdBQUUsS0FBS0QsWUFBQSxJQUFjOUksRUFBQSxLQUFJLEtBQUswSixlQUFBLENBQWdCa0IsV0FBQSxFQUFZO01BQUMsTUFBSztRQUFDMEgsS0FBQSxFQUFNOVI7TUFBQyxJQUFFLEtBQUtzSixlQUFBLENBQWdCSSxxQkFBQSxDQUFzQjtNQUFFLElBQUloSyxFQUFBLEdBQUVNLEVBQUEsR0FBRVAsRUFBQTtNQUFFQyxFQUFBLElBQUcsR0FBRUEsRUFBQSxHQUFFQSxFQUFBLEdBQUUsSUFBRXlDLElBQUEsQ0FBS2lPLEtBQUEsQ0FBTTFRLEVBQUMsSUFBRXlDLElBQUEsQ0FBS3FPLElBQUEsQ0FBSzlRLEVBQUMsR0FBRUEsRUFBQSxJQUFHLEdBQUUsS0FBS3dKLGVBQUEsQ0FBZ0JpQixVQUFBLElBQVl6SyxFQUFBO0lBQUM7RUFBQztFQUFDcVMsS0FBS3ZTLEVBQUEsRUFBRTtJQUFDLEtBQUtxSixPQUFBLENBQVF1SSxXQUFBLEdBQVk1UixFQUFBLEVBQUUsS0FBS21MLFFBQUEsQ0FBUztFQUFDO0VBQUNxSCxlQUFleFMsRUFBQSxFQUFFQyxFQUFBLEdBQUUsT0FBRztJQUFDLE1BQUs7UUFBQzBLLFVBQUEsRUFBV3pLLEVBQUE7UUFBRTBLLFdBQUEsRUFBWXpLLEVBQUE7UUFBRTBLLFdBQUEsRUFBWXhLO01BQUMsSUFBRSxLQUFLcUosZUFBQTtNQUFnQnBKLEVBQUEsR0FBRU4sRUFBQSxHQUFFRyxFQUFBO01BQUVJLEVBQUEsR0FBRUwsRUFBQTtNQUFFVSxFQUFBLEdBQUVWLEVBQUEsR0FBRUcsRUFBQTtNQUFFSSxFQUFBLEdBQUVKLEVBQUEsR0FBRTtJQUFFLElBQUcsS0FBSzZJLFVBQUEsRUFBVztNQUFDLE1BQU0xSSxFQUFBLEdBQUU7TUFBR0YsRUFBQSxHQUFFRSxFQUFBLEdBQUVJLEVBQUEsR0FBRSxLQUFLOEksZUFBQSxDQUFnQmlCLFVBQUEsSUFBWW5LLEVBQUEsR0FBRUYsRUFBQSxHQUFFRSxFQUFBLEdBQUVELEVBQUEsS0FBSSxLQUFLbUosZUFBQSxDQUFnQmlCLFVBQUEsSUFBWW5LLEVBQUE7SUFBRSxPQUFLO01BQUMsQ0FBQ0YsRUFBQSxHQUFFQyxFQUFBLElBQUdELEVBQUEsR0FBRU0sRUFBQSxNQUFLLEtBQUs4SSxlQUFBLENBQWdCaUIsVUFBQSxHQUFXckssRUFBQSxJQUFHLEtBQUsrSSxPQUFBLENBQVFvSixVQUFBLEdBQVdoUyxFQUFBLEdBQUU7TUFBSSxNQUFNRCxFQUFBLEdBQUVGLEVBQUEsR0FBRUosRUFBQSxHQUFFTyxFQUFBO01BQUVSLEVBQUEsSUFBRyxLQUFLb0osT0FBQSxDQUFRb0osVUFBQSxJQUFZalMsRUFBQSxHQUFFLE1BQUksS0FBS2tKLGVBQUEsQ0FBZ0JpQixVQUFBLElBQVloSSxJQUFBLENBQUtpRixHQUFBLENBQUlwSCxFQUFBLEVBQUUsRUFBRTtJQUFFO0lBQUM7TUFBQyxNQUFNQSxFQUFBLEdBQUUsS0FBS2tKLGVBQUEsQ0FBZ0JpQixVQUFBO1FBQVc3SixFQUFBLEdBQUVOLEVBQUEsR0FBRUwsRUFBQTtRQUFFd0IsRUFBQSxJQUFHbkIsRUFBQSxHQUFFSCxFQUFBLElBQUdGLEVBQUE7TUFBRSxLQUFLNkIsSUFBQSxDQUFLLFVBQVNsQixFQUFBLEVBQUVhLEVBQUEsRUFBRW5CLEVBQUEsRUFBRUEsRUFBQSxHQUFFSCxFQUFDO0lBQUM7RUFBQztFQUFDcVMsZUFBZTFTLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsSUFBR21OLEtBQUEsQ0FBTXBOLEVBQUMsR0FBRTtJQUFPLE1BQU1FLEVBQUEsR0FBRSxNQUFJRixFQUFBO0lBQUUsS0FBSzZKLGFBQUEsQ0FBYzdGLEtBQUEsQ0FBTTJPLFFBQUEsR0FBUyxXQUFXelMsRUFBQSw2QkFBOEJBLEVBQUEsV0FBVyxLQUFLNEosZUFBQSxDQUFnQjlGLEtBQUEsQ0FBTXVHLEtBQUEsR0FBTSxHQUFHckssRUFBQSxLQUFLLEtBQUs2SixNQUFBLENBQU8vRixLQUFBLENBQU1vRyxJQUFBLEdBQUssR0FBR2xLLEVBQUEsS0FBSyxLQUFLNkosTUFBQSxDQUFPL0YsS0FBQSxDQUFNNE8sU0FBQSxHQUFVLGVBQWUsUUFBTWpRLElBQUEsQ0FBSzBDLEtBQUEsQ0FBTW5GLEVBQUMsSUFBRSxLQUFLbUosT0FBQSxDQUFRK0ksV0FBQSxHQUFZLFFBQU8sS0FBS3RKLFlBQUEsSUFBYyxLQUFLTyxPQUFBLENBQVF3SixVQUFBLElBQVksS0FBS0wsY0FBQSxDQUFleFMsRUFBQSxFQUFFQyxFQUFDO0VBQUM7RUFBQzZTLFlBQVk3UyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsT0FBT0osQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxNQUFNQyxFQUFBLEdBQUUsS0FBSzZKLGFBQUEsQ0FBY2tKLGdCQUFBLENBQWlCLFFBQVE7TUFBRSxJQUFHLENBQUMvUyxFQUFBLENBQUUwQyxNQUFBLEVBQU8sTUFBTSxJQUFJa0MsS0FBQSxDQUFNLGtCQUFrQjtNQUFFLElBQUcsY0FBWXpFLEVBQUEsRUFBRTtRQUFDLE1BQU02RSxFQUFBLEdBQUV1SixLQUFBLENBQU0yQixJQUFBLENBQUtsUSxFQUFDLEVBQUU4USxHQUFBLENBQUt0USxFQUFBLElBQUdBLEVBQUEsQ0FBRXdTLFNBQUEsQ0FBVS9TLEVBQUEsRUFBRUMsRUFBQyxDQUFFO1FBQUUsT0FBT0UsT0FBQSxDQUFRaVMsT0FBQSxDQUFRck4sRUFBQztNQUFDO01BQUMsT0FBTzVFLE9BQUEsQ0FBUTZTLEdBQUEsQ0FBSTFFLEtBQUEsQ0FBTTJCLElBQUEsQ0FBS2xRLEVBQUMsRUFBRThRLEdBQUEsQ0FBS3RRLEVBQUEsSUFBRyxJQUFJSixPQUFBLENBQVMsQ0FBQzRFLEVBQUEsRUFBRTNFLEVBQUEsS0FBSTtRQUFDRyxFQUFBLENBQUUwUyxNQUFBLENBQVF2UyxFQUFBLElBQUc7VUFBQ0EsRUFBQSxHQUFFcUUsRUFBQSxDQUFFckUsRUFBQyxJQUFFTixFQUFBLENBQUUsSUFBSXVFLEtBQUEsQ0FBTSx3QkFBd0IsQ0FBQztRQUFDLEdBQUczRSxFQUFBLEVBQUVDLEVBQUM7TUFBQyxDQUFFLENBQUUsQ0FBQztJQUFDLENBQUU7RUFBQztBQUFDO0FBQUMwSSxDQUFBLENBQUUrSCxnQkFBQSxHQUFpQixLQUFJL0gsQ0FBQSxDQUFFc0ksU0FBQSxHQUFVO0FBQUcsSUFBTWlDLENBQUEsR0FBTixjQUFnQi9SLENBQUEsQ0FBQztFQUFDQyxZQUFBLEVBQWE7SUFBQyxNQUFNLEdBQUcrUixTQUFTLEdBQUUsS0FBS0MsV0FBQSxHQUFZLE1BQUksQ0FBQztFQUFDO0VBQUNDLE1BQUEsRUFBTztJQUFDLEtBQUtELFdBQUEsR0FBWSxLQUFLOVIsRUFBQSxDQUFHLFFBQVEsTUFBSTtNQUFDZ1MscUJBQUEsQ0FBdUIsTUFBSTtRQUFDLEtBQUt2UixJQUFBLENBQUssTUFBTTtNQUFDLENBQUU7SUFBQyxDQUFFLEdBQUUsS0FBS0EsSUFBQSxDQUFLLE1BQU07RUFBQztFQUFDd1IsS0FBQSxFQUFNO0lBQUMsS0FBS0gsV0FBQSxDQUFZO0VBQUM7RUFBQ3JNLFFBQUEsRUFBUztJQUFDLEtBQUtxTSxXQUFBLENBQVk7RUFBQztBQUFDO0FBQUMsSUFBTUksQ0FBQSxHQUFOLGNBQWdCclMsQ0FBQSxDQUFDO0VBQUNDLFlBQVlyQixFQUFBLEdBQUUsSUFBSW1DLFlBQUEsSUFBYTtJQUFDLE1BQU0sR0FBRSxLQUFLdVIsVUFBQSxHQUFXLE1BQUssS0FBS0MsYUFBQSxHQUFjLEdBQUUsS0FBS0MsY0FBQSxHQUFlLEdBQUUsS0FBS0MsTUFBQSxHQUFPLE9BQUcsS0FBS0MsYUFBQSxHQUFjLEdBQUUsS0FBS0MsU0FBQSxHQUFVLFFBQU8sS0FBS0MsTUFBQSxHQUFPLE1BQUssS0FBSzVOLFVBQUEsR0FBVyxJQUFHLEtBQUttQixNQUFBLEdBQU8sTUFBRyxLQUFLME0sV0FBQSxHQUFZLE1BQUssS0FBSzFMLE9BQUEsR0FBUSxPQUFHLEtBQUt6QyxRQUFBLEdBQVMsT0FBRyxLQUFLRyxnQkFBQSxHQUFpQixLQUFLMUUsRUFBQSxFQUFHLEtBQUsyRSxtQkFBQSxHQUFvQixLQUFLckUsRUFBQSxFQUFHLEtBQUtxUyxZQUFBLEdBQWFsVSxFQUFBLEVBQUUsS0FBS21VLFFBQUEsR0FBUyxLQUFLRCxZQUFBLENBQWFFLFVBQUEsQ0FBVyxHQUFFLEtBQUtELFFBQUEsQ0FBU0UsT0FBQSxDQUFRLEtBQUtILFlBQUEsQ0FBYUksV0FBVztFQUFDO0VBQUNuTixLQUFBLEVBQU07SUFBQyxPQUFPcEgsQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVcsQ0FBQyxDQUFFO0VBQUM7RUFBQyxJQUFJc0csSUFBQSxFQUFLO0lBQUMsT0FBTyxLQUFLRCxVQUFBO0VBQVU7RUFBQyxJQUFJQyxJQUFJckcsRUFBQSxFQUFFO0lBQUMsSUFBRyxLQUFLb0csVUFBQSxHQUFXcEcsRUFBQSxFQUFFLEtBQUsrVCxTQUFBLEdBQVUsUUFBTyxDQUFDL1QsRUFBQSxFQUFFLE9BQU8sS0FBS2dVLE1BQUEsR0FBTyxNQUFLLEtBQUssS0FBS2hTLElBQUEsQ0FBSyxTQUFTO0lBQUUwQyxLQUFBLENBQU0xRSxFQUFDLEVBQUVpQixJQUFBLENBQU1oQixFQUFBLElBQUc7TUFBQyxJQUFHQSxFQUFBLENBQUUwRSxNQUFBLElBQVEsS0FBSSxNQUFNLElBQUlDLEtBQUEsQ0FBTSxtQkFBbUI1RSxFQUFBLEtBQU1DLEVBQUEsQ0FBRTBFLE1BQUEsS0FBVzFFLEVBQUEsQ0FBRTRFLFVBQUEsR0FBYTtNQUFFLE9BQU81RSxFQUFBLENBQUVzVSxXQUFBLENBQVk7SUFBQyxDQUFFLEVBQUV0VCxJQUFBLENBQU1oQixFQUFBLElBQUcsS0FBS21HLFVBQUEsS0FBYXBHLEVBQUEsR0FBRSxPQUFLLEtBQUtrVSxZQUFBLENBQWE3UixlQUFBLENBQWdCcEMsRUFBQyxDQUFFLEVBQUVnQixJQUFBLENBQU1oQixFQUFBLElBQUc7TUFBQyxLQUFLbUcsVUFBQSxLQUFhcEcsRUFBQSxLQUFJLEtBQUtnVSxNQUFBLEdBQU8vVCxFQUFBLEVBQUUsS0FBSytCLElBQUEsQ0FBSyxnQkFBZ0IsR0FBRSxLQUFLQSxJQUFBLENBQUssU0FBUyxHQUFFLEtBQUs4RCxRQUFBLElBQVUsS0FBS3VCLElBQUEsQ0FBSztJQUFFLENBQUU7RUFBQztFQUFDbU4sTUFBQSxFQUFPO0lBQUMsSUFBSXhVLEVBQUE7SUFBRSxJQUFHLENBQUMsS0FBS3VILE1BQUEsRUFBTztJQUFPLEtBQUtBLE1BQUEsR0FBTyxPQUFHLFVBQVF2SCxFQUFBLEdBQUUsS0FBSzBULFVBQUEsS0FBYSxXQUFTMVQsRUFBQSxJQUFHQSxFQUFBLENBQUVvTyxVQUFBLENBQVcsR0FBRSxLQUFLc0YsVUFBQSxHQUFXLEtBQUtRLFlBQUEsQ0FBYU8sa0JBQUEsQ0FBbUIsR0FBRSxLQUFLVCxNQUFBLEtBQVMsS0FBS04sVUFBQSxDQUFXTSxNQUFBLEdBQU8sS0FBS0EsTUFBQSxHQUFRLEtBQUtOLFVBQUEsQ0FBVzNOLFlBQUEsQ0FBYS9FLEtBQUEsR0FBTSxLQUFLOFMsYUFBQSxFQUFjLEtBQUtKLFVBQUEsQ0FBV1csT0FBQSxDQUFRLEtBQUtGLFFBQVE7SUFBRSxJQUFJbFUsRUFBQSxHQUFFLEtBQUsyVCxjQUFBLEdBQWUsS0FBS0UsYUFBQTtJQUFjLENBQUM3VCxFQUFBLElBQUcsS0FBSzZDLFFBQUEsSUFBVTdDLEVBQUEsR0FBRSxPQUFLQSxFQUFBLEdBQUUsR0FBRSxLQUFLMlQsY0FBQSxHQUFlLElBQUcsS0FBS0YsVUFBQSxDQUFXSixLQUFBLENBQU0sS0FBS1ksWUFBQSxDQUFheE0sV0FBQSxFQUFZekgsRUFBQyxHQUFFLEtBQUswVCxhQUFBLEdBQWMsS0FBS08sWUFBQSxDQUFheE0sV0FBQSxFQUFZLEtBQUtnTSxVQUFBLENBQVdnQixPQUFBLEdBQVEsTUFBSTtNQUFDLEtBQUtoTixXQUFBLElBQWEsS0FBSzVFLFFBQUEsS0FBVyxLQUFLbUUsS0FBQSxDQUFNLEdBQUUsS0FBS2pGLElBQUEsQ0FBSyxPQUFPO0lBQUU7RUFBQztFQUFDMlMsT0FBQSxFQUFRO0lBQUMsSUFBSTNVLEVBQUE7SUFBRSxLQUFLdUgsTUFBQSxHQUFPLE1BQUcsVUFBUXZILEVBQUEsR0FBRSxLQUFLMFQsVUFBQSxLQUFhLFdBQVMxVCxFQUFBLElBQUdBLEVBQUEsQ0FBRXdULElBQUEsQ0FBSyxHQUFFLEtBQUtJLGNBQUEsSUFBZ0IsS0FBS00sWUFBQSxDQUFheE0sV0FBQSxHQUFZLEtBQUtpTSxhQUFBO0VBQWE7RUFBQ3RNLEtBQUEsRUFBTTtJQUFDLE9BQU90SCxDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztNQUFDLEtBQUt3SCxNQUFBLEtBQVMsS0FBS2lOLEtBQUEsQ0FBTSxHQUFFLEtBQUt4UyxJQUFBLENBQUssTUFBTTtJQUFFLENBQUU7RUFBQztFQUFDaUYsTUFBQSxFQUFPO0lBQUMsS0FBS00sTUFBQSxLQUFTLEtBQUtvTixNQUFBLENBQU8sR0FBRSxLQUFLM1MsSUFBQSxDQUFLLE9BQU87RUFBRTtFQUFDNFMsT0FBTzVVLEVBQUEsRUFBRTtJQUFDLE1BQU1DLEVBQUEsR0FBRUQsRUFBQSxHQUFFLEtBQUswSCxXQUFBO01BQVl4SCxFQUFBLEdBQUUsS0FBS3dULFVBQUE7SUFBVyxRQUFNeFQsRUFBQSxJQUFHQSxFQUFBLENBQUVzVCxJQUFBLENBQUssS0FBS1UsWUFBQSxDQUFheE0sV0FBQSxHQUFZekgsRUFBQyxHQUFFLFFBQU1DLEVBQUEsSUFBR0EsRUFBQSxDQUFFK0YsZ0JBQUEsQ0FBaUIsU0FBUyxNQUFJO01BQUMvRixFQUFBLEtBQUksS0FBS3dULFVBQUEsS0FBYSxLQUFLQSxVQUFBLEdBQVcsTUFBSyxLQUFLek0sS0FBQSxDQUFNO0lBQUUsR0FBRztNQUFDdkYsSUFBQSxFQUFLO0lBQUUsQ0FBQztFQUFDO0VBQUNpSCxVQUFVMUksRUFBQSxFQUFFO0lBQUMsT0FBT0YsQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxPQUFPLEtBQUttVSxZQUFBLENBQWF2TCxTQUFBLENBQVUxSSxFQUFDO0lBQUMsQ0FBRTtFQUFDO0VBQUMsSUFBSThGLGFBQUEsRUFBYztJQUFDLE9BQU8sS0FBSytOLGFBQUE7RUFBYTtFQUFDLElBQUkvTixhQUFhL0YsRUFBQSxFQUFFO0lBQUMsS0FBSzhULGFBQUEsR0FBYzlULEVBQUEsRUFBRSxLQUFLMFQsVUFBQSxLQUFhLEtBQUtBLFVBQUEsQ0FBVzNOLFlBQUEsQ0FBYS9FLEtBQUEsR0FBTWhCLEVBQUE7RUFBRTtFQUFDLElBQUkwSCxZQUFBLEVBQWE7SUFBQyxRQUFPLEtBQUtILE1BQUEsR0FBTyxLQUFLcU0sY0FBQSxHQUFlLEtBQUtBLGNBQUEsSUFBZ0IsS0FBS00sWUFBQSxDQUFheE0sV0FBQSxHQUFZLEtBQUtpTSxhQUFBLEtBQWdCLEtBQUtHLGFBQUE7RUFBYTtFQUFDLElBQUlwTSxZQUFZMUgsRUFBQSxFQUFFO0lBQUMsTUFBTUMsRUFBQSxHQUFFLENBQUMsS0FBS3NILE1BQUE7SUFBT3RILEVBQUEsSUFBRyxLQUFLMFUsTUFBQSxDQUFPLEdBQUUsS0FBS2YsY0FBQSxHQUFlNVQsRUFBQSxHQUFFLEtBQUs4VCxhQUFBLEVBQWM3VCxFQUFBLElBQUcsS0FBS3VVLEtBQUEsQ0FBTSxHQUFFLEtBQUt4UyxJQUFBLENBQUssU0FBUyxHQUFFLEtBQUtBLElBQUEsQ0FBSyxZQUFZO0VBQUM7RUFBQyxJQUFJYyxTQUFBLEVBQVU7SUFBQyxJQUFJOUMsRUFBQSxFQUFFQyxFQUFBO0lBQUUsT0FBTyxVQUFRRCxFQUFBLEdBQUUsS0FBSytULFNBQUEsS0FBWSxXQUFTL1QsRUFBQSxHQUFFQSxFQUFBLElBQUcsVUFBUUMsRUFBQSxHQUFFLEtBQUsrVCxNQUFBLEtBQVMsV0FBUy9ULEVBQUEsR0FBRSxTQUFPQSxFQUFBLENBQUU2QyxRQUFBLEtBQVc7RUFBQztFQUFDLElBQUlBLFNBQVM5QyxFQUFBLEVBQUU7SUFBQyxLQUFLK1QsU0FBQSxHQUFVL1QsRUFBQTtFQUFDO0VBQUMsSUFBSWdJLE9BQUEsRUFBUTtJQUFDLE9BQU8sS0FBS21NLFFBQUEsQ0FBU1UsSUFBQSxDQUFLN1QsS0FBQTtFQUFLO0VBQUMsSUFBSWdILE9BQU9oSSxFQUFBLEVBQUU7SUFBQyxLQUFLbVUsUUFBQSxDQUFTVSxJQUFBLENBQUs3VCxLQUFBLEdBQU1oQixFQUFBLEVBQUUsS0FBS2dDLElBQUEsQ0FBSyxjQUFjO0VBQUM7RUFBQyxJQUFJbUcsTUFBQSxFQUFPO0lBQUMsT0FBTyxLQUFLMEwsTUFBQTtFQUFNO0VBQUMsSUFBSTFMLE1BQU1uSSxFQUFBLEVBQUU7SUFBQyxLQUFLNlQsTUFBQSxLQUFTN1QsRUFBQSxLQUFJLEtBQUs2VCxNQUFBLEdBQU83VCxFQUFBLEVBQUUsS0FBSzZULE1BQUEsR0FBTyxLQUFLTSxRQUFBLENBQVMvRixVQUFBLENBQVcsSUFBRSxLQUFLK0YsUUFBQSxDQUFTRSxPQUFBLENBQVEsS0FBS0gsWUFBQSxDQUFhSSxXQUFXO0VBQUU7RUFBQzVOLFlBQVkxRyxFQUFBLEVBQUU7SUFBQyxPQUFNLG1CQUFtQjhVLElBQUEsQ0FBSzlVLEVBQUM7RUFBQztFQUFDK1UsWUFBQSxFQUFhO0lBQUMsT0FBTyxLQUFLWixRQUFBO0VBQVE7RUFBQ25SLGVBQUEsRUFBZ0I7SUFBQyxNQUFNaEQsRUFBQSxHQUFFLEVBQUM7SUFBRSxJQUFHLENBQUMsS0FBS2dVLE1BQUEsRUFBTyxPQUFPaFUsRUFBQTtJQUFFLE1BQU1DLEVBQUEsR0FBRSxLQUFLK1QsTUFBQSxDQUFPalIsZ0JBQUE7SUFBaUIsU0FBUTdDLEVBQUEsR0FBRSxHQUFFQSxFQUFBLEdBQUVELEVBQUEsRUFBRUMsRUFBQSxJQUFJRixFQUFBLENBQUVvTCxJQUFBLENBQUssS0FBSzRJLE1BQUEsQ0FBT2hSLGNBQUEsQ0FBZTlDLEVBQUMsQ0FBQztJQUFFLE9BQU9GLEVBQUE7RUFBQztBQUFDO0FBQUMsSUFBTWdWLENBQUEsR0FBRTtFQUFDbEYsU0FBQSxFQUFVO0VBQU9VLGFBQUEsRUFBYztFQUFPNEIsV0FBQSxFQUFZO0VBQUVSLFdBQUEsRUFBWTtFQUFFQyxVQUFBLEVBQVc7RUFBR29ELFFBQUEsRUFBUztFQUFHeEssVUFBQSxFQUFXO0VBQUdvSSxVQUFBLEVBQVc7RUFBR0osVUFBQSxFQUFXO0VBQUdyUSxVQUFBLEVBQVc7QUFBRztBQUFFLElBQU04UyxDQUFBLEdBQU4sY0FBZ0I1UCxDQUFBLENBQUM7RUFBQyxPQUFPNlAsT0FBT25WLEVBQUEsRUFBRTtJQUFDLE9BQU8sSUFBSWtWLENBQUEsQ0FBRWxWLEVBQUM7RUFBQztFQUFDcUIsWUFBWXJCLEVBQUEsRUFBRTtJQUFDLE1BQU1DLEVBQUEsR0FBRUQsRUFBQSxDQUFFMkYsS0FBQSxLQUFRLGVBQWEzRixFQUFBLENBQUVvVixPQUFBLEdBQVEsSUFBSTNCLENBQUEsS0FBRTtJQUFRLE1BQU07TUFBQzlOLEtBQUEsRUFBTTFGLEVBQUE7TUFBRTJGLGFBQUEsRUFBYzVGLEVBQUEsQ0FBRTRGLGFBQUE7TUFBY0UsUUFBQSxFQUFTOUYsRUFBQSxDQUFFOEYsUUFBQTtNQUFTQyxZQUFBLEVBQWEvRixFQUFBLENBQUVxVjtJQUFTLENBQUMsR0FBRSxLQUFLQyxPQUFBLEdBQVEsRUFBQyxFQUFFLEtBQUtDLFdBQUEsR0FBWSxNQUFLLEtBQUtDLGNBQUEsR0FBZSxNQUFLLEtBQUtyTSxhQUFBLEdBQWMsRUFBQyxFQUFFLEtBQUtzTSxrQkFBQSxHQUFtQixFQUFDLEVBQUUsS0FBS0MsZUFBQSxHQUFnQixNQUFLLEtBQUtyTSxPQUFBLEdBQVEzRixNQUFBLENBQU9LLE1BQUEsQ0FBTyxDQUFDLEdBQUVpUixDQUFBLEVBQUVoVixFQUFDLEdBQUUsS0FBSzJWLEtBQUEsR0FBTSxJQUFJeEMsQ0FBQTtJQUFFLE1BQU1qVCxFQUFBLEdBQUVELEVBQUEsR0FBRSxTQUFPLEtBQUt5SSxlQUFBLENBQWdCO0lBQUUsS0FBS2tOLFFBQUEsR0FBUyxJQUFJaE4sQ0FBQSxDQUFFLEtBQUtTLE9BQUEsRUFBUW5KLEVBQUMsR0FBRSxLQUFLMlYsZ0JBQUEsQ0FBaUIsR0FBRSxLQUFLQyxrQkFBQSxDQUFtQixHQUFFLEtBQUtDLGVBQUEsQ0FBZ0IsR0FBRSxLQUFLQyxXQUFBLENBQVk7SUFBRSxNQUFNN1YsRUFBQSxHQUFFLEtBQUtrSixPQUFBLENBQVE0TSxHQUFBLElBQUssS0FBSzlQLE1BQUEsQ0FBTyxLQUFHO0lBQUcvRixPQUFBLENBQVFpUyxPQUFBLENBQVEsRUFBRXBSLElBQUEsQ0FBTSxNQUFJO01BQUMsS0FBS2UsSUFBQSxDQUFLLE1BQU07TUFBRSxNQUFLO1FBQUNrVSxLQUFBLEVBQU0xVixFQUFBO1FBQUVzQyxRQUFBLEVBQVNoQztNQUFDLElBQUUsS0FBS3VJLE9BQUE7TUFBUSxDQUFDbEosRUFBQSxJQUFHSyxFQUFBLElBQUdNLEVBQUEsS0FBSSxLQUFLcUcsSUFBQSxDQUFLaEgsRUFBQSxFQUFFSyxFQUFBLEVBQUVNLEVBQUMsRUFBRW1LLEtBQUEsQ0FBTyxNQUFJLElBQUs7SUFBQyxDQUFFO0VBQUM7RUFBQ2tMLGVBQWVuVyxFQUFBLEdBQUUsS0FBSzhILGNBQUEsQ0FBZSxHQUFFO0lBQUMsT0FBTyxLQUFLOE4sUUFBQSxDQUFTbEQsY0FBQSxDQUFlMVMsRUFBQSxHQUFFLEtBQUs2SCxXQUFBLENBQVksR0FBRSxLQUFLUCxTQUFBLENBQVUsQ0FBQyxHQUFFdEgsRUFBQTtFQUFDO0VBQUMrVixnQkFBQSxFQUFpQjtJQUFDLEtBQUs1TSxhQUFBLENBQWNpQyxJQUFBLENBQUssS0FBS3VLLEtBQUEsQ0FBTXBVLEVBQUEsQ0FBRyxRQUFRLE1BQUk7TUFBQyxJQUFHLENBQUMsS0FBSytHLFNBQUEsQ0FBVSxHQUFFO1FBQUMsTUFBTXRJLEVBQUEsR0FBRSxLQUFLbVcsY0FBQSxDQUFlO1FBQUUsS0FBS25VLElBQUEsQ0FBSyxjQUFhaEMsRUFBQyxHQUFFLEtBQUtnQyxJQUFBLENBQUssZ0JBQWVoQyxFQUFDLEdBQUUsUUFBTSxLQUFLd1YsY0FBQSxJQUFnQixLQUFLbE8sU0FBQSxDQUFVLEtBQUd0SCxFQUFBLElBQUcsS0FBS3dWLGNBQUEsSUFBZ0IsS0FBS3ZPLEtBQUEsQ0FBTTtNQUFDO0lBQUMsQ0FBRSxDQUFDO0VBQUM7RUFBQzRPLGlCQUFBLEVBQWtCO0lBQUMsS0FBS3ZPLFNBQUEsQ0FBVSxNQUFJLEtBQUt0RixJQUFBLENBQUssTUFBTSxHQUFFLEtBQUsyVCxLQUFBLENBQU1yQyxLQUFBLENBQU0sSUFBRyxLQUFLbUMsa0JBQUEsQ0FBbUJySyxJQUFBLENBQUssS0FBS3BGLFlBQUEsQ0FBYSxjQUFjLE1BQUk7TUFBQyxNQUFNaEcsRUFBQSxHQUFFLEtBQUttVyxjQUFBLENBQWU7TUFBRSxLQUFLblUsSUFBQSxDQUFLLGNBQWFoQyxFQUFDO0lBQUMsQ0FBRSxHQUFFLEtBQUtnRyxZQUFBLENBQWEsUUFBUSxNQUFJO01BQUMsS0FBS2hFLElBQUEsQ0FBSyxNQUFNLEdBQUUsS0FBSzJULEtBQUEsQ0FBTXJDLEtBQUEsQ0FBTTtJQUFDLENBQUUsR0FBRSxLQUFLdE4sWUFBQSxDQUFhLFNBQVMsTUFBSTtNQUFDLEtBQUtoRSxJQUFBLENBQUssT0FBTyxHQUFFLEtBQUsyVCxLQUFBLENBQU1uQyxJQUFBLENBQUssR0FBRSxLQUFLZ0MsY0FBQSxHQUFlO0lBQUksQ0FBRSxHQUFFLEtBQUt4UCxZQUFBLENBQWEsV0FBVyxNQUFJO01BQUMsS0FBSzJQLEtBQUEsQ0FBTW5DLElBQUEsQ0FBSyxHQUFFLEtBQUtnQyxjQUFBLEdBQWU7SUFBSSxDQUFFLEdBQUUsS0FBS3hQLFlBQUEsQ0FBYSxTQUFTLE1BQUk7TUFBQyxLQUFLaEUsSUFBQSxDQUFLLGNBQWEsS0FBSzZGLFdBQUEsQ0FBWSxDQUFDLEdBQUUsS0FBSzdGLElBQUEsQ0FBSyxRQUFRLEdBQUUsS0FBS3dULGNBQUEsR0FBZTtJQUFJLENBQUUsR0FBRSxLQUFLeFAsWUFBQSxDQUFhLFdBQVcsTUFBSTtNQUFDLEtBQUtoRSxJQUFBLENBQUssV0FBVSxLQUFLOEYsY0FBQSxDQUFlLENBQUM7SUFBQyxDQUFFLEdBQUUsS0FBSzlCLFlBQUEsQ0FBYSxTQUFTLE1BQUk7TUFBQyxJQUFJaEcsRUFBQTtNQUFFLEtBQUtnQyxJQUFBLENBQUssU0FBUSxVQUFRaEMsRUFBQSxHQUFFLEtBQUswSSxlQUFBLENBQWdCLEVBQUUwTixLQUFBLEtBQVEsV0FBU3BXLEVBQUEsR0FBRUEsRUFBQSxHQUFFLElBQUk0RSxLQUFBLENBQU0sYUFBYSxDQUFDLEdBQUUsS0FBSzRRLGNBQUEsR0FBZTtJQUFJLENBQUUsQ0FBQztFQUFDO0VBQUNNLG1CQUFBLEVBQW9CO0lBQUMsS0FBSzNNLGFBQUEsQ0FBY2lDLElBQUEsQ0FBSyxLQUFLd0ssUUFBQSxDQUFTclUsRUFBQSxDQUFHLFNBQVMsQ0FBQ3ZCLEVBQUEsRUFBRUMsRUFBQSxLQUFJO01BQUMsS0FBS29KLE9BQUEsQ0FBUTRMLFFBQUEsS0FBVyxLQUFLb0IsTUFBQSxDQUFPclcsRUFBQyxHQUFFLEtBQUtnQyxJQUFBLENBQUssZUFBY2hDLEVBQUEsR0FBRSxLQUFLNkgsV0FBQSxDQUFZLENBQUMsR0FBRSxLQUFLN0YsSUFBQSxDQUFLLFNBQVFoQyxFQUFBLEVBQUVDLEVBQUM7SUFBRSxDQUFFLEdBQUUsS0FBSzJWLFFBQUEsQ0FBU3JVLEVBQUEsQ0FBRyxZQUFZLENBQUN2QixFQUFBLEVBQUVDLEVBQUEsS0FBSTtNQUFDLEtBQUsrQixJQUFBLENBQUssWUFBV2hDLEVBQUEsRUFBRUMsRUFBQztJQUFDLENBQUUsR0FBRSxLQUFLMlYsUUFBQSxDQUFTclUsRUFBQSxDQUFHLFVBQVUsQ0FBQ3ZCLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsS0FBSTtNQUFDLE1BQU1FLEVBQUEsR0FBRSxLQUFLd0gsV0FBQSxDQUFZO01BQUUsS0FBSzdGLElBQUEsQ0FBSyxVQUFTaEMsRUFBQSxHQUFFSyxFQUFBLEVBQUVKLEVBQUEsR0FBRUksRUFBQSxFQUFFSCxFQUFBLEVBQUVDLEVBQUM7SUFBQyxDQUFFLEdBQUUsS0FBS3lWLFFBQUEsQ0FBU3JVLEVBQUEsQ0FBRyxVQUFVLE1BQUk7TUFBQyxLQUFLUyxJQUFBLENBQUssUUFBUTtJQUFDLENBQUUsR0FBRSxLQUFLNFQsUUFBQSxDQUFTclUsRUFBQSxDQUFHLFlBQVksTUFBSTtNQUFDLEtBQUtTLElBQUEsQ0FBSyxnQkFBZ0I7SUFBQyxDQUFFLEdBQUUsS0FBSzRULFFBQUEsQ0FBU3JVLEVBQUEsQ0FBRyxhQUFhdkIsRUFBQSxJQUFHO01BQUMsS0FBS2dDLElBQUEsQ0FBSyxhQUFZaEMsRUFBQztJQUFDLENBQUUsR0FBRSxLQUFLNFYsUUFBQSxDQUFTclUsRUFBQSxDQUFHLFdBQVd2QixFQUFBLElBQUc7TUFBQyxLQUFLZ0MsSUFBQSxDQUFLLFdBQVVoQyxFQUFDO0lBQUMsQ0FBRSxDQUFDO0lBQUU7TUFBQyxJQUFJQSxFQUFBO01BQUUsS0FBS21KLGFBQUEsQ0FBY2lDLElBQUEsQ0FBSyxLQUFLd0ssUUFBQSxDQUFTclUsRUFBQSxDQUFHLFFBQVF0QixFQUFBLElBQUc7UUFBQyxJQUFHLENBQUMsS0FBS29KLE9BQUEsQ0FBUTRMLFFBQUEsRUFBUztRQUFPLElBQUkvVSxFQUFBO1FBQUUsS0FBSzBWLFFBQUEsQ0FBU2xELGNBQUEsQ0FBZXpTLEVBQUMsR0FBRW9PLFlBQUEsQ0FBYXJPLEVBQUMsR0FBRSxLQUFLc0gsU0FBQSxDQUFVLElBQUVwSCxFQUFBLEdBQUUsSUFBRSxTQUFLLEtBQUttSixPQUFBLENBQVFvQixVQUFBLEdBQVd2SyxFQUFBLEdBQUUsTUFBSSxZQUFVLE9BQU8sS0FBS21KLE9BQUEsQ0FBUW9CLFVBQUEsSUFBWSxXQUFTLEtBQUtwQixPQUFBLENBQVFvQixVQUFBLEtBQWF2SyxFQUFBLEdBQUUsS0FBS21KLE9BQUEsQ0FBUW9CLFVBQUEsQ0FBVzZMLFlBQUEsR0FBY3RXLEVBQUEsR0FBRWtOLFVBQUEsQ0FBWSxNQUFJO1VBQUMsS0FBS21KLE1BQUEsQ0FBT3BXLEVBQUM7UUFBQyxHQUFHQyxFQUFDLEdBQUUsS0FBSzhCLElBQUEsQ0FBSyxlQUFjL0IsRUFBQSxHQUFFLEtBQUs0SCxXQUFBLENBQVksQ0FBQyxHQUFFLEtBQUs3RixJQUFBLENBQUssUUFBTy9CLEVBQUM7TUFBQyxDQUFFLENBQUM7SUFBQztFQUFDO0VBQUMrVixZQUFBLEVBQWE7SUFBQyxJQUFJaFcsRUFBQTtJQUFFLENBQUMsVUFBUUEsRUFBQSxHQUFFLEtBQUtxSixPQUFBLENBQVFpTSxPQUFBLEtBQVUsV0FBU3RWLEVBQUEsR0FBRSxTQUFPQSxFQUFBLENBQUUwQyxNQUFBLEtBQVMsS0FBSzJHLE9BQUEsQ0FBUWlNLE9BQUEsQ0FBUXJULE9BQUEsQ0FBU3pCLEVBQUEsSUFBRztNQUFDLEtBQUsrVixjQUFBLENBQWUvVixFQUFDO0lBQUMsQ0FBRTtFQUFDO0VBQUNnVyx3QkFBQSxFQUF5QjtJQUFDLEtBQUtmLGtCQUFBLENBQW1CeFQsT0FBQSxDQUFTakMsRUFBQSxJQUFHQSxFQUFBLENBQUUsQ0FBRSxHQUFFLEtBQUt5VixrQkFBQSxHQUFtQixFQUFDO0VBQUM7RUFBQzNILFdBQVc5TixFQUFBLEVBQUU7SUFBQyxLQUFLcUosT0FBQSxHQUFRM0YsTUFBQSxDQUFPSyxNQUFBLENBQU8sQ0FBQyxHQUFFLEtBQUtzRixPQUFBLEVBQVFySixFQUFDLEdBQUVBLEVBQUEsQ0FBRThDLFFBQUEsSUFBVSxDQUFDOUMsRUFBQSxDQUFFa1csS0FBQSxLQUFRLEtBQUtYLFdBQUEsR0FBWTNULENBQUEsQ0FBRVksWUFBQSxDQUFhLEtBQUtpVSxXQUFBLENBQVksR0FBRXpXLEVBQUEsQ0FBRThDLFFBQVEsSUFBRzlDLEVBQUEsQ0FBRWtXLEtBQUEsSUFBT2xXLEVBQUEsQ0FBRThDLFFBQUEsS0FBVyxLQUFLeVMsV0FBQSxHQUFZM1QsQ0FBQSxDQUFFWSxZQUFBLENBQWF4QyxFQUFBLENBQUVrVyxLQUFBLEVBQU1sVyxFQUFBLENBQUU4QyxRQUFRLElBQUcsS0FBSzhTLFFBQUEsQ0FBUzlILFVBQUEsQ0FBVyxLQUFLekUsT0FBTyxHQUFFckosRUFBQSxDQUFFcVYsU0FBQSxJQUFXLEtBQUs3TSxlQUFBLENBQWdCeEksRUFBQSxDQUFFcVYsU0FBUyxHQUFFLFFBQU1yVixFQUFBLENBQUU0RixhQUFBLEtBQWdCLEtBQUs4QyxlQUFBLENBQWdCLEVBQUU3QyxRQUFBLEdBQVM3RixFQUFBLENBQUU0RixhQUFBO0VBQWM7RUFBQzJRLGVBQWV2VyxFQUFBLEVBQUU7SUFBQ0EsRUFBQSxDQUFFMFcsS0FBQSxDQUFNLElBQUksR0FBRSxLQUFLcEIsT0FBQSxDQUFRbEssSUFBQSxDQUFLcEwsRUFBQztJQUFFLE1BQU1DLEVBQUEsR0FBRUQsRUFBQSxDQUFFMEIsSUFBQSxDQUFLLFdBQVcsTUFBSTtNQUFDLEtBQUs0VCxPQUFBLEdBQVEsS0FBS0EsT0FBQSxDQUFRcUIsTUFBQSxDQUFRN1YsRUFBQSxJQUFHQSxFQUFBLEtBQUlkLEVBQUUsR0FBRSxLQUFLbUosYUFBQSxHQUFjLEtBQUtBLGFBQUEsQ0FBY3dOLE1BQUEsQ0FBUW5XLEVBQUEsSUFBR0EsRUFBQSxLQUFJUCxFQUFFO0lBQUMsQ0FBRTtJQUFFLE9BQU8sS0FBS2tKLGFBQUEsQ0FBY2lDLElBQUEsQ0FBS25MLEVBQUMsR0FBRUQsRUFBQTtFQUFDO0VBQUMrTixXQUFBLEVBQVk7SUFBQyxPQUFPLEtBQUs2SCxRQUFBLENBQVM3SCxVQUFBLENBQVc7RUFBQztFQUFDQyxTQUFBLEVBQVU7SUFBQyxPQUFPLEtBQUs0SCxRQUFBLENBQVM1SCxRQUFBLENBQVM7RUFBQztFQUFDQyxVQUFBLEVBQVc7SUFBQyxPQUFPLEtBQUsySCxRQUFBLENBQVMzSCxTQUFBLENBQVU7RUFBQztFQUFDQyxVQUFVbE8sRUFBQSxFQUFFO0lBQUMsT0FBTyxLQUFLNFYsUUFBQSxDQUFTMUgsU0FBQSxDQUFVbE8sRUFBQztFQUFDO0VBQUM0VyxjQUFjNVcsRUFBQSxFQUFFO0lBQUMsTUFBTUMsRUFBQSxHQUFFRCxFQUFBLEdBQUUsS0FBSzZILFdBQUEsQ0FBWTtJQUFFLEtBQUsrTixRQUFBLENBQVN6SCxtQkFBQSxDQUFvQmxPLEVBQUM7RUFBQztFQUFDNFcsaUJBQUEsRUFBa0I7SUFBQyxPQUFPLEtBQUt2QixPQUFBO0VBQU87RUFBQ3dCLFVBQVU3VyxFQUFBLEVBQUVFLEVBQUEsRUFBRUUsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxPQUFPUCxDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztNQUFDLElBQUlDLEVBQUE7TUFBRSxJQUFHLEtBQUtnQyxJQUFBLENBQUssUUFBTy9CLEVBQUMsR0FBRSxDQUFDLEtBQUtvSixPQUFBLENBQVExRCxLQUFBLElBQU8sS0FBSzJCLFNBQUEsQ0FBVSxLQUFHLEtBQUtMLEtBQUEsQ0FBTSxHQUFFLEtBQUtzTyxXQUFBLEdBQVksTUFBSyxLQUFLQyxjQUFBLEdBQWUsTUFBSyxDQUFDclYsRUFBQSxJQUFHLENBQUNFLEVBQUEsRUFBRTtRQUFDLE1BQU1ILEVBQUEsR0FBRSxLQUFLbUosT0FBQSxDQUFRME4sV0FBQSxJQUFhLENBQUM7UUFBRXJJLE1BQUEsQ0FBT3NJLGVBQUEsSUFBaUIsQ0FBQzlXLEVBQUEsQ0FBRStXLE1BQUEsS0FBUyxLQUFLdkIsZUFBQSxHQUFnQixJQUFJc0IsZUFBQSxJQUFnQjlXLEVBQUEsQ0FBRStXLE1BQUEsR0FBTyxVQUFRalgsRUFBQSxHQUFFLEtBQUswVixlQUFBLEtBQWtCLFdBQVMxVixFQUFBLEdBQUUsU0FBT0EsRUFBQSxDQUFFaVgsTUFBQTtRQUFRLE1BQU0vUixFQUFBLEdBQUUxRSxFQUFBLElBQUcsS0FBS3dCLElBQUEsQ0FBSyxXQUFVeEIsRUFBQztRQUFFTCxFQUFBLEdBQUUsTUFBTXFFLENBQUEsQ0FBRUMsU0FBQSxDQUFVeEUsRUFBQSxFQUFFaUYsRUFBQSxFQUFFaEYsRUFBQztRQUFFLE1BQU1pTSxFQUFBLEdBQUUsS0FBSzlDLE9BQUEsQ0FBUTZOLFlBQUE7UUFBYS9LLEVBQUEsS0FBSWhNLEVBQUEsR0FBRSxJQUFJeUcsSUFBQSxDQUFLLENBQUN6RyxFQUFDLEdBQUU7VUFBQzBHLElBQUEsRUFBS3NGO1FBQUMsQ0FBQztNQUFFO01BQUMsS0FBS3hGLE1BQUEsQ0FBTzFHLEVBQUEsRUFBRUUsRUFBQztNQUFFLE1BQU1TLEVBQUEsR0FBRSxNQUFNLElBQUlSLE9BQUEsQ0FBU0ksRUFBQSxJQUFHO1FBQUMsTUFBTU0sRUFBQSxHQUFFUixFQUFBLElBQUcsS0FBS3VILFdBQUEsQ0FBWTtRQUFFL0csRUFBQSxHQUFFTixFQUFBLENBQUVNLEVBQUMsSUFBRSxLQUFLMlUsa0JBQUEsQ0FBbUJySyxJQUFBLENBQUssS0FBS3BGLFlBQUEsQ0FBYSxrQkFBa0IsTUFBSXhGLEVBQUEsQ0FBRSxLQUFLcUgsV0FBQSxDQUFZLENBQUMsR0FBRztVQUFDbkcsSUFBQSxFQUFLO1FBQUUsQ0FBQyxDQUFDO01BQUMsQ0FBRTtNQUFFLElBQUcsQ0FBQ3pCLEVBQUEsSUFBRyxDQUFDRSxFQUFBLEVBQUU7UUFBQyxNQUFNSyxFQUFBLEdBQUUsS0FBS2tJLGVBQUEsQ0FBZ0I7UUFBRWxJLEVBQUEsWUFBYWlULENBQUEsS0FBSWpULEVBQUEsQ0FBRXNDLFFBQUEsR0FBU2xDLEVBQUE7TUFBRTtNQUFDLElBQUdQLEVBQUEsRUFBRSxLQUFLa1YsV0FBQSxHQUFZM1QsQ0FBQSxDQUFFWSxZQUFBLENBQWFuQyxFQUFBLEVBQUVPLEVBQUEsSUFBRyxDQUFDLFdBQVVULEVBQUEsRUFBRTtRQUFDLE1BQU1LLEVBQUEsR0FBRSxNQUFNTCxFQUFBLENBQUVvVSxXQUFBLENBQVk7UUFBRSxLQUFLZ0IsV0FBQSxHQUFZLE1BQU0zVCxDQUFBLENBQUVNLE1BQUEsQ0FBTzFCLEVBQUEsRUFBRSxLQUFLNkksT0FBQSxDQUFRakgsVUFBVTtNQUFDO01BQUMsS0FBS21ULFdBQUEsS0FBYyxLQUFLdlQsSUFBQSxDQUFLLFVBQVMsS0FBSzZGLFdBQUEsQ0FBWSxDQUFDLEdBQUUsS0FBSytOLFFBQUEsQ0FBU2pFLE1BQUEsQ0FBTyxLQUFLNEQsV0FBVyxJQUFHLEtBQUt2VCxJQUFBLENBQUssU0FBUSxLQUFLNkYsV0FBQSxDQUFZLENBQUM7SUFBQyxDQUFFO0VBQUM7RUFBQ1YsS0FBS2xILEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxPQUFPSixDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztNQUFDLElBQUc7UUFBQyxPQUFPLE1BQU0sS0FBSytXLFNBQUEsQ0FBVTdXLEVBQUEsRUFBRSxRQUFPQyxFQUFBLEVBQUVDLEVBQUM7TUFBQyxTQUFPSCxFQUFBLEVBQU47UUFBUyxNQUFNLEtBQUtnQyxJQUFBLENBQUssU0FBUWhDLEVBQUMsR0FBRUEsRUFBQTtNQUFDO0lBQUMsQ0FBRTtFQUFDO0VBQUNtWCxTQUFTbFgsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLE9BQU9KLENBQUEsQ0FBRSxNQUFLLFFBQU8sUUFBUSxhQUFXO01BQUMsSUFBRztRQUFDLE9BQU8sTUFBTSxLQUFLK1csU0FBQSxDQUFVLElBQUc3VyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQztNQUFDLFNBQU9ILEVBQUEsRUFBTjtRQUFTLE1BQU0sS0FBS2dDLElBQUEsQ0FBSyxTQUFRaEMsRUFBQyxHQUFFQSxFQUFBO01BQUM7SUFBQyxDQUFFO0VBQUM7RUFBQ3VTLEtBQUt2UyxFQUFBLEVBQUU7SUFBQyxJQUFHLENBQUMsS0FBS3VWLFdBQUEsRUFBWSxNQUFNLElBQUkzUSxLQUFBLENBQU0saUJBQWlCO0lBQUUsS0FBS2dSLFFBQUEsQ0FBU3JELElBQUEsQ0FBS3ZTLEVBQUMsR0FBRSxLQUFLZ0MsSUFBQSxDQUFLLFFBQU9oQyxFQUFDO0VBQUM7RUFBQ29YLGVBQUEsRUFBZ0I7SUFBQyxPQUFPLEtBQUs3QixXQUFBO0VBQVc7RUFBQ2tCLFlBQVk7SUFBQ1ksUUFBQSxFQUFTclgsRUFBQSxHQUFFO0lBQUVzWCxTQUFBLEVBQVVyWCxFQUFBLEdBQUU7SUFBSXNYLFNBQUEsRUFBVXJYLEVBQUEsR0FBRTtFQUFHLElBQUUsQ0FBQyxHQUFFO0lBQUMsSUFBRyxDQUFDLEtBQUtxVixXQUFBLEVBQVksTUFBTSxJQUFJM1EsS0FBQSxDQUFNLG9DQUFvQztJQUFFLE1BQU16RSxFQUFBLEdBQUV3QyxJQUFBLENBQUtpRixHQUFBLENBQUk1SCxFQUFBLEVBQUUsS0FBS3VWLFdBQUEsQ0FBWXhTLGdCQUFnQjtNQUFFMUMsRUFBQSxHQUFFLEVBQUM7SUFBRSxTQUFRRyxFQUFBLEdBQUUsR0FBRUEsRUFBQSxHQUFFTCxFQUFBLEVBQUVLLEVBQUEsSUFBSTtNQUFDLE1BQU13RSxFQUFBLEdBQUUsS0FBS3VRLFdBQUEsQ0FBWXZTLGNBQUEsQ0FBZXhDLEVBQUM7UUFBRUYsRUFBQSxHQUFFLEVBQUM7UUFBRUMsRUFBQSxHQUFFeUUsRUFBQSxDQUFFdEMsTUFBQSxHQUFPekMsRUFBQTtNQUFFLFNBQVFVLEVBQUEsR0FBRSxHQUFFQSxFQUFBLEdBQUVWLEVBQUEsRUFBRVUsRUFBQSxJQUFJO1FBQUMsTUFBTUcsRUFBQSxHQUFFa0UsRUFBQSxDQUFFK0wsS0FBQSxDQUFNcE8sSUFBQSxDQUFLaU8sS0FBQSxDQUFNalEsRUFBQSxHQUFFSixFQUFDLEdBQUVvQyxJQUFBLENBQUtxTyxJQUFBLEVBQU1yUSxFQUFBLEdBQUUsS0FBR0osRUFBQyxDQUFDO1FBQUUsSUFBSTJFLEVBQUEsR0FBRTtRQUFFLFNBQVFzUyxFQUFBLEdBQUUsR0FBRUEsRUFBQSxHQUFFMVcsRUFBQSxDQUFFNEIsTUFBQSxFQUFPOFUsRUFBQSxJQUFJO1VBQUMsTUFBTTdWLEVBQUEsR0FBRWIsRUFBQSxDQUFFMFcsRUFBQTtVQUFHN1UsSUFBQSxDQUFLQyxHQUFBLENBQUlqQixFQUFDLElBQUVnQixJQUFBLENBQUtDLEdBQUEsQ0FBSXNDLEVBQUMsTUFBSUEsRUFBQSxHQUFFdkQsRUFBQTtRQUFFO1FBQUNyQixFQUFBLENBQUU4SyxJQUFBLENBQUt6SSxJQUFBLENBQUswQyxLQUFBLENBQU1ILEVBQUEsR0FBRWhGLEVBQUMsSUFBRUEsRUFBQztNQUFDO01BQUNHLEVBQUEsQ0FBRStLLElBQUEsQ0FBSzlLLEVBQUM7SUFBQztJQUFDLE9BQU9ELEVBQUE7RUFBQztFQUFDd0gsWUFBQSxFQUFhO0lBQUMsSUFBSTdILEVBQUEsR0FBRSxNQUFNNkgsV0FBQSxDQUFZLEtBQUc7SUFBRSxPQUFPLE1BQUk3SCxFQUFBLElBQUdBLEVBQUEsS0FBSSxJQUFFLEtBQUcsQ0FBQyxLQUFLdVYsV0FBQSxLQUFjdlYsRUFBQSxHQUFFLEtBQUt1VixXQUFBLENBQVl6UyxRQUFBLEdBQVU5QyxFQUFBO0VBQUM7RUFBQ3lYLGtCQUFrQnpYLEVBQUEsRUFBRTtJQUFDLEtBQUtxSixPQUFBLENBQVE0TCxRQUFBLEdBQVNqVixFQUFBO0VBQUM7RUFBQ3lILFFBQVF6SCxFQUFBLEVBQUU7SUFBQyxLQUFLd1YsY0FBQSxHQUFlLE1BQUssTUFBTS9OLE9BQUEsQ0FBUXpILEVBQUMsR0FBRSxLQUFLbVcsY0FBQSxDQUFlblcsRUFBQyxHQUFFLEtBQUtnQyxJQUFBLENBQUssY0FBYWhDLEVBQUM7RUFBQztFQUFDcVcsT0FBT3JXLEVBQUEsRUFBRTtJQUFDLE1BQU1DLEVBQUEsR0FBRSxLQUFLNEgsV0FBQSxDQUFZLElBQUU3SCxFQUFBO0lBQUUsS0FBS3lILE9BQUEsQ0FBUXhILEVBQUM7RUFBQztFQUFDb0gsS0FBS3BILEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsTUFBTUMsRUFBQSxHQUFFdUQsTUFBQSxDQUFPeVIsTUFBQSxDQUFPLE1BQUs7TUFBQzlOLElBQUEsRUFBSztRQUFDakMsR0FBQSxFQUFJQSxDQUFBLEtBQUksTUFBTWlDO01BQUk7SUFBQyxDQUFDO0lBQUUsT0FBT3RILENBQUEsQ0FBRSxNQUFLLFFBQU8sUUFBUSxhQUFXO01BQUMsUUFBTUUsRUFBQSxJQUFHLEtBQUt3SCxPQUFBLENBQVF4SCxFQUFDO01BQUUsTUFBTUQsRUFBQSxHQUFFLE1BQU1HLEVBQUEsQ0FBRWtILElBQUEsQ0FBS2dLLElBQUEsQ0FBSyxJQUFJO01BQUUsT0FBTyxRQUFNblIsRUFBQSxLQUFJLEtBQUt5RixLQUFBLFlBQWlCOE4sQ0FBQSxHQUFFLEtBQUs5TixLQUFBLENBQU1pUCxNQUFBLENBQU8xVSxFQUFDLElBQUUsS0FBS3NWLGNBQUEsR0FBZXRWLEVBQUEsR0FBR0YsRUFBQTtJQUFDLENBQUU7RUFBQztFQUFDMFgsVUFBQSxFQUFXO0lBQUMsT0FBTzNYLENBQUEsQ0FBRSxNQUFLLFFBQU8sUUFBUSxhQUFXO01BQUMsT0FBTyxLQUFLdUgsU0FBQSxDQUFVLElBQUUsS0FBS0wsS0FBQSxDQUFNLElBQUUsS0FBS0ksSUFBQSxDQUFLO0lBQUMsQ0FBRTtFQUFDO0VBQUNtTSxLQUFBLEVBQU07SUFBQyxLQUFLdk0sS0FBQSxDQUFNLEdBQUUsS0FBS1EsT0FBQSxDQUFRLENBQUM7RUFBQztFQUFDa1EsS0FBSzNYLEVBQUEsRUFBRTtJQUFDLEtBQUt5SCxPQUFBLENBQVEsS0FBS0ssY0FBQSxDQUFlLElBQUU5SCxFQUFDO0VBQUM7RUFBQzRYLE1BQUEsRUFBTztJQUFDLEtBQUt6USxJQUFBLENBQUssSUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsSUFBSTtFQUFDO0VBQUNDLGdCQUFnQnBILEVBQUEsRUFBRTtJQUFDLEtBQUt3Vyx1QkFBQSxDQUF3QixHQUFFLE1BQU1wUCxlQUFBLENBQWdCcEgsRUFBQyxHQUFFLEtBQUs2VixnQkFBQSxDQUFpQjtFQUFDO0VBQUMvQyxZQUFBLEVBQWE7SUFBQyxPQUFPL1MsQ0FBQSxDQUFFLE1BQUtxVCxTQUFBLEVBQVUsUUFBUSxXQUFVcFQsRUFBQSxHQUFFLGFBQVlDLEVBQUEsR0FBRSxHQUFFQyxFQUFBLEdBQUUsV0FBVTtNQUFDLE9BQU8sS0FBSzBWLFFBQUEsQ0FBUzlDLFdBQUEsQ0FBWTlTLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFDO0lBQUMsQ0FBRTtFQUFDO0VBQUM4RyxRQUFBLEVBQVM7SUFBQyxJQUFJaEgsRUFBQTtJQUFFLEtBQUtnQyxJQUFBLENBQUssU0FBUyxHQUFFLFVBQVFoQyxFQUFBLEdBQUUsS0FBSzBWLGVBQUEsS0FBa0IsV0FBUzFWLEVBQUEsSUFBR0EsRUFBQSxDQUFFNlgsS0FBQSxDQUFNLEdBQUUsS0FBS3ZDLE9BQUEsQ0FBUXJULE9BQUEsQ0FBU3pCLEVBQUEsSUFBR0EsRUFBQSxDQUFFd0csT0FBQSxDQUFRLENBQUUsR0FBRSxLQUFLbUMsYUFBQSxDQUFjbEgsT0FBQSxDQUFTekIsRUFBQSxJQUFHQSxFQUFBLENBQUUsQ0FBRSxHQUFFLEtBQUtnVyx1QkFBQSxDQUF3QixHQUFFLEtBQUtiLEtBQUEsQ0FBTTNPLE9BQUEsQ0FBUSxHQUFFLEtBQUs0TyxRQUFBLENBQVM1TyxPQUFBLENBQVEsR0FBRSxNQUFNQSxPQUFBLENBQVE7RUFBQztBQUFDO0FBQUNrTyxDQUFBLENBQUU0QyxVQUFBLEdBQVcsY0FBYzFXLENBQUEsQ0FBQztFQUFDQyxZQUFZckIsRUFBQSxFQUFFO0lBQUMsTUFBTSxHQUFFLEtBQUttSixhQUFBLEdBQWMsRUFBQyxFQUFFLEtBQUtFLE9BQUEsR0FBUXJKLEVBQUE7RUFBQztFQUFDK1gsT0FBQSxFQUFRLENBQUM7RUFBQ3JCLE1BQU0xVyxFQUFBLEVBQUU7SUFBQyxLQUFLZ1ksVUFBQSxHQUFXaFksRUFBQSxFQUFFLEtBQUsrWCxNQUFBLENBQU87RUFBQztFQUFDL1EsUUFBQSxFQUFTO0lBQUMsS0FBS2hGLElBQUEsQ0FBSyxTQUFTLEdBQUUsS0FBS21ILGFBQUEsQ0FBY2xILE9BQUEsQ0FBU2pDLEVBQUEsSUFBR0EsRUFBQSxDQUFFLENBQUU7RUFBQztBQUFDLEdBQUVrVixDQUFBLENBQUUrQyxHQUFBLEdBQUk1VCxDQUFBOzs7QURHbDg1QixJQUFPMUUsMkJBQUEsR0FBUXVWLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL3J2ZC9vdXQifQ==