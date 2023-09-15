System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.5/model", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, mediaDevice, __beyond_pkg, hmr;
  _export("mediaDevice", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive115Model) {
      dependency_1 = _beyondJsReactive115Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["socket.io-client", "4.7.2"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
          const DesktopMediaDevice = MediaDevice.getInstance();
          exports.DesktopMediaDevice = DesktopMediaDevice;
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
          const /*bundle*/mediaDevice = getMedia();
          exports.mediaDevice = mediaDevice;
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
          const MobileMediaDevice = MediaCameraDevice.getInstance();
          exports.MobileMediaDevice = MobileMediaDevice;
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