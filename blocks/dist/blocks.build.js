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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY2FyZC9jYXJkLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2NhcmQvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY2FyZC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2NvbHVtbi9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9jb2x1bW4vZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9jb2x1bW4vZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY29sdW1uL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvY29sdW1uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FsbGVyeS9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2dhbGxlcnkvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FsbGVyeS9nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2dhbGxlcnkvc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9nYWxsZXJ5L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FuaW1hdGlvbi9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9nYW5pbWF0aW9uL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FuaW1hdGlvbi9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9nYW5pbWF0aW9uL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvZ2FuaW1hdGlvbi9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2hvdGdyYXBoaWMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvaG90Z3JhcGhpYy9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2hvdGdyYXBoaWMvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvaG90Z3JhcGhpYy9zYXZlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL2hvdGdyYXBoaWMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9wb3N0cy9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Bvc3RzL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Bvc3RzL3Bvc3RzLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Bvc3RzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MvcHJpY2luZ3RhYmxlL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3ByaWNpbmd0YWJsZS9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3ByaWNpbmd0YWJsZS9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9wcmljaW5ndGFibGUvc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9wcmljaW5ndGFibGUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy9yb3cvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3Mvcm93L2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3Mvcm93L2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Jvdy9zYXZlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2tzL3Jvdy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvY29tcG9uZW50cy9HcmFwaGljUGlja2VyLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvY29tcG9uZW50cy9JY29uUGlja2VyLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvY29tcG9uZW50cy9QYXJhZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9jb21wb25lbnRzL1RpdGxlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9oZWxwZXJzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2hlbHBlcnMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3N0eWxlL0VkaXRCYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvc3R5bGUvRWRpdFNwYWNlRGltZW5zaW9uLmpzIl0sIm5hbWVzIjpbInJlZ2lzdGVyQmxvY2tUeXBlIiwid3AiLCJibG9ja3MiLCJjb21wb25lbnRzIiwiVGV4dENvbnRyb2wiLCJJY29uQnV0dG9uIiwiUGFuZWxCb2R5IiwiU2VsZWN0Q29udHJvbCIsIkNoZWNrYm94Q29udHJvbCIsIkNvbG9yUGFsZXR0ZSIsImJsb2NrRWRpdG9yIiwiUmljaFRleHQiLCJJbnNwZWN0b3JDb250cm9scyIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsInR5cGUiLCJjYXJkSW52ZXJzZSIsInZhbCIsInN0eWxlIiwicGFyYWdyYXBoIiwiaW1hZ2UiLCJ1cmwiLCJhbHQiLCJidXR0b25zIiwiZmxvYXRpbmdzIiwiZWRpdCIsInNldEF0dHJpYnV0ZXMiLCJ1cGRhdGVCdXR0b24iLCJidXR0b24iLCJjb25jYXQiLCJjbG9uZUFycmF5IiwiZmlsdGVyIiwiaXRlbUZpbHRlciIsImluZGV4IiwidXBkYXRlRmxvYXRpbmciLCJyZW1vdmVGbG9hdGluZ0J1dHRvbiIsInJlbmRlckZsb2F0aW5ncyIsInNvcnQiLCJhIiwiYiIsIm1hcCIsImJ0biIsImxhYmVsIiwidmFsdWUiLCJkaXNwbGF5TGluayIsImhyZWYiLCJkaXNwbGF5IiwicmVuZGVyQnV0dG9ucyIsInJlbW92ZUxpbmtCdXR0b24iLCJhZGRGbG9hdGluZ0J1dHRvbiIsImJ0bmxpbmsiLCJsZW5ndGgiLCJhZGRMaW5rQnV0dG9uIiwiYXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImFycjIiLCJmcm9tIiwiaW5zcGVjdG9yQ29udHJvbCIsIk1haW5Db2xvcnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRCYXNpY0NhcmQiLCJnZXRJbWFnZUNhcmQiLCJjYXJkSW1hZ2UiLCJtZWRpYSIsImNhcmRDb250ZW50IiwicmVuZGVyQ29udGVudCIsImdldENhcmQiLCJzYXZlIiwiZ2V0Q2FyZEFjdGlvbnMiLCJnZXRGbG9hdGluZ0FjdGlvbnMiLCJoYXNDb250YWluZXIiLCJzbWFsbCIsIm1lZGl1bSIsImxhcmdlIiwib2Zmc2V0U21hbGwiLCJvZmZzZXRNZWRpdW0iLCJvZmZzZXRMYXJnZSIsIklubmVyQmxvY2tzIiwiUGFuZWxSb3ciLCJUYWJQYW5lbCIsIkNvbXBvbmVudCIsImVsZW1lbnQiLCJjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCIsImNvbXBvc2UiLCJjbGFzc2VzIiwiQ29sdW1uRWRpdCIsImFyZ3VtZW50cyIsImNsaWVudElkIiwicHJvcHMiLCJzZWxlY3QiLCJkYXRhIiwicGFyZW50QmxvY2siLCJnZXRCbG9ja3NCeUNsaWVudElkIiwiY2hpbGRCbG9ja3MiLCJpbm5lckJsb2NrcyIsImVtcHR5QmxvY2siLCJjbGFzc05hbWUiLCJyZW5kZXJUYWIxIiwiaG9va3MiLCJhZGRGaWx0ZXIiLCJjb2x1bW5DdXN0b21DbGFzc05hbWUiLCJyZW5kZXJUYWIyIiwiRWRpdEJhY2tncm91bmQiLCJyZW5kZXJUYWIzIiwiRWRpdFNwYWNlRGltZW5zaW9uIiwicmVuZGVyVGFiIiwidGFiTmFtZSIsIm5hbWUiLCJ0YWIiLCJCbG9ja0xpc3RCbG9jayIsIlJvd1NhdmUiLCJCbG9ja0NvbnRyb2xzIiwiUGxhaW5UZXh0IiwiUmFuZ2VDb250cm9sIiwiU2xvdGhHZWVrR2FsbGVyeUVkaXQiLCJjb25zb2xlIiwibG9nIiwiZ3JpZF9jb3VudCIsIml0ZW0iLCJtb2RlbCIsIm5ld09iamVjdCIsIk9iamVjdCIsImFzc2lnbiIsIml0ZW1zIiwiY29sdW1uV2lkdGgiLCJ3aWR0aCIsIm9uQ2hhbmdlRXZlbnQiLCJpbWFnZVVybCIsImltYWdlQWx0IiwicmVuZGVySXRlbXMiLCJyZW5kZXJFZGl0SXRlbSIsImluc3BlY3RvckNvbnRyb2xzIiwiX18iLCJpMThuIiwic291cmNlIiwiYXR0cmlidXRlIiwic2VsZWN0b3IiLCJxdWVyeSIsIlNsb3RoR2Vla0dhbGxlcnlTYXZlIiwicmVuZGVySXRlbSIsImlkIiwiZ3JhcGhpYyIsIm1heFdpZHRoIiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsIk1lZGlhVXBsb2FkIiwiQnV0dG9uIiwiZ3JhcGhpY1VybCIsImdyYWNwaGljQWx0IiwiYm90dG9tIiwibGVmdCIsIm9wZW4iLCJ1bmRlZmluZWQiLCJibG9ja0NvbnRyb2xzIiwicHVzaE5ld0l0ZW0iLCJtYWluQ29udHJvbCIsInJlbmRlckdyYXBoaWMiLCJwYXJzZUludCIsIml0ZW1zQ29udHJvbCIsInVwZGF0ZUl0ZW0iLCJ6SW5kZXgiLCJncmFwaGljQWx0IiwiaGVpZ2h0IiwiVGV4dGFyZWFDb250cm9sIiwiYm9keSIsInBvc2l0aW9uIiwidG9wIiwid2l0aFNlbGVjdCIsIkNvbG9yUGlja2VyIiwiYXBpRmV0Y2giLCJhZGRRdWVyeUFyZ3MiLCJDQVRFR09SSUVTX0xJU1RfUVVFUlkiLCJwZXJfcGFnZSIsIlNsb3RoR2Vla1Bvc3RFZGl0Iiwic3RhdGUiLCJjYXRlZ29yaWVzTGlzdCIsImlzU3RpbGxNb3VudGVkIiwiZmV0Y2hSZXF1ZXN0IiwicGF0aCIsInRoZW4iLCJzZXRTdGF0ZSIsInBvc3RzIiwiY29sdW1ucyIsInBvc3RfcGVyX3BhZ2UiLCJjYXRlZ29yeV9zZWxlY3RlZCIsImNhdCIsImFjdGlvbl9wb3N0IiwiZ2V0UkdCQUNvbG9yIiwib3B0aW9uMCIsInBvc3QiLCJ0aXRsZUNsYXNzZXMiLCJpbWFnZV91cmwiLCJfZW1iZWRkZWQiLCJzb3VyY2VfdXJsIiwicmVuZGVyZWQiLCJleGNlcnB0IiwibGluayIsIm9wdGlvbjEiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJvcHRpb24yIiwiZ2V0RW50aXR5UmVjb3JkcyIsImNhdGVnb3JpZXMiLCJfZW1iZWQiLCJrZXl3b3JkcyIsImN1cnJlbmN5IiwicHJpY2UiLCJjZW50cyIsImZlYXR1cmVzIiwiUHJpY2luZ1RhYmxlRWRpdCIsImZlYXR1cmUiLCJ0ZXh0IiwiYWN0aXZlIiwidXBkYXRlX2ZlYXR1cmUiLCJyZW5kZXJfZmVhdHVyZXMiLCJhZGRfZmVhdHVyZSIsIlByaWNpbmdUYWJsZVNhdmUiLCJpdHNTZWN0aW9uIiwiVG9nZ2xlQ29udHJvbCIsInJvd0N1c3RvbUNsYXNzTmFtZSIsIlJvd0VkaXQiLCJBTExPV0VEX0JMT0NLUyIsIm9uU2VsZWN0IiwicmVuZGVyQ29udGFpbmVyIiwicmVuZGVyUm93IiwiR3JhcGhpY1BpY2tlciIsIm9wZW5FdmVudCIsIm9uQ2hhbmdlIiwiZ2V0SW1hZ2VCdXR0b24iLCJEcm9wZG93biIsIkljb25QaWNrZXIiLCJpY29ucyIsImZpbmQiLCJpc09wZW4iLCJvblRvZ2dsZSIsInByZWZpeCIsIkFsaWdubWVudFRvb2xiYXIiLCJQYXJhZ3JhcGgiLCJmb250U2l6ZSIsImNvbG9yIiwidGV4dEFsaWduIiwibWFyZ2luIiwicGFkZGluZyIsImFycmF5IiwibmV3VmFsdWUiLCJzcGxpdCIsImpvaW4iLCJwbGFjZWhvbGRlciIsInVwZGF0ZU1QIiwiVGl0bGUiLCJzYW5pdGl6ZVN0eWxlIiwicmdiIiwiciIsImciLCJiYWNrZ3JvdW5kSW1hZ2VCdXR0b25zIiwic2xpY2UiLCJuZXdTdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRBdHRhY2htZW50IiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtB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LEVBQWJBO0FBQWIsT0FBRCxFQUE4QixhQUE5QixFQUE2Q2lCLEtBQTdDLENBQWI7QUFDSDtBQUxMLElBREosQ0E1QkosQ0FyQ0osQ0FESixDQUZKLENBREo7QUFtRkgsQyIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0ICcuL2VkaXRvci5zY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuXHJcblxyXG4vL2ltcG9ydCAnLi9ibG9ja3MvdGFicy9ibG9jayc7XHJcbi8vaW1wb3J0ICcuL2Jsb2Nrcy9wb3N0cy9wb3N0cyc7XHJcbi8vaW1wb3J0ICcuL2Jsb2Nrcy9nYWxsZXJ5L2dhbGxlcnknO1xyXG4vL2ltcG9ydCAnLi9ibG9ja3MvY29udGFpbmVyL2NvbnRhaW5lcic7XHJcbi8vaW1wb3J0ICcuL2Jsb2Nrcy9ob3RncmFwaGljL2Jsb2NrJztcclxuLy9pbXBvcnQgJy4vYmxvY2tzL2dhbmltYXRpb24vYmxvY2snO1xyXG5cclxuaW1wb3J0ICcuL2Jsb2Nrcy9yb3cvYmxvY2snO1xyXG5pbXBvcnQgJy4vYmxvY2tzL2NvbHVtbi9ibG9jayc7XHJcblxyXG5cclxuaW1wb3J0ICcuL2Jsb2Nrcy9jYXJkL2NhcmQnO1xyXG5pbXBvcnQgJy4vYmxvY2tzL2dhbGxlcnkvZ2FsbGVyeSc7XHJcbmltcG9ydCAnLi9ibG9ja3MvaG90Z3JhcGhpYy9ibG9jayc7XHJcbmltcG9ydCAnLi9ibG9ja3MvcG9zdHMvcG9zdHMnO1xyXG5pbXBvcnQgJy4vYmxvY2tzL2dhbmltYXRpb24vYmxvY2snO1xyXG5pbXBvcnQgJy4vYmxvY2tzL3ByaWNpbmd0YWJsZS9ibG9jayc7XHJcblxyXG5cclxuIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xyXG5jb25zdCB7IFRleHRDb250cm9sLCBJY29uQnV0dG9uLCBQYW5lbEJvZHksIFNlbGVjdENvbnRyb2wsIENoZWNrYm94Q29udHJvbCwgQ29sb3JQYWxldHRlIH0gPSB3cC5jb21wb25lbnRzO1xyXG5jb25zdCB7IFJpY2hUZXh0LCBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcblxyXG5pbXBvcnQgIFRpdGxlICBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RpdGxlJztcclxuaW1wb3J0ICBQYXJhZ3JhcGggIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFyYWdyYXBoJztcclxuaW1wb3J0ICBHcmFwaGljUGlja2VyICBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dyYXBoaWNQaWNrZXInO1xyXG5pbXBvcnQgTWFpbkNvbG9ycyBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbG9ycydcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xyXG5cclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCdzZy9jYXJkJywge1xyXG4gICAgdGl0bGU6ICdDYXJkJyxcclxuICAgIGljb246ICdzdGFyLWVtcHR5JyxcclxuICAgIGNhdGVnb3J5OiAnc2cnLFxyXG4gICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIHR5cGU6e1xyXG4gICAgICAgICAgICB0eXBlOidzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnYmFzaWMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXJkSW52ZXJzZTp7XHJcbiAgICAgICAgICAgIHR5cGU6J2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZTp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB2YWw6J0xvcmVtIElwc3VtJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOnt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcmFncmFwaDp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB2YWw6J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFN1c3BlbmRpc3NlIGNvbnNlcXVhdCBlbmltIHZlbCBsaWd1bGEgc3VzY2lwaXQgc2VtcGVyLiBOdW5jIGJsYW5kaXQsIG1hZ25hIHZpdGFlIGV1aXNtb2QgbW9sZXN0aWUsIG5pYmggbmVxdWUgcHVsdmluYXIgZXJhdCwgZGljdHVtIGVnZXN0YXMgbWFnbmEgdXJuYSBpZCBhcmN1LicsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTp7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZTp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB1cmw6JycsXHJcbiAgICAgICAgICAgICAgICBhbHQ6JydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnV0dG9uczp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmbG9hdGluZ3M6e1xyXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3R5bGU6e1xyXG4gICAgICAgICAgICB0eXBlOidvYmplY3QnLFxyXG4gICAgICAgICAgICBkZWZhdWx0Ont9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0KCB7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30gKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IChidXR0b24pID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtdLmNvbmNhdChjbG9uZUFycmF5KGF0dHJpYnV0ZXMuYnV0dG9ucy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW1GaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbUZpbHRlci5pbmRleCAhPSBidXR0b24uaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9KSksIFtidXR0b25dKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1cGRhdGVGbG9hdGluZyA9IChidXR0b24pID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nczogW10uY29uY2F0KGNsb25lQXJyYXkoYXR0cmlidXRlcy5mbG9hdGluZ3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gYnV0dG9uLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgfSkpLCBbYnV0dG9uXSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlRmxvYXRpbmdCdXR0b24gPSAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nczogYXR0cmlidXRlcy5mbG9hdGluZ3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gdmFsO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJGbG9hdGluZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLmZsb2F0aW5ncy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XHJcbiAgICAgICAgICAgIH0pLm1hcCggYnRuID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWZsb2F0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctYnV0dG9uLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYnRuLmxhYmVsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4gdXBkYXRlRmxvYXRpbmcoIHsuLi5idG4sIGxhYmVsOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1RleHRvIGRlbCBib3TDs24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmUgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRtaW4tbGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IGJ0bi5kaXNwbGF5TGluayA9PSAnbm9uZScgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZsb2F0aW5nKHsuLi5idG4sIGRpc3BsYXlMaW5rOiB2YWx9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gcmVtb3ZlRmxvYXRpbmdCdXR0b24oYnRuLmluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZy1idXR0b24taHJlZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHVwZGF0ZUZsb2F0aW5nKCB7Li4uYnRuLCBocmVmOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBidG4uaHJlZiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHtkaXNwbGF5OiBidG4uZGlzcGxheUxpbmt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5idXR0b25zLnNvcnQoZnVuY3Rpb24oYSAsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICAgICAgfSkubWFwKCBidG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctYnV0dG9uLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYnRuLmxhYmVsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4gdXBkYXRlQnV0dG9uKCB7Li4uYnRuLCBsYWJlbDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUZXh0byBkZWwgYm90w7NuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkbWluLWxpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBidG4uZGlzcGxheUxpbmsgPT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCdXR0b24oey4uLmJ0biwgZGlzcGxheUxpbms6IHZhbH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiByZW1vdmVMaW5rQnV0dG9uKGJ0bi5pbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctYnV0dG9uLWhyZWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB2YWx1ZSA9PiB1cGRhdGVCdXR0b24oIHsuLi5idG4sIGhyZWY6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGJ0bi5ocmVmIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsge2Rpc3BsYXk6IGJ0bi5kaXNwbGF5TGlua30gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9IClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZEZsb2F0aW5nQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnRubGluayA9IHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBhdHRyaWJ1dGVzLmZsb2F0aW5ncy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0FkZCBsYWJlbCcsXHJcbiAgICAgICAgICAgICAgICBocmVmOicjJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlMaW5rOiAnbm9uZSdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICAgICAgZmxvYXRpbmdzOiBbXS5jb25jYXQoY2xvbmVBcnJheShhdHRyaWJ1dGVzLmZsb2F0aW5ncyksIFtidG5saW5rXSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZW1vdmVMaW5rQnV0dG9uID0gKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBhdHRyaWJ1dGVzLmJ1dHRvbnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gdmFsO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRMaW5rQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnRubGluayA9IHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBhdHRyaWJ1dGVzLmJ1dHRvbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdBZGQgbGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgaHJlZjonIycsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TGluazogJ25vbmUnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtdLmNvbmNhdChjbG9uZUFycmF5KGF0dHJpYnV0ZXMuYnV0dG9ucyksIFtidG5saW5rXSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjbG9uZUFycmF5ID0gKGFycikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyMltpXSA9IGFycltpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnIyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5zcGVjdG9yQ29udHJvbCA9ICgpID0+e1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9J0Rpc2XDsW8nIGluaXRpYWxPcGVuPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ2FyZCBzdHlsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50eXBlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHsgc2V0QXR0cmlidXRlcyggeyB0eXBlOiB2YWx1ZSB9ICkgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdiYXNpYycsIGxhYmVsOiAnQmFzaWMgQ2FyZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnaW1hZ2UnLCBsYWJlbDogJ0ltYWdlIENhcmQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbnZlcnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmNhcmRJbnZlcnNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhcmRJbnZlcnNlOiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQYWxldHRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMgPSB7IE1haW5Db2xvcnMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRDb2xvciB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgYmFja2dyb3VuZENvbG9yOmAke3ZhbHVlfWAgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0QmFzaWNDYXJkID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXthdHRyaWJ1dGVzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IHZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlLnZhbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IGF0dHJpYnV0ZXMudGl0bGUuc3R5bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ3JlZ2EgdW4gdMOtdHVsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKHsgcGFyYWdyYXBoOiB2YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5wYXJhZ3JhcGgudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgYXR0cmlidXRlcy5wYXJhZ3JhcGguc3R5bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ3JlZ2EgYXF1w60gZWwgY3VlcnBvIGRlIGxhIHRhcmpldGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1jYXJkLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1cy1hbHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBhZGRMaW5rQnV0dG9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuYnV0dG9ucy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubWFwKCBidG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbi1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBidG4ubGFiZWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4gdXBkYXRlQnV0dG9uKCB7Li4uYnRuLCBsYWJlbDogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVGV4dG8gZGVsIGJvdMOzbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmUgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRtaW4tbGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IGJ0bi5kaXNwbGF5TGluayA9PSAnbm9uZScgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCdXR0b24oey4uLmJ0biwgZGlzcGxheUxpbms6IHZhbH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gcmVtb3ZlTGlua0J1dHRvbihidG4uaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbi1ocmVmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHVwZGF0ZUJ1dHRvbiggey4uLmJ0biwgaHJlZjogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGJ0bi5ocmVmIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHtkaXNwbGF5OiBidG4uZGlzcGxheUxpbmt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0SW1hZ2VDYXJkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkSW1hZ2UgPSAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JhcGhpY1BpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG1lZGlhID0+IHNldEF0dHJpYnV0ZXMoIHsgaW1hZ2U6IG1lZGlhIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17YXR0cmlidXRlcy5pbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YXR0cmlidXRlcy5pbWFnZS5hbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1mbG9hdGluZy1hY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXMtYWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gYWRkRmxvYXRpbmdCdXR0b24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckZsb2F0aW5ncygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkQ29udGVudCA9IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiB2YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlLnZhbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgYXR0cmlidXRlcy50aXRsZS5zdHlsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdyZWdhIHVuIHTDrXR1bG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKHsgcGFyYWdyYXBoOiB2YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnBhcmFncmFwaC52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IGF0dHJpYnV0ZXMucGFyYWdyYXBoLnN0eWxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ3JlZ2EgYXF1w60gZWwgY3VlcnBvIGRlIGxhIHRhcmpldGFcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGF0dHJpYnV0ZXMuY2FyZEludmVyc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkQ29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRDb250ZW50XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17YXR0cmlidXRlcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyByZW5kZXJDb250ZW50KCkgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1jYXJkLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1cy1hbHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBhZGRMaW5rQnV0dG9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckJ1dHRvbnMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0Q2FyZCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoYXR0cmlidXRlcy50eXBlKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Jhc2ljJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QmFzaWNDYXJkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0SW1hZ2VDYXJkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoW1xyXG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yQ29udHJvbCgpLFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay1zZy1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBnZXRDYXJkKCkgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2F2ZSh7YXR0cmlidXRlc30pIHtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0Q2FyZEFjdGlvbnMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihhdHRyaWJ1dGVzLmJ1dHRvbnMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmJ1dHRvbnMubWFwKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YnV0dG9uLmhyZWZ9PntidXR0b24ubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldEZsb2F0aW5nQWN0aW9ucyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKGF0dHJpYnV0ZXMuZmxvYXRpbmdzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmZsb2F0aW5ncy5tYXAoYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IGBidG4tZmxvYXRpbmcgaGFsZndheS1mYWIgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IG5vLXJhZGl1cyBhdXRvLXdpZHRoICR7IGF0dHJpYnV0ZXMuY2FyZEludmVyc2UgPyAndG9wJyA6ICcnfWAgfSBocmVmPXtidXR0b24uaHJlZn0+e2J1dHRvbi5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldEJhc2ljQ2FyZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2F0dHJpYnV0ZXMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lPSdoMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FyZC10aXRsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZS52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2F0dHJpYnV0ZXMudGl0bGUuc3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2F0dHJpYnV0ZXMucGFyYWdyYXBoLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnBhcmFncmFwaC52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgZ2V0Q2FyZEFjdGlvbnMoKSB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0SW1hZ2VDYXJkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkSW1hZ2UgPSAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXR0cmlidXRlcy5pbWFnZS51cmx9IGFsdD17YXR0cmlidXRlcy5pbWFnZS5hbHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0RmxvYXRpbmdBY3Rpb25zKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZENvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU9J2gzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQtdGl0bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZS52YWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YXR0cmlidXRlcy50aXRsZS5zdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2F0dHJpYnV0ZXMucGFyYWdyYXBoLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0LkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5wYXJhZ3JhcGgudmFsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoYXR0cmlidXRlcy5jYXJkSW52ZXJzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZENvbnRlbnRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2F0dHJpYnV0ZXMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ29udGVudCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q2FyZEFjdGlvbnMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldENhcmQgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGF0dHJpYnV0ZXMudHlwZSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdiYXNpYyc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEJhc2ljQ2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEltYWdlQ2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIGdldENhcmQoKVxyXG4gICAgICAgIClcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XHJcblxyXG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnO1xyXG5cclxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCAnc2cvY29sdW1uJywge1xyXG4gICAgdGl0bGU6ICdDb2x1bW4nLFxyXG4gICAgaWNvbjogJ3N0YXItZW1wdHknLFxyXG4gICAgY2F0ZWdvcnk6ICdzZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgaGFzQ29udGFpbmVyOntcclxuICAgICAgICAgICAgdHlwZTonYm9vbGVhbicsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNtYWxsOntcclxuICAgICAgICAgICAgdHlwZTonc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDonczEyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVkaXVtOntcclxuICAgICAgICAgICAgdHlwZTonc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDonJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFyZ2U6e1xyXG4gICAgICAgICAgICB0eXBlOidzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OicnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvZmZzZXRTbWFsbDp7XHJcbiAgICAgICAgICAgIHR5cGU6J3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6JydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9mZnNldE1lZGl1bTp7XHJcbiAgICAgICAgICAgIHR5cGU6J3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6JydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9mZnNldExhcmdlOntcclxuICAgICAgICAgICAgdHlwZTonc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDonJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3R5bGU6e1xyXG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICAgICAgZGVmYXVsdDoge31cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVkaXQsXHJcblxyXG4gICAgc2F2ZVxyXG59ICk7IiwiaW1wb3J0IEVkaXRCYWNrZ3JvdW5kIGZyb20gXCIuLi8uLi9zdHlsZS9FZGl0QmFja2dyb3VuZFwiO1xyXG5pbXBvcnQgRWRpdFNwYWNlRGltZW5zaW9uIGZyb20gXCIuLi8uLi9zdHlsZS9FZGl0U3BhY2VEaW1lbnNpb25cIjtcclxuXHJcbmNvbnN0IHsgSW5uZXJCbG9ja3MsIEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuY29uc3QgeyBTZWxlY3RDb250cm9sLCBQYW5lbEJvZHksIFBhbmVsUm93LCBUYWJQYW5lbCB9ID0gd3AuY29tcG9uZW50cztcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gPSB3cC5jb21wb3NlO1xyXG5cclxubGV0IGNsYXNzZXMgPSBcIlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sdW1uRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgY2xpZW50SWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzZWxlY3QgfSA9IHdwLmRhdGE7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmVudEJsb2NrID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzQnlDbGllbnRJZCggY2xpZW50SWQgKVsgMCBdO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkQmxvY2tzID0gcGFyZW50QmxvY2suaW5uZXJCbG9ja3M7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtcHR5QmxvY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggY2hpbGRCbG9ja3MubGVuZ3RoID09IDApe1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWVtcHR5LWlubmVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctYmxvY2stbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXNoaWNvbnMgZGFzaGljb25zLXNjcmVlbm9wdGlvbnNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbWllbnphIGEgYXJtYXIgdHUgY29udGVuaWRvIGNvbiB1bm8gbyBtw6FzIGJsb3F1ZXMgZGUgbGEgbGlicmVyw61hIHByZXNpb25hbmRvIGVuIGVsIGJvdMOzbiBtw6FzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7Y2xhc3NOYW1lLCBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNsYXNzZXMgPSBhdHRyaWJ1dGVzLnNtYWxsO1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJUYWIxID0gIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnNtYWxsIH1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczEnLCB2YWx1ZTogJ3MxJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczInLCB2YWx1ZTogJ3MyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczMnLCB2YWx1ZTogJ3MzJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczQnLCB2YWx1ZTogJ3M0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczUnLCB2YWx1ZTogJ3M1JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczYnLCB2YWx1ZTogJ3M2JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczcnLCB2YWx1ZTogJ3M3JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczgnLCB2YWx1ZTogJ3M4JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczknLCB2YWx1ZTogJ3M5JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnczEwJywgdmFsdWU6ICdzMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdzMTEnLCB2YWx1ZTogJ3MxMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3MxMicsIHZhbHVlOiAnczEyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzbWFsbDogdmFsdWUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpdW0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICctJywgdmFsdWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtMScsIHZhbHVlOiAnbTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtMicsIHZhbHVlOiAnbTInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtMycsIHZhbHVlOiAnbTMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtNCcsIHZhbHVlOiAnbTQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtNScsIHZhbHVlOiAnbTUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtNicsIHZhbHVlOiAnbTYnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtNycsIHZhbHVlOiAnbTcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtOCcsIHZhbHVlOiAnbTgnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtOScsIHZhbHVlOiAnbTknIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdtMTAnLCB2YWx1ZTogJ20xMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ20xMScsIHZhbHVlOiAnbTExJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbTEyJywgdmFsdWU6ICdtMTInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IG1lZGl1bTogdmFsdWUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmxhcmdlIH1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnLScsIHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDEnLCB2YWx1ZTogJ2wxJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDInLCB2YWx1ZTogJ2wyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDMnLCB2YWx1ZTogJ2wzJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDQnLCB2YWx1ZTogJ2w0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDUnLCB2YWx1ZTogJ2w1JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDYnLCB2YWx1ZTogJ2w2JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDcnLCB2YWx1ZTogJ2w3JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDgnLCB2YWx1ZTogJ2w4JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDknLCB2YWx1ZTogJ2w5JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbDEwJywgdmFsdWU6ICdsMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdsMTEnLCB2YWx1ZTogJ2wxMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2wxMicsIHZhbHVlOiAnbDEyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBsYXJnZTogdmFsdWUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPZmZzZXQgc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5vZmZzZXRTbWFsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJy0nLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zMScsIHZhbHVlOiAnb2Zmc2V0LXMxJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXMyJywgdmFsdWU6ICdvZmZzZXQtczInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczMnLCB2YWx1ZTogJ29mZnNldC1zMycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zNCcsIHZhbHVlOiAnb2Zmc2V0LXM0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXM1JywgdmFsdWU6ICdvZmZzZXQtczUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczYnLCB2YWx1ZTogJ29mZnNldC1zNicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zNycsIHZhbHVlOiAnb2Zmc2V0LXM3JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXM4JywgdmFsdWU6ICdvZmZzZXQtczgnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczknLCB2YWx1ZTogJ29mZnNldC1zOScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1zMTAnLCB2YWx1ZTogJ29mZnNldC1zMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtczExJywgdmFsdWU6ICdvZmZzZXQtczExJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LXMxMicsIHZhbHVlOiAnb2Zmc2V0LXMxMicgfSxcclxuICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgb2Zmc2V0U21hbGw6IHZhbHVlIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnc2cvY29sdW1uJywgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT2Zmc2V0IG1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLm9mZnNldE1lZGl1bSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJy0nLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tMScsIHZhbHVlOiAnb2Zmc2V0LW0xJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW0yJywgdmFsdWU6ICdvZmZzZXQtbTInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTMnLCB2YWx1ZTogJ29mZnNldC1tMycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tNCcsIHZhbHVlOiAnb2Zmc2V0LW00JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW01JywgdmFsdWU6ICdvZmZzZXQtbTUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTYnLCB2YWx1ZTogJ29mZnNldC1tNicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tNycsIHZhbHVlOiAnb2Zmc2V0LW03JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW04JywgdmFsdWU6ICdvZmZzZXQtbTgnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTknLCB2YWx1ZTogJ29mZnNldC1tOScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1tMTAnLCB2YWx1ZTogJ29mZnNldC1tMTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbTExJywgdmFsdWU6ICdvZmZzZXQtbTExJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LW0xMicsIHZhbHVlOiAnb2Zmc2V0LW0xMicgfSxcclxuICAgICAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgb2Zmc2V0TWVkaXVtOiB2YWx1ZSB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdwLmhvb2tzLmFkZEZpbHRlcignZWRpdG9yLkJsb2NrTGlzdEJsb2NrJywgJ3NnL2NvbHVtbicsIGNvbHVtbkN1c3RvbUNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9mZnNldCBsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLm9mZnNldExhcmdlIH1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnLScsIHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWwxJywgdmFsdWU6ICdvZmZzZXQtbDEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDInLCB2YWx1ZTogJ29mZnNldC1sMicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sMycsIHZhbHVlOiAnb2Zmc2V0LWwzJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWw0JywgdmFsdWU6ICdvZmZzZXQtbDQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDUnLCB2YWx1ZTogJ29mZnNldC1sNScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sNicsIHZhbHVlOiAnb2Zmc2V0LWw2JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWw3JywgdmFsdWU6ICdvZmZzZXQtbDcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDgnLCB2YWx1ZTogJ29mZnNldC1sOCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sOScsIHZhbHVlOiAnb2Zmc2V0LWw5JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnb2Zmc2V0LWwxMCcsIHZhbHVlOiAnb2Zmc2V0LWwxMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ29mZnNldC1sMTEnLCB2YWx1ZTogJ29mZnNldC1sMTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdvZmZzZXQtbDEyJywgdmFsdWU6ICdvZmZzZXQtbDEyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBvZmZzZXRMYXJnZTogdmFsdWUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclRhYjIgPSAgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgeyBFZGl0QmFja2dyb3VuZCh0aGlzLnByb3BzKSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFiMyA9ICAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7IEVkaXRTcGFjZURpbWVuc2lvbih0aGlzLnByb3BzKSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFiID0gKHRhYk5hbWUpID0+e1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRhYk5hbWUpe1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYjEnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYjInOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYjMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJUYWIzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlclRhYjE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPVwiQWp1c3Rlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwic2ctdGFiLXBhbmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZS10YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0YWIxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnR3JpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0YWItb25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RhYjInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCRycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0YWItdHdvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RhYjMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEaW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFiLXRocmVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHRhYiApID0+IHJlbmRlclRhYih0YWIubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmVsUm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgZW1wdHlCbG9jaygpLFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtY29udGVudFwiIHN0eWxlPXsgYXR0cmlidXRlcy5zdHlsZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbm5lckJsb2Nrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJBcHBlbmRlcj17ICgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcGVuZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLXRleHQtYmxvY2stYXBwZW5kZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWJsb2NrLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLXNjcmVlbm9wdGlvbnNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lckJsb2Nrcy5CdXR0b25CbG9ja0FwcGVuZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY29uc3QgY29sdW1uQ3VzdG9tQ2xhc3NOYW1lID0gY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoKEJsb2NrTGlzdEJsb2NrKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvcHMgPT4ge1xyXG4gICAgICAgIGlmKHByb3BzLm5hbWUgPT0gXCJzZy9jb2x1bW5cIikge1xyXG4gICAgICAgICAgICByZXR1cm4gPEJsb2NrTGlzdEJsb2NrIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtgY29sICR7cHJvcHMuYXR0cmlidXRlcy5zbWFsbH0gJHtwcm9wcy5hdHRyaWJ1dGVzLm1lZGl1bX0gJHtwcm9wcy5hdHRyaWJ1dGVzLmxhcmdlfSAke3Byb3BzLmF0dHJpYnV0ZXMub2Zmc2V0U21hbGx9ICR7cHJvcHMuYXR0cmlidXRlcy5vZmZzZXRNZWRpdW19ICR7cHJvcHMuYXR0cmlidXRlcy5vZmZzZXRMYXJnZX1gfS8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPEJsb2NrTGlzdEJsb2NrIHsuLi5wcm9wc30vPlxyXG4gICAgfVxyXG59LCAnY29sdW1uQ3VzdG9tQ2xhc3NOYW1lJyk7XHJcblxyXG53cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9jb2x1bW4nLCBjb2x1bW5DdXN0b21DbGFzc05hbWUpO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IElubmVyQmxvY2tzfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvd1NhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtjbGFzc05hbWUsIGF0dHJpYnV0ZXN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sICR7Y2xhc3NOYW1lfSAke2F0dHJpYnV0ZXMuc21hbGx9ICR7YXR0cmlidXRlcy5tZWRpdW19ICR7YXR0cmlidXRlcy5sYXJnZX0gJHthdHRyaWJ1dGVzLm9mZnNldFNtYWxsfSAke2F0dHJpYnV0ZXMub2Zmc2V0TWVkaXVtfSAke2F0dHJpYnV0ZXMub2Zmc2V0TGFyZ2V9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXsgYXR0cmlidXRlcy5zdHlsZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElubmVyQmxvY2tzLkNvbnRlbnQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBCbG9ja0NvbnRyb2xzLEluc3BlY3RvckNvbnRyb2xzLFBsYWluVGV4dCB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IEljb25CdXR0b24sIFBhbmVsQm9keSwgUmFuZ2VDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaW1wb3J0IEdyYXBoaWNQaWNrZXIgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR3JhcGhpY1BpY2tlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90aEdlZWtHYWxsZXJ5RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdyaWRfY291bnQ6IFwiK3RoaXMucHJvcHMuYXR0cmlidXRlcy5ncmlkX2NvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZUV2ZW50KGl0ZW0sIG1vZGVsKXtcclxuICAgICAgICB2YXIgbmV3T2JqZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgbW9kZWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLmNvbmNhdCh0aGlzLmNsb25lQXJyYXkodGhpcy5wcm9wcy5hdHRyaWJ1dGVzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gaXRlbS5pbmRleDtcclxuICAgICAgICAgICAgfSkpLCBbbmV3T2JqZWN0XSlcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY2xvbmVBcnJheShhcnIpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFycjJbaV0gPSBhcnJbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycjI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRWRpdEl0ZW0oaXRlbSl7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbldpZHRoID0gKCAxMDAvdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmdyaWRfY291bnQgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW1cIiBzdHlsZT17IHsgd2lkdGg6YCR7Y29sdW1uV2lkdGh9JWAgfSB9PlxyXG4gICAgICAgICAgICAgICAgPEdyYXBoaWNQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG1lZGlhID0+IHRoaXMub25DaGFuZ2VFdmVudChpdGVtLCB7IGltYWdlVXJsOiBtZWRpYS51cmwgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgIHVybD17aXRlbS5pbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uaW1hZ2VBbHR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFBsYWluVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCB2YWx1ZSApID0+IHRoaXMub25DaGFuZ2VFdmVudChpdGVtLCB7dXJsOiB2YWx1ZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXJsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlckl0ZW1zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihhdHRyaWJ1dGVzLml0ZW1zLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuaXRlbXMuc29ydChmdW5jdGlvbihhICwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICAgICAgICAgIH0pLm1hcCgoaXRlbSkgPT4gdGhpcy5yZW5kZXJFZGl0SXRlbShpdGVtKSlcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8c3Bhbj5ObyBoYXkgaXRlbSBwYXJhIG1vc3RyYXI8L3NwYW4+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbnNwZWN0b3JDb250cm9scyA9IChcclxuICAgICAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT1cIkFqdXN0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTsO6bWVybyBkZSBjb2x1bW5hc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5ncmlkX2NvdW50IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gc2V0QXR0cmlidXRlcyggeyBncmlkX2NvdW50OiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW10uY29uY2F0KHRoaXMuY2xvbmVBcnJheShhdHRyaWJ1dGVzLml0ZW1zKSwgW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogYXR0cmlidXRlcy5pdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VBbHQ6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFncmVnYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmxvY2tDb250cm9scz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnNwZWN0b3JDb250cm9sc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1nYWxsZXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1nYWxsZXJ5LWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW1zKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnO1xyXG5cclxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5cclxucmVnaXN0ZXJCbG9ja1R5cGUoICdzZy9nYWxsZXJ5Jywge1xyXG4gICAgdGl0bGU6ICdHYWxsZXJ5JyxcclxuICAgIGljb246ICdzdGFyLWVtcHR5JyxcclxuICAgIGNhdGVnb3J5OiAnc2cnLFxyXG4gICAgYXR0cmlidXRlczp7XHJcbiAgICAgICAgZ3JpZF9jb3VudDoge1xyXG4gICAgICAgICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6ICdkYXRhLWNvdW50JyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICcuc2ctZ2FsbGVyeS1pbm5lcicsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogJ3F1ZXJ5JyxcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnNnLWl0ZW0nLFxyXG4gICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2RhdGEtaW5kZXgnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOntcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2hyZWYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLnNnLWl0ZW0tbGluaydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbWFnZVVybDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogJ2F0dHJpYnV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiAnc3JjJyxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5zZy1pdGVtLWdyYXBoaWMnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VBbHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6ICdhdHRyaWJ1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2FsdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuc2ctaXRlbS1ncmFwaGljJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0LFxyXG5cclxuICAgIHNhdmVcclxuXHJcbn0pOyIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdGhHZWVrR2FsbGVyeVNhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckl0ZW0oaXRlbSwgaW5kZXgpe1xyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW5XaWR0aCA9ICggMTAwL3RoaXMucHJvcHMuYXR0cmlidXRlcy5ncmlkX2NvdW50ICk7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtXCIgZGF0YS1pbmRleD17aW5kZXh9IHN0eWxlPXsgeyB3aWR0aDpgJHtjb2x1bW5XaWR0aH0lYCB9IH0gPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2ctaXRlbS1saW5rXCIgaHJlZj17aXRlbS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNnLWl0ZW0tZ3JhcGhpY1wiIHNyYz17aXRlbS5pbWFnZVVybH0gYWx0PXtpdGVtLmltYWdlQWx0fS8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWdhbGxlcnkgY29sIHMxMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1nYWxsZXJ5LWlubmVyXCIgZGF0YS1jb3VudD17YXR0cmlidXRlcy5ncmlkX2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gdGhpcy5yZW5kZXJJdGVtKGl0ZW0sIGluZGV4KSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcclxuXHJcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCAnc2cvZ2FuaW1hdGlvbicsIHtcclxuICAgIHRpdGxlOiAnR3JhcGhpYyBTdGFjaycsXHJcbiAgICBpY29uOiAnc3Rhci1lbXB0eScsXHJcbiAgICBjYXRlZ29yeTogJ3NnJyxcclxuICAgIGF0dHJpYnV0ZXM6e1xyXG4gICAgICAgIGlkOntcclxuICAgICAgICAgICAgZGVmYXVsdDpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OltdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBncmFwaGljOntcclxuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHVybDonJyxcclxuICAgICAgICAgICAgICAgIGFsdDonJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXhXaWR0aDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XCI1NTBweFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbmltYXRpb246e1xyXG4gICAgICAgICAgICBkZWZhdWx0OlwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGR1cmF0aW9uOntcclxuICAgICAgICAgICAgZGVmYXVsdDpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxheTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGVkaXQsXHJcblxyXG4gICAgc2F2ZVxyXG5cclxufSk7IiwiaW1wb3J0IEdyYXBoaWNQaWNrZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JhcGhpY1BpY2tlclwiO1xyXG5cclxuY29uc3QgeyBCbG9ja0NvbnRyb2xzLCBJbnNwZWN0b3JDb250cm9scywgTWVkaWFVcGxvYWQgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBJY29uQnV0dG9uLCBSYW5nZUNvbnRyb2wsIFBhbmVsQm9keSwgVGV4dENvbnRyb2wsIEJ1dHRvbiB9ID13cC5jb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdGhHZWVrR2FsbGVyeUVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hOZXdJdGVtKCl7XHJcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICAgICAgaW5kZXg6IGF0dHJpYnV0ZXMuaXRlbXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBpZDpcIlwiLFxyXG4gICAgICAgICAgICBncmFwaGljVXJsOlwiXCIsXHJcbiAgICAgICAgICAgIGdyYWNwaGljQWx0OlwiXCIsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjpcIlwiLFxyXG4gICAgICAgICAgICBzdHlsZTp7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGJvdHRvbTpcIjBcIixcclxuICAgICAgICAgICAgICAgIGxlZnQ6XCIwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICBpdGVtczogW10uY29uY2F0KHRoaXMuY2xvbmVBcnJheShhdHRyaWJ1dGVzLml0ZW1zKSwgW2l0ZW1dKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUl0ZW0oaXRlbSl7XHJcbiAgICAgICAgY29uc3QgeyBzZXRBdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXS5jb25jYXQodGhpcy5jbG9uZUFycmF5KHRoaXMucHJvcHMuYXR0cmlidXRlcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW1GaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtRmlsdGVyLmluZGV4ICE9IGl0ZW0uaW5kZXg7XHJcbiAgICAgICAgICAgIH0pKSwgW2l0ZW1dKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lQXJyYXkoYXJyKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIyW2ldID0gYXJyW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhcnIyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdyYXBoaWMob3Blbikge1xyXG4gICAgICAgIGNvbnN0IHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmdyYXBoaWMudXJsICE9PSAnJyAmJiBhdHRyaWJ1dGVzLmdyYXBoaWMudXJsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXR0cmlidXRlcy5ncmFwaGljLnVybH0gYWx0PVwiXCIgc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy10b29sYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IG9wZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBncmFwaGljIDogeyB1cmw6JycsIGFsdDonJyB9IH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLWltYWdlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgb3BlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNnLWJ1dHRvbiBmdWxsIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZ3JlZ2FyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBibG9ja0NvbnRyb2xzID0gKFxyXG4gICAgICAgICAgICA8QmxvY2tDb250cm9scz5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMucHVzaE5ld0l0ZW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZ3JlZ2FyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQmxvY2tDb250cm9scz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBtYWluQ29udHJvbCA9IChcclxuICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT1cIkdyYXBoaWMgU3RhY2tcIiBpbml0aWFsT3Blbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SW1hZ2VuIGRlIEZvbmRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8TWVkaWFVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIkltYWdlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5ncmFwaGljIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyBtZWRpYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCAgeyBncmFwaGljOiBtZWRpYSB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyAoeyBvcGVuIH0pID0+IHRoaXMucmVuZGVyR3JhcGhpYyhvcGVuKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbmNobyBtw6F4aW1vXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhcnNlSW50KGF0dHJpYnV0ZXMubWF4V2lkdGgrJycpIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMoe21heFdpZHRoOiBgJHt2YWx1ZX1weGAgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj17IDEgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMDAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQW5jbGFqZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMoe2lkOiB2YWx1ZSB9KSB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICApXHJcblxyXG5cclxuICAgICAgICBjb25zdCBpdGVtc0NvbnRyb2wgPSAoXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuaXRlbXMuc29ydChmdW5jdGlvbihhICwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgICAgICB9KS5tYXAoICggaXRlbSApID0+IChcclxuICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9e2BJdGVtICR7aXRlbS5pbmRleCsxfWB9IGluaXRpYWxPcGVuPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQW5jbGFqZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIGlkOiB2YWx1ZSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbmltYWNpw7NuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBpdGVtLmFuaW1hdGlvbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIGFuaW1hdGlvbjogdmFsdWUgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChpdGVtLnN0eWxlLndpZHRoKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIHN0eWxlOiB7Li4uaXRlbS5zdHlsZSwgd2lkdGg6YCR7dmFsdWV9JWB9IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChpdGVtLnN0eWxlLmJvdHRvbSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBzdHlsZTogey4uLml0ZW0uc3R5bGUsIGJvdHRvbTpgJHt2YWx1ZX0lYH0gfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChpdGVtLnN0eWxlLmxlZnQpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgc3R5bGU6IHsuLi5pdGVtLnN0eWxlLCBsZWZ0OmAke3ZhbHVlfSVgfSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiei1pbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS5zdHlsZS56SW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBzdHlsZTogey4uLml0ZW0uc3R5bGUsIHpJbmRleDogcGFyc2VJbnQodmFsdWUpfSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICApIClcclxuXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICByZXR1cm4gKFtcclxuXHJcbiAgICAgICAgICAgIGJsb2NrQ29udHJvbHMsXHJcbiAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgIHsgbWFpbkNvbnRyb2wgfVxyXG4gICAgICAgICAgICAgICAgeyBpdGVtc0NvbnRyb2wgfVxyXG4gICAgICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPixcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay1zZy1nYW5pbWF0aW9uIHNnLWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXR0cmlidXRlcy5ncmFwaGljLnVybH0gYWx0PXthdHRyaWJ1dGVzLmdyYXBoaWMuYWx0fS8+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5pdGVtcy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB9KS5tYXAoIChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW1cIiBkYXRhLWluZGV4PXtpbmRleH0gc3R5bGU9e2l0ZW0uc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtLWdyYXBoaWMtaW5uZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoaWNQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctaXRlbS1ncmFwaGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBtZWRpYSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBncmFwaGljVXJsOiBtZWRpYS51cmwsIGdyYXBoaWNBbHQ6IG1lZGlhLmFsdCB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17aXRlbS5ncmFwaGljVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uZ3JhcGhpY0FsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90aEdlZWtHYWxsZXJ5U2F2ZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2F0dHJpYnV0ZXN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD17YXR0cmlidXRlcy5pZH0gY2xhc3NOYW1lPVwid3AtYmxvY2stc2ctZ2FuaW1hdGlvbiBzZy1pdGVtc1wiIHN0eWxlPXt7bWF4V2lkdGg6IGF0dHJpYnV0ZXMubWF4V2lkdGh9fT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdHRyaWJ1dGVzLmdyYXBoaWMudXJsfSBhbHQ9e2F0dHJpYnV0ZXMuZ3JhcGhpYy5hbHR9Lz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLml0ZW1zLm1hcCgoaXRlbSxpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cInNnLWl0ZW1cIiBzdHlsZT17aXRlbS5zdHlsZX0gZGF0YS1hbmltYXRpb249e2l0ZW0uYW5pbWF0aW9ufSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmdyYXBoaWNVcmx9IGFsdD17aXRlbS5ncmFwaGljQWx0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XHJcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XHJcblxyXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSggJ3NnL2hvdGdyYXBoaWMnLCB7XHJcbiAgICB0aXRsZTogJ0hvdEdyYXBoaWMnLFxyXG4gICAgaWNvbjogJ3N0YXItZW1wdHknLFxyXG4gICAgY2F0ZWdvcnk6ICdzZycsXHJcbiAgICBhdHRyaWJ1dGVzOntcclxuICAgICAgICBoZWlnaHQ6e1xyXG4gICAgICAgICAgICB0eXBlOidzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnNDAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtczoge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxyXG4gICAgICAgICAgICBkZWZhdWx0OltdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0LFxyXG5cclxuICAgIHNhdmVcclxuXHJcbn0pOyIsImltcG9ydCBHcmFwaGljUGlja2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyYXBoaWNQaWNrZXJcIjtcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgQmxvY2tDb250cm9scyxJbnNwZWN0b3JDb250cm9scyAgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7IEljb25CdXR0b24sUGFuZWxCb2R5LFRleHRDb250cm9sLFRleHRhcmVhQ29udHJvbCxSYW5nZUNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90aEdlZWtHYWxsZXJ5RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaE5ld0l0ZW0oKXtcclxuICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICBpbmRleDogYXR0cmlidXRlcy5pdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIHRpdGxlOicnLFxyXG4gICAgICAgICAgICBncmFwaGljVXJsOicnLFxyXG4gICAgICAgICAgICBncmFwaGljQWx0OicnLFxyXG4gICAgICAgICAgICBib2R5OicnLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246J2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICczMCUnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXS5jb25jYXQodGhpcy5jbG9uZUFycmF5KGF0dHJpYnV0ZXMuaXRlbXMpLCBbaXRlbV0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSXRlbShpdGVtKXtcclxuICAgICAgICBjb25zdCB7IHNldEF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLmNvbmNhdCh0aGlzLmNsb25lQXJyYXkodGhpcy5wcm9wcy5hdHRyaWJ1dGVzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1GaWx0ZXIuaW5kZXggIT0gaXRlbS5pbmRleDtcclxuICAgICAgICAgICAgfSkpLCBbaXRlbV0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmVBcnJheShhcnIpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFycjJbaV0gPSBhcnJbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycjI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZihhdHRyaWJ1dGVzLml0ZW1zLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5wdXNoTmV3SXRlbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9XCJIb3RncmFwaGljXCIgaW5pdGlhbE9wZW49e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbHRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFyc2VJbnQoYXR0cmlidXRlcy5oZWlnaHQrJycpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7aGVpZ2h0OiBgJHt2YWx1ZX1weGAgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuaXRlbXMuc29ydChmdW5jdGlvbihhICwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5tYXAoICggaXRlbSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9e2BJdGVtICR7aXRlbS5pbmRleCsxfWB9IGluaXRpYWxPcGVuPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVMOtdHVsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS50aXRsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIHRpdGxlOiB2YWx1ZSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ3VlcnBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkVudGVyIHNvbWUgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS5ib2R5IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgYm9keTogdmFsdWUgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChpdGVtLnN0eWxlLndpZHRoKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHRoaXMudXBkYXRlSXRlbSh7IC4uLml0ZW0sIHN0eWxlOiB7Li4uaXRlbS5zdHlsZSwgd2lkdGg6YCR7dmFsdWV9JWB9IH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChpdGVtLnN0eWxlLnRvcCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBzdHlsZTogey4uLml0ZW0uc3R5bGUsIHRvcDpgJHt2YWx1ZX0lYH0gfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYXJzZUludChpdGVtLnN0eWxlLmxlZnQpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdGhpcy51cGRhdGVJdGVtKHsgLi4uaXRlbSwgc3R5bGU6IHsuLi5pdGVtLnN0eWxlLCBsZWZ0OmAke3ZhbHVlfSVgfSB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDEgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3JDb250cm9scygpLFxyXG4gICAgICAgICAgICAgICAgPEJsb2NrQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHRoaXMucHVzaE5ld0l0ZW0oKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwbHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZ3JlZ2FyXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9CbG9ja0NvbnRyb2xzPixcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2stc2ctaG90Z3JhcGhpYyBzZy1pdGVtc1wiIHN0eWxlPXt7aGVpZ2h0OmF0dHJpYnV0ZXMuaGVpZ2h0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLml0ZW1zLnNvcnQoZnVuY3Rpb24oYSAsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkubWFwKCAoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbVwiIGRhdGEtaW5kZXg9e2luZGV4fSBzdHlsZT17aXRlbS5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtLWdyYXBoaWMtaW5uZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaGljUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZy1pdGVtLWdyYXBoaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBtZWRpYSA9PiB0aGlzLnVwZGF0ZUl0ZW0oeyAuLi5pdGVtLCBncmFwaGljVXJsOiBtZWRpYS51cmwsIGdyYXBoaWNBbHQ6IG1lZGlhLmFsdCB9KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2l0ZW0uZ3JhcGhpY1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5ncmFwaGljQWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdGhHZWVrR2FsbGVyeVNhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge2F0dHJpYnV0ZXN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtc1wiIHN0eWxlPXt7aGVpZ2h0OiBhdHRyaWJ1dGVzLmhlaWdodH19PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuaXRlbXMubWFwKGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNnLWl0ZW0gbW9kYWwtdHJpZ2dlclwiIHN0eWxlPXtpdGVtLnN0eWxlfSBocmVmPXtgI2hnJHtpdGVtLmluZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5ncmFwaGljVXJsfSBhbHQ9e2l0ZW0uZ3JhcGhpY0FsdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bHNlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtgaGcke2l0ZW0uaW5kZXh9YH0gY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50IHNnLW1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctbW9kYWwtY29udGVudC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntpdGVtLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uYm9keX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctbW9kYWwtY29udGVudC1ncmFwaGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uZ3JhcGhpY1VybH0gYWx0PXtpdGVtLmdyYXBoaWNBbHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJcclxuXHJcbmNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcclxuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IFBhbmVsQm9keSxSYW5nZUNvbnRyb2wsVGV4dENvbnRyb2wsU2VsZWN0Q29udHJvbCxDb2xvclBpY2tlciB9ID13cC5jb21wb25lbnRzO1xyXG5jb25zdCAgYXBpRmV0Y2ggID0gd3AuYXBpRmV0Y2g7XHJcbmNvbnN0IHsgYWRkUXVlcnlBcmdzIH0gPSB3cC51cmw7XHJcblxyXG5pbXBvcnQgeyBnZXRSR0JBQ29sb3IgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxpdGllcyc7XHJcbmltcG9ydCBNYWluQ29sb3JzIGZyb20gJy4uLy4uL2hlbHBlcnMvY29sb3JzJztcclxuXHJcbmNvbnN0IENBVEVHT1JJRVNfTElTVF9RVUVSWSA9IHtcclxuICAgIHBlcl9wYWdlOiAtMSxcclxufTtcclxuXHJcbmNsYXNzIFNsb3RoR2Vla1Bvc3RFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY2F0ZWdvcmllc0xpc3Q6IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1N0aWxsTW91bnRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mZXRjaFJlcXVlc3QgPSBhcGlGZXRjaCgge1xyXG4gICAgICAgICAgICBwYXRoOiBhZGRRdWVyeUFyZ3MoIGAvd3AvdjIvY2F0ZWdvcmllc2AsIENBVEVHT1JJRVNfTElTVF9RVUVSWSApLFxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIC50aGVuKCAoIGNhdGVnb3JpZXNMaXN0ICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNTdGlsbE1vdW50ZWQgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IGNhdGVnb3JpZXNMaXN0IH0gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgICAgIC5jYXRjaCggKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNTdGlsbE1vdW50ZWQgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IGNhdGVnb3JpZXNMaXN0OiBbXSB9ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1N0aWxsTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtwb3N0cywgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgY2xhc3NOYW1lfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBjYXRlZ29yaWVzTGlzdCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKCFwb3N0cyl7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Mb2FkaW5nLi4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiggcG9zdHMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Tm8gaGF5IHBvc3RzIHBhcmEgbW9zdHJhci48L3NwYW4+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaW5zcGVjdG9yQ29udHJvbHMgPSAoXHJcbiAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9XCJBanVzdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk7Dum1lcm8gZGUgY29sdW1uYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuY29sdW1ucyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgY29sdW1uczogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsgMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEyIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLCv0N1YW50b3MgcG9zdD9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMucG9zdF9wZXJfcGFnZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHBvc3RfcGVyX3BhZ2U6IHZhbHVlIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17IDEgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9eyA5IH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbHRvIGRlIGxhIGltYWdlbiAocHgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmhlaWdodCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgaGVpZ2h0OiB2YWx1ZSB9ICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAxIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhdGVnb3LDrWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuY2F0ZWdvcnlfc2VsZWN0ZWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdID0gY2F0ZWdvcmllc0xpc3QubWFwKCAoY2F0KSA9PiAoeyBsYWJlbDogY2F0Lm5hbWUsIHZhbHVlOiBjYXQuaWQgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgY2F0ZWdvcnlfc2VsZWN0ZWQ6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCb3TDs24gZGUgYWNjacOzblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5hY3Rpb25fcG9zdCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgYWN0aW9uX3Bvc3Q6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVzdGlsbyBkZWwgaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50eXBlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdDYXJkJywgdmFsdWU6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdNb2Rlcm4nLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0NsYXNpYycsIHZhbHVlOiAyIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHR5cGU6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbG9yUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXsgYXR0cmlidXRlcy5maWx0ZXIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgZmlsdGVyIDogZ2V0UkdCQUNvbG9yKHZhbHVlKSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbjAgPSAocG9zdCwgY29sdW1uV2lkdGgsIGhlaWdodCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlQ2xhc3NlcyA9ICAnc2ctaXRlbS10aXRsZSc7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZV91cmwgPSAnJ1xyXG5cclxuICAgICAgICAgICAgaWYoIXBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ10pe1xyXG4gICAgICAgICAgICAgICAgdGl0bGVDbGFzc2VzID0gJ3NnLWl0ZW0tdGl0bGUgbm8taW1hZ2UnO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGltYWdlX3VybCA9IHBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ11bMF0uc291cmNlX3VybDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNnLWl0ZW0gXCIgc3R5bGU9eyB7IHdpZHRoOmAke2NvbHVtbldpZHRofSVgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiIHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZV91cmx9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cG9zdC50aXRsZS5yZW5kZXJlZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwb3N0LmV4Y2VycHQucmVuZGVyZWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXR0cmlidXRlcy5hY3Rpb25fcG9zdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uMSA9IChwb3N0LCBjb2x1bW5XaWR0aCwgaGVpZ2h0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW1hZ2VfdXJsID0gcG9zdC5fZW1iZWRkZWRbJ3dwOmZlYXR1cmVkbWVkaWEnXSA/IHBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ11bMF0uc291cmNlX3VybCA6ICcnO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNnLWl0ZW1cIiBzdHlsZT17IHsgd2lkdGg6YCR7Y29sdW1uV2lkdGh9JWAgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbS1jb250ZW50XCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZV91cmx9KWAsIGhlaWdodDogaGVpZ2h0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctaXRlbS1maWx0ZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogYXR0cmlidXRlcy5maWx0ZXJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy1pdGVtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNnLWl0ZW0tYWN0aW9uXCIgaHJlZj17cG9zdC5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRyaWJ1dGVzLmFjdGlvbl9wb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uMiA9IChwb3N0LCBjb2x1bW5XaWR0aCwgaGVpZ2h0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZUNsYXNzZXMgPSAgJ3NnLWl0ZW0tdGl0bGUnO1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VfdXJsID0gJydcclxuXHJcbiAgICAgICAgICAgIGlmKCFwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddKXtcclxuICAgICAgICAgICAgICAgIHRpdGxlQ2xhc3NlcyA9ICdzZy1pdGVtLXRpdGxlIG5vLWltYWdlJztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpbWFnZV91cmwgPSBwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddWzBdLnNvdXJjZV91cmw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzZy1pdGVtXCIgc3R5bGU9eyB7IHdpZHRoOmAke2NvbHVtbldpZHRofSVgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLWl0ZW0tZ3JhcGhpY1wiIHN0eWxlPXsgeyBoZWlnaHQ6IGhlaWdodCB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VfdXJsfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGl0bGVDbGFzc2VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57cG9zdC50aXRsZS5yZW5kZXJlZH08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2ctaXRlbS1hY3Rpb25cIiBocmVmPXtwb3N0Lmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2F0dHJpYnV0ZXMuYWN0aW9uX3Bvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW5XaWR0aCA9ICggMTAwIC8gYXR0cmlidXRlcy5jb2x1bW5zICk7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gYXR0cmlidXRlcy5oZWlnaHQrXCJweFwiO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0+XHJcbiAgICAgICAgICAgICAgICB7aW5zcGVjdG9yQ29udHJvbHN9XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgc2ctaXRlbXMgb3B0aW9uJHthdHRyaWJ1dGVzLnR5cGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0cy5tYXAocG9zdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICggcGFyc2VJbnQoYXR0cmlidXRlcy50eXBlKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24wKHBvc3QsIGNvbHVtbldpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24xKHBvc3QsIGNvbHVtbldpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24yKHBvc3QsIGNvbHVtbldpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uMChwb3N0LCBjb2x1bW5XaWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlbGVjdCggKHNlbGVjdCwgcHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCB7cG9zdF9wZXJfcGFnZSwgY2F0ZWdvcnlfc2VsZWN0ZWR9ID0gcHJvcHMuYXR0cmlidXRlcztcclxuICAgIGNvbnN0IHsgZ2V0RW50aXR5UmVjb3JkcyB9ID0gc2VsZWN0KCAnY29yZScgKTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgICAgIHBlcl9wYWdlOiBwb3N0X3Blcl9wYWdlLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3J5X3NlbGVjdGVkLFxyXG4gICAgICAgIF9lbWJlZDogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwb3N0czogZ2V0RW50aXR5UmVjb3JkcygncG9zdFR5cGUnLCAncG9zdCcsIHF1ZXJ5KVxyXG4gICAgfTtcclxuXHJcbn0pKFNsb3RoR2Vla1Bvc3RFZGl0KTtcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XHJcblxyXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSggJ3NnL3Bvc3RzJywge1xyXG4gICAgdGl0bGU6IFwiw5psdGltYXMgZW50cmFkYXNcIixcclxuICAgIGljb246ICdzdGFyLWVtcHR5JyxcclxuICAgIGNhdGVnb3J5OiAnc2cnLFxyXG4gICAga2V5d29yZHM6IFtcclxuICAgICAgICBfXyggJ2xvYWQnICksXHJcbiAgICAgICAgX18oICdMb2FkIFBvc3QnICksXHJcbiAgICAgICAgX18oICdndXRlbi1sb2FkLXBvc3QnICksXHJcbiAgICBdLFxyXG4gICAgYXR0cmlidXRlczp7XHJcbiAgICAgICAgdHlwZToge1xyXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uczp7XHJcbiAgICAgICAgICAgIHR5cGU6XCJudW1iZXJcIixcclxuICAgICAgICAgICAgZGVmYXVsdDogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zdF9wZXJfcGFnZToge1xyXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiA2XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWlnaHQ6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgZGVmYXVsdDogMjAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXRlZ29yeV9zZWxlY3RlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3Rpb25fcG9zdDp7XHJcbiAgICAgICAgICAgIHR5cGU6XCJzdHJpbmdcIixcclxuICAgICAgICAgICAgZGVmYXVsdDpcIlZlciBtw6FzLi4uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbHRlcjp7XHJcbiAgICAgICAgICAgIHR5cGU6XCJzdHJpbmdcIixcclxuICAgICAgICAgICAgZGVmYXVsdDpcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0LFxyXG5cclxuICAgIHNhdmUoKXtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxufSk7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnO1xyXG5cclxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5cclxucmVnaXN0ZXJCbG9ja1R5cGUoICdzZy9wcmljaW5ndGFibGUnLCB7XHJcbiAgICB0aXRsZTogJ1ByaWNpbmcgVGFibGUnLFxyXG4gICAgaWNvbjogJ3N0YXItZW1wdHknLFxyXG4gICAgY2F0ZWdvcnk6ICdzZycsXHJcbiAgICBhdHRyaWJ1dGVzOntcclxuICAgICAgICBpY29uOntcclxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlOntcclxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdQbGFuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VycmVuY3k6e1xyXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJyQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmljZTp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnMTAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjZW50czp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnOTknXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmZWF0dXJlczp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6W11cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVkaXQsXHJcblxyXG4gICAgc2F2ZVxyXG5cclxufSk7IiwiaW1wb3J0IEljb25QaWNrZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSWNvblBpY2tlclwiO1xyXG5cclxuY29uc3QgeyBSaWNoVGV4dCwgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBCdXR0b24sIENoZWNrYm94Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmltcG9ydCB7IGNsb25lQXJyYXkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxpdGllcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmljaW5nVGFibGVFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRfZmVhdHVyZSgpIHtcclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IGZlYXR1cmUgPSB7XHJcbiAgICAgICAgICAgIGluZGV4OiBhdHRyaWJ1dGVzLmZlYXR1cmVzLmxlbmd0aCxcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgICAgICBmZWF0dXJlczogW10uY29uY2F0KGNsb25lQXJyYXkoYXR0cmlidXRlcy5mZWF0dXJlcyksIFtmZWF0dXJlXSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVfZmVhdHVyZShmZWF0dXJlKXtcclxuXHJcbiAgICAgICAgY29uc3Qge2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBbXS5jb25jYXQoY2xvbmVBcnJheShhdHRyaWJ1dGVzLmZlYXR1cmVzLmZpbHRlcihmdW5jdGlvbiAoaXRlbUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtRmlsdGVyLmluZGV4ICE9IGZlYXR1cmUuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9KSksIFtmZWF0dXJlXSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyX2ZlYXR1cmVzKCl7XHJcbiAgICAgICAgY29uc3Qge2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLmZlYXR1cmVzLnNvcnQoZnVuY3Rpb24oYSAsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xyXG4gICAgICAgIH0pLm1hcCggZmVhdHVyZSA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcHJpY2luZy1mZWF0dXJlICR7IGZlYXR1cmUuYWN0aXZlID8gJycgOiAnZGlzYWJsZWQnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IGZlYXR1cmUuYWN0aXZlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMudXBkYXRlX2ZlYXR1cmUoIHsuLi5mZWF0dXJlLCBhY3RpdmU6IHZhbHVlIH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGZlYXR1cmUudGV4dCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4gdGhpcy51cGRhdGVfZmVhdHVyZSggey4uLmZlYXR1cmUsIHRleHQ6IHZhbHVlIH0pIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXJhY3RlcsOtc3RpY2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmUgPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgfSApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLXRhYmxlIGZlYXR1cmVkIHNjYWxlLWluLW91dCBmYWRlLWluLW91dFwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN5bWJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxJY29uUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthdHRyaWJ1dGVzLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgaWNvbjogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICA8UmljaFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZT1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJyZW5jeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5jdXJyZW5jeSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4gc2V0QXR0cmlidXRlcyggeyBjdXJyZW5jeTogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9sbGFyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5wcmljZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsdWUgPT4gc2V0QXR0cmlidXRlcyggeyBwcmljZTogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2VudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuY2VudHMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHNldEF0dHJpYnV0ZXMoIHsgY2VudHM6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZSA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJpY2luZy1mZWF0dXJlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlcl9mZWF0dXJlcygpIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgaXNTZWNvbmRhcnlcclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gdGhpcy5hZGRfZmVhdHVyZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIEFncmVnYXIgY2FyYWN0ZXLDrXN0aWNhXHJcbiAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IFJpY2hUZXh0IH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaWNpbmdUYWJsZVNhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoIC4uLmFyZ3VtZW50cyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcl9mZWF0dXJlcygpe1xyXG4gICAgICAgIGNvbnN0IHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5mZWF0dXJlcy5zb3J0KGZ1bmN0aW9uKGEgLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcclxuICAgICAgICB9KS5tYXAoIGZlYXR1cmUgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YHByaWNpbmctZmVhdHVyZSAkeyBmZWF0dXJlLmFjdGl2ZSA/ICcnIDogJ2Rpc2FibGVkJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICB7IGZlYXR1cmUuYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKCA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmRvbmU8L2k+IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L2k+IClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyBmZWF0dXJlLnRleHQgfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICB9IClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLXRhYmxlIGZlYXR1cmVkIHNjYWxlLWluLW91dCBmYWRlLWluLW91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ltYm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17IGBmYXMgJHthdHRyaWJ1dGVzLmljb259YH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU9XCJkaXZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lPVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJyZW5jeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuY3VycmVuY3kgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHQuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZT1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9sbGFyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMucHJpY2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHQuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZT1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2VudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmNlbnRzIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByaWNpbmctZmVhdHVyZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyX2ZlYXR1cmVzKCkgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuXHJcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XHJcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XHJcblxyXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnXHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5cclxucmVnaXN0ZXJCbG9ja1R5cGUoICdzZy9yb3cnLCB7XHJcbiAgICB0aXRsZTogJ1JvdycsXHJcbiAgICBpY29uOiAnc3Rhci1lbXB0eScsXHJcbiAgICBjYXRlZ29yeTogJ3NnJyxcclxuICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBpdHNTZWN0aW9uOntcclxuICAgICAgICAgICAgdHlwZTonYm9vbGVhbicsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhc0NvbnRhaW5lcjp7XHJcbiAgICAgICAgICAgIHR5cGU6J2Jvb2xlYW4nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdHlsZTp7XHJcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7fVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZWRpdCxcclxuXHJcbiAgICBzYXZlXHJcbn0gKTsiLCJjb25zdCB7IElubmVyQmxvY2tzLCBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgUGFuZWxCb2R5LCBQYW5lbFJvdywgVG9nZ2xlQ29udHJvbCwgVGFiUGFuZWwgfSA9IHdwLmNvbXBvbmVudHM7XHJcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gPSB3cC5jb21wb3NlO1xyXG5cclxuaW1wb3J0IEVkaXRCYWNrZ3JvdW5kIGZyb20gXCIuLi8uLi9zdHlsZS9FZGl0QmFja2dyb3VuZFwiO1xyXG5pbXBvcnQgRWRpdFNwYWNlRGltZW5zaW9uIGZyb20gXCIuLi8uLi9zdHlsZS9FZGl0U3BhY2VEaW1lbnNpb25cIjtcclxuXHJcbmNvbnN0IHJvd0N1c3RvbUNsYXNzTmFtZSA9IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KChCbG9ja0xpc3RCbG9jaykgPT4ge1xyXG4gICAgcmV0dXJuIHByb3BzID0+IHtcclxuICAgICAgICBpZihwcm9wcy5uYW1lID09IFwic2cvcm93XCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gPEJsb2NrTGlzdEJsb2NrIHsgLi4ucHJvcHMgfSBjbGFzc05hbWU9eyAncm93JyB9IC8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPEJsb2NrTGlzdEJsb2NrIHsgLi4ucHJvcHMgfSAvPlxyXG4gICAgfVxyXG59LCAncm93Q3VzdG9tQ2xhc3NOYW1lJyk7XHJcblxyXG53cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdzZy9yb3cnLCByb3dDdXN0b21DbGFzc05hbWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm93RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IEFMTE9XRURfQkxPQ0tTID0gWyAnc2cvY29sdW1uJ107XHJcblxyXG4gICAgICAgIGNvbnN0IHsgY2xpZW50SWQsIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzZWxlY3QgfSA9IHdwLmRhdGE7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmVudEJsb2NrID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzQnlDbGllbnRJZCggY2xpZW50SWQgKVsgMCBdO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkQmxvY2tzID0gcGFyZW50QmxvY2suaW5uZXJCbG9ja3M7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtcHR5QmxvY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggY2hpbGRCbG9ja3MubGVuZ3RoID09IDApe1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctZW1wdHktaW5uZXItYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctYmxvY2stbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtc2NyZWVub3B0aW9uc1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdyZWdhIHVuYSBvIG3DoXMgY29sdW1uYXMgcHJlc2lvbmFuZG8gZWwgYm90w7NuIGRlIGFiYWpvIGNvbiBlbCBzw61tYm9sbyBkZSBtw6FzLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb25TZWxlY3QgPSAoIHRhYk5hbWUgKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coICdTZWxlY3RpbmcgdGFiJywgdGFiTmFtZSApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclRhYjEgPSAgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRvZ2dsZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFjdGl2YXIgc2VjY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlbHA9eyBhdHRyaWJ1dGVzLml0c1NlY3Rpb24gPyAnU2VjY2nDs24uJyA6ICdTb2xvIGZpbGEuJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IGF0dHJpYnV0ZXMuaXRzU2VjdGlvbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoIHsgaXRzU2VjdGlvbjogdmFsdWUgfSApIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VG9nZ2xlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWN0aXZhciBjb250ZW5lZG9yP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVscD17IGF0dHJpYnV0ZXMuaGFzQ29udGFpbmVyID8gJ0NvbnRlbmVkb3IuJyA6ICdTb2xvIGZpbGEuJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IGF0dHJpYnV0ZXMuaGFzQ29udGFpbmVyIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyggeyBoYXNDb250YWluZXI6IHZhbHVlIH0gKSB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGFiMiA9ICAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7IEVkaXRCYWNrZ3JvdW5kKHRoaXMucHJvcHMpIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJUYWIzID0gIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsgRWRpdFNwYWNlRGltZW5zaW9uKHRoaXMucHJvcHMpIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJUYWIgPSAodGFiTmFtZSkgPT57XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGFiTmFtZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAndGFiMSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlclRhYjE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAndGFiMic6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlclRhYjI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAndGFiMyc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlclRhYjM7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFiMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9XCJBanVzdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBjbGFzc05hbWU9XCJzZy10YWItcGFuZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlLXRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyBvblNlbGVjdCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFicz17IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RhYjEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdHZW5lcmFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RhYi1vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndGFiMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0JHJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RhYi10d28nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndGFiMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0RpbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0YWItdGhyZWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggdGFiICkgPT4gcmVuZGVyVGFiKHRhYi5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZWxSb3c+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgZW1wdHlCbG9jaygpLFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctY29udGFpbmVyXCIgc3R5bGU9eyBhdHRyaWJ1dGVzLnN0eWxlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElubmVyQmxvY2tzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckFwcGVuZGVyPXsgKCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwZW5kZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1lZGl0b3ItdGV4dC1ibG9jay1hcHBlbmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ctYmxvY2stbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtc2NyZWVub3B0aW9uc1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyQmxvY2tzLkJ1dHRvbkJsb2NrQXBwZW5kZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgSW5uZXJCbG9ja3N9ID0gd3AuYmxvY2tFZGl0b3I7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm93U2F2ZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2NsYXNzTmFtZSwgYXR0cmlidXRlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLmhhc0NvbnRhaW5lciA/XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlclJvdygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUm93KClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuaXRzU2VjdGlvbiA/XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgcm93ICR7Y2xhc3NOYW1lfWB9IHN0eWxlPXsgYXR0cmlidXRlcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSA6XHJcblxyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93ICR7Y2xhc3NOYW1lfWB9IHN0eWxlPXsgYXR0cmlidXRlcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKCByZW5kZXJDb250YWluZXIoKSApO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IE1lZGlhVXBsb2FkIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuY29uc3QgeyBJY29uQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY1BpY2tlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZUJ1dHRvbihvcGVuRXZlbnQsIHVybCwgYWx0LCBvbkNoYW5nZSkge1xyXG4gICAgICAgIGlmKHVybCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyYXBoaWMtcGlja2VyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17IHVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNnLXRvb2xiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJlZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgb3BlbkV2ZW50IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKG1lZGlhKSA9PiBvbkNoYW5nZSgnJykgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhcGhpYy1waWNrZXItbm8taW1hZ2VcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuRXZlbnQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZm9ybWF0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZ3JlZ2FyXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHt1cmwsIGFsdCwgb25DaGFuZ2V9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lZGlhVXBsb2FkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXItYWxpZ25cIlxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eyAobWVkaWEpID0+IG9uQ2hhbmdlKG1lZGlhKSB9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsgKHsgb3BlbiB9KSA9PiB0aGlzLmdldEltYWdlQnV0dG9uKG9wZW4sIHVybCwgYWx0LCBvbkNoYW5nZSkgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IEJ1dHRvbiwgRHJvcGRvd24sIEljb25CdXR0b24gfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uUGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7dmFsdWUsIG9uQ2hhbmdlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGljb25zLmZpbmQoaSA9PiBpLm5hbWUgPT0gdmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1waWNrZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRDbGFzc05hbWU9XCJpY29uLXBpY2tlci1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbSByaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVG9nZ2xlPXsgKCB7IGlzT3Blbiwgb25Ub2dnbGUgfSApID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGljb24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVGVydGlhcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IG9uVG9nZ2xlIH0gYXJpYS1leHBhbmRlZD17IGlzT3BlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake2ljb24ucHJlZml4fSAke2ljb24ubmFtZX1gfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgb25Ub2dnbGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXsgaXNPcGVuIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFncmVnYXIgw61jb25vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gIH1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJDb250ZW50PXsgKCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25zLm1hcCggaWNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RlcnRpYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpPT4gb25DaGFuZ2UoaWNvbi5uYW1lKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtpY29uLnByZWZpeH0gJHtpY29uLm5hbWV9YH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBpY29ucyA9IFtcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtYW5nbGUtZG93bid9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1hbmdsZS1sZWZ0J30sXHJcbiAgICB7cHJlZml4OiAnZmFzJywgbmFtZTogJ2ZhLWFuZ2xlLXJpZ2h0J30sXHJcbiAgICB7cHJlZml4OiAnZmFzJywgbmFtZTogJ2ZhLWFuZ2xlLXVwJ30sXHJcbiAgICB7cHJlZml4OiAnZmFzJywgbmFtZTogJ2ZhLWFycm93LWRvd24nfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtYXJyb3ctbGVmdCd9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1hcnJvdy1yaWdodCd9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1hcnJvdy11cCd9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1zdG9yZSd9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1zdG9yZS1hbHQnfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtZ2xvYmUnfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtZ2xvYmUtZXVyb3BlJ30sXHJcbiAgICB7cHJlZml4OiAnZmFzJywgbmFtZTogJ2ZhLWdsb2JlLWFzaWEnfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtZ2xvYmUtYW1lcmljYXMnfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtc2VydmVyJ30sXHJcbiAgICB7cHJlZml4OiAnZmFzJywgbmFtZTogJ2ZhLWRhdGFiYXNlJ30sXHJcbiAgICB7cHJlZml4OiAnZmFzJywgbmFtZTogJ2ZhLWluZm8nfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtY2hlY2snfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtY2hlY2stc3F1YXJlJ30sXHJcbiAgICB7cHJlZml4OiAnZmFzJywgbmFtZTogJ2ZhLWNoZWNrJ30sXHJcbiAgICB7cHJlZml4OiAnZmFzJywgbmFtZTogJ2ZhLXdhbGtpbmcnfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtcnVuaW5nJ30sXHJcbiAgICB7cHJlZml4OiAnZmFzJywgbmFtZTogJ2ZhLW1hbGUnfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtYnVpbGRpbmcnfSxcclxuICAgIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtY2l0eSd9LFxyXG4gICAge3ByZWZpeDogJ2ZhcycsIG5hbWU6ICdmYS1ob21lJ30sXHJcblxyXG5dXHJcblxyXG4vKlxyXG4qIHtwcmVmaXg6ICdmYXMnLCBuYW1lOiAnZmEtJ30sXHJcbiovIiwiY29uc3Qge0NvbXBvbmVudH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7SW5zcGVjdG9yQ29udHJvbHMsIFJpY2hUZXh0LCBCbG9ja0NvbnRyb2xzLCBBbGlnbm1lbnRUb29sYmFyfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7UGFuZWxCb2R5LCBSYW5nZUNvbnRyb2wsIENvbG9yUGFsZXR0ZSwgVGV4dENvbnRyb2x9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmltcG9ydCBNYWluQ29sb3JzIGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFncmFwaCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWw6ICcnLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwJyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMCAwIDAgMCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCAwIDAgMCcsXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB7dmFsdWUsIHN0eWxlfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbDogdmFsdWV9KTtcclxuXHJcbiAgICAgICAgaWYgKHN0eWxlLm1hcmdpbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGU6IHN0eWxlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU1QKGFycmF5LCB2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICBsZXQgbmV3VmFsdWUgPSBhcnJheS5zcGxpdCgnICcpO1xyXG4gICAgICAgIG5ld1ZhbHVlW2luZGV4XSA9IGAke3ZhbHVlfWA7XHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlLmpvaW4oJyAnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtvbkNoYW5nZSwgdmFsdWUsIHBsYWNlaG9sZGVyfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHtzdHlsZX0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFtcclxuICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbGlnbm1lbnRUb29sYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS50ZXh0QWxpZ259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdHlsZTogey4uLnN0eWxlLCB0ZXh0QWxpZ246IHZhbHVlfX0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQmxvY2tDb250cm9scz4sXHJcbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT0nUMOhcnJhZm8nIGluaXRpYWxPcGVuPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGFtYcOxb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFyc2VJbnQoc3R5bGUuZm9udFNpemUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0eWxlOiB7Li4uc3R5bGUsIGZvbnRTaXplOiBgJHt2YWx1ZX1weGB9fSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlLXRleHQtY29sb3JcIj5Db2xvciBkZSB0ZXh0bzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtdGV4dC1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGFsZXR0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycyA9IHsgTWFpbkNvbG9ycyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGU6IHsuLi5zdHlsZSwgY29sb3I6IGAke3ZhbHVlfWB9fSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZS1zcGFjaW5nXCI+RXNwYWNpYWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24tY29udHJvbCB0aXRsZS1zcGFjaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS5tYXJnaW4uc3BsaXQoJyAnKVswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiB0aGlzLnVwZGF0ZU1QKHN0eWxlLm1hcmdpbiwgdmFsdWUsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLm1hcmdpbi5zcGxpdCgnICcpWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHRoaXMudXBkYXRlTVAoc3R5bGUubWFyZ2luLCB2YWx1ZSwgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0eWxlLm1hcmdpbi5zcGxpdCgnICcpWzJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHRoaXMudXBkYXRlTVAoc3R5bGUubWFyZ2luLCB2YWx1ZSwgMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS5tYXJnaW4uc3BsaXQoJyAnKVszXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiB0aGlzLnVwZGF0ZU1QKHN0eWxlLm1hcmdpbiwgdmFsdWUsIDMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiBvbkNoYW5nZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCB0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbMV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUucGFkZGluZy5zcGxpdCgnICcpWzJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHRoaXMudXBkYXRlTVAoc3R5bGUucGFkZGluZywgdmFsdWUsIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbM119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4gb25DaGFuZ2UodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgPFJpY2hUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZT1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsOiB2YWx1ZX0sICgpID0+IG9uQ2hhbmdlKHRoaXMuc3RhdGUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NvbnRyb2xzPXtbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZSddfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsgcGxhY2Vob2xkZXIgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcbn0iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scywgUmljaFRleHQsIEJsb2NrQ29udHJvbHMsIEFsaWdubWVudFRvb2xiYXIgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5jb25zdCB7IFBhbmVsQm9keSwgUmFuZ2VDb250cm9sLCBDb2xvclBhbGV0dGUsIFRleHRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaW1wb3J0IE1haW5Db2xvcnMgZnJvbSAnLi4vaGVscGVycy9jb2xvcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsOiAnJyxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwMDAwJyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjonbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDAgMCAwJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDAgMCAwJyxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBjb25zdCB7dmFsdWUsIHN0eWxlfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbDogdmFsdWV9KTtcclxuXHJcbiAgICAgICAgaWYgKHN0eWxlLm1hcmdpbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGU6IHN0eWxlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU1QKGFycmF5LCB2YWx1ZSwgaW5kZXgpe1xyXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGFycmF5LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgbmV3VmFsdWVbaW5kZXhdID0gYCR7dmFsdWV9YDtcclxuICAgICAgICByZXR1cm4gbmV3VmFsdWUuam9pbignICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICBjb25zdCB7IHR5cGUsIGNsYXNzTmFtZSwgb25DaGFuZ2UsIHZhbHVlLCBwbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgIHsgc3R5bGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybihbXHJcbiAgICAgICAgICAgICAgICA8QmxvY2tDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICA8QWxpZ25tZW50VG9vbGJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R5bGUudGV4dEFsaWdufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCB0ZXh0QWxpZ246dmFsdWUgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQmxvY2tDb250cm9scz4sXHJcbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT0nVMOtdHVsbycgaW5pdGlhbE9wZW49e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUYW1hw7FvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFyc2VJbnQoc3R5bGUuZm9udFNpemUpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgZm9udFNpemU6YCR7dmFsdWV9cHhgIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGUtdGV4dC1jb2xvclwiPkNvbG9yIGRlIHRleHRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0LWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQYWxldHRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzID0geyBNYWluQ29sb3JzIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHN0eWxlLmNvbG9yIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBjb2xvcjpgJHt2YWx1ZX1gIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGUtc3BhY2luZ1wiPkVzcGFjaWFkbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWNvbnRyb2wgdGl0bGUtc3BhY2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCB0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgc3R5bGUubWFyZ2luLnNwbGl0KCcgJylbMF0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBtYXJnaW46dGhpcy51cGRhdGVNUChzdHlsZS5tYXJnaW4sIHZhbHVlLCAwKSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IHN0eWxlLm1hcmdpbi5zcGxpdCgnICcpWzFdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHN0eWxlIDogeyAuLi5zdHlsZSwgbWFyZ2luOnRoaXMudXBkYXRlTVAoc3R5bGUubWFyZ2luLCB2YWx1ZSwgMSkgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgc3R5bGUubWFyZ2luLnNwbGl0KCcgJylbMl0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBtYXJnaW46dGhpcy51cGRhdGVNUChzdHlsZS5tYXJnaW4sIHZhbHVlLCAyKSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgc3R5bGUubWFyZ2luLnNwbGl0KCcgJylbM10gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBtYXJnaW46dGhpcy51cGRhdGVNUChzdHlsZS5tYXJnaW4sIHZhbHVlLCAzKSB9IH0sICgpID0+ICBvbkNoYW5nZSggdGhpcy5zdGF0ZSApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCB0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbMF0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIHBhZGRpbmc6dGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMCkgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbMV0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIHBhZGRpbmc6dGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMSkgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgc3R5bGUucGFkZGluZy5zcGxpdCgnICcpWzJdIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgc3R5bGUgOiB7IC4uLnN0eWxlLCBwYWRkaW5nOnRoaXMudXBkYXRlTVAoc3R5bGUucGFkZGluZywgdmFsdWUsIDIpIH0gfSwgKCkgPT4gIG9uQ2hhbmdlKCB0aGlzLnN0YXRlICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBzdHlsZS5wYWRkaW5nLnNwbGl0KCcgJylbM10gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBzdHlsZSA6IHsgLi4uc3R5bGUsIHBhZGRpbmc6dGhpcy51cGRhdGVNUChzdHlsZS5wYWRkaW5nLCB2YWx1ZSwgMykgfSB9LCAoKSA9PiAgb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgPFJpY2hUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IHZhbDp2YWx1ZSB9LCAgKCkgPT4gb25DaGFuZ2UoIHRoaXMuc3RhdGUgKSApIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyB2YWx1ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7c3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NvbnRyb2xzPXsgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9IHtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJcclxuXHJcbmxldCBNYWluQ29sb3JzID0gW1xyXG4gICAgeyBuYW1lOiAndHJhbnNwYXJlbnQnLCBjb2xvcjogJ3RyYW5zcGFyZW50JyB9LFxyXG4gICAgeyBuYW1lOiAnc2ctZGFyaycsIGNvbG9yOiAnIzJhMmYzZicgfSxcclxuICAgIHsgbmFtZTogJ3NnLWdyZWVuJywgY29sb3I6ICcjMjdlMjlhJyB9LFxyXG4gICAgeyBuYW1lOiAnd2hpdGUnLCBjb2xvcjogJyNmZmZmZmYnIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29sb3JzO1xyXG5cclxuIiwiLyoqXHJcbiAqIEVsaW1pbmEgcG9yIGNvbXBsZXRvIGVsIGVsZW1lbnRvIGRlIGVzdGlsbyBjdWFuZG8gbm8gdGllbmUgdmFsb3IuIEVzdG8gZXZpdGFyw6EgZXN0aWxvc1xyXG4gKiBzdWNpb3Mgc2luIHZhbG9yIGVuIGVsIGZyb250ZW5kLlxyXG4gKlxyXG4gKiBAcGFyYW0gYXR0cmlidXRlc1xyXG4gKiBAcGFyYW0gc2V0QXR0cmlidXRlc1xyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgZWxlbWVudCwgdmFsdWU9JycpIHtcclxuXHJcbiAgICBpZih2YWx1ZSA9PT0gJycpe1xyXG5cclxuICAgICAgICBsZXQgc3R5bGUgPSBhdHRyaWJ1dGVzLnN0eWxlO1xyXG5cclxuICAgICAgICBkZWxldGUgc3R5bGVbZWxlbWVudF07XHJcblxyXG4gICAgICAgIHNldEF0dHJpYnV0ZXMoe3N0eWxlOiBzdHlsZX0pO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSR0JBQ29sb3IoY29sb3Ipe1xyXG5cclxuICAgIHJldHVybiBgcmdiYSgke2NvbG9yLnJnYi5yfSwgJHtjb2xvci5yZ2IuZ30sICR7Y29sb3IucmdiLmJ9LCAke2NvbG9yLnJnYi5hfSlgO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lQXJyYXkoYXJyKXtcclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhcnIyW2ldID0gYXJyW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcclxuICAgIH1cclxuXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHsgQnV0dG9uLCBTZWxlY3RDb250cm9sLCBJY29uQnV0dG9uLCBDb2xvclBhbGV0dGUgfSA9IHdwLmNvbXBvbmVudHM7XHJcbmNvbnN0IHsgTWVkaWFVcGxvYWQgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuaW1wb3J0IHsgc2FuaXRpemVTdHlsZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbGl0aWVzJztcclxuaW1wb3J0IE1haW5Db2xvcnMgZnJvbSAnLi4vaGVscGVycy9jb2xvcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdEJhY2tncm91bmQoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9KXtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlcml6YSBlbCBib3TDs24gbyBsYSBpbWFnZW4gZW4gZWwgc2lkZWJhciBkZSBlZGljacOzblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvcGVuXHJcbiAgICAgKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR8SlNYLkVsZW1lbnRbXX1cclxuICAgICAqL1xyXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlQnV0dG9ucyA9IChvcGVuKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRJbWFnZSAhPT0gJycgJiYgYXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdHRyaWJ1dGVzLnN0eWxlLmJhY2tncm91bmRJbWFnZS5zbGljZSg0LC0xKX0gYWx0PVwiXCIgc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZy10b29sYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IG9wZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1N0eWxlID0geyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBiYWNrZ3JvdW5kSW1hZ2U6JycgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlIDogbmV3U3R5bGUgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ2JhY2tncm91bmRJbWFnZScpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8taW1hZ2VcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ctYnV0dG9uIGZ1bGwgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFncmVnYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2ctc3R5bGUtZWRpdC1iYWNrZ3JvdW5kJz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db2xvciBkZSBGb25kbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Q29sb3JQYWxldHRlXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzID0geyBNYWluQ29sb3JzIH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHtzdHlsZTogey4uLmF0dHJpYnV0ZXMuc3R5bGUsIGJhY2tncm91bmRDb2xvcjogYCR7dmFsdWV9YH19KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdiYWNrZ3JvdW5kQ29sb3InLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkltYWdlbiBkZSBGb25kbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TWVkaWFVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiSW1hZ2VuXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZEltYWdlIH1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17IG1lZGlhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggIHsgc3R5bGU6IHsuLi5hdHRyaWJ1dGVzLnN0eWxlLCBiYWNrZ3JvdW5kSW1hZ2U6YHVybCgke21lZGlhLnVybH0pYCB9IH0gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gYmFja2dyb3VuZEltYWdlQnV0dG9ucyhvcGVuKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGFtYcOxb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZFNpemUgfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnJywgdmFsdWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2NvdmVyJywgdmFsdWU6ICdjb3ZlcicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnY29udGFpbicsIHZhbHVlOiAnY29udGFpbicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnYXV0bycsIHZhbHVlOiAnYXV0bycgfSxcclxuICAgICAgICAgICAgICAgIF0gfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBzdHlsZTogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBiYWNrZ3JvdW5kU2l6ZTp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAnYmFja2dyb3VuZFNpemUnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSZXBldGlyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0IH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJycsIHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICduby1yZXBlYXQnLCB2YWx1ZTogJ25vLXJlcGVhdCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAncmVwZWF0JywgdmFsdWU6ICdyZXBlYXQnIH0sXHJcbiAgICAgICAgICAgICAgICBdIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgc3R5bGU6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgYmFja2dyb3VuZFJlcGVhdDp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCdiYWNrZ3JvdW5kUmVwZWF0JywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBvc2ljacOzblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uIH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJycsIHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdjZW50ZXInLCB2YWx1ZTogJ2NlbnRlcicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAndG9wICcsIHZhbHVlOiAndG9wJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdyaWdodCcsIHZhbHVlOiAncmlnaHQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2xlZnQgJywgdmFsdWU6ICdsZWZ0JyB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnY2VudGVyIHRvcCcsIHZhbHVlOiAnY2VudGVyIHRvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnY2VudGVyIHJpZ2h0JywgdmFsdWU6ICdjZW50ZXIgcmlnaHQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2NlbnRlciBib3R0b20nLCB2YWx1ZTogJ2NlbnRlciBib3R0b20nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2NlbnRlciBsZWZ0JywgdmFsdWU6ICdjZW50ZXIgbGVmdCcgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3RvcCByaWdodCcsIHZhbHVlOiAndG9wIHJpZ2h0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICd0b3AgbGVmdCcsIHZhbHVlOiAndG9wIGxlZnQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3RvcCBjZW50ZXInLCB2YWx1ZTogJ3RvcCBjZW50ZXInIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdib3R0b20gcmlnaHQnLCB2YWx1ZTogJ2JvdHRvbSByaWdodCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnYm90dG9tIGxlZnQnLCB2YWx1ZTogJ2JvdHRvbSBsZWZ0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdib3R0b20gY2VudGVyJywgdmFsdWU6ICdib3R0b20gY2VudGVyJyB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnbGVmdCBjZW50ZXInLCB2YWx1ZTogJ2xlZnQgY2VudGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdsZWZ0IHRvcCcsIHZhbHVlOiAnbGVmdCB0b3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ2xlZnQgYm90dG9tJywgdmFsdWU6ICdsZWZ0IGJvdHRvbScgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3JpZ2h0IGNlbnRlcicsIHZhbHVlOiAncmlnaHQgY2VudGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdyaWdodCB0b3AnLCB2YWx1ZTogJ3JpZ2h0IHRvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAncmlnaHQgYm90dG9tJywgdmFsdWU6ICdyaWdodCBib3R0b20nIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IHN0eWxlOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIGJhY2tncm91bmRQb3NpdGlvbjp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCdiYWNrZ3JvdW5kUG9zaXRpb24nLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRmlqYWNpw7NuXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5zdHlsZS5iYWNrZ3JvdW5kQXR0YWNobWVudCB9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICcnLCB2YWx1ZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnZml4ZWQnLCB2YWx1ZTogJ2ZpeGVkJyB9LFxyXG4gICAgICAgICAgICAgICAgXSB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IHN0eWxlOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIGJhY2tncm91bmRBdHRhY2htZW50OnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sJ2JhY2tncm91bmRBdHRhY2htZW50JywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJjb25zdCB7IFRleHRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaW1wb3J0IHsgc2FuaXRpemVTdHlsZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbGl0aWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRTcGFjZURpbWVuc2lvbih7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30pe1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlLXNwYWNpbmdcIj5Fc3BhY2lhZG88L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1jb250cm9sIHRpdGxlLXNwYWNpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IGF0dHJpYnV0ZXMuc3R5bGUubWFyZ2luVG9wIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlIDogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBtYXJnaW5Ub3A6dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ21hcmdpblRvcCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IGF0dHJpYnV0ZXMuc3R5bGUubWFyZ2luUmlnaHQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIG1hcmdpblJpZ2h0OnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdtYXJnaW5SaWdodCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBhdHRyaWJ1dGVzLnN0eWxlLm1hcmdpbkJvdHRvbSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgbWFyZ2luQm90dG9tOnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdtYXJnaW5Cb3R0b20nLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7IGF0dHJpYnV0ZXMuc3R5bGUubWFyZ2luTGVmdCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgbWFyZ2luTGVmdDp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAnbWFyZ2luTGVmdCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvbi1pbnB1dCB0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBhdHRyaWJ1dGVzLnN0eWxlLnBhZGRpbmdUb3AgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzdHlsZSA6IHsgLi4uYXR0cmlidXRlcy5zdHlsZSwgcGFkZGluZ1RvcDp2YWx1ZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZVN0eWxlKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSwgJ3BhZGRpbmdUb3AnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBhdHRyaWJ1dGVzLnN0eWxlLnBhZGRpbmdSaWdodCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlIDogeyAuLi5hdHRyaWJ1dGVzLnN0eWxlLCBwYWRkaW5nUmlnaHQ6dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdwYWRkaW5nUmlnaHQnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaW1lbnNpb24taW5wdXQgYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgYXR0cmlidXRlcy5zdHlsZS5wYWRkaW5nQm90dG9tIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIHBhZGRpbmdCb3R0b206dmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVTdHlsZSh7YXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30sICdwYWRkaW5nQm90dG9tJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uLWlucHV0IGxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBhdHRyaWJ1dGVzLnN0eWxlLnBhZGRpbmdMZWZ0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGUgOiB7IC4uLmF0dHJpYnV0ZXMuc3R5bGUsIHBhZGRpbmdMZWZ0OnZhbHVlIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbml0aXplU3R5bGUoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9LCAncGFkZGluZ0xlZnQnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=