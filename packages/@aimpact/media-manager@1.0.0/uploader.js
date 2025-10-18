System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/model", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.8/hooks", "@beyond-js/kernel@0.1.14/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, IBaseFile, IUploaderSpecs, IUploaderEvents, IFileValidator, IFileProcessor, IImageFile, IUseUploader, useUploader, Uploader, XHRLoader, ImageProcessor, __beyond_pkg, hmr;
  _export({
    IBaseFile: void 0,
    IUploaderSpecs: void 0,
    IUploaderEvents: void 0,
    IFileValidator: void 0,
    IFileProcessor: void 0,
    IImageFile: void 0,
    IUseUploader: void 0,
    useUploader: void 0,
    Uploader: void 0,
    XHRLoader: void 0,
    ImageProcessor: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive211Model) {
      dependency_1 = _beyondJsReactive211Model;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_3 = _beyondJsReact18Widgets118Hooks;
    }, function (_beyondJsKernel0114Core) {
      dependency_4 = _beyondJsKernel0114Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["pragmate-ui", "1.0.8"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/reactive", "2.1.0"], ["react", "18.3.1"], ["socket.io-client", "4.8.1"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.3.25"], ["@types/react-dom", "18.3.7"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/rvd", "0.7.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@beyond-js/kernel/core', dependency_4]]);
      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./adapters/base
      *******************************/
      ims.set('./adapters/base', {
        hash: 1979170185,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseFilesList = void 0;
          var _model = require("@beyond-js/reactive/model");
          /**
           * File: adapters/base-files-list.ts
           * Universal file list manager (agnostic to file type).
           */

          class BaseFilesList extends _model.ReactiveModel {
            #map = new Map();
            #total = 0;
            get total() {
              return this.#total;
            }
            get items() {
              return [...this.#map.values()];
            }
            get map() {
              return this.#map;
            }
            /**
             * Add new files to the list. Files are created with "pending" status.
             */
            addFiles(files) {
              const added = [];
              for (const file of files) {
                const id = crypto.randomUUID();
                const item = {
                  id,
                  name: file.name,
                  size: file.size,
                  type: file.type,
                  file,
                  status: 'pending'
                };
                this.#map.set(id, item);
                added.push(item);
              }
              this.#total = this.#map.size;
              this.trigger('add', added);
              this.trigger('change', this.items);
              return added;
            }
            /**
             * Remove a file by ID.
             */
            remove(id) {
              const removed = this.#map.delete(id);
              if (removed) {
                this.#total = this.#map.size;
                this.trigger('remove', id);
                this.trigger('change', this.items);
              }
              return removed;
            }
            /**
             * Clean all files.
             */
            async clean() {
              this.#map.clear();
              this.#total = 0;
              this.trigger('clean');
              this.trigger('change', []);
            }
            /**
             * Update the status of a file.
             */
            updateStatus(id, status, error) {
              const item = this.#map.get(id);
              if (!item) return;
              item.status = status;
              if (error) item.error = error;
              this.trigger('update', item);
              this.trigger('change', this.items);
            }
          }
          exports.BaseFilesList = BaseFilesList;
        }
      });

      /********************************
      INTERNAL MODULE: ./adapters/index
      ********************************/

      ims.set('./adapters/index', {
        hash: 568696356,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FilesUploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _web = require("./web");
          class FilesUploader extends _model.ReactiveModel {
            static #instance;
            static getInstance(specs = {}) {
              if (this.#instance) return this.#instance;
              return new _web.WebFilesUploader(specs);
            }
          }
          exports.FilesUploader = FilesUploader;
        }
      });

      /******************************
      INTERNAL MODULE: ./adapters/web
      ******************************/

      ims.set('./adapters/web', {
        hash: 439184771,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WebFilesUploader = void 0;
          var _base = require("./base");
          class WebFilesUploader extends _base.BaseFilesList {}
          exports.WebFilesUploader = WebFilesUploader;
        }
      });

      /*******************************
      INTERNAL MODULE: ./core/registry
      *******************************/

      ims.set('./core/registry', {
        hash: 151712618,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Registry = void 0;
          // registry.ts (already exists, unchanged except clarifying return types)
          class Registry {
            static validators = {};
            static processors = {};
            static registerValidator(name, validator) {
              this.validators[name] = validator;
            }
            static registerProcessor(name, processor) {
              this.processors[name] = processor;
            }
            static getValidator(name, options) {
              const V = this.validators[name];
              return V ? new V(options) : undefined;
            }
            static getProcessor(name, options) {
              const P = this.processors[name];
              return P ? new P(options) : undefined;
            }
          }
          exports.Registry = Registry;
        }
      });

      /****************************
      INTERNAL MODULE: ./core/types
      ****************************/

      ims.set('./core/types', {
        hash: 1980116492,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UploaderEvents = void 0;
          var UploaderEvents;
          (function (UploaderEvents) {
            UploaderEvents["LoadEnd"] = "loadend";
            UploaderEvents["PictureLoaded"] = "pictureLoaded";
            UploaderEvents["PictureLoading"] = "pictureLoading";
            UploaderEvents["Error"] = "error";
            UploaderEvents["Change"] = "change";
            UploaderEvents["Clean"] = "clean";
            UploaderEvents["Delete"] = "delete";
          })(UploaderEvents || (exports.UploaderEvents = UploaderEvents = {}));
        }
      });

      /************************************
      INTERNAL MODULE: ./hooks/use-uploader
      ************************************/

      ims.set('./hooks/use-uploader', {
        hash: 157210229,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploader = useUploader;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _index = require("../index");
          /*bundle*/ // react/use-uploader.ts

          /**
           * Minimal React hook for using the Uploader inside components.
           * Supports generics so you can specialize files (IImageFile, IVideoFile, etc.).
           */
          function useUploader(specs) {
            const triggerRef = React.useRef(null);
            const dropZoneRef = React.useRef(null);
            // Create uploader instance once
            const [uploader] = React.useState(() => new _index.Uploader(specs));
            const store = (0, _hooks.useStore)(uploader);
            // Bind uploader with trigger/dropzone once mounted
            React.useEffect(() => {
              if (!triggerRef.current) return;
              uploader.create(triggerRef.current, dropZoneRef.current ?? undefined);
              return () => uploader.destroy();
            }, [uploader]);
            const count = store.files.total;
            const progress = store.files.total > 0 ? Math.round(store.files.items.length / store.files.total * 100) : 0;
            return {
              triggerRef,
              dropZoneRef,
              uploader,
              files: store.files.items,
              errors: store.errors,
              uploading: store.fetching,
              progress,
              count
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3147121164,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Uploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _adapters = require("./adapters");
          var _types = require("./core/types");
          var _draggable = require("./inputs/draggable");
          var _input = require("./inputs/input");
          var _registry = require("./core/registry");
          var _image = require("./validators/image");
          var _image2 = require("./processors/image");
          // Register built-in validator/processor once
          _registry.Registry.registerValidator('image', _image.ImageValidator);
          _registry.Registry.registerProcessor('image', _image2.ImageProcessor);
          /**
           * Orchestrator class for file management.
           * Delegates file selection to InputHandler/DraggableUploader,
           * validation/processing to external strategies,
           * and state storage to BaseFilesList.
           */
          /*bundle*/
          class Uploader extends _model.ReactiveModel {
            #files;
            #draggable;
            #inputHandler;
            #specs;
            #validators = [];
            #processors = [];
            #errors;
            get files() {
              return this.#files;
            }
            get errors() {
              return this.#errors;
            }
            constructor(specs = {}) {
              super();
              this.#specs = specs;
              this.#validators = this.#resolveValidators(specs.validators);
              this.#processors = this.#resolveProcessors(specs.processors);
              this.#files = _adapters.FilesUploader.getInstance();
              this.#files.on(_types.UploaderEvents.Change, this.#listenChanges);
              this.#files.on(_types.UploaderEvents.LoadEnd, this.#filesLoaded);
            }
            #resolveValidators(validators) {
              if (!Array.isArray(validators) || validators.length === 0) return [];
              return validators.map(v => {
                if (typeof v === 'string') return _registry.Registry.getValidator(v);
                if (typeof v === 'object' && 'name' in v) return _registry.Registry.getValidator(v.name, v.options);
                return v;
              }).filter(Boolean);
            }
            #resolveProcessors(processors) {
              if (!Array.isArray(processors) || processors.length === 0) return [];
              return processors.map(p => {
                if (typeof p === 'string') return _registry.Registry.getProcessor(p);
                if (typeof p === 'object' && 'name' in p) return _registry.Registry.getProcessor(p.name, p.options);
                return p;
              }).filter(Boolean);
            }
            #listenChanges = () => {
              this.fetching = this.#files.fetching;
              this.ready = this.#files.ready;
            };
            #filesLoaded = () => this.trigger(_types.UploaderEvents.LoadEnd);
            /**
             * Initialize input and/or draggable handlers.
             */
            create = (trigger, draggableSelector) => {
              if (trigger) this.#setupInputHandler(trigger);
              if (draggableSelector) this.#setupDraggable(draggableSelector);
            };
            #setupInputHandler(trigger) {
              this.#inputHandler = new _input.InputHandler({
                trigger,
                multiple: this.#specs.multiple ?? false,
                accept: this.#specs.accept
              });
              this.#inputHandler.on('onFiles', async files => {
                await this.clean();
                this.fetching = true;
                this.trigger(_types.UploaderEvents.Change);
                const added = this.#files.addFiles(files);
                await this.#processFiles(added);
                this.fetching = false;
                this.trigger(_types.UploaderEvents.Change);
              });
              this.#inputHandler.on('onError', error => {
                this.trigger(_types.UploaderEvents.Error, error);
              });
            }
            #setupDraggable(draggableSelector) {
              this.#draggable = new _draggable.DraggableUploader();
              this.#draggable.add(draggableSelector);
            }
            async #processFiles(files) {
              for (const file of files) {
                try {
                  for (const validator of this.#validators) await validator.validate(file);
                  for (const processor of this.#processors) await processor.process(file);
                  this.#files.updateStatus(file.id, 'ready');
                } catch (err) {
                  this.#files.updateStatus(file.id, 'error', err.message);
                }
              }
            }
            clean = async () => {
              await this.#files.clean();
              this.trigger(_types.UploaderEvents.Clean);
              this.trigger('change');
            };
            delete = async fileName => {
              await this.#files.map.delete(fileName);
              this.trigger(_types.UploaderEvents.Delete);
            };
            destroy = () => {
              this.#inputHandler?.destroy();
              this.#draggable?.destroy();
              this.#files.off(_types.UploaderEvents.Change, this.#listenChanges);
              this.#files.off(_types.UploaderEvents.LoadEnd, this.#filesLoaded);
            };
          }
          exports.Uploader = Uploader;
        }
      });

      /**********************************
      INTERNAL MODULE: ./inputs/draggable
      **********************************/

      ims.set('./inputs/draggable', {
        hash: 3526530291,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableUploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          class DraggableUploader extends _model.ReactiveModel {
            #zones = new Set();
            #onDropBound;
            #onDragOverBound;
            constructor() {
              super();
              this.#onDropBound = this.#onDrop.bind(this);
              this.#onDragOverBound = this.#onDragOver.bind(this);
            }
            #onDrop(event) {
              event.preventDefault();
              try {
                const transfer = event.dataTransfer;
                if (!transfer?.items?.length) return;
                const files = [];
                for (const item of transfer.items) {
                  const file = item.getAsFile();
                  if (file) files.push(file);
                }
                if (files.length) this.trigger('onFiles', files);
              } catch (error) {
                this.trigger('onError', error);
              }
            }
            #onDragOver(event) {
              event.preventDefault();
            }
            /** Register an element as a drop zone */
            add(el) {
              if (this.#zones.has(el)) return;
              el.addEventListener('drop', this.#onDropBound);
              el.addEventListener('dragover', this.#onDragOverBound);
              this.#zones.add(el);
            }
            /** Unregister a specific drop zone */
            remove(el) {
              if (!this.#zones.has(el)) return;
              el.removeEventListener('drop', this.#onDropBound);
              el.removeEventListener('dragover', this.#onDragOverBound);
              this.#zones.delete(el);
            }
            /** Clean all registered zones */
            destroy() {
              for (const el of this.#zones) {
                el.removeEventListener('drop', this.#onDropBound);
                el.removeEventListener('dragover', this.#onDragOverBound);
              }
              this.#zones.clear();
            }
          }
          exports.DraggableUploader = DraggableUploader;
        }
      });

      /******************************
      INTERNAL MODULE: ./inputs/input
      ******************************/

      ims.set('./inputs/input', {
        hash: 861162568,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputHandler = void 0;
          var _model = require("@beyond-js/reactive/model");
          /**
           * File: inputs/input-handler.ts
           * Encapsula el <input type="file"> y expone eventos normalizados
           */

          class InputHandler extends _model.ReactiveModel {
            #input;
            #trigger;
            #specs;
            constructor(specs) {
              super();
              this.#specs = specs;
              // Guard clauses
              if (!specs.trigger) {
                throw new Error('InputHandler requires a trigger element or selector.');
              }
              this.#trigger = typeof specs.trigger === 'string' ? document.querySelector(specs.trigger) : specs.trigger;
              if (!this.#trigger) {
                throw new Error('Trigger element not found.');
              }
              // Crear input oculto
              this.#input = document.createElement('input');
              this.#input.type = 'file';
              this.#input.style.display = 'none';
              if (specs.multiple) this.#input.multiple = true;
              if (specs.accept) {
                this.#input.accept = Array.isArray(specs.accept) ? specs.accept.join(',') : specs.accept;
              }
              if (specs.capture) {
                this.#input.capture = specs.capture;
              }
              this.#input.addEventListener('change', this.#onChange);
              this.#trigger.addEventListener('click', this.open);
              //insert after the trigger
              this.#trigger.after(this.#input);
            }
            #onChange = () => {
              const files = this.#input.files ? Array.from(this.#input.files) : [];
              if (!files.length) return;
              try {
                this.trigger('onFiles', files);
              } catch (error) {
                this.trigger('onError', error);
              } finally {
                this.#input.value = ''; // reset
              }
            };
            open = () => {
              this.#input.click();
            };
            destroy() {
              this.#input.removeEventListener('change', this.#onChange);
              this.#trigger.removeEventListener('click', this.open);
              if (this.#input.parentNode) {
                this.#input.parentNode.removeChild(this.#input);
              }
            }
          }
          exports.InputHandler = InputHandler;
        }
      });

      /****************************
      INTERNAL MODULE: ./loader/xhr
      ****************************/

      ims.set('./loader/xhr', {
        hash: 3314907754,
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
              this.trigger('change');
            }
            onCompleted(event) {
              this.uploaded = true;
              this.promise.resolve();
              this.trigger('change');
              setTimeout(() => {
                this.promise = undefined;
                this.trigger('change');
              }, 100);
            }
            onError(event) {
              console.error('Error uploading picture', event);
              this.error = true;
              this.promise.reject();
              this.trigger('change');
            }
            onAbort() {
              this.promise.resolve(false);
              this.trigger('change');
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
                this.trigger('change');
              }
            }
          }
          exports.XHRLoader = XHRLoader;
        }
      });

      /**********************************
      INTERNAL MODULE: ./processors/image
      **********************************/

      ims.set('./processors/image', {
        hash: 1921732203,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImageProcessor = void 0;
          /*bundle*/
          class ImageProcessor {
            async process(file) {
              const previewUrl = URL.createObjectURL(file.file);
              file.previewUrl = previewUrl;
              const dimensions = await this.getDimensions(previewUrl);
              const imageFile = file;
              imageFile.meta = {
                preview: {
                  width: dimensions.width,
                  height: dimensions.height
                }
              };
              imageFile.toBase64 = () => this.toBase64(file.file);
            }
            getDimensions(src) {
              return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve({
                  width: img.width,
                  height: img.height
                });
                img.onerror = () => reject(new Error('Could not load image dimensions'));
                img.src = src;
              });
            }
            toBase64(file) {
              return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = err => reject(err);
                reader.readAsDataURL(file);
              });
            }
          }
          exports.ImageProcessor = ImageProcessor;
        }
      });

      /**********************************
      INTERNAL MODULE: ./validators/image
      **********************************/

      ims.set('./validators/image', {
        hash: 3341395107,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImageValidator = void 0;
          class ImageValidator {
            #options;
            constructor(options = {}) {
              this.#options = options;
            }
            async validate(file) {
              if (!file.type.startsWith('image/')) {
                throw new Error(`File "${file.name}" is not a valid image`);
              }
              if (this.#options.allowedTypes && !this.#options.allowedTypes.includes(file.type)) {
                throw new Error(`File type "${file.type}" not allowed`);
              }
              if (this.#options.maxSize && file.size > this.#options.maxSize * 1024 * 1024) {
                throw new Error(`File "${file.name}" exceeds max size of ${this.#options.maxSize} MB`);
              }
            }
          }
          exports.ImageValidator = ImageValidator;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./core/types",
        "from": "IBaseFile",
        "name": "IBaseFile"
      }, {
        "im": "./core/types",
        "from": "IUploaderSpecs",
        "name": "IUploaderSpecs"
      }, {
        "im": "./core/types",
        "from": "IUploaderEvents",
        "name": "IUploaderEvents"
      }, {
        "im": "./core/types",
        "from": "IFileValidator",
        "name": "IFileValidator"
      }, {
        "im": "./core/types",
        "from": "IFileProcessor",
        "name": "IFileProcessor"
      }, {
        "im": "./core/types",
        "from": "IImageFile",
        "name": "IImageFile"
      }, {
        "im": "./hooks/use-uploader",
        "from": "IUseUploader",
        "name": "IUseUploader"
      }, {
        "im": "./hooks/use-uploader",
        "from": "useUploader",
        "name": "useUploader"
      }, {
        "im": "./index",
        "from": "Uploader",
        "name": "Uploader"
      }, {
        "im": "./loader/xhr",
        "from": "XHRLoader",
        "name": "XHRLoader"
      }, {
        "im": "./processors/image",
        "from": "ImageProcessor",
        "name": "ImageProcessor"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IBaseFile') && _export("IBaseFile", IBaseFile = require ? require('./core/types').IBaseFile : value);
        (require || prop === 'IUploaderSpecs') && _export("IUploaderSpecs", IUploaderSpecs = require ? require('./core/types').IUploaderSpecs : value);
        (require || prop === 'IUploaderEvents') && _export("IUploaderEvents", IUploaderEvents = require ? require('./core/types').IUploaderEvents : value);
        (require || prop === 'IFileValidator') && _export("IFileValidator", IFileValidator = require ? require('./core/types').IFileValidator : value);
        (require || prop === 'IFileProcessor') && _export("IFileProcessor", IFileProcessor = require ? require('./core/types').IFileProcessor : value);
        (require || prop === 'IImageFile') && _export("IImageFile", IImageFile = require ? require('./core/types').IImageFile : value);
        (require || prop === 'IUseUploader') && _export("IUseUploader", IUseUploader = require ? require('./hooks/use-uploader').IUseUploader : value);
        (require || prop === 'useUploader') && _export("useUploader", useUploader = require ? require('./hooks/use-uploader').useUploader : value);
        (require || prop === 'Uploader') && _export("Uploader", Uploader = require ? require('./index').Uploader : value);
        (require || prop === 'XHRLoader') && _export("XHRLoader", XHRLoader = require ? require('./loader/xhr').XHRLoader : value);
        (require || prop === 'ImageProcessor') && _export("ImageProcessor", ImageProcessor = require ? require('./processors/image').ImageProcessor : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQmFzZUZpbGVzTGlzdCIsIlJlYWN0aXZlTW9kZWwiLCJtYXAiLCJNYXAiLCJ0b3RhbCIsIml0ZW1zIiwidmFsdWVzIiwiYWRkRmlsZXMiLCJmaWxlcyIsImFkZGVkIiwiZmlsZSIsImlkIiwiY3J5cHRvIiwicmFuZG9tVVVJRCIsIml0ZW0iLCJuYW1lIiwic2l6ZSIsInR5cGUiLCJzdGF0dXMiLCJzZXQiLCJwdXNoIiwidHJpZ2dlciIsInJlbW92ZSIsInJlbW92ZWQiLCJkZWxldGUiLCJjbGVhbiIsImNsZWFyIiwidXBkYXRlU3RhdHVzIiwiZXJyb3IiLCJnZXQiLCJleHBvcnRzIiwiX3dlYiIsIkZpbGVzVXBsb2FkZXIiLCJpbnN0YW5jZSIsImdldEluc3RhbmNlIiwic3BlY3MiLCJXZWJGaWxlc1VwbG9hZGVyIiwiX2Jhc2UiLCJSZWdpc3RyeSIsInZhbGlkYXRvcnMiLCJwcm9jZXNzb3JzIiwicmVnaXN0ZXJWYWxpZGF0b3IiLCJ2YWxpZGF0b3IiLCJyZWdpc3RlclByb2Nlc3NvciIsInByb2Nlc3NvciIsImdldFZhbGlkYXRvciIsIm9wdGlvbnMiLCJWIiwidW5kZWZpbmVkIiwiZ2V0UHJvY2Vzc29yIiwiUCIsIlVwbG9hZGVyRXZlbnRzIiwiUmVhY3QiLCJfaG9va3MiLCJfaW5kZXgiLCJ1c2VVcGxvYWRlciIsInRyaWdnZXJSZWYiLCJ1c2VSZWYiLCJkcm9wWm9uZVJlZiIsInVwbG9hZGVyIiwidXNlU3RhdGUiLCJVcGxvYWRlciIsInN0b3JlIiwidXNlU3RvcmUiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiY3JlYXRlIiwiZGVzdHJveSIsImNvdW50IiwicHJvZ3Jlc3MiLCJNYXRoIiwicm91bmQiLCJsZW5ndGgiLCJlcnJvcnMiLCJ1cGxvYWRpbmciLCJmZXRjaGluZyIsIl9hZGFwdGVycyIsIl90eXBlcyIsIl9kcmFnZ2FibGUiLCJfaW5wdXQiLCJfcmVnaXN0cnkiLCJfaW1hZ2UiLCJfaW1hZ2UyIiwiSW1hZ2VWYWxpZGF0b3IiLCJJbWFnZVByb2Nlc3NvciIsImRyYWdnYWJsZSIsImlucHV0SGFuZGxlciIsImNvbnN0cnVjdG9yIiwicmVzb2x2ZVZhbGlkYXRvcnMiLCJyZXNvbHZlUHJvY2Vzc29ycyIsIm9uIiwiQ2hhbmdlIiwibGlzdGVuQ2hhbmdlcyIsIkxvYWRFbmQiLCJmaWxlc0xvYWRlZCIsIiNyZXNvbHZlVmFsaWRhdG9ycyIsIkFycmF5IiwiaXNBcnJheSIsInYiLCJmaWx0ZXIiLCJCb29sZWFuIiwiI3Jlc29sdmVQcm9jZXNzb3JzIiwicCIsIiNsaXN0ZW5DaGFuZ2VzIiwicmVhZHkiLCIjZmlsZXNMb2FkZWQiLCJkcmFnZ2FibGVTZWxlY3RvciIsInNldHVwSW5wdXRIYW5kbGVyIiwic2V0dXBEcmFnZ2FibGUiLCIjc2V0dXBJbnB1dEhhbmRsZXIiLCJJbnB1dEhhbmRsZXIiLCJtdWx0aXBsZSIsImFjY2VwdCIsInByb2Nlc3NGaWxlcyIsIkVycm9yIiwiI3NldHVwRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlVXBsb2FkZXIiLCJhZGQiLCIjcHJvY2Vzc0ZpbGVzIiwidmFsaWRhdGUiLCJwcm9jZXNzIiwiZXJyIiwibWVzc2FnZSIsIkNsZWFuIiwiZmlsZU5hbWUiLCJEZWxldGUiLCJvZmYiLCJ6b25lcyIsIlNldCIsIm9uRHJvcEJvdW5kIiwib25EcmFnT3ZlckJvdW5kIiwib25Ecm9wIiwiYmluZCIsIm9uRHJhZ092ZXIiLCIjb25Ecm9wIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRyYW5zZmVyIiwiZGF0YVRyYW5zZmVyIiwiZ2V0QXNGaWxlIiwiI29uRHJhZ092ZXIiLCJlbCIsImhhcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwiam9pbiIsImNhcHR1cmUiLCJvbkNoYW5nZSIsIm9wZW4iLCJhZnRlciIsIiNvbkNoYW5nZSIsImZyb20iLCJ2YWx1ZSIsImNsaWNrIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiWEhSTG9hZGVyIiwicHJvbWlzZSIsInVwbG9hZGVkIiwiYmVhcmVyIiwiaXNVcGxvYWRlZCIsInVwbG9hZFByb2dyZXNzIiwiaGFzRXJyb3IiLCJvblByb2dyZXNzIiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnQiLCJsb2FkZWQiLCJwYXJzZUludCIsInRvU3RyaW5nIiwib25Db21wbGV0ZWQiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIm9uRXJyb3IiLCJjb25zb2xlIiwicmVqZWN0Iiwib25BYm9ydCIsImdldEhlYWRlcnMiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwidXBsb2FkIiwiZGF0YSIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJmZXRjaCIsImUiLCJhYm9ydCIsInByZXZpZXdVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJkaW1lbnNpb25zIiwiZ2V0RGltZW5zaW9ucyIsImltYWdlRmlsZSIsIm1ldGEiLCJwcmV2aWV3Iiwid2lkdGgiLCJoZWlnaHQiLCJ0b0Jhc2U2NCIsInNyYyIsIlByb21pc2UiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInN0YXJ0c1dpdGgiLCJhbGxvd2VkVHlwZXMiLCJpbmNsdWRlcyIsIm1heFNpemUiXSwic291cmNlcyI6WyIvL2FkYXB0ZXJzL2Jhc2UudHMiLCIvL2FkYXB0ZXJzL2luZGV4LnRzIiwiLy9hZGFwdGVycy93ZWIudHMiLCIvL2NvcmUvcmVnaXN0cnkudHMiLCIvL2NvcmUvdHlwZXMudHMiLCIvL2hvb2tzL3VzZS11cGxvYWRlci50c3giLCIvL2luZGV4LnRzLyIsIi8vaW5wdXRzL2RyYWdnYWJsZS50cyIsIi8vaW5wdXRzL2lucHV0LnRzIiwiLy9sb2FkZXIveGhyLnRzIiwiLy9wcm9jZXNzb3JzL2ltYWdlLnRzIiwiLy92YWxpZGF0b3JzL2ltYWdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUtBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUxBOzs7OztVQVFNLE1BQU9DLGFBQWMsU0FBUUYsTUFBQSxDQUFBRyxhQUFpQjtZQUNuRCxDQUFBQyxHQUFJLEdBQUcsSUFBSUMsR0FBRyxFQUFxQjtZQUNuQyxDQUFBQyxLQUFNLEdBQVcsQ0FBQztZQUVsQixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUgsR0FBSSxDQUFDSSxNQUFNLEVBQUUsQ0FBQztZQUMvQjtZQUVBLElBQUlKLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2pCO1lBRUE7OztZQUdBSyxRQUFRQSxDQUFDQyxLQUFhO2NBQ3JCLE1BQU1DLEtBQUssR0FBZ0IsRUFBRTtjQUU3QixLQUFLLE1BQU1DLElBQUksSUFBSUYsS0FBSyxFQUFFO2dCQUN6QixNQUFNRyxFQUFFLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFO2dCQUM5QixNQUFNQyxJQUFJLEdBQWM7a0JBQ3ZCSCxFQUFFO2tCQUNGSSxJQUFJLEVBQUVMLElBQUksQ0FBQ0ssSUFBSTtrQkFDZkMsSUFBSSxFQUFFTixJQUFJLENBQUNNLElBQUk7a0JBQ2ZDLElBQUksRUFBRVAsSUFBSSxDQUFDTyxJQUFJO2tCQUNmUCxJQUFJO2tCQUNKUSxNQUFNLEVBQUU7aUJBQ1I7Z0JBQ0QsSUFBSSxDQUFDLENBQUFoQixHQUFJLENBQUNpQixHQUFHLENBQUNS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