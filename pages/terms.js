System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/application", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/reactive@1.1.12/model", "react@18.2.0", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@beyond-js/react-18-widgets@1.1.1/hooks", "pragmate-ui@0.1.0/components", "react@18.2.0/jsx-runtime"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
    }, function (_aimpactAilearnSdk100Application) {
      dependency_4 = _aimpactAilearnSdk100Application;
    }, function (_aimpactChatSdk100Session) {
      dependency_5 = _aimpactChatSdk100Session;
    }, function (_beyondJsReactive1112Model) {
      dependency_6 = _beyondJsReactive1112Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_8 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_9 = _beyondJsReact18Widgets111Hooks;
    }, function (_pragmateUi010Components) {
      dependency_10 = _pragmateUi010Components;
    }, function (_react1820JsxRuntime) {
      dependency_11 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/pages/terms"
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/application', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/chat-sdk/widgets/markdown', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/components', dependency_10], ['react/jsx-runtime', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-terms-and-conditions-page",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/pages/terms",
        "is": "page",
        "route": "/app/${page}"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/pages/terms');
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
        hash: 2896304666,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _privacy = require("./privacy.mdx");
          var _termsAndConditions = require("./terms-and-conditions.mdx");
          /*bundle*/
          function View({
            store
          }) {
            const value = {
              store
            };
            const [ready, setReady] = React.useState(store.ready);
            const [view, setView] = React.useState(store.page);
            (0, _hooks.useBinder)([store], () => setReady(store.page));
            const VIEWS = {
              privacy: _privacy.default,
              terms: _termsAndConditions.default
            };
            if (!store.ready) return React.createElement(_components.Spinner, {
              active: true
            });
            if (!VIEWS[view]) return 'error 404';
            const Control = VIEWS[view];
            return React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement("div", {
              className: "container-page-content"
            }, React.createElement(Control, null)));
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

      /************************************************
      INTERNAL MODULE: ./views/terms-and-conditions.mdx
      ************************************************/

      ims.set('./views/terms-and-conditions.mdx', {
        hash: 3018462259,
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
              h3: "h3",
              a: "a"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Términos y condiciones de uso de RVD.AI"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Última actualización: 4 de marzo de 2024"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Idioma de los Términos y Condiciones de Uso"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los presentes Términos y Condiciones de Uso están redactados en idioma español. Cualquier traducción a otros idiomas que\r\nse proporcione tiene únicamente fines de referencia para el usuario. En caso de contradicción o conflicto entre la\r\nversión en español y las ofrecidas en otros idiomas, prevalecerá la versión en español (disponible en [incluir enlace a\r\nla versión en español de los Términos y Condiciones de Uso])."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Introducción a RVD.AI"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "RVD.AI es una herramienta de inteligencia artificial destinada a revolucionar la educación en escuelas primarias y\r\nsecundarias en Argentina desarrollada bajo la marca Rivadavia y operada por Ángel Estrada y Compañía S.A. (el\r\n“Prestador”). Se trata de un producto que ha sido creado con la intención de enriquecer tanto la enseñanza como el\r\naprendizaje, incorporando lo más avanzado en tecnología de inteligencia artificial. Su propósito es brindar un apoyo\r\nsignificativo a docentes y estudiantes, fomentando un ambiente educativo más dinámico, interactivo y personalizado."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "RVD.AI representa una innovación significativa en el campo de la educación, ofreciendo a los docentes una herramienta\r\npoderosa para mejorar la productividad y eficacia en el aula. Al adoptar un rol más orientado al coaching y menos\r\nenfocado en tareas rutinarias, los educadores pueden dedicar más tiempo a guiar y motivar a los estudiantes en su\r\nproceso de aprendizaje. RVD.AI no solo facilita una enseñanza más personalizada y eficiente, sino que también prepara a\r\nlos estudiantes para el futuro, familiarizándolos con las tecnologías emergentes y fomentando habilidades críticas para\r\nel siglo XXI."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Términos y Condiciones de Uso aplicables a los servicios relacionados con RVD.AI."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Al acceder y/o utilizar el Sitio Web y/o los Servicios ofrecidos en la herramienta educativa de inteligencia artificial\r\nRVD.AI, el usuario (o su representante legal en el caso de menores e incapaces, junto a estos) (en adelante, el\r\n“Usuario”) acepta sujetarse a los presentes Términos y Condiciones de Uso, así como a lo establecido en la Política de\r\nPrivacidad (que describe la Información personal que podría recopilarse, su tratamiento, y cómo podría utilizarse y/o\r\ncompartirse). RVD.AI comprende el sitio web ", (0, _jsxRuntime.jsx)(_components.a, {
                  href: "https://www.rvd.ai/",
                  children: "https://www.rvd.ai/"
                }), " (el “Sitio Web”), interfaces de\r\nprogramación de aplicaciones relacionadas (“APIs”), aplicaciones móviles y servicios en línea, cualquier Contenido\r\nDescargable (conforme dicho término es definido más adelante), y cualquier otro producto o servicio que pueda\r\nproporcionarse ahora o en el futuro en relación con la herramienta RVD.AI (todos ellos, los “Servicios”). Estos Términos\r\ny Condiciones de Uso constituyen un contrato legal entre el Usuario y el Prestador con respecto al uso de los Servicios."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Aceptación de los Términos y Condiciones de Uso en representación de menores e incapaces y en cuentas escolares"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Queda prohibida la utilización de los Servicios por parte de menores de 18 años de edad (en adelante, “Menor de Edad”)\r\ncuyo registro no sea aprobado, según corresponda, por un padre o tutor de forma previa (conforme los términos de los\r\nartículos 24 y 26 del Código Civil y Comercial de la Nación). Al permitir el registro y/o acceso al Sitio Web, el padre\r\no tutor del Menor de Edad, acepta estos Términos y Condiciones de Uso respecto de los Servicios en representación y por\r\nparte del mismo."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Docente (conforme dicho término se define a más adelante), al registrar a un Usuario Estudiante (definido más\r\nadelante) Menor de Edad, manifiesta en nombre y representación de su Institución, contar con el consentimiento previo y\r\npor escrito del padre o tutor del Usuario Menor de Edad respecto de los presentes Términos y Condiciones de Uso."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Al registrar una cuenta para utilizar los Servicios, el Usuario manifiesta que: (i) tiene al menos 18 años de edad y\r\nutilizará los Servicios personalmente como estudiante o en calidad de Docente; (ii) actúa como representante legal de un\r\nestudiante Menor de Edad y acepta los Términos y Condiciones de Uso en nombre de dicho estudiante; o (iii) es Docente y\r\ncuenta con el consentimiento por escrito del representante legal del estudiante Menor de Edad, aceptando los Términos y\r\nCondiciones de Uso en representación del mismo."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Responsabilidad del Representante Legal"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El representante legal del Menor de Edad asume plena responsabilidad por todo uso de los Servicios por parte del Menor\r\nde Edad. Es deber del padre o tutor del Menor de Edad educarlo sobre el uso responsable de los Servicios, incluyendo la\r\nprohibición de enviar cualquier información personal identificable a los mismos. El padre o tutor también debe\r\nsupervisar el acceso del Menor de Edad a los Servicios, más allá de cualquier delegación práctica en los Docentes que\r\nacompañen al Menor de Edad en el uso de estas herramientas."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador se reserva el derecho de ejercer acciones legales contra cualquier individuo que altere o falsifique sus\r\ndatos personales, o que de cualquier otra manera proporcione información falsa sobre su identidad. Sin embargo, el\r\nUsuario, y su representante legal si corresponde, reconocen que el Prestador no es responsable, ni puede garantizar la\r\nexactitud de la información recibida de los Usuarios, y que el Prestador no está obligado a verificar la identidad de\r\nningún Usuario, incluyendo la verificación de si una persona identificada por un usuario Menor de Edad o un tercero\r\ndurante el registro es realmente el padre o tutor del Menor de Edad. Las cuentas de los Usuarios podrán ser canceladas\r\npor el Prestador en cualquier momento y sin previo aviso por cualquier violación de estos Términos y Condiciones de Uso."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Rol del Docente"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador puede poner a disposición ciertas herramientas para permitir que los Usuarios registrados como profesores,\r\nauxiliares, administradores o directores escolares u otro personal similar (“Docente”) trabajen con Usuarios Estudiantes\r\na través de los Servicios para proporcionar servicios educativos, tutorías y otros servicios vinculados con el plan de\r\nestudios de la Institución Educativa, y para revisar y evaluar el progreso educativo de dichos estudiantes."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los Servicios y el Sitio Web se proporcionan exclusivamente al Docente para fines educativos como parte del plan de\r\nestudios de la Institución Educativa a la que pertenecen. El Docente es responsable de verificar que su uso, y forma de\r\nuso de los Servicios está permitido y cumple con los lineamientos de su Institución Educativa y todas las políticas y\r\nregulaciones gubernamentales aplicables. El Docente se compromete a no reproducir, copiar, vender o explotar de ninguna\r\nmanera comercial cualquier parte de los Servicios, ya sea parcial o íntegramente, excepto en los casos en que esto haya\r\nsido expresamente previsto y acordado con el Prestador."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Docente, en representación de la Institución Educativa a la que pertenece, asume toda responsabilidad por obtener de\r\nforma previa los consentimientos por escrito requeridos de los padres o tutores, y también se compromete a divulgar\r\ninformación adecuada a los Usuarios Estudiantes y a sus padres o tutores sobre el uso de los Servicios, estos Términos y\r\nCondiciones de Uso, y la Política de Privacidad. El Docente que registra una cuenta para un Usuario Estudiante\r\nmanifiesta que ha obtenido un consentimiento expreso y por escrito del padre o tutor legal del Usuario Estudiante para\r\nel registro del mismo y para proporcionar al Prestador la información correspondiente al Usuario Estudiante. El\r\nPrestador se reserva el derecho de solicitar, en cualquier momento, que el Docente (o la institución) le facilite el\r\nconsentimiento proporcionado por los padres o tutores legales."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En Argentina, la recolección de datos personales está sujeta a la Ley de Protección de Datos Personales (Ley 25.326).\r\nEsta ley establece los parámetros que debe observarse respecto de los datos asentados en archivos, registros y bases de\r\ndatos para garantizar el derecho al honor y a la intimidad de las personas. ​ La ley prohíbe usar tales datos a un fin\r\ndistinto al propósito para el que fueron recolectados. Entre otras cosas, la Ley de Protección de Datos Personales (en\r\nadelante, la “Ley de Privacidad Aplicable”) exige: a) que los datos personales que se recojan a los efectos de su\r\ntratamiento deben ser ciertos, adecuados, pertinentes y no excesivos en relación con el ámbito y finalidad para los que\r\nse hubieren obtenido; b) no puede llevarse a cabo por medios desleales o fraudulentos; c) no pueden ser utilizados para\r\nfinalidades distintas o incompatibles con aquellas que motivaron su obtención; d) Los datos deben ser exactos y\r\nactualizarse en el caso de que ello fuere necesario; e) Los datos deben ser almacenados de modo que permitan el\r\nejercicio del derecho de acceso de su titular; y f) deben ser destruidos cuando hayan dejado de ser necesarios o\r\npertinentes a los fines para los cuales hubiesen sido recolectados. Los Docentes que utilicen los Servicios, en su\r\nnombre y en representación de las Instituciones Educativas, se comprometen a cumplir con estas disposiciones y toda otra\r\ncontenida en la Política de Privacidad, y cumplir con toda medida de seguridad y confidencialidad para proteger el honor\r\ny la intimidad de los Usuarios Estudiantes."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Docente, de forma personal y en representación de la Institución a la que pertenece, asume la responsabilidad (y por\r\nla presente está de acuerdo en que el Prestador no sea responsable) de proporcionar notificaciones y avisos apropiados a\r\nlos Estudiantes que utilizan los Servicios y a sus padres o tutores respecto al uso del Estudiante de los Servicios, del\r\nSitio Web, los Términos y Condiciones de Uso, y la Política de Privacidad. Asimismo, el Docente asume la responsabilidad\r\n(y por la presente está de acuerdo en que el Prestador no es responsable) de obtener cualquier consentimiento requerido\r\nde los padres o tutores, en relación con los Servicios, uso del Sitio Web, y la divulgación de datos personales al\r\nPrestador en relación con el mismo. El Docente declara y garantiza al Prestador que, antes de la creación de cuentas\r\npara uso educativo, ha obtenido todos los consentimientos necesarios del padre o tutor legal."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Seguridad de las Cuentas de Usuario"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Usuario es el único responsable de mantener la confidencialidad de su identificación de Usuario y su contraseña, y\r\nacepta asumir la responsabilidad por todas las actividades que se realicen con su cuenta o contraseña. En el caso de los\r\nMenores de Edad, esta responsabilidad será supervisada y/o asumida por los padres o tutores y/o, de corresponder, por el\r\nDocente. Si el Usuario tiene motivos para creer que su cuenta ya no es segura (por divulgación o uso no autorizado de su\r\nidentificación de cuenta o contraseña), deberá notificar inmediatamente al Soporte del Prestador."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Usuario declara su conformidad con que la información proporcionada al Prestador, ya sea durante el registro o en\r\ncualquier otro momento, será veraz, correcta, completa y actualizada.  Asimismo, se compromete a, y garantiza que, esta\r\ninformación se mantenga actualizada en todo momento."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Acceso a la cuenta a través de un Servicio Integrado"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador puede permitir al Usuario registrarse para los Servicios a través de, o de otro modo asociar su cuenta con,\r\nciertos servicios de terceros, tal como Google Classroom (“Servicio Integrado”). Al registrarse en los Servicios\r\nutilizando, o de otro modo conceder acceso a, un Servicio Integrado, acepta que el Prestador pueda acceder a la\r\ninformación de su cuenta del Servicio Integrado, y pueda almacenar y utilizar cierta información asociada con la misma,\r\nde manera consistente con la Política de Privacidad, y acepta todos y cada uno de los términos y condiciones del\r\nServicio Integrado respecto a su uso de los Servicios a través de aquel."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Usuario puede revocar el acceso del Prestador a su cuenta en el Servicio Integrado mediante los ajustes de cuenta\r\nrespectivos. El Usuario deberá verificar los ajustes de su cuenta en cada Servicio Integrado para comprender la\r\ninformación que se envía al Prestador a través de cada Servicio Integrado. El Prestador no controla las prácticas de los\r\nServicios Integrados, por lo que deberá leer la política de privacidad y los términos y condiciones de todo Servicio\r\nIntegrado que utilice."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Tratamiento de los datos"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Usuario acepta que el Prestador podría recopilar, transmitir, usar, almacenar y tratar los datos de uso y los datos\r\npersonales del Usuario en otro país, incluido los Estados Unidos de Norteamérica. Todo ello conforme la Política de\r\nPrivacidad."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Restricción de Uso de los Servicios fuera de la República Argentina"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El acceso y uso del Servicio y del Sitio Web se encuentra limitado exclusivamente a la República Argentina. El acceso y\r\nuso de los Servicios desde otras jurisdicciones podría estar prohibido o restringido por la legislación local aplicable\r\nen cada caso, o podría representar una violación a leyes o regulaciones, incluidas entre otras, las Leyes de privacidad\r\naplicables; En tal caso, el Usuario será el único responsable del acceso y uso no autorizado de los Servicios fuera del\r\nterritorio de la República Argentina."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Asistente de IA"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["El uso del asistente de IA proporcionado como parte de los Servicios (el “Asistente de IA”) utiliza nuevas tecnologías y\r\nfunciones de inteligencia artificial (“IA”) que se encuentran en una fase temprana de desarrollo y puede cometer\r\nerrores. Es obligación del Usuario educarse a sí mismo sobre el uso responsable de la IA en general y de la IA\r\ngenerativa en particular para hacer uso del Asistente de IA. A modo de ejemplo, se indica que los Usuarios deben ser\r\nconscientes de que el Asistente de IA puede cometer errores y brindar información incorrecta o incompleta, por lo que el\r\nUsuario necesita comprobar la respuesta recibida. El Usuario, y los Menores de Edad que en su caso deberán contar con la\r\nsupervisión de un adulto, deben controlar y supervisar su interacción con el Asistente de IA. Al aceptar los Términos y\r\nCondiciones de Uso del Prestador el Usuario manifiesta conocer, entender y aceptar las políticas de uso\r\n(", (0, _jsxRuntime.jsx)(_components.a, {
                  href: "https://openai.com/es/policies/terms-of-use",
                  children: "https://openai.com/es/policies/terms-of-use"
                }), ") y tratamiento de datos\r\n(privacidad) (", (0, _jsxRuntime.jsx)(_components.a, {
                  href: "https://openai.com/es/policies/privacy-policy",
                  children: "https://openai.com/es/policies/privacy-policy"
                }), ") que\r\naplican al uso del Asistente de IA, y lo por tanto, de ChatGPT, DALL-E y otros servicios de OpenAI (OpenAI, L.L.C. es\r\nuna compañía de Delaware)."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Usuario reconoce y acepta que los resultados del Asistente de IA o de otros Servicios habilitados para IA pueden\r\nincluir errores, pueden reflejar información sesgada, incompleta o incorrecta, pueden proporcionar respuestas objetables\r\nu ofensivas, pueden no tener en cuenta acontecimientos o cambios en los hechos subyacentes que se produzcan después de\r\nque se haya entrenado el modelo de IA, y tienen otras limitaciones. En este sentido, el Usuario manifiesta entender que\r\nno debe confiar en las afirmaciones de los resultados sin comprobar independientemente su exactitud y que los resultados\r\npueden parecer precisos debido a su detalle o especificidad, pero contener inexactitudes materiales."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Política de Privacidad  "
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La privacidad del Usuario es importante para el Prestador.  En la Política de Privacidad (que forma del integrante del\r\npresente acuerdo con el Usuario), se presenta información relacionada con la recopilación, uso, tratamiento, protección\r\ny divulgación de los datos personales y otra Información del Usuario por parte del Prestador. Al utilizar los Servicios,\r\nel Usuario acepta las prácticas de recopilación y uso de datos según se describe en la Política de Privacidad del\r\nPrestador."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Modificación de los Términos y Condiciones de Uso"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Al abrir una cuenta, el Usuario acepta los Términos y Condiciones de Uso. El Prestador se reserva el derecho, a su\r\nentera discreción, de cambiar, modificar, añadir, o quitar partes de los Servicios, así como de los Términos y\r\nCondiciones de Uso, en cualquier momento.  Todo cambio a los Términos y Condiciones de Uso será publicado con diez (10)\r\ndías corridos de anticipación para que los Usuarios puedan revisarlos. El Usuario deberá verificar los Términos y\r\nCondiciones de Uso periódicamente para conocer cualquier eventual cambio que pudiera hacerse después de abrir su cuenta.\r\nEl uso posterior de los Servicios seguido a la publicación de cambios y su entrada en vigencia constituye su aceptación\r\nde tales cambios a los Términos y Condiciones de Uso. En caso de no estar de acuerdo con los Términos y Condiciones de\r\nUso modificados, el Usuario deberá suspender su uso de los Servicios de forma inmediata."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Contenido y propiedad del usuario"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los Servicios incluyen funciones que permiten o podrían permitir a los Usuarios: (a) colocar y/o publicar preguntas,\r\ncomentarios, notas, evaluaciones, imágenes, videos y otros materiales audiovisuales de comunicación propios o de\r\nterceros; (b) crear, publicar o modificar código de programación informática, incluyendo códigos fuente y códigos\r\nobjeto; y (c) proporcionar información al Asistente de IA, y recibir información generada y devuelta por dicho asistente\r\n(todo ello, colectivamente, “Contenido de Usuario”). El Usuario entiende que, si se publica o no el Contenido de\r\nUsuario, el Prestador no garantiza la confidencialidad del mismo. El Usuario conserva todos los derechos de propiedad\r\nque tenga respecto de cualquier Contenido de Usuario que coloque o publique en los Servicios, y el Prestador no reclama\r\nningún derecho de propiedad respecto de tal Contenido de Usuario."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador se reserva el derecho a su entera discreción, pero no tiene obligación alguna, de determinar si algún\r\nContenido de Usuario configura una conducta prohibida, y puede rechazar, eliminar o editar dicho Contenido de Usuario,\r\npudiendo eliminar el acceso del Usuario a los Servicios en cualquier momento con base en el incumplimiento de estos\r\nTérminos y Condiciones de Uso."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Usuario reconoce que, debido a la naturaleza del aprendizaje automático y a la tecnología que impulsa el Asistente de\r\nIA, es posible que su contenido no sea único y que otros usuarios reciban en respuesta el mismo contenido o uno similar.\r\nEn este mismo sentido, el Usuario será responsable del Contenido de IA que genere, y de que su uso no infrinja los\r\nderechos de propiedad intelectual de terceros, ni viole ninguna ley aplicable, o estos Términos y Condiciones de Uso."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El contenido de IA está destinado al uso personal y no a generar contenido para su publicación generalizada. Es\r\nresponsabilidad del Usuario revisar los resultados y verificarlos con fuentes fiables antes de compartirlos. Puede optar\r\npor compartir el Contenido de IA que genere para cualquier fin legal, personal, no comercial, en las siguientes\r\ncondiciones: (i) el papel de IA en la formulación del contenido se indica de forma clara y destacada; (ii) el contenido\r\nse atribuye a nombre del Usuario u organización, según corresponda; y (iii) el Usuario debe revisar el Contenido de IA\r\npara garantizar el cumplimiento de estos Términos y Condiciones de Uso.  Se destaca que es responsabilidad del Usuario\r\nrevisar los resultados devueltos por la IA y verificarlos con fuentes acreditadas antes de aceptarlos como exactos y/o\r\ncompartirlos."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Compromiso del Usuario"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Usuario garantiza y acepta que no proporcionará ningún Contenido de Usuario o utilizará de otro modo los Servicios en\r\nuna forma que: (i) infrinja o viole los derechos de propiedad intelectual de otros, derechos de privacidad, u otros\r\nderechos; (ii) viole cualquier ley o norma que haga que el Prestador infrinja cualquier ley o norma aplicable,\r\nincluyendo sin limitación, las leyes de privacidad aplicables; (iii) sea dañino, fraudulento, difamatorio, obsceno,\r\ncalumnioso o de otra manera su conducta sea reprochable; o (iv) ponga en peligro la seguridad de su cuenta o los\r\nServicios de cualquier manera, tal como permitirle a alguien más acceder a su cuenta o contraseña o la presentación de\r\nContenido de Usuario que contenga virus."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Declaraciones y Garantías"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Usuario declara, garantiza y acepta que (i) posee y poseerá en todo caso todos los derechos necesarios para\r\nproporcionar su Contenido de Usuario y concede al Prestador una licencia gratuita y universal sobre tales derechos\r\nmediante la aceptación de estos Términos y Condiciones de Usuario; y (ii) cumplirá con todas las leyes aplicables en\r\nrelación con su uso del Servicio."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Concesión de licencia al Prestador"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Mediante la publicación, envío o distribución del contenido de usuario en o a través de los Servicios, por la presente\r\nel Usuario concede al Prestador un derecho universal, no exclusivo, transferible, licenciable, gratuito y libre de\r\nregalías, y una licencia para alojar, transferir, mostrar, realizar, reproducir, distribuir, preparar trabajos derivados\r\nde, usar, importar, y explotar de otro modo Contenido de Usuario, en su totalidad o en parte, en cualesquiera formatos\r\nmultimedia y a través de canales multimedia (ahora conocidos, o desarrollados posteriormente, de manera consistente con\r\nla ley aplicable y la Política de Privacidad del Prestador). Dicha licencia es perpetua e irrevocable, salvo por lo que\r\nhace al cumplimiento de la Ley de Privacidad aplicable relacionada con la propiedad y control de los datos personales\r\ndel Usuario, incluyendo sus registros educativos."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Concesión de Licencia a Usuarios. Publicaciones de Usuario."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Mediante la publicación, envío o distribución de publicaciones del Usuario a través de los Servicios, por la presente\r\neste concede a cada Usuario de los Servicios una licencia no exclusiva para acceder y utilizar sus publicaciones de\r\ncualquier manera permitida o disponible por el Prestador o a través de los Servicios."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Contenido descargable"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los Servicios pueden permitirle descargar aplicaciones móviles o cierto contenido digital (“Contenido Descargable”).\r\nSujeto al cumplimiento de todos los términos y condiciones establecidos en el presente, el Prestador le concede una\r\nlicencia revocable, no sublicenciable, no transferible, no exclusiva, y limitada, para descargar, instalar, visualizar y\r\nutilizar el Contenido Descargable, en dispositivos de propiedad o controlados por el Usuario, únicamente para sus\r\npropósitos personales, no comerciales.  El Usuario manifiesta estar de acuerdo en no (i) modificar o crear trabajos\r\nderivados del Contenido Descargable; (ii) eliminar, desactivar, evadir o de otro modo crear o implementar cualquier\r\nmétodo alternativo que evada cualquier protección de copias, derechos de gestión, limitaciones técnicas o funciones de\r\nseguridad en, o protegiendo, el Contenido Descargable, y (iii) eliminar cualquier indicación de derecho de autor y otros\r\navisos de propiedad en el Contenido Descargable y/o todas las copias del mismo."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Acceso al Contenido de Usuario"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador puede permitir a los Usuarios compartir su Contenido de Usuario con un grupo determinado de otros Usuarios,\r\no hacer público su contenido de usuario para que todos los Usuarios puedan acceder al mismo. Asimismo, podría proveer\r\nherramientas a fin de deshabilitar el acceso al mismo por parte de terceros. El Prestador no garantiza que dicho\r\nContenido de Usuario no será accesible para terceros de forma irregular, por lo que mediante la presente se deslinda de\r\ntoda responsabilidad con respecto a cualquier acceso no autorizado a cualquier Contenido de Usuario restringido."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Liberación de Responsabilidad del Contenido de Usuario"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Usuario manifiesta comprender que cuando utilice los Servicios estará expuesto a contenido de una variedad de\r\nfuentes, y que el Prestador no es responsable de la precisión, utilidad, o derechos de propiedad intelectual\r\nrelacionados con dicho contenido, a menos que expresamente manifieste lo contrario en cada caso. El Usuario manifiesta\r\nentender y reconoce que puede exponerse a contenido que es inapropiado, ofensivo, indecente o censurable, y por la\r\npresente renuncia a realizar cualquier reclamo, y a ejercer cualquiera derecho o recurso legal que pudiera intentarse\r\ncontra el Prestador con respecto a los mismos. El Prestador no respalda ningún contenido, opinión, recomendación o\r\nconsejo expresado en dicho contenido, y se deslinda expresamente de todas y cada una de las responsabilidades en\r\nrelación con todo contenido, salvo manifestación expresa en contrario en cada oportunidad."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Propiedad de los Materiales; Licencias"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Todo el contenido proporcionado a través del Servicio, incluidos textos, imágenes y tecnología de IA, está protegido por\r\nderechos de propiedad intelectual y son propiedad del Prestador o sus licenciantes.  Todos los productos, marcas,\r\nnombres comerciales, logos, diseños, imágenes, frases publicitarias, derechos de autor, dominios, programas de\r\ncomputación, códigos (incluyendo el código fuente o código objeto), desarrollos, software, interfaces visuales,\r\ngráficas, bases de datos, información, tecnología, patentes y modelos de utilidad, diseños, modelos industriales,\r\nsecretos comerciales, y todos los otros elementos de los Servicios, están protegidos por leyes y convenciones\r\ninternacionales en materia de derechos de autor, patentes y marcas, y otras leyes aplicables que rigen la propiedad\r\nintelectual y los derechos de propiedad, y son propiedad del Prestador o han sido licenciados al mismo, y el Prestador\r\nser reserva todos los derechos correspondientes a estos. Ningún derecho se concede sobre los elementos indicados\r\npreviamente de ningún modo, a excepción de que sea expresamente y por escrito."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Contenido Educativo con Licencia"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador puede poner a disposición de los Usuarios en los Servicios cierto contenido educativo, ejercicios, y\r\nmateriales complementarios relacionados que son propiedad del Prestador o sus terceros licenciantes (el “Contenido\r\nEducativo con Licencia”). El Prestador concede al Usuario un derecho no transferible, no exclusivo para acceder y\r\nutilizar el Contenido Educativo con Licencia puesto a disposición en los Servicios por el Prestador únicamente para sus\r\npropósitos personales, no comerciales. A menos que se indique expresamente en sentido contrario el Usuario no podrá\r\ndescargar, distribuir, vender, alquilar, modificar, o de otro modo proporcionar acceso al Contenido Educativo con\r\nLicencia a ningún tercero, ni hacerlo a otro fin que el indicado previamente. Todo Contenido puesto a disposición de los\r\nUsuarios lo es solo para uso no comercial. Dicho Contenido no puede utilizarse, distribuirse, o explotarse de otro modo,\r\npara cualquier propósito comercial, ventaja comercial o compensación monetaria privada; a menos que previamente el\r\nPrestador lo indique de otro modo por escrito."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Sitios y Productos de Terceros"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los Servicios pueden incluir enlaces o referencias a otros sitios web o productos de terceros únicamente como comodidad\r\npara los Usuarios (“Sitios de Referencia”).  el Prestador no avala ningún Sitio de Referencia o la información,\r\nmateriales, productos, o servicios contenidos, o accesibles, a través de los Sitios de Referencia. El acceso y uso de\r\nlos sitios de referencia, incluyendo la información, materiales, productos y servicios en o a través de los Sitios de\r\nReferencia disponibles, es sólo bajo propio riesgo del Usuario."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Vigencia"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Estos Términos y Condiciones de Uso permanecerán en pleno vigor y efecto mientras el Usuario utilice los Servicios a\r\nmenos que su cuenta se dé por terminada según lo dispuesto en estos Términos, en cuyo caso ya no tendrá el derecho de\r\nutilizar los Servicios. Estos Términos y Condiciones de Uso permanecerán vigentes en su parte pertinente, luego de la\r\nterminación de la cuenta, por todo el plazo en que la información del Usuario o Contenido vinculado al mismo se\r\nencuentre almacenada en poder del Prestador."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Terminación por el Prestador."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador podrá, a su entera discreción, sin necesidad de esgrimir motivos, y sin penalización, en cualquier momento,\r\ny con o sin aviso, restringir, suspender, inhabilitar temporalmente o poner fin a cualquier cuenta de Usuario, su acceso\r\ny uso de los Servicios y/o eliminar dicha cuenta, el perfil y el Contenido de Usuario. El Usuario acepta que el\r\nPrestador no será responsable de ningún modo por tal terminación y las consecuentes acciones indicadas. El Prestador no\r\ntolera actividades que infrinjan derechos de autor, marcas registradas, u otras actividades que infrinjan la propiedad\r\nintelectual en los Servicios, y pondrá fin al acceso a los Servicios, y podrá eliminar todo el Contenido de Usuario u\r\notro contenido presentado por cualquier Usuario que sea considerado infractor de estos."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Terminación por el Usuario"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ante cualquier insatisfacción con los Servicios o el Sitio Web, o con cualquier práctica del Prestador en la operación\r\nde los mismos, o con cualquier contenido o información transmitida a través de estos, o a las políticas aplicables, la\r\núnica solución con la que cuenta el Usuario será dar por terminada su cuenta y acceso a los Servicios. La terminación de\r\ncuenta de usuario no limitará los derechos y recursos del Prestador con respecto al incumplimiento de estos Términos y\r\nCondiciones de Uso que ocurran antes de tal terminación."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Indemnidad del Prestador"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Usuario acepta indemnizar, defender, y eximir de responsabilidad al Prestador, y a sus empresas relacionadas,\r\nfuncionarios, empleados, y licenciantes, de y contra, perdidas, daños, demandas, juicios, costos y gastos de cualquier\r\ntipo (incluyendo honorarios y gastos de representación), de cualquier reclamo o demanda hecha por cualquier tercero en\r\nrelación a, o que surja como resultado del (i) uso indebido de los Servicios por parte del Usuario; (ii) su\r\nincumplimiento de estos Términos y Condiciones de Uso; y/o (iii) su incumplimiento de las leyes aplicables. El Prestador\r\nse reserva el derecho, a costa del Usuario, de asumir la defensa y control exclusivos de cualquier asunto para el cual\r\nse le solicite indemnizar al Prestador. El Usuario acepta no resolver ningún reclamo sin el consentimiento previo por\r\nescrito del Prestador. El Prestador utilizará esfuerzos razonables para notificarle a la brevedad de cualquier reclamo,\r\nacción, o procedimiento."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Liberación de Responsabilidad- Sin Garantías"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Sitio Web, todos los datos, información, software, contenido del mismo, contenido de usuario, sitios de referencia,\r\nServicios, o aplicaciones puestas a disposición, son proporcionados como se presentan y no se garantiza la inexistencia\r\nde fallas. El Prestador no garantiza que el Sitio Web o ningún dato, Contenido de Usuario, funciones, o ninguna otra\r\ninformación ofrecida en o a través del Sitio Web o los Servicios sea ininterrumpida, o libre de errores, virus u otros\r\ncomponentes dañinos, y no garantiza que ninguno de los anteriores se corregirá."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Limitación de Responsabilidad"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Usuario acuerda irrevocable y expresamente la renuncia de conformidad con la Ley al ejercicio de cualquier acción de\r\nresponsabilidad por daños y perjuicios indirectos o consecuenciales, lucro cesante, pérdida de chance o negocios,\r\npérdida de ingresos o beneficios, pérdida de datos, o cualquier otra pérdida o daño patrimonial o no patrimonial de\r\ncualquier otra naturaleza, y/o cualquier consecuencia derivada de estas, utilidad y/o oportunidades en los que hubiera\r\npodido incurrir, perdida de uso de cualquier equipamiento asociado, por causa del Prestador (y/o de terceros por los que\r\neste deba responder), todo ello salvo dolo. En todo caso, la responsabilidad del Prestador se limitará en los términos\r\nprevios hasta la medida máxima permitida por la ley aplicable."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Interacciones entre Usuario"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador no es responsable de las acciones, contenido, información y/o datos de terceros, incluyendo otros Usuarios.\r\nEl Usuario es el único responsable de sus interacciones con otros usuarios de los Servicios, y cualquier otra parte con\r\nquien interactúe a través del Servicio."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Notificaciones"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador puede remitirle notificaciones, incluyendo aquellas con respecto a cambios en los Términos y Condiciones de\r\nUso o la Política de Privacidad, por correo electrónico, publicación en los Servicios, u otros medios razonables. Tales\r\nnotificaciones se considerarán entregadas veinticuatro horas después de que se envió el correo electrónico o se publicó\r\nen los Servicios. Toda notificación que deba ser dirigida al Prestador deberán ser enviados por medio fehaciente. A\r\ndicho fin, el Prestador establece su domicilio en la calle Maipú 116, Piso 8 (C1084ABD) de la Ciudad Autónoma de Buenos\r\nAires, Argentina."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Ley Aplicable"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La prestación de los Servicios, así como los presentes Terminos y Condiciones de Uso se regirán por la Ley de la\r\nRepública Argentina. Durante la vigencia de los mismos, el Usuario deberá cumplir y observar fielmente la Ley, y todas\r\nlas normas que resulten aplicables, y cumplir con las disposiciones normativas que de alguna forma sean aplicables al\r\nUsuario."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Resolución de controversias – Arbitraje y Jurisdicción"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador y el Usuario se comprometen a interpretar y cumplir los Términos y Condiciones de Uso de buena fe,\r\nprocurando resolver en tiempos razonables y por medio de negociaciones y consultas mutuas cualquier diferencia que\r\npudiera surgir entre ellas respecto de la aplicación, desarrollo, cumplimiento, interpretación y ejecución de los\r\nmismos. De Suscitarse un conflicto entre dichas partes en relación a los Términos y Condiciones de Uso, su existencia,\r\nvalidez, calificación, interpretación, alcance, cumplimiento o resolución, el Prestador y el Usuario intentarán resolver\r\nla cuestión de buena fe y de común acuerdo conforme al siguiente procedimiento:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Dentro de los veinte (20) días hábiles contados desde la fecha en que cualquiera de estos notifique por escrito a la\r\notra parte que existe un reclamo, disputa o controversia, especificando claramente el motivo y alcance, ambas partes\r\nintentarán resolver la cuestión mediante negociaciones informales de buena fe. Si en dicho plazo no se alcanzare un\r\nacuerdo, cualquiera de estas partes podrá someter la cuestión a arbitraje de acuerdo al siguiente procedimiento:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Toda controversia que se suscite entre el Usuario y el Prestador con relación a los Términos y Condiciones de Uso y/o\r\nrelacionados con los Servicios, su existencia, validez, calificación, interpretación, alcance, cumplimiento o\r\nresolución, que no haya sido resuelta de acuerdo al procedimiento informal indicado previamente, se resolverá\r\ndefinitivamente por el Tribunal de Arbitraje General de la Bolsa de Comercio de Buenos Aires de acuerdo con su\r\nreglamentación vigente para el arbitraje de derecho que las partes conocen y aceptan. La sede del arbitraje será la\r\nCiudad Autónoma de Buenos Aires y el idioma será el español. El laudo arbitral dictado por el Tribunal Arbitral será\r\nescrito e indicará con razonable detalle los hechos registrados y los motivos de la decisión del Tribunal Arbitral. Los\r\ncostos y costas del arbitraje serán asumidos por la parte que obtenga el laudo desfavorable, en tanto que de resultar un\r\nlaudo favorable o desfavorable para ambas partes el Tribunal Arbitral determinará la proporción de costos y costas a\r\ncargo de cada una de estas. La decisión del Tribunal Arbitral será final, definitiva y obligatoria para las partes,\r\nrazón por la cual estas renuncian al derecho de recurrir o apelar dicha decisión ante cualquier tribunal. No obstante,\r\nqueda expresamente acordado que podrán solicitar la intervención de los tribunales judiciales competentes para la\r\nobtención de medidas cautelares, diligencias preliminares, medidas de prueba anticipada y/o para hacer efectivas las\r\ndecisiones del Tribunal Arbitral, incluyendo la ejecución de decisiones relacionadas con la incorporación al proceso\r\narbitral de pruebas documentales y testimoniales; y/o para revisar y recurrir temas concernientes a honorarios de\r\nperitos, árbitros y/u otros profesionales; y/o para obtener el cumplimiento y ejecución de la respectiva decisión del\r\nTribunal Arbitral. En caso de declararse incompetente el Tribunal Arbitral designado en virtud del presente apartado, o\r\nsi su constitución fuera imposible para los supuestos previstos precedentemente, El Prestador y el Usuario acuerdan\r\nirrevocablemente someter en tales casos sus controversias, y asuntos relacionados, a los Tribunales Ordinarios\r\nNacionales con asiento en la Ciudad Autónoma de Buenos Aires, República Argentina, o cualquier tribunal que los suceda,\r\nrenunciando expresamente a cualquier otro fuero o jurisdicción que pudiese corresponderles, así como al derecho de\r\nrecusar sin causa."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Cesión"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Cualquier derecho y licencia otorgados en virtud de los presentes Términos y Condiciones de Uso, no podrán transferirse\r\no cederse por el Usuario sin el consentimiento previo y por escrito del Prestador. El Prestador puede cederlos sin\r\nconsentimiento, o restricción alguna.  Cualquier cesión que se pretenda hacer en violación de los Términos y Condiciones\r\nde Uso será nula e inválida."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Supervivencia de previsiones"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A la terminación de la vigencia de los Términos y Condiciones de Uso, cualquier disposición que, por su naturaleza, o en\r\nvirtud de sus términos expresos, deba sobrevivir, seguirá vigente a tal terminación o vencimiento."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "**"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfYXBwbGljYXRpb24iLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiYXBwbGljYXRpb24iLCJjb250ZW50IiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiQXBwbGljYXRpb24iLCJnbG9iYWxUaGlzIiwicGFnZSIsInJlYWR5IiwiX3JlYWN0IiwiTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9jb250ZXh0IiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJfcHJpdmFjeSIsIl90ZXJtc0FuZENvbmRpdGlvbnMiLCJ2YWx1ZSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ2aWV3Iiwic2V0VmlldyIsInVzZUJpbmRlciIsIlZJRVdTIiwicHJpdmFjeSIsInRlcm1zIiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJDb250cm9sIiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJfanN4UnVudGltZSIsImpzeCIsImEiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy92aWV3c1xccHJpdmFjeS5tZHgiLCIvdHMvdmlld3Mvdmlld3NcXHRlcm1zLWFuZC1jb25kaXRpb25zLm1keCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3Mi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