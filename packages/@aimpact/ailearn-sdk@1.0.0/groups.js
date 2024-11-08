System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/collection", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item"], function (_export, _context) {
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
    }, function (_aimpactAilearnSdk100ReactiveEntitiesCollection) {
      dependency_1 = _aimpactAilearnSdk100ReactiveEntitiesCollection;
    }, function (_aimpactAilearnSdk100ReactiveModel) {
      dependency_2 = _aimpactAilearnSdk100ReactiveModel;
    }, function (_aimpactChatSdk130Session) {
      dependency_3 = _aimpactChatSdk130Session;
    }, function (_aimpactHttpSuite001Api) {
      dependency_4 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_5 = _aimpactAilearnSdk100Config;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesItem) {
      dependency_6 = _aimpactAilearnSdk100ReactiveEntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/groups"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/reactive/entities/collection', dependency_1], ['@aimpact/ailearn-sdk/reactive/model', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@aimpact/http-suite/api', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_6]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 2400583736,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Groups = void 0;
          var _collection = require("@aimpact/ailearn-sdk/reactive/entities/collection");
          var _dataProvider = require("./data-provider");
          /*bundle*/
          class Groups extends _collection.Collection {
            constructor(entity, item) {
              super({
                entity,
                item,
                dataProvider: _dataProvider.DataProvider
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
        hash: 3966877392,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DataProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
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
            async list(specs) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.get(`/${this.#entity}`);
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
          }
          exports.DataProvider = DataProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 1142626891,
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
              this.message = message;
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1804431334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GroupItem = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
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
                dataProvider: _dataProvider.DataProvider,
                properties: ['timeCreated', 'timeUpdated', 'name', 'address', 'description', 'people', 'joinSpecs', 'id', ...properties]
              });
              this.dataProvider.setModel(this);
            }
            async load(specs) {
              specs = typeof specs === 'number' || typeof specs === 'string' ? {
                id: specs
              } : specs;
              await super.load(specs);
              if (!this.people) return;
              this.#hasAccess = true;
              const {
                people
              } = this;
              const isAdmin = people.some(i => i.role === 'manager' && i.uid === _session.sessionWrapper.user.id);
              this.#isAdmin = isAdmin;
              const checkMember = person => {
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
            }
            async approve(specs) {
              // Validate input
              if (!specs || !specs.uid) throw new Error('Invalid specifications provided.');
              const response = await this.dataProvider.approve(specs);
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
              const response = await this.dataProvider.removeMember(args);
              if (response.status) {
                this.people = this.people.filter(i => i.uid !== args.uid);
                this.#managers = this.#managers.filter(i => i.uid !== args.uid);
                this.#members = this.#members.filter(i => i.uid !== args.uid);
                this.triggerEvent();
              }
            }
            async reject(specs) {
              const response = await this.dataProvider.reject({
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
              const response = await this.dataProvider.invite(specs);
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
              const response = await this.dataProvider.cancelInvitation(specs);
              if (response.status) {
                this.people = this.people.filter(i => i.email !== specs.email);
                this.#pendings = this.#pendings.filter(i => i.email !== specs.email);
                this.triggerEvent();
              }
            }
            async delete() {
              const response = await this.dataProvider.delete({
                id: this.id
              });
              if (response.status) {
                this.triggerEvent();
              }
              return response;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsImRhdGFQcm92aWRlciIsIkRhdGFQcm92aWRlciIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9hcGkiLCJfY29uZmlnIiwiX2Vycm9yIiwiYXBpIiwibW9kZWwiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJzZXRNb2RlbCIsImxvYWQiLCJzcGVjcyIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwiaWQiLCJjb2RlIiwicmVzcG9uc2UiLCJnZXQiLCJzdGF0dXMiLCJDdXN0b21FcnJvciIsImVycm9yIiwidGV4dCIsImRhdGEiLCJwdWJsaXNoIiwicG9zdCIsImxpc3QiLCJpdGVtcyIsImUiLCJjb25zb2xlIiwidGVzdCIsImludml0ZSIsInJlcyIsIkVycm9yIiwiY2FuY2VsSW52aXRhdGlvbiIsImRlbGV0ZSIsImVtYWlsIiwiam9pbiIsImFwcHJvdmUiLCJyZW1vdmVNZW1iZXIiLCJ1aWQiLCJyZWplY3QiLCJtZXNzYWdlIiwibmFtZSIsIl9pdGVtIiwiR3JvdXBJdGVtIiwiSXRlbSIsImhhc0FjY2VzcyIsIm1lbWJlcnMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwiaXNBZG1pbiIsImF1dGhvcml6ZWRQZW9wbGUiLCJwZW9wbGUiLCJmaWx0ZXIiLCJpIiwiYXV0aG9yaXplZCIsInJlYWR5IiwicHJvcGVydGllcyIsInNvbWUiLCJyb2xlIiwiY2hlY2tNZW1iZXIiLCJwZXJzb24iLCJpbnZpdGVkIiwicHVzaCIsImZvckVhY2giLCJwZW5kaW5nSW5kZXgiLCJmaW5kSW5kZXgiLCJwIiwicGVuZGluZ01lbWJlciIsInNwbGljZSIsInRyaWdnZXJFdmVudCIsImFyZ3MiLCJtZW1iZXIiLCJ0cmlnZ2VyIl0sInNvdXJjZXMiOlsiL2NvbGxlY3Rpb24udHMiLCIvZGF0YS1wcm92aWRlci50cyIsIi9lcnJvci50cyIsIi9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQU9FLE1BQU8sU0FBUUgsV0FBQSxDQUFBSSxVQUFtQztZQUN6RUMsWUFBWUMsTUFBTSxFQUFFQyxJQUFJO2NBQ3ZCLEtBQUssQ0FBQztnQkFDTEQsTUFBTTtnQkFDTkMsSUFBSTtnQkFDSkMsWUFBWSxFQUFFTixhQUFBLENBQUFPO2VBQ2QsQ0FBQztZQUNIOztVQUNBQyxPQUFBLENBQUFQLE1BQUEsR0FBQUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWRCxJQUFBUSxRQUFBLEdBQUFWLE9BQUE7VUFFQSxJQUFBVyxJQUFBLEdBQUFYLE9BQUE7VUFDQSxJQUFBWSxPQUFBLEdBQUFaLE9BQUE7VUFHQSxJQUFBYSxNQUFBLEdBQUFiLE9BQUE7VUFPTyxZQUxQOzs7O1VBS2tCLE1BQU9RLFlBQVk7WUFDcEMsQ0FBQU0sR0FBSTtZQUNKLENBQUFDLEtBQU07WUFFTixDQUFBVixNQUFPO1lBRVBELFlBQVlXLEtBQUs7Y0FDaEIsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJSCxJQUFBLENBQUFLLEdBQUcsQ0FBQ0osT0FBQSxDQUFBSyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUFMLEtBQU0sR0FBR0EsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQVYsTUFBTyxHQUFHVSxLQUFLLENBQUNWLE1BQU07WUFDNUI7WUFFQWdCLFFBQVFBLENBQUNOLEtBQUs7Y0FDYixJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHQSxLQUFLO1lBQ3BCO1lB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