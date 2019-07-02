'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _http = require('./../utils/http.js');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var baseAPI = function baseAPI() {
    _classCallCheck(this, baseAPI);
};

baseAPI.baseUrl = _wepy2.default.$instance.globalData.baseUrl;
baseAPI.get = _http2.default.get.bind(_http2.default);
baseAPI.post = _http2.default.get.bind(_http2.default);
exports.default = baseAPI;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2VBUEkuanMiXSwibmFtZXMiOlsiYmFzZUFQSSIsImJhc2VVcmwiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImdldCIsImh0dHAiLCJiaW5kIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxPOzs7O0FBQUFBLE8sQ0FDVkMsTyxHQUFVQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILE87QUFEMUJELE8sQ0FFVkssRyxHQUFNQyxlQUFLRCxHQUFMLENBQVNFLElBQVQsQ0FBY0QsY0FBZCxDO0FBRklOLE8sQ0FHVlEsSSxHQUFPRixlQUFLRCxHQUFMLENBQVNFLElBQVQsQ0FBY0QsY0FBZCxDO2tCQUhHTixPIiwiZmlsZSI6ImJhc2VBUEkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBodHRwIGZyb20gJy4uL3V0aWxzL2h0dHAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJhc2VBUEkge1xuICAgIHN0YXRpYyBiYXNlVXJsID0gd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5iYXNlVXJsO1xuICAgIHN0YXRpYyBnZXQgPSBodHRwLmdldC5iaW5kKGh0dHApO1xuICAgIHN0YXRpYyBwb3N0ID0gaHR0cC5nZXQuYmluZChodHRwKTtcbn0iXX0=