System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.11/model", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, mediaDevice, __beyond_pkg, hmr;
  _export("mediaDevice", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1111Model) {
      dependency_1 = _beyondJsReactive1111Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
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
          "vspecifier": "@bgroup/media-manager@1.0.0/main"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/kernel/core', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./desktop
      *************************/
      ims.set('./desktop', {
        hash: 1222938740,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopMediaDevice = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _files = require("./files");
          var _input = require("./input");
          var _xhr = require("./xhr");
          class MediaDevice extends _model.ReactiveModel {
            static instance;
            #selector;
            PLATFORM = 'DESKTOP';
            #stream;
            #constraints = {};
            #inputFile;
            #files;
            #promise;
            get isReady() {
              return true;
            }
            constructor() {
              super();
              this.#files = new _files.MediaFiles(this, {});
            }
            async getUserMedia(constraints) {
              if (JSON.stringify(this.#constraints) === JSON.stringify(constraints)) return this.#stream;
              this.#constraints = constraints;
              this.#stream = await navigator.mediaDevices.getUserMedia(constraints);
              return this.#stream;
            }
            async activateCamera(constraints, selector) {
              const stream = await this.getUserMedia(constraints);
              this.#stream = stream;
              selector.srcObject = stream;
              this.#selector = selector;
            }
            static getInstance() {
              if (!MediaDevice.instance) {
                MediaDevice.instance = new MediaDevice();
              }
              return MediaDevice.instance;
            }
            desactivateCamera() {
              if (!this.#stream) {
                return;
              }
              this.#stream.getTracks().forEach(track => {
                track.stop();
                this.#stream.removeTrack(track);
              });
              if (this.#selector) {
                this.#selector.srcObject = undefined;
                this.#selector = undefined;
              }
              this.#constraints = undefined;
              this.#stream = undefined;
            }
            /**
             *
             * @param options
             * @returns
             */
            async getPicture() {
              const stream = await this.getUserMedia({
                video: true,
                audio: false
              });
              const imageCapture = new globalThis.ImageCapture(stream.getVideoTracks()[0]);
              const blob = await imageCapture.takePhoto();
              this.clean();
              return blob;
            }
            clean() {
              this.#constraints = {};
              if (!this.#stream) {
                return;
              }
              this.#stream.getTracks().forEach(track => {
                track.stop();
                this.#stream.removeTrack(track);
              });
              if (this.#selector) {
                this.#selector.srcObject = undefined;
                this.#selector = undefined;
              }
              this.#stream = undefined;
            }
            async getVideoStream() {
              return await this.getUserMedia({
                video: true,
                audio: false
              });
            }
            takePicture(options) {}
            openGallery(selector, specs = {}) {}
            upload(url, specs = {}) {
              const form = new FormData();
            }
            setInputFile(input) {
              this.#inputFile = new _input.InputFile(input, this.#files);
              return this.#inputFile;
            }
            publish = async (url, params) => {
              try {
                const form = new FormData();
                const collection = this.#files;
                const name = collection.total > 1 ? `${params.name}[]` : params.name;
                console.log(1, collection.entries);
                collection.entries.forEach(item => form.append(name, item));
                for (let param in params) {
                  if (!params.hasOwnProperty(param)) continue;
                  form.append(param, params[param]);
                }
                const xhr = new _xhr.XHRLoader();
                const response = await xhr.upload(form, url);
                this.#files = new _files.MediaFiles(this, {});
                console.log(1, this.#files.entries);
                return response.json();
              } catch (error) {
                console.error(error);
              }
            };
          }
          const DesktopMediaDevice = exports.DesktopMediaDevice = MediaDevice.getInstance();
        }
      });

      /******************************
      INTERNAL MODULE: ./file-manager
      ******************************/

      ims.set('./file-manager', {
        hash: 4123506600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getUrl = getUrl;
          var _core = require("@beyond-js/kernel/core");
          let promise;
          /**
           * REturns a valid url of the image loaded
           *
           * @platform mobile
           * @param data
           * @returns
           */
          function getUrl(data) {
            if (promise) return promise;
            promise = new _core.PendingPromise();
            const process = function processFile(entry) {
              entry.file(file => {
                const reader = new FileReader();
                reader.onloadend = a => {
                  promise.resolve(reader.result);
                  promise = undefined;
                };
                reader.readAsDataURL(file);
              });
            };
            globalThis.resolveLocalFileSystemURL(data, process);
            return promise;
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./files/index
      *****************************/

      ims.set('./files/index', {
        hash: 3923452879,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MediaFiles = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          class MediaFiles extends _model.ReactiveModel {
            #loaded = 0;
            #specs;
            #type;
            regExp = /[^\w\d.]/g;
            #errors = [];
            #promise;
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
              audio: ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/webm', 'audio/aac', 'audio/flac' // FLAC files
              ]
            });
            #onload = event => {
              if (event.target?.removeEventListener) {
                event.target.removeEventListener('load', this.#onload);
              }
              if (this.#specs.onload && typeof this.#specs.onload === 'function') {
                this.#specs.onload(event);
              }
            };
            #onloadend = (event, file) => {
              this.#loaded = this.#loaded + 1;
              file.src = event.target.result;
              this.#processFile(file);
              if (event.target?.removeEventListener) {
                event.target.removeEventListener('onloadend', this.#onloadend);
              }
              this.triggerEvent('file.loaded');
              if (this.#loaded === this._items.size) this.triggerEvent('loadend');
              if (this.#specs.onloadend && typeof this.#specs.onloadend === 'function') {
                this.#specs.onload(event);
              }
            };
            #processFile(file) {
              const name = file.name.replace(this.regExp, '');
              file = this._items.get(name);
              this._items.set(name, file);
            }
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
            };
            /**
             * Read Local files uploaded from an input file
             *
             * @param fileList
             */
            readLocal = async fileList => {
              const promises = [];
              for (let i = 0; i < fileList.length; ++i) {
                const file = fileList[i];
                this._items.set(file.name.replace(this.regExp, ''), file);
                promises.push(this.#readFile(file));
              }
              await Promise.all(promises);
            };
            getMobileUrl(data) {
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              const process = entry => {
                entry.file(file => {
                  const reader = new FileReader();
                  reader.onloadend = e => {
                    const imgBlob = new Blob([reader.result], {
                      type: file.type
                    });
                    const name = file.name.replace(this.regExp, '');
                    file.blob = imgBlob;
                    this._items.set(name, file);
                    //returns a valid element to show as image
                    this.#promise.resolve(URL.createObjectURL(imgBlob));
                    this.#promise = undefined;
                  };
                  this._items.set(file.name.replace(this.regExp, ''), file);
                  reader.readAsArrayBuffer(file);
                });
              };
              // cordova file plugin
              globalThis.resolveLocalFileSystemURL(data, process);
              return this.#promise;
            }
          }
          exports.MediaFiles = MediaFiles;
        }
      });

      /**************************
      INTERNAL MODULE: ./i-camera
      **************************/

      ims.set('./i-camera', {
        hash: 1945745868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3083892194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.mediaDevice = void 0;
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          let media;
          function getMedia(clean = false) {
            if (clean) media = undefined;
            if (media) return media;
            const types = Object.freeze({
              MOBILE: 0,
              DESKTOP: 1
            });
            const deviceType = globalThis.cordova ? types.MOBILE : types.DESKTOP;
            const models = Object.freeze({
              1: _desktop.DesktopMediaDevice,
              0: _mobile.MobileMediaDevice
            });
            media = models[deviceType];
            return media;
          }
          const /*bundle*/mediaDevice = exports.mediaDevice = getMedia();
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 1272832174,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputFile = void 0;
          var _model = require("@beyond-js/reactive/model");
          class InputFile extends _model.ReactiveModel {
            #input = document.createElement('input');
            #errors;
            #selector;
            #files;
            get files() {
              return this.#files;
            }
            constructor(selector, files, specs = {}) {
              super();
              this.#selector = selector;
              this.#files = files;
              this.#files.on('error', this.getErrors);
              this.#files.on('loadend', this.filesLoaded);
              this.setAttributes(specs);
              if (selector) this.create();
            }
            filesLoaded = () => this.triggerEvent('loadend');
            pictureLoaded = () => this.triggerEvent('pictureLoaded');
            pictureLoading = () => this.triggerEvent('pictureLoading');
            // getErrors = () => (this.#errors = this.files.errors);
            getErrors = () => console.log('error');
            openDialog = () => {
              this.#input.click();
            };
            setAttributes = specs => {
              if (!specs) specs = {};
              let attrs = {
                type: 'file',
                style: 'display:none',
                name: 'input_upload',
                ...specs
              };
              for (let prop in attrs) {
                this.#input.setAttribute(prop, attrs[prop]);
              }
            };
            clean = async () => {
              return this.#files.clean();
              // await this.#mobileFiles.clean();
            };
            #onChangeInput = async event => {
              await this.clean();
              const target = event.currentTarget;
              this.#files.total = target.files.length;
              this.#files.readLocal(target.files);
            };
            create() {
              /**
               * Adds de click and change events into the input file
               */
              const addListeners = () => {
                if (!this.#selector) return;
                this.#selector.addEventListener('click', this.openDialog);
                this.#input.addEventListener('change', this.#onChangeInput);
              };
              this.#selector.after(this.#input);
              addListeners();
            }
          }
          exports.InputFile = InputFile;
        }
      });

      /****************************
      INTERNAL MODULE: ./interfaces
      ****************************/

      ims.set('./interfaces', {
        hash: 2938605133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************
      INTERNAL MODULE: ./mobile
      ************************/

      ims.set('./mobile', {
        hash: 3634111429,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileMediaDevice = exports.MediaCameraDevice = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _files = require("./files");
          var _xhr = require("./xhr");
          class MediaCameraDevice extends _model.ReactiveModel {
            #source;
            #selector;
            PLATFORM = 'MOBILE';
            static instance;
            #files;
            #DEFAULT_OPTIONS = {
              // Some common settings are 20, 50, and 100
              quality: 80,
              destinationType: globalThis.Camera?.DestinationType?.FILE_URI,
              // In this app, dynamically set the picture source, Camera or photo gallery
              sourceType: 1,
              encodingType: globalThis.Camera?.EncodingType.JPEG,
              mediaType: globalThis.Camera?.MediaType.PICTURE,
              allowEdit: false,
              correctOrientation: true
            };
            constructor() {
              super();
              this.#files = new _files.MediaFiles(this, {});
            }
            #promise;
            get isReady() {
              return !!globalThis.Camera;
            }
            get source() {
              return this.#source;
            }
            #sourceType = 0;
            get sourceType() {
              return this.#sourceType;
            }
            set sourceType(value) {
              if (this.#sourceType === value) return;
              this.#sourceType = value;
            }
            #mediaType = globalThis.Camera?.MediaType.PICTURE; // default
            get mediaType() {
              return this.#mediaType;
            }
            set mediaType(value) {
              if (this.#mediaType === value) return;
              this.#mediaType = value;
            }
            set source(value) {
              this.#source = value;
            }
            onSuccess = async function successCallback(data) {
              const response = await this.#files.getMobileUrl(data);
              this.#promise.resolve(response);
              this.#promise = undefined;
            };
            onFail = message => {
              console.error('Failed because: ' + message);
              this.#promise.reject();
              this.#promise = undefined;
            };
            /**
             *
             * @param srcType number 1 = camera, 0 = photolibrary
             * @returns
             */
            setOptions = overwrites => {
              return {
                ...this.#DEFAULT_OPTIONS,
                ...overwrites
              };
            };
            getPicture = options => {
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              navigator.camera?.getPicture(response => this.onSuccess(response), this.onFail, this.setOptions(options));
              return this.#promise;
            };
            openGallery(selector) {
              this.#selector = selector;
              return this.getPicture({
                sourceType: 0
              });
            }
            static getInstance() {
              if (!MediaCameraDevice.instance) {
                MediaCameraDevice.instance = new MediaCameraDevice();
              }
              return MediaCameraDevice.instance;
            }
            publish = async (url, params) => {
              try {
                const form = new FormData();
                const collection = this.#files;
                const name = collection.total > 1 ? `${params.name}[]` : params.name;
                collection.entries.forEach(item => {
                  form.append(name, item.blob, item.name);
                });
                for (let param in params) {
                  if (!params.hasOwnProperty(param)) continue;
                  form.append(param, params[param]);
                }
                const xhr = new _xhr.XHRLoader();
                const response = await xhr.upload(form, url);
                this.#files = new _files.MediaFiles(this, {});
                return response.json();
              } catch (error) {
                console.error(error);
              }
            };
          }
          exports.MediaCameraDevice = MediaCameraDevice;
          const MobileMediaDevice = exports.MobileMediaDevice = MediaCameraDevice.getInstance();
        }
      });

      /*********************
      INTERNAL MODULE: ./xhr
      *********************/

      ims.set('./xhr', {
        hash: 2840199010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.XHRLoader = void 0;
          var _model = require("@beyond-js/reactive/model");
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
        "from": "mediaDevice",
        "name": "mediaDevice"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'mediaDevice') && _export("mediaDevice", mediaDevice = require ? require('./index').mediaDevice : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZpbGVzIiwiX2lucHV0IiwiX3hociIsIk1lZGlhRGV2aWNlIiwiUmVhY3RpdmVNb2RlbCIsImluc3RhbmNlIiwic2VsZWN0b3IiLCJQTEFURk9STSIsInN0cmVhbSIsImNvbnN0cmFpbnRzIiwiaW5wdXRGaWxlIiwiZmlsZXMiLCJwcm9taXNlIiwiaXNSZWFkeSIsImNvbnN0cnVjdG9yIiwiTWVkaWFGaWxlcyIsImdldFVzZXJNZWRpYSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJhY3RpdmF0ZUNhbWVyYSIsInNyY09iamVjdCIsImdldEluc3RhbmNlIiwiZGVzYWN0aXZhdGVDYW1lcmEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwicmVtb3ZlVHJhY2siLCJ1bmRlZmluZWQiLCJnZXRQaWN0dXJlIiwidmlkZW8iLCJhdWRpbyIsImltYWdlQ2FwdHVyZSIsImdsb2JhbFRoaXMiLCJJbWFnZUNhcHR1cmUiLCJnZXRWaWRlb1RyYWNrcyIsImJsb2IiLCJ0YWtlUGhvdG8iLCJjbGVhbiIsImdldFZpZGVvU3RyZWFtIiwidGFrZVBpY3R1cmUiLCJvcHRpb25zIiwib3BlbkdhbGxlcnkiLCJzcGVjcyIsInVwbG9hZCIsInVybCIsImZvcm0iLCJGb3JtRGF0YSIsInNldElucHV0RmlsZSIsImlucHV0IiwiSW5wdXRGaWxlIiwicHVibGlzaCIsInBhcmFtcyIsImNvbGxlY3Rpb24iLCJuYW1lIiwidG90YWwiLCJjb25zb2xlIiwibG9nIiwiZW50cmllcyIsIml0ZW0iLCJhcHBlbmQiLCJwYXJhbSIsImhhc093blByb3BlcnR5IiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJEZXNrdG9wTWVkaWFEZXZpY2UiLCJleHBvcnRzIiwiX2NvcmUiLCJnZXRVcmwiLCJkYXRhIiwiUGVuZGluZ1Byb21pc2UiLCJwcm9jZXNzIiwicHJvY2Vzc0ZpbGUiLCJlbnRyeSIsImZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYSIsInJlc29sdmUiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwicmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCIsImxvYWRlZCIsInR5cGUiLCJyZWdFeHAiLCJlcnJvcnMiLCJfdG90YWwiLCJ2YWx1ZSIsIl9pdGVtcyIsIk1hcCIsIml0ZW1zIiwidmFsdWVzIiwicGFyZW50IiwiRklMRV9UWVBFIiwiT2JqZWN0IiwiZnJlZXplIiwiZG9jdW1lbnQiLCJpbWFnZSIsInppcCIsIm9ubG9hZCIsImV2ZW50IiwidGFyZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIiNvbmxvYWRlbmQiLCJzcmMiLCJ0cmlnZ2VyRXZlbnQiLCJzaXplIiwiI3Byb2Nlc3NGaWxlIiwicmVwbGFjZSIsImdldCIsInNldCIsIm9uZXJyb3IiLCJ2YWxpZGF0ZSIsImlzVmFsaWQiLCJmaW5kIiwicHVzaCIsInJlYWRGaWxlIiwidmFsaWRhdGVMb2FkIiwiI3ZhbGlkYXRlTG9hZCIsInJlYWRMb2NhbCIsImZpbGVMaXN0IiwicHJvbWlzZXMiLCJpIiwibGVuZ3RoIiwiUHJvbWlzZSIsImFsbCIsImdldE1vYmlsZVVybCIsImUiLCJpbWdCbG9iIiwiQmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlYWRBc0FycmF5QnVmZmVyIiwiZGVmaW5lUHJvcGVydHkiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJtZWRpYSIsImdldE1lZGlhIiwidHlwZXMiLCJNT0JJTEUiLCJERVNLVE9QIiwiZGV2aWNlVHlwZSIsImNvcmRvdmEiLCJtb2RlbHMiLCJNb2JpbGVNZWRpYURldmljZSIsIm1lZGlhRGV2aWNlIiwiY3JlYXRlRWxlbWVudCIsIm9uIiwiZ2V0RXJyb3JzIiwiZmlsZXNMb2FkZWQiLCJzZXRBdHRyaWJ1dGVzIiwiY3JlYXRlIiwicGljdHVyZUxvYWRlZCIsInBpY3R1cmVMb2FkaW5nIiwib3BlbkRpYWxvZyIsImNsaWNrIiwiYXR0cnMiLCJzdHlsZSIsInByb3AiLCJzZXRBdHRyaWJ1dGUiLCJvbkNoYW5nZUlucHV0IiwiY3VycmVudFRhcmdldCIsImFkZExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZnRlciIsIk1lZGlhQ2FtZXJhRGV2aWNlIiwic291cmNlIiwiREVGQVVMVF9PUFRJT05TIiwicXVhbGl0eSIsImRlc3RpbmF0aW9uVHlwZSIsIkNhbWVyYSIsIkRlc3RpbmF0aW9uVHlwZSIsIkZJTEVfVVJJIiwic291cmNlVHlwZSIsImVuY29kaW5nVHlwZSIsIkVuY29kaW5nVHlwZSIsIkpQRUciLCJtZWRpYVR5cGUiLCJNZWRpYVR5cGUiLCJQSUNUVVJFIiwiYWxsb3dFZGl0IiwiY29ycmVjdE9yaWVudGF0aW9uIiwib25TdWNjZXNzIiwic3VjY2Vzc0NhbGxiYWNrIiwib25GYWlsIiwibWVzc2FnZSIsInJlamVjdCIsInNldE9wdGlvbnMiLCJvdmVyd3JpdGVzIiwiY2FtZXJhIiwidXBsb2FkZWQiLCJwcm9ncmVzcyIsInVwbG9hZGluZyIsImlzVXBsb2FkZWQiLCJ1cGxvYWRQcm9ncmVzcyIsImhhc0Vycm9yIiwib25Qcm9ncmVzcyIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50IiwiTWF0aCIsInJvdW5kIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIm9uQ29tcGxldGVkIiwic2V0VGltZW91dCIsIm9uRXJyb3IiLCJvbkFib3J0IiwibWV0aG9kIiwiYm9keSIsImZldGNoIiwiYWJvcnQiXSwic291cmNlcyI6WyIvY29kZS90cy9kZXNrdG9wLnRzIiwiL2NvZGUvdHMvZmlsZS1tYW5hZ2VyLnRzIiwiL2NvZGUvdHMvZmlsZXMvaW5kZXgudHMiLCIvaS1jYW1lcmEudHMiLCIvY29kZS90cy9pbmRleC50cyIsIi9jb2RlL3RzL2lucHV0LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvY29kZS90cy9tb2JpbGUudHMiLCIvY29kZS90cy94aHIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVs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