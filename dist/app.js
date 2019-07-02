'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/newDaily', 'pages/catgroy', 'pages/girl', 'pages/like', 'pages/webview'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#29ACBE',
        navigationBarTitleText: '今日干货',
        navigationBarTextStyle: 'white'
      },
      tabBar: {
        color: '#A9A9A9',
        selectedColor: '#29ACBE',
        backgroundColor: '#FFFFFF',
        list: [{ pagePath: 'pages/index',
          text: '最新',
          iconPath: '/images/yingyongshouye.png',
          selectedIconPath: '/images/yingyongshouye_selected.png'
        }, { pagePath: 'pages/catgroy',
          text: '分类',
          iconPath: '/images/yingyongguanli.png',
          selectedIconPath: '/images/yingyongguanli_selected.png'
        }, { pagePath: 'pages/girl',
          text: '妹纸',
          iconPath: '/images/sucaiku.png',
          selectedIconPath: '/images/sucaiku_selected.png'
        }, { pagePath: 'pages/like',
          text: '收藏',
          iconPath: '/images/fensiguanli.png',
          selectedIconPath: '/images/fensiguanli_selected.png'
        }]
      }
    };
    _this.globalData = {
      userInfo: null,
      baseUrl: 'http://gank.io'
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwiYmFzZVVybCIsInVzZSIsInRlc3RBc3luYyIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2IiLCJ0aGF0Iiwid2VweSIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBb0RFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUEvQ2ZBLE1BK0NlLEdBL0NOO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsZ0JBRkssRUFHTCxlQUhLLEVBSUwsWUFKSyxFQUtMLFlBTEssRUFNTCxlQU5LLENBREE7QUFTUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLE1BSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQVREO0FBZVBDLGNBQVE7QUFDTkMsZUFBTyxTQUREO0FBRU5DLHVCQUFlLFNBRlQ7QUFHTkMseUJBQWlCLFNBSFg7QUFJTkMsY0FBTSxDQUFDLEVBQUNDLFVBQVUsYUFBWDtBQUNDQyxnQkFBTSxJQURQO0FBRUNDLG9CQUFVLDRCQUZYO0FBR0NDLDRCQUFrQjtBQUhuQixTQUFELEVBS0UsRUFBQ0gsVUFBVSxlQUFYO0FBQ0FDLGdCQUFNLElBRE47QUFFQUMsb0JBQVUsNEJBRlY7QUFHQUMsNEJBQWtCO0FBSGxCLFNBTEYsRUFVRSxFQUFDSCxVQUFVLFlBQVg7QUFDQUMsZ0JBQU0sSUFETjtBQUVBQyxvQkFBVSxxQkFGVjtBQUdBQyw0QkFBa0I7QUFIbEIsU0FWRixFQWVFLEVBQUNILFVBQVUsWUFBWDtBQUNBQyxnQkFBTSxJQUROO0FBRUFDLG9CQUFVLHlCQUZWO0FBR0FDLDRCQUFrQjtBQUhsQixTQWZGO0FBSkE7QUFmRCxLQStDTTtBQUFBLFVBTGZDLFVBS2UsR0FMRjtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGVBQVM7QUFGRSxLQUtFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFIYTtBQUlkOzs7OytCQUVVO0FBQ1QsV0FBS0MsU0FBTDtBQUNEOzs7MEJBRU1DLEMsRUFBRztBQUNSLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ05DLHdCQUFRQyxHQUFSLENBQVlGLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHVUcsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLZixVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRGUscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pKLGVBQUtmLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCa0IsSUFBSWxCLFFBQS9CO0FBQ0FhLGdCQUFNQSxHQUFHSyxJQUFJbEIsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBbkYwQmUsZUFBS0ksRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG5cbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL25ld0RhaWx5JyxcbiAgICAgICdwYWdlcy9jYXRncm95JyxcbiAgICAgICdwYWdlcy9naXJsJyxcbiAgICAgICdwYWdlcy9saWtlJyxcbiAgICAgICdwYWdlcy93ZWJ2aWV3JyxcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMjlBQ0JFJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfku4rml6XlubLotKcnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJ1xuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjogJyNBOUE5QTknLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMyOUFDQkUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicsXG4gICAgICBsaXN0OiBbe3BhZ2VQYXRoOiAncGFnZXMvaW5kZXgnLFxuICAgICAgICAgICAgICB0ZXh0OiAn5pyA5pawJyxcbiAgICAgICAgICAgICAgaWNvblBhdGg6ICcvaW1hZ2VzL3lpbmd5b25nc2hvdXllLnBuZycsXG4gICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcvaW1hZ2VzL3lpbmd5b25nc2hvdXllX3NlbGVjdGVkLnBuZydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge3BhZ2VQYXRoOiAncGFnZXMvY2F0Z3JveScsXG4gICAgICAgICAgICAgIHRleHQ6ICfliIbnsbsnLFxuICAgICAgICAgICAgICBpY29uUGF0aDogJy9pbWFnZXMveWluZ3lvbmdndWFubGkucG5nJyxcbiAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy9pbWFnZXMveWluZ3lvbmdndWFubGlfc2VsZWN0ZWQucG5nJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7cGFnZVBhdGg6ICdwYWdlcy9naXJsJyxcbiAgICAgICAgICAgICAgdGV4dDogJ+Wmuee6uCcsXG4gICAgICAgICAgICAgIGljb25QYXRoOiAnL2ltYWdlcy9zdWNhaWt1LnBuZycsXG4gICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcvaW1hZ2VzL3N1Y2Fpa3Vfc2VsZWN0ZWQucG5nJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7cGFnZVBhdGg6ICdwYWdlcy9saWtlJyxcbiAgICAgICAgICAgICAgdGV4dDogJ+aUtuiXjycsXG4gICAgICAgICAgICAgIGljb25QYXRoOiAnL2ltYWdlcy9mZW5zaWd1YW5saS5wbmcnLFxuICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnL2ltYWdlcy9mZW5zaWd1YW5saV9zZWxlY3RlZC5wbmcnXG4gICAgICAgICAgICAgIH1dLFxuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGwsXG4gICAgYmFzZVVybDogJ2h0dHA6Ly9nYW5rLmlvJyxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpO1xuICB9XG5cbiAgb25MYXVuY2goKSB7XG4gICAgdGhpcy50ZXN0QXN5bmMoKVxuICB9XG5cbiAgc2xlZXAgKHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxuICAgICAgfSwgcyAqIDEwMDApXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIHRlc3RBc3luYyAoKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9XG5cbiAgZ2V0VXNlckluZm8oY2IpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cbiAgICB9XG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=