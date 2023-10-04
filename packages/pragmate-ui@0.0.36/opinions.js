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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 4004723230,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfaW1hZ2UiLCJDYXJkT3BpbmlvbiIsInByb3BzIiwibmFtZSIsInNyYyIsInByb2Zlc3Npb24iLCJjb21tZW50IiwiYWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkltYWdlIiwiX3N3aXBlckNvbXBvbmVudCIsIl9jYXJkIiwiT3BpbmlvbnMiLCJpdGVtcyIsIm9waW5pb25zIiwibWFwIiwib3BpbmlvbiIsImluZGV4Iiwia2V5IiwiU3dpcGVyU2xpZGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInBhZ2luYXRpb24iLCJuYXZpZ2F0aW9uIl0sInNvdXJjZXMiOlsiL3RzL2NhcmQudHN4IiwiL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNNLFNBQVVFLFdBQVdBLENBQUNDLEtBQUs7WUFDL0IsTUFBTTtjQUFFQyxJQUFJO2NBQUVDLEdBQUc7Y0FBRUMsVUFBVTtjQUFFQyxPQUFPO2NBQUVDO1lBQUcsQ0FBRSxHQUFHTCxLQUFLO1lBRXJELE9BQ0VKLEtBQUEsQ0FBQVUsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBMEIsR0FDdkNYLEtBQUEsQ0FBQVUsYUFBQSxDQUFDUixNQUFBLENBQUFVLEtBQUs7Y0FBQ04sR0FBRyxFQUFDLG9CQUFvQjtjQUFDRyxHQUFHLEVBQUM7WUFBTSxFQUFHLEVBQzdDVCxLQUFBLENBQUFVLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQy9CWCxLQUFBLENBQUFVLGFBQUEsQ0FBQ1IsTUFBQSxDQUFBVSxLQUFLO2NBQUNOLEdBQUcsRUFBRUEsR0FBRztjQUFFRyxHQUFHLEVBQUVBO1lBQUcsRUFBSSxDQUN6QixFQUNOVCxLQUFBLENBQUFVLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVcsR0FDeEJYLEtBQUEsQ0FBQVUsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBYSxHQUFFSCxPQUFPLENBQUssQ0FDcEMsRUFFTlIsS0FBQSxDQUFBVSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrQixHQUMvQlgsS0FBQSxDQUFBVSxhQUFBLGFBQ0VWLEtBQUEsQ0FBQVUsYUFBQSxpQkFBU0wsSUFBSSxDQUFVLENBQ3BCLEVBQ0xMLEtBQUEsQ0FBQVUsYUFBQSxlQUFPSCxVQUFVLENBQVEsQ0FDckIsQ0FDRjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBUCxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBWSxnQkFBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsS0FBQSxHQUFBYixPQUFBO1VBY087VUFBWSxTQUFVYyxRQUFRQSxDQUFDWCxLQUFhO1lBQ2xELE1BQU1ZLEtBQUssR0FBR1osS0FBSyxDQUFDYSxRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxPQUFPLEVBQUVDLEtBQUssS0FBSTtjQUNuRCxPQUNDcEIsS0FBQSxDQUFBVSxhQUFBLENBQUNJLEtBQUEsQ0FBQVgsV0FBVztnQkFDWGtCLEdBQUcsRUFBRUQsS0FBSztnQkFDVmYsSUFBSSxFQUFFYyxPQUFPLENBQUNkLElBQUk7Z0JBQ2xCQyxHQUFHLEVBQUVhLE9BQU8sQ0FBQ2IsR0FBRztnQkFDaEJFLE9BQU8sRUFBRVcsT0FBTyxDQUFDWCxPQUFPO2dCQUN4QkQsVUFBVSxFQUFFWSxPQUFPLENBQUNaLFVBQVU7Z0JBQzlCRSxHQUFHLEVBQUVVLE9BQU8sQ0FBQ1Y7Y0FBRyxFQUNmO1lBRUosQ0FBQyxDQUFDO1lBRUYsT0FDQ1QsS0FBQSxDQUFBVSxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFvQixHQUN0Q1gsS0FBQSxDQUFBVSxhQUFBLENBQUNHLGdCQUFBLENBQUFTLFlBQVk7Y0FDWkMsYUFBYSxFQUFDLE1BQU07Y0FDcEJDLFlBQVksRUFBRSxDQUFDO2NBQ2ZDLFVBQVUsRUFBRSxJQUFJO2NBQ2hCQyxVQUFVLEVBQUUsSUFBSTtjQUNoQmYsU0FBUyxFQUFDO1lBQXVCLEdBRWhDSyxLQUFLLENBQ1EsQ0FDTjtVQUVaIn0=