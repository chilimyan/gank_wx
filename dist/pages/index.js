'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _gankAPI = require('./../api/gankAPI.js');

var _gankAPI2 = _interopRequireDefault(_gankAPI);

var _gankListItem = require('./../components/gankListItem.js');

var _gankListItem2 = _interopRequireDefault(_gankListItem);

var _gankListTitleItem = require('./../components/gankListTitleItem.js');

var _gankListTitleItem2 = _interopRequireDefault(_gankListTitleItem);

var _inaver = require('./../components/inaver.js');

var _inaver2 = _interopRequireDefault(_inaver);

var _calendar = require('./../components/calendar.js');

var _calendar2 = _interopRequireDefault(_calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '今日最新干货',
      navigationStyle: 'custom'
    }, _this.$repeat = { "listItem": { "com": "gankListTitleItem", "props": "gitem.sync" }, "item": { "com": "gankListItem", "props": "gitem.sync" } }, _this.$props = { "gankListItem": { "v-bind:gitem.sync": { "value": "subItem", "type": "item", "for": "item", "item": "subItem", "index": "index", "key": "index" }, "v-bind:timeStr.once": { "value": "subItem.publishedAt", "for": "item", "item": "subItem", "index": "index", "key": "index" } }, "gankListTitleItem": { "v-bind:gitem.sync": { "value": "item", "type": "item", "for": "listItem", "item": "item", "index": "index", "key": "index" } }, "inaver": { "xmlns:v-bind": "", "v-bind:showBack.sync": "false", "v-bind:background.sync": "bgColor" } }, _this.$events = {}, _this.components = {
      gankListItem: _gankListItem2.default,
      gankListTitleItem: _gankListTitleItem2.default,
      inaver: _inaver2.default,
      calendar: _calendar2.default
    }, _this.data = {
      listItem: [],
      topImageUrl: null,
      bgColor: '#29ACBE',
      title: '今日最新干货',
      showCalendar: false
    }, _this.computed = {}, _this.methods = {
      clickDetail: function clickDetail(index) {
        ///受小程序限制无法打开网页
        // this.$navigate('/pages/webview?webUrl=' + index);
      },
      selectDate: function selectDate() {
        this.showCalendar = !this.showCalendar;
      },
      catchtouchmove: function catchtouchmove() {}
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var self, data, keys, p, titleItem, items, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                _context.next = 3;
                return _gankAPI2.default.getTodayNews();

              case 3:
                data = _context.sent;

                //数据处理
                keys = [];
                _context.t0 = regeneratorRuntime.keys(data.results);

              case 6:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 36;
                  break;
                }

                p = _context.t1.value;

                if (!data.results.hasOwnProperty(p)) {
                  _context.next = 34;
                  break;
                }

                titleItem = {};

                titleItem.title = p;
                this.listItem.push(titleItem);
                if (p === '福利') {
                  //获取头部福利照片
                  this.topImageUrl = data.results[p][0].url;
                }
                items = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 17;

                for (_iterator = data.results[p][Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;

                  item.publishedAt = item.publishedAt.substring(0, 10);
                  items.push(item);
                }
                _context.next = 25;
                break;

              case 21:
                _context.prev = 21;
                _context.t2 = _context['catch'](17);
                _didIteratorError = true;
                _iteratorError = _context.t2;

              case 25:
                _context.prev = 25;
                _context.prev = 26;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 28:
                _context.prev = 28;

                if (!_didIteratorError) {
                  _context.next = 31;
                  break;
                }

                throw _iteratorError;

              case 31:
                return _context.finish(28);

              case 32:
                return _context.finish(25);

              case 33:
                this.listItem.push(items);

              case 34:
                _context.next = 6;
                break;

              case 36:

                this.$apply();

              case 37:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[17, 21, 25, 33], [26,, 28, 32]]);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25TdHlsZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImdhbmtMaXN0SXRlbSIsImdhbmtMaXN0VGl0bGVJdGVtIiwiaW5hdmVyIiwiY2FsZW5kYXIiLCJkYXRhIiwibGlzdEl0ZW0iLCJ0b3BJbWFnZVVybCIsImJnQ29sb3IiLCJ0aXRsZSIsInNob3dDYWxlbmRhciIsImNvbXB1dGVkIiwibWV0aG9kcyIsImNsaWNrRGV0YWlsIiwiaW5kZXgiLCJzZWxlY3REYXRlIiwiY2F0Y2h0b3VjaG1vdmUiLCJldmVudHMiLCJzZWxmIiwiZ2Fua0FwaSIsImdldFRvZGF5TmV3cyIsImtleXMiLCJyZXN1bHRzIiwicCIsImhhc093blByb3BlcnR5IiwidGl0bGVJdGVtIiwicHVzaCIsInVybCIsIml0ZW1zIiwiaXRlbSIsInB1Ymxpc2hlZEF0Iiwic3Vic3RyaW5nIiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixRQURqQjtBQUVQQyx1QkFBaUI7QUFGVixLLFFBSVZDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxPQUFNLG1CQUFQLEVBQTJCLFNBQVEsWUFBbkMsRUFBWixFQUE2RCxRQUFPLEVBQUMsT0FBTSxjQUFQLEVBQXNCLFNBQVEsWUFBOUIsRUFBcEUsRSxRQUNiQyxNLEdBQVMsRUFBQyxnQkFBZSxFQUFDLHFCQUFvQixFQUFDLFNBQVEsU0FBVCxFQUFtQixRQUFPLE1BQTFCLEVBQWlDLE9BQU0sTUFBdkMsRUFBOEMsUUFBTyxTQUFyRCxFQUErRCxTQUFRLE9BQXZFLEVBQStFLE9BQU0sT0FBckYsRUFBckIsRUFBbUgsdUJBQXNCLEVBQUMsU0FBUSxxQkFBVCxFQUErQixPQUFNLE1BQXJDLEVBQTRDLFFBQU8sU0FBbkQsRUFBNkQsU0FBUSxPQUFyRSxFQUE2RSxPQUFNLE9BQW5GLEVBQXpJLEVBQWhCLEVBQXNQLHFCQUFvQixFQUFDLHFCQUFvQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sVUFBcEMsRUFBK0MsUUFBTyxNQUF0RCxFQUE2RCxTQUFRLE9BQXJFLEVBQTZFLE9BQU0sT0FBbkYsRUFBckIsRUFBMVEsRUFBNFgsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHdCQUF1QixPQUExQyxFQUFrRCwwQkFBeUIsU0FBM0UsRUFBclksRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsb0JBQWNBLHNCQUROO0FBRVJDLHlCQUFtQkEsMkJBRlg7QUFHUkMsY0FBUUEsZ0JBSEE7QUFJUkMsZ0JBQVVBO0FBSkYsSyxRQU9WQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxtQkFBYSxJQUZSO0FBR0xDLGVBQVMsU0FISjtBQUlMQyxhQUFPLFFBSkY7QUFLTEMsb0JBQWM7QUFMVCxLLFFBUVBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSQyxpQkFEUSx1QkFDSUMsS0FESixFQUNXO0FBQ2pCO0FBQ0E7QUFDRCxPQUpPO0FBS1JDLGdCQUxRLHdCQUtLO0FBQ1gsYUFBS0wsWUFBTCxHQUFvQixDQUFDLEtBQUtBLFlBQTFCO0FBQ0QsT0FQTztBQVFSTSxvQkFSUSw0QkFRUSxDQUFFO0FBUlYsSyxRQVdWQyxNLEdBQVMsRTs7Ozs7Ozs7Ozs7OztBQUtIQyxvQixHQUFPLEk7O3VCQUNNQyxrQkFBUUMsWUFBUixFOzs7QUFBYmYsb0I7O0FBQ0o7QUFDSWdCLG9CLEdBQU8sRTtzREFDR2hCLEtBQUtpQixPOzs7Ozs7OztBQUFWQyxpQjs7cUJBQ0psQixLQUFLaUIsT0FBTCxDQUFhRSxjQUFiLENBQTRCRCxDQUE1QixDOzs7OztBQUNHRSx5QixHQUFZLEU7O0FBQ2hCQSwwQkFBVWhCLEtBQVYsR0FBa0JjLENBQWxCO0FBQ0EscUJBQUtqQixRQUFMLENBQWNvQixJQUFkLENBQW1CRCxTQUFuQjtBQUNBLG9CQUFJRixNQUFNLElBQVYsRUFBZ0I7QUFDZDtBQUNBLHVCQUFLaEIsV0FBTCxHQUFtQkYsS0FBS2lCLE9BQUwsQ0FBYUMsQ0FBYixFQUFnQixDQUFoQixFQUFtQkksR0FBdEM7QUFDRDtBQUNHQyxxQixHQUFRLEU7Ozs7OztBQUNaLGlDQUFpQnZCLEtBQUtpQixPQUFMLENBQWFDLENBQWIsQ0FBakIsdUhBQWtDO0FBQXpCTSxzQkFBeUI7O0FBQ2hDQSx1QkFBS0MsV0FBTCxHQUFtQkQsS0FBS0MsV0FBTCxDQUFpQkMsU0FBakIsQ0FBMkIsQ0FBM0IsRUFBNkIsRUFBN0IsQ0FBbkI7QUFDQUgsd0JBQU1GLElBQU4sQ0FBV0csSUFBWDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNELHFCQUFLdkIsUUFBTCxDQUFjb0IsSUFBZCxDQUFtQkUsS0FBbkI7Ozs7Ozs7O0FBSUoscUJBQUtJLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqRStCQyxlQUFLQyxJOztrQkFBbkJ6QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICBpbXBvcnQgZ2Fua0FwaSBmcm9tICcuLi9hcGkvZ2Fua0FQSSc7XG4gIGltcG9ydCBnYW5rTGlzdEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9nYW5rTGlzdEl0ZW0nO1xuICBpbXBvcnQgZ2Fua0xpc3RUaXRsZUl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9nYW5rTGlzdFRpdGxlSXRlbSc7XG4gIGltcG9ydCBpbmF2ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9pbmF2ZXInO1xuICBpbXBvcnQgY2FsZW5kYXIgZnJvbSAnLi4vY29tcG9uZW50cy9jYWxlbmRhcic7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfku4rml6XmnIDmlrDlubLotKcnLFxuICAgICAgbmF2aWdhdGlvblN0eWxlOiAnY3VzdG9tJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7XCJsaXN0SXRlbVwiOntcImNvbVwiOlwiZ2Fua0xpc3RUaXRsZUl0ZW1cIixcInByb3BzXCI6XCJnaXRlbS5zeW5jXCJ9LFwiaXRlbVwiOntcImNvbVwiOlwiZ2Fua0xpc3RJdGVtXCIsXCJwcm9wc1wiOlwiZ2l0ZW0uc3luY1wifX07XHJcbiRwcm9wcyA9IHtcImdhbmtMaXN0SXRlbVwiOntcInYtYmluZDpnaXRlbS5zeW5jXCI6e1widmFsdWVcIjpcInN1Ykl0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiaXRlbVwiLFwiaXRlbVwiOlwic3ViSXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnRpbWVTdHIub25jZVwiOntcInZhbHVlXCI6XCJzdWJJdGVtLnB1Ymxpc2hlZEF0XCIsXCJmb3JcIjpcIml0ZW1cIixcIml0ZW1cIjpcInN1Ykl0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX0sXCJnYW5rTGlzdFRpdGxlSXRlbVwiOntcInYtYmluZDpnaXRlbS5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibGlzdEl0ZW1cIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX0sXCJpbmF2ZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnNob3dCYWNrLnN5bmNcIjpcImZhbHNlXCIsXCJ2LWJpbmQ6YmFja2dyb3VuZC5zeW5jXCI6XCJiZ0NvbG9yXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGdhbmtMaXN0SXRlbTogZ2Fua0xpc3RJdGVtLFxuICAgICAgZ2Fua0xpc3RUaXRsZUl0ZW06IGdhbmtMaXN0VGl0bGVJdGVtLFxuICAgICAgaW5hdmVyOiBpbmF2ZXIsXG4gICAgICBjYWxlbmRhcjogY2FsZW5kYXIsXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3RJdGVtOiBbXSxcbiAgICAgIHRvcEltYWdlVXJsOiBudWxsLFxuICAgICAgYmdDb2xvcjogJyMyOUFDQkUnLFxuICAgICAgdGl0bGU6ICfku4rml6XmnIDmlrDlubLotKcnLFxuICAgICAgc2hvd0NhbGVuZGFyOiBmYWxzZSxcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGNsaWNrRGV0YWlsKGluZGV4KSB7XG4gICAgICAgIC8vL+WPl+Wwj+eoi+W6j+mZkOWItuaXoOazleaJk+W8gOe9kemhtVxuICAgICAgICAvLyB0aGlzLiRuYXZpZ2F0ZSgnL3BhZ2VzL3dlYnZpZXc/d2ViVXJsPScgKyBpbmRleCk7XG4gICAgICB9LFxuICAgICAgc2VsZWN0RGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zaG93Q2FsZW5kYXIgPSAhdGhpcy5zaG93Q2FsZW5kYXI7XG4gICAgICB9LFxuICAgICAgY2F0Y2h0b3VjaG1vdmUoKXt9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgXG4gICAgfVxuXG4gICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IGRhdGEgPSBhd2FpdCBnYW5rQXBpLmdldFRvZGF5TmV3cygpO1xuICAgICAgLy/mlbDmja7lpITnkIZcbiAgICAgIHZhciBrZXlzID0gW107XG4gICAgICBmb3IgKHZhciBwIGluIGRhdGEucmVzdWx0cykge1xuICAgICAgICBpZihkYXRhLnJlc3VsdHMuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICB2YXIgdGl0bGVJdGVtID0ge307XG4gICAgICAgICAgdGl0bGVJdGVtLnRpdGxlID0gcDtcbiAgICAgICAgICB0aGlzLmxpc3RJdGVtLnB1c2godGl0bGVJdGVtKTtcbiAgICAgICAgICBpZiAocCA9PT0gJ+emj+WIqScpIHtcbiAgICAgICAgICAgIC8v6I635Y+W5aS06YOo56aP5Yip54Wn54mHXG4gICAgICAgICAgICB0aGlzLnRvcEltYWdlVXJsID0gZGF0YS5yZXN1bHRzW3BdWzBdLnVybDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgICAgZm9yICh2YXIgaXRlbSBvZiBkYXRhLnJlc3VsdHNbcF0pIHtcbiAgICAgICAgICAgIGl0ZW0ucHVibGlzaGVkQXQgPSBpdGVtLnB1Ymxpc2hlZEF0LnN1YnN0cmluZygwLDEwKTtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubGlzdEl0ZW0ucHVzaChpdGVtcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICB9XG4iXX0=