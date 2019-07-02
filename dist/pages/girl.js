'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _girlItem = require('./../components/girlItem.js');

var _girlItem2 = _interopRequireDefault(_girlItem);

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
      navigationBarTitleText: '妹纸',
      enablePullDownRefresh: true,
      // 不配成dark的话三个加载中的点会看不到，其实是出来了，只是三个点是白色的，如果你的页面背景也是白的，那就看不出效果了
      backgroundTextStyle: 'dark'
    }, _this.$repeat = { "listItem": { "com": "girlItem", "props": "gitem.sync" } }, _this.$props = { "girlItem": { "xmlns:v-bind": { "value": "", "for": "listItem", "item": "item", "index": "index", "key": "index" }, "v-bind:gitem.sync": { "value": "item", "type": "item", "for": "listItem", "item": "item", "index": "index", "key": "index" }, "v-bind:index.sync": { "value": "index", "type": "index", "for": "listItem", "item": "item", "index": "index", "key": "index" }, "class": { "value": "girlItem-view", "for": "listItem", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      girlItem: _girlItem2.default
    }, _this.data = {
      listItem: [],
      urlList: [],
      page: 1
    }, _this.computed = {}, _this.methods = {}, _this.events = {
      'previewImage': function previewImage(index, event) {
        wx.previewImage({
          current: '5',
          urls: _this.urlList,
          success: function success(result) {},
          fail: function fail() {},
          complete: function complete() {}
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      this.loadData(1);
    }
  }, {
    key: 'loadData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page) {
        var data, tempList, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _gankAPI2.default.getCatoryNews('福利', page);

              case 2:
                data = _context.sent;
                tempList = data.results;

                if (!(page === 1)) {
                  _context.next = 8;
                  break;
                }

                this.listItem = tempList;
                _context.next = 27;
                break;

              case 8:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 11;

                for (_iterator = tempList[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;

                  this.listItem.push(item);
                }
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context['catch'](11);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 19:
                _context.prev = 19;
                _context.prev = 20;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 22:
                _context.prev = 22;

                if (!_didIteratorError) {
                  _context.next = 25;
                  break;
                }

                throw _iteratorError;

              case 25:
                return _context.finish(22);

              case 26:
                return _context.finish(19);

              case 27:
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 30;

                for (_iterator2 = this.listItem[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  item = _step2.value;

                  this.urlList.push(item.url);
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
        }, _callee, this, [[11, 15, 19, 27], [20,, 22, 26], [30, 34, 38, 46], [39,, 41, 45]]);
      }));

      function loadData(_x) {
        return _ref2.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      console.log('下拉刷新列表');
      this.page = 1;
      this.loadData(this.page);
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log('上拉加载下一页');
      this.page = this.page + 1;
      this.loadData(this.page);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/girl'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpcmwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImdpcmxJdGVtIiwiZGF0YSIsImxpc3RJdGVtIiwidXJsTGlzdCIsInBhZ2UiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJpbmRleCIsImV2ZW50Iiwid3giLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJmYWlsIiwiY29tcGxldGUiLCJsb2FkRGF0YSIsImdhbmtBcGkiLCJnZXRDYXRvcnlOZXdzIiwidGVtcExpc3QiLCJyZXN1bHRzIiwiaXRlbSIsInB1c2giLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5Iiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLDZCQUF1QixJQUZoQjtBQUdQO0FBQ0FDLDJCQUFxQjtBQUpkLEssUUFNVkMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLE9BQU0sVUFBUCxFQUFrQixTQUFRLFlBQTFCLEVBQVosRSxRQUNiQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLFVBQWxCLEVBQTZCLFFBQU8sTUFBcEMsRUFBMkMsU0FBUSxPQUFuRCxFQUEyRCxPQUFNLE9BQWpFLEVBQWhCLEVBQTBGLHFCQUFvQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sVUFBcEMsRUFBK0MsUUFBTyxNQUF0RCxFQUE2RCxTQUFRLE9BQXJFLEVBQTZFLE9BQU0sT0FBbkYsRUFBOUcsRUFBME0scUJBQW9CLEVBQUMsU0FBUSxPQUFULEVBQWlCLFFBQU8sT0FBeEIsRUFBZ0MsT0FBTSxVQUF0QyxFQUFpRCxRQUFPLE1BQXhELEVBQStELFNBQVEsT0FBdkUsRUFBK0UsT0FBTSxPQUFyRixFQUE5TixFQUE0VCxTQUFRLEVBQUMsU0FBUSxlQUFULEVBQXlCLE9BQU0sVUFBL0IsRUFBMEMsUUFBTyxNQUFqRCxFQUF3RCxTQUFRLE9BQWhFLEVBQXdFLE9BQU0sT0FBOUUsRUFBcFUsRUFBWixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxnQkFBVUE7QUFERixLLFFBSVZDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLGVBQVMsRUFGSjtBQUdMQyxZQUFNO0FBSEQsSyxRQU1QQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVM7QUFDUCxzQkFBZ0Isc0JBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNoQ0MsV0FBR0MsWUFBSCxDQUFnQjtBQUNkQyxtQkFBUyxHQURLO0FBRWRDLGdCQUFNLE1BQUtWLE9BRkc7QUFHZFcsbUJBQVMsaUJBQUNDLE1BQUQsRUFBVSxDQUVsQixDQUxhO0FBTWRDLGdCQUFNLGdCQUFJLENBQUUsQ0FORTtBQU9kQyxvQkFBVSxvQkFBSSxDQUFFO0FBUEYsU0FBaEI7QUFTRDtBQVhNLEs7Ozs7OzZCQWNBO0FBQ1AsV0FBS0MsUUFBTCxDQUFjLENBQWQ7QUFDRDs7OzsyRkFFY2QsSTs7Ozs7Ozs7dUJBQ0llLGtCQUFRQyxhQUFSLENBQXNCLElBQXRCLEVBQTRCaEIsSUFBNUIsQzs7O0FBQWJILG9CO0FBQ0FvQix3QixHQUFXcEIsS0FBS3FCLE87O3NCQUNoQmxCLFNBQVMsQzs7Ozs7QUFDWCxxQkFBS0YsUUFBTCxHQUFnQm1CLFFBQWhCOzs7Ozs7Ozs7O0FBRUEsaUNBQWlCQSxRQUFqQix1SEFBMkI7QUFBbEJFLHNCQUFrQjs7QUFDekIsdUJBQUtyQixRQUFMLENBQWNzQixJQUFkLENBQW1CRCxJQUFuQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsa0NBQWlCLEtBQUtyQixRQUF0QiwySEFBK0I7QUFBdEJxQixzQkFBc0I7O0FBQzdCLHVCQUFLcEIsT0FBTCxDQUFhcUIsSUFBYixDQUFrQkQsS0FBS0UsR0FBdkI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDREMsd0JBQVFDLEdBQVIsQ0FBWSxLQUFLekIsUUFBakI7QUFDQSxxQkFBSzBCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FHa0I7QUFDbEJGLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsV0FBS3ZCLElBQUwsR0FBWSxDQUFaO0FBQ0EsV0FBS2MsUUFBTCxDQUFjLEtBQUtkLElBQW5CO0FBQ0Q7OztvQ0FDZTtBQUNkc0IsY0FBUUMsR0FBUixDQUFZLFNBQVo7QUFDQSxXQUFLdkIsSUFBTCxHQUFZLEtBQUtBLElBQUwsR0FBWSxDQUF4QjtBQUNBLFdBQUtjLFFBQUwsQ0FBYyxLQUFLZCxJQUFuQjtBQUNEOzs7O0VBeEVnQ3lCLGVBQUt6QixJOztrQkFBbkJiLEsiLCJmaWxlIjoiZ2lybC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgZ2lybEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9naXJsSXRlbSc7XG4gIGltcG9ydCBnYW5rQXBpIGZyb20gJy4uL2FwaS9nYW5rQVBJJztcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wmuee6uCcsXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXG4gICAgICAvLyDkuI3phY3miJBkYXJr55qE6K+d5LiJ5Liq5Yqg6L295Lit55qE54K55Lya55yL5LiN5Yiw77yM5YW25a6e5piv5Ye65p2l5LqG77yM5Y+q5piv5LiJ5Liq54K55piv55m96Imy55qE77yM5aaC5p6c5L2g55qE6aG16Z2i6IOM5pmv5Lmf5piv55m955qE77yM6YKj5bCx55yL5LiN5Ye65pWI5p6c5LqGXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnZGFyaydcbiAgICB9XG4gICAkcmVwZWF0ID0ge1wibGlzdEl0ZW1cIjp7XCJjb21cIjpcImdpcmxJdGVtXCIsXCJwcm9wc1wiOlwiZ2l0ZW0uc3luY1wifX07XHJcbiRwcm9wcyA9IHtcImdpcmxJdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0SXRlbVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmdpdGVtLnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0SXRlbVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmluZGV4LnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaW5kZXhcIixcInR5cGVcIjpcImluZGV4XCIsXCJmb3JcIjpcImxpc3RJdGVtXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJjbGFzc1wiOntcInZhbHVlXCI6XCJnaXJsSXRlbS12aWV3XCIsXCJmb3JcIjpcImxpc3RJdGVtXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGdpcmxJdGVtOiBnaXJsSXRlbVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBsaXN0SXRlbTogW10sXG4gICAgICB1cmxMaXN0OiBbXSxcbiAgICAgIHBhZ2U6IDEsXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gIFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICAncHJldmlld0ltYWdlJzogKGluZGV4LCBldmVudCkgPT4ge1xuICAgICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgIGN1cnJlbnQ6ICc1JyxcbiAgICAgICAgICB1cmxzOiB0aGlzLnVybExpc3QsXG4gICAgICAgICAgc3VjY2VzczogKHJlc3VsdCk9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKCk9Pnt9LFxuICAgICAgICAgIGNvbXBsZXRlOiAoKT0+e31cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgdGhpcy5sb2FkRGF0YSgxKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkRGF0YShwYWdlKSB7XG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IGdhbmtBcGkuZ2V0Q2F0b3J5TmV3cygn56aP5YipJywgcGFnZSk7XG4gICAgICB2YXIgdGVtcExpc3QgPSBkYXRhLnJlc3VsdHM7XG4gICAgICBpZiAocGFnZSA9PT0gMSkge1xuICAgICAgICB0aGlzLmxpc3RJdGVtID0gdGVtcExpc3Q7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGl0ZW0gb2YgdGVtcExpc3QpIHtcbiAgICAgICAgICB0aGlzLmxpc3RJdGVtLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGl0ZW0gb2YgdGhpcy5saXN0SXRlbSl7XG4gICAgICAgIHRoaXMudXJsTGlzdC5wdXNoKGl0ZW0udXJsKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdEl0ZW0pO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG5cbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfkuIvmi4nliLfmlrDliJfooagnKTtcbiAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICB0aGlzLmxvYWREYXRhKHRoaXMucGFnZSk7XG4gICAgfVxuICAgIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgICBjb25zb2xlLmxvZygn5LiK5ouJ5Yqg6L295LiL5LiA6aG1JylcbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZSArIDE7XG4gICAgICB0aGlzLmxvYWREYXRhKHRoaXMucGFnZSk7XG4gICAgfVxuICB9XG4gIFxuIl19