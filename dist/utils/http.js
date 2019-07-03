'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _progressHud = require('./progressHud.js');

var _progressHud2 = _interopRequireDefault(_progressHud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Http = function () {
    function Http() {
        _classCallCheck(this, Http);
    }

    _createClass(Http, null, [{
        key: 'request',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method, url, data) {
                var loading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
                var param, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                param = {
                                    url: url,
                                    method: method,
                                    data: data
                                };

                                if (loading) {
                                    _progressHud2.default.loading();
                                }
                                console.log('[http]request url =' + url);
                                _context.next = 5;
                                return _wepy2.default.request(param);

                            case 5:
                                res = _context.sent;

                                if (loading) {
                                    _progressHud2.default.loaded();
                                }

                                if (!this.isSuccess(res)) {
                                    _context.next = 11;
                                    break;
                                }

                                return _context.abrupt('return', res.data);

                            case 11:
                                throw this.requestException(res);

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function request(_x2, _x3, _x4) {
                return _ref.apply(this, arguments);
            }

            return request;
        }()
        /**
         * @Description: 判断请求是否成功
         */

    }, {
        key: 'isSuccess',
        value: function isSuccess(res) {
            var wxCode = res.statusCode;
            if (wxCode !== 200) {
                return false;
            }
            return true;
        }
    }, {
        key: 'requestException',
        value: function requestException(res) {
            var error = {};
            error.statusCode = res.statusCode;
            var wxData = res.data;
            var serverData = wxData.data;
            if (serverData) {
                error.serverCode = wxData.code;
                error.message = serverData.message;
                error.serverData = serverData;
            }
            if (error.statusCode == 403) {
                if (error.serverCode == '80003') {
                    console.warn('微信thrid_session认证失败');
                } else {
                    _progressHud2.default.modal('微信登录状态失效，请重新访问').then(function () {
                        // wepy.wx.reLaunch({
                        //     url: '',
                        // });
                    });
                }
            }
            return error;
        }
    }, {
        key: 'get',
        value: function get(url, data) {
            var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            return this.request('GET', url, data, loading);
        }
    }, {
        key: 'post',
        value: function post(url, data) {
            var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            return this.request('POST', url, data, loading);
        }
    }, {
        key: 'patch',
        value: function patch(url, data) {
            var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            return this.request('PATCH', url, data, loading);
        }
    }, {
        key: 'delete',
        value: function _delete(url, data) {
            var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            return this.request('DELETE', url, data, loading);
        }
    }, {
        key: 'put',
        value: function put(url, data) {
            var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            return this.request('PUT', url, data, loading);
        }
    }]);

    return Http;
}();

