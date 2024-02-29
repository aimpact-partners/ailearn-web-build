System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.11/model", "@beyond-js/kernel@0.1.9/core", "@bgroup/media-manager@1.0.0/main"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Uploader, XHRLoader, __beyond_pkg, hmr;
  _export({
    Uploader: void 0,
    XHRLoader: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1111Model) {
      dependency_1 = _beyondJsReactive1111Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_bgroupMediaManager100Main) {
      dependency_3 = _bgroupMediaManager100Main;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['@bgroup/media-manager/main', dependency_3]]);
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
        hash: 1807685762,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseFile = void 0;
          var _core = require("@beyond-js/kernel/core");
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
            // @todo: @jircdev add support for multiple files in extensible way
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
              const promise = new _core.PendingPromise();
              if (this.#type !== 'any') {
                const isValid = await this.validate(file);
                if (!isValid) {
                  this.triggerEvent('error');
                  return;
                }
              }
              const reader = new FileReader();
              reader.onload = event => this.#onload(event);
              reader.onloadend = event => {
                this.#onloadend(event, file);
                promise.resolve();
              };
              reader.onerror = event => this.#onerror(event);
              reader.readAsDataURL(file);
              return promise;
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
        hash: 116560376,
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
              window.setTimeout(async () => {
                this.#files.total = target.files.length;
                await this.#files.readLocal(target.files);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEcmFnZ2FibGVVcGxvYWRlciIsInBhcmVudCIsImZpbGVzIiwiY29uc3RydWN0b3IiLCJvbkRyb3AiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YVRyYW5zZmVyIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwibGVuZ3RoIiwiaSIsImZpbGUiLCJnZXRBc0ZpbGUiLCJwdXNoIiwicmVhZExvY2FsIiwib25EcmFnT3ZlciIsImFkZCIsInNlbGVjdG9yIiwib25kcm9wIiwib25kcmFnb3ZlciIsImV4cG9ydHMiLCJfY29yZSIsInJlcXVpcmUiLCJfbW9kZWwiLCJCYXNlRmlsZSIsIlJlYWN0aXZlTW9kZWwiLCJsb2FkZWQiLCJzcGVjcyIsInR5cGUiLCJyZWdFeHAiLCJlcnJvcnMiLCJfdG90YWwiLCJ0b3RhbCIsInZhbHVlIiwiX2l0ZW1zIiwiTWFwIiwiZW50cmllcyIsInZhbHVlcyIsIkZJTEVfVFlQRSIsIk9iamVjdCIsImZyZWV6ZSIsImRvY3VtZW50IiwiaW1hZ2UiLCJqc29uIiwiemlwIiwiYXVkaW8iLCJvbmxvYWQiLCJ0YXJnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25sb2FkZW5kIiwiI29ubG9hZGVuZCIsIm5hbWUiLCJyZXBsYWNlIiwiZ2V0Iiwic3JjIiwicmVzdWx0Iiwic2V0IiwidHJpZ2dlckV2ZW50Iiwic2l6ZSIsIm9uZXJyb3IiLCJlcnJvciIsInZhbGlkYXRlIiwiaXNWYWxpZCIsImZpbmQiLCJpdGVtIiwicmVhZEZpbGUiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVzb2x2ZSIsInJlYWRBc0RhdGFVUkwiLCJ2YWxpZGF0ZUxvYWQiLCIjdmFsaWRhdGVMb2FkIiwiY2xlYW4iLCJmaWxlTGlzdCIsImZldGNoaW5nIiwicHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwiX21vYmlsZSIsIl93ZWIiLCJGaWxlc1VwbG9hZGVyIiwiaW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsImdsb2JhbFRoaXMiLCJwaG9uZWdhcCIsIk1vYmlsZUZpbGVzVXBsb2FkZXIiLCJXZWJGaWxlc1VwbG9hZGVyIiwiX2xvYWRlZCIsImJhc2U2NCIsIl9zcGVjcyIsIl9lcnJvcnMiLCJnZXRGaWxlcyIsImRhdGEiLCJ1cmwiLCJkaXIiLCJmaWxlbmFtZSIsInNwbGl0IiwiX2Jhc2UiLCJfZHJhZ2dhYmxlIiwiX2ZpbGVzIiwiX3hociIsIl9tYWluIiwiVXBsb2FkZXIiLCJmaWxlSW5wdXQiLCJjcmVhdGVFbGVtZW50IiwiYXR0cnMiLCJkcmFnZ2FibGUiLCJjb250cm9sIiwiaW5wdXQiLCJ1cCIsIm9uIiwibGlzdGVuQ2hhbmdlcyIsImdldEVycm9ycyIsImZpbGVzTG9hZGVkIiwicGFyYW1zIiwiaGFzT3duUHJvcGVydHkiLCJtdWx0aXBsZSIsInNldEF0dHJpYnV0ZXMiLCIjbGlzdGVuQ2hhbmdlcyIsInJlYWR5Iiwic3R5bGUiLCJhY2NlcHQiLCJwcm9wIiwic2V0QXR0cmlidXRlIiwib3BlbkRpYWxvZyIsImNsaWNrIiwicGljdHVyZUxvYWRlZCIsInBpY3R1cmVMb2FkaW5nIiwiZGVsZXRlIiwiZmlsZU5hbWUiLCJjcmVhdGUiLCJkcmFnZ2FibGVTZWxlY3RvciIsIm1lZGlhRGV2aWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5HYWxsZXJ5IiwiYWRkTGlzdGVuZXJzIiwib25DaGFuZ2VJbnB1dCIsImFmdGVyIiwiY3VycmVudFRhcmdldCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJwdWJsaXNoIiwiYWRkaXRpb25hbFBhcmFtcyIsImZvcm0iLCJGb3JtRGF0YSIsImNvbGxlY3Rpb24iLCJtYXAiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZm9yRWFjaCIsInBhcmFtIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJyZXNpemVQaWN0dXJlIiwidXJpIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJxdWFsaXR5IiwiaW1nIiwiSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm9yaWVudGF0aW9uIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsInRvRGF0YVVSTCIsInJvdGF0ZSIsInJvdGF0ZUNhbnZhcyIsImN0eFJvdGF0ZSIsImltZ1JvdGF0ZSIsInRyYW5zbGF0ZSIsIk1hdGgiLCJQSSIsImltYWdlUm90YXRlZCIsImFqYSIsInVwbG9hZGVkIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJiZWFyZXIiLCJ1cGxvYWRpbmciLCJpc1VwbG9hZGVkIiwidXBsb2FkUHJvZ3Jlc3MiLCJoYXNFcnJvciIsIm9uUHJvZ3Jlc3MiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudCIsInJvdW5kIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIm9uQ29tcGxldGVkIiwib25FcnJvciIsInJlamVjdCIsIm9uQWJvcnQiLCJnZXRIZWFkZXJzIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJrZXlzIiwia2V5IiwibWV0aG9kIiwiYm9keSIsImZldGNoIiwiZSIsImFib3J0Il0sInNvdXJjZXMiOlsiL2RyYWdnYWJsZS50cyIsIi9maWxlcy9iYXNlLnRzIiwiL2ZpbGVzL2luZGV4LnRzIiwiL2ZpbGVzL21vYmlsZS50cyIsIi9maWxlcy93ZWIudHMiLCIvaW5kZXgudHMiLCIvcmVzaXplLnRzIiwiL3hoci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUlNLE1BQU9BLGlCQUFpQjtZQUMxQixDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsS0FBTTtZQUVOQyxZQUFZRixNQUFXO2NBQ25CLElBQUksQ0FBQyxDQUFBQSxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFDLEtBQU0sR0FBR0QsTUFBTSxDQUFDQyxLQUFLO1lBQzlCO1lBRUFFLE1BQU0sR0FBSUMsS0FBZ0IsSUFBSTtj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