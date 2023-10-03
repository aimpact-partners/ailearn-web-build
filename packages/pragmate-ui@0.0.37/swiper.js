System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.37/icons", "swiper@8.4.7", "swiper@8.4.7/modules", "@beyond-js/reactive@1.1.6/model", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_beyondJsKernel019Styles) {
      dependency_6 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJTd2lwZXJGb290ZXIiLCJwcm9wcyIsImZvb3RlciIsImNvbnRyb2xsZXIiLCJyZWZzIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwic3dpcGVyIiwiaXNFbmQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZnVuY3Rpb25OZXh0IiwicmVmIiwicGFnaW5hdGlvbiIsIm5leHQiLCJfaWNvbnMiLCJfY29udGV4dCIsIlN3aXBlck5hdmlnYXRpb24iLCJuYXZpZ2F0aW9uIiwicHJldiIsInVzZVN3aXBlckNvbnRleHQiLCJJY29uQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJwcmV2U2xpZGUiLCJuZXh0U2xpZGUiLCJQYWdpbmF0aW9uIiwiX3JlYWN0IiwiU3dpcGVyQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZUNvbnRleHQiLCJfZm9vdGVyIiwiX25hdmlnYXRpb24iLCJfc2xpZGUiLCJfdXNlU3dpcGVyIiwiX3BhZ2luYXRpb24iLCJTd2lwZXJTbGlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwidXNlU3dpcGVyU2xpZGVyIiwiY29udGV4dFZhbHVlIiwiY2xzIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNvbnRhaW5lciIsIlNsaWRlSXRlbXMiLCJpdGVtcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwic2xpZGVzIiwibWFwIiwic2xpZGUiLCJpbmRleCIsIlNsaWRlIiwia2V5IiwiU3dpcGVyIiwiX21vZHVsZXMiLCJfbW9kZWwiLCJTd2lwZXJDYXN0ZWQiLCJDb250cm9sbGVyIiwiUmVhY3RpdmVNb2RlbCIsIm9uRW5kIiwic2V0U3dpcGVyIiwiZWxlbWVudCIsInNwZWNzIiwic2xpZGVzUGVyVmlldyIsIm1vZHVsZXMiLCJOYXZpZ2F0aW9uIiwia2V5cyIsImZvckVhY2giLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJ3YXJuIiwiZWwiLCJjdXJyZW50IiwiY2xpY2thYmxlIiwidHlwZSIsInR5cGVQYWdpbmF0aW9uIiwiZHluYW1pY0J1bGxldHMiLCJuZXh0RWwiLCJwcmV2RWwiLCJhY3RpdmVTbGlkZSIsInNsaWRlVG8iLCJwYXJzZUludCIsInNsaWRlTmV4dCIsInNsaWRlUHJldiIsIm9uIiwidHJpZ2dlckV2ZW50Iiwib25OZXh0Iiwib25QcmV2IiwiX2NvbnRyb2xsZXIiLCJ1c2VSZWYiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwib25DaGFuZ2UiLCJsb2ciLCJyZWFkeSIsImxhc3RJbmRleCIsImRlc3Ryb3llZCIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2Zvb3Rlci50c3giLCIvdHMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLnRzeCIsIi90cy9jb21wb25lbnRzL3BhZ2luYXRpb24udHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9zd2lwZXItcHJvcHMudHMiLCIvdHMvc2xpZGUvaW5kZXgudHN4IiwiL3RzL3NsaWRlL3NsaWRlLnRzeCIsIi90cy9zdGF0ZS9jb250cm9sbGVyLnRzIiwiL2ludGVyZmFjZS50cyIsIi90cy91c2Utc3dpcGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDTSxTQUFVQyxZQUFZQSxDQUFDQyxLQUFLO1lBQ2pDLE1BQU07Y0FBRUMsTUFBTTtjQUFFQyxVQUFVO2NBQUVDO1lBQUksQ0FBRSxHQUFHSCxLQUFLO1lBQzFDLElBQUksQ0FBQ0MsTUFBTSxFQUFFLE9BQU8sSUFBSTtZQUV4QixPQUNDSixLQUFBLENBQUFPLGFBQUEsQ0FBQVAsS0FBQSxDQUFBUSxRQUFBLFFBQ0UsQ0FBQ0gsVUFBVSxFQUFFSSxNQUFNLENBQUNDLEtBQUssSUFDekJWLEtBQUEsQ0FBQU8sYUFBQTtjQUFRSSxTQUFTLEVBQUMsb0JBQW9CO2NBQUNDLE9BQU8sRUFBRVQsS0FBSyxDQUFDVTtZQUFZLFVBR2xFLEVBQ0RiLEtBQUEsQ0FBQU8sYUFBQTtjQUFLTyxHQUFHLEVBQUVSLElBQUksQ0FBQ1MsVUFBVTtjQUFFSixTQUFTLEVBQUM7WUFBbUIsRUFBRyxFQUMzRFgsS0FBQSxDQUFBTyxhQUFBO2NBQVFJLFNBQVMsRUFBQyxxQkFBcUI7Y0FBQ0MsT0FBTyxFQUFFUCxVQUFVLEVBQUVXO1lBQUksVUFFeEQsQ0FDUDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCQSxJQUFBaEIsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWdCLE1BQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBaUIsUUFBQSxHQUFBakIsT0FBQTtVQUNNLFNBQVVrQixnQkFBZ0JBLENBQUE7WUFDL0IsTUFBTTtjQUNMZCxVQUFVO2NBQ1ZlLFVBQVU7Y0FDVmQsSUFBSSxFQUFFO2dCQUFFZSxJQUFJO2dCQUFFTDtjQUFJO1lBQUUsQ0FDcEIsR0FBRyxJQUFBRSxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3RCLElBQUksQ0FBQ0YsVUFBVSxFQUFFLE9BQU8sSUFBSTtZQUM1QixPQUNDcEIsS0FBQSxDQUFBTyxhQUFBLENBQUFQLEtBQUEsQ0FBQVEsUUFBQSxRQUNDUixLQUFBLENBQUFPLGFBQUEsQ0FBQ1UsTUFBQSxDQUFBTSxVQUFVO2NBQ1ZULEdBQUcsRUFBRU8sSUFBSTtjQUNURyxJQUFJLEVBQUMsTUFBTTtjQUNYQyxPQUFPLEVBQUMsU0FBUztjQUNqQmQsU0FBUyxFQUFDLDJDQUEyQztjQUNyREMsT0FBTyxFQUFFUCxVQUFVLEVBQUVxQjtZQUFTLEVBQzdCLEVBRUYxQixLQUFBLENBQUFPLGFBQUEsQ0FBQ1UsTUFBQSxDQUFBTSxVQUFVO2NBQ1ZDLElBQUksRUFBQyxPQUFPO2NBQ1pWLEdBQUcsRUFBRUUsSUFBSTtjQUNUUyxPQUFPLEVBQUMsU0FBUztjQUNqQmIsT0FBTyxFQUFFUCxVQUFVLEVBQUVzQixTQUFTO2NBQzlCaEIsU0FBUyxFQUFDO1lBQTRDLEVBQ3JELENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQVgsS0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQWlCLFFBQUEsR0FBQWpCLE9BQUE7VUFDTSxTQUFVMkIsVUFBVUEsQ0FBQTtZQUN6QixNQUFNO2NBQUViLFVBQVU7Y0FBRVQ7WUFBSSxDQUFFLEdBQUcsSUFBQVksUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUMvQyxJQUFJLENBQUNQLFVBQVUsRUFBRSxPQUFPLElBQUk7WUFFNUIsT0FBT2YsS0FBQSxDQUFBTyxhQUFBO2NBQUtPLEdBQUcsRUFBRVIsSUFBSSxDQUFDUyxVQUFVO2NBQUVKLFNBQVMsRUFBQztZQUFtQixFQUFHO1VBQ25FOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBLElBQUFrQixNQUFBLEdBQUE1QixPQUFBO1VBZU8sTUFBTTZCLGFBQWEsR0FBR0QsTUFBQSxDQUFBRSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQUNDLE9BQUEsQ0FBQUgsYUFBQSxHQUFBQSxhQUFBO1VBQ2hFLE1BQU1SLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1PLE1BQUEsQ0FBQUUsT0FBSyxDQUFDRyxVQUFVLENBQUNKLGFBQWEsQ0FBQztVQUFDRyxPQUFBLENBQUFYLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCdEUsSUFBQU8sTUFBQSxHQUFBNUIsT0FBQTtVQUNBLElBQUFrQyxPQUFBLEdBQUFsQyxPQUFBO1VBQ0EsSUFBQW1DLFdBQUEsR0FBQW5DLE9BQUE7VUFDQSxJQUFBb0MsTUFBQSxHQUFBcEMsT0FBQTtVQUNBLElBQUFxQyxVQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQWlCLFFBQUEsR0FBQWpCLE9BQUE7VUFFQSxJQUFBc0MsV0FBQSxHQUFBdEMsT0FBQTtVQUVPO1VBQVUsU0FDUnVDLFlBQVlBLENBQUNyQyxLQUFxQjtZQUMxQyxNQUFNO2NBQUVZLFVBQVU7Y0FBRVgsTUFBTTtjQUFFZ0IsVUFBVTtjQUFFcUI7WUFBUSxDQUFFLEdBQUd0QyxLQUFLO1lBQzFELE1BQU07Y0FBRUcsSUFBSTtjQUFFb0M7WUFBSyxDQUFFLEdBQUcsSUFBQUosVUFBQSxDQUFBSyxlQUFlLEVBQUN4QyxLQUFLLENBQUM7WUFFOUMsTUFBTTtjQUFFRTtZQUFVLENBQUUsR0FBR3FDLEtBQUs7WUFFNUIsTUFBTUUsWUFBWSxHQUFtQjtjQUNwQ3hDLE1BQU07Y0FDTlcsVUFBVTtjQUNWVixVQUFVO2NBQ1ZlLFVBQVU7Y0FDVmQ7YUFDQTtZQUVELE1BQU11QyxHQUFHLEdBQVcsMkJBQ25CMUMsS0FBSyxDQUFDUSxTQUFTLEdBQUcsR0FBR1IsS0FBSyxDQUFDUSxTQUFTLG9CQUFvQixHQUFHLG1CQUM1RCxHQUFHO1lBQ0gsT0FDQ2tCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeEIsYUFBQSxDQUFDVyxRQUFBLENBQUFZLGFBQWEsQ0FBQ2dCLFFBQVE7Y0FBQ0MsS0FBSyxFQUFFSDtZQUFZLEdBQzFDZixNQUFBLENBQUFFLE9BQUEsQ0FBQXhCLGFBQUE7Y0FBS08sR0FBRyxFQUFFUixJQUFJLENBQUMwQyxTQUFTO2NBQUVyQyxTQUFTLEVBQUVrQztZQUFHLEdBQ3ZDaEIsTUFBQSxDQUFBRSxPQUFBLENBQUF4QixhQUFBLENBQUM4QixNQUFBLENBQUFZLFVBQVU7Y0FBQ0MsS0FBSyxFQUFFVDtZQUFRLEVBQUksRUFDL0JaLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeEIsYUFBQSxDQUFDZ0MsV0FBQSxDQUFBWCxVQUFVLE9BQUcsRUFDZEMsTUFBQSxDQUFBRSxPQUFBLENBQUF4QixhQUFBLENBQUM0QixPQUFBLENBQUFqQyxZQUFZLE9BQUcsRUFDaEIyQixNQUFBLENBQUFFLE9BQUEsQ0FBQXhCLGFBQUEsQ0FBQzZCLFdBQUEsQ0FBQWpCLGdCQUFnQixPQUFHLENBQ2YsQ0FDa0I7VUFFM0I7Ozs7Ozs7Ozs7O1VDckNBOztVQUVBZ0MsTUFBQSxDQUFBQyxjQUFBLENBQUFuQixPQUFBO1lBQ0FjLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBL0MsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW9DLE1BQUEsR0FBQXBDLE9BQUE7VUFDTSxTQUFVZ0QsVUFBVUEsQ0FBQztZQUFFQztVQUFLLENBQUU7WUFDbkMsTUFBTUcsTUFBTSxHQUF1QkgsS0FBSyxDQUFDSSxHQUFHLENBQUMsQ0FBQ0MsS0FBa0IsRUFBRUMsS0FBYSxLQUM5RXhELEtBQUEsQ0FBQU8sYUFBQSxDQUFDOEIsTUFBQSxDQUFBb0IsS0FBSztjQUFDQyxHQUFHLEVBQUVGO1lBQUssR0FBR0QsS0FBSyxDQUN6QixDQUFDO1lBQ0YsT0FBT3ZELEtBQUEsQ0FBQU8sYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBZ0IsR0FBRTBDLE1BQU0sQ0FBTztVQUN0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQQSxJQUFBckQsS0FBQSxHQUFBQyxPQUFBO1VBRU0sU0FBVXdELEtBQUtBLENBQUM7WUFBRWhCO1VBQVEsQ0FBRTtZQUNqQyxPQUFPekMsS0FBQSxDQUFBTyxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFjLEdBQUU4QixRQUFRLENBQU87VUFDdEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQWtCLE1BQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBMkQsUUFBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUE0RCxNQUFBLEdBQUE1RCxPQUFBO1VBRUEsTUFBTTZELFlBQVksR0FBeUJILE1BQU0sQ0FBQ0EsTUFBMEM7VUFDdEYsTUFBT0ksVUFBVyxTQUFRRixNQUFBLENBQUFHLGFBQWtCO1lBQ2pELENBQUF2RCxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBd0QsS0FBTTtZQUNOLENBQUE5RCxLQUFNO1lBRU4rRCxTQUFTLEdBQUdBLENBQUNDLE9BQU8sRUFBRWhFLEtBQUssRUFBRVcsR0FBRyxLQUFVO2NBQ3pDLElBQUksQ0FBQyxDQUFBWCxLQUFNLEdBQUdBLEtBQUs7Y0FDbkIsSUFBSWlFLEtBQUssR0FBRztnQkFDWEMsYUFBYSxFQUFFbEUsS0FBSyxDQUFDa0UsYUFBYSxJQUFJLENBQUM7Z0JBQ3ZDQyxPQUFPLEVBQUUsQ0FBQ1YsUUFBQSxDQUFBVyxVQUFVLEVBQUVYLFFBQUEsQ0FBQWhDLFVBQVUsQ0FBQztnQkFDakMsR0FBR3pCO2VBQ0g7Y0FDRGdELE1BQU0sQ0FBQ3FCLElBQUksQ0FBQ0osS0FBSyxDQUFDLENBQUNLLE9BQU8sQ0FBQ2YsR0FBRyxJQUFHO2dCQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUNnQixRQUFRLENBQUNoQixHQUFHLENBQUMsRUFBRSxPQUFPVSxLQUFLLENBQUNWLEdBQUcsQ0FBQztjQUNsRCxDQUFDLENBQUM7Y0FFRixJQUFJLENBQUNDLE1BQU0sRUFBRTtnQkFDWmdCLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLGtDQUFrQyxDQUFDO2dCQUNoRDs7Y0FFRCxJQUFJekUsS0FBSyxDQUFDWSxVQUFVLElBQUlaLEtBQUssQ0FBQ0MsTUFBTSxFQUFFO2dCQUNyQ2dFLEtBQUssQ0FBQ3JELFVBQVUsR0FBRztrQkFDbEI4RCxFQUFFLEVBQUUvRCxHQUFHLENBQUNDLFVBQVUsQ0FBQytELE9BQU87a0JBQzFCQyxTQUFTLEVBQUUsSUFBSTtrQkFDZkMsSUFBSSxFQUFFN0UsS0FBSyxDQUFDOEUsY0FBYyxJQUFJLFNBQVM7a0JBQ3ZDQyxjQUFjLEVBQUUvRSxLQUFLLENBQUMrRSxjQUFjLElBQUk7aUJBQ3hDOztjQUdGLElBQUkvRSxLQUFLLENBQUNpQixVQUFVLEVBQUU7Z0JBQ3JCZ0QsS0FBSyxDQUFDaEQsVUFBVSxHQUFHO2tCQUNsQitELE1BQU0sRUFBRXJFLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDOEQsT0FBTztrQkFDeEJNLE1BQU0sRUFBRXRFLEdBQUcsQ0FBQ08sSUFBSSxDQUFDeUQ7aUJBQ2pCOztjQUdGLElBQUksQ0FBQyxDQUFBckUsTUFBTyxHQUFHLElBQUlxRCxZQUFZLENBQUNLLE9BQU8sRUFBRUMsS0FBSyxDQUFDO2NBRS9DLElBQUlqRSxLQUFLLENBQUNrRixXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUE1RSxNQUFPLENBQUM2RSxPQUFPLENBQUNDLFFBQVEsQ0FBQ3BGLEtBQUssQ0FBQ2tGLFdBQVcsQ0FBQyxDQUFDO2NBQ3hFLE1BQU0xRCxTQUFTLEdBQUdBLENBQUEsS0FBSztnQkFDdEIsSUFBSSxJQUFJLENBQUMsQ0FBQWxCLE1BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQUEsTUFBTyxDQUFDK0UsU0FBUyxFQUFFO2NBQzNDLENBQUM7Y0FFRCxNQUFNOUQsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLENBQUFqQixNQUFPLEVBQUUsSUFBSSxDQUFDLENBQUFBLE1BQU8sQ0FBQ2dGLFNBQVMsRUFBRTtjQUMzQyxDQUFDO2NBRUQsTUFBTUgsT0FBTyxHQUFHOUIsS0FBSyxJQUFHO2dCQUN2QixJQUFJLElBQUksQ0FBQyxDQUFBL0MsTUFBTyxFQUFFLElBQUksQ0FBQyxDQUFBQSxNQUFPLENBQUM2RSxPQUFPLENBQUNDLFFBQVEsQ0FBQy9CLEtBQUssQ0FBQyxDQUFDO2NBQ3hELENBQUM7Y0FDRCxJQUFJckQsS0FBSyxDQUFDd0IsU0FBUyxJQUFJLE9BQU94QixLQUFLLENBQUN3QixTQUFTLEtBQUssVUFBVSxFQUFFeEIsS0FBSyxDQUFDd0IsU0FBUyxDQUFDQSxTQUFTLENBQUM7Y0FDeEYsSUFBSXhCLEtBQUssQ0FBQ3VCLFNBQVMsSUFBSSxPQUFPdkIsS0FBSyxDQUFDdUIsU0FBUyxLQUFLLFVBQVUsRUFBRXZCLEtBQUssQ0FBQ3VCLFNBQVMsQ0FBQ0EsU0FBUyxDQUFDO2NBQ3hGLElBQUl2QixLQUFLLENBQUNtRixPQUFPLElBQUksT0FBT25GLEtBQUssQ0FBQ21GLE9BQU8sS0FBSyxVQUFVLEVBQUVuRixLQUFLLENBQUNtRixPQUFPLENBQUNBLE9BQU8sQ0FBQztjQUNoRixJQUFJLENBQUMsQ0FBQTdFLE1BQU8sQ0FBQ2lGLEVBQUUsQ0FBQyxhQUFhLEVBQUUsTUFBSztnQkFDbkMsSUFBSSxJQUFJLENBQUMsQ0FBQWpGLE1BQU8sRUFBRUMsS0FBSyxFQUFFO2tCQUN4QixJQUFJLENBQUMsQ0FBQXVELEtBQU0sR0FBRyxJQUFJO2tCQUNsQixJQUFJLENBQUMwQixZQUFZLEVBQUU7aUJBQ25CLE1BQU07a0JBQ04sSUFBSSxDQUFDLENBQUExQixLQUFNLEdBQUcsS0FBSztrQkFDbkIsSUFBSSxDQUFDMEIsWUFBWSxFQUFFOztjQUVyQixDQUFDLENBQUM7WUFDSCxDQUFDO1lBRURoRSxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFsQixNQUFPLEVBQUVDLEtBQUssRUFBRTtnQkFDekIsSUFBSSxDQUFDLENBQUFELE1BQU8sRUFBRStFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO2dCQUNuQzs7Y0FFRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUF2QixLQUFNLEVBQUU7Y0FDbEIsSUFBSSxJQUFJLENBQUMsQ0FBQTlELEtBQU0sQ0FBQ3lGLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQXpGLEtBQU0sQ0FBQ3lGLE1BQU0sRUFBRSxDQUFDLEtBQ3hDLElBQUksQ0FBQyxDQUFBbkYsTUFBTyxFQUFFK0UsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDekMsQ0FBQztZQUVEOUQsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBakIsTUFBTyxFQUFFQyxLQUFLLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxDQUFBRCxNQUFPLEVBQUUrRSxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztnQkFDbkM7O2NBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBdkIsS0FBTSxFQUFFO2NBQ2xCLElBQUksSUFBSSxDQUFDLENBQUE5RCxLQUFNLENBQUMwRixNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUExRixLQUFNLENBQUMwRixNQUFNLEVBQUUsQ0FBQyxLQUN4QyxJQUFJLENBQUMsQ0FBQXBGLE1BQU8sRUFBRWdGLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ3pDLENBQUM7WUFFRHpFLElBQUksR0FBR0EsQ0FBQSxLQUFXO2NBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQVAsTUFBTyxFQUFFQyxLQUFLLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxDQUFBRCxNQUFPLEVBQUUrRSxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztnQkFDbkM7O2NBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBdkIsS0FBTSxFQUFFO2NBQ2xCLElBQUksQ0FBQyxDQUFBOUQsS0FBTSxDQUFDVSxZQUFZLEVBQUU7WUFDM0IsQ0FBQzs7VUFDRG9CLE9BQUEsQ0FBQThCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7VUNyR0Q7O1VBRUFaLE1BQUEsQ0FBQUMsY0FBQSxDQUFBbkIsT0FBQTtZQUNBYyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQS9DLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE2RixXQUFBLEdBQUE3RixPQUFBO1VBSU8sTUFBTTBDLGVBQWUsR0FBSXhDLEtBQXFCLElBQUk7WUFDeEQ7WUFFQSxNQUFNRyxJQUFJLEdBQUc7Y0FDWlUsSUFBSSxFQUFFaEIsS0FBSyxDQUFDK0YsTUFBTSxFQUFFO2NBQ3BCL0MsU0FBUyxFQUFFaEQsS0FBSyxDQUFDK0YsTUFBTSxFQUFFO2NBQ3pCaEYsVUFBVSxFQUFFZixLQUFLLENBQUMrRixNQUFNLEVBQUU7Y0FDMUIxRSxJQUFJLEVBQUVyQixLQUFLLENBQUMrRixNQUFNO2FBQ2xCO1lBRUQsTUFBTTtjQUFFVDtZQUFPLENBQUUsR0FBR25GLEtBQUs7WUFDekIsTUFBTTtjQUFFNkMsU0FBUztjQUFFM0I7WUFBSSxDQUFFLEdBQUdmLElBQUk7WUFFaEMsTUFBTSxDQUFDb0MsS0FBSyxFQUFFc0QsUUFBUSxDQUFDLEdBQUdoRyxLQUFLLENBQUNpRyxRQUFRLENBQU0sRUFBRSxDQUFDO1lBRWpEakcsS0FBSyxDQUFDa0csU0FBUyxDQUFDLE1BQVU7Y0FDekIsTUFBTTdGLFVBQVUsR0FBZSxJQUFJeUYsV0FBQSxDQUFBL0IsVUFBVSxFQUFFO2NBQy9DLE1BQU1vQyxRQUFRLEdBQWVBLENBQUEsS0FDNUJ4QixPQUFPLENBQUN5QixHQUFHLENBQUMsRUFBRSxFQUFFO2dCQUNmLEdBQUcxRCxLQUFLO2dCQUNSMkQsS0FBSyxFQUFFLElBQUk7Z0JBQ1g1RixNQUFNLEVBQUVKLFVBQVUsQ0FBQ0ksTUFBTTtnQkFDekJKLFVBQVU7Z0JBQ1ZpRyxTQUFTLEVBQUVqRyxVQUFVLENBQUNpRztlQUN0QixDQUFDO2NBQ0hOLFFBQVEsQ0FBQztnQkFDUixHQUFHdEQsS0FBSztnQkFDUjJELEtBQUssRUFBRSxJQUFJO2dCQUNYNUYsTUFBTSxFQUFFSixVQUFVLENBQUNJLE1BQU07Z0JBQ3pCSixVQUFVO2dCQUNWaUcsU0FBUyxFQUFFakcsVUFBVSxDQUFDaUc7ZUFDdEIsQ0FBQztjQUNGakcsVUFBVSxDQUFDcUYsRUFBRSxDQUFDLFFBQVEsRUFBRVMsUUFBUSxDQUFDO2NBQ2pDLElBQUksQ0FBQzlGLFVBQVUsQ0FBQ2tHLFNBQVMsRUFBRWxHLFVBQVUsQ0FBQzZELFNBQVMsQ0FBQ2xCLFNBQVMsQ0FBQzhCLE9BQU8sRUFBRTNFLEtBQUssRUFBRUcsSUFBSSxDQUFDO2NBQy9FNkYsUUFBUSxFQUFFO2NBQ1YsT0FBTyxNQUFNOUYsVUFBVSxDQUFDbUcsR0FBRyxDQUFDLFFBQVEsRUFBRUwsUUFBUSxDQUFDO1lBQ2hELENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTm5HLEtBQUssQ0FBQ2tHLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQ3hELEtBQUssQ0FBQ2pDLE1BQU0sSUFBSSxDQUFDNkUsT0FBTyxFQUFFO2NBQy9CNUMsS0FBSyxDQUFDakMsTUFBTSxDQUFDNkUsT0FBTyxDQUFDQSxPQUFPLENBQUM7WUFDOUIsQ0FBQyxFQUFFLENBQUNBLE9BQU8sQ0FBQyxDQUFDO1lBQ2JYLE9BQU8sQ0FBQ3lCLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDaEIsT0FBTztjQUFFOUYsSUFBSTtjQUFFb0MsS0FBSztjQUFFckIsSUFBSTtjQUFFMkI7WUFBUyxDQUFFO1VBQ3hDLENBQUM7VUFBQ2YsT0FBQSxDQUFBVSxlQUFBLEdBQUFBLGVBQUEifQ==