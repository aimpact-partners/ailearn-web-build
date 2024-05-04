System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/core", "@bgroup/media-manager@1.0.0/main"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Uploader, XHRLoader, __beyond_pkg, hmr;
  _export({
    Uploader: void 0,
    XHRLoader: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1112Model) {
      dependency_1 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_bgroupMediaManager100Main) {
      dependency_3 = _bgroupMediaManager100Main;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.6"], ["socket.io-client", "4.7.2"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "0.0.32"]]);
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