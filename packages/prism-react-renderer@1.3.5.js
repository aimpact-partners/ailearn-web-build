System.register(["react@18.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["prism-react-renderer","1.3.5"],["react","18.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.2.0', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/prism-react-renderer.1.3.5.js
var prism_react_renderer_1_3_5_exports = {};
__export(prism_react_renderer_1_3_5_exports, {
  Prism: () => prism_default,
  default: () => prism_react_renderer_1_3_5_default,
  defaultProps: () => defaultProps
});
module.exports = __toCommonJS(prism_react_renderer_1_3_5_exports);

// node_modules/prism-react-renderer/prism/index.js
var Prism = function () {
  var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
  var uniqueId = 0;
  var plainTextGrammar = {};
  var _ = {
    util: {
      encode: function encode(tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, encode(tokens.content), tokens.alias);
        } else if (Array.isArray(tokens)) {
          return tokens.map(encode);
        } else {
          return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }
      },
      type: function (o) {
        return Object.prototype.toString.call(o).slice(8, -1);
      },
      objId: function (obj) {
        if (!obj["__id"]) {
          Object.defineProperty(obj, "__id", {
            value: ++uniqueId
          });
        }
        return obj["__id"];
      },
      clone: function deepClone(o, visited) {
        visited = visited || {};
        var clone;
        var id;
        switch (_.util.type(o)) {
          case "Object":
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone = {};
            visited[id] = clone;
            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = deepClone(o[key], visited);
              }
            }
            return clone;
          case "Array":
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone = [];
            visited[id] = clone;
            o.forEach(function (v, i) {
              clone[i] = deepClone(v, visited);
            });
            return clone;
          default:
            return o;
        }
      },
      getLanguage: function (element) {
        while (element) {
          var m = lang.exec(element.className);
          if (m) {
            return m[1].toLowerCase();
          }
          element = element.parentElement;
        }
        return "none";
      },
      setLanguage: function (element, language) {
        element.className = element.className.replace(RegExp(lang, "gi"), "");
        element.classList.add("language-" + language);
      },
      isActive: function (element, className, defaultActivation) {
        var no = "no-" + className;
        while (element) {
          var classList = element.classList;
          if (classList.contains(className)) {
            return true;
          }
          if (classList.contains(no)) {
            return false;
          }
          element = element.parentElement;
        }
        return !!defaultActivation;
      }
    },
    languages: {
      plain: plainTextGrammar,
      plaintext: plainTextGrammar,
      text: plainTextGrammar,
      txt: plainTextGrammar,
      extend: function (id, redef) {
        var lang2 = _.util.clone(_.languages[id]);
        for (var key in redef) {
          lang2[key] = redef[key];
        }
        return lang2;
      },
      insertBefore: function (inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];
        var ret = {};
        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }
            if (!insert.hasOwnProperty(token)) {
              ret[token] = grammar[token];
            }
          }
        }
        var old = root[inside];
        root[inside] = ret;
        _.languages.DFS(_.languages, function (key, value) {
          if (value === old && key != inside) {
            this[key] = ret;
          }
        });
        return ret;
      },
      DFS: function DFS(o, callback, type, visited) {
        visited = visited || {};
        var objId = _.util.objId;
        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);
            var property = o[i];
            var propertyType = _.util.type(property);
            if (propertyType === "Object" && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, null, visited);
            } else if (propertyType === "Array" && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    highlight: function (text, grammar, language) {
      var env = {
        code: text,
        grammar,
        language
      };
      _.hooks.run("before-tokenize", env);
      env.tokens = _.tokenize(env.code, env.grammar);
      _.hooks.run("after-tokenize", env);
      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    tokenize: function (text, grammar) {
      var rest = grammar.rest;
      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }
        delete grammar.rest;
      }
      var tokenList = new LinkedList();
      addAfter(tokenList, tokenList.head, text);
      matchGrammar(text, tokenList, grammar, tokenList.head, 0);
      return toArray(tokenList);
    },
    hooks: {
      all: {},
      add: function (name, callback) {
        var hooks = _.hooks.all;
        hooks[name] = hooks[name] || [];
        hooks[name].push(callback);
      },
      run: function (name, env) {
        var callbacks = _.hooks.all[name];
        if (!callbacks || !callbacks.length) {
          return;
        }
        for (var i = 0, callback; callback = callbacks[i++];) {
          callback(env);
        }
      }
    },
    Token
  };
  function Token(type, content, alias, matchedStr) {
    this.type = type;
    this.content = content;
    this.alias = alias;
    this.length = (matchedStr || "").length | 0;
  }
  Token.stringify = function stringify(o, language) {
    if (typeof o == "string") {
      return o;
    }
    if (Array.isArray(o)) {
      var s = "";
      o.forEach(function (e) {
        s += stringify(e, language);
      });
      return s;
    }
    var env = {
      type: o.type,
      content: stringify(o.content, language),
      tag: "span",
      classes: ["token", o.type],
      attributes: {},
      language
    };
    var aliases = o.alias;
    if (aliases) {
      if (Array.isArray(aliases)) {
        Array.prototype.push.apply(env.classes, aliases);
      } else {
        env.classes.push(aliases);
      }
    }
    _.hooks.run("wrap", env);
    var attributes = "";
    for (var name in env.attributes) {
      attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
    }
    return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
  };
  function matchPattern(pattern, pos, text, lookbehind) {
    pattern.lastIndex = pos;
    var match = pattern.exec(text);
    if (match && lookbehind && match[1]) {
      var lookbehindLength = match[1].length;
      match.index += lookbehindLength;
      match[0] = match[0].slice(lookbehindLength);
    }
    return match;
  }
  function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
    for (var token in grammar) {
      if (!grammar.hasOwnProperty(token) || !grammar[token]) {
        continue;
      }
      var patterns = grammar[token];
      patterns = Array.isArray(patterns) ? patterns : [patterns];
      for (var j = 0; j < patterns.length; ++j) {
        if (rematch && rematch.cause == token + "," + j) {
          return;
        }
        var patternObj = patterns[j];
        var inside = patternObj.inside;
        var lookbehind = !!patternObj.lookbehind;
        var greedy = !!patternObj.greedy;
        var alias = patternObj.alias;
        if (greedy && !patternObj.pattern.global) {
          var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
          patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
        }
        var pattern = patternObj.pattern || patternObj;
        for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
          if (rematch && pos >= rematch.reach) {
            break;
          }
          var str = currentNode.value;
          if (tokenList.length > text.length) {
            return;
          }
          if (str instanceof Token) {
            continue;
          }
          var removeCount = 1;
          var match;
          if (greedy) {
            match = matchPattern(pattern, pos, text, lookbehind);
            if (!match || match.index >= text.length) {
              break;
            }
            var from = match.index;
            var to = match.index + match[0].length;
            var p = pos;
            p += currentNode.value.length;
            while (from >= p) {
              currentNode = currentNode.next;
              p += currentNode.value.length;
            }
            p -= currentNode.value.length;
            pos = p;
            if (currentNode.value instanceof Token) {
              continue;
            }
            for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
              removeCount++;
              p += k.value.length;
            }
            removeCount--;
            str = text.slice(pos, p);
            match.index -= pos;
          } else {
            match = matchPattern(pattern, 0, str, lookbehind);
            if (!match) {
              continue;
            }
          }
          var from = match.index;
          var matchStr = match[0];
          var before = str.slice(0, from);
          var after = str.slice(from + matchStr.length);
          var reach = pos + str.length;
          if (rematch && reach > rematch.reach) {
            rematch.reach = reach;
          }
          var removeFrom = currentNode.prev;
          if (before) {
            removeFrom = addAfter(tokenList, removeFrom, before);
            pos += before.length;
          }
          removeRange(tokenList, removeFrom, removeCount);
          var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
          currentNode = addAfter(tokenList, removeFrom, wrapped);
          if (after) {
            addAfter(tokenList, currentNode, after);
          }
          if (removeCount > 1) {
            var nestedRematch = {
              cause: token + "," + j,
              reach
            };
            matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
            if (rematch && nestedRematch.reach > rematch.reach) {
              rematch.reach = nestedRematch.reach;
            }
          }
        }
      }
    }
  }
  function LinkedList() {
    var head = {
      value: null,
      prev: null,
      next: null
    };
    var tail = {
      value: null,
      prev: head,
      next: null
    };
    head.next = tail;
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }
  function addAfter(list, node, value) {
    var next = node.next;
    var newNode = {
      value,
      prev: node,
      next
    };
    node.next = newNode;
    next.prev = newNode;
    list.length++;
    return newNode;
  }
  function removeRange(list, node, count) {
    var next = node.next;
    for (var i = 0; i < count && next !== list.tail; i++) {
      next = next.next;
    }
    node.next = next;
    next.prev = node;
    list.length -= i;
  }
  function toArray(list) {
    var array = [];
    var node = list.head.next;
    while (node !== list.tail) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }
  return _;
}();
var prism = Prism;
Prism.default = Prism;
prism.languages.markup = {
  "comment": {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  "prolog": {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  "doctype": {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null
      },
      "string": {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      "punctuation": /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      "name": /[^\s<>'"]+/
    }
  },
  "cdata": {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  "tag": {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      "tag": {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          "punctuation": /^<\/?/,
          "namespace": /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          "punctuation": [{
            pattern: /^=/,
            alias: "attr-equals"
          }, /"|'/]
        }
      },
      "punctuation": /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          "namespace": /^[^\s>\/:]+:/
        }
      }
    }
  },
  "entity": [{
    pattern: /&[\da-z]{1,8};/i,
    alias: "named-entity"
  }, /&#x?[\da-f]{1,8};/i]
};
prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = prism.languages.markup["entity"];
prism.languages.markup["doctype"].inside["internal-subset"].inside = prism.languages.markup;
prism.hooks.add("wrap", function (env) {
  if (env.type === "entity") {
    env.attributes["title"] = env.content.replace(/&amp;/, "&");
  }
});
Object.defineProperty(prism.languages.markup.tag, "addInlined", {
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside["language-" + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: prism.languages[lang]
    };
    includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside["language-" + lang] = {
      pattern: /[\s\S]+/,
      inside: prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), "i"),
      lookbehind: true,
      greedy: true,
      inside
    };
    prism.languages.insertBefore("markup", "cdata", def);
  }
});
Object.defineProperty(prism.languages.markup.tag, "addAttribute", {
  value: function (attrName, lang) {
    prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
      lookbehind: true,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            "value": {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [lang, "language-" + lang],
              inside: prism.languages[lang]
            },
            "punctuation": [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        }
      }
    });
  }
});
prism.languages.html = prism.languages.markup;
prism.languages.mathml = prism.languages.markup;
prism.languages.svg = prism.languages.markup;
prism.languages.xml = prism.languages.extend("markup", {});
prism.languages.ssml = prism.languages.xml;
prism.languages.atom = prism.languages.xml;
prism.languages.rss = prism.languages.xml;
(function (Prism2) {
  var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: "punctuation",
    inside: null
  };
  var insideString = {
    "bash": commandAfterHeredoc,
    "environment": {
      pattern: RegExp("\\$" + envVars),
      alias: "constant"
    },
    "variable": [{
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: true,
      inside: {
        "variable": [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        "number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
        "operator": /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
        "punctuation": /\(\(?|\)\)?|,|;/
      }
    }, {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: true,
      inside: {
        "variable": /^\$\(|^`|\)$|`$/
      }
    }, {
      pattern: /\$\{[^}]+\}/,
      greedy: true,
      inside: {
        "operator": /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        "punctuation": /[\[\]]/,
        "environment": {
          pattern: RegExp("(\\{)" + envVars),
          lookbehind: true,
          alias: "constant"
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    "entity": /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  Prism2.languages.bash = {
    "shebang": {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    "comment": {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    "function-name": [{
      pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: true,
      alias: "function"
    }, {
      pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
      alias: "function"
    }],
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: true
    },
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        "environment": {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
          lookbehind: true,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: true
    },
    "string": [{
      pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
      lookbehind: true,
      greedy: true,
      inside: {
        "bash": commandAfterHeredoc
      }
    }, {
      pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, {
      pattern: /(^|[^$\\])'[^']*'/,
      lookbehind: true,
      greedy: true
    }, {
      pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
      greedy: true,
      inside: {
        "entity": insideString.entity
      }
    }],
    "environment": {
      pattern: RegExp("\\$?" + envVars),
      alias: "constant"
    },
    "variable": insideString.variable,
    "function": {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "keyword": {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "builtin": {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: true,
      alias: "class-name"
    },
    "boolean": {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    "operator": {
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    "punctuation": /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    "number": {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism2.languages.bash;
  var toBeCopied = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"];
  var inside = insideString.variable[1].inside;
  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism2.languages.bash[toBeCopied[i]];
  }
  Prism2.languages.shell = Prism2.languages.bash;
})(prism);
prism.languages.clike = {
  "comment": [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  "string": {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      "punctuation": /[.\\]/
    }
  },
  "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  "boolean": /\b(?:false|true)\b/,
  "function": /\b\w+(?=\()/,
  "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  "punctuation": /[{}[\];(),.:]/
};
prism.languages.c = prism.languages.extend("clike", {
  "comment": {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  "string": {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: true
  },
  "keyword": /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  "function": /\b[a-z_]\w*(?=\s*\()/i,
  "number": /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  "operator": />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
prism.languages.insertBefore("c", "string", {
  "char": {
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: true
  }
});
prism.languages.insertBefore("c", "string", {
  "macro": {
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    greedy: true,
    alias: "property",
    inside: {
      "string": [{
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: true
      }, prism.languages.c["string"]],
      "char": prism.languages.c["char"],
      "comment": prism.languages.c["comment"],
      "macro-name": [{
        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
        lookbehind: true
      }, {
        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
        lookbehind: true,
        alias: "function"
      }],
      "directive": {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: true,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      "punctuation": /##|\\(?=[\r\n])/,
      "expression": {
        pattern: /\S[\s\S]*/,
        inside: prism.languages.c
      }
    }
  }
});
prism.languages.insertBefore("c", "function", {
  "constant": /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete prism.languages.c["boolean"];
(function (Prism2) {
  var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
  var modName = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
    return keyword.source;
  });
  Prism2.languages.cpp = Prism2.languages.extend("c", {
    "class-name": [{
      pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function () {
        return keyword.source;
      })),
      lookbehind: true
    }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
    "keyword": keyword,
    "number": {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: true
    },
    "operator": />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    "boolean": /\b(?:false|true)\b/
  });
  Prism2.languages.insertBefore("cpp", "string", {
    "module": {
      pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
        return modName;
      }) + ")"),
      lookbehind: true,
      greedy: true,
      inside: {
        "string": /^[<"][\s\S]+/,
        "operator": /:/,
        "punctuation": /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: true
    }
  });
  Prism2.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        "function": /^\w+/,
        "generic": {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: Prism2.languages.cpp
        }
      }
    }
  });
  Prism2.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  });
  Prism2.languages.insertBefore("cpp", "class-name", {
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: true,
      greedy: true,
      inside: Prism2.languages.extend("cpp", {})
    }
  });
  Prism2.languages.insertBefore("inside", "double-colon", {
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, Prism2.languages.cpp["base-clause"]);
})(prism);
(function (Prism2) {
  var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  Prism2.languages.css = {
    "comment": /\/\*[\s\S]*?\*\//,
    "atrule": {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        "rule": /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: "selector"
        },
        "keyword": {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        }
      }
    },
    "url": {
      pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: true,
      inside: {
        "function": /^url/i,
        "punctuation": /^\(|\)$/,
        "string": {
          pattern: RegExp("^" + string.source + "$"),
          alias: "url"
        }
      }
    },
    "selector": {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
      lookbehind: true
    },
    "string": {
      pattern: string,
      greedy: true
    },
    "property": {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    "important": /!important\b/i,
    "function": {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    "punctuation": /[(){};:,]/
  };
  Prism2.languages.css["atrule"].inside.rest = Prism2.languages.css;
  var markup = Prism2.languages.markup;
  if (markup) {
    markup.tag.addInlined("style", "css");
    markup.tag.addAttribute("style", "css");
  }
})(prism);
(function (Prism2) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  var selectorInside;
  Prism2.languages.css.selector = {
    pattern: Prism2.languages.css.selector.pattern,
    lookbehind: true,
    inside: selectorInside = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      "class": /\.[-\w]+/,
      "id": /#[-\w]+/,
      "attribute": {
        pattern: RegExp(`\\[(?:[^[\\]"']|` + string.source + ")*\\]"),
        greedy: true,
        inside: {
          "punctuation": /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: "keyword"
          },
          "namespace": {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: true,
            inside: {
              "punctuation": /\|$/
            }
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: true
          },
          "attr-value": [string, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: true
          }],
          "operator": /[|~*^$]?=/
        }
      },
      "n-th": [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: true,
        inside: {
          "number": /[\dn]+/,
          "operator": /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: true
      }],
      "combinator": />|\+|~|\|\|/,
      "punctuation": /[(),]/
    }
  };
  Prism2.languages.css["atrule"].inside["selector-function-argument"].inside = selectorInside;
  Prism2.languages.insertBefore("css", "property", {
    "variable": {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: true
    }
  });
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: true
  };
  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  Prism2.languages.insertBefore("css", "function", {
    "operator": {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    "hexcode": {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: "color"
    },
    "color": [{
      pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
      lookbehind: true
    }, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        "unit": unit,
        "number": number,
        "function": /[\w-]+(?=\()/,
        "punctuation": /[(),]/
      }
    }],
    "entity": /\\[\da-f]{1,8}/i,
    "unit": unit,
    "number": number
  });
})(prism);
prism.languages.javascript = prism.languages.extend("clike", {
  "class-name": [prism.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  "keyword": [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  "number": {
    pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
    lookbehind: true
  },
  "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
prism.languages.insertBefore("javascript", "keyword", {
  "regex": {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: "language-regex",
        inside: prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  "parameter": [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }],
  "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
prism.languages.insertBefore("javascript", "string", {
  "hashbang": {
    pattern: /^#!.*/,
    greedy: true,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      "interpolation": {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: prism.languages.javascript
        }
      },
      "string": /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: "property"
  }
});
prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: "property"
  }
});
if (prism.languages.markup) {
  prism.languages.markup.tag.addInlined("script", "javascript");
  prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
}
prism.languages.js = prism.languages.javascript;
(function (Prism2) {
  var comment = /#(?!\{).+/;
  var interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: "variable"
  };
  Prism2.languages.coffeescript = Prism2.languages.extend("javascript", {
    "comment": comment,
    "string": [{
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true
    }, {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      inside: {
        "interpolation": interpolation
      }
    }],
    "keyword": /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    "class-member": {
      pattern: /@(?!\d)\w+/,
      alias: "variable"
    }
  });
  Prism2.languages.insertBefore("coffeescript", "comment", {
    "multiline-comment": {
      pattern: /###[\s\S]+?###/,
      alias: "comment"
    },
    "block-regex": {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: "regex",
      inside: {
        "comment": comment,
        "interpolation": interpolation
      }
    }
  });
  Prism2.languages.insertBefore("coffeescript", "string", {
    "inline-javascript": {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        "delimiter": {
          pattern: /^`|`$/,
          alias: "punctuation"
        },
        "script": {
          pattern: /[\s\S]+/,
          alias: "language-javascript",
          inside: Prism2.languages.javascript
        }
      }
    },
    "multiline-string": [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: "string"
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: "string",
      inside: {
        interpolation
      }
    }]
  });
  Prism2.languages.insertBefore("coffeescript", "keyword", {
    "property": /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism2.languages.coffeescript["template-string"];
  Prism2.languages.coffee = Prism2.languages.coffeescript;
})(prism);
(function (Prism2) {
  var anchorOrAlias = /[*&][^\s[\]{},]+/;
  var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
  var properties = "(?:" + tag.source + "(?:[ 	]+" + anchorOrAlias.source + ")?|" + anchorOrAlias.source + "(?:[ 	]+" + tag.source + ")?)";
  var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  });
  var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function createValuePattern(value, flags) {
    flags = (flags || "").replace(/m/g, "") + "m";
    var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function () {
      return properties;
    }).replace(/<<value>>/g, function () {
      return value;
    });
    return RegExp(pattern, flags);
  }
  Prism2.languages.yaml = {
    "scalar": {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
        return properties;
      })),
      lookbehind: true,
      alias: "string"
    },
    "comment": /#.*/,
    "key": {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function () {
        return properties;
      }).replace(/<<key>>/g, function () {
        return "(?:" + plainKey + "|" + string + ")";
      })),
      lookbehind: true,
      greedy: true,
      alias: "atrule"
    },
    "directive": {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: "important"
    },
    "datetime": {
      pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: true,
      alias: "number"
    },
    "boolean": {
      pattern: createValuePattern(/false|true/.source, "i"),
      lookbehind: true,
      alias: "important"
    },
    "null": {
      pattern: createValuePattern(/null|~/.source, "i"),
      lookbehind: true,
      alias: "important"
    },
    "string": {
      pattern: createValuePattern(string),
      lookbehind: true,
      greedy: true
    },
    "number": {
      pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
      lookbehind: true
    },
    "tag": tag,
    "important": anchorOrAlias,
    "punctuation": /---|[:[\]{}\-,|>?]|\.\.\./
  };
  Prism2.languages.yml = Prism2.languages.yaml;
})(prism);
(function (Prism2) {
  var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function createInline(pattern) {
    pattern = pattern.replace(/<inner>/g, function () {
      return inner;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + pattern + ")");
  }
  var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
    return tableCell;
  });
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  Prism2.languages.markdown = Prism2.languages.extend("markup", {});
  Prism2.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        "punctuation": /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: Prism2.languages.yaml
        }
      }
    },
    "blockquote": {
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    "table": {
      pattern: RegExp("^" + tableRow + tableLine + "(?:" + tableRow + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + tableRow + tableLine + ")(?:" + tableRow + ")*$"),
          lookbehind: true,
          inside: {
            "table-data": {
              pattern: RegExp(tableCell),
              inside: Prism2.languages.markdown
            },
            "punctuation": /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + tableRow + ")" + tableLine + "$"),
          lookbehind: true,
          inside: {
            "punctuation": /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + tableRow + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(tableCell),
              alias: "important",
              inside: Prism2.languages.markdown
            },
            "punctuation": /\|/
          }
        }
      }
    },
    "code": [{
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: true,
      alias: "keyword"
    }, {
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        "code-block": {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: true
        },
        "code-language": {
          pattern: /^(```).+/,
          lookbehind: true
        },
        "punctuation": /```/
      }
    }],
    "title": [{
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: "important",
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      pattern: /(^\s*)#.+/m,
      lookbehind: true,
      alias: "important",
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    "hr": {
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: "punctuation"
    },
    "list": {
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: "punctuation"
    },
    "url-reference": {
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        "variable": {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        "string": /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        "punctuation": /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    "bold": {
      pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "content": {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {}
        },
        "punctuation": /\*\*|__/
      }
    },
    "italic": {
      pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "content": {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {}
        },
        "punctuation": /[*_]/
      }
    },
    "strike": {
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "content": {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {}
        },
        "punctuation": /~~?/
      }
    },
    "code-snippet": {
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: true,
      greedy: true,
      alias: ["code", "keyword"]
    },
    "url": {
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "operator": /^!/,
        "content": {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {}
        },
        "variable": {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        "url": {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: true
        },
        "string": {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: true
        }
      }
    }
  });
  ["url", "bold", "italic", "strike"].forEach(function (token) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (inside) {
      if (token !== inside) {
        Prism2.languages.markdown[token].inside.content.inside[inside] = Prism2.languages.markdown[inside];
      }
    });
  });
  Prism2.hooks.add("after-tokenize", function (env) {
    if (env.language !== "markdown" && env.language !== "md") {
      return;
    }
    function walkTokens(tokens) {
      if (!tokens || typeof tokens === "string") {
        return;
      }
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];
        if (token.type !== "code") {
          walkTokens(token.content);
          continue;
        }
        var codeLang = token.content[1];
        var codeBlock = token.content[3];
        if (codeLang && codeBlock && codeLang.type === "code-language" && codeBlock.type === "code-block" && typeof codeLang.content === "string") {
          var lang = codeLang.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
          lang = (/[a-z][\w-]*/i.exec(lang) || [""])[0].toLowerCase();
          var alias = "language-" + lang;
          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === "string") {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }
    walkTokens(env.tokens);
  });
  Prism2.hooks.add("wrap", function (env) {
    if (env.type !== "code-block") {
      return;
    }
    var codeLang = "";
    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);
      if (match) {
        codeLang = match[1];
        break;
      }
    }
    var grammar = Prism2.languages[codeLang];
    if (!grammar) {
      if (codeLang && codeLang !== "none" && Prism2.plugins.autoloader) {
        var id = "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 1e16);
        env.attributes["id"] = id;
        Prism2.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);
          if (ele) {
            ele.innerHTML = Prism2.highlight(ele.textContent, Prism2.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      env.content = Prism2.highlight(textContent(env.content), grammar, codeLang);
    }
  });
  var tagPattern = RegExp(Prism2.languages.markup.tag.pattern.source, "gi");
  var KNOWN_ENTITY_NAMES = {
    "amp": "&",
    "lt": "<",
    "gt": ">",
    "quot": '"'
  };
  var fromCodePoint = String.fromCodePoint || String.fromCharCode;
  function textContent(html) {
    var text = html.replace(tagPattern, "");
    text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (m, code) {
      code = code.toLowerCase();
      if (code[0] === "#") {
        var value;
        if (code[1] === "x") {
          value = parseInt(code.slice(2), 16);
        } else {
          value = Number(code.slice(1));
        }
        return fromCodePoint(value);
      } else {
        var known = KNOWN_ENTITY_NAMES[code];
        if (known) {
          return known;
        }
        return m;
      }
    });
    return text;
  }
  Prism2.languages.md = Prism2.languages.markdown;
})(prism);
prism.languages.graphql = {
  "comment": /#.*/,
  "description": {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: true,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: true,
        inside: prism.languages.markdown
      }
    }
  },
  "string": {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  "number": /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  "boolean": /\b(?:false|true)\b/,
  "variable": /\$[a-z_]\w*/i,
  "directive": {
    pattern: /@[a-z_]\w*/i,
    alias: "function"
  },
  "attr-name": {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  "atom-input": {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: "class-name"
  },
  "scalar": /\b(?:Boolean|Float|ID|Int|String)\b/,
  "constant": /\b[A-Z][A-Z_\d]*\b/,
  "class-name": {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: true
  },
  "fragment": {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "definition-mutation": {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "definition-query": {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "keyword": /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  "operator": /[!=|&]|\.{3}/,
  "property-query": /\w+(?=\s*\()/,
  "object": /\w+(?=\s*\{)/,
  "punctuation": /[!(){}\[\]:=,]/,
  "property": /\w+/
};
prism.hooks.add("after-tokenize", function afterTokenizeGraphql(env) {
  if (env.language !== "graphql") {
    return;
  }
  var validTokens = env.tokens.filter(function (token) {
    return typeof token !== "string" && token.type !== "comment" && token.type !== "scalar";
  });
  var currentIndex = 0;
  function getToken(offset) {
    return validTokens[currentIndex + offset];
  }
  function isTokenType(types, offset) {
    offset = offset || 0;
    for (var i2 = 0; i2 < types.length; i2++) {
      var token = getToken(i2 + offset);
      if (!token || token.type !== types[i2]) {
        return false;
      }
    }
    return true;
  }
  function findClosingBracket(open, close) {
    var stackHeight = 1;
    for (var i2 = currentIndex; i2 < validTokens.length; i2++) {
      var token = validTokens[i2];
      var content = token.content;
      if (token.type === "punctuation" && typeof content === "string") {
        if (open.test(content)) {
          stackHeight++;
        } else if (close.test(content)) {
          stackHeight--;
          if (stackHeight === 0) {
            return i2;
          }
        }
      }
    }
    return -1;
  }
  function addAlias(token, alias) {
    var aliases = token.alias;
    if (!aliases) {
      token.alias = aliases = [];
    } else if (!Array.isArray(aliases)) {
      token.alias = aliases = [aliases];
    }
    aliases.push(alias);
  }
  for (; currentIndex < validTokens.length;) {
    var startToken = validTokens[currentIndex++];
    if (startToken.type === "keyword" && startToken.content === "mutation") {
      var inputVariables = [];
      if (isTokenType(["definition-mutation", "punctuation"]) && getToken(1).content === "(") {
        currentIndex += 2;
        var definitionEnd = findClosingBracket(/^\($/, /^\)$/);
        if (definitionEnd === -1) {
          continue;
        }
        for (; currentIndex < definitionEnd; currentIndex++) {
          var t = getToken(0);
          if (t.type === "variable") {
            addAlias(t, "variable-input");
            inputVariables.push(t.content);
          }
        }
        currentIndex = definitionEnd + 1;
      }
      if (isTokenType(["punctuation", "property-query"]) && getToken(0).content === "{") {
        currentIndex++;
        addAlias(getToken(0), "property-mutation");
        if (inputVariables.length > 0) {
          var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);
          if (mutationEnd === -1) {
            continue;
          }
          for (var i = currentIndex; i < mutationEnd; i++) {
            var varToken = validTokens[i];
            if (varToken.type === "variable" && inputVariables.indexOf(varToken.content) >= 0) {
              addAlias(varToken, "variable-input");
            }
          }
        }
      }
    }
  }
});
prism.languages.sql = {
  "comment": {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  "variable": [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  "string": {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  "identifier": {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: true,
    lookbehind: true,
    inside: {
      "punctuation": /^`|`$/
    }
  },
  "function": /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  "keyword": /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  "boolean": /\b(?:FALSE|NULL|TRUE)\b/i,
  "number": /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  "operator": /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  "punctuation": /[;[\]()`,.]/
};
(function (Prism2) {
  var templateString = Prism2.languages.javascript["template-string"];
  var templateLiteralPattern = templateString.pattern.source;
  var interpolationObject = templateString.inside["interpolation"];
  var interpolationPunctuationObject = interpolationObject.inside["interpolation-punctuation"];
  var interpolationPattern = interpolationObject.pattern.source;
  function createTemplate(language, tag) {
    if (!Prism2.languages[language]) {
      return void 0;
    }
    return {
      pattern: RegExp("((?:" + tag + ")\\s*)" + templateLiteralPattern),
      lookbehind: true,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "embedded-code": {
          pattern: /[\s\S]+/,
          alias: language
        }
      }
    };
  }
  Prism2.languages.javascript["template-string"] = [createTemplate("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), createTemplate("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), createTemplate("svg", /\bsvg/.source), createTemplate("markdown", /\b(?:markdown|md)/.source), createTemplate("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), createTemplate("sql", /\bsql/.source), templateString].filter(Boolean);
  function getPlaceholder(counter, language) {
    return "___" + language.toUpperCase() + "_" + counter + "___";
  }
  function tokenizeWithHooks(code, grammar, language) {
    var env = {
      code,
      grammar,
      language
    };
    Prism2.hooks.run("before-tokenize", env);
    env.tokens = Prism2.tokenize(env.code, env.grammar);
    Prism2.hooks.run("after-tokenize", env);
    return env.tokens;
  }
  function tokenizeInterpolationExpression(expression) {
    var tempGrammar = {};
    tempGrammar["interpolation-punctuation"] = interpolationPunctuationObject;
    var tokens = Prism2.tokenize(expression, tempGrammar);
    if (tokens.length === 3) {
      var args = [1, 1];
      args.push.apply(args, tokenizeWithHooks(tokens[1], Prism2.languages.javascript, "javascript"));
      tokens.splice.apply(tokens, args);
    }
    return new Prism2.Token("interpolation", tokens, interpolationObject.alias, expression);
  }
  function tokenizeEmbedded(code, grammar, language) {
    var _tokens = Prism2.tokenize(code, {
      "interpolation": {
        pattern: RegExp(interpolationPattern),
        lookbehind: true
      }
    });
    var placeholderCounter = 0;
    var placeholderMap = {};
    var embeddedCode = _tokens.map(function (token) {
      if (typeof token === "string") {
        return token;
      } else {
        var interpolationExpression = token.content;
        var placeholder;
        while (code.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) {}
        placeholderMap[placeholder] = interpolationExpression;
        return placeholder;
      }
    }).join("");
    var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language);
    var placeholders = Object.keys(placeholderMap);
    placeholderCounter = 0;
    function walkTokens(tokens) {
      for (var i = 0; i < tokens.length; i++) {
        if (placeholderCounter >= placeholders.length) {
          return;
        }
        var token = tokens[i];
        if (typeof token === "string" || typeof token.content === "string") {
          var placeholder = placeholders[placeholderCounter];
          var s = typeof token === "string" ? token : token.content;
          var index = s.indexOf(placeholder);
          if (index !== -1) {
            ++placeholderCounter;
            var before = s.substring(0, index);
            var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
            var after = s.substring(index + placeholder.length);
            var replacement = [];
            if (before) {
              replacement.push(before);
            }
            replacement.push(middle);
            if (after) {
              var afterTokens = [after];
              walkTokens(afterTokens);
              replacement.push.apply(replacement, afterTokens);
            }
            if (typeof token === "string") {
              tokens.splice.apply(tokens, [i, 1].concat(replacement));
              i += replacement.length - 1;
            } else {
              token.content = replacement;
            }
          }
        } else {
          var content = token.content;
          if (Array.isArray(content)) {
            walkTokens(content);
          } else {
            walkTokens([content]);
          }
        }
      }
    }
    walkTokens(embeddedTokens);
    return new Prism2.Token(language, embeddedTokens, "language-" + language, code);
  }
  var supportedLanguages = {
    "javascript": true,
    "js": true,
    "typescript": true,
    "ts": true,
    "jsx": true,
    "tsx": true
  };
  Prism2.hooks.add("after-tokenize", function (env) {
    if (!(env.language in supportedLanguages)) {
      return;
    }
    function findTemplateStrings(tokens) {
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];
        if (typeof token === "string") {
          continue;
        }
        var content = token.content;
        if (!Array.isArray(content)) {
          if (typeof content !== "string") {
            findTemplateStrings([content]);
          }
          continue;
        }
        if (token.type === "template-string") {
          var embedded = content[1];
          if (content.length === 3 && typeof embedded !== "string" && embedded.type === "embedded-code") {
            var code = stringContent(embedded);
            var alias = embedded.alias;
            var language = Array.isArray(alias) ? alias[0] : alias;
            var grammar = Prism2.languages[language];
            if (!grammar) {
              continue;
            }
            content[1] = tokenizeEmbedded(code, grammar, language);
          }
        } else {
          findTemplateStrings(content);
        }
      }
    }
    findTemplateStrings(env.tokens);
  });
  function stringContent(value) {
    if (typeof value === "string") {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(stringContent).join("");
    } else {
      return stringContent(value.content);
    }
  }
})(prism);
(function (Prism2) {
  Prism2.languages.typescript = Prism2.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null
    },
    "builtin": /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  });
  Prism2.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/);
  delete Prism2.languages.typescript["parameter"];
  delete Prism2.languages.typescript["literal-property"];
  var typeInside = Prism2.languages.extend("typescript", {});
  delete typeInside["class-name"];
  Prism2.languages.typescript["class-name"].inside = typeInside;
  Prism2.languages.insertBefore("typescript", "function", {
    "decorator": {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        "at": {
          pattern: /^@/,
          alias: "operator"
        },
        "function": /^[\s\S]+/
      }
    },
    "generic-function": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        "function": /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        "generic": {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: typeInside
        }
      }
    }
  });
  Prism2.languages.ts = Prism2.languages.typescript;
})(prism);
(function (Prism2) {
  Prism2.languages.insertBefore("javascript", "function-variable", {
    "method-variable": {
      pattern: RegExp("(\\.\\s*)" + Prism2.languages.javascript["function-variable"].pattern.source),
      lookbehind: true,
      alias: ["function-variable", "method", "function", "property-access"]
    }
  });
  Prism2.languages.insertBefore("javascript", "function", {
    "method": {
      pattern: RegExp("(\\.\\s*)" + Prism2.languages.javascript["function"].source),
      lookbehind: true,
      alias: ["function", "property-access"]
    }
  });
  Prism2.languages.insertBefore("javascript", "constant", {
    "known-class-name": [{
      pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
      alias: "class-name"
    }, {
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: "class-name"
    }]
  });
  function withId(source, flags) {
    return RegExp(source.replace(/<ID>/g, function () {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), flags);
  }
  Prism2.languages.insertBefore("javascript", "keyword", {
    "imports": {
      pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
      lookbehind: true,
      inside: Prism2.languages.javascript
    },
    "exports": {
      pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
      lookbehind: true,
      inside: Prism2.languages.javascript
    }
  });
  Prism2.languages.javascript["keyword"].unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: "module"
  }, {
    pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
    alias: "control-flow"
  }, {
    pattern: /\bnull\b/,
    alias: ["null", "nil"]
  }, {
    pattern: /\bundefined\b/,
    alias: "nil"
  });
  Prism2.languages.insertBefore("javascript", "operator", {
    "spread": {
      pattern: /\.{3}/,
      alias: "operator"
    },
    "arrow": {
      pattern: /=>/,
      alias: "operator"
    }
  });
  Prism2.languages.insertBefore("javascript", "punctuation", {
    "property-access": {
      pattern: withId(/(\.\s*)#?<ID>/.source),
      lookbehind: true
    },
    "maybe-class-name": {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    "dom": {
      pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
      alias: "variable"
    },
    "console": {
      pattern: /\bconsole(?=\s*\.)/,
      alias: "class-name"
    }
  });
  var maybeClassNameTokens = ["function", "function-variable", "method", "method-variable", "property-access"];
  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism2.languages.javascript[token];
    if (Prism2.util.type(value) === "RegExp") {
      value = Prism2.languages.javascript[token] = {
        pattern: value
      };
    }
    var inside = value.inside || {};
    value.inside = inside;
    inside["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
})(prism);
(function (Prism2) {
  var javascript = Prism2.util.clone(Prism2.languages.javascript);
  var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function re(source, flags) {
    source = source.replace(/<S>/g, function () {
      return space;
    }).replace(/<BRACES>/g, function () {
      return braces;
    }).replace(/<SPREAD>/g, function () {
      return spread;
    });
    return RegExp(source, flags);
  }
  spread = re(spread).source;
  Prism2.languages.jsx = Prism2.languages.extend("markup", javascript);
  Prism2.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
  Prism2.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/;
  Prism2.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  Prism2.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism2.languages.jsx.tag.inside["comment"] = javascript["comment"];
  Prism2.languages.insertBefore("inside", "attr-name", {
    "spread": {
      pattern: re(/<SPREAD>/.source),
      inside: Prism2.languages.jsx
    }
  }, Prism2.languages.jsx.tag);
  Prism2.languages.insertBefore("inside", "special-attr", {
    "script": {
      pattern: re(/=<BRACES>/.source),
      alias: "language-javascript",
      inside: {
        "script-punctuation": {
          pattern: /^=(?=\{)/,
          alias: "punctuation"
        },
        rest: Prism2.languages.jsx
      }
    }
  }, Prism2.languages.jsx.tag);
  var stringifyToken = function (token) {
    if (!token) {
      return "";
    }
    if (typeof token === "string") {
      return token;
    }
    if (typeof token.content === "string") {
      return token.content;
    }
    return token.content.map(stringifyToken).join("");
  };
  var walkTokens = function (tokens) {
    var openedTags = [];
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;
      if (typeof token !== "string") {
        if (token.type === "tag" && token.content[0] && token.content[0].type === "tag") {
          if (token.content[0].content[0].content === "</") {
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === "/>") ;else {
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === "punctuation" && token.content === "{") {
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}") {
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }
      if (notTagNorBrace || typeof token === "string") {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          var plainText = stringifyToken(token);
          if (i < tokens.length - 1 && (typeof tokens[i + 1] === "string" || tokens[i + 1].type === "plain-text")) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }
          if (i > 0 && (typeof tokens[i - 1] === "string" || tokens[i - 1].type === "plain-text")) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }
          tokens[i] = new Prism2.Token("plain-text", plainText, null, plainText);
        }
      }
      if (token.content && typeof token.content !== "string") {
        walkTokens(token.content);
      }
    }
  };
  Prism2.hooks.add("after-tokenize", function (env) {
    if (env.language !== "jsx" && env.language !== "tsx") {
      return;
    }
    walkTokens(env.tokens);
  });
})(prism);
(function (Prism2) {
  Prism2.languages.diff = {
    "coord": [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m]
  };
  var PREFIXES = {
    "deleted-sign": "-",
    "deleted-arrow": "<",
    "inserted-sign": "+",
    "inserted-arrow": ">",
    "unchanged": " ",
    "diff": "!"
  };
  Object.keys(PREFIXES).forEach(function (name) {
    var prefix = PREFIXES[name];
    var alias = [];
    if (!/^\w+$/.test(name)) {
      alias.push(/\w+/.exec(name)[0]);
    }
    if (name === "diff") {
      alias.push("bold");
    }
    Prism2.languages.diff[name] = {
      pattern: RegExp("^(?:[" + prefix + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
      alias,
      inside: {
        "line": {
          pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
          lookbehind: true
        },
        "prefix": {
          pattern: /[\s\S]/,
          alias: /\w+/.exec(name)[0]
        }
      }
    };
  });
  Object.defineProperty(Prism2.languages.diff, "PREFIXES", {
    value: PREFIXES
  });
})(prism);
prism.languages.git = {
  "comment": /^#.*/m,
  "deleted": /^[-–].*/m,
  "inserted": /^\+.*/m,
  "string": /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
  "command": {
    pattern: /^.*\$ git .*$/m,
    inside: {
      "parameter": /\s--?\w+/
    }
  },
  "coord": /^@@.*@@$/m,
  "commit-sha1": /^commit \w{40}$/m
};
prism.languages.go = prism.languages.extend("clike", {
  "string": {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: true,
    greedy: true
  },
  "keyword": /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  "boolean": /\b(?:_|false|iota|nil|true)\b/,
  "number": [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
  "operator": /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  "builtin": /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
prism.languages.insertBefore("go", "string", {
  "char": {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: true
  }
});
delete prism.languages.go["class-name"];
(function (Prism2) {
  function getPlaceholder(language, index) {
    return "___" + language.toUpperCase() + index + "___";
  }
  Object.defineProperties(Prism2.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      value: function (env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }
        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function (match) {
          if (typeof replaceFilter === "function" && !replaceFilter(match)) {
            return match;
          }
          var i = tokenStack.length;
          var placeholder;
          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          }
          tokenStack[i] = match;
          return placeholder;
        });
        env.grammar = Prism2.languages.markup;
      }
    },
    tokenizePlaceholders: {
      value: function (env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        }
        env.grammar = Prism2.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);
        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            if (j >= keys.length) {
              break;
            }
            var token = tokens[i];
            if (typeof token === "string" || token.content && typeof token.content === "string") {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === "string" ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);
              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism2.Token(language, Prism2.tokenize(t, env.grammar), "language-" + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];
                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }
                replacement.push(middle);
                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }
                if (typeof token === "string") {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content) {
              walkTokens(token.content);
            }
          }
          return tokens;
        }
        walkTokens(env.tokens);
      }
    }
  });
})(prism);
(function (Prism2) {
  Prism2.languages.handlebars = {
    "comment": /\{\{![\s\S]*?\}\}/,
    "delimiter": {
      pattern: /^\{\{\{?|\}\}\}?$/,
      alias: "punctuation"
    },
    "string": /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    "number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    "boolean": /\b(?:false|true)\b/,
    "block": {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: true,
      alias: "keyword"
    },
    "brackets": {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    "punctuation": /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    "variable": /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism2.hooks.add("before-tokenize", function (env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism2.languages["markup-templating"].buildPlaceholders(env, "handlebars", handlebarsPattern);
  });
  Prism2.hooks.add("after-tokenize", function (env) {
    Prism2.languages["markup-templating"].tokenizePlaceholders(env, "handlebars");
  });
  Prism2.languages.hbs = Prism2.languages.handlebars;
})(prism);
prism.languages.json = {
  "property": {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true
  },
  "string": {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true
  },
  "comment": {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  "number": /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  "punctuation": /[{}[\],]/,
  "operator": /:/,
  "boolean": /\b(?:false|true)\b/,
  "null": {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
};
prism.languages.webmanifest = prism.languages.json;
prism.languages.less = prism.languages.extend("css", {
  "comment": [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  "atrule": {
    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      "punctuation": /[:()]/
    }
  },
  "selector": {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      "variable": /@+[\w-]+/
    }
  },
  "property": /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
  "operator": /[+\-*\/]/
});
prism.languages.insertBefore("less", "property", {
  "variable": [{
    pattern: /@[\w-]+\s*:/,
    inside: {
      "punctuation": /:/
    }
  }, /@@?[\w-]+/],
  "mixin-usage": {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: true,
    alias: "function"
  }
});
prism.languages.makefile = {
  "comment": {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  "string": {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  "builtin-target": {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: "builtin"
  },
  "target": {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: "symbol",
    inside: {
      "variable": /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  "variable": /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  "keyword": /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
  "function": {
    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: true
  },
  "operator": /(?:::|[?:+!])?=|[|@]/,
  "punctuation": /[:;(){}]/
};
prism.languages.objectivec = prism.languages.extend("c", {
  "string": {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  "keyword": /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  "operator": /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete prism.languages.objectivec["class-name"];
prism.languages.objc = prism.languages.objectivec;
prism.languages.ocaml = {
  "comment": {
    pattern: /\(\*[\s\S]*?\*\)/,
    greedy: true
  },
  "char": {
    pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
    greedy: true
  },
  "string": [{
    pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/,
    greedy: true
  }],
  "number": [/\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i, /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i, /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],
  "directive": {
    pattern: /\B#\w+/,
    alias: "property"
  },
  "label": {
    pattern: /\B~\w+/,
    alias: "property"
  },
  "type-variable": {
    pattern: /\B'\w+/,
    alias: "function"
  },
  "variant": {
    pattern: /`\w+/,
    alias: "symbol"
  },
  "keyword": /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  "boolean": /\b(?:false|true)\b/,
  "operator-like-punctuation": {
    pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
    alias: "punctuation"
  },
  "operator": /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  "punctuation": /;;|::|[(){}\[\].,:;#]|\b_\b/
};
prism.languages.python = {
  "comment": {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true,
    greedy: true
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      "interpolation": {
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: true,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: true
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      "string": /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: true,
    alias: "string"
  },
  "string": {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  "function": {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  "decorator": {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: true,
    alias: ["annotation", "punctuation"],
    inside: {
      "punctuation": /\./
    }
  },
  "keyword": /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  "builtin": /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  "boolean": /\b(?:False|None|True)\b/,
  "number": /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  "operator": /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  "punctuation": /[{}[\];(),.:]/
};
prism.languages.python["string-interpolation"].inside["interpolation"].inside.rest = prism.languages.python;
prism.languages.py = prism.languages.python;
prism.languages.reason = prism.languages.extend("clike", {
  "string": {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  "class-name": /\b[A-Z]\w*/,
  "keyword": /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  "operator": /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
});
prism.languages.insertBefore("reason", "class-name", {
  "char": {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    greedy: true
  },
  "constructor": /\b[A-Z]\w*\b(?!\s*\.)/,
  "label": {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: "symbol"
  }
});
delete prism.languages.reason.function;
(function (Prism2) {
  Prism2.languages.sass = Prism2.languages.extend("css", {
    "comment": {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: true,
      greedy: true
    }
  });
  Prism2.languages.insertBefore("sass", "atrule", {
    "atrule-line": {
      pattern: /^(?:[ \t]*)[@+=].+/m,
      greedy: true,
      inside: {
        "atrule": /(?:@[\w-]+|[+=])/
      }
    }
  });
  delete Prism2.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
    pattern: /(\s)-(?=\s)/,
    lookbehind: true
  }];
  Prism2.languages.insertBefore("sass", "property", {
    "variable-line": {
      pattern: /^[ \t]*\$.+/m,
      greedy: true,
      inside: {
        "punctuation": /:/,
        "variable": variable,
        "operator": operator
      }
    },
    "property-line": {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: true,
      inside: {
        "property": [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        "punctuation": /:/,
        "variable": variable,
        "operator": operator,
        "important": Prism2.languages.sass.important
      }
    }
  });
  delete Prism2.languages.sass.property;
  delete Prism2.languages.sass.important;
  Prism2.languages.insertBefore("sass", "punctuation", {
    "selector": {
      pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
      lookbehind: true,
      greedy: true
    }
  });
})(prism);
prism.languages.scss = prism.languages.extend("css", {
  "comment": {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  "atrule": {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      "rule": /@[\w-]+/
    }
  },
  "url": /(?:[-a-z]+-)?url(?=\()/i,
  "selector": {
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      "parent": {
        pattern: /&/,
        alias: "important"
      },
      "placeholder": /%[-\w]+/,
      "variable": /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  "property": {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      "variable": /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
prism.languages.insertBefore("scss", "atrule", {
  "keyword": [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
    pattern: /( )(?:from|through)(?= )/,
    lookbehind: true
  }]
});
prism.languages.insertBefore("scss", "important", {
  "variable": /\$[-\w]+|#\{\$[-\w]+\}/
});
prism.languages.insertBefore("scss", "function", {
  "module-modifier": {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: "keyword"
  },
  "placeholder": {
    pattern: /%[-\w]+/,
    alias: "selector"
  },
  "statement": {
    pattern: /\B!(?:default|optional)\b/i,
    alias: "keyword"
  },
  "boolean": /\b(?:false|true)\b/,
  "null": {
    pattern: /\bnull\b/,
    alias: "keyword"
  },
  "operator": {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
    lookbehind: true
  }
});
prism.languages.scss["atrule"].inside.rest = prism.languages.scss;
(function (Prism2) {
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+)/,
    lookbehind: true
  };
  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  var inside = {
    "comment": {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    "url": {
      pattern: /\burl\((["']?).*?\1\)/i,
      greedy: true
    },
    "string": {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    "interpolation": null,
    "func": null,
    "important": /\B!(?:important|optional)\b/i,
    "keyword": {
      pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
      lookbehind: true
    },
    "hexcode": /#[\da-f]{3,6}/i,
    "color": [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        "unit": unit,
        "number": number,
        "function": /[\w-]+(?=\()/,
        "punctuation": /[(),]/
      }
    }],
    "entity": /\\[\da-f]{1,8}/i,
    "unit": unit,
    "boolean": /\b(?:false|true)\b/,
    "operator": [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
    "number": number,
    "punctuation": /[{}()\[\];:,]/
  };
  inside["interpolation"] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: "variable",
    inside: {
      "delimiter": {
        pattern: /^\{|\}$/,
        alias: "punctuation"
      },
      rest: inside
    }
  };
  inside["func"] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      "function": /^[^(]+/,
      rest: inside
    }
  };
  Prism2.languages.stylus = {
    "atrule-declaration": {
      pattern: /(^[ \t]*)@.+/m,
      lookbehind: true,
      inside: {
        "atrule": /^@[\w-]+/,
        rest: inside
      }
    },
    "variable-declaration": {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
      lookbehind: true,
      inside: {
        "variable": /^\S+/,
        rest: inside
      }
    },
    "statement": {
      pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
      lookbehind: true,
      inside: {
        "keyword": /^\S+/,
        rest: inside
      }
    },
    "property-declaration": {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
      lookbehind: true,
      inside: {
        "property": {
          pattern: /^[^\s:]+/,
          inside: {
            "interpolation": inside.interpolation
          }
        },
        rest: inside
      }
    },
    "selector": {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
      lookbehind: true,
      inside: {
        "interpolation": inside.interpolation,
        "comment": inside.comment,
        "punctuation": /[{},]/
      }
    },
    "func": inside.func,
    "string": inside.string,
    "comment": {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true,
      greedy: true
    },
    "interpolation": inside.interpolation,
    "punctuation": /[{}()\[\];:.]/
  };
})(prism);
(function (Prism2) {
  var typescript = Prism2.util.clone(Prism2.languages.typescript);
  Prism2.languages.tsx = Prism2.languages.extend("jsx", typescript);
  delete Prism2.languages.tsx["parameter"];
  delete Prism2.languages.tsx["literal-property"];
  var tag = Prism2.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags);
  tag.lookbehind = true;
})(prism);
prism.languages.wasm = {
  "comment": [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  "string": {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: true
  },
  "keyword": [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      "operator": /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      "punctuation": /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  "variable": /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
  "number": /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  "punctuation": /[()]/
};
var prism_default = prism;

// node_modules/prism-react-renderer/themes/duotoneDark/index.js
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};
var duotoneDark_default = theme;

// node_modules/prism-react-renderer/dist/index.js
var import_react = require("react@18.2.0");
var defaultProps = {
  Prism: prism_default,
  theme: duotoneDark_default
};
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var newlineRe = /\r\n|\r|\n/;
var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};
var appendTypes = function (types, add) {
  var typesSize = types.length;
  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }
  return types.concat(add);
};
var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];
  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i];
      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);
        if (token.alias) {
          types = appendTypes(types, token.alias);
        }
        content = token.content;
      }
      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      }
      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types,
        content: splitByNewlines[0]
      });
      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types,
          content: splitByNewlines[i$1]
        });
      }
    }
    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }
  normalizeEmptyLines(currentLine);
  return acc;
};
var themeToDict = function (theme2, language) {
  var plain = theme2.plain;
  var base = /* @__PURE__ */Object.create(null);
  var themeDict = theme2.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;
    if (languages && !languages.includes(language)) {
      return acc;
    }
    themeEntry.types.forEach(function (type) {
      var accStyle = _extends({}, acc[type], style);
      acc[type] = accStyle;
    });
    return acc;
  }, base);
  themeDict.root = plain;
  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};
