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
    }, _this.$repeat = { "listItem": { "com": "girlItem", "props": "gitem.sync" } }, _this.$props = { "girlItem": { "xmlns:v-bind": { "value": "", "for": "listItem", "item": "item", "index": "index", "key": "index" }, "v-bind:gitem.sync": { "value": "item", "type": "item", "for": "listItem", "item": "item", "index": "index", "key": "index" }, "v-bind:index.sync": { "value": "index", "type": "index", "for": "listItem", "item": "item", "index": "index", "key": "index" }, "class": { "value": "girlItem-view", "for": "listItem", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "listItem", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "girlItem": { "v-on:previewImage": "previewImage" } }, _this.components = {
      girlItem: _girlItem2.default
    }, _this.data = {
      listItem: [],
      urlList: [],
      page: 1
    }, _this.computed = {}, _this.methods = {
      previewImage: function previewImage(index) {
        wx.previewImage({
          current: this.urlList[index],
          urls: this.urlList,
          success: function success(result) {},
          fail: function fail() {},
          complete: function complete() {}
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
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

                for (_iterator2 = tempList[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpcmwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImdpcmxJdGVtIiwiZGF0YSIsImxpc3RJdGVtIiwidXJsTGlzdCIsInBhZ2UiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJwcmV2aWV3SW1hZ2UiLCJpbmRleCIsInd4IiwiY3VycmVudCIsInVybHMiLCJzdWNjZXNzIiwicmVzdWx0IiwiZmFpbCIsImNvbXBsZXRlIiwiZXZlbnRzIiwibG9hZERhdGEiLCJnYW5rQXBpIiwiZ2V0Q2F0b3J5TmV3cyIsInRlbXBMaXN0IiwicmVzdWx0cyIsIml0ZW0iLCJwdXNoIiwidXJsIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyw2QkFBdUIsSUFGaEI7QUFHUDtBQUNBQywyQkFBcUI7QUFKZCxLLFFBTVZDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxPQUFNLFVBQVAsRUFBa0IsU0FBUSxZQUExQixFQUFaLEUsUUFDYkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxVQUFsQixFQUE2QixRQUFPLE1BQXBDLEVBQTJDLFNBQVEsT0FBbkQsRUFBMkQsT0FBTSxPQUFqRSxFQUFoQixFQUEwRixxQkFBb0IsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFVBQXBDLEVBQStDLFFBQU8sTUFBdEQsRUFBNkQsU0FBUSxPQUFyRSxFQUE2RSxPQUFNLE9BQW5GLEVBQTlHLEVBQTBNLHFCQUFvQixFQUFDLFNBQVEsT0FBVCxFQUFpQixRQUFPLE9BQXhCLEVBQWdDLE9BQU0sVUFBdEMsRUFBaUQsUUFBTyxNQUF4RCxFQUErRCxTQUFRLE9BQXZFLEVBQStFLE9BQU0sT0FBckYsRUFBOU4sRUFBNFQsU0FBUSxFQUFDLFNBQVEsZUFBVCxFQUF5QixPQUFNLFVBQS9CLEVBQTBDLFFBQU8sTUFBakQsRUFBd0QsU0FBUSxPQUFoRSxFQUF3RSxPQUFNLE9BQTlFLEVBQXBVLEVBQTJaLGNBQWEsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLFVBQWxCLEVBQTZCLFFBQU8sTUFBcEMsRUFBMkMsU0FBUSxPQUFuRCxFQUEyRCxPQUFNLE9BQWpFLEVBQXhhLEVBQVosRSxRQUNUQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMscUJBQW9CLGNBQXJCLEVBQVosRSxRQUNUQyxVLEdBQWE7QUFDUkMsZ0JBQVVBO0FBREYsSyxRQUlWQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxlQUFTLEVBRko7QUFHTEMsWUFBTTtBQUhELEssUUFNUEMsUSxHQUFXLEUsUUFJWEMsTyxHQUFVO0FBQ1JDLGtCQURRLHdCQUNLQyxLQURMLEVBQ1k7QUFDbEJDLFdBQUdGLFlBQUgsQ0FBZ0I7QUFDZEcsbUJBQVMsS0FBS1AsT0FBTCxDQUFhSyxLQUFiLENBREs7QUFFZEcsZ0JBQU0sS0FBS1IsT0FGRztBQUdkUyxtQkFBUyxpQkFBQ0MsTUFBRCxFQUFVLENBRWxCLENBTGE7QUFNZEMsZ0JBQU0sZ0JBQUksQ0FBRSxDQU5FO0FBT2RDLG9CQUFVLG9CQUFJLENBQUU7QUFQRixTQUFoQjtBQVNEO0FBWE8sSyxRQWNWQyxNLEdBQVMsRTs7Ozs7NkJBSUE7QUFDUCxXQUFLQyxRQUFMLENBQWMsQ0FBZDtBQUNEOzs7OzJGQUVjYixJOzs7Ozs7Ozt1QkFDSWMsa0JBQVFDLGFBQVIsQ0FBc0IsSUFBdEIsRUFBNEJmLElBQTVCLEM7OztBQUFiSCxvQjtBQUNBbUIsd0IsR0FBV25CLEtBQUtvQixPOztzQkFDaEJqQixTQUFTLEM7Ozs7O0FBQ1gscUJBQUtGLFFBQUwsR0FBZ0JrQixRQUFoQjs7Ozs7Ozs7OztBQUVBLGlDQUFpQkEsUUFBakIsdUhBQTJCO0FBQWxCRSxzQkFBa0I7O0FBQ3pCLHVCQUFLcEIsUUFBTCxDQUFjcUIsSUFBZCxDQUFtQkQsSUFBbkI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILGtDQUFpQkYsUUFBakIsMkhBQTBCO0FBQWpCRSxzQkFBaUI7O0FBQ3hCLHVCQUFLbkIsT0FBTCxDQUFhb0IsSUFBYixDQUFrQkQsS0FBS0UsR0FBdkI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDREMsd0JBQVFDLEdBQVIsQ0FBWSxLQUFLeEIsUUFBakI7QUFDQSxxQkFBS3lCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FHa0I7QUFDbEJGLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsV0FBS3RCLElBQUwsR0FBWSxDQUFaO0FBQ0EsV0FBS2EsUUFBTCxDQUFjLEtBQUtiLElBQW5CO0FBQ0Q7OztvQ0FDZTtBQUNkcUIsY0FBUUMsR0FBUixDQUFZLFNBQVo7QUFDQSxXQUFLdEIsSUFBTCxHQUFZLEtBQUtBLElBQUwsR0FBWSxDQUF4QjtBQUNBLFdBQUthLFFBQUwsQ0FBYyxLQUFLYixJQUFuQjtBQUNEOzs7O0VBeEVnQ3dCLGVBQUt4QixJOztrQkFBbkJiLEsiLCJmaWxlIjoiZ2lybC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgZ2lybEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9naXJsSXRlbSc7XG4gIGltcG9ydCBnYW5rQXBpIGZyb20gJy4uL2FwaS9nYW5rQVBJJztcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wmuee6uCcsXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXG4gICAgICAvLyDkuI3phY3miJBkYXJr55qE6K+d5LiJ5Liq5Yqg6L295Lit55qE54K55Lya55yL5LiN5Yiw77yM5YW25a6e5piv5Ye65p2l5LqG77yM5Y+q5piv5LiJ5Liq54K55piv55m96Imy55qE77yM5aaC5p6c5L2g55qE6aG16Z2i6IOM5pmv5Lmf5piv55m955qE77yM6YKj5bCx55yL5LiN5Ye65pWI5p6c5LqGXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnZGFyaydcbiAgICB9XG4gICAkcmVwZWF0ID0ge1wibGlzdEl0ZW1cIjp7XCJjb21cIjpcImdpcmxJdGVtXCIsXCJwcm9wc1wiOlwiZ2l0ZW0uc3luY1wifX07XHJcbiRwcm9wcyA9IHtcImdpcmxJdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0SXRlbVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmdpdGVtLnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0SXRlbVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmluZGV4LnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaW5kZXhcIixcInR5cGVcIjpcImluZGV4XCIsXCJmb3JcIjpcImxpc3RJdGVtXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJjbGFzc1wiOntcInZhbHVlXCI6XCJnaXJsSXRlbS12aWV3XCIsXCJmb3JcIjpcImxpc3RJdGVtXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ4bWxuczp2LW9uXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0SXRlbVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7XCJnaXJsSXRlbVwiOntcInYtb246cHJldmlld0ltYWdlXCI6XCJwcmV2aWV3SW1hZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGdpcmxJdGVtOiBnaXJsSXRlbVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBsaXN0SXRlbTogW10sXG4gICAgICB1cmxMaXN0OiBbXSxcbiAgICAgIHBhZ2U6IDEsXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gIFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBwcmV2aWV3SW1hZ2UoaW5kZXgpIHtcbiAgICAgICAgd3gucHJldmlld0ltYWdlKHtcbiAgICAgICAgICBjdXJyZW50OiB0aGlzLnVybExpc3RbaW5kZXhdLFxuICAgICAgICAgIHVybHM6IHRoaXMudXJsTGlzdCxcbiAgICAgICAgICBzdWNjZXNzOiAocmVzdWx0KT0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiAoKT0+e30sXG4gICAgICAgICAgY29tcGxldGU6ICgpPT57fVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gIFxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMubG9hZERhdGEoMSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZERhdGEocGFnZSkge1xuICAgICAgbGV0IGRhdGEgPSBhd2FpdCBnYW5rQXBpLmdldENhdG9yeU5ld3MoJ+emj+WIqScsIHBhZ2UpO1xuICAgICAgdmFyIHRlbXBMaXN0ID0gZGF0YS5yZXN1bHRzO1xuICAgICAgaWYgKHBhZ2UgPT09IDEpIHtcbiAgICAgICAgdGhpcy5saXN0SXRlbSA9IHRlbXBMaXN0O1xuICAgICAgfWVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpdGVtIG9mIHRlbXBMaXN0KSB7XG4gICAgICAgICAgdGhpcy5saXN0SXRlbS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpdGVtIG9mIHRlbXBMaXN0KXtcbiAgICAgICAgdGhpcy51cmxMaXN0LnB1c2goaXRlbS51cmwpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2codGhpcy5saXN0SXRlbSk7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cblxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgY29uc29sZS5sb2coJ+S4i+aLieWIt+aWsOWIl+ihqCcpO1xuICAgICAgdGhpcy5wYWdlID0gMTtcbiAgICAgIHRoaXMubG9hZERhdGEodGhpcy5wYWdlKTtcbiAgICB9XG4gICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfkuIrmi4nliqDovb3kuIvkuIDpobUnKVxuICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlICsgMTtcbiAgICAgIHRoaXMubG9hZERhdGEodGhpcy5wYWdlKTtcbiAgICB9XG4gIH1cbiAgXG4iXX0=