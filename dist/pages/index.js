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

var _utils = require('./../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

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
    }, _this.$repeat = { "listItem": { "com": "gankListTitleItem", "props": "gitem.sync" }, "item": { "com": "gankListItem", "props": "gitem.sync" } }, _this.$props = { "gankListItem": { "v-bind:gitem.sync": { "value": "subItem", "type": "item", "for": "item", "item": "subItem", "index": "index", "key": "index" }, "v-bind:timeStr.once": { "value": "subItem.publishedAt", "for": "item", "item": "subItem", "index": "index", "key": "index" } }, "gankListTitleItem": { "v-bind:gitem.sync": { "value": "item", "type": "item", "for": "listItem", "item": "item", "index": "index", "key": "index" } }, "inaver": { "xmlns:v-bind": "", "v-bind:showBack.sync": "false", "v-bind:background.sync": "bgColor" }, "calendar": { "xmlns:v-on": "" } }, _this.$events = { "calendar": { "v-on:selectDay": "selectDay" } }, _this.components = {
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
      catchtouchmove: function catchtouchmove() {},
      selectDay: function selectDay(dayItem) {
        console.log(dayItem);
        this.showCalendar = !this.showCalendar;
        this.getData(dayItem.fullDate);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(date) {
        var data, d, keys, p, titleItem, items, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = void 0;

                if (!_utils2.default.isToday(date)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return _gankAPI2.default.getTodayNews();

              case 4:
                data = _context.sent;
                _context.next = 11;
                break;

              case 7:
                d = new Date(date.replace(/-/g, "/"));
                _context.next = 10;
                return _gankAPI2.default.getDayNews(_utils2.default.dateFormate(d, "yyyy/MM/dd"));

              case 10:
                data = _context.sent;

              case 11:
                this.listItem = [];
                //数据处理
                keys = [];
                _context.t0 = regeneratorRuntime.keys(data.results);

              case 14:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 44;
                  break;
                }

                p = _context.t1.value;

                if (!data.results.hasOwnProperty(p)) {
                  _context.next = 42;
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
                _context.prev = 25;

                for (_iterator = data.results[p][Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;

                  item.publishedAt = item.publishedAt.substring(0, 10);
                  items.push(item);
                }
                _context.next = 33;
                break;

              case 29:
                _context.prev = 29;
                _context.t2 = _context['catch'](25);
                _didIteratorError = true;
                _iteratorError = _context.t2;

              case 33:
                _context.prev = 33;
                _context.prev = 34;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 36:
                _context.prev = 36;

                if (!_didIteratorError) {
                  _context.next = 39;
                  break;
                }

                throw _iteratorError;

              case 39:
                return _context.finish(36);

              case 40:
                return _context.finish(33);

              case 41:
                this.listItem.push(items);

              case 42:
                _context.next = 14;
                break;

              case 44:

                this.$apply();

              case 45:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[25, 29, 33, 41], [34,, 36, 40]]);
      }));

      function getData(_x) {
        return _ref2.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.getData(_utils2.default.dateFormate(new Date(), "yyyy-MM-dd"));
    }
  }, {
    key: 'onPageScroll',
    value: function onPageScroll() {
      if (this.showCalendar) {
        this.showCalendar = false;
        this.$apply();
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25TdHlsZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImdhbmtMaXN0SXRlbSIsImdhbmtMaXN0VGl0bGVJdGVtIiwiaW5hdmVyIiwiY2FsZW5kYXIiLCJkYXRhIiwibGlzdEl0ZW0iLCJ0b3BJbWFnZVVybCIsImJnQ29sb3IiLCJ0aXRsZSIsInNob3dDYWxlbmRhciIsImNvbXB1dGVkIiwibWV0aG9kcyIsImNsaWNrRGV0YWlsIiwiaW5kZXgiLCJzZWxlY3REYXRlIiwiY2F0Y2h0b3VjaG1vdmUiLCJzZWxlY3REYXkiLCJkYXlJdGVtIiwiY29uc29sZSIsImxvZyIsImdldERhdGEiLCJmdWxsRGF0ZSIsImV2ZW50cyIsImRhdGUiLCJ1dGlscyIsImlzVG9kYXkiLCJnYW5rQXBpIiwiZ2V0VG9kYXlOZXdzIiwiZCIsIkRhdGUiLCJyZXBsYWNlIiwiZ2V0RGF5TmV3cyIsImRhdGVGb3JtYXRlIiwia2V5cyIsInJlc3VsdHMiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJ0aXRsZUl0ZW0iLCJwdXNoIiwidXJsIiwiaXRlbXMiLCJpdGVtIiwicHVibGlzaGVkQXQiLCJzdWJzdHJpbmciLCIkYXBwbHkiLCJzZWxmIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLFFBRGpCO0FBRVBDLHVCQUFpQjtBQUZWLEssUUFJVkMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLE9BQU0sbUJBQVAsRUFBMkIsU0FBUSxZQUFuQyxFQUFaLEVBQTZELFFBQU8sRUFBQyxPQUFNLGNBQVAsRUFBc0IsU0FB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V0FBTCxDQUFpQkMsU0FBakIsQ0FBMkIsQ0FBM0IsRUFBNkIsRUFBN0IsQ0FBbkI7QUFDQUgsd0JBQU1GLElBQU4sQ0FBV0csSUFBWDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNELHFCQUFLcEMsUUFBTCxDQUFjaUMsSUFBZCxDQUFtQkUsS0FBbkI7Ozs7Ozs7O0FBSUoscUJBQUtJLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHTztBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFdBQUt6QixPQUFMLENBQWFJLGdCQUFNUSxXQUFOLENBQWtCLElBQUlILElBQUosRUFBbEIsRUFBOEIsWUFBOUIsQ0FBYjtBQUNEOzs7bUNBRWM7QUFDYixVQUFHLEtBQUtwQixZQUFSLEVBQXNCO0FBQ3BCLGFBQUtBLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxhQUFLbUMsTUFBTDtBQUNEO0FBQ0Y7Ozs7RUF6RmdDRSxlQUFLQyxJOztrQkFBbkJ2RCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICBpbXBvcnQgZ2Fua0FwaSBmcm9tICcuLi9hcGkvZ2Fua0FQSSc7XG4gIGltcG9ydCBnYW5rTGlzdEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9nYW5rTGlzdEl0ZW0nO1xuICBpbXBvcnQgZ2Fua0xpc3RUaXRsZUl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9nYW5rTGlzdFRpdGxlSXRlbSc7XG4gIGltcG9ydCBpbmF2ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9pbmF2ZXInO1xuICBpbXBvcnQgY2FsZW5kYXIgZnJvbSAnLi4vY29tcG9uZW50cy9jYWxlbmRhcic7XG4gIGltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfku4rml6XmnIDmlrDlubLotKcnLFxuICAgICAgbmF2aWdhdGlvblN0eWxlOiAnY3VzdG9tJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7XCJsaXN0SXRlbVwiOntcImNvbVwiOlwiZ2Fua0xpc3RUaXRsZUl0ZW1cIixcInByb3BzXCI6XCJnaXRlbS5zeW5jXCJ9LFwiaXRlbVwiOntcImNvbVwiOlwiZ2Fua0xpc3RJdGVtXCIsXCJwcm9wc1wiOlwiZ2l0ZW0uc3luY1wifX07XHJcbiRwcm9wcyA9IHtcImdhbmtMaXN0SXRlbVwiOntcInYtYmluZDpnaXRlbS5zeW5jXCI6e1widmFsdWVcIjpcInN1Ykl0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiaXRlbVwiLFwiaXRlbVwiOlwic3ViSXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnRpbWVTdHIub25jZVwiOntcInZhbHVlXCI6XCJzdWJJdGVtLnB1Ymxpc2hlZEF0XCIsXCJmb3JcIjpcIml0ZW1cIixcIml0ZW1cIjpcInN1Ykl0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX0sXCJnYW5rTGlzdFRpdGxlSXRlbVwiOntcInYtYmluZDpnaXRlbS5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibGlzdEl0ZW1cIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX0sXCJpbmF2ZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnNob3dCYWNrLnN5bmNcIjpcImZhbHNlXCIsXCJ2LWJpbmQ6YmFja2dyb3VuZC5zeW5jXCI6XCJiZ0NvbG9yXCJ9LFwiY2FsZW5kYXJcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiY2FsZW5kYXJcIjp7XCJ2LW9uOnNlbGVjdERheVwiOlwic2VsZWN0RGF5XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBnYW5rTGlzdEl0ZW06IGdhbmtMaXN0SXRlbSxcbiAgICAgIGdhbmtMaXN0VGl0bGVJdGVtOiBnYW5rTGlzdFRpdGxlSXRlbSxcbiAgICAgIGluYXZlcjogaW5hdmVyLFxuICAgICAgY2FsZW5kYXI6IGNhbGVuZGFyLFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBsaXN0SXRlbTogW10sXG4gICAgICB0b3BJbWFnZVVybDogbnVsbCxcbiAgICAgIGJnQ29sb3I6ICcjMjlBQ0JFJyxcbiAgICAgIHRpdGxlOiAn5LuK5pel5pyA5paw5bmy6LSnJyxcbiAgICAgIHNob3dDYWxlbmRhcjogZmFsc2UsXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2xpY2tEZXRhaWwoaW5kZXgpIHtcbiAgICAgICAgLy8v5Y+X5bCP56iL5bqP6ZmQ5Yi25peg5rOV5omT5byA572R6aG1XG4gICAgICAgIC8vIHRoaXMuJG5hdmlnYXRlKCcvcGFnZXMvd2Vidmlldz93ZWJVcmw9JyArIGluZGV4KTtcbiAgICAgIH0sXG4gICAgICBzZWxlY3REYXRlKCkge1xuICAgICAgICB0aGlzLnNob3dDYWxlbmRhciA9ICF0aGlzLnNob3dDYWxlbmRhcjtcbiAgICAgIH0sXG4gICAgICBjYXRjaHRvdWNobW92ZSgpe30sXG4gICAgICBzZWxlY3REYXkoZGF5SXRlbSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXlJdGVtKTtcbiAgICAgICAgdGhpcy5zaG93Q2FsZW5kYXIgPSAhdGhpcy5zaG93Q2FsZW5kYXI7XG4gICAgICAgIHRoaXMuZ2V0RGF0YShkYXlJdGVtLmZ1bGxEYXRlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICBcbiAgICB9XG5cbiAgICBhc3luYyBnZXREYXRhKGRhdGUpIHtcbiAgICAgIGxldCBkYXRhO1xuICAgICAgaWYodXRpbHMuaXNUb2RheShkYXRlKSkge1xuICAgICAgICBkYXRhID0gYXdhaXQgZ2Fua0FwaS5nZXRUb2RheU5ld3MoKTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShkYXRlLnJlcGxhY2UoLy0vZyxcIi9cIikpO1xuICAgICAgICBkYXRhID0gYXdhaXQgZ2Fua0FwaS5nZXREYXlOZXdzKHV0aWxzLmRhdGVGb3JtYXRlKGQsIFwieXl5eS9NTS9kZFwiKSk7XG4gICAgICB9IFxuICAgICAgdGhpcy5saXN0SXRlbSA9IFtdO1xuICAgICAgLy/mlbDmja7lpITnkIZcbiAgICAgIHZhciBrZXlzID0gW107XG4gICAgICBmb3IgKHZhciBwIGluIGRhdGEucmVzdWx0cykge1xuICAgICAgICBpZihkYXRhLnJlc3VsdHMuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICB2YXIgdGl0bGVJdGVtID0ge307XG4gICAgICAgICAgdGl0bGVJdGVtLnRpdGxlID0gcDtcbiAgICAgICAgICB0aGlzLmxpc3RJdGVtLnB1c2godGl0bGVJdGVtKTtcbiAgICAgICAgICBpZiAocCA9PT0gJ+emj+WIqScpIHtcbiAgICAgICAgICAgIC8v6I635Y+W5aS06YOo56aP5Yip54Wn54mHXG4gICAgICAgICAgICB0aGlzLnRvcEltYWdlVXJsID0gZGF0YS5yZXN1bHRzW3BdWzBdLnVybDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgICAgZm9yICh2YXIgaXRlbSBvZiBkYXRhLnJlc3VsdHNbcF0pIHtcbiAgICAgICAgICAgIGl0ZW0ucHVibGlzaGVkQXQgPSBpdGVtLnB1Ymxpc2hlZEF0LnN1YnN0cmluZygwLDEwKTtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubGlzdEl0ZW0ucHVzaChpdGVtcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy5nZXREYXRhKHV0aWxzLmRhdGVGb3JtYXRlKG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZFwiKSk7XG4gICAgfVxuXG4gICAgb25QYWdlU2Nyb2xsKCkge1xuICAgICAgaWYodGhpcy5zaG93Q2FsZW5kYXIpIHtcbiAgICAgICAgdGhpcy5zaG93Q2FsZW5kYXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==