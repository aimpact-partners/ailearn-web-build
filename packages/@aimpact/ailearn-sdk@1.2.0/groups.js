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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/rvd", "0.6.3"]]);
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
        hash: 655844068,
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
              console.log('specs in data-provider.ts line 32\n', specs);
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
        hash: 888708355,
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
              console.log('specs in item.ts line 82\n', specs);
              this.#pendings = [];
              this.#managers = [];
              this.#members = [];
              this.#registered = new Map();
              console.log('specs in item.ts line 86\n', specs);
              specs = typeof specs === 'number' || typeof specs === 'string' ? {
                id: specs
              } : specs;
              if (!specs || Object.keys(specs).length === 0) specs = {
                id: this.id
              };
              console.log('specs in item.ts line 89\n', specs);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsInByb3ZpZGVyIiwiRGF0YVByb3ZpZGVyIiwiZXhwb3J0cyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9lcnJvciIsIl9zdGFydHVwIiwiYXBpIiwibW9kZWwiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsInNldE1vZGVsIiwibG9hZCIsInNwZWNzIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYmVhcmVyIiwiaWQiLCJjb2RlIiwicmVzcG9uc2UiLCJnZXQiLCJzdGF0dXMiLCJDdXN0b21FcnJvciIsImVycm9yIiwidGV4dCIsImRhdGEiLCJwdWJsaXNoIiwicG9zdCIsImxpc3QiLCJlbmRwb2ludCIsInVuZGVmaW5lZCIsIml0ZW1zIiwiZSIsInRlc3QiLCJpbnZpdGUiLCJyZXMiLCJFcnJvciIsImNhbmNlbEludml0YXRpb24iLCJkZWxldGUiLCJlbWFpbCIsImpvaW4iLCJhcHByb3ZlIiwicmVtb3ZlTWVtYmVyIiwidWlkIiwicmVqZWN0IiwicmVxdWVzdEFjY2VzcyIsIm1lc3NhZ2UiLCJuYW1lIiwiX2l0ZW0iLCJHcm91cEl0ZW0iLCJJdGVtIiwiaGFzQWNjZXNzIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJyZWdpc3RlcmVkIiwiTWFwIiwiaXNBZG1pbiIsImF1dGhvcml6ZWRQZW9wbGUiLCJwZW9wbGUiLCJmaWx0ZXIiLCJpIiwiYXV0aG9yaXplZCIsInJlYWR5IiwicHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic29tZSIsInJvbGUiLCJjaGVja01lbWJlciIsInBlcnNvbiIsImN1cnJlbnRSb2xlIiwiaW52aXRlZCIsInB1c2giLCJzZXQiLCJmb3JFYWNoIiwicGVuZGluZ0luZGV4IiwiZmluZEluZGV4IiwicCIsInBlbmRpbmdNZW1iZXIiLCJzcGxpY2UiLCJ0cmlnZ2VyRXZlbnQiLCJhcmdzIiwibWVtYmVyIiwidHJpZ2dlciIsInRvTG93ZXJDYXNlIiwiYWNjZXNzIl0sInNvdXJjZXMiOlsiLy9jb2xsZWN0aW9uLnRzLyIsIi8vZGF0YS1wcm92aWRlci50cy8iLCIvL2Vycm9yLnRzLyIsIi8vaXRlbS50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUFPRSxNQUFPLFNBQVFILFdBQUEsQ0FBQUksVUFBbUM7WUFDekVDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSTtjQUN2QixLQUFLLENBQUM7Z0JBQ0xELE1BQU07Z0JBQ05DLElBQUk7Z0JBQ0pDLFFBQVEsRUFBRU4sYUFBQSxDQUFBTztlQUNWLENBQUM7WUFDSDs7VUFDQUMsT0FBQSxDQUFBUCxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkQsSUFBQVEsUUFBQSxHQUFBVixPQUFBO1VBRUEsSUFBQVcsSUFBQSxHQUFBWCxPQUFBO1VBSUEsSUFBQVksTUFBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsUUFBQSxHQUFBYixPQUFBO1VBT08sWUFMUDs7OztVQUtrQixNQUFPUSxZQUFZO1lBQ3BDLENBQUFNLEdBQUk7WUFDSixDQUFBQyxLQUFNO1lBRU4sQ0FBQVYsTUFBTztZQUVQRCxZQUFZVyxLQUFLO2NBQ2hCLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUgsSUFBQSxDQUFBSyxHQUFHLENBQUNILFFBQUEsQ0FBQUksU0FBUyxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMzQyxJQUFJ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