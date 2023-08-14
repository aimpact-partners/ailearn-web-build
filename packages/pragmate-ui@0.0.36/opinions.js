System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/image", "pragmate-ui@0.0.36/swiper-component"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Opinions, __beyond_pkg, hmr;
  _export("Opinions", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi0036Image) {
      dependency_3 = _pragmateUi0036Image;
    }, function (_pragmateUi0036SwiperComponent) {
      dependency_4 = _pragmateUi0036SwiperComponent;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.5"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.7.2"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/opinions"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['pragmate-ui/swiper-component', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/opinions');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./card
      **********************/
      ims.set('./card', {
        hash: 3472612627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardOpinion = CardOpinion;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          function CardOpinion(props) {
            const {
              name,
              src,
              profession,
              comment,
              alt
            } = props;
            return React.createElement("div", {
              className: "container__card-opinions"
            }, React.createElement(_image.Image, {
              src: "image/comillas.png",
              alt: "icon"
            }), React.createElement("div", {
              className: "img__icon-circle"
            }, React.createElement(_image.Image, {
              src: src,
              alt: alt
            })), React.createElement("div", {
              className: "content-p"
            }, React.createElement("p", {
              className: "opinions__p"
            }, comment)), React.createElement("div", {
              className: "content-opinions"
            }, React.createElement("h3", null, React.createElement("strong", null, name)), React.createElement("span", null, profession)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1951850634,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Opinions = Opinions;
          var React = require("react");
          var _swiperComponent = require("pragmate-ui/swiper-component");
          var _card = require("./card");
          /* bundle */
          function Opinions(props) {
            const items = props.opinions.map((opinion, index) => {
              return React.createElement(_card.CardOpinion, {
                key: index,
                name: opinion.name,
                src: opinion.src,
                comment: opinion.comment,
                profession: opinion.profession,
                alt: opinion.alt
              });
            });
            return React.createElement("section", {
              className: "container__opinion"
            }, React.createElement(_swiperComponent.SwiperSlider, {
              loop: true,
              slidesPerView: "auto",
              spaceBetween: 0,
              pagination: true,
              navigation: true,
              className: "swiper-implementation"
            }, items));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Opinions",
        "name": "Opinions"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Opinions') && _export("Opinions", Opinions = require ? require('./index').Opinions : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfaW1hZ2UiLCJDYXJkT3BpbmlvbiIsInByb3BzIiwibmFtZSIsInNyYyIsInByb2Zlc3Npb24iLCJjb21tZW50IiwiYWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkltYWdlIiwiX3N3aXBlckNvbXBvbmVudCIsIl9jYXJkIiwiT3BpbmlvbnMiLCJpdGVtcyIsIm9waW5pb25zIiwibWFwIiwib3BpbmlvbiIsImluZGV4Iiwia2V5IiwiU3dpcGVyU2xpZGVyIiwibG9vcCIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJwYWdpbmF0aW9uIiwibmF2aWdhdGlvbiJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2NhcmQudHN4IiwiL2NvZGUvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ00sU0FBVUUsV0FBV0EsQ0FBQ0MsS0FBSztZQUMvQixNQUFNO2NBQUVDLElBQUk7Y0FBRUMsR0FBRztjQUFFQyxVQUFVO2NBQUVDLE9BQU87Y0FBRUM7WUFBRyxDQUFFLEdBQUdMLEtBQUs7WUFFckQsT0FDRUosS0FBQSxDQUFBVSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUEwQixHQUN2Q1gsS0FBQSxDQUFBVSxhQUFBLENBQUNSLE1BQUEsQ0FBQVUsS0FBSztjQUFDTixHQUFHLEVBQUMsb0JBQW9CO2NBQUNHLEdBQUcsRUFBQztZQUFNLEVBQUcsRUFDN0NULEtBQUEsQ0FBQVUsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDL0JYLEtBQUEsQ0FBQVUsYUFBQSxDQUFDUixNQUFBLENBQUFVLEtBQUs7Y0FBQ04sR0FBRyxFQUFFQSxHQUFHO2NBQUVHLEdBQUcsRUFBRUE7WUFBRyxFQUFJLENBQ3pCLEVBQ05ULEtBQUEsQ0FBQVUsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBVyxHQUN4QlgsS0FBQSxDQUFBVSxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUFhLEdBQUVILE9BQU8sQ0FBSyxDQUNwQyxFQUVOUixLQUFBLENBQUFVLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQy9CWCxLQUFBLENBQUFVLGFBQUEsYUFDRVYsS0FBQSxDQUFBVSxhQUFBLGlCQUFTTCxJQUFJLENBQVUsQ0FDcEIsRUFDTEwsS0FBQSxDQUFBVSxhQUFBLGVBQU9ILFVBQVUsQ0FBUSxDQUNyQixDQUNGO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUFQLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFZLGdCQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBYSxLQUFBLEdBQUFiLE9BQUE7VUFjTztVQUFZLFNBQVVjLFFBQVFBLENBQUNYLEtBQWE7WUFDakQsTUFBTVksS0FBSyxHQUFHWixLQUFLLENBQUNhLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsS0FBSyxLQUFJO2NBQ2xELE9BQ0VwQixLQUFBLENBQUFVLGFBQUEsQ0FBQ0ksS0FBQSxDQUFBWCxXQUFXO2dCQUNWa0IsR0FBRyxFQUFFRCxLQUFLO2dCQUNWZixJQUFJLEVBQUVjLE9BQU8sQ0FBQ2QsSUFBSTtnQkFDbEJDLEdBQUcsRUFBRWEsT0FBTyxDQUFDYixHQUFHO2dCQUNoQkUsT0FBTyxFQUFFVyxPQUFPLENBQUNYLE9BQU87Z0JBQ3hCRCxVQUFVLEVBQUVZLE9BQU8sQ0FBQ1osVUFBVTtnQkFDOUJFLEdBQUcsRUFBRVUsT0FBTyxDQUFDVjtjQUFHLEVBQ2hCO1lBRU4sQ0FBQyxDQUFDO1lBRUYsT0FDRVQsS0FBQSxDQUFBVSxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFvQixHQUNyQ1gsS0FBQSxDQUFBVSxhQUFBLENBQUNHLGdCQUFBLENBQUFTLFlBQVk7Y0FDWEMsSUFBSSxFQUFFLElBQUk7Y0FDVkMsYUFBYSxFQUFDLE1BQU07Y0FDcEJDLFlBQVksRUFBRSxDQUFDO2NBQ2ZDLFVBQVUsRUFBRSxJQUFJO2NBQ2hCQyxVQUFVLEVBQUUsSUFBSTtjQUNoQmhCLFNBQVMsRUFBQztZQUF1QixHQUVoQ0ssS0FBSyxDQUNPLENBQ1A7VUFFZCJ9