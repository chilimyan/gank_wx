'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CatgoryBar = function (_wepy$component) {
    _inherits(CatgoryBar, _wepy$component);

    function CatgoryBar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CatgoryBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CatgoryBar.__proto__ || Object.getPrototypeOf(CatgoryBar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
            catgoryList: [{ name: '全部',
                id: 'all' }, { name: 'iOS',
                id: 'iOS' }, { name: 'Android',
                id: 'Android' }, { name: 'App',
                id: 'App' }, { name: '前端',
                id: '前端' }, { name: '拓展资源',
                id: '拓展资源' }, { name: '休息视频',
                id: '休息视频' }, { name: '瞎推荐',
                id: '瞎推荐' }],
            currentId: 'all'
        }, _this.methods = {
            selectType: function selectType(id) {
                this.currentId = id;
                this.$emit('select', this.currentId);
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CatgoryBar, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return CatgoryBar;
}(_wepy2.default.component);

exports.default = CatgoryBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdG9yeUJhci5qcyJdLCJuYW1lcyI6WyJDYXRnb3J5QmFyIiwicHJvcHMiLCJkYXRhIiwiY2F0Z29yeUxpc3QiLCJuYW1lIiwiaWQiLCJjdXJyZW50SWQiLCJtZXRob2RzIiwic2VsZWN0VHlwZSIsIiRlbWl0IiwiJGFwcGx5Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7a01BQ2pCQyxLLEdBQVEsRSxRQUdSQyxJLEdBQU87QUFDSEMseUJBQVksQ0FDUixFQUFDQyxNQUFNLElBQVA7QUFDQUMsb0JBQUcsS0FESCxFQURRLEVBR1IsRUFBQ0QsTUFBTSxLQUFQO0FBQ0FDLG9CQUFHLEtBREgsRUFIUSxFQUtSLEVBQUNELE1BQU0sU0FBUDtBQUNBQyxvQkFBSSxTQURKLEVBTFEsRUFPUixFQUFDRCxNQUFNLEtBQVA7QUFDQUMsb0JBQUksS0FESixFQVBRLEVBU1IsRUFBQ0QsTUFBTSxJQUFQO0FBQ0FDLG9CQUFJLElBREosRUFUUSxFQVdSLEVBQUNELE1BQU0sTUFBUDtBQUNBQyxvQkFBSSxNQURKLEVBWFEsRUFhUixFQUFDRCxNQUFNLE1BQVA7QUFDQUMsb0JBQUksTUFESixFQWJRLEVBZVIsRUFBQ0QsTUFBTSxLQUFQO0FBQ0FDLG9CQUFJLEtBREosRUFmUSxDQURUO0FBa0JIQyx1QkFBVztBQWxCUixTLFFBeUJQQyxPLEdBQVU7QUFDUkMsc0JBRFEsc0JBQ0dILEVBREgsRUFDTztBQUNULHFCQUFLQyxTQUFMLEdBQWlCRCxFQUFqQjtBQUNBLHFCQUFLSSxLQUFMLENBQVcsUUFBWCxFQUFxQixLQUFLSCxTQUExQjtBQUNBLHFCQUFLSSxNQUFMO0FBQ0g7QUFMSyxTOzs7OztpQ0FKRCxDQUVSOzs7O0VBM0JtQ0MsZUFBS0MsUzs7a0JBQXhCWixVIiwiZmlsZSI6ImNhdG9yeUJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGdvcnlCYXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgY2F0Z29yeUxpc3Q6W1xuICAgICAgICAgICAge25hbWU6ICflhajpg6gnLFxuICAgICAgICAgICAgaWQ6J2FsbCd9LFxuICAgICAgICAgICAge25hbWU6ICdpT1MnLFxuICAgICAgICAgICAgaWQ6J2lPUyd9LFxuICAgICAgICAgICAge25hbWU6ICdBbmRyb2lkJyxcbiAgICAgICAgICAgIGlkOiAnQW5kcm9pZCd9LFxuICAgICAgICAgICAge25hbWU6ICdBcHAnLFxuICAgICAgICAgICAgaWQ6ICdBcHAnfSxcbiAgICAgICAgICAgIHtuYW1lOiAn5YmN56uvJyxcbiAgICAgICAgICAgIGlkOiAn5YmN56uvJ30sXG4gICAgICAgICAgICB7bmFtZTogJ+aLk+Wxlei1hOa6kCcsXG4gICAgICAgICAgICBpZDogJ+aLk+Wxlei1hOa6kCd9LFxuICAgICAgICAgICAge25hbWU6ICfkvJHmga/op4bpopEnLFxuICAgICAgICAgICAgaWQ6ICfkvJHmga/op4bpopEnfSxcbiAgICAgICAgICAgIHtuYW1lOiAn556O5o6o6I2QJyxcbiAgICAgICAgICAgIGlkOiAn556O5o6o6I2QJ31dLFxuICAgICAgICBjdXJyZW50SWQ6ICdhbGwnLFxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNlbGVjdFR5cGUoaWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudElkID0gaWQ7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCB0aGlzLmN1cnJlbnRJZCk7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19