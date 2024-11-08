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
        hash: 150410670,
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
          /*bundle */
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
              const response = await this.#api.get(`/${this.#entity}/${specs.id}`);
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
                const res = await this.#api.delete(`/${this.#entity}/${this.#model.id}/invitations/user/${specs.email}`, specs);
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
                if (res.error.code === 42 || res.error.code === 41) {
                  throw new Error('ALREADY_MEMBER');
                }
                if (res.error.code === 39) {
                  throw new Error('ALREADY_WAITING');
                }
                if (res.error.code === 44) {
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
                const res = await this.#api.post(`/${this.#entity}/${specs.id}/requests/user/${specs.uid}/reject`, {});
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
        hash: 785980699,
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
            async load(id) {
              await super.load({
                id: id ?? this.id
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsImRhdGFQcm92aWRlciIsIkRhdGFQcm92aWRlciIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9hcGkiLCJfY29uZmlnIiwiX2Vycm9yIiwiYXBpIiwibW9kZWwiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJzZXRNb2RlbCIsImxvYWQiLCJzcGVjcyIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicmVzcG9uc2UiLCJnZXQiLCJpZCIsImRhdGEiLCJwdWJsaXNoIiwicG9zdCIsInN0YXR1cyIsIkN1c3RvbUVycm9yIiwiZXJyb3IiLCJ0ZXh0IiwiY29kZSIsImxpc3QiLCJpdGVtcyIsImUiLCJjb25zb2xlIiwidGVzdCIsImludml0ZSIsInJlcyIsIkVycm9yIiwiY2FuY2VsSW52aXRhdGlvbiIsImRlbGV0ZSIsImVtYWlsIiwiam9pbiIsImFwcHJvdmUiLCJyZW1vdmVNZW1iZXIiLCJ1aWQiLCJyZWplY3QiLCJtZXNzYWdlIiwibmFtZSIsIl9pdGVtIiwiR3JvdXBJdGVtIiwiSXRlbSIsImhhc0FjY2VzcyIsIm1lbWJlcnMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwiaXNBZG1pbiIsImF1dGhvcml6ZWRQZW9wbGUiLCJwZW9wbGUiLCJmaWx0ZXIiLCJpIiwiYXV0aG9yaXplZCIsInJlYWR5IiwicHJvcGVydGllcyIsInNvbWUiLCJyb2xlIiwiY2hlY2tNZW1iZXIiLCJwZXJzb24iLCJpbnZpdGVkIiwicHVzaCIsImZvckVhY2giLCJwZW5kaW5nSW5kZXgiLCJmaW5kSW5kZXgiLCJwIiwicGVuZGluZ01lbWJlciIsInNwbGljZSIsInRyaWdnZXJFdmVudCIsImFyZ3MiLCJtZW1iZXIiLCJ0cmlnZ2VyIl0sInNvdXJjZXMiOlsiL2NvbGxlY3Rpb24udHMiLCIvZGF0YS1wcm92aWRlci50cyIsIi9lcnJvci50cyIsIi9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQU9FLE1BQU8sU0FBUUgsV0FBQSxDQUFBSSxVQUFtQztZQUN6RUMsWUFBWUMsTUFBTSxFQUFFQyxJQUFJO2NBQ3ZCLEtBQUssQ0FBQztnQkFDTEQsTUFBTTtnQkFDTkMsSUFBSTtnQkFDSkMsWUFBWSxFQUFFTixhQUFBLENBQUFPO2VBQ2QsQ0FBQztZQUNIOztVQUNBQyxPQUFBLENBQUFQLE1BQUEsR0FBQUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWRCxJQUFBUSxRQUFBLEdBQUFWLE9BQUE7VUFFQSxJQUFBVyxJQUFBLEdBQUFYLE9BQUE7VUFDQSxJQUFBWSxPQUFBLEdBQUFaLE9BQUE7VUFHQSxJQUFBYSxNQUFBLEdBQUFiLE9BQUE7VUFFTztVQUFXLE1BQU9RLFlBQVk7WUFDcEMsQ0FBQU0sR0FBSTtZQUNKLENBQUFDLEtBQU07WUFFTixDQUFBVixNQUFPO1lBRVBELFlBQVlXLEtBQUs7Y0FDaEIsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJSCxJQUFBLENBQUFLLEdBQUcsQ0FBQ0osT0FBQSxDQUFBSyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUFMLEtBQU0sR0FBR0EsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQVYsTUFBTyxHQUFHVSxLQUFLLENBQUNWLE1BQU07WUFDNUI7WUFFQWdCLFFBQVFBLENBQUNOLEtBQUs7Y0FDYixJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHQSxLQUFLO1lBQ3BCO1lBQ0EsTUFBTU8s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