System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/icons", "swiper@8.4.7", "swiper@8.4.7/modules", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, SwiperSlider, __beyond_pkg, hmr;
  _export("SwiperSlider", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_2 = _pragmateUi100Beta1Icons;
    }, function (_swiper) {
      dependency_3 = _swiper;
    }, function (_swiper847Modules) {
      dependency_4 = _swiper847Modules;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Styles) {
      dependency_6 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/ailearn-app", "0.1.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.1/swiper"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['swiper', dependency_3], ['swiper/modules', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.1/swiper');
      ims = new Map();
      /***********************************
      INTERNAL MODULE: ./components/footer
      ***********************************/
      ims.set('./components/footer', {
        hash: 4152585320,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperFooter = SwiperFooter;
          var _react = require("react");
          function SwiperFooter(props) {
            const {
              footer,
              controller,
              refs
            } = props;
            if (!footer) return null;
            return _react.default.createElement(_react.default.Fragment, null, !controller?.swiper.isEnd && _react.default.createElement("button", {
              className: "swiper-button-prev",
              onClick: props.functionNext
            }, "SKIP"), _react.default.createElement("div", {
              ref: refs.pagination,
              className: "swiper-pagination"
            }), _react.default.createElement("button", {
              className: "swiper-button-next ",
              onClick: controller?.next
            }, "Next"));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./components/navigation
      ***************************************/

      ims.set('./components/navigation', {
        hash: 1445369557,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperNavigation = SwiperNavigation;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function SwiperNavigation() {
            const {
              controller,
              navigation,
              refs: {
                prev,
                next
              }
            } = (0, _context.useSwiperContext)();
            if (!navigation) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.IconButton, {
              ref: prev,
              icon: 'left',
              variant: 'primary',
              className: 'swiper__navigation-btn swiper-button-prev',
              onClick: controller?.prevSlide
            }), _react.default.createElement(_icons.IconButton, {
              icon: 'right',
              ref: next,
              variant: 'primary',
              onClick: controller?.nextSlide,
              className: 'swiper__navigation-btn  swiper-button-next'
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./components/pagination
      ***************************************/

      ims.set('./components/pagination', {
        hash: 1487697459,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Pagination = Pagination;
          var _react = require("react");
          var _context = require("../context");
          function Pagination() {
            const {
              pagination,
              refs
            } = (0, _context.useSwiperContext)();
            if (!pagination) return null;
            return _react.default.createElement("div", {
              ref: refs.pagination,
              className: "swiper-pagination"
            });
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 522084440,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSwiperContext = exports.SwiperContext = void 0;
          var _react = require("react");
          const SwiperContext = exports.SwiperContext = _react.default.createContext({});
          const useSwiperContext = () => _react.default.useContext(SwiperContext);
          exports.useSwiperContext = useSwiperContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4094575603,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperSlider = SwiperSlider;
          var _react = require("react");
          var _footer = require("./components/footer");
          var _navigation = require("./components/navigation");
          var _slide = require("./slide");
          var _useSwiper = require("./use-swiper");
          var _context = require("./context");
          var _pagination = require("./components/pagination");
          /*bundle*/
          function SwiperSlider(props) {
            const {
              pagination,
              footer,
              navigation,
              children
            } = props;
            const {
              refs,
              state
            } = (0, _useSwiper.useSwiperSlider)(props);
            const {
              controller
            } = state;
            const contextValue = {
              footer,
              pagination,
              controller,
              navigation,
              refs
            };
            const cls = `swiper-container swiper ${props.className ? `${props.className} pui-swiper-slider` : 'pui-swiper-slider'};`;
            return _react.default.createElement(_context.SwiperContext.Provider, {
              value: contextValue
            }, _react.default.createElement("div", {
              ref: refs.container,
              className: cls
            }, _react.default.createElement(_slide.SlideItems, {
              items: children
            }), _react.default.createElement(_pagination.Pagination, null), _react.default.createElement(_footer.SwiperFooter, null), _react.default.createElement(_navigation.SwiperNavigation, null)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./interfaces/options
      ************************************/

      ims.set('./interfaces/options', {
        hash: 1670442219,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          class Swiper {
            constructor(container, options) {
              // Swiper initialization code
            }
            // Swiper methods
            slideNext(speed, runCallbacks) {}
            slidePrev(speed, runCallbacks) {}
            slideTo(index, speed, runCallbacks) {}
            update() {}
            destroy(deleteInstance, cleanStyles) {}
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./interfaces/swiper-props
      *****************************************/

      ims.set('./interfaces/swiper-props', {
        hash: 3138111793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./slide/index
      *****************************/

      ims.set('./slide/index', {
        hash: 721733334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SlideItems = SlideItems;
          var _react = require("react");
          var _slide = require("./slide");
          function SlideItems({
            items
          }) {
            const slides = items.map((slide, index) => _react.default.createElement(_slide.Slide, {
              key: index
            }, slide));
            return _react.default.createElement("div", {
              className: "swiper-wrapper"
            }, slides);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./slide/slide
      *****************************/

      ims.set('./slide/slide', {
        hash: 2855517027,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Slide = Slide;
          var _react = require("react");
          function Slide({
            children
          }) {
            return _react.default.createElement("div", {
              className: "swiper-slide"
            }, children);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./state/controller
      **********************************/

      ims.set('./state/controller', {
        hash: 1476088717,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var Swiper = require("swiper");
          var _modules = require("swiper/modules");
          var _model = require("@beyond-js/reactive/model");
          const SwiperCasted = Swiper.Swiper;
          class Controller extends _model.ReactiveModel {
            #swiper;
            get swiper() {
              return this.#swiper;
            }
            #onEnd;
            #props;
            setSwiper = (element, props, ref) => {
              this.#props = props;
              let specs = {
                slidesPerView: props.slidesPerView ?? 3,
                spaceBetween: props.spaceBetween ?? 10,
                modules: [_modules.Navigation, _modules.Pagination],
                ...props
              };
              Object.keys(specs).forEach(key => {
                if (['children'].includes(key)) delete specs[key];
              });
              if (!Swiper) {
                console.warn('Swiper keeps without been loaded');
                return;
              }
              if (props.pagination || props.footer) {
                specs.pagination = {
                  el: ref.pagination.current,
                  clickable: true,
                  type: props.typePagination ?? 'bullets',
                  dynamicBullets: props.dynamicBullets ?? false
                };
              }
              if (props.navigation) {
                specs.navigation = {
                  nextEl: ref.next.current,
                  prevEl: ref.prev.current
                };
              }
              this.#swiper = new SwiperCasted(element, specs);
              if (props.activeSlide) this.#swiper.slideTo(parseInt(props.activeSlide));
              const nextSlide = () => {
                if (this.#swiper) this.#swiper.slideNext();
              };
              const prevSlide = () => {
                if (this.#swiper) this.#swiper.slidePrev();
              };
              const slideTo = index => {
                if (this.#swiper) this.#swiper.slideTo(parseInt(index));
              };
              if (props.nextSlide && typeof props.nextSlide === 'function') props.nextSlide(nextSlide);
              if (props.prevSlide && typeof props.prevSlide === 'function') props.prevSlide(prevSlide);
              if (props.slideTo && typeof props.slideTo === 'function') props.slideTo(slideTo);
              this.#swiper.on('slideChange', () => {
                if (this.#swiper?.isEnd) {
                  this.#onEnd = true;
                  this.triggerEvent();
                } else {
                  this.#onEnd = false;
                  this.triggerEvent();
                }
              });
            };
            nextSlide = () => {
              if (!this.#swiper?.isEnd) {
                this.#swiper?.slideNext(500, false);
                return;
              }
              if (!this.#onEnd) return;
              if (this.#props.onNext) this.#props.onNext();else this.#swiper?.slideNext(500, false);
            };
            prevSlide = () => {
              if (!this.#swiper?.isEnd) {
                this.#swiper?.slidePrev(500, false);
                return;
              }
              if (!this.#onEnd) return;
              if (this.#props.onPrev) this.#props.onPrev();else this.#swiper?.slidePrev(500, false);
            };
            next = () => {
              if (!this.#swiper?.isEnd) {
                this.#swiper?.slideNext(500, false);
                return;
              }
              if (!this.#onEnd) return;
              this.#props.functionNext();
            };
          }
          exports.Controller = Controller;
        }
      });

      /*********************************
      INTERNAL MODULE: ./state/interface
      *********************************/

      ims.set('./state/interface', {
        hash: 3704574833,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./use-swiper
      ****************************/

      ims.set('./use-swiper', {
        hash: 2195260495,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSwiperSlider = void 0;
          var _react = require("react");
          var _controller = require("./state/controller");
          const useSwiperSlider = props => {
            /* const { props } = useSwiperContext(); */
            const refs = {
              next: _react.default.useRef(),
              container: _react.default.useRef(),
              pagination: _react.default.useRef(),
              prev: _react.default.useRef()
            };
            const {
              slideTo
            } = props;
            const {
              container,
              prev
            } = refs;
            const [state, setState] = _react.default.useState({});
            _react.default.useEffect(() => {
              const controller = new _controller.Controller();
              const onChange = () => setState({
                ...state,
                ready: true,
                swiper: controller.swiper,
                controller,
                lastIndex: controller.lastIndex
              });
              controller.on('change', onChange);
              if (!controller.destroyed) controller.setSwiper(container.current, props, refs);
              onChange();
              return () => controller.off('change', onChange);
            }, []);
            _react.default.useEffect(() => {
              if (!state.swiper || !slideTo) return;
              state.swiper.slideTo(slideTo);
            }, [slideTo]);
            return {
              refs,
              state,
              prev,
              container
            };
          };
          exports.useSwiperSlider = useSwiperSlider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "SwiperSlider",
        "name": "SwiperSlider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'SwiperSlider') && _export("SwiperSlider", SwiperSlider = require ? require('./index').SwiperSlider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiU3dpcGVyRm9vdGVyIiwicHJvcHMiLCJmb290ZXIiLCJjb250cm9sbGVyIiwicmVmcyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJzd2lwZXIiLCJpc0VuZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJmdW5jdGlvbk5leHQiLCJyZWYiLCJwYWdpbmF0aW9uIiwibmV4dCIsIl9pY29ucyIsIl9jb250ZXh0IiwiU3dpcGVyTmF2aWdhdGlvbiIsIm5hdmlnYXRpb24iLCJwcmV2IiwidXNlU3dpcGVyQ29udGV4dCIsIkljb25CdXR0b24iLCJpY29uIiwidmFyaWFudCIsInByZXZTbGlkZSIsIm5leHRTbGlkZSIsIlBhZ2luYXRpb24iLCJTd2lwZXJDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2Zvb3RlciIsIl9uYXZpZ2F0aW9uIiwiX3NsaWRlIiwiX3VzZVN3aXBlciIsIl9wYWdpbmF0aW9uIiwiU3dpcGVyU2xpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInVzZVN3aXBlclNsaWRlciIsImNvbnRleHRWYWx1ZSIsImNscyIsIlByb3ZpZGVyIiwidmFsdWUiLCJjb250YWluZXIiLCJTbGlkZUl0ZW1zIiwiaXRlbXMiLCJTd2lwZXIiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJzbGlkZU5leHQiLCJzcGVlZCIsInJ1bkNhbGxiYWNrcyIsInNsaWRlUHJldiIsInNsaWRlVG8iLCJpbmRleCIsInVwZGF0ZSIsImRlc3Ryb3kiLCJkZWxldGVJbnN0YW5jZSIsImNsZWFuU3R5bGVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJzbGlkZXMiLCJtYXAiLCJzbGlkZSIsIlNsaWRlIiwia2V5IiwiX21vZHVsZXMiLCJfbW9kZWwiLCJTd2lwZXJDYXN0ZWQiLCJDb250cm9sbGVyIiwiUmVhY3RpdmVNb2RlbCIsIm9uRW5kIiwic2V0U3dpcGVyIiwiZWxlbWVudCIsInNwZWNzIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm1vZHVsZXMiLCJOYXZpZ2F0aW9uIiwia2V5cyIsImZvckVhY2giLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJ3YXJuIiwiZWwiLCJjdXJyZW50IiwiY2xpY2thYmxlIiwidHlwZSIsInR5cGVQYWdpbmF0aW9uIiwiZHluYW1pY0J1bGxldHMiLCJuZXh0RWwiLCJwcmV2RWwiLCJhY3RpdmVTbGlkZSIsInBhcnNlSW50Iiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJvbk5leHQiLCJvblByZXYiLCJfY29udHJvbGxlciIsInVzZVJlZiIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZSIsInJlYWR5IiwibGFzdEluZGV4IiwiZGVzdHJveWVkIiwib2ZmIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi90cy9jb21wb25lbnRzL25hdmlnYXRpb24udHN4IiwiL3RzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL2ludGVyZmFjZXMvb3B0aW9ucy50cyIsIi9zd2lwZXItcHJvcHMudHMiLCIvdHMvc2xpZGUvaW5kZXgudHN4IiwiL3RzL3NsaWRlL3NsaWRlLnRzeCIsIi90cy9zdGF0ZS9jb250cm9sbGVyLnRzIiwiL2ludGVyZmFjZS50cyIsIi90cy91c2Utc3dpcGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNNLFNBQVVDLFlBQVlBLENBQUNDLEtBQUs7WUFDakMsTUFBTTtjQUFDQyxNQUFNO2NBQUVDLFVBQVU7Y0FBRUM7WUFBSSxDQUFD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