System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "swiper@8.4.7", "@beyond-js/reactive@1.1.6/model", "pragmate-ui@0.0.1/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
    }, function (_pragmateUi001Icons) {
      dependency_4 = _pragmateUi001Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_5 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.1/swiper-component"
        },
        "type": "code",
        "name": "swiper-component"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['swiper', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['pragmate-ui/icons', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.1/swiper-component');
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

      /**********************************
      INTERNAL MODULE: ./state/controller
      **********************************/

      ims.set('./state/controller', {
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
        hash: 2752768861,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSwiperSlider = void 0;
          var React = require("react");
          var _controller = require("./state/controller");
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
              controller.bind('change', onChange);
              if (!controller.destroyed) controller.setSwiper(container.current, props, refs);
              onChange();
              return () => controller.unbind('change', onChange);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDUixHQUFHaEUsS0FBSztnQkFDUm9FLEtBQUssRUFBRSxJQUFJO2dCQUNYekMsTUFBTSxFQUFFdEIsVUFBVSxDQUFDc0IsTUFBTTtnQkFDekJ0QixVQUFVO2dCQUNWZ0UsU0FBUyxFQUFFaEUsVUFBVSxDQUFDZ0U7ZUFDdEIsQ0FBQztjQUNIaEUsVUFBVSxDQUFDaUUsSUFBSSxDQUFDLFFBQVEsRUFBRUgsUUFBUSxDQUFDO2NBQ25DLElBQUksQ0FBQzlELFVBQVUsQ0FBQ2tFLFNBQVMsRUFBRWxFLFVBQVUsQ0FBQ3VCLFNBQVMsQ0FBQzFCLFNBQVMsQ0FBQ3NDLE9BQU8sRUFBRTFDLEtBQUssRUFBRUMsSUFBSSxDQUFDO2NBQy9Fb0UsUUFBUSxFQUFFO2NBQ1YsT0FBTyxNQUFNOUQsVUFBVSxDQUFDbUUsTUFBTSxDQUFDLFFBQVEsRUFBRUwsUUFBUSxDQUFDO1lBQ25ELENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTjNFLEtBQUssQ0FBQzBFLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQ2xFLEtBQUssQ0FBQzJCLE1BQU0sSUFBSSxDQUFDc0IsT0FBTyxFQUFFO2NBQy9CakQsS0FBSyxDQUFDMkIsTUFBTSxDQUFDc0IsT0FBTyxDQUFDQSxPQUFPLENBQUM7WUFDOUIsQ0FBQyxFQUFFLENBQUNBLE9BQU8sQ0FBQyxDQUFDO1lBRWIsT0FBTztjQUFFbEQsSUFBSTtjQUFFQyxLQUFLO2NBQUVDLElBQUk7Y0FBRUM7WUFBUyxDQUFFO1VBQ3hDLENBQUM7VUFBQ1IiLCJuYW1lcyI6WyJTd2lwZXJDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZVN3aXBlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU3dpcGVyU2xpZGVyIiwicHJvcHMiLCJyZWZzIiwic3RhdGUiLCJwcmV2IiwiY29udGFpbmVyIiwiY29udGV4dFZhbHVlIiwiZm9vdGVyIiwiY29udHJvbGxlciIsImNscyIsImNsYXNzTmFtZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJyZWYiLCJTbGlkZUl0ZW1zIiwicGFnaW5hdGlvbiIsIlN3aXBlckZvb3RlciIsIlN3aXBlck5hdmlnYXRpb24iLCJuYXZpZ2F0aW9uIiwic2xpZGVzIiwiY2hpbGRyZW4iLCJtYXAiLCJzbGlkZSIsImluZGV4IiwiU2xpZGUiLCJrZXkiLCJTd2lwZXJDYXN0ZWQiLCJTd2lwZXIiLCJDb250cm9sbGVyIiwiUmVhY3RpdmVNb2RlbCIsInN3aXBlciIsInNldFN3aXBlciIsImVsZW1lbnQiLCJzcGVjcyIsIk9iamVjdCIsImFzc2lnbiIsInNsaWRlc1BlclZpZXciLCJtb2R1bGVzIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJjb25zb2xlIiwid2FybiIsImVsIiwiY3VycmVudCIsImNsaWNrYWJsZSIsInR5cGUiLCJ0eXBlUGFnaW5hdGlvbiIsImR5bmFtaWNCdWxsZXRzIiwibmV4dEVsIiwibmV4dCIsInByZXZFbCIsImFjdGl2ZVNsaWRlIiwic2xpZGVUbyIsInBhcnNlSW50IiwibmV4dFNsaWRlIiwic2xpZGVOZXh0IiwicHJldlNsaWRlIiwic2xpZGVQcmV2Iiwib24iLCJpc0VuZCIsInRyaWdnZXJFdmVudCIsImZ1bmN0aW9uTmV4dCIsIm9uQ2xpY2siLCJJY29uIiwiaWNvbiIsInVzZVN3aXBlclNsaWRlciIsInVzZVJlZiIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZSIsInJlYWR5IiwibGFzdEluZGV4IiwiYmluZCIsImRlc3Ryb3llZCIsInVuYmluZCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udGV4dC50c3giLCJ0cy9pbmRleC50c3giLCJ0cy9zbGlkZS9pbmRleC50c3giLCJ0cy9zbGlkZS9zbGlkZS50c3giLCJ0cy9zdGF0ZS9jb250cm9sbGVyLnRzIiwidHMvc3RhdGUvaW50ZXJmYWNlLnRzIiwidHMvc3dpcGVyLWZvb3Rlci50c3giLCJ0cy9zd2lwZXItbmF2aWdhdGlvbi50c3giLCJ0cy91c2Utc3dpcGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=