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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY2FyZC9jYXJkLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2NhcmQvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY2FyZC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2NvbHVtbi9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9jb2x1bW4vZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9jb2x1bW4vZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY29sdW1uL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY29sdW1uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FsbGVyeS9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2dhbGxlcnkvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FsbGVyeS9nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2dhbGxlcnkvc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9nYWxsZXJ5L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FuaW1hdGlvbi9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9nYW5pbWF0aW9uL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FuaW1hdGlvbi9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9nYW5pbWF0aW9uL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FuaW1hdGlvbi9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2hvdGdyYXBoaWMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvaG90Z3JhcGhpYy9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2hvdGdyYXBoaWMvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvaG90Z3JhcGhpYy9zYXZlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2hvdGdyYXBoaWMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9wb3N0cy9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Bvc3RzL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Bvc3RzL3Bvc3RzLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Bvc3RzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3Mvcm93L2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Jvdy9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Jvdy9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9yb3cvc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9yb3cvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2NvbXBvbmVudHMvR3JhcGhpY1BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2NvbXBvbmVudHMvUGFyYWdyYXBoLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvY29tcG9uZW50cy9UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvaGVscGVycy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9oZWxwZXJzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9zdHlsZS9FZGl0QmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3N0eWxlL0VkaXRTcGFjZURpbWVuc2lvbi5qcyJdLCJuYW1lcyI6WyJyZWdpc3RlckJsb2NrVHlwZSIsIndwIiwiYmxvY2tzIiwiY29tcG9uZW50cyIsIlRleHRDb250cm9sIiwiSWNvbkJ1dHRvbiIsIlBhbmVsQm9keSIsIlNlbGVjdENvbnRyb2wiLCJDaGVja2JveENvbnRyb2wiLCJDb2xvclBhbGV0dGUiLCJibG9ja0VkaXRvciIsIlJpY2hUZXh0IiwiSW5zcGVjdG9yQ29udHJvbHMiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJ0eXBlIiwiY2FyZEludmVyc2UiLCJ2YWwiLCJzdHlsZSIsInBhcmFncmFwaCIsImltYWdlIiwidXJsIiwiYWx0IiwiYnV0dG9ucyIsImZsb2F0aW5ncyIsImVkaXQiLCJzZXRBdHRyaWJ1dGVzIiwidXBkYXRlQnV0dG9uIiwiYnV0dG9uIiwiY29uY2F0IiwiY2xvbmVBcnJheSIsImZpbHRlciIsIml0ZW1GaWx0ZXIiLCJpbmRleCIsInVwZGF0ZUZsb2F0aW5nIiwicmVtb3ZlRmxvYXRpbmdCdXR0b24iLCJyZW5kZXJGbG9hdGluZ3MiLCJzb3J0IiwiYSIsImIiLCJtYXAiLCJidG4iLCJsYWJlbCIsInZhbHVlIiwiZGlzcGxheUxpbmsiLCJocmVmIiwiZGlzcGxheSIsInJlbmRlckJ1dHRvbnMiLCJyZW1vdmVMaW5rQnV0dG9uIiwiYWRkRmxvYXRpbmdCdXR0b24iLCJidG5saW5rIiwibGVuZ3RoIiwiYWRkTGlua0J1dHRvbiIsImFyciIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJhcnIyIiwiZnJvbSIsImluc3BlY3RvckNvbnRyb2wiLCJNYWluQ29sb3JzIiwiYmFja2dyb3VuZENvbG9yIiwiZ2V0QmFzaWNDYXJkIiwiZ2V0SW1hZ2VDYXJkIiwiY2FyZEltYWdlIiwibWVkaWEiLCJjYXJkQ29udGVudCIsInJlbmRlckNvbnRlbnQiLCJnZXRDYXJkIiwic2F2ZSIsImdldENhcmRBY3Rpb25zIiwiZ2V0RmxvYXRpbmdBY3Rpb25zIiwiaGFzQ29udGFpbmVyIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsIm9mZnNldFNtYWxsIiwib2Zmc2V0TWVkaXVtIiwib2Zmc2V0TGFyZ2UiLCJJbm5lckJsb2NrcyIsIlBhbmVsUm93IiwiVGFiUGFuZWwiLCJDb21wb25lbnQiLCJlbGVtZW50IiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJjb21wb3NlIiwiY2xhc3NlcyIsIkNvbHVtbkVkaXQiLCJhcmd1bWVudHMiLCJjbGllbnRJZCIsInByb3BzIiwic2VsZWN0IiwiZGF0YSIsInBhcmVudEJsb2NrIiwiZ2V0QmxvY2tzQnlDbGllbnRJZCIsImNoaWxkQmxvY2tzIiwiaW5uZXJCbG9ja3MiLCJlbXB0eUJsb2NrIiwiY2xhc3NOYW1lIiwicmVuZGVyVGFiMSIsImhvb2tzIiwiYWRkRmlsdGVyIiwiY29sdW1uQ3VzdG9tQ2xhc3NOYW1lIiwicmVuZGVyVGFiMiIsIkVkaXRCYWNrZ3JvdW5kIiwicmVuZGVyVGFiMyIsIkVkaXRTcGFjZURpbWVuc2lvbiIsInJlbmRlclRhYiIsInRhYk5hbWUiLCJuYW1lIiwidGFiIiwiQmxvY2tMaXN0QmxvY2siLCJSb3dTYXZlIiwiQmxvY2tDb250cm9scyIsIlBsYWluVGV4dCIsIlJhbmdlQ29udHJvbCIsIlNsb3RoR2Vla0dhbGxlcnlFZGl0IiwiY29uc29sZSIsImxvZyIsImdyaWRfY291bnQiLCJpdGVtIiwibW9kZWwiLCJuZXdPYmplY3QiLCJPYmplY3QiLCJhc3NpZ24iLCJpdGVtcyIsImNvbHVtbldpZHRoIiwid2lkdGgiLCJvbkNoYW5nZUV2ZW50IiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsInJlbmRlckl0ZW1zIiwicmVuZGVyRWRpdEl0ZW0iLCJpbnNwZWN0b3JDb250cm9scyIsIl9fIiwiaTE4biIsInNvdXJjZSIsImF0dHJpYnV0ZSIsInNlbGVjdG9yIiwicXVlcnkiLCJTbG90aEdlZWtHYWxsZXJ5U2F2ZSIsInJlbmRlckl0ZW0iLCJpZCIsImhlaWdodCIsIm1heFdpZHRoIiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImdyYXBoaWNVcmwiLCJncmFjcGhpY0FsdCIsImJvdHRvbSIsImxlZnQiLCJibG9ja0NvbnRyb2xzIiwicHVzaE5ld0l0ZW0iLCJwYXJzZUludCIsInVwZGF0ZUl0ZW0iLCJ6SW5kZXgiLCJncmFwaGljQWx0IiwiVGV4dGFyZWFDb250cm9sIiwiYm9keSIsInBvc2l0aW9uIiwidG9wIiwid2l0aFNlbGVjdCIsIkNvbG9yUGlja2VyIiwiYXBpRmV0Y2giLCJhZGRRdWVyeUFyZ3MiLCJDQVRFR09SSUVTX0xJU1RfUVVFUlkiLCJwZXJfcGFnZSIsIlNsb3RoR2Vla1Bvc3RFZGl0Iiwic3RhdGUiLCJjYXRlZ29yaWVzTGlzdCIsImlzU3RpbGxNb3VudGVkIiwiZmV0Y2hSZXF1ZXN0IiwicGF0aCIsInRoZW4iLCJzZXRTdGF0ZSIsInBvc3RzIiwiY29sdW1ucyIsInBvc3RfcGVyX3BhZ2UiLCJjYXRlZ29yeV9zZWxlY3RlZCIsImNhdCIsImFjdGlvbl9wb3N0IiwiZ2V0UkdCQUNvbG9yIiwib3B0aW9uMCIsInBvc3QiLCJ0aXRsZUNsYXNzZXMiLCJpbWFnZV91cmwiLCJfZW1iZWRkZWQiLCJzb3VyY2VfdXJsIiwicmVuZGVyZWQiLCJleGNlcnB0IiwibGluayIsIm9wdGlvbjEiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJvcHRpb24yIiwiZ2V0RW50aXR5UmVjb3JkcyIsImNhdGVnb3JpZXMiLCJfZW1iZWQiLCJrZXl3b3JkcyIsIml0c1NlY3Rpb24iLCJUb2dnbGVDb250cm9sIiwicm93Q3VzdG9tQ2xhc3NOYW1lIiwiUm93RWRpdCIsIkFMTE9XRURfQkxPQ0tTIiwib25TZWxlY3QiLCJyZW5kZXJDb250YWluZXIiLCJyZW5kZXJSb3ciLCJNZWRpYVVwbG9hZCIsIkdyYXBoaWNQaWNrZXIiLCJvcGVuRXZlbnQiLCJvbkNoYW5nZSIsIm9wZW4iLCJnZXRJbWFnZUJ1dHRvbiIsIkFsaWdubWVudFRvb2xiYXIiLCJQYXJhZ3JhcGgiLCJmb250U2l6ZSIsImNvbG9yIiwidGV4dEFsaWduIiwibWFyZ2luIiwicGFkZGluZyIsInVuZGVmaW5lZCIsImFycmF5IiwibmV3VmFsdWUiLCJzcGxpdCIsImpvaW4iLCJwbGFjZWhvbGRlciIsInVwZGF0ZU1QIiwiVGl0bGUiLCJzYW5pdGl6ZVN0eWxlIiwicmdiIiwiciIsImciLCJCdXR0b24iLCJiYWNrZ3JvdW5kSW1hZ2VCdXR0b25zIiwic2xpY2UiLCJuZXdTdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRBdHRhY2htZW50IiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7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SSxZQUFRLEVBQUcsa0JBQUU1TSxLQUFGLEVBQWE7QUFDcEJqQixtQkFBYSxDQUFFO0FBQUVSLGFBQUssa0NBQVFKLFVBQVUsQ0FBQ0ksS0FBbkI7QUFBMEJxTyxxQkFBVyxFQUFDNU07QUFBdEM7QUFBUCxPQUFGLENBQWI7QUFDQXlMLDhFQUFhLENBQUM7QUFBQ3ROLGtCQUFVLEVBQVZBLFVBQUQ7QUFBYVkscUJBQWEsRUFBYkE7QUFBYixPQUFELEVBQThCLGFBQTlCLEVBQTZDaUIsS0FBN0MsQ0FBYjtBQUNIO0FBTEwsSUFESixDQTVCSixDQXJDSixDQURKLENBRkosQ0FESjtBQW1GSCxDIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCJpbXBvcnQgJy4vZWRpdG9yLnNjc3MnXHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5cclxuXHJcbi8vaW1wb3J0ICcuL2Jsb2Nrcy90YWJzL2Jsb2NrJztcclxuLy9pbXBvcnQgJy4vYmxvY2tzL3Bvc3RzL3Bvc3RzJztcclxuLy9pbXBvcnQgJy4vYmxvY2tzL2dhbGxlcnkvZ2FsbGVyeSc7XHJcbi8vaW1wb3J0ICcuL2Jsb2Nrcy9jb250YWluZXIvY29udGFpbmVyJztcclxuLy9pbXBvcnQgJy4vYmxvY2tzL2hvdGdyYXBoaWMvYmxvY2snO1xyXG4vL2ltcG9ydCAnLi9ibG9ja3MvZ2FuaW1hdGlvbi9ibG9jayc7XHJcblxyXG5pbXBvcnQgJy4vYmxvY2tzL3Jvdy9ibG9jayc7XHJcbmltcG9ydCAnLi9ibG9ja3MvY29sdW1uL2Jsb2NrJztcclxuXHJcblxyXG5pbXBvcnQgJy4vYmxvY2tzL2NhcmQvY2FyZCc7XHJcbmltcG9ydCAnLi9ibG9ja3MvZ2FsbGVyeS9nYWxsZXJ5JztcclxuaW1wb3J0ICcuL2Jsb2Nrcy9ob3RncmFwaGljL2Jsb2NrJztcclxuaW1wb3J0ICcuL2Jsb2Nrcy9wb3N0cy9wb3N0cyc7XHJcbmltcG9ydCAnLi9ibG9ja3MvZ2FuaW1hdGlvbi9ibG9jayc7XHJcblxyXG5cclxuIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xyXG5jb25zdCB7IFRleHRDb250cm9sLCBJY29uQnV0dG9uLCBQYW5lbEJvZHksIFNlbGVjdENvbnRyb2wsIENoZWNrYm94Q29udHJvbCwgQ29sb3JQYWxldHRlIH0gPSB3cC5jb21wb25lbnRzO1xyXG5jb25zdCB7IFJpY2hUZXh0LCBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcblxyXG5pbXBvcnQgIFRpdGxlICBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RpdGxlJztcclxuaW1wb3J0ICBQYXJhZ3JhcGggIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFyYWdyYXBoJztcclxuaW1wb3J0ICBHcmFwaGljUGlja2VyICBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dyYXBoaWNQaWNrZXInO1xyXG5pbXBvcnQgTWFpbkNvbG9ycyBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbG9ycydcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xyXG5cclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCdzZy9jYXJkJywge1xyXG4gICAgdGl0bGU6ICdDYXJkJyxcclxuICAgIGljb246ICdzdGFyLWVtcHR5JyxcclxuICAgIGNhdGVnb3J5OiAnc2cnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIHR5cGU6e1xyXG4gICAgICAgICAgICB0eXBlOidzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnYmFzaWMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXJkSW52ZXJzZTp7XHJcbiAgICAgICAgICAgIHR5cGU6J2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZTp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB2YWw6J0xvcmVtIElwc3VtJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOnt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcmFncmFwaDp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB2YWw6J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFN1c3BlbmRpc3NlIGNvbnNlcXVhdCBlbmltIHZlbCBsaWd1bGEgc3VzY2lwaXQgc2VtcGVyLiBOdW5jIGJsYW5kaXQsIG1hZ25hIHZpdGFlIGV1aXNtb2QgbW9sZXN0aWUsIG5pYmggbmVxdWUgcHVsdmluYXIgZXJhdCwgZGljdHVtIGVnZXN0YXMgbWFnbmEgdXJuYSBpZCBhcmN1LicsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTp7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZTp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB1cmw6JycsXHJcbiAgICAgICAgICAgICAgICBhbHQ6JydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnV0dG9uczp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmbG9hdGluZ3M6e1xyXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3R5bGU6e1xyXG4gICAgICAgICAgICB0eXBlOidvYmplY3QnLFxyXG4gICAgICAgICAgICBkZWZhdWx0Ont9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0KCB7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30gKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IChidXR0b24pID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtdLmNvbmNhdChjbG9uZUFycmF5KGF0dHJpYnV0ZXMuYnV0dG9ucy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW1GaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbUZpbHRlci5pbmRleCAhPSBidXR0b24uaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9KSksIFtidXR0b25dKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1cGRhdGVGbG9hdGluZyA9IChidXR0b24pID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nczogW10uY29uY2F0KGNsb25lQXJyYXkoYXR0cmlidXRlcy5mbG9hdGluZ3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gYnV0dG9uLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgfSkpLCBbYnV0dG9uXSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlRmxvYXRpbmdCdXR0b24gPSAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nczogYXR0cmlidXRlcy5mbG9hdGluZ3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gdmFsO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJGbG9hdGluZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLmZsb2F0aW5ncy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgICAgIH0pLm1hcCggYnRuID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWZsb2F0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctYnV0dG9uLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYnRuLmxhYmVsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4gdXBkYXRlRmxvYXRpbmcoIHsuLi5idG4sIGxhYmVsOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1RleHRvIGRlbCBib3TDs24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmUgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRtaW4tbGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IGJ0bi5kaXNwbGF5TGluayA9PSAnbm9uZScgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZsb2F0aW5nKHsuLi5idG4sIGRpc3BsYXlMaW5rOiB2YWx9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gcmVtb3ZlRmxvYXRpbmdCdXR0b24oYnRuLmluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZy1idXR0b24taHJlZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHVwZGF0ZUZsb2F0aW5nKCB7Li4uYnRuLCBocmVmOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBidG4uaHJlZiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHtkaXNwbGF5OiBidG4uZGlzcGxheUxpbmt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5idXR0b25zLnNvcnQoZnVuY3Rpb24oYSAsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICAgICAgfSkubWFwKCBidG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctYnV0dG9uLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYnRuLmxhYmVsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4gdXBkYXRlQnV0dG9uKCB7Li4uYnRuLCBsYWJlbDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUZXh0byBkZWwgYm90w7NuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkbWluLWxpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBidG4uZGlzcGxheUxpbmsgPT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCdXR0b24oey4uLmJ0biwgZGlzcGxheUxpbms6IHZhbH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiByZW1vdmVMaW5rQnV0dG9uKGJ0bi5pbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctYnV0dG9uLWhyZWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB2YWx1ZSA9PiB1cGRhdGVCdXR0b24oIHsuLi5idG4sIGhyZWY6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGJ0bi5ocmVmIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsge2Rpc3BsYXk6IGJ0bi5kaXNwbGF5TGlua30gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9IClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZEZsb2F0aW5nQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnRubGluayA9IHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBhdHRyaWJ1dGVzLmZsb2F0aW5ncy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0FkZCBsYWJlbCcsXHJcbiAgICAgICAgICAgICAgICBocmVmOicjJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlMaW5rOiAnbm9uZSdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICAgICAgZmxvYXRpbmdzOiBbXS5jb25jYXQoY2xvbmVBcnJheShhdHRyaWJ1dGVzLmZsb2F0aW5ncyksIFtidG5saW5rXSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZW1vdmVMaW5rQnV0dG9uID0gKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBhdHRyaWJ1dGVzLmJ1dHRvbnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gdmFsO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRMaW5rQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnRubGluayA9IHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBhdHRyaWJ1dGVzLmJ1dHRvbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdBZGQgbGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgaHJlZjonIycsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TGluazogJ25vbmUnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtdLmNvbmNhdChjbG9uZUFycmF5KGF0dHJpYnV0ZXMuYnV0dG9ucyksIFtidG5saW5rXSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjbG9uZUFycmF5ID0gKGFycikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyMltpXSA9IGFycltpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnIyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5zcGVjdG9yQ29udHJvbCA9ICgpID0+e1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9J0Rpc2XDsW8nIGluaXRpYWxPcGVuPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ2FyZCBzdHlsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50eXBlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHsgc2V0QXR0cmlidXRlcyggeyB0eXBlOiB2YWx1ZSB9ICkgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdiYXNpYycsIGxhYmVsOiAnQmFzaWMgQ2FyZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnaW1hZ2UnLCBsYWJlbDogJ0ltYWdlIENhcmQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbnZlcnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmNhcmRJbnZlcnNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhcmRJbnZlcnNlOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQYWxldHRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMgPSB7IE1haW5Db2xvcnMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRDb2xvciB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgYmFja2dyb3VuZENvbG9yOmAke3ZhbHVlfWAgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0QmFzaWNDYXJkID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXthdHRyaWJ1dGVzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IHZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlLnZhbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IGF0dHJpYnV0ZXMudGl0bGUuc3R5bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ3JlZ2EgdW4gdMOtdHVsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKHsgcGFyYWdyYXBoOiB2YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5wYXJhZ3JhcGgudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgYXR0cmlidXRlcy5wYXJhZ3JhcGguc3R5bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ3JlZ2EgYXF1w60gZWwgY3VlcnBvIGRlIGxhIHRhcmpldGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1jYXJkLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1cy1hbHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBhZGRMaW5rQnV0dG9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuYnV0dG9ucy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubWFwKCBidG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbi1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBidG4ubGFiZWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4gdXBkYXRlQnV0dG9uKCB7Li4uYnRuLCBsYWJlbDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVGV4dG8gZGVsIGJvdMOzbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmUgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRtaW4tbGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IGJ0bi5kaXNwbGF5TGluayA9PSAnbm9uZScgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCdXR0b24oey4uLmJ0biwgZGlzcGxheUxpbms6IHZhbH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gcmVtb3ZlTGlua0J1dHRvbihidG4uaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbi1ocmVmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHVwZGF0ZUJ1dHRvbiggey4uLmJ0biwgaHJlZjogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGJ0bi5ocmVmIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHtkaXNwbGF5OiBidG4uZGlzcGxheUxpbmt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0SW1hZ2VDYXJkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkSW1hZ2UgPSAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JhcGhpY1BpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG1lZGlhID0+IHNldEF0dHJpYnV0ZXMoIHsgaW1hZ2U6IG1lZGlhIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17YXR0cmlidXRlcy5pbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YXR0cmlidXRlcy5pbWFnZS5hbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1mbG9hdGluZy1hY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXMtYWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gYWRkRmxvYXRpbmdCdXR0b24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckZsb2F0aW5ncygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkQ29udGVudCA9IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiB2YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlLnZhbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgYXR0cmlidXRlcy50aXRsZS5zdHlsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdyZWdhIHVuIHTDrXR1bG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKHsgcGFyYWdyYXBoOiB2YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnBhcmFncmFwaC52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IGF0dHJpYnV0ZXMucGFyYWdyYXBoLnN0eWxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ3JlZ2EgYXF1w60gZWwgY3VlcnBvIGRlIGxhIHRhcmpldGFcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGF0dHJpYnV0ZXMuY2FyZEludmVyc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkQ29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRDb250ZW50XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17YXR0cmlidXRlcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyByZW5kZXJDb250ZW50KCkgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1jYXJkLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1cy1hbHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBhZGRMaW5rQnV0dG9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckJ1dHRvbnMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0Q2FyZCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoYXR0cmlidXRlcy50eXBlKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Jhc2ljJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QmFzaWNDYXJkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0SW1hZ2VDYXJkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yQ29udHJvbCgpLFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay1zZy1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBnZXRDYXJkKCkgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2F2ZSh7YXR0cmlidXRlc30pIHtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0Q2FyZEFjdGlvbnMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihhdHRyaWJ1dGVzLmJ1dHRvbnMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmJ1dHRvbnMubWFwKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YnV0dG9uLmhyZWZ9PntidXR0b24ubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldEZsb2F0aW5nQWN0aW9ucyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKGF0dHJpYnV0ZXMuZmxvYXRpbmdzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmZsb2F0aW5ncy5tYXAoYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IGBidG4tZmxvYXRpbmcgaGFsZndheS1mYWIgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IG5vLXJhZGl1cyBhdXRvLXdpZHRoICR7IGF0dHJpYnV0ZXMuY2FyZEludmVyc2UgPyAndG9wJyA6ICcnfWAgfSBocmVmPXtidXR0b24uaHJlZn0+e2J1dHRvbi5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldEJhc2ljQ2FyZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2F0dHJpYnV0ZXMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lPSdoMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FyZC10aXRsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZS52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2F0dHJpYnV0ZXMudGl0bGUuc3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2F0dHJpYnV0ZXMucGFyYWdyYXBoLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnBhcmFncmFwaC52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgZ2V0Q2FyZEFjdGlvbnMoKSB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0SW1hZ2VDYXJkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkSW1hZ2UgPSAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXR0cmlidXRlcy5pbWFnZS51cmx9IGFsdD17YXR0cmlidXRlcy5pbWFnZS5hbHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0RmxvYXRpbmdBY3Rpb25zKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZENvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU9J2gzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQtdGl0bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZS52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YXR0cmlidXRlcy50aXRsZS5zdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2F0dHJpYnV0ZXMucGFyYWdyYXBoLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0LkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5wYXJhZ3JhcGgudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoYXR0cmlidXRlcy5jYXJkSW52ZXJzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZENvbnRlbnRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2F0dHJpYnV0ZXMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ29udGVudCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q2FyZEFjdGlvbnMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldENhcmQgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGF0dHJpYnV0ZXMudHlwZSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdiYXNpYyc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEJhc2ljQ2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEltYWdlQ2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIGdldENhcmQoKVxyXG4gICAgICAgIClcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XHJcblxyXG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnO1xyXG5cclxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCAnc2cvY29sdW1uJywge1xyXG4gICAgdGl0bGU6ICdDb2x1bW4nLFxyXG4gICAgaWNvbjogJ3N0YXItZW1wdHknLFxyXG4gICAgY2F0ZWdvcnk6ICdzZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgaGFzQ29udGFpbmVyOntcclxuICAgICAgICAgICAgdHlwZTonYm9vbGVhbicsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNtYWxsOntcclxuICAgICAgICAgICAgdHlwZTonc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDonczEyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVkaXVtOntcclxuICAgICAgICAgICAgdHlwZTonc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDonJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFyZ2U6e1xyXG4gICAgICAgICAgICB0eXBlOidzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OicnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvZmZzZXRTbWFsbDp7XHJcbiAgICAgICAgICAgIHR5cGU6J3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6JydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9mZnNldE1lZGl1bTp7XHJcbiAgICAgICAgICAgIHR5cGU6J3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6JydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9mZnNldExhcmdlOntcclxuICAgICAgICAgICAgdHlwZTonc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDonJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3R5bGU6e1xyXG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICAgICAgZGVmYXVsdDoge31cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVkaXQsXHJcblxyXG4gICAgc2F2ZVxyXG59ICk7IiwiaW1wb3J0IEVkaXRCYWNrZ3JvdW5kIGZyb20gXCIuLi8uLi9zdHlsZS9FZGl0QmFja2dyb3VuZFwiO1xyXG5pbXBvcnQgRWRpdFNwYWNlRGltZW5zaW9uIGZyb20gXCIuLi8uLi9zdHlsZS9FZGl0U3BhY2VEaW1lbnNpb25cIjtcclxuXHJcbmNvbnN0IHsgSW5uZXJCbG9ja3MsIEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuY29uc3QgeyBTZWxlY3RDb250cm9sLCBQYW5lbEJvZHksIFBhbmVsUm93LCBUYWJQYW5lbCB9ID0gd3AuY29tcG9uZW50cztcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gPSB3cC5jb21wb3NlO1xyXG5cclxubGV0IGNsYXNzZXMgPSBcIlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sdW1uRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgY2xpZW50SWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzZWxlY3QgfSA9IHdwLmRhdGE7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmVudEJsb2NrID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzQnlDbGllbnRJZCggY2xpZW50SWQgKVsgMCBdO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkQmxvY2tzID0gcGFyZW50QmxvY2suaW5uZXJCbG9ja3M7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtcHR5QmxvY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggY2hpbGRCbG9ja3MubGVuZ3RoID09IDApe1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWVtcHR5LWlubmVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctYmxvY2stbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXNoaWNvbnMgZGFzaGljb25zLXNjcmVlbm9wdGlvbnNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbWllbnphIGEgYXJtYXIgdHUgY29udGVuaWRvIGNvbiB1bm8gbyBtw6FzIGJsb3F1ZXMgZGUgbGEgbGlicmVyw61hIHByZXNpb25hbmRvIGVuIGVsIGJvdMOzbiBtw6FzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7Y2xhc3NOYW1lLCBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNsYXNzZXMgPSBhdHRyaWJ1dGVzLnNtYWxsO1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJUYWIxID0gIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnNtYWxsIH1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczEnLCB2YWx1ZTogJ3MxJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczInLCB2YWx1ZTogJ3MyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczMnLCB2YWx1ZTogJ3MzJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczQnLCB2YWx1ZTogJ3M0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczUnLCB2YWx1ZTogJ3M1JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczYnLCB2YWx1ZTogJ3M2JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczcnLCB2YWx1ZTogJ3M3JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczgnLCB2YWx1ZTogJ3M4JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczknLCB2YWx1ZTogJ3M5JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczEwJywgdmFsdWU6ICdzMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdzMTEnLCB2YWx1ZTogJ3MxMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3MxMicsIHZhbHVlOiAnczEyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzbWFsbDogdmFsdWUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpdW0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICctJywgdmFsdWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtMScsIHZhbHVlOiAnbTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtMicsIHZhbHVlOiAnbTInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtMycsIHZhbHVlOiAnbTMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtNCcsIHZhbHVlOiAnbTQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtNScsIHZhbHVlOiAnbTUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtNicsIHZhbHVlOiAnbTYnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtNycsIHZhbHVlOiAnbTcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtOCcsIHZhbHVlOiAnbTgnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtOScsIHZhbHVlOiAnbTknIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtMTAnLCB2YWx1ZTogJ20xMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ20xMScsIHZhbHVlOiAnbTExJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTEyJywgdmFsdWU6ICdtMTInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IG1lZGl1bTogdmFsdWUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmxhcmdlIH1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnLScsIHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDEnLCB2YWx1ZTogJ2wxJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDInLCB2YWx1ZTogJ2wyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDMnLCB2YWx1ZTogJ2wzJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDQnLCB2YWx1ZTogJ2w0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDUnLCB2YWx1ZTogJ2w1JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDYnLCB2YWx1ZTogJ2w2JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDcnLCB2YWx1ZTogJ2w3JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDgnLCB2YWx1ZTogJ2w4JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDknLCB2YWx1ZTogJ2w5JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDEwJywgdmFsdWU6ICdsMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdsMTEnLCB2YWx1ZTogJ2wxMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2wxMicsIHZhbHVlOiAnbDEyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBsYXJnZTogdmFsdWUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPZmZzZXQgc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5vZmZzZXRTbWFsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJy0nLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zMScsIHZhbHVlOiAnb2Zmc2V0LXMxJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXMyJywgdmFsdWU6ICdvZmZzZXQtczInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczMnLCB2YWx1ZTogJ29mZnNldC1zMycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zNCcsIHZhbHVlOiAnb2Zmc2V0LXM0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXM1JywgdmFsdWU6ICdvZmZzZXQtczUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczYnLCB2YWx1ZTogJ29mZnNldC1zNicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zNycsIHZhbHVlOiAnb2Zmc2V0LXM3JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXM4JywgdmFsdWU6ICdvZmZzZXQtczgnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczknLCB2YWx1ZTogJ29mZnNldC1zOScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zMTAnLCB2YWx1ZTogJ29mZnNldC1zMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczExJywgdmFsdWU6ICdvZmZzZXQtczExJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXMxMicsIHZhbHVlOiAnb2Zmc2V0LXMxMicgfSxcclxuICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgb2Zmc2V0U21hbGw6IHZhbHVlIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnc2cvY29sdW1uJywgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT2Zmc2V0IG1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLm9mZnNldE1lZGl1bSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJy0nLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tMScsIHZhbHVlOiAnb2Zmc2V0LW0xJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW0yJywgdmFsdWU6ICdvZmZzZXQtbTInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTMnLCB2YWx1ZTogJ29mZnNldC1tMycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tNCcsIHZhbHVlOiAnb2Zmc2V0LW00JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW01JywgdmFsdWU6ICdvZmZzZXQtbTUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTYnLCB2YWx1ZTogJ29mZnNldC1tNicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tNycsIHZhbHVlOiAnb2Zmc2V0LW03JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW04JywgdmFsdWU6ICdvZmZzZXQtbTgnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTknLCB2YWx1ZTogJ29mZnNldC1tOScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tMTAnLCB2YWx1ZTogJ29mZnNldC1tMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTExJywgdmFsdWU6ICdvZmZzZXQtbTExJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW0xMicsIHZhbHVlOiAnb2Zmc2V0LW0xMicgfSxcclxuICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgb2Zmc2V0TWVkaXVtOiB2YWx1ZSB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdwLmhvb2tzLmFkZEZpbHRlcignZWRpdG9yLkJsb2NrTGlzdEJsb2NrJywgJ3NnL2NvbHVtbicsIGNvbHVtbkN1c3RvbUNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9mZnNldCBsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLm9mZnNldExhcmdlIH1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnLScsIHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWwxJywgdmFsdWU6ICdvZmZzZXQtbDEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDInLCB2YWx1ZTogJ29mZnNldC1sMicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sMycsIHZhbHVlOiAnb2Zmc2V0LWwzJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWw0JywgdmFsdWU6ICdvZmZzZXQtbDQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDUnLCB2YWx1ZTogJ29mZnNldC1sNScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sNicsIHZhbHVlOiAnb2Zmc2V0LWw2JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWw3JywgdmFsdWU6ICdvZmZzZXQtbDcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDgnLCB2YWx1ZTogJ29mZnNldC1sOCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sOScsIHZhbHVlOiAnb2Zmc2V0LWw5JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWwxMCcsIHZhbHVlOiAnb2Zmc2V0LWwxMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sMTEnLCB2YWx1ZTogJ29mZnNldC1sMTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDEyJywgdmFsdWU6ICdvZmZzZXQtbDEyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBvZmZzZXRMYXJnZTogdmFsdWUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclRhYjIgPSAgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgeyBFZGl0QmFja2dyb3VuZCh0aGlzLnByb3BzKSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFiMyA9ICAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7IEVkaXRTcGFjZURpbWVuc2lvbih0aGlzLnByb3BzKSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFiID0gKHRhYk5hbWUpID0+e1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRhYk5hbWUpe1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYjEnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYjInOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYjMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlclRhYjE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPVwiQWp1c3Rlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwic2ctdGFiLXBhbmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZS10YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0YWIxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnR3JpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0YWItb25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RhYjInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCRycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0YWItdHdvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RhYjMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEaW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFiLXRocmVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHRhYiApID0+IHJlbmRlclRhYih0YWIubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmVsUm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgZW1wdHlCbG9jaygpLFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtY29udGVudFwiIHN0eWxlPXsgYXR0cmlidXRlcy5zdHlsZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbm5lckJsb2Nrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJBcHBlbmRlcj17ICgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcGVuZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLXRleHQtYmxvY2stYXBwZW5kZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWJsb2NrLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLXNjcmVlbm9wdGlvbnNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lckJsb2Nrcy5CdXR0b25CbG9ja0FwcGVuZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY29uc3QgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lID0gY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoKEJsb2NrTGlzdEJsb2NrKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvcHMgPT4ge1xyXG4gICAgICAgIGlmKHByb3BzLm5hbWUgPT0gXCJzZy9jb2x1bW5cIikge1xyXG4gICAgICAgICAgICByZXR1cm4gPEJsb2NrTGlzdEJsb2NrIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtgY29sICR7cHJvcHMuYXR0cmlidXRlcy5zbWFsbH0gJHtwcm9wcy5hdHRyaWJ1dGVzLm1lZGl1bX0gJHtwcm9wcy5hdHRyaWJ1dGVzLmxhcmdlfSAke3Byb3BzLmF0dHJpYnV0ZXMub2Zmc2V0U21hbGx9ICR7cHJvcHMuYXR0cmlidXRlcy5vZmZzZXRNZWRpdW19ICR7cHJvcHMuYXR0cmlidXRlcy5vZmZzZXRMYXJnZX1gfS8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPEJsb2NrTGlzdEJsb2NrIHsuLi5wcm9wc30vPlxyXG4gICAgfVxyXG59LCAnY29sdW1uQ3VzdG9tQ2xhc3NOYW1lJyk7XHJcblxyXG53cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IElubmVyQmxvY2tzfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvd1NhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtjbGFzc05hbWUsIGF0dHJpYnV0ZXN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sICR7Y2xhc3NOYW1lfSAke2F0dHJpYnV0ZXMuc21hbGx9ICR7YXR0cmlidXRlcy5tZWRpdW19ICR7YXR0cmlidXRlcy5sYXJnZX0gJHthdHRyaWJ1dGVzLm9mZnNldFNtYWxsfSAke2F0dHJpYnV0ZXMub2Zmc2V0TWVkaXVtfSAke2F0dHJpYnV0ZXMub2Zmc2V0TGFyZ2V9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXsgYXR0cmlidXRlcy5zdHlsZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElubmVyQmxvY2tzLkNvbnRlbnQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBCbG9ja0NvbnRyb2xzLEluc3BlY3RvckNvbnRyb2xzLFBsYWluVGV4dCB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IEljb25CdXR0b24sIFBhbmVsQm9keSwgUmFuZ2VDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaW1wb3J0IEdyYXBoaWNQaWNrZXIgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR3JhcGhpY1BpY2tlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90aEdlZWtHYWxsZXJ5RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdyaWRfY291bnQ6IFwiK3RoaXMucHJvcHMuYXR0cmlidXRlcy5ncmlkX2NvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZUV2ZW50KGl0ZW0sIG1vZGVsKXtcclxuICAgICAgICB2YXIgbmV3T2JqZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgbW9kZWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLmNvbmNhdCh0aGlzLmNsb25lQXJyYXkodGhpcy5wcm9wcy5hdHRyaWJ1dGVzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gaXRlbS5pbmRleDtcclxuICAgICAgICAgICAgfSkpLCBbbmV3T2JqZWN0XSlcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY2xvbmVBcnJheShhcnIpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFycjJbaV0gPSBhcnJbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycjI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRWRpdEl0ZW0oaXRlbSl7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbldpZHRoID0gKCAxMDAvdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmdyaWRfY291bnQgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW1cIiBzdHlsZT17IHsgd2lkdGg6YCR7Y29sdW1uV2lkdGh9JWAgfSB9PlxyXG4gICAgICAgICAgICAgICAgPEdyYXBoaWNQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG1lZGlhID0+IHRoaXMub25DaGFuZ2VFdmVudChpdGVtLCB7IGltYWdlVXJsOiBtZWRpYS51cmwgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgIHVybD17aXRlbS5pbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uaW1hZ2VBbHR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFBsYWluVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCB2YWx1ZSApID0+IHRoaXMub25DaGFuZ2VFdmVudChpdGVtLCB7dXJsOiB2YWx1ZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXJsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlckl0ZW1zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihhdHRyaWJ1dGVzLml0ZW1zLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuaXRlbXMuc29ydChmdW5jdGlvbihhICwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICAgICAgICAgIH0pLm1hcCgoaXRlbSkgPT4gdGhpcy5yZW5kZXJFZGl0SXRlbShpdGVtKSlcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8c3Bhbj5ObyBoYXkgaXRlbSBwYXJhIG1vc3RyYXI8L3NwYW4+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbnNwZWN0b3JDb250cm9scyA9IChcclxuICAgICAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT1cIkFqdXN0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTsO6bWVybyBkZSBjb2x1bW5hc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5ncmlkX2NvdW50IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gc2V0QXR0cmlidXRlcyggeyBncmlkX2NvdW50OiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW10uY29uY2F0KHRoaXMuY2xvbmVBcnJheShhdHRyaWJ1dGVzLml0ZW1zKSwgW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogYXR0cmlidXRlcy5pdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VBbHQ6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFncmVnYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmxvY2tDb250cm9scz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnNwZWN0b3JDb250cm9sc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1nYWxsZXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1nYWxsZXJ5LWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW1zKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnO1xyXG5cclxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5cclxucmVnaXN0ZXJCbG9ja1R5cGUoICdzZy9nYWxsZXJ5Jywge1xyXG4gICAgdGl0bGU6ICdHYWxsZXJ5JyxcclxuICAgIGljb246ICdzdGFyLWVtcHR5JyxcclxuICAgIGNhdGVnb3J5OiAnc2cnLFxyXG4gICAgYXR0cmlidXRlczp7XHJcbiAgICAgICAgZ3JpZF9jb3VudDoge1xyXG4gICAgICAgICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6ICdkYXRhLWNvdW50JyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICcuc2ctZ2FsbGVyeS1pbm5lcicsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogJ3F1ZXJ5JyxcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnNnLWl0ZW0nLFxyXG4gICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2RhdGEtaW5kZXgnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOntcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2hyZWYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLnNnLWl0ZW0tbGluaydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbWFnZVVybDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogJ2F0dHJpYnV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiAnc3JjJyxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5zZy1pdGVtLWdyYXBoaWMnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VBbHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2FsdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuc2ctaXRlbS1ncmFwaGljJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0LFxyXG5cclxuICAgIHNhdmVcclxuXHJcbn0pOyIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdGhHZWVrR2FsbGVyeVNhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckl0ZW0oaXRlbSwgaW5kZXgpe1xyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW5XaWR0aCA9ICggMTAwL3RoaXMucHJvcHMuYXR0cmlidXRlcy5ncmlkX2NvdW50ICk7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtXCIgZGF0YS1pbmRleD17aW5kZXh9IHN0eWxlPXsgeyB3aWR0aDpgJHtjb2x1bW5XaWR0aH0lYCB9IH0gPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2ctaXRlbS1saW5rXCIgaHJlZj17aXRlbS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNnLWl0ZW0tZ3JhcGhpY1wiIHNyYz17aXRlbS5pbWFnZVVybH0gYWx0PXtpdGVtLmltYWdlQWx0fS8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWdhbGxlcnkgY29sIHMxMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1nYWxsZXJ5LWlubmVyXCIgZGF0YS1jb3VudD17YXR0cmlidXRlcy5ncmlkX2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gdGhpcy5yZW5kZXJJdGVtKGl0ZW0sIGluZGV4KSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcclxuXHJcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCAnc2cvZ2FuaW1hdGlvbicsIHtcclxuICAgIHRpdGxlOiAnR3JhcGhpYyBTdGFjaycsXHJcbiAgICBpY29uOiAnc3Rhci1lbXB0eScsXHJcbiAgICBjYXRlZ29yeTogJ3NnJyxcclxuICAgIGF0dHJpYnV0ZXM6e1xyXG4gICAgICAgIGlkOntcclxuICAgICAgICAgICAgZGVmYXVsdDpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OltdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWlnaHQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OlwiNjAwcHhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWF4V2lkdGg6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OlwiNTUwcHhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5pbWF0aW9uOntcclxuICAgICAgICAgICAgZGVmYXVsdDpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdXJhdGlvbjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsYXk6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0LFxyXG5cclxuICAgIHNhdmVcclxuXHJcbn0pOyIsImltcG9ydCBHcmFwaGljUGlja2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyYXBoaWNQaWNrZXJcIjtcclxuXHJcbmNvbnN0IHsgQmxvY2tDb250cm9scywgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBJY29uQnV0dG9uLCBSYW5nZUNvbnRyb2wsIFBhbmVsQm9keSwgVGV4dENvbnRyb2wgfSA9d3AuY29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RoR2Vla0dhbGxlcnlFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoTmV3SXRlbSgpe1xyXG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgIGluZGV4OiBhdHRyaWJ1dGVzLml0ZW1zLmxlbmd0aCxcclxuICAgICAgICAgICAgaWQ6XCJcIixcclxuICAgICAgICAgICAgZ3JhcGhpY1VybDpcIlwiLFxyXG4gICAgICAgICAgICBncmFjcGhpY0FsdDpcIlwiLFxyXG4gICAgICAgICAgICBhbmltYXRpb246XCJcIixcclxuICAgICAgICAgICAgc3R5bGU6e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBib3R0b206XCIwXCIsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OlwiMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLmNvbmNhdCh0aGlzLmNsb25lQXJyYXkoYXR0cmlidXRlcy5pdGVtcyksIFtpdGVtXSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJdGVtKGl0ZW0pe1xyXG4gICAgICAgIGNvbnN0IHsgc2V0QXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICBpdGVtczogW10uY29uY2F0KHRoaXMuY2xvbmVBcnJheSh0aGlzLnByb3BzLmF0dHJpYnV0ZXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbUZpbHRlci5pbmRleCAhPSBpdGVtLmluZGV4O1xyXG4gICAgICAgICAgICB9KSksIFtpdGVtXSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZUFycmF5KGFycikge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJyMltpXSA9IGFycltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBibG9ja0NvbnRyb2xzID0gKFxyXG4gICAgICAgICAgICA8QmxvY2tDb250cm9scz5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMucHVzaE5ld0l0ZW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZ3JlZ2FyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQmxvY2tDb250cm9scz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZihhdHRyaWJ1dGVzLml0ZW1zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgYmxvY2tDb250cm9scyxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2stc2ctZ2FuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIYXogY2xpYyBlbiBlbCBib3TDs25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMucHVzaE5ld0l0ZW0oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZ3JlZ2FyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYSBhZ3JlZ2FyIGxhIHByaW1lcmEgaW1hZ2VuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPVwiR3JhcGhpYyBTdGFja1wiIGluaXRpYWxPcGVuPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWx0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGF0dHJpYnV0ZXMuaGVpZ2h0KycnKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMoe2hlaWdodDogYCR7dmFsdWV9cHhgIH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDEgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQW5jaG8gbcOheGltb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGF0dHJpYnV0ZXMubWF4V2lkdGgrJycpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7bWF4V2lkdGg6IGAke3ZhbHVlfXB4YCB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQW5jbGFqZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKHtpZDogdmFsdWUgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5pdGVtcy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLm1hcCggKCBpdGVtICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17YEl0ZW0gJHtpdGVtLmluZGV4KzF9YH0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbmNsYWplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBpdGVtLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgaWQ6IHZhbHVlIH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFuaW1hY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGl0ZW0uYW5pbWF0aW9uIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgYW5pbWF0aW9uOiB2YWx1ZSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGl0ZW0uc3R5bGUud2lkdGgpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgc3R5bGU6IHsuLi5pdGVtLnN0eWxlLCB3aWR0aDpgJHt2YWx1ZX0lYH0gfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGl0ZW0uc3R5bGUuYm90dG9tKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIHN0eWxlOiB7Li4uaXRlbS5zdHlsZSwgYm90dG9tOmAke3ZhbHVlfSVgfSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGl0ZW0uc3R5bGUubGVmdCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBzdHlsZTogey4uLml0ZW0uc3R5bGUsIGxlZnQ6YCR7dmFsdWV9JWB9IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ6LWluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBpdGVtLnN0eWxlLnpJbmRleCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIHN0eWxlOiB7Li4uaXRlbS5zdHlsZSwgekluZGV4OiBwYXJzZUludCh2YWx1ZSl9IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFtcclxuICAgICAgICAgICAgaW5zcGVjdG9yQ29udHJvbHMoKSxcclxuICAgICAgICAgICAgYmxvY2tDb250cm9scyxcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay1zZy1nYW5pbWF0aW9uIHNnLWl0ZW1zXCIgc3R5bGU9e3toZWlnaHQ6YXR0cmlidXRlcy5oZWlnaHR9fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLml0ZW1zLnNvcnQoZnVuY3Rpb24oYSAsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLm1hcCggKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbVwiIGRhdGEtaW5kZXg9e2luZGV4fSBzdHlsZT17aXRlbS5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW0tZ3JhcGhpYy1pbm5lclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhpY1BpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZy1pdGVtLWdyYXBoaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG1lZGlhID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIGdyYXBoaWNVcmw6IG1lZGlhLnVybCwgZ3JhcGhpY0FsdDogbWVkaWEuYWx0IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtLmdyYXBoaWNVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5ncmFwaGljQWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RoR2Vla0dhbGxlcnlTYXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPXthdHRyaWJ1dGVzLmlkfSBjbGFzc05hbWU9XCJ3cC1ibG9jay1zZy1nYW5pbWF0aW9uIHNnLWl0ZW1zXCIgc3R5bGU9e3toZWlnaHQ6IGF0dHJpYnV0ZXMuaGVpZ2h0LCBtYXhXaWR0aDogYXR0cmlidXRlcy5tYXhXaWR0aH19PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuaXRlbXMubWFwKChpdGVtLGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17aXRlbS5pZH0gY2xhc3NOYW1lPVwic2ctaXRlbVwiIHN0eWxlPXtpdGVtLnN0eWxlfSBkYXRhLWFuaW1hdGlvbj17aXRlbS5hbmltYXRpb259ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uZ3JhcGhpY1VybH0gYWx0PXtpdGVtLmdyYXBoaWNBbHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcclxuXHJcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCAnc2cvaG90Z3JhcGhpYycsIHtcclxuICAgIHRpdGxlOiAnSG90R3JhcGhpYycsXHJcbiAgICBpY29uOiAnc3Rhci1lbXB0eScsXHJcbiAgICBjYXRlZ29yeTogJ3NnJyxcclxuICAgIGF0dHJpYnV0ZXM6e1xyXG4gICAgICAgIGhlaWdodDp7XHJcbiAgICAgICAgICAgIHR5cGU6J3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICc0MDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6W11cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVkaXQsXHJcblxyXG4gICAgc2F2ZVxyXG5cclxufSk7IiwiaW1wb3J0IEdyYXBoaWNQaWNrZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JhcGhpY1BpY2tlclwiO1xyXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBCbG9ja0NvbnRyb2xzLEluc3BlY3RvckNvbnRyb2xzICB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgSWNvbkJ1dHRvbixQYW5lbEJvZHksVGV4dENvbnRyb2wsVGV4dGFyZWFDb250cm9sLFJhbmdlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RoR2Vla0dhbGxlcnlFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoTmV3SXRlbSgpe1xyXG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgIGluZGV4OiBhdHRyaWJ1dGVzLml0ZW1zLmxlbmd0aCxcclxuICAgICAgICAgICAgdGl0bGU6JycsXHJcbiAgICAgICAgICAgIGdyYXBoaWNVcmw6JycsXHJcbiAgICAgICAgICAgIGdyYXBoaWNBbHQ6JycsXHJcbiAgICAgICAgICAgIGJvZHk6JycsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzMwJScsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLmNvbmNhdCh0aGlzLmNsb25lQXJyYXkoYXR0cmlidXRlcy5pdGVtcyksIFtpdGVtXSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJdGVtKGl0ZW0pe1xyXG4gICAgICAgIGNvbnN0IHsgc2V0QXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICBpdGVtczogW10uY29uY2F0KHRoaXMuY2xvbmVBcnJheSh0aGlzLnByb3BzLmF0dHJpYnV0ZXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbUZpbHRlci5pbmRleCAhPSBpdGVtLmluZGV4O1xyXG4gICAgICAgICAgICB9KSksIFtpdGVtXSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZUFycmF5KGFycikge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJyMltpXSA9IGFycltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmKGF0dHJpYnV0ZXMuaXRlbXMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hOZXdJdGVtKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT1cIkhvdGdyYXBoaWNcIiBpbml0aWFsT3Blbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFsdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChhdHRyaWJ1dGVzLmhlaWdodCsnJykgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKHtoZWlnaHQ6IGAke3ZhbHVlfXB4YCB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5pdGVtcy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLm1hcCggKCBpdGVtICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17YEl0ZW0gJHtpdGVtLmluZGV4KzF9YH0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUw610dWxvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBpdGVtLnRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgdGl0bGU6IHZhbHVlIH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDdWVycG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiRW50ZXIgc29tZSB0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBpdGVtLmJvZHkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBib2R5OiB2YWx1ZSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGl0ZW0uc3R5bGUud2lkdGgpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgc3R5bGU6IHsuLi5pdGVtLnN0eWxlLCB3aWR0aDpgJHt2YWx1ZX0lYH0gfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGl0ZW0uc3R5bGUudG9wKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIHN0eWxlOiB7Li4uaXRlbS5zdHlsZSwgdG9wOmAke3ZhbHVlfSVgfSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDEgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGl0ZW0uc3R5bGUubGVmdCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBzdHlsZTogey4uLml0ZW0uc3R5bGUsIGxlZnQ6YCR7dmFsdWV9JWB9IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIGluc3BlY3RvckNvbnRyb2xzKCksXHJcbiAgICAgICAgICAgICAgICA8QmxvY2tDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gdGhpcy5wdXNoTmV3SXRlbSgpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFncmVnYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Jsb2NrQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay1zZy1ob3RncmFwaGljIHNnLWl0ZW1zXCIgc3R5bGU9e3toZWlnaHQ6YXR0cmlidXRlcy5oZWlnaHR9fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuaXRlbXMuc29ydChmdW5jdGlvbihhICwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5tYXAoIChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtXCIgZGF0YS1pbmRleD17aW5kZXh9IHN0eWxlPXtpdGVtLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW0tZ3JhcGhpYy1pbm5lclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoaWNQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWl0ZW0tZ3JhcGhpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG1lZGlhID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIGdyYXBoaWNVcmw6IG1lZGlhLnVybCwgZ3JhcGhpY0FsdDogbWVkaWEuYWx0IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17aXRlbS5ncmFwaGljVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLmdyYXBoaWNBbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBdXHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90aEdlZWtHYWxsZXJ5U2F2ZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW1zXCIgc3R5bGU9e3toZWlnaHQ6IGF0dHJpYnV0ZXMuaGVpZ2h0fX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5pdGVtcy5tYXAoaXRlbSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2ctaXRlbSBtb2RhbC10cmlnZ2VyXCIgc3R5bGU9e2l0ZW0uc3R5bGV9IGhyZWY9e2AjaGcke2l0ZW0uaW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmdyYXBoaWNVcmx9IGFsdD17aXRlbS5ncmFwaGljQWx0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsc2VcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2BoZyR7aXRlbS5pbmRleH1gfSBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQgc2ctbW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1tb2RhbC1jb250ZW50LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2l0ZW0udGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5ib2R5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1tb2RhbC1jb250ZW50LWdyYXBoaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5ncmFwaGljVXJsfSBhbHQ9e2l0ZW0uZ3JhcGhpY0FsdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIlxyXG5cclxuY29uc3QgeyB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xyXG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgUGFuZWxCb2R5LFJhbmdlQ29udHJvbCxUZXh0Q29udHJvbCxTZWxlY3RDb250cm9sLENvbG9yUGlja2VyIH0gPXdwLmNvbXBvbmVudHM7XHJcbmNvbnN0ICBhcGlGZXRjaCAgPSB3cC5hcGlGZXRjaDtcclxuY29uc3QgeyBhZGRRdWVyeUFyZ3MgfSA9IHdwLnVybDtcclxuXHJcbmltcG9ydCB7IGdldFJHQkFDb2xvciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbGl0aWVzJztcclxuaW1wb3J0IE1haW5Db2xvcnMgZnJvbSAnLi4vLi4vaGVscGVycy9jb2xvcnMnO1xyXG5cclxuY29uc3QgQ0FURUdPUklFU19MSVNUX1FVRVJZID0ge1xyXG4gICAgcGVyX3BhZ2U6IC0xLFxyXG59O1xyXG5cclxuY2xhc3MgU2xvdGhHZWVrUG9zdEVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzTGlzdDogW10sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmlzU3RpbGxNb3VudGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZldGNoUmVxdWVzdCA9IGFwaUZldGNoKCB7XHJcbiAgICAgICAgICAgIHBhdGg6IGFkZFF1ZXJ5QXJncyggYC93cC92Mi9jYXRlZ29yaWVzYCwgQ0FURUdPUklFU19MSVNUX1FVRVJZICksXHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLnRoZW4oICggY2F0ZWdvcmllc0xpc3QgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5pc1N0aWxsTW91bnRlZCApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgY2F0ZWdvcmllc0xpc3QgfSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5pc1N0aWxsTW91bnRlZCApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgY2F0ZWdvcmllc0xpc3Q6IFtdIH0gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLmlzU3RpbGxNb3VudGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge3Bvc3RzLCBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBjbGFzc05hbWV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IGNhdGVnb3JpZXNMaXN0IH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoIXBvc3RzKXtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzcGFuPkxvYWRpbmcuLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCBwb3N0cy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5ObyBoYXkgcG9zdHMgcGFyYSBtb3N0cmFyLjwvc3Bhbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbnNwZWN0b3JDb250cm9scyA9IChcclxuICAgICAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT1cIkFqdXN0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTsO6bWVybyBkZSBjb2x1bW5hc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5jb2x1bW5zIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gc2V0QXR0cmlidXRlcyggeyBjb2x1bW5zOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTIgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIsK/Q3VhbnRvcyBwb3N0P1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5wb3N0X3Blcl9wYWdlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgcG9zdF9wZXJfcGFnZTogdmFsdWUgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFsdG8gZGUgbGEgaW1hZ2VuIChweClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuaGVpZ2h0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gc2V0QXR0cmlidXRlcyggeyBoZWlnaHQ6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDEgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2F0ZWdvcsOtYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5jYXRlZ29yeV9zZWxlY3RlZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW10gPSBjYXRlZ29yaWVzTGlzdC5tYXAoIChjYXQpID0+ICh7IGxhYmVsOiBjYXQubmFtZSwgdmFsdWU6IGNhdC5pZCB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gc2V0QXR0cmlidXRlcyggeyBjYXRlZ29yeV9zZWxlY3RlZDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJvdMOzbiBkZSBhY2Npw7NuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmFjdGlvbl9wb3N0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gc2V0QXR0cmlidXRlcyggeyBhY3Rpb25fcG9zdDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRXN0aWxvIGRlbCBpdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnR5cGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0NhcmQnLCB2YWx1ZTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ01vZGVybicsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnQ2xhc2ljJywgdmFsdWU6IDIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgdHlwZTogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9eyBhdHRyaWJ1dGVzLmZpbHRlciB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ29tcGxldGU9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBmaWx0ZXIgOiBnZXRSR0JBQ29sb3IodmFsdWUpIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uMCA9IChwb3N0LCBjb2x1bW5XaWR0aCwgaGVpZ2h0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGl0bGVDbGFzc2VzID0gICdzZy1pdGVtLXRpdGxlJztcclxuICAgICAgICAgICAgbGV0IGltYWdlX3VybCA9ICcnXHJcblxyXG4gICAgICAgICAgICBpZighcG9zdC5fZW1iZWRkZWRbJ3dwOmZlYXR1cmVkbWVkaWEnXSl7XHJcbiAgICAgICAgICAgICAgICB0aXRsZUNsYXNzZXMgPSAnc2ctaXRlbS10aXRsZSBuby1pbWFnZSc7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VfdXJsID0gcG9zdC5fZW1iZWRkZWRbJ3dwOmZlYXR1cmVkbWVkaWEnXVswXS5zb3VyY2VfdXJsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2ctaXRlbSBcIiBzdHlsZT17IHsgd2lkdGg6YCR7Y29sdW1uV2lkdGh9JWAgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCIgc3R5bGU9e3toZWlnaHQ6IGhlaWdodH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlX3VybH0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHBvc3QuZXhjZXJwdC5yZW5kZXJlZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0Lmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRyaWJ1dGVzLmFjdGlvbl9wb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb24xID0gKHBvc3QsIGNvbHVtbldpZHRoLCBoZWlnaHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbWFnZV91cmwgPSBwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddID8gcG9zdC5fZW1iZWRkZWRbJ3dwOmZlYXR1cmVkbWVkaWEnXVswXS5zb3VyY2VfdXJsIDogJyc7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2ctaXRlbVwiIHN0eWxlPXsgeyB3aWR0aDpgJHtjb2x1bW5XaWR0aH0lYCB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtLWNvbnRlbnRcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlX3VybH0pYCwgaGVpZ2h0OiBoZWlnaHR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtLWZpbHRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBhdHRyaWJ1dGVzLmZpbHRlcn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57cG9zdC50aXRsZS5yZW5kZXJlZH08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2ctaXRlbS1hY3Rpb25cIiBocmVmPXtwb3N0Lmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2F0dHJpYnV0ZXMuYWN0aW9uX3Bvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb24yID0gKHBvc3QsIGNvbHVtbldpZHRoLCBoZWlnaHQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRpdGxlQ2xhc3NlcyA9ICAnc2ctaXRlbS10aXRsZSc7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZV91cmwgPSAnJ1xyXG5cclxuICAgICAgICAgICAgaWYoIXBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ10pe1xyXG4gICAgICAgICAgICAgICAgdGl0bGVDbGFzc2VzID0gJ3NnLWl0ZW0tdGl0bGUgbm8taW1hZ2UnO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGltYWdlX3VybCA9IHBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ11bMF0uc291cmNlX3VybDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNnLWl0ZW1cIiBzdHlsZT17IHsgd2lkdGg6YCR7Y29sdW1uV2lkdGh9JWAgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbS1ncmFwaGljXCIgc3R5bGU9eyB7IGhlaWdodDogaGVpZ2h0IH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZV91cmx9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aXRsZUNsYXNzZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzZy1pdGVtLWFjdGlvblwiIGhyZWY9e3Bvc3QubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXR0cmlidXRlcy5hY3Rpb25fcG9zdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbldpZHRoID0gKCAxMDAgLyBhdHRyaWJ1dGVzLmNvbHVtbnMgKTtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBhdHRyaWJ1dGVzLmhlaWdodCtcInB4XCI7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWUgfT5cclxuICAgICAgICAgICAgICAgIHtpbnNwZWN0b3JDb250cm9sc31cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BzZy1pdGVtcyBvcHRpb24ke2F0dHJpYnV0ZXMudHlwZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzLm1hcChwb3N0ID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKCBwYXJzZUludChhdHRyaWJ1dGVzLnR5cGUpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjAocG9zdCwgY29sdW1uV2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjEocG9zdCwgY29sdW1uV2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjIocG9zdCwgY29sdW1uV2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24wKHBvc3QsIGNvbHVtbldpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0KCAoc2VsZWN0LCBwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtwb3N0X3Blcl9wYWdlLCBjYXRlZ29yeV9zZWxlY3RlZH0gPSBwcm9wcy5hdHRyaWJ1dGVzO1xyXG4gICAgY29uc3QgeyBnZXRFbnRpdHlSZWNvcmRzIH0gPSBzZWxlY3QoICdjb3JlJyApO1xyXG4gICAgY29uc3QgcXVlcnkgPSB7XHJcbiAgICAgICAgcGVyX3BhZ2U6IHBvc3RfcGVyX3BhZ2UsXHJcbiAgICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcnlfc2VsZWN0ZWQsXHJcbiAgICAgICAgX2VtYmVkOiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvc3RzOiBnZXRFbnRpdHlSZWNvcmRzKCdwb3N0VHlwZScsICdwb3N0JywgcXVlcnkpXHJcbiAgICB9O1xyXG5cclxufSkoU2xvdGhHZWVrUG9zdEVkaXQpO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcclxuXHJcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCAnc2cvcG9zdHMnLCB7XHJcbiAgICB0aXRsZTogXCLDmmx0aW1hcyBlbnRyYWRhc1wiLFxyXG4gICAgaWNvbjogJ3N0YXItZW1wdHknLFxyXG4gICAgY2F0ZWdvcnk6ICdzZycsXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgIF9fKCAnbG9hZCcgKSxcclxuICAgICAgICBfXyggJ0xvYWQgUG9zdCcgKSxcclxuICAgICAgICBfXyggJ2d1dGVuLWxvYWQtcG9zdCcgKSxcclxuICAgIF0sXHJcbiAgICBhdHRyaWJ1dGVzOntcclxuICAgICAgICB0eXBlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5zOntcclxuICAgICAgICAgICAgdHlwZTpcIm51bWJlclwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3N0X3Blcl9wYWdlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDZcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlaWdodDoge1xyXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAyMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhdGVnb3J5X3NlbGVjdGVkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcclxuICAgICAgICAgICAgZGVmYXVsdDogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGlvbl9wb3N0OntcclxuICAgICAgICAgICAgdHlwZTpcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICBkZWZhdWx0OlwiVmVyIG3DoXMuLi5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlsdGVyOntcclxuICAgICAgICAgICAgdHlwZTpcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICBkZWZhdWx0OlwiXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVkaXQsXHJcblxyXG4gICAgc2F2ZSgpe1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG59KTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuXHJcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XHJcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XHJcblxyXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnXHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5cclxucmVnaXN0ZXJCbG9ja1R5cGUoICdzZy9yb3cnLCB7XHJcbiAgICB0aXRsZTogJ1JvdycsXHJcbiAgICBpY29uOiAnc3Rhci1lbXB0eScsXHJcbiAgICBjYXRlZ29yeTogJ3NnJyxcclxuICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBpdHNTZWN0aW9uOntcclxuICAgICAgICAgICAgdHlwZTonYm9vbGVhbicsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhc0NvbnRhaW5lcjp7XHJcbiAgICAgICAgICAgIHR5cGU6J2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdHlsZTp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7fVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZWRpdCxcclxuXHJcbiAgICBzYXZlXHJcbn0gKTsiLCJjb25zdCB7IElubmVyQmxvY2tzLCBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgUGFuZWxCb2R5LCBQYW5lbFJvdywgVG9nZ2xlQ29udHJvbCwgVGFiUGFuZWwgfSA9IHdwLmNvbXBvbmVudHM7XHJcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gPSB3cC5jb21wb3NlO1xyXG5cclxuaW1wb3J0IEVkaXRCYWNrZ3JvdW5kIGZyb20gXCIuLi8uLi9zdHlsZS9FZGl0QmFja2dyb3VuZFwiO1xyXG5pbXBvcnQgRWRpdFNwYWNlRGltZW5zaW9uIGZyb20gXCIuLi8uLi9zdHlsZS9FZGl0U3BhY2VEaW1lbnNpb25cIjtcclxuXHJcbmNvbnN0IHJvd0N1c3RvbUNsYXNzTmFtZSA9IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KChCbG9ja0xpc3RCbG9jaykgPT4ge1xyXG4gICAgcmV0dXJuIHByb3BzID0+IHtcclxuICAgICAgICBpZihwcm9wcy5uYW1lID09IFwic2cvcm93XCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gPEJsb2NrTGlzdEJsb2NrIHsgLi4ucHJvcHMgfSBjbGFzc05hbWU9eyAncm93JyB9IC8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPEJsb2NrTGlzdEJsb2NrIHsgLi4ucHJvcHMgfSAvPlxyXG4gICAgfVxyXG59LCAncm93Q3VzdG9tQ2xhc3NOYW1lJyk7XHJcblxyXG53cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9yb3cnLCByb3dDdXN0b21DbGFzc05hbWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm93RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IEFMTE9XRURfQkxPQ0tTID0gWyAnc2cvY29sdW1uJ107XHJcblxyXG4gICAgICAgIGNvbnN0IHsgY2xpZW50SWQsIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzZWxlY3QgfSA9IHdwLmRhdGE7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmVudEJsb2NrID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzQnlDbGllbnRJZCggY2xpZW50SWQgKVsgMCBdO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkQmxvY2tzID0gcGFyZW50QmxvY2suaW5uZXJCbG9ja3M7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtcHR5QmxvY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggY2hpbGRCbG9ja3MubGVuZ3RoID09IDApe1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctZW1wdHktaW5uZXItYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctYmxvY2stbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtc2NyZWVub3B0aW9uc1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdyZWdhIHVuYSBvIG3DoXMgY29sdW1uYXMgcHJlc2lvbmFuZG8gZWwgYm90w7NuIGRlIGFiYWpvIGNvbiBlbCBzw61tYm9sbyBkZSBtw6FzLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb25TZWxlY3QgPSAoIHRhYk5hbWUgKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coICdTZWxlY3RpbmcgdGFiJywgdGFiTmFtZSApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclRhYjEgPSAgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRvZ2dsZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFjdGl2YXIgc2VjY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlbHA9eyBhdHRyaWJ1dGVzLml0c1NlY3Rpb24gPyAnU2VjY2nDs24uJyA6ICdTb2xvIGZpbGEuJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IGF0dHJpYnV0ZXMuaXRzU2VjdGlvbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoIHsgaXRzU2VjdGlvbjogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VG9nZ2xlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWN0aXZhciBjb250ZW5lZG9yP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVscD17IGF0dHJpYnV0ZXMuaGFzQ29udGFpbmVyID8gJ0NvbnRlbmVkb3IuJyA6ICdTb2xvIGZpbGEuJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IGF0dHJpYnV0ZXMuaGFzQ29udGFpbmVyIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyggeyBoYXNDb250YWluZXI6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFiMiA9ICAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7IEVkaXRCYWNrZ3JvdW5kKHRoaXMucHJvcHMpIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJUYWIzID0gIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsgRWRpdFNwYWNlRGltZW5zaW9uKHRoaXMucHJvcHMpIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJUYWIgPSAodGFiTmFtZSkgPT57XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGFiTmFtZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAndGFiMSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlclRhYjE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAndGFiMic6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlclRhYjI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAndGFiMyc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlclRhYjM7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFiMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9XCJBanVzdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBjbGFzc05hbWU9XCJzZy10YWItcGFuZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlLXRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyBvblNlbGVjdCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFicz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RhYjEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdHZW5lcmFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RhYi1vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndGFiMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0JHJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RhYi10d28nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndGFiMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0RpbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0YWItdGhyZWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggdGFiICkgPT4gcmVuZGVyVGFiKHRhYi5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZWxSb3c+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgZW1wdHlCbG9jaygpLFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctY29udGFpbmVyXCIgc3R5bGU9eyBhdHRyaWJ1dGVzLnN0eWxlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElubmVyQmxvY2tzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckFwcGVuZGVyPXsgKCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwZW5kZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1lZGl0b3ItdGV4dC1ibG9jay1hcHBlbmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctYmxvY2stbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtc2NyZWVub3B0aW9uc1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyQmxvY2tzLkJ1dHRvbkJsb2NrQXBwZW5kZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgSW5uZXJCbG9ja3N9ID0gd3AuYmxvY2tFZGl0b3I7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm93U2F2ZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2NsYXNzTmFtZSwgYXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLmhhc0NvbnRhaW5lciA/XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlclJvdygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUm93KClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuaXRzU2VjdGlvbiA/XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgcm93ICR7Y2xhc3NOYW1lfWB9IHN0eWxlPXsgYXR0cmlidXRlcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSA6XHJcblxyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93ICR7Y2xhc3NOYW1lfWB9IHN0eWxlPXsgYXR0cmlidXRlcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKCByZW5kZXJDb250YWluZXIoKSApO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IE1lZGlhVXBsb2FkIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuY29uc3QgeyBJY29uQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY1BpY2tlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZUJ1dHRvbihvcGVuRXZlbnQsIHVybCwgYWx0LCBvbkNoYW5nZSkge1xyXG4gICAgICAgIGlmKHVybCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyYXBoaWMtcGlja2VyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17IHVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLXRvb2xiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJlZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgb3BlbkV2ZW50IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKG1lZGlhKSA9PiBvbkNoYW5nZSgnJykgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhcGhpYy1waWNrZXItbm8taW1hZ2VcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuRXZlbnQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZm9ybWF0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZ3JlZ2FyXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHt1cmwsIGFsdCwgb25DaGFuZ2V9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lZGlhVXBsb2FkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXItYWxpZ25cIlxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eyAobWVkaWEpID0+IG9uQ2hhbmdlKG1lZGlhKSB9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsgKHsgb3BlbiB9KSA9PiB0aGlzLmdldEltYWdlQnV0dG9uKG9wZW4sIHVybCwgYWx0LCBvbkNoYW5nZSkgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImNvbnN0IHtDb21wb25lbnR9ID0gd3AuZWxlbWVudDtcclxuY29uc3Qge0luc3BlY3RvckNvbnRyb2xzLCBSaWNoVGV4dCwgQmxvY2tDb250cm9scywgQWxpZ25tZW50VG9vbGJhcn0gPSB3cC5ibG9ja0VkaXRvcjtcclxuY29uc3Qge1BhbmVsQm9keSwgUmFuZ2VDb250cm9sLCBDb2xvclBhbGV0dGUsIFRleHRDb250cm9sfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5pbXBvcnQgTWFpbkNvbG9ycyBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhZ3JhcGggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsOiAnJyxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDAwMCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgMCAwIDAnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzAgMCAwIDAnLFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qge3ZhbHVlLCBzdHlsZX0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWw6IHZhbHVlfSk7XHJcblxyXG4gICAgICAgIGlmIChzdHlsZS5tYXJnaW4gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0eWxlOiBzdHlsZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVNUChhcnJheSwgdmFsdWUsIGluZGV4KSB7XHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gYXJyYXkuc3BsaXQoJyAnKTtcclxuICAgICAgICBuZXdWYWx1ZVtpbmRleF0gPSBgJHt2YWx1ZX1gO1xyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZS5qb2luKCcgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7b25DaGFuZ2UsIHZhbHVlLCBwbGFjZWhvbGRlcn0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCB7c3R5bGV9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChbXHJcbiAgICAgICAgICAgICAgICA8QmxvY2tDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8QWxpZ25tZW50VG9vbGJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUudGV4dEFsaWdufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGU6IHsuLi5zdHlsZSwgdGV4dEFsaWduOiB2YWx1ZX19LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Jsb2NrQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9J1DDoXJyYWZvJyBpbml0aWFsT3Blbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRhbWHDsW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BhcnNlSW50KHN0eWxlLmZvbnRTaXplKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdHlsZTogey4uLnN0eWxlLCBmb250U2l6ZTogYCR7dmFsdWV9cHhgfX0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZS10ZXh0LWNvbG9yXCI+Q29sb3IgZGUgdGV4dG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXRleHQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclBhbGV0dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMgPSB7IE1haW5Db2xvcnMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS5jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0eWxlOiB7Li4uc3R5bGUsIGNvbG9yOiBgJHt2YWx1ZX1gfX0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGUtc3BhY2luZ1wiPkVzcGFjaWFkbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWNvbnRyb2wgdGl0bGUtc3BhY2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCB0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUubWFyZ2luLnNwbGl0KCcgJylbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogdGhpcy51cGRhdGVNUChzdHlsZS5tYXJnaW4sIHZhbHVlLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS5tYXJnaW4uc3BsaXQoJyAnKVsxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiB0aGlzLnVwZGF0ZU1QKHN0eWxlLm1hcmdpbiwgdmFsdWUsIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS5tYXJnaW4uc3BsaXQoJyAnKVsyXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiB0aGlzLnVwZGF0ZU1QKHN0eWxlLm1hcmdpbiwgdmFsdWUsIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUubWFyZ2luLnNwbGl0KCcgJylbM119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogdGhpcy51cGRhdGVNUChzdHlsZS5tYXJnaW4sIHZhbHVlLCAzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZGRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUucGFkZGluZy5zcGxpdCgnICcpWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHRoaXMudXBkYXRlTVAoc3R5bGUucGFkZGluZywgdmFsdWUsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUucGFkZGluZy5zcGxpdCgnICcpWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHRoaXMudXBkYXRlTVAoc3R5bGUucGFkZGluZywgdmFsdWUsIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLnBhZGRpbmcuc3BsaXQoJyAnKVsyXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB0aGlzLnVwZGF0ZU1QKHN0eWxlLnBhZGRpbmcsIHZhbHVlLCAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUucGFkZGluZy5zcGxpdCgnICcpWzNdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHRoaXMudXBkYXRlTVAoc3R5bGUucGFkZGluZywgdmFsdWUsIDMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPixcclxuICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWU9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbDogdmFsdWV9LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDb250cm9scz17Wydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17IHBsYWNlaG9sZGVyIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG59IiwiY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMsIFJpY2hUZXh0LCBCbG9ja0NvbnRyb2xzLCBBbGlnbm1lbnRUb29sYmFyIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuY29uc3QgeyBQYW5lbEJvZHksIFJhbmdlQ29udHJvbCwgQ29sb3JQYWxldHRlLCBUZXh0Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmltcG9ydCBNYWluQ29sb3JzIGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbDogJycsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJycsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDAwMCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246J2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMCAwIDAgMCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCAwIDAgMCcsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc3Qge3ZhbHVlLCBzdHlsZX0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWw6IHZhbHVlfSk7XHJcblxyXG4gICAgICAgIGlmIChzdHlsZS5tYXJnaW4gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0eWxlOiBzdHlsZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVNUChhcnJheSwgdmFsdWUsIGluZGV4KXtcclxuICAgICAgICBsZXQgbmV3VmFsdWUgPSBhcnJheS5zcGxpdCgnICcpO1xyXG4gICAgICAgIG5ld1ZhbHVlW2luZGV4XSA9IGAke3ZhbHVlfWA7XHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlLmpvaW4oJyAnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgY29uc3QgeyB0eXBlLCBjbGFzc05hbWUsIG9uQ2hhbmdlLCB2YWx1ZSwgcGxhY2Vob2xkZXIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0ICB7IHN0eWxlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4oW1xyXG4gICAgICAgICAgICAgICAgPEJsb2NrQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFsaWdubWVudFRvb2xiYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLnRleHRBbGlnbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgdGV4dEFsaWduOnZhbHVlIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Jsb2NrQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9J1TDrXR1bG8nIGluaXRpYWxPcGVuPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGFtYcOxb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KHN0eWxlLmZvbnRTaXplKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIGZvbnRTaXplOmAke3ZhbHVlfXB4YCB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlLXRleHQtY29sb3JcIj5Db2xvciBkZSB0ZXh0bzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtdGV4dC1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGFsZXR0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycyA9IHsgTWFpbkNvbG9ycyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBzdHlsZS5jb2xvciB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgY29sb3I6YCR7dmFsdWV9YCB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlLXNwYWNpbmdcIj5Fc3BhY2lhZG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1jb250cm9sIHRpdGxlLXNwYWNpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHN0eWxlLm1hcmdpbi5zcGxpdCgnICcpWzBdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgbWFyZ2luOnRoaXMudXBkYXRlTVAoc3R5bGUubWFyZ2luLCB2YWx1ZSwgMCkgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBzdHlsZS5tYXJnaW4uc3BsaXQoJyAnKVsxXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIG1hcmdpbjp0aGlzLnVwZGF0ZU1QKHN0eWxlLm1hcmdpbiwgdmFsdWUsIDEpIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHN0eWxlLm1hcmdpbi5zcGxpdCgnICcpWzJdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgbWFyZ2luOnRoaXMudXBkYXRlTVAoc3R5bGUubWFyZ2luLCB2YWx1ZSwgMikgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHN0eWxlLm1hcmdpbi5zcGxpdCgnICcpWzNdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgbWFyZ2luOnRoaXMudXBkYXRlTVAoc3R5bGUubWFyZ2luLCB2YWx1ZSwgMykgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZGRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgc3R5bGUucGFkZGluZy5zcGxpdCgnICcpWzBdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBwYWRkaW5nOnRoaXMudXBkYXRlTVAoc3R5bGUucGFkZGluZywgdmFsdWUsIDApIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgc3R5bGUucGFkZGluZy5zcGxpdCgnICcpWzFdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBwYWRkaW5nOnRoaXMudXBkYXRlTVAoc3R5bGUucGFkZGluZywgdmFsdWUsIDEpIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHN0eWxlLnBhZGRpbmcuc3BsaXQoJyAnKVsyXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgcGFkZGluZzp0aGlzLnVwZGF0ZU1QKHN0eWxlLnBhZGRpbmcsIHZhbHVlLCAyKSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgc3R5bGUucGFkZGluZy5zcGxpdCgnICcpWzNdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBwYWRkaW5nOnRoaXMudXBkYXRlTVAoc3R5bGUucGFkZGluZywgdmFsdWUsIDMpIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPixcclxuICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyB2YWw6dmFsdWUgfSwgICgpID0+IG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgdmFsdWUgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDb250cm9scz17IFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10gfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSB7cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiXHJcblxyXG5sZXQgTWFpbkNvbG9ycyA9IFtcclxuICAgIHsgbmFtZTogJ3RyYW5zcGFyZW50JywgY29sb3I6ICd0cmFuc3BhcmVudCcgfSxcclxuICAgIHsgbmFtZTogJ3NnLWRhcmsnLCBjb2xvcjogJyMyYTJmM2YnIH0sXHJcbiAgICB7IG5hbWU6ICdzZy1ncmVlbicsIGNvbG9yOiAnIzI3ZTI5YScgfSxcclxuICAgIHsgbmFtZTogJ3doaXRlJywgY29sb3I6ICcjZmZmZmZmJyB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbG9ycztcclxuXHJcbiIsIi8qKlxyXG4gKiBFbGltaW5hIHBvciBjb21wbGV0byBlbCBlbGVtZW50byBkZSBlc3RpbG8gY3VhbmRvIG5vIHRpZW5lIHZhbG9yLiBFc3RvIGV2aXRhcsOhIGVzdGlsb3NcclxuICogc3VjaW9zIHNpbiB2YWxvciBlbiBlbCBmcm9udGVuZC5cclxuICpcclxuICogQHBhcmFtIGF0dHJpYnV0ZXNcclxuICogQHBhcmFtIHNldEF0dHJpYnV0ZXNcclxuICogQHBhcmFtIGVsZW1lbnRcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sIGVsZW1lbnQsIHZhbHVlPScnKSB7XHJcblxyXG4gICAgaWYodmFsdWUgPT09ICcnKXtcclxuXHJcbiAgICAgICAgbGV0IHN0eWxlID0gYXR0cmlidXRlcy5zdHlsZTtcclxuXHJcbiAgICAgICAgZGVsZXRlIHN0eWxlW2VsZW1lbnRdO1xyXG5cclxuICAgICAgICBzZXRBdHRyaWJ1dGVzKHtzdHlsZTogc3R5bGV9KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UkdCQUNvbG9yKGNvbG9yKXtcclxuXHJcbiAgICByZXR1cm4gYHJnYmEoJHtjb2xvci5yZ2Iucn0sICR7Y29sb3IucmdiLmd9LCAke2NvbG9yLnJnYi5ifSwgJHtjb2xvci5yZ2IuYX0pYDtcclxuXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgQnV0dG9uLCBTZWxlY3RDb250cm9sLCBJY29uQnV0dG9uLCBDb2xvclBhbGV0dGUgfSA9IHdwLmNvbXBvbmVudHM7XHJcbmNvbnN0IHsgTWVkaWFVcGxvYWQgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuaW1wb3J0IHsgc2FuaXRpemVTdHlsZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbGl0aWVzJztcclxuaW1wb3J0IE1haW5Db2xvcnMgZnJvbSAnLi4vaGVscGVycy9jb2xvcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdEJhY2tncm91bmQoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9KXtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlcml6YSBlbCBib3TDs24gbyBsYSBpbWFnZW4gZW4gZWwgc2lkZWJhciBkZSBlZGljacOzblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvcGVuXHJcbiAgICAgKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR8SlNYLkVsZW1lbnRbXX1cclxuICAgICAqL1xyXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlQnV0dG9ucyA9IChvcGVuKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRJbWFnZSAhPT0gJycgJiYgYXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRJbWFnZS5zbGljZSg0LC0xKX0gYWx0PVwiXCIgc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy10b29sYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IG9wZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1N0eWxlID0geyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBiYWNrZ3JvdW5kSW1hZ2U6JycgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlIDogbmV3U3R5bGUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ2JhY2tncm91bmRJbWFnZScpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8taW1hZ2VcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctYnV0dG9uIGZ1bGwgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFncmVnYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2ctc3R5bGUtZWRpdC1iYWNrZ3JvdW5kJz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db2xvciBkZSBGb25kbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Q29sb3JQYWxldHRlXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzID0geyBNYWluQ29sb3JzIH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHtzdHlsZTogey4uLmF0dHJpYnV0ZXMuc3R5bGUsIGJhY2tncm91bmRDb2xvcjogYCR7dmFsdWV9YH19KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdiYWNrZ3JvdW5kQ29sb3InLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkltYWdlbiBkZSBGb25kbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TWVkaWFVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiSW1hZ2VuXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZEltYWdlIH1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17IG1lZGlhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggIHsgc3R5bGU6IHsuLi5hdHRyaWJ1dGVzLnN0eWxlLCBiYWNrZ3JvdW5kSW1hZ2U6YHVybCgke21lZGlhLnVybH0pYCB9IH0gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gYmFja2dyb3VuZEltYWdlQnV0dG9ucyhvcGVuKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGFtYcOxb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZFNpemUgfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnJywgdmFsdWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2NvdmVyJywgdmFsdWU6ICdjb3ZlcicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnY29udGFpbicsIHZhbHVlOiAnY29udGFpbicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnYXV0bycsIHZhbHVlOiAnYXV0bycgfSxcclxuICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBzdHlsZTogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBiYWNrZ3JvdW5kU2l6ZTp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAnYmFja2dyb3VuZFNpemUnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSZXBldGlyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0IH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJycsIHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICduby1yZXBlYXQnLCB2YWx1ZTogJ25vLXJlcGVhdCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAncmVwZWF0JywgdmFsdWU6ICdyZXBlYXQnIH0sXHJcbiAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgc3R5bGU6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgYmFja2dyb3VuZFJlcGVhdDp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCdiYWNrZ3JvdW5kUmVwZWF0JywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBvc2ljacOzblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uIH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJycsIHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdjZW50ZXInLCB2YWx1ZTogJ2NlbnRlcicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAndG9wICcsIHZhbHVlOiAndG9wJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdyaWdodCcsIHZhbHVlOiAncmlnaHQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2xlZnQgJywgdmFsdWU6ICdsZWZ0JyB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnY2VudGVyIHRvcCcsIHZhbHVlOiAnY2VudGVyIHRvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnY2VudGVyIHJpZ2h0JywgdmFsdWU6ICdjZW50ZXIgcmlnaHQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2NlbnRlciBib3R0b20nLCB2YWx1ZTogJ2NlbnRlciBib3R0b20nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2NlbnRlciBsZWZ0JywgdmFsdWU6ICdjZW50ZXIgbGVmdCcgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3RvcCByaWdodCcsIHZhbHVlOiAndG9wIHJpZ2h0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICd0b3AgbGVmdCcsIHZhbHVlOiAndG9wIGxlZnQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3RvcCBjZW50ZXInLCB2YWx1ZTogJ3RvcCBjZW50ZXInIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdib3R0b20gcmlnaHQnLCB2YWx1ZTogJ2JvdHRvbSByaWdodCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnYm90dG9tIGxlZnQnLCB2YWx1ZTogJ2JvdHRvbSBsZWZ0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdib3R0b20gY2VudGVyJywgdmFsdWU6ICdib3R0b20gY2VudGVyJyB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbGVmdCBjZW50ZXInLCB2YWx1ZTogJ2xlZnQgY2VudGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdsZWZ0IHRvcCcsIHZhbHVlOiAnbGVmdCB0b3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2xlZnQgYm90dG9tJywgdmFsdWU6ICdsZWZ0IGJvdHRvbScgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3JpZ2h0IGNlbnRlcicsIHZhbHVlOiAncmlnaHQgY2VudGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdyaWdodCB0b3AnLCB2YWx1ZTogJ3JpZ2h0IHRvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAncmlnaHQgYm90dG9tJywgdmFsdWU6ICdyaWdodCBib3R0b20nIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IHN0eWxlOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIGJhY2tncm91bmRQb3NpdGlvbjp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCdiYWNrZ3JvdW5kUG9zaXRpb24nLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRmlqYWNpw7NuXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kQXR0YWNobWVudCB9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICcnLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnZml4ZWQnLCB2YWx1ZTogJ2ZpeGVkJyB9LFxyXG4gICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IHN0eWxlOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIGJhY2tncm91bmRBdHRhY2htZW50OnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sJ2JhY2tncm91bmRBdHRhY2htZW50JywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJjb25zdCB7IFRleHRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaW1wb3J0IHsgc2FuaXRpemVTdHlsZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbGl0aWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRTcGFjZURpbWVuc2lvbih7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30pe1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlLXNwYWNpbmdcIj5Fc3BhY2lhZG88L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1jb250cm9sIHRpdGxlLXNwYWNpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IGF0dHJpYnV0ZXMuc3R5bGUubWFyZ2luVG9wIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlIDogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBtYXJnaW5Ub3A6dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ21hcmdpblRvcCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IGF0dHJpYnV0ZXMuc3R5bGUubWFyZ2luUmlnaHQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIG1hcmdpblJpZ2h0OnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdtYXJnaW5SaWdodCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBhdHRyaWJ1dGVzLnN0eWxlLm1hcmdpbkJvdHRvbSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgbWFyZ2luQm90dG9tOnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdtYXJnaW5Cb3R0b20nLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IGF0dHJpYnV0ZXMuc3R5bGUubWFyZ2luTGVmdCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgbWFyZ2luTGVmdDp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAnbWFyZ2luTGVmdCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCB0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBhdHRyaWJ1dGVzLnN0eWxlLnBhZGRpbmdUb3AgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgcGFkZGluZ1RvcDp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ3BhZGRpbmdUb3AnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBhdHRyaWJ1dGVzLnN0eWxlLnBhZGRpbmdSaWdodCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlIDogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBwYWRkaW5nUmlnaHQ6dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdwYWRkaW5nUmlnaHQnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgYXR0cmlidXRlcy5zdHlsZS5wYWRkaW5nQm90dG9tIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIHBhZGRpbmdCb3R0b206dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdwYWRkaW5nQm90dG9tJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBhdHRyaWJ1dGVzLnN0eWxlLnBhZGRpbmdMZWZ0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIHBhZGRpbmdMZWZ0OnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAncGFkZGluZ0xlZnQnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=