exports.default = Http;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuanMiXSwibmFtZXMiOlsiSHR0cCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJsb2FkaW5nIiwicGFyYW0iLCJwcm9ncmVzc0h1ZCIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwicmVxdWVzdCIsInJlcyIsImxvYWRlZCIsImlzU3VjY2VzcyIsInJlcXVlc3RFeGNlcHRpb24iLCJ3eENvZGUiLCJzdGF0dXNDb2RlIiwiZXJyb3IiLCJ3eERhdGEiLCJzZXJ2ZXJEYXRhIiwic2VydmVyQ29kZSIsImNvZGUiLCJtZXNzYWdlIiwid2FybiIsIm1vZGFsIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Z0dBQ0tDLE0sRUFBUUMsRyxFQUFLQyxJO29CQUFNQyxPLHVFQUFVLEk7Ozs7OztBQUN6Q0MscUMsR0FBUTtBQUNWSCx5Q0FBS0EsR0FESztBQUVWRCw0Q0FBUUEsTUFGRTtBQUdWRSwwQ0FBTUE7QUFISSxpQzs7QUFLZCxvQ0FBR0MsT0FBSCxFQUFZO0FBQ1JFLDBEQUFZRixPQUFaO0FBQ0g7QUFDREcsd0NBQVFDLEdBQVIseUJBQWtDTixHQUFsQzs7dUNBQ2tCTyxlQUFLQyxPQUFMLENBQWFMLEtBQWIsQzs7O0FBQVpNLG1DOztBQUNOLG9DQUFHUCxPQUFILEVBQVk7QUFDUkUsMERBQVlNLE1BQVo7QUFDSDs7cUNBQ0csS0FBS0MsU0FBTCxDQUFlRixHQUFmLEM7Ozs7O2lFQUNPQSxJQUFJUixJOzs7c0NBRUwsS0FBS1csZ0JBQUwsQ0FBc0JILEdBQXRCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHZDs7Ozs7O2tDQUdrQkEsRyxFQUFLO0FBQ25CLGdCQUFNSSxTQUFTSixJQUFJSyxVQUFuQjtBQUNBLGdCQUFJRCxXQUFXLEdBQWYsRUFBb0I7QUFDaEIsdUJBQU8sS0FBUDtBQUNIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOzs7eUNBRXdCSixHLEVBQUs7QUFDMUIsZ0JBQU1NLFFBQVEsRUFBZDtBQUNBQSxrQkFBTUQsVUFBTixHQUFtQkwsSUFBSUssVUFBdkI7QUFDQSxnQkFBTUUsU0FBU1AsSUFBSVIsSUFBbkI7QUFDQSxnQkFBTWdCLGFBQWFELE9BQU9mLElBQTFCO0FBQ0EsZ0JBQUlnQixVQUFKLEVBQWdCO0FBQ1pGLHNCQUFNRyxVQUFOLEdBQW1CRixPQUFPRyxJQUExQjtBQUNBSixzQkFBTUssT0FBTixHQUFnQkgsV0FBV0csT0FBM0I7QUFDQUwsc0JBQU1FLFVBQU4sR0FBbUJBLFVBQW5CO0FBQ0g7QUFDRCxnQkFBSUYsTUFBTUQsVUFBTixJQUFvQixHQUF4QixFQUE2QjtBQUN6QixvQkFBSUMsTUFBTUcsVUFBTixJQUFvQixPQUF4QixFQUFpQztBQUM3QmIsNEJBQVFnQixJQUFSLENBQWEscUJBQWI7QUFDSCxpQkFGRCxNQUVNO0FBQ0ZqQiwwQ0FBWWtCLEtBQVosQ0FBa0IsZ0JBQWxCLEVBQW9DQyxJQUFwQyxDQUF5QyxZQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNILHFCQUpEO0FBS0g7QUFDSjtBQUNELG1CQUFPUixLQUFQO0FBQ0g7Ozs0QkFFV2YsRyxFQUFLQyxJLEVBQXNCO0FBQUEsZ0JBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUNuQyxtQkFBTyxLQUFLTSxPQUFMLENBQWEsS0FBYixFQUFvQlIsR0FBcEIsRUFBeUJDLElBQXpCLEVBQStCQyxPQUEvQixDQUFQO0FBQ0g7Ozs2QkFFWUYsRyxFQUFLQyxJLEVBQXNCO0FBQUEsZ0JBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUNwQyxtQkFBTyxLQUFLTSxPQUFMLENBQWEsTUFBYixFQUFxQlIsR0FBckIsRUFBMEJDLElBQTFCLEVBQWdDQyxPQUFoQyxDQUFQO0FBQ0g7Ozs4QkFFYUYsRyxFQUFLQyxJLEVBQXNCO0FBQUEsZ0JBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUNyQyxtQkFBTyxLQUFLTSxPQUFMLENBQWEsT0FBYixFQUFzQlIsR0FBdEIsRUFBMkJDLElBQTNCLEVBQWlDQyxPQUFqQyxDQUFQO0FBQ0g7OztnQ0FFY0YsRyxFQUFLQyxJLEVBQXNCO0FBQUEsZ0JBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUN0QyxtQkFBTyxLQUFLTSxPQUFMLENBQWEsUUFBYixFQUF1QlIsR0FBdkIsRUFBNEJDLElBQTVCLEVBQWtDQyxPQUFsQyxDQUFQO0FBQ0g7Ozs0QkFFV0YsRyxFQUFLQyxJLEVBQXNCO0FBQUEsZ0JBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUNuQyxtQkFBTyxLQUFLTSxPQUFMLENBQWEsS0FBYixFQUFvQlIsR0FBcEIsRUFBeUJDLElBQXpCLEVBQStCQyxPQUEvQixDQUFQO0FBQ0g7Ozs7OztrQkExRWdCSixJIiwiZmlsZSI6Imh0dHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBwcm9ncmVzc0h1ZCBmcm9tICcuL3Byb2dyZXNzSHVkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwIHtcbiAgICBzdGF0aWMgYXN5bmMgcmVxdWVzdCAobWV0aG9kLCB1cmwsIGRhdGEsIGxvYWRpbmcgPSB0cnVlICkge1xuICAgICAgICBjb25zdCBwYXJhbSA9IHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH1cbiAgICAgICAgaWYobG9hZGluZykge1xuICAgICAgICAgICAgcHJvZ3Jlc3NIdWQubG9hZGluZygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBbaHR0cF1yZXF1ZXN0IHVybCA9JHt1cmx9YCk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdChwYXJhbSk7XG4gICAgICAgIGlmKGxvYWRpbmcpIHtcbiAgICAgICAgICAgIHByb2dyZXNzSHVkLmxvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU3VjY2VzcyhyZXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMucmVxdWVzdEV4Y2VwdGlvbihyZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBEZXNjcmlwdGlvbjog5Yik5pat6K+35rGC5piv5ZCm5oiQ5YqfXG4gICAgICovXG4gICAgc3RhdGljIGlzU3VjY2VzcyAocmVzKSB7XG4gICAgICAgIGNvbnN0IHd4Q29kZSA9IHJlcy5zdGF0dXNDb2RlO1xuICAgICAgICBpZiAod3hDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVxdWVzdEV4Y2VwdGlvbiAocmVzKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0ge307XG4gICAgICAgIGVycm9yLnN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZTtcbiAgICAgICAgY29uc3Qgd3hEYXRhID0gcmVzLmRhdGE7XG4gICAgICAgIGNvbnN0IHNlcnZlckRhdGEgPSB3eERhdGEuZGF0YTtcbiAgICAgICAgaWYgKHNlcnZlckRhdGEpIHtcbiAgICAgICAgICAgIGVycm9yLnNlcnZlckNvZGUgPSB3eERhdGEuY29kZTtcbiAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgPSBzZXJ2ZXJEYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgICBlcnJvci5zZXJ2ZXJEYXRhID0gc2VydmVyRGF0YTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzQ29kZSA9PSA0MDMpIHtcbiAgICAgICAgICAgIGlmIChlcnJvci5zZXJ2ZXJDb2RlID09ICc4MDAwMycpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ+W+ruS/oXRocmlkX3Nlc3Npb27orqTor4HlpLHotKUnKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0h1ZC5tb2RhbCgn5b6u5L+h55m75b2V54q25oCB5aSx5pWI77yM6K+36YeN5paw6K6/6ZeuJykudGhlbigoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2VweS53eC5yZUxhdW5jaCh7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCAodXJsLCBkYXRhLCBsb2FkaW5nID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdHRVQnLCB1cmwsIGRhdGEsIGxvYWRpbmcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBwb3N0ICh1cmwsIGRhdGEsIGxvYWRpbmcgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BPU1QnLCB1cmwsIGRhdGEsIGxvYWRpbmcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBwYXRjaCAodXJsLCBkYXRhLCBsb2FkaW5nID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdQQVRDSCcsIHVybCwgZGF0YSwgbG9hZGluZyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZSAodXJsLCBkYXRhLCBsb2FkaW5nID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdERUxFVEUnLCB1cmwsIGRhdGEsIGxvYWRpbmcpO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgcHV0ICh1cmwsIGRhdGEsIGxvYWRpbmcgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BVVCcsIHVybCwgZGF0YSwgbG9hZGluZyk7XG4gICAgfVxufSJdfQ==