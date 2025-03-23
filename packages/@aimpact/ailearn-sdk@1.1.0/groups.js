System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/entities/collection", "@aimpact/reactive@0.0.1/model", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.1.0/config", "@aimpact/reactive@0.0.1/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Groups, DataProvider, GroupItem, __beyond_pkg, hmr;
  _export({
    Groups: void 0,
    DataProvider: void 0,
    GroupItem: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactReactive001EntitiesCollection) {
      dependency_1 = _aimpactReactive001EntitiesCollection;
    }, function (_aimpactReactive001Model) {
      dependency_2 = _aimpactReactive001Model;
    }, function (_aimpactChatSdk141Session) {
      dependency_3 = _aimpactChatSdk141Session;
    }, function (_beyondJsHttpSuite001Api) {
      dependency_4 = _beyondJsHttpSuite001Api;
    }, function (_aimpactAilearnSdk110Config) {
      dependency_5 = _aimpactAilearnSdk110Config;
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_6 = _aimpactReactive001EntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.3.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.1.0/groups"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/reactive/entities/collection', dependency_1], ['@aimpact/reactive/model', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@beyond-js/http-suite/api', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/reactive/entities/item', dependency_6]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 883863687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Groups = void 0;
          var _collection = require("@aimpact/reactive/entities/collection");
          var _dataProvider = require("./data-provider");
          /*bundle*/
          class Groups extends _collection.Collection {
            constructor(entity, item) {
              super({
                entity,
                item,
                provider: _dataProvider.DataProvider
              });
            }
          }
          exports.Groups = Groups;
        }
      });

      /*******************************
      INTERNAL MODULE: ./data-provider
      *******************************/

      ims.set('./data-provider', {
        hash: 724733783,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DataProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _error = require("./error");
          /*bundle */ /**
                       
                        
                       */
          class DataProvider {
            #api;
            #model;
            #entity;
            constructor(model) {
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#model = model;
              this.#entity = model.entity;
            }
            setModel(model) {
              this.#model = model;
            }
            async load(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const id = specs.id || specs.code;
              const response = await this.#api.get(`/${this.#entity}/${id}`);
              if (!response.status) {
                throw new _error.CustomError(response.error.text, response.error.code);
              }
              return response.data;
            }
            async publish(specs = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/${this.#entity}`, specs);
              if (!response.status) {
                throw new _error.CustomError(response.error.text, response.error.code);
                // throw new Error('Error approving the user');
              }
              return response;
            }
            async list(specs = {
              endpoint: undefined
            }) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const endpoint = specs.endpoint ? specs.endpoint : `/${this.#entity}`;
                delete specs.endpoint;
                const response = await this.#api.get(endpoint, specs);
                return response.data.items;
              } catch (e) {
                console.error(e);
              }
            }
            test() {
              //code
            }
            async invite(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.post(`/${this.#entity}/${this.#model.id}/invite`, specs);
                if (!res.status) {
                  throw new Error('error publishing organization');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async cancelInvitation(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.delete(`/${this.#entity}/${this.#model.id}/invite/user/${specs.email}`, specs);
                if (!res.status) {
                  throw new Error('error publishing organization');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async join(specs = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const res = await this.#api.post(`/${this.#entity}/join`, specs);
              if (!res.status) {
                if (res.error.code === 104) {
                  throw new Error('ALREADY_MEMBER');
                }
                if (res.error.code === 101) {
                  throw new Error('ALREADY_WAITING');
                }
                if (res.error.code === 100) {
                  throw new Error('INVALID_CODE');
                }
                throw new Error('ERROR_PUBLISHING');
              }
              return res;
            }
            async approve(specs = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/${this.#entity}/${this.#model.id}/approve`, specs);
              if (!response.status) {
                throw new _error.CustomError(response.error.text, response.error.code);
                // throw new Error('Error approving the user');
              }
              return response;
            }
            async delete(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const res = await this.#api.delete(`/${this.#entity}/${specs.id}`);
              if (!res.status) {
                throw new _error.CustomError(res.error.text, res.error.code);
              }
              return res;
            }
            async removeMember(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const res = await this.#api.delete(`/${this.#entity}/${specs.id}/user/${specs.uid}`);
              if (!res.status) {
                throw new _error.CustomError(res.error.text, res.error.code);
              }
              return res;
            }
            async reject(specs) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.delete(`/${this.#entity}/${specs.id}/join/user/${specs.uid}`, {});
                if (!res.status) {
                  throw new Error(`Error rejecting the user from the ${this.#entity}`);
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async requestAccess() {
              const response = await this.#api.post(`/classrooms/${this.#model.id}/request`);
              return response;
            }
          }
          exports.DataProvider = DataProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 2905388780,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            message;
            code;
            constructor(message, code) {
              super(message); // Call the parent constructor (Error) with the message
              this.name = 'CustomError'; // Set the name of the error (optional)
              this.code = code; // Add a custom 'code' property
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 3228218796,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GroupItem = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _dataProvider = require("./data-provider");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          class GroupItem extends _item.Item {
            #hasAccess = false;
            get hasAccess() {
              return this.#hasAccess;
            }
            #members = [];
            get members() {
              return this.#members;
            }
            #managers = [];
            get managers() {
              return this.#managers;
            }
            #pendings = [];
            get pendings() {
              return this.#pendings;
            }
            #registered = new Set();
            #isAdmin;
            get isAdmin() {
              return this.#isAdmin;
            }
            get authorizedPeople() {
              return this.people.filter(i => i.authorized);
            }
            #ready = false;
            get ready() {
              return this.#ready;
            }
            constructor(entity, {
              properties,
              ...data
            }) {
              super({
                entity,
                ...data,
                provider: _dataProvider.DataProvider,
                properties: ['timeCreated', 'timeUpdated', 'name', 'access', 'address', 'description', 'people', 'joinSpecs', 'id', 'status', 'joined', ...properties]
              });
              this.provider.setModel(this);
            }
            async load(specs) {
              specs = typeof specs === 'number' || typeof specs === 'string' ? {
                id: specs
              } : specs;
              if (!specs || Object.keys(specs).length === 0) specs = {
                id: this.id
              };
              const data = await super.load(specs);
              console.log(20, data);
              if (!this.people) return;
              this.#hasAccess = true;
              // Sort people alphabetically by name (assuming each person has a 'name' property)
              this.people.sort((a, b) => a.name.localeCompare(b.name));
              const {
                people
              } = this;
              const isAdmin = people.some(i => i.role === 'manager' && i.uid === _session.sessionWrapper.user.id);
              this.#isAdmin = isAdmin;
              const checkMember = person => {
                console.log(1, person.id, person.uid);
                if (this.#registered.has(person.uid || person.id)) return;
                this.#registered.add(person.uid || person.id);
                if (isAdmin && (!person.authorized || person.invited)) {
                  this.#pendings.push(person);
                  return;
                }
                if (person.role) {
                  person.role === 'manager' ? this.#managers.push(person) : this.#members.push(person);
                  return;
                }
              };
              this.#ready = true;
              people.forEach(checkMember);
              return data;
            }
            async approve(specs) {
              // Validate input
              if (!specs || !specs.uid) throw new Error('Invalid specifications provided.');
              const response = await this.provider.approve(specs);
              if (!response.status) {}
              const {
                uid
              } = specs;
              // Find and remove the pending member with the specified id
              const pendingIndex = this.#pendings.findIndex(p => p.uid === uid);
              if (pendingIndex === -1) {
                throw new Error(`Pending member with id ${uid} not found.`);
              }
              const [pendingMember] = this.#pendings.splice(pendingIndex, 1);
              pendingMember.authorized = true;
              // Add the pending member to the members list
              specs.role === 'member' ? this.#members.push(pendingMember) : this.#managers.push(pendingMember);
              this.triggerEvent();
            }
            async removeMember(args) {
              const response = await this.provider.removeMember(args);
              if (response.status) {
                this.people = this.people.filter(i => i.uid !== args.uid);
                this.#managers = this.#managers.filter(i => i.uid !== args.uid);
                this.#members = this.#members.filter(i => i.uid !== args.uid);
                this.triggerEvent();
              }
            }
            async reject(specs) {
              const response = await this.provider.reject({
                id: this.id,
                ...specs
              });
              if (response.status) {
                this.people = this.people.filter(i => i.uid !== specs.uid);
                this.#pendings = this.#pendings.filter(i => i.uid !== specs.uid);
                this.triggerEvent();
              }
            }
            async invite(specs) {
              const response = await this.provider.invite(specs);
              const member = {
                ...specs,
                invited: true
              };
              // this.#pendings.push(member);
              this.people.push(member);
              this.#pendings.push(member);
              this.trigger('change');
              return response;
            }
            async cancelInvitation(specs) {
              const response = await this.provider.cancelInvitation(specs);
              if (response.status) {
                this.people = this.people.filter(i => i.email !== specs.email);
                this.#pendings = this.#pendings.filter(i => i.email !== specs.email);
                this.triggerEvent();
              }
            }
            async delete() {
              const response = await this.provider.delete({
                id: this.id
              });
              if (response.status) {
                this.triggerEvent();
              }
              return response;
            }
            async join({
              code
            }) {
              const data = await this.provider.join({
                code
              });
              this.set({
                code
              });
              return data;
            }
            async requestAccess() {
              const data = await this.provider.requestAccess();
              if (data.status.toLowerCase() === 'authorized') {
                await this.load({
                  id: this.id
                });
              } else {
                await this.set({
                  access: data.status
                });
              }
              this.set(data);
              return data;
            }
          }
          exports.GroupItem = GroupItem;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "Groups",
        "name": "Groups"
      }, {
        "im": "./data-provider",
        "from": "DataProvider",
        "name": "DataProvider"
      }, {
        "im": "./item",
        "from": "GroupItem",
        "name": "GroupItem"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Groups') && _export("Groups", Groups = require ? require('./collection').Groups : value);
        (require || prop === 'DataProvider') && _export("DataProvider", DataProvider = require ? require('./data-provider').DataProvider : value);
        (require || prop === 'GroupItem') && _export("GroupItem", GroupItem = require ? require('./item').GroupItem : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsInByb3ZpZGVyIiwiRGF0YVByb3ZpZGVyIiwiZXhwb3J0cyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9jb25maWciLCJfZXJyb3IiLCJhcGkiLCJtb2RlbCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsInNldE1vZGVsIiwibG9hZCIsInNwZWNzIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJpZCIsImNvZGUiLCJyZXNwb25zZSIsImdldCIsInN0YXR1cyIsIkN1c3RvbUVycm9yIiwiZXJyb3IiLCJ0ZXh0IiwiZGF0YSIsInB1Ymxpc2giLCJwb3N0IiwibGlzdCIsImVuZHBvaW50IiwidW5kZWZpbmVkIiwiaXRlbXMiLCJlIiwiY29uc29sZSIsInRlc3QiLCJpbnZpdGUiLCJyZXMiLCJFcnJvciIsImNhbmNlbEludml0YXRpb24iLCJkZWxldGUiLCJlbWFpbCIsImpvaW4iLCJhcHByb3ZlIiwicmVtb3ZlTWVtYmVyIiwidWlkIiwicmVqZWN0IiwicmVxdWVzdEFjY2VzcyIsIm1lc3NhZ2UiLCJuYW1lIiwiX2l0ZW0iLCJHcm91cEl0ZW0iLCJJdGVtIiwiaGFzQWNjZXNzIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJyZWdpc3RlcmVkIiwiU2V0IiwiaXNBZG1pbiIsImF1dGhvcml6ZWRQZW9wbGUiLCJwZW9wbGUiLCJmaWx0ZXIiLCJpIiwiYXV0aG9yaXplZCIsInJlYWR5IiwicHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJsb2ciLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic29tZSIsInJvbGUiLCJjaGVja01lbWJlciIsInBlcnNvbiIsImhhcyIsImFkZCIsImludml0ZWQiLCJwdXNoIiwiZm9yRWFjaCIsInBlbmRpbmdJbmRleCIsImZpbmRJbmRleCIsInAiLCJwZW5kaW5nTWVtYmVyIiwic3BsaWNlIiwidHJpZ2dlckV2ZW50IiwiYXJncyIsIm1lbWJlciIsInRyaWdnZXIiLCJzZXQiLCJ0b0xvd2VyQ2FzZSIsImFjY2VzcyJdLCJzb3VyY2VzIjpbIi9jb2xsZWN0aW9uLnRzIiwiL2RhdGEtcHJvdmlkZXIudHMiLCIvZXJyb3IudHMiLCIvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUFPRSxNQUFPLFNBQVFILFdBQUEsQ0FBQUksVUFBbUM7WUFDekVDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSTtjQUN2QixLQUFLLENBQUM7Z0JBQ0xELE1BQU07Z0JBQ05DLElBQUk7Z0JBQ0pDLFFBQVEsRUFBRU4sYUFBQSxDQUFBTztlQUNWLENBQUM7WUFDSDs7VUFDQUMsT0FBQSxDQUFBUCxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkQsSUFBQVEsUUFBQSxHQUFBVixPQUFBO1VBRUEsSUFBQVcsSUFBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQVksT0FBQSxHQUFBWixPQUFBO1VBR0EsSUFBQWEsTUFBQSxHQUFBYixPQUFBO1VBT08sWUFMUDs7OztVQUtrQixNQUFPUSxZQUFZO1lBQ3BDLENBQUFNLEdBQUk7WUFDSixDQUFBQyxLQUFNO1lBRU4sQ0FBQVYsTUFBTztZQUVQRCxZQUFZVyxLQUFLO2NBQ2hCLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUgsSUFBQSxDQUFBSyxHQUFHLENBQUNKLE9BQUEsQ0FBQUssT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9D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