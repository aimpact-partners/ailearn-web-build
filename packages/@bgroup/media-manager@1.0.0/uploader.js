System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@bgroup/media-manager@1.0.0/main", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
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
    }, function (_bgroupMediaManager100Main) {
      dependency_2 = _bgroupMediaManager100Main;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.0"], ["socket.io-client", "4.7.1"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPMEosQ0FBQyxFQUFFO2dCQUNYcEwsT0FBTyxDQUFDZ0QsS0FBSyxDQUFDLE9BQU8sRUFBRW9JLENBQUMsQ0FBQzs7WUFFM0I7WUFFT0MsS0FBSztjQUNYLElBQUksSUFBSSxDQUFDN0IsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUNBLE9BQU8sQ0FBQ2tCLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxDQUFDN0gsWUFBWSxDQUFDLFFBQVEsQ0FBQzs7WUFFN0I7O1VBQ0EvQiIsIm5hbWVzIjpbIkRyYWdnYWJsZVVwbG9hZGVyIiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJmaWxlcyIsIm9uRHJvcCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkYXRhVHJhbnNmZXIiLCJjb25zb2xlIiwibG9nIiwiaXRlbXMiLCJsZW5ndGgiLCJpIiwiZmlsZSIsImdldEFzRmlsZSIsInB1c2giLCJyZWFkTG9jYWwiLCJvbkRyYWdPdmVyIiwiYWRkIiwic2VsZWN0b3IiLCJvbmRyb3AiLCJvbmRyYWdvdmVyIiwiZXhwb3J0cyIsIkJhc2VGaWxlIiwiUmVhY3RpdmVNb2RlbCIsInJlZ0V4cCIsImVycm9ycyIsIl90b3RhbCIsInRvdGFsIiwidmFsdWUiLCJfaXRlbXMiLCJNYXAiLCJlbnRyaWVzIiwidmFsdWVzIiwic3BlY3MiLCJ0eXBlIiwiRklMRV9UWVBFIiwiT2JqZWN0IiwiZnJlZXplIiwiZG9jdW1lbnQiLCJpbWFnZSIsImpzb24iLCJ6aXAiLCJhdWRpbyIsInRhcmdldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbmxvYWQiLCJuYW1lIiwicmVwbGFjZSIsImdldCIsInNyYyIsInJlc3VsdCIsInNldCIsInRyaWdnZXJFdmVudCIsInNpemUiLCJvbmxvYWRlbmQiLCJlcnJvciIsInZhbGlkYXRlIiwiaXNWYWxpZCIsImZpbmQiLCJpdGVtIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9uZXJyb3IiLCJyZWFkQXNEYXRhVVJMIiwiY2xlYW4iLCJmaWxlTGlzdCIsImZldGNoaW5nIiwicHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwiRmlsZXNVcGxvYWRlciIsImdldEluc3RhbmNlIiwiZ2xvYmFsVGhpcyIsInBob25lZ2FwIiwiTW9iaWxlRmlsZXNVcGxvYWRlciIsIldlYkZpbGVzVXBsb2FkZXIiLCJfbG9hZGVkIiwiYmFzZTY0IiwiX3NwZWNzIiwiX2Vycm9ycyIsImdldEZpbGVzIiwiZGF0YSIsInVybCIsImRpciIsImZpbGVuYW1lIiwic3BsaXQiLCJVcGxvYWRlciIsImNyZWF0ZUVsZW1lbnQiLCJpbnB1dCIsInVwIiwib24iLCJnZXRFcnJvcnMiLCJmaWxlc0xvYWRlZCIsInBhcmFtcyIsImhhc093blByb3BlcnR5IiwibXVsdGlwbGUiLCJzZXRBdHRyaWJ1dGVzIiwicmVhZHkiLCJhdHRycyIsInN0eWxlIiwiYWNjZXB0IiwicHJvcCIsInNldEF0dHJpYnV0ZSIsIm9wZW5EaWFsb2ciLCJjbGljayIsInBpY3R1cmVMb2FkZWQiLCJwaWN0dXJlTG9hZGluZyIsImRlbGV0ZSIsImZpbGVOYW1lIiwiY3JlYXRlIiwiZHJhZ2dhYmxlU2VsZWN0b3IiLCJtZWRpYURldmljZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuR2FsbGVyeSIsImFkZExpc3RlbmVycyIsImFmdGVyIiwiY3VycmVudFRhcmdldCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJwdWJsaXNoIiwiYWRkaXRpb25hbFBhcmFtcyIsImZvcm0iLCJGb3JtRGF0YSIsImNvbGxlY3Rpb24iLCJtYXAiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZm9yRWFjaCIsInBhcmFtIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJyZXNpemVQaWN0dXJlIiwidXJpIiwicmVzb2x2ZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicXVhbGl0eSIsImltZyIsIkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJvcmllbnRhdGlvbiIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJyb3RhdGUiLCJyb3RhdGVDYW52YXMiLCJjdHhSb3RhdGUiLCJpbWdSb3RhdGUiLCJ0cmFuc2xhdGUiLCJNYXRoIiwiUEkiLCJpbWFnZVJvdGF0ZWQiLCJhamEiLCJwcm9taXNlIiwidXBsb2FkZWQiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsImJlYXJlciIsInVwbG9hZGluZyIsImlzVXBsb2FkZWQiLCJ1cGxvYWRQcm9ncmVzcyIsImhhc0Vycm9yIiwib25Qcm9ncmVzcyIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50Iiwicm91bmQiLCJsb2FkZWQiLCJwYXJzZUludCIsInRvU3RyaW5nIiwib25Db21wbGV0ZWQiLCJvbkVycm9yIiwicmVqZWN0Iiwib25BYm9ydCIsImdldEhlYWRlcnMiLCJoZWFkZXJzIiwiSGVhZGVycyIsImtleXMiLCJrZXkiLCJtZXRob2QiLCJib2R5IiwiZmV0Y2giLCJlIiwiYWJvcnQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRyYWdnYWJsZS50cyIsImZpbGVzL2Jhc2UudHMiLCJmaWxlcy9pbmRleC50cyIsImZpbGVzL21vYmlsZS50cyIsImZpbGVzL3dlYi50cyIsImluZGV4LnRzIiwicmVzaXplLnRzIiwieGhyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=