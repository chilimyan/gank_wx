'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _catoryBar = require('./../components/catoryBar.js');

var _catoryBar2 = _interopRequireDefault(_catoryBar);

var _gankListItem = require('./../components/gankListItem.js');

var _gankListItem2 = _interopRequireDefault(_gankListItem);

var _gankAPI = require('./../api/gankAPI.js');

var _gankAPI2 = _interopRequireDefault(_gankAPI);

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
      navigationBarTitleText: '分类',
      enablePullDownRefresh: true,
      // 不配成dark的话三个加载中的点会看不到，其实是出来了，只是三个点是白色的，如果你的页面背景也是白的，那就看不出效果了
      backgroundTextStyle: 'dark'
    }, _this.$repeat = { "listItem": { "com": "gankListItem", "props": "gitem.sync" } }, _this.$props = { "gankListItem": { "xmlns:v-bind": { "value": "", "for": "listItem", "item": "item", "index": "index", "key": "index" }, "v-bind:gitem.sync": { "value": "item", "type": "item", "for": "listItem", "item": "item", "index": "index", "key": "index" }, "v-bind:timeStr.once": { "value": "item.publishedAt", "for": "listItem", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      catgoryBar: _catoryBar2.default,
      gankListItem: _gankListItem2.default
    }, _this.data = {
      page: 1,
      catoryId: 'all',
      listItem: []
    }, _this.computed = {}, _this.methods = {
      catchtouchmove: function catchtouchmove() {}
    }, _this.events = {
      'select': function select(currentId, event) {
        _this.page = 1;
        _this.loadData(currentId, _this.page);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      this.loadData(this.catoryId, this.page);
    }
  }, {
    key: 'loadData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(catogry, page) {
        var data, tempList, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _gankAPI2.default.getCatoryNews(catogry, page);

              case 2:
                data = _context.sent;
                tempList = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 7;

                for (_iterator = data.results[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;

                  item.publishedAt = item.publishedAt.substring(0, 10);
                  tempList.push(item);
                }
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](7);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 15:
                _context.prev = 15;
                _context.prev = 16;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 18:
                _context.prev = 18;

                if (!_didIteratorError) {
                  _context.next = 21;
                  break;
                }

                throw _iteratorError;

              case 21:
                return _context.finish(18);

              case 22:
                return _context.finish(15);

              case 23:
                if (!(page === 1)) {
                  _context.next = 27;
                  break;
                }

                this.listItem = tempList;
                _context.next = 46;
                break;

              case 27:
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 30;

                for (_iterator2 = tempList[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  item = _step2.value;

                  this.listItem.push(item);
                }
                _context.next = 38;
                break;

              case 34:
                _context.prev = 34;
                _context.t1 = _context['catch'](30);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t1;

              case 38:
                _context.prev = 38;
                _context.prev = 39;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 41:
                _context.prev = 41;

                if (!_didIteratorError2) {
                  _context.next = 44;
                  break;
                }

                throw _iteratorError2;

              case 44:
                return _context.finish(41);

              case 45:
                return _context.finish(38);

              case 46:
                console.log(this.listItem);
                this.$apply();

              case 48:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 11, 15, 23], [16,, 18, 22], [30, 34, 38, 46], [39,, 41, 45]]);
      }));

      function loadData(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      console.log('下拉刷新列表');
      this.page = +1;
      this.loadData(this.catoryId, this.page);
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log('上拉加载下一页');
      this.page = this.page + 1;
      this.loadData(this.catoryId, this.page);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/catgroy'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGdyb3kuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNhdGdvcnlCYXIiLCJnYW5rTGlzdEl0ZW0iLCJkYXRhIiwicGFnZSIsImNhdG9yeUlkIiwibGlzdEl0ZW0iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJjYXRjaHRvdWNobW92ZSIsImV2ZW50cyIsImN1cnJlbnRJZCIsImV2ZW50IiwibG9hZERhdGEiLCJjYXRvZ3J5IiwiZ2Fua0FwaSIsImdldENhdG9yeU5ld3MiLCJ0ZW1wTGlzdCIsInJlc3VsdHMiLCJpdGVtIiwicHVibGlzaGVkQXQiLCJzdWJzdHJpbmciLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLDZCQUF1QixJQUZoQjtBQUdQO0FBQ0FDLDJCQUFxQjtBQUpkLEssUUFNVkMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLE9BQU0sY0FBUCxFQUFzQixTQUFRLFlBQTlCLEVBQVosRSxRQUNiQyxNLEdBQVMsRUFBQyxnQkFBZSxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxVQUFsQixFQUE2QixRQUFPLE1BQXBDLEVBQTJDLFNBQVEsT0FBbkQsRUFBMkQsT0FBTSxPQUFqRSxFQUFoQixFQUEwRixxQkFBb0IsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFVBQXBDLEVBQStDLFFBQU8sTUFBdEQsRUFBNkQsU0FBUSxPQUFyRSxFQUE2RSxPQUFNLE9BQW5GLEVBQTlHLEVBQTBNLHVCQUFzQixFQUFDLFNBQVEsa0JBQVQsRUFBNEIsT0FBTSxVQUFsQyxFQUE2QyxRQUFPLE1BQXBELEVBQTJELFNBQVEsT0FBbkUsRUFBMkUsT0FBTSxPQUFqRixFQUFoTyxFQUFoQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxrQkFBWUEsbUJBREo7QUFFUkMsb0JBQWNBO0FBRk4sSyxRQUtWQyxJLEdBQU87QUFDTEMsWUFBTSxDQUREO0FBRUxDLGdCQUFVLEtBRkw7QUFHTEMsZ0JBQVU7QUFITCxLLFFBTVBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSQyxvQkFEUSw0QkFDUSxDQUFFO0FBRFYsSyxRQUlWQyxNLEdBQVM7QUFDUCxnQkFBVSxnQkFBQ0MsU0FBRCxFQUFZQyxLQUFaLEVBQXNCO0FBQzlCLGNBQUtSLElBQUwsR0FBWSxDQUFaO0FBQ0EsY0FBS1MsUUFBTCxDQUFjRixTQUFkLEVBQXlCLE1BQUtQLElBQTlCO0FBQ0Q7QUFKTSxLOzs7Ozs2QkFPQTtBQUNQLFdBQUtTLFFBQUwsQ0FBYyxLQUFLUixRQUFuQixFQUE2QixLQUFLRCxJQUFsQztBQUNEOzs7OzJGQUVjVSxPLEVBQVNWLEk7Ozs7Ozs7O3VCQUNMVyxrQkFBUUMsYUFBUixDQUFzQkYsT0FBdEIsRUFBK0JWLElBQS9CLEM7OztBQUFiRCxvQjtBQUNBYyx3QixHQUFXLEU7Ozs7OztBQUNmLGlDQUFpQmQsS0FBS2UsT0FBdEIsdUhBQStCO0FBQXRCQyxzQkFBc0I7O0FBQzNCQSx1QkFBS0MsV0FBTCxHQUFtQkQsS0FBS0MsV0FBTCxDQUFpQkMsU0FBakIsQ0FBMkIsQ0FBM0IsRUFBNkIsRUFBN0IsQ0FBbkI7QUFDQUosMkJBQVNLLElBQVQsQ0FBY0gsSUFBZDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFDR2YsU0FBUyxDOzs7OztBQUNYLHFCQUFLRSxRQUFMLEdBQWdCVyxRQUFoQjs7Ozs7Ozs7OztBQUVBLGtDQUFpQkEsUUFBakIsMkhBQTJCO0FBQWxCRSxzQkFBa0I7O0FBQ3pCLHVCQUFLYixRQUFMLENBQWNnQixJQUFkLENBQW1CSCxJQUFuQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVESSx3QkFBUUMsR0FBUixDQUFZLEtBQUtsQixRQUFqQjtBQUNBLHFCQUFLbUIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQUVrQjtBQUNsQkYsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSxXQUFLcEIsSUFBTCxHQUFZLENBQUUsQ0FBZDtBQUNBLFdBQUtTLFFBQUwsQ0FBYyxLQUFLUixRQUFuQixFQUE2QixLQUFLRCxJQUFsQztBQUNEOzs7b0NBQ2U7QUFDZG1CLGNBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsV0FBS3BCLElBQUwsR0FBWSxLQUFLQSxJQUFMLEdBQVksQ0FBeEI7QUFDQSxXQUFLUyxRQUFMLENBQWMsS0FBS1IsUUFBbkIsRUFBNkIsS0FBS0QsSUFBbEM7QUFDRDs7OztFQWxFZ0NzQixlQUFLdEIsSTs7a0JBQW5CWixLIiwiZmlsZSI6ImNhdGdyb3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGNhdGdvcnlCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9jYXRvcnlCYXInO1xuICBpbXBvcnQgZ2Fua0xpc3RJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvZ2Fua0xpc3RJdGVtJztcbiAgaW1wb3J0IGdhbmtBcGkgZnJvbSAnLi4vYXBpL2dhbmtBUEknO1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YiG57G7JyxcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSxcbiAgICAgIC8vIOS4jemFjeaIkGRhcmvnmoTor53kuInkuKrliqDovb3kuK3nmoTngrnkvJrnnIvkuI3liLDvvIzlhbblrp7mmK/lh7rmnaXkuobvvIzlj6rmmK/kuInkuKrngrnmmK/nmb3oibLnmoTvvIzlpoLmnpzkvaDnmoTpobXpnaLog4zmma/kuZ/mmK/nmb3nmoTvvIzpgqPlsLHnnIvkuI3lh7rmlYjmnpzkuoZcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7XCJsaXN0SXRlbVwiOntcImNvbVwiOlwiZ2Fua0xpc3RJdGVtXCIsXCJwcm9wc1wiOlwiZ2l0ZW0uc3luY1wifX07XHJcbiRwcm9wcyA9IHtcImdhbmtMaXN0SXRlbVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibGlzdEl0ZW1cIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpnaXRlbS5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibGlzdEl0ZW1cIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDp0aW1lU3RyLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbS5wdWJsaXNoZWRBdFwiLFwiZm9yXCI6XCJsaXN0SXRlbVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBjYXRnb3J5QmFyOiBjYXRnb3J5QmFyLFxuICAgICAgZ2Fua0xpc3RJdGVtOiBnYW5rTGlzdEl0ZW0sXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHBhZ2U6IDEsXG4gICAgICBjYXRvcnlJZDogJ2FsbCcsXG4gICAgICBsaXN0SXRlbTogW10sXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gIFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjYXRjaHRvdWNobW92ZSgpe30sXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgJ3NlbGVjdCc6IChjdXJyZW50SWQsIGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICAgIHRoaXMubG9hZERhdGEoY3VycmVudElkLCB0aGlzLnBhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMubG9hZERhdGEodGhpcy5jYXRvcnlJZCwgdGhpcy5wYWdlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkRGF0YShjYXRvZ3J5LCBwYWdlKSB7XG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IGdhbmtBcGkuZ2V0Q2F0b3J5TmV3cyhjYXRvZ3J5LCBwYWdlKTtcbiAgICAgIHZhciB0ZW1wTGlzdCA9IFtdO1xuICAgICAgZm9yICh2YXIgaXRlbSBvZiBkYXRhLnJlc3VsdHMpIHtcbiAgICAgICAgICBpdGVtLnB1Ymxpc2hlZEF0ID0gaXRlbS5wdWJsaXNoZWRBdC5zdWJzdHJpbmcoMCwxMCk7XG4gICAgICAgICAgdGVtcExpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYWdlID09PSAxKSB7XG4gICAgICAgIHRoaXMubGlzdEl0ZW0gPSB0ZW1wTGlzdDtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaXRlbSBvZiB0ZW1wTGlzdCkge1xuICAgICAgICAgIHRoaXMubGlzdEl0ZW0ucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdEl0ZW0pO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgICBjb25zb2xlLmxvZygn5LiL5ouJ5Yi35paw5YiX6KGoJyk7XG4gICAgICB0aGlzLnBhZ2UgPSArIDE7XG4gICAgICB0aGlzLmxvYWREYXRhKHRoaXMuY2F0b3J5SWQsIHRoaXMucGFnZSk7XG4gICAgfVxuICAgIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgICBjb25zb2xlLmxvZygn5LiK5ouJ5Yqg6L295LiL5LiA6aG1JylcbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZSArIDE7XG4gICAgICB0aGlzLmxvYWREYXRhKHRoaXMuY2F0b3J5SWQsIHRoaXMucGFnZSk7XG4gICAgfVxuICB9XG4iXX0=