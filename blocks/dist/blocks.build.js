/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_row_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/row/block */ "./blocks/src/blocks/row/block.js");
/* harmony import */ var _blocks_column_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/column/block */ "./blocks/src/blocks/column/block.js");
/* harmony import */ var _blocks_card_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/card/card */ "./blocks/src/blocks/card/card.js");
/* harmony import */ var _blocks_gallery_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/gallery/gallery */ "./blocks/src/blocks/gallery/gallery.js");
/* harmony import */ var _blocks_hotgraphic_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/hotgraphic/block */ "./blocks/src/blocks/hotgraphic/block.js");
/* harmony import */ var _blocks_posts_posts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/posts/posts */ "./blocks/src/blocks/posts/posts.js");
/* harmony import */ var _blocks_ganimation_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/ganimation/block */ "./blocks/src/blocks/ganimation/block.js");
/* harmony import */ var _blocks_pricingtable_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/pricingtable/block */ "./blocks/src/blocks/pricingtable/block.js");
/* harmony import */ var _blocks_slider_block__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/slider/block */ "./blocks/src/blocks/slider/block.js");












/***/ }),

/***/ "./blocks/src/blocks/card/card.js":
/*!****************************************!*\
  !*** ./blocks/src/blocks/card/card.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Title */ "./blocks/src/components/Title.js");
/* harmony import */ var _components_Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Paragraph */ "./blocks/src/components/Paragraph.js");
/* harmony import */ var _components_GraphicPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/GraphicPicker */ "./blocks/src/components/GraphicPicker.js");
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/colors */ "./blocks/src/helpers/colors.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/blocks/card/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/blocks/card/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    CheckboxControl = _wp$components.CheckboxControl,
    ColorPalette = _wp$components.ColorPalette;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls;






registerBlockType('sg/card', {
  title: 'Card',
  icon: 'star-empty',
  category: 'sg',
  attributes: {
    type: {
      type: 'string',
      "default": 'basic'
    },
    cardInverse: {
      type: 'boolean',
      "default": false
    },
    title: {
      type: 'object',
      "default": {
        val: 'Lorem Ipsum',
        style: {}
      }
    },
    paragraph: {
      type: 'object',
      "default": {
        val: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat enim vel ligula suscipit semper. Nunc blandit, magna vitae euismod molestie, nibh neque pulvinar erat, dictum egestas magna urna id arcu.',
        style: {}
      }
    },
    image: {
      type: 'object',
      "default": {
        url: '',
        alt: ''
      }
    },
    buttons: {
      type: 'array',
      "default": []
    },
    floatings: {
      type: 'array',
      "default": []
    },
    style: {
      type: 'object',
      "default": {}
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;

    var updateButton = function updateButton(button) {
      return setAttributes({
        buttons: [].concat(cloneArray(attributes.buttons.filter(function (itemFilter) {
          return itemFilter.index != button.index;
        })), [button])
      });
    };

    var updateFloating = function updateFloating(button) {
      return setAttributes({
        floatings: [].concat(cloneArray(attributes.floatings.filter(function (itemFilter) {
          return itemFilter.index != button.index;
        })), [button])
      });
    };

    var removeFloatingButton = function removeFloatingButton(val) {
      return setAttributes({
        floatings: attributes.floatings.filter(function (itemFilter) {
          return itemFilter.index != val;
        })
      });
    };

    var renderFloatings = function renderFloatings() {
      return attributes.floatings.sort(function (a, b) {
        return a.index - b.index;
      }).map(function (btn) {
        return wp.element.createElement("div", {
          className: "sg-floating"
        }, wp.element.createElement(RichText, {
          className: "sg-button-label",
          value: btn.label,
          onChange: function onChange(value) {
            return updateFloating(_objectSpread(_objectSpread({}, btn), {}, {
              label: value
            }));
          },
          placeholder: 'Texto del botón',
          multiline: false
        }), wp.element.createElement(IconButton, {
          icon: "admin-links",
          label: "Link",
          onClick: function onClick() {
            var val = btn.displayLink == 'none' ? 'block' : 'none';
            updateFloating(_objectSpread(_objectSpread({}, btn), {}, {
              displayLink: val
            }));
          }
        }), wp.element.createElement(IconButton, {
          icon: "trash",
          label: "Delete",
          onClick: function onClick() {
            return removeFloatingButton(btn.index);
          }
        }), wp.element.createElement(TextControl, {
          className: "sg-button-href",
          onChange: function onChange(value) {
            return updateFloating(_objectSpread(_objectSpread({}, btn), {}, {
              href: value
            }));
          },
          value: btn.href,
          style: {
            display: btn.displayLink
          }
        }));
      });
    };

    var renderButtons = function renderButtons() {
      return attributes.buttons.sort(function (a, b) {
        return a.index - b.index;
      }).map(function (btn) {
        return wp.element.createElement("div", {
          className: "sg-button"
        }, wp.element.createElement(RichText, {
          className: "sg-button-label",
          value: btn.label,
          onChange: function onChange(value) {
            return updateButton(_objectSpread(_objectSpread({}, btn), {}, {
              label: value
            }));
          },
          placeholder: 'Texto del botón',
          multiline: false
        }), wp.element.createElement(IconButton, {
          icon: "admin-links",
          label: "Link",
          onClick: function onClick() {
            var val = btn.displayLink == 'none' ? 'block' : 'none';
            updateButton(_objectSpread(_objectSpread({}, btn), {}, {
              displayLink: val
            }));
          }
        }), wp.element.createElement(IconButton, {
          icon: "trash",
          label: "Delete",
          onClick: function onClick() {
            return removeLinkButton(btn.index);
          }
        }), wp.element.createElement(TextControl, {
          className: "sg-button-href",
          onChange: function onChange(value) {
            return updateButton(_objectSpread(_objectSpread({}, btn), {}, {
              href: value
            }));
          },
          value: btn.href,
          style: {
            display: btn.displayLink
          }
        }));
      });
    };

    var addFloatingButton = function addFloatingButton() {
      var btnlink = {
        index: attributes.floatings.length,
        label: 'Add label',
        href: '#',
        displayLink: 'none'
      };
      return setAttributes({
        floatings: [].concat(cloneArray(attributes.floatings), [btnlink])
      });
    };

    var removeLinkButton = function removeLinkButton(val) {
      return setAttributes({
        buttons: attributes.buttons.filter(function (itemFilter) {
          return itemFilter.index != val;
        })
      });
    };

    var addLinkButton = function addLinkButton() {
      var btnlink = {
        index: attributes.buttons.length,
        label: 'Add label',
        href: '#',
        displayLink: 'none'
      };
      return setAttributes({
        buttons: [].concat(cloneArray(attributes.buttons), [btnlink])
      });
    };

    var cloneArray = function cloneArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      } else {
        return Array.from(arr);
      }
    };

    var inspectorControl = function inspectorControl() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: 'Diseño',
        initialOpen: false
      }, wp.element.createElement(SelectControl, {
        label: 'Card style',
        value: attributes.type,
        onChange: function onChange(value) {
          setAttributes({
            type: value
          });
        },
        options: [{
          value: 'basic',
          label: 'Basic Card'
        }, {
          value: 'image',
          label: 'Image Card'
        }, {
          value: 'overlay',
          label: 'Overlay Card'
        }]
      }), wp.element.createElement(CheckboxControl, {
        label: "Inverse",
        checked: attributes.cardInverse,
        onChange: function onChange(value) {
          return setAttributes({
            cardInverse: value
          });
        }
      }), wp.element.createElement(ColorPalette, {
        colors: _helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"],
        value: attributes.style.backgroundColor,
        onChange: function onChange(value) {
          setAttributes({
            style: _objectSpread(_objectSpread({}, attributes.style), {}, {
              backgroundColor: "".concat(value)
            })
          });
        }
      })));
    };

    var getBasicCard = function getBasicCard() {
      return wp.element.createElement("div", {
        className: "card",
        style: attributes.style
      }, wp.element.createElement("div", {
        className: "card-content"
      }, wp.element.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_0__["default"], {
        className: "card-title",
        type: "h3",
        onChange: function onChange(value) {
          return setAttributes({
            title: value
          });
        },
        value: attributes.title.val,
        style: attributes.title.style,
        placeholder: "Agrega un título"
      }), wp.element.createElement(_components_Paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: "p",
        onChange: function onChange(value) {
          return setAttributes({
            paragraph: value
          });
        },
        value: attributes.paragraph.val,
        style: attributes.paragraph.style,
        placeholder: "Agrega aquí el cuerpo de la tarjeta"
      })), wp.element.createElement("div", {
        className: "card-action"
      }, wp.element.createElement(IconButton, {
        className: "add-card-action",
        icon: "plus-alt",
        label: "More",
        onClick: function onClick() {
          return addLinkButton();
        }
      }), attributes.buttons.sort(function (a, b) {
        return a.index - b.index;
      }).map(function (btn) {
        return wp.element.createElement("div", {
          className: "sg-button"
        }, wp.element.createElement(RichText, {
          className: "sg-button-label",
          value: btn.label,
          onChange: function onChange(value) {
            return updateButton(_objectSpread(_objectSpread({}, btn), {}, {
              label: value
            }));
          },
          placeholder: 'Texto del botón',
          multiline: false
        }), wp.element.createElement(IconButton, {
          icon: "admin-links",
          label: "Link",
          onClick: function onClick() {
            var val = btn.displayLink == 'none' ? 'block' : 'none';
            updateButton(_objectSpread(_objectSpread({}, btn), {}, {
              displayLink: val
            }));
          }
        }), wp.element.createElement(IconButton, {
          icon: "trash",
          label: "Delete",
          onClick: function onClick() {
            return removeLinkButton(btn.index);
          }
        }), wp.element.createElement(TextControl, {
          className: "sg-button-href",
          onChange: function onChange(value) {
            return updateButton(_objectSpread(_objectSpread({}, btn), {}, {
              href: value
            }));
          },
          value: btn.href,
          style: {
            display: btn.displayLink
          }
        }));
      })));
    };

    var getImageCard = function getImageCard() {
      var cardImage = wp.element.createElement("div", {
        className: "card-image"
      }, wp.element.createElement(_components_GraphicPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: function onChange(media) {
          return setAttributes({
            image: media
          });
        },
        url: attributes.image.url,
        alt: attributes.image.alt
      }), wp.element.createElement("div", {
        className: "floating-area"
      }, wp.element.createElement(IconButton, {
        className: "add-floating-action",
        icon: "plus-alt",
        label: "More",
        onClick: function onClick() {
          return addFloatingButton();
        }
      }), renderFloatings()));
      var cardContent = wp.element.createElement("div", {
        className: "card-content"
      }, wp.element.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_0__["default"], {
        className: "card-title",
        type: "h3",
        onChange: function onChange(value) {
          return setAttributes({
            title: value
          });
        },
        value: attributes.title.val,
        style: attributes.title.style,
        placeholder: "Agrega un título"
      }), wp.element.createElement(_components_Paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: "p",
        onChange: function onChange(value) {
          return setAttributes({
            paragraph: value
          });
        },
        value: attributes.paragraph.val,
        style: attributes.paragraph.style,
        placeholder: "Agrega aquí el cuerpo de la tarjeta"
      }));

      var renderContent = function renderContent() {
        if (attributes.cardInverse) {
          return [cardContent, cardImage];
        } else {
          return [cardImage, cardContent];
        }
      };

      return wp.element.createElement("div", {
        className: "card",
        style: attributes.style
      }, renderContent(), wp.element.createElement("div", {
        className: "card-action"
      }, wp.element.createElement(IconButton, {
        className: "add-card-action",
        icon: "plus-alt",
        label: "More",
        onClick: function onClick() {
          return addLinkButton();
        }
      }), renderButtons()));
    };

    var getOverlayCard = function getOverlayCard() {
      return wp.element.createElement("div", {
        className: "card"
      }, wp.element.createElement("div", {
        className: "card-content"
      }, wp.element.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_0__["default"], {
        className: "card-title",
        type: "span",
        onChange: function onChange(value) {
          return setAttributes({
            title: value
          });
        },
        value: attributes.title.val,
        style: attributes.title.style,
        placeholder: "Agrega un título"
      })), wp.element.createElement("div", {
        className: "card-image waves-effect waves-block waves-light"
      }, wp.element.createElement("div", {
        className: "card-image"
      }, wp.element.createElement(_components_GraphicPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: function onChange(media) {
          return setAttributes({
            image: media
          });
        },
        url: attributes.image.url,
        alt: attributes.image.alt
      }))), wp.element.createElement("div", {
        className: "center-align"
      }, wp.element.createElement("span", {
        className: "card-title activator"
      }, "Abrir overlay")), wp.element.createElement("div", {
        className: "card-reveal overlay-content"
      }, wp.element.createElement("span", {
        className: "card-title activator",
        style: attributes.title.style
      }, attributes.title.val), wp.element.createElement(_components_Paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: "p",
        onChange: function onChange(value) {
          return setAttributes({
            paragraph: value
          });
        },
        value: attributes.paragraph.val,
        style: attributes.paragraph.style,
        placeholder: "Agrega aquí el cuerpo de la tarjeta"
      })));
    };

    var getCard = function getCard() {
      switch (attributes.type) {
        case 'basic':
          return getBasicCard();
          break;

        case 'image':
          return getImageCard();
          break;

        case 'overlay':
          return getOverlayCard();
          break;

        default:
          break;
      }
    };

    return [inspectorControl(), wp.element.createElement("div", {
      className: "wp-block-sg-card"
    }, getCard())];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;

    var getCardActions = function getCardActions() {
      if (attributes.buttons.length > 0) {
        return wp.element.createElement("div", {
          className: "card-action"
        }, attributes.buttons.map(function (button) {
          return wp.element.createElement("a", {
            href: button.href
          }, button.label);
        }));
      }
    };

    var getFloatingActions = function getFloatingActions() {
      if (attributes.floatings.length > 0) {
        return attributes.floatings.map(function (button) {
          return wp.element.createElement("a", {
            className: "btn-floating halfway-fab waves-effect waves-light no-radius auto-width ".concat(attributes.cardInverse ? 'top' : ''),
            href: button.href
          }, button.label);
        });
      }
    };

    var getBasicCard = function getBasicCard() {
      return wp.element.createElement("div", {
        className: "card",
        style: attributes.style
      }, wp.element.createElement("div", {
        className: "card-content"
      }, wp.element.createElement(RichText.Content, {
        tagName: 'h3',
        className: 'card-title',
        value: attributes.title.val,
        style: attributes.title.style
      }), wp.element.createElement("div", {
        style: attributes.paragraph.style
      }, wp.element.createElement(RichText.Content, {
        value: attributes.paragraph.val
      }))), getCardActions());
    };

    var getImageCard = function getImageCard() {
      var cardImage = wp.element.createElement("div", {
        className: "card-image"
      }, wp.element.createElement("img", {
        src: attributes.image.url,
        alt: attributes.image.alt
      }), getFloatingActions());
      var cardContent = wp.element.createElement("div", {
        className: "card-content"
      }, wp.element.createElement(RichText.Content, {
        tagName: 'h3',
        className: 'card-title',
        value: attributes.title.val,
        style: attributes.title.style
      }), wp.element.createElement("div", {
        style: attributes.paragraph.style
      }, wp.element.createElement(RichText.Content, {
        value: attributes.paragraph.val
      })));

      var renderContent = function renderContent() {
        if (attributes.cardInverse) {
          return [cardContent, cardImage];
        } else {
          return [cardImage, cardContent];
        }
      };

      return wp.element.createElement("div", {
        className: "card",
        style: attributes.style
      }, [renderContent(), getCardActions()]);
    };

    var getOverlayCard = function getOverlayCard() {
      return wp.element.createElement("div", {
        className: "card"
      }, wp.element.createElement("div", {
        className: "card-content"
      }, wp.element.createElement(RichText.Content, {
        tagName: 'span',
        className: 'card-title activator',
        value: attributes.title.val,
        style: attributes.title.style
      })), wp.element.createElement("div", {
        className: "card-image waves-effect waves-block waves-light"
      }, wp.element.createElement("div", {
        className: "card-image"
      }, wp.element.createElement("img", {
        className: "activator",
        src: attributes.image.url,
        alt: attributes.image.alt
      }))), wp.element.createElement("div", {
        className: "card-reveal overlay-content"
      }, wp.element.createElement(RichText.Content, {
        tagName: 'span',
        className: 'card-title activator',
        value: attributes.title.val,
        style: attributes.title.style
      }), wp.element.createElement("div", {
        style: attributes.paragraph.style
      }, wp.element.createElement(RichText.Content, {
        value: attributes.paragraph.val
      }))));
    };

    var getCard = function getCard() {
      switch (attributes.type) {
        case 'basic':
          return getBasicCard();
          break;

        case 'image':
          return getImageCard();
          break;

        case 'overlay':
          return getOverlayCard();
          break;

        default:
          break;
      }
    };

    return getCard();
  }
});

/***/ }),

/***/ "./blocks/src/blocks/card/editor.scss":
/*!********************************************!*\
  !*** ./blocks/src/blocks/card/editor.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/card/style.scss":
/*!*******************************************!*\
  !*** ./blocks/src/blocks/card/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/column/block.js":
/*!*******************************************!*\
  !*** ./blocks/src/blocks/column/block.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./blocks/src/blocks/column/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./blocks/src/blocks/column/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/blocks/column/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/blocks/column/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var registerBlockType = wp.blocks.registerBlockType;




registerBlockType('sg/column', {
  title: 'Column',
  icon: 'star-empty',
  category: 'sg',
  attributes: {
    hasContainer: {
      type: 'boolean',
      "default": false
    },
    small: {
      type: 'string',
      "default": 's12'
    },
    medium: {
      type: 'string',
      "default": ''
    },
    large: {
      type: 'string',
      "default": ''
    },
    offsetSmall: {
      type: 'string',
      "default": ''
    },
    offsetMedium: {
      type: 'string',
      "default": ''
    },
    offsetLarge: {
      type: 'string',
      "default": ''
    },
    style: {
      type: 'object',
      "default": {}
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/src/blocks/column/edit.js":
/*!******************************************!*\
  !*** ./blocks/src/blocks/column/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnEdit; });
/* harmony import */ var _style_EditBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/EditBackground */ "./blocks/src/style/EditBackground.js");
/* harmony import */ var _style_EditSpaceDimension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style/EditSpaceDimension */ "./blocks/src/style/EditSpaceDimension.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TabPanel = _wp$components.TabPanel;
var Component = wp.element.Component;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var classes = "";

var ColumnEdit = /*#__PURE__*/function (_Component) {
  _inherits(ColumnEdit, _Component);

  var _super = _createSuper(ColumnEdit);

  function ColumnEdit() {
    _classCallCheck(this, ColumnEdit);

    return _super.apply(this, arguments);
  }

  _createClass(ColumnEdit, [{
    key: "render",
    value: function render() {
      var clientId = this.props.clientId;
      var select = wp.data.select;
      var parentBlock = select('core/block-editor').getBlocksByClientId(clientId)[0];
      var childBlocks = parentBlock.innerBlocks;

      var emptyBlock = function emptyBlock() {
        if (childBlocks.length == 0) {
          return wp.element.createElement("div", {
            className: "sg-empty-inner-block"
          }, wp.element.createElement("div", {
            className: "sg-block-name"
          }, wp.element.createElement("span", {
            "class": "dashicons dashicons-screenoptions"
          }), "Column"), "Comienza a armar tu contenido con uno o m\xE1s bloques de la librer\xEDa presionando en el bot\xF3n m\xE1s.");
        }
      };

      var _this$props = this.props,
          className = _this$props.className,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      classes = attributes.small;
      var renderTab1 = wp.element.createElement("div", null, wp.element.createElement(SelectControl, {
        label: "Small",
        value: attributes.small,
        options: [{
          label: 's1',
          value: 's1'
        }, {
          label: 's2',
          value: 's2'
        }, {
          label: 's3',
          value: 's3'
        }, {
          label: 's4',
          value: 's4'
        }, {
          label: 's5',
          value: 's5'
        }, {
          label: 's6',
          value: 's6'
        }, {
          label: 's7',
          value: 's7'
        }, {
          label: 's8',
          value: 's8'
        }, {
          label: 's9',
          value: 's9'
        }, {
          label: 's10',
          value: 's10'
        }, {
          label: 's11',
          value: 's11'
        }, {
          label: 's12',
          value: 's12'
        }],
        onChange: function onChange(value) {
          setAttributes({
            small: value
          });
          wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
        }
      }), wp.element.createElement(SelectControl, {
        label: "Medium",
        value: attributes.medium,
        options: [{
          label: '-',
          value: ''
        }, {
          label: 'm1',
          value: 'm1'
        }, {
          label: 'm2',
          value: 'm2'
        }, {
          label: 'm3',
          value: 'm3'
        }, {
          label: 'm4',
          value: 'm4'
        }, {
          label: 'm5',
          value: 'm5'
        }, {
          label: 'm6',
          value: 'm6'
        }, {
          label: 'm7',
          value: 'm7'
        }, {
          label: 'm8',
          value: 'm8'
        }, {
          label: 'm9',
          value: 'm9'
        }, {
          label: 'm10',
          value: 'm10'
        }, {
          label: 'm11',
          value: 'm11'
        }, {
          label: 'm12',
          value: 'm12'
        }],
        onChange: function onChange(value) {
          setAttributes({
            medium: value
          });
          wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
        }
      }), wp.element.createElement(SelectControl, {
        label: "Large",
        value: attributes.large,
        options: [{
          label: '-',
          value: ''
        }, {
          label: 'l1',
          value: 'l1'
        }, {
          label: 'l2',
          value: 'l2'
        }, {
          label: 'l3',
          value: 'l3'
        }, {
          label: 'l4',
          value: 'l4'
        }, {
          label: 'l5',
          value: 'l5'
        }, {
          label: 'l6',
          value: 'l6'
        }, {
          label: 'l7',
          value: 'l7'
        }, {
          label: 'l8',
          value: 'l8'
        }, {
          label: 'l9',
          value: 'l9'
        }, {
          label: 'l10',
          value: 'l10'
        }, {
          label: 'l11',
          value: 'l11'
        }, {
          label: 'l12',
          value: 'l12'
        }],
        onChange: function onChange(value) {
          setAttributes({
            large: value
          });
          wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
        }
      }), wp.element.createElement(SelectControl, {
        label: "Offset small",
        value: attributes.offsetSmall,
        options: [{
          label: '-',
          value: ''
        }, {
          label: 'offset-s1',
          value: 'offset-s1'
        }, {
          label: 'offset-s2',
          value: 'offset-s2'
        }, {
          label: 'offset-s3',
          value: 'offset-s3'
        }, {
          label: 'offset-s4',
          value: 'offset-s4'
        }, {
          label: 'offset-s5',
          value: 'offset-s5'
        }, {
          label: 'offset-s6',
          value: 'offset-s6'
        }, {
          label: 'offset-s7',
          value: 'offset-s7'
        }, {
          label: 'offset-s8',
          value: 'offset-s8'
        }, {
          label: 'offset-s9',
          value: 'offset-s9'
        }, {
          label: 'offset-s10',
          value: 'offset-s10'
        }, {
          label: 'offset-s11',
          value: 'offset-s11'
        }, {
          label: 'offset-s12',
          value: 'offset-s12'
        }],
        onChange: function onChange(value) {
          setAttributes({
            offsetSmall: value
          });
          wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
        }
      }), wp.element.createElement(SelectControl, {
        label: "Offset medium",
        value: attributes.offsetMedium,
        options: [{
          label: '-',
          value: ''
        }, {
          label: 'offset-m1',
          value: 'offset-m1'
        }, {
          label: 'offset-m2',
          value: 'offset-m2'
        }, {
          label: 'offset-m3',
          value: 'offset-m3'
        }, {
          label: 'offset-m4',
          value: 'offset-m4'
        }, {
          label: 'offset-m5',
          value: 'offset-m5'
        }, {
          label: 'offset-m6',
          value: 'offset-m6'
        }, {
          label: 'offset-m7',
          value: 'offset-m7'
        }, {
          label: 'offset-m8',
          value: 'offset-m8'
        }, {
          label: 'offset-m9',
          value: 'offset-m9'
        }, {
          label: 'offset-m10',
          value: 'offset-m10'
        }, {
          label: 'offset-m11',
          value: 'offset-m11'
        }, {
          label: 'offset-m12',
          value: 'offset-m12'
        }],
        onChange: function onChange(value) {
          setAttributes({
            offsetMedium: value
          });
          wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
        }
      }), wp.element.createElement(SelectControl, {
        label: "Offset large",
        value: attributes.offsetLarge,
        options: [{
          label: '-',
          value: ''
        }, {
          label: 'offset-l1',
          value: 'offset-l1'
        }, {
          label: 'offset-l2',
          value: 'offset-l2'
        }, {
          label: 'offset-l3',
          value: 'offset-l3'
        }, {
          label: 'offset-l4',
          value: 'offset-l4'
        }, {
          label: 'offset-l5',
          value: 'offset-l5'
        }, {
          label: 'offset-l6',
          value: 'offset-l6'
        }, {
          label: 'offset-l7',
          value: 'offset-l7'
        }, {
          label: 'offset-l8',
          value: 'offset-l8'
        }, {
          label: 'offset-l9',
          value: 'offset-l9'
        }, {
          label: 'offset-l10',
          value: 'offset-l10'
        }, {
          label: 'offset-l11',
          value: 'offset-l11'
        }, {
          label: 'offset-l12',
          value: 'offset-l12'
        }],
        onChange: function onChange(value) {
          setAttributes({
            offsetLarge: value
          });
          wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
        }
      }));
      var renderTab2 = wp.element.createElement("div", null, Object(_style_EditBackground__WEBPACK_IMPORTED_MODULE_0__["default"])(this.props));
      var renderTab3 = wp.element.createElement("div", null, Object(_style_EditSpaceDimension__WEBPACK_IMPORTED_MODULE_1__["default"])(this.props));

      var renderTab = function renderTab(tabName) {
        switch (tabName) {
          case 'tab1':
            return renderTab1;
            break;

          case 'tab2':
            return renderTab2;
            break;

          case 'tab3':
            return renderTab3;
            break;

          default:
            return renderTab1;
            break;
        }
      };

      return [wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: "Ajustes"
      }, wp.element.createElement(PanelRow, null, wp.element.createElement(TabPanel, {
        className: "sg-tab-panel",
        activeClass: "active-tab",
        tabs: [{
          name: 'tab1',
          title: 'Grid',
          className: 'tab-one'
        }, {
          name: 'tab2',
          title: 'BG',
          className: 'tab-two'
        }, {
          name: 'tab3',
          title: 'Dim',
          className: 'tab-three'
        }]
      }, function (tab) {
        return renderTab(tab.name);
      })))), emptyBlock(), wp.element.createElement("div", {
        className: "col-content",
        style: attributes.style
      }, wp.element.createElement(InnerBlocks, {
        renderAppender: function renderAppender() {
          return wp.element.createElement("div", {
            "class": "apender-container"
          }, wp.element.createElement("div", {
            className: "block-editor-text-block-appender"
          }, wp.element.createElement("i", null, wp.element.createElement("div", {
            className: "sg-block-name"
          }, wp.element.createElement("span", {
            className: "dashicons dashicons-screenoptions"
          }), "Column"))), wp.element.createElement(InnerBlocks.ButtonBlockAppender, null));
        }
      }))];
    }
  }]);

  return ColumnEdit;
}(Component);


