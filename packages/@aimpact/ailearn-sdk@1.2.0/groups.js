System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/entities/collection", "@beyond-js/reactive@2.1.1/model", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/http-suite@0.1.1/api", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/ailearn-sdk@1.2.0/startup", "@beyond-js/reactive@2.1.1/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Groups, DataProvider, GroupItem, __beyond_pkg, hmr;
  _export({
    Groups: void 0,
    DataProvider: void 0,
    GroupItem: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_1 = _beyondJsReactive211EntitiesCollection;
    }, function (_beyondJsReactive211Model) {
      dependency_2 = _beyondJsReactive211Model;
    }, function (_aimpactChatSdk155Session) {
      dependency_3 = _aimpactChatSdk155Session;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_4 = _beyondJsHttpSuite011Api;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_5 = _aimpactAilearnSdk120Config;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_6 = _aimpactAilearnSdk120Startup;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_7 = _beyondJsReactive211EntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/groups"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/collection', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@beyond-js/http-suite/api', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/ailearn-sdk/startup', dependency_6], ['@beyond-js/reactive/entities/item', dependency_7]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 270024252,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Groups = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
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
        hash: 1367450991,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DataProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _error = require("./error");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          /*bundle */ /**
                       
                        
                       */
          class DataProvider {
            #api;
            #model;
            #entity;
            constructor(model) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#model = model;
              this.#entity = model.entity;
            }
            setModel(model) {
              this.#model = model;
            }
            async load(specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const id = specs.id || specs.code;
              const response = await this.#api.get(`/${this.#entity}/${id}`);
              if (!response.status) {
                throw new _error.CustomError(response.error.text, response.error.code);
              }
              return response.data;
            }
            async publish(specs = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/${this.#entity}/${this.#model.id}/approve`, specs);
              if (!response.status) {
                throw new _error.CustomError(response.error.text, response.error.code);
                // throw new Error('Error approving the user');
              }
              return response;
            }
            async delete(specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const res = await this.#api.delete(`/${this.#entity}/${specs.id}`);
              if (!res.status) {
                throw new _error.CustomError(res.error.text, res.error.code);
              }
              return res;
            }
            async removeMember(specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const res = await this.#api.delete(`/${this.#entity}/${specs.id}/user/${specs.uid}`);
              if (!res.status) {
                throw new _error.CustomError(res.error.text, res.error.code);
              }
              return res;
            }
            async reject(specs) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
              const response = await this.#api.post(`/classrooms/${this.#model.id}/request`, {});
              return response.data;
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
        hash: 2373815960,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GroupItem = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
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
            #registered = new Map();
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
              this.#pendings = [];
              this.#managers = [];
              this.#members = [];
              this.#registered = new Map();
              specs = typeof specs === 'number' || typeof specs === 'string' ? {
                id: specs
              } : specs;
              if (!specs || Object.keys(specs).length === 0) specs = {
                id: this.id
              };
              const data = await super.load(specs); // {id}
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
                // Use both uid and id for identification
                const currentRole = this.#registered.get(person.id);
                // Guard clause: If the role hasn't changed, do nothing
                if (!person.invited && person.role && currentRole === person.role) {
                  this.#pendings = this.#pendings.filter(i => i.id !== person.id);
                  return;
                }
                // If the person is already registered, remove them from their current role array
                if (isAdmin && !person.invited && currentRole) {
                  if (currentRole === 'manager') {
                    this.#managers = this.#managers.filter(i => i.id !== person.id);
                  } else {
                    this.#members = this.#members.filter(i => i.id !== person.id);
                  }
                }
                // Add the person to the appropriate role array
                this.#pendings = this.#pendings.filter(i => i.id !== person.id);
                if (isAdmin && (!person.authorized || person.invited)) {
                  this.#pendings.push(person);
                }
                if (person.role) {
                  person.role === 'manager' ? this.#managers.push(person) : this.#members.push(person);
                }
                // Update the registered map with the current role
                // this.#registered.set(personId, person.role);
                if (!person.invited) this.#registered.set(person.id, person.role);
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
              const id = uid || specs.id;
              // Find and remove the pending member with the specified id
              const pendingIndex = this.#pendings.findIndex(p => p.uid === id || p.id === id);
              this.#registered.set(this.#pendings[pendingIndex].id, specs.role);
              if (pendingIndex >= 0) {
                const [pendingMember] = this.#pendings.splice(pendingIndex, 1);
                pendingMember.authorized = true;
                // Add the pending member to the members list
                specs.role === 'member' ? this.#members.push(pendingMember) : this.#managers.push(pendingMember);
              }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsInByb3ZpZGVyIiwiRGF0YVByb3ZpZGVyIiwiZXhwb3J0cyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9lcnJvciIsIl9zdGFydHVwIiwiYXBpIiwibW9kZWwiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsInNldE1vZGVsIiwibG9hZCIsInNwZWNzIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJiZWFyZXIiLCJpZCIsImNvZGUiLCJyZXNwb25zZSIsImdldCIsInN0YXR1cyIsIkN1c3RvbUVycm9yIiwiZXJyb3IiLCJ0ZXh0IiwiZGF0YSIsInB1Ymxpc2giLCJwb3N0IiwibGlzdCIsImVuZHBvaW50IiwidW5kZWZpbmVkIiwiaXRlbXMiLCJlIiwiY29uc29sZSIsInRlc3QiLCJpbnZpdGUiLCJyZXMiLCJFcnJvciIsImNhbmNlbEludml0YXRpb24iLCJkZWxldGUiLCJlbWFpbCIsImpvaW4iLCJhcHByb3ZlIiwicmVtb3ZlTWVtYmVyIiwidWlkIiwicmVqZWN0IiwicmVxdWVzdEFjY2VzcyIsIm1lc3NhZ2UiLCJuYW1lIiwiX2l0ZW0iLCJHcm91cEl0ZW0iLCJJdGVtIiwiaGFzQWNjZXNzIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJyZWdpc3RlcmVkIiwiTWFwIiwiaXNBZG1pbiIsImF1dGhvcml6ZWRQZW9wbGUiLCJwZW9wbGUiLCJmaWx0ZXIiLCJpIiwiYXV0aG9yaXplZCIsInJlYWR5IiwicHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic29tZSIsInJvbGUiLCJjaGVja01lbWJlciIsInBlcnNvbiIsImN1cnJlbnRSb2xlIiwiaW52aXRlZCIsInB1c2giLCJzZXQiLCJmb3JFYWNoIiwicGVuZGluZ0luZGV4IiwiZmluZEluZGV4IiwicCIsInBlbmRpbmdNZW1iZXIiLCJzcGxpY2UiLCJ0cmlnZ2VyRXZlbnQiLCJhcmdzIiwibWVtYmVyIiwidHJpZ2dlciIsInRvTG93ZXJDYXNlIiwiYWNjZXNzIl0sInNvdXJjZXMiOlsiLy9jb2xsZWN0aW9uLnRzLyIsIi8vZGF0YS1wcm92aWRlci50cy8iLCIvL2Vycm9yLnRzLyIsIi8vaXRlbS50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUFPRSxNQUFPLFNBQVFILFdBQUEsQ0FBQUksVUFBbUM7WUFDekVDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSTtjQUN2QixLQUFLLENBQUM7Z0JBQ0xELE1BQU07Z0JBQ05DLElBQUk7Z0JBQ0pDLFFBQVEsRUFBRU4sYUFBQSxDQUFBTztlQUNWLENBQUM7WUFDSDs7VUFDQUMsT0FBQSxDQUFBUCxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkQsSUFBQVEsUUFBQSxHQUFBVixPQUFBO1VBRUEsSUFBQVcsSUFBQSxHQUFBWCxPQUFBO1VBSUEsSUFBQVksTUFBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsUUFBQSxHQUFBYixPQUFBO1VBT08sWUFMUDs7OztVQUtrQixNQUFPUSxZQUFZO1lBQ3BDLENBQUFNLEdBQUk7WUFDSixDQUFBQyxLQUFNO1lBRU4sQ0FBQVYsTUFBTztZQUVQRCxZQUFZVyxLQUFLO2NBQ2hCLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUgsSUFBQSxDQUFBSyxHQUFHLENBQUNILFFBQUEsQ0FBQUksU0FBUyxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMzQyxJQUFJLENBQUMs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Q0FBQ0UsTUFBTSxFQUFFO2dCQUNwQixJQUFJLENBQUN1QyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUN0QixLQUFLLEtBQUs1QixLQUFLLENBQUM0QixLQUFLLENBQUM7Z0JBQzlELElBQUksQ0FBQyxDQUFBZSxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ00sTUFBTSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ3RCLEtBQUssS0FBSzVCLEtBQUssQ0FBQzRCLEtBQUssQ0FBQztnQkFDcEUsSUFBSSxDQUFDK0MsWUFBWSxFQUFFOztZQUVyQjtZQUVBLE1BQU1oRCxNQUFNQSxDQUFBO2NBQ1gsTUFBTXBCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQzBDLE1BQU0sQ0FBQztnQkFBRXRCLEVBQUUsRUFBRSxJQUFJLENBQUNBO2NBQUUsQ0FBRSxDQUFDO2NBQzVELElBQUlFLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2dCQUNwQixJQUFJLENBQUNrRSxZQUFZLEVBQUU7O2NBRXBCLE9BQU9wRSxRQUFRO1lBQ2hCO1lBRUEsTUFBTXNCLElBQUlBLENBQUM7Y0FBRXZCO1lBQUksQ0FBRTtjQUNsQixNQUFNTyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUM1QixRQUFRLENBQUM0QyxJQUFJLENBQUM7Z0JBQUV2QjtjQUFJLENBQUUsQ0FBQztjQUMvQyxJQUFJLENBQUM4RCxHQUFHLENBQUM7Z0JBQUU5RDtjQUFJLENBQUUsQ0FBQztjQUNsQixPQUFPTyxJQUFJO1lBQ1o7WUFFQSxNQUFNcUIsYUFBYUEsQ0FBQTtjQUNsQixNQUFNckIsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDNUIsUUFBUSxDQUFDaUQsYUFBYSxFQUFFO2NBRWhELElBQUlyQixJQUFJLENBQUNKLE1BQU0sQ0FBQ3NFLFdBQVcsRUFBRSxLQUFLLFlBQVksRUFBRTtnQkFDL0MsTUFBTSxJQUFJLENBQUNoRixJQUFJLENBQUM7a0JBQUVNLEVBQUUsRUFBRSxJQUFJLENBQUNBO2dCQUFFLENBQUUsQ0FBQztlQUNoQyxNQUFNO2dCQUNOLE1BQU0sSUFBSSxDQUFDK0QsR0FBRyxDQUFDO2tCQUFFWSxNQUFNLEVBQUVuRSxJQUFJLENBQUNKO2dCQUFNLENBQUUsQ0FBQzs7Y0FFeEMsSUFBSSxDQUFDMkQsR0FBRyxDQUFDdkQsSUFBSSxDQUFDO2NBQ2QsT0FBT0EsSUFBSTtZQUNaOztVQUNBMUIsT0FBQSxDQUFBbUQsU0FBQSxHQUFBQSxTQUFBIiwiaWdub3JlTGlzdCI6W119