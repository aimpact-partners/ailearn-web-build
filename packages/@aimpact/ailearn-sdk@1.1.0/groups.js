System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/reactive@0.0.1/entities/collection", "@aimpact/reactive@0.0.1/model", "@aimpact/chat-sdk@1.4.3/session", "@beyond-js/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.1.0/config", "@aimpact/reactive@0.0.1/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Groups, DataProvider, GroupItem, __beyond_pkg, hmr;
  _export({
    Groups: void 0,
    DataProvider: void 0,
    GroupItem: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactReactive001EntitiesCollection) {
      dependency_1 = _aimpactReactive001EntitiesCollection;
    }, function (_aimpactReactive001Model) {
      dependency_2 = _aimpactReactive001Model;
    }, function (_aimpactChatSdk143Session) {
      dependency_3 = _aimpactChatSdk143Session;
    }, function (_beyondJsHttpSuite001Api) {
      dependency_4 = _beyondJsHttpSuite001Api;
    }, function (_aimpactAilearnSdk110Config) {
      dependency_5 = _aimpactAilearnSdk110Config;
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_6 = _aimpactReactive001EntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.4.3"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.3.32"]]);
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
        hash: 3521591978,
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
        hash: 238610483,
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
                const personId = person.uid || person.id;
                const currentRole = this.#registered.get(person.email);
                // Guard clause: If the role hasn't changed, do nothing
                if (!person.invited && person.role && currentRole === person.role) {
                  this.#pendings = this.#pendings.filter(i => i.email !== person.email);
                  return;
                }
                // If the person is already registered, remove them from their current role array
                if (!person.invited && currentRole) {
                  if (currentRole === 'manager') {
                    this.#managers = this.#managers.filter(i => i.email !== person.email);
                  } else {
                    this.#members = this.#members.filter(i => i.email !== person.email);
                  }
                }
                // Add the person to the appropriate role array
                this.#pendings = this.#pendings.filter(i => i.email !== person.email);
                if (isAdmin && (!person.authorized || person.invited)) {
                  this.#pendings.push(person);
                } else if (person.role) {
                  person.role === 'manager' ? this.#managers.push(person) : this.#members.push(person);
                }
                // Update the registered map with the current role
                // this.#registered.set(personId, person.role);
                if (!person.invited) this.#registered.set(person.email, person.role);
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
              if (pendingIndex > 0) {
                const [pendingMember] = this.#pendings.splice(pendingIndex, 1);
                pendingMember.authorized = true;
                // Add the pending member to the members list
                specs.role === 'member' ? this.#members.push(pendingMember) : this.#managers.push(pendingMember);
                console.log(200, 'llego aca');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsInByb3ZpZGVyIiwiRGF0YVByb3ZpZGVyIiwiZXhwb3J0cyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9jb25maWciLCJfZXJyb3IiLCJhcGkiLCJtb2RlbCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsInNldE1vZGVsIiwibG9hZCIsInNwZWNzIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJpZCIsImNvZGUiLCJyZXNwb25zZSIsImdldCIsInN0YXR1cyIsIkN1c3RvbUVycm9yIiwiZXJyb3IiLCJ0ZXh0IiwiZGF0YSIsInB1Ymxpc2giLCJwb3N0IiwibGlzdCIsImVuZHBvaW50IiwidW5kZWZpbmVkIiwiaXRlbXMiLCJlIiwiY29uc29sZSIsInRlc3QiLCJpbnZpdGUiLCJyZXMiLCJFcnJvciIsImNhbmNlbEludml0YXRpb24iLCJkZWxldGUiLCJlbWFpbCIsImpvaW4iLCJhcHByb3ZlIiwicmVtb3ZlTWVtYmVyIiwidWlkIiwicmVqZWN0IiwicmVxdWVzdEFjY2VzcyIsIm1lc3NhZ2UiLCJuYW1lIiwiX2l0ZW0iLCJHcm91cEl0ZW0iLCJJdGVtIiwiaGFzQWNjZXNzIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJyZWdpc3RlcmVkIiwiTWFwIiwiaXNBZG1pbiIsImF1dGhvcml6ZWRQZW9wbGUiLCJwZW9wbGUiLCJmaWx0ZXIiLCJpIiwiYXV0aG9yaXplZCIsInJlYWR5IiwicHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic29tZSIsInJvbGUiLCJjaGVja01lbWJlciIsInBlcnNvbiIsInBlcnNvbklkIiwiY3VycmVudFJvbGUiLCJpbnZpdGVkIiwicHVzaCIsInNldCIsImZvckVhY2giLCJwZW5kaW5nSW5kZXgiLCJmaW5kSW5kZXgiLCJwIiwicGVuZGluZ01lbWJlciIsInNwbGljZSIsImxvZyIsInRyaWdnZXJFdmVudCIsImFyZ3MiLCJtZW1iZXIiLCJ0cmlnZ2VyIiwidG9Mb3dlckNhc2UiLCJhY2Nlc3MiXSwic291cmNlcyI6WyIvY29sbGVjdGlvbi50cyIsIi9kYXRhLXByb3ZpZGVyLnRzIiwiL2Vycm9yLnRzIiwiL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFBT0UsTUFBTyxTQUFRSCxXQUFBLENBQUFJLFVBQW1DO1lBQ3pFQyxZQUFZQyxNQUFNLEVBQUVDLElBQUk7Y0FDdkIsS0FBSyxDQUFDO2dCQUNMRCxNQUFNO2dCQUNOQyxJQUFJO2dCQUNKQyxRQUFRLEVBQUVOLGFBQUEsQ0FBQU87ZUFDVixDQUFDO1lBQ0g7O1VBQ0FDLE9BQUEsQ0FBQVAsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZELElBQUFRLFFBQUEsR0FBQVYsT0FBQTtVQUVBLElBQUFXLElBQUEsR0FBQVgsT0FBQTtVQUNBLElBQUFZLE9BQUEsR0FBQVosT0FBQTtVQUdBLElBQUFhLE1BQUEsR0FBQWIsT0FBQTtVQU9PLFlBTFA7Ozs7VUFLa0IsTUFBT1EsWUFBWTtZQUNwQyxDQUFBTSxHQUFJO1lBQ0osQ0FBQUMsS0FBTTtZQUVOLENBQUFWLE1BQU87WUFFUEQsWUFBWVcsS0FBSztjQUNoQixJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlILElBQUEsQ0FBQUssR0FBRyxDQUFDSixPQUFBLENBQUFLLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9B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