var columnCustomClassName = createHigherOrderComponent(function (BlockListBlock) {
  return function (props) {
    if (props.name == "sg/column") {
      return wp.element.createElement(BlockListBlock, _extends({}, props, {
        className: "col ".concat(props.attributes.small, " ").concat(props.attributes.medium, " ").concat(props.attributes.large, " ").concat(props.attributes.offsetSmall, " ").concat(props.attributes.offsetMedium, " ").concat(props.attributes.offsetLarge)
      }));
    }

    return wp.element.createElement(BlockListBlock, props);
  };
}, 'columnCustomClassName');
wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);

/***/ }),

/***/ "./blocks/src/blocks/column/editor.scss":
/*!**********************************************!*\
  !*** ./blocks/src/blocks/column/editor.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/column/save.js":
/*!******************************************!*\
  !*** ./blocks/src/blocks/column/save.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RowSave; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;
var InnerBlocks = wp.blockEditor.InnerBlocks;

var RowSave = /*#__PURE__*/function (_Component) {
  _inherits(RowSave, _Component);

  var _super = _createSuper(RowSave);

  function RowSave() {
    _classCallCheck(this, RowSave);

    return _super.apply(this, arguments);
  }

  _createClass(RowSave, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          attributes = _this$props.attributes;
      return wp.element.createElement("div", {
        className: "col ".concat(className, " ").concat(attributes.small, " ").concat(attributes.medium, " ").concat(attributes.large, " ").concat(attributes.offsetSmall, " ").concat(attributes.offsetMedium, " ").concat(attributes.offsetLarge),
        style: attributes.style
      }, wp.element.createElement(InnerBlocks.Content, null));
    }
  }]);

  return RowSave;
}(Component);



/***/ }),

/***/ "./blocks/src/blocks/column/style.scss":
/*!*********************************************!*\
  !*** ./blocks/src/blocks/column/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/gallery/edit.js":
/*!*******************************************!*\
  !*** ./blocks/src/blocks/gallery/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlothGeekGalleryEdit; });
/* harmony import */ var _components_GraphicPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/GraphicPicker */ "./blocks/src/components/GraphicPicker.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    PlainText = _wp$blockEditor.PlainText;
var Component = wp.element.Component;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl;


var SlothGeekGalleryEdit = /*#__PURE__*/function (_Component) {
  _inherits(SlothGeekGalleryEdit, _Component);

  var _super = _createSuper(SlothGeekGalleryEdit);

  function SlothGeekGalleryEdit() {
    _classCallCheck(this, SlothGeekGalleryEdit);

    return _super.apply(this, arguments);
  }

  _createClass(SlothGeekGalleryEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("grid_count: " + this.props.attributes.grid_count);
    }
  }, {
    key: "onChangeEvent",
    value: function onChangeEvent(item, model) {
      var newObject = Object.assign({}, item, model);
      return this.props.setAttributes({
        items: [].concat(this.cloneArray(this.props.attributes.items.filter(function (itemFilter) {
          return itemFilter.index != item.index;
        })), [newObject])
      });
    }
  }, {
    key: "cloneArray",
    value: function cloneArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      } else {
        return Array.from(arr);
      }
    }
  }, {
    key: "renderEditItem",
    value: function renderEditItem(item) {
      var _this = this;

      var columnWidth = 100 / this.props.attributes.grid_count;
      return wp.element.createElement("div", {
        className: "sg-item",
        style: {
          width: "".concat(columnWidth, "%")
        }
      }, wp.element.createElement(_components_GraphicPicker__WEBPACK_IMPORTED_MODULE_0__["default"], {
        onChange: function onChange(media) {
          return _this.onChangeEvent(item, {
            imageUrl: media.url
          });
        },
        url: item.imageUrl,
        alt: item.imageAlt
      }), wp.element.createElement(PlainText, {
        onChange: function onChange(value) {
          return _this.onChangeEvent(item, {
            url: value
          });
        },
        value: item.url,
        placeholder: "url"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;

      var renderItems = function renderItems() {
        if (attributes.items.length > 0) {
          return attributes.items.sort(function (a, b) {
            return a.index - b.index;
          }).map(function (item) {
            return _this2.renderEditItem(item);
          });
        } else {
          return wp.element.createElement("span", null, "No hay item para mostrar");
        }
      };

      var inspectorControls = wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: "Ajustes"
      }, wp.element.createElement(RangeControl, {
        label: "Número de columnas",
        value: attributes.grid_count,
        onChange: function onChange(value) {
          return setAttributes({
            grid_count: value
          });
        },
        min: 1,
        max: 12,
        required: true
      })));
      return wp.element.createElement("div", null, wp.element.createElement(BlockControls, null, wp.element.createElement(IconButton, {
        onClick: function onClick() {
          return setAttributes({
            items: [].concat(_this2.cloneArray(attributes.items), [{
              index: attributes.items.length,
              imageUrl: "",
              imageAlt: "",
              url: ""
            }])
          });
        },
        icon: "plus",
        label: "Agregar"
      })), inspectorControls, wp.element.createElement("div", {
        className: "sg-gallery"
      }, wp.element.createElement("div", {
        className: "sg-gallery-inner"
      }, renderItems())));
    }
  }]);

  return SlothGeekGalleryEdit;
}(Component);



/***/ }),

/***/ "./blocks/src/blocks/gallery/editor.scss":
/*!***********************************************!*\
  !*** ./blocks/src/blocks/gallery/editor.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/gallery/gallery.js":
/*!**********************************************!*\
  !*** ./blocks/src/blocks/gallery/gallery.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./blocks/src/blocks/gallery/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./blocks/src/blocks/gallery/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/blocks/gallery/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/blocks/gallery/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;




registerBlockType('sg/gallery', {
  title: 'Gallery',
  icon: 'star-empty',
  category: 'sg',
  attributes: {
    grid_count: {
      source: 'attribute',
      attribute: 'data-count',
      selector: '.sg-gallery-inner',
      "default": 3
    },
    items: {
      source: 'query',
      "default": [],
      selector: '.sg-item',
      query: {
        index: {
          type: 'number',
          source: 'attribute',
          attribute: 'data-index'
        },
        url: {
          source: 'attribute',
          attribute: 'href',
          selector: '.sg-item-link'
        },
        imageUrl: {
          source: 'attribute',
          attribute: 'src',
          selector: '.sg-item-graphic'
        },
        imageAlt: {
          source: 'attribute',
          attribute: 'alt',
          selector: '.sg-item-graphic'
        }
      }
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/src/blocks/gallery/save.js":
/*!*******************************************!*\
  !*** ./blocks/src/blocks/gallery/save.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlothGeekGallerySave; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;

var SlothGeekGallerySave = /*#__PURE__*/function (_Component) {
  _inherits(SlothGeekGallerySave, _Component);

  var _super = _createSuper(SlothGeekGallerySave);

  function SlothGeekGallerySave() {
    _classCallCheck(this, SlothGeekGallerySave);

    return _super.apply(this, arguments);
  }

  _createClass(SlothGeekGallerySave, [{
    key: "renderItem",
    value: function renderItem(item, index) {
      var columnWidth = 100 / this.props.attributes.grid_count;
      return wp.element.createElement("div", {
        className: "sg-item",
        "data-index": index,
        style: {
          width: "".concat(columnWidth, "%")
        }
      }, wp.element.createElement("a", {
        className: "sg-item-link",
        href: item.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, wp.element.createElement("img", {
        className: "sg-item-graphic",
        src: item.imageUrl,
        alt: item.imageAlt
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var attributes = this.props.attributes;
      return wp.element.createElement("div", {
        className: "sg-gallery col s12"
      }, wp.element.createElement("div", {
        className: "sg-gallery-inner",
        "data-count": attributes.grid_count
      }, attributes.items.map(function (item, index) {
        return _this.renderItem(item, index);
      })));
    }
  }]);

  return SlothGeekGallerySave;
}(Component);



/***/ }),

/***/ "./blocks/src/blocks/gallery/style.scss":
/*!**********************************************!*\
  !*** ./blocks/src/blocks/gallery/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/ganimation/block.js":
/*!***********************************************!*\
  !*** ./blocks/src/blocks/ganimation/block.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./blocks/src/blocks/ganimation/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./blocks/src/blocks/ganimation/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/blocks/ganimation/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/blocks/ganimation/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;




registerBlockType('sg/ganimation', {
  title: 'Graphic Stack',
  icon: 'star-empty',
  category: 'sg',
  attributes: {
    id: {
      "default": ""
    },
    items: {
      "default": []
    },
    graphic: {
      type: 'object',
      "default": {
        url: '',
        alt: ''
      }
    },
    maxWidth: {
      "default": "550px"
    },
    animation: {
      "default": ""
    },
    duration: {
      "default": ""
    },
    delay: {
      "default": ""
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/src/blocks/ganimation/edit.js":
/*!**********************************************!*\
  !*** ./blocks/src/blocks/ganimation/edit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlothGeekGalleryEdit; });
/* harmony import */ var _components_GraphicPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/GraphicPicker */ "./blocks/src/components/GraphicPicker.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload;
var Component = wp.element.Component;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    RangeControl = _wp$components.RangeControl,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button;

var SlothGeekGalleryEdit = /*#__PURE__*/function (_Component) {
  _inherits(SlothGeekGalleryEdit, _Component);

  var _super = _createSuper(SlothGeekGalleryEdit);

  function SlothGeekGalleryEdit() {
    _classCallCheck(this, SlothGeekGalleryEdit);

    return _super.apply(this, arguments);
  }

  _createClass(SlothGeekGalleryEdit, [{
    key: "pushNewItem",
    value: function pushNewItem() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var item = {
        index: attributes.items.length,
        id: "",
        graphicUrl: "",
        gracphicAlt: "",
        animation: "",
        style: {
          width: "100%",
          bottom: "0",
          left: "0"
        }
      };
      return setAttributes({
        items: [].concat(this.cloneArray(attributes.items), [item])
      });
    }
  }, {
    key: "updateItem",
    value: function updateItem(item) {
      var setAttributes = this.props.setAttributes;
      return setAttributes({
        items: [].concat(this.cloneArray(this.props.attributes.items.filter(function (itemFilter) {
          return itemFilter.index != item.index;
        })), [item])
      });
    }
  }, {
    key: "cloneArray",
    value: function cloneArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      } else {
        return Array.from(arr);
      }
    }
  }, {
    key: "renderGraphic",
    value: function renderGraphic(open) {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;

      if (attributes.graphic.url !== '' && attributes.graphic.url !== undefined) {
        return wp.element.createElement("div", {
          className: "components-base-control"
        }, wp.element.createElement("img", {
          src: attributes.graphic.url,
          alt: "",
          style: {
            width: '100%'
          }
        }), wp.element.createElement("div", {
          className: "sg-toolbar"
        }, wp.element.createElement(IconButton, {
          icon: "edit",
          label: "Edit",
          onClick: open
        }), wp.element.createElement(IconButton, {
          icon: "trash",
          label: "Delete",
          onClick: function onClick() {
            setAttributes({
              graphic: {
                url: '',
                alt: ''
              }
            });
          }
        })));
      } else {
        return wp.element.createElement("div", {
          className: "components-base-control"
        }, wp.element.createElement("div", {
          className: "no-image"
        }), wp.element.createElement(Button, {
          onClick: open,
          className: "sg-button full button"
        }, "Agregar"));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props3 = this.props,
          attributes = _this$props3.attributes,
          setAttributes = _this$props3.setAttributes;
      var blockControls = wp.element.createElement(BlockControls, null, wp.element.createElement(IconButton, {
        onClick: function onClick() {
          return _this.pushNewItem();
        },
        icon: "plus",
        label: "Agregar"
      }));
      var mainControl = wp.element.createElement(PanelBody, {
        title: "Graphic Stack",
        initialOpen: false
      }, wp.element.createElement("div", null, wp.element.createElement("label", null, "Imagen de Fondo"), wp.element.createElement(MediaUpload, {
        type: "Imagen",
        value: attributes.graphic,
        onSelect: function onSelect(media) {
          setAttributes({
            graphic: media
          });
        },
        render: function render(_ref) {
          var open = _ref.open;
          return _this.renderGraphic(open);
        }
      })), wp.element.createElement(RangeControl, {
        label: "Ancho máximo",
        value: parseInt(attributes.maxWidth + ''),
        onChange: function onChange(value) {
          return _this.props.setAttributes({
            maxWidth: "".concat(value, "px")
          });
        },
        min: 1,
        max: 1000
      }), wp.element.createElement(TextControl, {
        label: "Anclaje",
        value: attributes.id,
        onChange: function onChange(value) {
          return _this.props.setAttributes({
            id: value
          });
        }
      }));
      var itemsControl = attributes.items.sort(function (a, b) {
        return a.index - b.index;
      }).map(function (item) {
        return wp.element.createElement(PanelBody, {
          title: "Item ".concat(item.index + 1),
          initialOpen: false
        }, wp.element.createElement(TextControl, {
          label: "Anclaje",
          value: item.id,
          onChange: function onChange(value) {
            return _this.updateItem(_objectSpread(_objectSpread({}, item), {}, {
              id: value
            }));
          }
        }), wp.element.createElement(TextControl, {
          label: "Animación",
          value: item.animation,
          onChange: function onChange(value) {
            return _this.updateItem(_objectSpread(_objectSpread({}, item), {}, {
              animation: value
            }));
          }
        }), wp.element.createElement(RangeControl, {
          label: "Width",
          value: parseInt(item.style.width),
          onChange: function onChange(value) {
            return _this.updateItem(_objectSpread(_objectSpread({}, item), {}, {
              style: _objectSpread(_objectSpread({}, item.style), {}, {
                width: "".concat(value, "%")
              })
            }));
          },
          min: 1,
          max: 100
        }), wp.element.createElement(RangeControl, {
          label: "bottom",
          value: parseInt(item.style.bottom),
          onChange: function onChange(value) {
            return _this.updateItem(_objectSpread(_objectSpread({}, item), {}, {
              style: _objectSpread(_objectSpread({}, item.style), {}, {
                bottom: "".concat(value, "%")
              })
            }));
          },
          min: 0,
          max: 100
        }), wp.element.createElement(RangeControl, {
          label: "Left",
          value: parseInt(item.style.left),
          onChange: function onChange(value) {
            return _this.updateItem(_objectSpread(_objectSpread({}, item), {}, {
              style: _objectSpread(_objectSpread({}, item.style), {}, {
                left: "".concat(value, "%")
              })
            }));
          },
          min: 0,
          max: 100
        }), wp.element.createElement(TextControl, {
          label: "z-index",
          value: item.style.zIndex,
          onChange: function onChange(value) {
            return _this.updateItem(_objectSpread(_objectSpread({}, item), {}, {
              style: _objectSpread(_objectSpread({}, item.style), {}, {
                zIndex: parseInt(value)
              })
            }));
          }
        }));
      });
      return [blockControls, wp.element.createElement(InspectorControls, null, mainControl, itemsControl), wp.element.createElement("div", {
        className: "wp-block-sg-ganimation sg-items"
      }, wp.element.createElement("img", {
        src: attributes.graphic.url,
        alt: attributes.graphic.alt
      }), attributes.items.sort(function (a, b) {
        return a.index - b.index;
      }).map(function (item, index) {
        return wp.element.createElement("div", {
          className: "sg-item",
          "data-index": index,
          style: item.style
        }, wp.element.createElement("div", {
          className: "sg-item-graphic-inner"
        }, wp.element.createElement(_components_GraphicPicker__WEBPACK_IMPORTED_MODULE_0__["default"], {
          className: "sg-item-graphic",
          onChange: function onChange(media) {
            return _this.updateItem(_objectSpread(_objectSpread({}, item), {}, {
              graphicUrl: media.url,
              graphicAlt: media.alt
            }));
          },
          url: item.graphicUrl,
          alt: item.graphicAlt
        })));
      }))];
    }
  }]);

  return SlothGeekGalleryEdit;
}(Component);



/***/ }),

/***/ "./blocks/src/blocks/ganimation/editor.scss":
/*!**************************************************!*\
  !*** ./blocks/src/blocks/ganimation/editor.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/ganimation/save.js":
/*!**********************************************!*\
  !*** ./blocks/src/blocks/ganimation/save.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlothGeekGallerySave; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;

var SlothGeekGallerySave = /*#__PURE__*/function (_Component) {
  _inherits(SlothGeekGallerySave, _Component);

  var _super = _createSuper(SlothGeekGallerySave);

  function SlothGeekGallerySave() {
    _classCallCheck(this, SlothGeekGallerySave);

    return _super.apply(this, arguments);
  }

  _createClass(SlothGeekGallerySave, [{
    key: "render",
    value: function render() {
      var attributes = this.props.attributes;
      return wp.element.createElement("div", {
        id: attributes.id,
        className: "wp-block-sg-ganimation sg-items",
        style: {
          maxWidth: attributes.maxWidth
        }
      }, wp.element.createElement("img", {
        src: attributes.graphic.url,
        alt: attributes.graphic.alt
      }), attributes.items.map(function (item, index) {
        return [wp.element.createElement("div", {
          id: item.id,
          className: "sg-item",
          style: item.style,
          "data-animation": item.animation
        }, wp.element.createElement("img", {
          src: item.graphicUrl,
          alt: item.graphicAlt
        }))];
      }));
    }
  }]);

  return SlothGeekGallerySave;
}(Component);



/***/ }),

/***/ "./blocks/src/blocks/ganimation/style.scss":
/*!*************************************************!*\
  !*** ./blocks/src/blocks/ganimation/style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/hotgraphic/block.js":
/*!***********************************************!*\
  !*** ./blocks/src/blocks/hotgraphic/block.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./blocks/src/blocks/hotgraphic/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./blocks/src/blocks/hotgraphic/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/blocks/hotgraphic/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/blocks/hotgraphic/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;




registerBlockType('sg/hotgraphic', {
  title: 'HotGraphic',
  icon: 'star-empty',
  category: 'sg',
  attributes: {
    height: {
      type: 'string',
      "default": '400px'
    },
    items: {
      type: 'array',
      "default": []
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/src/blocks/hotgraphic/edit.js":
/*!**********************************************!*\
  !*** ./blocks/src/blocks/hotgraphic/edit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlothGeekGalleryEdit; });
/* harmony import */ var _components_GraphicPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/GraphicPicker */ "./blocks/src/components/GraphicPicker.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Component = wp.element.Component;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    RangeControl = _wp$components.RangeControl;

var SlothGeekGalleryEdit = /*#__PURE__*/function (_Component) {
  _inherits(SlothGeekGalleryEdit, _Component);

  var _super = _createSuper(SlothGeekGalleryEdit);

  function SlothGeekGalleryEdit() {
    _classCallCheck(this, SlothGeekGalleryEdit);

    return _super.apply(this, arguments);
  }

  _createClass(SlothGeekGalleryEdit, [{
    key: "pushNewItem",
    value: function pushNewItem() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var item = {
        index: attributes.items.length,
        title: '',
        graphicUrl: '',
        graphicAlt: '',
        body: '',
        style: {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '30%'
        }
      };
      return setAttributes({
        items: [].concat(this.cloneArray(attributes.items), [item])
      });
    }
  }, {
    key: "updateItem",
    value: function updateItem(item) {
      var setAttributes = this.props.setAttributes;
      return setAttributes({
        items: [].concat(this.cloneArray(this.props.attributes.items.filter(function (itemFilter) {
          return itemFilter.index != item.index;
        })), [item])
      });
    }
  }, {
    key: "cloneArray",
    value: function cloneArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      } else {
        return Array.from(arr);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var attributes = this.props.attributes;

      if (attributes.items.length == 0) {
        this.pushNewItem();
      }

      var inspectorControls = function inspectorControls() {
        return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
          title: "Hotgraphic",
          initialOpen: false
        }, wp.element.createElement(RangeControl, {
          label: "Alto",
          value: parseInt(attributes.height + ''),
          onChange: function onChange(value) {
            return _this.props.setAttributes({
              height: "".concat(value, "px")
            });
          },
          min: 1,
          max: 1000
        })), attributes.items.sort(function (a, b) {
          return a.index - b.index;
        }).map(function (item) {
          return wp.element.createElement(PanelBody, {
            title: "Item ".concat(item.index + 1),
            initialOpen: false
          }, wp.element.createElement(TextControl, {
            label: "Título",
            value: item.title,
            onChange: function onChange(value) {
              return _this.updateItem(_objectSpread(_objectSpread({}, item), {}, {
                title: value
              }));
            }
          }), wp.element.createElement(TextareaControl, {
            label: "Cuerpo",
            help: "Enter some text",
            value: item.body,
            onChange: function onChange(value) {
              return _this.updateItem(_objectSpread(_objectSpread({}, item), {}, {
                body: value
              }));
            }
          }), wp.element.createElement(RangeControl, {
            label: "Width",
            value: parseInt(item.style.width),
            onChange: function onChange(value) {
              return _this.updateItem(_objectSpread(_objectSpread({}, item), {}, {
                style: _objectSpread(_objectSpread({}, item.style), {}, {
                  width: "".concat(value, "%")
                })
              }));
            },
            min: 1,
            max: 100
          }), wp.element.createElement(RangeControl, {
            label: "Top",
            value: parseInt(item.style.top),
            onChange: function onChange(value) {
              return _this.updateItem(_objectSpread(_objectSpread({}, item), {}, {
                style: _objectSpread(_objectSpread({}, item.style), {}, {
                  top: "".concat(value, "%")
                })
              }));
            },
            min: 1,
            max: 100
          }), wp.element.createElement(RangeControl, {
            label: "Left",
            value: parseInt(item.style.left),
            onChange: function onChange(value) {
              return _this.updateItem(_objectSpread(_objectSpread({}, item), {}, {
                style: _objectSpread(_objectSpread({}, item.style), {}, {
                  left: "".concat(value, "%")
                })
              }));
            },
            min: 1,
            max: 100
          }));
        }));
      };

      return [inspectorControls(), wp.element.createElement(BlockControls, null, wp.element.createElement(IconButton, {
        onClick: function onClick() {
          return _this.pushNewItem();
        },
        icon: "plus",
        label: "Agregar"
      })), wp.element.createElement("div", {
        className: "wp-block-sg-hotgraphic sg-items",
        style: {
          height: attributes.height
        }
      }, attributes.items.sort(function (a, b) {
        return a.index - b.index;
      }).map(function (item, index) {
        return wp.element.createElement("div", {
          className: "sg-item",
          "data-index": index,
          style: item.style
        }, wp.element.createElement("div", {
          className: "sg-item-graphic-inner"
        }, wp.element.createElement(_components_GraphicPicker__WEBPACK_IMPORTED_MODULE_0__["default"], {
          className: "sg-item-graphic",
          onChange: function onChange(media) {
            return _this.updateItem(_objectSpread(_objectSpread({}, item), {}, {
              graphicUrl: media.url,
              graphicAlt: media.alt
            }));
          },
          url: item.graphicUrl,
          alt: item.graphicAlt
        })));
      }))];
    }
  }]);

  return SlothGeekGalleryEdit;
}(Component);



/***/ }),

/***/ "./blocks/src/blocks/hotgraphic/editor.scss":
/*!**************************************************!*\
  !*** ./blocks/src/blocks/hotgraphic/editor.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/hotgraphic/save.js":
/*!**********************************************!*\
  !*** ./blocks/src/blocks/hotgraphic/save.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlothGeekGallerySave; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;

var SlothGeekGallerySave = /*#__PURE__*/function (_Component) {
  _inherits(SlothGeekGallerySave, _Component);

  var _super = _createSuper(SlothGeekGallerySave);

  function SlothGeekGallerySave() {
    _classCallCheck(this, SlothGeekGallerySave);

    return _super.apply(this, arguments);
  }

  _createClass(SlothGeekGallerySave, [{
    key: "render",
    value: function render() {
      var attributes = this.props.attributes;
      return wp.element.createElement("div", {
        className: "sg-items",
        style: {
          height: attributes.height
        }
      }, attributes.items.map(function (item) {
        return [wp.element.createElement("a", {
          className: "sg-item modal-trigger",
          style: item.style,
          href: "#hg".concat(item.index)
        }, wp.element.createElement("img", {
          src: item.graphicUrl,
          alt: item.graphicAlt
        }), wp.element.createElement("div", {
          className: "pulse"
        })), wp.element.createElement("div", {
          id: "hg".concat(item.index),
          className: "modal"
        }, wp.element.createElement("div", {
          className: "modal-content sg-modal-content"
        }, wp.element.createElement("div", {
          className: "sg-modal-content-body"
        }, wp.element.createElement("h4", null, item.title), wp.element.createElement("p", null, item.body)), wp.element.createElement("div", {
          className: "sg-modal-content-graphic"
        }, wp.element.createElement("img", {
          src: item.graphicUrl,
          alt: item.graphicAlt
        }))))];
      }));
    }
  }]);

  return SlothGeekGallerySave;
}(Component);



/***/ }),

/***/ "./blocks/src/blocks/hotgraphic/style.scss":
/*!*************************************************!*\
  !*** ./blocks/src/blocks/hotgraphic/style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/posts/edit.js":
/*!*****************************************!*\
  !*** ./blocks/src/blocks/posts/edit.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utilities */ "./blocks/src/helpers/utilities.js");
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/colors */ "./blocks/src/helpers/colors.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var withSelect = wp.data.withSelect;
var InspectorControls = wp.blockEditor.InspectorControls;
var Component = wp.element.Component;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ColorPicker = _wp$components.ColorPicker;
var apiFetch = wp.apiFetch;
var addQueryArgs = wp.url.addQueryArgs;


var CATEGORIES_LIST_QUERY = {
  per_page: -1
};

