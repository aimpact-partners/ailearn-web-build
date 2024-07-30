System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/application", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/reactive@1.2.0/model", "react@18.2.0", "@aimpact/chat-sdk@1.0.1/widgets/markdown", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/components", "react@18.2.0/jsx-runtime"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnSdk100Application) {
      dependency_4 = _aimpactAilearnSdk100Application;
    }, function (_aimpactChatSdk101Session) {
      dependency_5 = _aimpactChatSdk101Session;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactChatSdk101WidgetsMarkdown) {
      dependency_8 = _aimpactChatSdk101WidgetsMarkdown;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_9 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1Components) {
      dependency_10 = _pragmateUi100Beta1Components;
    }, function (_react1820JsxRuntime) {
      dependency_11 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.08"], ["@aimpact/ailearn-app", "0.1.0-dev.08"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.08/pages/privacy"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/application', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/chat-sdk/widgets/markdown', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/components', dependency_10], ['react/jsx-runtime', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "privacy-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.08/pages/privacy",
        "is": "page",
        "route": "/privacy"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.08/pages/privacy');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 308745009,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.load(this.uri.vars.get('page'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1722649233,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _application = require("@aimpact/ailearn-sdk/application");
          var _model = require("@beyond-js/reactive/model");
          //@ts-ignore
          class StoreManager extends _model.ReactiveModel {
            application;
            #content;
            get content() {
              return this.#content;
            }
            constructor() {
              super();
              this.reactiveProps(['page']);
              this.application = new _application.Application();
              globalThis.store = this;
            }
            async load(page) {
              // const data = await this.application.policies();
              // this.#content = data.policy;
              this.page = page;
              this.ready = true;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3251310977,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2723694380,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _privacy = require("./privacy.mdx");
          /*bundle*/
          function View({
            store
          }) {
            console.log(9, 2);
            return React.createElement("div", {
              className: "container-page-content"
            }, React.createElement(_privacy.default, null));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/privacy.mdx
      ***********************************/

      ims.set('./views/privacy.mdx', {
        hash: 2568567038,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              p: "p",
              h2: "h2",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Política de Privacidad RVD.AI"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Fecha de última actualización: 4 de marzo de 2024"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Esta Política de Privacidad forma parte integrante de los Términos y Condiciones de Uso de RVD.AI (los “Términos y\r\nCondiciones de Uso”). Todos los términos empleados en el presente documento que no se encuentran definidos especialmente\r\nen éste, tendrán el significado atribuidos a los mismos en los Términos y Condiciones de Uso. Esta Política de\r\nPrivacidad describe cómo el Prestador (en adelante, “El Prestador”) recopila, utiliza y protege la información personal\r\nque el Usuario proporciona al utilizar el Servicio."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Al aceptar los Términos y Condiciones de Uso, el Usuario presta su consentimiento libre, expreso e informado a todas las\r\nprevisiones de la presente Política de Privacidad."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "1. Información que se Recopila:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Cuando el Usuario utiliza los Servicios, podría recopilarse la siguiente Información:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Información de Registro: Al registrarse el Usuario en nuestro servicio, podemos solicitar información como su nombre,\r\ndirección de correo electrónico, fecha de nacimiento y otra información necesaria para crear su cuenta."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Interacción con la IA: Podemos recopilar información sobre la interacción del Usuario con la IA incluidas las consultas\r\nrealizadas y las respuestas proporcionadas."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Información de Uso: Podemos recopilar información sobre cómo utiliza el Servicio, como los recursos a los que el Usuario\r\naccede y el tiempo que pasa en el Sitio web (y aplicaciones). También podrán ser recopiladas la dirección IP del\r\nUsuario, cookies, y datos que permitirán identificar el navegador o cuenta del Usuario."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Todo ello, la “información”."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "2. Uso de la Información:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador utiliza la Información recopilada para los siguientes propósitos:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Proporcionar y mantener el Servicio."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Mejorar y personalizar la experiencia del Usuario."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Comprender cómo se utiliza el Servicio y realizar análisis para mejorar productos y servicios."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Enviar comunicaciones promocionales y actualizaciones relacionadas con el Servicio, siempre que el Usuario no haya\r\nrechazado esta opción."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La Información objeto de Tratamiento no será utilizada para finalidades distintas o incompatibles con aquellas que\r\nmotivaron su obtención y será destruida cuando haya dejado de ser necesaria o pertinente a los fines para los cuales\r\nhubiese sido recolectada."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "3. Como podría compartirse la Información del Usuario:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador no vende ni alquila su Información personal a terceros. Sin embargo, podemos compartir su Información en\r\nlas siguientes circunstancias:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Con proveedores de servicios que ayudan al Prestador a operar el Servicio y brindar otros productos y servicios."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Cuando sea requerido por la ley o en respuesta a una solicitud legal válida, como una orden judicial."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Con el consentimiento del Usuario o de acuerdo con sus instrucciones."
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "4. Seguridad de la Información:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Usuario se compromete a proteger la seguridad de su Información personal y a utilizar medidas de seguridad razonables\r\npara protegerla contra el acceso no autorizado, la divulgación, la alteración o la destrucción. Se destaca que la\r\nInformación que se recopila puede ser transferida, almacenada y/o tratada en Estados Unidos u otros países fuera de\r\nArgentina, y al proporcionar su Información, el Usuario consiente dicha transferencia, almacenamiento y/o Tratamiento."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Se entenderá por “Tratamiento” a todas las operaciones y procedimientos sistemáticos, electrónicos o no, que permitan la\r\nrecolección, conservación, ordenación, almacenamiento, modificación, relacionamiento, evaluación, bloqueo, destrucción,\r\ny en general el procesamiento de datos personales, así como también su cesión a terceros a través de comunicaciones,\r\nconsultas, interconexiones o transferencias."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La transferencia de Información se realizará en todo caso, exclusivamente a países cuyas legislaciones proporcionen\r\nniveles de protección adecuados y conformes con esta Política de Privacidad."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "5. Cambios en la Política de Privacidad:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento para cumplir con las\r\nleyes y regulaciones aplicables. Le notificaremos cualquier cambio publicando la Política de Privacidad actualizada en\r\nnuestro sitio web y actualizando la fecha de “Última Actualización” al principio de la Política de Privacidad, todo ello\r\nde acuerdo a lo indicado en los Términos y Condiciones de Uso."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "6. Sus Derechos y Opciones:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "De acuerdo con la Ley de Protección de Datos Personales en Argentina (Ley 25.326), usted tiene derecho a acceder,\r\nrectificar y suprimir su Información, así como a oponerse al Tratamiento de los mismos. También tiene derecho a revocar\r\nsu consentimiento en cualquier momento. Para ejercer estos derechos o para hacer cualquier pregunta sobre la Política de\r\nPrivacidad deberá contactar al servicio de Soporte del Prestador mediante los siguientes medios:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Email:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Teléfono:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ángel Estrada y Compañía S.A., con domicilio en la calle Maipú 116, Piso 8 (C1084ABD) de la Ciudad Autónoma de Buenos\r\nAires, Argentina, es titular y responsable del tratamiento y de la protección de datos (Información). Los Usuarios\r\npueden enviar solicitudes para ejercer sus derechos con respecto a su Información en el marco de la Ley 25.326."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La Agencia de Acceso a la Información Pública, como órgano regulador de la ley 25.326, es responsable de recibir los\r\nreclamos e informes presentados por interesados que consideren que sus datos se han visto afectados por una infracción\r\nde la Ley de Protección de Datos Personales."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = exports.default = MDXContent;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfYXBwbGljYXRpb24iLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiYXBwbGljYXRpb24iLCJjb250ZW50IiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiQXBwbGljYXRpb24iLCJnbG9iYWxUaGlzIiwicGFnZSIsInJlYWR5IiwiX3JlYWN0IiwiTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9wcml2YWN5IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy92aWV3c1xccHJpdmFjeS5tZHgiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJ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