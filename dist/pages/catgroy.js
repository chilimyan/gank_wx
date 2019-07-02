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
    }, _this.computed = {}, _this.methods = {}, _this.events = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGdyb3kuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNhdGdvcnlCYXIiLCJnYW5rTGlzdEl0ZW0iLCJkYXRhIiwicGFnZSIsImNhdG9yeUlkIiwibGlzdEl0ZW0iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJjdXJyZW50SWQiLCJldmVudCIsImxvYWREYXRhIiwiY2F0b2dyeSIsImdhbmtBcGkiLCJnZXRDYXRvcnlOZXdzIiwidGVtcExpc3QiLCJyZXN1bHRzIiwiaXRlbSIsInB1Ymxpc2hlZEF0Iiwic3Vic3RyaW5nIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJ3ZXB5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyw2QkFBdUIsSUFGaEI7QUFHUDtBQUNBQywyQkFBcUI7QUFKZCxLLFFBTVZDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxPQUFNLGNBQVAsRUFBc0IsU0FBUSxZQUE5QixFQUFaLEUsUUFDYkMsTSxHQUFTLEVBQUMsZ0JBQWUsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sVUFBbEIsRUFBNkIsUUFBTyxNQUFwQyxFQUEyQyxTQUFRLE9BQW5ELEVBQTJELE9BQU0sT0FBakUsRUFBaEIsRUFBMEYscUJBQW9CLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxVQUFwQyxFQUErQyxRQUFPLE1BQXRELEVBQTZELFNBQVEsT0FBckUsRUFBNkUsT0FBTSxPQUFuRixFQUE5RyxFQUEwTSx1QkFBc0IsRUFBQyxTQUFRLGtCQUFULEVBQTRCLE9BQU0sVUFBbEMsRUFBNkMsUUFBTyxNQUFwRCxFQUEyRCxTQUFRLE9BQW5FLEVBQTJFLE9BQU0sT0FBakYsRUFBaE8sRUFBaEIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsa0JBQVlBLG1CQURKO0FBRVJDLG9CQUFjQTtBQUZOLEssUUFLVkMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FERDtBQUVMQyxnQkFBVSxLQUZMO0FBR0xDLGdCQUFVO0FBSEwsSyxRQU1QQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVM7QUFDUCxnQkFBVSxnQkFBQ0MsU0FBRCxFQUFZQyxLQUFaLEVBQXNCO0FBQzlCLGNBQUtQLElBQUwsR0FBWSxDQUFaO0FBQ0EsY0FBS1EsUUFBTCxDQUFjRixTQUFkLEVBQXlCLE1BQUtOLElBQTlCO0FBQ0Q7QUFKTSxLOzs7Ozs2QkFPQTtBQUNQLFdBQUtRLFFBQUwsQ0FBYyxLQUFLUCxRQUFuQixFQUE2QixLQUFLRCxJQUFsQztBQUNEOzs7OzJGQUVjUyxPLEVBQVNULEk7Ozs7Ozs7O3VCQUNMVSxrQkFBUUMsYUFBUixDQUFzQkYsT0FBdEIsRUFBK0JULElBQS9CLEM7OztBQUFiRCxvQjtBQUNBYSx3QixHQUFXLEU7Ozs7OztBQUNmLGlDQUFpQmIsS0FBS2MsT0FBdEIsdUhBQStCO0FBQXRCQyxzQkFBc0I7O0FBQzNCQSx1QkFBS0MsV0FBTCxHQUFtQkQsS0FBS0MsV0FBTCxDQUFpQkMsU0FBakIsQ0FBMkIsQ0FBM0IsRUFBNkIsRUFBN0IsQ0FBbkI7QUFDQUosMkJBQVNLLElBQVQsQ0FBY0gsSUFBZDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFDR2QsU0FBUyxDOzs7OztBQUNYLHFCQUFLRSxRQUFMLEdBQWdCVSxRQUFoQjs7Ozs7Ozs7OztBQUVBLGtDQUFpQkEsUUFBakIsMkhBQTJCO0FBQWxCRSxzQkFBa0I7O0FBQ3pCLHVCQUFLWixRQUFMLENBQWNlLElBQWQsQ0FBbUJILElBQW5CO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRURJLHdCQUFRQyxHQUFSLENBQVksS0FBS2pCLFFBQWpCO0FBQ0EscUJBQUtrQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBRWtCO0FBQ2xCRixjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBLFdBQUtuQixJQUFMLEdBQVksQ0FBRSxDQUFkO0FBQ0EsV0FBS1EsUUFBTCxDQUFjLEtBQUtQLFFBQW5CLEVBQTZCLEtBQUtELElBQWxDO0FBQ0Q7OztvQ0FDZTtBQUNka0IsY0FBUUMsR0FBUixDQUFZLFNBQVo7QUFDQSxXQUFLbkIsSUFBTCxHQUFZLEtBQUtBLElBQUwsR0FBWSxDQUF4QjtBQUNBLFdBQUtRLFFBQUwsQ0FBYyxLQUFLUCxRQUFuQixFQUE2QixLQUFLRCxJQUFsQztBQUNEOzs7O0VBbEVnQ3FCLGVBQUtyQixJOztrQkFBbkJaLEsiLCJmaWxlIjoiY2F0Z3JveS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgY2F0Z29yeUJhciBmcm9tICcuLi9jb21wb25lbnRzL2NhdG9yeUJhcic7XG4gIGltcG9ydCBnYW5rTGlzdEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9nYW5rTGlzdEl0ZW0nO1xuICBpbXBvcnQgZ2Fua0FwaSBmcm9tICcuLi9hcGkvZ2Fua0FQSSc7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfliIbnsbsnLFxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxuICAgICAgLy8g5LiN6YWN5oiQZGFya+eahOivneS4ieS4quWKoOi9veS4reeahOeCueS8mueci+S4jeWIsO+8jOWFtuWunuaYr+WHuuadpeS6hu+8jOWPquaYr+S4ieS4queCueaYr+eZveiJsueahO+8jOWmguaenOS9oOeahOmhtemdouiDjOaZr+S5n+aYr+eZveeahO+8jOmCo+Wwseeci+S4jeWHuuaViOaenOS6hlxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnXG4gICAgfVxuICAgJHJlcGVhdCA9IHtcImxpc3RJdGVtXCI6e1wiY29tXCI6XCJnYW5rTGlzdEl0ZW1cIixcInByb3BzXCI6XCJnaXRlbS5zeW5jXCJ9fTtcclxuJHByb3BzID0ge1wiZ2Fua0xpc3RJdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0SXRlbVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmdpdGVtLnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0SXRlbVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnRpbWVTdHIub25jZVwiOntcInZhbHVlXCI6XCJpdGVtLnB1Ymxpc2hlZEF0XCIsXCJmb3JcIjpcImxpc3RJdGVtXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGNhdGdvcnlCYXI6IGNhdGdvcnlCYXIsXG4gICAgICBnYW5rTGlzdEl0ZW06IGdhbmtMaXN0SXRlbSxcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgcGFnZTogMSxcbiAgICAgIGNhdG9yeUlkOiAnYWxsJyxcbiAgICAgIGxpc3RJdGVtOiBbXSxcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIFxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICdzZWxlY3QnOiAoY3VycmVudElkLCBldmVudCkgPT4ge1xuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICB0aGlzLmxvYWREYXRhKGN1cnJlbnRJZCwgdGhpcy5wYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICB0aGlzLmxvYWREYXRhKHRoaXMuY2F0b3J5SWQsIHRoaXMucGFnZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZERhdGEoY2F0b2dyeSwgcGFnZSkge1xuICAgICAgbGV0IGRhdGEgPSBhd2FpdCBnYW5rQXBpLmdldENhdG9yeU5ld3MoY2F0b2dyeSwgcGFnZSk7XG4gICAgICB2YXIgdGVtcExpc3QgPSBbXTtcbiAgICAgIGZvciAodmFyIGl0ZW0gb2YgZGF0YS5yZXN1bHRzKSB7XG4gICAgICAgICAgaXRlbS5wdWJsaXNoZWRBdCA9IGl0ZW0ucHVibGlzaGVkQXQuc3Vic3RyaW5nKDAsMTApO1xuICAgICAgICAgIHRlbXBMaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgICBpZiAocGFnZSA9PT0gMSkge1xuICAgICAgICB0aGlzLmxpc3RJdGVtID0gdGVtcExpc3Q7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGl0ZW0gb2YgdGVtcExpc3QpIHtcbiAgICAgICAgICB0aGlzLmxpc3RJdGVtLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RJdGVtKTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgY29uc29sZS5sb2coJ+S4i+aLieWIt+aWsOWIl+ihqCcpO1xuICAgICAgdGhpcy5wYWdlID0gKyAxO1xuICAgICAgdGhpcy5sb2FkRGF0YSh0aGlzLmNhdG9yeUlkLCB0aGlzLnBhZ2UpO1xuICAgIH1cbiAgICBvblJlYWNoQm90dG9tKCkge1xuICAgICAgY29uc29sZS5sb2coJ+S4iuaLieWKoOi9veS4i+S4gOmhtScpXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2UgKyAxO1xuICAgICAgdGhpcy5sb2FkRGF0YSh0aGlzLmNhdG9yeUlkLCB0aGlzLnBhZ2UpO1xuICAgIH1cbiAgfVxuIl19