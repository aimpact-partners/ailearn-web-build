System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.0/entities/collection", "@beyond-js/reactive@2.1.0/model", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/http-suite@0.1.1/api", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/ailearn-sdk@1.2.0/startup", "@beyond-js/reactive@2.1.0/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Groups, DataProvider, GroupItem, __beyond_pkg, hmr;
  _export({
    Groups: void 0,
    DataProvider: void 0,
    GroupItem: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive210EntitiesCollection) {
      dependency_1 = _beyondJsReactive210EntitiesCollection;
    }, function (_beyondJsReactive210Model) {
      dependency_2 = _beyondJsReactive210Model;
    }, function (_aimpactChatSdk154Session) {
      dependency_3 = _aimpactChatSdk154Session;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_4 = _beyondJsHttpSuite011Api;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_5 = _aimpactAilearnSdk120Config;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_6 = _aimpactAilearnSdk120Startup;
    }, function (_beyondJsReactive210EntitiesItem) {
      dependency_7 = _beyondJsReactive210EntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.5.3"]]);
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
        hash: 3666591359,
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
              const data = await super.load(specs);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsInByb3ZpZGVyIiwiRGF0YVByb3ZpZGVyIiwiZXhwb3J0cyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9lcnJvciIsIl9zdGFydHVwIiwiYXBpIiwibW9kZWwiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsInNldE1vZGVsIiwibG9hZCIsInNwZWNzIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJiZWFyZXIiLCJpZCIsImNvZGUiLCJyZXNwb25zZSIsImdldCIsInN0YXR1cyIsIkN1c3RvbUVycm9yIiwiZXJyb3IiLCJ0ZXh0IiwiZGF0YSIsInB1Ymxpc2giLCJwb3N0IiwibGlzdCIsImVuZHBvaW50IiwidW5kZWZpbmVkIiwiaXRlbXMiLCJlIiwiY29uc29sZSIsInRlc3QiLCJpbnZpdGUiLCJyZXMiLCJFcnJvciIsImNhbmNlbEludml0YXRpb24iLCJkZWxldGUiLCJlbWFpbCIsImpvaW4iLCJhcHByb3ZlIiwicmVtb3ZlTWVtYmVyIiwidWlkIiwicmVqZWN0IiwicmVxdWVzdEFjY2VzcyIsIm1lc3NhZ2UiLCJuYW1lIiwiX2l0ZW0iLCJHcm91cEl0ZW0iLCJJdGVtIiwiaGFzQWNjZXNzIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJyZWdpc3RlcmVkIiwiTWFwIiwiaXNBZG1pbiIsImF1dGhvcml6ZWRQZW9wbGUiLCJwZW9wbGUiLCJmaWx0ZXIiLCJpIiwiYXV0aG9yaXplZCIsInJlYWR5IiwicHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic29tZSIsInJvbGUiLCJjaGVja01lbWJlciIsInBlcnNvbiIsImN1cnJlbnRSb2xlIiwiaW52aXRlZCIsInB1c2giLCJzZXQiLCJmb3JFYWNoIiwicGVuZGluZ0luZGV4IiwiZmluZEluZGV4IiwicCIsInBlbmRpbmdNZW1iZXIiLCJzcGxpY2UiLCJ0cmlnZ2VyRXZlbnQiLCJhcmdzIiwibWVtYmVyIiwidHJpZ2dlciIsInRvTG93ZXJDYXNlIiwiYWNjZXNzIl0sInNvdXJjZXMiOlsiL2NvbGxlY3Rpb24udHMiLCIvZGF0YS1wcm92aWRlci50cyIsIi9lcnJvci50cyIsIi9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFBT0UsTUFBTyxTQUFRSCxXQUFBLENBQUFJLFVBQW1DO1lBQ3pFQyxZQUFZQyxNQUFNLEVBQUVDLElBQUk7Y0FDdkIsS0FBSyxDQUFDO2dCQUNMRCxNQUFNO2dCQUNOQyxJQUFJO2dCQUNKQyxRQUFRLEVBQUVOLGFBQUEsQ0FBQU87ZUFDVixDQUFDO1lBQ0g7O1VBQ0FDLE9BQUEsQ0FBQVAsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZELElBQUFRLFFBQUEsR0FBQVYsT0FBQTtVQUVBLElBQUFXLElBQUEsR0FBQVgsT0FBQTtVQUlBLElBQUFZLE1BQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLFFBQUEsR0FBQWIsT0FBQTtVQU9PLFlBTFA7Ozs7VUFLa0IsTUFBT1EsWUFBWTtZQUNwQyxDQUFBTSxHQUFJO1lBQ0osQ0FBQUMsS0FBTTtZQUVOLENBQUFWLE1BQU87WUFFUEQsWUFBWVcsS0FBSztjQUNoQixJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlILElBQUEsQ0FBQUssR0FBRyxDQUFDSCxRQUFBLENBQUFJLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDM0MsSUFBSSxDQUFDLENBQUFKLEtBQU0sR0FBR0EsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQVYsTUFBTyxHQUFHVSxLQUFLLENBQUNWLE1BQU07WUFDNUI7WUFFQWUsUUFBUUEsQ0FBQ0wsS0FBSztjQUNiLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdBLEtBQUs7WUFDcEI7WUFDQSxNQUFNTSxJQUFJQSxDQUFDQyxLQUFtQztjQUM3QyxNQUFNQyxLQUFLLEdBQUcsTUFBTWIsUUFBQSxDQUFBYyxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQVQsR0FBSSxDQUFDWSxNQUFNLENBQUNILEtBQUssQ0FBQztjQUN2QixNQUFNSSxFQUFFLEdBQUdMLEtBQUssQ0FBQ0ssRUFBRSxJQUFJTCxLQUFLLENBQUNNLElBQUk7Y0FDakMsTUFBTUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFmLEdBQUksQ0FBQ2dCLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFBekIsTUFBTyxJQUFJc0IsRUFBRSxFQUFFLENBQUM7Y0FFOUQsSUFBSSxDQUFDRSxRQUFRLENBQUNFLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJbkIsTUFBQSxDQUFBb0IsV0FBVyxDQUFDSCxRQUFRLENBQUNJLEtBQUssQ0FBQ0MsSUFBSSxFQUFFTCxRQUFRLENBQUNJLEtBQUssQ0FBQ0wsSUFBSSxDQUFDOztjQUVoRSxPQUFPQyxRQUFRLENBQUNNLElBQUk7WUFDckI7WUFDQSxNQUFNQyxPQUFPQSxDQUFDZCxLQUFLLEdBQUcsRUFBRTtjQUN2QixNQUFNQyxLQUFLLEdBQUcsTUFBTWIsUUFBQSxDQUFBYyxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQVQsR0FBSSxDQUFDWSxNQUFNLENBQUNILEtBQUssQ0FBQztjQUN2QixNQUFNTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWYsR0FBSSxDQUFDdUIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUFoQyxNQUFPLEVBQUUsRUFBRWlCLEtBQUssQ0FBQztjQUNoRSxJQUFJLENBQUNPLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUluQixNQUFBLENBQUFvQixXQUFXLENBQUNILFFBQVEsQ0FBQ0ksS0FBSyxDQUFDQyxJQUFJLEVBQUVMLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDTCxJQUFJLENBQUM7Z0JBQy9EOztjQUVELE9BQU9DLFFBQVE7WUFDaEI7WUFDQSxNQUFNUyxJQUFJQSxDQUFDaEIsS0FBSyxHQUFHO2NBQUVpQixRQUFRLEVBQUVDO1lBQVMsQ0FBRTtjQUN6QyxJQUFJO2dCQUNILE1BQU1qQixLQUFLLEdBQUcsTUFBTWIsUUFBQSxDQUFBYyxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztnQkFDN0MsSUFBSSxDQUFDLENBQUFULEdBQUksQ0FBQ1ksTUFBTSxDQUFDSCxLQUFLLENBQUM7Z0JBRXZCLE1BQU1nQixRQUFRLEdBQUdqQixLQUFLLENBQUNpQixRQUFRLEdBQUdqQixLQUFLLENBQUNpQixRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQWxDLE1BQU8sRUFBRTtnQkFDckUsT0FBT2lCLEtBQUssQ0FBQ2lCLFFBQVE7Z0JBQ3JCLE1BQU1WLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBZixHQUFJLENBQUNnQixHQUFHLENBQUNTLFFBQVEsRUFBRWpCLEtBQUssQ0FBQztnQkFDckQsT0FBT08sUUFBUSxDQUFDTSxJQUFJLENBQUNNLEtBQUs7ZUFDMUIsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ1YsS0FBSyxDQUFDUyxDQUFDLENBQUM7O1lBRWxCO1lBRUFFLElBQUlBLENBQUE7Y0FDSDtZQUFBO1lBR0QsTUFBTUMsTUFBTUEsQ0FBQ3ZCLEtBQUssR0FBRyxFQUFFO2NBQ3RCLElBQUk7Z0JBQ0gsTUFBTUMsS0FBSyxHQUFHLE1BQU1iLFFBQUEsQ0FBQWMsY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Z0JBQzdDLElBQUksQ0FBQyxDQUFBVCxHQUFJLENBQUNZLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2dCQUN2QixNQUFNdUIsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFoQyxHQUFJLENBQUN1QixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQWhDLE1BQU8sSUFBSyxJQUFJLENBQUMsQ0FBQVUsS0FBb0IsQ0FBQ1ksRUFBRSxTQUFTLEVBQUVMLEtBQUssQ0FBQztnQkFFbkcsSUFBSSxDQUFDd0IsR0FBRyxDQUFDZixNQUFNLEVBQUU7a0JBQ2hCLE1BQU0sSUFBSWdCLEtBQUssQ0FBQywrQkFBK0IsQ0FBQzs7Z0JBRWpELE9BQU9ELEdBQUc7ZUFDVixDQUFDLE9BQU9KLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDVixLQUFLLENBQUNTLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNTSxnQkFBZ0JBLENBQUMxQixLQUFBLEdBQTRCLEVBQUU7Y0FDcEQsSUFBSTtnQkFDSCxNQUFNQyxLQUFLLEdBQUcsTUFBTWIsUUFBQSxDQUFBYyxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztnQkFDN0MsSUFBSSxDQUFDLENBQUFULEdBQUksQ0FBQ1ksTUFBTSxDQUFDSCxLQUFLLENBQUM7Z0JBQ3ZCLE1BQU11QixHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWhDLEdBQUksQ0FBQ21DLE1BQU0sQ0FDakMsSUFBSSxJQUFJLENBQUMsQ0FBQTVDLE1BQU8sSUFBSyxJQUFJLENBQUMsQ0FBQVUsS0FBb0IsQ0FBQ1ksRUFBRSxnQkFBZ0JMLEtBQUssQ0FBQzRCLEtBQUssRUFBRSxFQUM5RTVCLEtBQUssQ0FDTDtnQkFFRCxJQUFJLENBQUN3QixHQUFHLENBQUNmLE1BQU0sRUFBRTtrQkFDaEIsTUFBTSxJQUFJZ0IsS0FBSyxDQUFDLCtCQUErQixDQUFDOztnQkFFakQsT0FBT0QsR0FBRztlQUNWLENBQUMsT0FBT0osQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNWLEtBQUssQ0FBQ1MsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1TLElBQUlBLENBQUM3QixLQUFLLEdBQUcsRUFBRTtjQUNwQixNQUFNQyxLQUFLLEdBQUcsTUFBTWIsUUFBQSxDQUFBYyxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQVQsR0FBSSxDQUFDWSxNQUFNLENBQUNILEtBQUssQ0FBQztjQUV2QixNQUFNdUIsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFoQyxHQUFJLENBQUN1QixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQWhDLE1BQU8sT0FBTyxFQUFFaUIsS0FBSyxDQUFDO2NBRWhFLElBQUksQ0FBQ3dCLEdBQUcsQ0FBQ2YsTUFBTSxFQUFFO2dCQUNoQixJQUFJZSxHQUFHLENBQUNiLEtBQUssQ0FBQ0wsSUFBSSxLQUFLLEdBQUcsRUFBRTtrQkFDM0IsTUFBTSxJQUFJbUIsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztnQkFFbEMsSUFBSUQsR0FBRyxDQUFDYixLQUFLLENBQUNMLElBQUksS0FBSyxHQUFHLEVBQUU7a0JBQzNCLE1BQU0sSUFBSW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7Z0JBRW5DLElBQUlELEdBQUcsQ0FBQ2IsS0FBSyxDQUFDTCxJQUFJLEtBQUssR0FBRyxFQUFFO2tCQUMzQixNQUFNLElBQUltQixLQUFLLENBQUMsY0FBYyxDQUFDOztnQkFFaEMsTUFBTSxJQUFJQSxLQUFLLENBQUMsa0JBQWtCLENBQUM7O2NBRXBDLE9BQU9ELEdBQUc7WUFDWDtZQUVBLE1BQU1NLE9BQU9BLENBQUM5QixLQUFLLEdBQUcsRUFBRTtjQUN2QixNQUFNQyxLQUFLLEdBQUcsTUFBTWIsUUFBQSxDQUFBYyxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQVQsR0FBSSxDQUFDWSxNQUFNLENBQUNILEtBQUssQ0FBQztjQUN2QixNQUFNTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWYsR0FBSSxDQUFDdUIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUFoQyxNQUFPLElBQUssSUFBSSxDQUFDLENBQUFVLEtBQW9CLENBQUNZLEVBQUUsVUFBVSxFQUFFTCxLQUFLLENBQUM7Y0FDekcsSUFBSSxDQUFDTyxRQUFRLENBQUNFLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJbkIsTUFBQSxDQUFBb0IsV0FBVyxDQUFDSCxRQUFRLENBQUNJLEtBQUssQ0FBQ0MsSUFBSSxFQUFFTCxRQUFRLENBQUNJLEtBQUssQ0FBQ0wsSUFBSSxDQUFDO2dCQUMvRDs7Y0FFRCxPQUFPQyxRQUFRO1lBQ2hCO1lBRUEsTUFBTW9CLE1BQU1BLENBQUMzQixLQUE4QjtjQUMxQyxNQUFNQyxLQUFLLEdBQUcsTUFBTWIsUUFBQSxDQUFBYyxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQVQsR0FBSSxDQUFDWSxNQUFNLENBQUNILEtBQUssQ0FBQztjQUN2QixNQUFNdUIsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFoQyxHQUFJLENBQUNtQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQTVDLE1BQU8sSUFBSWlCLEtBQUssQ0FBQ0ssRUFBRSxFQUFFLENBQUM7Y0FDbEUsSUFBSSxDQUFDbUIsR0FBRyxDQUFDZixNQUFNLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSW5CLE1BQUEsQ0FBQW9CLFdBQVcsQ0FBQ2MsR0FBRyxDQUFDYixLQUFLLENBQUNDLElBQUksRUFBRVksR0FBRyxDQUFDYixLQUFLLENBQUNMLElBQUksQ0FBQzs7Y0FFdEQsT0FBT2tCLEdBQUc7WUFDWDtZQUVBLE1BQU1PLFlBQVlBLENBQUMvQixLQUFrQztjQUNwRCxNQUFNQyxLQUFLLEdBQUcsTUFBTWIsUUFBQSxDQUFBYyxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQVQsR0FBSSxDQUFDWSxNQUFNLENBQUNILEtBQUssQ0FBQztjQUN2QixNQUFNdUIsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFoQyxHQUFJLENBQUNtQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQTVDLE1BQU8sSUFBSWlCLEtBQUssQ0FBQ0ssRUFBRSxTQUFTTCxLQUFLLENBQUNnQyxHQUFHLEVBQUUsQ0FBQztjQUNwRixJQUFJLENBQUNSLEdBQUcsQ0FBQ2YsTUFBTSxFQUFFO2dCQUNoQixNQUFNLElBQUluQixNQUFBLENBQUFvQixXQUFXLENBQUNjLEdBQUcsQ0FBQ2IsS0FBSyxDQUFDQyxJQUFJLEVBQUVZLEdBQUcsQ0FBQ2IsS0FBSyxDQUFDTCxJQUFJLENBQUM7O2NBRXRELE9BQU9rQixHQUFHO1lBQ1g7WUFFQSxNQUFNUyxNQUFNQSxDQUFDakMsS0FBa0M7Y0FDOUMsSUFBSTtnQkFDSCxNQUFNQyxLQUFLLEdBQUcsTUFBTWIsUUFBQSxDQUFBYyxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztnQkFDN0MsSUFBSSxDQUFDLENBQUFULEdBQUksQ0FBQ1ksTUFBTSxDQUFDSCxLQUFLLENBQUM7Z0JBQ3ZCLE1BQU11QixHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWhDLEdBQUksQ0FBQ21DLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFBNUMsTUFBTyxJQUFJaUIsS0FBSyxDQUFDSyxFQUFFLGNBQWNMLEtBQUssQ0FBQ2dDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFFN0YsSUFBSSxDQUFDUixHQUFHLENBQUNmLE1BQU0sRUFBRTtrQkFDaEIsTUFBTSxJQUFJZ0IsS0FBSyxDQUFDLHFDQUFxQyxJQUFJLENBQUMsQ0FBQTFDLE1BQU8sRUFBRSxDQUFDOztnQkFFckUsT0FBT3lDLEdBQUc7ZUFDVixDQUFDLE9BQU9KLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDVixLQUFLLENBQUNTLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNYyxhQUFhQSxDQUFBO2NBQ2xCLE1BQU0zQixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWYsR0FBSSxDQUFDdUIsSUFBSSxDQUFDLGVBQWdCLElBQUksQ0FBQyxDQUFBdEIsS0FBb0IsQ0FBQ1ksRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDO2NBQ2pHLE9BQU9FLFFBQVEsQ0FBQ00sSUFBSTtZQUNyQjs7VUFDQTFCLE9BQUEsQ0FBQUQsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdLSyxNQUFPd0IsV0FBWSxTQUFRZSxLQUFLO1lBQ3JDVSxPQUFPO1lBQ1A3QixJQUFJO1lBQ0p4QixZQUFZcUQsT0FBTyxFQUFFN0IsSUFBSTtjQUN4QixLQUFLLENBQUM2QixPQUFPLENBQUMsQ0FBQyxDQUFDO2NBQ2hCLElBQUksQ0FBQ0MsSUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDO2NBQzNCLElBQUksQ0FBQzlCLElBQUksR0FBR0EsSUFBSSxDQUFDLENBQUM7WUFDbkI7O1VBQ0FuQixPQUFBLENBQUF1QixXQUFBLEdBQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQTJCLEtBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBVSxRQUFBLEdBQUFWLE9BQUE7VUFhTztVQUFVLE1BQU80RCxTQUFVLFNBQVFELEtBQUEsQ0FBQUUsSUFBNkI7WUFPdEUsQ0FBQUMsU0FBVSxHQUFZLEtBQUs7WUFFM0IsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFDQSxDQUFBQyxPQUFRLEdBQWEsRUFBRTtZQUN2QixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLENBQUFDLFFBQVMsR0FBYSxFQUFFO1lBQ3hCLElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQUMsUUFBUyxHQUFhLEVBQUU7WUFDeEIsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxDQUFBQyxVQUFXLEdBQXdCLElBQUlDLEdBQUcsRUFBRTtZQUU1QyxDQUFBQyxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQSxJQUFJQyxnQkFBZ0JBLENBQUE7Y0FDbkIsT0FBTyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsVUFBVSxDQUFDO1lBQzdDO1lBRUEsQ0FBQUMsS0FBTSxHQUFZLEtBQUs7WUFDdkIsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQXRFLFlBQVlDLE1BQU0sRUFBRTtjQUFFc0UsVUFBVTtjQUFFLEdBQUd4QztZQUFJLENBQUU7Y0FDMUMsS0FBSyxDQUFDO2dCQUNMOUIsTUFBTTtnQkFDTixHQUFHOEIsSUFBSTtnQkFDUDVCLFFBQVEsRUFBRU4sYUFBQSxDQUFBTyxZQUFZO2dCQUN0Qm1FLFVBQVUsRUFBRSxDQUNYLGFBQWEsRUFDYixhQUFhLEVBQ2IsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsYUFBYSxFQUNiLFFBQVEsRUFDUixXQUFXLEVBQ1gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsR0FBR0EsVUFBVTtlQUVkLENBQUM7Y0FFRixJQUFJLENBQUNwRSxRQUFRLENBQUNhLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDN0I7WUFFQSxNQUFNQyxJQUFJQSxDQUFDQyxLQUFNO2NBQ2hCLElBQUksQ0FBQyxDQUFBMkMsUUFBUyxHQUFHLEVBQUU7Y0FDbkIsSUFBSSxDQUFDLENBQUFELFFBQVMsR0FBRyxFQUFFO2NBQ25CLElBQUksQ0FBQyxDQUFBRCxPQUFRLEdBQUcsRUFBRTtjQUNsQixJQUFJLENBQUMsQ0FBQUcsVUFBVyxHQUFHLElBQUlDLEdBQUcsRUFBRTtjQUM1QjdDLEtBQUssR0FBRyxPQUFPQSxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU9BLEtBQUssS0FBSyxRQUFRLEdBQUc7Z0JBQUVLLEVBQUUsRUFBRUw7Y0FBSyxDQUFFLEdBQUdBLEtBQUs7Y0FDdEYsSUFBSSxDQUFDQSxLQUFLLElBQUlzRCxNQUFNLENBQUNDLElBQUksQ0FBQ3ZELEtBQUssQ0FBQyxDQUFDd0QsTUFBTSxLQUFLLENBQUMsRUFBRXhELEtBQUssR0FBRztnQkFBRUssRUFBRSxFQUFFLElBQUksQ0FBQ0E7Y0FBRSxDQUFFO2NBQ3RFLE1BQU1RLElBQUksR0FBRyxNQUFNLEtBQUssQ0FBQ2QsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFcEMsSUFBSSxDQUFDLElBQUksQ0FBQ2dELE1BQU0sRUFBRTtjQUNsQixJQUFJLENBQUMsQ0FBQVIsU0FBVSxHQUFHLElBQUk7Y0FFdEI7Y0FDQSxJQUFJLENBQUNRLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLRCxDQUFDLENBQUN0QixJQUFJLENBQUN3QixhQUFhLENBQUNELENBQUMsQ0FBQ3ZCLElBQUksQ0FBQyxDQUFDO2NBRXhELE1BQU07Z0JBQUVZO2NBQU0sQ0FBRSxHQUFHLElBQUk7Y0FDdkIsTUFBTUYsT0FBTyxHQUFHRSxNQUFNLENBQUNhLElBQUksQ0FBQ1gsQ0FBQyxJQUFJQSxDQUFDLENBQUNZLElBQUksS0FBSyxTQUFTLElBQUlaLENBQUMsQ0FBQ2xCLEdBQUcsS0FBSzVDLFFBQUEsQ0FBQWMsY0FBYyxDQUFDQyxJQUFJLENBQUNFLEVBQUUsQ0FBQztjQUMxRixJQUFJLENBQUMsQ0FBQXlDLE9BQVEsR0FBR0EsT0FBTztjQUV2QixNQUFNaUIsV0FBVyxHQUFHQyxNQUFNLElBQUc7Z0JBQzVCO2dCQUVBLE1BQU1DLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQXJCLFVBQVcsQ0FBQ3BDLEdBQUcsQ0FBQ3dELE1BQU0sQ0FBQzNELEVBQUUsQ0FBQztnQkFFbkQ7Z0JBRUEsSUFBSSxDQUFDMkQsTUFBTSxDQUFDRSxPQUFPLElBQUlGLE1BQU0sQ0FBQ0YsSUFBSSxJQUFJRyxXQUFXLEtBQUtELE1BQU0sQ0FBQ0YsSUFBSSxFQUFFO2tCQUNsRSxJQUFJLENBQUMsQ0FBQW5CLFFBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQUEsUUFBUyxDQUFDTSxNQUFNLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDN0MsRUFBRSxLQUFLMkQsTUFBTSxDQUFDM0QsRUFBRSxDQUFDO2tCQUMvRDs7Z0JBR0Q7Z0JBQ0EsSUFBSXlDLE9BQU8sSUFBSSxDQUFDa0IsTUFBTSxDQUFDRSxPQUFPLElBQUlELFdBQVcsRUFBRTtrQkFDOUMsSUFBSUEsV0FBVyxLQUFLLFNBQVMsRUFBRTtvQkFDOUIsSUFBSSxDQUFDLENBQUF2QixRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ08sTUFBTSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQzdDLEVBQUUsS0FBSzJELE1BQU0sQ0FBQzNELEVBQUUsQ0FBQzttQkFDL0QsTUFBTTtvQkFDTixJQUFJLENBQUMsQ0FBQW9DLE9BQVEsR0FBRyxJQUFJLENBQUMsQ0FBQUEsT0FBUSxDQUFDUSxNQUFNLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDN0MsRUFBRSxLQUFLMkQsTUFBTSxDQUFDM0QsRUFBRSxDQUFDOzs7Z0JBSS9EO2dCQUVBLElBQUksQ0FBQyxDQUFBc0MsUUFBUyxHQUFHLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUNNLE1BQU0sQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUM3QyxFQUFFLEtBQUsyRCxNQUFNLENBQUMzRCxFQUFFLENBQUM7Z0JBRS9ELElBQUl5QyxPQUFPLEtBQUssQ0FBQ2tCLE1BQU0sQ0FBQ2IsVUFBVSxJQUFJYSxNQUFNLENBQUNFLE9BQU8sQ0FBQyxFQUFFO2tCQUN0RCxJQUFJLENBQUMsQ0FBQXZCLFFBQVMsQ0FBQ3dCLElBQUksQ0FBQ0gsTUFBTSxDQUFDOztnQkFFNUIsSUFBSUEsTUFBTSxDQUFDRixJQUFJLEVBQUU7a0JBQ2hCRSxNQUFNLENBQUNGLElBQUksS0FBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFwQixRQUFTLENBQUN5QixJQUFJLENBQUNILE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBdkIsT0FBUSxDQUFDMEIsSUFBSSxDQUFDSCxNQUFNLENBQUM7O2dCQUdyRjtnQkFDQTtnQkFDQSxJQUFJLENBQUNBLE1BQU0sQ0FBQ0UsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBdEIsVUFBVyxDQUFDd0IsR0FBRyxDQUFDSixNQUFNLENBQUMzRCxFQUFFLEVBQUUyRCxNQUFNLENBQUNGLElBQUksQ0FBQztjQUNsRSxDQUFDO2NBRUQsSUFBSSxDQUFDLENBQUFWLEtBQU0sR0FBRyxJQUFJO2NBQ2xCSixNQUFNLENBQUNxQixPQUFPLENBQUNOLFdBQVcsQ0FBQztjQUMzQixPQUFPbEQsSUFBSTtZQUNaO1lBRUEsTUFBTWlCLE9BQU9BLENBQUM5QixLQUFLO2NBQ2xCO2NBQ0EsSUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBQ0EsS0FBSyxDQUFDZ0MsR0FBRyxFQUFFLE1BQU0sSUFBSVAsS0FBSyxDQUFDLGtDQUFrQyxDQUFDO2NBQzdFLE1BQU1sQixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUN0QixRQUFRLENBQUM2QyxPQUFPLENBQUM5QixLQUFLLENBQUM7Y0FDbkQsSUFBSSxDQUFDTyxRQUFRLENBQUNFLE1BQU0sRUFBRSxDO2NBR3RCLE1BQU07Z0JBQUV1QjtjQUFHLENBQUUsR0FBR2hDLEtBQUs7Y0FDckIsTUFBTUssRUFBRSxHQUFHMkIsR0FBRyxJQUFJaEMsS0FBSyxDQUFDSyxFQUFFO2NBRTFCO2NBQ0EsTUFBTWlFLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQTNCLFFBQVMsQ0FBQzRCLFNBQVMsQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUN4QyxHQUFHLEtBQUszQixFQUFFLElBQUltRSxDQUFDLENBQUNuRSxFQUFFLEtBQUtBLEVBQUUsQ0FBQztjQUMvRSxJQUFJLENBQUMsQ0FBQXVDLFVBQVcsQ0FBQ3dCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQXpCLFFBQVMsQ0FBQzJCLFlBQVksQ0FBQyxDQUFDakUsRUFBRSxFQUFFTCxLQUFLLENBQUM4RCxJQUFJLENBQUM7Y0FDakUsSUFBSVEsWUFBWSxJQUFJLENBQUMsRUFBRTtnQkFDdEIsTUFBTSxDQUFDRyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTlCLFFBQVMsQ0FBQytCLE1BQU0sQ0FBQ0osWUFBWSxFQUFFLENBQUMsQ0FBQztnQkFDOURHLGFBQWEsQ0FBQ3RCLFVBQVUsR0FBRyxJQUFJO2dCQUMvQjtnQkFDQW5ELEtBQUssQ0FBQzhELElBQUksS0FBSyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFyQixPQUFRLENBQUMwQixJQUFJLENBQUNNLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBL0IsUUFBUyxDQUFDeUIsSUFBSSxDQUFDTSxhQUFhLENBQUM7O2NBR2pHLElBQUksQ0FBQ0UsWUFBWSxFQUFFO1lBQ3BCO1lBRUEsTUFBTTVDLFlBQVlBLENBQUM2QyxJQUFJO2NBQ3RCLE1BQU1yRSxRQUFRLEdBQXdCLE1BQU0sSUFBSSxDQUFDdEIsUUFBUSxDQUFDOEMsWUFBWSxDQUFDNkMsSUFBSSxDQUFDO2NBQzVFLElBQUlyRSxRQUFRLENBQUNFLE1BQU0sRUFBRTtnQkFDcEIsSUFBSSxDQUFDdUMsTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUFDQyxNQUFNLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDbEIsR0FBRyxLQUFLNEMsSUFBSSxDQUFDNUMsR0FBRyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsQ0FBQVUsUUFBUyxHQUFHLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUNPLE1BQU0sQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNsQixHQUFHLEtBQUs0QyxJQUFJLENBQUM1QyxHQUFHLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxDQUFBUyxPQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFBLE9BQVEsQ0FBQ1EsTUFBTSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ2xCLEdBQUcsS0FBSzRDLElBQUksQ0FBQzVDLEdBQUcsQ0FBQztnQkFDN0QsSUFBSSxDQUFDMkMsWUFBWSxFQUFFOztZQUVyQjtZQUVBLE1BQU0xQyxNQUFNQSxDQUFDakMsS0FBSztjQUNqQixNQUFNTyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUN0QixRQUFRLENBQUNnRCxNQUFNLENBQUM7Z0JBQUU1QixFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO2dCQUFFLEdBQUdMO2NBQUssQ0FBRSxDQUFDO2NBQ3RFLElBQUlPLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2dCQUNwQixJQUFJLENBQUN1QyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNsQixHQUFHLEtBQUtoQyxLQUFLLENBQUNnQyxHQUFHLENBQUM7Z0JBQzFELElBQUksQ0FBQyxDQUFBVyxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ00sTUFBTSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ2xCLEdBQUcsS0FBS2hDLEtBQUssQ0FBQ2dDLEdBQUcsQ0FBQztnQkFDaEUsSUFBSSxDQUFDMkMsWUFBWSxFQUFFOztZQUVyQjtZQUVBLE1BQU1wRCxNQUFNQSxDQUFDdkIsS0FBSztjQUNqQixNQUFNTyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUN0QixRQUFRLENBQUNzQyxNQUFNLENBQUN2QixLQUFLLENBQUM7Y0FDbEQsTUFBTTZFLE1BQU0sR0FBRztnQkFDZCxHQUFHN0UsS0FBSztnQkFDUmtFLE9BQU8sRUFBRTtlQUNUO2NBQ0Q7Y0FDQSxJQUFJLENBQUNsQixNQUFNLENBQUNtQixJQUFJLENBQUNVLE1BQU0sQ0FBQztjQUN4QixJQUFJLENBQUMsQ0FBQWxDLFFBQVMsQ0FBQ3dCLElBQUksQ0FBQ1UsTUFBTSxDQUFDO2NBQzNCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN0QixPQUFPdkUsUUFBUTtZQUNoQjtZQUVBLE1BQU1tQixnQkFBZ0JBLENBQUMxQixLQUFLO2NBQzNCLE1BQU1PLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQ3lDLGdCQUFnQixDQUFDMUIsS0FBSyxDQUFDO2NBQzVELElBQUlPLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2dCQUNwQixJQUFJLENBQUN1QyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUN0QixLQUFLLEtBQUs1QixLQUFLLENBQUM0QixLQUFLLENBQUM7Z0JBQzlELElBQUksQ0FBQyxDQUFBZSxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ00sTUFBTSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ3RCLEtBQUssS0FBSzVCLEtBQUssQ0FBQzRCLEtBQUssQ0FBQztnQkFDcEUsSUFBSSxDQUFDK0MsWUFBWSxFQUFFOztZQUVyQjtZQUVBLE1BQU1oRCxNQUFNQSxDQUFBO2NBQ1gsTUFBTXBCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQzBDLE1BQU0sQ0FBQztnQkFBRXRCLEVBQUUsRUFBRSxJQUFJLENBQUNBO2NBQUUsQ0FBRSxDQUFDO2NBQzVELElBQUlFLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2dCQUNwQixJQUFJLENBQUNrRSxZQUFZLEVBQUU7O2NBRXBCLE9BQU9wRSxRQUFRO1lBQ2hCO1lBRUEsTUFBTXNCLElBQUlBLENBQUM7Y0FBRXZCO1lBQUksQ0FBRTtjQUNsQixNQUFNTyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUM1QixRQUFRLENBQUM0QyxJQUFJLENBQUM7Z0JBQUV2QjtjQUFJLENBQUUsQ0FBQztjQUMvQyxJQUFJLENBQUM4RCxHQUFHLENBQUM7Z0JBQUU5RDtjQUFJLENBQUUsQ0FBQztjQUNsQixPQUFPTyxJQUFJO1lBQ1o7WUFFQSxNQUFNcUIsYUFBYUEsQ0FBQTtjQUNsQixNQUFNckIsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDNUIsUUFBUSxDQUFDaUQsYUFBYSxFQUFFO2NBRWhELElBQUlyQixJQUFJLENBQUNKLE1BQU0sQ0FBQ3NFLFdBQVcsRUFBRSxLQUFLLFlBQVksRUFBRTtnQkFDL0MsTUFBTSxJQUFJLENBQUNoRixJQUFJLENBQUM7a0JBQUVNLEVBQUUsRUFBRSxJQUFJLENBQUNBO2dCQUFFLENBQUUsQ0FBQztlQUNoQyxNQUFNO2dCQUNOLE1BQU0sSUFBSSxDQUFDK0QsR0FBRyxDQUFDO2tCQUFFWSxNQUFNLEVBQUVuRSxJQUFJLENBQUNKO2dCQUFNLENBQUUsQ0FBQzs7Y0FFeEMsSUFBSSxDQUFDMkQsR0FBRyxDQUFDdkQsSUFBSSxDQUFDO2NBQ2QsT0FBT0EsSUFBSTtZQUNaOztVQUNBMUIsT0FBQSxDQUFBbUQsU0FBQSxHQUFBQSxTQUFBIiwiaWdub3JlTGlzdCI6W119