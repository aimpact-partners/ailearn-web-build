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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiQmFzZUZpbGVzTGlzdCIsIlJlYWN0aXZlTW9kZWwiLCJtYXAiLCJNYXAiLCJ0b3RhbCIsIml0ZW1zIiwidmFsdWVzIiwiYWRkRmlsZXMiLCJmaWxlcyIsImFkZGVkIiwiZmlsZSIsImlkIiwiY3J5cHRvIiwicmFuZG9tVVVJRCIsIml0ZW0iLCJuYW1lIiwic2l6ZSIsInR5cGUiLCJzdGF0dXMiLCJzZXQiLCJwdXNoIiwidHJpZ2dlciIsInJlbW92ZSIsInJlbW92ZWQiLCJkZWxldGUiLCJjbGVhbiIsImNsZWFyIiwidXBkYXRlU3RhdHVzIiwiZXJyb3IiLCJnZXQiLCJleHBvcnRzIiwiX3dlYiIsIkZpbGVzVXBsb2FkZXIiLCJpbnN0YW5jZSIsImdldEluc3RhbmNlIiwic3BlY3MiLCJXZWJGaWxlc1VwbG9hZGVyIiwiX2Jhc2UiLCJSZWdpc3RyeSIsInZhbGlkYXRvcnMiLCJwcm9jZXNzb3JzIiwicmVnaXN0ZXJWYWxpZGF0b3IiLCJ2YWxpZGF0b3IiLCJyZWdpc3RlclByb2Nlc3NvciIsInByb2Nlc3NvciIsImdldFZhbGlkYXRvciIsIm9wdGlvbnMiLCJWIiwidW5kZWZpbmVkIiwiZ2V0UHJvY2Vzc29yIiwiUCIsIlVwbG9hZGVyRXZlbnRzIiwiUmVhY3QiLCJfaG9va3MiLCJfaW5kZXgiLCJ1c2VVcGxvYWRlciIsInRyaWdnZXJSZWYiLCJ1c2VSZWYiLCJkcm9wWm9uZVJlZiIsInVwbG9hZGVyIiwidXNlU3RhdGUiLCJVcGxvYWRlciIsInN0b3JlIiwidXNlU3RvcmUiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiY3JlYXRlIiwiZGVzdHJveSIsImNvdW50IiwicHJvZ3Jlc3MiLCJNYXRoIiwicm91bmQiLCJsZW5ndGgiLCJlcnJvcnMiLCJ1cGxvYWRpbmciLCJmZXRjaGluZyIsIl9hZGFwdGVycyIsIl90eXBlcyIsIl9kcmFnZ2FibGUiLCJfaW5wdXQiLCJfcmVnaXN0cnkiLCJfaW1hZ2UiLCJfaW1hZ2UyIiwiSW1hZ2VWYWxpZGF0b3IiLCJJbWFnZVByb2Nlc3NvciIsImRyYWdnYWJsZSIsImlucHV0SGFuZGxlciIsImNvbnN0cnVjdG9yIiwicmVzb2x2ZVZhbGlkYXRvcnMiLCJyZXNvbHZlUHJvY2Vzc29ycyIsIm9uIiwiQ2hhbmdlIiwibGlzdGVuQ2hhbmdlcyIsIkxvYWRFbmQiLCJmaWxlc0xvYWRlZCIsIiNyZXNvbHZlVmFsaWRhdG9ycyIsIkFycmF5IiwiaXNBcnJheSIsInYiLCJmaWx0ZXIiLCJCb29sZWFuIiwiI3Jlc29sdmVQcm9jZXNzb3JzIiwicCIsIiNsaXN0ZW5DaGFuZ2VzIiwicmVhZHkiLCIjZmlsZXNMb2FkZWQiLCJkcmFnZ2FibGVTZWxlY3RvciIsInNldHVwSW5wdXRIYW5kbGVyIiwic2V0dXBEcmFnZ2FibGUiLCIjc2V0dXBJbnB1dEhhbmRsZXIiLCJJbnB1dEhhbmRsZXIiLCJtdWx0aXBsZSIsImFjY2VwdCIsInByb2Nlc3NGaWxlcyIsIkVycm9yIiwiI3NldHVwRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlVXBsb2FkZXIiLCJhZGQiLCIjcHJvY2Vzc0ZpbGVzIiwidmFsaWRhdGUiLCJwcm9jZXNzIiwiZXJyIiwibWVzc2FnZSIsIkNsZWFuIiwiZmlsZU5hbWUiLCJEZWxldGUiLCJvZmYiLCJ6b25lcyIsIlNldCIsIm9uRHJvcEJvdW5kIiwib25EcmFnT3ZlckJvdW5kIiwib25Ecm9wIiwiYmluZCIsIm9uRHJhZ092ZXIiLCIjb25Ecm9wIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRyYW5zZmVyIiwiZGF0YVRyYW5zZmVyIiwiZ2V0QXNGaWxlIiwiI29uRHJhZ092ZXIiLCJlbCIsImhhcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwiam9pbiIsImNhcHR1cmUiLCJvbkNoYW5nZSIsIm9wZW4iLCJhZnRlciIsIiNvbkNoYW5nZSIsImZyb20iLCJ2YWx1ZSIsImNsaWNrIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiWEhSTG9hZGVyIiwicHJvbWlzZSIsInVwbG9hZGVkIiwiYmVhcmVyIiwiaXNVcGxvYWRlZCIsInVwbG9hZFByb2dyZXNzIiwiaGFzRXJyb3IiLCJvblByb2dyZXNzIiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnQiLCJsb2FkZWQiLCJwYXJzZUludCIsInRvU3RyaW5nIiwib25Db21wbGV0ZWQiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIm9uRXJyb3IiLCJjb25zb2xlIiwicmVqZWN0Iiwib25BYm9ydCIsImdldEhlYWRlcnMiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwidXBsb2FkIiwiZGF0YSIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJmZXRjaCIsImUiLCJhYm9ydCIsInByZXZpZXdVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJkaW1lbnNpb25zIiwiZ2V0RGltZW5zaW9ucyIsImltYWdlRmlsZSIsIm1ldGEiLCJwcmV2aWV3Iiwid2lkdGgiLCJoZWlnaHQiLCJ0b0Jhc2U2NCIsInNyYyIsIlByb21pc2UiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInN0YXJ0c1dpdGgiLCJhbGxvd2VkVHlwZXMiLCJpbmNsdWRlcyIsIm1heFNpemUiXSwic291cmNlcyI6WyIvYWRhcHRlcnMvYmFzZS50cyIsIi9hZGFwdGVycy9pbmRleC50cyIsIi9hZGFwdGVycy93ZWIudHMiLCIvY29yZS9yZWdpc3RyeS50cyIsIi9jb3JlL3R5cGVzLnRzIiwiL2hvb2tzL3VzZS11cGxvYWRlci50c3giLCIvaW5kZXgudHMiLCIvaW5wdXRzL2RyYWdnYWJsZS50cyIsIi9pbnB1dHMvaW5wdXQudHMiLCIvbG9hZGVyL3hoci50cyIsIi9wcm9jZXNzb3JzL2ltYWdlLnRzIiwiL3ZhbGlkYXRvcnMvaW1hZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBS0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBTEE7Ozs7O1VBUU0sTUFBT0MsYUFBYyxTQUFRRixNQUFBLENBQUFHLGFBQWlCO1lBQ25ELENBQUFDLEdBQUksR0FBRyxJQUFJQyxHQUFHLEVBQXFCO1lBQ25DLENBQUFDLEtBQU0sR0FBVyxDQUFDO1lBRWxCLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBSCxHQUFJLENBQUNJLE1BQU0sRUFBRSxDQUFDO1lBQy9CO1lBRUEsSUFBSUosR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUk7WUFDakI7WUFFQTs7O1lBR0FLLFFBQVFBLENBQUNDLEtBQWE7Y0FDckIsTUFBTUMsS0FBSyxHQUFnQixFQUFFO2NBRTdCLEtBQUssTUFBTUMsSUFBSSxJQUFJRixLQUFLLEVBQUU7Z0JBQ3pCLE1BQU1HLEVBQUUsR0FBR0MsTUFBTSxDQUFDQyxVQUFVLEVBQUU7Z0JBQzlCLE1BQU1DLElBQUksR0FBYztrQkFDdkJILEVBQUU7a0JBQ0ZJLElBQUksRUFBRUwsSUFBSSxDQUFDSyxJQUFJO2tCQUNmQyxJQUFJLEVBQUVOLElBQUksQ0FBQ00sSUFBSTtrQkFDZkMsSUFBSSxFQUFFUCxJQUFJLENBQUNPLElBQUk7a0JBQ2ZQLElBQUk7a0JBQ0pRLE1BQU0sRUFBRTtpQkFDUjtnQkFDRCxJQUFJLENBQUMsQ0FBQWhCLEdBQUksQ0FBQ2lCLEdBQUcsQ0FBQ1IsRUFBRSxFQUFFRyxJQUFJLENBQUM7Z0JBQ3ZCTCxLQUFLLENBQUNXLElBQUksQ0FBQ04sSUFBSSxDQUFDOztjQUdqQixJQUFJLENBQUMsQ0FBQVYsS0FBTSxHQUFHLElBQUksQ0FBQyxDQUFBRixHQUFJLENBQUNjLElBQUk7Y0FDNUIsSUFBSSxDQUFDSyxPQUFPLENBQUMsS0FBSyxFQUFFWixLQUFLLENBQUM7Y0FDMUIsSUFBSSxDQUFDWSxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ2hCLEtBQUssQ0FBQztjQUVsQyxPQUFPSSxLQUFLO1lBQ2I7WUFFQTs7O1lBR0FhLE1BQU1BLENBQUNYLEVBQVU7Y0FDaEIsTUFBTVksT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFBckIsR0FBSSxDQUFDc0IsTUFBTSxDQUFDYixFQUFFLENBQUM7Y0FDcEMsSUFBSVksT0FBTyxFQUFFO2dCQUNaLElBQUksQ0FBQyxDQUFBbkIsS0FBTSxHQUFHLElBQUksQ0FBQyxDQUFBRixHQUFJLENBQUNjLElBQUk7Z0JBQzVCLElBQUksQ0FBQ0ssT0FBTyxDQUFDLFFBQVEsRUFBRVYsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUNVLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDaEIsS0FBSyxDQUFDOztjQUVuQyxPQUFPa0IsT0FBTztZQUNmO1lBRUE7OztZQUdBLE1BQU1FLEtBQUtBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQXZCLEdBQUksQ0FBQ3dCLEtBQUssRUFBRTtjQUNqQixJQUFJLENBQUMsQ0FBQXRCLEtBQU0sR0FBRyxDQUFDO2NBQ2YsSUFBSSxDQUFDaUIsT0FBTyxDQUFDLE9BQU8sQ0FBQztjQUNyQixJQUFJLENBQUNBLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO1lBQzNCO1lBRUE7OztZQUdBTSxZQUFZQSxDQUFDaEIsRUFBVSxFQUFFTyxNQUFrQixFQUFFVSxLQUFjO2NBQzFELE1BQU1kLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQVosR0FBSSxDQUFDMkIsR0FBRyxDQUFDbEIsRUFBRSxDQUFDO2NBQzlCLElBQUksQ0FBQ0csSUFBSSxFQUFFO2NBRVhBLElBQUksQ0FBQ0ksTUFBTSxHQUFHQSxNQUFNO2NBQ3BCLElBQUlVLEtBQUssRUFBRWQsSUFBSSxDQUFDYyxLQUFLLEdBQUdBLEtBQUs7Y0FFN0IsSUFBSSxDQUFDUCxPQUFPLENBQUMsUUFBUSxFQUFFUCxJQUFJLENBQUM7Y0FDNUIsSUFBSSxDQUFDTyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ2hCLEtBQUssQ0FBQztZQUNuQzs7VUFDQXlCLE9BQUEsQ0FBQTlCLGFBQUEsR0FBQUEsYUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RkQsSUFBQUYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWdDLElBQUEsR0FBQWhDLE9BQUE7VUFFTSxNQUFPaUMsYUFBYyxTQUFRbEMsTUFBQSxDQUFBRyxhQUE0QjtZQUM5RCxPQUFPLENBQUFnQyxRQUFTO1lBRWhCLE9BQU9DLFdBQVdBLENBQUNDLEtBQUssR0FBRyxFQUFFO2NBQzVCLElBQUksSUFBSSxDQUFDLENBQUFGLFFBQVMsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO2NBQ3pDLE9BQU8sSUFBSUYsSUFBQSxDQUFBSyxnQkFBZ0IsQ0FBQ0QsS0FBSyxDQUFDO1lBQ25DOztVQUNBTCxPQUFBLENBQUFFLGFBQUEsR0FBQUEsYUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNURCxJQUFBSyxLQUFBLEdBQUF0QyxPQUFBO1VBRU0sTUFBT3FDLGdCQUFpQixTQUFRQyxLQUFBLENBQUFyQyxhQUFhO1VBQUc4QixPQUFBLENBQUFNLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0R0RDtVQUNNLE1BQU9FLFFBQVE7WUFDcEIsT0FBT0MsVUFBVSxHQUEwRCxFQUFFO1lBQzdFLE9BQU9DLFVBQVUsR0FBMEQsRUFBRTtZQUU3RSxPQUFPQyxpQkFBaUJBLENBQUMxQixJQUFZLEVBQUUyQixTQUFnRDtjQUN0RixJQUFJLENBQUNILFVBQVUsQ0FBQ3hCLElBQUksQ0FBQyxHQUFHMkIsU0FBUztZQUNsQztZQUVBLE9BQU9DLGlCQUFpQkEsQ0FBQzVCLElBQVksRUFBRTZCLFNBQWdEO2NBQ3RGLElBQUksQ0FBQ0osVUFBVSxDQUFDekIsSUFBSSxDQUFDLEdBQUc2QixTQUFTO1lBQ2xDO1lBRUEsT0FBT0MsWUFBWUEsQ0FBQzlCLElBQVksRUFBRStCLE9BQWE7Y0FDOUMsTUFBTUMsQ0FBQyxHQUFHLElBQUksQ0FBQ1IsVUFBVSxDQUFDeEIsSUFBSSxDQUFDO2NBQy9CLE9BQU9nQyxDQUFDLEdBQUcsSUFBSUEsQ0FBQyxDQUFDRCxPQUFPLENBQUMsR0FBR0UsU0FBUztZQUN0QztZQUVBLE9BQU9DLFlBQVlBLENBQUNsQyxJQUFZLEVBQUUrQixPQUFhO2NBQzlDLE1BQU1JLENBQUMsR0FBRyxJQUFJLENBQUNWLFVBQVUsQ0FBQ3pCLElBQUksQ0FBQztjQUMvQixPQUFPbUMsQ0FBQyxHQUFHLElBQUlBLENBQUMsQ0FBQ0osT0FBTyxDQUFDLEdBQUdFLFNBQVM7WUFDdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNZRCxJQUFZRyxjQVFYO1VBUkQsV0FBWUEsY0FBYztZQUN6QkEsY0FBQSx1QkFBbUI7WUFDbkJBLGNBQUEsbUNBQStCO1lBQy9CQSxjQUFBLHFDQUFpQztZQUNqQ0EsY0FBQSxtQkFBZTtZQUNmQSxjQUFBLHFCQUFpQjtZQUNqQkEsY0FBQSxtQkFBZTtZQUNmQSxjQUFBLHFCQUFpQjtVQUNsQixDQUFDLEVBUldBLGNBQWMsS0FBQXJCLE9BQUEsQ0FBQXFCLGNBQUEsR0FBZEEsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQzFCLElBQUFDLEtBQUEsR0FBQXJELE9BQUE7VUFDQSxJQUFBc0QsTUFBQSxHQUFBdEQsT0FBQTtVQUNBLElBQUF1RCxNQUFBLEdBQUF2RCxPQUFBO1VBa0JPLFdBckJQOztVQWlCQTs7OztVQUlpQixTQUFVd0QsV0FBV0EsQ0FBa0NwQixLQUFxQjtZQUM1RixNQUFNcUIsVUFBVSxHQUFHSixLQUFLLENBQUNLLE1BQU0sQ0FBcUIsSUFBSSxDQUFDO1lBQ3pELE1BQU1DLFdBQVcsR0FBR04sS0FBSyxDQUFDSyxNQUFNLENBQXFCLElBQUksQ0FBQztZQUUxRDtZQUNBLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDLEdBQUdQLEtBQUssQ0FBQ1EsUUFBUSxDQUFDLE1BQU0sSUFBSU4sTUFBQSxDQUFBTyxRQUFRLENBQUMxQixLQUFLLENBQUMsQ0FBQztZQUM1RCxNQUFNMkIsS0FBSyxHQUFHLElBQUFULE1BQUEsQ0FBQVUsUUFBUSxFQUFDSixRQUFRLENBQUM7WUFFaEM7WUFDQVAsS0FBSyxDQUFDWSxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUNSLFVBQVUsQ0FBQ1MsT0FBTyxFQUFFO2NBRXpCTixRQUFRLENBQUNPLE1BQU0sQ0FBQ1YsVUFBVSxDQUFDUyxPQUFPLEVBQUVQLFdBQVcsQ0FBQ08sT0FBTyxJQUFJakIsU0FBUyxDQUFDO2NBQ3JFLE9BQU8sTUFBTVcsUUFBUSxDQUFDUSxPQUFPLEVBQUU7WUFDaEMsQ0FBQyxFQUFFLENBQUNSLFFBQVEsQ0FBQyxDQUFDO1lBRWQsTUFBTVMsS0FBSyxHQUFHTixLQUFLLENBQUN0RCxLQUFLLENBQUNKLEtBQUs7WUFDL0IsTUFBTWlFLFFBQVEsR0FBR1AsS0FBSyxDQUFDdEQsS0FBSyxDQUFDSixLQUFLLEdBQUcsQ0FBQyxHQUFHa0UsSUFBSSxDQUFDQyxLQUFLLENBQUVULEtBQUssQ0FBQ3RELEtBQUssQ0FBQ0gsS0FBSyxDQUFDbUUsTUFBTSxHQUFHVixLQUFLLENBQUN0RCxLQUFLLENBQUNKLEtBQUssR0FBSSxHQUFHLENBQUMsR0FBRyxDQUFDO1lBRTdHLE9BQU87Y0FDTm9ELFVBQVU7Y0FDVkUsV0FBVztjQUNYQyxRQUFRO2NBQ1JuRCxLQUFLLEVBQUVzRCxLQUFLLENBQUN0RCxLQUFLLENBQUNILEtBQVk7Y0FDL0JvRSxNQUFNLEVBQUVYLEtBQUssQ0FBQ1csTUFBTTtjQUNwQkMsU0FBUyxFQUFFWixLQUFLLENBQUNhLFFBQVE7Y0FDekJOLFFBQVE7Y0FDUkQ7YUFDQTtVQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xEQSxJQUFBdEUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTZFLFNBQUEsR0FBQTdFLE9BQUE7VUFFQSxJQUFBOEUsTUFBQSxHQUFBOUUsT0FBQTtVQVNBLElBQUErRSxVQUFBLEdBQUEvRSxPQUFBO1VBQ0EsSUFBQWdGLE1BQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBaUYsU0FBQSxHQUFBakYsT0FBQTtVQUNBLElBQUFrRixNQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQW1GLE9BQUEsR0FBQW5GLE9BQUE7VUFLQTtVQUNBaUYsU0FBQSxDQUFBMUMsUUFBUSxDQUFDRyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUV3QyxNQUFBLENBQUFFLGNBQWMsQ0FBQztVQUNuREgsU0FBQSxDQUFBMUMsUUFBUSxDQUFDSyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUV1QyxPQUFBLENBQUFFLGNBQWMsQ0FBQztVQUVuRDs7Ozs7O1VBS1c7VUFBVSxNQUFPdkIsUUFBUyxTQUFRL0QsTUFBQSxDQUFBRyxhQUF3QjtZQUNwRSxDQUFBTyxLQUFNO1lBQ04sQ0FBQTZFLFNBQVU7WUFDVixDQUFBQyxZQUFhO1lBQ2IsQ0FBQW5ELEtBQU07WUFDTixDQUFBSSxVQUFXLEdBQXFCLEVBQUU7WUFDbEMsQ0FBQUMsVUFBVyxHQUFxQixFQUFFO1lBQ2xDLENBQUFpQyxNQUFPO1lBRVAsSUFBSWpFLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSWlFLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUFjLFlBQVlwRCxLQUFBLEdBQXdCLEVBQW9CO2NBQ3ZELEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdBLEtBQUs7Y0FFbkIsSUFBSSxDQUFDLENBQUFJLFVBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQWlELGlCQUFrQixDQUFDckQsS0FBSyxDQUFDSSxVQUFVLENBQUM7Y0FDNUQsSUFBSSxDQUFDLENBQUFDLFVBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQWlELGlCQUFrQixDQUFDdEQsS0FBSyxDQUFDSyxVQUFVLENBQUM7Y0FFNUQsSUFBSSxDQUFDLENBQUFoQyxLQUFNLEdBQUdvRSxTQUFBLENBQUE1QyxhQUFhLENBQUNFLFdBQVcsRUFBRTtjQUN6QyxJQUFJLENBQUMsQ0FBQTFCLEtBQU0sQ0FBQ2tGLEVBQUUsQ0FBQ2IsTUFBQSxDQUFBMUIsY0FBYyxDQUFDd0MsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBQyxhQUFjLENBQUM7Y0FDMUQsSUFBSSxDQUFDLENBQUFwRixLQUFNLENBQUNrRixFQUFFLENBQUNiLE1BQUEsQ0FBQTFCLGNBQWMsQ0FBQzBDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQUMsV0FBWSxDQUFDO1lBQzFEO1lBRUEsQ0FBQU4saUJBQWtCTyxDQUFDeEQsVUFBNEI7Y0FDOUMsSUFBSSxDQUFDeUQsS0FBSyxDQUFDQyxPQUFPLENBQUMxRCxVQUFVLENBQUMsSUFBSUEsVUFBVSxDQUFDaUMsTUFBTSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUU7Y0FFcEUsT0FBT2pDLFVBQVUsQ0FDZnJDLEdBQUcsQ0FBQ2dHLENBQUMsSUFBRztnQkFDUixJQUFJLE9BQU9BLENBQUMsS0FBSyxRQUFRLEVBQUUsT0FBT2xCLFNBQUEsQ0FBQTFDLFFBQVEsQ0FBQ08sWUFBWSxDQUFDcUQsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLE9BQU9BLENBQUMsS0FBSyxRQUFRLElBQUksTUFBTSxJQUFJQSxDQUFDLEVBQUUsT0FBT2xCLFNBQUEsQ0FBQTFDLFFBQVEsQ0FBQ08sWUFBWSxDQUFDcUQsQ0FBQyxDQUFDbkYsSUFBSSxFQUFFbUYsQ0FBQyxDQUFDcEQsT0FBTyxDQUFDO2dCQUN6RixPQUFPb0QsQ0FBbUI7Y0FDM0IsQ0FBQyxDQUFDLENBQ0RDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFxQjtZQUN0QztZQUVBLENBQUFYLGlCQUFrQlksQ0FBQzdELFVBQTRCO2NBQzlDLElBQUksQ0FBQ3dELEtBQUssQ0FBQ0MsT0FBTyxDQUFDekQsVUFBVSxDQUFDLElBQUlBLFVBQVUsQ0FBQ2dDLE1BQU0sS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFO2NBRXBFLE9BQU9oQyxVQUFVLENBQ2Z0QyxHQUFHLENBQUNvRyxDQUFDLElBQUc7Z0JBQ1IsSUFBSSxPQUFPQSxDQUFDLEtBQUssUUFBUSxFQUFFLE9BQU90QixTQUFBLENBQUExQyxRQUFRLENBQUNXLFlBQVksQ0FBQ3FELENBQUMsQ0FBQztnQkFDMUQsSUFBSSxPQUFPQSxDQUFDLEtBQUssUUFBUSxJQUFJLE1BQU0sSUFBSUEsQ0FBQyxFQUFFLE9BQU90QixTQUFBLENBQUExQyxRQUFRLENBQUNXLFlBQVksQ0FBQ3FELENBQUMsQ0FBQ3ZGLElBQUksRUFBRXVGLENBQUMsQ0FBQ3hELE9BQU8sQ0FBQztnQkFDekYsT0FBT3dELENBQW1CO2NBQzNCLENBQUMsQ0FBQyxDQUNESCxNQUFNLENBQUNDLE9BQU8sQ0FBcUI7WUFDdEM7WUFFQSxDQUFBUixhQUFjLEdBQUdXLENBQUEsS0FBSztjQUNyQixJQUFJLENBQUM1QixRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFuRSxLQUFNLENBQUNtRSxRQUFRO2NBQ3BDLElBQUksQ0FBQzZCLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQWhHLEtBQU0sQ0FBQ2dHLEtBQUs7WUFDL0IsQ0FBQztZQUVELENBQUFWLFdBQVksR0FBR1csQ0FBQSxLQUFNLElBQUksQ0FBQ3BGLE9BQU8sQ0FBQ3dELE1BQUEsQ0FBQTFCLGNBQWMsQ0FBQzBDLE9BQU8sQ0FBQztZQUV6RDs7O1lBR0EzQixNQUFNLEdBQUdBLENBQUM3QyxPQUFxQixFQUFFcUYsaUJBQStCLEtBQUk7Y0FDbkUsSUFBSXJGLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQXNGLGlCQUFrQixDQUFDdEYsT0FBTyxDQUFDO2NBQzdDLElBQUlxRixpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQUUsY0FBZSxDQUFDRixpQkFBaUIsQ0FBQztZQUMvRCxDQUFDO1lBRUQsQ0FBQUMsaUJBQWtCRSxDQUFDeEYsT0FBb0I7Y0FDdEMsSUFBSSxDQUFDLENBQUFpRSxZQUFhLEdBQUcsSUFBSVAsTUFBQSxDQUFBK0IsWUFBWSxDQUFDO2dCQUNyQ3pGLE9BQU87Z0JBQ1AwRixRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE1RSxLQUFNLENBQUM0RSxRQUFRLElBQUksS0FBSztnQkFDdkNDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTdFLEtBQU0sQ0FBQzZFO2VBQ3BCLENBQUM7Y0FFRixJQUFJLENBQUMsQ0FBQTFCLFlBQWEsQ0FBQ0ksRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNbEYsS0FBSyxJQUFHO2dCQUM5QyxNQUFNLElBQUksQ0FBQ2lCLEtBQUssRUFBRTtnQkFDbEIsSUFBSSxDQUFDa0QsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLElBQUksQ0FBQ3RELE9BQU8sQ0FBQ3dELE1BQUEsQ0FBQTFCLGNBQWMsQ0FBQ3dDLE1BQU0sQ0FBQztnQkFFbkMsTUFBTWxGLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUQsS0FBTSxDQUFDRCxRQUFRLENBQUNDLEtBQUssQ0FBQztnQkFDekMsTUFBTSxJQUFJLENBQUMsQ0FBQXlHLFlBQWEsQ0FBQ3hHLEtBQUssQ0FBQztnQkFFL0IsSUFBSSxDQUFDa0UsUUFBUSxHQUFHLEtBQUs7Z0JBQ3JCLElBQUksQ0FBQ3RELE9BQU8sQ0FBQ3dELE1BQUEsQ0FBQTFCLGNBQWMsQ0FBQ3dDLE1BQU0sQ0FBQztjQUNwQyxDQUFDLENBQUM7Y0FFRixJQUFJLENBQUMsQ0FBQUwsWUFBYSxDQUFDSSxFQUFFLENBQUMsU0FBUyxFQUFFOUQsS0FBSyxJQUFHO2dCQUN4QyxJQUFJLENBQUNQLE9BQU8sQ0FBQ3dELE1BQUEsQ0FBQTFCLGNBQWMsQ0FBQytELEtBQUssRUFBRXRGLEtBQUssQ0FBQztjQUMxQyxDQUFDLENBQUM7WUFDSDtZQUVBLENBQUFnRixjQUFlTyxDQUFDVCxpQkFBOEI7Y0FDN0MsSUFBSSxDQUFDLENBQUFyQixTQUFVLEdBQUcsSUFBSVAsVUFBQSxDQUFBc0MsaUJBQWlCLEVBQUU7Y0FDekMsSUFBSSxDQUFDLENBQUEvQixTQUFVLENBQUNnQyxHQUFHLENBQUNYLGlCQUFpQixDQUFDO1lBQ3ZDO1lBRUEsTUFBTSxDQUFBTyxZQUFhSyxDQUFDOUcsS0FBa0I7Y0FDckMsS0FBSyxNQUFNRSxJQUFJLElBQUlGLEtBQUssRUFBRTtnQkFDekIsSUFBSTtrQkFDSCxLQUFLLE1BQU1rQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUFILFVBQVcsRUFBRSxNQUFNRyxTQUFTLENBQUM2RSxRQUFRLENBQUM3RyxJQUFJLENBQUM7a0JBQ3hFLEtBQUssTUFBTWtDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQUosVUFBVyxFQUFFLE1BQU1JLFNBQVMsQ0FBQzRFLE9BQU8sQ0FBQzlHLElBQUksQ0FBQztrQkFDdkUsSUFBSSxDQUFDLENBQUFGLEtBQU0sQ0FBQ21CLFlBQVksQ0FBQ2pCLElBQUksQ0FBQ0MsRUFBRSxFQUFFLE9BQU8sQ0FBQztpQkFDMUMsQ0FBQyxPQUFPOEcsR0FBRyxFQUFFO2tCQUNiLElBQUksQ0FBQyxDQUFBakgsS0FBTSxDQUFDbUIsWUFBWSxDQUFDakIsSUFBSSxDQUFDQyxFQUFFLEVBQUUsT0FBTyxFQUFHOEcsR0FBYSxDQUFDQyxPQUFPLENBQUM7OztZQUdyRTtZQUVBakcsS0FBSyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNsQixNQUFNLElBQUksQ0FBQyxDQUFBakIsS0FBTSxDQUFDaUIsS0FBSyxFQUFFO2NBQ3pCLElBQUksQ0FBQ0osT0FBTyxDQUFDd0QsTUFBQSxDQUFBMUIsY0FBYyxDQUFDd0UsS0FBSyxDQUFDO2NBQ2xDLElBQUksQ0FBQ3RHLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkIsQ0FBQztZQUVERyxNQUFNLEdBQUcsTUFBT29HLFFBQWdCLElBQUk7Y0FDbkMsTUFBTSxJQUFJLENBQUMsQ0FBQXBILEtBQU0sQ0FBQ04sR0FBRyxDQUFDc0IsTUFBTSxDQUFDb0csUUFBUSxDQUFDO2NBQ3RDLElBQUksQ0FBQ3ZHLE9BQU8sQ0FBQ3dELE1BQUEsQ0FBQTFCLGNBQWMsQ0FBQzBFLE1BQU0sQ0FBQztZQUNwQyxDQUFDO1lBRUQxRCxPQUFPLEdBQUdBLENBQUEsS0FBSztjQUNkLElBQUksQ0FBQyxDQUFBbUIsWUFBYSxFQUFFbkIsT0FBTyxFQUFFO2NBQzdCLElBQUksQ0FBQyxDQUFBa0IsU0FBVSxFQUFFbEIsT0FBTyxFQUFFO2NBRTFCLElBQUksQ0FBQyxDQUFBM0QsS0FBTSxDQUFDc0gsR0FBRyxDQUFDakQsTUFBQSxDQUFBMUIsY0FBYyxDQUFDd0MsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBQyxhQUFjLENBQUM7Y0FDM0QsSUFBSSxDQUFDLENBQUFwRixLQUFNLENBQUNzSCxHQUFHLENBQUNqRCxNQUFBLENBQUExQixjQUFjLENBQUMwQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUFDLFdBQVksQ0FBQztZQUMzRCxDQUFDOztVQUNEaEUsT0FBQSxDQUFBK0IsUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVKRCxJQUFBL0QsTUFBQSxHQUFBQyxPQUFBO1VBUU0sTUFBT3FILGlCQUFrQixTQUFRdEgsTUFBQSxDQUFBRyxhQUF1QztZQUM3RSxDQUFBOEgsS0FBTSxHQUFHLElBQUlDLEdBQUcsRUFBZTtZQUUvQixDQUFBQyxXQUFZO1lBQ1osQ0FBQUMsZUFBZ0I7WUFFaEIzQyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUEwQyxXQUFZLEdBQUcsSUFBSSxDQUFDLENBQUFFLE1BQU8sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztjQUMzQyxJQUFJLENBQUMsQ0FBQUYsZUFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQUcsVUFBVyxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3BEO1lBRUEsQ0FBQUQsTUFBT0csQ0FBQ0MsS0FBZ0I7Y0FDdkJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBRXRCLElBQUk7Z0JBQ0gsTUFBTUMsUUFBUSxHQUFHRixLQUFLLENBQUNHLFlBQVk7Z0JBQ25DLElBQUksQ0FBQ0QsUUFBUSxFQUFFcEksS0FBSyxFQUFFbUUsTUFBTSxFQUFFO2dCQUU5QixNQUFNaEUsS0FBSyxHQUFXLEVBQUU7Z0JBQ3hCLEtBQUssTUFBTU0sSUFBSSxJQUFJMkgsUUFBUSxDQUFDcEksS0FBSyxFQUFFO2tCQUNsQyxNQUFNSyxJQUFJLEdBQUdJLElBQUksQ0FBQzZILFNBQVMsRUFBRTtrQkFDN0IsSUFBSWpJLElBQUksRUFBRUYsS0FBSyxDQUFDWSxJQUFJLENBQUNWLElBQUksQ0FBQzs7Z0JBRzNCLElBQUlGLEtBQUssQ0FBQ2dFLE1BQU0sRUFBRSxJQUFJLENBQUNuRCxPQUFPLENBQUMsU0FBUyxFQUFFYixLQUFLLENBQUM7ZUFDaEQsQ0FBQyxPQUFPb0IsS0FBSyxFQUFFO2dCQUNmLElBQUksQ0FBQ1AsT0FBTyxDQUFDLFNBQVMsRUFBRU8sS0FBYyxDQUFDOztZQUV6QztZQUVBLENBQUF5RyxVQUFXTyxDQUFDTCxLQUFnQjtjQUMzQkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7WUFDdkI7WUFFQTtZQUNBbkIsR0FBR0EsQ0FBQ3dCLEVBQWU7Y0FDbEIsSUFBSSxJQUFJLENBQUMsQ0FBQWQsS0FBTSxDQUFDZSxHQUFHLENBQUNELEVBQUUsQ0FBQyxFQUFFO2NBRXpCQSxFQUFFLENBQUNFLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQWQsV0FBWSxDQUFDO2NBQzlDWSxFQUFFLENBQUNFLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQWIsZUFBZ0IsQ0FBQztjQUN0RCxJQUFJLENBQUMsQ0FBQUgsS0FBTSxDQUFDVixHQUFHLENBQUN3QixFQUFFLENBQUM7WUFDcEI7WUFFQTtZQUNBdkgsTUFBTUEsQ0FBQ3VILEVBQWU7Y0FDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBZCxLQUFNLENBQUNlLEdBQUcsQ0FBQ0QsRUFBRSxDQUFDLEVBQUU7Y0FFMUJBLEVBQUUsQ0FBQ0csbUJBQW1CLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBZixXQUFZLENBQUM7Y0FDakRZLEVBQUUsQ0FBQ0csbUJBQW1CLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBZCxlQUFnQixDQUFDO2NBQ3pELElBQUksQ0FBQyxDQUFBSCxLQUFNLENBQUN2RyxNQUFNLENBQUNxSCxFQUFFLENBQUM7WUFDdkI7WUFFQTtZQUNBMUUsT0FBT0EsQ0FBQTtjQUNOLEtBQUssTUFBTTBFLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQWQsS0FBTSxFQUFFO2dCQUM3QmMsRUFBRSxDQUFDRyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUFmLFdBQVksQ0FBQztnQkFDakRZLEVBQUUsQ0FBQ0csbUJBQW1CLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBZCxlQUFnQixDQUFDOztjQUUxRCxJQUFJLENBQUMsQ0FBQUgsS0FBTSxDQUFDckcsS0FBSyxFQUFFO1lBQ3BCOztVQUNBSSxPQUFBLENBQUFzRixpQkFBQSxHQUFBQSxpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRUQsSUFBQXRILE1BQUEsR0FBQUMsT0FBQTtVQUxBOzs7OztVQW1CTSxNQUFPK0csWUFBYSxTQUFRaEgsTUFBQSxDQUFBRyxhQUFrQztZQUNuRSxDQUFBZ0osS0FBTTtZQUNOLENBQUE1SCxPQUFRO1lBQ1IsQ0FBQWMsS0FBTTtZQUVOb0QsWUFBWXBELEtBQXlCO2NBQ3BDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdBLEtBQUs7Y0FFbkI7Y0FDQSxJQUFJLENBQUNBLEtBQUssQ0FBQ2QsT0FBTyxFQUFFO2dCQUNuQixNQUFNLElBQUk2RixLQUFLLENBQUMsc0RBQXNELENBQUM7O2NBR3hFLElBQUksQ0FBQyxDQUFBN0YsT0FBUSxHQUFHLE9BQU9jLEtBQUssQ0FBQ2QsT0FBTyxLQUFLLFFBQVEsR0FBRzZILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDaEgsS0FBSyxDQUFDZCxPQUFPLENBQUMsR0FBR2MsS0FBSyxDQUFDZCxPQUFPO2NBRXpHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQUEsT0FBUSxFQUFFO2dCQUNuQixNQUFNLElBQUk2RixLQUFLLENBQUMsNEJBQTRCLENBQUM7O2NBRzlDO2NBQ0EsSUFBSSxDQUFDLENBQUErQixLQUFNLEdBQUdDLFFBQVEsQ0FBQ0UsYUFBYSxDQUFDLE9BQU8sQ0FBQztjQUM3QyxJQUFJLENBQUMsQ0FBQUgsS0FBTSxDQUFDaEksSUFBSSxHQUFHLE1BQU07Y0FDekIsSUFBSSxDQUFDLENBQUFnSSxLQUFNLENBQUNJLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07Y0FFbEMsSUFBSW5ILEtBQUssQ0FBQzRFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQWtDLEtBQU0sQ0FBQ2xDLFFBQVEsR0FBRyxJQUFJO2NBQy9DLElBQUk1RSxLQUFLLENBQUM2RSxNQUFNLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxDQUFBaUMsS0FBTSxDQUFDakMsTUFBTSxHQUFHaEIsS0FBSyxDQUFDQyxPQUFPLENBQUM5RCxLQUFLLENBQUM2RSxNQUFNLENBQUMsR0FBRzdFLEtBQUssQ0FBQzZFLE1BQU0sQ0FBQ3VDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBR3BILEtBQUssQ0FBQzZFLE1BQU07O2NBRXpGLElBQUk3RSxLQUFLLENBQUNxSCxPQUFPLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxDQUFBUCxLQUFjLENBQUNPLE9BQU8sR0FBR3JILEtBQUssQ0FBQ3FILE9BQU87O2NBRzdDLElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNGLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQVUsUUFBUyxDQUFDO2NBQ3RELElBQUksQ0FBQyxDQUFBcEksT0FBUSxDQUFDMEgsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ1csSUFBSSxDQUFDO2NBRWxEO2NBQ0EsSUFBSSxDQUFDLENBQUFySSxPQUFRLENBQUNzSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQztZQUNqQztZQUVBLENBQUFRLFFBQVMsR0FBR0csQ0FBQSxLQUFLO2NBQ2hCLE1BQU1wSixLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUF5SSxLQUFNLENBQUN6SSxLQUFLLEdBQUd3RixLQUFLLENBQUM2RCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFaLEtBQU0sQ0FBQ3pJLEtBQUssQ0FBQyxHQUFHLEVBQUU7Y0FDcEUsSUFBSSxDQUFDQSxLQUFLLENBQUNnRSxNQUFNLEVBQUU7Y0FFbkIsSUFBSTtnQkFDSCxJQUFJLENBQUNuRCxPQUFPLENBQUMsU0FBUyxFQUFFYixLQUFLLENBQUM7ZUFDOUIsQ0FBQyxPQUFPb0IsS0FBSyxFQUFFO2dCQUNmLElBQUksQ0FBQ1AsT0FBTyxDQUFDLFNBQVMsRUFBRU8sS0FBYyxDQUFDO2VBQ3ZDLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLENBQUFxSCxLQUFNLENBQUNhLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFMUIsQ0FBQztZQUVESixJQUFJLEdBQUdBLENBQUEsS0FBVztjQUNqQixJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDYyxLQUFLLEVBQUU7WUFDcEIsQ0FBQztZQUVENUYsT0FBT0EsQ0FBQTtjQUNOLElBQUksQ0FBQyxDQUFBOEUsS0FBTSxDQUFDRCxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFTLFFBQVMsQ0FBQztjQUN6RCxJQUFJLENBQUMsQ0FBQXBJLE9BQVEsQ0FBQzJILG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNVLElBQUksQ0FBQztjQUNyRCxJQUFJLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNlLFVBQVUsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLENBQUFmLEtBQU0sQ0FBQ2UsVUFBVSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUFoQixLQUFNLENBQUM7O1lBRWpEOztVQUNBbkgsT0FBQSxDQUFBZ0YsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xGRCxJQUFBaEgsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVyxNQUFPbUssU0FBVSxTQUFRcEssTUFBQSxDQUFBRyxhQUF3QjtZQUMxRGtLLE9BQU87WUFDUEMsUUFBUTtZQUNSL0YsUUFBUTtZQUNSekMsS0FBSztZQUViMkQsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQzRFLE9BQU8sR0FBR25ILFNBQVM7Y0FDeEIsSUFBSSxDQUFDb0gsUUFBUSxHQUFHLEtBQUs7Y0FDckIsSUFBSSxDQUFDL0YsUUFBUSxHQUFHLENBQUM7Y0FDakIsSUFBSSxDQUFDekMsS0FBSyxHQUFHLEtBQUs7WUFDbkI7WUFFQSxDQUFBeUksTUFBTztZQUNQQSxNQUFNQSxDQUFDQSxNQUEwQjtjQUNoQyxJQUFJQSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUNqQyxPQUFPLElBQUk7WUFDWjtZQUVBLElBQUkzRixTQUFTQSxDQUFBO2NBQ1osT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDeUYsT0FBTztZQUN0QjtZQUVBLElBQUlHLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUNyQjtZQUVBLElBQUlHLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUNsRyxRQUFRO1lBQ3JCO1lBRUEsSUFBSW1HLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQzVJLEtBQUs7WUFDbEI7WUFFUTZJLFVBQVVBLENBQUNsQyxLQUFvQjtjQUN0QyxJQUFJQSxLQUFLLENBQUNtQyxnQkFBZ0IsRUFBRTtnQkFDM0IsTUFBTUMsT0FBTyxHQUFHckcsSUFBSSxDQUFDQyxLQUFLLENBQUVnRSxLQUFLLENBQUNxQyxNQUFNLEdBQUcsR0FBRyxHQUFJckMsS0FBSyxDQUFDbkksS0FBSyxDQUFDO2dCQUM5RCxJQUFJLENBQUNpRSxRQUFRLEdBQUd3RyxRQUFRLENBQUNGLE9BQU8sQ0FBQ0csUUFBUSxFQUFFLENBQUM7O2NBRzdDLElBQUksQ0FBQ3pKLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFUTBKLFdBQVdBLENBQUN4QyxLQUFvQjtjQUN2QyxJQUFJLENBQUM2QixRQUFRLEdBQUcsSUFBSTtjQUNwQixJQUFJLENBQUNELE9BQU8sQ0FBQ2EsT0FBTyxFQUFFO2NBQ3RCLElBQUksQ0FBQzNKLE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FFdEI0SixVQUFVLENBQUMsTUFBSztnQkFDZixJQUFJLENBQUNkLE9BQU8sR0FBR25ILFNBQVM7Z0JBQ3hCLElBQUksQ0FBQzNCLE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FDdkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNSO1lBRVE2SixPQUFPQSxDQUFDM0MsS0FBb0I7Y0FDbkM0QyxPQUFPLENBQUN2SixLQUFLLENBQUMseUJBQXlCLEVBQUUyRyxLQUFLLENBQUM7Y0FDL0MsSUFBSSxDQUFDM0csS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDdUksT0FBTyxDQUFDaUIsTUFBTSxFQUFFO2NBQ3JCLElBQUksQ0FBQy9KLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFUWdLLE9BQU9BLENBQUE7Y0FDZCxJQUFJLENBQUNsQixPQUFPLENBQUNhLE9BQU8sQ0FBQyxLQUFLLENBQUM7Y0FDM0IsSUFBSSxDQUFDM0osT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBaUssVUFBVSxHQUFJbkosS0FBVSxJQUFhO2NBQ3BDLElBQUlvSixPQUFPLEdBQVksSUFBSUMsT0FBTyxFQUFFO2NBRXBDLE1BQU1uQixNQUFNLEdBQUdsSSxLQUFLLENBQUNrSSxNQUFNLElBQUksSUFBSSxDQUFDLENBQUFBLE1BQU87Y0FFM0MsSUFBSUEsTUFBTSxFQUFFO2dCQUNYa0IsT0FBTyxDQUFDRSxNQUFNLENBQUMsZUFBZSxFQUFFLFVBQVVwQixNQUFNLEVBQUUsQ0FBQzs7Y0FFcEQsSUFBSWxJLEtBQUssQ0FBQ2tJLE1BQU0sRUFBRSxPQUFPbEksS0FBSyxDQUFDa0ksTUFBTTtjQUVyQyxNQUFNcUIsSUFBSSxHQUFhQyxNQUFNLENBQUNELElBQUksQ0FBQ3ZKLEtBQUssQ0FBQztjQUN6Q3VKLElBQUksQ0FBQ0UsT0FBTyxDQUFFQyxHQUFXLElBQVU7Z0JBQ2xDLElBQUlBLEdBQUcsS0FBSyxRQUFRLEVBQUU7Z0JBQ3RCTixPQUFPLENBQUNFLE1BQU0sQ0FBQ0ksR0FBRyxFQUFFMUosS0FBSyxDQUFDMEosR0FBRyxDQUFDLENBQUM7Y0FDaEMsQ0FBQyxDQUFDO2NBQ0YsT0FBT04sT0FBTztZQUNmLENBQUM7WUFFTSxNQUFNTyxNQUFNQSxDQUFDQyxJQUFjLEVBQUVDLEdBQVc7Y0FDOUMsSUFBSTtnQkFDSCxJQUFJVCxPQUFPLEdBQUcsSUFBSSxDQUFDRCxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxNQUFNbkosS0FBSyxHQUFHO2tCQUNiOEosTUFBTSxFQUFFLE1BQU07a0JBQ2RWLE9BQU87a0JBQ1BXLElBQUksRUFBRUg7aUJBQ047Z0JBQ0QsT0FBT0ksS0FBSyxDQUFDSCxHQUFHLEVBQUU3SixLQUFLLENBQUM7ZUFDeEIsQ0FBQyxPQUFPaUssQ0FBQyxFQUFFO2dCQUNYakIsT0FBTyxDQUFDdkosS0FBSyxDQUFDLE9BQU8sRUFBRXdLLENBQUMsQ0FBQzs7WUFFM0I7WUFFT0MsS0FBS0EsQ0FBQTtjQUNYLElBQUksSUFBSSxDQUFDbEMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUNBLE9BQU8sQ0FBQ2lCLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxDQUFDL0osT0FBTyxDQUFDLFFBQVEsQ0FBQzs7WUFFeEI7O1VBQ0FTLE9BQUEsQ0FBQW9JLFNBQUEsR0FBQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxR007VUFBVSxNQUFPOUUsY0FBYztZQUNyQyxNQUFNb0MsT0FBT0EsQ0FBQzlHLElBQWU7Y0FDNUIsTUFBTTRMLFVBQVUsR0FBR0MsR0FBRyxDQUFDQyxlQUFlLENBQUM5TCxJQUFJLENBQUNBLElBQUksQ0FBQztjQUNqREEsSUFBSSxDQUFDNEwsVUFBVSxHQUFHQSxVQUFVO2NBRTVCLE1BQU1HLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQ0MsYUFBYSxDQUFDSixVQUFVLENBQUM7Y0FFdkQsTUFBTUssU0FBUyxHQUFHak0sSUFBa0I7Y0FDcENpTSxTQUFTLENBQUNDLElBQUksR0FBRztnQkFBRUMsT0FBTyxFQUFFO2tCQUFFQyxLQUFLLEVBQUVMLFVBQVUsQ0FBQ0ssS0FBSztrQkFBRUMsTUFBTSxFQUFFTixVQUFVLENBQUNNO2dCQUFNO2NBQUUsQ0FBRTtjQUNwRkosU0FBUyxDQUFDSyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3RNLElBQUksQ0FBQ0EsSUFBSSxDQUFDO1lBQ3BEO1lBRVFnTSxhQUFhQSxDQUFDTyxHQUFXO2NBQ2hDLE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNsQyxPQUFPLEVBQUVJLE1BQU0sS0FBSTtnQkFDdEMsTUFBTStCLEdBQUcsR0FBRyxJQUFJQyxLQUFLLEVBQUU7Z0JBQ3ZCRCxHQUFHLENBQUNFLE1BQU0sR0FBRyxNQUFNckMsT0FBTyxDQUFDO2tCQUFFOEIsS0FBSyxFQUFFSyxHQUFHLENBQUNMLEtBQUs7a0JBQUVDLE1BQU0sRUFBRUksR0FBRyxDQUFDSjtnQkFBTSxDQUFFLENBQUM7Z0JBQ3BFSSxHQUFHLENBQUNHLE9BQU8sR0FBRyxNQUFNbEMsTUFBTSxDQUFDLElBQUlsRSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztnQkFDeEVpRyxHQUFHLENBQUNGLEdBQUcsR0FBR0EsR0FBRztjQUNkLENBQUMsQ0FBQztZQUNIO1lBRVFELFFBQVFBLENBQUN0TSxJQUFVO2NBQzFCLE9BQU8sSUFBSXdNLE9BQU8sQ0FBQyxDQUFDbEMsT0FBTyxFQUFFSSxNQUFNLEtBQUk7Z0JBQ3RDLE1BQU1tQyxNQUFNLEdBQUcsSUFBSUMsVUFBVSxFQUFFO2dCQUMvQkQsTUFBTSxDQUFDRixNQUFNLEdBQUcsTUFBTXJDLE9BQU8sQ0FBQ3VDLE1BQU0sQ0FBQ0UsTUFBZ0IsQ0FBQztnQkFDdERGLE1BQU0sQ0FBQ0QsT0FBTyxHQUFHN0YsR0FBRyxJQUFJMkQsTUFBTSxDQUFDM0QsR0FBRyxDQUFDO2dCQUNuQzhGLE1BQU0sQ0FBQ0csYUFBYSxDQUFDaE4sSUFBSSxDQUFDO2NBQzNCLENBQUMsQ0FBQztZQUNIOztVQUNBb0IsT0FBQSxDQUFBc0QsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCSyxNQUFPRCxjQUFjO1lBQzFCLENBQUFyQyxPQUFRO1lBRVJ5QyxZQUFZekMsT0FBQSxHQUFrQyxFQUFFO2NBQy9DLElBQUksQ0FBQyxDQUFBQSxPQUFRLEdBQUdBLE9BQU87WUFDeEI7WUFFQSxNQUFNeUUsUUFBUUEsQ0FBQzdHLElBQWU7Y0FDN0IsSUFBSSxDQUFDQSxJQUFJLENBQUNPLElBQUksQ0FBQzBNLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDcEMsTUFBTSxJQUFJekcsS0FBSyxDQUFDLFNBQVN4RyxJQUFJLENBQUNLLElBQUksd0JBQXdCLENBQUM7O2NBRzVELElBQUksSUFBSSxDQUFDLENBQUErQixPQUFRLENBQUM4SyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTlLLE9BQVEsQ0FBQzhLLFlBQVksQ0FBQ0MsUUFBUSxDQUFDbk4sSUFBSSxDQUFDTyxJQUFJLENBQUMsRUFBRTtnQkFDbEYsTUFBTSxJQUFJaUcsS0FBSyxDQUFDLGNBQWN4RyxJQUFJLENBQUNPLElBQUksZUFBZSxDQUFDOztjQUd4RCxJQUFJLElBQUksQ0FBQyxDQUFBNkIsT0FBUSxDQUFDZ0wsT0FBTyxJQUFJcE4sSUFBSSxDQUFDTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUE4QixPQUFRLENBQUNnTCxPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRTtnQkFDN0UsTUFBTSxJQUFJNUcsS0FBSyxDQUFDLFNBQVN4RyxJQUFJLENBQUNLLElBQUkseUJBQXlCLElBQUksQ0FBQyxDQUFBK0IsT0FBUSxDQUFDZ0wsT0FBTyxLQUFLLENBQUM7O1lBRXhGOztVQUNBaE0sT0FBQSxDQUFBcUQsY0FBQSxHQUFBQSxjQUFBIiwiaWdub3JlTGlzdCI6W119