function objectWithoutProperties(obj, exclude) {
  var target = {};
  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];
  return target;
}
var Highlight = /* @__PURE__ */function (Component2) {
  function Highlight2() {
    var this$1 = this;
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];
    Component2.apply(this, args);
    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== void 0 && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }
      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : void 0;
      return this$1.themeDict = themeDict;
    });
    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;
      var output = _extends({}, rest, {
        className: "token-line",
        style: void 0,
        key: void 0
      });
      var themeDict = this$1.getThemeDict(this$1.props);
      if (themeDict !== void 0) {
        output.style = themeDict.plain;
      }
      if (style !== void 0) {
        output.style = output.style !== void 0 ? _extends({}, output.style, style) : style;
      }
      if (key !== void 0) {
        output.key = key;
      }
      if (className) {
        output.className += " " + className;
      }
      return output;
    });
    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);
      if (themeDict === void 0) {
        return void 0;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : void 0;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }
      var baseStyle = empty ? {
        display: "inline-block"
      } : {};
      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });
    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;
      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: void 0
      });
      if (style !== void 0) {
        output.style = output.style !== void 0 ? _extends({}, output.style, style) : style;
      }
      if (key !== void 0) {
        output.key = key;
      }
      if (className) {
        output.className += " " + className;
      }
      return output;
    });
    _defineProperty(this, "tokenize", function (Prism2, code, grammar, language) {
      var env = {
        code,
        grammar,
        language,
        tokens: []
      };
      Prism2.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism2.tokenize(env.code, env.grammar, env.language);
      Prism2.hooks.run("after-tokenize", env);
      return tokens;
    });
  }
  if (Component2) Highlight2.__proto__ = Component2;
  Highlight2.prototype = Object.create(Component2 && Component2.prototype);
  Highlight2.prototype.constructor = Highlight2;
  Highlight2.prototype.render = function render() {
    var ref = this.props;
    var Prism2 = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism2.languages[language];
    var mixedTokens = grammar !== void 0 ? this.tokenize(Prism2, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens,
      className: "prism-code language-" + language,
      style: themeDict !== void 0 ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };
  return Highlight2;
}(import_react.Component);
var dist_default = Highlight;

