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

 //import './blocks/tabs/block';
//import './blocks/posts/posts';
//import './blocks/gallery/gallery';
//import './blocks/container/container';
//import './blocks/hotgraphic/block';
//import './blocks/ganimation/block';









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

    var getCard = function getCard() {
      switch (attributes.type) {
        case 'basic':
          return getBasicCard();
          break;

        case 'image':
          return getImageCard();
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

    var getCard = function getCard() {
      switch (attributes.type) {
        case 'basic':
          return getBasicCard();
          break;

        case 'image':
          return getImageCard();
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
    height: {
      "default": "600px"
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
    InspectorControls = _wp$blockEditor.InspectorControls;
var Component = wp.element.Component;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    RangeControl = _wp$components.RangeControl,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl;

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
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      var blockControls = wp.element.createElement(BlockControls, null, wp.element.createElement(IconButton, {
        onClick: function onClick() {
          return _this.pushNewItem();
        },
        icon: "plus",
        label: "Agregar"
      }));

      if (attributes.items.length == 0) {
        return [blockControls, wp.element.createElement("div", {
          className: "wp-block-sg-ganimation"
        }, wp.element.createElement("div", {
          className: "no-data"
        }, "Haz clic en el bot\xF3n", wp.element.createElement(IconButton, {
          onClick: function onClick() {
            return _this.pushNewItem();
          },
          icon: "plus",
          label: "Agregar"
        }), "para agregar la primera imagen"))];
      }

      var inspectorControls = function inspectorControls() {
        return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
          title: "Graphic Stack",
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
        }), wp.element.createElement(RangeControl, {
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
        })), attributes.items.sort(function (a, b) {
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
        }));
      };

      return [inspectorControls(), blockControls, wp.element.createElement("div", {
        className: "wp-block-sg-ganimation sg-items",
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
          height: attributes.height,
          maxWidth: attributes.maxWidth
        }
      }, attributes.items.map(function (item, index) {
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
    ColorPalette = _wp$components.ColorPalette,
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
      }), wp.element.createElement(ColorPalette, {
        colors: _helpers_colors__WEBPACK_IMPORTED_MODULE_1__["default"],
        value: attributes.filter,
        onChange: function onChange(value) {
          setAttributes({
            filter: value
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
    TabPanel = _wp$components.TabPanel;
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

      var renderContainer = function renderContainer() {
        return attributes.hasContainer ? wp.element.createElement("div", {
          className: "container"
        }, renderRow()) : renderRow();
      };

      var renderRow = function renderRow() {
        return attributes.itsSection ? wp.element.createElement("section", {
          className: "row ".concat(className),
          style: attributes.style
        }, wp.element.createElement(InnerBlocks.Content, null)) : wp.element.createElement("div", {
          className: "row ".concat(className),
          style: attributes.style
        }, wp.element.createElement(InnerBlocks.Content, null));
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
/*! exports provided: sanitizeStyle, getRGBAColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeStyle", function() { return sanitizeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRGBAColor", function() { return getRGBAColor; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY2FyZC9jYXJkLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2NhcmQvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY2FyZC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2NvbHVtbi9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9jb2x1bW4vZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9jb2x1bW4vZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY29sdW1uL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY29sdW1uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FsbGVyeS9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2dhbGxlcnkvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FsbGVyeS9nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2dhbGxlcnkvc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9nYWxsZXJ5L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FuaW1hdGlvbi9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9nYW5pbWF0aW9uL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FuaW1hdGlvbi9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9nYW5pbWF0aW9uL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FuaW1hdGlvbi9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2hvdGdyYXBoaWMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvaG90Z3JhcGhpYy9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2hvdGdyYXBoaWMvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvaG90Z3JhcGhpYy9zYXZlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2hvdGdyYXBoaWMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9wb3N0cy9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Bvc3RzL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Bvc3RzL3Bvc3RzLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Bvc3RzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3Mvcm93L2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Jvdy9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Jvdy9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9yb3cvc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9yb3cvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2NvbXBvbmVudHMvR3JhcGhpY1BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2NvbXBvbmVudHMvUGFyYWdyYXBoLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvY29tcG9uZW50cy9UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvaGVscGVycy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9oZWxwZXJzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9zdHlsZS9FZGl0QmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3N0eWxlL0VkaXRTcGFjZURpbWVuc2lvbi5qcyJdLCJuYW1lcyI6WyJyZWdpc3RlckJsb2NrVHlwZSIsIndwIiwiYmxvY2tzIiwiY29tcG9uZW50cyIsIlRleHRDb250cm9sIiwiSWNvbkJ1dHRvbiIsIlBhbmVsQm9keSIsIlNlbGVjdENvbnRyb2wiLCJDaGVja2JveENvbnRyb2wiLCJDb2xvclBhbGV0dGUiLCJibG9ja0VkaXRvciIsIlJpY2hUZXh0IiwiSW5zcGVjdG9yQ29udHJvbHMiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJ0eXBlIiwiY2FyZEludmVyc2UiLCJ2YWwiLCJzdHlsZSIsInBhcmFncmFwaCIsImltYWdlIiwidXJsIiwiYWx0IiwiYnV0dG9ucyIsImZsb2F0aW5ncyIsImVkaXQiLCJzZXRBdHRyaWJ1dGVzIiwidXBkYXRlQnV0dG9uIiwiYnV0dG9uIiwiY29uY2F0IiwiY2xvbmVBcnJheSIsImZpbHRlciIsIml0ZW1GaWx0ZXIiLCJpbmRleCIsInVwZGF0ZUZsb2F0aW5nIiwicmVtb3ZlRmxvYXRpbmdCdXR0b24iLCJyZW5kZXJGbG9hdGluZ3MiLCJzb3J0IiwiYSIsImIiLCJtYXAiLCJidG4iLCJsYWJlbCIsInZhbHVlIiwiZGlzcGxheUxpbmsiLCJocmVmIiwiZGlzcGxheSIsInJlbmRlckJ1dHRvbnMiLCJyZW1vdmVMaW5rQnV0dG9uIiwiYWRkRmxvYXRpbmdCdXR0b24iLCJidG5saW5rIiwibGVuZ3RoIiwiYWRkTGlua0J1dHRvbiIsImFyciIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJhcnIyIiwiZnJvbSIsImluc3BlY3RvckNvbnRyb2wiLCJNYWluQ29sb3JzIiwiYmFja2dyb3VuZENvbG9yIiwiZ2V0QmFzaWNDYXJkIiwiZ2V0SW1hZ2VDYXJkIiwiY2FyZEltYWdlIiwibWVkaWEiLCJjYXJkQ29udGVudCIsInJlbmRlckNvbnRlbnQiLCJnZXRDYXJkIiwic2F2ZSIsImdldENhcmRBY3Rpb25zIiwiZ2V0RmxvYXRpbmdBY3Rpb25zIiwiaGFzQ29udGFpbmVyIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsIm9mZnNldFNtYWxsIiwib2Zmc2V0TWVkaXVtIiwib2Zmc2V0TGFyZ2UiLCJJbm5lckJsb2NrcyIsIlBhbmVsUm93IiwiVGFiUGFuZWwiLCJDb21wb25lbnQiLCJlbGVtZW50IiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJjb21wb3NlIiwiY2xhc3NlcyIsIkNvbHVtbkVkaXQiLCJhcmd1bWVudHMiLCJjbGllbnRJZCIsInByb3BzIiwic2VsZWN0IiwiZGF0YSIsInBhcmVudEJsb2NrIiwiZ2V0QmxvY2tzQnlDbGllbnRJZCIsImNoaWxkQmxvY2tzIiwiaW5uZXJCbG9ja3MiLCJlbXB0eUJsb2NrIiwiY2xhc3NOYW1lIiwicmVuZGVyVGFiMSIsImhvb2tzIiwiYWRkRmlsdGVyIiwiY29sdW1uQ3VzdG9tQ2xhc3NOYW1lIiwicmVuZGVyVGFiMiIsIkVkaXRCYWNrZ3JvdW5kIiwicmVuZGVyVGFiMyIsIkVkaXRTcGFjZURpbWVuc2lvbiIsInJlbmRlclRhYiIsInRhYk5hbWUiLCJuYW1lIiwidGFiIiwiQmxvY2tMaXN0QmxvY2siLCJSb3dTYXZlIiwiQmxvY2tDb250cm9scyIsIlBsYWluVGV4dCIsIlJhbmdlQ29udHJvbCIsIlNsb3RoR2Vla0dhbGxlcnlFZGl0IiwiY29uc29sZSIsImxvZyIsImdyaWRfY291bnQiLCJpdGVtIiwibW9kZWwiLCJuZXdPYmplY3QiLCJPYmplY3QiLCJhc3NpZ24iLCJpdGVtcyIsImNvbHVtbldpZHRoIiwid2lkdGgiLCJvbkNoYW5nZUV2ZW50IiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsInJlbmRlckl0ZW1zIiwicmVuZGVyRWRpdEl0ZW0iLCJpbnNwZWN0b3JDb250cm9scyIsIl9fIiwiaTE4biIsInNvdXJjZSIsImF0dHJpYnV0ZSIsInNlbGVjdG9yIiwicXVlcnkiLCJTbG90aEdlZWtHYWxsZXJ5U2F2ZSIsInJlbmRlckl0ZW0iLCJpZCIsImhlaWdodCIsIm1heFdpZHRoIiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImdyYXBoaWNVcmwiLCJncmFjcGhpY0FsdCIsImJvdHRvbSIsImxlZnQiLCJibG9ja0NvbnRyb2xzIiwicHVzaE5ld0l0ZW0iLCJwYXJzZUludCIsInVwZGF0ZUl0ZW0iLCJ6SW5kZXgiLCJncmFwaGljQWx0IiwiVGV4dGFyZWFDb250cm9sIiwiYm9keSIsInBvc2l0aW9uIiwidG9wIiwid2l0aFNlbGVjdCIsIkNvbG9yUGlja2VyIiwiYXBpRmV0Y2giLCJhZGRRdWVyeUFyZ3MiLCJDQVRFR09SSUVTX0xJU1RfUVVFUlkiLCJwZXJfcGFnZSIsIlNsb3RoR2Vla1Bvc3RFZGl0Iiwic3RhdGUiLCJjYXRlZ29yaWVzTGlzdCIsImlzU3RpbGxNb3VudGVkIiwiZmV0Y2hSZXF1ZXN0IiwicGF0aCIsInRoZW4iLCJzZXRTdGF0ZSIsInBvc3RzIiwiY29sdW1ucyIsInBvc3RfcGVyX3BhZ2UiLCJjYXRlZ29yeV9zZWxlY3RlZCIsImNhdCIsImFjdGlvbl9wb3N0IiwiZ2V0UkdCQUNvbG9yIiwib3B0aW9uMCIsInBvc3QiLCJ0aXRsZUNsYXNzZXMiLCJpbWFnZV91cmwiLCJfZW1iZWRkZWQiLCJzb3VyY2VfdXJsIiwicmVuZGVyZWQiLCJleGNlcnB0IiwibGluayIsIm9wdGlvbjEiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJvcHRpb24yIiwiZ2V0RW50aXR5UmVjb3JkcyIsImNhdGVnb3JpZXMiLCJfZW1iZWQiLCJrZXl3b3JkcyIsIml0c1NlY3Rpb24iLCJUb2dnbGVDb250cm9sIiwicm93Q3VzdG9tQ2xhc3NOYW1lIiwiUm93RWRpdCIsIkFMTE9XRURfQkxPQ0tTIiwib25TZWxlY3QiLCJyZW5kZXJDb250YWluZXIiLCJyZW5kZXJSb3ciLCJNZWRpYVVwbG9hZCIsIkdyYXBoaWNQaWNrZXIiLCJvcGVuRXZlbnQiLCJvbkNoYW5nZSIsIm9wZW4iLCJnZXRJbWFnZUJ1dHRvbiIsIkFsaWdubWVudFRvb2xiYXIiLCJQYXJhZ3JhcGgiLCJmb250U2l6ZSIsImNvbG9yIiwidGV4dEFsaWduIiwibWFyZ2luIiwicGFkZGluZyIsInVuZGVmaW5lZCIsImFycmF5IiwibmV3VmFsdWUiLCJzcGxpdCIsImpvaW4iLCJwbGFjZWhvbGRlciIsInVwZGF0ZU1QIiwiVGl0bGUiLCJzYW5pdGl6ZVN0eWxlIiwicmdiIiwiciIsImciLCJCdXR0b24iLCJiYWNrZ3JvdW5kSW1hZ2VCdXR0b25zIiwic2xpY2UiLCJuZXdTdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRBdHRhY2htZW50IiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7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Q3ROLGtCQUFVLEVBQVZBLFVBQUQ7QUFBYVkscUJBQWEsRUFBYkE7QUFBYixPQUFELEVBQThCLGVBQTlCLEVBQStDaUIsS0FBL0MsQ0FBYjtBQUNIO0FBTEwsSUFESixDQW5CSixFQTRCSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0kseUJBQUMsV0FBRDtBQUNJLFNBQUssRUFBSzdCLFVBQVUsQ0FBQ0ksS0FBWCxDQUFpQnFPLFdBRC9CO0FBRUksWUFBUSxFQUFHLGtCQUFFNU0sS0FBRixFQUFhO0FBQ3BCakIsbUJBQWEsQ0FBRTtBQUFFUixhQUFLLGtDQUFRSixVQUFVLENBQUNJLEtBQW5CO0FBQTBCcU8scUJBQVcsRUFBQzVNO0FBQXRDO0FBQVAsT0FBRixDQUFiO0FBQ0F5TCw4RUFBYSxDQUFDO0FBQUN0TixrQkFBVSxFQUFWQSxVQUFEO0FBQWFZLHFCQUFhLEVBQWJBO0FBQWIsT0FBRCxFQUE4QixhQUE5QixFQUE2Q2lCLEtBQTdDLENBQWI7QUFDSDtBQUxMLElBREosQ0E1QkosQ0FyQ0osQ0FESixDQUZKLENBREo7QUFtRkgsQyIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0ICcuL2VkaXRvci5zY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuXHJcblxyXG4vL2ltcG9ydCAnLi9ibG9ja3MvdGFicy9ibG9jayc7XHJcbi8vaW1wb3J0ICcuL2Jsb2Nrcy9wb3N0cy9wb3N0cyc7XHJcbi8vaW1wb3J0ICcuL2Jsb2Nrcy9nYWxsZXJ5L2dhbGxlcnknO1xyXG4vL2ltcG9ydCAnLi9ibG9ja3MvY29udGFpbmVyL2NvbnRhaW5lcic7XHJcbi8vaW1wb3J0ICcuL2Jsb2Nrcy9ob3RncmFwaGljL2Jsb2NrJztcclxuLy9pbXBvcnQgJy4vYmxvY2tzL2dhbmltYXRpb24vYmxvY2snO1xyXG5cclxuaW1wb3J0ICcuL2Jsb2Nrcy9yb3cvYmxvY2snO1xyXG5pbXBvcnQgJy4vYmxvY2tzL2NvbHVtbi9ibG9jayc7XHJcblxyXG5cclxuaW1wb3J0ICcuL2Jsb2Nrcy9jYXJkL2NhcmQnO1xyXG5pbXBvcnQgJy4vYmxvY2tzL2dhbGxlcnkvZ2FsbGVyeSc7XHJcbmltcG9ydCAnLi9ibG9ja3MvaG90Z3JhcGhpYy9ibG9jayc7XHJcbmltcG9ydCAnLi9ibG9ja3MvcG9zdHMvcG9zdHMnO1xyXG5pbXBvcnQgJy4vYmxvY2tzL2dhbmltYXRpb24vYmxvY2snO1xyXG5cclxuXHJcbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuY29uc3QgeyBUZXh0Q29udHJvbCwgSWNvbkJ1dHRvbiwgUGFuZWxCb2R5LCBTZWxlY3RDb250cm9sLCBDaGVja2JveENvbnRyb2wsIENvbG9yUGFsZXR0ZSB9ID0gd3AuY29tcG9uZW50cztcclxuY29uc3QgeyBSaWNoVGV4dCwgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuaW1wb3J0ICBUaXRsZSAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UaXRsZSc7XHJcbmltcG9ydCAgUGFyYWdyYXBoICBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhcmFncmFwaCc7XHJcbmltcG9ydCAgR3JhcGhpY1BpY2tlciAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9HcmFwaGljUGlja2VyJztcclxuaW1wb3J0IE1haW5Db2xvcnMgZnJvbSAnLi4vLi4vaGVscGVycy9jb2xvcnMnXHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcclxuXHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSgnc2cvY2FyZCcsIHtcclxuICAgIHRpdGxlOiAnQ2FyZCcsXHJcbiAgICBpY29uOiAnc3Rhci1lbXB0eScsXHJcbiAgICBjYXRlZ29yeTogJ3NnJyxcclxuICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICB0eXBlOntcclxuICAgICAgICAgICAgdHlwZTonc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJ2Jhc2ljJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZEludmVyc2U6e1xyXG4gICAgICAgICAgICB0eXBlOidib29sZWFuJyxcclxuICAgICAgICAgICAgZGVmYXVsdDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGU6e1xyXG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdmFsOidMb3JlbSBJcHN1bScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTp7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJhZ3JhcGg6e1xyXG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdmFsOidMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBjb25zZXF1YXQgZW5pbSB2ZWwgbGlndWxhIHN1c2NpcGl0IHNlbXBlci4gTnVuYyBibGFuZGl0LCBtYWduYSB2aXRhZSBldWlzbW9kIG1vbGVzdGllLCBuaWJoIG5lcXVlIHB1bHZpbmFyIGVyYXQsIGRpY3R1bSBlZ2VzdGFzIG1hZ25hIHVybmEgaWQgYXJjdS4nLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6e31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1hZ2U6e1xyXG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdXJsOicnLFxyXG4gICAgICAgICAgICAgICAgYWx0OicnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJ1dHRvbnM6e1xyXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmxvYXRpbmdzOntcclxuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcclxuICAgICAgICAgICAgZGVmYXVsdDogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0eWxlOntcclxuICAgICAgICAgICAgdHlwZTonb2JqZWN0JyxcclxuICAgICAgICAgICAgZGVmYXVsdDp7fVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZWRpdCgge2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9ICkge1xyXG5cclxuICAgICAgICBjb25zdCB1cGRhdGVCdXR0b24gPSAoYnV0dG9uKSA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXS5jb25jYXQoY2xvbmVBcnJheShhdHRyaWJ1dGVzLmJ1dHRvbnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gYnV0dG9uLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgfSkpLCBbYnV0dG9uXSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlRmxvYXRpbmcgPSAoYnV0dG9uKSA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICBmbG9hdGluZ3M6IFtdLmNvbmNhdChjbG9uZUFycmF5KGF0dHJpYnV0ZXMuZmxvYXRpbmdzLmZpbHRlcihmdW5jdGlvbiAoaXRlbUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtRmlsdGVyLmluZGV4ICE9IGJ1dHRvbi5pbmRleDtcclxuICAgICAgICAgICAgICAgIH0pKSwgW2J1dHRvbl0pXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZUZsb2F0aW5nQnV0dG9uID0gKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICBmbG9hdGluZ3M6IGF0dHJpYnV0ZXMuZmxvYXRpbmdzLmZpbHRlcihmdW5jdGlvbiAoaXRlbUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtRmlsdGVyLmluZGV4ICE9IHZhbDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyRmxvYXRpbmdzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5mbG9hdGluZ3Muc29ydChmdW5jdGlvbihhICwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgICAgICB9KS5tYXAoIGJ0biA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1mbG9hdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbi1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGJ0bi5sYWJlbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHVwZGF0ZUZsb2F0aW5nKCB7Li4uYnRuLCBsYWJlbDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUZXh0byBkZWwgYm90w7NuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkbWluLWxpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBidG4uZGlzcGxheUxpbmsgPT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGbG9hdGluZyh7Li4uYnRuLCBkaXNwbGF5TGluazogdmFsfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHJlbW92ZUZsb2F0aW5nQnV0dG9uKGJ0bi5pbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctYnV0dG9uLWhyZWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB2YWx1ZSA9PiB1cGRhdGVGbG9hdGluZyggey4uLmJ0biwgaHJlZjogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYnRuLmhyZWYgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7ZGlzcGxheTogYnRuLmRpc3BsYXlMaW5rfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0gKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyQnV0dG9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuYnV0dG9ucy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgICAgIH0pLm1hcCggYnRuID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbi1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGJ0bi5sYWJlbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHVwZGF0ZUJ1dHRvbiggey4uLmJ0biwgbGFiZWw6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVGV4dG8gZGVsIGJvdMOzbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZSA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJhZG1pbi1saW5rc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gYnRuLmRpc3BsYXlMaW5rID09ICdub25lJyA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQnV0dG9uKHsuLi5idG4sIGRpc3BsYXlMaW5rOiB2YWx9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gcmVtb3ZlTGlua0J1dHRvbihidG4uaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbi1ocmVmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4gdXBkYXRlQnV0dG9uKCB7Li4uYnRuLCBocmVmOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBidG4uaHJlZiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHtkaXNwbGF5OiBidG4uZGlzcGxheUxpbmt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRGbG9hdGluZ0J1dHRvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGJ0bmxpbmsgPSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogYXR0cmlidXRlcy5mbG9hdGluZ3MubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdBZGQgbGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgaHJlZjonIycsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TGluazogJ25vbmUnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nczogW10uY29uY2F0KGNsb25lQXJyYXkoYXR0cmlidXRlcy5mbG9hdGluZ3MpLCBbYnRubGlua10pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlTGlua0J1dHRvbiA9ICh2YWwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uczogYXR0cmlidXRlcy5idXR0b25zLmZpbHRlcihmdW5jdGlvbiAoaXRlbUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtRmlsdGVyLmluZGV4ICE9IHZhbDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkTGlua0J1dHRvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGJ0bmxpbmsgPSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogYXR0cmlidXRlcy5idXR0b25zLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnQWRkIGxhYmVsJyxcclxuICAgICAgICAgICAgICAgIGhyZWY6JyMnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUxpbms6ICdub25lJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXS5jb25jYXQoY2xvbmVBcnJheShhdHRyaWJ1dGVzLmJ1dHRvbnMpLCBbYnRubGlua10pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2xvbmVBcnJheSA9IChhcnIpID0+IHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycjJbaV0gPSBhcnJbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyMjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGluc3BlY3RvckNvbnRyb2wgPSAoKSA9PntcclxuXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPSdEaXNlw7FvJyBpbml0aWFsT3Blbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0NhcmQgc3R5bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMudHlwZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7IHNldEF0dHJpYnV0ZXMoIHsgdHlwZTogdmFsdWUgfSApIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnYmFzaWMnLCBsYWJlbDogJ0Jhc2ljIENhcmQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ2ltYWdlJywgbGFiZWw6ICdJbWFnZSBDYXJkJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSW52ZXJzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsgYXR0cmlidXRlcy5jYXJkSW52ZXJzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyggeyBjYXJkSW52ZXJzZTogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGFsZXR0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzID0geyBNYWluQ29sb3JzIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIGJhY2tncm91bmRDb2xvcjpgJHt2YWx1ZX1gIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldEJhc2ljQ2FyZCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17YXR0cmlidXRlcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiB2YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZS52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyBhdHRyaWJ1dGVzLnRpdGxlLnN0eWxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdyZWdhIHVuIHTDrXR1bG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0QXR0cmlidXRlcyh7IHBhcmFncmFwaDogdmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMucGFyYWdyYXBoLnZhbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IGF0dHJpYnV0ZXMucGFyYWdyYXBoLnN0eWxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdyZWdhIGFxdcOtIGVsIGN1ZXJwbyBkZSBsYSB0YXJqZXRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtY2FyZC1hY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXMtYWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gYWRkTGlua0J1dHRvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmJ1dHRvbnMuc29ydChmdW5jdGlvbihhICwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLm1hcCggYnRuID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZy1idXR0b24tbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYnRuLmxhYmVsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHVwZGF0ZUJ1dHRvbiggey4uLmJ0biwgbGFiZWw6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1RleHRvIGRlbCBib3TDs24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkbWluLWxpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBidG4uZGlzcGxheUxpbmsgPT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQnV0dG9uKHsuLi5idG4sIGRpc3BsYXlMaW5rOiB2YWx9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHJlbW92ZUxpbmtCdXR0b24oYnRuLmluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZy1idXR0b24taHJlZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB2YWx1ZSA9PiB1cGRhdGVCdXR0b24oIHsuLi5idG4sIGhyZWY6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBidG4uaHJlZiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7ZGlzcGxheTogYnRuLmRpc3BsYXlMaW5rfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldEltYWdlQ2FyZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2FyZEltYWdlID0gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyYXBoaWNQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBtZWRpYSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGltYWdlOiBtZWRpYSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2F0dHJpYnV0ZXMuaW1hZ2UudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2F0dHJpYnV0ZXMuaW1hZ2UuYWx0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZy1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtZmxvYXRpbmctYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwbHVzLWFsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IGFkZEZsb2F0aW5nQnV0dG9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJGbG9hdGluZ3MoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZENvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogdmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZS52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IGF0dHJpYnV0ZXMudGl0bGUuc3R5bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFncmVnYSB1biB0w610dWxvXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0QXR0cmlidXRlcyh7IHBhcmFncmFwaDogdmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5wYXJhZ3JhcGgudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyBhdHRyaWJ1dGVzLnBhcmFncmFwaC5zdHlsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdyZWdhIGFxdcOtIGVsIGN1ZXJwbyBkZSBsYSB0YXJqZXRhXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihhdHRyaWJ1dGVzLmNhcmRJbnZlcnNlKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZENvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkQ29udGVudFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2F0dHJpYnV0ZXMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgcmVuZGVyQ29udGVudCgpIH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtY2FyZC1hY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXMtYWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gYWRkTGlua0J1dHRvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJCdXR0b25zKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldENhcmQgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGF0dHJpYnV0ZXMudHlwZSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdiYXNpYyc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEJhc2ljQ2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEltYWdlQ2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFtcclxuICAgICAgICAgICAgICAgIGluc3BlY3RvckNvbnRyb2woKSxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2stc2ctY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgZ2V0Q2FyZCgpIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNhdmUoe2F0dHJpYnV0ZXN9KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGdldENhcmRBY3Rpb25zID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYoYXR0cmlidXRlcy5idXR0b25zLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5idXR0b25zLm1hcChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2J1dHRvbi5ocmVmfT57YnV0dG9uLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnZXRGbG9hdGluZ0FjdGlvbnMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihhdHRyaWJ1dGVzLmZsb2F0aW5ncy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5mbG9hdGluZ3MubWFwKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eyBgYnRuLWZsb2F0aW5nIGhhbGZ3YXktZmFiIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBuby1yYWRpdXMgYXV0by13aWR0aCAkeyBhdHRyaWJ1dGVzLmNhcmRJbnZlcnNlID8gJ3RvcCcgOiAnJ31gIH0gaHJlZj17YnV0dG9uLmhyZWZ9PntidXR0b24ubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnZXRCYXNpY0NhcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXthdHRyaWJ1dGVzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHQuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZT0naDMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQtdGl0bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXthdHRyaWJ1dGVzLnRpdGxlLnN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthdHRyaWJ1dGVzLnBhcmFncmFwaC5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHQuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5wYXJhZ3JhcGgudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7IGdldENhcmRBY3Rpb25zKCkgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldEltYWdlQ2FyZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2FyZEltYWdlID0gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F0dHJpYnV0ZXMuaW1hZ2UudXJsfSBhbHQ9e2F0dHJpYnV0ZXMuaW1hZ2UuYWx0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldEZsb2F0aW5nQWN0aW9ucygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRDb250ZW50ID0gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmljaFRleHQuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lPSdoMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXJkLXRpdGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2F0dHJpYnV0ZXMudGl0bGUuc3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthdHRyaWJ1dGVzLnBhcmFncmFwaC5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMucGFyYWdyYXBoLnZhbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGF0dHJpYnV0ZXMuY2FyZEludmVyc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkQ29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRDb250ZW50XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXthdHRyaWJ1dGVzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNvbnRlbnQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENhcmRBY3Rpb25zKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnZXRDYXJkID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChhdHRyaWJ1dGVzLnR5cGUpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYmFzaWMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRCYXNpY0NhcmQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRJbWFnZUNhcmQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICBnZXRDYXJkKClcclxuICAgICAgICApXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xyXG5cclxuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcclxuXHJcbmltcG9ydCAnLi9lZGl0b3Iuc2NzcydcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSggJ3NnL2NvbHVtbicsIHtcclxuICAgIHRpdGxlOiAnQ29sdW1uJyxcclxuICAgIGljb246ICdzdGFyLWVtcHR5JyxcclxuICAgIGNhdGVnb3J5OiAnc2cnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIGhhc0NvbnRhaW5lcjp7XHJcbiAgICAgICAgICAgIHR5cGU6J2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzbWFsbDp7XHJcbiAgICAgICAgICAgIHR5cGU6J3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6J3MxMidcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lZGl1bTp7XHJcbiAgICAgICAgICAgIHR5cGU6J3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6JydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhcmdlOntcclxuICAgICAgICAgICAgdHlwZTonc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDonJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2Zmc2V0U21hbGw6e1xyXG4gICAgICAgICAgICB0eXBlOidzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OicnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvZmZzZXRNZWRpdW06e1xyXG4gICAgICAgICAgICB0eXBlOidzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OicnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvZmZzZXRMYXJnZTp7XHJcbiAgICAgICAgICAgIHR5cGU6J3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6JydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0eWxlOntcclxuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHt9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0LFxyXG5cclxuICAgIHNhdmVcclxufSApOyIsImltcG9ydCBFZGl0QmFja2dyb3VuZCBmcm9tIFwiLi4vLi4vc3R5bGUvRWRpdEJhY2tncm91bmRcIjtcclxuaW1wb3J0IEVkaXRTcGFjZURpbWVuc2lvbiBmcm9tIFwiLi4vLi4vc3R5bGUvRWRpdFNwYWNlRGltZW5zaW9uXCI7XHJcblxyXG5jb25zdCB7IElubmVyQmxvY2tzLCBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgU2VsZWN0Q29udHJvbCwgUGFuZWxCb2R5LCBQYW5lbFJvdywgVGFiUGFuZWwgfSA9IHdwLmNvbXBvbmVudHM7XHJcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3QgeyBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9ID0gd3AuY29tcG9zZTtcclxuXHJcbmxldCBjbGFzc2VzID0gXCJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbHVtbkVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IGNsaWVudElkIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0IH0gPSB3cC5kYXRhO1xyXG5cclxuICAgICAgICBjb25zdCBwYXJlbnRCbG9jayA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2Nrc0J5Q2xpZW50SWQoIGNsaWVudElkIClbIDAgXTtcclxuICAgICAgICBjb25zdCBjaGlsZEJsb2NrcyA9IHBhcmVudEJsb2NrLmlubmVyQmxvY2tzO1xyXG5cclxuICAgICAgICBjb25zdCBlbXB0eUJsb2NrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGNoaWxkQmxvY2tzLmxlbmd0aCA9PSAwKXtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1lbXB0eS1pbm5lci1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWJsb2NrLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGFzaGljb25zIGRhc2hpY29ucy1zY3JlZW5vcHRpb25zXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21pZW56YSBhIGFybWFyIHR1IGNvbnRlbmlkbyBjb24gdW5vIG8gbcOhcyBibG9xdWVzIGRlIGxhIGxpYnJlcsOtYSBwcmVzaW9uYW5kbyBlbiBlbCBib3TDs24gbcOhcy5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qge2NsYXNzTmFtZSwgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjbGFzc2VzID0gYXR0cmlidXRlcy5zbWFsbDtcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFiMSA9ICAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5zbWFsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3MxJywgdmFsdWU6ICdzMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3MyJywgdmFsdWU6ICdzMicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3MzJywgdmFsdWU6ICdzMycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3M0JywgdmFsdWU6ICdzNCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3M1JywgdmFsdWU6ICdzNScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3M2JywgdmFsdWU6ICdzNicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3M3JywgdmFsdWU6ICdzNycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3M4JywgdmFsdWU6ICdzOCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3M5JywgdmFsdWU6ICdzOScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3MxMCcsIHZhbHVlOiAnczEwJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczExJywgdmFsdWU6ICdzMTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdzMTInLCB2YWx1ZTogJ3MxMicgfSxcclxuICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc21hbGw6IHZhbHVlIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnc2cvY29sdW1uJywgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaXVtIH1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnLScsIHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTEnLCB2YWx1ZTogJ20xJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTInLCB2YWx1ZTogJ20yJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTMnLCB2YWx1ZTogJ20zJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTQnLCB2YWx1ZTogJ200JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTUnLCB2YWx1ZTogJ201JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTYnLCB2YWx1ZTogJ202JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTcnLCB2YWx1ZTogJ203JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTgnLCB2YWx1ZTogJ204JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTknLCB2YWx1ZTogJ205JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTEwJywgdmFsdWU6ICdtMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtMTEnLCB2YWx1ZTogJ20xMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ20xMicsIHZhbHVlOiAnbTEyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBtZWRpdW06IHZhbHVlIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnc2cvY29sdW1uJywgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5sYXJnZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJy0nLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2wxJywgdmFsdWU6ICdsMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2wyJywgdmFsdWU6ICdsMicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2wzJywgdmFsdWU6ICdsMycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2w0JywgdmFsdWU6ICdsNCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2w1JywgdmFsdWU6ICdsNScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2w2JywgdmFsdWU6ICdsNicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2w3JywgdmFsdWU6ICdsNycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2w4JywgdmFsdWU6ICdsOCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2w5JywgdmFsdWU6ICdsOScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2wxMCcsIHZhbHVlOiAnbDEwJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDExJywgdmFsdWU6ICdsMTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdsMTInLCB2YWx1ZTogJ2wxMicgfSxcclxuICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgbGFyZ2U6IHZhbHVlIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnc2cvY29sdW1uJywgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT2Zmc2V0IHNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMub2Zmc2V0U21hbGwgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICctJywgdmFsdWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczEnLCB2YWx1ZTogJ29mZnNldC1zMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zMicsIHZhbHVlOiAnb2Zmc2V0LXMyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXMzJywgdmFsdWU6ICdvZmZzZXQtczMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczQnLCB2YWx1ZTogJ29mZnNldC1zNCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zNScsIHZhbHVlOiAnb2Zmc2V0LXM1JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXM2JywgdmFsdWU6ICdvZmZzZXQtczYnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczcnLCB2YWx1ZTogJ29mZnNldC1zNycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zOCcsIHZhbHVlOiAnb2Zmc2V0LXM4JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXM5JywgdmFsdWU6ICdvZmZzZXQtczknIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczEwJywgdmFsdWU6ICdvZmZzZXQtczEwJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXMxMScsIHZhbHVlOiAnb2Zmc2V0LXMxMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zMTInLCB2YWx1ZTogJ29mZnNldC1zMTInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IG9mZnNldFNtYWxsOiB2YWx1ZSB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdwLmhvb2tzLmFkZEZpbHRlcignZWRpdG9yLkJsb2NrTGlzdEJsb2NrJywgJ3NnL2NvbHVtbicsIGNvbHVtbkN1c3RvbUNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9mZnNldCBtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5vZmZzZXRNZWRpdW0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICctJywgdmFsdWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTEnLCB2YWx1ZTogJ29mZnNldC1tMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tMicsIHZhbHVlOiAnb2Zmc2V0LW0yJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW0zJywgdmFsdWU6ICdvZmZzZXQtbTMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTQnLCB2YWx1ZTogJ29mZnNldC1tNCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tNScsIHZhbHVlOiAnb2Zmc2V0LW01JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW02JywgdmFsdWU6ICdvZmZzZXQtbTYnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTcnLCB2YWx1ZTogJ29mZnNldC1tNycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tOCcsIHZhbHVlOiAnb2Zmc2V0LW04JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW05JywgdmFsdWU6ICdvZmZzZXQtbTknIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTEwJywgdmFsdWU6ICdvZmZzZXQtbTEwJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW0xMScsIHZhbHVlOiAnb2Zmc2V0LW0xMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tMTInLCB2YWx1ZTogJ29mZnNldC1tMTInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IG9mZnNldE1lZGl1bTogdmFsdWUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPZmZzZXQgbGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5vZmZzZXRMYXJnZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJy0nLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sMScsIHZhbHVlOiAnb2Zmc2V0LWwxJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWwyJywgdmFsdWU6ICdvZmZzZXQtbDInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDMnLCB2YWx1ZTogJ29mZnNldC1sMycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sNCcsIHZhbHVlOiAnb2Zmc2V0LWw0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWw1JywgdmFsdWU6ICdvZmZzZXQtbDUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDYnLCB2YWx1ZTogJ29mZnNldC1sNicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sNycsIHZhbHVlOiAnb2Zmc2V0LWw3JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWw4JywgdmFsdWU6ICdvZmZzZXQtbDgnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDknLCB2YWx1ZTogJ29mZnNldC1sOScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sMTAnLCB2YWx1ZTogJ29mZnNldC1sMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDExJywgdmFsdWU6ICdvZmZzZXQtbDExJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWwxMicsIHZhbHVlOiAnb2Zmc2V0LWwxMicgfSxcclxuICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgb2Zmc2V0TGFyZ2U6IHZhbHVlIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnc2cvY29sdW1uJywgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJUYWIyID0gIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsgRWRpdEJhY2tncm91bmQodGhpcy5wcm9wcykgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclRhYjMgPSAgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgeyBFZGl0U3BhY2VEaW1lbnNpb24odGhpcy5wcm9wcykgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclRhYiA9ICh0YWJOYW1lKSA9PntcclxuICAgICAgICAgICAgc3dpdGNoICh0YWJOYW1lKXtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YWIxJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFiMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YWIyJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFiMjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YWIzJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFiMztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT1cIkFqdXN0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInNnLXRhYi1wYW5lbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmUtdGFiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJzPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndGFiMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0dyaWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFiLW9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0YWIyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQkcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFiLXR3bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0YWIzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGltJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RhYi10aHJlZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCB0YWIgKSA9PiByZW5kZXJUYWIodGFiLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbFJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPixcclxuICAgICAgICAgICAgICAgIGVtcHR5QmxvY2soKSxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWNvbnRlbnRcIiBzdHlsZT17IGF0dHJpYnV0ZXMuc3R5bGUgfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5uZXJCbG9ja3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXBwZW5kZXI9eyAoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBlbmRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWVkaXRvci10ZXh0LWJsb2NrLWFwcGVuZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1ibG9jay1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGFzaGljb25zIGRhc2hpY29ucy1zY3JlZW5vcHRpb25zXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbHVtblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJCbG9ja3MuQnV0dG9uQmxvY2tBcHBlbmRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IGNvbHVtbkN1c3RvbUNsYXNzTmFtZSA9IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KChCbG9ja0xpc3RCbG9jaykgPT4ge1xyXG4gICAgcmV0dXJuIHByb3BzID0+IHtcclxuICAgICAgICBpZihwcm9wcy5uYW1lID09IFwic2cvY29sdW1uXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxCbG9ja0xpc3RCbG9jayB7Li4ucHJvcHN9IGNsYXNzTmFtZT17YGNvbCAke3Byb3BzLmF0dHJpYnV0ZXMuc21hbGx9ICR7cHJvcHMuYXR0cmlidXRlcy5tZWRpdW19ICR7cHJvcHMuYXR0cmlidXRlcy5sYXJnZX0gJHtwcm9wcy5hdHRyaWJ1dGVzLm9mZnNldFNtYWxsfSAke3Byb3BzLmF0dHJpYnV0ZXMub2Zmc2V0TWVkaXVtfSAke3Byb3BzLmF0dHJpYnV0ZXMub2Zmc2V0TGFyZ2V9YH0vPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxCbG9ja0xpc3RCbG9jayB7Li4ucHJvcHN9Lz5cclxuICAgIH1cclxufSwgJ2NvbHVtbkN1c3RvbUNsYXNzTmFtZScpO1xyXG5cclxud3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnc2cvY29sdW1uJywgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lKTtcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBJbm5lckJsb2Nrc30gPSB3cC5ibG9ja0VkaXRvcjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3dTYXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7Y2xhc3NOYW1lLCBhdHRyaWJ1dGVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbCAke2NsYXNzTmFtZX0gJHthdHRyaWJ1dGVzLnNtYWxsfSAke2F0dHJpYnV0ZXMubWVkaXVtfSAke2F0dHJpYnV0ZXMubGFyZ2V9ICR7YXR0cmlidXRlcy5vZmZzZXRTbWFsbH0gJHthdHRyaWJ1dGVzLm9mZnNldE1lZGl1bX0gJHthdHRyaWJ1dGVzLm9mZnNldExhcmdlfWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17IGF0dHJpYnV0ZXMuc3R5bGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgQmxvY2tDb250cm9scyxJbnNwZWN0b3JDb250cm9scyxQbGFpblRleHQgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBJY29uQnV0dG9uLCBQYW5lbEJvZHksIFJhbmdlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmltcG9ydCBHcmFwaGljUGlja2VyICBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dyYXBoaWNQaWNrZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdGhHZWVrR2FsbGVyeUVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJncmlkX2NvdW50OiBcIit0aGlzLnByb3BzLmF0dHJpYnV0ZXMuZ3JpZF9jb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VFdmVudChpdGVtLCBtb2RlbCl7XHJcbiAgICAgICAgdmFyIG5ld09iamVjdCA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIG1vZGVsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXS5jb25jYXQodGhpcy5jbG9uZUFycmF5KHRoaXMucHJvcHMuYXR0cmlidXRlcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW1GaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtRmlsdGVyLmluZGV4ICE9IGl0ZW0uaW5kZXg7XHJcbiAgICAgICAgICAgIH0pKSwgW25ld09iamVjdF0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNsb25lQXJyYXkoYXJyKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIyW2ldID0gYXJyW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhcnIyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckVkaXRJdGVtKGl0ZW0pe1xyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW5XaWR0aCA9ICggMTAwL3RoaXMucHJvcHMuYXR0cmlidXRlcy5ncmlkX2NvdW50ICk7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtXCIgc3R5bGU9eyB7IHdpZHRoOmAke2NvbHVtbldpZHRofSVgIH0gfT5cclxuICAgICAgICAgICAgICAgIDxHcmFwaGljUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBtZWRpYSA9PiB0aGlzLm9uQ2hhbmdlRXZlbnQoaXRlbSwgeyBpbWFnZVVybDogbWVkaWEudXJsIH0pIH1cclxuICAgICAgICAgICAgICAgICAgICB1cmw9e2l0ZW0uaW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLmltYWdlQWx0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxQbGFpblRleHRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICggdmFsdWUgKSA9PiB0aGlzLm9uQ2hhbmdlRXZlbnQoaXRlbSwge3VybDogdmFsdWV9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGl0ZW0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJJdGVtcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYoYXR0cmlidXRlcy5pdGVtcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLml0ZW1zLnNvcnQoZnVuY3Rpb24oYSAsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9KS5tYXAoKGl0ZW0pID0+IHRoaXMucmVuZGVyRWRpdEl0ZW0oaXRlbSkpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPHNwYW4+Tm8gaGF5IGl0ZW0gcGFyYSBtb3N0cmFyPC9zcGFuPilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5zcGVjdG9yQ29udHJvbHMgPSAoXHJcbiAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9XCJBanVzdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk7Dum1lcm8gZGUgY29sdW1uYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuZ3JpZF9jb3VudCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgZ3JpZF9jb3VudDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEyIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICA8QmxvY2tDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtdLmNvbmNhdCh0aGlzLmNsb25lQXJyYXkoYXR0cmlidXRlcy5pdGVtcyksIFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGF0dHJpYnV0ZXMuaXRlbXMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlQWx0OlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZ3JlZ2FyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Jsb2NrQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zcGVjdG9yQ29udHJvbHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctZ2FsbGVyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctZ2FsbGVyeS1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcclxuXHJcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCAnc2cvZ2FsbGVyeScsIHtcclxuICAgIHRpdGxlOiAnR2FsbGVyeScsXHJcbiAgICBpY29uOiAnc3Rhci1lbXB0eScsXHJcbiAgICBjYXRlZ29yeTogJ3NnJyxcclxuICAgIGF0dHJpYnV0ZXM6e1xyXG4gICAgICAgIGdyaWRfY291bnQ6IHtcclxuICAgICAgICAgICAgc291cmNlOiAnYXR0cmlidXRlJyxcclxuICAgICAgICAgICAgYXR0cmlidXRlOiAnZGF0YS1jb3VudCcsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnNnLWdhbGxlcnktaW5uZXInLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtczoge1xyXG4gICAgICAgICAgICBzb3VyY2U6ICdxdWVyeScsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogJy5zZy1pdGVtJyxcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiAnYXR0cmlidXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6ICdkYXRhLWluZGV4J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVybDp7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiAnYXR0cmlidXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6ICdocmVmJyxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5zZy1pdGVtLWxpbmsnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ3NyYycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuc2ctaXRlbS1ncmFwaGljJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlQWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiAnYXR0cmlidXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6ICdhbHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLnNnLWl0ZW0tZ3JhcGhpYydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZWRpdCxcclxuXHJcbiAgICBzYXZlXHJcblxyXG59KTsiLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RoR2Vla0dhbGxlcnlTYXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJdGVtKGl0ZW0sIGluZGV4KXtcclxuXHJcbiAgICAgICAgY29uc3QgY29sdW1uV2lkdGggPSAoIDEwMC90aGlzLnByb3BzLmF0dHJpYnV0ZXMuZ3JpZF9jb3VudCApO1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbVwiIGRhdGEtaW5kZXg9e2luZGV4fSBzdHlsZT17IHsgd2lkdGg6YCR7Y29sdW1uV2lkdGh9JWAgfSB9ID5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNnLWl0ZW0tbGlua1wiIGhyZWY9e2l0ZW0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzZy1pdGVtLWdyYXBoaWNcIiBzcmM9e2l0ZW0uaW1hZ2VVcmx9IGFsdD17aXRlbS5pbWFnZUFsdH0vPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2F0dHJpYnV0ZXN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1nYWxsZXJ5IGNvbCBzMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctZ2FsbGVyeS1pbm5lclwiIGRhdGEtY291bnQ9e2F0dHJpYnV0ZXMuZ3JpZF9jb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHRoaXMucmVuZGVySXRlbShpdGVtLCBpbmRleCkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XHJcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XHJcblxyXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSggJ3NnL2dhbmltYXRpb24nLCB7XHJcbiAgICB0aXRsZTogJ0dyYXBoaWMgU3RhY2snLFxyXG4gICAgaWNvbjogJ3N0YXItZW1wdHknLFxyXG4gICAgY2F0ZWdvcnk6ICdzZycsXHJcbiAgICBhdHRyaWJ1dGVzOntcclxuICAgICAgICBpZDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDpbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVpZ2h0OntcclxuICAgICAgICAgICAgZGVmYXVsdDpcIjYwMHB4XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1heFdpZHRoOntcclxuICAgICAgICAgICAgZGVmYXVsdDpcIjU1MHB4XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuaW1hdGlvbjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHVyYXRpb246e1xyXG4gICAgICAgICAgICBkZWZhdWx0OlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGF5OntcclxuICAgICAgICAgICAgZGVmYXVsdDpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgZWRpdCxcclxuXHJcbiAgICBzYXZlXHJcblxyXG59KTsiLCJpbXBvcnQgR3JhcGhpY1BpY2tlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HcmFwaGljUGlja2VyXCI7XHJcblxyXG5jb25zdCB7IEJsb2NrQ29udHJvbHMsIEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgSWNvbkJ1dHRvbiwgUmFuZ2VDb250cm9sLCBQYW5lbEJvZHksIFRleHRDb250cm9sIH0gPXdwLmNvbXBvbmVudHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90aEdlZWtHYWxsZXJ5RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaE5ld0l0ZW0oKXtcclxuICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICBpbmRleDogYXR0cmlidXRlcy5pdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGlkOlwiXCIsXHJcbiAgICAgICAgICAgIGdyYXBoaWNVcmw6XCJcIixcclxuICAgICAgICAgICAgZ3JhY3BoaWNBbHQ6XCJcIixcclxuICAgICAgICAgICAgYW5pbWF0aW9uOlwiXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOntcclxuICAgICAgICAgICAgICAgIHdpZHRoOlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOlwiMFwiLFxyXG4gICAgICAgICAgICAgICAgbGVmdDpcIjBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXS5jb25jYXQodGhpcy5jbG9uZUFycmF5KGF0dHJpYnV0ZXMuaXRlbXMpLCBbaXRlbV0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSXRlbShpdGVtKXtcclxuICAgICAgICBjb25zdCB7IHNldEF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLmNvbmNhdCh0aGlzLmNsb25lQXJyYXkodGhpcy5wcm9wcy5hdHRyaWJ1dGVzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gaXRlbS5pbmRleDtcclxuICAgICAgICAgICAgfSkpLCBbaXRlbV0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmVBcnJheShhcnIpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFycjJbaV0gPSBhcnJbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycjI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgYmxvY2tDb250cm9scyA9IChcclxuICAgICAgICAgICAgPEJsb2NrQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnB1c2hOZXdJdGVtKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWdyZWdhclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Jsb2NrQ29udHJvbHM+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYoYXR0cmlidXRlcy5pdGVtcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFtcclxuICAgICAgICAgICAgICAgIGJsb2NrQ29udHJvbHMsXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwLWJsb2NrLXNnLWdhbmltYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSGF6IGNsaWMgZW4gZWwgYm90w7NuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnB1c2hOZXdJdGVtKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwbHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWdyZWdhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmEgYWdyZWdhciBsYSBwcmltZXJhIGltYWdlblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT1cIkdyYXBoaWMgU3RhY2tcIiBpbml0aWFsT3Blbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFsdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChhdHRyaWJ1dGVzLmhlaWdodCsnJykgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKHtoZWlnaHQ6IGAke3ZhbHVlfXB4YCB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFuY2hvIG3DoXhpbW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChhdHRyaWJ1dGVzLm1heFdpZHRoKycnKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMoe21heFdpZHRoOiBgJHt2YWx1ZX1weGAgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFuY2xhamVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7aWQ6IHZhbHVlIH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuaXRlbXMuc29ydChmdW5jdGlvbihhICwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5tYXAoICggaXRlbSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9e2BJdGVtICR7aXRlbS5pbmRleCsxfWB9IGluaXRpYWxPcGVuPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQW5jbGFqZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIGlkOiB2YWx1ZSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbmltYWNpw7NuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBpdGVtLmFuaW1hdGlvbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIGFuaW1hdGlvbjogdmFsdWUgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChpdGVtLnN0eWxlLndpZHRoKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIHN0eWxlOiB7Li4uaXRlbS5zdHlsZSwgd2lkdGg6YCR7dmFsdWV9JWB9IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChpdGVtLnN0eWxlLmJvdHRvbSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBzdHlsZTogey4uLml0ZW0uc3R5bGUsIGJvdHRvbTpgJHt2YWx1ZX0lYH0gfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChpdGVtLnN0eWxlLmxlZnQpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgc3R5bGU6IHsuLi5pdGVtLnN0eWxlLCBsZWZ0OmAke3ZhbHVlfSVgfSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiei1pbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS5zdHlsZS56SW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBzdHlsZTogey4uLml0ZW0uc3R5bGUsIHpJbmRleDogcGFyc2VJbnQodmFsdWUpfSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChbXHJcbiAgICAgICAgICAgIGluc3BlY3RvckNvbnRyb2xzKCksXHJcbiAgICAgICAgICAgIGJsb2NrQ29udHJvbHMsXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2stc2ctZ2FuaW1hdGlvbiBzZy1pdGVtc1wiIHN0eWxlPXt7aGVpZ2h0OmF0dHJpYnV0ZXMuaGVpZ2h0fX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5pdGVtcy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB9KS5tYXAoIChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW1cIiBkYXRhLWluZGV4PXtpbmRleH0gc3R5bGU9e2l0ZW0uc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtLWdyYXBoaWMtaW5uZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoaWNQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctaXRlbS1ncmFwaGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBtZWRpYSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBncmFwaGljVXJsOiBtZWRpYS51cmwsIGdyYXBoaWNBbHQ6IG1lZGlhLmFsdCB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17aXRlbS5ncmFwaGljVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uZ3JhcGhpY0FsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90aEdlZWtHYWxsZXJ5U2F2ZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2F0dHJpYnV0ZXN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD17YXR0cmlidXRlcy5pZH0gY2xhc3NOYW1lPVwid3AtYmxvY2stc2ctZ2FuaW1hdGlvbiBzZy1pdGVtc1wiIHN0eWxlPXt7aGVpZ2h0OiBhdHRyaWJ1dGVzLmhlaWdodCwgbWF4V2lkdGg6IGF0dHJpYnV0ZXMubWF4V2lkdGh9fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLml0ZW1zLm1hcCgoaXRlbSxpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cInNnLWl0ZW1cIiBzdHlsZT17aXRlbS5zdHlsZX0gZGF0YS1hbmltYXRpb249e2l0ZW0uYW5pbWF0aW9ufSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmdyYXBoaWNVcmx9IGFsdD17aXRlbS5ncmFwaGljQWx0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XHJcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XHJcblxyXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSggJ3NnL2hvdGdyYXBoaWMnLCB7XHJcbiAgICB0aXRsZTogJ0hvdEdyYXBoaWMnLFxyXG4gICAgaWNvbjogJ3N0YXItZW1wdHknLFxyXG4gICAgY2F0ZWdvcnk6ICdzZycsXHJcbiAgICBhdHRyaWJ1dGVzOntcclxuICAgICAgICBoZWlnaHQ6e1xyXG4gICAgICAgICAgICB0eXBlOidzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnNDAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtczoge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxyXG4gICAgICAgICAgICBkZWZhdWx0OltdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0LFxyXG5cclxuICAgIHNhdmVcclxuXHJcbn0pOyIsImltcG9ydCBHcmFwaGljUGlja2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyYXBoaWNQaWNrZXJcIjtcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgQmxvY2tDb250cm9scyxJbnNwZWN0b3JDb250cm9scyAgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7IEljb25CdXR0b24sUGFuZWxCb2R5LFRleHRDb250cm9sLFRleHRhcmVhQ29udHJvbCxSYW5nZUNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90aEdlZWtHYWxsZXJ5RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaE5ld0l0ZW0oKXtcclxuICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICBpbmRleDogYXR0cmlidXRlcy5pdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIHRpdGxlOicnLFxyXG4gICAgICAgICAgICBncmFwaGljVXJsOicnLFxyXG4gICAgICAgICAgICBncmFwaGljQWx0OicnLFxyXG4gICAgICAgICAgICBib2R5OicnLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246J2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICczMCUnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXS5jb25jYXQodGhpcy5jbG9uZUFycmF5KGF0dHJpYnV0ZXMuaXRlbXMpLCBbaXRlbV0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSXRlbShpdGVtKXtcclxuICAgICAgICBjb25zdCB7IHNldEF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLmNvbmNhdCh0aGlzLmNsb25lQXJyYXkodGhpcy5wcm9wcy5hdHRyaWJ1dGVzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gaXRlbS5pbmRleDtcclxuICAgICAgICAgICAgfSkpLCBbaXRlbV0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmVBcnJheShhcnIpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFycjJbaV0gPSBhcnJbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycjI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZihhdHRyaWJ1dGVzLml0ZW1zLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5wdXNoTmV3SXRlbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9XCJIb3RncmFwaGljXCIgaW5pdGlhbE9wZW49e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbHRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFyc2VJbnQoYXR0cmlidXRlcy5oZWlnaHQrJycpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7aGVpZ2h0OiBgJHt2YWx1ZX1weGAgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuaXRlbXMuc29ydChmdW5jdGlvbihhICwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5tYXAoICggaXRlbSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9e2BJdGVtICR7aXRlbS5pbmRleCsxfWB9IGluaXRpYWxPcGVuPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVMOtdHVsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS50aXRsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIHRpdGxlOiB2YWx1ZSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ3VlcnBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkVudGVyIHNvbWUgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS5ib2R5IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgYm9keTogdmFsdWUgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChpdGVtLnN0eWxlLndpZHRoKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIHN0eWxlOiB7Li4uaXRlbS5zdHlsZSwgd2lkdGg6YCR7dmFsdWV9JWB9IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChpdGVtLnN0eWxlLnRvcCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBzdHlsZTogey4uLml0ZW0uc3R5bGUsIHRvcDpgJHt2YWx1ZX0lYH0gfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChpdGVtLnN0eWxlLmxlZnQpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgc3R5bGU6IHsuLi5pdGVtLnN0eWxlLCBsZWZ0OmAke3ZhbHVlfSVgfSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDEgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3JDb250cm9scygpLFxyXG4gICAgICAgICAgICAgICAgPEJsb2NrQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHRoaXMucHVzaE5ld0l0ZW0oKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwbHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZ3JlZ2FyXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9CbG9ja0NvbnRyb2xzPixcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2stc2ctaG90Z3JhcGhpYyBzZy1pdGVtc1wiIHN0eWxlPXt7aGVpZ2h0OmF0dHJpYnV0ZXMuaGVpZ2h0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLml0ZW1zLnNvcnQoZnVuY3Rpb24oYSAsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkubWFwKCAoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbVwiIGRhdGEtaW5kZXg9e2luZGV4fSBzdHlsZT17aXRlbS5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtLWdyYXBoaWMtaW5uZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaGljUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZy1pdGVtLWdyYXBoaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBtZWRpYSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBncmFwaGljVXJsOiBtZWRpYS51cmwsIGdyYXBoaWNBbHQ6IG1lZGlhLmFsdCB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2l0ZW0uZ3JhcGhpY1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5ncmFwaGljQWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdGhHZWVrR2FsbGVyeVNhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge2F0dHJpYnV0ZXN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtc1wiIHN0eWxlPXt7aGVpZ2h0OiBhdHRyaWJ1dGVzLmhlaWdodH19PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuaXRlbXMubWFwKGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNnLWl0ZW0gbW9kYWwtdHJpZ2dlclwiIHN0eWxlPXtpdGVtLnN0eWxlfSBocmVmPXtgI2hnJHtpdGVtLmluZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5ncmFwaGljVXJsfSBhbHQ9e2l0ZW0uZ3JhcGhpY0FsdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bHNlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtgaGcke2l0ZW0uaW5kZXh9YH0gY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50IHNnLW1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctbW9kYWwtY29udGVudC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntpdGVtLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uYm9keX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctbW9kYWwtY29udGVudC1ncmFwaGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uZ3JhcGhpY1VybH0gYWx0PXtpdGVtLmdyYXBoaWNBbHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJcclxuXHJcbmNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcclxuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IFBhbmVsQm9keSxSYW5nZUNvbnRyb2wsVGV4dENvbnRyb2wsU2VsZWN0Q29udHJvbCxDb2xvclBhbGV0dGUsQ29sb3JQaWNrZXIgfSA9d3AuY29tcG9uZW50cztcclxuY29uc3QgIGFwaUZldGNoICA9IHdwLmFwaUZldGNoO1xyXG5jb25zdCB7IGFkZFF1ZXJ5QXJncyB9ID0gd3AudXJsO1xyXG5cclxuaW1wb3J0IHsgZ2V0UkdCQUNvbG9yIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlsaXRpZXMnO1xyXG5pbXBvcnQgTWFpbkNvbG9ycyBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBDQVRFR09SSUVTX0xJU1RfUVVFUlkgPSB7XHJcbiAgICBwZXJfcGFnZTogLTEsXHJcbn07XHJcblxyXG5jbGFzcyBTbG90aEdlZWtQb3N0RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXNMaXN0OiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaXNTdGlsbE1vdW50ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmV0Y2hSZXF1ZXN0ID0gYXBpRmV0Y2goIHtcclxuICAgICAgICAgICAgcGF0aDogYWRkUXVlcnlBcmdzKCBgL3dwL3YyL2NhdGVnb3JpZXNgLCBDQVRFR09SSUVTX0xJU1RfUVVFUlkgKSxcclxuICAgICAgICB9IClcclxuICAgICAgICAudGhlbiggKCBjYXRlZ29yaWVzTGlzdCApID0+IHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmlzU3RpbGxNb3VudGVkICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBjYXRlZ29yaWVzTGlzdCB9ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgICAgICAuY2F0Y2goICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmlzU3RpbGxNb3VudGVkICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBjYXRlZ29yaWVzTGlzdDogW10gfSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaXNTdGlsbE1vdW50ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7cG9zdHMsIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGNsYXNzTmFtZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgY2F0ZWdvcmllc0xpc3QgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmICghcG9zdHMpe1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TG9hZGluZy4uLi48L3NwYW4+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIHBvc3RzLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzcGFuPk5vIGhheSBwb3N0cyBwYXJhIG1vc3RyYXIuPC9zcGFuPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGluc3BlY3RvckNvbnRyb2xzID0gKFxyXG4gICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPVwiQWp1c3Rlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOw7ptZXJvIGRlIGNvbHVtbmFzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmNvbHVtbnMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNvbHVtbnM6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDEgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMiB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiwr9DdWFudG9zIHBvc3Q/XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnBvc3RfcGVyX3BhZ2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBwb3N0X3Blcl9wYWdlOiB2YWx1ZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgOSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWx0byBkZSBsYSBpbWFnZW4gKHB4KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5oZWlnaHQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGhlaWdodDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yw61hXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmNhdGVnb3J5X3NlbGVjdGVkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXSA9IGNhdGVnb3JpZXNMaXN0Lm1hcCggKGNhdCkgPT4gKHsgbGFiZWw6IGNhdC5uYW1lLCB2YWx1ZTogY2F0LmlkIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhdGVnb3J5X3NlbGVjdGVkOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQm90w7NuIGRlIGFjY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuYWN0aW9uX3Bvc3QgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGFjdGlvbl9wb3N0OiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFc3RpbG8gZGVsIGl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMudHlwZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnQ2FyZCcsIHZhbHVlOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnTW9kZXJuJywgdmFsdWU6IDEgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdDbGFzaWMnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gc2V0QXR0cmlidXRlcyggeyB0eXBlOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbG9yUGFsZXR0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMgPSB7IE1haW5Db2xvcnMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuZmlsdGVyIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBmaWx0ZXIgOiB2YWx1ZSB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbG9yUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXsgYXR0cmlidXRlcy5maWx0ZXIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgZmlsdGVyIDogZ2V0UkdCQUNvbG9yKHZhbHVlKSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbjAgPSAocG9zdCwgY29sdW1uV2lkdGgsIGhlaWdodCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlQ2xhc3NlcyA9ICAnc2ctaXRlbS10aXRsZSc7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZV91cmwgPSAnJ1xyXG5cclxuICAgICAgICAgICAgaWYoIXBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ10pe1xyXG4gICAgICAgICAgICAgICAgdGl0bGVDbGFzc2VzID0gJ3NnLWl0ZW0tdGl0bGUgbm8taW1hZ2UnO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGltYWdlX3VybCA9IHBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ11bMF0uc291cmNlX3VybDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNnLWl0ZW0gXCIgc3R5bGU9eyB7IHdpZHRoOmAke2NvbHVtbldpZHRofSVgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiIHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZV91cmx9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cG9zdC50aXRsZS5yZW5kZXJlZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwb3N0LmV4Y2VycHQucmVuZGVyZWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXR0cmlidXRlcy5hY3Rpb25fcG9zdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uMSA9IChwb3N0LCBjb2x1bW5XaWR0aCwgaGVpZ2h0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW1hZ2VfdXJsID0gcG9zdC5fZW1iZWRkZWRbJ3dwOmZlYXR1cmVkbWVkaWEnXSA/IHBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ11bMF0uc291cmNlX3VybCA6ICcnO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNnLWl0ZW1cIiBzdHlsZT17IHsgd2lkdGg6YCR7Y29sdW1uV2lkdGh9JWAgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbS1jb250ZW50XCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZV91cmx9KWAsIGhlaWdodDogaGVpZ2h0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbS1maWx0ZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogYXR0cmlidXRlcy5maWx0ZXJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNnLWl0ZW0tYWN0aW9uXCIgaHJlZj17cG9zdC5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRyaWJ1dGVzLmFjdGlvbl9wb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uMiA9IChwb3N0LCBjb2x1bW5XaWR0aCwgaGVpZ2h0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZUNsYXNzZXMgPSAgJ3NnLWl0ZW0tdGl0bGUnO1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VfdXJsID0gJydcclxuXHJcbiAgICAgICAgICAgIGlmKCFwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddKXtcclxuICAgICAgICAgICAgICAgIHRpdGxlQ2xhc3NlcyA9ICdzZy1pdGVtLXRpdGxlIG5vLWltYWdlJztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpbWFnZV91cmwgPSBwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddWzBdLnNvdXJjZV91cmw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzZy1pdGVtXCIgc3R5bGU9eyB7IHdpZHRoOmAke2NvbHVtbldpZHRofSVgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW0tZ3JhcGhpY1wiIHN0eWxlPXsgeyBoZWlnaHQ6IGhlaWdodCB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VfdXJsfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGl0bGVDbGFzc2VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57cG9zdC50aXRsZS5yZW5kZXJlZH08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2ctaXRlbS1hY3Rpb25cIiBocmVmPXtwb3N0Lmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2F0dHJpYnV0ZXMuYWN0aW9uX3Bvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW5XaWR0aCA9ICggMTAwIC8gYXR0cmlidXRlcy5jb2x1bW5zICk7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gYXR0cmlidXRlcy5oZWlnaHQrXCJweFwiO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0+XHJcbiAgICAgICAgICAgICAgICB7aW5zcGVjdG9yQ29udHJvbHN9XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgc2ctaXRlbXMgb3B0aW9uJHthdHRyaWJ1dGVzLnR5cGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0cy5tYXAocG9zdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICggcGFyc2VJbnQoYXR0cmlidXRlcy50eXBlKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24wKHBvc3QsIGNvbHVtbldpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24xKHBvc3QsIGNvbHVtbldpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24yKHBvc3QsIGNvbHVtbldpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uMChwb3N0LCBjb2x1bW5XaWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlbGVjdCggKHNlbGVjdCwgcHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCB7cG9zdF9wZXJfcGFnZSwgY2F0ZWdvcnlfc2VsZWN0ZWR9ID0gcHJvcHMuYXR0cmlidXRlcztcclxuICAgIGNvbnN0IHsgZ2V0RW50aXR5UmVjb3JkcyB9ID0gc2VsZWN0KCAnY29yZScgKTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgICAgIHBlcl9wYWdlOiBwb3N0X3Blcl9wYWdlLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3J5X3NlbGVjdGVkLFxyXG4gICAgICAgIF9lbWJlZDogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwb3N0czogZ2V0RW50aXR5UmVjb3JkcygncG9zdFR5cGUnLCAncG9zdCcsIHF1ZXJ5KVxyXG4gICAgfTtcclxuXHJcbn0pKFNsb3RoR2Vla1Bvc3RFZGl0KTtcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XHJcblxyXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSggJ3NnL3Bvc3RzJywge1xyXG4gICAgdGl0bGU6IFwiw5psdGltYXMgZW50cmFkYXNcIixcclxuICAgIGljb246ICdzdGFyLWVtcHR5JyxcclxuICAgIGNhdGVnb3J5OiAnc2cnLFxyXG4gICAga2V5d29yZHM6IFtcclxuICAgICAgICBfXyggJ2xvYWQnICksXHJcbiAgICAgICAgX18oICdMb2FkIFBvc3QnICksXHJcbiAgICAgICAgX18oICdndXRlbi1sb2FkLXBvc3QnICksXHJcbiAgICBdLFxyXG4gICAgYXR0cmlidXRlczp7XHJcbiAgICAgICAgdHlwZToge1xyXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uczp7XHJcbiAgICAgICAgICAgIHR5cGU6XCJudW1iZXJcIixcclxuICAgICAgICAgICAgZGVmYXVsdDogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zdF9wZXJfcGFnZToge1xyXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiA2XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWlnaHQ6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgZGVmYXVsdDogMjAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXRlZ29yeV9zZWxlY3RlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3Rpb25fcG9zdDp7XHJcbiAgICAgICAgICAgIHR5cGU6XCJzdHJpbmdcIixcclxuICAgICAgICAgICAgZGVmYXVsdDpcIlZlciBtw6FzLi4uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbHRlcjp7XHJcbiAgICAgICAgICAgIHR5cGU6XCJzdHJpbmdcIixcclxuICAgICAgICAgICAgZGVmYXVsdDpcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0LFxyXG5cclxuICAgIHNhdmUoKXtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxufSk7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XHJcblxyXG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnO1xyXG5cclxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCAnc2cvcm93Jywge1xyXG4gICAgdGl0bGU6ICdSb3cnLFxyXG4gICAgaWNvbjogJ3N0YXItZW1wdHknLFxyXG4gICAgY2F0ZWdvcnk6ICdzZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgaXRzU2VjdGlvbjp7XHJcbiAgICAgICAgICAgIHR5cGU6J2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYXNDb250YWluZXI6e1xyXG4gICAgICAgICAgICB0eXBlOidib29sZWFuJyxcclxuICAgICAgICAgICAgZGVmYXVsdDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3R5bGU6e1xyXG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICAgICAgZGVmYXVsdDoge31cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVkaXQsXHJcblxyXG4gICAgc2F2ZVxyXG59ICk7IiwiY29uc3QgeyBJbm5lckJsb2NrcywgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7IFBhbmVsQm9keSwgUGFuZWxSb3csIFRvZ2dsZUNvbnRyb2wsIFRhYlBhbmVsIH0gPSB3cC5jb21wb25lbnRzO1xyXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9ID0gd3AuY29tcG9zZTtcclxuXHJcbmltcG9ydCBFZGl0QmFja2dyb3VuZCBmcm9tIFwiLi4vLi4vc3R5bGUvRWRpdEJhY2tncm91bmRcIjtcclxuaW1wb3J0IEVkaXRTcGFjZURpbWVuc2lvbiBmcm9tIFwiLi4vLi4vc3R5bGUvRWRpdFNwYWNlRGltZW5zaW9uXCI7XHJcblxyXG5jb25zdCByb3dDdXN0b21DbGFzc05hbWUgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCgoQmxvY2tMaXN0QmxvY2spID0+IHtcclxuICAgIHJldHVybiBwcm9wcyA9PiB7XHJcbiAgICAgICAgaWYocHJvcHMubmFtZSA9PSBcInNnL3Jvd1wiKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxCbG9ja0xpc3RCbG9jayB7IC4uLnByb3BzIH0gY2xhc3NOYW1lPXsgJ3JvdycgfSAvPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxCbG9ja0xpc3RCbG9jayB7IC4uLnByb3BzIH0gLz5cclxuICAgIH1cclxufSwgJ3Jvd0N1c3RvbUNsYXNzTmFtZScpO1xyXG5cclxud3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnc2cvcm93Jywgcm93Q3VzdG9tQ2xhc3NOYW1lKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvd0VkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBBTExPV0VEX0JMT0NLUyA9IFsgJ3NnL2NvbHVtbiddO1xyXG5cclxuICAgICAgICBjb25zdCB7IGNsaWVudElkLCBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0IH0gPSB3cC5kYXRhO1xyXG5cclxuICAgICAgICBjb25zdCBwYXJlbnRCbG9jayA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2Nrc0J5Q2xpZW50SWQoIGNsaWVudElkIClbIDAgXTtcclxuICAgICAgICBjb25zdCBjaGlsZEJsb2NrcyA9IHBhcmVudEJsb2NrLmlubmVyQmxvY2tzO1xyXG5cclxuICAgICAgICBjb25zdCBlbXB0eUJsb2NrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGNoaWxkQmxvY2tzLmxlbmd0aCA9PSAwKXtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWVtcHR5LWlubmVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWJsb2NrLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLXNjcmVlbm9wdGlvbnNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFncmVnYSB1bmEgbyBtw6FzIGNvbHVtbmFzIHByZXNpb25hbmRvIGVsIGJvdMOzbiBkZSBhYmFqbyBjb24gZWwgc8OtbWJvbG8gZGUgbcOhcy4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9uU2VsZWN0ID0gKCB0YWJOYW1lICkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCAnU2VsZWN0aW5nIHRhYicsIHRhYk5hbWUgKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJUYWIxID0gIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBY3RpdmFyIHNlY2Npw7NuXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWxwPXsgYXR0cmlidXRlcy5pdHNTZWN0aW9uID8gJ1NlY2Npw7NuLicgOiAnU29sbyBmaWxhLicgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLml0c1NlY3Rpb24gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGl0c1NlY3Rpb246IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRvZ2dsZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFjdGl2YXIgY29udGVuZWRvcj9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlbHA9eyBhdHRyaWJ1dGVzLmhhc0NvbnRhaW5lciA/ICdDb250ZW5lZG9yLicgOiAnU29sbyBmaWxhLicgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmhhc0NvbnRhaW5lciB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoIHsgaGFzQ29udGFpbmVyOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclRhYjIgPSAgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgeyBFZGl0QmFja2dyb3VuZCh0aGlzLnByb3BzKSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFiMyA9ICAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7IEVkaXRTcGFjZURpbWVuc2lvbih0aGlzLnByb3BzKSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFiID0gKHRhYk5hbWUpID0+e1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRhYk5hbWUpe1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYjEnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYjInOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYjMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlclRhYjE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPVwiQWp1c3Rlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwic2ctdGFiLXBhbmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZS10YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsgb25TZWxlY3QgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0YWIxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnR2VuZXJhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0YWItb25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RhYjInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCRycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0YWItdHdvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RhYjMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEaW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFiLXRocmVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHRhYiApID0+IHJlbmRlclRhYih0YWIubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmVsUm93PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPixcclxuICAgICAgICAgICAgICAgIGVtcHR5QmxvY2soKSxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWNvbnRhaW5lclwiIHN0eWxlPXsgYXR0cmlidXRlcy5zdHlsZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbm5lckJsb2Nrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJBcHBlbmRlcj17ICgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcGVuZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLXRleHQtYmxvY2stYXBwZW5kZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWJsb2NrLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLXNjcmVlbm9wdGlvbnNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lckJsb2Nrcy5CdXR0b25CbG9ja0FwcGVuZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IElubmVyQmxvY2tzfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvd1NhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtjbGFzc05hbWUsIGF0dHJpYnV0ZXN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5oYXNDb250YWluZXIgP1xyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJSb3coKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOlxyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclJvdygpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLml0c1NlY3Rpb24gP1xyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YHJvdyAke2NsYXNzTmFtZX1gfSBzdHlsZT17IGF0dHJpYnV0ZXMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICkgOlxyXG5cclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdyAke2NsYXNzTmFtZX1gfSBzdHlsZT17IGF0dHJpYnV0ZXMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICggcmVuZGVyQ29udGFpbmVyKCkgKTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBNZWRpYVVwbG9hZCB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgSWNvbkJ1dHRvbiB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaWNQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2VCdXR0b24ob3BlbkV2ZW50LCB1cmwsIGFsdCwgb25DaGFuZ2UpIHtcclxuICAgICAgICBpZih1cmwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmFwaGljLXBpY2tlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyB1cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy10b29sYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IG9wZW5FdmVudCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IChtZWRpYSkgPT4gb25DaGFuZ2UoJycpICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXBoaWMtcGlja2VyLW5vLWltYWdlXCIgID5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgb3BlbkV2ZW50IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImZvcm1hdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWdyZWdhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7dXJsLCBhbHQsIG9uQ2hhbmdlfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZWRpYVVwbG9hZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2VudGVyLWFsaWduXCJcclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsgKG1lZGlhKSA9PiBvbkNoYW5nZShtZWRpYSkgfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgIHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gdGhpcy5nZXRJbWFnZUJ1dHRvbihvcGVuLCB1cmwsIGFsdCwgb25DaGFuZ2UpIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJjb25zdCB7Q29tcG9uZW50fSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHtJbnNwZWN0b3JDb250cm9scywgUmljaFRleHQsIEJsb2NrQ29udHJvbHMsIEFsaWdubWVudFRvb2xiYXJ9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHtQYW5lbEJvZHksIFJhbmdlQ29udHJvbCwgQ29sb3JQYWxldHRlLCBUZXh0Q29udHJvbH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaW1wb3J0IE1haW5Db2xvcnMgZnJvbSAnLi4vaGVscGVycy9jb2xvcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYWdyYXBoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbDogJycsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDAgMCAwJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDAgMCAwJyxcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZSwgc3R5bGV9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsOiB2YWx1ZX0pO1xyXG5cclxuICAgICAgICBpZiAoc3R5bGUubWFyZ2luICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdHlsZTogc3R5bGV9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTVAoYXJyYXksIHZhbHVlLCBpbmRleCkge1xyXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGFycmF5LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgbmV3VmFsdWVbaW5kZXhdID0gYCR7dmFsdWV9YDtcclxuICAgICAgICByZXR1cm4gbmV3VmFsdWUuam9pbignICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge29uQ2hhbmdlLCB2YWx1ZSwgcGxhY2Vob2xkZXJ9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3Qge3N0eWxlfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgPEJsb2NrQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFsaWdubWVudFRvb2xiYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLnRleHRBbGlnbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0eWxlOiB7Li4uc3R5bGUsIHRleHRBbGlnbjogdmFsdWV9fSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9CbG9ja0NvbnRyb2xzPixcclxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPSdQw6FycmFmbycgaW5pdGlhbE9wZW49e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUYW1hw7FvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXJzZUludChzdHlsZS5mb250U2l6ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGU6IHsuLi5zdHlsZSwgZm9udFNpemU6IGAke3ZhbHVlfXB4YH19LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGUtdGV4dC1jb2xvclwiPkNvbG9yIGRlIHRleHRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0LWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQYWxldHRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzID0geyBNYWluQ29sb3JzIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUuY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdHlsZTogey4uLnN0eWxlLCBjb2xvcjogYCR7dmFsdWV9YH19LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlLXNwYWNpbmdcIj5Fc3BhY2lhZG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1jb250cm9sIHRpdGxlLXNwYWNpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLm1hcmdpbi5zcGxpdCgnICcpWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHRoaXMudXBkYXRlTVAoc3R5bGUubWFyZ2luLCB2YWx1ZSwgMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUubWFyZ2luLnNwbGl0KCcgJylbMV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogdGhpcy51cGRhdGVNUChzdHlsZS5tYXJnaW4sIHZhbHVlLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUubWFyZ2luLnNwbGl0KCcgJylbMl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogdGhpcy51cGRhdGVNUChzdHlsZS5tYXJnaW4sIHZhbHVlLCAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLm1hcmdpbi5zcGxpdCgnICcpWzNdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHRoaXMudXBkYXRlTVAoc3R5bGUubWFyZ2luLCB2YWx1ZSwgMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLnBhZGRpbmcuc3BsaXQoJyAnKVswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB0aGlzLnVwZGF0ZU1QKHN0eWxlLnBhZGRpbmcsIHZhbHVlLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLnBhZGRpbmcuc3BsaXQoJyAnKVsxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB0aGlzLnVwZGF0ZU1QKHN0eWxlLnBhZGRpbmcsIHZhbHVlLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbMl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLnBhZGRpbmcuc3BsaXQoJyAnKVszXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB0aGlzLnVwZGF0ZU1QKHN0eWxlLnBhZGRpbmcsIHZhbHVlLCAzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz4sXHJcbiAgICAgICAgICAgICAgICA8UmljaFRleHRcclxuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lPVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWw6IHZhbHVlfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ29udHJvbHM9e1snYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ119XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyBwbGFjZWhvbGRlciB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxufSIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzLCBSaWNoVGV4dCwgQmxvY2tDb250cm9scywgQWxpZ25tZW50VG9vbGJhciB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgUGFuZWxCb2R5LCBSYW5nZUNvbnRyb2wsIENvbG9yUGFsZXR0ZSwgVGV4dENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5pbXBvcnQgTWFpbkNvbG9ycyBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWw6ICcnLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOidsZWZ0JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgMCAwIDAnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzAgMCAwIDAnLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZSwgc3R5bGV9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsOiB2YWx1ZX0pO1xyXG5cclxuICAgICAgICBpZiAoc3R5bGUubWFyZ2luICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdHlsZTogc3R5bGV9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTVAoYXJyYXksIHZhbHVlLCBpbmRleCl7XHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gYXJyYXkuc3BsaXQoJyAnKTtcclxuICAgICAgICBuZXdWYWx1ZVtpbmRleF0gPSBgJHt2YWx1ZX1gO1xyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZS5qb2luKCcgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgdHlwZSwgY2xhc3NOYW1lLCBvbkNoYW5nZSwgdmFsdWUsIHBsYWNlaG9sZGVyIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCAgeyBzdHlsZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuKFtcclxuICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbGlnbm1lbnRUb29sYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS50ZXh0QWxpZ259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIHRleHRBbGlnbjp2YWx1ZSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9CbG9ja0NvbnRyb2xzPixcclxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPSdUw610dWxvJyBpbml0aWFsT3Blbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRhbWHDsW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChzdHlsZS5mb250U2l6ZSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBmb250U2l6ZTpgJHt2YWx1ZX1weGAgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZS10ZXh0LWNvbG9yXCI+Q29sb3IgZGUgdGV4dG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXRleHQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclBhbGV0dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMgPSB7IE1haW5Db2xvcnMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgc3R5bGUuY29sb3IgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIGNvbG9yOmAke3ZhbHVlfWAgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZS1zcGFjaW5nXCI+RXNwYWNpYWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24tY29udHJvbCB0aXRsZS1zcGFjaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBzdHlsZS5tYXJnaW4uc3BsaXQoJyAnKVswXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIG1hcmdpbjp0aGlzLnVwZGF0ZU1QKHN0eWxlLm1hcmdpbiwgdmFsdWUsIDApIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgc3R5bGUubWFyZ2luLnNwbGl0KCcgJylbMV0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBtYXJnaW46dGhpcy51cGRhdGVNUChzdHlsZS5tYXJnaW4sIHZhbHVlLCAxKSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBzdHlsZS5tYXJnaW4uc3BsaXQoJyAnKVsyXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIG1hcmdpbjp0aGlzLnVwZGF0ZU1QKHN0eWxlLm1hcmdpbiwgdmFsdWUsIDIpIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBzdHlsZS5tYXJnaW4uc3BsaXQoJyAnKVszXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIG1hcmdpbjp0aGlzLnVwZGF0ZU1QKHN0eWxlLm1hcmdpbiwgdmFsdWUsIDMpIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHN0eWxlLnBhZGRpbmcuc3BsaXQoJyAnKVswXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgcGFkZGluZzp0aGlzLnVwZGF0ZU1QKHN0eWxlLnBhZGRpbmcsIHZhbHVlLCAwKSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHN0eWxlLnBhZGRpbmcuc3BsaXQoJyAnKVsxXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgcGFkZGluZzp0aGlzLnVwZGF0ZU1QKHN0eWxlLnBhZGRpbmcsIHZhbHVlLCAxKSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbMl0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIHBhZGRpbmc6dGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMikgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHN0eWxlLnBhZGRpbmcuc3BsaXQoJyAnKVszXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgcGFkZGluZzp0aGlzLnVwZGF0ZU1QKHN0eWxlLnBhZGRpbmcsIHZhbHVlLCAzKSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz4sXHJcbiAgICAgICAgICAgICAgICA8UmljaFRleHRcclxuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgdmFsOnZhbHVlIH0sICAoKSA9PiBvbkNoYW5nZSggdGhpcy5zdGF0ZSApICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHZhbHVlIH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHtzdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ29udHJvbHM9eyBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZSddIH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0ge3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIlxyXG5cclxubGV0IE1haW5Db2xvcnMgPSBbXHJcbiAgICB7IG5hbWU6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAndHJhbnNwYXJlbnQnIH0sXHJcbiAgICB7IG5hbWU6ICdzZy1kYXJrJywgY29sb3I6ICcjMmEyZjNmJyB9LFxyXG4gICAgeyBuYW1lOiAnc2ctZ3JlZW4nLCBjb2xvcjogJyMyN2UyOWEnIH0sXHJcbiAgICB7IG5hbWU6ICd3aGl0ZScsIGNvbG9yOiAnI2ZmZmZmZicgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5Db2xvcnM7XHJcblxyXG4iLCIvKipcclxuICogRWxpbWluYSBwb3IgY29tcGxldG8gZWwgZWxlbWVudG8gZGUgZXN0aWxvIGN1YW5kbyBubyB0aWVuZSB2YWxvci4gRXN0byBldml0YXLDoSBlc3RpbG9zXHJcbiAqIHN1Y2lvcyBzaW4gdmFsb3IgZW4gZWwgZnJvbnRlbmQuXHJcbiAqXHJcbiAqIEBwYXJhbSBhdHRyaWJ1dGVzXHJcbiAqIEBwYXJhbSBzZXRBdHRyaWJ1dGVzXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCBlbGVtZW50LCB2YWx1ZT0nJykge1xyXG5cclxuICAgIGlmKHZhbHVlID09PSAnJyl7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZSA9IGF0dHJpYnV0ZXMuc3R5bGU7XHJcblxyXG4gICAgICAgIGRlbGV0ZSBzdHlsZVtlbGVtZW50XTtcclxuXHJcbiAgICAgICAgc2V0QXR0cmlidXRlcyh7c3R5bGU6IHN0eWxlfSk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJHQkFDb2xvcihjb2xvcil7XHJcblxyXG4gICAgcmV0dXJuIGByZ2JhKCR7Y29sb3IucmdiLnJ9LCAke2NvbG9yLnJnYi5nfSwgJHtjb2xvci5yZ2IuYn0sICR7Y29sb3IucmdiLmF9KWA7XHJcblxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IEJ1dHRvbiwgU2VsZWN0Q29udHJvbCwgSWNvbkJ1dHRvbiwgQ29sb3JQYWxldHRlIH0gPSB3cC5jb21wb25lbnRzO1xyXG5jb25zdCB7IE1lZGlhVXBsb2FkIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuXHJcbmltcG9ydCB7IHNhbml0aXplU3R5bGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxpdGllcyc7XHJcbmltcG9ydCBNYWluQ29sb3JzIGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRCYWNrZ3JvdW5kKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSl7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXJpemEgZWwgYm90w7NuIG8gbGEgaW1hZ2VuIGVuIGVsIHNpZGViYXIgZGUgZWRpY2nDs25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gb3BlblxyXG4gICAgICogQHJldHVybnMge0pTWC5FbGVtZW50fEpTWC5FbGVtZW50W119XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZUJ1dHRvbnMgPSAob3BlbikgPT4ge1xyXG5cclxuICAgICAgICBpZiAoYXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgIT09ICcnICYmIGF0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZEltYWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2Uuc2xpY2UoNCwtMSl9IGFsdD1cIlwiIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctdG9vbGJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTdHlsZSA9IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgYmFja2dyb3VuZEltYWdlOicnIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IG5ld1N0eWxlIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdiYWNrZ3JvdW5kSW1hZ2UnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLWltYWdlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgb3BlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbiBmdWxsIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZ3JlZ2FyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NnLXN0eWxlLWVkaXQtYmFja2dyb3VuZCc+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Q29sb3IgZGUgRm9uZG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPENvbG9yUGFsZXR0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycyA9IHsgTWFpbkNvbG9ycyB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2F0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7c3R5bGU6IHsuLi5hdHRyaWJ1dGVzLnN0eWxlLCBiYWNrZ3JvdW5kQ29sb3I6IGAke3ZhbHVlfWB9fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAnYmFja2dyb3VuZENvbG9yJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5JbWFnZW4gZGUgRm9uZG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPE1lZGlhVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIkltYWdlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRJbWFnZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyBtZWRpYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoICB7IHN0eWxlOiB7Li4uYXR0cmlidXRlcy5zdHlsZSwgYmFja2dyb3VuZEltYWdlOmB1cmwoJHttZWRpYS51cmx9KWAgfSB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyAoeyBvcGVuIH0pID0+IGJhY2tncm91bmRJbWFnZUJ1dHRvbnMob3Blbil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRhbWHDsW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRTaXplIH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJycsIHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdjb3ZlcicsIHZhbHVlOiAnY292ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2NvbnRhaW4nLCB2YWx1ZTogJ2NvbnRhaW4nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2F1dG8nLCB2YWx1ZTogJ2F1dG8nIH0sXHJcbiAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgc3R5bGU6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgYmFja2dyb3VuZFNpemU6dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ2JhY2tncm91bmRTaXplJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVwZXRpclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCB9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICcnLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbm8tcmVwZWF0JywgdmFsdWU6ICduby1yZXBlYXQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3JlcGVhdCcsIHZhbHVlOiAncmVwZWF0JyB9LFxyXG4gICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IHN0eWxlOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIGJhY2tncm91bmRSZXBlYXQ6dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwnYmFja2dyb3VuZFJlcGVhdCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQb3NpY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiB9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICcnLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnY2VudGVyJywgdmFsdWU6ICdjZW50ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3RvcCAnLCB2YWx1ZTogJ3RvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAncmlnaHQnLCB2YWx1ZTogJ3JpZ2h0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdsZWZ0ICcsIHZhbHVlOiAnbGVmdCcgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2NlbnRlciB0b3AnLCB2YWx1ZTogJ2NlbnRlciB0b3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2NlbnRlciByaWdodCcsIHZhbHVlOiAnY2VudGVyIHJpZ2h0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdjZW50ZXIgYm90dG9tJywgdmFsdWU6ICdjZW50ZXIgYm90dG9tJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdjZW50ZXIgbGVmdCcsIHZhbHVlOiAnY2VudGVyIGxlZnQnIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICd0b3AgcmlnaHQnLCB2YWx1ZTogJ3RvcCByaWdodCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAndG9wIGxlZnQnLCB2YWx1ZTogJ3RvcCBsZWZ0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICd0b3AgY2VudGVyJywgdmFsdWU6ICd0b3AgY2VudGVyJyB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnYm90dG9tIHJpZ2h0JywgdmFsdWU6ICdib3R0b20gcmlnaHQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2JvdHRvbSBsZWZ0JywgdmFsdWU6ICdib3R0b20gbGVmdCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnYm90dG9tIGNlbnRlcicsIHZhbHVlOiAnYm90dG9tIGNlbnRlcicgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2xlZnQgY2VudGVyJywgdmFsdWU6ICdsZWZ0IGNlbnRlcicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbGVmdCB0b3AnLCB2YWx1ZTogJ2xlZnQgdG9wJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdsZWZ0IGJvdHRvbScsIHZhbHVlOiAnbGVmdCBib3R0b20nIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdyaWdodCBjZW50ZXInLCB2YWx1ZTogJ3JpZ2h0IGNlbnRlcicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAncmlnaHQgdG9wJywgdmFsdWU6ICdyaWdodCB0b3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3JpZ2h0IGJvdHRvbScsIHZhbHVlOiAncmlnaHQgYm90dG9tJyB9LFxyXG5cclxuICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBzdHlsZTogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBiYWNrZ3JvdW5kUG9zaXRpb246dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwnYmFja2dyb3VuZFBvc2l0aW9uJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkZpamFjacOzblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZEF0dGFjaG1lbnQgfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnJywgdmFsdWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2ZpeGVkJywgdmFsdWU6ICdmaXhlZCcgfSxcclxuICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBzdHlsZTogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBiYWNrZ3JvdW5kQXR0YWNobWVudDp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCdiYWNrZ3JvdW5kQXR0YWNobWVudCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiY29uc3QgeyBUZXh0Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmltcG9ydCB7IHNhbml0aXplU3R5bGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxpdGllcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0U3BhY2VEaW1lbnNpb24oe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9KXtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZS1zcGFjaW5nXCI+RXNwYWNpYWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24tY29udHJvbCB0aXRsZS1zcGFjaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBhdHRyaWJ1dGVzLnN0eWxlLm1hcmdpblRvcCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgbWFyZ2luVG9wOnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdtYXJnaW5Ub3AnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBhdHRyaWJ1dGVzLnN0eWxlLm1hcmdpblJpZ2h0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlIDogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBtYXJnaW5SaWdodDp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAnbWFyZ2luUmlnaHQnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgYXR0cmlidXRlcy5zdHlsZS5tYXJnaW5Cb3R0b20gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIG1hcmdpbkJvdHRvbTp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAnbWFyZ2luQm90dG9tJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBhdHRyaWJ1dGVzLnN0eWxlLm1hcmdpbkxlZnQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIG1hcmdpbkxlZnQ6dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ21hcmdpbkxlZnQnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZGRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgYXR0cmlidXRlcy5zdHlsZS5wYWRkaW5nVG9wIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIHBhZGRpbmdUb3A6dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdwYWRkaW5nVG9wJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgYXR0cmlidXRlcy5zdHlsZS5wYWRkaW5nUmlnaHQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgcGFkZGluZ1JpZ2h0OnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAncGFkZGluZ1JpZ2h0JywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IGF0dHJpYnV0ZXMuc3R5bGUucGFkZGluZ0JvdHRvbSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlIDogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBwYWRkaW5nQm90dG9tOnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAncGFkZGluZ0JvdHRvbScsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgYXR0cmlidXRlcy5zdHlsZS5wYWRkaW5nTGVmdCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlIDogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBwYWRkaW5nTGVmdDp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ3BhZGRpbmdMZWZ0JywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9