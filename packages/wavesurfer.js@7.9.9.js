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

// .beyond/uimport/temp/wavesurfer.js.7.9.9.js
var wavesurfer_js_7_9_9_default = u;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3dhdmVzdXJmZXIuanMuNy45LjkuanMiLCIuLi9ub2RlX21vZHVsZXMvd2F2ZXN1cmZlci5qcy9kaXN0L3dhdmVzdXJmZXIuZXNtLmpzIl0sIm5hbWVzIjpbIndhdmVzdXJmZXJfanNfN185XzlfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIndhdmVzdXJmZXJfanNfN185XzlfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ0IiwidDIiLCJlMiIsImkyIiwiczIiLCJQcm9taXNlIiwibjIiLCJyMiIsIm8yIiwidDMiLCJoMiIsIm5leHQiLCJ0NCIsImEyIiwidGhyb3ciLCJlMyIsImRvbmUiLCJ2YWx1ZSIsInRoZW4iLCJhcHBseSIsIlN1cHByZXNzZWRFcnJvciIsImUiLCJjb25zdHJ1Y3RvciIsImxpc3RlbmVycyIsIm9uIiwiU2V0IiwiYWRkIiwib25jZSIsImkzIiwiaSIsInVuIiwiZGVsZXRlIiwidW5BbGwiLCJlbWl0IiwiZm9yRWFjaCIsImRlY29kZSIsIkF1ZGlvQ29udGV4dCIsInNhbXBsZVJhdGUiLCJkZWNvZGVBdWRpb0RhdGEiLCJmaW5hbGx5IiwiY2xvc2UiLCJjcmVhdGVCdWZmZXIiLCJzb21lIiwibGVuZ3RoIiwiTWF0aCIsImFicyIsImU0IiwiZHVyYXRpb24iLCJudW1iZXJPZkNoYW5uZWxzIiwiZ2V0Q2hhbm5lbERhdGEiLCJjb3B5RnJvbUNoYW5uZWwiLCJBdWRpb0J1ZmZlciIsInByb3RvdHlwZSIsImNvcHlUb0NoYW5uZWwiLCJzIiwieG1sbnMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJlbnRyaWVzIiwiTm9kZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJhc3NpZ24iLCJzdHlsZSIsInRleHRDb250ZW50Iiwic2V0QXR0cmlidXRlIiwidG9TdHJpbmciLCJuIiwiciIsImZyZWV6ZSIsIl9fcHJvdG9fXyIsIm8iLCJmZXRjaEJsb2IiLCJmZXRjaCIsInN0YXR1cyIsIkVycm9yIiwic3RhdHVzVGV4dCIsImJvZHkiLCJoZWFkZXJzIiwiczMiLCJnZXRSZWFkZXIiLCJuMyIsIk51bWJlciIsImdldCIsInJvdW5kIiwiYSIsInJlYWQiLCJjbG9uZSIsImJsb2IiLCJpc0V4dGVybmFsTWVkaWEiLCJtZWRpYSIsIm1lZGlhQ29udHJvbHMiLCJjb250cm9scyIsImF1dG9wbGF5IiwicGxheWJhY2tSYXRlIiwib25NZWRpYUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRTcmMiLCJjdXJyZW50U3JjIiwic3JjIiwicmV2b2tlU3JjIiwic3RhcnRzV2l0aCIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImNhblBsYXlUeXBlIiwic2V0U3JjIiwiQmxvYiIsInR5cGUiLCJjcmVhdGVPYmplY3RVUkwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkZXN0cm95IiwicGF1c2UiLCJyZW1vdmUiLCJsb2FkIiwic2V0TWVkaWFFbGVtZW50IiwicGxheSIsImlzUGxheWluZyIsInBhdXNlZCIsImVuZGVkIiwic2V0VGltZSIsImN1cnJlbnRUaW1lIiwibWF4IiwibWluIiwiZ2V0RHVyYXRpb24iLCJnZXRDdXJyZW50VGltZSIsImdldFZvbHVtZSIsInZvbHVtZSIsInNldFZvbHVtZSIsImdldE11dGVkIiwibXV0ZWQiLCJzZXRNdXRlZCIsImdldFBsYXliYWNrUmF0ZSIsImlzU2Vla2luZyIsInNlZWtpbmciLCJzZXRQbGF5YmFja1JhdGUiLCJwcmVzZXJ2ZXNQaXRjaCIsImdldE1lZGlhRWxlbWVudCIsInNldFNpbmtJZCIsImgiLCJ0aW1lb3V0cyIsImlzU2Nyb2xsYWJsZSIsImF1ZGlvRGF0YSIsInJlc2l6ZU9ic2VydmVyIiwibGFzdENvbnRhaW5lcldpZHRoIiwiaXNEcmFnZ2luZyIsInN1YnNjcmlwdGlvbnMiLCJ1bnN1YnNjcmliZU9uU2Nyb2xsIiwib3B0aW9ucyIsInBhcmVudEZyb21PcHRpb25zQ29udGFpbmVyIiwiY29udGFpbmVyIiwicGFyZW50IiwiaW5pdEh0bWwiLCJzY3JvbGxDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwid3JhcHBlciIsImNhbnZhc1dyYXBwZXIiLCJwcm9ncmVzc1dyYXBwZXIiLCJjdXJzb3IiLCJpbml0RXZlbnRzIiwiSFRNTEVsZW1lbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImRyYWdUb1NlZWsiLCJpbml0RHJhZyIsInNjcm9sbExlZnQiLCJzY3JvbGxXaWR0aCIsImNsaWVudFdpZHRoIiwiUmVzaXplT2JzZXJ2ZXIiLCJjcmVhdGVEZWxheSIsIm9uQ29udGFpbmVyUmVzaXplIiwiY2F0Y2giLCJvYnNlcnZlIiwicmVSZW5kZXIiLCJwdXNoIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJsMiIsImwzIiwiYnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJkMiIsImMyIiwidTIiLCJwIiwiRGF0ZSIsIm5vdyIsIm0iLCJyMyIsImgzIiwibDQiLCJtMiIsInM0IiwibzMiLCJmIiwiYTMiLCJnIiwicmVsYXRlZFRhcmdldCIsImRvY3VtZW50RWxlbWVudCIsInYiLCJiIiwicGFzc2l2ZSIsImNhcHR1cmUiLCJzZXRUaW1lb3V0IiwiZ2V0SGVpZ2h0IiwiaXNOYU4iLCJjbGllbnRIZWlnaHQiLCJldmVyeSIsIm92ZXJsYXkiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiY3NwTm9uY2UiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwic3BsaXRDaGFubmVscyIsInNldE9wdGlvbnMiLCJnZXRXcmFwcGVyIiwiZ2V0V2lkdGgiLCJnZXRTY3JvbGwiLCJzZXRTY3JvbGwiLCJzZXRTY3JvbGxQZXJjZW50YWdlIiwiZGlzY29ubmVjdCIsImNsZWFyVGltZW91dCIsImNvbnZlcnRDb2xvclZhbHVlcyIsIkFycmF5IiwiaXNBcnJheSIsImdldENvbnRleHQiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJnZXRQaXhlbFJhdGlvIiwicmVuZGVyQmFyV2F2ZWZvcm0iLCJjYW52YXMiLCJiYXJXaWR0aCIsImJhckdhcCIsImJhclJhZGl1cyIsImJlZ2luUGF0aCIsImJhckFsaWduIiwiZDMiLCJmaWxsIiwiY2xvc2VQYXRoIiwicmVuZGVyTGluZVdhdmVmb3JtIiwibW92ZVRvIiwibGluZVRvIiwicmVuZGVyV2F2ZWZvcm0iLCJmaWxsU3R5bGUiLCJ3YXZlQ29sb3IiLCJyZW5kZXJGdW5jdGlvbiIsImJhckhlaWdodCIsIm5vcm1hbGl6ZSIsImZyb20iLCJyZWR1Y2UiLCJyZW5kZXJTaW5nbGVDYW52YXMiLCJjbG9uZU5vZGUiLCJkcmF3SW1hZ2UiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJwcm9ncmVzc0NvbG9yIiwiZmlsbFJlY3QiLCJyZW5kZXJNdWx0aUNhbnZhcyIsIk1BWF9DQU5WQVNfV0lEVEgiLCJmbG9vciIsImk0IiwibWFwIiwic2xpY2UiLCJjZWlsIiwia2V5cyIsIk1BWF9OT0RFUyIsInJlbmRlckNoYW5uZWwiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJtYXJnaW5Ub3AiLCJtaW5IZWlnaHQiLCJyZW5kZXIiLCJtaW5QeFBlclNlYyIsImZpbGxQYXJlbnQiLCJvdmVyZmxvd1giLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoaWRlU2Nyb2xsYmFyIiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yQ29sb3IiLCJjdXJzb3JXaWR0aCIsInJlc29sdmUiLCJyaWdodCIsInpvb20iLCJzY3JvbGxJbnRvVmlldyIsImF1dG9DZW50ZXIiLCJyZW5kZXJQcm9ncmVzcyIsImNsaXBQYXRoIiwidHJhbnNmb3JtIiwiYXV0b1Njcm9sbCIsImV4cG9ydEltYWdlIiwicXVlcnlTZWxlY3RvckFsbCIsInRvRGF0YVVSTCIsImFsbCIsInRvQmxvYiIsImwiLCJhcmd1bWVudHMiLCJ1bnN1YnNjcmliZSIsInN0YXJ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RvcCIsImQiLCJidWZmZXJOb2RlIiwicGxheVN0YXJ0VGltZSIsInBsYXllZER1cmF0aW9uIiwiX211dGVkIiwiX3BsYXliYWNrUmF0ZSIsIl9kdXJhdGlvbiIsImJ1ZmZlciIsImNyb3NzT3JpZ2luIiwiYXVkaW9Db250ZXh0IiwiZ2Fpbk5vZGUiLCJjcmVhdGVHYWluIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiYXJyYXlCdWZmZXIiLCJfcGxheSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsIm9uZW5kZWQiLCJfcGF1c2UiLCJzdG9wQXQiLCJnYWluIiwidGVzdCIsImdldEdhaW5Ob2RlIiwiYyIsImludGVyYWN0IiwidSIsImNyZWF0ZSIsImJhY2tlbmQiLCJhdWRpb1JhdGUiLCJwbHVnaW5zIiwiZGVjb2RlZERhdGEiLCJzdG9wQXRQb3NpdGlvbiIsIm1lZGlhU3Vic2NyaXB0aW9ucyIsImFib3J0Q29udHJvbGxlciIsInRpbWVyIiwicmVuZGVyZXIiLCJpbml0UGxheWVyRXZlbnRzIiwiaW5pdFJlbmRlcmVyRXZlbnRzIiwiaW5pdFRpbWVyRXZlbnRzIiwiaW5pdFBsdWdpbnMiLCJ1cmwiLCJwZWFrcyIsInVwZGF0ZVByb2dyZXNzIiwiZXJyb3IiLCJzZWVrVG8iLCJkZWJvdW5jZVRpbWUiLCJyZWdpc3RlclBsdWdpbiIsInVuc3Vic2NyaWJlUGxheWVyRXZlbnRzIiwiZXhwb3J0UGVha3MiLCJfaW5pdCIsImZpbHRlciIsInNldFNjcm9sbFRpbWUiLCJnZXRBY3RpdmVQbHVnaW5zIiwibG9hZEF1ZGlvIiwiZmV0Y2hQYXJhbXMiLCJBYm9ydENvbnRyb2xsZXIiLCJzaWduYWwiLCJibG9iTWltZVR5cGUiLCJsb2FkQmxvYiIsImdldERlY29kZWREYXRhIiwiY2hhbm5lbHMiLCJtYXhMZW5ndGgiLCJwcmVjaXNpb24iLCJ0NSIsInRvZ2dsZUludGVyYWN0aW9uIiwicGxheVBhdXNlIiwic2tpcCIsImVtcHR5IiwiYWJvcnQiLCJCYXNlUGx1Z2luIiwib25Jbml0Iiwid2F2ZXN1cmZlciIsImRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsMkJBQUE7QUFBQUMsUUFBQSxDQUFBRCwyQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTiwyQkFBQTs7O0FDQUEsU0FBU08sRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0VBQUMsT0FBTyxLQUFJRCxFQUFBLEtBQUlBLEVBQUEsR0FBRUUsT0FBQSxHQUFXLFVBQVNDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsU0FBU0MsR0FBRUMsRUFBQSxFQUFFO01BQUMsSUFBRztRQUFDQyxFQUFBLENBQUVOLEVBQUEsQ0FBRU8sSUFBQSxDQUFLRixFQUFDLENBQUM7TUFBQyxTQUFPRyxFQUFBLEVBQU47UUFBU0wsRUFBQSxDQUFFSyxFQUFDO01BQUM7SUFBQztJQUFDLFNBQVNDLEdBQUVKLEVBQUEsRUFBRTtNQUFDLElBQUc7UUFBQ0MsRUFBQSxDQUFFTixFQUFBLENBQUVVLEtBQUEsQ0FBTUwsRUFBQyxDQUFDO01BQUMsU0FBT0csRUFBQSxFQUFOO1FBQVNMLEVBQUEsQ0FBRUssRUFBQztNQUFDO0lBQUM7SUFBQyxTQUFTRixHQUFFRCxFQUFBLEVBQUU7TUFBQyxJQUFJTSxFQUFBO01BQUVOLEVBQUEsQ0FBRU8sSUFBQSxHQUFLVixFQUFBLENBQUVHLEVBQUEsQ0FBRVEsS0FBSyxLQUFHRixFQUFBLEdBQUVOLEVBQUEsQ0FBRVEsS0FBQSxFQUFNRixFQUFBLFlBQWFaLEVBQUEsR0FBRVksRUFBQSxHQUFFLElBQUlaLEVB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