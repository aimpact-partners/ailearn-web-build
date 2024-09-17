System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/media-manager@0.0.1-beta.1/main"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Uploader, XHRLoader, __beyond_pkg, hmr;
  _export({
    Uploader: void 0,
    XHRLoader: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive120Model) {
      dependency_1 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_aimpactMediaManager001Beta1Main) {
      dependency_3 = _aimpactMediaManager001Beta1Main;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.12"], ["socket.io-client", "4.7.5"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/ailearn-app", "0.1.6-dev.34"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@0.0.1-beta.1/uploader"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['@aimpact/media-manager/main', dependency_3]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./draggable
      ***************************/
      ims.set('./draggable', {
        hash: 2049727806,
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
        hash: 1284523260,
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
        hash: 1023732665,
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
        hash: 2603848609,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEcmFnZ2FibGVVcGxvYWRlciIsInBhcmVudCIsImZpbGVzIiwiY29uc3RydWN0b3IiLCJvbkRyb3AiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YVRyYW5zZmVyIiwiaXRlbXMiLCJsZW5ndGgiLCJpIiwiZmlsZSIsImdldEFzRmlsZSIsInB1c2giLCJyZWFkTG9jYWwiLCJvbkRyYWdPdmVyIiwiYWRkIiwic2VsZWN0b3IiLCJvbmRyb3AiLCJvbmRyYWdvdmVyIiwiZXhwb3J0cyIsIl9jb3JlIiwicmVxdWlyZSIsIl9tb2RlbCIsIkJhc2VGaWxlIiwiUmVhY3RpdmVNb2RlbCIsImxvYWRlZCIsInNwZWNzIiwidHlwZSIsInJlZ0V4cCIsImVycm9ycyIsIl90b3RhbCIsInRvdGFsIiwidmFsdWUiLCJfaXRlbXMiLCJNYXAiLCJlbnRyaWVzIiwidmFsdWVzIiwiRklMRV9UWVBFIiwiT2JqZWN0IiwiZnJlZXplIiwiZG9jdW1lbnQiLCJpbWFnZSIsImpzb24iLCJ6aXAiLCJhdWRpbyIsIm9ubG9hZCIsInRhcmdldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbmxvYWRlbmQiLCIjb25sb2FkZW5kIiwibmFtZSIsInJlcGxhY2UiLCJnZXQiLCJzcmMiLCJyZXN1bHQiLCJzZXQiLCJ0cmlnZ2VyRXZlbnQiLCJzaXplIiwib25lcnJvciIsImNvbnNvbGUiLCJlcnJvciIsInZhbGlkYXRlIiwiaXNWYWxpZCIsImZpbmQiLCJpdGVtIiwicmVhZEZpbGUiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVzb2x2ZSIsInJlYWRBc0RhdGFVUkwiLCJ2YWxpZGF0ZUxvYWQiLCIjdmFsaWRhdGVMb2FkIiwiY2xlYW4iLCJmaWxlTGlzdCIsImZldGNoaW5nIiwicHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwiX21vYmlsZSIsIl93ZWIiLCJGaWxlc1VwbG9hZGVyIiwiaW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsImdsb2JhbFRoaXMiLCJwaG9uZWdhcCIsIk1vYmlsZUZpbGVzVXBsb2FkZXIiLCJXZWJGaWxlc1VwbG9hZGVyIiwiX2xvYWRlZCIsImJhc2U2NCIsIl9zcGVjcyIsIl9lcnJvcnMiLCJnZXRGaWxlcyIsImRhdGEiLCJ1cmwiLCJkaXIiLCJmaWxlbmFtZSIsInNwbGl0IiwiX2Jhc2UiLCJfZHJhZ2dhYmxlIiwiX2ZpbGVzIiwiX3hociIsIl9tYWluIiwiVXBsb2FkZXIiLCJmaWxlSW5wdXQiLCJjcmVhdGVFbGVtZW50IiwiYXR0cnMiLCJkcmFnZ2FibGUiLCJjb250cm9sIiwiaW5wdXQiLCJ1cCIsIm9uIiwibGlzdGVuQ2hhbmdlcyIsImdldEVycm9ycyIsImZpbGVzTG9hZGVkIiwicGFyYW1zIiwiaGFzT3duUHJvcGVydHkiLCJtdWx0aXBsZSIsInNldEF0dHJpYnV0ZXMiLCIjbGlzdGVuQ2hhbmdlcyIsInJlYWR5Iiwic3R5bGUiLCJhY2NlcHQiLCJwcm9wIiwic2V0QXR0cmlidXRlIiwib3BlbkRpYWxvZyIsImNsaWNrIiwicGljdHVyZUxvYWRlZCIsInBpY3R1cmVMb2FkaW5nIiwiZGVsZXRlIiwiZmlsZU5hbWUiLCJjcmVhdGUiLCJkcmFnZ2FibGVTZWxlY3RvciIsIm1lZGlhRGV2aWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5HYWxsZXJ5IiwiYWRkTGlzdGVuZXJzIiwib25DaGFuZ2VJbnB1dCIsImFmdGVyIiwiY3VycmVudFRhcmdldCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJwdWJsaXNoIiwiYWRkaXRpb25hbFBhcmFtcyIsImZvcm0iLCJGb3JtRGF0YSIsImNvbGxlY3Rpb24iLCJtYXAiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZm9yRWFjaCIsInBhcmFtIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJyZXNpemVQaWN0dXJlIiwidXJpIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJxdWFsaXR5IiwiaW1nIiwiSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm9yaWVudGF0aW9uIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsInRvRGF0YVVSTCIsInJvdGF0ZSIsInJvdGF0ZUNhbnZhcyIsImN0eFJvdGF0ZSIsImltZ1JvdGF0ZSIsInRyYW5zbGF0ZSIsIk1hdGgiLCJQSSIsImltYWdlUm90YXRlZCIsImFqYSIsInVwbG9hZGVkIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJiZWFyZXIiLCJ1cGxvYWRpbmciLCJpc1VwbG9hZGVkIiwidXBsb2FkUHJvZ3Jlc3MiLCJoYXNFcnJvciIsIm9uUHJvZ3Jlc3MiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudCIsInJvdW5kIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIm9uQ29tcGxldGVkIiwib25FcnJvciIsInJlamVjdCIsIm9uQWJvcnQiLCJnZXRIZWFkZXJzIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJrZXlzIiwia2V5IiwibWV0aG9kIiwiYm9keSIsImZldGNoIiwiZSIsImFib3J0Il0sInNvdXJjZXMiOlsiL2RyYWdnYWJsZS50cyIsIi9maWxlcy9iYXNlLnRzIiwiL2ZpbGVzL2luZGV4LnRzIiwiL2ZpbGVzL21vYmlsZS50cyIsIi9maWxlcy93ZWIudHMiLCIvaW5kZXgudHMiLCIvcmVzaXplLnRzIiwiL3hoci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUlNLE1BQU9BLGlCQUFpQjtZQUM3QixDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsS0FBTTtZQUVOQyxZQUFZRixNQUFXO2NBQ3RCLElBQUksQ0FBQyxDQUFBQSxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFDLEtBQU0sR0FBR0QsTUFBTSxDQUFDQyxLQUFLO1lBQzNCO1lBRUFFLE1BQU0sR0FBSUMsS0FBZ0IsSUFBSTtjQUM3QkEs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