System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.2/entities", "@aimpact/ailearn-api@0.0.1/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Classes, Class, Topic, __beyond_pkg, hmr;
  _export({
    Classes: void 0,
    Class: void 0,
    Topic: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive112Entities) {
      dependency_1 = _beyondJsReactive112Entities;
    }, function (_aimpactAilearnApi001Core) {
      dependency_2 = _aimpactAilearnApi001Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["socket.io-client", "4.7.1"], ["@aimpact/ailearn-sdk", "0.0.1"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@0.0.1/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities', dependency_1], ['@aimpact/ailearn-api/core', dependency_2]]);
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./classes/collection
      ************************************/
      ims.set('./classes/collection', {
        hash: 953885003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Classes = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _core = require("@aimpact/ailearn-api/core");
          var _item = require("./item");
          /*bundle*/
          class Classes extends _entities.Collection {
            item = _item.Class;
            constructor() {
              super({
                storeName: 'Classes',
                db: 'chat-api',
                provider: _core.ClassesProvider
              });
            }
          }
          exports.Classes = Classes;
        }
      });

      /******************************
      INTERNAL MODULE: ./classes/item
      ******************************/

      ims.set('./classes/item', {
        hash: 2352453906,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Class = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _core = require("@aimpact/ailearn-api/core");
          var _topic = require("./topic");
          /*bundle*/
          class Class extends _entities.Item {
            properties = ['id', 'curriculumObjective', {
              name: 'topics',
              type: 'collection'
            }, 'status', 'content', 'assessment', 'synthesis', 'relevance'];
            #topics = [];
            get topics() {
              return this.#topics.map(topic => topic.getProperties());
            }
            get topicsElements() {
              return this.#topics;
            }
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Classes',
                provider: _core.ClassesProvider
              });
              this.reactiveProps(['topicTitles']);
            }
            async #generate(specs) {
              try {
                this.fetching = true;
                await this.isReady;
                const response = this.provider.generate(this.id, this.curriculumObjective, specs);
                this.fetching = false;
                return response;
              } catch {
                console.error('error generating', specs);
              }
            }
            async generateAction(element) {
              const response = await this.#generate({
                is: 'class',
                element,
                topics: this.topics
              });
              console.log('response :', response);
              if (!response) throw new Error('error generating');
              this.triggerEvent('class.generate.content');
              return response;
            }
            #setTopics() {
              return Promise.all(this.topicTitles.map(title => {
                const topic = new _topic.Topic();
                topic.setClass(this);
                topic.title = title;
                topic.classId = this.id;
                return topic.isReady.then(() => {
                  return topic;
                });
              }));
              //return this.publish();
            }

            #loadTopics(topics) {
              return Promise.all(topics.map(item => {
                const topic = new _topic.Topic(item.id);
                topic.setClass(this);
                return topic.isReady.then(() => {
                  topic.set(item);
                  topic.setClass(this);
                  return topic;
                });
              }));
            }
            async publish() {
              this.#topics = await this.#setTopics();
              return super.publish();
            }
            getTopic(id) {
              return this.#topics.find(t => t.id === id);
            }
            async load(specs) {
              const {
                status,
                data
              } = await super.load(specs);
              if (!status) {
                throw new Error('error loading class');
              }
              if (data.topicsData) {
                this.#topics = await this.#loadTopics(data.topicsData);
              }
              return data;
            }
            upgrade(data) {
              if (data.is === 'topic') {
                const topic = this.getTopic(data.item.id);
                if (!topic) {
                  console.warn('topic not found');
                  return;
                }
                topic.set(data.item);
                return;
              }
              //@ts-ignore
              this.localUpdate(data);
            }
          }
          exports.Class = Class;
        }
      });

      /*******************************
      INTERNAL MODULE: ./classes/topic
      *******************************/

      ims.set('./classes/topic', {
        hash: 261810871,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Topic = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _core = require("@aimpact/ailearn-api/core");
          /*bundle*/
          class Topic extends _entities.Item {
            properties = ['id', 'status', 'content', 'title', 'synthesis', 'prerequisites', 'assessment'];
            #class;
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                db: 'chat-api',
                storeName: 'Topics',
                provider: _core.ClassesProvider
              });
            }
            setClass(parent) {
              this.#class = parent;
            }
            update(data) {
              this.status = data.status;
              this.set(data);
              this.triggerEvent('change');
            }
            async #generate(specs) {
              try {
                this.fetching = true;
                await this.isReady;
                const response = this.provider.generate(this.#class.id, this.#class.curriculumObjective, specs);
                this.fetching = false;
                this.triggerEvent('topic.generate.content');
                return response;
              } catch {
                console.error('error generating', specs);
              }
            }
            async generateElement(element) {
              return this.#generate({
                is: 'topic',
                element,
                topic: {
                  id: this.id,
                  title: this.title
                }
              });
            }
          }
          exports.Topic = Topic;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./classes/collection",
        "from": "Classes",
        "name": "Classes"
      }, {
        "im": "./classes/item",
        "from": "Class",
        "name": "Class"
      }, {
        "im": "./classes/topic",
        "from": "Topic",
        "name": "Topic"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Classes') && _export("Classes", Classes = require ? require('./classes/collection').Classes : value);
        (require || prop === 'Class') && _export("Class", Class = require ? require('./classes/item').Class : value);
        (require || prop === 'Topic') && _export("Topic", Topic = require ? require('./classes/topic').Topic : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7Y0FDZCxJQUFJLENBQUNoQixZQUFZLENBQUMsUUFBUSxDQUFDO1lBQzVCO1lBRUEsTUFBTSxTQUFTLENBQUNiLEtBQUs7Y0FDcEIsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNLElBQUksQ0FBQ0MsT0FBTztnQkFDbEIsTUFBTUMsUUFBUSxHQUFHLElBQUksQ0FBQ2xCLFFBQVEsQ0FBQ21CLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDUCxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQ1EsbUJBQW1CLEVBQUVMLEtBQUssQ0FBQztnQkFDL0YsSUFBSSxDQUFDQyxRQUFRLEdBQUcsS0FBSztnQkFDckIsSUFBSSxDQUFDWSxZQUFZLENBQUMsd0JBQXdCLENBQUM7Z0JBQzNDLE9BQU9WLFFBQVE7ZUFDZixDQUFDLE1BQU07Z0JBQ1BHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLGtCQUFrQixFQUFFUCxLQUFLLENBQUM7O1lBRTFDO1lBRUEsTUFBTW9DLGVBQWUsQ0FBQzNCLE9BQU87Y0FDNUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNyQkMsRUFBRSxFQUFFLE9BQU87Z0JBQ1hELE9BQU87Z0JBQ1BmLEtBQUssRUFBRTtrQkFBRUcsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRTtrQkFBRW9CLEtBQUssRUFBRSxJQUFJLENBQUNBO2dCQUFLO2VBQ3ZDLENBQUM7WUFDSDs7VUFDQTlCIiwibmFtZXMiOlsiQ2xhc3NlcyIsIkNvbGxlY3Rpb24iLCJpdGVtIiwiQ2xhc3MiLCJjb25zdHJ1Y3RvciIsInN0b3JlTmFtZSIsImRiIiwicHJvdmlkZXIiLCJDbGFzc2VzUHJvdmlkZXIiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJuYW1lIiwidHlwZSIsInRvcGljcyIsIm1hcCIsInRvcGljIiwiZ2V0UHJvcGVydGllcyIsInRvcGljc0VsZW1lbnRzIiwiaWQiLCJ1bmRlZmluZWQiLCJyZWFjdGl2ZVByb3BzIiwic3BlY3MiLCJmZXRjaGluZyIsImlzUmVhZHkiLCJyZXNwb25zZSIsImdlbmVyYXRlIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsImNvbnNvbGUiLCJlcnJvciIsImdlbmVyYXRlQWN0aW9uIiwiZWxlbWVudCIsImlzIiwibG9nIiwiRXJyb3IiLCJ0cmlnZ2VyRXZlbnQiLCJQcm9taXNlIiwiYWxsIiwidG9waWNUaXRsZXMiLCJ0aXRsZSIsIlRvcGljIiwic2V0Q2xhc3MiLCJjbGFzc0lkIiwidGhlbiIsInNldCIsInB1Ymxpc2giLCJnZXRUb3BpYyIsImZpbmQiLCJ0IiwibG9hZCIsInN0YXR1cyIsImRhdGEiLCJ0b3BpY3NEYXRhIiwidXBncmFkZSIsIndhcm4iLCJsb2NhbFVwZGF0ZSIsInBhcmVudCIsInVwZGF0ZSIsImdlbmVyYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY2xhc3Nlcy9jb2xsZWN0aW9uLnRzIiwiY2xhc3Nlcy9pdGVtLnRzIiwiY2xhc3Nlcy90b3BpYy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=