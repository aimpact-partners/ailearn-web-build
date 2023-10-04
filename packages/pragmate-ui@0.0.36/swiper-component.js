System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "swiper@8.4.7", "@beyond-js/reactive@1.1.5/model", "pragmate-ui@0.0.36/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, SwiperSlider, __beyond_pkg, hmr;
  _export("SwiperSlider", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_swiper) {
      dependency_2 = _swiper;
    }, function (_beyondJsReactive115Model) {
      dependency_3 = _beyondJsReactive115Model;
    }, function (_pragmateUi0036Icons) {
      dependency_4 = _pragmateUi0036Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_5 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/swiper-component"
        },
        "type": "code",
        "name": "swiper-component"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['swiper', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['pragmate-ui/icons', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/swiper-component');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 296935815,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSwiperContext = exports.SwiperContext = void 0;
          var React = require("react");
          const SwiperContext = React.createContext([]);
          exports.SwiperContext = SwiperContext;
          const useSwiperContext = () => React.useContext(SwiperContext);
          exports.useSwiperContext = useSwiperContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 29158988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var Swiper = require("swiper");
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
              const specs = Object.assign({
                slidesPerView: props.slidesPerView ?? 1,
                modules: [Swiper.Navigation, Swiper.Pagination]
              }, props);
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
              if (this.#props.functionNext) this.#props.functionNext();else this.#swiper?.slideNext(500, false);
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

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3468585756,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperSlider = SwiperSlider;
          var React = require("react");
          var _swiperFooter = require("./swiper-footer");
          var _swiperNavigation = require("./swiper-navigation");
          var _slide = require("./slide");
          var _useSwiper = require("./use-swiper");
          var _context = require("./context");
          /*bundle*/
          function SwiperSlider(props) {
            const {
              refs,
              state,
              prev,
              container
            } = (0, _useSwiper.useSwiperSlider)(props);
            const contextValue = {};
            const footer = props.footer === true;
            const {
              controller
            } = state;
            const cls = props.className ? `${props.className} pragmate-element-swiper-slider` : "pragmate-element-swiper-slider";
            return React.createElement(_context.SwiperContext.Provider, {
              value: contextValue
            }, React.createElement("div", {
              className: cls
            }, React.createElement("div", {
              ref: container,
              className: "swiper-container"
            }, React.createElement("div", {
              className: "swiper-wrapper"
            }, React.createElement(_slide.SlideItems, {
              props: props
            })), props.pagination && React.createElement("div", {
              ref: refs?.pagination,
              className: "swiper-pagination"
            }), React.createElement(_swiperFooter.SwiperFooter, {
              footer: footer,
              controller: controller,
              refs: refs
            }), React.createElement(_swiperNavigation.SwiperNavigation, {
              navigation: props.navigation,
              controller: controller,
              prev: prev
            }))));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./interface
      ***************************/

      ims.set('./interface', {
        hash: 3704574833,
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
        hash: 63497929,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SlideItems = SlideItems;
          var React = require("react");
          var _slide = require("./slide");
          function SlideItems({
            props
          }) {
            const slides = props.children.map((slide, index) => React.createElement(_slide.Slide, {
              key: index
            }, slide));
            return React.createElement(React.Fragment, null, slides);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./slide/slide
      *****************************/

      ims.set('./slide/slide', {
        hash: 2634860187,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Slide = Slide;
          var React = require("react");
          function Slide(props) {
            return React.createElement("div", {
              className: "swiper-slide"
            }, props.children);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./swiper-footer
      *******************************/

      ims.set('./swiper-footer', {
        hash: 3881607008,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperFooter = SwiperFooter;
          var React = require("react");
          function SwiperFooter(props) {
            const {
              footer,
              controller,
              refs
            } = props;
            if (!footer) return null;
            return React.createElement(React.Fragment, null, !controller?.swiper.isEnd && React.createElement("button", {
              className: "swiper-button-prev",
              onClick: props.functionNext
            }, "SKIP"), React.createElement("div", {
              ref: refs.pagination,
              className: "swiper-pagination"
            }), React.createElement("button", {
              className: "swiper-button-next ",
              onClick: controller?.next
            }, "Next"));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./swiper-navigation
      ***********************************/

      ims.set('./swiper-navigation', {
        hash: 888793971,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperNavigation = SwiperNavigation;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          function SwiperNavigation(props) {
            const {
              navigation,
              controller,
              prev
            } = props;
            if (!navigation) return null;
            return React.createElement(React.Fragment, null, React.createElement("div", {
              ref: prev,
              className: "swiper-button-prev"
            }, React.createElement(_icons.Icon, {
              icon: "left"
            })), React.createElement("div", {
              onClick: controller?.nextSlide,
              className: "swiper-button-next"
            }, React.createElement(_icons.Icon, {
              icon: "right"
            })));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./use-swiper
      ****************************/

      ims.set('./use-swiper', {
        hash: 1047845688,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSwiperSlider = void 0;
          var React = require("react");
          var _controller = require("./controller");
          const useSwiperSlider = props => {
            /* const { props } = useSwiperContext(); */
            const refs = {
              next: React.useRef(),
              container: React.useRef(),
              pagination: React.useRef(),
              prev: React.useRef()
            };
            const {
              slideTo
            } = props;
            const {
              container,
              prev
            } = refs;
            const [state, setState] = React.useState({});
            React.useEffect(() => {
              const controller = new _controller.Controller();
              const onChange = () => setState({
                ...state,
                ready: true,
                swiper: controller.swiper,
                controller,
                lastIndex: controller.lastIndex
              });
              controller.bind("change", onChange);
              if (!controller.destroyed) controller.setSwiper(container.current, props, refs);
              onChange();
              return () => controller.unbind("change", onChange);
            }, []);
            React.useEffect(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJTd2lwZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VTd2lwZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIlN3aXBlciIsIl9tb2RlbCIsIlN3aXBlckNhc3RlZCIsIkNvbnRyb2xsZXIiLCJSZWFjdGl2ZU1vZGVsIiwic3dpcGVyIiwib25FbmQiLCJwcm9wcyIsInNldFN3aXBlciIsImVsZW1lbnQiLCJyZWYiLCJzcGVjcyIsIk9iamVjdCIsImFzc2lnbiIsInNsaWRlc1BlclZpZXciLCJtb2R1bGVzIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJjb25zb2xlIiwid2FybiIsInBhZ2luYXRpb24iLCJmb290ZXIiLCJlbCIsImN1cnJlbnQiLCJjbGlja2FibGUiLCJ0eXBlIiwidHlwZVBhZ2luYXRpb24iLCJkeW5hbWljQnVsbGV0cyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJuZXh0IiwicHJldkVsIiwicHJldiIsImFjdGl2ZVNsaWRlIiwic2xpZGVUbyIsInBhcnNlSW50IiwibmV4dFNsaWRlIiwic2xpZGVOZXh0IiwicHJldlNsaWRlIiwic2xpZGVQcmV2IiwiaW5kZXgiLCJvbiIsImlzRW5kIiwidHJpZ2dlckV2ZW50IiwiZnVuY3Rpb25OZXh0IiwiX3N3aXBlckZvb3RlciIsIl9zd2lwZXJOYXZpZ2F0aW9uIiwiX3NsaWRlIiwiX3VzZVN3aXBlciIsIl9jb250ZXh0IiwiU3dpcGVyU2xpZGVyIiwicmVmcyIsInN0YXRlIiwiY29udGFpbmVyIiwidXNlU3dpcGVyU2xpZGVyIiwiY29udGV4dFZhbHVlIiwiY29udHJvbGxlciIsImNscyIsImNsYXNzTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsInZhbHVlIiwiU2xpZGVJdGVtcyIsIlN3aXBlckZvb3RlciIsIlN3aXBlck5hdmlnYXRpb24iLCJkZWZpbmVQcm9wZXJ0eSIsInNsaWRlcyIsImNoaWxkcmVuIiwibWFwIiwic2xpZGUiLCJTbGlkZSIsImtleSIsIkZyYWdtZW50Iiwib25DbGljayIsIl9pY29ucyIsIkljb24iLCJpY29uIiwiX2NvbnRyb2xsZXIiLCJ1c2VSZWYiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwib25DaGFuZ2UiLCJyZWFkeSIsImxhc3RJbmRleCIsImJpbmQiLCJkZXN0cm95ZWQiLCJ1bmJpbmQiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50c3giLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NsaWRlL2luZGV4LnRzeCIsIi90cy9zbGlkZS9zbGlkZS50c3giLCIvdHMvc3dpcGVyLWZvb3Rlci50c3giLCIvdHMvc3dpcGVyLW5hdmlnYXRpb24udHN4IiwiL3RzL3VzZS1zd2lwZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFTyxNQUFNQyxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csYUFBYSxDQUFDLEVBQVMsQ0FBQztVQUFDQyxPQUFBLENBQUFGLGFBQUEsR0FBQUEsYUFBQTtVQUNyRCxNQUFNRyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNTCxLQUFLLENBQUNNLFVBQVUsQ0FBQ0osYUFBYSxDQUFDO1VBQUNFLE9BQUEsQ0FBQUMsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSHRFLElBQUFFLE1BQUEsR0FBQU4sT0FBQTtVQUVBLElBQUFPLE1BQUEsR0FBQVAsT0FBQTtVQUVBLE1BQU1RLFlBQVksR0FBeUJGLE1BQU0sQ0FBQ0EsTUFBMEM7VUFDdEYsTUFBT0csVUFBVyxTQUFRRixNQUFBLENBQUFHLGFBQWtCO1lBQ2pELENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFN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