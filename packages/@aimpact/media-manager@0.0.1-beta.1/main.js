System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, mediaDevice, __beyond_pkg, hmr;
  _export("mediaDevice", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive120Model) {
      dependency_1 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.12"], ["socket.io-client", "4.7.5"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/ailearn-app", "0.1.6-dev.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@0.0.1-beta.1/main"
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
        hash: 1266923743,
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
        hash: 2249157670,
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
        hash: 3878263831,
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
        hash: 3466930214,
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