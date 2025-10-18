System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "@tiptap/react@3.2.0", "@tiptap/extension-task-item@3.2.0", "@tiptap/extension-task-list@3.2.0", "@tiptap/starter-kit@3.2.0", "@tiptap/extension-image@3.6.2", "clsx@2.1.1", "@radix-ui/react-icons@1.3.2", "pragmate-ui@1.0.8/components", "turndown@7.2.0", "marked@5.1.2", "@tiptap/extension-blockquote@3.2.0", "@tiptap/extension-bullet-list@3.2.0", "@tiptap/extension-code-block@3.2.0", "@tiptap/extension-horizontal-rule@3.2.0", "@tiptap/extension-list-item@3.2.0", "@tiptap/extension-ordered-list@3.2.0", "@tiptap/extension-underline@3.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, WikiEditorUI, WikiEditor, __beyond_pkg, hmr;
  _export({
    WikiEditorUI: void 0,
    WikiEditor: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_tiptapReact) {
      dependency_3 = _tiptapReact;
    }, function (_tiptapExtensionTaskItem) {
      dependency_4 = _tiptapExtensionTaskItem;
    }, function (_tiptapExtensionTaskList) {
      dependency_5 = _tiptapExtensionTaskList;
    }, function (_tiptapStarterKit) {
      dependency_6 = _tiptapStarterKit;
    }, function (_tiptapExtensionImage) {
      dependency_7 = _tiptapExtensionImage;
    }, function (_clsx2) {
      dependency_8 = _clsx2;
    }, function (_radixUiReactIcons) {
      dependency_9 = _radixUiReactIcons;
    }, function (_pragmateUi108Components) {
      dependency_10 = _pragmateUi108Components;
    }, function (_turndown2) {
      dependency_11 = _turndown2;
    }, function (_marked2) {
      dependency_12 = _marked2;
    }, function (_tiptapExtensionBlockquote) {
      dependency_13 = _tiptapExtensionBlockquote;
    }, function (_tiptapExtensionBulletList) {
      dependency_14 = _tiptapExtensionBulletList;
    }, function (_tiptapExtensionCodeBlock) {
      dependency_15 = _tiptapExtensionCodeBlock;
    }, function (_tiptapExtensionHorizontalRule) {
      dependency_16 = _tiptapExtensionHorizontalRule;
    }, function (_tiptapExtensionListItem) {
      dependency_17 = _tiptapExtensionListItem;
    }, function (_tiptapExtensionOrderedList) {
      dependency_18 = _tiptapExtensionOrderedList;
    }, function (_tiptapExtensionUnderline) {
      dependency_19 = _tiptapExtensionUnderline;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.4"], ["@google-cloud/storage", "7.17.1"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.6.2"], ["@tiptap/extension-code-block", "3.6.2"], ["@tiptap/extension-horizontal-rule", "3.6.2"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.6.2"], ["@tiptap/extension-task-list", "3.6.2"], ["@tiptap/extension-underline", "3.6.2"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.6.2"], ["@tiptap/starter-kit", "3.6.2"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dompurify", "3.2.7"], ["firebase", "11.10.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.22"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.10"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.1"], ["wavesurfer.js", "7.10.3"], ["zod", "3.25.76"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.25"], ["@types/react-dom", "18.3.7"], ["typescript", "5.9.3"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/rvd", "0.7.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@tiptap/react', dependency_3], ['@tiptap/extension-task-item', dependency_4], ['@tiptap/extension-task-list', dependency_5], ['@tiptap/starter-kit', dependency_6], ['@tiptap/extension-image', dependency_7], ['clsx', dependency_8], ['@radix-ui/react-icons', dependency_9], ['pragmate-ui/components', dependency_10], ['turndown', dependency_11], ['marked', dependency_12], ['@tiptap/extension-blockquote', dependency_13], ['@tiptap/extension-bullet-list', dependency_14], ['@tiptap/extension-code-block', dependency_15], ['@tiptap/extension-horizontal-rule', dependency_16], ['@tiptap/extension-list-item', dependency_17], ['@tiptap/extension-ordered-list', dependency_18], ['@tiptap/extension-underline', dependency_19]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.5.5/editor');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./hooks/index
      *****************************/
      ims.set('./hooks/index', {
        hash: 3014520910,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          Object.defineProperty(exports, "useContentInitializer", {
            enumerable: true,
            get: function () {
              return _useContentInitializer.useContentInitializer;
            }
          });
          Object.defineProperty(exports, "useWikiEditor", {
            enumerable: true,
            get: function () {
              return _useWikiEditor.useWikiEditor;
            }
          });
          var _useWikiEditor = require("./use-wiki-editor");
          var _useContentInitializer = require("./use-content-initializer");
        }
      });

      /***********************************************
      INTERNAL MODULE: ./hooks/use-content-initializer
      ***********************************************/

      ims.set('./hooks/use-content-initializer', {
        hash: 2467492462,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useContentInitializer = void 0;
          var React = require("react");
          var _markdownToHtml = require("../utils/markdown-to-html");
          const useContentInitializer = ({
            editor,
            initialContent,
            contentSet,
            setContentSet,
            outputFormat,
            markdownToHtmlOptions
          }) => {
            React.useEffect(() => {
              // Guard clause: editor must exist
              if (!editor) return;
              // Guard clause: initial content must exist
              if (!initialContent) return;
              // Guard clause: editor must be editable
              if (!editor.isEditable) return;
              // Guard clause: content must not already be set
              if (contentSet) return;
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
            }, [editor, initialContent, contentSet, outputFormat, markdownToHtmlOptions, setContentSet]);
          };
          exports.useContentInitializer = useContentInitializer;
        }
      });

      /***************************************
      INTERNAL MODULE: ./hooks/use-wiki-editor
      ***************************************/

      ims.set('./hooks/use-wiki-editor', {
        hash: 3262812227,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useWikiEditor = void 0;
          var _extensionTaskItem = require("@tiptap/extension-task-item");
          var _extensionTaskList = require("@tiptap/extension-task-list");
          var _react = require("@tiptap/react");
          var _starterKit = require("@tiptap/starter-kit");
          var _extensionImage = require("@tiptap/extension-image");
          var _clsx = require("clsx");
          var React = require("react");
          var _htmlToMarkdown = require("../utils/html-to-markdown");
          var _markdownToHtml = require("../utils/markdown-to-html");
          const useWikiEditor = ({
            name,
            onChange,
            initialContent = '',
            placeholder = 'Escribe algo...',
            className = '',
            outputFormat = 'markdown',
            markdownOptions,
            markdownToHtmlOptions
          }) => {
            const [contentSet, setContentSet] = React.useState(false);
            const editor = (0, _react.useEditor)({
              extensions: [_starterKit.default, _extensionTaskList.default, _extensionTaskItem.default, _extensionImage.default],
              content: initialContent,
              onCreate: ({
                editor
              }) => {
                // Ensure initial content is set when editor is created
                if (!initialContent || !contentSet) return;
                const format = outputFormat === 'markdown' ? 'html' : 'markdown';
                const formatter = _markdownToHtml.markdownToHtml;
                let contentToSet = format === 'html' ? formatter(initialContent, markdownToHtmlOptions) : initialContent;
                editor.commands.setContent(contentToSet);
                setContentSet(true);
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
            return {
              editor,
              contentSet,
              setContentSet
            };
          };
          exports.useWikiEditor = useWikiEditor;
        }
      });

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

      /********************************
      INTERNAL MODULE: ./provider/index
      ********************************/

      ims.set('./provider/index', {
        hash: 3118624474,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          Object.defineProperty(exports, "ModuleProvider", {
            enumerable: true,
            get: function () {
              return _moduleProvider.ModuleProvider;
            }
          });
          Object.defineProperty(exports, "useModuleProvider", {
            enumerable: true,
            get: function () {
              return _moduleProvider.useModuleProvider;
            }
          });
          var _moduleProvider = require("./module-provider");
        }
      });

      /******************************************
      INTERNAL MODULE: ./provider/module-provider
      ******************************************/

      ims.set('./provider/module-provider', {
        hash: 1959301638,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleProvider = exports.ModuleProvider = void 0;
          var React = require("react");
          const ModuleProviderContext = React.createContext(null);
          const ModuleProvider = ({
            children,
            editor,
            wikiEditorProps
          }) => {
            const contextValue = {
              editor,
              loaders: wikiEditorProps.loaders,
              name: wikiEditorProps.name,
              onChange: wikiEditorProps.onChange,
              initialContent: wikiEditorProps.initialContent,
              placeholder: wikiEditorProps.placeholder,
              className: wikiEditorProps.className,
              showToolbar: wikiEditorProps.showToolbar,
              outputFormat: wikiEditorProps.outputFormat,
              markdownOptions: wikiEditorProps.markdownOptions,
              markdownToHtmlOptions: wikiEditorProps.markdownToHtmlOptions
            };
            return React.createElement(ModuleProviderContext.Provider, {
              value: contextValue
            }, children);
          };
          exports.ModuleProvider = ModuleProvider;
          const useModuleProvider = () => {
            const context = React.useContext(ModuleProviderContext);
            if (!context) {
              throw new Error('useModuleProvider must be used within a ModuleProvider');
            }
            return context;
          };
          exports.useModuleProvider = useModuleProvider;
        }
      });

      /*********************************
      INTERNAL MODULE: ./toolbar/actions
      *********************************/

      ims.set('./toolbar/actions', {
        hash: 943574525,
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
        hash: 1670530098,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;
          var React = require("react");
          var _clsx = require("clsx");
          var _actions = require("./actions");
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
            return React.createElement("button", {
              onClick: event => {
                event.stopPropagation();
                event.preventDefault();
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
        hash: 3933567561,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GROUPS = exports.BUTTONS = void 0;
          var _reactIcons = require("@radix-ui/react-icons");
          var React = require("react");
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
          }, {
            id: 'image',
            label: 'Image',
            title: 'Image',
            group: 'formatting',
            icon: React.createElement(_reactIcons.ImageIcon, {
              width: 16,
              height: 16
            }),
            action: editor => {
              console.log('image');
              editor.chain().focus().setImage({
                src: 'https://placehold.co/800x400'
              }).run();
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

      /**************************************
      INTERNAL MODULE: ./toolbar/image-button
      **************************************/

      ims.set('./toolbar/image-button', {
        hash: 665686289,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImageButton = void 0;
          var React = require("react");
          var _provider = require("../provider");
          var _reactIcons = require("@radix-ui/react-icons");
          var _clsx = require("clsx");
          const ImageButton = ({
            editor,
            specs
          }) => {
            const {
              loaders
            } = (0, _provider.useModuleProvider)();
            const onClick = async () => {
              const url = await loaders?.image();
              if (!url) return;
              editor.chain().focus().setImage({
                src: url
              }).run();
            };
            return React.createElement("button", {
              type: "button",
              onClick: onClick,
              className: (0, _clsx.default)('wiki-editor__button', {})
            }, React.createElement(_reactIcons.ImageIcon, null));
          };
          exports.ImageButton = ImageButton;
        }
      });

      /*******************************
      INTERNAL MODULE: ./toolbar/index
      *******************************/

      ims.set('./toolbar/index', {
        hash: 97114282,
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
        hash: 1799813153,
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
          var _imageButton = require("./image-button");
          const Section = ({
            editor,
            group
          }) => {
            const buttons = _config.BUTTONS.filter(button => button.group === group);
            if (buttons.length === 0) return null;
            return React.createElement(React.Fragment, null, buttons.map(button => {
              if (button.id === 'image') {
                return React.createElement(_imageButton.ImageButton, {
                  key: button.id,
                  editor: editor,
                  specs: button
                });
              }
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
        hash: 813291700,
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
              length: 4
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
              className: "wiki-editor__text-style-selector",
              ref: dropdownRef
            }, React.createElement("button", {
              className: "wiki-editor__style-button",
              onClick: toggleDropdown,
              title: "Estilos de texto",
              type: "button"
            }, React.createElement("span", null, getCurrentStyle()), React.createElement("svg", {
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2"
            }, React.createElement("polyline", {
              points: "6,9 12,15 18,9"
            }))), isOpen && React.createElement("div", {
              className: "wiki-editor__style-dropdown"
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

      /********************************
      INTERNAL MODULE: ./types/i-button
      ********************************/

      ims.set('./types/i-button', {
        hash: 3854559678,
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
        hash: 785756329,
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
        hash: 838736368,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.markdownToHtml = markdownToHtml;
          var _marked = require("marked");
          function markdownToHtml(markdown, options) {
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
              const html = _marked.marked.parse(markdown);
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
        hash: 1538542766,
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
          var _extensionImage = require("@tiptap/extension-image");
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
              extensions: [_starterKit.default, _extensionListItem.default, _extensionBulletList.default, _extensionOrderedList.default, _extensionUnderline.default, _extensionTaskList.default, _extensionTaskItem.default, _extensionImage.default, _extensionCodeBlock.default, _extensionBlockquote.default, _extensionHorizontalRule.default],
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
        hash: 1131664665,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WikiEditor = void 0;
          var _react = require("@tiptap/react");
          var React = require("react");
          var _toolbar = require("./toolbar");
          var _hooks = require("./hooks");
          var _provider = require("./provider");
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
            loaders,
            markdownToHtmlOptions
          }) => {
            const {
              editor,
              contentSet,
              setContentSet
            } = (0, _hooks.useWikiEditor)({
              name,
              onChange,
              initialContent,
              placeholder,
              className,
              outputFormat,
              markdownOptions,
              loaders,
              markdownToHtmlOptions
            });
            (0, _hooks.useContentInitializer)({
              editor,
              initialContent,
              contentSet,
              setContentSet,
              outputFormat,
              markdownToHtmlOptions
            });
            return React.createElement(_provider.ModuleProvider, {
              editor: editor,
              wikiEditorProps: {
                name,
                onChange,
                initialContent,
                placeholder,
                className,
                showToolbar,
                outputFormat,
                markdownOptions,
                loaders,
                markdownToHtmlOptions
              }
            }, React.createElement("div", {
              className: "wiki-editor"
            }, showToolbar && editor && React.createElement("div", {
              className: "wiki-editor__toolbar"
            }, React.createElement(_toolbar.Section, {
              editor: editor,
              group: "style-selector"
            }), React.createElement(_toolbar.Section, {
              editor: editor,
              group: "text"
            }), React.createElement(_toolbar.Section, {
              editor: editor,
              group: "lists"
            }), React.createElement(_toolbar.Section, {
              editor: editor,
              group: "blocks"
            }), React.createElement(_toolbar.Section, {
              editor: editor,
              group: "formatting"
            })), React.createElement(_react.EditorContent, {
              editor: editor
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlV2lraUVkaXRvciIsInJlcXVpcmUiLCJfdXNlQ29udGVudEluaXRpYWxpemVyIiwiUmVhY3QiLCJfbWFya2Rvd25Ub0h0bWwiLCJ1c2VDb250ZW50SW5pdGlhbGl6ZXIiLCJlZGl0b3IiLCJpbml0aWFsQ29udGVudCIsImNvbnRlbnRTZXQiLCJzZXRDb250ZW50U2V0Iiwib3V0cHV0Rm9ybWF0IiwibWFya2Rvd25Ub0h0bWxPcHRpb25zIiwidXNlRWZmZWN0IiwiaXNFZGl0YWJsZSIsInNldFRpbWVvdXQiLCJjb250ZW50VG9TZXQiLCJtYXJrZG93blRvSHRtbCIsImNvbW1hbmRzIiwic2V0Q29udGVudCIsImVycm9yIiwiY29uc29sZSIsImV4cG9ydHMiLCJfZXh0ZW5zaW9uVGFza0l0ZW0iLCJfZXh0ZW5zaW9uVGFza0xpc3QiLCJfcmVhY3QiLCJfc3RhcnRlcktpdCIsIl9leHRlbnNpb25JbWFnZSIsIl9jbHN4IiwiX2h0bWxUb01hcmtkb3duIiwidXNlV2lraUVkaXRvciIsIm5hbWUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwibWFya2Rvd25PcHRpb25zIiwidXNlU3RhdGUiLCJ1c2VFZGl0b3IiLCJleHRlbnNpb25zIiwiZGVmYXVsdCIsImNvbnRlbnQiLCJvbkNyZWF0ZSIsImZvcm1hdCIsImZvcm1hdHRlciIsIm9uU2VsZWN0aW9uVXBkYXRlIiwiZWRpdG9yUHJvcHMiLCJhdHRyaWJ1dGVzIiwiY2xhc3MiLCJvblVwZGF0ZSIsImh0bWwiLCJnZXRIVE1MIiwidmFsdWUiLCJodG1sVG9NYXJrZG93biIsInR5cGUiLCJldmVudERhdGEiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiQnViYmxlTWVudUNvbnRlbnQiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsImNoYWluIiwiZm9jdXMiLCJ0b2dnbGVCb2xkIiwicnVuIiwiaXNBY3RpdmUiLCJ0aXRsZSIsInRvZ2dsZUl0YWxpYyIsInRvZ2dsZVVuZGVybGluZSIsInRvZ2dsZVN0cmlrZSIsInRvZ2dsZUNvZGUiLCJGbG9hdGluZ01lbnVDb250ZW50IiwiaW5zZXJ0QmxvY2siLCJ0b2dnbGVIZWFkaW5nIiwibGV2ZWwiLCJ0b2dnbGVCdWxsZXRMaXN0IiwidG9nZ2xlT3JkZXJlZExpc3QiLCJ0b2dnbGVUYXNrTGlzdCIsInRvZ2dsZUJsb2NrcXVvdGUiLCJ0b2dnbGVDb2RlQmxvY2siLCJzZXRIb3Jpem9udGFsUnVsZSIsIl9idWJibGUiLCJfZmxvYXRpbmciLCJfbW9kdWxlUHJvdmlkZXIiLCJNb2R1bGVQcm92aWRlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTW9kdWxlUHJvdmlkZXIiLCJjaGlsZHJlbiIsIndpa2lFZGl0b3JQcm9wcyIsImNvbnRleHRWYWx1ZSIsImxvYWRlcnMiLCJzaG93VG9vbGJhciIsIlByb3ZpZGVyIiwidXNlTW9kdWxlUHJvdmlkZXIiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkVycm9yIiwiZ2VuZXJhdGVCdXR0b25BY3Rpb24iLCJidXR0b24iLCJhY3Rpb24iLCJhY3Rpb25UeXBlIiwiZXh0ZW5zaW9uTmFtZSIsImlkIiwiY29tbWFuZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZW5lcmF0ZUJ1dHRvbklzQWN0aXZlIiwiZ2VuZXJhdGVCdXR0b25JY29uIiwiaWNvbiIsImxhYmVsIiwiX2FjdGlvbnMiLCJ1c2VFZGl0b3JTdWJzY3JpcHRpb24iLCJmb3JjZVVwZGF0ZSIsInVzZVJlZHVjZXIiLCJ4IiwidXBkYXRlTGlzdGVuZXIiLCJvbiIsIm9mZiIsIkJ1dHRvbiIsImFjdGl2ZVN0YXRlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIl9yZWFjdEljb25zIiwiQlVUVE9OUyIsImdyb3VwIiwiRm9udEJvbGRJY29uIiwid2lkdGgiLCJoZWlnaHQiLCJGb250SXRhbGljSWNvbiIsIlVuZGVybGluZUljb24iLCJTdHJpa2V0aHJvdWdoSWNvbiIsImlzQ29tcG9uZW50IiwiY29tcG9uZW50IiwiVGV4dEljb24iLCJMaXN0QnVsbGV0SWNvbiIsIkhhbWJ1cmdlck1lbnVJY29uIiwiQ2hlY2tib3hJY29uIiwiUXVvdGVJY29uIiwiQ29kZUljb24iLCJEaXZpZGVySG9yaXpvbnRhbEljb24iLCJFcmFzZXJJY29uIiwiY2xlYXJOb2RlcyIsInVuc2V0QWxsTWFya3MiLCJJbWFnZUljb24iLCJsb2ciLCJzZXRJbWFnZSIsInNyYyIsIkdST1VQUyIsInRleHQiLCJsaXN0cyIsImJsb2NrcyIsImZvcm1hdHRpbmciLCJlZGl0b3JDb21tYW5kcyIsInNldFBhcmFncmFwaCIsIl9wcm92aWRlciIsIkltYWdlQnV0dG9uIiwic3BlY3MiLCJ1cmwiLCJpbWFnZSIsIl9idXR0b24iLCJfc2VjdGlvbiIsIl90ZXh0U3R5bGVTZWxlY3RvciIsIl9zdHlsZU9wdGlvbiIsIl9jb25maWciLCJfaW1hZ2VCdXR0b24iLCJTZWN0aW9uIiwiYnV0dG9ucyIsImZpbHRlciIsImxlbmd0aCIsIkZyYWdtZW50IiwibWFwIiwia2V5IiwiVGV4dFN0eWxlU2VsZWN0b3IiLCJTdHlsZU9wdGlvbiIsIm9wdGlvbiIsIm9uQ2xvc2UiLCJoYW5kbGVDbGljayIsInVzZUNhbGxiYWNrIiwiaGFuZGxlS2V5RG93biIsIm9uS2V5RG93biIsInJvbGUiLCJ0YWJJbmRleCIsInN0eWxlIiwic2hvcnRjdXQiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkcm9wZG93blJlZiIsInVzZVJlZiIsInN0eWxlT3B0aW9ucyIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiY3VycmVudCIsImNvbnRhaW5zIiwiaGFuZGxlRXNjYXBlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldEN1cnJlbnRTdHlsZSIsInRvZ2dsZURyb3Bkb3duIiwiY2xvc2VEcm9wZG93biIsInJlZiIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJwb2ludHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90dXJuZG93biIsIm9wdGlvbnMiLCJ0dXJuZG93biIsImhlYWRpbmdTdHlsZSIsImNvZGVCbG9ja1N0eWxlIiwiYnVsbGV0TGlzdE1hcmtlciIsImVtRGVsaW1pdGVyIiwic3Ryb25nRGVsaW1pdGVyIiwiaHIiLCJyZW1vdmUiLCJhZGRSdWxlIiwicmVwbGFjZW1lbnQiLCJub2RlIiwicGFyZW50Tm9kZSIsIm5vZGVOYW1lIiwiY2hlY2tlZCIsIl9tYXJrZWQiLCJtYXJrZG93biIsInJlbmRlcmVyIiwibWFya2VkIiwiUmVuZGVyZXIiLCJsaXN0aXRlbSIsInRhc2siLCJ1bmRlZmluZWQiLCJjaGVja2JveCIsImxpc3QiLCJib2R5Iiwib3JkZXJlZCIsImNvZGVzcGFuIiwiY29kZSIsImxhbmd1YWdlIiwiYmxvY2txdW90ZSIsInF1b3RlIiwidXNlIiwicGFyc2UiLCJfZXh0ZW5zaW9uQmxvY2txdW90ZSIsIl9leHRlbnNpb25CdWxsZXRMaXN0IiwiX2V4dGVuc2lvbkNvZGVCbG9jayIsIl9leHRlbnNpb25Ib3Jpem9udGFsUnVsZSIsIl9leHRlbnNpb25MaXN0SXRlbSIsIl9leHRlbnNpb25PcmRlcmVkTGlzdCIsIl9leHRlbnNpb25VbmRlcmxpbmUiLCJfbWVudXMiLCJXaWtpRWRpdG9yVUkiLCJzaG93RmxvYXRpbmdNZW51Iiwic2V0U2hvd0Zsb2F0aW5nTWVudSIsImZsb2F0aW5nTWVudVBvc2l0aW9uIiwic2V0RmxvYXRpbmdNZW51UG9zaXRpb24iLCJ5Iiwic2hvd0J1YmJsZU1lbnUiLCJzZXRTaG93QnViYmxlTWVudSIsImJ1YmJsZU1lbnVQb3NpdGlvbiIsInNldEJ1YmJsZU1lbnVQb3NpdGlvbiIsInNlbGVjdGlvbiIsInN0YXRlIiwiJGZyb20iLCIkdG8iLCJoYXNTZWxlY3Rpb24iLCJwb3MiLCJmcm9tQ29vcmRzIiwidmlldyIsImNvb3Jkc0F0UG9zIiwiY2VudGVyWCIsImxlZnQiLCJ0b3AiLCJFZGl0b3JDb250ZW50IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0cmFuc2Zvcm0iLCJfdG9vbGJhciIsIl9ob29rcyIsIldpa2lFZGl0b3IiXSwic291cmNlcyI6WyIvdHMvaG9va3MvaW5kZXgudHMiLCIvdHMvaG9va3MvdXNlLWNvbnRlbnQtaW5pdGlhbGl6ZXIudHMiLCIvdHMvaG9va3MvdXNlLXdpa2ktZWRpdG9yLnRzIiwiL3RzL21lbnVzL2J1YmJsZS50c3giLCIvdHMvbWVudXMvZmxvYXRpbmcudHN4IiwiL3RzL21lbnVzL2luZGV4LnRzIiwiL3RzL3Byb3ZpZGVyL2luZGV4LnRzIiwiL3RzL3Byb3ZpZGVyL21vZHVsZS1wcm92aWRlci50c3giLCIvdHMvdG9vbGJhci9hY3Rpb25zLnRzIiwiL3RzL3Rvb2xiYXIvYnV0dG9uLnRzeCIsIi90cy90b29sYmFyL2NvbmZpZy50c3giLCIvdHMvdG9vbGJhci9lZGl0b3ItY29tbWFuZHMudHMiLCIvdHMvdG9vbGJhci9pbWFnZS1idXR0b24udHN4IiwiL3RzL3Rvb2xiYXIvaW5kZXgudHMiLCIvdHMvdG9vbGJhci9zZWN0aW9uLnRzeCIsIi90cy90b29sYmFyL3N0eWxlLW9wdGlvbi50c3giLCIvdHMvdG9vbGJhci90ZXh0LXN0eWxlLXNlbGVjdG9yLnRzeCIsIi90eXBlcy50cyIsIi9pLWJ1dHRvbi50cyIsIi9pbmRleC50cyIsIi90cy91dGlscy9odG1sLXRvLW1hcmtkb3duLnRzIiwiL3RzL3V0aWxzL21hcmtkb3duLXRvLWh0bWwudHMiLCIvdHMvd2lraS1lZGl0b3ItdWkudHN4IiwiL3RzL3dpa2ktZWRpdG9yLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0FBQztZQUVGLElBQUE4USxNQUFBLENBQUFwUixxQkFBcUIsRUFBQztjQUNyQkMsTUFBTTtjQUNOQyxjQUFjO2NBQ2RDLFVBQVU7Y0FDVkMsYUFBYTtjQUNiQyxZQUFZO2NBQ1pDO2FBQ0EsQ0FBQztZQUVGLE9BQ0NSLEtBQUEsQ0FBQXNELGFBQUEsQ0FBQ2lHLFNBQUEsQ0FBQXRFLGNBQWM7Y0FDZDlFLE1BQU0sRUFBRUEsTUFBTTtjQUNkZ0YsZUFBZSxFQUFFO2dCQUNoQnhELElBQUk7Z0JBQ0pDLFFBQVE7Z0JBQ1J4QixjQUFjO2dCQUNkeUIsV0FBVztnQkFDWEMsU0FBUztnQkFDVHdELFdBQVc7Z0JBQ1gvRSxZQUFZO2dCQUNad0IsZUFBZTtnQkFDZnNELE9BQU87Z0JBQ1A3RTs7WUFDQSxHQUVEUixLQUFBLENBQUFzRCxhQUFBO2NBQUt4QixTQUFTLEVBQUM7WUFBYSxHQUMxQndELFdBQVcsSUFBSW5GLE1BQU0sSUFDckJILEtBQUEsQ0FBQXNELGFBQUE7Y0FBS3hCLFNBQVMsRUFBQztZQUFzQixHQUNwQzlCLEtBQUEsQ0FBQXNELGFBQUEsQ0FBQytOLFFBQUEsQ0FBQW5ILE9BQU87Y0FBQy9KLE1BQU0sRUFBRUEsTUFBTTtjQUFFc0gsS0FBSyxFQUFDO1lBQWdCLEVBQUcsRUFDbER6SCxLQUFBLENBQUFzRCxhQUFBLENBQUMrTixRQUFBLENBQUFuSCxPQUFPO2NBQUMvSixNQUFNLEVBQUVBLE1BQU07Y0FBRXNILEtBQUssRUFBQztZQUFNLEVBQUcsRUFFeEN6SCxLQUFBLENBQUFzRCxhQUFBLENBQUMrTixRQUFBLENBQUFuSCxPQUFPO2NBQUMvSixNQUFNLEVBQUVBLE1BQU07Y0FBRXNILEtBQUssRUFBQztZQUFPLEVBQUcsRUFDekN6SCxLQUFBLENBQUFzRCxhQUFBLENBQUMrTixRQUFBLENBQUFuSCxPQUFPO2NBQUMvSixNQUFNLEVBQUVBLE1BQU07Y0FBRXNILEtBQUssRUFBQztZQUFRLEVBQUcsRUFDMUN6SCxLQUFBLENBQUFzRCxhQUFBLENBQUMrTixRQUFBLENBQUFuSCxPQUFPO2NBQUMvSixNQUFNLEVBQUVBLE1BQU07Y0FBRXNILEtBQUssRUFBQztZQUFZLEVBQUcsQ0FFL0MsRUFDRHpILEtBQUEsQ0FBQXNELGFBQUEsQ0FBQ2pDLE1BQUEsQ0FBQTRQLGFBQWE7Y0FBQzlRLE1BQU0sRUFBRUE7WUFBTSxFQUFJLENBQzVCLENBQ1U7VUFFbkIsQ0FBQztVQUFDZSxPQUFBLENBQUFxUSxVQUFBLEdBQUFBLFVBQUEiLCJpZ25vcmVMaXN0IjpbXX0=