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

// .beyond/uimport/temp/wavesurfer.js.7.9.9.js
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
var h = class _h extends e {
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
    let d2 = Math.min(_h.MAX_CANVAS_WIDTH, a2, l2),
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
        Object.keys(c2).length > _h.MAX_NODES && (n2.innerHTML = "", r2.innerHTML = "", c2 = {}), u2(e3 - 1), u2(e3), u2(e3 + 1);
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
var u = class _u extends a {
  static create(t2) {
    return new _u(t2);
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

// .beyond/uimport/temp/wavesurfer.js.7.9.9.js
var wavesurfer_js_7_9_9_default = u;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3dhdmVzdXJmZXIuanMuNy45LjkuanMiLCIuLi9ub2RlX21vZHVsZXMvd2F2ZXN1cmZlci5qcy9kaXN0L3dhdmVzdXJmZXIuZXNtLmpzIl0sIm5hbWVzIjpbIndhdmVzdXJmZXJfanNfN185XzlfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIndhdmVzdXJmZXJfanNfN185XzlfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ0IiwidDIiLCJlMiIsImkyIiwiczIiLCJQcm9taXNlIiwibjIiLCJyMiIsIm8yIiwidDMiLCJoMiIsIm5leHQiLCJ0NCIsImEyIiwidGhyb3ciLCJlMyIsImRvbmUiLCJ2YWx1ZSIsInRoZW4iLCJhcHBseSIsIlN1cHByZXNzZWRFcnJvciIsImUiLCJjb25zdHJ1Y3RvciIsImxpc3RlbmVycyIsIm9uIiwiU2V0IiwiYWRkIiwib25jZSIsImkzIiwiaSIsInVuIiwiZGVsZXRlIiwidW5BbGwiLCJlbWl0IiwiZm9yRWFjaCIsImRlY29kZSIsIkF1ZGlvQ29udGV4dCIsInNhbXBsZVJhdGUiLCJkZWNvZGVBdWRpb0RhdGEiLCJmaW5hbGx5IiwiY2xvc2UiLCJjcmVhdGVCdWZmZXIiLCJzb21lIiwibGVuZ3RoIiwiTWF0aCIsImFicyIsImU0IiwiZHVyYXRpb24iLCJudW1iZXJPZkNoYW5uZWxzIiwiZ2V0Q2hhbm5lbERhdGEiLCJjb3B5RnJvbUNoYW5uZWwiLCJBdWRpb0J1ZmZlciIsInByb3RvdHlwZSIsImNvcHlUb0NoYW5uZWwiLCJzIiwieG1sbnMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJlbnRyaWVzIiwiTm9kZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJhc3NpZ24iLCJzdHlsZSIsInRleHRDb250ZW50Iiwic2V0QXR0cmlidXRlIiwidG9TdHJpbmciLCJuIiwiciIsImZyZWV6ZSIsIl9fcHJvdG9fXyIsIm8iLCJmZXRjaEJsb2IiLCJmZXRjaCIsInN0YXR1cyIsIkVycm9yIiwic3RhdHVzVGV4dCIsImJvZHkiLCJoZWFkZXJzIiwiczMiLCJnZXRSZWFkZXIiLCJuMyIsIk51bWJlciIsImdldCIsInJvdW5kIiwiYSIsInJlYWQiLCJjbG9uZSIsImJsb2IiLCJpc0V4dGVybmFsTWVkaWEiLCJtZWRpYSIsIm1lZGlhQ29udHJvbHMiLCJjb250cm9scyIsImF1dG9wbGF5IiwicGxheWJhY2tSYXRlIiwib25NZWRpYUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRTcmMiLCJjdXJyZW50U3JjIiwic3JjIiwicmV2b2tlU3JjIiwic3RhcnRzV2l0aCIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImNhblBsYXlUeXBlIiwic2V0U3JjIiwiQmxvYiIsInR5cGUiLCJjcmVhdGVPYmplY3RVUkwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkZXN0cm95IiwicGF1c2UiLCJyZW1vdmUiLCJsb2FkIiwic2V0TWVkaWFFbGVtZW50IiwicGxheSIsImlzUGxheWluZyIsInBhdXNlZCIsImVuZGVkIiwic2V0VGltZSIsImN1cnJlbnRUaW1lIiwibWF4IiwibWluIiwiZ2V0RHVyYXRpb24iLCJnZXRDdXJyZW50VGltZSIsImdldFZvbHVtZSIsInZvbHVtZSIsInNldFZvbHVtZSIsImdldE11dGVkIiwibXV0ZWQiLCJzZXRNdXRlZCIsImdldFBsYXliYWNrUmF0ZSIsImlzU2Vla2luZyIsInNlZWtpbmciLCJzZXRQbGF5YmFja1JhdGUiLCJwcmVzZXJ2ZXNQaXRjaCIsImdldE1lZGlhRWxlbWVudCIsInNldFNpbmtJZCIsImgiLCJfaCIsInRpbWVvdXRzIiwiaXNTY3JvbGxhYmxlIiwiYXVkaW9EYXRhIiwicmVzaXplT2JzZXJ2ZXIiLCJsYXN0Q29udGFpbmVyV2lkdGgiLCJpc0RyYWdnaW5nIiwic3Vic2NyaXB0aW9ucyIsInVuc3Vic2NyaWJlT25TY3JvbGwiLCJvcHRpb25zIiwicGFyZW50RnJvbU9wdGlvbnNDb250YWluZXIiLCJjb250YWluZXIiLCJwYXJlbnQiLCJpbml0SHRtbCIsInNjcm9sbENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJ3cmFwcGVyIiwiY2FudmFzV3JhcHBlciIsInByb2dyZXNzV3JhcHBlciIsImN1cnNvciIsImluaXRFdmVudHMiLCJIVE1MRWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhZ1RvU2VlayIsImluaXREcmFnIiwic2Nyb2xsTGVmdCIsInNjcm9sbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJSZXNpemVPYnNlcnZlciIsImNyZWF0ZURlbGF5Iiwib25Db250YWluZXJSZXNpemUiLCJjYXRjaCIsIm9ic2VydmUiLCJyZVJlbmRlciIsInB1c2giLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImwyIiwibDMiLCJidXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImQyIiwiYzIiLCJ1MiIsInAiLCJEYXRlIiwibm93IiwibSIsInIzIiwiaDMiLCJsNCIsIm0yIiwiczQiLCJvMyIsImYiLCJhMyIsImciLCJyZWxhdGVkVGFyZ2V0IiwiZG9jdW1lbnRFbGVtZW50IiwidiIsImIiLCJwYXNzaXZlIiwiY2FwdHVyZSIsInNldFRpbWVvdXQiLCJnZXRIZWlnaHQiLCJpc05hTiIsImNsaWVudEhlaWdodCIsImV2ZXJ5Iiwib3ZlcmxheSIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJjc3BOb25jZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJzcGxpdENoYW5uZWxzIiwic2V0T3B0aW9ucyIsImdldFdyYXBwZXIiLCJnZXRXaWR0aCIsImdldFNjcm9sbCIsInNldFNjcm9sbCIsInNldFNjcm9sbFBlcmNlbnRhZ2UiLCJkaXNjb25uZWN0IiwiY2xlYXJUaW1lb3V0IiwiY29udmVydENvbG9yVmFsdWVzIiwiQXJyYXkiLCJpc0FycmF5IiwiZ2V0Q29udGV4dCIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImdldFBpeGVsUmF0aW8iLCJyZW5kZXJCYXJXYXZlZm9ybSIsImNhbnZhcyIsImJhcldpZHRoIiwiYmFyR2FwIiwiYmFyUmFkaXVzIiwiYmVnaW5QYXRoIiwiYmFyQWxpZ24iLCJkMyIsImZpbGwiLCJjbG9zZVBhdGgiLCJyZW5kZXJMaW5lV2F2ZWZvcm0iLCJtb3ZlVG8iLCJsaW5lVG8iLCJyZW5kZXJXYXZlZm9ybSIsImZpbGxTdHlsZSIsIndhdmVDb2xvciIsInJlbmRlckZ1bmN0aW9uIiwiYmFySGVpZ2h0Iiwibm9ybWFsaXplIiwiZnJvbSIsInJlZHVjZSIsInJlbmRlclNpbmdsZUNhbnZhcyIsImNsb25lTm9kZSIsImRyYXdJbWFnZSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInByb2dyZXNzQ29sb3IiLCJmaWxsUmVjdCIsInJlbmRlck11bHRpQ2FudmFzIiwiTUFYX0NBTlZBU19XSURUSCIsImZsb29yIiwiaTQiLCJtYXAiLCJzbGljZSIsImNlaWwiLCJrZXlzIiwiTUFYX05PREVTIiwicmVuZGVyQ2hhbm5lbCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIm1hcmdpblRvcCIsIm1pbkhlaWdodCIsInJlbmRlciIsIm1pblB4UGVyU2VjIiwiZmlsbFBhcmVudCIsIm92ZXJmbG93WCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhpZGVTY3JvbGxiYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3JDb2xvciIsImN1cnNvcldpZHRoIiwicmVzb2x2ZSIsInJpZ2h0Iiwiem9vbSIsInNjcm9sbEludG9WaWV3IiwiYXV0b0NlbnRlciIsInJlbmRlclByb2dyZXNzIiwiY2xpcFBhdGgiLCJ0cmFuc2Zvcm0iLCJhdXRvU2Nyb2xsIiwiZXhwb3J0SW1hZ2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9EYXRhVVJMIiwiYWxsIiwidG9CbG9iIiwibCIsImFyZ3VtZW50cyIsInVuc3Vic2NyaWJlIiwic3RhcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdG9wIiwiZCIsImJ1ZmZlck5vZGUiLCJwbGF5U3RhcnRUaW1lIiwicGxheWVkRHVyYXRpb24iLCJfbXV0ZWQiLCJfcGxheWJhY2tSYXRlIiwiX2R1cmF0aW9uIiwiYnVmZmVyIiwiY3Jvc3NPcmlnaW4iLCJhdWRpb0NvbnRleHQiLCJnYWluTm9kZSIsImNyZWF0ZUdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJhcnJheUJ1ZmZlciIsIl9wbGF5IiwiY3JlYXRlQnVmZmVyU291cmNlIiwib25lbmRlZCIsIl9wYXVzZSIsInN0b3BBdCIsImdhaW4iLCJ0ZXN0IiwiZ2V0R2Fpbk5vZGUiLCJjIiwiaW50ZXJhY3QiLCJ1IiwiX3UiLCJjcmVhdGUiLCJiYWNrZW5kIiwiYXVkaW9SYXRlIiwicGx1Z2lucyIsImRlY29kZWREYXRhIiwic3RvcEF0UG9zaXRpb24iLCJtZWRpYVN1YnNjcmlwdGlvbnMiLCJhYm9ydENvbnRyb2xsZXIiLCJ0aW1lciIsInJlbmRlcmVyIiwiaW5pdFBsYXllckV2ZW50cyIsImluaXRSZW5kZXJlckV2ZW50cyIsImluaXRUaW1lckV2ZW50cyIsImluaXRQbHVnaW5zIiwidXJsIiwicGVha3MiLCJ1cGRhdGVQcm9ncmVzcyIsImVycm9yIiwic2Vla1RvIiwiZGVib3VuY2VUaW1lIiwicmVnaXN0ZXJQbHVnaW4iLCJ1bnN1YnNjcmliZVBsYXllckV2ZW50cyIsImV4cG9ydFBlYWtzIiwiX2luaXQiLCJmaWx0ZXIiLCJzZXRTY3JvbGxUaW1lIiwiZ2V0QWN0aXZlUGx1Z2lucyIsImxvYWRBdWRpbyIsImZldGNoUGFyYW1zIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwiYmxvYk1pbWVUeXBlIiwibG9hZEJsb2IiLCJnZXREZWNvZGVkRGF0YSIsImNoYW5uZWxzIiwibWF4TGVuZ3RoIiwicHJlY2lzaW9uIiwidDUiLCJ0b2dnbGVJbnRlcmFjdGlvbiIsInBsYXlQYXVzZSIsInNraXAiLCJlbXB0eSIsImFib3J0IiwiQmFzZVBsdWdpbiIsIm9uSW5pdCIsIndhdmVzdXJmZXIiLCJkb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDJCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsMkJBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sMkJBQUE7OztBQ0FBLFNBQVNPLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtFQUFDLE9BQU8sS0FBSUQsRUFBQSxLQUFJQSxFQUFBLEdBQUVFLE9BQUEsR0FBVyxVQUFTQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLFNBQVNDLEdBQUVDLEVBQUEsRUFBRTtNQUFDLElBQUc7UUFBQ0MsRUFBQSxDQUFFTixFQUFBLENBQUVPLElBQUEsQ0FBS0YsRUFBQyxDQUFDO01BQUMsU0FBT0csRUFBQSxFQUFFO1FBQUNMLEVBQUEsQ0FBRUssRUFBQztNQUFDO0lBQUM7SUFBQyxTQUFTQyxHQUFFSixFQUFBLEVBQUU7TUFBQyxJQUFHO1FBQUNDLEVBQUEsQ0FBRU4sRUFBQSxDQUFFVSxLQUFBLENBQU1MLEVBQUMsQ0FBQztNQUFDLFNBQU9HLEVBQUEsRUFBRTtRQUFDTCxFQUFBLENBQUVLLEVBQUM7TUFBQztJQUFDO0lBQUMsU0FBU0YsR0FBRUQsRUFBQSxFQUFFO01BQUMsSUFBSU0sRUFBQTtNQUFFTixFQUFBLENBQUVPLElBQUEsR0FBS1YsRUFBQSxDQUFFRyxFQUFBLENBQUVRLEtBQUssS0FBR0YsRUFBQSxHQUFFTixFQUFBLENBQUVRLEtBQUEsRUFBTUYsRUFBQSxZQUFhWixFQUFBLEdBQUVZLEVBQUEsR0FB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LEdBQUUsS0FBSytWLGdCQUFBLENBQWlCO0VBQUM7RUFBQ2hELFlBQUEsRUFBYTtJQUFDLE9BQU9oVCxDQUFBLENBQUUsTUFBS3NULFNBQUEsRUFBVSxRQUFRLFdBQVVyVCxFQUFBLEdBQUUsYUFBWUMsRUFBQSxHQUFFLEdBQUVDLEVBQUEsR0FBRSxXQUFVO01BQUMsT0FBTyxLQUFLNFYsUUFBQSxDQUFTL0MsV0FBQSxDQUFZL1MsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUM7SUFBQyxDQUFFO0VBQUM7RUFBQzhHLFFBQUEsRUFBUztJQUFDLElBQUloSCxFQUFBO0lBQUUsS0FBS2dDLElBQUEsQ0FBSyxTQUFTLEdBQUUsVUFBUWhDLEVBQUEsR0FBRSxLQUFLNFYsZUFBQSxLQUFrQixXQUFTNVYsRUFBQSxJQUFHQSxFQUFBLENBQUUrWCxLQUFBLENBQU0sR0FBRSxLQUFLdkMsT0FBQSxDQUFRdlQsT0FBQSxDQUFTekIsRUFBQSxJQUFHQSxFQUFBLENBQUV3RyxPQUFBLENBQVEsQ0FBRSxHQUFFLEtBQUtvQyxhQUFBLENBQWNuSCxPQUFBLENBQVN6QixFQUFBLElBQUdBLEVBQUEsQ0FBRSxDQUFFLEdBQUUsS0FBS2tXLHVCQUFBLENBQXdCLEdBQUUsS0FBS2IsS0FBQSxDQUFNN08sT0FBQSxDQUFRLEdBQUUsS0FBSzhPLFFBQUEsQ0FBUzlPLE9BQUEsQ0FBUSxHQUFFLE1BQU1BLE9BQUEsQ0FBUTtFQUFDO0FBQUM7QUFBQ21PLENBQUEsQ0FBRTZDLFVBQUEsR0FBVyxjQUFjNVcsQ0FBQSxDQUFDO0VBQUNDLFlBQVlyQixFQUFBLEVBQUU7SUFBQyxNQUFNLEdBQUUsS0FBS29KLGFBQUEsR0FBYyxFQUFDLEVBQUUsS0FBS0UsT0FBQSxHQUFRdEosRUFBQTtFQUFDO0VBQUNpWSxPQUFBLEVBQVEsQ0FBQztFQUFDckIsTUFBTTVXLEVBQUEsRUFBRTtJQUFDLEtBQUtrWSxVQUFBLEdBQVdsWSxFQUFBLEVBQUUsS0FBS2lZLE1BQUEsQ0FBTztFQUFDO0VBQUNqUixRQUFBLEVBQVM7SUFBQyxLQUFLaEYsSUFBQSxDQUFLLFNBQVMsR0FBRSxLQUFLb0gsYUFBQSxDQUFjbkgsT0FBQSxDQUFTakMsRUFBQSxJQUFHQSxFQUFBLENBQUUsQ0FBRTtFQUFDO0FBQUMsR0FBRW1WLENBQUEsQ0FBRWdELEdBQUEsR0FBSTlULENBQUE7OztBREdsODVCLElBQU8xRSwyQkFBQSxHQUFRd1YsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvcnZkL291dCJ9