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
    SelectControl = _wp$components.SelectControl;
var apiFetch = wp.apiFetch;
var addQueryArgs = wp.url.addQueryArgs;
var CATEGORIES_LIST_QUERY = {
  per_page: -1
};

var SlothGeekPostEdit = /*#__PURE__*/function (_Component) {
  _inherits(SlothGeekPostEdit, _Component);

  var _super = _createSuper(SlothGeekPostEdit);

  function SlothGeekPostEdit() {
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
        max: 12,
        required: true
      }), wp.element.createElement(RangeControl, {
        label: "¿Cuantos post?",
        value: attributes.post_per_page,
        onChange: function onChange(value) {
          return setAttributes({
            post_per_page: value
          });
        },
        min: 1,
        max: 9,
        required: true
      }), wp.element.createElement(RangeControl, {
        label: "Alto de la imagen (px)",
        value: attributes.height,
        onChange: function onChange(value) {
          return setAttributes({
            height: value
          });
        },
        min: 1,
        max: 1000,
        required: true
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
          className: "card-image"
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

      var option1 = function option1(post, columnWidth) {
        var image_url = post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : '';
        return wp.element.createElement("li", {
          className: "sg-item",
          style: {
            width: "".concat(columnWidth, "%")
          }
        }, wp.element.createElement("div", {
          className: "sg-item-content",
          style: {
            backgroundImage: "url(".concat(image_url, ")")
          }
        }, wp.element.createElement("div", {
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
            height: "".concat(height, "px")
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
      return wp.element.createElement("div", {
        className: className
      }, inspectorControls, wp.element.createElement("ul", {
        className: "sg-items option".concat(attributes.type)
      }, posts.map(function (post) {
        switch (parseInt(attributes.type)) {
          case 0:
            return option0(post, columnWidth);
            break;

          case 1:
            return option1(post, columnWidth);
            break;

          case 2:
            return option2(post, columnWidth, attributes.height);
            break;

          default:
            return option0(post, columnWidth);
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
  return {
    posts: select('core').getEntityRecords('postType', 'post', {
      per_page: post_per_page,
      categories: category_selected,
      _embed: true
    })
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
    post_per_page: {
      "type": "string",
      "default": 6
    },
    height: {
      "type": "string",
      "default": 200
    },
    category_selected: {
      "type": "array",
      "default": []
    },
    action_post: {
      "type": "string",
      "default": "Ver más..."
    },
    columns: {
      type: "string",
      "default": 3
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
/*! exports provided: sanitizeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeStyle", function() { return sanitizeStyle; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY2FyZC9jYXJkLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2NhcmQvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY2FyZC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2NvbHVtbi9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9jb2x1bW4vZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9jb2x1bW4vZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY29sdW1uL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY29sdW1uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FsbGVyeS9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2dhbGxlcnkvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FsbGVyeS9nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2dhbGxlcnkvc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9nYWxsZXJ5L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FuaW1hdGlvbi9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9nYW5pbWF0aW9uL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FuaW1hdGlvbi9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9nYW5pbWF0aW9uL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FuaW1hdGlvbi9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2hvdGdyYXBoaWMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvaG90Z3JhcGhpYy9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2hvdGdyYXBoaWMvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvaG90Z3JhcGhpYy9zYXZlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2hvdGdyYXBoaWMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9wb3N0cy9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Bvc3RzL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Bvc3RzL3Bvc3RzLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Bvc3RzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3Mvcm93L2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Jvdy9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Jvdy9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9yb3cvc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9yb3cvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2NvbXBvbmVudHMvR3JhcGhpY1BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2NvbXBvbmVudHMvUGFyYWdyYXBoLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvY29tcG9uZW50cy9UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvaGVscGVycy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9oZWxwZXJzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9zdHlsZS9FZGl0QmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3N0eWxlL0VkaXRTcGFjZURpbWVuc2lvbi5qcyJdLCJuYW1lcyI6WyJyZWdpc3RlckJsb2NrVHlwZSIsIndwIiwiYmxvY2tzIiwiY29tcG9uZW50cyIsIlRleHRDb250cm9sIiwiSWNvbkJ1dHRvbiIsIlBhbmVsQm9keSIsIlNlbGVjdENvbnRyb2wiLCJDaGVja2JveENvbnRyb2wiLCJDb2xvclBhbGV0dGUiLCJibG9ja0VkaXRvciIsIlJpY2hUZXh0IiwiSW5zcGVjdG9yQ29udHJvbHMiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJ0eXBlIiwiY2FyZEludmVyc2UiLCJ2YWwiLCJzdHlsZSIsInBhcmFncmFwaCIsImltYWdlIiwidXJsIiwiYWx0IiwiYnV0dG9ucyIsImZsb2F0aW5ncyIsImVkaXQiLCJzZXRBdHRyaWJ1dGVzIiwidXBkYXRlQnV0dG9uIiwiYnV0dG9uIiwiY29uY2F0IiwiY2xvbmVBcnJheSIsImZpbHRlciIsIml0ZW1GaWx0ZXIiLCJpbmRleCIsInVwZGF0ZUZsb2F0aW5nIiwicmVtb3ZlRmxvYXRpbmdCdXR0b24iLCJyZW5kZXJGbG9hdGluZ3MiLCJzb3J0IiwiYSIsImIiLCJtYXAiLCJidG4iLCJsYWJlbCIsInZhbHVlIiwiZGlzcGxheUxpbmsiLCJocmVmIiwiZGlzcGxheSIsInJlbmRlckJ1dHRvbnMiLCJyZW1vdmVMaW5rQnV0dG9uIiwiYWRkRmxvYXRpbmdCdXR0b24iLCJidG5saW5rIiwibGVuZ3RoIiwiYWRkTGlua0J1dHRvbiIsImFyciIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJhcnIyIiwiZnJvbSIsImluc3BlY3RvckNvbnRyb2wiLCJNYWluQ29sb3JzIiwiYmFja2dyb3VuZENvbG9yIiwiZ2V0QmFzaWNDYXJkIiwiZ2V0SW1hZ2VDYXJkIiwiY2FyZEltYWdlIiwibWVkaWEiLCJjYXJkQ29udGVudCIsInJlbmRlckNvbnRlbnQiLCJnZXRDYXJkIiwic2F2ZSIsImdldENhcmRBY3Rpb25zIiwiZ2V0RmxvYXRpbmdBY3Rpb25zIiwiaGFzQ29udGFpbmVyIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsIm9mZnNldFNtYWxsIiwib2Zmc2V0TWVkaXVtIiwib2Zmc2V0TGFyZ2UiLCJJbm5lckJsb2NrcyIsIlBhbmVsUm93IiwiVGFiUGFuZWwiLCJDb21wb25lbnQiLCJlbGVtZW50IiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJjb21wb3NlIiwiY2xhc3NlcyIsIkNvbHVtbkVkaXQiLCJhcmd1bWVudHMiLCJjbGllbnRJZCIsInByb3BzIiwic2VsZWN0IiwiZGF0YSIsInBhcmVudEJsb2NrIiwiZ2V0QmxvY2tzQnlDbGllbnRJZCIsImNoaWxkQmxvY2tzIiwiaW5uZXJCbG9ja3MiLCJlbXB0eUJsb2NrIiwiY2xhc3NOYW1lIiwicmVuZGVyVGFiMSIsImhvb2tzIiwiYWRkRmlsdGVyIiwiY29sdW1uQ3VzdG9tQ2xhc3NOYW1lIiwicmVuZGVyVGFiMiIsIkVkaXRCYWNrZ3JvdW5kIiwicmVuZGVyVGFiMyIsIkVkaXRTcGFjZURpbWVuc2lvbiIsInJlbmRlclRhYiIsInRhYk5hbWUiLCJuYW1lIiwidGFiIiwiQmxvY2tMaXN0QmxvY2siLCJSb3dTYXZlIiwiQmxvY2tDb250cm9scyIsIlBsYWluVGV4dCIsIlJhbmdlQ29udHJvbCIsIlNsb3RoR2Vla0dhbGxlcnlFZGl0IiwiY29uc29sZSIsImxvZyIsImdyaWRfY291bnQiLCJpdGVtIiwibW9kZWwiLCJuZXdPYmplY3QiLCJPYmplY3QiLCJhc3NpZ24iLCJpdGVtcyIsImNvbHVtbldpZHRoIiwid2lkdGgiLCJvbkNoYW5nZUV2ZW50IiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsInJlbmRlckl0ZW1zIiwicmVuZGVyRWRpdEl0ZW0iLCJpbnNwZWN0b3JDb250cm9scyIsIl9fIiwiaTE4biIsInNvdXJjZSIsImF0dHJpYnV0ZSIsInNlbGVjdG9yIiwicXVlcnkiLCJTbG90aEdlZWtHYWxsZXJ5U2F2ZSIsInJlbmRlckl0ZW0iLCJpZCIsImhlaWdodCIsIm1heFdpZHRoIiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImdyYXBoaWNVcmwiLCJncmFjcGhpY0FsdCIsImJvdHRvbSIsImxlZnQiLCJibG9ja0NvbnRyb2xzIiwicHVzaE5ld0l0ZW0iLCJwYXJzZUludCIsInVwZGF0ZUl0ZW0iLCJ6SW5kZXgiLCJncmFwaGljQWx0IiwiVGV4dGFyZWFDb250cm9sIiwiYm9keSIsInBvc2l0aW9uIiwidG9wIiwid2l0aFNlbGVjdCIsImFwaUZldGNoIiwiYWRkUXVlcnlBcmdzIiwiQ0FURUdPUklFU19MSVNUX1FVRVJZIiwicGVyX3BhZ2UiLCJTbG90aEdlZWtQb3N0RWRpdCIsInN0YXRlIiwiY2F0ZWdvcmllc0xpc3QiLCJpc1N0aWxsTW91bnRlZCIsImZldGNoUmVxdWVzdCIsInBhdGgiLCJ0aGVuIiwic2V0U3RhdGUiLCJwb3N0cyIsImNvbHVtbnMiLCJwb3N0X3Blcl9wYWdlIiwiY2F0ZWdvcnlfc2VsZWN0ZWQiLCJjYXQiLCJhY3Rpb25fcG9zdCIsIm9wdGlvbjAiLCJwb3N0IiwidGl0bGVDbGFzc2VzIiwiaW1hZ2VfdXJsIiwiX2VtYmVkZGVkIiwic291cmNlX3VybCIsInJlbmRlcmVkIiwiZXhjZXJwdCIsImxpbmsiLCJvcHRpb24xIiwiYmFja2dyb3VuZEltYWdlIiwib3B0aW9uMiIsImdldEVudGl0eVJlY29yZHMiLCJjYXRlZ29yaWVzIiwiX2VtYmVkIiwia2V5d29yZHMiLCJpdHNTZWN0aW9uIiwiVG9nZ2xlQ29udHJvbCIsInJvd0N1c3RvbUNsYXNzTmFtZSIsIlJvd0VkaXQiLCJBTExPV0VEX0JMT0NLUyIsIm9uU2VsZWN0IiwicmVuZGVyQ29udGFpbmVyIiwicmVuZGVyUm93IiwiTWVkaWFVcGxvYWQiLCJHcmFwaGljUGlja2VyIiwib3BlbkV2ZW50Iiwib25DaGFuZ2UiLCJvcGVuIiwiZ2V0SW1hZ2VCdXR0b24iLCJBbGlnbm1lbnRUb29sYmFyIiwiUGFyYWdyYXBoIiwiZm9udFNpemUiLCJjb2xvciIsInRleHRBbGlnbiIsIm1hcmdpbiIsInBhZGRpbmciLCJ1bmRlZmluZWQiLCJhcnJheSIsIm5ld1ZhbHVlIiwic3BsaXQiLCJqb2luIiwicGxhY2Vob2xkZXIiLCJ1cGRhdGVNUCIsIlRpdGxlIiwic2FuaXRpemVTdHlsZSIsIkJ1dHRvbiIsImJhY2tncm91bmRJbWFnZUJ1dHRvbnMiLCJzbGljZSIsIm5ld1N0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFD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QUFDO0FBQWYsS0FDSSx5QkFBQyxXQUFEO0FBQ0ksU0FBSyxFQUFLN0IsVUFBVSxDQUFDSSxLQUFYLENBQWlCZ08sV0FEL0I7QUFFSSxZQUFRLEVBQUcsa0JBQUV2TSxLQUFGLEVBQWE7QUFDcEJqQixtQkFBYSxDQUFFO0FBQUVSLGFBQUssa0NBQVFKLFVBQVUsQ0FBQ0ksS0FBbkI7QUFBMEJnTyxxQkFBVyxFQUFDdk07QUFBdEM7QUFBUCxPQUFGLENBQWI7QUFDQXVMLDhFQUFhLENBQUM7QUFBQ3BOLGtCQUFVLEVBQVZBLFVBQUQ7QUFBYVkscUJBQWEsRUFBYkE7QUFBYixPQUFELEVBQThCLGFBQTlCLEVBQTZDaUIsS0FBN0MsQ0FBYjtBQUNIO0FBTEwsSUFESixDQTVCSixDQXJDSixDQURKLENBRkosQ0FESjtBQW1GSCxDIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCJpbXBvcnQgJy4vZWRpdG9yLnNjc3MnXHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5cclxuXHJcbi8vaW1wb3J0ICcuL2Jsb2Nrcy90YWJzL2Jsb2NrJztcclxuLy9pbXBvcnQgJy4vYmxvY2tzL3Bvc3RzL3Bvc3RzJztcclxuLy9pbXBvcnQgJy4vYmxvY2tzL2dhbGxlcnkvZ2FsbGVyeSc7XHJcbi8vaW1wb3J0ICcuL2Jsb2Nrcy9jb250YWluZXIvY29udGFpbmVyJztcclxuLy9pbXBvcnQgJy4vYmxvY2tzL2hvdGdyYXBoaWMvYmxvY2snO1xyXG4vL2ltcG9ydCAnLi9ibG9ja3MvZ2FuaW1hdGlvbi9ibG9jayc7XHJcblxyXG5pbXBvcnQgJy4vYmxvY2tzL3Jvdy9ibG9jayc7XHJcbmltcG9ydCAnLi9ibG9ja3MvY29sdW1uL2Jsb2NrJztcclxuXHJcblxyXG5pbXBvcnQgJy4vYmxvY2tzL2NhcmQvY2FyZCc7XHJcbmltcG9ydCAnLi9ibG9ja3MvZ2FsbGVyeS9nYWxsZXJ5JztcclxuaW1wb3J0ICcuL2Jsb2Nrcy9ob3RncmFwaGljL2Jsb2NrJztcclxuaW1wb3J0ICcuL2Jsb2Nrcy9wb3N0cy9wb3N0cyc7XHJcbmltcG9ydCAnLi9ibG9ja3MvZ2FuaW1hdGlvbi9ibG9jayc7XHJcblxyXG5cclxuIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xyXG5jb25zdCB7IFRleHRDb250cm9sLCBJY29uQnV0dG9uLCBQYW5lbEJvZHksIFNlbGVjdENvbnRyb2wsIENoZWNrYm94Q29udHJvbCwgQ29sb3JQYWxldHRlIH0gPSB3cC5jb21wb25lbnRzO1xyXG5jb25zdCB7IFJpY2hUZXh0LCBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcblxyXG5pbXBvcnQgIFRpdGxlICBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RpdGxlJztcclxuaW1wb3J0ICBQYXJhZ3JhcGggIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFyYWdyYXBoJztcclxuaW1wb3J0ICBHcmFwaGljUGlja2VyICBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dyYXBoaWNQaWNrZXInO1xyXG5pbXBvcnQgTWFpbkNvbG9ycyBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbG9ycydcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xyXG5cclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCdzZy9jYXJkJywge1xyXG4gICAgdGl0bGU6ICdDYXJkJyxcclxuICAgIGljb246ICdzdGFyLWVtcHR5JyxcclxuICAgIGNhdGVnb3J5OiAnc2cnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIHR5cGU6e1xyXG4gICAgICAgICAgICB0eXBlOidzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnYmFzaWMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXJkSW52ZXJzZTp7XHJcbiAgICAgICAgICAgIHR5cGU6J2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZTp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB2YWw6J0xvcmVtIElwc3VtJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOnt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcmFncmFwaDp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB2YWw6J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFN1c3BlbmRpc3NlIGNvbnNlcXVhdCBlbmltIHZlbCBsaWd1bGEgc3VzY2lwaXQgc2VtcGVyLiBOdW5jIGJsYW5kaXQsIG1hZ25hIHZpdGFlIGV1aXNtb2QgbW9sZXN0aWUsIG5pYmggbmVxdWUgcHVsdmluYXIgZXJhdCwgZGljdHVtIGVnZXN0YXMgbWFnbmEgdXJuYSBpZCBhcmN1LicsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTp7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZTp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB1cmw6JycsXHJcbiAgICAgICAgICAgICAgICBhbHQ6JydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnV0dG9uczp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmbG9hdGluZ3M6e1xyXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3R5bGU6e1xyXG4gICAgICAgICAgICB0eXBlOidvYmplY3QnLFxyXG4gICAgICAgICAgICBkZWZhdWx0Ont9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0KCB7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30gKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IChidXR0b24pID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtdLmNvbmNhdChjbG9uZUFycmF5KGF0dHJpYnV0ZXMuYnV0dG9ucy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW1GaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbUZpbHRlci5pbmRleCAhPSBidXR0b24uaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9KSksIFtidXR0b25dKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1cGRhdGVGbG9hdGluZyA9IChidXR0b24pID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nczogW10uY29uY2F0KGNsb25lQXJyYXkoYXR0cmlidXRlcy5mbG9hdGluZ3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gYnV0dG9uLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgfSkpLCBbYnV0dG9uXSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlRmxvYXRpbmdCdXR0b24gPSAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nczogYXR0cmlidXRlcy5mbG9hdGluZ3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gdmFsO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJGbG9hdGluZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLmZsb2F0aW5ncy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgICAgIH0pLm1hcCggYnRuID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWZsb2F0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctYnV0dG9uLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYnRuLmxhYmVsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4gdXBkYXRlRmxvYXRpbmcoIHsuLi5idG4sIGxhYmVsOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1RleHRvIGRlbCBib3TDs24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmUgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRtaW4tbGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IGJ0bi5kaXNwbGF5TGluayA9PSAnbm9uZScgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZsb2F0aW5nKHsuLi5idG4sIGRpc3BsYXlMaW5rOiB2YWx9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gcmVtb3ZlRmxvYXRpbmdCdXR0b24oYnRuLmluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZy1idXR0b24taHJlZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHVwZGF0ZUZsb2F0aW5nKCB7Li4uYnRuLCBocmVmOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBidG4uaHJlZiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHtkaXNwbGF5OiBidG4uZGlzcGxheUxpbmt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5idXR0b25zLnNvcnQoZnVuY3Rpb24oYSAsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICAgICAgfSkubWFwKCBidG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctYnV0dG9uLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYnRuLmxhYmVsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4gdXBkYXRlQnV0dG9uKCB7Li4uYnRuLCBsYWJlbDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUZXh0byBkZWwgYm90w7NuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkbWluLWxpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBidG4uZGlzcGxheUxpbmsgPT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCdXR0b24oey4uLmJ0biwgZGlzcGxheUxpbms6IHZhbH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiByZW1vdmVMaW5rQnV0dG9uKGJ0bi5pbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctYnV0dG9uLWhyZWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB2YWx1ZSA9PiB1cGRhdGVCdXR0b24oIHsuLi5idG4sIGhyZWY6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGJ0bi5ocmVmIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsge2Rpc3BsYXk6IGJ0bi5kaXNwbGF5TGlua30gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9IClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZEZsb2F0aW5nQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnRubGluayA9IHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBhdHRyaWJ1dGVzLmZsb2F0aW5ncy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0FkZCBsYWJlbCcsXHJcbiAgICAgICAgICAgICAgICBocmVmOicjJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlMaW5rOiAnbm9uZSdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICAgICAgZmxvYXRpbmdzOiBbXS5jb25jYXQoY2xvbmVBcnJheShhdHRyaWJ1dGVzLmZsb2F0aW5ncyksIFtidG5saW5rXSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZW1vdmVMaW5rQnV0dG9uID0gKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBhdHRyaWJ1dGVzLmJ1dHRvbnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gdmFsO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRMaW5rQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnRubGluayA9IHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBhdHRyaWJ1dGVzLmJ1dHRvbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdBZGQgbGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgaHJlZjonIycsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TGluazogJ25vbmUnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtdLmNvbmNhdChjbG9uZUFycmF5KGF0dHJpYnV0ZXMuYnV0dG9ucyksIFtidG5saW5rXSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjbG9uZUFycmF5ID0gKGFycikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyMltpXSA9IGFycltpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnIyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5zcGVjdG9yQ29udHJvbCA9ICgpID0+e1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9J0Rpc2XDsW8nIGluaXRpYWxPcGVuPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ2FyZCBzdHlsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50eXBlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHsgc2V0QXR0cmlidXRlcyggeyB0eXBlOiB2YWx1ZSB9ICkgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdiYXNpYycsIGxhYmVsOiAnQmFzaWMgQ2FyZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnaW1hZ2UnLCBsYWJlbDogJ0ltYWdlIENhcmQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbnZlcnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmNhcmRJbnZlcnNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhcmRJbnZlcnNlOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQYWxldHRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMgPSB7IE1haW5Db2xvcnMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRDb2xvciB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgYmFja2dyb3VuZENvbG9yOmAke3ZhbHVlfWAgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0QmFzaWNDYXJkID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXthdHRyaWJ1dGVzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IHZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlLnZhbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IGF0dHJpYnV0ZXMudGl0bGUuc3R5bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ3JlZ2EgdW4gdMOtdHVsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKHsgcGFyYWdyYXBoOiB2YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5wYXJhZ3JhcGgudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgYXR0cmlidXRlcy5wYXJhZ3JhcGguc3R5bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ3JlZ2EgYXF1w60gZWwgY3VlcnBvIGRlIGxhIHRhcmpldGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1jYXJkLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1cy1hbHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBhZGRMaW5rQnV0dG9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuYnV0dG9ucy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubWFwKCBidG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbi1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBidG4ubGFiZWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4gdXBkYXRlQnV0dG9uKCB7Li4uYnRuLCBsYWJlbDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVGV4dG8gZGVsIGJvdMOzbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmUgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRtaW4tbGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IGJ0bi5kaXNwbGF5TGluayA9PSAnbm9uZScgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCdXR0b24oey4uLmJ0biwgZGlzcGxheUxpbms6IHZhbH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gcmVtb3ZlTGlua0J1dHRvbihidG4uaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbi1ocmVmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHVwZGF0ZUJ1dHRvbiggey4uLmJ0biwgaHJlZjogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGJ0bi5ocmVmIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHtkaXNwbGF5OiBidG4uZGlzcGxheUxpbmt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0SW1hZ2VDYXJkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkSW1hZ2UgPSAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JhcGhpY1BpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG1lZGlhID0+IHNldEF0dHJpYnV0ZXMoIHsgaW1hZ2U6IG1lZGlhIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17YXR0cmlidXRlcy5pbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YXR0cmlidXRlcy5pbWFnZS5hbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1mbG9hdGluZy1hY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXMtYWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gYWRkRmxvYXRpbmdCdXR0b24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckZsb2F0aW5ncygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkQ29udGVudCA9IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiB2YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlLnZhbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgYXR0cmlidXRlcy50aXRsZS5zdHlsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdyZWdhIHVuIHTDrXR1bG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKHsgcGFyYWdyYXBoOiB2YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnBhcmFncmFwaC52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IGF0dHJpYnV0ZXMucGFyYWdyYXBoLnN0eWxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ3JlZ2EgYXF1w60gZWwgY3VlcnBvIGRlIGxhIHRhcmpldGFcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGF0dHJpYnV0ZXMuY2FyZEludmVyc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkQ29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRDb250ZW50XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17YXR0cmlidXRlcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyByZW5kZXJDb250ZW50KCkgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1jYXJkLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1cy1hbHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBhZGRMaW5rQnV0dG9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckJ1dHRvbnMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0Q2FyZCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoYXR0cmlidXRlcy50eXBlKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Jhc2ljJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QmFzaWNDYXJkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0SW1hZ2VDYXJkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yQ29udHJvbCgpLFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay1zZy1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBnZXRDYXJkKCkgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2F2ZSh7YXR0cmlidXRlc30pIHtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0Q2FyZEFjdGlvbnMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihhdHRyaWJ1dGVzLmJ1dHRvbnMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmJ1dHRvbnMubWFwKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YnV0dG9uLmhyZWZ9PntidXR0b24ubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldEZsb2F0aW5nQWN0aW9ucyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKGF0dHJpYnV0ZXMuZmxvYXRpbmdzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmZsb2F0aW5ncy5tYXAoYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IGBidG4tZmxvYXRpbmcgaGFsZndheS1mYWIgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IG5vLXJhZGl1cyBhdXRvLXdpZHRoICR7IGF0dHJpYnV0ZXMuY2FyZEludmVyc2UgPyAndG9wJyA6ICcnfWAgfSBocmVmPXtidXR0b24uaHJlZn0+e2J1dHRvbi5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldEJhc2ljQ2FyZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2F0dHJpYnV0ZXMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lPSdoMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FyZC10aXRsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZS52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2F0dHJpYnV0ZXMudGl0bGUuc3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2F0dHJpYnV0ZXMucGFyYWdyYXBoLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnBhcmFncmFwaC52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgZ2V0Q2FyZEFjdGlvbnMoKSB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0SW1hZ2VDYXJkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkSW1hZ2UgPSAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXR0cmlidXRlcy5pbWFnZS51cmx9IGFsdD17YXR0cmlidXRlcy5pbWFnZS5hbHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0RmxvYXRpbmdBY3Rpb25zKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZENvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU9J2gzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQtdGl0bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZS52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YXR0cmlidXRlcy50aXRsZS5zdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2F0dHJpYnV0ZXMucGFyYWdyYXBoLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0LkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5wYXJhZ3JhcGgudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoYXR0cmlidXRlcy5jYXJkSW52ZXJzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZENvbnRlbnRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2F0dHJpYnV0ZXMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ29udGVudCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q2FyZEFjdGlvbnMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldENhcmQgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGF0dHJpYnV0ZXMudHlwZSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdiYXNpYyc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEJhc2ljQ2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEltYWdlQ2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIGdldENhcmQoKVxyXG4gICAgICAgIClcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XHJcblxyXG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnO1xyXG5cclxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCAnc2cvY29sdW1uJywge1xyXG4gICAgdGl0bGU6ICdDb2x1bW4nLFxyXG4gICAgaWNvbjogJ3N0YXItZW1wdHknLFxyXG4gICAgY2F0ZWdvcnk6ICdzZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgaGFzQ29udGFpbmVyOntcclxuICAgICAgICAgICAgdHlwZTonYm9vbGVhbicsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNtYWxsOntcclxuICAgICAgICAgICAgdHlwZTonc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDonczEyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVkaXVtOntcclxuICAgICAgICAgICAgdHlwZTonc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDonJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFyZ2U6e1xyXG4gICAgICAgICAgICB0eXBlOidzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OicnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvZmZzZXRTbWFsbDp7XHJcbiAgICAgICAgICAgIHR5cGU6J3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6JydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9mZnNldE1lZGl1bTp7XHJcbiAgICAgICAgICAgIHR5cGU6J3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6JydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9mZnNldExhcmdlOntcclxuICAgICAgICAgICAgdHlwZTonc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDonJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3R5bGU6e1xyXG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICAgICAgZGVmYXVsdDoge31cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVkaXQsXHJcblxyXG4gICAgc2F2ZVxyXG59ICk7IiwiaW1wb3J0IEVkaXRCYWNrZ3JvdW5kIGZyb20gXCIuLi8uLi9zdHlsZS9FZGl0QmFja2dyb3VuZFwiO1xyXG5pbXBvcnQgRWRpdFNwYWNlRGltZW5zaW9uIGZyb20gXCIuLi8uLi9zdHlsZS9FZGl0U3BhY2VEaW1lbnNpb25cIjtcclxuXHJcbmNvbnN0IHsgSW5uZXJCbG9ja3MsIEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuY29uc3QgeyBTZWxlY3RDb250cm9sLCBQYW5lbEJvZHksIFBhbmVsUm93LCBUYWJQYW5lbCB9ID0gd3AuY29tcG9uZW50cztcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gPSB3cC5jb21wb3NlO1xyXG5cclxubGV0IGNsYXNzZXMgPSBcIlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sdW1uRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgY2xpZW50SWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzZWxlY3QgfSA9IHdwLmRhdGE7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmVudEJsb2NrID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzQnlDbGllbnRJZCggY2xpZW50SWQgKVsgMCBdO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkQmxvY2tzID0gcGFyZW50QmxvY2suaW5uZXJCbG9ja3M7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtcHR5QmxvY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggY2hpbGRCbG9ja3MubGVuZ3RoID09IDApe1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWVtcHR5LWlubmVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctYmxvY2stbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXNoaWNvbnMgZGFzaGljb25zLXNjcmVlbm9wdGlvbnNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbWllbnphIGEgYXJtYXIgdHUgY29udGVuaWRvIGNvbiB1bm8gbyBtw6FzIGJsb3F1ZXMgZGUgbGEgbGlicmVyw61hIHByZXNpb25hbmRvIGVuIGVsIGJvdMOzbiBtw6FzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7Y2xhc3NOYW1lLCBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNsYXNzZXMgPSBhdHRyaWJ1dGVzLnNtYWxsO1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJUYWIxID0gIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnNtYWxsIH1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczEnLCB2YWx1ZTogJ3MxJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczInLCB2YWx1ZTogJ3MyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczMnLCB2YWx1ZTogJ3MzJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczQnLCB2YWx1ZTogJ3M0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczUnLCB2YWx1ZTogJ3M1JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczYnLCB2YWx1ZTogJ3M2JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczcnLCB2YWx1ZTogJ3M3JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczgnLCB2YWx1ZTogJ3M4JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczknLCB2YWx1ZTogJ3M5JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczEwJywgdmFsdWU6ICdzMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdzMTEnLCB2YWx1ZTogJ3MxMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3MxMicsIHZhbHVlOiAnczEyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzbWFsbDogdmFsdWUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpdW0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICctJywgdmFsdWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtMScsIHZhbHVlOiAnbTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtMicsIHZhbHVlOiAnbTInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtMycsIHZhbHVlOiAnbTMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtNCcsIHZhbHVlOiAnbTQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtNScsIHZhbHVlOiAnbTUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtNicsIHZhbHVlOiAnbTYnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtNycsIHZhbHVlOiAnbTcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtOCcsIHZhbHVlOiAnbTgnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtOScsIHZhbHVlOiAnbTknIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtMTAnLCB2YWx1ZTogJ20xMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ20xMScsIHZhbHVlOiAnbTExJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTEyJywgdmFsdWU6ICdtMTInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IG1lZGl1bTogdmFsdWUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmxhcmdlIH1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnLScsIHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDEnLCB2YWx1ZTogJ2wxJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDInLCB2YWx1ZTogJ2wyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDMnLCB2YWx1ZTogJ2wzJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDQnLCB2YWx1ZTogJ2w0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDUnLCB2YWx1ZTogJ2w1JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDYnLCB2YWx1ZTogJ2w2JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDcnLCB2YWx1ZTogJ2w3JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDgnLCB2YWx1ZTogJ2w4JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDknLCB2YWx1ZTogJ2w5JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDEwJywgdmFsdWU6ICdsMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdsMTEnLCB2YWx1ZTogJ2wxMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2wxMicsIHZhbHVlOiAnbDEyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBsYXJnZTogdmFsdWUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPZmZzZXQgc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5vZmZzZXRTbWFsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJy0nLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zMScsIHZhbHVlOiAnb2Zmc2V0LXMxJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXMyJywgdmFsdWU6ICdvZmZzZXQtczInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczMnLCB2YWx1ZTogJ29mZnNldC1zMycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zNCcsIHZhbHVlOiAnb2Zmc2V0LXM0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXM1JywgdmFsdWU6ICdvZmZzZXQtczUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczYnLCB2YWx1ZTogJ29mZnNldC1zNicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zNycsIHZhbHVlOiAnb2Zmc2V0LXM3JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXM4JywgdmFsdWU6ICdvZmZzZXQtczgnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczknLCB2YWx1ZTogJ29mZnNldC1zOScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zMTAnLCB2YWx1ZTogJ29mZnNldC1zMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczExJywgdmFsdWU6ICdvZmZzZXQtczExJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXMxMicsIHZhbHVlOiAnb2Zmc2V0LXMxMicgfSxcclxuICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgb2Zmc2V0U21hbGw6IHZhbHVlIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnc2cvY29sdW1uJywgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT2Zmc2V0IG1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLm9mZnNldE1lZGl1bSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJy0nLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tMScsIHZhbHVlOiAnb2Zmc2V0LW0xJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW0yJywgdmFsdWU6ICdvZmZzZXQtbTInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTMnLCB2YWx1ZTogJ29mZnNldC1tMycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tNCcsIHZhbHVlOiAnb2Zmc2V0LW00JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW01JywgdmFsdWU6ICdvZmZzZXQtbTUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTYnLCB2YWx1ZTogJ29mZnNldC1tNicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tNycsIHZhbHVlOiAnb2Zmc2V0LW03JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW04JywgdmFsdWU6ICdvZmZzZXQtbTgnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTknLCB2YWx1ZTogJ29mZnNldC1tOScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tMTAnLCB2YWx1ZTogJ29mZnNldC1tMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTExJywgdmFsdWU6ICdvZmZzZXQtbTExJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW0xMicsIHZhbHVlOiAnb2Zmc2V0LW0xMicgfSxcclxuICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgb2Zmc2V0TWVkaXVtOiB2YWx1ZSB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdwLmhvb2tzLmFkZEZpbHRlcignZWRpdG9yLkJsb2NrTGlzdEJsb2NrJywgJ3NnL2NvbHVtbicsIGNvbHVtbkN1c3RvbUNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9mZnNldCBsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLm9mZnNldExhcmdlIH1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnLScsIHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWwxJywgdmFsdWU6ICdvZmZzZXQtbDEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDInLCB2YWx1ZTogJ29mZnNldC1sMicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sMycsIHZhbHVlOiAnb2Zmc2V0LWwzJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWw0JywgdmFsdWU6ICdvZmZzZXQtbDQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDUnLCB2YWx1ZTogJ29mZnNldC1sNScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sNicsIHZhbHVlOiAnb2Zmc2V0LWw2JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWw3JywgdmFsdWU6ICdvZmZzZXQtbDcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDgnLCB2YWx1ZTogJ29mZnNldC1sOCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sOScsIHZhbHVlOiAnb2Zmc2V0LWw5JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWwxMCcsIHZhbHVlOiAnb2Zmc2V0LWwxMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sMTEnLCB2YWx1ZTogJ29mZnNldC1sMTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDEyJywgdmFsdWU6ICdvZmZzZXQtbDEyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBvZmZzZXRMYXJnZTogdmFsdWUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclRhYjIgPSAgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgeyBFZGl0QmFja2dyb3VuZCh0aGlzLnByb3BzKSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFiMyA9ICAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7IEVkaXRTcGFjZURpbWVuc2lvbih0aGlzLnByb3BzKSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFiID0gKHRhYk5hbWUpID0+e1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRhYk5hbWUpe1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYjEnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYjInOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYjMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlclRhYjE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPVwiQWp1c3Rlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwic2ctdGFiLXBhbmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZS10YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0YWIxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnR3JpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0YWItb25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RhYjInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCRycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0YWItdHdvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RhYjMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEaW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFiLXRocmVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHRhYiApID0+IHJlbmRlclRhYih0YWIubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmVsUm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgZW1wdHlCbG9jaygpLFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtY29udGVudFwiIHN0eWxlPXsgYXR0cmlidXRlcy5zdHlsZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbm5lckJsb2Nrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJBcHBlbmRlcj17ICgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcGVuZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLXRleHQtYmxvY2stYXBwZW5kZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWJsb2NrLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLXNjcmVlbm9wdGlvbnNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lckJsb2Nrcy5CdXR0b25CbG9ja0FwcGVuZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY29uc3QgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lID0gY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoKEJsb2NrTGlzdEJsb2NrKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvcHMgPT4ge1xyXG4gICAgICAgIGlmKHByb3BzLm5hbWUgPT0gXCJzZy9jb2x1bW5cIikge1xyXG4gICAgICAgICAgICByZXR1cm4gPEJsb2NrTGlzdEJsb2NrIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtgY29sICR7cHJvcHMuYXR0cmlidXRlcy5zbWFsbH0gJHtwcm9wcy5hdHRyaWJ1dGVzLm1lZGl1bX0gJHtwcm9wcy5hdHRyaWJ1dGVzLmxhcmdlfSAke3Byb3BzLmF0dHJpYnV0ZXMub2Zmc2V0U21hbGx9ICR7cHJvcHMuYXR0cmlidXRlcy5vZmZzZXRNZWRpdW19ICR7cHJvcHMuYXR0cmlidXRlcy5vZmZzZXRMYXJnZX1gfS8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPEJsb2NrTGlzdEJsb2NrIHsuLi5wcm9wc30vPlxyXG4gICAgfVxyXG59LCAnY29sdW1uQ3VzdG9tQ2xhc3NOYW1lJyk7XHJcblxyXG53cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IElubmVyQmxvY2tzfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvd1NhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtjbGFzc05hbWUsIGF0dHJpYnV0ZXN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sICR7Y2xhc3NOYW1lfSAke2F0dHJpYnV0ZXMuc21hbGx9ICR7YXR0cmlidXRlcy5tZWRpdW19ICR7YXR0cmlidXRlcy5sYXJnZX0gJHthdHRyaWJ1dGVzLm9mZnNldFNtYWxsfSAke2F0dHJpYnV0ZXMub2Zmc2V0TWVkaXVtfSAke2F0dHJpYnV0ZXMub2Zmc2V0TGFyZ2V9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXsgYXR0cmlidXRlcy5zdHlsZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElubmVyQmxvY2tzLkNvbnRlbnQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBCbG9ja0NvbnRyb2xzLEluc3BlY3RvckNvbnRyb2xzLFBsYWluVGV4dCB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IEljb25CdXR0b24sIFBhbmVsQm9keSwgUmFuZ2VDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaW1wb3J0IEdyYXBoaWNQaWNrZXIgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR3JhcGhpY1BpY2tlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90aEdlZWtHYWxsZXJ5RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdyaWRfY291bnQ6IFwiK3RoaXMucHJvcHMuYXR0cmlidXRlcy5ncmlkX2NvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZUV2ZW50KGl0ZW0sIG1vZGVsKXtcclxuICAgICAgICB2YXIgbmV3T2JqZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgbW9kZWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLmNvbmNhdCh0aGlzLmNsb25lQXJyYXkodGhpcy5wcm9wcy5hdHRyaWJ1dGVzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gaXRlbS5pbmRleDtcclxuICAgICAgICAgICAgfSkpLCBbbmV3T2JqZWN0XSlcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY2xvbmVBcnJheShhcnIpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFycjJbaV0gPSBhcnJbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycjI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRWRpdEl0ZW0oaXRlbSl7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbldpZHRoID0gKCAxMDAvdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmdyaWRfY291bnQgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW1cIiBzdHlsZT17IHsgd2lkdGg6YCR7Y29sdW1uV2lkdGh9JWAgfSB9PlxyXG4gICAgICAgICAgICAgICAgPEdyYXBoaWNQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG1lZGlhID0+IHRoaXMub25DaGFuZ2VFdmVudChpdGVtLCB7IGltYWdlVXJsOiBtZWRpYS51cmwgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgIHVybD17aXRlbS5pbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uaW1hZ2VBbHR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFBsYWluVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCB2YWx1ZSApID0+IHRoaXMub25DaGFuZ2VFdmVudChpdGVtLCB7dXJsOiB2YWx1ZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXJsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlckl0ZW1zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihhdHRyaWJ1dGVzLml0ZW1zLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuaXRlbXMuc29ydChmdW5jdGlvbihhICwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICAgICAgICAgIH0pLm1hcCgoaXRlbSkgPT4gdGhpcy5yZW5kZXJFZGl0SXRlbShpdGVtKSlcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8c3Bhbj5ObyBoYXkgaXRlbSBwYXJhIG1vc3RyYXI8L3NwYW4+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbnNwZWN0b3JDb250cm9scyA9IChcclxuICAgICAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT1cIkFqdXN0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTsO6bWVybyBkZSBjb2x1bW5hc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5ncmlkX2NvdW50IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gc2V0QXR0cmlidXRlcyggeyBncmlkX2NvdW50OiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW10uY29uY2F0KHRoaXMuY2xvbmVBcnJheShhdHRyaWJ1dGVzLml0ZW1zKSwgW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogYXR0cmlidXRlcy5pdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VBbHQ6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFncmVnYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmxvY2tDb250cm9scz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnNwZWN0b3JDb250cm9sc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1nYWxsZXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1nYWxsZXJ5LWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW1zKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnO1xyXG5cclxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5cclxucmVnaXN0ZXJCbG9ja1R5cGUoICdzZy9nYWxsZXJ5Jywge1xyXG4gICAgdGl0bGU6ICdHYWxsZXJ5JyxcclxuICAgIGljb246ICdzdGFyLWVtcHR5JyxcclxuICAgIGNhdGVnb3J5OiAnc2cnLFxyXG4gICAgYXR0cmlidXRlczp7XHJcbiAgICAgICAgZ3JpZF9jb3VudDoge1xyXG4gICAgICAgICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6ICdkYXRhLWNvdW50JyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICcuc2ctZ2FsbGVyeS1pbm5lcicsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogJ3F1ZXJ5JyxcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnNnLWl0ZW0nLFxyXG4gICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2RhdGEtaW5kZXgnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOntcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2hyZWYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLnNnLWl0ZW0tbGluaydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbWFnZVVybDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogJ2F0dHJpYnV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiAnc3JjJyxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5zZy1pdGVtLWdyYXBoaWMnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VBbHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2FsdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuc2ctaXRlbS1ncmFwaGljJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0LFxyXG5cclxuICAgIHNhdmVcclxuXHJcbn0pOyIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdGhHZWVrR2FsbGVyeVNhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckl0ZW0oaXRlbSwgaW5kZXgpe1xyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW5XaWR0aCA9ICggMTAwL3RoaXMucHJvcHMuYXR0cmlidXRlcy5ncmlkX2NvdW50ICk7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtXCIgZGF0YS1pbmRleD17aW5kZXh9IHN0eWxlPXsgeyB3aWR0aDpgJHtjb2x1bW5XaWR0aH0lYCB9IH0gPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2ctaXRlbS1saW5rXCIgaHJlZj17aXRlbS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNnLWl0ZW0tZ3JhcGhpY1wiIHNyYz17aXRlbS5pbWFnZVVybH0gYWx0PXtpdGVtLmltYWdlQWx0fS8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWdhbGxlcnkgY29sIHMxMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1nYWxsZXJ5LWlubmVyXCIgZGF0YS1jb3VudD17YXR0cmlidXRlcy5ncmlkX2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gdGhpcy5yZW5kZXJJdGVtKGl0ZW0sIGluZGV4KSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcclxuXHJcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCAnc2cvZ2FuaW1hdGlvbicsIHtcclxuICAgIHRpdGxlOiAnR3JhcGhpYyBTdGFjaycsXHJcbiAgICBpY29uOiAnc3Rhci1lbXB0eScsXHJcbiAgICBjYXRlZ29yeTogJ3NnJyxcclxuICAgIGF0dHJpYnV0ZXM6e1xyXG4gICAgICAgIGlkOntcclxuICAgICAgICAgICAgZGVmYXVsdDpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OltdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWlnaHQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OlwiNjAwcHhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWF4V2lkdGg6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OlwiNTUwcHhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5pbWF0aW9uOntcclxuICAgICAgICAgICAgZGVmYXVsdDpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdXJhdGlvbjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsYXk6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0LFxyXG5cclxuICAgIHNhdmVcclxuXHJcbn0pOyIsImltcG9ydCBHcmFwaGljUGlja2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyYXBoaWNQaWNrZXJcIjtcclxuXHJcbmNvbnN0IHsgQmxvY2tDb250cm9scywgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBJY29uQnV0dG9uLCBSYW5nZUNvbnRyb2wsIFBhbmVsQm9keSwgVGV4dENvbnRyb2wgfSA9d3AuY29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RoR2Vla0dhbGxlcnlFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoTmV3SXRlbSgpe1xyXG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgIGluZGV4OiBhdHRyaWJ1dGVzLml0ZW1zLmxlbmd0aCxcclxuICAgICAgICAgICAgaWQ6XCJcIixcclxuICAgICAgICAgICAgZ3JhcGhpY1VybDpcIlwiLFxyXG4gICAgICAgICAgICBncmFjcGhpY0FsdDpcIlwiLFxyXG4gICAgICAgICAgICBhbmltYXRpb246XCJcIixcclxuICAgICAgICAgICAgc3R5bGU6e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBib3R0b206XCIwXCIsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OlwiMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLmNvbmNhdCh0aGlzLmNsb25lQXJyYXkoYXR0cmlidXRlcy5pdGVtcyksIFtpdGVtXSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJdGVtKGl0ZW0pe1xyXG4gICAgICAgIGNvbnN0IHsgc2V0QXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICBpdGVtczogW10uY29uY2F0KHRoaXMuY2xvbmVBcnJheSh0aGlzLnByb3BzLmF0dHJpYnV0ZXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbUZpbHRlci5pbmRleCAhPSBpdGVtLmluZGV4O1xyXG4gICAgICAgICAgICB9KSksIFtpdGVtXSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZUFycmF5KGFycikge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJyMltpXSA9IGFycltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBibG9ja0NvbnRyb2xzID0gKFxyXG4gICAgICAgICAgICA8QmxvY2tDb250cm9scz5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMucHVzaE5ld0l0ZW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZ3JlZ2FyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQmxvY2tDb250cm9scz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZihhdHRyaWJ1dGVzLml0ZW1zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgYmxvY2tDb250cm9scyxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2stc2ctZ2FuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIYXogY2xpYyBlbiBlbCBib3TDs25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMucHVzaE5ld0l0ZW0oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZ3JlZ2FyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYSBhZ3JlZ2FyIGxhIHByaW1lcmEgaW1hZ2VuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPVwiR3JhcGhpYyBTdGFja1wiIGluaXRpYWxPcGVuPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWx0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGF0dHJpYnV0ZXMuaGVpZ2h0KycnKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMoe2hlaWdodDogYCR7dmFsdWV9cHhgIH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDEgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQW5jaG8gbcOheGltb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGF0dHJpYnV0ZXMubWF4V2lkdGgrJycpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7bWF4V2lkdGg6IGAke3ZhbHVlfXB4YCB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQW5jbGFqZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKHtpZDogdmFsdWUgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5pdGVtcy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLm1hcCggKCBpdGVtICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17YEl0ZW0gJHtpdGVtLmluZGV4KzF9YH0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbmNsYWplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBpdGVtLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgaWQ6IHZhbHVlIH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFuaW1hY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGl0ZW0uYW5pbWF0aW9uIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgYW5pbWF0aW9uOiB2YWx1ZSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGl0ZW0uc3R5bGUud2lkdGgpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgc3R5bGU6IHsuLi5pdGVtLnN0eWxlLCB3aWR0aDpgJHt2YWx1ZX0lYH0gfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGl0ZW0uc3R5bGUuYm90dG9tKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIHN0eWxlOiB7Li4uaXRlbS5zdHlsZSwgYm90dG9tOmAke3ZhbHVlfSVgfSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGl0ZW0uc3R5bGUubGVmdCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBzdHlsZTogey4uLml0ZW0uc3R5bGUsIGxlZnQ6YCR7dmFsdWV9JWB9IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ6LWluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBpdGVtLnN0eWxlLnpJbmRleCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIHN0eWxlOiB7Li4uaXRlbS5zdHlsZSwgekluZGV4OiBwYXJzZUludCh2YWx1ZSl9IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFtcclxuICAgICAgICAgICAgaW5zcGVjdG9yQ29udHJvbHMoKSxcclxuICAgICAgICAgICAgYmxvY2tDb250cm9scyxcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay1zZy1nYW5pbWF0aW9uIHNnLWl0ZW1zXCIgc3R5bGU9e3toZWlnaHQ6YXR0cmlidXRlcy5oZWlnaHR9fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLml0ZW1zLnNvcnQoZnVuY3Rpb24oYSAsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLm1hcCggKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbVwiIGRhdGEtaW5kZXg9e2luZGV4fSBzdHlsZT17aXRlbS5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW0tZ3JhcGhpYy1pbm5lclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhpY1BpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZy1pdGVtLWdyYXBoaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG1lZGlhID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIGdyYXBoaWNVcmw6IG1lZGlhLnVybCwgZ3JhcGhpY0FsdDogbWVkaWEuYWx0IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtpdGVtLmdyYXBoaWNVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5ncmFwaGljQWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RoR2Vla0dhbGxlcnlTYXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPXthdHRyaWJ1dGVzLmlkfSBjbGFzc05hbWU9XCJ3cC1ibG9jay1zZy1nYW5pbWF0aW9uIHNnLWl0ZW1zXCIgc3R5bGU9e3toZWlnaHQ6IGF0dHJpYnV0ZXMuaGVpZ2h0LCBtYXhXaWR0aDogYXR0cmlidXRlcy5tYXhXaWR0aH19PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuaXRlbXMubWFwKChpdGVtLGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17aXRlbS5pZH0gY2xhc3NOYW1lPVwic2ctaXRlbVwiIHN0eWxlPXtpdGVtLnN0eWxlfSBkYXRhLWFuaW1hdGlvbj17aXRlbS5hbmltYXRpb259ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uZ3JhcGhpY1VybH0gYWx0PXtpdGVtLmdyYXBoaWNBbHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcclxuXHJcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCAnc2cvaG90Z3JhcGhpYycsIHtcclxuICAgIHRpdGxlOiAnSG90R3JhcGhpYycsXHJcbiAgICBpY29uOiAnc3Rhci1lbXB0eScsXHJcbiAgICBjYXRlZ29yeTogJ3NnJyxcclxuICAgIGF0dHJpYnV0ZXM6e1xyXG4gICAgICAgIGhlaWdodDp7XHJcbiAgICAgICAgICAgIHR5cGU6J3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICc0MDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6W11cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVkaXQsXHJcblxyXG4gICAgc2F2ZVxyXG5cclxufSk7IiwiaW1wb3J0IEdyYXBoaWNQaWNrZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JhcGhpY1BpY2tlclwiO1xyXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBCbG9ja0NvbnRyb2xzLEluc3BlY3RvckNvbnRyb2xzICB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgSWNvbkJ1dHRvbixQYW5lbEJvZHksVGV4dENvbnRyb2wsVGV4dGFyZWFDb250cm9sLFJhbmdlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RoR2Vla0dhbGxlcnlFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoTmV3SXRlbSgpe1xyXG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgIGluZGV4OiBhdHRyaWJ1dGVzLml0ZW1zLmxlbmd0aCxcclxuICAgICAgICAgICAgdGl0bGU6JycsXHJcbiAgICAgICAgICAgIGdyYXBoaWNVcmw6JycsXHJcbiAgICAgICAgICAgIGdyYXBoaWNBbHQ6JycsXHJcbiAgICAgICAgICAgIGJvZHk6JycsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzMwJScsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLmNvbmNhdCh0aGlzLmNsb25lQXJyYXkoYXR0cmlidXRlcy5pdGVtcyksIFtpdGVtXSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJdGVtKGl0ZW0pe1xyXG4gICAgICAgIGNvbnN0IHsgc2V0QXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICBpdGVtczogW10uY29uY2F0KHRoaXMuY2xvbmVBcnJheSh0aGlzLnByb3BzLmF0dHJpYnV0ZXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbUZpbHRlci5pbmRleCAhPSBpdGVtLmluZGV4O1xyXG4gICAgICAgICAgICB9KSksIFtpdGVtXSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZUFycmF5KGFycikge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJyMltpXSA9IGFycltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmKGF0dHJpYnV0ZXMuaXRlbXMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hOZXdJdGVtKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT1cIkhvdGdyYXBoaWNcIiBpbml0aWFsT3Blbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFsdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChhdHRyaWJ1dGVzLmhlaWdodCsnJykgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKHtoZWlnaHQ6IGAke3ZhbHVlfXB4YCB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5pdGVtcy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLm1hcCggKCBpdGVtICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17YEl0ZW0gJHtpdGVtLmluZGV4KzF9YH0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUw610dWxvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBpdGVtLnRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgdGl0bGU6IHZhbHVlIH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDdWVycG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiRW50ZXIgc29tZSB0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBpdGVtLmJvZHkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBib2R5OiB2YWx1ZSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGl0ZW0uc3R5bGUud2lkdGgpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgc3R5bGU6IHsuLi5pdGVtLnN0eWxlLCB3aWR0aDpgJHt2YWx1ZX0lYH0gfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGl0ZW0uc3R5bGUudG9wKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIHN0eWxlOiB7Li4uaXRlbS5zdHlsZSwgdG9wOmAke3ZhbHVlfSVgfSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDEgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGl0ZW0uc3R5bGUubGVmdCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBzdHlsZTogey4uLml0ZW0uc3R5bGUsIGxlZnQ6YCR7dmFsdWV9JWB9IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIGluc3BlY3RvckNvbnRyb2xzKCksXHJcbiAgICAgICAgICAgICAgICA8QmxvY2tDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gdGhpcy5wdXNoTmV3SXRlbSgpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFncmVnYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Jsb2NrQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay1zZy1ob3RncmFwaGljIHNnLWl0ZW1zXCIgc3R5bGU9e3toZWlnaHQ6YXR0cmlidXRlcy5oZWlnaHR9fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuaXRlbXMuc29ydChmdW5jdGlvbihhICwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5tYXAoIChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtXCIgZGF0YS1pbmRleD17aW5kZXh9IHN0eWxlPXtpdGVtLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW0tZ3JhcGhpYy1pbm5lclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoaWNQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWl0ZW0tZ3JhcGhpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG1lZGlhID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIGdyYXBoaWNVcmw6IG1lZGlhLnVybCwgZ3JhcGhpY0FsdDogbWVkaWEuYWx0IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17aXRlbS5ncmFwaGljVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLmdyYXBoaWNBbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBdXHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90aEdlZWtHYWxsZXJ5U2F2ZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW1zXCIgc3R5bGU9e3toZWlnaHQ6IGF0dHJpYnV0ZXMuaGVpZ2h0fX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5pdGVtcy5tYXAoaXRlbSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2ctaXRlbSBtb2RhbC10cmlnZ2VyXCIgc3R5bGU9e2l0ZW0uc3R5bGV9IGhyZWY9e2AjaGcke2l0ZW0uaW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmdyYXBoaWNVcmx9IGFsdD17aXRlbS5ncmFwaGljQWx0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsc2VcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2BoZyR7aXRlbS5pbmRleH1gfSBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQgc2ctbW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1tb2RhbC1jb250ZW50LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2l0ZW0udGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5ib2R5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1tb2RhbC1jb250ZW50LWdyYXBoaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5ncmFwaGljVXJsfSBhbHQ9e2l0ZW0uZ3JhcGhpY0FsdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcclxuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IFBhbmVsQm9keSxSYW5nZUNvbnRyb2wsVGV4dENvbnRyb2wsU2VsZWN0Q29udHJvbCB9ID13cC5jb21wb25lbnRzO1xyXG5jb25zdCAgYXBpRmV0Y2ggID0gd3AuYXBpRmV0Y2g7XHJcbmNvbnN0IHsgYWRkUXVlcnlBcmdzIH0gPSB3cC51cmw7XHJcblxyXG5jb25zdCBDQVRFR09SSUVTX0xJU1RfUVVFUlkgPSB7XHJcbiAgICBwZXJfcGFnZTogLTEsXHJcbn07XHJcblxyXG5jbGFzcyBTbG90aEdlZWtQb3N0RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXNMaXN0OiBbXSxcclxuICAgICAgICB9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmlzU3RpbGxNb3VudGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZldGNoUmVxdWVzdCA9IGFwaUZldGNoKCB7XHJcbiAgICAgICAgICAgIHBhdGg6IGFkZFF1ZXJ5QXJncyggYC93cC92Mi9jYXRlZ29yaWVzYCwgQ0FURUdPUklFU19MSVNUX1FVRVJZICksXHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgICAgIC50aGVuKCAoIGNhdGVnb3JpZXNMaXN0ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmlzU3RpbGxNb3VudGVkICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgY2F0ZWdvcmllc0xpc3QgfSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgLmNhdGNoKCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaXNTdGlsbE1vdW50ZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBjYXRlZ29yaWVzTGlzdDogW10gfSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1N0aWxsTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtwb3N0cywgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgY2xhc3NOYW1lfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBjYXRlZ29yaWVzTGlzdCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKCFwb3N0cyl7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Mb2FkaW5nLi4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiggcG9zdHMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Tm8gaGF5IHBvc3RzIHBhcmEgbW9zdHJhci48L3NwYW4+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaW5zcGVjdG9yQ29udHJvbHMgPSAoXHJcbiAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9XCJBanVzdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk7Dum1lcm8gZGUgY29sdW1uYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuY29sdW1ucyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgY29sdW1uczogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEyIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLCv0N1YW50b3MgcG9zdD9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMucG9zdF9wZXJfcGFnZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHBvc3RfcGVyX3BhZ2U6IHZhbHVlIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDEgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyA5IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbHRvIGRlIGxhIGltYWdlbiAocHgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmhlaWdodCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgaGVpZ2h0OiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhdGVnb3LDrWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuY2F0ZWdvcnlfc2VsZWN0ZWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdID0gY2F0ZWdvcmllc0xpc3QubWFwKCAoY2F0KSA9PiAoeyBsYWJlbDogY2F0Lm5hbWUsIHZhbHVlOiBjYXQuaWQgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgY2F0ZWdvcnlfc2VsZWN0ZWQ6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCb3TDs24gZGUgYWNjacOzblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5hY3Rpb25fcG9zdCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgYWN0aW9uX3Bvc3Q6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVzdGlsbyBkZWwgaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50eXBlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdDYXJkJywgdmFsdWU6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdNb2Rlcm4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0NsYXNpYycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHR5cGU6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbjAgPSAocG9zdCwgY29sdW1uV2lkdGgsIGhlaWdodCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlQ2xhc3NlcyA9ICAnc2ctaXRlbS10aXRsZSc7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZV91cmwgPSAnJ1xyXG5cclxuICAgICAgICAgICAgaWYoIXBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ10pe1xyXG4gICAgICAgICAgICAgICAgdGl0bGVDbGFzc2VzID0gJ3NnLWl0ZW0tdGl0bGUgbm8taW1hZ2UnO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGltYWdlX3VybCA9IHBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ11bMF0uc291cmNlX3VybDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNnLWl0ZW0gXCIgc3R5bGU9eyB7IHdpZHRoOmAke2NvbHVtbldpZHRofSVgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlX3VybH0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHBvc3QuZXhjZXJwdC5yZW5kZXJlZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0Lmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRyaWJ1dGVzLmFjdGlvbl9wb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb24xID0gKHBvc3QsIGNvbHVtbldpZHRoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW1hZ2VfdXJsID0gcG9zdC5fZW1iZWRkZWRbJ3dwOmZlYXR1cmVkbWVkaWEnXSA/IHBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ11bMF0uc291cmNlX3VybCA6ICcnO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNnLWl0ZW1cIiBzdHlsZT17IHsgd2lkdGg6YCR7Y29sdW1uV2lkdGh9JWAgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbS1jb250ZW50XCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZV91cmx9KWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNnLWl0ZW0tYWN0aW9uXCIgaHJlZj17cG9zdC5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRyaWJ1dGVzLmFjdGlvbl9wb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uMiA9IChwb3N0LCBjb2x1bW5XaWR0aCwgaGVpZ2h0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZUNsYXNzZXMgPSAgJ3NnLWl0ZW0tdGl0bGUnO1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VfdXJsID0gJydcclxuXHJcbiAgICAgICAgICAgIGlmKCFwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddKXtcclxuICAgICAgICAgICAgICAgIHRpdGxlQ2xhc3NlcyA9ICdzZy1pdGVtLXRpdGxlIG5vLWltYWdlJztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpbWFnZV91cmwgPSBwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddWzBdLnNvdXJjZV91cmw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzZy1pdGVtXCIgc3R5bGU9eyB7IHdpZHRoOmAke2NvbHVtbldpZHRofSVgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW0tZ3JhcGhpY1wiIHN0eWxlPXsgeyBoZWlnaHQ6YCR7aGVpZ2h0fXB4YCB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VfdXJsfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGl0bGVDbGFzc2VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57cG9zdC50aXRsZS5yZW5kZXJlZH08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2ctaXRlbS1hY3Rpb25cIiBocmVmPXtwb3N0Lmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2F0dHJpYnV0ZXMuYWN0aW9uX3Bvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW5XaWR0aCA9ICggMTAwIC8gYXR0cmlidXRlcy5jb2x1bW5zICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0+XHJcbiAgICAgICAgICAgICAgICB7aW5zcGVjdG9yQ29udHJvbHN9XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgc2ctaXRlbXMgb3B0aW9uJHthdHRyaWJ1dGVzLnR5cGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0cy5tYXAocG9zdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICggcGFyc2VJbnQoYXR0cmlidXRlcy50eXBlKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24wKHBvc3QsIGNvbHVtbldpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uMShwb3N0LCBjb2x1bW5XaWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjIocG9zdCwgY29sdW1uV2lkdGgsIGF0dHJpYnV0ZXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjAocG9zdCwgY29sdW1uV2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0KCAoc2VsZWN0LCBwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtwb3N0X3Blcl9wYWdlLCBjYXRlZ29yeV9zZWxlY3RlZH0gPSBwcm9wcy5hdHRyaWJ1dGVzO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcG9zdHM6IHNlbGVjdCgnY29yZScpLmdldEVudGl0eVJlY29yZHMoJ3Bvc3RUeXBlJywgJ3Bvc3QnLCB7cGVyX3BhZ2U6IHBvc3RfcGVyX3BhZ2UsIGNhdGVnb3JpZXM6Y2F0ZWdvcnlfc2VsZWN0ZWQsIF9lbWJlZDogdHJ1ZX0pXHJcbiAgICB9O1xyXG59KShTbG90aEdlZWtQb3N0RWRpdCk7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XHJcblxyXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSggJ3NnL3Bvc3RzJywge1xyXG4gICAgdGl0bGU6IFwiw5psdGltYXMgZW50cmFkYXNcIixcclxuICAgIGljb246ICdzdGFyLWVtcHR5JyxcclxuICAgIGNhdGVnb3J5OiAnc2cnLFxyXG4gICAga2V5d29yZHM6IFtcclxuICAgICAgICBfXyggJ2xvYWQnICksXHJcbiAgICAgICAgX18oICdMb2FkIFBvc3QnICksXHJcbiAgICAgICAgX18oICdndXRlbi1sb2FkLXBvc3QnICksXHJcbiAgICBdLFxyXG4gICAgYXR0cmlidXRlczp7XHJcbiAgICAgICAgdHlwZToge1xyXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zdF9wZXJfcGFnZToge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IDZcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlaWdodDoge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IDIwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2F0ZWdvcnlfc2VsZWN0ZWQ6IHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcclxuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3Rpb25fcG9zdDp7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOlwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOlwiVmVyIG3DoXMuLi5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uczp7XHJcbiAgICAgICAgICAgIHR5cGU6XCJzdHJpbmdcIixcclxuICAgICAgICAgICAgZGVmYXVsdDogM1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZWRpdCxcclxuXHJcbiAgICBzYXZlKCl7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbn0pOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xyXG5cclxuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcclxuXHJcbmltcG9ydCAnLi9lZGl0b3Iuc2NzcydcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSggJ3NnL3JvdycsIHtcclxuICAgIHRpdGxlOiAnUm93JyxcclxuICAgIGljb246ICdzdGFyLWVtcHR5JyxcclxuICAgIGNhdGVnb3J5OiAnc2cnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIGl0c1NlY3Rpb246e1xyXG4gICAgICAgICAgICB0eXBlOidib29sZWFuJyxcclxuICAgICAgICAgICAgZGVmYXVsdDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFzQ29udGFpbmVyOntcclxuICAgICAgICAgICAgdHlwZTonYm9vbGVhbicsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0eWxlOntcclxuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHt9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0LFxyXG5cclxuICAgIHNhdmVcclxufSApOyIsImNvbnN0IHsgSW5uZXJCbG9ja3MsIEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuY29uc3QgeyBQYW5lbEJvZHksIFBhbmVsUm93LCBUb2dnbGVDb250cm9sLCBUYWJQYW5lbCB9ID0gd3AuY29tcG9uZW50cztcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSA9IHdwLmNvbXBvc2U7XHJcblxyXG5pbXBvcnQgRWRpdEJhY2tncm91bmQgZnJvbSBcIi4uLy4uL3N0eWxlL0VkaXRCYWNrZ3JvdW5kXCI7XHJcbmltcG9ydCBFZGl0U3BhY2VEaW1lbnNpb24gZnJvbSBcIi4uLy4uL3N0eWxlL0VkaXRTcGFjZURpbWVuc2lvblwiO1xyXG5cclxuY29uc3Qgcm93Q3VzdG9tQ2xhc3NOYW1lID0gY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoKEJsb2NrTGlzdEJsb2NrKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvcHMgPT4ge1xyXG4gICAgICAgIGlmKHByb3BzLm5hbWUgPT0gXCJzZy9yb3dcIil7XHJcbiAgICAgICAgICAgIHJldHVybiA8QmxvY2tMaXN0QmxvY2sgeyAuLi5wcm9wcyB9IGNsYXNzTmFtZT17ICdyb3cnIH0gLz5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8QmxvY2tMaXN0QmxvY2sgeyAuLi5wcm9wcyB9IC8+XHJcbiAgICB9XHJcbn0sICdyb3dDdXN0b21DbGFzc05hbWUnKTtcclxuXHJcbndwLmhvb2tzLmFkZEZpbHRlcignZWRpdG9yLkJsb2NrTGlzdEJsb2NrJywgJ3NnL3JvdycsIHJvd0N1c3RvbUNsYXNzTmFtZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3dFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbICdzZy9jb2x1bW4nXTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBjbGllbnRJZCwgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IHNlbGVjdCB9ID0gd3AuZGF0YTtcclxuXHJcbiAgICAgICAgY29uc3QgcGFyZW50QmxvY2sgPSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3NCeUNsaWVudElkKCBjbGllbnRJZCApWyAwIF07XHJcbiAgICAgICAgY29uc3QgY2hpbGRCbG9ja3MgPSBwYXJlbnRCbG9jay5pbm5lckJsb2NrcztcclxuXHJcbiAgICAgICAgY29uc3QgZW1wdHlCbG9jayA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCBjaGlsZEJsb2Nrcy5sZW5ndGggPT0gMCl7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1lbXB0eS1pbm5lci1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1ibG9jay1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGFzaGljb25zIGRhc2hpY29ucy1zY3JlZW5vcHRpb25zXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ3JlZ2EgdW5hIG8gbcOhcyBjb2x1bW5hcyBwcmVzaW9uYW5kbyBlbCBib3TDs24gZGUgYWJham8gY29uIGVsIHPDrW1ib2xvIGRlIG3DoXMuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvblNlbGVjdCA9ICggdGFiTmFtZSApID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggJ1NlbGVjdGluZyB0YWInLCB0YWJOYW1lICk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFiMSA9ICAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VG9nZ2xlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWN0aXZhciBzZWNjacOzblwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVscD17IGF0dHJpYnV0ZXMuaXRzU2VjdGlvbiA/ICdTZWNjacOzbi4nIDogJ1NvbG8gZmlsYS4nIH1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsgYXR0cmlidXRlcy5pdHNTZWN0aW9uIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyggeyBpdHNTZWN0aW9uOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBY3RpdmFyIGNvbnRlbmVkb3I/XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWxwPXsgYXR0cmlidXRlcy5oYXNDb250YWluZXIgPyAnQ29udGVuZWRvci4nIDogJ1NvbG8gZmlsYS4nIH1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsgYXR0cmlidXRlcy5oYXNDb250YWluZXIgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGhhc0NvbnRhaW5lcjogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJUYWIyID0gIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsgRWRpdEJhY2tncm91bmQodGhpcy5wcm9wcykgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclRhYjMgPSAgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgeyBFZGl0U3BhY2VEaW1lbnNpb24odGhpcy5wcm9wcykgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclRhYiA9ICh0YWJOYW1lKSA9PntcclxuICAgICAgICAgICAgc3dpdGNoICh0YWJOYW1lKXtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YWIxJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFiMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YWIyJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFiMjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YWIzJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFiMztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT1cIkFqdXN0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInNnLXRhYi1wYW5lbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmUtdGFiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17IG9uU2VsZWN0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJzPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndGFiMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0dlbmVyYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFiLW9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0YWIyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQkcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFiLXR3bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0YWIzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGltJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RhYi10aHJlZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCB0YWIgKSA9PiByZW5kZXJUYWIodGFiLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbFJvdz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz4sXHJcbiAgICAgICAgICAgICAgICBlbXB0eUJsb2NrKCksXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1jb250YWluZXJcIiBzdHlsZT17IGF0dHJpYnV0ZXMuc3R5bGV9ID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5uZXJCbG9ja3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXBwZW5kZXI9eyAoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBlbmRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWVkaXRvci10ZXh0LWJsb2NrLWFwcGVuZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1ibG9jay1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGFzaGljb25zIGRhc2hpY29ucy1zY3JlZW5vcHRpb25zXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJCbG9ja3MuQnV0dG9uQmxvY2tBcHBlbmRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBJbm5lckJsb2Nrc30gPSB3cC5ibG9ja0VkaXRvcjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3dTYXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7Y2xhc3NOYW1lLCBhdHRyaWJ1dGVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlckNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuaGFzQ29udGFpbmVyID9cclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyUm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDpcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJSb3coKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5pdHNTZWN0aW9uID9cclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Byb3cgJHtjbGFzc05hbWV9YH0gc3R5bGU9eyBhdHRyaWJ1dGVzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyQmxvY2tzLkNvbnRlbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICApIDpcclxuXHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3cgJHtjbGFzc05hbWV9YH0gc3R5bGU9eyBhdHRyaWJ1dGVzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyQmxvY2tzLkNvbnRlbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoIHJlbmRlckNvbnRhaW5lcigpICk7XHJcbiAgICB9XHJcblxyXG5cclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgTWVkaWFVcGxvYWQgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7IEljb25CdXR0b24gfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaGljUGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlQnV0dG9uKG9wZW5FdmVudCwgdXJsLCBhbHQsIG9uQ2hhbmdlKSB7XHJcbiAgICAgICAgaWYodXJsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JhcGhpYy1waWNrZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgdXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2FsdH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctdG9vbGJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuRXZlbnQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAobWVkaWEpID0+IG9uQ2hhbmdlKCcnKSAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmFwaGljLXBpY2tlci1uby1pbWFnZVwiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IG9wZW5FdmVudCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJmb3JtYXQtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFncmVnYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3VybCwgYWx0LCBvbkNoYW5nZX0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVkaWFVcGxvYWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbnRlci1hbGlnblwiXHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdD17IChtZWRpYSkgPT4gb25DaGFuZ2UobWVkaWEpIH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICByZW5kZXI9eyAoeyBvcGVuIH0pID0+IHRoaXMuZ2V0SW1hZ2VCdXR0b24ob3BlbiwgdXJsLCBhbHQsIG9uQ2hhbmdlKSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiY29uc3Qge0NvbXBvbmVudH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7SW5zcGVjdG9yQ29udHJvbHMsIFJpY2hUZXh0LCBCbG9ja0NvbnRyb2xzLCBBbGlnbm1lbnRUb29sYmFyfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7UGFuZWxCb2R5LCBSYW5nZUNvbnRyb2wsIENvbG9yUGFsZXR0ZSwgVGV4dENvbnRyb2x9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmltcG9ydCBNYWluQ29sb3JzIGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFncmFwaCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWw6ICcnLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwJyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMCAwIDAgMCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCAwIDAgMCcsXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB7dmFsdWUsIHN0eWxlfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbDogdmFsdWV9KTtcclxuXHJcbiAgICAgICAgaWYgKHN0eWxlLm1hcmdpbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGU6IHN0eWxlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU1QKGFycmF5LCB2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICBsZXQgbmV3VmFsdWUgPSBhcnJheS5zcGxpdCgnICcpO1xyXG4gICAgICAgIG5ld1ZhbHVlW2luZGV4XSA9IGAke3ZhbHVlfWA7XHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlLmpvaW4oJyAnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtvbkNoYW5nZSwgdmFsdWUsIHBsYWNlaG9sZGVyfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHtzdHlsZX0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFtcclxuICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbGlnbm1lbnRUb29sYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS50ZXh0QWxpZ259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdHlsZTogey4uLnN0eWxlLCB0ZXh0QWxpZ246IHZhbHVlfX0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQmxvY2tDb250cm9scz4sXHJcbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT0nUMOhcnJhZm8nIGluaXRpYWxPcGVuPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGFtYcOxb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFyc2VJbnQoc3R5bGUuZm9udFNpemUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0eWxlOiB7Li4uc3R5bGUsIGZvbnRTaXplOiBgJHt2YWx1ZX1weGB9fSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlLXRleHQtY29sb3JcIj5Db2xvciBkZSB0ZXh0bzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtdGV4dC1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGFsZXR0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycyA9IHsgTWFpbkNvbG9ycyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGU6IHsuLi5zdHlsZSwgY29sb3I6IGAke3ZhbHVlfWB9fSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZS1zcGFjaW5nXCI+RXNwYWNpYWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24tY29udHJvbCB0aXRsZS1zcGFjaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS5tYXJnaW4uc3BsaXQoJyAnKVswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiB0aGlzLnVwZGF0ZU1QKHN0eWxlLm1hcmdpbiwgdmFsdWUsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLm1hcmdpbi5zcGxpdCgnICcpWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHRoaXMudXBkYXRlTVAoc3R5bGUubWFyZ2luLCB2YWx1ZSwgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLm1hcmdpbi5zcGxpdCgnICcpWzJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHRoaXMudXBkYXRlTVAoc3R5bGUubWFyZ2luLCB2YWx1ZSwgMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS5tYXJnaW4uc3BsaXQoJyAnKVszXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiB0aGlzLnVwZGF0ZU1QKHN0eWxlLm1hcmdpbiwgdmFsdWUsIDMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCB0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbMV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUucGFkZGluZy5zcGxpdCgnICcpWzJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHRoaXMudXBkYXRlTVAoc3R5bGUucGFkZGluZywgdmFsdWUsIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbM119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgPFJpY2hUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZT1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsOiB2YWx1ZX0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NvbnRyb2xzPXtbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZSddfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsgcGxhY2Vob2xkZXIgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcbn0iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scywgUmljaFRleHQsIEJsb2NrQ29udHJvbHMsIEFsaWdubWVudFRvb2xiYXIgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7IFBhbmVsQm9keSwgUmFuZ2VDb250cm9sLCBDb2xvclBhbGV0dGUsIFRleHRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaW1wb3J0IE1haW5Db2xvcnMgZnJvbSAnLi4vaGVscGVycy9jb2xvcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsOiAnJyxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwJyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjonbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDAgMCAwJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDAgMCAwJyxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBjb25zdCB7dmFsdWUsIHN0eWxlfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbDogdmFsdWV9KTtcclxuXHJcbiAgICAgICAgaWYgKHN0eWxlLm1hcmdpbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGU6IHN0eWxlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU1QKGFycmF5LCB2YWx1ZSwgaW5kZXgpe1xyXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGFycmF5LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgbmV3VmFsdWVbaW5kZXhdID0gYCR7dmFsdWV9YDtcclxuICAgICAgICByZXR1cm4gbmV3VmFsdWUuam9pbignICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICBjb25zdCB7IHR5cGUsIGNsYXNzTmFtZSwgb25DaGFuZ2UsIHZhbHVlLCBwbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgIHsgc3R5bGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybihbXHJcbiAgICAgICAgICAgICAgICA8QmxvY2tDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8QWxpZ25tZW50VG9vbGJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUudGV4dEFsaWdufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCB0ZXh0QWxpZ246dmFsdWUgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQmxvY2tDb250cm9scz4sXHJcbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT0nVMOtdHVsbycgaW5pdGlhbE9wZW49e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUYW1hw7FvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFyc2VJbnQoc3R5bGUuZm9udFNpemUpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgZm9udFNpemU6YCR7dmFsdWV9cHhgIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGUtdGV4dC1jb2xvclwiPkNvbG9yIGRlIHRleHRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0LWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQYWxldHRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzID0geyBNYWluQ29sb3JzIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHN0eWxlLmNvbG9yIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBjb2xvcjpgJHt2YWx1ZX1gIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGUtc3BhY2luZ1wiPkVzcGFjaWFkbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWNvbnRyb2wgdGl0bGUtc3BhY2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCB0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgc3R5bGUubWFyZ2luLnNwbGl0KCcgJylbMF0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBtYXJnaW46dGhpcy51cGRhdGVNUChzdHlsZS5tYXJnaW4sIHZhbHVlLCAwKSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHN0eWxlLm1hcmdpbi5zcGxpdCgnICcpWzFdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgbWFyZ2luOnRoaXMudXBkYXRlTVAoc3R5bGUubWFyZ2luLCB2YWx1ZSwgMSkgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgc3R5bGUubWFyZ2luLnNwbGl0KCcgJylbMl0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBtYXJnaW46dGhpcy51cGRhdGVNUChzdHlsZS5tYXJnaW4sIHZhbHVlLCAyKSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgc3R5bGUubWFyZ2luLnNwbGl0KCcgJylbM10gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBtYXJnaW46dGhpcy51cGRhdGVNUChzdHlsZS5tYXJnaW4sIHZhbHVlLCAzKSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCB0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbMF0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIHBhZGRpbmc6dGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMCkgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbMV0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIHBhZGRpbmc6dGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMSkgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgc3R5bGUucGFkZGluZy5zcGxpdCgnICcpWzJdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBwYWRkaW5nOnRoaXMudXBkYXRlTVAoc3R5bGUucGFkZGluZywgdmFsdWUsIDIpIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbM10gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIHBhZGRpbmc6dGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMykgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgPFJpY2hUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHZhbDp2YWx1ZSB9LCAgKCkgPT4gb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSApIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyB2YWx1ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7c3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NvbnRyb2xzPXsgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9IHtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJcclxuXHJcbmxldCBNYWluQ29sb3JzID0gW1xyXG4gICAgeyBuYW1lOiAndHJhbnNwYXJlbnQnLCBjb2xvcjogJ3RyYW5zcGFyZW50JyB9LFxyXG4gICAgeyBuYW1lOiAnc2ctZGFyaycsIGNvbG9yOiAnIzJhMmYzZicgfSxcclxuICAgIHsgbmFtZTogJ3NnLWdyZWVuJywgY29sb3I6ICcjMjdlMjlhJyB9LFxyXG4gICAgeyBuYW1lOiAnd2hpdGUnLCBjb2xvcjogJyNmZmZmZmYnIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29sb3JzOyIsIi8qKlxyXG4gKiBFbGltaW5hIHBvciBjb21wbGV0byBlbCBlbGVtZW50byBkZSBlc3RpbG8gY3VhbmRvIG5vIHRpZW5lIHZhbG9yLiBFc3RvIGV2aXRhcsOhIGVzdGlsb3NcclxuICogc3VjaW9zIHNpbiB2YWxvciBlbiBlbCBmcm9udGVuZC5cclxuICpcclxuICogQHBhcmFtIGF0dHJpYnV0ZXNcclxuICogQHBhcmFtIHNldEF0dHJpYnV0ZXNcclxuICogQHBhcmFtIGVsZW1lbnRcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sIGVsZW1lbnQsIHZhbHVlPScnKSB7XHJcblxyXG4gICAgaWYodmFsdWUgPT09ICcnKXtcclxuXHJcbiAgICAgICAgbGV0IHN0eWxlID0gYXR0cmlidXRlcy5zdHlsZTtcclxuXHJcbiAgICAgICAgZGVsZXRlIHN0eWxlW2VsZW1lbnRdO1xyXG5cclxuICAgICAgICBzZXRBdHRyaWJ1dGVzKHtzdHlsZTogc3R5bGV9KTtcclxuXHJcbiAgICB9XHJcblxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IEJ1dHRvbiwgU2VsZWN0Q29udHJvbCwgSWNvbkJ1dHRvbiwgQ29sb3JQYWxldHRlIH0gPSB3cC5jb21wb25lbnRzO1xyXG5jb25zdCB7IE1lZGlhVXBsb2FkIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuXHJcbmltcG9ydCB7IHNhbml0aXplU3R5bGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxpdGllcyc7XHJcbmltcG9ydCBNYWluQ29sb3JzIGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRCYWNrZ3JvdW5kKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSl7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXJpemEgZWwgYm90w7NuIG8gbGEgaW1hZ2VuIGVuIGVsIHNpZGViYXIgZGUgZWRpY2nDs25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gb3BlblxyXG4gICAgICogQHJldHVybnMge0pTWC5FbGVtZW50fEpTWC5FbGVtZW50W119XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZUJ1dHRvbnMgPSAob3BlbikgPT4ge1xyXG5cclxuICAgICAgICBpZiAoYXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgIT09ICcnICYmIGF0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZEltYWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2Uuc2xpY2UoNCwtMSl9IGFsdD1cIlwiIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctdG9vbGJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTdHlsZSA9IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgYmFja2dyb3VuZEltYWdlOicnIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IG5ld1N0eWxlIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdiYWNrZ3JvdW5kSW1hZ2UnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLWltYWdlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgb3BlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbiBmdWxsIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZ3JlZ2FyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NnLXN0eWxlLWVkaXQtYmFja2dyb3VuZCc+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Q29sb3IgZGUgRm9uZG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPENvbG9yUGFsZXR0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycyA9IHsgTWFpbkNvbG9ycyB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2F0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7c3R5bGU6IHsuLi5hdHRyaWJ1dGVzLnN0eWxlLCBiYWNrZ3JvdW5kQ29sb3I6IGAke3ZhbHVlfWB9fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAnYmFja2dyb3VuZENvbG9yJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5JbWFnZW4gZGUgRm9uZG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPE1lZGlhVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIkltYWdlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRJbWFnZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyBtZWRpYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoICB7IHN0eWxlOiB7Li4uYXR0cmlidXRlcy5zdHlsZSwgYmFja2dyb3VuZEltYWdlOmB1cmwoJHttZWRpYS51cmx9KWAgfSB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyAoeyBvcGVuIH0pID0+IGJhY2tncm91bmRJbWFnZUJ1dHRvbnMob3Blbil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRhbWHDsW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRTaXplIH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJycsIHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdjb3ZlcicsIHZhbHVlOiAnY292ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2NvbnRhaW4nLCB2YWx1ZTogJ2NvbnRhaW4nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2F1dG8nLCB2YWx1ZTogJ2F1dG8nIH0sXHJcbiAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgc3R5bGU6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgYmFja2dyb3VuZFNpemU6dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ2JhY2tncm91bmRTaXplJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVwZXRpclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCB9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICcnLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbm8tcmVwZWF0JywgdmFsdWU6ICduby1yZXBlYXQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3JlcGVhdCcsIHZhbHVlOiAncmVwZWF0JyB9LFxyXG4gICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IHN0eWxlOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIGJhY2tncm91bmRSZXBlYXQ6dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwnYmFja2dyb3VuZFJlcGVhdCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQb3NpY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiB9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICcnLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnY2VudGVyJywgdmFsdWU6ICdjZW50ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3RvcCAnLCB2YWx1ZTogJ3RvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAncmlnaHQnLCB2YWx1ZTogJ3JpZ2h0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdsZWZ0ICcsIHZhbHVlOiAnbGVmdCcgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2NlbnRlciB0b3AnLCB2YWx1ZTogJ2NlbnRlciB0b3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2NlbnRlciByaWdodCcsIHZhbHVlOiAnY2VudGVyIHJpZ2h0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdjZW50ZXIgYm90dG9tJywgdmFsdWU6ICdjZW50ZXIgYm90dG9tJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdjZW50ZXIgbGVmdCcsIHZhbHVlOiAnY2VudGVyIGxlZnQnIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICd0b3AgcmlnaHQnLCB2YWx1ZTogJ3RvcCByaWdodCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAndG9wIGxlZnQnLCB2YWx1ZTogJ3RvcCBsZWZ0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICd0b3AgY2VudGVyJywgdmFsdWU6ICd0b3AgY2VudGVyJyB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnYm90dG9tIHJpZ2h0JywgdmFsdWU6ICdib3R0b20gcmlnaHQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2JvdHRvbSBsZWZ0JywgdmFsdWU6ICdib3R0b20gbGVmdCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnYm90dG9tIGNlbnRlcicsIHZhbHVlOiAnYm90dG9tIGNlbnRlcicgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2xlZnQgY2VudGVyJywgdmFsdWU6ICdsZWZ0IGNlbnRlcicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbGVmdCB0b3AnLCB2YWx1ZTogJ2xlZnQgdG9wJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdsZWZ0IGJvdHRvbScsIHZhbHVlOiAnbGVmdCBib3R0b20nIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdyaWdodCBjZW50ZXInLCB2YWx1ZTogJ3JpZ2h0IGNlbnRlcicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAncmlnaHQgdG9wJywgdmFsdWU6ICdyaWdodCB0b3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3JpZ2h0IGJvdHRvbScsIHZhbHVlOiAncmlnaHQgYm90dG9tJyB9LFxyXG5cclxuICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBzdHlsZTogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBiYWNrZ3JvdW5kUG9zaXRpb246dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwnYmFja2dyb3VuZFBvc2l0aW9uJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkZpamFjacOzblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZEF0dGFjaG1lbnQgfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnJywgdmFsdWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2ZpeGVkJywgdmFsdWU6ICdmaXhlZCcgfSxcclxuICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBzdHlsZTogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBiYWNrZ3JvdW5kQXR0YWNobWVudDp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCdiYWNrZ3JvdW5kQXR0YWNobWVudCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiY29uc3QgeyBUZXh0Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmltcG9ydCB7IHNhbml0aXplU3R5bGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxpdGllcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0U3BhY2VEaW1lbnNpb24oe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9KXtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZS1zcGFjaW5nXCI+RXNwYWNpYWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24tY29udHJvbCB0aXRsZS1zcGFjaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBhdHRyaWJ1dGVzLnN0eWxlLm1hcmdpblRvcCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgbWFyZ2luVG9wOnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdtYXJnaW5Ub3AnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBhdHRyaWJ1dGVzLnN0eWxlLm1hcmdpblJpZ2h0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlIDogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBtYXJnaW5SaWdodDp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAnbWFyZ2luUmlnaHQnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgYXR0cmlidXRlcy5zdHlsZS5tYXJnaW5Cb3R0b20gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIG1hcmdpbkJvdHRvbTp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAnbWFyZ2luQm90dG9tJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBhdHRyaWJ1dGVzLnN0eWxlLm1hcmdpbkxlZnQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIG1hcmdpbkxlZnQ6dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ21hcmdpbkxlZnQnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZGRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgYXR0cmlidXRlcy5zdHlsZS5wYWRkaW5nVG9wIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIHBhZGRpbmdUb3A6dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdwYWRkaW5nVG9wJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgYXR0cmlidXRlcy5zdHlsZS5wYWRkaW5nUmlnaHQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgcGFkZGluZ1JpZ2h0OnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAncGFkZGluZ1JpZ2h0JywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IGF0dHJpYnV0ZXMuc3R5bGUucGFkZGluZ0JvdHRvbSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlIDogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBwYWRkaW5nQm90dG9tOnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAncGFkZGluZ0JvdHRvbScsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgYXR0cmlidXRlcy5zdHlsZS5wYWRkaW5nTGVmdCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlIDogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBwYWRkaW5nTGVmdDp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ3BhZGRpbmdMZWZ0JywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9