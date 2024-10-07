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
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
        hash: 534981663,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DataProvider = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _error = require("./error");
          /*bundle */
          class DataProvider extends _model.ReactiveModel {
            #api;
            #model;
            #entity;
            constructor(model) {
              super();
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
              return response.data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsImRhdGFQcm92aWRlciIsIkRhdGFQcm92aWRlciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9hcGkiLCJfY29uZmlnIiwiX2Vycm9yIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsIm1vZGVsIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwic2V0TW9kZWwiLCJsb2FkIiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwiZ2V0IiwiaWQiLCJkYXRhIiwicHVibGlzaCIsInBvc3QiLCJzdGF0dXMiLCJDdXN0b21FcnJvciIsImVycm9yIiwidGV4dCIsImNvZGUiLCJsaXN0IiwiaXRlbXMiLCJlIiwiY29uc29sZSIsInRlc3QiLCJpbnZpdGUiLCJyZXMiLCJFcnJvciIsImNhbmNlbEludml0YXRpb24iLCJkZWxldGUiLCJlbWFpbCIsImpvaW4iLCJhcHByb3ZlIiwicmVtb3ZlTWVtYmVyIiwidWlkIiwicmVqZWN0IiwibWVzc2FnZSIsIm5hbWUiLCJfaXRlbSIsIkdyb3VwSXRlbSIsIkl0ZW0iLCJoYXNBY2Nlc3MiLCJtZW1iZXJzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsImlzQWRtaW4iLCJhdXRob3JpemVkUGVvcGxlIiwicGVvcGxlIiwiZmlsdGVyIiwiaSIsImF1dGhvcml6ZWQiLCJyZWFkeSIsInByb3BlcnRpZXMiLCJzb21lIiwicm9sZSIsImNoZWNrTWVtYmVyIiwicGVyc29uIiwiaW52aXRlZCIsInB1c2giLCJmb3JFYWNoIiwicGVuZGluZ0luZGV4IiwiZmluZEluZGV4IiwicCIsInBlbmRpbmdNZW1iZXIiLCJzcGxpY2UiLCJ0cmlnZ2VyRXZlbnQiLCJhcmdzIiwibWVtYmVyIiwidHJpZ2dlciJdLCJzb3VyY2VzIjpbIi9jb2xsZWN0aW9uLnRzIiwiL2RhdGEtcHJvdmlkZXIudHMiLCIvZXJyb3IudHMiLCIvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUFPRSxNQUFPLFNBQVFILFdBQUEsQ0FBQUksVUFBbUM7WUFDekVDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSTtjQUN2QixLQUFLLENBQUM7Z0JBQ0xELE1BQU07Z0JBQ05DLElBQUk7Z0JBQ0pDLFlBQVksRUFBRU4sYUFBQSxDQUFBTztlQUNkLENBQUM7WUFDSDs7VUFDQUMsT0FBQSxDQUFBUCxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWEQsSUFBQVEsTUFBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQVcsUUFBQSxHQUFBWCxPQUFBO1VBRUEsSUFBQVksSUFBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsT0FBQSxHQUFBYixPQUFBO1VBR0EsSUFBQWMsTUFBQSxHQUFBZCxPQUFBO1VBRU87VUFBVyxNQUFPUSxZQUFhLFNBQVFFLE1BQUEsQ0FBQUssYUFBMkI7WUFDeEUsQ0FBQUMsR0FBSTtZQUNKLENBQUFDLEtBQU07WUFFTixDQUFBWixNQUFPO1lBRVBELFlBQVlhLEtBQUs7Y0FDaEIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUFMLEtBQU0sR0FBR0EsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQVosTUFBTyxHQUFHWSxLQUFLLENBQUNa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