// .beyond/uimport/temp/prism-react-renderer.1.3.5.js
var prism_react_renderer_1_3_5_default = dist_default;
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3ByaXNtLXJlYWN0LXJlbmRlcmVyLjEuMy41LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByaXNtLXJlYWN0LXJlbmRlcmVyL3ByaXNtL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByaXNtLXJlYWN0LXJlbmRlcmVyL3RoZW1lcy9kdW90b25lRGFyay9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmlzbS1yZWFjdC1yZW5kZXJlci9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInByaXNtX3JlYWN0X3JlbmRlcmVyXzFfM181X2V4cG9ydHMiLCJfX2V4cG9ydCIsIlByaXNtIiwicHJpc21fZGVmYXVsdCIsImRlZmF1bHQiLCJwcmlzbV9yZWFjdF9yZW5kZXJlcl8xXzNfNV9kZWZhdWx0IiwiZGVmYXVsdFByb3BzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImxhbmciLCJ1bmlxdWVJZCIsInBsYWluVGV4dEdyYW1tYXIiLCJfIiwidXRpbCIsImVuY29kZSIsInRva2VucyIsIlRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJhbGlhcyIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsInJlcGxhY2UiLCJvIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJvYmpJZCIsIm9iaiIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJjbG9uZSIsImRlZXBDbG9uZSIsInZpc2l0ZWQiLCJpZCIsImtleSIsImhhc093blByb3BlcnR5IiwiZm9yRWFjaCIsInYiLCJpIiwiZ2V0TGFuZ3VhZ2UiLCJlbGVtZW50IiwibSIsImV4ZWMiLCJjbGFzc05hbWUiLCJ0b0xvd2VyQ2FzZSIsInBhcmVudEVsZW1lbnQiLCJzZXRMYW5ndWFnZSIsImxhbmd1YWdlIiwiUmVnRXhwIiwiY2xhc3NMaXN0IiwiYWRkIiwiaXNBY3RpdmUiLCJkZWZhdWx0QWN0aXZhdGlvbiIsIm5vIiwiY29udGFpbnMiLCJsYW5ndWFnZXMiLCJwbGFpbiIsInBsYWludGV4dCIsInRleHQiLCJ0eHQiLCJleHRlbmQiLCJyZWRlZiIsImxhbmcyIiwiaW5zZXJ0QmVmb3JlIiwiaW5zaWRlIiwiYmVmb3JlIiwiaW5zZXJ0Iiwicm9vdCIsImdyYW1tYXIiLCJyZXQiLCJ0b2tlbiIsIm5ld1Rva2VuIiwib2xkIiwiREZTIiwiY2FsbGJhY2siLCJwcm9wZXJ0eSIsInByb3BlcnR5VHlwZSIsInBsdWdpbnMiLCJoaWdobGlnaHQiLCJlbnYiLCJjb2RlIiwiaG9va3MiLCJydW4iLCJ0b2tlbml6ZSIsInN0cmluZ2lmeSIsInJlc3QiLCJ0b2tlbkxpc3QiLCJMaW5rZWRMaXN0IiwiYWRkQWZ0ZXIiLCJoZWFkIiwibWF0Y2hHcmFtbWFyIiwidG9BcnJheSIsImFsbCIsIm5hbWUiLCJwdXNoIiwiY2FsbGJhY2tzIiwibGVuZ3RoIiwibWF0Y2hlZFN0ciIsInMiLCJlIiwidGFnIiwiY2xhc3NlcyIsImF0dHJpYnV0ZXMiLCJhbGlhc2VzIiwiYXBwbHkiLCJqb2luIiwibWF0Y2hQYXR0ZXJuIiwicGF0dGVybiIsInBvcyIsImxvb2tiZWhpbmQiLCJsYXN0SW5kZXgiLCJtYXRjaCIsImxvb2tiZWhpbmRMZW5ndGgiLCJpbmRleCIsInN0YXJ0Tm9kZSIsInN0YXJ0UG9zIiwicmVtYXRjaCIsInBhdHRlcm5zIiwiaiIsImNhdXNlIiwicGF0dGVybk9iaiIsImdyZWVkeSIsImdsb2JhbCIsImZsYWdzIiwic291cmNlIiwiY3VycmVudE5vZGUiLCJuZXh0IiwidGFpbCIsInJlYWNoIiwic3RyIiwicmVtb3ZlQ291bnQiLCJmcm9tIiwidG8iLCJwIiwiayIsIm1hdGNoU3RyIiwiYWZ0ZXIiLCJyZW1vdmVGcm9tIiwicHJldiIsInJlbW92ZVJhbmdlIiwid3JhcHBlZCIsIm5lc3RlZFJlbWF0Y2giLCJsaXN0Iiwibm9kZSIsIm5ld05vZGUiLCJjb3VudCIsImFycmF5IiwicHJpc20iLCJtYXJrdXAiLCJhZGRJbmxpbmVkIiwidGFnTmFtZSIsImluY2x1ZGVkQ2RhdGFJbnNpZGUiLCJkZWYiLCJhdHRyTmFtZSIsImh0bWwiLCJtYXRobWwiLCJzdmciLCJ4bWwiLCJzc21sIiwiYXRvbSIsInJzcyIsIlByaXNtMiIsImVudlZhcnMiLCJjb21tYW5kQWZ0ZXJIZXJlZG9jIiwiaW5zaWRlU3RyaW5nIiwiYmFzaCIsImVudGl0eSIsInZhcmlhYmxlIiwidG9CZUNvcGllZCIsInNoZWxsIiwiY2xpa2UiLCJjIiwia2V5d29yZCIsIm1vZE5hbWUiLCJjcHAiLCJzdHJpbmciLCJjc3MiLCJhZGRBdHRyaWJ1dGUiLCJzZWxlY3Rvckluc2lkZSIsInNlbGVjdG9yIiwidW5pdCIsIm51bWJlciIsImphdmFzY3JpcHQiLCJyZWdleCIsImpzIiwiY29tbWVudCIsImludGVycG9sYXRpb24iLCJjb2ZmZWVzY3JpcHQiLCJjb2ZmZWUiLCJhbmNob3JPckFsaWFzIiwicHJvcGVydGllcyIsInBsYWluS2V5IiwiY3JlYXRlVmFsdWVQYXR0ZXJuIiwieWFtbCIsInltbCIsImlubmVyIiwiY3JlYXRlSW5saW5lIiwidGFibGVDZWxsIiwidGFibGVSb3ciLCJ0YWJsZUxpbmUiLCJtYXJrZG93biIsInB1bmN0dWF0aW9uIiwid2Fsa1Rva2VucyIsImwiLCJjb2RlTGFuZyIsImNvZGVCbG9jayIsImNscyIsImF1dG9sb2FkZXIiLCJEYXRlIiwidmFsdWVPZiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxvYWRMYW5ndWFnZXMiLCJlbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwidGV4dENvbnRlbnQiLCJ0YWdQYXR0ZXJuIiwiS05PV05fRU5USVRZX05BTUVTIiwiZnJvbUNvZGVQb2ludCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50IiwiTnVtYmVyIiwia25vd24iLCJtZCIsImdyYXBocWwiLCJhZnRlclRva2VuaXplR3JhcGhxbCIsInZhbGlkVG9rZW5zIiwiZmlsdGVyIiwiY3VycmVudEluZGV4IiwiZ2V0VG9rZW4iLCJvZmZzZXQiLCJpc1Rva2VuVHlwZSIsInR5cGVzIiwiaTIiLCJmaW5kQ2xvc2luZ0JyYWNrZXQiLCJvcGVuIiwiY2xvc2UiLCJzdGFja0hlaWdodCIsInRlc3QiLCJhZGRBbGlhcyIsInN0YXJ0VG9rZW4iLCJpbnB1dFZhcmlhYmxlcyIsImRlZmluaXRpb25FbmQiLCJ0IiwibXV0YXRpb25FbmQiLCJ2YXJUb2tlbiIsImluZGV4T2YiLCJzcWwiLCJ0ZW1wbGF0ZVN0cmluZyIsInRlbXBsYXRlTGl0ZXJhbFBhdHRlcm4iLCJpbnRlcnBvbGF0aW9uT2JqZWN0IiwiaW50ZXJwb2xhdGlvblB1bmN0dWF0aW9uT2JqZWN0IiwiaW50ZXJwb2xhdGlvblBhdHRlcm4iLCJjcmVhdGVUZW1wbGF0ZSIsIkJvb2xlYW4iLCJnZXRQbGFjZWhvbGRlciIsImNvdW50ZXIiLCJ0b1VwcGVyQ2FzZSIsInRva2VuaXplV2l0aEhvb2tzIiwidG9rZW5pemVJbnRlcnBvbGF0aW9uRXhwcmVzc2lvbiIsImV4cHJlc3Npb24iLCJ0ZW1wR3JhbW1hciIsImFyZ3MiLCJzcGxpY2UiLCJ0b2tlbml6ZUVtYmVkZGVkIiwiX3Rva2VucyIsInBsYWNlaG9sZGVyQ291bnRlciIsInBsYWNlaG9sZGVyTWFwIiwiZW1iZWRkZWRDb2RlIiwiaW50ZXJwb2xhdGlvbkV4cHJlc3Npb24iLCJwbGFjZWhvbGRlciIsImVtYmVkZGVkVG9rZW5zIiwicGxhY2Vob2xkZXJzIiwia2V5cyIsInN1YnN0cmluZyIsIm1pZGRsZSIsInJlcGxhY2VtZW50IiwiYWZ0ZXJUb2tlbnMiLCJjb25jYXQiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJmaW5kVGVtcGxhdGVTdHJpbmdzIiwiZW1iZWRkZWQiLCJzdHJpbmdDb250ZW50IiwidHlwZXNjcmlwdCIsInR5cGVJbnNpZGUiLCJ0cyIsIndpdGhJZCIsInVuc2hpZnQiLCJtYXliZUNsYXNzTmFtZVRva2VucyIsInNwYWNlIiwiYnJhY2VzIiwic3ByZWFkIiwicmUiLCJqc3giLCJzdHJpbmdpZnlUb2tlbiIsIm9wZW5lZFRhZ3MiLCJub3RUYWdOb3JCcmFjZSIsInBvcCIsIm9wZW5lZEJyYWNlcyIsInBsYWluVGV4dCIsImRpZmYiLCJQUkVGSVhFUyIsInByZWZpeCIsImdpdCIsImdvIiwiZGVmaW5lUHJvcGVydGllcyIsImJ1aWxkUGxhY2Vob2xkZXJzIiwicGxhY2Vob2xkZXJQYXR0ZXJuIiwicmVwbGFjZUZpbHRlciIsInRva2VuU3RhY2siLCJ0b2tlbml6ZVBsYWNlaG9sZGVycyIsImhhbmRsZWJhcnMiLCJoYW5kbGViYXJzUGF0dGVybiIsImhicyIsImpzb24iLCJ3ZWJtYW5pZmVzdCIsImxlc3MiLCJtYWtlZmlsZSIsIm9iamVjdGl2ZWMiLCJvYmpjIiwib2NhbWwiLCJweXRob24iLCJweSIsInJlYXNvbiIsImZ1bmN0aW9uIiwic2FzcyIsImF0cnVsZSIsIm9wZXJhdG9yIiwiaW1wb3J0YW50Iiwic2NzcyIsInN0eWx1cyIsImZ1bmMiLCJ0c3giLCJ3YXNtIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInN0eWxlcyIsInN0eWxlIiwib3BhY2l0eSIsInRleHREZWNvcmF0aW9uTGluZSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJkdW90b25lRGFya19kZWZhdWx0IiwiaW1wb3J0X3JlYWN0IiwicmVxdWlyZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9leHRlbmRzIiwiYXNzaWduIiwidGFyZ2V0IiwiYXJndW1lbnRzIiwibmV3bGluZVJlIiwibm9ybWFsaXplRW1wdHlMaW5lcyIsImxpbmUiLCJlbXB0eSIsImFwcGVuZFR5cGVzIiwidHlwZXNTaXplIiwibm9ybWFsaXplVG9rZW5zIiwidHlwZUFyclN0YWNrIiwidG9rZW5BcnJTdGFjayIsInRva2VuQXJySW5kZXhTdGFjayIsInRva2VuQXJyU2l6ZVN0YWNrIiwic3RhY2tJbmRleCIsImN1cnJlbnRMaW5lIiwiYWNjIiwidG9rZW5BcnIiLCJzcGxpdEJ5TmV3bGluZXMiLCJzcGxpdCIsIm5ld2xpbmVDb3VudCIsImkkMSIsInRoZW1lVG9EaWN0IiwidGhlbWUyIiwiYmFzZSIsImNyZWF0ZSIsInRoZW1lRGljdCIsInJlZHVjZSIsInRoZW1lRW50cnkiLCJpbmNsdWRlcyIsImFjY1N0eWxlIiwib2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlIiwiSGlnaGxpZ2h0IiwiQ29tcG9uZW50MiIsIkhpZ2hsaWdodDIiLCJ0aGlzJDEiLCJsZW4iLCJwcm9wcyIsInByZXZUaGVtZSIsInByZXZMYW5ndWFnZSIsInJlZiIsInJlc3QkMSIsIm91dHB1dCIsImdldFRoZW1lRGljdCIsImRpc3BsYXkiLCJiYXNlU3R5bGUiLCJ0eXBlU3R5bGVzIiwiY2hpbGRyZW4iLCJnZXRTdHlsZUZvclRva2VuIiwiX19wcm90b19fIiwiY29uc3RydWN0b3IiLCJyZW5kZXIiLCJtaXhlZFRva2VucyIsImdldExpbmVQcm9wcyIsImdldFRva2VuUHJvcHMiLCJDb21wb25lbnQiLCJkaXN0X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0NBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLGFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLGtDQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFULGtDQUFBOzs7QUNtQkMsSUFBSUUsS0FBQSxHQUFTLFlBQVk7RUFHekIsSUFBSVEsSUFBQSxHQUFPO0VBQ1gsSUFBSUMsUUFBQSxHQUFXO0VBR2YsSUFBSUMsZ0JBQUEsR0FBbUIsQ0FBQztFQUd4QixJQUFJQyxDQUFBLEdBQUk7SUFVUEMsSUFBQSxFQUFNO01BQ0xDLE1BQUEsRUFBUSxTQUFTQSxPQUFPQyxNQUFBLEVBQVE7UUFDL0IsSUFBSUEsTUFBQSxZ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