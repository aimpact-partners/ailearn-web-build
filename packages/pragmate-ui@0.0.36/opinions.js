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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ00sU0FBVUEsV0FBVyxDQUFDQyxLQUFLO1lBQy9CLE1BQU07Y0FBRUMsSUFBSTtjQUFFQyxHQUFHO2NBQUVDLFVBQVU7Y0FBRUMsT0FBTztjQUFFQztZQUFHLENBQUUsR0FBR0wsS0FBSztZQUVyRCxPQUNFTTtjQUFLQyxTQUFTLEVBQUM7WUFBMEIsR0FDdkNELG9CQUFDRSxZQUFLO2NBQUNOLEdBQUcsRUFBQyxvQkFBb0I7Y0FBQ0csR0FBRyxFQUFDO1lBQU0sRUFBRyxFQUM3Q0M7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQy9CRCxvQkFBQ0UsWUFBSztjQUFDTixHQUFHLEVBQUVBLEdBQUc7Y0FBRUcsR0FBRyxFQUFFQTtZQUFHLEVBQUksQ0FDekIsRUFDTkM7Y0FBS0MsU0FBUyxFQUFDO1lBQVcsR0FDeEJEO2NBQUdDLFNBQVMsRUFBQztZQUFhLEdBQUVILE9BQU8sQ0FBSyxDQUNwQyxFQUVORTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDL0JELGdDQUNFQSxvQ0FBU0wsSUFBSSxDQUFVLENBQ3BCLEVBQ0xLLGtDQUFPSCxVQUFVLENBQVEsQ0FDckIsQ0FDRjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQTtVQUNBO1VBQ0E7VUFjTztVQUFZLFNBQVVNLFFBQVEsQ0FBQ1QsS0FBYTtZQUNsRCxNQUFNVSxLQUFLLEdBQUdWLEtBQUssQ0FBQ1csUUFBUSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxLQUFLLEtBQUk7Y0FDbkQsT0FDQ1Isb0JBQUNQLGlCQUFXO2dCQUNYZ0IsR0FBRyxFQUFFRCxLQUFLO2dCQUNWYixJQUFJLEVBQUVZLE9BQU8sQ0FBQ1osSUFBSTtnQkFDbEJDLEdBQUcsRUFBRVcsT0FBTyxDQUFDWCxHQUFHO2dCQUNoQkUsT0FBTyxFQUFFUyxPQUFPLENBQUNULE9BQU87Z0JBQ3hCRCxVQUFVLEVBQUVVLE9BQU8sQ0FBQ1YsVUFBVTtnQkFDOUJFLEdBQUcsRUFBRVEsT0FBTyxDQUFDUjtjQUFHLEVBQ2Y7WUFFSixDQUFDLENBQUM7WUFFRixPQUNDQztjQUFTQyxTQUFTLEVBQUM7WUFBb0IsR0FDdENELG9CQUFDVSw2QkFBWTtjQUNaQyxhQUFhLEVBQUMsTUFBTTtjQUNwQkMsWUFBWSxFQUFFLENBQUM7Y0FDZkMsVUFBVSxFQUFFLElBQUk7Y0FDaEJDLFVBQVUsRUFBRSxJQUFJO2NBQ2hCYixTQUFTLEVBQUM7WUFBdUIsR0FFaENHLEtBQUssQ0FDUSxDQUNOO1VBRVoiLCJuYW1lcyI6WyJDYXJkT3BpbmlvbiIsInByb3BzIiwibmFtZSIsInNyYyIsInByb2Zlc3Npb24iLCJjb21tZW50IiwiYWx0IiwiUmVhY3QiLCJjbGFzc05hbWUiLCJJbWFnZSIsIk9waW5pb25zIiwiaXRlbXMiLCJvcGluaW9ucyIsIm1hcCIsIm9waW5pb24iLCJpbmRleCIsImtleSIsIlN3aXBlclNsaWRlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJwYWdpbmF0aW9uIiwibmF2aWdhdGlvbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY2FyZC50c3giLCJ0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==