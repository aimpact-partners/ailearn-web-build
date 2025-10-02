System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "@tiptap/react@3.2.0", "@tiptap/extension-task-item@3.2.0", "@tiptap/extension-task-list@3.2.0", "@tiptap/starter-kit@3.2.0", "@tiptap/extension-image@3.6.2", "clsx@2.1.1", "pragmate-ui@1.0.8/components", "@radix-ui/react-icons@1.3.2", "turndown@7.2.0", "marked@5.1.2", "@tiptap/extension-blockquote@3.2.0", "@tiptap/extension-bullet-list@3.2.0", "@tiptap/extension-code-block@3.2.0", "@tiptap/extension-horizontal-rule@3.2.0", "@tiptap/extension-list-item@3.2.0", "@tiptap/extension-ordered-list@3.2.0", "@tiptap/extension-underline@3.2.0"], function (_export, _context) {
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
    }, function (_pragmateUi108Components) {
      dependency_9 = _pragmateUi108Components;
    }, function (_radixUiReactIcons) {
      dependency_10 = _radixUiReactIcons;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.4"], ["@google-cloud/storage", "7.17.1"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.6.2"], ["@tiptap/extension-code-block", "3.6.2"], ["@tiptap/extension-horizontal-rule", "3.6.2"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.6.2"], ["@tiptap/extension-task-list", "3.6.2"], ["@tiptap/extension-underline", "3.6.2"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.6.2"], ["@tiptap/starter-kit", "3.6.2"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dompurify", "3.2.7"], ["firebase", "11.10.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.22"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.10"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.1"], ["wavesurfer.js", "7.10.3"], ["zod", "3.25.76"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.25"], ["@types/react-dom", "18.3.7"], ["typescript", "5.9.3"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/rvd", "0.6.3"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@tiptap/react', dependency_3], ['@tiptap/extension-task-item', dependency_4], ['@tiptap/extension-task-list', dependency_5], ['@tiptap/starter-kit', dependency_6], ['@tiptap/extension-image', dependency_7], ['clsx', dependency_8], ['pragmate-ui/components', dependency_9], ['@radix-ui/react-icons', dependency_10], ['turndown', dependency_11], ['marked', dependency_12], ['@tiptap/extension-blockquote', dependency_13], ['@tiptap/extension-bullet-list', dependency_14], ['@tiptap/extension-code-block', dependency_15], ['@tiptap/extension-horizontal-rule', dependency_16], ['@tiptap/extension-list-item', dependency_17], ['@tiptap/extension-ordered-list', dependency_18], ['@tiptap/extension-underline', dependency_19]]);
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
        hash: 408281371,
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
        hash: 3965644024,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImageButton = void 0;
          var React = require("react");
          var _provider = require("../provider");
          var _components = require("pragmate-ui/components");
          var _reactIcons = require("@radix-ui/react-icons");
          const ImageButton = ({
            editor,
            specs
          }) => {
            const {
              loaders
            } = (0, _provider.useModuleProvider)();
            console.log(1, specs);
            const Control = specs.icon;
            console.log('control', Control);
            const onClick = () => {
              const url = loaders?.image();
              if (!url) return;
              editor.chain().focus().setImage({
                src: url
              }).run();
            };
            return React.createElement(_components.Button, null, React.createElement(_reactIcons.ImageIcon, {
              onClick: onClick
            }));
          };
          exports.ImageButton = ImageButton;
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
        hash: 138522725,
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
            return React.createElement("div", {
              className: "wiki-editor__toolbar-section"
            }, buttons.map(button => {
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
        hash: 1805926994,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlV2lraUVkaXRvciIsInJlcXVpcmUiLCJfdXNlQ29udGVudEluaXRpYWxpemVyIiwiUmVhY3QiLCJfbWFya2Rvd25Ub0h0bWwiLCJ1c2VDb250ZW50SW5pdGlhbGl6ZXIiLCJlZGl0b3IiLCJpbml0aWFsQ29udGVudCIsImNvbnRlbnRTZXQiLCJzZXRDb250ZW50U2V0Iiwib3V0cHV0Rm9ybWF0IiwibWFya2Rvd25Ub0h0bWxPcHRpb25zIiwidXNlRWZmZWN0IiwiaXNFZGl0YWJsZSIsInNldFRpbWVvdXQiLCJjb250ZW50VG9TZXQiLCJtYXJrZG93blRvSHRtbCIsImNvbW1hbmRzIiwic2V0Q29udGVudCIsImVycm9yIiwiY29uc29sZSIsImV4cG9ydHMiLCJfZXh0ZW5zaW9uVGFza0l0ZW0iLCJfZXh0ZW5zaW9uVGFza0xpc3QiLCJfcmVhY3QiLCJfc3RhcnRlcktpdCIsIl9leHRlbnNpb25JbWFnZSIsIl9jbHN4IiwiX2h0bWxUb01hcmtkb3duIiwidXNlV2lraUVkaXRvciIsIm5hbWUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwibWFya2Rvd25PcHRpb25zIiwidXNlU3RhdGUiLCJ1c2VFZGl0b3IiLCJleHRlbnNpb25zIiwiZGVmYXVsdCIsImNvbnRlbnQiLCJvbkNyZWF0ZSIsImZvcm1hdCIsImZvcm1hdHRlciIsIm9uU2VsZWN0aW9uVXBkYXRlIiwiZWRpdG9yUHJvcHMiLCJhdHRyaWJ1dGVzIiwiY2xhc3MiLCJvblVwZGF0ZSIsImh0bWwiLCJnZXRIVE1MIiwidmFsdWUiLCJodG1sVG9NYXJrZG93biIsInR5cGUiLCJldmVudERhdGEiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiQnViYmxlTWVudUNvbnRlbnQiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsImNoYWluIiwiZm9jdXMiLCJ0b2dnbGVCb2xkIiwicnVuIiwiaXNBY3RpdmUiLCJ0aXRsZSIsInRvZ2dsZUl0YWxpYyIsInRvZ2dsZVVuZGVybGluZSIsInRvZ2dsZVN0cmlrZSIsInRvZ2dsZUNvZGUiLCJGbG9hdGluZ01lbnVDb250ZW50IiwiaW5zZXJ0QmxvY2siLCJ0b2dnbGVIZWFkaW5nIiwibGV2ZWwiLCJ0b2dnbGVCdWxsZXRMaXN0IiwidG9nZ2xlT3JkZXJlZExpc3QiLCJ0b2dnbGVUYXNrTGlzdCIsInRvZ2dsZUJsb2NrcXVvdGUiLCJ0b2dnbGVDb2RlQmxvY2siLCJzZXRIb3Jpem9udGFsUnVsZSIsIl9idWJibGUiLCJfZmxvYXRpbmciLCJfbW9kdWxlUHJvdmlkZXIiLCJNb2R1bGVQcm92aWRlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTW9kdWxlUHJvdmlkZXIiLCJjaGlsZHJlbiIsIndpa2lFZGl0b3JQcm9wcyIsImNvbnRleHRWYWx1ZSIsImxvYWRlcnMiLCJzaG93VG9vbGJhciIsIlByb3ZpZGVyIiwidXNlTW9kdWxlUHJvdmlkZXIiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkVycm9yIiwiZ2VuZXJhdGVCdXR0b25BY3Rpb24iLCJidXR0b24iLCJhY3Rpb24iLCJhY3Rpb25UeXBlIiwiZXh0ZW5zaW9uTmFtZSIsImlkIiwiY29tbWFuZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZW5lcmF0ZUJ1dHRvbklzQWN0aXZlIiwiZ2VuZXJhdGVCdXR0b25JY29uIiwiaWNvbiIsImxhYmVsIiwiX2FjdGlvbnMiLCJfY29tcG9uZW50cyIsInVzZUVkaXRvclN1YnNjcmlwdGlvbiIsImZvcmNlVXBkYXRlIiwidXNlUmVkdWNlciIsIngiLCJ1cGRhdGVMaXN0ZW5lciIsIm9uIiwib2ZmIiwiQnV0dG9uIiwiYWN0aXZlU3RhdGUiLCJfcmVhY3RJY29ucyIsIkJVVFRPTlMiLCJncm91cCIsIkZvbnRCb2xkSWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiRm9udEl0YWxpY0ljb24iLCJVbmRlcmxpbmVJY29uIiwiU3RyaWtldGhyb3VnaEljb24iLCJpc0NvbXBvbmVudCIsImNvbXBvbmVudCIsIlRleHRJY29uIiwiTGlzdEJ1bGxldEljb24iLCJIYW1idXJnZXJNZW51SWNvbiIsIkNoZWNrYm94SWNvbiIsIlF1b3RlSWNvbiIsIkNvZGVJY29uIiwiRGl2aWRlckhvcml6b250YWxJY29uIiwiRXJhc2VySWNvbiIsImNsZWFyTm9kZXMiLCJ1bnNldEFsbE1hcmtzIiwiSW1hZ2VJY29uIiwibG9nIiwic2V0SW1hZ2UiLCJzcmMiLCJHUk9VUFMiLCJ0ZXh0IiwibGlzdHMiLCJibG9ja3MiLCJmb3JtYXR0aW5nIiwiZWRpdG9yQ29tbWFuZHMiLCJzZXRQYXJhZ3JhcGgiLCJfcHJvdmlkZXIiLCJJbWFnZUJ1dHRvbiIsInNwZWNzIiwiQ29udHJvbCIsInVybCIsImltYWdlIiwiX2J1dHRvbiIsIl9zZWN0aW9uIiwiX3RleHRTdHlsZVNlbGVjdG9yIiwiX3N0eWxlT3B0aW9uIiwiX2NvbmZpZyIsIl9pbWFnZUJ1dHRvbiIsIlNlY3Rpb24iLCJidXR0b25zIiwiZmlsdGVyIiwibGVuZ3RoIiwibWFwIiwia2V5IiwiVGV4dFN0eWxlU2VsZWN0b3IiLCJTdHlsZU9wdGlvbiIsIm9wdGlvbiIsIm9uQ2xvc2UiLCJoYW5kbGVDbGljayIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUtleURvd24iLCJvbktleURvd24iLCJyb2xlIiwidGFiSW5kZXgiLCJzdHlsZSIsInNob3J0Y3V0IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiZHJvcGRvd25SZWYiLCJ1c2VSZWYiLCJzdHlsZU9wdGlvbnMiLCJBcnJheSIsImZyb20iLCJfIiwiaSIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImN1cnJlbnQiLCJjb250YWlucyIsImhhbmRsZUVzY2FwZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRDdXJyZW50U3R5bGUiLCJ0b2dnbGVEcm9wZG93biIsImNsb3NlRHJvcGRvd24iLCJyZWYiLCJ2aWV3Qm94IiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwicG9pbnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdHVybmRvd24iLCJvcHRpb25zIiwidHVybmRvd24iLCJoZWFkaW5nU3R5bGUiLCJjb2RlQmxvY2tTdHlsZSIsImJ1bGxldExpc3RNYXJrZXIiLCJlbURlbGltaXRlciIsInN0cm9uZ0RlbGltaXRlciIsImhyIiwicmVtb3ZlIiwiYWRkUnVsZSIsInJlcGxhY2VtZW50Iiwibm9kZSIsInBhcmVudE5vZGUiLCJub2RlTmFtZSIsImNoZWNrZWQiLCJfbWFya2VkIiwibWFya2Rvd24iLCJtYXJrZWQiLCJzZXRPcHRpb25zIiwiZ2ZtIiwiYnJlYWtzIiwiaGVhZGVySWRzIiwibWFuZ2xlIiwiaGVhZGVyUHJlZml4IiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImxpc3RpdGVtIiwidGFzayIsInVuZGVmaW5lZCIsImNoZWNrYm94IiwibGlzdCIsImJvZHkiLCJvcmRlcmVkIiwiY29kZXNwYW4iLCJjb2RlIiwibGFuZ3VhZ2UiLCJibG9ja3F1b3RlIiwicXVvdGUiLCJ1c2UiLCJfZXh0ZW5zaW9uQmxvY2txdW90ZSIsIl9leHRlbnNpb25CdWxsZXRMaXN0IiwiX2V4dGVuc2lvbkNvZGVCbG9jayIsIl9leHRlbnNpb25Ib3Jpem9udGFsUnVsZSIsIl9leHRlbnNpb25MaXN0SXRlbSIsIl9leHRlbnNpb25PcmRlcmVkTGlzdCIsIl9leHRlbnNpb25VbmRlcmxpbmUiLCJfbWVudXMiLCJXaWtpRWRpdG9yVUkiLCJzaG93RmxvYXRpbmdNZW51Iiwic2V0U2hvd0Zsb2F0aW5nTWVudSIsImZsb2F0aW5nTWVudVBvc2l0aW9uIiwic2V0RmxvYXRpbmdNZW51UG9zaXRpb24iLCJ5Iiwic2hvd0J1YmJsZU1lbnUiLCJzZXRTaG93QnViYmxlTWVudSIsImJ1YmJsZU1lbnVQb3NpdGlvbiIsInNldEJ1YmJsZU1lbnVQb3NpdGlvbiIsInNlbGVjdGlvbiIsInN0YXRlIiwiJGZyb20iLCIkdG8iLCJoYXNTZWxlY3Rpb24iLCJwb3MiLCJmcm9tQ29vcmRzIiwidmlldyIsImNvb3Jkc0F0UG9zIiwiY2VudGVyWCIsImxlZnQiLCJ0b3AiLCJFZGl0b3JDb250ZW50IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0cmFuc2Zvcm0iLCJfdG9vbGJhciIsIl9ob29rcyIsIldpa2lFZGl0b3IiXSwic291cmNlcyI6WyIvL3RzL2hvb2tzL2luZGV4LnRzIiwiLy90cy9ob29rcy91c2UtY29udGVudC1pbml0aWFsaXplci50cyIsIi8vdHMvaG9va3MvdXNlLXdpa2ktZWRpdG9yLnRzIiwiLy90cy9tZW51cy9idWJibGUudHN4IiwiLy90cy9tZW51cy9mbG9hdGluZy50c3giLCIvL3RzL21lbnVzL2luZGV4LnRzIiwiLy90cy9wcm92aWRlci9pbmRleC50cyIsIi8vdHMvcHJvdmlkZXIvbW9kdWxlLXByb3ZpZGVyLnRzeCIsIi8vdHMvdG9vbGJhci9hY3Rpb25zLnRzIiwiLy90cy90b29sYmFyL2J1dHRvbi50c3giLCIvL3RzL3Rvb2xiYXIvY29uZmlnLnRzeCIsIi8vdHMvdG9vbGJhci9lZGl0b3ItY29tbWFuZHMudHMiLCIvL3RzL3Rvb2xiYXIvaW1hZ2UtYnV0dG9uLnRzeCIsIi8vdHMvdG9vbGJhci9pbmRleC50cyIsIi8vdHMvdG9vbGJhci9zZWN0aW9uLnRzeCIsIi8vdHMvdG9vbGJhci9zdHlsZS1vcHRpb24udHN4IiwiLy90cy90b29sYmFyL3RleHQtc3R5bGUtc2VsZWN0b3IudHN4IiwiLy90eXBlcy50cy8iLCIvL2ktYnV0dG9uLnRzLyIsIi8vaW5kZXgudHMvIiwiLy90cy91dGlscy9odG1sLXRvLW1hcmtkb3duLnRzIiwiLy90cy91dGlscy9tYXJrZG93bi10by1odG1sLnRzIiwiLy90cy93aWtpLWVkaXRvci11aS50c3giLCIvL3RzL3dpa2ktZWRpdG9yLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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