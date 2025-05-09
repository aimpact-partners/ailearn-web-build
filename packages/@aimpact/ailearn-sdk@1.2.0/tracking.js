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
        hash: 2048488668,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIQVJEQ09ERURfUkVTUE9OU0UiLCJleHBvcnRzIiwic3RhdHVzIiwiZGF0YSIsImlkIiwiY2xhc3Nyb29tIiwibmFtZSIsInBpY3R1cmUiLCJtb2R1bGUiLCJjcmVhdG9yIiwicGhvdG9VcmwiLCJvd25lciIsImxhbmd1YWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9iamVjdGl2ZSIsImF1ZGllbmNlIiwiY2F0ZWdvcnkiLCJsZXZlbCIsImZvcm1hdCIsImVudGl0eSIsImFjdGl2aXRpZXMiLCJjb3VudCIsInR5cGVzIiwicGF5ZXIiLCJjb2RlIiwicHVibGljIiwib3JkZXIiLCJpdGVtcyIsInR5cGUiLCJ0aW1lQ3JlYXRlZCIsInRpbWVVcGRhdGVkIiwiYWkiLCJyZXNvdXJjZXMiLCJtYXRlcmlhbHMiLCJhcnRpY2xlIiwic3ludGhlc2lzIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJ1cmwiLCJzcGVjcyIsInRvcGljIiwidGFzayIsIm9iamVjdGl2ZXMiLCJpbnN0cnVjdGlvbnMiLCJzZXR0aW5ncyIsImxheW91dCIsInJvbGUiLCJzdWJqZWN0IiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwidGVhY2hlcnMiLCJ1aWQiLCJhcmNoaXZlZCIsImFjY2VzcyIsImFjY2Vzc2VkIiwiY29tbXVuaXR5IiwiSEFSRENPREVEMiIsIl9zdGFydHVwIiwicmVxdWlyZSIsIl9zZXNzaW9uIiwiX3VwbG9hZGVyIiwiX2FwaSIsIkFjdGl2aXR5Q29sbGVjdGlvblByb3ZpZGVyIiwiYXBpIiwicGFyZW50IiwiY29uc3RydWN0b3IiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsImxvYWQiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsImdldCIsImFzc2lnbm1lbnRJZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJwYXJhbXMiLCJzcG9rZW4iLCJlcnJvciIsInBvc3QiLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInJlc3BvbnNlIiwidXBsb2FkIiwianNvbiIsInRyaWdnZXJFdmVudCIsImNvbnN1bWVDb2lucyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIml0ZW0iLCJBY3Rpdml0eSIsInByb3ZpZGVyIiwiQWN0aXZpdHlQcm92aWRlciIsInNldCIsImtleXMiLCJsZW5ndGgiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwibWFwIiwic2V0SXRlbXMiLCJzZXRUcmFja2luZyIsInByb2Nlc3NNYXRlcmlhbHMiLCJsb2FkQWN0aXZpdHkiLCJoYXMiLCJpbnN0YW5jZSIsIm1vZGVsSWQiLCJ0ZXN0aW5nIiwidHJpZ2dlciIsIl9jb3JlIiwiX2l0ZW0iLCJfY3JlZGl0cyIsIkl0ZW0iLCJmZWVkYmFjayIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiYW5hbHlzaXMiLCJjaGF0TW9kZWwiLCJnZXRNYXRlcmlhbHMiLCJnZXRTcGVjcyIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsIkNyZWRpdHMiLCJzdGFydHVwIiwib24iLCJjcmVkaXRzIiwiZ2V0UHJvcGVydHkiLCJjaGF0IiwiQ2hhdCIsImxvYWRBbGwiLCJsb2FkVGVzdGluZ0FjdGl2aXR5IiwiYWN0aXZpdHkiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJKU09OIiwicGFyc2UiLCJzZWxlY3Rpb24iLCJlIiwicHVibGlzaFNwb2tlbiIsImRyYWZ0SWQiLCJhY3Rpdml0eUlkIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsIkFzc2lnbm1lbnRzIiwiQXNzaWdubWVudCIsImFyZ3MiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiRGFzaGJvYXJkQWN0aXZpdGllcyIsIkRhc2hib2FyZEFjdGl2aXR5IiwiZGFzaGJvYXJkIiwicGFydGljaXBhbnRzIiwiZmlsdGVyIiwicGFydGljaXBhbnQiLCJfYWN0aXZpdGllcyIsIl9wYXJ0aWNpcGFudHMiLCJfZGFzaGJvYXJkIiwiVHJhY2tpbmdEYXNoYm9hcmQiLCJpc1VzZXJDcmVhdG9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJQYXJ0aWNpcGFudHMiLCJEYXNoYm9hcmRQcm92aWRlciIsImFyY2hpdmUiLCJyZXN0b3JlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlBhcnRpY2lwYW50QWN0aXZpdGllcyIsIk1hcCIsImNvbnNvbGUiLCJ0cmFjZSIsInNldERhdGEiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiY2hlY2siLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsImN1cnJlbnRzIiwid2FybiIsInF1ZXN0aW9ucyIsImluZGV4IiwicmVzcG9uc2VzIiwiYXR0ZW1wdHMiLCJ0cmFuc2NyaXB0aW9uIiwib2JqZWN0aXZlc0tleXMiLCJrZXkiLCJwYXJ0aWNpcGF0aW9uRGF0YSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJpY29ucyIsInRvdGFsUG9pbnRzIiwicmVkdWNlIiwiYWNjIiwicG9pbnRzIiwiUGFydGljaXBhbnQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiQXJyYXkiLCJpc0FycmF5IiwiaWRzIiwiX3BhcnRpY2lwYW50IiwiX3VzZXIiLCJhY3Rpdml0aWVzRGF0YSIsIlBhcnRpY2lwYW50UHJvdmlkZXIiLCJVc2VyRGF0YSIsInNldEFjdGl2aXRpZXMiLCJlbGVtZW50cyIsInVzZXJJZCIsInJlYWR5IiwiZW5hYmxlQUkiLCJ0ZXh0IiwibG9nIiwiQ3VzdG9tRXJyb3IiLCJtZXNzYWdlIiwidGV4dHMiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX2NsYXNzcm9vbXMiLCJUcmFja2luZyIsIm1vZGVsVHlwZSIsImluc3RhbmNlcyIsIlRyYWNraW5nUHJvdmlkZXIiLCJNb2R1bGVMaXN0SXRlbSIsIkNsYXNzcm9vbSIsInJlYWN0aXZlUHJvcHMiLCJsb2FkVGVzdGluZyIsImdldEFjdGl2aXR5VGVzdGluZyIsImFzc2lnbm1lbnQiLCJhY2Nlc3NUb0Fzc2lnbm1lbnQiLCJ0cmFja2luZ0lkIiwic2V0Q3JlZGl0cyIsInJlcXVlc3RDbGFzc3Jvb21BY2Nlc3MiLCJ0b0xvd2VyQ2FzZSIsIl9lcnJvciIsIkFjdGl2aXR5VHlwZUVudW0iLCJBY3Rpdml0eVN0YXR1cyIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL0hBREVSQ09ERUQudHMiLCIvSEFSQ09ERURfMi50cyIsIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24tcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9wcm92aWRlci50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvY3JlZGl0cy50cyIsIi9kYXNoYm9hcmQvYWN0aXZpdGllcy9pbmRleC50cyIsIi9kYXNoYm9hcmQvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Rhc2hib2FyZC9pbmRleC50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvc3Bva2VuLnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvaW5kZXgudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9pdGVtLnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvdXNlci50cyIsIi9kYXNoYm9hcmQvcHJvdmlkZXJzL2Rhc2hib2FyZC50cyIsIi9kYXNoYm9hcmQvcHJvdmlkZXJzL3BhcnRpY2lwYW50LnRzIiwiL2Vycm9yLnRzIiwiL2luZGV4LnRzIiwiL3Byb3ZpZGVyLnRzIiwiL3R5cGVzL2FjdGl2aXR5LnRzIiwiL3R5cGVzL2Rhc2hib2FyZC50cyIsIi9yZXNwb25zZS50cyIsIi90cmFja2luZy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPLE1BQU1BLGtCQUFrQixHQUFBQyxPQUFBLENBQUFELGtCQUFBLEdBQUc7WUFDakNFLE1BQU0sRUFBRSxJQUFJO1lBQ1pDLElBQUksRUFBRTtjQUNMQyxFQUFFLEVBQUUsc0NBQXNDO2NBQzFDQyxTQUFTLEVBQUU7Z0JBQ1ZELEVBQUUsRUFBRSxzQ0FBc0M7Z0JBQzFDRSxJQUFJLEVBQUUseUJBQXlCO2dCQUMvQkMsT0FBTyxFQUFFO2VBQ1Q7Y0FDREMsTUFBTSxFQUFFO2dCQUNQSixFQUFFLEVBQUUsc0NBQXNDO2dCQUMxQ0ssT0FBTyxFQUFFO2tCQUNSTCxFQUFFLEVBQUUsOEJBQThCO2tCQUNsQ0UsSUFBSSxFQUFFLHVCQUF1QjtrQkFDN0JJLFFBQVEsRUFDUDtpQkFDRDtnQkFDREMsS0FBSyxFQUFFO2tCQUNOUCxFQUFFLEVBQUUsc0NBQXNDO2tCQUMxQ0UsSUFBSSxFQUFFLDRCQUE0QjtrQkFDbENJLFFBQVEsRUFBRTtpQkFDVjtnQkFDREUsUUFBUSxFQUFFLElBQUk7Z0JBQ2RDLEtBQUssRUFBRSxzQ0FBc0M7Z0JBQzdDQyxXQUFXLEVBQ1Ysc0tBQXNLO2dCQUN2S1AsT0FBTyxFQUFFLDJGQUEyRjtnQkFDcEdRLFNBQVMsRUFDUixrR0FBa0c7Z0JBQ25HQyxRQUFRLEVBQUU7a0JBQ1RDLFFBQVEsRUFBRSxrQkFBa0I7a0JBQzVCQyxLQUFLLEVBQUUsb0JBQW9CO2tCQUMzQkMsTUFBTSxFQUFFLG9CQUFvQjtrQkFDNUJDLE1BQU0sRUFBRTtpQkFDUjtnQkFDREMsVUFBVSxFQUFFO2tCQUNYQyxLQUFLLEVBQUUsQ0FBQztrQkFDUkMsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLFFBQVE7O2VBRWxGO2NBQ0RDLEtBQUssRUFBRSxjQUFjO2NBQ3JCQyxJQUFJLEVBQUUsU0FBUztjQUNmQyxNQUFNLEVBQUUsS0FBSztjQUNiTCxVQUFVLEVBQUU7Z0JBQ1hNLEtBQUssRUFBRSxDQUNOLHNDQUFzQyxFQUN0QyxzQ0FBc0MsRUFDdEMsc0NBQXNDLEVBQ3RDLHNDQUFzQyxFQUN0QyxzQ0FBc0MsQ0FDdEM7Z0JBQ0RDLEtBQUssRUFBRTtrQkFDTixzQ0FBc0MsRUFBRTtvQkFDdkN4QixFQUFFLEVBQUUsc0NBQXNDO29CQUMxQ3lCLElBQUksRUFBRSxnQkFBZ0I7b0JBQ3RCaEIsS0FBSyxFQUFFLG9DQUFvQztvQkFDM0NDLFdBQVcsRUFDVixrSEFBa0g7b0JBQ25IRixRQUFRLEVBQUUsSUFBSTtvQkFDZEwsT0FBTyxFQUFFLEVBQUU7b0JBQ1hDLE1BQU0sRUFBRTtzQkFDUEosRUFBRSxFQUFFLHNDQUFzQztzQkFDMUNLLE9BQU8sRUFBRTt3QkFDUkwsRUFBRSxFQUFFLDhCQUE4Qjt3QkFDbENFLElBQUksRUFBRSx1QkFBdUI7d0JBQzdCSSxRQUFRLEVBQ1A7dUJBQ0Q7c0JBQ0RLLFNBQVMsRUFDUixrR0FBa0c7c0JBQ25HRixLQUFLLEVBQUUsc0NBQXNDO3NCQUM3Q0MsV0FBVyxFQUNWLHNLQUFzSztzQkFDdktGLFFBQVEsRUFBRSxJQUFJO3NCQUNkTCxPQUFPLEVBQ04sMkZBQTJGO3NCQUM1RlMsUUFBUSxFQUFFO3dCQUNUQyxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QkMsS0FBSyxFQUFFLG9CQUFvQjt3QkFDM0JDLE1BQU0sRUFBRSxvQkFBb0I7d0JBQzVCQyxNQUFNLEVBQUU7dUJBQ1I7c0JBQ0RNLE1BQU0sRUFBRSxJQUFJO3NCQUNaeEIsTUFBTSxFQUFFLFFBQVE7c0JBQ2hCMkIsSUFBSSxFQUFFLFFBQVE7c0JBQ2RDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQkMsV0FBVyxFQUFFLGFBQWE7c0JBQzFCcEIsS0FBSyxFQUFFO3dCQUNOUCxFQUFFLEVBQUUsc0NBQXNDO3dCQUMxQ0UsSUFBSSxFQUFFLDRCQUE0Qjt3QkFDbENJLFFBQVEsRUFBRTt1QkFDVjtzQkFDRHNCLEVBQUUsRUFBRTtxQkFDSjtvQkFDREMsU0FBUyxFQUFFO3NCQUNWQyxTQUFTLEVBQUU7d0JBQ1ZDLE9BQU8sRUFDTixzNkdBQXM2Rzt3QkFDdjZHQyxTQUFTLEVBQ1IsOG5EQUE4bkQ7d0JBQy9uREMsUUFBUSxFQUNQLGd3RUFBZ3dFO3dCQUNqd0VDLE1BQU0sRUFBRTswQkFDUEgsT0FBTyxFQUFFOzRCQUNSakMsTUFBTSxFQUFFLElBQUk7NEJBQ1pxQyxHQUFHLEVBQUU7Ozt1QkFHUDtzQkFDREMsS0FBSyxFQUFFO3dCQUNOQyxLQUFLLEVBQUUsbUNBQW1DO3dCQUMxQ0MsSUFBSSxFQUFFLDJUQUEyVDt3QkFDalVDLFVBQVUsRUFBRSxDQUNYOzBCQUNDckMsSUFBSSxFQUFFLDRCQUE0QjswQkFDbENTLFNBQVMsRUFDUjt5QkFDRCxFQUNEOzBCQUNDVCxJQUFJLEVBQUUsb0JBQW9COzBCQUMxQlMsU0FBUyxFQUNSO3lCQUNELENBQ0Q7d0JBQ0Q2QixZQUFZLEVBQ1g7O3FCQUVGO29CQUNEQyxRQUFRLEVBQUU7c0JBQ1RDLE1BQU0sRUFBRTs7bUJBRVQ7a0JBQ0Qsc0NBQXNDLEVBQUU7b0JBQ3ZDMUMsRUFBRSxFQUFFLHNDQUFzQztvQkFDMUN5QixJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QmhCLEtBQUssRUFBRSx1Q0FBdUM7b0JBQzlDQyxXQUFXLEVBQ1YsbUpBQW1KO29CQUNwSkYsUUFBUSxFQUFFLElBQUk7b0JBQ2RMLE9BQU8sRUFBRSxFQUFFO29CQUNYQyxNQUFNLEVBQUU7c0JBQ1BKLEVBQUUsRUFBRSxzQ0FBc0M7c0JBQzFDSyxPQUFPLEVBQUU7d0JBQ1JMLEVBQUUsRUFBRSw4QkFBOEI7d0JBQ2xDRSxJQUFJLEVBQUUsdUJBQXVCO3dCQUM3QkksUUFBUSxFQUNQO3VCQUNEO3NCQUNESyxTQUFTLEVBQ1Isa0dBQWtHO3NCQUNuR0YsS0FBSyxFQUFFLHNDQUFzQztzQkFDN0NDLFdBQVcsRUFDVixzS0FBc0s7c0JBQ3ZLRixRQUFRLEVBQUUsSUFBSTtzQkFDZEwsT0FBTyxFQUNOLDJGQUEyRjtzQkFDNUZTLFFBQVEsRUFBRTt3QkFDVEMsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUJDLEtBQUssRUFBRSxvQkFBb0I7d0JBQzNCQyxNQUFNLEVBQUUsb0JBQW9CO3dCQUM1QkMsTUFBTSxFQUFFO3VCQUNSO3NCQUNETSxNQUFNLEVBQUUsSUFBSTtzQkFDWnhCLE1BQU0sRUFBRSxRQUFRO3NCQUNoQjJCLElBQUksRUFBRSxRQUFRO3NCQUNkQyxXQUFXLEVBQUUsYUFBYTtzQkFDMUJDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQnBCLEtBQUssRUFBRTt3QkFDTlAsRUFBRSxFQUFFLHNDQUFzQzt3QkFDMUNFLElBQUksRUFBRSw0QkFBNEI7d0JBQ2xDSSxRQUFRLEVBQUU7dUJBQ1Y7c0JBQ0RzQixFQUFFLEVBQUU7cUJBQ0o7b0JBQ0RDLFNBQVMsRUFBRTtzQkFDVkMsU0FBUyxFQUFFLEVBQUU7c0JBQ2JNLEtBQUssRUFBRTt3QkFDTk8sSUFBSSxFQUFFLDRJQUE0STt3QkFDbEpMLElBQUksRUFBRSwyVEFBMlQ7d0JBQ2pVQyxVQUFVLEVBQUUsQ0FDWDswQkFDQ3JDLElBQUksRUFBRSxxQkFBcUI7MEJBQzNCUyxTQUFTLEVBQUU7eUJBQ1gsRUFDRDswQkFDQ1QsSUFBSSxFQUFFLDJCQUEyQjswQkFDakNTLFNBQVMsRUFDUjt5QkFDRCxFQUNEOzBCQUNDVCxJQUFJLEVBQUUsMEJBQTBCOzBCQUNoQ1MsU0FBUyxFQUNSO3lCQUNELENBQ0Q7d0JBQ0Q2QixZQUFZLEVBQUU7O3FCQUVmO29CQUNEQyxRQUFRLEVBQUU7c0JBQ1RDLE1BQU0sRUFBRTs7bUJBRVQ7a0JBQ0Qsc0NBQXNDLEVBQUU7b0JBQ3ZDMUMsRUFBRSxFQUFFLHNDQUFzQztvQkFDMUN5QixJQUFJLEVBQUUsUUFBUTtvQkFDZGhCLEtBQUssRUFBRSxrQ0FBa0M7b0JBQ3pDQyxXQUFXLEVBQ1YsMkpBQTJKO29CQUM1SkYsUUFBUSxFQUFFLElBQUk7b0JBQ2RMLE9BQU8sRUFBRSxFQUFFO29CQUNYQyxNQUFNLEVBQUU7c0JBQ1BKLEVBQUUsRUFBRSxzQ0FBc0M7c0JBQzFDSyxPQUFPLEVBQUU7d0JBQ1JMLEVBQUUsRUFBRSw4QkFBOEI7d0JBQ2xDRSxJQUFJLEVBQUUsdUJBQXVCO3dCQUM3QkksUUFBUSxFQUNQO3VCQUNEO3NCQUNESyxTQUFTLEVBQ1Isa0dBQWtHO3NCQUNuR0YsS0FBSyxFQUFFLHNDQUFzQztzQkFDN0NDLFdBQVcsRUFDVixzS0FBc0s7c0JBQ3ZLRixRQUFRLEVBQUUsSUFBSTtzQkFDZEwsT0FBTyxFQUNOLDJGQUEyRjtzQkFDNUZTLFFBQVEsRUFBRTt3QkFDVEMsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUJDLEtBQUssRUFBRSxvQkFBb0I7d0JBQzNCQyxNQUFNLEVBQUUsb0JBQW9CO3dCQUM1QkMsTUFBTSxFQUFFO3VCQUNSO3NCQUNETSxNQUFNLEVBQUUsSUFBSTtzQkFDWnhCLE1BQU0sRUFBRSxRQUFRO3NCQUNoQjJCLElBQUksRUFBRSxRQUFRO3NCQUNkQyxXQUFXLEVBQUUsYUFBYTtzQkFDMUJDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQnBCLEtBQUssRUFBRTt3QkFDTlAsRUFBRSxFQUFFLHNDQUFzQzt3QkFDMUNFLElBQUksRUFBRSw0QkFBNEI7d0JBQ2xDSSxRQUFRLEVBQUU7dUJBQ1Y7c0JBQ0RzQixFQUFFLEVBQUU7cUJBQ0o7b0JBQ0RDLFNBQVMsRUFBRTtzQkFDVkMsU0FBUyxFQUFFLEVBQUU7c0JBQ2JNLEtBQUssRUFBRTt3QkFDTk8sSUFBSSxFQUFFLFNBQVM7d0JBQ2ZDLE9BQU8sRUFDTiwwSUFBMEk7d0JBQzNJTixJQUFJLEVBQUUsaVlBQWlZO3dCQUN2WUMsVUFBVSxFQUFFLENBQ1g7MEJBQ0NyQyxJQUFJLEVBQUUsZUFBZTswQkFDckJTLFNBQVMsRUFDUjt5QkFDRCxFQUNEOzBCQUNDVCxJQUFJLEVBQUUscUJBQXFCOzBCQUMzQlMsU0FBUyxFQUNSO3lCQUNELEVBQ0Q7MEJBQ0NULElBQUksRUFBRSwwQkFBMEI7MEJBQ2hDUyxTQUFTLEVBQUU7eUJBQ1gsRUFDRDswQkFDQ1QsSUFBSSxFQUFFLGVBQWU7MEJBQ3JCUyxTQUFTLEVBQ1I7eUJBQ0QsQ0FDRDt3QkFDRDZCLFlBQVksRUFBRTs7cUJBRWY7b0JBQ0RDLFFBQVEsRUFBRTtzQkFDVEMsTUFBTSxFQUFFOzttQkFFVDtrQkFDRCxzQ0FBc0MsRUFBRTtvQkFDdkMxQyxFQUFFLEVBQUUsc0NBQXNDO29CQUMxQ3lCLElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCaEIsS0FBSyxFQUFFLGdFQUFnRTtvQkFDdkVDLFdBQVcsRUFDVixzTEFBc0w7b0JBQ3ZMRixRQUFRLEVBQUUsSUFBSTtvQkFDZEwsT0FBTyxFQUFFLEVBQUU7b0JBQ1hDLE1BQU0sRUFBRTtzQkFDUEosRUFBRSxFQUFFLHNDQUFzQztzQkFDMUNLLE9BQU8sRUFBRTt3QkFDUkwsRUFBRSxFQUFFLDhCQUE4Qjt3QkFDbENFLElBQUksRUFBRSx1QkFBdUI7d0JBQzdCSSxRQUFRLEVBQ1A7dUJBQ0Q7c0JBQ0RLLFNBQVMsRUFDUixrR0FBa0c7c0JBQ25HRixLQUFLLEVBQUUsc0NBQXNDO3NCQUM3Q0MsV0FBVyxFQUNWLHNLQUFzSztzQkFDdktGLFFBQVEsRUFBRSxJQUFJO3NCQUNkTCxPQUFPLEVBQ04sMkZBQTJGO3NCQUM1RlMsUUFBUSxFQUFFO3dCQUNUQyxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QkMsS0FBSyxFQUFFLG9CQUFvQjt3QkFDM0JDLE1BQU0sRUFBRSxvQkFBb0I7d0JBQzVCQyxNQUFNLEVBQUU7dUJBQ1I7c0JBQ0RNLE1BQU0sRUFBRSxJQUFJO3NCQUNaeEIsTUFBTSxFQUFFLFFBQVE7c0JBQ2hCMkIsSUFBSSxFQUFFLFFBQVE7c0JBQ2RDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQkMsV0FBVyxFQUFFLGFBQWE7c0JBQzFCcEIsS0FBSyxFQUFFO3dCQUNOUCxFQUFFLEVBQUUsc0NBQXNDO3dCQUMxQ0UsSUFBSSxFQUFFLDRCQUE0Qjt3QkFDbENJLFFBQVEsRUFBRTt1QkFDVjtzQkFDRHNCLEVBQUUsRUFBRTtxQkFDSjtvQkFDREMsU0FBUyxFQUFFO3NCQUNWQyxTQUFTLEVBQUU7d0JBQ1ZlLFVBQVUsRUFDVDt1QkFDRDtzQkFDRFQsS0FBSyxFQUFFO3dCQUNORSxJQUFJLEVBQUUsRUFBRTt3QkFDUkMsVUFBVSxFQUFFLEVBQUU7d0JBQ2RDLFlBQVksRUFBRTs7cUJBRWY7b0JBQ0RDLFFBQVEsRUFBRTtzQkFDVEMsTUFBTSxFQUFFOzttQkFFVDtrQkFDRCxzQ0FBc0MsRUFBRTtvQkFDdkMxQyxFQUFFLEVBQUUsc0NBQXNDO29CQUMxQ3lCLElBQUksRUFBRSxRQUFRO29CQUNkaEIsS0FBSyxFQUFFLGtDQUFrQztvQkFDekNDLFdBQVcsRUFDVixpSkFBaUo7b0JBQ2xKRixRQUFRLEVBQUUsSUFBSTtvQkFDZEwsT0FBTyxFQUFFLEVBQUU7b0JBQ1hDLE1BQU0sRUFBRTtzQkFDUEosRUFBRSxFQUFFLHNDQUFzQztzQkFDMUNLLE9BQU8sRUFBRTt3QkFDUkwsRUFBRSxFQUFFLDhCQUE4Qjt3QkFDbENFLElBQUksRUFBRSx1QkFBdUI7d0JBQzdCSSxRQUFRLEVBQ1A7dUJBQ0Q7c0JBQ0RLLFNBQVMsRUFDUixrR0FBa0c7c0JBQ25HRixLQUFLLEVBQUUsc0NBQXNDO3NCQUM3Q0MsV0FBVyxFQUNWLHNLQUFzSztzQkFDdktGLFFBQVEsRUFBRSxJQUFJO3NCQUNkTCxPQUFPLEVBQ04sMkZBQTJGO3NCQUM1RlMsUUFBUSxFQUFFO3dCQUNUQyxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QkMsS0FBSyxFQUFFLG9CQUFvQjt3QkFDM0JDLE1BQU0sRUFBRSxvQkFBb0I7d0JBQzVCQyxNQUFNLEVBQUU7dUJBQ1I7c0JBQ0RNLE1BQU0sRUFBRSxJQUFJO3NCQUNaeEIsTUFBTSxFQUFFLFFBQVE7c0JBQ2hCMkIsSUFBSSxFQUFFLFFBQVE7c0JBQ2RDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQkMsV0FBVyxFQUFFLGFBQWE7c0JBQzFCcEIsS0FBSyxFQUFFO3dCQUNOUCxFQUFFLEVBQUUsc0NBQXNDO3dCQUMxQ0UsSUFBSSxFQUFFLDRCQUE0Qjt3QkFDbENJLFFBQVEsRUFBRTt1QkFDVjtzQkFDRHNCLEVBQUUsRUFBRTtxQkFDSjtvQkFDREMsU0FBUyxFQUFFO3NCQUNWQyxTQUFTLEVBQUUsRUFBRTtzQkFDYk0sS0FBSyxFQUFFO3dCQUNOUyxVQUFVLEVBQ1QsMFRBQTBUO3dCQUMzVEMsUUFBUSxFQUFFLENBQ1Q7MEJBQ0M1QyxJQUFJLEVBQUUsVUFBVTswQkFDaEIwQyxPQUFPLEVBQ047eUJBQ0QsRUFDRDswQkFDQzFDLElBQUksRUFBRSxXQUFXOzBCQUNqQjBDLE9BQU8sRUFDTjt5QkFDRCxFQUNEOzBCQUNDMUMsSUFBSSxFQUFFLFlBQVk7MEJBQ2xCMEMsT0FBTyxFQUNOO3lCQUNELEVBQ0Q7MEJBQ0MxQyxJQUFJLEVBQUUsUUFBUTswQkFDZDBDLE9BQU8sRUFDTjt5QkFDRCxDQUNEO3dCQUNETixJQUFJLEVBQUUsMFlBQTBZO3dCQUNoWkMsVUFBVSxFQUFFLEVBQUU7d0JBQ2RDLFlBQVksRUFBRTs7cUJBRWY7b0JBQ0RDLFFBQVEsRUFBRTtzQkFDVEMsTUFBTSxFQUFFOzs7O2VBSVg7Y0FDREssUUFBUSxFQUFFLENBQ1Q7Z0JBQ0NDLEdBQUcsRUFBRSw4QkFBOEI7Z0JBQ25DOUMsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0JJLFFBQVEsRUFDUDtlQUNELENBQ0Q7Y0FDRDJDLFFBQVEsRUFBRSxLQUFLO2NBQ2ZDLE1BQU0sRUFBRSxVQUFVO2NBQ2xCQyxRQUFRLEVBQUUsS0FBSztjQUNmQyxTQUFTLEVBQUU7O1dBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN2FNLE1BQU1DLFVBQVUsR0FBQXhELE9BQUEsQ0FBQXdELFVBQUEsR0FBRztZQUN6QnZELE1BQU0sRUFBRSxJQUFJO1lBQ1pDLElBQUksRUFBRTtjQUNMQyxFQUFFLEVBQUUsc0NBQXNDO2NBQzFDQyxTQUFTLEVBQUU7Z0JBQ1ZELEVBQUUsRUFBRSxzQ0FBc0M7Z0JBQzFDRSxJQUFJLEVBQUUseUJBQXlCO2dCQUMvQkMsT0FBTyxFQUFFO2VBQ1Q7Y0FDREMsTUFBTSxFQUFFO2dCQUNQSixFQUFFLEVBQUUsc0NBQXNDO2dCQUMxQ0ssT0FBTyxFQUFFO2tCQUNSTCxFQUFFLEVBQUUsOEJBQThCO2tCQUNsQ0UsSUFBSSxFQUFFLHVCQUF1QjtrQkFDN0JJLFFBQVEsRUFDUDtpQkFDRDtnQkFDREMsS0FBSyxFQUFFO2tCQUNOUCxFQUFFLEVBQUUsc0NBQXNDO2tCQUMxQ0UsSUFBSSxFQUFFLDRCQUE0QjtrQkFDbENJLFFBQVEsRUFBRTtpQkFDVjtnQkFDREUsUUFBUSxFQUFFLElBQUk7Z0JBQ2RDLEtBQUssRUFBRSxzQ0FBc0M7Z0JBQzdDQyxXQUFXLEVBQ1Ysc0tBQXNLO2dCQUN2S1AsT0FBTyxFQUFFLDJGQUEyRjtnQkFDcEdRLFNBQVMsRUFDUixrR0FBa0c7Z0JBQ25HQyxRQUFRLEVBQUU7a0JBQ1RDLFFBQVEsRUFBRSxrQkFBa0I7a0JBQzVCQyxLQUFLLEVBQUUsb0JBQW9CO2tCQUMzQkMsTUFBTSxFQUFFLG9CQUFvQjtrQkFDNUJDLE1BQU0sRUFBRTtpQkFDUjtnQkFDREMsVUFBVSxFQUFFO2tCQUNYQyxLQUFLLEVBQUUsQ0FBQztrQkFDUkMsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLFFBQVE7O2VBRWxGO2NBQ0RDLEtBQUssRUFBRSxjQUFjO2NBQ3JCQyxJQUFJLEVBQUUsU0FBUztjQUNmQyxNQUFNLEVBQUUsS0FBSztjQUNiTCxVQUFVLEVBQUU7Z0JBQ1hNLEtBQUssRUFBRSxDQUNOLHNDQUFzQyxFQUN0QyxzQ0FBc0MsRUFDdEMsc0NBQXNDLEVBQ3RDLHNDQUFzQyxFQUN0QyxzQ0FBc0MsQ0FDdEM7Z0JBQ0RDLEtBQUssRUFBRTtrQkFDTixzQ0FBc0MsRUFBRTtvQkFDdkN4QixFQUFFLEVBQUUsc0NBQXNDO29CQUMxQ3lCLElBQUksRUFBRSxnQkFBZ0I7b0JBQ3RCaEIsS0FBSyxFQUFFLG9DQUFvQztvQkFDM0NDLFdBQVcsRUFDVixrSEFBa0g7b0JBQ25IRixRQUFRLEVBQUUsSUFBSTtvQkFDZEwsT0FBTyxFQUFFLEVBQUU7b0JBQ1hDLE1BQU0sRUFBRTtzQkFDUEosRUFBRSxFQUFFLHNDQUFzQztzQkFDMUNLLE9BQU8sRUFBRTt3QkFDUkwsRUFBRSxFQUFFLDhCQUE4Qjt3QkFDbENFLElBQUksRUFBRSx1QkFBdUI7d0JBQzdCSSxRQUFRLEVBQ1A7dUJBQ0Q7c0JBQ0RLLFNBQVMsRUFDUixrR0FBa0c7c0JBQ25HRixLQUFLLEVBQUUsc0NBQXNDO3NCQUM3Q0MsV0FBVyxFQUNWLHNLQUFzSztzQkFDdktGLFFBQVEsRUFBRSxJQUFJO3NCQUNkTCxPQUFPLEVBQ04sMkZBQTJGO3NCQUM1RlMsUUFBUSxFQUFFO3dCQUNUQyxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QkMsS0FBSyxFQUFFLG9CQUFvQjt3QkFDM0JDLE1BQU0sRUFBRSxvQkFBb0I7d0JBQzVCQyxNQUFNLEVBQUU7dUJBQ1I7c0JBQ0RNLE1BQU0sRUFBRSxJQUFJO3NCQUNaeEIsTUFBTSxFQUFFLFFBQVE7c0JBQ2hCMkIsSUFBSSxFQUFFLFFBQVE7c0JBQ2RDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQkMsV0FBVyxFQUFFLGFBQWE7c0JBQzFCcEIsS0FBSyxFQUFFO3dCQUNOUCxFQUFFLEVBQUUsc0NBQXNDO3dCQUMxQ0UsSUFBSSxFQUFFLDRCQUE0Qjt3QkFDbENJLFFBQVEsRUFBRTt1QkFDVjtzQkFDRHNCLEVBQUUsRUFBRTtxQkFDSjtvQkFDREMsU0FBUyxFQUFFO3NCQUNWQyxTQUFTLEVBQUU7d0JBQ1ZDLE9BQU8sRUFDTixzNkdBQXM2Rzt3QkFDdjZHQyxTQUFTLEVBQ1IsOG5EQUE4bkQ7d0JBQy9uREMsUUFBUSxFQUNQLGd3RUFBZ3dFO3dCQUNqd0VDLE1BQU0sRUFBRTswQkFDUEgsT0FBTyxFQUFFOzRCQUNSakMsTUFBTSxFQUFFLElBQUk7NEJBQ1pxQyxHQUFHLEVBQUU7Ozt1QkFHUDtzQkFDREMsS0FBSyxFQUFFO3dCQUNOQyxLQUFLLEVBQUUsbUNBQW1DO3dCQUMxQ0MsSUFBSSxFQUFFLDJUQUEyVDt3QkFDalVDLFVBQVUsRUFBRSxDQUNYOzBCQUNDckMsSUFBSSxFQUFFLDRCQUE0QjswQkFDbENTLFNBQVMsRUFDUjt5QkFDRCxFQUNEOzBCQUNDVCxJQUFJLEVBQUUsb0JBQW9COzBCQUMxQlMsU0FBUyxFQUNSO3lCQUNELENBQ0Q7d0JBQ0Q2QixZQUFZLEVBQ1g7O3FCQUVGO29CQUNEQyxRQUFRLEVBQUU7c0JBQ1RDLE1BQU0sRUFBRTs7bUJBRVQ7a0JBQ0Qsc0NBQXNDLEVBQUU7b0JBQ3ZDMUMsRUFBRSxFQUFFLHNDQUFzQztvQkFDMUN5QixJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QmhCLEtBQUssRUFBRSx1Q0FBdUM7b0JBQzlDQyxXQUFXLEVBQ1YsbUpBQW1KO29CQUNwSkYsUUFBUSxFQUFFLElBQUk7b0JBQ2RMLE9BQU8sRUFBRSxFQUFFO29CQUNYQyxNQUFNLEVBQUU7c0JBQ1BKLEVBQUUsRUFBRSxzQ0FBc0M7c0JBQzFDSyxPQUFPLEVBQUU7d0JBQ1JMLEVBQUUsRUFBRSw4QkFBOEI7d0JBQ2xDRSxJQUFJLEVBQUUsdUJBQXVCO3dCQUM3QkksUUFBUSxFQUNQO3VCQUNEO3NCQUNESyxTQUFTLEVBQ1Isa0dBQWtHO3NCQUNuR0YsS0FBSyxFQUFFLHNDQUFzQztzQkFDN0NDLFdBQVcsRUFDVixzS0FBc0s7c0JBQ3ZLRixRQUFRLEVBQUUsSUFBSTtzQkFDZEwsT0FBTyxFQUNOLDJGQUEyRjtzQkFDNUZTLFFBQVEsRUFBRTt3QkFDVEMsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUJDLEtBQUssRUFBRSxvQkFBb0I7d0JBQzNCQyxNQUFNLEVBQUUsb0JBQW9CO3dCQUM1QkMsTUFBTSxFQUFFO3VCQUNSO3NCQUNETSxNQUFNLEVBQUUsSUFBSTtzQkFDWnhCLE1BQU0sRUFBRSxRQUFRO3NCQUNoQjJCLElBQUksRUFBRSxRQUFRO3NCQUNkQyxXQUFXLEVBQUUsYUFBYTtzQkFDMUJDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQnBCLEtBQUssRUFBRTt3QkFDTlAsRUFBRSxFQUFFLHNDQUFzQzt3QkFDMUNFLElBQUksRUFBRSw0QkFBNEI7d0JBQ2xDSSxRQUFRLEVBQUU7dUJBQ1Y7c0JBQ0RzQixFQUFFLEVBQUU7cUJBQ0o7b0JBQ0RDLFNBQVMsRUFBRTtzQkFDVkMsU0FBUyxFQUFFLEVBQUU7c0JBQ2JNLEtBQUssRUFBRTt3QkFDTk8sSUFBSSxFQUFFLDRJQUE0STt3QkFDbEpMLElBQUksRUFBRSwyVEFBMlQ7d0JBQ2pVQyxVQUFVLEVBQUUsQ0FDWDswQkFDQ3JDLElBQUksRUFBRSxxQkFBcUI7MEJBQzNCUyxTQUFTLEVBQUU7eUJBQ1gsRUFDRDswQkFDQ1QsSUFBSSxFQUFFLDJCQUEyQjswQkFDakNTLFNBQVMsRUFDUjt5QkFDRCxFQUNEOzBCQUNDVCxJQUFJLEVBQUUsMEJBQTBCOzBCQUNoQ1MsU0FBUyxFQUNSO3lCQUNELENBQ0Q7d0JBQ0Q2QixZQUFZLEVBQUU7O3FCQUVmO29CQUNEQyxRQUFRLEVBQUU7c0JBQ1RDLE1BQU0sRUFBRTs7bUJBRVQ7a0JBQ0Qsc0NBQXNDLEVBQUU7b0JBQ3ZDMUMsRUFBRSxFQUFFLHNDQUFzQztvQkFDMUN5QixJQUFJLEVBQUUsUUFBUTtvQkFDZGhCLEtBQUssRUFBRSxrQ0FBa0M7b0JBQ3pDQyxXQUFXLEVBQ1YsMkpBQTJKO29CQUM1SkYsUUFBUSxFQUFFLElBQUk7b0JBQ2RMLE9BQU8sRUFBRSxFQUFFO29CQUNYQyxNQUFNLEVBQUU7c0JBQ1BKLEVBQUUsRUFBRSxzQ0FBc0M7c0JBQzFDSyxPQUFPLEVBQUU7d0JBQ1JMLEVBQUUsRUFBRSw4QkFBOEI7d0JBQ2xDRSxJQUFJLEVBQUUsdUJBQXVCO3dCQUM3QkksUUFBUSxFQUNQO3VCQUNEO3NCQUNESyxTQUFTLEVBQ1Isa0dBQWtHO3NCQUNuR0YsS0FBSyxFQUFFLHNDQUFzQztzQkFDN0NDLFdBQVcsRUFDVixzS0FBc0s7c0JBQ3ZLRixRQUFRLEVBQUUsSUFBSTtzQkFDZEwsT0FBTyxFQUNOLDJGQUEyRjtzQkFDNUZTLFFBQVEsRUFBRTt3QkFDVEMsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUJDLEtBQUssRUFBRSxvQkFBb0I7d0JBQzNCQyxNQUFNLEVBQUUsb0JBQW9CO3dCQUM1QkMsTUFBTSxFQUFFO3VCQUNSO3NCQUNETSxNQUFNLEVBQUUsSUFBSTtzQkFDWnhCLE1BQU0sRUFBRSxRQUFRO3NCQUNoQjJCLElBQUksRUFBRSxRQUFRO3NCQUNkQyxXQUFXLEVBQUUsYUFBYTtzQkFDMUJDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQnBCLEtBQUssRUFBRTt3QkFDTlAsRUFBRSxFQUFFLHNDQUFzQzt3QkFDMUNFLElBQUksRUFBRSw0QkFBNEI7d0JBQ2xDSSxRQUFRLEVBQUU7dUJBQ1Y7c0JBQ0RzQixFQUFFLEVBQUU7cUJBQ0o7b0JBQ0RDLFNBQVMsRUFBRTtzQkFDVkMsU0FBUyxFQUFFLEVBQUU7c0JBQ2JNLEtBQUssRUFBRTt3QkFDTk8sSUFBSSxFQUFFLFNBQVM7d0JBQ2ZDLE9BQU8sRUFDTiwwSUFBMEk7d0JBQzNJTixJQUFJLEVBQUUsaVlBQWlZO3dCQUN2WUMsVUFBVSxFQUFFLENBQ1g7MEJBQ0NyQyxJQUFJLEVBQUUsZUFBZTswQkFDckJTLFNBQVMsRUFDUjt5QkFDRCxFQUNEOzBCQUNDVCxJQUFJLEVBQUUscUJBQXFCOzBCQUMzQlMsU0FBUyxFQUNSO3lCQUNELEVBQ0Q7MEJBQ0NULElBQUksRUFBRSwwQkFBMEI7MEJBQ2hDUyxTQUFTLEVBQUU7eUJBQ1gsRUFDRDswQkFDQ1QsSUFBSSxFQUFFLGVBQWU7MEJBQ3JCUyxTQUFTLEVBQ1I7eUJBQ0QsQ0FDRDt3QkFDRDZCLFlBQVksRUFBRTs7cUJBRWY7b0JBQ0RDLFFBQVEsRUFBRTtzQkFDVEMsTUFBTSxFQUFFOzttQkFFVDtrQkFDRCxzQ0FBc0MsRUFBRTtvQkFDdkMxQyxFQUFFLEVBQUUsc0NBQXNDO29CQUMxQ3lCLElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCaEIsS0FBSyxFQUFFLGdFQUFnRTtvQkFDdkVDLFdBQVcsRUFDVixzTEFBc0w7b0JBQ3ZMRixRQUFRLEVBQUUsSUFBSTtvQkFDZEwsT0FBTyxFQUFFLEVBQUU7b0JBQ1hDLE1BQU0sRUFBRTtzQkFDUEosRUFBRSxFQUFFLHNDQUFzQztzQkFDMUNLLE9BQU8sRUFBRTt3QkFDUkwsRUFBRSxFQUFFLDhCQUE4Qjt3QkFDbENFLElBQUksRUFBRSx1QkFBdUI7d0JBQzdCSSxRQUFRLEVBQ1A7dUJBQ0Q7c0JBQ0RLLFNBQVMsRUFDUixrR0FBa0c7c0JBQ25HRixLQUFLLEVBQUUsc0NBQXNDO3NCQUM3Q0MsV0FBVyxFQUNWLHNLQUFzSztzQkFDdktGLFFBQVEsRUFBRSxJQUFJO3NCQUNkTCxPQUFPLEVBQ04sMkZBQTJGO3NCQUM1RlMsUUFBUSxFQUFFO3dCQUNUQyxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QkMsS0FBSyxFQUFFLG9CQUFvQjt3QkFDM0JDLE1BQU0sRUFBRSxvQkFBb0I7d0JBQzVCQyxNQUFNLEVBQUU7dUJBQ1I7c0JBQ0RNLE1BQU0sRUFBRSxJQUFJO3NCQUNaeEIsTUFBTSxFQUFFLFFBQVE7c0JBQ2hCMkIsSUFBSSxFQUFFLFFBQVE7c0JBQ2RDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQkMsV0FBVyxFQUFFLGFBQWE7c0JBQzFCcEIsS0FBSyxFQUFFO3dCQUNOUCxFQUFFLEVBQUUsc0NBQXNDO3dCQUMxQ0UsSUFBSSxFQUFFLDRCQUE0Qjt3QkFDbENJLFFBQVEsRUFBRTt1QkFDVjtzQkFDRHNCLEVBQUUsRUFBRTtxQkFDSjtvQkFDREMsU0FBUyxFQUFFO3NCQUNWQyxTQUFTLEVBQUU7d0JBQ1ZlLFVBQVUsRUFDVDt1QkFDRDtzQkFDRFQsS0FBSyxFQUFFO3dCQUNORSxJQUFJLEVBQUUsRUFBRTt3QkFDUkMsVUFBVSxFQUFFLEVBQUU7d0JBQ2RDLFlBQVksRUFBRTs7cUJBRWY7b0JBQ0RDLFFBQVEsRUFBRTtzQkFDVEMsTUFBTSxFQUFFOzttQkFFVDtrQkFDRCxzQ0FBc0MsRUFBRTtvQkFDdkMxQyxFQUFFLEVBQUUsc0NBQXNDO29CQUMxQ3lCLElBQUksRUFBRSxRQUFRO29CQUNkaEIsS0FBSyxFQUFFLGtDQUFrQztvQkFDekNDLFdBQVcsRUFDVixpSkFBaUo7b0JBQ2xKRixRQUFRLEVBQUUsSUFBSTtvQkFDZEwsT0FBTyxFQUFFLEVBQUU7b0JBQ1hDLE1BQU0sRUFBRTtzQkFDUEosRUFBRSxFQUFFLHNDQUFzQztzQkFDMUNLLE9BQU8sRUFBRTt3QkFDUkwsRUFBRSxFQUFFLDhCQUE4Qjt3QkFDbENFLElBQUksRUFBRSx1QkFBdUI7d0JBQzdCSSxRQUFRLEVBQ1A7dUJBQ0Q7c0JBQ0RLLFNBQVMsRUFDUixrR0FBa0c7c0JBQ25HRixLQUFLLEVBQUUsc0NBQXNDO3NCQUM3Q0MsV0FBVyxFQUNWLHNLQUFzSztzQkFDdktGLFFBQVEsRUFBRSxJQUFJO3NCQUNkTCxPQUFPLEVBQ04sMkZBQTJGO3NCQUM1RlMsUUFBUSxFQUFFO3dCQUNUQyxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QkMsS0FBSyxFQUFFLG9CQUFvQjt3QkFDM0JDLE1BQU0sRUFBRSxvQkFBb0I7d0JBQzVCQyxNQUFNLEVBQUU7dUJBQ1I7c0JBQ0RNLE1BQU0sRUFBRSxJQUFJO3NCQUNaeEIsTUFBTSxFQUFFLFFBQVE7c0JBQ2hCMkIsSUFBSSxFQUFFLFFBQVE7c0JBQ2RDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQkMsV0FBVyxFQUFFLGFBQWE7c0JBQzFCcEIsS0FBSyxFQUFFO3dCQUNOUCxFQUFFLEVBQUUsc0NBQXNDO3dCQUMxQ0UsSUFBSSxFQUFFLDRCQUE0Qjt3QkFDbENJLFFBQVEsRUFBRTt1QkFDVjtzQkFDRHNCLEVBQUUsRUFBRTtxQkFDSjtvQkFDREMsU0FBUyxFQUFFO3NCQUNWQyxTQUFTLEVBQUUsRUFBRTtzQkFDYk0sS0FBSyxFQUFFO3dCQUNOUyxVQUFVLEVBQ1QsMFRBQTBUO3dCQUMzVEMsUUFBUSxFQUFFLENBQ1Q7MEJBQ0M1QyxJQUFJLEVBQUUsVUFBVTswQkFDaEIwQyxPQUFPLEVBQ047eUJBQ0QsRUFDRDswQkFDQzFDLElBQUksRUFBRSxXQUFXOzBCQUNqQjBDLE9BQU8sRUFDTjt5QkFDRCxFQUNEOzBCQUNDMUMsSUFBSSxFQUFFLFlBQVk7MEJBQ2xCMEMsT0FBTyxFQUNOO3lCQUNELEVBQ0Q7MEJBQ0MxQyxJQUFJLEVBQUUsUUFBUTswQkFDZDBDLE9BQU8sRUFDTjt5QkFDRCxDQUNEO3dCQUNETixJQUFJLEVBQUUsMFlBQTBZO3dCQUNoWkMsVUFBVSxFQUFFLEVBQUU7d0JBQ2RDLFlBQVksRUFBRTs7cUJBRWY7b0JBQ0RDLFFBQVEsRUFBRTtzQkFDVEMsTUFBTSxFQUFFOzs7O2VBSVg7Y0FDREssUUFBUSxFQUFFLENBQ1Q7Z0JBQ0NDLEdBQUcsRUFBRSw4QkFBOEI7Z0JBQ25DOUMsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0JJLFFBQVEsRUFDUDtlQUNELENBQ0Q7Y0FDRDJDLFFBQVEsRUFBRSxLQUFLO2NBQ2ZDLE1BQU0sRUFBRSxVQUFVO2NBQ2xCQyxRQUFRLEVBQUUsS0FBSztjQUNmQyxTQUFTLEVBQUU7O1dBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN2FELElBQUFFLFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFNBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLElBQUEsR0FBQUgsT0FBQTtVQUtNLE1BQU9JLDBCQUEwQjtZQUN0QyxDQUFBQyxHQUFJO1lBQ0osQ0FBQUMsTUFBTztZQUVQQyxZQUFZRCxNQUFrQjtjQUM3QixJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlGLElBQUEsQ0FBQUssR0FBRyxDQUFDVCxRQUFBLENBQUFVLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFM0MsSUFBSSxDQUFDLENBQUFMLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUNBTSxJQUFJLEdBQUcsTUFBTS9CLEtBQUssSUFBRztjQUNwQixNQUFNZ0MsS0FBSyxHQUFHLE1BQU1aLFFBQUEsQ0FBQWEsY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFSLEdBQUksQ0FBQ1csTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsTUFBTTtnQkFBRXRFLE1BQU07Z0JBQUVDO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUE2RCxHQUFJLENBQUNZLEdBQUcsQ0FBQyxnQkFBZ0JwQyxLQUFLLENBQUNxQyxZQUFZLGVBQWVyQyxLQUFLLENBQUNwQyxFQUFFLEVBQUUsQ0FBQztjQUV6RyxJQUFJLENBQUNGLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUk0RSxLQUFLLENBQUMsd0JBQXdCLENBQUM7O2NBRzFDO2NBRUEsT0FBTztnQkFBRTVFLE1BQU07Z0JBQUVDO2NBQUksQ0FBRTtZQUN4QixDQUFDO1lBRUQ0RSxJQUFJLEdBQUcsSUFBSSxDQUFDUixJQUFJO1lBRWhCUyxPQUFPLEdBQUcsTUFBTXhDLEtBQUssSUFBRztjQUN2QixJQUFJQSxLQUFLLENBQUNYLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQy9CLE9BQU9XLEtBQUssQ0FBQ1gsSUFBSTtnQkFDakIsT0FBTyxJQUFJLENBQUNvQixVQUFVLENBQUNULEtBQUssQ0FBQ3lDLE1BQU0sQ0FBQzs7Y0FFckMsT0FBTyxJQUFJLENBQUNDLE1BQU0sQ0FBQzFDLEtBQUssQ0FBQ3JDLElBQUksQ0FBQztZQUMvQixDQUFDO1lBRUQ4QyxVQUFVLEdBQUcsTUFBT1QsS0FBVSxJQUFJO2NBQ2pDLE1BQU1nQyxLQUFLLEdBQUcsTUFBTVosUUFBQSxDQUFBYSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDVyxNQUFNLENBQUNILEtBQUssQ0FBQztjQUV2QixNQUFNO2dCQUFFdEUsTUFBTTtnQkFBRUMsSUFBSTtnQkFBRWdGO2NBQUssQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFuQixHQUFJLENBQUNvQixJQUFJLENBQUMsb0NBQW9DLEVBQUU1QyxLQUFLLENBQUM7Y0FFakcsSUFBSTJDLEtBQUssRUFBRTtnQkFDVixNQUFNLElBQUlMLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQzs7Y0FHL0MsT0FBTztnQkFBRTVFLE1BQU07Z0JBQUVDO2NBQUksQ0FBRTtZQUN4QixDQUFDO1lBRUQrRSxNQUFNLEdBQUcsTUFBTTFDLEtBQUssSUFBRztjQUN0QixNQUFNNkMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLG1CQUFtQixDQUFDL0MsS0FBSyxDQUFDO2NBQy9DLE1BQU1nRCxJQUFJLEdBQUcsSUFBSUMsUUFBUSxFQUFFO2NBQzNCSixLQUFLLENBQUNLLE9BQU8sQ0FBQ0MsSUFBSSxJQUFHO2dCQUNwQkgsSUFBSSxDQUFDSSxNQUFNLENBQUNELElBQUksRUFBRW5ELEtBQUssQ0FBQ21ELElBQUksQ0FBQyxDQUFDO2NBQy9CLENBQUMsQ0FBQztjQUVGLE1BQU1FLEdBQUcsR0FBRyxJQUFJaEMsU0FBQSxDQUFBaUMsU0FBUyxFQUFFO2NBQzNCRCxHQUFHLENBQUNsQixNQUFNLENBQUNmLFFBQUEsQ0FBQWEsY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUssQ0FBQztjQUNyQyxNQUFNdUIsUUFBUSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csTUFBTSxDQUFDUixJQUFJLEVBQUUsR0FBRzlCLFFBQUEsQ0FBQVUsU0FBUyxDQUFDQyxJQUFJLENBQUNDLE9BQU8sK0JBQStCLENBQUM7Y0FDakcsTUFBTTJCLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNFLElBQUksRUFBRTtjQUNsQyxJQUFJLENBQUNBLElBQUksQ0FBQy9GLE1BQU0sRUFBRTtnQkFDakIsTUFBTSxJQUFJNEUsS0FBSyxDQUFDLDZCQUE2QixDQUFDOztjQUcvQyxJQUFJLENBQUNvQixZQUFZLEVBQUU7Y0FDbkIsT0FBT0QsSUFBSSxDQUFDOUYsSUFBSTtZQUNqQixDQUFDO1lBRUQsTUFBTWdHLFlBQVlBLENBQUE7Y0FDakIsTUFBTTNCLEtBQUssR0FBRyxNQUFNWixRQUFBLENBQUFhLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2NBQzdDLElBQUksQ0FBQyxDQUFBUixHQUFJLENBQUNXLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2NBRXZCLE9BQU8sSUFBSSxDQUFDLENBQUFSLEdBQUksQ0FBQ29CLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUFuQixNQUFPLENBQUNZLFlBQVksZ0JBQWdCLEVBQUUsRUFBRSxDQUFDO1lBQ3JGOztVQUNBNUUsT0FBQSxDQUFBOEQsMEJBQUEsR0FBQUEsMEJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEZELElBQUFxQyxXQUFBLEdBQUF6QyxPQUFBO1VBQ0EsSUFBQTBDLENBQUEsR0FBQTFDLE9BQUE7VUFFQSxJQUFBMkMsU0FBQSxHQUFBM0MsT0FBQTtVQUVNLE1BQU80QyxVQUFXLFNBQVFILFdBQUEsQ0FBQUksVUFBc0M7WUFDckUsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQS9FLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBdUMsWUFBWW1CLEtBQUs7Y0FDaEIsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLEtBQUs7Z0JBQ1JqRSxNQUFNLEVBQUUsVUFBVTtnQkFDbEJ1RixJQUFJLEVBQUVOLENBQUEsQ0FBQU8sUUFBUTtnQkFDZEMsUUFBUSxFQUFFUCxTQUFBLENBQUFRO2VBQ1YsQ0FBQztjQUNGLE1BQU07Z0JBQUU3QyxNQUFNO2dCQUFFeUMsUUFBUSxHQUFHLEtBQUs7Z0JBQUUsR0FBR2xFO2NBQUssQ0FBRSxHQUFHNkMsS0FBSztjQUVwRCxJQUFJLENBQUMsQ0FBQW9CLFFBQVMsR0FBR3hDLE1BQU07Y0FDdkIsSUFBSSxDQUFDLENBQUF5QyxRQUFTLEdBQUdBLFFBQVE7WUFDMUI7WUFFQUssR0FBRyxHQUFHNUcsSUFBSSxJQUFHO2NBQ1osSUFBSSxDQUFDQSxJQUFJLElBQUltRixNQUFNLENBQUMwQixJQUFJLENBQUM3RyxJQUFJLENBQUMsQ0FBQzhHLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzVDOztjQUdELElBQUksQ0FBQyxDQUFBdEYsS0FBTSxHQUFHeEIsSUFBSSxDQUFDd0IsS0FBSztjQUN4QixJQUFJQyxLQUFLLEdBQVUwRCxNQUFNLENBQUM0QixNQUFNLENBQUMvRyxJQUFJLENBQUN5QixLQUFLLENBQUM7Y0FDNUMsTUFBTXBCLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQWlHLFFBQVMsQ0FBQ2pHLE1BQU0sQ0FBQzJHLGFBQWEsRUFBRTtjQUNwRHZGLEtBQUssR0FBR3pCLElBQUksQ0FBQ3dCLEtBQUssQ0FBQ3lGLEdBQUcsQ0FBQ2hILEVBQUUsS0FBSztnQkFBRSxHQUFHRCxJQUFJLENBQUN5QixLQUFLLENBQUN4QixFQUFFLENBQUM7Z0JBQUVJLE1BQU07Z0JBQUV5RCxNQUFNLEVBQUUsSUFBSTtnQkFBRXlDLFFBQVEsRUFBRTtjQUFJLENBQUUsQ0FBQyxDQUFDO2NBQzNGLElBQUksQ0FBQ1csUUFBUSxDQUFDekYsS0FBSyxDQUFDO2NBQ3BCLElBQUksQ0FBQ0EsS0FBSyxDQUFDOEQsT0FBTyxDQUFFaUIsSUFBYyxJQUFJO2dCQUNyQ0EsSUFBSSxDQUFDVyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUFiLFFBQVMsQ0FBQztnQkFDaENFLElBQUksQ0FBQ1ksZ0JBQWdCLEVBQUU7Y0FDeEIsQ0FBQyxDQUFDO2NBRUYsT0FBT3BILElBQUk7WUFDWixDQUFDO1lBRUQsTUFBTXFILFlBQVlBLENBQUM7Y0FBRXBIO1lBQUUsQ0FBa0I7Y0FDeEMsSUFBSSxJQUFJLENBQUNnSCxHQUFHLENBQUNLLEdBQUcsQ0FBQ3JILEVBQUUsQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDZ0gsR0FBRyxDQUFDeEMsR0FBRyxDQUFDeEUsRUFBRSxDQUFDO2NBRTdDO2NBRUEsTUFBTXNILFFBQVEsR0FBRyxJQUFJckIsQ0FBQSxDQUFBTyxRQUFRLENBQUM7Z0JBQzdCM0MsTUFBTSxFQUFFLElBQUk7Z0JBQ1o3RCxFQUFFO2dCQUNGc0csUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBQSxRQUFTO2dCQUN4QjdCLFlBQVksRUFBRSxJQUFJLENBQUM0QixRQUFRLENBQUNrQixPQUFPO2dCQUNuQ0MsT0FBTyxFQUFFLElBQUksQ0FBQ25CLFFBQVEsQ0FBQ21CLE9BQU87Z0JBQzlCbkIsUUFBUSxFQUFFLElBQUksQ0FBQ0E7ZUFDZixDQUFDO2NBQ0Y7Y0FDQSxNQUFNaUIsUUFBUSxDQUFDbkQsSUFBSSxFQUFFO2NBRXJCbUQsUUFBUSxDQUFDRyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7Y0FDbEMsSUFBSSxDQUFDLENBQUFwQixRQUFTLENBQUNvQixPQUFPLENBQUMsZ0JBQWdCLENBQUM7Y0FDeEMsT0FBT0gsUUFBUTtZQUNoQjs7VUFDQXpILE9BQUEsQ0FBQXNHLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RUQsSUFBQXVCLEtBQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBb0UsS0FBQSxHQUFBcEUsT0FBQTtVQUVBLElBQUFxRSxRQUFBLEdBQUFyRSxPQUFBO1VBR0EsSUFBQTJDLFNBQUEsR0FBQTNDLE9BQUE7VUFFTztVQUFVLE1BQU9pRCxRQUFTLFNBQVFtQixLQUFBLENBQUFFLElBQWlDO1lBQ3pFLENBQUF4QixRQUFTO1lBaUJULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBQ0EsQ0FBQTVCLFlBQWE7WUFFYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUVBLENBQUFxRCxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBQyxvQkFBcUI7WUFDckIsSUFBSUEsb0JBQW9CQSxDQUFBO2NBQ3ZCLE9BQU8sSUFBSSxDQUFDLENBQUFBLG9CQUFxQjtZQUNsQztZQUVBLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBLElBQUl6RixVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUNWLFNBQVMsRUFBRU8sS0FBSyxFQUFFRyxVQUFVO1lBQ3pDO1lBRUEsQ0FBQU0sVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUEsQ0FBQW9GLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUNBLENBQUFULE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUNBLENBQUFsQixRQUFTO1lBRVQ0QixZQUFZQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUNyRyxTQUFTLEVBQUVDLFNBQVMsR0FBRyxJQUFJLENBQUNELFNBQVMsQ0FBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUztZQUM3RTtZQUVBcUcsUUFBUUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDdEcsU0FBUyxFQUFFTyxLQUFLLEdBQUcsSUFBSSxDQUFDUCxTQUFTLENBQUNPLEtBQUssR0FBRyxJQUFJLENBQUNBLEtBQUs7WUFDakU7WUFDQTBCLFlBQVk7Y0FBRUQsTUFBTTtjQUFFN0QsRUFBRTtjQUFFd0gsT0FBTyxHQUFHLEtBQUs7Y0FBRSxHQUFHcEY7WUFBSyxDQUFrQjtjQUNwRSxLQUFLLENBQUM7Z0JBQ0xwQyxFQUFFO2dCQUNGZ0IsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLEdBQUdvQixLQUFLO2dCQUNSZ0csVUFBVSxFQUFFLENBQ1gsSUFBSSxFQUNKLE1BQU0sRUFDTixTQUFTLEVBQ1QsT0FBTyxFQUNQLGFBQWEsRUFDYixVQUFVLEVBQ1YsUUFBUSxFQUNSLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFdBQVcsRUFDWCxVQUFVLEVBQ1YsT0FBTyxFQUNQLE1BQU0sRUFDTixRQUFRLEVBQ1I7a0JBQ0NsSSxJQUFJLEVBQUUsU0FBUztrQkFDZm1JLEtBQUssRUFBRVQsUUFBQSxDQUFBVTtpQkFDUCxFQUVELE1BQU0sRUFDTixNQUFNLENBQ047Z0JBQ0Q3QixRQUFRLEVBQUVQLFNBQUEsQ0FBQVE7ZUFDVixDQUFDO2NBQ0YsSUFBSXRFLEtBQUssQ0FBQ2lFLFFBQVEsRUFBRSxJQUFJLENBQUNhLFdBQVcsQ0FBQzlFLEtBQUssQ0FBQ2lFLFFBQVEsQ0FBQztjQUNwRCxJQUFJLENBQUMsQ0FBQW1CLE9BQVEsR0FBR0EsT0FBTztjQUN2QixJQUFJO2dCQUFFL0MsWUFBWTtnQkFBRTFFLElBQUk7Z0JBQUV1RztjQUFRLENBQUUsR0FBR2xFLEtBQUs7Y0FFNUMsSUFBSSxDQUFDLENBQUFrRSxRQUFTLEdBQUdBLFFBQVE7Y0FDekI3QixZQUFZLEdBQUdBLFlBQVksR0FBR0EsWUFBWSxHQUFHWixNQUFNLENBQUN3QyxRQUFRLENBQUM1QixZQUFZO2NBRXpFLElBQUksQ0FBQzhELE9BQU8sQ0FBQzlELFlBQVksRUFBRTFFLElBQUksQ0FBQztZQUNqQztZQUVBbUgsV0FBV0EsQ0FBQ2IsUUFBUTtjQUNuQixJQUFJLENBQUMsQ0FBQUEsUUFBUyxHQUFHQSxRQUFRO2NBQ3pCLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUNtQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsTUFBSztnQkFDeEMsSUFBSSxDQUFDN0IsR0FBRyxDQUFDO2tCQUFFOEIsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBcEMsUUFBUyxDQUFDb0MsT0FBTyxDQUFDMUIsYUFBYTtnQkFBRSxDQUFFLENBQUM7Z0JBQzdELElBQUksQ0FBQ1UsT0FBTyxDQUFDLGdCQUFnQixDQUFDO2NBQy9CLENBQUMsQ0FBQztZQUNIO1lBQ0EsTUFBTWMsT0FBT0EsQ0FBQzlELFlBQVksRUFBRTFFLElBQUs7Y0FDaEMsSUFBSSxDQUFDLENBQUEwRSxZQUFhLEdBQUdBLFlBQVk7Y0FFakMsSUFBSSxJQUFJLENBQUMsQ0FBQTZCLFFBQVMsSUFBSSxJQUFJLENBQUNvQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQy9DLElBQUksQ0FBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQUNvQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBRXpDO1lBRUEsTUFBTXBDLFFBQVFBLENBQUN2RyxJQUFJO2NBQ2xCLE1BQU00SSxJQUFJLEdBQUcsSUFBSWpCLEtBQUEsQ0FBQWtCLElBQUksQ0FBQztnQkFBRTVJLEVBQUUsRUFBRUQsSUFBSSxDQUFDQyxFQUFFO2dCQUFFUSxRQUFRLEVBQUUsSUFBSSxDQUFDQTtjQUFRLENBQUUsQ0FBQztjQUUvRCxJQUFJLENBQUMsQ0FBQXlILFNBQVUsR0FBR1UsSUFBSTtjQUN0QixNQUFNQSxJQUFJLENBQUNFLE9BQU8sQ0FBQztnQkFBRTdJLEVBQUUsRUFBRUQsSUFBSSxDQUFDQztjQUFFLENBQUUsQ0FBQztjQUVuQyxJQUFJLENBQUM4RixZQUFZLENBQUMsYUFBYSxDQUFDO1lBQ2pDO1lBRUEzQixJQUFJLEdBQUcsTUFBQUEsQ0FBTy9CLEtBQUEsR0FBNEIsRUFBRSxLQUFJO2NBQy9DLElBQUksQ0FBQ0EsS0FBSyxDQUFDcEMsRUFBRSxFQUFFb0MsS0FBSyxDQUFDcEMsRUFBRSxHQUFHLElBQUksQ0FBQzBJLFdBQVcsQ0FBQyxJQUFJLENBQVc7Y0FFMUR0RyxLQUFLLENBQUNxQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUFBLFlBQWE7Y0FFdkMsTUFBTTFFLElBQUksR0FBRyxJQUFJLENBQUN5SCxPQUFPLEdBQ3RCLE1BQU0sSUFBSSxDQUFDZixRQUFRLENBQUNxQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUN6QyxRQUFRLENBQUNxQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDQSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FDaEcsTUFBTSxLQUFLLENBQUN2RSxJQUFJLENBQUMvQixLQUFLLENBQUM7Y0FFMUIsTUFBTSxJQUFJLENBQUN1RSxHQUFHLENBQUM7Z0JBQUUsR0FBRzVHLElBQUksQ0FBQ2dKLFFBQVE7Z0JBQUVOLE9BQU8sRUFBRTFJLElBQUksQ0FBQzBJLE9BQU87Z0JBQUVySSxNQUFNLEVBQUVMLElBQUksQ0FBQ0s7Y0FBTSxDQUFFLENBQUM7Y0FFaEY7Y0FDQSxJQUFJLENBQUMsQ0FBQWlHLFFBQVMsQ0FBQ00sR0FBRyxDQUFDNUcsSUFBSSxDQUFDO2NBQ3hCLElBQUksQ0FBQyxDQUFBc0csUUFBUyxDQUFDb0IsT0FBTyxDQUFDLGdCQUFnQixDQUFDO2NBQ3hDO2NBRUEsSUFBSSxDQUFDLENBQUF1QixPQUFRLEVBQUU7Y0FDZixPQUFPakosSUFBSTtZQUNaLENBQUM7WUFFRCxDQUFBaUosT0FBUUMsQ0FBQTtjQUNQLElBQUksSUFBSSxDQUFDbkgsU0FBUyxFQUFFZSxVQUFVLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxDQUFBQSxVQUFXLEdBQUdxRyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNySCxTQUFTLENBQUNlLFVBQVUsQ0FBQzs7Y0FFekQsSUFBSSxJQUFJLENBQUNoQixTQUFTLEVBQUVDLFNBQVMsRUFBRWUsVUFBVSxFQUFFO2dCQUMxQyxJQUFJLENBQUMsQ0FBQUEsVUFBVyxHQUFHcUcsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDdEgsU0FBUyxDQUFDQyxTQUFTLENBQUNlLFVBQVUsQ0FBQzs7WUFFcEU7WUFDQXNFLGdCQUFnQkEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUE2QixPQUFRLEVBQUU7WUFDdkI7WUFDQSxNQUFNcEUsT0FBT0EsQ0FBQztjQUFFQyxNQUFNO2NBQUVwRDtZQUFJLENBQUU7Y0FDN0IsSUFBSTtnQkFDSCxNQUFNa0UsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDYyxRQUFRLENBQUM3QixPQUFPLENBQUM7a0JBQUVDLE1BQU07a0JBQUVwRDtnQkFBSSxDQUFFLENBQUM7Z0JBQzlELElBQUksQ0FBQyxDQUFBNEUsUUFBUyxHQUFHVixRQUFRLENBQUM1RixJQUFJLENBQUNzRyxRQUFRO2dCQUV2QyxJQUFJLENBQUMsQ0FBQXhELFVBQVcsQ0FBQ3VHLFNBQVMsR0FBRyxTQUFTO2dCQUN0QyxJQUFJLENBQUNySixJQUFJLEdBQUc0RixRQUFRLENBQUM1RixJQUFJLENBQUNzRyxRQUFRO2VBQ2xDLENBQUMsT0FBT2dELENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUkzRSxLQUFLLENBQUMsa0NBQWtDLENBQUM7O1lBRXJEO1lBRUEsTUFBTTRFLGFBQWFBLENBQUM7Y0FBRXpFLE1BQU07Y0FBRXBEO1lBQUksQ0FBRTtjQUNuQyxJQUFJLENBQUNvRCxNQUFNLENBQUMwRSxPQUFPLEVBQUUxRSxNQUFNLENBQUNKLFlBQVksR0FBR0ksTUFBTSxDQUFDSixZQUFZLElBQUksSUFBSSxDQUFDLENBQUFBLFlBQWE7Y0FDcEZJLE1BQU0sQ0FBQzJFLFVBQVUsR0FBRzNFLE1BQU0sQ0FBQzJFLFVBQVUsSUFBSSxJQUFJLENBQUN4SixFQUFFO2NBTWhELE1BQU1ELElBQUksR0FBYyxNQUFNLElBQUksQ0FBQzBHLFFBQVEsQ0FBQzdCLE9BQU8sQ0FBQztnQkFBRTdFLElBQUksRUFBRThFLE1BQU07Z0JBQUVwRDtjQUFJLENBQUUsQ0FBQztjQUUzRSxJQUFJLENBQUNrRixHQUFHLENBQUM7Z0JBQUU1RztjQUFJLENBQUUsQ0FBQztjQUNsQixJQUFJLENBQUMsQ0FBQWlJLFFBQVMsR0FBR2pJLElBQUksQ0FBQ2lJLFFBQVE7Y0FDOUIsSUFBSSxDQUFDLENBQUFGLFFBQVMsR0FBRy9ILElBQUksQ0FBQytILFFBQVE7Y0FDOUIsSUFBSSxDQUFDLENBQUFDLG9CQUFxQixHQUFHaEksSUFBSSxDQUFDZ0ksb0JBQW9CO1lBQ3ZEO1lBRUFwQixHQUFHLEdBQUc1RyxJQUFJLElBQUc7Y0FDWixNQUFNNEYsUUFBUSxHQUFHLEtBQUssQ0FBQ2dCLEdBQUcsQ0FBQzVHLElBQUksQ0FBQztjQUNoQyxJQUFJLENBQUMsQ0FBQWlKLE9BQVEsRUFBRTtjQUNmLElBQUksQ0FBQ3ZCLE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FDdEIsT0FBTzlCLFFBQVE7WUFDaEIsQ0FBQztZQUVESSxZQUFZLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCLE9BQU8sSUFBSSxDQUFDLENBQUFNLFFBQVMsQ0FBQ04sWUFBWSxFQUFFO1lBQ3JDLENBQUM7O1VBQ0RsRyxPQUFBLENBQUEyRyxRQUFBLEdBQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDak5ELElBQUE5QyxJQUFBLEdBQUFILE9BQUE7VUFFQSxJQUFBRCxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxTQUFBLEdBQUFGLE9BQUE7VUFJTSxNQUFPbUQsZ0JBQWdCO1lBQzVCLENBQUE5QyxHQUFJO1lBQ0osQ0FBQUMsTUFBTztZQUVQQyxZQUFZRCxNQUFnQjtjQUMzQixJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlGLElBQUEsQ0FBQUssR0FBRyxDQUFDVCxRQUFBLENBQUFVLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFM0MsSUFBSSxDQUFDLENBQUFMLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUNBTSxJQUFJLEdBQUcsTUFBTS9CLEtBQUssSUFBRztjQUNwQixNQUFNZ0MsS0FBSyxHQUFHLE1BQU1aLFFBQUEsQ0FBQWEsY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFSLEdBQUksQ0FBQ1csTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsTUFBTTtnQkFBRXRFLE1BQU07Z0JBQUVDO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUE2RCxHQUFJLENBQUNZLEdBQUcsQ0FBQyxnQkFBZ0JwQyxLQUFLLENBQUNxQyxZQUFZLGVBQWVyQyxLQUFLLENBQUNwQyxFQUFFLEVBQUUsQ0FBQztjQUV6RyxJQUFJLENBQUNGLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUk0RSxLQUFLLENBQUMsd0JBQXdCLENBQUM7O2NBRzFDLElBQUl0QyxLQUFLLEVBQUVxSCxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQTVGLE1BQU8sQ0FBQzZGLFdBQVcsQ0FBQzNKLElBQUksQ0FBQztjQUV6RCxPQUFPQSxJQUFJO1lBQ1osQ0FBQztZQUVEK0ksbUJBQW1CLEdBQUcsTUFBQUEsQ0FBT1MsT0FBTyxFQUFFQyxVQUFVLEtBQUk7Y0FDbkQsTUFBTXBGLEtBQUssR0FBRyxNQUFNWixRQUFBLENBQUFhLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2NBQzdDLElBQUksQ0FBQyxDQUFBUixHQUFJLENBQUNXLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2NBRXZCLE1BQU07Z0JBQUV0RSxNQUFNO2dCQUFFQztjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBNkQsR0FBSSxDQUFDWSxHQUFHLENBQUMsbUJBQW1CK0UsT0FBTyxlQUFlQyxVQUFVLFVBQVUsQ0FBQztjQUMzRyxPQUFPekosSUFBSTtZQUNaLENBQUM7WUFDRDRFLElBQUksR0FBRyxJQUFJLENBQUNSLElBQUk7WUFFaEJTLE9BQU8sR0FBRyxNQUFNeEMsS0FBSyxJQUFHO2NBQ3ZCLElBQUlBLEtBQUssQ0FBQ1gsSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDL0IsT0FBT1csS0FBSyxDQUFDWCxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQ29CLFVBQVUsQ0FBQ1QsS0FBSyxDQUFDeUMsTUFBTSxDQUFDOztjQUVyQyxPQUFPLElBQUksQ0FBQ0MsTUFBTSxDQUFDMUMsS0FBSyxDQUFDckMsSUFBSSxDQUFDO1lBQy9CLENBQUM7WUFFRDhDLFVBQVUsR0FBRyxNQUFPVCxLQUFVLElBQUk7Y0FDakMsTUFBTWdDLEtBQUssR0FBRyxNQUFNWixRQUFBLENBQUFhLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2NBQzdDLElBQUksQ0FBQyxDQUFBUixHQUFJLENBQUNXLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2NBRXZCLE1BQU07Z0JBQUV0RSxNQUFNO2dCQUFFQyxJQUFJO2dCQUFFZ0Y7Y0FBSyxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQW5CLEdBQUksQ0FBQ29CLElBQUksQ0FBQyxvQ0FBb0MsRUFBRTVDLEtBQUssQ0FBQztjQUVqRyxJQUFJMkMsS0FBSyxFQUFFO2dCQUNWLE1BQU0sSUFBSUwsS0FBSyxDQUFDLDZCQUE2QixDQUFDOztjQUcvQyxPQUFPO2dCQUFFNUUsTUFBTTtnQkFBRUM7Y0FBSSxDQUFFO1lBQ3hCLENBQUM7WUFFRCtFLE1BQU0sR0FBRyxNQUFNMUMsS0FBSyxJQUFHO2NBQ3RCLE1BQU02QyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUMvQyxLQUFLLENBQUM7Y0FDL0MsTUFBTWdELElBQUksR0FBRyxJQUFJQyxRQUFRLEVBQUU7Y0FDM0JKLEtBQUssQ0FBQ0ssT0FBTyxDQUFDQyxJQUFJLElBQUc7Z0JBQ3BCSCxJQUFJLENBQUNJLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFbkQsS0FBSyxDQUFDbUQsSUFBSSxDQUFDLENBQUM7Y0FDL0IsQ0FBQyxDQUFDO2NBRUYsTUFBTUUsR0FBRyxHQUFHLElBQUloQyxTQUFBLENBQUFpQyxTQUFTLEVBQUU7Y0FDM0JELEdBQUcsQ0FBQ2xCLE1BQU0sQ0FBQyxNQUFNZixRQUFBLENBQUFhLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLLENBQUM7Y0FDM0MsTUFBTXVCLFFBQVEsR0FBRyxNQUFNRixHQUFHLENBQUNHLE1BQU0sQ0FBQ1IsSUFBSSxFQUFFLEdBQUc5QixRQUFBLENBQUFVLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLCtCQUErQixDQUFDO2NBQ2pHLE1BQU0yQixJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRSxJQUFJLEVBQUU7Y0FDbEMsSUFBSSxDQUFDQSxJQUFJLENBQUMvRixNQUFNLEVBQUU7Z0JBQ2pCLE1BQU0sSUFBSTRFLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQzs7Y0FHL0MsT0FBT21CLElBQUksQ0FBQzlGLElBQUk7WUFDakIsQ0FBQztZQUVELE1BQU1nRyxZQUFZQSxDQUFBO2NBQ2pCLE1BQU0zQixLQUFLLEdBQUcsTUFBTVosUUFBQSxDQUFBYSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDVyxNQUFNLENBQUNILEtBQUssQ0FBQztjQUV2QixPQUFPLElBQUksQ0FBQyxDQUFBUixHQUFJLENBQUNvQixJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFBbkIsTUFBTyxDQUFDWSxZQUFZLGdCQUFnQixFQUFFLEVBQUUsQ0FBQztZQUNyRjs7VUFDQTVFLE9BQUEsQ0FBQTZHLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RGRCxJQUFBVixXQUFBLEdBQUF6QyxPQUFBO1VBQ0EsSUFBQW9FLEtBQUEsR0FBQXBFLE9BQUE7VUFFTztVQUFVLE1BQU9vRyxXQUFZLFNBQVEzRCxXQUFBLENBQUFJLFVBQXNCO1lBQ2pFdEMsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFDTDlDLE1BQU0sRUFBRSxhQUFhO2dCQUNyQnVGLElBQUksRUFBRW9CLEtBQUEsQ0FBQWlDO2VBQ04sQ0FBQztZQUNIOztVQUNBL0osT0FBQSxDQUFBOEosV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZELElBQUFoQyxLQUFBLEdBQUFwRSxPQUFBO1VBT087VUFBVyxNQUFPcUcsVUFBVyxTQUFRakMsS0FBQSxDQUFBRSxJQUFpQjtZQUM1RC9ELFlBQVkrRixJQUFJO2NBQ2YsS0FBSyxDQUFDO2dCQUNMN0ksTUFBTSxFQUFFLGFBQWE7Z0JBQ3JCb0gsVUFBVSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDO2dCQUNsRCxHQUFHeUI7ZUFDSCxDQUFDO1lBQ0g7O1VBQ0FoSyxPQUFBLENBQUErSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkQsSUFBQUUsTUFBQSxHQUFBdkcsT0FBQTtVQU1PO1VBQVUsTUFBTytFLE9BQVEsU0FBUXdCLE1BQUEsQ0FBQUMsYUFBc0I7WUFHN0RqRyxZQUFZK0YsSUFBSTtjQUNmLEtBQUssQ0FBQztnQkFBRXpCLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUM7Z0JBQUUsR0FBR3lCO2NBQUksQ0FBRSxDQUFDO1lBQ3REOztVQUNBaEssT0FBQSxDQUFBeUksT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pELElBQUF0QyxXQUFBLEdBQUF6QyxPQUFBO1VBRUEsSUFBQW9FLEtBQUEsR0FBQXBFLE9BQUE7VUFHTSxNQUFPeUcsbUJBQW9CLFNBQVFoRSxXQUFBLENBQUFJLFVBQTZCO1lBQ3JFLENBQUF2QyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQUMsWUFBWTtjQUFFRDtZQUFNLENBQUU7Y0FDckIsS0FBSyxDQUFDO2dCQUNMN0MsTUFBTSxFQUFFLHFCQUFxQjtnQkFDN0J1RixJQUFJLEVBQUVvQixLQUFBLENBQUFzQztlQUNOLENBQUM7Y0FFRixJQUFJLENBQUMsQ0FBQXBHLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUNBOzs7Ozs7O1lBT0E7WUFDQThDLEdBQUdBLENBQUM1RyxJQUE4QjtjQUNqQyxNQUFNeUIsS0FBSyxHQUFHekIsSUFBSSxDQUFDd0IsS0FBSyxDQUFDeUYsR0FBRyxDQUFDaEgsRUFBRSxJQUFJRCxJQUFJLENBQUN5QixLQUFLLENBQUN4QixFQUFFLENBQUMsQ0FBQztjQUVsRCxLQUFLLENBQUNpSCxRQUFRLENBQUN6RixLQUFLLENBQUM7Y0FDckI7Y0FDQSxPQUFPLEtBQUssQ0FBQ21GLEdBQUcsQ0FBQ25GLEtBQUssQ0FBQztZQUN4QjtZQUVBZ0QsR0FBR0EsQ0FBQ3hFLEVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQ2dILEdBQUcsQ0FBQ3hDLEdBQUcsQ0FBQ3hFLEVBQUUsQ0FBQztZQUN4QjtZQUVBcUgsR0FBR0EsQ0FBQ3JILEVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQ2dILEdBQUcsQ0FBQ0ssR0FBRyxDQUFDckgsRUFBRSxDQUFDO1lBQ3hCOztVQUNBSCxPQUFBLENBQUFtSyxtQkFBQSxHQUFBQSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0QsSUFBQXJDLEtBQUEsR0FBQXBFLE9BQUE7VUFNTSxNQUFPMEcsaUJBQWtCLFNBQVF0QyxLQUFBLENBQUFFLElBQW1CO1lBZ0J6RCxDQUFBaEUsTUFBTztZQUNQLENBQUFxRyxTQUFVO1lBQ1YsSUFBSUMsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFELFNBQVUsRUFBRUMsWUFBWSxDQUFDM0ksS0FBSyxDQUFDNEksTUFBTSxDQUFDQyxXQUFXLElBQUlBLFdBQVcsQ0FBQ3BKLFVBQVUsQ0FBQ29HLEdBQUcsQ0FBQyxJQUFJLENBQUNySCxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDNUc7WUFFQSxJQUFJNkMsVUFBVUEsQ0FBQTtjQUNiLE9BQU9xRyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUN0SCxTQUFTLEVBQUVDLFNBQVMsRUFBRWUsVUFBVSxJQUFJLElBQUksQ0FBQztZQUNqRTtZQUVBaUIsWUFBWTtjQUFFRCxNQUFNO2NBQUUsR0FBR2dHO1lBQUksSUFBVSxFQUFFO2NBQ3hDLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQN0ksTUFBTSxFQUFFLHVCQUF1QjtnQkFDL0JvSCxVQUFVLEVBQUUsQ0FDWCxJQUFJLEVBQ0osTUFBTSxFQUNOLFVBQVUsRUFDVixPQUFPLEVBQ1AsYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLE9BQU8sRUFDUCxXQUFXO2VBRVosQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBdkUsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBcUcsU0FBVSxHQUFHckcsTUFBTSxDQUFDQSxNQUFNO1lBQ2hDOztVQUNBaEUsT0FBQSxDQUFBb0ssaUJBQUEsR0FBQUEsaUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERELElBQUF6RyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBb0UsS0FBQSxHQUFBcEUsT0FBQTtVQUVBLElBQUErRyxXQUFBLEdBQUEvRyxPQUFBO1VBQ0EsSUFBQWdILGFBQUEsR0FBQWhILE9BQUE7VUFDQSxJQUFBaUgsVUFBQSxHQUFBakgsT0FBQTtVQUNPO1VBQVUsTUFBT2tILGlCQUFrQixTQUFROUMsS0FBQSxDQUFBRSxJQUFtQztZQU9wRixJQUFJNkMsYUFBYUEsQ0FBQTtjQUNoQixPQUFPbEgsUUFBQSxDQUFBYSxjQUFjLENBQUNDLElBQUksQ0FBQ3RFLEVBQUUsS0FBSyxJQUFJLENBQUNJLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFTCxFQUFFO1lBQzFEO1lBRUEsSUFBSTJLLGlCQUFpQkEsQ0FBQTtjQUNwQixPQUFPLElBQUksQ0FBQ1IsWUFBWSxDQUFDM0ksS0FBSyxDQUFDcUYsTUFBTTtZQUN0QztZQUNBL0MsWUFBWTtjQUFFOUQsRUFBRTtjQUFFLEdBQUdvQztZQUFLLElBQXNCLEVBQUU7Y0FDakQsS0FBSyxDQUFDO2dCQUNMcEMsRUFBRTtnQkFDRixHQUFHb0MsS0FBSztnQkFDUnBCLE1BQU0sRUFBRSxXQUFXO2dCQUNuQm9ILFVBQVUsRUFBRSxDQUNYLElBQUksRUFDSixXQUFXLEVBQ1gsUUFBUSxFQUNSLFVBQVUsRUFDVjtrQkFDQ2xJLElBQUksRUFBRSxZQUFZO2tCQUNsQm1JLEtBQUssRUFBRWlDLFdBQUEsQ0FBQU47aUJBQ1AsRUFDRDtrQkFDQzlKLElBQUksRUFBRSxjQUFjO2tCQUNwQm1JLEtBQUssRUFBRWtDLGFBQUEsQ0FBQUs7aUJBQ1AsQ0FDRDtnQkFDRG5FLFFBQVEsRUFBRStELFVBQUEsQ0FBQUs7ZUFDVixDQUFDO1lBQ0g7WUFFQWxFLEdBQUdBLENBQUM1RyxJQUFJO2NBQ1AsTUFBTTRGLFFBQVEsR0FBRyxLQUFLLENBQUNnQixHQUFHLENBQUM1RyxJQUFJLENBQUM7Y0FDaEMsT0FBTzRGLFFBQVE7WUFDaEI7WUFFQSxNQUFNbUYsT0FBT0EsQ0FBQTtjQUNaLE1BQU0vSyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMwRyxRQUFRLENBQUNxRSxPQUFPLEVBQUU7Y0FDMUMsSUFBSSxDQUFDbkUsR0FBRyxDQUFDO2dCQUFFMUQsUUFBUSxFQUFFbEQsSUFBSSxDQUFDa0Q7Y0FBUSxDQUFFLENBQUM7Y0FDckMsT0FBT2xELElBQUk7WUFDWjtZQUNBLE1BQU1nTCxPQUFPQSxDQUFBO2NBQ1osTUFBTWhMLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQzBHLFFBQVEsQ0FBQ3NFLE9BQU8sRUFBRTtjQUUxQyxJQUFJLENBQUNwRSxHQUFHLENBQUM7Z0JBQUUxRCxRQUFRLEVBQUVsRCxJQUFJLENBQUNrRDtjQUFRLENBQUUsQ0FBQztjQUNyQyxPQUFPbEQsSUFBSTtZQUNaOztVQUNBRixPQUFBLENBQUE0SyxpQkFBQSxHQUFBQSxpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzREQsSUFBQVgsTUFBQSxHQUFBdkcsT0FBQTtVQUdBLElBQUFvRSxLQUFBLEdBQUFwRSxPQUFBO1VBQ0EsSUFBQXlILGVBQUEsR0FBQXpILE9BQUE7VUFDQSxJQUFBMEgsT0FBQSxHQUFBMUgsT0FBQTtVQUVNLE1BQU8ySCxxQkFBc0IsU0FBUXBCLE1BQUEsQ0FBQUMsYUFBb0M7WUFDOUUsQ0FBQWhLLElBQUs7WUFFTCxDQUFBaUgsR0FBSSxHQUFxQyxJQUFJbUUsR0FBRyxFQUFFO1lBQ2xELElBQUluRSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSTtZQUNqQjtZQUVBLElBQUl4RixLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUF3RixHQUFJLENBQUNGLE1BQU0sRUFBRSxDQUFDO1lBQy9CO1lBQ0F0QyxHQUFHQSxDQUFDeEUsRUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDZ0gsR0FBRyxDQUFDeEMsR0FBRyxDQUFDeEUsRUFBRSxDQUFDO1lBQ3hCO1lBRUFxSCxHQUFHQSxDQUFDckgsRUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDZ0gsR0FBRyxDQUFDSyxHQUFHLENBQUNySCxFQUFFLENBQUM7WUFDeEI7WUFFQSxDQUFBNkQsTUFBTztZQUNQLElBQUlxRyxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQXJHLE1BQU8sQ0FBQ3FHLFNBQVM7WUFDOUI7WUFFQXBHLFlBQVlELE1BQU07Y0FDakIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDQSxNQUFNLEVBQUV1SCxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUV4SCxNQUFNLENBQUM7Y0FDckMsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQTlELElBQUssR0FBRyxFQUFFO1lBQ2hCO1lBQ0F1TCxPQUFPQSxDQUFDdkwsSUFBSTtjQUNYLElBQUksQ0FBQyxDQUFBQSxJQUFLLEdBQUdBLElBQUk7WUFDbEI7WUFFQTRHLEdBQUdBLENBQUM1RyxJQUFJO2NBQ1BBLElBQUksQ0FBQ3VGLE9BQU8sQ0FBQ2lCLElBQUksSUFBRztnQkFDbkIsSUFBSSxJQUFJLENBQUMsQ0FBQVMsR0FBSSxDQUFDSyxHQUFHLENBQUNkLElBQUksQ0FBQ3ZHLEVBQUUsQ0FBQyxFQUFFO2tCQUMzQixJQUFJLENBQUMsQ0FBQWdILEdBQUksQ0FBQ3hDLEdBQUcsQ0FBQytCLElBQUksQ0FBQ3ZHLEVBQUUsQ0FBQyxDQUFDMkcsR0FBRyxDQUFDSixJQUFJLENBQUM7a0JBQ2hDOztnQkFHRCxJQUFJLENBQUMsQ0FBQVMsR0FBSSxDQUFDTCxHQUFHLENBQUNKLElBQUksQ0FBQ3ZHLEVBQUUsRUFBRSxJQUFJMkgsS0FBQSxDQUFBNEQsbUJBQW1CLENBQUM7a0JBQUUxSCxNQUFNLEVBQUUsSUFBSTtrQkFBRSxHQUFHMEM7Z0JBQUksQ0FBRSxDQUFDLENBQUM7Y0FDM0UsQ0FBQyxDQUFDO2NBRUYsT0FBT3hHLElBQUk7WUFDWjtZQUVBOzs7O1lBSUF5TCxLQUFLQSxDQUFDdkssVUFBK0I7Y0FDcEMsTUFBTUUsS0FBSyxHQUFHO2dCQUNiMkQsTUFBTSxFQUFFbUcsT0FBQSxDQUFBUSx5QkFBeUI7Z0JBQ2pDQyxPQUFPLEVBQUUvRCxLQUFBLENBQUE0RCxtQkFBbUI7Z0JBQzVCLGlCQUFpQixFQUFFUCxlQUFBLENBQUFXO2VBQ25CO2NBQ0QsTUFBTUMsUUFBUSxHQUFHMUcsTUFBTSxDQUFDMEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBN0csSUFBSyxDQUFDO2NBRXhDNkwsUUFBUSxDQUFDdEcsT0FBTyxDQUFDdEYsRUFBRSxJQUFHO2dCQUNyQixJQUFJLENBQUNpQixVQUFVLENBQUNvRyxHQUFHLENBQUNySCxFQUFFLENBQUMsRUFBRTtrQkFDeEJvTCxPQUFPLENBQUNTLElBQUksQ0FBQyxzRUFBc0UsRUFBRTdMLEVBQUUsQ0FBQztrQkFDeEY7O2dCQUVELE1BQU0rSSxRQUFRLEdBQUc5SCxVQUFVLENBQUN1RCxHQUFHLENBQUN4RSxFQUFFLENBQUM7Z0JBRW5DLElBQUksSUFBSSxDQUFDcUgsR0FBRyxDQUFDckgsRUFBRSxDQUFDLEVBQUU7a0JBQ2pCLElBQUksQ0FBQ3dFLEdBQUcsQ0FBQ3VFLFFBQVEsQ0FBQy9JLEVBQUUsQ0FBQyxDQUFDMkcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBNUcsSUFBSyxDQUFDQyxFQUFFLENBQUMsRUFBRUQsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFBQSxJQUFLLENBQUNDLEVBQUUsQ0FBQyxDQUFDO2tCQUNqRSxPQUFPLElBQUksQ0FBQ3dFLEdBQUcsQ0FBQ3VFLFFBQVEsQ0FBQy9JLEVBQUUsQ0FBQzs7Z0JBRzdCLE1BQU13RyxRQUFRLEdBQUdyRixLQUFLLENBQUM0SCxRQUFRLENBQUN0SCxJQUFJLENBQUMsSUFBSU4sS0FBSyxDQUFDdUssT0FBTztnQkFDdEQsTUFBTTNMLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQUEsSUFBSyxDQUFDQyxFQUFFLENBQUMsRUFBRUQsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFBQSxJQUFLLENBQUNDLEVBQUUsQ0FBQztnQkFDbkQsTUFBTXNILFFBQVEsR0FBRyxJQUFJZCxRQUFRLENBQUM7a0JBQzdCM0MsTUFBTSxFQUFFLElBQUk7a0JBQ1prRixRQUFRO2tCQUNSLEdBQUdoSjtpQkFDSCxDQUFDO2dCQUNGLElBQUksQ0FBQyxDQUFBaUgsR0FBSSxDQUFDTCxHQUFHLENBQUNvQyxRQUFRLENBQUMvSSxFQUFFLEVBQUVzSCxRQUFRLENBQUM7Z0JBQ3BDLE9BQU9BLFFBQVE7Y0FDaEIsQ0FBQyxDQUFDO1lBQ0g7O1VBQ0F6SCxPQUFBLENBQUFxTCxxQkFBQSxHQUFBQSxxQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RkQsSUFBQXhELEtBQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBb0UsS0FBQSxHQUFBcEUsT0FBQTtVQXVCTSxNQUFPZ0ksbUJBQW9CLFNBQVE1RCxLQUFBLENBQUFFLElBQTBCO1lBSWxFLENBQUFoRSxNQUFPO1lBR1AsSUFBSXFHLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBckcsTUFBTyxDQUFDcUcsU0FBUztZQUM5QjtZQUVBLElBQUluQixRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUNtQixTQUFTLEVBQUVqSixVQUFVLEVBQUV1RCxHQUFHLENBQUMsSUFBSSxDQUFDeEUsRUFBRSxDQUFDO1lBQ2hEO1lBRUEsQ0FBQWlJLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBLElBQUlwRixVQUFVQSxDQUFBO2NBQ2IsTUFBTTlDLElBQUksR0FBRyxJQUFJLENBQUNnSixRQUFRLENBQUNsRyxVQUFVO2NBRXJDLElBQUksSUFBSSxDQUFDa0csUUFBUSxDQUFDdEgsSUFBSSxLQUFLLGlCQUFpQixFQUFFO2dCQUM3QyxPQUFPO2tCQUNOaEIsS0FBSyxFQUFFVixJQUFJLENBQUNVLEtBQUs7a0JBQ2pCcUwsU0FBUyxFQUFFL0wsSUFBSSxDQUFDK0wsU0FBUyxDQUFDOUUsR0FBRyxDQUFDLENBQUNULElBQUksRUFBRXdGLEtBQUssS0FBSTtvQkFDN0MsT0FBTztzQkFDTixHQUFHeEYsSUFBSTtzQkFDUCxHQUFHLElBQUksQ0FBQ3lGLFNBQVMsQ0FBQ0QsS0FBSztxQkFDdkI7a0JBQ0YsQ0FBQztpQkFDRDs7Y0FHRixPQUFPLElBQUksQ0FBQ0UsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFcEosVUFBVTtZQUN0QztZQUVBLElBQUlxSixhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDRCxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLGFBQWE7WUFDekM7WUFFQSxJQUFJM0osVUFBVUEsQ0FBQTtjQUNiLElBQUksQ0FBQyxJQUFJLENBQUNNLFVBQVUsRUFBRSxPQUFPLEVBQUU7Y0FDL0IsTUFBTXNKLGNBQWMsR0FBR2pILE1BQU0sQ0FBQzBCLElBQUksQ0FBQyxJQUFJLENBQUMvRCxVQUFVLENBQUM7Y0FFbkQsT0FBT3NKLGNBQWMsQ0FBQ25GLEdBQUcsQ0FBQ29GLEdBQUcsSUFBRztnQkFDL0IsT0FBTztrQkFDTnpMLFNBQVMsRUFBRXlMLEdBQUc7a0JBQ2QsR0FBRyxJQUFJLENBQUN2SixVQUFVLENBQUN1SixHQUFHO2lCQUN0QjtjQUNGLENBQUMsQ0FBQztZQUNIO1lBRUF0SSxZQUFZO2NBQUVELE1BQU07Y0FBRXVFLFVBQVUsR0FBRyxFQUFFO2NBQUUsR0FBR3JJO1lBQUksQ0FBRTtjQUMvQyxLQUFLLENBQUM7Z0JBQ0wsR0FBR0EsSUFBSTtnQkFDUGlCLE1BQU0sRUFBRSxzQkFBc0I7Z0JBQzlCb0gsVUFBVSxFQUFFLENBQ1gsSUFBSSxFQUNKLFFBQVEsRUFDUixVQUFVLEVBQ1YsY0FBYyxFQUNkLFVBQVUsRUFDVixXQUFXLEVBQ1gsVUFBVSxFQUNWLE1BQU0sRUFDTixNQUFNLEVBQ04sVUFBVSxFQUNWLFdBQVcsRUFDWCxHQUFHQSxVQUFVO2VBRWQsQ0FBQztjQUVGLElBQUksQ0FBQyxDQUFBdkUsTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBRUEsTUFBTXlDLFFBQVFBLENBQUE7Y0FDYixJQUFJLENBQUMsSUFBSSxDQUFDcUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDQSxJQUFJLEVBQUUzSSxFQUFFLEVBQUU7Z0JBQ2pDb0wsT0FBTyxDQUFDUyxJQUFJLENBQUMsc0NBQXNDLENBQUM7Z0JBQ3BEOztjQUVELE1BQU1sRCxJQUFJLEdBQUcsSUFBSWpCLEtBQUEsQ0FBQWtCLElBQUksQ0FBQztnQkFBRTVJLEVBQUUsRUFBRSxJQUFJLENBQUMySSxJQUFJLENBQUMzSTtjQUFFLENBQUUsQ0FBQztjQUMzQyxJQUFJLENBQUMsQ0FBQWlJLFNBQVUsR0FBR1UsSUFBSTtjQUN0QixNQUFNQSxJQUFJLENBQUNFLE9BQU8sQ0FBQztnQkFBRTdJLEVBQUUsRUFBRSxJQUFJLENBQUMySSxJQUFJLENBQUMzSTtjQUFFLENBQUUsQ0FBQztjQUV4QyxJQUFJLENBQUM4RixZQUFZLENBQUMsYUFBYSxDQUFDO1lBQ2pDOztVQUNBakcsT0FBQSxDQUFBMEwsbUJBQUEsR0FBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEhELElBQUE1RCxLQUFBLEdBQUFwRSxPQUFBO1VBVU0sTUFBT29JLGlDQUFrQyxTQUFRaEUsS0FBQSxDQUFBRSxJQUFJO1lBRzFELENBQUF0RixVQUFXLEdBQWEsRUFBRTtZQUUxQixJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLElBQUl1SixTQUFTQSxDQUFBO2NBQ1osSUFBSTtnQkFDSCxPQUFPNUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxFQUFFSixRQUFRLENBQUNsSCxTQUFTLENBQUNDLFNBQVMsQ0FBQ2UsVUFBVSxDQUFDLENBQUNpSixTQUFTO2VBQzFFLENBQUMsT0FBT3pDLENBQUMsRUFBRTtnQkFDWCtCLE9BQU8sQ0FBQ1MsSUFBSSxDQUFDeEMsQ0FBQyxDQUFDOztZQUVqQjtZQUVBLElBQUlnRCxpQkFBaUJBLENBQUE7Y0FDcEIsT0FBTyxJQUFJLENBQUNQLFNBQVMsRUFBRTlFLEdBQUcsQ0FBQyxDQUFDc0YsUUFBUSxFQUFFUCxLQUFLLEtBQUk7Z0JBQzlDLE9BQU87a0JBQ04sR0FBR08sUUFBUTtrQkFDWEMsTUFBTSxFQUFFLElBQUksQ0FBQ1AsU0FBUyxHQUFHRCxLQUFLLENBQUMsQ0FBQ1EsTUFBTTtrQkFDdENDLFFBQVEsRUFBRSxJQUFJLENBQUNSLFNBQVMsR0FBR0QsS0FBSyxDQUFDLENBQUNTO2lCQUNsQztjQUNGLENBQUMsQ0FBQztZQUNIO1lBRUExSSxZQUFZO2NBQUVzRSxVQUFVLEdBQUcsRUFBRTtjQUFFLEdBQUdySTtZQUFJLENBQUU7Y0FDdkMsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1BpQixNQUFNLEVBQUUsc0JBQXNCO2dCQUM5Qm9ILFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxHQUFHQSxVQUFVO2VBQ3pFLENBQUM7Y0FDRixJQUFJLENBQUMsQ0FBQTdGLFVBQVcsR0FBRzZGLFVBQVU7WUFDOUI7O1VBQ0F2SSxPQUFBLENBQUE4TCxpQ0FBQSxHQUFBQSxpQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0QsSUFBQWhFLEtBQUEsR0FBQXBFLE9BQUE7VUFVTSxNQUFPa0kseUJBQTBCLFNBQVE5RCxLQUFBLENBQUFFLElBQUk7WUFHbEQsSUFBSTRFLEtBQUtBLENBQUE7Y0FDUixJQUFJLElBQUksQ0FBQzVKLFVBQVUsRUFBRTtnQkFDcEIsT0FBT3FDLE1BQU0sQ0FBQzBCLElBQUksQ0FBQyxJQUFJLENBQUMvRCxVQUFVLENBQUMsQ0FBQ21FLEdBQUcsQ0FBQ29GLEdBQUcsSUFBSSxJQUFJLENBQUN2SixVQUFVLENBQUN1SixHQUFHLENBQUMsQ0FBQzs7Y0FFckUsT0FBTyxFQUFFO1lBQ1Y7WUFFQSxJQUFJTSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUM3SixVQUFVLEVBQUU4SixNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFak0sU0FBUyxLQUFLaU0sR0FBRyxHQUFHLElBQUksQ0FBQy9KLFVBQVUsQ0FBQ2xDLFNBQVMsQ0FBQyxDQUFDa00sTUFBTSxFQUFFLENBQUMsQ0FBQztZQUMvRjtZQUVBLElBQUloSyxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUNvSixRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUVwSixVQUFVO1lBQ3RDO1lBRUEsSUFBSXFKLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUNELFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRUMsYUFBYTtZQUN6QztZQUVBLElBQUkzSixVQUFVQSxDQUFBO2NBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQ00sVUFBVSxFQUFFLE9BQU8sRUFBRTtjQUMvQixNQUFNc0osY0FBYyxHQUFHakgsTUFBTSxDQUFDMEIsSUFBSSxDQUFDLElBQUksQ0FBQy9ELFVBQVUsQ0FBQztjQUVuRCxPQUFPc0osY0FBYyxDQUFDbkYsR0FBRyxDQUFDb0YsR0FBRyxJQUFHO2dCQUMvQixPQUFPO2tCQUNOekwsU0FBUyxFQUFFeUwsR0FBRztrQkFDZCxHQUFHLElBQUksQ0FBQ3ZKLFVBQVUsQ0FBQ3VKLEdBQUc7aUJBQ3RCO2NBQ0YsQ0FBQyxDQUFDO1lBQ0g7WUFFQXRJLFlBQVk7Y0FBRXNFLFVBQVUsR0FBRyxFQUFFO2NBQUUsR0FBR3JJO1lBQUksQ0FBRTtjQUN2QyxLQUFLLENBQUM7Z0JBQ0wsR0FBR0EsSUFBSTtnQkFDUGlCLE1BQU0sRUFBRSxzQkFBc0I7Z0JBQzlCb0gsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVU7ZUFDbkMsQ0FBQztZQUNIOztVQUNBdkksT0FBQSxDQUFBNEwseUJBQUEsR0FBQUEseUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRELElBQUF6RixXQUFBLEdBQUF6QyxPQUFBO1VBQ0EsSUFBQW9FLEtBQUEsR0FBQXBFLE9BQUE7VUFHTSxNQUFPcUgsWUFBYSxTQUFRNUUsV0FBQSxDQUFBSSxVQUF1QjtZQUN4RCxDQUFBdkMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUEsSUFBSXFHLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBckcsTUFBTztZQUNwQjtZQUNBQyxZQUFZO2NBQUVEO1lBQU0sQ0FBRTtjQUNyQixLQUFLLENBQUM7Z0JBQ0w3QyxNQUFNLEVBQUUsdUJBQXVCO2dCQUMvQnVGLElBQUksRUFBRW9CLEtBQUEsQ0FBQW1GO2VBQ04sQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBakosTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBRUE4QyxHQUFHQSxDQUFDNUcsSUFBSTtjQUNQLE1BQU1nTixJQUFJLEdBQUdBLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFJO2dCQUNyQixPQUFPRCxDQUFDLENBQUMxSSxJQUFJLENBQUNwRSxJQUFJLEVBQUVnTixhQUFhLENBQUNELENBQUMsQ0FBQzNJLElBQUksQ0FBQ3BFLElBQUksQ0FBQztjQUMvQyxDQUFDO2NBQ0QsSUFBSWlOLEtBQUssQ0FBQ0MsT0FBTyxDQUFDck4sSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLE1BQU15QixLQUFLLEdBQUd6QixJQUFJLENBQUNnTixJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtELENBQUMsQ0FBQzlNLElBQUksRUFBRWdOLGFBQWEsQ0FBQ0QsQ0FBQyxDQUFDL00sSUFBSSxDQUFDLENBQUM7Z0JBRWhFLEtBQUssQ0FBQytHLFFBQVEsQ0FBQ3pGLEtBQUssQ0FBQztnQkFDckI7Z0JBQ0EsT0FBTyxLQUFLLENBQUNtRixHQUFHLENBQUNuRixLQUFLLENBQUM7ZUFDdkIsTUFBTTtnQkFDTixNQUFNNkwsR0FBRyxHQUFHbkksTUFBTSxDQUFDMEIsSUFBSSxDQUFDN0csSUFBSSxDQUFDO2dCQUU3QixNQUFNeUIsS0FBSyxHQUFHNkwsR0FBRyxDQUFDckcsR0FBRyxDQUFDaEgsRUFBRSxLQUFLO2tCQUFFQSxFQUFFO2tCQUFFLEdBQUdELElBQUksQ0FBQ0MsRUFBRTtnQkFBQyxDQUFFLENBQUMsQ0FBQyxDQUFDK00sSUFBSSxDQUFDQSxJQUFJLENBQUM7Z0JBRTdELEtBQUssQ0FBQzlGLFFBQVEsQ0FBQ3pGLEtBQUssQ0FBQztnQkFDckI7Z0JBQ0EsT0FBTyxLQUFLLENBQUNtRixHQUFHLENBQUNuRixLQUFLLENBQUM7O1lBRXpCOztVQUNBM0IsT0FBQSxDQUFBK0ssWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDRCxJQUFBakQsS0FBQSxHQUFBcEUsT0FBQTtVQUdBLElBQUErRyxXQUFBLEdBQUEvRyxPQUFBO1VBQ0EsSUFBQStKLFlBQUEsR0FBQS9KLE9BQUE7VUFDQSxJQUFBcUUsUUFBQSxHQUFBckUsT0FBQTtVQUNBLElBQUFnSyxLQUFBLEdBQUFoSyxPQUFBO1VBRU0sTUFBT3VKLFdBQVksU0FBUW5GLEtBQUEsQ0FBQUUsSUFBa0Q7WUFJbEYsQ0FBQTJGLGNBQWU7WUFFZixJQUFJL0ksWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFaLE1BQU8sQ0FBQ3FHLFNBQVMsQ0FBQ2xLLEVBQUU7WUFDakM7WUFDQSxDQUFBNkQsTUFBTztZQUNQLElBQUlxRyxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQXJHLE1BQU8sRUFBRXFHLFNBQVM7WUFDL0I7WUFFQSxDQUFBakosVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUE2QyxZQUFZO2NBQUVELE1BQU07Y0FBRSxHQUFHZ0c7WUFBSSxDQUFFO2NBQzlCLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQN0ksTUFBTSxFQUFFLG1CQUFtQjtnQkFDM0J5RixRQUFRLEVBQUU2RyxZQUFBLENBQUFHLG1CQUFtQjtnQkFDN0JyRixVQUFVLEVBQUUsQ0FDWCxJQUFJLEVBQ0o7a0JBQ0NsSSxJQUFJLEVBQUUsTUFBTTtrQkFDWm1JLEtBQUssRUFBRWtGLEtBQUEsQ0FBQUc7aUJBQ1AsRUFDRDtrQkFDQ3hOLElBQUksRUFBRSxTQUFTO2tCQUNmbUksS0FBSyxFQUFFVCxRQUFBLENBQUFVO2lCQUNQO2VBRUYsQ0FBQztjQUNGO2NBQ0EsSUFBSSxDQUFDLENBQUF6RSxNQUFPLEdBQUdBLE1BQU07Y0FFckIsSUFBSSxDQUFDLENBQUE1QyxVQUFXLEdBQUcsSUFBSXFKLFdBQUEsQ0FBQVkscUJBQXFCLENBQUMsSUFBSSxDQUFDO2NBQ2xELElBQUksQ0FBQ3lDLGFBQWEsQ0FBQzlELElBQUksQ0FBQzVJLFVBQVUsQ0FBQztZQUNwQztZQUVBME0sYUFBYUEsQ0FBQ0MsUUFBUTtjQUNyQixJQUFJVCxLQUFLLENBQUNDLE9BQU8sQ0FBQ1EsUUFBUSxDQUFDck0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2xDLE1BQU1pTSxjQUFjLEdBQUdJLFFBQVEsQ0FBQ3JNLEtBQUssQ0FBQzZJLE1BQU0sQ0FBQ3BLLEVBQUUsSUFBSSxDQUFDLENBQUM0TixRQUFRLENBQUNwTSxLQUFLLENBQUN4QixFQUFFLENBQUMsRUFBRUQsSUFBSSxDQUFDO2dCQUU5RSxNQUFNa0IsVUFBVSxHQUFHdU0sY0FBYyxDQUFDeEcsR0FBRyxDQUFDaEgsRUFBRSxJQUFHO2tCQUMxQyxNQUFNdUcsSUFBSSxHQUFHO29CQUFFLEdBQUdxSCxRQUFRLENBQUNwTSxLQUFLLENBQUN4QixFQUFFO2tCQUFDLENBQUU7a0JBQ3RDLE1BQU07b0JBQUVEO2tCQUFJLENBQUUsR0FBR3dHLElBQUk7a0JBQ3JCLE9BQU9BLElBQUksQ0FBQ3hHLElBQUk7a0JBQ2hCLE9BQU87b0JBQUUsR0FBR3dHLElBQUk7b0JBQUUsR0FBR3hHO2tCQUFJLENBQUU7Z0JBQzVCLENBQUMsQ0FBQztnQkFFRixJQUFJLENBQUMsQ0FBQWtCLFVBQVcsQ0FBQzBGLEdBQUcsQ0FBQzFGLFVBQVUsQ0FBQztlQUNoQyxNQUFNO2dCQUNOLE1BQU1vTSxHQUFHLEdBQUduSSxNQUFNLENBQUMwQixJQUFJLENBQUNnSCxRQUFRLENBQUM7Z0JBQ2pDLE1BQU0zTSxVQUFVLEdBQUdvTSxHQUFHLENBQUNyRyxHQUFHLENBQUNoSCxFQUFFLElBQUc7a0JBQy9CLE1BQU1ELElBQUksR0FBRzZOLFFBQVEsQ0FBQzVOLEVBQUUsQ0FBQyxFQUFFRCxJQUFJLElBQUk2TixRQUFRLENBQUM1TixFQUFFLENBQUM7a0JBQy9DLE9BQU87b0JBQUVBLEVBQUU7b0JBQUUsR0FBR0Q7a0JBQUksQ0FBRTtnQkFDdkIsQ0FBQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxDQUFBa0IsVUFBVyxDQUFDMEYsR0FBRyxDQUFDMUYsVUFBVSxDQUFDOztZQUVsQztZQUNBMEYsR0FBR0EsQ0FBQzVHLElBQUk7Y0FDUCxJQUFJLENBQUM0TixhQUFhLENBQUM1TixJQUFJLENBQUNrQixVQUFVLENBQUM7Y0FFbkMsT0FBTyxLQUFLLENBQUMwRixHQUFHLENBQUM7Z0JBQUUsR0FBRzVHO2NBQUksQ0FBRSxDQUFDO1lBQzlCO1lBRUEsTUFBTW9FLElBQUlBLENBQUE7Y0FDVDtjQUNBLE1BQU1wRSxJQUFJLEdBQVEsTUFBTSxLQUFLLENBQUNvRSxJQUFJLENBQUM7Z0JBQUUwSixNQUFNLEVBQUUsSUFBSSxDQUFDdkosSUFBSSxDQUFDdEUsRUFBRSxJQUFJLElBQUksQ0FBQ3NFLElBQUksQ0FBQ3RCO2NBQUcsQ0FBRSxDQUFDO2NBQzdFLEtBQUssQ0FBQzhLLEtBQUssR0FBRyxJQUFJO2NBQ2xCLE9BQU8vTixJQUFJO1lBQ1o7WUFFQWdPLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDckIsTUFBTWhPLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQzBHLFFBQVEsQ0FBQ3NILFFBQVEsQ0FBQztnQkFBRUYsTUFBTSxFQUFFLElBQUksQ0FBQ3ZKLElBQUksQ0FBQ3RFO2NBQUUsQ0FBRSxDQUFDO2NBRW5FLElBQUksQ0FBQ3lJLE9BQU8sQ0FBQzlCLEdBQUcsQ0FBQzVHLElBQUksQ0FBQzBJLE9BQU8sQ0FBQztjQUM5QixJQUFJLENBQUNoQixPQUFPLENBQUMsaUJBQWlCLENBQUM7Y0FDL0IsSUFBSSxDQUFDQSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLENBQUM7O1VBQ0Q1SCxPQUFBLENBQUFpTixXQUFBLEdBQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUZELElBQUFuRixLQUFBLEdBQUFwRSxPQUFBO1VBRU0sTUFBT21LLFFBQVMsU0FBUS9GLEtBQUEsQ0FBQUUsSUFBVztZQUt4Qy9ELFlBQVk7Y0FBRUQsTUFBTTtjQUFFLEdBQUdnRztZQUFJLENBQUU7Y0FDOUIsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1A3SSxNQUFNLEVBQUUsbUJBQW1CO2dCQUMzQm9ILFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSTtlQUNyQyxDQUFDO1lBQ0g7O1VBQ0F2SSxPQUFBLENBQUE2TixRQUFBLEdBQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQXBLLFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFHLElBQUEsR0FBQUgsT0FBQTtVQVlNLE1BQU9zSCxpQkFBaUI7WUFDN0IsQ0FBQWpILEdBQUk7WUFDSixDQUFBQyxNQUFPO1lBRVBDLFlBQVlELE1BQXlCO2NBQ3BDLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUYsSUFBQSxDQUFBSyxHQUFHLENBQUNULFFBQUEsQ0FBQVUsU0FBUyxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMzQyxJQUFJLENBQUMsQ0FBQUwsTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBRUEsTUFBTU0sSUFBSUEsQ0FBQTtjQUNULE1BQU1DLEtBQUssR0FBRyxNQUFNWixRQUFBLENBQUFhLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2NBQzdDLElBQUksQ0FBQyxDQUFBUixHQUFJLENBQUNXLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2NBQ3ZCLE1BQU07Z0JBQUV0RSxNQUFNO2dCQUFFQztjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBNkQsR0FBSSxDQUFDWSxHQUFHLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFBWCxNQUFPLENBQUM3RCxFQUFFLFlBQVksQ0FBQztjQUN6RixJQUFJLENBQUNGLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUk0RSxLQUFLLENBQUMseUJBQXlCLENBQUM7O2NBRTNDLE9BQU8zRSxJQUFJO1lBQ1o7WUFFQSxNQUFNK0ssT0FBT0EsQ0FBQTtjQUNaLE1BQU0xRyxLQUFLLEdBQUcsTUFBTVosUUFBQSxDQUFBYSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDVyxNQUFNLENBQUNILEtBQUssQ0FBQztjQUV2QixNQUFNdUIsUUFBUSxHQUFjLE1BQU0sSUFBSSxDQUFDLENBQUEvQixHQUFJLENBQUNvQixJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFBbkIsTUFBTyxDQUFDN0QsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDO2NBQy9GLElBQUksQ0FBQzJGLFFBQVEsQ0FBQzdGLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJNEUsS0FBSyxDQUFDaUIsUUFBUSxDQUFDWixLQUFLLENBQUNpSixJQUFJLENBQUM7O2NBR3JDLE9BQU9ySSxRQUFRLENBQUM1RixJQUFJO1lBQ3JCO1lBQ0EsTUFBTWdMLE9BQU9BLENBQUE7Y0FDWixNQUFNM0csS0FBSyxHQUFHLE1BQU1aLFFBQUEsQ0FBQWEsY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFSLEdBQUksQ0FBQ1csTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FDdkI7Y0FDQSxNQUFNdUIsUUFBUSxHQUFjLE1BQU0sSUFBSSxDQUFDLENBQUEvQixHQUFJLENBQUNvQixJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFBbkIsTUFBTyxDQUFDN0QsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDO2NBQy9GLElBQUksQ0FBQzJGLFFBQVEsQ0FBQzdGLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJNEUsS0FBSyxDQUFDaUIsUUFBUSxDQUFDWixLQUFLLENBQUNpSixJQUFJLENBQUM7O2NBR3JDLE9BQU9ySSxRQUFRLENBQUM1RixJQUFJO1lBQ3JCOztVQUNBRixPQUFBLENBQUFnTCxpQkFBQSxHQUFBQSxpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0REQsSUFBQXJILFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFHLElBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFELFFBQUEsR0FBQUMsT0FBQTtVQU1PLFdBTFA7Ozs7O1VBS2lCLE1BQU9rSyxtQkFBbUI7WUFDMUMsQ0FBQTdKLEdBQUk7WUFFSixDQUFBQyxNQUFPO1lBQ1BDLFlBQVlELE1BQVc7Y0FDdEIsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJRixJQUFBLENBQUFLLEdBQUcsQ0FBQ1QsUUFBQSxDQUFBVSxTQUFTLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQzNDLElBQUksQ0FBQyxDQUFBTCxNQUFPLEdBQUdBLE1BQU07WUFDdEI7WUFFQU0sSUFBSSxHQUFHLE1BQU0vQixLQUFLLElBQUc7Y0FDcEIsTUFBTWdDLEtBQUssR0FBRyxNQUFNWixRQUFBLENBQUFhLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLO2NBQzdDLElBQUksQ0FBQyxDQUFBUixHQUFJLENBQUNXLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2NBRXZCLE1BQU11QixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQS9CLEdBQUksQ0FBQ1ksR0FBRyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQVgsTUFBTyxDQUFDWSxZQUFZLFdBQVcsRUFBRXJDLEtBQUssQ0FBQztjQUNqRyxNQUFNO2dCQUFFdEMsTUFBTTtnQkFBRUMsSUFBSTtnQkFBRWdGO2NBQUssQ0FBRSxHQUFHWSxRQUFRO2NBRXhDLElBQUksQ0FBQzdGLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUk0RSxLQUFLLENBQUMscUJBQXFCLENBQUM7O2NBR3ZDLElBQUl0QyxLQUFLLEVBQUVxSCxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQTVGLE1BQU8sQ0FBQzZGLFdBQVcsQ0FBQzNKLElBQUksQ0FBQztjQUV6RCxPQUFPQSxJQUFJO1lBQ1osQ0FBQztZQUVEZ08sUUFBUSxHQUFHLE1BQU05SSxLQUFLLElBQUc7Y0FDeEIsTUFBTWIsS0FBSyxHQUFHLE1BQU1aLFFBQUEsQ0FBQWEsY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFSLEdBQUksQ0FBQ1csTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FDdkI7Y0FDQSxNQUFNO2dCQUFFckUsSUFBSTtnQkFBRUQ7Y0FBTSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQThELEdBQUksQ0FBQ29CLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUFuQixNQUFPLENBQUNZLFlBQVksWUFBWSxFQUFFUSxLQUFLLENBQUM7Y0FDM0csSUFBSSxDQUFDbkYsTUFBTSxFQUFFO2dCQUNac0wsT0FBTyxDQUFDNkMsR0FBRyxDQUFDbE8sSUFBSSxDQUFDO2dCQUNqQixNQUFNLElBQUkyRSxLQUFLLENBQUMsbUJBQW1CLENBQUM7O2NBRXJDLE9BQU8zRSxJQUFJO1lBQ1osQ0FBQzs7VUFDREYsT0FBQSxDQUFBNE4sbUJBQUEsR0FBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0NLLE1BQU9TLFdBQVksU0FBUXhKLEtBQUs7WUFDckN5SixPQUFPO1lBQ1A5TSxJQUFJO1lBQ0p5QyxZQUFZO2NBQUVzSyxLQUFLO2NBQUUvTTtZQUFJLENBQUU7Y0FDMUIsS0FBSyxDQUFDK00sS0FBSyxDQUFDLENBQUMsQ0FBQztjQUNkLElBQUksQ0FBQ2xPLElBQUksR0FBRyxhQUFhLENBQUMsQ0FBQztjQUMzQixJQUFJLENBQUNtQixJQUFJLEdBQUdBLElBQUksQ0FBQyxDQUFDO1lBQ25COztVQUNBeEIsT0FBQSxDQUFBcU8sV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BELElBQUE1SyxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRyxJQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBb0UsS0FBQSxHQUFBcEUsT0FBQTtVQUNBLElBQUF5QyxXQUFBLEdBQUF6QyxPQUFBO1VBQ0EsSUFBQThLLGdCQUFBLEdBQUE5SyxPQUFBO1VBQ0EsSUFBQXFFLFFBQUEsR0FBQXJFLE9BQUE7VUFDQSxJQUFBMkMsU0FBQSxHQUFBM0MsT0FBQTtVQUVBLElBQUErSyxXQUFBLEdBQUEvSyxPQUFBO1VBTU8sV0FMUDs7Ozs7VUFLaUIsTUFBT2dMLFFBQVMsU0FBUTVHLEtBQUEsQ0FBQUUsSUFBaUM7WUFDekUsQ0FBQWpFLEdBQUk7WUFDSixDQUFBMkQsT0FBUTtZQXFCUmlILFNBQVMsR0FBRyxVQUFVO1lBQ3RCLElBQUlqSCxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLElBQUk5QyxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQThDLE9BQVE7WUFDckI7WUFFQSxDQUFBaEcsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsT0FBTyxDQUFBa04sU0FBVSxHQUFHLElBQUl0RCxHQUFHLEVBQUU7WUFFN0JySCxZQUFZO2NBQUU5RCxFQUFFO2NBQUUySSxJQUFJO2NBQUVuQjtZQUFPLENBQW1EO2NBQ2pGLEtBQUssQ0FBQztnQkFDTHhILEVBQUU7Z0JBQ0ZnQixNQUFNLEVBQUUsVUFBVTtnQkFDbEJ5RixRQUFRLEVBQUVQLFNBQUEsQ0FBQXdJLGdCQUFnQjtnQkFDMUJ0RyxVQUFVLEVBQUUsQ0FDWCxJQUFJLEVBQ0o7a0JBQUVsSSxJQUFJLEVBQUUsUUFBUTtrQkFBRW1JLEtBQUssRUFBRWdHLGdCQUFBLENBQUFNO2dCQUFjLENBQUUsRUFDekMsUUFBUSxFQUNSLE1BQU0sRUFDTixXQUFXLEVBQ1gsUUFBUSxFQUNSLFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWO2tCQUNDek8sSUFBSSxFQUFFLFdBQVc7a0JBQ2pCbUksS0FBSyxFQUFFaUcsV0FBQSxDQUFBTTtpQkFDUCxFQUVEO2tCQUNDMU8sSUFBSSxFQUFFLFlBQVk7a0JBQ2xCbUksS0FBSyxFQUFFckMsV0FBQSxDQUFBRyxVQUFVO2tCQUNqQmlDLFVBQVUsRUFBRTtvQkFDWDlCLFFBQVEsRUFBRTs7aUJBRVgsRUFDRDtrQkFDQ3BHLElBQUksRUFBRSxTQUFTO2tCQUNmbUksS0FBSyxFQUFFVCxRQUFBLENBQUFVO2lCQUNQO2VBRUYsQ0FBQztjQUNGO2NBQ0EsSUFBSSxDQUFDdUcsYUFBYSxDQUFDLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2NBQzNDLElBQUksQ0FBQyxDQUFBakwsR0FBSSxHQUFHLElBQUlGLElBQUEsQ0FBQUssR0FBRyxDQUFDVCxRQUFBLENBQUFVLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFM0MsSUFBSSxDQUFDb0MsUUFBUSxHQUFHLENBQUMsQ0FBQ3FDLElBQUk7Y0FFdEIsSUFBSSxDQUFDbkIsT0FBTyxHQUFHQSxPQUFPO2NBRXRCLElBQUksQ0FBQyxDQUFBRCxPQUFRLEdBQUd2SCxFQUFFO1lBQ25CO1lBRUEsTUFBTThPLFdBQVdBLENBQUM7Y0FBRTlPLEVBQUU7Y0FBRXdKO1lBQVUsQ0FBc0I7Y0FDdkQsT0FBTyxJQUFJLENBQUMvQyxRQUFRLENBQUNzSSxrQkFBa0IsQ0FBQy9PLEVBQUUsRUFBRXdKLFVBQVUsQ0FBQztZQUN4RDtZQUNBLE1BQU1yRixJQUFJQSxDQUFDL0IsS0FBQSxHQUE0QixFQUFFO2NBQ3hDLElBQUksQ0FBQ0EsS0FBSyxDQUFDcEMsRUFBRSxFQUFFb0MsS0FBSyxDQUFDcEMsRUFBRSxHQUFHLElBQUksQ0FBQzBJLFdBQVcsQ0FBQyxJQUFJLENBQVc7Y0FFMUQsTUFBTTNJLElBQUksR0FBUSxJQUFJLENBQUN5SCxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUNzSCxXQUFXLENBQUMxTSxLQUFLLENBQUMsR0FBRyxNQUFNLEtBQUssQ0FBQytCLElBQUksQ0FBQy9CLEtBQUssQ0FBQztjQUV4RixJQUFJLENBQUNuQyxTQUFTLENBQUMwRyxHQUFHLENBQUM1RyxJQUFJLENBQUNpUCxVQUFVLENBQUMvTyxTQUFTLENBQUM7Y0FDN0MsSUFBSSxDQUFDeUksV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDbEgsS0FBSyxDQUFDd0YsR0FBRyxDQUFDVCxJQUFJLElBQUc7Z0JBQy9DQSxJQUFJLENBQUNJLEdBQUcsQ0FBQztrQkFBRThCLE9BQU8sRUFBRTFJLElBQUksQ0FBQzBJO2dCQUFPLENBQUUsQ0FBQztjQUNwQyxDQUFDLENBQUM7Y0FFRixJQUFJMUksSUFBSSxDQUFDa0IsVUFBVSxFQUFFO2dCQUNwQjtnQkFDQSxJQUFJLENBQUMsQ0FBQU0sS0FBTSxHQUFHeEIsSUFBSSxDQUFDa0IsVUFBVSxDQUFDTSxLQUFLOztjQUVwQyxJQUFJLENBQUN1TSxLQUFLLEdBQUcsSUFBSTtjQUNqQjtjQUVBLE9BQU8vTixJQUFJO1lBQ1o7WUFFQWdHLFlBQVksR0FBRyxNQUFBQSxDQUFBLEtBQXlEO2NBQ3ZFLE1BQU1KLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ2MsUUFBUSxDQUFDVixZQUFZLEVBQUU7Y0FFbkQsSUFBSSxDQUFDSixRQUFRLENBQUM3RixNQUFNLEVBQUUsT0FBTzZGLFFBQVE7Y0FDckM7Y0FFQSxNQUFNLElBQUksQ0FBQ2dCLEdBQUcsQ0FBQ2hCLFFBQVEsQ0FBQzVGLElBQUksQ0FBQztjQUU3QixJQUFJLENBQUMwSCxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDO2NBQ3JDLE9BQU85QixRQUFRO1lBQ2hCLENBQUM7WUFFRCxNQUFNc0osa0JBQWtCQSxDQUFBO2NBQ3ZCLE1BQU03TSxLQUFLLEdBQUc7Z0JBQUVwQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUF1SDtjQUFRLENBQUU7Y0FFbkMsTUFBTXhILElBQUksR0FBRyxNQUFNLElBQUksQ0FBQzBHLFFBQVEsQ0FBQ3ZELE1BQU0sQ0FBQ2QsS0FBSyxDQUFDO2NBRTlDLElBQUksQ0FBQ3VFLEdBQUcsQ0FBQzVHLElBQUksQ0FBQztZQUNmO1lBRUEsT0FBT3lFLEdBQUdBLENBQUM7Y0FBRXhFLEVBQUU7Y0FBRTZOLE1BQU07Y0FBRWxGLElBQUk7Y0FBRW5CLE9BQU8sR0FBRztZQUFLLENBQUU7Y0FDL0MsTUFBTTBILFVBQVUsR0FBRyxHQUFHbFAsRUFBRSxJQUFJNk4sTUFBTSxFQUFFO2NBRXBDLElBQUksSUFBSSxDQUFDLENBQUFZLFNBQVUsQ0FBQ3BILEdBQUcsQ0FBQzZILFVBQVUsQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLElBQUksQ0FBQyxDQUFBVCxTQUFVLENBQUNqSyxHQUFHLENBQUMwSyxVQUFVLENBQUM7O2NBR3ZDLE1BQU01SCxRQUFRLEdBQUcsSUFBSWlILFFBQVEsQ0FBQztnQkFBRXZPLEVBQUU7Z0JBQUUySSxJQUFJO2dCQUFFbkI7Y0FBTyxDQUFFLENBQUM7Y0FDcEQsSUFBSSxDQUFDLENBQUFpSCxTQUFVLENBQUM5SCxHQUFHLENBQUN1SSxVQUFVLEVBQUU1SCxRQUFRLENBQUM7Y0FFekMsT0FBT0EsUUFBUTtZQUNoQjtZQUVBLE1BQU02SCxVQUFVQSxDQUFDcFAsSUFBSTtjQUNwQixNQUFNLElBQUksQ0FBQzBJLE9BQU8sQ0FBQzlCLEdBQUcsQ0FBQzVHLElBQUksQ0FBQztjQUU1QixJQUFJLENBQUMwSCxPQUFPLENBQUMsZ0JBQWdCLENBQUM7WUFDL0I7WUFFQSxNQUFNMkgsc0JBQXNCQSxDQUFBO2NBQzNCLE1BQU1oTCxLQUFLLEdBQUcsTUFBTVosUUFBQSxDQUFBYSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDVyxNQUFNLENBQUNILEtBQUssQ0FBQztjQUV2QixNQUFNdUIsUUFBUSxHQUFjLE1BQU0sSUFBSSxDQUFDLENBQUEvQixHQUFJLENBQUNvQixJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMvRSxTQUFTLENBQUNELEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQztjQUVoRyxJQUFJLENBQUMyRixRQUFRLENBQUM3RixNQUFNLElBQUk2RixRQUFRLENBQUNaLEtBQUssRUFBRTFELElBQUksS0FBSyxFQUFFLEVBQUU7Z0JBQ3BEK0osT0FBTyxDQUFDckcsS0FBSyxDQUFDWSxRQUFRLENBQUNaLEtBQUssQ0FBQztnQkFDN0IsT0FBT1ksUUFBUTs7Y0FFaEIsSUFBSUEsUUFBUSxDQUFDNUYsSUFBSSxDQUFDRCxNQUFNLENBQUN1UCxXQUFXLEVBQUUsS0FBSyxZQUFZLEVBQUU7Z0JBQ3hELE1BQU0sSUFBSSxDQUFDbEwsSUFBSSxDQUFDO2tCQUFFbkUsRUFBRSxFQUFFLElBQUksQ0FBQ3VIO2dCQUFPLENBQUUsQ0FBQztlQUNyQyxNQUFNO2dCQUNOLE1BQU0sSUFBSSxDQUFDWixHQUFHLENBQUM7a0JBQUV6RCxNQUFNLEVBQUV5QyxRQUFRLENBQUM1RixJQUFJLENBQUNEO2dCQUFNLENBQUUsQ0FBQzs7Y0FHakQsT0FBTzZGLFFBQVE7WUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqTEQsSUFBQXJDLFFBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFHLElBQUEsR0FBQUgsT0FBQTtVQUVBLElBQUErTCxNQUFBLEdBQUEvTCxPQUFBO1VBTU0sTUFBT21MLGdCQUFnQjtZQUM1QixDQUFBOUssR0FBSTtZQUNKLENBQUFDLE1BQU87WUFDUCxDQUFBVixRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBbEMsVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBQ0E2QyxZQUFZRCxNQUFnQjtjQUMzQixJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlGLElBQUEsQ0FBQUssR0FBRyxDQUFDVCxRQUFBLENBQUFVLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FFM0MsSUFBSSxDQUFDLENBQUFMLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUNBTSxJQUFJLEdBQUcsTUFBTS9CLEtBQUssSUFBRztjQUNwQixNQUFNZ0MsS0FBSyxHQUFHLE1BQU1aLFFBQUEsQ0FBQWEsY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFSLEdBQUksQ0FBQ1csTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsTUFBTXVCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBL0IsR0FBSSxDQUFDWSxHQUFHLENBQUMsZ0JBQWdCcEMsS0FBSyxDQUFDcEMsRUFBRSxXQUFXLEVBQUVvQyxLQUFLLENBQUM7Y0FDaEYsTUFBTTtnQkFBRXRDLE1BQU07Z0JBQUVDLElBQUk7Z0JBQUVnRjtjQUFLLENBQUUsR0FBR1ksUUFBUTtjQUV4QyxJQUFJWixLQUFLLEVBQUU7Z0JBQ1YsTUFBTSxJQUFJdUssTUFBQSxDQUFBcEIsV0FBVyxDQUFDbkosS0FBSyxDQUFDOztjQUU3QixJQUFJLENBQUNqRixNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJNEUsS0FBSyxDQUFDLHFCQUFxQixDQUFDOztjQUd2QyxJQUFJdEMsS0FBSyxFQUFFcUgsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUE1RixNQUFPLENBQUM2RixXQUFXLENBQUMzSixJQUFJLENBQUM7Y0FFekQsT0FBT0EsSUFBSTtZQUNaLENBQUM7WUFFRCxNQUFNbUQsTUFBTUEsQ0FBQ2QsS0FBQSxHQUF5QixFQUFFO2NBQ3ZDLE1BQU1nQyxLQUFLLEdBQUcsTUFBTVosUUFBQSxDQUFBYSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDVyxNQUFNLENBQUNILEtBQUssQ0FBQztjQUN2QixNQUFNdUIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUEvQixHQUFJLENBQUNvQixJQUFJLENBQUMsZ0JBQWdCNUMsS0FBSyxDQUFDcEMsRUFBRSxTQUFTLEVBQUVvQyxLQUFLLENBQUM7Y0FDL0UsSUFBSSxDQUFDdUQsUUFBUSxDQUFDN0YsTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUk0RSxLQUFLLENBQUMsK0JBQStCaUIsUUFBUSxDQUFDWixLQUFLLEVBQUUsQ0FBQzs7Y0FHakUsT0FBT1ksUUFBUSxDQUFDNUYsSUFBSTtZQUNyQjtZQUNBZ0csWUFBWSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN6QixNQUFNM0IsS0FBSyxHQUFHLE1BQU1aLFFBQUEsQ0FBQWEsY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFSLEdBQUksQ0FBQ1csTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsT0FBTyxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDb0IsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQW5CLE1BQU8sQ0FBQ1ksWUFBWSxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7WUFDckYsQ0FBQztZQUVEc0ssa0JBQWtCLEdBQUcsTUFBQUEsQ0FBT3hGLE9BQU8sRUFBRUMsVUFBVSxLQUFJO2NBQ2xELE1BQU1wRixLQUFLLEdBQUcsTUFBTVosUUFBQSxDQUFBYSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDVyxNQUFNLENBQUNILEtBQUssQ0FBQztjQUV2QixNQUFNO2dCQUFFdEUsTUFBTTtnQkFBRUM7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTZELEdBQUksQ0FBQ1ksR0FBRyxDQUFDLG1CQUFtQitFLE9BQU8sZUFBZUMsVUFBVSxVQUFVLENBQUM7Y0FDM0csT0FBT3pKLElBQUk7WUFDWixDQUFDOztVQUNERixPQUFBLENBQUE2TyxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDRCxJQUFLYSxnQkFNSjtVQU5ELFdBQUtBLGdCQUFnQjtZQUNwQkEsZ0JBQUEsb0NBQWdDO1lBQ2hDQSxnQkFBQSxvQ0FBZ0M7WUFDaENBLGdCQUFBLHFCQUFpQjtZQUNqQkEsZ0JBQUEsc0NBQWtDO1lBQ2xDQSxnQkFBQSxxQkFBaUI7VUFDbEIsQ0FBQyxFQU5JQSxnQkFBZ0IsS0FBaEJBLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNEckI7OztVQUdBLElBQVlDLGNBS1g7VUFMRCxXQUFZQSxjQUFjO1lBQ3pCQSxjQUFBLHVCQUFtQjtZQUNuQkEsY0FBQSwrQkFBMkI7WUFDM0JBLGNBQUEsMkJBQXVCO1lBQ3ZCQSxjQUFBLCtCQUEyQjtVQUM1QixDQUFDLEVBTFdBLGNBQWMsS0FBQTNQLE9BQUEsQ0FBQTJQLGNBQUEsR0FBZEEsY0FBYzs7Ozs7Ozs7Ozs7VUNuQzFCOztVQUVBdEssTUFBQSxDQUFBdUssY0FBQSxDQUFBNVAsT0FBQTtZQUNBd0ksS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBbkQsTUFBQSxDQUFBdUssY0FBQSxDQUFBNVAsT0FBQTtZQUNBd0ksS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119