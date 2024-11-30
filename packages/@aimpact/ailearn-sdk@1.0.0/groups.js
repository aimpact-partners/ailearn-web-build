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
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.5.5"], ["dexie", "4.0.8"], ["firebase", "10.13.2"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.7.5"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.2.11"]]);
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
        hash: 4072739347,
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
        hash: 566019225,
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
                provider: _dataProvider.DataProvider,
                properties: ['timeCreated', 'timeUpdated', 'name', 'address', 'description', 'people', 'joinSpecs', 'id', ...properties]
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
              await super.load(specs);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsInByb3ZpZGVyIiwiRGF0YVByb3ZpZGVyIiwiZXhwb3J0cyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9jb25maWciLCJfZXJyb3IiLCJhcGkiLCJtb2RlbCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsInNldE1vZGVsIiwibG9hZCIsInNwZWNzIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJpZCIsImNvZGUiLCJyZXNwb25zZSIsImdldCIsInN0YXR1cyIsIkN1c3RvbUVycm9yIiwiZXJyb3IiLCJ0ZXh0IiwiZGF0YSIsInB1Ymxpc2giLCJwb3N0IiwibGlzdCIsIml0ZW1zIiwiZSIsImNvbnNvbGUiLCJ0ZXN0IiwiaW52aXRlIiwicmVzIiwiRXJyb3IiLCJjYW5jZWxJbnZpdGF0aW9uIiwiZGVsZXRlIiwiZW1haWwiLCJqb2luIiwiYXBwcm92ZSIsInJlbW92ZU1lbWJlciIsInVpZCIsInJlamVjdCIsIm1lc3NhZ2UiLCJuYW1lIiwiX2l0ZW0iLCJHcm91cEl0ZW0iLCJJdGVtIiwiaGFzQWNjZXNzIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJpc0FkbWluIiwiYXV0aG9yaXplZFBlb3BsZSIsInBlb3BsZSIsImZpbHRlciIsImkiLCJhdXRob3JpemVkIiwicmVhZHkiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJzb21lIiwicm9sZSIsImNoZWNrTWVtYmVyIiwicGVyc29uIiwiaW52aXRlZCIsInB1c2giLCJmb3JFYWNoIiwicGVuZGluZ0luZGV4IiwiZmluZEluZGV4IiwicCIsInBlbmRpbmdNZW1iZXIiLCJzcGxpY2UiLCJ0cmlnZ2VyRXZlbnQiLCJhcmdzIiwibWVtYmVyIiwidHJpZ2dlciJdLCJzb3VyY2VzIjpbIi9jb2xsZWN0aW9uLnRzIiwiL2RhdGEtcHJvdmlkZXIudHMiLCIvZXJyb3IudHMiLCIvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUFPRSxNQUFPLFNBQVFILFdBQUEsQ0FBQUksVUFBbUM7WUFDekVDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSTtjQUN2QixLQUFLLENBQUM7Z0JBQ0xELE1BQU07Z0JBQ05DLElBQUk7Z0JBQ0pDLFFBQVEsRUFBRU4sYUFBQSxDQUFBTztlQUNWLENBQUM7WUFDSDs7VUFDQUMsT0FBQSxDQUFBUCxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkQsSUFBQVEsUUFBQSxHQUFBVixPQUFBO1VBRUEsSUFBQVcsSUFBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQVksT0FBQSxHQUFBWixPQUFBO1VBR0EsSUFBQWEsTUFBQSxHQUFBYixPQUFBO1VBT08sWUFMUDs7OztVQUtrQixNQUFPUSxZQUFZO1lBQ3BDLENBQUFNLEdBQUk7WUFDSixDQUFBQyxLQUFNO1lBRU4sQ0FBQVYsTUFBTztZQUVQRCxZQUFZVyxLQUFLO2NBQ2hCLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUgsSUFBQSxDQUFBSyxHQUFHLENBQUNKLE9BQUEsQ0FBQUssT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBTCxLQUFNLEdBQUdBLEtBQUs7Y0FDbkIsSUFBSSxDQUFDLENBQUFWLE1BQU8sR0FBR1UsS0FBSyxDQUFDVixNQUFNO1lBQzVCO1lBRUFnQixRQUFRQSxDQUFD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LENBQUNmLEdBQUcsS0FBSzlCLEtBQUssQ0FBQzhCLEdBQUcsQ0FBQztnQkFDaEUsSUFBSSxDQUFDc0MsWUFBWSxFQUFFOztZQUVyQjtZQUVBLE1BQU0vQyxNQUFNQSxDQUFDckIsS0FBSztjQUNqQixNQUFNTyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUN2QixRQUFRLENBQUNxQyxNQUFNLENBQUNyQixLQUFLLENBQUM7Y0FDbEQsTUFBTXNFLE1BQU0sR0FBRztnQkFDZCxHQUFHdEUsS0FBSztnQkFDUjRELE9BQU8sRUFBRTtlQUNUO2NBQ0Q7Y0FDQSxJQUFJLENBQUNqQixNQUFNLENBQUNrQixJQUFJLENBQUNTLE1BQU0sQ0FBQztjQUN4QixJQUFJLENBQUMsQ0FBQTlCLFFBQVMsQ0FBQ3FCLElBQUksQ0FBQ1MsTUFBTSxDQUFDO2NBQzNCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN0QixPQUFPaEUsUUFBUTtZQUNoQjtZQUVBLE1BQU1pQixnQkFBZ0JBLENBQUN4QixLQUFLO2NBQzNCLE1BQU1PLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ3ZCLFFBQVEsQ0FBQ3dDLGdCQUFnQixDQUFDeEIsS0FBSyxDQUFDO2NBQzVELElBQUlPLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2dCQUNwQixJQUFJLENBQUNrQyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNuQixLQUFLLEtBQUsxQixLQUFLLENBQUMwQixLQUFLLENBQUM7Z0JBQzlELElBQUksQ0FBQyxDQUFBYyxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ0ksTUFBTSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ25CLEtBQUssS0FBSzFCLEtBQUssQ0FBQzBCLEtBQUssQ0FBQztnQkFDcEUsSUFBSSxDQUFDMEMsWUFBWSxFQUFFOztZQUVyQjtZQUVBLE1BQU0zQyxNQUFNQSxDQUFBO2NBQ1gsTUFBTWxCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ3ZCLFFBQVEsQ0FBQ3lDLE1BQU0sQ0FBQztnQkFBRXBCLEVBQUUsRUFBRSxJQUFJLENBQUNBO2NBQUUsQ0FBRSxDQUFDO2NBQzVELElBQUlFLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2dCQUNwQixJQUFJLENBQUMyRCxZQUFZLEVBQUU7O2NBRXBCLE9BQU83RCxRQUFRO1lBQ2hCOztVQUNBckIsT0FBQSxDQUFBaUQsU0FBQSxHQUFBQSxTQUFBIiwiaWdub3JlTGlzdCI6W119