var SlothGeekPostEdit = /*#__PURE__*/function (_Component) {
  _inherits(SlothGeekPostEdit, _Component);

  var _super = _createSuper(SlothGeekPostEdit);

  function SlothGeekPostEdit(props) {
    var _this;

    _classCallCheck(this, SlothGeekPostEdit);

    _this = _super.apply(this, arguments);
    _this.state = {
      categoriesList: []
    };
    return _this;
  }

  _createClass(SlothGeekPostEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.isStillMounted = true;
      this.fetchRequest = apiFetch({
        path: addQueryArgs("/wp/v2/categories", CATEGORIES_LIST_QUERY)
      }).then(function (categoriesList) {
        if (_this2.isStillMounted) {
          _this2.setState({
            categoriesList: categoriesList
          });
        }
      })["catch"](function () {
        if (_this2.isStillMounted) {
          _this2.setState({
            categoriesList: []
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isStillMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _categoriesList$map, _categoriesList$map2;

      var _this$props = this.props,
          posts = _this$props.posts,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className;
      var categoriesList = this.state.categoriesList;

      if (!posts) {
        return wp.element.createElement("span", null, "Loading....");
      }

      if (posts.length == 0) {
        return wp.element.createElement("span", null, "No hay posts para mostrar.");
      }

      var inspectorControls = wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: "Ajustes"
      }, wp.element.createElement(RangeControl, {
        label: "Número de columnas",
        value: attributes.columns,
        onChange: function onChange(value) {
          return setAttributes({
            columns: value
          });
        },
        min: 1,
        max: 12
      }), wp.element.createElement(RangeControl, {
        label: "¿Cuantos post?",
        value: attributes.post_per_page,
        onChange: function onChange(value) {
          return setAttributes({
            post_per_page: value
          });
        },
        min: 1,
        max: 9
      }), wp.element.createElement(RangeControl, {
        label: "Alto de la imagen (px)",
        value: attributes.height,
        onChange: function onChange(value) {
          return setAttributes({
            height: value
          });
        },
        min: 1,
        max: 1000
      }), wp.element.createElement(SelectControl, {
        multiple: true,
        label: "Categoría",
        value: attributes.category_selected,
        options: (_categoriesList$map = categoriesList.map(function (cat) {
          return {
            label: cat.name,
            value: cat.id
          };
        }), _categoriesList$map2 = _toArray(_categoriesList$map), _categoriesList$map),
        onChange: function onChange(value) {
          return setAttributes({
            category_selected: value
          });
        }
      }), wp.element.createElement(TextControl, {
        label: "Botón de acción",
        value: attributes.action_post,
        onChange: function onChange(value) {
          return setAttributes({
            action_post: value
          });
        }
      }), wp.element.createElement(SelectControl, {
        label: "Estilo del item",
        value: attributes.type,
        options: [{
          label: 'Card',
          value: 0
        }, {
          label: 'Modern',
          value: 1
        }, {
          label: 'Clasic',
          value: 2
        }],
        onChange: function onChange(value) {
          return setAttributes({
            type: value
          });
        }
      }), wp.element.createElement(ColorPicker, {
        color: attributes.filter,
        onChangeComplete: function onChangeComplete(value) {
          setAttributes({
            filter: Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["getRGBAColor"])(value)
          });
        }
      })));

      var option0 = function option0(post, columnWidth, height) {
        var titleClasses = 'sg-item-title';
        var image_url = '';

        if (!post._embedded['wp:featuredmedia']) {
          titleClasses = 'sg-item-title no-image';
        } else {
          image_url = post._embedded['wp:featuredmedia'][0].source_url;
        }

        return wp.element.createElement("li", {
          className: "sg-item ",
          style: {
            width: "".concat(columnWidth, "%")
          }
        }, wp.element.createElement("div", {
          className: "card medium"
        }, wp.element.createElement("div", {
          className: "card-image",
          style: {
            height: height
          }
        }, wp.element.createElement("img", {
          src: image_url,
          alt: ""
        }), wp.element.createElement("span", {
          className: "card-title"
        }, post.title.rendered)), wp.element.createElement("div", {
          className: "card-content"
        }, post.excerpt.rendered), wp.element.createElement("div", {
          className: "card-action"
        }, wp.element.createElement("a", {
          href: post.link
        }, attributes.action_post))));
      };

      var option1 = function option1(post, columnWidth, height) {
        var image_url = post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : '';
        return wp.element.createElement("li", {
          className: "sg-item",
          style: {
            width: "".concat(columnWidth, "%")
          }
        }, wp.element.createElement("div", {
          className: "sg-item-content",
          style: {
            backgroundImage: "url(".concat(image_url, ")"),
            height: height
          }
        }, wp.element.createElement("div", {
          className: "sg-item-filter",
          style: {
            backgroundColor: attributes.filter
          }
        }), wp.element.createElement("div", {
          className: "sg-item-title"
        }, wp.element.createElement("h5", null, post.title.rendered)), wp.element.createElement("a", {
          className: "sg-item-action",
          href: post.link
        }, attributes.action_post)));
      };

      var option2 = function option2(post, columnWidth, height) {
        var titleClasses = 'sg-item-title';
        var image_url = '';

        if (!post._embedded['wp:featuredmedia']) {
          titleClasses = 'sg-item-title no-image';
        } else {
          image_url = post._embedded['wp:featuredmedia'][0].source_url;
        }

        return wp.element.createElement("li", {
          className: "sg-item",
          style: {
            width: "".concat(columnWidth, "%")
          }
        }, wp.element.createElement("div", {
          className: "sg-item-content"
        }, wp.element.createElement("div", {
          className: "sg-item-graphic",
          style: {
            height: height
          }
        }, wp.element.createElement("img", {
          src: image_url,
          alt: ""
        })), wp.element.createElement("div", {
          className: titleClasses
        }, wp.element.createElement("h5", null, post.title.rendered)), wp.element.createElement("a", {
          className: "sg-item-action",
          href: post.link
        }, attributes.action_post)));
      };

      var columnWidth = 100 / attributes.columns;
      var height = attributes.height + "px";
      return wp.element.createElement("div", {
        className: className
      }, inspectorControls, wp.element.createElement("ul", {
        className: "sg-items option".concat(attributes.type)
      }, posts.map(function (post) {
        switch (parseInt(attributes.type)) {
          case 0:
            return option0(post, columnWidth, height);
            break;

          case 1:
            return option1(post, columnWidth, height);
            break;

          case 2:
            return option2(post, columnWidth, height);
            break;

          default:
            return option0(post, columnWidth, height);
            break;
        }
      })));
    }
  }]);

  return SlothGeekPostEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var _props$attributes = props.attributes,
      post_per_page = _props$attributes.post_per_page,
      category_selected = _props$attributes.category_selected;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords;

  var query = {
    per_page: post_per_page,
    categories: category_selected,
    _embed: true
  };
  return {
    posts: getEntityRecords('postType', 'post', query)
  };
})(SlothGeekPostEdit));

/***/ }),

/***/ "./blocks/src/blocks/posts/editor.scss":
/*!*********************************************!*\
  !*** ./blocks/src/blocks/posts/editor.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/posts/posts.js":
/*!******************************************!*\
  !*** ./blocks/src/blocks/posts/posts.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./blocks/src/blocks/posts/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/blocks/posts/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/blocks/posts/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;



registerBlockType('sg/posts', {
  title: "Últimas entradas",
  icon: 'star-empty',
  category: 'sg',
  keywords: [__('load'), __('Load Post'), __('guten-load-post')],
  attributes: {
    type: {
      type: 'string',
      "default": 1
    },
    columns: {
      type: "number",
      "default": 3
    },
    post_per_page: {
      type: "number",
      "default": 6
    },
    height: {
      type: "number",
      "default": 200
    },
    category_selected: {
      type: "array",
      "default": []
    },
    action_post: {
      type: "string",
      "default": "Ver más..."
    },
    filter: {
      type: "string",
      "default": ""
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./blocks/src/blocks/posts/style.scss":
/*!********************************************!*\
  !*** ./blocks/src/blocks/posts/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/pricingtable/block.js":
/*!*************************************************!*\
  !*** ./blocks/src/blocks/pricingtable/block.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./blocks/src/blocks/pricingtable/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./blocks/src/blocks/pricingtable/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/blocks/pricingtable/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/blocks/pricingtable/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;




registerBlockType('sg/pricingtable', {
  title: 'Pricing Table',
  icon: 'star-empty',
  category: 'sg',
  attributes: {
    icon: {
      type: 'string'
    },
    title: {
      type: 'string',
      "default": 'Plan'
    },
    currency: {
      type: 'string',
      "default": '$'
    },
    price: {
      type: 'string',
      "default": '10'
    },
    cents: {
      type: 'string',
      "default": '99'
    },
    features: {
      type: 'array',
      "default": []
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/src/blocks/pricingtable/edit.js":
/*!************************************************!*\
  !*** ./blocks/src/blocks/pricingtable/edit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PricingTableEdit; });
/* harmony import */ var _components_IconPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/IconPicker */ "./blocks/src/components/IconPicker.js");
/* harmony import */ var _helpers_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utilities */ "./blocks/src/helpers/utilities.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls;
var Component = wp.element.Component;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    CheckboxControl = _wp$components.CheckboxControl;


var PricingTableEdit = /*#__PURE__*/function (_Component) {
  _inherits(PricingTableEdit, _Component);

  var _super = _createSuper(PricingTableEdit);

  function PricingTableEdit() {
    _classCallCheck(this, PricingTableEdit);

    return _super.apply(this, arguments);
  }

  _createClass(PricingTableEdit, [{
    key: "add_feature",
    value: function add_feature() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var feature = {
        index: attributes.features.length,
        text: '',
        active: true
      };
      return setAttributes({
        features: [].concat(Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_1__["cloneArray"])(attributes.features), [feature])
      });
    }
  }, {
    key: "update_feature",
    value: function update_feature(feature) {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      return setAttributes({
        features: [].concat(Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_1__["cloneArray"])(attributes.features.filter(function (itemFilter) {
          return itemFilter.index != feature.index;
        })), [feature])
      });
    }
  }, {
    key: "render_features",
    value: function render_features() {
      var _this = this;

      var _this$props3 = this.props,
          attributes = _this$props3.attributes,
          setAttributes = _this$props3.setAttributes;
      return attributes.features.sort(function (a, b) {
        return a.index - b.index;
      }).map(function (feature) {
        return wp.element.createElement("li", {
          className: "pricing-feature ".concat(feature.active ? '' : 'disabled')
        }, wp.element.createElement(CheckboxControl, {
          checked: feature.active,
          onChange: function onChange(value) {
            return _this.update_feature(_objectSpread(_objectSpread({}, feature), {}, {
              active: value
            }));
          }
        }), wp.element.createElement(RichText, {
          value: feature.text,
          onChange: function onChange(value) {
            return _this.update_feature(_objectSpread(_objectSpread({}, feature), {}, {
              text: value
            }));
          },
          placeholder: "Característica",
          multiline: false
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          attributes = _this$props4.attributes,
          setAttributes = _this$props4.setAttributes;
      return wp.element.createElement("div", {
        className: "pricing-table featured scale-in-out fade-in-out"
      }, wp.element.createElement("div", {
        className: "pricing-header"
      }, wp.element.createElement("div", {
        className: "symbol"
      }, wp.element.createElement(_components_IconPicker__WEBPACK_IMPORTED_MODULE_0__["default"], {
        value: attributes.icon,
        onChange: function onChange(value) {
          return setAttributes({
            icon: value
          });
        }
      })), wp.element.createElement(RichText, {
        className: "title",
        value: attributes.title,
        onChange: function onChange(value) {
          return setAttributes({
            title: value
          });
        },
        multiline: false
      }), wp.element.createElement("div", {
        className: "price"
      }, wp.element.createElement(RichText, {
        tagName: "span",
        className: "currency",
        value: attributes.currency,
        onChange: function onChange(value) {
          return setAttributes({
            currency: value
          });
        },
        multiline: false
      }), wp.element.createElement(RichText, {
        tagName: "span",
        className: "dollars",
        value: attributes.price,
        onChange: function onChange(value) {
          return setAttributes({
            price: value
          });
        },
        multiline: false
      }), wp.element.createElement(RichText, {
        tagName: "span",
        className: "cents",
        value: attributes.cents,
        onChange: function onChange(value) {
          return setAttributes({
            cents: value
          });
        },
        multiline: false
      }))), wp.element.createElement("ul", {
        className: "pricing-features"
      }, this.render_features(), wp.element.createElement(Button, {
        isSecondary: true,
        onClick: function onClick() {
          return _this2.add_feature();
        }
      }, "Agregar caracter\xEDstica")));
    }
  }]);

  return PricingTableEdit;
}(Component);



/***/ }),

/***/ "./blocks/src/blocks/pricingtable/editor.scss":
/*!****************************************************!*\
  !*** ./blocks/src/blocks/pricingtable/editor.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/pricingtable/save.js":
/*!************************************************!*\
  !*** ./blocks/src/blocks/pricingtable/save.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PricingTableSave; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;
var RichText = wp.blockEditor.RichText;

var PricingTableSave = /*#__PURE__*/function (_Component) {
  _inherits(PricingTableSave, _Component);

  var _super = _createSuper(PricingTableSave);

  function PricingTableSave() {
    _classCallCheck(this, PricingTableSave);

    return _super.apply(this, arguments);
  }

  _createClass(PricingTableSave, [{
    key: "render_features",
    value: function render_features() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      return attributes.features.sort(function (a, b) {
        return a.index - b.index;
      }).map(function (feature) {
        return wp.element.createElement("li", {
          className: "pricing-feature ".concat(feature.active ? '' : 'disabled')
        }, feature.active ? wp.element.createElement("i", {
          className: "material-icons"
        }, "done") : wp.element.createElement("i", {
          className: "material-icons"
        }, "close"), feature.text);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      return wp.element.createElement("div", {
        className: "pricing-table featured scale-in-out fade-in-out"
      }, wp.element.createElement("div", {
        className: "pricing-header"
      }, wp.element.createElement("div", {
        className: "symbol"
      }, wp.element.createElement("i", {
        className: "fas ".concat(attributes.icon)
      })), wp.element.createElement(RichText.Content, {
        tagName: "div",
        className: "title",
        value: attributes.title
      }), wp.element.createElement("div", {
        className: "price"
      }, wp.element.createElement(RichText.Content, {
        tagName: "span",
        className: "currency",
        value: attributes.currency
      }), wp.element.createElement(RichText.Content, {
        tagName: "span",
        className: "dollars",
        value: attributes.price
      }), wp.element.createElement(RichText.Content, {
        tagName: "span",
        className: "cents",
        value: attributes.cents
      }))), wp.element.createElement("ul", {
        className: "pricing-features"
      }, this.render_features()));
    }
  }]);

  return PricingTableSave;
}(Component);



/***/ }),

/***/ "./blocks/src/blocks/pricingtable/style.scss":
/*!***************************************************!*\
  !*** ./blocks/src/blocks/pricingtable/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/row/block.js":
/*!****************************************!*\
  !*** ./blocks/src/blocks/row/block.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./blocks/src/blocks/row/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./blocks/src/blocks/row/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/blocks/row/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/blocks/row/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var registerBlockType = wp.blocks.registerBlockType;




registerBlockType('sg/row', {
  title: 'Row',
  icon: 'star-empty',
  category: 'sg',
  attributes: {
    itsSection: {
      type: 'boolean',
      "default": false
    },
    id: {
      type: 'string'
    },
    hasContainer: {
      type: 'boolean',
      "default": false
    },
    style: {
      type: 'object',
      "default": {}
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/src/blocks/row/edit.js":
/*!***************************************!*\
  !*** ./blocks/src/blocks/row/edit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RowEdit; });
/* harmony import */ var _style_EditBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/EditBackground */ "./blocks/src/style/EditBackground.js");
/* harmony import */ var _style_EditSpaceDimension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style/EditSpaceDimension */ "./blocks/src/style/EditSpaceDimension.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    ToggleControl = _wp$components.ToggleControl,
    TabPanel = _wp$components.TabPanel,
    TextControl = _wp$components.TextControl;
var Component = wp.element.Component;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;


var rowCustomClassName = createHigherOrderComponent(function (BlockListBlock) {
  return function (props) {
    if (props.name == "sg/row") {
      return wp.element.createElement(BlockListBlock, _extends({}, props, {
        className: 'row'
      }));
    }

    return wp.element.createElement(BlockListBlock, props);
  };
}, 'rowCustomClassName');
wp.hooks.addFilter('editor.BlockListBlock', 'sg/row', rowCustomClassName);

var RowEdit = /*#__PURE__*/function (_Component) {
  _inherits(RowEdit, _Component);

  var _super = _createSuper(RowEdit);

  function RowEdit() {
    _classCallCheck(this, RowEdit);

    return _super.apply(this, arguments);
  }

  _createClass(RowEdit, [{
    key: "render",
    value: function render() {
      var ALLOWED_BLOCKS = ['sg/column'];
      var _this$props = this.props,
          clientId = _this$props.clientId,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var select = wp.data.select;
      var parentBlock = select('core/block-editor').getBlocksByClientId(clientId)[0];
      var childBlocks = parentBlock.innerBlocks;

      var emptyBlock = function emptyBlock() {
        if (childBlocks.length == 0) {
          return [wp.element.createElement("div", {
            className: "sg-empty-inner-block"
          }, wp.element.createElement("div", {
            className: "sg-block-name"
          }, wp.element.createElement("span", {
            className: "dashicons dashicons-screenoptions"
          }), "Row"), "Agrega una o m\xE1s columnas presionando el bot\xF3n de abajo con el s\xEDmbolo de m\xE1s...")];
        }
      };

      var onSelect = function onSelect(tabName) {//console.log( 'Selecting tab', tabName );
      };

      var renderTab1 = wp.element.createElement("div", null, wp.element.createElement(ToggleControl, {
        label: "Activar sección",
        help: attributes.itsSection ? 'Sección.' : 'Solo fila.',
        checked: attributes.itsSection,
        onChange: function onChange(value) {
          return setAttributes({
            itsSection: value
          });
        }
      }), wp.element.createElement(ToggleControl, {
        label: "Activar contenedor?",
        help: attributes.hasContainer ? 'Contenedor.' : 'Solo fila.',
        checked: attributes.hasContainer,
        onChange: function onChange(value) {
          return setAttributes({
            hasContainer: value
          });
        }
      }), wp.element.createElement(TextControl, {
        label: "Anclaje HTML",
        onChange: function onChange(value) {
          return setAttributes({
            id: value
          });
        },
        value: attributes.id
      }));
      var renderTab2 = wp.element.createElement("div", null, Object(_style_EditBackground__WEBPACK_IMPORTED_MODULE_0__["default"])(this.props));
      var renderTab3 = wp.element.createElement("div", null, Object(_style_EditSpaceDimension__WEBPACK_IMPORTED_MODULE_1__["default"])(this.props));

      var renderTab = function renderTab(tabName) {
        switch (tabName) {
          case 'tab1':
            return renderTab1;
            break;

          case 'tab2':
            return renderTab2;
            break;

          case 'tab3':
            return renderTab3;
            break;

          default:
            return renderTab1;
            break;
        }
      };

      return [wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: "Ajustes"
      }, wp.element.createElement(PanelRow, null, wp.element.createElement(TabPanel, {
        className: "sg-tab-panel",
        activeClass: "active-tab",
        onSelect: onSelect,
        tabs: [{
          name: 'tab1',
          title: 'General',
          className: 'tab-one'
        }, {
          name: 'tab2',
          title: 'BG',
          className: 'tab-two'
        }, {
          name: 'tab3',
          title: 'Dim',
          className: 'tab-three'
        }]
      }, function (tab) {
        return renderTab(tab.name);
      })))), emptyBlock(), wp.element.createElement("div", {
        className: "row-container",
        style: attributes.style
      }, wp.element.createElement(InnerBlocks, {
        allowedBlocks: ALLOWED_BLOCKS,
        renderAppender: function renderAppender() {
          return wp.element.createElement("div", {
            "class": "apender-container"
          }, wp.element.createElement("div", {
            className: "block-editor-text-block-appender"
          }, wp.element.createElement("i", null, wp.element.createElement("div", {
            className: "sg-block-name"
          }, wp.element.createElement("span", {
            className: "dashicons dashicons-screenoptions"
          }), "Row"))), wp.element.createElement(InnerBlocks.ButtonBlockAppender, null));
        }
      }))];
    }
  }]);

  return RowEdit;
}(Component);



/***/ }),

/***/ "./blocks/src/blocks/row/editor.scss":
/*!*******************************************!*\
  !*** ./blocks/src/blocks/row/editor.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/row/save.js":
/*!***************************************!*\
  !*** ./blocks/src/blocks/row/save.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RowSave; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;
var InnerBlocks = wp.blockEditor.InnerBlocks;

var RowSave = /*#__PURE__*/function (_Component) {
  _inherits(RowSave, _Component);

  var _super = _createSuper(RowSave);

  function RowSave() {
    _classCallCheck(this, RowSave);

    return _super.apply(this, arguments);
  }

  _createClass(RowSave, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          attributes = _this$props.attributes;
      var classes = className != undefined ? className : '';

      var renderContainer = function renderContainer() {
        return attributes.hasContainer ? wp.element.createElement("div", {
          id: attributes.id,
          className: "container"
        }, attributes.itsSection ? wp.element.createElement("section", {
          className: "row",
          style: attributes.style
        }, wp.element.createElement(InnerBlocks.Content, null)) : wp.element.createElement("div", {
          className: "row",
          style: attributes.style
        }, wp.element.createElement(InnerBlocks.Content, null))) : attributes.itsSection ? wp.element.createElement("section", {
          id: attributes.id,
          className: "row ".concat(classes),
          style: attributes.style
        }, wp.element.createElement(InnerBlocks.Content, null)) : wp.element.createElement("div", {
          id: attributes.id,
          className: "row ".concat(classes),
          style: attributes.style
        }, wp.element.createElement(InnerBlocks.Content, null));
      };

      var renderRow = function renderRow() {
        return;
      };

      return renderContainer();
    }
  }]);

  return RowSave;
}(Component);



/***/ }),

/***/ "./blocks/src/blocks/row/style.scss":
/*!******************************************!*\
  !*** ./blocks/src/blocks/row/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/slider/block.js":
/*!*******************************************!*\
  !*** ./blocks/src/blocks/slider/block.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./blocks/src/blocks/slider/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./blocks/src/blocks/slider/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/blocks/slider/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/blocks/slider/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;




registerBlockType('sg/slider', {
  id: '',
  title: 'Slider',
  icon: 'star-empty',
  category: 'sg',
  attributes: {
    indicators: {
      "default": false
    },
    height: {
      "default": 400
    },
    unitHeight: {
      "default": "px"
    },
    duration: {
      "default": 500
    },
    interval: {
      "default": 6000
    },
    items: {
      type: 'array',
      "default": []
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./blocks/src/blocks/slider/edit.js":
/*!******************************************!*\
  !*** ./blocks/src/blocks/slider/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _helpers_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utilities */ "./blocks/src/helpers/utilities.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    PlainText = _wp$blockEditor.PlainText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload;
var Component = wp.element.Component;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    IconButton = _wp$components.IconButton;


var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit() {
    _classCallCheck(this, Edit);

    return _super.apply(this, arguments);
  }

  _createClass(Edit, [{
    key: "Controls",
    value: function Controls() {
      var _this = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(ToggleControl, {
        label: "Mostrar indicadores",
        checked: attributes.indicators,
        onChange: function onChange(state) {
          return setAttributes({
            indicators: state
          });
        }
      }), wp.element.createElement("div", null, wp.element.createElement("label", null, "Alto del slider"), wp.element.createElement("div", {
        style: {
          display: "flex",
          alignItems: "flex-start"
        }
      }, wp.element.createElement("div", {
        style: {
          flex: "70%"
        }
      }, wp.element.createElement(RangeControl, {
        value: attributes.height,
        onChange: function onChange(value) {
          return setAttributes({
            height: value
          });
        },
        min: 10,
        max: 1000
      })), wp.element.createElement("div", {
        style: {
          flex: "10%"
        }
      }, wp.element.createElement(SelectControl, {
        value: attributes.unitHeight,
        options: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: 'rem',
          value: 'rem'
        }, {
          label: 'vh',
          value: 'vh'
        }],
        onChange: function onChange(value) {
          return setAttributes({
            unitHeight: value
          });
        }
      })))), wp.element.createElement(TextControl, {
        label: "Duración",
        help: "1s es igual a 1000",
        value: attributes.duration,
        onChange: function onChange(value) {
          return setAttributes({
            duration: value
          });
        }
      }), wp.element.createElement(TextControl, {
        label: "Intervalo entre sliders",
        help: "1s es igual a 1000",
        value: attributes.interval,
        onChange: function onChange(value) {
          return setAttributes({
            interval: value
          });
        }
      })), wp.element.createElement(PanelBody, {
        title: "Images"
      }, this.RenderSlidesControl(), wp.element.createElement(Button, {
        "class": "sg-button full",
        isSecondary: true,
        onClick: function onClick() {
          return _this.addNewSlide();
        }
      }, "Agregar diapositiva")));
    }
  }, {
    key: "addNewSlide",
    value: function addNewSlide() {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      return setAttributes({
        items: [].concat(Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["cloneArray"])(attributes.items), [{
          index: attributes.items.length,
          graphic: {
            src: '',
            alt: ''
          },
          caption: '',
          captionPosition: '' //center-align left-align right-align

        }])
      });
    }
  }, {
    key: "updateSlide",
    value: function updateSlide(item, model) {
      var newObject = Object.assign({}, item, model);
      return this.props.setAttributes({
        items: [].concat(Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["cloneArray"])(this.props.attributes.items.filter(function (itemFilter) {
          return itemFilter.index != item.index;
        })), [newObject])
      });
    }
  }, {
    key: "deleteSlide",
    value: function deleteSlide() {}
  }, {
    key: "RenderSlidesControl",
    value: function RenderSlidesControl() {
      var _this2 = this;

      var attributes = this.props.attributes;

      if (attributes.items.length > 0) {
        return attributes.items.sort(function (a, b) {
          return a.index - b.index;
        }).map(function (item, index) {
          return wp.element.createElement("div", {
            key: index
          }, wp.element.createElement("label", null, " ", "Slide ".concat(index), " "), wp.element.createElement(MediaUpload, {
            type: "Imagen",
            value: item.graphic.src,
            onSelect: function onSelect(media) {
              return _this2.updateSlide(item, {
                graphic: {
                  src: media.url,
                  alt: media.alt
                }
              });
            },
            render: function render(_ref) {
              var open = _ref.open;
              return item.graphic.src !== '' ? wp.element.createElement("div", {
                className: "components-base-control"
              }, wp.element.createElement("img", {
                src: item.graphic.src,
                alt: "",
                style: {
                  width: '100%'
                }
              }), wp.element.createElement("div", {
                className: "sg-toolbar"
              }, wp.element.createElement(IconButton, {
                icon: "edit",
                label: "Edit",
                onClick: open
              }), wp.element.createElement(IconButton, {
                icon: "trash",
                label: "Delete",
                onClick: function onClick() {
                  return _this2.deleteSlide(index);
                }
              }))) : wp.element.createElement("div", {
                className: "components-base-control"
              }, wp.element.createElement("div", {
                className: "no-image"
              }), wp.element.createElement(Button, {
                onClick: open,
                className: "sg-button full button"
              }, "Seleccionar imagen"));
            }
          }));
        });
      } else {
        return wp.element.createElement("span", null, "No hay item para mostrar");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var attributes = this.props.attributes;
      return wp.element.createElement("div", null, this.Controls(), wp.element.createElement("div", {
        className: "sg-slider slider",
        "data-indicators": attributes.indicators,
        "data-height": attributes.height,
        "data-duration": attributes.duration,
        "data-interval": attributes.interval
      }, wp.element.createElement("ul", {
        className: "slides"
      }, attributes.items.map(function (item) {
        return wp.element.createElement("li", null, wp.element.createElement("img", {
          src: item.graphic.src,
          alt: item.graphic.alt
        }));
      }))));
    }
  }]);

  return Edit;
}(Component);


var item = {
  graphic: {
    src: '',
    alt: ''
  },
  caption: '',
  captionPosition: '' //center-align left-align right-align

};

/***/ }),

/***/ "./blocks/src/blocks/slider/editor.scss":
/*!**********************************************!*\
  !*** ./blocks/src/blocks/slider/editor.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks/slider/save.js":
/*!******************************************!*\
  !*** ./blocks/src/blocks/slider/save.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Save; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;

var Save = /*#__PURE__*/function (_Component) {
  _inherits(Save, _Component);

  var _super = _createSuper(Save);

  function Save() {
    _classCallCheck(this, Save);

    return _super.apply(this, arguments);
  }

  _createClass(Save, [{
    key: "render",
    value: function render() {
      var attributes = this.props.attributes;
      return wp.element.createElement("div", null, wp.element.createElement("div", {
        className: "sg-slider slider",
        "data-indicators": attributes.indicators,
        "data-height": attributes.height,
        "data-duration": attributes.duration,
        "data-interval": attributes.interval
      }, wp.element.createElement("ul", {
        className: "slides"
      }, attributes.items.map(function (item) {
        return wp.element.createElement("li", null, wp.element.createElement("img", {
          src: item.graphic.src,
          alt: item.graphic.alt
        }));
      }))));
    }
  }]);

  return Save;
}(Component);



/***/ }),

