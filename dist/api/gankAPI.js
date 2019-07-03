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
         * @Description: 获取某日数据
         */

    }, {
        key: 'getDayNews',
        value: function getDayNews(date) {
            var url = this.baseUrl + '/api/day/' + date;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbmtBUEkuanMiXSwibmFtZXMiOlsiR2Fua0FQSSIsInVybCIsImJhc2VVcmwiLCJnZXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJkYXRlIiwiY2F0b3J5IiwicGFnZSIsImJhc2VBUEkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7OztBQUNqQjs7O3VDQUd1QjtBQUNuQixnQkFBTUMsTUFBUyxLQUFLQyxPQUFkLGVBQU47QUFDQSxtQkFBTyxLQUFLQyxHQUFMLENBQVNGLEdBQVQsRUFBYyxFQUFkLEVBQWtCRyxJQUFsQixDQUF1QixnQkFBUTtBQUNsQ0Msd0JBQVFDLEdBQVIsQ0FBWUMsSUFBWjtBQUNBLHVCQUFPQSxJQUFQO0FBQ0gsYUFITSxDQUFQO0FBS0g7O0FBRUQ7Ozs7OzttQ0FHbUJDLEksRUFBTTtBQUNyQixnQkFBTVAsTUFBUyxLQUFLQyxPQUFkLGlCQUFpQ00sSUFBdkM7QUFDQSxtQkFBTyxLQUFLTCxHQUFMLENBQVNGLEdBQVQsRUFBYyxFQUFkLEVBQWtCRyxJQUFsQixDQUF1QixnQkFBUTtBQUNsQ0Msd0JBQVFDLEdBQVIsQ0FBWUMsSUFBWjtBQUNBLHVCQUFPQSxJQUFQO0FBQ0gsYUFITSxDQUFQO0FBS0g7QUFDRDs7Ozs7O3NDQUdzQkUsTSxFQUFRQyxJLEVBQU07QUFDaEMsZ0JBQU1ULE1BQVMsS0FBS0MsT0FBZCxrQkFBa0NPLE1BQWxDLFlBQStDQyxJQUFyRDtBQUNBLG1CQUFPLEtBQUtQLEdBQUwsQ0FBU0YsR0FBVCxFQUFjLEVBQWQsRUFBa0JHLElBQWxCLENBQXVCLGdCQUFRO0FBQ2xDQyx3QkFBUUMsR0FBUixDQUFZQyxJQUFaO0FBQ0EsdUJBQU9BLElBQVA7QUFDSCxhQUhNLENBQVA7QUFJSDs7OztFQWpDZ0NJLGlCOztrQkFBaEJYLE8iLCJmaWxlIjoiZ2Fua0FQSS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGJhc2VBUEkgZnJvbSAnLi9iYXNlQVBJJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2Fua0FQSSBleHRlbmRzIGJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIEBEZXNjcmlwdGlvbjog6I635Y+W5LuK5pel5pyA5pawXG4gICAgICovXG4gICAgc3RhdGljIGdldFRvZGF5TmV3cyAoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vYXBpL3RvZGF5YDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHVybCwge30pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQERlc2NyaXB0aW9uOiDojrflj5bmn5Dml6XmlbDmja5cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0RGF5TmV3cyAoZGF0ZSkge1xuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2FwaS9kYXkvJHtkYXRlfWA7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCh1cmwsIHt9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cbiAgICAvKipcbiAgICAgKiBARGVzY3JpcHRpb246IOiOt+WPluWIhuexu+aVsOaNrlxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDYXRvcnlOZXdzIChjYXRvcnksIHBhZ2UpIHtcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfS9hcGkvZGF0YS8ke2NhdG9yeX0vMjAvJHtwYWdlfWA7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCh1cmwsIHt9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==