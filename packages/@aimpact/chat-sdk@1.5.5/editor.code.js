System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "@tiptap/react@3.2.0", "@tiptap/extension-task-item@3.2.0", "@tiptap/extension-task-list@3.2.0", "@tiptap/starter-kit@3.2.0", "@tiptap/extension-image@3.6.2", "clsx@2.1.1", "pragmate-ui@1.0.8/icons", "@radix-ui/react-icons@1.3.2", "pragmate-ui@1.0.8/components", "turndown@7.2.0", "marked@5.1.2", "@tiptap/extension-blockquote@3.2.0", "@tiptap/extension-bullet-list@3.2.0", "@tiptap/extension-code-block@3.2.0", "@tiptap/extension-horizontal-rule@3.2.0", "@tiptap/extension-list-item@3.2.0", "@tiptap/extension-ordered-list@3.2.0", "@tiptap/extension-underline@3.2.0", "@beyond-js/react-18-widgets@1.1.8/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, WikiEditorUI, WikiEditor, __beyond_pkg, hmr;
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
    }, function (_pragmateUi108Icons) {
      dependency_9 = _pragmateUi108Icons;
    }, function (_radixUiReactIcons) {
      dependency_10 = _radixUiReactIcons;
    }, function (_pragmateUi108Components) {
      dependency_11 = _pragmateUi108Components;
    }, function (_turndown2) {
      dependency_12 = _turndown2;
    }, function (_marked2) {
      dependency_13 = _marked2;
    }, function (_tiptapExtensionBlockquote) {
      dependency_14 = _tiptapExtensionBlockquote;
    }, function (_tiptapExtensionBulletList) {
      dependency_15 = _tiptapExtensionBulletList;
    }, function (_tiptapExtensionCodeBlock) {
      dependency_16 = _tiptapExtensionCodeBlock;
    }, function (_tiptapExtensionHorizontalRule) {
      dependency_17 = _tiptapExtensionHorizontalRule;
    }, function (_tiptapExtensionListItem) {
      dependency_18 = _tiptapExtensionListItem;
    }, function (_tiptapExtensionOrderedList) {
      dependency_19 = _tiptapExtensionOrderedList;
    }, function (_tiptapExtensionUnderline) {
      dependency_20 = _tiptapExtensionUnderline;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_21 = _beyondJsReact18Widgets118Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.4"], ["@google-cloud/storage", "7.17.1"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.6.2"], ["@tiptap/extension-code-block", "3.6.2"], ["@tiptap/extension-horizontal-rule", "3.6.2"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.6.2"], ["@tiptap/extension-task-list", "3.6.2"], ["@tiptap/extension-underline", "3.6.2"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.6.2"], ["@tiptap/starter-kit", "3.6.2"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dompurify", "3.2.7"], ["firebase", "11.10.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.22"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.10"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.1"], ["wavesurfer.js", "7.10.3"], ["zod", "3.25.76"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.25"], ["@types/react-dom", "18.3.7"], ["typescript", "5.9.3"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/editor",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@tiptap/react', dependency_3], ['@tiptap/extension-task-item', dependency_4], ['@tiptap/extension-task-list', dependency_5], ['@tiptap/starter-kit', dependency_6], ['@tiptap/extension-image', dependency_7], ['clsx', dependency_8], ['pragmate-ui/icons', dependency_9], ['@radix-ui/react-icons', dependency_10], ['pragmate-ui/components', dependency_11], ['turndown', dependency_12], ['marked', dependency_13], ['@tiptap/extension-blockquote', dependency_14], ['@tiptap/extension-bullet-list', dependency_15], ['@tiptap/extension-code-block', dependency_16], ['@tiptap/extension-horizontal-rule', dependency_17], ['@tiptap/extension-list-item', dependency_18], ['@tiptap/extension-ordered-list', dependency_19], ['@tiptap/extension-underline', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.5.5/editor.code');
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
        hash: 3437430393,
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
            texts,
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
        hash: 2998606321,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;
          var React = require("react");
          var _clsx = require("clsx");
          var _actions = require("./actions");
          var _icons = require("pragmate-ui/icons");
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
            return React.createElement(_icons.IconButton, {
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
        hash: 1494016211,
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
        hash: 324215458,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImageButton = void 0;
          var React = require("react");
          var _provider = require("../provider");
          var _icons = require("pragmate-ui/icons");
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
            return React.createElement(_icons.IconButton, {
              onClick: onClick,
              title: specs.title,
              className: (0, _clsx.default)('wiki-editor__button img-button', {}),
              icon: "gallery"
            });
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
        hash: 2792601594,
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
        hash: 2474781396,
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
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
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
            const [ready, texts] = (0, _hooks2.useTexts)('@aimpact/chat-sdk/editor');
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
            if (!ready) return null;
            return React.createElement(_provider.ModuleProvider, {
              editor: editor,
              texts: texts,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlV2lraUVkaXRvciIsInJlcXVpcmUiLCJfdXNlQ29udGVudEluaXRpYWxpemVyIiwiUmVhY3QiLCJfbWFya2Rvd25Ub0h0bWwiLCJ1c2VDb250ZW50SW5pdGlhbGl6ZXIiLCJlZGl0b3IiLCJpbml0aWFsQ29udGVudCIsImNvbnRlbnRTZXQiLCJzZXRDb250ZW50U2V0Iiwib3V0cHV0Rm9ybWF0IiwibWFya2Rvd25Ub0h0bWxPcHRpb25zIiwidXNlRWZmZWN0IiwiaXNFZGl0YWJsZSIsInNldFRpbWVvdXQiLCJjb250ZW50VG9TZXQiLCJtYXJrZG93blRvSHRtbCIsImNvbW1hbmRzIiwic2V0Q29udGVudCIsImVycm9yIiwiY29uc29sZSIsImV4cG9ydHMiLCJfZXh0ZW5zaW9uVGFza0l0ZW0iLCJfZXh0ZW5zaW9uVGFza0xpc3QiLCJfcmVhY3QiLCJfc3RhcnRlcktpdCIsIl9leHRlbnNpb25JbWFnZSIsIl9jbHN4IiwiX2h0bWxUb01hcmtkb3duIiwidXNlV2lraUVkaXRvciIsIm5hbWUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwibWFya2Rvd25PcHRpb25zIiwidXNlU3RhdGUiLCJ1c2VFZGl0b3IiLCJleHRlbnNpb25zIiwiZGVmYXVsdCIsImNvbnRlbnQiLCJvbkNyZWF0ZSIsImZvcm1hdCIsImZvcm1hdHRlciIsIm9uU2VsZWN0aW9uVXBkYXRlIiwiZWRpdG9yUHJvcHMiLCJhdHRyaWJ1dGVzIiwiY2xhc3MiLCJvblVwZGF0ZSIsImh0bWwiLCJnZXRIVE1MIiwidmFsdWUiLCJodG1sVG9NYXJrZG93biIsInR5cGUiLCJldmVudERhdGEiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiQnViYmxlTWVudUNvbnRlbnQiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsImNoYWluIiwiZm9jdXMiLCJ0b2dnbGVCb2xkIiwicnVuIiwiaXNBY3RpdmUiLCJ0aXRsZSIsInRvZ2dsZUl0YWxpYyIsInRvZ2dsZVVuZGVybGluZSIsInRvZ2dsZVN0cmlrZSIsInRvZ2dsZUNvZGUiLCJGbG9hdGluZ01lbnVDb250ZW50IiwiaW5zZXJ0QmxvY2siLCJ0b2dnbGVIZWFkaW5nIiwibGV2ZWwiLCJ0b2dnbGVCdWxsZXRMaXN0IiwidG9nZ2xlT3JkZXJlZExpc3QiLCJ0b2dnbGVUYXNrTGlzdCIsInRvZ2dsZUJsb2NrcXVvdGUiLCJ0b2dnbGVDb2RlQmxvY2siLCJzZXRIb3Jpem9udGFsUnVsZSIsIl9idWJibGUiLCJfZmxvYXRpbmciLCJfbW9kdWxlUHJvdmlkZXIiLCJNb2R1bGVQcm92aWRlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTW9kdWxlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInRleHRzIiwid2lraUVkaXRvclByb3BzIiwiY29udGV4dFZhbHVlIiwibG9hZGVycyIsInNob3dUb29sYmFyIiwiUHJvdmlkZXIiLCJ1c2VNb2R1bGVQcm92aWRlciIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXJyb3IiLCJnZW5lcmF0ZUJ1dHRvbkFjdGlvbiIsImJ1dHRvbiIsImFjdGlvbiIsImFjdGlvblR5cGUiLCJleHRlbnNpb25OYW1lIiwiaWQiLCJjb21tYW5kIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImdlbmVyYXRlQnV0dG9uSXNBY3RpdmUiLCJnZW5lcmF0ZUJ1dHRvbkljb24iLCJpY29uIiwibGFiZWwiLCJfYWN0aW9ucyIsIl9pY29ucyIsInVzZUVkaXRvclN1YnNjcmlwdGlvbiIsImZvcmNlVXBkYXRlIiwidXNlUmVkdWNlciIsIngiLCJ1cGRhdGVMaXN0ZW5lciIsIm9uIiwib2ZmIiwiQnV0dG9uIiwiYWN0aXZlU3RhdGUiLCJJY29uQnV0dG9uIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIl9yZWFjdEljb25zIiwiQlVUVE9OUyIsImdyb3VwIiwiRm9udEJvbGRJY29uIiwid2lkdGgiLCJoZWlnaHQiLCJGb250SXRhbGljSWNvbiIsIlVuZGVybGluZUljb24iLCJTdHJpa2V0aHJvdWdoSWNvbiIsImlzQ29tcG9uZW50IiwiY29tcG9uZW50IiwiVGV4dEljb24iLCJMaXN0QnVsbGV0SWNvbiIsIkhhbWJ1cmdlck1lbnVJY29uIiwiQ2hlY2tib3hJY29uIiwiUXVvdGVJY29uIiwiQ29kZUljb24iLCJEaXZpZGVySG9yaXpvbnRhbEljb24iLCJFcmFzZXJJY29uIiwiY2xlYXJOb2RlcyIsInVuc2V0QWxsTWFya3MiLCJJbWFnZUljb24iLCJzZXRJbWFnZSIsInNyYyIsIkdST1VQUyIsInRleHQiLCJsaXN0cyIsImJsb2NrcyIsImZvcm1hdHRpbmciLCJlZGl0b3JDb21tYW5kcyIsInNldFBhcmFncmFwaCIsIl9wcm92aWRlciIsIkltYWdlQnV0dG9uIiwic3BlY3MiLCJ1cmwiLCJpbWFnZSIsIl9idXR0b24iLCJfc2VjdGlvbiIsIl90ZXh0U3R5bGVTZWxlY3RvciIsIl9zdHlsZU9wdGlvbiIsIl9jb25maWciLCJfaW1hZ2VCdXR0b24iLCJTZWN0aW9uIiwiYnV0dG9ucyIsImZpbHRlciIsImxlbmd0aCIsIkZyYWdtZW50IiwibWFwIiwia2V5IiwiVGV4dFN0eWxlU2VsZWN0b3IiLCJTdHlsZU9wdGlvbiIsIm9wdGlvbiIsIm9uQ2xvc2UiLCJoYW5kbGVDbGljayIsInVzZUNhbGxiYWNrIiwiaGFuZGxlS2V5RG93biIsIm9uS2V5RG93biIsInJvbGUiLCJ0YWJJbmRleCIsInN0eWxlIiwic2hvcnRjdXQiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkcm9wZG93blJlZiIsInVzZVJlZiIsInN0eWxlT3B0aW9ucyIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiY3VycmVudCIsImNvbnRhaW5zIiwiaGFuZGxlRXNjYXBlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldEN1cnJlbnRTdHlsZSIsInRvZ2dsZURyb3Bkb3duIiwiY2xvc2VEcm9wZG93biIsInJlZiIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJwb2ludHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90dXJuZG93biIsIm9wdGlvbnMiLCJ0dXJuZG93biIsImhlYWRpbmdTdHlsZSIsImNvZGVCbG9ja1N0eWxlIiwiYnVsbGV0TGlzdE1hcmtlciIsImVtRGVsaW1pdGVyIiwic3Ryb25nRGVsaW1pdGVyIiwiaHIiLCJyZW1vdmUiLCJhZGRSdWxlIiwicmVwbGFjZW1lbnQiLCJub2RlIiwicGFyZW50Tm9kZSIsIm5vZGVOYW1lIiwiY2hlY2tlZCIsIl9tYXJrZWQiLCJtYXJrZG93biIsInJlbmRlcmVyIiwibWFya2VkIiwiUmVuZGVyZXIiLCJ1c2UiLCJwYXJzZSIsIl9leHRlbnNpb25CbG9ja3F1b3RlIiwiX2V4dGVuc2lvbkJ1bGxldExpc3QiLCJfZXh0ZW5zaW9uQ29kZUJsb2NrIiwiX2V4dGVuc2lvbkhvcml6b250YWxSdWxlIiwiX2V4dGVuc2lvbkxpc3RJdGVtIiwiX2V4dGVuc2lvbk9yZGVyZWRMaXN0IiwiX2V4dGVuc2lvblVuZGVybGluZSIsIl9tZW51cyIsIldpa2lFZGl0b3JVSSIsInNob3dGbG9hdGluZ01lbnUiLCJzZXRTaG93RmxvYXRpbmdNZW51IiwiZmxvYXRpbmdNZW51UG9zaXRpb24iLCJzZXRGbG9hdGluZ01lbnVQb3NpdGlvbiIsInkiLCJzaG93QnViYmxlTWVudSIsInNldFNob3dCdWJibGVNZW51IiwiYnViYmxlTWVudVBvc2l0aW9uIiwic2V0QnViYmxlTWVudVBvc2l0aW9uIiwic2VsZWN0aW9uIiwic3RhdGUiLCIkZnJvbSIsIiR0byIsImhhc1NlbGVjdGlvbiIsInBvcyIsImZyb21Db29yZHMiLCJ2aWV3IiwiY29vcmRzQXRQb3MiLCJjZW50ZXJYIiwibGVmdCIsInRvcCIsIkVkaXRvckNvbnRlbnQiLCJwb3NpdGlvbiIsInpJbmRleCIsInRyYW5zZm9ybSIsIl90b29sYmFyIiwiX2hvb2tzIiwiX2hvb2tzMiIsIldpa2lFZGl0b3IiLCJyZWFkeSIsInVzZVRleHRzIl0sInNvdXJjZXMiOlsiL3RzL2hvb2tzL2luZGV4LnRzIiwiL3RzL2hvb2tzL3VzZS1jb250ZW50LWluaXRpYWxpemVyLnRzIiwiL3RzL2hvb2tzL3VzZS13aWtpLWVkaXRvci50cyIsIi90cy9tZW51cy9idWJibGUudHN4IiwiL3RzL21lbnVzL2Zsb2F0aW5nLnRzeCIsIi90cy9tZW51cy9pbmRleC50cyIsIi90cy9wcm92aWRlci9pbmRleC50cyIsIi90cy9wcm92aWRlci9tb2R1bGUtcHJvdmlkZXIudHN4IiwiL3RzL3Rvb2xiYXIvYWN0aW9ucy50cyIsIi90cy90b29sYmFyL2J1dHRvbi50c3giLCIvdHMvdG9vbGJhci9jb25maWcudHN4IiwiL3RzL3Rvb2xiYXIvZWRpdG9yLWNvbW1hbmRzLnRzIiwiL3RzL3Rvb2xiYXIvaW1hZ2UtYnV0dG9uLnRzeCIsIi90cy90b29sYmFyL2luZGV4LnRzIiwiL3RzL3Rvb2xiYXIvc2VjdGlvbi50c3giLCIvdHMvdG9vbGJhci9zdHlsZS1vcHRpb24udHN4IiwiL3RzL3Rvb2xiYXIvdGV4dC1zdHlsZS1zZWxlY3Rvci50c3giLCIvdHlwZXMudHMiLCIvaS1idXR0b24udHMiLCIvaW5kZXgudHMiLCIvdHMvdXRpbHMvaHRtbC10by1tYXJrZG93bi50cyIsIi90cy91dGlscy9tYXJrZG93bi10by1odG1sLnRzIiwiL3RzL3dpa2ktZWRpdG9yLXVpLnRzeCIsIi90cy93aWtpLWVkaXRvci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxj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