System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "clsx@2.1.1", "@tiptap/react@3.2.0", "pragmate-ui@1.0.6/components", "@radix-ui/react-icons@1.3.2", "turndown@7.2.0", "marked@5.1.2", "@tiptap/extension-blockquote@3.2.0", "@tiptap/extension-bullet-list@3.2.0", "@tiptap/extension-code-block@3.2.0", "@tiptap/extension-horizontal-rule@3.2.0", "@tiptap/extension-list-item@3.2.0", "@tiptap/extension-ordered-list@3.2.0", "@tiptap/extension-task-item@3.2.0", "@tiptap/extension-task-list@3.2.0", "@tiptap/extension-underline@3.2.0", "@tiptap/starter-kit@3.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, WikiEditorUI, WikiEditor, __beyond_pkg, hmr;
  _export({
    WikiEditorUI: void 0,
    WikiEditor: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_clsx2) {
      dependency_3 = _clsx2;
    }, function (_tiptapReact) {
      dependency_4 = _tiptapReact;
    }, function (_pragmateUi106Components) {
      dependency_5 = _pragmateUi106Components;
    }, function (_radixUiReactIcons) {
      dependency_6 = _radixUiReactIcons;
    }, function (_turndown2) {
      dependency_7 = _turndown2;
    }, function (_marked2) {
      dependency_8 = _marked2;
    }, function (_tiptapExtensionBlockquote) {
      dependency_9 = _tiptapExtensionBlockquote;
    }, function (_tiptapExtensionBulletList) {
      dependency_10 = _tiptapExtensionBulletList;
    }, function (_tiptapExtensionCodeBlock) {
      dependency_11 = _tiptapExtensionCodeBlock;
    }, function (_tiptapExtensionHorizontalRule) {
      dependency_12 = _tiptapExtensionHorizontalRule;
    }, function (_tiptapExtensionListItem) {
      dependency_13 = _tiptapExtensionListItem;
    }, function (_tiptapExtensionOrderedList) {
      dependency_14 = _tiptapExtensionOrderedList;
    }, function (_tiptapExtensionTaskItem) {
      dependency_15 = _tiptapExtensionTaskItem;
    }, function (_tiptapExtensionTaskList) {
      dependency_16 = _tiptapExtensionTaskList;
    }, function (_tiptapExtensionUnderline) {
      dependency_17 = _tiptapExtensionUnderline;
    }, function (_tiptapStarterKit) {
      dependency_18 = _tiptapStarterKit;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/editor"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['clsx', dependency_3], ['@tiptap/react', dependency_4], ['pragmate-ui/components', dependency_5], ['@radix-ui/react-icons', dependency_6], ['turndown', dependency_7], ['marked', dependency_8], ['@tiptap/extension-blockquote', dependency_9], ['@tiptap/extension-bullet-list', dependency_10], ['@tiptap/extension-code-block', dependency_11], ['@tiptap/extension-horizontal-rule', dependency_12], ['@tiptap/extension-list-item', dependency_13], ['@tiptap/extension-ordered-list', dependency_14], ['@tiptap/extension-task-item', dependency_15], ['@tiptap/extension-task-list', dependency_16], ['@tiptap/extension-underline', dependency_17], ['@tiptap/starter-kit', dependency_18]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.5.5/editor');
      ims = new Map();
      /******************************
      INTERNAL MODULE: ./menus/bubble
      ******************************/
      ims.set('./menus/bubble', {
        hash: 3183804950,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BubbleMenuContent = void 0;
          var React = require("react");
          var _clsx = require("clsx");
          const BubbleMenuContent = ({
            editor
          }) => {
            if (!editor) return null;
            return React.createElement("div", {
              className: 'wiki-editor__bubble-menu-content'
            }, React.createElement("button", {
              onClick: () => editor.chain().focus().toggleBold().run(),
              className: (0, _clsx.default)('wiki-editor__button', {
                'is-active': editor.isActive('bold')
              }),
              title: 'Negrita'
            }, React.createElement("strong", null, "B")), React.createElement("button", {
              onClick: () => editor.chain().focus().toggleItalic().run(),
              className: (0, _clsx.default)('wiki-editor__button', {
                'is-active': editor.isActive('italic')
              }),
              title: 'Cursiva'
            }, React.createElement("em", null, "I")), React.createElement("button", {
              onClick: () => editor.chain().focus().toggleUnderline().run(),
              className: (0, _clsx.default)('wiki-editor__button', {
                'is-active': editor.isActive('underline')
              }),
              title: 'Subrayado'
            }, React.createElement("u", null, "U")), React.createElement("button", {
              onClick: () => editor.chain().focus().toggleStrike().run(),
              className: (0, _clsx.default)('wiki-editor__button', {
                'is-active': editor.isActive('strike')
              }),
              title: 'Tachado'
            }, React.createElement("s", null, "S")), React.createElement("button", {
              onClick: () => editor.chain().focus().toggleCode().run(),
              className: (0, _clsx.default)('wiki-editor__button', {
                'is-active': editor.isActive('code')
              }),
              title: 'C\u00F3digo inline'
            }, React.createElement("code", null, '<>')));
          };
          exports.BubbleMenuContent = BubbleMenuContent;
        }
      });

      /********************************
      INTERNAL MODULE: ./menus/floating
      ********************************/

      ims.set('./menus/floating', {
        hash: 2914182028,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FloatingMenuContent = void 0;
          var React = require("react");
          const FloatingMenuContent = ({
            editor
          }) => {
            if (!editor) return null;
            const insertBlock = type => {
              switch (type) {
                case 'heading1':
                  editor.chain().focus().toggleHeading({
                    level: 1
                  }).run();
                  break;
                case 'heading2':
                  editor.chain().focus().toggleHeading({
                    level: 2
                  }).run();
                  break;
                case 'heading3':
                  editor.chain().focus().toggleHeading({
                    level: 3
                  }).run();
                  break;
                case 'bulletList':
                  editor.chain().focus().toggleBulletList().run();
                  break;
                case 'orderedList':
                  editor.chain().focus().toggleOrderedList().run();
                  break;
                case 'taskList':
                  editor.chain().focus().toggleTaskList().run();
                  break;
                case 'blockquote':
                  editor.chain().focus().toggleBlockquote().run();
                  break;
                case 'codeBlock':
                  editor.chain().focus().toggleCodeBlock().run();
                  break;
                case 'horizontalRule':
                  editor.chain().focus().setHorizontalRule().run();
                  break;
              }
            };
            return React.createElement("div", {
              className: 'wiki-editor__floating-menu-content'
            }, React.createElement("div", {
              className: 'wiki-editor__floating-menu-section'
            }, React.createElement("h4", null, "Encabezados"), React.createElement("button", {
              onClick: () => insertBlock('heading1'),
              className: 'wiki-editor__floating-button'
            }, "H1"), React.createElement("button", {
              onClick: () => insertBlock('heading2'),
              className: 'wiki-editor__floating-button'
            }, "H2"), React.createElement("button", {
              onClick: () => insertBlock('heading3'),
              className: 'wiki-editor__floating-button'
            }, "H3")), React.createElement("div", {
              className: 'wiki-editor__floating-menu-section'
            }, React.createElement("h4", null, "Listas"), React.createElement("button", {
              onClick: () => insertBlock('bulletList'),
              className: 'wiki-editor__floating-button'
            }, "Lista con vi\u00F1etas"), React.createElement("button", {
              onClick: () => insertBlock('orderedList'),
              className: 'wiki-editor__floating-button'
            }, "Lista numerada"), React.createElement("button", {
              onClick: () => insertBlock('taskList'),
              className: 'wiki-editor__floating-button'
            }, "Lista de tareas")), React.createElement("div", {
              className: 'wiki-editor__floating-menu-section'
            }, React.createElement("h4", null, "Bloques"), React.createElement("button", {
              onClick: () => insertBlock('blockquote'),
              className: 'wiki-editor__floating-button'
            }, "Cita"), React.createElement("button", {
              onClick: () => insertBlock('codeBlock'),
              className: 'wiki-editor__floating-button'
            }, "Bloque de c\u00F3digo"), React.createElement("button", {
              onClick: () => insertBlock('horizontalRule'),
              className: 'wiki-editor__floating-button'
            }, "L\u00EDnea horizontal")));
          };
          exports.FloatingMenuContent = FloatingMenuContent;
        }
      });

      /*****************************
      INTERNAL MODULE: ./menus/index
      *****************************/

      ims.set('./menus/index', {
        hash: 1426287529,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          Object.defineProperty(exports, "BubbleMenuContent", {
            enumerable: true,
            get: function () {
              return _bubble.BubbleMenuContent;
            }
          });
          Object.defineProperty(exports, "FloatingMenuContent", {
            enumerable: true,
            get: function () {
              return _floating.FloatingMenuContent;
            }
          });
          var _bubble = require("./bubble");
          var _floating = require("./floating");
        }
      });

      /*********************************
      INTERNAL MODULE: ./toolbar/actions
      *********************************/

      ims.set('./toolbar/actions', {
        hash: 3705338391,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.generateButtonIsActive = exports.generateButtonIcon = exports.generateButtonAction = void 0;
          /**
           * Generates button action based on standard pattern
           */
          const generateButtonAction = button => {
            // If it already has a custom action, use it
            if (button.action) {
              return button.action;
            }
            // If it's a special case, handle it
            if (button.actionType === 'set') {
              return editor => editor.chain().focus().setHorizontalRule().run();
            }
            // Standard behavior: toggle + extension name
            const extensionName = button.extensionName || button.id;
            return editor => {
              const command = `toggle${extensionName.charAt(0).toUpperCase() + extensionName.slice(1)}`;
              if (typeof editor.chain === 'function' && editor.chain().focus()[command]) {
                editor.chain().focus()[command]().run();
              }
            };
          };
          /**
           * Generates button active state
           */
          exports.generateButtonAction = generateButtonAction;
          const generateButtonIsActive = button => {
            // If it already has a custom state, use it
            if (button.isActive) {
              return button.isActive;
            }
            // Standard behavior: check if extension is active
            const extensionName = button.extensionName || button.id;
            return editor => editor.isActive(extensionName);
          };
          /**
           * Generates button icon
           */
          exports.generateButtonIsActive = generateButtonIsActive;
          const generateButtonIcon = button => {
            // If it already has a custom icon, use it
            if (button.icon) {
              return button.icon;
            }
            // Standard behavior: use label
            return button.label;
          };
          exports.generateButtonIcon = generateButtonIcon;
        }
      });

      /********************************
      INTERNAL MODULE: ./toolbar/button
      ********************************/

      ims.set('./toolbar/button', {
        hash: 4058208382,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;
          var React = require("react");
          var _clsx = require("clsx");
          var _actions = require("./actions");
          var _components = require("pragmate-ui/components");
          // Custom hook to subscribe to editor changes
          const useEditorSubscription = editor => {
            const [, forceUpdate] = React.useReducer(x => x + 1, 0);
            React.useEffect(() => {
              const updateListener = () => {
                forceUpdate();
              };
              // Listen to editor updates
              editor.on('update', updateListener);
              editor.on('selectionUpdate', updateListener);
              editor.on('transaction', updateListener);
              return () => {
                editor.off('update', updateListener);
                editor.off('selectionUpdate', updateListener);
                editor.off('transaction', updateListener);
              };
            }, [editor]);
            return forceUpdate;
          };
          const Button = ({
            button,
            editor
          }) => {
            // Automatically generate button properties
            const action = (0, _actions.generateButtonAction)(button);
            const isActive = (0, _actions.generateButtonIsActive)(button);
            const icon = (0, _actions.generateButtonIcon)(button);
            // Subscribe to editor changes
            useEditorSubscription(editor);
            return React.createElement(_components.Button, {
              onClick: () => {
                action(editor);
              },
              className: (0, _clsx.default)('wiki-editor__button', {
                'is-active': isActive(editor)
              }),
              title: button.title
            }, icon);
          };
          exports.Button = Button;
        }
      });

      /********************************
      INTERNAL MODULE: ./toolbar/config
      ********************************/

      ims.set('./toolbar/config', {
        hash: 1949502201,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GROUPS = exports.BUTTONS = void 0;
          var React = require("react");
          var _reactIcons = require("@radix-ui/react-icons");
          // Button configuration
          const BUTTONS = exports.BUTTONS = [
          // Text formatting - standard behavior (toggle + extension name)
          {
            id: 'bold',
            label: 'B',
            title: 'Bold',
            group: 'text',
            icon: React.createElement(_reactIcons.FontBoldIcon, {
              width: 16,
              height: 16
            })
          }, {
            id: 'italic',
            label: 'I',
            title: 'Italic',
            group: 'text',
            icon: React.createElement(_reactIcons.FontItalicIcon, {
              width: 16,
              height: 16
            })
          }, {
            id: 'underline',
            label: 'U',
            title: 'Underline',
            group: 'text',
            icon: React.createElement(_reactIcons.UnderlineIcon, {
              width: 16,
              height: 16
            })
          }, {
            id: 'strike',
            label: 'S',
            title: 'Strikethrough',
            group: 'text',
            icon: React.createElement(_reactIcons.StrikethroughIcon, {
              width: 16,
              height: 16
            })
          },
          // Style selector - special component
          {
            id: 'text-style-selector',
            label: 'Styles',
            title: 'Text styles and headings',
            group: 'style-selector',
            isComponent: true,
            component: 'TextStyleSelector',
            icon: React.createElement(_reactIcons.TextIcon, {
              width: 16,
              height: 16
            })
          },
          // Lists - standard behavior
          {
            id: 'bulletList',
            label: '• List',
            title: 'Bullet list',
            group: 'lists',
            icon: React.createElement(_reactIcons.ListBulletIcon, {
              width: 16,
              height: 16
            })
          }, {
            id: 'orderedList',
            label: '1. List',
            title: 'Ordered list',
            group: 'lists',
            icon: React.createElement(_reactIcons.HamburgerMenuIcon, {
              width: 16,
              height: 16
            })
          }, {
            id: 'taskList',
            label: '☐ Tasks',
            title: 'Task list',
            group: 'lists',
            icon: React.createElement(_reactIcons.CheckboxIcon, {
              width: 16,
              height: 16
            })
          },
          // Blocks - standard behavior
          {
            id: 'blockquote',
            label: '" Quote',
            title: 'Quote',
            group: 'blocks',
            icon: React.createElement(_reactIcons.QuoteIcon, {
              width: 16,
              height: 16
            })
          }, {
            id: 'codeBlock',
            label: '<> Code',
            title: 'Code block',
            group: 'blocks',
            icon: React.createElement(_reactIcons.CodeIcon, {
              width: 16,
              height: 16
            })
          }, {
            id: 'horizontalRule',
            label: '—',
            title: 'Horizontal rule',
            group: 'blocks',
            // Special case: not toggle, is set
            actionType: 'set',
            icon: React.createElement(_reactIcons.DividerHorizontalIcon, {
              width: 16,
              height: 16
            })
          },
          // Formatting - special actions
          {
            id: 'clearFormatting',
            label: 'Clear',
            title: 'Clear formatting',
            group: 'formatting',
            icon: React.createElement(_reactIcons.EraserIcon, {
              width: 16,
              height: 16
            }),
            action: editor => {
              editor.chain().focus().clearNodes().unsetAllMarks().run();
            }
          }];
          const GROUPS = exports.GROUPS = {
            text: 'Text formatting',
            'style-selector': 'Text styles',
            lists: 'Lists',
            blocks: 'Blocks',
            formatting: 'Formatting'
          };
        }
      });

      /*****************************************
      INTERNAL MODULE: ./toolbar/editor-commands
      *****************************************/

      ims.set('./toolbar/editor-commands', {
        hash: 3646347350,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.editorCommands = void 0;
          // Editor command functions for each style
          const editorCommands = exports.editorCommands = {
            'Normal text': editor => {
              editor.chain().focus().setParagraph().run();
            },
            'Heading 1': editor => {
              editor.chain().focus().toggleHeading({
                level: 1
              }).run();
            },
            'Heading 2': editor => {
              editor.chain().focus().toggleHeading({
                level: 2
              }).run();
            },
            'Heading 3': editor => {
              editor.chain().focus().toggleHeading({
                level: 3
              }).run();
            },
            'Heading 4': editor => {
              editor.chain().focus().toggleHeading({
                level: 4
              }).run();
            },
            'Heading 5': editor => {
              editor.chain().focus().toggleHeading({
                level: 5
              }).run();
            },
            'Heading 6': editor => {
              editor.chain().focus().toggleHeading({
                level: 6
              }).run();
            },
            'Quote': editor => {
              editor.chain().focus().toggleBlockquote().run();
            },
            'Clear formatting': editor => {
              editor.chain().focus().clearNodes().unsetAllMarks().run();
            }
          };
        }
      });

      /*******************************
      INTERNAL MODULE: ./toolbar/index
      *******************************/

      ims.set('./toolbar/index', {
        hash: 3833581987,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          Object.defineProperty(exports, "BUTTONS", {
            enumerable: true,
            get: function () {
              return _config.BUTTONS;
            }
          });
          Object.defineProperty(exports, "Button", {
            enumerable: true,
            get: function () {
              return _button.Button;
            }
          });
          Object.defineProperty(exports, "GROUPS", {
            enumerable: true,
            get: function () {
              return _config.GROUPS;
            }
          });
          Object.defineProperty(exports, "Section", {
            enumerable: true,
            get: function () {
              return _section.Section;
            }
          });
          Object.defineProperty(exports, "StyleOption", {
            enumerable: true,
            get: function () {
              return _styleOption.StyleOption;
            }
          });
          Object.defineProperty(exports, "TextStyleSelector", {
            enumerable: true,
            get: function () {
              return _textStyleSelector.TextStyleSelector;
            }
          });
          Object.defineProperty(exports, "generateButtonAction", {
            enumerable: true,
            get: function () {
              return _actions.generateButtonAction;
            }
          });
          Object.defineProperty(exports, "generateButtonIcon", {
            enumerable: true,
            get: function () {
              return _actions.generateButtonIcon;
            }
          });
          Object.defineProperty(exports, "generateButtonIsActive", {
            enumerable: true,
            get: function () {
              return _actions.generateButtonIsActive;
            }
          });
          var _button = require("./button");
          var _section = require("./section");
          var _textStyleSelector = require("./text-style-selector");
          var _styleOption = require("./style-option");
          var _config = require("./config");
          var _actions = require("./actions");
        }
      });

      /*********************************
      INTERNAL MODULE: ./toolbar/section
      *********************************/

      ims.set('./toolbar/section', {
        hash: 963675817,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Section = void 0;
          var React = require("react");
          var _button = require("./button");
          var _textStyleSelector = require("./text-style-selector");
          var _config = require("./config");
          const Section = ({
            editor,
            group
          }) => {
            const buttons = _config.BUTTONS.filter(button => button.group === group);
            if (buttons.length === 0) return null;
            return React.createElement("div", {
              className: "wiki-editor__toolbar-section"
            }, buttons.map(button => {
              // If it's a special component, render it directly
              if (button.isComponent && button.component === 'TextStyleSelector') {
                return React.createElement(_textStyleSelector.TextStyleSelector, {
                  key: button.id,
                  editor: editor
                });
              }
              // Otherwise render as a regular button
              return React.createElement(_button.Button, {
                key: button.id,
                button: button,
                editor: editor
              });
            }));
          };
          exports.Section = Section;
        }
      });

      /**************************************
      INTERNAL MODULE: ./toolbar/style-option
      **************************************/

      ims.set('./toolbar/style-option', {
        hash: 3548884989,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StyleOption = void 0;
          var React = require("react");
          const StyleOption = ({
            option,
            editor,
            onClose
          }) => {
            // Extracted event handlers to avoid inline functions
            const handleClick = React.useCallback(event => {
              event.preventDefault();
              event.stopPropagation();
              if (editor && option.command) {
                option.command(editor);
                onClose();
              }
            }, [editor, option.command, onClose]);
            const handleKeyDown = React.useCallback(event => {
              if (event.key === 'Enter') {
                event.preventDefault();
                handleClick(event);
              }
            }, [handleClick]);
            return React.createElement("div", {
              className: 'wiki-editor__style-option',
              onClick: handleClick,
              onKeyDown: handleKeyDown,
              role: 'button',
              tabIndex: 0,
              "data-style": option.style
            }, React.createElement("span", {
              className: option.className
            }, option.label), React.createElement("kbd", null, option.shortcut));
          };
          exports.StyleOption = StyleOption;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./toolbar/text-style-selector
      *********************************************/

      ims.set('./toolbar/text-style-selector', {
        hash: 793893072,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextStyleSelector = void 0;
          var React = require("react");
          var _styleOption = require("./style-option");
          const TextStyleSelector = ({
            editor
          }) => {
            if (!editor) return null;
            const [isOpen, setIsOpen] = React.useState(false);
            const dropdownRef = React.useRef(null);
            // Simplified style options configuration
            const styleOptions = [{
              label: 'Normal text',
              style: 'Normal text',
              className: 'wiki-editor__style-normal',
              shortcut: 'Ctrl+Alt+0',
              command: editor => editor.chain().focus().setParagraph().run()
            },
            // Generate heading options dynamically
            ...Array.from({
              length: 6
            }, (_, i) => ({
              label: `Heading ${i + 1}`,
              style: `Heading ${i + 1}`,
              className: 'wiki-editor__style-heading',
              shortcut: `Ctrl+Alt+${i + 1}`,
              command: editor => editor.chain().focus().toggleHeading({
                level: i + 1
              }).run()
            }))];
            React.useEffect(() => {
              const handleClickOutside = event => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                  setIsOpen(false);
                }
              };
              const handleEscape = event => {
                if (event.key === 'Escape') {
                  setIsOpen(false);
                }
              };
              if (isOpen) {
                document.addEventListener('click', handleClickOutside);
                document.addEventListener('keydown', handleEscape);
              }
              return () => {
                document.removeEventListener('click', handleClickOutside);
                document.removeEventListener('keydown', handleEscape);
              };
            }, [isOpen]);
            const getCurrentStyle = () => {
              // Check for headings first
              for (let i = 1; i <= 6; i++) {
                if (editor.isActive('heading', {
                  level: i
                })) {
                  return `Heading ${i}`;
                }
              }
              return 'Normal text';
            };
            // Extracted function to avoid inline definition
            const toggleDropdown = React.useCallback(event => {
              event.preventDefault();
              event.stopPropagation();
              setIsOpen(!isOpen);
            }, [isOpen]);
            const closeDropdown = React.useCallback(() => {
              setIsOpen(false);
            }, []);
            return React.createElement("div", {
              className: 'wiki-editor__text-style-selector',
              ref: dropdownRef
            }, React.createElement("button", {
              className: 'wiki-editor__style-button',
              onClick: toggleDropdown,
              title: 'Estilos de texto',
              type: 'button'
            }, React.createElement("span", null, getCurrentStyle()), React.createElement("svg", {
              width: '12',
              height: '12',
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: '2'
            }, React.createElement("polyline", {
              points: '6,9 12,15 18,9'
            }))), isOpen && React.createElement("div", {
              className: 'wiki-editor__style-dropdown'
            }, styleOptions.map(option => React.createElement(_styleOption.StyleOption, {
              key: option.style,
              option: option,
              editor: editor,
              onClose: closeDropdown
            }))));
          };
          exports.TextStyleSelector = TextStyleSelector;
        }
      });

      /*******************************
      INTERNAL MODULE: ./toolbar/types
      *******************************/

      ims.set('./toolbar/types', {
        hash: 2606298311,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./types/index
      *****************************/

      ims.set('./types/index', {
        hash: 3067006149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************
      INTERNAL MODULE: ./utils/html-to-markdown
      ****************************************/

      ims.set('./utils/html-to-markdown', {
        hash: 2598365977,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.htmlToMarkdown = htmlToMarkdown;
          var _turndown = require("turndown");
          function htmlToMarkdown(html, options) {
            const turndown = new _turndown.default({
              headingStyle: options?.headingStyle || 'atx',
              codeBlockStyle: options?.codeBlockStyle || 'fenced',
              bulletListMarker: options?.bulletListMarker || '-',
              emDelimiter: options?.emDelimiter || '*',
              strongDelimiter: options?.strongDelimiter || '**',
              hr: options?.hr || '---'
            });
            // Remover elementos no deseados
            turndown.remove(['script', 'style']);
            // Agregar reglas personalizadas para mejor compatibilidad con Tiptap
            turndown.addRule('strikethrough', {
              filter: ['del', 's', 'strike'],
              replacement: function (content) {
                return '~~' + content + '~~';
              }
            });
            turndown.addRule('underline', {
              filter: ['u'],
              replacement: function (content) {
                return '<u>' + content + '</u>';
              }
            });
            turndown.addRule('taskList', {
              filter: function (node) {
                return node.type === 'checkbox' && node.parentNode?.nodeName === 'LI';
              },
              replacement: function (content, node) {
                const checked = node.checked;
                return checked ? '[x] ' : '[ ] ';
              }
            });
            return turndown.turndown(html);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./utils/markdown-to-html
      ****************************************/

      ims.set('./utils/markdown-to-html', {
        hash: 1145995654,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.markdownToHtml = markdownToHtml;
          var _marked = require("marked");
          function markdownToHtml(markdown, options) {
            // Configurar marked con las opciones
            _marked.marked.setOptions({
              gfm: options?.gfm ?? true,
              breaks: options?.breaks ?? false,
              headerIds: options?.headerIds ?? true,
              mangle: options?.mangle ?? false,
              headerPrefix: options?.headerPrefix ?? 'wiki-editor-'
            });
            // Configurar renderizadores personalizados para mejor compatibilidad con TipTap
            const renderer = new _marked.marked.Renderer();
            // Renderizador personalizado para listas de tareas
            renderer.listitem = function (text, task, checked) {
              if (task !== undefined) {
                // Es una lista de tareas
                const checkbox = checked ? '<input type="checkbox" checked disabled>' : '<input type="checkbox" disabled>';
                return `<li data-type="taskItem" data-checked="${checked}">${checkbox} ${text}</li>`;
              }
              // Lista normal
              return `<li>${text}</li>`;
            };
            // Renderizador personalizado para listas
            renderer.list = function (body, ordered) {
              const type = ordered ? 'ol' : 'ul';
              return `<${type}>${body}</${type}>`;
            };
            // Renderizador personalizado para código en línea
            renderer.codespan = function (code) {
              return `<code>${code}</code>`;
            };
            // Renderizador personalizado para bloques de código
            renderer.code = function (code, language) {
              if (language) {
                return `<pre><code class="language-${language}">${code}</code></pre>`;
              }
              return `<pre><code>${code}</code></pre>`;
            };
            // Renderizador personalizado para blockquotes
            renderer.blockquote = function (quote) {
              return `<blockquote>${quote}</blockquote>`;
            };
            // Renderizador personalizado para reglas horizontales
            renderer.hr = function () {
              return '<hr>';
            };
            // Aplicar el renderizador personalizado
            _marked.marked.use({
              renderer
            });
            try {
              // Convertir Markdown a HTML
              const html = (0, _marked.marked)(markdown);
              return html;
            } catch (error) {
              console.error('Error converting markdown to HTML:', error);
              // En caso de error, devolver el markdown original envuelto en un párrafo
              return `<p>${markdown}</p>`;
            }
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./wiki-editor-ui
      ********************************/

      ims.set('./wiki-editor-ui', {
        hash: 2912705284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WikiEditorUI = void 0;
          var _extensionBlockquote = require("@tiptap/extension-blockquote");
          var _extensionBulletList = require("@tiptap/extension-bullet-list");
          var _extensionCodeBlock = require("@tiptap/extension-code-block");
          var _extensionHorizontalRule = require("@tiptap/extension-horizontal-rule");
          var _extensionListItem = require("@tiptap/extension-list-item");
          var _extensionOrderedList = require("@tiptap/extension-ordered-list");
          var _extensionTaskItem = require("@tiptap/extension-task-item");
          var _extensionTaskList = require("@tiptap/extension-task-list");
          var _extensionUnderline = require("@tiptap/extension-underline");
          var _react = require("@tiptap/react");
          var _starterKit = require("@tiptap/starter-kit");
          var React = require("react");
          var _menus = require("./menus");
          /*bundle*/
          const WikiEditorUI = ({
            onChange,
            initialContent = '',
            placeholder = 'Escribe algo...',
            className = ''
          }) => {
            const [showFloatingMenu, setShowFloatingMenu] = React.useState(false);
            const [floatingMenuPosition, setFloatingMenuPosition] = React.useState({
              x: 0,
              y: 0
            });
            const [showBubbleMenu, setShowBubbleMenu] = React.useState(false);
            const [bubbleMenuPosition, setBubbleMenuPosition] = React.useState({
              x: 0,
              y: 0
            });
            const editor = (0, _react.useEditor)({
              extensions: [_starterKit.default, _extensionListItem.default, _extensionBulletList.default, _extensionOrderedList.default, _extensionUnderline.default, _extensionTaskList.default, _extensionTaskItem.default, _extensionCodeBlock.default, _extensionBlockquote.default, _extensionHorizontalRule.default],
              content: initialContent,
              editorProps: {
                attributes: {
                  class: `wiki-editor__content ${className}`,
                  placeholder
                }
              },
              onUpdate: ({
                editor
              }) => {
                const html = editor.getHTML();
                onChange?.(html);
              },
              onSelectionUpdate: ({
                editor
              }) => {
                const {
                  selection
                } = editor.state;
                const {
                  $from,
                  $to
                } = selection;
                const hasSelection = $from.pos !== $to.pos;
                if (!hasSelection) {
                  setShowFloatingMenu(false);
                  setShowBubbleMenu(false);
                  return;
                }
                // Show bubble menu for selected text
                const fromCoords = editor.view.coordsAtPos($from.pos);
                const centerX = fromCoords.left;
                setBubbleMenuPosition({
                  x: centerX,
                  y: fromCoords.top - 60
                });
                setShowBubbleMenu(true);
                setShowFloatingMenu(false);
              }
            });
            return React.createElement("div", {
              className: "wiki-editor__wrapper"
            }, React.createElement(_react.EditorContent, {
              editor: editor
            }), editor && showBubbleMenu && React.createElement("div", {
              className: "wiki-editor__bubble-menu",
              style: {
                position: 'absolute',
                left: bubbleMenuPosition.x,
                top: bubbleMenuPosition.y,
                zIndex: 1000,
                transform: 'translateX(-50%)'
              }
            }, React.createElement(_menus.BubbleMenuContent, {
              editor: editor
            })), editor && showFloatingMenu && React.createElement("div", {
              className: "wiki-editor__floating-menu",
              style: {
                position: 'absolute',
                left: floatingMenuPosition.x,
                top: floatingMenuPosition.y,
                zIndex: 1000,
                transform: 'translateX(-50%)'
              }
            }, React.createElement(_menus.FloatingMenuContent, {
              editor: editor
            })));
          };
          exports.WikiEditorUI = WikiEditorUI;
        }
      });

      /*****************************
      INTERNAL MODULE: ./wiki-editor
      *****************************/

      ims.set('./wiki-editor', {
        hash: 3678371132,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WikiEditor = void 0;
          var _extensionBlockquote = require("@tiptap/extension-blockquote");
          var _extensionBulletList = require("@tiptap/extension-bullet-list");
          var _extensionCodeBlock = require("@tiptap/extension-code-block");
          var _extensionHorizontalRule = require("@tiptap/extension-horizontal-rule");
          var _extensionListItem = require("@tiptap/extension-list-item");
          var _extensionOrderedList = require("@tiptap/extension-ordered-list");
          var _extensionTaskItem = require("@tiptap/extension-task-item");
          var _extensionTaskList = require("@tiptap/extension-task-list");
          var _extensionUnderline = require("@tiptap/extension-underline");
          var _react = require("@tiptap/react");
          var _starterKit = require("@tiptap/starter-kit");
          var _clsx = require("clsx");
          var React = require("react");
          var _toolbar = require("./toolbar");
          var _htmlToMarkdown = require("./utils/html-to-markdown");
          var _markdownToHtml = require("./utils/markdown-to-html");
          /*bundle*/
          const WikiEditor = ({
            name,
            onChange,
            initialContent = '',
            placeholder = 'Escribe algo...',
            className = '',
            showToolbar = true,
            outputFormat = 'markdown',
            // Por defecto Markdown como solicitaste
            markdownOptions,
            markdownToHtmlOptions
          }) => {
            const [contentSet, setContentSet] = React.useState(false);
            const editor = (0, _react.useEditor)({
              extensions: [_starterKit.default, _extensionListItem.default, _extensionBulletList.default, _extensionOrderedList.default, _extensionUnderline.default, _extensionTaskList.default, _extensionTaskItem.default, _extensionCodeBlock.default, _extensionBlockquote.default, _extensionHorizontalRule.default],
              content: initialContent,
              onCreate: ({
                editor
              }) => {
                // Ensure initial content is set when editor is created
                if (initialContent && !contentSet) {
                  // Convert content based on output format
                  let contentToSet = initialContent;
                  if (outputFormat === 'markdown') {
                    // If output is markdown, convert markdown to HTML for TipTap
                    contentToSet = (0, _markdownToHtml.markdownToHtml)(initialContent, markdownToHtmlOptions);
                  }
                  editor.commands.setContent(contentToSet);
                  setContentSet(true);
                }
              },
              editorProps: {
                attributes: {
                  class: (0, _clsx.default)('wiki-editor__content', className),
                  placeholder,
                  ...(name && {
                    'data-name': name
                  })
                }
              },
              onUpdate: ({
                editor
              }) => {
                const html = editor.getHTML();
                const value = outputFormat === 'markdown' ? (0, _htmlToMarkdown.htmlToMarkdown)(html, markdownOptions) : html;
                const type = outputFormat === 'markdown' ? 'text/markdown' : 'text/html';
                const eventData = {
                  target: {
                    name: name || '',
                    value,
                    type
                  },
                  currentTarget: {
                    name: name || '',
                    value,
                    type
                  }
                };
                onChange?.(eventData);
              }
            });
            // Set initial content when editor is ready and when initialContent changes
            React.useEffect(() => {
              if (editor && initialContent && editor.isEditable && !contentSet) {
                // Use setTimeout to ensure editor is fully initialized
                setTimeout(() => {
                  try {
                    // Convert content based on output format
                    let contentToSet = initialContent;
                    if (outputFormat === 'markdown') {
                      // If output is markdown, convert markdown to HTML for TipTap
                      contentToSet = (0, _markdownToHtml.markdownToHtml)(initialContent, markdownToHtmlOptions);
                    }
                    editor.commands.setContent(contentToSet);
                    setContentSet(true);
                    console.log('Content set successfully:', initialContent);
                  } catch (error) {
                    console.error('Error setting initial content:', error);
                  }
                }, 0);
              }
            }, [editor, initialContent, contentSet, outputFormat, markdownToHtmlOptions]);
            return React.createElement("div", {
              className: "wiki-editor"
            }, showToolbar && editor && React.createElement("div", {
              className: "wiki-editor__toolbar"
            }, React.createElement(_toolbar.Section, {
              editor: editor,
              group: "text"
            }), React.createElement("div", {
              className: "wiki-editor__toolbar-divider"
            }), React.createElement(_toolbar.Section, {
              editor: editor,
              group: "style-selector"
            }), React.createElement("div", {
              className: "wiki-editor__toolbar-divider"
            }), React.createElement(_toolbar.Section, {
              editor: editor,
              group: "lists"
            }), React.createElement("div", {
              className: "wiki-editor__toolbar-divider"
            }), React.createElement(_toolbar.Section, {
              editor: editor,
              group: "blocks"
            }), React.createElement("div", {
              className: "wiki-editor__toolbar-divider"
            }), React.createElement(_toolbar.Section, {
              editor: editor,
              group: "formatting"
            })), React.createElement(_react.EditorContent, {
              editor: editor
            }));
          };
          exports.WikiEditor = WikiEditor;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./wiki-editor-ui",
        "from": "WikiEditorUI",
        "name": "WikiEditorUI"
      }, {
        "im": "./wiki-editor",
        "from": "WikiEditor",
        "name": "WikiEditor"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'WikiEditorUI') && _export("WikiEditorUI", WikiEditorUI = require ? require('./wiki-editor-ui').WikiEditorUI : value);
        (require || prop === 'WikiEditor') && _export("WikiEditor", WikiEditor = require ? require('./wiki-editor').WikiEditor : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfY2xzeCIsIkJ1YmJsZU1lbnVDb250ZW50IiwiZWRpdG9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjaGFpbiIsImZvY3VzIiwidG9nZ2xlQm9sZCIsInJ1biIsImRlZmF1bHQiLCJpc0FjdGl2ZSIsInRpdGxlIiwidG9nZ2xlSXRhbGljIiwidG9nZ2xlVW5kZXJsaW5lIiwidG9nZ2xlU3RyaWtlIiwidG9nZ2xlQ29kZSIsImV4cG9ydHMiLCJGbG9hdGluZ01lbnVDb250ZW50IiwiaW5zZXJ0QmxvY2siLCJ0eXBlIiwidG9nZ2xlSGVhZGluZyIsImxldmVsIiwidG9nZ2xlQnVsbGV0TGlzdCIsInRvZ2dsZU9yZGVyZWRMaXN0IiwidG9nZ2xlVGFza0xpc3QiLCJ0b2dnbGVCbG9ja3F1b3RlIiwidG9nZ2xlQ29kZUJsb2NrIiwic2V0SG9yaXpvbnRhbFJ1bGUiLCJfYnViYmxlIiwiX2Zsb2F0aW5nIiwiZ2VuZXJhdGVCdXR0b25BY3Rpb24iLCJidXR0b24iLCJhY3Rpb24iLCJhY3Rpb25UeXBlIiwiZXh0ZW5zaW9uTmFtZSIsImlkIiwiY29tbWFuZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZW5lcmF0ZUJ1dHRvbklzQWN0aXZlIiwiZ2VuZXJhdGVCdXR0b25JY29uIiwiaWNvbiIsImxhYmVsIiwiX2FjdGlvbnMiLCJfY29tcG9uZW50cyIsInVzZUVkaXRvclN1YnNjcmlwdGlvbiIsImZvcmNlVXBkYXRlIiwidXNlUmVkdWNlciIsIngiLCJ1c2VFZmZlY3QiLCJ1cGRhdGVMaXN0ZW5lciIsIm9uIiwib2ZmIiwiQnV0dG9uIiwiX3JlYWN0SWNvbnMiLCJCVVRUT05TIiwiZ3JvdXAiLCJGb250Qm9sZEljb24iLCJ3aWR0aCIsImhlaWdodCIsIkZvbnRJdGFsaWNJY29uIiwiVW5kZXJsaW5lSWNvbiIsIlN0cmlrZXRocm91Z2hJY29uIiwiaXNDb21wb25lbnQiLCJjb21wb25lbnQiLCJUZXh0SWNvbiIsIkxpc3RCdWxsZXRJY29uIiwiSGFtYnVyZ2VyTWVudUljb24iLCJDaGVja2JveEljb24iLCJRdW90ZUljb24iLCJDb2RlSWNvbiIsIkRpdmlkZXJIb3Jpem9udGFsSWNvbiIsIkVyYXNlckljb24iLCJjbGVhck5vZGVzIiwidW5zZXRBbGxNYXJrcyIsIkdST1VQUyIsInRleHQiLCJsaXN0cyIsImJsb2NrcyIsImZvcm1hdHRpbmciLCJlZGl0b3JDb21tYW5kcyIsInNldFBhcmFncmFwaCIsIl9idXR0b24iLCJfc2VjdGlvbiIsIl90ZXh0U3R5bGVTZWxlY3RvciIsIl9zdHlsZU9wdGlvbiIsIl9jb25maWciLCJTZWN0aW9uIiwiYnV0dG9ucyIsImZpbHRlciIsImxlbmd0aCIsIm1hcCIsIlRleHRTdHlsZVNlbGVjdG9yIiwia2V5IiwiU3R5bGVPcHRpb24iLCJvcHRpb24iLCJvbkNsb3NlIiwiaGFuZGxlQ2xpY2siLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVLZXlEb3duIiwib25LZXlEb3duIiwicm9sZSIsInRhYkluZGV4Iiwic3R5bGUiLCJzaG9ydGN1dCIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZVN0YXRlIiwiZHJvcGRvd25SZWYiLCJ1c2VSZWYiLCJzdHlsZU9wdGlvbnMiLCJBcnJheSIsImZyb20iLCJfIiwiaSIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImhhbmRsZUVzY2FwZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRDdXJyZW50U3R5bGUiLCJ0b2dnbGVEcm9wZG93biIsImNsb3NlRHJvcGRvd24iLCJyZWYiLCJ2aWV3Qm94IiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwicG9pbnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl90dXJuZG93biIsImh0bWxUb01hcmtkb3duIiwiaHRtbCIsIm9wdGlvbnMiLCJ0dXJuZG93biIsImhlYWRpbmdTdHlsZSIsImNvZGVCbG9ja1N0eWxlIiwiYnVsbGV0TGlzdE1hcmtlciIsImVtRGVsaW1pdGVyIiwic3Ryb25nRGVsaW1pdGVyIiwiaHIiLCJyZW1vdmUiLCJhZGRSdWxlIiwicmVwbGFjZW1lbnQiLCJjb250ZW50Iiwibm9kZSIsInBhcmVudE5vZGUiLCJub2RlTmFtZSIsImNoZWNrZWQiLCJfbWFya2VkIiwibWFya2Rvd25Ub0h0bWwiLCJtYXJrZG93biIsIm1hcmtlZCIsInNldE9wdGlvbnMiLCJnZm0iLCJicmVha3MiLCJoZWFkZXJJZHMiLCJtYW5nbGUiLCJoZWFkZXJQcmVmaXgiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwibGlzdGl0ZW0iLCJ0YXNrIiwidW5kZWZpbmVkIiwiY2hlY2tib3giLCJsaXN0IiwiYm9keSIsIm9yZGVyZWQiLCJjb2Rlc3BhbiIsImNvZGUiLCJsYW5ndWFnZSIsImJsb2NrcXVvdGUiLCJxdW90ZSIsInVzZSIsImVycm9yIiwiY29uc29sZSIsIl9leHRlbnNpb25CbG9ja3F1b3RlIiwiX2V4dGVuc2lvbkJ1bGxldExpc3QiLCJfZXh0ZW5zaW9uQ29kZUJsb2NrIiwiX2V4dGVuc2lvbkhvcml6b250YWxSdWxlIiwiX2V4dGVuc2lvbkxpc3RJdGVtIiwiX2V4dGVuc2lvbk9yZGVyZWRMaXN0IiwiX2V4dGVuc2lvblRhc2tJdGVtIiwiX2V4dGVuc2lvblRhc2tMaXN0IiwiX2V4dGVuc2lvblVuZGVybGluZSIsIl9yZWFjdCIsIl9zdGFydGVyS2l0IiwiX21lbnVzIiwiV2lraUVkaXRvclVJIiwib25DaGFuZ2UiLCJpbml0aWFsQ29udGVudCIsInBsYWNlaG9sZGVyIiwic2hvd0Zsb2F0aW5nTWVudSIsInNldFNob3dGbG9hdGluZ01lbnUiLCJmbG9hdGluZ01lbnVQb3NpdGlvbiIsInNldEZsb2F0aW5nTWVudVBvc2l0aW9uIiwieSIsInNob3dCdWJibGVNZW51Iiwic2V0U2hvd0J1YmJsZU1lbnUiLCJidWJibGVNZW51UG9zaXRpb24iLCJzZXRCdWJibGVNZW51UG9zaXRpb24iLCJ1c2VFZGl0b3IiLCJleHRlbnNpb25zIiwiZWRpdG9yUHJvcHMiLCJhdHRyaWJ1dGVzIiwiY2xhc3MiLCJvblVwZGF0ZSIsImdldEhUTUwiLCJvblNlbGVjdGlvblVwZGF0ZSIsInNlbGVjdGlvbiIsInN0YXRlIiwiJGZyb20iLCIkdG8iLCJoYXNTZWxlY3Rpb24iLCJwb3MiLCJmcm9tQ29vcmRzIiwidmlldyIsImNvb3Jkc0F0UG9zIiwiY2VudGVyWCIsImxlZnQiLCJ0b3AiLCJFZGl0b3JDb250ZW50IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0cmFuc2Zvcm0iLCJfdG9vbGJhciIsIl9odG1sVG9NYXJrZG93biIsIl9tYXJrZG93blRvSHRtbCIsIldpa2lFZGl0b3IiLCJuYW1lIiwic2hvd1Rvb2xiYXIiLCJvdXRwdXRGb3JtYXQiLCJtYXJrZG93bk9wdGlvbnMiLCJtYXJrZG93blRvSHRtbE9wdGlvbnMiLCJjb250ZW50U2V0Iiwic2V0Q29udGVudFNldCIsIm9uQ3JlYXRlIiwiY29udGVudFRvU2V0IiwiY29tbWFuZHMiLCJzZXRDb250ZW50IiwiZXZlbnREYXRhIiwiY3VycmVudFRhcmdldCIsImlzRWRpdGFibGUiLCJzZXRUaW1lb3V0IiwibG9nIl0sInNvdXJjZXMiOlsiLy90cy9tZW51cy9idWJibGUudHN4IiwiLy90cy9tZW51cy9mbG9hdGluZy50c3giLCIvL3RzL21lbnVzL2luZGV4LnRzIiwiLy90cy90b29sYmFyL2FjdGlvbnMudHMiLCIvL3RzL3Rvb2xiYXIvYnV0dG9uLnRzeCIsIi8vdHMvdG9vbGJhci9jb25maWcudHN4IiwiLy90cy90b29sYmFyL2VkaXRvci1jb21tYW5kcy50cyIsIi8vdHMvdG9vbGJhci9pbmRleC50cyIsIi8vdHMvdG9vbGJhci9zZWN0aW9uLnRzeCIsIi8vdHMvdG9vbGJhci9zdHlsZS1vcHRpb24udHN4IiwiLy90cy90b29sYmFyL3RleHQtc3R5bGUtc2VsZWN0b3IudHN4IiwiLy90eXBlcy50cy8iLCIvL2luZGV4LnRzLyIsIi8vdHMvdXRpbHMvaHRtbC10by1tYXJrZG93bi50cyIsIi8vdHMvdXRpbHMvbWFya2Rvd24tdG8taHRtbC50cyIsIi8vdHMvd2lraS1lZGl0b3ItdWkudHN4IiwiLy90cy93aWtpLWVkaXRvci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBT08sTUFBTUUsaUJBQWlCLEdBQUdBLENBQUM7WUFBRUM7VUFBTSxDQUFvQixLQUFpQjtZQUM5RSxJQUFJLENBQUNBLE1BQU0sRUFBRSxPQUFPLElBQUk7WUFFeEIsT0FDQ0osS0FBQSxDQUFBSyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrQyxHQUNoRE4sS0FBQSxDQUFBSyxhQUFBO2NBQ0NFLE9BQU8sRUFBRUEsQ0FBQSxLQUFNSCxNQUFNLENBQUNJLEtBQUssRUFBRSxDQUFDQyxLQUFLLEVBQUUsQ0FBQ0MsVUFBVSxFQUFFLENBQUNDLEdBQUcsRUFBRTtjQUN4REwsU0FBUyxFQUFFLElBQUFKLEtBQUEsQ0FBQVUsT0FBSSxFQUFDLHFCQUFxQixFQUFFO2dCQUN0QyxXQUFXLEVBQUVSLE1BQU0sQ0FBQ1MsUUFBUSxDQUFDLE1BQU07ZUFDbkMsQ0FBQztjQUNGQyxLQUFLLEVBQUM7WUFBUyxHQUVmZCxLQUFBLENBQUFLLGFBQUEscUJBQWtCLENBQ1YsRUFFVEwsS0FBQSxDQUFBSyxhQUFBO2NBQ0NFLE9BQU8sRUFBRUEsQ0FBQSxLQUFNSCxNQUFNLENBQUNJLEtBQUssRUFB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