/***/ "./blocks/src/blocks/slider/style.scss":
/*!*********************************************!*\
  !*** ./blocks/src/blocks/slider/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/components/GraphicPicker.js":
/*!************************************************!*\
  !*** ./blocks/src/components/GraphicPicker.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphicPicker; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;
var MediaUpload = wp.blockEditor.MediaUpload;
var IconButton = wp.components.IconButton;

var GraphicPicker = /*#__PURE__*/function (_Component) {
  _inherits(GraphicPicker, _Component);

  var _super = _createSuper(GraphicPicker);

  function GraphicPicker() {
    _classCallCheck(this, GraphicPicker);

    return _super.apply(this, arguments);
  }

  _createClass(GraphicPicker, [{
    key: "getImageButton",
    value: function getImageButton(openEvent, url, alt, onChange) {
      if (url) {
        return wp.element.createElement("div", {
          className: 'graphic-picker'
        }, wp.element.createElement("img", {
          src: url,
          className: "image",
          alt: alt
        }), wp.element.createElement("div", {
          className: "sg-toolbar"
        }, wp.element.createElement(IconButton, {
          icon: "edit",
          label: "Edit",
          onClick: openEvent
        }), wp.element.createElement(IconButton, {
          icon: "trash",
          label: "Delete",
          onClick: function onClick(media) {
            return onChange('');
          }
        })));
      } else {
        return wp.element.createElement("div", {
          className: "graphic-picker-no-image"
        }, wp.element.createElement(IconButton, {
          onClick: openEvent,
          icon: "format-image",
          label: "Agregar"
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          url = _this$props.url,
          alt = _this$props.alt,
          onChange = _this$props.onChange;
      return wp.element.createElement(MediaUpload, {
        className: "center-align",
        onSelect: function onSelect(media) {
          return onChange(media);
        },
        type: "image",
        render: function render(_ref) {
          var open = _ref.open;
          return _this.getImageButton(open, url, alt, onChange);
        }
      });
    }
  }]);

  return GraphicPicker;
}(Component);



/***/ }),

/***/ "./blocks/src/components/IconPicker.js":
/*!*********************************************!*\
  !*** ./blocks/src/components/IconPicker.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconPicker; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dropdown = _wp$components.Dropdown,
    IconButton = _wp$components.IconButton;

var IconPicker = /*#__PURE__*/function (_Component) {
  _inherits(IconPicker, _Component);

  var _super = _createSuper(IconPicker);

  function IconPicker() {
    _classCallCheck(this, IconPicker);

    return _super.apply(this, arguments);
  }

  _createClass(IconPicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;
      var icon = icons.find(function (i) {
        return i.name == value;
      });
      return wp.element.createElement("div", null, wp.element.createElement(Dropdown, {
        className: "icon-picker",
        contentClassName: "icon-picker-content",
        position: "bottom right",
        renderToggle: function renderToggle(_ref) {
          var isOpen = _ref.isOpen,
              onToggle = _ref.onToggle;

          if (icon) {
            return wp.element.createElement(Button, {
              isTertiary: true,
              onClick: onToggle,
              "aria-expanded": isOpen
            }, wp.element.createElement("i", {
              className: "".concat(icon.prefix, " ").concat(icon.name)
            }));
          } else {
            return [wp.element.createElement(IconButton, {
              onClick: onToggle,
              "aria-expanded": isOpen,
              icon: "info",
              label: "Agregar ícono"
            })];
          }
        },
        renderContent: function renderContent() {
          return wp.element.createElement("div", null, icons.map(function (icon) {
            return wp.element.createElement(Button, {
              isTertiary: true,
              onClick: function onClick() {
                return onChange(icon.name);
              }
            }, wp.element.createElement("i", {
              className: "".concat(icon.prefix, " ").concat(icon.name)
            }));
          }));
        }
      }));
    }
  }]);

  return IconPicker;
}(Component);


var icons = [{
  prefix: 'fas',
  name: 'fa-angle-down'
}, {
  prefix: 'fas',
  name: 'fa-angle-left'
}, {
  prefix: 'fas',
  name: 'fa-angle-right'
}, {
  prefix: 'fas',
  name: 'fa-angle-up'
}, {
  prefix: 'fas',
  name: 'fa-arrow-down'
}, {
  prefix: 'fas',
  name: 'fa-arrow-left'
}, {
  prefix: 'fas',
  name: 'fa-arrow-right'
}, {
  prefix: 'fas',
  name: 'fa-arrow-up'
}, {
  prefix: 'fas',
  name: 'fa-store'
}, {
  prefix: 'fas',
  name: 'fa-store-alt'
}, {
  prefix: 'fas',
  name: 'fa-globe'
}, {
  prefix: 'fas',
  name: 'fa-globe-europe'
}, {
  prefix: 'fas',
  name: 'fa-globe-asia'
}, {
  prefix: 'fas',
  name: 'fa-globe-americas'
}, {
  prefix: 'fas',
  name: 'fa-server'
}, {
  prefix: 'fas',
  name: 'fa-database'
}, {
  prefix: 'fas',
  name: 'fa-info'
}, {
  prefix: 'fas',
  name: 'fa-check'
}, {
  prefix: 'fas',
  name: 'fa-check-square'
}, {
  prefix: 'fas',
  name: 'fa-check'
}, {
  prefix: 'fas',
  name: 'fa-walking'
}, {
  prefix: 'fas',
  name: 'fa-runing'
}, {
  prefix: 'fas',
  name: 'fa-male'
}, {
  prefix: 'fas',
  name: 'fa-building'
}, {
  prefix: 'fas',
  name: 'fa-city'
}, {
  prefix: 'fas',
  name: 'fa-home'
}];
/*
* {prefix: 'fas', name: 'fa-'},
*/

/***/ }),

/***/ "./blocks/src/components/Paragraph.js":
/*!********************************************!*\
  !*** ./blocks/src/components/Paragraph.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Paragraph; });
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/colors */ "./blocks/src/helpers/colors.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    RichText = _wp$blockEditor.RichText,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    ColorPalette = _wp$components.ColorPalette,
    TextControl = _wp$components.TextControl;


