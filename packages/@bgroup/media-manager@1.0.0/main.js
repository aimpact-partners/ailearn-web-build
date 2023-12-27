System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.6/model", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, mediaDevice, __beyond_pkg, hmr;
  _export("mediaDevice", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive116Model) {
      dependency_1 = _beyondJsReactive116Model;
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