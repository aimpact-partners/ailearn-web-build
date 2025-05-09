System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/http-suite@0.1.0/api", "@beyond-js/reactive@2.0.5/entities/item", "@beyond-js/reactive@2.0.5/entities/collection", "@aimpact/chat-sdk@1.5.4/core", "@beyond-js/reactive@2.0.5/model", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Activity, Assignments, Assignment, Credits, TrackingDashboard, ParticipantProvider, Tracking, IActivityListItem, IActivityBase, TrackingStatusType, IActivityTrackingBase, IDashboard, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    Assignments: void 0,
    Assignment: void 0,
    Credits: void 0,
    TrackingDashboard: void 0,
    ParticipantProvider: void 0,
    Tracking: void 0,
    IActivityListItem: void 0,
    IActivityBase: void 0,
    TrackingStatusType: void 0,
    IActivityTrackingBase: void 0,
    IDashboard: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_1 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk154Session) {
      dependency_2 = _aimpactChatSdk154Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_3 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_4 = _beyondJsHttpSuite010Api;
    }, function (_beyondJsReactive205EntitiesItem) {
      dependency_5 = _beyondJsReactive205EntitiesItem;
    }, function (_beyondJsReactive205EntitiesCollection) {
      dependency_6 = _beyondJsReactive205EntitiesCollection;
    }, function (_aimpactChatSdk154Core) {
      dependency_7 = _aimpactChatSdk154Core;
    }, function (_beyondJsReactive205Model) {
      dependency_8 = _beyondJsReactive205Model;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_9 = _aimpactAilearnSdk120Config;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_10 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_11 = _aimpactAilearnSdk120EntitiesClassrooms;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.0"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/tracking"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/startup', dependency_1], ['@aimpact/chat-sdk/session', dependency_2], ['@aimpact/media-manager/uploader', dependency_3], ['@beyond-js/http-suite/api', dependency_4], ['@beyond-js/reactive/entities/item', dependency_5], ['@beyond-js/reactive/entities/collection', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/ailearn-sdk/config', dependency_9], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_10], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_11]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./HADERCODED
      ****************************/
      ims.set('./HADERCODED', {
        hash: 4029911701,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HARDCODED_RESPONSE = void 0;
          const HARDCODED_RESPONSE = exports.HARDCODED_RESPONSE = {
            status: true,
            data: {
              id: '0138c77d-c3ae-4b86-a943-f86320d6cb14',
              classroom: {
                id: '7d1848f3-1a65-4723-a5ad-c085216a51f6',
                name: '1° - Técnicas de Mezcla',
                picture: ''
              },
              module: {
                id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                creator: {
                  id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                  name: 'Docente Mezcla Tamaba',
                  photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                },
                owner: {
                  id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                  name: 'Instituto Terciario Tamaba',
                  photoUrl: ''
                },
                language: 'es',
                title: 'Introducción al Estudio de Grabación',
                description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                audience: {
                  category: 'higher-education',
                  level: 'tertiary-education',
                  format: 'Educación Superior',
                  entity: 'Referencias Académicas para Educación Superior'
                },
                activities: {
                  count: 5,
                  types: ['content-theory', 'character-talk', 'debate', 'multiple-choice', 'spoken']
                }
              },
              payer: 'module-owner',
              code: 'AEPSKUT',
              public: false,
              activities: {
                order: ['5b56ad68-53c2-43da-86b9-e7d6c4409966', 'e90b3b7f-2569-491b-8290-2ad1842056e8', 'fe93270f-cd49-430e-81bc-817449c280f0', 'b0074f49-5100-4731-b771-db3befd44577', '5bed3375-873d-414f-a52d-577e382f3091'],
                items: {
                  '5b56ad68-53c2-43da-86b9-e7d6c4409966': {
                    id: '5b56ad68-53c2-43da-86b9-e7d6c4409966',
                    type: 'content-theory',
                    title: 'Explorando el Estudio de Grabación',
                    description: 'Actividad centrada en la identificación y análisis de los dos espacios fundamentales en un Estudio de Grabación.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {
                        article: 'Un estudio de grabación es un espacio diseñado específicamente para la grabación, mezcla y en ciertos casos tambien el proceso de masterización. Comprender los elementos esenciales de un estudio de grabación permite apreciar su papel crucial en el proceso de producción musical.\n\nEl control room es el espacio donde se encuentran los dipositivos que nos permiten realizar las diferentes tareas. La consola Anlogica de Estudio, El Dispositivo de Grabación Multicanal, el Sistema de Monitoreo y los Procesadores de Señal Externos. La importancia radica en que permite al ingeniero de sonido tener un control absoluto sobre todos los aspectos de la grabación o mezcla. Aquí se gestionan las señales que provienen de las diferentes espacios del estudio.\n\nLa sala de grabación, o live room, es donde los músicos ejecutan sus piezas. Esta sala está diseñada para optimizar la acústica y proporcionar un entorno sonoro adecuado. Sus dimensiones y materiales influyen en el resultado final. Es fundamental para la producción musical, ya que facilita la captación de la interpretación de los músicos, asegurando que cada matiz se registre con claridad.\n\nEl tratamiento acústico es un componente fundamental en un estudio de grabación. Este se logra a través de diversas herramientas acusticas, El tratamiento Acustico se divide fundamentalmente en dos instancias. Aislación, terminos de aislar el Recinto donde trabajamos de elementos externos y  viceversa. La otra instancia es el tratamiento de los Recintos del Estudio, para obtener espacios con un comportamiento acorde a los estandares de diversos criterios, relacionados con la respuesta en Frecuencia del Recinto y el RT60.\n\nAdemás, el estudio cuenta con áreas específicas como la Iso Booth, o cabina de aislación, que se utilizan principalmente para grabaciones vocales o de instrumentos donde se requiere un control aún más riguroso de esa fuente sonora y su relación o interacción con otras fuentes sonoras.\n\nLa sala de control es donde se lleva a cabo una parte crítica del proceso de producción musical. Aquí se busca dar forma al sonido final a través de la manipulación de la mezcla de diferentes señales. La calidad de esta sala influye en la decisión sobre niveles, distribución de señales dentro de la iamgen estereo y todas las alternativas de procesamiento. Permitiendo a los productores y músicos articular su visión creativa en el producto final.\n\nEl uso del equipo técnico es otro pilar fundamental en el estudio de grabación. Desde micrófonos y accesorios hasta los mencionados procesadores de señal, cada una de estas herramientas tiene su función específica. La selección del equipo adecuado para cada sesión es crucial, ya que puede alterar radicalmente el sonido obtenido y, por ende, la percepción y recepción de la música por parte del público.\n\nPor último, el personal especializado que opera en un estudio de grabación juega un papel decisivo en el éxito del proceso de producción musical. Tecnicas/os de grabación y Mezcla, Productoras/es, Asistentes trabajan conjuntamente en diferentes etapas, aportando su conocimiento y experiencia para optimizar el resultado final.\n\nEn resumen, un estudio de grabación no es solo un espacio físico, sino un ecosistema complejo donde cada elemento, desde los espacios fisicos hasta el personal, contribuyen al proceso creativo. Conocer estos elementos y sus funciones es fundamental para cualquier alumno que desee profundizar en el ámbito de la producción musical.',
                        synthesis: '- **Estudio de grabación**\n  - Espacio para *grabación*, *mezcla* y en ciertos casos *masterización*\n  - Rol *crucial* en producción musical\n\n- **Control room**\n  - Equipos: \n    - **Consola analógica**\n    - **Grabador multicanal**\n    - **Sistema de monitoreo**\n    - **Procesadores de señal externos**\n  - Control *absoluto* sobre grabación y mezcla\n  - Gestión de *señales* del estudio\n\n- **Sala de grabación (live room)**\n  - Espacio para *ejecución* musical\n  - Diseñada para *optimizar acústica*\n  - Influencia de *dimensiones* y *materiales*\n  - Captación de *matices sonoros* \n\n- **Tratamiento acústico**\n  - Componentes *fundamentales*\n  - **Aislación**: separación de elementos externos \n  - **Tratamiento de recintos**: \n    - Comportamiento acústico acorde a *estándares*\n    - *Respuesta en frecuencia* y *RT60*\n\n- **Iso Booth**\n  - Cabina de *aislación*\n  - Uso en grabaciones de *voces* e *instrumentos*\n  - Control *riguroso* de fuente sonora\n\n- **Sala de control**\n  - *Formación* del sonido final\n  - Manipulación de *mezcla de señales*\n  - Influencia en *niveles* y *distribución* de señales\n  - Permite articular *visión creativa*\n\n- **Equipo técnico**\n  - Herramientas: *micrófonos*, *accesorios*, *procesadores*\n  - Selección adecuada impacta en *sonido* y *percepción*\n\n- **Personal especializado**\n  - Rola clave en el éxito del proceso\n  - Técnicos de *grabación* y *mezcla*\n  - Productores y *asistentes* \n  - Aportan *conocimiento* y *experiencia*\n\n- **Resumen**\n  - Estudio como *ecosistema complejo*\n  - Conocimiento de *elementos* y *funciones* esencial para la producción musical',
                        dyslexia: 'Un estudio de grabación es un lugar donde se crea música y otros sonidos. En este espacio se graba, mezcla. Es importante entender cómo funciona un estudio para valorar su papel en la música.\n\nEl control room es la sala principal. Aquí están los dispositivos que ayudan a grabar y mezclar. Hay una consola que controla el sonido. También hay un dispositivo para grabar muchos sonidos a la vez. La mezcla se escucha en altavoces llamados monitores. Este espacio permite al ingeniero de sonido controlar todo lo que se graba.\n\nLa sala de grabación, o recording room, es el lugar donde los músicos tocan. Está diseñada para que suene bien. La forma y los materiales de la sala afectan cómo se escucha la música. Es clave para grabar la interpretación de los músicos. Así, cada detalle se escucha con claridad.\n\nEl tratamiento acústico es muy importante en un estudio. Esto significa eliminar los ruidos de afuera y mejorar el sonido dentro del estudio. Hay dos partes en el tratamiento acústico. Primero, la aislación, que evita que el ruido exterior entre. Segundo, el tratamiento, que mejora cómo suena el espacio donde se graba.\n\nTambién hay áreas especiales como la Iso Booth, que es una cabina aislada. Se usa para grabar voces e instrumentos de manera más controlada. En este lugar, el sonido se mantiene limpio y sin distracciones.\n\nLa sala de control es donde se produce el sonido final. Aquí se mezcla el sonido de diferentes grabaciones. La calidad de esta sala es muy importante. Ayuda a los productores y músicos a lograr su idea de cómo debe sonar la canción.\n\nEl equipo técnico es esencial en el estudio. Hay micrófonos, procesadores y otros instrumentos que ayudan durante las diferentes etapas. Elegir el equipo correcto es crucial. Esto puede cambiar mucho cómo suena la música, y cómo la escucha el público.\n\nEl personal que trabaja en un estudio es clave. Hay técnicos de grabación, mezcladores y asistentes. Todos colaboran en las diferentes etapas del proceso. Su experiencia mejora el resultado final.\n\nPara resumir, un estudio de grabación es más que solo un lugar. Es un sistema donde cada parte, desde el espacio hasta las personas, ayuda a crear música. Conocer estos elementos es importante para cualquier estudiante que quiera aprender sobre producción musical.',
                        audios: {
                          article: {
                            status: true,
                            url: 'https://ailearn.api.aimpact.partners/activities/5b56ad68-53c2-43da-86b9-e7d6c4409966/materials/article/audio'
                          }
                        }
                      },
                      specs: {
                        topic: 'Espacios del Estudio de Grabación',
                        task: 'Investiga y presenta detalladamente los dos espacios que componen el Estudio de Grabación: la Sala de Control y la Sala de Grabación. Describe sus características, funciones y cómo interactúan entre sí durante el proceso de producción musical. Utiliza ejemplos prácticos y visuales para respaldar tu presentación.',
                        objectives: [{
                          name: 'Identificación de Espacios',
                          objective: 'Reconocer y describir la Sala de Control y la Sala de Grabación como elementos clave en la Producción Musical.'
                        }, {
                          name: 'Análisis Funcional',
                          objective: 'Analizar las funciones específicas y la importancia de cada sala en el proceso de grabación y producción.'
                        }],
                        instructions: 'Presentar los dos espacios fundamentales que componen el Estudio de Grabación. Sala de Control (Control Room), Sala de Grabación (Recording/Tracking Room).'
                      }
                    },
                    settings: {
                      layout: 'main-content-layout'
                    }
                  },
                  'e90b3b7f-2569-491b-8290-2ad1842056e8': {
                    id: 'e90b3b7f-2569-491b-8290-2ad1842056e8',
                    type: 'character-talk',
                    title: 'Conversación con un Productor Musical',
                    description: 'Explora y reflexiona sobre las decisiones técnicas y creativas en un estudio de grabación a través de un diálogo con un famoso productor musical.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {},
                      specs: {
                        role: 'Eres un productor musical reconocido que comparte su experiencia y responde a las preguntas sobre la mezcla y la producción en un estudio.',
                        task: 'Interactúa con el productor musical haciendo preguntas sobre su trabajo en el estudio. Reflexiona sobre las decisiones que toma durante el proceso de mezcla y cómo estas afectan el resultado final de la música. Aprovecha esta oportunidad para aprender sobre las técnicas y la creatividad en la producción musical.',
                        objectives: [{
                          name: 'Decisiones técnicas',
                          objective: 'Entender las decisiones técnicas cruciales al mezclar música.'
                        }, {
                          name: 'Creatividad en producción',
                          objective: 'Fomentar la creatividad al elegir elementos sonoros y técnicas de producción.'
                        }, {
                          name: 'Formulación de preguntas',
                          objective: 'Desarrollar habilidades para formular preguntas relevantes sobre producción musical.'
                        }],
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  },
                  'fe93270f-cd49-430e-81bc-817449c280f0': {
                    id: 'fe93270f-cd49-430e-81bc-817449c280f0',
                    type: 'debate',
                    title: 'Defensa del Estudio de Grabación',
                    description: 'Un debate enfocado en la importancia de los estudios de grabación y los dispositivos analógicos en la producción musical frente a herramientas digitales.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {},
                      specs: {
                        role: 'Docente',
                        subject: 'La relevancia del estudio de grabación de Grbaciòn y los dispositivos analogicos que lo componen como estándar en la producción musical.',
                        task: 'Vas a participar en un debate donde deberás defender la importancia de los estudios de grabación y los dispositivos analógicos en la producción musical. Presenta tus argumentos de manera clara y concisa, y utiliza ejemplos que respalden tu postura. También tendrás que anticipar las objeciones que pueda presentar el chatbot y prepararte para responder a ellas con lógica y claridad.',
                        objectives: [{
                          name: 'Argumentación',
                          objective: 'Desarrollar habilidades de argumentación en la defensa de los estudios de grabación.'
                        }, {
                          name: 'Pensamiento Crítico',
                          objective: 'Fomentar el pensamiento crítico al comparar dispositivos analógicos y digitales.'
                        }, {
                          name: 'Competencias Emocionales',
                          objective: 'Incorporar la autoconfianza y la gestión emocional durante el debate.'
                        }, {
                          name: 'Metacognición',
                          objective: 'Reflexionar sobre el proceso de argumentación y los propios pensamientos en el debate.'
                        }],
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  },
                  'b0074f49-5100-4731-b771-db3befd44577': {
                    id: 'b0074f49-5100-4731-b771-db3befd44577',
                    type: 'multiple-choice',
                    title: 'Evaluación sobre el Estudio de Grabación en Producción Musical',
                    description: 'Esta actividad tiene como objetivo evaluar tu comprensión sobre el funcionamiento y los elementos esenciales de un estudio de grabación, así como su papel en la producción musical.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {
                        assessment: '{"title":"Evaluación sobre el Estudio de Grabación en Producción Musical","questions":[{"question":"¿Cuál es el propósito principal de un estudio de grabación?","options":["Mejorar la calidad visual de las grabaciones","Diseñar espacios para ensayar","Proveer un espacio adecuado para la grabación, mezcla y en ciertos casos la masterización de un Proyecto Musical.  ","Almacenar instrumentos musicales"],"correctAnswer":2},{"question":"¿Qué función cumple la sala de control en un estudio de grabación?","options":["Grabar las voces de los músicos","Cambiar la acústica del recinto","Dar forma al sonido final mediante mezcla","Aislar instrumentos ruidosos"],"correctAnswer":2},{"question":"¿Qué aspecto es fundamental en el tratamiento acústico de un estudio?","options":["La estética de los muebles","La capacitación del personal","La respuesta en frecuencia del recinto y el rt60.","La variedad de instrumentos disponibles"],"correctAnswer":2},{"question":"¿Qué es una Iso Booth en un estudio de grabación?","options":["Una sala destinada para la mezcla","Un espacio para grabaciones en un ambiente controlado","Un área de descanso para los músicos","Un equipo de grabación multicanal"],"correctAnswer":1},{"question":"¿Por qué es importante la selección de equipo técnico en un estudio de grabación?","options":["Asegura que el estudio esté ordenado","Aumenta la velocidad de grabación","Puede alterar radicalmente el sonido obtenido","Facilita el trabajo del personal administrativo"],"correctAnswer":2}]}'
                      },
                      specs: {
                        task: '',
                        objectives: '',
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  },
                  '5bed3375-873d-414f-a52d-577e382f3091': {
                    id: '5bed3375-873d-414f-a52d-577e382f3091',
                    type: 'spoken',
                    title: 'Diferencias en Mezclas de Sonido',
                    description: 'Exposición sobre las diferencias entre la mezcla Out The Box y las mezclas In The Box e Híbrida, mostrando claridad en la comprensión del tema.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {},
                      specs: {
                        assessment: 'El estudiante debe exponer oralmente las diferencias entre los tipos de mezcla indicados. Evalúa la claridad de la presentación, la profundidad del contenido, la estructura lógica de la exposición y el cumplimiento del tiempo asignado. Asegúrate de leer la transcripción del discurso para una evaluación precisa.',
                        criteria: [{
                          name: 'Claridad',
                          subject: 'El estudiante debe presentar sus ideas de manera clara y comprensible, empleando un lenguaje apropiado para el tema abordado.'
                        }, {
                          name: 'Contenido',
                          subject: 'La presentación debe incluir las diferencias clave entre Out The Box, In The Box e Híbrida, evidenciando un buen dominio del tema.'
                        }, {
                          name: 'Estructura',
                          subject: 'La exposición debe tener una introducción clara, un desarrollo coherente y una conclusión que resuma las ideas principales.'
                        }, {
                          name: 'Tiempo',
                          subject: 'El hablante debe realizar la presentación dentro del tiempo estipulado de tres minutos, administrando el tiempo de manera efectiva.'
                        }],
                        task: 'Prepara una exposición de no más de tres minutos sobre las diferencias entre la mezcla Out The Box y las mezclas In The Box e Híbrida. Asegúrate de abordar las características distintivas de cada tipo de mezcla, estructurando tu presentación con una introducción, desarrollo y conclusión clara. Mantén un lenguaje técnico apropiado y asegúrate de terminar tu exposición en el tiempo indicado.',
                        objectives: '',
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  }
                }
              },
              teachers: [{
                uid: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                name: 'Docente Mezcla Tamaba',
                photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
              }],
              archived: false,
              access: 'approved',
              accessed: false,
              community: false
            }
          };
        }
      });

      /****************************
      INTERNAL MODULE: ./HARCODED_2
      ****************************/

      ims.set('./HARCODED_2', {
        hash: 151410810,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HARDCODED2 = void 0;
          const HARDCODED2 = exports.HARDCODED2 = {
            status: true,
            data: {
              id: '0138c77d-c3ae-4b86-a943-f86320d6cb14',
              classroom: {
                id: '7d1848f3-1a65-4723-a5ad-c085216a51f6',
                name: '1° - Técnicas de Mezcla',
                picture: ''
              },
              module: {
                id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                creator: {
                  id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                  name: 'Docente Mezcla Tamaba',
                  photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                },
                owner: {
                  id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                  name: 'Instituto Terciario Tamaba',
                  photoUrl: ''
                },
                language: 'es',
                title: 'Introducción al Estudio de Grabación',
                description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                audience: {
                  category: 'higher-education',
                  level: 'tertiary-education',
                  format: 'Educación Superior',
                  entity: 'Referencias Académicas para Educación Superior'
                },
                activities: {
                  count: 5,
                  types: ['content-theory', 'character-talk', 'debate', 'multiple-choice', 'spoken']
                }
              },
              payer: 'module-owner',
              code: 'AEPSKUT',
              public: false,
              activities: {
                order: ['5b56ad68-53c2-43da-86b9-e7d6c4409966', 'e90b3b7f-2569-491b-8290-2ad1842056e8', 'fe93270f-cd49-430e-81bc-817449c280f0', 'b0074f49-5100-4731-b771-db3befd44577', '5bed3375-873d-414f-a52d-577e382f3091'],
                items: {
                  '5b56ad68-53c2-43da-86b9-e7d6c4409966': {
                    id: '5b56ad68-53c2-43da-86b9-e7d6c4409966',
                    type: 'content-theory',
                    title: 'Explorando el Estudio de Grabación',
                    description: 'Actividad centrada en la identificación y análisis de los dos espacios fundamentales en un Estudio de Grabación.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {
                        article: 'Un estudio de grabación es un espacio diseñado específicamente para la grabación, mezcla y en ciertos casos tambien el proceso de masterización. Comprender los elementos esenciales de un estudio de grabación permite apreciar su papel crucial en el proceso de producción musical.\n\nEl control room es el espacio donde se encuentran los dipositivos que nos permiten realizar las diferentes tareas. La consola Anlogica de Estudio, El Dispositivo de Grabación Multicanal, el Sistema de Monitoreo y los Procesadores de Señal Externos. La importancia radica en que permite al ingeniero de sonido tener un control absoluto sobre todos los aspectos de la grabación o mezcla. Aquí se gestionan las señales que provienen de las diferentes espacios del estudio.\n\nLa sala de grabación, o live room, es donde los músicos ejecutan sus piezas. Esta sala está diseñada para optimizar la acústica y proporcionar un entorno sonoro adecuado. Sus dimensiones y materiales influyen en el resultado final. Es fundamental para la producción musical, ya que facilita la captación de la interpretación de los músicos, asegurando que cada matiz se registre con claridad.\n\nEl tratamiento acústico es un componente fundamental en un estudio de grabación. Este se logra a través de diversas herramientas acusticas, El tratamiento Acustico se divide fundamentalmente en dos instancias. Aislación, terminos de aislar el Recinto donde trabajamos de elementos externos y  viceversa. La otra instancia es el tratamiento de los Recintos del Estudio, para obtener espacios con un comportamiento acorde a los estandares de diversos criterios, relacionados con la respuesta en Frecuencia del Recinto y el RT60.\n\nAdemás, el estudio cuenta con áreas específicas como la Iso Booth, o cabina de aislación, que se utilizan principalmente para grabaciones vocales o de instrumentos donde se requiere un control aún más riguroso de esa fuente sonora y su relación o interacción con otras fuentes sonoras.\n\nLa sala de control es donde se lleva a cabo una parte crítica del proceso de producción musical. Aquí se busca dar forma al sonido final a través de la manipulación de la mezcla de diferentes señales. La calidad de esta sala influye en la decisión sobre niveles, distribución de señales dentro de la iamgen estereo y todas las alternativas de procesamiento. Permitiendo a los productores y músicos articular su visión creativa en el producto final.\n\nEl uso del equipo técnico es otro pilar fundamental en el estudio de grabación. Desde micrófonos y accesorios hasta los mencionados procesadores de señal, cada una de estas herramientas tiene su función específica. La selección del equipo adecuado para cada sesión es crucial, ya que puede alterar radicalmente el sonido obtenido y, por ende, la percepción y recepción de la música por parte del público.\n\nPor último, el personal especializado que opera en un estudio de grabación juega un papel decisivo en el éxito del proceso de producción musical. Tecnicas/os de grabación y Mezcla, Productoras/es, Asistentes trabajan conjuntamente en diferentes etapas, aportando su conocimiento y experiencia para optimizar el resultado final.\n\nEn resumen, un estudio de grabación no es solo un espacio físico, sino un ecosistema complejo donde cada elemento, desde los espacios fisicos hasta el personal, contribuyen al proceso creativo. Conocer estos elementos y sus funciones es fundamental para cualquier alumno que desee profundizar en el ámbito de la producción musical.',
                        synthesis: '- **Estudio de grabación**\n  - Espacio para *grabación*, *mezcla* y en ciertos casos *masterización*\n  - Rol *crucial* en producción musical\n\n- **Control room**\n  - Equipos: \n    - **Consola analógica**\n    - **Grabador multicanal**\n    - **Sistema de monitoreo**\n    - **Procesadores de señal externos**\n  - Control *absoluto* sobre grabación y mezcla\n  - Gestión de *señales* del estudio\n\n- **Sala de grabación (live room)**\n  - Espacio para *ejecución* musical\n  - Diseñada para *optimizar acústica*\n  - Influencia de *dimensiones* y *materiales*\n  - Captación de *matices sonoros* \n\n- **Tratamiento acústico**\n  - Componentes *fundamentales*\n  - **Aislación**: separación de elementos externos \n  - **Tratamiento de recintos**: \n    - Comportamiento acústico acorde a *estándares*\n    - *Respuesta en frecuencia* y *RT60*\n\n- **Iso Booth**\n  - Cabina de *aislación*\n  - Uso en grabaciones de *voces* e *instrumentos*\n  - Control *riguroso* de fuente sonora\n\n- **Sala de control**\n  - *Formación* del sonido final\n  - Manipulación de *mezcla de señales*\n  - Influencia en *niveles* y *distribución* de señales\n  - Permite articular *visión creativa*\n\n- **Equipo técnico**\n  - Herramientas: *micrófonos*, *accesorios*, *procesadores*\n  - Selección adecuada impacta en *sonido* y *percepción*\n\n- **Personal especializado**\n  - Rola clave en el éxito del proceso\n  - Técnicos de *grabación* y *mezcla*\n  - Productores y *asistentes* \n  - Aportan *conocimiento* y *experiencia*\n\n- **Resumen**\n  - Estudio como *ecosistema complejo*\n  - Conocimiento de *elementos* y *funciones* esencial para la producción musical',
                        dyslexia: 'Un estudio de grabación es un lugar donde se crea música y otros sonidos. En este espacio se graba, mezcla. Es importante entender cómo funciona un estudio para valorar su papel en la música.\n\nEl control room es la sala principal. Aquí están los dispositivos que ayudan a grabar y mezclar. Hay una consola que controla el sonido. También hay un dispositivo para grabar muchos sonidos a la vez. La mezcla se escucha en altavoces llamados monitores. Este espacio permite al ingeniero de sonido controlar todo lo que se graba.\n\nLa sala de grabación, o recording room, es el lugar donde los músicos tocan. Está diseñada para que suene bien. La forma y los materiales de la sala afectan cómo se escucha la música. Es clave para grabar la interpretación de los músicos. Así, cada detalle se escucha con claridad.\n\nEl tratamiento acústico es muy importante en un estudio. Esto significa eliminar los ruidos de afuera y mejorar el sonido dentro del estudio. Hay dos partes en el tratamiento acústico. Primero, la aislación, que evita que el ruido exterior entre. Segundo, el tratamiento, que mejora cómo suena el espacio donde se graba.\n\nTambién hay áreas especiales como la Iso Booth, que es una cabina aislada. Se usa para grabar voces e instrumentos de manera más controlada. En este lugar, el sonido se mantiene limpio y sin distracciones.\n\nLa sala de control es donde se produce el sonido final. Aquí se mezcla el sonido de diferentes grabaciones. La calidad de esta sala es muy importante. Ayuda a los productores y músicos a lograr su idea de cómo debe sonar la canción.\n\nEl equipo técnico es esencial en el estudio. Hay micrófonos, procesadores y otros instrumentos que ayudan durante las diferentes etapas. Elegir el equipo correcto es crucial. Esto puede cambiar mucho cómo suena la música, y cómo la escucha el público.\n\nEl personal que trabaja en un estudio es clave. Hay técnicos de grabación, mezcladores y asistentes. Todos colaboran en las diferentes etapas del proceso. Su experiencia mejora el resultado final.\n\nPara resumir, un estudio de grabación es más que solo un lugar. Es un sistema donde cada parte, desde el espacio hasta las personas, ayuda a crear música. Conocer estos elementos es importante para cualquier estudiante que quiera aprender sobre producción musical.',
                        audios: {
                          article: {
                            status: true,
                            url: 'https://ailearn.api.aimpact.partners/activities/5b56ad68-53c2-43da-86b9-e7d6c4409966/materials/article/audio'
                          }
                        }
                      },
                      specs: {
                        topic: 'Espacios del Estudio de Grabación',
                        task: 'Investiga y presenta detalladamente los dos espacios que componen el Estudio de Grabación: la Sala de Control y la Sala de Grabación. Describe sus características, funciones y cómo interactúan entre sí durante el proceso de producción musical. Utiliza ejemplos prácticos y visuales para respaldar tu presentación.',
                        objectives: [{
                          name: 'Identificación de Espacios',
                          objective: 'Reconocer y describir la Sala de Control y la Sala de Grabación como elementos clave en la Producción Musical.'
                        }, {
                          name: 'Análisis Funcional',
                          objective: 'Analizar las funciones específicas y la importancia de cada sala en el proceso de grabación y producción.'
                        }],
                        instructions: 'Presentar los dos espacios fundamentales que componen el Estudio de Grabación. Sala de Control (Control Room), Sala de Grabación (Recording/Tracking Room).'
                      }
                    },
                    settings: {
                      layout: 'main-content-layout'
                    }
                  },
                  'e90b3b7f-2569-491b-8290-2ad1842056e8': {
                    id: 'e90b3b7f-2569-491b-8290-2ad1842056e8',
                    type: 'character-talk',
                    title: 'Conversación con un Productor Musical',
                    description: 'Explora y reflexiona sobre las decisiones técnicas y creativas en un estudio de grabación a través de un diálogo con un famoso productor musical.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {},
                      specs: {
                        role: 'Eres un productor musical reconocido que comparte su experiencia y responde a las preguntas sobre la mezcla y la producción en un estudio.',
                        task: 'Interactúa con el productor musical haciendo preguntas sobre su trabajo en el estudio. Reflexiona sobre las decisiones que toma durante el proceso de mezcla y cómo estas afectan el resultado final de la música. Aprovecha esta oportunidad para aprender sobre las técnicas y la creatividad en la producción musical.',
                        objectives: [{
                          name: 'Decisiones técnicas',
                          objective: 'Entender las decisiones técnicas cruciales al mezclar música.'
                        }, {
                          name: 'Creatividad en producción',
                          objective: 'Fomentar la creatividad al elegir elementos sonoros y técnicas de producción.'
                        }, {
                          name: 'Formulación de preguntas',
                          objective: 'Desarrollar habilidades para formular preguntas relevantes sobre producción musical.'
                        }],
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  },
                  'fe93270f-cd49-430e-81bc-817449c280f0': {
                    id: 'fe93270f-cd49-430e-81bc-817449c280f0',
                    type: 'debate',
                    title: 'Defensa del Estudio de Grabación',
                    description: 'Un debate enfocado en la importancia de los estudios de grabación y los dispositivos analógicos en la producción musical frente a herramientas digitales.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {},
                      specs: {
                        role: 'Docente',
                        subject: 'La relevancia del estudio de grabación de Grbaciòn y los dispositivos analogicos que lo componen como estándar en la producción musical.',
                        task: 'Vas a participar en un debate donde deberás defender la importancia de los estudios de grabación y los dispositivos analógicos en la producción musical. Presenta tus argumentos de manera clara y concisa, y utiliza ejemplos que respalden tu postura. También tendrás que anticipar las objeciones que pueda presentar el chatbot y prepararte para responder a ellas con lógica y claridad.',
                        objectives: [{
                          name: 'Argumentación',
                          objective: 'Desarrollar habilidades de argumentación en la defensa de los estudios de grabación.'
                        }, {
                          name: 'Pensamiento Crítico',
                          objective: 'Fomentar el pensamiento crítico al comparar dispositivos analógicos y digitales.'
                        }, {
                          name: 'Competencias Emocionales',
                          objective: 'Incorporar la autoconfianza y la gestión emocional durante el debate.'
                        }, {
                          name: 'Metacognición',
                          objective: 'Reflexionar sobre el proceso de argumentación y los propios pensamientos en el debate.'
                        }],
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  },
                  'b0074f49-5100-4731-b771-db3befd44577': {
                    id: 'b0074f49-5100-4731-b771-db3befd44577',
                    type: 'multiple-choice',
                    title: 'Evaluación sobre el Estudio de Grabación en Producción Musical',
                    description: 'Esta actividad tiene como objetivo evaluar tu comprensión sobre el funcionamiento y los elementos esenciales de un estudio de grabación, así como su papel en la producción musical.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {
                        assessment: '{"title":"Evaluación sobre el Estudio de Grabación en Producción Musical","questions":[{"question":"¿Cuál es el propósito principal de un estudio de grabación?","options":["Mejorar la calidad visual de las grabaciones","Diseñar espacios para ensayar","Proveer un espacio adecuado para la grabación, mezcla y en ciertos casos la masterización de un Proyecto Musical.  ","Almacenar instrumentos musicales"],"correctAnswer":2},{"question":"¿Qué función cumple la sala de control en un estudio de grabación?","options":["Grabar las voces de los músicos","Cambiar la acústica del recinto","Dar forma al sonido final mediante mezcla","Aislar instrumentos ruidosos"],"correctAnswer":2},{"question":"¿Qué aspecto es fundamental en el tratamiento acústico de un estudio?","options":["La estética de los muebles","La capacitación del personal","La respuesta en frecuencia del recinto y el rt60.","La variedad de instrumentos disponibles"],"correctAnswer":2},{"question":"¿Qué es una Iso Booth en un estudio de grabación?","options":["Una sala destinada para la mezcla","Un espacio para grabaciones en un ambiente controlado","Un área de descanso para los músicos","Un equipo de grabación multicanal"],"correctAnswer":1},{"question":"¿Por qué es importante la selección de equipo técnico en un estudio de grabación?","options":["Asegura que el estudio esté ordenado","Aumenta la velocidad de grabación","Puede alterar radicalmente el sonido obtenido","Facilita el trabajo del personal administrativo"],"correctAnswer":2}]}'
                      },
                      specs: {
                        task: '',
                        objectives: '',
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  },
                  '5bed3375-873d-414f-a52d-577e382f3091': {
                    id: '5bed3375-873d-414f-a52d-577e382f3091',
                    type: 'spoken',
                    title: 'Diferencias en Mezclas de Sonido',
                    description: 'Exposición sobre las diferencias entre la mezcla Out The Box y las mezclas In The Box e Híbrida, mostrando claridad en la comprensión del tema.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {},
                      specs: {
                        assessment: 'El estudiante debe exponer oralmente las diferencias entre los tipos de mezcla indicados. Evalúa la claridad de la presentación, la profundidad del contenido, la estructura lógica de la exposición y el cumplimiento del tiempo asignado. Asegúrate de leer la transcripción del discurso para una evaluación precisa.',
                        criteria: [{
                          name: 'Claridad',
                          subject: 'El estudiante debe presentar sus ideas de manera clara y comprensible, empleando un lenguaje apropiado para el tema abordado.'
                        }, {
                          name: 'Contenido',
                          subject: 'La presentación debe incluir las diferencias clave entre Out The Box, In The Box e Híbrida, evidenciando un buen dominio del tema.'
                        }, {
                          name: 'Estructura',
                          subject: 'La exposición debe tener una introducción clara, un desarrollo coherente y una conclusión que resuma las ideas principales.'
                        }, {
                          name: 'Tiempo',
                          subject: 'El hablante debe realizar la presentación dentro del tiempo estipulado de tres minutos, administrando el tiempo de manera efectiva.'
                        }],
                        task: 'Prepara una exposición de no más de tres minutos sobre las diferencias entre la mezcla Out The Box y las mezclas In The Box e Híbrida. Asegúrate de abordar las características distintivas de cada tipo de mezcla, estructurando tu presentación con una introducción, desarrollo y conclusión clara. Mantén un lenguaje técnico apropiado y asegúrate de terminar tu exposición en el tiempo indicado.',
                        objectives: '',
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  }
                }
              },
              teachers: [{
                uid: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                name: 'Docente Mezcla Tamaba',
                photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
              }],
              archived: false,
              access: 'approved',
              accessed: false,
              community: false
            }
          };
        }
      });

      /************************************************
      INTERNAL MODULE: ./activities/collection-provider
      ************************************************/

      ims.set('./activities/collection-provider', {
        hash: 3089474622,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCollectionProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          var _api = require("@beyond-js/http-suite/api");
          class ActivityCollectionProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/assignments/${specs.assignmentId}/activities/${specs.id}`);
              if (!status) {
                throw new Error('error loading activity');
              }
              // if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
              };
            };
            list = this.load;
            publish = async specs => {
              if (specs.type == 'assessment') {
                delete specs.type;
                return this.assessment(specs.params);
              }
              return this.spoken(specs.data);
            };
            assessment = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data,
                error
              } = await this.#api.post('/activities/assessments/completion', specs);
              if (error) {
                throw new Error('error processing assessment');
              }
              return {
                status,
                data
              };
            };
            spoken = async specs => {
              const props = Object.getOwnPropertyNames(specs);
              const form = new FormData();
              props.forEach(prop => {
                form.append(prop, specs[prop]);
              });
              const xhr = new _uploader.XHRLoader();
              xhr.bearer(_session.sessionWrapper.user.token);
              const response = await xhr.upload(form, `${_startup.sdkConfig.apis.ailearn}/activities/spoken/completion`);
              const json = await response.json();
              if (!json.status) {
                throw new Error('error publishing assessment');
              }
              this.triggerEvent();
              return json.data;
            };
            async consumeCoins() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
            }
          }
          exports.ActivityCollectionProvider = ActivityCollectionProvider;
        }
      });

      /***************************************
      INTERNAL MODULE: ./activities/collection
      ***************************************/

      ims.set('./activities/collection', {
        hash: 74674477,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _ = require("./");
          var _provider = require("./provider");
          class Activities extends _collection.Collection {
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            #loadChat;
            get loadChat() {
              return this.#loadChat;
            }
            #order;
            get order() {
              return this.#order;
            }
            constructor(props) {
              super({
                ...props,
                entity: 'activity',
                item: _.Activity,
                provider: _provider.ActivityProvider
              });
              const {
                parent,
                loadChat = false,
                ...specs
              } = props;
              this.#tracking = parent;
              this.#loadChat = loadChat;
            }
            set = data => {
              if (!data || Object.keys(data).length === 0) {
                return;
              }
              this.#order = data.order;
              let items = Object.values(data.items);
              const module = this.#tracking.module.getProperties();
              items = data.order.map(id => ({
                ...data.items[id],
                module,
                parent: this,
                loadChat: true
              }));
              this.setItems(items);
              this.items.forEach(item => {
                item.setTracking(this.#tracking);
                item.processMaterials();
              });
              return data;
            };
            async loadActivity({
              id
            }) {
              if (this.map.has(id)) return this.map.get(id);
              // const instance = new Activity({ id, assignmentId: this.tracking.assignmentId, tracking: this.tracking });
              const instance = new _.Activity({
                parent: this,
                id,
                loadChat: this.#loadChat,
                assignmentId: this.tracking.modelId,
                testing: this.tracking.testing,
                tracking: this.tracking
              });
              // instance.setTracking(this.#tracking);
              await instance.load();
              instance.trigger('credits.change');
              this.#tracking.trigger('credits.change');
              return instance;
            }
          }
          exports.Activities = Activities;
        }
      });

      /**********************************
      INTERNAL MODULE: ./activities/index
      **********************************/

      ims.set('./activities/index', {
        hash: 2059445287,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _core = require("@aimpact/chat-sdk/core");
          var _item = require("@beyond-js/reactive/entities/item");
          var _credits = require("../credits");
          var _provider = require("./provider");
          /*bundle*/
          class Activity extends _item.Item {
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #feedback;
            get feedback() {
              return this.#feedback;
            }
            #competenciesFeedback;
            get competenciesFeedback() {
              return this.#competenciesFeedback;
            }
            #analysis;
            get analysis() {
              return this.#analysis;
            }
            get objectives() {
              return this.resources?.specs?.objectives;
            }
            #assessment;
            get assessment() {
              return this.#assessment;
            }
            #chatModel;
            get chatModel() {
              return this.#chatModel;
            }
            #testing;
            get testing() {
              return this.#testing;
            }
            #loadChat;
            getMaterials() {
              return this.resources?.materials ? this.resources.materials : this.materials;
            }
            getSpecs() {
              return this.resources?.specs ? this.resources.specs : this.specs;
            }
            constructor({
              parent,
              id,
              testing = false,
              ...specs
            }) {
              super({
                id,
                entity: 'Activities',
                ...specs,
                properties: ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'objectives', 'resources', 'materials', 'settings', 'specs', 'chat', 'module', {
                  name: 'credits',
                  value: _credits.Credits
                }, 'data', 'user'],
                provider: _provider.ActivityProvider
              });
              if (specs.tracking) this.setTracking(specs.tracking);
              this.#testing = testing;
              let {
                assignmentId,
                data,
                loadChat
              } = specs;
              this.#loadChat = loadChat;
              assignmentId = assignmentId ? assignmentId : parent.tracking.assignmentId;
              this.startup(assignmentId, data);
            }
            setTracking(tracking) {
              this.#tracking = tracking;
              this.#tracking.on('credits.change', () => {
                this.set({
                  credits: this.#tracking.credits.getProperties()
                });
                this.trigger('credits.change');
              });
            }
            async startup(assignmentId, data) {
              this.#assignmentId = assignmentId;
              if (this.#loadChat && this.getProperty('chat')) {
                this.loadChat(this.getProperty('chat'));
              }
            }
            async loadChat(data) {
              const chat = new _core.Chat({
                id: data.id,
                language: this.language
              });
              this.#chatModel = chat;
              await chat.loadAll({
                id: data.id
              });
              this.triggerEvent('chat.loaded');
            }
            load = async (specs = {}) => {
              if (!specs.id) specs.id = this.getProperty('id');
              specs.assignmentId = this.#assignmentId;
              const data = this.testing ? await this.provider.loadTestingActivity(this.tracking.getProperty('id'), this.getProperty('id')) : await super.load(specs);
              await this.set({
                ...data.activity,
                credits: data.credits,
                module: data.module
              });
              //when the activity is loaded in assignments view, the tracking is not loaded.
              this.#tracking.set(data);
              this.#tracking.trigger('credits.change');
              //todo: this code must be removed when the reactive model is fixed
              this.#process();
              return data;
            };
            #process() {
              if (this.materials?.assessment) {
                this.#assessment = JSON.parse(this.materials.assessment);
              }
              if (this.resources?.materials?.assessment) {
                this.#assessment = JSON.parse(this.resources.materials.assessment);
              }
            }
            processMaterials() {
              return this.#process();
            }
            async publish({
              params,
              type
            }) {
              try {
                const response = await this.provider.publish({
                  params,
                  type
                });
                this.#tracking = response.data.tracking;
                this.#assessment.selection = 'results';
                this.data = response.data.tracking;
              } catch (e) {
                throw new Error('error publishing spoken activity');
              }
            }
            async publishSpoken({
              params,
              type
            }) {
              if (!params.draftId) params.assignmentId = params.assignmentId ?? this.#assignmentId;
              params.activityId = params.activityId ?? this.id;
              const data = await this.provider.publish({
                data: params,
                type
              });
              this.set({
                data
              });
              this.#analysis = data.analysis;
              this.#feedback = data.feedback;
              this.#competenciesFeedback = data.competenciesFeedback;
            }
            set = data => {
              const response = super.set(data);
              this.#process();
              this.trigger('change');
              return response;
            };
            consumeCoins = async () => {
              return this.#tracking.consumeCoins();
            };
          }
          exports.Activity = Activity;
        }
      });

      /*************************************
      INTERNAL MODULE: ./activities/provider
      *************************************/

      ims.set('./activities/provider', {
        hash: 2933913951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          class ActivityProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/assignments/${specs.assignmentId}/activities/${specs.id}`);
              if (!status) {
                throw new Error('error loading activity');
              }
              if (specs?.progress) await this.#parent.processLoad(data);
              return data;
            };
            loadTestingActivity = async (draftId, activityId) => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${draftId}/activities/${activityId}/testing`);
              return data;
            };
            list = this.load;
            publish = async specs => {
              if (specs.type == 'assessment') {
                delete specs.type;
                return this.assessment(specs.params);
              }
              return this.spoken(specs.data);
            };
            assessment = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data,
                error
              } = await this.#api.post('/activities/assessments/completion', specs);
              if (error) {
                throw new Error('error processing assessment');
              }
              return {
                status,
                data
              };
            };
            spoken = async specs => {
              const props = Object.getOwnPropertyNames(specs);
              const form = new FormData();
              props.forEach(prop => {
                form.append(prop, specs[prop]);
              });
              const xhr = new _uploader.XHRLoader();
              xhr.bearer(await _session.sessionWrapper.user.token);
              const response = await xhr.upload(form, `${_startup.sdkConfig.apis.ailearn}/activities/spoken/completion`);
              const json = await response.json();
              if (!json.status) {
                throw new Error('error publishing assessment');
              }
              return json.data;
            };
            async consumeCoins() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
            }
          }
          exports.ActivityProvider = ActivityProvider;
        }
      });

      /****************************************
      INTERNAL MODULE: ./assignments/collection
      ****************************************/

      ims.set('./assignments/collection', {
        hash: 2173799384,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          /*bundle*/
          class Assignments extends _collection.Collection {
            constructor() {
              super({
                entity: 'assignments',
                item: _item.Assignment
              });
            }
          }
          exports.Assignments = Assignments;
        }
      });

      /**********************************
      INTERNAL MODULE: ./assignments/item
      **********************************/

      ims.set('./assignments/item', {
        hash: 1328445365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          /*bundle */
          class Assignment extends _item.Item {
            constructor(args) {
              super({
                entity: 'assignments',
                properties: ['id', 'title', 'description', 'name'],
                ...args
              });
            }
          }
          exports.Assignment = Assignment;
        }
      });

      /*************************
      INTERNAL MODULE: ./credits
      *************************/

      ims.set('./credits', {
        hash: 2299380065,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Credits extends _model.ReactiveModel {
            constructor(args) {
              super({
                properties: ['consumed', 'total'],
                ...args
              });
            }
          }
          exports.Credits = Credits;
        }
      });

      /********************************************
      INTERNAL MODULE: ./dashboard/activities/index
      ********************************************/

      ims.set('./dashboard/activities/index', {
        hash: 3676316793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActivities = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          class DashboardActivities extends _collection.Collection {
            #parent;
            get parent() {
              return this.#parent;
            }
            constructor({
              parent
            }) {
              super({
                entity: 'DashboardActivities',
                item: _item.DashboardActivity
              });
              this.#parent = parent;
            }
            /**
             * Processes the activities data by sorting the items according to the given order.
             * It then updates the items structure accordingly.
             *
             * @param {IDashboard["activities"]} activities - The activities data containing the order array and items record.
             
             */
            // @ts-ignore
            set(data) {
              const items = data.order.map(id => data.items[id]);
              super.setItems(items);
              //@ts-ignore
              return super.set(items);
            }
            get(id) {
              return this.map.get(id);
            }
            has(id) {
              return this.map.has(id);
            }
          }
          exports.DashboardActivities = DashboardActivities;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./dashboard/activities/item
      *******************************************/

      ims.set('./dashboard/activities/item', {
        hash: 1697760133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActivity = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class DashboardActivity extends _item.Item {
            #parent;
            #dashboard;
            get participants() {
              return this.#dashboard?.participants.items.filter(participant => participant.activities.has(this.id)) ?? [];
            }
            get assessment() {
              return JSON.parse(this.resources?.materials?.assessment ?? '{}');
            }
            constructor({
              parent,
              ...args
            } = {}) {
              super({
                ...args,
                entity: 'DashboardParticipants',
                properties: ['id', 'type', 'language', 'title', 'description', 'picture', 'settings', 'materials', 'specs', 'resources']
              });
              this.#parent = parent;
              this.#dashboard = parent.parent;
            }
          }
          exports.DashboardActivity = DashboardActivity;
        }
      });

      /*********************************
      INTERNAL MODULE: ./dashboard/index
      *********************************/

      ims.set('./dashboard/index', {
        hash: 3873797573,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TrackingDashboard = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _item = require("@beyond-js/reactive/entities/item");
          var _activities = require("./activities");
          var _participants = require("./participants");
          var _dashboard = require("./providers/dashboard");
          /*bundle*/
          class TrackingDashboard extends _item.Item {
            get isUserCreator() {
              return _session.sessionWrapper.user.id === this.module.creator?.id;
            }
            get totalParticipants() {
              return this.participants.items.length;
            }
            constructor({
              id,
              ...specs
            } = {}) {
              super({
                id,
                ...specs,
                entity: 'Dashboard',
                properties: ['id', 'classroom', 'module', 'archived', {
                  name: 'activities',
                  value: _activities.DashboardActivities
                }, {
                  name: 'participants',
                  value: _participants.Participants
                }],
                provider: _dashboard.DashboardProvider
              });
            }
            set(data) {
              const response = super.set(data);
              return response;
            }
            async archive() {
              const data = await this.provider.archive();
              this.set({
                archived: data.archived
              });
              return data;
            }
            async restore() {
              const data = await this.provider.restore();
              this.set({
                archived: data.archived
              });
              return data;
            }
          }
          exports.TrackingDashboard = TrackingDashboard;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/index
      *********************************************************/

      ims.set('./dashboard/participants/activities/index', {
        hash: 225838489,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivities = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _item = require("./item");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          class ParticipantActivities extends _model.ReactiveModel {
            #data;
            #map = new Map();
            get map() {
              return this.#map;
            }
            get items() {
              return [...this.#map.values()];
            }
            get(id) {
              return this.map.get(id);
            }
            has(id) {
              return this.map.has(id);
            }
            #parent;
            get dashboard() {
              return this.#parent.dashboard;
            }
            constructor(parent) {
              super();
              if (!parent) console.trace(2, parent);
              this.#parent = parent;
              this.#data = {};
            }
            setData(data) {
              this.#data = data;
            }
            set(data) {
              data.forEach(item => {
                if (this.#map.has(item.id)) {
                  this.#map.get(item.id).set(item);
                  return;
                }
                this.#map.set(item.id, new _item.ParticipantActivity({
                  parent: this,
                  ...item
                }));
              });
              return data;
            }
            /**
             * @deprecated
             * @param activities
             */
            check(activities) {
              const types = {
                spoken: _spoken.ParticipantSpokenActivity,
                detault: _item.ParticipantActivity,
                'multiple-choice': _multipleChoice.ParticipantMultipleChoiceActivity
              };
              const currents = Object.keys(this.#data);
              currents.forEach(id => {
                if (!activities.has(id)) {
                  console.warn('something wrong, this activity is not loaded in dashboard tracking: ', id);
                  return;
                }
                const activity = activities.get(id);
                if (this.has(id)) {
                  this.get(activity.id).set(this.#data[id]?.data ?? this.#data[id]);
                  return this.get(activity.id);
                }
                const Activity = types[activity.type] || types.detault;
                const data = this.#data[id]?.data ?? this.#data[id];
                const instance = new Activity({
                  parent: this,
                  activity,
                  ...data
                });
                this.#map.set(activity.id, instance);
                return instance;
              });
            }
          }
          exports.ParticipantActivities = ParticipantActivities;
        }
      });

      /********************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/item
      ********************************************************/

      ims.set('./dashboard/participants/activities/item', {
        hash: 1072921300,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivity = void 0;
          var _core = require("@aimpact/chat-sdk/core");
          var _item = require("@beyond-js/reactive/entities/item");
          class ParticipantActivity extends _item.Item {
            #parent;
            get dashboard() {
              return this.#parent.dashboard;
            }
            get activity() {
              return this.dashboard?.activities?.get(this.id);
            }
            #chatModel;
            get chatModel() {
              return this.#chatModel;
            }
            get assessment() {
              const data = this.activity.assessment;
              if (this.activity.type === 'multiple-choice') {
                return {
                  title: data.title,
                  questions: data.questions.map((item, index) => {
                    return {
                      ...item,
                      ...this.responses[index]
                    };
                  })
                };
              }
              return this.attempts?.[0]?.assessment;
            }
            get transcription() {
              return this.attempts?.[0]?.transcription;
            }
            get objectives() {
              if (!this.assessment) return [];
              const objectivesKeys = Object.keys(this.assessment);
              return objectivesKeys.map(key => {
                return {
                  objective: key,
                  ...this.assessment[key]
                };
              });
            }
            constructor({
              parent,
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['id', 'alerts', 'messages', 'interactions', 'progress', 'synthesis', 'attempts', 'chat', 'data', 'counters', 'responses', ...properties]
              });
              this.#parent = parent;
            }
            async loadChat() {
              if (!this.chat || !this.chat?.id) {
                console.warn('The activity does not have a chat id');
                return;
              }
              const chat = new _core.Chat({
                id: this.chat.id
              });
              this.#chatModel = chat;
              await chat.loadAll({
                id: this.chat.id
              });
              this.triggerEvent('chat.loaded');
            }
          }
          exports.ParticipantActivity = ParticipantActivity;
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/multiple-choice
      *******************************************************************/

      ims.set('./dashboard/participants/activities/multiple-choice', {
        hash: 4142976364,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantMultipleChoiceActivity = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class ParticipantMultipleChoiceActivity extends _item.Item {
            #objectives = [];
            get objectives() {
              return this.#objectives;
            }
            get questions() {
              try {
                return JSON.parse(this?.activity.resources.materials.assessment).questions;
              } catch (e) {
                console.warn(e);
              }
            }
            get participationData() {
              return this.questions?.map((question, index) => {
                return {
                  ...question,
                  answer: this.responses?.[index].answer,
                  accuracy: this.responses?.[index].accuracy
                };
              });
            }
            constructor({
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['alerts', 'activity', 'counters', 'responses', ...properties]
              });
              this.#objectives = properties;
            }
          }
          exports.ParticipantMultipleChoiceActivity = ParticipantMultipleChoiceActivity;
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/spoken
      **********************************************************/

      ims.set('./dashboard/participants/activities/spoken', {
        hash: 1641659011,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantSpokenActivity = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class ParticipantSpokenActivity extends _item.Item {
            get icons() {
              if (this.assessment) {
                return Object.keys(this.assessment).map(key => this.assessment[key]);
              }
              return [];
            }
            get totalPoints() {
              return this.assessment?.reduce((acc, objective) => acc + this.assessment[objective].points, 0);
            }
            get assessment() {
              return this.attempts?.[0]?.assessment;
            }
            get transcription() {
              return this.attempts?.[0]?.transcription;
            }
            get objectives() {
              if (!this.assessment) return [];
              const objectivesKeys = Object.keys(this.assessment);
              return objectivesKeys.map(key => {
                return {
                  objective: key,
                  ...this.assessment[key]
                };
              });
            }
            constructor({
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['activity', 'attempts']
              });
            }
          }
          exports.ParticipantSpokenActivity = ParticipantSpokenActivity;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./dashboard/participants/index
      **********************************************/

      ims.set('./dashboard/participants/index', {
        hash: 3470754433,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Participants = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          class Participants extends _collection.Collection {
            #parent;
            get parent() {
              return this.#parent;
            }
            get dashboard() {
              return this.#parent;
            }
            constructor({
              parent
            }) {
              super({
                entity: 'DashboardParticipants',
                item: _item.Participant
              });
              this.#parent = parent;
            }
            set(data) {
              const sort = (a, b) => {
                return a.user.name?.localeCompare(b.user.name);
              };
              if (Array.isArray(data)) {
                const items = data.sort((a, b) => a.name?.localeCompare(b.name));
                super.setItems(items);
                //@ts-ignore
                return super.set(items);
              } else {
                const ids = Object.keys(data);
                const items = ids.map(id => ({
                  id,
                  ...data[id]
                })).sort(sort);
                super.setItems(items);
                //@ts-ignore
                return super.set(items);
              }
            }
          }
          exports.Participants = Participants;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./dashboard/participants/item
      *********************************************/

      ims.set('./dashboard/participants/item', {
        hash: 3841754010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Participant = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _activities = require("./activities");
          var _participant = require("../providers/participant");
          var _credits = require("../../credits");
          var _user = require("./user");
          class Participant extends _item.Item {
            #activitiesData;
            get assignmentId() {
              return this.#parent.dashboard.id;
            }
            #parent;
            get dashboard() {
              return this.#parent?.dashboard;
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            constructor({
              parent,
              ...args
            }) {
              super({
                ...args,
                entity: 'TrackingDashboard',
                provider: _participant.ParticipantProvider,
                properties: ['id', {
                  name: 'user',
                  value: _user.UserData
                }, {
                  name: 'credits',
                  value: _credits.Credits
                }]
              });
              // console.log(-1, this?.dashboard);
              this.#parent = parent;
              this.#activities = new _activities.ParticipantActivities(this);
              this.setActivities(args.activities);
            }
            setActivities(elements) {
              if (Array.isArray(elements.order)) {
                const activitiesData = elements.order.filter(id => !!elements.items[id]?.data);
                const activities = activitiesData.map(id => {
                  const item = {
                    ...elements.items[id]
                  };
                  const {
                    data
                  } = item;
                  delete item.data;
                  return {
                    ...item,
                    ...data
                  };
                });
                this.#activities.set(activities);
              } else {
                const ids = Object.keys(elements);
                const activities = ids.map(id => {
                  const data = elements[id]?.data ?? elements[id];
                  return {
                    id,
                    ...data
                  };
                });
                this.#activities.set(activities);
              }
            }
            set(data) {
              this.setActivities(data.activities);
              return super.set({
                ...data
              });
            }
            async load() {
              // console.log(1, 'loading', this.user.id);
              const data = await super.load({
                userId: this.user.id ?? this.user.uid
              });
              super.ready = true;
              return data;
            }
            enableAI = async () => {
              const data = await this.provider.enableAI({
                userId: this.user.id
              });
              this.credits.set(data.credits);
              this.trigger('credits.changed');
              this.trigger('change');
            };
          }
          exports.Participant = Participant;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./dashboard/participants/user
      *********************************************/

      ims.set('./dashboard/participants/user', {
        hash: 3284649687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class UserData extends _item.Item {
            constructor({
              parent,
              ...args
            }) {
              super({
                ...args,
                entity: 'TrackingDashboard',
                properties: ['photoUrl', 'name', 'id']
              });
            }
          }
          exports.UserData = UserData;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./dashboard/providers/dashboard
      ***********************************************/

      ims.set('./dashboard/providers/dashboard', {
        hash: 3196296927,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          class DashboardProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            async load() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/assignments/${this.#parent.id}/dashboard`);
              if (!status) {
                throw new Error('error loading dashboard');
              }
              return data;
            }
            async archive() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/assignments/${this.#parent.id}/archive`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response.data;
            }
            async restore() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
              const response = await this.#api.post(`/assignments/${this.#parent.id}/restore`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response.data;
            }
          }
          exports.DashboardProvider = DashboardProvider;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./dashboard/providers/participant
      *************************************************/

      ims.set('./dashboard/providers/participant', {
        hash: 2354565700,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          /*bundle*/ /**
                      * Represents the Tracking of an assignment.
                      *
                      *
                      */
          class ParticipantProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/assignments/${this.#parent.assignmentId}/tracking`, specs);
              const {
                status,
                data,
                error
              } = response;
              if (!status) {
                throw new Error('error loading class');
              }
              if (specs?.progress) await this.#parent.processLoad(data);
              return data;
            };
            enableAI = async props => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
              const {
                data,
                status
              } = await this.#api.post(`/assignments/${this.#parent.assignmentId}/ai/enable`, props);
              if (!status) {
                console.log(data);
                throw new Error('error enabling AI');
              }
              return data;
            };
          }
          exports.ParticipantProvider = ParticipantProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 385040768,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            message;
            code;
            constructor({
              texts,
              code
            }) {
              super(texts); // Call the parent constructor (Error) with the message
              this.name = 'CustomError'; // Set the name of the error (optional)
              this.code = code; // Add a custom 'code' property
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4034164201,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tracking = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _item = require("@beyond-js/reactive/entities/item");
          var _collection = require("./activities/collection");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _credits = require("./credits");
          var _provider = require("./provider");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          /*bundle*/ /**
                      * Represents the Tracking of an assignment.
                      *
                      *
                      */
          class Tracking extends _item.Item {
            #api;
            #modelId;
            modelType = 'tracking';
            get modelId() {
              return this.#modelId;
            }
            get assignmentId() {
              return this.#modelId;
            }
            #order;
            get order() {
              return this.#order;
            }
            static #instances = new Map();
            constructor({
              id,
              chat,
              testing
            }) {
              super({
                id,
                entity: 'Tracking',
                provider: _provider.TrackingProvider,
                properties: ['id', {
                  name: 'module',
                  value: _learningModules.ModuleListItem
                }, 'status', 'user', 'community', 'access', 'accessed', 'assignment', 'realtime', {
                  name: 'classroom',
                  value: _classrooms.Classroom
                }, {
                  name: 'activities',
                  value: _collection.Activities,
                  properties: {
                    loadChat: true
                  }
                }, {
                  name: 'credits',
                  value: _credits.Credits
                }]
              });
              //@ts-ignore;
              this.reactiveProps(['loadChat', 'testing']);
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.loadChat = !!chat;
              this.testing = testing;
              this.#modelId = id;
            }
            async loadTesting({
              id,
              activityId
            }) {
              return this.provider.getActivityTesting(id, activityId);
            }
            async load(specs = {}) {
              if (!specs.id) specs.id = this.getProperty('id');
              const data = this.testing ? await this.loadTesting(specs) : await super.load(specs);
              this.classroom.set(data.assignment.classroom);
              this.getProperty('activities').items.map(item => {
                item.set({
                  credits: data.credits
                });
              });
              if (data.activities) {
                // await this.#activities.setData(data.activities);
                this.#order = data.activities.order;
              }
              this.ready = true;
              // this.#activities = data.activities;
              return data;
            }
            consumeCoins = async () => {
              const response = await this.provider.consumeCoins();
              if (!response.status) return response;
              //await this.credits.set(response.data.credits);
              await this.set(response.data);
              this.trigger('credits.change', 'add');
              return response;
            };
            async accessToAssignment() {
              const specs = {
                id: this.#modelId
              };
              const data = await this.provider.access(specs);
              this.set(data);
            }
            static get({
              id,
              userId,
              chat,
              testing = false
            }) {
              const trackingId = `${id}.${userId}`;
              if (this.#instances.has(trackingId)) {
                return this.#instances.get(trackingId);
              }
              const instance = new Tracking({
                id,
                chat,
                testing
              });
              this.#instances.set(trackingId, instance);
              return instance;
            }
            async setCredits(data) {
              await this.credits.set(data);
              this.trigger('credits.change');
            }
            async requestClassroomAccess() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/classrooms/${this.classroom.id}/request`, {});
              if (!response.status && response.error?.code === 38) {
                console.error(response.error);
                return response;
              }
              if (response.data.status.toLowerCase() === 'authorized') {
                await this.load({
                  id: this.modelId
                });
              } else {
                await this.set({
                  access: response.data.status
                });
              }
              return response;
            }
          }
          exports.Tracking = Tracking;
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 1564365457,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TrackingProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _error = require("./error");
          var _HARCODED_ = require("./HARCODED_2");
          class TrackingProvider {
            #api;
            #parent;
            #accessed;
            get accessed() {
              return this.#accessed;
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              return _HARCODED_.HARDCODED2.data;
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/assignments/${specs.id}/tracking`, specs);
              const {
                status,
                data,
                error
              } = response;
              if (error) {
                throw new _error.CustomError(error);
              }
              if (!status) {
                throw new Error('error loading class');
              }
              if (specs?.progress) await this.#parent.processLoad(data);
              return data;
            };
            async access(specs = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/assignments/${specs.id}/access`, specs);
              if (!response.status) {
                throw new Error(`Error accessing assignment: ${response.error}`);
              }
              return response.data;
            }
            consumeCoins = async () => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
            };
            getActivityTesting = async (draftId, activityId) => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${draftId}/activities/${activityId}/testing`);
              return data;
            };
          }
          exports.TrackingProvider = TrackingProvider;
        }
      });

      /********************************
      INTERNAL MODULE: ./types/activity
      ********************************/

      ims.set('./types/activity', {
        hash: 3025505518,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var ActivityTypeEnum;
          (function (ActivityTypeEnum) {
            ActivityTypeEnum["ContentTheory"] = "content-theory";
            ActivityTypeEnum["CharacterTalk"] = "character-talk";
            ActivityTypeEnum["Debate"] = "debate";
            ActivityTypeEnum["MultipleChoice"] = "multiple-choice";
            ActivityTypeEnum["Spoken"] = "spoken";
          })(ActivityTypeEnum || (ActivityTypeEnum = {}));
        }
      });

      /*********************************
      INTERNAL MODULE: ./types/dashboard
      *********************************/

      ims.set('./types/dashboard', {
        hash: 2151938038,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityStatus = void 0;
          /**
           * Represents the possible statuses of an activity.
           */
          var ActivityStatus;
          (function (ActivityStatus) {
            ActivityStatus["PENDING"] = "pending";
            ActivityStatus["IN_PROGRESS"] = "in-progress";
            ActivityStatus["COMPLETED"] = "completed";
            ActivityStatus["OUTSTANDING"] = "outstanding";
          })(ActivityStatus || (exports.ActivityStatus = ActivityStatus = {}));
        }
      });

      /********************************
      INTERNAL MODULE: ./types/response
      ********************************/

      ims.set('./types/response', {
        hash: 1501783281,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************
      INTERNAL MODULE: ./types/tracking
      ********************************/

      ims.set('./types/tracking', {
        hash: 3168921732,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activities/index",
        "from": "Activity",
        "name": "Activity"
      }, {
        "im": "./assignments/collection",
        "from": "Assignments",
        "name": "Assignments"
      }, {
        "im": "./assignments/item",
        "from": "Assignment",
        "name": "Assignment"
      }, {
        "im": "./credits",
        "from": "Credits",
        "name": "Credits"
      }, {
        "im": "./dashboard/index",
        "from": "TrackingDashboard",
        "name": "TrackingDashboard"
      }, {
        "im": "./dashboard/providers/participant",
        "from": "ParticipantProvider",
        "name": "ParticipantProvider"
      }, {
        "im": "./index",
        "from": "Tracking",
        "name": "Tracking"
      }, {
        "im": "./types/activity",
        "from": "IActivityListItem",
        "name": "IActivityListItem"
      }, {
        "im": "./types/activity",
        "from": "IActivityBase",
        "name": "IActivityBase"
      }, {
        "im": "./types/dashboard",
        "from": "TrackingStatusType",
        "name": "TrackingStatusType"
      }, {
        "im": "./types/dashboard",
        "from": "IActivityTrackingBase",
        "name": "IActivityTrackingBase"
      }, {
        "im": "./types/dashboard",
        "from": "IDashboard",
        "name": "IDashboard"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Activity') && _export("Activity", Activity = require ? require('./activities/index').Activity : value);
        (require || prop === 'Assignments') && _export("Assignments", Assignments = require ? require('./assignments/collection').Assignments : value);
        (require || prop === 'Assignment') && _export("Assignment", Assignment = require ? require('./assignments/item').Assignment : value);
        (require || prop === 'Credits') && _export("Credits", Credits = require ? require('./credits').Credits : value);
        (require || prop === 'TrackingDashboard') && _export("TrackingDashboard", TrackingDashboard = require ? require('./dashboard/index').TrackingDashboard : value);
        (require || prop === 'ParticipantProvider') && _export("ParticipantProvider", ParticipantProvider = require ? require('./dashboard/providers/participant').ParticipantProvider : value);
        (require || prop === 'Tracking') && _export("Tracking", Tracking = require ? require('./index').Tracking : value);
        (require || prop === 'IActivityListItem') && _export("IActivityListItem", IActivityListItem = require ? require('./types/activity').IActivityListItem : value);
        (require || prop === 'IActivityBase') && _export("IActivityBase", IActivityBase = require ? require('./types/activity').IActivityBase : value);
        (require || prop === 'TrackingStatusType') && _export("TrackingStatusType", TrackingStatusType = require ? require('./types/dashboard').TrackingStatusType : value);
        (require || prop === 'IActivityTrackingBase') && _export("IActivityTrackingBase", IActivityTrackingBase = require ? require('./types/dashboard').IActivityTrackingBase : value);
        (require || prop === 'IDashboard') && _export("IDashboard", IDashboard = require ? require('./types/dashboard').IDashboard : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIQVJEQ09ERURfUkVTUE9OU0UiLCJleHBvcnRzIiwic3RhdHVzIiwiZGF0YSIsImlkIiwiY2xhc3Nyb29tIiwibmFtZSIsInBpY3R1cmUiLCJtb2R1bGUiLCJjcmVhdG9yIiwicGhvdG9VcmwiLCJvd25lciIsImxhbmd1YWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9iamVjdGl2ZSIsImF1ZGllbmNlIiwiY2F0ZWdvcnkiLCJsZXZlbCIsImZvcm1hdCIsImVudGl0eSIsImFjdGl2aXRpZXMiLCJjb3VudCIsInR5cGVzIiwicGF5ZXIiLCJjb2RlIiwicHVibGljIiwib3JkZXIiLCJpdGVtcyIsInR5cGUiLCJ0aW1lQ3JlYXRlZCIsInRpbWVVcGRhdGVkIiwiYWkiLCJyZXNvdXJjZXMiLCJtYXRlcmlhbHMiLCJhcnRpY2xlIiwic3ludGhlc2lzIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJ1cmwiLCJzcGVjcyIsInRvcGljIiwidGFzayIsIm9iamVjdGl2ZXMiLCJpbnN0cnVjdGlvbnMiLCJzZXR0aW5ncyIsImxheW91dCIsInJvbGUiLCJzdWJqZWN0IiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwidGVhY2hlcnMiLCJ1aWQiLCJhcmNoaXZlZCIsImFjY2VzcyIsImFjY2Vzc2VkIiwiY29tbXVuaXR5IiwiSEFSRENPREVEMiIsIl9zdGFydHVwIiwicmVxdWlyZSIsIl9zZXNzaW9uIiwiX3VwbG9hZGVyIiwiX2FwaSIsIkFjdGl2aXR5Q29sbGVjdGlvblByb3ZpZGVyIiwiYXBpIiwicGFyZW50IiwiY29uc3RydWN0b3IiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsImxvYWQiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsImdldCIsImFzc2lnbm1lbnRJZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJwYXJhbXMiLCJzcG9rZW4iLCJlcnJvciIsInBvc3QiLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInJlc3BvbnNlIiwidXBsb2FkIiwianNvbiIsInRyaWdnZXJFdmVudCIsImNvbnN1bWVDb2lucyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIml0ZW0iLCJBY3Rpdml0eSIsInByb3ZpZGVyIiwiQWN0aXZpdHlQcm92aWRlciIsInNldCIsImtleXMiLCJsZW5ndGgiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwibWFwIiwic2V0SXRlbXMiLCJzZXRUcmFja2luZyIsInByb2Nlc3NNYXRlcmlhbHMiLCJsb2FkQWN0aXZpdHkiLCJoYXMiLCJpbnN0YW5jZSIsIm1vZGVsSWQiLCJ0ZXN0aW5nIiwidHJpZ2dlciIsIl9jb3JlIiwiX2l0ZW0iLCJfY3JlZGl0cyIsIkl0ZW0iLCJmZWVkYmFjayIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiYW5hbHlzaXMiLCJjaGF0TW9kZWwiLCJnZXRNYXRlcmlhbHMiLCJnZXRTcGVjcyIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsIkNyZWRpdHMiLCJzdGFydHVwIiwib24iLCJjcmVkaXRzIiwiZ2V0UHJvcGVydHkiLCJjaGF0IiwiQ2hhdCIsImxvYWRBbGwiLCJsb2FkVGVzdGluZ0FjdGl2aXR5IiwiYWN0aXZpdHkiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJKU09OIiwicGFyc2UiLCJzZWxlY3Rpb24iLCJlIiwicHVibGlzaFNwb2tlbiIsImRyYWZ0SWQiLCJhY3Rpdml0eUlkIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsIkFzc2lnbm1lbnRzIiwiQXNzaWdubWVudCIsImFyZ3MiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiRGFzaGJvYXJkQWN0aXZpdGllcyIsIkRhc2hib2FyZEFjdGl2aXR5IiwiZGFzaGJvYXJkIiwicGFydGljaXBhbnRzIiwiZmlsdGVyIiwicGFydGljaXBhbnQiLCJfYWN0aXZpdGllcyIsIl9wYXJ0aWNpcGFudHMiLCJfZGFzaGJvYXJkIiwiVHJhY2tpbmdEYXNoYm9hcmQiLCJpc1VzZXJDcmVhdG9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJQYXJ0aWNpcGFudHMiLCJEYXNoYm9hcmRQcm92aWRlciIsImFyY2hpdmUiLCJyZXN0b3JlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlBhcnRpY2lwYW50QWN0aXZpdGllcyIsIk1hcCIsImNvbnNvbGUiLCJ0cmFjZSIsInNldERhdGEiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiY2hlY2siLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsImN1cnJlbnRzIiwid2FybiIsInF1ZXN0aW9ucyIsImluZGV4IiwicmVzcG9uc2VzIiwiYXR0ZW1wdHMiLCJ0cmFuc2NyaXB0aW9uIiwib2JqZWN0aXZlc0tleXMiLCJrZXkiLCJwYXJ0aWNpcGF0aW9uRGF0YSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJpY29ucyIsInRvdGFsUG9pbnRzIiwicmVkdWNlIiwiYWNjIiwicG9pbnRzIiwiUGFydGljaXBhbnQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiQXJyYXkiLCJpc0FycmF5IiwiaWRzIiwiX3BhcnRpY2lwYW50IiwiX3VzZXIiLCJhY3Rpdml0aWVzRGF0YSIsIlBhcnRpY2lwYW50UHJvdmlkZXIiLCJVc2VyRGF0YSIsInNldEFjdGl2aXRpZXMiLCJlbGVtZW50cyIsInVzZXJJZCIsInJlYWR5IiwiZW5hYmxlQUkiLCJ0ZXh0IiwibG9nIiwiQ3VzdG9tRXJyb3IiLCJtZXNzYWdlIiwidGV4dHMiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX2NsYXNzcm9vbXMiLCJUcmFja2luZyIsIm1vZGVsVHlwZSIsImluc3RhbmNlcyIsIlRyYWNraW5nUHJvdmlkZXIiLCJNb2R1bGVMaXN0SXRlbSIsIkNsYXNzcm9vbSIsInJlYWN0aXZlUHJvcHMiLCJsb2FkVGVzdGluZyIsImdldEFjdGl2aXR5VGVzdGluZyIsImFzc2lnbm1lbnQiLCJhY2Nlc3NUb0Fzc2lnbm1lbnQiLCJ0cmFja2luZ0lkIiwic2V0Q3JlZGl0cyIsInJlcXVlc3RDbGFzc3Jvb21BY2Nlc3MiLCJ0b0xvd2VyQ2FzZSIsIl9lcnJvciIsIl9IQVJDT0RFRF8iLCJBY3Rpdml0eVR5cGVFbnVtIiwiQWN0aXZpdHlTdGF0dXMiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi9IQURFUkNPREVELnRzIiwiL0hBUkNPREVEXzIudHMiLCIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLXByb3ZpZGVyLnRzIiwiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2NyZWRpdHMudHMiLCIvZGFzaGJvYXJkL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvZGFzaGJvYXJkL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9kYXNoYm9hcmQvaW5kZXgudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL3Nwb2tlbi50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2luZGV4LnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvaXRlbS50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL3VzZXIudHMiLCIvZGFzaGJvYXJkL3Byb3ZpZGVycy9kYXNoYm9hcmQudHMiLCIvZGFzaGJvYXJkL3Byb3ZpZGVycy9wYXJ0aWNpcGFudC50cyIsIi9lcnJvci50cyIsIi9pbmRleC50cyIsIi9wcm92aWRlci50cyIsIi90eXBlcy9hY3Rpdml0eS50cyIsIi90eXBlcy9kYXNoYm9hcmQudHMiLCIvcmVzcG9uc2UudHMiLCIvdHJhY2tpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBTyxNQUFNQSxrQkFBa0IsR0FBQUMsT0FBQSxDQUFBRCxrQkFBQSxHQUFHO1lBQ2pDRSxNQUFNLEVBQUUsSUFBSTtZQUNaQyxJQUFJLEVBQUU7Y0FDTEMsRUFBRSxFQUFFLHNDQUFzQztjQUMxQ0MsU0FBUyxFQUFFO2dCQUNWRCxFQUFFLEVBQUUsc0NBQXNDO2dCQUMxQ0UsSUFBSSxFQUFFLHlCQUF5QjtnQkFDL0JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE1BQU0sRUFBRTtnQkFDUEosRUFBRSxFQUFFLHNDQUFzQztnQkFDMUNLLE9BQU8sRUFBRTtrQkFDUkwsRUFBRSxFQUFFLDhCQUE4QjtrQkFDbENFLElBQUksRUFBRSx1QkFBdUI7a0JBQzdCSSxRQUFRLEVBQ1A7aUJBQ0Q7Z0JBQ0RDLEtBQUssRUFBRTtrQkFDTlAsRUFBRSxFQUFFLHNDQUFzQztrQkFDMUNFLElBQUksRUFBRSw0QkFBNEI7a0JBQ2xDSSxRQUFRLEVBQUU7aUJBQ1Y7Z0JBQ0RFLFFBQVEsRUFBRSxJQUFJO2dCQUNkQyxLQUFLLEVBQUUsc0NBQXNDO2dCQUM3Q0MsV0FBVyxFQUNWLHNLQUFzSztnQkFDdktQLE9BQU8sRUFBRSwyRkFB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