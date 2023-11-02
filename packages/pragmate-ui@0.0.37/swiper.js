System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.37/icons", "swiper@8.4.7", "swiper@8.4.7/modules", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, SwiperSlider, __beyond_pkg, hmr;
  _export("SwiperSlider", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0037Icons) {
      dependency_2 = _pragmateUi0037Icons;
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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/swiper"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['swiper', dependency_3], ['swiper/modules', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/swiper');
      ims = new Map();
      /***********************************
      INTERNAL MODULE: ./components/footer
      ***********************************/
      ims.set('./components/footer', {
        hash: 3161495785,
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
              className: 'swiper-button-prev',
              onClick: props.functionNext
            }, "SKIP"), React.createElement("div", {
              ref: refs.pagination,
              className: 'swiper-pagination'
            }), React.createElement("button", {
              className: 'swiper-button-next ',
              onClick: controller?.next
            }, "Next"));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./components/navigation
      ***************************************/

      ims.set('./components/navigation', {
        hash: 516902600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperNavigation = SwiperNavigation;
          var React = require("react");
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
            return React.createElement(React.Fragment, null, React.createElement(_icons.IconButton, {
              ref: prev,
              icon: 'left',
              variant: 'primary',
              className: 'swiper__navigation-btn swiper-button-prev',
              onClick: controller?.prevSlide
            }), React.createElement(_icons.IconButton, {
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
        hash: 1268648701,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Pagination = Pagination;
          var React = require("react");
          var _context = require("../context");
          function Pagination() {
            const {
              pagination,
              refs
            } = (0, _context.useSwiperContext)();
            if (!pagination) return null;
            return React.createElement("div", {
              ref: refs.pagination,
              className: 'swiper-pagination'
            });
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 1393066576,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSwiperContext = exports.SwiperContext = void 0;
          var _react = require("react");
          const SwiperContext = _react.default.createContext({});
          exports.SwiperContext = SwiperContext;
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

      /*****************************************
      INTERNAL MODULE: ./interfaces/swiper-props
      *****************************************/

      ims.set('./interfaces/swiper-props', {
        hash: 1706774564,
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
        hash: 1407846081,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SlideItems = SlideItems;
          var React = require("react");
          var _slide = require("./slide");
          function SlideItems({
            items
          }) {
            const slides = items.map((slide, index) => React.createElement(_slide.Slide, {
              key: index
            }, slide));
            return React.createElement("div", {
              className: 'swiper-wrapper'
            }, slides);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./slide/slide
      *****************************/

      ims.set('./slide/slide', {
        hash: 1079881848,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Slide = Slide;
          var React = require("react");
          function Slide({
            children
          }) {
            return React.createElement("div", {
              className: 'swiper-slide'
            }, children);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./state/controller
      **********************************/

      ims.set('./state/controller', {
        hash: 2824688147,
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
                slidesPerView: props.slidesPerView ?? 1,
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
                this.#swiper?.slideNext(500, false);
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
        hash: 4038174438,
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
              const onChange = () => console.log(99, {
                ...state,
                ready: true,
                swiper: controller.swiper,
                controller,
                lastIndex: controller.lastIndex
              });
              setState({
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
            React.useEffect(() => {
              if (!state.swiper || !slideTo) return;
              state.swiper.slideTo(slideTo);
            }, [slideTo]);
            console.log(0.2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVTtnQkFDVmtGLFNBQVMsRUFBRWxGLFVBQVUsQ0FBQ2tGO2VBQ3RCLENBQUM7Y0FDRmxGLFVBQVUsQ0FBQ3NFLEVBQUUsQ0FBQyxRQUFRLEVBQUVTLFFBQVEsQ0FBQztjQUNqQyxJQUFJLENBQUMvRSxVQUFVLENBQUNtRixTQUFTLEVBQUVuRixVQUFVLENBQUM4QyxTQUFTLENBQUNkLFNBQVMsQ0FBQzBCLE9BQU8sRUFBRTVELEtBQUssRUFBRUcsSUFBSSxDQUFDO2NBQy9FOEUsUUFBUSxFQUFFO2NBQ1YsT0FBTyxNQUFNL0UsVUFBVSxDQUFDb0YsR0FBRyxDQUFDLFFBQVEsRUFBRUwsUUFBUSxDQUFDO1lBQ2hELENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTjdFLEtBQUssQ0FBQzRFLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQ25ELEtBQUssQ0FBQ3hCLE1BQU0sSUFBSSxDQUFDK0QsT0FBTyxFQUFFO2NBQy9CdkMsS0FBSyxDQUFDeEIsTUFBTSxDQUFDK0QsT0FBTyxDQUFDQSxPQUFPLENBQUM7WUFDOUIsQ0FBQyxFQUFFLENBQUNBLE9BQU8sQ0FBQyxDQUFDO1lBQ2JYLE9BQU8sQ0FBQ3lCLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDaEIsT0FBTztjQUFFL0UsSUFBSTtjQUFFMEIsS0FBSztjQUFFZCxJQUFJO2NBQUVtQjtZQUFTLENBQUU7VUFDeEMsQ0FBQztVQUFDViIsIm5hbWVzIjpbIlN3aXBlckZvb3RlciIsInByb3BzIiwiZm9vdGVyIiwiY29udHJvbGxlciIsInJlZnMiLCJSZWFjdCIsInN3aXBlciIsImlzRW5kIiwiY2xhc3NOYW1lIiwib25DbGljayIsImZ1bmN0aW9uTmV4dCIsInJlZiIsInBhZ2luYXRpb24iLCJuZXh0IiwiU3dpcGVyTmF2aWdhdGlvbiIsIm5hdmlnYXRpb24iLCJwcmV2IiwiSWNvbkJ1dHRvbiIsImljb24iLCJ2YXJpYW50IiwicHJldlNsaWRlIiwibmV4dFNsaWRlIiwiUGFnaW5hdGlvbiIsIlN3aXBlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZVN3aXBlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU3dpcGVyU2xpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsImNvbnRleHRWYWx1ZSIsImNscyIsIlByb3ZpZGVyIiwidmFsdWUiLCJjb250YWluZXIiLCJTbGlkZUl0ZW1zIiwiaXRlbXMiLCJPYmplY3QiLCJzbGlkZXMiLCJtYXAiLCJzbGlkZSIsImluZGV4IiwiU2xpZGUiLCJrZXkiLCJTd2lwZXJDYXN0ZWQiLCJTd2lwZXIiLCJDb250cm9sbGVyIiwiUmVhY3RpdmVNb2RlbCIsInNldFN3aXBlciIsImVsZW1lbnQiLCJzcGVjcyIsInNsaWRlc1BlclZpZXciLCJtb2R1bGVzIiwiTmF2aWdhdGlvbiIsImtleXMiLCJmb3JFYWNoIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwid2FybiIsImVsIiwiY3VycmVudCIsImNsaWNrYWJsZSIsInR5cGUiLCJ0eXBlUGFnaW5hdGlvbiIsImR5bmFtaWNCdWxsZXRzIiwibmV4dEVsIiwicHJldkVsIiwiYWN0aXZlU2xpZGUiLCJzbGlkZVRvIiwicGFyc2VJbnQiLCJzbGlkZU5leHQiLCJzbGlkZVByZXYiLCJvbiIsInRyaWdnZXJFdmVudCIsIm9uTmV4dCIsIm9uUHJldiIsInVzZVN3aXBlclNsaWRlciIsInVzZVJlZiIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZSIsImxvZyIsInJlYWR5IiwibGFzdEluZGV4IiwiZGVzdHJveWVkIiwib2ZmIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb21wb25lbnRzL2Zvb3Rlci50c3giLCJ0cy9jb21wb25lbnRzL25hdmlnYXRpb24udHN4IiwidHMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzeCIsInRzL2NvbnRleHQudHN4IiwidHMvaW5kZXgudHN4IiwidHMvaW50ZXJmYWNlcy9zd2lwZXItcHJvcHMudHMiLCJ0cy9zbGlkZS9pbmRleC50c3giLCJ0cy9zbGlkZS9zbGlkZS50c3giLCJ0cy9zdGF0ZS9jb250cm9sbGVyLnRzIiwidHMvc3RhdGUvaW50ZXJmYWNlLnRzIiwidHMvdXNlLXN3aXBlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==