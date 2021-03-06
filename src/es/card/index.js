function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';
import Grid from './Grid';
import Meta from './Meta';
import Tabs from '../tabs';
import Row from '../row';
import Col from '../col';
import { ConfigConsumer } from '../config-provider';
import SizeContext from '../config-provider/SizeContext';

function getAction(actions) {
  var actionList = actions.map(function (action, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement("li", {
        style: {
          width: "".concat(100 / actions.length, "%")
        },
        key: "action-".concat(index)
      }, /*#__PURE__*/React.createElement("span", null, action))
    );
  });
  return actionList;
}

var Card = /*#__PURE__*/function (_React$Component) {
  _inherits(Card, _React$Component);

  var _super = _createSuper(Card);

  function Card() {
    var _this;

    _classCallCheck(this, Card);

    _this = _super.apply(this, arguments);

    _this.onTabChange = function (key) {
      if (_this.props.onTabChange) {
        _this.props.onTabChange(key);
      }
    };

    _this.renderCard = function (_ref) {
      var _extends2;

      var getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          extra = _a.extra,
          _a$headStyle = _a.headStyle,
          headStyle = _a$headStyle === void 0 ? {} : _a$headStyle,
          _a$bodyStyle = _a.bodyStyle,
          bodyStyle = _a$bodyStyle === void 0 ? {} : _a$bodyStyle,
          title = _a.title,
          loading = _a.loading,
          _a$bordered = _a.bordered,
          bordered = _a$bordered === void 0 ? true : _a$bordered,
          customizeSize = _a.size,
          type = _a.type,
          cover = _a.cover,
          actions = _a.actions,
          tabList = _a.tabList,
          children = _a.children,
          activeTabKey = _a.activeTabKey,
          defaultActiveTabKey = _a.defaultActiveTabKey,
          tabBarExtraContent = _a.tabBarExtraContent,
          hoverable = _a.hoverable,
          _a$tabProps = _a.tabProps,
          tabProps = _a$tabProps === void 0 ? {} : _a$tabProps,
          others = __rest(_a, ["prefixCls", "className", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps"]);

      var prefixCls = getPrefixCls('card', customizePrefixCls);
      var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? {
        padding: 24
      } : undefined;
      var loadingBlock = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-content"),
        style: loadingBlockStyle
      }, /*#__PURE__*/React.createElement(Row, {
        gutter: 8
      }, /*#__PURE__*/React.createElement(Col, {
        span: 22
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      }))), /*#__PURE__*/React.createElement(Row, {
        gutter: 8
      }, /*#__PURE__*/React.createElement(Col, {
        span: 8
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      })), /*#__PURE__*/React.createElement(Col, {
        span: 15
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      }))), /*#__PURE__*/React.createElement(Row, {
        gutter: 8
      }, /*#__PURE__*/React.createElement(Col, {
        span: 6
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      })), /*#__PURE__*/React.createElement(Col, {
        span: 18
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      }))), /*#__PURE__*/React.createElement(Row, {
        gutter: 8
      }, /*#__PURE__*/React.createElement(Col, {
        span: 13
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      })), /*#__PURE__*/React.createElement(Col, {
        span: 9
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      }))), /*#__PURE__*/React.createElement(Row, {
        gutter: 8
      }, /*#__PURE__*/React.createElement(Col, {
        span: 4
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      })), /*#__PURE__*/React.createElement(Col, {
        span: 3
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      })), /*#__PURE__*/React.createElement(Col, {
        span: 16
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      }))));
      var hasActiveTabKey = activeTabKey !== undefined;

      var extraProps = _extends(_extends({}, tabProps), (_extends2 = {}, _defineProperty(_extends2, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey), _defineProperty(_extends2, "tabBarExtraContent", tabBarExtraContent), _extends2));

      var head;
      var tabs = tabList && tabList.length ? /*#__PURE__*/React.createElement(Tabs, _extends({
        size: "large"
      }, extraProps, {
        className: "".concat(prefixCls, "-head-tabs"),
        onChange: _this.onTabChange
      }), tabList.map(function (item) {
        return /*#__PURE__*/React.createElement(Tabs.TabPane, {
          tab: item.tab,
          disabled: item.disabled,
          key: item.key
        });
      })) : null;

      if (title || extra || tabs) {
        head = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-head"),
          style: headStyle
        }, /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-head-wrapper")
        }, title && /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-head-title")
        }, title), extra && /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-extra")
        }, extra)), tabs);
      }

      var coverDom = cover ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-cover")
      }, cover) : null;
      var body = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-body"),
        style: bodyStyle
      }, loading ? loadingBlock : children);
      var actionDom = actions && actions.length ? /*#__PURE__*/React.createElement("ul", {
        className: "".concat(prefixCls, "-actions")
      }, getAction(actions)) : null;
      var divProps = omit(others, ['onTabChange']);
      return /*#__PURE__*/React.createElement(SizeContext.Consumer, null, function (size) {
        var _classNames;

        var mergedSize = customizeSize || size;
        var classString = classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames, "".concat(prefixCls, "-bordered"), bordered), _defineProperty(_classNames, "".concat(prefixCls, "-hoverable"), hoverable), _defineProperty(_classNames, "".concat(prefixCls, "-contain-grid"), _this.isContainGrid()), _defineProperty(_classNames, "".concat(prefixCls, "-contain-tabs"), tabList && tabList.length), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), _defineProperty(_classNames, "".concat(prefixCls, "-type-").concat(type), !!type), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames));
        return /*#__PURE__*/React.createElement("div", _extends({}, divProps, {
          className: classString
        }), head, coverDom, body, actionDom);
      });
    };

    return _this;
  }

  _createClass(Card, [{
    key: "isContainGrid",
    value: function isContainGrid() {
      var containGrid;
      React.Children.forEach(this.props.children, function (element) {
        if (element && element.type && element.type === Grid) {
          containGrid = true;
        }
      });
      return containGrid;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderCard);
    }
  }]);

  return Card;
}(React.Component);

export { Card as default };
Card.Grid = Grid;
Card.Meta = Meta;