System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.2/model", "@aimpact/media-manager@1.0.0/main", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Uploader, XHRLoader, __beyond_pkg, hmr;
  _export({
    Uploader: void 0,
    XHRLoader: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive112Model) {
      dependency_1 = _beyondJsReactive112Model;
    }, function (_aimpactMediaManager100Main) {
      dependency_2 = _aimpactMediaManager100Main;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["socket.io-client", "4.7.2"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@1.0.0/uploader"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/media-manager/main', dependency_2], ['@beyond-js/kernel/core', dependency_3]]);
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
        hash: 4153979631,
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
          var _main = require("@aimpact/media-manager/main");
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
        hash: 4151157772,
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
            async upload(data, url) {
              try {
                const specs = {
                  method: 'post',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEcmFnZ2FibGVVcGxvYWRlciIsInBhcmVudCIsImZpbGVzIiwiY29uc3RydWN0b3IiLCJvbkRyb3AiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YVRyYW5zZmVyIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwibGVuZ3RoIiwiaSIsImZpbGUiLCJnZXRBc0ZpbGUiLCJwdXNoIiwicmVhZExvY2FsIiwib25EcmFnT3ZlciIsImFkZCIsInNlbGVjdG9yIiwib25kcm9wIiwib25kcmFnb3ZlciIsImV4cG9ydHMiLCJfbW9kZWwiLCJyZXF1aXJlIiwiQmFzZUZpbGUiLCJSZWFjdGl2ZU1vZGVsIiwibG9hZGVkIiwic3BlY3MiLCJ0eXBlIiwicmVnRXhwIiwiZXJyb3JzIiwiX3RvdGFsIiwidG90YWwiLCJ2YWx1ZSIsIl9pdGVtcyIsIk1hcCIsImVudHJpZXMiLCJ2YWx1ZXMiLCJGSUxFX1RZUEUiLCJPYmplY3QiLCJmcmVlemUiLCJkb2N1bWVudCIsImltYWdlIiwianNvbiIsInppcCIsImF1ZGlvIiwib25sb2FkIiwidGFyZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9ubG9hZGVuZCIsIiNvbmxvYWRlbmQiLCJuYW1lIiwicmVwbGFjZSIsImdldCIsInNyYyIsInJlc3VsdCIsInNldCIsInRyaWdnZXJFdmVudCIsInNpemUiLCJvbmVycm9yIiwiZXJyb3IiLCJ2YWxpZGF0ZSIsImlzVmFsaWQiLCJmaW5kIiwiaXRlbSIsInJlYWRGaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJ2YWxpZGF0ZUxvYWQiLCIjdmFsaWRhdGVMb2FkIiwiY2xlYW4iLCJmaWxlTGlzdCIsImZldGNoaW5nIiwicHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwiX21vYmlsZSIsIl93ZWIiLCJGaWxlc1VwbG9hZGVyIiwiaW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsImdsb2JhbFRoaXMiLCJwaG9uZWdhcCIsIk1vYmlsZUZpbGVzVXBsb2FkZXIiLCJXZWJGaWxlc1VwbG9hZGVyIiwiX2xvYWRlZCIsImJhc2U2NCIsIl9zcGVjcyIsIl9lcnJvcnMiLCJnZXRGaWxlcyIsImRhdGEiLCJ1cmwiLCJkaXIiLCJmaWxlbmFtZSIsInNwbGl0IiwiX2Jhc2UiLCJfZHJhZ2dhYmxlIiwiX2ZpbGVzIiwiX3hociIsIl9tYWluIiwiVXBsb2FkZXIiLCJmaWxlSW5wdXQiLCJjcmVhdGVFbGVtZW50IiwiYXR0cnMiLCJkcmFnZ2FibGUiLCJjb250cm9sIiwiaW5wdXQiLCJ1cCIsIm9uIiwibGlzdGVuQ2hhbmdlcyIsImdldEVycm9ycyIsImZpbGVzTG9hZGVkIiwicGFyYW1zIiwiaGFzT3duUHJvcGVydHkiLCJtdWx0aXBsZSIsInNldEF0dHJpYnV0ZXMiLCIjbGlzdGVuQ2hhbmdlcyIsInJlYWR5Iiwic3R5bGUiLCJhY2NlcHQiLCJwcm9wIiwic2V0QXR0cmlidXRlIiwib3BlbkRpYWxvZyIsImNsaWNrIiwicGljdHVyZUxvYWRlZCIsInBpY3R1cmVMb2FkaW5nIiwiZGVsZXRlIiwiZmlsZU5hbWUiLCJjcmVhdGUiLCJkcmFnZ2FibGVTZWxlY3RvciIsIm1lZGlhRGV2aWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5HYWxsZXJ5IiwiYWRkTGlzdGVuZXJzIiwib25DaGFuZ2VJbnB1dCIsImFmdGVyIiwiY3VycmVudFRhcmdldCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJwdWJsaXNoIiwiYWRkaXRpb25hbFBhcmFtcyIsImZvcm0iLCJGb3JtRGF0YSIsImNvbGxlY3Rpb24iLCJtYXAiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZm9yRWFjaCIsInBhcmFtIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJyZXNpemVQaWN0dXJlIiwidXJpIiwicmVzb2x2ZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicXVhbGl0eSIsImltZyIsIkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJvcmllbnRhdGlvbiIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJyb3RhdGUiLCJyb3RhdGVDYW52YXMiLCJjdHhSb3RhdGUiLCJpbWdSb3RhdGUiLCJ0cmFuc2xhdGUiLCJNYXRoIiwiUEkiLCJpbWFnZVJvdGF0ZWQiLCJhamEiLCJwcm9taXNlIiwidXBsb2FkZWQiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsInVwbG9hZGluZyIsImlzVXBsb2FkZWQiLCJ1cGxvYWRQcm9ncmVzcyIsImhhc0Vycm9yIiwib25Qcm9ncmVzcyIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50Iiwicm91bmQiLCJwYXJzZUludCIsInRvU3RyaW5nIiwib25Db21wbGV0ZWQiLCJvbkVycm9yIiwicmVqZWN0Iiwib25BYm9ydCIsIm1ldGhvZCIsImJvZHkiLCJmZXRjaCIsImUiLCJhYm9ydCJdLCJzb3VyY2VzIjpbIi9kcmFnZ2FibGUudHMiLCIvZmlsZXMvYmFzZS50cyIsIi9maWxlcy9pbmRleC50cyIsIi9maWxlcy9tb2JpbGUudHMiLCIvZmlsZXMvd2ViLnRzIiwiL2luZGV4LnRzIiwiL3Jlc2l6ZS50cyIsIi94aHIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFJTSxNQUFPQSxpQkFBaUI7WUFDMUIsQ0FBQUMsTUFBTztZQUNQLENBQUFDLEtBQU07WUFFTkMsWUFBWUYsTUFBVztjQUNuQixJQUFJLENBQUMsQ0FBQUEsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBQyxLQUFNLEdBQUdELE1BQU0sQ0FBQ0MsS0FBSztZQUM5QjtZQUVBRSxNQUFNLEdBQUlDLEtBQWdCLElBQUk7Y0FDMUJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCLE1BQU07Z0JBQUVDO2NBQVksQ0FBRSxHQUFHRixLQUFLO2NBQzlCRyxPQUFPLENB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