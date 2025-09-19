System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "clsx@2.1.1", "@tiptap/react@3.2.0", "pragmate-ui@1.0.8/components", "@radix-ui/react-icons@1.3.2", "turndown@7.2.0", "marked@5.1.2", "@tiptap/extension-blockquote@3.2.0", "@tiptap/extension-bullet-list@3.2.0", "@tiptap/extension-code-block@3.2.0", "@tiptap/extension-horizontal-rule@3.2.0", "@tiptap/extension-list-item@3.2.0", "@tiptap/extension-ordered-list@3.2.0", "@tiptap/extension-task-item@3.2.0", "@tiptap/extension-task-list@3.2.0", "@tiptap/extension-underline@3.2.0", "@tiptap/starter-kit@3.2.0"], function (_export, _context) {
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
    }, function (_pragmateUi108Components) {
      dependency_5 = _pragmateUi108Components;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.8"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/rvd", "0.6.2"]]);
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
        hash: 290028415,
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
              return editor => {
                editor.chain().focus().setHorizontalRule().run();
              };
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
        hash: 1384135562,
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
              if (!editor) return;
              const updateListener = () => {
                forceUpdate();
              };
              // Listen to all relevant editor events
              editor.on('update', updateListener);
              editor.on('selectionUpdate', updateListener);
              editor.on('transaction', updateListener);
              editor.on('focus', updateListener);
              editor.on('blur', updateListener);
              return () => {
                editor.off('update', updateListener);
                editor.off('selectionUpdate', updateListener);
                editor.off('transaction', updateListener);
                editor.off('focus', updateListener);
                editor.off('blur', updateListener);
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
            // Get the active state
            const activeState = isActive(editor);
            return React.createElement(_components.Button, {
              onClick: () => {
                action(editor);
              },
              className: (0, _clsx.default)('wiki-editor__button', {
                'is-active': activeState
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
        hash: 2988702136,
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
          },
          // Debug button to test active state
          {
            id: 'debug',
            label: 'Debug',
            title: 'Debug button to test active state',
            group: 'formatting',
            icon: React.createElement(_reactIcons.TextIcon, {
              width: 16,
              height: 16
            }),
            isActive: editor => {
              // Test if bold is active
              return editor.isActive('bold');
            },
            action: editor => {
              // Toggle bold to test
              editor.chain().focus().toggleBold().run();
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
        hash: 1623463070,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WikiEditor = void 0;
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
              extensions: [_starterKit.default, _extensionUnderline.default, _extensionTaskList.default, _extensionTaskItem.default],
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
              onSelectionUpdate: ({
                editor
              }) => {
                // Force toolbar update when selection changes
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfY2xzeCIsIkJ1YmJsZU1lbnVDb250ZW50IiwiZWRpdG9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjaGFpbiIsImZvY3VzIiwidG9nZ2xlQm9sZCIsInJ1biIsImRlZmF1bHQiLCJpc0FjdGl2ZSIsInRpdGxlIiwidG9nZ2xlSXRhbGljIiwidG9nZ2xlVW5kZXJsaW5lIiwidG9nZ2xlU3RyaWtlIiwidG9nZ2xlQ29kZSIsImV4cG9ydHMiLCJGbG9hdGluZ01lbnVDb250ZW50IiwiaW5zZXJ0QmxvY2siLCJ0eXBlIiwidG9nZ2xlSGVhZGluZyIsImxldmVsIiwidG9nZ2xlQnVsbGV0TGlzdCIsInRvZ2dsZU9yZGVyZWRMaXN0IiwidG9nZ2xlVGFza0xpc3QiLCJ0b2dnbGVCbG9ja3F1b3RlIiwidG9nZ2xlQ29kZUJsb2NrIiwic2V0SG9yaXpvbnRhbFJ1bGUiLCJfYnViYmxlIiwiX2Zsb2F0aW5nIiwiZ2VuZXJhdGVCdXR0b25BY3Rpb24iLCJidXR0b24iLCJhY3Rpb24iLCJhY3Rpb25UeXBlIiwiZXh0ZW5zaW9uTmFtZSIsImlkIiwiY29tbWFuZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZW5lcmF0ZUJ1dHRvbklzQWN0aXZlIiwiZ2VuZXJhdGVCdXR0b25JY29uIiwiaWNvbiIsImxhYmVsIiwiX2FjdGlvbnMiLCJfY29tcG9uZW50cyIsInVzZUVkaXRvclN1YnNjcmlwdGlvbiIsImZvcmNlVXBkYXRlIiwidXNlUmVkdWNlciIsIngiLCJ1c2VFZmZlY3QiLCJ1cGRhdGVMaXN0ZW5lciIsIm9uIiwib2ZmIiwiQnV0dG9uIiwiYWN0aXZlU3RhdGUiLCJfcmVhY3RJY29ucyIsIkJVVFRPTlMiLCJncm91cCIsIkZvbnRCb2xkSWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiRm9udEl0YWxpY0ljb24iLCJVbmRlcmxpbmVJY29uIiwiU3RyaWtldGhyb3VnaEljb24iLCJpc0NvbXBvbmVudCIsImNvbXBvbmVudCIsIlRleHRJY29uIiwiTGlzdEJ1bGxldEljb24iLCJIYW1idXJnZXJNZW51SWNvbiIsIkNoZWNrYm94SWNvbiIsIlF1b3RlSWNvbiIsIkNvZGVJY29uIiwiRGl2aWRlckhvcml6b250YWxJY29uIiwiRXJhc2VySWNvbiIsImNsZWFyTm9kZXMiLCJ1bnNldEFsbE1hcmtzIiwiR1JPVVBTIiwidGV4dCIsImxpc3RzIiwiYmxvY2tzIiwiZm9ybWF0dGluZyIsImVkaXRvckNvbW1hbmRzIiwic2V0UGFyYWdyYXBoIiwiX2J1dHRvbiIsIl9zZWN0aW9uIiwiX3RleHRTdHlsZVNlbGVjdG9yIiwiX3N0eWxlT3B0aW9uIiwiX2NvbmZpZyIsIlNlY3Rpb24iLCJidXR0b25zIiwiZmlsdGVyIiwibGVuZ3RoIiwibWFwIiwiVGV4dFN0eWxlU2VsZWN0b3IiLCJrZXkiLCJTdHlsZU9wdGlvbiIsIm9wdGlvbiIsIm9uQ2xvc2UiLCJoYW5kbGVDbGljayIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUtleURvd24iLCJvbktleURvd24iLCJyb2xlIiwidGFiSW5kZXgiLCJzdHlsZSIsInNob3J0Y3V0IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlU3RhdGUiLCJkcm9wZG93blJlZiIsInVzZVJlZiIsInN0eWxlT3B0aW9ucyIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiaGFuZGxlRXNjYXBlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldEN1cnJlbnRTdHlsZSIsInRvZ2dsZURyb3Bkb3duIiwiY2xvc2VEcm9wZG93biIsInJlZiIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJwb2ludHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX3R1cm5kb3duIiwiaHRtbFRvTWFya2Rvd24iLCJodG1sIiwib3B0aW9ucyIsInR1cm5kb3duIiwiaGVhZGluZ1N0eWxlIiwiY29kZUJsb2NrU3R5bGUiLCJidWxsZXRMaXN0TWFya2VyIiwiZW1EZWxpbWl0ZXIiLCJzdHJvbmdEZWxpbWl0ZXIiLCJociIsInJlbW92ZSIsImFkZFJ1bGUiLCJyZXBsYWNlbWVudCIsImNvbnRlbnQiLCJub2RlIiwicGFyZW50Tm9kZSIsIm5vZGVOYW1lIiwiY2hlY2tlZCIsIl9tYXJrZWQiLCJtYXJrZG93blRvSHRtbCIsIm1hcmtkb3duIiwibWFya2VkIiwic2V0T3B0aW9ucyIsImdmbSIsImJyZWFrcyIsImhlYWRlcklkcyIsIm1hbmdsZSIsImhlYWRlclByZWZpeCIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJsaXN0aXRlbSIsInRhc2siLCJ1bmRlZmluZWQiLCJjaGVja2JveCIsImxpc3QiLCJib2R5Iiwib3JkZXJlZCIsImNvZGVzcGFuIiwiY29kZSIsImxhbmd1YWdlIiwiYmxvY2txdW90ZSIsInF1b3RlIiwidXNlIiwiZXJyb3IiLCJjb25zb2xlIiwiX2V4dGVuc2lvbkJsb2NrcXVvdGUiLCJfZXh0ZW5zaW9uQnVsbGV0TGlzdCIsIl9leHRlbnNpb25Db2RlQmxvY2siLCJfZXh0ZW5zaW9uSG9yaXpvbnRhbFJ1bGUiLCJfZXh0ZW5zaW9uTGlzdEl0ZW0iLCJfZXh0ZW5zaW9uT3JkZXJlZExpc3QiLCJfZXh0ZW5zaW9uVGFza0l0ZW0iLCJfZXh0ZW5zaW9uVGFza0xpc3QiLCJfZXh0ZW5zaW9uVW5kZXJsaW5lIiwiX3JlYWN0IiwiX3N0YXJ0ZXJLaXQiLCJfbWVudXMiLCJXaWtpRWRpdG9yVUkiLCJvbkNoYW5nZSIsImluaXRpYWxDb250ZW50IiwicGxhY2Vob2xkZXIiLCJzaG93RmxvYXRpbmdNZW51Iiwic2V0U2hvd0Zsb2F0aW5nTWVudSIsImZsb2F0aW5nTWVudVBvc2l0aW9uIiwic2V0RmxvYXRpbmdNZW51UG9zaXRpb24iLCJ5Iiwic2hvd0J1YmJsZU1lbnUiLCJzZXRTaG93QnViYmxlTWVudSIsImJ1YmJsZU1lbnVQb3NpdGlvbiIsInNldEJ1YmJsZU1lbnVQb3NpdGlvbiIsInVzZUVkaXRvciIsImV4dGVuc2lvbnMiLCJlZGl0b3JQcm9wcyIsImF0dHJpYnV0ZXMiLCJjbGFzcyIsIm9uVXBkYXRlIiwiZ2V0SFRNTCIsIm9uU2VsZWN0aW9uVXBkYXRlIiwic2VsZWN0aW9uIiwic3RhdGUiLCIkZnJvbSIsIiR0byIsImhhc1NlbGVjdGlvbiIsInBvcyIsImZyb21Db29yZHMiLCJ2aWV3IiwiY29vcmRzQXRQb3MiLCJjZW50ZXJYIiwibGVmdCIsInRvcCIsIkVkaXRvckNvbnRlbnQiLCJwb3NpdGlvbiIsInpJbmRleCIsInRyYW5zZm9ybSIsIl90b29sYmFyIiwiX2h0bWxUb01hcmtkb3duIiwiX21hcmtkb3duVG9IdG1sIiwiV2lraUVkaXRvciIsIm5hbWUiLCJzaG93VG9vbGJhciIsIm91dHB1dEZvcm1hdCIsIm1hcmtkb3duT3B0aW9ucyIsIm1hcmtkb3duVG9IdG1sT3B0aW9ucyIsImNvbnRlbnRTZXQiLCJzZXRDb250ZW50U2V0Iiwib25DcmVhdGUiLCJjb250ZW50VG9TZXQiLCJjb21tYW5kcyIsInNldENvbnRlbnQiLCJldmVudERhdGEiLCJjdXJyZW50VGFyZ2V0IiwiaXNFZGl0YWJsZSIsInNldFRpbWVvdXQiXSwic291cmNlcyI6WyIvL3RzL21lbnVzL2J1YmJsZS50c3giLCIvL3RzL21lbnVzL2Zsb2F0aW5nLnRzeCIsIi8vdHMvbWVudXMvaW5kZXgudHMiLCIvL3RzL3Rvb2xiYXIvYWN0aW9ucy50cyIsIi8vdHMvdG9vbGJhci9idXR0b24udHN4IiwiLy90cy90b29sYmFyL2NvbmZpZy50c3giLCIvL3RzL3Rvb2xiYXIvZWRpdG9yLWNvbW1hbmRzLnRzIiwiLy90cy90b29sYmFyL2luZGV4LnRzIiwiLy90cy90b29sYmFyL3NlY3Rpb24udHN4IiwiLy90cy90b29sYmFyL3N0eWxlLW9wdGlvbi50c3giLCIvL3RzL3Rvb2xiYXIvdGV4dC1zdHlsZS1zZWxlY3Rvci50c3giLCIvL3R5cGVzLnRzLyIsIi8vaW5kZXgudHMvIiwiLy90cy91dGlscy9odG1sLXRvLW1hcmtkb3duLnRzIiwiLy90cy91dGlscy9tYXJrZG93bi10by1odG1sLnRzIiwiLy90cy93aWtpLWVkaXRvci11aS50c3giLCIvL3RzL3dpa2ktZWRpdG9yLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFPTyxNQUFNRSxpQkFBaUIsR0FBR0EsQ0FBQztZQUFFQztVQUFNLENBQW9CLEtBQWlCO1lBQzlFLElBQUksQ0FBQ0EsTUFBTSxFQUFFLE9BQU8sSUFBSTtZQUV4QixPQUNDSixLQUFBLENBQUFLLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtDLEdBQ2hETixLQUFBLENBQUFLLGFBQUE7Y0FDQ0UsT0FBTyxFQUFFQSxDQUFBLEtBQU1ILE1BQU0sQ0FBQ0ksS0FBSyxFQUFFLENBQUNDLEtBQUssRUFBRSxDQUFDQyxVQUFVLEVBQUUsQ0FBQ0MsR0FBRyxFQUFFO2NBQ3hETCxTQUFTLEVBQUUsSUFBQUosS0FBQSxDQUFBVSxPQUFJLEVBQUMscUJBQXFCLEVBQUU7Z0JBQ3RDLFdBQVcsRUFBRVIsTUFBTSxDQUFDUyxRQUFRLENBQUMsTUFBTTtlQUNuQyxDQUFDO2NBQ0ZDLEtBQUssRUFBQztZQUFTLEdBRWZkLEtBQUEsQ0FBQUssYUFBQSxxQkFBa0IsQ0FDVixFQUVUTCxLQUFBLENBQUFLLGFBQUE7Y0FDQ0UsT0FBTyxFQUFFQSxDQUFBLEtBQU1ILE1BQU0sQ0FBQ0ks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