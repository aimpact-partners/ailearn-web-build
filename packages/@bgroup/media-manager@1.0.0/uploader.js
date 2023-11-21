System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/model", "@bgroup/media-manager@1.0.0/main", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Uploader, XHRLoader, __beyond_pkg, hmr;
  _export({
    Uploader: void 0,
    XHRLoader: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive116Model) {
      dependency_1 = _beyondJsReactive116Model;
    }, function (_bgroupMediaManager100Main) {
      dependency_2 = _bgroupMediaManager100Main;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.0"], ["socket.io-client", "4.7.1"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/media-manager@1.0.0/uploader"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@bgroup/media-manager/main', dependency_2], ['@beyond-js/kernel/core', dependency_3]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./draggable
      ***************************/
      ims.set('./draggable', {
        hash: 2716703498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableUploader = void 0;
          class DraggableUploader {
            #parent;
            #files;
            constructor(parent) {
              this.#parent = parent;
              this.#files = parent.files;
            }
            onDrop = event => {
              event.preventDefault();
              const {
                dataTransfer
              } = event;
              console.log(19, event);
              if (!dataTransfer.items.length) {
                return;
              }
              const files = [];
              for (let i = 0; i < dataTransfer.items.length; ++i) {
                const file = dataTransfer.items[i].getAsFile();
                if (file) {
                  files.push(file);
                }
              }
              this.#files.readLocal(files);
            };
            /**
             * This event runs only when are files on the draggable area.
             * @param event
             */
            onDragOver = event => {
              event.preventDefault();
            };
            /**
             * Add the drag & drop events to the control
             * @param {HTMLInputElement} selector
             */
            add(selector) {
              selector.ondrop = this.onDrop;
              selector.ondragover = this.onDragOver;
            }
          }
          exports.DraggableUploader = DraggableUploader;
        }
      });

      /****************************
      INTERNAL MODULE: ./files/base
      ****************************/

      ims.set('./files/base', {
        hash: 833790498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseFile = void 0;
          var _model = require("@beyond-js/reactive/model");
          class BaseFile extends _model.ReactiveModel {
            #loaded = 0;
            #specs;
            #type;
            regExp = /[^\w\d.]/g;
            #errors = [];
            get errors() {
              return this.#errors;
            }
            _total = 0;
            get total() {
              return this._total;
            }
            set total(value) {
              if (value === this._total) return;
              this._total = value;
            }
            _items = new Map();
            get items() {
              return this._items;
            }
            get entries() {
              return [...this._items.values()];
            }
            constructor(parent, specs) {
              super();
              this.#specs = specs;
              this.#type = specs.type ? specs.type : 'any';
            }
            FILE_TYPE = Object.freeze({
              document: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/pdf'],
              image: ['image/png', 'image/jpeg', 'image/gif'],
              json: ['application/json'],
              zip: ['application/x-zip-compressed'],
              audio: ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/webm', 'audio/aac', 'audio/flac', 'audio/x-m4a' // mp4 files, older version
              ]
            });

            #onload = event => {
              event.target.removeEventListener('load', this.#onload);
              if (this.#specs.onload && typeof this.#specs.onload === 'function') {
                this.#specs.onload(event);
              }
            };
            #onloadend = (event, file) => {
              this.#loaded = this.#loaded + 1;
              const name = file.name.replace(this.regExp, '');
              file = this._items.get(name);
              file.src = event.target.result;
              this._items.set(name, file);
              event.target.removeEventListener('onloadend', this.#onloadend);
              this.triggerEvent('file.loaded');
              if (this.#loaded === this._items.size) this.triggerEvent('loadend');
              if (this.#specs.onloadend && typeof this.#specs.onloadend === 'function') {
                this.#specs.onload(event);
              }
            };
            #onerror = event => console.error(4, event);
            validate = file => {
              const isValid = !!this.FILE_TYPE[this.#type].find(item => item === file.type);
              if (!isValid) {
                this.#errors.push(file.name.replace(this.regExp, ''));
              }
              return isValid;
            };
            #readFile = async file => {
              if (this.#type !== 'any') {
                const isValid = await this.validate(file);
                if (!isValid) {
                  this.triggerEvent('error');
                  return;
                }
              }
              const reader = new FileReader();
              reader.onload = event => this.#onload(event);
              reader.onloadend = event => this.#onloadend(event, file);
              reader.onerror = event => this.#onerror(event);
              reader.readAsDataURL(file);
            };
            #validateLoad = () => {
              if (this.#loaded === this._items.size) {}
            };
            clean = () => {
              this._items = new Map();
              this.#loaded = 0;
              this.triggerEvent();
            };
            /**
             *
             * @param fileList
             */
            readLocal = async fileList => {
              this.fetching = true;
              const promises = [];
              for (let i = 0; i < fileList.length; ++i) {
                const file = fileList[i];
                this._items.set(file.name.replace(this.regExp, ''), file);
                promises.push(this.#readFile(file));
              }
              await Promise.all(promises);
              this.fetching = false;
              //@todo trigger remove
            };
          }

          exports.BaseFile = BaseFile;
        }
      });

      /*****************************
      INTERNAL MODULE: ./files/index
      *****************************/

      ims.set('./files/index', {
        hash: 3307556285,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FilesUploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _mobile = require("./mobile");
          var _web = require("./web");
          class FilesUploader extends _model.ReactiveModel {
            static #instance;
            static getInstance(parent, specs) {
              if (this.#instance) return this.#instance;
              if (globalThis.phonegap) return new _mobile.MobileFilesUploader(parent);
              return new _web.WebFilesUploader(parent, specs);
            }
          }
          exports.FilesUploader = FilesUploader;
        }
      });

      /******************************
      INTERNAL MODULE: ./files/mobile
      ******************************/

      ims.set('./files/mobile', {
        hash: 4172311851,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileFilesUploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          class MobileFilesUploader extends _model.ReactiveModel {
            _loaded = 0;
            files = new Map();
            base64;
            _specs;
            _errors = [];
            constructor(specs) {
              super();
              this._specs = specs;
            }
            clean = () => {
              this.files = new Map();
              this._loaded = 0;
            };
            getFiles = async data => {
              this.clean();
              this.base64 = data.url;
              this.triggerEvent('loading');
              /**
               * todo: @julio check
               */
              const [dir, filename] = data.name.split('com.jidadesarrollos.bovino/cache/');
              this.files.set(filename, data.url);
              this.triggerEvent('loadend');
            };
            get entries() {
              return this.files;
            }
            get total() {
              return this.files.size;
            }
          }
          exports.MobileFilesUploader = MobileFilesUploader;
        }
      });

      /***************************
      INTERNAL MODULE: ./files/web
      ***************************/

      ims.set('./files/web', {
        hash: 4019010510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WebFilesUploader = void 0;
          var _base = require("./base");
          class WebFilesUploader extends _base.BaseFile {}
          exports.WebFilesUploader = WebFilesUploader;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4059091355,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Uploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _draggable = require("./draggable");
          var _files = require("./files");
          var _xhr = require("./xhr");
          var _main = require("@bgroup/media-manager/main");
          /*bundle*/
          class Uploader extends _model.ReactiveModel {
            #files;
            get files() {
              return this.#files;
            }
            #fileInput = document.createElement('input');
            #selector;
            #attrs;
            #draggable;
            #control;
            #specs;
            #errors;
            get errors() {
              return this.#errors;
            }
            constructor(specs = {}) {
              super();
              if (!specs.input) specs.input = {};
              /**
               * Manager of the files
               * @type {UploadFiles}
               */
              this.#files = _files.FilesUploader.getInstance(this, specs);
              this.#draggable = new _draggable.DraggableUploader(this);
              globalThis.up = this;
              this.#files.on('change', this.#listenChanges);
              this.#files.on('error', this.getErrors);
              this.#files.on('loadend', this.filesLoaded);
              const params = {
                ...specs.input
              };
              if (specs.hasOwnProperty('multiple')) params.multiple = specs.multiple;
              this.#specs = specs;
              this.setAttributes(params);
            }
            #listenChanges = () => {
              this.fetching = this.#files.fetching;
              this.ready = this.#files.ready;
            };
            setAttributes = specs => {
              if (!specs) specs = {};
              let attrs = {
                type: 'file',
                style: 'display:none',
                name: 'input_upload',
                ...specs
              };
              if (attrs.multiple) this.#fileInput.accept = 'directory/*';
              for (let prop in attrs) {
                this.#fileInput.setAttribute(prop, attrs[prop]);
              }
              this.#attrs = attrs;
            };
            // };
            openDialog = () => {
              this.#fileInput.click();
            };
            filesLoaded = () => this.triggerEvent('loadend');
            pictureLoaded = () => this.triggerEvent('pictureLoaded');
            pictureLoading = () => this.triggerEvent('pictureLoading');
            getErrors = () => this.#errors = this.files.errors;
            clean = async () => {
              await this.#files.clean();
              // await this.#mobileFiles.clean();
            };

            delete = async fileName => {
              await this.#files.items.delete(fileName);
              this.triggerEvent();
            };
            create = (selector, draggableSelector) => {
              if (_main.mediaDevice.type === 'MOBILE') {
                selector.addEventListener('click', _main.mediaDevice.openGallery);
              }
              this.#selector = selector;
              /**
               * Adds de click and change events into the input file
               */
              const addListeners = () => {
                if (!selector) return;
                selector.addEventListener('click', this.openDialog);
                this.#fileInput.addEventListener('change', this.#onChangeInput);
              };
              selector.after(this.#fileInput);
              addListeners();
              if (draggableSelector) this.#draggable.add(draggableSelector);
            };
            #onChangeInput = async event => {
              this.clean();
              this.fetching = true;
              this.triggerEvent(); // todo: fetching property need to fires this event
              const target = event.currentTarget;
              window.setTimeout(() => {
                this.#files.total = target.files.length;
                this.#files.readLocal(target.files);
                this.fetching = false;
                this.triggerEvent(); // todo: fetching property need to fires this event
              }, 0);
            };
            publish = async (additionalParams = {}) => {
              const form = new FormData();
              //const collection = isCamera ? mobileFiles : files;
              const collection = this.#files;
              const specs = this.#specs;
              const name = collection.total > 1 ? `${specs.name}` : specs.name;
              const items = collection.entries.map(item => item);
              form.append(name, JSON.stringify(items));
              collection.entries.forEach(item => form.append(name, item));
              if (!specs.params) specs.params = {};
              const params = {
                ...specs.params,
                ...additionalParams
              };
              for (let param in params) {
                if (!params.hasOwnProperty(param)) continue;
                form.append(param, params[param]);
              }
              const xhr = new _xhr.XHRLoader();
              const response = await xhr.upload(form, specs.url);
              return response.json();
            };
          }
          exports.Uploader = Uploader;
        }
      });

      /************************
      INTERNAL MODULE: ./resize
      ************************/

      ims.set('./resize', {
        hash: 1913477879,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.resizePicture = void 0;
          const resizePicture = (uri, specs) => new Promise(resolve => {
            specs = specs ? specs : {};
            const maxWidth = specs.maxWidth ? specs.maxWidth : 800;
            const maxHeight = specs.maxHeight ? specs.maxHeight : maxWidth / (4 / 3);
            const quality = specs.quality ? specs.quality : 0.8;
            const img = new Image();
            img.src = uri;
            img.onload = function () {
              let width = img.width;
              let height = img.height;
              let orientation;
              if (width < height) {
                orientation = "portrait";
                if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
                }
              } else {
                orientation = "landscape";
                if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
                }
              }
              const canvas = document.createElement("canvas");
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0, width, height);
              let image = canvas.toDataURL("image/jpeg", quality);
              if (!specs.rotate) {
                resolve({
                  src: image,
                  width: width,
                  height: height,
                  orientation: orientation
                });
              }
              const rotateCanvas = document.createElement("canvas");
              let ctxRotate = rotateCanvas.getContext("2d");
              rotateCanvas.height = width;
              rotateCanvas.width = height;
              const imgRotate = new Image();
              imgRotate.onload = () => {
                ctxRotate.translate(rotateCanvas.width / 2, rotateCanvas.height / 2);
                ctxRotate.rotate(Math.PI / 2);
                ctxRotate.drawImage(imgRotate, -imgRotate.width / 2, -imgRotate.height / 2);
                ctxRotate.rotate(-Math.PI / 2);
                ctxRotate.translate(-imgRotate.width / 2, -imgRotate.height / 2);
                const imageRotated = rotateCanvas.toDataURL("image/jpg", 1);
                resolve({
                  src: imageRotated,
                  width: width,
                  height: height,
                  orientation: orientation,
                  aja: true
                });
              };
              imgRotate.src = image;
            };
          });
          exports.resizePicture = resizePicture;
        }
      });

      /*********************
      INTERNAL MODULE: ./xhr
      *********************/

      ims.set('./xhr', {
        hash: 2968170215,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.XHRLoader = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle */
          class XHRLoader extends _model.ReactiveModel {
            promise;
            uploaded;
            progress;
            error;
            constructor() {
              super();
              this.promise = undefined;
              this.uploaded = false;
              this.progress = 0;
              this.error = false;
            }
            #bearer;
            bearer(bearer) {
              if (bearer) this.#bearer = bearer;
              return this;
            }
            get uploading() {
              return !!this.promise;
            }
            get isUploaded() {
              return this.uploaded;
            }
            get uploadProgress() {
              return this.progress;
            }
            get hasError() {
              return this.error;
            }
            onProgress(event) {
              if (event.lengthComputable) {
                const percent = Math.round(event.loaded * 100 / event.total);
                this.progress = parseInt(percent.toString());
              }
              this.triggerEvent('change');
            }
            onCompleted(event) {
              this.uploaded = true;
              this.promise.resolve();
              this.triggerEvent('change');
              setTimeout(() => {
                this.promise = undefined;
                this.triggerEvent('change');
              }, 100);
            }
            onError(event) {
              console.error('Error uploading picture', event);
              this.error = true;
              this.promise.reject();
              this.triggerEvent('change');
            }
            onAbort() {
              this.promise.resolve(false);
              this.triggerEvent('change');
            }
            getHeaders = specs => {
              let headers = new Headers();
              const bearer = specs.bearer || this.#bearer;
              if (bearer) {
                headers.append('Authorization', `Bearer ${bearer}`);
              }
              if (specs.bearer) delete specs.bearer;
              const keys = Object.keys(specs);
              keys.forEach(key => {
                if (key === 'bearer') return;
                headers.append(key, specs[key]);
              });
              return headers;
            };
            async upload(data, url) {
              try {
                let headers = this.getHeaders({});
                const specs = {
                  method: 'post',
                  headers,
                  body: data
                };
                return fetch(url, specs);
              } catch (e) {
                console.error('error', e);
              }
            }
            abort() {
              if (this.promise) {
                this.promise.reject();
                this.triggerEvent('change');
              }
            }
          }
          exports.XHRLoader = XHRLoader;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Uploader",
        "name": "Uploader"
      }, {
        "im": "./xhr",
        "from": "XHRLoader",
        "name": "XHRLoader"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Uploader') && _export("Uploader", Uploader = require ? require('./index').Uploader : value);
        (require || prop === 'XHRLoader') && _export("XHRLoader", XHRLoader = require ? require('./xhr').XHRLoader : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEcmFnZ2FibGVVcGxvYWRlciIsInBhcmVudCIsImZpbGVzIiwiY29uc3RydWN0b3IiLCJvbkRyb3AiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YVRyYW5zZmVyIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwibGVuZ3RoIiwiaSIsImZpbGUiLCJnZXRBc0ZpbGUiLCJwdXNoIiwicmVhZExvY2FsIiwib25EcmFnT3ZlciIsImFkZCIsInNlbGVjdG9yIiwib25kcm9wIiwib25kcmFnb3ZlciIsImV4cG9ydHMiLCJfbW9kZWwiLCJyZXF1aXJlIiwiQmFzZUZpbGUiLCJSZWFjdGl2ZU1vZGVsIiwibG9hZGVkIiwic3BlY3MiLCJ0eXBlIiwicmVnRXhwIiwiZXJyb3JzIiwiX3RvdGFsIiwidG90YWwiLCJ2YWx1ZSIsIl9pdGVtcyIsIk1hcCIsImVudHJpZXMiLCJ2YWx1ZXMiLCJGSUxFX1RZUEUiLCJPYmplY3QiLCJmcmVlemUiLCJkb2N1bWVudCIsImltYWdlIiwianNvbiIsInppcCIsImF1ZGlvIiwib25sb2FkIiwidGFyZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9ubG9hZGVuZCIsIiNvbmxvYWRlbmQiLCJuYW1lIiwicmVwbGFjZSIsImdldCIsInNyYyIsInJlc3VsdCIsInNldCIsInRyaWdnZXJFdmVudCIsInNpemUiLCJvbmVycm9yIiwiZXJyb3IiLCJ2YWxpZGF0ZSIsImlzVmFsaWQiLCJmaW5kIiwiaXRlbSIsInJlYWRGaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJ2YWxpZGF0ZUxvYWQiLCIjdmFsaWRhdGVMb2FkIiwiY2xlYW4iLCJmaWxlTGlzdCIsImZldGNoaW5nIiwicHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwiX21vYmlsZSIsIl93ZWIiLCJGaWxlc1VwbG9hZGVyIiwiaW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsImdsb2JhbFRoaXMiLCJwaG9uZWdhcCIsIk1vYmlsZUZpbGVzVXBsb2FkZXIiLCJXZWJGaWxlc1VwbG9hZGVyIiwiX2xvYWRlZCIsImJhc2U2NCIsIl9zcGVjcyIsIl9lcnJvcnMiLCJnZXRGaWxlcyIsImRhdGEiLCJ1cmwiLCJkaXIiLCJmaWxlbmFtZSIsInNwbGl0IiwiX2Jhc2UiLCJfZHJhZ2dhYmxlIiwiX2ZpbGVzIiwiX3hociIsIl9tYWluIiwiVXBsb2FkZXIiLCJmaWxlSW5wdXQiLCJjcmVhdGVFbGVtZW50IiwiYXR0cnMiLCJkcmFnZ2FibGUiLCJjb250cm9sIiwiaW5wdXQiLCJ1cCIsIm9uIiwibGlzdGVuQ2hhbmdlcyIsImdldEVycm9ycyIsImZpbGVzTG9hZGVkIiwicGFyYW1zIiwiaGFzT3duUHJvcGVydHkiLCJtdWx0aXBsZSIsInNldEF0dHJpYnV0ZXMiLCIjbGlzdGVuQ2hhbmdlcyIsInJlYWR5Iiwic3R5bGUiLCJhY2NlcHQiLCJwcm9wIiwic2V0QXR0cmlidXRlIiwib3BlbkRpYWxvZyIsImNsaWNrIiwicGljdHVyZUxvYWRlZCIsInBpY3R1cmVMb2FkaW5nIiwiZGVsZXRlIiwiZmlsZU5hbWUiLCJjcmVhdGUiLCJkcmFnZ2FibGVTZWxlY3RvciIsIm1lZGlhRGV2aWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5HYWxsZXJ5IiwiYWRkTGlzdGVuZXJzIiwib25DaGFuZ2VJbnB1dCIsImFmdGVyIiwiY3VycmVudFRhcmdldCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJwdWJsaXNoIiwiYWRkaXRpb25hbFBhcmFtcyIsImZvcm0iLCJGb3JtRGF0YSIsImNvbGxlY3Rpb24iLCJtYXAiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZm9yRWFjaCIsInBhcmFtIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJyZXNpemVQaWN0dXJlIiwidXJpIiwicmVzb2x2ZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicXVhbGl0eSIsImltZyIsIkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJvcmllbnRhdGlvbiIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJyb3RhdGUiLCJyb3RhdGVDYW52YXMiLCJjdHhSb3RhdGUiLCJpbWdSb3RhdGUiLCJ0cmFuc2xhdGUiLCJNYXRoIiwiUEkiLCJpbWFnZVJvdGF0ZWQiLCJhamEiLCJwcm9taXNlIiwidXBsb2FkZWQiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsImJlYXJlciIsInVwbG9hZGluZyIsImlzVXBsb2FkZWQiLCJ1cGxvYWRQcm9ncmVzcyIsImhhc0Vycm9yIiwib25Qcm9ncmVzcyIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50Iiwicm91bmQiLCJwYXJzZUludCIsInRvU3RyaW5nIiwib25Db21wbGV0ZWQiLCJvbkVycm9yIiwicmVqZWN0Iiwib25BYm9ydCIsImdldEhlYWRlcnMiLCJoZWFkZXJzIiwiSGVhZGVycyIsImtleXMiLCJrZXkiLCJtZXRob2QiLCJib2R5IiwiZmV0Y2giLCJlIiwiYWJvcnQiXSwic291cmNlcyI6WyIvZHJhZ2dhYmxlLnRzIiwiL2ZpbGVzL2Jhc2UudHMiLCIvZmlsZXMvaW5kZXgudHMiLCIvZmlsZXMvbW9iaWxlLnRzIiwiL2ZpbGVzL3dlYi50cyIsIi9pbmRleC50cyIsIi9yZXNpemUudHMiLCIveGhyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBSU0sTUFBT0EsaUJBQWlCO1lBQzFCLENBQUFDLE1BQU87WUFDUCxDQUFBQyxLQUFNO1lBRU5DLFlBQVlGLE1BQVc7Y0FDbkIsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQUMsS0FBTSxHQUFHRCxNQUFNLENBQUNDLEtBQUs7WUFDOUI7WUFFQUUsTUFBTSxHQUFJQyxLQUFnQixJQUFJO2NBQzFCQSxLQUFLLENBQUNDLGNBQWMsRUFB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