var Paragraph = /*#__PURE__*/function (_Component) {
  _inherits(Paragraph, _Component);

  var _super = _createSuper(Paragraph);

  function Paragraph() {
    var _this;

    _classCallCheck(this, Paragraph);

    _this = _super.call(this);
    _this.state = {
      val: '',
      style: {
        fontSize: '18px',
        color: '#00000',
        textAlign: 'left',
        margin: '0 0 0 0',
        padding: '0 0 0 0'
      }
    };
    return _this;
  }

  _createClass(Paragraph, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          value = _this$props.value,
          style = _this$props.style;
      this.setState({
        val: value
      });

      if (style.margin != undefined) {
        this.setState({
          style: style
        });
      }
    }
  }, {
    key: "updateMP",
    value: function updateMP(array, value, index) {
      var newValue = array.split(' ');
      newValue[index] = "".concat(value);
      return newValue.join(' ');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          _onChange = _this$props2.onChange,
          value = _this$props2.value,
          placeholder = _this$props2.placeholder;
      var style = this.state.style;
      return [wp.element.createElement(BlockControls, null, wp.element.createElement(AlignmentToolbar, {
        value: style.textAlign,
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              textAlign: value
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: 'Párrafo',
        initialOpen: false
      }, wp.element.createElement(RangeControl, {
        label: "Tamaño",
        value: parseInt(style.fontSize),
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              fontSize: "".concat(value, "px")
            })
          }, function () {
            return _onChange(_this2.state);
          });
        },
        min: 0,
        max: 100
      }), wp.element.createElement("label", {
        htmlFor: "title-text-color"
      }, "Color de texto"), wp.element.createElement("div", {
        className: "title-text-color"
      }, wp.element.createElement(ColorPalette, {
        colors: _helpers_colors__WEBPACK_IMPORTED_MODULE_0__["default"],
        value: style.color,
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              color: "".concat(value)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("label", {
        htmlFor: "title-spacing"
      }, "Espaciado"), wp.element.createElement("div", {
        className: "dimension-control title-spacing"
      }, wp.element.createElement("div", {
        className: "margin"
      }, wp.element.createElement("div", {
        className: "dimension-input top"
      }, wp.element.createElement(TextControl, {
        value: style.margin.split(' ')[0],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              margin: _this2.updateMP(style.margin, value, 0)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("div", {
        className: "dimension-input right"
      }, wp.element.createElement(TextControl, {
        value: style.margin.split(' ')[1],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              margin: _this2.updateMP(style.margin, value, 1)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("div", {
        className: "dimension-input bottom"
      }, wp.element.createElement(TextControl, {
        value: style.margin.split(' ')[2],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              margin: _this2.updateMP(style.margin, value, 2)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("div", {
        className: "dimension-input left"
      }, wp.element.createElement(TextControl, {
        value: style.margin.split(' ')[3],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              margin: _this2.updateMP(style.margin, value, 3)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("div", {
        className: "padding"
      }, wp.element.createElement("div", {
        className: "dimension-input top"
      }, wp.element.createElement(TextControl, {
        value: style.padding.split(' ')[0],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              padding: _this2.updateMP(style.padding, value, 0)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("div", {
        className: "dimension-input right"
      }, wp.element.createElement(TextControl, {
        value: style.padding.split(' ')[1],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              padding: _this2.updateMP(style.padding, value, 1)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("div", {
        className: "dimension-input bottom"
      }, wp.element.createElement(TextControl, {
        value: style.padding.split(' ')[2],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              padding: _this2.updateMP(style.padding, value, 2)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("div", {
        className: "dimension-input left"
      }, wp.element.createElement(TextControl, {
        value: style.padding.split(' ')[3],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              padding: _this2.updateMP(style.padding, value, 3)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      }))))))), wp.element.createElement(RichText, {
        tagName: "p",
        onChange: function onChange(value) {
          _this2.setState({
            val: value
          }, function () {
            return _onChange(_this2.state);
          });
        },
        value: value,
        style: style,
        formattingControls: ['bold', 'italic', 'underline'],
        placeholder: placeholder
      })];
    }
  }]);

  return Paragraph;
}(Component);



/***/ }),

/***/ "./blocks/src/components/Title.js":
/*!****************************************!*\
  !*** ./blocks/src/components/Title.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Title; });
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/colors */ "./blocks/src/helpers/colors.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    RichText = _wp$blockEditor.RichText,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    ColorPalette = _wp$components.ColorPalette,
    TextControl = _wp$components.TextControl;


var Title = /*#__PURE__*/function (_Component) {
  _inherits(Title, _Component);

  var _super = _createSuper(Title);

  function Title() {
    var _this;

    _classCallCheck(this, Title);

    _this = _super.call(this);
    _this.state = {
      val: '',
      style: {
        fontSize: '',
        color: '#00000',
        textAlign: 'left',
        margin: '0 0 0 0',
        padding: '0 0 0 0'
      }
    };
    return _this;
  }

  _createClass(Title, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          value = _this$props.value,
          style = _this$props.style;
      this.setState({
        val: value
      });

      if (style.margin != undefined) {
        this.setState({
          style: style
        });
      }
    }
  }, {
    key: "updateMP",
    value: function updateMP(array, value, index) {
      var newValue = array.split(' ');
      newValue[index] = "".concat(value);
      return newValue.join(' ');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          type = _this$props2.type,
          className = _this$props2.className,
          _onChange = _this$props2.onChange,
          value = _this$props2.value,
          placeholder = _this$props2.placeholder;
      var style = this.state.style;
      return [wp.element.createElement(BlockControls, null, wp.element.createElement(AlignmentToolbar, {
        value: style.textAlign,
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              textAlign: value
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: 'Título',
        initialOpen: false
      }, wp.element.createElement(RangeControl, {
        label: "Tamaño",
        value: parseInt(style.fontSize),
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              fontSize: "".concat(value, "px")
            })
          }, function () {
            return _onChange(_this2.state);
          });
        },
        min: 0,
        max: 100
      }), wp.element.createElement("label", {
        htmlFor: "title-text-color"
      }, "Color de texto"), wp.element.createElement("div", {
        className: "title-text-color"
      }, wp.element.createElement(ColorPalette, {
        colors: _helpers_colors__WEBPACK_IMPORTED_MODULE_0__["default"],
        value: style.color,
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              color: "".concat(value)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("label", {
        htmlFor: "title-spacing"
      }, "Espaciado"), wp.element.createElement("div", {
        className: "dimension-control title-spacing"
      }, wp.element.createElement("div", {
        className: "margin"
      }, wp.element.createElement("div", {
        className: "dimension-input top"
      }, wp.element.createElement(TextControl, {
        value: style.margin.split(' ')[0],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              margin: _this2.updateMP(style.margin, value, 0)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("div", {
        className: "dimension-input right"
      }, wp.element.createElement(TextControl, {
        value: style.margin.split(' ')[1],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              margin: _this2.updateMP(style.margin, value, 1)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("div", {
        className: "dimension-input bottom"
      }, wp.element.createElement(TextControl, {
        value: style.margin.split(' ')[2],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              margin: _this2.updateMP(style.margin, value, 2)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("div", {
        className: "dimension-input left"
      }, wp.element.createElement(TextControl, {
        value: style.margin.split(' ')[3],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              margin: _this2.updateMP(style.margin, value, 3)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("div", {
        className: "padding"
      }, wp.element.createElement("div", {
        className: "dimension-input top"
      }, wp.element.createElement(TextControl, {
        value: style.padding.split(' ')[0],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              padding: _this2.updateMP(style.padding, value, 0)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("div", {
        className: "dimension-input right"
      }, wp.element.createElement(TextControl, {
        value: style.padding.split(' ')[1],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              padding: _this2.updateMP(style.padding, value, 1)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("div", {
        className: "dimension-input bottom"
      }, wp.element.createElement(TextControl, {
        value: style.padding.split(' ')[2],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              padding: _this2.updateMP(style.padding, value, 2)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      })), wp.element.createElement("div", {
        className: "dimension-input left"
      }, wp.element.createElement(TextControl, {
        value: style.padding.split(' ')[3],
        onChange: function onChange(value) {
          _this2.setState({
            style: _objectSpread(_objectSpread({}, style), {}, {
              padding: _this2.updateMP(style.padding, value, 3)
            })
          }, function () {
            return _onChange(_this2.state);
          });
        }
      }))))))), wp.element.createElement(RichText, {
        tagName: type,
        className: className,
        onChange: function onChange(value) {
          _this2.setState({
            val: value
          }, function () {
            return _onChange(_this2.state);
          });
        },
        value: value,
        style: style,
        formattingControls: ['bold', 'italic', 'underline'],
        placeholder: placeholder
      })];
    }
  }]);

  return Title;
}(Component);



/***/ }),

/***/ "./blocks/src/editor.scss":
/*!********************************!*\
  !*** ./blocks/src/editor.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/helpers/colors.js":
/*!**************************************!*\
  !*** ./blocks/src/helpers/colors.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var MainColors = [{
  name: 'transparent',
  color: 'transparent'
}, {
  name: 'sg-dark',
  color: '#2a2f3f'
}, {
  name: 'sg-green',
  color: '#27e29a'
}, {
  name: 'white',
  color: '#ffffff'
}];
/* harmony default export */ __webpack_exports__["default"] = (MainColors);

/***/ }),

/***/ "./blocks/src/helpers/utilities.js":
/*!*****************************************!*\
  !*** ./blocks/src/helpers/utilities.js ***!
  \*****************************************/
/*! exports provided: sanitizeStyle, getRGBAColor, cloneArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeStyle", function() { return sanitizeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRGBAColor", function() { return getRGBAColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneArray", function() { return cloneArray; });
/**
 * Elimina por completo el elemento de estilo cuando no tiene valor. Esto evitará estilos
 * sucios sin valor en el frontend.
 *
 * @param attributes
 * @param setAttributes
 * @param element
 * @param value
 */
function sanitizeStyle(_ref, element) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (value === '') {
    var style = attributes.style;
    delete style[element];
    setAttributes({
      style: style
    });
  }
}
function getRGBAColor(color) {
  return "rgba(".concat(color.rgb.r, ", ").concat(color.rgb.g, ", ").concat(color.rgb.b, ", ").concat(color.rgb.a, ")");
}
function cloneArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
}

/***/ }),

/***/ "./blocks/src/style.scss":
/*!*******************************!*\
  !*** ./blocks/src/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/style/EditBackground.js":
/*!********************************************!*\
  !*** ./blocks/src/style/EditBackground.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditBackground; });
/* harmony import */ var _helpers_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/utilities */ "./blocks/src/helpers/utilities.js");
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/colors */ "./blocks/src/helpers/colors.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _wp$components = wp.components,
    Button = _wp$components.Button,
    SelectControl = _wp$components.SelectControl,
    IconButton = _wp$components.IconButton,
    ColorPalette = _wp$components.ColorPalette;
var MediaUpload = wp.blockEditor.MediaUpload;


function EditBackground(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  /**
   * Renderiza el botón o la imagen en el sidebar de edición
   *
   * @param open
   * @returns {JSX.Element|JSX.Element[]}
   */
  var backgroundImageButtons = function backgroundImageButtons(open) {
    if (attributes.style.backgroundImage !== '' && attributes.style.backgroundImage !== undefined) {
      return wp.element.createElement("div", {
        className: "components-base-control"
      }, wp.element.createElement("img", {
        src: attributes.style.backgroundImage.slice(4, -1),
        alt: "",
        style: {
          width: '100%'
        }
      }), wp.element.createElement("div", {
        className: "sg-toolbar"
      }, wp.element.createElement(IconButton, {
        icon: "edit",
        label: "Edit",
        onClick: open
      }), wp.element.createElement(IconButton, {
        icon: "trash",
        label: "Delete",
        onClick: function onClick() {
          var newStyle = _objectSpread(_objectSpread({}, attributes.style), {}, {
            backgroundImage: ''
          });

          setAttributes({
            style: newStyle
          });
        }
      })));
    } else {
      Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["sanitizeStyle"])({
        attributes: attributes,
        setAttributes: setAttributes
      }, 'backgroundImage');
      return wp.element.createElement("div", {
        className: "components-base-control"
      }, wp.element.createElement("div", {
        className: "no-image"
      }), wp.element.createElement(Button, {
        onClick: open,
        className: "sg-button full button"
      }, "Agregar"));
    }
  };

  return wp.element.createElement("div", {
    className: 'sg-style-edit-background'
  }, wp.element.createElement("div", null, wp.element.createElement("label", null, "Color de Fondo"), wp.element.createElement(ColorPalette, {
    colors: _helpers_colors__WEBPACK_IMPORTED_MODULE_1__["default"],
    value: attributes.style.backgroundColor,
    onChange: function onChange(value) {
      setAttributes({
        style: _objectSpread(_objectSpread({}, attributes.style), {}, {
          backgroundColor: "".concat(value)
        })
      });
      Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["sanitizeStyle"])({
        attributes: attributes,
        setAttributes: setAttributes
      }, 'backgroundColor', value);
    }
  })), wp.element.createElement("div", null, wp.element.createElement("label", null, "Imagen de Fondo"), wp.element.createElement(MediaUpload, {
    type: "Imagen",
    value: attributes.style.backgroundImage,
    onSelect: function onSelect(media) {
      setAttributes({
        style: _objectSpread(_objectSpread({}, attributes.style), {}, {
          backgroundImage: "url(".concat(media.url, ")")
        })
      });
    },
    render: function render(_ref2) {
      var open = _ref2.open;
      return backgroundImageButtons(open);
    }
  })), wp.element.createElement(SelectControl, {
    label: "Tamaño",
    value: attributes.style.backgroundSize,
    options: [{
      label: '',
      value: ''
    }, {
      label: 'cover',
      value: 'cover'
    }, {
      label: 'contain',
      value: 'contain'
    }, {
      label: 'auto',
      value: 'auto'
    }],
    onChange: function onChange(value) {
      setAttributes({
        style: _objectSpread(_objectSpread({}, attributes.style), {}, {
          backgroundSize: value
        })
      });
      Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["sanitizeStyle"])({
        attributes: attributes,
        setAttributes: setAttributes
      }, 'backgroundSize', value);
    }
  }), wp.element.createElement(SelectControl, {
    label: "Repetir",
    value: attributes.style.backgroundRepeat,
    options: [{
      label: '',
      value: ''
    }, {
      label: 'no-repeat',
      value: 'no-repeat'
    }, {
      label: 'repeat',
      value: 'repeat'
    }],
    onChange: function onChange(value) {
      setAttributes({
        style: _objectSpread(_objectSpread({}, attributes.style), {}, {
          backgroundRepeat: value
        })
      });
      Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["sanitizeStyle"])({
        attributes: attributes,
        setAttributes: setAttributes
      }, 'backgroundRepeat', value);
    }
  }), wp.element.createElement(SelectControl, {
    label: "Posición",
    value: attributes.style.backgroundPosition,
    options: [{
      label: '',
      value: ''
    }, {
      label: 'center',
      value: 'center'
    }, {
      label: 'top ',
      value: 'top'
    }, {
      label: 'right',
      value: 'right'
    }, {
      label: 'left ',
      value: 'left'
    }, {
      label: 'center top',
      value: 'center top'
    }, {
      label: 'center right',
      value: 'center right'
    }, {
      label: 'center bottom',
      value: 'center bottom'
    }, {
      label: 'center left',
      value: 'center left'
    }, {
      label: 'top right',
      value: 'top right'
    }, {
      label: 'top left',
      value: 'top left'
    }, {
      label: 'top center',
      value: 'top center'
    }, {
      label: 'bottom right',
      value: 'bottom right'
    }, {
      label: 'bottom left',
      value: 'bottom left'
    }, {
      label: 'bottom center',
      value: 'bottom center'
    }, {
      label: 'left center',
      value: 'left center'
    }, {
      label: 'left top',
      value: 'left top'
    }, {
      label: 'left bottom',
      value: 'left bottom'
    }, {
      label: 'right center',
      value: 'right center'
    }, {
      label: 'right top',
      value: 'right top'
    }, {
      label: 'right bottom',
      value: 'right bottom'
    }],
    onChange: function onChange(value) {
      setAttributes({
        style: _objectSpread(_objectSpread({}, attributes.style), {}, {
          backgroundPosition: value
        })
      });
      Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["sanitizeStyle"])({
        attributes: attributes,
        setAttributes: setAttributes
      }, 'backgroundPosition', value);
    }
  }), wp.element.createElement(SelectControl, {
    label: "Fijación",
    value: attributes.style.backgroundAttachment,
    options: [{
      label: '',
      value: ''
    }, {
      label: 'fixed',
      value: 'fixed'
    }],
    onChange: function onChange(value) {
      setAttributes({
        style: _objectSpread(_objectSpread({}, attributes.style), {}, {
          backgroundAttachment: value
        })
      });
      Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["sanitizeStyle"])({
        attributes: attributes,
        setAttributes: setAttributes
      }, 'backgroundAttachment', value);
    }
  }));
}

/***/ }),

/***/ "./blocks/src/style/EditSpaceDimension.js":
/*!************************************************!*\
  !*** ./blocks/src/style/EditSpaceDimension.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditSpaceDimension; });
/* harmony import */ var _helpers_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/utilities */ "./blocks/src/helpers/utilities.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextControl = wp.components.TextControl;

function EditSpaceDimension(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return wp.element.createElement("div", null, wp.element.createElement("label", {
    htmlFor: "title-spacing"
  }, "Espaciado"), wp.element.createElement("div", {
    className: "dimension-control title-spacing"
  }, wp.element.createElement("div", {
    className: "margin"
  }, wp.element.createElement("div", {
    className: "dimension-input top"
  }, wp.element.createElement(TextControl, {
    value: attributes.style.marginTop,
    onChange: function onChange(value) {
      setAttributes({
        style: _objectSpread(_objectSpread({}, attributes.style), {}, {
          marginTop: value
        })
      });
      Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["sanitizeStyle"])({
        attributes: attributes,
        setAttributes: setAttributes
      }, 'marginTop', value);
    }
  })), wp.element.createElement("div", {
    className: "dimension-input right"
  }, wp.element.createElement(TextControl, {
    value: attributes.style.marginRight,
    onChange: function onChange(value) {
      setAttributes({
        style: _objectSpread(_objectSpread({}, attributes.style), {}, {
          marginRight: value
        })
      });
      Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["sanitizeStyle"])({
        attributes: attributes,
        setAttributes: setAttributes
      }, 'marginRight', value);
    }
  })), wp.element.createElement("div", {
    className: "dimension-input bottom"
  }, wp.element.createElement(TextControl, {
    value: attributes.style.marginBottom,
    onChange: function onChange(value) {
      setAttributes({
        style: _objectSpread(_objectSpread({}, attributes.style), {}, {
          marginBottom: value
        })
      });
      Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["sanitizeStyle"])({
        attributes: attributes,
        setAttributes: setAttributes
      }, 'marginBottom', value);
    }
  })), wp.element.createElement("div", {
    className: "dimension-input left"
  }, wp.element.createElement(TextControl, {
    value: attributes.style.marginLeft,
    onChange: function onChange(value) {
      setAttributes({
        style: _objectSpread(_objectSpread({}, attributes.style), {}, {
          marginLeft: value
        })
      });
      Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["sanitizeStyle"])({
        attributes: attributes,
        setAttributes: setAttributes
      }, 'marginLeft', value);
    }
  })), wp.element.createElement("div", {
    className: "padding"
  }, wp.element.createElement("div", {
    className: "dimension-input top"
  }, wp.element.createElement(TextControl, {
    value: attributes.style.paddingTop,
    onChange: function onChange(value) {
      setAttributes({
        style: _objectSpread(_objectSpread({}, attributes.style), {}, {
          paddingTop: value
        })
      });
      Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["sanitizeStyle"])({
        attributes: attributes,
        setAttributes: setAttributes
      }, 'paddingTop', value);
    }
  })), wp.element.createElement("div", {
    className: "dimension-input right"
  }, wp.element.createElement(TextControl, {
    value: attributes.style.paddingRight,
    onChange: function onChange(value) {
      setAttributes({
        style: _objectSpread(_objectSpread({}, attributes.style), {}, {
          paddingRight: value
        })
      });
      Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["sanitizeStyle"])({
        attributes: attributes,
        setAttributes: setAttributes
      }, 'paddingRight', value);
    }
  })), wp.element.createElement("div", {
    className: "dimension-input bottom"
  }, wp.element.createElement(TextControl, {
    value: attributes.style.paddingBottom,
    onChange: function onChange(value) {
      setAttributes({
        style: _objectSpread(_objectSpread({}, attributes.style), {}, {
          paddingBottom: value
        })
      });
      Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["sanitizeStyle"])({
        attributes: attributes,
        setAttributes: setAttributes
      }, 'paddingBottom', value);
    }
  })), wp.element.createElement("div", {
    className: "dimension-input left"
  }, wp.element.createElement(TextControl, {
    value: attributes.style.paddingLeft,
    onChange: function onChange(value) {
      setAttributes({
        style: _objectSpread(_objectSpread({}, attributes.style), {}, {
          paddingLeft: value
        })
      });
      Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_0__["sanitizeStyle"])({
        attributes: attributes,
        setAttributes: setAttributes
      }, 'paddingLeft', value);
    }
  }))))));
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY2FyZC9jYXJkLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2NhcmQvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY2FyZC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2NvbHVtbi9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9jb2x1bW4vZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9jb2x1bW4vZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY29sdW1uL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY29sdW1uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FsbGVyeS9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2dhbGxlcnkvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FsbGVyeS9nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2dhbGxlcnkvc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9nYWxsZXJ5L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FuaW1hdGlvbi9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9nYW5pbWF0aW9uL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FuaW1hdGlvbi9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9nYW5pbWF0aW9uL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FuaW1hdGlvbi9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2hvdGdyYXBoaWMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvaG90Z3JhcGhpYy9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2hvdGdyYXBoaWMvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvaG90Z3JhcGhpYy9zYXZlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2hvdGdyYXBoaWMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9wb3N0cy9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Bvc3RzL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Bvc3RzL3Bvc3RzLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Bvc3RzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvcHJpY2luZ3RhYmxlL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3ByaWNpbmd0YWJsZS9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3ByaWNpbmd0YWJsZS9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9wcmljaW5ndGFibGUvc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9wcmljaW5ndGFibGUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9yb3cvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3Mvcm93L2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3Mvcm93L2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Jvdy9zYXZlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Jvdy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3NsaWRlci9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9zbGlkZXIvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9zbGlkZXIvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3Mvc2xpZGVyL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3Mvc2xpZGVyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9jb21wb25lbnRzL0dyYXBoaWNQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9jb21wb25lbnRzL0ljb25QaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9jb21wb25lbnRzL1BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2NvbXBvbmVudHMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2hlbHBlcnMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvaGVscGVycy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvc3R5bGUvRWRpdEJhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9zdHlsZS9FZGl0U3BhY2VEaW1lbnNpb24uanMiXSwibmFtZXMiOlsicmVnaXN0ZXJCbG9ja1R5cGUiLCJ3cCIsImJsb2NrcyIsImNvbXBvbmVudHMiLCJUZXh0Q29udHJvbCIsIkljb25CdXR0b24iLCJQYW5lbEJvZHkiLCJTZWxlY3RDb250cm9sIiwiQ2hlY2tib3hDb250cm9sIiwiQ29sb3JQYWxldHRlIiwiYmxvY2tFZGl0b3IiLCJSaWNoVGV4dCIsIkluc3BlY3RvckNvbnRyb2xzIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwidHlwZSIsImNhcmRJbnZlcnNlIiwidmFsIiwic3R5bGUiLCJwYXJhZ3JhcGgiLCJpbWFnZSIsInVybCIsImFsdCIsImJ1dHRvbnMiLCJmbG9hdGluZ3MiLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsInVwZGF0ZUJ1dHRvbiIsImJ1dHRvbiIsImNvbmNhdCIsImNsb25lQXJyYXkiLCJmaWx0ZXIiLCJpdGVtRmlsdGVyIiwiaW5kZXgiLCJ1cGRhdGVGbG9hdGluZyIsInJlbW92ZUZsb2F0aW5nQnV0dG9uIiwicmVuZGVyRmxvYXRpbmdzIiwic29ydCIsImEiLCJiIiwibWFwIiwiYnRuIiwibGFiZWwiLCJ2YWx1ZSIsImRpc3BsYXlMaW5rIiwiaHJlZiIsImRpc3BsYXkiLCJyZW5kZXJCdXR0b25zIiwicmVtb3ZlTGlua0J1dHRvbiIsImFkZEZsb2F0aW5nQnV0dG9uIiwiYnRubGluayIsImxlbmd0aCIsImFkZExpbmtCdXR0b24iLCJhcnIiLCJBcnJheSIsImlzQXJyYXkiLCJpIiwiYXJyMiIsImZyb20iLCJpbnNwZWN0b3JDb250cm9sIiwiTWFpbkNvbG9ycyIsImJhY2tncm91bmRDb2xvciIsImdldEJhc2ljQ2FyZCIsImdldEltYWdlQ2FyZCIsImNhcmRJbWFnZSIsIm1lZGlhIiwiY2FyZENvbnRlbnQiLCJyZW5kZXJDb250ZW50IiwiZ2V0T3ZlcmxheUNhcmQiLCJnZXRDYXJkIiwic2F2ZSIsImdldENhcmRBY3Rpb25zIiwiZ2V0RmxvYXRpbmdBY3Rpb25zIiwiaGFzQ29udGFpbmVyIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsIm9mZnNldFNtYWxsIiwib2Zmc2V0TWVkaXVtIiwib2Zmc2V0TGFyZ2UiLCJJbm5lckJsb2NrcyIsIlBhbmVsUm93IiwiVGFiUGFuZWwiLCJDb21wb25lbnQiLCJlbGVtZW50IiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJjb21wb3NlIiwiY2xhc3NlcyIsIkNvbHVtbkVkaXQiLCJhcmd1bWVudHMiLCJjbGllbnRJZCIsInByb3BzIiwic2VsZWN0IiwiZGF0YSIsInBhcmVudEJsb2NrIiwiZ2V0QmxvY2tzQnlDbGllbnRJZCIsImNoaWxkQmxvY2tzIiwiaW5uZXJCbG9ja3MiLCJlbXB0eUJsb2NrIiwiY2xhc3NOYW1lIiwicmVuZGVyVGFiMSIsImhvb2tzIiwiYWRkRmlsdGVyIiwiY29sdW1uQ3VzdG9tQ2xhc3NOYW1lIiwicmVuZGVyVGFiMiIsIkVkaXRCYWNrZ3JvdW5kIiwicmVuZGVyVGFiMyIsIkVkaXRTcGFjZURpbWVuc2lvbiIsInJlbmRlclRhYiIsInRhYk5hbWUiLCJuYW1lIiwidGFiIiwiQmxvY2tMaXN0QmxvY2siLCJSb3dTYXZlIiwiQmxvY2tDb250cm9scyIsIlBsYWluVGV4dCIsIlJhbmdlQ29udHJvbCIsIlNsb3RoR2Vla0dhbGxlcnlFZGl0IiwiY29uc29sZSIsImxvZyIsImdyaWRfY291bnQiLCJpdGVtIiwibW9kZWwiLCJuZXdPYmplY3QiLCJPYmplY3QiLCJhc3NpZ24iLCJpdGVtcyIsImNvbHVtbldpZHRoIiwid2lkdGgiLCJvbkNoYW5nZUV2ZW50IiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsInJlbmRlckl0ZW1zIiwicmVuZGVyRWRpdEl0ZW0iLCJpbnNwZWN0b3JDb250cm9scyIsIl9fIiwiaTE4biIsInNvdXJjZSIsImF0dHJpYnV0ZSIsInNlbGVjdG9yIiwicXVlcnkiLCJTbG90aEdlZWtHYWxsZXJ5U2F2ZSIsInJlbmRlckl0ZW0iLCJpZCIsImdyYXBoaWMiLCJtYXhXaWR0aCIsImFuaW1hdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJNZWRpYVVwbG9hZCIsIkJ1dHRvbiIsImdyYXBoaWNVcmwiLCJncmFjcGhpY0FsdCIsImJvdHRvbSIsImxlZnQiLCJvcGVuIiwidW5kZWZpbmVkIiwiYmxvY2tDb250cm9scyIsInB1c2hOZXdJdGVtIiwibWFpbkNvbnRyb2wiLCJyZW5kZXJHcmFwaGljIiwicGFyc2VJbnQiLCJpdGVtc0NvbnRyb2wiLCJ1cGRhdGVJdGVtIiwiekluZGV4IiwiZ3JhcGhpY0FsdCIsImhlaWdodCIsIlRleHRhcmVhQ29udHJvbCIsImJvZHkiLCJwb3NpdGlvbiIsInRvcCIsIndpdGhTZWxlY3QiLCJDb2xvclBpY2tlciIsImFwaUZldGNoIiwiYWRkUXVlcnlBcmdzIiwiQ0FURUdPUklFU19MSVNUX1FVRVJZIiwicGVyX3BhZ2UiLCJTbG90aEdlZWtQb3N0RWRpdCIsInN0YXRlIiwiY2F0ZWdvcmllc0xpc3QiLCJpc1N0aWxsTW91bnRlZCIsImZldGNoUmVxdWVzdCIsInBhdGgiLCJ0aGVuIiwic2V0U3RhdGUiLCJwb3N0cyIsImNvbHVtbnMiLCJwb3N0X3Blcl9wYWdlIiwiY2F0ZWdvcnlfc2VsZWN0ZWQiLCJjYXQiLCJhY3Rpb25fcG9zdCIsImdldFJHQkFDb2xvciIsIm9wdGlvbjAiLCJwb3N0IiwidGl0bGVDbGFzc2VzIiwiaW1hZ2VfdXJsIiwiX2VtYmVkZGVkIiwic291cmNlX3VybCIsInJlbmRlcmVkIiwiZXhjZXJwdCIsImxpbmsiLCJvcHRpb24xIiwiYmFja2dyb3VuZEltYWdlIiwib3B0aW9uMiIsImdldEVudGl0eVJlY29yZHMiLCJjYXRlZ29yaWVzIiwiX2VtYmVkIiwia2V5d29yZHMiLCJjdXJyZW5jeSIsInByaWNlIiwiY2VudHMiLCJmZWF0dXJlcyIsIlByaWNpbmdUYWJsZUVkaXQiLCJmZWF0dXJlIiwidGV4dCIsImFjdGl2ZSIsInVwZGF0ZV9mZWF0dXJlIiwicmVuZGVyX2ZlYXR1cmVzIiwiYWRkX2ZlYXR1cmUiLCJQcmljaW5nVGFibGVTYXZlIiwiaXRzU2VjdGlvbiIsIlRvZ2dsZUNvbnRyb2wiLCJyb3dDdXN0b21DbGFzc05hbWUiLCJSb3dFZGl0IiwiQUxMT1dFRF9CTE9DS1MiLCJvblNlbGVjdCIsInJlbmRlckNvbnRhaW5lciIsInJlbmRlclJvdyIsImluZGljYXRvcnMiLCJ1bml0SGVpZ2h0IiwiaW50ZXJ2YWwiLCJFZGl0IiwiYWxpZ25JdGVtcyIsImZsZXgiLCJSZW5kZXJTbGlkZXNDb250cm9sIiwiYWRkTmV3U2xpZGUiLCJzcmMiLCJjYXB0aW9uIiwiY2FwdGlvblBvc2l0aW9uIiwidXBkYXRlU2xpZGUiLCJkZWxldGVTbGlkZSIsIkNvbnRyb2xzIiwiU2F2ZSIsIkdyYXBoaWNQaWNrZXIiLCJvcGVuRXZlbnQiLCJvbkNoYW5nZSIsImdldEltYWdlQnV0dG9uIiwiRHJvcGRvd24iLCJJY29uUGlja2VyIiwiaWNvbnMiLCJmaW5kIiwiaXNPcGVuIiwib25Ub2dnbGUiLCJwcmVmaXgiLCJBbGlnbm1lbnRUb29sYmFyIiwiUGFyYWdyYXBoIiwiZm9udFNpemUiLCJjb2xvciIsInRleHRBbGlnbiIsIm1hcmdpbiIsInBhZGRpbmciLCJhcnJheSIsIm5ld1ZhbHVlIiwic3BsaXQiLCJqb2luIiwicGxhY2Vob2xkZXIiLCJ1cGRhdGVNUCIsIlRpdGxlIiwic2FuaXRpemVTdHlsZSIsInJnYiIsInIiLCJnIiwiYmFja2dyb3VuZEltYWdlQnV0dG9ucyIsInNsaWNlIiwibmV3U3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kQXR0YWNobWVudCIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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LHlCQUFDLFdBQUQ7QUFDSSxTQUFLLEVBQUs3QixVQUFVLENBQUNJLEtBQVgsQ0FBaUI0USxXQUQvQjtBQUVJLFlBQVEsRUFBRyxrQkFBRW5QLEtBQUYsRUFBYTtBQUNwQmpCLG1CQUFhLENBQUU7QUFBRVIsYUFBSyxrQ0FBUUosVUFBVSxDQUFDSSxLQUFuQjtBQUEwQjRRLHFCQUFXLEVBQUNuUDtBQUF0QztBQUFQLE9BQUYsQ0FBYjtBQUNBaU8sOEVBQWEsQ0FBQztBQUFDOVAsa0JBQVUsRUFBVkEsVUFBRDtBQUFhWSxxQkFBYSxFQUFiQTtBQUFiLE9BQUQsRUFBOEIsYUFBOUIsRUFBNkNpQixLQUE3QyxDQUFiO0FBQ0g7QUFMTCxJQURKLENBNUJKLENBckNKLENBREosQ0FGSixDQURKO0FBbUZILEMiLCJmaWxlIjoiYmxvY2tzLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qc1wiKTtcbiIsImltcG9ydCAnLi9lZGl0b3Iuc2NzcydcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgJy4vYmxvY2tzL3Jvdy9ibG9jayc7XHJcbmltcG9ydCAnLi9ibG9ja3MvY29sdW1uL2Jsb2NrJztcclxuXHJcblxyXG5pbXBvcnQgJy4vYmxvY2tzL2NhcmQvY2FyZCc7XHJcbmltcG9ydCAnLi9ibG9ja3MvZ2FsbGVyeS9nYWxsZXJ5JztcclxuaW1wb3J0ICcuL2Jsb2Nrcy9ob3RncmFwaGljL2Jsb2NrJztcclxuaW1wb3J0ICcuL2Jsb2Nrcy9wb3N0cy9wb3N0cyc7XHJcbmltcG9ydCAnLi9ibG9ja3MvZ2FuaW1hdGlvbi9ibG9jayc7XHJcbmltcG9ydCAnLi9ibG9ja3MvcHJpY2luZ3RhYmxlL2Jsb2NrJztcclxuaW1wb3J0ICcuL2Jsb2Nrcy9zbGlkZXIvYmxvY2snO1xyXG5cclxuXHJcbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuY29uc3QgeyBUZXh0Q29udHJvbCwgSWNvbkJ1dHRvbiwgUGFuZWxCb2R5LCBTZWxlY3RDb250cm9sLCBDaGVja2JveENvbnRyb2wsIENvbG9yUGFsZXR0ZSB9ID0gd3AuY29tcG9uZW50cztcclxuY29uc3QgeyBSaWNoVGV4dCwgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuaW1wb3J0ICBUaXRsZSAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UaXRsZSc7XHJcbmltcG9ydCAgUGFyYWdyYXBoICBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhcmFncmFwaCc7XHJcbmltcG9ydCAgR3JhcGhpY1BpY2tlciAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9HcmFwaGljUGlja2VyJztcclxuaW1wb3J0IE1haW5Db2xvcnMgZnJvbSAnLi4vLi4vaGVscGVycy9jb2xvcnMnXHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcclxuXHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSgnc2cvY2FyZCcsIHtcclxuICAgIHRpdGxlOiAnQ2FyZCcsXHJcbiAgICBpY29uOiAnc3Rhci1lbXB0eScsXHJcbiAgICBjYXRlZ29yeTogJ3NnJyxcclxuICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICB0eXBlOntcclxuICAgICAgICAgICAgdHlwZTonc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJ2Jhc2ljJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZEludmVyc2U6e1xyXG4gICAgICAgICAgICB0eXBlOidib29sZWFuJyxcclxuICAgICAgICAgICAgZGVmYXVsdDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGU6e1xyXG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdmFsOidMb3JlbSBJcHN1bScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTp7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJhZ3JhcGg6e1xyXG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdmFsOidMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBjb25zZXF1YXQgZW5pbSB2ZWwgbGlndWxhIHN1c2NpcGl0IHNlbXBlci4gTnVuYyBibGFuZGl0LCBtYWduYSB2aXRhZSBldWlzbW9kIG1vbGVzdGllLCBuaWJoIG5lcXVlIHB1bHZpbmFyIGVyYXQsIGRpY3R1bSBlZ2VzdGFzIG1hZ25hIHVybmEgaWQgYXJjdS4nLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6e31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1hZ2U6e1xyXG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdXJsOicnLFxyXG4gICAgICAgICAgICAgICAgYWx0OicnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJ1dHRvbnM6e1xyXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmxvYXRpbmdzOntcclxuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcclxuICAgICAgICAgICAgZGVmYXVsdDogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0eWxlOntcclxuICAgICAgICAgICAgdHlwZTonb2JqZWN0JyxcclxuICAgICAgICAgICAgZGVmYXVsdDp7fVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZWRpdCgge2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9ICkge1xyXG5cclxuICAgICAgICBjb25zdCB1cGRhdGVCdXR0b24gPSAoYnV0dG9uKSA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXS5jb25jYXQoY2xvbmVBcnJheShhdHRyaWJ1dGVzLmJ1dHRvbnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gYnV0dG9uLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgfSkpLCBbYnV0dG9uXSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlRmxvYXRpbmcgPSAoYnV0dG9uKSA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICBmbG9hdGluZ3M6IFtdLmNvbmNhdChjbG9uZUFycmF5KGF0dHJpYnV0ZXMuZmxvYXRpbmdzLmZpbHRlcihmdW5jdGlvbiAoaXRlbUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtRmlsdGVyLmluZGV4ICE9IGJ1dHRvbi5pbmRleDtcclxuICAgICAgICAgICAgICAgIH0pKSwgW2J1dHRvbl0pXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZUZsb2F0aW5nQnV0dG9uID0gKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICBmbG9hdGluZ3M6IGF0dHJpYnV0ZXMuZmxvYXRpbmdzLmZpbHRlcihmdW5jdGlvbiAoaXRlbUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtRmlsdGVyLmluZGV4ICE9IHZhbDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyRmxvYXRpbmdzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5mbG9hdGluZ3Muc29ydChmdW5jdGlvbihhICwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgICAgICB9KS5tYXAoIGJ0biA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1mbG9hdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbi1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGJ0bi5sYWJlbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHVwZGF0ZUZsb2F0aW5nKCB7Li4uYnRuLCBsYWJlbDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUZXh0byBkZWwgYm90w7NuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkbWluLWxpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBidG4uZGlzcGxheUxpbmsgPT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGbG9hdGluZyh7Li4uYnRuLCBkaXNwbGF5TGluazogdmFsfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHJlbW92ZUZsb2F0aW5nQnV0dG9uKGJ0bi5pbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctYnV0dG9uLWhyZWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB2YWx1ZSA9PiB1cGRhdGVGbG9hdGluZyggey4uLmJ0biwgaHJlZjogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYnRuLmhyZWYgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7ZGlzcGxheTogYnRuLmRpc3BsYXlMaW5rfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0gKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyQnV0dG9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuYnV0dG9ucy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgICAgIH0pLm1hcCggYnRuID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbi1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGJ0bi5sYWJlbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHVwZGF0ZUJ1dHRvbiggey4uLmJ0biwgbGFiZWw6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVGV4dG8gZGVsIGJvdMOzbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZSA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJhZG1pbi1saW5rc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gYnRuLmRpc3BsYXlMaW5rID09ICdub25lJyA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQnV0dG9uKHsuLi5idG4sIGRpc3BsYXlMaW5rOiB2YWx9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gcmVtb3ZlTGlua0J1dHRvbihidG4uaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbi1ocmVmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4gdXBkYXRlQnV0dG9uKCB7Li4uYnRuLCBocmVmOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBidG4uaHJlZiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHtkaXNwbGF5OiBidG4uZGlzcGxheUxpbmt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRGbG9hdGluZ0J1dHRvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGJ0bmxpbmsgPSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogYXR0cmlidXRlcy5mbG9hdGluZ3MubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdBZGQgbGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgaHJlZjonIycsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TGluazogJ25vbmUnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nczogW10uY29uY2F0KGNsb25lQXJyYXkoYXR0cmlidXRlcy5mbG9hdGluZ3MpLCBbYnRubGlua10pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlTGlua0J1dHRvbiA9ICh2YWwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uczogYXR0cmlidXRlcy5idXR0b25zLmZpbHRlcihmdW5jdGlvbiAoaXRlbUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtRmlsdGVyLmluZGV4ICE9IHZhbDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkTGlua0J1dHRvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGJ0bmxpbmsgPSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogYXR0cmlidXRlcy5idXR0b25zLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnQWRkIGxhYmVsJyxcclxuICAgICAgICAgICAgICAgIGhyZWY6JyMnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUxpbms6ICdub25lJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXS5jb25jYXQoY2xvbmVBcnJheShhdHRyaWJ1dGVzLmJ1dHRvbnMpLCBbYnRubGlua10pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2xvbmVBcnJheSA9IChhcnIpID0+IHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycjJbaV0gPSBhcnJbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyMjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGluc3BlY3RvckNvbnRyb2wgPSAoKSA9PntcclxuXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPSdEaXNlw7FvJyBpbml0aWFsT3Blbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0NhcmQgc3R5bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMudHlwZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7IHNldEF0dHJpYnV0ZXMoIHsgdHlwZTogdmFsdWUgfSApIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnYmFzaWMnLCBsYWJlbDogJ0Jhc2ljIENhcmQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ2ltYWdlJywgbGFiZWw6ICdJbWFnZSBDYXJkJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdvdmVybGF5JywgbGFiZWw6ICdPdmVybGF5IENhcmQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbnZlcnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmNhcmRJbnZlcnNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhcmRJbnZlcnNlOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQYWxldHRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMgPSB7IE1haW5Db2xvcnMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRDb2xvciB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgYmFja2dyb3VuZENvbG9yOmAke3ZhbHVlfWAgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0QmFzaWNDYXJkID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXthdHRyaWJ1dGVzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IHZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlLnZhbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IGF0dHJpYnV0ZXMudGl0bGUuc3R5bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ3JlZ2EgdW4gdMOtdHVsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKHsgcGFyYWdyYXBoOiB2YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5wYXJhZ3JhcGgudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgYXR0cmlidXRlcy5wYXJhZ3JhcGguc3R5bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ3JlZ2EgYXF1w60gZWwgY3VlcnBvIGRlIGxhIHRhcmpldGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1jYXJkLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1cy1hbHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBhZGRMaW5rQnV0dG9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuYnV0dG9ucy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubWFwKCBidG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbi1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBidG4ubGFiZWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4gdXBkYXRlQnV0dG9uKCB7Li4uYnRuLCBsYWJlbDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVGV4dG8gZGVsIGJvdMOzbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmUgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRtaW4tbGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IGJ0bi5kaXNwbGF5TGluayA9PSAnbm9uZScgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCdXR0b24oey4uLmJ0biwgZGlzcGxheUxpbms6IHZhbH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gcmVtb3ZlTGlua0J1dHRvbihidG4uaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbi1ocmVmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHVwZGF0ZUJ1dHRvbiggey4uLmJ0biwgaHJlZjogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGJ0bi5ocmVmIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHtkaXNwbGF5OiBidG4uZGlzcGxheUxpbmt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0SW1hZ2VDYXJkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkSW1hZ2UgPSAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JhcGhpY1BpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG1lZGlhID0+IHNldEF0dHJpYnV0ZXMoIHsgaW1hZ2U6IG1lZGlhIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17YXR0cmlidXRlcy5pbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YXR0cmlidXRlcy5pbWFnZS5hbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1mbG9hdGluZy1hY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXMtYWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gYWRkRmxvYXRpbmdCdXR0b24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckZsb2F0aW5ncygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRDb250ZW50ID0gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IHZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyBhdHRyaWJ1dGVzLnRpdGxlLnN0eWxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ3JlZ2EgdW4gdMOtdHVsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHNldEF0dHJpYnV0ZXMoeyBwYXJhZ3JhcGg6IHZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMucGFyYWdyYXBoLnZhbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgYXR0cmlidXRlcy5wYXJhZ3JhcGguc3R5bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFncmVnYSBhcXXDrSBlbCBjdWVycG8gZGUgbGEgdGFyamV0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoYXR0cmlidXRlcy5jYXJkSW52ZXJzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZENvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2F0dHJpYnV0ZXMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgcmVuZGVyQ29udGVudCgpIH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtY2FyZC1hY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXMtYWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gYWRkTGlua0J1dHRvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJCdXR0b25zKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldE92ZXJsYXlDYXJkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogdmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgYXR0cmlidXRlcy50aXRsZS5zdHlsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFncmVnYSB1biB0w610dWxvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2Ugd2F2ZXMtZWZmZWN0IHdhdmVzLWJsb2NrIHdhdmVzLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoaWNQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG1lZGlhID0+IHNldEF0dHJpYnV0ZXMoIHsgaW1hZ2U6IG1lZGlhIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXthdHRyaWJ1dGVzLmltYWdlLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2F0dHJpYnV0ZXMuaW1hZ2UuYWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItYWxpZ25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBhY3RpdmF0b3JcIj5BYnJpciBvdmVybGF5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1yZXZlYWwgb3ZlcmxheS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgYWN0aXZhdG9yXCIgc3R5bGU9eyBhdHRyaWJ1dGVzLnRpdGxlLnN0eWxlIH0+eyBhdHRyaWJ1dGVzLnRpdGxlLnZhbCB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0QXR0cmlidXRlcyh7IHBhcmFncmFwaDogdmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMucGFyYWdyYXBoLnZhbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IGF0dHJpYnV0ZXMucGFyYWdyYXBoLnN0eWxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdyZWdhIGFxdcOtIGVsIGN1ZXJwbyBkZSBsYSB0YXJqZXRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnZXRDYXJkID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChhdHRyaWJ1dGVzLnR5cGUpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYmFzaWMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRCYXNpY0NhcmQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRJbWFnZUNhcmQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnb3ZlcmxheSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldE92ZXJsYXlDYXJkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFtcclxuICAgICAgICAgICAgICAgIGluc3BlY3RvckNvbnRyb2woKSxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2stc2ctY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgZ2V0Q2FyZCgpIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNhdmUoe2F0dHJpYnV0ZXN9KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGdldENhcmRBY3Rpb25zID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYoYXR0cmlidXRlcy5idXR0b25zLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5idXR0b25zLm1hcChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2J1dHRvbi5ocmVmfT57YnV0dG9uLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnZXRGbG9hdGluZ0FjdGlvbnMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihhdHRyaWJ1dGVzLmZsb2F0aW5ncy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5mbG9hdGluZ3MubWFwKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eyBgYnRuLWZsb2F0aW5nIGhhbGZ3YXktZmFiIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBuby1yYWRpdXMgYXV0by13aWR0aCAkeyBhdHRyaWJ1dGVzLmNhcmRJbnZlcnNlID8gJ3RvcCcgOiAnJ31gIH0gaHJlZj17YnV0dG9uLmhyZWZ9PntidXR0b24ubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnZXRCYXNpY0NhcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXthdHRyaWJ1dGVzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHQuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZT0naDMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQtdGl0bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXthdHRyaWJ1dGVzLnRpdGxlLnN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthdHRyaWJ1dGVzLnBhcmFncmFwaC5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHQuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5wYXJhZ3JhcGgudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7IGdldENhcmRBY3Rpb25zKCkgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldEltYWdlQ2FyZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2FyZEltYWdlID0gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F0dHJpYnV0ZXMuaW1hZ2UudXJsfSBhbHQ9e2F0dHJpYnV0ZXMuaW1hZ2UuYWx0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldEZsb2F0aW5nQWN0aW9ucygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRDb250ZW50ID0gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmljaFRleHQuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lPSdoMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXJkLXRpdGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2F0dHJpYnV0ZXMudGl0bGUuc3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthdHRyaWJ1dGVzLnBhcmFncmFwaC5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMucGFyYWdyYXBoLnZhbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGF0dHJpYnV0ZXMuY2FyZEludmVyc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkQ29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRDb250ZW50XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXthdHRyaWJ1dGVzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNvbnRlbnQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENhcmRBY3Rpb25zKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnZXRPdmVybGF5Q2FyZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0LkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU9J3NwYW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQtdGl0bGUgYWN0aXZhdG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlLnZhbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YXR0cmlidXRlcy50aXRsZS5zdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2Ugd2F2ZXMtZWZmZWN0IHdhdmVzLWJsb2NrIHdhdmVzLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhY3RpdmF0b3JcIiBzcmM9e2F0dHJpYnV0ZXMuaW1hZ2UudXJsfSBhbHQ9e2F0dHJpYnV0ZXMuaW1hZ2UuYWx0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1yZXZlYWwgb3ZlcmxheS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lPSdzcGFuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXJkLXRpdGxlIGFjdGl2YXRvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZS52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2F0dHJpYnV0ZXMudGl0bGUuc3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2F0dHJpYnV0ZXMucGFyYWdyYXBoLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnBhcmFncmFwaC52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0Q2FyZCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoYXR0cmlidXRlcy50eXBlKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Jhc2ljJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QmFzaWNDYXJkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0SW1hZ2VDYXJkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ292ZXJsYXknOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRPdmVybGF5Q2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICBnZXRDYXJkKClcclxuICAgICAgICApXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xyXG5cclxuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcclxuXHJcbmltcG9ydCAnLi9lZGl0b3Iuc2NzcydcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSggJ3NnL2NvbHVtbicsIHtcclxuICAgIHRpdGxlOiAnQ29sdW1uJyxcclxuICAgIGljb246ICdzdGFyLWVtcHR5JyxcclxuICAgIGNhdGVnb3J5OiAnc2cnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIGhhc0NvbnRhaW5lcjp7XHJcbiAgICAgICAgICAgIHR5cGU6J2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzbWFsbDp7XHJcbiAgICAgICAgICAgIHR5cGU6J3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6J3MxMidcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lZGl1bTp7XHJcbiAgICAgICAgICAgIHR5cGU6J3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6JydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhcmdlOntcclxuICAgICAgICAgICAgdHlwZTonc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDonJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2Zmc2V0U21hbGw6e1xyXG4gICAgICAgICAgICB0eXBlOidzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OicnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvZmZzZXRNZWRpdW06e1xyXG4gICAgICAgICAgICB0eXBlOidzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OicnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvZmZzZXRMYXJnZTp7XHJcbiAgICAgICAgICAgIHR5cGU6J3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6JydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0eWxlOntcclxuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHt9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0LFxyXG5cclxuICAgIHNhdmVcclxufSApOyIsImltcG9ydCBFZGl0QmFja2dyb3VuZCBmcm9tIFwiLi4vLi4vc3R5bGUvRWRpdEJhY2tncm91bmRcIjtcclxuaW1wb3J0IEVkaXRTcGFjZURpbWVuc2lvbiBmcm9tIFwiLi4vLi4vc3R5bGUvRWRpdFNwYWNlRGltZW5zaW9uXCI7XHJcblxyXG5jb25zdCB7IElubmVyQmxvY2tzLCBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgU2VsZWN0Q29udHJvbCwgUGFuZWxCb2R5LCBQYW5lbFJvdywgVGFiUGFuZWwgfSA9IHdwLmNvbXBvbmVudHM7XHJcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3QgeyBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9ID0gd3AuY29tcG9zZTtcclxuXHJcbmxldCBjbGFzc2VzID0gXCJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbHVtbkVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IGNsaWVudElkIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0IH0gPSB3cC5kYXRhO1xyXG5cclxuICAgICAgICBjb25zdCBwYXJlbnRCbG9jayA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2Nrc0J5Q2xpZW50SWQoIGNsaWVudElkIClbIDAgXTtcclxuICAgICAgICBjb25zdCBjaGlsZEJsb2NrcyA9IHBhcmVudEJsb2NrLmlubmVyQmxvY2tzO1xyXG5cclxuICAgICAgICBjb25zdCBlbXB0eUJsb2NrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGNoaWxkQmxvY2tzLmxlbmd0aCA9PSAwKXtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1lbXB0eS1pbm5lci1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWJsb2NrLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGFzaGljb25zIGRhc2hpY29ucy1zY3JlZW5vcHRpb25zXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21pZW56YSBhIGFybWFyIHR1IGNvbnRlbmlkbyBjb24gdW5vIG8gbcOhcyBibG9xdWVzIGRlIGxhIGxpYnJlcsOtYSBwcmVzaW9uYW5kbyBlbiBlbCBib3TDs24gbcOhcy5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qge2NsYXNzTmFtZSwgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjbGFzc2VzID0gYXR0cmlidXRlcy5zbWFsbDtcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFiMSA9ICAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5zbWFsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3MxJywgdmFsdWU6ICdzMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3MyJywgdmFsdWU6ICdzMicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3MzJywgdmFsdWU6ICdzMycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3M0JywgdmFsdWU6ICdzNCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3M1JywgdmFsdWU6ICdzNScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3M2JywgdmFsdWU6ICdzNicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3M3JywgdmFsdWU6ICdzNycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3M4JywgdmFsdWU6ICdzOCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3M5JywgdmFsdWU6ICdzOScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3MxMCcsIHZhbHVlOiAnczEwJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczExJywgdmFsdWU6ICdzMTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdzMTInLCB2YWx1ZTogJ3MxMicgfSxcclxuICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc21hbGw6IHZhbHVlIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnc2cvY29sdW1uJywgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaXVtIH1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnLScsIHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTEnLCB2YWx1ZTogJ20xJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTInLCB2YWx1ZTogJ20yJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTMnLCB2YWx1ZTogJ20zJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTQnLCB2YWx1ZTogJ200JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTUnLCB2YWx1ZTogJ201JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTYnLCB2YWx1ZTogJ202JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTcnLCB2YWx1ZTogJ203JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTgnLCB2YWx1ZTogJ204JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTknLCB2YWx1ZTogJ205JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTEwJywgdmFsdWU6ICdtMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtMTEnLCB2YWx1ZTogJ20xMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ20xMicsIHZhbHVlOiAnbTEyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBtZWRpdW06IHZhbHVlIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnc2cvY29sdW1uJywgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5sYXJnZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJy0nLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2wxJywgdmFsdWU6ICdsMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2wyJywgdmFsdWU6ICdsMicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2wzJywgdmFsdWU6ICdsMycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2w0JywgdmFsdWU6ICdsNCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2w1JywgdmFsdWU6ICdsNScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2w2JywgdmFsdWU6ICdsNicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2w3JywgdmFsdWU6ICdsNycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2w4JywgdmFsdWU6ICdsOCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2w5JywgdmFsdWU6ICdsOScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2wxMCcsIHZhbHVlOiAnbDEwJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDExJywgdmFsdWU6ICdsMTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdsMTInLCB2YWx1ZTogJ2wxMicgfSxcclxuICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgbGFyZ2U6IHZhbHVlIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnc2cvY29sdW1uJywgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT2Zmc2V0IHNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMub2Zmc2V0U21hbGwgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICctJywgdmFsdWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczEnLCB2YWx1ZTogJ29mZnNldC1zMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zMicsIHZhbHVlOiAnb2Zmc2V0LXMyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXMzJywgdmFsdWU6ICdvZmZzZXQtczMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczQnLCB2YWx1ZTogJ29mZnNldC1zNCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zNScsIHZhbHVlOiAnb2Zmc2V0LXM1JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXM2JywgdmFsdWU6ICdvZmZzZXQtczYnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczcnLCB2YWx1ZTogJ29mZnNldC1zNycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zOCcsIHZhbHVlOiAnb2Zmc2V0LXM4JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXM5JywgdmFsdWU6ICdvZmZzZXQtczknIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczEwJywgdmFsdWU6ICdvZmZzZXQtczEwJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXMxMScsIHZhbHVlOiAnb2Zmc2V0LXMxMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zMTInLCB2YWx1ZTogJ29mZnNldC1zMTInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IG9mZnNldFNtYWxsOiB2YWx1ZSB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdwLmhvb2tzLmFkZEZpbHRlcignZWRpdG9yLkJsb2NrTGlzdEJsb2NrJywgJ3NnL2NvbHVtbicsIGNvbHVtbkN1c3RvbUNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9mZnNldCBtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5vZmZzZXRNZWRpdW0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICctJywgdmFsdWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTEnLCB2YWx1ZTogJ29mZnNldC1tMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tMicsIHZhbHVlOiAnb2Zmc2V0LW0yJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW0zJywgdmFsdWU6ICdvZmZzZXQtbTMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTQnLCB2YWx1ZTogJ29mZnNldC1tNCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tNScsIHZhbHVlOiAnb2Zmc2V0LW01JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW02JywgdmFsdWU6ICdvZmZzZXQtbTYnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTcnLCB2YWx1ZTogJ29mZnNldC1tNycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tOCcsIHZhbHVlOiAnb2Zmc2V0LW04JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW05JywgdmFsdWU6ICdvZmZzZXQtbTknIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTEwJywgdmFsdWU6ICdvZmZzZXQtbTEwJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW0xMScsIHZhbHVlOiAnb2Zmc2V0LW0xMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tMTInLCB2YWx1ZTogJ29mZnNldC1tMTInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IG9mZnNldE1lZGl1bTogdmFsdWUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPZmZzZXQgbGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5vZmZzZXRMYXJnZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJy0nLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sMScsIHZhbHVlOiAnb2Zmc2V0LWwxJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWwyJywgdmFsdWU6ICdvZmZzZXQtbDInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDMnLCB2YWx1ZTogJ29mZnNldC1sMycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sNCcsIHZhbHVlOiAnb2Zmc2V0LWw0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWw1JywgdmFsdWU6ICdvZmZzZXQtbDUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDYnLCB2YWx1ZTogJ29mZnNldC1sNicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sNycsIHZhbHVlOiAnb2Zmc2V0LWw3JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWw4JywgdmFsdWU6ICdvZmZzZXQtbDgnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDknLCB2YWx1ZTogJ29mZnNldC1sOScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sMTAnLCB2YWx1ZTogJ29mZnNldC1sMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDExJywgdmFsdWU6ICdvZmZzZXQtbDExJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWwxMicsIHZhbHVlOiAnb2Zmc2V0LWwxMicgfSxcclxuICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgb2Zmc2V0TGFyZ2U6IHZhbHVlIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnc2cvY29sdW1uJywgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJUYWIyID0gIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsgRWRpdEJhY2tncm91bmQodGhpcy5wcm9wcykgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclRhYjMgPSAgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgeyBFZGl0U3BhY2VEaW1lbnNpb24odGhpcy5wcm9wcykgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclRhYiA9ICh0YWJOYW1lKSA9PntcclxuICAgICAgICAgICAgc3dpdGNoICh0YWJOYW1lKXtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YWIxJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFiMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YWIyJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFiMjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YWIzJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFiMztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT1cIkFqdXN0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInNnLXRhYi1wYW5lbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmUtdGFiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJzPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndGFiMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0dyaWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFiLW9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0YWIyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQkcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFiLXR3bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0YWIzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGltJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RhYi10aHJlZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCB0YWIgKSA9PiByZW5kZXJUYWIodGFiLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbFJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPixcclxuICAgICAgICAgICAgICAgIGVtcHR5QmxvY2soKSxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWNvbnRlbnRcIiBzdHlsZT17IGF0dHJpYnV0ZXMuc3R5bGUgfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5uZXJCbG9ja3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXBwZW5kZXI9eyAoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBlbmRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWVkaXRvci10ZXh0LWJsb2NrLWFwcGVuZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1ibG9jay1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGFzaGljb25zIGRhc2hpY29ucy1zY3JlZW5vcHRpb25zXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbHVtblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJCbG9ja3MuQnV0dG9uQmxvY2tBcHBlbmRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IGNvbHVtbkN1c3RvbUNsYXNzTmFtZSA9IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KChCbG9ja0xpc3RCbG9jaykgPT4ge1xyXG4gICAgcmV0dXJuIHByb3BzID0+IHtcclxuICAgICAgICBpZihwcm9wcy5uYW1lID09IFwic2cvY29sdW1uXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxCbG9ja0xpc3RCbG9jayB7Li4ucHJvcHN9IGNsYXNzTmFtZT17YGNvbCAke3Byb3BzLmF0dHJpYnV0ZXMuc21hbGx9ICR7cHJvcHMuYXR0cmlidXRlcy5tZWRpdW19ICR7cHJvcHMuYXR0cmlidXRlcy5sYXJnZX0gJHtwcm9wcy5hdHRyaWJ1dGVzLm9mZnNldFNtYWxsfSAke3Byb3BzLmF0dHJpYnV0ZXMub2Zmc2V0TWVkaXVtfSAke3Byb3BzLmF0dHJpYnV0ZXMub2Zmc2V0TGFyZ2V9YH0vPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxCbG9ja0xpc3RCbG9jayB7Li4ucHJvcHN9Lz5cclxuICAgIH1cclxufSwgJ2NvbHVtbkN1c3RvbUNsYXNzTmFtZScpO1xyXG5cclxud3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnc2cvY29sdW1uJywgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lKTtcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBJbm5lckJsb2Nrc30gPSB3cC5ibG9ja0VkaXRvcjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3dTYXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7Y2xhc3NOYW1lLCBhdHRyaWJ1dGVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbCAke2NsYXNzTmFtZX0gJHthdHRyaWJ1dGVzLnNtYWxsfSAke2F0dHJpYnV0ZXMubWVkaXVtfSAke2F0dHJpYnV0ZXMubGFyZ2V9ICR7YXR0cmlidXRlcy5vZmZzZXRTbWFsbH0gJHthdHRyaWJ1dGVzLm9mZnNldE1lZGl1bX0gJHthdHRyaWJ1dGVzLm9mZnNldExhcmdlfWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17IGF0dHJpYnV0ZXMuc3R5bGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgQmxvY2tDb250cm9scyxJbnNwZWN0b3JDb250cm9scyxQbGFpblRleHQgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBJY29uQnV0dG9uLCBQYW5lbEJvZHksIFJhbmdlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmltcG9ydCBHcmFwaGljUGlja2VyICBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dyYXBoaWNQaWNrZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdGhHZWVrR2FsbGVyeUVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJncmlkX2NvdW50OiBcIit0aGlzLnByb3BzLmF0dHJpYnV0ZXMuZ3JpZF9jb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VFdmVudChpdGVtLCBtb2RlbCl7XHJcbiAgICAgICAgdmFyIG5ld09iamVjdCA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIG1vZGVsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXS5jb25jYXQodGhpcy5jbG9uZUFycmF5KHRoaXMucHJvcHMuYXR0cmlidXRlcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW1GaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtRmlsdGVyLmluZGV4ICE9IGl0ZW0uaW5kZXg7XHJcbiAgICAgICAgICAgIH0pKSwgW25ld09iamVjdF0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNsb25lQXJyYXkoYXJyKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIyW2ldID0gYXJyW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhcnIyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckVkaXRJdGVtKGl0ZW0pe1xyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW5XaWR0aCA9ICggMTAwL3RoaXMucHJvcHMuYXR0cmlidXRlcy5ncmlkX2NvdW50ICk7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtXCIgc3R5bGU9eyB7IHdpZHRoOmAke2NvbHVtbldpZHRofSVgIH0gfT5cclxuICAgICAgICAgICAgICAgIDxHcmFwaGljUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBtZWRpYSA9PiB0aGlzLm9uQ2hhbmdlRXZlbnQoaXRlbSwgeyBpbWFnZVVybDogbWVkaWEudXJsIH0pIH1cclxuICAgICAgICAgICAgICAgICAgICB1cmw9e2l0ZW0uaW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLmltYWdlQWx0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxQbGFpblRleHRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICggdmFsdWUgKSA9PiB0aGlzLm9uQ2hhbmdlRXZlbnQoaXRlbSwge3VybDogdmFsdWV9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGl0ZW0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJJdGVtcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYoYXR0cmlidXRlcy5pdGVtcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLml0ZW1zLnNvcnQoZnVuY3Rpb24oYSAsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9KS5tYXAoKGl0ZW0pID0+IHRoaXMucmVuZGVyRWRpdEl0ZW0oaXRlbSkpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPHNwYW4+Tm8gaGF5IGl0ZW0gcGFyYSBtb3N0cmFyPC9zcGFuPilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5zcGVjdG9yQ29udHJvbHMgPSAoXHJcbiAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9XCJBanVzdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk7Dum1lcm8gZGUgY29sdW1uYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuZ3JpZF9jb3VudCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgZ3JpZF9jb3VudDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEyIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICA8QmxvY2tDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtdLmNvbmNhdCh0aGlzLmNsb25lQXJyYXkoYXR0cmlidXRlcy5pdGVtcyksIFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGF0dHJpYnV0ZXMuaXRlbXMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlQWx0OlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZ3JlZ2FyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Jsb2NrQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zcGVjdG9yQ29udHJvbHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctZ2FsbGVyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctZ2FsbGVyeS1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcclxuXHJcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCAnc2cvZ2FsbGVyeScsIHtcclxuICAgIHRpdGxlOiAnR2FsbGVyeScsXHJcbiAgICBpY29uOiAnc3Rhci1lbXB0eScsXHJcbiAgICBjYXRlZ29yeTogJ3NnJyxcclxuICAgIGF0dHJpYnV0ZXM6e1xyXG4gICAgICAgIGdyaWRfY291bnQ6IHtcclxuICAgICAgICAgICAgc291cmNlOiAnYXR0cmlidXRlJyxcclxuICAgICAgICAgICAgYXR0cmlidXRlOiAnZGF0YS1jb3VudCcsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnNnLWdhbGxlcnktaW5uZXInLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtczoge1xyXG4gICAgICAgICAgICBzb3VyY2U6ICdxdWVyeScsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogJy5zZy1pdGVtJyxcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiAnYXR0cmlidXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6ICdkYXRhLWluZGV4J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVybDp7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiAnYXR0cmlidXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6ICdocmVmJyxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5zZy1pdGVtLWxpbmsnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ3NyYycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuc2ctaXRlbS1ncmFwaGljJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlQWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiAnYXR0cmlidXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6ICdhbHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLnNnLWl0ZW0tZ3JhcGhpYydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZWRpdCxcclxuXHJcbiAgICBzYXZlXHJcblxyXG59KTsiLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RoR2Vla0dhbGxlcnlTYXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJdGVtKGl0ZW0sIGluZGV4KXtcclxuXHJcbiAgICAgICAgY29uc3QgY29sdW1uV2lkdGggPSAoIDEwMC90aGlzLnByb3BzLmF0dHJpYnV0ZXMuZ3JpZF9jb3VudCApO1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbVwiIGRhdGEtaW5kZXg9e2luZGV4fSBzdHlsZT17IHsgd2lkdGg6YCR7Y29sdW1uV2lkdGh9JWAgfSB9ID5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNnLWl0ZW0tbGlua1wiIGhyZWY9e2l0ZW0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzZy1pdGVtLWdyYXBoaWNcIiBzcmM9e2l0ZW0uaW1hZ2VVcmx9IGFsdD17aXRlbS5pbWFnZUFsdH0vPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2F0dHJpYnV0ZXN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1nYWxsZXJ5IGNvbCBzMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctZ2FsbGVyeS1pbm5lclwiIGRhdGEtY291bnQ9e2F0dHJpYnV0ZXMuZ3JpZF9jb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHRoaXMucmVuZGVySXRlbShpdGVtLCBpbmRleCkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XHJcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XHJcblxyXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSggJ3NnL2dhbmltYXRpb24nLCB7XHJcbiAgICB0aXRsZTogJ0dyYXBoaWMgU3RhY2snLFxyXG4gICAgaWNvbjogJ3N0YXItZW1wdHknLFxyXG4gICAgY2F0ZWdvcnk6ICdzZycsXHJcbiAgICBhdHRyaWJ1dGVzOntcclxuICAgICAgICBpZDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDpbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3JhcGhpYzp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB1cmw6JycsXHJcbiAgICAgICAgICAgICAgICBhbHQ6JydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWF4V2lkdGg6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OlwiNTUwcHhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5pbWF0aW9uOntcclxuICAgICAgICAgICAgZGVmYXVsdDpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdXJhdGlvbjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsYXk6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0LFxyXG5cclxuICAgIHNhdmVcclxuXHJcbn0pOyIsImltcG9ydCBHcmFwaGljUGlja2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyYXBoaWNQaWNrZXJcIjtcclxuXHJcbmNvbnN0IHsgQmxvY2tDb250cm9scywgSW5zcGVjdG9yQ29udHJvbHMsIE1lZGlhVXBsb2FkIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgSWNvbkJ1dHRvbiwgUmFuZ2VDb250cm9sLCBQYW5lbEJvZHksIFRleHRDb250cm9sLCBCdXR0b24gfSA9d3AuY29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RoR2Vla0dhbGxlcnlFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoTmV3SXRlbSgpe1xyXG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgIGluZGV4OiBhdHRyaWJ1dGVzLml0ZW1zLmxlbmd0aCxcclxuICAgICAgICAgICAgaWQ6XCJcIixcclxuICAgICAgICAgICAgZ3JhcGhpY1VybDpcIlwiLFxyXG4gICAgICAgICAgICBncmFjcGhpY0FsdDpcIlwiLFxyXG4gICAgICAgICAgICBhbmltYXRpb246XCJcIixcclxuICAgICAgICAgICAgc3R5bGU6e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBib3R0b206XCIwXCIsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OlwiMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLmNvbmNhdCh0aGlzLmNsb25lQXJyYXkoYXR0cmlidXRlcy5pdGVtcyksIFtpdGVtXSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJdGVtKGl0ZW0pe1xyXG4gICAgICAgIGNvbnN0IHsgc2V0QXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICBpdGVtczogW10uY29uY2F0KHRoaXMuY2xvbmVBcnJheSh0aGlzLnByb3BzLmF0dHJpYnV0ZXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbUZpbHRlci5pbmRleCAhPSBpdGVtLmluZGV4O1xyXG4gICAgICAgICAgICB9KSksIFtpdGVtXSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZUFycmF5KGFycikge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJyMltpXSA9IGFycltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJHcmFwaGljKG9wZW4pIHtcclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoYXR0cmlidXRlcy5ncmFwaGljLnVybCAhPT0gJycgJiYgYXR0cmlidXRlcy5ncmFwaGljLnVybCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F0dHJpYnV0ZXMuZ3JhcGhpYy51cmx9IGFsdD1cIlwiIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctdG9vbGJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgZ3JhcGhpYyA6IHsgdXJsOicnLCBhbHQ6JycgfSB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1pbWFnZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IG9wZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZy1idXR0b24gZnVsbCBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWdyZWdhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgYmxvY2tDb250cm9scyA9IChcclxuICAgICAgICAgICAgPEJsb2NrQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnB1c2hOZXdJdGVtKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWdyZWdhclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Jsb2NrQ29udHJvbHM+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRyb2wgPSAoXHJcbiAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9XCJHcmFwaGljIFN0YWNrXCIgaW5pdGlhbE9wZW49e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkltYWdlbiBkZSBGb25kbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lZGlhVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJJbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuZ3JhcGhpYyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsgbWVkaWEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggIHsgZ3JhcGhpYzogbWVkaWEgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsgKHsgb3BlbiB9KSA9PiB0aGlzLnJlbmRlckdyYXBoaWMob3Blbil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQW5jaG8gbcOheGltb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChhdHRyaWJ1dGVzLm1heFdpZHRoKycnKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKHttYXhXaWR0aDogYCR7dmFsdWV9cHhgIH0pIH1cclxuICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAwIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFuY2xhamVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKHtpZDogdmFsdWUgfSkgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgKVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgaXRlbXNDb250cm9sID0gKFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLml0ZW1zLnNvcnQoZnVuY3Rpb24oYSAsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICAgICAgfSkubWFwKCAoIGl0ZW0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPXtgSXRlbSAke2l0ZW0uaW5kZXgrMX1gfSBpbml0aWFsT3Blbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFuY2xhamVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGl0ZW0uaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBpZDogdmFsdWUgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQW5pbWFjacOzblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS5hbmltYXRpb24gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBhbmltYXRpb246IHZhbHVlIH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFyc2VJbnQoaXRlbS5zdHlsZS53aWR0aCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBzdHlsZTogey4uLml0ZW0uc3R5bGUsIHdpZHRoOmAke3ZhbHVlfSVgfSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDEgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFyc2VJbnQoaXRlbS5zdHlsZS5ib3R0b20pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgc3R5bGU6IHsuLi5pdGVtLnN0eWxlLCBib3R0b206YCR7dmFsdWV9JWB9IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFyc2VJbnQoaXRlbS5zdHlsZS5sZWZ0KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIHN0eWxlOiB7Li4uaXRlbS5zdHlsZSwgbGVmdDpgJHt2YWx1ZX0lYH0gfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInotaW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGl0ZW0uc3R5bGUuekluZGV4IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgc3R5bGU6IHsuLi5pdGVtLnN0eWxlLCB6SW5kZXg6IHBhcnNlSW50KHZhbHVlKX0gfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgKSApXHJcblxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgcmV0dXJuIChbXHJcblxyXG4gICAgICAgICAgICBibG9ja0NvbnRyb2xzLFxyXG4gICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICB7IG1haW5Db250cm9sIH1cclxuICAgICAgICAgICAgICAgIHsgaXRlbXNDb250cm9sIH1cclxuICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz4sXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2stc2ctZ2FuaW1hdGlvbiBzZy1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2F0dHJpYnV0ZXMuZ3JhcGhpYy51cmx9IGFsdD17YXR0cmlidXRlcy5ncmFwaGljLmFsdH0vPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuaXRlbXMuc29ydChmdW5jdGlvbihhICwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkubWFwKCAoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtXCIgZGF0YS1pbmRleD17aW5kZXh9IHN0eWxlPXtpdGVtLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbS1ncmFwaGljLWlubmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaGljUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWl0ZW0tZ3JhcGhpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgbWVkaWEgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgZ3JhcGhpY1VybDogbWVkaWEudXJsLCBncmFwaGljQWx0OiBtZWRpYS5hbHQgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2l0ZW0uZ3JhcGhpY1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLmdyYXBoaWNBbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdGhHZWVrR2FsbGVyeVNhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHthdHRyaWJ1dGVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9e2F0dHJpYnV0ZXMuaWR9IGNsYXNzTmFtZT1cIndwLWJsb2NrLXNnLWdhbmltYXRpb24gc2ctaXRlbXNcIiBzdHlsZT17e21heFdpZHRoOiBhdHRyaWJ1dGVzLm1heFdpZHRofX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXR0cmlidXRlcy5ncmFwaGljLnVybH0gYWx0PXthdHRyaWJ1dGVzLmdyYXBoaWMuYWx0fS8+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5pdGVtcy5tYXAoKGl0ZW0saW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtpdGVtLmlkfSBjbGFzc05hbWU9XCJzZy1pdGVtXCIgc3R5bGU9e2l0ZW0uc3R5bGV9IGRhdGEtYW5pbWF0aW9uPXtpdGVtLmFuaW1hdGlvbn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5ncmFwaGljVXJsfSBhbHQ9e2l0ZW0uZ3JhcGhpY0FsdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnO1xyXG5cclxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5cclxucmVnaXN0ZXJCbG9ja1R5cGUoICdzZy9ob3RncmFwaGljJywge1xyXG4gICAgdGl0bGU6ICdIb3RHcmFwaGljJyxcclxuICAgIGljb246ICdzdGFyLWVtcHR5JyxcclxuICAgIGNhdGVnb3J5OiAnc2cnLFxyXG4gICAgYXR0cmlidXRlczp7XHJcbiAgICAgICAgaGVpZ2h0OntcclxuICAgICAgICAgICAgdHlwZTonc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJzQwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcclxuICAgICAgICAgICAgZGVmYXVsdDpbXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZWRpdCxcclxuXHJcbiAgICBzYXZlXHJcblxyXG59KTsiLCJpbXBvcnQgR3JhcGhpY1BpY2tlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HcmFwaGljUGlja2VyXCI7XHJcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IEJsb2NrQ29udHJvbHMsSW5zcGVjdG9yQ29udHJvbHMgIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuY29uc3QgeyBJY29uQnV0dG9uLFBhbmVsQm9keSxUZXh0Q29udHJvbCxUZXh0YXJlYUNvbnRyb2wsUmFuZ2VDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdGhHZWVrR2FsbGVyeUVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hOZXdJdGVtKCl7XHJcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICAgICAgaW5kZXg6IGF0dHJpYnV0ZXMuaXRlbXMubGVuZ3RoLFxyXG4gICAgICAgICAgICB0aXRsZTonJyxcclxuICAgICAgICAgICAgZ3JhcGhpY1VybDonJyxcclxuICAgICAgICAgICAgZ3JhcGhpY0FsdDonJyxcclxuICAgICAgICAgICAgYm9keTonJyxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICB0b3A6ICcwJyxcclxuICAgICAgICAgICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMzAlJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICBpdGVtczogW10uY29uY2F0KHRoaXMuY2xvbmVBcnJheShhdHRyaWJ1dGVzLml0ZW1zKSwgW2l0ZW1dKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUl0ZW0oaXRlbSl7XHJcbiAgICAgICAgY29uc3QgeyBzZXRBdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXS5jb25jYXQodGhpcy5jbG9uZUFycmF5KHRoaXMucHJvcHMuYXR0cmlidXRlcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW1GaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtRmlsdGVyLmluZGV4ICE9IGl0ZW0uaW5kZXg7XHJcbiAgICAgICAgICAgIH0pKSwgW2l0ZW1dKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lQXJyYXkoYXJyKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIyW2ldID0gYXJyW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhcnIyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYoYXR0cmlidXRlcy5pdGVtcy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaE5ld0l0ZW0oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPVwiSG90Z3JhcGhpY1wiIGluaXRpYWxPcGVuPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWx0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGF0dHJpYnV0ZXMuaGVpZ2h0KycnKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMoe2hlaWdodDogYCR7dmFsdWV9cHhgIH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDEgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLml0ZW1zLnNvcnQoZnVuY3Rpb24oYSAsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkubWFwKCAoIGl0ZW0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPXtgSXRlbSAke2l0ZW0uaW5kZXgrMX1gfSBpbml0aWFsT3Blbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlTDrXR1bG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGl0ZW0udGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCB0aXRsZTogdmFsdWUgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkN1ZXJwb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJFbnRlciBzb21lIHRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGl0ZW0uYm9keSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIGJvZHk6IHZhbHVlIH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFyc2VJbnQoaXRlbS5zdHlsZS53aWR0aCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBzdHlsZTogey4uLml0ZW0uc3R5bGUsIHdpZHRoOmAke3ZhbHVlfSVgfSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDEgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFyc2VJbnQoaXRlbS5zdHlsZS50b3ApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgc3R5bGU6IHsuLi5pdGVtLnN0eWxlLCB0b3A6YCR7dmFsdWV9JWB9IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFyc2VJbnQoaXRlbS5zdHlsZS5sZWZ0KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIHN0eWxlOiB7Li4uaXRlbS5zdHlsZSwgbGVmdDpgJHt2YWx1ZX0lYH0gfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yQ29udHJvbHMoKSxcclxuICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLnB1c2hOZXdJdGVtKCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWdyZWdhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQmxvY2tDb250cm9scz4sXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwLWJsb2NrLXNnLWhvdGdyYXBoaWMgc2ctaXRlbXNcIiBzdHlsZT17e2hlaWdodDphdHRyaWJ1dGVzLmhlaWdodH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5pdGVtcy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLm1hcCggKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW1cIiBkYXRhLWluZGV4PXtpbmRleH0gc3R5bGU9e2l0ZW0uc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbS1ncmFwaGljLWlubmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhpY1BpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctaXRlbS1ncmFwaGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgbWVkaWEgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgZ3JhcGhpY1VybDogbWVkaWEudXJsLCBncmFwaGljQWx0OiBtZWRpYS5hbHQgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtLmdyYXBoaWNVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uZ3JhcGhpY0FsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RoR2Vla0dhbGxlcnlTYXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHthdHRyaWJ1dGVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbXNcIiBzdHlsZT17e2hlaWdodDogYXR0cmlidXRlcy5oZWlnaHR9fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLml0ZW1zLm1hcChpdGVtID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzZy1pdGVtIG1vZGFsLXRyaWdnZXJcIiBzdHlsZT17aXRlbS5zdHlsZX0gaHJlZj17YCNoZyR7aXRlbS5pbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uZ3JhcGhpY1VybH0gYWx0PXtpdGVtLmdyYXBoaWNBbHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxzZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17YGhnJHtpdGVtLmluZGV4fWB9IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudCBzZy1tb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLW1vZGFsLWNvbnRlbnQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57aXRlbS50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLW1vZGFsLWNvbnRlbnQtZ3JhcGhpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmdyYXBoaWNVcmx9IGFsdD17aXRlbS5ncmFwaGljQWx0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiXHJcblxyXG5jb25zdCB7IHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XHJcbmNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBQYW5lbEJvZHksUmFuZ2VDb250cm9sLFRleHRDb250cm9sLFNlbGVjdENvbnRyb2wsQ29sb3JQaWNrZXIgfSA9d3AuY29tcG9uZW50cztcclxuY29uc3QgIGFwaUZldGNoICA9IHdwLmFwaUZldGNoO1xyXG5jb25zdCB7IGFkZFF1ZXJ5QXJncyB9ID0gd3AudXJsO1xyXG5cclxuaW1wb3J0IHsgZ2V0UkdCQUNvbG9yIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlsaXRpZXMnO1xyXG5pbXBvcnQgTWFpbkNvbG9ycyBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBDQVRFR09SSUVTX0xJU1RfUVVFUlkgPSB7XHJcbiAgICBwZXJfcGFnZTogLTEsXHJcbn07XHJcblxyXG5jbGFzcyBTbG90aEdlZWtQb3N0RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXNMaXN0OiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaXNTdGlsbE1vdW50ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmV0Y2hSZXF1ZXN0ID0gYXBpRmV0Y2goIHtcclxuICAgICAgICAgICAgcGF0aDogYWRkUXVlcnlBcmdzKCBgL3dwL3YyL2NhdGVnb3JpZXNgLCBDQVRFR09SSUVTX0xJU1RfUVVFUlkgKSxcclxuICAgICAgICB9IClcclxuICAgICAgICAudGhlbiggKCBjYXRlZ29yaWVzTGlzdCApID0+IHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmlzU3RpbGxNb3VudGVkICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBjYXRlZ29yaWVzTGlzdCB9ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmlzU3RpbGxNb3VudGVkICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBjYXRlZ29yaWVzTGlzdDogW10gfSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaXNTdGlsbE1vdW50ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7cG9zdHMsIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGNsYXNzTmFtZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgY2F0ZWdvcmllc0xpc3QgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmICghcG9zdHMpe1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TG9hZGluZy4uLi48L3NwYW4+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIHBvc3RzLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzcGFuPk5vIGhheSBwb3N0cyBwYXJhIG1vc3RyYXIuPC9zcGFuPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGluc3BlY3RvckNvbnRyb2xzID0gKFxyXG4gICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPVwiQWp1c3Rlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOw7ptZXJvIGRlIGNvbHVtbmFzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmNvbHVtbnMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNvbHVtbnM6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDEgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMiB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiwr9DdWFudG9zIHBvc3Q/XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnBvc3RfcGVyX3BhZ2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBwb3N0X3Blcl9wYWdlOiB2YWx1ZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgOSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWx0byBkZSBsYSBpbWFnZW4gKHB4KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5oZWlnaHQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGhlaWdodDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yw61hXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmNhdGVnb3J5X3NlbGVjdGVkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXSA9IGNhdGVnb3JpZXNMaXN0Lm1hcCggKGNhdCkgPT4gKHsgbGFiZWw6IGNhdC5uYW1lLCB2YWx1ZTogY2F0LmlkIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhdGVnb3J5X3NlbGVjdGVkOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQm90w7NuIGRlIGFjY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuYWN0aW9uX3Bvc3QgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGFjdGlvbl9wb3N0OiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFc3RpbG8gZGVsIGl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMudHlwZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnQ2FyZCcsIHZhbHVlOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnTW9kZXJuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdDbGFzaWMnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gc2V0QXR0cmlidXRlcyggeyB0eXBlOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17IGF0dHJpYnV0ZXMuZmlsdGVyIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IGZpbHRlciA6IGdldFJHQkFDb2xvcih2YWx1ZSkgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb24wID0gKHBvc3QsIGNvbHVtbldpZHRoLCBoZWlnaHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aXRsZUNsYXNzZXMgPSAgJ3NnLWl0ZW0tdGl0bGUnO1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VfdXJsID0gJydcclxuXHJcbiAgICAgICAgICAgIGlmKCFwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddKXtcclxuICAgICAgICAgICAgICAgIHRpdGxlQ2xhc3NlcyA9ICdzZy1pdGVtLXRpdGxlIG5vLWltYWdlJztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpbWFnZV91cmwgPSBwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddWzBdLnNvdXJjZV91cmw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzZy1pdGVtIFwiIHN0eWxlPXsgeyB3aWR0aDpgJHtjb2x1bW5XaWR0aH0lYCB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIiBzdHlsZT17e2hlaWdodDogaGVpZ2h0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VfdXJsfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcG9zdC5leGNlcnB0LnJlbmRlcmVkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2F0dHJpYnV0ZXMuYWN0aW9uX3Bvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbjEgPSAocG9zdCwgY29sdW1uV2lkdGgsIGhlaWdodCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGltYWdlX3VybCA9IHBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ10gPyBwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddWzBdLnNvdXJjZV91cmwgOiAnJztcclxuXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzZy1pdGVtXCIgc3R5bGU9eyB7IHdpZHRoOmAke2NvbHVtbldpZHRofSVgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW0tY29udGVudFwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2VfdXJsfSlgLCBoZWlnaHQ6IGhlaWdodH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW0tZmlsdGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGF0dHJpYnV0ZXMuZmlsdGVyfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzZy1pdGVtLWFjdGlvblwiIGhyZWY9e3Bvc3QubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXR0cmlidXRlcy5hY3Rpb25fcG9zdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbjIgPSAocG9zdCwgY29sdW1uV2lkdGgsIGhlaWdodCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGVDbGFzc2VzID0gICdzZy1pdGVtLXRpdGxlJztcclxuICAgICAgICAgICAgbGV0IGltYWdlX3VybCA9ICcnXHJcblxyXG4gICAgICAgICAgICBpZighcG9zdC5fZW1iZWRkZWRbJ3dwOmZlYXR1cmVkbWVkaWEnXSl7XHJcbiAgICAgICAgICAgICAgICB0aXRsZUNsYXNzZXMgPSAnc2ctaXRlbS10aXRsZSBuby1pbWFnZSc7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VfdXJsID0gcG9zdC5fZW1iZWRkZWRbJ3dwOmZlYXR1cmVkbWVkaWEnXVswXS5zb3VyY2VfdXJsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2ctaXRlbVwiIHN0eWxlPXsgeyB3aWR0aDpgJHtjb2x1bW5XaWR0aH0lYCB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtLWdyYXBoaWNcIiBzdHlsZT17IHsgaGVpZ2h0OiBoZWlnaHQgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlX3VybH0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpdGxlQ2xhc3Nlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNnLWl0ZW0tYWN0aW9uXCIgaHJlZj17cG9zdC5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRyaWJ1dGVzLmFjdGlvbl9wb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY29sdW1uV2lkdGggPSAoIDEwMCAvIGF0dHJpYnV0ZXMuY29sdW1ucyApO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGF0dHJpYnV0ZXMuaGVpZ2h0K1wicHhcIjtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9PlxyXG4gICAgICAgICAgICAgICAge2luc3BlY3RvckNvbnRyb2xzfVxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YHNnLWl0ZW1zIG9wdGlvbiR7YXR0cmlidXRlcy50eXBlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHMubWFwKHBvc3QgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoIHBhcnNlSW50KGF0dHJpYnV0ZXMudHlwZSkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uMChwb3N0LCBjb2x1bW5XaWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uMShwb3N0LCBjb2x1bW5XaWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uMihwb3N0LCBjb2x1bW5XaWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjAocG9zdCwgY29sdW1uV2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTZWxlY3QoIChzZWxlY3QsIHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge3Bvc3RfcGVyX3BhZ2UsIGNhdGVnb3J5X3NlbGVjdGVkfSA9IHByb3BzLmF0dHJpYnV0ZXM7XHJcbiAgICBjb25zdCB7IGdldEVudGl0eVJlY29yZHMgfSA9IHNlbGVjdCggJ2NvcmUnICk7XHJcbiAgICBjb25zdCBxdWVyeSA9IHtcclxuICAgICAgICBwZXJfcGFnZTogcG9zdF9wZXJfcGFnZSxcclxuICAgICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yeV9zZWxlY3RlZCxcclxuICAgICAgICBfZW1iZWQ6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcG9zdHM6IGdldEVudGl0eVJlY29yZHMoJ3Bvc3RUeXBlJywgJ3Bvc3QnLCBxdWVyeSlcclxuICAgIH07XHJcblxyXG59KShTbG90aEdlZWtQb3N0RWRpdCk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xyXG5cclxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5cclxucmVnaXN0ZXJCbG9ja1R5cGUoICdzZy9wb3N0cycsIHtcclxuICAgIHRpdGxlOiBcIsOabHRpbWFzIGVudHJhZGFzXCIsXHJcbiAgICBpY29uOiAnc3Rhci1lbXB0eScsXHJcbiAgICBjYXRlZ29yeTogJ3NnJyxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgX18oICdsb2FkJyApLFxyXG4gICAgICAgIF9fKCAnTG9hZCBQb3N0JyApLFxyXG4gICAgICAgIF9fKCAnZ3V0ZW4tbG9hZC1wb3N0JyApLFxyXG4gICAgXSxcclxuICAgIGF0dHJpYnV0ZXM6e1xyXG4gICAgICAgIHR5cGU6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbnM6e1xyXG4gICAgICAgICAgICB0eXBlOlwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc3RfcGVyX3BhZ2U6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgZGVmYXVsdDogNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVpZ2h0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDIwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2F0ZWdvcnlfc2VsZWN0ZWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWN0aW9uX3Bvc3Q6e1xyXG4gICAgICAgICAgICB0eXBlOlwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XCJWZXIgbcOhcy4uLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaWx0ZXI6e1xyXG4gICAgICAgICAgICB0eXBlOlwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XCJcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZWRpdCxcclxuXHJcbiAgICBzYXZlKCl7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbn0pOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcclxuXHJcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCAnc2cvcHJpY2luZ3RhYmxlJywge1xyXG4gICAgdGl0bGU6ICdQcmljaW5nIFRhYmxlJyxcclxuICAgIGljb246ICdzdGFyLWVtcHR5JyxcclxuICAgIGNhdGVnb3J5OiAnc2cnLFxyXG4gICAgYXR0cmlidXRlczp7XHJcbiAgICAgICAgaWNvbjp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZTp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnUGxhbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN1cnJlbmN5OntcclxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICckJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJpY2U6e1xyXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJzEwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2VudHM6e1xyXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJzk5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmVhdHVyZXM6e1xyXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxyXG4gICAgICAgICAgICBkZWZhdWx0OltdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0LFxyXG5cclxuICAgIHNhdmVcclxuXHJcbn0pOyIsImltcG9ydCBJY29uUGlja2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ljb25QaWNrZXJcIjtcclxuXHJcbmNvbnN0IHsgUmljaFRleHQsIEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgQnV0dG9uLCBDaGVja2JveENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5pbXBvcnQgeyBjbG9uZUFycmF5IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlsaXRpZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpY2luZ1RhYmxlRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkX2ZlYXR1cmUoKSB7XHJcbiAgICAgICAgY29uc3Qge2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBmZWF0dXJlID0ge1xyXG4gICAgICAgICAgICBpbmRleDogYXR0cmlidXRlcy5mZWF0dXJlcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBhY3RpdmU6IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgZmVhdHVyZXM6IFtdLmNvbmNhdChjbG9uZUFycmF5KGF0dHJpYnV0ZXMuZmVhdHVyZXMpLCBbZmVhdHVyZV0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlX2ZlYXR1cmUoZmVhdHVyZSl7XHJcblxyXG4gICAgICAgIGNvbnN0IHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogW10uY29uY2F0KGNsb25lQXJyYXkoYXR0cmlidXRlcy5mZWF0dXJlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW1GaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbUZpbHRlci5pbmRleCAhPSBmZWF0dXJlLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgfSkpLCBbZmVhdHVyZV0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcl9mZWF0dXJlcygpe1xyXG4gICAgICAgIGNvbnN0IHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5mZWF0dXJlcy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICB9KS5tYXAoIGZlYXR1cmUgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YHByaWNpbmctZmVhdHVyZSAkeyBmZWF0dXJlLmFjdGl2ZSA/ICcnIDogJ2Rpc2FibGVkJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBmZWF0dXJlLmFjdGl2ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnVwZGF0ZV9mZWF0dXJlKCB7Li4uZmVhdHVyZSwgYWN0aXZlOiB2YWx1ZSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UmljaFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBmZWF0dXJlLnRleHQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHRoaXMudXBkYXRlX2ZlYXR1cmUoIHsuLi5mZWF0dXJlLCB0ZXh0OiB2YWx1ZSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2FyYWN0ZXLDrXN0aWNhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgIH0gKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy10YWJsZSBmZWF0dXJlZCBzY2FsZS1pbi1vdXQgZmFkZS1pbi1vdXRcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzeW1ib2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8SWNvblBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXR0cmlidXRlcy5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGljb246IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZSA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VycmVuY3lcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuY3VycmVuY3kgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHNldEF0dHJpYnV0ZXMoIHsgY3VycmVuY3k6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZSA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lPVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbGxhcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMucHJpY2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHNldEF0dHJpYnV0ZXMoIHsgcHJpY2U6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZSA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lPVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmNlbnRzIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNlbnRzOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmUgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByaWNpbmctZmVhdHVyZXNcIj5cclxuICAgICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJfZmVhdHVyZXMoKSB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgIGlzU2Vjb25kYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHRoaXMuYWRkX2ZlYXR1cmUoKX1cclxuICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICBBZ3JlZ2FyIGNhcmFjdGVyw61zdGljYVxyXG4gICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBSaWNoVGV4dCB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmljaW5nVGFibGVTYXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJfZmVhdHVyZXMoKXtcclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuZmVhdHVyZXMuc29ydChmdW5jdGlvbihhICwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgfSkubWFwKCBmZWF0dXJlID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BwcmljaW5nLWZlYXR1cmUgJHsgZmVhdHVyZS5hY3RpdmUgPyAnJyA6ICdkaXNhYmxlZCd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBmZWF0dXJlLmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICggPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5kb25lPC9pPiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKCA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9pPiApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgZmVhdHVyZS50ZXh0IH1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgfSApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy10YWJsZSBmZWF0dXJlZCBzY2FsZS1pbi1vdXQgZmFkZS1pbi1vdXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN5bWJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9eyBgZmFzICR7YXR0cmlidXRlcy5pY29ufWB9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UmljaFRleHQuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lPVwiZGl2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHQuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZT1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VycmVuY3lcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmN1cnJlbmN5IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0LkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbGxhcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnByaWNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0LkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5jZW50cyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcmljaW5nLWZlYXR1cmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlcl9mZWF0dXJlcygpIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XHJcblxyXG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnO1xyXG5cclxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCAnc2cvcm93Jywge1xyXG4gICAgdGl0bGU6ICdSb3cnLFxyXG4gICAgaWNvbjogJ3N0YXItZW1wdHknLFxyXG4gICAgY2F0ZWdvcnk6ICdzZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgaXRzU2VjdGlvbjp7XHJcbiAgICAgICAgICAgIHR5cGU6J2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpZDp7XHJcbiAgICAgICAgICAgIHR5cGU6J3N0cmluZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYXNDb250YWluZXI6e1xyXG4gICAgICAgICAgICB0eXBlOidib29sZWFuJyxcclxuICAgICAgICAgICAgZGVmYXVsdDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3R5bGU6e1xyXG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICAgICAgZGVmYXVsdDoge31cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVkaXQsXHJcblxyXG4gICAgc2F2ZVxyXG59ICk7IiwiY29uc3QgeyBJbm5lckJsb2NrcywgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7IFBhbmVsQm9keSwgUGFuZWxSb3csIFRvZ2dsZUNvbnRyb2wsIFRhYlBhbmVsLCBUZXh0Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSA9IHdwLmNvbXBvc2U7XHJcblxyXG5pbXBvcnQgRWRpdEJhY2tncm91bmQgZnJvbSBcIi4uLy4uL3N0eWxlL0VkaXRCYWNrZ3JvdW5kXCI7XHJcbmltcG9ydCBFZGl0U3BhY2VEaW1lbnNpb24gZnJvbSBcIi4uLy4uL3N0eWxlL0VkaXRTcGFjZURpbWVuc2lvblwiO1xyXG5cclxuY29uc3Qgcm93Q3VzdG9tQ2xhc3NOYW1lID0gY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoKEJsb2NrTGlzdEJsb2NrKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvcHMgPT4ge1xyXG4gICAgICAgIGlmKHByb3BzLm5hbWUgPT0gXCJzZy9yb3dcIil7XHJcbiAgICAgICAgICAgIHJldHVybiA8QmxvY2tMaXN0QmxvY2sgeyAuLi5wcm9wcyB9IGNsYXNzTmFtZT17ICdyb3cnIH0gLz5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8QmxvY2tMaXN0QmxvY2sgeyAuLi5wcm9wcyB9IC8+XHJcbiAgICB9XHJcbn0sICdyb3dDdXN0b21DbGFzc05hbWUnKTtcclxuXHJcbndwLmhvb2tzLmFkZEZpbHRlcignZWRpdG9yLkJsb2NrTGlzdEJsb2NrJywgJ3NnL3JvdycsIHJvd0N1c3RvbUNsYXNzTmFtZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3dFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbICdzZy9jb2x1bW4nXTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBjbGllbnRJZCwgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IHNlbGVjdCB9ID0gd3AuZGF0YTtcclxuXHJcbiAgICAgICAgY29uc3QgcGFyZW50QmxvY2sgPSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3NCeUNsaWVudElkKCBjbGllbnRJZCApWyAwIF07XHJcbiAgICAgICAgY29uc3QgY2hpbGRCbG9ja3MgPSBwYXJlbnRCbG9jay5pbm5lckJsb2NrcztcclxuXHJcbiAgICAgICAgY29uc3QgZW1wdHlCbG9jayA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCBjaGlsZEJsb2Nrcy5sZW5ndGggPT0gMCl7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1lbXB0eS1pbm5lci1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1ibG9jay1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGFzaGljb25zIGRhc2hpY29ucy1zY3JlZW5vcHRpb25zXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ3JlZ2EgdW5hIG8gbcOhcyBjb2x1bW5hcyBwcmVzaW9uYW5kbyBlbCBib3TDs24gZGUgYWJham8gY29uIGVsIHPDrW1ib2xvIGRlIG3DoXMuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvblNlbGVjdCA9ICggdGFiTmFtZSApID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggJ1NlbGVjdGluZyB0YWInLCB0YWJOYW1lICk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFiMSA9ICAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VG9nZ2xlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWN0aXZhciBzZWNjacOzblwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVscD17IGF0dHJpYnV0ZXMuaXRzU2VjdGlvbiA/ICdTZWNjacOzbi4nIDogJ1NvbG8gZmlsYS4nIH1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsgYXR0cmlidXRlcy5pdHNTZWN0aW9uIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyggeyBpdHNTZWN0aW9uOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBY3RpdmFyIGNvbnRlbmVkb3I/XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWxwPXsgYXR0cmlidXRlcy5oYXNDb250YWluZXIgPyAnQ29udGVuZWRvci4nIDogJ1NvbG8gZmlsYS4nIH1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsgYXR0cmlidXRlcy5oYXNDb250YWluZXIgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGhhc0NvbnRhaW5lcjogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFuY2xhamUgSFRNTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoIHsgaWQ6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmlkIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJUYWIyID0gIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsgRWRpdEJhY2tncm91bmQodGhpcy5wcm9wcykgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclRhYjMgPSAgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgeyBFZGl0U3BhY2VEaW1lbnNpb24odGhpcy5wcm9wcykgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclRhYiA9ICh0YWJOYW1lKSA9PntcclxuICAgICAgICAgICAgc3dpdGNoICh0YWJOYW1lKXtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YWIxJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFiMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YWIyJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFiMjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YWIzJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFiMztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT1cIkFqdXN0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInNnLXRhYi1wYW5lbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmUtdGFiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17IG9uU2VsZWN0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJzPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndGFiMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0dlbmVyYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFiLW9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0YWIyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQkcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFiLXR3bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0YWIzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGltJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RhYi10aHJlZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCB0YWIgKSA9PiByZW5kZXJUYWIodGFiLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbFJvdz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz4sXHJcbiAgICAgICAgICAgICAgICBlbXB0eUJsb2NrKCksXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1jb250YWluZXJcIiBzdHlsZT17IGF0dHJpYnV0ZXMuc3R5bGV9ID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5uZXJCbG9ja3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXBwZW5kZXI9eyAoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBlbmRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWVkaXRvci10ZXh0LWJsb2NrLWFwcGVuZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1ibG9jay1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGFzaGljb25zIGRhc2hpY29ucy1zY3JlZW5vcHRpb25zXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJCbG9ja3MuQnV0dG9uQmxvY2tBcHBlbmRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBJbm5lckJsb2Nrc30gPSB3cC5ibG9ja0VkaXRvcjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3dTYXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7Y2xhc3NOYW1lLCBhdHRyaWJ1dGVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWUgIT0gdW5kZWZpbmVkID8gY2xhc3NOYW1lIDogJyc7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlckNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuaGFzQ29udGFpbmVyID9cclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXsgYXR0cmlidXRlcy5pZCB9IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5pdHNTZWN0aW9uID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXsgYXR0cmlidXRlcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17IGF0dHJpYnV0ZXMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyQmxvY2tzLkNvbnRlbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDpcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLml0c1NlY3Rpb24gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD17IGF0dHJpYnV0ZXMuaWQgfSAgY2xhc3NOYW1lPXtgcm93ICR7IGNsYXNzZXMgfWB9IHN0eWxlPXsgYXR0cmlidXRlcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyQmxvY2tzLkNvbnRlbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXsgYXR0cmlidXRlcy5pZCB9ICBjbGFzc05hbWU9e2Byb3cgJHsgY2xhc3NlcyB9YH0gc3R5bGU9eyBhdHRyaWJ1dGVzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKCByZW5kZXJDb250YWluZXIoKSApO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcclxuXHJcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCAnc2cvc2xpZGVyJywge1xyXG4gICAgaWQ6JycsXHJcbiAgICB0aXRsZTogJ1NsaWRlcicsXHJcbiAgICBpY29uOiAnc3Rhci1lbXB0eScsXHJcbiAgICBjYXRlZ29yeTogJ3NnJyxcclxuICAgIGF0dHJpYnV0ZXM6e1xyXG4gICAgICAgIGluZGljYXRvcnM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVpZ2h0OiAge1xyXG4gICAgICAgICAgICBkZWZhdWx0OjQwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdW5pdEhlaWdodDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XCJweFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdXJhdGlvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OjUwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW50ZXJ2YWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDo2MDAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtczoge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxyXG4gICAgICAgICAgICBkZWZhdWx0OltdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0LFxyXG5cclxuICAgIHNhdmVcclxuXHJcbn0pOyIsImNvbnN0IHsgUmljaFRleHQsUGxhaW5UZXh0LEluc3BlY3RvckNvbnRyb2xzLE1lZGlhVXBsb2FkIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgUGFuZWxCb2R5LFRvZ2dsZUNvbnRyb2wsUmFuZ2VDb250cm9sLFRleHRDb250cm9sLFNlbGVjdENvbnRyb2wsQnV0dG9uLEljb25CdXR0b24gfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5pbXBvcnQge2Nsb25lQXJyYXl9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbGl0aWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnRyb2xzKCl7XHJcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICA8UGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9zdHJhciBpbmRpY2Fkb3Jlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmluZGljYXRvcnMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChzdGF0ZSkgPT4gc2V0QXR0cmlidXRlcyggeyBpbmRpY2F0b3JzOiBzdGF0ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFsdG8gZGVsIHNsaWRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiZmxleC1zdGFydFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDpcIjcwJVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuaGVpZ2h0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gc2V0QXR0cmlidXRlcyggeyBoZWlnaHQ6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDEwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6XCIxMCVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy51bml0SGVpZ2h0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdweCcsIHZhbHVlOiAncHgnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnZW0nLCB2YWx1ZTogJ2VtJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3JlbScsIHZhbHVlOiAncmVtJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3ZoJywgdmFsdWU6ICd2aCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgdW5pdEhlaWdodDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkR1cmFjacOzblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCIxcyBlcyBpZ3VhbCBhIDEwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuZHVyYXRpb24gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGR1cmF0aW9uOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSW50ZXJ2YWxvIGVudHJlIHNsaWRlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiMXMgZXMgaWd1YWwgYSAxMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmludGVydmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gc2V0QXR0cmlidXRlcyggeyBpbnRlcnZhbDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPVwiSW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLlJlbmRlclNsaWRlc0NvbnRyb2woKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZy1idXR0b24gZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlY29uZGFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHRoaXMuYWRkTmV3U2xpZGUoKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5BZ3JlZ2FyIGRpYXBvc2l0aXZhPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgYWRkTmV3U2xpZGUoKXtcclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXS5jb25jYXQoY2xvbmVBcnJheShhdHRyaWJ1dGVzLml0ZW1zKSwgW3tcclxuICAgICAgICAgICAgICAgIGluZGV4OiBhdHRyaWJ1dGVzLml0ZW1zLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGdyYXBoaWM6e1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzonJyxcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6JydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYXB0aW9uOicnLFxyXG4gICAgICAgICAgICAgICAgY2FwdGlvblBvc2l0aW9uOicnLCAvL2NlbnRlci1hbGlnbiBsZWZ0LWFsaWduIHJpZ2h0LWFsaWduXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTbGlkZShpdGVtLCBtb2RlbCl7XHJcbiAgICAgICAgdmFyIG5ld09iamVjdCA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIG1vZGVsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXS5jb25jYXQoY2xvbmVBcnJheSh0aGlzLnByb3BzLmF0dHJpYnV0ZXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbUZpbHRlci5pbmRleCAhPSBpdGVtLmluZGV4O1xyXG4gICAgICAgICAgICB9KSksIFtuZXdPYmplY3RdKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVNsaWRlKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFJlbmRlclNsaWRlc0NvbnRyb2woKXtcclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZihhdHRyaWJ1dGVzLml0ZW1zLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5pdGVtcy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgICAgIH0pLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiB7YFNsaWRlICR7aW5kZXh9YH0gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiSW1hZ2VuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS5ncmFwaGljLnNyYyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17IG1lZGlhID0+IHRoaXMudXBkYXRlU2xpZGUoaXRlbSwgeyBncmFwaGljOiB7IHNyYzptZWRpYS51cmwsIGFsdDptZWRpYS5hbHR9IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17ICh7IG9wZW4gfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdyYXBoaWMuc3JjICE9PSAnJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5ncmFwaGljLnNyY30gYWx0PVwiXCIgc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy10b29sYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IG9wZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4gdGhpcy5kZWxldGVTbGlkZShpbmRleCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1pbWFnZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IG9wZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZy1idXR0b24gZnVsbCBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWNjaW9uYXIgaW1hZ2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPHNwYW4+Tm8gaGF5IGl0ZW0gcGFyYSBtb3N0cmFyPC9zcGFuPilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICBjb25zdCB7YXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICB7IHRoaXMuQ29udHJvbHMoKSB9XHJcbiAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLXNsaWRlciBzbGlkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgZGF0YS1pbmRpY2F0b3JzPXthdHRyaWJ1dGVzLmluZGljYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD17YXR0cmlidXRlcy5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICBkYXRhLWR1cmF0aW9uPXthdHRyaWJ1dGVzLmR1cmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgZGF0YS1pbnRlcnZhbD17YXR0cmlidXRlcy5pbnRlcnZhbH1cclxuICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNsaWRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5pdGVtcy5tYXAoIGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmdyYXBoaWMuc3JjfSBhbHQ9e2l0ZW0uZ3JhcGhpYy5hbHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgaXRlbSA9IHtcclxuICAgIGdyYXBoaWM6e1xyXG4gICAgICAgIHNyYzonJyxcclxuICAgICAgICBhbHQ6JydcclxuICAgIH0sXHJcbiAgICBjYXB0aW9uOicnLFxyXG4gICAgY2FwdGlvblBvc2l0aW9uOicnLCAvL2NlbnRlci1hbGlnbiBsZWZ0LWFsaWduIHJpZ2h0LWFsaWduXHJcbn1cclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHthdHRyaWJ1dGVzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZy1zbGlkZXIgc2xpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWluZGljYXRvcnM9e2F0dHJpYnV0ZXMuaW5kaWNhdG9yc31cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD17YXR0cmlidXRlcy5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1kdXJhdGlvbj17YXR0cmlidXRlcy5kdXJhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWludGVydmFsPXthdHRyaWJ1dGVzLmludGVydmFsfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzbGlkZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5pdGVtcy5tYXAoIGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmdyYXBoaWMuc3JjfSBhbHQ9e2l0ZW0uZ3JhcGhpYy5hbHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgTWVkaWFVcGxvYWQgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7IEljb25CdXR0b24gfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaGljUGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlQnV0dG9uKG9wZW5FdmVudCwgdXJsLCBhbHQsIG9uQ2hhbmdlKSB7XHJcbiAgICAgICAgaWYodXJsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JhcGhpYy1waWNrZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgdXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2FsdH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctdG9vbGJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuRXZlbnQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAobWVkaWEpID0+IG9uQ2hhbmdlKCcnKSAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmFwaGljLXBpY2tlci1uby1pbWFnZVwiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IG9wZW5FdmVudCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJmb3JtYXQtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFncmVnYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3VybCwgYWx0LCBvbkNoYW5nZX0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVkaWFVcGxvYWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbnRlci1hbGlnblwiXHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdD17IChtZWRpYSkgPT4gb25DaGFuZ2UobWVkaWEpIH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICByZW5kZXI9eyAoeyBvcGVuIH0pID0+IHRoaXMuZ2V0SW1hZ2VCdXR0b24ob3BlbiwgdXJsLCBhbHQsIG9uQ2hhbmdlKSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgQnV0dG9uLCBEcm9wZG93biwgSWNvbkJ1dHRvbiB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25QaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZSwgb25DaGFuZ2V9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBpY29uID0gaWNvbnMuZmluZChpID0+IGkubmFtZSA9PSB2YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLXBpY2tlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudENsYXNzTmFtZT1cImljb24tcGlja2VyLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYm90dG9tIHJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2dnbGU9eyAoIHsgaXNPcGVuLCBvblRvZ2dsZSB9ICkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWNvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUZXJ0aWFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgb25Ub2dnbGUgfSBhcmlhLWV4cGFuZGVkPXsgaXNPcGVuIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7aWNvbi5wcmVmaXh9ICR7aWNvbi5uYW1lfWB9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBvblRvZ2dsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9eyBpc09wZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWdyZWdhciDDrWNvbm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckNvbnRlbnQ9eyAoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbnMubWFwKCBpY29uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVGVydGlhcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCk9PiBvbkNoYW5nZShpY29uLm5hbWUpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake2ljb24ucHJlZml4fSAke2ljb24ubmFtZX1gfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGljb25zID0gW1xyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1hbmdsZS1kb3duJ30sXHJcbiAgICB7cHJlZml4OiAnZmFzJywgbmFtZTogJ2ZhLWFuZ2xlLWxlZnQnfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtYW5nbGUtcmlnaHQnfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtYW5nbGUtdXAnfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtYXJyb3ctZG93bid9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1hcnJvdy1sZWZ0J30sXHJcbiAgICB7cHJlZml4OiAnZmFzJywgbmFtZTogJ2ZhLWFycm93LXJpZ2h0J30sXHJcbiAgICB7cHJlZml4OiAnZmFzJywgbmFtZTogJ2ZhLWFycm93LXVwJ30sXHJcbiAgICB7cHJlZml4OiAnZmFzJywgbmFtZTogJ2ZhLXN0b3JlJ30sXHJcbiAgICB7cHJlZml4OiAnZmFzJywgbmFtZTogJ2ZhLXN0b3JlLWFsdCd9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1nbG9iZSd9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1nbG9iZS1ldXJvcGUnfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtZ2xvYmUtYXNpYSd9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1nbG9iZS1hbWVyaWNhcyd9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1zZXJ2ZXInfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtZGF0YWJhc2UnfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtaW5mbyd9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1jaGVjayd9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1jaGVjay1zcXVhcmUnfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtY2hlY2snfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtd2Fsa2luZyd9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1ydW5pbmcnfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtbWFsZSd9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1idWlsZGluZyd9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1jaXR5J30sXHJcbiAgICB7cHJlZml4OiAnZmFzJywgbmFtZTogJ2ZhLWhvbWUnfSxcclxuXHJcbl1cclxuXHJcbi8qXHJcbioge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS0nfSxcclxuKi8iLCJjb25zdCB7Q29tcG9uZW50fSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHtJbnNwZWN0b3JDb250cm9scywgUmljaFRleHQsIEJsb2NrQ29udHJvbHMsIEFsaWdubWVudFRvb2xiYXJ9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHtQYW5lbEJvZHksIFJhbmdlQ29udHJvbCwgQ29sb3JQYWxldHRlLCBUZXh0Q29udHJvbH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaW1wb3J0IE1haW5Db2xvcnMgZnJvbSAnLi4vaGVscGVycy9jb2xvcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYWdyYXBoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbDogJycsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDAgMCAwJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDAgMCAwJyxcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZSwgc3R5bGV9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsOiB2YWx1ZX0pO1xyXG5cclxuICAgICAgICBpZiAoc3R5bGUubWFyZ2luICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdHlsZTogc3R5bGV9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTVAoYXJyYXksIHZhbHVlLCBpbmRleCkge1xyXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGFycmF5LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgbmV3VmFsdWVbaW5kZXhdID0gYCR7dmFsdWV9YDtcclxuICAgICAgICByZXR1cm4gbmV3VmFsdWUuam9pbignICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge29uQ2hhbmdlLCB2YWx1ZSwgcGxhY2Vob2xkZXJ9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3Qge3N0eWxlfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgPEJsb2NrQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFsaWdubWVudFRvb2xiYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLnRleHRBbGlnbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0eWxlOiB7Li4uc3R5bGUsIHRleHRBbGlnbjogdmFsdWV9fSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9CbG9ja0NvbnRyb2xzPixcclxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPSdQw6FycmFmbycgaW5pdGlhbE9wZW49e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUYW1hw7FvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXJzZUludChzdHlsZS5mb250U2l6ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGU6IHsuLi5zdHlsZSwgZm9udFNpemU6IGAke3ZhbHVlfXB4YH19LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGUtdGV4dC1jb2xvclwiPkNvbG9yIGRlIHRleHRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0LWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQYWxldHRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzID0geyBNYWluQ29sb3JzIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUuY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdHlsZTogey4uLnN0eWxlLCBjb2xvcjogYCR7dmFsdWV9YH19LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlLXNwYWNpbmdcIj5Fc3BhY2lhZG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1jb250cm9sIHRpdGxlLXNwYWNpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLm1hcmdpbi5zcGxpdCgnICcpWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHRoaXMudXBkYXRlTVAoc3R5bGUubWFyZ2luLCB2YWx1ZSwgMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUubWFyZ2luLnNwbGl0KCcgJylbMV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogdGhpcy51cGRhdGVNUChzdHlsZS5tYXJnaW4sIHZhbHVlLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUubWFyZ2luLnNwbGl0KCcgJylbMl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogdGhpcy51cGRhdGVNUChzdHlsZS5tYXJnaW4sIHZhbHVlLCAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLm1hcmdpbi5zcGxpdCgnICcpWzNdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHRoaXMudXBkYXRlTVAoc3R5bGUubWFyZ2luLCB2YWx1ZSwgMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLnBhZGRpbmcuc3BsaXQoJyAnKVswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB0aGlzLnVwZGF0ZU1QKHN0eWxlLnBhZGRpbmcsIHZhbHVlLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLnBhZGRpbmcuc3BsaXQoJyAnKVsxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB0aGlzLnVwZGF0ZU1QKHN0eWxlLnBhZGRpbmcsIHZhbHVlLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbMl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLnBhZGRpbmcuc3BsaXQoJyAnKVszXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB0aGlzLnVwZGF0ZU1QKHN0eWxlLnBhZGRpbmcsIHZhbHVlLCAzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz4sXHJcbiAgICAgICAgICAgICAgICA8UmljaFRleHRcclxuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lPVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWw6IHZhbHVlfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ29udHJvbHM9e1snYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ119XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyBwbGFjZWhvbGRlciB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxufSIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzLCBSaWNoVGV4dCwgQmxvY2tDb250cm9scywgQWxpZ25tZW50VG9vbGJhciB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgUGFuZWxCb2R5LCBSYW5nZUNvbnRyb2wsIENvbG9yUGFsZXR0ZSwgVGV4dENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5pbXBvcnQgTWFpbkNvbG9ycyBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWw6ICcnLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOidsZWZ0JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgMCAwIDAnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzAgMCAwIDAnLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZSwgc3R5bGV9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsOiB2YWx1ZX0pO1xyXG5cclxuICAgICAgICBpZiAoc3R5bGUubWFyZ2luICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdHlsZTogc3R5bGV9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTVAoYXJyYXksIHZhbHVlLCBpbmRleCl7XHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gYXJyYXkuc3BsaXQoJyAnKTtcclxuICAgICAgICBuZXdWYWx1ZVtpbmRleF0gPSBgJHt2YWx1ZX1gO1xyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZS5qb2luKCcgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgdHlwZSwgY2xhc3NOYW1lLCBvbkNoYW5nZSwgdmFsdWUsIHBsYWNlaG9sZGVyIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCAgeyBzdHlsZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuKFtcclxuICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbGlnbm1lbnRUb29sYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS50ZXh0QWxpZ259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIHRleHRBbGlnbjp2YWx1ZSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9CbG9ja0NvbnRyb2xzPixcclxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPSdUw610dWxvJyBpbml0aWFsT3Blbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRhbWHDsW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChzdHlsZS5mb250U2l6ZSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBmb250U2l6ZTpgJHt2YWx1ZX1weGAgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZS10ZXh0LWNvbG9yXCI+Q29sb3IgZGUgdGV4dG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXRleHQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclBhbGV0dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMgPSB7IE1haW5Db2xvcnMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgc3R5bGUuY29sb3IgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIGNvbG9yOmAke3ZhbHVlfWAgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZS1zcGFjaW5nXCI+RXNwYWNpYWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24tY29udHJvbCB0aXRsZS1zcGFjaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBzdHlsZS5tYXJnaW4uc3BsaXQoJyAnKVswXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIG1hcmdpbjp0aGlzLnVwZGF0ZU1QKHN0eWxlLm1hcmdpbiwgdmFsdWUsIDApIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgc3R5bGUubWFyZ2luLnNwbGl0KCcgJylbMV0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBtYXJnaW46dGhpcy51cGRhdGVNUChzdHlsZS5tYXJnaW4sIHZhbHVlLCAxKSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBzdHlsZS5tYXJnaW4uc3BsaXQoJyAnKVsyXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIG1hcmdpbjp0aGlzLnVwZGF0ZU1QKHN0eWxlLm1hcmdpbiwgdmFsdWUsIDIpIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBzdHlsZS5tYXJnaW4uc3BsaXQoJyAnKVszXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIG1hcmdpbjp0aGlzLnVwZGF0ZU1QKHN0eWxlLm1hcmdpbiwgdmFsdWUsIDMpIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHN0eWxlLnBhZGRpbmcuc3BsaXQoJyAnKVswXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgcGFkZGluZzp0aGlzLnVwZGF0ZU1QKHN0eWxlLnBhZGRpbmcsIHZhbHVlLCAwKSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHN0eWxlLnBhZGRpbmcuc3BsaXQoJyAnKVsxXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgcGFkZGluZzp0aGlzLnVwZGF0ZU1QKHN0eWxlLnBhZGRpbmcsIHZhbHVlLCAxKSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbMl0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIHBhZGRpbmc6dGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMikgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHN0eWxlLnBhZGRpbmcuc3BsaXQoJyAnKVszXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgcGFkZGluZzp0aGlzLnVwZGF0ZU1QKHN0eWxlLnBhZGRpbmcsIHZhbHVlLCAzKSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz4sXHJcbiAgICAgICAgICAgICAgICA8UmljaFRleHRcclxuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgdmFsOnZhbHVlIH0sICAoKSA9PiBvbkNoYW5nZSggdGhpcy5zdGF0ZSApICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHZhbHVlIH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHtzdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ29udHJvbHM9eyBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZSddIH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0ge3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIlxyXG5cclxubGV0IE1haW5Db2xvcnMgPSBbXHJcbiAgICB7IG5hbWU6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAndHJhbnNwYXJlbnQnIH0sXHJcbiAgICB7IG5hbWU6ICdzZy1kYXJrJywgY29sb3I6ICcjMmEyZjNmJyB9LFxyXG4gICAgeyBuYW1lOiAnc2ctZ3JlZW4nLCBjb2xvcjogJyMyN2UyOWEnIH0sXHJcbiAgICB7IG5hbWU6ICd3aGl0ZScsIGNvbG9yOiAnI2ZmZmZmZicgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5Db2xvcnM7XHJcblxyXG4iLCIvKipcclxuICogRWxpbWluYSBwb3IgY29tcGxldG8gZWwgZWxlbWVudG8gZGUgZXN0aWxvIGN1YW5kbyBubyB0aWVuZSB2YWxvci4gRXN0byBldml0YXLDoSBlc3RpbG9zXHJcbiAqIHN1Y2lvcyBzaW4gdmFsb3IgZW4gZWwgZnJvbnRlbmQuXHJcbiAqXHJcbiAqIEBwYXJhbSBhdHRyaWJ1dGVzXHJcbiAqIEBwYXJhbSBzZXRBdHRyaWJ1dGVzXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCBlbGVtZW50LCB2YWx1ZT0nJykge1xyXG5cclxuICAgIGlmKHZhbHVlID09PSAnJyl7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZSA9IGF0dHJpYnV0ZXMuc3R5bGU7XHJcblxyXG4gICAgICAgIGRlbGV0ZSBzdHlsZVtlbGVtZW50XTtcclxuXHJcbiAgICAgICAgc2V0QXR0cmlidXRlcyh7c3R5bGU6IHN0eWxlfSk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJHQkFDb2xvcihjb2xvcil7XHJcblxyXG4gICAgcmV0dXJuIGByZ2JhKCR7Y29sb3IucmdiLnJ9LCAke2NvbG9yLnJnYi5nfSwgJHtjb2xvci5yZ2IuYn0sICR7Y29sb3IucmdiLmF9KWA7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVBcnJheShhcnIpe1xyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFycjJbaV0gPSBhcnJbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnIyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIpO1xyXG4gICAgfVxyXG5cclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBCdXR0b24sIFNlbGVjdENvbnRyb2wsIEljb25CdXR0b24sIENvbG9yUGFsZXR0ZSB9ID0gd3AuY29tcG9uZW50cztcclxuY29uc3QgeyBNZWRpYVVwbG9hZCB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcblxyXG5pbXBvcnQgeyBzYW5pdGl6ZVN0eWxlIH0gZnJvbSAnLi4vaGVscGVycy91dGlsaXRpZXMnO1xyXG5pbXBvcnQgTWFpbkNvbG9ycyBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0QmFja2dyb3VuZCh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30pe1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyaXphIGVsIGJvdMOzbiBvIGxhIGltYWdlbiBlbiBlbCBzaWRlYmFyIGRlIGVkaWNpw7NuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9wZW5cclxuICAgICAqIEByZXR1cm5zIHtKU1guRWxlbWVudHxKU1guRWxlbWVudFtdfVxyXG4gICAgICovXHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2VCdXR0b25zID0gKG9wZW4pID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZEltYWdlICE9PSAnJyAmJiBhdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRJbWFnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZEltYWdlLnNsaWNlKDQsLTEpfSBhbHQ9XCJcIiBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLXRvb2xiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJlZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgb3BlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U3R5bGUgPSB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIGJhY2tncm91bmRJbWFnZTonJyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiBuZXdTdHlsZSB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAnYmFja2dyb3VuZEltYWdlJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1pbWFnZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IG9wZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZy1idXR0b24gZnVsbCBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWdyZWdhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZy1zdHlsZS1lZGl0LWJhY2tncm91bmQnPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvbG9yIGRlIEZvbmRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxDb2xvclBhbGV0dGVcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnMgPSB7IE1haW5Db2xvcnMgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXthdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoe3N0eWxlOiB7Li4uYXR0cmlidXRlcy5zdHlsZSwgYmFja2dyb3VuZENvbG9yOiBgJHt2YWx1ZX1gfX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ2JhY2tncm91bmRDb2xvcicsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+SW1hZ2VuIGRlIEZvbmRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxNZWRpYVVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJJbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsgbWVkaWEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCAgeyBzdHlsZTogey4uLmF0dHJpYnV0ZXMuc3R5bGUsIGJhY2tncm91bmRJbWFnZTpgdXJsKCR7bWVkaWEudXJsfSlgIH0gfSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsgKHsgb3BlbiB9KSA9PiBiYWNrZ3JvdW5kSW1hZ2VCdXR0b25zKG9wZW4pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUYW1hw7FvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSB9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICcnLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnY292ZXInLCB2YWx1ZTogJ2NvdmVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdjb250YWluJywgdmFsdWU6ICdjb250YWluJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdhdXRvJywgdmFsdWU6ICdhdXRvJyB9LFxyXG4gICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IHN0eWxlOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIGJhY2tncm91bmRTaXplOnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdiYWNrZ3JvdW5kU2l6ZScsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJlcGV0aXJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnJywgdmFsdWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ25vLXJlcGVhdCcsIHZhbHVlOiAnbm8tcmVwZWF0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdyZXBlYXQnLCB2YWx1ZTogJ3JlcGVhdCcgfSxcclxuICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBzdHlsZTogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBiYWNrZ3JvdW5kUmVwZWF0OnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sJ2JhY2tncm91bmRSZXBlYXQnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUG9zaWNpw7NuXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnJywgdmFsdWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2NlbnRlcicsIHZhbHVlOiAnY2VudGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICd0b3AgJywgdmFsdWU6ICd0b3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3JpZ2h0JywgdmFsdWU6ICdyaWdodCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbGVmdCAnLCB2YWx1ZTogJ2xlZnQnIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdjZW50ZXIgdG9wJywgdmFsdWU6ICdjZW50ZXIgdG9wJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdjZW50ZXIgcmlnaHQnLCB2YWx1ZTogJ2NlbnRlciByaWdodCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnY2VudGVyIGJvdHRvbScsIHZhbHVlOiAnY2VudGVyIGJvdHRvbScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnY2VudGVyIGxlZnQnLCB2YWx1ZTogJ2NlbnRlciBsZWZ0JyB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAndG9wIHJpZ2h0JywgdmFsdWU6ICd0b3AgcmlnaHQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3RvcCBsZWZ0JywgdmFsdWU6ICd0b3AgbGVmdCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAndG9wIGNlbnRlcicsIHZhbHVlOiAndG9wIGNlbnRlcicgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2JvdHRvbSByaWdodCcsIHZhbHVlOiAnYm90dG9tIHJpZ2h0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdib3R0b20gbGVmdCcsIHZhbHVlOiAnYm90dG9tIGxlZnQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2JvdHRvbSBjZW50ZXInLCB2YWx1ZTogJ2JvdHRvbSBjZW50ZXInIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdsZWZ0IGNlbnRlcicsIHZhbHVlOiAnbGVmdCBjZW50ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2xlZnQgdG9wJywgdmFsdWU6ICdsZWZ0IHRvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbGVmdCBib3R0b20nLCB2YWx1ZTogJ2xlZnQgYm90dG9tJyB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAncmlnaHQgY2VudGVyJywgdmFsdWU6ICdyaWdodCBjZW50ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3JpZ2h0IHRvcCcsIHZhbHVlOiAncmlnaHQgdG9wJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdyaWdodCBib3R0b20nLCB2YWx1ZTogJ3JpZ2h0IGJvdHRvbScgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgc3R5bGU6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgYmFja2dyb3VuZFBvc2l0aW9uOnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sJ2JhY2tncm91bmRQb3NpdGlvbicsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJGaWphY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRBdHRhY2htZW50IH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJycsIHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdmaXhlZCcsIHZhbHVlOiAnZml4ZWQnIH0sXHJcbiAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgc3R5bGU6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgYmFja2dyb3VuZEF0dGFjaG1lbnQ6dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwnYmFja2dyb3VuZEF0dGFjaG1lbnQnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImNvbnN0IHsgVGV4dENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5pbXBvcnQgeyBzYW5pdGl6ZVN0eWxlIH0gZnJvbSAnLi4vaGVscGVycy91dGlsaXRpZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFNwYWNlRGltZW5zaW9uKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSl7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGUtc3BhY2luZ1wiPkVzcGFjaWFkbzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWNvbnRyb2wgdGl0bGUtc3BhY2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCB0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgYXR0cmlidXRlcy5zdHlsZS5tYXJnaW5Ub3AgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIG1hcmdpblRvcDp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAnbWFyZ2luVG9wJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgYXR0cmlidXRlcy5zdHlsZS5tYXJnaW5SaWdodCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgbWFyZ2luUmlnaHQ6dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ21hcmdpblJpZ2h0JywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IGF0dHJpYnV0ZXMuc3R5bGUubWFyZ2luQm90dG9tIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlIDogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBtYXJnaW5Cb3R0b206dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ21hcmdpbkJvdHRvbScsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgYXR0cmlidXRlcy5zdHlsZS5tYXJnaW5MZWZ0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlIDogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBtYXJnaW5MZWZ0OnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdtYXJnaW5MZWZ0JywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IGF0dHJpYnV0ZXMuc3R5bGUucGFkZGluZ1RvcCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlIDogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBwYWRkaW5nVG9wOnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAncGFkZGluZ1RvcCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IGF0dHJpYnV0ZXMuc3R5bGUucGFkZGluZ1JpZ2h0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIHBhZGRpbmdSaWdodDp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ3BhZGRpbmdSaWdodCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBhdHRyaWJ1dGVzLnN0eWxlLnBhZGRpbmdCb3R0b20gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgcGFkZGluZ0JvdHRvbTp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ3BhZGRpbmdCb3R0b20nLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IGF0dHJpYnV0ZXMuc3R5bGUucGFkZGluZ0xlZnQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgcGFkZGluZ0xlZnQ6dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdwYWRkaW5nTGVmdCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==