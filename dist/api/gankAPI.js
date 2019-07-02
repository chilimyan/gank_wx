'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseAPI2 = require('./baseAPI.js');

var _baseAPI3 = _interopRequireDefault(_baseAPI2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GankAPI = function (_baseAPI) {
    _inherits(GankAPI, _baseAPI);

    function GankAPI() {
        _classCallCheck(this, GankAPI);

        return _possibleConstructorReturn(this, (GankAPI.__proto__ || Object.getPrototypeOf(GankAPI)).apply(this, arguments));
    }

    _createClass(GankAPI, null, [{
        key: 'getTodayNews',

        /**
         * @Description: 获取今日最新
         */
        value: function getTodayNews() {
            var url = this.baseUrl + '/api/today';
            return this.get(url, {}).then(function (data) {
                console.log(data);
                return data;
            });
        }
        /**
         * @Description: 获取分类数据
         */

    }, {
        key: 'getCatoryNews',
        value: function getCatoryNews(catory, page) {
            var url = this.baseUrl + '/api/data/' + catory + '/20/' + page;
            return this.get(url, {}).then(function (data) {
                console.log(data);
                return data;
            });
        }
    }]);

    return GankAPI;
}(_baseAPI3.default);

exports.default = GankAPI;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbmtBUEkuanMiXSwibmFtZXMiOlsiR2Fua0FQSSIsInVybCIsImJhc2VVcmwiLCJnZXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRvcnkiLCJwYWdlIiwiYmFzZUFQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7dUNBR3VCO0FBQ25CLGdCQUFNQyxNQUFTLEtBQUtDLE9BQWQsZUFBTjtBQUNBLG1CQUFPLEtBQUtDLEdBQUwsQ0FBU0YsR0FBVCxFQUFjLEVBQWQsRUFBa0JHLElBQWxCLENBQXVCLGdCQUFRO0FBQ2xDQyx3QkFBUUMsR0FBUixDQUFZQyxJQUFaO0FBQ0EsdUJBQU9BLElBQVA7QUFDSCxhQUhNLENBQVA7QUFLSDtBQUNEOzs7Ozs7c0NBR3NCQyxNLEVBQVFDLEksRUFBTTtBQUNoQyxnQkFBTVIsTUFBUyxLQUFLQyxPQUFkLGtCQUFrQ00sTUFBbEMsWUFBK0NDLElBQXJEO0FBQ0EsbUJBQU8sS0FBS04sR0FBTCxDQUFTRixHQUFULEVBQWMsRUFBZCxFQUFrQkcsSUFBbEIsQ0FBdUIsZ0JBQVE7QUFDbENDLHdCQUFRQyxHQUFSLENBQVlDLElBQVo7QUFDQSx1QkFBT0EsSUFBUDtBQUNILGFBSE0sQ0FBUDtBQUlIOzs7O0VBckJnQ0csaUI7O2tCQUFoQlYsTyIsImZpbGUiOiJnYW5rQVBJLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgYmFzZUFQSSBmcm9tICcuL2Jhc2VBUEknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW5rQVBJIGV4dGVuZHMgYmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogQERlc2NyaXB0aW9uOiDojrflj5bku4rml6XmnIDmlrBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0VG9kYXlOZXdzICgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfS9hcGkvdG9kYXlgO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodXJsLCB7fSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG4gICAgLyoqXG4gICAgICogQERlc2NyaXB0aW9uOiDojrflj5bliIbnsbvmlbDmja5cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q2F0b3J5TmV3cyAoY2F0b3J5LCBwYWdlKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vYXBpL2RhdGEvJHtjYXRvcnl9LzIwLyR7cGFnZX1gO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodXJsLCB7fSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=