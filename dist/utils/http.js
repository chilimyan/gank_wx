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

                                if (loading) {}
                                console.log('[http]request url =' + url);
                                _context.next = 5;
                                return _wepy2.default.request(param);

                            case 5:
                                res = _context.sent;

                                if (!this.isSuccess(res)) {
                                    _context.next = 10;
                                    break;
                                }

                                return _context.abrupt('return', res.data);

                            case 10:
                                throw this.requestException(res);

                            case 11:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuanMiXSwibmFtZXMiOlsiSHR0cCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJsb2FkaW5nIiwicGFyYW0iLCJjb25zb2xlIiwibG9nIiwid2VweSIsInJlcXVlc3QiLCJyZXMiLCJpc1N1Y2Nlc3MiLCJyZXF1ZXN0RXhjZXB0aW9uIiwid3hDb2RlIiwic3RhdHVzQ29kZSIsImVycm9yIiwid3hEYXRhIiwic2VydmVyRGF0YSIsInNlcnZlckNvZGUiLCJjb2RlIiwibWVzc2FnZSIsIndhcm4iLCJwcm9ncmVzc0h1ZCIsIm1vZGFsIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Z0dBQ0tDLE0sRUFBUUMsRyxFQUFLQyxJO29CQUFNQyxPLHVFQUFVLEk7Ozs7OztBQUN6Q0MscUMsR0FBUTtBQUNWSCx5Q0FBS0EsR0FESztBQUVWRCw0Q0FBUUEsTUFGRTtBQUdWRSwwQ0FBTUE7QUFISSxpQzs7QUFLZCxvQ0FBR0MsT0FBSCxFQUFZLENBRVg7QUFDREUsd0NBQVFDLEdBQVIseUJBQWtDTCxHQUFsQzs7dUNBQ2tCTSxlQUFLQyxPQUFMLENBQWFKLEtBQWIsQzs7O0FBQVpLLG1DOztxQ0FDRixLQUFLQyxTQUFMLENBQWVELEdBQWYsQzs7Ozs7aUVBQ09BLElBQUlQLEk7OztzQ0FFTCxLQUFLUyxnQkFBTCxDQUFzQkYsR0FBdEIsQzs7Ozs7Ozs7Ozs7Ozs7OztBQUdkOzs7Ozs7a0NBR2tCQSxHLEVBQUs7QUFDbkIsZ0JBQU1HLFNBQVNILElBQUlJLFVBQW5CO0FBQ0EsZ0JBQUlELFdBQVcsR0FBZixFQUFvQjtBQUNoQix1QkFBTyxLQUFQO0FBQ0g7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7Ozt5Q0FFd0JILEcsRUFBSztBQUMxQixnQkFBTUssUUFBUSxFQUFkO0FBQ0FBLGtCQUFNRCxVQUFOLEdBQW1CSixJQUFJSSxVQUF2QjtBQUNBLGdCQUFNRSxTQUFTTixJQUFJUCxJQUFuQjtBQUNBLGdCQUFNYyxhQUFhRCxPQUFPYixJQUExQjtBQUNBLGdCQUFJYyxVQUFKLEVBQWdCO0FBQ1pGLHNCQUFNRyxVQUFOLEdBQW1CRixPQUFPRyxJQUExQjtBQUNBSixzQkFBTUssT0FBTixHQUFnQkgsV0FBV0csT0FBM0I7QUFDQUwsc0JBQU1FLFVBQU4sR0FBbUJBLFVBQW5CO0FBQ0g7QUFDRCxnQkFBSUYsTUFBTUQsVUFBTixJQUFvQixHQUF4QixFQUE2QjtBQUN6QixvQkFBSUMsTUFBTUcsVUFBTixJQUFvQixPQUF4QixFQUFpQztBQUM3QlosNEJBQVFlLElBQVIsQ0FBYSxxQkFBYjtBQUNILGlCQUZELE1BRU07QUFDRkMsMENBQVlDLEtBQVosQ0FBa0IsZ0JBQWxCLEVBQW9DQyxJQUFwQyxDQUF5QyxZQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNILHFCQUpEO0FBS0g7QUFDSjtBQUNELG1CQUFPVCxLQUFQO0FBQ0g7Ozs0QkFFV2IsRyxFQUFLQyxJLEVBQXNCO0FBQUEsZ0JBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUNuQyxtQkFBTyxLQUFLSyxPQUFMLENBQWEsS0FBYixFQUFvQlAsR0FBcEIsRUFBeUJDLElBQXpCLEVBQStCQyxPQUEvQixDQUFQO0FBQ0g7Ozs2QkFFWUYsRyxFQUFLQyxJLEVBQXNCO0FBQUEsZ0JBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUNwQyxtQkFBTyxLQUFLSyxPQUFMLENBQWEsTUFBYixFQUFxQlAsR0FBckIsRUFBMEJDLElBQTFCLEVBQWdDQyxPQUFoQyxDQUFQO0FBQ0g7Ozs4QkFFYUYsRyxFQUFLQyxJLEVBQXNCO0FBQUEsZ0JBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUNyQyxtQkFBTyxLQUFLSyxPQUFMLENBQWEsT0FBYixFQUFzQlAsR0FBdEIsRUFBMkJDLElBQTNCLEVBQWlDQyxPQUFqQyxDQUFQO0FBQ0g7OztnQ0FFY0YsRyxFQUFLQyxJLEVBQXNCO0FBQUEsZ0JBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUN0QyxtQkFBTyxLQUFLSyxPQUFMLENBQWEsUUFBYixFQUF1QlAsR0FBdkIsRUFBNEJDLElBQTVCLEVBQWtDQyxPQUFsQyxDQUFQO0FBQ0g7Ozs0QkFFV0YsRyxFQUFLQyxJLEVBQXNCO0FBQUEsZ0JBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUNuQyxtQkFBTyxLQUFLSyxPQUFMLENBQWEsS0FBYixFQUFvQlAsR0FBcEIsRUFBeUJDLElBQXpCLEVBQStCQyxPQUEvQixDQUFQO0FBQ0g7Ozs7OztrQkF2RWdCSixJIiwiZmlsZSI6Imh0dHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBwcm9ncmVzc0h1ZCBmcm9tICcuL3Byb2dyZXNzSHVkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwIHtcbiAgICBzdGF0aWMgYXN5bmMgcmVxdWVzdCAobWV0aG9kLCB1cmwsIGRhdGEsIGxvYWRpbmcgPSB0cnVlICkge1xuICAgICAgICBjb25zdCBwYXJhbSA9IHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH1cbiAgICAgICAgaWYobG9hZGluZykge1xuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYFtodHRwXXJlcXVlc3QgdXJsID0ke3VybH1gKTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHBhcmFtKTtcbiAgICAgICAgaWYgKHRoaXMuaXNTdWNjZXNzKHJlcykpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5yZXF1ZXN0RXhjZXB0aW9uKHJlcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQERlc2NyaXB0aW9uOiDliKTmlq3or7fmsYLmmK/lkKbmiJDlip9cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNTdWNjZXNzIChyZXMpIHtcbiAgICAgICAgY29uc3Qgd3hDb2RlID0gcmVzLnN0YXR1c0NvZGU7XG4gICAgICAgIGlmICh3eENvZGUgIT09IDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyByZXF1ZXN0RXhjZXB0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB7fTtcbiAgICAgICAgZXJyb3Iuc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlO1xuICAgICAgICBjb25zdCB3eERhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgY29uc3Qgc2VydmVyRGF0YSA9IHd4RGF0YS5kYXRhO1xuICAgICAgICBpZiAoc2VydmVyRGF0YSkge1xuICAgICAgICAgICAgZXJyb3Iuc2VydmVyQ29kZSA9IHd4RGF0YS5jb2RlO1xuICAgICAgICAgICAgZXJyb3IubWVzc2FnZSA9IHNlcnZlckRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgIGVycm9yLnNlcnZlckRhdGEgPSBzZXJ2ZXJEYXRhO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvci5zdGF0dXNDb2RlID09IDQwMykge1xuICAgICAgICAgICAgaWYgKGVycm9yLnNlcnZlckNvZGUgPT0gJzgwMDAzJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign5b6u5L+hdGhyaWRfc2Vzc2lvbuiupOivgeWksei0pScpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzSHVkLm1vZGFsKCflvq7kv6HnmbvlvZXnirbmgIHlpLHmlYjvvIzor7fph43mlrDorr/pl64nKS50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZXB5Lnd4LnJlTGF1bmNoKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0ICh1cmwsIGRhdGEsIGxvYWRpbmcgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0dFVCcsIHVybCwgZGF0YSwgbG9hZGluZyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHBvc3QgKHVybCwgZGF0YSwgbG9hZGluZyA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnUE9TVCcsIHVybCwgZGF0YSwgbG9hZGluZyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHBhdGNoICh1cmwsIGRhdGEsIGxvYWRpbmcgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BBVENIJywgdXJsLCBkYXRhLCBsb2FkaW5nKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlICh1cmwsIGRhdGEsIGxvYWRpbmcgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0RFTEVURScsIHVybCwgZGF0YSwgbG9hZGluZyk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBwdXQgKHVybCwgZGF0YSwgbG9hZGluZyA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnUFVUJywgdXJsLCBkYXRhLCBsb2FkaW5nKTtcbiAgICB9XG59Il19